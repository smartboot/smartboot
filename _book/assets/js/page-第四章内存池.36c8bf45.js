(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{524:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第四章-内存池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四章-内存池"}},[s._v("#")]),s._v(" 第四章 内存池")]),s._v(" "),a("p",[s._v("内存池似乎已经当下各个牛逼框架的标配，我们也专门为smart-socket度身打造了一款内存池解决方案。当然我们并不是为了盲目跟风，确实是有一些问题需要通过该项技术得以解决，并且smart-socket的内存池表现非常令人满意。在此跟大家分享一下smart-socket内存池的设计理念，但愿能与读者朋友产生共鸣。")]),s._v(" "),a("p",[a("strong",[s._v("概念描述")])]),s._v(" "),a("ol",[a("li",[s._v("内存池：BufferPool"),a("br"),s._v("\n一个内存池中包含了多个内存页"),a("code",[s._v("BufferPage")]),s._v("，为内存申请源提供内存页的分配策略，并且运行着低优先级异步任务将未使用的内存块"),a("code",[s._v("chunk")]),s._v("回收至内存页"),a("code",[s._v("BufferPage")]),s._v("。")]),s._v(" "),a("li",[s._v("内存页：BufferPage"),a("br"),s._v("\n其本质就是一个由用户指定大小的 ByteBuffer 对象，DirectByteBuffer 和 HeapByteBuffer 皆可。通过事先初始化足够大小的内存页，服务运行期间可快速响应内存需求。")]),s._v(" "),a("li",[s._v("内存块：chunk"),a("br"),s._v("\n从 BufferPage 中划分出来的小块内存以满足通信所需，内存块的的申请尽量遵循按需申请，用完即还原则。当内存页中剩余空间不足以满足申请源需求大小时，smart-socket 将向 JVM 申请临时内存块。")])]),s._v(" "),a("p",[s._v("smart-socket引入内存池设计，主要为了解决两个问题：零拷贝、对象复用。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("零拷贝；")]),s._v(" "),a("p",[s._v("接触过Netty的朋友应该都听说过该项技术，这项技术的原理也很简单。在数据传输时，如果存储数据的ByteBuffer是堆内缓冲区对象HeapByteBuffer，则在输出时JVM会将该缓冲区的数据拷贝到堆外的直接缓冲区DirectByteBuffer再输出，该场景就存在一次内存拷贝。而如果一开始我们就将数据写入直接缓冲区DirectByteBuffer，则无需进行数据拷贝便可输出数据，这就是所谓的零拷贝，而零拷贝所带来的好处就是节省了临时内存和CPU的消耗，以下便是JVM执行数据输出的处理方式，阅读源码有助于读者朋友更深刻的理解零拷贝。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileDescriptor")]),s._v(" var0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteBuffer")]),s._v(" var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" var2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NativeDispatcher")]),s._v(" var4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DirectBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFromNativeBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" var5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" var6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" var5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" var6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" var7 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" var5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" var6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" var6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" var5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteBuffer")]),s._v(" var8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTemporaryDirectBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" var10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                var8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                var8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("flip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" var9 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFromNativeBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var9 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    var1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" var9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                var10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" var9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("offerFirstTemporaryDirectBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" var10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("复用对象；")]),s._v(" "),a("p",[s._v("实现对象的复用一方面可以节省对象构造造成的时间成本，另一方面可以大大减少运行过程中产生的对象数，缓解GC压力。特别对于直接缓冲区DirectByteBuffer对象，不仅创建耗时长，而且因其存在于堆外内存中导致无法通过垃圾回收器释放内存，非常适合通过池化管理提升对象复用率。")])])]),s._v(" "),a("h2",{attrs:{id:"_4-1-设计原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-设计原理"}},[s._v("#")]),s._v(" 4.1 设计原理")]),s._v(" "),a("p",[s._v("​\tsmart-socket内存池的设计原理比较简单，事先在堆外内存中申请一个大的DirectByteBuffer，后续使用时通过DirectByteBuffer映射出实际所需大小的虚拟Buffer于堆内空间中。所以这VirtualBuffer其实就是堆外内存在堆内内存中创建的一个索引，smart-socket在堆内空间中对VirtualBuffer的一切数据读写操作都会同步反应至堆外的DirectByteBuffer中。")]),s._v(" "),a("img",{attrs:{src:"docs/smart-socket/chapter-5/bufferpool_1.png",width:"60%"}}),s._v(" "),a("center",[s._v("图4-1-1")]),s._v(" "),a("p",[s._v("接下来通过几张图示范一下内存池的运作流程。例如：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("我们需要一块长度为2的ByteBuffer，那么我们就映射出一个VirtualBuffer占用堆外内存中的两个字节空间。")])]),s._v(" "),a("li",[a("p",[s._v("之后我们还需要一块长度为4的ByteBuffer，那就只能申请下标3至6的空间。")]),s._v(" "),a("img",{attrs:{src:"docs/smart-socket/chapter-5/bufferpool_2.png",width:"60%"}}),s._v(" "),a("center",[s._v("图4-1-2")])],1),s._v(" "),a("li",[a("p",[s._v("当虚拟内存使用完毕后，要及时释放占用的堆外内存。")]),s._v(" "),a("img",{attrs:{src:"docs/smart-socket/chapter-5/bufferpool_3.png",width:"60%"}}),s._v(" "),a("center",[s._v("图4-1-3")])],1),s._v(" "),a("li",[a("p",[s._v("下一次再需要空间时继续从可用空间中申请。")]),s._v(" "),a("img",{attrs:{src:"docs/smart-socket/chapter-5/bufferpool_4.png",width:"60%"}})])]),s._v(" "),a("center",[s._v("图4-1-4")]),s._v(" "),a("p",[s._v("​\t通过不断的申请、释放，smart-socket内存池便运转起来了。需要注意的事，内存的申请是从头到尾进行扫描，而释放回收是无时序的，如图4-1-4。所以在实际运行中会产生一些不连续的小内存块，也就是内存碎片。内存碎片化是个必然存在的状况，假如这种小颗粒内存碎片占比增高，会降低虚拟内存申请的成功率。如果虚拟内存申请失败，smart-socket内存池会启用备用方案,采用申请堆内缓冲区的方式满足应用所需，此类缓冲区使用完毕后可由垃圾回收器释放。这样一种堆外为主，堆内为辅的设计方案，保障了smart-socket内存池的稳定、高效。")]),s._v(" "),a("h2",{attrs:{id:"_4-2-内存池实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-内存池实践"}},[s._v("#")]),s._v(" 4.2 内存池实践")]),s._v(" "),a("p",[s._v("​\t前文讲完了smart-socket内存池的设计原理，但在实践中还会面临一个情况，便是内存分配、回收时面临的并发问题。尽管只需加同步锁控便能解决，但是在高并发场景下的锁竞争会比较激烈，为了缓解这一状况。smart-socket内存池中引入了内存页BufferPage的概念。内存池中创建一组BufferPage，每个BufferPage各自封装一个大的DirectByteBuffer。再根据特定的分配策略将网络会话AIOSession与某个BufferPage关联起来，由此降低并发情况下的锁竞争压力。")]),s._v(" "),a("img",{attrs:{src:"docs/smart-socket/chapter-5/bufferpage_1.png",width:"100%"}}),s._v(" "),a("p",[s._v("​\t最终我们的smart-socket内存池实现如下所示。初始化内存池时需要指定内存页的个数，为每个内存页分配的空间大小，以及是否使用直接缓冲区。至于内存页的分配，采用的是轮训策略。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPagePool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bufferPageList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 内存页游标\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" cursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * @param pageSize 内存页大小\n     * @param poolSize 内存页个数\n     * @param isDirect 是否使用直接缓冲区\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPagePool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" poolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" isDirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        bufferPageList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("poolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" poolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            bufferPageList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" isDirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 申请内存页\n     *\n     * @return\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("allocateBufferPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//轮训游标，均衡分配内存页")]),s._v("\n        cursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" bufferPageList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BufferPage")]),s._v(" page "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bufferPageList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"_4-3-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-总结"}},[s._v("#")]),s._v(" 4.3 总结")]),s._v(" "),a("p",[s._v("​\tsmart-socket内存池的设计可能在理论层面的探讨会更有意义，它所带来的性能提升和内存优化，很轻易的就会被实际业务场景下的系统业务抵消掉。而smart-socket花费大量精力设计的内存池，是为了达到实验室环境下的最优解。框架层面做的每一次努力，都是期望让更多的硬件资源服务于用户的业务，提升资源利用率。")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);