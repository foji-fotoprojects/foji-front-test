(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,a){e.exports=a(89)},63:function(e,t,a){},64:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(42),l=a.n(r),s=(a(63),a(3)),i=a(4),o=a(6),u=a(5),m=a(7),p=(a(64),a(35)),h=a(15),E=a(44),b=a.n(E),f=a(45),j=a(46),d=a(10);var v=Object(h.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userId:null,name:!1,avatar:"./images/user-black.png"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECT":return Object(d.a)({},e,{fetching:!0});case"FETCH_PROJECT_REJECTED":return Object(d.a)({},e,{fetching:!1,error:t.payload});case"FETCH_PROJECT_FULFILLED":return Object(d.a)({},e,{fetching:!1,fetched:!0,project:t.payload});case"SET_PROJECT_NAME":return Object(d.a)({},e,{project:Object(d.a)({},e.project,{name:t.payload})});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{project:null,fetching:!1,fetched:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECT":return Object(d.a)({},e,{fetching:!0});case"FETCH_PROJECT_REJECTED":return Object(d.a)({},e,{fetching:!1,error:t.payload});case"FETCH_PROJECT_FULFILLED":return Object(d.a)({},e,{fetching:!1,fetched:!0,project:t.payload});case"SET_PROJECT_NAME":return Object(d.a)({},e,{project:Object(d.a)({},e.project,{name:t.payload})});default:return e}},projectData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{project:null,fetching:!1,fetched:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECT":return Object(d.a)({},e,{fetching:!0});case"FETCH_PROJECT_REJECTED":return Object(d.a)({},e,{fetching:!1,error:t.payload});case"FETCH_PROJECT_FULFILLED":return Object(d.a)({},e,{fetching:!1,fetched:!0,project:t.payload});case"SET_PROJECT_NAME":return Object(d.a)({},e,{project:Object(d.a)({},e.project,{name:t.payload})});default:return e}}}),O=Object(h.a)(j.a,f.a,b.a),C=Object(h.d)(v,O),_=a(9),g=(a(79),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:this.props.isMenuOpen?"navbar menu-open":"navbar"},c.a.createElement("ul",{className:"menu"},this.props.children))}}]),t}(c.a.Component)),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("li",null,c.a.createElement(_.b,{className:this.props.active?"nav-link active":"nav-link",to:this.props.href},this.props.children))}}]),t}(c.a.Component),N=a(39);function k(e){return window.location.pathname===e}var w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,this.props.children,c.a.createElement("footer",{className:"card-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"rights-mobile"},"\xa9 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"),c.a.createElement(g,null,c.a.createElement(y,{href:"/",active:k("/")},"\u0424\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u044b"),c.a.createElement(y,{href:"/past",active:k("/past")},"\u041f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435"),c.a.createElement(y,{href:"/about",active:k("/about")},"\u041e \u043d\u0430\u0441"),c.a.createElement(y,{href:"/contact",active:k("/contact")},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c")),c.a.createElement(g,null,c.a.createElement(y,{href:"/",active:k("/")},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),c.a.createElement(y,{href:"/past",active:k("/past")},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),c.a.createElement(y,{href:"/about",active:k("/about")},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0434\u043b\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432")),c.a.createElement("div",{className:"footer-socials menu"},c.a.createElement("div",{className:"footer-socials-title"},"\u041c\u044b \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445"),c.a.createElement("div",{className:"footer-socials-logo"},c.a.createElement("a",{className:"vk",href:"https://vk.com"},c.a.createElement(N.a,{src:"./images/vk.svg",alt:""})),c.a.createElement("a",{className:"inst",href:"https://www.instagram.com"},c.a.createElement(N.a,{src:"./images/inst.svg",alt:""})))),c.a.createElement("div",{className:"telephone-and-rights"},c.a.createElement("a",{className:"telephone",href:"tel:+79876543221"}," +7 (987) 654-32-21"),c.a.createElement("div",{className:"rights-desktop"},"\xa9 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b")))))}}]),t}(c.a.Component),T=a(24),H=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2.29013 18.6243C2.27873 18.4723 2.27303 18.3203 2.27303 18.1664C2.27303 14.3987 5.65693 11.3359 9.81793 11.3359C13.9789 11.3359 17.3628 14.4006 17.3628 18.1664C17.3628 18.3203 17.3571 18.4723 17.3457 18.6243H18.6301C18.6396 18.4723 18.6434 18.3203 18.6434 18.1664C18.6434 17.0625 18.4059 15.9909 17.9404 14.9839C17.492 14.0149 16.8517 13.1466 16.0366 12.4018C14.7446 11.2219 13.1258 10.4543 11.3702 10.1693C13.4659 9.50427 14.9897 7.53017 14.9897 5.20457C14.9897 2.33937 12.6698 0.00427246 9.81793 0.00427246C6.96603 0.00427246 4.64613 2.33937 4.64613 5.20837C4.64613 7.53397 6.16993 9.50807 8.26563 10.1731C6.50813 10.4581 4.88933 11.2257 3.59923 12.4056C2.78413 13.1504 2.14383 14.0187 1.69543 14.9877C1.22803 15.9947 0.992432 17.0663 0.992432 18.1702C0.992432 18.3241 0.996232 18.4761 1.00573 18.6281L2.29013 18.6243ZM5.96663 5.20837C5.96663 3.07087 7.69373 1.33237 9.81793 1.33237C11.9421 1.33237 13.6692 3.07087 13.6692 5.20837C13.6692 7.34587 11.9421 9.08437 9.81793 9.08437C7.69373 9.08437 5.96663 7.34397 5.96663 5.20837Z",fill:"black"}))}}]),t}(c.a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.user.id?c.a.createElement(_.b,{className:this.props.active?"layout-user active":"layout-user",to:"/profile"},c.a.createElement("div",{className:"layout-user__avatar",style:{background:'url("./images/user-black.png")',"background-size":"cover"}}),c.a.createElement("div",{className:"layout-user__user-text"},c.a.createElement("div",{className:"layout-user__user-name"},this.props.user.name))):c.a.createElement("div",{className:this.props.active?"layout-user active":"layout-user"},c.a.createElement("div",{className:"layout-user__avatar"},c.a.createElement(H,null)),c.a.createElement("div",{className:"layout-user__login layout-user__user-text"},"\u0412\u0445\u043e\u0434"),c.a.createElement("div",{className:"layout-user__sign-in layout-user__user-text"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))}}]),t}(c.a.Component);var F=Object(T.a)(function(e){return{user:e.user}})(M),J=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("svg",{width:"64",height:"41",viewBox:"0 0 64 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M0.0583031 0H43.2673V5.40275H5.51288V13.3384H15.5475V18.7347H5.51288V31.2699H0L0.0583031 0Z",fill:"black"}),c.a.createElement("path",{d:"M31.2569 9.33497C32.7661 9.29795 34.2672 9.56694 35.6697 10.1257C37.0722 10.6845 38.3469 11.5216 39.4172 12.5864C40.4874 13.6511 41.3309 14.9216 41.8969 16.3212C42.4628 17.7208 42.7395 19.2206 42.7102 20.73C42.7493 22.2405 42.4809 23.7432 41.9213 25.1468C41.3618 26.5504 40.5227 27.8256 39.4552 28.895C38.3876 29.9643 37.1139 30.8055 35.7112 31.3675C34.3086 31.9294 32.8063 32.2003 31.2957 32.1638C29.7854 32.1994 28.2836 31.9278 26.8814 31.3656C25.4791 30.8033 24.2057 29.9621 23.1384 28.8929C22.071 27.8237 21.2319 26.5489 20.6721 25.1457C20.1122 23.7425 19.8432 22.2402 19.8813 20.73C19.8505 19.2268 20.1236 17.7328 20.6841 16.3377C21.2446 14.9425 22.0811 13.6749 23.1433 12.6109C24.2056 11.5468 25.4718 10.7082 26.8659 10.1453C28.2601 9.58235 29.7536 9.30674 31.2569 9.33497ZM31.2957 27.2081C32.152 27.2285 33.0036 27.0749 33.7988 26.7565C34.5939 26.4382 35.3162 25.9618 35.9219 25.3561C36.5276 24.7505 37.004 24.0282 37.3223 23.233C37.6407 22.4378 37.7943 21.5863 37.7739 20.73C37.7739 19.0119 37.0913 17.3641 35.8765 16.1493C34.6616 14.9344 33.0138 14.2519 31.2957 14.2519C29.5776 14.2519 27.9299 14.9344 26.715 16.1493C25.5001 17.3641 24.8176 19.0119 24.8176 20.73C24.7925 21.5875 24.943 22.4411 25.2596 23.2384C25.5763 24.0357 26.0526 24.7599 26.6592 25.3665C27.2658 25.9731 27.99 26.4494 28.7873 26.7661C29.5846 27.0828 30.4382 27.2332 31.2957 27.2081Z",fill:"black"}),c.a.createElement("path",{d:"M47.7567 9.98278H53.1853V31.5419C53.1853 38.8493 47.0765 41 44.116 41L0 40.9611V35.7398H43.4034C44.9452 35.7398 47.7632 34.0166 47.7632 30.4731L47.7567 9.98278ZM47.7567 0H53.1853V5.48049H47.7567V0Z",fill:"black"}),c.a.createElement("path",{d:"M57.6553 0H63.0904V5.48049H57.6553V0ZM57.6553 9.95687H63.0904V31.0043H57.6553V9.95687Z",fill:"black"}))}}]),t}(c.a.Component),R=a(55),L=a(56),P=a(57),V=a(86),Z=R.bind(V),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={isMenuOpen:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("header",{className:Z(this.props.isMain&&"header-main")},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:Z("layout-header__menu-button")},c.a.createElement(L.a,{icon:P.a,onClick:function(){return e.switchMenu()}})),c.a.createElement(_.b,{className:"layout-header__logo",to:"/"},c.a.createElement(J,null)),c.a.createElement(g,{isMenuOpen:this.state.isMenuOpen},c.a.createElement(y,{href:"/",active:k("/")},"\u0424\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u044b"),c.a.createElement(y,{href:"/past",active:k("/past")},"\u041f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435"),c.a.createElement(y,{href:"/about",active:k("/about")},"\u041e \u043d\u0430\u0441"),c.a.createElement(y,{href:"/contact",active:k("/contact")},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c")),c.a.createElement(F,{active:k("/user")})))}},{key:"switchMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}}]),t}(c.a.Component),D=(a(87),{id:1,tags:["\u0414\u043b\u044f \u043f\u0430\u0440","\u041d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0435"],title:"\u0417\u0438\u043c\u043d\u044f\u044f Love Story"}),I=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement("main",{className:"project"},c.a.createElement("div",{className:"container"},c.a.createElement(_.b,{className:"project__link-back",to:"/"},"< \u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432"),c.a.createElement("div",{className:"project__tags"},D.tags.map(function(e){return c.a.createElement("div",{className:"project__tag"},e)})),c.a.createElement("div",{className:"project__head"},c.a.createElement("div",{className:"project__title"},D.title)))))}}]),t}(c.a.Component),S=(a(88),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{isMain:!0}),c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},"\u0433\u043b\u0430\u0432\u043d\u0430\u044f")))}}]),t}(c.a.Component)),A=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{store:C},c.a.createElement(_.d,{history:_.e},c.a.createElement(_.c,{path:"/",component:w},c.a.createElement(_.a,{component:S}),c.a.createElement(_.c,{path:"past",component:I}),c.a.createElement(_.c,{path:"about",component:I}),c.a.createElement(_.c,{path:"contacts",component:I}),c.a.createElement(_.c,{path:"*",component:I}))))}}]),t}(n.Component);l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.a380d718.chunk.js.map