(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EYWl:function(e,t,n){"use strict";n("91GP");var a=n("c/e4"),r=n("q1tI"),l=n.n(r),o=n("TJpk"),i=n.n(o),c=n("Wbzz");function s(e){var t=e.meta,n=e.image,r=e.title,o=e.description,s=e.slug,u=e.lang,m=void 0===u?"en":u;return l.a.createElement(c.StaticQuery,{query:"3236765318",render:function(e){var a=e.site.siteMetadata,c=o||a.description,u=n?a.siteUrl+"/"+n:null,p=""+a.siteUrl+s;return l.a.createElement(i.a,Object.assign({htmlAttributes:{lang:m}},r?{titleTemplate:"%s — "+a.title,title:r}:{title:a.title+" — A blog by lee-ping"},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:r||a.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:c}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:a})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("bHtr");function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,a(r))}},MvKu:function(e,t,n){},Nr18:function(e,t,n){"use strict";var a=n("S/j/"),r=n("d/Gc"),l=n("ne8i");e.exports=function(e){for(var t=a(this),n=l(t.length),o=arguments.length,i=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,s=void 0===c?n:r(c,n);s>i;)t[i++]=e;return t}},SbOt:function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("I5cv");var a=n("q1tI"),r=n.n(a),l=n("caJ7"),o=n.n(l),i=n("p3AD");var c=function(e){var t,n;n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=l;function l(){return e.apply(this,arguments)||this}return l.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(i.a)(2)}},r.a.createElement("img",{src:o.a,alt:"Dan Abramov",style:{marginRight:Object(i.a)(.5),marginBottom:0,width:Object(i.a)(2),height:Object(i.a)(2),borderRadius:"50%"}}),r.a.createElement("p",{style:{maxWidth:310}},r.a.createElement("a",{href:""},"李平")," 的个人博客.  ",r.a.createElement("br",null),"夕阳西沉,年寿将尽,美韶光早已是昨宵陈梦,忍见家破人亡,空熬一生,亦于事无补......"))},l}(r.a.Component);t.a=c},bHtr:function(e,t,n){var a=n("XKFU");a(a.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"知机县急流津","author":"lee-ping","description":"Personal blog by lee ping.","siteUrl":"http://www.tristanme.com","social":{"twitter":"@lee-ping"}}}}}')},caJ7:function(e,t,n){e.exports=n.p+"static/profile-pic-83f1fc0e1f2661bb9bde3aa0f7d82f11.jpg"},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},"vPK/":function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return j}));n("91GP"),n("Vd3H"),n("Oyvg"),n("pIFo"),n("a1Th"),n("Btvt"),n("I5cv");var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("mwIZ"),i=n.n(o),c=(n("vPK/"),n("SbOt")),s=n("7oih"),u=n("EYWl");n("MvKu");var m=function(e){var t,n;n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=l;function l(){return e.apply(this,arguments)||this}return l.prototype.render=function(){var e;switch(this.props.cta){case"react":e={id:"1181861",title:"Learn to Build Resilient React Components",subTitle:"Get a one week email course and learn how I think about writing React components based on 4 Principles.",buttonText:"Start Learning"};break;case"plsql":e={id:"1181862",title:"学习构建和管理PL/SQL程序单元",subTitle:"PL/SQL是一种功能强大但简单明了的数据库编程语言。它很容易写和读，并且有很多现成的优化和安全特性",buttonText:"订阅"};break;default:e={id:"812047",title:"订阅最新文章",subTitle:"订阅以通过电子邮件获取我的最新文章。",buttonText:"订阅"}}return r.a.createElement("form",{action:"",className:"seva-form formkit-form",method:"post","min-width":"400 500 600 700 800",style:{boxShadow:"var(--form-shadow)",backgroundColor:"var(--bg)",borderRadius:"6px"}},r.a.createElement("div",{"data-style":"full"},r.a.createElement("div",{"data-element":"column",className:"formkit-column",style:{backgroundColor:"var(--bg-secondary)"}},r.a.createElement("h1",{className:"formkit-header","data-element":"header",style:{color:"var(--textTitle)",fontSize:"20px",fontWeight:700}},e.title),r.a.createElement("div",{"data-element":"subheader",className:"formkit-subheader",style:{color:"var(--textNormal)"}},r.a.createElement("p",null,e.subTitle)),r.a.createElement("div",{className:"formkit-image"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",viewBox:"0 0 46 46",style:{maxWidth:"100%"}},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("path",{fill:"#DD92AB",d:"M23,36 C22.813,36 22.627,35.948 22.463,35.844 L0.463,21.844 C0.159,21.651 -0.017,21.308 0.001,20.948 C0.02,20.589 0.23,20.266 0.553,20.105 L23,6 L45.447,20.105 C45.769,20.266 45.98,20.588 45.999,20.948 C46.018,21.308 45.841,21.65 45.537,21.844 L23.537,35.844 C23.373,35.948 23.187,36 23,36 Z"}),r.a.createElement("path",{fill:"#FFF",d:"M38,37 L8,37 L8,1 C8,0.448 8.448,0 9,0 L37,0 C37.552,0 38,0.448 38,1 L38,37 Z"}),r.a.createElement("path",{fill:"#FFA7C4",d:"M45,46 C44.916,46 44.831,45.989 44.748,45.968 L21.748,39.968 L22,33 L46,21 L46,45 C46,45.31 45.856,45.602 45.611,45.792 C45.435,45.928 45.219,46 45,46 Z"}),r.a.createElement("path",{fill:"#FFC3D7",d:"M45,46 L1,46 C0.447,46 0,45.552 0,45 L0,21 L45.479,44.122 C45.88,44.341 46.083,44.804 45.969,45.247 C45.856,45.69 45.457,46 45,46 Z"}),r.a.createElement("path",{fill:"#FFA7C4",d:"M19 20.414L14.293 15.707C13.902 15.316 13.902 14.684 14.293 14.293L19 9.586 20.414 11 16.414 15 20.414 19 19 20.414zM27 20.414L25.586 19 29.586 15 25.586 11 27 9.586 31.707 14.293C32.098 14.684 32.098 15.316 31.707 15.707L27 20.414z"}))))),r.a.createElement("div",{"data-element":"column",className:"formkit-column"},r.a.createElement("ul",{className:"formkit-alert formkit-alert-error","data-element":"errors","data-group":"alert"}),r.a.createElement("div",{"data-element":"fields",className:"seva-fields formkit-fields"},r.a.createElement("div",{className:"formkit-field"},r.a.createElement("input",{className:"formkit-input","aria-label":"你的名字",name:"fields[first_name]",placeholder:"你的名字",type:"text",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400},required:!0})),r.a.createElement("div",{className:"formkit-field"},r.a.createElement("input",{className:"formkit-input",name:"email_address","aria-label":"您的电子邮件地址",placeholder:"您的电子邮件地址",required:!0,type:"email",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400}})),r.a.createElement("button",{"data-element":"submit",className:"formkit-submit formkit-submit",style:{backgroundColor:"hsl(340, 63%, 55%)",borderRadius:"24px",color:"white",fontWeight:700}},r.a.createElement("div",{className:"formkit-spinner"}),r.a.createElement("span",null,e.buttonText))),r.a.createElement("div",{"data-element":"guarantee",className:"formkit-guarantee",style:{color:"var(--textNormal)",fontSize:"13px",fontWeight:400}},r.a.createElement("p",null,"我不会给你发垃圾邮件。"),r.a.createElement("p",null,r.a.createElement("strong",null,"随时")," 退订。")))))},l}(r.a.Component),p=n("JLKy"),f=n("L6NH"),d=n("p3AD"),h=(n("SRfc"),n("k7Sn")),b={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},g=function(e){return h.supportedLanguages[e].replace(/ /g," ")};function y(e){return function(){var t,n=k(e);if(v()){var a=k(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return E(this,t)}}function E(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var L='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',x=function(e){w(t,e);y(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,o=e.editUrl,i=t.filter((function(e){return"ru"!==e})),c=-1!==t.indexOf("ru");return r.a.createElement("div",{className:"translations"},r.a.createElement(p.a,{style:{fontFamily:L}},t.length>0&&r.a.createElement("span",null,c&&r.a.createElement("span",null,"Originally written in:"," ","en"===n?r.a.createElement("b",null,g("en")):r.a.createElement(l.Link,{to:a("en")},"English")," • ","ru"===n?r.a.createElement("b",null,"Русский (авторский перевод)"):r.a.createElement(l.Link,{to:a("ru")},"Русский (авторский перевод)"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("span",null,"由读者翻译成： "),i.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e},e===n?r.a.createElement("b",null,g(e)):r.a.createElement(l.Link,{to:a(e)},g(e)),t===i.length-1?"":" • ")}))),"zh-hans"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),"zh-hans"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Link,{to:a("zh-hans")},"阅读原文")," • ",r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"改进此翻译")," • "),r.a.createElement(l.Link,{to:"/"+n},"查看所有翻译的文章")," ")))},t}(r.a.Component),C=function(e){w(t,e);y(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.data.markdownRemark,t=i()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,o=a.previous,p=a.next,y=a.slug,E=a.translations,v=a.translatedLinks,k=e.fields.langKey,w=e.html;w=function(e,t){var n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&h.supportedLanguages[t]?(n.forEach((function(n){b[n]&&b[n][t]&&(e=e.replace(n,b[n][t]))})),e):e}(w,k),v.forEach((function(e){var t="/"+k+e;w=w.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')})),(E=E.slice()).sort((function(e,t){return g(e)<g(t)?-1:1})),function(e){switch(e){case"ru":case"bg":Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,"s85H",7));break;case"uk":Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,"s85H",7)),Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([n.e(0),n.e(19)]).then(n.t.bind(null,"Vjog",7)),Promise.all([n.e(0),n.e(18)]).then(n.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([n.e(0),n.e(17)]).then(n.t.bind(null,"BiVN",7));break;case"ar":Promise.all([n.e(0),n.e(16)]).then(n.t.bind(null,"xpFW",7))}}(k);var C=function(e,t){var n=e.replace(t+"/","");return function(e){return"zh-hans"===e?n:""+e+n}}(y,k),j=C("en"),O="https://github.com/ping-lee/alfred/edit/master/src/pages/"+j.slice(2,j.length-1)+"/index"+("zh-hans"===k?"":"."+k)+".md",P="https://www.zhihu.com/search?q="+encodeURIComponent("https://overreacted.io"+j);return r.a.createElement(s.a,{location:this.props.location,title:t},r.a.createElement(u.a,{lang:k,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-.8)})},Object(f.a)(e.frontmatter.date,k)," • "+Object(f.b)(e.timeToRead)),E.length>0&&r.a.createElement(x,{translations:E,editUrl:O,languageLink:C,lang:k})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:w}}),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:P,target:"_blank",rel:"noopener noreferrer"},"在知乎上讨论")," • ",r.a.createElement("a",{href:O,target:"_blank",rel:"noopener noreferrer"},"在GitHub上编辑"))))),r.a.createElement("aside",null,r.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:L}},r.a.createElement(m,{cta:e.frontmatter.cta})),r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(d.a)(.25)}},r.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"知机县急流津")),r.a.createElement(c.a,null),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,o&&r.a.createElement(l.Link,{to:o.fields.slug,rel:"prev",style:{marginRight:20}},"← ",o.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(l.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(r.a.Component),j=(t.default=C,"973609681")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4411cc741da53ed67c55.js.map