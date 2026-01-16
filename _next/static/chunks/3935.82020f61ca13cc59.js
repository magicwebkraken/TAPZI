"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3935],
  {
    63935: (e, t, s) => {
      s.r(t), s.d(t, { default: () => d });
      var a = s(95155),
        l = s(59434),
        i = s(66766);
      s(12115);
      let d = () =>
          (0, a.jsxs)("div", {
            className: "container relative z-1 px-0 mt-10 md:mt-0",
            children: [
              (0, a.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl leading-normal px-2",
                children: "Play Anywhere Instantly",
              }),
              (0, a.jsx)("p", {
                className: "text-lg max-w-4xl mx-auto text-center px-2",
                children:
                  "No Installs. No Delays. Just Skill-Based Gaming ‘Across Devices’",
              }),
              (0, a.jsxs)("div", {
                className:
                  "hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-10 md:mt-14 lg:mt-16 lg:px-[140px] px-3",
                style: {
                  backgroundImage: "url(/assets/multi-chain/bg.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                },
                children: [
                  (0, a.jsx)(n, {
                    title: "IOS",
                    image: "/assets/multi-chain/ios.webp",
                    description:
                      "Play directly from any iPhone/iPad mobile browser no downloads needed.",
                    className: "md:mt-[20%]",
                  }),
                  (0, a.jsx)(n, {
                    title: "Web",
                    image: "/assets/multi-chain/web.webp",
                    description:
                      "Use any browser on your laptop or PC and play with full features.",
                    className: "md:-mt-[60px]",
                  }),
                  (0, a.jsx)(n, {
                    title: "Android",
                    image: "/assets/multi-chain/android.webp",
                    description:
                      "Full experience on any Android phone or tablet with app-like performance.",
                    className: "md:mt-[20%]",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "md:hidden grid grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-10 md:mt-14 lg:mt-16 lg:px-[140px] px-3",
                children: [
                  (0, a.jsx)(n, {
                    title: "IOS",
                    image: "/assets/multi-chain/ios.webp",
                    description: "",
                    className: "md:mt-[20%]",
                  }),
                  (0, a.jsx)(n, {
                    title: "Web",
                    image: "/assets/multi-chain/web.webp",
                    description: "",
                    className: "md:-mt-[60px]",
                  }),
                  (0, a.jsx)(n, {
                    title: "Android",
                    image: "/assets/multi-chain/android.webp",
                    description: "",
                    className: "md:mt-[20%]",
                  }),
                ],
              }),
            ],
          }),
        n = (e) => {
          let { image: t, title: s, description: d, className: n } = e;
          return (0, a.jsxs)("div", {
            className: (0, l.cn)(
              "rounded-xl md:w-[300px] px-4 md:px-5 lg:px-10 py-8 md:py-10 relative h-fit flex flex-col gap-4 md:gap-0 items-center justify-center",
              n
            ),
            children: [
              (0, a.jsx)(i.default, {
                height: 200,
                width: 200,
                className: "w-auto h-[100px] object-contain object-center flex",
                src: t,
                alt: s,
              }),
              (0, a.jsxs)("div", {
                className: "mt-0 md:mt-6",
                children: [
                  (0, a.jsx)("h3", {
                    className: (0, l.cn)(
                      "text-center md:text-center text-xl md:text-2xl lg:text-3xl font-bold"
                    ),
                    children: s,
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-center md:text-center md:text-lg mt-2 md:mt-4 max-w-80 mx-auto",
                    children: d,
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
