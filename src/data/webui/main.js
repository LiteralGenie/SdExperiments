"use strict";
(self["webpackChunkSdRefiner"] = self["webpackChunkSdRefiner"] || []).push([["main"],{

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 28555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forRoot({}), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreRootModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 83683);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 23267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 3848);
/* harmony import */ var _grid_grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid/grid-settings/grid-settings.component */ 91761);
/* harmony import */ var _grid_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid-view/grid-view.component */ 45419);







const _c0 = ["drawer"];
class AppComponent {
    onKeydownR(ev) {
        const tgt = ev.target;
        if (tgt.nodeName !== 'TEXTAREA' && tgt.nodeName !== 'INPUT') {
            console.log(ev);
            this.drawer.toggle();
            ev.preventDefault();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.s", function AppComponent_keydown_s_HostBindingHandler($event) { return ctx.onKeydownR($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 7, consts: [["autosize", ""], ["mode", "side"], ["drawer", ""], ["mat-align-tabs", "start", 2, "max-height", "100%"], ["label", "SETTINGS"], ["label", "FAVORITES"], ["label", "HISTORY"], [2, "display", "flex", "flex-flow", "column"], ["mat-icon-button", "", 3, "click"], [1, "las", "la-bars", "la-2x"], [3, "onSettingsUpdate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2)(3, "mat-tab-group", 3)(4, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-grid-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "WIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "WIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-drawer-content", 7)(11, "mat-toolbar")(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-grid-view", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", "calc(100% - 64px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("onSettingsUpdate", _r0.open.bind(_r0));
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _grid_grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_0__.GridSettingsComponent, _grid_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_1__.GridViewComponent], styles: ["app-root > .mat-drawer-container .mat-drawer,\napp-root > .mat-drawer-container .mat-tab-group,\napp-root > .mat-drawer-container .mat-tab-body-wrapper,\napp-root > .mat-drawer-container .mat-tab-body,\napp-root > .mat-drawer-container app-grid-settings {\n  height: 100%;\n}"], encapsulation: 2 });


/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/text-field */ 39349);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 77331);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 44850);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 23267);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 17009);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 3848);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 83683);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 84934);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 28555);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store-devtools */ 90825);
/* harmony import */ var _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @perfectmemory/ngx-contextmenu */ 750);
/* harmony import */ var ng_let__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-let */ 81101);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _grid_grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid-settings/grid-settings.component */ 91761);
/* harmony import */ var _grid_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid/grid-view/grid-view.component */ 45419);
/* harmony import */ var _grid_rez_input_rez_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/rez-input/rez-input.component */ 83046);
/* harmony import */ var _grid_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/store */ 21487);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/platform */ 83353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forRoot({ grid: _grid_store__WEBPACK_IMPORTED_MODULE_5__.gridReducer, gridForm: _grid_store__WEBPACK_IMPORTED_MODULE_5__.gridFormReducer }),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__.TextFieldModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        ng_let__WEBPACK_IMPORTED_MODULE_23__.NgLetModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule.instrument(),
        _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_25__.ContextMenuModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__.PlatformModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _grid_grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_2__.GridSettingsComponent,
        _grid_grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_3__.GridViewComponent,
        _grid_rez_input_rez_input_component__WEBPACK_IMPORTED_MODULE_4__.RezInputComponent], imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreRootModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__.TextFieldModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        ng_let__WEBPACK_IMPORTED_MODULE_23__.NgLetModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule, _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_25__.ContextMenuModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__.PlatformModule] }); })();


/***/ }),

/***/ 96656:
/*!******************************!*\
  !*** ./src/app/grid/axis.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AXES": () => (/* binding */ AXES),
/* harmony export */   "AXIS_CFG_SCALE": () => (/* binding */ AXIS_CFG_SCALE),
/* harmony export */   "AXIS_PROMPT": () => (/* binding */ AXIS_PROMPT),
/* harmony export */   "AXIS_PROMPT_NEGATIVE": () => (/* binding */ AXIS_PROMPT_NEGATIVE),
/* harmony export */   "AXIS_SAMPLER": () => (/* binding */ AXIS_SAMPLER),
/* harmony export */   "AXIS_SEED": () => (/* binding */ AXIS_SEED),
/* harmony export */   "AXIS_SIZE": () => (/* binding */ AXIS_SIZE),
/* harmony export */   "AXIS_STEPS": () => (/* binding */ AXIS_STEPS)
/* harmony export */ });
const AXIS_PROMPT = {
    id: 'prompt',
    name: 'Prompt',
    mapParams: (params, value) => {
        return {
            ...params,
            prompt: value + params.prompt
        };
    },
    mapDisplay: (params, value) => {
        return value;
    },
};
const AXIS_PROMPT_NEGATIVE = {
    id: 'prompt_negative',
    name: 'Negative Prompt',
    mapParams: (params, value) => {
        return {
            ...params,
            prompt_negative: value + params.prompt_negative
        };
    },
    mapDisplay: (params, value) => {
        return value;
    },
};
const AXIS_STEPS = {
    id: 'steps',
    name: 'Steps',
    mapParams: (params, value) => {
        return {
            ...params,
            steps: value
        };
    },
    mapDisplay: (params, value) => {
        return value.toString();
    },
};
const AXIS_SAMPLER = {
    id: 'sampler',
    name: 'Sampler',
    mapParams: (params, value) => {
        return {
            ...params,
            sampler: value
        };
    },
    mapDisplay: (params, value) => {
        return value;
    },
};
const AXIS_CFG_SCALE = {
    id: 'cfg',
    name: 'CFG',
    mapParams: (params, value) => {
        return {
            ...params,
            cfg_scale: value
        };
    },
    mapDisplay: (params, value) => {
        return value.toString();
    },
};
const AXIS_SEED = {
    id: 'seed',
    name: 'Seed',
    mapParams: (params, value) => {
        return {
            ...params,
            seed: value
        };
    },
    mapDisplay: (params, value) => {
        return value.toString();
    },
};
const AXIS_SIZE = {
    id: 'size',
    name: 'Size',
    mapParams: (params, value) => {
        return {
            ...params,
            width: value[0],
            height: value[1]
        };
    },
    mapDisplay: (params, value) => {
        return `${value[0]}x${value[1]}`;
    },
};
const AXES = {
    prompt: AXIS_PROMPT,
    prompt_negative: AXIS_PROMPT_NEGATIVE,
    steps: AXIS_STEPS,
    sampler: AXIS_SAMPLER,
    cfg: AXIS_CFG_SCALE,
    seed: AXIS_SEED,
    size: AXIS_SIZE,
};


/***/ }),

/***/ 91761:
/*!***************************************************************!*\
  !*** ./src/app/grid/grid-settings/grid-settings.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridSettingsComponent": () => (/* binding */ GridSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/app/services/data.service */ 25897);
/* harmony import */ var _src_app_utils_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/utils/compare */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 60515);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 39300);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 39841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 39646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 11520);
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axis */ 96656);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ 21487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 28555);
/* harmony import */ var _grid_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-settings.service */ 44486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 83683);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/text-field */ 39349);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 44850);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var ng_let__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-let */ 81101);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _rez_input_rez_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rez-input/rez-input.component */ 83046);























function GridSettingsComponent_form_2_mat_hint_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { diff: a0 }; };
function GridSettingsComponent_form_2_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_6_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r5.formDiff.baseParams.prompt));
} }
function GridSettingsComponent_form_2_mat_hint_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_11_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r6.formDiff.baseParams.prompt_negative));
} }
function GridSettingsComponent_form_2_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const smplr_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", smplr_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", smplr_r20, " ");
} }
function GridSettingsComponent_form_2_mat_hint_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_18_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r8.formDiff.baseParams.sampler));
} }
function GridSettingsComponent_form_2_mat_hint_23_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_23_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r9.formDiff.baseParams.steps));
} }
function GridSettingsComponent_form_2_mat_hint_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_30_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r11.formDiff.baseParams.width));
} }
function GridSettingsComponent_form_2_mat_hint_36_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_36_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r13.formDiff.baseParams.height));
} }
function GridSettingsComponent_form_2_mat_hint_42_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_42_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r14.formDiff.baseParams.cfg_scale));
} }
function GridSettingsComponent_form_2_mat_hint_47_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_mat_hint_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_form_2_mat_hint_47_ng_container_1_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r15.formDiff.baseParams.seed));
} }
function GridSettingsComponent_form_2_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function GridSettingsComponent_form_2_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
const _c1 = function (a2) { return { controlId: "xAxis", title: "X-Axis", formGroup: a2 }; };
const _c2 = function (a2) { return { controlId: "yAxis", title: "Y-Axis", formGroup: a2 }; };
function GridSettingsComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.control.enter", function GridSettingsComponent_form_2_Template_form_keydown_control_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.save()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 12)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GridSettingsComponent_form_2_mat_hint_6_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 12)(8, "mat-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Negative Prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, GridSettingsComponent_form_2_mat_hint_11_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div")(13, "mat-form-field", 12)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Sampler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, GridSettingsComponent_form_2_mat_option_17_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, GridSettingsComponent_form_2_mat_hint_18_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-form-field", 12)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, GridSettingsComponent_form_2_mat_hint_23_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div")(25, "mat-form-field", 12)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function GridSettingsComponent_form_2_Template_input_blur_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.onSizeInputBlur("width")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, GridSettingsComponent_form_2_mat_hint_30_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 12)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "input", 22, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function GridSettingsComponent_form_2_Template_input_blur_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.onSizeInputBlur("height")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, GridSettingsComponent_form_2_mat_hint_36_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div")(38, "mat-form-field", 12)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "CFG Scale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, GridSettingsComponent_form_2_mat_hint_42_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-form-field", 12)(44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Seed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, GridSettingsComponent_form_2_mat_hint_47_Template, 2, 4, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, GridSettingsComponent_form_2_ng_container_49_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, GridSettingsComponent_form_2_ng_container_51_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.gridForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.SAMPLERS);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](30, _c1, ctx_r0.gridForm));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](32, _c2, ctx_r0.gridForm));
} }
function GridSettingsComponent_ng_template_12_div_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r39 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r36.AXES[opt_r39.key].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r36.AXES[opt_r39.key].name, " ");
} }
function GridSettingsComponent_ng_template_12_div_1_mat_hint_7_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diff_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, diff_r41.added), " ");
} }
function GridSettingsComponent_ng_template_12_div_1_mat_hint_7_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diff_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, diff_r41.removed), " ");
} }
function GridSettingsComponent_ng_template_12_div_1_mat_hint_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_ng_template_12_div_1_mat_hint_7_ng_container_1_span_1_Template, 3, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, GridSettingsComponent_ng_template_12_div_1_mat_hint_7_ng_container_1_span_3_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const diff_r41 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", diff_r41.added);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", diff_r41.removed);
} }
function GridSettingsComponent_ng_template_12_div_1_mat_hint_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_ng_template_12_div_1_mat_hint_7_ng_container_1_Template, 4, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const controlId_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).controlId;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r37.formDiff[controlId_r31].name);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngLet;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r52.AXES[axisId_r35].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r50);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngLet;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r53.AXES[axisId_r35].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r50);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngLet;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r54.AXES[axisId_r35].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r50);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngLet;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r55.AXES[axisId_r35].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r50);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngLet;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r56.AXES[axisId_r35].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r50);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngLet;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r57.AXES[axisId_r35].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r50);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_app_rez_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-rez-input", 57);
} if (rf & 2) {
    const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const controlArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", controlArray_r47.controls[i_r50]);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " UNKNOWN INPUT TYPE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 40, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_3_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_4_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_5_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_6_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_7_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_mat_form_field_8_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_app_rez_input_9_Template, 1, 1, "app-rez-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_div_10_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const i_r50 = restoredCtx.index; const controlArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.onAxisReorder(controlArray_r47, i_r50, i_r50 + 1)); })("keydown.ArrowLeft", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowLeft_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.onAxisButtonCycle(_r60, -1)); })("keydown.ArrowRight", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowRight_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.onAxisButtonCycle(_r60, 1)); })("keydown.shift.tab", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_shift_tab_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); $event.preventDefault(); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r51.focus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const i_r50 = restoredCtx.index; const controlArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.onAxisReorder(controlArray_r47, i_r50, i_r50 - 1)); })("keydown.ArrowLeft", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowLeft_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r86.onAxisButtonCycle(_r61, -1)); })("keydown.ArrowRight", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowRight_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r87.onAxisButtonCycle(_r61, 1)); })("keydown.shift.tab", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_shift_tab_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); $event.preventDefault(); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r51.focus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 47, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const i_r50 = restoredCtx.index; const controlArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.onAxisValueAdd(controlArray_r47, i_r50)); })("keydown.ArrowLeft", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowLeft_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](18); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.onAxisButtonCycle(_r62, -1)); })("keydown.ArrowRight", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowRight_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](18); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r92.onAxisButtonCycle(_r62, 1)); })("keydown.shift.tab", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_shift_tab_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); $event.preventDefault(); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r51.focus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const i_r50 = restoredCtx.index; const controlArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r94.onAxisValueRemove(controlArray_r47, i_r50)); })("keydown.ArrowLeft", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowLeft_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r96.onAxisButtonCycle(_r63, -1)); })("keydown.ArrowRight", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_ArrowRight_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r97.onAxisButtonCycle(_r63, 1)); })("keydown.shift.tab", function GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template_button_keydown_shift_tab_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); $event.preventDefault(); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r51.focus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const controlArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", axisId_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "prompt_negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "sampler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "cfg");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "seed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "size");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", controlArray_r47.length === 1);
} }
function GridSettingsComponent_ng_template_12_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_ng_template_12_div_1_ng_container_9_div_1_Template, 23, 9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const controlArray_r47 = ctx.ngLet;
    const axisId_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngLet;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formArrayName", axisId_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", controlArray_r47.controls)("ngForTrackBy", ctx_r38.trackByAxis);
} }
function GridSettingsComponent_ng_template_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "mat-form-field", 12)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GridSettingsComponent_ng_template_12_div_1_mat_option_5_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GridSettingsComponent_ng_template_12_div_1_mat_hint_7_Template, 2, 1, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, GridSettingsComponent_ng_template_12_div_1_ng_container_9_Template, 2, 3, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const axisId_r35 = ctx.ngLet;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const title_r32 = ctx_r102.title;
    const controlId_r31 = ctx_r102.controlId;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("diff", ctx_r34.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](title_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", controlId_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, ctx_r34.gridForm.controls["axisOptions"].controls));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r34.showDiffs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngLet", ctx_r34.gridForm.controls.axisOptions.controls[axisId_r35]);
} }
function GridSettingsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_ng_template_12_div_1_Template, 10, 9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const controlId_r31 = ctx.controlId;
    const formGroup_r33 = ctx.formGroup;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", formGroup_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngLet", ctx_r2.gridForm.controls[controlId_r31].value);
} }
function GridSettingsComponent_ng_template_14_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diff_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).diff;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, diff_r103.added), " ");
} }
function GridSettingsComponent_ng_template_14_ng_container_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diff_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).diff;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, diff_r103.removed), " ");
} }
function GridSettingsComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GridSettingsComponent_ng_template_14_ng_container_0_span_1_Template, 3, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, GridSettingsComponent_ng_template_14_ng_container_0_span_3_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const diff_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().diff;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", diff_r103.added);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", diff_r103.removed);
} }
function GridSettingsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, GridSettingsComponent_ng_template_14_ng_container_0_Template, 4, 2, "ng-container", 14);
} if (rf & 2) {
    const diff_r103 = ctx.diff;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", diff_r103);
} }
class GridSettingsComponent {
    constructor(store, cdr, gridSettingsService) {
        this.store = store;
        this.cdr = cdr;
        this.gridSettingsService = gridSettingsService;
        this.loaded = false;
        this.formDiff = {
            baseParams: {},
            xAxis: {},
            yAxis: {},
            axisOptions: {},
        };
        this.showDiffs = false;
        this.ignoreUpdate = false;
        this.subGridForm = rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY.subscribe();
        this.subGrid = rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY.subscribe();
        this.formChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY.subscribe();
        this.gridForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            baseParams: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                prompt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
                prompt_negative: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
                sampler: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
                steps: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1),
                cfg_scale: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1),
                width: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1),
                height: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1),
                seed: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-2),
            }),
            xAxis: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('steps'),
            yAxis: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('seed'),
            axisOptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({}),
        });
    }
    ngOnInit() {
        // Update form if another component edits form
        this.subGridForm = this.gridSettingsService.reload$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(() => {
            if (this.ignoreUpdate) {
                this.ignoreUpdate = false;
                return false;
            }
            else {
                return true;
            }
        }))
            .subscribe((gridForm) => {
            gridForm = JSON.parse(JSON.stringify(this.gridSettingsService.gridForm));
            this.loaded = true;
            // Update base params
            this.gridForm.patchValue({
                baseParams: gridForm.baseParams,
                xAxis: gridForm.activeAxis.x,
                yAxis: gridForm.activeAxis.y,
            }, { emitEvent: false });
            // Update axis options
            const axisOptions = this.gridForm.get('axisOptions');
            for (let name of Object.keys(axisOptions.controls)) {
                axisOptions.removeControl(name, { emitEvent: false });
            }
            for (let name of Object.keys(gridForm.axisOptions)) {
                const value = gridForm.axisOptions[name];
                const ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray(value.map((x) => new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(x)));
                axisOptions.addControl(name, ctrl, { emitEvent: false });
            }
        });
        this.gridSettingsService.reload$.next(null);
        this.gridForm.valueChanges.subscribe(this.updateStore.bind(this));
        this.subGrid = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__.selectGrid).subscribe((grid) => {
            this.activeGrid = grid;
        });
        // Calculate unsaved changes
        this.formChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__.selectGrid),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__.selectGridForm),
        ])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(([grid]) => !!grid))
            .subscribe(([grid]) => {
            grid = { ...grid };
            delete grid.type;
            const original = (grid || {});
            const update = this.toGrid();
            this.formDiff = {
                ...(0,_src_app_utils_compare__WEBPACK_IMPORTED_MODULE_1__.diffObjects)(original || {}, update),
                baseParams: (0,_src_app_utils_compare__WEBPACK_IMPORTED_MODULE_1__.diffObjects)(original?.baseParams || {}, update.baseParams),
                xAxis: (0,_src_app_utils_compare__WEBPACK_IMPORTED_MODULE_1__.diffObjects)(original?.xAxis || {}, update.xAxis),
                yAxis: (0,_src_app_utils_compare__WEBPACK_IMPORTED_MODULE_1__.diffObjects)(original?.yAxis || {}, update.yAxis),
            };
        });
        // Swap axes if user picks same x / y axis
        const xAxis = this.gridForm.get('xAxis');
        const yAxis = this.gridForm.get('yAxis');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(xAxis.value), xAxis.valueChanges),
            (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(yAxis.value), yAxis.valueChanges),
        ])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.pairwise)())
            .subscribe(([[oldX, oldY], [newX, newY]]) => {
            if (newX === newY) {
                if (oldX === newX)
                    xAxis?.setValue(oldY);
                if (oldY === newY)
                    yAxis?.setValue(oldX);
            }
        });
        xAxis.valueChanges.subscribe(() => this.cdr.markForCheck());
        yAxis.valueChanges.subscribe(() => this.cdr.markForCheck());
    }
    ngOnDestroy() {
        this.subGridForm.unsubscribe();
        this.subGrid.unsubscribe();
        this.formChanges.unsubscribe();
    }
    updateStore(form) {
        this.ignoreUpdate = true;
        form = form || this.gridForm.value;
        this.gridSettingsService.gridForm = {
            baseParams: form.baseParams,
            axisOptions: JSON.parse(JSON.stringify(form.axisOptions)),
            activeAxis: {
                x: form.xAxis,
                y: form.yAxis,
            },
        };
        this.gridSettingsService.reload$.next(null);
    }
    save() {
        this.store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.createGrid)(this.toGrid()));
    }
    reset() {
        if (!this.activeGrid)
            return;
        // Reset base params
        this.gridForm.patchValue({
            baseParams: this.activeGrid.baseParams,
            xAxis: this.activeGrid.xAxis.id,
            yAxis: this.activeGrid.yAxis.id,
        }, { emitEvent: false });
        // Reset axes
        const axisOptions = this.gridForm.controls['axisOptions'];
        const xAxis = axisOptions.controls[this.activeGrid.xAxis.id];
        const yAxis = axisOptions.controls[this.activeGrid.yAxis.id];
        xAxis.clear({ emitEvent: false });
        yAxis.clear({ emitEvent: false });
        for (let xVal of this.activeGrid.xValues) {
            xAxis.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(xVal), { emitEvent: false });
        }
        for (let yVal of this.activeGrid.yValues) {
            yAxis.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(yVal), { emitEvent: false });
        }
        // Notify form update
        this.updateStore();
    }
    onAxisButtonCycle(button, direction) {
        const currentEl = button._elementRef.nativeElement;
        const parent = currentEl.parentElement;
        const buttons = Array.from(parent.children).filter((el) => el.nodeName === 'BUTTON');
        const input = parent.querySelector('input');
        const idx = buttons.findIndex((el) => el === currentEl);
        let targetIdx = idx;
        while (true) {
            targetIdx += direction;
            if (targetIdx < 0 || targetIdx >= buttons.length) {
                input.focus();
                return;
            }
            const target = buttons[targetIdx];
            if (!target.disabled) {
                target.focus();
                return;
            }
        }
    }
    onAxisReorder(array, currentIndex, nextIndex) {
        const control = array.at(currentIndex);
        if (nextIndex >= 0 && nextIndex < array.length) {
            array.removeAt(currentIndex, { emitEvent: false });
            array.insert(nextIndex, control);
        }
    }
    onAxisValueAdd(array, currentIndex) {
        const control = array.at(currentIndex);
        const newControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(control.value);
        array.insert(currentIndex + 1, newControl);
    }
    onAxisValueRemove(array, currentIndex) {
        array.removeAt(currentIndex);
    }
    onSizeInputBlur(formControlName) {
        const control = this.gridForm.get('baseParams').get(formControlName);
        const val = Math.round(control.value / 64) * 64;
        control.setValue(val);
    }
    ngAfterViewInit() {
        this.save();
    }
    toGrid() {
        const form = this.gridForm.value;
        const xAxisId = form.xAxis;
        const yAxisId = form.yAxis;
        return {
            baseParams: form.baseParams,
            xAxis: _axis__WEBPACK_IMPORTED_MODULE_2__.AXES[xAxisId],
            xValues: form.axisOptions[xAxisId],
            yAxis: _axis__WEBPACK_IMPORTED_MODULE_2__.AXES[yAxisId],
            yValues: form.axisOptions[yAxisId],
        };
    }
    getAxisDiff(type) {
        const axis = type === 'xAxis' ? this.formDiff.xAxis : this.formDiff.yAxis;
        if (axis.name)
            return axis.name;
        const values = type === 'xAxis' ? this.formDiff.xValues : this.formDiff.yValues;
        if (values)
            return values;
        return undefined;
    }
    get AXES() {
        return _axis__WEBPACK_IMPORTED_MODULE_2__.AXES;
    }
    get hasChanges() {
        return Object.values(this.formDiff).some((obj) => Object.keys(obj).length > 0);
    }
    get SAMPLERS() {
        return _src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.SAMPLERS;
    }
    trackByAxis(index, control) {
        return control;
    }
}
GridSettingsComponent.ɵfac = function GridSettingsComponent_Factory(t) { return new (t || GridSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_grid_settings_service__WEBPACK_IMPORTED_MODULE_4__.GridSettingsService)); };
GridSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GridSettingsComponent, selectors: [["app-grid-settings"]], decls: 16, vars: 3, consts: [[2, "display", "grid", "grid-template-rows", "minmax(0, 1fr) max-content", "height", "100%"], [2, "min-height", "0", "overflow", "auto", "padding", "20px 20px"], ["style", "display: flex; flex-flow: column", 3, "formGroup", "keydown.control.enter", 4, "ngIf"], [1, "flex-row", 2, "justify-content", "space-between"], [1, "flex-row"], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 3, "click"], ["axisTemplate", ""], ["hintTemplate", ""], [2, "display", "flex", "flex-flow", "column", 3, "formGroup", "keydown.control.enter"], ["formGroupName", "baseParams"], ["appearance", "outline"], ["matInput", "", "cdkTextareaAutosize", "", "formControlName", "prompt"], [4, "ngIf"], ["for", "prompt_negative"], ["matInput", "", "cdkTextareaAutosize", "", "formControlName", "prompt_negative"], ["formControlName", "sampler"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "steps", "matInput", "", "type", "number"], ["formControlName", "width", "matInput", "", "type", "number", "min", "0", "step", "64", 3, "blur"], ["input", ""], ["formControlName", "height", "matInput", "", "type", "number", "min", "0", "step", "64", 3, "blur"], ["formControlName", "cfg_scale", "matInput", "", "type", "number"], ["formControlName", "seed", "matInput", "", "type", "number"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "value"], [1, "flex-row", 3, "formGroup"], ["class", "flex-col", "style", "width: 100%", 4, "ngLet"], [1, "flex-col", 2, "width", "100%"], [3, "formControlName"], ["formGroupName", "axisOptions"], [3, "formArrayName", 4, "ngLet"], ["style", "color: green", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [2, "color", "green"], [2, "color", "red"], [3, "formArrayName"], ["style", "\n                            display: grid;\n                            grid-template-columns: 1fr repeat(4, max-content);\n                        ", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "display", "grid", "grid-template-columns", "1fr repeat(4, max-content)"], [3, "ngSwitch"], ["appearance", "outline", 4, "ngSwitchCase"], [3, "control", 4, "ngSwitchCase"], ["style", "color: red; font-weight: bold", 4, "ngSwitchDefault"], ["mat-icon-button", "", 1, "mt-10", 3, "click", "keydown.ArrowLeft", "keydown.ArrowRight", "keydown.shift.tab"], ["down", ""], [1, "las", "la-arrow-down"], ["tabindex", "-1", "mat-icon-button", "", 1, "mt-10", 3, "click", "keydown.ArrowLeft", "keydown.ArrowRight", "keydown.shift.tab"], ["up", ""], [1, "las", "la-arrow-up"], ["add", ""], [1, "las", "la-plus"], ["tabindex", "-1", "mat-icon-button", "", 1, "mt-10", 3, "disabled", "click", "keydown.ArrowLeft", "keydown.ArrowRight", "keydown.shift.tab"], ["remove", ""], [1, "las", "la-times"], ["matInput", "", "type", "text", 3, "formControlName"], ["matInput", "", "type", "number", 3, "formControlName"], [3, "control"], [2, "color", "red", "font-weight", "bold"]], template: function GridSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, GridSettingsComponent_form_2_Template, 52, 34, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-toolbar", 3)(4, "div", 4)(5, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GridSettingsComponent_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.showDiffs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Show changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GridSettingsComponent_Template_button_click_8_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GridSettingsComponent_Template_button_click_10_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, GridSettingsComponent_ng_template_12_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, GridSettingsComponent_ng_template_14_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.showDiffs);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.hasChanges);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchDefault, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__.CdkTextareaAutosize, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, ng_let__WEBPACK_IMPORTED_MODULE_24__.NgLetDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckbox, _rez_input_rez_input_component__WEBPACK_IMPORTED_MODULE_5__.RezInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.KeyValuePipe], styles: ["app-grid-settings[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nform[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.las[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  height: 30px;\n  width: 30px;\n  margin-top: 4px;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  margin: 5px 0px 25px 0px;\n}\n\n.diff[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n  .diff .mat-form-field-subscript-wrapper {\n  top: calc(100% - 1.83em);\n}\n\n  .mat-checkbox {\n  font-size: 14px;\n}\n\n  .mat-checkbox-frame,   .mat-checkbox-background {\n  transform: scale(0.8);\n}"], changeDetection: 0 });


/***/ }),

/***/ 44486:
/*!*************************************************************!*\
  !*** ./src/app/grid/grid-settings/grid-settings.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridSettingsService": () => (/* binding */ GridSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ 86432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);



class GridSettingsService {
    constructor() {
        this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.gridForm = {
            baseParams: _types__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PARAMS,
            axisOptions: _types__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_AXIS_OPTIONS,
            activeAxis: { x: 'size', y: 'seed' },
        };
    }
}
GridSettingsService.ɵfac = function GridSettingsService_Factory(t) { return new (t || GridSettingsService)(); };
GridSettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GridSettingsService, factory: GridSettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45419:
/*!*******************************************************!*\
  !*** ./src/app/grid/grid-view/grid-view.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridViewComponent": () => (/* binding */ GridViewComponent)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 93507);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 39300);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 13099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 18505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 34782);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ 25897);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ 21487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 28555);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 17009);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ 83353);
/* harmony import */ var _grid_settings_grid_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid-settings/grid-settings.service */ 44486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 83683);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var ng_let__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-let */ 81101);
/* harmony import */ var _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @perfectmemory/ngx-contextmenu */ 750);



















const _c0 = ["containerEl"];
const _c1 = ["contextMenu"];

function GridViewComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", (col_r13.dim + ctx_r12.padding) * ctx_r12.scale, "px")("justify-content", "center")("font-size", 1.2, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", col_r13.title, " ");
  }
}

function GridViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent_div_5_div_1_Template, 2, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const gridView_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", "flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", gridView_r11.cols);
  }
}

function GridViewComponent_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", (row_r17.dim + ctx_r16.padding) * ctx_r16.scale, "px")("justify-content", "center")("font-size", 1.2, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r17.title, " ");
  }
}

function GridViewComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent_ng_container_9_div_1_Template, 2, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const gridView_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", gridView_r15.rows);
  }
}

function GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_rect_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "rect", 35, 36);
  }

  if (rf & 2) {
    const pos_r31 = ctx.ngLet;
    const cell_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngLet;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stroke-width", ctx_r28.padding / 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("height", pos_r31.height)("width", pos_r31.width)("x", pos_r31.x)("y", pos_r31.y)("href", cell_r27.image.data);
  }
}

function GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_g_2__svg_use_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "use", 38);
  }

  if (rf & 2) {
    const tfm_r35 = ctx.ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("transform", tfm_r35);
  }
}

function GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_g_2__svg_use_1_Template, 1, 2, "use", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngLet;
    const c_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const r_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngLet", ctx_r29.getSpinnerPosition(cell_r27, r_r22, c_r25));
  }
}

function GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_image_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "image", null, 39);
  }

  if (rf & 2) {
    const cell_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngLet;
    const c_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const r_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("height", cell_r27.height)("width", cell_r27.width)("x", cell_r27.x + ctx_r30.padding * (c_r25 + 1))("y", cell_r27.y + ctx_r30.padding * (r_r22 + 1))("href", cell_r27.image.data);
  }
}

const _c2 = function (a0, a1) {
  return {
    image: a0,
    gridView: a1
  };
};

function GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_rect_1_Template, 2, 6, "rect", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_g_2_Template, 2, 1, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1__svg_image_3_Template, 2, 5, "image", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r27 = ctx.ngLet;
    const c_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const r_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const gridView_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contextMenu", _r6)("contextMenuValue", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c2, cell_r27.image, gridView_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngLet", ctx_r26.getContainerPosition(cell_r27, r_r22, c_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", cell_r27.image.status === "LOADING");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", cell_r27.image.data);
  }
}

function GridViewComponent__svg_g_23__svg_g_1__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent__svg_g_23__svg_g_1__svg_g_1__svg_g_1_Template, 4, 8, "g", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const c_r25 = ctx.index;
    const r_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const gridView_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngLet", gridView_r19.cellAt(r_r22, c_r25));
  }
}

function GridViewComponent__svg_g_23__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent__svg_g_23__svg_g_1__svg_g_1_Template, 2, 1, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const gridView_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", gridView_r19.cols);
  }
}

function GridViewComponent__svg_g_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GridViewComponent__svg_g_23__svg_g_1_Template, 2, 1, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const gridView_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", gridView_r19.rows);
  }
}

function GridViewComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const status_r49 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", status_r49.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", status_r49.loaded, " ");
  }
}

function GridViewComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Copy image");
  }
}

function GridViewComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Use as base");
  }
}

function GridViewComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Load");
  }
}

function GridViewComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Re-generate");
  }
}

class GridViewComponent {
  ngOnInit() {
    this.grid$.subscribe(this.loadGrid.bind(this));
    this.gridView$.subscribe(() => this.setZoom(1, 0, 0, 500));
  }

  ngAfterViewInit() {
    const containerEl = this.containerEl.nativeElement;
    const zoomBehavior = this.zoomBehavior.interpolate(d3__WEBPACK_IMPORTED_MODULE_0__.interpolate);
    d3__WEBPACK_IMPORTED_MODULE_0__.select(this.containerEl.nativeElement).call(zoomBehavior);
    zoomBehavior.on('zoom', ({
      transform: {
        k,
        x,
        y
      }
    }) => {
      this.closeContextMenu();
      const imGrid = d3__WEBPACK_IMPORTED_MODULE_0__.select(containerEl).selectChild('svg').selectChild('g');
      const yAxis = d3__WEBPACK_IMPORTED_MODULE_0__.select(containerEl.children[2].children[0]);
      const xAxis = d3__WEBPACK_IMPORTED_MODULE_0__.select(containerEl.children[1].children[0]);
      imGrid.attr('transform', `translate(${x}, ${y}) scale(${k})`);
      yAxis.style('transform', `translate(0, ${y}px)`).style('transform-origin', '0 0');
      xAxis.style('transform', `translate(${x}px, 0)`).style('transform-origin', '0 0');
      this.scale = k;
    });
    zoomBehavior.on('end', ({
      sourceEvent,
      transform: tfm
    }) => {
      this.gridView$.subscribe(gridView => {
        if (!sourceEvent) return;
        const gridHeight = gridView.rows.reduce((total, track) => total + track.dim, this.padding * gridView.rows.length);
        const gridWidth = gridView.cols.reduce((total, track) => total + track.dim, this.padding * gridView.cols.length);
        const vpHeight = containerEl.clientHeight;
        const vpWidth = containerEl.clientWidth;
        const realSize = {
          x: gridWidth * tfm.k,
          y: gridHeight * tfm.k
        };
        const minX = -realSize.x * 0.8;
        const maxX = vpWidth * 0.8;
        const minY = -realSize.y * 0.8;
        const maxY = vpHeight * 0.8;
        const {
          x,
          y
        } = tfm;
        let tgtX, tgtY;
        if (x < minX) tgtX = minX;else if (x > maxX) tgtX = maxX;
        if (y < minY) tgtY = minY;else if (y > maxY) tgtY = maxY;

        if (tgtX !== undefined || tgtY !== undefined) {
          d3__WEBPACK_IMPORTED_MODULE_0__.select(containerEl).transition().duration(350).call(zoomBehavior.transform, d3__WEBPACK_IMPORTED_MODULE_0__.zoomIdentity.scale(tfm.k).translate((tgtX || x) / tfm.k, (tgtY || y) / tfm.k));
        }
      });
    });
  }

  loadGrid(grid) {
    const images = [];
    const {
      baseParams,
      xAxis,
      xValues,
      yAxis,
      yValues
    } = grid;
    yValues.forEach(yVal => {
      const row = [];
      let paramsRow = yAxis.mapParams(baseParams, yVal);
      xValues.forEach(xVal => {
        const paramsCell = xAxis.mapParams(paramsRow, xVal);
        row.push(new src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.Image(this.ds, paramsCell));
      });
      images.push(row);
    });
    return images;
  }

  onCopyImage(image) {
    if (this.platform.FIREFOX) {
      this.snackBar.open('To copy images, try shift + right-click', 'OK');
    } else {
      this.snackBar.open(`@TODO`);
    } // Use clipboard api for chrome but itll require https

  }

  onCtxMenuOpen(menu) {
    const image = menu.value.image;
    const copyImageOption = menu.menuItems.get(0);
    const loadOption = menu.menuItems.get(2);
    const regnerateOption = menu.menuItems.get(3);
    copyImageOption.disabled = image.status !== 'LOADED';
    loadOption.disabled = image.status !== 'IDLE';
    regnerateOption.disabled = image.status !== 'LOADED';
    this.cdr.detectChanges();
  }

  onLoadImage($event) {
    const image = $event.value.image;
    image.loadCached().then(() => image.load());
    this.cdr.detectChanges();
  }

  onForceLoadImage($event) {
    const image = $event.value.image;
    image.data = undefined;
    image.status = 'IDLE';
    image.load();
    this.cdr.detectChanges();
  }

  onSettingsExport($event) {
    const image = $event.value.image;
    this.gridSettingsService.gridForm = { ...this.gridSettingsService.gridForm,
      baseParams: image.params
    };
    this.gridSettingsService.reload$.next(null);
    this.onSettingsUpdate();
  }

  get status$() {
    return this.gridView$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(gridView => {
      const numLoaded = gridView.images.reduce((total, row) => {
        return total + row.filter(cell => cell.status === 'LOADED').length;
      }, 0);
      const numCells = gridView.rows.length * gridView.cols.length;
      return {
        title: `${gridView.yTitle} vs ${gridView.xTitle}`,
        loaded: `${numLoaded} of ${numCells} loaded`
      };
    }));
  }

  closeContextMenu() {
    this.contextMenu.contextMenuStack.closeAll();
  }

  setZoom(scale, x, y, duration = 0) {
    const containerEl = this.containerEl.nativeElement;
    d3__WEBPACK_IMPORTED_MODULE_0__.select(containerEl).transition().duration(duration).call(this.zoomBehavior.transform, d3__WEBPACK_IMPORTED_MODULE_0__.zoomIdentity.scale(scale).translate(x, y));
  }

  onKeydownR(ev) {
    const tgt = ev.target;

    if (tgt.nodeName !== 'TEXTAREA' && tgt.nodeName !== 'INPUT') {
      this.setZoom(1, 0, 0, 500);
      ev.preventDefault();
    } else console.log(ev);
  }

  getContainerPosition(cell, idxRow, idxCol) {
    const {
      width: imWidth,
      height: imHeight
    } = cell.image.params;
    const {
      x: cellX,
      y: cellY,
      width: cellWidth,
      height: cellHeight
    } = cell;
    const remWidth = cellWidth - imWidth;
    const remHeight = cellHeight - imHeight;
    const padX = this.padding * (idxCol + 1);
    const padY = this.padding * (idxRow + 1);
    return {
      x: cellX + padX + remWidth / 2,
      y: cellY + padY + remHeight / 2,
      width: imWidth,
      height: imHeight
    };
  }

  getSpinnerPosition(cell, idxRow, idxCol) {
    const containerPos = this.getContainerPosition(cell, idxRow, idxCol);
    const centerX = containerPos.x + containerPos.width / 2;
    const centerY = containerPos.y + containerPos.height / 2;
    const scaleOffset = this.spinnerScale * this.spinnerSize / 2;
    return `translate(${centerX - scaleOffset}px, ${centerY - scaleOffset}px) scale(${this.spinnerScale})`;
  }

  constructor(store, ds, snackBar, platform, cdr, gridSettingsService) {
    this.store = store;
    this.ds = ds;
    this.snackBar = snackBar;
    this.platform = platform;
    this.cdr = cdr;
    this.gridSettingsService = gridSettingsService;
    this.scale = 1;
    this.padding = 30;
    this.spinnerSize = 24;
    this.spinnerScale = 4;
    this.grid$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.selectGrid).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(grid => !!grid), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.share)());
    this.gridView$ = this.grid$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(grid => {
      const images = this.loadGrid(grid); // Dims

      const rowHeights = images.map((_, i) => maxHeight(i, images)).map(val => val);
      const colWidths = images[0].map((_, i) => maxWidth(i, images)).map(val => val); // Titles

      const rowTitles = grid.yValues.map(val => grid.yAxis.mapDisplay(grid.baseParams, val));
      const colTitles = grid.xValues.map(val => grid.xAxis.mapDisplay(grid.baseParams, val)); // Tracks

      const rowTracks = images.map((_, i) => {
        return new Track(rowHeights[i], rowTitles[i]);
      });
      const colTracks = images[0].map((_, i) => {
        return new Track(colWidths[i], colTitles[i]);
      });
      return new GridView(rowTracks, colTracks, images, grid.xAxis.name, grid.yAxis.name);

      function maxHeight(row, images) {
        return Math.max(...images[row].map(cell => cell.params.height));
      }

      function maxWidth(col, images) {
        return Math.max(...images.map(row => row[col]).map(cell => cell.params.width));
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(grid => {
      const cells = grid.images.flatMap(row => row);
      this.ds.queueBatchLoad(cells);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
    this.zoomBehavior = d3__WEBPACK_IMPORTED_MODULE_0__.zoom();
  }

}

GridViewComponent.ɵfac = function GridViewComponent_Factory(t) {
  return new (t || GridViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_grid_settings_grid_settings_service__WEBPACK_IMPORTED_MODULE_3__.GridSettingsService));
};

GridViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GridViewComponent,
  selectors: [["app-grid-view"]],
  viewQuery: function GridViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.containerEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    }
  },
  hostBindings: function GridViewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.r", function GridViewComponent_keydown_r_HostBindingHandler($event) {
        return ctx.onKeydownR($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    onSettingsUpdate: "onSettingsUpdate"
  },
  decls: 42,
  vars: 23,
  consts: [[1, "container", 2, "display", "grid", "height", "calc(100% - 64px)", "grid-template-rows", "max-content 1fr", "grid-template-columns", "max-content 1fr", "overflow", "hidden"], ["containerEl", ""], [2, "z-index", "2", "border-right", "3px solid rgb(194, 24, 91)", "border-bottom", "3px solid rgb(194, 24, 91)"], [2, "max-height", "150px", "overflow-wrap", "anywhere", "border-bottom", "3px solid rgb(194, 24, 91)"], [2, "overflow-y", "hidden", "max-height", "100%"], [3, "display", 4, "ngIf"], [1, "flex-col", 2, "max-width", "150px", "overflow-wrap", "anywhere", "border-right", "3px solid rgb(194, 24, 91)"], [2, "overflow-x", "hidden", "max-width", "100%"], [4, "ngIf"], [2, "min-height", "0", "min-width", "0"], ["imageGrid", ""], ["id", "spinner", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["x", "1", "y", "6", "width", "2.8", "height", "12", 1, "spinner_7uc5", "spinner_ZAxd"], ["x", "5.8", "y", "6", "width", "2.8", "height", "12", 1, "spinner_7uc5", "spinner_RibN"], ["x", "10.6", "y", "6", "width", "2.8", "height", "12", 1, "spinner_7uc5"], ["x", "15.4", "y", "6", "width", "2.8", "height", "12", 1, "spinner_7uc5", "spinner_RibN"], ["x", "20.2", "y", "6", "width", "2.8", "height", "12", 1, "spinner_7uc5", "spinner_ZAxd"], [1, "flex-row", 2, "justify-content", "space-between"], [1, "flex-row", 2, "font-size", "14px", "align-items", "center", "opacity", "0.69"], [1, "flex-row", 2, "align-items", "center"], [1, "zoom-field"], ["matInput", "", "type", "number", "step", "5", "min", "0", 1, "no-spinner-buttons", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["mat-button", "", 3, "click"], ["menuClass", "context-menu", 3, "open"], ["contextMenu", ""], ["contextMenuItem", "", 3, "execute"], ["style", "padding: 10px 0px", "class", "flex-row", 3, "width", "justify-content", "font-size", 4, "ngFor", "ngForOf"], [1, "flex-row", 2, "padding", "10px 0px"], ["style", "padding: 0px 10px", "class", "flex-col", 3, "height", "justify-content", "font-size", 4, "ngFor", "ngForOf"], [1, "flex-col", 2, "padding", "0px 10px"], [4, "ngFor", "ngForOf"], [3, "contextMenu", "contextMenuValue", 4, "ngLet"], [3, "contextMenu", "contextMenuValue"], ["stroke", "black", "fill", "#202020", 3, "stroke-width", 4, "ngLet"], ["stroke", "black", "fill", "#202020", 3, "stroke-width"], ["container", ""], [0, "xlink", "href", "#spinner", 3, "transform", 4, "ngLet"], [0, "xlink", "href", "#spinner"], ["image", ""], [2, "width", "1px", "background-color", "white", "margin", "0px 10px", "height", "20px"]],
  template: function GridViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GridViewComponent_div_5_Template, 2, 3, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, GridViewComponent_ng_container_9_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "svg", 9, 10)(13, "style");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " @import url(assets/spinner/styles.css); #spinner { fill: rgb(194, 24, 91); stroke: #303030; stroke-width: 0.5px; z-index: 25; } ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "defs")(16, "symbol", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "rect", 12)(18, "rect", 13)(19, "rect", 14)(20, "rect", 15)(21, "rect", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, GridViewComponent__svg_g_23_Template, 2, 1, "g", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-toolbar", 17)(26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, GridViewComponent_ng_container_27_Template, 4, 2, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 19)(30, "mat-form-field", 20)(31, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GridViewComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.scale = $event / 100;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GridViewComponent_Template_button_click_34_listener() {
        return ctx.setZoom(1, 0, 0, 500);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "(R)eset");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "context-menu", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("open", function GridViewComponent_Template_context_menu_open_36_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);

        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onCtxMenuOpen(_r6));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, GridViewComponent_ng_template_38_Template, 1, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function GridViewComponent_Template_ng_template_execute_38_listener() {
        return ctx.onCopyImage(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, GridViewComponent_ng_template_39_Template, 1, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function GridViewComponent_Template_ng_template_execute_39_listener($event) {
        return ctx.onSettingsExport($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, GridViewComponent_ng_template_40_Template, 1, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function GridViewComponent_Template_ng_template_execute_40_listener($event) {
        return ctx.onLoadImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, GridViewComponent_ng_template_41_Template, 1, 0, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function GridViewComponent_Template_ng_template_execute_41_listener($event) {
        return ctx.onForceLoadImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("overflow", "visible")("z-index", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, ctx.gridView$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("overflow", "visible")("z-index", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 17, ctx.gridView$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("overflow", "visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 19, ctx.gridView$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 21, ctx.status$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (ctx.scale * 100).toFixed(0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, ng_let__WEBPACK_IMPORTED_MODULE_19__.NgLetDirective, _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__.ContextMenuDirective, _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__.ContextMenuComponent, _perfectmemory_ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__.ContextMenuItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        background-color: #303030;\n    }\n\n    .no-spinner-buttons[_ngcontent-%COMP%]::-webkit-outer-spin-button, .no-spinner-buttons[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    .no-spinner-buttons[type=\"number\"][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }\n\n      .zoom-field .mat-form-field-infix {\n        border-top: 0;\n        padding: 0;\n    }\n      .zoom-field .mat-form-field-wrapper {\n        padding: 0;\n    }\n      .zoom-field .mat-form-field-underline {\n        display: none;\n    }\n      .mat-form-field-underline {\n        display: none;\n    }\n      .zoom-field .mat-form-field-suffix {\n        margin-left: 2px;\n    }\n      .zoom-field input {\n        text-align: right;\n    }\n      .zoom-field {\n        font-size: 14px;\n        font-weight: bold;\n        width: 45px;\n    }\n\n      .zoom-button .mat-button-wrapper > i {\n        font-size: 1.2em;\n        margin-top: -4px;\n    }"]
});

class GridView {
  constructor(rows, cols, images, xTitle, yTitle) {
    this.rows = rows;
    this.cols = cols;
    this.images = images;
    this.xTitle = xTitle;
    this.yTitle = yTitle;
  }

  cellAt(row, col) {
    const rowTrk = this.rows[row];
    const colTrk = this.cols[col];
    const x = this.cols.slice(0, col).map(trk => trk.dim).reduce((total, val) => total + val, 0);
    const y = this.rows.slice(0, row).map(trk => trk.dim).reduce((total, val) => total + val, 0);
    return {
      height: rowTrk.dim,
      width: colTrk.dim,
      x: x,
      y: y,
      image: this.images[row][col]
    };
  }

}

class Track {
  constructor(dim, title) {
    this.dim = dim;
    this.title = title;
  }

}

/***/ }),

/***/ 83046:
/*!*******************************************************!*\
  !*** ./src/app/grid/rez-input/rez-input.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RezInputComponent": () => (/* binding */ RezInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 284);






class RezInputComponent {
    onInputBlur(inputVal, type) {
        const currentVal = parseInt(inputVal);
        const newVal = Math.round(currentVal / 64) * 64;
        if (type === 'width')
            this.width = newVal;
        else
            this.height = newVal;
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.width = -1;
        this.height = -1;
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() != 'input') {
            const inputs = this.elementRef.nativeElement.querySelector('input');
            for (let el of inputs) {
                if (el.value !== undefined) {
                    el.focus();
                    return;
                }
            }
            inputs[0].focus();
        }
    }
    setWidth(val) {
        this.width = val;
        const controlVal = [...this.control?.value] || [this.width, this.height];
        controlVal[0] = val;
        this.control?.setValue(controlVal);
    }
    setHeight(val) {
        this.height = val;
        const controlVal = [...this.control?.value] || [this.width, this.height];
        controlVal[1] = val;
        this.control?.setValue(controlVal);
    }
    ngAfterViewInit() {
        const controlVal = this.control.value;
        this.setWidth(controlVal[0]);
        this.setHeight(controlVal[1]);
    }
}
RezInputComponent.ɵfac = function RezInputComponent_Factory(t) { return new (t || RezInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
RezInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RezInputComponent, selectors: [["app-rez-input"]], inputs: { control: "control" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: RezInputComponent,
            },
        ])], decls: 11, vars: 2, consts: [[1, "flex-row", "container", 2, "justify-content", "space-between"], ["appearance", "outline"], ["matInput", "", "type", "number", "min", "0", "step", "64", 3, "ngModel", "ngModelChange", "blur"], ["input", ""]], template: function RezInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RezInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.setWidth($event); })("blur", function RezInputComponent_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur(_r0.value, "width")); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RezInputComponent_Template_input_ngModelChange_9_listener($event) { return ctx.setHeight($event); })("blur", function RezInputComponent_Template_input_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur(_r0.value, "height")); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput], styles: ["span[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.floating[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 1;\n}", ".mat-form-field[_ngcontent-%COMP%] {\n        width: 125px;\n    }"] });


/***/ }),

/***/ 21487:
/*!*******************************!*\
  !*** ./src/app/grid/store.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid),
/* harmony export */   "gridFormReducer": () => (/* binding */ gridFormReducer),
/* harmony export */   "gridReducer": () => (/* binding */ gridReducer),
/* harmony export */   "selectGrid": () => (/* binding */ selectGrid),
/* harmony export */   "selectGridForm": () => (/* binding */ selectGridForm),
/* harmony export */   "updateGridForm": () => (/* binding */ updateGridForm)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 28555);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ 86432);


/** Actions */
const createGrid = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)('Create Grid', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
const updateGridForm = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)('Update Grid Form', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
/** Reducers */
const gridReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(null, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(createGrid, (state, grid) => grid));
const gridFormReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
    baseParams: _types__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PARAMS,
    axisOptions: _types__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_AXIS_OPTIONS,
    activeAxis: { x: 'size', y: 'seed' },
}, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(updateGridForm, (state, form) => JSON.parse(JSON.stringify(form))));
/** Selectors */
const selectGrid = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('grid');
const selectGridForm = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('gridForm');
/** Effects */
/** Helpers */


/***/ }),

/***/ 86432:
/*!*******************************!*\
  !*** ./src/app/grid/types.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_AXIS_OPTIONS": () => (/* binding */ DEFAULT_AXIS_OPTIONS),
/* harmony export */   "DEFAULT_PARAMS": () => (/* binding */ DEFAULT_PARAMS)
/* harmony export */ });
const DEFAULT_AXIS_OPTIONS = {
    prompt: [''],
    prompt_negative: [''],
    steps: [10, 20, 30, 40],
    sampler: ['Euler a', 'LMS', 'DPM adaptive', 'DPM2 Karras'],
    cfg: [5, 7, 9, 11, 13],
    seed: [12345, 54321, 6789, 9876],
    size: [
        [256, 768],
        [768, 768],
        [1536, 768],
        [2048, 768],
    ],
};
const DEFAULT_PARAMS = {
    prompt: '',
    prompt_negative: '',
    steps: 20,
    sampler: 'Euler a',
    cfg_scale: 7,
    seed: -1,
    height: 512,
    width: 512,
};
const SAMPLERS = [
    'Euler a',
    'Euler',
    'LMS',
    'Heun',
    'DPM2',
    'DPM2 a',
    'DPM fast',
    'DPM adaptive',
    'LMS Karras',
    'DPM2 Karras',
    'DPM2 a Karras',
    'DDIM',
    'PLMS',
];


/***/ }),

/***/ 25897:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PARAMS": () => (/* binding */ DEFAULT_PARAMS),
/* harmony export */   "DataService": () => (/* binding */ DataService),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "SAMPLERS": () => (/* binding */ SAMPLERS)
/* harmony export */ });
/* harmony import */ var _media_anne_bottle_projs_web_SdRefiner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 60515);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 83905);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 39646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 24351);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80188);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 71350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 80529);




const API_URL = 'http://localhost:8860';
class DataService {
  constructor(http) {
    this.http = http;
    this.activeBatch = rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY.subscribe();
  }

  getImage(request) {
    var _this = this;

    return (0,_media_anne_bottle_projs_web_SdRefiner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = API_URL + '/generate' + `?cb=${Date.now()}`;
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this.http.post(url, {
        parameters: request
      }));
    })();
  }

  getImageCached(imageParams) {
    var _this2 = this;

    return (0,_media_anne_bottle_projs_web_SdRefiner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = API_URL + '/generate' + `?cb=${Date.now()}`;
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this2.http.post(url, {
        parameters: imageParams,
        only_cache: true
      }));
    })();
  }

  queueBatchLoad(images) {
    this.activeBatch.unsubscribe();
    const loadCached$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(...images).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concatMap)(img => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(img.loadCached())));
    const load$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(...images).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concatMap)(img => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(img.load());
    }));
    this.activeBatch = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.concat)(loadCached$, load$).subscribe();
  }

}

DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};

DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});
class Image {
  constructor(ds, params) {
    this.ds = ds;
    this.params = params;
    this.status = 'IDLE';
  }

  loadCached() {
    var _this3 = this;

    return (0,_media_anne_bottle_projs_web_SdRefiner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.status = 'LOADING';
      const response = yield _this3.ds.getImageCached(_this3.params);

      if (!response) {
        _this3.status = 'IDLE';
        return false;
      }

      _this3.data = response;
      _this3.status = 'LOADED';
      return true;
    })();
  }

  load() {
    var _this4 = this;

    return (0,_media_anne_bottle_projs_web_SdRefiner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.status === 'LOADED' || _this4.status === 'LOADING') return;
      _this4.status = 'LOADING';

      try {
        _this4.data = yield _this4.ds.getImage(_this4.params);
        _this4.status = 'LOADED';
      } catch (e) {
        _this4.status = 'IDLE';
      }
    })();
  }

}
const DEFAULT_PARAMS = {
  prompt: '',
  prompt_negative: '',
  steps: 1,
  sampler: 'Euler a',
  cfg_scale: 7,
  seed: -1,
  height: 512,
  width: 512
};
const SAMPLERS = ['Euler a', 'Euler', 'LMS', 'Heun', 'DPM2', 'DPM2 a', 'DPM fast', 'DPM adaptive', 'LMS Karras', 'DPM2 Karras', 'DPM2 a Karras', 'DDIM', 'PLMS'];

/***/ }),

/***/ 59295:
/*!**********************************!*\
  !*** ./src/app/utils/compare.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareArrays": () => (/* binding */ compareArrays),
/* harmony export */   "compareObjects": () => (/* binding */ compareObjects),
/* harmony export */   "diffObjects": () => (/* binding */ diffObjects)
/* harmony export */ });
const DiffTypes = ['value', 'array', 'object', 'function'];
/**
 * Returns an object with keys from both objects
 * The corresponding values are the "differences" for each key
 *
 * eg comparing
 *   original = { a: 1, b: [1],    c: 3 }
 *   update   = { a: 2, b: [1, 2], c: 3 }
 * yields
 *   {
 *      a: { original: 1,   updated: 2,     added: 2,   removed: 1},
 *      b: { original: [1], updated: [1,2], added: [2], removed: [] },
 *   }
 *
 * This is a shallow diff, keys pointing to functions and objects are ignored
 * For arrays, functions / objects / arrays, are also ignored
 *
 * @param original
 * @param update
 */
function diffObjects(original, update) {
    const diff = {};
    let keys = [...Object.keys(original)];
    keys = keys.concat(...Object.keys(update).filter((k) => false === keys.includes(k)));
    for (let k of keys) {
        const valO = original[k];
        const valU = update[k];
        if ([valO, valU].includes(undefined)) {
            const typeO = getType(valO);
            const typeU = getType(valU);
            if (typeO === 'value' && typeU === 'value') {
                diff[k] = {
                    __type__: 'value',
                    original: valO,
                    update: valU,
                    added: valU,
                    removed: valO,
                };
            }
            continue;
        }
        if (false === compareTypes(valO, valU)) {
            throw new Error(`Value for key "${k}" is a different type:\n---\n${JSON.stringify(valO)}\n---\n${JSON.stringify(valU)}`);
        }
        switch (getType(valO)) {
            case 'value':
                const isChanged = valO !== valU;
                if (isChanged) {
                    diff[k] = {
                        __type__: 'value',
                        original: valO,
                        update: valU,
                        added: valU,
                        removed: valO,
                    };
                }
                break;
            case 'array':
                const added = getArrayChanges(valO, valU);
                const removed = getArrayChanges(valU, valO);
                if (added.length > 0 || removed.length > 0) {
                    diff[k] = {
                        __type__: 'array',
                        original: valO,
                        update: valU,
                        added: getArrayChanges(valO, valU),
                        removed: getArrayChanges(valU, valO),
                    };
                }
                break;
            case 'object':
                break;
            case 'function':
                break;
        }
    }
    return diff;
    function getType(x) {
        if (typeof x === 'function') {
            return 'function';
        }
        else if (typeof x !== 'object') {
            return 'value';
        }
        else if (x === null) {
            return 'value';
        }
        else if (x.constructor.name === 'array') {
            return 'array';
        }
        else {
            return 'object';
        }
    }
    function getArrayChanges(original, update) {
        const changes = [];
        original = original.filter((val) => getType(val) === 'value');
        update = update.filter((val) => getType(val) === 'value');
        original.forEach((og) => {
            const idx = update.findIndex((up) => og === up);
            if (idx === -1)
                changes.push(og);
            else
                update.splice(idx, 1);
        });
        return changes;
    }
}
function compareObjects(left, right) {
    const keysL = Object.keys(left).sort();
    const keysR = Object.keys(right).sort();
    if (compareArrays(keysL, keysR) === false) {
        return false;
    }
    for (let i = 0; i < keysL.length; i++) {
        const valL = left[keysL[i]];
        const valR = right[keysR[i]];
        if (typeof valL !== typeof valR) {
            return false;
        }
        const type = typeof valL;
        if (valL === null) {
            if (valR !== null)
                return false;
        }
        else if (type !== 'object') {
            if (valL !== valR)
                return false;
        }
        else {
            if (compareObjects(valL, valR) === false)
                return false;
        }
    }
    return true;
}
function compareArrays(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}
function compareTypes(left, right) {
    const typeL = typeof left;
    const typeR = typeof right;
    const ctorL = left?.constructor.name;
    const ctorR = right?.constructor.name;
    if (typeL !== typeR) {
        return false;
    }
    else if (ctorL !== ctorR) {
        return false;
    }
    else if (left === null) {
        return right === null;
    }
    else {
        return true;
    }
}


/***/ }),

/***/ 16520:
/*!*****************************************!*\
  !*** ./src/environments/env.default.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

/***/ 24392:
/*!*************************************!*\
  !*** ./src/environments/env.dev.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.default */ 16520);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ..._env_default__WEBPACK_IMPORTED_MODULE_0__["default"],
    apiUrl: 'http://localhost:8860',
    production: false,
});


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_env_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/env.dev */ 24392);




if (_environments_env_dev__WEBPACK_IMPORTED_MODULE_1__["default"].production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);