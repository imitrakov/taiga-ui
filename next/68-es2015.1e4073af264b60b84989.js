(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{eeyG:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputPhoneInternationalModule",(function(){return K}));var o=n("An66"),r=n("3kIJ"),i=n("1VvW"),a=n("SVIu"),u=n("Qq0t"),l=n("dvRg"),c=n("Piem"),s=n("kZht"),d=n("RyoY"),m=n("LusI"),p=n("K/iL"),C=n("OZlg"),y=n("e0eB"),f=n("iyc4"),h=n("J+bq"),I=n("gEyt");let g=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl("+77777777777",r.Validators.required)}),this.countries=[d.a.RU,d.a.KZ,d.a.UA,d.a.BY],this.countryIsoCode=d.a.RU}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-international-example-1"]],decls:2,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"tui-input-phone-international",1),s["\u0275\u0275listener"]("countryIsoCodeChange",(function(e){return t.countryIsoCode=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("countries",t.countries)("tuiTextfieldLabelOutside",!0)("countryIsoCode",t.countryIsoCode))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName,I.b],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),e})(),T=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl("",r.Validators.minLength(12))}),this.countries=Object.values(d.a),this.countryIsoCode=d.a.US}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-international-example-2"]],decls:3,vars:3,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","countryIsoCode","countryIsoCodeChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"tui-input-phone-international",1),s["\u0275\u0275listener"]("countryIsoCodeChange",(function(e){return t.countryIsoCode=e})),s["\u0275\u0275text"](2," Type your number "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("countries",t.countries)("countryIsoCode",t.countryIsoCode))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),e})();var x,F=n("EPR0"),V=n("yHor"),b=n("zGJC"),w=n("FSyC"),S=n("eB8V"),E=n("SUM+"),D=n("RlDx"),v=n("u8jZ");x=$localize`:␟e6a9c5f8ed29fc6385948897fb5c70e1822bb9ed␟5478561261855774640:Allows to input phone number in international format`;const M=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],P=["heading",$localize`:␟a4ce8afe288861740448cf9f07c2eeaf458d9489␟5013485945471264561:All available contries`];function G(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,x),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](3,M),s["\u0275\u0275element"](4,"tui-input-phone-international-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](6,P),s["\u0275\u0275element"](7,"tui-input-phone-international-example-2"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2)}}function O(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-input-phone-international",8),s["\u0275\u0275listener"]("countryIsoCodeChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"](2).countryIsoCode=t})),s["\u0275\u0275text"](1," Type a phone number "),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("countries",e.countries)("readOnly",e.readOnly)("tuiTextfieldCleaner",e.cleaner)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("pseudoHovered",e.pseudoHovered)("pseudoFocused",e.pseudoFocused)("pseudoInvalid",e.pseudoInvalid)("tuiTextfieldLabelOutside",e.labelOutside)("countryIsoCode",e.countryIsoCode)}}var A,_,H,R,U,L;function N(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,A),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function $(e,t){1&e&&s["\u0275\u0275i18n"](0,_)}function z(e,t){1&e&&s["\u0275\u0275i18n"](0,H)}function j(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",4),s["\u0275\u0275template"](1,O,2,16,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,N,2,0,"ng-template",5),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,$,1,0,"ng-template",6),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().countries=t})),s["\u0275\u0275template"](5,z,1,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().countryIsoCode=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](6,"inherited-documentation")}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.countriesVariants)("documentationPropertyValue",e.countries),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.countryIsoCodeVariants)("documentationPropertyValue",e.countryIsoCode)}}function k(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",9),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,R),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,U),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275elementStart"](13,"p"),s["\u0275\u0275i18n"](14,L),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](15,"tui-doc-code",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleDeclareForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}A=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,_=$localize`:␟2605436fc68fe6f28c38cc283c805404c1c4fe7d␟3337127772712145540: Array of ISO-codes of countries to choose `,H=$localize`:␟86063816038d414b35c237ad8c8a46b14e169a07␟1487566375988482708: ISO-code of selected country `,R=$localize`:␟2c3923c6968ec5417c5a5e45ba3645399d72f3c3␟7217508107343995741: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneInternationalModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,U=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,U=s["\u0275\u0275i18nPostprocess"](U),L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let B=(()=>{class e extends m.a{constructor(){super(...arguments),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\nimport {TuiCountryIsoCode} from '@taiga-ui/i18n';\n\n...\n\n@Component({\n...\n})\nexport class MyComponent {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('+78005553535')\n    });\n\n    readonly countries: ReadonlyArray<TuiCountryIsoCode> = [\n        TuiCountryIsoCode.RU,\n        TuiCountryIsoCode.KZ,\n        TuiCountryIsoCode.UA,\n        TuiCountryIsoCode.BY,\n    ]\n}\n",this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputPhoneInternationalModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputPhoneInternationalModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-phone-international\n        formControlName="testValue"\n        [countries]="countries"\n    ></tui-input-phone-international>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCountryIsoCode} from '@taiga-ui/i18n';\n\n@Component({\n    selector: 'tui-input-phone-international-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('+77777777777', Validators.required),\n    });\n\n    readonly countries: ReadonlyArray<TuiCountryIsoCode> = [\n        TuiCountryIsoCode.RU,\n        TuiCountryIsoCode.KZ,\n        TuiCountryIsoCode.UA,\n        TuiCountryIsoCode.BY,\n    ];\n\n    countryIsoCode = TuiCountryIsoCode.RU;\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-phone-international\n        formControlName="testValue"\n        class="input"\n        [countries]="countries"\n        [tuiTextfieldLabelOutside]="true"\n        [(countryIsoCode)]="countryIsoCode"\n    ></tui-input-phone-international>\n</form>\n',LESS:".input {\n    max-width: 24.375rem;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCountryIsoCode} from '@taiga-ui/i18n';\n\n@Component({\n    selector: 'tui-input-phone-international-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('', Validators.minLength(12)),\n    });\n\n    readonly countries = Object.values(TuiCountryIsoCode);\n\n    countryIsoCode = TuiCountryIsoCode.US;\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-phone-international\n        formControlName="testValue"\n        class="input"\n        [countries]="countries"\n        [(countryIsoCode)]="countryIsoCode"\n    >\n        Type your number\n    </tui-input-phone-international>\n</form>\n',LESS:".input {\n    max-width: 24.375rem;\n}\n"},this.cleaner=!1,this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownMinHeight=u.DEFAULT_MIN_HEIGHT,this.dropdownMaxHeight=u.DEFAULT_MAX_HEIGHT,this.control=new r.FormControl("",[r.Validators.required,r.Validators.minLength(9)]),this.countriesVariants=[[d.a.RU,d.a.KZ,d.a.UA,d.a.BY],Object.values(d.a)],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=[d.a.RU,d.a.KZ,d.a.UA,d.a.BY],this.countryIsoCode=this.countryIsoCodeVariants[0],this.labelOutside=!0}}return e.\u0275fac=function(t){return Z(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-phone-international"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:p.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","all-countries",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countries","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryIsoCode","documentationPropertyMode","input-output","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","countries","readOnly","tuiTextfieldCleaner","tuiDropdownDirection","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode","pseudoHovered","pseudoFocused","pseudoInvalid","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,G,8,2,"ng-template",1),s["\u0275\u0275template"](2,j,7,6,"ng-template",1),s["\u0275\u0275template"](3,k,16,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[C.a,y.a,f.a,g,T,F.a,V.a,b.a,w.a,h.a,r.NgControlStatus,r.FormControlDirective,S.b,E.a,D.a,I.b,v.a],encapsulation:2,changeDetection:0}),e})();const Z=s["\u0275\u0275getInheritedFactory"](B);let K=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.FormsModule,r.ReactiveFormsModule,l.TuiInputPhoneInternationalModule,c.a,u.TuiTextfieldControllerModule,u.TuiDropdownControllerModule,u.TuiHintControllerModule,a.h,i.f.forChild(Object(a.o)(B))]]}),e})()}}]);