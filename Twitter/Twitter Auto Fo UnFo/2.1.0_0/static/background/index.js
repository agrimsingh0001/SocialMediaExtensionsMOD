var e, t;
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
    (function (t, r, n, o, i) {
        var a =
                "undefined" != typeof globalThis
                    ? globalThis
                    : "undefined" != typeof self
                        ? self
                        : "undefined" != typeof window
                            ? window
                            : "undefined" != typeof global
                                ? global
                                : {},
            s = "function" == typeof a[o] && a[o],
            u = s.cache || {},
            c = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
        function l(e, r) {
            if (!u[e]) {
                if (!t[e]) {
                    var n = "function" == typeof a[o] && a[o];
                    if (!r && n) return n(e, !0);
                    if (s) return s(e, !0);
                    if (c && "string" == typeof e) return c(e);
                    var i = Error("Cannot find module '" + e + "'");
                    throw ((i.code = "MODULE_NOT_FOUND"), i);
                }
                (d.resolve = function (r) {
                    var n = t[e][1][r];
                    return null != n ? n : r;
                }),
                    (d.cache = {});
                var f = (u[e] = new l.Module(e));
                t[e][0].call(f.exports, d, f, f.exports, this);
            }
            return u[e].exports;
            function d(e) {
                var t = d.resolve(e);
                return !1 === t ? {} : l(t);
            }
        }
        (l.isParcelRequire = !0),
            (l.Module = function (e) {
                (this.id = e), (this.bundle = l), (this.exports = {});
            }),
            (l.modules = t),
            (l.cache = u),
            (l.parent = s),
            (l.register = function (e, r) {
                t[e] = [
                    function (e, t) {
                        t.exports = r;
                    },
                    {},
                ];
            }),
            Object.defineProperty(l, "root", {
                get: function () {
                    return a[o];
                },
            }),
            (a[o] = l);
        for (var f = 0; f < r.length; f++) l(r[f]);
        if (n) {
            var d = l(n);
            "object" == typeof exports && "undefined" != typeof module
                ? (module.exports = d)
                : "function" == typeof e && e.amd
                    ? e(function () {
                        return d;
                    })
                    : i && (this[i] = d);
        }
    })(
        {
            kgW6q: [
                function (e, t, r) {
                    e("../../../src/background");
                },
                { "../../../src/background": "fx8Od" },
            ],
            fx8Od: [
                function (e, t, r) {
                    async function n(e, t) {
                        await chrome.alarms.create(e, { delayInMinutes: t });
                    }
                    e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
                        chrome.runtime.onMessage.addListener((e, t, r) => {
                            if ("signInWithGoogle" === e.action) {
                                let e = chrome.runtime.getManifest(),
                                    t = new URL("https://accounts.google.com/o/oauth2/auth");
                                t.searchParams.set("client_id", e.oauth2.client_id),
                                    t.searchParams.set("response_type", "id_token"),
                                    t.searchParams.set("access_type", "offline"),
                                    t.searchParams.set("redirect_uri", chrome.identity.getRedirectURL()),
                                    t.searchParams.set("scope", e.oauth2.scopes.join(" ")),
                                    chrome.identity.launchWebAuthFlow({ url: t.href, interactive: !0 }, async (e) => {
                                        if (chrome.runtime.lastError) console.log(chrome.runtime.lastError);
                                        else {
                                            let t = new URL(e),
                                                n = new URLSearchParams(t.hash.substring(1)),
                                                o = n.get("id_token");
                                            chrome.storage.local.set({ idToken: o }).then(
                                                () => {},
                                                (e) => {
                                                    console.log(`Storage idToken failed with error: ${e}`);
                                                }
                                            ),
                                                r(o);
                                        }
                                    });
                            } else "createAlarm" === e.action && n(e.name, e.delayInMinutes);
                            return !0;
                        });
                },
                { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
            ],
            hbR2Q: [
                function (e, t, r) {
                    (r.interopDefault = function (e) {
                        return e && e.__esModule ? e : { default: e };
                    }),
                        (r.defineInteropFlag = function (e) {
                            Object.defineProperty(e, "__esModule", { value: !0 });
                        }),
                        (r.exportAll = function (e, t) {
                            return (
                                Object.keys(e).forEach(function (r) {
                                    "default" === r ||
                                    "__esModule" === r ||
                                    t.hasOwnProperty(r) ||
                                    Object.defineProperty(t, r, {
                                        enumerable: !0,
                                        get: function () {
                                            return e[r];
                                        },
                                    });
                                }),
                                    t
                            );
                        }),
                        (r.export = function (e, t, r) {
                            Object.defineProperty(e, t, { enumerable: !0, get: r });
                        });
                },
                {},
            ],
        },
        ["kgW6q"],
        "kgW6q",
        "parcelRequire406c"
    ),
    (globalThis.define = t);
