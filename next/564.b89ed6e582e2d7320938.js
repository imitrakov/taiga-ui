(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{WOaZ:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {isNumber, TUI_DEFAULT_MATCHER, TuiContextWithImplicit} from '@taiga-ui/cdk';\nimport {Subject, timer} from 'rxjs';\nimport {map, mapTo, shareReplay, startWith, switchMap} from 'rxjs/operators';\n\nconst DICTIONARY = [\n    {id: 1, name: 'Luke Skywalker'},\n    {id: 2, name: 'Princess Leia'},\n    {id: 3, name: 'Darth Vader'},\n    {id: 4, name: 'Han Solo'},\n    {id: 5, name: 'Obi-Wan Kenobi'},\n    {id: 6, name: 'Yoda'},\n];\n\n@Component({\n    selector: 'tui-multi-select-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport class TuiMultiSelectExample4 {\n    // Server request emulation\n    private readonly server$ = timer(5000).pipe(\n        mapTo(DICTIONARY),\n        shareReplay({refCount: true, bufferSize: 1}),\n    );\n\n    private readonly search$ = new Subject<string>();\n\n    // Items only hold IDs\n    readonly items$ = this.search$.pipe(\n        startWith(''),\n        switchMap(search =>\n            this.server$.pipe(\n                map(items =>\n                    items\n                        .filter(({name}) => TUI_DEFAULT_MATCHER(name, search))\n                        .map(({id}) => id),\n                ),\n            ),\n        ),\n        startWith(null), // <-- loading\n    );\n\n    // Stringify mapper that turns IDs to names\n    readonly stringify$ = this.server$.pipe(\n        map(items => new Map(items.map<[number, string]>(({id, name}) => [id, name]))),\n        startWith(new Map()),\n        map(\n            map => (id: number | TuiContextWithImplicit<number>) =>\n                (isNumber(id) ? map.get(id) : map.get(id.$implicit)) || '',\n        ),\n    );\n\n    readonly control = new FormControl([2, 3]);\n\n    onSearch(search: string | null) {\n        this.search$.next(search || '');\n    }\n}\n"}}]);