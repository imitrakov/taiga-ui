function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fe7d602a6de31264108144aacb875f1e2b860de05\u241f4481678507740450627: Add ",":START_TAG_CODE:@tuiPure",":CLOSE_TAG_CODE: decorator for your method or getter: "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f00d1222edd5979db8d5ee12174b25f8c2c8f1b18\u241f2326709629297761578: If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241ff3bd06346fbf934c4f8a501cc1886ac7f4bb46da\u241f1623021968578892561: Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f142c568583ee039615277b4178286ae0e46d0a56\u241f1148608671765112042: Decorator for memoization of pure methods and getters "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f6249527401fcb0d799fa087f686f23631ee46d68\u241f8407130897675501150:Pure"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{A3SN:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPureModule",(function(){return z}));var o=n("An66"),a=n("3kIJ"),c=n("1VvW"),i=n("SVIu"),r=n("Qq0t"),u=n("dvRg"),l=n("kZht"),p=n("OZlg"),s=n("e0eB"),m=n("iyc4"),d=n("D57K"),f=n("l4xa"),h=n("zV1d");function b(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",2),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" fibonacci(42) = ",n.fibonacci42," ")}}var g,x=((g=function(){function e(){_classCallCheck(this,e),this.show=!1}return _createClass(e,[{key:"fibonacci",value:function(e){return e<=1?e:this.fibonacci(e-1)+this.fibonacci(e-2)}},{key:"fibonacci42",get:function(){return this.fibonacci(42)}}]),e}()).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=l["\u0275\u0275defineComponent"]({type:g,selectors:[["example-tui-pure-getter"]],decls:3,vars:1,consts:[["class","tui-space_bottom-2",4,"ngIf"],["tuiButton","","type","button",3,"click"],[1,"tui-space_bottom-2"]],template:function(e,t){1&e&&(l["\u0275\u0275template"](0,b,2,1,"div",0),l["\u0275\u0275elementStart"](1,"button",1),l["\u0275\u0275listener"]("click",(function(){return t.show=!t.show})),l["\u0275\u0275text"](2,"Show/hide"),l["\u0275\u0275elementEnd"]()),2&e&&l["\u0275\u0275property"]("ngIf",t.show)},directives:[o.t,h.a],encapsulation:2,changeDetection:0}),Object(d.b)([f.tuiPure],g.prototype,"fibonacci42",null),g),v=n("GdrL");function _(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",1),l["\u0275\u0275text"](1),l["\u0275\u0275pipe"](2,"json"),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" Result: ",l["\u0275\u0275pipeBind1"](2,1,n.calculate(n.counter,n.text))," ")}}var C,w,y,j,S,O=((C=function(){function e(){_classCallCheck(this,e),this.text="",this.show=!1,this.counter={count:0}}return _createClass(e,[{key:"calculate",value:function(e,t){return e.count++,{text:t}}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=l["\u0275\u0275defineComponent"]({type:C,selectors:[["example-tui-pure-function"]],decls:7,vars:3,consts:[[3,"ngModel","ngModelChange"],[1,"tui-space_top-2"],["class","tui-space_top-2",4,"ngIf"],["tuiButton","","type","button",1,"tui-space_top-2",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-input",0),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.text=e})),l["\u0275\u0275text"](1,"Type a text to start computing"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](4,_,3,3,"div",2),l["\u0275\u0275elementStart"](5,"button",3),l["\u0275\u0275listener"]("click",(function(){return t.show=!t.show})),l["\u0275\u0275text"](6," Show/hide "),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275property"]("ngModel",t.text),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"]("Called times: ",t.counter.count,""),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.show))},directives:[v.a,a.NgControlStatus,a.NgModel,o.t,h.a],pipes:[o.k],encapsulation:2,changeDetection:0}),Object(d.b)([f.tuiPure],C.prototype,"calculate",null),C),k=n("u8jZ"),E=["header",$localize(_templateObject())];function T(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",3),l["\u0275\u0275i18n"](1,w),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18n"](3,y),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"p"),l["\u0275\u0275i18n"](5,j),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"tui-doc-example",4),l["\u0275\u0275element"](7,"example-tui-pure-getter"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",5),l["\u0275\u0275element"](9,"example-tui-pure-function"),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("content",n.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example2)}}function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",6),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,S),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](5,"tui-doc-code",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("code",n.exampleDecorator)}}w=$localize(_templateObject2()),y=$localize(_templateObject3()),j=$localize(_templateObject4()),S=$localize(_templateObject5(),"\ufffd#4\ufffd","\ufffd/#4\ufffd");var D,I,M=((I=function e(){_classCallCheck(this,e),this.exampleDecorator="@tuiPure\nget complexCalculationWithFixedResult(): number {\n    ...\n}\n\n@tuiPure\nsomeMethod(arg1: number, arg2: {}): {} {\n    ...\n}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'example-tui-pure-getter',\n    template: `\n        <div *ngIf=\"show\" class=\"tui-space_bottom-2\">\n            fibonacci(42) = {{ fibonacci42 }}\n        </div>\n        <button tuiButton type=\"button\" (click)=\"show = !show\">Show/hide</button>\n    `,\n    changeDetection,\n})\nexport class ExampleTuiPureGetterComponent {\n    @tuiPure\n    get fibonacci42(): number {\n        return this.fibonacci(42);\n    }\n\n    show = false;\n\n    private fibonacci(num: number): number {\n        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);\n    }\n}\n"},this.example2={TypeScript:'import {Component} from \'@angular/core\';\nimport {changeDetection} from \'@demo/emulate/change-detection\';\nimport {tuiPure} from \'@taiga-ui/cdk\';\n\n@Component({\n    selector: \'example-tui-pure-function\',\n    template: `\n        <tui-input [(ngModel)]="text">Type a text to start computing</tui-input>\n        <div class="tui-space_top-2">Called times: {{ counter.count }}</div>\n        <div *ngIf="show" class="tui-space_top-2">\n            Result: {{ calculate(counter, text) | json }}\n        </div>\n        <button tuiButton type="button" class="tui-space_top-2" (click)="show = !show">\n            Show/hide\n        </button>\n    `,\n    changeDetection,\n})\nexport class ExampleTuiPureFunctionComponent {\n    text = \'\';\n\n    show = false;\n\n    counter = {\n        count: 0,\n    };\n\n    @tuiPure\n    calculate(counter: {count: number}, text: string): {text: string} {\n        counter.count++;\n\n        return {\n            text,\n        };\n    }\n}\n'}}).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=l["\u0275\u0275defineComponent"]({type:I,selectors:[["example-tui-pure"]],decls:4,vars:0,consts:[["package","CDK","path","cdk/decorators/pure.ts",6,"header"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-3"],["id","getter","heading","Getter",3,"content"],["id","function","heading","Function",3,"content"],[1,"b-demo-steps"],["filename","myClass.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,E),l["\u0275\u0275template"](2,T,10,2,"ng-template",1),l["\u0275\u0275template"](3,P,6,1,"ng-template",2),l["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,m.a,x,O,k.a],encapsulation:2,changeDetection:0}),I),z=((D=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[o.c,a.FormsModule,u.TuiInputModule,r.TuiButtonModule,i.h,c.f.forChild(Object(i.o)(M))]]}),D)}}]);