(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1987],
  {
    5607: (t, e, n) => {
      "use strict";
      n.d(e, { D: () => l });
      var i = n(82313),
        o = n(93779),
        s = n(49697),
        r = n(22162);
      function c() {
        return !!window.tronWeb && void 0 !== window.tokenpocket;
      }
      var a = function (t, e, n, i) {
        return new (n || (n = Promise))(function (o, s) {
          function r(t) {
            try {
              a(i.next(t));
            } catch (t) {
              s(t);
            }
          }
          function c(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value) instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })
                ).then(r, c);
          }
          a((i = i.apply(t, e || [])).next());
        });
      };
      class l extends i.Y3 {
        constructor(t = {}) {
          super(),
            (this.name = "TokenPocket"),
            (this.url = "https://tokenpocket.pro/"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGc+CjxwYXRoIGQ9Ik0xMDQxLjUyIDBILTI3VjEwMjRIMTA0MS41MlYwWiIgZmlsbD0iIzI5ODBGRSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDA4XzIyNSkiPgo8cGF0aCBkPSJNNDA2Ljc5NiA0MzguNjQzSDQwNi45MjdDNDA2Ljc5NiA0MzcuODU3IDQwNi43OTYgNDM2Ljk0IDQwNi43OTYgNDM2LjE1NFY0MzguNjQzWiIgZmlsbD0iIzI5QUVGRiIvPgo8cGF0aCBkPSJNNjY3LjYwMiA0NjMuNTMzSDUyMy4yNDlWNzI0LjA3NkM1MjMuMjQ5IDczNi4zODkgNTMzLjIwNCA3NDYuMzQ1IDU0NS41MTcgNzQ2LjM0NUg2NDUuMzMzQzY1Ny42NDcgNzQ2LjM0NSA2NjcuNjAyIDczNi4zODkgNjY3LjYwMiA3MjQuMDc2VjQ2My41MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDUzLjU2MyAyNzdINDQ4LjcxNkgxOTAuMjY5QzE3Ny45NTUgMjc3IDE2OCAyODYuOTU1IDE2OCAyOTkuMjY5VjM4OS42NTNDMTY4IDQwMS45NjcgMTc3Ljk1NSA0MTEuOTIyIDE5MC4yNjkgNDExLjkyMkgyNTAuOTE4SDI3NS4wMjFWNDM4LjY0NFY3MjQuNzMxQzI3NS4wMjEgNzM3LjA0NSAyODQuOTc2IDc0NyAyOTcuMjg5IDc0N0gzOTIuMTI4QzQwNC40NDEgNzQ3IDQxNC4zOTYgNzM3LjA0NSA0MTQuMzk2IDcyNC43MzFWNDM4LjY0NFY0MzYuMTU2VjQxMS45MjJINDM4LjQ5OUg0NDguMzIzSDQ1My4xN0M0OTAuMzcyIDQxMS45MjIgNTIwLjYzMSAzODEuNjYzIDUyMC42MzEgMzQ0LjQ2MUM1MjEuMDI0IDMwNy4yNTkgNDkwLjc2NSAyNzcgNDUzLjU2MyAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjY3LjczNSA0NjMuNTMzVjY0NS4zNUM2NzIuNzEzIDY0Ni41MjkgNjc3LjgyMSA2NDcuNDQ2IDY4My4wNjEgNjQ4LjIzMkM2OTAuMzk3IDY0OS4yOCA2OTcuOTk0IDY0OS45MzUgNzA1LjU5MiA2NTAuMDY2QzcwNS45ODUgNjUwLjA2NiA3MDYuMzc4IDY1MC4wNjYgNzA2LjkwMiA2NTAuMDY2VjUwNS40NUM2ODUuMDI2IDUwNC4wMDkgNjY3LjczNSA0ODUuODAxIDY2Ny43MzUgNDYzLjUzM1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80MDhfMjI1KSIvPgo8cGF0aCBkPSJNNzA5Ljc4MSAyNzdDNjA2LjgyMiAyNzcgNTIzLjI0OSAzNjAuNTczIDUyMy4yNDkgNDYzLjUzM0M1MjMuMjQ5IDU1Mi4wODQgNTg0Ljk0NiA2MjYuMjI1IDY2Ny43MzMgNjQ1LjM1VjQ2My41MzNDNjY3LjczMyA0NDAuMzQ3IDY4Ni41OTYgNDIxLjQ4NCA3MDkuNzgxIDQyMS40ODRDNzMyLjk2NyA0MjEuNDg0IDc1MS44MyA0NDAuMzQ3IDc1MS44MyA0NjMuNTMzQzc1MS44MyA0ODMuMDUxIDczOC42IDQ5OS40MjUgNzIwLjUyMyA1MDQuMTRDNzE3LjExNyA1MDUuMDU3IDcxMy40NDkgNTA1LjU4MSA3MDkuNzgxIDUwNS41ODFWNjUwLjA2NkM3MTMuNDQ5IDY1MC4wNjYgNzE2Ljk4NiA2NDkuOTM1IDcyMC41MjMgNjQ5LjgwNEM4MTguNTA1IDY0NC4xNzEgODk2LjMxNCA1NjIuOTU2IDg5Ni4zMTQgNDYzLjUzM0M4OTYuNDQ1IDM2MC41NzMgODEyLjg3MiAyNzcgNzA5Ljc4MSAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzA5Ljc4IDY1MC4wNjZWNTA1LjU4MUM3MDguNzMzIDUwNS41ODEgNzA3LjgxNiA1MDUuNTgxIDcwNi43NjggNTA1LjQ1VjY1MC4wNjZDNzA3LjgxNiA2NTAuMDY2IDcwOC44NjQgNjUwLjA2NiA3MDkuNzggNjUwLjA2NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQwOF8yMjUiIHgxPSI3MDkuODQ0IiB5MT0iNTU2LjgyNyIgeDI9IjY2Ny43NTMiIHkyPSI1NTYuODI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC45NjY3IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMyMzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDhfMjI1Ij4KPHJlY3Qgd2lkdGg9IjcyOC40NDgiIGhlaWdodD0iNDcwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY4IDI3NykiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"),
            (this._readyState = (0, o.My)() ? i.Ok.Loading : i.Ok.NotFound),
            (this._state = i.nL.Loading),
            (this.onChainChanged = (t) => {
              this.emit("chainChanged", t);
            }),
            (this.onAccountsChanged = () => {
              var t, e, n;
              let o = this.address || "",
                s =
                  ((null == (t = this._wallet) ? void 0 : t.tronWeb) &&
                    (null ==
                    (n =
                      null == (e = this._wallet)
                        ? void 0
                        : e.tronWeb.defaultAddress)
                      ? void 0
                      : n.base58)) ||
                  "";
              s
                ? (this.setAddress(s), this.setState(i.nL.Connected))
                : (this.setAddress(null), this.setState(i.nL.Disconnect)),
                this.emit("accountsChanged", this.address || "", o),
                !o && this.address
                  ? this.emit("connect", this.address)
                  : o && !this.address && this.emit("disconnect");
            }),
            (this.checkReadyInterval = null),
            (this._checkPromise = null),
            (this._updateWallet = () => {
              var t, e, n, s, r;
              let a = this.state,
                l = this.address;
              if (c()) {
                let c = null == (t = window.tokenpocket) ? void 0 : t.tron;
                (this._wallet = (0, o.yO)()
                  ? {
                      tron: c,
                      ready: null == (e = window.tronWeb) ? void 0 : e.ready,
                      tronWeb:
                        null == (n = window.tokenpocket) ? void 0 : n.tronWeb,
                    }
                  : {
                      tron: c,
                      ready: !!(null ==
                      (s = (null == c ? void 0 : c.tronWeb).defaultAddress)
                        ? void 0
                        : s.base58),
                      tronWeb: null == c ? void 0 : c.tronWeb,
                    }),
                  (a = (l =
                    (null == (r = this._wallet.tronWeb.defaultAddress)
                      ? void 0
                      : r.base58) || null)
                    ? i.nL.Connected
                    : i.nL.Disconnect),
                  this.listenTronEvent(),
                  l || this.checkForWalletReady();
              } else (this._wallet = null), (l = null), (a = i.nL.NotFound);
              this.setAddress(l), this.setState(a);
            });
          let {
            checkTimeout: e = 2e3,
            openUrlWhenWalletNotFound: n = !0,
            openAppWithDeeplink: s = !0,
          } = t;
          if ("number" != typeof e)
            throw Error(
              "[TokenPocketAdapter] config.checkTimeout should be a number"
            );
          (this.config = {
            checkTimeout: e,
            openAppWithDeeplink: s,
            openUrlWhenWalletNotFound: n,
          }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._address = null),
            c()
              ? ((this._readyState = i.Ok.Found), this._updateWallet())
              : this._checkWallet().then(() => {
                  this.connected && this.emit("connect", this.address || "");
                });
        }
        get address() {
          return this._address;
        }
        get state() {
          return this._state;
        }
        get readyState() {
          return this._readyState;
        }
        get connecting() {
          return this._connecting;
        }
        network() {
          return a(this, void 0, void 0, function* () {
            try {
              if ((yield this._checkWallet(), this.state !== i.nL.Connected))
                throw new s.PQ();
              let t = this._wallet;
              if (!t || !t.tronWeb) throw new s.PQ();
              try {
                return yield (0, r.NA)(t.tronWeb);
              } catch (t) {
                throw new s.W0(null == t ? void 0 : t.message, t);
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        connect() {
          return a(this, void 0, void 0, function* () {
            try {
              if ((this.checkIfOpenApp(), this.connected || this.connecting))
                return;
              if (
                (yield this._checkWallet(), this.readyState === i.Ok.NotFound)
              )
                throw (
                  (!1 !== this.config.openUrlWhenWalletNotFound &&
                    (0, o.My)() &&
                    window.open(this.url, "_blank"),
                  new s.hv())
                );
              if (!this._wallet) return;
              this._connecting = !0;
              let t = this._wallet,
                e = yield t.tron.request({ method: "eth_requestAccounts" });
              if (!(null == e ? void 0 : e[0]))
                throw new s.Y6("Request connect error.");
              let n = e[0];
              this.setAddress(n),
                this.setState(i.nL.Connected),
                this.listenTronEvent(),
                this.emit("connect", this.address || "");
            } catch (t) {
              throw (this.emit("error", t), t);
            } finally {
              this._connecting = !1;
            }
          });
        }
        disconnect() {
          return a(this, void 0, void 0, function* () {
            this.state === i.nL.Connected &&
              (this.setAddress(null),
              this.setState(i.nL.Disconnect),
              this.emit("disconnect"));
          });
        }
        signTransaction(t, e) {
          return a(this, void 0, void 0, function* () {
            try {
              let n = yield this.checkAndGetWallet();
              try {
                return yield n.tronWeb.trx.sign(t, e);
              } catch (t) {
                if (t instanceof Error) throw new s.z4(t.message, t);
                throw new s.z4(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        multiSign(t, e, n) {
          return a(this, void 0, void 0, function* () {
            try {
              let i = yield this.checkAndGetWallet();
              try {
                return yield i.tronWeb.trx.multiSign(t, e, n);
              } catch (t) {
                if (t instanceof Error) throw new s.z4(t.message, t);
                throw new s.z4(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        signMessage(t, e) {
          return a(this, void 0, void 0, function* () {
            try {
              let n = yield this.checkAndGetWallet();
              try {
                return yield n.tronWeb.trx.signMessageV2(t, e);
              } catch (t) {
                if (t instanceof Error) throw new s.K3(t.message, t);
                throw new s.K3(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        listenTronEvent() {
          if ((0, o.yO)()) return;
          this.stopListenTronEvent();
          let t = this._wallet;
          t &&
            t.tron &&
            (t.tron.on("chainChanged", this.onChainChanged),
            t.tron.on("accountsChanged", this.onAccountsChanged));
        }
        stopListenTronEvent() {
          if ((0, o.yO)()) return;
          let t = this._wallet;
          t &&
            t.tron &&
            (t.tron.removeListener("chainChanged", this.onChainChanged),
            t.tron.removeListener("accountsChanged", this.onAccountsChanged));
        }
        checkAndGetWallet() {
          return a(this, void 0, void 0, function* () {
            if (
              (this.checkIfOpenApp(),
              yield this._checkWallet(),
              !this.connected)
            )
              throw new s.PQ();
            let t = this._wallet;
            if (!t || !t.tronWeb) throw new s.PQ();
            return t;
          });
        }
        checkIfOpenApp() {
          if (
            !1 !== this.config.openAppWithDeeplink &&
            (function () {
              if (
                !c() &&
                (0, o.yO)() &&
                !((0, o.My)() && void 0 !== window.tokenpocket)
              ) {
                let {
                    origin: t,
                    pathname: e,
                    search: n,
                    hash: i,
                  } = window.location,
                  o = {
                    action: "open",
                    actionId: Date.now() + "",
                    callbackUrl: "http://someurl.com",
                    blockchain: "Tron",
                    chain: "Tron",
                    url: t + e + n + i,
                    protocol: "TokenPocket",
                    version: "1.0",
                  };
                return (
                  (window.location.href = `tpdapp://open?params=${encodeURIComponent(
                    JSON.stringify(o)
                  )}`),
                  !0
                );
              }
              return !1;
            })()
          )
            throw new s.hv();
        }
        checkForWalletReady() {
          if (this.checkReadyInterval) return;
          let t = 0,
            e = Math.floor(this.config.checkTimeout / 200);
          this.checkReadyInterval = setInterval(() => {
            var n, i;
            (
              (0, o.yO)()
                ? null == (n = window.tronWeb)
                  ? void 0
                  : n.ready
                : null == (i = this._wallet)
                ? void 0
                : i.ready
            )
              ? (this.checkReadyInterval &&
                  clearInterval(this.checkReadyInterval),
                (this.checkReadyInterval = null),
                this._updateWallet(),
                this.emit("connect", this.address || ""))
              : t > e
              ? (this.checkReadyInterval &&
                  clearInterval(this.checkReadyInterval),
                (this.checkReadyInterval = null))
              : t++;
          }, 200);
        }
        _checkWallet() {
          if (this.readyState === i.Ok.Found) return Promise.resolve(!0);
          if (this._checkPromise) return this._checkPromise;
          let t = Math.floor(this.config.checkTimeout / 100),
            e = 0,
            n;
          return (
            (this._checkPromise = new Promise((o) => {
              let s = () => {
                e++;
                let s = c();
                (s || e > t) &&
                  (n && clearInterval(n),
                  (this._readyState = s ? i.Ok.Found : i.Ok.NotFound),
                  this._updateWallet(),
                  this.emit("readyStateChanged", this.readyState),
                  o(s));
              };
              (n = setInterval(s, 100)), s();
            })),
            this._checkPromise
          );
        }
        setAddress(t) {
          this._address = t;
        }
        setState(t) {
          t !== this.state && ((this._state = t), this.emit("stateChanged", t));
        }
      }
    },
    22162: (t, e, n) => {
      "use strict";
      n.d(e, { Fq: () => w, NA: () => u }),
        (function (t) {
          (t.Mainnet = "Mainnet"),
            (t.Shasta = "Shasta"),
            (t.Nile = "Nile"),
            (t.Unknown = "Unknown");
        })(i || (i = {})),
        (function (t) {
          (t.Mainnet = "Mainnet"), (t.Shasta = "Shasta"), (t.Nile = "Nile");
        })(o || (o = {}));
      var i,
        o,
        s = n(82313),
        r = n(93779),
        c = n(49697);
      function a() {
        return !!(window.tron && window.tron.isTronLink);
      }
      function l() {
        return !!(a() || window.tronLink || window.tronWeb);
      }
      var h = function (t, e, n, i) {
        return new (n || (n = Promise))(function (o, s) {
          function r(t) {
            try {
              a(i.next(t));
            } catch (t) {
              s(t);
            }
          }
          function c(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value) instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })
                ).then(r, c);
          }
          a((i = i.apply(t, e || [])).next());
        });
      };
      let d = {
        "0x2b6653dc": i.Mainnet,
        "0x94a9059e": i.Shasta,
        "0xcd8690dc": i.Nile,
      };
      function u(t) {
        return h(this, void 0, void 0, function* () {
          var e, n, o;
          let { blockID: s = "" } = yield t.trx.getBlockByNumber(0),
            r = `0x${s.slice(-8)}`;
          return {
            networkType: d[r] || i.Unknown,
            chainId: r,
            fullNode: (null == (e = t.fullNode) ? void 0 : e.host) || "",
            solidityNode:
              (null == (n = t.solidityNode) ? void 0 : n.host) || "",
            eventServer: (null == (o = t.eventServer) ? void 0 : o.host) || "",
          };
        });
      }
      class w extends s.Y3 {
        constructor(t = {}) {
          super(),
            (this.name = "TronLink"),
            (this.url = "https://www.tronlink.org/"),
            (this.icon =
              "data:image/png;base64,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"),
            (this._readyState = (0, r.My)() ? s.Ok.Loading : s.Ok.NotFound),
            (this._state = s.nL.Loading),
            (this._supportNewTronProtocol = !1),
            (this._tronLinkMessageHandler = (t) => {
              var e, n, i, o, r;
              let c = null == (e = t.data) ? void 0 : e.message;
              if (c)
                if ("accountsChanged" === c.action)
                  setTimeout(() => {
                    var t;
                    let e = this.address || "";
                    if (null == (t = this._wallet) ? void 0 : t.ready) {
                      let t = c.data.address;
                      this.setAddress(t), this.setState(s.nL.Connected);
                    } else
                      this.setAddress(null), this.setState(s.nL.Disconnect);
                    this.emit("accountsChanged", this.address || "", e),
                      !e && this.address
                        ? this.emit("connect", this.address)
                        : e && !this.address && this.emit("disconnect");
                  }, 200);
                else if ("setNode" === c.action)
                  this.emit("chainChanged", {
                    chainId:
                      (null == (i = null == (n = c.data) ? void 0 : n.node)
                        ? void 0
                        : i.chainId) || "",
                  });
                else if ("connect" === c.action) {
                  let t =
                    (null ==
                    (r =
                      null == (o = this._wallet.tronWeb)
                        ? void 0
                        : o.defaultAddress)
                      ? void 0
                      : r.base58) || "";
                  this.setAddress(t),
                    this.setState(s.nL.Connected),
                    this.emit("connect", t);
                } else
                  "disconnect" === c.action &&
                    (this.setAddress(null),
                    this.setState(s.nL.Disconnect),
                    this.emit("disconnect"));
            }),
            (this._onChainChanged = (t) => {
              this.emit("chainChanged", t);
            }),
            (this._onAccountsChanged = () => {
              var t, e, n;
              let i = this.address || "",
                o =
                  ((null == (t = this._wallet) ? void 0 : t.tronWeb) &&
                    (null ==
                    (n =
                      null == (e = this._wallet)
                        ? void 0
                        : e.tronWeb.defaultAddress)
                      ? void 0
                      : n.base58)) ||
                  "";
              o
                ? (this.setAddress(o), this.setState(s.nL.Connected))
                : (this.setAddress(null), this.setState(s.nL.Disconnect)),
                this.emit("accountsChanged", this.address || "", i),
                !i && this.address
                  ? this.emit("connect", this.address)
                  : i && !this.address && this.emit("disconnect");
            }),
            (this._checkPromise = null),
            (this._updateWallet = () => {
              var t, e, n, i, o, c, a, l;
              let h = this.state,
                d = this.address;
              (0, r.yO)()
                ? (window.tronLink
                    ? (this._wallet = window.tronLink)
                    : (this._wallet = {
                        ready: !!(null == (t = window.tronWeb)
                          ? void 0
                          : t.defaultAddress),
                        tronWeb: window.tronWeb,
                        request: () => Promise.resolve(!0),
                      }),
                  (h = (d =
                    (null ==
                    (n =
                      null == (e = this._wallet.tronWeb)
                        ? void 0
                        : e.defaultAddress)
                      ? void 0
                      : n.base58) || null)
                    ? s.nL.Connected
                    : s.nL.Disconnect))
                : window.tron && window.tron.isTronLink
                ? ((this._supportNewTronProtocol = !0),
                  (this._wallet = window.tron),
                  this._listenTronEvent(),
                  (h = (d =
                    (this._wallet.tronWeb &&
                      (null ==
                      (o =
                        null == (i = this._wallet.tronWeb)
                          ? void 0
                          : i.defaultAddress)
                        ? void 0
                        : o.base58)) ||
                    null)
                    ? s.nL.Connected
                    : s.nL.Disconnect))
                : window.tronLink
                ? ((this._wallet = window.tronLink),
                  this._listenTronLinkEvent(),
                  (d =
                    (null ==
                    (a =
                      null == (c = this._wallet.tronWeb)
                        ? void 0
                        : c.defaultAddress)
                      ? void 0
                      : a.base58) || null),
                  (h = this._wallet.ready ? s.nL.Connected : s.nL.Disconnect))
                : window.tronWeb
                ? ((this._wallet = {
                    ready: window.tronWeb.ready,
                    tronWeb: window.tronWeb,
                    request: () => Promise.resolve(!0),
                  }),
                  (d =
                    (null == (l = this._wallet.tronWeb.defaultAddress)
                      ? void 0
                      : l.base58) || null),
                  (h = this._wallet.ready ? s.nL.Connected : s.nL.Disconnect))
                : ((this._wallet = null), (d = null), (h = s.nL.NotFound)),
                (0, r.yO)() &&
                  h === s.nL.Disconnect &&
                  this.checkForWalletReadyForApp(),
                this.setAddress(d),
                this.setState(h);
            }),
            (this.checkReadyInterval = null);
          let {
            checkTimeout: e = 3e4,
            dappIcon: n = "",
            dappName: i = "",
            openUrlWhenWalletNotFound: o = !0,
            openTronLinkAppOnMobile: c = !0,
          } = t;
          if ("number" != typeof e)
            throw Error(
              "[TronLinkAdapter] config.checkTimeout should be a number"
            );
          if (
            ((this.config = {
              checkTimeout: e,
              openTronLinkAppOnMobile: c,
              openUrlWhenWalletNotFound: o,
              dappIcon: n,
              dappName: i,
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._address = null),
            !(0, r.My)())
          ) {
            (this._readyState = s.Ok.NotFound), this.setState(s.nL.NotFound);
            return;
          }
          a() || ((0, r.yO)() && (window.tronLink || window.tronWeb))
            ? ((this._readyState = s.Ok.Found), this._updateWallet())
            : this._checkWallet().then(() => {
                this.connected && this.emit("connect", this.address || "");
              });
        }
        get address() {
          return this._address;
        }
        get state() {
          return this._state;
        }
        get readyState() {
          return this._readyState;
        }
        get connecting() {
          return this._connecting;
        }
        network() {
          return h(this, void 0, void 0, function* () {
            var t;
            try {
              if ((yield this._checkWallet(), this.state !== s.nL.Connected))
                throw new c.PQ();
              let e =
                (null == (t = this._wallet) ? void 0 : t.tronWeb) ||
                window.tronWeb;
              if (!e) throw new c.PQ();
              try {
                return yield u(e);
              } catch (t) {
                throw new c.W0(null == t ? void 0 : t.message, t);
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        connect() {
          return h(this, void 0, void 0, function* () {
            var t, e;
            try {
              if (
                (this.checkIfOpenTronLink(), this.connected || this.connecting)
              )
                return;
              if ((yield this._checkWallet(), this.state === s.nL.NotFound))
                throw (
                  (!1 !== this.config.openUrlWhenWalletNotFound &&
                    (0, r.My)() &&
                    window.open(this.url, "_blank"),
                  new c.hv())
                );
              if (!this._wallet) return;
              if (((this._connecting = !0), this._supportNewTronProtocol)) {
                let t = this._wallet;
                try {
                  let e = (yield t.request({
                    method: "eth_requestAccounts",
                  }))[0];
                  this.setAddress(e),
                    this.setState(s.nL.Connected),
                    this._listenTronEvent(),
                    this._wallet.tronWeb ||
                      (yield (function (t) {
                        var e, n, i, o;
                        return (
                          (e = this),
                          (n = void 0),
                          (i = void 0),
                          (o = function* () {
                            return new Promise((e, n) => {
                              let i = setInterval(() => {
                                  t.tronWeb &&
                                    (clearInterval(i), clearTimeout(o), e());
                                }, 50),
                                o = setTimeout(() => {
                                  clearInterval(i),
                                    n("`window.tron.tronweb` is not ready.");
                                }, 2e3);
                            });
                          }),
                          new (i || (i = Promise))(function (t, s) {
                            function r(t) {
                              try {
                                a(o.next(t));
                              } catch (t) {
                                s(t);
                              }
                            }
                            function c(t) {
                              try {
                                a(o.throw(t));
                              } catch (t) {
                                s(t);
                              }
                            }
                            function a(e) {
                              var n;
                              e.done
                                ? t(e.value)
                                : ((n = e.value) instanceof i
                                    ? n
                                    : new i(function (t) {
                                        t(n);
                                      })
                                  ).then(r, c);
                            }
                            a((o = o.apply(e, n || [])).next());
                          })
                        );
                      })(this._wallet));
                } catch (e) {
                  let t =
                    (null == e ? void 0 : e.message) ||
                    e ||
                    "Connect TronLink wallet failed.";
                  throw (
                    (-32002 === e.code &&
                      (t =
                        "The same DApp has already initiated a request to connect to TronLink wallet, and the pop-up window has not been closed."),
                    4001 === e.code && (t = "The user rejected connection."),
                    new c.Y6(t, e))
                  );
                }
              } else if (window.tronLink) {
                let e = this._wallet;
                try {
                  let t = yield e.request({ method: "tron_requestAccounts" });
                  if (!t)
                    throw new c.Y6(
                      "TronLink wallet is locked or no wallet account is avaliable."
                    );
                  if (4e3 === t.code)
                    throw new c.Y6(
                      "The same DApp has already initiated a request to connect to TronLink wallet, and the pop-up window has not been closed."
                    );
                  if (4001 === t.code)
                    throw new c.Y6("The user rejected connection.");
                } catch (t) {
                  throw new c.Y6(null == t ? void 0 : t.message, t);
                }
                let n =
                  (null == (t = e.tronWeb.defaultAddress)
                    ? void 0
                    : t.base58) || "";
                this.setAddress(n),
                  this.setState(s.nL.Connected),
                  this._listenTronLinkEvent();
              } else if (window.tronWeb) {
                let t =
                  (null == (e = this._wallet.tronWeb.defaultAddress)
                    ? void 0
                    : e.base58) || "";
                this.setAddress(t), this.setState(s.nL.Connected);
              } else throw new c.Y6("Cannot connect wallet.");
              this.connected && this.emit("connect", this.address || "");
            } catch (t) {
              throw (this.emit("error", t), t);
            } finally {
              this._connecting = !1;
            }
          });
        }
        disconnect() {
          return h(this, void 0, void 0, function* () {
            this._supportNewTronProtocol
              ? this._stopListenTronEvent()
              : this._stopListenTronLinkEvent(),
              this.state === s.nL.Connected &&
                (this.setAddress(null),
                this.setState(s.nL.Disconnect),
                this.emit("disconnect"));
          });
        }
        signTransaction(t, e) {
          return h(this, void 0, void 0, function* () {
            try {
              let n = yield this.checkAndGetWallet();
              try {
                return yield n.tronWeb.trx.sign(t, e);
              } catch (t) {
                if (t instanceof Error) throw new c.z4(t.message, t);
                throw new c.z4(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        multiSign(t, e, n) {
          return h(this, void 0, void 0, function* () {
            try {
              let i = yield this.checkAndGetWallet();
              try {
                return yield i.tronWeb.trx.multiSign(t, e, n);
              } catch (t) {
                if (t instanceof Error) throw new c.z4(t.message, t);
                throw new c.z4(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        signMessage(t, e) {
          return h(this, void 0, void 0, function* () {
            try {
              let n = yield this.checkAndGetWallet();
              try {
                return yield n.tronWeb.trx.signMessageV2(t, e);
              } catch (t) {
                if (t instanceof Error) throw new c.K3(t.message, t);
                throw new c.K3(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        switchChain(t) {
          return h(this, void 0, void 0, function* () {
            try {
              if ((yield this._checkWallet(), this.state === s.nL.NotFound))
                throw (
                  (!1 !== this.config.openUrlWhenWalletNotFound &&
                    (0, r.My)() &&
                    window.open(this.url, "_blank"),
                  new c.hv())
                );
              if (!this._supportNewTronProtocol)
                throw new c.Pj(
                  "Current version of TronLink doesn't support switch chain operation."
                );
              let e = this._wallet;
              try {
                yield e.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: t }],
                });
              } catch (t) {
                throw new c.Pj(
                  (null == t ? void 0 : t.message) || t,
                  t instanceof Error ? t : Error(t)
                );
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        checkAndGetWallet() {
          return h(this, void 0, void 0, function* () {
            if (
              (this.checkIfOpenTronLink(),
              yield this._checkWallet(),
              this.state !== s.nL.Connected)
            )
              throw new c.PQ();
            let t = this._wallet;
            if (!t || !t.tronWeb) throw new c.PQ();
            return t;
          });
        }
        _listenTronLinkEvent() {
          this._stopListenTronLinkEvent(),
            window.addEventListener("message", this._tronLinkMessageHandler);
        }
        _stopListenTronLinkEvent() {
          window.removeEventListener("message", this._tronLinkMessageHandler);
        }
        checkIfOpenTronLink() {
          let { dappName: t = "", dappIcon: e = "" } = this.config;
          if (
            !1 !== this.config.openTronLinkAppOnMobile &&
            (function (
              { dappIcon: t, dappName: e } = { dappIcon: "", dappName: "" }
            ) {
              if (
                !l() &&
                (0, r.yO)() &&
                !((0, r.My)() && void 0 !== window.iTron)
              ) {
                let n = "",
                  i = "";
                try {
                  n = document.title;
                  let t = document.querySelector('link[rel*="icon"]');
                  t &&
                    (i = new URL(
                      t.getAttribute("href") || "",
                      location.href
                    ).toString());
                } catch (t) {}
                let {
                    origin: o,
                    pathname: s,
                    search: r,
                    hash: c,
                  } = window.location,
                  a = o + s + r + (c.includes("?") ? c : `${c}?_=1`),
                  l = {
                    action: "open",
                    actionId: Date.now() + "",
                    callbackUrl: "http://someurl.com",
                    dappIcon: t || i,
                    dappName: e || n,
                    url: a,
                    protocol: "TronLink",
                    version: "1.0",
                    chainId: "0x2b6653dc",
                  };
                return (
                  (window.location.href = `tronlinkoutside://pull.activity?param=${encodeURIComponent(
                    JSON.stringify(l)
                  )}`),
                  !0
                );
              }
              return !1;
            })({ dappIcon: e, dappName: t })
          )
            throw new c.hv();
        }
        _listenTronEvent() {
          this._stopListenTronEvent(), this._stopListenTronLinkEvent();
          let t = this._wallet;
          t.on("chainChanged", this._onChainChanged),
            t.on("accountsChanged", this._onAccountsChanged);
        }
        _stopListenTronEvent() {
          let t = this._wallet;
          t.removeListener("chainChanged", this._onChainChanged),
            t.removeListener("accountsChanged", this._onAccountsChanged);
        }
        _checkWallet() {
          if (this.readyState === s.Ok.Found) return Promise.resolve(!0);
          if (this._checkPromise) return this._checkPromise;
          let t = Math.floor(20),
            e = Math.floor(this.config.checkTimeout / 100),
            n = 0,
            i;
          return (
            (this._checkPromise = new Promise((o) => {
              let c = () => {
                let c = ++n < t && !(0, r.yO)() ? a() : l();
                (c || n > e) &&
                  (i && clearInterval(i),
                  (this._readyState = c ? s.Ok.Found : s.Ok.NotFound),
                  this._updateWallet(),
                  this.emit("readyStateChanged", this.readyState),
                  o(c));
              };
              (i = setInterval(c, 100)), c();
            })),
            this._checkPromise
          );
        }
        checkForWalletReadyForApp() {
          if (this.checkReadyInterval) return;
          let t = 0,
            e = Math.floor(this.config.checkTimeout / 200);
          this.checkReadyInterval = setInterval(() => {
            var n, i;
            (
              window.tronLink
                ? null == (n = window.tronLink.tronWeb)
                  ? void 0
                  : n.defaultAddress
                : null == (i = window.tronWeb)
                ? void 0
                : i.defaultAddress
            )
              ? (this.checkReadyInterval &&
                  clearInterval(this.checkReadyInterval),
                (this.checkReadyInterval = null),
                this._updateWallet(),
                this.emit("connect", this.address || ""))
              : t > e
              ? (this.checkReadyInterval &&
                  clearInterval(this.checkReadyInterval),
                (this.checkReadyInterval = null))
              : t++;
          }, 200);
        }
        setAddress(t) {
          this._address = t;
        }
        setState(t) {
          t !== this.state && ((this._state = t), this.emit("stateChanged", t));
        }
      }
    },
    34301: () => {},
    49697: (t, e, n) => {
      "use strict";
      n.d(e, {
        K3: () => a,
        PQ: () => r,
        Pj: () => h,
        W0: () => d,
        Y6: () => c,
        gK: () => s,
        hv: () => o,
        z4: () => l,
      });
      class i extends Error {
        constructor(t, e) {
          super(t), (this.error = e);
        }
      }
      class o extends i {
        constructor() {
          super(...arguments),
            (this.name = "WalletNotFoundError"),
            (this.message = "The wallet is not found.");
        }
      }
      class s extends i {
        constructor() {
          super(...arguments),
            (this.name = "WalletNotSelectedError"),
            (this.message = "No wallet is selected. Please select a wallet.");
        }
      }
      class r extends i {
        constructor() {
          super(...arguments),
            (this.name = "WalletDisconnectedError"),
            (this.message =
              "The wallet is disconnected. Please connect first.");
        }
      }
      class c extends i {
        constructor() {
          super(...arguments), (this.name = "WalletConnectionError");
        }
      }
      class a extends i {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
      class l extends i {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      class h extends i {
        constructor() {
          super(...arguments), (this.name = "WalletSwitchChainError");
        }
      }
      class d extends i {
        constructor() {
          super(...arguments), (this.name = "WalletGetNetworkError");
        }
      }
    },
    78769: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function i() {}
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function s(t, e, i, s, r) {
        if ("function" != typeof i)
          throw TypeError("The listener must be a function");
        var c = new o(i, s || t, r),
          a = n ? n + e : e;
        return (
          t._events[a]
            ? t._events[a].fn
              ? (t._events[a] = [t._events[a], c])
              : t._events[a].push(c)
            : ((t._events[a] = c), t._eventsCount++),
          t
        );
      }
      function r(t, e) {
        0 == --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function c() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
        (c.prototype.eventNames = function () {
          var t,
            i,
            o = [];
          if (0 === this._eventsCount) return o;
          for (i in (t = this._events))
            e.call(t, i) && o.push(n ? i.slice(1) : i);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (c.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            i = this._events[e];
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var o = 0, s = i.length, r = Array(s); o < s; o++)
            r[o] = i[o].fn;
          return r;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            i = this._events[e];
          return i ? (i.fn ? 1 : i.length) : 0;
        }),
        (c.prototype.emit = function (t, e, i, o, s, r) {
          var c = n ? n + t : t;
          if (!this._events[c]) return !1;
          var a,
            l,
            h = this._events[c],
            d = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), d)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, i), !0;
              case 4:
                return h.fn.call(h.context, e, i, o), !0;
              case 5:
                return h.fn.call(h.context, e, i, o, s), !0;
              case 6:
                return h.fn.call(h.context, e, i, o, s, r), !0;
            }
            for (l = 1, a = Array(d - 1); l < d; l++) a[l - 1] = arguments[l];
            h.fn.apply(h.context, a);
          } else {
            var u,
              w = h.length;
            for (l = 0; l < w; l++)
              switch (
                (h[l].once && this.removeListener(t, h[l].fn, void 0, !0), d)
              ) {
                case 1:
                  h[l].fn.call(h[l].context);
                  break;
                case 2:
                  h[l].fn.call(h[l].context, e);
                  break;
                case 3:
                  h[l].fn.call(h[l].context, e, i);
                  break;
                case 4:
                  h[l].fn.call(h[l].context, e, i, o);
                  break;
                default:
                  if (!a)
                    for (u = 1, a = Array(d - 1); u < d; u++)
                      a[u - 1] = arguments[u];
                  h[l].fn.apply(h[l].context, a);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        }),
        (c.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        }),
        (c.prototype.removeListener = function (t, e, i, o) {
          var s = n ? n + t : t;
          if (!this._events[s]) return this;
          if (!e) return r(this, s), this;
          var c = this._events[s];
          if (c.fn)
            c.fn !== e ||
              (o && !c.once) ||
              (i && c.context !== i) ||
              r(this, s);
          else {
            for (var a = 0, l = [], h = c.length; a < h; a++)
              (c[a].fn !== e ||
                (o && !c[a].once) ||
                (i && c[a].context !== i)) &&
                l.push(c[a]);
            l.length
              ? (this._events[s] = 1 === l.length ? l[0] : l)
              : r(this, s);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && r(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = n),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    82313: (t, e, n) => {
      "use strict";
      n.d(e, { Ok: () => i, Y3: () => r, nL: () => o });
      var i,
        o,
        s = n(78769);
      !(function (t) {
        (t.Loading = "Loading"), (t.NotFound = "NotFound"), (t.Found = "Found");
      })(i || (i = {})),
        (function (t) {
          (t.Loading = "Loading"),
            (t.NotFound = "NotFound"),
            (t.Disconnect = "Disconnected"),
            (t.Connected = "Connected");
        })(o || (o = {}));
      class r extends s {
        get connected() {
          return this.state === o.Connected;
        }
        disconnect() {
          return (
            console.info(
              "The current adapter doesn't support disconnect by DApp."
            ),
            Promise.resolve()
          );
        }
        multiSign(...t) {
          return Promise.reject(
            "The current wallet doesn't support multiSign."
          );
        }
        switchChain(t) {
          return Promise.reject(
            "The current wallet doesn't support switch chain."
          );
        }
      }
    },
    93779: (t, e, n) => {
      "use strict";
      function i() {
        return (
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          "undefined" != typeof navigator
        );
      }
      function o() {
        return (
          "undefined" != typeof navigator &&
          navigator.userAgent.match(
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
          )
        );
      }
      n.d(e, { My: () => i, yO: () => o });
    },
  },
]);
