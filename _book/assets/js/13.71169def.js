(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{353:function(s,t,a){s.exports=a.p+"assets/img/low-memory-1.1972cf2f.png"},354:function(s,t,a){s.exports=a.p+"assets/img/low-memory-2.7d24c54b.png"},407:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"模式介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式介绍"}},[s._v("#")]),s._v(" 模式介绍")]),s._v(" "),t("p",[s._v("低内存模式是 smart-socket 技术创新的成果，"),t("strong",[s._v("这项特性在目前的 Java AIO 框架中是独一无二的")]),s._v("。")]),s._v(" "),t("p",[s._v("启用该模式后，可以实现通信过程中读缓冲区的按需分配。\n在IO空闲期间释放读缓冲区内存，工作期间再申请一定的空间用于接收网络数据包，以此达到提升内存使用率的目的。")]),s._v(" "),t("h2",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("p",[t("strong",[s._v("低内存模式尤其适合运用于海量连接且IO低密集型的场景")]),s._v("。")]),s._v(" "),t("p",[s._v("例如：物联网场景下数十万的设备与服务端建立着长连接，并周期性上报设备数据。")]),s._v(" "),t("p",[s._v("假设每个连接的缓冲区大小是 1MB，对于一般的通信服务而言 10 万个连接将会消耗 9.7G 的内存。\n而倘若启用 smart-socket 的低内存模式，这个内存开销或许只有几十兆至几百兆。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("正是得益于这项技术，我们成功的在一台 8G 内存的服务器中实现了百万级长连接。\n感兴趣的朋友可以访问：《"),t("RouterLink",{attrs:{to:"/smart-socket/million-connection.html"}},[s._v("单机百万级长连接背后的故事")]),s._v("》")],1)]),s._v(" "),t("h2",{attrs:{id:"实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),t("p",[s._v("在讲解低内存模式的运行原理之前，我们有必要对 Java AIO 有一个基本的了解。")]),s._v(" "),t("p",[t("code",[s._v("AsynchronousSocketChannel#read")]),s._v("是 Java AIO 用于执行读操作的入口，该接口有三个入参：")]),s._v(" "),t("ol",[t("li",[s._v("dst：ByteBuffer缓冲区，用以存放收到的网络数据包。")]),s._v(" "),t("li",[s._v("attachment：附件，可以是任意类型的对象。")]),s._v(" "),t("li",[s._v("handler：读操作的回调处理器，当发生网络断连或者成功读取到数据后触发。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AsynchronousSocketChannel")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AsynchronousByteChannel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NetworkChannel")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteBuffer")]),s._v(" dst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" attachment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CompletionHandler")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MILLISECONDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" attachment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("不得不承认 Java 在 AIO 接口的设计方面还是非常有水平的，它直接将 NIO 这种晦涩难懂又不易驾驭的网络编程技术，\n简化至大多数Java程序员都能轻松驾驭的水准。")]),s._v(" "),t("p",[s._v("但是这样的设计存在一个弊端便是对于内存资源的把控无法做到精细化，\n在面对海量连接且IO低密集的情况，由于读通道长期处于监听状态，使大量的缓冲区内存处于静默状态（见下图）。\n"),t("img",{attrs:{src:a(353),alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("所以原生的 Java AIO 不太适合这类海量连接的通信场景，但 smart-socket 通过重写通信内核彻底解决了该问题，\n成为唯一一款性能和资源开销双优解的通信框架。")])]),s._v(" "),t("p",[s._v("smart-socket 采取的策略便是在无法读到数据时及时释放缓冲区的内存空间，再进入通道监听状态。\n直至通道中有数据可读时，再申请一片新缓冲区执行读操作（见下图）。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(354),alt:""}})]),s._v(" "),t("p",[s._v("虽然从流程上是个微小的调整，却是一般 Java AIO 框架所无法实现的功能。\nsmart-socket也是在重写底层 AIO 实现后，才有能力感知通道状态并对缓冲区作出优化配置。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readCompleted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//释放缓冲区")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnhanceAsynchronousChannelProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("READ_MONITOR_SIGNAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readBuffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readBuffer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnhanceAsynchronousChannelProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("READABLE_SIGNAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doRead")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收到的消息进行预处理")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NetMonitor")]),s._v(" monitor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMonitor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("monitor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        monitor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("afterRead")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eof "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readBuffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("buffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("flip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("signalRead")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("smart-socket 定义了两种信号量：")]),s._v(" "),t("ol",[t("li",[s._v("READ_MONITOR_SIGNAL\n"),t("ul",[t("li",[s._v("触发条件：当前缓冲区处于清空状态（即无半包）；当前TCP管道中无可读数据。")]),s._v(" "),t("li",[s._v("执行动作：释放读缓冲区内存空间。")])])]),s._v(" "),t("li",[s._v("READABLE_SIGNAL\n"),t("ul",[t("li",[s._v("触发条件：TCP管道数据已就绪，具备可读条件。")]),s._v(" "),t("li",[s._v("执行动作：申请读缓冲区内存空间，并触发读操作。")])])])]),s._v(" "),t("h2",{attrs:{id:"使用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[s._v("#")]),s._v(" 使用指南")]),s._v(" "),t("p",[s._v("由于低内存模式增加了内存释放和再申请两个环节，势必会产生些许的性能损耗。\n不过这种损耗仅相对于极限性能压测而言，对实际应用的影响可谓微乎其微。\n如果您的应用场景存在较高的连接数，大可放心启用低内存模式。")]),s._v(" "),t("h3",{attrs:{id:"服务端启用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端启用方式"}},[s._v("#")]),s._v(" 服务端启用方式")]),s._v(" "),t("p",[s._v("服务端启用低内存模式只许在启动时调用"),t("code",[s._v("AioQuickServer#setLowMemory")]),s._v("接口，并将入参设置为"),t("code",[s._v("true")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AioQuickServer")]),s._v(" server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AioQuickServer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" protocol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" processor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setLowMemory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"客户端启用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端启用方式"}},[s._v("#")]),s._v(" 客户端启用方式")]),s._v(" "),t("p",[s._v("客户端一般没有低内存模式的需求，只有当你的服务内部管理着大量的客户端连接时才有意义。\n通常这个时候我们建议这些客户端可以共享线程资源，所以客户端的低内存开关与线程资源组结合在一起。")]),s._v(" "),t("p",[s._v("启用的方式也极为简单，只需在"),t("code",[s._v("EnhanceAsynchronousChannelProvider")]),s._v("的构造方法中指定"),t("code",[s._v("bool")]),s._v("值便可:")]),s._v(" "),t("ul",[t("li",[s._v("true: 启用低内存模式")]),s._v(" "),t("li",[s._v("false: 禁用低内存模式")])]),s._v(" "),t("p",[s._v("示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AsynchronousChannelGroup")]),s._v(" asynchronousChannelGroup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnhanceAsynchronousChannelProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("openAsynchronousChannelGroup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runtime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRuntime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("availableProcessors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientGroup"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AioQuickClient")]),s._v(" client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AioQuickClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" protocol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" processor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AioSession")]),s._v(" session "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("asynchronousChannelGroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);