(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{239:function(e,t,n){var content=n(249);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("310f022c",content,!0,{sourceMap:!1})},248:function(e,t,n){"use strict";var o=n(239);n.n(o).a},249:function(e,t,n){t=e.exports=n(20)(!1);var o=n(115)(n(118));t.push([e.i,".contact{background:url("+o+");background-size:100%;background-position:50%;height:90vh;margin-top:10vh}.contact h1{text-align:center;color:#000}.contact__form{background-color:hsla(0,0%,100%,.9);width:50%;position:relative;top:50%;left:50%;transform:translate(-50%,-50%);padding:40px}@media screen and (max-width:650px){.contact h1{font-size:1.5em}.contact__form{height:70%;width:60%;padding:10px}}@media screen and (max-width:450px){.contact h1{font-size:1.3em}.contact__form{height:80%;width:60%;padding:10px}}@media screen and (max-height:570px){.contact__form{height:90%;width:80%}}",""])},261:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=20||"Name must be less than 20 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],message:"",messageRules:[function(e){return!!e||"Message is required"},function(e){return e&&e.length<=500||"Message must be less than 500 characters"}],select:null,checkbox:!1,lazy:!1}},methods:{validate:function(){this.$refs.form.validate()&&(console.log("do something"),test.submit())},reset:function(){this.$refs.form.reset()}}},r=(n(248),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact"},[n("v-form",{ref:"form",staticClass:"contact__form",attrs:{id:"test",action:"https://formspree.io/helene.andre.06@gmail.com",method:"post","lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("h1",[e._v("Contact")]),n("v-text-field",{attrs:{counter:20,rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-textarea",{attrs:{counter:500,rules:e.messageRules,label:"Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must check to continue!"}],label:"Are you a human?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),n("v-btn",{attrs:{disabled:!e.valid,color:"blue"},on:{click:e.validate}},[e._v("Validate")]),n("v-btn",{attrs:{color:"orange"},on:{click:e.reset}},[e._v("Reset Form")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);