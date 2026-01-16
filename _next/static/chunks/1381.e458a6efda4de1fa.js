"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1381, 4562],
  {
    34562: (e, t, a) => {
      a.r(t), a.d(t, { SolanaWalletProvider: () => c, default: () => i });
      var l = a(95155),
        n = a(98991),
        o = a(7586),
        r = a(12115),
        s = a(96329);
      function c(e) {
        let t = (0, r.useMemo)(() => [new o.J()], []);
        return (0, l.jsx)(n.r, {
          wallets: t,
          ...e,
          children: (0, l.jsx)(s.I, { ...e }),
        });
      }
      a(23669);
      let i = c;
    },
    40840: (e, t, a) => {
      a.d(t, { o: () => s, w: () => r });
      var l = a(12115);
      let n = {
        setVisible(e) {
          console.error(o("call", "setVisible"));
        },
        visible: !1,
      };
      function o(e, t) {
        return `You have tried to  ${e} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
      }
      Object.defineProperty(n, "visible", {
        get: () => (console.error(o("read", "visible")), !1),
      });
      let r = (0, l.createContext)(n);
      function s() {
        return (0, l.useContext)(r);
      }
    },
    53347: (e, t, a) => {
      a.d(t, { l: () => n });
      var l = a(12115);
      let n = ({ wallet: e, ...t }) =>
        e &&
        l.createElement("img", {
          src: e.adapter.icon,
          alt: `${e.adapter.name} icon`,
          ...t,
        });
    },
    57615: (e, t, a) => {
      a.d(t, { $: () => n });
      var l = a(12115);
      let n = (e) =>
        l.createElement(
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
            l.createElement(
              "i",
              { className: "wallet-adapter-button-start-icon" },
              e.startIcon
            ),
          e.children,
          e.endIcon &&
            l.createElement(
              "i",
              { className: "wallet-adapter-button-end-icon" },
              e.endIcon
            )
        );
    },
  },
]);
