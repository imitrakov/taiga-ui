(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{gzy9:function(t,n,e){"use strict";e.r(n),n.default='<tui-primitive-textfield\n    #input\n    iconContent="tuiIconSearchLarge"\n    iconAlign="left"\n    class="tui-space_all-2"\n    [tuiTextfieldLabelOutside]="true"\n    [(value)]="value"\n    (keydown.arrowDown.prevent)="onArrowDown(list, $event.target)"\n>\n    Search categories\n</tui-primitive-textfield>\n<hr />\n<tui-data-list\n    #list\n    emptyContent="No results found"\n    (keydown)="onKeyDown($event.key, input.nativeFocusableElement)"\n>\n    <tui-opt-group *ngIf="!value">\n        <button tuiOption [value]="all">All</button>\n        <button *ngFor="let item of items" tuiOption [value]="item.items">\n            {{ item.name }} only\n        </button>\n    </tui-opt-group>\n    <ng-container *ngFor="let item of items">\n        <tui-opt-group\n            *tuiLet="item.items | tuiFilter: filter:value as filtered"\n            [label]="item.name"\n        >\n            <tui-opt-group *ngIf="filtered.length" tuiMultiSelectGroup>\n                <button *ngFor="let item of filtered" tuiOption [value]="item">\n                    {{ item }}\n                </button>\n            </tui-opt-group>\n        </tui-opt-group>\n    </ng-container>\n</tui-data-list>\n'}}]);