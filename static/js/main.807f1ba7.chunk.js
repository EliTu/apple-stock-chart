(this['webpackJsonpapple-stock-chart'] =
	this['webpackJsonpapple-stock-chart'] || []).push([
	[0],
	{
		349: function (t, e, n) {
			'use strict';
			n.r(e);
			var r,
				a,
				i,
				o,
				c,
				s,
				l,
				u,
				b,
				d,
				h,
				j = n(0),
				m = n.n(j),
				f = n(62),
				p = n.n(f),
				x = n(56),
				O = n.n(x),
				g = n(155),
				v = n(18),
				y = n(156),
				w = n.n(y),
				k = n(23),
				_ = n(26),
				C = k.b.div(
					r ||
						(r = Object(_.a)([
							'\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0rem;\n',
						]))
				),
				D = Object(k.b)(C)(
					a ||
						(a = Object(_.a)([
							'\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\n\tposition: relative;\n',
						]))
				),
				S = Object(k.b)(C)(
					i ||
						(i = Object(_.a)([
							'\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 0 0 1rem 0.5rem;\n\n\tdiv {\n\t\tfont-size: 28px;\n\t\tfont-weight: 800;\n\t\tmargin-bottom: 0.1rem;\n\t}\n\n\tspan {\n\t\tcolor: ',
							';\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t\tcolor: ',
							';\n\t\t}\n\t}\n',
						])),
					function (t) {
						return t.theme.grey_pale;
					},
					function (t) {
						return t.theme.link_blue;
					}
				),
				T = k.b.div(
					o ||
						(o = Object(_.a)([
							'\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n',
						]))
				),
				A = k.b.div(
					c ||
						(c = Object(_.a)([
							'\n\tposition: absolute;\n\ttop: 0;\n\tleft: 40%;\n\twidth: auto;\n\theight: auto;\n\tpadding: 1rem;\n\tbackground-color: ',
							';\n\tcolor: ',
							';\n\tborder-radius: 3px;\n',
						])),
					function (t) {
						return t.theme.error_red;
					},
					function (t) {
						return t.theme.main_white;
					}
				),
				M = k.b.div(
					s ||
						(s = Object(_.a)([
							'\n\theight: 2rem;\n\twidth: 30%;\n\tmargin-left: 4.4rem;\n\tdisplay: flex;\n',
						]))
				),
				L = k.b.button(
					l ||
						(l = Object(_.a)([
							'\n\theight: 100%;\n\twidth: 50%;\n\tcursor: pointer;\n\tbackground: none;\n\tborder: none;\n\tborder-bottom: ',
							';\n\ttransition: all 0.2s ease-in;\n\tbackground-color: ',
							';\n\t&:hover {\n\t\tbackground-color: ',
							';\n\t}\n',
						])),
					function (t) {
						var e = t.isSelected,
							n = t.theme;
						return e
							? '4px solid '.concat(n.stroke_blue)
							: '2px solid '.concat(n.pale_blue);
					},
					function (t) {
						var e = t.isLoading,
							n = t.theme;
						return e ? n.secondary_blue : '';
					},
					function (t) {
						return t.theme.pale_blue;
					}
				),
				B = k.b.div(
					u ||
						(u = Object(_.a)([
							'\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\theight: auto;\n\twidth: 100%;\n\tpadding: 0.3rem;\n\tborder: ',
							';\n\tbackground-color: ',
							';\n\tcolor: ',
							';\n\ttext-shadow: ',
							';\n\tfont-size: 14px;\n\tborder-radius: 3px;\n',
						])),
					function (t) {
						var e = t.theme;
						return '1px solid '.concat(e.shadow_pale);
					},
					function (t) {
						return t.theme.secondary_blue;
					},
					function (t) {
						return t.theme.main_white;
					},
					function (t) {
						var e = t.theme;
						return '0 0 1px '.concat(e.grey_pale);
					}
				),
				E = k.b.span(
					b ||
						(b = Object(_.a)([
							'\n\tdisplay: flex;\n\tjustify-content: space-between;\n',
						]))
				),
				U = k.b.span(
					d ||
						(d = Object(_.a)([
							'\n\tcolor: ',
							';\n\ttransition: all 0.2s ease-in;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: ',
							';\n\t}\n',
						])),
					function (t) {
						return t.theme.link_blue;
					},
					function (t) {
						return t.theme.main_blue;
					}
				),
				z = k.b.img(h || (h = Object(_.a)(['\n\tmargin-left: 0.5rem;\n']))),
				F = n(6);
			var H = function () {
					return Object(F.jsxs)(S, {
						children: [
							Object(F.jsx)('div', { children: 'Apple Inc' }),
							Object(F.jsxs)('span', {
								children: [
									'AAPL (',
									Object(F.jsx)('a', {
										href: 'https://www.fxempire.com/stock-exchanges/xnas',
										target: '_blank',
										rel: 'noreferrer',
										children: 'Nasdaq - US',
									}),
									')',
								],
							}),
						],
					});
				},
				I = n(351),
				P = n(352),
				K = n(356),
				G = n(175),
				J = n(176),
				N = n(184),
				V = n(71);
			var q = function (t) {
					var e = t.active,
						n = t.payload;
					if (!e || !(null === n || void 0 === n ? void 0 : n.length))
						return null;
					var r = n[0].payload,
						a = r.Close,
						i = r.Date,
						o = r.Time;
					return Object(F.jsxs)(B, {
						children: [
							Object(F.jsxs)(E, {
								children: [
									Object(F.jsx)('b', { children: 'Date/Time:' }),
									' ',
									i,
									' ',
									o,
								],
							}),
							Object(F.jsxs)(E, {
								children: [Object(F.jsx)('b', { children: 'Close:' }), ' ', a],
							}),
						],
					});
				},
				W = function (t) {
					var e = t.period,
						n = t.precision;
					return 'https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period='
						.concat(e, '&Precision=')
						.concat(
							n,
							'&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume'
						);
				},
				X = function (t, e) {
					return t.slice(0, e);
				},
				Q = {
					main_white: '#ebebebeb',
					shadow_pale: '#adcaf790',
					grey_pale: '#6e6e6ef4',
					main_blue: '#063cebcf',
					secondary_blue: '#161aec96',
					pale_blue: '#7476ff55',
					stroke_blue: '#080185f0',
					link_blue: '#686bf7ca',
					error_red: '#f333339b',
				};
			function R(t) {
				var e = t.data,
					n = t.xAxisDisplayBy,
					r = t.isError,
					a = t.isLoadingData,
					i = e.map(function (t) {
						var e = t.Close,
							n = t.StartTime,
							r = t.StartDate,
							a = X(n, -6);
						return { Date: X(r, -5), Time: a, Close: e };
					});
				return Object(F.jsx)(I.a, {
					width: '90%',
					height: 500,
					children: Object(F.jsxs)(P.a, {
						margin: { top: 20, right: 10, left: 10, bottom: 0 },
						data: i,
						style: {
							filter: r || a ? 'opacity(0.30)' : '',
							cursor: 'crosshair',
						},
						children: [
							Object(F.jsx)(K.a, { strokeDasharray: '3 3' }),
							Object(F.jsx)('defs', {
								children: Object(F.jsxs)('linearGradient', {
									id: 'colorUv',
									x1: '0',
									y1: '0',
									x2: '0',
									y2: '1',
									children: [
										Object(F.jsx)('stop', {
											offset: '40%',
											stopColor: Q.main_blue,
											stopOpacity: 0.7,
										}),
										Object(F.jsx)('stop', {
											offset: '90%',
											stopColor: Q.main_white,
											stopOpacity: 0.1,
										}),
									],
								}),
							}),
							Object(F.jsx)(G.a, {
								dataKey: 'date' === n ? 'Date' : 'Time',
								tickMargin: 5,
								fontSize: 12,
							}),
							Object(F.jsx)(J.a, {
								dataKey: 'Close',
								domain: ['dataMin', 'dataMax'],
								tickCount: 5,
								tickMargin: 5,
								allowDecimals: !0,
								fontSize: 13,
							}),
							Object(F.jsx)(N.a, {
								type: 'monotone',
								dataKey: 'Close',
								stroke: Q.stroke_blue,
								fill: 'url(#colorUv)',
								fillOpacity: 0.4,
							}),
							!r &&
								!a &&
								Object(F.jsx)(V.a, { isAnimationActive: !1, content: q }),
						],
					}),
				});
			}
			var Y = function (t) {
					var e = t.error;
					return e
						? Object(F.jsxs)(A, {
								children: ['Oh no, something went wrong: ', e],
						  })
						: null;
				},
				Z = n.p + 'static/media/spinner.3a4abdde.svg';
			var $ = function () {
					return Object(F.jsx)(z, { src: Z, alt: 'loader spinner' });
				},
				tt = [
					{ timeUnits: 'Minutes', amount: '1', label: '1 Min' },
					{ timeUnits: 'Minutes', amount: '5', label: '5 Mins' },
					{ timeUnits: 'Hours', amount: '1', label: '1 Hour' },
					{ timeUnits: 'Hours', amount: '168', label: '1 Week' },
				];
			var et = function (t) {
				var e = t.setTimeData,
					n = t.timeData,
					r = t.isLoadingData,
					a = function (t) {
						var r = t.currentTarget.innerHTML,
							a = tt.find(function (t) {
								return t.label === r;
							});
						a && a.label !== n.label && e(a);
					};
				return Object(F.jsx)(M, {
					children: tt.map(function (t) {
						var e = t.label,
							i = n.label === e;
						return Object(F.jsx)(
							L,
							{
								isSelected: i,
								isLoading: i && r,
								onClick: a,
								children: r && i ? Object(F.jsx)($, {}) : e,
							},
							e
						);
					}),
				});
			};
			var nt = function () {
					var t = Object(j.useState)([]),
						e = Object(v.a)(t, 2),
						n = e[0],
						r = e[1],
						a = Object(j.useState)(!0),
						i = Object(v.a)(a, 2),
						o = i[0],
						c = i[1],
						s = Object(j.useState)(''),
						l = Object(v.a)(s, 2),
						u = l[0],
						b = l[1],
						d = Object(j.useState)({
							timeUnits: 'Minutes',
							amount: '1',
							label: '1 Min',
						}),
						h = Object(v.a)(d, 2),
						m = h[0],
						f = h[1],
						p = Object(j.useCallback)(
							Object(g.a)(
								O.a.mark(function t() {
									var e, n;
									return O.a.wrap(
										function (t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.prev = 0),
															(t.next = 3),
															w.a.get(
																W({ precision: m.timeUnits, period: m.amount })
															)
														);
													case 3:
														(e = t.sent),
															(n = e.data),
															200 === e.status &&
																n.length &&
																(r(function () {
																	return n;
																}),
																c(function () {
																	return !1;
																}),
																b('')),
															(t.next = 13);
														break;
													case 9:
														(t.prev = 9),
															(t.t0 = t.catch(0)),
															b(t.t0.message),
															c(!1);
													case 13:
													case 'end':
														return t.stop();
												}
										},
										t,
										null,
										[[0, 9]]
									);
								})
							),
							[m.amount, m.timeUnits]
						);
					return (
						Object(j.useEffect)(
							function () {
								p();
							},
							[p]
						),
						Object(F.jsx)(k.a, {
							theme: Q,
							children: Object(F.jsxs)(D, {
								children: [
									Object(F.jsx)(Y, { error: u }),
									Object(F.jsx)(H, {}),
									Object(F.jsx)(et, {
										setTimeData: f,
										timeData: m,
										isLoadingData: o,
									}),
									Object(F.jsx)(R, {
										data: n,
										isLoadingData: o,
										isError: !!u,
										xAxisDisplayBy:
											m.label && /week/gi.test(m.label) ? 'date' : 'time',
									}),
								],
							}),
						})
					);
				},
				rt = n(177),
				at = n(178),
				it = n(179),
				ot = n(183),
				ct = (function (t) {
					Object(it.a)(n, t);
					var e = Object(ot.a)(n);
					function n() {
						var t;
						Object(rt.a)(this, n);
						for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
							a[i] = arguments[i];
						return (
							((t = e.call.apply(e, [this].concat(a))).state = {
								hasError: !1,
							}),
							t
						);
					}
					return (
						Object(at.a)(
							n,
							[
								{
									key: 'componentDidCatch',
									value: function (t, e) {
										console.error(e);
									},
								},
								{
									key: 'render',
									value: function () {
										return this.state.hasError
											? Object(F.jsx)(C, {
													children: Object(F.jsxs)(T, {
														children: [
															Object(F.jsx)('h1', {
																children: 'OH no... the app has crashed :(',
															}),
															Object(F.jsxs)('h2', {
																children: [
																	'Try to',
																	' ',
																	Object(F.jsx)(U, {
																		onClick: function () {
																			return window.location.reload();
																		},
																		children: 'refresh',
																	}),
																	' ',
																	'the page and see if it works now',
																],
															}),
														],
													}),
											  })
											: this.props.children;
									},
								},
							],
							[
								{
									key: 'getDerivedStateFromError',
									value: function (t) {
										return { hasError: !0 };
									},
								},
							]
						),
						n
					);
				})(m.a.Component),
				st = function (t) {
					t &&
						t instanceof Function &&
						n
							.e(3)
							.then(n.bind(null, 358))
							.then(function (e) {
								var n = e.getCLS,
									r = e.getFID,
									a = e.getFCP,
									i = e.getLCP,
									o = e.getTTFB;
								n(t), r(t), a(t), i(t), o(t);
							});
				};
			p.a.render(
				Object(F.jsx)(m.a.StrictMode, {
					children: Object(F.jsx)(ct, { children: Object(F.jsx)(nt, {}) }),
				}),
				document.getElementById('root')
			),
				st();
		},
	},
	[[349, 1, 2]],
]);
//# sourceMappingURL=main.807f1ba7.chunk.js.map
