(this.webpackJsonpedkentmediadesign=this.webpackJsonpedkentmediadesign||[]).push([[0],{113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},241:function(e,t,s){},242:function(e,t,s){},243:function(e,t,s){"use strict";s.r(t);var c=s(3),a=s(103),i=s.n(a),n=s(249),r=(s(113),s(6)),l=(s(114),s(248)),d=(s(115),s(0)),j=function(e){var t=e.sidebarOpen,s=e.closeSidebar;return Object(d.jsxs)("div",{className:t?"sidebar_responsive":"",id:"sidebar",children:[Object(d.jsxs)("div",{className:"sidebar__title",children:[Object(d.jsx)("h1",{children:"LOGO"}),Object(d.jsx)("i",{onClick:function(){return s()},className:"fa fa-times",id:"sidebarIcon","aria-hidden":"true"})]}),Object(d.jsxs)("div",{className:"sidebar__menu",children:[Object(d.jsx)("h2",{children:"Heading 1"}),Object(d.jsxs)("div",{className:"sidebar__link active_menu_link",children:[Object(d.jsx)("i",{className:"fas fa-bars active_menu_link"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 1"})]}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars","aria-hidden":"true"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 2"})]}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars","aria-hidden":"true"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 3"})]}),Object(d.jsx)("h2",{children:"Heading 2"}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars","aria-hidden":"true"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 4"})]}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 5"})]}),Object(d.jsx)("h2",{children:"Heading 3"}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 6"})]}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 7"})]}),Object(d.jsx)("h2",{children:"Heading 4"}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 8"})]}),Object(d.jsxs)("div",{className:"sidebar__link",children:[Object(d.jsx)("i",{className:"fas fa-bars"}),Object(d.jsx)(l.a,{to:"/",children:"Menu Option 9"})]})]}),Object(d.jsxs)("div",{className:"sidebar__link",id:"logout-btn",children:[Object(d.jsx)("i",{className:"fas fa-bars"}),Object(d.jsx)(l.a,{to:"/",children:"Logout"})]})]})},o=s(71),b=function(e){var t=e.img,s=e.num,c=e.type,a=e.toggle,i=e.alt;return Object(d.jsx)("div",{className:function(){var e="card ";return e+=a?"d-none":"d-flex"}(),children:Object(d.jsxs)("div",{className:"card_inner",children:[Object(d.jsx)("div",{style:{marginLeft:"-6px",marginRight:"17px"},children:Object(d.jsx)("img",{src:t,alt:i,style:{width:"55px",height:"55px"}})}),Object(d.jsxs)("p",{className:"font-bold text-title",children:[s,Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"text-black",children:c})]})]})})},m=s(107),x=function(){return Object(d.jsx)(m.a,{data:{labels:["Dec10","Dec11","Dec12","Dec13","Dec14","Dec15","Dec16","Dec17"],datasets:[{label:"Type 1",data:[.13,.27,.28,.35,.43,.59,.67,.81],fill:!1,backgroundColor:"#0d6efd",borderColor:"#0d6efd"},{label:"Type 2",data:[.11,.289,.35,.4,.6,.65,.78,.88],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"},{label:"Type 3",data:[.12,.28,.3,.49,.65,.71,.75,.9],fill:!1,backgroundColor:"#917dcc",borderColor:"#917dcc"}]},options:{scales:{x:{display:!1}},responsive:!0,interaction:{intersect:!1,mode:"index"}}})},h=s(106),O=s(41),p=(s(238),s(239),function(e){var t=e.open,s=Object(c.useState)([{startDate:new Date,endDate:Object(O.default)(new Date,7),key:"selection"}]),a=Object(r.a)(s,2),i=a[0],n=a[1];return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsx)(h.DateRangePicker,{onChange:function(e){return n([e.selection])},editableDateInputs:!0,moveRangeOnFirstSelection:!1,months:2,ranges:i,direction:"horizontal"})})}),u=function(e){var t=e.date,s=Object(c.useState)(!1),a=Object(r.a)(s,2),i=a[0],n=a[1];return Object(d.jsx)("div",{className:"chart",children:Object(d.jsxs)("div",{className:"chart-bg",children:[Object(d.jsxs)("div",{className:"chart-header",children:[Object(d.jsx)("div",{className:"font-bold text-title",children:"Analytics"}),Object(d.jsxs)("div",{className:"chart-header-items",children:[Object(d.jsxs)("div",{className:"calender",onClick:function(){return n(!i)},children:[Object(d.jsx)("span",{children:t}),Object(d.jsx)("i",{className:"fas fa-calendar",style:{color:"#888787"}})]}),Object(d.jsx)("div",{className:"btn-group",children:[{head:"Heading1",num:"24,350"},{head:"Heading2",num:"12,360"},{head:"Heading3",num:"10,671"},{head:"Heading4",num:"6,562"}].map((function(e,t){return Object(d.jsxs)("div",{style:{fontWeight:"bold"},children:[e.head,Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{color:"#aba8a8"},children:e.num})]},t)}))})]})]}),Object(d.jsx)("div",{className:"date-range-calendar",children:Object(d.jsx)(p,{open:i})}),Object(d.jsx)("div",{className:"chartjs",children:Object(d.jsx)(x,{})})]})})},f=function(e){var t=e.icon;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"acc-flex",children:[Object(d.jsx)("img",{src:t,alt:"accordion",style:{marginTop:"-3px",marginLeft:"-9px",width:"24px",height:"24px"}}),Object(d.jsx)("p",{style:{fontSize:"14px",fontWeight:"600px"},children:"Lorem Ipsum is Simply Dummy Text"})]}),[{key:"01",dummyhead:"Lorem Ipsum is Simply Dummy Text",dummytext:"Lorem Ipsum is simply dummy text of the printing.."},{key:"02",dummyhead:"Lorem Ipsum is Simply Dummy Text",dummytext:"Lorem Ipsum is simply dummy text of the printing.."},{key:"03",dummyhead:"Lorem Ipsum is Simply Dummy Text",dummytext:"Lorem Ipsum is simply dummy text of the printing.."},{key:"04",dummyhead:"Lorem Ipsum is Simply Dummy Text",dummytext:"Lorem Ipsum is simply dummy text of the printing.."},{key:"05",dummyhead:"Lorem Ipsum is Simply Dummy Text",dummytext:"Lorem Ipsum is simply dummy text of the printing.."}].map((function(e){return Object(d.jsxs)("div",{className:"acc-flex",children:[Object(d.jsx)("p",{style:{color:"#b4b1b1",fontSize:"10px"},children:e.key}),Object(d.jsxs)("p",{style:{color:"#000",fontSize:"10px"},children:[e.dummyhead,Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{color:"#b4b1b1"},children:e.dummytext})]})]},e.key)}))]})},g=s.p+"static/media/type2.51586cfc.jpg",y=s.p+"static/media/type3.9c1b6a77.jpg",N=s.p+"static/media/type4.35c61d78.jpg",v=s.p+"static/media/acc1.5b8c8898.jpeg",k=s.p+"static/media/acc2.eb64cea8.jpeg",_=s.p+"static/media/acc3.167008e3.jpeg",S=(s(240),s(241),function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),n=Object(r.a)(i,2),l=n[0],j=n[1];return Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"main__container",children:[Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(d.jsx)("button",{className:"accordion-button",type:"button",onClick:function(){return j(!l)},children:"Lorem Ipsum"})}),l&&Object(d.jsx)("div",{className:"accordion-collapse","aria-labelledby":"headingOne",children:Object(d.jsxs)("div",{className:"accordion-body",children:[Object(d.jsx)(f,{icon:v}),Object(d.jsx)(f,{icon:k}),Object(d.jsx)(f,{icon:_})]})})]}),Object(d.jsxs)("div",{className:"main__title",children:[Object(d.jsx)("button",{className:"btn btn-outline-primary mt-10 padding",onClick:function(){return a(!s)},disabled:s,children:"Tab 1"}),Object(d.jsx)("button",{className:"btn btn-outline-primary mt-10 padding mr-14",onClick:function(){return a(!s)},disabled:!s,children:"Tab 2"})]}),Object(d.jsxs)("div",{className:"main__cards",children:[Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card_inner",children:[Object(d.jsx)("div",{style:{width:"58px",height:"58px",marginLeft:"-6px",paddingRight:"12px"},children:Object(d.jsx)(o.a,{value:85,text:"".concat(85,"%"),strokeWidth:13,styles:Object(o.b)({strokeLinecap:"butt",pathColor:"#0d6efd",textColor:"#000"})})}),Object(d.jsxs)("p",{className:"font-bold text-title",children:["50/200",Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"text-black",children:"TYPE1"})]})]})}),Object(d.jsx)(b,{img:g,num:"1356",type:"TYPE2",toggle:"",alt:"card 1"}),Object(d.jsx)(b,{img:y,num:"1258",type:"TYPE3",toggle:s,alt:"card 2"}),Object(d.jsx)(b,{img:N,num:"534",type:"TYPE4",toggle:s,alt:"card 3"})]}),Object(d.jsx)(u,{date:"Sept20, 2020 - Jan15, 2020"})]})})}),w=function(e){var t=e.show;return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsxs)("ul",{className:"dropdown-menu",role:"menu",style:{right:"167px"},children:[Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),"Menu Option 1"]}),Object(d.jsxs)("li",{className:"dropdown-item",style:{border:"none"},children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),"Menu Option 2"]}),Object(d.jsx)("p",{style:{backgroundColor:"white",color:"#0d6efd",padding:"0px 14px",fontSize:"11px",fontWeight:"600"},children:"RESOURCES"}),Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),"Menu Option 3"]}),Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),"Menu Option 4"]})]})})},L=function(e){var t=e.show;return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsxs)("ul",{className:"dropdown-menu",role:"menu",style:{right:"105px",width:"18rem"},children:[Object(d.jsx)("li",{className:"dropdown-item",children:Object(d.jsxs)("div",{className:"acc-flex",style:{marginBottom:"0"},children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),Object(d.jsxs)("p",{style:{color:"#b4b1b1",fontSize:"11px"},children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry",Object(d.jsx)("br",{}),"5 Dec 2020"]})]})}),Object(d.jsx)("li",{className:"dropdown-item",children:Object(d.jsxs)("div",{className:"acc-flex",style:{marginBottom:"0"},children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),Object(d.jsxs)("p",{style:{color:"#b4b1b1",fontSize:"11px"},children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry",Object(d.jsx)("br",{}),"5 Dec 2020"]})]})}),Object(d.jsx)("li",{className:"dropdown-item",children:Object(d.jsxs)("div",{className:"acc-flex",style:{marginBottom:"0"},children:[Object(d.jsx)("i",{class:"fas fa-file-archive",style:{marginRight:"8px"}}),Object(d.jsxs)("p",{style:{color:"#b4b1b1",fontSize:"11px"},children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry",Object(d.jsx)("br",{}),"5 Dec 2020"]})]})})]})})},D=function(e){var t=e.open;return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsxs)("ul",{className:"dropdown-menu",role:"menu",children:[Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-heart-broken",style:{marginRight:"8px"}}),"Menu 1"]}),Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-heart-broken",style:{marginRight:"8px"}}),"Menu 2"]}),Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-heart-broken",style:{marginRight:"8px"}}),"Menu 3"]}),Object(d.jsxs)("li",{className:"dropdown-item",style:{backgroundColor:"#f1f8ff"},children:[Object(d.jsxs)("div",{className:"progress-bar",children:[Object(d.jsx)("span",{style:{color:"#2572fe"},children:"Lorem Ipsum"}),Object(d.jsx)("span",{style:{fontSize:"10px",color:"#9b9797"},children:"(1050/2000)"})]}),Object(d.jsx)("progress",{value:"65",max:"100",style:{height:"12px",width:"190px",marginTop:"7px"}})]}),Object(d.jsxs)("li",{className:"dropdown-item",children:[Object(d.jsx)("i",{class:"fas fa-sign-out-alt",style:{marginRight:"8px"}}),"Logout"]})]})})},C=(s(242),function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),n=Object(r.a)(i,2),l=n[0],j=n[1],o=Object(c.useState)(!1),b=Object(r.a)(o,2),m=b[0],x=b[1];return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar__right",children:[Object(d.jsx)("button",{className:"btn btn-primary",children:"Button1"}),Object(d.jsx)("i",{className:"fas fa-info-circle",style:{fontStyle:"italic"},onClick:function(){return j(!l)}}),Object(d.jsx)(w,{show:l}),Object(d.jsx)("i",{className:"fas fa-bell",onClick:function(){return x(!m)}}),Object(d.jsx)(L,{show:m}),Object(d.jsx)("i",{className:"fas fa-user"}),Object(d.jsxs)("span",{style:{marginLeft:"-9px"},className:"dropdown-toggle","data-toggle":"dropdown",onClick:function(){a(!s)},children:["Jason Statham",Object(d.jsx)("span",{className:"caret"})]}),Object(d.jsx)(D,{open:s})]})})});var I=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(C,{sidebarOpen:s,openSidebar:function(){a(!0)}}),Object(d.jsx)(S,{}),Object(d.jsx)(j,{sidebarOpen:s,closeSidebar:function(){a(!1)}})]})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,250)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),T()}},[[243,1,2]]]);
//# sourceMappingURL=main.13e01b7e.chunk.js.map