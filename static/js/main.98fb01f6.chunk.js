(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),o=c.n(s),i=c(2),r=(c(4),c(0));var u=function(e){var t=e.val,c=e.chooseSquare;return Object(r.jsx)("div",{className:"square",onClick:c,children:t})},j=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];var l=function(){var e=Object(n.useState)(["","","","","","","","",""]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("O"),o=Object(i.a)(s,2),l=o[0],f=o[1],b=Object(n.useState)({winner:"none",status:"none"}),O=Object(i.a)(b,2),h=O[0],v=O[1];Object(n.useEffect)((function(){x(),S(),f("X"==l?"O":"X")}),[c]),Object(n.useEffect)((function(){"none"!=h.status&&(alert("Game Finished! Winning Player: ".concat(h.winner)),m())}),[h]);var d=function(e){a(c.map((function(t,c){return e==c&&""==t?l:t})))},x=function(){j.forEach((function(e){var t=c[e[0]];if(""!=t){var n=!0;e.forEach((function(e){c[e]!=t&&(n=!1)})),1==n&&v({winner:l,status:"won"})}}))},S=function(){var e=!0;c.forEach((function(t){""==t&&(e=!1)})),e&&v({winner:"No One.",status:"tie"})},m=function(){a(["","","","","","","","",""]),f("O")};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title",children:"TicTacToe Game in ReactJs"}),Object(r.jsxs)("div",{className:"playerStatus",children:["Player to play: ",l]}),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"board",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(u,{val:c[0],chooseSquare:function(){d(0)}}),Object(r.jsx)(u,{val:c[1],chooseSquare:function(){d(1)}}),Object(r.jsx)(u,{val:c[2],chooseSquare:function(){d(2)}})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(u,{val:c[3],chooseSquare:function(){d(3)}}),Object(r.jsx)(u,{val:c[4],chooseSquare:function(){d(4)}}),Object(r.jsx)(u,{val:c[5],chooseSquare:function(){d(5)}})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(u,{val:c[6],chooseSquare:function(){d(6)}}),Object(r.jsx)(u,{val:c[7],chooseSquare:function(){d(7)}}),Object(r.jsx)(u,{val:c[8],chooseSquare:function(){d(8)}})]})]})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),f()},4:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.98fb01f6.chunk.js.map