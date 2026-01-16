"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8978],
  {
    5041: (e, t, n) => {
      n.d(t, { useMutation: () => l });
      var i = n(12115),
        r = n(34560),
        s = n(7165),
        a = n(25910),
        o = n(52020),
        c = class extends a.Q {
          #e;
          #t = void 0;
          #n;
          #i;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#r();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, o.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.state.status === "pending" &&
                  this.#n.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#r(), this.#s(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#r(),
              this.#s();
          }
          mutate(e, t) {
            return (
              (this.#i = t),
              this.#n?.removeObserver(this),
              (this.#n = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(e)
            );
          }
          #r() {
            let e = this.#n?.state ?? (0, r.$)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #s(e) {
            s.jG.batch(() => {
              if (this.#i && this.hasListeners()) {
                let t = this.#t.variables,
                  n = this.#t.context;
                e?.type === "success"
                  ? (this.#i.onSuccess?.(e.data, t, n),
                    this.#i.onSettled?.(e.data, null, t, n))
                  : e?.type === "error" &&
                    (this.#i.onError?.(e.error, t, n),
                    this.#i.onSettled?.(void 0, e.error, t, n));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        h = n(26715);
      function l(e, t) {
        let n = (0, h.useQueryClient)(t),
          [r] = i.useState(() => new c(n, e));
        i.useEffect(() => {
          r.setOptions(e);
        }, [r, e]);
        let a = i.useSyncExternalStore(
            i.useCallback((e) => r.subscribe(s.jG.batchCalls(e)), [r]),
            () => r.getCurrentResult(),
            () => r.getCurrentResult()
          ),
          l = i.useCallback(
            (e, t) => {
              r.mutate(e, t).catch(o.lQ);
            },
            [r]
          );
        if (a.error && (0, o.GU)(r.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: l, mutateAsync: a.mutate };
      }
    },
    15484: (e, t, n) => {
      n.d(t, { A: () => r, b: () => i });
      var i = n(82661);
      let r = i;
    },
    17449: (e, t, n) => {
      let i;
      n.d(t, { B: () => U }), n(66916);
      var r = n(98078);
      let s = (e) => (t, n, i) => {
          let r = i.subscribe;
          return (
            (i.subscribe = (e, t, n) => {
              let s = e;
              if (t) {
                let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(i.getState());
                (s = (n) => {
                  let i = e(n);
                  if (!r(a, i)) {
                    let e = a;
                    t((a = i), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return r(s);
            }),
            e(t, n, i)
          );
        },
        a = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => a(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => a(t)(e),
            };
          }
        },
        o = (e, t) => (n, i, r) => {
          let s,
            o = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let i = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      r = null != (t = n.getItem(e)) ? t : null;
                    return r instanceof Promise ? r.then(i) : i(r);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            h = new Set(),
            l = new Set(),
            d = o.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              i,
              r
            );
          let u = () => {
              let e = o.partialize({ ...i() });
              return d.setItem(o.name, { state: e, version: o.version });
            },
            m = r.setState;
          r.setState = (e, t) => {
            m(e, t), u();
          };
          let p = e(
            (...e) => {
              n(...e), u();
            },
            i,
            r
          );
          r.getInitialState = () => p;
          let f = () => {
            var e, t;
            if (!d) return;
            (c = !1),
              h.forEach((e) => {
                var t;
                return e(null != (t = i()) ? t : p);
              });
            let r =
              (null == (t = o.onRehydrateStorage)
                ? void 0
                : t.call(o, null != (e = i()) ? e : p)) || void 0;
            return a(d.getItem.bind(d))(o.name)
              .then((e) => {
                if (e)
                  if ("number" != typeof e.version || e.version === o.version)
                    return [!1, e.state];
                  else {
                    if (o.migrate) return [!0, o.migrate(e.state, e.version)];
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [r, a] = e;
                if ((n((s = o.merge(a, null != (t = i()) ? t : p)), !0), r))
                  return u();
              })
              .then(() => {
                null == r || r(s, void 0),
                  (s = i()),
                  (c = !0),
                  l.forEach((e) => e(s));
              })
              .catch((e) => {
                null == r || r(void 0, e);
              });
          };
          return (
            (r.persist = {
              setOptions: (e) => {
                (o = { ...o, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(o.name);
              },
              getOptions: () => o,
              rehydrate: () => f(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                h.add(e),
                () => {
                  h.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
            }),
            o.skipHydration || f(),
            s || p
          );
        };
      var c = n(12421),
        h = n(35883),
        l = n(81379),
        d = n(78519),
        u = n(42142),
        m = n(67622),
        p = n(77752),
        f = n(90113);
      function w(e = {}) {
        let t,
          n,
          i,
          r,
          { shimDisconnect: s = !0, unstable_shimAsyncInject: a } = e;
        function o() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(v[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (c) => ({
          get icon() {
            return o().icon;
          },
          get id() {
            return o().id;
          },
          get name() {
            return o().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: w.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (i || ((i = this.onConnect.bind(this)), n.on("connect", i)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: a, isReconnecting: o } = {}) {
            let d = await this.getProvider();
            if (!d) throw new f.N();
            let u = [];
            if (o) u = await this.getAccounts().catch(() => []);
            else if (s)
              try {
                let e = await d.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (u = e[0]?.caveats?.[0]?.value?.map((e) => (0, h.b)(e)))
                  .length > 0 && (u = await this.getAccounts());
              } catch (e) {
                if (e.code === l.vx.code) throw new l.vx(e);
                if (e.code === l.qZ.code) throw e;
              }
            try {
              u?.length ||
                o ||
                (u = (await d.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, h.b)(e)
                )),
                i && (d.removeListener("connect", i), (i = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  d.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  d.on("chainChanged", n)),
                r ||
                  ((r = this.onDisconnect.bind(this)), d.on("disconnect", r));
              let m = await this.getChainId();
              if (a && m !== a) {
                let e = await this.switchChain({ chainId: a }).catch((e) => {
                  if (e.code === l.vx.code) throw e;
                  return { id: m };
                });
                m = e?.id ?? m;
              }
              return (
                s && (await c.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await c.storage?.setItem("injected.connected", !0)),
                { accounts: u, chainId: m }
              );
            } catch (e) {
              if (e.code === l.vx.code) throw new l.vx(e);
              if (e.code === l.qZ.code) throw new l.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new f.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              r && (t.removeListener("disconnect", r), (r = void 0)),
              i || ((i = this.onConnect.bind(this)), t.on("connect", i));
            try {
              await (0, d.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            s && (await c.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await c.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new f.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, h.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new f.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = o();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? g(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (s && (await c.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await c.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== a && !1 !== a) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof a ? a : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new f.N();
              }
              return !!(await (0, u.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new f.N();
            let i = c.chains.find((e) => e.id === t);
            if (!i) throw new l.ch(new p.nk());
            let r = new Promise((e) => {
              let n = (i) => {
                "chainId" in i &&
                  i.chainId === t &&
                  (c.emitter.off("change", n), e());
              };
              c.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, m.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        c.emitter.emit("change", { chainId: t });
                    }),
                  r,
                ]),
                i
              );
            } catch (s) {
              if (4902 === s.code || s?.data?.originalError?.code === 4902)
                try {
                  let s,
                    a,
                    { default: o, ...h } = i.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (s = e.blockExplorerUrls)
                    : o && (s = [o.url, ...Object.values(h).map((e) => e.url)]),
                    (a = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [i.rpcUrls.default?.http[0] ?? ""]);
                  let d = {
                    blockExplorerUrls: s,
                    chainId: (0, m.cK)(t),
                    chainName: e?.chainName ?? i.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                    rpcUrls: a,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [d],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            c.emitter.emit("change", { chainId: t });
                          else
                            throw new l.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      r,
                    ]),
                    i
                  );
                } catch (e) {
                  throw new l.vx(e);
                }
              if (s.code === l.vx.code) throw new l.vx(s);
              throw new l.ch(s);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (c.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                s && (await c.storage?.removeItem(`${this.id}.disconnected`));
            } else
              c.emitter.emit("change", { accounts: e.map((e) => (0, h.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            c.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let s = await this.getAccounts();
            if (0 === s.length) return;
            let a = Number(e.chainId);
            c.emitter.emit("connect", { accounts: s, chainId: a });
            let o = await this.getProvider();
            o &&
              (i && (o.removeListener("connect", i), (i = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), o.on("chainChanged", n)),
              r || ((r = this.onDisconnect.bind(this)), o.on("disconnect", r)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (c.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                r && (t.removeListener("disconnect", r), (r = void 0)),
                i || ((i = this.onConnect.bind(this)), t.on("connect", i))));
          },
        });
      }
      w.type = "injected";
      let v = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : g(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            g(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : g(e, "isPhantom"),
        },
      };
      function g(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let i = e.ethereum;
        return i?.providers
          ? i.providers.find((e) => n(e))
          : i && n(i)
          ? i
          : void 0;
      }
      var y = n(15484);
      class b {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new y.b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      var C = n(70051);
      let x = 256;
      var I = n(40194);
      function P(e) {
        let t,
          i,
          r,
          s,
          a,
          o,
          c,
          d,
          u = e.isNewChainsStale ?? !0;
        return (w) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: P.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (a || ((a = this.onConnect.bind(this)), e.on("connect", a)),
              c ||
                ((c = this.onSessionDelete.bind(this)),
                e.on("session_delete", c)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new f.N();
              o || ((o = this.onDisplayUri), n.on("display_uri", o));
              let i = e;
              if (!i) {
                let e = (await w.storage?.getItem("state")) ?? {};
                i = w.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : w.chains[0]?.id;
              }
              if (!i) throw Error("No chains found on connector.");
              let l = await this.isChainsStale();
              if ((n.session && l && (await n.disconnect()), !n.session || l)) {
                let e = w.chains.filter((e) => e.id !== i).map((e) => e.id);
                await n.connect({
                  optionalChains: [i, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(w.chains.map((e) => e.id));
              }
              let u = (await n.enable()).map((e) => (0, h.b)(e)),
                m = await this.getChainId();
              return (
                o && (n.removeListener("display_uri", o), (o = void 0)),
                a && (n.removeListener("connect", a), (a = void 0)),
                r ||
                  ((r = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", r)),
                s ||
                  ((s = this.onChainChanged.bind(this)),
                  n.on("chainChanged", s)),
                d ||
                  ((d = this.onDisconnect.bind(this)), n.on("disconnect", d)),
                c ||
                  ((c = this.onSessionDelete.bind(this)),
                  n.on("session_delete", c)),
                { accounts: u, chainId: m }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new l.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              s && (e?.removeListener("chainChanged", s), (s = void 0)),
                d && (e?.removeListener("disconnect", d), (d = void 0)),
                a || ((a = this.onConnect.bind(this)), e?.on("connect", a)),
                r && (e?.removeListener("accountsChanged", r), (r = void 0)),
                c && (e?.removeListener("session_delete", c), (c = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, h.b)(e));
          },
          async getProvider({ chainId: r } = {}) {
            async function s() {
              let t = w.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: i } = await Promise.all([
                n.e(3898),
                n.e(9631),
              ]).then(n.bind(n, 39631));
              return await i.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  w.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        n = t.rpcUrls.default.http[0];
                      if (!e.transports) return [n];
                      let i = e.transports?.[t.id]?.({ chain: t });
                      return (i?.value?.transports || [i]).map(
                        ({ value: e }) => e?.url || n
                      );
                    })({ chain: e, transports: w.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (i || (i = s()),
                (t = await i),
                t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
              r && (await this.switchChain?.({ chainId: r })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new f.N();
            let i = w.chains.find((e) => e.id === t);
            if (!i) throw new l.ch(new p.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: i }) => {
                    i === t && (w.emitter.off("change", n), e());
                  };
                  w.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, m.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), i;
            } catch (r) {
              if (/(user rejected)/i.test(r.message)) throw new l.vx(r);
              try {
                let r, s;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : i.blockExplorers?.default.url
                  ? [i.blockExplorers?.default.url]
                  : []),
                  (s = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...i.rpcUrls.default.http]);
                let a = {
                  blockExplorerUrls: r,
                  chainId: (0, m.cK)(t),
                  chainName: e?.chainName ?? i.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                  rpcUrls: s,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [a],
                });
                let o = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...o, t]), i;
              } catch (e) {
                throw new l.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : w.emitter.emit("change", {
                  accounts: e.map((e) => (0, h.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            w.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            w.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), w.emitter.emit("disconnect");
            let t = await this.getProvider();
            r && (t.removeListener("accountsChanged", r), (r = void 0)),
              s && (t.removeListener("chainChanged", s), (s = void 0)),
              d && (t.removeListener("disconnect", d), (d = void 0)),
              c && (t.removeListener("session_delete", c), (c = void 0)),
              a || ((a = this.onConnect.bind(this)), t.on("connect", a));
          },
          onDisplayUri(e) {
            w.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await w.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!u) return !1;
            let e = w.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await w.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        });
      }
      function S(e = {}) {
        var t, i;
        let r, s, a, o, c, d, u, f, w;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: S.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, h.b)(e));
                  a ||
                    ((a = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", a)),
                    o ||
                      ((o = this.onChainChanged.bind(this)),
                      t.on("chainChanged", o)),
                    c ||
                      ((c = this.onDisconnect.bind(this)),
                      t.on("disconnect", c));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === l.vx.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return { accounts: n, chainId: i };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new l.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                a && (e.removeListener("accountsChanged", a), (a = void 0)),
                  o && (e.removeListener("chainChanged", o), (o = void 0)),
                  c && (e.removeListener("disconnect", c), (c = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, h.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!s) {
                  r = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(1670),
                      n.e(2524),
                      n.e(9466),
                    ]).then(n.t.bind(n, 62524, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let i = r.walletExtension?.getChainId(),
                    a =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === i
                      ) || e.chains[0],
                    o = t.chainId || a?.id,
                    c = t.jsonRpcUrl || a?.rpcUrls.default.http[0];
                  s = r.makeWeb3Provider(c, o);
                }
                return s;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let i = e.chains.find((e) => e.id === n);
                if (!i) throw new l.ch(new p.nk());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, m.cK)(i.id) }],
                    }),
                    i
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, s;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : i.blockExplorers?.default.url
                        ? [i.blockExplorers?.default.url]
                        : []),
                        (s = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [i.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, m.cK)(n),
                        chainName: t?.chainName ?? i.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? i.nativeCurrency,
                        rpcUrls: s,
                      };
                      return (
                        await r.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        i
                      );
                    } catch (e) {
                      throw new l.vx(e);
                    }
                  throw new l.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, h.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                a && (n.removeListener("accountsChanged", a), (a = void 0)),
                  o && (n.removeListener("chainChanged", o), (o = void 0)),
                  c && (n.removeListener("disconnect", c), (c = void 0));
              },
            }))
          : ((i = e),
            (e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: S.type,
              async connect({ chainId: e, ...t } = {}) {
                try {
                  let n = await this.getProvider(),
                    i = (
                      await n.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in t && t.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, h.b)(e));
                  u ||
                    ((u = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", u)),
                    f ||
                      ((f = this.onChainChanged.bind(this)),
                      n.on("chainChanged", f)),
                    w ||
                      ((w = this.onDisconnect.bind(this)),
                      n.on("disconnect", w));
                  let r = await this.getChainId();
                  if (e && r !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === l.vx.code) throw e;
                        return { id: r };
                      }
                    );
                    r = t?.id ?? r;
                  }
                  return { accounts: i, chainId: r };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new l.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                u && (e.removeListener("accountsChanged", u), (u = void 0)),
                  f && (e.removeListener("chainChanged", f), (f = void 0)),
                  w && (e.removeListener("disconnect", w), (w = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, h.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!d) {
                  let t =
                      "string" == typeof i.preference
                        ? { options: i.preference }
                        : {
                            ...i.preference,
                            options: i.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: r } = await n
                      .e(3746)
                      .then(n.bind(n, 3746));
                  d = r({
                    ...i,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return d;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let i = e.chains.find((e) => e.id === n);
                if (!i) throw new l.ch(new p.nk());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, m.cK)(i.id) }],
                    }),
                    i
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, s;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : i.blockExplorers?.default.url
                        ? [i.blockExplorers?.default.url]
                        : []),
                        (s = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [i.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, m.cK)(n),
                        chainName: t?.chainName ?? i.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? i.nativeCurrency,
                        rpcUrls: s,
                      };
                      return (
                        await r.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        i
                      );
                    } catch (e) {
                      throw new l.vx(e);
                    }
                  throw new l.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, h.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                u && (n.removeListener("accountsChanged", u), (u = void 0)),
                  f && (n.removeListener("chainChanged", f), (f = void 0)),
                  w && (n.removeListener("disconnect", w), (w = void 0));
              },
            }));
      }
      (P.type = "walletConnect"), (S.type = "coinbaseWallet");
      var E = n(36835),
        _ = n(69220),
        k = n(33847);
      function U({
        projectId: e,
        chains: t,
        metadata: n,
        enableCoinbase: a,
        enableEmail: d,
        enableInjected: u,
        auth: m = { showWallets: !0 },
        enableWalletConnect: f,
        enableEIP6963: v,
        ...g
      }) {
        var y;
        let U = [],
          A = Object.fromEntries(
            t.map((t) => [t.id, (0, k.oD)({ chainId: t.id, projectId: e })])
          );
        return (
          !1 !== f && U.push(P({ projectId: e, metadata: n, showQrModal: !1 })),
          !1 !== u && U.push(w({ shimDisconnect: !0 })),
          !1 !== a &&
            U.push(
              S({
                version: "4",
                appName: n?.name ?? "Unknown",
                appLogoUrl: n?.icons[0] ?? "Unknown",
                preference: g.coinbasePreference || "all",
              })
            ),
          (d || m?.socials) &&
            U.push(
              ((y = {
                chains: [...t],
                options: { projectId: e },
                socials: m?.socials,
                email: d,
                showWallets: m.showWallets,
              }),
              (e) => ({
                id: _.oU.AUTH_CONNECTOR_ID,
                name: "Web3Modal Auth",
                type: "w3mAuth",
                socials: y.socials,
                email: y.email,
                showWallets: y.showWallets,
                async connect(e = {}) {
                  let t = await this.getProvider(),
                    { address: n, chainId: i } = await t.connect({
                      chainId: e.chainId,
                    });
                  return (
                    await t.getSmartAccountEnabledNetworks(),
                    {
                      accounts: [n],
                      account: n,
                      chainId: i,
                      chain: { id: i, unsuported: !1 },
                    }
                  );
                },
                async disconnect() {
                  let e = await this.getProvider();
                  await e.disconnect();
                },
                async getAccounts() {
                  let t = await this.getProvider(),
                    { address: n } = await t.connect();
                  return e.emitter.emit("change", { accounts: [n] }), [n];
                },
                async getProvider() {
                  return (
                    this.provider ||
                      (this.provider = new E.YW(y.options.projectId)),
                    Promise.resolve(this.provider)
                  );
                },
                async getChainId() {
                  let e = await this.getProvider(),
                    { chainId: t } = await e.getChainId();
                  return t;
                },
                async isAuthorized() {
                  let e = await this.getProvider(),
                    { isConnected: t } = await e.isConnected();
                  return t;
                },
                async switchChain({ chainId: t }) {
                  try {
                    let n = e.chains.find((e) => e.id === t);
                    if (!n)
                      throw new l.ch(Error("chain not found on connector."));
                    let i = await this.getProvider();
                    return (
                      await i.switchNetwork(t),
                      e.emitter.emit("change", { chainId: Number(t) }),
                      n
                    );
                  } catch (e) {
                    if (e instanceof Error) throw new l.ch(e);
                    throw e;
                  }
                },
                onAccountsChanged(t) {
                  0 === t.length
                    ? this.onDisconnect()
                    : e.emitter.emit("change", { accounts: t.map(h.b) });
                },
                onChainChanged(t) {
                  let n = Number(t);
                  e.emitter.emit("change", { chainId: n });
                },
                async onConnect(t) {
                  let n = Number(t.chainId),
                    i = await this.getAccounts();
                  e.emitter.emit("connect", { accounts: i, chainId: n });
                },
                async onDisconnect(e) {
                  let t = await this.getProvider();
                  await t.disconnect();
                },
              }))
            ),
          (function (e) {
            let t,
              {
                multiInjectedProviderDiscovery: n = !0,
                storage: a = (0, C.wE)({ storage: (0, C.XB)() }),
                syncConnectedChain: h = !0,
                ssr: l = !1,
                ...d
              } = e,
              u =
                "undefined" != typeof window && n
                  ? (function () {
                      let e = new Set(),
                        t = [],
                        n = () =>
                          (function (e) {
                            if ("undefined" == typeof window) return;
                            let t = (t) => e(t.detail);
                            return (
                              window.addEventListener(
                                "eip6963:announceProvider",
                                t
                              ),
                              window.dispatchEvent(
                                new CustomEvent("eip6963:requestProvider")
                              ),
                              () =>
                                window.removeEventListener(
                                  "eip6963:announceProvider",
                                  t
                                )
                            );
                          })((n) => {
                            t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                              ((t = [...t, n]),
                              e.forEach((e) => e(t, { added: [n] })));
                          }),
                        i = n();
                      return {
                        _listeners: () => e,
                        clear() {
                          e.forEach((e) => e([], { removed: [...t] })),
                            (t = []);
                        },
                        destroy() {
                          this.clear(), e.clear(), i?.();
                        },
                        findProvider: ({ rdns: e }) =>
                          t.find((t) => t.info.rdns === e),
                        getProviders: () => t,
                        reset() {
                          this.clear(), i?.(), (i = n());
                        },
                        subscribe: (n, { emitImmediately: i } = {}) => (
                          e.add(n), i && n(t, { added: t }), () => e.delete(n)
                        ),
                      };
                    })()
                  : void 0,
              m = (0, c.y)(() => d.chains),
              f = (0, c.y)(() => {
                let e = [],
                  t = new Set();
                for (let n of d.connectors ?? []) {
                  let i = v(n);
                  if ((e.push(i), !l && i.rdns))
                    for (let e of "string" == typeof i.rdns ? [i.rdns] : i.rdns)
                      t.add(e);
                }
                if (!l && u)
                  for (let n of u.getProviders())
                    t.has(n.info.rdns) || e.push(v(g(n)));
                return e;
              });
            function v(e) {
              let t = new b(
                  (function (e = 11) {
                    if (!i || x + e > 512) {
                      (i = ""), (x = 0);
                      for (let e = 0; e < 256; e++)
                        i += ((256 + 256 * Math.random()) | 0)
                          .toString(16)
                          .substring(1);
                    }
                    return i.substring(x, x++ + e);
                  })()
                ),
                n = {
                  ...e({
                    emitter: t,
                    chains: m.getState(),
                    storage: a,
                    transports: d.transports,
                  }),
                  emitter: t,
                  uid: t.uid,
                };
              return t.on("connect", U), n.setup?.(), n;
            }
            function g(e) {
              let { info: t } = e,
                n = e.provider;
              return w({ target: { ...t, id: t.rdns, provider: n } });
            }
            let y = new Map();
            function P() {
              return {
                chainId: m.getState()[0].id,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            }
            let S = "0.0.0-canary-";
            t = I.r.startsWith(S)
              ? Number.parseInt(I.r.replace(S, ""))
              : Number.parseInt(I.r.split(".")[0] ?? "0");
            let E = (0, c.y)(
              s(
                a
                  ? o(P, {
                      migrate(e, n) {
                        if (n === t) return e;
                        let i = P(),
                          r = _(e, i.chainId);
                        return { ...i, chainId: r };
                      },
                      name: "store",
                      partialize: (e) => ({
                        connections: {
                          __type: "Map",
                          value: Array.from(e.connections.entries()).map(
                            ([e, t]) => {
                              let {
                                id: n,
                                name: i,
                                type: r,
                                uid: s,
                              } = t.connector;
                              return [
                                e,
                                {
                                  ...t,
                                  connector: {
                                    id: n,
                                    name: i,
                                    type: r,
                                    uid: s,
                                  },
                                },
                              ];
                            }
                          ),
                        },
                        chainId: e.chainId,
                        current: e.current,
                      }),
                      merge(e, t) {
                        "object" == typeof e &&
                          e &&
                          "status" in e &&
                          delete e.status;
                        let n = _(e, t.chainId);
                        return { ...t, ...e, chainId: n };
                      },
                      skipHydration: l,
                      storage: a,
                      version: t,
                    })
                  : P
              )
            );
            function _(e, t) {
              return e &&
                "object" == typeof e &&
                "chainId" in e &&
                "number" == typeof e.chainId &&
                m.getState().some((t) => t.id === e.chainId)
                ? e.chainId
                : t;
            }
            function k(e) {
              E.setState((t) => {
                let n = t.connections.get(e.uid);
                return n
                  ? {
                      ...t,
                      connections: new Map(t.connections).set(e.uid, {
                        accounts: e.accounts ?? n.accounts,
                        chainId: e.chainId ?? n.chainId,
                        connector: n.connector,
                      }),
                    }
                  : t;
              });
            }
            function U(e) {
              "connecting" !== E.getState().status &&
                "reconnecting" !== E.getState().status &&
                E.setState((t) => {
                  let n = f.getState().find((t) => t.uid === e.uid);
                  return n
                    ? (n.emitter.listenerCount("connect") &&
                        n.emitter.off("connect", k),
                      n.emitter.listenerCount("change") ||
                        n.emitter.on("change", k),
                      n.emitter.listenerCount("disconnect") ||
                        n.emitter.on("disconnect", A),
                      {
                        ...t,
                        connections: new Map(t.connections).set(e.uid, {
                          accounts: e.accounts,
                          chainId: e.chainId,
                          connector: n,
                        }),
                        current: e.uid,
                        status: "connected",
                      })
                    : t;
                });
            }
            function A(e) {
              E.setState((t) => {
                let n = t.connections.get(e.uid);
                if (n) {
                  let e = n.connector;
                  e.emitter.listenerCount("change") &&
                    n.connector.emitter.off("change", k),
                    e.emitter.listenerCount("disconnect") &&
                      n.connector.emitter.off("disconnect", A),
                    e.emitter.listenerCount("connect") ||
                      n.connector.emitter.on("connect", U);
                }
                if ((t.connections.delete(e.uid), 0 === t.connections.size))
                  return {
                    ...t,
                    connections: new Map(),
                    current: null,
                    status: "disconnected",
                  };
                let i = t.connections.values().next().value;
                return {
                  ...t,
                  connections: new Map(t.connections),
                  current: i.connector.uid,
                };
              });
            }
            return (
              E.setState(P()),
              h &&
                E.subscribe(
                  ({ connections: e, current: t }) =>
                    t ? e.get(t)?.chainId : void 0,
                  (e) => {
                    if (m.getState().some((t) => t.id === e))
                      return E.setState((t) => ({
                        ...t,
                        chainId: e ?? t.chainId,
                      }));
                  }
                ),
              u?.subscribe((e) => {
                let t = new Set(),
                  n = new Set();
                for (let e of f.getState())
                  if ((t.add(e.id), e.rdns))
                    for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                      n.add(t);
                let i = [];
                for (let r of e) {
                  if (n.has(r.info.rdns)) continue;
                  let e = v(g(r));
                  t.has(e.id) || i.push(e);
                }
                (!a || E.persist.hasHydrated()) &&
                  f.setState((e) => [...e, ...i], !0);
              }),
              {
                get chains() {
                  return m.getState();
                },
                get connectors() {
                  return f.getState();
                },
                storage: a,
                getClient: function (e = {}) {
                  let t,
                    n = e.chainId ?? E.getState().chainId,
                    i = m.getState().find((e) => e.id === n);
                  if (e.chainId && !i) throw new p.nk();
                  {
                    let e = y.get(E.getState().chainId);
                    if (e && !i) return e;
                    if (!i) throw new p.nk();
                  }
                  {
                    let e = y.get(n);
                    if (e) return e;
                  }
                  if (d.client) t = d.client({ chain: i });
                  else {
                    let e = i.id,
                      n = m.getState().map((e) => e.id),
                      s = {};
                    for (let [t, i] of Object.entries(d))
                      if (
                        "chains" !== t &&
                        "client" !== t &&
                        "connectors" !== t &&
                        "transports" !== t
                      )
                        if ("object" == typeof i)
                          if (e in i) s[t] = i[e];
                          else {
                            if (n.some((e) => e in i)) continue;
                            s[t] = i;
                          }
                        else s[t] = i;
                    t = (0, r.U)({
                      ...s,
                      chain: i,
                      batch: s.batch ?? { multicall: !0 },
                      transport: (t) =>
                        d.transports[e]({ ...t, connectors: f }),
                    });
                  }
                  return y.set(n, t), t;
                },
                get state() {
                  return E.getState();
                },
                setState(e) {
                  let t;
                  t = "function" == typeof e ? e(E.getState()) : e;
                  let n = P();
                  "object" != typeof t && (t = n),
                    Object.keys(n).some((e) => !(e in t)) && (t = n),
                    E.setState(t, !0);
                },
                subscribe: (e, t, n) =>
                  E.subscribe(
                    e,
                    t,
                    n ? { ...n, fireImmediately: n.emitImmediately } : void 0
                  ),
                _internal: {
                  mipd: u,
                  store: E,
                  ssr: !!l,
                  syncConnectedChain: h,
                  transports: d.transports,
                  chains: {
                    setState(e) {
                      let t = "function" == typeof e ? e(m.getState()) : e;
                      if (0 !== t.length) return m.setState(t, !0);
                    },
                    subscribe: (e) => m.subscribe(e),
                  },
                  connectors: {
                    providerDetailToConnector: g,
                    setup: v,
                    setState: (e) =>
                      f.setState(
                        "function" == typeof e ? e(f.getState()) : e,
                        !0
                      ),
                    subscribe: (e) => f.subscribe(e),
                  },
                  events: { change: k, connect: U, disconnect: A },
                },
              }
            );
          })({
            chains: t,
            multiInjectedProviderDiscovery: !1 !== v,
            transports: A,
            ...g,
            connectors: U,
          })
        );
      }
    },
    34560: (e, t, n) => {
      n.d(t, { $: () => o, s: () => a });
      var i = n(7165),
        r = n(57948),
        s = n(6784),
        a = class extends r.k {
          #a;
          #o;
          #c;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#o = e.mutationCache),
              (this.#a = []),
              (this.state = e.state || o()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#a.includes(e) ||
              (this.#a.push(e),
              this.clearGcTimeout(),
              this.#o.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#a = this.#a.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#o.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#a.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#o.remove(this));
          }
          continue() {
            return this.#c?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
              this.#h({ type: "continue" });
            };
            this.#c = (0, s.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#h({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#h({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#o.canRun(this),
            });
            let n = "pending" === this.state.status,
              i = !this.#c.canStart();
            try {
              if (n) t();
              else {
                this.#h({ type: "pending", variables: e, isPaused: i }),
                  await this.#o.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#h({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: i,
                  });
              }
              let r = await this.#c.start();
              return (
                await this.#o.config.onSuccess?.(
                  r,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(r, e, this.state.context),
                await this.#o.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, e, this.state.context),
                this.#h({ type: "success", data: r }),
                r
              );
            } catch (t) {
              try {
                throw (
                  (await this.#o.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#o.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#h({ type: "error", error: t });
              }
            } finally {
              this.#o.runNext(this);
            }
          }
          #h(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.#a.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#o.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    37120: (e, t, n) => {
      n.d(t, { N: () => i });
      let i = (0, n(22732).x)({
        id: 56,
        name: "BNB Smart Chain",
        nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
        rpcUrls: { default: { http: ["https://56.rpc.thirdweb.com"] } },
        blockExplorers: {
          default: {
            name: "BscScan",
            url: "https://bscscan.com",
            apiUrl: "https://api.bscscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xf2f12c,
          },
        },
      });
    },
    40016: (e, t, n) => {
      n.d(t, { E: () => O });
      var i = n(27493),
        r = n(17327),
        s = n(12914),
        a = n(96978);
      let o = {
        block: (0, r.R)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = (0, s.uP)(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? (0, i.uU)(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, s.gU)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, i.uU)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, a.WB)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, i.uU)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, i.uU)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, i.uU)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var c = n(36444),
        h = n(81757),
        l = n(79731),
        d = n(67622),
        u = n(53369),
        m = n(69432),
        p = n(16303),
        f = n(90340),
        w = n(26461),
        v = n(29695),
        g = n(54335),
        y = n(80204),
        b = n(88579),
        C = n(7441),
        x = n(76339),
        I = n(30445),
        P = n(42264),
        S = n(87094),
        E = n(93727);
      function _(e) {
        let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: i, to: r } = e;
        if (t <= 0) throw new I.qD({ chainId: t });
        if (r && !(0, h.P)(r)) throw new c.M({ address: r });
        if (i && i > b.Ao) throw new P.BG({ maxFeePerGas: i });
        if (n && i && n > i)
          throw new P.lN({ maxFeePerGas: i, maxPriorityFeePerGas: n });
      }
      var k = n(96887);
      function U(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let { address: i, storageKeys: r } = e[n];
          for (let e = 0; e < r.length; e++)
            if (r[e].length - 2 != 64) throw new m.fZ({ storageKey: r[e] });
          if (!(0, h.P)(i, { strict: !1 })) throw new c.M({ address: i });
          t.push([i, r]);
        }
        return t;
      }
      function A(e, t) {
        let n = t ?? e,
          { v: i, yParity: r } = n;
        if (void 0 === n.r || void 0 === n.s || (void 0 === i && void 0 === r))
          return [];
        let s = (0, g.B)(n.r),
          a = (0, g.B)(n.s);
        return [
          "number" == typeof r
            ? r
              ? (0, d.cK)(1)
              : "0x"
            : 0n === i
            ? "0x"
            : 1n === i
            ? (0, d.cK)(1)
            : 27n === i
            ? "0x"
            : (0, d.cK)(1),
          "0x00" === s ? "0x" : s,
          "0x00" === a ? "0x" : a,
        ];
      }
      let M = {
          blockTime: 2e3,
          contracts: {
            gasPriceOracle: {
              address: "0x420000000000000000000000000000000000000F",
            },
            l1Block: { address: "0x4200000000000000000000000000000000000015" },
            l2CrossDomainMessenger: {
              address: "0x4200000000000000000000000000000000000007",
            },
            l2Erc721Bridge: {
              address: "0x4200000000000000000000000000000000000014",
            },
            l2StandardBridge: {
              address: "0x4200000000000000000000000000000000000010",
            },
            l2ToL1MessagePasser: {
              address: "0x4200000000000000000000000000000000000016",
            },
          },
          formatters: o,
          serializers: {
            transaction: function (e, t) {
              var n;
              if ("deposit" === (n = e).type || void 0 !== n.sourceHash) {
                var r = e,
                  s = r;
                let { from: t, to: n } = s;
                if (t && !(0, h.P)(t)) throw new c.M({ address: t });
                if (n && !(0, h.P)(n)) throw new c.M({ address: n });
                let {
                    sourceHash: i,
                    data: a,
                    from: o,
                    gas: m,
                    isSystemTx: p,
                    mint: f,
                    to: w,
                    value: v,
                  } = r,
                  g = [
                    i,
                    o,
                    w ?? "0x",
                    f ? (0, d.nj)(f) : "0x",
                    v ? (0, d.nj)(v) : "0x",
                    m ? (0, d.nj)(m) : "0x",
                    p ? "0x1" : "0x",
                    a ?? "0x",
                  ];
                return (0, l.aP)(["0x7e", (0, u.EQ)(g)]);
              }
              let a = (0, k.L)(e);
              return "eip1559" === a
                ? (function (e, t) {
                    let {
                      chainId: n,
                      gas: i,
                      nonce: r,
                      to: s,
                      value: a,
                      maxFeePerGas: o,
                      maxPriorityFeePerGas: c,
                      accessList: h,
                      data: m,
                    } = e;
                    _(e);
                    let p = U(h),
                      f = [
                        (0, d.cK)(n),
                        r ? (0, d.cK)(r) : "0x",
                        c ? (0, d.cK)(c) : "0x",
                        o ? (0, d.cK)(o) : "0x",
                        i ? (0, d.cK)(i) : "0x",
                        s ?? "0x",
                        a ? (0, d.cK)(a) : "0x",
                        m ?? "0x",
                        p,
                        ...A(e, t),
                      ];
                    return (0, l.aP)(["0x02", (0, u.EQ)(f)]);
                  })(e, t)
                : "eip2930" === a
                ? (function (e, t) {
                    let {
                        chainId: n,
                        gas: i,
                        data: r,
                        nonce: s,
                        to: a,
                        value: o,
                        accessList: m,
                        gasPrice: p,
                      } = e,
                      {
                        chainId: f,
                        maxPriorityFeePerGas: w,
                        gasPrice: v,
                        maxFeePerGas: g,
                        to: y,
                      } = e;
                    if (f <= 0) throw new I.qD({ chainId: f });
                    if (y && !(0, h.P)(y)) throw new c.M({ address: y });
                    if (w || g)
                      throw new C.C(
                        "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                      );
                    if (v && v > b.Ao) throw new P.BG({ maxFeePerGas: v });
                    let x = U(m),
                      S = [
                        (0, d.cK)(n),
                        s ? (0, d.cK)(s) : "0x",
                        p ? (0, d.cK)(p) : "0x",
                        i ? (0, d.cK)(i) : "0x",
                        a ?? "0x",
                        o ? (0, d.cK)(o) : "0x",
                        r ?? "0x",
                        x,
                        ...A(e, t),
                      ];
                    return (0, l.aP)(["0x01", (0, u.EQ)(S)]);
                  })(e, t)
                : "eip4844" === a
                ? (function (e, t) {
                    let {
                        chainId: n,
                        gas: r,
                        nonce: s,
                        to: a,
                        value: o,
                        maxFeePerBlobGas: c,
                        maxFeePerGas: h,
                        maxPriorityFeePerGas: m,
                        accessList: g,
                        data: b,
                      } = e,
                      { blobVersionedHashes: C } = e;
                    if (C) {
                      if (0 === C.length) throw new x.zF();
                      for (let e of C) {
                        let t = (0, S.E)(e),
                          n = (0, i.ME)((0, E.di)(e, 0, 1));
                        if (32 !== t) throw new x.uP({ hash: e, size: t });
                        if (n !== y.E) throw new x.PK({ hash: e, version: n });
                      }
                    }
                    _(e);
                    let I = e.blobVersionedHashes,
                      P = e.sidecars;
                    if (e.blobs && (void 0 === I || void 0 === P)) {
                      let t =
                          "string" == typeof e.blobs[0]
                            ? e.blobs
                            : e.blobs.map((e) => (0, d.My)(e)),
                        n = e.kzg,
                        i = (0, p.S)({ blobs: t, kzg: n });
                      if (
                        (void 0 === I && (I = (0, w.d)({ commitments: i })),
                        void 0 === P)
                      ) {
                        let e = (0, f.t)({ blobs: t, commitments: i, kzg: n });
                        P = (0, v.T)({ blobs: t, commitments: i, proofs: e });
                      }
                    }
                    let k = U(g),
                      M = [
                        (0, d.cK)(n),
                        s ? (0, d.cK)(s) : "0x",
                        m ? (0, d.cK)(m) : "0x",
                        h ? (0, d.cK)(h) : "0x",
                        r ? (0, d.cK)(r) : "0x",
                        a ?? "0x",
                        o ? (0, d.cK)(o) : "0x",
                        b ?? "0x",
                        k,
                        c ? (0, d.cK)(c) : "0x",
                        I ?? [],
                        ...A(e, t),
                      ],
                      O = [],
                      N = [],
                      K = [];
                    if (P)
                      for (let e = 0; e < P.length; e++) {
                        let { blob: t, commitment: n, proof: i } = P[e];
                        O.push(t), N.push(n), K.push(i);
                      }
                    return (0, l.aP)([
                      "0x03",
                      P ? (0, u.EQ)([M, O, N, K]) : (0, u.EQ)(M),
                    ]);
                  })(e, t)
                : "eip7702" === a
                ? (function (e, t) {
                    let {
                        authorizationList: n,
                        chainId: i,
                        gas: r,
                        nonce: s,
                        to: a,
                        value: o,
                        maxFeePerGas: m,
                        maxPriorityFeePerGas: p,
                        accessList: f,
                        data: w,
                      } = e,
                      { authorizationList: v } = e;
                    if (v)
                      for (let e of v) {
                        let { chainId: t } = e,
                          n = e.address;
                        if (!(0, h.P)(n)) throw new c.M({ address: n });
                        if (t < 0) throw new I.qD({ chainId: t });
                      }
                    _(e);
                    let g = U(f),
                      y = (function (e) {
                        if (!e || 0 === e.length) return [];
                        let t = [];
                        for (let n of e) {
                          let { chainId: e, nonce: i, ...r } = n,
                            s = n.address;
                          t.push([
                            e ? (0, d.nj)(e) : "0x",
                            s,
                            i ? (0, d.nj)(i) : "0x",
                            ...A({}, r),
                          ]);
                        }
                        return t;
                      })(n);
                    return (0, l.aP)([
                      "0x04",
                      (0, u.EQ)([
                        (0, d.cK)(i),
                        s ? (0, d.cK)(s) : "0x",
                        p ? (0, d.cK)(p) : "0x",
                        m ? (0, d.cK)(m) : "0x",
                        r ? (0, d.cK)(r) : "0x",
                        a ?? "0x",
                        o ? (0, d.cK)(o) : "0x",
                        w ?? "0x",
                        g,
                        y,
                        ...A(e, t),
                      ]),
                    ]);
                  })(e, t)
                : (function (e, t) {
                    let {
                        chainId: n = 0,
                        gas: i,
                        data: r,
                        nonce: s,
                        to: a,
                        value: o,
                        gasPrice: l,
                      } = e,
                      {
                        chainId: p,
                        maxPriorityFeePerGas: f,
                        gasPrice: w,
                        maxFeePerGas: v,
                        to: y,
                      } = e;
                    if (y && !(0, h.P)(y)) throw new c.M({ address: y });
                    if (void 0 !== p && p <= 0) throw new I.qD({ chainId: p });
                    if (f || v)
                      throw new C.C(
                        "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                      );
                    if (w && w > b.Ao) throw new P.BG({ maxFeePerGas: w });
                    let x = [
                      s ? (0, d.cK)(s) : "0x",
                      l ? (0, d.cK)(l) : "0x",
                      i ? (0, d.cK)(i) : "0x",
                      a ?? "0x",
                      o ? (0, d.cK)(o) : "0x",
                      r ?? "0x",
                    ];
                    if (t) {
                      let e = (() => {
                          if (t.v >= 35n)
                            return (t.v - 35n) / 2n > 0
                              ? t.v
                              : 27n + (35n === t.v ? 0n : 1n);
                          if (n > 0)
                            return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                          let e = 27n + (27n === t.v ? 0n : 1n);
                          if (t.v !== e) throw new m.zW({ v: t.v });
                          return e;
                        })(),
                        i = (0, g.B)(t.r),
                        r = (0, g.B)(t.s);
                      x = [
                        ...x,
                        (0, d.cK)(e),
                        "0x00" === i ? "0x" : i,
                        "0x00" === r ? "0x" : r,
                      ];
                    } else n > 0 && (x = [...x, (0, d.cK)(n), "0x", "0x"]);
                    return (0, u.EQ)(x);
                  })(e, t);
            },
          },
        },
        O = (0, n(22732).x)({
          ...M,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...M.contracts,
            disputeGameFactory: {
              1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
            },
            l2OutputOracle: {
              1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              1: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 0x10ac19f,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 0x10ac19f,
              },
            },
          },
          sourceId: 1,
        });
    },
    55557: (e, t, n) => {
      n.d(t, { G: () => i });
      let i = (0, n(22732).x)({
        id: 0xaa36a7,
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://sepolia.drpc.org"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
            blockCreated: 5317080,
          },
        },
        testnet: !0,
      });
    },
    56886: (e, t, n) => {
      n.d(t, { D: () => i });
      let i = (0, n(22732).x)({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://arbiscan.io",
            apiUrl: "https://api.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707,
          },
        },
      });
    },
    57394: (e, t, n) => {
      n.d(t, { iM: () => i });
      let i = {
        getItem: (e) =>
          "undefined" == typeof window
            ? null
            : (function (e, t) {
                let n = e.split("; ").find((e) => e.startsWith(`${t}=`));
                if (n) return n.substring(t.length + 1);
              })(document.cookie, e) ?? null,
        setItem(e, t) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=${t};path=/;samesite=Lax`);
        },
        removeItem(e) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=;max-age=-1;path=/`);
        },
      };
    },
    65730: (e, t, n) => {
      n.d(t, { n: () => i });
      let i = (0, n(22732).x)({
        id: 137,
        name: "Polygon",
        nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
        rpcUrls: { default: { http: ["https://polygon-rpc.com"] } },
        blockExplorers: {
          default: {
            name: "PolygonScan",
            url: "https://polygonscan.com",
            apiUrl: "https://api.polygonscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0x18938b0,
          },
        },
      });
    },
    70051: (e, t, n) => {
      function i(e, t) {
        return JSON.parse(e, (e, n) => {
          let i = n;
          return (
            i?.__type === "bigint" && (i = BigInt(i.value)),
            i?.__type === "Map" && (i = new Map(i.value)),
            t?.(e, i) ?? i
          );
        });
      }
      function r(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function s(e, t) {
        let { length: n } = e;
        for (let i = 0; i < n; ++i) if (e[i] === t) return i + 1;
        return 0;
      }
      function a(e, t, n, i) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              i = "function" == typeof t,
              a = [],
              o = [];
            return function (c, h) {
              if ("object" == typeof h)
                if (a.length) {
                  let e = s(a, this);
                  0 === e ? (a[a.length] = this) : (a.splice(e), o.splice(e)),
                    (o[o.length] = c);
                  let n = s(a, h);
                  if (0 !== n)
                    return i ? t.call(this, c, h, r(o, n)) : `[ref=${r(o, n)}]`;
                } else (a[0] = h), (o[0] = c);
              return n ? e.call(this, c, h) : h;
            };
          })((e, n) => {
            let i = n;
            return (
              "bigint" == typeof i &&
                (i = { __type: "bigint", value: n.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, i) ?? i
            );
          }, i),
          n ?? void 0
        );
      }
      function o(e) {
        let {
          deserialize: t = i,
          key: n = "wagmi",
          serialize: r = a,
          storage: s = c,
        } = e;
        function o(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...s,
          key: n,
          async getItem(e, i) {
            let r = s.getItem(`${n}.${e}`),
              a = await o(r);
            return a ? t(a) ?? null : i ?? null;
          },
          async setItem(e, t) {
            let i = `${n}.${e}`;
            null === t ? await o(s.removeItem(i)) : await o(s.setItem(i, r(t)));
          },
          async removeItem(e) {
            await o(s.removeItem(`${n}.${e}`));
          },
        };
      }
      n.d(t, { wE: () => o, XB: () => h });
      let c = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      function h() {
        let e =
          "undefined" != typeof window && window.localStorage
            ? window.localStorage
            : c;
        return {
          getItem: (t) => e.getItem(t),
          removeItem(t) {
            e.removeItem(t);
          },
          setItem(t, n) {
            try {
              e.setItem(t, n);
            } catch {}
          },
        };
      }
    },
    82661: (e) => {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function i() {}
      function r(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function s(e, t, i, s, a) {
        if ("function" != typeof i)
          throw TypeError("The listener must be a function");
        var o = new r(i, s || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function o() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            i,
            r = [];
          if (0 === this._eventsCount) return r;
          for (i in (e = this._events))
            t.call(e, i) && r.push(n ? i.slice(1) : i);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var r = 0, s = i.length, a = Array(s); r < s; r++)
            a[r] = i[r].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          return i ? (i.fn ? 1 : i.length) : 0;
        }),
        (o.prototype.emit = function (e, t, i, r, s, a) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            h,
            l = this._events[o],
            d = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, i), !0;
              case 4:
                return l.fn.call(l.context, t, i, r), !0;
              case 5:
                return l.fn.call(l.context, t, i, r, s), !0;
              case 6:
                return l.fn.call(l.context, t, i, r, s, a), !0;
            }
            for (h = 1, c = Array(d - 1); h < d; h++) c[h - 1] = arguments[h];
            l.fn.apply(l.context, c);
          } else {
            var u,
              m = l.length;
            for (h = 0; h < m; h++)
              switch (
                (l[h].once && this.removeListener(e, l[h].fn, void 0, !0), d)
              ) {
                case 1:
                  l[h].fn.call(l[h].context);
                  break;
                case 2:
                  l[h].fn.call(l[h].context, t);
                  break;
                case 3:
                  l[h].fn.call(l[h].context, t, i);
                  break;
                case 4:
                  l[h].fn.call(l[h].context, t, i, r);
                  break;
                default:
                  if (!c)
                    for (u = 1, c = Array(d - 1); u < d; u++)
                      c[u - 1] = arguments[u];
                  l[h].fn.apply(l[h].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return s(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return s(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, i, r) {
          var s = n ? n + e : e;
          if (!this._events[s]) return this;
          if (!t) return a(this, s), this;
          var o = this._events[s];
          if (o.fn)
            o.fn !== t ||
              (r && !o.once) ||
              (i && o.context !== i) ||
              a(this, s);
          else {
            for (var c = 0, h = [], l = o.length; c < l; c++)
              (o[c].fn !== t ||
                (r && !o[c].once) ||
                (i && o[c].context !== i)) &&
                h.push(o[c]);
            h.length
              ? (this._events[s] = 1 === h.length ? h[0] : h)
              : a(this, s);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
  },
]);
