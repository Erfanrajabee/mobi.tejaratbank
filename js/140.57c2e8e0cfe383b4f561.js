(window.webpackJsonp = window.webpackJsonp || []).push([[140], {
	313: function(e, t, r) {
		e.exports = function(e) {
			var t = {};
			function r(n) {
				if (t[n])
					return t[n].exports;
				var o = t[n] = {
					i: n,
					l: !1,
					exports: {}
				};
				return e[n].call(o.exports, o, o.exports, r),
				o.l = !0,
				o.exports
			}
			return r.m = e,
			r.c = t,
			r.d = function(e, t, n) {
				r.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: n
				})
			}
			,
			r.r = function(e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}),
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}
			,
			r.t = function(e, t) {
				if (1 & t && (e = r(e)),
				8 & t)
					return e;
				if (4 & t && "object" == typeof e && e && e.__esModule)
					return e;
				var n = Object.create(null);
				if (r.r(n),
				Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}),
				2 & t && "string" != typeof e)
					for (var o in e)
						r.d(n, o, function(t) {
							return e[t]
						}
						.bind(null, o));
				return n
			}
			,
			r.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				}
				: function() {
					return e
				}
				;
				return r.d(t, "a", t),
				t
			}
			,
			r.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			,
			r.p = "",
			r(r.s = 2)
		}([function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.escapeRegExp = void 0,
			t.escapeRegExp = function(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.formatValue = void 0;
			var n = r(11);
			t.formatValue = function(e) {
				var t = e.value
				  , r = e.groupSeparator
				  , o = void 0 === r ? "," : r
				  , i = e.decimalSeparator
				  , a = void 0 === i ? "." : i
				  , u = e.turnOffSeparators
				  , c = void 0 !== u && u
				  , l = e.prefix;
				if ("" === t || void 0 === t)
					return "";
				var s = String(t);
				if ("-" === s)
					return "-";
				var f = RegExp("^-\\d+").test(s)
				  , d = a && s.includes(a)
				  , v = f ? s.replace("-", "") : s
				  , p = d ? v.split(a) : [v]
				  , g = p[0]
				  , h = p[1];
				return (f ? "-" : "") + (l || "") + (c ? g : n.addSeparators(g, o)) + (d && h ? "" + a + h : d ? "" + a : "")
			}
		}
		, function(e, t, r) {
			"use strict";
			var n = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			;
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = n(r(3));
			t.default = o.default;
			var i = r(1);
			Object.defineProperty(t, "formatValue", {
				enumerable: !0,
				get: function() {
					return i.formatValue
				}
			})
		}
		, function(e, t, r) {
			"use strict";
			var n = this && this.__assign || function() {
				return (n = Object.assign || function(e) {
					for (var t, r = 1, n = arguments.length; r < n; r++)
						for (var o in t = arguments[r])
							Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}
				).apply(this, arguments)
			}
			  , o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
				void 0 === n && (n = r),
				Object.defineProperty(e, n, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			}
			: function(e, t, r, n) {
				void 0 === n && (n = r),
				e[n] = t[r]
			}
			)
			  , i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
				Object.defineProperty(e, "default", {
					enumerable: !0,
					value: t
				})
			}
			: function(e, t) {
				e.default = t
			}
			)
			  , a = this && this.__importStar || function(e) {
				if (e && e.__esModule)
					return e;
				var t = {};
				if (null != e)
					for (var r in e)
						"default" !== r && Object.hasOwnProperty.call(e, r) && o(t, e, r);
				return i(t, e),
				t
			}
			  , u = this && this.__rest || function(e, t) {
				var r = {};
				for (var n in e)
					Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
						t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
				}
				return r
			}
			;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.CurrencyInput = void 0;
			var c = a(r(4))
			  , l = r(5);
			t.CurrencyInput = function(e) {
				var t = e.allowDecimals
				  , r = void 0 === t || t
				  , o = e.allowNegativeValue
				  , i = void 0 === o || o
				  , a = e.id
				  , s = e.name
				  , f = e.className
				  , d = e.decimalsLimit
				  , v = e.defaultValue
				  , p = e.disabled
				  , g = void 0 !== p && p
				  , h = e.maxLength
				  , m = e.value
				  , b = e.onChange
				  , y = e.onBlurValue
				  , O = e.fixedDecimalLength
				  , S = e.placeholder
				  , M = e.precision
				  , _ = e.prefix
				  , A = e.step
				  , w = e.decimalSeparator
				  , P = void 0 === w ? "." : w
				  , j = e.groupSeparator
				  , x = void 0 === j ? "," : j
				  , E = e.turnOffSeparators
				  , R = void 0 !== E && E
				  , V = e.turnOffAbbreviations
				  , D = void 0 !== V && V
				  , N = u(e, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onChange", "onBlurValue", "fixedDecimalLength", "placeholder", "precision", "prefix", "step", "decimalSeparator", "groupSeparator", "turnOffSeparators", "turnOffAbbreviations"]);
				if (P === x)
					throw new Error("decimalSeparator cannot be the same as groupSeparator");
				if (l.isNumber(P))
					throw new Error("decimalSeparator cannot be a number");
				if (l.isNumber(x))
					throw new Error("groupSeparator cannot be a number");
				var C = {
					decimalSeparator: P,
					groupSeparator: x,
					turnOffSeparators: R,
					prefix: _
				}
				  , L = {
					decimalSeparator: P,
					groupSeparator: x,
					allowDecimals: r,
					decimalsLimit: d || O || 2,
					allowNegativeValue: i,
					turnOffAbbreviations: D,
					prefix: _
				}
				  , F = void 0 !== v ? l.formatValue(n({
					value: String(v)
				}, C)) : ""
				  , T = c.useState(F)
				  , U = T[0]
				  , I = T[1]
				  , H = c.useState(0)
				  , $ = H[0]
				  , k = H[1]
				  , z = c.useRef(null)
				  , B = function(e, t) {
					var r = l.cleanValue(n({
						value: e
					}, L));
					if (!r)
						return b && b(void 0, s),
						void I("");
					if (!(h && r.replace(/-/g, "").length > h)) {
						if ("-" === r)
							return b && b(void 0, s),
							void I(e);
						var o = l.formatValue(n({
							value: r
						}, C));
						if (null != t) {
							var i = t + (o.length - e.length) || 1;
							k(i)
						}
						I(o),
						b && b(r, s)
					}
				};
				c.useEffect((function() {
					z && z.current && z.current.setSelectionRange($, $)
				}
				), [$, z]);
				var Y = void 0 !== m ? l.formatValue(n({
					value: String(m)
				}, C)) : void 0;
				return c.default.createElement("input", n({
					type: "text",
					inputMode: "decimal",
					id: a,
					name: s,
					className: f,
					onChange: function(e) {
						var t = e.target
						  , r = t.value
						  , n = t.selectionStart;
						B(r, n)
					},
					onBlur: function(e) {
						var t = e.target.value
						  , r = l.cleanValue(n({
							value: t
						}, L));
						if ("-" === r || !r)
							return y && y(void 0, s),
							void I("");
						var o = l.fixedDecimalValue(r, P, O)
						  , i = l.padTrimValue(o, P, M || O);
						b && b(i, s),
						y && y(i, s);
						var a = l.formatValue(n({
							value: i
						}, C));
						I(a)
					},
					onFocus: function() {
						return U ? U.length : 0
					},
					onKeyDown: function(e) {
						var t = e.key;
						if (A && ("ArrowUp" === t || "ArrowDown" === t)) {
							var r = Number(void 0 !== m ? m : l.cleanValue(n({
								value: U
							}, L))) || 0
							  , o = String("ArrowUp" === t ? r + Number(A) : r - Number(A));
							B(o)
						}
					},
					placeholder: S,
					disabled: g,
					value: void 0 !== Y && "-" !== U ? Y : U,
					ref: z
				}, N))
			}
			,
			t.default = t.CurrencyInput
		}
		, function(e, t) {
			e.exports = r(0)
		}
		, function(e, t, r) {
			"use strict";
			var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
				void 0 === n && (n = r),
				Object.defineProperty(e, n, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			}
			: function(e, t, r, n) {
				void 0 === n && (n = r),
				e[n] = t[r]
			}
			)
			  , o = this && this.__exportStar || function(e, t) {
				for (var r in e)
					"default" === r || t.hasOwnProperty(r) || n(t, e, r)
			}
			;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			o(r(6), t),
			o(r(10), t),
			o(r(1), t),
			o(r(12), t),
			o(r(13), t)
		}
		, function(e, t, r) {
			"use strict";
			var n = this && this.__spreadArrays || function() {
				for (var e = 0, t = 0, r = arguments.length; t < r; t++)
					e += arguments[t].length;
				var n = Array(e)
				  , o = 0;
				for (t = 0; t < r; t++)
					for (var i = arguments[t], a = 0, u = i.length; a < u; a++,
					o++)
						n[o] = i[a];
				return n
			}
			;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.cleanValue = void 0;
			var o = r(7)
			  , i = r(8)
			  , a = r(9)
			  , u = r(0);
			t.cleanValue = function(e) {
				var t = e.value
				  , r = e.groupSeparator
				  , c = void 0 === r ? "," : r
				  , l = e.decimalSeparator
				  , s = void 0 === l ? "." : l
				  , f = e.allowDecimals
				  , d = void 0 === f || f
				  , v = e.decimalsLimit
				  , p = void 0 === v ? 2 : v
				  , g = e.allowNegativeValue
				  , h = void 0 === g || g
				  , m = e.turnOffAbbreviations
				  , b = void 0 !== m && m
				  , y = e.prefix
				  , O = void 0 === y ? "" : y
				  , S = b ? [] : ["k", "m", "b"]
				  , M = t.includes("-")
				  , _ = RegExp("(\\d+)-?" + u.escapeRegExp(O)).exec(t) || []
				  , A = _[0]
				  , w = _[1]
				  , P = O ? t.replace(A, "").concat(w) : t
				  , j = i.removeSeparators(P, c)
				  , x = a.removeInvalidChars(j, n([c, s], S))
				  , E = x;
				if (!b) {
					if (S.some((function(e) {
						return e === x.toLowerCase()
					}
					)))
						return "";
					var R = o.parseAbbrValue(x, s);
					R && (E = String(R))
				}
				var V = M && h ? "-" : "";
				if (String(E).includes(s)) {
					var D = x.split(s)
					  , N = D[0]
					  , C = D[1]
					  , L = p ? C.slice(0, p) : C;
					return "" + V + N + (d ? "" + s + L : "")
				}
				return "" + V + E
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.parseAbbrValue = t.abbrValue = void 0;
			var n = r(0);
			t.abbrValue = function(e, t, r) {
				if (void 0 === t && (t = "."),
				void 0 === r && (r = 10),
				e > 999) {
					var n = ("" + e).length
					  , o = Math.pow
					  , i = o(10, r);
					return n -= n % 3,
					(Math.round(e * i / o(10, n)) / i + " kMGTPE"[n / 3]).replace(".", t)
				}
				return String(e)
			}
			;
			var o = {
				k: 1e3,
				m: 1e6,
				b: 1e9
			};
			t.parseAbbrValue = function(e, t) {
				void 0 === t && (t = ".");
				var r = new RegExp("(\\d+(" + n.escapeRegExp(t) + "\\d+)?)([kmb])$","i")
				  , i = e.match(r);
				if (i) {
					var a = i[1]
					  , u = i[3]
					  , c = o[u.toLowerCase()];
					if (a && c)
						return Number(a.replace(t, ".")) * c
				}
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.removeSeparators = void 0;
			var n = r(0);
			t.removeSeparators = function(e, t) {
				void 0 === t && (t = ",");
				var r = new RegExp(n.escapeRegExp(t),"g");
				return e.replace(r, "")
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.removeInvalidChars = void 0;
			var n = r(0);
			t.removeInvalidChars = function(e, t) {
				var r = n.escapeRegExp(t.join(""))
				  , o = new RegExp("[^\\d" + r + "]","gi");
				return e.replace(o, "")
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.fixedDecimalValue = void 0,
			t.fixedDecimalValue = function(e, t, r) {
				if (r && e.length > 1) {
					if (e.includes(t)) {
						var n = e.split(t)
						  , o = n[0];
						if ((i = n[1]).length > r)
							return "" + o + t + i.slice(0, r)
					}
					var i, a = e.length > r ? new RegExp("(\\d+)(\\d{" + r + "})") : new RegExp("(\\d)(\\d+)"), u = e.match(a);
					if (u)
						return "" + (o = u[1]) + t + u[2]
				}
				return e
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.addSeparators = void 0,
			t.addSeparators = function(e, t) {
				return void 0 === t && (t = ","),
				e.replace(/\B(?=(\d{3})+(?!\d))/g, t)
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.isNumber = void 0,
			t.isNumber = function(e) {
				return RegExp(/\d/, "gi").test(e)
			}
		}
		, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.padTrimValue = void 0,
			t.padTrimValue = function(e, t, r) {
				if (void 0 === t && (t = "."),
				!r || "" === e || void 0 === e)
					return e;
				if (!e.match(/\d/g))
					return "";
				var n = e.split(t)
				  , o = n[0]
				  , i = n[1] || "";
				if (i.length < r)
					for (; i.length < r; )
						i += "0";
				else
					i = i.slice(0, r);
				return "" + o + t + i
			}
		}
		])
	},
	523: function(e, t, r) {
		"use strict";
		var n = {
			globalLocale: "en-US",
			globalFormat: "$10000,$10000.00",
			globalRoundingMode: "HALF_EVEN",
			globalFormatRoundingMode: "HALF_AWAY_FROM_ZERO",
			globalExchangeRatesApi: {
				endpoint: void 0,
				headers: void 0,
				propertyPath: void 0
			}
		};
		function o(e) {
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			}
			: function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}
			)(e)
		}
		function i(e) {
			return function(e) {
				if (Array.isArray(e))
					return e
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
					return Array.from(e)
			}(e) || function(e, t) {
				if (!e)
					return;
				if ("string" == typeof e)
					return a(e, t);
				var r = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === r && e.constructor && (r = e.constructor.name);
				if ("Map" === r || "Set" === r)
					return Array.from(e);
				if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
					return a(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		function a(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++)
				n[r] = e[r];
			return n
		}
		var u = {
			normalizePrecision: function(e) {
				var t = e.reduce((function(e, t) {
					return Math.max(e.getPrecision(), t.getPrecision())
				}
				));
				return e.map((function(e) {
					return e.getPrecision() !== t ? e.convertPrecision(t) : e
				}
				))
			},
			minimum: function(e) {
				var t = i(e)
				  , r = t[0]
				  , n = t.slice(1)
				  , o = r;
				return n.forEach((function(e) {
					o = o.lessThan(e) ? o : e
				}
				)),
				o
			},
			maximum: function(e) {
				var t = i(e)
				  , r = t[0]
				  , n = t.slice(1)
				  , o = r;
				return n.forEach((function(e) {
					o = o.greaterThan(e) ? o : e
				}
				)),
				o
			}
		};
		function c(e) {
			return !isNaN(parseInt(e)) && isFinite(e)
		}
		function l(e) {
			return e % 2 == 0
		}
		function s(e) {
			return c(e) && !Number.isInteger(e)
		}
		function f(e) {
			return Math.abs(e) % 1 == .5
		}
		function d(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			for (var r in t)
				e.setRequestHeader(r, t[r]);
			return e
		}
		function v(e) {
			return void 0 === e
		}
		function p() {
			var e = function(e, t) {
				var r = function(e) {
					return Math.pow(10, function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
						  , t = e.toString();
						if (t.indexOf("e-") > 0)
							return parseInt(t.split("e-")[1]);
						var r = t.split(".")[1];
						return r ? r.length : 0
					}(e))
				}
				  , n = Math.max(r(e), r(t));
				return Math.round(e * n) * Math.round(t * n) / (n * n)
			}
			  , t = {
				HALF_ODD: function(e) {
					var t = Math.round(e);
					return f(e) && l(t) ? t - 1 : t
				},
				HALF_EVEN: function(e) {
					var t = Math.round(e);
					return f(e) ? l(t) ? t : t - 1 : t
				},
				HALF_UP: function(e) {
					return Math.round(e)
				},
				HALF_DOWN: function(e) {
					return f(e) ? Math.floor(e) : Math.round(e)
				},
				HALF_TOWARDS_ZERO: function(e) {
					return f(e) ? Math.sign(e) * Math.floor(Math.abs(e)) : Math.round(e)
				},
				HALF_AWAY_FROM_ZERO: function(e) {
					return f(e) ? Math.sign(e) * Math.ceil(Math.abs(e)) : Math.round(e)
				},
				DOWN: function(e) {
					return Math.floor(e)
				}
			};
			return {
				add: function(e, t) {
					return e + t
				},
				subtract: function(e, t) {
					return e - t
				},
				multiply: function(t, r) {
					return s(t) || s(r) ? e(t, r) : t * r
				},
				divide: function(e, t) {
					return e / t
				},
				modulo: function(e, t) {
					return e % t
				},
				round: function(e) {
					var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "HALF_EVEN";
					return t[r](e)
				}
			}
		}
		var g = p();
		function h(e) {
			var t = /^(?:(\$|USD)?0(?:(,)0)?(\.)?(0+)?|0(?:(,)0)?(\.)?(0+)?\s?(dollar)?)$/gm.exec(e);
			return {
				getMatches: function() {
					return null !== t ? t.slice(1).filter((function(e) {
						return !v(e)
					}
					)) : []
				},
				getMinimumFractionDigits: function() {
					var e = function(e) {
						return "." === e
					};
					return v(this.getMatches().find(e)) ? 0 : this.getMatches()[g.add(this.getMatches().findIndex(e), 1)].split("").length
				},
				getCurrencyDisplay: function() {
					return {
						USD: "code",
						dollar: "name",
						$: "symbol"
					}[this.getMatches().find((function(e) {
						return "USD" === e || "dollar" === e || "$" === e
					}
					))]
				},
				getStyle: function() {
					return v(this.getCurrencyDisplay(this.getMatches())) ? "decimal" : "currency"
				},
				getUseGrouping: function() {
					return !v(this.getMatches().find((function(e) {
						return "," === e
					}
					)))
				}
			}
		}
		function m(e) {
			var t = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
				  , t = arguments.length > 1 ? arguments[1] : void 0;
				for (var r in t)
					e = e.replace("{{".concat(r, "}}"), t[r]);
				return e
			}
			  , r = function(r, n) {
				return function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return new Promise((function(r, n) {
						var o = Object.assign(new XMLHttpRequest, {
							onreadystatechange: function() {
								4 === o.readyState && (o.status >= 200 && o.status < 400 ? r(JSON.parse(o.responseText)) : n(new Error(o.statusText)))
							},
							onerror: function() {
								n(new Error("Network error"))
							}
						});
						o.open("GET", e, !0),
						d(o, t.headers),
						o.send()
					}
					))
				}(t(e.endpoint, {
					from: r,
					to: n
				}), {
					headers: e.headers
				})
			};
			return {
				getExchangeRate: function(n, i) {
					return (a = e.endpoint,
					!Boolean(a) || "object" !== o(a) && "function" != typeof a || "function" != typeof a.then ? r(n, i) : e.endpoint).then((function(r) {
						return function e(t) {
							var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "."
							  , n = {};
							return Object.entries(t).forEach((function(t) {
								if ("object" === o(t[1])) {
									var i = e(t[1]);
									Object.entries(i).forEach((function(e) {
										n[t[0] + r + e[0]] = e[1]
									}
									))
								} else
									n[t[0]] = t[1]
							}
							)),
							n
						}(r)[t(e.propertyPath, {
							from: n,
							to: i
						})]
					}
					));
					var a
				}
			}
		}
		function b(e, t) {
			var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Error;
			if (!e)
				throw new r(t)
		}
		function y(e) {
			b(function(e) {
				return c(e) && e <= 100 && e >= 0
			}(e), "You must provide a numeric value between 0 and 100.", RangeError)
		}
		function O(e) {
			b(Number.isInteger(e), "You must provide an integer.", TypeError)
		}
		var S = p();
		Object.assign((function e(t) {
			var r = Object.assign({}, {
				amount: e.defaultAmount,
				currency: e.defaultCurrency,
				precision: e.defaultPrecision
			}, t)
			  , n = r.amount
			  , o = r.currency
			  , i = r.precision;
			O(n),
			O(i);
			var a = e.globalLocale
			  , u = e.globalFormat
			  , c = e.globalRoundingMode
			  , l = e.globalFormatRoundingMode
			  , s = Object.assign({}, e.globalExchangeRatesApi)
			  , f = function(t) {
				var r = Object.assign({}, Object.assign({}, {
					amount: n,
					currency: o,
					precision: i
				}, t), Object.assign({}, {
					locale: this.locale
				}, t));
				return Object.assign(e({
					amount: r.amount,
					currency: r.currency,
					precision: r.precision
				}), {
					locale: r.locale
				})
			}
			  , d = function(e) {
				b(this.hasSameCurrency(e), "You must provide a Dinero instance with the same currency.", TypeError)
			};
			return {
				getAmount: function() {
					return n
				},
				getCurrency: function() {
					return o
				},
				getLocale: function() {
					return this.locale || a
				},
				setLocale: function(e) {
					return f.call(this, {
						locale: e
					})
				},
				getPrecision: function() {
					return i
				},
				convertPrecision: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
					O(e);
					var r = this.getPrecision()
					  , n = e > r
					  , o = n ? S.multiply : S.divide
					  , i = n ? [e, r] : [r, e]
					  , a = Math.pow(10, S.subtract.apply(S, i));
					return f.call(this, {
						amount: S.round(o(this.getAmount(), a), t),
						precision: e
					})
				},
				add: function(t) {
					d.call(this, t);
					var r = e.normalizePrecision([this, t]);
					return f.call(this, {
						amount: S.add(r[0].getAmount(), r[1].getAmount()),
						precision: r[0].getPrecision()
					})
				},
				subtract: function(t) {
					d.call(this, t);
					var r = e.normalizePrecision([this, t]);
					return f.call(this, {
						amount: S.subtract(r[0].getAmount(), r[1].getAmount()),
						precision: r[0].getPrecision()
					})
				},
				multiply: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
					return f.call(this, {
						amount: S.round(S.multiply(this.getAmount(), e), t)
					})
				},
				divide: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
					return f.call(this, {
						amount: S.round(S.divide(this.getAmount(), e), t)
					})
				},
				percentage: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
					return y(e),
					this.multiply(S.divide(e, 100), t)
				},
				allocate: function(e) {
					var t = this;
					!function(e) {
						b(function(e) {
							return e.length > 0 && e.every((function(e) {
								return e >= 0
							}
							)) && e.some((function(e) {
								return e > 0
							}
							))
						}(e), "You must provide a non-empty array of numeric values greater than 0.", TypeError)
					}(e);
					for (var r = e.reduce((function(e, t) {
						return S.add(e, t)
					}
					)), n = this.getAmount(), o = e.map((function(e) {
						var o = Math.floor(S.divide(S.multiply(t.getAmount(), e), r));
						return n = S.subtract(n, o),
						f.call(t, {
							amount: o
						})
					}
					)), i = 0; n > 0; )
						e[i] > 0 && (o[i] = o[i].add(f.call(this, {
							amount: 1
						})),
						n = S.subtract(n, 1)),
						i += 1;
					return o
				},
				convert: function(e) {
					var t = this
					  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
					  , n = r.endpoint
					  , o = void 0 === n ? s.endpoint : n
					  , i = r.propertyPath
					  , a = void 0 === i ? s.propertyPath || "rates.{{to}}" : i
					  , u = r.headers
					  , l = void 0 === u ? s.headers : u
					  , d = r.roundingMode
					  , p = void 0 === d ? c : d
					  , g = Object.assign({}, {
						endpoint: o,
						propertyPath: a,
						headers: l,
						roundingMode: p
					});
					return m(g).getExchangeRate(this.getCurrency(), e).then((function(r) {
						return b(!v(r), 'No rate was found for the destination currency "'.concat(e, '".'), TypeError),
						f.call(t, {
							amount: S.round(S.multiply(t.getAmount(), parseFloat(r)), g.roundingMode),
							currency: e
						})
					}
					))
				},
				equalsTo: function(e) {
					return this.hasSameAmount(e) && this.hasSameCurrency(e)
				},
				lessThan: function(t) {
					d.call(this, t);
					var r = e.normalizePrecision([this, t]);
					return r[0].getAmount() < r[1].getAmount()
				},
				lessThanOrEqual: function(t) {
					d.call(this, t);
					var r = e.normalizePrecision([this, t]);
					return r[0].getAmount() <= r[1].getAmount()
				},
				greaterThan: function(t) {
					d.call(this, t);
					var r = e.normalizePrecision([this, t]);
					return r[0].getAmount() > r[1].getAmount()
				},
				greaterThanOrEqual: function(t) {
					d.call(this, t);
					var r = e.normalizePrecision([this, t]);
					return r[0].getAmount() >= r[1].getAmount()
				},
				isZero: function() {
					return 0 === this.getAmount()
				},
				isPositive: function() {
					return this.getAmount() >= 0
				},
				isNegative: function() {
					return this.getAmount() < 0
				},
				hasSubUnits: function() {
					return 0 !== S.modulo(this.getAmount(), Math.pow(10, i))
				},
				hasCents: function() {
					return 0 !== S.modulo(this.getAmount(), Math.pow(10, i))
				},
				hasSameCurrency: function(e) {
					return this.getCurrency() === e.getCurrency()
				},
				hasSameAmount: function(t) {
					var r = e.normalizePrecision([this, t]);
					return r[0].getAmount() === r[1].getAmount()
				},
				toFormat: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u
					  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l
					  , r = h(e);
					return this.toRoundedUnit(r.getMinimumFractionDigits(), t).toLocaleString(this.getLocale(), {
						currencyDisplay: r.getCurrencyDisplay(),
						useGrouping: r.getUseGrouping(),
						minimumFractionDigits: r.getMinimumFractionDigits(),
						style: r.getStyle(),
						currency: this.getCurrency()
					})
				},
				toUnit: function() {
					return S.divide(this.getAmount(), Math.pow(10, i))
				},
				toRoundedUnit: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l
					  , r = Math.pow(10, e);
					return S.divide(S.round(S.multiply(this.toUnit(), r), t), r)
				},
				toObject: function() {
					return {
						amount: n,
						currency: o,
						precision: i
					}
				},
				toJSON: function() {
					return this.toObject()
				}
			}
		}
		), {
			defaultAmount: 0,
			defaultCurrency: "USD",
			defaultPrecision: 2
		}, n, u)
	}
}]);
