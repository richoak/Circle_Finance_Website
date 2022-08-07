exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 1300:
/***/ ((module) => {

// Exports
module.exports = {
	"signuptitle": "Signup_signuptitle__moR_F",
	"signupbuttonparagraph": "Signup_signupbuttonparagraph__o2W3d"
};


/***/ }),

/***/ 3679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHttp = ()=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const sendRequest = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (requestConfig, applyData)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });
            if (!response.ok) {
                throw new Error("Request failed!");
            }
            const data = await response.json();
            // console.log(data)
            applyData(data);
        } catch (err) {
            console.log(err);
            setError(err.message || "Something went wrong");
        }
        setIsLoading(false);
    }, []);
    return {
        isLoading,
        error,
        sendRequest
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHttp);


/***/ })

};
;