(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{20:function(e,s,t){},23:function(e,s,t){},43:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(12),i=t.n(a),n=(t(20),t(9)),r=t(13),l=t.n(r),j=(t(23),t(14)),d=t(5),o=t.n(d),h=t(1);class b extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.project,s=this.props.data.linkedin,t=this.props.data.github,c=this.props.data.name,a=this.props.data.description;return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsx)(j.a,{type:"circle",bg:!0}),Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)(o.a,{bottom:!0,children:Object(h.jsx)("h1",{className:"responsive-headline",children:c})}),Object(h.jsx)(o.a,{bottom:!0,duration:1200,children:Object(h.jsxs)("h3",{children:[a,"."]})}),Object(h.jsx)("hr",{}),Object(h.jsx)(o.a,{bottom:!0,duration:2e3,children:Object(h.jsxs)("ul",{className:"social",children:[Object(h.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(h.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(h.jsxs)("a",{href:s,className:"button btn linkedin-btn",children:[Object(h.jsx)("i",{className:"fa fa-linkedin"}),"LinkedIn"]}),Object(h.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(h.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}var m=b;class x extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(o.a,{bottom:!0,children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsx)("ul",{className:"copyright",children:Object(h.jsx)("li",{children:"\xa9 Copyright 2024"})})]})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}var O=x;class p extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.city,a=this.props.data.address.state,i=this.props.data.phone,n=this.props.data.email,r=this.props.data.resumedownload;return Object(h.jsx)("section",{id:"about",children:Object(h.jsx)(o.a,{duration:1e3,children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s,alt:"Profile Pic"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:t}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[c," ",a]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:i}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:n})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:r,className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}var u=p;class N extends c.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){if(!this.props.data)return null;const e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((e=>{const s=this.getRandomColor(),t="bar-expand "+e.name.toLowerCase(),c=e.level;return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:c,backgroundColor:s},className:t}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsx)(o.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(h.jsx)(o.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(h.jsx)(o.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}var f=N;class v extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsx)(d.Fade,{bottom:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Get In Touch."})})}),Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:n})})]})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(d.Slide,{left:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"eight columns",children:[Object(h.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"submit",children:"Submit"}),Object(h.jsx)("span",{id:"image-loader",children:Object(h.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(h.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(h.jsxs)("div",{id:"message-success",children:[Object(h.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(h.jsx)("br",{})]})]})}),Object(h.jsx)(d.Slide,{right:!0,duration:1e3,children:Object(h.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(h.jsxs)("div",{className:"widget widget_contact",children:[Object(h.jsx)("h4",{children:"Address and Phone"}),Object(h.jsxs)("p",{className:"address",children:[e,Object(h.jsx)("br",{}),s," ",Object(h.jsx)("br",{}),t,", ",c," ",a,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:i})]})]}),Object(h.jsxs)("div",{className:"widget widget_tweets",children:[Object(h.jsx)("h4",{className:"widget-title",children:"Latest Updates"}),Object(h.jsxs)("ul",{id:"linkedin",children:[Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:["Coming Soon ----",Object(h.jsx)("a",{href:"./",children:"soreaasmai.com"})]}),Object(h.jsx)("b",{children:Object(h.jsx)("a",{href:"./",children:"Few Days Ago"})})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:["Coming Soon ----",Object(h.jsx)("a",{href:"./",children:"soreaasmai.com"})]}),Object(h.jsx)("b",{children:Object(h.jsx)("a",{href:"./",children:"Few Days Ago"})})]})]})]})]})})]})]})}}var g=v,w=t(15),C=t.n(w);let k=0;class y extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.projects.map((function(e){let s="images/portfolio/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsxs)("div",{className:"item-wrap",children:[Object(h.jsx)(C.a,{alt:e.title,src:s}),Object(h.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},k++)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)(o.a,{left:!0,duration:1e3,distance:"40px",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}var D=y;class S extends c.Component{constructor(e){super(e),this.state={foo:"bar",resumeData:{}},n.a.initialize("UA-110570651-1"),n.a.pageview(window.location.pathname)}getResumeData(){l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}componentDidMount(){this.getResumeData()}render(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{data:this.state.resumeData.main}),Object(h.jsx)(u,{data:this.state.resumeData.main}),Object(h.jsx)(f,{data:this.state.resumeData.resume}),Object(h.jsx)(D,{data:this.state.resumeData.portfolio}),Object(h.jsx)(g,{data:this.state.resumeData.main}),Object(h.jsx)(O,{data:this.state.resumeData.main})]})}}var F=S;var A=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((s=>{let{getCLS:t,getFID:c,getFCP:a,getLCP:i,getTTFB:n}=s;t(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(h.jsx)(F,{}),document.getElementById("root")),A()}},[[43,1,2]]]);
//# sourceMappingURL=main.c88462ff.chunk.js.map