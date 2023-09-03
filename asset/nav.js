let nav = {
  name: "逍遥小酒馆",
  description: "",
  list: [],
  ele: document.getElementsByClassName("navlist"),
}

nav.list[0] = [{
  name: "搜索引擎", icon: "fa-brands fa-searchengin", item: [
    { text: "Google", icon: "fa-brands fa-google", link: "https://www.google.com/" },
    { text: "百度", link: "https://www.baidu.com/" },
    { text: "微信搜索", link: "https://weixin.sogou.com/" },
    { text: "知乎", link: "https://www.zhihu.com/" },
    { text: "百度翻译", link: "https://fanyi.baidu.com/" },
    { text: "DeepL", desc: "最准确翻译", link: "https://www.deepl.com/translator" },
    { text: "百度汉语", desc: "拼音查询", link: "https://hanyu.baidu.com/" },
  ]
}, {
  name: "常用网址", icon: "fa-solid fa-school", item: [
    { text: "地产工作台", desc: "FDC360.COM", link: "https://www.fdc360.com/" },
    { text: "巧夺天工", desc: "WPS 365协同", link: "https://qdtg.xyz/" },
    { text: "逍遥小酒馆", desc: "2ND.CN", link: "https://www.2nd.cn/wp-admin/" },
    { text: "Claude", desc: "AI", link: "https://claude.ai/" },
    { text: "7888.fun", desc: "ChatGPT", link: "https://7888.fun" },
    { text: "Gamma", desc: "AI生成ppt", link: "https://gamma.app/" },
    { text: "腾讯AI创作", desc: "Tencent AI Lab", link: "https://effidit.qq.com/" },  
    { text: "Notion", desc: "网页版登录", link: "http://noiton.so" },
    { text: "FlowUs", desc: "市场小组协同", link: "https://www.flowus.cn/" },
    { text: "语雀", desc: "产品小组协同", link: "https://www.yuque.com/" },
    { text: "Cubox", desc: "Web Clipper", link: "https://cubox.pro/my/inbox" }, 
    { text: "GitHub", icon: "fa-brands fa-github", desc: "项目托管平台", link: "http://www.github.com/" }, 
     { text: "GitHub", icon: "fa-brands fa-github", desc: "GitHub开源项目", link: "https://hellogithub.com/" }, 
    
    { text: "新闻联播", desc: "新闻联播文字版", link: "http://www.tumute.com/wenziban/" }, 
    { text: "经济数据", icon: "fa-solid fa-chart-column", desc: "东方财富", link: "https://data.eastmoney.com/cjsj/cpi.html" },    
  ]
}, {
  name: "读书电影", icon: "fa-solid fa-book-open-reader", item: [
    { text: "微信读书", icon: "fa-solid fa-bookmark", link: "https://weread.qq.com/" },
    { text: "豆瓣", link: "https://www.douban.com" },
    { text: "TMDB", desc: "需要网络支持", link: "https://tmdb.org/" },
    { text: "ZBook", desc: "电子书", link: "https://zbook.eu.org/" },
    { text: "Mini4K", desc: "高清电影", link: "https://www.mini4k.com/" },
    { text: "OpenWrt", desc: "路由", link: "http://192.168.2.1/cgi-bin/luci/admin/services/shadowsocksr" },
    { text: "Nas外", desc: "外网", link: "http://1717.me:5000/" },
    { text: "Nas内", desc: "内网", link: "http://192.168.124.37:5000/" },
  ]
}, {
  name: "信息输入", icon: "fa-solid fa-circle-nodes", item: [
    // { text: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { text: "RSSHUB", desc: "需要网络支持", icon: "fa-solid fa-mobile-screen-button", link: "https://hzyaolin.vercel.app/" },
    { text: "WeRSS", desc: "微信公众号转RSS", icon: "fa-solid fa-rss", link: "https://werss.app/" },
    { text: "中文播客榜", icon: "fa-solid fa-podcast", desc: "播客排行榜", link: "https://xyzrank.com/" },
    { text: "ChinesePodcasts", icon: "fa-solid fa-podcast", desc: "中文播客导航", link: "https://github.com/alaskasquirrel/Chinese-Podcasts" },
    { text: "Youtube", icon: "fa-brands fa-youtube", link: "https://www.youtube.com" },
    { text: "哔哩哔哩", icon: "fa-brands fa-bilibili", link: "https://www.bilibili.com" },
    { text: "推特", icon: "fa-brands fa-twitter", link: "https://twitter.com/" },
    { text: "小红书", link: "https://xiaohongshu.com" },
    { text: "少数派", link: "https://sspai.com/" },
    { text: "Chiphell", link: "https://www.chiphell.com/" },
  ]
},]

nav.list[1] = [{
  name: "专业导航", icon: "fas fa-angle-double-right", item: [
    { text: "OsLaw", desc: "法律导航", link: "https://www.oslaw.net/" },
    { text: "AGI之路", desc: "乔木 AI", link: "https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e" },
    { text: "ReWrok", desc: "效率工具导航", link: "https://rework.tools/" },
    { text: "媒体库", desc: "新闻媒体导航", link: "https://laosheng.top/fly/" },
    { text: "奇迹秀", desc: "设计导航", link: "https://www.qijishow.com/" },
  ]
}, {
  name: "域名空间", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.msg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要投稿</a>`,
  item: [
    { text: "GitHub", desc: "开源托管平台", link: "https://github.com/" },
    { text: "Vercel", desc: "开源平台", link: "https://vercel.com/" },
    { text: "腾讯云", desc: "DNS 服务器", link: "https://cloud.tencent.com/" },
    { text: "阿里云", desc: "域名 空间", link: "https://www.aliyun.com/" },
    { text: "eName", desc: "常用服务商", link: "https://www.ename.cn" },
    { text: "西部数据", desc: "常用服务商", link: "https://west.cn" },
    { text: "NameCheap", desc: "域名服务商", link: "https://www.namecheap.com/" }, 
    { text: "域名交易平台", desc: "阿里云旗下", link: "https://mi.aliyun.com" },  
    { text: "广航域名", desc: "非主流后缀", link: "https://ymp.com/" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "Edit.Photo", desc: "在线免费修图", link: "https://edit.photo/" },  
    { text: "汉字转拼音", desc: "查域名常用", link: "https://www.wetools.com/pinyin" },  
    { text: "WeTools", link: "http://www.wetools.com/" },
    { text: "帮小忙", desc: "腾讯", link: "https://tool.browser.qq.com/" },
    { text: "IconFont", desc: "阿里", link: "https://www.iconfont.cn/" },
    { text: "图标", desc: "FontAwesome", link: "https://fa6.dashgame.com/"},
    { text: "菜鸟工具", link: "https://c.runoob.com/" },
    { text: "免费图库", desc:"unsplash", link: "https://unsplash.com/" },
    { text: "标小智", desc:"在线生成logo", link: "https://www.logosc.cn/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "2ND软件", link: "https://www.2nd.cn/soft" },
    { text: "联想应用商店", link: "https://lestore.lenovo.com/" },
    { text: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "Digit77", link: "https://www.digit77.com/" },
    { text: "JB破解", link: "https://3.jetbra.in/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.msg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "地产工作台", link: "https://www.fdc360.com/" },
    { text: "逍遥小酒馆", link: "https://www.2nd.cn/" },
    { text: "咖啡豆Obsidian", link: "https://obsidian.vip/" },
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon}"></i> ${group.name}</h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a ${item.desc ? `data-sub="${item.desc}"` : ``}
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
      >${item.icon ? `<i class="${item.icon}"></i>` : ``}${item.text}</a>
      `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})
