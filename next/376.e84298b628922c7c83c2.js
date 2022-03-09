(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{EPWG:function(n,e,i){"use strict";i.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiNotificationsService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-inline-example-2',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n    styleUrls: ['./style.less'],\n})\nexport class TuiInputInlineExample2 {\n    heading = 'Page heading';\n    editing = false;\n\n    constructor(\n        @Inject(TuiNotificationsService)\n        private readonly notifications: TuiNotificationsService,\n    ) {}\n\n    toggle() {\n        this.editing = !this.editing;\n    }\n\n    onFocusedChange(focused: boolean) {\n        if (!focused) {\n            this.editing = false;\n            this.saveHeading(this.heading);\n        }\n    }\n\n    private saveHeading(newHeading: string) {\n        this.notifications.show(newHeading, {label: 'New heading'}).subscribe();\n    }\n}\n"}}]);