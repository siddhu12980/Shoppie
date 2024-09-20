"use strict";
exports.__esModule = true;
exports.SearchItem = void 0;
exports.SearchItem = function (_a) {
    var product = _a.product;
    return (React.createElement("div", { onClick: function () { return (window.location.href = "/productlist"); }, className: " border  flex items-center justify-center cursor-pointer  w-full z-50 h-16 bg-white " }, product));
};
