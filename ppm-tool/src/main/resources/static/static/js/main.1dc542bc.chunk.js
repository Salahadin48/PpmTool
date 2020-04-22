(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},47:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(46),a(7)),s=a(8),m=a(10),i=a(9),p=(a(47),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-body bg-light mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("span",{className:"mx-auto"},"REACT")),r.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},r.a.createElement("h3",null,"Spring / React Project"),r.a.createElement("p",null,"Project to create a Kanban Board with Spring Boot and React")),r.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("a",{href:"#"},r.a.createElement("li",{className:"list-group-item board"},r.a.createElement("i",{className:"fa fa-flag-checkered pr-1"},"  Project Board "))),r.a.createElement("a",{href:"#"},r.a.createElement("li",{className:"list-group-item update"},r.a.createElement("i",{className:"fa fa-edit pr-1"},"  Update Project Info"))),r.a.createElement("a",{href:""},r.a.createElement("li",{className:"list-group-item delete"},r.a.createElement("i",{className:"fa fa-minus-circle pr-1"},"  Delete Project"))))))))}}]),a}(n.Component)),u=(a(48),a(18)),d=a(35),E=a(14),h=a(12),b=a.n(h),v=a(19),j=a(22),f=a.n(j),g=a(37),N=a(38),O=a.n(N),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",projectDescription:"",projectStartDate:"",projectEndDate:""},e.onChange=e.onChange.bind(Object(E.a)(e)),e.onSubmit=e.onSubmit.bind(Object(E.a)(e)),e}return Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,projectDescription:this.state.projectDescription,projectStartDate:this.state.projectStartDate,projectEndDate:this.state.projectEndDate};console.log(t),this.props.createProject(t,this.props.history)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg ",placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Project Description",name:"projectDescription",value:this.state.projectDescription,onChange:this.onChange})),r.a.createElement("h6",null,"Start Date"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"projectStartDate",value:this.state.projectStartDate,onChange:this.onChange})),r.a.createElement("h6",null,"Estimated End Date"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"projectEndDate",value:this.state.projectEndDate,onChange:this.onChange})),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),a}(n.Component);y.protoTypes={createProject:b.a.func.isRequired};var D=Object(v.b)(null,{createProject:function(e,t){return function(){var a=Object(g.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.post("http://localhost:8080/api/project",e);case 3:a.sent,t.push("/dashboard"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(y),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"display-4 text-center"},"Projects"),r.a.createElement("br",null),r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(p,null)))))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"Dashboard.html"},"Personal Project Management Tool"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/dashboard"},"Dashboard"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link ",href:"register.html"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"login.html"},"Login"))))))}}]),a}(n.Component),k=a(13),P=a(6),_=a(40),x={},R=Object(P.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),I={},T=[_.a],B=window.navigator.userAgent.includes("Chrome")?Object(P.e)(R,I,Object(P.d)(P.a.apply(void 0,T),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())):Object(P.e)(R,I,Object(P.d)(P.a.apply(void 0,T))),U=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{store:B},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(k.a,{exact:!0,path:"/dashboard",component:C}),r.a.createElement(k.a,{exact:!0,path:"/addProject",component:D}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1dc542bc.chunk.js.map