webpackJsonp([2],{

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = {}\n\n/* styles */\n__webpack_require__(45)\n\n/* script */\n__vue_exports__ = __webpack_require__(32)\n\n/* template */\nvar __vue_template__ = __webpack_require__(40)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"E:\\\\adminfyy\\\\src\\\\module\\\\demo.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-04256c9f\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-04256c9f\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] demo.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/module/demo.vue\n// module id = 27\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/module/demo.vue?");

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n\tname: 'demo',\n\tdata: function data() {\n\t\treturn {};\n\t}\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/module/demo.vue\n// module id = 32\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/module/demo.vue?./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0");

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(2)();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.blog{\\n\\ttext-align: left;\\n\\tmargin: .3rem .5rem;\\n}\\n.switch{\\n\\t-webkit-appearance: none;\\n\\tappearance: none;\\n\\tposition: relative;\\n\\twidth: 2rem;\\n\\theight: 1rem;\\n\\toutline: none;\\n\\tbackground: black;\\n}\\n.switch::before,.switch::after{\\n\\tposition: absolute;\\n\\tcontent: \\\" \\\";\\n\\tleft: 0px;\\n\\ttop: 0px;\\n}\\n.switch[value=\\\"on\\\"] {\\n\\tbackground-color: skyblue;\\n}\\n.badge {\\n\\tborder-radius: 1rem;\\n\\tbackground: grey;\\n\\tdisplay: inline-block;\\n\\tpadding: .3rem;\\n\\tcolor: white;\\n}\\n.badge-primary {\\n\\tbackground: skyblue;\\n}\\n.badge-success {\\n\\tbackground: green;\\n}\\n.badge-warning {\\n\\tbackground: red;\\n}\\n.spinner{\\n\\tdisplay: inline-block;\\t\\n\\twidth: 1rem;\\n\\theight: 1rem;\\n\\tborder: 2px solid #ccc;\\n\\tborder-radius: 50%;\\n\\tborder-bottom: none;\\n\\tbox-sizing: border-box;\\n\\tanimation: rotate-all-the-time .8s infinite linear;\\n}\\n.f-large{\\n\\twidth: 1.5rem;\\n\\theight: 1.5rem;\\n}\\n.f-small{\\n\\twidth: .8rem;\\n\\theight: .8rem;\\n}\\n@keyframes rotate-all-the-time {\\nfrom {\\n\\t\\ttransform: rotate(0deg);\\n}\\nto {\\n\\t\\ttransform: rotate(360deg);\\n}\\n}\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-04256c9f!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/module/demo.vue\n// module id = 36\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/module/demo.vue?./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-04256c9f!./~/vue-loader/lib/selector.js?type=styles&index=0");

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;\n  return _vm._m(0)\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;\n  return _c('div', {\n    staticClass: \"blog\"\n  }, [_c('h3', [_vm._v(\"\\n\\tWHat do u Expect ? Form ?\\n\\t\")]), _vm._v(\" \"), _c('form', [_c('form'), _vm._v(\" \"), _c('input', {\n    staticClass: \"form-control\",\n    attrs: {\n      \"type\": \"text\"\n    }\n  })]), _vm._v(\" \"), _c('h3', [_vm._v(\"Badge ?\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"badge badge-primary\"\n  }, [_vm._v(\"\\n\\t\\tBadge\\n\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"badge badge-success\"\n  }, [_vm._v(\"\\n\\t\\tBadge\\n\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"badge badge-warning\"\n  }, [_vm._v(\"\\n\\t\\tBadge\\n\\t\")]), _vm._v(\" \"), _c('h3', [_vm._v(\"Spinner ?\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"spinner f-small\"\n  }), _vm._v(\" \"), _c('div', {\n    staticClass: \"spinner\"\n  }), _vm._v(\" \"), _c('div', {\n    staticClass: \"spinner f-large\"\n  }), _vm._v(\" \"), _c('h3', [_vm._v(\"switch?\")]), _vm._v(\" \"), _c('input', {\n    staticClass: \"switch\",\n    attrs: {\n      \"type\": \"checkbox\"\n    }\n  }), _vm._v(\"\\n\\t\\tmake a switch using presudo[impossible]\\n\\t\")])\n}]}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-04256c9f\", module.exports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/template-compiler.js?id=data-v-04256c9f!./~/vue-loader/lib/selector.js?type=template&index=0!./src/module/demo.vue\n// module id = 40\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/module/demo.vue?./~/vue-loader/lib/template-compiler.js?id=data-v-04256c9f!./~/vue-loader/lib/selector.js?type=template&index=0");

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(36);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(3)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04256c9f!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demo.vue\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04256c9f!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demo.vue\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-04256c9f!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/module/demo.vue\n// module id = 45\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/module/demo.vue?./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-04256c9f!./~/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }

});