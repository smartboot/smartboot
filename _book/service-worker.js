if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,f)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=f(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f592dd15.css",revision:"9559c67b7572db5989b63171fd3d35b1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/44.b67f3ef7.js",revision:"3b212ee621b57ca1f3c3a776c36efcfc"},{url:"assets/js/45.686a33aa.js",revision:"619f165ceb313437f5d735ccd7c27ca0"},{url:"assets/js/46.547c1531.js",revision:"a2a985cd39374fe321222da16ef6ea6e"},{url:"assets/js/47.161400a9.js",revision:"37c868f09d3274af85c591728719c578"},{url:"assets/js/48.ffa56e4a.js",revision:"128dd3ffe184fb7ee0bf59eb884dbc08"},{url:"assets/js/49.5c541760.js",revision:"850a4c6c0c72398f2c430ea50427d156"},{url:"assets/js/app.a120e623.js",revision:"a32dcf66adce643f969be32e217398d0"},{url:"assets/js/layout-Blog.e0fa9ed5.js",revision:"e1882e00dd9f5edb9c3acc4f709a07b5"},{url:"assets/js/layout-Layout.f793ac5c.js",revision:"63a578dd9037456e5865db2c5b3830e5"},{url:"assets/js/layout-NotFound.46064718.js",revision:"d36d278407441af41f821b9e33b7bd22"},{url:"assets/js/layout-Slide.f61267c3.js",revision:"2ab246ac83766e94a56626f0c56f5695"},{url:"assets/js/page--48099f42.3e516bc5.js",revision:"eb8298c1a6b106bd93be2455ea628a77"},{url:"assets/js/page--6e038b40.86a6769a.js",revision:"2a034107e3b85772b401f28f212117a4"},{url:"assets/js/page-💰JavaAIO线程模型.8a58b373.js",revision:"c8d10e9ce0cfdc522e39d3d2fa752df3"},{url:"assets/js/page-Home.0db562dc.js",revision:"71801789cebcfbac0140a4c077c0de26"},{url:"assets/js/page-Http解析原理.f48f01cf.js",revision:"840004a0d102bc5f95f0184ae23d6c73"},{url:"assets/js/page-smart-im.0884cd4f.js",revision:"bf7a63acd54bf6f9b754aa599e2fd03e"},{url:"assets/js/page-smart-socket.7bf5527b.js",revision:"57fa70178e0c453ec0aab3468fd3934e"},{url:"assets/js/page-smart-socket插件化设计.56863b02.js",revision:"85b6c2a24ac2ae639e3f5567dc07e95f"},{url:"assets/js/page-smartboot.9d924536.js",revision:"560c5a4492ab38643d16dcb309d8b270"},{url:"assets/js/page-Spring集成.e9a9a3c8.js",revision:"1a7f9308ce88307f5f811ba61abfa470"},{url:"assets/js/page-Summary.3602e228.js",revision:"9cccb1cdedc3b553dc03d778e41c0fa5"},{url:"assets/js/page-Websocket.acb26d47.js",revision:"927a0abafe3ac064bd2276e6b5533695"},{url:"assets/js/page-付费服务.90f0dea9.js",revision:"5c52483c2c16f3035b9be3dc328777dd"},{url:"assets/js/page-关于smart-socket.134a9351.js",revision:"3a47610bdf6bc4447c6e28937277555a"},{url:"assets/js/page-关于捐赠.9b1cf3b1.js",revision:"202d0f1f3e8495adb675669c317aaafd"},{url:"assets/js/page-安全性.7ed4c5e3.js",revision:"e8c8a2af3af853eefeae252e4570d79c"},{url:"assets/js/page-客户端AioQuickClient.4e088945.js",revision:"c11048a6808bdd39873a7513c56c80c0"},{url:"assets/js/page-小结.99fb5885.js",revision:"416d7ef6734a63fe14cd8d3d330f8b14"},{url:"assets/js/page-开发团队.e3b69d12.js",revision:"b747df9ad63c5675e8e888084ea7b59e"},{url:"assets/js/page-开源众筹.ea5955f6.js",revision:"c12678fa407258190026c9202f7ddbce"},{url:"assets/js/page-快速上手.4e15b95a.js",revision:"9bc15c9d7c90b55e715a2568d53b8d48"},{url:"assets/js/page-插件清单.fbdfc94b.js",revision:"5aa99ffd215967f78b2810ac86e68c6a"},{url:"assets/js/page-服务端AioQuickServer.0be22d31.js",revision:"739a5adeccf8ec1b6da48aa457785f3c"},{url:"assets/js/page-核心接口与状态机.19483ee5.js",revision:"1a5072b651c39e4fbfb410d88530b67b"},{url:"assets/js/page-案例展示.edaa4a03.js",revision:"1a10f594a07826719ca9a2f78978c620"},{url:"assets/js/page-消息归类.03622c81.js",revision:"9d38749a92b9bb6bb444e3f627937170"},{url:"assets/js/page-第三章smart-socket源码解析.1f220d8d.js",revision:"524e0252bb112b163e77826f1e690723"},{url:"assets/js/page-第三章通信协议.ab90736f.js",revision:"9c8dd3c96946bdfc09afeac1d9490435"},{url:"assets/js/page-第四章内存池.04eaf587.js",revision:"15430e9da73ac47cbade8112373b085f"},{url:"assets/js/page-评测数据.575967f3.js",revision:"156c5fae315255cc677b77271c8428db"},{url:"assets/js/page-请求路由.734a841c.js",revision:"56ec708ecbfd5248ad892fb12bf13bef"},{url:"assets/js/page-通信会话AioSession.9bd0e4ca.js",revision:"b53eba4cebad038fc25373f708507822"},{url:"assets/js/vendors~flowchart.4bbd403e.js",revision:"f47221a29321dae7fa762092de25cc68"},{url:"assets/js/vendors~layout-Blog~layout-Layout.e83f3c37.js",revision:"5ba15dbe8d42f328fe0b309075e1f14a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.1910f4ca.js",revision:"e517de863d6f9edef6e9a14e3af56e3e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2a107b58.js",revision:"0928f322f72579c93006b8ed975228d8"},{url:"assets/js/vendors~photo-swipe.e19a2e69.js",revision:"15e7be756ee36270ce4ee50996d5dcf1"},{url:"assets/js/vendors~reveal.63bf05c9.js",revision:"28d51c6b3d13a68db8124544e977fe2a"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"fb392d262f265761f37c8c060187684e"},{url:"article/index.html",revision:"3d3a4157e2977ea31e6840be767f03f7"},{url:"category/index.html",revision:"c2a71936d4bd417ac83f1487842c9a40"},{url:"crowdfunding/index.html",revision:"056fc4d78bfdf0b6b221f817fd9c0b3a"},{url:"donation/index.html",revision:"3a118bd9e4681b5f8b110cf9fe8684d7"},{url:"encrypt/index.html",revision:"0a76526a18ed877e7e311b8908758968"},{url:"index.html",revision:"b6c7e0316a9043a5697c763347a1e767"},{url:"members/index.html",revision:"9d8afe22b4e01498376395b32264d9c4"},{url:"service/index.html",revision:"14845c0aa98760fede24c2f4f7f30201"},{url:"slide/index.html",revision:"0c95e962bbef0d6bf973d6547754cad1"},{url:"smart-http/case/index.html",revision:"d39f1e966c23c9c8b7b8fca41b94c88f"},{url:"smart-http/getting-started/index.html",revision:"db14dc2a28d2abd1967dc5388eb00c0f"},{url:"smart-http/http_decode/index.html",revision:"585dd5ed7e71be5377bbee0a444a51ee"},{url:"smart-http/http_route/index.html",revision:"1fd86ce831bd1949d0d74daa82dbd2a3"},{url:"smart-http/index.html",revision:"a334bf212334245199e67da2e9758cf6"},{url:"smart-http/unit_test/index.html",revision:"d430ea2b565dfea00a2e28803d2a6faf"},{url:"smart-http/websocket/index.html",revision:"626a3c14ea321801076c7af024b158fc"},{url:"smart-im/index.html",revision:"c47a0f30b699d96fc778eaf781c816d5"},{url:"smart-servlet/index.html",revision:"9ae915da6d246b5765245f1a38293fe1"},{url:"smart-servlet/performance/test-data/index.html",revision:"249f0c3817d7101b042a69d39f5e254a"},{url:"smart-servlet/plugins/index.html",revision:"95433f0a38790e95ae44986080821947"},{url:"smart-servlet/use_guide/index.html",revision:"be747cab3898d8889497057e51859b85"},{url:"smart-socket/about/index.html",revision:"e690f7989029288bb10c5ca348f103e3"},{url:"smart-socket/BLANK/index.html",revision:"e36930f18e77c0d4c932823a065c6353"},{url:"smart-socket/chapter-1/1.1-QuickStart/index.html",revision:"2117dc2c033e7a5a31b3e91a8d79b5d4"},{url:"smart-socket/chapter-1/SUMMARY/index.html",revision:"ea7b0eb43a02b85c6199f658671dfe68"},{url:"smart-socket/chapter-2/AioSession/index.html",revision:"06722085acd8448122f6311dfffc2a1f"},{url:"smart-socket/chapter-2/index.html",revision:"b45a45b517a1a479a998dd1ce199abd7"},{url:"smart-socket/chapter-2/Interface/index.html",revision:"0affe97b3b83dd7c12d2a6bf4082d145"},{url:"smart-socket/chapter-2/SUMMARY/index.html",revision:"b43338e749c29a91b71467a31f545578"},{url:"smart-socket/chapter-2/客户端/index.html",revision:"7c5bd6d00ed7c5b088a0884334c53db8"},{url:"smart-socket/chapter-2/服务端/index.html",revision:"de31cfd87bcefe5e310c6fc4d2ee85a8"},{url:"smart-socket/chapter-3/1-消息归类/index.html",revision:"8f1683925d594ab1bb1eaf23d8bdc28d"},{url:"smart-socket/chapter-3/halfWrapped/index.html",revision:"9e1a566d09b1a39e27941696150ee094"},{url:"smart-socket/chapter-3/index.html",revision:"019553e8bd05890a413ff9382f900d45"},{url:"smart-socket/chapter-5/index.html",revision:"0a372d6c3df101ddb3c7d9087bb5cc6d"},{url:"smart-socket/getting-started/index.html",revision:"b0333b914b753473fa6cd75c4950d7a7"},{url:"smart-socket/index.html",revision:"782281b2ceeeca96e81bf4b454d86e93"},{url:"smart-socket/java-aio-thread/index.html",revision:"d75e5befea2a7d4f4f788d643d3a5793"},{url:"smart-socket/smart-socket-plugin-design/index.html",revision:"c987ab625bcde501c3dc186fa8d5c023"},{url:"smart-socket/spring-integrated/index.html",revision:"c3243f9501a804935c310eadae1fd663"},{url:"star/index.html",revision:"e3b5226523d87ac8a933c2a8ec54a7b0"},{url:"SUMMARY/index.html",revision:"3d5c0e015f16a481a9d8e66ee36e5cd4"},{url:"tag/index.html",revision:"0b7930672b427c45874859d30ca3a1b7"},{url:"timeline/index.html",revision:"a46020ef94c182be8a874d22b13a2334"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
