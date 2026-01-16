"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1133],
  {
    41133: (e, a, n) => {
      n.r(a), n.d(a, { default: () => c });
      var t = n(95155),
        r = n(12115),
        s = n(5607),
        l = n(22162),
        d = n(55028);
      n(34301);
      let u = (0, d.default)(
          async () => (await n.e(8025).then(n.bind(n, 88025))).WalletProvider,
          { ssr: !1 }
        ),
        i = (0, d.default)(
          async () =>
            (await n.e(1355).then(n.bind(n, 71355))).WalletModalProvider,
          { ssr: !1 }
        ),
        c = (e) => {
          let { children: a } = e,
            n = (0, r.useMemo)(function () {
              return [new l.Fq(), new s.D()];
            }, []);
          return (0, t.jsx)(u, {
            adapters: n,
            disableAutoConnectOnLoad: !0,
            children: (0, t.jsx)(i, { children: a }),
          });
        };
    },
  },
]);
