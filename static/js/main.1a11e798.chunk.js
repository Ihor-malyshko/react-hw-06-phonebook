(this["webpackJsonpreact-hw-06-phonebook"]=this["webpackJsonpreact-hw-06-phonebook"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={form:"ContactForm_form__1oUPK",field:"ContactForm_field__1vhNe",input:"ContactForm_input__ISPvq",label:"ContactForm_label__3MNQy",btn:"ContactForm_btn__13Rup"}},,,,,function(e,t,n){e.exports={taskList:"PhoneList_taskList__1tVAW",btn:"PhoneList_btn__Cfqcn",enter:"PhoneList_enter__a6RhY",enterActive:"PhoneList_enterActive__H2WEx",exit:"PhoneList_exit__3QnIz",exitActive:"PhoneList_exitActive__13Y6R"}},function(e,t,n){e.exports={field:"Filter_field__1zIPT",input:"Filter_input__cEA8N",label:"Filter_label__2ldHV",enter:"Filter_enter__AY7FS",enterActive:"Filter_enterActive__2ctNv",exit:"Filter_exit__3sawY",exitActive:"Filter_exitActive__1E1Ii"}},,,function(e,t,n){e.exports={logo:"Logo_logo__RDsPq",appear:"Logo_appear__3LzeP",appearActive:"Logo_appearActive__2rmAg"}},function(e,t,n){e.exports={section:"Section_section__YeuZT",title:"Section_title__3xwRm"}},function(e,t,n){e.exports={alert:"Alert_alert__39jUA",enter:"Alert_enter__1PvVI",enterActive:"Alert_enterActive__3Lmi_",exit:"Alert_exit__3S4ea",exitActive:"Alert_exitActive__2ojlt"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){e.exports=n(31)},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=n(20),l=n(1),s=n(2),u=n(4),m=n(3),p=n(34),_=n(33),h=function(e){return function(t){return function(n){Object(u.a)(c,n);var a=Object(m.a)(c);function c(){return Object(l.a)(this,c),a.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){var n=void 0===this.props.isVisible||this.props.isVisible;return r.a.createElement(_.a,{appear:!0,in:n,timeout:500,classNames:e,unmountOnExit:!0},r.a.createElement(t,Object.assign({},this.props,this.state)))}}]),c}(a.Component)}},f=n(14),b=n.n(f),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("h2",{className:b.a.logo},"Phonebook")}}]),n}(a.Component),v=h(b.a)(d),E=n(15),C=n.n(E),g=function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.section},t&&r.a.createElement("h2",{className:C.a.title},t),n))},S=n(35),A=n(10),N=n.n(A),O=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement(S.a,{component:"ul",className:N.a.taskList},t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement(_.a,{key:t,timeout:250,classNames:N.a},r.a.createElement("li",{className:N.a.item},r.a.createElement("p",{style:{display:"inline-block",margin:"10px"}},a," - ",c),r.a.createElement("button",{type:"button",className:N.a.btn,onClick:function(){return n(t)}},"Del")))})))},x=n(19),y=n(5),j=n.n(y),F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state),e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:j.a.form},r.a.createElement("div",{className:j.a.field},r.a.createElement("input",{type:"text",value:t,onChange:this.handleInputChange,className:j.a.input,name:"name",id:"name",placeholder:" "}),r.a.createElement("label",{htmlFor:"name",className:j.a.label},"Name")),r.a.createElement("div",{className:j.a.field},r.a.createElement("input",{type:"tel",value:n,onChange:this.handleInputChange,className:j.a.input,name:"number",id:"tel",placeholder:" "}),r.a.createElement("label",{htmlFor:"tel",className:j.a.label},"Phone number")),r.a.createElement("button",{type:"submit",className:j.a.btn,disabled:""===t},"Add"))}}]),n}(a.Component),k=n(11),L=n.n(k),P=h(L.a)((function(e){var t=e.onSearch;return r.a.createElement("div",{className:L.a.field},r.a.createElement("input",{type:"text",onChange:t,className:L.a.input,name:"filter",id:"filter",placeholder:" "}),r.a.createElement("label",{htmlFor:"filter",className:L.a.label},"Name Search"))})),I=n(16),w=n.n(I),R=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:w.a.alert},"This name, already exist in contacts.")}}]),n}(a.Component),V=h(w.a)(R),J=n(17),D=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:null,filter:"",alert:!1},e.addContact=function(t){var n=t.name,a=t.number;e.setState((function(t){if(!e.state.contacts.some((function(e){return e.name===n})))return{contacts:[{id:Object(p.a)(),name:n,number:a}].concat(Object(o.a)(t.contacts))};e.setState((function(){return e.setState({alert:!0})})),setTimeout((function(){return e.setState({alert:!1})}),2e3)}))},e.getSearchContacs=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.inputFilterChannge=function(t){return e.setState({filter:t.target.value})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");null===e?(localStorage.setItem("contacts",JSON.stringify(J)),this.setState({contacts:J})):this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.alert;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(g,null,r.a.createElement(V,{isVisible:n}),r.a.createElement(F,{onAddContact:this.addContact})),t&&r.a.createElement(g,{title:"Contacts"},r.a.createElement(P,{isVisible:t.length>1,onSearch:this.inputFilterChannge}),r.a.createElement(O,{contacts:this.getSearchContacs(),onRemoveContact:this.removeContact})))}}]),n}(a.Component);n(30);i.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.1a11e798.chunk.js.map