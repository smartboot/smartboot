import{r as t,o as e,c as p,a as n,b as c,F as o,d as a,e as l}from"./app.f398be83.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("p",null,"smart-http \u662F\u53EF\u7F16\u7A0B\u7684 Http \u5E94\u7528\u5FAE\u5185\u6838\u3002\u5C01\u88C5\u4E86\u6807\u51C6\u7684 Http\u3001Websocket \u534F\u8BAE\uFF0C\u6EE1\u8DB3\u7528\u6237\u5BF9\u4E8E Server \u7AEF\u548C Client \u7AEF\u7684\u5F00\u53D1\u9700\u6C42\u3002",-1),k=a("\u8FD9\u662F\u76EE\u524D\u5E02\u9762\u4E0A\u4E3A\u6570\u4E0D\u591A\u7684\u505A\u5230\u4E25\u683C\u51C6\u5B88 RFC2616 \u89C4\u8303\uFF0C\u53C8\u540C\u65F6\u517C\u987E\u5353\u8D8A\u6027\u80FD\u7684 Http \u670D\u52A1\u5668\uFF0C\u5728\u4E09\u65B9\u8BC4\u6D4B "),d={href:"https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=plaintext&l=zik0vz-sf",target:"_blank",rel:"noopener noreferrer"},g=a("TechEmpower"),m=a("\u7ED3\u679C\u4E2D\u6709\u7740\u6781\u4E3A\u4EAE\u773C\u7684\u8868\u73B0\u3002"),h=l(`<p>\u4F60\u53EF\u4EE5\u5C06 smart-http \u5F00\u53D1\u7684\u7A0B\u5E8F\u90E8\u7F72\u5728\u4EFB\u4F55 Java 8 \u53CA\u4EE5\u4E0A\u7248\u672C\u7684\u8BBE\u5907\u4E0A\u3002 \u7ECF\u8FC7\u6211\u4EEC\u7684\u4E0D\u61C8\u4F18\u5316\uFF0C\u5DF2\u7ECF\u6700\u5927\u9650\u5EA6\u7684\u964D\u4F4E\u7A0B\u5E8F\u8FD0\u884C\u671F\u95F4\u5BF9\u4E8E\u5185\u5B58\u548C GC \u7684\u5F00\u9500\u3002</p><p>smart-http\uFF0C\u662F\u4E00\u6B3E\u4F53\u73B0\u4E86\u4F5C\u4E3A\u5F00\u6E90\u4EBA\u7684\u5DE5\u5320\u7CBE\u795E\u7684\u4F5C\u54C1\u3002</p><h2 id="\u5F53\u524D\u6700\u65B0\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u6700\u65B0\u7248\u672C" aria-hidden="true">#</a> \u5F53\u524D\u6700\u65B0\u7248\u672C</h2><h3 id="server-\u7248" tabindex="-1"><a class="header-anchor" href="#server-\u7248" aria-hidden="true">#</a> Server \u7248</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.smartboot.http<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>smart-http-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="client-\u7248" tabindex="-1"><a class="header-anchor" href="#client-\u7248" aria-hidden="true">#</a> Client \u7248</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.smartboot.http<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>smart-http-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7);function b(_,v){const s=t("ExternalLinkIcon");return e(),p(o,null,[u,n("p",null,[k,n("a",d,[g,c(s)]),m]),h],64)}var I=r(i,[["render",b]]);export{I as default};
