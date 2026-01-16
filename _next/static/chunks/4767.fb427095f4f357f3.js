"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4767],
  {
    34767: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var r = a(95155);
      a(12115);
      var i = a(66766),
        s = a(59434);
      let l = (0, a(19946).A)("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
      var n = a(6874),
        c = a.n(n);
      let d = () =>
          (0, r.jsxs)("div", {
            className: "container relative z-1 py-10 md:py-14 lg:py-20",
            children: [
              (0, r.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal",
                children: "Trust & Transparency",
              }),
              (0, r.jsx)("p", {
                className: "mt-4 text-lg max-w-4xl mx-auto text-center",
                children:
                  "Security, transparency, and regulatory readiness are at the core of Tapzi.",
              }),
              (0, r.jsxs)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-3 justify-between gap-4 mt-8",
                children: [
                  (0, r.jsx)(o, {
                    title: "Complete Audit",
                    image: "/image/coinsult-large.webp",
                    description:
                      "Our smart contracts have been independently reviewed by Coinsult and SolidProof, receiving a 90+ security score.",
                    url: "",
                  }),
                  (0, r.jsx)(o, {
                    title: "KYC Verified",
                    image: "/image/approved-2-white.svg",
                    description:
                      "Team is fully verified with SolidProof’s Gold Tier KYC, ensuring transparency, confirmed identities, and stronger trust with the community.",
                    url: "",
                  }),
                  (0, r.jsx)(o, {
                    title: "Verified Contract",
                    image: "/image/certik-logotype.svg",
                    description:
                      "Our smart contracts are currently undergoing CertiK’s industry-leading audit process, further strengthening Tapzi’s security and credibility. The final report will be shared publicly once complete.",
                    url: "",
                    imageClassName:
                      "h-[40px] md:h-[130px] w-auto md:max-w-[294px] object-contain mx-auto px-6",
                  }),
                ],
              }),
            ],
          }),
        o = (e) => {
          let {
              image: t,
              title: a,
              description: n,
              url: d,
              imageClassName: o,
            } = e,
            p = (0, r.jsxs)("div", {
              style: {
                background:
                  "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
                border: "3px solid transparent",
              },
              className: (0, s.cn)(
                "relative rounded-2xl py-6 px-4 shadow-[0px_0px_90px_0px_#FFFFFF33_inset] w-full hover:scale-101 transition-all duration-300 self-stretch"
              ),
              children: [
                (0, r.jsx)(i.default, {
                  height: 294,
                  width: 294,
                  className: (0, s.cn)(
                    "h-[40px] md:h-[150px] w-auto md:max-w-[294px] object-contain mx-auto px-6",
                    o
                  ),
                  src: t,
                  alt: a,
                }),
                d &&
                  (0, r.jsx)(l, {
                    className: "w-5 h-5 md:w-6 md:h-6 absolute top-5 right-5",
                  }),
                (0, r.jsx)("div", {
                  className: "mt-4",
                  children: (0, r.jsx)("p", {
                    className: "text-center text-sm md:text-base",
                    children: n,
                  }),
                }),
              ],
            });
          return d
            ? (0, r.jsx)(c(), {
                href: d,
                target: "_blank",
                className: "self-stretch",
                passHref: !0,
                children: p,
              })
            : p;
        };
    },
  },
]);
