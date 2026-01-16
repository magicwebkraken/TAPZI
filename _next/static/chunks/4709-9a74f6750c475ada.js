"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4709],
  {
    4791: (e, t, r) => {
      r.d(t, {
        EU: () => o,
        R3: () => n,
        iL: () => a,
        jv: () => i,
        nE: () => s,
      });
      var n = (e, t) => void 0 === t.state.data,
        i = (e) => {
          if (e.suspense) {
            let t = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
              r = e.staleTime;
            (e.staleTime =
              "function" == typeof r ? (...e) => t(r(...e)) : t(r)),
              "number" == typeof e.gcTime &&
                (e.gcTime = Math.max(e.gcTime, 1e3));
          }
        },
        s = (e, t) => e.isLoading && e.isFetching && !t,
        o = (e, t) => e?.suspense && t.isPending,
        a = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
    },
    6784: (e, t, r) => {
      r.d(t, { II: () => h, v_: () => u, wm: () => c });
      var n = r(50920),
        i = r(21239),
        s = r(73504),
        o = r(52020);
      function a(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function u(e) {
        return (e ?? "online") !== "online" || i.t.isOnline();
      }
      var l = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function c(e) {
        return e instanceof l;
      }
      function h(e) {
        let t,
          r = !1,
          c = 0,
          h = !1,
          d = (0, s.T)(),
          f = () =>
            n.m.isFocused() &&
            ("always" === e.networkMode || i.t.isOnline()) &&
            e.canRun(),
          p = () => u(e.networkMode) && e.canRun(),
          y = (r) => {
            h || ((h = !0), e.onSuccess?.(r), t?.(), d.resolve(r));
          },
          m = (r) => {
            h || ((h = !0), e.onError?.(r), t?.(), d.reject(r));
          },
          b = () =>
            new Promise((r) => {
              (t = (e) => {
                (h || f()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), h || e.onContinue?.();
            }),
          g = () => {
            let t;
            if (h) return;
            let n = 0 === c ? e.initialPromise : void 0;
            try {
              t = n ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(y)
              .catch((t) => {
                if (h) return;
                let n = e.retry ?? 3 * !o.S$,
                  i = e.retryDelay ?? a,
                  s = "function" == typeof i ? i(c, t) : i,
                  u =
                    !0 === n ||
                    ("number" == typeof n && c < n) ||
                    ("function" == typeof n && n(c, t));
                if (r || !u) return void m(t);
                c++,
                  e.onFail?.(c, t),
                  (0, o.yy)(s)
                    .then(() => (f() ? void 0 : b()))
                    .then(() => {
                      r ? m(t) : g();
                    });
              });
          };
        return {
          promise: d,
          cancel: (t) => {
            h || (m(new l(t)), e.abort?.());
          },
          continue: () => (t?.(), d),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: p,
          start: () => (p() ? g() : b().then(g), d),
        };
      }
    },
    7165: (e, t, r) => {
      r.d(t, { jG: () => i });
      var n = (e) => setTimeout(e, 0),
        i = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            i = (e) => {
              e();
            },
            s = n,
            o = (n) => {
              t
                ? e.push(n)
                : s(() => {
                    r(n);
                  });
            },
            a = () => {
              let t = e;
              (e = []),
                t.length &&
                  s(() => {
                    i(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || a();
              }
              return r;
            },
            batchCalls:
              (e) =>
              (...t) => {
                o(() => {
                  e(...t);
                });
              },
            schedule: o,
            setNotifyFunction: (e) => {
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              i = e;
            },
            setScheduler: (e) => {
              s = e;
            },
          };
        })();
    },
    12421: (e, t, r) => {
      r.d(t, { y: () => i });
      let n = (e) => {
          let t,
            r = new Set(),
            n = (e, n) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != n ? n : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  r.forEach((r) => r(t, e));
              }
            },
            i = () => t,
            s = {
              setState: n,
              getState: i,
              getInitialState: () => o,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
            },
            o = (t = e(n, i, s));
          return s;
        },
        i = (e) => (e ? n(e) : n);
    },
    21239: (e, t, r) => {
      r.d(t, { t: () => s });
      var n = r(25910),
        i = r(52020),
        s = new (class extends n.Q {
          #e = !0;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#e !== e &&
              ((this.#e = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#e;
          }
        })();
    },
    22450: (e, t, r) => {
      r.d(t, { $1: () => a, LJ: () => s, wZ: () => o });
      var n = r(12115),
        i = r(52020),
        s = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        o = (e) => {
          n.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        a = (e) => {
          let {
            result: t,
            errorResetBoundary: r,
            throwOnError: n,
            query: s,
            suspense: o,
          } = e;
          return (
            t.isError &&
            !r.isReset() &&
            !t.isFetching &&
            s &&
            ((o && void 0 === t.data) || (0, i.GU)(n, [t.error, s]))
          );
        };
    },
    23464: (e, t, r) => {
      let n;
      r.d(t, { A: () => tl });
      var i,
        s,
        o,
        a = {};
      function u(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      r.r(a),
        r.d(a, {
          hasBrowserEnv: () => ed,
          hasStandardBrowserEnv: () => ep,
          hasStandardBrowserWebWorkerEnv: () => ey,
          navigator: () => ef,
          origin: () => em,
        });
      var l = r(87358);
      let { toString: c } = Object.prototype,
        { getPrototypeOf: h } = Object,
        { iterator: d, toStringTag: f } = Symbol,
        p = ((e) => (t) => {
          let r = c.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        y = (e) => ((e = e.toLowerCase()), (t) => p(t) === e),
        m = (e) => (t) => typeof t === e,
        { isArray: b } = Array,
        g = m("undefined"),
        v = y("ArrayBuffer"),
        R = m("string"),
        w = m("function"),
        E = m("number"),
        S = (e) => null !== e && "object" == typeof e,
        O = (e) => {
          if ("object" !== p(e)) return !1;
          let t = h(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(f in e) &&
            !(d in e)
          );
        },
        T = y("Date"),
        C = y("File"),
        A = y("Blob"),
        j = y("FileList"),
        F = y("URLSearchParams"),
        [x, U, P, L] = ["ReadableStream", "Request", "Response", "Headers"].map(
          y
        );
      function k(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != e)
          if (("object" != typeof e && (e = [e]), b(e)))
            for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
          else {
            let i,
              s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = s.length;
            for (n = 0; n < o; n++) (i = s[n]), t.call(null, e[i], i, e);
          }
      }
      function N(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          i = n.length;
        for (; i-- > 0; ) if (t === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let D =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        I = (e) => !g(e) && e !== D,
        _ = (
          (e) => (t) =>
            e && t instanceof e
        )("undefined" != typeof Uint8Array && h(Uint8Array)),
        Q = y("HTMLFormElement"),
        q = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        B = y("RegExp"),
        M = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          k(r, (r, i) => {
            let s;
            !1 !== (s = t(r, i, e)) && (n[i] = s || r);
          }),
            Object.defineProperties(e, n);
        },
        z = y("AsyncFunction"),
        H =
          ((i = "function" == typeof setImmediate),
          (s = w(D.postMessage)),
          i
            ? setImmediate
            : s
            ? ((e, t) => (
                D.addEventListener(
                  "message",
                  ({ source: r, data: n }) => {
                    r === D && n === e && t.length && t.shift()();
                  },
                  !1
                ),
                (r) => {
                  t.push(r), D.postMessage(e, "*");
                }
              ))(`axios@${Math.random()}`, [])
            : (e) => setTimeout(e)),
        $ =
          "undefined" != typeof queueMicrotask
            ? queueMicrotask.bind(D)
            : (void 0 !== l && l.nextTick) || H,
        W = {
          isArray: b,
          isArrayBuffer: v,
          isBuffer: function (e) {
            return (
              null !== e &&
              !g(e) &&
              null !== e.constructor &&
              !g(e.constructor) &&
              w(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                (w(e.append) &&
                  ("formdata" === (t = p(e)) ||
                    ("object" === t &&
                      w(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && v(e.buffer);
          },
          isString: R,
          isNumber: E,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: S,
          isPlainObject: O,
          isReadableStream: x,
          isRequest: U,
          isResponse: P,
          isHeaders: L,
          isUndefined: g,
          isDate: T,
          isFile: C,
          isBlob: A,
          isRegExp: B,
          isFunction: w,
          isStream: (e) => S(e) && w(e.pipe),
          isURLSearchParams: F,
          isTypedArray: _,
          isFileList: j,
          forEach: k,
          merge: function e() {
            let { caseless: t } = (I(this) && this) || {},
              r = {},
              n = (n, i) => {
                let s = (t && N(r, i)) || i;
                O(r[s]) && O(n)
                  ? (r[s] = e(r[s], n))
                  : O(n)
                  ? (r[s] = e({}, n))
                  : b(n)
                  ? (r[s] = n.slice())
                  : (r[s] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && k(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            k(
              t,
              (t, n) => {
                r && w(t) ? (e[n] = u(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let i,
              s,
              o,
              a = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (s = (i = Object.getOwnPropertyNames(e)).length; s-- > 0; )
                (o = i[s]),
                  (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
              e = !1 !== r && h(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: p,
          kindOfTest: y,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (b(e)) return e;
            let t = e.length;
            if (!E(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r,
              n = (e && e[d]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r,
              n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: Q,
          hasOwnProperty: q,
          hasOwnProp: q,
          reduceDescriptors: M,
          freezeMethods: (e) => {
            M(e, (t, r) => {
              if (w(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                return !1;
              if (w(e[r])) {
                if (((t.enumerable = !1), "writable" in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              (b(e) ? e : String(e).split(t)).forEach((e) => {
                r[e] = !0;
              }),
              r
            );
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
                return t.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e *= 1)) ? e : t,
          findKey: N,
          global: D,
          isContextDefined: I,
          isSpecCompliantForm: function (e) {
            return !!(e && w(e.append) && "FormData" === e[f] && e[d]);
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (S(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[n] = e;
                    let i = b(e) ? [] : {};
                    return (
                      k(e, (e, t) => {
                        let s = r(e, n + 1);
                        g(s) || (i[t] = s);
                      }),
                      (t[n] = void 0),
                      i
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: z,
          isThenable: (e) => e && (S(e) || w(e)) && w(e.then) && w(e.catch),
          setImmediate: H,
          asap: $,
          isIterable: (e) => null != e && w(e[d]),
        };
      function J(e, t, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          i &&
            ((this.response = i), (this.status = i.status ? i.status : null));
      }
      W.inherits(J, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: W.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let K = J.prototype,
        G = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        G[e] = { value: e };
      }),
        Object.defineProperties(J, G),
        Object.defineProperty(K, "isAxiosError", { value: !0 }),
        (J.from = (e, t, r, n, i, s) => {
          let o = Object.create(K);
          return (
            W.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            J.call(o, e.message, t, r, n, i),
            (o.cause = e),
            (o.name = e.name),
            s && Object.assign(o, s),
            o
          );
        });
      var V = r(44134).Buffer;
      function X(e) {
        return W.isPlainObject(e) || W.isArray(e);
      }
      function Z(e) {
        return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Y(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Z(e)), !r && t ? "[" + e + "]" : e;
              })
              .join(r ? "." : "")
          : t;
      }
      let ee = W.toFlatObject(W, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        et = function (e, t, r) {
          if (!W.isObject(e)) throw TypeError("target must be an object");
          t = t || new FormData();
          let n = (r = W.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !W.isUndefined(t[e]);
              }
            )).metaTokens,
            i = r.visitor || l,
            s = r.dots,
            o = r.indexes,
            a =
              (r.Blob || ("undefined" != typeof Blob && Blob)) &&
              W.isSpecCompliantForm(t);
          if (!W.isFunction(i)) throw TypeError("visitor must be a function");
          function u(e) {
            if (null === e) return "";
            if (W.isDate(e)) return e.toISOString();
            if (W.isBoolean(e)) return e.toString();
            if (!a && W.isBlob(e))
              throw new J("Blob is not supported. Use a Buffer instead.");
            return W.isArrayBuffer(e) || W.isTypedArray(e)
              ? a && "function" == typeof Blob
                ? new Blob([e])
                : V.from(e)
              : e;
          }
          function l(e, r, i) {
            let a = e;
            if (e && !i && "object" == typeof e)
              if (W.endsWith(r, "{}"))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var l;
                if (
                  (W.isArray(e) && ((l = e), W.isArray(l) && !l.some(X))) ||
                  ((W.isFileList(e) || W.endsWith(r, "[]")) &&
                    (a = W.toArray(e)))
                )
                  return (
                    (r = Z(r)),
                    a.forEach(function (e, n) {
                      W.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === o ? Y([r], n, s) : null === o ? r : r + "[]",
                          u(e)
                        );
                    }),
                    !1
                  );
              }
            return !!X(e) || (t.append(Y(i, r, s), u(e)), !1);
          }
          let c = [],
            h = Object.assign(ee, {
              defaultVisitor: l,
              convertValue: u,
              isVisitable: X,
            });
          if (!W.isObject(e)) throw TypeError("data must be an object");
          return (
            !(function e(r, n) {
              if (!W.isUndefined(r)) {
                if (-1 !== c.indexOf(r))
                  throw Error("Circular reference detected in " + n.join("."));
                c.push(r),
                  W.forEach(r, function (r, s) {
                    !0 ===
                      (!(W.isUndefined(r) || null === r) &&
                        i.call(t, r, W.isString(s) ? s.trim() : s, n, h)) &&
                      e(r, n ? n.concat(s) : [s]);
                  }),
                  c.pop();
              }
            })(e),
            t
          );
        };
      function er(e) {
        let t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function en(e, t) {
        (this._pairs = []), e && et(e, this, t);
      }
      let ei = en.prototype;
      function es(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function eo(e, t, r) {
        let n;
        if (!t) return e;
        let i = (r && r.encode) || es;
        W.isFunction(r) && (r = { serialize: r });
        let s = r && r.serialize;
        if (
          (n = s
            ? s(t, r)
            : W.isURLSearchParams(t)
            ? t.toString()
            : new en(t, r).toString(i))
        ) {
          let t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
        }
        return e;
      }
      (ei.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ei.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, er);
              }
            : er;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      class ea {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          W.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let eu = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        el = "undefined" != typeof URLSearchParams ? URLSearchParams : en,
        ec = "undefined" != typeof FormData ? FormData : null,
        eh = "undefined" != typeof Blob ? Blob : null,
        ed = "undefined" != typeof window && "undefined" != typeof document,
        ef = ("object" == typeof navigator && navigator) || void 0,
        ep =
          ed &&
          (!ef ||
            0 > ["ReactNative", "NativeScript", "NS"].indexOf(ef.product)),
        ey =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        em = (ed && window.location.href) || "http://localhost",
        eb = {
          ...a,
          isBrowser: !0,
          classes: { URLSearchParams: el, FormData: ec, Blob: eh },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        eg = function (e) {
          if (W.isFormData(e) && W.isFunction(e.entries)) {
            let t = {};
            return (
              W.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, i) {
                  let s = t[i++];
                  if ("__proto__" === s) return !0;
                  let o = Number.isFinite(+s),
                    a = i >= t.length;
                  return (
                    ((s = !s && W.isArray(n) ? n.length : s), a)
                      ? W.hasOwnProp(n, s)
                        ? (n[s] = [n[s], r])
                        : (n[s] = r)
                      : ((n[s] && W.isObject(n[s])) || (n[s] = []),
                        e(t, r, n[s], i) &&
                          W.isArray(n[s]) &&
                          (n[s] = (function (e) {
                            let t,
                              r,
                              n = {},
                              i = Object.keys(e),
                              s = i.length;
                            for (t = 0; t < s; t++) n[(r = i[t])] = e[r];
                            return n;
                          })(n[s]))),
                    !o
                  );
                })(
                  W.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  ),
                  r,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        },
        ev = {
          transitional: eu,
          adapter: ["xhr", "http", "fetch"],
          transformRequest: [
            function (e, t) {
              let r,
                n = t.getContentType() || "",
                i = n.indexOf("application/json") > -1,
                s = W.isObject(e);
              if (
                (s && W.isHTMLForm(e) && (e = new FormData(e)), W.isFormData(e))
              )
                return i ? JSON.stringify(eg(e)) : e;
              if (
                W.isArrayBuffer(e) ||
                W.isBuffer(e) ||
                W.isStream(e) ||
                W.isFile(e) ||
                W.isBlob(e) ||
                W.isReadableStream(e)
              )
                return e;
              if (W.isArrayBufferView(e)) return e.buffer;
              if (W.isURLSearchParams(e))
                return (
                  t.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  e.toString()
                );
              if (s) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                  var o, a;
                  return ((o = e),
                  (a = this.formSerializer),
                  et(
                    o,
                    new eb.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return eb.isNode && W.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      a
                    )
                  )).toString();
                }
                if (
                  (r = W.isFileList(e)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return et(
                    r ? { "files[]": e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              if (s || i) {
                t.setContentType("application/json", !1);
                var u = e;
                if (W.isString(u))
                  try {
                    return (0, JSON.parse)(u), W.trim(u);
                  } catch (e) {
                    if ("SyntaxError" !== e.name) throw e;
                  }
                return (0, JSON.stringify)(u);
              }
              return e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || ev.transitional,
                r = t && t.forcedJSONParsing,
                n = "json" === this.responseType;
              if (W.isResponse(e) || W.isReadableStream(e)) return e;
              if (e && W.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ("SyntaxError" === e.name)
                      throw J.from(
                        e,
                        J.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: eb.classes.FormData, Blob: eb.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
      W.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ev.headers[e] = {};
      });
      let eR = W.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        ew = (e) => {
          let t,
            r,
            n,
            i = {};
          return (
            e &&
              e.split("\n").forEach(function (e) {
                (n = e.indexOf(":")),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  !t ||
                    (i[t] && eR[t]) ||
                    ("set-cookie" === t
                      ? i[t]
                        ? i[t].push(r)
                        : (i[t] = [r])
                      : (i[t] = i[t] ? i[t] + ", " + r : r));
              }),
            i
          );
        },
        eE = Symbol("internals");
      function eS(e) {
        return e && String(e).trim().toLowerCase();
      }
      function eO(e) {
        return !1 === e || null == e ? e : W.isArray(e) ? e.map(eO) : String(e);
      }
      let eT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function eC(e, t, r, n, i) {
        if (W.isFunction(n)) return n.call(this, t, r);
        if ((i && (t = r), W.isString(t))) {
          if (W.isString(n)) return -1 !== t.indexOf(n);
          if (W.isRegExp(n)) return n.test(t);
        }
      }
      class eA {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function i(e, t, r) {
            let i = eS(t);
            if (!i) throw Error("header name must be a non-empty string");
            let s = W.findKey(n, i);
            (s &&
              void 0 !== n[s] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[s])) ||
              (n[s || t] = eO(e));
          }
          let s = (e, t) => W.forEach(e, (e, r) => i(e, r, t));
          if (W.isPlainObject(e) || e instanceof this.constructor) s(e, t);
          else if (W.isString(e) && (e = e.trim()) && !eT(e)) s(ew(e), t);
          else if (W.isObject(e) && W.isIterable(e)) {
            let r = {},
              n,
              i;
            for (let t of e) {
              if (!W.isArray(t))
                throw TypeError("Object iterator must return a key-value pair");
              r[(i = t[0])] = (n = r[i])
                ? W.isArray(n)
                  ? [...n, t[1]]
                  : [n, t[1]]
                : t[1];
            }
            s(r, t);
          } else null != e && i(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = eS(e))) {
            let r = W.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t) {
                let t,
                  r = Object.create(null),
                  n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                return r;
              }
              if (W.isFunction(t)) return t.call(this, e, r);
              if (W.isRegExp(t)) return t.exec(e);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = eS(e))) {
            let r = W.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || eC(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function i(e) {
            if ((e = eS(e))) {
              let i = W.findKey(r, e);
              i && (!t || eC(r, r[i], i, t)) && (delete r[i], (n = !0));
            }
          }
          return W.isArray(e) ? e.forEach(i) : i(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let i = t[r];
            (!e || eC(this, this[i], i, e, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            W.forEach(this, (n, i) => {
              let s = W.findKey(r, i);
              if (s) {
                (t[s] = eO(n)), delete t[i];
                return;
              }
              let o = e
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r
                    )
                : String(i).trim();
              o !== i && delete t[i], (t[o] = eO(n)), (r[o] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            W.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && W.isArray(r) ? r.join(", ") : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join("\n");
        }
        getSetCookie() {
          return this.get("set-cookie") || [];
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[eE] = this[eE] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = eS(e);
            if (!t[n]) {
              let i = W.toCamelCase(" " + e);
              ["get", "set", "has"].forEach((t) => {
                Object.defineProperty(r, t + i, {
                  value: function (r, n, i) {
                    return this[t].call(this, e, r, n, i);
                  },
                  configurable: !0,
                });
              }),
                (t[n] = !0);
            }
          }
          return W.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function ej(e, t) {
        let r = this || ev,
          n = t || r,
          i = eA.from(n.headers),
          s = n.data;
        return (
          W.forEach(e, function (e) {
            s = e.call(r, s, i.normalize(), t ? t.status : void 0);
          }),
          i.normalize(),
          s
        );
      }
      function eF(e) {
        return !!(e && e.__CANCEL__);
      }
      function ex(e, t, r) {
        J.call(this, null == e ? "canceled" : e, J.ERR_CANCELED, t, r),
          (this.name = "CanceledError");
      }
      function eU(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new J(
                "Request failed with status code " + r.status,
                [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      eA.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        W.reduceDescriptors(eA.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        W.freezeMethods(eA),
        W.inherits(ex, J, { __CANCEL__: !0 });
      let eP = function (e, t) {
          let r,
            n = Array((e = e || 10)),
            i = Array(e),
            s = 0,
            o = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (a) {
              let u = Date.now(),
                l = i[o];
              r || (r = u), (n[s] = a), (i[s] = u);
              let c = o,
                h = 0;
              for (; c !== s; ) (h += n[c++]), (c %= e);
              if (((s = (s + 1) % e) === o && (o = (o + 1) % e), u - r < t))
                return;
              let d = l && u - l;
              return d ? Math.round((1e3 * h) / d) : void 0;
            }
          );
        },
        eL = function (e, t) {
          let r,
            n,
            i = 0,
            s = 1e3 / t,
            o = (t, s = Date.now()) => {
              (i = s),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                e.apply(null, t);
            };
          return [
            (...e) => {
              let t = Date.now(),
                a = t - i;
              a >= s
                ? o(e, t)
                : ((r = e),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), o(r);
                    }, s - a)));
            },
            () => r && o(r),
          ];
        },
        ek = (e, t, r = 3) => {
          let n = 0,
            i = eP(50, 250);
          return eL((r) => {
            let s = r.loaded,
              o = r.lengthComputable ? r.total : void 0,
              a = s - n,
              u = i(a);
            (n = s),
              e({
                loaded: s,
                total: o,
                progress: o ? s / o : void 0,
                bytes: a,
                rate: u || void 0,
                estimated: u && o && s <= o ? (o - s) / u : void 0,
                event: r,
                lengthComputable: null != o,
                [t ? "download" : "upload"]: !0,
              });
          }, r);
        },
        eN = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        eD =
          (e) =>
          (...t) =>
            W.asap(() => e(...t)),
        eI = eb.hasStandardBrowserEnv
          ? ((e, t) => (r) => (
              (r = new URL(r, eb.origin)),
              e.protocol === r.protocol &&
                e.host === r.host &&
                (t || e.port === r.port)
            ))(
              new URL(eb.origin),
              eb.navigator && /(msie|trident)/i.test(eb.navigator.userAgent)
            )
          : () => !0,
        e_ = eb.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, i, s) {
                let o = [e + "=" + encodeURIComponent(t)];
                W.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()),
                  W.isString(n) && o.push("path=" + n),
                  W.isString(i) && o.push("domain=" + i),
                  !0 === s && o.push("secure"),
                  (document.cookie = o.join("; "));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function eQ(e, t, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (n || !1 == r)
          ? t
            ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
            : e
          : t;
      }
      let eq = (e) => (e instanceof eA ? { ...e } : e);
      function eB(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r, n) {
          return W.isPlainObject(e) && W.isPlainObject(t)
            ? W.merge.call({ caseless: n }, e, t)
            : W.isPlainObject(t)
            ? W.merge({}, t)
            : W.isArray(t)
            ? t.slice()
            : t;
        }
        function i(e, t, r, i) {
          return W.isUndefined(t)
            ? W.isUndefined(e)
              ? void 0
              : n(void 0, e, r, i)
            : n(e, t, r, i);
        }
        function s(e, t) {
          if (!W.isUndefined(t)) return n(void 0, t);
        }
        function o(e, t) {
          return W.isUndefined(t)
            ? W.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function a(r, i, s) {
          return s in t ? n(r, i) : s in e ? n(void 0, r) : void 0;
        }
        let u = {
          url: s,
          method: s,
          data: s,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          withXSRFToken: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: a,
          headers: (e, t, r) => i(eq(e), eq(t), r, !0),
        };
        return (
          W.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let s = u[n] || i,
              o = s(e[n], t[n], n);
            (W.isUndefined(o) && s !== a) || (r[n] = o);
          }),
          r
        );
      }
      let eM = (e) => {
          let t,
            r = eB({}, e),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: s,
              xsrfCookieName: o,
              headers: a,
              auth: u,
            } = r;
          if (
            ((r.headers = a = eA.from(a)),
            (r.url = eo(
              eQ(r.baseURL, r.url, r.allowAbsoluteUrls),
              e.params,
              e.paramsSerializer
            )),
            u &&
              a.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (u.username || "") +
                      ":" +
                      (u.password
                        ? unescape(encodeURIComponent(u.password))
                        : "")
                  )
              ),
            W.isFormData(n))
          ) {
            if (eb.hasStandardBrowserEnv || eb.hasStandardBrowserWebWorkerEnv)
              a.setContentType(void 0);
            else if (!1 !== (t = a.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              a.setContentType([e || "multipart/form-data", ...r].join("; "));
            }
          }
          if (
            eb.hasStandardBrowserEnv &&
            (i && W.isFunction(i) && (i = i(r)), i || (!1 !== i && eI(r.url)))
          ) {
            let e = s && o && e_.read(o);
            e && a.set(s, e);
          }
          return r;
        },
        ez =
          "undefined" != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n,
                i,
                s,
                o,
                a,
                u = eM(e),
                l = u.data,
                c = eA.from(u.headers).normalize(),
                {
                  responseType: h,
                  onUploadProgress: d,
                  onDownloadProgress: f,
                } = u;
              function p() {
                o && o(),
                  a && a(),
                  u.cancelToken && u.cancelToken.unsubscribe(n),
                  u.signal && u.signal.removeEventListener("abort", n);
              }
              let y = new XMLHttpRequest();
              function m() {
                if (!y) return;
                let n = eA.from(
                  "getAllResponseHeaders" in y && y.getAllResponseHeaders()
                );
                eU(
                  function (e) {
                    t(e), p();
                  },
                  function (e) {
                    r(e), p();
                  },
                  {
                    data:
                      h && "text" !== h && "json" !== h
                        ? y.response
                        : y.responseText,
                    status: y.status,
                    statusText: y.statusText,
                    headers: n,
                    config: e,
                    request: y,
                  }
                ),
                  (y = null);
              }
              y.open(u.method.toUpperCase(), u.url, !0),
                (y.timeout = u.timeout),
                "onloadend" in y
                  ? (y.onloadend = m)
                  : (y.onreadystatechange = function () {
                      y &&
                        4 === y.readyState &&
                        (0 !== y.status ||
                          (y.responseURL &&
                            0 === y.responseURL.indexOf("file:"))) &&
                        setTimeout(m);
                    }),
                (y.onabort = function () {
                  y &&
                    (r(new J("Request aborted", J.ECONNABORTED, e, y)),
                    (y = null));
                }),
                (y.onerror = function () {
                  r(new J("Network Error", J.ERR_NETWORK, e, y)), (y = null);
                }),
                (y.ontimeout = function () {
                  let t = u.timeout
                      ? "timeout of " + u.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = u.transitional || eu;
                  u.timeoutErrorMessage && (t = u.timeoutErrorMessage),
                    r(
                      new J(
                        t,
                        n.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                        e,
                        y
                      )
                    ),
                    (y = null);
                }),
                void 0 === l && c.setContentType(null),
                "setRequestHeader" in y &&
                  W.forEach(c.toJSON(), function (e, t) {
                    y.setRequestHeader(t, e);
                  }),
                W.isUndefined(u.withCredentials) ||
                  (y.withCredentials = !!u.withCredentials),
                h && "json" !== h && (y.responseType = u.responseType),
                f && (([s, a] = ek(f, !0)), y.addEventListener("progress", s)),
                d &&
                  y.upload &&
                  (([i, o] = ek(d)),
                  y.upload.addEventListener("progress", i),
                  y.upload.addEventListener("loadend", o)),
                (u.cancelToken || u.signal) &&
                  ((n = (t) => {
                    y &&
                      (r(!t || t.type ? new ex(null, e, y) : t),
                      y.abort(),
                      (y = null));
                  }),
                  u.cancelToken && u.cancelToken.subscribe(n),
                  u.signal &&
                    (u.signal.aborted
                      ? n()
                      : u.signal.addEventListener("abort", n)));
              let b = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(u.url);
              if (b && -1 === eb.protocols.indexOf(b))
                return void r(
                  new J("Unsupported protocol " + b + ":", J.ERR_BAD_REQUEST, e)
                );
              y.send(l || null);
            });
          },
        eH = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              i = function (e) {
                if (!r) {
                  (r = !0), o();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof J
                      ? t
                      : new ex(t instanceof Error ? t.message : t)
                  );
                }
              },
              s =
                t &&
                setTimeout(() => {
                  (s = null),
                    i(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT));
                }, t),
              o = () => {
                e &&
                  (s && clearTimeout(s),
                  (s = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(i)
                      : e.removeEventListener("abort", i);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener("abort", i));
            let { signal: a } = n;
            return (a.unsubscribe = () => W.asap(o)), a;
          }
        },
        e$ = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let i = 0;
          for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
        },
        eW = async function* (e, t) {
          for await (let r of eJ(e)) yield* e$(r, t);
        },
        eJ = async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        eK = (e, t, r, n) => {
          let i,
            s = eW(e, t),
            o = 0,
            a = (e) => {
              !i && ((i = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await s.next();
                  if (t) {
                    a(), e.close();
                    return;
                  }
                  let i = n.byteLength;
                  if (r) {
                    let e = (o += i);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (a(e), e);
                }
              },
              cancel: (e) => (a(e), s.return()),
            },
            { highWaterMark: 2 }
          );
        },
        eG =
          "function" == typeof fetch &&
          "function" == typeof Request &&
          "function" == typeof Response,
        eV = eG && "function" == typeof ReadableStream,
        eX =
          eG &&
          ("function" == typeof TextEncoder
            ? ((n = new TextEncoder()), (e) => n.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        eZ = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        eY =
          eV &&
          eZ(() => {
            let e = !1,
              t = new Request(eb.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (e = !0), "half";
                },
              }).headers.has("Content-Type");
            return e && !t;
          }),
        e0 = eV && eZ(() => W.isReadableStream(new Response("").body)),
        e1 = { stream: e0 && ((e) => e.body) };
      eG &&
        ((o = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          e1[e] ||
            (e1[e] = W.isFunction(o[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new J(
                    `Response type '${e}' is not supported`,
                    J.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let e2 = async (e) => {
          if (null == e) return 0;
          if (W.isBlob(e)) return e.size;
          if (W.isSpecCompliantForm(e)) {
            let t = new Request(eb.origin, { method: "POST", body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return W.isArrayBufferView(e) || W.isArrayBuffer(e)
            ? e.byteLength
            : (W.isURLSearchParams(e) && (e += ""), W.isString(e))
            ? (await eX(e)).byteLength
            : void 0;
        },
        e5 = async (e, t) => {
          let r = W.toFiniteNumber(e.getContentLength());
          return null == r ? e2(t) : r;
        },
        e4 = {
          http: null,
          xhr: ez,
          fetch:
            eG &&
            (async (e) => {
              let t,
                r,
                {
                  url: n,
                  method: i,
                  data: s,
                  signal: o,
                  cancelToken: a,
                  timeout: u,
                  onDownloadProgress: l,
                  onUploadProgress: c,
                  responseType: h,
                  headers: d,
                  withCredentials: f = "same-origin",
                  fetchOptions: p,
                } = eM(e);
              h = h ? (h + "").toLowerCase() : "text";
              let y = eH([o, a && a.toAbortSignal()], u),
                m =
                  y &&
                  y.unsubscribe &&
                  (() => {
                    y.unsubscribe();
                  });
              try {
                if (
                  c &&
                  eY &&
                  "get" !== i &&
                  "head" !== i &&
                  0 !== (r = await e5(d, s))
                ) {
                  let e,
                    t = new Request(n, {
                      method: "POST",
                      body: s,
                      duplex: "half",
                    });
                  if (
                    (W.isFormData(s) &&
                      (e = t.headers.get("content-type")) &&
                      d.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = eN(r, ek(eD(c)));
                    s = eK(t.body, 65536, e, n);
                  }
                }
                W.isString(f) || (f = f ? "include" : "omit");
                let o = "credentials" in Request.prototype;
                t = new Request(n, {
                  ...p,
                  signal: y,
                  method: i.toUpperCase(),
                  headers: d.normalize().toJSON(),
                  body: s,
                  duplex: "half",
                  credentials: o ? f : void 0,
                });
                let a = await fetch(t, p),
                  u = e0 && ("stream" === h || "response" === h);
                if (e0 && (l || (u && m))) {
                  let e = {};
                  ["status", "statusText", "headers"].forEach((t) => {
                    e[t] = a[t];
                  });
                  let t = W.toFiniteNumber(a.headers.get("content-length")),
                    [r, n] = (l && eN(t, ek(eD(l), !0))) || [];
                  a = new Response(
                    eK(a.body, 65536, r, () => {
                      n && n(), m && m();
                    }),
                    e
                  );
                }
                h = h || "text";
                let b = await e1[W.findKey(e1, h) || "text"](a, e);
                return (
                  !u && m && m(),
                  await new Promise((r, n) => {
                    eU(r, n, {
                      data: b,
                      headers: eA.from(a.headers),
                      status: a.status,
                      statusText: a.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (m && m(),
                  r &&
                    "TypeError" === r.name &&
                    /Load failed|fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new J("Network Error", J.ERR_NETWORK, e, t),
                    { cause: r.cause || r }
                  );
                throw J.from(r, r && r.code, e, t);
              }
            }),
        };
      W.forEach(e4, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      let e3 = (e) => `- ${e}`,
        e8 = (e) => W.isFunction(e) || null === e || !1 === e,
        e7 = {
          getAdapter: (e) => {
            let t,
              r,
              { length: n } = (e = W.isArray(e) ? e : [e]),
              i = {};
            for (let s = 0; s < n; s++) {
              let n;
              if (
                ((r = t = e[s]),
                !e8(t) && void 0 === (r = e4[(n = String(t)).toLowerCase()]))
              )
                throw new J(`Unknown adapter '${n}'`);
              if (r) break;
              i[n || "#" + s] = r;
            }
            if (!r) {
              let e = Object.entries(i).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? "is not supported by the environment"
                    : "is not available in the build")
              );
              throw new J(
                "There is no suitable adapter to dispatch the request " +
                  (n
                    ? e.length > 1
                      ? "since :\n" + e.map(e3).join("\n")
                      : " " + e3(e[0])
                    : "as no adapter specified"),
                "ERR_NOT_SUPPORT"
              );
            }
            return r;
          },
        };
      function e6(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new ex(null, e);
      }
      function e9(e) {
        return (
          e6(e),
          (e.headers = eA.from(e.headers)),
          (e.data = ej.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          e7
            .getAdapter(e.adapter || ev.adapter)(e)
            .then(
              function (t) {
                return (
                  e6(e),
                  (t.data = ej.call(e, e.transformResponse, t)),
                  (t.headers = eA.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !eF(t) &&
                    (e6(e),
                    t &&
                      t.response &&
                      ((t.response.data = ej.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = eA.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
        );
      }
      let te = "1.10.0",
        tt = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          tt[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      let tr = {};
      (tt.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            "[Axios v" +
            te +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return (r, i, s) => {
          if (!1 === e)
            throw new J(
              n(i, " has been removed" + (t ? " in " + t : "")),
              J.ERR_DEPRECATED
            );
          return (
            t &&
              !tr[i] &&
              ((tr[i] = !0),
              console.warn(
                n(
                  i,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(r, i, s)
          );
        };
      }),
        (tt.spelling = function (e) {
          return (t, r) => (
            console.warn(`${r} is likely a misspelling of ${e}`), !0
          );
        });
      let tn = {
          assertOptions: function (e, t, r) {
            if ("object" != typeof e)
              throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(e),
              i = n.length;
            for (; i-- > 0; ) {
              let s = n[i],
                o = t[s];
              if (o) {
                let t = e[s],
                  r = void 0 === t || o(t, s, e);
                if (!0 !== r)
                  throw new J(
                    "option " + s + " must be " + r,
                    J.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new J("Unknown option " + s, J.ERR_BAD_OPTION);
            }
          },
          validators: tt,
        },
        ti = tn.validators;
      class ts {
        constructor(e) {
          (this.defaults = e || {}),
            (this.interceptors = { request: new ea(), response: new ea() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = Error());
              let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
              try {
                e.stack
                  ? r &&
                    !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                    (e.stack += "\n" + r)
                  : (e.stack = r);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let r, n;
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
          let {
            transitional: i,
            paramsSerializer: s,
            headers: o,
          } = (t = eB(this.defaults, t));
          void 0 !== i &&
            tn.assertOptions(
              i,
              {
                silentJSONParsing: ti.transitional(ti.boolean),
                forcedJSONParsing: ti.transitional(ti.boolean),
                clarifyTimeoutError: ti.transitional(ti.boolean),
              },
              !1
            ),
            null != s &&
              (W.isFunction(s)
                ? (t.paramsSerializer = { serialize: s })
                : tn.assertOptions(
                    s,
                    { encode: ti.function, serialize: ti.function },
                    !0
                  )),
            void 0 !== t.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (t.allowAbsoluteUrls = !0)),
            tn.assertOptions(
              t,
              {
                baseUrl: ti.spelling("baseURL"),
                withXsrfToken: ti.spelling("withXSRFToken"),
              },
              !0
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let a = o && W.merge(o.common, o[t.method]);
          o &&
            W.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete o[e];
              }
            ),
            (t.headers = eA.concat(a, o));
          let u = [],
            l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((l = l && e.synchronous), u.unshift(e.fulfilled, e.rejected));
          });
          let c = [];
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let h = 0;
          if (!l) {
            let e = [e9.bind(this), void 0];
            for (
              e.unshift.apply(e, u),
                e.push.apply(e, c),
                n = e.length,
                r = Promise.resolve(t);
              h < n;

            )
              r = r.then(e[h++], e[h++]);
            return r;
          }
          n = u.length;
          let d = t;
          for (h = 0; h < n; ) {
            let e = u[h++],
              t = u[h++];
            try {
              d = e(d);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            r = e9.call(this, d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (h = 0, n = c.length; h < n; ) r = r.then(c[h++], c[h++]);
          return r;
        }
        getUri(e) {
          return eo(
            eQ((e = eB(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
            e.params,
            e.paramsSerializer
          );
        }
      }
      W.forEach(["delete", "get", "head", "options"], function (e) {
        ts.prototype[e] = function (t, r) {
          return this.request(
            eB(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        W.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                eB(i || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (ts.prototype[e] = t()), (ts.prototype[e + "Form"] = t(!0));
        });
      class to {
        constructor(e) {
          let t;
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t,
                n = new Promise((e) => {
                  r.subscribe(e), (t = e);
                }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, i) {
              r.reason || ((r.reason = new ex(e, n, i)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) return void e(this.reason);
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new to(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let ta = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(ta).forEach(([e, t]) => {
        ta[t] = e;
      });
      let tu = (function e(t) {
        let r = new ts(t),
          n = u(ts.prototype.request, r);
        return (
          W.extend(n, ts.prototype, r, { allOwnKeys: !0 }),
          W.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(eB(t, r));
          }),
          n
        );
      })(ev);
      (tu.Axios = ts),
        (tu.CanceledError = ex),
        (tu.CancelToken = to),
        (tu.isCancel = eF),
        (tu.VERSION = te),
        (tu.toFormData = et),
        (tu.AxiosError = J),
        (tu.Cancel = tu.CanceledError),
        (tu.all = function (e) {
          return Promise.all(e);
        }),
        (tu.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (tu.isAxiosError = function (e) {
          return W.isObject(e) && !0 === e.isAxiosError;
        }),
        (tu.mergeConfig = eB),
        (tu.AxiosHeaders = eA),
        (tu.formToJSON = (e) => eg(W.isHTMLForm(e) ? new FormData(e) : e)),
        (tu.getAdapter = e7.getAdapter),
        (tu.HttpStatusCode = ta),
        (tu.default = tu);
      let tl = tu;
    },
    25910: (e, t, r) => {
      r.d(t, { Q: () => n });
      var n = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    26715: (e, t, r) => {
      r.r(t),
        r.d(t, {
          QueryClientContext: () => s,
          QueryClientProvider: () => a,
          useQueryClient: () => o,
        });
      var n = r(12115),
        i = r(95155),
        s = n.createContext(void 0),
        o = (e) => {
          let t = n.useContext(s);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        a = (e) => {
          let { client: t, children: r } = e;
          return (
            n.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(s.Provider, { value: t, children: r })
          );
        };
    },
    39853: (e, t, r) => {
      r.d(t, { X: () => a, k: () => u });
      var n = r(52020),
        i = r(7165),
        s = r(6784),
        o = r(57948),
        a = class extends o.k {
          #n;
          #i;
          #s;
          #o;
          #a;
          #u;
          #l;
          constructor(e) {
            super(),
              (this.#l = !1),
              (this.#u = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#o = e.client),
              (this.#s = this.#o.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#n = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? n ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = e.state ?? this.#n),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#a?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#u, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#s.remove(this);
          }
          setData(e, t) {
            let r = (0, n.pl)(this.state.data, e, this.options);
            return (
              this.#c({
                data: r,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              r
            );
          }
          setState(e, t) {
            this.#c({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#a?.promise;
            return (
              this.#a?.cancel(e),
              t ? t.then(n.lQ).catch(n.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#n);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, n.Eh)(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === n.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some(
                (e) => "static" === (0, n.d2)(e.options.staleTime, this)
              )
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((e) => e.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(e = 0) {
            return (
              void 0 === this.state.data ||
              ("static" !== e &&
                (!!this.state.isInvalidated ||
                  !(0, n.j3)(this.state.dataUpdatedAt, e)))
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#s.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#a &&
                  (this.#l
                    ? this.#a.cancel({ revert: !0 })
                    : this.#a.cancelRetry()),
                this.scheduleGc()),
              this.#s.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#c({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#l = !0), r.signal),
                });
              },
              o = () => {
                let e = (0, n.ZM)(this.options, t),
                  r = (() => {
                    let e = {
                      client: this.#o,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return i(e), e;
                  })();
                return ((this.#l = !1), this.options.persister)
                  ? this.options.persister(e, r, this)
                  : e(r);
              },
              a = (() => {
                let e = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#o,
                  state: this.state,
                  fetchFn: o,
                };
                return i(e), e;
              })();
            this.options.behavior?.onFetch(a, this),
              (this.#i = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#c({ type: "fetch", meta: a.fetchOptions?.meta });
            let u = (e) => {
              ((0, s.wm)(e) && e.silent) ||
                this.#c({ type: "error", error: e }),
                (0, s.wm)(e) ||
                  (this.#s.config.onError?.(e, this),
                  this.#s.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#a = (0, s.II)({
                initialPromise: t?.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (e) => {
                  if (void 0 === e)
                    return void u(Error(`${this.queryHash} data is undefined`));
                  try {
                    this.setData(e);
                  } catch (e) {
                    u(e);
                    return;
                  }
                  this.#s.config.onSuccess?.(e, this),
                    this.#s.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: u,
                onFail: (e, t) => {
                  this.#c({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#c({ type: "pause" });
                },
                onContinue: () => {
                  this.#c({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#a.start()
            );
          }
          #c(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...u(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return (
                    (this.#i = void 0),
                    {
                      ...t,
                      data: e.data,
                      dataUpdateCount: t.dataUpdateCount + 1,
                      dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                      error: null,
                      isInvalidated: !1,
                      status: "success",
                      ...(!e.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                      }),
                    }
                  );
                case "error":
                  let r = e.error;
                  if ((0, s.wm)(r) && r.revert && this.#i)
                    return { ...this.#i, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#s.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function u(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, s.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    50005: (e, t, r) => {
      r.d(t, { t: () => h });
      var n = r(12115),
        i = r(7165),
        s = r(52020),
        o = r(26715),
        a = r(80382),
        u = r(22450),
        l = r(61581),
        c = r(4791);
      function h(e, t, r) {
        var h, d, f, p, y;
        let m = (0, l.useIsRestoring)(),
          b = (0, a.useQueryErrorResetBoundary)(),
          g = (0, o.useQueryClient)(r),
          v = g.defaultQueryOptions(e);
        null == (d = g.getDefaultOptions().queries) ||
          null == (h = d._experimental_beforeQuery) ||
          h.call(d, v),
          (v._optimisticResults = m ? "isRestoring" : "optimistic"),
          (0, c.jv)(v),
          (0, u.LJ)(v, b),
          (0, u.wZ)(b);
        let R = !g.getQueryCache().get(v.queryHash),
          [w] = n.useState(() => new t(g, v)),
          E = w.getOptimisticResult(v),
          S = !m && !1 !== e.subscribed;
        if (
          (n.useSyncExternalStore(
            n.useCallback(
              (e) => {
                let t = S ? w.subscribe(i.jG.batchCalls(e)) : s.lQ;
                return w.updateResult(), t;
              },
              [w, S]
            ),
            () => w.getCurrentResult(),
            () => w.getCurrentResult()
          ),
          n.useEffect(() => {
            w.setOptions(v);
          }, [v, w]),
          (0, c.EU)(v, E))
        )
          throw (0, c.iL)(v, w, b);
        if (
          (0, u.$1)({
            result: E,
            errorResetBoundary: b,
            throwOnError: v.throwOnError,
            query: g.getQueryCache().get(v.queryHash),
            suspense: v.suspense,
          })
        )
          throw E.error;
        if (
          (null == (p = g.getDefaultOptions().queries) ||
            null == (f = p._experimental_afterQuery) ||
            f.call(p, v, E),
          v.experimental_prefetchInRender && !s.S$ && (0, c.nE)(E, m))
        ) {
          let e = R
            ? (0, c.iL)(v, w, b)
            : null == (y = g.getQueryCache().get(v.queryHash))
            ? void 0
            : y.promise;
          null == e ||
            e.catch(s.lQ).finally(() => {
              w.updateResult();
            });
        }
        return v.notifyOnChangeProps ? E : w.trackResult(E);
      }
    },
    50920: (e, t, r) => {
      r.d(t, { m: () => s });
      var n = r(25910),
        i = r(52020),
        s = new (class extends n.Q {
          #h;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#h !== e && ((this.#h = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#h
              ? this.#h
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    52020: (e, t, r) => {
      r.d(t, {
        BH: () => y,
        Cp: () => p,
        EN: () => f,
        Eh: () => l,
        F$: () => d,
        GU: () => C,
        MK: () => c,
        S$: () => n,
        ZM: () => T,
        ZZ: () => S,
        Zw: () => s,
        d2: () => u,
        f8: () => m,
        gn: () => o,
        hT: () => O,
        j3: () => a,
        lQ: () => i,
        nJ: () => h,
        pl: () => w,
        y9: () => E,
        yy: () => R,
      });
      var n = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function o(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function a(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function c(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: o,
          stale: a,
        } = e;
        if (o) {
          if (n) {
            if (t.queryHash !== d(o, t.options)) return !1;
          } else if (!p(t.queryKey, o)) return !1;
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof a || t.isStale() === a) &&
          (!i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function h(e, t) {
        let { exact: r, status: n, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (f(t.options.mutationKey) !== f(s)) return !1;
          } else if (!p(t.options.mutationKey, s)) return !1;
        }
        return (!n || t.state.status === n) && (!i || !!i(t));
      }
      function d(e, t) {
        return (t?.queryKeyHashFn || f)(e);
      }
      function f(e) {
        return JSON.stringify(e, (e, t) =>
          g(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function p(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            Object.keys(t).every((r) => p(e[r], t[r])))
        );
      }
      function y(e, t) {
        if (e === t) return e;
        let r = b(e) && b(t);
        if (r || (g(e) && g(t))) {
          let n = r ? e : Object.keys(e),
            i = n.length,
            s = r ? t : Object.keys(t),
            o = s.length,
            a = r ? [] : {},
            u = new Set(n),
            l = 0;
          for (let n = 0; n < o; n++) {
            let i = r ? n : s[n];
            ((!r && u.has(i)) || r) && void 0 === e[i] && void 0 === t[i]
              ? ((a[i] = void 0), l++)
              : ((a[i] = y(e[i], t[i])),
                a[i] === e[i] && void 0 !== e[i] && l++);
          }
          return i === o && l === i ? e : a;
        }
        return t;
      }
      function m(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function b(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function g(e) {
        if (!v(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!v(r) &&
          !!r.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function v(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function R(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function w(e, t, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? y(e, t)
          : t;
      }
      function E(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function S(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var O = Symbol();
      function T(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== O
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function C(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
    },
    57948: (e, t, r) => {
      r.d(t, { k: () => i });
      var n = r(52020),
        i = class {
          #d;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, n.gn)(this.gcTime) &&
                (this.#d = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (n.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#d && (clearTimeout(this.#d), (this.#d = void 0));
          }
        };
    },
    61581: (e, t, r) => {
      r.d(t, { IsRestoringProvider: () => o, useIsRestoring: () => s });
      var n = r(12115),
        i = n.createContext(!1),
        s = () => n.useContext(i),
        o = i.Provider;
    },
    73504: (e, t, r) => {
      r.d(t, { T: () => i, b: () => s });
      var n = r(52020);
      function i() {
        let e,
          t,
          r = new Promise((r, n) => {
            (e = r), (t = n);
          });
        function n(e) {
          Object.assign(r, e), delete r.resolve, delete r.reject;
        }
        return (
          (r.status = "pending"),
          r.catch(() => {}),
          (r.resolve = (t) => {
            n({ status: "fulfilled", value: t }), e(t);
          }),
          (r.reject = (e) => {
            n({ status: "rejected", reason: e }), t(e);
          }),
          r
        );
      }
      function s(e) {
        let t;
        if ((e.then((e) => ((t = e), e), n.lQ)?.catch(n.lQ), void 0 !== t))
          return { data: t };
      }
    },
    76347: (e, t, r) => {
      r.d(t, { $: () => l });
      var n = r(50920),
        i = r(7165),
        s = r(39853),
        o = r(25910),
        a = r(73504),
        u = r(52020),
        l = class extends o.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#o = e),
              (this.#f = null),
              (this.#p = (0, a.T)()),
              this.options.experimental_prefetchInRender ||
                this.#p.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #o;
          #y = void 0;
          #m = void 0;
          #b = void 0;
          #g;
          #v;
          #p;
          #f;
          #R;
          #w;
          #E;
          #S;
          #O;
          #T;
          #C = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#y.addObserver(this),
              c(this.#y, this.options) ? this.#A() : this.updateResult(),
              this.#j());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return h(this.#y, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return h(this.#y, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#F(),
              this.#x(),
              this.#y.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              r = this.#y;
            if (
              ((this.options = this.#o.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, u.Eh)(this.options.enabled, this.#y))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#U(),
              this.#y.setOptions(this.options),
              t._defaulted &&
                !(0, u.f8)(this.options, t) &&
                this.#o
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#y,
                    observer: this,
                  });
            let n = this.hasListeners();
            n && d(this.#y, r, this.options, t) && this.#A(),
              this.updateResult(),
              n &&
                (this.#y !== r ||
                  (0, u.Eh)(this.options.enabled, this.#y) !==
                    (0, u.Eh)(t.enabled, this.#y) ||
                  (0, u.d2)(this.options.staleTime, this.#y) !==
                    (0, u.d2)(t.staleTime, this.#y)) &&
                this.#P();
            let i = this.#L();
            n &&
              (this.#y !== r ||
                (0, u.Eh)(this.options.enabled, this.#y) !==
                  (0, u.Eh)(t.enabled, this.#y) ||
                i !== this.#T) &&
              this.#k(i);
          }
          getOptimisticResult(e) {
            var t, r;
            let n = this.#o.getQueryCache().build(this.#o, e),
              i = this.createResult(n, e);
            return (
              (t = this),
              (r = i),
              (0, u.f8)(t.getCurrentResult(), r) ||
                ((this.#b = i),
                (this.#v = this.options),
                (this.#g = this.#y.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#b;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)),
            });
          }
          trackProp(e) {
            this.#C.add(e);
          }
          getCurrentQuery() {
            return this.#y;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#o.defaultQueryOptions(e),
              r = this.#o.getQueryCache().build(this.#o, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#A({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#b)
            );
          }
          #A(e) {
            this.#U();
            let t = this.#y.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(u.lQ)), t;
          }
          #P() {
            this.#F();
            let e = (0, u.d2)(this.options.staleTime, this.#y);
            if (u.S$ || this.#b.isStale || !(0, u.gn)(e)) return;
            let t = (0, u.j3)(this.#b.dataUpdatedAt, e);
            this.#S = setTimeout(() => {
              this.#b.isStale || this.updateResult();
            }, t + 1);
          }
          #L() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#y)
                : this.options.refetchInterval) ?? !1
            );
          }
          #k(e) {
            this.#x(),
              (this.#T = e),
              !u.S$ &&
                !1 !== (0, u.Eh)(this.options.enabled, this.#y) &&
                (0, u.gn)(this.#T) &&
                0 !== this.#T &&
                (this.#O = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.m.isFocused()) &&
                    this.#A();
                }, this.#T));
          }
          #j() {
            this.#P(), this.#k(this.#L());
          }
          #F() {
            this.#S && (clearTimeout(this.#S), (this.#S = void 0));
          }
          #x() {
            this.#O && (clearInterval(this.#O), (this.#O = void 0));
          }
          createResult(e, t) {
            let r,
              n = this.#y,
              i = this.options,
              o = this.#b,
              l = this.#g,
              h = this.#v,
              p = e !== n ? e.state : this.#m,
              { state: y } = e,
              m = { ...y },
              b = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                o = !r && c(e, t),
                a = r && d(e, n, t, i);
              (o || a) && (m = { ...m, ...(0, s.k)(y.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (m.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: v, status: R } = m;
            r = m.data;
            let w = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === R
            ) {
              let e;
              o?.isPlaceholderData && t.placeholderData === h?.placeholderData
                ? ((e = o.data), (w = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#E?.state.data, this.#E)
                      : t.placeholderData),
                void 0 !== e &&
                  ((R = "success"), (r = (0, u.pl)(o?.data, e, t)), (b = !0));
            }
            if (t.select && void 0 !== r && !w)
              if (o && r === l?.data && t.select === this.#R) r = this.#w;
              else
                try {
                  (this.#R = t.select),
                    (r = t.select(r)),
                    (r = (0, u.pl)(o?.data, r, t)),
                    (this.#w = r),
                    (this.#f = null);
                } catch (e) {
                  this.#f = e;
                }
            this.#f &&
              ((g = this.#f), (r = this.#w), (v = Date.now()), (R = "error"));
            let E = "fetching" === m.fetchStatus,
              S = "pending" === R,
              O = "error" === R,
              T = S && E,
              C = void 0 !== r,
              A = {
                status: R,
                fetchStatus: m.fetchStatus,
                isPending: S,
                isSuccess: "success" === R,
                isError: O,
                isInitialLoading: T,
                isLoading: T,
                data: r,
                dataUpdatedAt: m.dataUpdatedAt,
                error: g,
                errorUpdatedAt: v,
                failureCount: m.fetchFailureCount,
                failureReason: m.fetchFailureReason,
                errorUpdateCount: m.errorUpdateCount,
                isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
                isFetchedAfterMount:
                  m.dataUpdateCount > p.dataUpdateCount ||
                  m.errorUpdateCount > p.errorUpdateCount,
                isFetching: E,
                isRefetching: E && !S,
                isLoadingError: O && !C,
                isPaused: "paused" === m.fetchStatus,
                isPlaceholderData: b,
                isRefetchError: O && C,
                isStale: f(e, t),
                refetch: this.refetch,
                promise: this.#p,
                isEnabled: !1 !== (0, u.Eh)(t.enabled, e),
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === A.status
                    ? e.reject(A.error)
                    : void 0 !== A.data && e.resolve(A.data);
                },
                r = () => {
                  t((this.#p = A.promise = (0, a.T)()));
                },
                i = this.#p;
              switch (i.status) {
                case "pending":
                  e.queryHash === n.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === A.status || A.data !== i.value) && r();
                  break;
                case "rejected":
                  ("error" !== A.status || A.error !== i.reason) && r();
              }
            }
            return A;
          }
          updateResult() {
            let e = this.#b,
              t = this.createResult(this.#y, this.options);
            (this.#g = this.#y.state),
              (this.#v = this.options),
              void 0 !== this.#g.data && (this.#E = this.#y),
              (0, u.f8)(t, e) ||
                ((this.#b = t),
                this.#N({
                  listeners: (() => {
                    if (!e) return !0;
                    let { notifyOnChangeProps: t } = this.options,
                      r = "function" == typeof t ? t() : t;
                    if ("all" === r || (!r && !this.#C.size)) return !0;
                    let n = new Set(r ?? this.#C);
                    return (
                      this.options.throwOnError && n.add("error"),
                      Object.keys(this.#b).some(
                        (t) => this.#b[t] !== e[t] && n.has(t)
                      )
                    );
                  })(),
                }));
          }
          #U() {
            let e = this.#o.getQueryCache().build(this.#o, this.options);
            if (e === this.#y) return;
            let t = this.#y;
            (this.#y = e),
              (this.#m = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#j();
          }
          #N(e) {
            i.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#b);
                }),
                this.#o
                  .getQueryCache()
                  .notify({ query: this.#y, type: "observerResultsUpdated" });
            });
          }
        };
      function c(e, t) {
        return (
          (!1 !== (0, u.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && h(e, t, t.refetchOnMount))
        );
      }
      function h(e, t, r) {
        if (
          !1 !== (0, u.Eh)(t.enabled, e) &&
          "static" !== (0, u.d2)(t.staleTime, e)
        ) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && f(e, t));
        }
        return !1;
      }
      function d(e, t, r, n) {
        return (
          (e !== t || !1 === (0, u.Eh)(n.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          f(e, r)
        );
      }
      function f(e, t) {
        return (
          !1 !== (0, u.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, u.d2)(t.staleTime, e))
        );
      }
    },
    80382: (e, t, r) => {
      r.d(t, {
        QueryErrorResetBoundary: () => u,
        useQueryErrorResetBoundary: () => a,
      });
      var n = r(12115),
        i = r(95155);
      function s() {
        let e = !1;
        return {
          clearReset: () => {
            e = !1;
          },
          reset: () => {
            e = !0;
          },
          isReset: () => e,
        };
      }
      var o = n.createContext(s()),
        a = () => n.useContext(o),
        u = (e) => {
          let { children: t } = e,
            [r] = n.useState(() => s());
          return (0, i.jsx)(o.Provider, {
            value: r,
            children: "function" == typeof t ? t(r) : t,
          });
        };
    },
    95838: (e, t, r) => {
      r.d(t, { useQuery: () => s });
      var n = r(76347),
        i = r(50005);
      function s(e, t) {
        return (0, i.t)(e, n.$, t);
      }
    },
  },
]);
