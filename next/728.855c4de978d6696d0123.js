(window.webpackJsonp=window.webpackJsonp||[]).push([[728],{"23jx":function(e,n,t){"use strict";t.r(n),n.default='<tui-tree\n    [tuiTreeController]="true"\n    [value]="data"\n    [content]="content"\n    [childrenHandler]="handler"\n></tui-tree>\n\n<ng-template #content let-value let-node="node">\n    <div class="wrapper" [style.opacity]="1 / node.level">\n        <tui-svg *ngIf="value.icon" [src]="value.icon"></tui-svg>\n        {{value.text}}\n    </div>\n</ng-template>\n'}}]);