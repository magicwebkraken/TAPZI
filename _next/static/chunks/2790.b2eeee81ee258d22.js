"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2790],
  {
    52790: (e, t, a) => {
      a.r(t), a.d(t, { TimerItem: () => m, default: () => x });
      var l = a(95155),
        s = a(59434),
        i = a(12115),
        n = a(30285),
        r = a(86608);
      let x = () => {
          let [e, t] = (0, i.useState)(!1),
            {
              d: a,
              h: x,
              m: c,
              s: d,
            } = (0, r.A)(new Date("2025-11-01T23:59:59"));
          return (0, l.jsxs)("section", {
            className: "relative py-7 md:py-10 lg:py-20 my-7 md:my-10 lg:my-20",
            id: "tapzi-beta",
            children: [
              (0, l.jsx)("img", {
                alt: "background-left",
                src: "/image/landing/mobile-demo/gradient-left.svg",
                className:
                  "w-auto h-full object-cover object-center bottom-0 left-0 absolute",
              }),
              (0, l.jsx)("img", {
                alt: "background-left",
                src: "/image/landing/mobile-demo/gradient-right.svg",
                className:
                  "w-auto h-full object-cover object-center absolute right-0 bottom-0",
              }),
              (0, l.jsx)("div", {}),
            ],
          });
        },
        m = (e) => {
          let { className: t, value: a, label: i, size: n = "lg" } = e;
          return (0, l.jsxs)("div", {
            className: (0, s.cn)(
              "text-black rounded-lg bg-[#0E5BF8] py-2 px-4 md:px-6 h-fit",
              t,
              "sm" === n && "py-1 px-2",
              "md" === n && "py-2 px-2 md:px-4",
              "lg" === n && "py-2 px-4 md:px-6"
            ),
            children: [
              (0, l.jsx)("p", {
                className: (0, s.cn)(
                  "text-2xl md:text-3xl text-center font-semibold",
                  "sm" === n && "text-lg",
                  "md" === n && "text-lg md:text-xl",
                  "lg" === n && "text-2xl md:text-3xl"
                ),
                children: a,
              }),
              (0, l.jsx)("p", {
                className: (0, s.cn)(
                  "text-base text-center font-medium",
                  "sm" === n && "text-xs",
                  "md" === n && "text-sm",
                  "lg" === n && "text-base"
                ),
                children: i,
              }),
            ],
          });
        };
    },
    86608: (e, t, a) => {
      a.d(t, { A: () => s });
      var l = a(12115);
      let s = (e) => {
        let [t, a] = (0, l.useState)({ d: 0, h: 0, m: 0, s: 0 });
        return (
          (0, l.useEffect)(() => {
            let l = setInterval(() => {
              let s = new Date().getTime(),
                i = e.getTime() - s;
              if (i <= 0) {
                clearInterval(l), a({ ...t, d: 0, h: 0, m: 0, s: 0 });
                return;
              }
              let n = Math.floor(i / 864e5),
                r = Math.floor((i % 864e5) / 36e5),
                x = Math.floor((i % 36e5) / 6e4),
                m = Math.floor((i % 6e4) / 1e3);
              a({ ...t, d: n, h: r, m: x, s: m });
            }, 1e3);
            return () => clearInterval(l);
          }, [e]),
          { ...t, isExpired: () => new Date().getTime() > e.getTime() }
        );
      };
    },
  },
]);
