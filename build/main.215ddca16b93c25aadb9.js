(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("L1EO");const e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];const i={startBtn:document.querySelector("button[data-action='start']"),stopBtn:document.querySelector("button[data-action='stop']"),body:document.querySelector("body")},r=new class{constructor({changeColor:t}){this.intervalId=null,this.isActive=!1,this.changeColor=t,this.init()}init(){this.changeColor(e[0])}start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{const t=this.randomIntegerFromInterval(1,e.length);console.log("ColorSwitch ~ this.intervalId=setInterval ~ colorIndex",t),this.changeColor(e[t])},1e3))}stop(){clearInterval(this.intervalId),this.isActive=!1}randomIntegerFromInterval(t,n){return Math.floor(Math.random()*(n-t+1)+t)}}({changeColor:function(t){i.body.style.backgroundColor=t}});i.startBtn.addEventListener("click",r.start.bind(r)),i.stopBtn.addEventListener("click",r.stop.bind(r))}},[["QfWi",1]]]);
//# sourceMappingURL=main.215ddca16b93c25aadb9.js.map