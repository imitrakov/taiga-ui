(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{"yrs+":function(t,n,e){"use strict";e.r(n),n.default='<tui-scrollbar>\n    <cdk-virtual-scroll-viewport\n        #viewport\n        tuiScrollable\n        class="viewport tui-zero-scrollbar"\n        [itemSize]="45"\n        [maxBufferPx]="500"\n        [minBufferPx]="400"\n    >\n        <table tuiTable [columns]="columns">\n            <thead>\n                <tr tuiThGroup>\n                    <th\n                        *tuiHead="\'name\'"\n                        tuiTh\n                        [sticky]="true"\n                        [style.top.px]="-viewport[\'_renderedContentOffset\']"\n                    >\n                        Name\n                    </th>\n                    <th\n                        *tuiHead="\'dob\'"\n                        tuiTh\n                        [sticky]="true"\n                        [style.top.px]="-viewport[\'_renderedContentOffset\']"\n                    >\n                        Date of Birth\n                    </th>\n                    <th\n                        *tuiHead="\'age\'"\n                        tuiTh\n                        [sticky]="true"\n                        [sorter]="ageSorter"\n                        [style.top.px]="-viewport[\'_renderedContentOffset\']"\n                    >\n                        Age\n                    </th>\n                </tr>\n            </thead>\n            <tbody tuiTbody>\n                <tr *cdkVirtualFor="let item of data | tuiTableSort" tuiTr>\n                    <td *tuiCell="\'name\'" tuiTd>{{item.name}}</td>\n                    <td *tuiCell="\'dob\'" tuiTd>{{item.dob}}</td>\n                    <td *tuiCell="\'age\'" tuiTd>{{getAge(item)}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </cdk-virtual-scroll-viewport>\n</tui-scrollbar>\n'}}]);