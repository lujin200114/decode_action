//Tue Jan 07 2025 23:24:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const D_R_0x35e9c0 = new D_R_0x18b109("听书APP");
const D_R_0x1da05b = "V1.0.0";
const D_R_0x28e2e1 = "wxtsapp";
let D_R_0x5d3ecd = D_R_0x35e9c0.getjson(D_R_0x28e2e1, []);
const D_R_0x42fb4e = D_R_0x35e9c0.isNode() ? require("./sendNotify") : "";
const D_R_0x4aa7c5 = D_R_0x35e9c0.isNode() ? require("./david_cookies") : "";
let D_R_0x136af7 = D_R_0x35e9c0.getdata("tguserid") || 1;
let D_R_0x3674df = D_R_0x35e9c0.getdata("wxtsactivecode") || 0;
let D_R_0x5f2088 = D_R_0x35e9c0.getdata("wxtskm") || 0;
let D_R_0x34f837 = D_R_0x35e9c0.getval("wxtsuserck") || 1;
let D_R_0x1323ec = D_R_0x35e9c0.getval("apiHost") || "http://192.168.1.151:9000";
const D_R_0x2ee68e = 0;
let D_R_0x2a3744 = D_R_0x35e9c0.getval("tz") || "1";
var D_R_0x5d8f2b = "";
var D_R_0x5b51d0 = "";
let D_R_0x2bed1b = [];
let D_R_0x3b7db7 = [];
let D_R_0xe196d8 = [];
let D_R_0x10654c = "";
let D_R_0x43822c = "";
let D_R_0x2905c2 = "";
let D_R_0x2a9f0c = "";
let D_R_0x242358 = "";
let D_R_0x41fbc5 = "";
let D_R_0xf031e4 = "";
let D_R_0x2eb3e9 = "";
let D_R_0x48be8a = 1;
let D_R_0xb86e0b = 1;
let D_R_0x19aed8 = 1;
let D_R_0x14029a = 1;
let D_R_0x1922d5 = "";
let D_R_0x9eb87a = "";
let D_R_0x4ddb8a = 3;
let D_R_0x11bdcd = "";
if (D_R_0x35e9c0.isNode()) {
  if (process.env.WXTSAPP) {
    D_R_0x5d3ecd = JSON.parse(process.env.WXTSAPP);
  } else {
    D_R_0x5d3ecd = D_R_0x4aa7c5.WXTS;
  }
  D_R_0x136af7 = process.env.TGUSERID;
  D_R_0x3674df = process.env.WXTSACTIVECODE;
  if (process.env.APIHOST) {
    D_R_0x1323ec = process.env.APIHOST;
  }
  D_R_0x5f2088 = process.env.wxtsKM;
  D_R_0x5d8f2b = new Date(new Date().getTime()).getHours();
  D_R_0x5b51d0 = new Date(new Date().getTime()).getMinutes();
  D_R_0x35e9c0.log("🔔 当前环境: Node, 当前时间：" + D_R_0x5d8f2b + "点");
} else {
  D_R_0x5d8f2b = new Date().getHours();
  D_R_0x5b51d0 = new Date().getMinutes();
  D_R_0x35e9c0.log("🔔 当前环境: 手机代理, 当前时间：" + D_R_0x5d8f2b + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await D_R_0x516ae6();
  } else {
    if (!D_R_0x3674df || !D_R_0x136af7 || D_R_0x136af7 == 1 || D_R_0x3674df == 0 || D_R_0x3674df.length != 32) {
      D_R_0x35e9c0.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await D_R_0x3723c9(D_R_0x28e2e1, D_R_0x136af7, D_R_0x3674df);
    D_R_0x35e9c0.log("📢 " + D_R_0x41fbc5);
    D_R_0x35e9c0.log("🔔 当前脚本版本号: " + D_R_0x1da05b + "，最新版本号: " + D_R_0x2a9f0c);
    if (D_R_0x11bdcd != "") {
      let _0x29f174 = new Date(D_R_0x11bdcd).getTime();
      let _0x5bdb0d = new Date().getTime();
      if (_0x5bdb0d > _0x29f174) {
        D_R_0x35e9c0.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (D_R_0x1da05b < D_R_0x2a9f0c) {
      D_R_0x35e9c0.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      D_R_0x23999c("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (D_R_0x2905c2 != true) {
      D_R_0x35e9c0.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (D_R_0x1922d5 != true) {
      D_R_0x35e9c0.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (D_R_0x43822c != true) {
      D_R_0x35e9c0.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (D_R_0x2eb3e9 == true) {
      D_R_0x35e9c0.log("🔔 此脚本采用付费模式。🔒");
    } else {
      D_R_0x35e9c0.log("🔔 此脚本采用免费模式。🔓");
    }
    if (D_R_0x11bdcd != "") {
      if (D_R_0xf031e4 != true) {
        D_R_0x35e9c0.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        if (D_R_0x2eb3e9 == true) {
          D_R_0x35e9c0.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
          let _0x1ce4c2 = new Date(D_R_0x11bdcd).getTime();
          let _0x439ce9 = new Date().format("yyyy-MM-dd HH:mm:ss");
          if (_0x439ce9 > _0x1ce4c2) {
            D_R_0x35e9c0.log("⚠️ 抱歉，VIP到期了，请及时付费。");
            return;
          }
        }
      }
    }
    if (D_R_0x48be8a > 1) {
      D_R_0x35e9c0.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + D_R_0x4ddb8a * D_R_0x48be8a + "个账号。");
    }
    if (D_R_0xb86e0b > 1) {
      D_R_0x35e9c0.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + D_R_0x19aed8 + "次, 已经运行了" + D_R_0x14029a + "次。");
    }
    if (D_R_0x242358 != true) {
      D_R_0x35e9c0.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (D_R_0x5d3ecd.length > D_R_0x4ddb8a * D_R_0x48be8a) {
      D_R_0x35e9c0.log("⚠️ 当前用户一次最多运行" + D_R_0x4ddb8a * D_R_0x48be8a + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (D_R_0x5d3ecd.length == 0) {
      D_R_0x35e9c0.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (D_R_0x14029a + D_R_0x5d3ecd.length > D_R_0x19aed8) {
      D_R_0x35e9c0.log("📢 一共发现了" + D_R_0x5d3ecd.length + "个账号");
      D_R_0x35e9c0.log("⚠️ 当前用户运行次数剩余" + (D_R_0x19aed8 - D_R_0x14029a) + "次，还可以运行" + (D_R_0x19aed8 - D_R_0x14029a) + "个账号，还需要" + (D_R_0x5d3ecd.length - (D_R_0x19aed8 - D_R_0x14029a)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (D_R_0x11bdcd != "") {
      D_R_0x35e9c0.log("📢 你的会员有效期到： " + D_R_0x11bdcd);
    }
    D_R_0x35e9c0.log("📢 一共发现了" + D_R_0x5d3ecd.length + "个账号");
    let _0x522d1f = [];
    for (let _0x53dc03 = 0; _0x53dc03 < D_R_0x5d3ecd.length; _0x53dc03++) {
      _0x522d1f.push(D_R_0x53b703(_0x53dc03));
      D_R_0x2bed1b[_0x53dc03] = 1;
      D_R_0x3b7db7[_0x53dc03] = "";
      D_R_0xe196d8[_0x53dc03] = 0;
    }
    await Promise.allSettled(_0x522d1f).then(_0x224e73 => {
      D_R_0x35e9c0.log("日志整理功能如下：");
      D_R_0x35e9c0.log("---------------日志整理开始--------------");
      for (let _0x93f227 = 0; _0x93f227 < D_R_0x5d3ecd.length; _0x93f227++) {
        D_R_0x35e9c0.log(D_R_0x3b7db7[_0x93f227]);
      }
      D_R_0x35e9c0.log("---------------日志整理结束--------------");
    });
  }
})().catch(_0x18e235 => D_R_0x35e9c0.logErr(_0x18e235)).finally(() => D_R_0x35e9c0.done());
async function D_R_0x53b703(_0x1123c9) {
  return new Promise((_0x257ff0, _0x3a17c2) => {
    D_R_0x35e9c0.log("[账号" + (_0x1123c9 + 1) + "]: 开始执行 working......");
    D_R_0x3f33be(_0x257ff0, _0x1123c9);
  });
}
async function D_R_0x3f33be(_0x49e835, _0x208ca1) {
  await D_R_0x2e44e2(_0x208ca1, D_R_0x5d3ecd[_0x208ca1].uid);
  await D_R_0x3a8449(_0x208ca1);
  await D_R_0x1e7e80(D_R_0x28e2e1, D_R_0x136af7);
  _0x49e835();
}
async function D_R_0x516ae6() {
  if ($request.url.match(/\/index\/index/)) {
    const _0x43ebb8 = $request.body.split("&uid=")[1];
    const _0x49021f = $request.headers.Authorization;
    let _0xfe671b = D_R_0x34f837 - 1;
    if (D_R_0x5d3ecd[_0xfe671b]) {
      D_R_0x5d3ecd[_0xfe671b].uid = _0x43ebb8;
      D_R_0x5d3ecd[_0xfe671b].auth = _0x49021f;
    } else {
      const _0x4a3698 = {
        uid: _0x43ebb8,
        auth: _0x49021f
      };
      D_R_0x5d3ecd[_0xfe671b] = _0x4a3698;
    }
    D_R_0x35e9c0.setdata(JSON.stringify(D_R_0x5d3ecd, null, 2), "wxtsapp");
    D_R_0x35e9c0.msg(D_R_0x35e9c0.name, "听书活动账号" + (_0xfe671b + 1) + " Cookie获取成功！🎉");
  }
}
async function D_R_0x2e44e2(_0x121cd2, _0x5dccd0) {
  const _0x500aad = "https://hb2.hbdtxt.com/api/user/index";
  let _0x3f9985 = "api_type=h5&uid=" + _0x5dccd0;
  let _0x135392 = D_R_0x39583d(_0x500aad, _0x3f9985, _0x121cd2);
  await D_R_0xe5b14c("post", _0x135392, D_R_0x414be5());
  let _0xf6bdaf = D_R_0x10654c;
  if (_0xf6bdaf.code == 1) {
    D_R_0x35e9c0.log("[账号" + (_0x121cd2 + 1) + "]: 用户名=> " + _0xf6bdaf.userinfo.nickname);
    D_R_0x3b7db7[_0x121cd2] += "[账号" + (_0x121cd2 + 1) + "]: 用户名=> " + _0xf6bdaf.userinfo.nickname + "\n";
  }
}
async function D_R_0x3a8449(_0x3a89ac) {
  const _0x3d969b = "https://hb2.hbdtxt.com/api/index/huodong";
  D_R_0x35e9c0.log("[账号" + (_0x3a89ac + 1) + "]: 正在检索你已经看到哪一期了，请稍后......");
  for (let _0x26288d = 10; _0x26288d >= 0; _0x26288d--) {
    if (D_R_0xe196d8[_0x3a89ac] == 1) {
      break;
    }
    let _0x516e0c = "page=" + _0x26288d + "&limit=10&keyword=&number=0&api_type=h5&uid=" + D_R_0x5d3ecd[_0x3a89ac].uid;
    let _0x4592f8 = D_R_0x39583d(_0x3d969b, _0x516e0c, _0x3a89ac);
    await D_R_0xe5b14c("post", _0x4592f8, D_R_0x414be5());
    let _0x259d42 = D_R_0x10654c;
    if (_0x259d42.code == 1) {
      let _0x3348b6 = _0x259d42.list;
      for (let _0x4ca0d8 = _0x3348b6.length - 1; _0x4ca0d8 >= 0; _0x4ca0d8--) {
        let _0x1f4a2d = _0x3348b6[_0x4ca0d8];
        let _0x3dc78a = _0x1f4a2d.id;
        await D_R_0x35e9c0.wait(D_R_0x5b7b8d(1000, 2000));
        await D_R_0x4496a2(_0x3a89ac, _0x3dc78a, _0x1f4a2d.title);
        if (D_R_0xe196d8[_0x3a89ac] == 1) {
          break;
        }
      }
    }
  }
}
async function D_R_0x4496a2(_0x44648b, _0x5915f5, _0x43e0c5) {
  const _0x54e93a = "https://hb2.hbdtxt.com/api/index/index";
  const _0x5b3952 = "huodong_id=" + _0x5915f5 + "&store_id=244&noneedlogin=0&api_type=h5&uid=" + D_R_0x5d3ecd[_0x44648b].uid;
  let _0x262f85 = D_R_0x39583d(_0x54e93a, _0x5b3952, _0x44648b);
  await D_R_0xe5b14c("post", _0x262f85, D_R_0x414be5());
  let _0x338793 = D_R_0x10654c;
  if (_0x338793.code == 1) {
    let _0x45f14b = _0x338793.canyu_status;
    if (_0x45f14b != 4) {
      D_R_0x35e9c0.log("[账号" + (_0x44648b + 1) + "]: 故事名称=> " + _0x43e0c5);
      let _0x510b93 = _0x338793.wentilist;
      let _0x49ae28 = _0x510b93[0].daan.indexOf("A") != -1 ? 1 : 2;
      let _0x1c8c95 = _0x510b93[1].daan.indexOf("A") != -1 ? 1 : 2;
      if (_0x49ae28 == 1) {
        _0x510b93[0].xuanxiang[0].xuanzhong = 1;
      } else {
        _0x510b93[0].xuanxiang[1].xuanzhong = 1;
      }
      if (_0x1c8c95 == 1) {
        _0x510b93[1].xuanxiang[0].xuanzhong = 1;
      } else {
        _0x510b93[1].xuanxiang[1].xuanzhong = 1;
      }
      _0x510b93 = JSON.stringify(_0x510b93);
      await D_R_0x3df254(_0x44648b, _0x510b93, _0x5915f5);
    }
  }
}
async function D_R_0x3df254(_0x10de63, _0x1109b3, _0x4c8777) {
  const _0x2bafd9 = "https://hb2.hbdtxt.com/api/index/dati";
  let _0x28539d = "wentilist=" + _0x1109b3 + "&huodong_id=" + _0x4c8777 + "&uuid=" + D_R_0x5d3ecd[_0x10de63].uid + "&api_type=h5&uid=" + D_R_0x5d3ecd[_0x10de63].uid;
  let _0x266267 = D_R_0x39583d(_0x2bafd9, _0x28539d, _0x10de63);
  await D_R_0xe5b14c("post", _0x266267, D_R_0x414be5());
  let _0xe50bc2 = D_R_0x10654c;
  if (_0xe50bc2.code == 1) {
    D_R_0x35e9c0.log("[账号" + (_0x10de63 + 1) + "]: 答题成功，恭喜你获得" + _0xe50bc2.money + "元");
    D_R_0x3b7db7[_0x10de63] += "答题成功，恭喜你获得" + _0xe50bc2.money + "元\n";
    let _0x566700 = D_R_0x5b7b8d(30000, 50000);
    D_R_0x35e9c0.log("[账号" + (_0x10de63 + 1) + "]: 随机等待" + _0x566700 / 1000 + "秒");
    await D_R_0x35e9c0.wait(_0x566700);
  } else {
    D_R_0x35e9c0.log("[账号" + (_0x10de63 + 1) + "]: " + _0xe50bc2.msg);
    D_R_0x3b7db7[_0x10de63] += _0xe50bc2.msg + "\n";
    D_R_0xe196d8[_0x10de63] = 1;
  }
}
function D_R_0x3723c9(_0x374cba, _0x410282, _0x4fe783) {
  return new Promise((_0x1355ef, _0x5b12a3) => {
    const _0x2ec1cb = D_R_0x1323ec + "/script/permissions/lastest";
    const _0x575ed8 = {
      appName: _0x374cba,
      userId: _0x410282,
      activityCode: _0x4fe783,
      version: D_R_0x1da05b
    };
    const _0x2e9077 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x57ef59 = {
      url: _0x2ec1cb,
      headers: _0x2e9077,
      body: JSON.stringify(_0x575ed8)
    };
    D_R_0x35e9c0.post(_0x57ef59, async (_0x991b0a, _0x238a6c, _0x4af94d) => {
      const _0x2d46d3 = _0x4af94d.replace(/\"/g, "").slice(34);
      const _0x5dbae1 = new D_R_0x462a3c();
      result = JSON.parse(_0x5dbae1.decode(_0x2d46d3));
      try {
        D_R_0x2a9f0c = result.version;
        D_R_0x43822c = result.userAuth;
        D_R_0x2905c2 = result.scriptAuth;
        D_R_0x242358 = result.runAuth;
        D_R_0x41fbc5 = result.notify;
        D_R_0xf031e4 = result.vipAuth;
        D_R_0x2eb3e9 = result.isCharge;
        D_R_0x48be8a = result.runAcounts;
        D_R_0xb86e0b = result.buyCount;
        D_R_0x14029a = result.runedCounts;
        D_R_0x19aed8 = result.runTotalCounts;
        D_R_0x1922d5 = result.userRank;
        D_R_0x9eb87a = result.invicate;
        D_R_0x4ddb8a = result.accountNumbers;
        D_R_0x11bdcd = result.vipDate;
      } catch (_0x29b9ac) {
        D_R_0x35e9c0.log(_0x29b9ac);
      }
      _0x1355ef();
    });
  });
}
function D_R_0x1e7e80(_0x36db7c, _0x2b978c) {
  return new Promise((_0x34f612, _0x3a1f0c) => {
    const _0x365592 = D_R_0x1323ec + "/script/run/add";
    const _0x4d6b63 = {
      appName: _0x36db7c,
      userId: _0x2b978c,
      activityCode: D_R_0x3674df,
      version: D_R_0x1da05b
    };
    const _0x5b1dd7 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x307720 = {
      url: _0x365592,
      headers: _0x5b1dd7,
      body: JSON.stringify(_0x4d6b63)
    };
    D_R_0x35e9c0.post(_0x307720, async (_0x146497, _0x547886, _0x48dac2) => {
      _0x34f612();
    });
  });
}
function D_R_0x39583d(_0x3ce169, _0xf99790, _0xc322be) {
  let _0x3909a2 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (D_R_0x5d3ecd[_0xc322be].ua && D_R_0x5d3ecd[_0xc322be].ua != "") {
    _0x3909a2 = D_R_0x5d3ecd[_0xc322be].ua;
  }
  const _0x2018c4 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x3909a2,
    Authorization: D_R_0x5d3ecd[_0xc322be].auth,
    Host: "hb2.hbdtxt.com"
  };
  const _0xd3a19c = {
    url: _0x3ce169,
    headers: _0x2018c4
  };
  if (_0xf99790) {
    _0xd3a19c.body = _0xf99790;
  }
  return _0xd3a19c;
}
async function D_R_0xe5b14c(_0x16152b, _0x547b5a, _0x47ee7d) {
  D_R_0x10654c = null;
  return new Promise(_0x1b37a1 => {
    D_R_0x35e9c0[_0x16152b](_0x547b5a, async (_0x2cb097, _0x30d919, _0x3e1008) => {
      try {
        if (_0x2cb097) {
          D_R_0x35e9c0.log(_0x47ee7d + ": " + _0x16152b + "请求失败");
          D_R_0x35e9c0.log(JSON.stringify(_0x2cb097));
          D_R_0x35e9c0.logErr(_0x2cb097);
        } else {
          if (D_R_0xa9e641(_0x3e1008)) {
            D_R_0x10654c = JSON.parse(_0x3e1008);
          }
        }
      } catch (_0x1923b7) {
        D_R_0x35e9c0.logErr(_0x1923b7, _0x30d919);
      } finally {
        _0x1b37a1();
      }
    });
  });
}
function D_R_0x414be5() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function D_R_0xa9e641(_0xb72b7d) {
  try {
    if (typeof JSON.parse(_0xb72b7d) == "object") {
      return true;
    }
  } catch (_0x38f9a0) {
    console.log(_0x38f9a0);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function D_R_0x301902(_0x544549) {
  var _0x19932a = Object.keys(_0x544549).map(function (_0x17bc52) {
    return encodeURIComponent(_0x17bc52) + "=" + encodeURIComponent(_0x544549[_0x17bc52]);
  }).join("&");
  return _0x19932a;
}
function D_R_0x4730df(_0x2e5a3) {
  var _0x4c6c12 = String.fromCharCode(_0x2e5a3.charCodeAt(0) + _0x2e5a3.length);
  for (var _0x11177f = 1; _0x11177f < _0x2e5a3.length; _0x11177f++) {
    _0x4c6c12 += String.fromCharCode(_0x2e5a3.charCodeAt(_0x11177f) + _0x2e5a3.charCodeAt(_0x11177f - 1));
  }
  return escape(_0x4c6c12);
}
function D_R_0x35e8a4(_0x442a2f) {
  _0x442a2f = unescape(_0x442a2f);
  var _0x5d3d47 = String.fromCharCode(_0x442a2f.charCodeAt(0) - _0x442a2f.length);
  for (var _0x3b461a = 1; _0x3b461a < _0x442a2f.length; _0x3b461a++) {
    _0x5d3d47 += String.fromCharCode(_0x442a2f.charCodeAt(_0x3b461a) - _0x5d3d47.charCodeAt(_0x3b461a - 1));
  }
  return _0x5d3d47;
}
function D_R_0x5b7b8d(_0x34995e, _0xfe3501) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x34995e + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0xfe3501 - _0x34995e + 1) + _0x34995e);
      break;
    default:
      return 0;
      break;
  }
}
function D_R_0x19bbd4() {
  if (D_R_0x2a3744 == 1) {
    D_R_0x35e9c0.msg(D_R_0x35e9c0.name, "", D_R_0x35e9c0.message);
  }
}
async function D_R_0x23999c(_0x235554) {
  if (D_R_0x2a3744 == 1) {
    if (D_R_0x35e9c0.isNode()) {
      await D_R_0x42fb4e.sendNotify(D_R_0x35e9c0.name, _0x235554);
    } else {
      D_R_0x35e9c0.msg(D_R_0x35e9c0.name, "", _0x235554);
    }
  } else {
    D_R_0x35e9c0.log(_0x235554);
  }
}
function D_R_0x30251e(_0x1d8c83, _0xb4d4e1) {
  _0xb4d4e1 = _0xb4d4e1 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x30a4fe = "";
  for (let _0x597c6d = 0; _0x597c6d < _0x1d8c83; _0x597c6d++) {
    let _0x44b230 = Math.floor(Math.random() * _0xb4d4e1.length);
    _0x30a4fe += _0xb4d4e1.substring(_0x44b230, _0x44b230 + 1);
  }
  return _0x30a4fe;
}
function D_R_0x462a3c() {
  var _0x474e59 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x426705) {
    var _0x47a423 = "";
    var _0x208090, _0x5c0950, _0x17b724, _0x59e5ec, _0x5aa790, _0x5e5dec, _0xf21b6a;
    var _0x29007a = 0;
    _0x426705 = utf8Encode(_0x426705);
    while (_0x29007a < _0x426705.length) {
      _0x208090 = _0x426705.charCodeAt(_0x29007a++);
      _0x5c0950 = _0x426705.charCodeAt(_0x29007a++);
      _0x17b724 = _0x426705.charCodeAt(_0x29007a++);
      _0x59e5ec = _0x208090 >> 2;
      _0x5aa790 = (_0x208090 & 3) << 4 | _0x5c0950 >> 4;
      _0x5e5dec = (_0x5c0950 & 15) << 2 | _0x17b724 >> 6;
      _0xf21b6a = _0x17b724 & 63;
      if (isNaN(_0x5c0950)) {
        _0x5e5dec = _0xf21b6a = 64;
      } else {
        if (isNaN(_0x17b724)) {
          _0xf21b6a = 64;
        }
      }
      _0x47a423 = _0x47a423 + _0x474e59.charAt(_0x59e5ec) + _0x474e59.charAt(_0x5aa790) + _0x474e59.charAt(_0x5e5dec) + _0x474e59.charAt(_0xf21b6a);
    }
    return _0x47a423;
  };
  this.decode = function (_0x2c3dc0) {
    var _0x3fcf31 = "";
    var _0x9103dd, _0x48ab9e, _0x18c63c;
    var _0x1bdc06, _0x240980, _0x5843f7, _0x4bf76d;
    var _0x176e6d = 0;
    _0x2c3dc0 = _0x2c3dc0.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x176e6d < _0x2c3dc0.length) {
      _0x1bdc06 = _0x474e59.indexOf(_0x2c3dc0.charAt(_0x176e6d++));
      _0x240980 = _0x474e59.indexOf(_0x2c3dc0.charAt(_0x176e6d++));
      _0x5843f7 = _0x474e59.indexOf(_0x2c3dc0.charAt(_0x176e6d++));
      _0x4bf76d = _0x474e59.indexOf(_0x2c3dc0.charAt(_0x176e6d++));
      _0x9103dd = _0x1bdc06 << 2 | _0x240980 >> 4;
      _0x48ab9e = (_0x240980 & 15) << 4 | _0x5843f7 >> 2;
      _0x18c63c = (_0x5843f7 & 3) << 6 | _0x4bf76d;
      _0x3fcf31 = _0x3fcf31 + String.fromCharCode(_0x9103dd);
      if (_0x5843f7 !== 64) {
        _0x3fcf31 = _0x3fcf31 + String.fromCharCode(_0x48ab9e);
      }
      if (_0x4bf76d !== 64) {
        _0x3fcf31 = _0x3fcf31 + String.fromCharCode(_0x18c63c);
      }
    }
    _0x3fcf31 = utf8Decode(_0x3fcf31);
    return _0x3fcf31;
  };
  utf8Encode = function (_0x3719e7) {
    _0x3719e7 = _0x3719e7.replace(/\r\n/g, "\n");
    var _0xf3b292 = "";
    for (var _0x5b3bb3 = 0; _0x5b3bb3 < _0x3719e7.length; _0x5b3bb3++) {
      var _0x543423 = _0x3719e7.charCodeAt(_0x5b3bb3);
      if (_0x543423 < 128) {
        _0xf3b292 += String.fromCharCode(_0x543423);
      } else {
        if (_0x543423 > 127 && _0x543423 < 2048) {
          _0xf3b292 += String.fromCharCode(_0x543423 >> 6 | 192);
          _0xf3b292 += String.fromCharCode(_0x543423 & 63 | 128);
        } else {
          _0xf3b292 += String.fromCharCode(_0x543423 >> 12 | 224);
          _0xf3b292 += String.fromCharCode(_0x543423 >> 6 & 63 | 128);
          _0xf3b292 += String.fromCharCode(_0x543423 & 63 | 128);
        }
      }
    }
    return _0xf3b292;
  };
  utf8Decode = function (_0x18c10a) {
    var _0x2fffc5 = "";
    var _0x599822 = 0;
    var _0x40ab4c = 0;
    var _0x5d0d87 = 0;
    var _0x180cbe = 0;
    while (_0x599822 < _0x18c10a.length) {
      _0x40ab4c = _0x18c10a.charCodeAt(_0x599822);
      if (_0x40ab4c < 128) {
        _0x2fffc5 += String.fromCharCode(_0x40ab4c);
        _0x599822++;
      } else {
        if (_0x40ab4c > 191 && _0x40ab4c < 224) {
          _0x5d0d87 = _0x18c10a.charCodeAt(_0x599822 + 1);
          _0x2fffc5 += String.fromCharCode((_0x40ab4c & 31) << 6 | _0x5d0d87 & 63);
          _0x599822 += 2;
        } else {
          _0x5d0d87 = _0x18c10a.charCodeAt(_0x599822 + 1);
          _0x180cbe = _0x18c10a.charCodeAt(_0x599822 + 2);
          _0x2fffc5 += String.fromCharCode((_0x40ab4c & 15) << 12 | (_0x5d0d87 & 63) << 6 | _0x180cbe & 63);
          _0x599822 += 3;
        }
      }
    }
    return _0x2fffc5;
  };
}
function D_R_0x18b109(_0x5b83c8, _0x504104) {
  class _0x52861b {
    constructor(_0x565707) {
      this.env = _0x565707;
    }
    send(_0x4cef39, _0x31473b = "GET") {
      _0x4cef39 = typeof _0x4cef39 === "string" ? {
        url: _0x4cef39
      } : _0x4cef39;
      let _0x2159e1 = this.get;
      if (_0x31473b === "POST") {
        _0x2159e1 = this.post;
      }
      return new Promise((_0x4808ec, _0xfc1de2) => {
        _0x2159e1.call(this, _0x4cef39, (_0x78655, _0x1ac0e4, _0x51f538) => {
          if (_0x78655) {
            _0xfc1de2(_0x78655);
          } else {
            _0x4808ec(_0x1ac0e4);
          }
        });
      });
    }
    get(_0x1a5359) {
      return this.send.call(this.env, _0x1a5359);
    }
    post(_0x39cfe3) {
      return this.send.call(this.env, _0x39cfe3, "POST");
    }
  }
  return new class {
    constructor(_0x488260, _0x31fd1f) {
      this.name = _0x488260;
      this.http = new _0x52861b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x31fd1f);
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x45b005, _0x509201 = null) {
      try {
        return JSON.parse(_0x45b005);
      } catch {
        return _0x509201;
      }
    }
    toStr(_0x5be6ce, _0x11776a = null) {
      try {
        return JSON.stringify(_0x5be6ce);
      } catch {
        return _0x11776a;
      }
    }
    getjson(_0x4679bc, _0x30db1c) {
      let _0x7093e3 = _0x30db1c;
      const _0x171afc = this.getdata(_0x4679bc);
      if (_0x171afc) {
        try {
          _0x7093e3 = JSON.parse(this.getdata(_0x4679bc));
        } catch {}
      }
      return _0x7093e3;
    }
    setjson(_0x50d563, _0x32e6bc) {
      try {
        return this.setdata(JSON.stringify(_0x50d563), _0x32e6bc);
      } catch {
        return false;
      }
    }
    getScript(_0x3b56b7) {
      return new Promise(_0x4d18ef => {
        const _0x2629d0 = {
          url: _0x3b56b7
        };
        this.get(_0x2629d0, (_0x247d80, _0x400740, _0x779646) => _0x4d18ef(_0x779646));
      });
    }
    runScript(_0x39f400, _0x2a5d98) {
      return new Promise(_0x36228f => {
        let _0x5e7ac5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5e7ac5 = _0x5e7ac5 ? _0x5e7ac5.replace(/\n/g, "").trim() : _0x5e7ac5;
        let _0x27f6f1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x27f6f1 = _0x27f6f1 ? _0x27f6f1 * 1 : 20;
        _0x27f6f1 = _0x2a5d98 && _0x2a5d98.timeout ? _0x2a5d98.timeout : _0x27f6f1;
        const [_0x2d0781, _0x8530c] = _0x5e7ac5.split("@");
        const _0x1f0cd7 = {
          script_text: _0x39f400,
          mock_type: "cron",
          timeout: _0x27f6f1
        };
        const _0x212b50 = {
          "X-Key": _0x2d0781,
          Accept: "*/*"
        };
        const _0x520d7c = {
          url: "http: //" + _0x8530c + "/v1/scripting/evaluate",
          body: _0x1f0cd7,
          headers: _0x212b50
        };
        this.post(_0x520d7c, (_0x71702c, _0x1de501, _0x1fcc15) => _0x36228f(_0x1fcc15));
      }).catch(_0x36e2c6 => this.logErr(_0x36e2c6));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3cd362 = this.path.resolve(this.dataFile);
        const _0x43ff30 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x3a7a5f = this.fs.existsSync(_0x3cd362);
        const _0x4ef9fb = !_0x3a7a5f && this.fs.existsSync(_0x43ff30);
        if (_0x3a7a5f || _0x4ef9fb) {
          const _0x342a59 = _0x3a7a5f ? _0x3cd362 : _0x43ff30;
          try {
            return JSON.parse(this.fs.readFileSync(_0x342a59));
          } catch (_0x4ae16b) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x335b3c = this.path.resolve(this.dataFile);
        const _0x179296 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x2b134c = this.fs.existsSync(_0x335b3c);
        const _0x304eb0 = !_0x2b134c && this.fs.existsSync(_0x179296);
        const _0x34230e = JSON.stringify(this.data);
        if (_0x2b134c) {
          this.fs.writeFileSync(_0x335b3c, _0x34230e);
        } else {
          if (_0x304eb0) {
            this.fs.writeFileSync(_0x179296, _0x34230e);
          } else {
            this.fs.writeFileSync(_0x335b3c, _0x34230e);
          }
        }
      }
    }
    lodash_get(_0x374122, _0x19feca, _0x536ef3 = undefined) {
      const _0x127cfe = _0x19feca.replace(/[(d+)]/g, ".$1").split(".");
      let _0x2eb9a1 = _0x374122;
      for (const _0xede078 of _0x127cfe) {
        _0x2eb9a1 = Object(_0x2eb9a1)[_0xede078];
        if (_0x2eb9a1 === undefined) {
          return _0x536ef3;
        }
      }
      return _0x2eb9a1;
    }
    lodash_set(_0x2b65eb, _0x1358a5, _0x54141f) {
      if (Object(_0x2b65eb) !== _0x2b65eb) {
        return _0x2b65eb;
      }
      if (!Array.isArray(_0x1358a5)) {
        _0x1358a5 = _0x1358a5.toString().match(/[^.[]]+/g) || [];
      }
      _0x1358a5.slice(0, -1).reduce((_0x3cf24a, _0x409a3b, _0x214a00) => Object(_0x3cf24a[_0x409a3b]) === _0x3cf24a[_0x409a3b] ? _0x3cf24a[_0x409a3b] : _0x3cf24a[_0x409a3b] = Math.abs(_0x1358a5[_0x214a00 + 1]) >> 0 === +_0x1358a5[_0x214a00 + 1] ? [] : {}, _0x2b65eb)[_0x1358a5[_0x1358a5.length - 1]] = _0x54141f;
      return _0x2b65eb;
    }
    getdata(_0x4e8242) {
      let _0x55f7ce = this.getval(_0x4e8242);
      if (/^@/.test(_0x4e8242)) {
        const [, _0x412035, _0x450ac0] = /^@(.*?).(.*?)$/.exec(_0x4e8242);
        const _0x50e39b = _0x412035 ? this.getval(_0x412035) : "";
        if (_0x50e39b) {
          try {
            const _0x20b434 = JSON.parse(_0x50e39b);
            _0x55f7ce = _0x20b434 ? this.lodash_get(_0x20b434, _0x450ac0, "") : _0x55f7ce;
          } catch (_0xf1731e) {
            _0x55f7ce = "";
          }
        }
      }
      return _0x55f7ce;
    }
    setdata(_0x993cec, _0x26f042) {
      let _0x22b871 = false;
      if (/^@/.test(_0x26f042)) {
        const [, _0xcc15ca, _0x31d0b4] = /^@(.*?).(.*?)$/.exec(_0x26f042);
        const _0x4ddb9d = this.getval(_0xcc15ca);
        const _0x28a70e = _0xcc15ca ? _0x4ddb9d === "null" ? null : _0x4ddb9d || "{}" : "{}";
        try {
          const _0x4296aa = JSON.parse(_0x28a70e);
          this.lodash_set(_0x4296aa, _0x31d0b4, _0x993cec);
          _0x22b871 = this.setval(JSON.stringify(_0x4296aa), _0xcc15ca);
        } catch (_0x5d22f0) {
          const _0x86ec65 = {};
          this.lodash_set(_0x86ec65, _0x31d0b4, _0x993cec);
          _0x22b871 = this.setval(JSON.stringify(_0x86ec65), _0xcc15ca);
        }
      } else {
        _0x22b871 = this.setval(_0x993cec, _0x26f042);
      }
      return _0x22b871;
    }
    getval(_0x59235f) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x59235f);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x59235f);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x59235f];
          } else {
            return this.data && this.data[_0x59235f] || null;
          }
        }
      }
    }
    setval(_0x27da6f, _0x1d1d09) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x27da6f, _0x1d1d09);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x27da6f, _0x1d1d09);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x1d1d09] = _0x27da6f;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x1d1d09] || null;
          }
        }
      }
    }
    initGotEnv(_0x46d81d) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x46d81d) {
        _0x46d81d.headers = _0x46d81d.headers ? _0x46d81d.headers : {};
        if (undefined === _0x46d81d.headers.Cookie && undefined === _0x46d81d.cookieJar) {
          _0x46d81d.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x4c9516, _0x39ac21 = () => {}) {
      if (_0x4c9516.headers) {
        delete _0x4c9516.headers["Content-Type"];
        delete _0x4c9516.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x4c9516.headers = _0x4c9516.headers || {};
          const _0x4c424d = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x4c9516.headers, _0x4c424d);
        }
        $httpClient.get(_0x4c9516, (_0x3cba58, _0x1220d2, _0x4b917a) => {
          if (!_0x3cba58 && _0x1220d2) {
            _0x1220d2.body = _0x4b917a;
            _0x1220d2.statusCode = _0x1220d2.status;
          }
          _0x39ac21(_0x3cba58, _0x1220d2, _0x4b917a);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x4c9516.opts = _0x4c9516.opts || {};
            const _0x10f381 = {
              hints: false
            };
            Object.assign(_0x4c9516.opts, _0x10f381);
          }
          $task.fetch(_0x4c9516).then(_0x1e1a33 => {
            const {
              statusCode: _0x215e9c,
              statusCode,
              headers,
              body
            } = _0x1e1a33;
            const _0x12846f = {
              status: _0x215e9c,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x39ac21(null, _0x12846f, body);
          }, _0x89ba8b => _0x39ac21(_0x89ba8b));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4c9516);
            this.got(_0x4c9516).on("redirect", (_0x3a5996, _0x13194a) => {
              try {
                if (_0x3a5996.headers["set-cookie"]) {
                  const _0x328a0b = _0x3a5996.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x328a0b) {
                    this.ckjar.setCookieSync(_0x328a0b, null);
                  }
                  _0x13194a.cookieJar = this.ckjar;
                }
              } catch (_0x3e39fb) {
                this.logErr(_0x3e39fb);
              }
            }).then(_0x4754ef => {
              const {
                statusCode: _0x23219d,
                statusCode,
                headers,
                body
              } = _0x4754ef;
              const _0x86dd31 = {
                status: _0x23219d,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x39ac21(null, _0x86dd31, body);
            }, _0x1fd41c => {
              const {
                message: _0x1f3114,
                response: _0x2d5165
              } = _0x1fd41c;
              _0x39ac21(_0x1f3114, _0x2d5165, _0x2d5165 && _0x2d5165.body);
            });
          }
        }
      }
    }
    post(_0x3e26a3, _0x529ddf = () => {}) {
      const _0x20bf4d = _0x3e26a3.method ? _0x3e26a3.method.toLocaleLowerCase() : "post";
      if (_0x3e26a3.body && _0x3e26a3.headers && !_0x3e26a3.headers["Content-Type"]) {
        _0x3e26a3.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x3e26a3.headers) {
        delete _0x3e26a3.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x3e26a3.headers = _0x3e26a3.headers || {};
          const _0x40cdc0 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x3e26a3.headers, _0x40cdc0);
        }
        $httpClient[_0x20bf4d](_0x3e26a3, (_0x3c1f11, _0x4b1e1b, _0x360c22) => {
          if (!_0x3c1f11 && _0x4b1e1b) {
            _0x4b1e1b.body = _0x360c22;
            _0x4b1e1b.statusCode = _0x4b1e1b.status;
          }
          _0x529ddf(_0x3c1f11, _0x4b1e1b, _0x360c22);
        });
      } else {
        if (this.isQuanX()) {
          _0x3e26a3.method = _0x20bf4d;
          if (this.isNeedRewrite) {
            _0x3e26a3.opts = _0x3e26a3.opts || {};
            const _0x58744c = {
              hints: false
            };
            Object.assign(_0x3e26a3.opts, _0x58744c);
          }
          $task.fetch(_0x3e26a3).then(_0x21780f => {
            const {
              statusCode: _0x5db637,
              statusCode,
              headers,
              body
            } = _0x21780f;
            const _0x808f89 = {
              status: _0x5db637,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x529ddf(null, _0x808f89, body);
          }, _0x4c46d5 => _0x529ddf(_0x4c46d5));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3e26a3);
            const {
              url,
              ..._0x23f4d2
            } = _0x3e26a3;
            this.got[_0x20bf4d](url, _0x23f4d2).then(_0x1d7471 => {
              const {
                statusCode: _0x37913e,
                statusCode,
                headers,
                body
              } = _0x1d7471;
              const _0x410911 = {
                status: _0x37913e,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x529ddf(null, _0x410911, body);
            }, _0x4184ee => {
              const {
                message: _0x4c64ce,
                response: _0x36478e
              } = _0x4184ee;
              _0x529ddf(_0x4c64ce, _0x36478e, _0x36478e && _0x36478e.body);
            });
          }
        }
      }
    }
    put(_0xe29a51, _0x134993 = () => {}) {
      const _0x2a8522 = _0xe29a51.method ? _0xe29a51.method.toLocaleLowerCase() : "put";
      if (_0xe29a51.body && _0xe29a51.headers && !_0xe29a51.headers["Content-Type"]) {
        _0xe29a51.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0xe29a51.headers) {
        delete _0xe29a51.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xe29a51.headers = _0xe29a51.headers || {};
          const _0x3abdcd = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0xe29a51.headers, _0x3abdcd);
        }
        $httpClient[_0x2a8522](_0xe29a51, (_0x28ceaa, _0x433a68, _0x3c36d4) => {
          if (!_0x28ceaa && _0x433a68) {
            _0x433a68.body = _0x3c36d4;
            _0x433a68.statusCode = _0x433a68.status;
          }
          _0x134993(_0x28ceaa, _0x433a68, _0x3c36d4);
        });
      } else {
        if (this.isQuanX()) {
          _0xe29a51.method = _0x2a8522;
          if (this.isNeedRewrite) {
            _0xe29a51.opts = _0xe29a51.opts || {};
            const _0x54831b = {
              hints: false
            };
            Object.assign(_0xe29a51.opts, _0x54831b);
          }
          $task.fetch(_0xe29a51).then(_0x59e43a => {
            const {
              statusCode: _0x581336,
              statusCode,
              headers,
              body
            } = _0x59e43a;
            const _0x5e0607 = {
              status: _0x581336,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x134993(null, _0x5e0607, body);
          }, _0x4c2fba => _0x134993(_0x4c2fba));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xe29a51);
            const {
              url,
              ..._0x59bac9
            } = _0xe29a51;
            this.got[_0x2a8522](url, _0x59bac9).then(_0x131fe6 => {
              const {
                statusCode: _0x460f04,
                statusCode,
                headers,
                body
              } = _0x131fe6;
              const _0x1430f0 = {
                status: _0x460f04,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x134993(null, _0x1430f0, body);
            }, _0x33dedc => {
              const {
                message: _0x2145dc,
                response: _0x432e39
              } = _0x33dedc;
              _0x134993(_0x2145dc, _0x432e39, _0x432e39 && _0x432e39.body);
            });
          }
        }
      }
    }
    time(_0x46c83b, _0x28e0b7 = null) {
      const _0x59b966 = _0x28e0b7 ? new Date(_0x28e0b7) : new Date();
      const _0x2ebc11 = {
        "M+": _0x59b966.getMonth() + 1,
        "d+": _0x59b966.getDate(),
        "H+": _0x59b966.getHours(),
        "m+": _0x59b966.getMinutes(),
        "s+": _0x59b966.getSeconds(),
        "q+": Math.floor((_0x59b966.getMonth() + 3) / 3),
        S: _0x59b966.getMilliseconds()
      };
      if (/(y+)/.test(_0x46c83b)) {
        _0x46c83b = _0x46c83b.replace(RegExp.$1, (_0x59b966.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0xb443c9 in _0x2ebc11) if (new RegExp("(" + _0xb443c9 + ")").test(_0x46c83b)) {
        _0x46c83b = _0x46c83b.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x2ebc11[_0xb443c9] : ("00" + _0x2ebc11[_0xb443c9]).substr(("" + _0x2ebc11[_0xb443c9]).length));
      }
      return _0x46c83b;
    }
    msg(_0x30e061 = _0x5b83c8, _0x24b732 = "", _0xdc5946 = "", _0x3849fb) {
      const _0x283222 = _0x5d5801 => {
        if (!_0x5d5801) {
          return _0x5d5801;
        }
        if (typeof _0x5d5801 === "string") {
          if (this.isLoon()) {
            return _0x5d5801;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x5d5801
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x5d5801
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x5d5801 === "object") {
            if (this.isLoon()) {
              let _0xee8c66 = _0x5d5801.openUrl || _0x5d5801.url || _0x5d5801["open-url"];
              let _0x2d36a0 = _0x5d5801.mediaUrl || _0x5d5801["media-url"];
              const _0x25171f = {
                openUrl: _0xee8c66,
                mediaUrl: _0x2d36a0
              };
              return _0x25171f;
            } else {
              if (this.isQuanX()) {
                let _0x34227c = _0x5d5801["open-url"] || _0x5d5801.url || _0x5d5801.openUrl;
                let _0x485820 = _0x5d5801["media-url"] || _0x5d5801.mediaUrl;
                const _0x2775ab = {
                  "open-url": _0x34227c,
                  "media-url": _0x485820
                };
                return _0x2775ab;
              } else {
                if (this.isSurge()) {
                  let _0x24c58d = _0x5d5801.url || _0x5d5801.openUrl || _0x5d5801["open-url"];
                  const _0x5a3b76 = {
                    url: _0x24c58d
                  };
                  return _0x5a3b76;
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x30e061, _0x24b732, _0xdc5946, _0x283222(_0x3849fb));
        } else {
          if (this.isQuanX()) {
            $notify(_0x30e061, _0x24b732, _0xdc5946, _0x283222(_0x3849fb));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x1b19fa = ["", "==============📣系统通知📣=============="];
        _0x1b19fa.push(_0x30e061);
        _0x24b732 ? _0x1b19fa.push(_0x24b732) : "";
        _0xdc5946 ? _0x1b19fa.push(_0xdc5946) : "";
        console.log(_0x1b19fa.join("\n"));
        this.logs = this.logs.concat(_0x1b19fa);
      }
    }
    log(..._0x54dedf) {
      if (_0x54dedf.length > 0) {
        this.logs = [...this.logs, ..._0x54dedf];
      }
      console.log(_0x54dedf.join(this.logSeparator));
    }
    logErr(_0x208e81, _0x759e68) {
      const _0x3cc872 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x3cc872) {
        this.log("", "❗️" + this.name + ", 错误!", _0x208e81);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x208e81.stack);
      }
    }
    wait(_0x53c8e5) {
      return new Promise(_0x4a92b5 => setTimeout(_0x4a92b5, _0x53c8e5));
    }
    done(_0x2990db = {}) {
      const _0x8a418b = new Date().getTime();
      const _0x43b0ee = (_0x8a418b - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x43b0ee + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x2990db);
      }
    }
  }(_0x5b83c8, _0x504104);
}