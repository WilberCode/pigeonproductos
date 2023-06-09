/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_insertIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/insertIcons */ "./assets/js/components/insertIcons.js");
var $ = jQuery.noConflict();

jQuery(function ($) {
  $(document).ready(function () {
    //insertIcons($)  // Insert icons svg  
    $('.wpf_links li .wpf_submenu').hide();
    $('.wpf_links li .wpf_selected').parent().addClass('category-selected');
    $('.home .wpf_links > li:first-child').addClass('category-selected').children().addClass('wpf_selected');
    $('.tax-product_cat .wpf_links .wpf_submenu .category-selected').parent().addClass('wpf_submenu_active');
    $('option[value="menu_order"').text('Ordenar por');
    $('.view-all-categories .wp-block-button__link').on('click', function () {
      $('.wpf_form_filtro_en_lateral_de_productos').toggleClass('view-all-categories-active');
    });
    $('.widget-area .wpf_links > li:not(.category-selected, :first-child) > a').append('<span class="subcategory-plus">+</span>');
    $('.wpf_links li:has(ul) > a .subcategory-plus').click(function (e) {
      e.preventDefault();
      $(this).parent('a').toggleClass('category-link-active');
      $(this).parent('a').next('ul').slideToggle(200);
      $(this).toggleClass('active');
    });
    $('.tax-product_cat .wpf_links li:has(ul) > ul.wpf_submenu_active').slideToggle('linear');
    $('.tax-product_cat .wpf_links li:has(ul) > ul.wpf_submenu_active').prev('a').toggleClass('category-link-active');
    $('.tax-product_cat .wpf_links li:has(ul) > ul.wpf_submenu_active').prev('a').find('.subcategory-plus').toggleClass('active');
    $('.tax-product_cat .wpf_links > li.category-selected > ul').slideToggle('linear');
  });
});

/***/ }),

/***/ "./assets/js/components/insertIcons.js":
/*!*********************************************!*\
  !*** ./assets/js/components/insertIcons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var insertIcons = function insertIcons($) {
  /* HEADDER MENU ICONS */
  //avatar
  $('.menu-item-account > a').prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 55 55\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M52.6 16.3c1.2-1.4 1.8-3.1 1.8-5 0-4.3-3.5-7.8-7.7-7.8-1.5 0-2.8.4-4 1.1C38.3 1.6 33 0 27.5 0 12.3 0-.1 12.4-.1 27.6c0 7.7 3.2 15.1 8.9 20.3l1 .8.1.1 1.4 1.1c.1 0 .1.1.2.1.1.1.2.1.2.1.4.3.8.6 1.2.8a1.44 1.44 0 0 0 .3.2c.1.1.2.2.3.2 0 0 .1 0 .2.1.2.1.5.2.7.4.4.2.7.4 1.1.6l.2.1c2.1 1 4.4 1.7 6.8 2.1h.2l2.2.3h.3c.7.1 1.5.1 2.2.1s1.5 0 2.2-.1h.3l2.2-.3h.3c2.1-.4 4.2-1 6.5-2 .1 0 .2-.1.3-.2l1.8-.9.2-.2c.1-.1.2-.1.2-.1a.76.76 0 0 1 .4-.2c.4-.2.8-.5 1.2-.7.3-.1.5-.4.6-.4.1-.1.2-.2.4-.3.3-.2.7-.5 1-.8.1 0 .2-.1.2-.2l.9-.8c5.6-5.2 8.8-12.6 8.8-20.3.1-3.9-.7-7.8-2.3-11.2zM20.4 43.7c1.5-.7 2.4-2.3 2.4-4V36l-.3-.4s-2.2-2.7-3-6.1l-.3-.5-.5-.2c-.4-.2-.6-.6-.6-1.1v-3.5c0-.4.1-.7.5-1l.4-.4v-5.9s-.3-2.3 1.3-4.1c1.4-1.6 3.8-2.4 7.1-2.4 3.4 0 5.7.8 7 2.4 1.6 1.8 1.3 4.1 1.3 4.2v5.8l.4.4c.3.2.5.6.5.9v3.5c0 .6-.4 1.1-1 1.3l-.6.3-.3.7c-.6 1.9-1.4 3.5-2.4 4.9l-.1.2c-.2.2-.3.4-.5.6l-.2.4v3.8c0 1.7 1 3.4 2.5 4.1l8.2 4c-.2.2-.6.4-.9.5-.1.1-.2.1-.3.2-.1 0-.1.1-.2.1-.5.3-1 .6-1.4.8l-.1.1c-.1 0-.1.1-.2.1-1 .5-2.1 1-3.4 1.4h-.2l-.9.3c-.3.1-.7.2-1 .3-.6.2-1.3.3-1.9.4h-.2c-.6.1-1.2.2-1.8.2h-1.2c-.8.1-1.9.1-2.9 0h-.2c-.3-.1-.6-.1-1-.1-.3 0-.6 0-1-.1h0c-1.4-.2-2.7-.5-3.8-1h-.2l-.9-.3c-.3-.1-.7-.3-1-.4-.4-.1-.8-.3-1.2-.6l-.5-.3s-.1-.1-.2-.1l-1.4-.8c-.1-.1-.2-.1-.3-.2-.1 0-.1-.1-.2-.2-.4-.2-.7-.5-1-.7l7.7-3.8zm13.7-3.8V37a3.04 3.04 0 0 0 .5-.7c1.1-1.4 2-3.2 2.6-5.1 1.3-.7 2.2-2 2.2-3.6v-3.5c0-.9-.3-1.8-.9-2.5V17c.1-.7.2-3.6-2-6.2-1.9-2.1-5-3.2-9.1-3.2s-7.2 1.1-9.2 3.3c-2.1 2.3-2 5.1-2 6v4.7c-.6.7-.9 1.6-.9 2.5v3.5c0 1.1.5 2.2 1.3 3 .7 2.9 2.2 5.2 3.1 6.3v2.8c0 .7-.4 1.4-1 1.7L11 45.6c-.3.1-.5.2-.7.4-5.1-4.8-8.1-11.6-8.1-18.5 0-13.9 11.3-25.1 25.1-25.1 4.8 0 9.4 1.3 13.3 3.8-1.2 1.3-1.8 3.1-1.8 5 0 4.3 3.5 7.8 7.8 7.8 1.4 0 2.8-.4 4-1.1 1.2 2.9 1.9 6.3 1.9 9.7 0 7.1-3 13.9-8.3 18.7-.2-.2-.5-.3-.7-.4L35 41.7c-.5-.4-.9-1-.9-1.8zm12.6-23.6c-2.8 0-5.1-2.3-5.1-5s2.3-5.1 5.1-5.1 5 2.3 5 5.1a4.95 4.95 0 0 1-5 5z\"/></svg>"); //logout

  $('.menu-item-logout > a').prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 471.2 471.2\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M227.619 444.2h-122.9c-33.4 0-60.5-27.2-60.5-60.5V87.5c0-33.4 27.2-60.5 60.5-60.5h124.9c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-124.9c-48.3 0-87.5 39.3-87.5 87.5v296.2c0 48.3 39.3 87.5 87.5 87.5h122.9c7.5 0 13.5-6 13.5-13.5s-6.1-13.5-13.5-13.5zm222.4-218.1l-85.8-85.8a13.506 13.506 0 1 0-19.1 19.1l62.8 62.8h-273.9c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h273.9l-62.8 62.8a13.46 13.46 0 0 0 0 19.1c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8c5.4-5.4 5.4-14 .1-19.2z\"/></svg>");
  /* ACCOUNT PAGE */
  //desktop

  $('.woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--dashboard > a').append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M336.5 489h-161c-13.8 0-25-11.2-25-25s11.2-25 25-25H198l-15.6-30.4H67C30.3 408.6.5 378.8.5 342.1V92.9C.5 56.2 30.3 26.4 67 26.4h378c36.7 0 66.5 29.8 66.5 66.5V342c0 36.7-29.8 66.5-66.5 66.5H329.3L313.7 439h22.8c13.8 0 25 11.2 25 25s-11.2 25-25 25zm-105.7-51.8h50.1l14.7-28.6h-79.4l14.6 28.6zM67 56.4c-20.1 0-36.5 16.4-36.5 36.5V342c0 20.1 16.4 36.5 36.5 36.5h378c20.1 0 36.5-16.4 36.5-36.5V92.9c0-20.1-16.4-36.5-36.5-36.5H67z\"/></svg>"); //orders

  $('.woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--orders > a').append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M458.7 422.2l-22.9-288.1c-1.4-18.6-17.1-33.1-35.7-33.1H355v-2c0-54.6-44.4-99-99-99s-99 44.4-99 99v2h-45.2c-18.6 0-34.3 14.5-35.7 33.1L53.3 422.3c-1.8 23.1 6.2 46 22 63s38 26.7 61.2 26.7h239.2c23.1 0 45.4-9.7 61.2-26.7 15.6-17 23.6-40 21.8-63.1zM187 99c0-38 30.9-69 69-69s69 30.9 69 69v2H187v-2zm227.8 365.9c-10.2 11-24.1 17.1-39.2 17.1H136.4c-15 0-28.9-6.1-39.2-17.1-10.2-11-15.2-25.4-14.1-40.3L106 136.4c.2-3 2.8-5.4 5.8-5.4H157v36.9a14.98 14.98 0 1 0 30 0V131h138v36.9a14.98 14.98 0 1 0 30 0V131h45.2c3 0 5.6 2.4 5.8 5.4l22.9 288.1c1.1 15-3.9 29.4-14.1 40.4z\"/></svg>"); //downloads

  $('.woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--downloads > a').append("<svg xmlns=\"http://www.w3.org/2000/svg\"   viewBox=\"0 0 512 512\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M256 362.668a16.01 16.01 0 0 1-16-16V16a16.01 16.01 0 0 1 16-16 16.01 16.01 0 0 1 16 16v330.668a16.01 16.01 0 0 1-16 16zm0 0\"/><path d=\"M256 362.668c-4.098 0-8.191-1.559-11.309-4.695l-85.332-85.332c-6.25-6.25-6.25-16.383 0-22.637a16.01 16.01 0 0 1 22.637 0l74.023 74.027 74.027-74.027c6.25-6.25 16.387-6.25 22.637 0s6.25 16.387 0 22.637l-85.336 85.332a16.03 16.03 0 0 1-11.348 4.695zM453.332 512H58.668C26.305 512 0 485.695 0 453.332v-96a16.01 16.01 0 0 1 16-16 16.01 16.01 0 0 1 16 16v96C32 468.031 43.969 480 58.668 480h394.664C468.031 480 480 468.031 480 453.332v-96a16.01 16.01 0 0 1 16-16 16.01 16.01 0 0 1 16 16v96C512 485.695 485.695 512 453.332 512zm0 0\"/></svg>"); //addres

  $('.woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--edit-address> a').append("<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 1 511 511.999\" width=\"681.333\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M498.699 222.695c-.016-.012-.027-.027-.039-.039L289.805 13.809C280.902 4.902 269.066 0 256.477 0s-24.426 4.902-33.332 13.809L14.188 222.766c-18.281 18.387-18.25 48.219.09 66.559 8.379 8.383 19.441 13.234 31.273 13.746.484.047.969.07 1.457.07h8.32v153.695c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.879 0 25.168 11.289 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.141h7.719c12.586 0 24.422-4.902 33.332-13.812 18.359-18.367 18.367-48.254.027-66.633zm-21.242 45.422c-3.238 3.238-7.543 5.023-12.117 5.023h-22.719c-8.285 0-15 6.715-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.711V376.5c0-30.418-24.746-55.168-55.168-55.168h-48.195c-30.422 0-55.172 24.75-55.172 55.168V482h-66.711c-13.875 0-25.168-11.289-25.168-25.164V288.141c0-8.285-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.031c-4.469-.078-8.66-1.852-11.801-4.996-6.68-6.68-6.68-17.551 0-24.234L244.363 35.02A17 17 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.801 208.797c.031.031.066.063.098.094 6.645 6.691 6.633 17.539-.031 24.207zm0 0\"/></svg>"); //account

  $('.woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--edit-account > a').append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 55 55\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M52.6 16.3c1.2-1.4 1.8-3.1 1.8-5 0-4.3-3.5-7.8-7.7-7.8-1.5 0-2.8.4-4 1.1C38.3 1.6 33 0 27.5 0 12.3 0-.1 12.4-.1 27.6c0 7.7 3.2 15.1 8.9 20.3l1 .8.1.1 1.4 1.1c.1 0 .1.1.2.1.1.1.2.1.2.1.4.3.8.6 1.2.8a1.44 1.44 0 0 0 .3.2c.1.1.2.2.3.2 0 0 .1 0 .2.1.2.1.5.2.7.4.4.2.7.4 1.1.6l.2.1c2.1 1 4.4 1.7 6.8 2.1h.2l2.2.3h.3c.7.1 1.5.1 2.2.1s1.5 0 2.2-.1h.3l2.2-.3h.3c2.1-.4 4.2-1 6.5-2 .1 0 .2-.1.3-.2l1.8-.9.2-.2c.1-.1.2-.1.2-.1a.76.76 0 0 1 .4-.2c.4-.2.8-.5 1.2-.7.3-.1.5-.4.6-.4.1-.1.2-.2.4-.3.3-.2.7-.5 1-.8.1 0 .2-.1.2-.2l.9-.8c5.6-5.2 8.8-12.6 8.8-20.3.1-3.9-.7-7.8-2.3-11.2zM20.4 43.7c1.5-.7 2.4-2.3 2.4-4V36l-.3-.4s-2.2-2.7-3-6.1l-.3-.5-.5-.2c-.4-.2-.6-.6-.6-1.1v-3.5c0-.4.1-.7.5-1l.4-.4v-5.9s-.3-2.3 1.3-4.1c1.4-1.6 3.8-2.4 7.1-2.4 3.4 0 5.7.8 7 2.4 1.6 1.8 1.3 4.1 1.3 4.2v5.8l.4.4c.3.2.5.6.5.9v3.5c0 .6-.4 1.1-1 1.3l-.6.3-.3.7c-.6 1.9-1.4 3.5-2.4 4.9l-.1.2c-.2.2-.3.4-.5.6l-.2.4v3.8c0 1.7 1 3.4 2.5 4.1l8.2 4c-.2.2-.6.4-.9.5-.1.1-.2.1-.3.2-.1 0-.1.1-.2.1-.5.3-1 .6-1.4.8l-.1.1c-.1 0-.1.1-.2.1-1 .5-2.1 1-3.4 1.4h-.2l-.9.3c-.3.1-.7.2-1 .3-.6.2-1.3.3-1.9.4h-.2c-.6.1-1.2.2-1.8.2h-1.2c-.8.1-1.9.1-2.9 0h-.2c-.3-.1-.6-.1-1-.1-.3 0-.6 0-1-.1h0c-1.4-.2-2.7-.5-3.8-1h-.2l-.9-.3c-.3-.1-.7-.3-1-.4-.4-.1-.8-.3-1.2-.6l-.5-.3s-.1-.1-.2-.1l-1.4-.8c-.1-.1-.2-.1-.3-.2-.1 0-.1-.1-.2-.2-.4-.2-.7-.5-1-.7l7.7-3.8zm13.7-3.8V37a3.04 3.04 0 0 0 .5-.7c1.1-1.4 2-3.2 2.6-5.1 1.3-.7 2.2-2 2.2-3.6v-3.5c0-.9-.3-1.8-.9-2.5V17c.1-.7.2-3.6-2-6.2-1.9-2.1-5-3.2-9.1-3.2s-7.2 1.1-9.2 3.3c-2.1 2.3-2 5.1-2 6v4.7c-.6.7-.9 1.6-.9 2.5v3.5c0 1.1.5 2.2 1.3 3 .7 2.9 2.2 5.2 3.1 6.3v2.8c0 .7-.4 1.4-1 1.7L11 45.6c-.3.1-.5.2-.7.4-5.1-4.8-8.1-11.6-8.1-18.5 0-13.9 11.3-25.1 25.1-25.1 4.8 0 9.4 1.3 13.3 3.8-1.2 1.3-1.8 3.1-1.8 5 0 4.3 3.5 7.8 7.8 7.8 1.4 0 2.8-.4 4-1.1 1.2 2.9 1.9 6.3 1.9 9.7 0 7.1-3 13.9-8.3 18.7-.2-.2-.5-.3-.7-.4L35 41.7c-.5-.4-.9-1-.9-1.8zm12.6-23.6c-2.8 0-5.1-2.3-5.1-5s2.3-5.1 5.1-5.1 5 2.3 5 5.1a4.95 4.95 0 0 1-5 5z\"/></svg>"); // logout

  $('.woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--customer-logout > a').append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 471.2 471.2\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M227.619 444.2h-122.9c-33.4 0-60.5-27.2-60.5-60.5V87.5c0-33.4 27.2-60.5 60.5-60.5h124.9c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-124.9c-48.3 0-87.5 39.3-87.5 87.5v296.2c0 48.3 39.3 87.5 87.5 87.5h122.9c7.5 0 13.5-6 13.5-13.5s-6.1-13.5-13.5-13.5zm222.4-218.1l-85.8-85.8a13.506 13.506 0 1 0-19.1 19.1l62.8 62.8h-273.9c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h273.9l-62.8 62.8a13.46 13.46 0 0 0 0 19.1c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8c5.4-5.4 5.4-14 .1-19.2z\"/></svg>"); //edit

  $('.woocommerce-Address-title .edit').prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"534.667\" viewBox=\"0 -1 401.523 401\" width=\"534.667\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M370.59 250.973a10 10 0 0 0-10 10v88.789c-.02 16.563-13.437 29.984-30 30H50c-16.562-.016-29.98-13.437-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.789a10 10 0 0 0 10-10c0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.602 22.398 49.969 50 50h280.59c27.602-.031 49.969-22.398 50-50v-88.793a10 10 0 0 0-10-10zm6.039-237.532c-17.574-17.574-46.066-17.574-63.641 0L134.582 191.848c-1.223 1.223-2.105 2.738-2.566 4.402l-23.461 84.699c-.965 3.473.016 7.191 2.563 9.742a10.01 10.01 0 0 0 9.742 2.566l84.699-23.465a10 10 0 0 0 4.402-2.566l178.402-178.41c17.547-17.586 17.547-46.055 0-63.641zM156.371 198.348L302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875l37.621 37.625-52.039 14.418zM374.223 74.676l-10.605 10.605-47.094-47.094 10.609-10.605c9.762-9.762 25.59-9.762 35.352 0l11.738 11.734a25.04 25.04 0 0 1 0 35.359zm0 0\"/></svg>"); //view

  $('.woocommerce-button.button.view').prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 216.416 216.416\"    xmlns:v=\"https://vecta.io/nano\"><path d=\"M215.912 105.503l-.24-.555c-9.597-19.932-24.533-36.792-43.191-48.758-19.171-12.295-41.396-18.793-64.271-18.793s-45.101 6.499-64.272 18.795a119.49 119.49 0 0 0-43.085 48.54 7.5 7.5 0 0 0-.11 6.726c9.596 19.935 24.532 36.798 43.192 48.766 19.172 12.297 41.398 18.796 64.275 18.796s45.102-6.499 64.273-18.795c18.66-11.967 33.595-28.829 43.192-48.762a7.52 7.52 0 0 0 .237-5.96zM108.21 164.019c-38.583 0-74.42-21.789-92.312-55.812C33.79 74.184 69.627 52.396 108.21 52.396s74.42 21.79 92.312 55.812c-17.893 34.02-53.731 55.811-92.312 55.811zm-.001-88.728c-18.15 0-32.917 14.767-32.917 32.917s14.767 32.917 32.917 32.917 32.917-14.767 32.917-32.917-14.767-32.917-32.917-32.917zm0 50.834c-9.879 0-17.917-8.038-17.917-17.917s8.038-17.917 17.917-17.917 17.917 8.038 17.917 17.917-8.038 17.917-17.917 17.917z\"/></svg>");
  $('.cart-close').html("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M257 0C116.39 0 0 114.39 0 255s116.39 257 257 257 255-116.39 255-257S397.61 0 257 0zm126.22 338.79c11.7 11.7 11.7 30.73 0 42.44-11.61 11.6-30.64 11.79-42.44 0L257 297.42l-85.79 83.82c-11.7 11.7-30.73 11.7-42.44 0-11.7-11.7-11.7-30.73 0-42.44l83.8-83.8-83.8-83.8c-11.7-11.71-11.7-30.74 0-42.44 11.71-11.7 30.74-11.7 42.44 0L257 212.58l83.78-83.82c11.68-11.68 30.71-11.72 42.44 0 11.7 11.7 11.7 30.73 0 42.44l-83.8 83.8 83.8 83.79z\"/></svg>");
  /* SINGLE PRODUCT PAGE */
  // Out of stock

  $('.stock.out-of-stock').prepend("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\"  xmlns:v=\"https://vecta.io/nano\"><path d=\"M506.175 365.576c-4.095-10.258-15.729-15.255-25.987-11.16s-15.255 15.729-11.16 25.987c5.206 13.043 3.499 27.935-4.567 39.839-8.07 11.91-20.991 18.741-35.449 18.741H83.068c-15.771 0-29.776-8.229-37.465-22.015-7.701-13.809-7.339-30.082.968-43.533L219.543 93.382c7.876-12.752 21.519-20.365 36.497-20.365s28.62 7.613 36.497 20.365l127.927 207.124a20 20 0 0 0 34.028-21.018L326.564 72.364c-15.216-24.636-41.58-39.344-70.525-39.344s-55.309 14.709-70.525 39.344L12.542 352.418c-16.036 25.966-16.734 57.38-1.869 84.033 14.853 26.63 41.916 42.528 72.395 42.528h345.944c27.938 0 52.927-13.233 68.56-36.303 15.516-22.898 18.731-51.721 8.603-77.1zm-250.126 34.411c11.045 0 19.998-8.953 19.998-19.998s-8.953-19.998-19.998-19.998h-.01c-11.045 0-19.993 8.953-19.993 19.998s8.958 19.998 20.003 19.998zm19.989-89.992V163.008c0-11.045-8.953-19.998-19.998-19.998s-19.998 8.953-19.998 19.998v146.987c0 11.045 8.953 19.998 19.998 19.998s19.998-8.953 19.998-19.998z\"/></svg>");
  /* CART PAGE  */
  //add remove icon

  /*     $('.woocommerce-cart .main .woocommerce-cart-form .shop_table tbody tr td.product-remove a,.remove.remove_from_cart_button').html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-40 0 427 427.001"  xmlns:v="https://vecta.io/nano"><use xlink:href="#B"/><use xlink:href="#B" x="-118"/><path d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.051 9.285 9.84 22.207 15.426 35.73 15.449H268c13.527-.023 26.449-5.609 35.73-15.449 9.328-9.812 14.668-23.488 14.668-38.051V127.121c18.543-4.922 30.559-22.836 28.078-41.863A38.21 38.21 0 0 0 308.598 52h-51.199V39.5A39.29 39.29 0 0 0 217.797 0H129a39.29 39.29 0 0 0-39.602 39.5V52H38.199A38.21 38.21 0 0 0 .32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.398-14.687-30.398-33.5V128h250v245.5c0 18.813-13.301 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 0 1 5.676-13.895A19.26 19.26 0 0 1 129 20h88.797a19.26 19.26 0 0 1 13.926 5.605c3.695 3.672 5.742 8.688 5.676 13.895V52h-128zM38.199 72h270.398c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0"/><use xlink:href="#B" x="-59"/><defs ><path id="B" d="M232.398 154.703a10 10 0 0 0-10 10v189c0 5.52 4.477 10 10 10s10-4.48 10-10v-189a10 10 0 0 0-10-10zm0 0"/></defs></svg>`);
   */
  // Menu dropdown

  $('nav #header-menu li.menu-item-has-children > a').append("<span class=\"dropdown\" ><svg aria-hidden=\"true\" focusable=\"false\" role=\"presentation\" class=\"icon icon-caret\" viewBox=\"0 0 10 6\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z\" fill=\"currentColor\">\n</path></svg></span>");
  $('nav #mobile-menu li.menu-item-has-children > a').append("<span class=\"dropdown\" ></span>");
  $('nav #mobile-menu li:not(.menu-item-has-children) > a').append("<svg viewBox=\"0 0 14 10\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" role=\"presentation\" class=\"icon icon-arrow\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z\" fill=\"currentColor\">\n</path></svg>");
  $('form.mailpoet_form .mailpoet_paragraph.last').append("<svg viewBox=\"0 0 14 10\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" role=\"presentation\" class=\"icon icon-arrow\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z\" fill=\"currentColor\">\n</path></svg>");
};

/* harmony default export */ __webpack_exports__["default"] = (insertIcons);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\woocommerce\pigeonlatam\wp-content\themes\pigeonlatam\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\woocommerce\pigeonlatam\wp-content\themes\pigeonlatam\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });