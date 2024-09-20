"use strict";
exports.__esModule = true;
var AdBanner1_1 = require("../components/AdBanner1");
var BestDeals_1 = require("../components/BestDeals");
var BuyAgainComp_1 = require("../components/BuyAgainComp");
var CarouselComponent_1 = require("../components/CarouselComponent");
var DressStyleMobileComponent_1 = require("../components/DressStyleMobileComponent");
var HomeDecor_1 = require("../components/HomeDecor");
var HomeDecorMobileComponent_1 = require("../components/HomeDecorMobileComponent");
var MobileAddSection_1 = require("../components/MobileAddSection");
var RecentItem_1 = require("../components/RecentItem");
var TopDeals_1 = require("../components/TopDeals");
// import service from "/images/service.png";
// import deliver from "/images/delivery.png";
// import support from "/images/support.png";
// import SupportBar from "../components/Support";
function Home() {
    return (React.createElement("div", null,
        React.createElement(CarouselComponent_1.CarouselComponent, null),
        React.createElement(TopDeals_1["default"], null),
        React.createElement(MobileAddSection_1.MobileAddSection, null),
        React.createElement(BestDeals_1.BestDeals, null),
        React.createElement(HomeDecor_1.HomeDecor, null),
        React.createElement(HomeDecorMobileComponent_1.HomeDecorMobileComponent, null),
        React.createElement(DressStyleMobileComponent_1.DressStyleMobileComponent, null),
        React.createElement(RecentItem_1.RecentItem, null),
        React.createElement(AdBanner1_1.AdBanner1, null),
        React.createElement(BuyAgainComp_1.BuyAgainComp, null)));
}
exports["default"] = Home;
