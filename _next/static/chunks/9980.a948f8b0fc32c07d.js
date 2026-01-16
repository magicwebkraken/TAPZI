"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9980],
  {
    59980: (e, t, r) => {
      r.r(t), r.d(t, { default: () => o });
      var s = r(95155),
        a = r(59434),
        i = r(12115),
        n = r(31996),
        l = r(34441);
      let o = () =>
          (0, s.jsxs)("div", {
            className: "container relative z-1 pt-10 md:pt-14 lg:pt-20",
            children: [
              (0, s.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal",
                children: "Make Your $TAPZI Work For You",
              }),
              (0, s.jsx)("p", {
                className: "mt-4 text-lg max-w-4xl mx-auto text-center",
                children:
                  "Tapzi rewards players and early supporters who\xa0stake, hold & grow with the platform.",
              }),
              (0, s.jsxs)("div", {
                className:
                  "hidden md:grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-10 md:mt-14 lg:mt-16",
                children: [
                  (0, s.jsx)(c, {
                    title: "Passive Income",
                    before: "/assets/utility/passive.png",
                    after: "/assets/utility/passive.png",
                    description:
                      "Use $TAPZI to enter matches and earn real rewards.\xa0The better you play, the more you can win..",
                  }),
                  (0, s.jsx)(c, {
                    title: "Unlock Bigger Matches",
                    before: "/assets/utility/unlock.png",
                    after: "/assets/utility/unlock.png",
                    description:
                      "Holding or staking more $TAPZI lets you play in matches\xa0with bigger stakes and better winnings.",
                    isActive: !0,
                  }),
                  (0, s.jsx)(c, {
                    title: "Grow with the Platforms",
                    before: "/assets/utility/grow.png",
                    after: "/assets/utility/grow.png",
                    description:
                      "Win TAPZI by demonstrating your skill in competitive gameplay.",
                  }),
                ],
              }),
              (0, s.jsx)(d, {}),
            ],
          }),
        d = () => {
          let e = (0, i.useRef)(null);
          return (0, s.jsxs)("div", {
            className: "mt-10 md:mt-12 lg:mt-16 md:hidden block",
            children: [
              (0, s.jsxs)(n.A, {
                ...{
                  dots: !1,
                  infinite: !0,
                  arrows: !1,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
                ref: e,
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(x, {
                      index: 1,
                      title: "Passive Income",
                      image: "/assets/utility/passive.png",
                      description:
                        "Use $TAPZI to enter matches and earn real rewards.\xa0The better you play, the more you can win..",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(x, {
                      index: 2,
                      title: "Unlock Bigger Matches",
                      imageClass: "scale-125",
                      image: "/assets/utility/unlock.png",
                      description:
                        "Holding or staking more $TAPZI lets you play in matches\xa0with bigger stakes and better winnings.",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(x, {
                      index: 3,
                      title: "Grow with the Platforms",
                      image: "/assets/utility/grow.png",
                      description:
                        "Win TAPZI by demonstrating your skill in competitive gameplay.",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-center items-center pt-10 gap-4",
                children: [
                  (0, s.jsx)(l.PrevButton, {
                    className: "cursor-pointer",
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.slickPrev();
                    },
                  }),
                  (0, s.jsx)(l.PrevButton, {
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
        c = (e) => {
          let {
            before: t,
            after: r,
            title: i,
            description: n,
            isActive: l,
          } = e;
          return (0, s.jsxs)("div", {
            style: {
              background: l
                ? "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg, rgba(25, 212, 214, 0.7) 0%, rgba(139, 44, 205, 0.7) 100%)  border-box"
                : "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(16,24,39,0.4) 100%) border-box",
              border: "2px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className:
              "rounded-xl px-4 md:px-5 lg:px-10 py-6 md:py-8 lg:py-10 w-full group flex flex-col gap-4 md:gap-0 min-h-[250px]",
            onMouseOver: (e) => {
              e.currentTarget.style.background =
                "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg, rgba(25, 212, 214, 0.7) 0%, rgba(139, 44, 205, 0.7) 100%)  border-box";
            },
            onMouseOut: (e) => {
              e.currentTarget.style.background = l
                ? "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg, rgba(25, 212, 214, 0.7) 0%, rgba(139, 44, 205, 0.7) 100%)  border-box"
                : "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(16,24,39,0.4) 100%) border-box";
            },
            children: [
              (0, s.jsx)("div", {
                className: (0, a.cn)(
                  "hidden md:flex w-16 sm:w-20 md:w-52 h-16 sm:h-20 md:h-52 mx-auto aspect-square pt-0 md:pt-[37px] pl-0 md:pl-[50px] group-hover:bg-[url(/image/landing/token-utility/inner-bg.png)] bg-no-repeat bg-contain bg-center",
                  l &&
                    "bg-none md:bg-[url(/image/landing/token-utility/inner-bg.png)]"
                ),
                children: (0, s.jsxs)("div", {
                  className:
                    "h-16 sm:h-20 md:w-28 w-16 sm:w-20 md:h-28 rounded-xl md:rounded-3xl flex justify-center items-center p-2 border",
                  style: {
                    boxShadow:
                      "0px 2.35px 23.54px 0px #0000001A, box-shadow: 0px 2.35px 37.33px 0px #FFFFFF26 inset",
                  },
                  children: [
                    (0, s.jsx)("img", {
                      className:
                        "w-10 sm:w-12 md:w-20 h-fit  object-contain object-center group-hover:hidden",
                      src: l ? r : t,
                      alt: i,
                    }),
                    (0, s.jsx)("img", {
                      className:
                        "w-10 sm:w-12 md:w-20 h-fit  object-contain object-center hidden group-hover:block",
                      src: r,
                      alt: i,
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "flex justify-center items-center md:hidden",
                children: (0, s.jsx)("div", {
                  style: {
                    boxShadow:
                      "0px 1.83572px 18.3572px rgba(0, 0, 0, 0.1), inset 0px 1.83572px 29.1105px rgba(255, 255, 255, 0.15)",
                    borderRadius: "18.3572px",
                    background: "rgba(255, 255, 255, 0.01)",
                    padding: "10px",
                    flexShrink: 0,
                  },
                  children: (0, s.jsx)("img", {
                    className:
                      "w-20 h-fit  object-contain object-center hidden group-hover:block",
                    src: t,
                    alt: i,
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: (0, a.cn)(
                  "mt-4 text-muted-foreground group-hover:text-white",
                  l && "text-white"
                ),
                children: [
                  (0, s.jsx)("h3", {
                    className: (0, a.cn)(
                      "text-center text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-primary-green",
                      l && "text-primary-green lg:text-4xl"
                    ),
                    children: i,
                  }),
                  (0, s.jsx)("p", {
                    className: "text-center mt-2 md:mt-4 max-w-88 mx-auto",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        },
        x = (e) => {
          let {
            title: t,
            description: r,
            image: a,
            index: i,
            imageClass: n,
          } = e;
          return (0, s.jsxs)("div", {
            className:
              "bg-[#0D2E39] flex flex-col justify-between rounded-[37.8835px] shadow-[inset_0px_11.4798px_25.2556px_#3D87A3] p-4 mx-2 h-[400px] relative",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute flex items-center justify-center bg-[#0D2E39] rounded-[37.8835px] shadow-[inset_0px_11.4798px_25.2556px_#3D87A3] p-4 h-12 w-12 top-6 left-6",
                children: (0, s.jsx)("span", {
                  className: "text-2xl text-center font-bold",
                  children: i,
                }),
              }),
              (0, s.jsx)("div", {
                className: "flex items-center justify-center my-3",
                children: (0, s.jsx)("img", {
                  src: a,
                  alt: t,
                  width: 150,
                  height: 150,
                  className: n,
                }),
              }),
              (0, s.jsx)("div", { className: "flex-grow" }),
              (0, s.jsxs)("div", {
                className:
                  "bg-[#0D2E39] rounded-[37.8835px] shadow-[inset_0px_11.4798px_25.2556px_#3D87A3] px-10 py-8",
                children: [
                  (0, s.jsx)("h3", {
                    className: "text-2xl text-center font-bold pb-3",
                    children: t,
                  }),
                  (0, s.jsx)("p", { className: "text-center", children: r }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
