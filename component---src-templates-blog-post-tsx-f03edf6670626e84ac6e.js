(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6VaU":function(t,e,n){"use strict";var r=n("XKFU"),a=n("xF/b"),i=n("S/j/"),c=n("ne8i"),o=n("2OiF"),s=n("zRwo");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return o(t),e=c(r.length),n=s(r,0),a(n,r,r,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*c,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"9XZr":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*c,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},Cqiw:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),i=function(t){var e=t.content,n=t.className;return a.a.createElement("div",{className:n,dangerouslySetInnerHTML:{__html:e}})};e.b=function(t){var e=t.content,n=t.className;return a.a.createElement("div",{className:n},e)}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"bayerisch.digital.","description":"Wir sind eine Augsburger Webagentur, die mit innovativen Ideen und technischer Expertise Ihr Unternehmen digital aufruestet.Wir schaffen Webseiten nach Mass. Wir sind regional und immer fuer Sie dort. Mit Ihren Webseiten helfen Sie dem guten Zweck. Denn fuer jedeWebseite spenden wir einen Teil an gute Zwecke.","author":"Robin Goetz"}}}}')},FLlr:function(t,e,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},Lgjv:function(t,e,n){var r=n("ne8i"),a=n("l0Rn"),i=n("vhPU");t.exports=function(t,e,n,c){var o=String(i(t)),s=o.length,l=void 0===n?" ":String(n),u=r(e);if(u<=s||""==l)return o;var m=u-s,d=a.call(l,Math.ceil(m/l.length));return d.length>m&&(d=d.slice(0,m)),c?d+o:o+d}},Nr18:function(t,e,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");t.exports=function(t){for(var e=r(this),n=i(e.length),c=arguments.length,o=a(c>1?arguments[1]:void 0,n),s=c>2?arguments[2]:void 0,l=void 0===s?n:a(s,n);l>o;)e[o++]=t;return e}},SPin:function(t,e,n){"use strict";var r=n("XKFU"),a=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return a(this,t,arguments.length,arguments[1],!0)}})},"acc+":function(t,e,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),i=n.n(a),c=n("qhky"),o=n("/MKj"),s=n("ZTio");function l(t){var e=t.description,n=t.lang,a=t.meta,l=t.title,u=r.data.site,m=e||u.siteMetadata.description,d=Object(o.useSelector)(s.e).themeMode;return i.a.createElement(c.a,{htmlAttributes:{lang:n,class:d===s.a.DARK?"dark-theme":""},title:l,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},cZrw:function(t,e,n){"use strict";n.r(e),n.d(e,"BlogPostTemplate",(function(){return m})),n.d(e,"pageQuery",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("LvDl"),c=n("qhky"),o=n("Wbzz"),s=n("GWJV"),l=n("Cqiw"),u=n("acc+"),m=function(t){var e=t.content,n=t.contentComponent,r=t.description,c=t.tags,s=t.title,m=t.helmet,d=n||l.b;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:s}),a.a.createElement("section",{className:"section"},m||"",a.a.createElement("div",{className:"container content"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column is-10 is-offset-1"},a.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light"},s),a.a.createElement("p",null,r),a.a.createElement(d,{content:e}),c&&c.length?a.a.createElement("div",{style:{marginTop:"4rem"}},a.a.createElement("h4",null,"Tags"),a.a.createElement("ul",{className:"taglist"},c.map((function(t){return a.a.createElement("li",{key:t+"tag"},a.a.createElement(o.a,{to:"/tags/"+Object(i.kebabCase)(t)+"/"},t))})))):null)))))};e.default=function(t){var e=t.data.markdownRemark;return a.a.createElement(s.a,null,a.a.createElement(m,{content:e.html,contentComponent:l.a,description:e.frontmatter.description,helmet:a.a.createElement(c.a,{titleTemplate:"%s | Blog"},a.a.createElement("title",null,""+e.frontmatter.title),a.a.createElement("meta",{name:"description",content:""+e.frontmatter.description})),tags:e.frontmatter.tags,title:e.frontmatter.title}))};var d="1562462377"},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},l0Rn:function(t,e,n){"use strict";var r=n("RYi7"),a=n("vhPU");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"xF/b":function(t,e,n){"use strict";var r=n("EWmC"),a=n("0/R4"),i=n("ne8i"),c=n("m0Pp"),o=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,s,l,u,m,d,f){for(var g,h,p=u,v=0,E=!!d&&c(d,f,3);v<l;){if(v in s){if(g=E?E(s[v],v,n):s[v],h=!1,a(g)&&(h=void 0!==(h=g[o])?!!h:r(g)),h&&m>0)p=t(e,n,g,i(g.length),p,m-1)-1;else{if(p>=9007199254740991)throw TypeError();e[p]=g}p++}v++}return p}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-f03edf6670626e84ac6e.js.map