(this["webpackJsonpreact-hw-06-phonebook"]=this["webpackJsonpreact-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={taskList:"PhoneList_taskList__1tVAW",btn:"PhoneList_btn__Cfqcn",enter:"PhoneList_enter__a6RhY",enterActive:"PhoneList_enterActive__H2WEx",exit:"PhoneList_exit__3QnIz",exitActive:"PhoneList_exitActive__13Y6R"}},13:function(e,t,n){e.exports={field:"Filter_field__1zIPT",input:"Filter_input__cEA8N",label:"Filter_label__2ldHV",enter:"Filter_enter__AY7FS",enterActive:"Filter_enterActive__2ctNv",exit:"Filter_exit__3sawY",exitActive:"Filter_exitActive__1E1Ii"}},20:function(e,t,n){e.exports={logo:"Logo_logo__RDsPq",appear:"Logo_appear__3LzeP",appearActive:"Logo_appearActive__2rmAg"}},21:function(e,t,n){e.exports={section:"Section_section__YeuZT",title:"Section_title__3xwRm"}},22:function(e,t,n){e.exports={alert:"Alert_alert__39jUA",enter:"Alert_enter__1PvVI",enterActive:"Alert_enterActive__3Lmi_",exit:"Alert_exit__3S4ea",exitActive:"Alert_exitActive__2ojlt"}},23:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},30:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(16),l=n(3),s=n(4),u=n(6),m=n(5),p={addContact:function(e){return{type:"contact/addContact",payload:{name:e.name,number:e.number}}},removeContact:function(e){return{type:"contact/removeContact",payload:{id:e}}},inputFilterChannge:function(e){return{type:"contact/changeFilter",payload:{filter:e}}}},_=n(43),d=function(e){return function(t){return function(n){Object(u.a)(c,n);var a=Object(m.a)(c);function c(){return Object(l.a)(this,c),a.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){var n=void 0===this.props.isVisible||this.props.isVisible;return r.a.createElement(_.a,{appear:!0,in:n,timeout:500,classNames:e,unmountOnExit:!0},r.a.createElement(t,Object.assign({},this.props,this.state)))}}]),c}(a.Component)}},h=n(20),b=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("h2",{className:b.a.logo},"Phonebook")}}]),n}(a.Component),v=d(b.a)(f),E=n(21),C=n.n(E),g=function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.section},t&&r.a.createElement("h2",{className:C.a.title},t),n))},O=n(45),y=n(12),N=n.n(y),A=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement(O.a,{component:"ul",className:N.a.taskList},t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement(_.a,{key:t,timeout:250,classNames:N.a},r.a.createElement("li",{className:N.a.item},r.a.createElement("p",{style:{display:"inline-block",margin:"10px"}},a," - ",c),r.a.createElement("button",{type:"button",className:N.a.btn,onClick:function(){return n(t)}},"Del")))})))},j=n(15),x=n(7),S=n.n(x),F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state),e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:S.a.form},r.a.createElement("div",{className:S.a.field},r.a.createElement("input",{type:"text",value:t,onChange:this.handleInputChange,className:S.a.input,name:"name",id:"name",placeholder:" "}),r.a.createElement("label",{htmlFor:"name",className:S.a.label},"Name")),r.a.createElement("div",{className:S.a.field},r.a.createElement("input",{type:"tel",value:n,onChange:this.handleInputChange,className:S.a.input,name:"number",id:"tel",placeholder:" "}),r.a.createElement("label",{htmlFor:"tel",className:S.a.label},"Phone number")),r.a.createElement("button",{type:"submit",className:S.a.btn,disabled:""===t},"Add"))}}]),n}(a.Component),L=n(13),k=n.n(L),w=d(k.a)((function(e){var t=e.onSearch;return r.a.createElement("div",{className:k.a.field},r.a.createElement("input",{type:"text",onChange:t,className:k.a.input,name:"filter",id:"filter",placeholder:" "}),r.a.createElement("label",{htmlFor:"filter",className:k.a.label},"Name Search"))})),I=n(22),P=n.n(I),R=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.alert},"This name, already exist in contacts.")}}]),n}(a.Component),V=d(P.a)(R),D=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={alert:!1},e.getSearchContacs=function(){var t=e.props,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.contacts!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var e=this,t=this.state.alert,n=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(g,null,r.a.createElement(V,{isVisible:t}),r.a.createElement(F,{onAddContact:this.props.onAddContact})),n&&r.a.createElement(g,{title:"Contacts"},r.a.createElement(w,{isVisible:n.length>1,onSearch:function(t){return e.props.onFilterChannge(t.target.value)}}),r.a.createElement(A,{contacts:this.getSearchContacs(),onRemoveContact:this.props.onRemoveContact})))}}]),n}(a.Component),T={onAddContact:p.addContact,onRemoveContact:p.removeContact,onFilterChannge:p.inputFilterChannge},J=Object(i.b)((function(e){return{contacts:e.contact.items,filter:e.contact.filter}}),T)(D),U=n(9),Y=n(27),X=n(26),q=n(44),z=n(23),H=function(){var e=localStorage.getItem("contacts");return null===e?(localStorage.setItem("contacts",JSON.stringify(z)),z):JSON.parse(e)},K=Object(U.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H(),t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"contact/addContact":var r=Object(X.a)({id:Object(q.a)()},a);return e.some((function(e){return e.name===a.name}))?e:[r].concat(Object(Y.a)(e));case"contact/removeContact":return e.filter((function(e){return e.id!==a.id}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"contact/changeFilter":return a.filter;default:return e}}}),Q=Object(U.b)({contact:K}),W=Object(U.c)(Q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(40);o.a.render(r.a.createElement(i.a,{store:W},r.a.createElement(J,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"ContactForm_form__1oUPK",field:"ContactForm_field__1vhNe",input:"ContactForm_input__ISPvq",label:"ContactForm_label__3MNQy",btn:"ContactForm_btn__13Rup"}}},[[30,1,2]]]);
//# sourceMappingURL=main.0b688dbe.chunk.js.map