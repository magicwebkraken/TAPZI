"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [543],
  {
    90543: (e, t, a) => {
      a.r(t), a.d(t, { Post: () => f, StatItem: () => j, default: () => h });
      var s = a(95155),
        r = a(59434),
        l = a(12115),
        i = a(24944),
        n = a(6874),
        d = a.n(n),
        m = a(82974),
        c = a(31996),
        o = a(34441),
        x = a(30285);
      let p = [
          {
            name: " Tapzi Dev Release #004",
            date: "September 26, 2025",
            post: "Frontend Alpha Online, Matchmaking System Designed",
            url: "https://docs.tapziwinner.org/tapzi-dev-release/004",
          },
          {
            name: " Tapzi Dev Release #003",
            date: "September 19, 2025",
            post: "Signature Verification Implemented, Chess Server PoC Launched",
            url: "https://docs.tapziwinner.org/tapzi-dev-release/003",
          },
          {
            name: " Tapzi Dev Release #002",
            date: "September 12, 2025",
            post: "Smart Contract Skeleton and Game Engine Planning Initiated",
            url: "https://docs.tapziwinner.org/tapzi-dev-release/002",
          },
          {
            name: " Tapzi Dev Release #001",
            date: "September 05, 2025",
            post: "Foundational Infrastructure, System Architecture & Modular Scope Initiated",
            url: "https://docs.tapziwinner.org/tapzi-dev-release/001",
          },
        ],
        h = () =>
          (0, s.jsxs)("section", {}),
        g = () => {
          let e = (0, l.useRef)(null);
          return (0, s.jsxs)("div", {
            className: "mt-6 sm:mt-8 md:mt-12 lg:mt-16 md:hidden block",
            children: [
              (0, s.jsx)("h3", {
                className:
                  "text-2xl md:text-3xl font-medium text-primary-green pb-6",
                children: "Latest Updates",
              }),
              (0, s.jsx)(c.A, {
                ...{
                  dots: !1,
                  infinite: !0,
                  arrows: !1,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
                ref: e,
                children: p.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      children: (0, s.jsx)(f, {
                        bordered: !0,
                        name: e.name,
                        date: e.date,
                        post: e.post,
                        url: e.url,
                      }),
                    },
                    e.name
                  )
                ),
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-center items-center pt-10 gap-4",
                children: [
                  (0, s.jsx)(o.PrevButton, {
                    className: "cursor-pointer",
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.slickPrev();
                    },
                  }),
                  (0, s.jsx)(o.PrevButton, {
                    className: "rotate-180 cursor-pointer",
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.slickNext();
                    },
                  }),
                ],
              }),
            ],
          });
        },
        u = (e) => {
          let { title: t, children: a, className: l } = e;
          return (0, s.jsxs)("div", {
            style: {
              background:
                "linear-gradient(#081428, #081428) padding-box, linear-gradient(180deg, #19D4D6 0%, #694DFB 100%) border-box",
              border: "2px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className: (0, r.cn)(
              "rounded-xl py-6 px-4 md:px-5 lg:px-8 w-full",
              l
            ),
            children: [
              (0, s.jsx)("h3", {
                className: "text-lg md:text-2xl font-medium text-primary-green",
                children: t,
              }),
              a,
            ],
          });
        },
        f = (e) => {
          let { name: t, post: a, date: r, url: l, bordered: i } = e,
            n = (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("a", {
                  href: l,
                  target: "_blank",
                  className: "hover:underline",
                  children: (0, s.jsx)("p", {
                    className:
                      "flex gap-1 font-bold items-baseline font-medium text-lg",
                    children: t,
                  }),
                }),
                (0, s.jsx)("p", { className: "mt-2", children: a }),
                (0, s.jsx)("div", {
                  className: "text-muted-foreground pt-4",
                  children: r,
                }),
                (0, s.jsx)("div", {
                  className: "flex items-center justify-start gap-10 mt-1",
                  children: (0, s.jsx)(x.$, {
                    asChild: !0,
                    variant: "link",
                    className: "px-0! text-blue-500",
                    children: (0, s.jsx)(d(), {
                      href: l,
                      target: "_blank",
                      children: "Read More",
                    }),
                  }),
                }),
              ],
            });
          return i
            ? (0, s.jsx)("div", {
                style: {
                  background:
                    "linear-gradient(#081428, #081428) padding-box, linear-gradient(180deg, #19D4D6 0%, #694DFB 100%) border-box",
                  border: "2px solid transparent",
                  backdropFilter: "blur(114px)",
                },
                className:
                  "rounded-[10px] px-4 py-6 shadow-[0px_0px_90px_0px_#55555533_inset] bg-gradient-to-b from-white/0 to-white/4 shadow-lg mx-1",
                children: n,
              })
            : (0, s.jsx)("div", {
                className:
                  "rounded-[10px] px-4 py-6 shadow-[0px_0px_90px_0px_#55555533_inset] bg-gradient-to-b from-white/0 to-white/4 shadow-lg",
                children: n,
              });
        },
        j = (e) => {
          let { name: t, value: a, percent: r, text: l } = e;
          return (0, s.jsxs)("div", {
            className:
              "bg-gradient-to-b from-white/0 to-white/4 shadow-lg rounded-lg px-4 py-6",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center justify-between text-lg",
                children: [
                  (0, s.jsx)("p", { children: t }),
                  (0, s.jsx)("p", {
                    className: "text-xs",
                    children: "Coming soon",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex items-center gap-1 my-1",
                children: (0, s.jsx)(i.k, {
                  className: "h-[7px] bg-primary-green/15",
                  indicatorClassName: "bg-primary-green",
                  value: r,
                }),
              }),
              (0, s.jsx)("p", { children: l }),
            ],
          });
        };
    },
  },
]);
