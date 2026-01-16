(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [925],
  {
    7187: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => i });
      var r = t(95155),
        s = t(59434),
        l = t(66766);
      t(12115);
      let i = () =>
          (0, r.jsxs)("div", {
            className: "container relative z-1 pt-6 sm:pt-10 md:pt-14 lg:pt-16",
            children: [
              (0, r.jsx)("h2", {
                className: (0, s.cn)("text-2xl md:text-3xl font-semibold"),
                children: "How Tapzi works",
              }),
              (0, r.jsxs)("div", {
                className:
                  "grid  grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-8 md:mt-10 lg:mt-14",
                children: [
                  (0, r.jsx)(d, {
                    title: "Choose a Game",
                    image: "/image/game/why-tapzi/game.webp",
                    description:
                      "Browse our collection of skill-based games and select one that matches your expertise.",
                  }),
                  (0, r.jsx)(d, {
                    title: "Stake TAPZI",
                    image: "/image/game/why-tapzi/wallet.webp",
                    description:
                      "Set your stake amount for the match. Play for free or compete for TAPZI tokens.",
                    className: "md:-mt-10",
                    isActive: !0,
                  }),
                  (0, r.jsx)(d, {
                    title: "Win & Earn",
                    image: "/image/game/why-tapzi/cup.webp",
                    description:
                      "Showcase your skills, win matches, and earn TAPZI tokens directly to your wallet.",
                  }),
                ],
              }),
            ],
          }),
        d = (e) => {
          let {
            image: a,
            title: t,
            description: i,
            className: d,
            isActive: n = !1,
          } = e;
          return (0, r.jsxs)("div", {
            style: {
              background: n
                ? "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(0deg, rgba(25, 212, 214, 0.6) 0%, rgba(105, 77, 251, 0.6) 100%) border-box"
                : "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(16,24,39,0.4) 100%) border-box",
              border: "2px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className: (0, s.cn)(
              "rounded-xl px-4 md:px-5 lg:px-10 py-8 md:py-10  w-full relative h-fit flex-row flex md:flex-col gap-4 md:gap-0 group",
              d
            ),
            onMouseOver: (e) => {
              e.currentTarget.style.background =
                "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(0deg, rgba(25, 212, 214, 0.6) 0%, rgba(105, 77, 251, 0.6) 100%) border-box";
            },
            onMouseOut: (e) => {
              e.currentTarget.style.background = n
                ? "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(0deg, rgba(25, 212, 214, 0.6) 0%, rgba(105, 77, 251, 0.6) 100%) border-box"
                : "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(16,24,39,0.4) 100%) border-box";
            },
            children: [
              (0, r.jsx)("div", {
                className: (0, s.cn)(
                  "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-transparent mx-auto aspect-square flex items-center justify-center rounded-xl bg-[#1f2733] shadow-md group-hover:shadow-xl group-hover:border-primary-green"
                ),
                children: (0, r.jsx)("div", {
                  className:
                    "w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl flex justify-center items-center p-2 border shadow-xl",
                  children: (0, r.jsx)(l.default, {
                    height: 48,
                    width: 48,
                    className:
                      "w-auto h-8 md:h-10 lg:h-12 object-contain object-center",
                    src: a,
                    alt: t,
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: "mt-0 md:mt-6",
                children: [
                  (0, r.jsx)("h3", {
                    className: (0, s.cn)(
                      "text-left md:text-center text-xl md:text-2xl lg:text-3xl font-bold"
                    ),
                    children: t,
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "text-left md:text-center text-base md:text-lg mt-2 md:mt-4 max-w-80 mx-auto text-muted-foreground",
                    children: i,
                  }),
                ],
              }),
            ],
          });
        };
    },
    15849: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => x });
      var r = t(95155);
      t(12115);
      var s = t(66766),
        l = t(56671),
        i = t(30285),
        d = t(82974),
        n = t(27677),
        o = t(82325);
      let x = () =>
          (0, r.jsxs)("div", {
            className: "container relative z-1 pb-10 md:pb-14 lg:pb-20",
            children: [
              (0, r.jsx)("h2", {
                className:
                  "text-center font-medium text-4xl lg:text-5xl text-white leading-normal",
                children: "Top Contest",
              }),
              (0, r.jsx)("div", {
                className: "mt-6 md:mt-10 lg:mt-16 max-w-full",
                children: (0, r.jsxs)(n.RC, {
                  className: "flex md:hidden",
                  modules: [o.Vx],
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                  navigation: {
                    enabled: !0,
                    prevEl: "#top-contest-prev",
                    nextEl: "#top-contest-next",
                  },
                  breakpoints: {
                    640: { slidesPerView: 1.2, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 16 },
                    1024: { slidesPerView: 3, spaceBetween: 16 },
                  },
                  children: [
                    (0, r.jsx)(n.qr, {
                      children: (0, r.jsx)(m, {
                        image: "/image/game/cash-games/2.jpg",
                        title: "",
                        price: 2e3,
                      }),
                    }),
                    (0, r.jsx)(n.qr, {
                      children: (0, r.jsx)(m, {
                        image: "/image/game/cash-games/3.jpg",
                        title: "",
                        price: 1200,
                      }),
                    }),
                    (0, r.jsx)(n.qr, {
                      children: (0, r.jsx)(m, {
                        image: "/image/game/cash-games/10.jpg",
                        title: "",
                        price: 1e3,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        m = (e) => {
          let { image: a, price: t, title: n } = e,
            o = () => {
              l.o.info("Coming soon !", {
                duration: 3e3,
                position: "top-center",
              });
            };
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("div", {
                className: "flex justify-center",
                children: (0, r.jsx)(i.$, {
                  onClick: o,
                  style: {
                    boxShadow:
                      "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                  },
                  className:
                    "rounded-lg bg-primary-violet text-white h-10 text-lg font-semibold px-6 hover:bg-primary-violet/80",
                  children: "Games pot",
                }),
              }),
              (0, r.jsxs)("div", {
                style: {
                  background:
                    "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
                  border: "1px solid transparent",
                  boxShadow: "0px 4px 22px 0px #00000040",
                  backdropFilter: "blur(33px)",
                },
                className: "rounded-xl p-4",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-4 justify-between",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl border overflow-hidden",
                        children: (0, r.jsx)(s.default, {
                          height: 48,
                          width: 48,
                          className: "w-full h-full object-cover object-center",
                          src: a,
                          alt: n || "",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, r.jsxs)("p", {
                            className: "font-light text-lg md:text-xl",
                            children: [
                              "Winning pool -",
                              " ",
                              (0, r.jsx)("span", {
                                className:
                                  "text-white rounded-2xl font-semibold px-2 py-0.5 text-sm bg-green-600",
                                children: "Guaranted",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("p", {
                            className:
                              "font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-b from-primary-green to-primary-purple bg-clip-text text-transparent",
                            children: [t, " $TAPZI"],
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-1 flex gap-2",
                            children: [
                              (0, r.jsx)(d.zW, {}),
                              (0, r.jsx)("span", { children: "1 winner" }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-1 flex gap-2",
                            children: [
                              (0, r.jsx)(d.Tx, {}),
                              (0, r.jsx)("span", { children: "2 pot limit" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-4 mt-8",
                    children: [
                      (0, r.jsxs)(i.$, {
                        style: {
                          boxShadow:
                            "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                        },
                        className:
                          "rounded-lg bg-primary-violet text-white h-10 lg:h-12 text-base md:text-lg font-semibold flex-1 hover:bg-primary-violet/80",
                        onClick: o,
                        children: ["Fee ", (0.5 * t).toFixed(0), " $TAPZI"],
                      }),
                      (0, r.jsx)(i.$, {
                        onClick: o,
                        className:
                          "rounded-lg bg-white/30 text-white h-10 lg:h-12 text-base md:text-lg font-semibold flex-1 hover:bg-white/40",
                        children: "Regular",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    18455: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => j });
      var r = t(95155),
        s = t(6874),
        l = t.n(s),
        i = t(12115),
        d = t(30285),
        n = t(55095),
        o = t(86124),
        x = t(59434),
        m = t(2145),
        c = t(56671),
        p = t(66766),
        g = t(45799),
        h = t(82974),
        b = t(72637);
      let u = [
          { name: "Home", href: "/" },
          { name: "How to buy", href: "/how-to-buy" },
          { name: "Games", href: "/game" },
          { name: "Docs", href: "https://docs.tapziwinner.org/" },
        ],
        j = () => {
          let { open: e } = (0, o.o1)(),
            { address: a } = (0, m.F)(),
            { fetchOrders: t, orderBalance: s } = (0, b.A)();
          return (
            (0, i.useEffect)(() => {
              a && t();
            }, [a]),
            (0, r.jsx)("div", {
              className: "border-b",
              children: (0, r.jsx)("nav", {
                className: "max-w-[1600px] mx-auto px-4 lg:px-6 py-4 relative",
                children: (0, r.jsxs)("div", {
                  className: "flex justify-between",
                  children: [
                    (0, r.jsx)(l(), {
                      href: "/",
                      children: (0, r.jsx)(p.default, {
                        src: "/logo.webp",
                        className: "h-12 w-auto object-fit-contain",
                        width: 100,
                        height: 100,
                        alt: "Logo",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "text-lg items-center gap-6 hidden lg:flex",
                      children: u.map((e) =>
                        (0, r.jsx)(
                          l(),
                          {
                            className: "hover:underline",
                            ...("#" === e.href
                              ? {
                                  href: "#",
                                  onClick: () => {
                                    c.o.info("Coming soon !", {
                                      duration: 2e3,
                                      position: "top-center",
                                    });
                                  },
                                }
                              : {
                                  href: e.href,
                                  target: e.href.startsWith("http")
                                    ? "_blank"
                                    : "_self",
                                }),
                            children: e.name,
                          },
                          e.name
                        )
                      ),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, r.jsx)(g.A, {
                          links: u,
                          children: (0, r.jsxs)("div", {
                            className: "flex flex-wrap gap-4 mt-4",
                            children: [
                              !!a &&
                                (0, r.jsxs)(d.$, {
                                  className:
                                    "font-semibold text-base h-10 cursor-pointer rounded-md flex md:hidden flex-nowrap",
                                  variant: "ghost",
                                  style: {
                                    boxShadow:
                                      "0px 10px 45px 0px #FFFFFF26, 0px -7px 20px 0px #FFFFFF4D inset",
                                    borderRadius: "10px",
                                  },
                                  children: [
                                    (0, r.jsx)(h.Tx, { className: "w-4 h-4" }),
                                    (0, r.jsxs)("span", {
                                      children: [s, " $TAPZI"],
                                    }),
                                  ],
                                }),
                              (0, r.jsxs)(d.$, {
                                className:
                                  "font-semibold text-base h-10 cursor-pointer rounded-md flex md:hidden flex-nowrap",
                                variant: "ghost",
                                onClick: () => {
                                  e();
                                },
                                style: {
                                  boxShadow:
                                    "0px 10px 45px 0px #FFFFFF26, 0px -7px 20px 0px #FFFFFF4D inset",
                                  borderRadius: "10px",
                                },
                                children: [
                                  (0, r.jsx)(n.A, { className: "w-4" }),
                                  " ",
                                  a ? (0, x.O)(a) : "Connect Wallet",
                                ],
                              }),
                            ],
                          }),
                        }),
                        !!a &&
                          (0, r.jsxs)(d.$, {
                            className:
                              "font-semibold text-base h-10 cursor-pointer rounded-md hidden md:flex flex-nowrap",
                            variant: "ghost",
                            style: {
                              boxShadow:
                                "0px 10px 45px 0px #FFFFFF26, 0px -7px 20px 0px #FFFFFF4D inset",
                              borderRadius: "10px",
                            },
                            children: [
                              (0, r.jsx)(h.Tx, { className: "w-4 h-4" }),
                              (0, r.jsxs)("span", { children: [s, " $TAPZI"] }),
                            ],
                          }),
                        (0, r.jsxs)(d.$, {
                          className:
                            "font-semibold text-base h-10 cursor-pointer rounded-md hidden md:flex flex-nowrap",
                          variant: "ghost",
                          onClick: () => {
                            e();
                          },
                          style: {
                            boxShadow:
                              "0px 10px 45px 0px #FFFFFF26, 0px -7px 20px 0px #FFFFFF4D inset",
                            borderRadius: "10px",
                          },
                          children: [
                            (0, r.jsx)(n.A, { className: "w-4" }),
                            " ",
                            a ? (0, x.O)(a) : "Connect Wallet",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        };
    },
    37686: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => o });
      var r = t(95155);
      t(12115);
      var s = t(66766),
        l = t(30285),
        i = t(56671),
        d = t(27677),
        n = t(82325);
      let o = () =>
          (0, r.jsx)("div", {
            className:
              "bg-[url(/image/game/fantasy-bg.webp)] bg-no-repeat bg-bottom",
            children: (0, r.jsxs)("div", {
              className:
                "container relative z-1 pt-10 md:pt-14 lg:pt-20 pb-20 md:pb-32 lg:pb-40",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "text-center font-medium text-4xl lg:text-5xl text-white leading-normal",
                  children: "Play Fantasy Sports & Casual Games",
                }),
                (0, r.jsxs)("p", {
                  className: "mt-4 text-lg max-w-4xl mx-auto text-center",
                  children: [
                    "Games loved by all and played by all on ",
                    (0, r.jsx)("strong", { children: "Tapzi" }),
                    ". Play multiple fantasy sports and casual gamees in ",
                    (0, r.jsx)("strong", { children: "Tapzi" }),
                    " to earn real money.",
                  ],
                }),
                (0, r.jsxs)("div", {
                  style: {
                    background:
                      "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
                    border: "3px solid transparent",
                    backdropFilter: "blur(114px)",
                  },
                  className:
                    "max-w-6xl mx-auto rounded-2xl mt-6 md:mt-10  py-6 px-4 shadow-[0px_0px_90px_0px_#FFFFFF33_inset]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:grid",
                      children: Array.from({ length: 5 }).map((e, a) =>
                        (0, r.jsx)(
                          x,
                          {
                            image: "/image/game/cash-games/".concat(
                              a + 1,
                              ".jpg"
                            ),
                          },
                          a
                        )
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: "block md:hidden",
                      children: (0, r.jsx)(d.RC, {
                        className: "flex md:hidden",
                        modules: [n.Vx],
                        slidesPerView: 2.2,
                        spaceBetween: 16,
                        navigation: {
                          enabled: !0,
                          prevEl: "#top-gams-prev",
                          nextEl: "#top-gams-next",
                        },
                        children: Array.from({ length: 5 }).map((e, a) =>
                          (0, r.jsx)(
                            d.qr,
                            {
                              children: (0, r.jsx)(x, {
                                image: "/image/game/cash-games/".concat(
                                  a + 1,
                                  ".jpg"
                                ),
                              }),
                            },
                            a
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "mt-10 flex justify-center",
                  children: (0, r.jsx)(l.$, {
                    style: {
                      boxShadow:
                        "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                    },
                    onClick: () => {
                      i.o.info("Coming soon !", {
                        duration: 3e3,
                        position: "top-center",
                      });
                    },
                    className:
                      "mt-4 rounded-lg bg-primary-violet text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-10 hover:bg-primary-violet/80",
                    children: "View More Games",
                  }),
                }),
              ],
            }),
          }),
        x = (e) => {
          let { image: a } = e;
          return (0, r.jsx)("div", {
            className:
              "w-full hover:scale-95 transition-transform duration-300",
            children: (0, r.jsx)(s.default, {
              height: 294,
              width: 294,
              className: "h-auto w-full object-contain rounded-xl",
              src: a,
              alt: a,
              unoptimized: !0,
            }),
          });
        };
    },
    41728: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => d });
      var r = t(95155);
      t(12115);
      var s = t(66766),
        l = t(27677),
        i = t(82325);
      t(2252), t(59408);
      let d = () =>
          (0, r.jsxs)("div", {
            id: "top-games",
            className: "container relative z-1 py-10 md:py-14 lg:py-20",
            children: [
              (0, r.jsx)("h2", {
                className:
                  "text-center font-medium text-4xl lg:text-5xl text-white leading-normal",
                children: "Top Cash Games",
              }),
              (0, r.jsxs)("div", {
                style: {
                  background:
                    "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
                  border: "3px solid transparent",
                  backdropFilter: "blur(114px)",
                },
                className:
                  "max-w-6xl mx-auto rounded-2xl mt-6 md:mt-10  py-6 px-4 shadow-[0px_0px_90px_0px_#FFFFFF33_inset]",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:grid",
                    children: Array.from({ length: 10 }).map((e, a) =>
                      (0, r.jsx)(
                        n,
                        {
                          image: "/image/game/cash-games/".concat(
                            a + 1,
                            ".jpg"
                          ),
                        },
                        a
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "block md:hidden",
                    children: (0, r.jsx)(l.RC, {
                      modules: [i.Vx],
                      slidesPerView: 2.2,
                      spaceBetween: 16,
                      navigation: {
                        enabled: !0,
                        prevEl: "#top-gams-prev",
                        nextEl: "#top-gams-next",
                      },
                      children: Array.from({ length: 10 }).map((e, a) =>
                        (0, r.jsx)(
                          l.qr,
                          {
                            children: (0, r.jsx)(n, {
                              image: "/image/game/cash-games/".concat(
                                a + 1,
                                ".jpg"
                              ),
                            }),
                          },
                          a
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        n = (e) => {
          let { image: a } = e;
          return (0, r.jsx)("div", {
            className:
              "w-full hover:scale-95 transition-transform duration-300",
            children: (0, r.jsx)(s.default, {
              height: 294,
              width: 294,
              className: "h-auto w-full object-contain rounded-xl",
              src: a,
              alt: a,
              unoptimized: !0,
            }),
          });
        };
    },
    45473: (e, a, t) => {
      Promise.resolve().then(t.t.bind(t, 6874, 23)),
        Promise.resolve().then(t.t.bind(t, 33063, 23)),
        Promise.resolve().then(t.bind(t, 73289)),
        Promise.resolve().then(t.bind(t, 7187)),
        Promise.resolve().then(t.bind(t, 18455)),
        Promise.resolve().then(t.bind(t, 37686)),
        Promise.resolve().then(t.bind(t, 41728)),
        Promise.resolve().then(t.bind(t, 15849)),
        Promise.resolve().then(t.bind(t, 65057));
    },
    45530: (e, a, t) => {
      "use strict";
      t.d(a, { I: () => r });
      let r = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    72637: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => i });
      var r = t(45530),
        s = t(12115),
        l = t(2145);
      let i = () => {
        let [e, a] = (0, s.useState)([]),
          [t, i] = (0, s.useState)(0),
          [d, n] = (0, s.useState)(0),
          { address: o } = (0, l.F)(),
          [x, m] = (0, s.useState)(!1),
          [c, p] = (0, s.useState)(!1),
          g = async (e) => {
            var t;
            p(!0),
              fetch((0, r.I)("api/filter_orders"), {
                method: "POST",
                body: JSON.stringify({
                  from: null == (t = e || o) ? void 0 : t.toLowerCase(),
                }),
              })
                .then((e) => e.json())
                .then((e) => {
                  a(() => (null == e ? void 0 : e.orders));
                })
                .catch((e) => {})
                .finally(() => {
                  p(!1), m(!0);
                });
          };
        return (
          (0, s.useEffect)(() => {
            if (e && e.length > 0) {
              var a, t;
              let r =
                  null == (a = e.filter((e) => "PA" === e.status))
                    ? void 0
                    : a.reduce((e, a, t) => e + +a.token_quantity, 0),
                s =
                  null == (t = e.filter((e) => "PA" === e.status))
                    ? void 0
                    : t.reduce((e, a, t) => e + +(a.bonus || 0), 0);
              i(r), n(s);
            }
          }, [e]),
          {
            orders: e,
            fetchOrders: g,
            isLoading: c,
            resetOrders: () => {
              a([]), m(!1);
            },
            isFetched: x,
            orderBalance: t,
            bonus: d,
          }
        );
      };
    },
    73289: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => n });
      var r = t(95155);
      t(12115);
      var s = t(30285),
        l = t(85690),
        i = t(82974),
        d = t(56671);
      let n = () => {
          let e = () => {
            d.o.info("Coming soon !", {
              duration: 3e3,
              position: "top-center",
            });
          };
          return (0, r.jsxs)("div", {
            className:
              "mt-16 sm:mt-24 md:mt-28 container relative min-h-[400px]",
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-start flex-col lg:flex-row gap-10",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, r.jsxs)("h1", {
                        className:
                          "font-normal text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mt-4 md:mt-6",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "font-medium bg-gradient-to-r text-transparent bg-clip-text from-primary-green to-primary-violet",
                            children: "Win Real Money",
                          }),
                          " ",
                          (0, r.jsx)("span", {
                            className: "text-white font-extralight",
                            children: "Playing Your Favorite Games",
                          }),
                        ],
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "max-w-[510px] mt-4 md:mt-6 lg:mt-8 font-light text-base sm:text-lg md:text-2xl",
                        children:
                          "Join world's most trusted gaming platform. play fantasy sports, skill games & win cash prizes daily with complete safety and security.",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex mt-4 md:mt-6 lg:mt-8 gap-4 md:gap-6",
                        children: [
                          (0, r.jsxs)(s.$, {
                            style: {
                              boxShadow:
                                "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                            },
                            onClick: e,
                            className:
                              "rounded-lg bg-primary-violet text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 lg:px-16 md:min-w-44 hover:bg-primary-violet/80",
                            children: [
                              (0, r.jsx)(l.A, { className: "w-5" }),
                              (0, r.jsx)("span", { children: "Play Now" }),
                            ],
                          }),
                          (0, r.jsx)(s.$, {
                            onClick: e,
                            className:
                              "rounded-lg bg-white/30 text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 md:min-w-52 hover:bg-white/40",
                            children: (0, r.jsx)("span", {
                              children: "Watch Demo",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    style: {
                      background:
                        "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
                      border: "3px solid transparent",
                      backdropFilter: "blur(114px)",
                    },
                    className:
                      "w-full lg:w-[634px] rounded-2xl py-6 px-4 shadow-[0px_0px_90px_0px_#FFFFFF33_inset]",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "text-xl text-center md:text-2xl lg:text-3xl",
                        children: "Popular Games",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mt-4",
                        children: [
                          (0, r.jsx)(o, {
                            image: "/image/game/hero/fantasy-cricket.png",
                            title: "Fantasy Cricket",
                            players: "2.5M+ Players",
                            prize: "10K+ Prizes",
                          }),
                          (0, r.jsx)(o, {
                            image: "/image/game/hero/card-games.png",
                            title: "Card Games",
                            players: "2.5M+ Players",
                            prize: "10K+ Prizes",
                          }),
                          (0, r.jsx)(o, {
                            image: "/image/game/hero/quiz-games.png",
                            title: "Quiz Games",
                            players: "2.5M+ Players",
                            prize: "10K+ Prizes",
                          }),
                          (0, r.jsx)(o, {
                            image: "/image/game/hero/arcade-games.png",
                            title: "Arcade Games",
                            players: "2.5M+ Players",
                            prize: "10K+ Prizes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                style: {
                  background:
                    "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
                  border: "3px solid transparent",
                  backdropFilter: "blur(114px)",
                },
                className:
                  "mt-6 sm:mt-10 md:mt-20 w-full rounded-2xl py-6 px-4 lg:px-6 shadow-[0px_0px_90px_0px_#FFFFFF33_inset]",
                children: (0, r.jsxs)("div", {
                  className:
                    "max-w-4xl mx-auto flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-20",
                  children: [
                    (0, r.jsx)(x, { label: "Token Symbol", value: "TAPZI" }),
                    (0, r.jsx)("div", {
                      className: "w-0.5 h-16",
                      style: {
                        background:
                          "linear-gradient(180deg, #1A203C 0.48%, #8B2CCD 51.92%, #2F3762 100%)",
                      },
                    }),
                    (0, r.jsx)(x, {
                      label: "Liquidity Pool",
                      value: "1 Billion",
                    }),
                    (0, r.jsx)("div", {
                      className: "w-0.5 h-16",
                      style: {
                        background:
                          "linear-gradient(180deg, #1A203C 0.48%, #8B2CCD 51.92%, #2F3762 100%)",
                      },
                    }),
                    (0, r.jsx)(x, { label: "Tax", value: "0%" }),
                  ],
                }),
              }),
            ],
          });
        },
        o = (e) => {
          let { title: a, image: t, players: s, prize: l } = e;
          return (0, r.jsxs)("div", {
            style: {
              background:
                "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, rgba(3, 245, 205, 0.5) 0%, rgba(25, 212, 214, 0.5) 40.31%, rgba(48, 172, 225, 0.5) 70.55%, rgba(105, 77, 251, 0.5) 100.79%) border-box",
              border: "1px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className: "rounded-2xl py-4 md:py-6 px-3 flex gap-4",
            children: [
              (0, r.jsx)("div", {
                className: "w-24",
                children: (0, r.jsx)("img", {
                  src: t,
                  alt: "Fantasy Cricket",
                  className: "w-24 h-auto rounded-lg",
                }),
              }),
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className: "font-semibold text-primary-green text-lg",
                    children: a,
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-1 flex gap-2",
                    children: [
                      (0, r.jsx)(i.zW, {}),
                      (0, r.jsx)("span", { children: s }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-1 flex gap-2",
                    children: [
                      (0, r.jsx)(i.Tx, {}),
                      (0, r.jsx)("span", { children: l }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        x = (e) => {
          let { label: a, value: t } = e;
          return (0, r.jsxs)("div", {
            className: "flex flex-col items-center gap-2",
            children: [
              (0, r.jsx)("p", {
                className:
                  "text-center font-semibold text-transparent bg-clip-text bg-gradient-to-b from-primary-green to-primary-purple text-xl sm:text-2xl md:text-3xl lg:text-4xl",
                children: t,
              }),
              (0, r.jsx)("p", {
                className:
                  "font-medium text-sm md:text-base lg:text-lg text-center",
                children: a,
              }),
            ],
          });
        };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(
      0,
      [
        4213, 2145, 7598, 4134, 6874, 6671, 6124, 6738, 6708, 5304, 5799, 8441,
        1684, 7358,
      ],
      () => a(45473)
    ),
      (_N_E = e.O());
  },
]);
