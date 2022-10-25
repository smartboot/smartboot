import{_ as r,r as l,o,c as a,a as t,b as e,d as i,e as n}from"./app.125af0fe.js";const c="/book/assets/smart-servlet.ec750dec.png",p={},m=n('<p>smart-servlet \u662F\u4E00\u6B3E\u5B9E\u73B0\u4E86 Servlet 3.1 \u89C4\u8303\uFF0C\u652F\u6301\u591A\u5E94\u7528\u9694\u79BB\u90E8\u7F72\u7684\u7684 Web \u5BB9\u5668\u3002\u4E0E\u6B64\u540C\u65F6\uFF0Csmart-servlet \u8FD8\u662F\u4E00\u6B3E\u63D2\u4EF6\u5316\u5BB9\u5668\uFF0C\u57FA\u4E8E\u5185\u7F6E\u7684\u6C99\u7BB1\u73AF\u5883\u786E\u4FDD smart-servlet \u62E5\u6709\u6700\u7CBE\u7B80\u7684\u8FD0\u884C\u80FD\u529B\uFF0C\u7528\u6237\u8FD8\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6269\u5C55\u5BB9\u5668\u7684\u670D\u52A1\u80FD\u529B\u3002</p><h2 id="\u67B6\u6784\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u8BBE\u8BA1" aria-hidden="true">#</a> \u67B6\u6784\u8BBE\u8BA1</h2><p>smart-servlet \u5728 smart-http \u7684\u67B6\u6784\u4E4B\u4E0A\uFF0C\u901A\u8FC7\u7EE7\u627F HttpHandle \u5B9E\u73B0\u4E86 Servlet \u89C4\u8303\u3002\u8FD9\u610F\u5473\u7740\u4EFB\u4F55 smart-http \u670D\u52A1\u90FD\u53EF\u4EE5\u901A\u8FC7\u5355\u72EC\u5F15\u5165 smart-servlet \u6838\u5FC3\u5305\u7684\u65B9\u5F0F\uFF0C\u5C06\u666E\u901A\u7684 http \u5E94\u7528\u6539\u9020\u6210 servlet \u5E94\u7528\uFF0C\u800C\u4E14\u8FD9\u4E2A\u6210\u672C\u662F\u6781\u4F4E\u7684\u3002</p><p><img src="'+c+'" alt=""></p><p><strong>\u4EA7\u54C1\u7279\u8272</strong></p><ul><li>\u4F4E\u5B66\u4E60\u6210\u672C\uFF0C\u4E0E Tomcat\u3001Undertow \u4FDD\u6301\u540C\u6837\u7684\u4F7F\u7528\u4E60\u60EF\u3002</li><li>\u5B9E\u73B0 Servlet3.1 \u6838\u5FC3\u89C4\u8303\uFF1Arequest\u3001response\u3001session\u3001cookie\u3001dispatcher\u3001servletContext\u3002</li><li>\u5B9E\u73B0 JSR 356 Java\u2122 API for WebSocket \u89C4\u8303\u3002</li><li>\u63D2\u4EF6\u5316\u8BBE\u8BA1\uFF0C\u81EA\u7531 DIY \u670D\u52A1\u5668\u3002</li><li>\u5F00\u7BB1\u5373\u7528\uFF0C\u8FD0\u884C\u7A0B\u5E8F\u5305\u3001maven\u672C\u5730\u5F00\u53D1/\u8C03\u8BD5\u63D2\u4EF6\u3001springboot starter \u4E00\u5E94\u4FF1\u5168\uFF0C\u6EE1\u8DB3\u4F60\u7684\u5F00\u53D1\u3001\u90E8\u7F72\u9700\u6C42\u3002</li></ul><p><strong>\u5DE5\u7A0B\u6A21\u5757</strong></p><ul><li>smart-servlet \u3010\u5DE5\u7A0B\u4E3B\u76EE\u5F55\u3011 <ul><li>servlet-core\u3010servlet\u89C4\u8303\u5B9E\u73B0\u6838\u5FC3\u5305\u3011</li><li>plugins\u3010\u5BB9\u5668\u53EF\u6269\u5C55\u63D2\u4EF6\u3011 <ul><li>dispatcher\u3010RequestDispatcher\u63D2\u4EF6\uFF0C<strong>\u5FC5\u9009</strong>\u3011</li><li>session\u3010HttpSession\u63D2\u4EF6\uFF0C<strong>\u53EF\u9009</strong>\u3011</li><li>websocket\u3010 JSR 356 \u89C4\u8303\u63D2\u4EF6\uFF0C<strong>\u53EF\u9009</strong>\u3011</li></ul></li><li>smart-servlet-maven-plugin\u3010\u4E1A\u52A1\u7CFB\u7EDF\u901A\u8FC7pom.xml\u96C6\u6210\u672C\u5730\u5F00\u53D1\u73AF\u5883\u3011</li><li>spring-boot-start\u3010springboot\u4E1A\u52A1\u7CFB\u7EDF\u901A\u8FC7pom.xml\u96C6\u6210\u672C\u5730\u5F00\u53D1\u73AF\u5883\u3011</li><li>archives\u3010\u7528\u4E8E\u90E8\u7F72War\u5305\u7684\u53EF\u6267\u884C\u73AF\u5883\u8F6F\u4EF6\u5305\uFF0C\u5F00\u7BB1\u5373\u7528\u3011</li></ul></li></ul><h2 id="\u7279\u522B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7279\u522B\u8BF4\u660E" aria-hidden="true">#</a> \u7279\u522B\u8BF4\u660E</h2>',9),d={href:"https://gitee.com/smartboot/smart-servlet/issues",target:"_blank",rel:"noopener noreferrer"};function h(v,u){const s=l("ExternalLinkIcon");return o(),a("div",null,[m,t("p",null,[e("\u672C\u9879\u76EE\u8FD8\u5904\u4E8E\u7814\u53D1\u9636\u6BB5\uFF0C\u8FD8\u672A\u5B8C\u6210\u6240\u6709 Servlet \u6807\u51C6\u7684\u5151\u73B0\u3002\u5982\u82E5\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u95EE\u9898\u53EF\u63D0 "),t("a",d,[e("Issues"),i(s)]),e(" \u53CD\u9988\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u5B89\u6392\u5904\u7406\uFF0C\u611F\u8C22\u60A8\u7684\u7406\u89E3\u548C\u652F\u6301\uFF01")])])}const g=r(p,[["render",h],["__file","index.html.vue"]]);export{g as default};
