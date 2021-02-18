(this["webpackJsonpreact-typeracer-test"]=this["webpackJsonpreact-typeracer-test"]||[]).push([[0],{22:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r,c=t(0),a=t.n(c),i=t(13),o=t.n(i),u=(t(22),t(9)),s=t.n(u),l=t(14),d=t(11),b=t(4),j=t(2),p=t(3),f=t(1),h=p.a.div(r||(r=Object(j.a)(["\n    padding: 16px;\n    line-height: 1.5rem;\n"]))),x=function(e){var n=e.randomParagraph,t=e.textColor;return Object(f.jsx)(h,{children:n.map((function(e,n){return Object(f.jsx)("span",{style:{color:t[n],fontWeight:"red"===t[n]?600:400,opacity:"red"===t[n]?1:.54},children:e})}))})};x.defaultProps={randomParagraph:[],textColor:[]};var O=x,g=function(e){var n=e.timeRemaining;return Object(f.jsxs)("div",{children:["Time Remaining: ",Object(f.jsxs)("strong",{children:[n," secs"]})]})},m=function(e){var n=e.wordPerMinute;return Object(f.jsxs)("div",{children:["Average Speed: ",Object(f.jsxs)("strong",{children:[n," WPM"]})]})};m.defaultProps={wordPerMinute:0};var v,y=m,P=p.a.textarea(v||(v=Object(j.a)(["\n    background-color: transparent;\n    border: 2px solid #f1f1f1;\n    outline: none;\n    height: 8rem;\n    resize: none;\n    padding: 8px;\n    margin: 8px;\n    &:focus{\n        border-color: black;\n    }\n"]))),w=function(e){var n=e.handleInputChange,t=e.isFinished,r=e.textAreaRef;return Object(c.useEffect)((function(){t&&r.current.blur()}),[t]),Object(f.jsx)(P,{ref:r,disabled:t,onChange:n,onPaste:function(e){return e.preventDefault()},placeholder:"Start typing the text above"})};w.defaultProps={handleInputChange:function(){},isFinished:!1,textAreaRef:{}};var S=w,k=function(e){var n=e.completion;return Object(f.jsxs)("div",{children:["Completion: ",Object(f.jsxs)("strong",{children:[Math.floor(100*n),"%"]})]})};k.defaultProps={completion:0};var C,M,I,R,N,E,A,W=k,D=p.a.div(C||(C=Object(j.a)(["\n    height: 100%;\n    margin: 16px;\n"]))),F=p.a.div(M||(M=Object(j.a)(["\n    min-height: 75px;\n    padding: 16px;\n    border: 1px solid grey;\n    border-radius: 4px;\n    margin: 16px 0;\n    border-left: 4px solid grey;\n"]))),J=function(e){var n=e.matches,t=function(e,n){return Number(e.wpm)<Number(n.wpm)};return Object(f.jsxs)(D,{children:[Object(f.jsx)("br",{}),"Match History (Sorted based on score):",n.sort(t).map((function(e){return Object(f.jsxs)(F,{children:[Object(f.jsxs)("div",{children:["Player Name: ",e.playerName]}),Object(f.jsxs)("div",{children:["WPM: ",e.wpm]})]},e.matchId)}))]})},T=t(29),G=p.a.div(I||(I=Object(j.a)(["\n  max-width: 1024px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n"]))),z=p.a.div(R||(R=Object(j.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 16px;\n  width: 100%;\n"]))),B=p.a.button(N||(N=Object(j.a)(["\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 8px;\n  &:focus{\n    border: 1px solid grey;\n  }\n"]))),H=p.a.button(E||(E=Object(j.a)(["\n  background-color: rgb(200,255,200);\n  border-radius: 4px;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 8px;\n  &:focus{\n    border: 1px solid grey;\n  }\n  &:disabled{\n    pointer-events: none;\n    opacity: 0.54;\n    cursor: initial;\n  }\n"]))),q=(p.a.input(A||(A=Object(j.a)(["\n  height: 16px;\n  padding: 4px;\n"]))),"https://fake-type-racer-server.herokuapp.com/matches"),K=function(){var e=Object(c.useState)([]),n=Object(b.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)([]),i=Object(b.a)(a,2),o=i[0],u=i[1],j=Object(c.useState)([]),p=Object(b.a)(j,2),h=p[0],x=p[1],m=Object(c.useState)(null),v=Object(b.a)(m,2),P=v[0],w=v[1],k=Object(c.useState)(null),C=Object(b.a)(k,2),M=C[0],I=C[1],R=Object(c.useState)(0),N=Object(b.a)(R,2),E=N[0],A=N[1],D=Object(c.useState)(0),F=Object(b.a)(D,2),K=F[0],L=F[1],Q=Object(c.useRef)(null),U=Object(c.useRef)(null),V=Object(c.useRef)(0),X=180-P<=0,Y=function(){var e=new Date;U.current=setInterval((function(){X||w(function(e){return Math.floor((new Date-e)/1e3)}(e))}),1e3)},Z=function(){clearInterval(U.current),w(null),V.current=0,U.current=null,A(0),L(0),w(null),I(null),$(),Q.current.value=""},$=function(){fetch("".concat("https://baconipsum.com/api/","?type=").concat("all-meat")).then((function(e){return e.json()})).then((function(e){var n=e.join(" ").replace(/\s{2,}/g," ").split(""),t=n.map((function(e){return"red"}));u(t),r(n)})).catch((function(e){return I(e)}))};return Object(c.useEffect)((function(){return $(),fetch(q).then((function(e){return e.json()})).then((function(e){return x(e)})),function(){clearInterval(U.current)}}),[]),Object(c.useEffect)((function(){K>=1&&(Q.current.blur(),clearInterval(U.current))}),[K]),Object(c.useEffect)((function(){if(X&&clearInterval(U.current),P&&!X){var e=P/60,n=Math.floor(V.current/5/e);A(n),180-P<0&&Z()}}),[P]),Object(f.jsxs)(G,{children:[Object(f.jsxs)(z,{children:[Object(f.jsxs)("span",{children:["Player Name: ",Object(f.jsx)("strong",{children:"Guest"})]}),Object(f.jsx)(g,{timeRemaining:180-P}),Object(f.jsx)(y,{wordPerMinute:E}),Object(f.jsx)(W,{completion:K})]}),M?{error:M}:Object(f.jsx)(O,{textColor:o,randomParagraph:t}),Object(f.jsx)(S,{handleInputChange:function(e){if(!X){U.current||Y();var n=e.target.value.split(""),r=Object(d.a)(o);V.current=0,t.forEach((function(e,t){n[t]?e===n[t]?(r[t]="green",u(r),V.current+=1):(r[t]="red",u(r),V.current+=1):(r[t]="red",u(r))})),L(n.length/t.length)}},isFinished:X,textAreaRef:Q}),Object(f.jsx)(B,{onClick:Z,children:"Retry"}),Object(f.jsx)(H,{disabled:!X,onClick:function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var n,t,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var n={id:Object(T.a)(),wpm:E,playerName:"Guest"};!function(){e.apply(this,arguments)}(q,n),x([].concat(Object(d.a)(h),[n]))},children:"Save Current WPM"}),Object(f.jsx)(J,{matches:h})]})};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(K,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.45d611d6.chunk.js.map