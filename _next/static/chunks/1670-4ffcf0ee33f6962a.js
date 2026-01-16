(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1670],
  {
    369: (t, r, e) => {
      "use strict";
      var i = e(62030),
        n = function () {
          return !!i;
        };
      (n.hasArrayLengthDefineBug = function () {
        if (!i) return null;
        try {
          return 1 !== i([], "length", { value: 1 }).length;
        } catch (t) {
          return !0;
        }
      }),
        (t.exports = n);
    },
    2821: (t) => {
      "use strict";
      t.exports = Object;
    },
    2902: (t) => {
      "use strict";
      t.exports = Error;
    },
    3289: (t, r, e) => {
      "use strict";
      var i = e(52430),
        n = e(61043),
        o = e(60261);
      t.exports = e(92678) || i.call(o, n);
    },
    5729: (t) => {
      "use strict";
      t.exports = Math.floor;
    },
    5955: (t, r, e) => {
      "use strict";
      var i = e(29241),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        s = function (t, r, e) {
          for (var i = 0, n = t.length; i < n; i++)
            o.call(t, i) && (null == e ? r(t[i], i, t) : r.call(e, t[i], i, t));
        },
        h = function (t, r, e) {
          for (var i = 0, n = t.length; i < n; i++)
            null == e ? r(t.charAt(i), i, t) : r.call(e, t.charAt(i), i, t);
        },
        a = function (t, r, e) {
          for (var i in t)
            o.call(t, i) && (null == e ? r(t[i], i, t) : r.call(e, t[i], i, t));
        };
      t.exports = function (t, r, e) {
        var o;
        if (!i(r)) throw TypeError("iterator must be a function");
        (arguments.length >= 3 && (o = e), "[object Array]" === n.call(t))
          ? s(t, r, o)
          : "string" == typeof t
          ? h(t, r, o)
          : a(t, r, o);
      };
    },
    8024: (t, r, e) => {
      "use strict";
      var i = e(70508),
        n = e(59888),
        o = e(369)(),
        s = e(81954),
        h = e(63674),
        a = i("%Math.floor%");
      t.exports = function (t, r) {
        if ("function" != typeof t) throw new h("`fn` is not a function");
        if ("number" != typeof r || r < 0 || r > 0xffffffff || a(r) !== r)
          throw new h("`length` must be a positive 32-bit integer");
        var e = arguments.length > 2 && !!arguments[2],
          i = !0,
          u = !0;
        if ("length" in t && s) {
          var f = s(t, "length");
          f && !f.configurable && (i = !1), f && !f.writable && (u = !1);
        }
        return (
          (i || u || !e) && (o ? n(t, "length", r, !0, !0) : n(t, "length", r)),
          t
        );
      };
    },
    8419: (t, r, e) => {
      "use strict";
      var i = e(33771),
        n = "undefined" == typeof globalThis ? e.g : globalThis;
      t.exports = function () {
        for (var t = [], r = 0; r < i.length; r++)
          "function" == typeof n[i[r]] && (t[t.length] = i[r]);
        return t;
      };
    },
    9166: (t, r, e) => {
      "use strict";
      var i = e(8024),
        n = e(62030),
        o = e(85407),
        s = e(13588);
      (t.exports = function (t) {
        var r = o(arguments),
          e = t.length - (arguments.length - 1);
        return i(r, 1 + (e > 0 ? e : 0), !0);
      }),
        n ? n(t.exports, "apply", { value: s }) : (t.exports.apply = s);
    },
    10681: (t, r, e) => {
      "use strict";
      var i,
        n = e(85407),
        o = e(81954);
      try {
        i = [].__proto__ === Array.prototype;
      } catch (t) {
        if (
          !t ||
          "object" != typeof t ||
          !("code" in t) ||
          "ERR_PROTO_ACCESS" !== t.code
        )
          throw t;
      }
      var s = !!i && o && o(Object.prototype, "__proto__"),
        h = Object,
        a = h.getPrototypeOf;
      t.exports =
        s && "function" == typeof s.get
          ? n([s.get])
          : "function" == typeof a &&
            function (t) {
              return a(null == t ? t : h(t));
            };
    },
    12764: (t) => {
      "use strict";
      t.exports = EvalError;
    },
    13372: (t) => {
      "use strict";
      t.exports = Object.getOwnPropertyDescriptor;
    },
    13588: (t, r, e) => {
      "use strict";
      var i = e(52430),
        n = e(61043),
        o = e(3289);
      t.exports = function () {
        return o(i, n, arguments);
      };
    },
    20492: (t, r, e) => {
      "use strict";
      var i = e(80228).Buffer,
        n =
          i.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var r;
        switch (
          ((this.encoding = (function (t) {
            var r = (function (t) {
              var r;
              if (!t) return "utf8";
              for (;;)
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (r) return;
                    (t = ("" + t).toLowerCase()), (r = !0);
                }
            })(t);
            if ("string" != typeof r && (i.isEncoding === n || !n(t)))
              throw Error("Unknown encoding: " + t);
            return r || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = a), (this.end = u), (r = 4);
            break;
          case "utf8":
            (this.fillLast = h), (r = 4);
            break;
          case "base64":
            (this.text = f), (this.end = l), (r = 3);
            break;
          default:
            (this.write = p), (this.end = c);
            return;
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = i.allocUnsafe(r));
      }
      function s(t) {
        return t <= 127
          ? 0
          : t >> 5 == 6
          ? 2
          : t >> 4 == 14
          ? 3
          : t >> 3 == 30
          ? 4
          : t >> 6 == 2
          ? -1
          : -2;
      }
      function h(t) {
        var r = this.lastTotal - this.lastNeed,
          e = (function (t, r, e) {
            if ((192 & r[0]) != 128) return (t.lastNeed = 0), "�";
            if (t.lastNeed > 1 && r.length > 1) {
              if ((192 & r[1]) != 128) return (t.lastNeed = 1), "�";
              if (t.lastNeed > 2 && r.length > 2 && (192 & r[2]) != 128)
                return (t.lastNeed = 2), "�";
            }
          })(this, t, 0);
        return void 0 !== e
          ? e
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, r, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : void (t.copy(this.lastChar, r, 0, t.length),
            (this.lastNeed -= t.length));
      }
      function a(t, r) {
        if ((t.length - r) % 2 == 0) {
          var e = t.toString("utf16le", r);
          if (e) {
            var i = e.charCodeAt(e.length - 1);
            if (i >= 55296 && i <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                e.slice(0, -1)
              );
          }
          return e;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", r, t.length - 1)
        );
      }
      function u(t) {
        var r = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var e = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString("utf16le", 0, e);
        }
        return r;
      }
      function f(t, r) {
        var e = (t.length - r) % 3;
        return 0 === e
          ? t.toString("base64", r)
          : ((this.lastNeed = 3 - e),
            (this.lastTotal = 3),
            1 === e
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", r, t.length - e));
      }
      function l(t) {
        var r = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : r;
      }
      function p(t) {
        return t.toString(this.encoding);
      }
      function c(t) {
        return t && t.length ? this.write(t) : "";
      }
      (r.StringDecoder = o),
        (o.prototype.write = function (t) {
          var r, e;
          if (0 === t.length) return "";
          if (this.lastNeed) {
            if (void 0 === (r = this.fillLast(t))) return "";
            (e = this.lastNeed), (this.lastNeed = 0);
          } else e = 0;
          return e < t.length
            ? r
              ? r + this.text(t, e)
              : this.text(t, e)
            : r || "";
        }),
        (o.prototype.end = function (t) {
          var r = t && t.length ? this.write(t) : "";
          return this.lastNeed ? r + "�" : r;
        }),
        (o.prototype.text = function (t, r) {
          var e = (function (t, r, e) {
            var i = r.length - 1;
            if (i < e) return 0;
            var n = s(r[i]);
            return n >= 0
              ? (n > 0 && (t.lastNeed = n - 1), n)
              : --i < e || -2 === n
              ? 0
              : (n = s(r[i])) >= 0
              ? (n > 0 && (t.lastNeed = n - 2), n)
              : --i < e || -2 === n
              ? 0
              : (n = s(r[i])) >= 0
              ? (n > 0 && (2 === n ? (n = 0) : (t.lastNeed = n - 3)), n)
              : 0;
          })(this, t, r);
          if (!this.lastNeed) return t.toString("utf8", r);
          this.lastTotal = e;
          var i = t.length - (e - this.lastNeed);
          return t.copy(this.lastChar, 0, i), t.toString("utf8", r, i);
        }),
        (o.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    21589: (t, r, e) => {
      "use strict";
      var i = e(45329),
        n = e(71033),
        o = e(10681);
      t.exports = i
        ? function (t) {
            return i(t);
          }
        : n
        ? function (t) {
            if (!t || ("object" != typeof t && "function" != typeof t))
              throw TypeError("getProto: not an object");
            return n(t);
          }
        : o
        ? function (t) {
            return o(t);
          }
        : null;
    },
    24747: (t) => {
      "use strict";
      t.exports = ReferenceError;
    },
    28886: (t, r, e) => {
      "use strict";
      var i = e(5955),
        n = e(8419),
        o = e(9166),
        s = e(91453),
        h = e(81954),
        a = e(21589),
        u = s("Object.prototype.toString"),
        f = e(39781)(),
        l = "undefined" == typeof globalThis ? e.g : globalThis,
        p = n(),
        c = s("String.prototype.slice"),
        m =
          s("Array.prototype.indexOf", !0) ||
          function (t, r) {
            for (var e = 0; e < t.length; e += 1) if (t[e] === r) return e;
            return -1;
          },
        d = { __proto__: null };
      f && h && a
        ? i(p, function (t) {
            var r = new l[t]();
            if (Symbol.toStringTag in r && a) {
              var e = a(r),
                i = h(e, Symbol.toStringTag);
              !i && e && (i = h(a(e), Symbol.toStringTag)),
                (d["$" + t] = o(i.get));
            }
          })
        : i(p, function (t) {
            var r = new l[t](),
              e = r.slice || r.set;
            e && (d["$" + t] = o(e));
          });
      var y = function (t) {
          var r = !1;
          return (
            i(d, function (e, i) {
              if (!r)
                try {
                  "$" + e(t) === i && (r = c(i, 1));
                } catch (t) {}
            }),
            r
          );
        },
        g = function (t) {
          var r = !1;
          return (
            i(d, function (e, i) {
              if (!r)
                try {
                  e(t), (r = c(i, 1));
                } catch (t) {}
            }),
            r
          );
        };
      t.exports = function (t) {
        if (!t || "object" != typeof t) return !1;
        if (!f) {
          var r = c(u(t), 8, -1);
          return m(p, r) > -1 ? r : "Object" === r && g(t);
        }
        return h ? y(t) : null;
      };
    },
    29241: (t) => {
      "use strict";
      var r,
        e,
        i = Function.prototype.toString,
        n = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof n && "function" == typeof Object.defineProperty)
        try {
          (r = Object.defineProperty({}, "length", {
            get: function () {
              throw e;
            },
          })),
            (e = {}),
            n(
              function () {
                throw 42;
              },
              null,
              r
            );
        } catch (t) {
          t !== e && (n = null);
        }
      else n = null;
      var o = /^\s*class\b/,
        s = function (t) {
          try {
            var r = i.call(t);
            return o.test(r);
          } catch (t) {
            return !1;
          }
        },
        h = function (t) {
          try {
            if (s(t)) return !1;
            return i.call(t), !0;
          } catch (t) {
            return !1;
          }
        },
        a = Object.prototype.toString,
        u = "function" == typeof Symbol && !!Symbol.toStringTag,
        f = !(0 in [,]),
        l = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var p = document.all;
        a.call(p) === a.call(document.all) &&
          (l = function (t) {
            if ((f || !t) && (void 0 === t || "object" == typeof t))
              try {
                var r = a.call(t);
                return (
                  ("[object HTMLAllCollection]" === r ||
                    "[object HTML document.all class]" === r ||
                    "[object HTMLCollection]" === r ||
                    "[object Object]" === r) &&
                  null == t("")
                );
              } catch (t) {}
            return !1;
          });
      }
      t.exports = n
        ? function (t) {
            if (l(t)) return !0;
            if (!t || ("function" != typeof t && "object" != typeof t))
              return !1;
            try {
              n(t, null, r);
            } catch (t) {
              if (t !== e) return !1;
            }
            return !s(t) && h(t);
          }
        : function (t) {
            if (l(t)) return !0;
            if (!t || ("function" != typeof t && "object" != typeof t))
              return !1;
            if (u) return h(t);
            if (s(t)) return !1;
            var r = a.call(t);
            return (
              ("[object Function]" === r ||
                "[object GeneratorFunction]" === r ||
                !!/^\[object HTML/.test(r)) &&
              h(t)
            );
          };
    },
    31467: (t) => {
      "use strict";
      t.exports = RangeError;
    },
    33771: (t) => {
      "use strict";
      t.exports = [
        "Float16Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array",
      ];
    },
    34817: (t) => {
      "use strict";
      t.exports = Math.pow;
    },
    39781: (t, r, e) => {
      "use strict";
      var i = e(68852);
      t.exports = function () {
        return i() && !!Symbol.toStringTag;
      };
    },
    41444: (t, r, e) => {
      "use strict";
      var i = Function.prototype.call,
        n = Object.prototype.hasOwnProperty;
      t.exports = e(52430).call(i, n);
    },
    42066: (t) => {
      "use strict";
      t.exports =
        Number.isNaN ||
        function (t) {
          return t != t;
        };
    },
    45329: (t) => {
      "use strict";
      t.exports =
        ("undefined" != typeof Reflect && Reflect.getPrototypeOf) || null;
    },
    51517: (t) => {
      "use strict";
      t.exports = Math.max;
    },
    52192: (t) => {
      "use strict";
      var r = Object.prototype.toString,
        e = Math.max,
        i = function (t, r) {
          for (var e = [], i = 0; i < t.length; i += 1) e[i] = t[i];
          for (var n = 0; n < r.length; n += 1) e[n + t.length] = r[n];
          return e;
        },
        n = function (t, r) {
          for (var e = [], i = r || 0, n = 0; i < t.length; i += 1, n += 1)
            e[n] = t[i];
          return e;
        },
        o = function (t, r) {
          for (var e = "", i = 0; i < t.length; i += 1)
            (e += t[i]), i + 1 < t.length && (e += r);
          return e;
        };
      t.exports = function (t) {
        var s,
          h = this;
        if ("function" != typeof h || "[object Function]" !== r.apply(h))
          throw TypeError(
            "Function.prototype.bind called on incompatible " + h
          );
        for (
          var a = n(arguments, 1), u = e(0, h.length - a.length), f = [], l = 0;
          l < u;
          l++
        )
          f[l] = "$" + l;
        if (
          ((s = Function(
            "binder",
            "return function (" +
              o(f, ",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof s) {
              var r = h.apply(this, i(a, arguments));
              return Object(r) === r ? r : this;
            }
            return h.apply(t, i(a, arguments));
          })),
          h.prototype)
        ) {
          var p = function () {};
          (p.prototype = h.prototype),
            (s.prototype = new p()),
            (p.prototype = null);
        }
        return s;
      };
    },
    52430: (t, r, e) => {
      "use strict";
      var i = e(52192);
      t.exports = Function.prototype.bind || i;
    },
    53377: (t, r, e) => {
      "use strict";
      var i = e(28886);
      t.exports = function (t) {
        return !!i(t);
      };
    },
    54251: (t) => {
      "use strict";
      t.exports = Math.min;
    },
    56406: (t, r, e) => {
      "use strict";
      var i = "undefined" != typeof Symbol && Symbol,
        n = e(68852);
      t.exports = function () {
        return (
          "function" == typeof i &&
          "function" == typeof Symbol &&
          "symbol" == typeof i("foo") &&
          "symbol" == typeof Symbol("bar") &&
          n()
        );
      };
    },
    59888: (t, r, e) => {
      "use strict";
      var i = e(62030),
        n = e(61925),
        o = e(63674),
        s = e(81954);
      t.exports = function (t, r, e) {
        if (!t || ("object" != typeof t && "function" != typeof t))
          throw new o("`obj` must be an object or a function`");
        if ("string" != typeof r && "symbol" != typeof r)
          throw new o("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" != typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new o(
            "`nonEnumerable`, if provided, must be a boolean or null"
          );
        if (
          arguments.length > 4 &&
          "boolean" != typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new o("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" != typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new o(
            "`nonConfigurable`, if provided, must be a boolean or null"
          );
        if (arguments.length > 6 && "boolean" != typeof arguments[6])
          throw new o("`loose`, if provided, must be a boolean");
        var h = arguments.length > 3 ? arguments[3] : null,
          a = arguments.length > 4 ? arguments[4] : null,
          u = arguments.length > 5 ? arguments[5] : null,
          f = arguments.length > 6 && arguments[6],
          l = !!s && s(t, r);
        if (i)
          i(t, r, {
            configurable: null === u && l ? l.configurable : !u,
            enumerable: null === h && l ? l.enumerable : !h,
            value: e,
            writable: null === a && l ? l.writable : !a,
          });
        else if (!f && (h || a || u))
          throw new n(
            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
          );
        else t[r] = e;
      };
    },
    60261: (t) => {
      "use strict";
      t.exports = Function.prototype.call;
    },
    61043: (t) => {
      "use strict";
      t.exports = Function.prototype.apply;
    },
    61925: (t) => {
      "use strict";
      t.exports = SyntaxError;
    },
    62030: (t) => {
      "use strict";
      var r = Object.defineProperty || !1;
      if (r)
        try {
          r({}, "a", { value: 1 });
        } catch (t) {
          r = !1;
        }
      t.exports = r;
    },
    63674: (t) => {
      "use strict";
      t.exports = TypeError;
    },
    68852: (t) => {
      "use strict";
      t.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          r = Symbol("test"),
          e = Object(r);
        if (
          "string" == typeof r ||
          "[object Symbol]" !== Object.prototype.toString.call(r) ||
          "[object Symbol]" !== Object.prototype.toString.call(e)
        )
          return !1;
        for (var i in ((t[r] = 42), t)) return !1;
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(t).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(t).length)
        )
          return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (
          1 !== n.length ||
          n[0] !== r ||
          !Object.prototype.propertyIsEnumerable.call(t, r)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, r);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    70508: (t, r, e) => {
      "use strict";
      var i,
        n = e(2821),
        o = e(2902),
        s = e(12764),
        h = e(31467),
        a = e(24747),
        u = e(61925),
        f = e(63674),
        l = e(97968),
        p = e(82083),
        c = e(5729),
        m = e(51517),
        d = e(54251),
        y = e(34817),
        g = e(83623),
        v = e(87700),
        M = Function,
        w = function (t) {
          try {
            return M('"use strict"; return (' + t + ").constructor;")();
          } catch (t) {}
        },
        b = e(81954),
        x = e(62030),
        A = function () {
          throw new f();
        },
        _ = b
          ? (function () {
              try {
                return arguments.callee, A;
              } catch (t) {
                try {
                  return b(arguments, "callee").get;
                } catch (t) {
                  return A;
                }
              }
            })()
          : A,
        S = e(56406)(),
        P = e(21589),
        O = e(71033),
        j = e(45329),
        E = e(61043),
        N = e(60261),
        R = {},
        k = "undefined" != typeof Uint8Array && P ? P(Uint8Array) : i,
        I = {
          __proto__: null,
          "%AggregateError%":
            "undefined" == typeof AggregateError ? i : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? i : ArrayBuffer,
          "%ArrayIteratorPrototype%": S && P ? P([][Symbol.iterator]()) : i,
          "%AsyncFromSyncIteratorPrototype%": i,
          "%AsyncFunction%": R,
          "%AsyncGenerator%": R,
          "%AsyncGeneratorFunction%": R,
          "%AsyncIteratorPrototype%": R,
          "%Atomics%": "undefined" == typeof Atomics ? i : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? i : BigInt,
          "%BigInt64Array%":
            "undefined" == typeof BigInt64Array ? i : BigInt64Array,
          "%BigUint64Array%":
            "undefined" == typeof BigUint64Array ? i : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? i : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": o,
          "%eval%": eval,
          "%EvalError%": s,
          "%Float16Array%":
            "undefined" == typeof Float16Array ? i : Float16Array,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? i : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? i : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? i
              : FinalizationRegistry,
          "%Function%": M,
          "%GeneratorFunction%": R,
          "%Int8Array%": "undefined" == typeof Int8Array ? i : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? i : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? i : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": S && P ? P(P([][Symbol.iterator]())) : i,
          "%JSON%": "object" == typeof JSON ? JSON : i,
          "%Map%": "undefined" == typeof Map ? i : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && S && P
              ? P(new Map()[Symbol.iterator]())
              : i,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": n,
          "%Object.getOwnPropertyDescriptor%": b,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? i : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? i : Proxy,
          "%RangeError%": h,
          "%ReferenceError%": a,
          "%Reflect%": "undefined" == typeof Reflect ? i : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? i : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && S && P
              ? P(new Set()[Symbol.iterator]())
              : i,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": S && P ? P(""[Symbol.iterator]()) : i,
          "%Symbol%": S ? Symbol : i,
          "%SyntaxError%": u,
          "%ThrowTypeError%": _,
          "%TypedArray%": k,
          "%TypeError%": f,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? i : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? i : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? i : Uint32Array,
          "%URIError%": l,
          "%WeakMap%": "undefined" == typeof WeakMap ? i : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? i : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? i : WeakSet,
          "%Function.prototype.call%": N,
          "%Function.prototype.apply%": E,
          "%Object.defineProperty%": x,
          "%Object.getPrototypeOf%": O,
          "%Math.abs%": p,
          "%Math.floor%": c,
          "%Math.max%": m,
          "%Math.min%": d,
          "%Math.pow%": y,
          "%Math.round%": g,
          "%Math.sign%": v,
          "%Reflect.getPrototypeOf%": j,
        };
      if (P)
        try {
          null.error;
        } catch (t) {
          var B = P(P(t));
          I["%Error.prototype%"] = B;
        }
      var F = function t(r) {
          var e;
          if ("%AsyncFunction%" === r) e = w("async function () {}");
          else if ("%GeneratorFunction%" === r) e = w("function* () {}");
          else if ("%AsyncGeneratorFunction%" === r)
            e = w("async function* () {}");
          else if ("%AsyncGenerator%" === r) {
            var i = t("%AsyncGeneratorFunction%");
            i && (e = i.prototype);
          } else if ("%AsyncIteratorPrototype%" === r) {
            var n = t("%AsyncGenerator%");
            n && P && (e = P(n.prototype));
          }
          return (I[r] = e), e;
        },
        T = {
          __proto__: null,
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        U = e(52430),
        C = e(41444),
        L = U.call(N, Array.prototype.concat),
        q = U.call(E, Array.prototype.splice),
        Z = U.call(N, String.prototype.replace),
        D = U.call(N, String.prototype.slice),
        G = U.call(N, RegExp.prototype.exec),
        W =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        z = /\\(\\)?/g,
        J = function (t) {
          var r = D(t, 0, 1),
            e = D(t, -1);
          if ("%" === r && "%" !== e)
            throw new u("invalid intrinsic syntax, expected closing `%`");
          if ("%" === e && "%" !== r)
            throw new u("invalid intrinsic syntax, expected opening `%`");
          var i = [];
          return (
            Z(t, W, function (t, r, e, n) {
              i[i.length] = e ? Z(n, z, "$1") : r || t;
            }),
            i
          );
        },
        $ = function (t, r) {
          var e,
            i = t;
          if ((C(T, i) && (i = "%" + (e = T[i])[0] + "%"), C(I, i))) {
            var n = I[i];
            if ((n === R && (n = F(i)), void 0 === n && !r))
              throw new f(
                "intrinsic " +
                  t +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: e, name: i, value: n };
          }
          throw new u("intrinsic " + t + " does not exist!");
        };
      t.exports = function (t, r) {
        if ("string" != typeof t || 0 === t.length)
          throw new f("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof r)
          throw new f('"allowMissing" argument must be a boolean');
        if (null === G(/^%?[^%]*%?$/, t))
          throw new u(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var e = J(t),
          i = e.length > 0 ? e[0] : "",
          n = $("%" + i + "%", r),
          o = n.name,
          s = n.value,
          h = !1,
          a = n.alias;
        a && ((i = a[0]), q(e, L([0, 1], a)));
        for (var l = 1, p = !0; l < e.length; l += 1) {
          var c = e[l],
            m = D(c, 0, 1),
            d = D(c, -1);
          if (
            ('"' === m ||
              "'" === m ||
              "`" === m ||
              '"' === d ||
              "'" === d ||
              "`" === d) &&
            m !== d
          )
            throw new u("property names with quotes must have matching quotes");
          if (
            (("constructor" !== c && p) || (h = !0),
            (i += "." + c),
            C(I, (o = "%" + i + "%")))
          )
            s = I[o];
          else if (null != s) {
            if (!(c in s)) {
              if (!r)
                throw new f(
                  "base intrinsic for " +
                    t +
                    " exists, but the property is not available."
                );
              return;
            }
            if (b && l + 1 >= e.length) {
              var y = b(s, c);
              s =
                (p = !!y) && "get" in y && !("originalValue" in y.get)
                  ? y.get
                  : s[c];
            } else (p = C(s, c)), (s = s[c]);
            p && !h && (I[o] = s);
          }
        }
        return s;
      };
    },
    71033: (t, r, e) => {
      "use strict";
      t.exports = e(2821).getPrototypeOf || null;
    },
    80228: (t, r, e) => {
      var i = e(44134),
        n = i.Buffer;
      function o(t, r) {
        for (var e in t) r[e] = t[e];
      }
      function s(t, r, e) {
        return n(t, r, e);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
        ? (t.exports = i)
        : (o(i, r), (r.Buffer = s)),
        (s.prototype = Object.create(n.prototype)),
        o(n, s),
        (s.from = function (t, r, e) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return n(t, r, e);
        }),
        (s.alloc = function (t, r, e) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var i = n(t);
          return (
            void 0 !== r
              ? "string" == typeof e
                ? i.fill(r, e)
                : i.fill(r)
              : i.fill(0),
            i
          );
        }),
        (s.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return n(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return i.SlowBuffer(t);
        });
    },
    81954: (t, r, e) => {
      "use strict";
      var i = e(13372);
      if (i)
        try {
          i([], "length");
        } catch (t) {
          i = null;
        }
      t.exports = i;
    },
    82083: (t) => {
      "use strict";
      t.exports = Math.abs;
    },
    83623: (t) => {
      "use strict";
      t.exports = Math.round;
    },
    84115: (t) => {
      "function" == typeof Object.create
        ? (t.exports = function (t, r) {
            r &&
              ((t.super_ = r),
              (t.prototype = Object.create(r.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, r) {
            if (r) {
              t.super_ = r;
              var e = function () {};
              (e.prototype = r.prototype),
                (t.prototype = new e()),
                (t.prototype.constructor = t);
            }
          });
    },
    85407: (t, r, e) => {
      "use strict";
      var i = e(52430),
        n = e(63674),
        o = e(60261),
        s = e(3289);
      t.exports = function (t) {
        if (t.length < 1 || "function" != typeof t[0])
          throw new n("a function is required");
        return s(i, o, t);
      };
    },
    87700: (t, r, e) => {
      "use strict";
      var i = e(42066);
      t.exports = function (t) {
        return i(t) || 0 === t ? t : t < 0 ? -1 : 1;
      };
    },
    91453: (t, r, e) => {
      "use strict";
      var i = e(70508),
        n = e(85407),
        o = n([i("%String.prototype.indexOf%")]);
      t.exports = function (t, r) {
        var e = i(t, !!r);
        return "function" == typeof e && o(t, ".prototype.") > -1 ? n([e]) : e;
      };
    },
    92437: function (t, r, e) {
      !(function (t, r) {
        "use strict";
        function i(t, r) {
          if (!t) throw Error(r || "Assertion failed");
        }
        function n(t, r) {
          t.super_ = r;
          var e = function () {};
          (e.prototype = r.prototype),
            (t.prototype = new e()),
            (t.prototype.constructor = t);
        }
        function o(t, r, e) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === r || "be" === r) && ((e = r), (r = 10)),
              this._init(t || 0, r || 10, e || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (r.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          l =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : e(47790).Buffer;
        } catch (t) {}
        function s(t, r) {
          var e = t.charCodeAt(r);
          return e >= 48 && e <= 57
            ? e - 48
            : e >= 65 && e <= 70
            ? e - 55
            : e >= 97 && e <= 102
            ? e - 87
            : void i(!1, "Invalid character in " + t);
        }
        function h(t, r, e) {
          var i = s(t, e);
          return e - 1 >= r && (i |= s(t, e - 1) << 4), i;
        }
        function a(t, r, e, n) {
          for (var o = 0, s = 0, h = Math.min(t.length, e), a = r; a < h; a++) {
            var u = t.charCodeAt(a) - 48;
            (o *= n),
              (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              i(u >= 0 && s < n, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function u(t, r) {
          (t.words = r.words),
            (t.length = r.length),
            (t.negative = r.negative),
            (t.red = r.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, r) {
            return t.cmp(r) > 0 ? t : r;
          }),
          (o.min = function (t, r) {
            return 0 > t.cmp(r) ? t : r;
          }),
          (o.prototype._init = function (t, r, e) {
            if ("number" == typeof t) return this._initNumber(t, r, e);
            if ("object" == typeof t) return this._initArray(t, r, e);
            "hex" === r && (r = 16), i(r === (0 | r) && r >= 2 && r <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === r
                  ? this._parseHex(t, n, e)
                  : (this._parseBase(t, r, n),
                    "le" === e && this._initArray(this.toArray(), r, e)));
          }),
          (o.prototype._initNumber = function (t, r, e) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 0x4000000
                ? ((this.words = [0x3ffffff & t]), (this.length = 1))
                : t < 0x10000000000000
                ? ((this.words = [0x3ffffff & t, (t / 0x4000000) & 0x3ffffff]),
                  (this.length = 2))
                : (i(t < 0x20000000000000),
                  (this.words = [
                    0x3ffffff & t,
                    (t / 0x4000000) & 0x3ffffff,
                    1,
                  ]),
                  (this.length = 3)),
              "le" === e && this._initArray(this.toArray(), r, e);
          }),
          (o.prototype._initArray = function (t, r, e) {
            if ((i("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var n, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var h = 0;
            if ("be" === e)
              for (s = t.length - 1, n = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[n] |= (o << h) & 0x3ffffff),
                  (this.words[n + 1] = (o >>> (26 - h)) & 0x3ffffff),
                  (h += 24) >= 26 && ((h -= 26), n++);
            else if ("le" === e)
              for (s = 0, n = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[n] |= (o << h) & 0x3ffffff),
                  (this.words[n + 1] = (o >>> (26 - h)) & 0x3ffffff),
                  (h += 24) >= 26 && ((h -= 26), n++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, r, e) {
            (this.length = Math.ceil((t.length - r) / 6)),
              (this.words = Array(this.length));
            for (var i, n = 0; n < this.length; n++) this.words[n] = 0;
            var o = 0,
              s = 0;
            if ("be" === e)
              for (n = t.length - 1; n >= r; n -= 2)
                (i = h(t, r, n) << o),
                  (this.words[s] |= 0x3ffffff & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - r) % 2 == 0 ? r + 1 : r;
                n < t.length;
                n += 2
              )
                (i = h(t, r, n) << o),
                  (this.words[s] |= 0x3ffffff & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, r, e) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 0x3ffffff; n *= r) i++;
            i--, (n = (n / r) | 0);
            for (
              var o = t.length - e,
                s = o % i,
                h = Math.min(o, o - s) + e,
                u = 0,
                f = e;
              f < h;
              f += i
            )
              (u = a(t, f, f + i, r)),
                this.imuln(n),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var l = 1;
              for (u = a(t, f, t.length, r), f = 0; f < s; f++) l *= r;
              this.imuln(l),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            u(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f;
          } catch (t) {
            o.prototype.inspect = f;
          }
        else o.prototype.inspect = f;
        function f() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var l,
          p = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          c = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          m = [
            0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400,
            0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000,
            0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40,
            0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
            0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f,
            0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400,
          ];
        function d(t, r, e) {
          e.negative = r.negative ^ t.negative;
          var i = (t.length + r.length) | 0;
          (e.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | r.words[0],
            s = n * o,
            h = 0x3ffffff & s,
            a = (s / 0x4000000) | 0;
          e.words[0] = h;
          for (var u = 1; u < i; u++) {
            for (
              var f = a >>> 26,
                l = 0x3ffffff & a,
                p = Math.min(u, r.length - 1),
                c = Math.max(0, u - t.length + 1);
              c <= p;
              c++
            ) {
              var m = (u - c) | 0;
              (f +=
                ((s = (n = 0 | t.words[m]) * (o = 0 | r.words[c]) + l) /
                  0x4000000) |
                0),
                (l = 0x3ffffff & s);
            }
            (e.words[u] = 0 | l), (a = 0 | f);
          }
          return 0 !== a ? (e.words[u] = 0 | a) : e.length--, e._strip();
        }
        (o.prototype.toString = function (t, r) {
          if (((r = 0 | r || 1), 16 === (t = t || 10) || "hex" === t)) {
            for (var e = "", n = 0, o = 0, s = 0; s < this.length; s++) {
              var h = this.words[s],
                a = (((h << n) | o) & 0xffffff).toString(16);
              (o = (h >>> (24 - n)) & 0xffffff),
                (n += 2) >= 26 && ((n -= 26), s--),
                (e =
                  0 !== o || s !== this.length - 1
                    ? p[6 - a.length] + a + e
                    : a + e);
            }
            for (0 !== o && (e = o.toString(16) + e); e.length % r != 0; )
              e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = c[t],
              f = m[t];
            e = "";
            var l = this.clone();
            for (l.negative = 0; !l.isZero(); ) {
              var d = l.modrn(f).toString(t);
              e = (l = l.idivn(f)).isZero() ? d + e : p[u - d.length] + d + e;
            }
            for (this.isZero() && (e = "0" + e); e.length % r != 0; )
              e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 0x4000000 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 0x10000000000000 + 0x4000000 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          l &&
            (o.prototype.toBuffer = function (t, r) {
              return this.toArrayLike(l, t, r);
            }),
          (o.prototype.toArray = function (t, r) {
            return this.toArrayLike(Array, t, r);
          }),
          (o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](s, n), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, r) {
            for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
              var s = (this.words[n] << o) | i;
              (t[e++] = 255 & s),
                e < t.length && (t[e++] = (s >> 8) & 255),
                e < t.length && (t[e++] = (s >> 16) & 255),
                6 === o
                  ? (e < t.length && (t[e++] = (s >> 24) & 255),
                    (i = 0),
                    (o = 0))
                  : ((i = s >>> 24), (o += 2));
            }
            if (e < t.length) for (t[e++] = i; e < t.length; ) t[e++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, r) {
            for (
              var e = t.length - 1, i = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var s = (this.words[n] << o) | i;
              (t[e--] = 255 & s),
                e >= 0 && (t[e--] = (s >> 8) & 255),
                e >= 0 && (t[e--] = (s >> 16) & 255),
                6 === o
                  ? (e >= 0 && (t[e--] = (s >> 24) & 255), (i = 0), (o = 0))
                  : ((i = s >>> 24), (o += 2));
            }
            if (e >= 0) for (t[e--] = i; e >= 0; ) t[e--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var r = t,
                  e = 0;
                return (
                  r >= 4096 && ((e += 13), (r >>>= 13)),
                  r >= 64 && ((e += 7), (r >>>= 7)),
                  r >= 8 && ((e += 4), (r >>>= 4)),
                  r >= 2 && ((e += 2), (r >>>= 2)),
                  e + r
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var r = t,
              e = 0;
            return (
              (8191 & r) == 0 && ((e += 13), (r >>>= 13)),
              (127 & r) == 0 && ((e += 7), (r >>>= 7)),
              (15 & r) == 0 && ((e += 4), (r >>>= 4)),
              (3 & r) == 0 && ((e += 2), (r >>>= 2)),
              (1 & r) == 0 && e++,
              e
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              r = this._countBits(t);
            return (this.length - 1) * 26 + r;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, r = 0; r < this.length; r++) {
              var e = this._zeroBits(this.words[r]);
              if (((t += e), 26 !== e)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] | t.words[r];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return i((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var r;
            r = this.length > t.length ? t : this;
            for (var e = 0; e < r.length; e++)
              this.words[e] = this.words[e] & t.words[e];
            return (this.length = r.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return i((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((r = this), (e = t))
              : ((r = t), (e = this));
            for (var r, e, i = 0; i < e.length; i++)
              this.words[i] = r.words[i] ^ e.words[i];
            if (this !== r)
              for (; i < r.length; i++) this.words[i] = r.words[i];
            return (this.length = r.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return i((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            i("number" == typeof t && t >= 0);
            var r = 0 | Math.ceil(t / 26),
              e = t % 26;
            this._expand(r), e > 0 && r--;
            for (var n = 0; n < r; n++)
              this.words[n] = 0x3ffffff & ~this.words[n];
            return (
              e > 0 &&
                (this.words[n] = ~this.words[n] & (0x3ffffff >> (26 - e))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, r) {
            i("number" == typeof t && t >= 0);
            var e = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(e + 1),
              r
                ? (this.words[e] = this.words[e] | (1 << n))
                : (this.words[e] = this.words[e] & ~(1 << n)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (r = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (r = this.isub(t)),
                (t.negative = 1),
                r._normSign()
              );
            this.length > t.length
              ? ((e = this), (i = t))
              : ((e = t), (i = this));
            for (var r, e, i, n = 0, o = 0; o < i.length; o++)
              (r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 0x3ffffff & r),
                (n = r >>> 26);
            for (; 0 !== n && o < e.length; o++)
              (r = (0 | e.words[o]) + n),
                (this.words[o] = 0x3ffffff & r),
                (n = r >>> 26);
            if (((this.length = e.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (e !== this)
              for (; o < e.length; o++) this.words[o] = e.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var r;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (r = t.sub(this)), (this.negative = 1), r)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var r,
                e,
                i = this.iadd(t);
              return (t.negative = 1), i._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((r = this), (e = t)) : ((r = t), (e = this));
            for (var o = 0, s = 0; s < e.length; s++)
              (o = (i = (0 | r.words[s]) - (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 0x3ffffff & i);
            for (; 0 !== o && s < r.length; s++)
              (o = (i = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 0x3ffffff & i);
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var y = function (t, r, e) {
          var i,
            n,
            o,
            s = t.words,
            h = r.words,
            a = e.words,
            u = 0,
            f = 0 | s[0],
            l = 8191 & f,
            p = f >>> 13,
            c = 0 | s[1],
            m = 8191 & c,
            d = c >>> 13,
            y = 0 | s[2],
            g = 8191 & y,
            v = y >>> 13,
            M = 0 | s[3],
            w = 8191 & M,
            b = M >>> 13,
            x = 0 | s[4],
            A = 8191 & x,
            _ = x >>> 13,
            S = 0 | s[5],
            P = 8191 & S,
            O = S >>> 13,
            j = 0 | s[6],
            E = 8191 & j,
            N = j >>> 13,
            R = 0 | s[7],
            k = 8191 & R,
            I = R >>> 13,
            B = 0 | s[8],
            F = 8191 & B,
            T = B >>> 13,
            U = 0 | s[9],
            C = 8191 & U,
            L = U >>> 13,
            q = 0 | h[0],
            Z = 8191 & q,
            D = q >>> 13,
            G = 0 | h[1],
            W = 8191 & G,
            z = G >>> 13,
            J = 0 | h[2],
            $ = 8191 & J,
            H = J >>> 13,
            V = 0 | h[3],
            K = 8191 & V,
            Q = V >>> 13,
            X = 0 | h[4],
            Y = 8191 & X,
            tt = X >>> 13,
            tr = 0 | h[5],
            te = 8191 & tr,
            ti = tr >>> 13,
            tn = 0 | h[6],
            to = 8191 & tn,
            ts = tn >>> 13,
            th = 0 | h[7],
            ta = 8191 & th,
            tu = th >>> 13,
            tf = 0 | h[8],
            tl = 8191 & tf,
            tp = tf >>> 13,
            tc = 0 | h[9],
            tm = 8191 & tc,
            td = tc >>> 13;
          (e.negative = t.negative ^ r.negative),
            (e.length = 19),
            (i = Math.imul(l, Z));
          var ty =
            (((u + i) | 0) +
              ((8191 & (n = ((n = Math.imul(l, D)) + Math.imul(p, Z)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(p, D)) + (n >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 0x3ffffff),
            (i = Math.imul(m, Z)),
            (n = ((n = Math.imul(m, D)) + Math.imul(d, Z)) | 0),
            (o = Math.imul(d, D)),
            (i = (i + Math.imul(l, W)) | 0);
          var tg =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, z)) | 0) + Math.imul(p, W)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, z)) | 0) + (n >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 0x3ffffff),
            (i = Math.imul(g, Z)),
            (n = ((n = Math.imul(g, D)) + Math.imul(v, Z)) | 0),
            (o = Math.imul(v, D)),
            (i = (i + Math.imul(m, W)) | 0),
            (n = ((n = (n + Math.imul(m, z)) | 0) + Math.imul(d, W)) | 0),
            (o = (o + Math.imul(d, z)) | 0),
            (i = (i + Math.imul(l, $)) | 0);
          var tv =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, H)) | 0) + Math.imul(p, $)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, H)) | 0) + (n >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 0x3ffffff),
            (i = Math.imul(w, Z)),
            (n = ((n = Math.imul(w, D)) + Math.imul(b, Z)) | 0),
            (o = Math.imul(b, D)),
            (i = (i + Math.imul(g, W)) | 0),
            (n = ((n = (n + Math.imul(g, z)) | 0) + Math.imul(v, W)) | 0),
            (o = (o + Math.imul(v, z)) | 0),
            (i = (i + Math.imul(m, $)) | 0),
            (n = ((n = (n + Math.imul(m, H)) | 0) + Math.imul(d, $)) | 0),
            (o = (o + Math.imul(d, H)) | 0),
            (i = (i + Math.imul(l, K)) | 0);
          var tM =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, Q)) | 0) + Math.imul(p, K)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, Q)) | 0) + (n >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 0x3ffffff),
            (i = Math.imul(A, Z)),
            (n = ((n = Math.imul(A, D)) + Math.imul(_, Z)) | 0),
            (o = Math.imul(_, D)),
            (i = (i + Math.imul(w, W)) | 0),
            (n = ((n = (n + Math.imul(w, z)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, z)) | 0),
            (i = (i + Math.imul(g, $)) | 0),
            (n = ((n = (n + Math.imul(g, H)) | 0) + Math.imul(v, $)) | 0),
            (o = (o + Math.imul(v, H)) | 0),
            (i = (i + Math.imul(m, K)) | 0),
            (n = ((n = (n + Math.imul(m, Q)) | 0) + Math.imul(d, K)) | 0),
            (o = (o + Math.imul(d, Q)) | 0),
            (i = (i + Math.imul(l, Y)) | 0);
          var tw =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(p, Y)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, tt)) | 0) + (n >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 0x3ffffff),
            (i = Math.imul(P, Z)),
            (n = ((n = Math.imul(P, D)) + Math.imul(O, Z)) | 0),
            (o = Math.imul(O, D)),
            (i = (i + Math.imul(A, W)) | 0),
            (n = ((n = (n + Math.imul(A, z)) | 0) + Math.imul(_, W)) | 0),
            (o = (o + Math.imul(_, z)) | 0),
            (i = (i + Math.imul(w, $)) | 0),
            (n = ((n = (n + Math.imul(w, H)) | 0) + Math.imul(b, $)) | 0),
            (o = (o + Math.imul(b, H)) | 0),
            (i = (i + Math.imul(g, K)) | 0),
            (n = ((n = (n + Math.imul(g, Q)) | 0) + Math.imul(v, K)) | 0),
            (o = (o + Math.imul(v, Q)) | 0),
            (i = (i + Math.imul(m, Y)) | 0),
            (n = ((n = (n + Math.imul(m, tt)) | 0) + Math.imul(d, Y)) | 0),
            (o = (o + Math.imul(d, tt)) | 0),
            (i = (i + Math.imul(l, te)) | 0);
          var tb =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, ti)) | 0) + Math.imul(p, te)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, ti)) | 0) + (n >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 0x3ffffff),
            (i = Math.imul(E, Z)),
            (n = ((n = Math.imul(E, D)) + Math.imul(N, Z)) | 0),
            (o = Math.imul(N, D)),
            (i = (i + Math.imul(P, W)) | 0),
            (n = ((n = (n + Math.imul(P, z)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, z)) | 0),
            (i = (i + Math.imul(A, $)) | 0),
            (n = ((n = (n + Math.imul(A, H)) | 0) + Math.imul(_, $)) | 0),
            (o = (o + Math.imul(_, H)) | 0),
            (i = (i + Math.imul(w, K)) | 0),
            (n = ((n = (n + Math.imul(w, Q)) | 0) + Math.imul(b, K)) | 0),
            (o = (o + Math.imul(b, Q)) | 0),
            (i = (i + Math.imul(g, Y)) | 0),
            (n = ((n = (n + Math.imul(g, tt)) | 0) + Math.imul(v, Y)) | 0),
            (o = (o + Math.imul(v, tt)) | 0),
            (i = (i + Math.imul(m, te)) | 0),
            (n = ((n = (n + Math.imul(m, ti)) | 0) + Math.imul(d, te)) | 0),
            (o = (o + Math.imul(d, ti)) | 0),
            (i = (i + Math.imul(l, to)) | 0);
          var tx =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, ts)) | 0) + Math.imul(p, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, ts)) | 0) + (n >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 0x3ffffff),
            (i = Math.imul(k, Z)),
            (n = ((n = Math.imul(k, D)) + Math.imul(I, Z)) | 0),
            (o = Math.imul(I, D)),
            (i = (i + Math.imul(E, W)) | 0),
            (n = ((n = (n + Math.imul(E, z)) | 0) + Math.imul(N, W)) | 0),
            (o = (o + Math.imul(N, z)) | 0),
            (i = (i + Math.imul(P, $)) | 0),
            (n = ((n = (n + Math.imul(P, H)) | 0) + Math.imul(O, $)) | 0),
            (o = (o + Math.imul(O, H)) | 0),
            (i = (i + Math.imul(A, K)) | 0),
            (n = ((n = (n + Math.imul(A, Q)) | 0) + Math.imul(_, K)) | 0),
            (o = (o + Math.imul(_, Q)) | 0),
            (i = (i + Math.imul(w, Y)) | 0),
            (n = ((n = (n + Math.imul(w, tt)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (i = (i + Math.imul(g, te)) | 0),
            (n = ((n = (n + Math.imul(g, ti)) | 0) + Math.imul(v, te)) | 0),
            (o = (o + Math.imul(v, ti)) | 0),
            (i = (i + Math.imul(m, to)) | 0),
            (n = ((n = (n + Math.imul(m, ts)) | 0) + Math.imul(d, to)) | 0),
            (o = (o + Math.imul(d, ts)) | 0),
            (i = (i + Math.imul(l, ta)) | 0);
          var tA =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tu)) | 0) + Math.imul(p, ta)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, tu)) | 0) + (n >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 0x3ffffff),
            (i = Math.imul(F, Z)),
            (n = ((n = Math.imul(F, D)) + Math.imul(T, Z)) | 0),
            (o = Math.imul(T, D)),
            (i = (i + Math.imul(k, W)) | 0),
            (n = ((n = (n + Math.imul(k, z)) | 0) + Math.imul(I, W)) | 0),
            (o = (o + Math.imul(I, z)) | 0),
            (i = (i + Math.imul(E, $)) | 0),
            (n = ((n = (n + Math.imul(E, H)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, H)) | 0),
            (i = (i + Math.imul(P, K)) | 0),
            (n = ((n = (n + Math.imul(P, Q)) | 0) + Math.imul(O, K)) | 0),
            (o = (o + Math.imul(O, Q)) | 0),
            (i = (i + Math.imul(A, Y)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(_, Y)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (i = (i + Math.imul(w, te)) | 0),
            (n = ((n = (n + Math.imul(w, ti)) | 0) + Math.imul(b, te)) | 0),
            (o = (o + Math.imul(b, ti)) | 0),
            (i = (i + Math.imul(g, to)) | 0),
            (n = ((n = (n + Math.imul(g, ts)) | 0) + Math.imul(v, to)) | 0),
            (o = (o + Math.imul(v, ts)) | 0),
            (i = (i + Math.imul(m, ta)) | 0),
            (n = ((n = (n + Math.imul(m, tu)) | 0) + Math.imul(d, ta)) | 0),
            (o = (o + Math.imul(d, tu)) | 0),
            (i = (i + Math.imul(l, tl)) | 0);
          var t_ =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tp)) | 0) + Math.imul(p, tl)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, tp)) | 0) + (n >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 0x3ffffff),
            (i = Math.imul(C, Z)),
            (n = ((n = Math.imul(C, D)) + Math.imul(L, Z)) | 0),
            (o = Math.imul(L, D)),
            (i = (i + Math.imul(F, W)) | 0),
            (n = ((n = (n + Math.imul(F, z)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, z)) | 0),
            (i = (i + Math.imul(k, $)) | 0),
            (n = ((n = (n + Math.imul(k, H)) | 0) + Math.imul(I, $)) | 0),
            (o = (o + Math.imul(I, H)) | 0),
            (i = (i + Math.imul(E, K)) | 0),
            (n = ((n = (n + Math.imul(E, Q)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, Q)) | 0),
            (i = (i + Math.imul(P, Y)) | 0),
            (n = ((n = (n + Math.imul(P, tt)) | 0) + Math.imul(O, Y)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (i = (i + Math.imul(A, te)) | 0),
            (n = ((n = (n + Math.imul(A, ti)) | 0) + Math.imul(_, te)) | 0),
            (o = (o + Math.imul(_, ti)) | 0),
            (i = (i + Math.imul(w, to)) | 0),
            (n = ((n = (n + Math.imul(w, ts)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, ts)) | 0),
            (i = (i + Math.imul(g, ta)) | 0),
            (n = ((n = (n + Math.imul(g, tu)) | 0) + Math.imul(v, ta)) | 0),
            (o = (o + Math.imul(v, tu)) | 0),
            (i = (i + Math.imul(m, tl)) | 0),
            (n = ((n = (n + Math.imul(m, tp)) | 0) + Math.imul(d, tl)) | 0),
            (o = (o + Math.imul(d, tp)) | 0),
            (i = (i + Math.imul(l, tm)) | 0);
          var tS =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, td)) | 0) + Math.imul(p, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, td)) | 0) + (n >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 0x3ffffff),
            (i = Math.imul(C, W)),
            (n = ((n = Math.imul(C, z)) + Math.imul(L, W)) | 0),
            (o = Math.imul(L, z)),
            (i = (i + Math.imul(F, $)) | 0),
            (n = ((n = (n + Math.imul(F, H)) | 0) + Math.imul(T, $)) | 0),
            (o = (o + Math.imul(T, H)) | 0),
            (i = (i + Math.imul(k, K)) | 0),
            (n = ((n = (n + Math.imul(k, Q)) | 0) + Math.imul(I, K)) | 0),
            (o = (o + Math.imul(I, Q)) | 0),
            (i = (i + Math.imul(E, Y)) | 0),
            (n = ((n = (n + Math.imul(E, tt)) | 0) + Math.imul(N, Y)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (i = (i + Math.imul(P, te)) | 0),
            (n = ((n = (n + Math.imul(P, ti)) | 0) + Math.imul(O, te)) | 0),
            (o = (o + Math.imul(O, ti)) | 0),
            (i = (i + Math.imul(A, to)) | 0),
            (n = ((n = (n + Math.imul(A, ts)) | 0) + Math.imul(_, to)) | 0),
            (o = (o + Math.imul(_, ts)) | 0),
            (i = (i + Math.imul(w, ta)) | 0),
            (n = ((n = (n + Math.imul(w, tu)) | 0) + Math.imul(b, ta)) | 0),
            (o = (o + Math.imul(b, tu)) | 0),
            (i = (i + Math.imul(g, tl)) | 0),
            (n = ((n = (n + Math.imul(g, tp)) | 0) + Math.imul(v, tl)) | 0),
            (o = (o + Math.imul(v, tp)) | 0),
            (i = (i + Math.imul(m, tm)) | 0);
          var tP =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(m, td)) | 0) + Math.imul(d, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, td)) | 0) + (n >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 0x3ffffff),
            (i = Math.imul(C, $)),
            (n = ((n = Math.imul(C, H)) + Math.imul(L, $)) | 0),
            (o = Math.imul(L, H)),
            (i = (i + Math.imul(F, K)) | 0),
            (n = ((n = (n + Math.imul(F, Q)) | 0) + Math.imul(T, K)) | 0),
            (o = (o + Math.imul(T, Q)) | 0),
            (i = (i + Math.imul(k, Y)) | 0),
            (n = ((n = (n + Math.imul(k, tt)) | 0) + Math.imul(I, Y)) | 0),
            (o = (o + Math.imul(I, tt)) | 0),
            (i = (i + Math.imul(E, te)) | 0),
            (n = ((n = (n + Math.imul(E, ti)) | 0) + Math.imul(N, te)) | 0),
            (o = (o + Math.imul(N, ti)) | 0),
            (i = (i + Math.imul(P, to)) | 0),
            (n = ((n = (n + Math.imul(P, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (i = (i + Math.imul(A, ta)) | 0),
            (n = ((n = (n + Math.imul(A, tu)) | 0) + Math.imul(_, ta)) | 0),
            (o = (o + Math.imul(_, tu)) | 0),
            (i = (i + Math.imul(w, tl)) | 0),
            (n = ((n = (n + Math.imul(w, tp)) | 0) + Math.imul(b, tl)) | 0),
            (o = (o + Math.imul(b, tp)) | 0),
            (i = (i + Math.imul(g, tm)) | 0);
          var tO =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(g, td)) | 0) + Math.imul(v, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(v, td)) | 0) + (n >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 0x3ffffff),
            (i = Math.imul(C, K)),
            (n = ((n = Math.imul(C, Q)) + Math.imul(L, K)) | 0),
            (o = Math.imul(L, Q)),
            (i = (i + Math.imul(F, Y)) | 0),
            (n = ((n = (n + Math.imul(F, tt)) | 0) + Math.imul(T, Y)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (i = (i + Math.imul(k, te)) | 0),
            (n = ((n = (n + Math.imul(k, ti)) | 0) + Math.imul(I, te)) | 0),
            (o = (o + Math.imul(I, ti)) | 0),
            (i = (i + Math.imul(E, to)) | 0),
            (n = ((n = (n + Math.imul(E, ts)) | 0) + Math.imul(N, to)) | 0),
            (o = (o + Math.imul(N, ts)) | 0),
            (i = (i + Math.imul(P, ta)) | 0),
            (n = ((n = (n + Math.imul(P, tu)) | 0) + Math.imul(O, ta)) | 0),
            (o = (o + Math.imul(O, tu)) | 0),
            (i = (i + Math.imul(A, tl)) | 0),
            (n = ((n = (n + Math.imul(A, tp)) | 0) + Math.imul(_, tl)) | 0),
            (o = (o + Math.imul(_, tp)) | 0),
            (i = (i + Math.imul(w, tm)) | 0);
          var tj =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, td)) | 0) + Math.imul(b, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, td)) | 0) + (n >>> 13)) | 0) +
              (tj >>> 26)) |
            0),
            (tj &= 0x3ffffff),
            (i = Math.imul(C, Y)),
            (n = ((n = Math.imul(C, tt)) + Math.imul(L, Y)) | 0),
            (o = Math.imul(L, tt)),
            (i = (i + Math.imul(F, te)) | 0),
            (n = ((n = (n + Math.imul(F, ti)) | 0) + Math.imul(T, te)) | 0),
            (o = (o + Math.imul(T, ti)) | 0),
            (i = (i + Math.imul(k, to)) | 0),
            (n = ((n = (n + Math.imul(k, ts)) | 0) + Math.imul(I, to)) | 0),
            (o = (o + Math.imul(I, ts)) | 0),
            (i = (i + Math.imul(E, ta)) | 0),
            (n = ((n = (n + Math.imul(E, tu)) | 0) + Math.imul(N, ta)) | 0),
            (o = (o + Math.imul(N, tu)) | 0),
            (i = (i + Math.imul(P, tl)) | 0),
            (n = ((n = (n + Math.imul(P, tp)) | 0) + Math.imul(O, tl)) | 0),
            (o = (o + Math.imul(O, tp)) | 0),
            (i = (i + Math.imul(A, tm)) | 0);
          var tE =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, td)) | 0) + Math.imul(_, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(_, td)) | 0) + (n >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 0x3ffffff),
            (i = Math.imul(C, te)),
            (n = ((n = Math.imul(C, ti)) + Math.imul(L, te)) | 0),
            (o = Math.imul(L, ti)),
            (i = (i + Math.imul(F, to)) | 0),
            (n = ((n = (n + Math.imul(F, ts)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ts)) | 0),
            (i = (i + Math.imul(k, ta)) | 0),
            (n = ((n = (n + Math.imul(k, tu)) | 0) + Math.imul(I, ta)) | 0),
            (o = (o + Math.imul(I, tu)) | 0),
            (i = (i + Math.imul(E, tl)) | 0),
            (n = ((n = (n + Math.imul(E, tp)) | 0) + Math.imul(N, tl)) | 0),
            (o = (o + Math.imul(N, tp)) | 0),
            (i = (i + Math.imul(P, tm)) | 0);
          var tN =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(P, td)) | 0) + Math.imul(O, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(O, td)) | 0) + (n >>> 13)) | 0) +
              (tN >>> 26)) |
            0),
            (tN &= 0x3ffffff),
            (i = Math.imul(C, to)),
            (n = ((n = Math.imul(C, ts)) + Math.imul(L, to)) | 0),
            (o = Math.imul(L, ts)),
            (i = (i + Math.imul(F, ta)) | 0),
            (n = ((n = (n + Math.imul(F, tu)) | 0) + Math.imul(T, ta)) | 0),
            (o = (o + Math.imul(T, tu)) | 0),
            (i = (i + Math.imul(k, tl)) | 0),
            (n = ((n = (n + Math.imul(k, tp)) | 0) + Math.imul(I, tl)) | 0),
            (o = (o + Math.imul(I, tp)) | 0),
            (i = (i + Math.imul(E, tm)) | 0);
          var tR =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(E, td)) | 0) + Math.imul(N, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(N, td)) | 0) + (n >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 0x3ffffff),
            (i = Math.imul(C, ta)),
            (n = ((n = Math.imul(C, tu)) + Math.imul(L, ta)) | 0),
            (o = Math.imul(L, tu)),
            (i = (i + Math.imul(F, tl)) | 0),
            (n = ((n = (n + Math.imul(F, tp)) | 0) + Math.imul(T, tl)) | 0),
            (o = (o + Math.imul(T, tp)) | 0),
            (i = (i + Math.imul(k, tm)) | 0);
          var tk =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(k, td)) | 0) + Math.imul(I, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(I, td)) | 0) + (n >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 0x3ffffff),
            (i = Math.imul(C, tl)),
            (n = ((n = Math.imul(C, tp)) + Math.imul(L, tl)) | 0),
            (o = Math.imul(L, tp)),
            (i = (i + Math.imul(F, tm)) | 0);
          var tI =
            (((u + i) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(F, td)) | 0) + Math.imul(T, tm)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(T, td)) | 0) + (n >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 0x3ffffff),
            (i = Math.imul(C, tm));
          var tB =
            (((u + i) | 0) +
              ((8191 & (n = ((n = Math.imul(C, td)) + Math.imul(L, tm)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(L, td)) + (n >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 0x3ffffff),
            (a[0] = ty),
            (a[1] = tg),
            (a[2] = tv),
            (a[3] = tM),
            (a[4] = tw),
            (a[5] = tb),
            (a[6] = tx),
            (a[7] = tA),
            (a[8] = t_),
            (a[9] = tS),
            (a[10] = tP),
            (a[11] = tO),
            (a[12] = tj),
            (a[13] = tE),
            (a[14] = tN),
            (a[15] = tR),
            (a[16] = tk),
            (a[17] = tI),
            (a[18] = tB),
            0 !== u && ((a[19] = u), e.length++),
            e
          );
        };
        function g(t, r, e) {
          (e.negative = r.negative ^ t.negative),
            (e.length = t.length + r.length);
          for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
            var s = n;
            n = 0;
            for (
              var h = 0x3ffffff & i,
                a = Math.min(o, r.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= a;
              u++
            ) {
              var f = o - u,
                l = (0 | t.words[f]) * (0 | r.words[u]),
                p = 0x3ffffff & l;
              (s = (s + ((l / 0x4000000) | 0)) | 0),
                (h = 0x3ffffff & (p = (p + h) | 0)),
                (n += (s = (s + (p >>> 26)) | 0) >>> 26),
                (s &= 0x3ffffff);
            }
            (e.words[o] = h), (i = s), (s = n);
          }
          return 0 !== i ? (e.words[o] = i) : e.length--, e._strip();
        }
        function v(t, r) {
          (this.x = t), (this.y = r);
        }
        Math.imul || (y = d),
          (o.prototype.mulTo = function (t, r) {
            var e,
              i = this.length + t.length;
            return (
              10 === this.length && 10 === t.length
                ? (e = y(this, t, r))
                : i < 63
                ? (e = d(this, t, r))
                : (e = g(this, t, r)),
              e
            );
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var r = Array(t), e = o.prototype._countBits(t) - 1, i = 0;
              i < t;
              i++
            )
              r[i] = this.revBin(i, e, t);
            return r;
          }),
          (v.prototype.revBin = function (t, r, e) {
            if (0 === t || t === e - 1) return t;
            for (var i = 0, n = 0; n < r; n++)
              (i |= (1 & t) << (r - n - 1)), (t >>= 1);
            return i;
          }),
          (v.prototype.permute = function (t, r, e, i, n, o) {
            for (var s = 0; s < o; s++) (i[s] = r[t[s]]), (n[s] = e[t[s]]);
          }),
          (v.prototype.transform = function (t, r, e, i, n, o) {
            this.permute(o, t, r, e, i, n);
            for (var s = 1; s < n; s <<= 1)
              for (
                var h = s << 1,
                  a = Math.cos((2 * Math.PI) / h),
                  u = Math.sin((2 * Math.PI) / h),
                  f = 0;
                f < n;
                f += h
              )
                for (var l = a, p = u, c = 0; c < s; c++) {
                  var m = e[f + c],
                    d = i[f + c],
                    y = e[f + c + s],
                    g = i[f + c + s],
                    v = l * y - p * g;
                  (g = l * g + p * y),
                    (y = v),
                    (e[f + c] = m + y),
                    (i[f + c] = d + g),
                    (e[f + c + s] = m - y),
                    (i[f + c + s] = d - g),
                    c !== h &&
                      ((v = a * l - u * p), (p = a * p + u * l), (l = v));
                }
          }),
          (v.prototype.guessLen13b = function (t, r) {
            var e = 1 | Math.max(r, t),
              i = 1 & e,
              n = 0;
            for (e = (e / 2) | 0; e; e >>>= 1) n++;
            return 1 << (n + 1 + i);
          }),
          (v.prototype.conjugate = function (t, r, e) {
            if (!(e <= 1))
              for (var i = 0; i < e / 2; i++) {
                var n = t[i];
                (t[i] = t[e - i - 1]),
                  (t[e - i - 1] = n),
                  (n = r[i]),
                  (r[i] = -r[e - i - 1]),
                  (r[e - i - 1] = -n);
              }
          }),
          (v.prototype.normalize13b = function (t, r) {
            for (var e = 0, i = 0; i < r / 2; i++) {
              var n =
                8192 * Math.round(t[2 * i + 1] / r) +
                Math.round(t[2 * i] / r) +
                e;
              (t[i] = 0x3ffffff & n),
                (e = n < 0x4000000 ? 0 : (n / 0x4000000) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, r, e, n) {
            for (var o = 0, s = 0; s < r; s++)
              (o += 0 | t[s]),
                (e[2 * s] = 8191 & o),
                (o >>>= 13),
                (e[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * r; s < n; ++s) e[s] = 0;
            i(0 === o), i((-8192 & o) == 0);
          }),
          (v.prototype.stub = function (t) {
            for (var r = Array(t), e = 0; e < t; e++) r[e] = 0;
            return r;
          }),
          (v.prototype.mulp = function (t, r, e) {
            var i = 2 * this.guessLen13b(t.length, r.length),
              n = this.makeRBT(i),
              o = this.stub(i),
              s = Array(i),
              h = Array(i),
              a = Array(i),
              u = Array(i),
              f = Array(i),
              l = Array(i),
              p = e.words;
            (p.length = i),
              this.convert13b(t.words, t.length, s, i),
              this.convert13b(r.words, r.length, u, i),
              this.transform(s, o, h, a, i, n),
              this.transform(u, o, f, l, i, n);
            for (var c = 0; c < i; c++) {
              var m = h[c] * f[c] - a[c] * l[c];
              (a[c] = h[c] * l[c] + a[c] * f[c]), (h[c] = m);
            }
            return (
              this.conjugate(h, a, i),
              this.transform(h, a, p, o, i, n),
              this.conjugate(p, o, i),
              this.normalize13b(p, i),
              (e.negative = t.negative ^ r.negative),
              (e.length = t.length + r.length),
              e._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var r = new o(null);
            return (r.words = Array(this.length + t.length)), this.mulTo(t, r);
          }),
          (o.prototype.mulf = function (t) {
            var r = new o(null);
            return (r.words = Array(this.length + t.length)), g(this, t, r);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var r = t < 0;
            r && (t = -t), i("number" == typeof t), i(t < 0x4000000);
            for (var e = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                s = (0x3ffffff & o) + (0x3ffffff & e);
              (e >>= 26),
                (e += ((o / 0x4000000) | 0) + (s >>> 26)),
                (this.words[n] = 0x3ffffff & s);
            }
            return (
              0 !== e && ((this.words[n] = e), this.length++),
              (this.length = 0 === t ? 1 : this.length),
              r ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var r = (function (t) {
              for (var r = Array(t.bitLength()), e = 0; e < r.length; e++) {
                var i = (e / 26) | 0,
                  n = e % 26;
                r[e] = (t.words[i] >>> n) & 1;
              }
              return r;
            })(t);
            if (0 === r.length) return new o(1);
            for (
              var e = this, i = 0;
              i < r.length && 0 === r[i];
              i++, e = e.sqr()
            );
            if (++i < r.length)
              for (var n = e.sqr(); i < r.length; i++, n = n.sqr())
                0 !== r[i] && (e = e.mul(n));
            return e;
          }),
          (o.prototype.iushln = function (t) {
            i("number" == typeof t && t >= 0);
            var r,
              e = t % 26,
              n = (t - e) / 26,
              o = (0x3ffffff >>> (26 - e)) << (26 - e);
            if (0 !== e) {
              var s = 0;
              for (r = 0; r < this.length; r++) {
                var h = this.words[r] & o,
                  a = ((0 | this.words[r]) - h) << e;
                (this.words[r] = a | s), (s = h >>> (26 - e));
              }
              s && ((this.words[r] = s), this.length++);
            }
            if (0 !== n) {
              for (r = this.length - 1; r >= 0; r--)
                this.words[r + n] = this.words[r];
              for (r = 0; r < n; r++) this.words[r] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return i(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, r, e) {
            i("number" == typeof t && t >= 0);
            var n = r ? (r - (r % 26)) / 26 : 0,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              h = 0x3ffffff ^ ((0x3ffffff >>> o) << o);
            if (((n -= s), (n = Math.max(0, n)), e)) {
              for (var a = 0; a < s; a++) e.words[a] = this.words[a];
              e.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, a = 0; a < this.length; a++)
                this.words[a] = this.words[a + s];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (a = this.length - 1; a >= 0 && (0 !== u || a >= n); a--) {
              var f = 0 | this.words[a];
              (this.words[a] = (u << (26 - o)) | (f >>> o)), (u = f & h);
            }
            return (
              e && 0 !== u && (e.words[e.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, r, e) {
            return i(0 === this.negative), this.iushrn(t, r, e);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            i("number" == typeof t && t >= 0);
            var r = t % 26,
              e = (t - r) / 26;
            return !(this.length <= e) && !!(this.words[e] & (1 << r));
          }),
          (o.prototype.imaskn = function (t) {
            i("number" == typeof t && t >= 0);
            var r = t % 26,
              e = (t - r) / 26;
            return (i(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= e)
              ? this
              : (0 !== r && e++,
                (this.length = Math.min(e, this.length)),
                0 !== r &&
                  (this.words[this.length - 1] &=
                    0x3ffffff ^ ((0x3ffffff >>> r) << r)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (i("number" == typeof t), i(t < 0x4000000), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var r = 0; r < this.length && this.words[r] >= 0x4000000; r++)
              (this.words[r] -= 0x4000000),
                r === this.length - 1
                  ? (this.words[r + 1] = 1)
                  : this.words[r + 1]++;
            return (this.length = Math.max(this.length, r + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((i("number" == typeof t), i(t < 0x4000000), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var r = 0; r < this.length && this.words[r] < 0; r++)
                (this.words[r] += 0x4000000), (this.words[r + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, r, e) {
            var n,
              o,
              s = t.length + e;
            this._expand(s);
            var h = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + e]) + h;
              var a = (0 | t.words[n]) * r;
              (o -= 0x3ffffff & a),
                (h = (o >> 26) - ((a / 0x4000000) | 0)),
                (this.words[n + e] = 0x3ffffff & o);
            }
            for (; n < this.length - e; n++)
              (h = (o = (0 | this.words[n + e]) + h) >> 26),
                (this.words[n + e] = 0x3ffffff & o);
            if (0 === h) return this._strip();
            for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
              (h = (o = -(0 | this.words[n]) + h) >> 26),
                (this.words[n] = 0x3ffffff & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, r) {
            var e,
              i = this.length - t.length,
              n = this.clone(),
              s = t,
              h = 0 | s.words[s.length - 1];
            0 != (i = 26 - this._countBits(h)) &&
              ((s = s.ushln(i)), n.iushln(i), (h = 0 | s.words[s.length - 1]));
            var a = n.length - s.length;
            if ("mod" !== r) {
              ((e = new o(null)).length = a + 1), (e.words = Array(e.length));
              for (var u = 0; u < e.length; u++) e.words[u] = 0;
            }
            var f = n.clone()._ishlnsubmul(s, 1, a);
            0 === f.negative && ((n = f), e && (e.words[a] = 1));
            for (var l = a - 1; l >= 0; l--) {
              var p =
                (0 | n.words[s.length + l]) * 0x4000000 +
                (0 | n.words[s.length + l - 1]);
              for (
                p = Math.min((p / h) | 0, 0x3ffffff), n._ishlnsubmul(s, p, l);
                0 !== n.negative;

              )
                p--,
                  (n.negative = 0),
                  n._ishlnsubmul(s, 1, l),
                  n.isZero() || (n.negative ^= 1);
              e && (e.words[l] = p);
            }
            return (
              e && e._strip(),
              n._strip(),
              "div" !== r && 0 !== i && n.iushrn(i),
              { div: e || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, r, e) {
            var n, s, h;
            return (i(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((h = this.neg().divmod(t, r)),
                "mod" !== r && (n = h.div.neg()),
                "div" !== r &&
                  ((s = h.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                { div: n, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((h = this.divmod(t.neg(), r)),
                "mod" !== r && (n = h.div.neg()),
                { div: n, mod: h.mod })
              : (this.negative & t.negative) != 0
              ? ((h = this.neg().divmod(t.neg(), r)),
                "div" !== r &&
                  ((s = h.mod.neg()), e && 0 !== s.negative && s.isub(t)),
                { div: h.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === r
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === r
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, r);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var r = this.divmod(t);
            if (r.mod.isZero()) return r.div;
            var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = e.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? r.div
              : 0 !== r.div.negative
              ? r.div.isubn(1)
              : r.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var r = t < 0;
            r && (t = -t), i(t <= 0x3ffffff);
            for (var e = 0x4000000 % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (e * n + (0 | this.words[o])) % t;
            return r ? -n : n;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var r = t < 0;
            r && (t = -t), i(t <= 0x3ffffff);
            for (var e = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 0x4000000 * e;
              (this.words[n] = (o / t) | 0), (e = o % t);
            }
            return this._strip(), r ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var r = this,
              e = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var n = new o(1), s = new o(0), h = new o(0), a = new o(1), u = 0;
              r.isEven() && e.isEven();

            )
              r.iushrn(1), e.iushrn(1), ++u;
            for (var f = e.clone(), l = r.clone(); !r.isZero(); ) {
              for (
                var p = 0, c = 1;
                (r.words[0] & c) == 0 && p < 26;
                ++p, c <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (n.isOdd() || s.isOdd()) && (n.iadd(f), s.isub(l)),
                    n.iushrn(1),
                    s.iushrn(1);
              for (
                var m = 0, d = 1;
                (e.words[0] & d) == 0 && m < 26;
                ++m, d <<= 1
              );
              if (m > 0)
                for (e.iushrn(m); m-- > 0; )
                  (h.isOdd() || a.isOdd()) && (h.iadd(f), a.isub(l)),
                    h.iushrn(1),
                    a.iushrn(1);
              r.cmp(e) >= 0
                ? (r.isub(e), n.isub(h), s.isub(a))
                : (e.isub(r), h.isub(n), a.isub(s));
            }
            return { a: h, b: a, gcd: e.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var r,
              e = this,
              n = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var s = new o(1), h = new o(0), a = n.clone();
              e.cmpn(1) > 0 && n.cmpn(1) > 0;

            ) {
              for (
                var u = 0, f = 1;
                (e.words[0] & f) == 0 && u < 26;
                ++u, f <<= 1
              );
              if (u > 0)
                for (e.iushrn(u); u-- > 0; )
                  s.isOdd() && s.iadd(a), s.iushrn(1);
              for (
                var l = 0, p = 1;
                (n.words[0] & p) == 0 && l < 26;
                ++l, p <<= 1
              );
              if (l > 0)
                for (n.iushrn(l); l-- > 0; )
                  h.isOdd() && h.iadd(a), h.iushrn(1);
              e.cmp(n) >= 0 ? (e.isub(n), s.isub(h)) : (n.isub(e), h.isub(s));
            }
            return 0 > (r = 0 === e.cmpn(1) ? s : h).cmpn(0) && r.iadd(t), r;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var r = this.clone(),
              e = t.clone();
            (r.negative = 0), (e.negative = 0);
            for (var i = 0; r.isEven() && e.isEven(); i++)
              r.iushrn(1), e.iushrn(1);
            for (;;) {
              for (; r.isEven(); ) r.iushrn(1);
              for (; e.isEven(); ) e.iushrn(1);
              var n = r.cmp(e);
              if (n < 0) {
                var o = r;
                (r = e), (e = o);
              } else if (0 === n || 0 === e.cmpn(1)) break;
              r.isub(e);
            }
            return e.iushln(i);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            i("number" == typeof t);
            var r = t % 26,
              e = (t - r) / 26,
              n = 1 << r;
            if (this.length <= e)
              return this._expand(e + 1), (this.words[e] |= n), this;
            for (var o = n, s = e; 0 !== o && s < this.length; s++) {
              var h = 0 | this.words[s];
              (h += o), (o = h >>> 26), (h &= 0x3ffffff), (this.words[s] = h);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var r,
              e = t < 0;
            if (0 !== this.negative && !e) return -1;
            if (0 === this.negative && e) return 1;
            if ((this._strip(), this.length > 1)) r = 1;
            else {
              e && (t = -t), i(t <= 0x3ffffff, "Number is too big");
              var n = 0 | this.words[0];
              r = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var r = this.ucmp(t);
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var r = 0, e = this.length - 1; e >= 0; e--) {
              var i = 0 | this.words[e],
                n = 0 | t.words[e];
              if (i !== n) {
                i < n ? (r = -1) : i > n && (r = 1);
                break;
              }
            }
            return r;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new S(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              i(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var M = { k256: null, p224: null, p192: null, p25519: null };
        function w(t, r) {
          (this.name = t),
            (this.p = new o(r, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function b() {
          w.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function x() {
          w.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function A() {
          w.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function _() {
          w.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function S(t) {
          if ("string" == typeof t) {
            var r = o._prime(t);
            (this.m = r.p), (this.prime = r);
          } else
            i(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function P(t) {
          S.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (w.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (w.prototype.ireduce = function (t) {
            var r,
              e = t;
            do
              this.split(e, this.tmp),
                (r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength());
            while (r > this.n);
            var i = r < this.n ? -1 : e.ucmp(this.p);
            return (
              0 === i
                ? ((e.words[0] = 0), (e.length = 1))
                : i > 0
                ? e.isub(this.p)
                : void 0 !== e.strip
                ? e.strip()
                : e._strip(),
              e
            );
          }),
          (w.prototype.split = function (t, r) {
            t.iushrn(this.n, 0, r);
          }),
          (w.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(b, w),
          (b.prototype.split = function (t, r) {
            for (var e = Math.min(t.length, 9), i = 0; i < e; i++)
              r.words[i] = t.words[i];
            if (((r.length = e), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var n = t.words[9];
            for (i = 10, r.words[r.length++] = 4194303 & n; i < t.length; i++) {
              var o = 0 | t.words[i];
              (t.words[i - 10] = ((4194303 & o) << 4) | (n >>> 22)), (n = o);
            }
            (n >>>= 22),
              (t.words[i - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (b.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var r = 0, e = 0; e < t.length; e++) {
              var i = 0 | t.words[e];
              (r += 977 * i),
                (t.words[e] = 0x3ffffff & r),
                (r = 64 * i + ((r / 0x4000000) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(x, w),
          n(A, w),
          n(_, w),
          (_.prototype.imulK = function (t) {
            for (var r = 0, e = 0; e < t.length; e++) {
              var i = (0 | t.words[e]) * 19 + r,
                n = 0x3ffffff & i;
              (i >>>= 26), (t.words[e] = n), (r = i);
            }
            return 0 !== r && (t.words[t.length++] = r), t;
          }),
          (o._prime = function (t) {
            var r;
            if (M[t]) return M[t];
            if ("k256" === t) r = new b();
            else if ("p224" === t) r = new x();
            else if ("p192" === t) r = new A();
            else if ("p25519" === t) r = new _();
            else throw Error("Unknown prime " + t);
            return (M[t] = r), r;
          }),
          (S.prototype._verify1 = function (t) {
            i(0 === t.negative, "red works only with positives"),
              i(t.red, "red works only with red numbers");
          }),
          (S.prototype._verify2 = function (t, r) {
            i((t.negative | r.negative) == 0, "red works only with positives"),
              i(t.red && t.red === r.red, "red works only with red numbers");
          }),
          (S.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (u(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (S.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (S.prototype.add = function (t, r) {
            this._verify2(t, r);
            var e = t.add(r);
            return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
          }),
          (S.prototype.iadd = function (t, r) {
            this._verify2(t, r);
            var e = t.iadd(r);
            return e.cmp(this.m) >= 0 && e.isub(this.m), e;
          }),
          (S.prototype.sub = function (t, r) {
            this._verify2(t, r);
            var e = t.sub(r);
            return 0 > e.cmpn(0) && e.iadd(this.m), e._forceRed(this);
          }),
          (S.prototype.isub = function (t, r) {
            this._verify2(t, r);
            var e = t.isub(r);
            return 0 > e.cmpn(0) && e.iadd(this.m), e;
          }),
          (S.prototype.shl = function (t, r) {
            return this._verify1(t), this.imod(t.ushln(r));
          }),
          (S.prototype.imul = function (t, r) {
            return this._verify2(t, r), this.imod(t.imul(r));
          }),
          (S.prototype.mul = function (t, r) {
            return this._verify2(t, r), this.imod(t.mul(r));
          }),
          (S.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (S.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (S.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var r = this.m.andln(3);
            if ((i(r % 2 == 1), 3 === r)) {
              var e = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, e);
            }
            for (
              var n = this.m.subn(1), s = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              s++, n.iushrn(1);
            i(!n.isZero());
            var h = new o(1).toRed(this),
              a = h.redNeg(),
              u = this.m.subn(1).iushrn(1),
              f = this.m.bitLength();
            for (
              f = new o(2 * f * f).toRed(this);
              0 !== this.pow(f, u).cmp(a);

            )
              f.redIAdd(a);
            for (
              var l = this.pow(f, n),
                p = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                m = s;
              0 !== c.cmp(h);

            ) {
              for (var d = c, y = 0; 0 !== d.cmp(h); y++) d = d.redSqr();
              i(y < m);
              var g = this.pow(l, new o(1).iushln(m - y - 1));
              (p = p.redMul(g)), (l = g.redSqr()), (c = c.redMul(l)), (m = y);
            }
            return p;
          }),
          (S.prototype.invm = function (t) {
            var r = t._invmp(this.m);
            return 0 !== r.negative
              ? ((r.negative = 0), this.imod(r).redNeg())
              : this.imod(r);
          }),
          (S.prototype.pow = function (t, r) {
            if (r.isZero()) return new o(1).toRed(this);
            if (0 === r.cmpn(1)) return t.clone();
            var e = Array(16);
            (e[0] = new o(1).toRed(this)), (e[1] = t);
            for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
            var n = e[0],
              s = 0,
              h = 0,
              a = r.bitLength() % 26;
            for (0 === a && (a = 26), i = r.length - 1; i >= 0; i--) {
              for (var u = r.words[i], f = a - 1; f >= 0; f--) {
                var l = (u >> f) & 1;
                if ((n !== e[0] && (n = this.sqr(n)), 0 === l && 0 === s)) {
                  h = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= l),
                  (4 == ++h || (0 === i && 0 === f)) &&
                    ((n = this.mul(n, e[s])), (h = 0), (s = 0));
              }
              a = 26;
            }
            return n;
          }),
          (S.prototype.convertTo = function (t) {
            var r = t.umod(this.m);
            return r === t ? r.clone() : r;
          }),
          (S.prototype.convertFrom = function (t) {
            var r = t.clone();
            return (r.red = null), r;
          }),
          (o.mont = function (t) {
            return new P(t);
          }),
          n(P, S),
          (P.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (P.prototype.convertFrom = function (t) {
            var r = this.imod(t.mul(this.rinv));
            return (r.red = null), r;
          }),
          (P.prototype.imul = function (t, r) {
            if (t.isZero() || r.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var e = t.imul(r),
              i = e
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = e.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (P.prototype.mul = function (t, r) {
            if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
            var e = t.mul(r),
              i = e
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = e.isub(i).iushrn(this.shift),
              s = n;
            return (
              n.cmp(this.m) >= 0
                ? (s = n.isub(this.m))
                : 0 > n.cmpn(0) && (s = n.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (P.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = e.nmd(t)), this);
    },
    92678: (t) => {
      "use strict";
      t.exports = "undefined" != typeof Reflect && Reflect && Reflect.apply;
    },
    97968: (t) => {
      "use strict";
      t.exports = URIError;
    },
  },
]);
