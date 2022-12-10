(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{329:function(t,r,a){t.exports=a.p+"assets/img/framework.7f1623ff.png"},330:function(t,r,a){t.exports=a.p+"assets/img/bootstrap.4bac6732.png"},372:function(t,r,a){"use strict";a.r(r);var s=a(7),e=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:a(329),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"一、项目仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、项目仓库"}},[t._v("#")]),t._v(" 一、项目仓库")]),t._v(" "),r("p",[t._v("Gitee（主仓库）："),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/smartboot/smart-mqtt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Github（镜像同步）："),r("a",{attrs:{href:"https://github.com/smartboot/smart-mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/smartboot/smart-mqtt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("开发环境：Java 8")]),t._v(" "),r("h2",{attrs:{id:"二、运行程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、运行程序"}},[t._v("#")]),t._v(" 二、运行程序")]),t._v(" "),r("p",[t._v("下面将以不同的形式为大家演示 smart-mqtt Broker 服务的启动过程。")]),t._v(" "),r("h3",{attrs:{id:"_2-1-源码编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-源码编译"}},[t._v("#")]),t._v(" 2.1 源码编译")]),t._v(" "),r("ol",[r("li",[t._v("下载工程源码。"),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/smartboot/smart-mqtt.git\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])]),t._v(" "),r("li",[t._v("导入至 IDEA 或 Eclipse，并用 Maven 编译工程。"),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("mvn package\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])]),t._v(" "),r("li",[t._v("打开 smart-mqtt-broker 模块中的 Bootstrap 类，启动其 main 函数。\n"),r("img",{attrs:{src:a(330),alt:""}})])]),t._v(" "),r("h3",{attrs:{id:"_2-2-jar-包启动-linux、macos、windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-jar-包启动-linux、macos、windows"}},[t._v("#")]),t._v(" 2.2 Jar 包启动（Linux、macOS、Windows）")]),t._v(" "),r("ol",[r("li",[t._v("访问 "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),r("OutboundLink")],1),t._v(" 下载要安装的 jar 包：smart-mqtt-broker-community-x.jar。")]),t._v(" "),r("li",[t._v("启动 smart-mqtt Broker 服务"),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" smart-mqtt-broker-community-"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${version}")]),t._v(".jar\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])]),t._v(" "),r("li",[t._v("停止 smart-mqtt Broker："),r("code",[t._v("CTRL+C")])]),t._v(" "),r("li",[t._v("卸载 smart-mqtt Broker"),r("br"),t._v("\n直接删除 smart-mqtt-broker-community-${version}.jar 文件即可。")])]),t._v(" "),r("h3",{attrs:{id:"_2-3-原生包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-原生包"}},[t._v("#")]),t._v(" 2.3 原生包")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("访问 "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),r("OutboundLink")],1),t._v(" 下载相应平台的程序包")])]),t._v(" "),r("li",[r("p",[t._v("进入命令行环境启动程序")])])]),t._v(" "),r("blockquote",[r("p",[t._v("因不具备Windows、Linux环境，暂未提供这两个平台的原生包")])]),t._v(" "),r("h3",{attrs:{id:"_2-4-docker-启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-docker-启动"}},[t._v("#")]),t._v(" 2.4 Docker 启动")]),t._v(" "),r("p",[t._v("见《"),r("RouterLink",{attrs:{to:"/smart-mqtt/02.使用指南/05.容器化服务.html"}},[t._v("容器化服务")]),t._v("》章节")],1),t._v(" "),r("h2",{attrs:{id:"三、客户端连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、客户端连接"}},[t._v("#")]),t._v(" 三、客户端连接")]),t._v(" "),r("p",[t._v("您可选择任意一款MQTT客户端工具用于连接 smart-mqtt broker。")])])}),[],!1,null,null,null);r.default=e.exports}}]);