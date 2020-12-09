
## 第三章 smart-socket源码解析
smart-socket的源码按maven模块和功能划分的结构如下：
- aio-core 核心模块
    - 通信内核
    - 内存池
- aio-pro 扩展模块
    - UDP 通信
    - 解码器：固定长度解码器、特定结束符解码器
    - 插件：黑名单、内存池监控、心跳、运行指标采集、断链重连、Socket配置项、TLS/SSL通信
    - 工具类
    
前文也提及过，aio-core 是 smart-socket 的核心模块，掌握该模块就基本掌握了smart-socket的设计精髓。

而 aio-pro 是专为应用层开发提供了一些辅助性能力，如果恰好其中某个功能符合你的需求，可直接拿去使用。
若不满足，你也可以单独进行开发。在此，我们非常欢迎大家贡献自己的优秀设计，为 smart-socket 添砖加瓦。