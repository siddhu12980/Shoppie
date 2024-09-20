"use client";
"use strict";
exports.__esModule = true;
exports.SearchBar = void 0;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var SearchItem_1 = require("./SearchItem");
exports.SearchBar = function () {
    var _a = react_1.useState(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = react_1.useState(false), showSearch = _b[0], setShowSearch = _b[1];
    var handleInputChange = function (event) {
        setShowSearch(true);
        setInputValue(event.target.value);
    };
    return (React.createElement("div", { className: " relative" },
        React.createElement("div", { className: "flex  items-center border border-black rounded-3xl px-4 py-2 w-full " },
            !inputValue && React.createElement(fa_1.FaSearch, { className: "text-gray-500 mr-2" }),
            React.createElement("input", { type: "text", value: inputValue, onChange: handleInputChange, placeholder: "Search here...", className: "flex-grow bg-transparent outline-none" })),
        showSearch && inputValue.length > 0 && React.createElement("div", { className: " absolute w-full h-auto text-center z-50" }, [1, 2, 3, 4].map(function (i) { return (React.createElement(SearchItem_1.SearchItem, { product: i, key: i })); }))));
};
