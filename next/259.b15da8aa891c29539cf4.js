(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{p9Bu:function(t,n,e){"use strict";e.r(n),n.default='<form\n    *tuiLet="items$ | async as items"\n    class="b-form"\n    [tuiTextfieldCleaner]="true"\n>\n    <tui-combo-box\n        tuiTextfieldSize="s"\n        [formControl]="testValue"\n        [valueContent]="content"\n        (searchChange)="onSearchChange($event)"\n    >\n        Find the best employees\n        <input\n            tuiTextfield\n            placeholder="Type a name"\n            (input)="onSearchChange($event.target.value)"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n            [itemContent]="content"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n    <tui-combo-box\n        tuiTextfieldSize="m"\n        class="tui-space_vertical-5"\n        [formControl]="testValue"\n        [valueContent]="content"\n    >\n        Find the best employees\n        <input\n            tuiTextfield\n            placeholder="Type a name"\n            (input)="onSearchChange($event.target.value)"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n            [itemContent]="content"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n    <tui-combo-box [formControl]="testValue" [valueContent]="content">\n        Choose a developer\n        <input\n            tuiTextfield\n            placeholder="Type a name"\n            (input)="onSearchChange($event.target.value)"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n            [itemContent]="content"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n\n<ng-template #content let-data>\n    <div class="template">\n        <tui-avatar\n            size="xs"\n            class="avatar"\n            [avatarUrl]="data.avatarUrl || null"\n            [text]="data.toString()"\n        ></tui-avatar>\n        <div class="name">{{data}}</div>\n    </div>\n</ng-template>\n'}}]);