var e, t;
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
    (function (t, s, r, o, n) {
            var i =
                    "undefined" != typeof globalThis
                        ? globalThis
                        : "undefined" != typeof self
                            ? self
                            : "undefined" != typeof window
                                ? window
                                : "undefined" != typeof global
                                    ? global
                                    : {},
                a = "function" == typeof i[o] && i[o],
                l = a.cache || {},
                m = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
            function u(e, s) {
                    if (!l[e]) {
                            if (!t[e]) {
                                    var r = "function" == typeof i[o] && i[o];
                                    if (!s && r) return r(e, !0);
                                    if (a) return a(e, !0);
                                    if (m && "string" == typeof e) return m(e);
                                    var n = Error("Cannot find module '" + e + "'");
                                    throw ((n.code = "MODULE_NOT_FOUND"), n);
                            }
                            (p.resolve = function (s) {
                                    var r = t[e][1][s];
                                    return null != r ? r : s;
                            }),
                                (p.cache = {});
                            var c = (l[e] = new u.Module(e));
                            t[e][0].call(c.exports, p, c, c.exports, this);
                    }
                    return l[e].exports;
                    function p(e) {
                            var t = p.resolve(e);
                            return !1 === t ? {} : u(t);
                    }
            }
            (u.isParcelRequire = !0),
                (u.Module = function (e) {
                        (this.id = e), (this.bundle = u), (this.exports = {});
                }),
                (u.modules = t),
                (u.cache = l),
                (u.parent = a),
                (u.register = function (e, s) {
                        t[e] = [
                                function (e, t) {
                                        t.exports = s;
                                },
                                {},
                        ];
                }),
                Object.defineProperty(u, "root", {
                        get: function () {
                                return i[o];
                        },
                }),
                (i[o] = u);
            for (var c = 0; c < s.length; c++) u(s[c]);
            if (r) {
                    var p = u(r);
                    "object" == typeof exports && "undefined" != typeof module
                        ? (module.exports = p)
                        : "function" == typeof e && e.amd
                            ? e(function () {
                                    return p;
                            })
                            : n && (this[n] = p);
            }
    })(
        {
                "16Nvh": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "default", () => o);
                                var o = e("framer-motion").domAnimation;
                        },
                        { "framer-motion": "7sxg1", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "7sxg1": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "createDomMotionComponent", () => o.createDomMotionComponent),
                                    r.export(s, "motion", () => o.motion),
                                    r.export(s, "m", () => n.m),
                                    r.export(s, "AnimatePresence", () => i.AnimatePresence),
                                    r.export(s, "MotionConfig", () => a.MotionConfig),
                                    r.export(s, "LazyMotion", () => l.LazyMotion),
                                    r.export(s, "LayoutGroup", () => m.LayoutGroup),
                                    r.export(s, "Reorder", () => u.Reorder),
                                    r.export(s, "domMin", () => c.domMin),
                                    r.export(s, "domAnimation", () => p.domAnimation),
                                    r.export(s, "domMax", () => d.domMax),
                                    r.export(s, "useMotionValue", () => h.useMotionValue),
                                    r.export(s, "useMotionTemplate", () => f.useMotionTemplate),
                                    r.export(s, "resolveMotionValue", () => j.resolveMotionValue),
                                    r.export(s, "useTransform", () => v.useTransform),
                                    r.export(s, "useSpring", () => g.useSpring),
                                    r.export(s, "useVelocity", () => x.useVelocity),
                                    r.export(s, "useScroll", () => y.useScroll),
                                    r.export(s, "useElementScroll", () => b.useElementScroll),
                                    r.export(s, "useViewportScroll", () => P.useViewportScroll),
                                    r.export(s, "useTime", () => C.useTime),
                                    r.export(s, "useWillChange", () => S.useWillChange),
                                    r.export(s, "useMotionValueEvent", () => T.useMotionValueEvent),
                                    r.export(s, "useReducedMotion", () => V.useReducedMotion),
                                    r.export(s, "useReducedMotionConfig", () => F.useReducedMotionConfig),
                                    r.export(s, "animationControls", () => w.animationControls),
                                    r.export(s, "useAnimate", () => A.useAnimate),
                                    r.export(s, "useAnimation", () => M.useAnimation),
                                    r.export(s, "useAnimationControls", () => M.useAnimationControls),
                                    r.export(s, "useAnimationFrame", () => I.useAnimationFrame),
                                    r.export(s, "animateVisualElement", () => E.animateVisualElement),
                                    r.export(s, "useCycle", () => U.useCycle),
                                    r.export(s, "isValidMotionProp", () => D.isValidMotionProp),
                                    r.export(s, "useIsPresent", () => R.useIsPresent),
                                    r.export(s, "usePresence", () => R.usePresence),
                                    r.export(s, "useInView", () => H.useInView),
                                    r.export(s, "DragControls", () => k.DragControls),
                                    r.export(s, "useDragControls", () => k.useDragControls),
                                    r.export(s, "useDomEvent", () => L.useDomEvent),
                                    r.export(s, "createMotionComponent", () => B.createMotionComponent),
                                    r.export(s, "isMotionComponent", () => O.isMotionComponent),
                                    r.export(s, "unwrapMotionComponent", () => N.unwrapMotionComponent),
                                    r.export(s, "VisualElement", () => G.VisualElement),
                                    r.export(s, "addScaleCorrector", () => z.addScaleCorrector),
                                    r.export(s, "disableInstantTransitions", () => W.disableInstantTransitions),
                                    r.export(s, "useInstantTransition", () => W.useInstantTransition),
                                    r.export(s, "useInstantLayoutTransition", () => q.useInstantLayoutTransition),
                                    r.export(s, "useResetProjection", () => K.useResetProjection),
                                    r.export(s, "buildTransform", () => $.buildTransform),
                                    r.export(s, "visualElementStore", () => Y.visualElementStore),
                                    r.export(s, "animateValue", () => _.animateValue),
                                    r.export(s, "color", () => X.color),
                                    r.export(s, "complex", () => J.complex),
                                    r.export(s, "px", () => Q.px),
                                    r.export(s, "MotionGlobalConfig", () => Z.MotionGlobalConfig),
                                    r.export(s, "AcceleratedAnimation", () => ee.AcceleratedAnimation),
                                    r.export(s, "startOptimizedAppearAnimation", () => et.startOptimizedAppearAnimation),
                                    r.export(s, "optimizedAppearDataAttribute", () => es.optimizedAppearDataAttribute),
                                    r.export(s, "spring", () => er.spring),
                                    r.export(s, "MotionContext", () => eo.MotionContext),
                                    r.export(s, "MotionConfigContext", () => en.MotionConfigContext),
                                    r.export(s, "PresenceContext", () => ei.PresenceContext),
                                    r.export(s, "LayoutGroupContext", () => ea.LayoutGroupContext),
                                    r.export(s, "SwitchLayoutGroupContext", () => el.SwitchLayoutGroupContext),
                                    r.export(s, "FlatTree", () => em.FlatTree),
                                    r.export(s, "DeprecatedLayoutGroupContext", () => eu.DeprecatedLayoutGroupContext),
                                    r.export(s, "useDeprecatedAnimatedState", () => ec.useAnimatedState),
                                    r.export(s, "useDeprecatedInvertedScale", () => ep.useInvertedScale),
                                    r.export(s, "AnimateSharedLayout", () => ed.AnimateSharedLayout),
                                    r.export(s, "MotionValue", () => eh.MotionValue),
                                    r.export(s, "motionValue", () => eh.motionValue),
                                    r.export(s, "animate", () => ef.animate),
                                    r.export(s, "createScopedAnimate", () => ef.createScopedAnimate),
                                    r.export(s, "scroll", () => ej.scroll),
                                    r.export(s, "scrollInfo", () => ev.scrollInfo),
                                    r.export(s, "inView", () => eg.inView),
                                    r.export(s, "stagger", () => ex.stagger),
                                    r.export(s, "transform", () => ey.transform),
                                    r.export(s, "clamp", () => eb.clamp),
                                    r.export(s, "mix", () => eP.mix),
                                    r.export(s, "pipe", () => eC.pipe),
                                    r.export(s, "progress", () => eS.progress),
                                    r.export(s, "wrap", () => eT.wrap),
                                    r.export(s, "cancelSync", () => eV.cancelSync),
                                    r.export(s, "sync", () => eV.sync),
                                    r.export(s, "anticipate", () => eF.anticipate),
                                    r.export(s, "backIn", () => ew.backIn),
                                    r.export(s, "backInOut", () => ew.backInOut),
                                    r.export(s, "backOut", () => ew.backOut),
                                    r.export(s, "circIn", () => eA.circIn),
                                    r.export(s, "circInOut", () => eA.circInOut),
                                    r.export(s, "circOut", () => eA.circOut),
                                    r.export(s, "easeIn", () => eM.easeIn),
                                    r.export(s, "easeInOut", () => eM.easeInOut),
                                    r.export(s, "easeOut", () => eM.easeOut),
                                    r.export(s, "cubicBezier", () => eI.cubicBezier),
                                    r.export(s, "mirrorEasing", () => eE.mirrorEasing),
                                    r.export(s, "reverseEasing", () => eU.reverseEasing),
                                    r.export(s, "delay", () => eD.delay),
                                    r.export(s, "distance", () => eR.distance),
                                r.export(s, "distance2D", () => eR.distance2D),
                                r.export(s, "invariant", () => eH.invariant),
                                r.export(s, "warning", () => eH.warning),
                                r.export(s, "interpolate", () => ek.interpolate),
                                r.export(s, "cancelFrame", () => eL.cancelFrame),
                                r.export(s, "frame", () => eL.frame),
                                r.export(s, "frameData", () => eL.frameData),
                                r.export(s, "steps", () => eL.steps),
                                r.export(s, "animations", () => eB.animations),
                                r.export(s, "createBox", () => eO.createBox),
                                r.export(s, "calcLength", () => eN.calcLength),
                                r.export(s, "filterProps", () => eG.filterProps),
                                r.export(s, "makeUseVisualState", () => ez.makeUseVisualState),
                                r.export(s, "isDragActive", () => eW.isDragActive),
                                r.export(s, "addPointerEvent", () => eq.addPointerEvent),
                                r.export(s, "addPointerInfo", () => eK.addPointerInfo),
                                r.export(s, "isMotionValue", () => e$.isMotionValue),
                                r.export(s, "isBrowser", () => eY.isBrowser),
                                r.export(s, "useUnmountEffect", () => e_.useUnmountEffect),
                                r.export(s, "useIsomorphicLayoutEffect", () => eX.useIsomorphicLayoutEffect),
                                r.export(s, "useForceUpdate", () => eJ.useForceUpdate);
                                var o = e("./render/dom/motion.mjs"),
                                    n = e("./render/dom/motion-minimal.mjs"),
                                    i = e("./components/AnimatePresence/index.mjs"),
                                    a = e("./components/MotionConfig/index.mjs"),
                                    l = e("./components/LazyMotion/index.mjs"),
                                    m = e("./components/LayoutGroup/index.mjs"),
                                    u = e("./components/Reorder/index.mjs"),
                                    c = e("./render/dom/features-min.mjs"),
                                    p = e("./render/dom/features-animation.mjs"),
                                    d = e("./render/dom/features-max.mjs"),
                                    h = e("./value/use-motion-value.mjs"),
                                    f = e("./value/use-motion-template.mjs"),
                                    j = e("./value/utils/resolve-motion-value.mjs"),
                                    v = e("./value/use-transform.mjs"),
                                    g = e("./value/use-spring.mjs"),
                                    x = e("./value/use-velocity.mjs"),
                                    y = e("./value/use-scroll.mjs"),
                                    b = e("./value/scroll/use-element-scroll.mjs"),
                                    P = e("./value/scroll/use-viewport-scroll.mjs"),
                                    C = e("./value/use-time.mjs"),
                                    S = e("./value/use-will-change/index.mjs"),
                                    T = e("./utils/use-motion-value-event.mjs"),
                                    V = e("./utils/reduced-motion/use-reduced-motion.mjs"),
                                    F = e("./utils/reduced-motion/use-reduced-motion-config.mjs"),
                                    w = e("./animation/hooks/animation-controls.mjs"),
                                    A = e("./animation/hooks/use-animate.mjs"),
                                    M = e("./animation/hooks/use-animation.mjs"),
                                    I = e("./utils/use-animation-frame.mjs"),
                                    E = e("./animation/interfaces/visual-element.mjs"),
                                    U = e("./utils/use-cycle.mjs"),
                                    D = e("./motion/utils/valid-prop.mjs"),
                                    R = e("./components/AnimatePresence/use-presence.mjs"),
                                    H = e("./utils/use-in-view.mjs"),
                                    k = e("./gestures/drag/use-drag-controls.mjs"),
                                    L = e("./events/use-dom-event.mjs"),
                                    B = e("./motion/index.mjs"),
                                    O = e("./motion/utils/is-motion-component.mjs"),
                                    N = e("./motion/utils/unwrap-motion-component.mjs"),
                                    G = e("./render/VisualElement.mjs"),
                                    z = e("./projection/styles/scale-correction.mjs"),
                                    W = e("./utils/use-instant-transition.mjs"),
                                    q = e("./projection/use-instant-layout-transition.mjs"),
                                    K = e("./projection/use-reset-projection.mjs"),
                                    $ = e("./render/html/utils/build-transform.mjs"),
                                    Y = e("./render/store.mjs"),
                                    _ = e("./animation/animators/MainThreadAnimation.mjs"),
                                    X = e("./value/types/color/index.mjs"),
                                    J = e("./value/types/complex/index.mjs"),
                                    Q = e("./value/types/numbers/units.mjs"),
                                    Z = e("./utils/GlobalConfig.mjs"),
                                    ee = e("./animation/animators/AcceleratedAnimation.mjs"),
                                    et = e("./animation/optimized-appear/start.mjs"),
                                    es = e("./animation/optimized-appear/data-id.mjs"),
                                    er = e("./animation/generators/spring/index.mjs"),
                                    eo = e("./context/MotionContext/index.mjs"),
                                    en = e("./context/MotionConfigContext.mjs"),
                                    ei = e("./context/PresenceContext.mjs"),
                                    ea = e("./context/LayoutGroupContext.mjs"),
                                    el = e("./context/SwitchLayoutGroupContext.mjs"),
                                    em = e("./render/utils/flat-tree.mjs"),
                                    eu = e("./context/DeprecatedLayoutGroupContext.mjs"),
                                    ec = e("./animation/hooks/use-animated-state.mjs"),
                                    ep = e("./value/use-inverted-scale.mjs"),
                                    ed = e("./components/AnimateSharedLayout.mjs"),
                                    eh = e("./value/index.mjs"),
                                    ef = e("./animation/animate.mjs"),
                                    ej = e("./render/dom/scroll/index.mjs"),
                                    ev = e("./render/dom/scroll/track.mjs"),
                                    eg = e("./render/dom/viewport/index.mjs"),
                                    ex = e("./animation/utils/stagger.mjs"),
                                    ey = e("./utils/transform.mjs"),
                                    eb = e("./utils/clamp.mjs"),
                                    eP = e("./utils/mix/index.mjs"),
                                    eC = e("./utils/pipe.mjs"),
                                    eS = e("./utils/progress.mjs"),
                                    eT = e("./utils/wrap.mjs"),
                                    eV = e("./frameloop/index-legacy.mjs"),
                                    eF = e("./easing/anticipate.mjs"),
                                    ew = e("./easing/back.mjs"),
                                    eA = e("./easing/circ.mjs"),
                                    eM = e("./easing/ease.mjs"),
                                    eI = e("./easing/cubic-bezier.mjs"),
                                    eE = e("./easing/modifiers/mirror.mjs"),
                                    eU = e("./easing/modifiers/reverse.mjs"),
                                    eD = e("./utils/delay.mjs"),
                                    eR = e("./utils/distance.mjs"),
                                    eH = e("./utils/errors.mjs"),
                                    ek = e("./utils/interpolate.mjs"),
                                    eL = e("./frameloop/frame.mjs"),
                                    eB = e("./motion/features/animations.mjs"),
                                    eO = e("./projection/geometry/models.mjs"),
                                    eN = e("./projection/geometry/delta-calc.mjs"),
                                    eG = e("./render/dom/utils/filter-props.mjs"),
                                    ez = e("./motion/utils/use-visual-state.mjs"),
                                    eW = e("./gestures/drag/utils/lock.mjs"),
                                    eq = e("./events/add-pointer-event.mjs"),
                                    eK = e("./events/event-info.mjs"),
                                    e$ = e("./value/utils/is-motion-value.mjs"),
                                    eY = e("./utils/is-browser.mjs"),
                                    e_ = e("./utils/use-unmount-effect.mjs"),
                                    eX = e("./utils/use-isomorphic-effect.mjs"),
                                    eJ = e("./utils/use-force-update.mjs");
                        },
                        {
                                "./render/dom/motion.mjs": !1,
                                "./render/dom/motion-minimal.mjs": "2oUrD",
                                "./components/AnimatePresence/index.mjs": "9kXBS",
                                "./components/MotionConfig/index.mjs": "la0ew",
                                "./components/LazyMotion/index.mjs": "jQeNE",
                                "./components/LayoutGroup/index.mjs": "k54AS",
                                "./components/Reorder/index.mjs": !1,
                                "./render/dom/features-min.mjs": !1,
                                "./render/dom/features-animation.mjs": "fhRRO",
                                "./render/dom/features-max.mjs": "7DGqz",
                                "./value/use-motion-value.mjs": !1,
                                "./value/use-motion-template.mjs": !1,
                                "./value/utils/resolve-motion-value.mjs": !1,
                                "./value/use-transform.mjs": !1,
                                "./value/use-spring.mjs": !1,
                                "./value/use-velocity.mjs": !1,
                                "./value/use-scroll.mjs": !1,
                                "./value/scroll/use-element-scroll.mjs": !1,
                                "./value/scroll/use-viewport-scroll.mjs": !1,
                                "./value/use-time.mjs": !1,
                                "./value/use-will-change/index.mjs": !1,
                                "./utils/use-motion-value-event.mjs": !1,
                                "./utils/reduced-motion/use-reduced-motion.mjs": !1,
                                "./utils/reduced-motion/use-reduced-motion-config.mjs": !1,
                                "./animation/hooks/animation-controls.mjs": !1,
                                "./animation/hooks/use-animate.mjs": !1,
                                "./animation/hooks/use-animation.mjs": !1,
                                "./utils/use-animation-frame.mjs": !1,
                                "./animation/interfaces/visual-element.mjs": !1,
                                "./utils/use-cycle.mjs": !1,
                                "./motion/utils/valid-prop.mjs": !1,
                                "./components/AnimatePresence/use-presence.mjs": !1,
                                "./utils/use-in-view.mjs": !1,
                                "./gestures/drag/use-drag-controls.mjs": !1,
                                "./events/use-dom-event.mjs": !1,
                                "./motion/index.mjs": !1,
                                "./motion/utils/is-motion-component.mjs": !1,
                                "./motion/utils/unwrap-motion-component.mjs": !1,
                                "./render/VisualElement.mjs": !1,
                                "./projection/styles/scale-correction.mjs": !1,
                                "./utils/use-instant-transition.mjs": !1,
                                "./projection/use-instant-layout-transition.mjs": !1,
                                "./projection/use-reset-projection.mjs": !1,
                                "./render/html/utils/build-transform.mjs": !1,
                                "./render/store.mjs": !1,
                                "./animation/animators/MainThreadAnimation.mjs": !1,
                                "./value/types/color/index.mjs": !1,
                                "./value/types/complex/index.mjs": !1,
                                "./value/types/numbers/units.mjs": !1,
                                "./utils/GlobalConfig.mjs": "7cL05",
                                "./animation/animators/AcceleratedAnimation.mjs": !1,
                                "./animation/optimized-appear/start.mjs": !1,
                                "./animation/optimized-appear/data-id.mjs": !1,
                                "./animation/generators/spring/index.mjs": !1,
                                "./context/MotionContext/index.mjs": !1,
                                "./context/MotionConfigContext.mjs": !1,
                                "./context/PresenceContext.mjs": !1,
                                "./context/LayoutGroupContext.mjs": !1,
                                "./context/SwitchLayoutGroupContext.mjs": !1,
                                "./render/utils/flat-tree.mjs": !1,
                                "./context/DeprecatedLayoutGroupContext.mjs": !1,
                                "./animation/hooks/use-animated-state.mjs": !1,
                                "./value/use-inverted-scale.mjs": !1,
                                "./components/AnimateSharedLayout.mjs": !1,
                                "./value/index.mjs": !1,
                                "./animation/animate.mjs": !1,
                                "./render/dom/scroll/index.mjs": !1,
                                "./render/dom/scroll/track.mjs": !1,
                                "./render/dom/viewport/index.mjs": !1,
                                "./animation/utils/stagger.mjs": !1,
                                "./utils/transform.mjs": !1,
                                "./utils/clamp.mjs": !1,
                                "./utils/mix/index.mjs": !1,
                                "./utils/pipe.mjs": !1,
                                "./utils/progress.mjs": !1,
                                "./utils/wrap.mjs": !1,
                                "./frameloop/index-legacy.mjs": !1,
                                "./easing/anticipate.mjs": !1,
                                "./easing/back.mjs": !1,
                                "./easing/circ.mjs": !1,
                                "./easing/ease.mjs": !1,
                                "./easing/cubic-bezier.mjs": !1,
                                "./easing/modifiers/mirror.mjs": !1,
                                "./easing/modifiers/reverse.mjs": !1,
                                "./utils/delay.mjs": !1,
                                "./utils/distance.mjs": !1,
                                "./utils/errors.mjs": !1,
                                "./utils/interpolate.mjs": !1,
                                "./frameloop/frame.mjs": !1,
                                "./motion/features/animations.mjs": !1,
                                "./projection/geometry/models.mjs": !1,
                                "./projection/geometry/delta-calc.mjs": !1,
                                "./render/dom/utils/filter-props.mjs": !1,
                                "./motion/utils/use-visual-state.mjs": !1,
                                "./gestures/drag/utils/lock.mjs": !1,
                                "./events/add-pointer-event.mjs": !1,
                                "./events/event-info.mjs": !1,
                                "./value/utils/is-motion-value.mjs": !1,
                                "./utils/is-browser.mjs": !1,
                                "./utils/use-unmount-effect.mjs": !1,
                                "./utils/use-isomorphic-effect.mjs": !1,
                                "./utils/use-force-update.mjs": !1,
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "2oUrD": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "m", () => i);
                                var o = e("./motion-proxy.mjs"),
                                    n = e("./utils/create-config.mjs");
                                let i = (0, o.createMotionProxy)(n.createDomMotionConfig);
                        },
                        {
                                "./motion-proxy.mjs": "175QB",
                                "./utils/create-config.mjs": "6ALaN",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "175QB": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createMotionProxy", () => n);
                                var o = e("../../motion/index.mjs");
                                function n(e) {
                                        function t(t, s = {}) {
                                                return (0, o.createMotionComponent)(e(t, s));
                                        }
                                        if ("undefined" == typeof Proxy) return t;
                                        let s = new Map();
                                        return new Proxy(t, { get: (e, r) => (s.has(r) || s.set(r, t(r)), s.get(r)) });
                                }
                        },
                        { "../../motion/index.mjs": "63zSC", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "63zSC": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createMotionComponent", () => v);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../context/MotionConfigContext.mjs"),
                                    a = e("../context/MotionContext/index.mjs"),
                                    l = e("./utils/use-visual-element.mjs"),
                                    m = e("./utils/use-motion-ref.mjs"),
                                    u = e("../context/MotionContext/create.mjs"),
                                    c = e("./features/load-features.mjs"),
                                    p = e("../utils/is-browser.mjs"),
                                    d = e("../context/LayoutGroupContext.mjs"),
                                    h = e("../context/LazyContext.mjs"),
                                    f = e("./utils/symbol.mjs");
                                e("../utils/errors.mjs");
                                var j = e("./features/definitions.mjs");
                                function v({
                                                   preloadedFeatures: e,
                                                   createVisualElement: t,
                                                   useRender: s,
                                                   useVisualState: r,
                                                   Component: v,
                                           }) {
                                        e && (0, c.loadFeatures)(e);
                                        let g = (0, n.forwardRef)(function (e, c) {
                                                let f;
                                                let g = {
                                                            ...(0, n.useContext)(i.MotionConfigContext),
                                                            ...e,
                                                            layoutId: (function ({ layoutId: e }) {
                                                                    let t = (0, n.useContext)(d.LayoutGroupContext).id;
                                                                    return t && void 0 !== e ? t + "-" + e : e;
                                                            })(e),
                                                    },
                                                    { isStatic: x } = g,
                                                    y = (0, u.useCreateMotionContext)(e),
                                                    b = r(e, x);
                                                if (!x && p.isBrowser) {
                                                        (0, n.useContext)(h.LazyContext).strict;
                                                        let e = (function (e) {
                                                                let { drag: t, layout: s } = j.featureDefinitions;
                                                                if (!t && !s) return {};
                                                                let r = { ...t, ...s };
                                                                return {
                                                                        MeasureLayout:
                                                                            (null == t ? void 0 : t.isEnabled(e)) ||
                                                                            (null == s ? void 0 : s.isEnabled(e))
                                                                                ? r.MeasureLayout
                                                                                : void 0,
                                                                        ProjectionNode: r.ProjectionNode,
                                                                };
                                                        })(g);
                                                        (f = e.MeasureLayout),
                                                            (y.visualElement = (0, l.useVisualElement)(v, b, g, t, e.ProjectionNode));
                                                }
                                                return (0, o.jsxs)(a.MotionContext.Provider, {
                                                        value: y,
                                                        children: [
                                                                f && y.visualElement
                                                                    ? (0, o.jsx)(f, { visualElement: y.visualElement, ...g })
                                                                    : null,
                                                                s(v, e, (0, m.useMotionRef)(b, y.visualElement, c), b, x, y.visualElement),
                                                        ],
                                                });
                                        });
                                        return (g[f.motionComponentSymbol] = v), g;
                                }
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../context/MotionConfigContext.mjs": "gjLIN",
                                "../context/MotionContext/index.mjs": "VCi0P",
                                "./utils/use-visual-element.mjs": "dpGxD",
                                "./utils/use-motion-ref.mjs": "fAelW",
                                "../context/MotionContext/create.mjs": "kRSjk",
                                "./features/load-features.mjs": "jZOrk",
                                "../utils/is-browser.mjs": "03Aen",
                                "../context/LayoutGroupContext.mjs": "iFp6w",
                                "../context/LazyContext.mjs": "4Eebm",
                                "./utils/symbol.mjs": "jBk4q",
                                "../utils/errors.mjs": "gxmqQ",
                                "./features/definitions.mjs": "hxOgD",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "8iOxN": [
                        function (e, t, s) {
                                t.exports = e("ba80e5a03a461355");
                        },
                        { ba80e5a03a461355: "hIfNu" },
                ],
                hIfNu: [
                        function (e, t, s) {
                                var r = e("61e3cf0e9433c992"),
                                    o = Symbol.for("react.element"),
                                    n = Symbol.for("react.fragment"),
                                    i = Object.prototype.hasOwnProperty,
                                    a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                                    l = { key: !0, ref: !0, __self: !0, __source: !0 };
                                function m(e, t, s) {
                                        var r,
                                            n = {},
                                            m = null,
                                            u = null;
                                        for (r in (void 0 !== s && (m = "" + s),
                                        void 0 !== t.key && (m = "" + t.key),
                                        void 0 !== t.ref && (u = t.ref),
                                            t))
                                                i.call(t, r) && !l.hasOwnProperty(r) && (n[r] = t[r]);
                                        if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === n[r] && (n[r] = t[r]);
                                        return { $$typeof: o, type: e, key: m, ref: u, props: n, _owner: a.current };
                                }
                                (s.Fragment = n), (s.jsx = m), (s.jsxs = m);
                        },
                        { "61e3cf0e9433c992": "329PG" },
                ],
                "329PG": [
                        function (e, t, s) {
                                t.exports = e("ae0ab14aecd941d7");
                        },
                        { ae0ab14aecd941d7: "5ejwk" },
                ],
                "5ejwk": [
                        function (e, t, s) {
                                var r = Symbol.for("react.element"),
                                    o = Symbol.for("react.portal"),
                                    n = Symbol.for("react.fragment"),
                                    i = Symbol.for("react.strict_mode"),
                                    a = Symbol.for("react.profiler"),
                                    l = Symbol.for("react.provider"),
                                    m = Symbol.for("react.context"),
                                    u = Symbol.for("react.forward_ref"),
                                    c = Symbol.for("react.suspense"),
                                    p = Symbol.for("react.memo"),
                                    d = Symbol.for("react.lazy"),
                                    h = Symbol.iterator,
                                    f = {
                                            isMounted: function () {
                                                    return !1;
                                            },
                                            enqueueForceUpdate: function () {},
                                            enqueueReplaceState: function () {},
                                            enqueueSetState: function () {},
                                    },
                                    j = Object.assign,
                                    v = {};
                                function g(e, t, s) {
                                        (this.props = e), (this.context = t), (this.refs = v), (this.updater = s || f);
                                }
                                function x() {}
                                function y(e, t, s) {
                                        (this.props = e), (this.context = t), (this.refs = v), (this.updater = s || f);
                                }
                                (g.prototype.isReactComponent = {}),
                                    (g.prototype.setState = function (e, t) {
                                            if ("object" != typeof e && "function" != typeof e && null != e)
                                                    throw Error(
                                                        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                                                    );
                                            this.updater.enqueueSetState(this, e, t, "setState");
                                    }),
                                    (g.prototype.forceUpdate = function (e) {
                                            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                                    }),
                                    (x.prototype = g.prototype);
                                var b = (y.prototype = new x());
                                (b.constructor = y), j(b, g.prototype), (b.isPureReactComponent = !0);
                                var P = Array.isArray,
                                    C = Object.prototype.hasOwnProperty,
                                    S = { current: null },
                                    T = { key: !0, ref: !0, __self: !0, __source: !0 };
                                function V(e, t, s) {
                                        var o,
                                            n = {},
                                            i = null,
                                            a = null;
                                        if (null != t)
                                                for (o in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), t))
                                                        C.call(t, o) && !T.hasOwnProperty(o) && (n[o] = t[o]);
                                        var l = arguments.length - 2;
                                        if (1 === l) n.children = s;
                                        else if (1 < l) {
                                                for (var m = Array(l), u = 0; u < l; u++) m[u] = arguments[u + 2];
                                                n.children = m;
                                        }
                                        if (e && e.defaultProps) for (o in (l = e.defaultProps)) void 0 === n[o] && (n[o] = l[o]);
                                        return { $$typeof: r, type: e, key: i, ref: a, props: n, _owner: S.current };
                                }
                                function F(e) {
                                        return "object" == typeof e && null !== e && e.$$typeof === r;
                                }
                                var w = /\/+/g;
                                function A(e, t) {
                                        var s, r;
                                        return "object" == typeof e && null !== e && null != e.key
                                            ? ((s = "" + e.key),
                                                (r = { "=": "=0", ":": "=2" }),
                                            "$" +
                                            s.replace(/[=:]/g, function (e) {
                                                    return r[e];
                                            }))
                                            : t.toString(36);
                                }
                                function M(e, t, s) {
                                        if (null == e) return e;
                                        var n = [],
                                            i = 0;
                                        return (
                                            (function e(t, s, n, i, a) {
                                                    var l,
                                                        m,
                                                        u,
                                                        c = typeof t;
                                                    ("undefined" === c || "boolean" === c) && (t = null);
                                                    var p = !1;
                                                    if (null === t) p = !0;
                                                    else
                                                            switch (c) {
                                                                    case "string":
                                                                    case "number":
                                                                            p = !0;
                                                                            break;
                                                                    case "object":
                                                                            switch (t.$$typeof) {
                                                                                    case r:
                                                                                    case o:
                                                                                            p = !0;
                                                                            }
                                                            }
                                                    if (p)
                                                            return (
                                                                (a = a((p = t))),
                                                                    (t = "" === i ? "." + A(p, 0) : i),
                                                                    P(a)
                                                                        ? ((n = ""),
                                                                        null != t && (n = t.replace(w, "$&/") + "/"),
                                                                            e(a, s, n, "", function (e) {
                                                                                    return e;
                                                                            }))
                                                                        : null != a &&
                                                                        (F(a) &&
                                                                        ((l = a),
                                                                            (m =
                                                                                n +
                                                                                (!a.key || (p && p.key === a.key)
                                                                                    ? ""
                                                                                    : ("" + a.key).replace(w, "$&/") + "/") +
                                                                                t),
                                                                            (a = {
                                                                                    $$typeof: r,
                                                                                    type: l.type,
                                                                                    key: m,
                                                                                    ref: l.ref,
                                                                                    props: l.props,
                                                                                    _owner: l._owner,
                                                                            })),
                                                                            s.push(a)),
                                                                    1
                                                            );
                                                    if (((p = 0), (i = "" === i ? "." : i + ":"), P(t)))
                                                            for (var d = 0; d < t.length; d++) {
                                                                    var f = i + A((c = t[d]), d);
                                                                    p += e(c, s, n, f, a);
                                                            }
                                                    else if (
                                                        "function" ==
                                                        typeof (f =
                                                            null === (u = t) || "object" != typeof u
                                                                ? null
                                                                : "function" == typeof (u = (h && u[h]) || u["@@iterator"])
                                                                    ? u
                                                                    : null)
                                                    )
                                                            for (t = f.call(t), d = 0; !(c = t.next()).done; )
                                                                    (f = i + A((c = c.value), d++)), (p += e(c, s, n, f, a));
                                                    else if ("object" === c)
                                                            throw Error(
                                                                "Objects are not valid as a React child (found: " +
                                                                ("[object Object]" === (s = String(t))
                                                                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                                                                    : s) +
                                                                "). If you meant to render a collection of children, use an array instead."
                                                            );
                                                    return p;
                                            })(e, n, "", "", function (e) {
                                                    return t.call(s, e, i++);
                                            }),
                                                n
                                        );
                                }
                                function I(e) {
                                        if (-1 === e._status) {
                                                var t = e._result;
                                                (t = t()).then(
                                                    function (t) {
                                                            (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
                                                    },
                                                    function (t) {
                                                            (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
                                                    }
                                                ),
                                                -1 === e._status && ((e._status = 0), (e._result = t));
                                        }
                                        if (1 === e._status) return e._result.default;
                                        throw e._result;
                                }
                                var E = { current: null },
                                    U = { transition: null };
                                (s.Children = {
                                        map: M,
                                        forEach: function (e, t, s) {
                                                M(
                                                    e,
                                                    function () {
                                                            t.apply(this, arguments);
                                                    },
                                                    s
                                                );
                                        },
                                        count: function (e) {
                                                var t = 0;
                                                return (
                                                    M(e, function () {
                                                            t++;
                                                    }),
                                                        t
                                                );
                                        },
                                        toArray: function (e) {
                                                return (
                                                    M(e, function (e) {
                                                            return e;
                                                    }) || []
                                                );
                                        },
                                        only: function (e) {
                                                if (!F(e))
                                                        throw Error("React.Children.only expected to receive a single React element child.");
                                                return e;
                                        },
                                }),
                                    (s.Component = g),
                                    (s.Fragment = n),
                                    (s.Profiler = a),
                                    (s.PureComponent = y),
                                    (s.StrictMode = i),
                                    (s.Suspense = c),
                                    (s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
                                            ReactCurrentDispatcher: E,
                                            ReactCurrentBatchConfig: U,
                                            ReactCurrentOwner: S,
                                    }),
                                    (s.cloneElement = function (e, t, s) {
                                            if (null == e)
                                                    throw Error(
                                                        "React.cloneElement(...): The argument must be a React element, but you passed " +
                                                        e +
                                                        "."
                                                    );
                                            var o = j({}, e.props),
                                                n = e.key,
                                                i = e.ref,
                                                a = e._owner;
                                            if (null != t) {
                                                    if (
                                                        (void 0 !== t.ref && ((i = t.ref), (a = S.current)),
                                                        void 0 !== t.key && (n = "" + t.key),
                                                        e.type && e.type.defaultProps)
                                                    )
                                                            var l = e.type.defaultProps;
                                                    for (m in t)
                                                            C.call(t, m) &&
                                                            !T.hasOwnProperty(m) &&
                                                            (o[m] = void 0 === t[m] && void 0 !== l ? l[m] : t[m]);
                                            }
                                            var m = arguments.length - 2;
                                            if (1 === m) o.children = s;
                                            else if (1 < m) {
                                                    l = Array(m);
                                                    for (var u = 0; u < m; u++) l[u] = arguments[u + 2];
                                                    o.children = l;
                                            }
                                            return { $$typeof: r, type: e.type, key: n, ref: i, props: o, _owner: a };
                                    }),
                                    (s.createContext = function (e) {
                                            return (
                                                ((e = {
                                                        $$typeof: m,
                                                        _currentValue: e,
                                                        _currentValue2: e,
                                                        _threadCount: 0,
                                                        Provider: null,
                                                        Consumer: null,
                                                        _defaultValue: null,
                                                        _globalName: null,
                                                }).Provider = { $$typeof: l, _context: e }),
                                                    (e.Consumer = e)
                                            );
                                    }),
                                    (s.createElement = V),
                                    (s.createFactory = function (e) {
                                            var t = V.bind(null, e);
                                            return (t.type = e), t;
                                    }),
                                    (s.createRef = function () {
                                            return { current: null };
                                    }),
                                    (s.forwardRef = function (e) {
                                            return { $$typeof: u, render: e };
                                    }),
                                    (s.isValidElement = F),
                                    (s.lazy = function (e) {
                                            return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: I };
                                    }),
                                    (s.memo = function (e, t) {
                                            return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
                                    }),
                                    (s.startTransition = function (e) {
                                            var t = U.transition;
                                            U.transition = {};
                                            try {
                                                    e();
                                            } finally {
                                                    U.transition = t;
                                            }
                                    }),
                                    (s.unstable_act = function () {
                                            throw Error("act(...) is not supported in production builds of React.");
                                    }),
                                    (s.useCallback = function (e, t) {
                                            return E.current.useCallback(e, t);
                                    }),
                                    (s.useContext = function (e) {
                                            return E.current.useContext(e);
                                    }),
                                    (s.useDebugValue = function () {}),
                                    (s.useDeferredValue = function (e) {
                                            return E.current.useDeferredValue(e);
                                    }),
                                    (s.useEffect = function (e, t) {
                                            return E.current.useEffect(e, t);
                                    }),
                                    (s.useId = function () {
                                            return E.current.useId();
                                    }),
                                    (s.useImperativeHandle = function (e, t, s) {
                                            return E.current.useImperativeHandle(e, t, s);
                                    }),
                                    (s.useInsertionEffect = function (e, t) {
                                            return E.current.useInsertionEffect(e, t);
                                    }),
                                    (s.useLayoutEffect = function (e, t) {
                                            return E.current.useLayoutEffect(e, t);
                                    }),
                                    (s.useMemo = function (e, t) {
                                            return E.current.useMemo(e, t);
                                    }),
                                    (s.useReducer = function (e, t, s) {
                                            return E.current.useReducer(e, t, s);
                                    }),
                                    (s.useRef = function (e) {
                                            return E.current.useRef(e);
                                    }),
                                    (s.useState = function (e) {
                                            return E.current.useState(e);
                                    }),
                                    (s.useSyncExternalStore = function (e, t, s) {
                                            return E.current.useSyncExternalStore(e, t, s);
                                    }),
                                    (s.useTransition = function () {
                                            return E.current.useTransition();
                                    }),
                                    (s.version = "18.2.0");
                        },
                        {},
                ],
                gjLIN: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "MotionConfigContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)({
                                        transformPagePoint: (e) => e,
                                        isStatic: !1,
                                        reducedMotion: "never",
                                });
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                cHUbl: [
                        function (e, t, s) {
                                (s.interopDefault = function (e) {
                                        return e && e.__esModule ? e : { default: e };
                                }),
                                    (s.defineInteropFlag = function (e) {
                                            Object.defineProperty(e, "__esModule", { value: !0 });
                                    }),
                                    (s.exportAll = function (e, t) {
                                            return (
                                                Object.keys(e).forEach(function (s) {
                                                        "default" === s ||
                                                        "__esModule" === s ||
                                                        t.hasOwnProperty(s) ||
                                                        Object.defineProperty(t, s, {
                                                                enumerable: !0,
                                                                get: function () {
                                                                        return e[s];
                                                                },
                                                        });
                                                }),
                                                    t
                                            );
                                    }),
                                    (s.export = function (e, t, s) {
                                            Object.defineProperty(e, t, { enumerable: !0, get: s });
                                    });
                        },
                        {},
                ],
                VCi0P: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "MotionContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)({});
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                dpGxD: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useVisualElement", () => f);
                                var o = e("react"),
                                    n = e("../../context/PresenceContext.mjs"),
                                    i = e("../../context/MotionContext/index.mjs"),
                                    a = e("../../utils/use-isomorphic-effect.mjs"),
                                    l = e("../../context/LazyContext.mjs"),
                                    m = e("../../context/MotionConfigContext.mjs"),
                                    u = e("../../animation/optimized-appear/data-id.mjs"),
                                    c = e("../../frameloop/microtask.mjs"),
                                    p = e("../../utils/is-ref-object.mjs"),
                                    d = e("../../context/SwitchLayoutGroupContext.mjs");
                                let h = !1;
                                function f(e, t, s, r, f) {
                                        var v;
                                        let { visualElement: g } = (0, o.useContext)(i.MotionContext),
                                            x = (0, o.useContext)(l.LazyContext),
                                            y = (0, o.useContext)(n.PresenceContext),
                                            b = (0, o.useContext)(m.MotionConfigContext).reducedMotion,
                                            P = (0, o.useRef)();
                                        (r = r || x.renderer),
                                        !P.current &&
                                        r &&
                                        (P.current = r(e, {
                                                visualState: t,
                                                parent: g,
                                                props: s,
                                                presenceContext: y,
                                                blockInitialAnimation: !!y && !1 === y.initial,
                                                reducedMotionConfig: b,
                                        }));
                                        let C = P.current,
                                            S = (0, o.useContext)(d.SwitchLayoutGroupContext);
                                        C &&
                                        !C.projection &&
                                        f &&
                                        ("html" === C.type || "svg" === C.type) &&
                                        (function (e, t, s, r) {
                                                let {
                                                        layoutId: o,
                                                        layout: n,
                                                        drag: i,
                                                        dragConstraints: a,
                                                        layoutScroll: l,
                                                        layoutRoot: m,
                                                } = t;
                                                (e.projection = new s(
                                                    e.latestValues,
                                                    t["data-framer-portal-id"]
                                                        ? void 0
                                                        : (function e(t) {
                                                                if (t)
                                                                        return !1 !== t.options.allowProjection ? t.projection : e(t.parent);
                                                        })(e.parent)
                                                )),
                                                    e.projection.setOptions({
                                                            layoutId: o,
                                                            layout: n,
                                                            alwaysMeasureLayout: !!i || (a && (0, p.isRefObject)(a)),
                                                            visualElement: e,
                                                            animationType: "string" == typeof n ? n : "both",
                                                            initialPromotionConfig: r,
                                                            layoutScroll: l,
                                                            layoutRoot: m,
                                                    });
                                        })(P.current, s, f, S),
                                            (0, o.useInsertionEffect)(() => {
                                                    C && C.update(s, y);
                                            });
                                        let T = s[u.optimizedAppearDataAttribute],
                                            V = (0, o.useRef)(
                                                !!T &&
                                                !window.MotionHandoffIsComplete &&
                                                (null === (v = window.MotionHasOptimisedAnimation) || void 0 === v
                                                    ? void 0
                                                    : v.call(window, T))
                                            );
                                        return (
                                            (0, a.useIsomorphicLayoutEffect)(() => {
                                                    C &&
                                                    (C.updateFeatures(),
                                                        (0, c.microtask).render(C.render),
                                                    V.current && C.animationState && C.animationState.animateChanges());
                                            }),
                                                (0, o.useEffect)(() => {
                                                        C &&
                                                        (!V.current && C.animationState && C.animationState.animateChanges(),
                                                            (V.current = !1),
                                                        h || ((h = !0), queueMicrotask(j)));
                                                }),
                                                C
                                        );
                                }
                                function j() {
                                        window.MotionHandoffIsComplete = !0;
                                }
                        },
                        {
                                react: "329PG",
                                "../../context/PresenceContext.mjs": "b9Qy5",
                                "../../context/MotionContext/index.mjs": "VCi0P",
                                "../../utils/use-isomorphic-effect.mjs": "eUjIi",
                                "../../context/LazyContext.mjs": "4Eebm",
                                "../../context/MotionConfigContext.mjs": "gjLIN",
                                "../../animation/optimized-appear/data-id.mjs": "cCE6F",
                                "../../frameloop/microtask.mjs": "cFodP",
                                "../../utils/is-ref-object.mjs": "1Yx64",
                                "../../context/SwitchLayoutGroupContext.mjs": "e6HSq",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                b9Qy5: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "PresenceContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)(null);
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                eUjIi: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useIsomorphicLayoutEffect", () => i);
                                var o = e("react"),
                                    n = e("./is-browser.mjs");
                                let i = n.isBrowser ? o.useLayoutEffect : o.useEffect;
                        },
                        {
                                react: "329PG",
                                "./is-browser.mjs": "03Aen",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "03Aen": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isBrowser", () => o);
                                let o = "undefined" != typeof window;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4Eebm": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "LazyContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)({ strict: !1 });
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                cCE6F: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "optimizedAppearDataAttribute", () => i),
                                    r.export(s, "optimizedAppearDataId", () => n);
                                var o = e("../../render/dom/utils/camel-to-dash.mjs");
                                let n = "framerAppearId",
                                    i = "data-" + (0, o.camelToDash)(n);
                        },
                        {
                                "../../render/dom/utils/camel-to-dash.mjs": "8t9U3",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "8t9U3": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "camelToDash", () => o);
                                let o = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                cFodP: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "cancelMicrotask", () => i), r.export(s, "microtask", () => n);
                                var o = e("./batcher.mjs");
                                let { schedule: n, cancel: i } = (0, o.createRenderBatcher)(queueMicrotask, !1);
                        },
                        { "./batcher.mjs": "quxNE", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                quxNE: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "createRenderBatcher", () => a),
                                    r.export(s, "stepsOrder", () => i);
                                var o = e("../utils/GlobalConfig.mjs"),
                                    n = e("./render-step.mjs");
                                let i = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
                                function a(e, t) {
                                        let s = !1,
                                            r = !0,
                                            a = { delta: 0, timestamp: 0, isProcessing: !1 },
                                            l = () => (s = !0),
                                            m = i.reduce((e, t) => ((e[t] = (0, n.createRenderStep)(l)), e), {}),
                                            { read: u, resolveKeyframes: c, update: p, preRender: d, render: h, postRender: f } = m,
                                            j = () => {
                                                    let n = o.MotionGlobalConfig.useManualTiming ? a.timestamp : performance.now();
                                                    (s = !1),
                                                        (a.delta = r ? 1e3 / 60 : Math.max(Math.min(n - a.timestamp, 40), 1)),
                                                        (a.timestamp = n),
                                                        (a.isProcessing = !0),
                                                        u.process(a),
                                                        c.process(a),
                                                        p.process(a),
                                                        d.process(a),
                                                        h.process(a),
                                                        f.process(a),
                                                        (a.isProcessing = !1),
                                                    s && t && ((r = !1), e(j));
                                            },
                                            v = () => {
                                                    (s = !0), (r = !0), a.isProcessing || e(j);
                                            },
                                            g = i.reduce((e, t) => {
                                                    let r = m[t];
                                                    return (e[t] = (e, t = !1, o = !1) => (s || v(), r.schedule(e, t, o))), e;
                                            }, {});
                                        return {
                                                schedule: g,
                                                cancel: (e) => {
                                                        for (let t = 0; t < i.length; t++) m[i[t]].cancel(e);
                                                },
                                                state: a,
                                                steps: m,
                                        };
                                }
                        },
                        {
                                "../utils/GlobalConfig.mjs": "7cL05",
                                "./render-step.mjs": "f98zH",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7cL05": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "MotionGlobalConfig", () => o);
                                let o = { skipAnimations: !1, useManualTiming: !1 };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                f98zH: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        let t = new Set(),
                                            s = new Set(),
                                            r = !1,
                                            o = !1,
                                            n = new WeakSet(),
                                            i = { delta: 0, timestamp: 0, isProcessing: !1 };
                                        function a(t) {
                                                n.has(t) && (l.schedule(t), e()), t(i);
                                        }
                                        let l = {
                                                schedule: (e, o = !1, i = !1) => {
                                                        let a = i && r,
                                                            l = a ? t : s;
                                                        return o && n.add(e), l.has(e) || l.add(e), e;
                                                },
                                                cancel: (e) => {
                                                        s.delete(e), n.delete(e);
                                                },
                                                process: (e) => {
                                                        if (((i = e), r)) {
                                                                o = !0;
                                                                return;
                                                        }
                                                        (r = !0),
                                                            ([t, s] = [s, t]),
                                                            s.clear(),
                                                            t.forEach(a),
                                                            (r = !1),
                                                        o && ((o = !1), l.process(e));
                                                },
                                        };
                                        return l;
                                }
                                r.defineInteropFlag(s), r.export(s, "createRenderStep", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "1Yx64": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
                                }
                                r.defineInteropFlag(s), r.export(s, "isRefObject", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                e6HSq: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "SwitchLayoutGroupContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)({});
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                fAelW: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useMotionRef", () => i);
                                var o = e("react"),
                                    n = e("../../utils/is-ref-object.mjs");
                                function i(e, t, s) {
                                        return (0, o.useCallback)(
                                            (r) => {
                                                    r && e.mount && e.mount(r),
                                                    t && (r ? t.mount(r) : t.unmount()),
                                                    s && ("function" == typeof s ? s(r) : (0, n.isRefObject)(s) && (s.current = r));
                                            },
                                            [t]
                                        );
                                }
                        },
                        {
                                react: "329PG",
                                "../../utils/is-ref-object.mjs": "1Yx64",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                kRSjk: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useCreateMotionContext", () => a);
                                var o = e("react"),
                                    n = e("./index.mjs"),
                                    i = e("./utils.mjs");
                                function a(e) {
                                        let { initial: t, animate: s } = (0, i.getCurrentTreeVariants)(
                                            e,
                                            (0, o.useContext)(n.MotionContext)
                                        );
                                        return (0, o.useMemo)(() => ({ initial: t, animate: s }), [l(t), l(s)]);
                                }
                                function l(e) {
                                        return Array.isArray(e) ? e.join(" ") : e;
                                }
                        },
                        {
                                react: "329PG",
                                "./index.mjs": "VCi0P",
                                "./utils.mjs": "h3bf9",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                h3bf9: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getCurrentTreeVariants", () => i);
                                var o = e("../../render/utils/is-variant-label.mjs"),
                                    n = e("../../render/utils/is-controlling-variants.mjs");
                                function i(e, t) {
                                        if ((0, n.isControllingVariants)(e)) {
                                                let { initial: t, animate: s } = e;
                                                return {
                                                        initial: !1 === t || (0, o.isVariantLabel)(t) ? t : void 0,
                                                        animate: (0, o.isVariantLabel)(s) ? s : void 0,
                                                };
                                        }
                                        return !1 !== e.inherit ? t : {};
                                }
                        },
                        {
                                "../../render/utils/is-variant-label.mjs": "luJLU",
                                "../../render/utils/is-controlling-variants.mjs": "4EN6W",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                luJLU: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        return "string" == typeof e || Array.isArray(e);
                                }
                                r.defineInteropFlag(s), r.export(s, "isVariantLabel", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4EN6W": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "isControllingVariants", () => a),
                                    r.export(s, "isVariantNode", () => l);
                                var o = e("../../animation/utils/is-animation-controls.mjs"),
                                    n = e("./is-variant-label.mjs"),
                                    i = e("./variant-props.mjs");
                                function a(e) {
                                        return (
                                            (0, o.isAnimationControls)(e.animate) ||
                                            (0, i.variantProps).some((t) => (0, n.isVariantLabel)(e[t]))
                                        );
                                }
                                function l(e) {
                                        return !!(a(e) || e.variants);
                                }
                        },
                        {
                                "../../animation/utils/is-animation-controls.mjs": "eFo9r",
                                "./is-variant-label.mjs": "luJLU",
                                "./variant-props.mjs": "YJ7Iq",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                eFo9r: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        return null !== e && "object" == typeof e && "function" == typeof e.start;
                                }
                                r.defineInteropFlag(s), r.export(s, "isAnimationControls", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                YJ7Iq: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "variantPriorityOrder", () => o),
                                    r.export(s, "variantProps", () => n);
                                let o = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                                    n = ["initial", ...o];
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                jZOrk: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "loadFeatures", () => n);
                                var o = e("./definitions.mjs");
                                function n(e) {
                                        for (let t in e) o.featureDefinitions[t] = { ...o.featureDefinitions[t], ...e[t] };
                                }
                        },
                        { "./definitions.mjs": "hxOgD", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                hxOgD: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "featureDefinitions", () => n);
                                let o = {
                                            animation: [
                                                    "animate",
                                                    "variants",
                                                    "whileHover",
                                                    "whileTap",
                                                    "exit",
                                                    "whileInView",
                                                    "whileFocus",
                                                    "whileDrag",
                                            ],
                                            exit: ["exit"],
                                            drag: ["drag", "dragControls"],
                                            focus: ["whileFocus"],
                                            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                                            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                                            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                                            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                                            layout: ["layout", "layoutId"],
                                    },
                                    n = {};
                                for (let e in o) n[e] = { isEnabled: (t) => o[e].some((e) => !!t[e]) };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                iFp6w: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "LayoutGroupContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)({});
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                jBk4q: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "motionComponentSymbol", () => o);
                                let o = Symbol.for("motionComponentSymbol");
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                gxmqQ: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "invariant", () => i), r.export(s, "warning", () => n);
                                var o = e("./noop.mjs");
                                let n = o.noop,
                                    i = o.noop;
                        },
                        { "./noop.mjs": "atNA1", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                atNA1: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "noop", () => o);
                                let o = (e) => e;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6ALaN": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createDomMotionConfig", () => l);
                                var o = e("./is-svg-component.mjs"),
                                    n = e("../use-render.mjs"),
                                    i = e("../../svg/config-motion.mjs"),
                                    a = e("../../html/config-motion.mjs");
                                function l(e, { forwardMotionProps: t = !1 }, s, r) {
                                        let l = (0, o.isSVGComponent)(e) ? i.svgMotionConfig : a.htmlMotionConfig;
                                        return {
                                                ...l,
                                                preloadedFeatures: s,
                                                useRender: (0, n.createUseRender)(t),
                                                createVisualElement: r,
                                                Component: e,
                                        };
                                }
                        },
                        {
                                "./is-svg-component.mjs": "hmcdr",
                                "../use-render.mjs": "iCrIX",
                                "../../svg/config-motion.mjs": "jFCUK",
                                "../../html/config-motion.mjs": "iAWy2",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                hmcdr: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isSVGComponent", () => n);
                                var o = e("../../svg/lowercase-elements.mjs");
                                function n(e) {
                                        if ("string" != typeof e || e.includes("-"));
                                        else if ((0, o.lowercaseSVGElements).indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
                                        return !1;
                                }
                        },
                        {
                                "../../svg/lowercase-elements.mjs": "1pNdq",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "1pNdq": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "lowercaseSVGElements", () => o);
                                let o = [
                                        "animate",
                                        "circle",
                                        "defs",
                                        "desc",
                                        "ellipse",
                                        "g",
                                        "image",
                                        "line",
                                        "filter",
                                        "marker",
                                        "mask",
                                        "metadata",
                                        "path",
                                        "pattern",
                                        "polygon",
                                        "polyline",
                                        "rect",
                                        "stop",
                                        "switch",
                                        "symbol",
                                        "svg",
                                        "text",
                                        "tspan",
                                        "use",
                                        "view",
                                ];
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                iCrIX: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createUseRender", () => u);
                                var o = e("react"),
                                    n = e("../html/use-props.mjs"),
                                    i = e("./utils/filter-props.mjs"),
                                    a = e("./utils/is-svg-component.mjs"),
                                    l = e("../svg/use-props.mjs"),
                                    m = e("../../value/utils/is-motion-value.mjs");
                                function u(e = !1) {
                                        return (t, s, r, { latestValues: u }, c) => {
                                                let p = (0, a.isSVGComponent)(t) ? l.useSVGProps : n.useHTMLProps,
                                                    d = p(s, u, c, t),
                                                    h = (0, i.filterProps)(s, "string" == typeof t, e),
                                                    f = t !== o.Fragment ? { ...h, ...d, ref: r } : {},
                                                    { children: j } = s,
                                                    v = (0, o.useMemo)(() => ((0, m.isMotionValue)(j) ? j.get() : j), [j]);
                                                return (0, o.createElement)(t, { ...f, children: v });
                                        };
                                }
                        },
                        {
                                react: "329PG",
                                "../html/use-props.mjs": "drj3d",
                                "./utils/filter-props.mjs": "12e0A",
                                "./utils/is-svg-component.mjs": "hmcdr",
                                "../svg/use-props.mjs": "eJZ0k",
                                "../../value/utils/is-motion-value.mjs": "6Wljo",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                drj3d: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "copyRawValuesOnly", () => m),
                                    r.export(s, "useHTMLProps", () => u);
                                var o = e("react"),
                                    n = e("../../motion/utils/is-forced-motion-value.mjs"),
                                    i = e("../../value/utils/is-motion-value.mjs"),
                                    a = e("./utils/build-styles.mjs"),
                                    l = e("./utils/create-render-state.mjs");
                                function m(e, t, s) {
                                        for (let r in t)
                                                (0, i.isMotionValue)(t[r]) || (0, n.isForcedMotionValue)(r, s) || (e[r] = t[r]);
                                }
                                function u(e, t) {
                                        let s = {},
                                            r = (function (e, t) {
                                                    let s = e.style || {},
                                                        r = {};
                                                    return (
                                                        m(r, s, e),
                                                            Object.assign(
                                                                r,
                                                                (function ({ transformTemplate: e }, t) {
                                                                        return (0, o.useMemo)(() => {
                                                                                let s = (0, l.createHtmlRenderState)();
                                                                                return (
                                                                                    (0, a.buildHTMLStyles)(s, t, e), Object.assign({}, s.vars, s.style)
                                                                                );
                                                                        }, [t]);
                                                                })(e, t)
                                                            ),
                                                            r
                                                    );
                                            })(e, t);
                                        return (
                                            e.drag &&
                                            !1 !== e.dragListener &&
                                            ((s.draggable = !1),
                                                (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
                                                (r.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
                                            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0),
                                                (s.style = r),
                                                s
                                        );
                                }
                        },
                        {
                                react: "329PG",
                                "../../motion/utils/is-forced-motion-value.mjs": "k3AZi",
                                "../../value/utils/is-motion-value.mjs": "6Wljo",
                                "./utils/build-styles.mjs": "bNCEv",
                                "./utils/create-render-state.mjs": "gRb7I",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                k3AZi: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isForcedMotionValue", () => i);
                                var o = e("../../projection/styles/scale-correction.mjs"),
                                    n = e("../../render/html/utils/transform.mjs");
                                function i(e, { layout: t, layoutId: s }) {
                                        return (
                                            (0, n.transformProps).has(e) ||
                                            e.startsWith("origin") ||
                                            ((t || void 0 !== s) && (!!o.scaleCorrectors[e] || "opacity" === e))
                                        );
                                }
                        },
                        {
                                "../../projection/styles/scale-correction.mjs": "8L0AH",
                                "../../render/html/utils/transform.mjs": "bEiM4",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "8L0AH": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "addScaleCorrector", () => n),
                                    r.export(s, "scaleCorrectors", () => o);
                                let o = {};
                                function n(e) {
                                        Object.assign(o, e);
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                bEiM4: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "transformPropOrder", () => o),
                                    r.export(s, "transformProps", () => n);
                                let o = [
                                            "transformPerspective",
                                            "x",
                                            "y",
                                            "z",
                                            "translateX",
                                            "translateY",
                                            "translateZ",
                                            "scale",
                                            "scaleX",
                                            "scaleY",
                                            "rotate",
                                            "rotateX",
                                            "rotateY",
                                            "rotateZ",
                                            "skew",
                                            "skewX",
                                            "skewY",
                                    ],
                                    n = new Set(o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6Wljo": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isMotionValue", () => o);
                                let o = (e) => !!(e && e.getVelocity);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                bNCEv: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "buildHTMLStyles", () => m);
                                var o = e("./build-transform.mjs"),
                                    n = e("../../dom/utils/is-css-variable.mjs"),
                                    i = e("./transform.mjs"),
                                    a = e("../../dom/value-types/get-as-type.mjs"),
                                    l = e("../../dom/value-types/number.mjs");
                                function m(e, t, s) {
                                        let { style: r, vars: m, transformOrigin: u } = e,
                                            c = !1,
                                            p = !1;
                                        for (let e in t) {
                                                let s = t[e];
                                                if ((0, i.transformProps).has(e)) {
                                                        c = !0;
                                                        continue;
                                                }
                                                if ((0, n.isCSSVariableName)(e)) {
                                                        m[e] = s;
                                                        continue;
                                                }
                                                {
                                                        let t = (0, a.getValueAsType)(s, l.numberValueTypes[e]);
                                                        e.startsWith("origin") ? ((p = !0), (u[e] = t)) : (r[e] = t);
                                                }
                                        }
                                        if (
                                            (!t.transform &&
                                            (c || s
                                                ? (r.transform = (0, o.buildTransform)(t, e.transform, s))
                                                : r.transform && (r.transform = "none")),
                                                p)
                                        ) {
                                                let { originX: e = "50%", originY: t = "50%", originZ: s = 0 } = u;
                                                r.transformOrigin = `${e} ${t} ${s}`;
                                        }
                                }
                        },
                        {
                                "./build-transform.mjs": "dddAE",
                                "../../dom/utils/is-css-variable.mjs": "5GTp9",
                                "./transform.mjs": "bEiM4",
                                "../../dom/value-types/get-as-type.mjs": "2NViG",
                                "../../dom/value-types/number.mjs": "fXKol",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                dddAE: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "buildTransform", () => m);
                                var o = e("./transform.mjs"),
                                    n = e("../../dom/value-types/get-as-type.mjs"),
                                    i = e("../../dom/value-types/number.mjs");
                                let a = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
                                    l = o.transformPropOrder.length;
                                function m(e, t, s) {
                                        let r = "",
                                            m = !0;
                                        for (let u = 0; u < l; u++) {
                                                let l = o.transformPropOrder[u],
                                                    c = e[l];
                                                if (void 0 === c) continue;
                                                let p = !0;
                                                if (
                                                    !(p =
                                                        "number" == typeof c
                                                            ? c === (l.startsWith("scale") ? 1 : 0)
                                                            : 0 === parseFloat(c)) ||
                                                    s
                                                ) {
                                                        let e = (0, n.getValueAsType)(c, i.numberValueTypes[l]);
                                                        if (!p) {
                                                                m = !1;
                                                                let t = a[l] || l;
                                                                r += `${t}(${e}) `;
                                                        }
                                                        s && (t[l] = e);
                                                }
                                        }
                                        return (r = r.trim()), s ? (r = s(t, m ? "" : r)) : m && (r = "none"), r;
                                }
                        },
                        {
                                "./transform.mjs": "bEiM4",
                                "../../dom/value-types/get-as-type.mjs": "2NViG",
                                "../../dom/value-types/number.mjs": "fXKol",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "2NViG": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getValueAsType", () => o);
                                let o = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                fXKol: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "numberValueTypes", () => a);
                                var o = e("../../../value/types/numbers/index.mjs"),
                                    n = e("../../../value/types/numbers/units.mjs"),
                                    i = e("./type-int.mjs");
                                let a = {
                                        borderWidth: n.px,
                                        borderTopWidth: n.px,
                                        borderRightWidth: n.px,
                                        borderBottomWidth: n.px,
                                        borderLeftWidth: n.px,
                                        borderRadius: n.px,
                                        radius: n.px,
                                        borderTopLeftRadius: n.px,
                                        borderTopRightRadius: n.px,
                                        borderBottomRightRadius: n.px,
                                        borderBottomLeftRadius: n.px,
                                        width: n.px,
                                        maxWidth: n.px,
                                        height: n.px,
                                        maxHeight: n.px,
                                        size: n.px,
                                        top: n.px,
                                        right: n.px,
                                        bottom: n.px,
                                        left: n.px,
                                        padding: n.px,
                                        paddingTop: n.px,
                                        paddingRight: n.px,
                                        paddingBottom: n.px,
                                        paddingLeft: n.px,
                                        margin: n.px,
                                        marginTop: n.px,
                                        marginRight: n.px,
                                        marginBottom: n.px,
                                        marginLeft: n.px,
                                        rotate: n.degrees,
                                        rotateX: n.degrees,
                                        rotateY: n.degrees,
                                        rotateZ: n.degrees,
                                        scale: o.scale,
                                        scaleX: o.scale,
                                        scaleY: o.scale,
                                        scaleZ: o.scale,
                                        skew: n.degrees,
                                        skewX: n.degrees,
                                        skewY: n.degrees,
                                        distance: n.px,
                                        translateX: n.px,
                                        translateY: n.px,
                                        translateZ: n.px,
                                        x: n.px,
                                        y: n.px,
                                        z: n.px,
                                        perspective: n.px,
                                        transformPerspective: n.px,
                                        opacity: o.alpha,
                                        originX: n.progressPercentage,
                                        originY: n.progressPercentage,
                                        originZ: n.px,
                                        zIndex: i.int,
                                        backgroundPositionX: n.px,
                                        backgroundPositionY: n.px,
                                        fillOpacity: o.alpha,
                                        strokeOpacity: o.alpha,
                                        numOctaves: i.int,
                                };
                        },
                        {
                                "../../../value/types/numbers/index.mjs": "a80qg",
                                "../../../value/types/numbers/units.mjs": "alPiW",
                                "./type-int.mjs": "030w1",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                a80qg: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "alpha", () => i),
                                    r.export(s, "number", () => n),
                                    r.export(s, "scale", () => a);
                                var o = e("../../../utils/clamp.mjs");
                                let n = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
                                    i = { ...n, transform: (e) => (0, o.clamp)(0, 1, e) },
                                    a = { ...n, default: 1 };
                        },
                        { "../../../utils/clamp.mjs": "j3fGo", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                j3fGo: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "clamp", () => o);
                                let o = (e, t, s) => (s > t ? t : s < e ? e : s);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                alPiW: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "degrees", () => i),
                                    r.export(s, "percent", () => a),
                                    r.export(s, "progressPercentage", () => c),
                                    r.export(s, "px", () => l),
                                    r.export(s, "vh", () => m),
                                    r.export(s, "vw", () => u);
                                var o = e("../utils.mjs");
                                let n = (e) => ({
                                            test: (t) => (0, o.isString)(t) && t.endsWith(e) && 1 === t.split(" ").length,
                                            parse: parseFloat,
                                            transform: (t) => `${t}${e}`,
                                    }),
                                    i = n("deg"),
                                    a = n("%"),
                                    l = n("px"),
                                    m = n("vh"),
                                    u = n("vw"),
                                    c = { ...a, parse: (e) => a.parse(e) / 100, transform: (e) => a.transform(100 * e) };
                        },
                        { "../utils.mjs": "gTcaL", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                gTcaL: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "colorRegex", () => i),
                                    r.export(s, "floatRegex", () => n),
                                    r.export(s, "isNullish", () => m),
                                    r.export(s, "isString", () => l),
                                    r.export(s, "sanitize", () => o),
                                    r.export(s, "singleColorRegex", () => a);
                                let o = (e) => Math.round(1e5 * e) / 1e5,
                                    n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                                    i =
                                        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                                    a =
                                        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
                                function l(e) {
                                        return "string" == typeof e;
                                }
                                function m(e) {
                                        return null == e;
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "030w1": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "int", () => n);
                                var o = e("../../../value/types/numbers/index.mjs");
                                let n = { ...o.number, transform: Math.round };
                        },
                        {
                                "../../../value/types/numbers/index.mjs": "a80qg",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "5GTp9": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "isCSSVariableName", () => n),
                                    r.export(s, "isCSSVariableToken", () => a);
                                let o = (e) => (t) => "string" == typeof t && t.startsWith(e),
                                    n = o("--"),
                                    i = o("var(--"),
                                    a = (e) => {
                                            let t = i(e);
                                            return !!t && l.test(e.split("/*")[0].trim());
                                    },
                                    l = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                gRb7I: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createHtmlRenderState", () => o);
                                let o = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "12e0A": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "filterProps", () => a),
                                    r.export(s, "loadExternalIsValidProp", () => i);
                                var o = e("../../../motion/utils/valid-prop.mjs");
                                let n = (e) => !(0, o.isValidMotionProp)(e);
                                function i(e) {
                                        e && (n = (t) => (t.startsWith("on") ? !(0, o.isValidMotionProp)(t) : e(t)));
                                }
                                try {
                                        i(e("ec5c95a3619d59cc").default);
                                } catch (e) {}
                                function a(e, t, s) {
                                        let r = {};
                                        for (let i in e)
                                                ("values" !== i || "object" != typeof e.values) &&
                                                (n(i) ||
                                                    (!0 === s && (0, o.isValidMotionProp)(i)) ||
                                                    (!t && !(0, o.isValidMotionProp)(i)) ||
                                                    (e.draggable && i.startsWith("onDrag"))) &&
                                                (r[i] = e[i]);
                                        return r;
                                }
                        },
                        {
                                "../../../motion/utils/valid-prop.mjs": "gm3HS",
                                ec5c95a3619d59cc: "@emotion/is-prop-valid",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                gm3HS: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isValidMotionProp", () => n);
                                let o = new Set([
                                        "animate",
                                        "exit",
                                        "variants",
                                        "initial",
                                        "style",
                                        "values",
                                        "variants",
                                        "transition",
                                        "transformTemplate",
                                        "custom",
                                        "inherit",
                                        "onBeforeLayoutMeasure",
                                        "onAnimationStart",
                                        "onAnimationComplete",
                                        "onUpdate",
                                        "onDragStart",
                                        "onDrag",
                                        "onDragEnd",
                                        "onMeasureDragConstraints",
                                        "onDirectionLock",
                                        "onDragTransitionEnd",
                                        "_dragX",
                                        "_dragY",
                                        "onHoverStart",
                                        "onHoverEnd",
                                        "onViewportEnter",
                                        "onViewportLeave",
                                        "globalTapTarget",
                                        "ignoreStrict",
                                        "viewport",
                                ]);
                                function n(e) {
                                        return (
                                            e.startsWith("while") ||
                                            (e.startsWith("drag") && "draggable" !== e) ||
                                            e.startsWith("layout") ||
                                            e.startsWith("onTap") ||
                                            e.startsWith("onPan") ||
                                            e.startsWith("onLayout") ||
                                            o.has(e)
                                        );
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                eJZ0k: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useSVGProps", () => m);
                                var o = e("react"),
                                    n = e("../html/use-props.mjs"),
                                    i = e("./utils/build-attrs.mjs"),
                                    a = e("./utils/create-render-state.mjs"),
                                    l = e("./utils/is-svg-tag.mjs");
                                function m(e, t, s, r) {
                                        let m = (0, o.useMemo)(() => {
                                                let s = (0, a.createSvgRenderState)();
                                                return (
                                                    (0, i.buildSVGAttrs)(s, t, (0, l.isSVGTag)(r), e.transformTemplate),
                                                        { ...s.attrs, style: { ...s.style } }
                                                );
                                        }, [t]);
                                        if (e.style) {
                                                let t = {};
                                                (0, n.copyRawValuesOnly)(t, e.style, e), (m.style = { ...t, ...m.style });
                                        }
                                        return m;
                                }
                        },
                        {
                                react: "329PG",
                                "../html/use-props.mjs": "drj3d",
                                "./utils/build-attrs.mjs": "eZhlU",
                                "./utils/create-render-state.mjs": "1zDdt",
                                "./utils/is-svg-tag.mjs": "gxNOK",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                eZhlU: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "buildSVGAttrs", () => a);
                                var o = e("../../html/utils/build-styles.mjs"),
                                    n = e("./transform-origin.mjs"),
                                    i = e("./path.mjs");
                                function a(
                                    e,
                                    {
                                            attrX: t,
                                            attrY: s,
                                            attrScale: r,
                                            originX: a,
                                            originY: l,
                                            pathLength: m,
                                            pathSpacing: u = 1,
                                            pathOffset: c = 0,
                                            ...p
                                    },
                                    d,
                                    h
                                ) {
                                        if (((0, o.buildHTMLStyles)(e, p, h), d)) {
                                                e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                                                return;
                                        }
                                        (e.attrs = e.style), (e.style = {});
                                        let { attrs: f, style: j, dimensions: v } = e;
                                        f.transform && (v && (j.transform = f.transform), delete f.transform),
                                        v &&
                                        (void 0 !== a || void 0 !== l || j.transform) &&
                                        (j.transformOrigin = (0, n.calcSVGTransformOrigin)(
                                            v,
                                            void 0 !== a ? a : 0.5,
                                            void 0 !== l ? l : 0.5
                                        )),
                                        void 0 !== t && (f.x = t),
                                        void 0 !== s && (f.y = s),
                                        void 0 !== r && (f.scale = r),
                                        void 0 !== m && (0, i.buildSVGPath)(f, m, u, c, !1);
                                }
                        },
                        {
                                "../../html/utils/build-styles.mjs": "bNCEv",
                                "./transform-origin.mjs": "h7VZ3",
                                "./path.mjs": "b2CTt",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                h7VZ3: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "calcSVGTransformOrigin", () => i);
                                var o = e("../../../value/types/numbers/units.mjs");
                                function n(e, t, s) {
                                        return "string" == typeof e ? e : (0, o.px).transform(t + s * e);
                                }
                                function i(e, t, s) {
                                        let r = n(t, e.x, e.width),
                                            o = n(s, e.y, e.height);
                                        return `${r} ${o}`;
                                }
                        },
                        {
                                "../../../value/types/numbers/units.mjs": "alPiW",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                b2CTt: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "buildSVGPath", () => a);
                                var o = e("../../../value/types/numbers/units.mjs");
                                let n = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
                                    i = { offset: "strokeDashoffset", array: "strokeDasharray" };
                                function a(e, t, s = 1, r = 0, a = !0) {
                                        e.pathLength = 1;
                                        let l = a ? n : i;
                                        e[l.offset] = (0, o.px).transform(-r);
                                        let m = (0, o.px).transform(t),
                                            u = (0, o.px).transform(s);
                                        e[l.array] = `${m} ${u}`;
                                }
                        },
                        {
                                "../../../value/types/numbers/units.mjs": "alPiW",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "1zDdt": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createSvgRenderState", () => n);
                                var o = e("../../html/utils/create-render-state.mjs");
                                let n = () => ({ ...(0, o.createHtmlRenderState)(), attrs: {} });
                        },
                        {
                                "../../html/utils/create-render-state.mjs": "gRb7I",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                gxNOK: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isSVGTag", () => o);
                                let o = (e) => "string" == typeof e && "svg" === e.toLowerCase();
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                jFCUK: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "svgMotionConfig", () => c);
                                var o = e("./utils/render.mjs"),
                                    n = e("./utils/scrape-motion-values.mjs"),
                                    i = e("../../motion/utils/use-visual-state.mjs"),
                                    a = e("./utils/create-render-state.mjs"),
                                    l = e("./utils/build-attrs.mjs"),
                                    m = e("./utils/is-svg-tag.mjs"),
                                    u = e("../../frameloop/frame.mjs");
                                let c = {
                                        useVisualState: (0, i.makeUseVisualState)({
                                                scrapeMotionValuesFromProps: n.scrapeMotionValuesFromProps,
                                                createRenderState: a.createSvgRenderState,
                                                onMount: (e, t, { renderState: s, latestValues: r }) => {
                                                        (0, u.frame).read(() => {
                                                                try {
                                                                        s.dimensions =
                                                                            "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
                                                                } catch (e) {
                                                                        s.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                                                                }
                                                        }),
                                                            (0, u.frame).render(() => {
                                                                    (0, l.buildSVGAttrs)(s, r, (0, m.isSVGTag)(t.tagName), e.transformTemplate),
                                                                        (0, o.renderSVG)(t, s);
                                                            });
                                                },
                                        }),
                                };
                        },
                        {
                                "./utils/render.mjs": "b5XTz",
                                "./utils/scrape-motion-values.mjs": "3i3X7",
                                "../../motion/utils/use-visual-state.mjs": "5RAr3",
                                "./utils/create-render-state.mjs": "1zDdt",
                                "./utils/build-attrs.mjs": "eZhlU",
                                "./utils/is-svg-tag.mjs": "gxNOK",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                b5XTz: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "renderSVG", () => a);
                                var o = e("../../dom/utils/camel-to-dash.mjs"),
                                    n = e("../../html/utils/render.mjs"),
                                    i = e("./camel-case-attrs.mjs");
                                function a(e, t, s, r) {
                                        for (let s in ((0, n.renderHTML)(e, t, void 0, r), t.attrs))
                                                e.setAttribute((0, i.camelCaseAttributes).has(s) ? s : (0, o.camelToDash)(s), t.attrs[s]);
                                }
                        },
                        {
                                "../../dom/utils/camel-to-dash.mjs": "8t9U3",
                                "../../html/utils/render.mjs": "3vH7P",
                                "./camel-case-attrs.mjs": "aGfRG",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "3vH7P": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, { style: t, vars: s }, r, o) {
                                        for (let n in (Object.assign(e.style, t, o && o.getProjectionStyles(r)), s))
                                                e.style.setProperty(n, s[n]);
                                }
                                r.defineInteropFlag(s), r.export(s, "renderHTML", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                aGfRG: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "camelCaseAttributes", () => o);
                                let o = new Set([
                                        "baseFrequency",
                                        "diffuseConstant",
                                        "kernelMatrix",
                                        "kernelUnitLength",
                                        "keySplines",
                                        "keyTimes",
                                        "limitingConeAngle",
                                        "markerHeight",
                                        "markerWidth",
                                        "numOctaves",
                                        "targetX",
                                        "targetY",
                                        "surfaceScale",
                                        "specularConstant",
                                        "specularExponent",
                                        "stdDeviation",
                                        "tableValues",
                                        "viewBox",
                                        "gradientTransform",
                                        "pathLength",
                                        "startOffset",
                                        "textLength",
                                        "lengthAdjust",
                                ]);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "3i3X7": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "scrapeMotionValuesFromProps", () => a);
                                var o = e("../../../value/utils/is-motion-value.mjs"),
                                    n = e("../../html/utils/scrape-motion-values.mjs"),
                                    i = e("../../html/utils/transform.mjs");
                                function a(e, t, s) {
                                        let r = (0, n.scrapeMotionValuesFromProps)(e, t, s);
                                        for (let s in e)
                                                if ((0, o.isMotionValue)(e[s]) || (0, o.isMotionValue)(t[s])) {
                                                        let t =
                                                            -1 !== (0, i.transformPropOrder).indexOf(s)
                                                                ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
                                                                : s;
                                                        r[t] = e[s];
                                                }
                                        return r;
                                }
                        },
                        {
                                "../../../value/utils/is-motion-value.mjs": "6Wljo",
                                "../../html/utils/scrape-motion-values.mjs": "fAw3G",
                                "../../html/utils/transform.mjs": "bEiM4",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                fAw3G: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "scrapeMotionValuesFromProps", () => i);
                                var o = e("../../../motion/utils/is-forced-motion-value.mjs"),
                                    n = e("../../../value/utils/is-motion-value.mjs");
                                function i(e, t, s) {
                                        var r;
                                        let { style: i } = e,
                                            a = {};
                                        for (let l in i)
                                                ((0, n.isMotionValue)(i[l]) ||
                                                    (t.style && (0, n.isMotionValue)(t.style[l])) ||
                                                    (0, o.isForcedMotionValue)(l, e) ||
                                                    (null === (r = null == s ? void 0 : s.getValue(l)) || void 0 === r
                                                        ? void 0
                                                        : r.liveStyle) !== void 0) &&
                                                (a[l] = i[l]);
                                        return s && i && "string" == typeof i.willChange && (s.applyWillChange = !1), a;
                                }
                        },
                        {
                                "../../../motion/utils/is-forced-motion-value.mjs": "k3AZi",
                                "../../../value/utils/is-motion-value.mjs": "6Wljo",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "5RAr3": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "makeUseVisualState", () => h);
                                var o = e("react"),
                                    n = e("../../animation/utils/is-animation-controls.mjs"),
                                    i = e("../../context/PresenceContext.mjs"),
                                    a = e("../../render/utils/resolve-variants.mjs"),
                                    l = e("../../utils/use-constant.mjs"),
                                    m = e("../../value/utils/resolve-motion-value.mjs"),
                                    u = e("../../context/MotionContext/index.mjs"),
                                    c = e("../../render/utils/is-controlling-variants.mjs"),
                                    p = e("../../value/use-will-change/get-will-change-name.mjs"),
                                    d = e("../../utils/array.mjs");
                                let h = (e) => (t, s) => {
                                        let r = (0, o.useContext)(u.MotionContext),
                                            a = (0, o.useContext)(i.PresenceContext),
                                            h = () =>
                                                (function (
                                                    {
                                                            applyWillChange: e = !1,
                                                            scrapeMotionValuesFromProps: t,
                                                            createRenderState: s,
                                                            onMount: r,
                                                    },
                                                    o,
                                                    i,
                                                    a,
                                                    l
                                                ) {
                                                        let u = {
                                                                latestValues: (function (e, t, s, r, o) {
                                                                        var i;
                                                                        let a = {},
                                                                            l = [],
                                                                            u =
                                                                                r &&
                                                                                (null === (i = e.style) || void 0 === i ? void 0 : i.willChange) ===
                                                                                void 0,
                                                                            h = o(e, {});
                                                                        for (let e in h) a[e] = (0, m.resolveMotionValue)(h[e]);
                                                                        let { initial: j, animate: v } = e,
                                                                            g = (0, c.isControllingVariants)(e),
                                                                            x = (0, c.isVariantNode)(e);
                                                                        t &&
                                                                        x &&
                                                                        !g &&
                                                                        !1 !== e.inherit &&
                                                                        (void 0 === j && (j = t.initial), void 0 === v && (v = t.animate));
                                                                        let y = !!s && !1 === s.initial;
                                                                        y = y || !1 === j;
                                                                        let b = y ? v : j;
                                                                        return (
                                                                            b &&
                                                                            "boolean" != typeof b &&
                                                                            !(0, n.isAnimationControls)(b) &&
                                                                            f(e, b, (e, t) => {
                                                                                    for (let t in e) {
                                                                                            let s = e[t];
                                                                                            if (Array.isArray(s)) {
                                                                                                    let e = y ? s.length - 1 : 0;
                                                                                                    s = s[e];
                                                                                            }
                                                                                            null !== s && (a[t] = s);
                                                                                    }
                                                                                    for (let e in t) a[e] = t[e];
                                                                            }),
                                                                            u &&
                                                                            (v &&
                                                                            !1 !== j &&
                                                                            !(0, n.isAnimationControls)(v) &&
                                                                            f(e, v, (e) => {
                                                                                    for (let t in e)
                                                                                            !(function (e, t) {
                                                                                                    let s = (0, p.getWillChangeName)(t);
                                                                                                    s && (0, d.addUniqueItem)(e, s);
                                                                                            })(l, t);
                                                                            }),
                                                                            l.length && (a.willChange = l.join(","))),
                                                                                a
                                                                        );
                                                                })(o, i, a, !l && e, t),
                                                                renderState: s(),
                                                        };
                                                        return r && (u.mount = (e) => r(o, e, u)), u;
                                                })(e, t, r, a, s);
                                        return s ? h() : (0, l.useConstant)(h);
                                };
                                function f(e, t, s) {
                                        let r = Array.isArray(t) ? t : [t];
                                        for (let t = 0; t < r.length; t++) {
                                                let o = (0, a.resolveVariantFromProps)(e, r[t]);
                                                if (o) {
                                                        let { transitionEnd: e, transition: t, ...r } = o;
                                                        s(r, e);
                                                }
                                        }
                                }
                        },
                        {
                                react: "329PG",
                                "../../animation/utils/is-animation-controls.mjs": "eFo9r",
                                "../../context/PresenceContext.mjs": "b9Qy5",
                                "../../render/utils/resolve-variants.mjs": "839cw",
                                "../../utils/use-constant.mjs": "hpJtv",
                                "../../value/utils/resolve-motion-value.mjs": "lYqt7",
                                "../../context/MotionContext/index.mjs": "VCi0P",
                                "../../render/utils/is-controlling-variants.mjs": "4EN6W",
                                "../../value/use-will-change/get-will-change-name.mjs": "fVOmU",
                                "../../utils/array.mjs": "7RTUe",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "839cw": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        let t = [{}, {}];
                                        return (
                                            null == e ||
                                            e.values.forEach((e, s) => {
                                                    (t[0][s] = e.get()), (t[1][s] = e.getVelocity());
                                            }),
                                                t
                                        );
                                }
                                function n(e, t, s, r) {
                                        if ("function" == typeof t) {
                                                let [n, i] = o(r);
                                                t = t(void 0 !== s ? s : e.custom, n, i);
                                        }
                                        if (("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t)) {
                                                let [n, i] = o(r);
                                                t = t(void 0 !== s ? s : e.custom, n, i);
                                        }
                                        return t;
                                }
                                r.defineInteropFlag(s), r.export(s, "resolveVariantFromProps", () => n);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                hpJtv: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useConstant", () => n);
                                var o = e("react");
                                function n(e) {
                                        let t = (0, o.useRef)(null);
                                        return null === t.current && (t.current = e()), t.current;
                                }
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                lYqt7: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "resolveMotionValue", () => i);
                                var o = e("../../utils/resolve-value.mjs"),
                                    n = e("./is-motion-value.mjs");
                                function i(e) {
                                        let t = (0, n.isMotionValue)(e) ? e.get() : e;
                                        return (0, o.isCustomValue)(t) ? t.toValue() : t;
                                }
                        },
                        {
                                "../../utils/resolve-value.mjs": "61mtM",
                                "./is-motion-value.mjs": "6Wljo",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "61mtM": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "isCustomValue", () => n),
                                    r.export(s, "resolveFinalValueInKeyframes", () => i);
                                var o = e("../animation/utils/is-keyframes-target.mjs");
                                let n = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
                                    i = (e) => ((0, o.isKeyframesTarget)(e) ? e[e.length - 1] || 0 : e);
                        },
                        {
                                "../animation/utils/is-keyframes-target.mjs": "gLv0Q",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                gLv0Q: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isKeyframesTarget", () => o);
                                let o = (e) => Array.isArray(e);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                fVOmU: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getWillChangeName", () => a);
                                var o = e("../../animation/animators/utils/accelerated-values.mjs"),
                                    n = e("../../render/dom/utils/camel-to-dash.mjs"),
                                    i = e("../../render/html/utils/transform.mjs");
                                function a(e) {
                                        return (0, i.transformProps).has(e)
                                            ? "transform"
                                            : (0, o.acceleratedValues).has(e)
                                                ? (0, n.camelToDash)(e)
                                                : void 0;
                                }
                        },
                        {
                                "../../animation/animators/utils/accelerated-values.mjs": "bHw8X",
                                "../../render/dom/utils/camel-to-dash.mjs": "8t9U3",
                                "../../render/html/utils/transform.mjs": "bEiM4",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                bHw8X: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "acceleratedValues", () => o);
                                let o = new Set(["opacity", "clipPath", "filter", "transform"]);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "7RTUe": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t) {
                                        -1 === e.indexOf(t) && e.push(t);
                                }
                                function n(e, t) {
                                        let s = e.indexOf(t);
                                        s > -1 && e.splice(s, 1);
                                }
                                function i([...e], t, s) {
                                        let r = t < 0 ? e.length + t : t;
                                        if (r >= 0 && r < e.length) {
                                                let r = s < 0 ? e.length + s : s,
                                                    [o] = e.splice(t, 1);
                                                e.splice(r, 0, o);
                                        }
                                        return e;
                                }
                                r.defineInteropFlag(s),
                                    r.export(s, "addUniqueItem", () => o),
                                    r.export(s, "moveItem", () => i),
                                    r.export(s, "removeItem", () => n);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "7hMWE": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "cancelFrame", () => a),
                                    r.export(s, "frame", () => i),
                                    r.export(s, "frameData", () => l),
                                    r.export(s, "steps", () => m);
                                var o = e("../utils/noop.mjs"),
                                    n = e("./batcher.mjs");
                                let {
                                        schedule: i,
                                        cancel: a,
                                        state: l,
                                        steps: m,
                                } = (0, n.createRenderBatcher)(
                                    "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : o.noop,
                                    !0
                                );
                        },
                        {
                                "../utils/noop.mjs": "atNA1",
                                "./batcher.mjs": "quxNE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                iAWy2: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "htmlMotionConfig", () => a);
                                var o = e("../../motion/utils/use-visual-state.mjs"),
                                    n = e("./utils/scrape-motion-values.mjs"),
                                    i = e("./utils/create-render-state.mjs");
                                let a = {
                                        useVisualState: (0, o.makeUseVisualState)({
                                                applyWillChange: !0,
                                                scrapeMotionValuesFromProps: n.scrapeMotionValuesFromProps,
                                                createRenderState: i.createHtmlRenderState,
                                        }),
                                };
                        },
                        {
                                "../../motion/utils/use-visual-state.mjs": "5RAr3",
                                "./utils/scrape-motion-values.mjs": "fAw3G",
                                "./utils/create-render-state.mjs": "gRb7I",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9kXBS": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "AnimatePresence", () => p);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("./PresenceChild.mjs"),
                                    a = e("../../context/LayoutGroupContext.mjs"),
                                    l = e("../../utils/errors.mjs"),
                                    m = e("../../utils/use-constant.mjs"),
                                    u = e("./utils.mjs"),
                                    c = e("../../utils/use-isomorphic-effect.mjs");
                                let p = ({
                                                 children: e,
                                                 exitBeforeEnter: t,
                                                 custom: s,
                                                 initial: r = !0,
                                                 onExitComplete: p,
                                                 presenceAffectsLayout: d = !0,
                                                 mode: h = "sync",
                                         }) => {
                                        (0, l.invariant)(!t, "Replace exitBeforeEnter with mode='wait'");
                                        let f = (0, n.useMemo)(() => (0, u.onlyElements)(e), [e]),
                                            j = f.map(u.getChildKey),
                                            v = (0, n.useRef)(!0),
                                            g = (0, n.useRef)(f),
                                            x = (0, m.useConstant)(() => new Map()),
                                            [y, b] = (0, n.useState)(f),
                                            [P, C] = (0, n.useState)(f);
                                        (0, c.useIsomorphicLayoutEffect)(() => {
                                                (v.current = !1), (g.current = f);
                                                for (let e = 0; e < P.length; e++) {
                                                        let t = (0, u.getChildKey)(P[e]);
                                                        j.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1);
                                                }
                                        }, [P, j.length, j.join("-")]);
                                        let S = [];
                                        if (f !== y) {
                                                let e = [...f];
                                                for (let t = 0; t < P.length; t++) {
                                                        let s = P[t],
                                                            r = (0, u.getChildKey)(s);
                                                        j.includes(r) || (e.splice(t, 0, s), S.push(s));
                                                }
                                                "wait" === h && S.length && (e = S), C((0, u.onlyElements)(e)), b(f);
                                                return;
                                        }
                                        let { forceRender: T } = (0, n.useContext)(a.LayoutGroupContext);
                                        return (0, o.jsx)(o.Fragment, {
                                                children: P.map((e) => {
                                                        let t = (0, u.getChildKey)(e),
                                                            n = f === P || j.includes(t);
                                                        return (0, o.jsx)(
                                                            i.PresenceChild,
                                                            {
                                                                    isPresent: n,
                                                                    initial: (!v.current || !!r) && void 0,
                                                                    custom: n ? void 0 : s,
                                                                    presenceAffectsLayout: d,
                                                                    mode: h,
                                                                    onExitComplete: n
                                                                        ? void 0
                                                                        : () => {
                                                                                if (!x.has(t)) return;
                                                                                x.set(t, !0);
                                                                                let e = !0;
                                                                                x.forEach((t) => {
                                                                                        t || (e = !1);
                                                                                }),
                                                                                e && (null == T || T(), C(g.current), p && p());
                                                                        },
                                                                    children: e,
                                                            },
                                                            t
                                                        );
                                                }),
                                        });
                                };
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "./PresenceChild.mjs": "fytZo",
                                "../../context/LayoutGroupContext.mjs": "iFp6w",
                                "../../utils/errors.mjs": "gxmqQ",
                                "../../utils/use-constant.mjs": "hpJtv",
                                "./utils.mjs": "7e8VS",
                                "../../utils/use-isomorphic-effect.mjs": "eUjIi",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                fytZo: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "PresenceChild", () => m);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../../context/PresenceContext.mjs"),
                                    a = e("../../utils/use-constant.mjs"),
                                    l = e("./PopChild.mjs");
                                let m = ({
                                                 children: e,
                                                 initial: t,
                                                 isPresent: s,
                                                 onExitComplete: r,
                                                 custom: m,
                                                 presenceAffectsLayout: c,
                                                 mode: p,
                                         }) => {
                                        let d = (0, a.useConstant)(u),
                                            h = (0, n.useId)(),
                                            f = (0, n.useMemo)(
                                                () => ({
                                                        id: h,
                                                        initial: t,
                                                        isPresent: s,
                                                        custom: m,
                                                        onExitComplete: (e) => {
                                                                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                                                                r && r();
                                                        },
                                                        register: (e) => (d.set(e, !1), () => d.delete(e)),
                                                }),
                                                c ? [Math.random()] : [s]
                                            );
                                        return (
                                            (0, n.useMemo)(() => {
                                                    d.forEach((e, t) => d.set(t, !1));
                                            }, [s]),
                                                n.useEffect(() => {
                                                        s || d.size || !r || r();
                                                }, [s]),
                                            "popLayout" === p && (e = (0, o.jsx)(l.PopChild, { isPresent: s, children: e })),
                                                (0, o.jsx)(i.PresenceContext.Provider, { value: f, children: e })
                                        );
                                };
                                function u() {
                                        return new Map();
                                }
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../../context/PresenceContext.mjs": "b9Qy5",
                                "../../utils/use-constant.mjs": "hpJtv",
                                "./PopChild.mjs": "ACimI",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                ACimI: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "PopChild", () => l);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../../context/MotionConfigContext.mjs");
                                class a extends n.Component {
                                        getSnapshotBeforeUpdate(e) {
                                                let t = this.props.childRef.current;
                                                if (t && e.isPresent && !this.props.isPresent) {
                                                        let e = this.props.sizeRef.current;
                                                        (e.height = t.offsetHeight || 0),
                                                            (e.width = t.offsetWidth || 0),
                                                            (e.top = t.offsetTop),
                                                            (e.left = t.offsetLeft);
                                                }
                                                return null;
                                        }
                                        componentDidUpdate() {}
                                        render() {
                                                return this.props.children;
                                        }
                                }
                                function l({ children: e, isPresent: t }) {
                                        let s = (0, n.useId)(),
                                            r = (0, n.useRef)(null),
                                            l = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
                                            { nonce: m } = (0, n.useContext)(i.MotionConfigContext);
                                        return (
                                            (0, n.useInsertionEffect)(() => {
                                                    let { width: e, height: o, top: n, left: i } = l.current;
                                                    if (t || !r.current || !e || !o) return;
                                                    r.current.dataset.motionPopId = s;
                                                    let a = document.createElement("style");
                                                    return (
                                                        m && (a.nonce = m),
                                                            document.head.appendChild(a),
                                                        a.sheet &&
                                                        a.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${n}px !important;
            left: ${i}px !important;
          }
        `),
                                                            () => {
                                                                    document.head.removeChild(a);
                                                            }
                                                    );
                                            }, [t]),
                                                (0, o.jsx)(a, {
                                                        isPresent: t,
                                                        childRef: r,
                                                        sizeRef: l,
                                                        children: n.cloneElement(e, { ref: r }),
                                                })
                                        );
                                }
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../../context/MotionConfigContext.mjs": "gjLIN",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7e8VS": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getChildKey", () => n), r.export(s, "onlyElements", () => i);
                                var o = e("react");
                                let n = (e) => e.key || "";
                                function i(e) {
                                        let t = [];
                                        return (
                                            (0, o.Children).forEach(e, (e) => {
                                                    (0, o.isValidElement)(e) && t.push(e);
                                            }),
                                                t
                                        );
                                }
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                la0ew: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "MotionConfig", () => m);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../../context/MotionConfigContext.mjs"),
                                    a = e("../../render/dom/utils/filter-props.mjs"),
                                    l = e("../../utils/use-constant.mjs");
                                function m({ children: e, isValidProp: t, ...s }) {
                                        t && (0, a.loadExternalIsValidProp)(t),
                                            ((s = { ...(0, n.useContext)(i.MotionConfigContext), ...s }).isStatic = (0, l.useConstant)(
                                                () => s.isStatic
                                            ));
                                        let r = (0, n.useMemo)(
                                            () => s,
                                            [JSON.stringify(s.transition), s.transformPagePoint, s.reducedMotion]
                                        );
                                        return (0, o.jsx)(i.MotionConfigContext.Provider, { value: r, children: e });
                                }
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../../context/MotionConfigContext.mjs": "gjLIN",
                                "../../render/dom/utils/filter-props.mjs": "12e0A",
                                "../../utils/use-constant.mjs": "hpJtv",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                jQeNE: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "LazyMotion", () => l);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../../context/LazyContext.mjs"),
                                    a = e("../../motion/features/load-features.mjs");
                                function l({ children: e, features: t, strict: s = !1 }) {
                                        let [, r] = (0, n.useState)(!m(t)),
                                            l = (0, n.useRef)(void 0);
                                        if (!m(t)) {
                                                let { renderer: e, ...s } = t;
                                                (l.current = e), (0, a.loadFeatures)(s);
                                        }
                                        return (
                                            (0, n.useEffect)(() => {
                                                    m(t) &&
                                                    t().then(({ renderer: e, ...t }) => {
                                                            (0, a.loadFeatures)(t), (l.current = e), r(!0);
                                                    });
                                            }, []),
                                                (0, o.jsx)(i.LazyContext.Provider, {
                                                        value: { renderer: l.current, strict: s },
                                                        children: e,
                                                })
                                        );
                                }
                                function m(e) {
                                        return "function" == typeof e;
                                }
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../../context/LazyContext.mjs": "4Eebm",
                                "../../motion/features/load-features.mjs": "jZOrk",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                k54AS: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "LayoutGroup", () => p);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../../context/LayoutGroupContext.mjs"),
                                    a = e("../../context/DeprecatedLayoutGroupContext.mjs"),
                                    l = e("../../utils/use-force-update.mjs"),
                                    m = e("../../projection/node/group.mjs");
                                let u = (e) => !0 === e,
                                    c = (e) => u(!0 === e) || "id" === e,
                                    p = ({ children: e, id: t, inherit: s = !0 }) => {
                                            let r = (0, n.useContext)(i.LayoutGroupContext),
                                                p = (0, n.useContext)(a.DeprecatedLayoutGroupContext),
                                                [d, h] = (0, l.useForceUpdate)(),
                                                f = (0, n.useRef)(null),
                                                j = r.id || p;
                                            null === f.current &&
                                            (c(s) && j && (t = t ? j + "-" + t : j),
                                                (f.current = { id: t, group: (u(s) && r.group) || (0, m.nodeGroup)() }));
                                            let v = (0, n.useMemo)(() => ({ ...f.current, forceRender: d }), [h]);
                                            return (0, o.jsx)(i.LayoutGroupContext.Provider, { value: v, children: e });
                                    };
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../../context/LayoutGroupContext.mjs": "iFp6w",
                                "../../context/DeprecatedLayoutGroupContext.mjs": "eSztm",
                                "../../utils/use-force-update.mjs": "buUqC",
                                "../../projection/node/group.mjs": "3H3lr",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                eSztm: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "DeprecatedLayoutGroupContext", () => n);
                                var o = e("react");
                                let n = (0, o.createContext)(null);
                        },
                        { react: "329PG", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                buUqC: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useForceUpdate", () => a);
                                var o = e("react"),
                                    n = e("./use-is-mounted.mjs"),
                                    i = e("../frameloop/frame.mjs");
                                function a() {
                                        let e = (0, n.useIsMounted)(),
                                            [t, s] = (0, o.useState)(0),
                                            r = (0, o.useCallback)(() => {
                                                    e.current && s(t + 1);
                                            }, [t]),
                                            a = (0, o.useCallback)(() => (0, i.frame).postRender(r), [r]);
                                        return [a, t];
                                }
                        },
                        {
                                react: "329PG",
                                "./use-is-mounted.mjs": "2PAcM",
                                "../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "2PAcM": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "useIsMounted", () => i);
                                var o = e("react"),
                                    n = e("./use-isomorphic-effect.mjs");
                                function i() {
                                        let e = (0, o.useRef)(!1);
                                        return (
                                            (0, n.useIsomorphicLayoutEffect)(
                                                () => (
                                                    (e.current = !0),
                                                        () => {
                                                                e.current = !1;
                                                        }
                                                ),
                                                []
                                            ),
                                                e
                                        );
                                }
                        },
                        {
                                react: "329PG",
                                "./use-isomorphic-effect.mjs": "eUjIi",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "3H3lr": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "nodeGroup", () => n);
                                let o = (e) => !e.isLayoutDirty && e.willUpdate(!1);
                                function n() {
                                        let e = new Set(),
                                            t = new WeakMap(),
                                            s = () => e.forEach(o);
                                        return {
                                                add: (r) => {
                                                        e.add(r), t.set(r, r.addEventListener("willUpdate", s));
                                                },
                                                remove: (r) => {
                                                        e.delete(r);
                                                        let o = t.get(r);
                                                        o && (o(), t.delete(r)), s();
                                                },
                                                dirty: s,
                                        };
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                fhRRO: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "domAnimation", () => a);
                                var o = e("../../motion/features/animations.mjs"),
                                    n = e("../../motion/features/gestures.mjs"),
                                    i = e("./create-visual-element.mjs");
                                let a = { renderer: i.createDomVisualElement, ...o.animations, ...n.gestureAnimations };
                        },
                        {
                                "../../motion/features/animations.mjs": "kP6tf",
                                "../../motion/features/gestures.mjs": "j34qs",
                                "./create-visual-element.mjs": "iEoKd",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                kP6tf: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "animations", () => i);
                                var o = e("./animation/index.mjs"),
                                    n = e("./animation/exit.mjs");
                                let i = { animation: { Feature: o.AnimationFeature }, exit: { Feature: n.ExitAnimationFeature } };
                        },
                        {
                                "./animation/index.mjs": "i5OgR",
                                "./animation/exit.mjs": "efdCm",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                i5OgR: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "AnimationFeature", () => a);
                                var o = e("../../../animation/utils/is-animation-controls.mjs"),
                                    n = e("../../../render/utils/animation-state.mjs"),
                                    i = e("../Feature.mjs");
                                class a extends i.Feature {
                                        constructor(e) {
                                                super(e), e.animationState || (e.animationState = (0, n.createAnimationState)(e));
                                        }
                                        updateAnimationControlsSubscription() {
                                                let { animate: e } = this.node.getProps();
                                                (0, o.isAnimationControls)(e) && (this.unmountControls = e.subscribe(this.node));
                                        }
                                        mount() {
                                                this.updateAnimationControlsSubscription();
                                        }
                                        update() {
                                                let { animate: e } = this.node.getProps(),
                                                    { animate: t } = this.node.prevProps || {};
                                                e !== t && this.updateAnimationControlsSubscription();
                                        }
                                        unmount() {
                                                var e;
                                                this.node.animationState.reset(),
                                                null === (e = this.unmountControls) || void 0 === e || e.call(this);
                                        }
                                }
                        },
                        {
                                "../../../animation/utils/is-animation-controls.mjs": "eFo9r",
                                "../../../render/utils/animation-state.mjs": "dQkvF",
                                "../Feature.mjs": "gTgdN",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                dQkvF: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "checkVariantsDidChange", () => h),
                                    r.export(s, "createAnimationState", () => d);
                                var o = e("../../animation/utils/is-animation-controls.mjs"),
                                    n = e("../../animation/utils/is-keyframes-target.mjs"),
                                    i = e("../../utils/shallow-compare.mjs"),
                                    a = e("./is-variant-label.mjs"),
                                    l = e("./resolve-dynamic-variants.mjs"),
                                    m = e("./variant-props.mjs"),
                                    u = e("../../animation/interfaces/visual-element.mjs");
                                let c = [...(0, m.variantPriorityOrder)].reverse(),
                                    p = m.variantPriorityOrder.length;
                                function d(e) {
                                        let t = (t) =>
                                                Promise.all(
                                                    t.map(({ animation: t, options: s }) => (0, u.animateVisualElement)(e, t, s))
                                                ),
                                            s = j(),
                                            r = !0,
                                            m = (t) => (s, r) => {
                                                    var o;
                                                    let n = (0, l.resolveVariant)(
                                                        e,
                                                        r,
                                                        "exit" === t
                                                            ? null === (o = e.presenceContext) || void 0 === o
                                                                ? void 0
                                                                : o.custom
                                                            : void 0
                                                    );
                                                    if (n) {
                                                            let { transition: e, transitionEnd: t, ...r } = n;
                                                            s = { ...s, ...r, ...t };
                                                    }
                                                    return s;
                                            };
                                        function d(l) {
                                                let u = e.getProps(),
                                                    d = e.getVariantContext(!0) || {},
                                                    f = [],
                                                    j = new Set(),
                                                    v = {},
                                                    g = 1 / 0;
                                                for (let t = 0; t < p; t++) {
                                                        let p = c[t],
                                                            x = s[p],
                                                            y = void 0 !== u[p] ? u[p] : d[p],
                                                            b = (0, a.isVariantLabel)(y),
                                                            P = p === l ? x.isActive : null;
                                                        !1 === P && (g = t);
                                                        let C = y === d[p] && y !== u[p] && b;
                                                        if (
                                                            (C && r && e.manuallyAnimateOnMount && (C = !1),
                                                                (x.protectedKeys = { ...v }),
                                                            (!x.isActive && null === P) ||
                                                            (!y && !x.prevProp) ||
                                                            (0, o.isAnimationControls)(y) ||
                                                            "boolean" == typeof y)
                                                        )
                                                                continue;
                                                        let S = h(x.prevProp, y),
                                                            T = S || (p === l && x.isActive && !C && b) || (t > g && b),
                                                            V = !1,
                                                            F = Array.isArray(y) ? y : [y],
                                                            w = F.reduce(m(p), {});
                                                        !1 === P && (w = {});
                                                        let { prevResolvedValues: A = {} } = x,
                                                            M = { ...A, ...w },
                                                            I = (t) => {
                                                                    (T = !0), j.has(t) && ((V = !0), j.delete(t)), (x.needsAnimating[t] = !0);
                                                                    let s = e.getValue(t);
                                                                    s && (s.liveStyle = !1);
                                                            };
                                                        for (let e in M) {
                                                                let t = w[e],
                                                                    s = A[e];
                                                                if (!v.hasOwnProperty(e))
                                                                        (
                                                                            (0, n.isKeyframesTarget)(t) && (0, n.isKeyframesTarget)(s)
                                                                                ? (0, i.shallowCompare)(t, s)
                                                                                : t === s
                                                                        )
                                                                            ? void 0 !== t && j.has(e)
                                                                                ? I(e)
                                                                                : (x.protectedKeys[e] = !0)
                                                                            : null != t
                                                                                ? I(e)
                                                                                : j.add(e);
                                                        }
                                                        (x.prevProp = y),
                                                            (x.prevResolvedValues = w),
                                                        x.isActive && (v = { ...v, ...w }),
                                                        r && e.blockInitialAnimation && (T = !1),
                                                        T && (!C || V) && f.push(...F.map((e) => ({ animation: e, options: { type: p } })));
                                                }
                                                if (j.size) {
                                                        let t = {};
                                                        j.forEach((s) => {
                                                                let r = e.getBaseTarget(s),
                                                                    o = e.getValue(s);
                                                                o && (o.liveStyle = !0), (t[s] = null != r ? r : null);
                                                        }),
                                                            f.push({ animation: t });
                                                }
                                                let x = !!f.length;
                                                return (
                                                    r &&
                                                    (!1 === u.initial || u.initial === u.animate) &&
                                                    !e.manuallyAnimateOnMount &&
                                                    (x = !1),
                                                        (r = !1),
                                                        x ? t(f) : Promise.resolve()
                                                );
                                        }
                                        return {
                                                animateChanges: d,
                                                setActive: function (t, r) {
                                                        var o;
                                                        if (s[t].isActive === r) return Promise.resolve();
                                                        null === (o = e.variantChildren) ||
                                                        void 0 === o ||
                                                        o.forEach((e) => {
                                                                var s;
                                                                return null === (s = e.animationState) || void 0 === s
                                                                    ? void 0
                                                                    : s.setActive(t, r);
                                                        }),
                                                            (s[t].isActive = r);
                                                        let n = d(t);
                                                        for (let e in s) s[e].protectedKeys = {};
                                                        return n;
                                                },
                                                setAnimateFunction: function (s) {
                                                        t = s(e);
                                                },
                                                getState: () => s,
                                                reset: () => {
                                                        (s = j()), (r = !0);
                                                },
                                        };
                                }
                                function h(e, t) {
                                        return "string" == typeof t ? t !== e : !!Array.isArray(t) && !(0, i.shallowCompare)(t, e);
                                }
                                function f(e = !1) {
                                        return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
                                }
                                function j() {
                                        return {
                                                animate: f(!0),
                                                whileInView: f(),
                                                whileHover: f(),
                                                whileTap: f(),
                                                whileDrag: f(),
                                                whileFocus: f(),
                                                exit: f(),
                                        };
                                }
                        },
                        {
                                "../../animation/utils/is-animation-controls.mjs": "eFo9r",
                                "../../animation/utils/is-keyframes-target.mjs": "gLv0Q",
                                "../../utils/shallow-compare.mjs": "8r2Vm",
                                "./is-variant-label.mjs": "luJLU",
                                "./resolve-dynamic-variants.mjs": "6czzQ",
                                "./variant-props.mjs": "YJ7Iq",
                                "../../animation/interfaces/visual-element.mjs": "ivfbN",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "8r2Vm": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t) {
                                        if (!Array.isArray(t)) return !1;
                                        let s = t.length;
                                        if (s !== e.length) return !1;
                                        for (let r = 0; r < s; r++) if (t[r] !== e[r]) return !1;
                                        return !0;
                                }
                                r.defineInteropFlag(s), r.export(s, "shallowCompare", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6czzQ": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "resolveVariant", () => n);
                                var o = e("./resolve-variants.mjs");
                                function n(e, t, s) {
                                        let r = e.getProps();
                                        return (0, o.resolveVariantFromProps)(r, t, void 0 !== s ? s : r.custom, e);
                                }
                        },
                        { "./resolve-variants.mjs": "839cw", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                ivfbN: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "animateVisualElement", () => a);
                                var o = e("../../render/utils/resolve-dynamic-variants.mjs"),
                                    n = e("./visual-element-target.mjs"),
                                    i = e("./visual-element-variant.mjs");
                                function a(e, t, s = {}) {
                                        let r;
                                        if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                                                let o = t.map((t) => (0, i.animateVariant)(e, t, s));
                                                r = Promise.all(o);
                                        } else if ("string" == typeof t) r = (0, i.animateVariant)(e, t, s);
                                        else {
                                                let i = "function" == typeof t ? (0, o.resolveVariant)(e, t, s.custom) : t;
                                                r = Promise.all((0, n.animateTarget)(e, i, s));
                                        }
                                        return r.then(() => {
                                                e.notify("AnimationComplete", t);
                                        });
                                }
                        },
                        {
                                "../../render/utils/resolve-dynamic-variants.mjs": "6czzQ",
                                "./visual-element-target.mjs": "ewROk",
                                "./visual-element-variant.mjs": "2rOrQ",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                ewROk: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "animateTarget", () => c);
                                var o = e("../../render/html/utils/transform.mjs"),
                                    n = e("./motion-value.mjs"),
                                    i = e("../../render/utils/setters.mjs"),
                                    a = e("../utils/transitions.mjs"),
                                    l = e("../optimized-appear/get-appear-id.mjs"),
                                    m = e("../../value/use-will-change/add-will-change.mjs"),
                                    u = e("../../frameloop/frame.mjs");
                                function c(e, t, { delay: s = 0, transitionOverride: r, type: c } = {}) {
                                        var p;
                                        let { transition: d = e.getDefaultTransition(), transitionEnd: h, ...f } = t;
                                        r && (d = r);
                                        let j = [],
                                            v = c && e.animationState && e.animationState.getState()[c];
                                        for (let t in f) {
                                                let r = e.getValue(t, null !== (p = e.latestValues[t]) && void 0 !== p ? p : null),
                                                    i = f[t];
                                                if (
                                                    void 0 === i ||
                                                    (v &&
                                                        (function ({ protectedKeys: e, needsAnimating: t }, s) {
                                                                let r = e.hasOwnProperty(s) && !0 !== t[s];
                                                                return (t[s] = !1), r;
                                                        })(v, t))
                                                )
                                                        continue;
                                                let c = { delay: s, ...(0, a.getValueTransition)(d || {}, t) },
                                                    h = !1;
                                                if (window.MotionHandoffAnimation) {
                                                        let s = (0, l.getOptimisedAppearId)(e);
                                                        if (s) {
                                                                let e = window.MotionHandoffAnimation(s, t, u.frame);
                                                                null !== e && ((c.startTime = e), (h = !0));
                                                        }
                                                }
                                                r.start(
                                                    (0, n.animateMotionValue)(
                                                        t,
                                                        r,
                                                        i,
                                                        e.shouldReduceMotion && (0, o.transformProps).has(t) ? { type: !1 } : c,
                                                        e,
                                                        h,
                                                        (0, m.addValueToWillChange)(e, t)
                                                    )
                                                );
                                                let g = r.animation;
                                                g && j.push(g);
                                        }
                                        return (
                                            h &&
                                            Promise.all(j).then(() => {
                                                    (0, u.frame).update(() => {
                                                            h && (0, i.setTarget)(e, h);
                                                    });
                                            }),
                                                j
                                        );
                                }
                        },
                        {
                                "../../render/html/utils/transform.mjs": "bEiM4",
                                "./motion-value.mjs": "32YzD",
                                "../../render/utils/setters.mjs": "l7SG9",
                                "../utils/transitions.mjs": "da1oB",
                                "../optimized-appear/get-appear-id.mjs": "7JNfp",
                                "../../value/use-will-change/add-will-change.mjs": "374I3",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "32YzD": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "animateMotionValue", () => h);
                                var o = e("../../utils/time-conversion.mjs"),
                                    n = e("../utils/default-transitions.mjs"),
                                    i = e("../utils/transitions.mjs"),
                                    a = e("../../utils/GlobalConfig.mjs"),
                                    l = e("../../utils/use-instant-transition-state.mjs"),
                                    m = e("../animators/waapi/utils/get-final-keyframe.mjs"),
                                    u = e("../../frameloop/frame.mjs"),
                                    c = e("../animators/AcceleratedAnimation.mjs"),
                                    p = e("../animators/MainThreadAnimation.mjs"),
                                    d = e("../GroupPlaybackControls.mjs");
                                let h =
                                    (e, t, s, r = {}, h, f, j) =>
                                        (v) => {
                                                let g = (0, i.getValueTransition)(r, e) || {},
                                                    x = g.delay || r.delay || 0,
                                                    { elapsed: y = 0 } = r;
                                                y -= (0, o.secondsToMilliseconds)(x);
                                                let b = {
                                                        keyframes: Array.isArray(s) ? s : [null, s],
                                                        ease: "easeOut",
                                                        velocity: t.getVelocity(),
                                                        ...g,
                                                        delay: -y,
                                                        onUpdate: (e) => {
                                                                t.set(e), g.onUpdate && g.onUpdate(e);
                                                        },
                                                        onComplete: () => {
                                                                v(), g.onComplete && g.onComplete(), j && j();
                                                        },
                                                        onStop: j,
                                                        name: e,
                                                        motionValue: t,
                                                        element: f ? void 0 : h,
                                                };
                                                (0, i.isTransitionDefined)(g) || (b = { ...b, ...(0, n.getDefaultTransition)(e, b) }),
                                                b.duration && (b.duration = (0, o.secondsToMilliseconds)(b.duration)),
                                                b.repeatDelay && (b.repeatDelay = (0, o.secondsToMilliseconds)(b.repeatDelay)),
                                                void 0 !== b.from && (b.keyframes[0] = b.from);
                                                let P = !1;
                                                if (
                                                    ((!1 !== b.type && (0 !== b.duration || b.repeatDelay)) ||
                                                    ((b.duration = 0), 0 !== b.delay || (P = !0)),
                                                    (l.instantAnimationState.current || a.MotionGlobalConfig.skipAnimations) &&
                                                    ((P = !0), (b.duration = 0), (b.delay = 0)),
                                                    P && !f && void 0 !== t.get())
                                                ) {
                                                        let e = (0, m.getFinalKeyframe)(b.keyframes, g);
                                                        if (void 0 !== e)
                                                                return (
                                                                    (0, u.frame).update(() => {
                                                                            b.onUpdate(e), b.onComplete();
                                                                    }),
                                                                        new d.GroupPlaybackControls([])
                                                                );
                                                }
                                                return !f && (0, c.AcceleratedAnimation).supports(b)
                                                    ? new c.AcceleratedAnimation(b)
                                                    : new p.MainThreadAnimation(b);
                                        };
                        },
                        {
                                "../../utils/time-conversion.mjs": "ejbH7",
                                "../utils/default-transitions.mjs": "5qXSH",
                                "../utils/transitions.mjs": "da1oB",
                                "../../utils/GlobalConfig.mjs": "7cL05",
                                "../../utils/use-instant-transition-state.mjs": "jmzj8",
                                "../animators/waapi/utils/get-final-keyframe.mjs": "5J1m2",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "../animators/AcceleratedAnimation.mjs": "6fs1n",
                                "../animators/MainThreadAnimation.mjs": "d0YOB",
                                "../GroupPlaybackControls.mjs": "lbUje",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                ejbH7: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "millisecondsToSeconds", () => n),
                                    r.export(s, "secondsToMilliseconds", () => o);
                                let o = (e) => 1e3 * e,
                                    n = (e) => e / 1e3;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5qXSH": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getDefaultTransition", () => m);
                                var o = e("../../render/html/utils/transform.mjs");
                                let n = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
                                    i = (e) => ({
                                            type: "spring",
                                            stiffness: 550,
                                            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                                            restSpeed: 10,
                                    }),
                                    a = { type: "keyframes", duration: 0.8 },
                                    l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
                                    m = (e, { keyframes: t }) =>
                                        t.length > 2 ? a : (0, o.transformProps).has(e) ? (e.startsWith("scale") ? i(t[1]) : n) : l;
                        },
                        {
                                "../../render/html/utils/transform.mjs": "bEiM4",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                da1oB: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o({
                                                   when: e,
                                                   delay: t,
                                                   delayChildren: s,
                                                   staggerChildren: r,
                                                   staggerDirection: o,
                                                   repeat: n,
                                                   repeatType: i,
                                                   repeatDelay: a,
                                                   from: l,
                                                   elapsed: m,
                                                   ...u
                                           }) {
                                        return !!Object.keys(u).length;
                                }
                                function n(e, t) {
                                        return e[t] || e.default || e;
                                }
                                r.defineInteropFlag(s),
                                    r.export(s, "getValueTransition", () => n),
                                    r.export(s, "isTransitionDefined", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                jmzj8: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "instantAnimationState", () => o);
                                let o = { current: !1 };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5J1m2": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getFinalKeyframe", () => n);
                                let o = (e) => null !== e;
                                function n(e, { repeat: t, repeatType: s = "loop" }, r) {
                                        let n = e.filter(o),
                                            i = t && "loop" !== s && t % 2 == 1 ? 0 : n.length - 1;
                                        return i && void 0 !== r ? r : n[i];
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6fs1n": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "AcceleratedAnimation", () => f);
                                var o = e("../../render/dom/DOMKeyframesResolver.mjs"),
                                    n = e("../../utils/memo.mjs"),
                                    i = e("../../utils/noop.mjs"),
                                    a = e("../../utils/time-conversion.mjs"),
                                    l = e("./BaseAnimation.mjs"),
                                    m = e("./MainThreadAnimation.mjs"),
                                    u = e("./utils/accelerated-values.mjs"),
                                    c = e("./waapi/index.mjs"),
                                    p = e("./waapi/easing.mjs"),
                                    d = e("./waapi/utils/get-final-keyframe.mjs");
                                let h = (0, n.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
                                class f extends l.BaseAnimation {
                                        constructor(e) {
                                                super(e);
                                                let { name: t, motionValue: s, element: r, keyframes: n } = this.options;
                                                (this.resolver = new o.DOMKeyframesResolver(
                                                    n,
                                                    (e, t) => this.onKeyframesResolved(e, t),
                                                    t,
                                                    s,
                                                    r
                                                )),
                                                    this.resolver.scheduleResolve();
                                        }
                                        initPlayback(e, t) {
                                                var s, r;
                                                let {
                                                        duration: o = 300,
                                                        times: n,
                                                        ease: i,
                                                        type: a,
                                                        motionValue: l,
                                                        name: u,
                                                        startTime: h,
                                                } = this.options;
                                                if (!(null === (s = l.owner) || void 0 === s ? void 0 : s.current)) return !1;
                                                if ("spring" === (r = this.options).type || !(0, p.isWaapiSupportedEasing)(r.ease)) {
                                                        let { onComplete: t, onUpdate: s, motionValue: r, element: l, ...u } = this.options,
                                                            c = (function (e, t) {
                                                                    let s = new m.MainThreadAnimation({
                                                                                ...t,
                                                                                keyframes: e,
                                                                                repeat: 0,
                                                                                delay: 0,
                                                                                isGenerator: !0,
                                                                        }),
                                                                        r = { done: !1, value: e[0] },
                                                                        o = [],
                                                                        n = 0;
                                                                    for (; !r.done && n < 2e4; ) o.push((r = s.sample(n)).value), (n += 10);
                                                                    return { times: void 0, keyframes: o, duration: n - 10, ease: "linear" };
                                                            })(e, u);
                                                        1 === (e = c.keyframes).length && (e[1] = e[0]),
                                                            (o = c.duration),
                                                            (n = c.times),
                                                            (i = c.ease),
                                                            (a = "keyframes");
                                                }
                                                let f = (0, c.animateStyle)(l.owner.current, u, e, {
                                                        ...this.options,
                                                        duration: o,
                                                        times: n,
                                                        ease: i,
                                                });
                                                return (
                                                    (f.startTime = null != h ? h : this.calcStartTime()),
                                                        this.pendingTimeline
                                                            ? ((f.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
                                                            : (f.onfinish = () => {
                                                                    let { onComplete: s } = this.options;
                                                                    l.set((0, d.getFinalKeyframe)(e, this.options, t)),
                                                                    s && s(),
                                                                        this.cancel(),
                                                                        this.resolveFinishedPromise();
                                                            }),
                                                        { animation: f, duration: o, times: n, type: a, ease: i, keyframes: e }
                                                );
                                        }
                                        get duration() {
                                                let { resolved: e } = this;
                                                if (!e) return 0;
                                                let { duration: t } = e;
                                                return (0, a.millisecondsToSeconds)(t);
                                        }
                                        get time() {
                                                let { resolved: e } = this;
                                                if (!e) return 0;
                                                let { animation: t } = e;
                                                return (0, a.millisecondsToSeconds)(t.currentTime || 0);
                                        }
                                        set time(e) {
                                                let { resolved: t } = this;
                                                if (!t) return;
                                                let { animation: s } = t;
                                                s.currentTime = (0, a.secondsToMilliseconds)(e);
                                        }
                                        get speed() {
                                                let { resolved: e } = this;
                                                if (!e) return 1;
                                                let { animation: t } = e;
                                                return t.playbackRate;
                                        }
                                        set speed(e) {
                                                let { resolved: t } = this;
                                                if (!t) return;
                                                let { animation: s } = t;
                                                s.playbackRate = e;
                                        }
                                        get state() {
                                                let { resolved: e } = this;
                                                if (!e) return "idle";
                                                let { animation: t } = e;
                                                return t.playState;
                                        }
                                        get startTime() {
                                                let { resolved: e } = this;
                                                if (!e) return null;
                                                let { animation: t } = e;
                                                return t.startTime;
                                        }
                                        attachTimeline(e) {
                                                if (this._resolved) {
                                                        let { resolved: t } = this;
                                                        if (!t) return i.noop;
                                                        let { animation: s } = t;
                                                        (s.timeline = e), (s.onfinish = null);
                                                } else this.pendingTimeline = e;
                                                return i.noop;
                                        }
                                        play() {
                                                if (this.isStopped) return;
                                                let { resolved: e } = this;
                                                if (!e) return;
                                                let { animation: t } = e;
                                                "finished" === t.playState && this.updateFinishedPromise(), t.play();
                                        }
                                        pause() {
                                                let { resolved: e } = this;
                                                if (!e) return;
                                                let { animation: t } = e;
                                                t.pause();
                                        }
                                        stop() {
                                                if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                                                this.resolveFinishedPromise(), this.updateFinishedPromise();
                                                let { resolved: e } = this;
                                                if (!e) return;
                                                let { animation: t, keyframes: s, duration: r, type: o, ease: n, times: i } = e;
                                                if ("idle" === t.playState || "finished" === t.playState) return;
                                                if (this.time) {
                                                        let { motionValue: e, onUpdate: t, onComplete: l, element: u, ...c } = this.options,
                                                            p = new m.MainThreadAnimation({
                                                                    ...c,
                                                                    keyframes: s,
                                                                    duration: r,
                                                                    type: o,
                                                                    ease: n,
                                                                    times: i,
                                                                    isGenerator: !0,
                                                            }),
                                                            d = (0, a.secondsToMilliseconds)(this.time);
                                                        e.setWithVelocity(p.sample(d - 10).value, p.sample(d).value, 10);
                                                }
                                                let { onStop: l } = this.options;
                                                l && l(), this.cancel();
                                        }
                                        complete() {
                                                let { resolved: e } = this;
                                                e && e.animation.finish();
                                        }
                                        cancel() {
                                                let { resolved: e } = this;
                                                e && e.animation.cancel();
                                        }
                                        static supports(e) {
                                                let { motionValue: t, name: s, repeatDelay: r, repeatType: o, damping: n, type: i } = e;
                                                return (
                                                    h() &&
                                                    s &&
                                                    (0, u.acceleratedValues).has(s) &&
                                                    t &&
                                                    t.owner &&
                                                    t.owner.current instanceof HTMLElement &&
                                                    !t.owner.getProps().onUpdate &&
                                                    !r &&
                                                    "mirror" !== o &&
                                                    0 !== n &&
                                                    "inertia" !== i
                                                );
                                        }
                                }
                        },
                        {
                                "../../render/dom/DOMKeyframesResolver.mjs": "2p5EC",
                                "../../utils/memo.mjs": "fUz2S",
                                "../../utils/noop.mjs": "atNA1",
                                "../../utils/time-conversion.mjs": "ejbH7",
                                "./BaseAnimation.mjs": "chpz4",
                                "./MainThreadAnimation.mjs": "d0YOB",
                                "./utils/accelerated-values.mjs": "bHw8X",
                                "./waapi/index.mjs": "jol10",
                                "./waapi/easing.mjs": "4z13W",
                                "./waapi/utils/get-final-keyframe.mjs": "5J1m2",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "2p5EC": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "DOMKeyframesResolver", () => c);
                                var o = e("../../animation/utils/is-none.mjs"),
                                    n = e("./utils/css-variables-conversion.mjs"),
                                    i = e("./utils/is-css-variable.mjs"),
                                    a = e("./utils/unit-conversion.mjs"),
                                    l = e("./value-types/dimensions.mjs"),
                                    m = e("../utils/KeyframesResolver.mjs"),
                                    u = e("../html/utils/make-none-animatable.mjs");
                                class c extends m.KeyframeResolver {
                                        constructor(e, t, s, r, o) {
                                                super(e, t, s, r, o, !0);
                                        }
                                        readKeyframes() {
                                                let { unresolvedKeyframes: e, element: t, name: s } = this;
                                                if (!t || !t.current) return;
                                                super.readKeyframes();
                                                for (let s = 0; s < e.length; s++) {
                                                        let r = e[s];
                                                        if ("string" == typeof r && ((r = r.trim()), (0, i.isCSSVariableToken)(r))) {
                                                                let o = (0, n.getVariableValue)(r, t.current);
                                                                void 0 !== o && (e[s] = o), s === e.length - 1 && (this.finalKeyframe = r);
                                                        }
                                                }
                                                if ((this.resolveNoneKeyframes(), !(0, a.positionalKeys).has(s) || 2 !== e.length)) return;
                                                let [r, o] = e,
                                                    m = (0, l.findDimensionValueType)(r),
                                                    u = (0, l.findDimensionValueType)(o);
                                                if (m !== u) {
                                                        if ((0, a.isNumOrPxType)(m) && (0, a.isNumOrPxType)(u))
                                                                for (let t = 0; t < e.length; t++) {
                                                                        let s = e[t];
                                                                        "string" == typeof s && (e[t] = parseFloat(s));
                                                                }
                                                        else this.needsMeasurement = !0;
                                                }
                                        }
                                        resolveNoneKeyframes() {
                                                let { unresolvedKeyframes: e, name: t } = this,
                                                    s = [];
                                                for (let t = 0; t < e.length; t++) (0, o.isNone)(e[t]) && s.push(t);
                                                s.length && (0, u.makeNoneKeyframesAnimatable)(e, s, t);
                                        }
                                        measureInitialState() {
                                                let { element: e, unresolvedKeyframes: t, name: s } = this;
                                                if (!e || !e.current) return;
                                                "height" === s && (this.suspendedScrollY = window.pageYOffset),
                                                    (this.measuredOrigin = (0, a.positionalValues)[s](
                                                        e.measureViewportBox(),
                                                        window.getComputedStyle(e.current)
                                                    )),
                                                    (t[0] = this.measuredOrigin);
                                                let r = t[t.length - 1];
                                                void 0 !== r && e.getValue(s, r).jump(r, !1);
                                        }
                                        measureEndState() {
                                                var e;
                                                let { element: t, name: s, unresolvedKeyframes: r } = this;
                                                if (!t || !t.current) return;
                                                let o = t.getValue(s);
                                                o && o.jump(this.measuredOrigin, !1);
                                                let n = r.length - 1,
                                                    i = r[n];
                                                (r[n] = (0, a.positionalValues)[s](
                                                    t.measureViewportBox(),
                                                    window.getComputedStyle(t.current)
                                                )),
                                                null !== i && void 0 === this.finalKeyframe && (this.finalKeyframe = i),
                                                (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) &&
                                                this.removedTransforms.forEach(([e, s]) => {
                                                        t.getValue(e).set(s);
                                                }),
                                                    this.resolveNoneKeyframes();
                                        }
                                }
                        },
                        {
                                "../../animation/utils/is-none.mjs": "9Wm4g",
                                "./utils/css-variables-conversion.mjs": "aRiXY",
                                "./utils/is-css-variable.mjs": "5GTp9",
                                "./utils/unit-conversion.mjs": "ekNFz",
                                "./value-types/dimensions.mjs": "29B6F",
                                "../utils/KeyframesResolver.mjs": "6YlUq",
                                "../html/utils/make-none-animatable.mjs": "7qBsd",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9Wm4g": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isNone", () => n);
                                var o = e("../../utils/is-zero-value-string.mjs");
                                function n(e) {
                                        return "number" == typeof e
                                            ? 0 === e
                                            : null === e || "none" === e || "0" === e || (0, o.isZeroValueString)(e);
                                }
                        },
                        {
                                "../../utils/is-zero-value-string.mjs": "j6K3G",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                j6K3G: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isZeroValueString", () => o);
                                let o = (e) => /^0[^.\s]+$/u.test(e);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                aRiXY: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(
                                        s,
                                        "getVariableValue",
                                        () =>
                                            function e(t, s, r = 1) {
                                                    (0, o.invariant)(
                                                        r <= 4,
                                                        `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                                                    );
                                                    let [a, m] = l(t);
                                                    if (!a) return;
                                                    let u = window.getComputedStyle(s).getPropertyValue(a);
                                                    if (u) {
                                                            let e = u.trim();
                                                            return (0, n.isNumericalString)(e) ? parseFloat(e) : e;
                                                    }
                                                    return (0, i.isCSSVariableToken)(m) ? e(m, s, r + 1) : m;
                                            }
                                    ),
                                    r.export(s, "parseCSSVariable", () => l);
                                var o = e("../../../utils/errors.mjs"),
                                    n = e("../../../utils/is-numerical-string.mjs"),
                                    i = e("./is-css-variable.mjs");
                                let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
                                function l(e) {
                                        let t = a.exec(e);
                                        if (!t) return [,];
                                        let [, s, r, o] = t;
                                        return [`--${null != s ? s : r}`, o];
                                }
                        },
                        {
                                "../../../utils/errors.mjs": "gxmqQ",
                                "../../../utils/is-numerical-string.mjs": "7MbhG",
                                "./is-css-variable.mjs": "5GTp9",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7MbhG": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isNumericalString", () => o);
                                let o = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                ekNFz: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "isNumOrPxType", () => l),
                                    r.export(s, "positionalKeys", () => a),
                                    r.export(s, "positionalValues", () => h),
                                    r.export(s, "removeNonTranslationalTransform", () => d);
                                var o = e("../../html/utils/transform.mjs"),
                                    n = e("../../../value/types/numbers/index.mjs"),
                                    i = e("../../../value/types/numbers/units.mjs");
                                let a = new Set([
                                            "width",
                                            "height",
                                            "top",
                                            "left",
                                            "right",
                                            "bottom",
                                            "x",
                                            "y",
                                            "translateX",
                                            "translateY",
                                    ]),
                                    l = (e) => e === n.number || e === i.px,
                                    m = (e, t) => parseFloat(e.split(", ")[t]),
                                    u =
                                        (e, t) =>
                                            (s, { transform: r }) => {
                                                    if ("none" === r || !r) return 0;
                                                    let o = r.match(/^matrix3d\((.+)\)$/u);
                                                    if (o) return m(o[1], t);
                                                    {
                                                            let t = r.match(/^matrix\((.+)\)$/u);
                                                            return t ? m(t[1], e) : 0;
                                                    }
                                            },
                                    c = new Set(["x", "y", "z"]),
                                    p = (0, o.transformPropOrder).filter((e) => !c.has(e));
                                function d(e) {
                                        let t = [];
                                        return (
                                            p.forEach((s) => {
                                                    let r = e.getValue(s);
                                                    void 0 !== r && (t.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
                                            }),
                                                t
                                        );
                                }
                                let h = {
                                        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: s = "0" }) =>
                                            e.max - e.min - parseFloat(t) - parseFloat(s),
                                        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: s = "0" }) =>
                                            e.max - e.min - parseFloat(t) - parseFloat(s),
                                        top: (e, { top: t }) => parseFloat(t),
                                        left: (e, { left: t }) => parseFloat(t),
                                        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
                                        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
                                        x: u(4, 13),
                                        y: u(5, 14),
                                };
                                (h.translateX = h.x), (h.translateY = h.y);
                        },
                        {
                                "../../html/utils/transform.mjs": "bEiM4",
                                "../../../value/types/numbers/index.mjs": "a80qg",
                                "../../../value/types/numbers/units.mjs": "alPiW",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "29B6F": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "dimensionValueTypes", () => l),
                                    r.export(s, "findDimensionValueType", () => m);
                                var o = e("../../../value/types/numbers/index.mjs"),
                                    n = e("../../../value/types/numbers/units.mjs"),
                                    i = e("./test.mjs"),
                                    a = e("./type-auto.mjs");
                                let l = [o.number, n.px, n.percent, n.degrees, n.vw, n.vh, a.auto],
                                    m = (e) => l.find((0, i.testValueType)(e));
                        },
                        {
                                "../../../value/types/numbers/index.mjs": "a80qg",
                                "../../../value/types/numbers/units.mjs": "alPiW",
                                "./test.mjs": "aM7YU",
                                "./type-auto.mjs": "5h0Sh",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                aM7YU: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "testValueType", () => o);
                                let o = (e) => (t) => t.test(e);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5h0Sh": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "auto", () => o);
                                let o = { test: (e) => "auto" === e, parse: (e) => e };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6YlUq": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "KeyframeResolver", () => p),
                                    r.export(s, "flushKeyframeResolvers", () => c);
                                var o = e("../dom/utils/unit-conversion.mjs"),
                                    n = e("../../frameloop/frame.mjs");
                                let i = new Set(),
                                    a = !1,
                                    l = !1;
                                function m() {
                                        if (l) {
                                                let e = Array.from(i).filter((e) => e.needsMeasurement),
                                                    t = new Set(e.map((e) => e.element)),
                                                    s = new Map();
                                                t.forEach((e) => {
                                                        let t = (0, o.removeNonTranslationalTransform)(e);
                                                        t.length && (s.set(e, t), e.render());
                                                }),
                                                    e.forEach((e) => e.measureInitialState()),
                                                    t.forEach((e) => {
                                                            e.render();
                                                            let t = s.get(e);
                                                            t &&
                                                            t.forEach(([t, s]) => {
                                                                    var r;
                                                                    null === (r = e.getValue(t)) || void 0 === r || r.set(s);
                                                            });
                                                    }),
                                                    e.forEach((e) => e.measureEndState()),
                                                    e.forEach((e) => {
                                                            void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY);
                                                    });
                                        }
                                        (l = !1), (a = !1), i.forEach((e) => e.complete()), i.clear();
                                }
                                function u() {
                                        i.forEach((e) => {
                                                e.readKeyframes(), e.needsMeasurement && (l = !0);
                                        });
                                }
                                function c() {
                                        u(), m();
                                }
                                class p {
                                        constructor(e, t, s, r, o, n = !1) {
                                                (this.isComplete = !1),
                                                    (this.isAsync = !1),
                                                    (this.needsMeasurement = !1),
                                                    (this.isScheduled = !1),
                                                    (this.unresolvedKeyframes = [...e]),
                                                    (this.onComplete = t),
                                                    (this.name = s),
                                                    (this.motionValue = r),
                                                    (this.element = o),
                                                    (this.isAsync = n);
                                        }
                                        scheduleResolve() {
                                                (this.isScheduled = !0),
                                                    this.isAsync
                                                        ? (i.add(this),
                                                        a || ((a = !0), (0, n.frame).read(u), (0, n.frame).resolveKeyframes(m)))
                                                        : (this.readKeyframes(), this.complete());
                                        }
                                        readKeyframes() {
                                                let { unresolvedKeyframes: e, name: t, element: s, motionValue: r } = this;
                                                for (let o = 0; o < e.length; o++)
                                                        if (null === e[o]) {
                                                                if (0 === o) {
                                                                        let o = null == r ? void 0 : r.get(),
                                                                            n = e[e.length - 1];
                                                                        if (void 0 !== o) e[0] = o;
                                                                        else if (s && t) {
                                                                                let r = s.readValue(t, n);
                                                                                null != r && (e[0] = r);
                                                                        }
                                                                        void 0 === e[0] && (e[0] = n), r && void 0 === o && r.set(e[0]);
                                                                } else e[o] = e[o - 1];
                                                        }
                                        }
                                        setFinalKeyframe() {}
                                        measureInitialState() {}
                                        renderEndStyles() {}
                                        measureEndState() {}
                                        complete() {
                                                (this.isComplete = !0),
                                                    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                                                    i.delete(this);
                                        }
                                        cancel() {
                                                this.isComplete || ((this.isScheduled = !1), i.delete(this));
                                        }
                                        resume() {
                                                this.isComplete || this.scheduleResolve();
                                        }
                                }
                        },
                        {
                                "../dom/utils/unit-conversion.mjs": "ekNFz",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7qBsd": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "makeNoneKeyframesAnimatable", () => a);
                                var o = e("../../../value/types/complex/index.mjs"),
                                    n = e("../../dom/value-types/animatable-none.mjs");
                                let i = new Set(["auto", "none", "0"]);
                                function a(e, t, s) {
                                        let r,
                                            a = 0;
                                        for (; a < e.length && !r; ) {
                                                let t = e[a];
                                                "string" == typeof t &&
                                                !i.has(t) &&
                                                (0, o.analyseComplexValue)(t).values.length &&
                                                (r = e[a]),
                                                    a++;
                                        }
                                        if (r && s) for (let o of t) e[o] = (0, n.getAnimatableNone)(s, r);
                                }
                        },
                        {
                                "../../../value/types/complex/index.mjs": "h5yJ0",
                                "../../dom/value-types/animatable-none.mjs": "c4FXx",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                h5yJ0: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "analyseComplexValue", () => m),
                                    r.export(s, "complex", () => d);
                                var o = e("../color/index.mjs"),
                                    n = e("../utils.mjs");
                                let i = "number",
                                    a = "color",
                                    l =
                                        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
                                function m(e) {
                                        let t = e.toString(),
                                            s = [],
                                            r = { color: [], number: [], var: [] },
                                            n = [],
                                            m = 0,
                                            u = t.replace(
                                                l,
                                                (e) => (
                                                    (0, o.color).test(e)
                                                        ? (r.color.push(m), n.push(a), s.push((0, o.color).parse(e)))
                                                        : e.startsWith("var(")
                                                            ? (r.var.push(m), n.push("var"), s.push(e))
                                                            : (r.number.push(m), n.push(i), s.push(parseFloat(e))),
                                                        ++m,
                                                        "${}"
                                                )
                                            ),
                                            c = u.split("${}");
                                        return { values: s, split: c, indexes: r, types: n };
                                }
                                function u(e) {
                                        return m(e).values;
                                }
                                function c(e) {
                                        let { split: t, types: s } = m(e),
                                            r = t.length;
                                        return (e) => {
                                                let l = "";
                                                for (let m = 0; m < r; m++)
                                                        if (((l += t[m]), void 0 !== e[m])) {
                                                                let t = s[m];
                                                                t === i
                                                                    ? (l += (0, n.sanitize)(e[m]))
                                                                    : t === a
                                                                        ? (l += (0, o.color).transform(e[m]))
                                                                        : (l += e[m]);
                                                        }
                                                return l;
                                        };
                                }
                                let p = (e) => ("number" == typeof e ? 0 : e),
                                    d = {
                                            test: function (e) {
                                                    var t, s;
                                                    return (
                                                        isNaN(e) &&
                                                        (0, n.isString)(e) &&
                                                        ((null === (t = e.match(n.floatRegex)) || void 0 === t ? void 0 : t.length) || 0) +
                                                        ((null === (s = e.match(n.colorRegex)) || void 0 === s ? void 0 : s.length) ||
                                                            0) >
                                                        0
                                                    );
                                            },
                                            parse: u,
                                            createTransformer: c,
                                            getAnimatableNone: function (e) {
                                                    let t = u(e),
                                                        s = c(e);
                                                    return s(t.map(p));
                                            },
                                    };
                        },
                        {
                                "../color/index.mjs": "d4S9P",
                                "../utils.mjs": "gTcaL",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                d4S9P: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "color", () => l);
                                var o = e("../utils.mjs"),
                                    n = e("./hex.mjs"),
                                    i = e("./hsla.mjs"),
                                    a = e("./rgba.mjs");
                                let l = {
                                        test: (e) => (0, a.rgba).test(e) || (0, n.hex).test(e) || (0, i.hsla).test(e),
                                        parse: (e) =>
                                            (0, a.rgba).test(e)
                                                ? (0, a.rgba).parse(e)
                                                : (0, i.hsla).test(e)
                                                    ? (0, i.hsla).parse(e)
                                                    : (0, n.hex).parse(e),
                                        transform: (e) =>
                                            (0, o.isString)(e)
                                                ? e
                                                : e.hasOwnProperty("red")
                                                    ? (0, a.rgba).transform(e)
                                                    : (0, i.hsla).transform(e),
                                };
                        },
                        {
                                "../utils.mjs": "gTcaL",
                                "./hex.mjs": "3ZPNu",
                                "./hsla.mjs": "9sMIV",
                                "./rgba.mjs": "7XMi1",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "3ZPNu": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "hex", () => i);
                                var o = e("./rgba.mjs"),
                                    n = e("./utils.mjs");
                                let i = {
                                        test: (0, n.isColorString)("#"),
                                        parse: function (e) {
                                                let t = "",
                                                    s = "",
                                                    r = "",
                                                    o = "";
                                                return (
                                                    e.length > 5
                                                        ? ((t = e.substring(1, 3)),
                                                            (s = e.substring(3, 5)),
                                                            (r = e.substring(5, 7)),
                                                            (o = e.substring(7, 9)))
                                                        : ((t = e.substring(1, 2)),
                                                            (s = e.substring(2, 3)),
                                                            (r = e.substring(3, 4)),
                                                            (o = e.substring(4, 5)),
                                                            (t += t),
                                                            (s += s),
                                                            (r += r),
                                                            (o += o)),
                                                        {
                                                                red: parseInt(t, 16),
                                                                green: parseInt(s, 16),
                                                                blue: parseInt(r, 16),
                                                                alpha: o ? parseInt(o, 16) / 255 : 1,
                                                        }
                                                );
                                        },
                                        transform: o.rgba.transform,
                                };
                        },
                        {
                                "./rgba.mjs": "7XMi1",
                                "./utils.mjs": "DE7dz",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7XMi1": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "rgbUnit", () => m), r.export(s, "rgba", () => u);
                                var o = e("../../../utils/clamp.mjs"),
                                    n = e("../numbers/index.mjs"),
                                    i = e("../utils.mjs"),
                                    a = e("./utils.mjs");
                                let l = (e) => (0, o.clamp)(0, 255, e),
                                    m = { ...n.number, transform: (e) => Math.round(l(e)) },
                                    u = {
                                            test: (0, a.isColorString)("rgb", "red"),
                                            parse: (0, a.splitColor)("red", "green", "blue"),
                                            transform: ({ red: e, green: t, blue: s, alpha: r = 1 }) =>
                                                "rgba(" +
                                                m.transform(e) +
                                                ", " +
                                                m.transform(t) +
                                                ", " +
                                                m.transform(s) +
                                                ", " +
                                                (0, i.sanitize)((0, n.alpha).transform(r)) +
                                                ")",
                                    };
                        },
                        {
                                "../../../utils/clamp.mjs": "j3fGo",
                                "../numbers/index.mjs": "a80qg",
                                "../utils.mjs": "gTcaL",
                                "./utils.mjs": "DE7dz",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                DE7dz: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isColorString", () => n), r.export(s, "splitColor", () => i);
                                var o = e("../utils.mjs");
                                let n = (e, t) => (s) =>
                                        !!(
                                            ((0, o.isString)(s) && (0, o.singleColorRegex).test(s) && s.startsWith(e)) ||
                                            (t && !(0, o.isNullish)(s) && Object.prototype.hasOwnProperty.call(s, t))
                                        ),
                                    i = (e, t, s) => (r) => {
                                            if (!(0, o.isString)(r)) return r;
                                            let [n, i, a, l] = r.match(o.floatRegex);
                                            return {
                                                    [e]: parseFloat(n),
                                                    [t]: parseFloat(i),
                                                    [s]: parseFloat(a),
                                                    alpha: void 0 !== l ? parseFloat(l) : 1,
                                            };
                                    };
                        },
                        { "../utils.mjs": "gTcaL", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "9sMIV": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "hsla", () => l);
                                var o = e("../numbers/index.mjs"),
                                    n = e("../numbers/units.mjs"),
                                    i = e("../utils.mjs"),
                                    a = e("./utils.mjs");
                                let l = {
                                        test: (0, a.isColorString)("hsl", "hue"),
                                        parse: (0, a.splitColor)("hue", "saturation", "lightness"),
                                        transform: ({ hue: e, saturation: t, lightness: s, alpha: r = 1 }) =>
                                            "hsla(" +
                                            Math.round(e) +
                                            ", " +
                                            (0, n.percent).transform((0, i.sanitize)(t)) +
                                            ", " +
                                            (0, n.percent).transform((0, i.sanitize)(s)) +
                                            ", " +
                                            (0, i.sanitize)((0, o.alpha).transform(r)) +
                                            ")",
                                };
                        },
                        {
                                "../numbers/index.mjs": "a80qg",
                                "../numbers/units.mjs": "alPiW",
                                "../utils.mjs": "gTcaL",
                                "./utils.mjs": "DE7dz",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                c4FXx: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getAnimatableNone", () => a);
                                var o = e("../../../value/types/complex/index.mjs"),
                                    n = e("../../../value/types/complex/filter.mjs"),
                                    i = e("./defaults.mjs");
                                function a(e, t) {
                                        let s = (0, i.getDefaultValueType)(e);
                                        return s !== n.filter && (s = o.complex), s.getAnimatableNone ? s.getAnimatableNone(t) : void 0;
                                }
                        },
                        {
                                "../../../value/types/complex/index.mjs": "h5yJ0",
                                "../../../value/types/complex/filter.mjs": "1AgnA",
                                "./defaults.mjs": "2RSuH",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "1AgnA": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "filter", () => m);
                                var o = e("./index.mjs"),
                                    n = e("../utils.mjs");
                                let i = new Set(["brightness", "contrast", "saturate", "opacity"]);
                                function a(e) {
                                        let [t, s] = e.slice(0, -1).split("(");
                                        if ("drop-shadow" === t) return e;
                                        let [r] = s.match(n.floatRegex) || [];
                                        if (!r) return e;
                                        let o = s.replace(r, ""),
                                            a = i.has(t) ? 1 : 0;
                                        return r !== s && (a *= 100), t + "(" + a + o + ")";
                                }
                                let l = /\b([a-z-]*)\(.*?\)/gu,
                                    m = {
                                            ...o.complex,
                                            getAnimatableNone: (e) => {
                                                    let t = e.match(l);
                                                    return t ? t.map(a).join(" ") : e;
                                            },
                                    };
                        },
                        {
                                "./index.mjs": "h5yJ0",
                                "../utils.mjs": "gTcaL",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "2RSuH": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "defaultValueTypes", () => a),
                                    r.export(s, "getDefaultValueType", () => l);
                                var o = e("../../../value/types/color/index.mjs"),
                                    n = e("../../../value/types/complex/filter.mjs"),
                                    i = e("./number.mjs");
                                let a = {
                                            ...i.numberValueTypes,
                                            color: o.color,
                                            backgroundColor: o.color,
                                            outlineColor: o.color,
                                            fill: o.color,
                                            stroke: o.color,
                                            borderColor: o.color,
                                            borderTopColor: o.color,
                                            borderRightColor: o.color,
                                            borderBottomColor: o.color,
                                            borderLeftColor: o.color,
                                            filter: n.filter,
                                            WebkitFilter: n.filter,
                                    },
                                    l = (e) => a[e];
                        },
                        {
                                "../../../value/types/color/index.mjs": "d4S9P",
                                "../../../value/types/complex/filter.mjs": "1AgnA",
                                "./number.mjs": "fXKol",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                fUz2S: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        let t;
                                        return () => (void 0 === t && (t = e()), t);
                                }
                                r.defineInteropFlag(s), r.export(s, "memo", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                chpz4: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "BaseAnimation", () => m);
                                var o = e("../../frameloop/sync-time.mjs"),
                                    n = e("../../render/utils/KeyframesResolver.mjs"),
                                    i = e("../../utils/use-instant-transition-state.mjs"),
                                    a = e("./utils/can-animate.mjs"),
                                    l = e("./waapi/utils/get-final-keyframe.mjs");
                                class m {
                                        constructor({
                                                            autoplay: e = !0,
                                                            delay: t = 0,
                                                            type: s = "keyframes",
                                                            repeat: r = 0,
                                                            repeatDelay: n = 0,
                                                            repeatType: i = "loop",
                                                            ...a
                                                    }) {
                                                (this.isStopped = !1),
                                                    (this.hasAttemptedResolve = !1),
                                                    (this.createdAt = (0, o.time).now()),
                                                    (this.options = {
                                                            autoplay: e,
                                                            delay: t,
                                                            type: s,
                                                            repeat: r,
                                                            repeatDelay: n,
                                                            repeatType: i,
                                                            ...a,
                                                    }),
                                                    this.updateFinishedPromise();
                                        }
                                        calcStartTime() {
                                                return this.resolvedAt && this.resolvedAt - this.createdAt > 40
                                                    ? this.resolvedAt
                                                    : this.createdAt;
                                        }
                                        get resolved() {
                                                return (
                                                    this._resolved || this.hasAttemptedResolve || (0, n.flushKeyframeResolvers)(),
                                                        this._resolved
                                                );
                                        }
                                        onKeyframesResolved(e, t) {
                                                (this.resolvedAt = (0, o.time).now()), (this.hasAttemptedResolve = !0);
                                                let {
                                                        name: s,
                                                        type: r,
                                                        velocity: n,
                                                        delay: m,
                                                        onComplete: u,
                                                        onUpdate: c,
                                                        isGenerator: p,
                                                } = this.options;
                                                if (!p && !(0, a.canAnimate)(e, s, r, n)) {
                                                        if (i.instantAnimationState.current || !m) {
                                                                null == c || c((0, l.getFinalKeyframe)(e, this.options, t)),
                                                                null == u || u(),
                                                                    this.resolveFinishedPromise();
                                                                return;
                                                        }
                                                        this.options.duration = 0;
                                                }
                                                let d = this.initPlayback(e, t);
                                                !1 !== d &&
                                                ((this._resolved = { keyframes: e, finalKeyframe: t, ...d }), this.onPostResolved());
                                        }
                                        onPostResolved() {}
                                        then(e, t) {
                                                return this.currentFinishedPromise.then(e, t);
                                        }
                                        updateFinishedPromise() {
                                                this.currentFinishedPromise = new Promise((e) => {
                                                        this.resolveFinishedPromise = e;
                                                });
                                        }
                                }
                        },
                        {
                                "../../frameloop/sync-time.mjs": "kNVkV",
                                "../../render/utils/KeyframesResolver.mjs": "6YlUq",
                                "../../utils/use-instant-transition-state.mjs": "jmzj8",
                                "./utils/can-animate.mjs": "i6iDQ",
                                "./waapi/utils/get-final-keyframe.mjs": "5J1m2",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                kNVkV: [
                        function (e, t, s) {
                                let r;
                                var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                o.defineInteropFlag(s), o.export(s, "time", () => l);
                                var n = e("../utils/GlobalConfig.mjs"),
                                    i = e("./frame.mjs");
                                function a() {
                                        r = void 0;
                                }
                                let l = {
                                        now: () => (
                                            void 0 === r &&
                                            l.set(
                                                i.frameData.isProcessing || n.MotionGlobalConfig.useManualTiming
                                                    ? i.frameData.timestamp
                                                    : performance.now()
                                            ),
                                                r
                                        ),
                                        set: (e) => {
                                                (r = e), queueMicrotask(a);
                                        },
                                };
                        },
                        {
                                "../utils/GlobalConfig.mjs": "7cL05",
                                "./frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                i6iDQ: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "canAnimate", () => i);
                                var o = e("../../../utils/errors.mjs"),
                                    n = e("../../utils/is-animatable.mjs");
                                function i(e, t, s, r) {
                                        let i = e[0];
                                        if (null === i) return !1;
                                        if ("display" === t || "visibility" === t) return !0;
                                        let a = e[e.length - 1],
                                            l = (0, n.isAnimatable)(i, t),
                                            m = (0, n.isAnimatable)(a, t);
                                        return (
                                            (0, o.warning)(
                                                l === m,
                                                `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`
                                            ),
                                            !!l &&
                                            !!m &&
                                            ((function (e) {
                                                        let t = e[0];
                                                        if (1 === e.length) return !0;
                                                        for (let s = 0; s < e.length; s++) if (e[s] !== t) return !0;
                                                })(e) ||
                                                ("spring" === s && r))
                                        );
                                }
                        },
                        {
                                "../../../utils/errors.mjs": "gxmqQ",
                                "../../utils/is-animatable.mjs": "8Wssb",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "8Wssb": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isAnimatable", () => n);
                                var o = e("../../value/types/complex/index.mjs");
                                let n = (e, t) =>
                                    "zIndex" !== t &&
                                    !!(
                                        "number" == typeof e ||
                                        Array.isArray(e) ||
                                        ("string" == typeof e && ((0, o.complex).test(e) || "0" === e) && !e.startsWith("url("))
                                    );
                        },
                        {
                                "../../value/types/complex/index.mjs": "h5yJ0",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                d0YOB: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "MainThreadAnimation", () => g),
                                    r.export(s, "animateValue", () => x);
                                var o = e("../../render/utils/KeyframesResolver.mjs"),
                                    n = e("../generators/spring/index.mjs"),
                                    i = e("../generators/inertia.mjs"),
                                    a = e("../generators/keyframes.mjs"),
                                    l = e("./BaseAnimation.mjs"),
                                    m = e("../../utils/pipe.mjs"),
                                    u = e("../../utils/mix/index.mjs"),
                                    c = e("../generators/utils/calc-duration.mjs"),
                                    p = e("../../utils/time-conversion.mjs"),
                                    d = e("../../utils/clamp.mjs");
                                e("../../utils/errors.mjs");
                                var h = e("./drivers/driver-frameloop.mjs"),
                                    f = e("./waapi/utils/get-final-keyframe.mjs");
                                let j = {
                                            decay: i.inertia,
                                            inertia: i.inertia,
                                            tween: a.keyframes,
                                            keyframes: a.keyframes,
                                            spring: n.spring,
                                    },
                                    v = (e) => e / 100;
                                class g extends l.BaseAnimation {
                                        constructor(e) {
                                                super(e),
                                                    (this.holdTime = null),
                                                    (this.cancelTime = null),
                                                    (this.currentTime = 0),
                                                    (this.playbackSpeed = 1),
                                                    (this.pendingPlayState = "running"),
                                                    (this.startTime = null),
                                                    (this.state = "idle"),
                                                    (this.stop = () => {
                                                            if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                                                            this.teardown();
                                                            let { onStop: e } = this.options;
                                                            e && e();
                                                    });
                                                let { name: t, motionValue: s, element: r, keyframes: n } = this.options,
                                                    i = (null == r ? void 0 : r.KeyframeResolver) || o.KeyframeResolver;
                                                (this.resolver = new i(n, (e, t) => this.onKeyframesResolved(e, t), t, s, r)),
                                                    this.resolver.scheduleResolve();
                                        }
                                        initPlayback(e) {
                                                let t, s;
                                                let {
                                                            type: r = "keyframes",
                                                            repeat: o = 0,
                                                            repeatDelay: n = 0,
                                                            repeatType: i,
                                                            velocity: l = 0,
                                                    } = this.options,
                                                    p = j[r] || a.keyframes;
                                                p !== a.keyframes &&
                                                "number" != typeof e[0] &&
                                                ((t = (0, m.pipe)(v, (0, u.mix)(e[0], e[1]))), (e = [0, 100]));
                                                let d = p({ ...this.options, keyframes: e });
                                                "mirror" === i && (s = p({ ...this.options, keyframes: [...e].reverse(), velocity: -l })),
                                                null === d.calculatedDuration &&
                                                (d.calculatedDuration = (0, c.calcGeneratorDuration)(d));
                                                let { calculatedDuration: h } = d,
                                                    f = h + n;
                                                return {
                                                        generator: d,
                                                        mirroredGenerator: s,
                                                        mapPercentToKeyframes: t,
                                                        calculatedDuration: h,
                                                        resolvedDuration: f,
                                                        totalDuration: f * (o + 1) - n,
                                                };
                                        }
                                        onPostResolved() {
                                                let { autoplay: e = !0 } = this.options;
                                                this.play(),
                                                    "paused" !== this.pendingPlayState && e
                                                        ? (this.state = this.pendingPlayState)
                                                        : this.pause();
                                        }
                                        tick(e, t = !1) {
                                                let { resolved: s } = this;
                                                if (!s) {
                                                        let { keyframes: e } = this.options;
                                                        return { done: !0, value: e[e.length - 1] };
                                                }
                                                let {
                                                        finalKeyframe: r,
                                                        generator: o,
                                                        mirroredGenerator: n,
                                                        mapPercentToKeyframes: i,
                                                        keyframes: a,
                                                        calculatedDuration: l,
                                                        totalDuration: m,
                                                        resolvedDuration: u,
                                                } = s;
                                                if (null === this.startTime) return o.next(0);
                                                let { delay: c, repeat: p, repeatType: h, repeatDelay: j, onUpdate: v } = this.options;
                                                this.speed > 0
                                                    ? (this.startTime = Math.min(this.startTime, e))
                                                    : this.speed < 0 && (this.startTime = Math.min(e - m / this.speed, this.startTime)),
                                                    t
                                                        ? (this.currentTime = e)
                                                        : null !== this.holdTime
                                                            ? (this.currentTime = this.holdTime)
                                                            : (this.currentTime = Math.round(e - this.startTime) * this.speed);
                                                let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                                                    x = this.speed >= 0 ? g < 0 : g > m;
                                                (this.currentTime = Math.max(g, 0)),
                                                "finished" === this.state && null === this.holdTime && (this.currentTime = m);
                                                let y = this.currentTime,
                                                    b = o;
                                                if (p) {
                                                        let e = Math.min(this.currentTime, m) / u,
                                                            t = Math.floor(e),
                                                            s = e % 1;
                                                        !s && e >= 1 && (s = 1), 1 === s && t--, (t = Math.min(t, p + 1));
                                                        let r = !!(t % 2);
                                                        r && ("reverse" === h ? ((s = 1 - s), j && (s -= j / u)) : "mirror" === h && (b = n)),
                                                            (y = (0, d.clamp)(0, 1, s) * u);
                                                }
                                                let P = x ? { done: !1, value: a[0] } : b.next(y);
                                                i && (P.value = i(P.value));
                                                let { done: C } = P;
                                                x || null === l || (C = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
                                                let S =
                                                    null === this.holdTime &&
                                                    ("finished" === this.state || ("running" === this.state && C));
                                                return (
                                                    S && void 0 !== r && (P.value = (0, f.getFinalKeyframe)(a, this.options, r)),
                                                    v && v(P.value),
                                                    S && this.finish(),
                                                        P
                                                );
                                        }
                                        get duration() {
                                                let { resolved: e } = this;
                                                return e ? (0, p.millisecondsToSeconds)(e.calculatedDuration) : 0;
                                        }
                                        get time() {
                                                return (0, p.millisecondsToSeconds)(this.currentTime);
                                        }
                                        set time(e) {
                                                (e = (0, p.secondsToMilliseconds)(e)),
                                                    (this.currentTime = e),
                                                    null !== this.holdTime || 0 === this.speed
                                                        ? (this.holdTime = e)
                                                        : this.driver && (this.startTime = this.driver.now() - e / this.speed);
                                        }
                                        get speed() {
                                                return this.playbackSpeed;
                                        }
                                        set speed(e) {
                                                let t = this.playbackSpeed !== e;
                                                (this.playbackSpeed = e), t && (this.time = (0, p.millisecondsToSeconds)(this.currentTime));
                                        }
                                        play() {
                                                if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
                                                        this.pendingPlayState = "running";
                                                        return;
                                                }
                                                if (this.isStopped) return;
                                                let { driver: e = h.frameloopDriver, onPlay: t, startTime: s } = this.options;
                                                this.driver || (this.driver = e((e) => this.tick(e))), t && t();
                                                let r = this.driver.now();
                                                null !== this.holdTime
                                                    ? (this.startTime = r - this.holdTime)
                                                    : this.startTime
                                                        ? "finished" === this.state && (this.startTime = r)
                                                        : (this.startTime = null != s ? s : this.calcStartTime()),
                                                "finished" === this.state && this.updateFinishedPromise(),
                                                    (this.cancelTime = this.startTime),
                                                    (this.holdTime = null),
                                                    (this.state = "running"),
                                                    this.driver.start();
                                        }
                                        pause() {
                                                var e;
                                                if (!this._resolved) {
                                                        this.pendingPlayState = "paused";
                                                        return;
                                                }
                                                (this.state = "paused"),
                                                    (this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0);
                                        }
                                        complete() {
                                                "running" !== this.state && this.play(),
                                                    (this.pendingPlayState = this.state = "finished"),
                                                    (this.holdTime = null);
                                        }
                                        finish() {
                                                this.teardown(), (this.state = "finished");
                                                let { onComplete: e } = this.options;
                                                e && e();
                                        }
                                        cancel() {
                                                null !== this.cancelTime && this.tick(this.cancelTime),
                                                    this.teardown(),
                                                    this.updateFinishedPromise();
                                        }
                                        teardown() {
                                                (this.state = "idle"),
                                                    this.stopDriver(),
                                                    this.resolveFinishedPromise(),
                                                    this.updateFinishedPromise(),
                                                    (this.startTime = this.cancelTime = null),
                                                    this.resolver.cancel();
                                        }
                                        stopDriver() {
                                                this.driver && (this.driver.stop(), (this.driver = void 0));
                                        }
                                        sample(e) {
                                                return (this.startTime = 0), this.tick(e, !0);
                                        }
                                }
                                function x(e) {
                                        return new g(e);
                                }
                        },
                        {
                                "../../render/utils/KeyframesResolver.mjs": "6YlUq",
                                "../generators/spring/index.mjs": "h3Hja",
                                "../generators/inertia.mjs": "4YMfs",
                                "../generators/keyframes.mjs": "hDra5",
                                "./BaseAnimation.mjs": "chpz4",
                                "../../utils/pipe.mjs": "f51nb",
                                "../../utils/mix/index.mjs": "6dfHD",
                                "../generators/utils/calc-duration.mjs": "kJMnA",
                                "../../utils/time-conversion.mjs": "ejbH7",
                                "../../utils/clamp.mjs": "j3fGo",
                                "../../utils/errors.mjs": "gxmqQ",
                                "./drivers/driver-frameloop.mjs": "4ZPp4",
                                "./waapi/utils/get-final-keyframe.mjs": "5J1m2",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                h3Hja: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "spring", () => u);
                                var o = e("../../../utils/time-conversion.mjs"),
                                    n = e("../utils/velocity.mjs"),
                                    i = e("./find.mjs");
                                let a = ["duration", "bounce"],
                                    l = ["stiffness", "damping", "mass"];
                                function m(e, t) {
                                        return t.some((t) => void 0 !== e[t]);
                                }
                                function u({ keyframes: e, restDelta: t, restSpeed: s, ...r }) {
                                        let u;
                                        let c = e[0],
                                            p = e[e.length - 1],
                                            d = { done: !1, value: c },
                                            {
                                                    stiffness: h,
                                                    damping: f,
                                                    mass: j,
                                                    duration: v,
                                                    velocity: g,
                                                    isResolvedFromDuration: x,
                                            } = (function (e) {
                                                    let t = {
                                                            velocity: 0,
                                                            stiffness: 100,
                                                            damping: 10,
                                                            mass: 1,
                                                            isResolvedFromDuration: !1,
                                                            ...e,
                                                    };
                                                    if (!m(e, l) && m(e, a)) {
                                                            let s = (0, i.findSpring)(e);
                                                            (t = { ...t, ...s, mass: 1 }).isResolvedFromDuration = !0;
                                                    }
                                                    return t;
                                            })({ ...r, velocity: -(0, o.millisecondsToSeconds)(r.velocity || 0) }),
                                            y = g || 0,
                                            b = f / (2 * Math.sqrt(h * j)),
                                            P = p - c,
                                            C = (0, o.millisecondsToSeconds)(Math.sqrt(h / j)),
                                            S = 5 > Math.abs(P);
                                        if ((s || (s = S ? 0.01 : 2), t || (t = S ? 0.005 : 0.5), b < 1)) {
                                                let e = (0, i.calcAngularFreq)(C, b);
                                                u = (t) => {
                                                        let s = Math.exp(-b * C * t);
                                                        return p - s * (((y + b * C * P) / e) * Math.sin(e * t) + P * Math.cos(e * t));
                                                };
                                        } else if (1 === b) u = (e) => p - Math.exp(-C * e) * (P + (y + C * P) * e);
                                        else {
                                                let e = C * Math.sqrt(b * b - 1);
                                                u = (t) => {
                                                        let s = Math.exp(-b * C * t),
                                                            r = Math.min(e * t, 300);
                                                        return p - (s * ((y + b * C * P) * Math.sinh(r) + e * P * Math.cosh(r))) / e;
                                                };
                                        }
                                        return {
                                                calculatedDuration: (x && v) || null,
                                                next: (e) => {
                                                        let r = u(e);
                                                        if (x) d.done = e >= v;
                                                        else {
                                                                let i = 0;
                                                                b < 1 &&
                                                                (i =
                                                                    0 === e
                                                                        ? (0, o.secondsToMilliseconds)(y)
                                                                        : (0, n.calcGeneratorVelocity)(u, e, r));
                                                                let a = Math.abs(i) <= s,
                                                                    l = Math.abs(p - r) <= t;
                                                                d.done = a && l;
                                                        }
                                                        return (d.value = d.done ? p : r), d;
                                                },
                                        };
                                }
                        },
                        {
                                "../../../utils/time-conversion.mjs": "ejbH7",
                                "../utils/velocity.mjs": "55UwL",
                                "./find.mjs": "jm7ie",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "55UwL": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "calcGeneratorVelocity", () => n);
                                var o = e("../../../utils/velocity-per-second.mjs");
                                function n(e, t, s) {
                                        let r = Math.max(t - 5, 0);
                                        return (0, o.velocityPerSecond)(s - e(r), t - r);
                                }
                        },
                        {
                                "../../../utils/velocity-per-second.mjs": "4HvzQ",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "4HvzQ": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t) {
                                        return t ? e * (1e3 / t) : 0;
                                }
                                r.defineInteropFlag(s), r.export(s, "velocityPerSecond", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                jm7ie: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "calcAngularFreq", () => p),
                                    r.export(s, "findSpring", () => c),
                                    r.export(s, "maxDamping", () => u),
                                    r.export(s, "maxDuration", () => l),
                                    r.export(s, "minDamping", () => m),
                                    r.export(s, "minDuration", () => a);
                                var o = e("../../../utils/errors.mjs"),
                                    n = e("../../../utils/clamp.mjs"),
                                    i = e("../../../utils/time-conversion.mjs");
                                let a = 0.01,
                                    l = 10,
                                    m = 0.05,
                                    u = 1;
                                function c({ duration: e = 800, bounce: t = 0.25, velocity: s = 0, mass: r = 1 }) {
                                        let c, d;
                                        (0, o.warning)(
                                            e <= (0, i.secondsToMilliseconds)(l),
                                            "Spring duration must be 10 seconds or less"
                                        );
                                        let h = 1 - t;
                                        (h = (0, n.clamp)(m, u, h)),
                                            (e = (0, n.clamp)(a, l, (0, i.millisecondsToSeconds)(e))),
                                            h < 1
                                                ? ((c = (t) => {
                                                        let r = t * h,
                                                            o = r * e,
                                                            n = p(t, h);
                                                        return 0.001 - ((r - s) / n) * Math.exp(-o);
                                                }),
                                                    (d = (t) => {
                                                            let r = t * h,
                                                                o = r * e,
                                                                n = Math.pow(h, 2) * Math.pow(t, 2) * e,
                                                                i = p(Math.pow(t, 2), h),
                                                                a = -c(t) + 0.001 > 0 ? -1 : 1;
                                                            return (a * ((o * s + s - n) * Math.exp(-o))) / i;
                                                    }))
                                                : ((c = (t) => {
                                                        let r = Math.exp(-t * e),
                                                            o = (t - s) * e + 1;
                                                        return -0.001 + r * o;
                                                }),
                                                    (d = (t) => {
                                                            let r = Math.exp(-t * e),
                                                                o = (s - t) * (e * e);
                                                            return r * o;
                                                    }));
                                        let f = 5 / e,
                                            j = (function (e, t, s) {
                                                    let r = s;
                                                    for (let s = 1; s < 12; s++) r -= e(r) / t(r);
                                                    return r;
                                            })(c, d, f);
                                        if (((e = (0, i.secondsToMilliseconds)(e)), isNaN(j)))
                                                return { stiffness: 100, damping: 10, duration: e };
                                        {
                                                let t = Math.pow(j, 2) * r;
                                                return { stiffness: t, damping: 2 * h * Math.sqrt(r * t), duration: e };
                                        }
                                }
                                function p(e, t) {
                                        return e * Math.sqrt(1 - t * t);
                                }
                        },
                        {
                                "../../../utils/errors.mjs": "gxmqQ",
                                "../../../utils/clamp.mjs": "j3fGo",
                                "../../../utils/time-conversion.mjs": "ejbH7",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "4YMfs": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "inertia", () => i);
                                var o = e("./spring/index.mjs"),
                                    n = e("./utils/velocity.mjs");
                                function i({
                                                   keyframes: e,
                                                   velocity: t = 0,
                                                   power: s = 0.8,
                                                   timeConstant: r = 325,
                                                   bounceDamping: i = 10,
                                                   bounceStiffness: a = 500,
                                                   modifyTarget: l,
                                                   min: m,
                                                   max: u,
                                                   restDelta: c = 0.5,
                                                   restSpeed: p,
                                           }) {
                                        let d, h;
                                        let f = e[0],
                                            j = { done: !1, value: f },
                                            v = (e) => (void 0 !== m && e < m) || (void 0 !== u && e > u),
                                            g = (e) =>
                                                void 0 === m ? u : void 0 === u ? m : Math.abs(m - e) < Math.abs(u - e) ? m : u,
                                            x = s * t,
                                            y = f + x,
                                            b = void 0 === l ? y : l(y);
                                        b !== y && (x = b - f);
                                        let P = (e) => -x * Math.exp(-e / r),
                                            C = (e) => b + P(e),
                                            S = (e) => {
                                                    let t = P(e),
                                                        s = C(e);
                                                    (j.done = Math.abs(t) <= c), (j.value = j.done ? b : s);
                                            },
                                            T = (e) => {
                                                    v(j.value) &&
                                                    ((d = e),
                                                        (h = (0, o.spring)({
                                                                keyframes: [j.value, g(j.value)],
                                                                velocity: (0, n.calcGeneratorVelocity)(C, e, j.value),
                                                                damping: i,
                                                                stiffness: a,
                                                                restDelta: c,
                                                                restSpeed: p,
                                                        })));
                                            };
                                        return (
                                            T(0),
                                                {
                                                        calculatedDuration: null,
                                                        next: (e) => {
                                                                let t = !1;
                                                                return (h || void 0 !== d || ((t = !0), S(e), T(e)), void 0 !== d && e >= d)
                                                                    ? h.next(e - d)
                                                                    : (t || S(e), j);
                                                        },
                                                }
                                        );
                                }
                        },
                        {
                                "./spring/index.mjs": "h3Hja",
                                "./utils/velocity.mjs": "55UwL",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                hDra5: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "defaultEasing", () => u), r.export(s, "keyframes", () => c);
                                var o = e("../../easing/ease.mjs"),
                                    n = e("../../easing/utils/is-easing-array.mjs"),
                                    i = e("../../easing/utils/map.mjs"),
                                    a = e("../../utils/interpolate.mjs"),
                                    l = e("../../utils/offsets/default.mjs"),
                                    m = e("../../utils/offsets/time.mjs");
                                function u(e, t) {
                                        return e.map(() => t || o.easeInOut).splice(0, e.length - 1);
                                }
                                function c({ duration: e = 300, keyframes: t, times: s, ease: r = "easeInOut" }) {
                                        let o = (0, n.isEasingArray)(r)
                                                ? r.map(i.easingDefinitionToFunction)
                                                : (0, i.easingDefinitionToFunction)(r),
                                            c = { done: !1, value: t[0] },
                                            p = (0, m.convertOffsetToTimes)(
                                                s && s.length === t.length ? s : (0, l.defaultOffset)(t),
                                                e
                                            ),
                                            d = (0, a.interpolate)(p, t, { ease: Array.isArray(o) ? o : u(t, o) });
                                        return { calculatedDuration: e, next: (t) => ((c.value = d(t)), (c.done = t >= e), c) };
                                }
                        },
                        {
                                "../../easing/ease.mjs": "c3wJk",
                                "../../easing/utils/is-easing-array.mjs": "crJeQ",
                                "../../easing/utils/map.mjs": "bCpZf",
                                "../../utils/interpolate.mjs": "8jisR",
                                "../../utils/offsets/default.mjs": "l1UeV",
                                "../../utils/offsets/time.mjs": "9Svbw",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                c3wJk: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "easeIn", () => n),
                                    r.export(s, "easeInOut", () => a),
                                    r.export(s, "easeOut", () => i);
                                var o = e("./cubic-bezier.mjs");
                                let n = (0, o.cubicBezier)(0.42, 0, 1, 1),
                                    i = (0, o.cubicBezier)(0, 0, 0.58, 1),
                                    a = (0, o.cubicBezier)(0.42, 0, 0.58, 1);
                        },
                        { "./cubic-bezier.mjs": "2bBYQ", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "2bBYQ": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "cubicBezier", () => i);
                                var o = e("../utils/noop.mjs");
                                let n = (e, t, s) => (((1 - 3 * s + 3 * t) * e + (3 * s - 6 * t)) * e + 3 * t) * e;
                                function i(e, t, s, r) {
                                        if (e === t && s === r) return o.noop;
                                        let i = (t) =>
                                            (function (e, t, s, r, o) {
                                                    let i, a;
                                                    let l = 0;
                                                    do (i = n((a = t + (s - t) / 2), r, o) - e) > 0 ? (s = a) : (t = a);
                                                    while (Math.abs(i) > 1e-7 && ++l < 12);
                                                    return a;
                                            })(t, 0, 1, e, s);
                                        return (e) => (0 === e || 1 === e ? e : n(i(e), t, r));
                                }
                        },
                        { "../utils/noop.mjs": "atNA1", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                crJeQ: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isEasingArray", () => o);
                                let o = (e) => Array.isArray(e) && "number" != typeof e[0];
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                bCpZf: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "easingDefinitionToFunction", () => p);
                                var o = e("../../utils/errors.mjs"),
                                    n = e("../cubic-bezier.mjs"),
                                    i = e("../../utils/noop.mjs"),
                                    a = e("../ease.mjs"),
                                    l = e("../circ.mjs"),
                                    m = e("../back.mjs"),
                                    u = e("../anticipate.mjs");
                                let c = {
                                            linear: i.noop,
                                            easeIn: a.easeIn,
                                            easeInOut: a.easeInOut,
                                            easeOut: a.easeOut,
                                            circIn: l.circIn,
                                            circInOut: l.circInOut,
                                            circOut: l.circOut,
                                            backIn: m.backIn,
                                            backInOut: m.backInOut,
                                            backOut: m.backOut,
                                            anticipate: u.anticipate,
                                    },
                                    p = (e) => {
                                            if (Array.isArray(e)) {
                                                    (0, o.invariant)(
                                                        4 === e.length,
                                                        "Cubic bezier arrays must contain four numerical values."
                                                    );
                                                    let [t, s, r, i] = e;
                                                    return (0, n.cubicBezier)(t, s, r, i);
                                            }
                                            return "string" == typeof e
                                                ? ((0, o.invariant)(void 0 !== c[e], `Invalid easing type '${e}'`), c[e])
                                                : e;
                                    };
                        },
                        {
                                "../../utils/errors.mjs": "gxmqQ",
                                "../cubic-bezier.mjs": "2bBYQ",
                                "../../utils/noop.mjs": "atNA1",
                                "../ease.mjs": "c3wJk",
                                "../circ.mjs": "dG1x1",
                                "../back.mjs": "9d7uk",
                                "../anticipate.mjs": "6E6pd",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                dG1x1: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "circIn", () => i),
                                    r.export(s, "circInOut", () => l),
                                    r.export(s, "circOut", () => a);
                                var o = e("./modifiers/mirror.mjs"),
                                    n = e("./modifiers/reverse.mjs");
                                let i = (e) => 1 - Math.sin(Math.acos(e)),
                                    a = (0, n.reverseEasing)(i),
                                    l = (0, o.mirrorEasing)(i);
                        },
                        {
                                "./modifiers/mirror.mjs": "3a8gA",
                                "./modifiers/reverse.mjs": "j2W2S",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "3a8gA": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "mirrorEasing", () => o);
                                let o = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                j2W2S: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "reverseEasing", () => o);
                                let o = (e) => (t) => 1 - e(1 - t);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "9d7uk": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "backIn", () => l),
                                    r.export(s, "backInOut", () => m),
                                    r.export(s, "backOut", () => a);
                                var o = e("./cubic-bezier.mjs"),
                                    n = e("./modifiers/mirror.mjs"),
                                    i = e("./modifiers/reverse.mjs");
                                let a = (0, o.cubicBezier)(0.33, 1.53, 0.69, 0.99),
                                    l = (0, i.reverseEasing)(a),
                                    m = (0, n.mirrorEasing)(l);
                        },
                        {
                                "./cubic-bezier.mjs": "2bBYQ",
                                "./modifiers/mirror.mjs": "3a8gA",
                                "./modifiers/reverse.mjs": "j2W2S",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "6E6pd": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "anticipate", () => n);
                                var o = e("./back.mjs");
                                let n = (e) => ((e *= 2) < 1 ? 0.5 * (0, o.backIn)(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))));
                        },
                        { "./back.mjs": "9d7uk", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "8jisR": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "interpolate", () => u);
                                var o = e("./errors.mjs"),
                                    n = e("./clamp.mjs"),
                                    i = e("./pipe.mjs"),
                                    a = e("./progress.mjs"),
                                    l = e("./noop.mjs"),
                                    m = e("./mix/index.mjs");
                                function u(e, t, { clamp: s = !0, ease: r, mixer: u } = {}) {
                                        let c = e.length;
                                        if (
                                            ((0, o.invariant)(c === t.length, "Both input and output ranges must be the same length"),
                                            1 === c)
                                        )
                                                return () => t[0];
                                        if (2 === c && e[0] === e[1]) return () => t[1];
                                        e[0] > e[c - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
                                        let p = (function (e, t, s) {
                                                    let r = [],
                                                        o = s || m.mix,
                                                        n = e.length - 1;
                                                    for (let s = 0; s < n; s++) {
                                                            let n = o(e[s], e[s + 1]);
                                                            if (t) {
                                                                    let e = Array.isArray(t) ? t[s] || l.noop : t;
                                                                    n = (0, i.pipe)(e, n);
                                                            }
                                                            r.push(n);
                                                    }
                                                    return r;
                                            })(t, r, u),
                                            d = p.length,
                                            h = (t) => {
                                                    let s = 0;
                                                    if (d > 1) for (; s < e.length - 2 && !(t < e[s + 1]); s++);
                                                    let r = (0, a.progress)(e[s], e[s + 1], t);
                                                    return p[s](r);
                                            };
                                        return s ? (t) => h((0, n.clamp)(e[0], e[c - 1], t)) : h;
                                }
                        },
                        {
                                "./errors.mjs": "gxmqQ",
                                "./clamp.mjs": "j3fGo",
                                "./pipe.mjs": "f51nb",
                                "./progress.mjs": "8dmmm",
                                "./noop.mjs": "atNA1",
                                "./mix/index.mjs": "6dfHD",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                f51nb: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "pipe", () => n);
                                let o = (e, t) => (s) => t(e(s)),
                                    n = (...e) => e.reduce(o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "8dmmm": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "progress", () => o);
                                let o = (e, t, s) => {
                                        let r = t - e;
                                        return 0 === r ? 1 : (s - e) / r;
                                };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6dfHD": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "mix", () => i);
                                var o = e("./complex.mjs"),
                                    n = e("./number.mjs");
                                function i(e, t, s) {
                                        if ("number" == typeof e && "number" == typeof t && "number" == typeof s)
                                                return (0, n.mixNumber)(e, t, s);
                                        let r = (0, o.getMixer)(e);
                                        return r(e, t);
                                }
                        },
                        {
                                "./complex.mjs": "iExKA",
                                "./number.mjs": "9zo4o",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                iExKA: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "getMixer", () => h),
                                    r.export(s, "mixArray", () => f),
                                    r.export(s, "mixComplex", () => v),
                                    r.export(s, "mixObject", () => j);
                                var o = e("./number.mjs"),
                                    n = e("./color.mjs"),
                                    i = e("../pipe.mjs"),
                                    a = e("../errors.mjs"),
                                    l = e("../../value/types/color/index.mjs"),
                                    m = e("../../value/types/complex/index.mjs"),
                                    u = e("../../render/dom/utils/is-css-variable.mjs"),
                                    c = e("./visibility.mjs"),
                                    p = e("./immediate.mjs");
                                function d(e, t) {
                                        return (s) => (0, o.mixNumber)(e, t, s);
                                }
                                function h(e) {
                                        return "number" == typeof e
                                            ? d
                                            : "string" == typeof e
                                                ? (0, u.isCSSVariableToken)(e)
                                                    ? p.mixImmediate
                                                    : (0, l.color).test(e)
                                                        ? n.mixColor
                                                        : v
                                                : Array.isArray(e)
                                                    ? f
                                                    : "object" == typeof e
                                                        ? (0, l.color).test(e)
                                                            ? n.mixColor
                                                            : j
                                                        : p.mixImmediate;
                                }
                                function f(e, t) {
                                        let s = [...e],
                                            r = s.length,
                                            o = e.map((e, s) => h(e)(e, t[s]));
                                        return (e) => {
                                                for (let t = 0; t < r; t++) s[t] = o[t](e);
                                                return s;
                                        };
                                }
                                function j(e, t) {
                                        let s = { ...e, ...t },
                                            r = {};
                                        for (let o in s) void 0 !== e[o] && void 0 !== t[o] && (r[o] = h(e[o])(e[o], t[o]));
                                        return (e) => {
                                                for (let t in r) s[t] = r[t](e);
                                                return s;
                                        };
                                }
                                let v = (e, t) => {
                                        let s = (0, m.complex).createTransformer(t),
                                            r = (0, m.analyseComplexValue)(e),
                                            o = (0, m.analyseComplexValue)(t),
                                            n =
                                                r.indexes.var.length === o.indexes.var.length &&
                                                r.indexes.color.length === o.indexes.color.length &&
                                                r.indexes.number.length >= o.indexes.number.length;
                                        return n
                                            ? ((0, c.invisibleValues).has(e) && !o.values.length) ||
                                            ((0, c.invisibleValues).has(t) && !r.values.length)
                                                ? (0, c.mixVisibility)(e, t)
                                                : (0, i.pipe)(
                                                    f(
                                                        (function (e, t) {
                                                                var s;
                                                                let r = [],
                                                                    o = { color: 0, var: 0, number: 0 };
                                                                for (let n = 0; n < t.values.length; n++) {
                                                                        let i = t.types[n],
                                                                            a = e.indexes[i][o[i]],
                                                                            l = null !== (s = e.values[a]) && void 0 !== s ? s : 0;
                                                                        (r[n] = l), o[i]++;
                                                                }
                                                                return r;
                                                        })(r, o),
                                                        o.values
                                                    ),
                                                    s
                                                )
                                            : ((0, a.warning)(
                                                !0,
                                                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
                                            ),
                                                (0, p.mixImmediate)(e, t));
                                };
                        },
                        {
                                "./number.mjs": "9zo4o",
                                "./color.mjs": "5iAK1",
                                "../pipe.mjs": "f51nb",
                                "../errors.mjs": "gxmqQ",
                                "../../value/types/color/index.mjs": "d4S9P",
                                "../../value/types/complex/index.mjs": "h5yJ0",
                                "../../render/dom/utils/is-css-variable.mjs": "5GTp9",
                                "./visibility.mjs": "4nygW",
                                "./immediate.mjs": "komyn",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9zo4o": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "mixNumber", () => o);
                                let o = (e, t, s) => e + (t - e) * s;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5iAK1": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "mixColor", () => f), r.export(s, "mixLinearColor", () => c);
                                var o = e("./number.mjs"),
                                    n = e("../errors.mjs"),
                                    i = e("../hsla-to-rgba.mjs"),
                                    a = e("../../value/types/color/hex.mjs"),
                                    l = e("../../value/types/color/rgba.mjs"),
                                    m = e("../../value/types/color/hsla.mjs"),
                                    u = e("./immediate.mjs");
                                let c = (e, t, s) => {
                                            let r = e * e,
                                                o = s * (t * t - r) + r;
                                            return o < 0 ? 0 : Math.sqrt(o);
                                    },
                                    p = [a.hex, l.rgba, m.hsla],
                                    d = (e) => p.find((t) => t.test(e));
                                function h(e) {
                                        let t = d(e);
                                        if (
                                            ((0, n.warning)(
                                                !!t,
                                                `'${e}' is not an animatable color. Use the equivalent color code instead.`
                                            ),
                                                !t)
                                        )
                                                return !1;
                                        let s = t.parse(e);
                                        return t === m.hsla && (s = (0, i.hslaToRgba)(s)), s;
                                }
                                let f = (e, t) => {
                                        let s = h(e),
                                            r = h(t);
                                        if (!s || !r) return (0, u.mixImmediate)(e, t);
                                        let n = { ...s };
                                        return (e) => (
                                            (n.red = c(s.red, r.red, e)),
                                                (n.green = c(s.green, r.green, e)),
                                                (n.blue = c(s.blue, r.blue, e)),
                                                (n.alpha = (0, o.mixNumber)(s.alpha, r.alpha, e)),
                                                (0, l.rgba).transform(n)
                                        );
                                };
                        },
                        {
                                "./number.mjs": "9zo4o",
                                "../errors.mjs": "gxmqQ",
                                "../hsla-to-rgba.mjs": "1vLcp",
                                "../../value/types/color/hex.mjs": "3ZPNu",
                                "../../value/types/color/rgba.mjs": "7XMi1",
                                "../../value/types/color/hsla.mjs": "9sMIV",
                                "./immediate.mjs": "komyn",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "1vLcp": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t, s) {
                                        return (s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6)
                                            ? e + (t - e) * 6 * s
                                            : s < 0.5
                                                ? t
                                                : s < 2 / 3
                                                    ? e + (t - e) * (2 / 3 - s) * 6
                                                    : e;
                                }
                                function n({ hue: e, saturation: t, lightness: s, alpha: r }) {
                                        (e /= 360), (s /= 100);
                                        let n = 0,
                                            i = 0,
                                            a = 0;
                                        if ((t /= 100)) {
                                                let r = s < 0.5 ? s * (1 + t) : s + t - s * t,
                                                    l = 2 * s - r;
                                                (n = o(l, r, e + 1 / 3)), (i = o(l, r, e)), (a = o(l, r, e - 1 / 3));
                                        } else n = i = a = s;
                                        return {
                                                red: Math.round(255 * n),
                                                green: Math.round(255 * i),
                                                blue: Math.round(255 * a),
                                                alpha: r,
                                        };
                                }
                                r.defineInteropFlag(s), r.export(s, "hslaToRgba", () => n);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                komyn: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t) {
                                        return (s) => (s > 0 ? t : e);
                                }
                                r.defineInteropFlag(s), r.export(s, "mixImmediate", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4nygW": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "invisibleValues", () => o),
                                    r.export(s, "mixVisibility", () => n);
                                let o = new Set(["none", "hidden"]);
                                function n(e, t) {
                                        return o.has(e) ? (s) => (s <= 0 ? e : t) : (s) => (s >= 1 ? t : e);
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                l1UeV: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "defaultOffset", () => n);
                                var o = e("./fill.mjs");
                                function n(e) {
                                        let t = [0];
                                        return (0, o.fillOffset)(t, e.length - 1), t;
                                }
                        },
                        { "./fill.mjs": "MoGfN", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                MoGfN: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "fillOffset", () => i);
                                var o = e("../mix/number.mjs"),
                                    n = e("../progress.mjs");
                                function i(e, t) {
                                        let s = e[e.length - 1];
                                        for (let r = 1; r <= t; r++) {
                                                let i = (0, n.progress)(0, t, r);
                                                e.push((0, o.mixNumber)(s, 1, i));
                                        }
                                }
                        },
                        {
                                "../mix/number.mjs": "9zo4o",
                                "../progress.mjs": "8dmmm",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9Svbw": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t) {
                                        return e.map((e) => e * t);
                                }
                                r.defineInteropFlag(s), r.export(s, "convertOffsetToTimes", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                kJMnA: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "calcGeneratorDuration", () => n),
                                    r.export(s, "maxGeneratorDuration", () => o);
                                let o = 2e4;
                                function n(e) {
                                        let t = 0,
                                            s = e.next(t);
                                        for (; !s.done && t < o; ) (t += 50), (s = e.next(t));
                                        return t >= o ? 1 / 0 : t;
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4ZPp4": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "frameloopDriver", () => i);
                                var o = e("../../../frameloop/sync-time.mjs"),
                                    n = e("../../../frameloop/frame.mjs");
                                let i = (e) => {
                                        let t = ({ timestamp: t }) => e(t);
                                        return {
                                                start: () => (0, n.frame).update(t, !0),
                                                stop: () => (0, n.cancelFrame)(t),
                                                now: () => (n.frameData.isProcessing ? n.frameData.timestamp : (0, o.time).now()),
                                        };
                                };
                        },
                        {
                                "../../../frameloop/sync-time.mjs": "kNVkV",
                                "../../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                jol10: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "animateStyle", () => n);
                                var o = e("./easing.mjs");
                                function n(
                                    e,
                                    t,
                                    s,
                                    {
                                            delay: r = 0,
                                            duration: n = 300,
                                            repeat: i = 0,
                                            repeatType: a = "loop",
                                            ease: l,
                                            times: m,
                                    } = {}
                                ) {
                                        let u = { [t]: s };
                                        m && (u.offset = m);
                                        let c = (0, o.mapEasingToNativeEasing)(l);
                                        return (
                                            Array.isArray(c) && (u.easing = c),
                                                e.animate(u, {
                                                        delay: r,
                                                        duration: n,
                                                        easing: Array.isArray(c) ? "linear" : c,
                                                        fill: "both",
                                                        iterations: i + 1,
                                                        direction: "reverse" === a ? "alternate" : "normal",
                                                })
                                        );
                                }
                        },
                        { "./easing.mjs": "4z13W", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4z13W": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "cubicBezierAsString", () => i),
                                    r.export(s, "isWaapiSupportedEasing", () => n),
                                    r.export(s, "mapEasingToNativeEasing", () => m),
                                    r.export(s, "supportedWaapiEasing", () => a);
                                var o = e("../../../easing/utils/is-bezier-definition.mjs");
                                function n(e) {
                                        return !!(
                                            !e ||
                                            ("string" == typeof e && e in a) ||
                                            (0, o.isBezierDefinition)(e) ||
                                            (Array.isArray(e) && e.every(n))
                                        );
                                }
                                let i = ([e, t, s, r]) => `cubic-bezier(${e}, ${t}, ${s}, ${r})`,
                                    a = {
                                            linear: "linear",
                                            ease: "ease",
                                            easeIn: "ease-in",
                                            easeOut: "ease-out",
                                            easeInOut: "ease-in-out",
                                            circIn: i([0, 0.65, 0.55, 1]),
                                            circOut: i([0.55, 0, 1, 0.45]),
                                            backIn: i([0.31, 0.01, 0.66, -0.59]),
                                            backOut: i([0.33, 1.53, 0.69, 0.99]),
                                    };
                                function l(e) {
                                        return m(e) || a.easeOut;
                                }
                                function m(e) {
                                        if (e) return (0, o.isBezierDefinition)(e) ? i(e) : Array.isArray(e) ? e.map(l) : a[e];
                                }
                        },
                        {
                                "../../../easing/utils/is-bezier-definition.mjs": "j4uYt",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                j4uYt: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isBezierDefinition", () => o);
                                let o = (e) => Array.isArray(e) && "number" == typeof e[0];
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                lbUje: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "GroupPlaybackControls", () => i);
                                var o = e("../render/dom/scroll/observe.mjs"),
                                    n = e("../render/dom/scroll/supports.mjs");
                                class i {
                                        constructor(e) {
                                                (this.stop = () => this.runAll("stop")), (this.animations = e.filter(Boolean));
                                        }
                                        then(e, t) {
                                                return Promise.all(this.animations).then(e).catch(t);
                                        }
                                        getAll(e) {
                                                return this.animations[0][e];
                                        }
                                        setAll(e, t) {
                                                for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = t;
                                        }
                                        attachTimeline(e) {
                                                let t = this.animations.map((t) => {
                                                        if (!(0, n.supportsScrollTimeline)() || !t.attachTimeline)
                                                                return (
                                                                    t.pause(),
                                                                        (0, o.observeTimeline)((e) => {
                                                                                t.time = t.duration * e;
                                                                        }, e)
                                                                );
                                                        t.attachTimeline(e);
                                                });
                                                return () => {
                                                        t.forEach((e, t) => {
                                                                e && e(), this.animations[t].stop();
                                                        });
                                                };
                                        }
                                        get time() {
                                                return this.getAll("time");
                                        }
                                        set time(e) {
                                                this.setAll("time", e);
                                        }
                                        get speed() {
                                                return this.getAll("speed");
                                        }
                                        set speed(e) {
                                                this.setAll("speed", e);
                                        }
                                        get startTime() {
                                                return this.getAll("startTime");
                                        }
                                        get duration() {
                                                let e = 0;
                                                for (let t = 0; t < this.animations.length; t++)
                                                        e = Math.max(e, this.animations[t].duration);
                                                return e;
                                        }
                                        runAll(e) {
                                                this.animations.forEach((t) => t[e]());
                                        }
                                        play() {
                                                this.runAll("play");
                                        }
                                        pause() {
                                                this.runAll("pause");
                                        }
                                        cancel() {
                                                this.runAll("cancel");
                                        }
                                        complete() {
                                                this.runAll("complete");
                                        }
                                }
                        },
                        {
                                "../render/dom/scroll/observe.mjs": "9rgAT",
                                "../render/dom/scroll/supports.mjs": "lfqeH",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9rgAT": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "observeTimeline", () => n);
                                var o = e("../../../frameloop/frame.mjs");
                                function n(e, t) {
                                        let s;
                                        let r = () => {
                                                let { currentTime: r } = t,
                                                    o = null === r ? 0 : r.value,
                                                    n = o / 100;
                                                s !== n && e(n), (s = n);
                                        };
                                        return (0, o.frame).update(r, !0), () => (0, o.cancelFrame)(r);
                                }
                        },
                        { "../../../frameloop/frame.mjs": "7hMWE", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                lfqeH: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "supportsScrollTimeline", () => n);
                                var o = e("../../../utils/memo.mjs");
                                let n = (0, o.memo)(() => void 0 !== window.ScrollTimeline);
                        },
                        { "../../../utils/memo.mjs": "fUz2S", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                l7SG9: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "setTarget", () => a);
                                var o = e("../../utils/resolve-value.mjs"),
                                    n = e("../../value/index.mjs"),
                                    i = e("./resolve-dynamic-variants.mjs");
                                function a(e, t) {
                                        let s = (0, i.resolveVariant)(e, t),
                                            { transitionEnd: r = {}, transition: a = {}, ...l } = s || {};
                                        for (let t in (l = { ...l, ...r })) {
                                                let s = (0, o.resolveFinalValueInKeyframes)(l[t]);
                                                e.hasValue(t) ? e.getValue(t).set(s) : e.addValue(t, (0, n.motionValue)(s));
                                        }
                                }
                        },
                        {
                                "../../utils/resolve-value.mjs": "61mtM",
                                "../../value/index.mjs": "5VFp2",
                                "./resolve-dynamic-variants.mjs": "6czzQ",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "5VFp2": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "MotionValue", () => u),
                                    r.export(s, "collectMotionValues", () => m),
                                    r.export(s, "motionValue", () => c);
                                var o = e("../utils/subscription-manager.mjs"),
                                    n = e("../utils/velocity-per-second.mjs");
                                e("../utils/warn-once.mjs");
                                var i = e("../frameloop/sync-time.mjs"),
                                    a = e("../frameloop/frame.mjs");
                                let l = (e) => !isNaN(parseFloat(e)),
                                    m = { current: void 0 };
                                class u {
                                        constructor(e, t = {}) {
                                                (this.version = "11.3.29"),
                                                    (this.canTrackVelocity = null),
                                                    (this.events = {}),
                                                    (this.updateAndNotify = (e, t = !0) => {
                                                            let s = (0, i.time).now();
                                                            this.updatedAt !== s && this.setPrevFrameValue(),
                                                                (this.prev = this.current),
                                                                this.setCurrent(e),
                                                            this.current !== this.prev &&
                                                            this.events.change &&
                                                            this.events.change.notify(this.current),
                                                            t &&
                                                            this.events.renderRequest &&
                                                            this.events.renderRequest.notify(this.current);
                                                    }),
                                                    (this.hasAnimated = !1),
                                                    this.setCurrent(e),
                                                    (this.owner = t.owner);
                                        }
                                        setCurrent(e) {
                                                (this.current = e),
                                                    (this.updatedAt = (0, i.time).now()),
                                                null === this.canTrackVelocity &&
                                                void 0 !== e &&
                                                (this.canTrackVelocity = l(this.current));
                                        }
                                        setPrevFrameValue(e = this.current) {
                                                (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
                                        }
                                        onChange(e) {
                                                return this.on("change", e);
                                        }
                                        on(e, t) {
                                                this.events[e] || (this.events[e] = new o.SubscriptionManager());
                                                let s = this.events[e].add(t);
                                                return "change" === e
                                                    ? () => {
                                                            s(),
                                                                (0, a.frame).read(() => {
                                                                        this.events.change.getSize() || this.stop();
                                                                });
                                                    }
                                                    : s;
                                        }
                                        clearListeners() {
                                                for (let e in this.events) this.events[e].clear();
                                        }
                                        attach(e, t) {
                                                (this.passiveEffect = e), (this.stopPassiveEffect = t);
                                        }
                                        set(e, t = !0) {
                                                t && this.passiveEffect
                                                    ? this.passiveEffect(e, this.updateAndNotify)
                                                    : this.updateAndNotify(e, t);
                                        }
                                        setWithVelocity(e, t, s) {
                                                this.set(t),
                                                    (this.prev = void 0),
                                                    (this.prevFrameValue = e),
                                                    (this.prevUpdatedAt = this.updatedAt - s);
                                        }
                                        jump(e, t = !0) {
                                                this.updateAndNotify(e),
                                                    (this.prev = e),
                                                    (this.prevUpdatedAt = this.prevFrameValue = void 0),
                                                t && this.stop(),
                                                this.stopPassiveEffect && this.stopPassiveEffect();
                                        }
                                        get() {
                                                return m.current && m.current.push(this), this.current;
                                        }
                                        getPrevious() {
                                                return this.prev;
                                        }
                                        getVelocity() {
                                                let e = (0, i.time).now();
                                                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                                                        return 0;
                                                let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                                                return (0, n.velocityPerSecond)(
                                                    parseFloat(this.current) - parseFloat(this.prevFrameValue),
                                                    t
                                                );
                                        }
                                        start(e) {
                                                return (
                                                    this.stop(),
                                                        new Promise((t) => {
                                                                (this.hasAnimated = !0),
                                                                    (this.animation = e(t)),
                                                                this.events.animationStart && this.events.animationStart.notify();
                                                        }).then(() => {
                                                                this.events.animationComplete && this.events.animationComplete.notify(),
                                                                    this.clearAnimation();
                                                        })
                                                );
                                        }
                                        stop() {
                                                this.animation &&
                                                (this.animation.stop(),
                                                this.events.animationCancel && this.events.animationCancel.notify()),
                                                    this.clearAnimation();
                                        }
                                        isAnimating() {
                                                return !!this.animation;
                                        }
                                        clearAnimation() {
                                                delete this.animation;
                                        }
                                        destroy() {
                                                this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                                        }
                                }
                                function c(e, t) {
                                        return new u(e, t);
                                }
                        },
                        {
                                "../utils/subscription-manager.mjs": "axhZT",
                                "../utils/velocity-per-second.mjs": "4HvzQ",
                                "../utils/warn-once.mjs": "hmXbm",
                                "../frameloop/sync-time.mjs": "kNVkV",
                                "../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                axhZT: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "SubscriptionManager", () => n);
                                var o = e("./array.mjs");
                                class n {
                                        constructor() {
                                                this.subscriptions = [];
                                        }
                                        add(e) {
                                                return (
                                                    (0, o.addUniqueItem)(this.subscriptions, e),
                                                        () => (0, o.removeItem)(this.subscriptions, e)
                                                );
                                        }
                                        notify(e, t, s) {
                                                let r = this.subscriptions.length;
                                                if (r) {
                                                        if (1 === r) this.subscriptions[0](e, t, s);
                                                        else
                                                                for (let o = 0; o < r; o++) {
                                                                        let r = this.subscriptions[o];
                                                                        r && r(e, t, s);
                                                                }
                                                }
                                        }
                                        getSize() {
                                                return this.subscriptions.length;
                                        }
                                        clear() {
                                                this.subscriptions.length = 0;
                                        }
                                }
                        },
                        { "./array.mjs": "7RTUe", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                hmXbm: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "warnOnce", () => n);
                                let o = new Set();
                                function n(e, t, s) {
                                        e || o.has(t) || (console.warn(t), s && console.warn(s), o.add(t));
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "7JNfp": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getOptimisedAppearId", () => n);
                                var o = e("./data-id.mjs");
                                function n(e) {
                                        return e.getProps()[o.optimizedAppearDataAttribute];
                                }
                        },
                        { "./data-id.mjs": "cCE6F", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "374I3": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "addValueToWillChange", () => i);
                                var o = e("./WillChangeMotionValue.mjs"),
                                    n = e("./is.mjs");
                                function i(e, t) {
                                        var s;
                                        if (!e.applyWillChange) return;
                                        let r = e.getValue("willChange");
                                        if (
                                            (r ||
                                            (null === (s = e.props.style) || void 0 === s ? void 0 : s.willChange) ||
                                            ((r = new o.WillChangeMotionValue("auto")), e.addValue("willChange", r)),
                                                (0, n.isWillChangeMotionValue)(r))
                                        )
                                                return r.add(t);
                                }
                        },
                        {
                                "./WillChangeMotionValue.mjs": "aTDSd",
                                "./is.mjs": "iFvOg",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                aTDSd: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "WillChangeMotionValue", () => a);
                                var o = e("../index.mjs"),
                                    n = e("./get-will-change-name.mjs"),
                                    i = e("../../utils/array.mjs");
                                class a extends o.MotionValue {
                                        constructor() {
                                                super(...arguments), (this.output = []), (this.counts = new Map());
                                        }
                                        add(e) {
                                                let t = (0, n.getWillChangeName)(e);
                                                if (!t) return;
                                                let s = this.counts.get(t) || 0;
                                                this.counts.set(t, s + 1), 0 === s && (this.output.push(t), this.update());
                                                let r = !1;
                                                return () => {
                                                        if (r) return;
                                                        r = !0;
                                                        let e = this.counts.get(t) - 1;
                                                        this.counts.set(t, e), 0 === e && ((0, i.removeItem)(this.output, t), this.update());
                                                };
                                        }
                                        update() {
                                                this.set(this.output.length ? this.output.join(", ") : "auto");
                                        }
                                }
                        },
                        {
                                "../index.mjs": "5VFp2",
                                "./get-will-change-name.mjs": "fVOmU",
                                "../../utils/array.mjs": "7RTUe",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                iFvOg: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isWillChangeMotionValue", () => n);
                                var o = e("../utils/is-motion-value.mjs");
                                function n(e) {
                                        return !!((0, o.isMotionValue)(e) && e.add);
                                }
                        },
                        { "../utils/is-motion-value.mjs": "6Wljo", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "2rOrQ": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(
                                        s,
                                        "animateVariant",
                                        () =>
                                            function e(t, s, r = {}) {
                                                    var a;
                                                    let l = (0, o.resolveVariant)(
                                                            t,
                                                            s,
                                                            "exit" === r.type
                                                                ? null === (a = t.presenceContext) || void 0 === a
                                                                    ? void 0
                                                                    : a.custom
                                                                : void 0
                                                        ),
                                                        { transition: m = t.getDefaultTransition() || {} } = l || {};
                                                    r.transitionOverride && (m = r.transitionOverride);
                                                    let u = l
                                                            ? () => Promise.all((0, n.animateTarget)(t, l, r))
                                                            : () => Promise.resolve(),
                                                        c =
                                                            t.variantChildren && t.variantChildren.size
                                                                ? (o = 0) => {
                                                                        let {
                                                                                delayChildren: n = 0,
                                                                                staggerChildren: a,
                                                                                staggerDirection: l,
                                                                        } = m;
                                                                        return (function (t, s, r = 0, o = 0, n = 1, a) {
                                                                                let l = [],
                                                                                    m = (t.variantChildren.size - 1) * o,
                                                                                    u = 1 === n ? (e = 0) => e * o : (e = 0) => m - e * o;
                                                                                return (
                                                                                    Array.from(t.variantChildren)
                                                                                        .sort(i)
                                                                                        .forEach((t, o) => {
                                                                                                t.notify("AnimationStart", s),
                                                                                                    l.push(
                                                                                                        e(t, s, { ...a, delay: r + u(o) }).then(
                                                                                                            () => t.notify("AnimationComplete", s)
                                                                                                        )
                                                                                                    );
                                                                                        }),
                                                                                        Promise.all(l)
                                                                                );
                                                                        })(t, s, n + o, a, l, r);
                                                                }
                                                                : () => Promise.resolve(),
                                                        { when: p } = m;
                                                    if (!p) return Promise.all([u(), c(r.delay)]);
                                                    {
                                                            let [e, t] = "beforeChildren" === p ? [u, c] : [c, u];
                                                            return e().then(() => t());
                                                    }
                                            }
                                    ),
                                    r.export(s, "sortByTreeOrder", () => i);
                                var o = e("../../render/utils/resolve-dynamic-variants.mjs"),
                                    n = e("./visual-element-target.mjs");
                                function i(e, t) {
                                        return e.sortNodePosition(t);
                                }
                        },
                        {
                                "../../render/utils/resolve-dynamic-variants.mjs": "6czzQ",
                                "./visual-element-target.mjs": "ewROk",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                gTgdN: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "Feature", () => o);
                                class o {
                                        constructor(e) {
                                                (this.isMounted = !1), (this.node = e);
                                        }
                                        update() {}
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                efdCm: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "ExitAnimationFeature", () => i);
                                var o = e("../Feature.mjs");
                                let n = 0;
                                class i extends o.Feature {
                                        constructor() {
                                                super(...arguments), (this.id = n++);
                                        }
                                        update() {
                                                if (!this.node.presenceContext) return;
                                                let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
                                                    { isPresent: s } = this.node.prevPresenceContext || {};
                                                if (!this.node.animationState || e === s) return;
                                                let r = this.node.animationState.setActive("exit", !e);
                                                t && !e && r.then(() => t(this.id));
                                        }
                                        mount() {
                                                let { register: e } = this.node.presenceContext || {};
                                                e && (this.unmount = e(this.id));
                                        }
                                        unmount() {}
                                }
                        },
                        { "../Feature.mjs": "gTgdN", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                j34qs: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "gestureAnimations", () => l);
                                var o = e("../../gestures/hover.mjs"),
                                    n = e("../../gestures/focus.mjs"),
                                    i = e("../../gestures/press.mjs"),
                                    a = e("./viewport/index.mjs");
                                let l = {
                                        inView: { Feature: a.InViewFeature },
                                        tap: { Feature: i.PressGesture },
                                        focus: { Feature: n.FocusGesture },
                                        hover: { Feature: o.HoverGesture },
                                };
                        },
                        {
                                "../../gestures/hover.mjs": "16cYy",
                                "../../gestures/focus.mjs": "4IRai",
                                "../../gestures/press.mjs": "aBIXX",
                                "./viewport/index.mjs": "fu0yc",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "16cYy": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "HoverGesture", () => u);
                                var o = e("../events/add-pointer-event.mjs"),
                                    n = e("../utils/pipe.mjs"),
                                    i = e("./drag/utils/lock.mjs"),
                                    a = e("../motion/features/Feature.mjs"),
                                    l = e("../frameloop/frame.mjs");
                                function m(e, t) {
                                        let s = t ? "onHoverStart" : "onHoverEnd";
                                        return (0, o.addPointerEvent)(
                                            e.current,
                                            t ? "pointerenter" : "pointerleave",
                                            (r, o) => {
                                                    if ("touch" === r.pointerType || (0, i.isDragActive)()) return;
                                                    let n = e.getProps();
                                                    e.animationState && n.whileHover && e.animationState.setActive("whileHover", t);
                                                    let a = n[s];
                                                    a && (0, l.frame).postRender(() => a(r, o));
                                            },
                                            { passive: !e.getProps()[s] }
                                        );
                                }
                                class u extends a.Feature {
                                        mount() {
                                                this.unmount = (0, n.pipe)(m(this.node, !0), m(this.node, !1));
                                        }
                                        unmount() {}
                                }
                        },
                        {
                                "../events/add-pointer-event.mjs": "75bHa",
                                "../utils/pipe.mjs": "f51nb",
                                "./drag/utils/lock.mjs": "42KHb",
                                "../motion/features/Feature.mjs": "gTgdN",
                                "../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "75bHa": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "addPointerEvent", () => i);
                                var o = e("./add-dom-event.mjs"),
                                    n = e("./event-info.mjs");
                                function i(e, t, s, r) {
                                        return (0, o.addDomEvent)(e, t, (0, n.addPointerInfo)(s), r);
                                }
                        },
                        {
                                "./add-dom-event.mjs": "7Ok8R",
                                "./event-info.mjs": "928Kp",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7Ok8R": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t, s, r = { passive: !0 }) {
                                        return e.addEventListener(t, s, r), () => e.removeEventListener(t, s);
                                }
                                r.defineInteropFlag(s), r.export(s, "addDomEvent", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "928Kp": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "addPointerInfo", () => i),
                                    r.export(s, "extractEventInfo", () => n);
                                var o = e("./utils/is-primary-pointer.mjs");
                                function n(e, t = "page") {
                                        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
                                }
                                let i = (e) => (t) => (0, o.isPrimaryPointer)(t) && e(t, n(t));
                        },
                        {
                                "./utils/is-primary-pointer.mjs": "jVJGR",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                jVJGR: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isPrimaryPointer", () => o);
                                let o = (e) =>
                                    "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "42KHb": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        let t = null;
                                        return () =>
                                            null === t &&
                                            ((t = e),
                                                () => {
                                                        t = null;
                                                });
                                }
                                r.defineInteropFlag(s),
                                    r.export(s, "createLock", () => o),
                                    r.export(s, "getGlobalLock", () => a),
                                    r.export(s, "isDragActive", () => l);
                                let n = o("dragHorizontal"),
                                    i = o("dragVertical");
                                function a(e) {
                                        let t = !1;
                                        if ("y" === e) t = i();
                                        else if ("x" === e) t = n();
                                        else {
                                                let e = n(),
                                                    s = i();
                                                e && s
                                                    ? (t = () => {
                                                            e(), s();
                                                    })
                                                    : (e && e(), s && s());
                                        }
                                        return t;
                                }
                                function l() {
                                        let e = a(!0);
                                        return !e || (e(), !1);
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4IRai": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "FocusGesture", () => a);
                                var o = e("../events/add-dom-event.mjs"),
                                    n = e("../motion/features/Feature.mjs"),
                                    i = e("../utils/pipe.mjs");
                                class a extends n.Feature {
                                        constructor() {
                                                super(...arguments), (this.isActive = !1);
                                        }
                                        onFocus() {
                                                let e = !1;
                                                try {
                                                        e = this.node.current.matches(":focus-visible");
                                                } catch (t) {
                                                        e = !0;
                                                }
                                                e &&
                                                this.node.animationState &&
                                                (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
                                        }
                                        onBlur() {
                                                this.isActive &&
                                                this.node.animationState &&
                                                (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
                                        }
                                        mount() {
                                                this.unmount = (0, i.pipe)(
                                                    (0, o.addDomEvent)(this.node.current, "focus", () => this.onFocus()),
                                                    (0, o.addDomEvent)(this.node.current, "blur", () => this.onBlur())
                                                );
                                        }
                                        unmount() {}
                                }
                        },
                        {
                                "../events/add-dom-event.mjs": "7Ok8R",
                                "../motion/features/Feature.mjs": "gTgdN",
                                "../utils/pipe.mjs": "f51nb",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                aBIXX: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "PressGesture", () => h);
                                var o = e("../events/event-info.mjs"),
                                    n = e("../events/add-dom-event.mjs"),
                                    i = e("../events/add-pointer-event.mjs"),
                                    a = e("../motion/features/Feature.mjs"),
                                    l = e("../utils/pipe.mjs"),
                                    m = e("./drag/utils/lock.mjs"),
                                    u = e("./utils/is-node-or-child.mjs"),
                                    c = e("../utils/noop.mjs"),
                                    p = e("../frameloop/frame.mjs");
                                function d(e, t) {
                                        if (!t) return;
                                        let s = new PointerEvent("pointer" + e);
                                        t(s, (0, o.extractEventInfo)(s));
                                }
                                class h extends a.Feature {
                                        constructor() {
                                                super(...arguments),
                                                    (this.removeStartListeners = c.noop),
                                                    (this.removeEndListeners = c.noop),
                                                    (this.removeAccessibleListeners = c.noop),
                                                    (this.startPointerPress = (e, t) => {
                                                            if (this.isPressing) return;
                                                            this.removeEndListeners();
                                                            let s = this.node.getProps(),
                                                                r = (0, i.addPointerEvent)(
                                                                    window,
                                                                    "pointerup",
                                                                    (e, t) => {
                                                                            if (!this.checkPressEnd()) return;
                                                                            let {
                                                                                        onTap: s,
                                                                                        onTapCancel: r,
                                                                                        globalTapTarget: o,
                                                                                } = this.node.getProps(),
                                                                                n = o || (0, u.isNodeOrChild)(this.node.current, e.target) ? s : r;
                                                                            n && (0, p.frame).update(() => n(e, t));
                                                                    },
                                                                    { passive: !(s.onTap || s.onPointerUp) }
                                                                ),
                                                                o = (0, i.addPointerEvent)(
                                                                    window,
                                                                    "pointercancel",
                                                                    (e, t) => this.cancelPress(e, t),
                                                                    { passive: !(s.onTapCancel || s.onPointerCancel) }
                                                                );
                                                            (this.removeEndListeners = (0, l.pipe)(r, o)), this.startPress(e, t);
                                                    }),
                                                    (this.startAccessiblePress = () => {
                                                            let e = (0, n.addDomEvent)(this.node.current, "keydown", (e) => {
                                                                        "Enter" !== e.key ||
                                                                        this.isPressing ||
                                                                        (this.removeEndListeners(),
                                                                            (this.removeEndListeners = (0, n.addDomEvent)(
                                                                                this.node.current,
                                                                                "keyup",
                                                                                (e) => {
                                                                                        "Enter" === e.key &&
                                                                                        this.checkPressEnd() &&
                                                                                        d("up", (e, t) => {
                                                                                                let { onTap: s } = this.node.getProps();
                                                                                                s && (0, p.frame).postRender(() => s(e, t));
                                                                                        });
                                                                                }
                                                                            )),
                                                                            d("down", (e, t) => {
                                                                                    this.startPress(e, t);
                                                                            }));
                                                                }),
                                                                t = (0, n.addDomEvent)(this.node.current, "blur", () => {
                                                                        this.isPressing && d("cancel", (e, t) => this.cancelPress(e, t));
                                                                });
                                                            this.removeAccessibleListeners = (0, l.pipe)(e, t);
                                                    });
                                        }
                                        startPress(e, t) {
                                                this.isPressing = !0;
                                                let { onTapStart: s, whileTap: r } = this.node.getProps();
                                                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                                                s && (0, p.frame).postRender(() => s(e, t));
                                        }
                                        checkPressEnd() {
                                                this.removeEndListeners(), (this.isPressing = !1);
                                                let e = this.node.getProps();
                                                return (
                                                    e.whileTap &&
                                                    this.node.animationState &&
                                                    this.node.animationState.setActive("whileTap", !1),
                                                        !(0, m.isDragActive)()
                                                );
                                        }
                                        cancelPress(e, t) {
                                                if (!this.checkPressEnd()) return;
                                                let { onTapCancel: s } = this.node.getProps();
                                                s && (0, p.frame).postRender(() => s(e, t));
                                        }
                                        mount() {
                                                let e = this.node.getProps(),
                                                    t = (0, i.addPointerEvent)(
                                                        e.globalTapTarget ? window : this.node.current,
                                                        "pointerdown",
                                                        this.startPointerPress,
                                                        { passive: !(e.onTapStart || e.onPointerStart) }
                                                    ),
                                                    s = (0, n.addDomEvent)(this.node.current, "focus", this.startAccessiblePress);
                                                this.removeStartListeners = (0, l.pipe)(t, s);
                                        }
                                        unmount() {
                                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
                                        }
                                }
                        },
                        {
                                "../events/event-info.mjs": "928Kp",
                                "../events/add-dom-event.mjs": "7Ok8R",
                                "../events/add-pointer-event.mjs": "75bHa",
                                "../motion/features/Feature.mjs": "gTgdN",
                                "../utils/pipe.mjs": "f51nb",
                                "./drag/utils/lock.mjs": "42KHb",
                                "./utils/is-node-or-child.mjs": "2Nyan",
                                "../utils/noop.mjs": "atNA1",
                                "../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "2Nyan": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "isNodeOrChild", () => o);
                                let o = (e, t) => !!t && (e === t || o(e, t.parentElement));
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                fu0yc: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "InViewFeature", () => a);
                                var o = e("../Feature.mjs"),
                                    n = e("./observers.mjs");
                                let i = { some: 0, all: 1 };
                                class a extends o.Feature {
                                        constructor() {
                                                super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
                                        }
                                        startObserver() {
                                                this.unmount();
                                                let { viewport: e = {} } = this.node.getProps(),
                                                    { root: t, margin: s, amount: r = "some", once: o } = e,
                                                    a = {
                                                            root: t ? t.current : void 0,
                                                            rootMargin: s,
                                                            threshold: "number" == typeof r ? r : i[r],
                                                    };
                                                return (0, n.observeIntersection)(this.node.current, a, (e) => {
                                                        let { isIntersecting: t } = e;
                                                        if (this.isInView === t || ((this.isInView = t), o && !t && this.hasEnteredView))
                                                                return;
                                                        t && (this.hasEnteredView = !0),
                                                        this.node.animationState && this.node.animationState.setActive("whileInView", t);
                                                        let { onViewportEnter: s, onViewportLeave: r } = this.node.getProps(),
                                                            n = t ? s : r;
                                                        n && n(e);
                                                });
                                        }
                                        mount() {
                                                this.startObserver();
                                        }
                                        update() {
                                                if ("undefined" == typeof IntersectionObserver) return;
                                                let { props: e, prevProps: t } = this.node,
                                                    s = ["amount", "margin", "root"].some(
                                                        (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                                                                return (s) => e[s] !== t[s];
                                                        })(e, t)
                                                    );
                                                s && this.startObserver();
                                        }
                                        unmount() {}
                                }
                        },
                        {
                                "../Feature.mjs": "gTgdN",
                                "./observers.mjs": "5s1Iz",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "5s1Iz": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "observeIntersection", () => l);
                                let o = new WeakMap(),
                                    n = new WeakMap(),
                                    i = (e) => {
                                            let t = o.get(e.target);
                                            t && t(e);
                                    },
                                    a = (e) => {
                                            e.forEach(i);
                                    };
                                function l(e, t, s) {
                                        let r = (function ({ root: e, ...t }) {
                                                let s = e || document;
                                                n.has(s) || n.set(s, {});
                                                let r = n.get(s),
                                                    o = JSON.stringify(t);
                                                return r[o] || (r[o] = new IntersectionObserver(a, { root: e, ...t })), r[o];
                                        })(t);
                                        return (
                                            o.set(e, s),
                                                r.observe(e),
                                                () => {
                                                        o.delete(e), r.unobserve(e);
                                                }
                                        );
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                iEoKd: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "createDomVisualElement", () => l);
                                var o = e("react"),
                                    n = e("../html/HTMLVisualElement.mjs"),
                                    i = e("../svg/SVGVisualElement.mjs"),
                                    a = e("./utils/is-svg-component.mjs");
                                let l = (e, t) =>
                                    (0, a.isSVGComponent)(e)
                                        ? new i.SVGVisualElement(t)
                                        : new n.HTMLVisualElement(t, { allowProjection: e !== o.Fragment });
                        },
                        {
                                react: "329PG",
                                "../html/HTMLVisualElement.mjs": "4z2oQ",
                                "../svg/SVGVisualElement.mjs": "5vtsu",
                                "./utils/is-svg-component.mjs": "hmcdr",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "4z2oQ": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "HTMLVisualElement", () => h),
                                    r.export(s, "getComputedStyle", () => d);
                                var o = e("./utils/build-styles.mjs"),
                                    n = e("../dom/utils/is-css-variable.mjs"),
                                    i = e("./utils/transform.mjs"),
                                    a = e("./utils/scrape-motion-values.mjs"),
                                    l = e("./utils/render.mjs"),
                                    m = e("../dom/value-types/defaults.mjs"),
                                    u = e("../../projection/utils/measure.mjs"),
                                    c = e("../dom/DOMVisualElement.mjs"),
                                    p = e("../../value/utils/is-motion-value.mjs");
                                function d(e) {
                                        return window.getComputedStyle(e);
                                }
                                class h extends c.DOMVisualElement {
                                        constructor() {
                                                super(...arguments),
                                                    (this.type = "html"),
                                                    (this.applyWillChange = !0),
                                                    (this.renderInstance = l.renderHTML);
                                        }
                                        readValueFromInstance(e, t) {
                                                if ((0, i.transformProps).has(t)) {
                                                        let e = (0, m.getDefaultValueType)(t);
                                                        return (e && e.default) || 0;
                                                }
                                                {
                                                        let s = d(e),
                                                            r = ((0, n.isCSSVariableName)(t) ? s.getPropertyValue(t) : s[t]) || 0;
                                                        return "string" == typeof r ? r.trim() : r;
                                                }
                                        }
                                        measureInstanceViewportBox(e, { transformPagePoint: t }) {
                                                return (0, u.measureViewportBox)(e, t);
                                        }
                                        build(e, t, s) {
                                                (0, o.buildHTMLStyles)(e, t, s.transformTemplate);
                                        }
                                        scrapeMotionValuesFromProps(e, t, s) {
                                                return (0, a.scrapeMotionValuesFromProps)(e, t, s);
                                        }
                                        handleChildMotionValue() {
                                                this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                                                let { children: e } = this.props;
                                                (0, p.isMotionValue)(e) &&
                                                (this.childSubscription = e.on("change", (e) => {
                                                        this.current && (this.current.textContent = `${e}`);
                                                }));
                                        }
                                }
                        },
                        {
                                "./utils/build-styles.mjs": "bNCEv",
                                "../dom/utils/is-css-variable.mjs": "5GTp9",
                                "./utils/transform.mjs": "bEiM4",
                                "./utils/scrape-motion-values.mjs": "fAw3G",
                                "./utils/render.mjs": "3vH7P",
                                "../dom/value-types/defaults.mjs": "2RSuH",
                                "../../projection/utils/measure.mjs": "cy3cT",
                                "../dom/DOMVisualElement.mjs": "5WdKY",
                                "../../value/utils/is-motion-value.mjs": "6Wljo",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                cy3cT: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "measurePageBox", () => a),
                                    r.export(s, "measureViewportBox", () => i);
                                var o = e("../geometry/conversion.mjs"),
                                    n = e("../geometry/delta-apply.mjs");
                                function i(e, t) {
                                        return (0, o.convertBoundingBoxToBox)((0, o.transformBoxPoints)(e.getBoundingClientRect(), t));
                                }
                                function a(e, t, s) {
                                        let r = i(e, s),
                                            { scroll: o } = t;
                                        return o && ((0, n.translateAxis)(r.x, o.offset.x), (0, n.translateAxis)(r.y, o.offset.y)), r;
                                }
                        },
                        {
                                "../geometry/conversion.mjs": "lme8h",
                                "../geometry/delta-apply.mjs": "ltgsJ",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                lme8h: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o({ top: e, left: t, right: s, bottom: r }) {
                                        return { x: { min: t, max: s }, y: { min: e, max: r } };
                                }
                                function n({ x: e, y: t }) {
                                        return { top: t.min, right: e.max, bottom: t.max, left: e.min };
                                }
                                function i(e, t) {
                                        if (!t) return e;
                                        let s = t({ x: e.left, y: e.top }),
                                            r = t({ x: e.right, y: e.bottom });
                                        return { top: s.y, left: s.x, bottom: r.y, right: r.x };
                                }
                                r.defineInteropFlag(s),
                                    r.export(s, "convertBoundingBoxToBox", () => o),
                                    r.export(s, "convertBoxToBoundingBox", () => n),
                                    r.export(s, "transformBoxPoints", () => i);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                ltgsJ: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "applyAxisDelta", () => l),
                                    r.export(s, "applyBoxDelta", () => m),
                                    r.export(s, "applyPointDelta", () => a),
                                    r.export(s, "applyTreeDeltas", () => u),
                                    r.export(s, "scalePoint", () => i),
                                    r.export(s, "transformAxis", () => p),
                                    r.export(s, "transformBox", () => d),
                                    r.export(s, "translateAxis", () => c);
                                var o = e("../../utils/mix/number.mjs"),
                                    n = e("../utils/has-transform.mjs");
                                function i(e, t, s) {
                                        return s + t * (e - s);
                                }
                                function a(e, t, s, r, o) {
                                        return void 0 !== o && (e = r + o * (e - r)), r + s * (e - r) + t;
                                }
                                function l(e, t = 0, s = 1, r, o) {
                                        (e.min = a(e.min, t, s, r, o)), (e.max = a(e.max, t, s, r, o));
                                }
                                function m(e, { x: t, y: s }) {
                                        l(e.x, t.translate, t.scale, t.originPoint), l(e.y, s.translate, s.scale, s.originPoint);
                                }
                                function u(e, t, s, r = !1) {
                                        let o, i;
                                        let a = s.length;
                                        if (a) {
                                                t.x = t.y = 1;
                                                for (let l = 0; l < a; l++) {
                                                        i = (o = s[l]).projectionDelta;
                                                        let { visualElement: a } = o.options;
                                                        (!a || !a.props.style || "contents" !== a.props.style.display) &&
                                                        (r &&
                                                        o.options.layoutScroll &&
                                                        o.scroll &&
                                                        o !== o.root &&
                                                        d(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                                                        i && ((t.x *= i.x.scale), (t.y *= i.y.scale), m(e, i)),
                                                        r && (0, n.hasTransform)(o.latestValues) && d(e, o.latestValues));
                                                }
                                                t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                                                t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
                                        }
                                }
                                function c(e, t) {
                                        (e.min = e.min + t), (e.max = e.max + t);
                                }
                                function p(e, t, s, r, n = 0.5) {
                                        let i = (0, o.mixNumber)(e.min, e.max, n);
                                        l(e, t, s, i, r);
                                }
                                function d(e, t) {
                                        p(e.x, t.x, t.scaleX, t.scale, t.originX), p(e.y, t.y, t.scaleY, t.scale, t.originY);
                                }
                        },
                        {
                                "../../utils/mix/number.mjs": "9zo4o",
                                "../utils/has-transform.mjs": "86mKr",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "86mKr": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        return void 0 === e || 1 === e;
                                }
                                function n({ scale: e, scaleX: t, scaleY: s }) {
                                        return !o(e) || !o(t) || !o(s);
                                }
                                function i(e) {
                                        return n(e) || a(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
                                }
                                function a(e) {
                                        var t, s;
                                        return ((t = e.x) && "0%" !== t) || ((s = e.y) && "0%" !== s);
                                }
                                r.defineInteropFlag(s),
                                    r.export(s, "has2DTranslate", () => a),
                                    r.export(s, "hasScale", () => n),
                                    r.export(s, "hasTransform", () => i);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5WdKY": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "DOMVisualElement", () => i);
                                var o = e("../VisualElement.mjs"),
                                    n = e("./DOMKeyframesResolver.mjs");
                                class i extends o.VisualElement {
                                        constructor() {
                                                super(...arguments), (this.KeyframeResolver = n.DOMKeyframesResolver);
                                        }
                                        sortInstanceNodePosition(e, t) {
                                                return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                                        }
                                        getBaseTargetFromProps(e, t) {
                                                return e.style ? e.style[t] : void 0;
                                        }
                                        removeValueFromRenderState(e, { vars: t, style: s }) {
                                                delete t[e], delete s[e];
                                        }
                                }
                        },
                        {
                                "../VisualElement.mjs": "6aeqU",
                                "./DOMKeyframesResolver.mjs": "2p5EC",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "6aeqU": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "VisualElement", () => F);
                                var o = e("../utils/reduced-motion/index.mjs"),
                                    n = e("../utils/reduced-motion/state.mjs"),
                                    i = e("../utils/subscription-manager.mjs"),
                                    a = e("../value/index.mjs"),
                                    l = e("../value/utils/is-motion-value.mjs"),
                                    m = e("./html/utils/transform.mjs"),
                                    u = e("./utils/is-controlling-variants.mjs"),
                                    c = e("./utils/is-variant-label.mjs"),
                                    p = e("./utils/motion-values.mjs"),
                                    d = e("./utils/resolve-variants.mjs");
                                e("../utils/warn-once.mjs");
                                var h = e("../motion/features/definitions.mjs"),
                                    f = e("./utils/variant-props.mjs"),
                                    j = e("./store.mjs"),
                                    v = e("./utils/KeyframesResolver.mjs"),
                                    g = e("../utils/is-numerical-string.mjs"),
                                    x = e("../utils/is-zero-value-string.mjs"),
                                    y = e("./dom/value-types/find.mjs"),
                                    b = e("../value/types/complex/index.mjs"),
                                    P = e("./dom/value-types/animatable-none.mjs"),
                                    C = e("../projection/geometry/models.mjs"),
                                    S = e("../frameloop/frame.mjs");
                                let T = [
                                            "AnimationStart",
                                            "AnimationComplete",
                                            "Update",
                                            "BeforeLayoutMeasure",
                                            "LayoutMeasure",
                                            "LayoutAnimationStart",
                                            "LayoutAnimationComplete",
                                    ],
                                    V = f.variantProps.length;
                                class F {
                                        scrapeMotionValuesFromProps(e, t, s) {
                                                return {};
                                        }
                                        constructor(
                                            {
                                                    parent: e,
                                                    props: t,
                                                    presenceContext: s,
                                                    reducedMotionConfig: r,
                                                    blockInitialAnimation: o,
                                                    visualState: n,
                                            },
                                            i = {}
                                        ) {
                                                (this.applyWillChange = !1),
                                                    (this.current = null),
                                                    (this.children = new Set()),
                                                    (this.isVariantNode = !1),
                                                    (this.isControllingVariants = !1),
                                                    (this.shouldReduceMotion = null),
                                                    (this.values = new Map()),
                                                    (this.KeyframeResolver = v.KeyframeResolver),
                                                    (this.features = {}),
                                                    (this.valueSubscriptions = new Map()),
                                                    (this.prevMotionValues = {}),
                                                    (this.events = {}),
                                                    (this.propEventSubscriptions = {}),
                                                    (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
                                                    (this.render = () => {
                                                            (this.isRenderScheduled = !1),
                                                            this.current &&
                                                            (this.triggerBuild(),
                                                                this.renderInstance(
                                                                    this.current,
                                                                    this.renderState,
                                                                    this.props.style,
                                                                    this.projection
                                                                ));
                                                    }),
                                                    (this.isRenderScheduled = !1),
                                                    (this.scheduleRender = () => {
                                                            this.isRenderScheduled ||
                                                            ((this.isRenderScheduled = !0), (0, S.frame).render(this.render, !1, !0));
                                                    });
                                                let { latestValues: a, renderState: m } = n;
                                                (this.latestValues = a),
                                                    (this.baseTarget = { ...a }),
                                                    (this.initialValues = t.initial ? { ...a } : {}),
                                                    (this.renderState = m),
                                                    (this.parent = e),
                                                    (this.props = t),
                                                    (this.presenceContext = s),
                                                    (this.depth = e ? e.depth + 1 : 0),
                                                    (this.reducedMotionConfig = r),
                                                    (this.options = i),
                                                    (this.blockInitialAnimation = !!o),
                                                    (this.isControllingVariants = (0, u.isControllingVariants)(t)),
                                                    (this.isVariantNode = (0, u.isVariantNode)(t)),
                                                this.isVariantNode && (this.variantChildren = new Set()),
                                                    (this.manuallyAnimateOnMount = !!(e && e.current));
                                                let { willChange: c, ...p } = this.scrapeMotionValuesFromProps(t, {}, this);
                                                for (let e in p) {
                                                        let t = p[e];
                                                        void 0 !== a[e] && (0, l.isMotionValue)(t) && t.set(a[e], !1);
                                                }
                                        }
                                        mount(e) {
                                                (this.current = e),
                                                    (0, j.visualElementStore).set(e, this),
                                                this.projection && !this.projection.instance && this.projection.mount(e),
                                                this.parent &&
                                                this.isVariantNode &&
                                                !this.isControllingVariants &&
                                                (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                                                    this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
                                                n.hasReducedMotionListener.current || (0, o.initPrefersReducedMotion)(),
                                                    (this.shouldReduceMotion =
                                                        "never" !== this.reducedMotionConfig &&
                                                        ("always" === this.reducedMotionConfig || n.prefersReducedMotion.current)),
                                                this.parent && this.parent.children.add(this),
                                                    this.update(this.props, this.presenceContext);
                                        }
                                        unmount() {
                                                for (let e in ((0, j.visualElementStore).delete(this.current),
                                                this.projection && this.projection.unmount(),
                                                    (0, S.cancelFrame)(this.notifyUpdate),
                                                    (0, S.cancelFrame)(this.render),
                                                    this.valueSubscriptions.forEach((e) => e()),
                                                this.removeFromVariantTree && this.removeFromVariantTree(),
                                                this.parent && this.parent.children.delete(this),
                                                    this.events))
                                                        this.events[e].clear();
                                                for (let e in this.features) {
                                                        let t = this.features[e];
                                                        t && (t.unmount(), (t.isMounted = !1));
                                                }
                                                this.current = null;
                                        }
                                        bindToMotionValue(e, t) {
                                                let s = (0, m.transformProps).has(e),
                                                    r = t.on("change", (t) => {
                                                            (this.latestValues[e] = t),
                                                            this.props.onUpdate && (0, S.frame).preRender(this.notifyUpdate),
                                                            s && this.projection && (this.projection.isTransformDirty = !0);
                                                    }),
                                                    o = t.on("renderRequest", this.scheduleRender);
                                                this.valueSubscriptions.set(e, () => {
                                                        r(), o(), t.owner && t.stop();
                                                });
                                        }
                                        sortNodePosition(e) {
                                                return this.current && this.sortInstanceNodePosition && this.type === e.type
                                                    ? this.sortInstanceNodePosition(this.current, e.current)
                                                    : 0;
                                        }
                                        updateFeatures() {
                                                let e = "animation";
                                                for (e in h.featureDefinitions) {
                                                        let t = h.featureDefinitions[e];
                                                        if (!t) continue;
                                                        let { isEnabled: s, Feature: r } = t;
                                                        if (
                                                            (!this.features[e] && r && s(this.props) && (this.features[e] = new r(this)),
                                                                this.features[e])
                                                        ) {
                                                                let t = this.features[e];
                                                                t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
                                                        }
                                                }
                                        }
                                        triggerBuild() {
                                                this.build(this.renderState, this.latestValues, this.props);
                                        }
                                        measureViewportBox() {
                                                return this.current
                                                    ? this.measureInstanceViewportBox(this.current, this.props)
                                                    : (0, C.createBox)();
                                        }
                                        getStaticValue(e) {
                                                return this.latestValues[e];
                                        }
                                        setStaticValue(e, t) {
                                                this.latestValues[e] = t;
                                        }
                                        update(e, t) {
                                                (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                                                    (this.prevProps = this.props),
                                                    (this.props = e),
                                                    (this.prevPresenceContext = this.presenceContext),
                                                    (this.presenceContext = t);
                                                for (let t = 0; t < T.length; t++) {
                                                        let s = T[t];
                                                        this.propEventSubscriptions[s] &&
                                                        (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
                                                        let r = "on" + s,
                                                            o = e[r];
                                                        o && (this.propEventSubscriptions[s] = this.on(s, o));
                                                }
                                                (this.prevMotionValues = (0, p.updateMotionValuesFromProps)(
                                                    this,
                                                    this.scrapeMotionValuesFromProps(e, this.prevProps, this),
                                                    this.prevMotionValues
                                                )),
                                                this.handleChildMotionValue && this.handleChildMotionValue();
                                        }
                                        getProps() {
                                                return this.props;
                                        }
                                        getVariant(e) {
                                                return this.props.variants ? this.props.variants[e] : void 0;
                                        }
                                        getDefaultTransition() {
                                                return this.props.transition;
                                        }
                                        getTransformPagePoint() {
                                                return this.props.transformPagePoint;
                                        }
                                        getClosestVariantNode() {
                                                return this.isVariantNode
                                                    ? this
                                                    : this.parent
                                                        ? this.parent.getClosestVariantNode()
                                                        : void 0;
                                        }
                                        getVariantContext(e = !1) {
                                                if (e) return this.parent ? this.parent.getVariantContext() : void 0;
                                                if (!this.isControllingVariants) {
                                                        let e = (this.parent && this.parent.getVariantContext()) || {};
                                                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e;
                                                }
                                                let t = {};
                                                for (let e = 0; e < V; e++) {
                                                        let s = f.variantProps[e],
                                                            r = this.props[s];
                                                        ((0, c.isVariantLabel)(r) || !1 === r) && (t[s] = r);
                                                }
                                                return t;
                                        }
                                        addVariantChild(e) {
                                                let t = this.getClosestVariantNode();
                                                if (t)
                                                        return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
                                        }
                                        addValue(e, t) {
                                                let s = this.values.get(e);
                                                t !== s &&
                                                (s && this.removeValue(e),
                                                    this.bindToMotionValue(e, t),
                                                    this.values.set(e, t),
                                                    (this.latestValues[e] = t.get()));
                                        }
                                        removeValue(e) {
                                                this.values.delete(e);
                                                let t = this.valueSubscriptions.get(e);
                                                t && (t(), this.valueSubscriptions.delete(e)),
                                                    delete this.latestValues[e],
                                                    this.removeValueFromRenderState(e, this.renderState);
                                        }
                                        hasValue(e) {
                                                return this.values.has(e);
                                        }
                                        getValue(e, t) {
                                                if (this.props.values && this.props.values[e]) return this.props.values[e];
                                                let s = this.values.get(e);
                                                return (
                                                    void 0 === s &&
                                                    void 0 !== t &&
                                                    ((s = (0, a.motionValue)(null === t ? void 0 : t, { owner: this })),
                                                        this.addValue(e, s)),
                                                        s
                                                );
                                        }
                                        readValue(e, t) {
                                                var s;
                                                let r =
                                                    void 0 === this.latestValues[e] && this.current
                                                        ? null !== (s = this.getBaseTargetFromProps(this.props, e)) && void 0 !== s
                                                            ? s
                                                            : this.readValueFromInstance(this.current, e, this.options)
                                                        : this.latestValues[e];
                                                return (
                                                    null != r &&
                                                    ("string" == typeof r &&
                                                    ((0, g.isNumericalString)(r) || (0, x.isZeroValueString)(r))
                                                        ? (r = parseFloat(r))
                                                        : !(0, y.findValueType)(r) &&
                                                        (0, b.complex).test(t) &&
                                                        (r = (0, P.getAnimatableNone)(e, t)),
                                                        this.setBaseTarget(e, (0, l.isMotionValue)(r) ? r.get() : r)),
                                                        (0, l.isMotionValue)(r) ? r.get() : r
                                                );
                                        }
                                        setBaseTarget(e, t) {
                                                this.baseTarget[e] = t;
                                        }
                                        getBaseTarget(e) {
                                                var t;
                                                let s;
                                                let { initial: r } = this.props;
                                                if ("string" == typeof r || "object" == typeof r) {
                                                        let o = (0, d.resolveVariantFromProps)(
                                                            this.props,
                                                            r,
                                                            null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom
                                                        );
                                                        o && (s = o[e]);
                                                }
                                                if (r && void 0 !== s) return s;
                                                let o = this.getBaseTargetFromProps(this.props, e);
                                                return void 0 === o || (0, l.isMotionValue)(o)
                                                    ? void 0 !== this.initialValues[e] && void 0 === s
                                                        ? void 0
                                                        : this.baseTarget[e]
                                                    : o;
                                        }
                                        on(e, t) {
                                                return (
                                                    this.events[e] || (this.events[e] = new i.SubscriptionManager()), this.events[e].add(t)
                                                );
                                        }
                                        notify(e, ...t) {
                                                this.events[e] && this.events[e].notify(...t);
                                        }
                                }
                        },
                        {
                                "../utils/reduced-motion/index.mjs": "ih4sU",
                                "../utils/reduced-motion/state.mjs": "fxHPE",
                                "../utils/subscription-manager.mjs": "axhZT",
                                "../value/index.mjs": "5VFp2",
                                "../value/utils/is-motion-value.mjs": "6Wljo",
                                "./html/utils/transform.mjs": "bEiM4",
                                "./utils/is-controlling-variants.mjs": "4EN6W",
                                "./utils/is-variant-label.mjs": "luJLU",
                                "./utils/motion-values.mjs": "d3KM1",
                                "./utils/resolve-variants.mjs": "839cw",
                                "../utils/warn-once.mjs": "hmXbm",
                                "../motion/features/definitions.mjs": "hxOgD",
                                "./utils/variant-props.mjs": "YJ7Iq",
                                "./store.mjs": "dXEQj",
                                "./utils/KeyframesResolver.mjs": "6YlUq",
                                "../utils/is-numerical-string.mjs": "7MbhG",
                                "../utils/is-zero-value-string.mjs": "j6K3G",
                                "./dom/value-types/find.mjs": "hA5sF",
                                "../value/types/complex/index.mjs": "h5yJ0",
                                "./dom/value-types/animatable-none.mjs": "c4FXx",
                                "../projection/geometry/models.mjs": "9qUQK",
                                "../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                ih4sU: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "initPrefersReducedMotion", () => i);
                                var o = e("../is-browser.mjs"),
                                    n = e("./state.mjs");
                                function i() {
                                        if (((n.hasReducedMotionListener.current = !0), o.isBrowser)) {
                                                if (window.matchMedia) {
                                                        let e = window.matchMedia("(prefers-reduced-motion)"),
                                                            t = () => (n.prefersReducedMotion.current = e.matches);
                                                        e.addListener(t), t();
                                                } else n.prefersReducedMotion.current = !1;
                                        }
                                }
                        },
                        {
                                "../is-browser.mjs": "03Aen",
                                "./state.mjs": "fxHPE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                fxHPE: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "hasReducedMotionListener", () => n),
                                    r.export(s, "prefersReducedMotion", () => o);
                                let o = { current: null },
                                    n = { current: !1 };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                d3KM1: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "updateMotionValuesFromProps", () => i),
                                    e("../../utils/warn-once.mjs");
                                var o = e("../../value/index.mjs"),
                                    n = e("../../value/utils/is-motion-value.mjs");
                                function i(e, t, s) {
                                        for (let r in t) {
                                                let i = t[r],
                                                    a = s[r];
                                                if ((0, n.isMotionValue)(i)) e.addValue(r, i);
                                                else if ((0, n.isMotionValue)(a)) e.addValue(r, (0, o.motionValue)(i, { owner: e }));
                                                else if (a !== i) {
                                                        if (e.hasValue(r)) {
                                                                let t = e.getValue(r);
                                                                !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
                                                        } else {
                                                                let t = e.getStaticValue(r);
                                                                e.addValue(r, (0, o.motionValue)(void 0 !== t ? t : i, { owner: e }));
                                                        }
                                                }
                                        }
                                        for (let r in s) void 0 === t[r] && e.removeValue(r);
                                        return t;
                                }
                        },
                        {
                                "../../utils/warn-once.mjs": "hmXbm",
                                "../../value/index.mjs": "5VFp2",
                                "../../value/utils/is-motion-value.mjs": "6Wljo",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                dXEQj: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "visualElementStore", () => o);
                                let o = new WeakMap();
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                hA5sF: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "findValueType", () => m);
                                var o = e("../../../value/types/color/index.mjs"),
                                    n = e("../../../value/types/complex/index.mjs"),
                                    i = e("./dimensions.mjs"),
                                    a = e("./test.mjs");
                                let l = [...i.dimensionValueTypes, o.color, n.complex],
                                    m = (e) => l.find((0, a.testValueType)(e));
                        },
                        {
                                "../../../value/types/color/index.mjs": "d4S9P",
                                "../../../value/types/complex/index.mjs": "h5yJ0",
                                "./dimensions.mjs": "29B6F",
                                "./test.mjs": "aM7YU",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9qUQK": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "createAxis", () => i),
                                    r.export(s, "createAxisDelta", () => o),
                                    r.export(s, "createBox", () => a),
                                    r.export(s, "createDelta", () => n);
                                let o = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
                                    n = () => ({ x: o(), y: o() }),
                                    i = () => ({ min: 0, max: 0 }),
                                    a = () => ({ x: i(), y: i() });
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5vtsu": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "SVGVisualElement", () => h);
                                var o = e("./utils/scrape-motion-values.mjs"),
                                    n = e("../dom/DOMVisualElement.mjs"),
                                    i = e("./utils/build-attrs.mjs"),
                                    a = e("../dom/utils/camel-to-dash.mjs"),
                                    l = e("./utils/camel-case-attrs.mjs"),
                                    m = e("../html/utils/transform.mjs"),
                                    u = e("./utils/render.mjs"),
                                    c = e("../dom/value-types/defaults.mjs"),
                                    p = e("../../projection/geometry/models.mjs"),
                                    d = e("./utils/is-svg-tag.mjs");
                                class h extends n.DOMVisualElement {
                                        constructor() {
                                                super(...arguments),
                                                    (this.type = "svg"),
                                                    (this.isSVGTag = !1),
                                                    (this.measureInstanceViewportBox = p.createBox);
                                        }
                                        getBaseTargetFromProps(e, t) {
                                                return e[t];
                                        }
                                        readValueFromInstance(e, t) {
                                                if ((0, m.transformProps).has(t)) {
                                                        let e = (0, c.getDefaultValueType)(t);
                                                        return (e && e.default) || 0;
                                                }
                                                return (
                                                    (t = (0, l.camelCaseAttributes).has(t) ? t : (0, a.camelToDash)(t)), e.getAttribute(t)
                                                );
                                        }
                                        scrapeMotionValuesFromProps(e, t, s) {
                                                return (0, o.scrapeMotionValuesFromProps)(e, t, s);
                                        }
                                        build(e, t, s) {
                                                (0, i.buildSVGAttrs)(e, t, this.isSVGTag, s.transformTemplate);
                                        }
                                        renderInstance(e, t, s, r) {
                                                (0, u.renderSVG)(e, t, s, r);
                                        }
                                        mount(e) {
                                                (this.isSVGTag = (0, d.isSVGTag)(e.tagName)), super.mount(e);
                                        }
                                }
                        },
                        {
                                "./utils/scrape-motion-values.mjs": "3i3X7",
                                "../dom/DOMVisualElement.mjs": "5WdKY",
                                "./utils/build-attrs.mjs": "eZhlU",
                                "../dom/utils/camel-to-dash.mjs": "8t9U3",
                                "./utils/camel-case-attrs.mjs": "aGfRG",
                                "../html/utils/transform.mjs": "bEiM4",
                                "./utils/render.mjs": "b5XTz",
                                "../dom/value-types/defaults.mjs": "2RSuH",
                                "../../projection/geometry/models.mjs": "9qUQK",
                                "./utils/is-svg-tag.mjs": "gxNOK",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7DGqz": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "domMax", () => a);
                                var o = e("../../motion/features/drag.mjs"),
                                    n = e("../../motion/features/layout.mjs"),
                                    i = e("./features-animation.mjs");
                                let a = { ...i.domAnimation, ...o.drag, ...n.layout };
                        },
                        {
                                "../../motion/features/drag.mjs": "7hhLk",
                                "../../motion/features/layout.mjs": "5cfhL",
                                "./features-animation.mjs": "fhRRO",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7hhLk": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "drag", () => l);
                                var o = e("../../gestures/drag/index.mjs"),
                                    n = e("../../gestures/pan/index.mjs"),
                                    i = e("./layout/MeasureLayout.mjs"),
                                    a = e("../../projection/node/HTMLProjectionNode.mjs");
                                let l = {
                                        pan: { Feature: n.PanGesture },
                                        drag: {
                                                Feature: o.DragGesture,
                                                ProjectionNode: a.HTMLProjectionNode,
                                                MeasureLayout: i.MeasureLayout,
                                        },
                                };
                        },
                        {
                                "../../gestures/drag/index.mjs": "6qOx4",
                                "../../gestures/pan/index.mjs": "1JLLd",
                                "./layout/MeasureLayout.mjs": "jkiV5",
                                "../../projection/node/HTMLProjectionNode.mjs": "kdNBA",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "6qOx4": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "DragGesture", () => a);
                                var o = e("../../motion/features/Feature.mjs"),
                                    n = e("../../utils/noop.mjs"),
                                    i = e("./VisualElementDragControls.mjs");
                                class a extends o.Feature {
                                        constructor(e) {
                                                super(e),
                                                    (this.removeGroupControls = n.noop),
                                                    (this.removeListeners = n.noop),
                                                    (this.controls = new i.VisualElementDragControls(e));
                                        }
                                        mount() {
                                                let { dragControls: e } = this.node.getProps();
                                                e && (this.removeGroupControls = e.subscribe(this.controls)),
                                                    (this.removeListeners = this.controls.addListeners() || n.noop);
                                        }
                                        unmount() {
                                                this.removeGroupControls(), this.removeListeners();
                                        }
                                }
                        },
                        {
                                "../../motion/features/Feature.mjs": "gTgdN",
                                "../../utils/noop.mjs": "atNA1",
                                "./VisualElementDragControls.mjs": "d8iwL",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                d8iwL: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "VisualElementDragControls", () => S),
                                    r.export(s, "elementDragControls", () => C);
                                var o = e("../../utils/errors.mjs"),
                                    n = e("../pan/PanSession.mjs"),
                                    i = e("./utils/lock.mjs"),
                                    a = e("../../utils/is-ref-object.mjs"),
                                    l = e("../../events/add-pointer-event.mjs"),
                                    m = e("./utils/constraints.mjs"),
                                    u = e("../../projection/geometry/models.mjs"),
                                    c = e("../../projection/utils/each-axis.mjs"),
                                    p = e("../../projection/utils/measure.mjs"),
                                    d = e("../../events/event-info.mjs"),
                                    h = e("../../projection/geometry/conversion.mjs"),
                                    f = e("../../events/add-dom-event.mjs"),
                                    j = e("../../projection/geometry/delta-calc.mjs"),
                                    v = e("../../utils/mix/number.mjs"),
                                    g = e("../../value/types/numbers/units.mjs"),
                                    x = e("../../animation/interfaces/motion-value.mjs"),
                                    y = e("../../utils/get-context-window.mjs"),
                                    b = e("../../value/use-will-change/add-will-change.mjs"),
                                    P = e("../../frameloop/frame.mjs");
                                let C = new WeakMap();
                                class S {
                                        constructor(e) {
                                                (this.openGlobalLock = null),
                                                    (this.isDragging = !1),
                                                    (this.currentDirection = null),
                                                    (this.originPoint = { x: 0, y: 0 }),
                                                    (this.constraints = !1),
                                                    (this.hasMutatedConstraints = !1),
                                                    (this.elastic = (0, u.createBox)()),
                                                    (this.visualElement = e);
                                        }
                                        start(e, { snapToCursor: t = !1 } = {}) {
                                                let { presenceContext: s } = this.visualElement;
                                                if (s && !1 === s.isPresent) return;
                                                let { dragSnapToOrigin: r } = this.getProps();
                                                this.panSession = new n.PanSession(
                                                    e,
                                                    {
                                                            onSessionStart: (e) => {
                                                                    let { dragSnapToOrigin: s } = this.getProps();
                                                                    s ? this.pauseAnimation() : this.stopAnimation(),
                                                                    t && this.snapToCursor((0, d.extractEventInfo)(e, "page").point);
                                                            },
                                                            onStart: (e, t) => {
                                                                    var s;
                                                                    let { drag: r, dragPropagation: o, onDragStart: n } = this.getProps();
                                                                    if (
                                                                        r &&
                                                                        !o &&
                                                                        (this.openGlobalLock && this.openGlobalLock(),
                                                                            (this.openGlobalLock = (0, i.getGlobalLock)(r)),
                                                                            !this.openGlobalLock)
                                                                    )
                                                                            return;
                                                                    (this.isDragging = !0),
                                                                        (this.currentDirection = null),
                                                                        this.resolveConstraints(),
                                                                    this.visualElement.projection &&
                                                                    ((this.visualElement.projection.isAnimationBlocked = !0),
                                                                        (this.visualElement.projection.target = void 0)),
                                                                        (0, c.eachAxis)((e) => {
                                                                                let t = this.getAxisMotionValue(e).get() || 0;
                                                                                if ((0, g.percent).test(t)) {
                                                                                        let { projection: s } = this.visualElement;
                                                                                        if (s && s.layout) {
                                                                                                let r = s.layout.layoutBox[e];
                                                                                                if (r) {
                                                                                                        let e = (0, j.calcLength)(r);
                                                                                                        t = e * (parseFloat(t) / 100);
                                                                                                }
                                                                                        }
                                                                                }
                                                                                this.originPoint[e] = t;
                                                                        }),
                                                                    n && (0, P.frame).postRender(() => n(e, t)),
                                                                    null === (s = this.removeWillChange) || void 0 === s || s.call(this),
                                                                        (this.removeWillChange = (0, b.addValueToWillChange)(
                                                                            this.visualElement,
                                                                            "transform"
                                                                        ));
                                                                    let { animationState: a } = this.visualElement;
                                                                    a && a.setActive("whileDrag", !0);
                                                            },
                                                            onMove: (e, t) => {
                                                                    let {
                                                                            dragPropagation: s,
                                                                            dragDirectionLock: r,
                                                                            onDirectionLock: o,
                                                                            onDrag: n,
                                                                    } = this.getProps();
                                                                    if (!s && !this.openGlobalLock) return;
                                                                    let { offset: i } = t;
                                                                    if (r && null === this.currentDirection) {
                                                                            (this.currentDirection = (function (e, t = 10) {
                                                                                    let s = null;
                                                                                    return (
                                                                                        Math.abs(e.y) > t ? (s = "y") : Math.abs(e.x) > t && (s = "x"), s
                                                                                    );
                                                                            })(i)),
                                                                            null !== this.currentDirection && o && o(this.currentDirection);
                                                                            return;
                                                                    }
                                                                    this.updateAxis("x", t.point, i),
                                                                        this.updateAxis("y", t.point, i),
                                                                        this.visualElement.render(),
                                                                    n && n(e, t);
                                                            },
                                                            onSessionEnd: (e, t) => this.stop(e, t),
                                                            resumeAnimation: () =>
                                                                (0, c.eachAxis)((e) => {
                                                                        var t;
                                                                        return (
                                                                            "paused" === this.getAnimationState(e) &&
                                                                            (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
                                                                                ? void 0
                                                                                : t.play())
                                                                        );
                                                                }),
                                                    },
                                                    {
                                                            transformPagePoint: this.visualElement.getTransformPagePoint(),
                                                            dragSnapToOrigin: r,
                                                            contextWindow: (0, y.getContextWindow)(this.visualElement),
                                                    }
                                                );
                                        }
                                        stop(e, t) {
                                                var s;
                                                null === (s = this.removeWillChange) || void 0 === s || s.call(this);
                                                let r = this.isDragging;
                                                if ((this.cancel(), !r)) return;
                                                let { velocity: o } = t;
                                                this.startAnimation(o);
                                                let { onDragEnd: n } = this.getProps();
                                                n && (0, P.frame).postRender(() => n(e, t));
                                        }
                                        cancel() {
                                                this.isDragging = !1;
                                                let { projection: e, animationState: t } = this.visualElement;
                                                e && (e.isAnimationBlocked = !1),
                                                this.panSession && this.panSession.end(),
                                                    (this.panSession = void 0);
                                                let { dragPropagation: s } = this.getProps();
                                                !s && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
                                                t && t.setActive("whileDrag", !1);
                                        }
                                        updateAxis(e, t, s) {
                                                let { drag: r } = this.getProps();
                                                if (!s || !T(e, r, this.currentDirection)) return;
                                                let o = this.getAxisMotionValue(e),
                                                    n = this.originPoint[e] + s[e];
                                                this.constraints &&
                                                this.constraints[e] &&
                                                (n = (0, m.applyConstraints)(n, this.constraints[e], this.elastic[e])),
                                                    o.set(n);
                                        }
                                        resolveConstraints() {
                                                var e;
                                                let { dragConstraints: t, dragElastic: s } = this.getProps(),
                                                    r =
                                                        this.visualElement.projection && !this.visualElement.projection.layout
                                                            ? this.visualElement.projection.measure(!1)
                                                            : null === (e = this.visualElement.projection) || void 0 === e
                                                                ? void 0
                                                                : e.layout,
                                                    o = this.constraints;
                                                t && (0, a.isRefObject)(t)
                                                    ? this.constraints || (this.constraints = this.resolveRefConstraints())
                                                    : t && r
                                                        ? (this.constraints = (0, m.calcRelativeConstraints)(r.layoutBox, t))
                                                        : (this.constraints = !1),
                                                    (this.elastic = (0, m.resolveDragElastic)(s)),
                                                o !== this.constraints &&
                                                r &&
                                                this.constraints &&
                                                !this.hasMutatedConstraints &&
                                                (0, c.eachAxis)((e) => {
                                                        !1 !== this.constraints &&
                                                        this.getAxisMotionValue(e) &&
                                                        (this.constraints[e] = (0, m.rebaseAxisConstraints)(
                                                            r.layoutBox[e],
                                                            this.constraints[e]
                                                        ));
                                                });
                                        }
                                        resolveRefConstraints() {
                                                let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
                                                if (!e || !(0, a.isRefObject)(e)) return !1;
                                                let s = e.current;
                                                (0, o.invariant)(
                                                    null !== s,
                                                    "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                                                );
                                                let { projection: r } = this.visualElement;
                                                if (!r || !r.layout) return !1;
                                                let n = (0, p.measurePageBox)(s, r.root, this.visualElement.getTransformPagePoint()),
                                                    i = (0, m.calcViewportConstraints)(r.layout.layoutBox, n);
                                                if (t) {
                                                        let e = t((0, h.convertBoxToBoundingBox)(i));
                                                        (this.hasMutatedConstraints = !!e), e && (i = (0, h.convertBoundingBoxToBox)(e));
                                                }
                                                return i;
                                        }
                                        startAnimation(e) {
                                                let {
                                                            drag: t,
                                                            dragMomentum: s,
                                                            dragElastic: r,
                                                            dragTransition: o,
                                                            dragSnapToOrigin: n,
                                                            onDragTransitionEnd: i,
                                                    } = this.getProps(),
                                                    a = this.constraints || {},
                                                    l = (0, c.eachAxis)((i) => {
                                                            if (!T(i, t, this.currentDirection)) return;
                                                            let l = (a && a[i]) || {};
                                                            n && (l = { min: 0, max: 0 });
                                                            let m = {
                                                                    type: "inertia",
                                                                    velocity: s ? e[i] : 0,
                                                                    bounceStiffness: r ? 200 : 1e6,
                                                                    bounceDamping: r ? 40 : 1e7,
                                                                    timeConstant: 750,
                                                                    restDelta: 1,
                                                                    restSpeed: 10,
                                                                    ...o,
                                                                    ...l,
                                                            };
                                                            return this.startAxisValueAnimation(i, m);
                                                    });
                                                return Promise.all(l).then(i);
                                        }
                                        startAxisValueAnimation(e, t) {
                                                let s = this.getAxisMotionValue(e);
                                                return s.start(
                                                    (0, x.animateMotionValue)(
                                                        e,
                                                        s,
                                                        0,
                                                        t,
                                                        this.visualElement,
                                                        !1,
                                                        (0, b.addValueToWillChange)(this.visualElement, e)
                                                    )
                                                );
                                        }
                                        stopAnimation() {
                                                (0, c.eachAxis)((e) => this.getAxisMotionValue(e).stop());
                                        }
                                        pauseAnimation() {
                                                (0, c.eachAxis)((e) => {
                                                        var t;
                                                        return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
                                                            ? void 0
                                                            : t.pause();
                                                });
                                        }
                                        getAnimationState(e) {
                                                var t;
                                                return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
                                                    ? void 0
                                                    : t.state;
                                        }
                                        getAxisMotionValue(e) {
                                                let t = `_drag${e.toUpperCase()}`,
                                                    s = this.visualElement.getProps(),
                                                    r = s[t];
                                                return r || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
                                        }
                                        snapToCursor(e) {
                                                (0, c.eachAxis)((t) => {
                                                        let { drag: s } = this.getProps();
                                                        if (!T(t, s, this.currentDirection)) return;
                                                        let { projection: r } = this.visualElement,
                                                            o = this.getAxisMotionValue(t);
                                                        if (r && r.layout) {
                                                                let { min: s, max: n } = r.layout.layoutBox[t];
                                                                o.set(e[t] - (0, v.mixNumber)(s, n, 0.5));
                                                        }
                                                });
                                        }
                                        scalePositionWithinConstraints() {
                                                if (!this.visualElement.current) return;
                                                let { drag: e, dragConstraints: t } = this.getProps(),
                                                    { projection: s } = this.visualElement;
                                                if (!(0, a.isRefObject)(t) || !s || !this.constraints) return;
                                                this.stopAnimation();
                                                let r = { x: 0, y: 0 };
                                                (0, c.eachAxis)((e) => {
                                                        let t = this.getAxisMotionValue(e);
                                                        if (t && !1 !== this.constraints) {
                                                                let s = t.get();
                                                                r[e] = (0, m.calcOrigin)({ min: s, max: s }, this.constraints[e]);
                                                        }
                                                });
                                                let { transformTemplate: o } = this.visualElement.getProps();
                                                (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
                                                s.root && s.root.updateScroll(),
                                                    s.updateLayout(),
                                                    this.resolveConstraints(),
                                                    (0, c.eachAxis)((t) => {
                                                            if (!T(t, e, null)) return;
                                                            let s = this.getAxisMotionValue(t),
                                                                { min: o, max: n } = this.constraints[t];
                                                            s.set((0, v.mixNumber)(o, n, r[t]));
                                                    });
                                        }
                                        addListeners() {
                                                if (!this.visualElement.current) return;
                                                C.set(this.visualElement, this);
                                                let e = this.visualElement.current,
                                                    t = (0, l.addPointerEvent)(e, "pointerdown", (e) => {
                                                            let { drag: t, dragListener: s = !0 } = this.getProps();
                                                            t && s && this.start(e);
                                                    }),
                                                    s = () => {
                                                            let { dragConstraints: e } = this.getProps();
                                                            (0, a.isRefObject)(e) &&
                                                            e.current &&
                                                            (this.constraints = this.resolveRefConstraints());
                                                    },
                                                    { projection: r } = this.visualElement,
                                                    o = r.addEventListener("measure", s);
                                                r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), (0, P.frame).read(s);
                                                let n = (0, f.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints()),
                                                    i = r.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t }) => {
                                                            this.isDragging &&
                                                            t &&
                                                            ((0, c.eachAxis)((t) => {
                                                                    let s = this.getAxisMotionValue(t);
                                                                    s &&
                                                                    ((this.originPoint[t] += e[t].translate),
                                                                        s.set(s.get() + e[t].translate));
                                                            }),
                                                                this.visualElement.render());
                                                    });
                                                return () => {
                                                        n(), t(), o(), i && i();
                                                };
                                        }
                                        getProps() {
                                                let e = this.visualElement.getProps(),
                                                    {
                                                            drag: t = !1,
                                                            dragDirectionLock: s = !1,
                                                            dragPropagation: r = !1,
                                                            dragConstraints: o = !1,
                                                            dragElastic: n = m.defaultElastic,
                                                            dragMomentum: i = !0,
                                                    } = e;
                                                return {
                                                        ...e,
                                                        drag: t,
                                                        dragDirectionLock: s,
                                                        dragPropagation: r,
                                                        dragConstraints: o,
                                                        dragElastic: n,
                                                        dragMomentum: i,
                                                };
                                        }
                                }
                                function T(e, t, s) {
                                        return (!0 === t || t === e) && (null === s || s === e);
                                }
                        },
                        {
                                "../../utils/errors.mjs": "gxmqQ",
                                "../pan/PanSession.mjs": "9nJ4o",
                                "./utils/lock.mjs": "42KHb",
                                "../../utils/is-ref-object.mjs": "1Yx64",
                                "../../events/add-pointer-event.mjs": "75bHa",
                                "./utils/constraints.mjs": "4pid8",
                                "../../projection/geometry/models.mjs": "9qUQK",
                                "../../projection/utils/each-axis.mjs": "lufq2",
                                "../../projection/utils/measure.mjs": "cy3cT",
                                "../../events/event-info.mjs": "928Kp",
                                "../../projection/geometry/conversion.mjs": "lme8h",
                                "../../events/add-dom-event.mjs": "7Ok8R",
                                "../../projection/geometry/delta-calc.mjs": "e8SDW",
                                "../../utils/mix/number.mjs": "9zo4o",
                                "../../value/types/numbers/units.mjs": "alPiW",
                                "../../animation/interfaces/motion-value.mjs": "32YzD",
                                "../../utils/get-context-window.mjs": "foHCx",
                                "../../value/use-will-change/add-will-change.mjs": "374I3",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9nJ4o": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "PanSession", () => c);
                                var o = e("../../events/event-info.mjs"),
                                    n = e("../../utils/time-conversion.mjs"),
                                    i = e("../../events/add-pointer-event.mjs"),
                                    a = e("../../utils/pipe.mjs"),
                                    l = e("../../utils/distance.mjs"),
                                    m = e("../../events/utils/is-primary-pointer.mjs"),
                                    u = e("../../frameloop/frame.mjs");
                                class c {
                                        constructor(e, t, { transformPagePoint: s, contextWindow: r, dragSnapToOrigin: n = !1 } = {}) {
                                                if (
                                                    ((this.startEvent = null),
                                                        (this.lastMoveEvent = null),
                                                        (this.lastMoveEventInfo = null),
                                                        (this.handlers = {}),
                                                        (this.contextWindow = window),
                                                        (this.updatePoint = () => {
                                                                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                                                                let e = h(this.lastMoveEventInfo, this.history),
                                                                    t = null !== this.startEvent,
                                                                    s = (0, l.distance2D)(e.offset, { x: 0, y: 0 }) >= 3;
                                                                if (!t && !s) return;
                                                                let { point: r } = e,
                                                                    { timestamp: o } = u.frameData;
                                                                this.history.push({ ...r, timestamp: o });
                                                                let { onStart: n, onMove: i } = this.handlers;
                                                                t || (n && n(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                                                                i && i(this.lastMoveEvent, e);
                                                        }),
                                                        (this.handlePointerMove = (e, t) => {
                                                                (this.lastMoveEvent = e),
                                                                    (this.lastMoveEventInfo = p(t, this.transformPagePoint)),
                                                                    (0, u.frame).update(this.updatePoint, !0);
                                                        }),
                                                        (this.handlePointerUp = (e, t) => {
                                                                this.end();
                                                                let { onEnd: s, onSessionEnd: r, resumeAnimation: o } = this.handlers;
                                                                if (
                                                                    (this.dragSnapToOrigin && o && o(),
                                                                        !(this.lastMoveEvent && this.lastMoveEventInfo))
                                                                )
                                                                        return;
                                                                let n = h(
                                                                    "pointercancel" === e.type
                                                                        ? this.lastMoveEventInfo
                                                                        : p(t, this.transformPagePoint),
                                                                    this.history
                                                                );
                                                                this.startEvent && s && s(e, n), r && r(e, n);
                                                        }),
                                                        !(0, m.isPrimaryPointer)(e))
                                                )
                                                        return;
                                                (this.dragSnapToOrigin = n),
                                                    (this.handlers = t),
                                                    (this.transformPagePoint = s),
                                                    (this.contextWindow = r || window);
                                                let c = (0, o.extractEventInfo)(e),
                                                    d = p(c, this.transformPagePoint),
                                                    { point: f } = d,
                                                    { timestamp: j } = u.frameData;
                                                this.history = [{ ...f, timestamp: j }];
                                                let { onSessionStart: v } = t;
                                                v && v(e, h(d, this.history)),
                                                    (this.removeListeners = (0, a.pipe)(
                                                        (0, i.addPointerEvent)(this.contextWindow, "pointermove", this.handlePointerMove),
                                                        (0, i.addPointerEvent)(this.contextWindow, "pointerup", this.handlePointerUp),
                                                        (0, i.addPointerEvent)(this.contextWindow, "pointercancel", this.handlePointerUp)
                                                    ));
                                        }
                                        updateHandlers(e) {
                                                this.handlers = e;
                                        }
                                        end() {
                                                this.removeListeners && this.removeListeners(), (0, u.cancelFrame)(this.updatePoint);
                                        }
                                }
                                function p(e, t) {
                                        return t ? { point: t(e.point) } : e;
                                }
                                function d(e, t) {
                                        return { x: e.x - t.x, y: e.y - t.y };
                                }
                                function h({ point: e }, t) {
                                        return {
                                                point: e,
                                                delta: d(e, f(t)),
                                                offset: d(e, t[0]),
                                                velocity: (function (e, t) {
                                                        if (e.length < 2) return { x: 0, y: 0 };
                                                        let s = e.length - 1,
                                                            r = null,
                                                            o = f(e);
                                                        for (
                                                            ;
                                                            s >= 0 &&
                                                            ((r = e[s]), !(o.timestamp - r.timestamp > (0, n.secondsToMilliseconds)(0.1)));

                                                        )
                                                                s--;
                                                        if (!r) return { x: 0, y: 0 };
                                                        let i = (0, n.millisecondsToSeconds)(o.timestamp - r.timestamp);
                                                        if (0 === i) return { x: 0, y: 0 };
                                                        let a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
                                                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
                                                })(t, 0),
                                        };
                                }
                                function f(e) {
                                        return e[e.length - 1];
                                }
                        },
                        {
                                "../../events/event-info.mjs": "928Kp",
                                "../../utils/time-conversion.mjs": "ejbH7",
                                "../../events/add-pointer-event.mjs": "75bHa",
                                "../../utils/pipe.mjs": "f51nb",
                                "../../utils/distance.mjs": "aLlBm",
                                "../../events/utils/is-primary-pointer.mjs": "jVJGR",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                aLlBm: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "distance", () => o), r.export(s, "distance2D", () => n);
                                let o = (e, t) => Math.abs(e - t);
                                function n(e, t) {
                                        let s = o(e.x, t.x),
                                            r = o(e.y, t.y);
                                        return Math.sqrt(s ** 2 + r ** 2);
                                }
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "4pid8": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "applyConstraints", () => l),
                                    r.export(s, "calcOrigin", () => d),
                                    r.export(s, "calcRelativeAxisConstraints", () => m),
                                    r.export(s, "calcRelativeConstraints", () => u),
                                    r.export(s, "calcViewportAxisConstraints", () => c),
                                    r.export(s, "calcViewportConstraints", () => p),
                                    r.export(s, "defaultElastic", () => f),
                                    r.export(s, "rebaseAxisConstraints", () => h),
                                    r.export(s, "resolveAxisElastic", () => v),
                                    r.export(s, "resolveDragElastic", () => j),
                                    r.export(s, "resolvePointElastic", () => g);
                                var o = e("../../../utils/progress.mjs"),
                                    n = e("../../../projection/geometry/delta-calc.mjs"),
                                    i = e("../../../utils/clamp.mjs"),
                                    a = e("../../../utils/mix/number.mjs");
                                function l(e, { min: t, max: s }, r) {
                                        return (
                                            void 0 !== t && e < t
                                                ? (e = r ? (0, a.mixNumber)(t, e, r.min) : Math.max(e, t))
                                                : void 0 !== s && e > s && (e = r ? (0, a.mixNumber)(s, e, r.max) : Math.min(e, s)),
                                                e
                                        );
                                }
                                function m(e, t, s) {
                                        return {
                                                min: void 0 !== t ? e.min + t : void 0,
                                                max: void 0 !== s ? e.max + s - (e.max - e.min) : void 0,
                                        };
                                }
                                function u(e, { top: t, left: s, bottom: r, right: o }) {
                                        return { x: m(e.x, s, o), y: m(e.y, t, r) };
                                }
                                function c(e, t) {
                                        let s = t.min - e.min,
                                            r = t.max - e.max;
                                        return t.max - t.min < e.max - e.min && ([s, r] = [r, s]), { min: s, max: r };
                                }
                                function p(e, t) {
                                        return { x: c(e.x, t.x), y: c(e.y, t.y) };
                                }
                                function d(e, t) {
                                        let s = 0.5,
                                            r = (0, n.calcLength)(e),
                                            a = (0, n.calcLength)(t);
                                        return (
                                            a > r
                                                ? (s = (0, o.progress)(t.min, t.max - r, e.min))
                                                : r > a && (s = (0, o.progress)(e.min, e.max - a, t.min)),
                                                (0, i.clamp)(0, 1, s)
                                        );
                                }
                                function h(e, t) {
                                        let s = {};
                                        return (
                                            void 0 !== t.min && (s.min = t.min - e.min), void 0 !== t.max && (s.max = t.max - e.min), s
                                        );
                                }
                                let f = 0.35;
                                function j(e = f) {
                                        return (
                                            !1 === e ? (e = 0) : !0 === e && (e = f),
                                                { x: v(e, "left", "right"), y: v(e, "top", "bottom") }
                                        );
                                }
                                function v(e, t, s) {
                                        return { min: g(e, t), max: g(e, s) };
                                }
                                function g(e, t) {
                                        return "number" == typeof e ? e : e[t] || 0;
                                }
                        },
                        {
                                "../../../utils/progress.mjs": "8dmmm",
                                "../../../projection/geometry/delta-calc.mjs": "e8SDW",
                                "../../../utils/clamp.mjs": "j3fGo",
                                "../../../utils/mix/number.mjs": "9zo4o",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                e8SDW: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "calcAxisDelta", () => a),
                                    r.export(s, "calcBoxDelta", () => l),
                                    r.export(s, "calcLength", () => n),
                                    r.export(s, "calcRelativeAxis", () => m),
                                    r.export(s, "calcRelativeAxisPosition", () => c),
                                    r.export(s, "calcRelativeBox", () => u),
                                    r.export(s, "calcRelativePosition", () => p),
                                    r.export(s, "isNear", () => i);
                                var o = e("../../utils/mix/number.mjs");
                                function n(e) {
                                        return e.max - e.min;
                                }
                                function i(e, t, s) {
                                        return Math.abs(e - t) <= s;
                                }
                                function a(e, t, s, r = 0.5) {
                                        (e.origin = r),
                                            (e.originPoint = (0, o.mixNumber)(t.min, t.max, e.origin)),
                                            (e.scale = n(s) / n(t)),
                                            (e.translate = (0, o.mixNumber)(s.min, s.max, e.origin) - e.originPoint),
                                        ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) && (e.scale = 1),
                                        ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) && (e.translate = 0);
                                }
                                function l(e, t, s, r) {
                                        a(e.x, t.x, s.x, r ? r.originX : void 0), a(e.y, t.y, s.y, r ? r.originY : void 0);
                                }
                                function m(e, t, s) {
                                        (e.min = s.min + t.min), (e.max = e.min + n(t));
                                }
                                function u(e, t, s) {
                                        m(e.x, t.x, s.x), m(e.y, t.y, s.y);
                                }
                                function c(e, t, s) {
                                        (e.min = t.min - s.min), (e.max = e.min + n(t));
                                }
                                function p(e, t, s) {
                                        c(e.x, t.x, s.x), c(e.y, t.y, s.y);
                                }
                        },
                        { "../../utils/mix/number.mjs": "9zo4o", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                lufq2: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        return [e("x"), e("y")];
                                }
                                r.defineInteropFlag(s), r.export(s, "eachAxis", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                foHCx: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "getContextWindow", () => o);
                                let o = ({ current: e }) => (e ? e.ownerDocument.defaultView : null);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "1JLLd": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "PanGesture", () => c);
                                var o = e("./PanSession.mjs"),
                                    n = e("../../events/add-pointer-event.mjs"),
                                    i = e("../../motion/features/Feature.mjs"),
                                    a = e("../../utils/noop.mjs"),
                                    l = e("../../utils/get-context-window.mjs"),
                                    m = e("../../frameloop/frame.mjs");
                                let u = (e) => (t, s) => {
                                        e && (0, m.frame).postRender(() => e(t, s));
                                };
                                class c extends i.Feature {
                                        constructor() {
                                                super(...arguments), (this.removePointerDownListener = a.noop);
                                        }
                                        onPointerDown(e) {
                                                this.session = new o.PanSession(e, this.createPanHandlers(), {
                                                        transformPagePoint: this.node.getTransformPagePoint(),
                                                        contextWindow: (0, l.getContextWindow)(this.node),
                                                });
                                        }
                                        createPanHandlers() {
                                                let { onPanSessionStart: e, onPanStart: t, onPan: s, onPanEnd: r } = this.node.getProps();
                                                return {
                                                        onSessionStart: u(e),
                                                        onStart: u(t),
                                                        onMove: s,
                                                        onEnd: (e, t) => {
                                                                delete this.session, r && (0, m.frame).postRender(() => r(e, t));
                                                        },
                                                };
                                        }
                                        mount() {
                                                this.removePointerDownListener = (0, n.addPointerEvent)(
                                                    this.node.current,
                                                    "pointerdown",
                                                    (e) => this.onPointerDown(e)
                                                );
                                        }
                                        update() {
                                                this.session && this.session.updateHandlers(this.createPanHandlers());
                                        }
                                        unmount() {
                                                this.removePointerDownListener(), this.session && this.session.end();
                                        }
                                }
                        },
                        {
                                "./PanSession.mjs": "9nJ4o",
                                "../../events/add-pointer-event.mjs": "75bHa",
                                "../../motion/features/Feature.mjs": "gTgdN",
                                "../../utils/noop.mjs": "atNA1",
                                "../../utils/get-context-window.mjs": "foHCx",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                jkiV5: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "MeasureLayout", () => j);
                                var o = e("react/jsx-runtime"),
                                    n = e("react"),
                                    i = e("../../../components/AnimatePresence/use-presence.mjs"),
                                    a = e("../../../context/LayoutGroupContext.mjs"),
                                    l = e("../../../context/SwitchLayoutGroupContext.mjs"),
                                    m = e("../../../projection/node/state.mjs"),
                                    u = e("../../../projection/styles/scale-border-radius.mjs"),
                                    c = e("../../../projection/styles/scale-box-shadow.mjs"),
                                    p = e("../../../projection/styles/scale-correction.mjs"),
                                    d = e("../../../frameloop/microtask.mjs"),
                                    h = e("../../../frameloop/frame.mjs");
                                class f extends n.Component {
                                        componentDidMount() {
                                                let { visualElement: e, layoutGroup: t, switchLayoutGroup: s, layoutId: r } = this.props,
                                                    { projection: o } = e;
                                                (0, p.addScaleCorrector)(v),
                                                o &&
                                                (t.group && t.group.add(o),
                                                s && s.register && r && s.register(o),
                                                    o.root.didUpdate(),
                                                    o.addEventListener("animationComplete", () => {
                                                            this.safeToRemove();
                                                    }),
                                                    o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
                                                    (m.globalProjectionState.hasEverUpdated = !0);
                                        }
                                        getSnapshotBeforeUpdate(e) {
                                                let { layoutDependency: t, visualElement: s, drag: r, isPresent: o } = this.props,
                                                    n = s.projection;
                                                return (
                                                    n &&
                                                    ((n.isPresent = o),
                                                        r || e.layoutDependency !== t || void 0 === t
                                                            ? n.willUpdate()
                                                            : this.safeToRemove(),
                                                    e.isPresent === o ||
                                                    (o
                                                        ? n.promote()
                                                        : n.relegate() ||
                                                        (0, h.frame).postRender(() => {
                                                                let e = n.getStack();
                                                                (e && e.members.length) || this.safeToRemove();
                                                        }))),
                                                        null
                                                );
                                        }
                                        componentDidUpdate() {
                                                let { projection: e } = this.props.visualElement;
                                                e &&
                                                (e.root.didUpdate(),
                                                    (0, d.microtask).postRender(() => {
                                                            !e.currentAnimation && e.isLead() && this.safeToRemove();
                                                    }));
                                        }
                                        componentWillUnmount() {
                                                let { visualElement: e, layoutGroup: t, switchLayoutGroup: s } = this.props,
                                                    { projection: r } = e;
                                                r &&
                                                (r.scheduleCheckAfterUnmount(),
                                                t && t.group && t.group.remove(r),
                                                s && s.deregister && s.deregister(r));
                                        }
                                        safeToRemove() {
                                                let { safeToRemove: e } = this.props;
                                                e && e();
                                        }
                                        render() {
                                                return null;
                                        }
                                }
                                function j(e) {
                                        let [t, s] = (0, i.usePresence)(),
                                            r = (0, n.useContext)(a.LayoutGroupContext);
                                        return (0, o.jsx)(f, {
                                                ...e,
                                                layoutGroup: r,
                                                switchLayoutGroup: (0, n.useContext)(l.SwitchLayoutGroupContext),
                                                isPresent: t,
                                                safeToRemove: s,
                                        });
                                }
                                let v = {
                                        borderRadius: {
                                                ...u.correctBorderRadius,
                                                applyTo: [
                                                        "borderTopLeftRadius",
                                                        "borderTopRightRadius",
                                                        "borderBottomLeftRadius",
                                                        "borderBottomRightRadius",
                                                ],
                                        },
                                        borderTopLeftRadius: u.correctBorderRadius,
                                        borderTopRightRadius: u.correctBorderRadius,
                                        borderBottomLeftRadius: u.correctBorderRadius,
                                        borderBottomRightRadius: u.correctBorderRadius,
                                        boxShadow: c.correctBoxShadow,
                                };
                        },
                        {
                                "react/jsx-runtime": "8iOxN",
                                react: "329PG",
                                "../../../components/AnimatePresence/use-presence.mjs": "7OzpW",
                                "../../../context/LayoutGroupContext.mjs": "iFp6w",
                                "../../../context/SwitchLayoutGroupContext.mjs": "e6HSq",
                                "../../../projection/node/state.mjs": "iyubF",
                                "../../../projection/styles/scale-border-radius.mjs": "anoTB",
                                "../../../projection/styles/scale-box-shadow.mjs": "lNrYS",
                                "../../../projection/styles/scale-correction.mjs": "8L0AH",
                                "../../../frameloop/microtask.mjs": "cFodP",
                                "../../../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "7OzpW": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "isPresent", () => l),
                                    r.export(s, "useIsPresent", () => a),
                                    r.export(s, "usePresence", () => i);
                                var o = e("react"),
                                    n = e("../../context/PresenceContext.mjs");
                                function i() {
                                        let e = (0, o.useContext)(n.PresenceContext);
                                        if (null === e) return [!0, null];
                                        let { isPresent: t, onExitComplete: s, register: r } = e,
                                            i = (0, o.useId)();
                                        (0, o.useEffect)(() => r(i), []);
                                        let a = (0, o.useCallback)(() => s && s(i), [i, s]);
                                        return !t && s ? [!1, a] : [!0];
                                }
                                function a() {
                                        return l((0, o.useContext)(n.PresenceContext));
                                }
                                function l(e) {
                                        return null === e || e.isPresent;
                                }
                        },
                        {
                                react: "329PG",
                                "../../context/PresenceContext.mjs": "b9Qy5",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                iyubF: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "globalProjectionState", () => o);
                                let o = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                anoTB: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "correctBorderRadius", () => i),
                                    r.export(s, "pixelsToPercent", () => n);
                                var o = e("../../value/types/numbers/units.mjs");
                                function n(e, t) {
                                        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
                                }
                                let i = {
                                        correct: (e, t) => {
                                                if (!t.target) return e;
                                                if ("string" == typeof e) {
                                                        if (!(0, o.px).test(e)) return e;
                                                        e = parseFloat(e);
                                                }
                                                let s = n(e, t.target.x),
                                                    r = n(e, t.target.y);
                                                return `${s}% ${r}%`;
                                        },
                                };
                        },
                        {
                                "../../value/types/numbers/units.mjs": "alPiW",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                lNrYS: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "correctBoxShadow", () => i);
                                var o = e("../../utils/mix/number.mjs"),
                                    n = e("../../value/types/complex/index.mjs");
                                let i = {
                                        correct: (e, { treeScale: t, projectionDelta: s }) => {
                                                let r = (0, n.complex).parse(e);
                                                if (r.length > 5) return e;
                                                let i = (0, n.complex).createTransformer(e),
                                                    a = "number" != typeof r[0] ? 1 : 0,
                                                    l = s.x.scale * t.x,
                                                    m = s.y.scale * t.y;
                                                (r[0 + a] /= l), (r[1 + a] /= m);
                                                let u = (0, o.mixNumber)(l, m, 0.5);
                                                return (
                                                    "number" == typeof r[2 + a] && (r[2 + a] /= u),
                                                    "number" == typeof r[3 + a] && (r[3 + a] /= u),
                                                        i(r)
                                                );
                                        },
                                };
                        },
                        {
                                "../../utils/mix/number.mjs": "9zo4o",
                                "../../value/types/complex/index.mjs": "h5yJ0",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                kdNBA: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "HTMLProjectionNode", () => a),
                                    r.export(s, "rootProjectionNode", () => i);
                                var o = e("./create-projection-node.mjs"),
                                    n = e("./DocumentProjectionNode.mjs");
                                let i = { current: void 0 },
                                    a = (0, o.createProjectionNode)({
                                            measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
                                            defaultParent: () => {
                                                    if (!i.current) {
                                                            let e = new n.DocumentProjectionNode({});
                                                            e.mount(window), e.setOptions({ layoutScroll: !0 }), (i.current = e);
                                                    }
                                                    return i.current;
                                            },
                                            resetTransform: (e, t) => {
                                                    e.style.transform = void 0 !== t ? t : "none";
                                            },
                                            checkIsScrollRoot: (e) => "fixed" === window.getComputedStyle(e).position,
                                    });
                        },
                        {
                                "./create-projection-node.mjs": "fVvOY",
                                "./DocumentProjectionNode.mjs": "9hJci",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                fVvOY: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "cleanDirtyNodes", () => N),
                                    r.export(s, "createProjectionNode", () => k),
                                    r.export(s, "mixAxis", () => Q),
                                    r.export(s, "mixAxisDelta", () => J),
                                    r.export(s, "mixBox", () => Z),
                                    r.export(s, "propagateDirtyNodes", () => O);
                                var o = e("../../utils/subscription-manager.mjs"),
                                    n = e("../animation/mix-values.mjs"),
                                    i = e("../geometry/copy.mjs"),
                                    a = e("../geometry/delta-apply.mjs"),
                                    l = e("../geometry/delta-calc.mjs"),
                                    m = e("../geometry/delta-remove.mjs"),
                                    u = e("../../animation/utils/transitions.mjs"),
                                    c = e("../geometry/utils.mjs"),
                                    p = e("../shared/stack.mjs"),
                                    d = e("../styles/scale-correction.mjs"),
                                    h = e("../styles/transform.mjs"),
                                    f = e("../utils/each-axis.mjs"),
                                    j = e("../utils/has-transform.mjs"),
                                    v = e("../../render/utils/flat-tree.mjs"),
                                    g = e("../../value/utils/resolve-motion-value.mjs"),
                                    x = e("./state.mjs"),
                                    y = e("../../utils/delay.mjs"),
                                    b = e("../../utils/mix/number.mjs"),
                                    P = e("../../render/dom/utils/is-svg-element.mjs"),
                                    C = e("../../animation/interfaces/single-value.mjs"),
                                    S = e("../../utils/clamp.mjs"),
                                    T = e("../../frameloop/frame.mjs"),
                                    V = e("../../utils/noop.mjs"),
                                    F = e("../../frameloop/sync-time.mjs"),
                                    w = e("../../frameloop/microtask.mjs"),
                                    A = e("../../animation/optimized-appear/get-appear-id.mjs"),
                                    M = e("../geometry/models.mjs");
                                let I = {
                                            type: "projectionFrame",
                                            totalNodes: 0,
                                            resolvedTargetDeltas: 0,
                                            recalculatedProjection: 0,
                                    },
                                    E = "undefined" != typeof window && void 0 !== window.MotionDebug,
                                    U = ["", "X", "Y", "Z"],
                                    D = { visibility: "hidden" },
                                    R = 0;
                                function H(e, t, s, r) {
                                        let { latestValues: o } = t;
                                        o[e] && ((s[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
                                }
                                function k({
                                                   attachResizeListener: e,
                                                   defaultParent: t,
                                                   measureScroll: s,
                                                   checkIsScrollRoot: r,
                                                   resetTransform: f,
                                           }) {
                                        return class {
                                                constructor(e = {}, s = null == t ? void 0 : t()) {
                                                        (this.id = R++),
                                                            (this.animationId = 0),
                                                            (this.children = new Set()),
                                                            (this.options = {}),
                                                            (this.isTreeAnimating = !1),
                                                            (this.isAnimationBlocked = !1),
                                                            (this.isLayoutDirty = !1),
                                                            (this.isProjectionDirty = !1),
                                                            (this.isSharedProjectionDirty = !1),
                                                            (this.isTransformDirty = !1),
                                                            (this.updateManuallyBlocked = !1),
                                                            (this.updateBlockedByResize = !1),
                                                            (this.isUpdating = !1),
                                                            (this.isSVG = !1),
                                                            (this.needsReset = !1),
                                                            (this.shouldResetTransform = !1),
                                                            (this.hasCheckedOptimisedAppear = !1),
                                                            (this.treeScale = { x: 1, y: 1 }),
                                                            (this.eventHandlers = new Map()),
                                                            (this.hasTreeAnimated = !1),
                                                            (this.updateScheduled = !1),
                                                            (this.scheduleUpdate = () => this.update()),
                                                            (this.projectionUpdateScheduled = !1),
                                                            (this.checkUpdateFailed = () => {
                                                                    this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                                                            }),
                                                            (this.updateProjection = () => {
                                                                    (this.projectionUpdateScheduled = !1),
                                                                    E && (I.totalNodes = I.resolvedTargetDeltas = I.recalculatedProjection = 0),
                                                                        this.nodes.forEach(O),
                                                                        this.nodes.forEach($),
                                                                        this.nodes.forEach(Y),
                                                                        this.nodes.forEach(N),
                                                                    E && window.MotionDebug.record(I);
                                                            }),
                                                            (this.resolvedRelativeTargetAt = 0),
                                                            (this.hasProjected = !1),
                                                            (this.isVisible = !0),
                                                            (this.animationProgress = 0),
                                                            (this.sharedNodes = new Map()),
                                                            (this.latestValues = e),
                                                            (this.root = s ? s.root || s : this),
                                                            (this.path = s ? [...s.path, s] : []),
                                                            (this.parent = s),
                                                            (this.depth = s ? s.depth + 1 : 0);
                                                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                                                        this.root === this && (this.nodes = new v.FlatTree());
                                                }
                                                addEventListener(e, t) {
                                                        return (
                                                            this.eventHandlers.has(e) || this.eventHandlers.set(e, new o.SubscriptionManager()),
                                                                this.eventHandlers.get(e).add(t)
                                                        );
                                                }
                                                notifyListeners(e, ...t) {
                                                        let s = this.eventHandlers.get(e);
                                                        s && s.notify(...t);
                                                }
                                                hasListeners(e) {
                                                        return this.eventHandlers.has(e);
                                                }
                                                mount(t, s = this.root.hasTreeAnimated) {
                                                        if (this.instance) return;
                                                        (this.isSVG = (0, P.isSVGElement)(t)), (this.instance = t);
                                                        let { layoutId: r, layout: o, visualElement: n } = this.options;
                                                        if (
                                                            (n && !n.current && n.mount(t),
                                                                this.root.nodes.add(this),
                                                            this.parent && this.parent.children.add(this),
                                                            s && (o || r) && (this.isLayoutDirty = !0),
                                                                e)
                                                        ) {
                                                                let s;
                                                                let r = () => (this.root.updateBlockedByResize = !1);
                                                                e(t, () => {
                                                                        (this.root.updateBlockedByResize = !0),
                                                                        s && s(),
                                                                            (s = (0, y.delay)(r, 250)),
                                                                        x.globalProjectionState.hasAnimatedSinceResize &&
                                                                        ((x.globalProjectionState.hasAnimatedSinceResize = !1),
                                                                            this.nodes.forEach(K));
                                                                });
                                                        }
                                                        r && this.root.registerSharedNode(r, this),
                                                        !1 !== this.options.animate &&
                                                        n &&
                                                        (r || o) &&
                                                        this.addEventListener(
                                                            "didUpdate",
                                                            ({
                                                                     delta: e,
                                                                     hasLayoutChanged: t,
                                                                     hasRelativeTargetChanged: s,
                                                                     layout: r,
                                                             }) => {
                                                                    if (this.isTreeAnimationBlocked()) {
                                                                            (this.target = void 0), (this.relativeTarget = void 0);
                                                                            return;
                                                                    }
                                                                    let o = this.options.transition || n.getDefaultTransition() || et,
                                                                        { onLayoutAnimationStart: i, onLayoutAnimationComplete: a } =
                                                                            n.getProps(),
                                                                        l =
                                                                            !this.targetLayout ||
                                                                            !(0, c.boxEqualsRounded)(this.targetLayout, r) ||
                                                                            s,
                                                                        m = !t && s;
                                                                    if (
                                                                        this.options.layoutRoot ||
                                                                        (this.resumeFrom && this.resumeFrom.instance) ||
                                                                        m ||
                                                                        (t && (l || !this.currentAnimation))
                                                                    ) {
                                                                            this.resumeFrom &&
                                                                            ((this.resumingFrom = this.resumeFrom),
                                                                                (this.resumingFrom.resumingFrom = void 0)),
                                                                                this.setAnimationOrigin(e, m);
                                                                            let t = {
                                                                                    ...(0, u.getValueTransition)(o, "layout"),
                                                                                    onPlay: i,
                                                                                    onComplete: a,
                                                                            };
                                                                            (n.shouldReduceMotion || this.options.layoutRoot) &&
                                                                            ((t.delay = 0), (t.type = !1)),
                                                                                this.startAnimation(t);
                                                                    } else
                                                                            t || K(this),
                                                                            this.isLead() &&
                                                                            this.options.onExitComplete &&
                                                                            this.options.onExitComplete();
                                                                    this.targetLayout = r;
                                                            }
                                                        );
                                                }
                                                unmount() {
                                                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                                                        let e = this.getStack();
                                                        e && e.remove(this),
                                                        this.parent && this.parent.children.delete(this),
                                                            (this.instance = void 0),
                                                            (0, T.cancelFrame)(this.updateProjection);
                                                }
                                                blockUpdate() {
                                                        this.updateManuallyBlocked = !0;
                                                }
                                                unblockUpdate() {
                                                        this.updateManuallyBlocked = !1;
                                                }
                                                isUpdateBlocked() {
                                                        return this.updateManuallyBlocked || this.updateBlockedByResize;
                                                }
                                                isTreeAnimationBlocked() {
                                                        return (
                                                            this.isAnimationBlocked ||
                                                            (this.parent && this.parent.isTreeAnimationBlocked()) ||
                                                            !1
                                                        );
                                                }
                                                startUpdate() {
                                                        !this.isUpdateBlocked() &&
                                                        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(_), this.animationId++);
                                                }
                                                getTransformTemplate() {
                                                        let { visualElement: e } = this.options;
                                                        return e && e.getProps().transformTemplate;
                                                }
                                                willUpdate(e = !0) {
                                                        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
                                                                this.options.onExitComplete && this.options.onExitComplete();
                                                                return;
                                                        }
                                                        if (
                                                            (window.MotionCancelOptimisedTransform &&
                                                            !this.hasCheckedOptimisedAppear &&
                                                            (function e(t) {
                                                                    if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
                                                                    let { visualElement: s } = t.options;
                                                                    if (!s) return;
                                                                    let r = (0, A.getOptimisedAppearId)(s);
                                                                    window.MotionHasOptimisedTransformAnimation(r) &&
                                                                    window.MotionCancelOptimisedTransform(r);
                                                                    let { parent: o } = t;
                                                                    o && !o.hasCheckedOptimisedAppear && e(o);
                                                            })(this),
                                                            this.root.isUpdating || this.root.startUpdate(),
                                                                this.isLayoutDirty)
                                                        )
                                                                return;
                                                        this.isLayoutDirty = !0;
                                                        for (let e = 0; e < this.path.length; e++) {
                                                                let t = this.path[e];
                                                                (t.shouldResetTransform = !0),
                                                                    t.updateScroll("snapshot"),
                                                                t.options.layoutRoot && t.willUpdate(!1);
                                                        }
                                                        let { layoutId: t, layout: s } = this.options;
                                                        if (void 0 === t && !s) return;
                                                        let r = this.getTransformTemplate();
                                                        (this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0),
                                                            this.updateSnapshot(),
                                                        e && this.notifyListeners("willUpdate");
                                                }
                                                update() {
                                                        this.updateScheduled = !1;
                                                        let e = this.isUpdateBlocked();
                                                        if (e) {
                                                                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(z);
                                                                return;
                                                        }
                                                        this.isUpdating || this.nodes.forEach(W),
                                                            (this.isUpdating = !1),
                                                            this.nodes.forEach(q),
                                                            this.nodes.forEach(L),
                                                            this.nodes.forEach(B),
                                                            this.clearAllSnapshots();
                                                        let t = (0, F.time).now();
                                                        (T.frameData.delta = (0, S.clamp)(0, 1e3 / 60, t - T.frameData.timestamp)),
                                                            (T.frameData.timestamp = t),
                                                            (T.frameData.isProcessing = !0),
                                                            (0, T.steps).update.process(T.frameData),
                                                            (0, T.steps).preRender.process(T.frameData),
                                                            (0, T.steps).render.process(T.frameData),
                                                            (T.frameData.isProcessing = !1);
                                                }
                                                didUpdate() {
                                                        this.updateScheduled ||
                                                        ((this.updateScheduled = !0), (0, w.microtask).read(this.scheduleUpdate));
                                                }
                                                clearAllSnapshots() {
                                                        this.nodes.forEach(G), this.sharedNodes.forEach(X);
                                                }
                                                scheduleUpdateProjection() {
                                                        this.projectionUpdateScheduled ||
                                                        ((this.projectionUpdateScheduled = !0),
                                                            (0, T.frame).preRender(this.updateProjection, !1, !0));
                                                }
                                                scheduleCheckAfterUnmount() {
                                                        (0, T.frame).postRender(() => {
                                                                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
                                                        });
                                                }
                                                updateSnapshot() {
                                                        !this.snapshot && this.instance && (this.snapshot = this.measure());
                                                }
                                                updateLayout() {
                                                        if (
                                                            !this.instance ||
                                                            (this.updateScroll(),
                                                            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
                                                        )
                                                                return;
                                                        if (this.resumeFrom && !this.resumeFrom.instance)
                                                                for (let e = 0; e < this.path.length; e++) {
                                                                        let t = this.path[e];
                                                                        t.updateScroll();
                                                                }
                                                        let e = this.layout;
                                                        (this.layout = this.measure(!1)),
                                                            (this.layoutCorrected = (0, M.createBox)()),
                                                            (this.isLayoutDirty = !1),
                                                            (this.projectionDelta = void 0),
                                                            this.notifyListeners("measure", this.layout.layoutBox);
                                                        let { visualElement: t } = this.options;
                                                        t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
                                                }
                                                updateScroll(e = "measure") {
                                                        let t = !!(this.options.layoutScroll && this.instance);
                                                        if (
                                                            (this.scroll &&
                                                            this.scroll.animationId === this.root.animationId &&
                                                            this.scroll.phase === e &&
                                                            (t = !1),
                                                                t)
                                                        ) {
                                                                let t = r(this.instance);
                                                                this.scroll = {
                                                                        animationId: this.root.animationId,
                                                                        phase: e,
                                                                        isRoot: t,
                                                                        offset: s(this.instance),
                                                                        wasRoot: this.scroll ? this.scroll.isRoot : t,
                                                                };
                                                        }
                                                }
                                                resetTransform() {
                                                        if (!f) return;
                                                        let e =
                                                                this.isLayoutDirty ||
                                                                this.shouldResetTransform ||
                                                                this.options.alwaysMeasureLayout,
                                                            t = this.projectionDelta && !(0, c.isDeltaZero)(this.projectionDelta),
                                                            s = this.getTransformTemplate(),
                                                            r = s ? s(this.latestValues, "") : void 0,
                                                            o = r !== this.prevTransformTemplateValue;
                                                        e &&
                                                        (t || (0, j.hasTransform)(this.latestValues) || o) &&
                                                        (f(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
                                                }
                                                measure(e = !0) {
                                                        var t;
                                                        let s = this.measurePageBox(),
                                                            r = this.removeElementScroll(s);
                                                        return (
                                                            e && (r = this.removeTransform(r)),
                                                                eo((t = r).x),
                                                                eo(t.y),
                                                                {
                                                                        animationId: this.root.animationId,
                                                                        measuredBox: s,
                                                                        layoutBox: r,
                                                                        latestValues: {},
                                                                        source: this.id,
                                                                }
                                                        );
                                                }
                                                measurePageBox() {
                                                        var e;
                                                        let { visualElement: t } = this.options;
                                                        if (!t) return (0, M.createBox)();
                                                        let s = t.measureViewportBox(),
                                                            r =
                                                                (null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) ||
                                                                this.path.some(ei);
                                                        if (!r) {
                                                                let { scroll: e } = this.root;
                                                                e && ((0, a.translateAxis)(s.x, e.offset.x), (0, a.translateAxis)(s.y, e.offset.y));
                                                        }
                                                        return s;
                                                }
                                                removeElementScroll(e) {
                                                        var t;
                                                        let s = (0, M.createBox)();
                                                        if (
                                                            ((0, i.copyBoxInto)(s, e),
                                                                null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
                                                        )
                                                                return s;
                                                        for (let t = 0; t < this.path.length; t++) {
                                                                let r = this.path[t],
                                                                    { scroll: o, options: n } = r;
                                                                r !== this.root &&
                                                                o &&
                                                                n.layoutScroll &&
                                                                (o.wasRoot && (0, i.copyBoxInto)(s, e),
                                                                    (0, a.translateAxis)(s.x, o.offset.x),
                                                                    (0, a.translateAxis)(s.y, o.offset.y));
                                                        }
                                                        return s;
                                                }
                                                applyTransform(e, t = !1) {
                                                        let s = (0, M.createBox)();
                                                        (0, i.copyBoxInto)(s, e);
                                                        for (let e = 0; e < this.path.length; e++) {
                                                                let r = this.path[e];
                                                                !t &&
                                                                r.options.layoutScroll &&
                                                                r.scroll &&
                                                                r !== r.root &&
                                                                (0, a.transformBox)(s, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                                                                (0, j.hasTransform)(r.latestValues) && (0, a.transformBox)(s, r.latestValues);
                                                        }
                                                        return (
                                                            (0, j.hasTransform)(this.latestValues) && (0, a.transformBox)(s, this.latestValues),
                                                                s
                                                        );
                                                }
                                                removeTransform(e) {
                                                        let t = (0, M.createBox)();
                                                        (0, i.copyBoxInto)(t, e);
                                                        for (let e = 0; e < this.path.length; e++) {
                                                                let s = this.path[e];
                                                                if (!s.instance || !(0, j.hasTransform)(s.latestValues)) continue;
                                                                (0, j.hasScale)(s.latestValues) && s.updateSnapshot();
                                                                let r = (0, M.createBox)(),
                                                                    o = s.measurePageBox();
                                                                (0, i.copyBoxInto)(r, o),
                                                                    (0, m.removeBoxTransforms)(
                                                                        t,
                                                                        s.latestValues,
                                                                        s.snapshot ? s.snapshot.layoutBox : void 0,
                                                                        r
                                                                    );
                                                        }
                                                        return (
                                                            (0, j.hasTransform)(this.latestValues) &&
                                                            (0, m.removeBoxTransforms)(t, this.latestValues),
                                                                t
                                                        );
                                                }
                                                setTargetDelta(e) {
                                                        (this.targetDelta = e),
                                                            this.root.scheduleUpdateProjection(),
                                                            (this.isProjectionDirty = !0);
                                                }
                                                setOptions(e) {
                                                        this.options = {
                                                                ...this.options,
                                                                ...e,
                                                                crossfade: void 0 === e.crossfade || e.crossfade,
                                                        };
                                                }
                                                clearMeasurements() {
                                                        (this.scroll = void 0),
                                                            (this.layout = void 0),
                                                            (this.snapshot = void 0),
                                                            (this.prevTransformTemplateValue = void 0),
                                                            (this.targetDelta = void 0),
                                                            (this.target = void 0),
                                                            (this.isLayoutDirty = !1);
                                                }
                                                forceRelativeParentToResolveTarget() {
                                                        this.relativeParent &&
                                                        this.relativeParent.resolvedRelativeTargetAt !== T.frameData.timestamp &&
                                                        this.relativeParent.resolveTargetDelta(!0);
                                                }
                                                resolveTargetDelta(e = !1) {
                                                        var t;
                                                        let s = this.getLead();
                                                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                                                        this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                                                        this.isSharedProjectionDirty ||
                                                        (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                                                        let r = !!this.resumingFrom || this !== s,
                                                            o = !(
                                                                e ||
                                                                (r && this.isSharedProjectionDirty) ||
                                                                this.isProjectionDirty ||
                                                                (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) ||
                                                                this.attemptToResolveRelativeTarget ||
                                                                this.root.updateBlockedByResize
                                                            );
                                                        if (o) return;
                                                        let { layout: n, layoutId: m } = this.options;
                                                        if (this.layout && (n || m)) {
                                                                if (
                                                                    ((this.resolvedRelativeTargetAt = T.frameData.timestamp),
                                                                    !this.targetDelta && !this.relativeTarget)
                                                                ) {
                                                                        let e = this.getClosestProjectingParent();
                                                                        e && e.layout && 1 !== this.animationProgress
                                                                            ? ((this.relativeParent = e),
                                                                                this.forceRelativeParentToResolveTarget(),
                                                                                (this.relativeTarget = (0, M.createBox)()),
                                                                                (this.relativeTargetOrigin = (0, M.createBox)()),
                                                                                (0, l.calcRelativePosition)(
                                                                                    this.relativeTargetOrigin,
                                                                                    this.layout.layoutBox,
                                                                                    e.layout.layoutBox
                                                                                ),
                                                                                (0, i.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin))
                                                                            : (this.relativeParent = this.relativeTarget = void 0);
                                                                }
                                                                if (this.relativeTarget || this.targetDelta) {
                                                                        if (
                                                                            (this.target ||
                                                                            ((this.target = (0, M.createBox)()),
                                                                                (this.targetWithTransforms = (0, M.createBox)())),
                                                                                this.relativeTarget &&
                                                                                this.relativeTargetOrigin &&
                                                                                this.relativeParent &&
                                                                                this.relativeParent.target
                                                                                    ? (this.forceRelativeParentToResolveTarget(),
                                                                                        (0, l.calcRelativeBox)(
                                                                                            this.target,
                                                                                            this.relativeTarget,
                                                                                            this.relativeParent.target
                                                                                        ))
                                                                                    : this.targetDelta
                                                                                        ? (this.resumingFrom
                                                                                            ? (this.target = this.applyTransform(this.layout.layoutBox))
                                                                                            : (0, i.copyBoxInto)(this.target, this.layout.layoutBox),
                                                                                            (0, a.applyBoxDelta)(this.target, this.targetDelta))
                                                                                        : (0, i.copyBoxInto)(this.target, this.layout.layoutBox),
                                                                                this.attemptToResolveRelativeTarget)
                                                                        ) {
                                                                                this.attemptToResolveRelativeTarget = !1;
                                                                                let e = this.getClosestProjectingParent();
                                                                                e &&
                                                                                !!e.resumingFrom == !!this.resumingFrom &&
                                                                                !e.options.layoutScroll &&
                                                                                e.target &&
                                                                                1 !== this.animationProgress
                                                                                    ? ((this.relativeParent = e),
                                                                                        this.forceRelativeParentToResolveTarget(),
                                                                                        (this.relativeTarget = (0, M.createBox)()),
                                                                                        (this.relativeTargetOrigin = (0, M.createBox)()),
                                                                                        (0, l.calcRelativePosition)(
                                                                                            this.relativeTargetOrigin,
                                                                                            this.target,
                                                                                            e.target
                                                                                        ),
                                                                                        (0, i.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin))
                                                                                    : (this.relativeParent = this.relativeTarget = void 0);
                                                                        }
                                                                        E && I.resolvedTargetDeltas++;
                                                                }
                                                        }
                                                }
                                                getClosestProjectingParent() {
                                                        if (
                                                            !(
                                                                !this.parent ||
                                                                (0, j.hasScale)(this.parent.latestValues) ||
                                                                (0, j.has2DTranslate)(this.parent.latestValues)
                                                            )
                                                        )
                                                                return this.parent.isProjecting()
                                                                    ? this.parent
                                                                    : this.parent.getClosestProjectingParent();
                                                }
                                                isProjecting() {
                                                        return !!(
                                                            (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
                                                            this.layout
                                                        );
                                                }
                                                calcProjection() {
                                                        var e;
                                                        let t = this.getLead(),
                                                            s = !!this.resumingFrom || this !== t,
                                                            r = !0;
                                                        if (
                                                            ((this.isProjectionDirty ||
                                                                (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) &&
                                                            (r = !1),
                                                            s && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                                                            this.resolvedRelativeTargetAt === T.frameData.timestamp && (r = !1),
                                                                r)
                                                        )
                                                                return;
                                                        let { layout: o, layoutId: n } = this.options;
                                                        if (
                                                            ((this.isTreeAnimating = !!(
                                                                (this.parent && this.parent.isTreeAnimating) ||
                                                                this.currentAnimation ||
                                                                this.pendingAnimation
                                                            )),
                                                            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                                                            !this.layout || !(o || n))
                                                        )
                                                                return;
                                                        (0, i.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox);
                                                        let m = this.treeScale.x,
                                                            u = this.treeScale.y;
                                                        (0, a.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, s),
                                                        t.layout &&
                                                        !t.target &&
                                                        (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                                                        ((t.target = t.layout.layoutBox),
                                                            (t.targetWithTransforms = (0, M.createBox)()));
                                                        let { target: p } = t;
                                                        if (!p) {
                                                                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                                                                return;
                                                        }
                                                        this.projectionDelta && this.prevProjectionDelta
                                                            ? ((0, i.copyAxisDeltaInto)(this.prevProjectionDelta.x, this.projectionDelta.x),
                                                                (0, i.copyAxisDeltaInto)(this.prevProjectionDelta.y, this.projectionDelta.y))
                                                            : this.createProjectionDeltas(),
                                                            (0, l.calcBoxDelta)(
                                                                this.projectionDelta,
                                                                this.layoutCorrected,
                                                                p,
                                                                this.latestValues
                                                            ),
                                                        (this.treeScale.x === m &&
                                                            this.treeScale.y === u &&
                                                            (0, c.axisDeltaEquals)(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                                                            (0, c.axisDeltaEquals)(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                                                        ((this.hasProjected = !0),
                                                            this.scheduleRender(),
                                                            this.notifyListeners("projectionUpdate", p)),
                                                        E && I.recalculatedProjection++;
                                                }
                                                hide() {
                                                        this.isVisible = !1;
                                                }
                                                show() {
                                                        this.isVisible = !0;
                                                }
                                                scheduleRender(e = !0) {
                                                        var t;
                                                        if (
                                                            (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e)
                                                        ) {
                                                                let e = this.getStack();
                                                                e && e.scheduleRender();
                                                        }
                                                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
                                                }
                                                createProjectionDeltas() {
                                                        (this.prevProjectionDelta = (0, M.createDelta)()),
                                                            (this.projectionDelta = (0, M.createDelta)()),
                                                            (this.projectionDeltaWithTransform = (0, M.createDelta)());
                                                }
                                                setAnimationOrigin(e, t = !1) {
                                                        let s;
                                                        let r = this.snapshot,
                                                            o = r ? r.latestValues : {},
                                                            a = { ...this.latestValues },
                                                            m = (0, M.createDelta)();
                                                        (this.relativeParent && this.relativeParent.options.layoutRoot) ||
                                                        (this.relativeTarget = this.relativeTargetOrigin = void 0),
                                                            (this.attemptToResolveRelativeTarget = !t);
                                                        let u = (0, M.createBox)(),
                                                            p = r ? r.source : void 0,
                                                            d = this.layout ? this.layout.source : void 0,
                                                            h = p !== d,
                                                            f = this.getStack(),
                                                            j = !f || f.members.length <= 1,
                                                            v = !!(h && !j && !0 === this.options.crossfade && !this.path.some(ee));
                                                        (this.animationProgress = 0),
                                                            (this.mixTargetDelta = (t) => {
                                                                    let r = t / 1e3;
                                                                    J(m.x, e.x, r),
                                                                        J(m.y, e.y, r),
                                                                        this.setTargetDelta(m),
                                                                    this.relativeTarget &&
                                                                    this.relativeTargetOrigin &&
                                                                    this.layout &&
                                                                    this.relativeParent &&
                                                                    this.relativeParent.layout &&
                                                                    ((0, l.calcRelativePosition)(
                                                                        u,
                                                                        this.layout.layoutBox,
                                                                        this.relativeParent.layout.layoutBox
                                                                    ),
                                                                        Z(this.relativeTarget, this.relativeTargetOrigin, u, r),
                                                                    s &&
                                                                    (0, c.boxEquals)(this.relativeTarget, s) &&
                                                                    (this.isProjectionDirty = !1),
                                                                    s || (s = (0, M.createBox)()),
                                                                        (0, i.copyBoxInto)(s, this.relativeTarget)),
                                                                    h &&
                                                                    ((this.animationValues = a),
                                                                        (0, n.mixValues)(a, o, this.latestValues, r, v, j)),
                                                                        this.root.scheduleUpdateProjection(),
                                                                        this.scheduleRender(),
                                                                        (this.animationProgress = r);
                                                            }),
                                                            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                                                }
                                                startAnimation(e) {
                                                        this.notifyListeners("animationStart"),
                                                        this.currentAnimation && this.currentAnimation.stop(),
                                                        this.resumingFrom &&
                                                        this.resumingFrom.currentAnimation &&
                                                        this.resumingFrom.currentAnimation.stop(),
                                                        this.pendingAnimation &&
                                                        ((0, T.cancelFrame)(this.pendingAnimation), (this.pendingAnimation = void 0)),
                                                            (this.pendingAnimation = (0, T.frame).update(() => {
                                                                    (x.globalProjectionState.hasAnimatedSinceResize = !0),
                                                                        (this.currentAnimation = (0, C.animateSingleValue)(0, 1e3, {
                                                                                ...e,
                                                                                onUpdate: (t) => {
                                                                                        this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                                                                                },
                                                                                onComplete: () => {
                                                                                        e.onComplete && e.onComplete(), this.completeAnimation();
                                                                                },
                                                                        })),
                                                                    this.resumingFrom &&
                                                                    (this.resumingFrom.currentAnimation = this.currentAnimation),
                                                                        (this.pendingAnimation = void 0);
                                                            }));
                                                }
                                                completeAnimation() {
                                                        this.resumingFrom &&
                                                        ((this.resumingFrom.currentAnimation = void 0),
                                                            (this.resumingFrom.preserveOpacity = void 0));
                                                        let e = this.getStack();
                                                        e && e.exitAnimationComplete(),
                                                            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
                                                            this.notifyListeners("animationComplete");
                                                }
                                                finishAnimation() {
                                                        this.currentAnimation &&
                                                        (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
                                                            this.completeAnimation();
                                                }
                                                applyTransformsToTarget() {
                                                        let e = this.getLead(),
                                                            { targetWithTransforms: t, target: s, layout: r, latestValues: o } = e;
                                                        if (t && s && r) {
                                                                if (
                                                                    this !== e &&
                                                                    this.layout &&
                                                                    r &&
                                                                    en(this.options.animationType, this.layout.layoutBox, r.layoutBox)
                                                                ) {
                                                                        s = this.target || (0, M.createBox)();
                                                                        let t = (0, l.calcLength)(this.layout.layoutBox.x);
                                                                        (s.x.min = e.target.x.min), (s.x.max = s.x.min + t);
                                                                        let r = (0, l.calcLength)(this.layout.layoutBox.y);
                                                                        (s.y.min = e.target.y.min), (s.y.max = s.y.min + r);
                                                                }
                                                                (0, i.copyBoxInto)(t, s),
                                                                    (0, a.transformBox)(t, o),
                                                                    (0, l.calcBoxDelta)(
                                                                        this.projectionDeltaWithTransform,
                                                                        this.layoutCorrected,
                                                                        t,
                                                                        o
                                                                    );
                                                        }
                                                }
                                                registerSharedNode(e, t) {
                                                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new p.NodeStack());
                                                        let s = this.sharedNodes.get(e);
                                                        s.add(t);
                                                        let r = t.options.initialPromotionConfig;
                                                        t.promote({
                                                                transition: r ? r.transition : void 0,
                                                                preserveFollowOpacity:
                                                                    r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0,
                                                        });
                                                }
                                                isLead() {
                                                        let e = this.getStack();
                                                        return !e || e.lead === this;
                                                }
                                                getLead() {
                                                        var e;
                                                        let { layoutId: t } = this.options;
                                                        return (
                                                            (t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead)) || this
                                                        );
                                                }
                                                getPrevLead() {
                                                        var e;
                                                        let { layoutId: t } = this.options;
                                                        return t
                                                            ? null === (e = this.getStack()) || void 0 === e
                                                                ? void 0
                                                                : e.prevLead
                                                            : void 0;
                                                }
                                                getStack() {
                                                        let { layoutId: e } = this.options;
                                                        if (e) return this.root.sharedNodes.get(e);
                                                }
                                                promote({ needsReset: e, transition: t, preserveFollowOpacity: s } = {}) {
                                                        let r = this.getStack();
                                                        r && r.promote(this, s),
                                                        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                                                        t && this.setOptions({ transition: t });
                                                }
                                                relegate() {
                                                        let e = this.getStack();
                                                        return !!e && e.relegate(this);
                                                }
                                                resetSkewAndRotation() {
                                                        let { visualElement: e } = this.options;
                                                        if (!e) return;
                                                        let t = !1,
                                                            { latestValues: s } = e;
                                                        if (
                                                            ((s.z || s.rotate || s.rotateX || s.rotateY || s.rotateZ || s.skewX || s.skewY) &&
                                                            (t = !0),
                                                                !t)
                                                        )
                                                                return;
                                                        let r = {};
                                                        s.z && H("z", e, r, this.animationValues);
                                                        for (let t = 0; t < U.length; t++)
                                                                H(`rotate${U[t]}`, e, r, this.animationValues),
                                                                    H(`skew${U[t]}`, e, r, this.animationValues);
                                                        for (let t in (e.render(), r))
                                                                e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
                                                        e.scheduleRender();
                                                }
                                                getProjectionStyles(e) {
                                                        var t, s;
                                                        if (!this.instance || this.isSVG) return;
                                                        if (!this.isVisible) return D;
                                                        let r = { visibility: "" },
                                                            o = this.getTransformTemplate();
                                                        if (this.needsReset)
                                                                return (
                                                                    (this.needsReset = !1),
                                                                        (r.opacity = ""),
                                                                        (r.pointerEvents =
                                                                            (0, g.resolveMotionValue)(null == e ? void 0 : e.pointerEvents) || ""),
                                                                        (r.transform = o ? o(this.latestValues, "") : "none"),
                                                                        r
                                                                );
                                                        let n = this.getLead();
                                                        if (!this.projectionDelta || !this.layout || !n.target) {
                                                                let t = {};
                                                                return (
                                                                    this.options.layoutId &&
                                                                    ((t.opacity =
                                                                        void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                                                                        (t.pointerEvents =
                                                                            (0, g.resolveMotionValue)(null == e ? void 0 : e.pointerEvents) || "")),
                                                                    this.hasProjected &&
                                                                    !(0, j.hasTransform)(this.latestValues) &&
                                                                    ((t.transform = o ? o({}, "") : "none"), (this.hasProjected = !1)),
                                                                        t
                                                                );
                                                        }
                                                        let i = n.animationValues || n.latestValues;
                                                        this.applyTransformsToTarget(),
                                                            (r.transform = (0, h.buildProjectionTransform)(
                                                                this.projectionDeltaWithTransform,
                                                                this.treeScale,
                                                                i
                                                            )),
                                                        o && (r.transform = o(i, r.transform));
                                                        let { x: a, y: l } = this.projectionDelta;
                                                        for (let e in ((r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
                                                            n.animationValues
                                                                ? (r.opacity =
                                                                    n === this
                                                                        ? null !==
                                                                        (s =
                                                                            null !== (t = i.opacity) && void 0 !== t
                                                                                ? t
                                                                                : this.latestValues.opacity) && void 0 !== s
                                                                            ? s
                                                                            : 1
                                                                        : this.preserveOpacity
                                                                            ? this.latestValues.opacity
                                                                            : i.opacityExit)
                                                                : (r.opacity =
                                                                    n === this
                                                                        ? void 0 !== i.opacity
                                                                            ? i.opacity
                                                                            : ""
                                                                        : void 0 !== i.opacityExit
                                                                            ? i.opacityExit
                                                                            : 0),
                                                            d.scaleCorrectors)) {
                                                                if (void 0 === i[e]) continue;
                                                                let { correct: t, applyTo: s } = d.scaleCorrectors[e],
                                                                    o = "none" === r.transform ? i[e] : t(i[e], n);
                                                                if (s) {
                                                                        let e = s.length;
                                                                        for (let t = 0; t < e; t++) r[s[t]] = o;
                                                                } else r[e] = o;
                                                        }
                                                        return (
                                                            this.options.layoutId &&
                                                            (r.pointerEvents =
                                                                n === this
                                                                    ? (0, g.resolveMotionValue)(null == e ? void 0 : e.pointerEvents) || ""
                                                                    : "none"),
                                                                r
                                                        );
                                                }
                                                clearSnapshot() {
                                                        this.resumeFrom = this.snapshot = void 0;
                                                }
                                                resetTree() {
                                                        this.root.nodes.forEach((e) => {
                                                                var t;
                                                                return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop();
                                                        }),
                                                            this.root.nodes.forEach(z),
                                                            this.root.sharedNodes.clear();
                                                }
                                        };
                                }
                                function L(e) {
                                        e.updateLayout();
                                }
                                function B(e) {
                                        var t;
                                        let s = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                                        if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
                                                let { layoutBox: t, measuredBox: r } = e.layout,
                                                    { animationType: o } = e.options,
                                                    n = s.source !== e.layout.source;
                                                "size" === o
                                                    ? (0, f.eachAxis)((e) => {
                                                            let r = n ? s.measuredBox[e] : s.layoutBox[e],
                                                                o = (0, l.calcLength)(r);
                                                            (r.min = t[e].min), (r.max = r.min + o);
                                                    })
                                                    : en(o, s.layoutBox, t) &&
                                                    (0, f.eachAxis)((r) => {
                                                            let o = n ? s.measuredBox[r] : s.layoutBox[r],
                                                                i = (0, l.calcLength)(t[r]);
                                                            (o.max = o.min + i),
                                                            e.relativeTarget &&
                                                            !e.currentAnimation &&
                                                            ((e.isProjectionDirty = !0),
                                                                (e.relativeTarget[r].max = e.relativeTarget[r].min + i));
                                                    });
                                                let i = (0, M.createDelta)();
                                                (0, l.calcBoxDelta)(i, t, s.layoutBox);
                                                let a = (0, M.createDelta)();
                                                n
                                                    ? (0, l.calcBoxDelta)(a, e.applyTransform(r, !0), s.measuredBox)
                                                    : (0, l.calcBoxDelta)(a, t, s.layoutBox);
                                                let m = !(0, c.isDeltaZero)(i),
                                                    u = !1;
                                                if (!e.resumeFrom) {
                                                        let r = e.getClosestProjectingParent();
                                                        if (r && !r.resumeFrom) {
                                                                let { snapshot: o, layout: n } = r;
                                                                if (o && n) {
                                                                        let i = (0, M.createBox)();
                                                                        (0, l.calcRelativePosition)(i, s.layoutBox, o.layoutBox);
                                                                        let a = (0, M.createBox)();
                                                                        (0, l.calcRelativePosition)(a, t, n.layoutBox),
                                                                        (0, c.boxEqualsRounded)(i, a) || (u = !0),
                                                                        r.options.layoutRoot &&
                                                                        ((e.relativeTarget = a),
                                                                            (e.relativeTargetOrigin = i),
                                                                            (e.relativeParent = r));
                                                                }
                                                        }
                                                }
                                                e.notifyListeners("didUpdate", {
                                                        layout: t,
                                                        snapshot: s,
                                                        delta: a,
                                                        layoutDelta: i,
                                                        hasLayoutChanged: m,
                                                        hasRelativeTargetChanged: u,
                                                });
                                        } else if (e.isLead()) {
                                                let { onExitComplete: t } = e.options;
                                                t && t();
                                        }
                                        e.options.transition = void 0;
                                }
                                function O(e) {
                                        E && I.totalNodes++,
                                        e.parent &&
                                        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
                                        e.isSharedProjectionDirty ||
                                        (e.isSharedProjectionDirty = !!(
                                            e.isProjectionDirty ||
                                            e.parent.isProjectionDirty ||
                                            e.parent.isSharedProjectionDirty
                                        )),
                                        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
                                }
                                function N(e) {
                                        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
                                }
                                function G(e) {
                                        e.clearSnapshot();
                                }
                                function z(e) {
                                        e.clearMeasurements();
                                }
                                function W(e) {
                                        e.isLayoutDirty = !1;
                                }
                                function q(e) {
                                        let { visualElement: t } = e.options;
                                        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
                                }
                                function K(e) {
                                        e.finishAnimation(),
                                            (e.targetDelta = e.relativeTarget = e.target = void 0),
                                            (e.isProjectionDirty = !0);
                                }
                                function $(e) {
                                        e.resolveTargetDelta();
                                }
                                function Y(e) {
                                        e.calcProjection();
                                }
                                function _(e) {
                                        e.resetSkewAndRotation();
                                }
                                function X(e) {
                                        e.removeLeadSnapshot();
                                }
                                function J(e, t, s) {
                                        (e.translate = (0, b.mixNumber)(t.translate, 0, s)),
                                            (e.scale = (0, b.mixNumber)(t.scale, 1, s)),
                                            (e.origin = t.origin),
                                            (e.originPoint = t.originPoint);
                                }
                                function Q(e, t, s, r) {
                                        (e.min = (0, b.mixNumber)(t.min, s.min, r)), (e.max = (0, b.mixNumber)(t.max, s.max, r));
                                }
                                function Z(e, t, s, r) {
                                        Q(e.x, t.x, s.x, r), Q(e.y, t.y, s.y, r);
                                }
                                function ee(e) {
                                        return e.animationValues && void 0 !== e.animationValues.opacityExit;
                                }
                                let et = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
                                    es = (e) =>
                                        "undefined" != typeof navigator &&
                                        navigator.userAgent &&
                                        navigator.userAgent.toLowerCase().includes(e),
                                    er = es("applewebkit/") && !es("chrome/") ? Math.round : V.noop;
                                function eo(e) {
                                        (e.min = er(e.min)), (e.max = er(e.max));
                                }
                                function en(e, t, s) {
                                        return (
                                            "position" === e ||
                                            ("preserve-aspect" === e &&
                                                !(0, l.isNear)((0, c.aspectRatio)(t), (0, c.aspectRatio)(s), 0.2))
                                        );
                                }
                                function ei(e) {
                                        var t;
                                        return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot);
                                }
                        },
                        {
                                "../../utils/subscription-manager.mjs": "axhZT",
                                "../animation/mix-values.mjs": "gI67x",
                                "../geometry/copy.mjs": "bWM0x",
                                "../geometry/delta-apply.mjs": "ltgsJ",
                                "../geometry/delta-calc.mjs": "e8SDW",
                                "../geometry/delta-remove.mjs": "cVYYk",
                                "../../animation/utils/transitions.mjs": "da1oB",
                                "../geometry/utils.mjs": "3liBq",
                                "../shared/stack.mjs": "2v8F6",
                                "../styles/scale-correction.mjs": "8L0AH",
                                "../styles/transform.mjs": "iSvVs",
                                "../utils/each-axis.mjs": "lufq2",
                                "../utils/has-transform.mjs": "86mKr",
                                "../../render/utils/flat-tree.mjs": "enZnn",
                                "../../value/utils/resolve-motion-value.mjs": "lYqt7",
                                "./state.mjs": "iyubF",
                                "../../utils/delay.mjs": "6sxCd",
                                "../../utils/mix/number.mjs": "9zo4o",
                                "../../render/dom/utils/is-svg-element.mjs": "jV8sq",
                                "../../animation/interfaces/single-value.mjs": "5JctL",
                                "../../utils/clamp.mjs": "j3fGo",
                                "../../frameloop/frame.mjs": "7hMWE",
                                "../../utils/noop.mjs": "atNA1",
                                "../../frameloop/sync-time.mjs": "kNVkV",
                                "../../frameloop/microtask.mjs": "cFodP",
                                "../../animation/optimized-appear/get-appear-id.mjs": "7JNfp",
                                "../geometry/models.mjs": "9qUQK",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                gI67x: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "mixValues", () => d);
                                var o = e("../../easing/circ.mjs"),
                                    n = e("../../utils/progress.mjs"),
                                    i = e("../../utils/mix/number.mjs"),
                                    a = e("../../utils/noop.mjs"),
                                    l = e("../../value/types/numbers/units.mjs");
                                let m = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                                    u = m.length,
                                    c = (e) => ("string" == typeof e ? parseFloat(e) : e),
                                    p = (e) => "number" == typeof e || (0, l.px).test(e);
                                function d(e, t, s, r, o, n) {
                                        o
                                            ? ((e.opacity = (0, i.mixNumber)(0, void 0 !== s.opacity ? s.opacity : 1, f(r))),
                                                (e.opacityExit = (0, i.mixNumber)(void 0 !== t.opacity ? t.opacity : 1, 0, j(r))))
                                            : n &&
                                            (e.opacity = (0, i.mixNumber)(
                                                void 0 !== t.opacity ? t.opacity : 1,
                                                void 0 !== s.opacity ? s.opacity : 1,
                                                r
                                            ));
                                        for (let o = 0; o < u; o++) {
                                                let n = `border${m[o]}Radius`,
                                                    a = h(t, n),
                                                    u = h(s, n);
                                                if (void 0 === a && void 0 === u) continue;
                                                a || (a = 0), u || (u = 0);
                                                let d = 0 === a || 0 === u || p(a) === p(u);
                                                d
                                                    ? ((e[n] = Math.max((0, i.mixNumber)(c(a), c(u), r), 0)),
                                                    ((0, l.percent).test(u) || (0, l.percent).test(a)) && (e[n] += "%"))
                                                    : (e[n] = u);
                                        }
                                        (t.rotate || s.rotate) && (e.rotate = (0, i.mixNumber)(t.rotate || 0, s.rotate || 0, r));
                                }
                                function h(e, t) {
                                        return void 0 !== e[t] ? e[t] : e.borderRadius;
                                }
                                let f = v(0, 0.5, o.circOut),
                                    j = v(0.5, 0.95, a.noop);
                                function v(e, t, s) {
                                        return (r) => (r < e ? 0 : r > t ? 1 : s((0, n.progress)(e, t, r)));
                                }
                        },
                        {
                                "../../easing/circ.mjs": "dG1x1",
                                "../../utils/progress.mjs": "8dmmm",
                                "../../utils/mix/number.mjs": "9zo4o",
                                "../../utils/noop.mjs": "atNA1",
                                "../../value/types/numbers/units.mjs": "alPiW",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                bWM0x: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t) {
                                        (e.min = t.min), (e.max = t.max);
                                }
                                function n(e, t) {
                                        o(e.x, t.x), o(e.y, t.y);
                                }
                                function i(e, t) {
                                        (e.translate = t.translate),
                                            (e.scale = t.scale),
                                            (e.originPoint = t.originPoint),
                                            (e.origin = t.origin);
                                }
                                r.defineInteropFlag(s),
                                    r.export(s, "copyAxisDeltaInto", () => i),
                                    r.export(s, "copyAxisInto", () => o),
                                    r.export(s, "copyBoxInto", () => n);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                cVYYk: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "removeAxisDelta", () => l),
                                    r.export(s, "removeAxisTransforms", () => m),
                                    r.export(s, "removeBoxTransforms", () => p),
                                    r.export(s, "removePointDelta", () => a);
                                var o = e("../../utils/mix/number.mjs"),
                                    n = e("../../value/types/numbers/units.mjs"),
                                    i = e("./delta-apply.mjs");
                                function a(e, t, s, r, o) {
                                        return (
                                            (e -= t),
                                                (e = (0, i.scalePoint)(e, 1 / s, r)),
                                            void 0 !== o && (e = (0, i.scalePoint)(e, 1 / o, r)),
                                                e
                                        );
                                }
                                function l(e, t = 0, s = 1, r = 0.5, i, l = e, m = e) {
                                        if ((0, n.percent).test(t)) {
                                                t = parseFloat(t);
                                                let e = (0, o.mixNumber)(m.min, m.max, t / 100);
                                                t = e - m.min;
                                        }
                                        if ("number" != typeof t) return;
                                        let u = (0, o.mixNumber)(l.min, l.max, r);
                                        e === l && (u -= t), (e.min = a(e.min, t, s, u, i)), (e.max = a(e.max, t, s, u, i));
                                }
                                function m(e, t, [s, r, o], n, i) {
                                        l(e, t[s], t[r], t[o], t.scale, n, i);
                                }
                                let u = ["x", "scaleX", "originX"],
                                    c = ["y", "scaleY", "originY"];
                                function p(e, t, s, r) {
                                        m(e.x, t, u, s ? s.x : void 0, r ? r.x : void 0),
                                            m(e.y, t, c, s ? s.y : void 0, r ? r.y : void 0);
                                }
                        },
                        {
                                "../../utils/mix/number.mjs": "9zo4o",
                                "../../value/types/numbers/units.mjs": "alPiW",
                                "./delta-apply.mjs": "ltgsJ",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "3liBq": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s),
                                    r.export(s, "aspectRatio", () => c),
                                    r.export(s, "axisDeltaEquals", () => p),
                                    r.export(s, "axisEquals", () => a),
                                    r.export(s, "axisEqualsRounded", () => m),
                                    r.export(s, "boxEquals", () => l),
                                    r.export(s, "boxEqualsRounded", () => u),
                                    r.export(s, "isDeltaZero", () => i);
                                var o = e("./delta-calc.mjs");
                                function n(e) {
                                        return 0 === e.translate && 1 === e.scale;
                                }
                                function i(e) {
                                        return n(e.x) && n(e.y);
                                }
                                function a(e, t) {
                                        return e.min === t.min && e.max === t.max;
                                }
                                function l(e, t) {
                                        return a(e.x, t.x) && a(e.y, t.y);
                                }
                                function m(e, t) {
                                        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
                                }
                                function u(e, t) {
                                        return m(e.x, t.x) && m(e.y, t.y);
                                }
                                function c(e) {
                                        return (0, o.calcLength)(e.x) / (0, o.calcLength)(e.y);
                                }
                                function p(e, t) {
                                        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
                                }
                        },
                        { "./delta-calc.mjs": "e8SDW", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "2v8F6": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "NodeStack", () => n);
                                var o = e("../../utils/array.mjs");
                                class n {
                                        constructor() {
                                                this.members = [];
                                        }
                                        add(e) {
                                                (0, o.addUniqueItem)(this.members, e), e.scheduleRender();
                                        }
                                        remove(e) {
                                                if (
                                                    ((0, o.removeItem)(this.members, e),
                                                    e === this.prevLead && (this.prevLead = void 0),
                                                    e === this.lead)
                                                ) {
                                                        let e = this.members[this.members.length - 1];
                                                        e && this.promote(e);
                                                }
                                        }
                                        relegate(e) {
                                                let t;
                                                let s = this.members.findIndex((t) => e === t);
                                                if (0 === s) return !1;
                                                for (let e = s; e >= 0; e--) {
                                                        let s = this.members[e];
                                                        if (!1 !== s.isPresent) {
                                                                t = s;
                                                                break;
                                                        }
                                                }
                                                return !!t && (this.promote(t), !0);
                                        }
                                        promote(e, t) {
                                                let s = this.lead;
                                                if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
                                                        s.instance && s.scheduleRender(),
                                                            e.scheduleRender(),
                                                            (e.resumeFrom = s),
                                                        t && (e.resumeFrom.preserveOpacity = !0),
                                                        s.snapshot &&
                                                        ((e.snapshot = s.snapshot),
                                                            (e.snapshot.latestValues = s.animationValues || s.latestValues)),
                                                        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                                                        let { crossfade: r } = e.options;
                                                        !1 === r && s.hide();
                                                }
                                        }
                                        exitAnimationComplete() {
                                                this.members.forEach((e) => {
                                                        let { options: t, resumingFrom: s } = e;
                                                        t.onExitComplete && t.onExitComplete(),
                                                        s && s.options.onExitComplete && s.options.onExitComplete();
                                                });
                                        }
                                        scheduleRender() {
                                                this.members.forEach((e) => {
                                                        e.instance && e.scheduleRender(!1);
                                                });
                                        }
                                        removeLeadSnapshot() {
                                                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
                                        }
                                }
                        },
                        { "../../utils/array.mjs": "7RTUe", "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                iSvVs: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e, t, s) {
                                        let r = "",
                                            o = e.x.translate / t.x,
                                            n = e.y.translate / t.y,
                                            i = (null == s ? void 0 : s.z) || 0;
                                        if (
                                            ((o || n || i) && (r = `translate3d(${o}px, ${n}px, ${i}px) `),
                                            (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
                                                s)
                                        ) {
                                                let { transformPerspective: e, rotate: t, rotateX: o, rotateY: n, skewX: i, skewY: a } = s;
                                                e && (r = `perspective(${e}px) ${r}`),
                                                t && (r += `rotate(${t}deg) `),
                                                o && (r += `rotateX(${o}deg) `),
                                                n && (r += `rotateY(${n}deg) `),
                                                i && (r += `skewX(${i}deg) `),
                                                a && (r += `skewY(${a}deg) `);
                                        }
                                        let a = e.x.scale * t.x,
                                            l = e.y.scale * t.y;
                                        return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none";
                                }
                                r.defineInteropFlag(s), r.export(s, "buildProjectionTransform", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                enZnn: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "FlatTree", () => i);
                                var o = e("../../utils/array.mjs"),
                                    n = e("./compare-by-depth.mjs");
                                class i {
                                        constructor() {
                                                (this.children = []), (this.isDirty = !1);
                                        }
                                        add(e) {
                                                (0, o.addUniqueItem)(this.children, e), (this.isDirty = !0);
                                        }
                                        remove(e) {
                                                (0, o.removeItem)(this.children, e), (this.isDirty = !0);
                                        }
                                        forEach(e) {
                                                this.isDirty && this.children.sort(n.compareByDepth),
                                                    (this.isDirty = !1),
                                                    this.children.forEach(e);
                                        }
                                }
                        },
                        {
                                "../../utils/array.mjs": "7RTUe",
                                "./compare-by-depth.mjs": "9JJg7",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9JJg7": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "compareByDepth", () => o);
                                let o = (e, t) => e.depth - t.depth;
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "6sxCd": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "delay", () => i);
                                var o = e("../frameloop/sync-time.mjs"),
                                    n = e("../frameloop/frame.mjs");
                                function i(e, t) {
                                        let s = (0, o.time).now(),
                                            r = ({ timestamp: o }) => {
                                                    let i = o - s;
                                                    i >= t && ((0, n.cancelFrame)(r), e(i - t));
                                            };
                                        return (0, n.frame).read(r, !0), () => (0, n.cancelFrame)(r);
                                }
                        },
                        {
                                "../frameloop/sync-time.mjs": "kNVkV",
                                "../frameloop/frame.mjs": "7hMWE",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                jV8sq: [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                function o(e) {
                                        return e instanceof SVGElement && "svg" !== e.tagName;
                                }
                                r.defineInteropFlag(s), r.export(s, "isSVGElement", () => o);
                        },
                        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
                ],
                "5JctL": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "animateSingleValue", () => a);
                                var o = e("./motion-value.mjs"),
                                    n = e("../../value/index.mjs"),
                                    i = e("../../value/utils/is-motion-value.mjs");
                                function a(e, t, s) {
                                        let r = (0, i.isMotionValue)(e) ? e : (0, n.motionValue)(e);
                                        return r.start((0, o.animateMotionValue)("", r, t, s)), r.animation;
                                }
                        },
                        {
                                "./motion-value.mjs": "32YzD",
                                "../../value/index.mjs": "5VFp2",
                                "../../value/utils/is-motion-value.mjs": "6Wljo",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "9hJci": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "DocumentProjectionNode", () => i);
                                var o = e("./create-projection-node.mjs"),
                                    n = e("../../events/add-dom-event.mjs");
                                let i = (0, o.createProjectionNode)({
                                        attachResizeListener: (e, t) => (0, n.addDomEvent)(e, "resize", t),
                                        measureScroll: () => ({
                                                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                                                y: document.documentElement.scrollTop || document.body.scrollTop,
                                        }),
                                        checkIsScrollRoot: () => !0,
                                });
                        },
                        {
                                "./create-projection-node.mjs": "fVvOY",
                                "../../events/add-dom-event.mjs": "7Ok8R",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
                "5cfhL": [
                        function (e, t, s) {
                                var r = e("@parcel/transformer-js/src/esmodule-helpers.js");
                                r.defineInteropFlag(s), r.export(s, "layout", () => i);
                                var o = e("../../projection/node/HTMLProjectionNode.mjs"),
                                    n = e("./layout/MeasureLayout.mjs");
                                let i = { layout: { ProjectionNode: o.HTMLProjectionNode, MeasureLayout: n.MeasureLayout } };
                        },
                        {
                                "../../projection/node/HTMLProjectionNode.mjs": "kdNBA",
                                "./layout/MeasureLayout.mjs": "jkiV5",
                                "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
                        },
                ],
        },
        [],
        null,
        "parcelRequireda50"
    ),
    (globalThis.define = t);
