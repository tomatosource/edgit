parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    dDsU: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return "[object Object]" === Object.prototype.toString.call(t);
        }
        function e(e) {
          var o, r;
          return (
            !1 !== t(e) &&
            (void 0 === (o = e.constructor) ||
              (!1 !== t((r = o.prototype)) &&
                !1 !== r.hasOwnProperty("isPrototypeOf")))
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isPlainObject = e);
      },
      {},
    ],
    g5IB: [
      function (require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      {},
    ],
    b17p: [
      function (require, module, exports) {
        var process = require("process");
        var e = require("process");
        function r() {
          return "object" == typeof navigator && "userAgent" in navigator
            ? navigator.userAgent
            : "object" == typeof e && "version" in e
            ? `Node.js/${e.version.substr(1)} (${e.platform}; ${e.arch})`
            : "<environment undetectable>";
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getUserAgent = r);
      },
      { process: "g5IB" },
    ],
    canr: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.endpoint = void 0);
        var e = require("is-plain-object"),
          t = require("universal-user-agent");
        function n(e) {
          return e
            ? Object.keys(e).reduce(
                (t, n) => ((t[n.toLowerCase()] = e[n]), t),
                {}
              )
            : {};
        }
        function r(t, n) {
          const i = Object.assign({}, t);
          return (
            Object.keys(n).forEach((o) => {
              (0, e.isPlainObject)(n[o]) && o in t
                ? (i[o] = r(t[o], n[o]))
                : Object.assign(i, { [o]: n[o] });
            }),
            i
          );
        }
        function i(e) {
          for (const t in e) void 0 === e[t] && delete e[t];
          return e;
        }
        function o(e, t, o) {
          if ("string" == typeof t) {
            let [e, n] = t.split(" ");
            o = Object.assign(n ? { method: e, url: n } : { url: e }, o);
          } else o = Object.assign({}, t);
          (o.headers = n(o.headers)), i(o), i(o.headers);
          const s = r(e || {}, o);
          return (
            e &&
              e.mediaType.previews.length &&
              (s.mediaType.previews = e.mediaType.previews
                .filter((e) => !s.mediaType.previews.includes(e))
                .concat(s.mediaType.previews)),
            (s.mediaType.previews = s.mediaType.previews.map((e) =>
              e.replace(/-preview/, "")
            )),
            s
          );
        }
        function s(e, t) {
          const n = /\?/.test(e) ? "&" : "?",
            r = Object.keys(t);
          return 0 === r.length
            ? e
            : e +
                n +
                r
                  .map((e) =>
                    "q" === e
                      ? "q=" + t.q.split("+").map(encodeURIComponent).join("+")
                      : `${e}=${encodeURIComponent(t[e])}`
                  )
                  .join("&");
        }
        const c = /\{[^}]+\}/g;
        function a(e) {
          return e.replace(/^\W+|\W+$/g, "").split(/,/);
        }
        function p(e) {
          const t = e.match(c);
          return t ? t.map(a).reduce((e, t) => e.concat(t), []) : [];
        }
        function u(e, t) {
          return Object.keys(e)
            .filter((e) => !t.includes(e))
            .reduce((t, n) => ((t[n] = e[n]), t), {});
        }
        function l(e) {
          return e
            .split(/(%[0-9A-Fa-f]{2})/g)
            .map(function (e) {
              return (
                /%[0-9A-Fa-f]/.test(e) ||
                  (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")),
                e
              );
            })
            .join("");
        }
        function d(e) {
          return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        function f(e, t, n) {
          return (
            (t = "+" === e || "#" === e ? l(t) : d(t)), n ? d(n) + "=" + t : t
          );
        }
        function h(e) {
          return null != e;
        }
        function m(e) {
          return ";" === e || "&" === e || "?" === e;
        }
        function g(e, t, n, r) {
          var i = e[n],
            o = [];
          if (h(i) && "" !== i)
            if (
              "string" == typeof i ||
              "number" == typeof i ||
              "boolean" == typeof i
            )
              (i = i.toString()),
                r && "*" !== r && (i = i.substring(0, parseInt(r, 10))),
                o.push(f(t, i, m(t) ? n : ""));
            else if ("*" === r)
              Array.isArray(i)
                ? i.filter(h).forEach(function (e) {
                    o.push(f(t, e, m(t) ? n : ""));
                  })
                : Object.keys(i).forEach(function (e) {
                    h(i[e]) && o.push(f(t, i[e], e));
                  });
            else {
              const e = [];
              Array.isArray(i)
                ? i.filter(h).forEach(function (n) {
                    e.push(f(t, n));
                  })
                : Object.keys(i).forEach(function (n) {
                    h(i[n]) && (e.push(d(n)), e.push(f(t, i[n].toString())));
                  }),
                m(t)
                  ? o.push(d(n) + "=" + e.join(","))
                  : 0 !== e.length && o.push(e.join(","));
            }
          else
            ";" === t
              ? h(i) && o.push(d(n))
              : "" !== i || ("&" !== t && "?" !== t)
              ? "" === i && o.push("")
              : o.push(d(n) + "=");
          return o;
        }
        function y(e) {
          return { expand: b.bind(null, e) };
        }
        function b(e, t) {
          var n = ["+", "#", ".", "/", ";", "?", "&"];
          return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, r, i) {
            if (r) {
              let e = "";
              const i = [];
              if (
                (-1 !== n.indexOf(r.charAt(0)) &&
                  ((e = r.charAt(0)), (r = r.substr(1))),
                r.split(/,/g).forEach(function (n) {
                  var r = /([^:\*]*)(?::(\d+)|(\*))?/.exec(n);
                  i.push(g(t, e, r[1], r[2] || r[3]));
                }),
                e && "+" !== e)
              ) {
                var o = ",";
                return (
                  "?" === e ? (o = "&") : "#" !== e && (o = e),
                  (0 !== i.length ? e : "") + i.join(o)
                );
              }
              return i.join(",");
            }
            return l(i);
          });
        }
        function j(e) {
          let t,
            n = e.method.toUpperCase(),
            r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"),
            i = Object.assign({}, e.headers),
            o = u(e, [
              "method",
              "baseUrl",
              "url",
              "headers",
              "request",
              "mediaType",
            ]);
          const c = p(r);
          (r = y(r).expand(o)), /^http/.test(r) || (r = e.baseUrl + r);
          const a = u(
            o,
            Object.keys(e)
              .filter((e) => c.includes(e))
              .concat("baseUrl")
          );
          if (
            !/application\/octet-stream/i.test(i.accept) &&
            (e.mediaType.format &&
              (i.accept = i.accept
                .split(/,/)
                .map((t) =>
                  t.replace(
                    /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                    `application/vnd$1$2.${e.mediaType.format}`
                  )
                )
                .join(",")),
            e.mediaType.previews.length)
          ) {
            const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
            i.accept = t
              .concat(e.mediaType.previews)
              .map((t) => {
                return `application/vnd.github.${t}-preview${
                  e.mediaType.format ? `.${e.mediaType.format}` : "+json"
                }`;
              })
              .join(",");
          }
          return (
            ["GET", "HEAD"].includes(n)
              ? (r = s(r, a))
              : "data" in a
              ? (t = a.data)
              : Object.keys(a).length
              ? (t = a)
              : (i["content-length"] = 0),
            i["content-type"] ||
              void 0 === t ||
              (i["content-type"] = "application/json; charset=utf-8"),
            ["PATCH", "PUT"].includes(n) && void 0 === t && (t = ""),
            Object.assign(
              { method: n, url: r, headers: i },
              void 0 !== t ? { body: t } : null,
              e.request ? { request: e.request } : null
            )
          );
        }
        function v(e, t, n) {
          return j(o(e, t, n));
        }
        function T(e, t) {
          const n = o(e, t),
            r = v.bind(null, n);
          return Object.assign(r, {
            DEFAULTS: n,
            defaults: T.bind(null, n),
            merge: o.bind(null, n),
            parse: j,
          });
        }
        const w = "6.0.12",
          O = `octokit-endpoint.js/6.0.12 ${(0, t.getUserAgent)()}`,
          A = {
            method: "GET",
            baseUrl: "https://api.github.com",
            headers: {
              accept: "application/vnd.github.v3+json",
              "user-agent": O,
            },
            mediaType: { format: "", previews: [] },
          },
          U = T(null, A);
        exports.endpoint = U;
      },
      { "is-plain-object": "dDsU", "universal-user-agent": "b17p" },
    ],
    z2hx: [
      function (require, module, exports) {
        "use strict";
        var e = function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== t) return t;
            throw new Error("unable to locate global object");
          },
          t = e();
        (module.exports = exports = t.fetch),
          t.fetch && (exports.default = t.fetch.bind(t)),
          (exports.Headers = t.Headers),
          (exports.Request = t.Request),
          (exports.Response = t.Response);
      },
      {},
    ],
    IlKR: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Deprecation = void 0);
        class r extends Error {
          constructor(r) {
            super(r),
              Error.captureStackTrace &&
                Error.captureStackTrace(this, this.constructor),
              (this.name = "Deprecation");
          }
        }
        exports.Deprecation = r;
      },
      {},
    ],
    lhXj: [
      function (require, module, exports) {
        function n(e, r) {
          if (e && r) return n(e)(r);
          if ("function" != typeof e)
            throw new TypeError("need wrapper function");
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = e[n];
            }),
            t
          );
          function t() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            var t = e.apply(this, n),
              o = n[n.length - 1];
            return (
              "function" == typeof t &&
                t !== o &&
                Object.keys(o).forEach(function (n) {
                  t[n] = o[n];
                }),
              t
            );
          }
        }
        module.exports = n;
      },
      {},
    ],
    Z8tK: [
      function (require, module, exports) {
        var e = require("wrappy");
        function r(e) {
          var r = function () {
            return r.called
              ? r.value
              : ((r.called = !0), (r.value = e.apply(this, arguments)));
          };
          return (r.called = !1), r;
        }
        function n(e) {
          var r = function () {
              if (r.called) throw new Error(r.onceError);
              return (r.called = !0), (r.value = e.apply(this, arguments));
            },
            n = e.name || "Function wrapped with `once`";
          return (
            (r.onceError = n + " shouldn't be called more than once"),
            (r.called = !1),
            r
          );
        }
        (module.exports = e(r)),
          (module.exports.strict = e(n)),
          (r.proto = r(function () {
            Object.defineProperty(Function.prototype, "once", {
              value: function () {
                return r(this);
              },
              configurable: !0,
            }),
              Object.defineProperty(Function.prototype, "onceStrict", {
                value: function () {
                  return n(this);
                },
                configurable: !0,
              });
          }));
      },
      { wrappy: "lhXj" },
    ],
    mGTl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.RequestError = void 0);
        var e = require("deprecation"),
          r = t(require("once"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const s = (0, r.default)((e) => console.warn(e)),
          o = (0, r.default)((e) => console.warn(e));
        class a extends Error {
          constructor(r, t, a) {
            let c;
            super(r),
              Error.captureStackTrace &&
                Error.captureStackTrace(this, this.constructor),
              (this.name = "HttpError"),
              (this.status = t),
              "headers" in a && void 0 !== a.headers && (c = a.headers),
              "response" in a &&
                ((this.response = a.response), (c = a.response.headers));
            const n = Object.assign({}, a.request);
            a.request.headers.authorization &&
              (n.headers = Object.assign({}, a.request.headers, {
                authorization: a.request.headers.authorization.replace(
                  / .*$/,
                  " [REDACTED]"
                ),
              })),
              (n.url = n.url
                .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
                .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
              (this.request = n),
              Object.defineProperty(this, "code", {
                get: () => (
                  s(
                    new e.Deprecation(
                      "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                    )
                  ),
                  t
                ),
              }),
              Object.defineProperty(this, "headers", {
                get: () => (
                  o(
                    new e.Deprecation(
                      "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
                    )
                  ),
                  c || {}
                ),
              });
          }
        }
        exports.RequestError = a;
      },
      { deprecation: "IlKR", once: "Z8tK" },
    ],
    xaJC: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.request = void 0);
        var e = require("@octokit/endpoint"),
          t = require("universal-user-agent"),
          r = require("is-plain-object"),
          s = o(require("node-fetch")),
          n = require("@octokit/request-error");
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const u = "5.6.0";
        function i(e) {
          return e.arrayBuffer();
        }
        function a(e) {
          const t = e.request && e.request.log ? e.request.log : console;
          ((0, r.isPlainObject)(e.body) || Array.isArray(e.body)) &&
            (e.body = JSON.stringify(e.body));
          let o,
            u,
            i = {};
          return ((e.request && e.request.fetch) || s.default)(
            e.url,
            Object.assign(
              {
                method: e.method,
                body: e.body,
                headers: e.headers,
                redirect: e.redirect,
              },
              e.request
            )
          )
            .then(async (r) => {
              (u = r.url), (o = r.status);
              for (const e of r.headers) i[e[0]] = e[1];
              if ("deprecation" in i) {
                const r =
                    i.link && i.link.match(/<([^>]+)>; rel="deprecation"/),
                  s = r && r.pop();
                t.warn(
                  `[@octokit/request] "${e.method} ${
                    e.url
                  }" is deprecated. It is scheduled to be removed on ${
                    i.sunset
                  }${s ? `. See ${s}` : ""}`
                );
              }
              if (204 !== o && 205 !== o) {
                if ("HEAD" === e.method) {
                  if (o < 400) return;
                  throw new n.RequestError(r.statusText, o, {
                    response: { url: u, status: o, headers: i, data: void 0 },
                    request: e,
                  });
                }
                if (304 === o)
                  throw new n.RequestError("Not modified", o, {
                    response: {
                      url: u,
                      status: o,
                      headers: i,
                      data: await d(r),
                    },
                    request: e,
                  });
                if (o >= 400) {
                  const t = await d(r);
                  throw new n.RequestError(c(t), o, {
                    response: { url: u, status: o, headers: i, data: t },
                    request: e,
                  });
                }
                return d(r);
              }
            })
            .then((e) => ({ status: o, url: u, headers: i, data: e }))
            .catch((t) => {
              if (t instanceof n.RequestError) throw t;
              throw new n.RequestError(t.message, 500, { request: e });
            });
        }
        async function d(e) {
          const t = e.headers.get("content-type");
          return /application\/json/.test(t)
            ? e.json()
            : !t || /^text\/|charset=utf-8$/.test(t)
            ? e.text()
            : i(e);
        }
        function c(e) {
          return "string" == typeof e
            ? e
            : "message" in e
            ? Array.isArray(e.errors)
              ? `${e.message}: ${e.errors.map(JSON.stringify).join(", ")}`
              : e.message
            : `Unknown error: ${JSON.stringify(e)}`;
        }
        function f(e, t) {
          const r = e.defaults(t);
          return Object.assign(
            function (e, t) {
              const s = r.merge(e, t);
              if (!s.request || !s.request.hook) return a(r.parse(s));
              const n = (e, t) => a(r.parse(r.merge(e, t)));
              return (
                Object.assign(n, { endpoint: r, defaults: f.bind(null, r) }),
                s.request.hook(n, s)
              );
            },
            { endpoint: r, defaults: f.bind(null, r) }
          );
        }
        const l = f(e.endpoint, {
          headers: {
            "user-agent": `octokit-request.js/5.6.0 ${(0, t.getUserAgent)()}`,
          },
        });
        exports.request = l;
      },
      {
        "@octokit/endpoint": "canr",
        "universal-user-agent": "b17p",
        "is-plain-object": "dDsU",
        "node-fetch": "z2hx",
        "@octokit/request-error": "mGTl",
      },
    ],
    QCba: [
      function (require, module, exports) {
        "use strict";
        var t =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, a) {
                function i(t) {
                  try {
                    u(r.next(t));
                  } catch (e) {
                    a(e);
                  }
                }
                function c(t) {
                  try {
                    u(r.throw(t));
                  } catch (e) {
                    a(e);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(i, c);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          e =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                a,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: c(0), throw: c(1), return: c(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function c(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !(o =
                                (o = i.trys).length > 0 && o[o.length - 1]) &&
                              (6 === a[0] || 2 === a[0])
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < o[1]) {
                              (i.label = o[1]), (o = a);
                              break;
                            }
                            if (o && i.label < o[2]) {
                              (i.label = o[2]), i.ops.push(a);
                              break;
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = e.call(t, i);
                      } catch (c) {
                        (a = [6, c]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var n = require("@octokit/request"),
          r = "token_storage_key";
        function o() {
          return t(this, void 0, void 0, function () {
            var o,
              a,
              i,
              c,
              u,
              s = this;
            return e(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (o = localStorage.getItem(r)) ||
                      ((o = window.prompt("token pls")),
                      localStorage.setItem(r, o)),
                    [
                      4,
                      n.request(
                        "GET /repos/tomatosource/todo/contents/todo.md",
                        { headers: { authorization: "token " + o } }
                      ),
                    ]
                  );
                case 1:
                  return (
                    (a = l.sent()),
                    (i = atob(a.data.content)),
                    ((c = document.getElementById("textarea")).textContent = i),
                    (u = i),
                    setInterval(function () {
                      return t(s, void 0, void 0, function () {
                        var t;
                        return e(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (t = c.value) == u
                                ? [3, 2]
                                : [
                                    4,
                                    n.request(
                                      "PUT /repos/tomatosource/todo/contents/todo.md",
                                      {
                                        headers: {
                                          authorization: "token " + o,
                                        },
                                        message: "update todo.md",
                                        content: btoa(i),
                                        sha: a.data.sha,
                                      }
                                    ),
                                  ];
                            case 1:
                              e.sent(), (u = t), (e.label = 2);
                            case 2:
                              return [2];
                          }
                        });
                      });
                    }, 5e3),
                    [2]
                  );
              }
            });
          });
        }
        o(),
          "serviceWorker" in navigator &&
            navigator.serviceWorker.register("sw.js");
      },
      {
        "@octokit/request": "xaJC",
        ".sw.js": [["sw.js", "NqYy"], "sw.js.map", "NqYy"],
      },
    ],
  },
  {},
  ["QCba"],
  null
);
//# sourceMappingURL=/index.js.map

