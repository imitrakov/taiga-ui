function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function _iterableToArrayLimit(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(l){i=!0,o=l}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return e}}function _arrayWithHoles(t){if(Array.isArray(t))return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{rgiy:function(t,r,e){"use strict";e.r(r),e.d(r,"Image",(function(){return o})),e.d(r,"inputRegex",(function(){return i}));var n=e("jgtz"),i=/!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/,o=n.Node.create({name:"image",defaultOptions:{inline:!1,HTMLAttributes:{}},inline:function(){return this.options.inline},group:function(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes:function(){return{src:{default:null},alt:{default:null},title:{default:null}}},parseHTML:function(){return[{tag:"img[src]"}]},renderHTML:function(t){var r=t.HTMLAttributes;return["img",Object(n.mergeAttributes)(this.options.HTMLAttributes,r)]},addCommands:function(){var t=this;return{setImage:function(r){return function(e){return e.commands.insertContent({type:t.name,attrs:r})}}}},addInputRules:function(){return[Object(n.nodeInputRule)(i,this.type,(function(t){var r=_slicedToArray(t,4),e=r[1];return{src:r[2],alt:e,title:r[3]}}))]}});r.default=o}}]);