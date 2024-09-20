"use strict";
exports.__esModule = true;
var CategoryNav_1 = require("../components/CategoryNav");
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "flex flex-col min-h-screen  w-full  justify-between items-center " },
        React.createElement("div", { className: "w-full flex flex-col gap-5  " },
            React.createElement(CategoryNav_1.CategoryNav, null)),
        children));
}
exports["default"] = RootLayout;
