webpackJsonp([3],{

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = {}\n\n/* styles */\n__webpack_require__(44)\n\n/* script */\n__vue_exports__ = __webpack_require__(30)\n\n/* template */\nvar __vue_template__ = __webpack_require__(39)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"E:\\\\adminfyy\\\\src\\\\module\\\\about.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-03da9681\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-03da9681\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/module/about.vue\n// module id = 25\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/module/about.vue?");

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'about',\n  data: function data() {\n    return {\n      msg: 'About Page'\n    };\n  },\n\n  computed: {\n    colorful: function colorful() {\n      var colorArray = [];\n      for (var i = 0, color = '#000'; i < 255; i++) {\n        color = 'rgb(' + i + ',' + i + ',' + i;\n        colorArray.push(color);\n      };\n      return colorArray;\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/module/about.vue\n// module id = 30\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/module/about.vue?./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0");

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(2)();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.square{\\n\\t\\twidth: 50px;\\n\\t\\theight: 50px;\\n\\t\\tdisplay: inline-block;\\n\\t\\tmargin: 0px 0px;\\n\\t\\tpadding: 0px 0px;\\n\\t\\tbackground-size: 100% 100%;\\n}\\n.fl{\\n    position: absolute;\\n    background: rgba(128,128,128,0.5);\\n    color: white;\\n    left: 50%;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-03da9681!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/module/about.vue\n// module id = 35\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/module/about.vue?./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-03da9681!./~/vue-loader/lib/selector.js?type=styles&index=0");

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;\n  return _c('div', [_c('h5', {\n    staticClass: \"fl\"\n  }, [_vm._v(_vm._s(_vm.msg))]), _vm._v(\" \"), _vm._v(\" \"), _vm._l((_vm.colorful), function(color) {\n    return _c('div', {\n      staticClass: \"square\",\n      style: ({\n        'background-color': color\n      })\n    })\n  })], true)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-03da9681\", module.exports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/template-compiler.js?id=data-v-03da9681!./~/vue-loader/lib/selector.js?type=template&index=0!./src/module/about.vue\n// module id = 39\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/module/about.vue?./~/vue-loader/lib/template-compiler.js?id=data-v-03da9681!./~/vue-loader/lib/selector.js?type=template&index=0");

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(35);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(3)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03da9681!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about.vue\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03da9681!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about.vue\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-03da9681!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/module/about.vue\n// module id = 44\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/module/about.vue?./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-03da9681!./~/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }

});