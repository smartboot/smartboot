if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b07082da.css",revision:"9559c67b7572db5989b63171fd3d35b1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/35.dc053720.js",revision:"dc8c7fb434dd954eb456147b9215646d"},{url:"assets/js/36.87a9911d.js",revision:"18c0b528149051903972bc5a43bbdf65"},{url:"assets/js/37.abc908ed.js",revision:"ca0fe6b99a7c0e68e5f958f300a5de04"},{url:"assets/js/38.1ee90c2d.js",revision:"b53b75271692c90f16f329080680890d"},{url:"assets/js/39.fa399e4d.js",revision:"e541f0d0512d754a23d90213db093a6f"},{url:"assets/js/app.03e484d3.js",revision:"cea97c3c802e320c29125254d34c2d67"},{url:"assets/js/layout-Blog.7bc98592.js",revision:"5a9714695ba81220bd51811988f335e3"},{url:"assets/js/layout-Layout.6827866a.js",revision:"420bf6b31d4c2a8e490d410676722ed7"},{url:"assets/js/layout-NotFound.59f7bf9f.js",revision:"270cd332293ab4c3bddcb3b23067cad4"},{url:"assets/js/layout-Slide.c68131e8.js",revision:"c3a80a0e5f5ecaeb885975ee029ea0ac"},{url:"assets/js/page--48099f42.9ca07985.js",revision:"830f99d1d9fd313c3c8404d846ddb699"},{url:"assets/js/page--6e038b40.8bc78c66.js",revision:"6586d791c126ec1d1e70c0725cbb9bd2"},{url:"assets/js/page-Home.e44c3a20.js",revision:"cc921c98d4a62aa9b6ecb1023427165d"},{url:"assets/js/page-smart-socket.ad414826.js",revision:"df77657a7b47ff3536837be28f87c91a"},{url:"assets/js/page-smartboot.005efdd1.js",revision:"553129d5878ddbb6c5d61b6acddef745"},{url:"assets/js/page-Spring集成smart-socket.f1f7f175.js",revision:"b81c6e861ea2f879489a4dbf366536d7"},{url:"assets/js/page-Summary.6489d0bb.js",revision:"a3a5c6f3d249f6eea8229e43fe5926c1"},{url:"assets/js/page-Websocket.987942d7.js",revision:"d3b968dc0cff876a2a88996fa221f8bb"},{url:"assets/js/page-付费服务.521e5e62.js",revision:"d65b17982de44c21cbf8021ceb66407d"},{url:"assets/js/page-关于捐赠.c700bba2.js",revision:"3d655a35aa017cfa613e292a6e53c5e3"},{url:"assets/js/page-客户端AioQuickClient.acd64dcb.js",revision:"625da009ca34728bbe18201672019d4b"},{url:"assets/js/page-小结.4cc61032.js",revision:"e14f4d4d727bba8e4614b07a58eed9f7"},{url:"assets/js/page-应用范围.811f0023.js",revision:"317cfe6da4058355ceecfe5db88c0f6b"},{url:"assets/js/page-快速上手.676c1a85.js",revision:"acd3e1d40f6c7bd38a9d6a854f862c0b"},{url:"assets/js/page-文件上传下载.0b2a212d.js",revision:"0246d358203c0e09ffaccd0db8b51d53"},{url:"assets/js/page-服务端AioQuickServer.ad6256f7.js",revision:"a9c587f4c17e825feb28f6f571b634bc"},{url:"assets/js/page-核心接口与状态机.c8d6f6d7.js",revision:"9e895224d11ae032e542900bb27ab12a"},{url:"assets/js/page-消息归类.bfff8787.js",revision:"ff92acc8ca0b6b0227f0993abd239d50"},{url:"assets/js/page-第三章smart-socket源码解析.dc71303c.js",revision:"754360803d94286b8c4d4b416c60afd5"},{url:"assets/js/page-第三章通信协议.42ddd451.js",revision:"4a70c25e629f6ee42c06d79f16b77bf4"},{url:"assets/js/page-第四章内存池.499d90bd.js",revision:"5ba2a902466e71969dab7696f3cc4131"},{url:"assets/js/page-请求路由.71975174.js",revision:"194a8cd69032ddcd8188b1fdfdc3917f"},{url:"assets/js/page-通信会话AioSession.a33ac160.js",revision:"7c9f527ad2cc3a729cb8274ccf844514"},{url:"assets/js/vendors~flowchart.0187c5e6.js",revision:"91fcfbde5583b14523061189d5ea5441"},{url:"assets/js/vendors~layout-Blog~layout-Layout.4f275bc9.js",revision:"b0200d605f80fe472a7922734ed26356"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ac8a61b1.js",revision:"55c757b9155655f30bdf9a278cc58dcf"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2a107b58.js",revision:"0928f322f72579c93006b8ed975228d8"},{url:"assets/js/vendors~photo-swipe.7f2c8a6e.js",revision:"a54ddb1c447ee53297c02ac87a64e5c8"},{url:"assets/js/vendors~reveal.1c8d4140.js",revision:"c139e5cc9fb2fd6bb6208ceb1a86fdc7"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"ab9d6948cb01e67198a52c3f6f4485fe"},{url:"article/index.html",revision:"4d797385a884ebda5ac47a15feac90e4"},{url:"category/index.html",revision:"5a83346d3ea7c65556c4be7b454eccd5"},{url:"donation/index.html",revision:"ea977039e80626550746b1bfee4658b5"},{url:"encrypt/index.html",revision:"74156127e37c17b1fce8fe96950014cf"},{url:"index.html",revision:"9ee803f004c031b8b74ef19bd4e81832"},{url:"service/index.html",revision:"0531abd367ad51f4a55fb21e247ad65e"},{url:"slide/index.html",revision:"6a1320e72379eb7af3857dc5f7166d75"},{url:"smart-http/file_upload/index.html",revision:"fbee812640ab56dbc67b3b79c951b7b5"},{url:"smart-http/getting-started/index.html",revision:"e6389101e00dfd643509f151092d3d13"},{url:"smart-http/http_route/index.html",revision:"f5e0a8388cb8d6a968a7176223f0f457"},{url:"smart-http/index.html",revision:"5b69ea91e774cb14a7bfd8d5eb7ad8cf"},{url:"smart-http/websocket/index.html",revision:"300ee27c7e4ac371ae146cdeb26d80b1"},{url:"smart-socket/BLANK/index.html",revision:"378e12a13eb82b3f9da4df6322be8cb6"},{url:"smart-socket/chapter-1/1.1-QuickStart/index.html",revision:"18386501057eb8d1ea2a20b9c747d873"},{url:"smart-socket/chapter-1/2.2-SpringIntegrated/index.html",revision:"4bf89dbc91586dc12bb49fbcc293d110"},{url:"smart-socket/chapter-1/SUMMARY/index.html",revision:"2e4d1c93976dcb39df14cafdb01253c5"},{url:"smart-socket/chapter-2/AioSession/index.html",revision:"09901bd4f00a7d8cc7087e72ee2f420d"},{url:"smart-socket/chapter-2/index.html",revision:"ce4f7a1c23759cde78f2598e716a8ecf"},{url:"smart-socket/chapter-2/Interface/index.html",revision:"5010d03653ace51089e6192eb04f4e98"},{url:"smart-socket/chapter-2/SUMMARY/index.html",revision:"fd25417cee67c2dc38b753ae8e4b2952"},{url:"smart-socket/chapter-2/客户端/index.html",revision:"4c1bdaf87b5061b5f4eab9707050de11"},{url:"smart-socket/chapter-2/服务端/index.html",revision:"485d2b1e2dca033b310a8fc1713c23cc"},{url:"smart-socket/chapter-3/1-消息归类/index.html",revision:"645ef40b38fd13c75ce970484ead148a"},{url:"smart-socket/chapter-3/halfWrapped/index.html",revision:"531c6e38599ef6673268f88a924eb178"},{url:"smart-socket/chapter-3/index.html",revision:"ffddc2934bc1b72d5cda9020e7bb4bc2"},{url:"smart-socket/chapter-5/index.html",revision:"feaaed6bc137c91227d66e803fc504dc"},{url:"smart-socket/chapter-6/index.html",revision:"b0facaf867a067a91c6afdb442dbffa8"},{url:"smart-socket/getting-started/index.html",revision:"ee8780dfe757e05d0116858ff7c9b664"},{url:"smart-socket/index.html",revision:"d7dca4b2407dd67cc25cd63401ea9c39"},{url:"star/index.html",revision:"2ba705ec601af1198aefc92aa6dc1d0d"},{url:"SUMMARY/index.html",revision:"9320b4e49f3af06abf516d2ee710013d"},{url:"tag/index.html",revision:"1b0845ccdb4cdd578bb2e0b1c70c7dc6"},{url:"timeline/index.html",revision:"e54074b8860dcead1be551a9c2602edd"}],{}),e.cleanupOutdatedCaches()}));
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
