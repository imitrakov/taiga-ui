(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{xag9:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTokensModule",(function(){return D}));var o,i=t("An66"),a=t("1VvW"),r=t("SVIu"),c=t("Qq0t"),l=t("kZht"),s=t("OZlg"),m=t("e0eB"),p=t("iyc4"),u=t("ZPGh");o=$localize`:␟b4dbfc932d95d55e9a26345b7dde1027082f26f3␟2067104080637114398: Inject this token if you need access to Renderer inside a singleton service.
`;let d=(()=>{class e{constructor(e){this.renderer=e,this.style=this.renderer.createElement("style")}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](u.b))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-1"]],decls:2,vars:0,template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,o),l["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var T,_,I=t("l4xa"),S=t("yZWP");T=$localize`:␟3735e1c2789e5eb1308b011e6862a55148f3a412␟5790686667387545292: A multi token of Observables of modal dialogs displayed by ${"\ufffd#2\ufffd"}:START_LINK:TuiDialogHostComponent${"\ufffd/#2\ufffd"}:CLOSE_LINK:.
`,_=$localize`:␟c9c3023afb60b14498fe4d2cc8421748aadc569c␟4151089546493976005: You can create your own service extending ${"\ufffd#5\ufffd"}:START_LINK:AbstractTuiDialogService${"\ufffd/#5\ufffd"}:CLOSE_LINK: to easily add modal dialogs to your application.
`;let k=(()=>{class e{constructor(e){this.dialogs=e}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](I.TUI_DIALOGS,8))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-2"]],decls:6,vars:0,consts:[["tuiLink","","routerLink","/dialog"],["tuiLink","","routerLink","/components/dialog"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,T),l["\u0275\u0275element"](2,"a",0),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"p"),l["\u0275\u0275i18nStart"](4,_),l["\u0275\u0275element"](5,"a",1),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[S.a,a.e],encapsulation:2,changeDetection:0}),e})();var f;f=$localize`:␟5a884c8ed330261c2913e8c3229292b6a2c58a96␟6417456326684374424: All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.
`;let A=(()=>{class e{constructor(e){this.tuiFocusableComponent=e}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](I.TUI_FOCUSABLE_ITEM_ACCESSOR,8))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-3"]],decls:2,vars:0,template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,f),l["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var L;L=$localize`:␟2401a1fc4953d6ea36212c5785b27be0e480cd15␟1542562001829355423: A token with a factory. It takes ${"\ufffd#2\ufffd"}:START_LINK:TUI_IS_MOBILE${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: and ${"\ufffd#3\ufffd"}:START_LINK_1:TUI_IS_IOS${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK:, returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)
`,L=l["\u0275\u0275i18nPostprocess"](L);let g=(()=>{class e{constructor(e){this.isAndroid=e}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](I.TUI_IS_ANDROID))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-4"]],decls:4,vars:0,consts:[["tuiLink","","routerLink","/tokens/is-mobile"],["tuiLink","","routerLink","/tokens/is-ios"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,L),l["\u0275\u0275element"](2,"a",0),l["\u0275\u0275element"](3,"a",1),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[S.a,a.e],encapsulation:2,changeDetection:0}),e})();var E;E=$localize`:␟f57d16773443de35b06009d27ce64696aef67765␟2614111316457999277: A token with a factory. It takes ${"\ufffd#2\ufffd"}:START_LINK:TUI_IS_MOBILE${"\ufffd/#2\ufffd"}:CLOSE_LINK: and if it is true detects iOS devices with a regex
`;let h=(()=>{class e{constructor(e){this.isIos=e}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](u.g))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-5"]],decls:3,vars:0,consts:[["tuiLink","","routerLink","/tokens/is-mobile"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,E),l["\u0275\u0275element"](2,"a",0),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[S.a,a.e],encapsulation:2,changeDetection:0}),e})();var v;v=$localize`:␟af8e0e8fe029b54fac3e70c9f338a6c05b0c9672␟7539417258157103198: A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices
`;let C=(()=>{class e{constructor(e){this.isMobile=e}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](I.TUI_IS_MOBILE))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-6"]],decls:2,vars:0,template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,v),l["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var O;O=$localize`:␟7300e4f4db83543a779f31d448a510d8a4b186db␟9093287927180004689:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV: Using ${"[\ufffd#3\ufffd|\ufffd#8\ufffd|\ufffd#13\ufffd]"}:START_TAG_STRONG:TUI_NUMBER_FORMAT${"[\ufffd/#3\ufffd|\ufffd/#8\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_STRONG: injection token you can customize numbers formatting. ${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:For example: 10 500,33${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:Can be customized as: 10/500.33${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#6\ufffd|\ufffd#11\ufffd]"}:START_PARAGRAPH:${"[\ufffd/#6\ufffd|\ufffd/#11\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"[\ufffd#3\ufffd|\ufffd#8\ufffd|\ufffd#13\ufffd]"}:START_TAG_STRONG:Defaults:${"[\ufffd/#3\ufffd|\ufffd/#8\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:decimalSeparator = ','${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:thousandSeparator = CHAR_NO_BREAK_SPACE${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#6\ufffd|\ufffd#11\ufffd]"}:START_PARAGRAPH:${"[\ufffd/#6\ufffd|\ufffd/#11\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"[\ufffd#3\ufffd|\ufffd#8\ufffd|\ufffd#13\ufffd]"}:START_TAG_STRONG:Components that are customizable:${"[\ufffd/#3\ufffd|\ufffd/#8\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"\ufffd#15\ufffd"}:START_LINK:TuiMoneyComponent${"[\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_LINK:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"\ufffd#17\ufffd"}:START_LINK_1:TuiInputSliderComponent${"[\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_LINK:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"\ufffd#19\ufffd"}:START_LINK_2:TuiInputRangeComponent${"[\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_LINK:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"\ufffd#21\ufffd"}:START_LINK_3:TuiInputNumberComponent${"[\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_LINK:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"\ufffd#23\ufffd"}:START_LINK_4:TuiInputCountComponent${"[\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_LINK:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#7\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd]"}:START_TAG_DIV:${"\ufffd#25\ufffd"}:START_LINK_5:TuiFormatNumberPipe${"[\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_LINK:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#7\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DIV:`,O=l["\u0275\u0275i18nPostprocess"](O);let b=(()=>{class e{constructor(e){this.numberFormatSettings=e}}return e.\u0275fac=function(n){return new(n||e)(l["\u0275\u0275directiveInject"](c.TUI_NUMBER_FORMAT))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-8"]],decls:26,vars:0,consts:[["tuiLink","","routerLink","/components/money"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"],["tuiLink","","routerLink","/components/input-number"],["tuiLink","","routerLink","/components/input-count"],["tuiLink","","routerLink","/pipes/format-number"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275i18nStart"](1,O),l["\u0275\u0275elementStart"](2,"div"),l["\u0275\u0275element"](3,"strong"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](4,"div"),l["\u0275\u0275element"](5,"div"),l["\u0275\u0275element"](6,"p"),l["\u0275\u0275elementStart"](7,"div"),l["\u0275\u0275element"](8,"strong"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](9,"div"),l["\u0275\u0275element"](10,"div"),l["\u0275\u0275element"](11,"p"),l["\u0275\u0275elementStart"](12,"div"),l["\u0275\u0275element"](13,"strong"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div"),l["\u0275\u0275element"](15,"a",0),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"div"),l["\u0275\u0275element"](17,"a",1),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"div"),l["\u0275\u0275element"](19,"a",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](20,"div"),l["\u0275\u0275element"](21,"a",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"div"),l["\u0275\u0275element"](23,"a",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"div"),l["\u0275\u0275element"](25,"a",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[S.a,a.e],encapsulation:2,changeDetection:0}),e})();const x=["header",$localize`:␟831c70609f5320ba73bb112526ec9cb86c71367c␟4548722462586549001:Tokens`];function R(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-example",2),l["\u0275\u0275element"](1,"tui-token-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",3),l["\u0275\u0275element"](3,"tui-token-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"tui-doc-example",4),l["\u0275\u0275element"](5,"tui-token-example-3"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"tui-doc-example",5),l["\u0275\u0275element"](7,"tui-token-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",6),l["\u0275\u0275element"](9,"tui-token-example-5"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"tui-doc-example",7),l["\u0275\u0275element"](11,"tui-token-example-6"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"tui-doc-example",8),l["\u0275\u0275element"](13,"tui-token-example-8"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example3),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example4),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example5),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example6),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example8)}}let y=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component, Inject, Renderer2} from '@angular/core';\nimport {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk/tokens';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample1 {\n    constructor(@Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2) {}\n\n    style = this.renderer.createElement('style');\n}\n",HTML:"<p i18n>\n    Inject this token if you need access to Renderer inside a singleton service.\n</p>\n"},this.example2={TypeScript:"import {Component, Inject, Optional} from '@angular/core';\nimport {TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample2 {\n    constructor(\n        @Optional()\n        @Inject(TUI_DIALOGS)\n        readonly dialogs: readonly Observable<readonly unknown[]>[] | null,\n    ) {}\n}\n",HTML:'<p i18n>\n    A multi token of Observables of modal dialogs displayed by\n    <a tuiLink routerLink="/dialog">TuiDialogHostComponent</a>.\n</p>\n<p i18n>\n    You can create your own service extending\n    <a tuiLink routerLink="/components/dialog">AbstractTuiDialogService</a>\n    to easily add modal dialogs to your application.\n</p>\n'},this.example3={TypeScript:"import {Component, Inject, Optional} from '@angular/core';\nimport {TUI_FOCUSABLE_ITEM_ACCESSOR, TuiFocusableElementAccessor} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample3 {\n    constructor(\n        @Optional()\n        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)\n        readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,\n    ) {}\n}\n",HTML:"<p i18n>\n    All Taiga UI components that can be focused provide this token so you can\n    inject them into your directives that work with focus.\n</p>\n"},this.example4={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_IS_ANDROID} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample4 {\n    constructor(@Inject(TUI_IS_ANDROID) readonly isAndroid: boolean) {}\n}\n",HTML:'<p i18n>\n    A token with a factory. It takes\n    <a tuiLink routerLink="/tokens/is-mobile">TUI_IS_MOBILE</a>\n    and <a tuiLink routerLink="/tokens/is-ios">TUI_IS_IOS</a>, returnstrue if\n    the device is mobile but not iOS (technically includes Windows Phone,\n    Blackberry etc.)\n</p>\n'},this.example5={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample5 {\n    constructor(@Inject(TUI_IS_IOS) readonly isIos: boolean) {}\n}\n",HTML:'<p i18n>\n    A token with a factory. It takes\n    <a tuiLink routerLink="/tokens/is-mobile">TUI_IS_MOBILE</a>\n    and if it is true detects iOS devices with a regex\n</p>\n'},this.example6={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-6',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample6 {\n    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}\n}\n",HTML:"<p i18n>\n    A token with a factory. It takes USER_AGENT token and parses it with a\n    complex Regex to detect users with mobile devices\n</p>\n"},this.example7={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-7',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample7 {\n    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<string[]>) {}\n}\n",HTML:"<p i18n>\n    Provide an array of 12 strings for localized names for months to be used in\n    TuiMonthPipe\n</p>\n"},this.example8={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {NumberFormatSettings, TUI_NUMBER_FORMAT} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-8',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample8 {\n    constructor(\n        @Inject(TUI_NUMBER_FORMAT)\n        readonly numberFormatSettings: NumberFormatSettings,\n    ) {}\n}\n",HTML:'<div i18n>\n    <div>\n        Using <strong>TUI_NUMBER_FORMAT</strong> injection token you can\n        customize numbers formatting.\n    </div>\n    <div>For example: 10 500,33</div>\n    <div>Can be customized as: 10/500.33</div>\n    <p></p>\n    <div>\n        <strong>Defaults:</strong>\n    </div>\n    <div>decimalSeparator = \',\'</div>\n    <div>thousandSeparator = CHAR_NO_BREAK_SPACE</div>\n    <p></p>\n    <div>\n        <strong>Components that are customizable:</strong>\n    </div>\n    <div><a tuiLink routerLink="/components/money">TuiMoneyComponent</a></div>\n    <div>\n        <a tuiLink routerLink="/components/input-slider"\n            >TuiInputSliderComponent</a\n        >\n    </div>\n    <div>\n        <a tuiLink routerLink="/components/input-range"\n            >TuiInputRangeComponent</a\n        >\n    </div>\n    <div>\n        <a tuiLink routerLink="/components/input-number"\n            >TuiInputNumberComponent</a\n        >\n    </div>\n    <div>\n        <a tuiLink routerLink="/components/input-count"\n            >TuiInputCountComponent</a\n        >\n    </div>\n    <div>\n        <a tuiLink routerLink="/pipes/format-number">TuiFormatNumberPipe</a>\n    </div>\n</div>\n'}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tokens"]],decls:3,vars:0,consts:[["package","CDK","path","cdk/tokens",6,"header"],["pageTab",""],["id","default-renderer","heading","TUI_DEFAULT_RENDERER",3,"content"],["id","dialog","heading","TUI_DIALOGS",3,"content"],["id","focusable-item-accessor","heading","TUI_FOCUSABLE_ITEM_ACCESSOR",3,"content"],["id","is-android","heading","TUI_IS_ANDROID",3,"content"],["id","is-ios","heading","TUI_IS_IOS",3,"content"],["id","is-mobile","heading","TUI_IS_MOBILE",3,"content"],["id","number-format","heading","TUI_NUMBER_FORMAT",3,"content"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,x),l["\u0275\u0275template"](2,R,14,7,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[s.a,m.a,p.a,d,k,A,g,h,C,b],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[i.c,c.TuiLinkModule,r.h,a.f.forChild(Object(r.o)(y))]]}),e})()}}]);