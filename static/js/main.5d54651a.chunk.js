(this.webpackJsonpcurrentweather=this.webpackJsonpcurrentweather||[]).push([[0],{14:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(23),s=c.n(a),j=(c(14),c(2)),i=c(7),o=c.n(i),u=c(10),l=c(5),b=c(6),h=c(11),d=c.n(h),O=c(1),x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(l.a)(a,2),j=s[0],i=s[1],h=Object(n.useState)(""),x=Object(l.a)(h,2),m=x[0],p=x[1],v=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://travelbriefing.org/countries.json");case 3:t=e.sent,r(t.data),i(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[]);return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)("h1",{className:"cursornone",children:"Select for current weather"}),Object(O.jsx)("br",{}),j?Object(O.jsx)("h2",{children:"loading..."}):Object(O.jsxs)("select",{className:"dropdown",onChange:function(e){p(e.target.value)},children:[Object(O.jsx)("option",{value:"0",children:"Please select country"}),c.map((function(e,t){return Object(O.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(O.jsx)("br",{}),Object(O.jsx)(b.b,{to:"/".concat(m),children:Object(O.jsx)("button",{className:"search",children:"search"})})]})})},m=function(e){var t=e.country,c=e.temp,n=e.cloud,r=e.uv,a=e.humidity,s=e.text,j=e.icon;return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"result",children:[Object(O.jsx)("img",{src:j,alt:s}),Object(O.jsx)("h1",{children:t}),Object(O.jsx)("h2",{children:s}),Object(O.jsx)("br",{}),Object(O.jsxs)("h2",{className:"nobold",children:["temperature: ",c,"\xb0C"]}),Object(O.jsxs)("h2",{className:"nobold",children:["cloud: ",n,"%"]}),Object(O.jsxs)("h2",{className:"nobold",children:["uv index: ",r]}),Object(O.jsxs)("h2",{className:"nobold",children:["humidity: ",a,"%"]}),Object(O.jsx)("br",{})]}),Object(O.jsx)(b.b,{to:"/",children:Object(O.jsx)("button",{className:"gohome",children:"go home"})})]})},p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(l.a)(a,2),i=s[0],b=s[1],h=Object(j.g)().city,x=function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.weatherapi.com/v1/current.json?key=aa0ba9a997824d67ae1111340211711&q=".concat(t));case 3:c=e.sent,r(c.data),b(!1),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(h)}),[h]),Object(O.jsx)("div",{children:i?Object(O.jsx)("div",{className:"loading",children:Object(O.jsx)("h1",{children:"loading..."})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(m,{country:c.location.country,temp:c.current.temp_c,cloud:c.current.cloud,uv:c.current.uv,humidity:c.current.humidity,text:c.current.condition.text,icon:c.current.condition.icon})})})},v=function(){return Object(O.jsx)("div",{className:"nav",children:Object(O.jsx)("h1",{children:Object(O.jsx)(b.b,{to:"/",children:Object(O.jsx)("h3",{children:"Current Weather App"})})})})};function f(){var e="Copyright \xa9 "+(new Date).getFullYear()+" Current Weather App";return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("footer",{className:"cursornone",children:e})})}var g=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",element:Object(O.jsx)(x,{})}),Object(O.jsx)(j.a,{path:":city",element:Object(O.jsx)(p,{})})]}),Object(O.jsx)(f,{})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(g,{})})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.5d54651a.chunk.js.map