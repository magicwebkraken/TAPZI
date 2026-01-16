"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6708],
  {
    5196: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    5845: (e, t, n) => {
      n.d(t, { i: () => l });
      var r,
        o = n(12115),
        a = n(52712),
        i =
          (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          a.N;
      function l({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [a, l, u] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = o.useState(e),
              a = o.useRef(n),
              l = o.useRef(t);
            return (
              i(() => {
                l.current = t;
              }, [t]),
              o.useEffect(() => {
                a.current !== n && (l.current?.(n), (a.current = n));
              }, [n, a]),
              [n, r, l]
            );
          })({ defaultProp: t, onChange: n }),
          c = void 0 !== e,
          s = c ? e : a;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== c) {
              let t = c ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${
                  e ? "controlled" : "uncontrolled"
                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            t.current = c;
          }, [c, r]);
        }
        return [
          s,
          o.useCallback(
            (t) => {
              if (c) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && u.current?.(n);
              } else l(t);
            },
            [c, e, l, u]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    11066: (e, t, n) => {
      n.d(t, {
        UC: () => eQ,
        In: () => eZ,
        q7: () => e1,
        VF: () => e5,
        p4: () => e2,
        ZL: () => eJ,
        bL: () => eK,
        wn: () => e6,
        PP: () => e3,
        l9: () => eX,
        WT: () => e$,
        LM: () => e0,
      });
      var r = n(12115),
        o = n(47650),
        a = n(89367),
        i = n(85185),
        l = n(37328),
        u = n(6101),
        c = n(46081),
        s = n(94315),
        d = n(58434),
        f = n(92293),
        p = n(25519),
        m = n(61285),
        h = n(84945),
        v = n(22475),
        g = n(82391),
        y = n(63655),
        w = n(39033),
        b = n(52712),
        x = n(11275),
        E = n(95155),
        R = "Popper",
        [C, S] = (0, c.A)(R),
        [T, A] = C(R),
        N = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, a] = r.useState(null);
          return (0, E.jsx)(T, {
            scope: t,
            anchor: o,
            onAnchorChange: a,
            children: n,
          });
        };
      N.displayName = R;
      var P = "PopperAnchor",
        j = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...a } = e,
            i = A(P, n),
            l = r.useRef(null),
            c = (0, u.s)(t, l);
          return (
            r.useEffect(() => {
              i.onAnchorChange((null == o ? void 0 : o.current) || l.current);
            }),
            o ? null : (0, E.jsx)(y.sG.div, { ...a, ref: c })
          );
        });
      j.displayName = P;
      var O = "PopperContent",
        [D, k] = C(O),
        _ = r.forwardRef((e, t) => {
          var n, o, a, i, l, c, s, d;
          let {
              __scopePopper: f,
              side: p = "bottom",
              sideOffset: m = 0,
              align: g = "center",
              alignOffset: R = 0,
              arrowPadding: C = 0,
              avoidCollisions: S = !0,
              collisionBoundary: T = [],
              collisionPadding: N = 0,
              sticky: P = "partial",
              hideWhenDetached: j = !1,
              updatePositionStrategy: k = "optimized",
              onPlaced: _,
              ...M
            } = e,
            L = A(O, f),
            [I, H] = r.useState(null),
            U = (0, u.s)(t, (e) => H(e)),
            [z, q] = r.useState(null),
            V = (0, x.X)(z),
            G = null != (s = null == V ? void 0 : V.width) ? s : 0,
            Y = null != (d = null == V ? void 0 : V.height) ? d : 0,
            K =
              "number" == typeof N
                ? N
                : { top: 0, right: 0, bottom: 0, left: 0, ...N },
            X = Array.isArray(T) ? T : [T],
            $ = X.length > 0,
            Z = { padding: K, boundary: X.filter(F), altBoundary: $ },
            {
              refs: J,
              floatingStyles: Q,
              placement: ee,
              isPositioned: et,
              middlewareData: en,
            } = (0, h.we)({
              strategy: "fixed",
              placement: p + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (0, v.ll)(...t, { animationFrame: "always" === k });
              },
              elements: { reference: L.anchor },
              middleware: [
                (0, h.cY)({ mainAxis: m + Y, alignmentAxis: R }),
                S &&
                  (0, h.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === P ? (0, h.ER)() : void 0,
                    ...Z,
                  }),
                S && (0, h.UU)({ ...Z }),
                (0, h.Ej)({
                  ...Z,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: a, height: i } = n.reference,
                      l = t.floating.style;
                    l.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      l.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(a, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(i, "px")
                      );
                  },
                }),
                z && (0, h.UE)({ element: z, padding: C }),
                B({ arrowWidth: G, arrowHeight: Y }),
                j && (0, h.jD)({ strategy: "referenceHidden", ...Z }),
              ],
            }),
            [er, eo] = W(ee),
            ea = (0, w.c)(_);
          (0, b.N)(() => {
            et && (null == ea || ea());
          }, [et, ea]);
          let ei = null == (n = en.arrow) ? void 0 : n.x,
            el = null == (o = en.arrow) ? void 0 : o.y,
            eu = (null == (a = en.arrow) ? void 0 : a.centerOffset) !== 0,
            [ec, es] = r.useState();
          return (
            (0, b.N)(() => {
              I && es(window.getComputedStyle(I).zIndex);
            }, [I]),
            (0, E.jsx)("div", {
              ref: J.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Q,
                transform: et ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ec,
                "--radix-popper-transform-origin": [
                  null == (i = en.transformOrigin) ? void 0 : i.x,
                  null == (l = en.transformOrigin) ? void 0 : l.y,
                ].join(" "),
                ...((null == (c = en.hide) ? void 0 : c.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, E.jsx)(D, {
                scope: f,
                placedSide: er,
                onArrowChange: q,
                arrowX: ei,
                arrowY: el,
                shouldHideArrow: eu,
                children: (0, E.jsx)(y.sG.div, {
                  "data-side": er,
                  "data-align": eo,
                  ...M,
                  ref: U,
                  style: { ...M.style, animation: et ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      _.displayName = O;
      var M = "PopperArrow",
        L = { top: "bottom", right: "left", bottom: "top", left: "right" },
        I = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = k(M, n),
            a = L[o.placedSide];
          return (0,
          E.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, E.jsx)(g.b, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function F(e) {
        return null !== e;
      }
      I.displayName = M;
      var B = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, a, i;
          let { placement: l, rects: u, middlewareData: c } = t,
            s = (null == (n = c.arrow) ? void 0 : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, m] = W(l),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null != (a = null == (r = c.arrow) ? void 0 : r.x) ? a : 0) +
              d / 2,
            g =
              (null != (i = null == (o = c.arrow) ? void 0 : o.y) ? i : 0) +
              f / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = s ? h : "".concat(v, "px")), (w = "".concat(-f, "px")))
              : "top" === p
              ? ((y = s ? h : "".concat(v, "px")),
                (w = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (w = s ? h : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(u.floating.width + f, "px")),
                (w = s ? h : "".concat(g, "px"))),
            { data: { x: y, y: w } }
          );
        },
      });
      function W(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var H = n(34378),
        U = n(99708),
        z = n(5845),
        q = n(45503),
        V = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        });
      r.forwardRef((e, t) =>
        (0, E.jsx)(y.sG.span, { ...e, ref: t, style: { ...V, ...e.style } })
      ).displayName = "VisuallyHidden";
      var G = n(38168),
        Y = n(31114),
        K = [" ", "Enter", "ArrowUp", "ArrowDown"],
        X = [" ", "Enter"],
        $ = "Select",
        [Z, J, Q] = (0, l.N)($),
        [ee, et] = (0, c.A)($, [Q, S]),
        en = S(),
        [er, eo] = ee($),
        [ea, ei] = ee($),
        el = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              value: l,
              defaultValue: u,
              onValueChange: c,
              dir: d,
              name: f,
              autoComplete: p,
              disabled: h,
              required: v,
              form: g,
            } = e,
            y = en(t),
            [w, b] = r.useState(null),
            [x, R] = r.useState(null),
            [C, S] = r.useState(!1),
            T = (0, s.jH)(d),
            [A, P] = (0, z.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: i,
              caller: $,
            }),
            [j, O] = (0, z.i)({
              prop: l,
              defaultProp: u,
              onChange: c,
              caller: $,
            }),
            D = r.useRef(null),
            k = !w || g || !!w.closest("form"),
            [_, M] = r.useState(new Set()),
            L = Array.from(_)
              .map((e) => e.props.value)
              .join(";");
          return (0, E.jsx)(N, {
            ...y,
            children: (0, E.jsxs)(er, {
              required: v,
              scope: t,
              trigger: w,
              onTriggerChange: b,
              valueNode: x,
              onValueNodeChange: R,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: S,
              contentId: (0, m.B)(),
              value: j,
              onValueChange: O,
              open: A,
              onOpenChange: P,
              dir: T,
              triggerPointerDownPosRef: D,
              disabled: h,
              children: [
                (0, E.jsx)(Z.Provider, {
                  scope: t,
                  children: (0, E.jsx)(ea, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback((e) => {
                      M((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback((e) => {
                      M((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                k
                  ? (0, E.jsxs)(
                      eq,
                      {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: j,
                        onChange: (e) => O(e.target.value),
                        disabled: h,
                        form: g,
                        children: [
                          void 0 === j
                            ? (0, E.jsx)("option", { value: "" })
                            : null,
                          Array.from(_),
                        ],
                      },
                      L
                    )
                  : null,
              ],
            }),
          });
        };
      el.displayName = $;
      var eu = "SelectTrigger",
        ec = r.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: o = !1, ...a } = e,
            l = en(n),
            c = eo(eu, n),
            s = c.disabled || o,
            d = (0, u.s)(t, c.onTriggerChange),
            f = J(n),
            p = r.useRef("touch"),
            [m, h, v] = eG((e) => {
              let t = f().filter((e) => !e.disabled),
                n = t.find((e) => e.value === c.value),
                r = eY(t, e, n);
              void 0 !== r && c.onValueChange(r.value);
            }),
            g = (e) => {
              s || (c.onOpenChange(!0), v()),
                e &&
                  (c.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, E.jsx)(j, {
            asChild: !0,
            ...l,
            children: (0, E.jsx)(y.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": c.contentId,
              "aria-expanded": c.open,
              "aria-required": c.required,
              "aria-autocomplete": "none",
              dir: c.dir,
              "data-state": c.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": eV(c.value) ? "" : void 0,
              ...a,
              ref: d,
              onClick: (0, i.m)(a.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && g(e);
              }),
              onPointerDown: (0, i.m)(a.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (g(e), e.preventDefault());
              }),
              onKeyDown: (0, i.m)(a.onKeyDown, (e) => {
                let t = "" !== m.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  h(e.key),
                  (!t || " " !== e.key) &&
                    K.includes(e.key) &&
                    (g(), e.preventDefault());
              }),
            }),
          });
        });
      ec.displayName = eu;
      var es = "SelectValue",
        ed = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: a,
              placeholder: i = "",
              ...l
            } = e,
            c = eo(es, n),
            { onValueNodeHasChildrenChange: s } = c,
            d = void 0 !== a,
            f = (0, u.s)(t, c.onValueNodeChange);
          return (
            (0, b.N)(() => {
              s(d);
            }, [s, d]),
            (0, E.jsx)(y.sG.span, {
              ...l,
              ref: f,
              style: { pointerEvents: "none" },
              children: eV(c.value)
                ? (0, E.jsx)(E.Fragment, { children: i })
                : a,
            })
          );
        });
      ed.displayName = es;
      var ef = r.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, E.jsx)(y.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      ef.displayName = "SelectIcon";
      var ep = (e) => (0, E.jsx)(H.Z, { asChild: !0, ...e });
      ep.displayName = "SelectPortal";
      var em = "SelectContent",
        eh = r.forwardRef((e, t) => {
          let n = eo(em, e.__scopeSelect),
            [a, i] = r.useState();
          return ((0, b.N)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, E.jsx)(ew, { ...e, ref: t })
            : a
            ? o.createPortal(
                (0, E.jsx)(ev, {
                  scope: e.__scopeSelect,
                  children: (0, E.jsx)(Z.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, E.jsx)("div", { children: e.children }),
                  }),
                }),
                a
              )
            : null;
        });
      eh.displayName = em;
      var [ev, eg] = ee(em),
        ey = (0, U.TL)("SelectContent.RemoveScroll"),
        ew = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: o = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: c,
              side: s,
              sideOffset: m,
              align: h,
              alignOffset: v,
              arrowPadding: g,
              collisionBoundary: y,
              collisionPadding: w,
              sticky: b,
              hideWhenDetached: x,
              avoidCollisions: R,
              ...C
            } = e,
            S = eo(em, n),
            [T, A] = r.useState(null),
            [N, P] = r.useState(null),
            j = (0, u.s)(t, (e) => A(e)),
            [O, D] = r.useState(null),
            [k, _] = r.useState(null),
            M = J(n),
            [L, I] = r.useState(!1),
            F = r.useRef(!1);
          r.useEffect(() => {
            if (T) return (0, G.Eq)(T);
          }, [T]),
            (0, f.Oh)();
          let B = r.useCallback(
              (e) => {
                let [t, ...n] = M().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && N && (N.scrollTop = 0),
                    n === r && N && (N.scrollTop = N.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [M, N]
            ),
            W = r.useCallback(() => B([O, T]), [B, O, T]);
          r.useEffect(() => {
            L && W();
          }, [L, W]);
          let { onOpenChange: H, triggerPointerDownPosRef: U } = S;
          r.useEffect(() => {
            if (T) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, a;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null != (o = null == (n = U.current) ? void 0 : n.x)
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null != (a = null == (r = U.current) ? void 0 : r.y)
                          ? a
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : T.contains(n.target) || H(!1),
                    document.removeEventListener("pointermove", t),
                    (U.current = null);
                };
              return (
                null !== U.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [T, H, U]),
            r.useEffect(() => {
              let e = () => H(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [H]);
          let [z, q] = eG((e) => {
              let t = M().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = eY(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            V = r.useCallback(
              (e, t, n) => {
                let r = !F.current && !n;
                ((void 0 !== S.value && S.value === t) || r) &&
                  (D(e), r && (F.current = !0));
              },
              [S.value]
            ),
            K = r.useCallback(() => (null == T ? void 0 : T.focus()), [T]),
            X = r.useCallback(
              (e, t, n) => {
                let r = !F.current && !n;
                ((void 0 !== S.value && S.value === t) || r) && _(e);
              },
              [S.value]
            ),
            $ = "popper" === o ? ex : eb,
            Z =
              $ === ex
                ? {
                    side: s,
                    sideOffset: m,
                    align: h,
                    alignOffset: v,
                    arrowPadding: g,
                    collisionBoundary: y,
                    collisionPadding: w,
                    sticky: b,
                    hideWhenDetached: x,
                    avoidCollisions: R,
                  }
                : {};
          return (0, E.jsx)(ev, {
            scope: n,
            content: T,
            viewport: N,
            onViewportChange: P,
            itemRefCallback: V,
            selectedItem: O,
            onItemLeave: K,
            itemTextRefCallback: X,
            focusSelectedItem: W,
            selectedItemText: k,
            position: o,
            isPositioned: L,
            searchRef: z,
            children: (0, E.jsx)(Y.A, {
              as: ey,
              allowPinchZoom: !0,
              children: (0, E.jsx)(p.n, {
                asChild: !0,
                trapped: S.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, i.m)(a, (e) => {
                  var t;
                  null == (t = S.trigger) || t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, E.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: c,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => S.onOpenChange(!1),
                  children: (0, E.jsx)($, {
                    role: "listbox",
                    id: S.contentId,
                    "data-state": S.open ? "open" : "closed",
                    dir: S.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...C,
                    ...Z,
                    onPlaced: () => I(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...C.style,
                    },
                    onKeyDown: (0, i.m)(C.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || q(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = M()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => B(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ew.displayName = "SelectContentImpl";
      var eb = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: o, ...i } = e,
          l = eo(em, n),
          c = eg(em, n),
          [s, d] = r.useState(null),
          [f, p] = r.useState(null),
          m = (0, u.s)(t, (e) => p(e)),
          h = J(n),
          v = r.useRef(!1),
          g = r.useRef(!0),
          {
            viewport: w,
            selectedItem: x,
            selectedItemText: R,
            focusSelectedItem: C,
          } = c,
          S = r.useCallback(() => {
            if (l.trigger && l.valueNode && s && f && w && x && R) {
              let e = l.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                n = l.valueNode.getBoundingClientRect(),
                r = R.getBoundingClientRect();
              if ("rtl" !== l.dir) {
                let o = r.left - t.left,
                  i = n.left - o,
                  l = e.left - i,
                  u = e.width + l,
                  c = Math.max(u, t.width),
                  d = window.innerWidth - 10,
                  f = (0, a.q)(i, [10, Math.max(10, d - c)]);
                (s.style.minWidth = u + "px"), (s.style.left = f + "px");
              } else {
                let o = t.right - r.right,
                  i = window.innerWidth - n.right - o,
                  l = window.innerWidth - e.right - i,
                  u = e.width + l,
                  c = Math.max(u, t.width),
                  d = window.innerWidth - 10,
                  f = (0, a.q)(i, [10, Math.max(10, d - c)]);
                (s.style.minWidth = u + "px"), (s.style.right = f + "px");
              }
              let i = h(),
                u = window.innerHeight - 20,
                c = w.scrollHeight,
                d = window.getComputedStyle(f),
                p = parseInt(d.borderTopWidth, 10),
                m = parseInt(d.paddingTop, 10),
                g = parseInt(d.borderBottomWidth, 10),
                y = p + m + c + parseInt(d.paddingBottom, 10) + g,
                b = Math.min(5 * x.offsetHeight, y),
                E = window.getComputedStyle(w),
                C = parseInt(E.paddingTop, 10),
                S = parseInt(E.paddingBottom, 10),
                T = e.top + e.height / 2 - 10,
                A = x.offsetHeight / 2,
                N = p + m + (x.offsetTop + A);
              if (N <= T) {
                let e = i.length > 0 && x === i[i.length - 1].ref.current;
                s.style.bottom = "0px";
                let t = Math.max(
                  u - T,
                  A +
                    (e ? S : 0) +
                    (f.clientHeight - w.offsetTop - w.offsetHeight) +
                    g
                );
                s.style.height = N + t + "px";
              } else {
                let e = i.length > 0 && x === i[0].ref.current;
                s.style.top = "0px";
                let t = Math.max(T, p + w.offsetTop + (e ? C : 0) + A);
                (s.style.height = t + (y - N) + "px"),
                  (w.scrollTop = N - T + w.offsetTop);
              }
              (s.style.margin = "".concat(10, "px 0")),
                (s.style.minHeight = b + "px"),
                (s.style.maxHeight = u + "px"),
                null == o || o(),
                requestAnimationFrame(() => (v.current = !0));
            }
          }, [h, l.trigger, l.valueNode, s, f, w, x, R, l.dir, o]);
        (0, b.N)(() => S(), [S]);
        let [T, A] = r.useState();
        (0, b.N)(() => {
          f && A(window.getComputedStyle(f).zIndex);
        }, [f]);
        let N = r.useCallback(
          (e) => {
            e && !0 === g.current && (S(), null == C || C(), (g.current = !1));
          },
          [S, C]
        );
        return (0, E.jsx)(eE, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: N,
          children: (0, E.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: T,
            },
            children: (0, E.jsx)(y.sG.div, {
              ...i,
              ref: m,
              style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
            }),
          }),
        });
      });
      eb.displayName = "SelectItemAlignedPosition";
      var ex = r.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...a
          } = e,
          i = en(n);
        return (0, E.jsx)(_, {
          ...i,
          ...a,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      ex.displayName = "SelectPopperPosition";
      var [eE, eR] = ee(em, {}),
        eC = "SelectViewport",
        eS = r.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: o, ...a } = e,
            l = eg(eC, n),
            c = eR(eC, n),
            s = (0, u.s)(t, l.onViewportChange),
            d = r.useRef(0);
          return (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: o,
              }),
              (0, E.jsx)(Z.Slot, {
                scope: n,
                children: (0, E.jsx)(y.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...a,
                  ref: s,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style,
                  },
                  onScroll: (0, i.m)(a.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = c;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let a = o + e,
                            i = Math.min(r, a),
                            l = a - i;
                          (n.style.height = i + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = l > 0 ? l : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    d.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eS.displayName = eC;
      var eT = "SelectGroup",
        [eA, eN] = ee(eT);
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = (0, m.B)();
        return (0, E.jsx)(eA, {
          scope: n,
          id: o,
          children: (0, E.jsx)(y.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t,
          }),
        });
      }).displayName = eT;
      var eP = "SelectLabel";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = eN(eP, n);
        return (0, E.jsx)(y.sG.div, { id: o.id, ...r, ref: t });
      }).displayName = eP;
      var ej = "SelectItem",
        [eO, eD] = ee(ej),
        ek = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: o,
              disabled: a = !1,
              textValue: l,
              ...c
            } = e,
            s = eo(ej, n),
            d = eg(ej, n),
            f = s.value === o,
            [p, h] = r.useState(null != l ? l : ""),
            [v, g] = r.useState(!1),
            w = (0, u.s)(t, (e) => {
              var t;
              return null == (t = d.itemRefCallback)
                ? void 0
                : t.call(d, e, o, a);
            }),
            b = (0, m.B)(),
            x = r.useRef("touch"),
            R = () => {
              a || (s.onValueChange(o), s.onOpenChange(!1));
            };
          if ("" === o)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, E.jsx)(eO, {
            scope: n,
            value: o,
            disabled: a,
            textId: b,
            isSelected: f,
            onItemTextChange: r.useCallback((e) => {
              h((t) => {
                var n;
                return (
                  t ||
                  (null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, E.jsx)(Z.ItemSlot, {
              scope: n,
              value: o,
              disabled: a,
              textValue: p,
              children: (0, E.jsx)(y.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": f && v,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...c,
                ref: w,
                onFocus: (0, i.m)(c.onFocus, () => g(!0)),
                onBlur: (0, i.m)(c.onBlur, () => g(!1)),
                onClick: (0, i.m)(c.onClick, () => {
                  "mouse" !== x.current && R();
                }),
                onPointerUp: (0, i.m)(c.onPointerUp, () => {
                  "mouse" === x.current && R();
                }),
                onPointerDown: (0, i.m)(c.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, i.m)(c.onPointerMove, (e) => {
                  if (((x.current = e.pointerType), a)) {
                    var t;
                    null == (t = d.onItemLeave) || t.call(d);
                  } else
                    "mouse" === x.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, i.m)(c.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null == (t = d.onItemLeave) || t.call(d);
                  }
                }),
                onKeyDown: (0, i.m)(c.onKeyDown, (e) => {
                  var t;
                  ((null == (t = d.searchRef) ? void 0 : t.current) === "" ||
                    " " !== e.key) &&
                    (X.includes(e.key) && R(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      ek.displayName = ej;
      var e_ = "SelectItemText",
        eM = r.forwardRef((e, t) => {
          let { __scopeSelect: n, className: a, style: i, ...l } = e,
            c = eo(e_, n),
            s = eg(e_, n),
            d = eD(e_, n),
            f = ei(e_, n),
            [p, m] = r.useState(null),
            h = (0, u.s)(
              t,
              (e) => m(e),
              d.onItemTextChange,
              (e) => {
                var t;
                return null == (t = s.itemTextRefCallback)
                  ? void 0
                  : t.call(s, e, d.value, d.disabled);
              }
            ),
            v = null == p ? void 0 : p.textContent,
            g = r.useMemo(
              () =>
                (0, E.jsx)(
                  "option",
                  { value: d.value, disabled: d.disabled, children: v },
                  d.value
                ),
              [d.disabled, d.value, v]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: x } = f;
          return (
            (0, b.N)(() => (w(g), () => x(g)), [w, x, g]),
            (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(y.sG.span, { id: d.textId, ...l, ref: h }),
                d.isSelected && c.valueNode && !c.valueNodeHasChildren
                  ? o.createPortal(l.children, c.valueNode)
                  : null,
              ],
            })
          );
        });
      eM.displayName = e_;
      var eL = "SelectItemIndicator",
        eI = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return eD(eL, n).isSelected
            ? (0, E.jsx)(y.sG.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      eI.displayName = eL;
      var eF = "SelectScrollUpButton",
        eB = r.forwardRef((e, t) => {
          let n = eg(eF, e.__scopeSelect),
            o = eR(eF, e.__scopeSelect),
            [a, i] = r.useState(!1),
            l = (0, u.s)(t, o.onScrollButtonChange);
          return (
            (0, b.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, E.jsx)(eU, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      eB.displayName = eF;
      var eW = "SelectScrollDownButton",
        eH = r.forwardRef((e, t) => {
          let n = eg(eW, e.__scopeSelect),
            o = eR(eW, e.__scopeSelect),
            [a, i] = r.useState(!1),
            l = (0, u.s)(t, o.onScrollButtonChange);
          return (
            (0, b.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, E.jsx)(eU, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      eH.displayName = eW;
      var eU = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: o, ...a } = e,
          l = eg("SelectScrollButton", n),
          u = r.useRef(null),
          c = J(n),
          s = r.useCallback(() => {
            null !== u.current &&
              (window.clearInterval(u.current), (u.current = null));
          }, []);
        return (
          r.useEffect(() => () => s(), [s]),
          (0, b.N)(() => {
            var e;
            let t = c().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null == (e = t.ref.current) ||
              e.scrollIntoView({ block: "nearest" });
          }, [c]),
          (0, E.jsx)(y.sG.div, {
            "aria-hidden": !0,
            ...a,
            ref: t,
            style: { flexShrink: 0, ...a.style },
            onPointerDown: (0, i.m)(a.onPointerDown, () => {
              null === u.current && (u.current = window.setInterval(o, 50));
            }),
            onPointerMove: (0, i.m)(a.onPointerMove, () => {
              var e;
              null == (e = l.onItemLeave) || e.call(l),
                null === u.current && (u.current = window.setInterval(o, 50));
            }),
            onPointerLeave: (0, i.m)(a.onPointerLeave, () => {
              s();
            }),
          })
        );
      });
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, E.jsx)(y.sG.div, { "aria-hidden": !0, ...r, ref: t });
      }).displayName = "SelectSeparator";
      var ez = "SelectArrow";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = en(n),
          a = eo(ez, n),
          i = eg(ez, n);
        return a.open && "popper" === i.position
          ? (0, E.jsx)(I, { ...o, ...r, ref: t })
          : null;
      }).displayName = ez;
      var eq = r.forwardRef((e, t) => {
        let { __scopeSelect: n, value: o, ...a } = e,
          i = r.useRef(null),
          l = (0, u.s)(t, i),
          c = (0, q.Z)(o);
        return (
          r.useEffect(() => {
            let e = i.current;
            if (!e) return;
            let t = Object.getOwnPropertyDescriptor(
              window.HTMLSelectElement.prototype,
              "value"
            ).set;
            if (c !== o && t) {
              let n = new Event("change", { bubbles: !0 });
              t.call(e, o), e.dispatchEvent(n);
            }
          }, [c, o]),
          (0, E.jsx)(y.sG.select, {
            ...a,
            style: { ...V, ...a.style },
            ref: l,
            defaultValue: o,
          })
        );
      });
      function eV(e) {
        return "" === e || void 0 === e;
      }
      function eG(e) {
        let t = (0, w.c)(e),
          n = r.useRef(""),
          o = r.useRef(0),
          a = r.useCallback(
            (e) => {
              let r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(o.current),
                    "" !== t &&
                      (o.current = window.setTimeout(() => e(""), 1e3));
                })(r);
            },
            [t]
          ),
          i = r.useCallback(() => {
            (n.current = ""), window.clearTimeout(o.current);
          }, []);
        return (
          r.useEffect(() => () => window.clearTimeout(o.current), []), [n, a, i]
        );
      }
      function eY(e, t, n) {
        var r, o;
        let a =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i = n ? e.indexOf(n) : -1,
          l =
            ((r = e),
            (o = Math.max(i, 0)),
            r.map((e, t) => r[(o + t) % r.length]));
        1 === a.length && (l = l.filter((e) => e !== n));
        let u = l.find((e) =>
          e.textValue.toLowerCase().startsWith(a.toLowerCase())
        );
        return u !== n ? u : void 0;
      }
      eq.displayName = "SelectBubbleInput";
      var eK = el,
        eX = ec,
        e$ = ed,
        eZ = ef,
        eJ = ep,
        eQ = eh,
        e0 = eS,
        e1 = ek,
        e2 = eM,
        e5 = eI,
        e3 = eB,
        e6 = eH;
    },
    11275: (e, t, n) => {
      n.d(t, { X: () => a });
      var r = n(12115),
        o = n(52712);
      function a(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let a = t[0];
                if ("borderBoxSize" in a) {
                  let e = a.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    15452: (e, t, n) => {
      n.d(t, {
        UC: () => en,
        VY: () => eo,
        ZL: () => ee,
        bL: () => J,
        bm: () => ea,
        hE: () => er,
        hJ: () => et,
        l9: () => Q,
      });
      var r = n(12115),
        o = n(85185),
        a = n(6101),
        i = n(46081),
        l = n(61285),
        u = n(5845),
        c = n(58434),
        s = n(25519),
        d = n(34378),
        f = n(28905),
        p = n(63655),
        m = n(92293),
        h = n(31114),
        v = n(38168),
        g = n(99708),
        y = n(95155),
        w = "Dialog",
        [b, x] = (0, i.A)(w),
        [E, R] = b(w),
        C = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              modal: c = !0,
            } = e,
            s = r.useRef(null),
            d = r.useRef(null),
            [f, p] = (0, u.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: i,
              caller: w,
            });
          return (0, y.jsx)(E, {
            scope: t,
            triggerRef: s,
            contentRef: d,
            contentId: (0, l.B)(),
            titleId: (0, l.B)(),
            descriptionId: (0, l.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: n,
          });
        };
      C.displayName = w;
      var S = "DialogTrigger",
        T = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = R(S, n),
            l = (0, a.s)(t, i.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": G(i.open),
            ...r,
            ref: l,
            onClick: (0, o.m)(e.onClick, i.onOpenToggle),
          });
        });
      T.displayName = S;
      var A = "DialogPortal",
        [N, P] = b(A, { forceMount: void 0 }),
        j = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: a,
            } = e,
            i = R(A, t);
          return (0, y.jsx)(N, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, y.jsx)(f.C, {
                present: n || i.open,
                children: (0, y.jsx)(d.Z, {
                  asChild: !0,
                  container: a,
                  children: e,
                }),
              })
            ),
          });
        };
      j.displayName = A;
      var O = "DialogOverlay",
        D = r.forwardRef((e, t) => {
          let n = P(O, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = R(O, e.__scopeDialog);
          return a.modal
            ? (0, y.jsx)(f.C, {
                present: r || a.open,
                children: (0, y.jsx)(_, { ...o, ref: t }),
              })
            : null;
        });
      D.displayName = O;
      var k = (0, g.TL)("DialogOverlay.RemoveScroll"),
        _ = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(O, n);
          return (0, y.jsx)(h.A, {
            as: k,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": G(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        M = "DialogContent",
        L = r.forwardRef((e, t) => {
          let n = P(M, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = R(M, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: r || a.open,
            children: a.modal
              ? (0, y.jsx)(I, { ...o, ref: t })
              : (0, y.jsx)(F, { ...o, ref: t }),
          });
        });
      L.displayName = M;
      var I = r.forwardRef((e, t) => {
          let n = R(M, e.__scopeDialog),
            i = r.useRef(null),
            l = (0, a.s)(t, n.contentRef, i);
          return (
            r.useEffect(() => {
              let e = i.current;
              if (e) return (0, v.Eq)(e);
            }, []),
            (0, y.jsx)(B, {
              ...e,
              ref: l,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null == (t = n.triggerRef.current) || t.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        F = r.forwardRef((e, t) => {
          let n = R(M, e.__scopeDialog),
            o = r.useRef(!1),
            a = r.useRef(!1);
          return (0, y.jsx)(B, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var r, i;
              null == (r = e.onCloseAutoFocus) || r.call(e, t),
                t.defaultPrevented ||
                  (o.current || null == (i = n.triggerRef.current) || i.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              var r, i;
              null == (r = e.onInteractOutside) || r.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (a.current = !0));
              let l = t.target;
              (null == (i = n.triggerRef.current) ? void 0 : i.contains(l)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        B = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: i,
              onCloseAutoFocus: l,
              ...u
            } = e,
            d = R(M, n),
            f = r.useRef(null),
            p = (0, a.s)(t, f);
          return (
            (0, m.Oh)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(s.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: l,
                  children: (0, y.jsx)(c.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": G(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)($, { titleId: d.titleId }),
                    (0, y.jsx)(Z, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        W = "DialogTitle",
        H = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(W, n);
          return (0, y.jsx)(p.sG.h2, { id: o.titleId, ...r, ref: t });
        });
      H.displayName = W;
      var U = "DialogDescription",
        z = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(U, n);
          return (0, y.jsx)(p.sG.p, { id: o.descriptionId, ...r, ref: t });
        });
      z.displayName = U;
      var q = "DialogClose",
        V = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            a = R(q, n);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => a.onOpenChange(!1)),
          });
        });
      function G(e) {
        return e ? "open" : "closed";
      }
      V.displayName = q;
      var Y = "DialogTitleWarning",
        [K, X] = (0, i.q)(Y, {
          contentName: M,
          titleName: W,
          docsSlug: "dialog",
        }),
        $ = (e) => {
          let { titleId: t } = e,
            n = X(Y),
            o = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            r.useEffect(() => {
              t && (document.getElementById(t) || console.error(o));
            }, [o, t]),
            null
          );
        },
        Z = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            o = X("DialogDescriptionWarning"),
            a =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              );
          return (
            r.useEffect(() => {
              var e;
              let r =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && (document.getElementById(n) || console.warn(a));
            }, [a, t, n]),
            null
          );
        },
        J = C,
        Q = T,
        ee = j,
        et = D,
        en = L,
        er = H,
        eo = z,
        ea = V;
    },
    22475: (e, t, n) => {
      n.d(t, {
        UE: () => eT,
        ll: () => eb,
        rD: () => eN,
        UU: () => eR,
        jD: () => eS,
        ER: () => eA,
        cY: () => ex,
        BN: () => eE,
        Ej: () => eC,
      });
      let r = ["top", "right", "bottom", "left"],
        o = Math.min,
        a = Math.max,
        i = Math.round,
        l = Math.floor,
        u = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        s = { start: "end", end: "start" };
      function d(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function f(e) {
        return e.split("-")[0];
      }
      function p(e) {
        return e.split("-")[1];
      }
      function m(e) {
        return "x" === e ? "y" : "x";
      }
      function h(e) {
        return "y" === e ? "height" : "width";
      }
      let v = new Set(["top", "bottom"]);
      function g(e) {
        return v.has(f(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => s[e]);
      }
      let w = ["left", "right"],
        b = ["right", "left"],
        x = ["top", "bottom"],
        E = ["bottom", "top"];
      function R(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function C(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function S(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function T(e, t, n) {
        let r,
          { reference: o, floating: a } = e,
          i = g(t),
          l = m(g(t)),
          u = h(l),
          c = f(t),
          s = "y" === i,
          d = o.x + o.width / 2 - a.width / 2,
          v = o.y + o.height / 2 - a.height / 2,
          y = o[u] / 2 - a[u] / 2;
        switch (c) {
          case "top":
            r = { x: d, y: o.y - a.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: v };
            break;
          case "left":
            r = { x: o.x - a.width, y: v };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (p(t)) {
          case "start":
            r[l] -= y * (n && s ? -1 : 1);
            break;
          case "end":
            r[l] += y * (n && s ? -1 : 1);
        }
        return r;
      }
      let A = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = n,
          l = a.filter(Boolean),
          u = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          c = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: d } = T(c, r, u),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: a, fn: h } = l[n],
            {
              x: v,
              y: g,
              data: y,
              reset: w,
            } = await h({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (s = null != v ? v : s),
            (d = null != g ? g : d),
            (p = { ...p, [a]: { ...p[a], ...y } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: d } = T(c, f, u))),
              (n = -1));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function N(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: a, rects: i, elements: l, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: m = 0,
          } = d(t, e),
          h = C(m),
          v = l[p ? ("floating" === f ? "reference" : "floating") : f],
          g = S(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          y =
            "floating" === f
              ? {
                  x: r,
                  y: o,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          w = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          b = ((await (null == a.isElement ? void 0 : a.isElement(w))) &&
            (await (null == a.getScale ? void 0 : a.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          x = S(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: y,
                  offsetParent: w,
                  strategy: u,
                })
              : y
          );
        return {
          top: (g.top - x.top + h.top) / b.y,
          bottom: (x.bottom - g.bottom + h.bottom) / b.y,
          left: (g.left - x.left + h.left) / b.x,
          right: (x.right - g.right + h.right) / b.x,
        };
      }
      function P(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function j(e) {
        return r.some((t) => e[t] >= 0);
      }
      let O = new Set(["left", "top"]);
      async function D(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = f(n),
          l = p(n),
          u = "y" === g(n),
          c = O.has(i) ? -1 : 1,
          s = a && u ? -1 : 1,
          m = d(t, e),
          {
            mainAxis: h,
            crossAxis: v,
            alignmentAxis: y,
          } = "number" == typeof m
            ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: m.mainAxis || 0,
                crossAxis: m.crossAxis || 0,
                alignmentAxis: m.alignmentAxis,
              };
        return (
          l && "number" == typeof y && (v = "end" === l ? -1 * y : y),
          u ? { x: v * s, y: h * c } : { x: h * c, y: v * s }
        );
      }
      function k() {
        return "undefined" != typeof window;
      }
      function _(e) {
        return I(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function M(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function L(e) {
        var t;
        return null ==
          (t = (I(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function I(e) {
        return !!k() && (e instanceof Node || e instanceof M(e).Node);
      }
      function F(e) {
        return !!k() && (e instanceof Element || e instanceof M(e).Element);
      }
      function B(e) {
        return (
          !!k() && (e instanceof HTMLElement || e instanceof M(e).HTMLElement)
        );
      }
      function W(e) {
        return (
          !!k() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof M(e).ShadowRoot)
        );
      }
      let H = new Set(["inline", "contents"]);
      function U(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = Q(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !H.has(o);
      }
      let z = new Set(["table", "td", "th"]),
        q = [":popover-open", ":modal"];
      function V(e) {
        return q.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      let G = ["transform", "translate", "scale", "rotate", "perspective"],
        Y = [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective",
          "filter",
        ],
        K = ["paint", "layout", "strict", "content"];
      function X(e) {
        let t = $(),
          n = F(e) ? Q(e) : e;
        return (
          G.some((e) => !!n[e] && "none" !== n[e]) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          Y.some((e) => (n.willChange || "").includes(e)) ||
          K.some((e) => (n.contain || "").includes(e))
        );
      }
      function $() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      let Z = new Set(["html", "body", "#document"]);
      function J(e) {
        return Z.has(_(e));
      }
      function Q(e) {
        return M(e).getComputedStyle(e);
      }
      function ee(e) {
        return F(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function et(e) {
        if ("html" === _(e)) return e;
        let t = e.assignedSlot || e.parentNode || (W(e) && e.host) || L(e);
        return W(t) ? t.host : t;
      }
      function en(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = et(t);
            return J(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : B(n) && U(n)
              ? n
              : e(n);
          })(e),
          a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = M(o);
        if (a) {
          let e = er(i);
          return t.concat(
            i,
            i.visualViewport || [],
            U(o) ? o : [],
            e && n ? en(e) : []
          );
        }
        return t.concat(o, en(o, [], n));
      }
      function er(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eo(e) {
        let t = Q(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = B(e),
          a = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          u = i(n) !== a || i(r) !== l;
        return u && ((n = a), (r = l)), { width: n, height: r, $: u };
      }
      function ea(e) {
        return F(e) ? e : e.contextElement;
      }
      function ei(e) {
        let t = ea(e);
        if (!B(t)) return u(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: a } = eo(t),
          l = (a ? i(n.width) : n.width) / r,
          c = (a ? i(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (c && Number.isFinite(c)) || (c = 1),
          { x: l, y: c }
        );
      }
      let el = u(0);
      function eu(e) {
        let t = M(e);
        return $() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : el;
      }
      function ec(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          i = ea(e),
          l = u(1);
        t && (r ? F(r) && (l = ei(r)) : (l = ei(e)));
        let c = (void 0 === (o = n) && (o = !1), r && (!o || r === M(i)) && o)
            ? eu(i)
            : u(0),
          s = (a.left + c.x) / l.x,
          d = (a.top + c.y) / l.y,
          f = a.width / l.x,
          p = a.height / l.y;
        if (i) {
          let e = M(i),
            t = r && F(r) ? M(r) : r,
            n = e,
            o = er(n);
          for (; o && r && t !== n; ) {
            let e = ei(o),
              t = o.getBoundingClientRect(),
              r = Q(o),
              a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (d *= e.y),
              (f *= e.x),
              (p *= e.y),
              (s += a),
              (d += i),
              (o = er((n = M(o))));
          }
        }
        return S({ width: f, height: p, x: s, y: d });
      }
      function es(e, t) {
        let n = ee(e).scrollLeft;
        return t ? t.left + n : ec(L(e)).left + n;
      }
      function ed(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : es(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      let ef = new Set(["absolute", "fixed"]);
      function ep(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = M(e),
              r = L(e),
              o = n.visualViewport,
              a = r.clientWidth,
              i = r.clientHeight,
              l = 0,
              u = 0;
            if (o) {
              (a = o.width), (i = o.height);
              let e = $();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = L(e),
              n = ee(e),
              r = e.ownerDocument.body,
              o = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = a(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + es(e),
              u = -n.scrollTop;
            return (
              "rtl" === Q(r).direction &&
                (l += a(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: u }
            );
          })(L(e));
        else if (F(t))
          r = (function (e, t) {
            let n = ec(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              a = B(e) ? ei(e) : u(1),
              i = e.clientWidth * a.x,
              l = e.clientHeight * a.y;
            return { width: i, height: l, x: o * a.x, y: r * a.y };
          })(t, n);
        else {
          let n = eu(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return S(r);
      }
      function em(e) {
        return "static" === Q(e).position;
      }
      function eh(e, t) {
        if (!B(e) || "fixed" === Q(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return L(e) === n && (n = n.ownerDocument.body), n;
      }
      function ev(e, t) {
        var n;
        let r = M(e);
        if (V(e)) return r;
        if (!B(e)) {
          let t = et(e);
          for (; t && !J(t); ) {
            if (F(t) && !em(t)) return t;
            t = et(t);
          }
          return r;
        }
        let o = eh(e, t);
        for (; o && ((n = o), z.has(_(n))) && em(o); ) o = eh(o, t);
        return o && J(o) && em(o) && !X(o)
          ? r
          : o ||
              (function (e) {
                let t = et(e);
                for (; B(t) && !J(t); ) {
                  if (X(t)) return t;
                  if (V(t)) break;
                  t = et(t);
                }
                return null;
              })(e) ||
              r;
      }
      let eg = async function (e) {
          let t = this.getOffsetParent || ev,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = B(t),
                o = L(t),
                a = "fixed" === n,
                i = ec(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                c = u(0);
              if (r || (!r && !a))
                if ((("body" !== _(t) || U(o)) && (l = ee(t)), r)) {
                  let e = ec(t, !0, a, t);
                  (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                } else o && (c.x = es(o));
              a && !r && o && (c.x = es(o));
              let s = !o || r || a ? u(0) : ed(o, l);
              return {
                x: i.left + l.scrollLeft - c.x - s.x,
                y: i.top + l.scrollTop - c.y - s.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ey = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              a = "fixed" === o,
              i = L(r),
              l = !!t && V(t.floating);
            if (r === i || (l && a)) return n;
            let c = { scrollLeft: 0, scrollTop: 0 },
              s = u(1),
              d = u(0),
              f = B(r);
            if (
              (f || (!f && !a)) &&
              (("body" !== _(r) || U(i)) && (c = ee(r)), B(r))
            ) {
              let e = ec(r);
              (s = ei(r)),
                (d.x = e.x + r.clientLeft),
                (d.y = e.y + r.clientTop);
            }
            let p = !i || f || a ? u(0) : ed(i, c, !0);
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - c.scrollLeft * s.x + d.x + p.x,
              y: n.y * s.y - c.scrollTop * s.y + d.y + p.y,
            };
          },
          getDocumentElement: L,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
              l = [
                ...("clippingAncestors" === n
                  ? V(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = en(e, [], !1).filter(
                            (e) => F(e) && "body" !== _(e)
                          ),
                          o = null,
                          a = "fixed" === Q(e).position,
                          i = a ? et(e) : e;
                        for (; F(i) && !J(i); ) {
                          let t = Q(i),
                            n = X(i);
                          n || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ef.has(o.position)) ||
                                  (U(i) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = et(t);
                                      return (
                                        !(r === n || !F(r) || J(r)) &&
                                        ("fixed" === Q(r).position || e(r, n))
                                      );
                                    })(e, i))
                            )
                              ? (r = r.filter((e) => e !== i))
                              : (o = t),
                            (i = et(i));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              u = l[0],
              c = l.reduce((e, n) => {
                let r = ep(t, n, i);
                return (
                  (e.top = a(r.top, e.top)),
                  (e.right = o(r.right, e.right)),
                  (e.bottom = o(r.bottom, e.bottom)),
                  (e.left = a(r.left, e.left)),
                  e
                );
              }, ep(t, u, i));
            return {
              width: c.right - c.left,
              height: c.bottom - c.top,
              x: c.left,
              y: c.top,
            };
          },
          getOffsetParent: ev,
          getElementRects: eg,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eo(e);
            return { width: t, height: n };
          },
          getScale: ei,
          isElement: F,
          isRTL: function (e) {
            return "rtl" === Q(e).direction;
          },
        };
      function ew(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function eb(e, t, n, r) {
        let i;
        void 0 === r && (r = {});
        let {
            ancestorScroll: u = !0,
            ancestorResize: c = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: d = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = r,
          p = ea(e),
          m = u || c ? [...(p ? en(p) : []), ...en(t)] : [];
        m.forEach((e) => {
          u && e.addEventListener("scroll", n, { passive: !0 }),
            c && e.addEventListener("resize", n);
        });
        let h =
            p && d
              ? (function (e, t) {
                  let n,
                    r = null,
                    i = L(e);
                  function u() {
                    var e;
                    clearTimeout(n),
                      null == (e = r) || e.disconnect(),
                      (r = null);
                  }
                  return (
                    !(function c(s, d) {
                      void 0 === s && (s = !1), void 0 === d && (d = 1), u();
                      let f = e.getBoundingClientRect(),
                        { left: p, top: m, width: h, height: v } = f;
                      if ((s || t(), !h || !v)) return;
                      let g = l(m),
                        y = l(i.clientWidth - (p + h)),
                        w = {
                          rootMargin:
                            -g +
                            "px " +
                            -y +
                            "px " +
                            -l(i.clientHeight - (m + v)) +
                            "px " +
                            -l(p) +
                            "px",
                          threshold: a(0, o(1, d)) || 1,
                        },
                        b = !0;
                      function x(t) {
                        let r = t[0].intersectionRatio;
                        if (r !== d) {
                          if (!b) return c();
                          r
                            ? c(!1, r)
                            : (n = setTimeout(() => {
                                c(!1, 1e-7);
                              }, 1e3));
                        }
                        1 !== r || ew(f, e.getBoundingClientRect()) || c(),
                          (b = !1);
                      }
                      try {
                        r = new IntersectionObserver(x, {
                          ...w,
                          root: i.ownerDocument,
                        });
                      } catch (e) {
                        r = new IntersectionObserver(x, w);
                      }
                      r.observe(e);
                    })(!0),
                    u
                  );
                })(p, n)
              : null,
          v = -1,
          g = null;
        s &&
          ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === p &&
              g &&
              (g.unobserve(t),
              cancelAnimationFrame(v),
              (v = requestAnimationFrame(() => {
                var e;
                null == (e = g) || e.observe(t);
              }))),
              n();
          })),
          p && !f && g.observe(p),
          g.observe(t));
        let y = f ? ec(e) : null;
        return (
          f &&
            (function t() {
              let r = ec(e);
              y && !ew(y, r) && n(), (y = r), (i = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            m.forEach((e) => {
              u && e.removeEventListener("scroll", n),
                c && e.removeEventListener("resize", n);
            }),
              null == h || h(),
              null == (e = g) || e.disconnect(),
              (g = null),
              f && cancelAnimationFrame(i);
          }
        );
      }
      let ex = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r;
                let { x: o, y: a, placement: i, middlewareData: l } = t,
                  u = await D(t, e);
                return i === (null == (n = l.offset) ? void 0 : n.placement) &&
                  null != (r = l.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: a + u.y, data: { ...u, placement: i } };
              },
            }
          );
        },
        eE = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: r, placement: i } = t,
                  {
                    mainAxis: l = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = d(e, t),
                  p = { x: n, y: r },
                  h = await N(t, s),
                  v = g(f(i)),
                  y = m(v),
                  w = p[y],
                  b = p[v];
                if (l) {
                  let e = "y" === y ? "top" : "left",
                    t = "y" === y ? "bottom" : "right",
                    n = w + h[e],
                    r = w - h[t];
                  w = a(n, o(w, r));
                }
                if (u) {
                  let e = "y" === v ? "top" : "left",
                    t = "y" === v ? "bottom" : "right",
                    n = b + h[e],
                    r = b - h[t];
                  b = a(n, o(b, r));
                }
                let x = c.fn({ ...t, [y]: w, [v]: b });
                return {
                  ...x,
                  data: { x: x.x - n, y: x.y - r, enabled: { [y]: l, [v]: u } },
                };
              },
            }
          );
        },
        eR = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, r, o, a, i;
                let {
                    placement: l,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: s,
                    platform: v,
                    elements: C,
                  } = t,
                  {
                    mainAxis: S = !0,
                    crossAxis: T = !0,
                    fallbackPlacements: A,
                    fallbackStrategy: P = "bestFit",
                    fallbackAxisSideDirection: j = "none",
                    flipAlignment: O = !0,
                    ...D
                  } = d(e, t);
                if (null != (n = u.arrow) && n.alignmentOffset) return {};
                let k = f(l),
                  _ = g(s),
                  M = f(s) === s,
                  L = await (null == v.isRTL ? void 0 : v.isRTL(C.floating)),
                  I =
                    A ||
                    (M || !O
                      ? [R(s)]
                      : (function (e) {
                          let t = R(e);
                          return [y(e), t, y(t)];
                        })(s)),
                  F = "none" !== j;
                !A &&
                  F &&
                  I.push(
                    ...(function (e, t, n, r) {
                      let o = p(e),
                        a = (function (e, t, n) {
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? b : w;
                              return t ? w : b;
                            case "left":
                            case "right":
                              return t ? x : E;
                            default:
                              return [];
                          }
                        })(f(e), "start" === n, r);
                      return (
                        o &&
                          ((a = a.map((e) => e + "-" + o)),
                          t && (a = a.concat(a.map(y)))),
                        a
                      );
                    })(s, O, j, L)
                  );
                let B = [s, ...I],
                  W = await N(t, D),
                  H = [],
                  U = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((S && H.push(W[k]), T)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = p(e),
                      o = m(g(e)),
                      a = h(o),
                      i =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[a] > t.floating[a] && (i = R(i)), [i, R(i)]
                    );
                  })(l, c, L);
                  H.push(W[e[0]], W[e[1]]);
                }
                if (
                  ((U = [...U, { placement: l, overflows: H }]),
                  !H.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = B[e];
                  if (
                    t &&
                    ("alignment" !== T ||
                      _ === g(t) ||
                      U.every(
                        (e) => e.overflows[0] > 0 && g(e.placement) === _
                      ))
                  )
                    return {
                      data: { index: e, overflows: U },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (a = U.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : a.placement;
                  if (!n)
                    switch (P) {
                      case "bestFit": {
                        let e =
                          null ==
                          (i = U.filter((e) => {
                            if (F) {
                              let t = g(e.placement);
                              return t === _ || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : i[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = s;
                    }
                  if (l !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        eC = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                var n, r;
                let i,
                  l,
                  { placement: u, rects: c, platform: s, elements: m } = t,
                  { apply: h = () => {}, ...v } = d(e, t),
                  y = await N(t, v),
                  w = f(u),
                  b = p(u),
                  x = "y" === g(u),
                  { width: E, height: R } = c.floating;
                "top" === w || "bottom" === w
                  ? ((i = w),
                    (l =
                      b ===
                      ((await (null == s.isRTL ? void 0 : s.isRTL(m.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((l = w), (i = "end" === b ? "top" : "bottom"));
                let C = R - y.top - y.bottom,
                  S = E - y.left - y.right,
                  T = o(R - y[i], C),
                  A = o(E - y[l], S),
                  P = !t.middlewareData.shift,
                  j = T,
                  O = A;
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (O = S),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (j = C),
                  P && !b)
                ) {
                  let e = a(y.left, 0),
                    t = a(y.right, 0),
                    n = a(y.top, 0),
                    r = a(y.bottom, 0);
                  x
                    ? (O =
                        E -
                        2 * (0 !== e || 0 !== t ? e + t : a(y.left, y.right)))
                    : (j =
                        R -
                        2 * (0 !== n || 0 !== r ? n + r : a(y.top, y.bottom)));
                }
                await h({ ...t, availableWidth: O, availableHeight: j });
                let D = await s.getDimensions(m.floating);
                return E !== D.width || R !== D.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        eS = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "hide",
              options: e,
              async fn(t) {
                let { rects: n } = t,
                  { strategy: r = "referenceHidden", ...o } = d(e, t);
                switch (r) {
                  case "referenceHidden": {
                    let e = P(
                      await N(t, { ...o, elementContext: "reference" }),
                      n.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: j(e),
                      },
                    };
                  }
                  case "escaped": {
                    let e = P(
                      await N(t, { ...o, altBoundary: !0 }),
                      n.floating
                    );
                    return { data: { escapedOffsets: e, escaped: j(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        eT = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: i,
                rects: l,
                platform: u,
                elements: c,
                middlewareData: s,
              } = t,
              { element: f, padding: v = 0 } = d(e, t) || {};
            if (null == f) return {};
            let y = C(v),
              w = { x: n, y: r },
              b = m(g(i)),
              x = h(b),
              E = await u.getDimensions(f),
              R = "y" === b,
              S = R ? "clientHeight" : "clientWidth",
              T = l.reference[x] + l.reference[b] - w[b] - l.floating[x],
              A = w[b] - l.reference[b],
              N = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(f)),
              P = N ? N[S] : 0;
            (P && (await (null == u.isElement ? void 0 : u.isElement(N)))) ||
              (P = c.floating[S] || l.floating[x]);
            let j = P / 2 - E[x] / 2 - 1,
              O = o(y[R ? "top" : "left"], j),
              D = o(y[R ? "bottom" : "right"], j),
              k = P - E[x] - D,
              _ = P / 2 - E[x] / 2 + (T / 2 - A / 2),
              M = a(O, o(_, k)),
              L =
                !s.arrow &&
                null != p(i) &&
                _ !== M &&
                l.reference[x] / 2 - (_ < O ? O : D) - E[x] / 2 < 0,
              I = L ? (_ < O ? _ - O : _ - k) : 0;
            return {
              [b]: w[b] + I,
              data: {
                [b]: M,
                centerOffset: _ - M - I,
                ...(L && { alignmentOffset: I }),
              },
              reset: L,
            };
          },
        }),
        eA = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: o,
                    rects: a,
                    middlewareData: i,
                  } = t,
                  {
                    offset: l = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0,
                  } = d(e, t),
                  s = { x: n, y: r },
                  p = g(o),
                  h = m(p),
                  v = s[h],
                  y = s[p],
                  w = d(l, t),
                  b =
                    "number" == typeof w
                      ? { mainAxis: w, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...w };
                if (u) {
                  let e = "y" === h ? "height" : "width",
                    t = a.reference[h] - a.floating[e] + b.mainAxis,
                    n = a.reference[h] + a.reference[e] - b.mainAxis;
                  v < t ? (v = t) : v > n && (v = n);
                }
                if (c) {
                  var x, E;
                  let e = "y" === h ? "width" : "height",
                    t = O.has(f(o)),
                    n =
                      a.reference[p] -
                      a.floating[e] +
                      ((t && (null == (x = i.offset) ? void 0 : x[p])) || 0) +
                      (t ? 0 : b.crossAxis),
                    r =
                      a.reference[p] +
                      a.reference[e] +
                      (t ? 0 : (null == (E = i.offset) ? void 0 : E[p]) || 0) -
                      (t ? b.crossAxis : 0);
                  y < n ? (y = n) : y > r && (y = r);
                }
                return { [h]: v, [p]: y };
              },
            }
          );
        },
        eN = (e, t, n) => {
          let r = new Map(),
            o = { platform: ey, ...n },
            a = { ...o.platform, _c: r };
          return A(e, t, { ...o, platform: a });
        };
    },
    23478: (e, t, n) => {
      n.d(t, {
        UC: () => ei,
        Y9: () => eo,
        q7: () => er,
        bL: () => en,
        l9: () => ea,
      });
      var r = n(12115),
        o = n(46081),
        a = n(37328),
        i = n(6101),
        l = n(85185),
        u = n(5845),
        c = n(63655),
        s = n(52712),
        d = n(28905),
        f = n(61285),
        p = n(95155),
        m = "Collapsible",
        [h, v] = (0, o.A)(m),
        [g, y] = h(m),
        w = r.forwardRef((e, t) => {
          let {
              __scopeCollapsible: n,
              open: o,
              defaultOpen: a,
              disabled: i,
              onOpenChange: l,
              ...s
            } = e,
            [d, h] = (0, u.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: l,
              caller: m,
            });
          return (0, p.jsx)(g, {
            scope: n,
            disabled: i,
            contentId: (0, f.B)(),
            open: d,
            onOpenToggle: r.useCallback(() => h((e) => !e), [h]),
            children: (0, p.jsx)(c.sG.div, {
              "data-state": S(d),
              "data-disabled": i ? "" : void 0,
              ...s,
              ref: t,
            }),
          });
        });
      w.displayName = m;
      var b = "CollapsibleTrigger",
        x = r.forwardRef((e, t) => {
          let { __scopeCollapsible: n, ...r } = e,
            o = y(b, n);
          return (0, p.jsx)(c.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": S(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: (0, l.m)(e.onClick, o.onOpenToggle),
          });
        });
      x.displayName = b;
      var E = "CollapsibleContent",
        R = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            o = y(E, e.__scopeCollapsible);
          return (0, p.jsx)(d.C, {
            present: n || o.open,
            children: (e) => {
              let { present: n } = e;
              return (0, p.jsx)(C, { ...r, ref: t, present: n });
            },
          });
        });
      R.displayName = E;
      var C = r.forwardRef((e, t) => {
        let { __scopeCollapsible: n, present: o, children: a, ...l } = e,
          u = y(E, n),
          [d, f] = r.useState(o),
          m = r.useRef(null),
          h = (0, i.s)(t, m),
          v = r.useRef(0),
          g = v.current,
          w = r.useRef(0),
          b = w.current,
          x = u.open || d,
          R = r.useRef(x),
          C = r.useRef(void 0);
        return (
          r.useEffect(() => {
            let e = requestAnimationFrame(() => (R.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, s.N)(() => {
            let e = m.current;
            if (e) {
              (C.current = C.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none");
              let t = e.getBoundingClientRect();
              (v.current = t.height),
                (w.current = t.width),
                R.current ||
                  ((e.style.transitionDuration = C.current.transitionDuration),
                  (e.style.animationName = C.current.animationName)),
                f(o);
            }
          }, [u.open, o]),
          (0, p.jsx)(c.sG.div, {
            "data-state": S(u.open),
            "data-disabled": u.disabled ? "" : void 0,
            id: u.contentId,
            hidden: !x,
            ...l,
            ref: h,
            style: {
              "--radix-collapsible-content-height": g
                ? "".concat(g, "px")
                : void 0,
              "--radix-collapsible-content-width": b
                ? "".concat(b, "px")
                : void 0,
              ...e.style,
            },
            children: x && a,
          })
        );
      });
      function S(e) {
        return e ? "open" : "closed";
      }
      var T = n(94315),
        A = "Accordion",
        N = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [P, j, O] = (0, a.N)(A),
        [D, k] = (0, o.A)(A, [O, v]),
        _ = v(),
        M = r.forwardRef((e, t) => {
          let { type: n, ...r } = e;
          return (0, p.jsx)(P.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === n
                ? (0, p.jsx)(H, { ...r, ref: t })
                : (0, p.jsx)(W, { ...r, ref: t }),
          });
        });
      M.displayName = A;
      var [L, I] = D(A),
        [F, B] = D(A, { collapsible: !1 }),
        W = r.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: o,
              onValueChange: a = () => {},
              collapsible: i = !1,
              ...l
            } = e,
            [c, s] = (0, u.i)({
              prop: n,
              defaultProp: null != o ? o : "",
              onChange: a,
              caller: A,
            });
          return (0, p.jsx)(L, {
            scope: e.__scopeAccordion,
            value: r.useMemo(() => (c ? [c] : []), [c]),
            onItemOpen: s,
            onItemClose: r.useCallback(() => i && s(""), [i, s]),
            children: (0, p.jsx)(F, {
              scope: e.__scopeAccordion,
              collapsible: i,
              children: (0, p.jsx)(q, { ...l, ref: t }),
            }),
          });
        }),
        H = r.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: o,
              onValueChange: a = () => {},
              ...i
            } = e,
            [l, c] = (0, u.i)({
              prop: n,
              defaultProp: null != o ? o : [],
              onChange: a,
              caller: A,
            }),
            s = r.useCallback(
              (e) =>
                c(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return [...t, e];
                }),
              [c]
            ),
            d = r.useCallback(
              (e) =>
                c(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return t.filter((t) => t !== e);
                }),
              [c]
            );
          return (0, p.jsx)(L, {
            scope: e.__scopeAccordion,
            value: l,
            onItemOpen: s,
            onItemClose: d,
            children: (0, p.jsx)(F, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(q, { ...i, ref: t }),
            }),
          });
        }),
        [U, z] = D(A),
        q = r.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: o,
              dir: a,
              orientation: u = "vertical",
              ...s
            } = e,
            d = r.useRef(null),
            f = (0, i.s)(d, t),
            m = j(n),
            h = "ltr" === (0, T.jH)(a),
            v = (0, l.m)(e.onKeyDown, (e) => {
              var t;
              if (!N.includes(e.key)) return;
              let n = e.target,
                r = m().filter((e) => {
                  var t;
                  return !(null == (t = e.ref.current) ? void 0 : t.disabled);
                }),
                o = r.findIndex((e) => e.ref.current === n),
                a = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let i = o,
                l = a - 1,
                c = () => {
                  (i = o + 1) > l && (i = 0);
                },
                s = () => {
                  (i = o - 1) < 0 && (i = l);
                };
              switch (e.key) {
                case "Home":
                  i = 0;
                  break;
                case "End":
                  i = l;
                  break;
                case "ArrowRight":
                  "horizontal" === u && (h ? c() : s());
                  break;
                case "ArrowDown":
                  "vertical" === u && c();
                  break;
                case "ArrowLeft":
                  "horizontal" === u && (h ? s() : c());
                  break;
                case "ArrowUp":
                  "vertical" === u && s();
              }
              null == (t = r[i % a].ref.current) || t.focus();
            });
          return (0, p.jsx)(U, {
            scope: n,
            disabled: o,
            direction: a,
            orientation: u,
            children: (0, p.jsx)(P.Slot, {
              scope: n,
              children: (0, p.jsx)(c.sG.div, {
                ...s,
                "data-orientation": u,
                ref: f,
                onKeyDown: o ? void 0 : v,
              }),
            }),
          });
        }),
        V = "AccordionItem",
        [G, Y] = D(V),
        K = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: r, ...o } = e,
            a = z(V, n),
            i = I(V, n),
            l = _(n),
            u = (0, f.B)(),
            c = (r && i.value.includes(r)) || !1,
            s = a.disabled || e.disabled;
          return (0, p.jsx)(G, {
            scope: n,
            open: c,
            disabled: s,
            triggerId: u,
            children: (0, p.jsx)(w, {
              "data-orientation": a.orientation,
              "data-state": et(c),
              ...l,
              ...o,
              ref: t,
              disabled: s,
              open: c,
              onOpenChange: (e) => {
                e ? i.onItemOpen(r) : i.onItemClose(r);
              },
            }),
          });
        });
      K.displayName = V;
      var X = "AccordionHeader",
        $ = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = z(A, n),
            a = Y(X, n);
          return (0, p.jsx)(c.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": et(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: t,
          });
        });
      $.displayName = X;
      var Z = "AccordionTrigger",
        J = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = z(A, n),
            a = Y(Z, n),
            i = B(Z, n),
            l = _(n);
          return (0, p.jsx)(P.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(x, {
              "aria-disabled": (a.open && !i.collapsible) || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...l,
              ...r,
              ref: t,
            }),
          });
        });
      J.displayName = Z;
      var Q = "AccordionContent",
        ee = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = z(A, n),
            a = Y(Q, n),
            i = _(n);
          return (0, p.jsx)(R, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...r,
            ref: t,
            style: {
              "--radix-accordion-content-height":
                "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width":
                "var(--radix-collapsible-content-width)",
              ...e.style,
            },
          });
        });
      function et(e) {
        return e ? "open" : "closed";
      }
      ee.displayName = Q;
      var en = M,
        er = K,
        eo = $,
        ea = J,
        ei = ee;
    },
    24357: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    25519: (e, t, n) => {
      n.d(t, { n: () => d });
      var r = n(12115),
        o = n(6101),
        a = n(63655),
        i = n(39033),
        l = n(95155),
        u = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        s = { bubbles: !1, cancelable: !0 },
        d = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: d = !1,
              onMountAutoFocus: v,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [w, b] = r.useState(null),
            x = (0, i.c)(v),
            E = (0, i.c)(g),
            R = r.useRef(null),
            C = (0, o.s)(t, (e) => b(e)),
            S = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (S.paused || !w) return;
                  let t = e.target;
                  w.contains(t)
                    ? (R.current = t)
                    : m(R.current, { select: !0 });
                },
                t = function (e) {
                  if (S.paused || !w) return;
                  let t = e.relatedTarget;
                  null !== t && (w.contains(t) || m(R.current, { select: !0 }));
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(w);
              });
              return (
                w && n.observe(w, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [d, w, S.paused]),
            r.useEffect(() => {
              if (w) {
                h.add(S);
                let e = document.activeElement;
                if (!w.contains(e)) {
                  let t = new CustomEvent(u, s);
                  w.addEventListener(u, x),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        f(w).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(w));
                }
                return () => {
                  w.removeEventListener(u, x),
                    setTimeout(() => {
                      let t = new CustomEvent(c, s);
                      w.addEventListener(c, E),
                        w.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        w.removeEventListener(c, E),
                        h.remove(S);
                    }, 0);
                };
              }
            }, [w, x, E, S]);
          let T = r.useCallback(
            (e) => {
              if ((!n && !d) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, a] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && a
                  ? e.shiftKey || r !== a
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && m(a, { select: !0 }))
                    : (e.preventDefault(), n && m(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, d, S.paused]
          );
          return (0, l.jsx)(a.sG.div, {
            tabIndex: -1,
            ...y,
            ref: C,
            onKeyDown: T,
          });
        });
      function f(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      d.displayName = "FocusScope";
      var h = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = v(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null == (n = (e = v(e, t))[0]) || n.resume();
          },
        };
      })();
      function v(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    28905: (e, t, n) => {
      n.d(t, { C: () => i });
      var r = n(12115),
        o = n(6101),
        a = n(52712),
        i = (e) => {
          let { present: t, children: n } = e,
            i = (function (e) {
              var t, n;
              let [o, i] = r.useState(),
                u = r.useRef(null),
                c = r.useRef(e),
                s = r.useRef("none"),
                [d, f] =
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
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = l(u.current);
                  s.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, a.N)(() => {
                  let t = u.current,
                    n = c.current;
                  if (n !== e) {
                    let r = s.current,
                      o = l(t);
                    e
                      ? f("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? f("UNMOUNT")
                      : n && r !== o
                      ? f("ANIMATION_OUT")
                      : f("UNMOUNT"),
                      (c.current = e);
                  }
                }, [e, f]),
                (0, a.N)(() => {
                  if (o) {
                    var e;
                    let t,
                      n =
                        null != (e = o.ownerDocument.defaultView) ? e : window,
                      r = (e) => {
                        let r = l(u.current).includes(e.animationName);
                        if (
                          e.target === o &&
                          r &&
                          (f("ANIMATION_END"), !c.current)
                        ) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      a = (e) => {
                        e.target === o && (s.current = l(u.current));
                      };
                    return (
                      o.addEventListener("animationstart", a),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          o.removeEventListener("animationstart", a),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r);
                      }
                    );
                  }
                  f("ANIMATION_END");
                }, [o, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    (u.current = e ? getComputedStyle(e) : null), i(e);
                  }, []),
                }
              );
            })(t),
            u =
              "function" == typeof n
                ? n({ present: i.isPresent })
                : r.Children.only(n),
            c = (0, o.s)(
              i.ref,
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
              })(u)
            );
          return "function" == typeof n || i.isPresent
            ? r.cloneElement(u, { ref: c })
            : null;
        };
      function l(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      i.displayName = "Presence";
    },
    31114: (e, t, n) => {
      n.d(t, { A: () => V });
      var r,
        o,
        a = n(39249),
        i = n(12115),
        l = "right-scroll-bar-position",
        u = "width-before-scroll-bar";
      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var s = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        d = new WeakMap();
      function f(e) {
        return e;
      }
      var p = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            i =
              ((t = null),
              void 0 === n && (n = f),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var a = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(a);
                    };
                  i(),
                    (r = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (i.options = (0, a.__assign)({ async: !0, ssr: !1 }, e)), i;
        })(),
        m = function () {},
        h = i.forwardRef(function (e, t) {
          var n,
            r,
            o,
            l,
            u = i.useRef(null),
            f = i.useState({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: m,
            }),
            h = f[0],
            v = f[1],
            g = e.forwardProps,
            y = e.children,
            w = e.className,
            b = e.removeScrollBar,
            x = e.enabled,
            E = e.shards,
            R = e.sideCar,
            C = e.noRelative,
            S = e.noIsolation,
            T = e.inert,
            A = e.allowPinchZoom,
            N = e.as,
            P = e.gapMode,
            j = (0, a.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            O =
              ((n = [u, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return c(t, e);
                });
              }),
              ((o = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (l = o.facade),
              s(
                function () {
                  var e = d.get(l);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = l.current;
                    t.forEach(function (e) {
                      r.has(e) || c(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || c(e, o);
                      });
                  }
                  d.set(l, n);
                },
                [n]
              ),
              l),
            D = (0, a.__assign)((0, a.__assign)({}, j), h);
          return i.createElement(
            i.Fragment,
            null,
            x &&
              i.createElement(R, {
                sideCar: p,
                removeScrollBar: b,
                shards: E,
                noRelative: C,
                noIsolation: S,
                inert: T,
                setCallbacks: v,
                allowPinchZoom: !!A,
                lockRef: u,
                gapMode: P,
              }),
            g
              ? i.cloneElement(
                  i.Children.only(y),
                  (0, a.__assign)((0, a.__assign)({}, D), { ref: O })
                )
              : i.createElement(
                  void 0 === N ? "div" : N,
                  (0, a.__assign)({}, D, { className: w, ref: O }),
                  y
                )
          );
        });
      (h.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (h.classNames = { fullWidth: u, zeroRight: l });
      var v = function (e) {
        var t = e.sideCar,
          n = (0, a.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return i.createElement(r, (0, a.__assign)({}, n));
      };
      v.isSideCarExport = !0;
      var g = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = r)
                  : a.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        y = function () {
          var e = g();
          return function (t, n) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        w = function () {
          var e = y();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        b = { left: 0, top: 0, right: 0, gap: 0 },
        x = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        E = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [x(n), x(r), x(o)];
        },
        R = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return b;
          var t = E(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        C = w(),
        S = "data-scroll-locked",
        T = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            c = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(S, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(c, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(c, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(l, " {\n    right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " {\n    margin-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(l, " .")
              .concat(l, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(S, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(c, "px;\n  }\n")
          );
        },
        A = function () {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        N = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(S, (A() + 1).toString()),
              function () {
                var e = A() - 1;
                e <= 0
                  ? document.body.removeAttribute(S)
                  : document.body.setAttribute(S, e.toString());
              }
            );
          }, []);
        },
        P = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          N();
          var a = i.useMemo(
            function () {
              return R(o);
            },
            [o]
          );
          return i.createElement(C, {
            styles: T(a, !t, o, n ? "" : "!important"),
          });
        },
        j = !1;
      if ("undefined" != typeof window)
        try {
          var O = Object.defineProperty({}, "passive", {
            get: function () {
              return (j = !0), !0;
            },
          });
          window.addEventListener("test", O, O),
            window.removeEventListener("test", O, O);
        } catch (e) {
          j = !1;
        }
      var D = !!j && { passive: !1 },
        k = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        _ = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              M(e, r))
            ) {
              var o = L(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        M = function (e, t) {
          return "v" === e ? k(t, "overflowY") : k(t, "overflowX");
        },
        L = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        I = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = i * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            if (!u) break;
            var m = L(e, u),
              h = m[0],
              v = m[1] - m[2] - i * h;
            (h || v) && M(e, u) && ((f += v), (p += h));
            var g = u.parentNode;
            u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        F = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        W = function (e) {
          return e && "current" in e ? e.current : e;
        },
        H = 0,
        U = [];
      let z =
        ((r = function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(H++)[0],
            l = i.useState(w)[0],
            u = i.useRef(e);
          i.useEffect(
            function () {
              u.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, a.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(W),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var c = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !u.current.allowPinchZoom;
              var o,
                a = F(e),
                i = n.current,
                l = "deltaX" in e ? e.deltaX : i[0] - a[0],
                c = "deltaY" in e ? e.deltaY : i[1] - a[1],
                s = e.target,
                d = Math.abs(l) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = _(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = _(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (l || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return I(p, t, e, "h" === p ? l : c, !0);
            }, []),
            s = i.useCallback(function (e) {
              if (U.length && U[U.length - 1] === l) {
                var n = "deltaY" in e ? B(e) : F(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (u.current.shards || [])
                    .map(W)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !u.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = i.useCallback(function (e, n, r, o) {
              var a = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            f = i.useCallback(function (e) {
              (n.current = F(e)), (r.current = void 0);
            }, []),
            p = i.useCallback(function (t) {
              d(t.type, B(t), t.target, c(t, e.lockRef.current));
            }, []),
            m = i.useCallback(function (t) {
              d(t.type, F(t), t.target, c(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              U.push(l),
              e.setCallbacks({
                onScrollCapture: p,
                onWheelCapture: p,
                onTouchMoveCapture: m,
              }),
              document.addEventListener("wheel", s, D),
              document.addEventListener("touchmove", s, D),
              document.addEventListener("touchstart", f, D),
              function () {
                (U = U.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", s, D),
                  document.removeEventListener("touchmove", s, D),
                  document.removeEventListener("touchstart", f, D);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            v = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            v
              ? i.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            h
              ? i.createElement(P, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null
          );
        }),
        p.useMedium(r),
        v);
      var q = i.forwardRef(function (e, t) {
        return i.createElement(
          h,
          (0, a.__assign)({}, e, { ref: t, sideCar: z })
        );
      });
      q.classNames = h.classNames;
      let V = q;
    },
    34378: (e, t, n) => {
      n.d(t, { Z: () => u });
      var r = n(12115),
        o = n(47650),
        a = n(63655),
        i = n(52712),
        l = n(95155),
        u = r.forwardRef((e, t) => {
          var n, u;
          let { container: c, ...s } = e,
            [d, f] = r.useState(!1);
          (0, i.N)(() => f(!0), []);
          let p =
            c ||
            (d &&
              (null == (u = globalThis) || null == (n = u.document)
                ? void 0
                : n.body));
          return p
            ? o.createPortal((0, l.jsx)(a.sG.div, { ...s, ref: t }), p)
            : null;
        });
      u.displayName = "Portal";
    },
    37328: (e, t, n) => {
      function r(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + n + " private field on non-instance"
          );
        return t.get(e);
      }
      function o(e, t) {
        var n = r(e, t, "get");
        return n.get ? n.get.call(e) : n.value;
      }
      function a(e, t, n) {
        var o = r(e, t, "set");
        if (o.set) o.set.call(e, n);
        else {
          if (!o.writable)
            throw TypeError("attempted to set read only private field");
          o.value = n;
        }
        return n;
      }
      n.d(t, { N: () => f });
      var i,
        l = n(12115),
        u = n(46081),
        c = n(6101),
        s = n(99708),
        d = n(95155);
      function f(e) {
        let t = e + "CollectionProvider",
          [n, r] = (0, u.A)(t),
          [o, a] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          i = (e) => {
            let { scope: t, children: n } = e,
              r = l.useRef(null),
              a = l.useRef(new Map()).current;
            return (0, d.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: r,
              children: n,
            });
          };
        i.displayName = t;
        let f = e + "CollectionSlot",
          p = (0, s.TL)(f),
          m = l.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = a(f, n),
              i = (0, c.s)(t, o.collectionRef);
            return (0, d.jsx)(p, { ref: i, children: r });
          });
        m.displayName = f;
        let h = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          g = (0, s.TL)(h),
          y = l.forwardRef((e, t) => {
            let { scope: n, children: r, ...o } = e,
              i = l.useRef(null),
              u = (0, c.s)(t, i),
              s = a(h, n);
            return (
              l.useEffect(
                () => (
                  s.itemMap.set(i, { ref: i, ...o }),
                  () => void s.itemMap.delete(i)
                )
              ),
              (0, d.jsx)(g, { ...{ [v]: "" }, ref: u, children: r })
            );
          });
        return (
          (y.displayName = h),
          [
            { Provider: i, Slot: m, ItemSlot: y },
            function (t) {
              let n = a(e + "CollectionConsumer", t);
              return l.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ]
        );
      }
      var p = new WeakMap();
      function m(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let n = (function (e, t) {
          let n = e.length,
            r = h(t),
            o = r >= 0 ? r : n + r;
          return o < 0 || o >= n ? -1 : o;
        })(e, t);
        return -1 === n ? void 0 : e[n];
      }
      function h(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e);
      }
      i = new WeakMap();
    },
    38168: (e, t, n) => {
      n.d(t, { Eq: () => s });
      var r = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        o = new WeakMap(),
        a = new WeakMap(),
        i = {},
        l = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        c = function (e, t, n, r) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var s = i[n],
            d = [],
            f = new Set(),
            p = new Set(c),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          c.forEach(m);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      i = null !== t && "false" !== t,
                      l = (o.get(e) || 0) + 1,
                      u = (s.get(e) || 0) + 1;
                    o.set(e, l),
                      s.set(e, u),
                      d.push(e),
                      1 === l && i && a.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      i || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = o.get(e) - 1,
                  i = s.get(e) - 1;
                o.set(e, t),
                  s.set(e, i),
                  t || (a.has(e) || e.removeAttribute(r), a.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --l ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (a = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var o = Array.from(Array.isArray(e) ? e : [e]),
            a = t || r(e);
          return a
            ? (o.push.apply(
                o,
                Array.from(a.querySelectorAll("[aria-live], script"))
              ),
              c(o, a, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    39033: (e, t, n) => {
      n.d(t, { c: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    39249: (e, t, n) => {
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => M,
          __assign: () => a,
          __asyncDelegator: () => S,
          __asyncGenerator: () => C,
          __asyncValues: () => T,
          __await: () => R,
          __awaiter: () => m,
          __classPrivateFieldGet: () => D,
          __classPrivateFieldIn: () => _,
          __classPrivateFieldSet: () => k,
          __createBinding: () => v,
          __decorate: () => l,
          __disposeResources: () => I,
          __esDecorate: () => c,
          __exportStar: () => g,
          __extends: () => o,
          __generator: () => h,
          __importDefault: () => O,
          __importStar: () => j,
          __makeTemplateObject: () => A,
          __metadata: () => p,
          __param: () => u,
          __propKey: () => d,
          __read: () => w,
          __rest: () => i,
          __rewriteRelativeImportExtension: () => F,
          __runInitializers: () => s,
          __setFunctionName: () => f,
          __spread: () => b,
          __spreadArray: () => E,
          __spreadArrays: () => x,
          __values: () => y,
          default: () => B,
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var a = function () {
        return (a =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, t) {
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
      }
      function l(e, t, n, r) {
        var o,
          a = arguments.length,
          i =
            a < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (o = e[l]) &&
              (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i;
      }
      function u(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function c(e, t, n, r, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var l,
            u = r.kind,
            c = "getter" === u ? "get" : "setter" === u ? "set" : "value",
            s = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (s ? Object.getOwnPropertyDescriptor(s, r.name) : {}),
            f = !1,
            p = n.length - 1;
          p >= 0;
          p--
        ) {
          var m = {};
          for (var h in r) m[h] = "access" === h ? {} : r[h];
          for (var h in r.access) m.access[h] = r.access[h];
          m.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            a.push(i(e || null));
          };
          var v = (0, n[p])(
            "accessor" === u ? { get: d.get, set: d.set } : d[c],
            m
          );
          if ("accessor" === u) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v)
              throw TypeError("Object expected");
            (l = i(v.get)) && (d.get = l),
              (l = i(v.set)) && (d.set = l),
              (l = i(v.init)) && o.unshift(l);
          } else (l = i(v)) && ("field" === u ? o.unshift(l) : (d[c] = l));
        }
        s && Object.defineProperty(s, r.name, d), (f = !0);
      }
      function s(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++)
          n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function f(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function m(e, t, n, r) {
        return new (n || (n = Promise))(function (o, a) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function h(e, t) {
        var n,
          r,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          i = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (i.next = l(0)),
          (i.throw = l(1)),
          (i.return = l(2)),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function l(l) {
          return function (u) {
            var c = [l, u];
            if (n) throw TypeError("Generator is already executing.");
            for (; i && ((i = 0), c[0] && (a = 0)), a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & c[0]
                        ? r.return
                        : c[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, c[1])).done)
                )
                  return o;
                switch (((r = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, { value: c[1], done: !1 };
                  case 5:
                    a.label++, (r = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                      (6 === c[0] || 2 === c[0])
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                      a.label = c[1];
                      break;
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = c);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(c);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                c = t.call(e, a);
              } catch (e) {
                (c = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      var v = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function g(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            v(t, e, n);
      }
      function y(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function w(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          a = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
            i.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      function b() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(w(arguments[t]));
        return e;
      }
      function x() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++)
            r[o] = a[i];
        return r;
      }
      function E(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function R(e) {
        return this instanceof R ? ((this.v = e), this) : new R(e);
      }
      function C(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(e, t || []),
          a = [];
        return (
          (r = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          i("next"),
          i("throw"),
          i("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, c);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function i(e, t) {
          o[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                a.push([e, t, n, r]) > 1 || l(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function l(e, t) {
          try {
            var n;
            (n = o[e](t)).value instanceof R
              ? Promise.resolve(n.value.v).then(u, c)
              : s(a[0][2], n);
          } catch (e) {
            s(a[0][3], e);
          }
        }
        function u(e) {
          l("next", e);
        }
        function c(e) {
          l("throw", e);
        }
        function s(e, t) {
          e(t), a.shift(), a.length && l(a[0][0], a[0][1]);
        }
      }
      function S(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: R(e[r](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function T(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = y(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, o) {
                var a, i, l;
                (a = r),
                  (i = o),
                  (l = (t = e[n](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    a({ value: e, done: l });
                  }, i);
              });
            };
        }
      }
      function A(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var N = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        P = function (e) {
          return (P =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function j(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = P(e), r = 0; r < n.length; r++)
            "default" !== n[r] && v(t, e, n[r]);
        return N(t, e), t;
      }
      function O(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function D(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function k(e, t, n, r, o) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function _(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function M(e, t, n) {
        if (null != t) {
          var r, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (r = t[Symbol.dispose]), n && (o = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          o &&
            (r = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var L =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function I(e) {
        function t(t) {
          (e.error = e.hasError
            ? new L(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function o() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(o);
              if (n.dispose) {
                var a = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(a).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else r |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === r)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, o, a) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (o && a)
                  ? r + o + "." + a.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let B = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: l,
        __param: u,
        __esDecorate: c,
        __runInitializers: s,
        __propKey: d,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: m,
        __generator: h,
        __createBinding: v,
        __exportStar: g,
        __values: y,
        __read: w,
        __spread: b,
        __spreadArrays: x,
        __spreadArray: E,
        __await: R,
        __asyncGenerator: C,
        __asyncDelegator: S,
        __asyncValues: T,
        __makeTemplateObject: A,
        __importStar: j,
        __importDefault: O,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: k,
        __classPrivateFieldIn: _,
        __addDisposableResource: M,
        __disposeResources: I,
        __rewriteRelativeImportExtension: F,
      };
    },
    45503: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    46081: (e, t, n) => {
      n.d(t, { A: () => i, q: () => a });
      var r = n(12115),
        o = n(95155);
      function a(e, t) {
        let n = r.createContext(t),
          a = (e) => {
            let { children: t, ...a } = e,
              i = r.useMemo(() => a, Object.values(a));
            return (0, o.jsx)(n.Provider, { value: i, children: t });
          };
        return (
          (a.displayName = e + "Provider"),
          [
            a,
            function (o) {
              let a = r.useContext(n);
              if (a) return a;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let n = [],
          a = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let i = r.createContext(a),
                l = n.length;
              n = [...n, a];
              let u = (t) => {
                let { scope: n, children: a, ...u } = t,
                  c = n?.[e]?.[l] || i,
                  s = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(c.Provider, { value: s, children: a });
              };
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[l] || i,
                      c = r.useContext(u);
                    if (c) return c;
                    if (void 0 !== a) return a;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(a, ...t),
          ]
        );
      }
    },
    47863: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("chevron-up", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    51595: (e, t, n) => {
      n.d(t, { U: () => a });
      var r = n(12115),
        o = n(39033);
      function a(e, t = globalThis?.document) {
        let n = (0, o.c)(e);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          );
        }, [n, t]);
      }
    },
    52712: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(12115),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    55095: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("wallet-minimal", [
        ["path", { d: "M17 14h.01", key: "7oqj8z" }],
        [
          "path",
          {
            d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
            key: "u1rqew",
          },
        ],
      ]);
    },
    58434: (e, t, n) => {
      n.d(t, { qW: () => p });
      var r,
        o = n(12115),
        a = n(85185),
        i = n(63655),
        l = n(6101),
        u = n(39033),
        c = n(51595),
        s = n(95155),
        d = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = o.forwardRef((e, t) => {
          var n, p;
          let {
              disableOutsidePointerEvents: v = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: y,
              onFocusOutside: w,
              onInteractOutside: b,
              onDismiss: x,
              ...E
            } = e,
            R = o.useContext(f),
            [C, S] = o.useState(null),
            T =
              null != (p = null == C ? void 0 : C.ownerDocument)
                ? p
                : null == (n = globalThis)
                ? void 0
                : n.document,
            [, A] = o.useState({}),
            N = (0, l.s)(t, (e) => S(e)),
            P = Array.from(R.layers),
            [j] = [...R.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = P.indexOf(j),
            D = C ? P.indexOf(C) : -1,
            k = R.layersWithOutsidePointerEventsDisabled.size > 0,
            _ = D >= O,
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, u.c)(e),
                a = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !a.current) {
                        let t = function () {
                            h("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      a.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (a.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...R.branches].some((e) => e.contains(t));
              _ &&
                !n &&
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == x || x());
            }, T),
            L = (function (e) {
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
                      h(
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
              ![...R.branches].some((e) => e.contains(t)) &&
                (null == w || w(e),
                null == b || b(e),
                e.defaultPrevented || null == x || x());
            }, T);
          return (
            (0, c.U)((e) => {
              D === R.layers.size - 1 &&
                (null == g || g(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()));
            }, T),
            o.useEffect(() => {
              if (C)
                return (
                  v &&
                    (0 === R.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    R.layersWithOutsidePointerEventsDisabled.add(C)),
                  R.layers.add(C),
                  m(),
                  () => {
                    v &&
                      1 === R.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r);
                  }
                );
            }, [C, T, v, R]),
            o.useEffect(
              () => () => {
                C &&
                  (R.layers.delete(C),
                  R.layersWithOutsidePointerEventsDisabled.delete(C),
                  m());
              },
              [C, R]
            ),
            o.useEffect(() => {
              let e = () => A({});
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              );
            }, []),
            (0, s.jsx)(i.sG.div, {
              ...E,
              ref: N,
              style: {
                pointerEvents: k ? (_ ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.m)(e.onFocusCapture, L.onFocusCapture),
              onBlurCapture: (0, a.m)(e.onBlurCapture, L.onBlurCapture),
              onPointerDownCapture: (0, a.m)(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function m() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function h(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, i.hO)(a, l) : a.dispatchEvent(l);
      }
      (p.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(f),
            r = o.useRef(null),
            a = (0, l.s)(t, r);
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
            (0, s.jsx)(i.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
    },
    61285: (e, t, n) => {
      n.d(t, { B: () => u });
      var r,
        o = n(12115),
        a = n(52712),
        i =
          (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        l = 0;
      function u(e) {
        let [t, n] = o.useState(i());
        return (
          (0, a.N)(() => {
            e || n((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    63655: (e, t, n) => {
      n.d(t, { hO: () => u, sG: () => l });
      var r = n(12115),
        o = n(47650),
        a = n(99708),
        i = n(95155),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, a.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: o, ...a } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, i.jsx)(o ? n : t, { ...a, ref: r })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    66474: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    69474: (e, t, n) => {
      let r;
      n.d(t, { _s: () => I });
      var o = n(15452),
        a = n(12115);
      let i = a.createContext({
          drawerRef: { current: null },
          overlayRef: { current: null },
          onPress: () => {},
          onRelease: () => {},
          onDrag: () => {},
          onNestedDrag: () => {},
          onNestedOpenChange: () => {},
          onNestedRelease: () => {},
          openProp: void 0,
          dismissible: !1,
          isOpen: !1,
          isDragging: !1,
          keyboardIsOpen: { current: !1 },
          snapPointsOffset: null,
          snapPoints: null,
          handleOnly: !1,
          modal: !1,
          shouldFade: !1,
          activeSnapPoint: null,
          onOpenChange: () => {},
          setActiveSnapPoint: () => {},
          closeDrawer: () => {},
          direction: "bottom",
          shouldAnimate: { current: !0 },
          shouldScaleBackground: !1,
          setBackgroundColorOnScale: !0,
          noBodyStyles: !1,
          container: null,
          autoFocus: !1,
        }),
        l = () => {
          let e = a.useContext(i);
          if (!e)
            throw Error("useDrawerContext must be used within a Drawer.Root");
          return e;
        };
      function u() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
      function c() {
        return (
          s(/^iPhone/) ||
          s(/^iPad/) ||
          (s(/^Mac/) && navigator.maxTouchPoints > 1)
        );
      }
      function s(e) {
        return "undefined" != typeof window && null != window.navigator
          ? e.test(window.navigator.platform)
          : void 0;
      }
      !(function (e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          t.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(
        "[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}"
      );
      let d = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect;
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          for (let e of t) "function" == typeof e && e(...n);
        };
      }
      let p = "undefined" != typeof document && window.visualViewport;
      function m(e) {
        let t = window.getComputedStyle(e);
        return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
      }
      function h(e) {
        for (m(e) && (e = e.parentElement); e && !m(e); ) e = e.parentElement;
        return e || document.scrollingElement || document.documentElement;
      }
      let v = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        g = 0;
      function y(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          () => {
            e.removeEventListener(t, n, r);
          }
        );
      }
      function w(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t; ) {
          let t = h(e);
          if (
            t !== document.documentElement &&
            t !== document.body &&
            t !== e
          ) {
            let n = t.getBoundingClientRect().top,
              r = e.getBoundingClientRect().top;
            e.getBoundingClientRect().bottom >
              t.getBoundingClientRect().bottom + 24 && (t.scrollTop += r - n);
          }
          e = t.parentElement;
        }
      }
      function b(e) {
        return (
          (e instanceof HTMLInputElement && !v.has(e.type)) ||
          e instanceof HTMLTextAreaElement ||
          (e instanceof HTMLElement && e.isContentEditable)
        );
      }
      function x() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return a.useCallback(
          (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (e) =>
              t.forEach((t) => {
                "function" == typeof t ? t(e) : null != t && (t.current = e);
              });
          })(...t),
          t
        );
      }
      let E = new WeakMap();
      function R(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || !(e instanceof HTMLElement)) return;
        let r = {};
        Object.entries(t).forEach((t) => {
          let [n, o] = t;
          if (n.startsWith("--")) return void e.style.setProperty(n, o);
          (r[n] = e.style[n]), (e.style[n] = o);
        }),
          n || E.set(e, r);
      }
      let C = (e) => {
        switch (e) {
          case "top":
          case "bottom":
            return !0;
          case "left":
          case "right":
            return !1;
          default:
            return e;
        }
      };
      function S(e, t) {
        if (!e) return null;
        let n = window.getComputedStyle(e),
          r = n.transform || n.webkitTransform || n.mozTransform,
          o = r.match(/^matrix3d\((.+)\)$/);
        return o
          ? parseFloat(o[1].split(", ")[C(t) ? 13 : 12])
          : (o = r.match(/^matrix\((.+)\)$/))
          ? parseFloat(o[1].split(", ")[C(t) ? 5 : 4])
          : null;
      }
      function T(e, t) {
        if (!e) return () => {};
        let n = e.style.cssText;
        return (
          Object.assign(e.style, t),
          () => {
            e.style.cssText = n;
          }
        );
      }
      let A = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] },
        N = "vaul-dragging";
      function P(e) {
        let t = a.useRef(e);
        return (
          a.useEffect(() => {
            t.current = e;
          }),
          a.useMemo(
            () =>
              function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return null == t.current ? void 0 : t.current.call(t, ...n);
              },
            []
          )
        );
      }
      function j(e) {
        let { prop: t, defaultProp: n, onChange: r = () => {} } = e,
          [o, i] = (function (e) {
            let { defaultProp: t, onChange: n } = e,
              r = a.useState(t),
              [o] = r,
              i = a.useRef(o),
              l = P(n);
            return (
              a.useEffect(() => {
                i.current !== o && (l(o), (i.current = o));
              }, [o, i, l]),
              r
            );
          })({ defaultProp: n, onChange: r }),
          l = void 0 !== t,
          u = l ? t : o,
          c = P(r);
        return [
          u,
          a.useCallback(
            (e) => {
              if (l) {
                let n = "function" == typeof e ? e(t) : e;
                n !== t && c(n);
              } else i(e);
            },
            [l, t, i, c]
          ),
        ];
      }
      let O = () => () => {},
        D = null;
      function k(e) {
        var t, n;
        let {
            open: l,
            onOpenChange: s,
            children: m,
            onDrag: v,
            onRelease: x,
            snapPoints: T,
            shouldScaleBackground: P = !1,
            setBackgroundColorOnScale: O = !0,
            closeThreshold: k = 0.25,
            scrollLockTimeout: _ = 100,
            dismissible: M = !0,
            handleOnly: L = !1,
            fadeFromIndex: I = T && T.length - 1,
            activeSnapPoint: F,
            setActiveSnapPoint: B,
            fixed: W,
            modal: H = !0,
            onClose: U,
            nested: z,
            noBodyStyles: q = !1,
            direction: V = "bottom",
            defaultOpen: G = !1,
            disablePreventScroll: Y = !0,
            snapToSequentialPoint: K = !1,
            preventScrollRestoration: X = !1,
            repositionInputs: $ = !0,
            onAnimationEnd: Z,
            container: J,
            autoFocus: Q = !1,
          } = e,
          [ee = !1, et] = j({
            defaultProp: G,
            prop: l,
            onChange: (e) => {
              null == s || s(e),
                e || z || eD(),
                setTimeout(() => {
                  null == Z || Z(e);
                }, 1e3 * A.DURATION),
                e &&
                  !H &&
                  "undefined" != typeof window &&
                  window.requestAnimationFrame(() => {
                    document.body.style.pointerEvents = "auto";
                  }),
                e || (document.body.style.pointerEvents = "auto");
            },
          }),
          [en, er] = a.useState(!1),
          [eo, ea] = a.useState(!1),
          [ei, el] = a.useState(!1),
          eu = a.useRef(null),
          ec = a.useRef(null),
          es = a.useRef(null),
          ed = a.useRef(null),
          ef = a.useRef(null),
          ep = a.useRef(!1),
          em = a.useRef(null),
          eh = a.useRef(0),
          ev = a.useRef(!1),
          eg = a.useRef(!G),
          ey = a.useRef(0),
          ew = a.useRef(null),
          eb = a.useRef(
            (null == (t = ew.current)
              ? void 0
              : t.getBoundingClientRect().height) || 0
          ),
          ex = a.useRef(
            (null == (n = ew.current)
              ? void 0
              : n.getBoundingClientRect().width) || 0
          ),
          eE = a.useRef(0),
          eR = a.useCallback((e) => {
            T && e === eN.length - 1 && (ec.current = new Date());
          }, []),
          {
            activeSnapPoint: eC,
            activeSnapPointIndex: eS,
            setActiveSnapPoint: eT,
            onRelease: eA,
            snapPointsOffset: eN,
            onDrag: eP,
            shouldFade: ej,
            getPercentageDragged: eO,
          } = (function (e) {
            let {
                activeSnapPointProp: t,
                setActiveSnapPointProp: n,
                snapPoints: r,
                drawerRef: o,
                overlayRef: i,
                fadeFromIndex: l,
                onSnapPointChange: u,
                direction: c = "bottom",
                container: s,
                snapToSequentialPoint: d,
              } = e,
              [f, p] = j({
                prop: t,
                defaultProp: null == r ? void 0 : r[0],
                onChange: n,
              }),
              [m, h] = a.useState(
                "undefined" != typeof window
                  ? {
                      innerWidth: window.innerWidth,
                      innerHeight: window.innerHeight,
                    }
                  : void 0
              );
            a.useEffect(() => {
              function e() {
                h({
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
                });
              }
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
            let v = a.useMemo(
                () => f === (null == r ? void 0 : r[r.length - 1]) || null,
                [r, f]
              ),
              g = a.useMemo(() => {
                var e;
                return null !=
                  (e = null == r ? void 0 : r.findIndex((e) => e === f))
                  ? e
                  : null;
              }, [r, f]),
              y =
                (r &&
                  r.length > 0 &&
                  (l || 0 === l) &&
                  !Number.isNaN(l) &&
                  r[l] === f) ||
                !r,
              w = a.useMemo(() => {
                var e;
                let t = s
                  ? {
                      width: s.getBoundingClientRect().width,
                      height: s.getBoundingClientRect().height,
                    }
                  : "undefined" != typeof window
                  ? { width: window.innerWidth, height: window.innerHeight }
                  : { width: 0, height: 0 };
                return null !=
                  (e =
                    null == r
                      ? void 0
                      : r.map((e) => {
                          let n = "string" == typeof e,
                            r = 0;
                          if ((n && (r = parseInt(e, 10)), C(c))) {
                            let o = n ? r : m ? e * t.height : 0;
                            return m
                              ? "bottom" === c
                                ? t.height - o
                                : -t.height + o
                              : o;
                          }
                          let o = n ? r : m ? e * t.width : 0;
                          return m
                            ? "right" === c
                              ? t.width - o
                              : -t.width + o
                            : o;
                        }))
                  ? e
                  : [];
              }, [r, m, s]),
              b = a.useMemo(
                () => (null !== g ? (null == w ? void 0 : w[g]) : null),
                [w, g]
              ),
              x = a.useCallback(
                (e) => {
                  var t;
                  let n =
                    null !=
                    (t = null == w ? void 0 : w.findIndex((t) => t === e))
                      ? t
                      : null;
                  u(n),
                    R(o.current, {
                      transition: "transform "
                        .concat(A.DURATION, "s cubic-bezier(")
                        .concat(A.EASE.join(","), ")"),
                      transform: C(c)
                        ? "translate3d(0, ".concat(e, "px, 0)")
                        : "translate3d(".concat(e, "px, 0, 0)"),
                    }),
                    w && n !== w.length - 1 && void 0 !== l && n !== l && n < l
                      ? R(i.current, {
                          transition: "opacity "
                            .concat(A.DURATION, "s cubic-bezier(")
                            .concat(A.EASE.join(","), ")"),
                          opacity: "0",
                        })
                      : R(i.current, {
                          transition: "opacity "
                            .concat(A.DURATION, "s cubic-bezier(")
                            .concat(A.EASE.join(","), ")"),
                          opacity: "1",
                        }),
                    p(null == r ? void 0 : r[Math.max(n, 0)]);
                },
                [o.current, r, w, l, i, p]
              );
            return (
              a.useEffect(() => {
                if (f || t) {
                  var e;
                  let n =
                    null !=
                    (e =
                      null == r
                        ? void 0
                        : r.findIndex((e) => e === t || e === f))
                      ? e
                      : -1;
                  w && -1 !== n && "number" == typeof w[n] && x(w[n]);
                }
              }, [f, t, r, w, x]),
              {
                isLastSnapPoint: v,
                activeSnapPoint: f,
                shouldFade: y,
                getPercentageDragged: function (e, t) {
                  if (!r || "number" != typeof g || !w || void 0 === l)
                    return null;
                  let n = g === l - 1;
                  if (g >= l && t) return 0;
                  if (n && !t) return 1;
                  if (!y && !n) return null;
                  let o = n ? g + 1 : g - 1,
                    a = e / Math.abs(n ? w[o] - w[o - 1] : w[o + 1] - w[o]);
                  return n ? 1 - a : a;
                },
                setActiveSnapPoint: p,
                activeSnapPointIndex: g,
                onRelease: function (e) {
                  let {
                    draggedDistance: t,
                    closeDrawer: n,
                    velocity: o,
                    dismissible: a,
                  } = e;
                  if (void 0 === l) return;
                  let u =
                      "bottom" === c || "right" === c
                        ? (null != b ? b : 0) - t
                        : (null != b ? b : 0) + t,
                    s = g === l - 1,
                    f = 0 === g,
                    p = t > 0;
                  if (
                    (s &&
                      R(i.current, {
                        transition: "opacity "
                          .concat(A.DURATION, "s cubic-bezier(")
                          .concat(A.EASE.join(","), ")"),
                      }),
                    !d && o > 2 && !p)
                  )
                    return void (a ? n() : x(w[0]));
                  if (!d && o > 2 && p && w && r)
                    return void x(w[r.length - 1]);
                  let m =
                      null == w
                        ? void 0
                        : w.reduce((e, t) =>
                            "number" != typeof e || "number" != typeof t
                              ? e
                              : Math.abs(t - u) < Math.abs(e - u)
                              ? t
                              : e
                          ),
                    h = C(c) ? window.innerHeight : window.innerWidth;
                  if (o > 0.4 && Math.abs(t) < 0.4 * h) {
                    let e = p ? 1 : -1;
                    return e > 0 && v && r
                      ? void x(w[r.length - 1])
                      : void (f && e < 0 && a && n(),
                        null === g || x(w[g + e]));
                  }
                  x(m);
                },
                onDrag: function (e) {
                  let { draggedDistance: t } = e;
                  if (null === b) return;
                  let n = "bottom" === c || "right" === c ? b - t : b + t;
                  (("bottom" !== c && "right" !== c) ||
                    !(n < w[w.length - 1])) &&
                    ((("top" === c || "left" === c) && n > w[w.length - 1]) ||
                      R(o.current, {
                        transform: C(c)
                          ? "translate3d(0, ".concat(n, "px, 0)")
                          : "translate3d(".concat(n, "px, 0, 0)"),
                      }));
                },
                snapPointsOffset: w,
              }
            );
          })({
            snapPoints: T,
            activeSnapPointProp: F,
            setActiveSnapPointProp: B,
            drawerRef: ew,
            fadeFromIndex: I,
            overlayRef: eu,
            onSnapPointChange: eR,
            direction: V,
            container: J,
            snapToSequentialPoint: K,
          });
        !(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { isDisabled: t } = e;
          d(() => {
            if (!t) {
              var e, n, o;
              let t, a, i, l, u, s, d;
              return (
                1 == ++g &&
                  c() &&
                  ((i = 0),
                  (l = window.pageXOffset),
                  (u = window.pageYOffset),
                  (s = f(
                    ((e = document.documentElement),
                    (n = "paddingRight"),
                    (o = "".concat(
                      window.innerWidth - document.documentElement.clientWidth,
                      "px"
                    )),
                    (t = e.style[n]),
                    (e.style[n] = o),
                    () => {
                      e.style[n] = t;
                    })
                  )),
                  window.scrollTo(0, 0),
                  (d = f(
                    y(
                      document,
                      "touchstart",
                      (e) => {
                        ((a = h(e.target)) !== document.documentElement ||
                          a !== document.body) &&
                          (i = e.changedTouches[0].pageY);
                      },
                      { passive: !1, capture: !0 }
                    ),
                    y(
                      document,
                      "touchmove",
                      (e) => {
                        if (
                          !a ||
                          a === document.documentElement ||
                          a === document.body
                        )
                          return void e.preventDefault();
                        let t = e.changedTouches[0].pageY,
                          n = a.scrollTop,
                          r = a.scrollHeight - a.clientHeight;
                        0 !== r &&
                          (((n <= 0 && t > i) || (n >= r && t < i)) &&
                            e.preventDefault(),
                          (i = t));
                      },
                      { passive: !1, capture: !0 }
                    ),
                    y(
                      document,
                      "touchend",
                      (e) => {
                        let t = e.target;
                        b(t) &&
                          t !== document.activeElement &&
                          (e.preventDefault(),
                          (t.style.transform = "translateY(-2000px)"),
                          t.focus(),
                          requestAnimationFrame(() => {
                            t.style.transform = "";
                          }));
                      },
                      { passive: !1, capture: !0 }
                    ),
                    y(
                      document,
                      "focus",
                      (e) => {
                        let t = e.target;
                        b(t) &&
                          ((t.style.transform = "translateY(-2000px)"),
                          requestAnimationFrame(() => {
                            (t.style.transform = ""),
                              p &&
                                (p.height < window.innerHeight
                                  ? requestAnimationFrame(() => {
                                      w(t);
                                    })
                                  : p.addEventListener("resize", () => w(t), {
                                      once: !0,
                                    }));
                          }));
                      },
                      !0
                    ),
                    y(window, "scroll", () => {
                      window.scrollTo(0, 0);
                    })
                  )),
                  (r = () => {
                    s(), d(), window.scrollTo(l, u);
                  })),
                () => {
                  0 == --g && (null == r || r());
                }
              );
            }
          }, [t]);
        })({ isDisabled: !ee || eo || !H || ei || !en || !$ || !Y });
        let { restorePositionSetting: eD } = (function (e) {
          let {
              isOpen: t,
              modal: n,
              nested: r,
              hasBeenOpened: o,
              preventScrollRestoration: i,
              noBodyStyles: l,
            } = e,
            [c, s] = a.useState(() =>
              "undefined" != typeof window ? window.location.href : ""
            ),
            d = a.useRef(0),
            f = a.useCallback(() => {
              if (u() && null === D && t && !l) {
                D = {
                  position: document.body.style.position,
                  top: document.body.style.top,
                  left: document.body.style.left,
                  height: document.body.style.height,
                  right: "unset",
                };
                let { scrollX: e, innerHeight: t } = window;
                document.body.style.setProperty(
                  "position",
                  "fixed",
                  "important"
                ),
                  Object.assign(document.body.style, {
                    top: "".concat(-d.current, "px"),
                    left: "".concat(-e, "px"),
                    right: "0px",
                    height: "auto",
                  }),
                  window.setTimeout(
                    () =>
                      window.requestAnimationFrame(() => {
                        let e = t - window.innerHeight;
                        e &&
                          d.current >= t &&
                          (document.body.style.top = "".concat(
                            -(d.current + e),
                            "px"
                          ));
                      }),
                    300
                  );
              }
            }, [t]),
            p = a.useCallback(() => {
              if (u() && null !== D && !l) {
                let e = -parseInt(document.body.style.top, 10),
                  t = -parseInt(document.body.style.left, 10);
                Object.assign(document.body.style, D),
                  window.requestAnimationFrame(() => {
                    if (i && c !== window.location.href)
                      return void s(window.location.href);
                    window.scrollTo(t, e);
                  }),
                  (D = null);
              }
            }, [c]);
          return (
            a.useEffect(() => {
              function e() {
                d.current = window.scrollY;
              }
              return (
                e(),
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            a.useEffect(() => {
              if (n)
                return () => {
                  "undefined" != typeof document &&
                    (document.querySelector("[data-vaul-drawer]") || p());
                };
            }, [n, p]),
            a.useEffect(() => {
              !r &&
                o &&
                (t
                  ? (window.matchMedia("(display-mode: standalone)").matches ||
                      f(),
                    n ||
                      window.setTimeout(() => {
                        p();
                      }, 500))
                  : p());
            }, [t, o, c, n, r, f, p]),
            { restorePositionSetting: p }
          );
        })({
          isOpen: ee,
          modal: H,
          nested: null != z && z,
          hasBeenOpened: en,
          preventScrollRestoration: X,
          noBodyStyles: q,
        });
        function ek() {
          return (window.innerWidth - 26) / window.innerWidth;
        }
        function e_(e, t) {
          var n;
          let r = e,
            o = null == (n = window.getSelection()) ? void 0 : n.toString(),
            a = ew.current ? S(ew.current, V) : null,
            i = new Date();
          if (
            "SELECT" === r.tagName ||
            r.hasAttribute("data-vaul-no-drag") ||
            r.closest("[data-vaul-no-drag]")
          )
            return !1;
          if ("right" === V || "left" === V) return !0;
          if (ec.current && i.getTime() - ec.current.getTime() < 500) return !1;
          if (null !== a && ("bottom" === V ? a > 0 : a < 0)) return !0;
          if (o && o.length > 0) return !1;
          if (
            (ef.current && i.getTime() - ef.current.getTime() < _ && 0 === a) ||
            t
          )
            return (ef.current = i), !1;
          for (; r; ) {
            if (r.scrollHeight > r.clientHeight) {
              if (0 !== r.scrollTop) return (ef.current = new Date()), !1;
              if ("dialog" === r.getAttribute("role")) break;
            }
            r = r.parentNode;
          }
          return !0;
        }
        function eM(e) {
          eo &&
            ew.current &&
            (ew.current.classList.remove(N),
            (ep.current = !1),
            ea(!1),
            (ed.current = new Date())),
            null == U || U(),
            e || et(!1),
            setTimeout(() => {
              T && eT(T[0]);
            }, 1e3 * A.DURATION);
        }
        function eL() {
          if (!ew.current) return;
          let e = document.querySelector("[data-vaul-drawer-wrapper]"),
            t = S(ew.current, V);
          R(ew.current, {
            transform: "translate3d(0, 0, 0)",
            transition: "transform "
              .concat(A.DURATION, "s cubic-bezier(")
              .concat(A.EASE.join(","), ")"),
          }),
            R(eu.current, {
              transition: "opacity "
                .concat(A.DURATION, "s cubic-bezier(")
                .concat(A.EASE.join(","), ")"),
              opacity: "1",
            }),
            P &&
              t &&
              t > 0 &&
              ee &&
              R(
                e,
                {
                  borderRadius: "".concat(8, "px"),
                  overflow: "hidden",
                  ...(C(V)
                    ? {
                        transform: "scale(".concat(
                          ek(),
                          ") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"
                        ),
                        transformOrigin: "top",
                      }
                    : {
                        transform: "scale(".concat(
                          ek(),
                          ") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"
                        ),
                        transformOrigin: "left",
                      }),
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "".concat(A.DURATION, "s"),
                  transitionTimingFunction: "cubic-bezier(".concat(
                    A.EASE.join(","),
                    ")"
                  ),
                },
                !0
              );
        }
        return (
          a.useEffect(() => {
            window.requestAnimationFrame(() => {
              eg.current = !0;
            });
          }, []),
          a.useEffect(() => {
            var e;
            function t() {
              if (
                ew.current &&
                $ &&
                (b(document.activeElement) || ev.current)
              ) {
                var e;
                let t =
                    (null == (e = window.visualViewport) ? void 0 : e.height) ||
                    0,
                  n = window.innerHeight,
                  r = n - t,
                  o = ew.current.getBoundingClientRect().height || 0;
                eE.current || (eE.current = o);
                let a = ew.current.getBoundingClientRect().top;
                if (
                  (Math.abs(ey.current - r) > 60 && (ev.current = !ev.current),
                  T && T.length > 0 && eN && eS && (r += eN[eS] || 0),
                  (ey.current = r),
                  o > t || ev.current)
                ) {
                  let e = ew.current.getBoundingClientRect().height,
                    i = e;
                  e > t && (i = t - (o > 0.8 * n ? a : 26)),
                    W
                      ? (ew.current.style.height = "".concat(
                          e - Math.max(r, 0),
                          "px"
                        ))
                      : (ew.current.style.height = "".concat(
                          Math.max(i, t - a),
                          "px"
                        ));
                } else
                  !(function () {
                    let e = navigator.userAgent;
                    return (
                      "undefined" != typeof window &&
                      ((/Firefox/.test(e) && /Mobile/.test(e)) ||
                        /FxiOS/.test(e))
                    );
                  })() &&
                    (ew.current.style.height = "".concat(eE.current, "px"));
                T && T.length > 0 && !ev.current
                  ? (ew.current.style.bottom = "0px")
                  : (ew.current.style.bottom = "".concat(Math.max(r, 0), "px"));
              }
            }
            return (
              null == (e = window.visualViewport) ||
                e.addEventListener("resize", t),
              () => {
                var e;
                return null == (e = window.visualViewport)
                  ? void 0
                  : e.removeEventListener("resize", t);
              }
            );
          }, [eS, T, eN]),
          a.useEffect(
            () => (
              ee &&
                (R(document.documentElement, { scrollBehavior: "auto" }),
                (ec.current = new Date())),
              () => {
                !(function (e, t) {
                  if (!e || !(e instanceof HTMLElement)) return;
                  let n = E.get(e);
                  n && (e.style[t] = n[t]);
                })(document.documentElement, "scrollBehavior");
              }
            ),
            [ee]
          ),
          a.useEffect(() => {
            H ||
              window.requestAnimationFrame(() => {
                document.body.style.pointerEvents = "auto";
              });
          }, [H]),
          a.createElement(
            o.bL,
            {
              defaultOpen: G,
              onOpenChange: (e) => {
                (M || e) && (e ? er(!0) : eM(!0), et(e));
              },
              open: ee,
            },
            a.createElement(
              i.Provider,
              {
                value: {
                  activeSnapPoint: eC,
                  snapPoints: T,
                  setActiveSnapPoint: eT,
                  drawerRef: ew,
                  overlayRef: eu,
                  onOpenChange: s,
                  onPress: function (e) {
                    var t, n;
                    (M || T) &&
                      (!ew.current || ew.current.contains(e.target)) &&
                      ((eb.current =
                        (null == (t = ew.current)
                          ? void 0
                          : t.getBoundingClientRect().height) || 0),
                      (ex.current =
                        (null == (n = ew.current)
                          ? void 0
                          : n.getBoundingClientRect().width) || 0),
                      ea(!0),
                      (es.current = new Date()),
                      c() &&
                        window.addEventListener(
                          "touchend",
                          () => (ep.current = !1),
                          { once: !0 }
                        ),
                      e.target.setPointerCapture(e.pointerId),
                      (eh.current = C(V) ? e.pageY : e.pageX));
                  },
                  onRelease: function (e) {
                    var t, n;
                    if (!eo || !ew.current) return;
                    ew.current.classList.remove(N),
                      (ep.current = !1),
                      ea(!1),
                      (ed.current = new Date());
                    let r = S(ew.current, V);
                    if (
                      !e ||
                      !e_(e.target, !1) ||
                      !r ||
                      Number.isNaN(r) ||
                      null === es.current
                    )
                      return;
                    let o = ed.current.getTime() - es.current.getTime(),
                      a = eh.current - (C(V) ? e.pageY : e.pageX),
                      i = Math.abs(a) / o;
                    if (
                      (i > 0.05 &&
                        (el(!0),
                        setTimeout(() => {
                          el(!1);
                        }, 200)),
                      T)
                    ) {
                      eA({
                        draggedDistance:
                          a * ("bottom" === V || "right" === V ? 1 : -1),
                        closeDrawer: eM,
                        velocity: i,
                        dismissible: M,
                      }),
                        null == x || x(e, !0);
                      return;
                    }
                    if ("bottom" === V || "right" === V ? a > 0 : a < 0) {
                      eL(), null == x || x(e, !0);
                      return;
                    }
                    if (i > 0.4) {
                      eM(), null == x || x(e, !1);
                      return;
                    }
                    let l = Math.min(
                        null != (t = ew.current.getBoundingClientRect().height)
                          ? t
                          : 0,
                        window.innerHeight
                      ),
                      u = Math.min(
                        null != (n = ew.current.getBoundingClientRect().width)
                          ? n
                          : 0,
                        window.innerWidth
                      );
                    if (
                      Math.abs(r) >=
                      ("left" === V || "right" === V ? u : l) * k
                    ) {
                      eM(), null == x || x(e, !1);
                      return;
                    }
                    null == x || x(e, !0), eL();
                  },
                  onDrag: function (e) {
                    if (ew.current && eo) {
                      let t = "bottom" === V || "right" === V ? 1 : -1,
                        n = (eh.current - (C(V) ? e.pageY : e.pageX)) * t,
                        r = n > 0,
                        o = T && !M && !r;
                      if (o && 0 === eS) return;
                      let a = Math.abs(n),
                        i = document.querySelector(
                          "[data-vaul-drawer-wrapper]"
                        ),
                        l =
                          a /
                          ("bottom" === V || "top" === V
                            ? eb.current
                            : ex.current),
                        u = eO(a, r);
                      if (
                        (null !== u && (l = u),
                        (o && l >= 1) || (!ep.current && !e_(e.target, r)))
                      )
                        return;
                      if (
                        (ew.current.classList.add(N),
                        (ep.current = !0),
                        R(ew.current, { transition: "none" }),
                        R(eu.current, { transition: "none" }),
                        T && eP({ draggedDistance: n }),
                        r && !T)
                      ) {
                        let e =
                          Math.min(-(8 * (Math.log(n + 1) - 2) * 1), 0) * t;
                        R(ew.current, {
                          transform: C(V)
                            ? "translate3d(0, ".concat(e, "px, 0)")
                            : "translate3d(".concat(e, "px, 0, 0)"),
                        });
                        return;
                      }
                      let c = 1 - l;
                      if (
                        ((ej || (I && eS === I - 1)) &&
                          (null == v || v(e, l),
                          R(
                            eu.current,
                            { opacity: "".concat(c), transition: "none" },
                            !0
                          )),
                        i && eu.current && P)
                      ) {
                        let e = Math.min(ek() + l * (1 - ek()), 1),
                          t = 8 - 8 * l,
                          n = Math.max(0, 14 - 14 * l);
                        R(
                          i,
                          {
                            borderRadius: "".concat(t, "px"),
                            transform: C(V)
                              ? "scale("
                                  .concat(e, ") translate3d(0, ")
                                  .concat(n, "px, 0)")
                              : "scale("
                                  .concat(e, ") translate3d(")
                                  .concat(n, "px, 0, 0)"),
                            transition: "none",
                          },
                          !0
                        );
                      }
                      if (!T) {
                        let e = a * t;
                        R(ew.current, {
                          transform: C(V)
                            ? "translate3d(0, ".concat(e, "px, 0)")
                            : "translate3d(".concat(e, "px, 0, 0)"),
                        });
                      }
                    }
                  },
                  dismissible: M,
                  shouldAnimate: eg,
                  handleOnly: L,
                  isOpen: ee,
                  isDragging: eo,
                  shouldFade: ej,
                  closeDrawer: eM,
                  onNestedDrag: function (e, t) {
                    if (t < 0) return;
                    let n = (window.innerWidth - 16) / window.innerWidth,
                      r = n + t * (1 - n),
                      o = -16 + 16 * t;
                    R(ew.current, {
                      transform: C(V)
                        ? "scale("
                            .concat(r, ") translate3d(0, ")
                            .concat(o, "px, 0)")
                        : "scale("
                            .concat(r, ") translate3d(")
                            .concat(o, "px, 0, 0)"),
                      transition: "none",
                    });
                  },
                  onNestedOpenChange: function (e) {
                    let t = e
                        ? (window.innerWidth - 16) / window.innerWidth
                        : 1,
                      n = e ? -16 : 0;
                    em.current && window.clearTimeout(em.current),
                      R(ew.current, {
                        transition: "transform "
                          .concat(A.DURATION, "s cubic-bezier(")
                          .concat(A.EASE.join(","), ")"),
                        transform: C(V)
                          ? "scale("
                              .concat(t, ") translate3d(0, ")
                              .concat(n, "px, 0)")
                          : "scale("
                              .concat(t, ") translate3d(")
                              .concat(n, "px, 0, 0)"),
                      }),
                      !e &&
                        ew.current &&
                        (em.current = setTimeout(() => {
                          let e = S(ew.current, V);
                          R(ew.current, {
                            transition: "none",
                            transform: C(V)
                              ? "translate3d(0, ".concat(e, "px, 0)")
                              : "translate3d(".concat(e, "px, 0, 0)"),
                          });
                        }, 500));
                  },
                  onNestedRelease: function (e, t) {
                    let n = C(V) ? window.innerHeight : window.innerWidth,
                      r = t ? (n - 16) / n : 1,
                      o = t ? -16 : 0;
                    t &&
                      R(ew.current, {
                        transition: "transform "
                          .concat(A.DURATION, "s cubic-bezier(")
                          .concat(A.EASE.join(","), ")"),
                        transform: C(V)
                          ? "scale("
                              .concat(r, ") translate3d(0, ")
                              .concat(o, "px, 0)")
                          : "scale("
                              .concat(r, ") translate3d(")
                              .concat(o, "px, 0, 0)"),
                      });
                  },
                  keyboardIsOpen: ev,
                  modal: H,
                  snapPointsOffset: eN,
                  activeSnapPointIndex: eS,
                  direction: V,
                  shouldScaleBackground: P,
                  setBackgroundColorOnScale: O,
                  noBodyStyles: q,
                  container: J,
                  autoFocus: Q,
                },
              },
              m
            )
          )
        );
      }
      let _ = a.forwardRef(function (e, t) {
        let { ...n } = e,
          {
            overlayRef: r,
            snapPoints: i,
            onRelease: u,
            shouldFade: c,
            isOpen: s,
            modal: d,
            shouldAnimate: f,
          } = l(),
          p = x(t, r),
          m = i && i.length > 0;
        if (!d) return null;
        let h = a.useCallback((e) => u(e), [u]);
        return a.createElement(o.hJ, {
          onMouseUp: h,
          ref: p,
          "data-vaul-overlay": "",
          "data-vaul-snap-points": s && m ? "true" : "false",
          "data-vaul-snap-points-overlay": s && c ? "true" : "false",
          "data-vaul-animate": (null == f ? void 0 : f.current)
            ? "true"
            : "false",
          ...n,
        });
      });
      _.displayName = "Drawer.Overlay";
      let M = a.forwardRef(function (e, t) {
        let { onPointerDownOutside: n, style: r, onOpenAutoFocus: i, ...u } = e,
          {
            drawerRef: c,
            onPress: s,
            onRelease: d,
            onDrag: f,
            keyboardIsOpen: p,
            snapPointsOffset: m,
            activeSnapPointIndex: h,
            modal: v,
            isOpen: g,
            direction: y,
            snapPoints: w,
            container: b,
            handleOnly: E,
            shouldAnimate: R,
            autoFocus: S,
          } = l(),
          [N, P] = a.useState(!1),
          j = x(t, c),
          D = a.useRef(null),
          k = a.useRef(null),
          _ = a.useRef(!1),
          M = w && w.length > 0,
          {
            direction: L,
            isOpen: I,
            shouldScaleBackground: F,
            setBackgroundColorOnScale: B,
            noBodyStyles: W,
          } = l(),
          H = a.useRef(null),
          U = (0, a.useMemo)(() => document.body.style.backgroundColor, []);
        function z() {
          return (window.innerWidth - 26) / window.innerWidth;
        }
        a.useEffect(() => {
          if (I && F) {
            H.current && clearTimeout(H.current);
            let e =
              document.querySelector("[data-vaul-drawer-wrapper]") ||
              document.querySelector("[vaul-drawer-wrapper]");
            if (!e) return;
            !(function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            })(
              B && !W ? T(document.body, { background: "black" }) : O,
              T(e, {
                transformOrigin: C(L) ? "top" : "left",
                transitionProperty: "transform, border-radius",
                transitionDuration: "".concat(A.DURATION, "s"),
                transitionTimingFunction: "cubic-bezier(".concat(
                  A.EASE.join(","),
                  ")"
                ),
              })
            );
            let t = T(e, {
              borderRadius: "".concat(8, "px"),
              overflow: "hidden",
              ...(C(L)
                ? {
                    transform: "scale(".concat(
                      z(),
                      ") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"
                    ),
                  }
                : {
                    transform: "scale(".concat(
                      z(),
                      ") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"
                    ),
                  }),
            });
            return () => {
              t(),
                (H.current = window.setTimeout(() => {
                  U
                    ? (document.body.style.background = U)
                    : document.body.style.removeProperty("background");
                }, 1e3 * A.DURATION));
            };
          }
        }, [I, F, U]);
        let q = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (_.current) return !0;
          let r = Math.abs(e.y),
            o = Math.abs(e.x),
            a = o > r,
            i = ["bottom", "right"].includes(t) ? 1 : -1;
          if ("left" === t || "right" === t) {
            if (!(e.x * i < 0) && o >= 0 && o <= n) return a;
          } else if (!(e.y * i < 0) && r >= 0 && r <= n) return !a;
          return (_.current = !0), !0;
        };
        function V(e) {
          (D.current = null), (_.current = !1), d(e);
        }
        return (
          a.useEffect(() => {
            M &&
              window.requestAnimationFrame(() => {
                P(!0);
              });
          }, []),
          a.createElement(o.UC, {
            "data-vaul-drawer-direction": y,
            "data-vaul-drawer": "",
            "data-vaul-delayed-snap-points": N ? "true" : "false",
            "data-vaul-snap-points": g && M ? "true" : "false",
            "data-vaul-custom-container": b ? "true" : "false",
            "data-vaul-animate": (null == R ? void 0 : R.current)
              ? "true"
              : "false",
            ...u,
            ref: j,
            style:
              m && m.length > 0
                ? {
                    "--snap-point-height": "".concat(
                      m[null != h ? h : 0],
                      "px"
                    ),
                    ...r,
                  }
                : r,
            onPointerDown: (e) => {
              E ||
                (null == u.onPointerDown || u.onPointerDown.call(u, e),
                (D.current = { x: e.pageX, y: e.pageY }),
                s(e));
            },
            onOpenAutoFocus: (e) => {
              null == i || i(e), S || e.preventDefault();
            },
            onPointerDownOutside: (e) => {
              if ((null == n || n(e), !v || e.defaultPrevented))
                return void e.preventDefault();
              p.current && (p.current = !1);
            },
            onFocusOutside: (e) => {
              if (!v) return void e.preventDefault();
            },
            onPointerMove: (e) => {
              if (
                ((k.current = e),
                E ||
                  (null == u.onPointerMove || u.onPointerMove.call(u, e),
                  !D.current))
              )
                return;
              let t = e.pageY - D.current.y,
                n = e.pageX - D.current.x,
                r = "touch" === e.pointerType ? 10 : 2;
              q({ x: n, y: t }, y, r)
                ? f(e)
                : (Math.abs(n) > r || Math.abs(t) > r) && (D.current = null);
            },
            onPointerUp: (e) => {
              null == u.onPointerUp || u.onPointerUp.call(u, e),
                (D.current = null),
                (_.current = !1),
                d(e);
            },
            onPointerOut: (e) => {
              null == u.onPointerOut || u.onPointerOut.call(u, e), V(k.current);
            },
            onContextMenu: (e) => {
              null == u.onContextMenu || u.onContextMenu.call(u, e),
                k.current && V(k.current);
            },
          })
        );
      });
      M.displayName = "Drawer.Content";
      let L = a.forwardRef(function (e, t) {
        let { preventCycle: n = !1, children: r, ...o } = e,
          {
            closeDrawer: i,
            isDragging: u,
            snapPoints: c,
            activeSnapPoint: s,
            setActiveSnapPoint: d,
            dismissible: f,
            handleOnly: p,
            isOpen: m,
            onPress: h,
            onDrag: v,
          } = l(),
          g = a.useRef(null),
          y = a.useRef(!1);
        function w() {
          g.current && window.clearTimeout(g.current), (y.current = !1);
        }
        return a.createElement(
          "div",
          {
            onClick: function () {
              if (y.current) return void w();
              window.setTimeout(() => {
                !(function () {
                  if (u || n || y.current) return w();
                  if ((w(), !c || 0 === c.length)) {
                    f || i();
                    return;
                  }
                  if (s === c[c.length - 1] && f) return i();
                  let e = c.findIndex((e) => e === s);
                  -1 !== e && d(c[e + 1]);
                })();
              }, 120);
            },
            onPointerCancel: w,
            onPointerDown: (e) => {
              p && h(e),
                (g.current = window.setTimeout(() => {
                  y.current = !0;
                }, 250));
            },
            onPointerMove: (e) => {
              p && v(e);
            },
            ref: t,
            "data-vaul-drawer-visible": m ? "true" : "false",
            "data-vaul-handle": "",
            "aria-hidden": "true",
            ...o,
          },
          a.createElement(
            "span",
            { "data-vaul-handle-hitarea": "", "aria-hidden": "true" },
            r
          )
        );
      });
      L.displayName = "Drawer.Handle";
      let I = {
        Root: k,
        NestedRoot: function (e) {
          let { onDrag: t, onOpenChange: n, open: r, ...o } = e,
            {
              onNestedDrag: i,
              onNestedOpenChange: u,
              onNestedRelease: c,
            } = l();
          if (!i)
            throw Error("Drawer.NestedRoot must be placed in another drawer");
          return a.createElement(k, {
            nested: !0,
            open: r,
            onClose: () => {
              u(!1);
            },
            onDrag: (e, n) => {
              i(e, n), null == t || t(e, n);
            },
            onOpenChange: (e) => {
              e && u(e), null == n || n(e);
            },
            onRelease: c,
            ...o,
          });
        },
        Content: M,
        Overlay: _,
        Trigger: o.l9,
        Portal: function (e) {
          let t = l(),
            { container: n = t.container, ...r } = e;
          return a.createElement(o.ZL, { container: n, ...r });
        },
        Handle: L,
        Close: o.bm,
        Title: o.hE,
        Description: o.VY,
      };
    },
    82391: (e, t, n) => {
      n.d(t, { b: () => l });
      var r = n(12115),
        o = n(63655),
        a = n(95155),
        i = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: i = 5, ...l } = e;
          return (0, a.jsx)(o.sG.svg, {
            ...l,
            ref: t,
            width: r,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, a.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      i.displayName = "Arrow";
      var l = i;
    },
    84945: (e, t, n) => {
      n.d(t, {
        BN: () => m,
        ER: () => h,
        Ej: () => g,
        UE: () => w,
        UU: () => v,
        cY: () => p,
        jD: () => y,
        we: () => d,
      });
      var r = n(22475),
        o = n(12115),
        a = n(47650),
        i = "undefined" != typeof document ? o.useLayoutEffect : function () {};
      function l(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!l(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function u(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function c(e, t) {
        let n = u(e);
        return Math.round(t * n) / n;
      }
      function s(e) {
        let t = o.useRef(e);
        return (
          i(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: d = [],
            platform: f,
            elements: { reference: p, floating: m } = {},
            transform: h = !0,
            whileElementsMounted: v,
            open: g,
          } = e,
          [y, w] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [b, x] = o.useState(d);
        l(b, d) || x(d);
        let [E, R] = o.useState(null),
          [C, S] = o.useState(null),
          T = o.useCallback((e) => {
            e !== j.current && ((j.current = e), R(e));
          }, []),
          A = o.useCallback((e) => {
            e !== O.current && ((O.current = e), S(e));
          }, []),
          N = p || E,
          P = m || C,
          j = o.useRef(null),
          O = o.useRef(null),
          D = o.useRef(y),
          k = null != v,
          _ = s(v),
          M = s(f),
          L = s(g),
          I = o.useCallback(() => {
            if (!j.current || !O.current) return;
            let e = { placement: t, strategy: n, middleware: b };
            M.current && (e.platform = M.current),
              (0, r.rD)(j.current, O.current, e).then((e) => {
                let t = { ...e, isPositioned: !1 !== L.current };
                F.current &&
                  !l(D.current, t) &&
                  ((D.current = t),
                  a.flushSync(() => {
                    w(t);
                  }));
              });
          }, [b, t, n, M, L]);
        i(() => {
          !1 === g &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1),
            w((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        let F = o.useRef(!1);
        i(
          () => (
            (F.current = !0),
            () => {
              F.current = !1;
            }
          ),
          []
        ),
          i(() => {
            if ((N && (j.current = N), P && (O.current = P), N && P)) {
              if (_.current) return _.current(N, P, I);
              I();
            }
          }, [N, P, I, _, k]);
        let B = o.useMemo(
            () => ({
              reference: j,
              floating: O,
              setReference: T,
              setFloating: A,
            }),
            [T, A]
          ),
          W = o.useMemo(() => ({ reference: N, floating: P }), [N, P]),
          H = o.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!W.floating) return e;
            let t = c(W.floating, y.x),
              r = c(W.floating, y.y);
            return h
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(u(W.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, h, W.floating, y.x, y.y]);
        return o.useMemo(
          () => ({ ...y, update: I, refs: B, elements: W, floatingStyles: H }),
          [y, I, B, W, H]
        );
      }
      let f = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: o } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? (0, r.UE)({ element: n.current, padding: o }).fn(t)
                : {}
              : n
              ? (0, r.UE)({ element: n, padding: o }).fn(t)
              : {};
          },
        }),
        p = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        h = (e, t) => ({ ...(0, r.ER)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] }),
        y = (e, t) => ({ ...(0, r.jD)(e), options: [e, t] }),
        w = (e, t) => ({ ...f(e), options: [e, t] });
    },
    85185: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    89367: (e, t, n) => {
      n.d(t, { q: () => r });
      function r(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
    },
    92293: (e, t, n) => {
      n.d(t, { Oh: () => a });
      var r = n(12115),
        o = 0;
      function a() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null != (e = n[0]) ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null != (t = n[1]) ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
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
    },
    94315: (e, t, n) => {
      n.d(t, { jH: () => a });
      var r = n(12115);
      n(95155);
      var o = r.createContext(void 0);
      function a(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
  },
]);
