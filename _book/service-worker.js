if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f592dd15.css",revision:"9559c67b7572db5989b63171fd3d35b1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/38.b635d0aa.js",revision:"b2e8838354a543803fdde3008eef3099"},{url:"assets/js/39.da79145d.js",revision:"667a108359c42aad37b5e7e2fcefcffe"},{url:"assets/js/40.ad965b8f.js",revision:"ee2a65fc7ebe334ad830611e52cad08f"},{url:"assets/js/41.4df299c0.js",revision:"4b712b4d929a82e5293d7cc6872c46ca"},{url:"assets/js/42.68d51672.js",revision:"5fb898d79348cdc096f6bfbdf82e4c13"},{url:"assets/js/app.ab9324ef.js",revision:"401a9c67c54f716134e955d44c6b761d"},{url:"assets/js/layout-Blog.94c06506.js",revision:"d9973af4a4b1af936bfd2d72dc00dc56"},{url:"assets/js/layout-Layout.a9f26245.js",revision:"960c43370918a8e8f157d77f1ef54d8c"},{url:"assets/js/layout-NotFound.d05784ef.js",revision:"9ba036be445dc20b57a86c1f8d616a8b"},{url:"assets/js/layout-Slide.f61267c3.js",revision:"2ab246ac83766e94a56626f0c56f5695"},{url:"assets/js/page--48099f42.9ca07985.js",revision:"830f99d1d9fd313c3c8404d846ddb699"},{url:"assets/js/page--6e038b40.0d7b6469.js",revision:"e8ece3c70160e7b3b2ba9f6304facb52"},{url:"assets/js/page-Home.9d95cff4.js",revision:"dd3fad4cfde3f42f0115233f1c083802"},{url:"assets/js/page-smart-im.294a5769.js",revision:"665b24c18639b2b3b513ba5e248f830b"},{url:"assets/js/page-smart-socket.8cd8a993.js",revision:"bef6939a8a3d09e8ef6526aa5452b43a"},{url:"assets/js/page-smartboot.940c698c.js",revision:"cd523395b9ca6fd00eb38d3879b3b7c4"},{url:"assets/js/page-Spring集成smart-socket.a9e9d9d3.js",revision:"47f4fd0980911de9b55e14c80b550371"},{url:"assets/js/page-Summary.3097a1c9.js",revision:"6b6204d0fd368bca1b5a9643520710fa"},{url:"assets/js/page-Websocket.77127118.js",revision:"25b9a493ffc8c315b4e33b894b5350e5"},{url:"assets/js/page-付费服务.c72f11b8.js",revision:"6616ec57a6c001c384ed4f8589f00834"},{url:"assets/js/page-关于捐赠.80bda449.js",revision:"a1090530c8b380c01a61e60c92a1e714"},{url:"assets/js/page-客户端AioQuickClient.0017d840.js",revision:"48e4625f33990678dde40ebcd58685b0"},{url:"assets/js/page-小结.744ceff5.js",revision:"d1a069043b0619edf8a9a97ef39fd8ec"},{url:"assets/js/page-应用范围.fca171bc.js",revision:"ae1e0ea63d2b666947651852382bf848"},{url:"assets/js/page-开发团队.05140325.js",revision:"54519a977757fcca6d78f98c231bc830"},{url:"assets/js/page-开源众筹.651c8c68.js",revision:"7e2a77cce32a9a255ca1e00bbf595092"},{url:"assets/js/page-快速上手.2039074b.js",revision:"0dba9ab12bffbe91725ce4488c9bd17f"},{url:"assets/js/page-文件上传下载.acb48cf9.js",revision:"b83d8e07407601eb3bb5b4bb4aad5d6c"},{url:"assets/js/page-服务端AioQuickServer.3e61972e.js",revision:"25304829ae6ccae7ed59ed6ba414550b"},{url:"assets/js/page-核心接口与状态机.84fa2740.js",revision:"55ee0e2eddce71ac2a74d1f1be4ff1a5"},{url:"assets/js/page-消息归类.5ba9969e.js",revision:"798514e26909fdca85f730c7db332ebc"},{url:"assets/js/page-第三章smart-socket源码解析.be174cf4.js",revision:"fa6b766965b26811454d0872d36c41a3"},{url:"assets/js/page-第三章通信协议.453c3a6d.js",revision:"663072a94e2ff0d7f218b7dcf4a11d2f"},{url:"assets/js/page-第四章内存池.91956e0b.js",revision:"7c242ffe734528b9224111a27d6b20ec"},{url:"assets/js/page-请求路由.87163642.js",revision:"86e424e7514d173c5677a33c74d50495"},{url:"assets/js/page-通信会话AioSession.5a2931ba.js",revision:"4a9f493e89dfb58fbf59fb1958d11afc"},{url:"assets/js/vendors~flowchart.38ad41dd.js",revision:"81c786c43aab790a86544e099cadd0d2"},{url:"assets/js/vendors~layout-Blog~layout-Layout.d08c29d4.js",revision:"d6daf4eb1a301f7c367f1c0648656be5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.50e86e89.js",revision:"350e9623c62193c721d0d6cb86616377"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2a107b58.js",revision:"0928f322f72579c93006b8ed975228d8"},{url:"assets/js/vendors~photo-swipe.9486bae3.js",revision:"43a94f2096cfe2299b75725b5cb02567"},{url:"assets/js/vendors~reveal.6b94cb7d.js",revision:"88a07f0858975de2302347147a0cf902"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"e252bf52c821854875008b9eae517bf2"},{url:"article/index.html",revision:"99822d24e380ca80c1c014f2aafc9660"},{url:"category/index.html",revision:"59fcb1e04a3e26642372bab7cbc2ea86"},{url:"crowdfunding/index.html",revision:"1a2d49ee418551fd58c0a9d5bc5db7c5"},{url:"donation/index.html",revision:"fc606f4025308274d0087fb8ca3fb2f0"},{url:"encrypt/index.html",revision:"67a51728bcc04e6689773710264a5c1d"},{url:"index.html",revision:"7aa7a01d0cddbbcdd98ef38e1a645142"},{url:"members/index.html",revision:"6ddd01c0a6ac52d599368cd78f849ce1"},{url:"service/index.html",revision:"d5ea26eb068b22374bbba67795fdf2ed"},{url:"slide/index.html",revision:"c966da6d3387a5de9c450e2f7af92ee9"},{url:"smart-http/file_upload/index.html",revision:"8713e63f93027234cefbf3d2a41d78b0"},{url:"smart-http/getting-started/index.html",revision:"ee13d5884737a77f7a84fb441725020d"},{url:"smart-http/http_route/index.html",revision:"2d34b86059649c13afffd6eb31819a19"},{url:"smart-http/index.html",revision:"a6125ee3727e270e4587d419ebc81204"},{url:"smart-http/websocket/index.html",revision:"3977b1715423c3ef2530094cbbbea5fb"},{url:"smart-im/index.html",revision:"dbfbf2ab022129ffb542f1956859fad3"},{url:"smart-socket/BLANK/index.html",revision:"291ea280342ef0da768aa0786ade4cfb"},{url:"smart-socket/chapter-1/1.1-QuickStart/index.html",revision:"4f82b530aff46262e697f5b4964e8f7c"},{url:"smart-socket/chapter-1/2.2-SpringIntegrated/index.html",revision:"65dee93f548f512478cc3de05fdaa6fe"},{url:"smart-socket/chapter-1/SUMMARY/index.html",revision:"51cd2c2f6ef9828ac455fe5db2c1d386"},{url:"smart-socket/chapter-2/AioSession/index.html",revision:"7c06ff15ca5c29316a8edaf43bf84a6f"},{url:"smart-socket/chapter-2/index.html",revision:"e46f0570dc07b76c3e1ca78b7cd79c6c"},{url:"smart-socket/chapter-2/Interface/index.html",revision:"194e650e4ef9ee2c9571b3eaf5ca9d8e"},{url:"smart-socket/chapter-2/SUMMARY/index.html",revision:"75d35b0683ce0768c6900c287369954f"},{url:"smart-socket/chapter-2/客户端/index.html",revision:"44681ae471a1d428340eb840bb0c5363"},{url:"smart-socket/chapter-2/服务端/index.html",revision:"4f0d2ce86b435f069872fc3a23380c9b"},{url:"smart-socket/chapter-3/1-消息归类/index.html",revision:"ef7274402499898c11a2c96d2686df46"},{url:"smart-socket/chapter-3/halfWrapped/index.html",revision:"c16121e5b94e83c3dfdb094ff0ed4e12"},{url:"smart-socket/chapter-3/index.html",revision:"5a3cb8a17cf1a88c5091c7558f2c2979"},{url:"smart-socket/chapter-5/index.html",revision:"0439e8a8156999536f8336b7e88a1fd2"},{url:"smart-socket/chapter-6/index.html",revision:"650803aa7b04dcc87c569472ded5a7f2"},{url:"smart-socket/getting-started/index.html",revision:"a9b082be427d32226ab0b855066326b6"},{url:"smart-socket/index.html",revision:"861a46e39899f66c01c93175988234a9"},{url:"star/index.html",revision:"9c773c714a0472c9a9d03a9902ceab1d"},{url:"SUMMARY/index.html",revision:"d23cd906ba02edcfc60974c47b2bc3f7"},{url:"tag/index.html",revision:"d868d980df1f372edaf88481c36b05a3"},{url:"timeline/index.html",revision:"90c515dfbfc8c3d5ee72c3fc83efd63f"}],{}),e.cleanupOutdatedCaches()}));
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
