"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5799],
  {
    10549: (e, t, a) => {
      a.d(t, {
        Accordion: () => c,
        AccordionContent: () => d,
        AccordionItem: () => n,
        AccordionTrigger: () => o,
      });
      var l = a(95155);
      a(12115);
      var s = a(23478),
        r = a(66474),
        i = a(59434);
      function c(e) {
        let { ...t } = e;
        return (0, l.jsx)(s.bL, { "data-slot": "accordion", ...t });
      }
      function n(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)(s.q7, {
          "data-slot": "accordion-item",
          className: (0, i.cn)("border-b last:border-b-0", t),
          ...a,
        });
      }
      function o(e) {
        let { className: t, children: a, arrow: c, ...n } = e;
        return (0, l.jsx)(s.Y9, {
          className: "flex",
          children: (0, l.jsxs)(s.l9, {
            "data-slot": "accordion-trigger",
            className: (0, i.cn)(
              "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
              t
            ),
            ...n,
            children: [
              a,
              c ||
                (0, l.jsx)(r.A, {
                  className:
                    "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
                }),
            ],
          }),
        });
      }
      function d(e) {
        let { className: t, children: a, ...r } = e;
        return (0, l.jsx)(s.UC, {
          "data-slot": "accordion-content",
          className:
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
          ...r,
          children: (0, l.jsx)("div", {
            className: (0, i.cn)("pt-0 pb-4", t),
            children: a,
          }),
        });
      }
    },
    27719: (e, t, a) => {
      a.d(t, { T: () => s });
      var l = a(12115);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 2e3,
          [t, a] = (0, l.useState)(!1),
          s = (e) => {
            try {
              let t = document.createElement("textarea");
              (t.value = e),
                (t.style.position = "fixed"),
                (t.style.opacity = "0"),
                document.body.appendChild(t),
                t.focus(),
                t.select();
              let a = document.execCommand("copy");
              return document.body.removeChild(t), a;
            } catch (e) {
              return console.error("Fallback copy failed:", e), !1;
            }
          };
        return {
          copy: async (t) => {
            try {
              var l, r;
              if (
                null == (r = navigator) || null == (l = r.clipboard)
                  ? void 0
                  : l.writeText
              )
                return (
                  await navigator.clipboard.writeText(t),
                  a(!0),
                  setTimeout(() => a(!1), e),
                  !0
                );
              {
                let l = s(t);
                return a(l), l && setTimeout(() => a(!1), e), l;
              }
            } catch (e) {
              return console.error("Copy failed:", e), a(!1), !1;
            }
          },
          copied: t,
        };
      }
    },
    30285: (e, t, a) => {
      a.d(t, { $: () => n });
      var l = a(95155);
      a(12115);
      var s = a(99708),
        r = a(74466),
        i = a(59434);
      let c = (0, r.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function n(e) {
        let { className: t, variant: a, size: r, asChild: n = !1, ...o } = e,
          d = n ? s.DX : "button";
        return (0, l.jsx)(d, {
          "data-slot": "button",
          className: (0, i.cn)(c({ variant: a, size: r, className: t })),
          ...o,
        });
      }
    },
    45799: (e, t, a) => {
      a.d(t, { A: () => f });
      var l = a(95155);
      a(12115);
      var s = a(69474),
        r = a(59434);
      function i(e) {
        let { ...t } = e;
        return (0, l.jsx)(s._s.Root, { "data-slot": "drawer", ...t });
      }
      function c(e) {
        let { ...t } = e;
        return (0, l.jsx)(s._s.Trigger, {
          "data-slot": "drawer-trigger",
          ...t,
        });
      }
      function n(e) {
        let { ...t } = e;
        return (0, l.jsx)(s._s.Portal, { "data-slot": "drawer-portal", ...t });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)(s._s.Overlay, {
          "data-slot": "drawer-overlay",
          className: (0, r.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...a,
        });
      }
      function d(e) {
        let { className: t, children: a, ...i } = e;
        return (0, l.jsxs)(n, {
          "data-slot": "drawer-portal",
          children: [
            (0, l.jsx)(o, {}),
            (0, l.jsxs)(s._s.Content, {
              "data-slot": "drawer-content",
              className: (0, r.cn)(
                "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
                "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
                "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
                "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
                "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
                t
              ),
              ...i,
              children: [
                (0, l.jsx)("div", {
                  className:
                    "bg-gray-400 mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block",
                }),
                a,
              ],
            }),
          ],
        });
      }
      var h = a(6874),
        x = a.n(h),
        m = a(2145),
        u = a(65057),
        p = a(86124),
        v = a(30285);
      let g = [
          { name: "Home", href: "/" },
          { name: "How to buy", href: "/how-to-buy" },
          { name: "Games", href: "/game" },
        ],
        f = (e) => {
          let { children: t, links: a = g } = e,
            { isConnected: s } = (0, m.F)(),
            { open: n } = (0, p.o1)();
          return (0, l.jsxs)(i, {
            children: [
              (0, l.jsx)(c, {
                asChild: !0,
                children: (0, l.jsx)(v.$, {
                  className: (0, r.cn)(
                    "font-semibold text-base h-10 cursor-pointer rounded-md flex flex-nowrap",
                    "flex md:hidden",
                    "w-10! h-10!"
                  ),
                  variant: "ghost",
                  size: "icon",
                  children: (0, l.jsx)("svg", {
                    className: "w-8! h-8! rotate-180",
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                    viewBox: "0 0 24 24",
                    focusable: "false",
                    "aria-hidden": "true",
                    height: "1em",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                      d: "M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z",
                    }),
                  }),
                }),
              }),
              (0, l.jsxs)(d, {
                className: "px-6 pb-6 flex flex-col gap-4 pb-[80px]",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "mt-6 flex-1 flex flex-wrap justify-center items-center gap-4",
                    children: [
                      a.map((e) =>
                        (0, l.jsx)(
                          x(),
                          {
                            className: (0, r.cn)(
                              "hover:text-primary-green text-lg block",
                              e.className
                            ),
                            href: e.href,
                            children: e.name,
                          },
                          e.name
                        )
                      ),
                      s
                        ? (0, l.jsx)("div", {
                            children: (0, l.jsx)(x(), {
                              href: "/dashboard",
                              children: "Dashboard",
                            }),
                          })
                        : (0, l.jsx)("div", {
                            className: "cursor-pointer",
                            onClick: () => n(),
                            children: "Dashboard",
                          }),
                      (0, l.jsx)("div", {
                        children: (0, l.jsx)(x(), {
                          href: "https://docs.tapziwinner.org/",
                          target: "_blank",
                          className: "hover:text-primary-green text-lg",
                          children: "Docs",
                        }),
                      }),
                    ],
                  }),
                  t,
                  (0, l.jsx)("div", {
                    className:
                      "flex items-center justify-center gap-4 md:gap-6 mt-6",
                    children: (0, l.jsx)(u.SocialLinks, {}),
                  }),
                ],
              }),
            ],
          });
        };
    },
    59434: (e, t, a) => {
      a.d(t, { O: () => i, cn: () => r });
      var l = a(52596),
        s = a(39688);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.QP)((0, l.$)(t));
      }
      let i = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "...",
          a = e.slice(0, 6);
        return "".concat(a).concat(t).concat(e.slice(-6));
      };
    },
    65057: (e, t, a) => {
      a.r(t), a.d(t, { SocialLinks: () => N, default: () => k });
      var l = a(95155),
        s = a(6874),
        r = a.n(s);
      a(12115);
      var i = a(11066),
        c = a(66474),
        n = a(5196),
        o = a(47863),
        d = a(59434);
      function h(e) {
        let { ...t } = e;
        return (0, l.jsx)(i.bL, { "data-slot": "select", ...t });
      }
      function x(e) {
        let { ...t } = e;
        return (0, l.jsx)(i.WT, { "data-slot": "select-value", ...t });
      }
      function m(e) {
        let { className: t, size: a = "default", children: s, ...r } = e;
        return (0, l.jsxs)(i.l9, {
          "data-slot": "select-trigger",
          "data-size": a,
          className: (0, d.cn)(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...r,
          children: [
            s,
            (0, l.jsx)(i.In, {
              asChild: !0,
              children: (0, l.jsx)(c.A, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function u(e) {
        let { className: t, children: a, position: s = "popper", ...r } = e;
        return (0, l.jsx)(i.ZL, {
          children: (0, l.jsxs)(i.UC, {
            "data-slot": "select-content",
            className: (0, d.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === s &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              t
            ),
            position: s,
            ...r,
            children: [
              (0, l.jsx)(v, {}),
              (0, l.jsx)(i.LM, {
                className: (0, d.cn)(
                  "p-1",
                  "popper" === s &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                ),
                children: a,
              }),
              (0, l.jsx)(g, {}),
            ],
          }),
        });
      }
      function p(e) {
        let { className: t, children: a, ...s } = e;
        return (0, l.jsxs)(i.q7, {
          "data-slot": "select-item",
          className: (0, d.cn)(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            t
          ),
          ...s,
          children: [
            (0, l.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, l.jsx)(i.VF, {
                children: (0, l.jsx)(n.A, { className: "size-4" }),
              }),
            }),
            (0, l.jsx)(i.p4, { children: a }),
          ],
        });
      }
      function v(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)(i.PP, {
          "data-slot": "select-scroll-up-button",
          className: (0, d.cn)(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...a,
          children: (0, l.jsx)(o.A, { className: "size-4" }),
        });
      }
      function g(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)(i.wn, {
          "data-slot": "select-scroll-down-button",
          className: (0, d.cn)(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...a,
          children: (0, l.jsx)(c.A, { className: "size-4" }),
        });
      }
      var f = a(30285),
        w = a(24357),
        j = a(82974);
      let b = "0x27e0f917d9df4d1febc7593bffb8bb09c63e44d6";
      var y = a(27719),
        L = a(66766),
        z = a(10549);
      let N = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(r(), {
                href: "https://t.me/tapzione",
                target: "_blank",
                className: "hover:text-primary-green",
                children: (0, l.jsx)(j.hZ, {
                  className: "h-6 w-6 md:h-7 md:w-7",
                }),
              }),
              (0, l.jsx)(r(), {
                href: "https://x.com/tapzione",
                target: "_blank",
                className: "hover:text-primary-green",
                children: (0, l.jsx)(j.Fi, {
                  className: "h-6 w-6 md:h-7 md:w-7",
                }),
              }),
            ],
          }),
        k = (e) => {
          let {
              menuItems: t = [
                {
                  title: "Quick Links",
                  links: [
                 
                    {
                      text: "Audience",
                      url: "https://docs.tapziwinner.org/market-and-audience",
                    },
                    { text: "Roadmap", url: "https://docs.tapziwinner.org/roadmap" },
                  ],
                },
                {
                  title: "Contact",
                  links: [
                    { text: "Twitter/X", url: "https://x.com/tapzione" },
                    { text: "Community", url: "https://t.me/tapzione" },
                  ],
                },
              ],
              bottomLinks: a = [
              ],
            } = e,
            { copied: s, copy: i } = (0, y.T)();
          return (0, l.jsx)("div", {
            className: "pb-10 pt-10 md:pt-20 relative",
            style: {
              background:
                "linear-gradient(176.55deg, #010C21 50.07%, #8B2CCD 184.88%)",
            },
            children: (0, l.jsxs)("div", {
              className: "container relative z-1",
              children: [
                (0, l.jsxs)("footer", {
                  className: "hidden md:block mt-5 md:mt-20",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "grid grid-cols-2 gap-8 lg:grid-cols-5",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "col-span-2 mb-8 lg:mb-0",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "flex items-center gap-2 lg:justify-start",
                              children: (0, l.jsx)(r(), {
                                href: "/",
                                className: "uppercase font-bold",
                                children: (0, l.jsx)(L.default, {
                                  src: "/logo.webp",
                                  className: "h-12 w-auto object-fit-contain",
                                  width: 100,
                                  height: 100,
                                  alt: "Logo",
                                }),
                              }),
                            }),
                            (0, l.jsxs)("p", {
                              className:
                                "mt-4 md:mt-6 text-lg lg:text-xl max-w-sm",
                              children: [
                                "World's 1",
                                (0, l.jsx)("sup", { children: "st" }),
                                " Web3 Gaming Platform Where Skill Decides the Winner.",
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "flex items-center gap-4 md:gap-6 mt-6",
                              children: (0, l.jsx)(N, {}),
                            }),
                          ],
                        }),
                        t.map((e, t) =>
                          (0, l.jsxs)(
                            "div",
                            {
                              children: [
                                (0, l.jsx)("h3", {
                                  className:
                                    "mb-8 font-medium text-xl lg:text-[22px]",
                                  children: e.title,
                                }),
                                (0, l.jsxs)("ul", {
                                  className: "space-y-4",
                                  children: [
                                    e.links.map((e, t) =>
                                      (0, l.jsx)(
                                        "li",
                                        {
                                          className:
                                            "hover:text-primary-green font-medium",
                                          children: (0, l.jsx)("a", {
                                            href: e.url,
                                            children: e.text,
                                          }),
                                        },
                                        t
                                      )
                                    ),
                                    "Contact" === e.title &&
                                      (0, l.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            children: [
                                              (0, l.jsx)("p", {
                                                className: "font-medium",
                                                children: "Contract Address",
                                              }),
                                              (0, l.jsxs)("div", {
                                                className:
                                                  "relative  mt-4 flex gap-4 items-center justify-between",
                                                children: [
                                                  (0, l.jsx)("div", {
                                                    style: {
                                                      position: "absolute",
                                                      background:
                                                        "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                                      opacity: 0.1,
                                                      height: "100%",
                                                      width: "100%",
                                                      top: 0,
                                                      left: 0,
                                                      border:
                                                        "1px solid #FFFFFF",
                                                      boxSizing: "border-box",
                                                      borderRadius: "10px",
                                                      transform:
                                                        "rotate(180deg')",
                                                      pointerEvents: "none",
                                                    },
                                                  }),
                                                  (0, l.jsx)("p", {
                                                    className: "pl-2",
                                                    children: (0, d.O)(b),
                                                  }),
                                                  (0, l.jsx)(f.$, {
                                                    disabled: s,
                                                    onClick: () => i(b),
                                                    size: "icon",
                                                    variant: "ghost",
                                                    children: s
                                                      ? (0, l.jsx)(n.A, {
                                                          className: "w-4",
                                                        })
                                                      : (0, l.jsx)(w.A, {
                                                          className: "w-4",
                                                        }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-base font-medium md:flex-row md:items-center md:text-lg",
                      children: [
                        (0, l.jsxs)("p", {
                          children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            ". All rights reserved.",
                          ],
                        }),
                        (0, l.jsx)("ul", {
                          className: "flex gap-4",
                          children: a.map((e, t) =>
                            (0, l.jsx)(
                              "li",
                              {
                                className: "hover:text-primary-green",
                                children: (0, l.jsx)("a", {
                                  href: e.url,
                                  children: e.text,
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("footer", {
                  className: "block md:hidden",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "col-span-2 mb-8 lg:mb-0",
                      children: [
                        (0, l.jsx)("div", {
                          className: "flex items-center gap-2 lg:justify-start",
                          children: (0, l.jsx)(r(), {
                            href: "/",
                            className: "uppercase font-bold",
                            children: (0, l.jsx)(L.default, {
                              src: "/logo.webp",
                              className: "h-12 w-auto object-fit-contain",
                              width: 100,
                              height: 100,
                              alt: "Logo",
                            }),
                          }),
                        }),
                        (0, l.jsxs)("p", {
                          className: "mt-4 md:mt-6 text-lg lg:text-xl max-w-sm",
                          children: [
                            "World's 1",
                            (0, l.jsx)("sup", { children: "st" }),
                            " Web3 Gaming Platform Where Skill Decides the Winner.",
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)(z.Accordion, {
                      type: "single",
                      collapsible: !0,
                      className: "w-full",
                      defaultValue: "item-1",
                      children: t.map((e, t) =>
                        (0, l.jsxs)(
                          z.AccordionItem,
                          {
                            value: "item-".concat(t + 1),
                            className: "border-b",
                            children: [
                              (0, l.jsx)(z.AccordionTrigger, {
                                className:
                                  "font-bold text-lg border-none rounded-none [&[data-state=open]>div>svg.minus]:block [&[data-state=closed]>div>svg.plus]:block",
                                arrow: (0, l.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center w-[24px] h-[22px]",
                                  children: [
                                    (0, l.jsx)("svg", {
                                      className: "plus hidden",
                                      width: "24",
                                      height: "22",
                                      viewBox: "0 0 24 22",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, l.jsx)("path", {
                                        d: "M11.1874 0.695312V10.9885M11.1874 21.2817V10.9885M11.1874 10.9885H0.0708008M11.1874 10.9885H23.1275",
                                        stroke: "white",
                                        strokeWidth: "4",
                                      }),
                                    }),
                                    (0, l.jsx)("svg", {
                                      className: "minus hidden",
                                      width: "23",
                                      height: "5",
                                      viewBox: "0 0 23 5",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, l.jsx)("path", {
                                        d: "M-0.00830078 2.09863H11.0834H22.9966",
                                        stroke: "white",
                                        strokeWidth: "4",
                                      }),
                                    }),
                                  ],
                                }),
                                children: e.title,
                              }),
                              (0, l.jsx)(z.AccordionContent, {
                                className: "flex flex-col gap-4 text-balance ",
                                children: e.links.map((e, t) =>
                                  (0, l.jsx)(
                                    r(),
                                    {
                                      href: e.url,
                                      className:
                                        "hover:text-primary-green text-[16px]",
                                      children: e.text,
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex items-center justify-center flex-col mt-6",
                      children: [
                        (0, l.jsxs)("p", {
                          children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            ". All rights reserved.",
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex items-center justify-center gap-4 md:gap-6 mt-6",
                          children: [" ", (0, l.jsx)(N, {})],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    82974: (e, t, a) => {
      a.d(t, {
        Fi: () => o,
        Hb: () => p,
        Mh: () => h,
        O$: () => f,
        Tx: () => b,
        VJ: () => c,
        WE: () => v,
        YH: () => x,
        c3: () => u,
        e0: () => r,
        ft: () => s,
        hZ: () => i,
        h_: () => w,
        kI: () => m,
        ky: () => n,
        oW: () => d,
        xN: () => g,
        zW: () => j,
      });
      var l = a(95155);
      a(12115);
      let s = (e) =>
          (0, l.jsxs)("svg", {
            width: "44",
            height: "72",
            viewBox: "0 0 44 72",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("path", {
                d: "M21.8363 0L21.359 1.62128V48.663L21.8363 49.1392L43.6721 36.2318L21.8363 0Z",
                fill: "currentColor",
              }),
              (0, l.jsx)("path", {
                d: "M21.8364 0L0 36.2318L21.8364 49.1392V26.3064V0Z",
                fill: "currentColor",
              }),
              (0, l.jsx)("path", {
                d: "M21.8364 53.2734L21.5674 53.6015V70.3584L21.8364 71.1437L43.6855 40.3728L21.8364 53.2734Z",
                fill: "currentColor",
              }),
              (0, l.jsx)("path", {
                d: "M21.8364 71.1437V53.2734L0 40.3728L21.8364 71.1437Z",
                fill: "currentColor",
              }),
              (0, l.jsx)("path", {
                d: "M21.8364 49.1392L43.6722 36.2318L21.8364 26.3064V49.1392Z",
                fill: "currentColor",
              }),
              (0, l.jsx)("path", {
                d: "M0 36.2318L21.8364 49.1392V26.3064L0 36.2318Z",
                fill: "currentColor",
              }),
            ],
          }),
        r = (e) =>
          (0, l.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 80 80",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M40 18.08L24.4634 33.6166L24.4637 33.616L15.424 24.576L40 0L64.584 24.5834L55.544 33.6234L40 18.08ZM9.04032 30.9584L0 40L9.03968 49.0384L18.08 39.9981L9.04032 30.9584ZM24.4634 46.3843L40 61.92L55.5437 46.377L64.5885 55.4122L64.584 55.417L40 80L15.424 55.424L15.4112 55.4112L24.4634 46.3843ZM70.9603 30.9635L61.92 40.0038L70.96 49.0435L80 40.0032L70.9603 30.9635Z",
                fill: "white",
              }),
              (0, l.jsx)("path", {
                d: "M49.1686 39.9952H49.1725L40 30.8221L33.2202 37.6L32.4413 38.3792L30.8349 39.9859L30.8221 39.9984L30.8349 40.0115L40 49.1779L49.1731 40.0048L49.1776 39.9997L49.1693 39.9952",
                fill: "white",
              }),
            ],
          }),
        i = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "36",
            height: "36",
            viewBox: "0 0 20 20",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m4.442 6c-.381.007-.966.207-3.779 1.362a485 485 0 0 0-5.907 2.512q-.72.283-.753.553c-.044.346.46.453 1.094.657c.517.166 1.213.36 1.575.368q.492.01 1.098-.4q4.139-2.76 4.273-2.789c.063-.014.15-.032.21.02c.059.052.053.15.046.177c-.05.211-2.641 2.538-2.79 2.691l-.072.072c-.55.543-1.105.898-.147 1.521c.866.563 1.37.922 2.26 1.5c.57.368 1.017.805 1.605.752c.271-.025.55-.276.693-1.026c.335-1.77.995-5.608 1.147-7.19a1.7 1.7 0 0 0-.017-.393a.42.42 0 0 0-.144-.27c-.121-.098-.309-.118-.392-.117",
            }),
          }),
        c = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73",
            }),
          }),
        n = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z",
            }),
          }),
        o = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "36",
            height: "36",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23",
            }),
          }),
        d = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3",
            }),
          }),
        h = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsxs)("g", {
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  fill: "#ff5c16",
                  d: "m19.821 19.918l-3.877-1.131l-2.924 1.712h-2.04l-2.926-1.712l-3.875 1.13L3 16.02l1.179-4.327L3 8.034L4.179 3.5l6.056 3.544h3.53L19.821 3.5L21 8.034l-1.179 3.658L21 16.02z",
                }),
                (0, l.jsx)("path", {
                  fill: "#ff5c16",
                  d: "m4.18 3.5l6.055 3.547l-.24 2.434zm3.875 12.52l2.665 1.99l-2.665.777zm2.452-3.286l-.512-3.251l-3.278 2.21h-.002v.001l.01 2.275l1.33-1.235zM19.82 3.5l-6.056 3.547l.24 2.434zm-3.875 12.52l-2.665 1.99l2.665.777zm1.339-4.326v-.002zl-3.279-2.21l-.512 3.25h2.451l1.33 1.236z",
                }),
                (0, l.jsx)("path", {
                  fill: "#e34807",
                  d: "m8.054 18.787l-3.875 1.13L3 16.022h5.054zm2.452-6.054l.74 4.7l-1.026-2.614l-3.497-.85l1.33-1.236zm5.44 6.054l3.875 1.13L21 16.022h-5.055zm-2.452-6.054l-.74 4.7l1.026-2.614l3.497-.85l-1.331-1.236z",
                }),
                (0, l.jsx)("path", {
                  fill: "#ff8d5d",
                  d: "m3 16.02l1.179-4.328h2.535l.01 2.276l3.496.85l1.026 2.613l-.527.576l-2.665-1.989H3zm18 0l-1.179-4.328h-2.535l-.01 2.276l-3.496.85l-1.026 2.613l.527.576l2.665-1.989H21zm-7.235-8.976h-3.53l-.24 2.435l1.251 7.95h1.508l1.252-7.95z",
                }),
                (0, l.jsx)("path", {
                  fill: "#661800",
                  d: "M4.179 3.5L3 8.034l1.179 3.658h2.535l3.28-2.211zm5.594 10.177H8.625l-.626.6l2.222.54zM19.821 3.5L21 8.034l-1.179 3.658h-2.535l-3.28-2.211zm-5.593 10.177h1.15l.626.6l-2.224.541zm-1.209 5.271l.262-.94l-.527-.575h-1.509l-.527.575l.262.94",
                }),
                (0, l.jsx)("path", {
                  fill: "#c0c4cd",
                  d: "M13.02 18.948V20.5h-2.04v-1.552z",
                }),
                (0, l.jsx)("path", {
                  fill: "#e7ebf6",
                  d: "m8.055 18.785l2.927 1.714v-1.552l-.262-.94zm7.89 0L13.02 20.5v-1.552l.262-.94z",
                }),
              ],
            }),
          }),
        x = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "M7.415 8.912a1.13 1.13 0 0 1 1.133 0l2.589 1.546l1.758 1.006l2.594 1.545c.328.201.762.201 1.127 0l2.06-1.207c.333-.2.736-.571.736-.974V8.446c0-.402-.371-.773-.741-.974l-2.023-1.176a1.13 1.13 0 0 0-1.127 0l-2.028 1.176c-.328.2-.434.572-.434.974v1.54L11.47 8.95V7.398c0-.403-.106-.773.264-.974L15.49 4.21a1.13 1.13 0 0 1 1.127 0l3.817 2.213a1.09 1.09 0 0 1 .567.979v4.468a1.1 1.1 0 0 1-.567.974l-3.817 2.213a1.13 1.13 0 0 1-1.127 0l-2.594-1.509l-1.758-1.042l-2.594-1.51a1.13 1.13 0 0 0-1.128 0l-2.022 1.176c-.334.201-.805.572-.805.974v2.382c0 .403.44.773.805.974l2.022 1.207c.334.202.768.202 1.133 0l2.022-1.175c.334-.201.9-.572.9-.974v-1.54l1.589 1.037v1.546c0 .402-.36.773-.725.974l-3.828 2.208c-.328.206-.763.206-1.128 0l-3.817-2.213A1.17 1.17 0 0 1 3 16.604v-4.468c0-.402.201-.773.566-.974z",
            }),
          }),
        m = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "#3b99fc",
              d: "M6.685 8.71c2.935-2.813 7.695-2.813 10.63 0l.353.339a.35.35 0 0 1 0 .51l-1.208 1.158a.194.194 0 0 1-.266 0l-.486-.466c-2.048-1.963-5.368-1.963-7.416 0l-.52.498a.194.194 0 0 1-.266 0L6.297 9.592a.35.35 0 0 1 0-.51zm13.13 2.396l1.075 1.03a.35.35 0 0 1 0 .51l-4.85 4.648a.39.39 0 0 1-.531 0l-3.443-3.299a.097.097 0 0 0-.132 0l-3.442 3.3a.39.39 0 0 1-.532 0l-4.85-4.65a.35.35 0 0 1 0-.508l1.076-1.031a.387.387 0 0 1 .531 0l3.442 3.299a.097.097 0 0 0 .133 0l3.442-3.3a.387.387 0 0 1 .532 0l3.442 3.3a.097.097 0 0 0 .133 0l3.442-3.3a.39.39 0 0 1 .531 0",
            }),
          }),
        u = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsxs)("g", {
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z",
                }),
                (0, l.jsx)("path", {
                  fill: "currentColor",
                  d: "M17.42 3a2 2 0 0 1 1.736 1.008L22.49 9.84a2 2 0 0 1-.322 2.406l-9.283 9.283a1.25 1.25 0 0 1-1.768 0l-9.283-9.283a2 2 0 0 1-.322-2.406l3.333-5.833A2 2 0 0 1 6.58 3zM15 6H9a1 1 0 0 0-.117 1.993L9 8h2v1.545c-.758.07-1.447.217-2.004.426c-.395.148-.749.336-1.013.571s-.483.557-.483.958s.219.724.483.958c.264.235.618.423 1.013.57c.594.223 1.338.377 2.157.44a1 1 0 0 0-.146.416L11 14v2a1 1 0 0 0 1.993.117L13 16v-2a1 1 0 0 0-.153-.532c.819-.063 1.563-.216 2.157-.44c.395-.147.749-.335 1.013-.57s.483-.557.483-.958s-.219-.724-.483-.958c-.264-.235-.618-.423-1.013-.57a7.5 7.5 0 0 0-1.683-.392L13 9.545V8h2a1 1 0 0 0 .117-1.993zm-2.001 4.55a6.8 6.8 0 0 1 1.654.357c.329.124.56.259.7.383a.46.46 0 0 1 .14.178l.007.032l-.007.032a.46.46 0 0 1-.14.178c-.14.124-.371.26-.7.382c-.655.246-1.593.408-2.653.408s-1.998-.162-2.653-.408c-.329-.123-.56-.258-.701-.382a.46.46 0 0 1-.14-.178L8.5 11.5c0-.013.005-.085.146-.21s.372-.26.701-.382c.44-.165 1.007-.293 1.654-.358a1 1 0 0 0 1.998 0",
                }),
              ],
            }),
          }),
        p = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M12 21c4.99 0 9-4.01 9-9s-4.01-9-9-9s-9 4.01-9 9s4.01 9 9 9m2.475-7.578c0-1.31-.787-1.76-2.362-1.946c-1.125-.152-1.35-.45-1.35-.978c0-.523.377-.86 1.125-.86c.675 0 1.052.224 1.237.787c.04.112.152.185.265.185h.596a.256.256 0 0 0 .264-.259v-.039c-.152-.827-.827-1.614-1.687-1.687v-.827c0-.152-.113-.265-.298-.298h-.495c-.152 0-.293.112-.332.298v.827c-1.125.151-1.873 1.012-1.873 1.951c0 1.238.748 1.722 2.323 1.913c1.052.185 1.39.41 1.39 1.012c0 .597-.53 1.013-1.238 1.013c-.98 0-1.316-.416-1.429-.979c-.034-.146-.146-.225-.259-.225h-.641a.256.256 0 0 0-.259.264v.04c.146.934.748 1.575 1.986 1.76v.833c0 .152.112.253.298.293h.54c.146 0 .248-.102.287-.293v-.833c1.125-.185 1.912-.939 1.912-1.952m-6.262 2.803a5.6 5.6 0 0 0 1.875 1.135c.112.079.225.225.225.338v.528c0 .073 0 .113-.04.146c-.033.152-.185.225-.337.152a6.751 6.751 0 0 1 0-12.864c.04-.034.112-.034.152-.034c.152.034.225.147.225.298v.524c0 .19-.073.303-.225.376a5.55 5.55 0 0 0-3.336 3.336a5.59 5.59 0 0 0 1.46 6.065m5.514-10.413c.034-.152.186-.225.338-.152a6.8 6.8 0 0 1 4.387 4.427c1.125 3.56-.827 7.352-4.387 8.477c-.04.033-.113.033-.152.033c-.152-.033-.225-.146-.225-.298v-.523c0-.191.073-.303.225-.377a5.55 5.55 0 0 0 3.335-3.335a5.585 5.585 0 0 0-3.335-7.2c-.113-.079-.225-.225-.225-.377v-.523c0-.079 0-.113.04-.152",
              clipRule: "evenodd",
            }),
          }),
        v = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "m23.876 18.031l-3.962 4.14a.9.9 0 0 1-.306.21a.9.9 0 0 1-.367.074H.46a.47.47 0 0 1-.252-.073a.45.45 0 0 1-.17-.196a.44.44 0 0 1-.031-.255a.44.44 0 0 1 .117-.23l3.965-4.139a.9.9 0 0 1 .305-.21a.9.9 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.45.45 0 0 1 .17.196a.44.44 0 0 1 .031.255a.44.44 0 0 1-.117.23m-3.962-8.335a.9.9 0 0 0-.306-.21a.9.9 0 0 0-.367-.075H.46a.47.47 0 0 0-.252.073a.45.45 0 0 0-.17.197a.44.44 0 0 0-.031.254a.44.44 0 0 0 .117.23l3.965 4.14a.9.9 0 0 0 .305.21a.9.9 0 0 0 .366.074h18.78a.47.47 0 0 0 .252-.073a.45.45 0 0 0 .17-.196a.44.44 0 0 0 .031-.255a.44.44 0 0 0-.117-.23zM.46 6.723h18.782a.9.9 0 0 0 .367-.075a.9.9 0 0 0 .306-.21l3.962-4.14a.44.44 0 0 0 .117-.23a.44.44 0 0 0-.032-.254a.45.45 0 0 0-.17-.196a.47.47 0 0 0-.252-.073H4.76a.9.9 0 0 0-.366.074a.9.9 0 0 0-.305.21L.125 5.97a.44.44 0 0 0-.117.23a.44.44 0 0 0 .03.254a.45.45 0 0 0 .17.196a.47.47 0 0 0 .252.074z",
            }),
          }),
        g = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M4.42 3.186a.57.57 0 0 1 .552-.17L16.875 5.93a.5.5 0 0 1 .198.092l2.422 1.767a.567.567 0 0 1 .134.773l-8.332 12.191a.563.563 0 0 1-.998-.13L4.306 3.753a.57.57 0 0 1 .113-.566M6.383 6.23l4.16 11.712l.684-6.069zm5.958 5.838l-.695 6.175l5.883-8.61zm5.719-3.93l-3.791 1.78l2.54-2.691zm-2.396-1.343L6.411 4.531l5.425 6.318z",
              clipRule: "evenodd",
            }),
          }),
        f = (e) =>
          (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: [
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "m13.353 13.368l-.885 2.39a.3.3 0 0 0 0 .205l1.523 4.112l1.76-1.001l-2.113-5.706a.152.152 0 0 0-.285 0m1.774-4.019a.152.152 0 0 0-.285 0l-.885 2.39a.3.3 0 0 0 0 .205l2.494 6.732l1.761-1.001z",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M11.998 4.115a.3.3 0 0 1 .126.033l6.715 3.818a.25.25 0 0 1 .126.214v7.635c0 .089-.048.17-.126.214l-6.715 3.819a.25.25 0 0 1-.126.032a.3.3 0 0 1-.125-.032l-6.715-3.815a.25.25 0 0 1-.126-.215V8.182c0-.089.048-.17.126-.215l6.715-3.818a.26.26 0 0 1 .125-.034m0-1.115c-.238 0-.478.06-.692.183L4.593 7A1.36 1.36 0 0 0 3.9 8.182v7.635c0 .487.264.938.693 1.181l6.714 3.819a1.41 1.41 0 0 0 1.386 0l6.714-3.818a1.36 1.36 0 0 0 .693-1.182V8.182A1.36 1.36 0 0 0 19.407 7l-6.716-3.817A1.4 1.4 0 0 0 11.998 3",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "m7.559 18.685l.617-1.666l1.244 1.018l-1.163 1.046zm3.874-11.05H9.731a.3.3 0 0 0-.285.197l-3.649 9.852l1.761 1.001l4.018-10.849a.15.15 0 0 0-.143-.2",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M14.412 7.635h-1.703a.3.3 0 0 0-.284.197l-4.167 11.25l1.761 1l4.535-12.246a.15.15 0 0 0-.142-.2",
              }),
            ],
          }),
        w = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsx)("path", {
              fill: "currentColor",
              d: "M11.984 21C16.964 21 21 16.97 21 12s-4.036-9-9.016-9C7.26 3 3.384 6.627 3 11.244h11.917v1.513H3C3.385 17.373 7.26 21 11.984 21",
            }),
          }),
        j = (e) =>
          (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 36 36",
            ...e,
            children: [
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9m-.1-7.7q.15 0 0 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8S15 14 15 12.5c0-1.6 1.3-2.9 2.8-2.9",
                className: "clr-i-outline clr-i-outline-path-1",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M32.7 16.7c-1.9-1.7-4.4-2.6-7-2.5h-.8q-.3 1.2-.9 2.1c.6-.1 1.1-.1 1.7-.1c1.9-.1 3.8.5 5.3 1.6V25h2v-8z",
                className: "clr-i-outline clr-i-outline-path-2",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M23.4 7.8c.5-1.2 1.9-1.8 3.2-1.3c1.2.5 1.8 1.9 1.3 3.2c-.4.9-1.3 1.5-2.2 1.5c-.2 0-.5 0-.7-.1c.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1c2.5 0 4.5-2 4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6 0-3 .8-3.8 2.2c.5.3 1 .7 1.4 1.3",
                className: "clr-i-outline clr-i-outline-path-3",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M12 16.4q-.6-.9-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6c.6 0 1.2.1 1.7.2",
                className: "clr-i-outline clr-i-outline-path-4",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "M10.3 13.1c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4c-.2.1-.5.1-.7.1c-1.3 0-2.4-1.1-2.4-2.4S9 6.3 10.3 6.3c1 0 1.9.6 2.3 1.5c.4-.5 1-1 1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5s-2.8 4-1.5 6.1c.8 1.3 2.2 2.1 3.8 2.1",
                className: "clr-i-outline clr-i-outline-path-5",
              }),
              (0, l.jsx)("path", {
                fill: "currentColor",
                d: "m26.1 22.7l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4c-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4c2.2-.1 4.4.8 6 2.4z",
                className: "clr-i-outline clr-i-outline-path-6",
              }),
              (0, l.jsx)("path", { fill: "none", d: "M0 0h36v36H0z" }),
            ],
          }),
        b = (e) =>
          (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, l.jsxs)("g", {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.5",
              children: [
                (0, l.jsx)("ellipse", {
                  cx: "15.5",
                  cy: "11",
                  rx: "6.5",
                  ry: "2",
                }),
                (0, l.jsx)("path", {
                  d: "M22 15.5c0 1.105-2.91 2-6.5 2s-6.5-.895-6.5-2",
                }),
                (0, l.jsx)("path", {
                  d: "M22 11v8.8c0 1.215-2.91 2.2-6.5 2.2S9 21.015 9 19.8V11",
                }),
                (0, l.jsx)("ellipse", {
                  cx: "8.5",
                  cy: "4",
                  rx: "6.5",
                  ry: "2",
                }),
                (0, l.jsx)("path", {
                  d: "M6 11c-1.892-.23-3.63-.825-4-2m4 7c-1.892-.23-3.63-.825-4-2",
                }),
                (0, l.jsx)("path", {
                  d: "M6 21c-1.892-.23-3.63-.826-4-2V4m13 2V4",
                }),
              ],
            }),
          });
    },
  },
]);
