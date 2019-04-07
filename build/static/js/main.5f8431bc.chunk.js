(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        38: function(e, t, a) {
            e.exports = a(84)
        },
        40: function(e, t, a) {},
        78: function(e, t, a) {},
        79: function(e, t, a) {},
        83: function(e, t, a) {},
        84: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                s = a.n(n),
                i = a(2),
                r = a(3),
                c = a(9),
                o = a(8),
                l = a(10),
                u = (a(40), a(30)),
                d = a(11),
                m = a(31),
                h = a.n(m),
                p = function() {
                    function e(t) {
                        var a = this;
                        Object(i.a)(this, e), this.http = t, this.http.interceptors.response.use(function(e) {
                            return e
                        }, function(e) {
                            return a.statusCodeInterceptor(e)
                        }), this.listeners = {}
                    }
                    return Object(r.a)(e, [{
                        key: "get",
                        value: function(e, t) {
                            return this.http.get(e, t)
                        }
                    }, {
                        key: "useToken",
                        value: function(e) {
                            return this.http.defaults.headers.common.Authorization = e, this
                        }
                    }, {
                        key: "post",
                        value: function(e, t, a) {
                            return this.http.post(e, t, a)
                        }
                    }, {
                        key: "put",
                        value: function(e, t, a) {
                            return this.http.put(e, t || {}, a)
                        }
                    }, {
                        key: "delete",
                        value: function(e, t) {
                            return this.http.delete(e, t)
                        }
                    }, {
                        key: "onResponseStatus",
                        value: function(e, t) {
                            this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
                        }
                    }, {
                        key: "statusCodeInterceptor",
                        value: function(e) {
                            e.response && this.listeners[e.response.status] && this.listeners[e.response.status].forEach(function(t) {
                                t(e)
                            })
                        }
                    }]), e
                }(),
                b = h.a.create({
                    baseURL: "https://site-indexer-api.herokuapp.com"
                });
            b.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", b.defaults.headers.common["Access-Control-Allow-Origin"] = "*", b.defaults.headers.common["Content-Type"] = "application/vnd.api+json";
            var g = new p(b),
                v = function() {
                    function e() {
                        Object(i.a)(this, e)
                    }
                    return Object(r.a)(e, null, [{
                        key: "getAll",
                        value: function() {
                            return g.get("/sites")
                        }
                    }, {
                        key: "getById",
                        value: function(e) {
                            return g.get("".concat("/sites", "/").concat(e))
                        }
                    }, {
                        key: "save",
                        value: function(e) {
                            return g.post("/sites", {
                                data: {
                                    type: "sites",
                                    attributes: {
                                        url: e
                                    }
                                }
                            })
                        }
                    }]), e
                }(),
                f = a(17),
                y = a(32),
                E = a.n(y),
                j = a(33),
                O = a.n(j);

            function k() {
                var e = Object(u.a)(["\n            position: absolute;\n            top: 40%;\n            left: 40%;\n            width: 100%;\n            height: 100%;\n            z-index: 10;\n            background-color: rgba(0,0,0,0.5);\n        "]);
                return k = function() {
                    return e
                }, e
            }
            var N = function(e) {
                    function t(e) {
                        var a;
                        return Object(i.a)(this, t), (a = Object(c.a)(this, Object(o.a)(t).call(this, e))).state = {
                            siteUrl: "",
                            loading: !1,
                            error: !1
                        }, a.handleChange = a.handleChange.bind(Object(d.a)(a)), a.handleSubmit = a.handleSubmit.bind(Object(d.a)(a)), a.createSite = a.createSite.bind(Object(d.a)(a)), a.handleKeyPress = a.handleKeyPress.bind(Object(d.a)(a)), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "createSite",
                        value: function() {
                            var e = this.state.siteUrl;
                            return "h" !== e[0] && (e = "https://" + e), v.save(e)
                        }
                    }, {
                        key: "handleChange",
                        value: function(e) {
                            O()().test(e.target.value) ? this.setState({
                                error: !1
                            }) : this.setState({
                                error: !0
                            }), this.setState({
                                siteUrl: e.target.value
                            })
                        }
                    }, {
                        key: "handleKeyPress",
                        value: function(e) {
                            "Enter" === e.key && this.handleSubmit()
                        }
                    }, {
                        key: "handleSubmit",
                        value: function() {
                            var e = this;
                            this.setState({
                                loading: !0
                            }), this.createSite().then(function(t) {
                                e.setState({
                                    loading: !1
                                }), e.props.history.push("/details/".concat(t.data.resource.id))
                            }).catch(function(e) {
                                alert("Desculpe, nenhum resultado encontrado a partir da URL informada.")
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = Object(f.css)(k());
                            return s.a.createElement("div", {
                                style: {
                                    position: "fixed",
                                    height: "100%",
                                    width: "100%",
                                    display: "table"
                                }
                            }, s.a.createElement(E.a, {
                                css: e,
                                sizeUnit: "px",
                                size: 150,
                                color: "#123abc",
                                loading: this.state.loading
                            }), s.a.createElement("div", {
                                className: "padding pull-right"
                            }, s.a.createElement("a", {
                                className: "github-button margin-top",
                                href: "https://github.com/nywton/site-index-ui",
                                "data-size": "large",
                                "data-show-count": "true",
                                "aria-label": "Star ntkme/github-buttons on GitHub"
                            }, "Star")), s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "demo-headline"
                            }, s.a.createElement("h1", {
                                className: "demo-logo"
                            }, s.a.createElement("div", {
                                className: "logo"
                            }), "Site Indexer", s.a.createElement("small", null, "Search tags"))), s.a.createElement("div", {
                                className: "row"
                            }, s.a.createElement("div", {
                                className: "col-lg-10"
                            }, s.a.createElement("div", {
                                className: "form-group" + (this.state.error ? "has-error" : "")
                            }, s.a.createElement("input", {
                                type: "text",
                                className: "form-control",
                                id: "search",
                                onChange: this.handleChange,
                                value: this.state.value,
                                placeholder: "Paste your URL..."
                            }))), s.a.createElement("div", {
                                className: "col-lg-2"
                            }, s.a.createElement("button", {
                                onKeyPress: this.handleKeyPress,
                                disabled: this.state.loading || "" === this.state.siteUrl,
                                type: "button",
                                onClick: this.handleSubmit,
                                className: "btn btn-block btn-lg btn-primary"
                            }, "Go!")))))
                        }
                    }]), t
                }(n.Component),
                w = function(e) {
                    function t() {
                        return Object(i.a)(this, t), Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement("div", {
                                style: {
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    display: "table"
                                }
                            })
                        }
                    }]), t
                }(n.Component),
                S = function(e) {
                    function t() {
                        return Object(i.a)(this, t), Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement("div", {
                                className: "navbar navbar-default navbar-static-top",
                                role: "navigation"
                            }, s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "navbar-header"
                            }, s.a.createElement("button", {
                                type: "button",
                                className: "navbar-toggle",
                                "data-toggle": "collapse",
                                "data-target": ".navbar-collapse"
                            }, s.a.createElement("span", {
                                className: "sr-only"
                            }, "Toggle navigation")), s.a.createElement("a", {
                                className: "navbar-brand",
                                href: "/"
                            }, "Site Indexer")), s.a.createElement("div", {
                                className: "navbar-collapse collapse"
                            }, s.a.createElement("ul", {
                                className: "nav navbar-nav navbar-right"
                            }, s.a.createElement("div", {
                                className: "padding pull-right"
                            })))))
                        }
                    }]), t
                }(n.Component),
                C = function(e) {
                    function t(e) {
                        var a;
                        return Object(i.a)(this, t), (a = Object(c.a)(this, Object(o.a)(t).call(this, e))).state = {
                            site: {
                                included: []
                            },
                            tags: [{
                                name: "H1",
                                opened: !1
                            }, {
                                name: "H2",
                                opened: !1
                            }, {
                                name: "H3",
                                opened: !1
                            }, {
                                name: "a",
                                opened: !1
                            }],
                            loading: !1
                        }, a.getTags = a.getTags.bind(Object(d.a)(a)), a.toggleTag = a.toggleTag.bind(Object(d.a)(a)), a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentWillMount",
                        value: function() {
                            var e = this,
                                t = this.props.match.params.id;
                            v.getById(t).then(function(t) {
                                e.setState({
                                    site: t.data
                                })
                            })
                        }
                    }, {
                        key: "getTags",
                        value: function(e) {
                            return this.state.site.included.filter(function(t) {
                                return t.attributes.name.toLocaleLowerCase() === e.name.toLowerCase()
                            })
                        }
                    }, {
                        key: "toggleTag",
                        value: function(e) {
                            var t = this.state.tags;
                            if (e.preventDefault(), t[e.target.id]) {
                                var a = t.find(function(a) {
                                    return a.name === (t[e.target.id] || {}).name
                                });
                                a.opened = !a.opened, this.setState({
                                    tags: t
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return s.a.createElement("div", {
                                style: {
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    display: "table"
                                }
                            }, s.a.createElement(S, null), s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "row"
                            }, s.a.createElement("div", {
                                className: "wrapper"
                            }, s.a.createElement("ul", {
                                className: "accordion-list"
                            }, this.state.tags.map(function(t, a) {
                                return s.a.createElement("li", {
                                    className: "accordion-list__item",
                                    key: a
                                }, s.a.createElement("div", Object.assign({
                                    onClick: function(t) {
                                        return e.toggleTag(t)
                                    }
                                }, {
                                    className: "accordion-item, ".concat(t.opened && "accordion-item--opened")
                                }), s.a.createElement("div", Object.assign({
                                    id: a
                                }, {
                                    className: "accordion-item__line"
                                }), s.a.createElement("h3", {
                                    className: "accordion-item__title"
                                }, "a" === t.name ? "Links" : t.name, ": ", e.getTags(t).length), s.a.createElement("span", {
                                    className: "accordion-item__icon"
                                })), s.a.createElement("div", {
                                    className: "accordion-item__inner"
                                }, s.a.createElement("div", {
                                    className: "accordion-item__content"
                                }, e.getTags(t).map(function(e) {
                                    return s.a.createElement("p", {
                                        className: "accordion-item__paragraph"
                                    }, e.attributes.content)
                                })))))
                            }))))))
                        }
                    }]), t
                }(n.Component),
                _ = a(34),
                T = a(12),
                x = function(e) {
                    function t() {
                        return Object(i.a)(this, t), Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement("div", {
                                className: "App"
                            }, s.a.createElement(_.a, null, s.a.createElement(T.c, null, s.a.createElement(T.a, {
                                exact: !0,
                                path: "/",
                                component: N
                            }), s.a.createElement(T.a, {
                                path: "/sites",
                                component: w
                            }), s.a.createElement(T.a, {
                                path: "/details/:id",
                                component: C
                            }))))
                        }
                    }]), t
                }(n.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            a(78), a(79);
            var L = a(37),
                U = a.n(L);
            a(83);
            U.a.render(s.a.createElement(x, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
                e.unregister()
            })
        }
    },
    [
        [38, 1, 2]
    ]
]);