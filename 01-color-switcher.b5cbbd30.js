parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TCaP":[function(require,module,exports) {
function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),r=document.querySelector("body");function d(){timerId=setInterval(()=>{r.style.backgroundColor=t()},1e3)}function n(){console.log("Start"),d(),o.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}function a(){console.log("Stop"),clearInterval(timerId),e.removeAttribute("disabled"),o.setAttribute("disabled","disabled")}e.addEventListener("click",n),o.addEventListener("click",a);
},{}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-08/01-color-switcher.b5cbbd30.js.map