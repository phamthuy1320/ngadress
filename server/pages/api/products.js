"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 4966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_mocks_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1256);
/* harmony import */ var src_mocks_categories_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7130);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


function handler(req, res) {
    if (req.query?.category) {
        const category = src_mocks_categories_json__WEBPACK_IMPORTED_MODULE_1__.find((cate)=>cate.id === req.query?.category);
        const products = src_mocks_products_json__WEBPACK_IMPORTED_MODULE_0__.filter((item)=>item.category === req.query?.category);
        if (!category) return res.status(404).json({});
        res.status(200).json({
            category_id: category.id,
            category_name: category.name,
            products
        });
    }
    res.status(200).json(src_mocks_products_json__WEBPACK_IMPORTED_MODULE_0__);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [575], () => (__webpack_exec__(4966)));
module.exports = __webpack_exports__;

})();