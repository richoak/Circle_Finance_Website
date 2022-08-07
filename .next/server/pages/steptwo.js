(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 1896:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Helperdetail_box__xj8hn",
	"price": "Helperdetail_price__84klN",
	"image": "Helperdetail_image__ZiENt"
};


/***/ }),

/***/ 3618:
/***/ ((module) => {

// Exports
module.exports = {
	"steptwotitle": "Steptwo_steptwotitle__KwTtw"
};


/***/ }),

/***/ 6309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ steptwo),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(7673);
// EXTERNAL MODULE: ./components/Order/Steptwo.module.css
var Steptwo_module = __webpack_require__(3618);
var Steptwo_module_default = /*#__PURE__*/__webpack_require__.n(Steptwo_module);
// EXTERNAL MODULE: ./components/Helper/Helperdetail.module.css
var Helperdetail_module = __webpack_require__(1896);
var Helperdetail_module_default = /*#__PURE__*/__webpack_require__.n(Helperdetail_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/errandSlice.js
var errandSlice = __webpack_require__(2044);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Helper/Helperdetail.js






const HelperDetail = (props)=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const errandHandler = ()=>{
        dispatch(errandSlice/* errandActions.add */.B.add({
            "helper": props.name,
            "status": "pending",
            "price": props.price,
            "body": "body",
            "phone": props.phone,
            "image": props.image
        }));
        router.push(`/stepthree`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Helperdetail_module_default()).box,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (Helperdetail_module_default()).image,
                            src: props.image,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-9",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    props.name,
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (Helperdetail_module_default()).price,
                                        children: [
                                            "₦",
                                            props.price,
                                            "/hr"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        class: "fas fa-running"
                                    }),
                                    "  ",
                                    props.totalErrands,
                                    " Errands ran"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        class: "fas fa-car"
                                    }),
                                    " Mobile: ",
                                    props.mobile
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        class: "far fa-star"
                                    }),
                                    " Ratings: ",
                                    props.ratings,
                                    " (",
                                    props.noofreviews,
                                    " reviews)"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Brief summary: ",
                                    props.summary
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: errandHandler,
                                style: {
                                    backgroundColor: "#000",
                                    color: "#FFF"
                                },
                                type: "submit",
                                class: "btn",
                                children: "Select & Assign"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Helperdetail = (HelperDetail);

;// CONCATENATED MODULE: ./components/Helper/AllHelpers.js



const AllHelpers = (props)=>{
    console.log(props);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-4",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                for: "exampleFormControlSelect2",
                                children: "Sort By"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                class: "form-control",
                                id: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "recommended",
                                        children: "Recommended"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "lowtohigh",
                                        children: "Price (Lowest to Highest)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "lowtohigh",
                                        children: "Price (Highest to Lowest)"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-8",
                    children: props.all_helpers.map((helper)=>/*#__PURE__*/ jsx_runtime_.jsx(Helperdetail, {
                            name: helper.name,
                            totalErrands: helper.totalErrand,
                            mobile: helper.mobile,
                            summary: helper.summary,
                            image: helper.image,
                            ratings: helper.ratings,
                            noofreviews: helper.noofreviews,
                            price: helper.price,
                            phone: helper.phone
                        }, helper.id))
                })
            ]
        })
    });
};
/* harmony default export */ const Helper_AllHelpers = (AllHelpers);

;// CONCATENATED MODULE: ./components/Order/Steptwo.js





const Steptwo = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: (Steptwo_module_default()).steptwotitle,
                        children: "Select a helper to assign to your errand"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Helper_AllHelpers, {
                        all_helpers: props.helpers
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Order_Steptwo = (Steptwo);

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/steptwo.js





const SteptwoPage = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Step Two | Chores "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Find trusted hands to handle your chores"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Order_Steptwo, {
                helpers: props.helpers
            })
        ]
    });
};
// RUNS DURING THE BUILD PROCESS
async function getStaticProps() {
    // Fetch data from API
    const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://meetups:marvinsroom@cluster0.psbon9s.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const helpersCollection = db.collection("helpers");
    const helpers = await helpersCollection.find().toArray();
    client.close();
    return {
        props: {
            helpers: helpers.map((helper)=>({
                    id: helper._id.toString(),
                    name: helper.name,
                    totalErrand: helper.totalerrand,
                    mobile: helper.mobile,
                    summary: helper.summary,
                    image: helper.image,
                    ratings: helper.ratings,
                    noofreviews: helper.noofreviews,
                    price: helper.price,
                    phone: helper.phone
                }))
        },
        // IF YOU WANT NEXTJS TO UPDATE THE DATA IN SECONDS
        revalidate: 1
    };
}
/* harmony default export */ const steptwo = (SteptwoPage);


/***/ }),

/***/ 2044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ errandActions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialErrandState = {
    details: [],
    errandBody: ""
};
const errandSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "errand",
    initialState: initialErrandState,
    reducers: {
        add (state, action) {
            state.details = action.payload;
        },
        addErrand (state, action) {
            state.errandBody = action.payload;
        }
    }
});
const errandActions = errandSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errandSlice.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,673], () => (__webpack_exec__(6309)));
module.exports = __webpack_exports__;

})();