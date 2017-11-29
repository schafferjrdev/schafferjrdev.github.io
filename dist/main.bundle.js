webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppHttpService = (function () {
    function AppHttpService(http) {
        this.http = http;
        this.options = {};
    }
    AppHttpService.prototype.setAccessToken = function (token) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        this.options.headers = header;
    };
    //  http://200.19.181.126/org-laravel/index.php/api/
    AppHttpService.prototype.client = function (url) {
        this.url = 'http://200.19.181.126/org-laravel/index.php/api/' + url;
        return this;
    };
    AppHttpService.prototype.builder = function (resource) {
        this.url = 'http://200.19.181.126/org-laravel/index.php/api/' + resource;
        return this;
    };
    AppHttpService.prototype.list = function (options) {
        if (options === void 0) { options = {}; }
        var url = this.url;
        if (options.limit === undefined) {
            options.limit = 100;
        }
        if (options.page === undefined) {
            options.page = 1;
        }
        url += '?limit=' + options.limit;
        url += '&page=' + options.page;
        return this.http.get(url, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.view = function (id) {
        return this.http.get(this.url + '/' + id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.social = function () {
        return this.http.get(this.url, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.insert = function (data) {
        return this.http.post(this.url, data, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    return AppHttpService;
}());
AppHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AppHttpService);

var _a;
//# sourceMappingURL=app-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Menu */\r\n\r\n.menu{\r\n\twidth: 1050px;\r\n\theight: 600px;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tmargin-top: calc((25% - 300px));\r\n\tpadding: 10px 20px;\r\n\ttext-align: center;\r\n\tborder-radius: 15px;\r\n\tborder: 1px solid #fff;\r\n}\r\n\r\n.menu header{\r\n\twidth: 100%;\r\n\theight: 20%;\r\n\t/* background-color: #999; */\r\n}\r\n\r\n.menu main{\r\n\twidth: 100%;\r\n\theight: 70%;\r\n\t/* background-color: #888; */\r\n\tdisplay: table;\r\n}\r\n\r\n.menu footer{\r\n\twidth: 100%;\r\n\theight: 10%;\r\n\t/* background-color: #777; */\r\n}\r\n\r\n.menu a{\r\n\tcolor: #fff;\r\n\tmargin: 5px auto;\r\n\tmargin-bottom: 5px;\r\n\tfont-size: 2em;\r\n\tborder: 1px solid #777;\r\n\tborder-radius: 15px;\r\n\twidth: 30%;\r\n}\r\n\t.menu a:hover{\r\n\t\tcolor: #999;\r\n\t}\r\n\r\n.menu main .game-menu{\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n/* Game */\r\n\r\n.container-game-full{\r\n\tbackground-color: #222;\r\n\twidth: 100%;\r\n\theight: 120%;\r\n\tposition: absolute;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\" *ngIf=\"menuActived\">  \n  <header id=\"header\" class=\"\" >\n    <!-- <a class=\"navbar-brand\" href=\"#\" (click)=\"menuActived = false\">Chemistry Bets</a> -->\n    <h1 class=\"display-2\">Med Bets</h1>\n  </header><!-- /header -->\n\n  <main>\n    <div class=\"game-menu\">\n      <nav>\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link display-4\" href=\"#\" routerLink=\"/play\" (click)=\"menuActived = false\">Jogar<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link display-4\" href=\"#\" routerLink=\"/rules\" (click)=\"menuActived = false\">Instruções</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link display-4\" href=\"#\" routerLink=\"/credits\" (click)=\"menuActived = false\">Créditos</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link display-4\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSeGCKrIaH-Pupe5TPRDTqUhBiORl4wWAo8suvA2baa6sNM7JQ/viewform\" (click)=\"menuActived = false\">Avaliação</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link display-4\" href=\"http://bqldse.romssilva.com/printplay/\"(click)=\"menuActived = false\">Print & Play</a>\n            </li>        \n          </ul>\n      </nav>\n    </div>\n  </main>\n\n  <footer>\n    \n  </footer>\n</div>\n\n  <div class=\"container-game-full\" *ngIf=\"!menuActived\">\n    <router-outlet></router-outlet>    \n  </div>\n\n<!-- <div class=\"game-container\">\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ORG';
        // constructor(){
        // 	this.menuActived = true;	
        // }
        this.menuActived = true;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

var NgIfSimple = (function () {
    function NgIfSimple() {
    }
    NgIfSimple.prototype.blok = function () {
        var blok = false;
        return blok;
    };
    return NgIfSimple;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rules_game_rules_game_component__ = __webpack_require__("../../../../../src/app/rules-game/rules-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ranking_game_ranking_game_component__ = __webpack_require__("../../../../../src/app/ranking-game/ranking-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__credits_game_credits_game_component__ = __webpack_require__("../../../../../src/app/credits-game/credits-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__play_game_play_game_component__ = __webpack_require__("../../../../../src/app/play-game/play-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_http_service__ = __webpack_require__("../../../../../src/app/app-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__play_game_card_card_component__ = __webpack_require__("../../../../../src/app/play-game/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__play_game_count_timer_count_timer_component__ = __webpack_require__("../../../../../src/app/play-game/count-timer/count-timer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { NgvasModule, tweens, hitAreas } from "ngvas";







//timer


var appRoutes = [
    { path: 'play', component: __WEBPACK_IMPORTED_MODULE_9__play_game_play_game_component__["a" /* PlayGameComponent */] },
    { path: 'credits', component: __WEBPACK_IMPORTED_MODULE_8__credits_game_credits_game_component__["a" /* CreditsGameComponent */] },
    { path: 'rules', component: __WEBPACK_IMPORTED_MODULE_6__rules_game_rules_game_component__["a" /* RulesGameComponent */] },
    { path: 'ranking', component: __WEBPACK_IMPORTED_MODULE_7__ranking_game_ranking_game_component__["a" /* RankingGameComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rules_game_rules_game_component__["a" /* RulesGameComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ranking_game_ranking_game_component__["a" /* RankingGameComponent */],
            __WEBPACK_IMPORTED_MODULE_8__credits_game_credits_game_component__["a" /* CreditsGameComponent */],
            __WEBPACK_IMPORTED_MODULE_9__play_game_play_game_component__["a" /* PlayGameComponent */],
            __WEBPACK_IMPORTED_MODULE_11__play_game_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__play_game_count_timer_count_timer_component__["a" /* CountTimerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            //NgvasModule
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__app_http_service__["a" /* AppHttpService */],
            __WEBPACK_IMPORTED_MODULE_11__play_game_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__["SimpleTimer"]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/credits-game/credits-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-elements.credits{\r\n\theight: auto;\r\n\ttext-align: left;\r\n}\r\n\r\n\t.container-elements.credits header{\r\n\t\tpadding: 30px;\r\n\r\n\t}\r\n\r\n\t\t.container-elements.credits header h1{\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-weight: lighter;\r\n\t\t}\r\n\r\n\t.container-elements.credits main{\r\n\t\tpadding-bottom: 20px;\r\n\t}\r\n\r\n\t\t.container-elements.credits main .subtittle {\r\n\t\t\ttext-align: center; \r\n\t\t\tpadding: 0; \r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t\t.container-elements.credits main .subtittle h5{\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t.container-elements.credits main h4{\r\n\t\tcolor: #888;\r\n\t\tfont-weight: lighter;\r\n\t\tpadding: 20px;\r\n\t}\r\n\r\n\t\t.container-elements.credits main p {\r\n\t\t\tcolor: rgb(200, 200, 200);\r\n\t\t}\r\n\r\n\t\t.container-elements.credits main .social-network{\r\n\t\t\tmargin-left: 40px;\r\n\t\t\tpadding: 0;\r\n\t\t\tmargin: 0;\r\n\t\t\t/* padding: 10px; */\r\n\t\t}\r\n\r\n\t.container-elements.credits main h5{\r\n\t\tmargin-left: 50px;\r\n\t\tpadding: 10px;\r\n\t}\r\n\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/credits-game/credits-game.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light justify-content-between secondary-menu\" id=\"top-menu\">\n\t<a class=\"navbar-brand\" href=\"#\" routerLink=\"/play\">Jogar</a>\n\t<h1 class=\"navbar-brand display-4\" style=\"color: #000; font-size: 2.7em\">Med Bets</h1>\n\t<a class=\"navbar-brand\" href=\"#\">Menu</a>\n</nav>\n\n<div class=\"container-elements credits\">\n\t<header>\t\t\n\t\t<div class=\"row\">\t\t\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<h1>CRÉDITOS</h1>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t</div>\n\t</header>\n\n\t<main>\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t<article class=\"subtittle\">\n\t\t\t\t\t<h5>Equipe LDSE</h5>\n\t\t\t\t\t<h6>(Laboratório de Desenvolvimento de Softwares Educacionais)</h6>\n\t\t\t\t</article>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: right\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Autor</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPROF. JOSÉ NUNES DA SILVA JÚNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDJHEYSON CARLOS DE OLIVEIRA ASSIS\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tGIANCARLO SCHAFFER TORRES JUNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: left\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Co-autor</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPROF. ANTÔNIO JOSÉ MELO LEITE JÚNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDAVI JANÔ NOBRE\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tBRUNO PRAÇA BRASIL\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tLARISSA BARBOSA PAIVA\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: right\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Design</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDJHEYSON CARLOS DE OLIVEIRA ASSIS\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tGIANCARLO SCHAFFER TORRES JUNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tSHIRLEY DE CASTRO\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPROF. JOSÉ NUNES DA SILVA JÚNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: left\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Mecânica de jogo</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPROF. JOSÉ NUNES DA SILVA JÚNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDJHEYSON CARLOS DE OLIVEIRA ASSIS\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: right\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Conteudista</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPROF. JOSÉ NUNES DA SILVA JÚNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: left\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Programação</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDJHEYSON CARLOS DE OLIVEIRA ASSIS\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tGIANCARLO SCHAFFER TORRES JUNIOR\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: right\">\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Agradecimentos</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPIBID - Universidade Federal do Ceará\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: left\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Colaboradores</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDAVI JANÔ NOBRE\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: right\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Desenvolvimento</h4>\n\t\t\t\t\t\t\t\t<h5>Back-end</h5>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\tDJHEYSON CARLOS DE OLIVEIRA ASSIS\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\tPROF. EMANUEL COUTINHO\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<h5>Front-end</h5>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\tDJHEYSON CARLOS DE OLIVEIRA ASSIS\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tGIANCARLO SCHAFFER TORRES JUNIOR\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t<div class=\"col-sm-5\" style=\"text-align: left\">\t\t\t\t\t\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h4>Departamentos</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tUFC - Química Orgânica e Inorgânica\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tUFC - Instituto Universidade Virtual\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" style=\"background-color: #fff; padding: 5vh; border-radius: 15px; margin-top: 20px;\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<img src=\"http://ldse.ufc.br/dj/assets/img/smdlogo.png\" alt=\"logo ufc\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<img src=\"http://ldse.ufc.br/dj/assets/img/ufclogo.png\" alt=\"logo ufc\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<img src=\"http://ldse.ufc.br/dj/assets/img/ufcvirtual.png\" alt=\"logo ufc\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<img src=\"http://ldse.ufc.br/dj/assets/img/ufclogo.png\" alt=\"logo ufc\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<h4>contatos</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPROF. JOSÉ NUNES DA SILVA JÚNIOR - <a  class=\"social-network\" href=\"mailto:nunes.ufc@gmail.com?subject=Contato LDSE\" title=\"nunes.ufc@gmail.com\">EMAIL</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDJHEYSON OLIVEIRA - <a  class=\"social-network\" href=\"mailto:djheyson.oliveira@gmail.com?subject=Contato LDSE\" title=\"djheyson.oliveira@gmail.com\">EMAIL</a> - <a href=\"instagram.com/_djeisu/\" title=\"\">INSTAGRAM</a> - <a href=\"https://www.facebook.com/djheyson.oliveira\" title=\"\">FACEBOOK</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tGIANCARLO SCHAFFER - <a  class=\"social-network\" href=\"mailto:mr.giancarloschaffer@gmail.com?subject=Contato LDSE\" title=\"mr.giancarloschaffer@gmail.com\">EMAIL</a> - <a href=\"https://www.facebook.com/schaffer.junior\" title=\"\">FACEBOOK</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-1\"></div>\t\t\n\t\t</div>\n\t</main>\n\n\t<footer>\n\t</footer>\n</div>\t\n<!-- <div style=\"width: 100%; text-align: center; padding: 20px;\">\n\t\t<a href=\".top-menu\" title=\"\">Voltar para cima</a>\t\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/credits-game/credits-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditsGameComponent = (function () {
    function CreditsGameComponent() {
    }
    CreditsGameComponent.prototype.ngOnInit = function () {
    };
    return CreditsGameComponent;
}());
CreditsGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-credits-game',
        template: __webpack_require__("../../../../../src/app/credits-game/credits-game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/credits-game/credits-game.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreditsGameComponent);

//# sourceMappingURL=credits-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/play-game/GruposJSON.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GruposJSON; });
var GruposJSON = (function () {
    // constructor(){
    // 	this.todosGrupos = 
    // 	[
    // 	    {
    // 	        "id": 9,
    // 	        "nome": "Alcenos e Alcinos"
    // 	    },
    // 	    {
    // 	        "id": 10,
    // 	        "nome": "AromÃ¡ticos"
    // 	    },
    // 	    {
    // 	        "id": 11,
    // 	        "nome": "SN e EliminaÃ§Ã£o"
    // 	    },
    // 	    {
    // 	        "id": 12,
    // 	        "nome": "Ã\u0081lcoois, Fenóis e Éteres"
    // 	    },
    // 	    {
    // 	        "id": 13,
    // 	        "nome": "AldeÃ\u00addos e Cetonas"
    // 	    },
    // 	    {
    // 	        "id": 14,
    // 	        "nome": "Ã\u0081c. CarboxÃ\u00adlicos e Derivados"
    // 	    }
    // 	]
    // }
    function GruposJSON() {
        this.todosGrupos =
            [
                {
                    "id": 2,
                    "nome": "GT1: Modificações gestacionais fisiológicas e Pré-Natal de Baixo Risco."
                },
                {
                    "id": 11,
                    "nome": "GT2: Doenças e Distúrbios Gestacionais."
                },
                {
                    "id": 5,
                    "nome": "GT3: Trabalho de Parto."
                },
                {
                    "id": 6,
                    "nome": "GT4: Puerpério Normal e Patológico."
                },
                {
                    "id": 7,
                    "nome": "GT5: Abordagem Geral do RN Normal."
                },
                {
                    "id": 8,
                    "nome": "GT6: Icterícia Neonatal."
                },
                {
                    "id": 9,
                    "nome": "GT7: Crescimento e Alimentação da Criança."
                },
                {
                    "id": 10,
                    "nome": "GT8: Desenvolvimento Puberal Normal de Meninos e Meninas."
                }
            ];
    }
    return GruposJSON;
}());

//# sourceMappingURL=GruposJSON.js.map

/***/ }),

/***/ "../../../../../src/app/play-game/PerguntasJSON.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntasJSON; });
var PerguntasJSON = (function () {
    function PerguntasJSON() {
        this.todas =
            [
                {
                    "id": 3,
                    "enunciado": "O crescimento e o desenvolvimento são os eixos referenciais para todas as atividades de atenção a criança e ao adolescente sob os aspectos biológico, afetivo, psíquico e social. Em relação ao crescimento, ao fazer o acompanhamento da criança, é importante sabermos que o lactente no 1° ano de vida cresce em torno de:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "12 cm",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "25 cm",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "30 cm",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "15 cm",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 8,
                    "enunciado": "Dentre as alterações fisiológicas sistêmicas que podem ocorrer no corpo da gestante, podemos citar:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 2,
                    "enunciado_a": "Marcha Anserina, Edema de MMII, Pirose.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Anemia por hemodiluição plasmática, Elevação da PA, Varizes e Hemorróidas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "DMG, Aumento do Débito Cardíaco, Elevação da PA. ",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Varizes e hemorroidas, Marcha Anserina, DMG",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A elevação da PA é sempre o reflexo de algum transtorno patológico no corpo da gestante. A DMG, geralmente, se desenvolve por volta do fim do segundo trimestre e está relacionada com o aumento dos níveis dos Hormônios Diabetogênicos (Estrógenos, Progesterona, Cortisol, HLP, Prolactina) que promovem a utilização, por parte da gestante, de ácidos graxos como fonte de energia, poupando o uso da glicose sanguínea e predispondo ao aumento dos níveis de glicose materna (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 10,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL NAVAL MARCÍLIO DIAS- RJ-2015). O uso do suplemento periconcepcional de ácido fólico reduz o risco de:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Prematuridade",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Crescimento Intrauterino Restrito",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Defeitos do Tudo Neural",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Aneuploidias",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 11,
                    "enunciado": "(RESIDÊNCIA MÉDICA SUS-SP-2015) Gestante de 18s vem para a primeira consulta de rotina e o obstetra encontra altura uterina de 25cm. Há suspeita de:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Insuficência Placentária ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Infecção Congênita ",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Oligoâmnio",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Erro de data",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Como há uma altura uterina maior que a esperada para a idade gestacional, a resposta mais aceitável é a letra D, pois as respostas dos outros itens, geralmente, provocam uma altura uterina menor que a esperada para a idade gestacional."
                },
                {
                    "id": 13,
                    "enunciado": "(RESIDÊNCIA MÉDICA FUNDAÇÃO JOÃO GOULART- RJ- 2013) A toxoplasmose é uma doença cosmopolita associada à infecção congênita. Visando à prevenção da toxoplasmose congênita, deve-se orientar que pacientes suscetíveis:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "Iniciem espiramicina profilática",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Ingiram carnes ou ovos crus ou mal cozidos.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Evitem contato com animais de origem suína ou bovina.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Vacinem animais domésticos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A.Espiramicina é utilizada no tratamento da doença, não na prevenção. B. A paciente não deve ingerir carnes ou ovos crus ou mal cozidos, pois estes podem conter o toxoplasma gondii. D. Não há vacina contra a toxoplasmose."
                },
                {
                    "id": 14,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL NACIONAL DO CÂNCER-RJ-2015). Sobre as vacinas, assinale a afirmativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 11,
                    "enunciado_a": "A vacinação contra a hepatite B, nas primeiras horas após o nascimento, é de baixa eficácia na prevenção da transmissão vertical do vírus da hepatite B.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Vacinação de gestantes contra a influenza é segura em somente após 20 semanas de gestação. Sua aplicação  deve ser feita antes ou  durante o inverno, não importante o tempo decorrido.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Em gestantes previamente vacinadas com, pelo menos, 3 doses da vacina contendo toxoide tetânico e a última dose a menos de 5 anos, deve ser feito dTpa-R na gestação após 20 semanas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "As vacinas com agentes biológicos vivos ou atenuados podem ser feitas com imunodeficiência  clínica com segurança.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A. A vacinação contra a hepatite B, nas primeiras horas após o nascimento, aliada à imunoglobulina contra o vírus da hepatite B, são de alta eficácia na prevenção da transmissão vertical do vírus da hepatite B. B. Vacinação de gestantes contra a influenza é segura em qualquer idade gestacional. D. As vacinas com agentes biológicos vivos ou atenuados são contra-indicadas em pacientes com imunodeficiência clínica."
                },
                {
                    "id": 15,
                    "enunciado": "RESIDÊNCIA MÉDICA HOSPITAL PASTEUR-RJ-2015) Primigenta, 15 anos, vem para sua primeira consulta de pré-natal. IG: 8s. Nunca fez exame ginecológico. Traz exames laboratoriais solicitados pela enfermeira:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 11,
                    "enunciado_a": "As três assertivas estão corretas",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Apenas a assertiva I está correta.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Apenas a assertiva I está correta.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Apenas as assertivas I e II estão corretas.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A abordagem, a avaliação e o seguimento da gestante, tanto na primeira como em todas as consultas pré-natais, devem seguir as recomendações do Ministério da Saúde (Cadernos de Atenção Básica – Nº 32: Atenção ao Pré-Natal de Baixo Risco. Brasília – DF. 2012. Ministério da Saúde)."
                },
                {
                    "id": 17,
                    "enunciado": "(RESIDÊNCIA MÉDICA SMS DE SÃO JOSÉ DOS PINHAIS-PR-2015) O Ministério da Saúde recomenda a realização de exames de rotina e padroniza as condutas segunda seus resultados. Sobre exames pré-natais e condutas rotineiras, assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "A pesquisa universal de anticorpos contra a rubéola é recomendada âs pacientes do SUS.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A bacteriúria assintomática na gravidez não tem relevância clínica e não necessita de tratamento.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O US dever ser realizado mensalmente durante o pré-natal de risco habitual.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O VDRL, Anti-HIV e pesquisa de HBsAg devem ser indicados a gestantes logo na primeira consulta",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "A.Sorologia para rubéola não é recomendada pelo SUS, durante o pré-natal. B. A bacteriúria assintomática na gestação deve ser tratada, pois esta pode se agravar, levando a uma pielonefrite, a sepse e até o óbito. C. O US Obstétrico não é recomendação obrigatório pelo SUS no pré-natal (Cadernos de Atenção Básica – Nº 32: Atenção ao Pré-Natal de Baixo Risco. Brasília – DF. 2012. Ministério da Saúde)."
                },
                {
                    "id": 18,
                    "enunciado": "(RESIDÊNCIA MÉDICA SECRETARIA ESTADUAL DE SÁUDE – RJ - 2015) A indução do parto está indicada quando os benefícios da antecipação do parto superam os riscos deste procedimento. Dessa forma, é considerada CONTRAINDICAÇÃO à indução do parto vaginal:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "Óbito Fetal ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": " Herpes Genital Ativa",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Amniorrexe Prematura",
                    "imagem_c": "Imagens/",
                    "enunciado_d": " Gestação maior ou igual a 41 semanas. ",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Na Herpes Genital Ativa, a indução do parto vaginal é contra-indicado porque há grande risco de contaminação fetal com vírus durante sua passagem pelo canal vaginal."
                },
                {
                    "id": 19,
                    "enunciado": "Uma das atividades mais importantes da consulta de puericultura em Atenção Primária é a observação da amamentação materna durante a consulta de acompanhamento. Pode-se dizer que é uma característica da técnica adequada de amamentação:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Bochechas do bebê encovadas a cada sucção",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Mamilo com áreas achatas quando o bebê solta a mama",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O queixo do bebê não toca a mama materna",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Mais aréola visível acima da boca do bebê",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 20,
                    "enunciado": "G.V.S., afro-americano recém nascido de 7 dias de vida, peso de nascimento de 3150g, comparece a consulta de controle na Unidade Básica de Saúde, conforme foi orientado pela equipe na maternidade. Maria, sua mãe, está preocupada porque acha que o filho está com pequenos pontos amarelados nas narinas e fronte, máculas avermelhadas no tronco e lesões arroxeadas no dorso. Para o caso descrito, as seguintes hipóteses diagnósticas podem ser consideradas, EXCETO:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Mancha mongólica",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Hiperplasia sebácea",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Eritema tóxico",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "adiponecrose subcutânea",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 21,
                    "enunciado": "Um pilar importante do cuidado pediátrico é a prevenção. Os testes de triagem visam rastrear doenças antes que elas se apresentem clinicamente, com a finalidade de permitir uma intervenção oportuna, evitando ou minimizando os efeitos da evolução natural do agravo. Sobre a prevenção no cuidado pediátrico, assinale a alternativa falsa:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "O \"teste do olhinho\" (teste do reflexo vermelho) é o exame de rastreamento para anormalidades no seguimento posterior do olho ou para opacidades e deve ser feito com oftalmoscópio, por oftalmologista treinado, antes que o recém-nascido receba alta da maternidade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O \"teste da orelhinha\" (triagem auditiva neonatal) deve ser realizada em todos os recém-nascidos internados em UTI antes da alta hospitalar, e não apenas naqueles com indicativos de alto risco.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A incidência de perda auditiva em crianças é maior quando comparada com outras doenças de triagem universal, como a fenilcetonúria, o hipotireoidismo congênito, a anemia falciforme ou a hiperplasia congênita de suprarrenal.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O diagnóstico de hipotireoidismo congênito, uma das doenças rastreadas pelo \"teste do pezinho\", é feito mediante dosagem de TSH em amostra de sangue em papel filtro e pode ser falso-positivo quando colhido antes de 48h.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 22,
                    "enunciado": "Assinale a alternativa correta em relação à hipótese diagnóstica: um recém-nascido a termo, com peso ao nascer 3150g, inicia icterícia com 18h de vida, sem apresentar outras alterações ao exame físico. A tipagem sanguínea materna é O negativo e a do recém-nascido A positivo. Coombs direto: negativo.",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 8,
                    "enunciado_a": "doença hemolítica do sistema Rh.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "deficiência de glicose-6-fosfato desidrogenase.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "doença hemolítica pelos sistemas Rh e ABO.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "doença hemolítica pelo sistema ABO.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 23,
                    "enunciado": "Um neonato do sexo masculino, nascido com 37 semanas e pesando 3 kg, amamentado exclusivamente ao seio, iniciou icterícia aos oito dias de vida. Com 16 dias de vida, foi levado ao ambulatório em bom estado geral, pesando 3.220 g e com eliminações gastrintestinais normais. Excetuando-se a icterícia, seu exame físico era normal. Nessa ocasião, possuia aumento de bilirrubina às custas de indireta, cuja dosagem sérica foi 12 mg/dl. Seu tipo sanguíneo era A Rh positivo e o de sua mãe O Rh positivo. Seu hemograma e sua contagem de reticulócitos foram normais e o teste de Coombs direto foi negativo. O teste do pezinho também era normal. O menino foi acompanhado ambulatorialmente e aos dois meses não estava mais ictérico. A melhor hipótese diagnóstica é icterícia:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 8,
                    "enunciado_a": "fisiológica",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "pelo leite materno",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "por prematuridade",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "por eritroblastose fetal",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 24,
                    "enunciado": "A icterícia fisiológica ocorre em aproximadamente 2/3 dos recém-nascidos. É correto afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 8,
                    "enunciado_a": "a presença de hematomas, a policitemia, e a alimentação precoce são os fatores envolvidos em sua intensificação",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "é causada pela menor capacidade de conjugação e excreção pelo fígado imaturo do recém-nascido e não sofre influência do tipo de alimentação",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "é causada, entre outros fatores, pela menor captação hepática e pela maior oferta relativa de bilirrubina indireta ao fígado imaturo do recém-nascido",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "deve-se à elevação dos níveis de bilirrubina consequente ao aumento da circulação êntero-hepática e à menor capacidade de conjugação e excreção, necessitando terapêutica apenas em prematuros",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 25,
                    "enunciado": "Como regra prática, pode-se admitir que uma criança:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "Duplica o peso de nascimento aos 2 meses de idade e quadruplica no fim do primeiro ano de vida.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Duplica o peso de nascimento no 4º mês e triplica no fim do primeiro ano de vida.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Triplica o peso de nascimento no 6º mês e quadruplica aos 2 anos.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Qualquer relação só é válida para altura e não para peso.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 26,
                    "enunciado": "Na consulta de rotina de puericultura, lactente masculino de 12 meses, pesou 8990 gramas. Na consulta anterior, aos 9 meses de idade, pesava 8000 gramas. Utilize o gráfico a seguir para acompanhar a evolução da curva de crescimento do peso dessa criança. Assinale a alternativa mais adequada a esse caso.",
                    "img_url": "Imagens/peso idade meninos.jpg",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "A curva de crescimento está adequada, próxima ao percentil 25.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A curva de crescimento está adequada, no percentil 50.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A curva de crescimento está inadequada, próximo ao percentil 25.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A curva de crescimento está retificada e representa risco biológico.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 27,
                    "enunciado": "Recém-nascido a termo, peso de nascimento 2680 g, escore de Apgar de 1º e 5º minutos de 9 e 10, respectivamente. Permaneceu em alojamento conjunto, não apresentou intercorrências clínicas e recebeu alta com 48h de vida, pesando 2400 g. A mãe, primigesta, procurou o pronto-atendimento dois dias após a alta, referindo que o bebê chora excessivamente. Ao exame, o recém-nascido apresentava-se choroso, ictérico em face, tronco e raiz de membros, mucosas semiúmidas, pesando 2320 g. A hipótese diagnóstica mais provável é:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 8,
                    "enunciado_a": "icterícia do leite materno",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "icterícia da amamentação (ou relacionada ao aleitamento materno)",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "icterícia por isoimunização Rh",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "atresia de vias biliares",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 28,
                    "enunciado": "A mãe de um lactente de 3 meses, primeiro filho, durante a consulta de puericultura, questiona ao médico se já é oportuna a transição do leite materno para outros alimentos e a necessidade de oferta de água e chás. Qual a melhor orientação nutricional para esse bebê?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "Manter leite materno exclusivo, pois contém todos os nutrientes essenciais para o crescimento e o desenvolvimento saudável nessa idade, não sendo necessária complementação nesse momento.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A criança nessa idade já tingiu o desenvolvimento fisiológico necessário para que possa receber alimentos sólidos e deve iniciar as papas de fruta e salgadas de forma gradual, mantendo o leite materno.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A criança nessa idade ainda não atingiu o desenvolvimento fisiológico necessário para que possa receber alimentos sólidos e deve iniciar somente frutas em forma de suco e manter o leite materno.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Manter o aleitamento materno e aos 4 meses de idade, quando já atingiu o desenvolvimento fisiológico necessário, receber alimentos sólidos, tais como, papas de fruta e dieta salgada.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 29,
                    "enunciado": "A mãe de uma criança de sete meses de idade, em uso de leite materno exclusivo, solicita informações sobre a introdução de novos itens na alimentação da criança. Qual a orientação adequada à mãe da criança?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "Deve ser recomendado iniciar apenas suco de frutas até a criança alcançar nove meses de idade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Deve ser recomendado introduzir carnes, cereais, tubérculos, leguminosas, legumes e frutas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Deve ser recomendado manter leite materno exclusivo até a criança completar um ano de vida.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Deve ser recomendado introduzir carnes após a criança completar 12 meses de vida.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 30,
                    "enunciado": "Com relação ao aparecimento de características sexuais secundárias durante o desenvolvimento puberal podemos afirmar, EXCETO:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 10,
                    "enunciado_a": "o desenvolvimento das características sexuais é considerado normal nas meninas a partir de 8 anos e nos meninos a partir de 9 anos.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "nos meninos, em geral, o aumento do volume testicular é o primeiro sinal de entrada em puberdade.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "a menarca é um evento tardio, ocorrendo em geral no estadiamento M4 de mama.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "a ginecomastia, nessa fase, deve ser considerada patológica.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 31,
                    "enunciado": "Assinale a alternativa que contém a sequência cronológica de eventos que, em geral, caracterizam a puberdade.",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 10,
                    "enunciado_a": "Telarca, estirão puberal, pubarca, pico do estirão, menarca e altura final.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Estirão puberal, telarca, pubarca, pico do estirão, menarca e altura final.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Estirão puberal, telarca, pico do estirão, pubarca, menarca e altura final.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Telarca, estirão puberal, pubarca, pico do estirão, altura final e menarca.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 32,
                    "enunciado": "Com relação ao estadiamento puberal e crescimento em adolescentes, pode-se afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 10,
                    "enunciado_a": "meninas e meninos iniciam o estirão em idades cronológicas semelhantes.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "a identificação do estágio M2 de mama pelos critérios de Tanner pode ser usada como indicador de que o estirão está se iniciando no sexo feminino.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "o primeiro sinal de amadurecimento sexual no menino é o aumento do comprimento peniano.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "em estágio M3 de mamas, as meninas encontram-se em fase de desaceleração de crescimento.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 33,
                    "enunciado": "A adolescência se caracteriza por um período de grandes transformações de ordem biopsicossocial. Assim, além das transformações corpóreas, destacam-se:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 10,
                    "enunciado_a": "Busca de si mesmo e de sua identidade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Apego aos familiares.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Desenvolvimento do pensamento concreto",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Respeito à sociedade e à religiosidade",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 55,
                    "enunciado": "De acordo com as características que estão relacionadas à Avaliação Pré-Concepcional, marque o item errado:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Consulta que o casal faz antes da gravidez, buscando identificar fatores de risco ou doenças que possam alterar o curso fisiológico de uma futura gestação.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "É um instrumento na melhoria dos índices de morbimortalidade materna e infantil.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Contribui para o desenvolvimento sócio-econômico do país. ",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Tem como pré-requisito a certeza de que existe alguma patologia prévia no homem, na mulher ou em ambos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 56,
                    "enunciado": "Dentre as categorias de intervenções do Aconselhamento Pré-Concepcional, a única que não se encaixa neste grupo:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Planejamento Familiar",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Saúde da Mulher",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Identificação de Fatores de Risco",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Vacinação",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Além do Planejamento Familiar, da Identificação dos Fatores de Risco e da Vacinação, a Intervenção e o Aconselhamento também fazem parte das 4 categorias de Avaliação Pré-Concepcional."
                },
                {
                    "id": 57,
                    "enunciado": "Dentre as alternativas abaixo, qual delas possui as 2 respostas que garantem o diagnóstico de gravidez?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Beta – HCG positivo, Ausculta de BCFs.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Amenorreia, Náuseas Matinais.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Galactorreia, Palpação de Partes Fetais.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Ausculta de BCFs, Percepção de Movimentos Fetais.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 58,
                    "enunciado": "Quais instrumentos são utilizados para a ausculta de BCFs e a partir de que IG os BCFs podem ser auscultados com tais instrumentos?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "Doppler (a partir de 18-20s)",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Pinard (a partir de 12s)",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Doppler (a partir de 12s) e Pinard (a partir de 18-20s)",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Doppler (a partir de 10s) e Pinard (a partir de 14s)",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "Os BCFs se iniciam por volta de 5-6 semanas de desenvolvimento embrionário e podem ser auscultados, neste período, mediante um US Transvaginal.Com cerca de 12 semanas, o doppler permite a ausculta dos BCFs e com cerca de 18-20 semanas é possível auscultar os BCFs com o Pinnard."
                },
                {
                    "id": 59,
                    "enunciado": "Dentre os opções abaixo, qual se refere a substância/suplementação alimentar que deve ser ingerida pela gestante e por quanto tempo antes e depois da concepção deve ser tomada para evitar Defeitos do Tubo Neural?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Sulfato Ferroso: 30 dias antes e 30 dias depois da concepção.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Ácido Fólico: 30 dias antes e 30 dias depois da concepção.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Ácido Fólico: 30 dias antes e 30 dias depois da concepção.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Ácido Fólico: 90 dias antes e 90 dias depois da concepção.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Uso do ácido fólico é recomendado, pelo Ministério Saúde, 90 antes e 90 depois da concepção, pois além de reduzir o risco de desenvolvimento de Doenças do Tubo Neural, também ajuda na prevenção da Anemia Megaloblástica. Enquanto isto, o Sulfato Ferroso é utilizado para prevenção e tratamento da anemia (Gestação de Alto Risco: Manual Técnico. Ministério da Saúde. 5ª Ed. Brasília. 2012)."
                },
                {
                    "id": 60,
                    "enunciado": "(RESIDÊNCIA MÉDICA FUNDAÇÃO JOÃO GOULART – RJ - 2011) Durante a gestação, o aparecimento da coloração violácea na vulva (vestíbulo vaginal e meato uretral) é denominado:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Sinal de Piskacek",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Sinal de Osiandier",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Sinal de Jacquemier - Chadwick",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Sinal de Kluge",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "  A.Abaulamento e amolecimento na zona de implantação, gerando um crescimento uterino assimétrico.       B. Percepção dos batimentos do pulso vaginal no fundo de saco. D. Coloração violácea da mucosa vaginal (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 63,
                    "enunciado": "O Aconselhamento Pré-Concepcional é importante para todas as mulheres em idade fértil que pretendam engravidar. Identifique quais os fatores abaixo são considerados de risco elevado para a a gravidez:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Paciente com perdas gestacionais de repetição e idade maior que 35a.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Paciente primigesta com 18 anos de idade.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Paciente de 25a com Hb: 11 g/dl.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Paciente com sorologia para toxoplasmose IgG positiva e IgM negativa.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A paciente com perdas gestacionais de repetição deve ser investigada, pois pode possuir doenças/ alterações orgânicas que predispõem a abortos de repetição, como: trombofilia e incompetência istmo-cervical. Além disto, depois dos 35 anos, devido a alterações disjuncionais durante a meiose, aumenta o risco de cromossomopatias que também aumentammuito as chances de abortos. "
                },
                {
                    "id": 64,
                    "enunciado": "Sobre a primeira consulta pré-natal. A abordagem materna correta deve incluir:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "Anamnese Obstétrica, Exame Físico Geral e Obstétrico, Solicitação de US Obstétrico.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Anamnese Obstétrica, Exame Físico Obstétrico, Solicitação de Exames de Rotina.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Anamnese Obstétrica, Exame Físico Geral e Obstétrico, Solicitação de Exames de Rotina.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Anamnese Obstétrica, Exame Físico Ginecológico e Obstétrico, Solicitação de Exames de Rotina, Solicitação de US Obstétrico.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A abordagem e avaliação da gestante, tanto na primeira como em todas as consultas pré-natais, devem seguir as recomendações do Ministério da Saúde (Cadernos de Atenção Básica – Nº 32: Atenção ao Pré-Natal de Baixo Risco. Brasília – DF. 2012. Ministério da Saúde)."
                },
                {
                    "id": 65,
                    "enunciado": "D. Maria iniciou o pré-natal com 8 semanas de gestação. Quais os exames prioritários pelo Ministério da Saúde devem ser solicitados de rotina neste período?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "HC (Ht, Hb), US abdominal, Sorologia para Rubéola, VDRL, Anti-HIV, TS e Fator RH, Urina Tipo 1.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "HC (Ht, Hb), VDRL, Anti HIV, Sorologia para Toxoplasmose (IgG e IgM), Glicemia de Jejum, TS e Fator RH, HBsAg, Urina Tipo 1.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "HC (Ht, Hb), US abdominal, Sorologia para Rubéola, VDRL, Anti-HIV, TS e Fator RH, Urina Tipo 1.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": " HC (Ht, Hb), US abdominal, Sorologia para Toxoplasmose (IgG e IgM), VDRL, Anti-HIV, TS e Fator RH, Urina Tipo 1. ",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A sorologia para rubéola não é recomendada pelo SUS, durante o pré-natal. O US Obstétrico não é recomendação obrigatória pelo SUS no pré-natal. A abordagem, a avaliação e o seguimento da gestante, tanto na primeira como em todas as consultas pré-natais, devem seguir as recomendações do Ministério da Saúde (Cadernos de Atenção Básica – Nº 32: Atenção ao Pré-Natal de Baixo Risco. Brasília – DF. 2012. Ministério da Saúde)."
                },
                {
                    "id": 66,
                    "enunciado": "Qual o mínimo de consultas pré-natais e sua frequência, de acordo com a IG, recomendadas pelo Ministério da Saúde?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "Pelo menos 6 consultas (1 consulta até 28s, 2 consultas de 28 a 36s, 3 consultas depois das 36s).",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Pelo menos 6 consultas (3 consultas até 28s, 2 consultas de 28 a 36s, 1 consulta depois das 36s).",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Pelo menos 10 consultas (4 consultas até 28s, 3 consultas de 28 a 36s, 3 consultas depois das 36s).",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Pelo menos 10 consultas (3 consultas até 28s, 3 consultas de 28 a 36s, 4 consultas depois das 36s).",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A abordagem, a avaliação e o seguimento da gestante, tanto na primeira como em todas as consultas pré-natais, devem seguir as recomendações do Ministério da Saúde (Cadernos de Atenção Básica – Nº 32: Atenção ao Pré-Natal de Baixo Risco. Brasília – DF. 2012. Ministério da Saúde)."
                },
                {
                    "id": 67,
                    "enunciado": "A principal patologia associada à mortalidade materna em países desenvolvidos é a embolia pulmonar. Assinale dentre os itens abaixo aquele que é encontrado estatisticamente como o principal responsável pelas mortes maternas no Brasil.",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Endometrite",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Doenças Hipertensivas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Hemorragias do primeiro trimestre.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "DMG.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "As doenças hipertensivas são responsáveis por milhares de mortes maternas anuais no Brasil. A hipertensão arterial descompensada é, muitas vezes, causadora de AVCs e Edema Agudo de Pulmão que podem culminar com a rápida morte materna."
                },
                {
                    "id": 68,
                    "enunciado": "(RESIDÊNCIA MÉDICA PREFEITURA MUNICIPAL DE SOROCABA – SP – 2014) Em relação aos exames realizados durante o pré-natal, aponte a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 11,
                    "enunciado_a": "O teste de tolerância à glicose 75 g deve ser solicitado a todas as gestantes, entre a 24ª e 28ª semana, que apresentarem alteração da glicemia de jejum, devido ao risco de diabetes durante a gravidez.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A US deve ser solicitada, de preferência, no 3º trimestre da gravidez, quando se obtém maior número de informações.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Não se justifica o pedido de sorologia para toxoplasmose, pois não há atitude prática disponível frente ao exame positivo.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "As sorologias para HIV e sífilis não devem ser solicitadas na primeira consulta e repetidas no 3º trimestre, pois não há risco de infecção durante a gestação.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "B. O US Obstétrico não é recomendação obrigatória pelo SUS no pré-natal. C. A sorologia (IgG e IgM) para toxoplasmose faz parte da rotina de pré-natal e sua positividade requer tratamento específico para evitar complicações fetais. D. As sorologias para HIV e sífilis fazem parte da lista de exames recomendados pelo Ministério da Saúde, devendo ser solicitadas na primeira consulta e repetidas no 3º trimestre, pois há risco de infecção durante a gestação."
                },
                {
                    "id": 69,
                    "enunciado": "É indicativo de Pré-Eclâmpsia Grave:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "PA maior que 160 x 100 mmHg e proteinúria maior que 3 g/ dia",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "PA de 140 x 90 mmHg sem proteinúria.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Cefaleia sem aura.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Proteinúria ≥ 1 g/ 24 horas.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "Além de PA maior que 160 x 100 mmHg e proteinúria maior que 3 g/ dia, Turvação Visual, Epigastralgia/ Dor em Hipocôndrio Direito e Cefaleia são sinais que podem estar associados à Pré-Eclâmpsia Grave e representam Sinais de Iminência de Eclâmpsia (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)"
                },
                {
                    "id": 70,
                    "enunciado": "Entre os Sinais e Sintomas Clássicos de Iminência de Eclâmpsia, estão:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Dor em Baixo Ventre, Cefaleia e Turvação Visual.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Dor Epigástrica ou no Hipocôndrio direito, Cefaleia e Sinal de Blumberg Positivo.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Cefaleia, Turvação Visual, Sangramento Transvaginal Intenso.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Dor Epigástrica ou no Hipocôndrio direito, Cefaleia e Turvação Visual.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Além de PA maior que 160 x 100 mmHg e proteinúria maior que 3 g/ dia, Turvação Visual, Epigastralgia/ Dor em Hipocôndrio Direito e Cefaleia são sinais que podem estar associados à Pré-Eclâmpsia Grave e representam Sinais de Iminência de Eclâmpsia (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 71,
                    "enunciado": "No diagnóstico da Síndrome do Trabalho de Parto Ativo, estão presentes tais características:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "Primípara: colo de dilatado, pelo menos, 2 cm; perda de tampão mucoso; contrações uterinas rítmicas (pelo menos, 2 em 10 min) com 50-60s de duração, formação da bolsa das águas.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Multípara: colo de dilatado, pelo menos, 2 cm; perda de líquido amniótico; contrações uterinas rítmicas (pelo menos, 2 em 10 min) com 50-60s de duração, formação da bolsa das águas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Primípara: colo de dilatado, pelo menos, 3 cm; perda de líquido amniótico; contrações uterinas rítmicas (pelo menos, 2 em 10 min) com 50-60s de duração, formação da bolsa das águas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Multípara: colo de dilatado, pelo menos, 3 cm; ausência de perda de tampão mucoso; contrações uterinas rítmicas (pelo menos, 2 em 10 min) com 50-60s de duração, formação da bolsa das águas.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A Síndrome do Trabalho de Parto é um conjunto de sinais e sintomas que devem estar presentes para que se chegue a este diagnóstico e onde existem pequenas diferenças entre multíparas e primíparas (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 72,
                    "enunciado": "A respeito do Partograma. Assinale o item correto.",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "Deve ser “aberto” ao primeiro sinal de perda de tampão mucoso, facilitando o registro de toda a evolução do TP.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A Linha de Ação requer uma conduta resolutiva que significa parto cesariano.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A Linha de Alerta indica o momento a partir do qual se faz necessária uma conduta urgente e resolutiva.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A utilização adequada e criteriosa do partograma caracteriza uma boa assistência ao parto.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "A.O partograma deve ser aberto quando se estabelece a Síndrome do Trabalho de Parto que vai além da simples perda do tampão mucoso. B. A Linha de Ação requer uma conduta resolutiva que não necessariamente significa parto cesariano. C. Linha de Alerta indica que o médico deve ficar mais atento a evolução do trabalho de parto para que este não caminhe para complicações (Parto, Aborto e Puerpério: Assistência Humanizada à Mulher. Ministério da Saúde. Brasília. 2001)."
                },
                {
                    "id": 73,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL ERNESTO DORNELLES - RS - 2014) Quanto ao Partograma, devem-se iniciar os registros",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "Deve ser aberto na fase latente do trabalho de parto.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "No terceiro período do trabalho de parto.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Na fase ativa do trabalho de parto.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "No momento de internação da paciente, independente da fase do trabalho de parto.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "O partograma deve aberto na Fase Ativa do Trabalho de Parto, ou seja, na Dilatação do Colo Uterino ou Primeiro Período. Jamais deve ser aberto na Fase Latente do Trabalho de Parto (Parto, Aborto e Puerpério: Assistência Humanizada à Mulher. Ministério da Saúde. Brasília. 2001)."
                },
                {
                    "id": 74,
                    "enunciado": "Gestante 32a, G2P0A1, IG: 34s. Refere STV de início repentino há 2 horas, após relação sexual. Procurou Emergência Obstétrica do Hospital César Cals, onde apresentou ao exame, PA: 100x60 mmHg, Fc: 90 bpm, ausência de contrações uterinas e BFCs: 144bpm. Ao exame de inspeção da genitália, observou-se sangramento vermelho-vivo, rutilante, em moderada quantidade. No exame especular, colo e vagina normais. Sangramento proveniente do canal cervical. Não foi realizado toque. A primeira hipótese diagnóstica é:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "Descolamento Prematuro de Placenta.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Rotura Uterina.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Rotura de Vasa Prévia.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Placenta Prévia.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A Vasa Prévia se caracteriza pela passagem dos vasos do cordão umbilical pelo óstio interno uterino, predispondo à rotura destes vasos com maior facilidade de forma espontânea ou traumática. Sua rotura, geralmente, caracteriza-se por um sangramento abrupto, vermelho vivo rutilante e indolor. É uma Emergência Obstétrica, pois rapidamente pode levar ao óbito fetal."
                },
                {
                    "id": 75,
                    "enunciado": "Primigesta, casada, 26a, com atraso menstrual de 7s, beta HCG de 5000 U.I. Apresenta STV de moderada intensidade, cólicas, US Transvaginal mostrando pequena imagem anexial à direta e útero vazio. Qual a possível HD?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "Ameaça de aborto",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Neoplasia Trofoblástica Gestacional.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Gestação Ectópica.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Descolamento Prematuro de Placenta",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "O US Transvaginal mostra uma imagem na Tuba Direita com cavidade uterina vazia que já despertam a grande possibilidade de uma gravidez ectópica e o Beta-HCG positivo apenas confirma a gravidez, principalmente, se for uma mulher com vida sexual ativa em idade fértil e sem uso de métodos contraceptivos."
                },
                {
                    "id": 76,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL SANTA GENOVEVA – GO - 2014) Nas apresentações cefálicas defletidas de 1º grau, a linha de orientação e o ponto de referência, são respectivamente:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Sutura Metópica e Fronte",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Sutura Sagital / Sutura Metópica e Bregma.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Sutura Sagital e Bregma.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Sutura Metópica e Bregma.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Durante a apresentação cefálica, existem algumas diferenças ao toque vaginal. Na Apresentação Cefálica Fletida: toca-se a fontanela lambda. Na Apresentação Cefálica Defletida de 1º Grau: toca-se a sutura sagital, a metópica e a bregma. Na Apresentação Cefálica Defletida de 2º Grau: toca-se a glabela. Na Apresentação Cefálica Defletida de 3º Grau: toca-se o mento do concepto (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 77,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL MUNICIPAL DR. MÁRIO GATTI – 2014 - SP) Assinale a alternativa que apresenta os critérios para a definição diagnóstica de Síndrome HELLP:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Vasodilatação periférica, aumento do volume plasmático e elevação do débito cardíaco.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Dispnéia, calciúria e hipotensão arterial.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Hemólise, elevação das enzimas hepáticas e plaquetopenia.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Vasodilatação periférica, aumento do volume plasmático e elevação do débito cardíaco.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A palavra HELLP vem do inglês e representa a Tríade característica da doença Hemólise, elevação das transaminases hepáticas e plaquetopenia. É um estado orgânico grave que se não tratado com rapidez e suporte adequado, pode levar a mulher ao óbito (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 78,
                    "enunciado": "Paciente 25a com pré-natal e parto sem intercorrências. Deve apresentar em um puerpério fisiológico as seguintes características:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Leucocitose no 1º  dia de puerpério deve ser investigado como corioamnionite. ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Formação do Globo de Segurança de Pinard a nível de cicatriz umbilical, até 24h pós-parto.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Elevação da temperatura até 48h após o parto nos leva a pensar em infecção de ferida cirúrgica.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A sequência correta  de loquiação deve ser:  lóquia rubra, lóquia flava e lóquia fusca. ",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A. Leucocitose no 1º dia de puerpério é fisiológica, contanto que não seja acompanhada de desvio à esquerda. C. Elevação da temperatura até 48-72h após o parto, geralmente, é fisiológica e é conhecida como Febre do Leite, sendo decorrente da Apojadura. D. A sequência correta de loquiação deve ser: lóquia rubra, lóquia fusca e lóquia flava (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 79,
                    "enunciado": "Centenas de milhares de mulheres morrem anualmente no mundo por complicações puerperais. Com relação ao assunto, marque a assertiva correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "O tipo de parto, vaginal ou abdominal, não traz impacto neste índice de mortalidade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Fatores importantes para aumentar o risco de infecção em parto vaginal são: múltiplos toques vaginais e rotura prematura das membranas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A infecção puerperal deve ser suspeitada em pacientes jovens que apresentem lóquios sanguinolentos nos primeiros dias de pós-parto. ",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Pacientes pós-cesareadas têm menor risco de TVP e TEP.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A. A infecção puerperal não deve ser suspeitada em pacientes jovens que apresentem lóquios sanguinolentos nos primeiros dias de pós-parto. C. Laceração de trajeto deve ser suspeitada quando se está diante de um útero contraído após o parto e, mesmo assim, persiste um sangramento vaginal abundante. D. Pacientes pós-cesareadas têm mior risco de TVP e TEP."
                },
                {
                    "id": 80,
                    "enunciado": "Paciente de 28a, apresentando febre e calafrios há 24 horas. O exame físico revelou endurecimento de mama direita com hiperemia, calor local e dor à palpação. Em 15º dia de puerpério de Parto Vaginal e em aleitamento exclusivo. Qual o agente etiológico mais provável para o quadro descrito?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Escheriquia coli.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Estafilococos aureus",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Estreptococos mutans",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Enteroco.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A.Escheriquia coli, geralmente, habita a microbiota intestinal, sendo um dos principais causadores de ITU.        B. Estafilococos aureus, geralmente, habita a pele, sendo o um dos principais causadores de mastite. C. Estreptococos mutans é responsável pela cárie dentária. D. Enterococo, geralmente, habita a microbiota intestinal."
                },
                {
                    "id": 81,
                    "enunciado": "Qual das situações abaixo é contra-indicação absoluta para o aleitamento materno?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Mãe portadora de hepatite B.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Mãe portadora de HIV.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Mãe com mastite ",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Mãe em uso de antibioticoterapia",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A.Mediante a aplicação da vacina contra a hepatite B e da imunoglobulina no RN, até 12 horas pós-parto, ele pode ser amamentado pelo mãe portadora do vírus de modo que o risco de contaminação pelo leite é muito baixo. B. Existe um grande risco de contaminação do RN pelo leite, ainda que a carga viral materna seja muito baixa ou indetectável. C. A amamentação na mastite somente é contra-indicada quando há drenagem de secreção purulenta ou quando há uma incisão cirúrgica próxima à aréola. D. Somente alguns antibióticos contra-indicam a amamentação."
                },
                {
                    "id": 82,
                    "enunciado": "Como é chamado o delivramento na qual a placenta inserida na parte superior do do útero inverte-se e se desprende pela face fetal, em \"forma de guarda-chuva\"? ",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Delivramento em Baudelocque  Schultze",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Delivramento em Baudelocque Duncan",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Delivramento em Baudelocque Schultze -  Duncan",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Delivramento em Baudelocque Duncan -  Schultze ",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 83,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL UNIVERSITÁRIO ANTÔNIO PEDRO – RJ - 2015) Com relação às fases clínicas do parto. Pode-se afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 5,
                    "enunciado_a": "O primeiro período termina com o desprendimento do polo cefálico.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O terceiro período equivale a expulsão do concepto",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O secundamento ocorre no segundo período do parto.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O quarto período se caracteriza pelo descolamento, descida e expulsão da placenta e dos anexos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "Primeiro Período: Dilatação do colo uterino de 1 a 10 cm. Segundo Período: Expulsão do Concepto que ocorre quando o colo está com 10 cm de dilatação. Terceiro Período: Delivramento ou Expulsão da Placenta, geralmente, após a expulsão do concepto. Quarto Período: Período de Greenberg que equivale até 1 hora depois do parto onde deve ser observado o volume de sangue eliminado via vaginal (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 84,
                    "enunciado": "(RESIDÊNCIA MÉDICA HOSPITAL UNIVERTÁRIO DE TAUBATÉ – SP - 2015) Sobre as relações útero-fetais, assinale a alternativa INCORRETA:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Uma situação longitudinal pode ocorrer tanto em córmicos quanto em pélvicos.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Uma apresentação cefálica admite posição esquerda",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Uma situação transversa não admite apresentação pélvica.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Uma apresentação cefálica nunca coexiste com situação transversa.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "Uma Situação Longitudinal pode ocorrer tanto em cefálicos quanto em pélvicos. A Apresentação Córmica somente acontece em Situações Transversas (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 85,
                    "enunciado": "(RESIDÊNCIA MÉDICA DO AMAZÔNAS – AM - 2014) Paciente em trabalho de perto acabou de ser examinada pelo residente de obstetrícia. Ao ser perguntando sobre qual plano o feto se encontrava, respondeu: Naquele plano localizado ao nível das espinhas isquiáticas. Qual plano que o residente se referia?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Primeiro Plano de De Lee e Plano zero de Hodge.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Plano zero de De Lee e segundo Plano de Hodge.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Terceiro Plano de Hodge e Terceiro Plano de De Lee.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Plano zero de De Lee e terceiro Plano de Hodge.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "A equivalência entre os Planos de Hogde e de De Lee somente acontece a nível de espinhas isquiáticas onde o Plano Zero de De Lee está no mesmo nível que o Terceiro Plano de Hodge (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 86,
                    "enunciado": "Qual a conduta diante de um abortamento inevitável ou em curso menor que 12 semanas?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Parto Cesariano",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "AMIU (Aspiração Manual Intrauterina)",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Curagem Uterina",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Curetagem Uterina",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Geralmente, até 12 semanas se faz AMIU (Aspiração Manual Intrauterina). De 12 a 20 semanas: ainda é considerado abortamento e se faz curetagem, pois o colo e a cavidade uterinas ainda são muito pequenos para a limpeza manual. Após 20 semanas: já é considerado parto prematuro e, geralmente, faz-se curagem uterina."
                },
                {
                    "id": 87,
                    "enunciado": "Dentre ao fatores abaixo, diga aquele que NÃO aumenta o risco de rotura uterina:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Trauma externo",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Cesárea anterior",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Manobra de Kristeller",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Polidramnia Isolada",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Tanto Trauma Externo, como: Cesárea Anterior, Manobra de Kristeller, Gemelaridade, Macrossomia e outras condições fragilizam a parede uterina, deixando-a mais propícia à rotura. Somente a Polidramnia não se encaixa como fator para este problema (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 88,
                    "enunciado": "(RESIDÊNCIA MÉDICA / UNIVERSIDADE FEDERAL DO RIO DE JANEIRO – RJ- 2015) Com relação ao puerpério, considera-se normal:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Tendência a eventos trombóticos por aumento das plaquetas e do fibrinogênio.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Piora do esvaziamento gástrico.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Diminuição da temperatura axilar nas primeiras 24horas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Leucocitose de até 20.000 leucócitos/ ml com desvio à esquerda.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "B. Existe uma melhora do esvaziamento gástrico, pois o útero retorna à posição anterior à gestação, reduzindo a pressão abdominal. C. Aumento da temperatura axilar nas 48-72h, chamado de Febre do Leite, decorrente da Apojadura. D. Leucocitose de até 20.000 leucócitos/ ml sem desvio à esquerda é normal."
                },
                {
                    "id": 89,
                    "enunciado": "(RESIDÊNCIA MÉDICA/ SUS SÃO PAULO – SP – 2015) A principal causa de fissuras mamárias durante a amamentação é:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "RN grande para a idade gestacional",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Pega incorreta do RN",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Apojadura Tardia",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Parto Gemelar.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A pega incorreta gera uma tração incorreta na aréola e no mamilo. Ao invés da língua do concepto ordenhar a aréola e o mamilo, ele suga, muitas vezes, somente o mamilo, predispondo à perda da integridade e à formação das fissuras."
                },
                {
                    "id": 90,
                    "enunciado": "(RESIDÊNCIA MÉDICA/ HOSPITAL ALVORADA – SP - 2014) Puérpera de parto vaginal há 2 horas, começa a apresentar sangramento vaginal aumentado e persistente. Útero encontra-se firmemente contraído e indolor à palpação. Diante desse caso clínico, podemos chegar a qual diagnóstico mais provável?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Retenção de restos placentários.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Endometrite.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Laceração de Trajeto",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Atonia Uterina",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A.Restos plancentários grandes impediriam a formação de um útero contraído e indolor à palpação. B. Endometrite levaria alguns dias e o útero seria dolorido à palpação. D. Atonia uterina não ocorreria em um útero contraído."
                },
                {
                    "id": 91,
                    "enunciado": "RESIDÊNCIA MÉDICA/ SANTA CASA DE MOSERICÓDIA DE BARRA MANSA – RJ- 2015) Sobre a Disforia Pós – Parto ou Blues Puerperal podemos afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "É condição temporária, ocorrendo nos primeiros dias do puerpério, sendo resolvida, na maioria das vezes, de forma espontânea até a segunda semana.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "É imperativo o tratamento medicamentoso com acompanhamento clínico semanal e inibição da lactação.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "É necessária a separação imediata entre mãe e RN e a inibição da lactação até a melhora completa do quadro materno.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "É indicada a internação da puérpera em unidade psiquiátrica, em conjunto com o RN, para vigilância mais intensiva.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 92,
                    "enunciado": "Dentre os sintomas de gravidez, escolha o item que tem o sintoma com sua respectiva explicação correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 2,
                    "enunciado_a": "Tonturas: secundária à anemia megaloblástica que é frequente no inicio da gestação.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Polaciúria: o principal fator do aumento miccional em gestante é a anteversoflexão que faz o útero crescer sobre a bexiga, reduzindo sua capacidade volumétrica.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Cloasma Gravídico: secundária à hipotrofia da hipófise e das células melanotróficas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Desmaios: devido ao aumento da pressão arterial sistêmica, principalmente, da Pressão Sistólica.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A.Tontura pode decorrer de uma anemia ferropriva. C. Cloasma Gravídico é secundário a hipertrofia da hipófise e das céls. melanotroficas. D. Desmaios, geralmente, decorrem de uma hipotensão arterial."
                },
                {
                    "id": 93,
                    "enunciado": "Em um paciente cujo mecanismo do parto está em OEA, qual a sequência correta dos tempos?",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 5,
                    "enunciado_a": "Descida, encaixamento, rotação interna da cabeça, rotação externa da cabeça, desprendimento da cabeça, rotação interna das espáduas.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Descida, insinuação, rotação interna da cabeça, rotação externa das espáduas, desprendimento da cabeça, desprendimento das espáduas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Insinuação, descida, rotação interna da cabeça, desprendimento da cabeça, rotação externa da cabeça e rotação interna das espáduas, desprendimento das espáduas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Insinuação, descida, rotação interna da cabeça, desprendimento da cabeça, rotação interna da cabeça e rotação externa das espáduas, desprendimento das espáduas.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A sequência correta do mecanismo do parto é esta e deve ser seguida para que não haja uma distocia de trajeto o que pode gerar uma parada de descida do feto pelo canal de parto, levando a necessidade de um parto abdominal (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 94,
                    "enunciado": "Paciente TNM, 24 anos, G1P0A0, com Idade Gestacional de 20 semanas, com queixa de tonturas e sensação de desmaio (lipotímia). A aferição da PA evidenciou valor de 90 x 50 mmHg (hipotensão arterial). O principal fator que faz com que haja queda fisiológica da PA no segundo trimestre da gravidez, a explicar o quadro apresentado pela paciente, se deve a (ao):",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 2,
                    "enunciado_a": "Diminuição do volume sistólico.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Diminuição do débito cardíaco.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Diminuição da resistência vascular periférica.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Compressão da veia cava inferior.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "Durante a gestação, há aumento do débito cardíaco devido ao aumento da frequência cardíaca e do volume sistólico. Há também aumento da produção de Óxido Nítrico (NO), pelas células endoteliais, que provocam a vasoldilatação e, consequentemente, uma diminuição da resistência vascular periférica, reduzindo a PA."
                },
                {
                    "id": 95,
                    "enunciado": "Durante a gestação, a hipertrofia fisiológica hipofisária provoca o aumento da produção de alfamelanotrofina, sendo esta modificação responsável pelo surgimento de sinais visualmente perceptíveis na pele da gestante. Dentre estes estão:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 2,
                    "enunciado_a": "Sinal de Hunter, Sinal de Kluge e Linha Nigrans.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Acantose Nigricans, Cloasma Gravídico e Sinal de Haller.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Linha Nigrans, Cloasma Gravídico e Sinal de Hunter.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Sinal de Haller, Sinal de Kluge e Sinal de Hunter.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "Sinal de Hunter: Aparecimento de areola secundária na mama. Sinal de Kluge: Coloração violácea da mucosa vaginal. Sinal de Haller: Aumento da vascularização das mamas (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 96,
                    "enunciado": "Uma mulher está grávida do seu segundo filho e seu tipo sanguíneo é RH negativo. Sabendo que seu primeiro filho é Rh positivo, ela perguntou para seu ginecologista sobre o uso de uma vacina para evitar a DHPN. O médico deve responder:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 11,
                    "enunciado_a": "Que a vacina não pode ser mais administrada porque ela provavelmente já possui os anticorpos IgG anti-Rh da primeira gravidez.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Que é necessário primeiro realizar a prova de coombs indireto da mãe. Caso este seja negativo, administrar a vacina até 72 horas após o parto. ",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Que é necessário primeiro realizar a prova de coombs indireta do filho, retirando uma amostra de sangue pelo cordão umbilical (cordocentese).",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Que a vacina é útil em mulheres com Rh positivo, o que não é o caso da paciente.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Para a administração da RHOGAN/ MATHERGAN é necessário a solicitação do Teste de Coombs Indireto Materno. Caso o Coombs Indireto Materno seja negativo, a mãe não foi sensibilizada pelo Fator Rh positivo do primeiro filho e não produz Anti-Rh, podendo tomar a vacina até 72 horas pós-parto. Para confirmar a real necessidade da vacina na gravidez do segundo filho, faz-se o Coombs Direto do Rn que, dando negativo, é sinônimo de que ele não foi “atacado” por anticorpos anti-Rh, confirmando também que a mãe não produziu estes anticorpos. "
                },
                {
                    "id": 97,
                    "enunciado": "Na gestação de evolução fisiológica, espera-se que ocorra:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 11,
                    "enunciado_a": "Aumento da resistência à ação da insulina endógena.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Elevação da resistência vascular periférica no segundo trimestre.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Verticalização na posição do coração materno na radiografia do tórax.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Diminuição da taxa de filtração glomerular.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A. DMG, geralmente, se desenvolve por volta do fim do segundo trimestre e está relacionada com o aumento dos níveis dos Hormônios Diabetogênicos (Estrógenos, Progesterona, Cortisol, HLP, Prolactina) que promovem a utilização, por parte da gestante, de ácidos graxos como fonte de energia, poupando o uso da glicose sanguínea e predispondo ao aumento dos níveis de glicose materna. B. Há aumento da produção de Óxido Nítrico (NO), pelas células endoteliais, que provocam a vasoldilatação e, consequentemente, uma diminuição da resistência vascular periférica, reduzindo a PA. C. Há a horizontalização cardíaca devido ao crescimento uterino que invade a cavidade abdominal e empurra o diafragma de baixo para cima. D. Há aumento da taxa de filtração glomerular (REZENDE: Obstetrícia Fundamental. 11ª ed. Guanabara Koogan. 2011. RJ)."
                },
                {
                    "id": 98,
                    "enunciado": "Recém-nascido a termo apresentou icterícia com 6 horas de vida. O grupo sanguíneo de sua mãe: grupo O – Rh negativo, com teste de Coombs indireto negativo com 28 semanas de gestação e no momento do parto. Recém-nascido: tipagem: A Rh positivo e teste direto de Coombs no sangue de cordão umbilical positivo Exame de sangue periférico: reticulocitose intensa e alguns esferócitos. O diagnóstico mais provável para o caso é:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 8,
                    "enunciado_a": "Doença hemolítica por incompatibilidade de subgrupo sanguíneo",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Doença hemolítica por incompatiblidade ABO",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Doença hemolítica por incompatibilidade Rh",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Esferocitose congênita",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 99,
                    "enunciado": "Luis recebeu alta após 36h do nascimento e com cinco dias de vida começou a apresentar pele amarelada, quando a mãe o levou para consulta na Unidade de Saúde. O exame físico revelou bom estado geral, eupneico, hidratado, ictérico, ativo, alerta e com boa sucção ao leite materno. O exame laboratorial mostrou: tipagem sanguíena O positivo e o coombs direto negativo. A bilirrubina total é 11 mg/dl e a bilirrubina indireta é 10 mg/dl. Considerando os dados acima, qual o diagnóstico mais provável?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 8,
                    "enunciado_a": "Icterícia fisiológica",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Icterícia pelo leite materno",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Icterícia pelo aleitamento",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Icterícia patológica (incompatibilidade ABO)",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 100,
                    "enunciado": "A icterícia constitui-se em um dos problemas mais frequentes no período neonatal e corresponde à expressão clínica da hiperbilirrubinemia. A hiperbilirrubinemia na primeira semana de vida é encontrada tanto no recém-nascido a termo como no prematuro. Diante de um prematuro de 36 semanas de idade gestacional, existem fatores epidemiológicos que orientam o neonatologista para uma investigação clínica e laboratorial. Quais das situações abaixo significam alta probabilidade da icterícia ter origem patológica?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 8,
                    "enunciado_a": "Icterícia com início antes de 24-36 horas de vida, independente da idade pós-natal.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Icterícia com início após 24 horas de vida, com pico no terceiro dia de vida.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Icterícia em recém-nascidos com perda elevada de peso.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Icterícia na presença de bossa serossanguínea.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 101,
                    "enunciado": "A respeito da bilirrubina e do quadro clínico de icterícia neonatal assinale o item FALSO:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 8,
                    "enunciado_a": "A bilirrubina é encontrada no soro normal de mamíferos sendo o produto de degradação, principalmente, da hemoglobina liberada pelos eritrócitos que atingem o termo de sua vida podendo aparecer uma hora após a destruição do glóbulo vermelho ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A icterícia própria do recém-nascido (ou icterícia “fisiológica”) é uma condição clínica em geral benigna e reversível",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Os níveis séricos de bilirrubina se correlacionam com a intensidade da cor amarelada da pele e com a progressão crânio-caudal da icterícia",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Uma ausência da enzima beta-glicuronidase está envolvida no mecanismo da icterícia fisiológica do recém-nascido",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 102,
                    "enunciado": "Um neonato do sexo masculino, nascido com 37 semanas e pesando 3 kg, amamentado exclusivamente ao seio, iniciou icterícia aos oito dias de vida. Com 16 dias de vida, foi levado ao ambulatório em bom estado geral, pesando 3.220 g e com eliminações gastrintestinais normais. Excetuando-se a icterícia, seu exame físico era normal. Nessa ocasião, possuia aumento de bilirrubina às custas de indireta, cuja dosagem sérica foi 12 mg/dl. Seu tipo sanguíneo era A Rh positivo e o de sua mãe O Rh positivo. Seu hemograma e sua contagem de reticulócitos foram normais e o teste de Coombs direto foi negativo. O teste do pezinho também era normal. O menino foi acompanhado ambulatorialmente e aos dois meses não estava mais ictérico. A melhor hipótese diagnóstica é icterícia:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 8,
                    "enunciado_a": "Fisiológica",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "pelo leite materno",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "por prematuridade",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "por eritroblastose fetal",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 103,
                    "enunciado": "Felipe, 23 dias, é atendido com icterícia desde os primeiros dias de vida. Primeiro filho nasceu a termo, bom peso e sem nenhuma intercorrência. Alta conjunta e está em aleitamento humano exclusivo, ganhando 30 g/dia. Excelente estado geral, mama bem, fezes estão claras e a urina considerada normal. Ao examiná-lo você observa icterícia zona II para III e o restante do exame é normal. Assinale a alternativa CORRETA:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 8,
                    "enunciado_a": "Tranquilizar a mãe, pois a criança está bem e ganhando peso, marcar uma nova avaliação em 1 mês",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Orientar banhos de sol e manutenção do leite humano",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Solicitar coleta de bilirrubinas e transaminases",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Orientar suspender o leite materno e utilizar fórmula de leite de vaca própria para a idade",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 104,
                    "enunciado": "Recém-nascido a termo, com 6 horas de vida, filho de mãe primípara sem registro de intercorrências no pré-natal e no parto, está tendo dificuldades com a amamentação. Ao exame clínico, o único sinal observado foi icterícia na face e na parte superior do tronco. Qual o diagnóstico mais provável e qual a conduta adequada?",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 8,
                    "enunciado_a": "Icterícia fisiológica - avaliar bilirrubinas direta e total no recém-nascido",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Icterícia por baixa ingestão - estimular a mamada",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Icterícia pelo leite materno - avaliar bilirrubinas direta e total no recém-nascido e suspender o leite materno",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Icterícia hemolítica - avaliar bilirrubinas direta e total no recém-nascido e, na mãe e no recém-nascido, verificar tipo sanguíneo e fator Rh e realizar teste de Coombs",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 105,
                    "enunciado": "Recém-nascido de 37 semanas de idade gestacional, peso ao nascer de 2.800 g, com 48 horas de vida, apresentando icterícia em zona III de Kramer, sem outras alterações ao exame físico. A mãe, primigesta, tem fisuras mamárias e queixa-se de muita dificuldade para amamentar. O RN está pesando 2.500 g. Tipagem sanguínea da mãe: A Rh negativo; RN: O Rh positivo; Teste de Coombs: negativo. A principal hipótese diagnóstica e fisiopatologia correspondente são:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 8,
                    "enunciado_a": "Icterícia relacionada à amamentação por aumento do ciclo êntero-hepático da bilirrubina",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Icterícia pelo leite materno pela ação de hormônios presentes no leite materno que podem inibir a conjugação hepática da bilirrubina",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Icterícia hemolítica por incompatibilidade sanguínea do grupo Rh",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Hiperbilirrubinemia própria do recém-nascidopor imaturidade hepática",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 106,
                    "enunciado": "Lactente, de 8 meses, durante uma consulta de puericultura, foi constatado que estava em aleitamento materno exclusivo e apresentando alteração da curva de crescimento. Peso = 8kg (Escore Z -3,) E = 61cm (Escore Z -2). Diante desses dados, qual a melhor orientação a ser dada.",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "Explicar à mãe que o desenvolvimento pondero-estatural do lactente está dentro dos padrões da normalidade",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Estimular o aleitamento materno exclusivo em livre demanda, podendo ainda complementar com fórmula infantil",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Estimular a introdução de carboidratos em complemento ao leite materno, não sendo necessária a oferta de água",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Explicar à mãe que é necessária a introdução gradativa de alimentação complementar como frutas, verduras e legumes",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 107,
                    "enunciado": "Um crescimento adequado depende de uma alimentação saudável nos primeiros anos de vida, por isso o Ministério da Saúde (MS) desenvolveu um programa de alimentação saudável. Sobre ele, marque o correto:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "O leite materno é o alimento que melhor se adequa às necessidades nutricionais de crianças até os 4 meses de idade. Preconiza-se que a amamentação seja de 3/3h",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Quando nos referimos à amamentação exclusiva, está indicado dar um pouco de água nos intervalos das mamadas",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Ao se introduzir alimentos mais sólidos está indicado amassá-los ou triturá-los no liquidificador, facilitando a mastigação da criança",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O início de alimentos deve acontecer por volta dos 6 meses com progressão de consistência, já iniciando com alimentos pastosos, sem horários rigorosos",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 108,
                    "enunciado": "Há vários fatores que interferem no crescimento infantil. Numa criança com 3 anos de idade quais os fatores que exercem maior influência no crescimento?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "Fatores genéticos",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Fatores maternos",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Fatores ambientais",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Fatores congênitos",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 109,
                    "enunciado": "Dona Rosalina levou seu filho Luis, de 6 meses, para a consulta de puericultura, onde se evidenciou adequado crescimento e desenvolvimento. Ela estava em aleitamento materno exclusivo. Considerando os “10 passos para uma alimentação saudável” do Ministério da Saúde, qual a melhor orientação nutricional para o pequeno Luis?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "Manter o aleitamento materno exclusivo, pois a criança apresenta adequado crescimento e desenvolvimento",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Manter o aleitamento materno, introduzindo suco de frutas 1 vez ao dia e logo em seguida (1 a 2 semanas após) a papinha de legumes no horário do almoço",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Manter o aleitamento materno e introduzir alimentos complementares 3 vezes ao dia, preferencialmente com uso de dieta espessada, ofertada de colher",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Introduzir leite artificial e na dependência da aceitação da criança, complementar com frutas e papinha salgada",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 110,
                    "enunciado": "Menino de 12 meses veio para consulta de rotina e o pediatra verificou que a criança encontra-se com baixo peso para a idade, magreza e baixa estatura para a idade. Os índices antropométricos utilizados nesse caso para sua conclusão e atualmente recomendados pela OMS e Ministério da Saúde do Brasil são:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "Peso para idade, peso para estatura e índice de massa corporal",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Peso para idade, índice de massa corporal e estatura para idade",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Peso para estatura, índice de massa corporal e estatura para idade",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Peso para idade, peso para estatura, índice de massa corporal e estatura para idade",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 111,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2013 – SUS - PE) Em relação à ruptura prematura das membranas, podemos afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 11,
                    "enunciado_a": "O período de latência é definido como período de tempo decorrido entre o início da perda de líquido e a evolução do quadro clínico para corionamnionite.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O objetivo da antibioticoterapia é manter a gestação até o termo",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A inibição da contratilidade uterina deve sempre ser opção diante de trabalho de parto franco.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O toque vaginal deve ser evitado, só sendo justificado nas gestações com indicação de interrupção ou em trabalho de parto.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "A.O Período de Latência é aquele que antecede o Trabalho de Parto. B. O objetivo da Antibioticoterapia pode ser: por exemplo, tratar uma corioamnionite, prevenir infecções neonatais ou tentar evitar que a colonização bacteriana uterina leve a um Trabalho de Parto Prematuro, pelo menos, até que o corticóide (dexametasona ou betametasona) possa promover a maturação pulmonar fetal. C. A tocólise está indicada quando se tem uma dilatação do colo uterino de até 3-4 cm e sem a presença de corioamnionite e/ ou sofrimento fetal. E. Na corioamnionite há indicação da resolução da gravidez por via vaginal.  "
                },
                {
                    "id": 112,
                    "enunciado": "A utilização do fórcipe não é aconselhada rotineiramente na seguinte condição:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 11,
                    "enunciado_a": "Sofrimento Fetal",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Deflexão de 1º grau",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Situação Transversa Alta",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Cabeça Derradeira",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "O fórcipe, além das indicações acima citadas, pode ser usado quando a parturiente já se encontra exausta, em fetos macrossômicos ou para auxiliar/ aliviar a descida do concepto, pelo canal de parto, em cardiopatas. Fórcipe não é indicado em apresentações altas e transversas, pois, além do maior risco de trauma para o concepto, há maior risco de trauma do canal de parto. "
                },
                {
                    "id": 113,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – HOSPITAL CENTRAL DO EXÉRCITO - RJ) O processo de centralização fetal, diagnosticado pela dopplervelocimetria, é desencadeado por:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 11,
                    "enunciado_a": "Hipertensão Intracraniana Fetal",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Fechamento Precoce dos Ductos Arteriosos",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Hipóxia Fetal",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Prematuridade",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A Centralização Fetal é um processo de tentativa de manutenção fetal da homeostase e da sobrevivência, diante de períodos prolongados de hipóxia e de redução de nutrientes. Ele é causado por alterações placentárias (ex: hematomas retroplacentário, múltiplas calcificações) que podem gerar insuficiência placentária. O organismo fetal redistribui o sangue corporal, priorizando cérebro, coração e suprarrenal."
                },
                {
                    "id": 114,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2014 - UFRJ) Tanto o sofrimento fetal agudo como o crônico representam um risco a vitalidade e ao bem-estar fetal. A condição que os distingue é",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 11,
                    "enunciado_a": "Presença de trabalho de parto.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Hipertensão materna não controlada",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Centralização fetal com baixa de O2",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Polidrâmnio de baixa contratilidade",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "O Sofrimento Fetal Agudo (SFA) ocorre por diminuição abrupta e intensa das trocas materno-fetais. Geralmente, ocorre durante o trabalho de parto. No Sofrimento Fetal Crônico (SFC) há uma redução lenta e contínua da perfusão placentária, comprometendo o feto que tenta manter sua vitalidade mediante mecanismos compensatórios. Geralmente, ocorre nas gestações de alto risco. "
                },
                {
                    "id": 115,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – UFRJ) Gestante a termo, em trabalho de parto no final do segundo período. O parâmetro de estática fetal que não se consegue avaliar ao toque:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 5,
                    "enunciado_a": "Atitude",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Apresentação",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Variedade de Posição",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Altura da Apresentação",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A atitude ou postura fetal é a relação das partes fetais entre si. Geralmente, o concepto apresenta-se em flexão generalizada (Ovóide Fetal). No término do segundo período, não é possível avaliar a relação entre as diversas partes fetais, mediante o toque vaginal, quando somente é possível determinar a apresentação."
                },
                {
                    "id": 116,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – UFRJ) A distocia que pode ser diagnosticada por dois toques sucessivos, com intervalo de duas horas ou mais, com a mulher em trabalho de parto ativo e, frequentemente, associada ao sofrimento fetal e desproporção céfalo-pélvica:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 5,
                    "enunciado_a": "Fase Ativa Prolongada",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Parto Precipitado",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Parada Secundária de Dilatação",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Período Pélvico Prolongado",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A Parada Secundária de Dilatação é diagnosticada por 2 toques consecutivos, com intervalo de, pelo menos, 2 horas, tendo como pré-requisito o Trabalho de Parto Ativo. Geralmente, associa-se ao Sofrimento Fetal e tem como principal causa DCP (desproporção céfalo-pélvica) Absoluta ou Relativa. Já a Fase Ativa Prolongada ocorre quando o colo dilata-se lentamente (menor que 1cm/hora), tendo como possíveis condutas médicas para corrigí-la: amniotomia e o uso de útero-tônicos (ocitocina)."
                },
                {
                    "id": 117,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – HOSPITAL DAS CLÍNICAS DA UFU – MG) Ao avaliar Mileide, 18 anos, em período expulsivo de trabalho de parto, é identificada a variedade de posição occipto-esquerda-anterior. Quantos graus o bebê de Mileide terá que rodar para que faça uma adequada rotação interna e externa respecticamente?",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 5,
                    "enunciado_a": "45º horário e 90º anti-horário ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "45º anti-horário e 90º horário",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "90º horário e 90º anti-horário",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "135º horário e 45º anti-horário",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Para poder alavancar o occipício na sínfise púbica, o feto terá que girar 45º no sentido anti-horário, atingindo a variedade de posição occipto-púbica. Em seguida, após a liberação do polo cefálico, há restituição para a variedade de posição intra-uterina, girando 45º no sentido horário. Mas, para poder alavancar a espádua anterior sob a púbica, ele terá que girar mais 45º no sentido horário, totalizando 90º de rotação no sentido horário."
                },
                {
                    "id": 118,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – SANTA CASA DE MISERICÓRDIA DE BELO HORIZONTE - MG) Considerando o mecanismo do parto, é correto afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 5,
                    "enunciado_a": "O encaixamento é a passagem do vértice do polo cefálico fetal pelo estreito superior da pequena bacia",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A palpação, por meio do toque vaginal, da fontanela anterior determina que a flexão do polo cefálico ocorreu.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A amplitude de rotação interna pode variar por volta de 45º nas variedades de posição occiptoanteriores e por volta de 135º nas variedades de posição occiptoposteriores.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Na rotação externa, a cabeça fetal gira, assumindo a posição contrária àquela que estava quando do encaixamento.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A.O encaixamento ou Insinuação é a passagem do maior diâmetro transverso da apresentação (ex: na cefálica é diâmetro biparietal) pelo estreito superior da bacia materna. B. A palpação, por meio do toque vaginal, da fontanela posterior ou lambda determina que a flexão do polo cefálico ocorreu. D. Na rotação externa, a cabeça fetal gira, assumindo a mesma posição em que se encontrava quando do encaixamento."
                },
                {
                    "id": 119,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2013 – SANTA CASA DE MISERICÓRDIA DE LIMEIRA - SP) Qual a droga de ser administrada para gestante de 32 semanas, em trabalho de parto prematuro, para proteção do SNC do feto?",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 5,
                    "enunciado_a": "Nifedipina ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Atosibana",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Sulfato de Magnésio ",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Progesterona",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "O MgSO4, além de ser anti-convulsivante, também pode ser utilizado durante Trabalho de Parto Prematuro (entre 24 e 32 semanas), objetivando a neuroproteção do feto."
                },
                {
                    "id": 120,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2010 – HOSPITAL UNIVERSITÁRIO SÃO PEDRO - RJ) A hemostasia pós-parto depende da contração do útero e é regulada por diversos mecanismos que caracterizam diferentes fases. Aquela em que o útero atinge tônus elevado e passa a se manter contraído, formando o Globo de Segurança de Pinard, é denominada:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 5,
                    "enunciado_a": "Período de Greenberg",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Trombotamponagem",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Miotamponagem ",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Indiferença miouterina",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "Contração uterina fixa",
                    "imagem_e": "Imagens/",
                    "correta": "e",
                    "dica": "",
                    "comentario": "A.É o quarto período do parto e vai desde o delivramento até 1 hora pós-parto. B. Ocorre devido à formação de trombos nos vasos uterinos, após o delivramento, em decorrência da maior produção de fibrinogênio gestacional. C. Contração da musculatura uterina, no pós-parto, provoca a ligadura dos vasos uterinos. D. Apresenta fases alternadas de contração e relaxamento. "
                },
                {
                    "id": 121,
                    "enunciado": "( RESIDÊNCIA MÉDICA 2015 – HOSPITAL NACIONAL DO CÂNCER - RJ) Sobre puerpério e amamentação, assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Puerpério remoto (10º ao 45º): é o período de transição em que continua a recuperação genital, no entanto em uma velocidade menor, e a lactação começa a influenciar no organismo.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Drogas consideradas lícitas, como o álcool e o tabaco, não necessitam ser suspensas durante a amamentação.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Alterações do humor, com labilidade emocional, são pouco comuns no puerpério imediato.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Quanto aos antibióticos na amamentação, a orientação geral é para serem prescritos durante a amamentação, por curtos períodos de tempo, o que reduz o risco para o lactente. A principal preocupação é a alteração da flora intestinal de criança, levando à diarreia e monilíase, e à interferência na interpretação do resultado de culturas do lactente.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "A.Puerpério Tardio: do 10º ao 45º dia. Puerpério Remoto: depois dos 45 dias. A amamentação auxilia o organismo desde as primeiras mamadas, mediante a liberação de ocitocina que auxilia na contração e involução uterina. B. O tabagismo e etilismo devem ser interrompidos durante a gestação e amamentação. C. As alterações do humor são comuns no puerpério, principalmente, o Blues Puerperal, além da Depressão e da Psicose Puerperais que também podem estar presentes."
                },
                {
                    "id": 122,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – UNIVERSIDADE ESTADUAL PAULISTA - SP) Primípara, nas primeiras horas após o parto vaginal, com sangramento aumentado e persistente. Na investigação diagnóstica, a primeira conduta é:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 6,
                    "enunciado_a": "Avaliar consistência uterina  ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Revisar o canal de parto",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Pesquisar distúrbios da coagulação",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Investigar a presença de restos placentários",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "As principais causas de hemorragia pós-parto são associadas ao mnemônico 4T´s: Atonia Uterina (principal – déficit do tônus), Trauma com laceração do canal, Tecido (restos placentários impedem a contração uterina) e Trombos (ex: hemofilia)."
                },
                {
                    "id": 124,
                    "enunciado": "Em relação à infecção puerperal, podemos concluir que:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 6,
                    "enunciado_a": "Sempre evolui para o quadro de septicemia e choque.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A tromboflebite pélvica é de fácil diagnóstico.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A endometrite é a forma principal e mais frequente de infecção puerperal.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A via de propagação da infecção é somente a ascendente",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A.Nem sempre a infecção puerperal leva à sepse e choque. B. A tromboflebite é de difícil diagnóstico e se deve suspeitar, mesmo com o uso de antibiótico adequado, quando não há melhora do quadro clínico e persistência da febre. D. A principal via de propagação da infecção é a ascendente, mas também a infecção occorre via parametrite e hematogênica."
                },
                {
                    "id": 125,
                    "enunciado": "(RESIDÊNCA MÉDICA 2014 – HOSPITAL MUNICIPAL DE SÃO JOSÉ DOS CAMPOS - SP) Ao se fazer um diagnóstico de mastite puerperal, deve-se:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 6,
                    "enunciado_a": "Tratar somente com anti-inflamatórios e manter aleitamento.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Tratar com antibióticos e anti-inflamatórios e suspender aleitamento.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Não medicar, usar compressas mornas, ordenhar e manter aleitamento.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Tratar com antibióticos e anti-inflamatórios e manter aleitamento.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Além das medidas referidas no item D, ATB (cefalosporinas de 1ª geração), analgésicos e antitérmicos, a mama deve ser suspensa e deve ser esvaziada com a amamentação. A amamentação somente deve ser suspensa somente se a mama estiver drenando secreção purulenta pela papila ou se houver alguma incisão cirúrgica ou lesão próxima ao mamilo. "
                },
                {
                    "id": 126,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2015 – FUNDAÇÃO JOÃO GOULART – HOSPITAIS MUNICIPAIS - RJ) Sinais de alerta vermelho no puerpério devem ser observados atentamente pelo médico de família assistente. O achado clínico que não motiva preocupação no acompanhamento de uma puérpera é",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 6,
                    "enunciado_a": "Fadiga ",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Febre Persistente",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Cefaleia com Escotomas",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Perda Sanguínea Súbita e Profusa",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A.A fadiga é comum devido à grande atenção e aos grandes cuidados direcionados ao concepto. B. A febre fisiológica é a Febre do Leite que acontece por volta de 3-4 dias devido ao processo de apojadura. C. Este é um sinal de iminência de eclampsia. D. A perda sanguínea uterina tem 4 causas principais: atonia uterina, laceração de trajeto, restos placentários e coagulopatias."
                },
                {
                    "id": 127,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2012 – ESCOLA DE SAÚDE PÚBLICA DE PORTO ALEGRE - RS) São alterações fisiológicas da gestação, exceto:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 2,
                    "enunciado_a": "Estrias, câimbras e hemorroidas.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Vertigem, diarreia e xerostomia.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Linha nigra, náuseas e edema de MMII",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Dores hipogástricas, varizes de MMII e leucorreia.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Na gestação, devido à ação da progesterona que reduz o peristaltismo visceral, espera-se justamente o contrário, ou seja, constipação. Além disto, xerostomia e diarreia não são achados fisiológicos da gestação. "
                },
                {
                    "id": 128,
                    "enunciado": "(RESIDÊNCIA MÉDICA 2014 – HOSPITAL DAS CLÍNICAS DA UFU - MG) Durante o pré-natal de Marina, 17 anos, em uma unidade básica de saúde, ela está com várias dúvidas sobre as alterações que irão acontecer em seu organismo durante a gestação. Assinale a alternativa incorreta:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 2,
                    "enunciado_a": "Durante a gravidez, há maior risco de necessidade de uso do hormônio tireoidiano em relação ao estado não gravídico.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Na 20ª semana de gestação, a altura uterina deverá estar na cicatriz umbilical.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A relação volume plasmático/ massa eritrocitária diminui com o evoluir da gestação.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Poderá ocorrer hipertrofia das glândulas sebáceas da mama, os Tubérculos de Montgomery, e a formação de aréola secundária, denominada Sinal de Hunter.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "A hiperpigmentação da pele se deve aos altos índices de progesterona que aumentam a produção e secreção do hormônio melanotrófico.",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "Na letra C, ocorre justamente o contrário, ou seja, um maior aumento de plasma que de eritrócitos, gerando um aumento na relação volume plasmático/ massa eritrocitária e, consequentemente, uma Anemia por Hemodiluição que tende a desaparecer depois do parto."
                },
                {
                    "id": 129,
                    "enunciado": "Como é chamado o delivramento na qual a placenta inserida na parte superior do útero inverte-se e se desprende pela face fetal, em \"forma de guarda-chuva\"? ",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 6,
                    "enunciado_a": "Delivramento em Baudelocque Schultze",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Delivramento em Baudelocque Duncan",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Delivramento em Baudelocque Schultze - Duncan",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Delivramento em Baudelocque Duncan - Schultze",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 131,
                    "enunciado": "O Ministério da Saúde e a Sociedade Brasileira de Pediatria estabeleceram normas de alimentação, para crianças menores de 2 anos, denominadas \"Dez passos para uma alimentação saudável\". Levando em consideração essas recomendações, assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "Dar somente leite materno até os seis meses de idade. Oferecer água apenas em dias muito quentes e chás, sem açúcar em caso de cólica.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A alimentação complementar deve ser, no início, processada em liquidificador, podendo ser oferecida de colher ou em mamadeira com furo maior no bico. Gradativamente aumentar a consistência, até chegar à alimentação da família.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A criança deve receber duas porções de frutas ao dia, porém algumas frutas não podem ser oferecidas nos primeiros seis meses de vida, como kiwi, morango, abacaxi, pelo alto potencial alergênico delas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Se a criança recurar determinado alimento, oferecer novamente em outras refeições. Lembrar que são necessárias, em média, oito a dez exposições a um novo alimento para que ele seja aceito pela criança.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Item A incorreto, uma vez que o Passo 1 instrui para que nos primeiros seis meses seja ofertada amamentação exclusiva, o que significa sem água ou chá.O item B está incorreto por afirmar que deve ser inicialmente processada em liquidificador (quando deve ser espessa como purê desde o início); além disso, a forma correta de oferecer é por colher ao invés de mamadeira com furo alargado. As frutas devem ser oferecidas a partir dos seis meses e de preferência a fruta disponível no local de acordo com a estação (item C incorreto)."
                },
                {
                    "id": 132,
                    "enunciado": "Mãe de lactente procura a Unidade Básida de Saúde para orientação sobre a introdução de alimentação complementar. Qual das orientações abaixo está correta?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "Introduzir frutas, na forma de suco, a partir dos 4 meses de idade e papas aos 5 meses, nas situações em que o lactente estiver em uso de fórmulas infantis nesta faixa etária.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Introduzir ovo após 1 ano de idade, devido risco de desenvolvimento de alergia ao ovo e anafilaxia à vacina de sarampo.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Introduzir aos 6 meses de idade, em crianças em aleitamento materno exclusivo, papas com misturas múltiplas compostas por tubérculos, leguminosas, proteína animal e hortaliças.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Utilizar fórmulas infantis em pré-escolares enriquecidas com vitaminas para a faixa etária.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A orientação oficial é iniciar o uso de alimentação complementar com papa de fruta e salgada aos 6 meses apenas (item A incorreto). O ovo pode ser introduzido já aos 6 meses, desde que seja cozido (item B incorreto). O pré-escolar não necessita fazer uso de fórmulas enriquecidas, podendo receber leite de vaca (item D incorreto)."
                },
                {
                    "id": 133,
                    "enunciado": "Baseado na orientação do Ministério da Saíde, a papa salgada, como alimentação complementar para lactentes saudáveis entre o 6º e o 12º mês, deve ter as seguintes características:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "Ser introduzida a partir do oitavo mês de vida e conter cereais ou tubérculos, legumes, verduras, leguminosas e proteína animal.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Ser introduzida a partir do sexto mês de vida e conter cereais ou tubérculos, legumes, verduras, leguminosas e proteína animal.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Ser introduzida a partir do sexto mês de vida e conter cereais ou tubérculos, legumes, verduras e leguminosas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Ser introduzida a partir do oitavo mês de vida e conter cereais ou tubérculos, legumes, verduras e leguminosas.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A criança deve começar a receber alimentação complementar aos 6 meses de idade, quando deve ser oferecido papa de fruta e papa salgada. A composição da papa salgada deve conter cereais ou tubérculos, legumes, verduras, leguminosas e proteína animal."
                },
                {
                    "id": 134,
                    "enunciado": "Orientações para uma alimentação saudável, para as crianças brasileiras, nos primeiros dois anos de vida, são propostas pela OMS/OPAS/SBP. Em relação a essas orientações, assinale o item ERRADO:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 9,
                    "enunciado_a": "A partir do sexto mês de vida, oferecer, de forma gradual e lenta, outros alimentos, mantendo o leite materno até o segundo ano de vida.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Estimular o consumo diário de frutas, legumes e verduras na alimentação.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A alimentação complementar, após o quinto mês de vida, deve ser semelhante à alimentação da família.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Cuidar da higiene no preparo dos alimentos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": "A amamentação exclusiva deve ser mantida até os 6 meses de vida e, como complementar até os 2 anos, sendo nesse período estimulado o consumo de uma alimentação saudável e diversificada com frutas, verduras e legumes diariamente, sempre tendo cuidado com a higiene desses alimentos durante o preparo. A alimentação deve progredir de consistência ao longo dos meses, tornando-se semelhante à da família aos 12 meses."
                },
                {
                    "id": 135,
                    "enunciado": "Menina de dois anos comparece ao ambulatório de Pediatria com diarreia persistente e emagrecimento. Para avaliação do estado nutricional desta criança, segundo as recomendações atuais do Ministério da Saúde, deve-se considerar os gráficos de:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "Peso para estatura, IMC para idade, prega tricipital e perímetro cefálico.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Peso para idade, peso para estatura, estatura para idade e IMC para idade.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Peso para idade, estatura para idade, circunferência braquial e perímetro cefálico.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Peso para estatura, estatura para idade, perímetro cefálico e circunferência abdominal.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Você poderia responder a questão por exclusão, uma vez que Perímetro cefálico é uma medida de acompanhamento de desenvolvimento neuropsicomotor, não tendo relação com a avaliação nutricional; apenas o item certo não tinha esse medida. A avaliação nutricional utiliza aferições de peso, estatura, pregas cutâneas e circunferência abdominal e, os gráficos disponibilizados pelo Ministério da Saúde para isso são: peso x idade, estatura/comprimento x idade, peso x estatura/comprimento e IMC x idade."
                },
                {
                    "id": 136,
                    "enunciado": "Sobre o crescimento pós-natal, identifique a alternativa INCORRETA:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "A velocidade de crescimento pós-natal é particularmente elevada até os três primeiros anos de vida com declínio gradativo e pronunciado até os seis anos de idade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A partir do quinto ano, a velocidade de crescimento é praticamente constante, de 5 a 6 cm por ano até o início do estirão da adolescência.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O estirão da adolescência ocorre em torno dos 11 anos de idade nas meninas e dos 13 anos nos meninos.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Os diferentes órgãos, tecidos e partes do corpo não crescem com a mesma velocidade.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "Durante a vida intrauterina tem-se o mais acelerado crescimento da vida de criança (em 9 meses passa de uma célula a um bebê em torno de 50 cm e 3 kg), fase de crescimento rápido que se estende até os 2 anos de idade, determinado pela nutrição da criança. A partir daí até a puberdade o crescimento passa a ser relativamente homogêneo, regular (não há aqui uma desaceleração contínua), com um ganho na estatura de cerca de 5-7 cm por ano. Podemos evidenciar o diferente crescimento dos tecidos através do exemplo do tecido neural e linfoide: o neural tem seu maior crescimento no primeiro ano de vida (sendo fundamental a medição do perímetro cefálico até os 2 anos), enquanto o tecido linfoide pouco cresce nessa fase."
                },
                {
                    "id": 137,
                    "enunciado": "Ao analisar o cartão de saúde de criança de 8 meses de idade, verifica-se na curva de peso para a idade que a posição do peso atual encontra-se entre o percentil de 10 a 97 com inclinação ascendente da curva nos dois últimos meses. A conclusão da análise da condição da criança quanto ao peso e a correspondente conduta deverão ser, respectivamente:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "Alertar e investigar causa infecciosa, como por exemplo, infecção urinária.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Alertar e investigar possíveis causas com atenção ao desmame.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Alertar e promover restrição calórica.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Satisfatória e parabenizar a mãe pelo crescimento da criança.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "Quando uma criança tem o peso por idade entre o percentil 10 e 97 e a curva tem inclinação ascendente, a condição do crescimento é satisfatória; a conduta preconizada é que a mãe seja parabenizada sobre o crescimento satisfatório da criança e que se marque o retorno conforme calendário mínimo de consultas. Quando o peso está entre o percentil 10 e 97, mas a curva é descendente ou horizontal, está caracterizada uma situação de alerta; a conduta é investigar possíveis intercorrências que possam justificar a diminuição da velocidade do crescimento e registrá-las no Cartão, tratar as intercorrências presentes e marcar o retorno para 30 dias. Se o peso estiver entre o percentil 3 e 10 e inclinação da curva é ascendente, diz-se também que é situação de alerta. Quando o peso está entre o percentil 3 e o 10 e a inclinação da curva é horizontal ou descendente configura-se uma situação de risco nutricional."
                },
                {
                    "id": 138,
                    "enunciado": "Eduardo, 7 anos, vem ao consultório do pediatra com queixa de que \"não ganha peso\". A mãe faz comparações entre outras crianças da escola e nota que seu filho é muito magro. Ao colocar o peso no gráfico PESO PARA IDADE MENINOS, recomendado pela OMS, o pediatria constata curva em posição abaixo de -3 DV (desvio padrão). Nesse caso, a categoria em que se classifica essa criança é:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "Muito baixo peso para idade",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Magreza acentuada",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Baixo peso para idade",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Magreza",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "O diagnóstico de magreza e magreza acentuada é dado a partir do IMC por idade. Quando se analisa peso a categorização é: menor que -3 DV: muito baixo peso para idade entre -3 DV e -2 DV: baixo peso para idade entre -2 DV e +2 DV: peso adequado para idade  +2 DV: peso elevado para idade."
                },
                {
                    "id": 139,
                    "enunciado": "O crescimento e o desenvolvimento são os eixos referenciais para todas as atividades de atenção a criança e ao adolescente sob os aspectos biológico, afetivo, psíquico e social. Em relação ao crescimento, ao fazer o acompanhamento da criança, é importante sabermos que o lactente no 1° ano de vida cresce em torno de:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 9,
                    "enunciado_a": "12 cm",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "25 cm",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "30 cm",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "15 cm",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Durante o primeiro ano de vida a criança cresce cerca de metade do seu tamanho de nascimento; de forma geral, um bebê nasce medindo 50 cm, logo ele crescerá cerca de 25 cm."
                },
                {
                    "id": 140,
                    "enunciado": "Os diferentes tecidos do corpo apresentam um diferente ritmo de crescimento ao longos dos primeiros anos de vida, o que é representado no gráfico abaixo. Escolha o item que nomeia adequadamente cada curva do gráfico.",
                    "img_url": "Imagens/Crescimento de tecidos.png",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "A- Reprodutivo, B- Geral, C- Neural, D- Linfoide",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A- Linfoide, B- Neural, C- Geral, D- Reprodutivo",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A - Neural, B- Reprodutivo, C- Linfoide, D- Geral",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A- Geral, B- Linfoide, C- Reprodutivo, D- Neural",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "O crescimento neural tem seu crescimento principal até cerca de 6 anos de idade, com pico de crescimento até os 2 anos, quando é acompanhado através do perímetro cefálico, logo, representa a curva B. O crescimento do tecido reprodutivo é quase inexistente durante os primeiros anos de vida, sendo focado no período de puberdade, logo, a partir de 11 anos aproximadamente, como mostrado na curva D. O crescimento estatural apresenta dois picos: nos 2 primeiros anos de vida e no estirão puberal, tendo uma boa representação na curva C. Dessa forma, a ordem correta fica sendo: Linfoide - Neural - Geral - Reprodutivo."
                },
                {
                    "id": 141,
                    "enunciado": "Considerando as curvas de crescimento preconizadas pela OMS (2007) para a avaliação nutricional de uma criança de 2 anos, assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "Obesidade, maior ou igual ao percentil 85 e menor ou igual ao percentil 97.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Sobrepeso, maior que o percentil 97 e menor ou igual ao percentil 99,9.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Obesidade grave,maior que o percentil 97",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Sobrepeso grave, maior ou igual ao percentil 85 e menor ou igual ao percentil 97",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Em uma criança até 5 anos temos: risco de sobrepeso entre p85 e p97; sobrepeso entre p97 e p99,9; obesidade acima de p99,9."
                },
                {
                    "id": 142,
                    "enunciado": "Em relação à icterícia com predomínio de bilirrubina indireta no período neonatal, qual a afirmativa ERRADA?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 8,
                    "enunciado_a": "Em casos de prolongamento da icterícia por mais de duas semanas deverá ser afastada causa de tratamento cirúrgico",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Início antes de 24 horas de vida frequentemente se deve à doença hemolítica",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O aleitamento materno está associado a aumento na incidência de icterícia",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Se o recém-nascido tiver perdido mais de dez porcento do peso de nascimento poderá haver falsa interpretação dos valores da bilirrubina",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "A principal causa cirúrgica de icterícia prolongada é a atresia de vias biliares, que leva ao aumenta da bilirrubina DIRETA, enquanto o enunciado fala de bilirrubina INDIRETA."
                },
                {
                    "id": 143,
                    "enunciado": "Puérpera no quinto dia após o parto normal, retorna à Unidade Básica de Saúde para reavaliação. Na consulta, paciente e recém-nascido apresentam-se em bom estado geral. No exame físico materno, mamas ingurgitadas, dolorosas à palpação, edemaciadas, com saída de leite à expressão. No decorrer da consulta, a paciente queixa-se de que o bebê \"chora muito\" e acredita que seu leite é muito \"fraco\" para ele. A puérpera demonstra preocupação e dúvidas sobre os benefícios da amamentação. A conduta nessa situação deve ser:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Substituir o leite materno pelo leite artificial, para satisfação do bebê e melhora da ansiedade materna.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Encorajar a amamentação e orientar a expressão manual do leite, para evitar o ingurgitamento.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Suspender a amamentação pelo quadro clínico de mastite e prescrever antibióticos orais.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Alternar o leite artificial com leite materno para a complementação nutricional do bebê.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 144,
                    "enunciado": "Marque a alternativa correta em relação aos leites humano e de vaca.",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "A composição do colostro human é igual a do leite humano definitivo, com exceção da caseína, presente em maior concentração no primeiro.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O leite de vaca tem maior teor de proteínas que o leite humano e também diferenças na qualidade proteica, o que compromete a adequada nutrição do RN e lactente.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A melhor biodisponibilidade do ferro presente no leite humano, em relação ao leite de vaca, não é suficiente para proteger o lactente de anemia precoce dos primeiros seis meses de vida.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Tanto em aleitamento materno exclusivo, quanto em uso de leite de vaca, a suplementação de vitaminas A, C e D deve ser iniciada no primeiro mês de vida em função da precária capacidade absortiva dos nutrientes pelo bebê.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 145,
                    "enunciado": "A queixa de \"pouco leite\" ou \"leite fraco\" deve ser sempre valorizada pois, se não valorizada, pode levar ao desmame precoce. Marque a alternativa que apresenta orientação incorreta quanto à amamentação:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Melhorar o posicionamento e a pega do bebê, quando não adequados.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Oferecer as 2 mamas em cada mamada.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Diminuir a frequência das mamadas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Trocar de mama várias vezes em uma mamada se a criança estiver sonolenta ou se não sugar vigorosamente.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 146,
                    "enunciado": "Em relação ao leite materno, é correto afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "Sua elevada quantidade de ácidos graxos de cadeia longa contribuem para melhor visão do RN.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Tem componentes que interferem negativamente no desenvolvimento da visão em RN pré-termo.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Contém alguns aminoácidos, tipo caseína que causam desbalanços.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A presença de lipase estimulada por sais biliares retarda a absorção de gorduras.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 147,
                    "enunciado": "A figura das \"mães de leite\" era frequente em muitos locais, antes do advento da infecção do vírus HIV. No Brasil, ainda no período da escravatura, as negras eram obrigadas a amamentar primeiro o filho da \"sinhá\", para, em seguida, oferecer a mamada aos seus próprios filhos. Contudo, essa atitude de oferecer a mama primeiro ao filho da branca e na sequência ao próprio filho causava um novo problema: o filho da escrava tinha um ganho de peso mais exuberante que a criança branca. Esse relato está relacionado ao fato de que:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "O leite do início da mamada é mais rico em proteína.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O leite do final da mamada é mais rico em proteína.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O leite do início da mamada é mais rico em gordura.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O leite do final da mamada é mais rico em gordura.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 148,
                    "enunciado": "Em relação ao leite materno e ao aleitamento, a alternativa correta é:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "A principal proteína na composição do leite materno é a caseína.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A pega é considerada adequada quando a boca do bebê está bem aberta, grande parte da aréola está inserida dentro da boca do bebê, o lábio inferior está virado para fora e o queixo toca a mama.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O leite materno pode ser armazanado na geladeira por 24 horas e no congelador por 30 dias.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O leite humano contém anticorpos contra bactérias e vírus, com predomínio de IgM, que impede a aderência de micro-organismos à mucosa intestinal.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 149,
                    "enunciado": "A OMS, o Ministério da Saúde e a Sociedade Brasileira de Pediatria recomendam a amamentação exclusiva por aproximadamente 6 meses e complementada até os 2 anos ou mais. As crianças que recebem alimentos complementares antes dos 6 meses em adição ao leite materno comparadas a crianças amamentadas exclusivamente com leite materno:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Adoecem menos de infecção intestinal",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Apresentam menos hospitalizações por doenças respiratórias",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Apresentam diminuição da duração do aleitamento materno",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Não apresentam interferência na absorção de nutrientes do leite materno",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 150,
                    "enunciado": "Comparando-se o leite de vaca com o leite materno, podemos afirmar:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "O leite materno tem mais lactose",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O leite de vaca tem duas vezes mais gordura",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A proteína é igual nos leites de vaca e materno",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O leite de vaca tem menos sais minerais que o leite materno",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 151,
                    "enunciado": "Das alternativas abaixo, qual não é considerada um benefício em curto prazo do aleitamento materno para a saúde da criança?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Reduz a mortalidade e morbidade decorrente de doenças infecciosas, até o segundo ano de vida.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Crianças amamentadas exclusivamente durante 6 meses apresentam menor morbidade por problemas gastrointestinais.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Crianças amamentadas exclusivamente ao seio materno durante 6 meses apresentam maior ritmo de crescimento em relação às não amamentadas ao seio.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Crianças amamentadas exclusivamente durante 6 meses apresentam menor morbidade por doenças alérgicas.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 152,
                    "enunciado": "O aleitamento materno traz muitas vantagens para a criança e para a lactante. Acerca disso, assinale a alternativa correta.",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "O aleitamento materno exclusivo está relacionado com menor incidência de alergia ou intolerância a proteínas do leite de vaca e doença renal crônica na idade adulta, quando comparado com uso de fórmula infantil.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Leite humano contém anticorpos contra muitas bactérias e vírus, além de alta concentração de imunoglobulina M, que previne a aderênciade micro-organismos na mucosa intestinal.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Macrófagos no leite humano são capazes de sintetizar complemento, lisozima e lactoferrina.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Leite materno é um alimento suficiente e adequadamente balanceado para o lactente até 6 meses de idade, exceto a vitamina E, que deve deve ser oferecida a partir de 4 meses de idade para todas as crianças em aleitamento exclusivo com antecedentes familiares de hipercolesterolemia.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 153,
                    "enunciado": "Em relação ao aleitamento materno, é correto afirmar que:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Para retirar o recém-nascido da mama, a nutriz deve esperar que ele adormeça",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Deve se iniciar precocemente, a partir da 4.ª hora de vida",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Deve ser evitado nas mães que apresentaram sangramento maior que dois litros na parturição",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A pega deve ser com o recém-nascido apreendendo toda a aréola mamária e com os lábios evertidos",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 154,
                    "enunciado": "O \"teste do reflexo vermelho\" é uma ferramenta de rastreamento de alterações que possam comprometer a transparência dos meios oculares e, segundo o Ministério da Saúde, deve ser realizado:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Após o primeiro mês quando alterado",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Aproveitando a luminosidade da sala de parto",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Com o feixe de luz a 10 cm de cada olho",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Rotineiramente até o terceiro ano de vida",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 155,
                    "enunciado": "Uma criança atendida na UBS, com 30 dias de vida, não apresentou resposta nas emissões otoacústicas evocadas realizadas no berçário. Você deve orientar a mãe que:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "A criança deve iniciar acompanhamento cognitivo-comportamental nos 6 primeiros meses de vida para detecção de deficiência auditiva.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Como o teste apresenta alta especificidade, a criança apresenta surdez, provavelmente neurossensorial.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A criança deve realizar imediatamente o potencial auditivo evocado de tronco encefálico.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Pode haver resultados falsos positivos, e o exame deve ser repetido até o terceiro mês de vida.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 156,
                    "enunciado": "Ao examinar um RN, em alojamento conjunto, você observa reflexo esbranquiçado na pupila direita, diferentemente da cor vermelho-alaranjada da pupila contralateral. Quais os diagnósticos mais pertinentes a tal achado?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Estrabismo e coloboma de íris.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Hemorragia retiniana e erosão de córnea.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Retinoblastoma e catarata.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Glaucoma congênito e hifema.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 157,
                    "enunciado": "O Teste do reflexo do olho vermelho deve ser realizado em quais recém-nascidos?",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Com suspeita de infecção congênita.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Todos.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Com antecedência familiar de retinoblastoma.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Com suspeita de glaucoma congênito.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 158,
                    "enunciado": "O Teste do Pezinho é realizado após o nascimento e tem por objetivo a triagem do hipotireoidismo, da fibrose cística, da fenilcetonúria e de doença falciforme. Sobre este teste é correto afirmar que deve ser feito:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Entre o terceiro e o sétimo dia.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Entre o oitavo e o décimo quinto dia.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Após um mês de vida.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Logo ao nascer.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 159,
                    "enunciado": "RN nascido a termo é encaminhado para o exame e acompanhamento neonatal de rotina. Antes da alta, foi feita Pesquisa do Reflexo Vermelho (Teste do Reflexo de Bruckner ou Teste do Olhinho), cujo resultado pode ser visto na figura. A respeito do possível diagnóstico após o testem é falso afirmar:",
                    "img_url": "Imagens/Teste do olhinho q.jpg",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "A catarata infantil é uma das principais causas de cegueira, passível de prevenção, e de visão subnormal na infância. Essa condição aparece quando o cristalino apresenta uma opacificação que pode ser total ou parcial, uni ou bilateral.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O retinoblastoma é um tumor que se origina dos retinoblastos imaturos da retina neural, sendo o tumor maligno intraocular mais frequente encontrado em crianças.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A opacidade do cristalino pode ser decorrente de uma variedade de etiologias, podendo resultar de malformações oculares congênitas, de infecções intrauterinas (rubéola, citomegalovírus, varicela, toxoplasmose).",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "As apresentações clínicas mais frequentes da toxocaríase ocular são endoftalmite crônica, formação de granuloma no polo posterior ou formação de granuloma periférico, ocorrendo bilateral e, frequentemente, na forma congênita.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 160,
                    "enunciado": "Em relação ao exame físico do recém-nascido a termo, nas primeiras 24 horas de vida, considere as seguintes afirmativas e marque a correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Ao avaliar a frequência respiratória, a ocorrência de períodos de apneia não deve preocupar o pediatra, já que esse fenômeno decorre da respiração periódica, típica dos recém-nascidos.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A icterícia é extremamente comum no recém-nascido, devendo à imaturidade na conjugação hepática da bilirrubina, e não requer, nesse momento, a realização de nenhum exame complementar para esclarecimento diagnóstico.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Manchas mongólicas consistem em lesões pigmentadas azul-acinzentadas, geralmente com localização lombossacral, que, quando presentes, requerem a realização de exames complementares para exclusão de espinha bífida oculta.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O corrimento vaginal, em geral esbranquiçado e mucoso, é comumente encontrado em meninas e não tem significado patológico.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 161,
                    "enunciado": "Um pilar importante do cuidado pediátrico é a prevenção. Os testes de triagem visam rastrear doenças antes que elas se apresentem clinicamente, com a finalidade de permitir uma intervenção oportuna, evitando ou minimizando os efeitos da evolução natural do agravo. Sobre a prevenção no cuidado pediátrico, assinale a alternativa falsa:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "O \"teste do olhinho\" (teste do reflexo vermelho) é o exame de rastreamento para anormalidades no seguimento posterior do olho ou para opacidades e deve ser feito com oftalmoscópio, por oftalmologista treinado, antes que o recém-nascido receba alta da maternidade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O \"teste da orelhinha\" (triagem auditiva neonatal) deve ser realizada em todos os recém-nascidos internados em UTI antes da alta hospitalar, e não apenas naqueles com indicativos de alto risco.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A incidência de perda auditiva em crianças é maior quando comparada com outras doenças de triagem universal, como a fenilcetonúria, o hipotireoidismo congênito, a anemia falciforme ou a hiperplasia congênita de suprarrenal.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O diagnóstico de hipotireoidismo congênito, uma das doenças rastreadas pelo \"teste do pezinho\", é feito mediante dosagem de TSH em amostra de sangue em papel filtro e pode ser falso-positivo quando colhido antes de 48h.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 162,
                    "enunciado": "A respeito da realização da oximetria de pulso em recém-nascidos, o chamado \"teste do coraçãozinho\", assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "O momento da aferição deve ser entre doze e vinte e quatro horas de vida, antes da alta hospitalar.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O resultado normal é saturação periférica maior ou igual a 97 porcento em ambas as medidas (membro inferior direito e membro superior) e diferença menor que 3 porcento entre as medidas.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O teste visa triar em especial cardiopatias com fluxo pulmonar dependente do canal arterial: atresia pulmonar, síndrome de hipoplasia do coração esquerdo, coartação de aorta crítica e similares.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O local de aferição é o membro inferior direito e um dos membros superiores.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 163,
                    "enunciado": "Recém-nascido de 38 semanas de idade gestacional pela última menstruação, parto normal em ambiente hospitalar, peso ao nascer 2100g (percentil 8 na curva de crescimento intrauterino). Qual a classificação deste RN de acordo com a idade gestacional e o estado nutricional?",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 7,
                    "enunciado_a": "RN termo, grande para a idade gestacional",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "RN limítrofe, adequado para a idade gestacional",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "RN termo, pequeno para idade gestacional",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "RN limítrofe, pequeno para a idade gestacional",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 164,
                    "enunciado": "A técnica e o manejo do aleitamento materno têm grande influência no sucesso desta ação básica de saúde que tem importância direta na redução da morbimortalidade infantil. É necessária a manutenção de um bom fluxo de leite humano. Qual dos fatores citados abaixo interfere na manutenção e aumento da produção do leite humano?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Manutenção de peptídeos supressores na mama",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Grande turgidez e volume mamário",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Pega e posicionamento corretos",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Ingestão materna de alimentos e líquidos",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 165,
                    "enunciado": "Você realiza o Teste do Coraçãozinho no RN a termo que acaba de nascer e verifica o seguinte resultado na oximetria de pulso: oxigenação = 95 porcento nas extremidades e diferença menor que 3 porcento entre as medidas do membros superior direito e membro inferior. Qual a conduta mais adequada nesse caso?",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "Encaminhar o RN para alojamento conjuto, pois ele não tem anormalidade",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Repetir o exame com 1 hora para ter certeza do resultado alterado",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Realizar ecocardiografia dentro das 24h",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Encaminhar o RN para o ambulatório de cardiologia, preferencial até 30 dias",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 166,
                    "enunciado": "A mãe de um recém-nascido está muito angustiada, pois quando chegou em casa percebeu uma lesão plana, ampla, escura (azulada) nas nádegas do bebê que parecia uma “pancada”. No exame físico o RN estava com bom estado geral, ativo e alerta e sem nenhuma anormalidade. Considerando os dados acima, trata-se provavelmente de:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Eritema tóxico",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Mancha mongólica",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Hemangioma capilar",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Máscara equimótica",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 167,
                    "enunciado": "Assinale a opção abaixo que contém doenças rastreadas com a realização do teste do pezinho:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 7,
                    "enunciado_a": "Fenilcetonúria, hipotireoidismo congênito e anemia falciforme",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Deficiência de glico-6-fosfato-desidrogenase(G6PD), sífilis e esfetocitose",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Galactosemia, Leucemia congênita e toxoplasmose",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Fibrose cística, rubéola congênita e catarata congênita",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 168,
                    "enunciado": "Os testes de triagem neonatal são responsáveis pelo alerta precoce de patologias potencialmente graves. Sobre eles, assinale o item correto:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 7,
                    "enunciado_a": "A pesquisa do Reflexo Vermelho identifica infecção ocular gonocócica.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Hipotireoidismo neonatal pode ter repercussão na visão, sendo detectado pelo Teste do Olhinho.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A identificação precoce da fenilcetonúria tem grande importância no prognóstico a longo prazo.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Os testes do olhinho e do pezinho são disponibilizados na rede de atenção à saúde a preços promocionais (populares).",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 169,
                    "enunciado": "O processo de crescimento é multifatorial, englobando a composição genética do indivíduo, fatores neuroendócrinos, ambientais, nutricionais e psicossociais. De acordo com o exposto, assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 9,
                    "enunciado_a": "No primeiro ano de vida ocorre a maior velocidade de crescimento, cerca de 40 cm/ano e ganha cerca de 8 kg.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "No primeiro ano de vida ocorre a maior velocidade de crescimento, cerca de 25 cm/ano e ganha cerca de 6 kg.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A velocidade de crescimento na fase escolar está em torno de 12 cm por ano.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O estirão puberal é mais tardio e amplo nas meninas do que nos meninos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Em geral as crianças nascem com 50 cm e crescem 50 porcento desse valor no primeiro ano, cerca de 25 cm por ano. Além disso, o bebê triplica seu peso de nascimento aos 12 meses; dessa forma, se eles em geral nascem com 3 kg, vão chegar ao 1 ano de idade com 9 kg, tendo então ganho de 6 kg. Durante a fase escolar as crianças crescem cerca de 5-7 cm/ano. O estirão puberal é mais amplo e tardio nos meninos, ocorrendo 2-3 anos após o pico de crescimento das meninas, e durando 2-3 anos a mais."
                },
                {
                    "id": 170,
                    "enunciado": "Nos meninos, o primeiro sinal de amadurecimento sexual é:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 10,
                    "enunciado_a": "Aparecimento da acne juvenil",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Aumento do volume dos testículos",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Aparecimento dos pelos pubianos",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Aumento do comprimento do pênis",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "Classicamente a ordem de aparecimento dos caracteres sexuais masculinos na puberdade é: Aumento testicular maior que aparecimento de pelos (pubarca)  aumento peniano (primeiro comprimento e depois diâmetro)."
                },
                {
                    "id": 171,
                    "enunciado": "Uma adolescente de 11 anos, que apresenta broto mamário unilateral, doloroso ao toque e não tem pelos pubianos, é classificada, conforme o modelo de Tanner como tendo desenvolvimento puberal:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 10,
                    "enunciado_a": "M2P1",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "M1P1",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "M0P1",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "M2P2",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": "O enunciado fala de aparecimento de broto mamário, o que representa M2, e não apresenta pelo pubianos, representando P1."
                },
                {
                    "id": 172,
                    "enunciado": "Assinale a alternativa INCORRETA:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 10,
                    "enunciado_a": "A ginecomastia puberal regride, na maioria dos casos, em um período de até 3 anos.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A menarca, em geral, coincide com a aceleração do crescimento estatural.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O aumento testicular precede outras manifestações sexuais.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Os ciclos menstruais iniciais são, frequentemente, anovulatórios e irregulares, por até três anos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "A menarca é atingida por aproximadamente 1/3 das meninas no estágio 3 de maturação sexual em 9/10 no estágio 4 (95/100 das meninas atingem a menarca entre 10,5 - 14,5 anos de idade). Diferentemente do afirmado no item incorreto, a menarca geralmente ocorre cerca de 1 ano após o pico do crescimento. É muito comum a presença de ciclos menstruais anovulatórios nos primeiros 2 - 3 anos após a menarca."
                },
                {
                    "id": 173,
                    "enunciado": "A.C., de 10 anos de idade, é levada ao ambulatório de pediatria, por sua mãe. A menina apresenta dúvidas sobre o seu desenvolvimento puberal, pois sua melhor amiga teve a menarca há pouco tempo e \"teme que isso ocorra com ela agora\". Ao exame clínico, estáno estágio M2 de Tanner. Pode-se afirmar que a menarca:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 10,
                    "enunciado_a": "Ocorrerá antes do pico do estirão do crescimento",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Deveria ter ocorrido antes do surgimento do broto mamário",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Não guarda relação direta com o estirão puberal",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Provavelmente ocorrerá dentro dos próximos dois a três anos.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": "O primeiro sinal do desenvolvimento puberal no sexo feminino é o surgimento do broto mamário (telarca), que caracteriza o estágio M2 de Tanner. A menarca costuma ocorrer cerca de 2 a 2,5 anos após a telarca e sucede o pico do estirão puberal. Poderíamos até estranhar a faixa de dois a três anos na resposta correta, mas essa referência também pode ser encontrada."
                },
                {
                    "id": 174,
                    "enunciado": "Em relação à puberdade, assinale a alternativa FALSA:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 10,
                    "enunciado_a": "O início da puberdade em meninos é caracterizado pelo aumento do volume testicular",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "É considerado normal o início da puberdade entre 8 a 13 anos em meninas",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O aparecimento de pelos pubianos é a primeira manifestação da puberdade em meninas",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Após a menarca, a menina ainda cresce cerca de 6 a 8 centímetros",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 176,
                    "enunciado": "Segundo as orientações para o atendimento à saúde do adolescente, Ministério da Saúde, 2011, quanto ao desenvolvimento puberal normal da menina é correto afirmar, EXCETO:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 10,
                    "enunciado_a": "Os primeiros ciclos menstruais são geralmente anovulatórios e irregulares",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "É frequente ocorrer um corrimento vaginal claro nos 36 meses que antecedem a menarca",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "As adolescentes podem ainda crescer em média 4 a 6 cm nos 2 ou 3 anos após a menarca",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Deve-se considerar retardo puberal a ausência de qualquer característica sexual secundária a partir dos 13 anos de idade",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": "É frequente ocorrer um corrimento vaginal claro nos 6 ou 12 meses que antecedem a menarca, fato marcante da puberdade feminina. Deve-se portanto esclarecer a adolescente de que esta condição é natura, pois trata-se do crescimento do tecido endometrial uterino, devendo-se reforçar apenas os cuidados com a higiene corporal."
                },
                {
                    "id": 177,
                    "enunciado": "Após a entrevista clínica com adolescente de 15 anos de idade, o médico identifica atitudes e comportamentos preocupantes que precisam ser adequadamente manejados. Assinale a alternativa que contém um desses comportamentos.",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 10,
                    "enunciado_a": "O adolescente revela consumo de bebidas alcoólicas por duas vezes.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O adolescente faz afirmativas que denotam certo radicalismo religioso.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O adolescente responde laconicamente, ao ser indagado sobre suas transformações físicas.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O adolescente declara-se desesperado em função de uma grave discussão com a namorada.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 178,
                    "enunciado": "A adolescência é uma fase caracterizada por várias transformações de ordem física e emocional, faz-se necessário conhecermos algumas particularidades desse importante processo de transição. Sobre essa fase da vida humana, é correto afirmar:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 10,
                    "enunciado_a": "Adolescência e puberdade têm o mesmo significado, correspondendo às alterações biológicas que ocorrem após os 10 anos de idade.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "O primeiro sinal de puberdade nos meninos corresponde ao aumento do volume testicular.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A menarca fisiologicamente não é precedida pelo estirão do crescimento.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O \"gonadostato\" é uma estrutura anatômica localizada na suprarrenal.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 179,
                    "enunciado": "Assinale a afirmativa correta sobre o crescimento e desenvolvimento puberal de meninos e de meninas.",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 10,
                    "enunciado_a": "Nas meninas a pubarca é a primeira manifestação puberal e nos meninas, a primeira manifestação é o aumento do volume e diâmetro peniano.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Nas meninas, o início da puberdade coincide com o início do estirão puberal na fase de aceleração, enquanto nos meninos o início da puberdade ocorre após o estirão puberal.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Nas meninas, o pico da velocidade de crescimento ocorre em M3, com 8 a 10 cm/ano, e desacelara em M4.Nos meninos, o pico da velocidade de crescimento ocorre em G4, com 10 a 12 cm/ano, quando se inicia a desaceleração do crescimento.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "A menarca ocorre cerca de dois anos após o início da puberdade, geralmente,em época de desaceleração do crescimento. O aumento testicular e a mudança vocal predecem o aumento peniano.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 180,
                    "enunciado": "Adolescentede 14 anos e quatro meses, sexo masculino, procura ambulatório porque acha quenão está crescendo igual aos seus colegas. Nada sabe informar sobre o paibiológico. Ao exame físico, apresenta peso e altura no percentil 15; Tanner G1 P1. O achado físico que configura puberdade atrasada é a ausência de:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 10,
                    "enunciado_a": "Pelos pubianos aos 13 anos",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Aumento do pênis aos 14 anos",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Aumento testicular aos 14 anos",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Aumento testicular aos 13 anos",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "c",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 181,
                    "enunciado": "Em relação ao desenvolvimento puberal na mulher, é correto afirmar:",
                    "img_url": "Imagens/",
                    "nivel_id": 2,
                    "grupo_id": 10,
                    "enunciado_a": "O brotamento das mamas costuma ser a primeira alteração puberal reconhecida",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "A menarca é a segunda alteração puberal que normalmente ocorre no desenvolvimento da puberdade",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "A secreção de hormônio do crescimento diminui juntamente com o aumento da gonadotropina no início da puberdade",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "O desenvolvimento de pelos pubianos ocorre após a menarca",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "a",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 182,
                    "enunciado": "D. Maria de Lourdes estava preocupada com o atraso menstrual de sua filha Gabriela, de 14 anos. Ao ser examinada, Gabriela encontra-se com pelos pubianos escuros e espessos (P3 de Tanner), mamas desenvolvidas no estágio M3 de Tanner e no percentil 95 de estatura. O médico após o exame concluiu:",
                    "img_url": "Imagens/",
                    "nivel_id": 4,
                    "grupo_id": 10,
                    "enunciado_a": "Apesar do atraso puberal, Gabriela pode ser acompanhada clinicamente sem necessidade urgente de dosagem hormonal.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Gabriela deve ser acompanhada regularmente e apresenta desenvolvimento normal, a menstruação pode acontecer entre as fases M3 e M4 de Tanner.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "Gabriela apresenta dissociação do desenvolvimento, pois nas fases P3 e M3, não deveria ter ocorrido o pico do estirão.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Gabriela apresenta desenvolvimento normal para uma criança de 12 anos e determinação óssea é fundamental para acalmar a mãe.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "b",
                    "dica": "",
                    "comentario": ""
                },
                {
                    "id": 183,
                    "enunciado": "Sobre a cronologia dos eventos puberais em meninos, assinale a alternativa correta:",
                    "img_url": "Imagens/",
                    "nivel_id": 3,
                    "grupo_id": 10,
                    "enunciado_a": "Em meninos, considera-se normal o início da puberdade a partir de 8 anos.",
                    "imagem_a": "Imagens/",
                    "enunciado_b": "Nos meninos, o estirão puberal costuma anteceder o aumento do volume testicular.",
                    "imagem_b": "Imagens/",
                    "enunciado_c": "O pico do estirão de crescimento na maior parte dos casos coincide com o estágio de Tanner G2.",
                    "imagem_c": "Imagens/",
                    "enunciado_d": "Na maioria dos meninos, o início do estirão ocorre no estágio G3 de Tanner, ou quando o volume testicular atinge 10 ml.",
                    "imagem_d": "Imagens/",
                    "enunciado_e": "",
                    "imagem_e": "Imagens/",
                    "correta": "d",
                    "dica": "",
                    "comentario": ""
                }
            ];
    }
    return PerguntasJSON;
}());

//# sourceMappingURL=PerguntasJSON.js.map

/***/ }),

/***/ "../../../../../src/app/play-game/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* 1ª tela */\r\n/* escolher config */\r\n\r\n\r\n.info-more{\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tbackground-color: #FFD700;\r\n\tmargin: -2px 0 0 -245px;\r\n\tborder-radius: 10px 0 10px 10px;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.9);\r\n\twidth: 250px;\r\n\theight: 80px;\r\n\tcolor: #222;\r\n\tword-wrap: white-space;\r\n\tpadding: 10px;\r\n}\r\n\r\n\t.more-btn:hover .info-more{\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n.info-sala{\r\n\tbackground-color: #fff; \r\n\tcolor: #000; \r\n\tborder-radius: 100px; \r\n\tpadding: 0 8px;\r\n}\r\n\r\n\t\r\n\r\n.config-game, .config-game-info-personal{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.config-game header{\r\n\twidth: 100%;\r\n\theight: 20%;\r\n\t/* background-color: #888; */\r\n}\r\n\r\n.config-game main{\r\n\twidth: 100%;\r\n\theight: 70%;\r\n\t/* background-color: #999; */\r\n}\r\n\r\n.config-game footer{\r\n\twidth: 100%;\r\n\theight: 10%;\r\n\t/* background-color: #888; */\r\n}\r\n\r\n.game-buttom-conc{\r\n\twidth: 50%;\r\n}\r\n\r\n/* Select and Image and Form */\r\n\r\n.textGame{\r\n\tfont-size: 16px;\r\n\tcolor: lightgray;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.timer:hover{\r\n\tborder-radius: 100px;\r\n\tborder: 2px solid #09B268;\r\n\tbox-sizing: border-box;\r\n\tcursor: pointer;\r\n}\r\n\r\n.namePlayer{\r\n\tfont-size: 30px;\r\n\tcolor: lightgray;\r\n\tpadding: 25px;\r\n}\r\n\r\n.avatar{\r\n\tborder-radius: 100px;\r\n\tbox-sizing: border-box;\t\r\n\tcursor: pointer;\r\n}\r\n\r\n\t.avatarP1:hover{\r\n\t\tborder-radius: 100px;\r\n\t\tborder: 2px solid #BF19FF;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t.avatarP2:hover{\r\n\t\tborder-radius: 100px;\r\n\t\tborder: 2px solid #B4FF00;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t.avatar input[type=radio] {\r\n\t\tdisplay:none;\r\n\t}\r\n\r\n\t.avatar img {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\r\n\r\n.btn-interface{\r\n\tbackground-color: #666;\r\n\tcolor: #ddd;\r\n\tborder-radius: 15px;\r\n\r\n}\r\n\r\n.btn-interface:hover{\r\n\tborder-radius: 15px;\r\n\tbackground-color: #888;\r\n\t\r\n\r\n}\r\n\r\n/* 2ª Tela */\r\n/* assuntos */\r\n\r\n\r\n/* Checkbox */\r\n.pull-right input[type=checkbox] {\r\n\tdisplay:none;\r\n}\r\n\r\n.list-group-item{\r\n\tpadding: 10px;\r\n\tborder-radius: 15px;\r\n\tborder: 1px solid #fff;\r\n\ttext-align: left;\r\n}\r\n\r\n.filtroAutomatic:hover{\r\n\tbackground-color: lightgrey;\r\n\tborder-radius: 15px;\r\n\tcursor: pointer;\r\n}\r\n\r\n\r\n/* 3ª tela */\r\n\r\n/* elementos */\r\n\r\n.player-game{\r\n\tdisplay: inline;\r\n\tfloat: left;\r\n\twidth: 25%;\r\n\theight: 90%;\r\n\tbackground-color: #222;\r\n\tborder-radius: 15px;\r\n\tpadding: 5px;\r\n\tcolor: #000;\r\n}\r\n\r\n.elements {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n\t.player-game header{\r\n\t\twidth: 100%;\r\n\t\theight: 30%;\r\n\t\t/* background-color: #444; */\r\n\t}\r\n\r\n\t\t.avatar-player{\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100px;\r\n\t\t\t/* background-color: red; */\r\n\t\t\t\tbackground-size: contain; \r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\tbackground-position: center;\r\n\t\t\tmargin-top: 20px;\r\n\t\t}\r\n\r\n\t.player-game main{\r\n\t\twidth: 100%;\r\n\t\theight: 50%;\r\n\t\t/* background-color: #555; */\r\n\t\tpadding-top: 20px;\r\n\t\toverflow-y: auto;\r\n\t}\r\n\r\n\t.player-game footer{\r\n\t\twidth: 100%;\r\n\t\theight: 20%;\r\n\t\t/* background-color: #444; */\r\n\t\t\r\n\t}\r\n\r\n\r\n\t/* Players BG */ \r\n\r\n\t/* só precisa mudar as cores aqui */\r\n\t.text-cad{\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #000;\r\n\t}\r\n\r\n\t.bg-play1{\r\n\t\tbackground-color: #FFD700;\r\n\t}\r\n\r\n\t.bg-play2{\r\n\t\tbackground-color: #FFD700;\r\n\t}\r\n\r\n\t.bg-off{\r\n\t\tbackground-color: lightgray;\r\n\t\topacity: 0.3;\r\n\t}\r\n\r\n.card-game{\r\n\tdisplay: inline;\r\n\tfloat: left;\r\n\twidth: 45%;\r\n\theight: 90%;\r\n\t/* background-color: #fff; */\r\n\tmargin: 0 2.5%;\r\n\tborder-radius: 15px;\r\n\tcolor: #000;\r\n}\r\n\r\n\t.card-game header{\r\n\t\twidth: 100%;\r\n\t\theight: 25%;\r\n\t\t\r\n\t\t/* background-color: #444; */\r\n\r\n\t}\t\r\n\t\t\r\n\t\t.item-header-card{\r\n\t\t\twidth: 100%; \r\n\t\t\theight: 60%; \r\n\t\t\t/* background-color: #888; */\r\n\r\n\t\t}\r\n/*enunciado da carta*/\r\n\t\t.item-header-card p{\r\n\r\n\t\t\tmax-height: 120px; \r\n\t\t\t/*background-color: #888;*/\r\n\t\t\toverflow-y: auto;\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t.progress-bar, .progress-bar-striped{\r\n\t\t\tborder-radius: 15px;\r\n\t\t}\r\n\r\n\t.card-game main{\r\n\t\twidth: 100%;\r\n\t\theight: 30%;\r\n\t\t/* background-color: #777; */\r\n\t\t\r\n\t}\r\n\r\n\t\t.container-enunciado-img{\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\t/* height: calc(((100vh - 50px) - 20px) - 60vh); */\r\n\t\t\tpadding: 5%;\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t\t.enunciado-img{\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tbackground-size: contain;\r\n\t\t\t\tbackground-position: center center;\r\n\t\t\t\t-webkit-background-size: contain;\r\n\t\t\t\t-moz-background-size: contain;\r\n\t\t\t\t-o-background-size: contain;\r\n\t\t\t}\r\n\r\n/*Respostas da carta*/\r\n\t.card-game footer{\r\n\t\twidth: 120%;\r\n\t\theight: 55%;\r\n\t\tmargin-left: -10%;\r\n\r\n\t\t/* background-color: #444; */\r\n\t\tpadding-top: 25%;\r\n\t}\r\n\r\n\t\t.alternativa-card{\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 80%;\r\n\t\t}\r\n\r\n\t\t.btn-quest{\r\n\t\t\t/* height: 90%; */\r\n\t\t\tpadding-bottom: 10px;\r\n\t\t}\r\n\r\n\t\t.btn{\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.btn:disabled{\r\n\t\t\tcursor: not-allowed;\r\n\t\t}\r\n\r\n\r\n\t\t.btn-question{\r\n\t\t\tclear: both;\r\n\t\t\tborder: 0;\r\n\t\t\tpadding: 0;\r\n\t\t\tmargin: 0;\r\n\t\t\ttext-align: center;\r\n\t\t\twidth: 100%;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\tmargin: 1px;\r\n\t\t\tbackground-color: #999;\r\n\t\t\tpadding: 0 5px;\r\n\t\t\toverflow-y: auto;\r\n\t\t\tcursor: pointer;\r\n\t\t\t/* border: 1px solid #000; */\r\n\t\t}\r\n\r\n\t\t\t.btn-question:hover{\r\n\t\t\t\tbackground-color: #777;\r\n\t\t\t}\r\n\r\n\t\t\t.btn-question:disabled{\r\n\t\t\t\tbackground-color: #777;\r\n\t\t\t}\r\n\r\n\t\t.text-buttom {\r\n\t\t\tfont-size: 1em;\r\n\t\t\tcolor: #000;\r\n\t\t}\r\n\r\n\t\t.btn-zoom{\r\n\t\t\tmargin: 0 auto; \r\n\t\t\tpadding: 5px; \r\n\t\t\tbackground-color: \r\n\t\t\ttransparent; \r\n\t\t\tborder: none;\r\n\t\t\tborder-radius: 20px;\r\n\t\t}\r\n\t\t\t.btn-zoom:hover{\r\n\t\t\t\tbackground-color: #E8E8E8;\r\n\t\t\t}\r\n\r\n\r\n/* Animação da carta */\r\n\r\n/* O container geral define a perspectiva */  \r\n\t\t.flip-container { -webkit-perspective: 1000; perspective: 1000; }  \t\r\n\r\n\t\t/* vira os containers frente e verso quando o mouse passa em cima */\r\n\t\t.flip-container.hover .flipper {  \t\t\r\n\t\t  -webkit-transform: rotateY(180deg);  \t\t\r\n\t\t          transform: rotateY(180deg);  \t\r\n\t\t}    \r\n\t\t.flip-container, .front, .back {  \t\r\n\t\t  width: 100%;\r\n\t\t  height: 100%;\r\n\t\t}\r\n\r\n\t\t/* define a velocidade da transição */\r\n\t\t.flipper {  \t\r\n\t\t  transition: 0.6s;  \t\r\n\t\t  -webkit-transform-style: preserve-3d;  \t\r\n\t\t          transform-style: preserve-3d;    \t\r\n\t\t  position: relative;\r\n\t\t  width: 100%;\r\n\t\t  height: 100%;\r\n\t\t}\r\n\t\t    \r\n\t\t/* esconde o verso durante a animação */\r\n\t\t.front, .back {  \t\r\n\t\t  -webkit-backface-visibility: hidden;  \t\r\n\t\t          backface-visibility: hidden;    \t\r\n\t\t  position: absolute;  \t\r\n\t\t  top: 0;  \t\r\n\t\t  left: 0;\r\n\t\t  border-radius: 15px;\r\n\t\t}\r\n\t\t    \r\n\t\t/* frente posicionada sobre o verso */\r\n\t\t.front { \r\n\t\t\tz-index: 2;\r\n\t\t\twidth: 100%; \r\n\t\t\theight: 100%;\r\n\t\t\tpadding: 10px;\r\n\t\t\tbackground-color: #777;\r\n\r\n\t\t}\r\n\t\t\t.img-front{\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t/*background-color: #2E9FC4;~*/\r\n\t\t\t\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/img/bgMed.png") + ");\r\n\t\t\t}\r\n\t\t\t\t.img-logo-card{\r\n\t\t\t\t\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/img/bgMed.png") + ");\r\n\t\t\t\t\tbackground-size: 100% 100%; \r\n\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t}\r\n\r\n\t\t/* verso inicialmente escondido */\r\n\t\t.back { \r\n\t\t\t-webkit-transform: rotateY(180deg); \r\n\t\t\t        transform: rotateY(180deg);\r\n\t\t\tbackground-color: #fff;\r\n\t\t\tborder: 3px solid #0028ff;\r\n\t\t}\r\n\r\n/* coments dica */\r\n\r\n.shadow-modal{\r\n\theight: 100%; \r\n\twidth: 100%; \r\n\tbackground-color: black; \r\n\topacity: 0.5; \r\n\tposition: absolute; \r\n\tmargin: 0 auto; \r\n\ttop: 0; \r\n\tleft: 0; \r\n\tfloat: left;\r\n}\r\n\r\n.modal-coments-dica{\r\n\theight: 100%; \r\n\twidth: 100%; \r\n\tposition: absolute; \r\n\tmargin: 0 auto; \r\n\ttop: 0; left: 0; \r\n\tfloat: left; \r\n\tdisplay: table;\r\n}\r\n\r\n\t.modal-open{\r\n\t\topacity: 1; \r\n\t\theight: 60%; \r\n\t\twidth: 50%; \r\n\t\tbackground-color: #46B2A2;\r\n\t\tmargin: 0 auto; \r\n\t\tmargin-top: 150px;\r\n\t\tborder-radius: 15px;\r\n\t}\r\n\r\n\t.close-bt{\r\n\t\tborder-radius: 20px; \r\n\t\tmargin: 5px; \r\n\t\tpadding: 5px 10px;\r\n\t}\r\n\r\n.container-modal-game-card-zoom{\r\n\tcolor: darkgray;\r\n}\r\n\r\n/* .avatar input:checked {\r\n\tbackground-color: red;\r\n\twidth: 100px;\r\n} */\r\n\r\n@media screen and (max-width: 1200px) {\r\n    \r\n    .player-game header{\r\n\t\twidth: 100%;\r\n\t\theight: 20%;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\tdiv.card-header{\r\n\t\theight: 100%;\r\n\t\tpadding: 1px;\r\n\t}\r\n\r\n\t\t.avatar-player{\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 50px;\r\n\t\t\t/* background-color: red; */\r\n\t\t\t\tbackground-size: contain; \r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\tbackground-position: center;\r\n\t\t\tmargin-top: 5px;\r\n\t\t}\r\n\r\n\t.player-game main{\r\n\t\twidth: 100%;\r\n\t\theight: 60%;\r\n\t\t/* background-color: #555; */\r\n\t\tpadding-top: 20px;\r\n\t\toverflow-y: auto;\r\n\t}\r\n\r\n\t.player-game footer{\r\n\t\theight: 10%;\r\n\t}\r\n}\r\n\r\n\r\n@media screen and (max-width: 750px) {\r\n\r\n    .namePlayer{\r\n    \tfont-size: 1.5em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play-game/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gameOn\" class=\"time-count-game-full\">\n      <p *ngIf=\"time.fullgame < 31\"> <img src=\"http://200.19.181.126/jogos/bets/assets/img/countimeinvert.png\" alt=\"Tempo\" width=\"25px\" height=\"25px\"> <span *ngIf=\"timeGameCountMinRegress < 10\">0</span>{{timeGameCountMinRegress}}m : <span *ngIf=\"timeGameCountSecondsRegress < 10\">0</span>{{timeGameCountSecondsRegress}}s</p>\n      <!-- <p style=\"color: white;\">{{nq_lvl1}} - {{nq_lvl2}} - {{nq_lvl3}}</p> -->\n</div>\n\n  <div *ngIf=\"!show\" class=\"config-game\">\n    <div *ngIf=\"!shower\" class=\"config-game-info-personal\">\n\n    \t<header>\n    \t\t<div class=\"row\">\n\t\t        <div class=\"col-sm-4\"></div>\n\t\t        <div class=\"col-sm-4\">\n\t\t          <label for=\"exampleInputEmail1\" class=\"display-4 textGame\">Escolha o Tempo de Jogo</label>\n\t\t          <div class=\"form-group\">\n\t\t            <div class=\"row\">\n\t\t              <div class=\"col-sm-3\">\n\t\t                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 5 ? '#09B268' : 'transparent', 'padding': time.fullgame == 5 ? '5px' : '0', 'border': '2px solid #09B268'}\">\n\t\t                  <img src=\"../../../assets/img/time05min.png\" alt=\"\" class=\"timer\">\n\t\t                  <input type=\"radio\" name=\"fullgame\" value=\"5\" (click)=\"time.fullgame = 5\" checked>\n\t\t                </label>\n\t\t              </div>\n\t\t              <div class=\"col-sm-3\">\n\t\t                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 15 ? '#09B268' : 'transparent', 'padding': time.fullgame == 15 ? '5px' : '0', 'border': '2px solid #09B268'}\">\n\t\t                  <img src=\"../../../assets/img/time15min.png\" alt=\"\" class=\"timer\">\n\t\t                  <input type=\"radio\" name=\"fullgame\" value=\"15\" (click)=\"time.fullgame = 15\">\n\t\t                </label>\n\t\t              </div>\n\t\t              <div class=\"col-sm-3\">\n\t\t                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 30 ? '#09B268' : 'transparent', 'padding': time.fullgame == 30 ? '5px' : '0', 'border': '2px solid #09B268'}\">\n\t\t                  <img src=\"../../../assets/img/time30min.png\" alt=\"\" class=\"timer\">\n\t\t                  <input type=\"radio\" name=\"fullgame\" value=\"30\" (click)=\"time.fullgame = 30\">\n\t\t                </label>\n\t\t              </div>\n\t\t              <!-- Full time, infinity -->\n\t\t              <div class=\"col-sm-3\"> \n\t\t                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 999999 ? '#09B268' : 'transparent', 'padding': time.fullgame == 999999 ? '5px' : '0', 'border': '2px solid #09B268'}\">\n\t\t                  <img src=\"../../../assets/img//timefullmin.png\" alt=\"\" class=\"timer\">\n\t\t                  <input type=\"radio\" name=\"fullgame\" value=\"999999\" (click)=\"time.fullgame = 999999\">\n\t\t                </label>\n\t\t              </div>\n\n\t\t            </div>\n\t\t          </div>          \n\t\t        </div>\n\t\t        <div class=\"col-sm-4\"></div>\n\t\t    </div>\n    \t</header>\n\n    \t<main>\n\t      <div class=\"row\">\n\t        <div class=\"col-sm-5\">\n\t          <!--  -->\n\t          <form #fp1=\"ngForm\" (ngSubmit)=\"onSubmit(fp1)\" novalidate>\n\t              <div class=\"form-group\">\n\t                <label for=\"exampleInputEmail1\" class=\"display-4 namePlayer\">Primeiro Jogador</label>\n\t                <p class=\"display-4 textGame\">Escolha seu Avatar</p>\n\t              <!-- Avatar Play1 -->               \n\t                  <div class=\"form-group\">\n\t                    <div class=\"row\">\n\t                    <ng-template ngFor let-item [ngForOf]=\"avatar\" let-Index=\"index+1\">\n\t                      <div class=\"col-sm-2\">\n\t                        <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': play1.id == Index ? '#BF19FF' : 'transparent', 'padding': play1.id == Index ? '5px' : '0', 'border': '2px solid #BF19FF'}\">\n\t                          <img src=\"../../../assets/img/{{Index}}.png\" alt=\"\" class=\"avatarP1\">\n\t                          <input type=\"radio\" name=\"avatar\" value=\"{{Index}}\" checked [(ngModel)]=\"play1.id\" (click)=\"testClickAvatar()\" required>\n\t                        </label>\n\t                          </div>\n\t                    </ng-template>\n\t                    </div>\n\t                </div>\n\t                <div class=\"row\">\n\t                <div class=\"col-lg-6\">\n\t                  <div class=\"input-group\">\n\t                    <span class=\"input-group-addon\">Nome</span>\n\t                    <input type=\"text\" class=\"form-control\" id=\"player1\" placeholder=\"Jogador 1\" [(ngModel)]=\"play1.nome\" name=\"player1\" required maxlength=\"10\">\n\t                  </div>\n\t                </div>\n\t                <div class=\"col-lg-6\">\n\t                  <div class=\"input-group\">\n\t                    <span class=\"input-group-addon\">Sala</span>\n\t                    <input type=\"text\" class=\"form-control\" id=\"player1\" placeholder=\"A4345\" name=\"player1\" required minlength=\"4\" maxlength=\"10\" [(ngModel)]=\"play1.classRoom\"> <!-- [(ngModel)]=\"statistics.sala\" -->\n\t                    <span class=\"input-group-btn\">\n\t                  <button type=\"button\" class=\"btn btn-secondary more-btn\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Informe aqui a sala que deseja ser alocado!\">\n\t                    <span class=\"info-sala\">?</span>\n\t                    <div class=\"info-more\">\n\t                    \t<p>Digite aqui o código da sala</p>\n\t                    \t<p>que seu professor, informou</p>\n\t                    </div>\n\t                  </button>\n\t                    </span>\n\t                  </div>\n\t                </div>\n\t              </div>\n\t              <br>\n\t              <div class=\"row\">\n\t                <div class=\"col-lg-12\">\n\t                  <div class=\"input-group\">\n\t                    <span class=\"input-group-addon\">Instituição</span>\n\t                    <input type=\"text\" class=\"form-control\" id=\"unip1\" placeholder=\"Universidade de Fortaleza\" name=\"unip1\" required [(ngModel)]=\"play1.place\">\n\t                  </div>\n\t                </div>\n\t              </div>\n\n\t              </div>\n\t          </form>\n\t        </div>\n\n\t        <div class=\"col-sm-2\"></div>\n\n\t        <div class=\"col-sm-5\">\n\t          <form #fp2=\"ngForm\" (ngSubmit)=\"onSubmit(fp2)\" novalidate>\n\t              <div class=\"form-group\">\n\t                <label for=\"exampleInputEmail1\" class=\"display-4 namePlayer\">Segundo Jogador</label>\n\t                <p class=\"display-4 textGame\">Escolha seu Avatar</p>\n\t                <!-- Avatar Play2 -->               \n\t                <div class=\"form-group\">\n\t                    <div class=\"row\">\n\t\t                    <ng-template ngFor let-item [ngForOf]=\"avatar\" let-Index=\"index+1\">\n\t\t                      <div class=\"col-sm-2\">\n\t\t                        <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': play2.id == Index ? '#B4FF00' : 'transparent', 'padding': play2.id == Index ? '5px' : '0', 'border': '2px solid #B4FF00'}\">\n\t\t                          <img src=\"../../../assets/img/{{Index}}.png\" alt=\"\" class=\"avatarP2\">\n\t\t                          <input type=\"radio\" name=\"avatar\" value=\"{{Index}}\" checked [(ngModel)]=\"play2.id\" (click)=\"testClickAvatar()\" required>\n\t\t                        </label>\n\t\t                          </div>\n\t\t                    </ng-template>\n\t                    </div>\n\t                </div>\n\t                <div class=\"row\">\n\t                <div class=\"col-lg-6\">\n\t                  <div class=\"input-group\">\n\t                    <span class=\"input-group-addon\">Nome</span>\n\t                    <input type=\"text\" class=\"form-control\" id=\"player2\" placeholder=\"Jogador 2\" [(ngModel)]=\"play2.nome\" name=\"player2\" required maxlength=\"10\">\n\t                  </div>\n\t                </div>\n\t                <div class=\"col-lg-6\">\n\t                  <div class=\"input-group\">\n\t                    <span class=\"input-group-addon\">Sala</span>\n\t                    <input type=\"text\" class=\"form-control\" id=\"player2\" placeholder=\"A4345\" name=\"player2\" required minlength=\"4\" maxlength=\"10\" [(ngModel)]=\"play2.classRoom\">\n\t                    <span class=\"input-group-btn\">\n\t                  <button type=\"button\" class=\"btn btn-secondary more-btn\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Informe aqui a sala que deseja ser alocado!\">\n\t                    <span class=\"info-sala\">?</span>\n\t                    <div class=\"info-more\">\n\t                    \t<p>Digite aqui o código da sala</p>\n\t                    \t<p>que seu professor, informou</p>\n\t                    </div>\n\t                  </button>\n\t                    </span>\n\t                  </div>\n\t                </div>\n\t              </div>\n\t              <br>\n\t              <div class=\"row\">\n\t                <div class=\"col-lg-12\">\n\t                  <div class=\"input-group\">\n\t                    <span class=\"input-group-addon\">Instituição</span>\n\t                    <input type=\"text\" class=\"form-control\" id=\"unip2\" placeholder=\"Universidade de Fortaleza\" name=\"unip2\" required [(ngModel)]=\"play2.place\">\n\t                  </div>\n\t                </div>\n\t              </div>\n\t              </div>\n\t          </form>\n\t        </div>\n\t      </div>\n    \t</main>\n\n    \t<footer>\n\t      <div class=\"row\">\n\t        <div class=\"col-sm-3\"></div>\n\t        <div class=\"col-sm-6\">\n\t          <div class=\"form-group\">\n\t            <button type=\"submit\" (click)=\"GetGrupo()\" (click)=\"AllRigh()\" class=\"btn btn-interface btn-lg game-buttom-conc\" (click)=\"shower = !shower\" [disabled]=\"!groupOk\"> TUDO PRONTO </button> <!-- [disabled]=\"!fp2.form.valid || !fp1.form.valid\" -->\n\t          </div>\n\t        </div>\n\t        <div class=\"col-sm-3\"></div>\n\t      </div>\n    \t</footer>\n    </div>\n\n    <div *ngIf=\"shower\" class=\"config-game\"> <!-- Filtra o que vai aparecer -->\n    \t<header>\n    \t\t<label for=\"exampleInputEmail1\" class=\"display-4 namePlayer\">Escolha o(s) Assunto(s)</label>\n    \t</header>\n    \t<main >\n    \t  <div class=\"container\">\n            <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\">\n                <ul class=\"list-group\">\n                  <br/>\n                  <ng-template ngFor let-item [ngForOf]=\"grup\" let-Index=\"index\">\n                    <label class=\"filtroAutomatic\" (click)=\"checarfiltro(item.id,!item.valor,item.nome,Index)\">\n                      <li class=\"list-group-item\" [ngStyle]=\"{'background-color': item.valor ? '#888' : 'transparent'}\">\n                        <span>{{item.nome}}</span>\n                        <div class=\"pull-right\">\n                          <input id=\"{{item.valor}}\" name=\"{{item.valor}}\" type=\"checkbox\" [(ngModel)]=\"item.valor\"/>\n                        </div>\n                      </li>\n                    </label>\n                  </ng-template>            \n                  <br/>\n                </ul>\n            </div>\n          </div>\n    \t</main>\n    \t<footer>\n    \t  <div class=\"row\">\n\t        <div class=\"col-sm-3\"></div>\n\t        <div class=\"col-sm-6\">\n\t          <div class=\"form-group\">\n\t            <button type=\"button\" class=\"btn btn-interface btn-lg game-buttom-conc\" (click)=\"liberar = true\" (click)=\"show = !show\" (click)=\"gameOn = !gameOn\" (click)=\"createGameCards()\" [disabled]=\"!lFiltro\"> {{show ? 'hide' : 'COMEÇAR'}} </button>\n\t          </div>          \n\t        </div>\n\t        <div class=\"col-sm-3\"></div>\n\t      </div>    \t\t\n    \t</footer>\n    </div>\n\n  </div>\n\n<!-- ---------------------------------------------------------- Jogo começa aqui ------------------------------------------------------ -->\n\n\t<div class=\"elements\" *ngIf=\"liberar && !gameEnd\">\n\t\t<div class=\"player-game {{play1.bg}}\">\n\t        <header>\n\t\t\t\t<div class=\"card-header\"><span>{{play1.nome}}</span>  <!-- - {{timeGameCountMin}} - {{timeGameCountSeconds}} -->\n\t                <div class=\"avatar-player\" [ngStyle]=\"{'background-image': 'url(../../../assets/img/' + play1.id + '.png)'}\"></div>\n\t            </div>\n\t        </header>\n\t        <main *ngIf=\"play1.vezPlay\">\n\t\t\t\t<div *ngIf=\"play1.vezPlay && !passavez && !clickResposta\">\n\t\t\t\t <div *ngIf=\"play1.blockaposta\">\n\t\t\t\t  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">APOSTANDO: {{point_over}}</label>\n\t\t\t\t  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">USE SUAS AÇÕES</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; margin-bottom: 10px\">\n                    <button type=\"button\" class=\"btn btn-dark \" (click)=\"passaVez(1)\" *ngIf=\"play1.blockaposta && lvl != 4\" [disabled]=\"regrecivTime > 27\"> PASSAR A VEZ </button>\n                    <button type=\"button\" class=\"btn btn-dark \" disabled=\"disabled\" *ngIf=\"!play1.blockaposta || lvl == 4\"> PASSAR A VEZ </button>\n                    <button type=\"button\" class=\"btn btn-dark \" [disabled]=\"regrecivTime > 10\" (click)=\"buyTime(regrecivTime,1)\"> COMPRAR TEMPO </button>\n                    <ng-template ngFor let-item [ngForOf]=\"CardGeneration()\" let-Index=\"index+1\">\n                    <button type=\"button\" class=\"btn btn-dark btn-md \" (click)=\"getDicaComenst(item.dica,1)\" *ngIf=\"play1.blockaposta\" [disabled]=\"item.dica==''\"> COMPRAR DICA </button> <!-- [ngStyle]=\"{'opacity': item.dica=='' ? '1' : '0'}\" -->\n                    </ng-template>\n                    <button type=\"button\" class=\"btn btn-dark btn-md \" disabled=\"disabled\" *ngIf=\"!play1.blockaposta\"> COMPRAR DICA </button>\n                  </div>\n\t\t\t\t </div>\n\t\t\t\t <div *ngIf=\"!play1.blockaposta\">\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">FAÇA SUA APOSTA</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; text-align: center\">                    \n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 1\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" [disabled]=\"!btnlvl1\" *ngIf=\"btnlvl1\"> $ {{point_lvl1}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 2\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" [disabled]=\"!btnlvl2\"> $ {{point_lvl2}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 3\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" [disabled]=\"!btnlvl3\"> $ {{point_lvl3}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 4\" (click)=\"point_win = play1.life\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\">APOSTAR TUDO</button>\n                  </div>\n                 </div>\n                </div>\n\n                <div *ngIf=\"passavez && play1.vezPlay\">\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">A VEZ FOI PASSADA PARA VOCÊ</label>\n                  <p>\n                  \tCaso <b>não</b> queira arriscar você poderá abster-se da aposta esperando o tempo esgotar!\n                  </p>\n                </div>\n\n                <div *ngIf=\"clickResposta\">\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; margin-bottom: 10px;\">\n                    <!-- <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> PASSAR A VEZ </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> COMPRAR DICA </button> -->\n                  </div>\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">AGUARDE...</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; text-align: center\">\n                    <!-- <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> $ {{point_lvl1}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> $ {{point_lvl2}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> $ {{point_lvl3}} </button> -->\n                  </div>\n                </div>\n\t        </main>\n\t        <main *ngIf=\"!play1.vezPlay\">\n\t        \t<div *ngIf=\"!passavez\">\n\t        \t  <p style=\"font-size: 16px; color: black; width: 100%; height: 100%; margin-top: 50px;\">VEZ DO OUTRO JOGADOR</p>\n\t        \t</div>\n\t        \t<div *ngIf=\"passavez\">\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">VOCÊ PASSOU A VEZ</label>\n                  <p>\n                  \tVocê passou a vez e pagou por isso!\n                  </p>\n                  <p>\n                  \tAguarde a sua vez após o outro jogador terminar a dele!\n                  </p>\n                </div>\n\t        </main>\n\n\n\t        <footer>\n\t\t\t\t<div class=\"row\">\n\t                <div class=\"col-sm-6\">\n\t                  <p class=\"display-4 text-cad\">Acertos: {{play1.scoreTrue}}</p>\n\t                </div>\n\t                <div class=\"col-sm-6\">\n\t                  <p class=\"display-4 text-cad\">Erros: {{play1.scoreFalse}}</p>\n\t                </div>\n\t            </div>\n\t            <div class=\"row\">\n\t                <div class=\"col-sm-12\">                 \n\t                  <h4 class=\"display-4 text-cad\" [ngStyle]=\"{'color': colorDecrementesIncrementes.colorPlay1, 'font-size': '26px'}\">$ {{play1.life}}</h4>\n\t                </div>\n            \t</div>\n\t        </footer>\n\t    </div>\n\t    <div class=\"card-game\">\n\t\t    <div class=\"flip-container\" id=\"flip-toggle\" ontouchstart=\"this.classList.toggle('hover');\">\n\t\t    \t<div class=\"flipper\">     \n\t              <div class=\"front\">\n\t                <div class=\"img-front\">\n\t                  <!-- <div class=\"img-logo-card\"></div> -->\n\t                </div>\n\t              </div>      \n\t              <div class=\"back\">\n\t\t    \t\t<ng-template ngFor let-item [ngForOf]=\"CardGeneration()\" let-Index=\"index+1\">\n\t\t    \t\t\t<header>\n\t\t    \t\t\t\t<div class=\"item-header-card\">\n\t\t\t\t\t\t    \t<div class=\"row\">                   \n\t\t\t                      <div class=\"col-sm-1\">\n\t\t\t                        <!-- contagem de valores da carta -->\n\t\t\t                        <!-- <p class=\"card-text\" > Perde: {{point_over}}</p> -->\n\t\t\t                      </div>\n\t\t\t                      <div class=\"col-sm-10\">\n\t\t\t                      \t\n\t\t\t                      \t<!-- GABARITO-->\n\t\t\t                      <!-- ---------------------- CONTROLES ------------------ -->\n\t\t\t                      \t<p class=\"card-text\" style=\"font-size: 10px; color:#fff; opacity: 0;\"> {{item.number_a == null ? '0' : '1'}} - {{item.number_b == null ? '0' : '1'}} - {{item.number_c == null ? '0' : '1'}} - {{item.number_d == null ? '0' : '1'}} - Nivel - {{item.nivel_id}} -- id {{item.id}}</p>\n\t\t\t                      <!-- ---------------------- CONTROLES ------------------ -->\n\n\t\t\t                      \t<div class=\"row\" *ngIf=\"clickResposta\">\n\t\t\t                      \t\t<div class=\"col-sm-10\">\n\t\t\t                      \t\t\t <div [ngStyle]=\"{'opacity': item.comentario!='' ? '1' : '0'}\">\n\t\t\t\t\t                          <button type=\"button\" class=\"btn btn-info btn-sm\" style=\"width: 100%; border-radius: 15px; margin-top: 10px;\" (click)=\"subscribeTimer0()\" (click)=\"getDicaComenst(item.comentario,2)\" [disabled]=\"item.comentario==''\">\n\t\t\t\t\t                          \tVEJA O COMENTÁRIO SOBRE A PERGUNTA\n\t\t\t\t\t                          </button>\n\t\t\t\t\t                        </div>\n\t\t\t                      \t\t</div>\n\t\t\t                      \t\t<div class=\"col-sm-2\" style=\"display: table;\">\n\t\t\t                      \t\t\t<button type=\"button\" class=\"btn {{this.timer0Id == undefined ? 'btn-danger' : 'btn-info'}} btn-sm\" style=\"width: 100%; display: table-cell; vertical-align: middle; border-radius: 15px; margin-top: 10px;\" (click)=\"subscribeTimer0()\">\n\t\t\t                      \t\t\t\t<!-- {{this.timer0Id == undefined ? 'Play' : 'Pause'}} -->\n\t\t\t                      \t\t\t\t<div *ngIf=\"this.timer0Id == undefined\" style=\"display: table; height: 100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <?xml version=\"1.0\" standalone=\"no\"?> --><!-- Generator: Gravit.io -->\n\t\t\t                      \t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate; display: table-cell; vertical-align: middle;\" viewBox=\"0 0 50 50\" width=\"100%\" height=\"100%\"><defs><clipPath id=\"_clipPath_3H3Jxe1mnnhN23p2C3hWh2kCf8urAIKJ\"><rect width=\"100%\" height=\"100%\"/></clipPath></defs><g clip-path=\"url(#_clipPath_3H3Jxe1mnnhN23p2C3hWh2kCf8urAIKJ)\"><path d=\" M 12.5 12.5 L 37.5 25 L 12.5 37.5 L 12.5 12.5 Z \" fill=\"rgb(255,255,255)\"/></g></svg>\n\t\t\t                      \t\t\t\t</div>\n\t\t\t                      \t\t\t\t<div *ngIf=\"this.timer0Id != undefined\" style=\"display: table; height: 100%\">\n\t\t\t                      \t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate; display: table-cell; vertical-align: middle;\" viewBox=\"0 0 50 50\" width=\"100%\" height=\"100%\"><defs><clipPath id=\"_clipPath_OfwImR3AI8eQUZ6nTLRhvpsGEBDIQYjx\"><rect width=\"100%\" height=\"100%\"/></clipPath></defs><g clip-path=\"url(#_clipPath_OfwImR3AI8eQUZ6nTLRhvpsGEBDIQYjx)\"><rect x=\"31.25\" y=\"12.5\" width=\"6.25\" height=\"25\" transform=\"matrix(1,0,0,1,0,0)\" fill=\"rgb(255,255,255)\"/><rect x=\"12.5\" y=\"12.5\" width=\"6.25\" height=\"25\" transform=\"matrix(1,0,0,1,0,0)\" fill=\"rgb(255,255,255)\"/></g></svg>\n\t\t\t                      \t\t\t\t</div>\n\t\t\t                      \t\t\t</button>\n\t\t\t                      \t\t</div>\n\t\t\t                      \t</div>\n\n\t\t\t                      </div>                      \n\t\t\t                      <div class=\"col-sm-1\">\n\t\t\t                        <!-- <p class=\"card-text\" > Ganha: {{point_win}}</p> -->\n\t\t\t                      </div>\n\t\t\t                    </div>\n\t\t\t                    <div class=\"row\" style=\"margin-top: 10px\">                   \n\t\t\t                      <div class=\"col-sm-1\"></div>\n\t\t\t                      <div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"progress\" *ngIf=\"clickResposta\" style=\"border-radius: 15px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" [ngStyle]=\"{ 'width': (100/4 * timeRespostaRegressive) + '%' , 'height': '5px'}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"progress\" *ngIf=\"!clickResposta\" style=\"border-radius: 15px; margin-top: 10px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped {{progression}}\" role=\"progressbar\" [ngStyle]=\"{ 'width': (100/30 * regrecivTime) + '%' , 'height': '10px'}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                      </div>                      \n\t\t\t                      <div class=\"col-sm-1\"></div>\n\t\t\t                    </div>\n\t\t                    </div>\n\t\t                    <div class=\"item-header-card\">\n\t\t\t                    <div class=\"row\" style=\"margin-top: -5px; margin-bottom:10px; padding: 0 10px 0 10px\">\n\t\t\t                      <div class=\"col-md-12\">\n\t\t\t                      \t<hr>\n\t\t\t\t\t\t\t\t\t<p [innerHTML]=\"item.enunciado\"> </p>\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t                      </div>\n\t\t\t                    </div>\n\t\t                    </div>\n\t\t\t\t\t    </header>\n\n\t\t\t\t\t    <main [ngStyle]=\"{'height': item.img_url!= fullurlgameimg + 'Imagens/' ? '30%' : '0'}\" *ngIf=\"item.img_url!= fullurlgameimg + 'Imagens/'\">\n\t\t\t\t\t    \t<!-- imagem do enunciado -->\n\t                    \t<div class=\"container-enunciado-img\">\n\t                      \t\t<div class=\"enunciado-img\" [ngStyle]=\"{'background-image': 'url(' + item.img_url + ')'}\"></div>\n\t                    \t</div>\n\t\t\t\t\t    </main>\n\n\t\t\t\t\t    <footer [ngStyle]=\"{'height': item.img_url== fullurlgameimg + 'Imagens/' ? '65%' : '45%', 'margin-top': item.img_url== fullurlgameimg + 'Imagens/' ? '5%' : '0'}\">\n\t\t\t\t\t\t    <div class=\"btn-group-vertical btn-quest\" role=\"group\" aria-label=\"...\" style=\"width: 70%; word-wrap: normal; height: 100%;\">\n\t\t                        <button type=\"button\" (click)=\"getStatistics(arrAlter[0],item.correta,item.nivel_id,item.id)\" (click)=\"test(item.number_a,item.correta,1)\" class=\"btn-question\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\" [ngStyle]=\"{'background-color': qCA, 'background-color': item.number_a != null && clickResposta ? success : qCA, 'min-height': item.enunciado_a=='' ? '25%' : '25%'}\">\n\n\t\t                          <div *ngIf=\"item.enunciado_a!=''\" [innerHTML]=\"item.enunciado_a\" class=\"text-buttom\"> </div>\n\n\t\t                          <div *ngIf=\"item.enunciado_a==''\" class=\"alternativa-card\">\n\t\t                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_a + ')'}\"></div>\n\t\t                          </div>\n\n\t\t                        </button>\n\t\t                        <button type=\"button\" (click)=\"getStatistics(arrAlter[1],item.correta,item.nivel_id,item.id)\" (click)=\"test(item.number_b,item.correta,2)\" class=\"btn-question\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\"  [ngStyle]=\"{'background-color': qCB, 'background-color': item.number_b != null && clickResposta ? success : qCB, 'min-height': item.enunciado_a=='' ? '25%' : '25%'}\">\n\n\t\t                          <div *ngIf=\"item.enunciado_b!=''\" [innerHTML]=\"item.enunciado_b\" class=\"text-buttom\"> </div>\n\n\t\t                          <div *ngIf=\"item.enunciado_b==''\" class=\"alternativa-card\">\n\t\t                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_b + ')'}\"></div>\n\t\t                          </div>\n\n\t\t                        </button>\n\t\t                        <button type=\"button\" (click)=\"getStatistics(arrAlter[2],item.correta,item.nivel_id,item.id)\" (click)=\"test(item.number_c,item.correta,3)\" class=\"btn-question\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\"  [ngStyle]=\"{'background-color': qCC, 'background-color': item.number_c != null && clickResposta ? success : qCC, 'min-height': item.enunciado_a=='' ? '25%' : '25%'}\">\n\n\t\t                          <div *ngIf=\"item.enunciado_c!=''\" [innerHTML]=\"item.enunciado_c\" class=\"text-buttom\"> </div>\n\n\t\t                          <div *ngIf=\"item.enunciado_c==''\" class=\"alternativa-card\">\n\t\t                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_c + ')'}\"></div>\n\t\t                          </div>\n\n\t\t                        </button>\n\t\t                        <button type=\"button\" (click)=\"getStatistics(arrAlter[3],item.correta,item.nivel_id,item.id)\"  (click)=\"test(item.number_d,item.correta,4)\" class=\"btn-question\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\" [ngStyle]=\"{'background-color': qCD, 'background-color': item.number_d != null && clickResposta ? success : qCD, 'min-height': item.enunciado_a=='' ? '25%' : '25%'}\">\n\n\t\t                          <div *ngIf=\"item.enunciado_d!=''\" [innerHTML]=\"item.enunciado_d\" class=\"text-buttom\"> </div>\n\n\t\t                          <div *ngIf=\"item.enunciado_d==''\" class=\"alternativa-card\">\n\t\t                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_d + ')'}\"></div>\n\t\t                          </div>\n\n\t\t                        </button>\n\t\t                        <button type=\"button\" (click)=\"valueModa(null)\" *ngIf=\"!clickResposta\" class=\"btn-zoom\">\n\t\t                        \t<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-zoom\">\n\t\t\t\t\t\t\t\t\t    <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n\t\t\t\t\t\t\t\t\t    <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n\t\t\t\t\t\t\t\t\t    <path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t                        </button>\n\t\t                    </div>\n\t\t\t\t\t    </footer>\n\t\t\t\t\t</ng-template>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    </div>\n\n\n\t    <div class=\"player-game {{play2.bg}}\">\n\t        <header>\n\t        \t<div class=\"card-header\"><span>{{play2.nome}}</span>\n                \t<div class=\"avatar-player\" [ngStyle]=\"{'background-image': 'url(../../../assets/img/' + play2.id + '.png)'}\"></div>\n            \t</div>\n\t        </header>\n\t        <main *ngIf=\"play2.vezPlay\">\n\t          \t<div *ngIf=\"play2.vezPlay && !passavez && !clickResposta\">\n\t          \t <div *ngIf=\"play2.blockaposta\">\n\t          \t  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">APOSTANDO: {{point_over}}</label>\n\t          \t  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">USE SUAS AÇÕES</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; margin-bottom: 10px;\">              \n                    <button type=\"button\" class=\"btn btn-dark \" (click)=\"passaVez(2)\" *ngIf=\"play2.blockaposta && lvl != 4\" [disabled]=\"regrecivTime > 27\"> PASSAR A VEZ </button>               \n                    <button type=\"button\" class=\"btn btn-dark \" disabled=\"disabled\" *ngIf=\"!play2.blockaposta || lvl == 4\"> PASSAR A VEZ </button>\n                    <button type=\"button\" class=\"btn btn-dark \" [disabled]=\"regrecivTime > 10\" (click)=\"buyTime(regrecivTime,2)\"> COMPRAR TEMPO </button>\n                    <ng-template ngFor let-item [ngForOf]=\"CardGeneration()\" let-Index=\"index+1\">\n                    <button type=\"button\" class=\"btn btn-dark btn-md \" (click)=\"getDicaComenst(item.dica,1)\" *ngIf=\"play2.blockaposta\" [disabled]=\"item.dica==''\"> COMPRAR DICA </button> <!-- [ngStyle]=\"{'opacity': item.dica=='' ? '1' : '0'}\" -->\n                    </ng-template>\n                    <button type=\"button\" class=\"btn btn-dark btn-md \" style=\"cursor:not-allowed;\" disabled=\"disabled\" *ngIf=\"!play2.blockaposta\"> COMPRAR DICA </button>\n                  </div>\n\t\t\t\t </div>\n                 <div *ngIf=\"!play2.blockaposta\">\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">FAÇA SUA APOSTA</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; text-align: center\">\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 1\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" [disabled]=\"!btnlvl1\" *ngIf=\"btnlvl1\"> $ {{point_lvl1}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 2\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" [disabled]=\"!btnlvl2\"> $ {{point_lvl2}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 3\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" [disabled]=\"!btnlvl3\"> $ {{point_lvl3}}</button>\n                    <!-- <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 4\" (click)=\"point_win = play2.life\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\">APOSTAR TUDO</button> -->\n\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 4\" (click)=\"point_win = play2.life\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\">APOSTAR TUDO</button>\n                  </div>\n\t\t\t\t </div>\n                </div>\n\n                <div *ngIf=\"passavez && play2.vezPlay\">\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">A VEZ FOI PASSADA PARA VOCÊ</label>\n                  <p>\n                  \tCaso <b>não</b> queira arriscar você poderá abster-se da aposta esperando o tempo esgotar!\n                  </p>\n                </div>\n\n                <div *ngIf=\"clickResposta\">\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%;margin-bottom: 10px;\">\n                    <!-- <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> PASSAR A VEZ </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> COMPRAR DICA </button> -->\n                  </div>\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">AGUARDE...</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 70%; text-align: center\">\n                    <!-- <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> $ {{point_lvl1}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> $ {{point_lvl2}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> $ {{point_lvl3}} </button> -->\n                  </div>\n                </div>\n\t        </main>\n\t        <main *ngIf=\"!play2.vezPlay\">\n\t        \t<div *ngIf=\"!passavez\">\n\t        \t  <p style=\"font-size: 16px; color: black; width: 100%; height: 100%; margin-top: 50px;\">VEZ DO OUTRO JOGADOR</p>\n\t        \t</div>\n\t        \t<div *ngIf=\"passavez\">\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">VOCÊ PASSOU A VEZ</label>\n                  <p>\n                  \tVocê passou a vez e pagou por isso.\n                  </p>\n                  <p>\n                  \tAguarde a sua vez após o outro jogador terminar a dele!\n                  </p>\n                </div>\n\t        </main>\n\n\n\t        <footer>\n\t\t\t\t<div class=\"row\">\n\t                <div class=\"col-sm-6\">\n\t                  <p class=\"display-4 text-cad\">Acertos: {{play2.scoreTrue}}</p>\n\t                </div>\n\t                <div class=\"col-sm-6\">\n\t                  <p class=\"display-4 text-cad\">Erros: {{play2.scoreFalse}}</p>\n\t                </div>\n\t              </div>\n\t              <div class=\"row\">\n\t                <div class=\"col-sm-12\">                 \n\t                  <h4 class=\"display-4 text-cad\" [ngStyle]=\"{'color': colorDecrementesIncrementes.colorPlay2, 'font-size': '26px'}\">$ {{play2.life}}</h4>\n\t                </div>\n\t              </div>\n\t        </footer>        \n\t    </div>\n\t</div>\n\n<!-- ---------------------------------------------------------- Jogo Termina aqui ------------------------------------------------------ -->\n\n\t<!-- Comentário -->\n    <div class=\"shadow-modal\" *ngIf=\"clickResposta && getComents || getDicaModal || modal\" (click)=\"valueModa(null)\" [ngStyle]=\"{'height': modal ? 'calc(100% + 100px)' : '100%'}\">\n    </div>\n    <div class=\"modal-coments-dica\" *ngIf=\"clickResposta && getComents || getDicaModal || modal\">\n      <div class=\"modal-open\" [ngStyle]=\"{'height': modal ? '90%' : '', 'background-color': modal ? '#fff' : '', 'border': modal ? '2px solid blue' : 'none'}\">\n        <div class=\"button-close-modal\" style=\"width: 100%; text-align: right;\">\n          <button type=\"button\" class=\"btn btn-secondary btn-sm close-bt\" (click)=\"subscribeTimer0()\" (click)=\"getDicaComenst(null,2)\" *ngIf=\"clickResposta && getComents\"> X </button>\n\n          <button type=\"button\" class=\"btn btn-secondary btn-sm close-bt\" (click)=\"getDicaComenst(null,1)\" *ngIf=\"!clickResposta && getDicaModal\"> X </button>\n\n          <button type=\"button\" class=\"btn btn-secondary btn-sm close-bt\" (click)=\"valueModa(null)\" *ngIf=\"modal\"> X </button>\n        </div>\n\n        <div class=\"container-coments-dica\" *ngIf=\"getComents || getDicaModal\">\n        \t{{stringDicaComents}}        \t\n        </div>\n\n        <div class=\"container-modal-game-card-zoom\" *ngIf=\"modal\">\n        \t<p>\n        \t\ttexto aqui\n        \t</p>\n        </div>\n\n      </div>\n    </div>\n\n\n    <div *ngIf=\"gameEnd\" style=\"width: 100%; height: 90%; display: table;\">\n    \t<div style=\"display: table-cell; vertical-align: middle;\">    \t\t\n\t\t    <h1>Parabéns, {{playerWin.nome}}</h1>\n\t\t    <h3>Você venceu a partida com $ {{playerWin.life}} e demonstrou muito conhecimento no assunto</h3>\n\t\t    <p>Continue seus estudos, <a href=\"#\">clique aqui</a> e vença outra partida.</p>\n    \t</div>\n  \t</div>"

/***/ }),

/***/ "../../../../../src/app/play-game/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PerguntasJSON__ = __webpack_require__("../../../../../src/app/play-game/PerguntasJSON.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GruposJSON__ = __webpack_require__("../../../../../src/app/play-game/GruposJSON.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import ng2-simple-timer as SimpleTimer

//model Com todas as perguntas para testar essa bosta porque ele não tem paciência


var CardComponent = (function () {
    function CardComponent(http, st, router) {
        this.http = http;
        this.st = st;
        this.router = router;
        //Libera botões
        this.groupOk = false;
        this.cardOk = false;
        this.cardComponentOn = false;
        this.clickResposta = false;
        this.gameOn = false;
        this.gameEnd = false;
        //variar banco de imagens
        this.gameimg = "romulosi_bqldse_pt/"; //romulosi_bqldse_pt/ romulosi_organica_pt/ //Banco bqldse_organica_pt
        this.fullurlgameimg = 'http://bqldse.romssilva.com/' + this.gameimg;
        //Gera o for para apresenar as informações das alternativas
        this.perguntas = [];
        this.grupos = [];
        this.timeGameCountSeconds = 0;
        this.timeGameCountMin = 0;
        this.timeGameCountSecondsRegress = 59;
        this.timeGameCountMinRegress = 15;
        //Tempo por questão
        this.timerQuestion = 60; //tempo para responder a questão
        this.timeResposta = 0; //tempo para passar para a próxima questão após responder
        this.timeRespostaRegressive = 4;
        this.counter0 = 0;
        this.timer0button = 'Subscribe';
        this.activeCount = false;
        this.regrecivTime = 30;
        //Function time for points player//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.counter1 = 0;
        this.timer1button = 'Subscribe';
        this.decrements = false;
        this.increments = false;
        this.colorMoreMoney = "#10B23E"; //green
        this.colorFailMoney = "#B22221"; //red
        this.colorDefault = "#000";
        this.testblock = true;
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Variavel Vazia
        this.vazio = "";
        //ufiltro = [];
        this.iFiltro = [];
        this.lFiltro = false;
        this.grup = [];
        //Criar o vetor com as cartas da partida, sem repetir
        this.cards = [];
        this.cardslv1 = [];
        this.cardslv2 = [];
        this.cardslv3 = [];
        this.rands = [];
        this.number_question = 0;
        this.nq_lvl1 = 0;
        this.nq_lvl2 = 0;
        this.nq_lvl3 = 0;
        this.max_question = 9999999999999;
        //question color full (Mude só essas cores)
        this.success = '#10B23E';
        this.fail = '#FF4A49';
        this.valid_jump = true;
        // --------------------------------------------------- SISTEMA MULTIPLAY --------------------------------------------------------//
        //avatar
        this.avatar = [1, 2, 3, 4, 5, 6];
        //-------------Sistema de Pontos------------------//
        this.point_lvl1 = 5000;
        this.point_lvl2 = 20000;
        this.point_lvl3 = 50000;
        this.multiGetDica = 1;
        this.multiPassaVez = 0.6;
        this.multiGetDicabuy = 0.5;
        //-----------Fim sistema de Pontos----------//
        //Multiplayer simples
        this.vez = 1;
        this.life = 100000;
        this.play1 = {
            id: Math.floor((Math.random() * 6) + 1),
            nome: '',
            vezPlay: null,
            scoreAtack: 0,
            scoreTrue: 0,
            scoreFalse: 0,
            status: '',
            atack: 0,
            statusAtack: false,
            life: this.life,
            bg: 'bg-off',
            blockaposta: false,
            place: '',
            classRoom: ''
        };
        this.play2 = {
            id: Math.floor((Math.random() * 6) + 1),
            nome: '',
            vezPlay: null,
            scoreAtack: 0,
            scoreTrue: 0,
            scoreFalse: 0,
            status: 'disabled',
            atack: 0,
            statusAtack: false,
            life: this.life,
            bg: 'bg-off',
            blockaposta: true,
            place: '',
            classRoom: ''
        };
        this.decrementsErrorQuestion = false;
        this.passavez = false;
        this.passavezStatusIncDec = false;
        this.liberar = false;
        // //   //--------------------------------------------- CANVAS ------------------------------------------------------//
        // ngAfterViewInit() {
        //   if(this.cardComponentOn){
        //   let canvasp1 = this.canvasP1.nativeElement;
        //   this.context_p1 = canvasp1.getContext("2d");
        //   this.tickP1();
        //   let canvasp2 = this.canvasP2.nativeElement;
        //   this.context_p2 = canvasp2.getContext("2d");
        //   this.tickP2();
        //   }
        // }
        // ellipse(context, cx, cy, rx, ry, color){
        //           context.save(); // save state
        //           context.beginPath();
        //           context.translate(cx-rx, cy-ry);
        //           context.scale(rx, ry);
        //           context.arc(1, 1, 1, 0, 2 * Math.PI, false);
        //           context.fillStyle = color;
        //           context.fill();
        //           context.closePath();
        //           context.restore(); // restore to original state        
        //           // context.stroke();
        // }
        // //    //-------------PLAYER 1---------------------// //
        // @ViewChild("player1") canvasP1;
        // context_p1:CanvasRenderingContext2D;
        // tickP1() { //Caracteristicas do canvas
        //   requestAnimationFrame(()=> {
        //     this.tickP1()
        //   });
        //   // Red rectangle
        //   var ctx = this.context_p1;
        //   this.moneyP1(ctx);
        //   // ctx.clearRect(0, 0, 100, 20);
        //   // ctx.fillStyle = 'red';
        //   // ctx.fillRect(0, 0, this.play1.life*10, 20);
        // }
        // moneyP1(context){
        //         this.ellipse(context, 25, 10, 20, 5, "#800000");
        //         this.ellipse(context, 25, 7, 20, 5, "#FA8072");
        // }
        // //    //-------------PLAYER 2--------------------// //
        // @ViewChild("player2") canvasP2;
        // context_p2:CanvasRenderingContext2D;
        // tickP2() { //Caracteristicas do canvas
        //   requestAnimationFrame(()=> {
        //     this.tickP2()
        //   });
        //   // Red rectangle
        //   var ctx = this.context_p2;
        //   this.moneyP2(ctx);
        // }
        // moneyP2(context){
        //         this.ellipse(context, 25, 10, 20, 5, "#800000");
        //         this.ellipse(context, 25, 7, 20, 5, "#FA8072");
        // }
        // //   //--------------------------------------------- FIM - CANVAS ------------------------------------------------------//
        this.arrAlter = [];
        //   //--------------------------------------------- FIM - ESTATÍSTICAS ------------------------------------------------------//
        //  //--------------------------------------------- GET DICA and Coments ------------------------------------------------------//
        this.getdica = false;
        this.getComents = false;
        this.getDicaModal = false;
        this.progression = "bg-success";
        this.time = {
            fullgame: 15
        };
        this.colorDecrementesIncrementes = {
            colorPlay1: this.colorDefault,
            colorPlay2: this.colorDefault
        };
    }
    CardComponent.prototype.onSubmit = function (f) {
        // console.log(f.value);  // { first: '', last: '' }
        // console.log(f.valid);  // false
        if (f.valid) {
            alert("Preencha os campos solicitados");
        }
        else {
            alert("Acho que ainda há informações a serem preenchidas, porque não checa?");
        }
    };
    CardComponent.prototype.ngOnInit = function () {
        //-------------------------------------------------------------------Comentar esse bloco
        this.pergJSON = new __WEBPACK_IMPORTED_MODULE_4__PerguntasJSON__["a" /* PerguntasJSON */]();
        this.grupJSON = new __WEBPACK_IMPORTED_MODULE_5__GruposJSON__["a" /* GruposJSON */]();
        //Teste vai sair isso daqui, é só porque a pessoa não tem paciencia
        this.perguntas = this.pergJSON.todas;
        this.cardOk = true;
        this.grupos = this.grupJSON.todosGrupos;
        this.groupOk = true;
        // -------------------------------------------------------------------Fim bloco
        // ----------------------------------------------------------------------- Descomentar as linhas 61 e 62
        // this.list();
        // this.listGrup();
        this.cardComponentOn = true;
        //Create Timer
        //Count Timer//
        this.st.newTimer('1sec', 1);
        this.subscribeTimer0();
        //End Count Timer//
        //Count Timer for player//
        this.st.newTimer('mili', 0.000000001);
        this.subscribeTimer1();
        //End Count Timer for player//
        //getLocalStorage
        this.getLocalStorage();
    };
    //--------------------------------------Time Game full------------------------------------------//
    CardComponent.prototype.buyTime = function (time, vez) {
        this.regrecivTime += 10;
        switch (vez) {
            case 1:
                this.decrementsErrorQuestion = true;
                this.decrements = true;
                this.tempPlayer1 = this.play1.life - (this.point_over * 0.1);
                break;
            case 2:
                this.decrementsErrorQuestion = true;
                this.decrements = true;
                this.tempPlayer2 = this.play2.life - (this.point_over * 0.1);
                break;
        }
    };
    CardComponent.prototype.delAllTimer = function () {
        this.st.delTimer('1sec');
    };
    CardComponent.prototype.subscribeTimer0 = function () {
        var _this = this;
        if (this.timer0Id) {
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            this.timer0button = 'Subscribe';
            // console.log('timer 0 Unsubscribed.');
        }
        else {
            // Subscribe if timer Id is undefined
            this.timer0Id = this.st.subscribe('1sec', function () { return _this.timer0callback(); });
            this.timer0button = 'Unsubscribe';
            // console.log('timer 0 Subscribed.');
        }
        // console.log(this.st.getSubscription());
    };
    //Conta os segundos (a cada 1s)
    CardComponent.prototype.timer0callback = function () {
        if (this.gameOn) {
            //count time full game
            this.timeGameCountSecondsRegress--;
            this.timeGameCountSeconds++;
            if (this.timeGameCountSeconds == 60) {
                this.timeGameCountMinRegress--;
                this.timeGameCountSecondsRegress = 59;
                this.timeGameCountMin++;
                this.timeGameCountSeconds = 0;
                if (this.timeGameCountMin == this.time.fullgame) {
                    console.log("fim de jogo");
                    if (this.play1.life > this.play2.life) {
                        this.playerWin = this.play1;
                        console.log("Play 1 ganhou");
                        console.log(this.playerWin);
                    }
                    else if (this.play1.life < this.play2.life) {
                        this.playerWin = this.play2;
                        console.log("Play 2 ganhou");
                        console.log(this.playerWin);
                    }
                    else {
                        this.playerWin = null; //empate
                        console.log("Empate Meu povo");
                    }
                    this.gameOn = false;
                    this.gameEnd = true;
                }
            }
            switch (this.lvl) {
                case 1:
                    this.point_over = this.point_lvl1;
                    if (this.getdica)
                        this.point_win = this.point_lvl1 * this.multiGetDica;
                    else
                        this.point_win = this.point_lvl1;
                    break;
                case 2:
                    this.point_over = this.point_lvl2;
                    if (this.getdica)
                        this.point_win = this.point_lvl2 * this.multiGetDica;
                    else
                        this.point_win = this.point_lvl2;
                    break;
                case 3:
                    this.point_over = this.point_lvl3;
                    if (this.getdica)
                        this.point_win = this.point_lvl3 * this.multiGetDica;
                    else
                        this.point_win = this.point_lvl3;
                    break;
                case 4:
                    switch (this.vez) {
                        case 1:
                            this.point_over = this.play1.life;
                            if (this.getdica)
                                this.point_win = this.play1.life * this.multiGetDica;
                            else
                                this.point_win = this.play1.life;
                            break;
                        case 2:
                            this.point_over = this.play2.life;
                            if (this.getdica)
                                this.point_win = this.play2.life * this.multiGetDica;
                            else
                                this.point_win = this.play2.life;
                            break;
                    }
                    break;
                case 0:
                    this.point_over = null;
                    this.point_win = null;
                    break;
            }
            if (this.play1.blockaposta == true) {
                this.testblock = false;
            }
            if (!this.clickResposta) {
                this.timeRespostaRegressive = 4;
                this.timeResposta = 0;
                this.progressiveBar();
                this.bgPlayer();
                if (this.activeCount) {
                    this.regrecivTime--;
                }
                this.counter0++;
                if (this.regrecivTime <= 0) {
                    switch (this.lvl) {
                        case 1:
                            this.nq_lvl1++;
                            break;
                        case 2:
                            this.nq_lvl2++;
                            break;
                        case 3:
                            this.nq_lvl3++;
                            break;
                        case 4:
                            if (this.point_win <= this.point_lvl1)
                                this.nq_lvl1++;
                            else if (this.point_win > this.point_lvl1 && this.point_win <= this.point_lvl2)
                                this.nq_lvl2++;
                            else if (this.point_win > this.point_lvl2)
                                this.nq_lvl3++;
                            break;
                    }
                    //reset value timer off question
                    this.modal = false;
                    this.number_question++;
                    this.trocarVez(this.vez);
                    this.counter0 = 0;
                    this.lvl = 0;
                    this.play1.blockaposta = false;
                    this.play2.blockaposta = false;
                    this.flipper();
                    this.activeCount = false;
                }
            }
            else {
                //if(this.comentsOn){
                this.timeRespostaRegressive--;
                this.timeResposta++;
                //}
                this.counter0 = 0;
                // console.log(this.lvl);
                if (this.timeResposta % 5 == 0) {
                    this.bgPlayer();
                    this.qCA = null;
                    this.qCB = null;
                    this.qCC = null;
                    this.qCD = null;
                    this.point_lvl1 = 5000;
                    this.point_lvl2 = 20000;
                    this.point_lvl3 = 50000;
                    switch (this.lvl) {
                        case 1:
                            this.nq_lvl1++;
                            break;
                        case 2:
                            this.nq_lvl2++;
                            break;
                        case 3:
                            this.nq_lvl3++;
                            break;
                        case 4:
                            if (this.point_win <= this.point_lvl1)
                                this.nq_lvl1++;
                            else if (this.point_win > this.point_lvl1 && this.point_win <= this.point_lvl2)
                                this.nq_lvl2++;
                            else if (this.point_win > this.point_lvl2)
                                this.nq_lvl3++;
                            break;
                    }
                    this.lvl = 0;
                    this.flipper();
                    this.number_question++;
                    this.clickResposta = !this.clickResposta;
                }
            }
        }
    };
    CardComponent.prototype.subscribeTimer1 = function () {
        var _this = this;
        if (this.timer1Id) {
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer1Id);
            this.timer1Id = undefined;
            this.timer1button = 'Subscribe';
            // console.log('timer 1 Unsubscribed.');
        }
        else {
            // Subscribe if timer Id is undefined
            this.timer1Id = this.st.subscribe('mili', function () { return _this.timer1callback(); });
            this.timer1button = 'Unsubscribe';
            // console.log('timer 1 Subscribed.');
        }
        // console.log(this.st.getSubscription());
    };
    CardComponent.prototype.timer1callback = function () {
        this.incrementDecrementPoint();
    };
    CardComponent.prototype.incrementDecrementPoint = function () {
        var valueDI = 100;
        switch (this.lvl) {
            case 1:
                valueDI = 100;
                break;
            case 2:
                valueDI = 200;
                break;
            case 3:
                valueDI = 500;
                break;
            case 4:
                valueDI = 1000;
                break;
        }
        //decrementa
        var temp1 = this.tempPlayer1;
        var temp = this.tempPlayer2;
        //incrementa
        var temp1Increments = this.tempPlayer1Increments;
        var tempIncrements = this.tempPlayer2Increments;
        if (this.decrements && !this.increments && !this.decrementsErrorQuestion) {
            console.log("decrementa");
            switch (this.vez) {
                case 1:
                    // console.log("player 2 " + temp);
                    // console.log("Life player 2 " + this.play2.life);
                    if (this.play2.life > temp) {
                        // console.log("player 2 decrementa");
                        this.play2.life -= valueDI;
                        this.colorDecrementesIncrementes.colorPlay2 = this.colorFailMoney; //red
                    }
                    else {
                        this.colorDecrementesIncrementes.colorPlay2 = this.colorDefault;
                        this.decrements = false;
                    }
                    break;
                case 2:
                    // console.log("player 1 " + temp1);
                    // console.log("Life player 1 " + this.play1.life);
                    if (this.play1.life > temp1) {
                        // console.log("player 1 decrementa");
                        this.play1.life -= valueDI;
                        this.colorDecrementesIncrementes.colorPlay1 = this.colorFailMoney; //red
                    }
                    else {
                        this.colorDecrementesIncrementes.colorPlay1 = this.colorDefault;
                        this.decrements = false;
                    }
                    break;
            }
            this.counter1++;
        }
        if (!this.passavezStatusIncDec) {
            if (this.increments && !this.decrements) {
                // console.log("incrementa");
                // console.log(temp1Increments);
                // console.log(tempIncrements);
                switch (this.vez) {
                    case 1:
                        if (this.play2.life < tempIncrements) {
                            this.play2.life += valueDI;
                            this.colorDecrementesIncrementes.colorPlay2 = this.colorMoreMoney; //green
                        }
                        else {
                            this.colorDecrementesIncrementes.colorPlay2 = this.colorDefault;
                            this.increments = false;
                            this.passavezStatusIncDec = false;
                        }
                        break;
                    case 2:
                        if (this.play1.life < temp1Increments) {
                            this.play1.life += valueDI;
                            this.colorDecrementesIncrementes.colorPlay1 = this.colorMoreMoney; //green
                        }
                        else {
                            this.colorDecrementesIncrementes.colorPlay1 = this.colorDefault;
                            this.increments = false;
                            this.passavezStatusIncDec = false;
                        }
                        break;
                }
                this.counter1++;
            }
        }
        //Passa vez increments
        if (this.passavezStatusIncDec) {
            // console.log("Passa vez increments");
            if (this.increments && !this.decrements) {
                // console.log("Increments");
                switch (this.vez) {
                    case 2:
                        if (this.play2.life < tempIncrements) {
                            this.play2.life += valueDI;
                            this.colorDecrementesIncrementes.colorPlay2 = this.colorMoreMoney; //green
                        }
                        else {
                            this.colorDecrementesIncrementes.colorPlay2 = this.colorDefault;
                            this.increments = false;
                            this.passavezStatusIncDec = false;
                        }
                        break;
                    case 1:
                        if (this.play1.life < temp1Increments) {
                            this.play1.life += valueDI;
                            this.colorDecrementesIncrementes.colorPlay1 = this.colorMoreMoney; //green
                        }
                        else {
                            this.colorDecrementesIncrementes.colorPlay1 = this.colorDefault;
                            this.increments = false;
                            this.passavezStatusIncDec = false;
                        }
                        break;
                }
                this.counter1++;
            }
        }
        //Passa vez decrements error
        if (this.decrements && this.decrementsErrorQuestion) {
            // console.log("decrementa");
            switch (this.vez) {
                case 2:
                    // console.log("player 2 " + temp);
                    // console.log("Life player 2 " + this.play2.life);
                    if (this.play2.life > temp) {
                        // console.log("player 2 decrementa");
                        this.play2.life -= valueDI;
                        this.colorDecrementesIncrementes.colorPlay2 = this.colorFailMoney; //red
                    }
                    else {
                        this.colorDecrementesIncrementes.colorPlay2 = this.colorDefault;
                        this.decrements = false;
                        this.passavezStatusIncDec = false;
                        this.decrementsErrorQuestion = false;
                    }
                    break;
                case 1:
                    // console.log("player 1 " + temp1);
                    // console.log("Life player 1 " + this.play1.life);
                    if (this.play1.life > temp1) {
                        // console.log("player 1 decrementa");
                        this.play1.life -= valueDI;
                        this.colorDecrementesIncrementes.colorPlay1 = this.colorFailMoney; //red
                    }
                    else {
                        this.colorDecrementesIncrementes.colorPlay1 = this.colorDefault;
                        this.decrements = false;
                        this.passavezStatusIncDec = false;
                        this.decrementsErrorQuestion = false;
                    }
                    break;
            }
            this.counter1++;
        }
    };
    CardComponent.prototype.gameEndEvent = function () {
        if (this.play1.life <= 0) {
            console.log("play1 perdeu");
            console.log("play2 Ganhou");
            this.playerWin = this.play2;
            console.log(this.playerWin);
            this.gameOn = false;
            this.gameEnd = true;
            // document.location.href = "#"
        }
        if (this.play2.life <= 0) {
            console.log("play2 perdeu");
            console.log("play1 Ganhou");
            this.playerWin = this.play1;
            console.log(this.playerWin);
            this.gameOn = false;
            this.gameEnd = true;
            // document.location.href = "#"
        }
    };
    CardComponent.prototype.bgPlayer = function () {
        //Ver a Vez e setar o bg///////////////////////////////////
        this.gameEndEvent();
        if (this.vez == 1) {
            this.play1.vezPlay = true;
            this.play2.vezPlay = false;
            this.play1.bg = "bg-play1";
            this.play2.bg = "bg-off";
            if (this.play1.life > 0) {
                if (this.play1.life < this.point_lvl1) {
                    this.btnlvl1 = false;
                }
                else {
                    this.btnlvl1 = true;
                }
                if (this.play1.life < this.point_lvl2) {
                    this.btnlvl2 = false;
                }
                else {
                    this.btnlvl2 = true;
                }
                if (this.play1.life < this.point_lvl3) {
                    this.btnlvl3 = false;
                }
                else {
                    this.btnlvl3 = true;
                }
            }
            else {
                console.log("Perdeu");
            }
        }
        if (this.vez == 2) {
            this.play2.vezPlay = true;
            this.play1.vezPlay = false;
            this.play2.bg = "bg-play2";
            this.play1.bg = "bg-off";
            if (this.play2.life > 0) {
                if (this.play2.life < this.point_lvl1) {
                    this.btnlvl1 = false;
                }
                else {
                    this.btnlvl1 = true;
                }
                if (this.play2.life < this.point_lvl2) {
                    this.btnlvl2 = false;
                }
                else {
                    this.btnlvl2 = true;
                }
                if (this.play2.life < this.point_lvl3) {
                    this.btnlvl3 = false;
                }
                else {
                    this.btnlvl3 = true;
                }
            }
            else {
                console.log("perdeu");
            }
        }
        ///////////////////////////////////////////////////////////
    };
    CardComponent.prototype.blockb = function (vez) {
        switch (vez) {
            case 1:
                this.play1.blockaposta = true;
                break;
            case 2:
                this.play2.blockaposta = true;
                break;
        }
        this.regrecivTime = 30;
        this.activeCount = true;
    };
    CardComponent.prototype.checarfiltro = function (valor, status, name, id) {
        var maximo = Object.keys(this.grupos).length;
        this.filtrol =
            {
                id: valor,
                nome: name,
                valor: status,
            };
        if (status) {
            this.iFiltro.push(valor);
        }
        if (!status) {
            for (var i = 0; i < this.iFiltro.length; ++i) {
                if (this.iFiltro[i] == valor) {
                    this.iFiltro.splice(i, 1);
                }
            }
        }
        if (this.iFiltro == null || this.iFiltro.length <= 1) {
            this.lFiltro = false;
        }
        else {
            this.lFiltro = true;
        }
    };
    //Pegar os valores da API
    CardComponent.prototype.list = function () {
        var _this = this;
        return this.http.builder('perguntas')
            .list()
            .then(function (res) {
            //console.log(res)
            // console.log("Lista Feita")
            _this.perguntas = res;
            _this.cardOk = true;
        });
    };
    CardComponent.prototype.listGrup = function () {
        var _this = this;
        return this.http.builder('grupos')
            .list()
            .then(function (res) {
            //console.log(res)
            // console.log("Grupos Feitos")
            _this.grupos = res;
            _this.groupOk = true;
        });
    };
    CardComponent.prototype.GetGrupo = function () {
        //settimeRegress
        this.timeGameCountMinRegress = this.time.fullgame - 1;
        for (var i = 0; i < Object.keys(this.grupos).length; i++) {
            try {
                this.grupo =
                    {
                        id: this.grupos[i].id,
                        nome: this.utf8Decode(this.grupos[i].nome),
                        valor: false,
                    };
                this.grup.push(this.grupo);
                console.log("passou");
            }
            catch (exception) {
                console.log("erro");
            }
        }
    };
    //decodificar o utf8 do banco/api
    CardComponent.prototype.utf8Decode = function (utf8String) {
        if (typeof utf8String != 'string')
            throw new TypeError('parameter ‘utf8String’ is not a string');
        // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
        var unicodeString = utf8String.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
        function (c) {
            var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
            return String.fromCharCode(cc);
        }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
        function (c) {
            var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
            return String.fromCharCode(cc);
        });
        return unicodeString;
    };
    CardComponent.prototype.createGameCards = function () {
        //Filtro final grupos
        var v = this.iFiltro;
        var f = [];
        f = v.filter(function (este, i) {
            return v.indexOf(este) == i;
        });
        // console.log(f);
        //contar questão
        var cont = 0;
        //filtro nivel
        var niveis = 30;
        //Gerar vetor aleatório com as questões
        var maximo = Object.keys(this.perguntas).length;
        var i, arr = [];
        for (i = 0; i < maximo; i++) {
            arr[i] = i + 1;
        }
        var p, n, tmp;
        for (p = arr.length; p;) {
            n = Math.random() * p-- | 0;
            tmp = arr[n];
            arr[n] = arr[p];
            arr[p] = tmp;
        }
        //Gerar vetor aleatório para as alternativas...
        var alterFull = 4;
        var iAlter, arrAlter = [];
        for (iAlter = 0; iAlter < alterFull; iAlter++) {
            arrAlter[iAlter] = iAlter + 1;
        }
        var pAlter, nAlter, tmpAlter;
        for (pAlter = arrAlter.length; pAlter;) {
            nAlter = Math.random() * pAlter-- | 0;
            tmpAlter = arrAlter[nAlter];
            arrAlter[nAlter] = arrAlter[pAlter];
            arrAlter[pAlter] = tmpAlter;
        }
        for (var h = 0; h < maximo; h++) {
            try {
                if (this.perguntas[arr[h]].grupo_id == f[0] || this.perguntas[arr[h]].grupo_id == f[1] || this.perguntas[arr[h]].grupo_id == f[2] || this.perguntas[arr[h]].grupo_id == f[3] || this.perguntas[arr[h]].grupo_id == f[4] || this.perguntas[arr[h]].grupo_id == f[5] || this.perguntas[arr[h]].grupo_id == f[6] || this.perguntas[arr[h]].grupo_id == f[7] || this.perguntas[arr[h]].grupo_id == f[8] || this.perguntas[arr[h]].grupo_id == f[9] || this.perguntas[arr[h]].grupo_id == f[10]) {
                    //if(this.perguntas[arr[h]].nivel_id == niveis)
                    //{
                    this.cardSimple =
                        {
                            id: this.perguntas[arr[h]].id,
                            enunciado: this.utf8Decode(this.perguntas[arr[h]].enunciado),
                            //img_url: '<img src="http://bqldse.romssilva.com/romulosi_bqldse_pt/' + this.perguntas[arr[h]].img_url + '" alt="..." width="auto" height="100%" style=""/>',  //width="50%" height="30vh" class="img-fluid"
                            img_url: this.fullurlgameimg + this.perguntas[arr[h]].img_url,
                            nivel_id: this.perguntas[arr[h]].nivel_id,
                            grupo_id: this.perguntas[arr[h]].grupo_id,
                            //embaralhar
                            enunciado_a: this.alternativas(arrAlter[0], arr[h], true),
                            enunciado_b: this.alternativas(arrAlter[1], arr[h], true),
                            enunciado_c: this.alternativas(arrAlter[2], arr[h], true),
                            enunciado_d: this.alternativas(arrAlter[3], arr[h], true),
                            enunciado_e: this.alternativas(arrAlter[4], arr[h], true),
                            //novo valor das alternativas
                            number_a: this.correct(arrAlter[0], this.perguntas[arr[h]].correta),
                            number_b: this.correct(arrAlter[1], this.perguntas[arr[h]].correta),
                            number_c: this.correct(arrAlter[2], this.perguntas[arr[h]].correta),
                            number_d: this.correct(arrAlter[3], this.perguntas[arr[h]].correta),
                            number_e: this.correct(arrAlter[4], this.perguntas[arr[h]].correta),
                            //embaralhar //Aqui já está puxando as imagens.                  
                            imagem_a: this.alternativas(arrAlter[0], arr[h], false),
                            imagem_b: this.alternativas(arrAlter[1], arr[h], false),
                            imagem_c: this.alternativas(arrAlter[2], arr[h], false),
                            imagem_d: this.alternativas(arrAlter[3], arr[h], false),
                            imagem_e: this.alternativas(arrAlter[4], arr[h], false),
                            correta: this.perguntas[arr[h]].correta,
                            dica: this.perguntas[arr[h]].dica,
                            comentario: this.perguntas[arr[h]].comentario
                        };
                    //Nível das questões
                    switch (this.perguntas[arr[h]].nivel_id) {
                        case 2:
                            this.cardslv1.push(this.cardSimple);
                            break;
                        case 3:
                            this.cardslv2.push(this.cardSimple);
                            break;
                        case 4:
                            this.cardslv3.push(this.cardSimple);
                            break;
                        // outro nivel, ajeitar essa marmotice depois
                        case 5:
                            this.cardslv1.push(this.cardSimple);
                            break;
                        case 6:
                            this.cardslv2.push(this.cardSimple);
                            break;
                        case 7:
                            this.cardslv3.push(this.cardSimple);
                            break;
                    }
                    this.arrAlter = arrAlter;
                    this.cards.push(this.cardSimple);
                    this.rands.push(this.perguntas[arr[h]].id);
                    cont++;
                    // if(cont%10==0 && niveis < 3){
                    //   niveis++;
                    // }
                    console.log("passou");
                    //}
                }
            }
            catch (exception) {
                console.log("erro");
            }
        }
        //console.log(this.cardSimple.correta);
        //console.log(arrAlter);
        //console.log(cont);
        //console.log(Object.keys(this.perguntas).length);
        //console.log(this.rands);    
        console.log("Rodou");
    };
    //Embaralhar alternativas
    CardComponent.prototype.alternativas = function (arrAlter, arr, tipo) {
        if (arrAlter == 1) {
            if (tipo)
                return this.utf8Decode(this.perguntas[arr].enunciado_a);
            else
                //return '<img src="http://bqldse.romssilva.com/romulosi_bqldse_pt/' + this.perguntas[arr].imagem_a + '" alt="..." height="70/10px" width="200px" class="img-rounded">';
                return this.fullurlgameimg + this.perguntas[arr].imagem_a;
        }
        if (arrAlter == 2) {
            if (tipo)
                return this.utf8Decode(this.perguntas[arr].enunciado_b);
            else
                //return '<img src="http://bqldse.romssilva.com/romulosi_bqldse_pt/' + this.perguntas[arr].imagem_b + '" alt="..." height="70/10px" width="200px" class="img-rounded">';
                return this.fullurlgameimg + this.perguntas[arr].imagem_b;
        }
        if (arrAlter == 3) {
            if (tipo)
                return this.utf8Decode(this.perguntas[arr].enunciado_c);
            else
                //return '<img src="http://bqldse.romssilva.com/romulosi_bqldse_pt/' + this.perguntas[arr].imagem_c + '" alt="..." height="70/10px" width="200px" class="img-rounded">';
                return this.fullurlgameimg + this.perguntas[arr].imagem_c;
        }
        if (arrAlter == 4) {
            if (tipo)
                return this.utf8Decode(this.perguntas[arr].enunciado_d);
            else
                //return '<img src="http://bqldse.romssilva.com/romulosi_bqldse_pt/' + this.perguntas[arr].imagem_d + '" alt="..." height="70/10px" width="200px" class="img-rounded">';
                return this.fullurlgameimg + this.perguntas[arr].imagem_d;
        }
        if (arrAlter == 5) {
            if (tipo)
                return this.utf8Decode(this.perguntas[arr].enunciado_e);
            else
                //return '<img src="http://bqldse.romssilva.com/romulosi_bqldse_pt/' + this.perguntas[arr].imagem_e + '" alt="..." height="70/10px" width="200px" class="img-rounded">';
                return this.fullurlgameimg + this.perguntas[arr].imagem_e;
        }
    };
    CardComponent.prototype.correct = function (arrAlter, corretaOriginal) {
        if (arrAlter == 1 && corretaOriginal == 'a') {
            return 1;
        }
        if (arrAlter == 2 && corretaOriginal == 'b') {
            return 2;
        }
        if (arrAlter == 3 && corretaOriginal == 'c') {
            return 3;
        }
        if (arrAlter == 4 && corretaOriginal == 'd') {
            return 4;
        }
        if (arrAlter == 5 && corretaOriginal == 'e') {
            return 5;
        }
    };
    //Ver como paresentar uma carta por vez
    //gera a carta simples com as opções
    CardComponent.prototype.CardGeneration = function () {
        var card = [];
        // card.push(this.cards[this.number_question]);
        switch (this.lvl) {
            case 0:
                break;
            case 1:
                card.push(this.cardslv1[this.nq_lvl1]);
                // console.log("nivel 1");
                break;
            case 2:
                card.push(this.cardslv2[this.nq_lvl2]);
                // console.log("nivel 2");
                break;
            case 3:
                card.push(this.cardslv3[this.nq_lvl3]);
                // console.log("nivel 3");
                break;
            case 4:
                if (this.point_win <= this.point_lvl1)
                    card.push(this.cardslv1[this.nq_lvl1]);
                else if (this.point_win > this.point_lvl1 && this.point_win <= this.point_lvl2)
                    card.push(this.cardslv2[this.nq_lvl2]);
                else if (this.point_win > this.point_lvl2)
                    card.push(this.cardslv3[this.nq_lvl3]);
        }
        // console.log(card);
        return card;
    };
    //Teste Audio
    CardComponent.prototype.playAudio = function (correct) {
        var audio = new Audio();
        if (correct)
            audio.src = "../../../assets/audio/correct.mp3";
        else
            audio.src = "../../../assets/audio/incorrect.mp3";
        audio.load();
        audio.play();
    };
    //Função para testar o click
    CardComponent.prototype.test = function (value, correta, id) {
        if (value != null) {
            this.playAudio(true);
            this.clickResposta = true;
            this.counter0 = 0;
            this.trocarPlayer(this.vez, value);
            //alert("Correta");
            switch (id) {
                case 1:
                    this.qCA = this.success;
                    break;
                case 2:
                    this.qCB = this.success;
                    break;
                case 3:
                    this.qCC = this.success;
                    break;
                case 4:
                    this.qCD = this.success;
                    break;
            }
            // this.number_question++;
            // console.log(this.number_question);
        }
        else {
            this.playAudio(false);
            this.clickResposta = true;
            this.trocarPlayer(this.vez, value);
            switch (id) {
                case 1:
                    this.qCA = this.fail;
                    break;
                case 2:
                    this.qCB = this.fail;
                    break;
                case 3:
                    this.qCC = this.fail;
                    break;
                case 4:
                    this.qCD = this.fail;
                    break;
            }
            //alert("Incorreta");
        }
        this.passavez = false;
    };
    //Pular questão
    CardComponent.prototype.jump = function () {
        this.number_question++;
        this.valid_jump = false;
    };
    CardComponent.prototype.testClickAvatar = function () {
        // console.log(this.avatar);
    };
    CardComponent.prototype.getLocalStorage = function () {
        var getLocal = JSON.parse(localStorage.getItem('players'));
        console.log(getLocal);
        if (getLocal != null) {
            this.play1 = getLocal[0];
            this.play2 = getLocal[1];
        }
    };
    CardComponent.prototype.AllRigh = function () {
        var players = [];
        players.push(this.play1);
        players.push(this.play2);
        console.log(players);
        localStorage.setItem('players', JSON.stringify(players));
        if (this.play1.nome == '')
            this.play1.nome = "Jogador 1";
        if (this.play2.nome == '')
            this.play2.nome = "Jogador 2";
    };
    //troca a vez e adiciona os pontos
    CardComponent.prototype.trocarPlayer = function (number, value) {
        switch (number) {
            case 1:
                this.play1.status = 'disabled';
                this.play2.status = '';
                this.play1.blockaposta = true;
                this.play2.blockaposta = false;
                if (value != null) {
                    this.increments = true;
                    this.tempPlayer1Increments = this.play1.life + this.point_win;
                    // this.play1.life += this.point_win;
                    this.play1.scoreTrue++;
                    this.play1.scoreAtack++;
                    if (this.play1.scoreAtack % 3 == 0) {
                        this.play1.atack++;
                        this.play1.statusAtack = true;
                    }
                }
                else {
                    if (this.passavez)
                        this.decrementsErrorQuestion = true;
                    this.decrements = true;
                    this.tempPlayer1 = this.play1.life - this.point_over;
                    // this.play1.life -= this.point_over;
                    this.play1.scoreFalse++;
                }
                this.counter0 = this.timerQuestion / 2; //reset Timer diminui pela metade quando passsa a vez
                if (this.passavez) {
                    this.vez = 1;
                    this.play1.vezPlay = true;
                    this.play1.blockaposta = false;
                    this.play2.vezPlay = false;
                    this.passavez = false;
                    // this.blockb(1);
                    // this.trocarVez(2);
                }
                else {
                    this.vez = 2;
                }
                break;
            case 2:
                this.play1.status = '';
                this.play2.status = 'disabled';
                this.play1.blockaposta = false;
                this.play2.blockaposta = true;
                if (value != null) {
                    this.increments = true;
                    this.tempPlayer2Increments = this.play2.life + this.point_win;
                    // this.play2.life += this.point_win;
                    this.play2.scoreTrue++;
                    this.play2.scoreAtack++;
                    if (this.play2.scoreAtack % 3 == 0) {
                        this.play2.atack++;
                        this.play2.statusAtack = true;
                    }
                }
                else {
                    if (this.passavez)
                        this.decrementsErrorQuestion = true;
                    this.decrements = true;
                    this.tempPlayer2 = this.play2.life - this.point_over;
                    // this.play2.life -= this.point_over;
                    this.play2.scoreFalse++;
                }
                this.counter0 = this.timerQuestion / 2; //reset Timer
                if (this.passavez) {
                    this.vez = 2;
                    this.play2.vezPlay = true;
                    this.play2.blockaposta = false;
                    this.play1.vezPlay = false;
                    this.passavez = false;
                }
                else {
                    this.vez = 1;
                }
                break;
        }
        this.getdica = false;
        this.passavez = false;
    };
    //reset flip
    CardComponent.prototype.flipper = function () {
        document.querySelector('#flip-toggle').classList.toggle('hover');
        this.regrecivTime = 30;
        this.activeCount = false;
    };
    //troca a vez quando acabar o tempo
    CardComponent.prototype.trocarVez = function (number) {
        // this.lvl = 0;
        // this.flipper();
        this.decrements = true;
        switch (number) {
            case 1:
                this.tempPlayer1 = this.play1.life - this.point_over;
                // this.play1.life -= this.point_over;
                this.play1.scoreFalse++;
                if (this.passavez) {
                    this.vez = 1;
                    this.play1.vezPlay = true;
                    this.play1.blockaposta = false;
                    this.play2.vezPlay = false;
                    this.passavez = false;
                    // this.blockb(1);
                    // this.trocarVez(2);
                }
                else {
                    this.vez = 2;
                }
                break;
            case 2:
                this.tempPlayer2 = this.play2.life - this.point_over;
                // this.play2.life -= this.point_over;
                this.play2.scoreFalse++;
                if (this.passavez) {
                    this.vez = 2;
                    this.play2.vezPlay = true;
                    this.play2.blockaposta = false;
                    this.play1.vezPlay = false;
                    this.passavez = false;
                }
                else {
                    this.vez = 1;
                }
                break;
        }
    };
    //passa a vez e penalização por passar
    CardComponent.prototype.passaVez = function (number) {
        this.regrecivTime = 30;
        this.passavez = true;
        this.decrements = true;
        this.passavezStatusIncDec = true;
        console.log(this.vez);
        switch (number) {
            case 1:
                this.tempPlayer1 = this.play1.life - this.point_over * this.multiPassaVez;
                // console.log("temp Player 1 " + this.tempPlayer1);
                // this.play1.life -= this.point_over*this.multiPassaVez;
                this.play1.scoreFalse++;
                this.vez = 2;
                break;
            case 2:
                this.tempPlayer2 = this.play2.life - this.point_over * this.multiPassaVez;
                // console.log("temp Player 2 " + this.tempPlayer2);
                // this.play2.life -= this.point_over*this.multiPassaVez;
                this.play2.scoreFalse++;
                this.vez = 1;
                break;
        }
    };
    CardComponent.prototype.atackPlayer = function (id) {
        // this.counter0 = 0;
        switch (id) {
            case 1:
                this.play2.life--;
                this.play1.scoreAtack = 0;
                this.play1.atack--;
                if (this.play1.atack < 1) {
                    this.play1.statusAtack = false;
                }
                break;
            case 2:
                this.play1.life--;
                this.play2.scoreAtack = 0;
                this.play2.atack--;
                if (this.play2.atack < 1) {
                    this.play2.statusAtack = false;
                }
                break;
        }
    };
    CardComponent.prototype.ValorMuda = function () {
        var x = document.getElementById('player1');
        var y = document.getElementById('player2');
        if (x.style.display === 'none' || y.style.display === 'none') {
            x.style.display = 'block';
            y.style.display = 'block';
            this.liberar = true;
        }
        else {
            x.style.display = 'none';
            y.style.display = 'none';
            this.liberar = false;
        }
        console.log(this.liberar);
    };
    //   //--------------------------------------------- ESTATÍSTICAS ------------------------------------------------------//
    CardComponent.prototype.getStatistics = function (answer, correct, level, id_q) {
        var st_answer = this.decodeQuestion(answer);
        var n_correct = this.decodeCorrect(correct);
        var name;
        var player;
        switch (this.vez) {
            case 1:
                player = this.play1;
                name = this.play1.nome;
                break;
            case 2:
                player = this.play2;
                name = this.play2.nome;
                break;
        }
        this.statistics = {
            jogo: 'bets',
            resposta_correta: correct,
            resposta: st_answer,
            assunto: 'Reações Orgânicas',
            sala: player.classRoom,
            id_pergunta: id_q,
            tempo_seg: 30 - this.regrecivTime,
            nivel: level,
            resposta_correta_num: n_correct,
            resposta_num: answer,
            dica: false,
            //desnecessário
            nome_player: player.nome
        };
        if (this.getdica)
            this.statistics.dica = true;
        // console.log(correct);
        // console.log(answer);
        // console.log(this.arrAlter);
        this.save();
    };
    CardComponent.prototype.decodeQuestion = function (answer) {
        switch (answer) {
            case 1:
                return 'a';
            case 2:
                return 'b';
            case 3:
                return 'c';
            case 4:
                return 'd';
            case 5:
                return 'e';
        }
    };
    CardComponent.prototype.decodeCorrect = function (correct) {
        switch (correct) {
            case 'a':
                return 1;
            case 'b':
                return 2;
            case 'c':
                return 3;
            case 'd':
                return 4;
            case 'e':
                return 5;
        }
    };
    CardComponent.prototype.save = function () {
        this.http.builder('statistics')
            .insert(this.statistics)
            .then(function (res) {
            console.log("salvo");
        });
    };
    //types:
    // 1 = dica
    // 2 = comentario
    CardComponent.prototype.getDicaComenst = function (value, type) {
        // alert(value);
        if (type == 1) {
            if (!this.getdica) {
                switch (this.vez) {
                    case 1:
                        // console.log("decrement play1");
                        this.decrements = true;
                        this.passavezStatusIncDec = true;
                        this.decrementsErrorQuestion = true;
                        this.tempPlayer1 = this.play1.life - (this.point_over * this.multiGetDicabuy);
                        break;
                    case 2:
                        // console.log("decrement play2");
                        this.decrements = true;
                        this.passavezStatusIncDec = true;
                        this.decrementsErrorQuestion = true;
                        this.tempPlayer2 = this.play2.life - (this.point_over * this.multiGetDicabuy);
                        break;
                }
            }
            this.getdica = true;
            this.getDicaModal = !this.getDicaModal;
            this.stringDicaComents = value;
        }
        if (type == 2) {
            this.getComents = !this.getComents;
            this.stringDicaComents = value;
        }
        console.log(this.getComents);
    };
    CardComponent.prototype.progressiveBar = function () {
        // console.log((100/30) * this.regrecivTime);
        if (25 > 100 / 30 * this.regrecivTime) {
            this.progression = "bg-danger";
        }
        else if (75 > 100 / 30 * this.regrecivTime && 25 < 100 / 30 * this.regrecivTime) {
            this.progression = "bg-warning";
        }
        else if (75 < 100 / 30 * this.regrecivTime) {
            this.progression = "bg-success";
        }
    };
    CardComponent.prototype.valueModa = function (txt) {
        this.modal = !this.modal;
    };
    return CardComponent;
}());
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/play-game/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play-game/card/card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* AppHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* AppHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__["SimpleTimer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__["SimpleTimer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CardComponent);

var _a, _b, _c;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/play-game/count-timer/count-timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play-game/count-timer/count-timer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \t<p>\n\t\tng2-simple-timer is available in\n\t\t  <a href=\"https://www.npmjs.com/package/ng2-simple-timer\">npm</a> and \n      <a href=\"https://github.com/J-Siu/ng2-simple-timer\">github</a>.\n    This example is available in\n      <a href=\"https://github.com/J-Siu/ng2-simple-timer-example\">github</a>.\n    </p>\n\t\t<div style=\"border: 1px solid;margin:5px;padding:5px\">\n  \t\t<h3>{{title}}</h3>\n  \t\t<div><button (click)=\"subscribeTimer0()\">{{timer0button}}  1 sec timer0</button>{{counter0}}</div>\n  \t\t<div><button (click)=\"subscribeTimer1()\">{{timer1button}}  5 sec timer1</button>{{counter1}}</div>\n  \t\t<div><button (click)=\"subscribeTimer2()\">{{timer2button}} 10 sec timer2</button>{{counter2}}</div>\n  \t\t<div style=\"border: 1px solid;margin:5px;padding:5px\">\n    \t\tTimer can no longer be subscribed or unscubscribed once deleted.\n    \t\t<div><button (click)=\"delAllTimer()\">Delete all timer</button></div>\n      </div>\n    </div> -->\n\n    <div *ngIf=\"gameOn\">\n    <nav class=\"navbar navbar-light justify-content-between\" style=\"background-color: #fff;position: absolute; top: 0; width: 100%; left: 0; height: 50px\">\n      <a class=\"navbar-brand\" href=\"#\" routerLink=\"/rules\">Regras</a>\n      <a class=\"navbar-brand\" *ngIf=\"time.fullgame < 31\"><span *ngIf=\"timeGameCountMinRegress < 10\">0</span>{{timeGameCountMinRegress}} : <span *ngIf=\"timeGameCountSecondsRegress < 10\">0</span>{{timeGameCountSecondsRegress}}</a>\n      <a class=\"navbar-brand\" href=\"#\">Sair</a>\n    </nav>\n  </div>\n  <div *ngIf=\"!show\" class=\"game-start\">\n    <div *ngIf=\"!shower\" style=\"margin-top: 5vh;\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <label for=\"exampleInputEmail1\" class=\"display-4 textGame\">Escolha o Tempo de Jogo</label>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 5 ? '#09B268' : 'transparent', 'padding': time.fullgame == 5 ? '5px' : '0', 'margin-top': time.fullgame == 5 ? '-5px' : '0', 'border': '2px solid #09B268'}\">\n                  <img src=\"http://www.ldse.ufc.br/dj/assets/img/time05min.png\" alt=\"\" class=\"timer\">\n                  <input type=\"radio\" name=\"fullgame\" value=\"5\" (click)=\"time.fullgame = 5\" checked>\n                </label>\n              </div>\n              <div class=\"col-sm-3\">\n                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 15 ? '#09B268' : 'transparent', 'padding': time.fullgame == 15 ? '5px' : '0', 'margin-top': time.fullgame == 15 ? '-5px' : '0', 'border': '2px solid #09B268'}\">\n                  <img src=\"http://www.ldse.ufc.br/dj/assets/img/time15min.png\" alt=\"\" class=\"timer\">\n                  <input type=\"radio\" name=\"fullgame\" value=\"15\" (click)=\"time.fullgame = 15\">\n                </label>\n              </div>\n              <div class=\"col-sm-3\">\n                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 30 ? '#09B268' : 'transparent', 'padding': time.fullgame == 30 ? '5px' : '0', 'margin-top': time.fullgame == 30 ? '-5px' : '0', 'border': '2px solid #09B268'}\">\n                  <img src=\"http://www.ldse.ufc.br/dj/assets/img/time30min.png\" alt=\"\" class=\"timer\">\n                  <input type=\"radio\" name=\"fullgame\" value=\"30\" (click)=\"time.fullgame = 30\">\n                </label>\n              </div>\n              <!-- Full time, infinity -->\n              <div class=\"col-sm-3\"> \n                <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': time.fullgame == 999999 ? '#09B268' : 'transparent', 'padding': time.fullgame == 999999 ? '5px' : '0', 'margin-top': time.fullgame == 999999 ? '-5px' : '0', 'border': '2px solid #09B268'}\">\n                  <img src=\"http://www.ldse.ufc.br/dj/assets/img/timefullmin.png\" alt=\"\" class=\"timer\">\n                  <input type=\"radio\" name=\"fullgame\" value=\"999999\" (click)=\"time.fullgame = 999999\">\n                </label>\n              </div>\n\n            </div>\n          </div>          \n        </div>\n        <div class=\"col-sm-4\"></div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-1\">\n          \n        </div>\n        <div class=\"col-sm-4\">\n          <!--  -->\n          <form #fp1=\"ngForm\" (ngSubmit)=\"onSubmit(fp1)\" novalidate>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\" class=\"display-4 namePlayer\">Primeiro Jogador</label>\n                <p class=\"display-4 textGame\">Escolha seu Avatar</p>\n              <!-- Avatar Play1 -->               \n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <ng-template ngFor let-item [ngForOf]=\"avatar\" let-Index=\"index+1\">\n                      <div class=\"col-sm-2\">\n                        <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': play1.id == Index ? '#BF19FF' : 'transparent', 'padding': play1.id == Index ? '5px' : '0', 'margin-top': play1.id == Index ? '-5px' : '0', 'margin-left': play1.id == Index ? '-5px' : '0', 'border': '2px solid #BF19FF'}\">\n                          <img src=\"http://www.ldse.ufc.br/dj/assets/img/{{Index}}.png\" alt=\"\" class=\"avatarP1\">\n                          <input type=\"radio\" name=\"avatar\" value=\"{{Index}}\" checked [(ngModel)]=\"play1.id\" (click)=\"testClickAvatar()\" required>\n                        </label>\n                          </div>\n                    </ng-template>\n                    </div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Nome</span>\n                    <input type=\"text\" class=\"form-control\" id=\"player1\" placeholder=\"Player 1\" [(ngModel)]=\"play1.nome\" name=\"player1\" required minlength=\"4\" maxlength=\"10\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Sala</span>\n                    <input type=\"text\" class=\"form-control\" id=\"player1\" placeholder=\"A4345\" name=\"player1\" required minlength=\"4\" maxlength=\"10\"> <!-- [(ngModel)]=\"statistics.sala\" -->\n                    <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Informe aqui a sala que deseja ser alocado!\">\n                    <span style=\"background-color: #fff; color: #000; border-radius: 100%; padding: 0 8px;\">i</span>\n                  </button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Instituição</span>\n                    <input type=\"text\" class=\"form-control\" id=\"unip1\" placeholder=\"Universidade Federal do Ceará\" name=\"unip1\" required minlength=\"4\" maxlength=\"10\">\n                  </div>\n                </div>\n              </div>\n\n              </div>\n          </form>\n        </div>\n\n        <div class=\"col-sm-2\"></div>\n\n        <div class=\"col-sm-4\">\n          <form #fp2=\"ngForm\" (ngSubmit)=\"onSubmit(fp2)\" novalidate>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\" class=\"display-4 namePlayer\">Segundo Jogador</label>\n                <p class=\"display-4 textGame\">Escolha seu Avatar</p>\n                <!-- Avatar Play2 -->               \n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <ng-template ngFor let-item [ngForOf]=\"avatar\" let-Index=\"index+1\">\n                      <div class=\"col-sm-2\">\n                        <label class=\"radio-inline avatar\" [ngStyle]=\"{'background-color': play2.id == Index ? '#B4FF00' : 'transparent', 'padding': play2.id == Index ? '5px' : '0', 'margin-top': play2.id == Index ? '-5px' : '0', 'margin-left': play2.id == Index ? '-5px' : '0', 'border': '2px solid #B4FF00'}\">\n                          <img src=\"http://www.ldse.ufc.br/dj/assets/img/{{Index}}.png\" alt=\"\" class=\"avatarP2\">\n                          <input type=\"radio\" name=\"avatar\" value=\"{{Index}}\" checked [(ngModel)]=\"play2.id\" (click)=\"testClickAvatar()\" required>\n                        </label>\n                          </div>\n                    </ng-template>\n                    </div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Nome</span>\n                    <input type=\"text\" class=\"form-control\" id=\"player2\" placeholder=\"Player 2\" [(ngModel)]=\"play2.nome\" name=\"player2\" required minlength=\"4\" maxlength=\"10\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Sala</span>\n                    <input type=\"text\" class=\"form-control\" id=\"player2\" placeholder=\"A4345\" name=\"player2\" required minlength=\"4\" maxlength=\"10\">\n                    <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Informe aqui a sala que deseja ser alocado!\">\n                    <span style=\"background-color: #fff; color: #000; border-radius: 100%; padding: 0 8px;\">i</span>\n                  </button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Instituição</span>\n                    <input type=\"text\" class=\"form-control\" id=\"unip2\" placeholder=\"Universidade Federal do Ceará\" name=\"unip2\" required>\n                  </div>\n                </div>\n              </div>\n              </div>\n          </form>\n        </div>\n\n\n        <div class=\"col-sm-1\">\n          \n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <button type=\"submit\" (click)=\"GetGrupo()\" class=\"btn btn-primary btn-lg game-buttom-conc\" (click)=\"shower = !shower\" [disabled]=\"!fp2.form.valid || !fp1.form.valid\" [disabled]=\"!groupOk\"> Tudo Pronto </button>\n          </div>          \n        </div>\n        <div class=\"col-sm-3\"></div>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"shower\"> <!-- Filtra o que vai aparecer -->\n      <div class=\"row\">\n\n        <div class=\"col-md-2\"></div>\n\n        <div class=\"col-md-8\">\n          <div class=\"container\">\n          <h1>Escolha o(s) Assunto(s)</h1>\n            <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\">\n                <ul class=\"list-group\">\n                  <br/>\n                  <ng-template ngFor let-item [ngForOf]=\"grup\" let-Index=\"index\">\n                    <label class=\"filtroAutomatic\" (click)=\"checarfiltro(item.id,!item.valor,item.nome,Index)\">\n                      <li class=\"list-group-item\" [ngStyle]=\"{'background-color': item.valor ? '#1E90FF' : 'transparent'}\">\n                        <span>{{item.nome}}</span>\n                        <div class=\"material-switch pull-right\">\n                          <input id=\"{{item.valor}}\" name=\"{{item.valor}}\" type=\"checkbox\" [(ngModel)]=\"item.valor\"/>\n                        </div>\n                      </li>\n                    </label>\n                  </ng-template>            \n                  <br/>\n                </ul>\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-dark btn-lg\" style=\"width: 30%\" (click)=\"ValorMuda()\" (click)=\"show = !show\" (click)=\"gameOn = !gameOn\" (click)=\"createGameCards()\" [disabled]=\"!lFiltro\"> {{show ? 'hide' : 'COMEÇAR'}} </button>\n        </div>\n\n        <div class=\"col-md-2\"></div>\n\n      </div>\n            \n    </div>\n  </div>\n<!-- ---------------------------------------------------------- Jogo começa aqui ------------------------------------------------------ -->\n    <div class=\"game-start\" *ngIf=\"!gameEnd\"> <!-- id=\"jogo\" style=\"display: none\" -->\n      <div class=\"container-game-card-player\">\n      <div class=\"row game-row\">\n        \n\n\n        <div class=\"col-md-3\" id=\"player1\" style=\"display: none\"> <!-- Player 1 -->\n          <!-- Button trigger modal <button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#roleta\">Roleta</button> -->\n          <div class=\"card text-white {{play1.bg}} mb-3\" style=\"height: 100%;\">\n            <div class=\"card-header\">{{play1.nome}} <!-- - {{timeGameCountMin}} - {{timeGameCountSeconds}} -->\n                <div class=\"avatar-player\" [ngStyle]=\"{'background-image': 'url(http://www.ldse.ufc.br/dj/assets/img/' + play1.id + '.png)'}\"></div>\n            </div>\n            <div class=\"card-body\">\n                <div *ngIf=\"play1.vezPlay && !passavez && !clickResposta\">\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; margin-bottom: 10px\">   \n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"passaVez(1)\" *ngIf=\"play1.blockaposta\" [disabled]=\"regrecivTime > 27\"> Passar a vez </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\" *ngIf=\"!play1.blockaposta\"> Passar a vez </button>\n                    <ng-template ngFor let-item [ngForOf]=\"CardGeneration()\" let-Index=\"index+1\">\n                    <button type=\"button\" class=\"btn btn-dark btn-md\" (click)=\"getDicaComenst(item.dica,1)\" *ngIf=\"play1.blockaposta\" [disabled]=\"item.dica!='' \"> Dica </button>\n                    </ng-template>\n                    <button type=\"button\" class=\"btn btn-dark btn-md\" disabled=\"disabled\" *ngIf=\"!play1.blockaposta\"> Dica </button>\n                    <!-- <button type=\"button\" class=\"btn btn-dark btn-md {{play1.status}}\" [disabled]=\"!play1.statusAtack\" (click)=\"atackPlayer(1)\"> Ataque </button> -->\n                  </div>\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">Faça sua aposta</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; text-align: center\">\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 4\" (click)=\"point_win = play1.life\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" *ngIf=\"!btnlvl1\">Apostar Tudo</button>\n                    \n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 1\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" [disabled]=\"!btnlvl1\" *ngIf=\"btnlvl1\">{{point_lvl1}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 2\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" [disabled]=\"!btnlvl2\">{{point_lvl2}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 3\" (click)=\"blockb(1)\" [disabled]=\"play1.blockaposta\" [disabled]=\"!btnlvl3\">{{point_lvl3}}</button>\n                  </div>\n                </div>\n                <div *ngIf=\"!play1.vezPlay || passavez || clickResposta\">\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; margin-bottom: 10px;\">\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> Passar a vez </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> Dica </button>\n                  </div>\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">Faça sua aposta</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; text-align: center\">\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> {{point_lvl1}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> {{point_lvl2}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> {{point_lvl3}} </button>\n                  </div>\n                </div>\n\n              <br/><br/>\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <p class=\"display-4 text-cad\">Acertos: {{play1.scoreTrue}}</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <p class=\"display-4 text-cad\">Erros: {{play1.scoreFalse}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">                 \n                  <h4 class=\"display-4 text-cad\" [ngStyle]=\"{'color': colorDecrementesIncrementes.colorPlay1 }\">Bagarote: {{play1.life}}</h4>\n                </div>\n              </div>\n              \n              <!-- <h4 class=\"card-title\">Ataques: {{play1.atack}}</h4>                            -->\n\n              <!-- <div>\n                <canvas #player1 width=\"100\" height=\"70\" class=\"canvasPlayer\"></canvas>\n                <div>\n                  Horizontal <input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"rectW_p1\" /><br />\n                  Vertical <input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"rectH_p1\" /><br />\n                  Cor <input type=\"color\" [(ngModel)]=\"rectColor_p1\" placeholder=\"color\" value=\"{{rectColor}}\" />\n                </div>\n              </div> -->\n            </div>\n          </div>  \n        </div>\n\n\n        \n        <!-- Carta -->\n        <div class=\"col-md-6\" *ngIf=\"liberar\">\n          <div class=\"flip-container\" id=\"flip-toggle\" ontouchstart=\"this.classList.toggle('hover');\">    \n            <div class=\"flipper\">     \n              <div class=\"front\">\n                <!-- Conteúdo da frente  background-color: #9400D3 -->\n                <div class=\"img-front\">\n                  <!-- <div class=\"img-logo-card\">\n                    \n                  </div> -->\n                </div>\n              </div>      \n              <div class=\"back\">\n                <!-- Conteúdo do verso -->\n              <ng-template ngFor let-item [ngForOf]=\"CardGeneration()\" let-Index=\"index+1\">\n                <div class=\"card border-info mb-3\" style=\"height: 100%;\">\n                  <div class=\"card-header\">\n                    <div class=\"row\">                   \n                      <div class=\"col-sm-4\">\n                        <!-- contagem de valores da carta -->\n                        <p class=\"card-text\" > Perde: {{point_over}}</p>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div *ngIf=\"clickResposta && item.comentario=='' \">\n                          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"subscribeTimer0()\" (click)=\"getDicaComenst(item.comentario,2)\">Comentário</button>\n                        </div>\n                      </div>                      \n                      <div class=\"col-sm-4\">\n                        <p class=\"card-text\" > Ganha: {{point_win}}</p>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"card-body text-info\" [ngStyle]=\"{'opacity': lvl == 0 ? '1' : '1'}\">\n                    <div class=\"card-header-definition\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <p [innerHTML]=\"item.enunciado\"> </p>                       \n                        </div>\n                      </div>\n                      <!-- isso vai sair, é só sistema -->\n                      <p class=\"card-text\" style=\"font-size: 7px;\"> {{item.number_a == null ? '0' : '1'}} - {{item.number_b == null ? '0' : '1'}} - {{item.number_c == null ? '0' : '1'}} - {{item.number_d == null ? '0' : '1'}} - </p>\n                    </div>\n\n                    <div class=\"card-main-definition\" >\n                      <!-- imagem do enunciado -->\n                      <div *ngIf=\"item.enunciado_a!=''\" class=\"container-enunciado-img\">\n                        <div class=\"enunciado-img\" [ngStyle]=\"{'background-image': 'url(' + item.img_url + ')'}\"></div>\n                      </div>\n\n                      <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; word-wrap: normal;\">\n                        <button type=\"button\" (click)=\"getStatistics(arrAlter[0],item.correta,item.nivel_id,item.id)\" (click)=\"test(item.number_a,item.correta,1)\" class=\"btn btn-secondary\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\" [ngStyle]=\"{'background-color': qCA, 'background-color': item.number_a != null && clickResposta ? success : qCA}\">\n\n                          <div *ngIf=\"item.enunciado_a!=''\" [innerHTML]=\"item.enunciado_a\" class=\"text-buttom\"> </div>\n\n                          <div *ngIf=\"item.enunciado_a==''\" class=\"alternativa-card\">\n                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_a + ')'}\"></div>\n                          </div>\n\n                        </button>\n                        <button type=\"button\" (click)=\"getStatistics(arrAlter[1],item.correta,item.nivel_id,item.id)\" (click)=\"test(item.number_b,item.correta,2)\" class=\"btn btn-secondary\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\"  [ngStyle]=\"{'background-color': qCB, 'background-color': item.number_b != null && clickResposta ? success : qCB}\">\n\n                          <div *ngIf=\"item.enunciado_b!=''\" [innerHTML]=\"item.enunciado_b\" class=\"text-buttom\"> </div>\n\n                          <div *ngIf=\"item.enunciado_b==''\" class=\"alternativa-card\">\n                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_b + ')'}\"></div>\n                          </div>\n\n                        </button>\n                        <button type=\"button\" (click)=\"getStatistics(arrAlter[2],item.correta,item.nivel_id,item.id)\" (click)=\"test(item.number_c,item.correta,3)\" class=\"btn btn-secondary\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\"  [ngStyle]=\"{'background-color': qCC, 'background-color': item.number_c != null && clickResposta ? success : qCC}\">\n\n                          <div *ngIf=\"item.enunciado_c!=''\" [innerHTML]=\"item.enunciado_c\" class=\"text-buttom\"> </div>\n\n                          <div *ngIf=\"item.enunciado_c==''\" class=\"alternativa-card\">\n                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_c + ')'}\"></div>\n                          </div>\n\n                        </button>\n                        <button type=\"button\" (click)=\"getStatistics(arrAlter[3],item.correta,item.nivel_id,item.id)\"  (click)=\"test(item.number_d,item.correta,4)\" class=\"btn btn-secondary\" [disabled]=\"clickResposta\" [disabled]=\"decrements && !clickResposta\" [ngStyle]=\"{'background-color': qCD, 'background-color': item.number_d != null && clickResposta ? success : qCD}\">\n\n                          <div *ngIf=\"item.enunciado_d!=''\" [innerHTML]=\"item.enunciado_d\" class=\"text-buttom\"> </div>\n\n                          <div *ngIf=\"item.enunciado_d==''\" class=\"alternativa-card\">\n                            <div class=\"enunciado-img\" [ngStyle]=\"{ 'background-image': 'url(' + item.imagem_d + ')'}\"></div>\n                          </div>\n\n                        </button>\n                      </div>\n\n                    </div>\n\n                  </div>\n                  <div class=\"card-footer-definition\" >\n                    <div class=\"card-footer text-muted\">\n                      <div *ngIf=\"clickResposta\">\n                        <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" [ngStyle]=\"{ 'width': (100/4 * timeRespostaRegressive) + '%' , 'height': '10px'}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n\n                      <div class=\"progress\" *ngIf=\"!clickResposta\">\n                        <div class=\"progress-bar progress-bar-striped {{progression}}\" role=\"progressbar\" [ngStyle]=\"{ 'width': (100/30 * regrecivTime) + '%' , 'height': '10px'}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </ng-template>\n              </div>    \n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\" id=\"player2\" style=\"display: none\"> <!-- Player 2 -->\n          <div class=\"card text-white {{play2.bg}} mb-3\" style=\"height: 100%;\">\n            <div class=\"card-header\">{{play2.nome}}\n                <div class=\"avatar-player\" [ngStyle]=\"{'background-image': 'url(http://www.ldse.ufc.br/dj/assets/img/' + play2.id + '.png)'}\"></div>\n            </div>\n            <div class=\"card-body\">\n                <div *ngIf=\"play2.vezPlay && !passavez && !clickResposta\">\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; margin-bottom: 10px;\">              \n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"passaVez(2)\" *ngIf=\"play2.blockaposta\" [disabled]=\"regrecivTime > 27\"> Passar a vez </button>               \n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\" *ngIf=\"!play2.blockaposta\"> Passar a vez </button>\n                    <ng-template ngFor let-item [ngForOf]=\"CardGeneration()\" let-Index=\"index+1\">\n                    <button type=\"button\" class=\"btn btn-dark btn-md\" (click)=\"getDicaComenst(item.dica,1)\" *ngIf=\"play2.blockaposta\" [disabled]=\"item.dica!=''\" > Dica </button>\n                    </ng-template>\n                    <button type=\"button\" class=\"btn btn-dark btn-md\" disabled=\"disabled\" *ngIf=\"!play2.blockaposta\"> Dica </button>\n                    <!-- <button type=\"button\" class=\"btn btn-dark btn-md {{play2.status}}\" [disabled]=\"!play2.statusAtack\" (click)=\"atackPlayer(2)\"> Ataque </button> -->\n                  </div>\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">Faça sua aposta</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; text-align: center\">\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 4\" (click)=\"point_win = play2.life\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" *ngIf=\"!btnlvl1\">Apostar Tudo</button>\n\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 1\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" [disabled]=\"!btnlvl1\" *ngIf=\"btnlvl1\">{{point_lvl1}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 2\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" [disabled]=\"!btnlvl2\">{{point_lvl2}}</button>\n                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"flipper()\" (click)=\"lvl = 3\" (click)=\"blockb(2)\" [disabled]=\"play2.blockaposta\" [disabled]=\"!btnlvl3\">{{point_lvl3}}</button>\n                  </div>\n                </div>\n\n                <div *ngIf=\"!play2.vezPlay || passavez || clickResposta\">\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%;margin-bottom: 10px;\">\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> Passar a vez </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> Dica </button>\n                  </div>\n                  <label class=\"display-4 textGame\" style=\"color: #000; width: 100%;\">Faça sua aposta</label>\n                  <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" style=\"width: 100%; text-align: center\">\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> {{point_lvl1}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> {{point_lvl2}} </button>\n                    <button type=\"button\" class=\"btn btn-dark\" disabled=\"disabled\"> {{point_lvl3}} </button>\n                  </div>\n                </div>\n\n              <br/><br/>\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <p class=\"display-4 text-cad\">Acertos: {{play2.scoreTrue}}</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <p class=\"display-4 text-cad\">Erros: {{play2.scoreFalse}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">                 \n                  <h4 class=\"display-4 text-cad\" [ngStyle]=\"{'color': colorDecrementesIncrementes.colorPlay2 }\">Bagarote: {{play2.life}}</h4>\n                </div>\n              </div>\n\n              <!-- <h4 class=\"card-title\">Ataques: {{play2.atack}}</h4>-->\n              <br/>\n              <!-- <div>\n                <canvas #player2 width=\"100\" height=\"70\" class=\"canvasPlayer\"></canvas>\n                <div>\n                  Horizontal <input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"rectW_p2\" /><br />\n                  Vertical <input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"rectH_p2\" /><br />\n                  Cor <input type=\"color\" [(ngModel)]=\"rectColor_p2\" placeholder=\"color\" value=\"{{rectColor}}\" />\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Comentário -->\n    <div class=\"shadow-modal\" *ngIf=\"clickResposta && getComents || getDicaModal\">\n    </div>\n    <div class=\"modal-coments-dica\" *ngIf=\"clickResposta && getComents || getDicaModal\">\n      <div class=\"modal-open\">\n        <div class=\"button-close-modal\" style=\"width: 100%; text-align: right;\">\n          <button type=\"button\" class=\"btn btn-secondary btn-sm close-bt\" (click)=\"subscribeTimer0()\" (click)=\"getDicaComenst(null,2)\" *ngIf=\"clickResposta && getComents\"> X </button>\n\n          <button type=\"button\" class=\"btn btn-secondary btn-sm close-bt\" (click)=\"getDicaComenst(null,1)\" *ngIf=\"!clickResposta && getDicaModal\"> X </button>\n        </div>\n\n        {{stringDicaComents}}\n      </div>\n    </div>\n  </div>\n<!-- ---------------------------------------------------------- Jogo Termina aqui ------------------------------------------------------ -->\n  \n\n  <div *ngIf=\"gameEnd\">\n    <p>Parabéns, {{playerWin}}</p>\n    <a class=\"navbar-brand\" href=\"#\">Voltar</a>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/play-game/count-timer/count-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__("../../../../../src/app/app-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_card_component__ = __webpack_require__("../../../../../src/app/play-game/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountTimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Import ng2-simple-timer as SimpleTimer

var CountTimerComponent = (function () {
    function CountTimerComponent(http, grupo, _elementRef, st) {
        this.http = http;
        this.grupo = grupo;
        this._elementRef = _elementRef;
        this.st = st;
        this.title = 'Angular2 Simple Timer Service Example';
        this.counter0 = 0;
        this.timer0button = 'Subscribe';
        this.counter1 = 0;
        this.timer1button = 'Subscribe';
        this.counter2 = 0;
        this.timer2button = 'Subscribe';
    }
    CountTimerComponent.prototype.ngOnInit = function () {
        //this.canvas = this.myCanvas;
        this.st.newTimer('1sec', 1);
        this.st.newTimer('5sec', 5);
        this.st.newTimer('10sec', 10);
        this.subscribeTimer0();
        this.subscribeTimer1();
        this.subscribeTimer2();
    };
    CountTimerComponent.prototype.delAllTimer = function () {
        this.st.delTimer('1sec');
        this.st.delTimer('5sec');
        this.st.delTimer('10sec');
    };
    CountTimerComponent.prototype.subscribeTimer0 = function () {
        var _this = this;
        if (this.timer0Id) {
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            this.timer0button = 'Subscribe';
            console.log('timer 0 Unsubscribed.');
        }
        else {
            // Subscribe if timer Id is undefined
            this.timer0Id = this.st.subscribe('1sec', function () { return _this.timer0callback(); });
            this.timer0button = 'Unsubscribe';
            console.log('timer 0 Subscribed.');
        }
        console.log(this.st.getSubscription());
    };
    CountTimerComponent.prototype.subscribeTimer1 = function () {
        var _this = this;
        if (this.timer1Id) {
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer1Id);
            this.timer1Id = undefined;
            this.timer1button = 'Subscribe';
            console.log('timer 1 Unsubscribed.');
        }
        else {
            // Subscribe if timer Id is undefined
            this.timer1Id = this.st.subscribe('5sec', function () { return _this.timer1callback(); });
            this.timer1button = 'Unsubscribe';
            console.log('timer 1 Subscribed.');
        }
        console.log(this.st.getSubscription());
    };
    CountTimerComponent.prototype.subscribeTimer2 = function () {
        var _this = this;
        if (this.timer2Id) {
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer2Id);
            this.timer2Id = undefined;
            this.timer2button = 'Subscribe';
            console.log('timer 2 Unsubscribed.');
        }
        else {
            // Subscribe if timer Id is undefined
            this.timer2Id = this.st.subscribe('10sec', function () { return _this.timer2callback(); });
            this.timer2button = 'Unsubscribe';
            console.log('timer 2 Subscribed.');
        }
        console.log(this.st.getSubscription());
    };
    CountTimerComponent.prototype.timer0callback = function () {
        this.counter0++;
        if (this.counter0 % 3 == 0) {
            console.log("ativou");
        }
    };
    CountTimerComponent.prototype.timer1callback = function () {
        this.counter1++;
    };
    CountTimerComponent.prototype.timer2callback = function () {
        this.counter2++;
    };
    return CountTimerComponent;
}());
CountTimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-count-timer',
        template: __webpack_require__("../../../../../src/app/play-game/count-timer/count-timer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play-game/count-timer/count-timer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* AppHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* AppHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__card_card_component__["a" /* CardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__card_card_component__["a" /* CardComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__["SimpleTimer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_simple_timer__["SimpleTimer"]) === "function" && _d || Object])
], CountTimerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=count-timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/play-game/play-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play-game/play-game.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div *ngIf=\"!game\">\r\n\t\t<nav class=\"navbar navbar-light justify-content-between\" style=\"position: absolute; background-color: #fff; top: 0; width: 100%; left: 0; height: 50px\">\r\n\t\t  <a class=\"navbar-brand\" href=\"#\" routerLink=\"/rules\">Instruções</a>\r\n\t\t  <h1 class=\"navbar-brand display-4\" style=\"color: #000; font-size: 2.7em\">Med Bets</h1>\r\n\t\t  <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n\t\t</nav>\r\n\t</div>\r\n\r\n\t<div class=\"container-elements\">\r\n\t\t<app-card></app-card>      \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/play-game/play-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__("../../../../../src/app/app-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_card_component__ = __webpack_require__("../../../../../src/app/play-game/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayGameComponent = (function () {
    function PlayGameComponent(http, cardComponent, _elementRef, app) {
        this.http = http;
        this.cardComponent = cardComponent;
        this._elementRef = _elementRef;
        this.app = app;
        this.game = false;
        app.menuActived = false;
    }
    PlayGameComponent.prototype.ngOnInit = function () {
        //this.canvas = this.myCanvas;
    };
    return PlayGameComponent;
}());
PlayGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-play-game',
        template: __webpack_require__("../../../../../src/app/play-game/play-game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play-game/play-game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* AppHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* AppHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__card_card_component__["a" /* CardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__card_card_component__["a" /* CardComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _d || Object])
], PlayGameComponent);

var NgIfSimple = (function () {
    function NgIfSimple() {
        this.show = true;
        this.shower = true;
    }
    return NgIfSimple;
}());
var _a, _b, _c, _d;
//# sourceMappingURL=play-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/ranking-game/ranking-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ranking-game/ranking-game.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ranking-game works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ranking-game/ranking-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RankingGameComponent = (function () {
    function RankingGameComponent() {
    }
    RankingGameComponent.prototype.ngOnInit = function () {
    };
    return RankingGameComponent;
}());
RankingGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ranking-game',
        template: __webpack_require__("../../../../../src/app/ranking-game/ranking-game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ranking-game/ranking-game.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RankingGameComponent);

//# sourceMappingURL=ranking-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/rules-game/rules-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-elements.rules{\r\n\theight: auto;\r\n\ttext-align: left;\r\n}\r\n\r\n\t.container-elements.rules header{\r\n\t\tpadding: 30px;\r\n\r\n\t}\r\n\r\n\t\t.container-elements.rules header h1{\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-weight: lighter;\r\n\t\t}\r\n\r\n\t.container-elements.rules main h2{\r\n\t\tpadding: 20px;\r\n\t}\r\n\r\n.rules-el{\r\n\tmargin: 40px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rules-game/rules-game.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light justify-content-between secondary-menu\">\n\t<a class=\"navbar-brand\" href=\"#\" routerLink=\"/play\">Jogar</a>\n\t<h1 class=\"navbar-brand display-4\" style=\"color: #000; font-size: 2.7em\">Med Bets</h1>\n\t<a class=\"navbar-brand\" href=\"#\">Menu</a>\n</nav>\n\n<div class=\"container-elements rules\">\n\t<header>\t\t\n\t\t<div class=\"row\">\t\t\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<h1>INSTRUÇÕES</h1>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t</div>\n\t</header>\n\n\t<main>\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t<div class=\"col-sm-11\">\n\n\t\t\t\t<h2>1ª Passo</h2>\n\t\t\t\t<div class=\"row rules-el\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<article style=\"text-align: right\">\n\t\t\t\t\t\t\t<h3>Primeiro</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tEscolha a duração da partida que vocês desejam participar.\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Segundo</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tPreencham as informações dos dois jogadores, avatar, nome, sala (opcional) e instituição (opcional).\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Terceiro</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAperte no botão \"TUDO PRONTO\"\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t<img src=\"(../../../assets/img/configgame.png\" alt=\"...\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</picture>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\t\t\t\n\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t<h2 style=\"text-align: right\">2ª Passo</h2>\n\t\t\t\t<div class=\"row rules-el\">\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t<img src=\"(../../../assets/img/assuntosgame.png\" alt=\"...\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</picture>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h3>Primeiro</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tSelecione um ou mais assuntos para serem abordados.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Segundo</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tEsses assuntos estarão relacionados aos tipos de perguntas que o jogo tratará.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Terceiro</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAperte no botão \"COMEÇAR\"\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t<h2>3ª Passo</h2>\n\t\t\t\t<div class=\"row rules-el\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<article style=\"text-align: right\">\n\t\t\t\t\t\t\t<h3>Primeiro</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAcima da tela temos o tempo total que a partida irá durar, essa opção será informada por você no 1ª passo.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Segundo</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tO primeiro jorador será o jogador a esquerda na tela.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Terceiro</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAbaixo do seu avatar terão as opções de ação dos jogadores.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t<img src=\"(../../../assets/img/telagame1.png\" alt=\"...\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</picture>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t<div class=\"row rules-el\">\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t<img src=\"(../../../assets/img/telagame2.png\" alt=\"...\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</picture>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h3>Quarto</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAo apostar um valor, irá aparecer uma carta que contem enunciado e alternativas.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Quinto</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tVocê deverá responder a questão antes que a barra de progressão (acima da carta) chegue ao fim.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Sexto</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAlém disso você poderá passar a vez caso deseje, porém essa ação deverá ser comprada por você, ou seja você pagará por ela.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t<div class=\"row rules-el\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<article style=\"text-align: right\">\n\t\t\t\t\t\t\t<h3>Sétimo</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tApós responder a questão você irá receber um <i>feedback</i> como na imagem.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Oitavo</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tSe estiver correta você receberá o valor da sua aposta, se não você perderá o valor da sua aposta.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h3>Nono</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tVocê poderá acompanhar seus erros, acertos e moedas logo abaixo das opções de apostas, boa sorte.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t<img src=\"(../../../assets/img/telagame3.png\" alt=\"...\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</picture>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t<div class=\"row rules-el\">\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t<img src=\"(../../../assets/img/gameend.png\" alt=\"...\" width=\"100%\" height=\"auto\">\n\t\t\t\t\t\t</picture>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<h3>Décimo</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tO jogo acabará caso o tempo de jogo chegue a 00m:00s, nesse caso o vencedor será o jogador com mais moedas. Além disso, caso um dos jogadores chegue a um número igual ou menor que zero moedas ele perderá e seu adversário irá vencer.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-1\"></div>\n\t\t</div>\n\t</main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/rules-game/rules-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesGameComponent = (function () {
    function RulesGameComponent() {
    }
    RulesGameComponent.prototype.ngOnInit = function () {
    };
    return RulesGameComponent;
}());
RulesGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rules-game',
        template: __webpack_require__("../../../../../src/app/rules-game/rules-game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rules-game/rules-game.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RulesGameComponent);

//# sourceMappingURL=rules-game.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/bgMed.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bgMed.0ca4fc4933fb98027052.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map