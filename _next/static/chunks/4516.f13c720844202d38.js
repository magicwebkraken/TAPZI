"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4516],
  {
    34516: (e, t, n) => {
      n.r(t), n.d(t, { FAQItem: () => d, default: () => l });
      var a = n(95155),
        s = n(59434);
      n(12115);
      var o = n(10549);
      let r = [
          {
            question: "Do I need crypto to play?",
            answer:
              " To play competitive matches and earn real rewards, you’ll need to stake TAPZI tokens — this is what powers the skill-based economy on Tapzi.\n However, if you’re new or just want to try it out, we offer a free-to-play mode where you can practice without needing any tokens or crypto wallet.\n",
          },
          {
            question: "What happens if I lose?",
            answer:
              " In Tapzi’s skill-based matches, both players stake tokens before playing. If you lose, your staked TAPZI tokens go to the winner as their reward.\n This ensures that rewards always go to the most skilled player — no bots, no randomness, no inflation. Only real competition and fair outcomes.\n",
          },
          {
            question: "Where will TAPZI be listed?",
            answer:
              "TAPZI will launch on decentralized exchanges (DEXs) like UniSwap.\n We are also planning listings on major centralized exchanges (CEXs) to ensure easy access for players and traders globally.",
          },
          {
            question: "What wallets are supported?",
            answer:
              "Tapzi supports all major Web3 wallets so it’s easy to get started.\n You can connect using MetaMask, WalletConnect, Trust Wallet, or Coinbase Wallet — whether you’re on desktop or mobile.\n",
          },
        ],
        l = () =>
          (0, a.jsxs)("section", {
            id: "faq",
            className: "container relative z-1 py-10 md:py-20",
            children: [
              (0, a.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal",
                children: "Frequently Asked Questions",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-lg max-w-4xl mx-auto text-center",
                children: "Join our growing community of player and investors",
              }),
              (0, a.jsx)(i, {
                className: "mt-10 md:mt-12 lg:mt-16",
                children: (0, a.jsx)(o.Accordion, {
                  type: "multiple",
                  defaultValue: [r[0].question],
                  children: r.map((e) =>
                    (0, a.jsx)(
                      d,
                      { question: e.question, answer: e.answer },
                      e.question
                    )
                  ),
                }),
              }),
            ],
          }),
        i = (e) => {
          let { children: t, className: n } = e;
          return (0, a.jsx)("div", {
            style: {
              background:
                "linear-gradient(#081428, #081428) padding-box, linear-gradient(180deg, #19D4D6 0%, #694DFB 100%) border-box",
              border: "2px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className: (0, s.cn)(
              "rounded-xl py-4 md:py-6 px-4 md:p-8 lg:p-16 w-full",
              n
            ),
            children: t,
          });
        },
        d = (e) => {
          let { question: t, answer: n } = e;
          return (0, a.jsxs)(o.AccordionItem, {
            className:
              "bg-gradient-to-b from-white/0 to-white/4 shadow-lg rounded-lg p-4 md:px-6 lg:px-8 border-0",
            value: t,
            children: [
              (0, a.jsx)(o.AccordionTrigger, {
                className:
                  "text-lg sm:text-xl md:text-2xl hover:no-underline font-medium",
                arrow: (0, a.jsx)(c, {
                  className:
                    "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
                }),
                children: t,
              }),
              (0, a.jsx)(o.AccordionContent, {
                className: "text-base sm:text-lg md:text-xl",
                children: n,
              }),
            ],
          });
        },
        c = (e) => {
          let { className: t } = e;
          return (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 20 15",
            className: t,
            children: (0, a.jsx)("path", {
              stroke: "#fff",
              strokeWidth: "2",
              d: "m.998 1 8.7 12 9.3-12",
            }),
          });
        };
    },
  },
]);
