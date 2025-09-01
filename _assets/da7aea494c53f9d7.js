(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [66905],
  {
    /***/ 975058: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var bCc = function (a) {
            return d8(function (b) {
              return e8("div", {
                className: "gcYy_A",
                children: e8(__c.BB, {
                  l3: "both",
                  children: ({ width: c, height: d }) =>
                    e8(a.Hi, {
                      fill: b.fill,
                      Nb: c,
                      yc: d,
                      be: void 0,
                      animation: void 0,
                      $D: !1,
                      da: void 0,
                      ga: void 0,
                    }),
                }),
              });
            });
          },
          cCc = function (a) {
            a.xN && (a.xN(), (a.xN = null));
            const b = a.props.Olb;
            b.forEach((c) => {
              window.addEventListener(c, a.kMa);
            });
            a.xN = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.kMa);
              });
            };
          },
          jCc = function (a) {
            const b = dCc((d) => {
                const e = eCc(() => {
                  a.Vs.h0(d.url);
                }, [d.url]);
                return e8(__c.fv, {
                  url: d.url,
                  store: a.Qw,
                  ep: a.Vs,
                  zz: a.zz,
                  Na: a.Na,
                  RR: a.tf > 10,
                  Hm: d.Hm ?? !1,
                  Ag: e,
                  wv: d.wv,
                  sL: d.sL,
                });
              }),
              c = dCc(function (d) {
                const [{ store: e, Ca: f }] = fCc(() => {
                  const g = new gCc(),
                    h = new hCc(g);
                  return { store: g, Ca: h };
                });
                return e8(iCc, {
                  W6: f.reset,
                  children: e8(__c.XOb, {
                    Bsb: f,
                    Csb: e,
                    RXa: a.Qw.contains(d.url),
                    children: ({ Hm: g }) => e8(b, { ...d, Hm: g }),
                  }),
                });
              });
            return dCc((d) =>
              d.Bhb && a.Na?.status !== 2 ? e8(c, { ...d }) : e8(b, { ...d })
            );
          },
          lCc = function (a) {
            const b = a.Ra;
            return d8(function (c) {
              var d = c.Nwa,
                e = c.fontWeight;
              const f = c.$ra,
                g = c.Ec,
                h = c.ora,
                k = c.ariaInvalid,
                l = c.className,
                m = c.disabled,
                n = c.id,
                p = c.name,
                q = c.onBlur,
                r = c.onFocus,
                t = c.onChange,
                v = c.placeholder,
                w = c.p3a,
                z = c.type,
                A = c.value;
              var C = c.Ni;
              c = c.borderRadius;
              var B;
              if ((B = d))
                (d = __c.eo(d)), b.Az([d], { wt: !0 }), (B = __c.Ao(b, d));
              e = {
                color: C,
                borderRadius: c,
                fontFamily: B,
                fontWeight: e && __c.mo(e),
              };
              return e8("div", {
                className: "BHOPhg",
                children: e8("input", {
                  "aria-describedby": g,
                  "aria-errormessage": h,
                  "aria-invalid": k,
                  className: kCc(l, ["_6Yde8g", w && "sR0SUA"]),
                  disabled: m,
                  id: n,
                  name: p,
                  onBlur: q,
                  onFocus: r,
                  onChange: t,
                  placeholder: v,
                  type: z,
                  value: A,
                  style: {
                    ...e,
                    "--srRiKA": w,
                    "--oiOG3Q": f?.default,
                    "--oGOcXA": f?.mG,
                    "--UBd2ow": f?.focus,
                  },
                }),
              });
            });
          },
          mCc = function () {
            return () => e8(__c.rT, { mediaType: "embed", failed: !1 });
          },
          nCc = function (a) {
            return d8(function (b) {
              return e8("div", {
                className: "oUJNhQ",
                children: e8(a.Le, {
                  text: b.text,
                  animation: void 0,
                  Yc: "middle",
                  na: void 0,
                  Ya: void 0,
                  Je: [],
                  writingMode: 1,
                }),
              });
            });
          },
          oCc = function (a) {
            const b = a.Ra;
            return d8(function (c) {
              var d = c.Nwa,
                e = c.fontWeight;
              const f = c.$ra,
                g = c.Ec,
                h = c.ora,
                k = c.ariaInvalid,
                l = c.className,
                m = c.disabled,
                n = c.id,
                p = c.name,
                q = c.onBlur,
                r = c.onFocus,
                t = c.onChange,
                v = c.placeholder,
                w = c.p3a,
                z = c.rows,
                A = c.value;
              var C = c.Ni;
              c = c.borderRadius;
              var B;
              if ((B = d))
                (d = __c.eo(d)), b.Az([d], { wt: !0 }), (B = __c.Ao(b, d));
              e = {
                color: C,
                borderRadius: c,
                fontFamily: B,
                fontWeight: e && __c.mo(e),
              };
              return e8("div", {
                className: "BHOPhg",
                children: e8("textarea", {
                  "aria-describedby": g,
                  "aria-errormessage": h,
                  "aria-invalid": k,
                  className: kCc(l, ["_6Yde8g", w && "sR0SUA"]),
                  disabled: m,
                  id: n,
                  name: p,
                  onBlur: q,
                  onFocus: r,
                  onChange: t,
                  placeholder: v,
                  rows: z,
                  style: {
                    ...e,
                    "--srRiKA": w,
                    "--oiOG3Q": f?.default,
                    "--oGOcXA": f?.mG,
                    "--UBd2ow": f?.focus,
                  },
                  value: A,
                }),
              });
            });
          },
          e8 = __webpack_require__(31968).jsx;
        var f8 = __webpack_require__(845212),
          pCc = f8.Component,
          d8 = f8.memo,
          eCc = f8.useCallback,
          fCc = f8.useState;
        var qCc = __webpack_require__(186901),
          rCc = qCc.sH,
          sCc = qCc.XI;
        var dCc = __webpack_require__(647370).PA;
        var tCc = __webpack_require__,
          uCc = tCc(208463),
          kCc = tCc.n_x(uCc)();
        var vCc = class extends pCc {
          render() {
            const {
              children: a,
              component: b = "div",
              SBb: c,
              mja: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.nfb;
                return f;
              }, {}));
            return e8(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.mja && cCc(this);
          }
          componentDidUpdate() {
            this.props.mja && cCc(this);
          }
          componentWillUnmount() {
            this.xN && (this.xN(), (this.xN = null));
          }
          constructor(...a) {
            super(...a);
            this.wqa = this.xN = null;
            this.nfb = (b) => {
              this.wqa = b.nativeEvent;
            };
            this.kMa = (b) => {
              const c = this.props.mja,
                d = this.wqa === b;
              c && !d && c(b);
              this.wqa = null;
            };
          }
        };
        var iCc = (a) =>
          e8(vCc, {
            SBb: ["onMouseDown", "onTouchStart"],
            Olb: ["mousedown", "touchstart"],
            mja: a.W6,
            children: a.children,
          });
        var gCc = class {
            static D(a) {
              __c.N(a, { Hm: rCc.ref });
            }
            constructor() {
              this.Hm = (gCc.D(this), !0);
            }
          },
          hCc = class {
            static D(a) {
              __c.N(a, {
                onDoubleClick: sCc.bound,
                onTouchEnd: sCc.bound,
                reset: sCc.bound,
              });
            }
            onDoubleClick() {
              this.store.Hm = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.MS
                  ? (window.clearTimeout(this.MS),
                    (this.MS = void 0),
                    (this.store.Hm = !1))
                  : (this.MS = window.setTimeout(
                      () => (this.MS = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Hm = !0;
            }
            aV() {
              this.MS && window.clearTimeout(this.MS);
            }
            constructor(a) {
              this.store = a;
              this.MS = (hCc.D(this), void 0);
            }
          };
        __c.ZE = {};
        __c.ZE.cQb = jCc;
        __c.ZE.fQb = mCc;
        __c.ZE.wsb = function (a) {
          const b = jCc({
              tf: a.tf,
              zz: (h, k) =>
                a.J.error(h, {
                  Qe: "widget: ",
                  extra: new Map(Object.entries(k)),
                }),
              Qw: a.Qw,
              Vs: a.Vs,
              Na: a.Na,
            }),
            c = mCc(),
            d = nCc({ Le: a.Le }),
            e = bCc({ Hi: a.Jf }),
            f = lCc({ Ra: a.Ra }),
            g = oCc({ Ra: a.Ra });
          return { wpa: b, sMb: c, Vg: d, jn: e, maa: f, Spa: g };
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/da7aea494c53f9d7.js.map
