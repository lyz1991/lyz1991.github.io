!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var i={query:e=>document.querySelector(e),append(e,n){e.appendChild(n)},isDomList:e=>e instanceof HTMLCollection,getRangeInContainer(e,n){if(!n)return;let t=n.commonAncestorContainer;if(1==t.nodeType&&t.id==e.id)return!0;for(;t=t.parentNode;)if(1==t.nodeType&&t.id==e.id)return!0;return!1},getNode:e=>1==e.nodeType?e:e.parentNode,insertAfter(e,n){let t=n.parentNode;t.lastChild==n?t.appendChild(e):t.insertBefore(e,n.nextSibling)},trim:e=>e.trim(),remove(e,n){for(let t=0,i=e.children.length;t<i;t++)if(e.children[t].nodeName.toUpperCase()==n.toUpperCase())return e.removeChild(e.children[t])},debounce(e,n){let t;return function(i=!0){if(!i)return e();clearTimeout(t),t=setTimeout(function(){e()},n)}}};class o{constructor(e){let n;if(this.selector=e,e instanceof o)return e;1==e.nodeType&&(n=[e]),"string"==typeof e&&(n=0==e.indexOf("<")?function(e){let n=document.createElement("div");return n.innerHTML=e,n.children}(e):document.querySelectorAll(e));for(let e=0,t=n.length;e<t;e++)this[e]=n[e]}children(e){for(let n=0,t=this[0].children.length;n<t;n++)if(e.toUpperCase()==this[0].children[n].nodeName)return this[0].children[n];return{}}}let a=e=>new o(e);var r={name:"color",tpl:'<li name="color" class="tiptop" content="字体颜色"><i class="i-color"></i> <i class="i-down"></i> </li>',events:[{type:"mouseenter",cb(e){a(e.currentTarget).children("ul").style.display="flex"}},{type:"mouseleave",cb(e){a(e.currentTarget).children("ul").style.display="none"}}]},l={do(e,n,t){document.execCommand(e,!1,n),t.change&&t.change(!1)}},c={saveRange(e){if(!e)return;let n=window.getSelection();n.removeAllRanges(),n.addRange(e)},createRange(e,n=!1,t){const i=document.createRange();n?i.selectNode(e):i.selectNodeContents(e),i.collapse(n),t.orirange=i,this.saveRange(i),i.detach()},initRange(e){const n=document.createRange();n.selectNode(e.container.lastChild),n.collapse(!1),e.orirange=n,this.saveRange(n),n.detach()}},s={name:"bold",tpl:'<li name="bold" class="tipright" content="加粗"><i class="i-bold"></i> </li>',events:[{type:"click",cb(e,n){i.getRangeInContainer(n,n.orirange)&&(c.saveRange(n.orirange),l.do("bold",window.getSelection(),n))}}]},d={name:"italic",tpl:'<li name="italic" class="tipright" content="斜体"><i class="i-italic"></i> </li>',events:[{type:"click",cb(e,n){i.getRangeInContainer(n,n.orirange)&&(c.saveRange(n.orirange),l.do("italic",window.getSelection(),n))}}]},h={name:"strike",tpl:'<li name="strike" class="tipright" content="删除线"><i  class="i-strike"></i> </li>',events:[{type:"click",cb(e,n){i.getRangeInContainer(n,n.orirange)&&(c.saveRange(n.orirange),l.do("StrikeThrough",window.getSelection(),n))}}]},u={name:"formatBlock",events:[{type:"mouseenter",cb(e){a(e.currentTarget).children("ul").style.display="block"}},{type:"mouseleave",cb(e){a(e.currentTarget).children("ul").style.display="none"}}],tpl:'<li name="formatBlock" class="tiptop" content="标签"><i class="i-header"></i><i class="i-down"></i> </li>'},p={name:"horizontal",tpl:'<li name="horizontal" class="tipright" content="分割线"><i class="i-horizontal"></i> </li>',events:[{type:"click",cb(e,n){let t=document.createDocumentFragment(),o=document.createElement("hr");return t.appendChild(o),i.append(t,a("<p><br></p>")[0]),n.orirange?window.getSelection().toString()||n.orirange.commonAncestorContainer?(n.container.appendChild(t),c.initRange(n),n.change(!1)):(i.insertAfter(t,n.orirange.commonAncestorContainer),c.initRange(n),n.change(!1)):(n.container.appendChild(t),c.initRange(n),n.change(!1))}}]};class g{constructor(e,n,t,i){let o=document.createDocumentFragment(),a=document.createElement("ul");a.className="eleContainer",a.style.display="none",o.appendChild(a);for(let n=0,t=e.length;n<t;n++){let t=document.createElement("li");t.setAttribute("value",e[n].value),t.innerHTML=e[n].html,a.appendChild(t)}n.appendChild(o),this.bind(a,t,i)}bind(e,n,t){e.addEventListener("click",function(e){e.currentTarget.style.display="none",e.stopPropagation(),c.saveRange(n.orirange),l.do(t,e.target.getAttribute("value"),n)})}}var m={name:"BackColor",tpl:'<li name="BackColor" class="tiptop" content="背景颜色"><i class="i-bgcolor"></i><i class="i-down"></i> </li>',events:[{type:"mouseenter",cb(e){a(e.currentTarget).children("ul").style.display="flex"}},{type:"mouseleave",cb(e){a(e.currentTarget).children("ul").style.display="none"}}]};const v=["red","orange","yellow","green","cyan","blue","purple","pink","gray","brown","yellowgreen","skyblue"];var f={init(e,n,t){let i=document.createDocumentFragment(),o=document.createElement("ul");o.className="color-container",i.appendChild(o);for(let e=0;e<v.length;e++){let n=document.createElement("li");n.className="color-item",n.style.backgroundColor=v[e],o.appendChild(n)}e.appendChild(i),this.bind(n,o,t)},bind(e,n,t){n.addEventListener("click",n=>{if(i.getRangeInContainer(e,e.orirange)){let i=n.target.style.backgroundColor;n.target.parentNode.style.display="none",c.saveRange(e.orirange),l.do(t,i,e)}})}},y={name:"face",tpl:'<li name="face" class="tipright" content="插入表情"><i class="i-face"></i> </li>',events:[{type:"click",cb(e,n){i.getRangeInContainer(n,n.orirange)&&(c.saveRange(n.orirange),this.active||(this.active=!0,l.do("italic",window.getSelection(),n)))}}],active:!1};class b{init(e,n,t){if(!window.Dialog)return document.body.appendChild(a(`<div class="dialog" id="dialog">${e}</div>`)[0]),this.id=document.getElementById("dialog"),this.bind(t),n&&n(),this.prevent(),window.Dialog=this;window.Dialog.show(e,n)}show(e,n){this.id.innerHTML=e,this.id.style.display="block",n&&n(),this.prevent(e)}bind(e){this.id.addEventListener("click",function(){window.Dialog.hide(e)})}prevent(){this.id.children[0].addEventListener("click",function(e){e.stopPropagation()})}hide(e){this.id.style.display="none",e&&e()}}var C={name:"href",active:!1,tpl:'<li name="href" class="tipright" content="超链接"><i class="i-href"></i> </li>',events:[{type:"click",cb(e,n){(new b).init('<div class="container">\n<h3>插入链接</h3>\n<span class="close">\n<i class="i-close" id="close"></i>\n</span>\n<div class="item">\n<span><i class="i-href"></i></span>\n<input type="text" id="href"/> \n</div>\n<div class="item">\n<span><i class="i-charactor"></i></span>\n<input type="text" id="val"> \n</div>\n<button id="sure">确定</button></div>',function(){document.getElementById("sure").addEventListener("click",function(){window.Dialog.hide(),c.saveRange(n.orirange),(()=>!(!document.querySelector("#href").value||!document.querySelector("#val").value))()&&l.do("insertHTML",`<a href="${document.getElementById("href").value}">${document.getElementById("val").value}</a>`,n)}),document.getElementById("close").addEventListener("click",function(){window.Dialog.hide(),c.saveRange(n.orirange)})},function(){n.container.focus()})}}]},w={name:"font",tpl:'<li name="font" class="tiptop" content="字体"><i class="i-font"></i><i class="i-down"></i> </li>',active:!1,events:[{type:"mouseenter",cb(e){this.active=!1,a(e.currentTarget).children("ul").style.display=this.active?"none":"block"}},{type:"mouseleave",cb(e){this.active=!0,a(e.currentTarget).children("ul").style.display=this.active?"none":"block"}}]},k={name:"undo",tpl:'<li name="undo" class="tipright" content="撤销"><i class="i-undo"></i> </li>',events:[{type:"click",cb(e,n){i.getRangeInContainer(n,n.orirange)&&(c.saveRange(n.orirange),n.record.length>1&&n.record.pop(),n.container.innerHTML=n.record[n.record.length-1],c.initRange(n))}}]},R={name:"quote",tpl:'<li name="quote" class="tipright" content="引用"><i  class="i-quote"></i> </li>',events:[{type:"click",cb(e,n){i.getRangeInContainer(n,n.orirange)&&(c.saveRange(n.orirange),l.do("formatBlock","<BLOCKQUOTE>",n))}}]},E={name:"publish",tpl:'<li name="publish"><i class="i-publish"></i>发布文章 </li>',events:[{type:"click",cb(e,n){n.publish()}}]};const L=e=>`<div class="imgContainer">\n<img src="${e}">\n</div>`;var T={name:"upload",tpl:'<li name="upload" class="tipright" content="插入图片"><i class="i-upload"></i></li>',events:[{type:"click",cb(e,n){(new b).init('<div class="container">\n<h3>插入图片</h3>\n<span class="close">\n<i class="i-close" id="close"></i>\n</span>\n<div class="item inputitem">\n点击上传图片(可多张)\n<input type="file" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"/> \n</div>\n<button id="sure">确定</button></div>',function(){document.querySelector('input[type="file"]').addEventListener("change",function(){let e=this;for(let t=0,i=this.files.length;t<i;t++){let i=new FileReader;i.onload=function(){n.container.appendChild(a(L(this.result))[0]),c.initRange(n),n.imgupload&&n.imgupload(this.result,e.files)},i.readAsDataURL(this.files[t])}window.Dialog.hide()}),document.getElementById("sure").addEventListener("click",function(){window.Dialog.hide(),c.saveRange(n.orirange)}),document.getElementById("close").addEventListener("click",function(){window.Dialog.hide(),c.saveRange(n.orirange)})},function(){n.container.focus()})}}]};class B{constructor(e,n){this.bold=s,this.italic=d,this.strike=h,this.formatBlock=u,this.color=r,this.horizontal=p,this.BackColor=m,this.href=C,this.upload=T,this.face=y,this.undo=k,this.font=w,this.quote=R,this.publish=E,this.init(e,n),f.init(i.query("li[name='color']"),e,"ForeColor"),f.init(i.query("li[name='BackColor']"),e,"BackColor")}init(e,n){let t=document.createDocumentFragment();for(let e of n.menus)i.append(t,a(this[e].tpl)[0]);i.append(e.configContainer,t),new g([{html:"H1",value:"<h1>"},{html:"H2",value:"<h2>"},{html:"H3",value:"<h3>"},{html:"H4",value:"<h4>"}],e.configContainer.querySelector("li[name='formatBlock']"),e,"formatBlock"),new g([{html:"宋体",value:"宋体"},{html:"微软雅黑",value:"微软雅黑"},{html:"Arial",value:"Arial"}],e.configContainer.querySelector("li[name='font']"),e,"FontName"),this.bind(e,n)}bind(e,n){for(let t of n.menus){let n=e.configContainer.querySelector(`li[name=${t}]`);this[t].events.forEach(t=>{n.addEventListener(t.type,n=>{t.cb(n,e)})})}}}t(2),new class{constructor(e,n,t={}){this.container=i.query(e),this.id=this.container.id,this.configContainer=i.query(n),this.compositioning=!1,this.imgupload=t.imgupload,this.change=i.debounce(()=>{this.compositioning||this.container.innerHTML!=this.record[this.record.length-1]&&(this.record.push(this.container.innerHTML),t.change&&t.change())},500),this.publish=t.publish,this.container.focus(),this.record=["<p><br></p>"],this.orirange=window.getSelection().getRangeAt(0),new B(this,t),this._initDom(e),this._bindEvent(this)}_initDom(e){i.append(this.container,a("<p><br></p>")[0])}_bindEvent(e){this.container.addEventListener("mousedown",e=>{this.container.addEventListener("mouseleave",e=>{this.orirange=window.getSelection().getRangeAt(0)})}),this.container.addEventListener("compositionstart",()=>{e.compositioning=!0}),this.container.addEventListener("compositionend",()=>{e.compositioning=!1,e.compositioning||this.checkHtml(e)}),this.container.addEventListener("keyup",n=>{e.compositioning||this.checkHtml(e)}),this.container.addEventListener("keydown",n=>{if(this.orirange=window.getSelection().getRangeAt(0),8==n.keyCode&&"<p><br></p>"==i.trim(this.container.innerHTML)&&n.preventDefault(),13==n.keyCode){n.preventDefault();const t=a("<p><br></p>")[0];this.orirange.commonAncestorContainer.childNodes.length&&"BR"==this.orirange.commonAncestorContainer.childNodes[0].nodeName||this.orirange.commonAncestorContainer.id==this.id?i.append(e.container,t):i.insertAfter(t,this.orirange.commonAncestorContainer),"BLOCKQUOTE"==this.orirange.commonAncestorContainer.nodeName&&i.remove(e.container,"BLOCKQUOTE"),c.createRange(t,!1,e)}})}checkHtml(e){if(this.orirange=window.getSelection().getRangeAt(0),""==i.trim(this.container.innerHTML)){const n=a("<p><br></p>")[0];i.append(e.container,n),c.createRange(n,!1,e)}this.change()}}("#editor","#config",{menus:["formatBlock","bold","italic","strike","horizontal","color","BackColor","href","upload","face","font","undo","quote","publish"],change(){},imgupload(e,n){},publish(){document.querySelector("#content").innerHTML=document.querySelector("#editor").innerHTML,document.querySelector("#editor").innerHTML=""}})},,function(e,n,t){}]);