(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{390:function(t,r,v){"use strict";v.r(r);var e=v(7),_=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"smart-mqtt-broker-v0-20发布-2023-05-20"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-20发布-2023-05-20"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.20",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.20发布（2023-05-20）"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("【社区版】")]),t._v(" "),r("ol",[r("li",[t._v("smart-socket 升级至1.5.27。")]),t._v(" "),r("li",[t._v("snakeyaml 升级至2.0。")]),t._v(" "),r("li",[t._v("修复了消息编解码过程中的bug,提高消息传输的可靠性。")]),t._v(" "),r("li",[t._v("优化了消息解码异常触发的状态机，降低误判概率。")]),t._v(" "),r("li",[t._v("加强了消息编解码字节边界的检验，避免数据解析错误。")]),t._v(" "),r("li",[t._v("改进了内存管理策略，减少通信过程中的内存消耗。")]),t._v(" "),r("li",[t._v("修复了MQTT 5.0协议实现中的遗嘱消息和QoS2通信编解码问题。")]),t._v(" "),r("li",[t._v("对遗嘱消息模型字段进行了优化，提高代码可读性。")]),t._v(" "),r("li",[t._v("引入社区同学贡献的redis桥接模块，提供更多扩展选项。")]),t._v(" "),r("li",[t._v("为MQTT Client提供更高效的pulbish能力，提升性能表现。")])]),t._v(" "),r("p",[t._v("【企业版】")]),t._v(" "),r("ol",[r("li",[t._v("补充表结构索引，解决慢sql问题。")]),t._v(" "),r("li",[t._v("新增账户管理接口")]),t._v(" "),r("li",[t._v("Broker启动时重置旧连接状态。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-19发布-2023-04-22"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-19发布-2023-04-22"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.19",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.19发布（2023-04-22）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("实现消息重发规范")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-18发布-2023-04-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-18发布-2023-04-16"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.18",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.18发布（2023-04-16）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("社区版中移除连接认证功能，后续将在企业版中重新提供一套相对成熟的方案。")]),t._v(" "),r("li",[t._v("清理无用配置项。")]),t._v(" "),r("li",[t._v("优化消息Push逻辑。")]),t._v(" "),r("li",[t._v("重构 BrokerTopic 模型结构。")]),t._v(" "),r("li",[t._v("社区版源码中补充关于商业授权的License注释。")]),t._v(" "),r("li",[t._v("【企业版】优化Broker管理系统UI。")]),t._v(" "),r("li",[t._v("【企业版】节点管理中补充 Broker 端口号的信息记录。")]),t._v(" "),r("li",[t._v("【企业版】补充表索引，解决慢SQL问题。")]),t._v(" "),r("li",[t._v("【企业版】H2数据库启用mysql模式。")]),t._v(" "),r("li",[t._v("【企业版】关闭ChatGPT入口。（因为国内服务器已无法调用OpenAPI）")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-17发布-2023-03-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-17发布-2023-03-19"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.17",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.17发布（2023-03-19）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("通过引入smart-socket的插件化机制，以更低的性能损耗实现消息超时重发。")]),t._v(" "),r("li",[t._v("修复此前版本引入的topic取消订阅不生效的bug。")]),t._v(" "),r("li",[t._v("网络断开连接后即时中断消息推送，减少不必要的尝试。")]),t._v(" "),r("li",[t._v("MQTT Client 的topic订阅与取消订阅请求纳入飞行队列管理。")]),t._v(" "),r("li",[t._v("重构部分消息模型。")]),t._v(" "),r("li",[t._v("重构飞行队列，提供更加完善的Push能力。")]),t._v(" "),r("li",[t._v("更合理的日志输出。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-16发布-2023-03-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-16发布-2023-03-19"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.16",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.16发布（2023-03-19）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("优化 docker-compose.yml 配置，提升压测体验。")]),t._v(" "),r("li",[t._v("简化客户端连接空闲超时处理逻辑，节省内存开销。")]),t._v(" "),r("li",[t._v("显式管理 openAPI 服务的线程资源。")]),t._v(" "),r("li",[t._v("提升IO的flush效率。")]),t._v(" "),r("li",[t._v("调整内存消息队列的消费模式：当订阅者消费过慢导致消息被发布者覆盖，将直接跳跃至最新一条。")]),t._v(" "),r("li",[t._v("简化消息的 Push 模型，并获得大幅的性能提升。")]),t._v(" "),r("li",[t._v("暂时移除消息重发策略，会在后续版本中重构。")]),t._v(" "),r("li",[t._v("缩小 MQTT Client 消息发送的锁粒度，提升通信效率。")]),t._v(" "),r("li",[t._v("重构飞行队列，在高并发场景下能显著节省内存开销。")]),t._v(" "),r("li",[t._v("其他关于内存和性能的细节优化。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-15发布-2023-03-04"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-15发布-2023-03-04"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.15",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.15发布（2023-03-04）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("【社区版】")])]),t._v(" "),r("ol",[r("li",[t._v("smart-socket 版本调整至：1.5.24。")]),t._v(" "),r("li",[t._v("smart-http 版本升级值：1.1.21。")]),t._v(" "),r("li",[t._v("完善 openAPI 定义，并提供部分接口实现。")]),t._v(" "),r("li",[t._v("完善 MQTT5 协议规范的实现。")]),t._v(" "),r("li",[t._v("Broker 支持节点命名，用于集群模式下区分节点的唯一性。")]),t._v(" "),r("li",[t._v("提供内存模式的指标统计功能。")]),t._v(" "),r("li",[t._v("调整消息推送服务与插件模块的初始化顺序。")]),t._v(" "),r("li",[t._v("MQTT Client 支持飞行窗口，提供更稳定可靠的通信服务。")]),t._v(" "),r("li",[t._v("消息序列化日志打印调整成 JSON 格式输出。")]),t._v(" "),r("li",[t._v("改进后台管理系统的交互体验。")])]),t._v(" "),r("p",[r("strong",[t._v("【企业版】")])]),t._v(" "),r("ol",[r("li",[t._v("新增 chatGPT 插件，实现与人工智能对话。")]),t._v(" "),r("li",[t._v("新增 Database 插件，用于持久化Broker运行时数据以供后台管理系统展示。（适配数据库：H2、MySQL）")]),t._v(" "),r("li",[t._v("实现现存所有的 openAPI 接口。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-14发布-2023-01-28"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-14发布-2023-01-28"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.14",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.14发布（2023-01-28）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("新增事件类型：SUBSCRIBE_ACCEPT、UNSUBSCRIBE_ACCEPT、CONNACK")]),t._v(" "),r("li",[t._v("重新设计MQTT协议编解码接口，提升代码可读性、扩展性、可维护性。")]),t._v(" "),r("li",[t._v("新增broker后台管理系统。")]),t._v(" "),r("li",[t._v("完善MQTT5.0规范实现：\n"),r("ul",[r("li",[t._v("smart-mqtt-client 模块适配 mqtt5.0 协议。")]),t._v(" "),r("li",[t._v("客户端使用receiveMaximum限制客户端愿意同时处理的QoS等级1和QoS等级2的发布消息最大数量。")]),t._v(" "),r("li",[t._v("如果服务端不愿意接受CONNECT但希望表明其MQTT服务端身份，可以发送包含原因码为0x84（不支持的协议版本）的CONNACK报文，然后必须关闭网络连接。")])])])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-13发布-2022-12-31"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-13发布-2022-12-31"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.13",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.13发布（2022-12-31）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("社区版")])]),t._v(" "),r("ol",[r("li",[t._v("适配 mqtt 5.0 规范协议。")]),t._v(" "),r("li",[t._v("更新的项目readme描述信息。")]),t._v(" "),r("li",[t._v("MqttClient 支持 maxPacketSize 配置，限制 MQTT 消息包容量上限。")]),t._v(" "),r("li",[t._v("增加事件类型："),r("code",[t._v("SUBSCRIBE_REFRESH_TOPIC")]),t._v("，当客户端取消 topic 订阅时触发。")]),t._v(" "),r("li",[t._v("修复特定场景下消息订阅失效问题。")]),t._v(" "),r("li",[t._v("重新设计消息编解码器。使整体结构更清晰，更具扩展性。")]),t._v(" "),r("li",[t._v("smart-socket 升级至 "),r("code",[t._v("1.6.1")]),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-12发布-2022-12-31"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-12发布-2022-12-31"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.12",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.12发布（2022-12-31）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("社区版")])]),t._v(" "),r("ol",[r("li",[t._v("优化客户端超时断连的提示信息。")]),t._v(" "),r("li",[t._v("重构Connect消息的处理逻辑。")]),t._v(" "),r("li",[t._v("实现连接认证失败的错误响应码。")]),t._v(" "),r("li",[t._v("topic订阅支持黑名单约束。")]),t._v(" "),r("li",[t._v("优化Broker线程数配置，要求至少2个线程。")]),t._v(" "),r("li",[t._v("整理provider包结构。")]),t._v(" "),r("li",[t._v("修复操作系统 hosts 配置异常可能引发的接口阻塞问题。")])]),t._v(" "),r("p",[r("strong",[t._v("企业版")])]),t._v(" "),r("ol",[r("li",[t._v("试用版License过期时间延续至2023年12月31日。")]),t._v(" "),r("li",[t._v("修复 License 过期时间格式化错误问题。")]),t._v(" "),r("li",[t._v("优化运行期间 License 过期后的提示文案。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-11发布-2022-12-22"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-11发布-2022-12-22"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.11",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.11发布（2022-12-22）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("社区版")])]),t._v(" "),r("ol",[r("li",[t._v("MQTT默认的最大报文字节数调整为 1MB。")]),t._v(" "),r("li",[t._v("调整Broker消息推送线程组名称。")]),t._v(" "),r("li",[t._v("优化消息推送模型，获得更强劲的通信性能。")]),t._v(" "),r("li",[t._v("调整MQTTClient线程组名称。")]),t._v(" "),r("li",[t._v("提升飞行窗口稳定性")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-10发布-2022-12-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-10发布-2022-12-16"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.10",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.10发布（2022-12-16）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("社区版")])]),t._v(" "),r("ol",[r("li",[t._v("采用自研的压测工具 smart-mqtt-bench 替换 emqx-bench，以获得更好更强劲的压测体验。")]),t._v(" "),r("li",[t._v("fastjson 升级至 fastjson2:2.0.20.graal。")]),t._v(" "),r("li",[t._v("重构消息推送模型，通过优化设计获得更高的通信性能。")]),t._v(" "),r("li",[t._v("新增事件总线的事件类型：MESSAGE_BUS_CONSUMED")]),t._v(" "),r("li",[t._v("MemoryMessageStoreQueue 仅存储类型为 MqttPublishMessage 的消息。")]),t._v(" "),r("li",[t._v("缓冲区配置参数由 readBufferSize 调整为 bufferSize，且 read/write 共享该参数。")]),t._v(" "),r("li",[t._v("新增 Broker 服务的 Topic 数量限制，且默认值为：1024。")]),t._v(" "),r("li",[t._v("MQTT Broker 支持的最大报文采用参数化配置：maxPacketSize。")]),t._v(" "),r("li",[t._v("maxKeepAliveTime 由 1分钟调整成10分钟。")]),t._v(" "),r("li",[t._v("移除 BrokerContext#batchPublish 接口。")]),t._v(" "),r("li",[t._v("移除 MonitorPlugin 插件。")]),t._v(" "),r("li",[t._v("多个 MQTTClient 支持共享内存池。")]),t._v(" "),r("li",[t._v("MQTT Client 缓冲区采用参数配置化。")]),t._v(" "),r("li",[t._v("支持临时扩容缓冲区容量，不超过 maxPacketSize 即可。")]),t._v(" "),r("li",[t._v("升级飞行窗口流控算法。")]),t._v(" "),r("li",[t._v("消息输出支持主动和被动两种模式。")])]),t._v(" "),r("p",[r("strong",[t._v("企业版")])]),t._v(" "),r("ol",[r("li",[t._v("调整授权提示信息。")]),t._v(" "),r("li",[t._v("改进打包工具。")]),t._v(" "),r("li",[t._v("适配最新版 smart-mqtt。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-9发布-2022-12-03"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-9发布-2022-12-03"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.9",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.9发布（2022-12-03）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("社区版")])]),t._v(" "),r("ol",[r("li",[t._v("读缓冲区大小调整为参数配置化。")]),t._v(" "),r("li",[t._v("CONNECT_TIMEOUT默认值调整为5秒")]),t._v(" "),r("li",[t._v("MQTT 消息输出功能调整为MqttWriter接口的具体实现类，以适应 mqtt-over-websocket 的场景。")]),t._v(" "),r("li",[t._v("修复unsubscribe一个未订阅的 topic 时引发的空指针问题。")]),t._v(" "),r("li",[t._v("配置文件调整为 yaml 格式。")]),t._v(" "),r("li",[t._v("插件服务支持优先级排序。")])]),t._v(" "),r("p",[r("strong",[t._v("企业版")])]),t._v(" "),r("ol",[r("li",[t._v("新增消息桥接插件，现已实现了 mqtt-bridge-mqtt。")]),t._v(" "),r("li",[t._v("新增 mqtt-over-websocket新特性。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-8发布-2022-11-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-8发布-2022-11-12"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.8",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.8发布（2022-11-12）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("升级 smart-socket 至 1.5.23")]),t._v(" "),r("li",[t._v("smart-mqtt 相关组件提交至 Maven 中央仓库。【ISSUE："),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/issues/I5ZOQ4",target:"_blank",rel:"noopener noreferrer"}},[t._v("I5ZOQ4"),r("OutboundLink")],1),t._v("】")]),t._v(" "),r("li",[t._v("重构消息总线")]),t._v(" "),r("li",[t._v("指标监控频率调整为1分钟。")]),t._v(" "),r("li",[t._v("客户端支持通配符订阅。【ISSUE："),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/issues/I5ZJLZ",target:"_blank",rel:"noopener noreferrer"}},[t._v("I5ZJLZ"),r("OutboundLink")],1),t._v("】")]),t._v(" "),r("li",[t._v("修复客户端重连后没有触发 Topic 订阅的问题。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-7发布-2022-09-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-7发布-2022-09-10"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.7发布（2022-09-10）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("新增 docker-compose.yml ，极致体验的 MQTT Broker。")]),t._v(" "),r("li",[t._v("优化日志级别。")]),t._v(" "),r("li",[t._v("Broker接受消息后不对Qos进行持久化。")]),t._v(" "),r("li",[t._v("ping响应消息采用单例模式。")]),t._v(" "),r("li",[t._v("支持系统环境变量配置broker运行参数，现开放 BROKER_PORT、BROKER_THREADNUM两项配置。")]),t._v(" "),r("li",[t._v("将插件的启动先于 Broker TCP服务启动之前完成。")]),t._v(" "),r("li",[t._v("启动 TCP 服务时若发生异常释放相关资源。")]),t._v(" "),r("li",[t._v("启用内存池，提升运行性能。")]),t._v(" "),r("li",[t._v("消息read缓冲区暂时下降至 4KB，下个迭代换成配置化。")]),t._v(" "),r("li",[t._v("启用运行指标监控插件。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-6发布-2022-09-03"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-6发布-2022-09-03"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.6发布（2022-09-03）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("应社区用户要求，开源版 smart-mqtt适配 JDK 回退至1.8。")]),t._v(" "),r("li",[t._v("完善retain消息的规范实现，当服务端接收到保留标志为 1 且有效载荷为零字节的 PUBLISH 报文时，该主题下任何现存的保留消息必须被移除。")]),t._v(" "),r("li",[t._v("优化日志输出格式，增加时间信息。")]),t._v(" "),r("li",[t._v("smart-mqtt broker 线程数支持配置化。")]),t._v(" "),r("li",[t._v("更新客户端connect鉴权的接口设计。(by @yamikaze )")]),t._v(" "),r("li",[t._v("支持docker启动 smart-mqtt 服务")]),t._v(" "),r("li",[t._v("修复mqtt协议版本不兼容时引发的空指针问题。")]),t._v(" "),r("li",[t._v("修复订阅topic后retain消息被无限推送的问题。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-5发布-2022-07-17"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-5发布-2022-07-17"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.5",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.5发布（2022-07-17）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("【新特性】Broker支持客户端连接鉴权")]),t._v(" "),r("li",[t._v("【优化】重构Topic订阅逻辑，并增加重订阅特性")]),t._v(" "),r("li",[t._v("【优化】简化客户端连接超时监听的处理逻辑。")]),t._v(" "),r("li",[t._v("【优化】对各事件类型打上标注")]),t._v(" "),r("li",[t._v("【优化】清理TopicFilterProvider，开源版与企业版保持同等Topic匹配策略")]),t._v(" "),r("li",[t._v("【优化】采用事件总线监听连接活跃状态")]),t._v(" "),r("li",[t._v("【优化】确保网络断开后，事件状态 EventType.DISCONNECT 必然被调用")]),t._v(" "),r("li",[t._v("【优化】引入订阅事件的退出机制")]),t._v(" "),r("li",[t._v("【优化】AbstractSession 新增 getRemoteAddress 接口")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-4发布-2022-07-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-4发布-2022-07-10"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.4发布（2022-07-10）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("【新特性】升级了Broker内核的架构设计，采用事件驱动+消息驱动的双引擎模式构建出具备高度扩展性的MQTT服务")]),t._v(" "),r("li",[t._v("【新特性】支持Topic通配符的订阅方式")]),t._v(" "),r("li",[t._v("【优化】彻底移除了原先监听器的功能，统一切换至事件总线")]),t._v(" "),r("li",[t._v("【优化】引入 slf4j-simple 进行日志输出")]),t._v(" "),r("li",[t._v("【优化】升级 smart-socket 至 1.5.19，带来更安全的网络通讯，可支持 TLSv1.3")]),t._v(" "),r("li",[t._v("【优化】移除 fastjson 依赖")]),t._v(" "),r("li",[t._v("【优化】其他一些细节优化")]),t._v(" "),r("li",[t._v("【Bugfix】修复连接成功后userName未绑定至MqttSession的问题")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-3发布-2022-05-01"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-3发布-2022-05-01"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.3发布（2022-05-01）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("【新特性】Retain 消息内存持久化，并在客户端 CONNECT 成功后推送匹配的消息。")]),t._v(" "),r("li",[t._v("【新特性】新增飞行窗口（Inflight Window）功能，限制同时发送Qos1和Qos2的数量，保障通信质量。")]),t._v(" "),r("li",[t._v("【新特性】新增 MQTT Broker 和 MQTT Client 的消息重发功能。")]),t._v(" "),r("li",[t._v("【优化】重构 MQTT 消息模型设计。")]),t._v(" "),r("li",[t._v("【优化】改进消息内存持久化的处理逻辑。")]),t._v(" "),r("li",[t._v("【优化】提升并发场景下的线程安全性。")]),t._v(" "),r("li",[t._v("【优化】改进客户端的 subscribe 和 publish 的接口设计。")]),t._v(" "),r("li",[t._v("【优化】客户端正常断开连接时发送 DISCONNECT 消息。")]),t._v(" "),r("li",[t._v("【优化】MQTT 消息对象序列化调整为 JSON 格式。")]),t._v(" "),r("li",[t._v("【优化】主动拦截已断开连接的消息发送行为。")]),t._v(" "),r("li",[t._v("【优化】以正整数作为合法的 packetId。")]),t._v(" "),r("li",[t._v("【优化】补充压测的单元测试。")]),t._v(" "),r("li",[t._v("【bugfix】修复Broker端在某些异常场景下资源释放不彻底问题。")]),t._v(" "),r("li",[t._v("【bugfix】修复 CONNECT 消息的合法性校验错误问题：如果客户端提供的 ClientId 为零字节且清理会话标志为 0，服务端必须发送返回码为 0x02的 CONNACK 报文响应客户端的 CONNECT 报文。")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-2发布-2022-04-18"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-2发布-2022-04-18"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.2发布（2022-04-18）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("优化客户端ping消息：发送了 PINGREQ 报文之后，如果在合理的时间内仍没有收到 PINGRESP 报文，则关闭到服务端的网络连接。")]),t._v(" "),r("li",[t._v("优化Connect消息监听：网络连接建立后，如果服务端在合理的时间内没有收到 CONNECT 报文，服务端应该关闭这个连接。")]),t._v(" "),r("li",[t._v("优化 Connect ACK 消息监听：如果客户端在合理的时间内没有收到服务端的 CONNACK 报文，客户端应该关闭网络连接。")]),t._v(" "),r("li",[t._v("优化报文标识符的生成策略，防止同一标识符在同时刻被复用。")]),t._v(" "),r("li",[t._v("内存持久化会话状态。")]),t._v(" "),r("li",[t._v("重构Qos1和Qos2的回调处理机制。")]),t._v(" "),r("li",[t._v("bugfix:修复unsuback报文标识符取值不正确问题")]),t._v(" "),r("li",[t._v("bugfix:修复 broker 推送消息至subscriber时继承了publisher消息质量的问题。")]),t._v(" "),r("li",[t._v("其他一些代码细节优化")])]),t._v(" "),r("h2",{attrs:{id:"smart-mqtt-broker-v0-1发布-2022-04-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smart-mqtt-broker-v0-1发布-2022-04-14"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://gitee.com/smartboot/smart-mqtt/releases/tag/v0.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("smart-mqtt broker v0.1发布（2022-04-14）"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("支持MQTT v3.1.1协议标准")]),t._v(" "),r("li",[t._v("支持Qos0、Qos1、Qos2 的消息传递")]),t._v(" "),r("li",[t._v("支持遗嘱消息")]),t._v(" "),r("li",[t._v("支持 retain 消息")]),t._v(" "),r("li",[t._v("支持心跳消息")]),t._v(" "),r("li",[t._v("插件化设计模式")]),t._v(" "),r("li",[t._v("mqtt client 相关功能")]),t._v(" "),r("li",[t._v("优雅停机")])])])}),[],!1,null,null,null);r.default=_.exports}}]);