var FUNC={pageLoad:function(){$(window).on("load",(function(){$("body").addClass("ready")}))},getDevice:function(e){if(void 0===e&&(e=0),""==SETTING.DEVICE){var a=$(".hide-tab[data-device]").eq(0),t=$(".hide-pc[data-device]").eq(0),i="",o="";$(window).on("resize",(function(){n()})),n()}function n(){o=t.is(":hidden")?"pc":a.is(":hidden")?"tab":"sp",""==i?(SETTING.DEVICE=o,i=o):o!=i&&(SETTING.DEVICE=o,0==e||"sp"!=o&&"sp"!=i?2==e?location.reload():FUNC.layoutReset():location.reload(),i=o)}},layoutReset:function(){$("[data-header-area-sp]").hide(),$(".u-top-loading").hide(),$("[data-header-subbtn-pc]").removeClass("is-open"),$("[data-header-subarea-pc]").removeClass("is-active").hide()},header:function(){$("[data-header-btn-sp]").click((function(){$("[data-header-area-sp]").fadeIn(300),FUNC.bodyFixed(!0)})),$("[data-header-close-sp]").click((function(){$("[data-header-area-sp]").fadeOut(300),FUNC.bodyFixed(!1)})),$("[data-header-hassub-sp]").click((function(){$(this).hasClass("is-open")?($(this).removeClass("is-open"),$(this).next("ul").slideUp(300)):($(this).addClass("is-open"),$(this).next("ul").slideDown(300))})),$("[data-header-searchbtn-sp]").click((function(){$(this).hasClass("is-open")?($(this).removeClass("is-open"),$("[data-header-searcharea-sp]").slideUp(300)):($(this).addClass("is-open"),$("[data-header-searcharea-sp]").slideDown(300))})),$("[data-header-searchbtn-pc]").click((function(){$(this).hasClass("is-open")?($(this).removeClass("is-open"),$("[data-header-searcharea-pc]").fadeOut(300)):($("[data-header-subbtn-pc]").each((function(){$(this).hasClass("is-open")&&$(this).click()})),$(this).addClass("is-open"),$("[data-header-searcharea-pc]").fadeIn(300))})),$("[data-header-subbtn-pc]").click((function(){subarea=$(this).data("header-subbtn-pc"),$(this).hasClass("is-open")?($(this).removeClass("is-open"),$('[data-header-subarea-pc="'+subarea+'"]').removeClass(SETTING.ACTIVE).slideUp(300)):($("[data-header-searchbtn-pc]").hasClass("is-open")&&$("[data-header-searchbtn-pc]").click(),$("[data-header-subbtn-pc]").hasClass("is-open")&&($("[data-header-subbtn-pc]").removeClass("is-open"),$("[data-header-subarea-pc]").removeClass(SETTING.ACTIVE).fadeOut(0),$('[data-header-subarea-pc="'+subarea+'"]').addClass(SETTING.ACTIVE).fadeIn(0)),$(this).addClass("is-open"),$('[data-header-subarea-pc="'+subarea+'"]').addClass(SETTING.ACTIVE).slideDown(300))})),$("[data-header-subclose-pc]").click((function(){closearea=$(this).data("header-subclose-pc"),$('[data-header-subbtn-pc="'+closearea+'"]').click()}));var e=0;function a(){var e=$(window).scrollTop(),a=100;"pc"==SETTING.DEVICE?$("[data-mainv-pc]").length&&(a=$("[data-mainv-pc]").height()):$("[data-mainv-sp]").length&&(a=$("[data-mainv-sp]").height()),e>a?$("body").addClass("is-scrolled"):$("body").removeClass("is-scrolled")}a(),$(window).scroll((function(){if(0==SETTING.isbodyFixed){var t=$(this).scrollTop();t>e?$(window).scrollTop()>100&&$("body").addClass("scroll-down"):$("body").removeClass("scroll-down"),e=t,a()}}));var t=!1;$(window).scroll((function(){!1!==t&&clearTimeout(t),t=setTimeout((function(){$("body").removeClass("scroll-down")}),300)})),"pc"==SETTING.DEVICE&&$("[data-search-pc]").append($("[data-search-sp] #MF_form_phrase")),$("body").hasClass("is-wave")||("pc"!=SETTING.DEVICE?$("body").css("padding-top",$("#l-header .header-sp").outerHeight()):($("body").css("padding-top",$("#l-header .header-pc").outerHeight()+20),setTimeout((function(){$("body").css("padding-top",$("#l-header .header-pc").outerHeight()+20)}),200)))},pageTop:function(e,a){void 0===e&&(e=!0),void 0===a&&(a=!0);var t=$(window),i=$("[data-pagetop]"),o=i.find(".pagetop-btn");e?t.on("scroll",(function(){t.scrollTop()>50?i.fadeIn(200):i.fadeOut(200)})):i.show(),a&&t.on("scroll",(function(){var e=$(document).height(),a=t.height()+t.scrollTop(),i=$("#l-footer").innerHeight(),n=18;"sp"!=SETTING.DEVICE&&(n=23),e-a<=i?o.css({position:"absolute",bottom:i+n}):o.css({position:"fixed",bottom:n})}))},jsPnav:function(){$("[data-js-autoanchor]").each((function(){var e=$(this).data("selector"),a=($(this).parent(),$(this).nextUntil("[data-js-autoanchor][data-selector='"+e+"'],.js-autoauchor-end").filter(e)),t=$(this).find("[data-js-autoanchor-tmpl]").html(),i=$(this).find("ul"),o=[];a.each((function(){var e=$(this).attr("id"),a=$(this).html();$(this).find("img").length&&($(this).find("img").remove(),a=$(this).html()),o.push(t.replace("{{url}}","#"+e).replace("{{label}}",a))})),i.append(o),$(this).find("script").remove(),FUNC.smoothScroll()}))},lNavCurrentInit:function(){$("#l-header").length&&SETTING.DEVICE,$(".content-nav").length&&$.navCurrent({Selector:".content-nav .nav-list > li > a",addClass:"is-current",exception:""}),$(".content-nav").length&&$.navCurrent({Selector:".content-nav .nav-list > li > a.is-current + ul > li > a",addClass:"is-current",exception:""}),$(".content-nav").length&&$.navCurrent({Selector:".content-nav .nav-list > li > ul > li > a.is-current + ul > li > a",addClass:"is-current",exception:""}),$("#l-content .content-nav .nav-list > li > a").length&&$("#l-content .content-nav .nav-list > li > a").tile(4)},currentCheck:function(){var e=location.hash;$(window).on("load",(function(a){if($(e).length){a.preventDefault();var t=0;t="sp"==SETTING.DEVICE?$("#l-header .header-sp").outerHeight():$("#l-header .header-pc").outerHeight()+20;var i=$(e).offset().top,o=window.navigator.userAgent.toLowerCase();o.indexOf("msie")>=0||o.indexOf("trident")>=0?setTimeout((function(){$("html, body").scrollTop(Number(i)-t-20)}),500):$("html, body").scrollTop(Number(i)-t-20)}}))},pluginTileJs:function(){$("[data-tile]").each((function(){var e=$(this),a=e.attr("data-tile").split(","),t="",i=e.width();a.forEach((function(a){if((t=a).length){var o=e.find(t).outerWidth();(n=Math.floor(i/o))<1&&(n=1),e.find(t).tile(n).addClass("is-addTile")}else{o=e.children().outerWidth();var n=Math.floor(i/o);e.children().tile(n).addClass("is-addTile")}}))}))},pluginTileJsInit:function(){$(window).on("load",(function(){FUNC.pluginTileJs()}))},transTableScroll:function(){var e=$("table:not(.noScroll)");$("[data-fixed]").width();e.each((function(){var e=$(this),a=!1;$column=e.find("tr").each((function(){$(this).find(">th,>td").length>2&&(a=!0)})),a&&(e.wrap('<div class="m-table-scroll"></div>'),e.before('<div class="scroll-mark"><span></span></div>'),e.wrap('<div class="scroll-wrap"></div>'))})),$(".m-table-scroll .scroll-wrap").on("scroll",(function(){var e=$(this),a=e.closest(".m-table-scroll").find(".scroll-mark");0<e.scrollLeft()?a.fadeOut("fast"):0==e.scrollLeft()&&a.fadeIn("fast")}))},getUrlVars:function(){for(var e,a=[],t=decodeURI(window.location.href.replace(location.hash,"")).slice(window.location.href.indexOf("?")+1).split("&"),i=0;i<t.length;i++)e=t[i].split("="),a.push(e[0]),a[e[0]]=e[1];return a},accordion:function(){$("[data-accordion] [aria-controls]").each((function(){$(this).on("click",(function(e){if(""==(a=$(this)).closest("[data-accordion]").data("accordion")||a.closest("[data-accordion]").data("accordion").match(/sp/)&&"sp"==SETTING.DEVICE||a.closest("[data-accordion]").data("accordion").match(/tab/)&&"tab"==SETTING.DEVICE||a.closest("[data-accordion]").data("accordion").match(/pc/)&&"pc"==SETTING.DEVICE){e.preventDefault();var a,t=(a=$(this)).closest("[data-accordion]"),i=t.find("[aria-hidden]");t.hasClass(SETTING.ACTIVE)?(i.stop().slideUp(),t.removeClass(SETTING.ACTIVE),a.attr("aria-expanded",!1),i.attr("aria-hidden",!0)):(t.addClass(SETTING.ACTIVE),i.stop().slideDown(),a.attr("aria-expanded",!0),i.attr("aria-hidden",!1))}}))}))},getUA:function(){var e=navigator.userAgent.toLowerCase(),a=navigator.appVersion.toLowerCase();SETTING.UA.isMSIE=e.indexOf("msie")>-1&&-1==e.indexOf("opera"),SETTING.UA.isIE6=SETTING.UA.isMSIE&&a.indexOf("msie 6.")>-1,SETTING.UA.isIE7=SETTING.UA.isMSIE&&a.indexOf("msie 7.")>-1,SETTING.UA.isIE8=SETTING.UA.isMSIE&&a.indexOf("msie 8.")>-1,SETTING.UA.isIE9=SETTING.UA.isMSIE&&a.indexOf("msie 9.")>-1,SETTING.UA.isIE10=SETTING.UA.isMSIE&&a.indexOf("msie 10.")>-1,SETTING.UA.isIE11=e.indexOf("trident/7")>-1,SETTING.UA.isIE=SETTING.UA.isMSIE||SETTING.UA.isIE11,SETTING.UA.isEdge=e.indexOf("edge")>-1,SETTING.UA.isChrome=e.indexOf("chrome")>-1&&-1==e.indexOf("edge"),SETTING.UA.isFirefox=e.indexOf("firefox")>-1,SETTING.UA.isSafari=e.indexOf("safari")>-1&&-1==e.indexOf("chrome"),SETTING.UA.isOpera=e.indexOf("opera")>-1}};FUNC.modal=function(){if($('[data-modal="youtube"]').length>0){0==$(".m-box-modal").length&&$("body").append('<div class="m-box-modal l-reset"><div class="modal-overlay"></div><div class="modal-inner"><div class="modal-youtube"><iframe src="" frameborder="0"></iframe></div><p class="modal-close"><button type="button" class="close-btn"><span class="btn-wrap">閉じる</span></button></p></div></div>'),$('[data-modal="youtube"]').on("click",(function(e){if("pc"==SETTING.DEVICE){var a=$(this);e.preventDefault(),t=a.attr("href"),$(".m-box-modal .modal-youtube iframe").attr("src",t),$(".m-box-modal").addClass("is-active").attr("style",""),FUNC.bodyFixed(!0)}var t})),$(".m-box-modal .modal-close .close-btn,.m-box-modal .modal-overlay").on("click",(function(e){$(".m-box-modal .modal-youtube iframe").attr("src",""),$(".m-box-modal").removeClass("is-active").attr("style",""),FUNC.bodyFixed(!1)}))}},FUNC.viewHeightFixed=function(){$(window).on("load resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}))},FUNC.bodyFixed=function(e){void 0===e&&(e=!0),e?0==SETTING.isbodyFixed&&(SETTING.bodyFixedY=$(window).scrollTop(),$("#l-wrap").css({position:"fixed",width:"100%",top:-1*SETTING.bodyFixedY}),SETTING.isbodyFixed=!0,$("body").addClass("isbodyFixed")):($("#l-wrap").attr({style:""}),$("html, body").prop({scrollTop:SETTING.bodyFixedY}),SETTING.isbodyFixed=!1,$("body").removeClass("isbodyFixed"))},FUNC.tab=function(){if(-1!=location.search.indexOf("tab")&&(area=location.search.split("=").pop(),initNo=$("[data-tab-wrap]").find('[data-tab-btn][href="#'+area+'"]').closest("li").index(),initNo>-1)){const e=$("[data-tab-wrap]").find('[data-tab-btn][href="#'+area+'"]'),a=e.closest("[data-tab]"),t=e.closest("li").siblings().find("[data-tab-btn]"),i=a.closestOpposite("[data-content]").find(" > *");t.removeClass(SETTING.ACTIVE),e.addClass(SETTING.ACTIVE),i.hide(),i.eq(initNo).fadeIn()}$("[data-tab-btn]").on("click",(function(e){e.preventDefault();const a=$(this),t=a.closest("[data-tab]"),i=a.closest("li").siblings().find("[data-tab-btn]"),o=t.closestOpposite("[data-content]").find(" > *"),n=a.closest("li").index();a.hasClass(SETTING.ACTIVE)||(i.removeClass(SETTING.ACTIVE),a.addClass(SETTING.ACTIVE),o.hide(),o.eq(n).fadeIn())})),$(".m-box-tabhead .item-select").each((function(){$this=$(this),$this.closest(".m-box-tab[data-tab]").length>0?$this.find("select").on("change",(function(e){const a=$(this);a.closest("[data-tab]").closestOpposite("[data-content]").find(" > *").hide(),$("#"+a.val()).fadeIn(),e.preventDefault()})):$this.find("select").on("change",(function(e){location.href=this.value}))}))},$.fn.closestOpposite=function(e){var a=this.children();return 0===a.length?$():this.filter(e).length?this.filter(e):a.closestOpposite(e)},FUNC.selectChangeLocation=function(){$("[data-select-change]").on("change",(function(e){const a=$(this);location.href=a.val(),e.preventDefault()}))},FUNC.smoothScroll=function(e){var a=$.extend({target:$('a[href^="#"]'),speed:300},e),t=a.target,i=$("html,body");t.each((function(){var e,t=$(this),o=t.attr("href");return!!t.closest("[data-scroll-not]").length||(!!t.closest("[data-tab]").length||(e="#"!=o?$(o):$("body"),void t.click((function(t){"sp"==SETTING.DEVICE?abjustY=$("#l-header .header-sp").outerHeight():abjustY=$("#l-header .header-pc").outerHeight()+20;var o=e.offset().top-abjustY-20;return i.stop().animate({scrollTop:o},{duration:a.speed,complete:function(){}}),!1}))))}))},FUNC.globalnetwork=function(){function e(e){$("[data-map-target]").hide(),$('[data-map-target="'+e+'"]').slideDown(0),$(".m-box-map").find("[data-mapbtn]").each((function(e,a){var t=$(this);$("[data-map]").removeClass("bg-"+t.data("mapbtn"))})),$("[data-map]").addClass("bg-"+e)}if($(".m-box-map").length){$("[data-map-target]").hide(),$('[data-map-target="01').slideDown(0),e("01");const a=FUNC.getUrlVars();null!=a.cat&&e(a.cat.slice(1)),$("[data-mapbtn]").on("click",(function(a){a.preventDefault(),e($(this).data("mapbtn"));var t=$("html,body");let i=$("#map-target");var o=0;o="sp"==SETTING.DEVICE?$("#l-header .header-sp").outerHeight():$("#l-header .header-pc").outerHeight()+20;var n=i.offset().top-o-20;t.stop().animate({scrollTop:n},{duration:300,complete:function(){}})}))}},FUNC.fadeAnim=function(){function e(){$("[data-anim]").each((function(){let e=$(this);""==e.attr("data-anim")&&!0===function(e){let a=$(window).scrollTop(),t=0;t=$(window).height()/4>100?100:$(window).height()/4;let i=a+$(window).height()-t,o=$(e).offset().top;return $(e).height(),i>o}(this)&&e.attr("data-anim","on")}))}$(window).on("load",(function(){e()})),$(window).on("scroll",(function(){e()}))},FUNC.cookie=function(){$.cookie("use_cookie")&&"0"!=$.cookie("use_cookie")||("en"==$("html").prop("lang")?$('<div class="m-box-policy"><div data-fixed><div class="policy-col"><div class="col-item item-left"><p class="m-txt-p">英語 ダミーテキスト 当Webサイトでは、サービスに関連する情報の提供や調査・分析等のため、Cookieを使用しています。</p></div><div class="col-item item-right"><p class="policy-btnwrap"><button class="btn-consent m-btn-simple"><span>Agree</span></button></p></div></div></div></div>').appendTo("body"):$('<div class="m-box-policy"><div data-fixed><div class="policy-col"><div class="col-item item-left"><p class="m-txt-p">日本語 ダミーテキスト 当Webサイトでは、サービスに関連する情報の提供や調査・分析等のため、Cookieを使用しています。</p></div><div class="col-item item-right"><p class="policy-btnwrap"><button class="btn-consent m-btn-simple"><span>同意する</span></button></p></div></div></div></div>').appendTo("body"),$(document).on("click",".m-box-policy .policy-btnwrap button",(function(){var e;return e=function(e){var a=/\+/g;function t(e){return s.raw?e:encodeURIComponent(e)}function i(e){return s.raw?e:decodeURIComponent(e)}function o(e){return t(s.json?JSON.stringify(e):String(e))}function n(t,i){var o=s.raw?t:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(a," ")),s.json?JSON.parse(e):e}catch(e){}}(t);return e.isFunction(i)?i(o):o}var s=e.cookie=function(a,d,c){if(arguments.length>1&&!e.isFunction(d)){if("number"==typeof(c=e.extend({},s.defaults,c)).expires){var l=c.expires,r=c.expires=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*l)}return document.cookie=[t(a),"=",o(d),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var h=a?void 0:{},p=document.cookie?document.cookie.split("; "):[],u=0,f=p.length;u<f;u++){var $=p[u].split("="),m=i($.shift()),b=$.join("=");if(a===m){h=n(b,d);break}a||void 0===(b=n(b))||(h[m]=b)}return h};s.defaults={},e.removeCookie=function(a,t){return e.cookie(a,"",e.extend({},t,{expires:-1})),!e.cookie(a)}},"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery),$.cookie("use_cookie","on",{path:"/",expires:365}),$(".m-box-policy").addClass("use_cookie"),setTimeout((function(){$(".m-box-policy").remove()}),1e3),!1})))};