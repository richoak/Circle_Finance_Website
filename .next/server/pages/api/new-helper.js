"use strict";
(() => {
var exports = {};
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 1341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_helper)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-helper.js

// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://meetups:marvinsroom@cluster0.psbon9s.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const helpersCollection = db.collection("helpers");
        const result = await helpersCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Helper inserted!"
        });
    }
}
/* harmony default export */ const new_helper = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1341));
module.exports = __webpack_exports__;

})();