(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{Z2a8:function(t,e,n){"use strict";n.r(e),n.d(e,"TextAlign",(function(){return i})),n.d(e,"default",(function(){return i}));const i=n("jgtz").Extension.create({name:"textAlign",defaultOptions:{types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"},addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:t=>t.style.textAlign||this.options.defaultAlignment,renderHTML:t=>t.textAlign===this.options.defaultAlignment?{}:{style:"text-align: "+t.textAlign}}}}]},addCommands(){return{setTextAlign:t=>({commands:e})=>!!this.options.alignments.includes(t)&&this.options.types.every(n=>e.updateAttributes(n,{textAlign:t})),unsetTextAlign:()=>({commands:t})=>this.options.types.every(e=>t.resetAttributes(e,"textAlign"))}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}})}}]);