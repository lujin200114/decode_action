//Sat Dec 28 2024 12:02:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const D_j_0x8a6e17 = new D_j_0x20242a("中青看点");
const D_j_0x558b9e = "V1.2.5";
const D_j_0x5013b3 = "zqkdapp";
let D_j_0x52fc90 = D_j_0x8a6e17.getjson("zqkdapp", []);
const D_j_0x47636c = D_j_0x8a6e17.isNode() ? require("http") : "";
const D_j_0x5b4c5b = D_j_0x8a6e17.isNode() ? require("./sendNotify") : "";
const D_j_0x44a7dd = D_j_0x8a6e17.isNode() ? require("./david_cookies") : "";
let D_j_0x6c415e = D_j_0x8a6e17.getdata("tguserid") || 1000000;
let D_j_0x4710f1 = D_j_0x8a6e17.getdata("zqkdactivecode") || "";
let D_j_0x3f14a9 = D_j_0x8a6e17.getval("zqkduserck") || 1;
let D_j_0x143197 = D_j_0x8a6e17.getval("zqkdtxamount") || 3;
let D_j_0x1411d5 = D_j_0x8a6e17.getval("apiHost") || "http://106.15.104.124:8080";
if (D_j_0x8a6e17.getval("apiHosts")) {
  D_j_0x1411d5 = D_j_0x8a6e17.getval("apiHosts");
}
let D_j_0x15f383 = D_j_0x8a6e17.getval("tz") || "1";
var D_j_0x3a9994 = "";
var D_j_0x430592 = "";
const D_j_0x16374b = [2, 3, 4, 5, 6];
const D_j_0x195f12 = [20006, 20007, 20008, 20026, 20030];
let D_j_0x3820f1 = [];
let D_j_0x6a370c = [];
let D_j_0x5f1716 = [];
let D_j_0x9bf786 = [];
let D_j_0x545958 = [];
let D_j_0x40d020 = [];
let D_j_0x2ad0b0 = [];
let D_j_0x5e66f6 = [];
let D_j_0x151ba1 = [];
let D_j_0x93a633 = [];
let D_j_0x18b7af = [];
let D_j_0x2d4ee4 = [];
let D_j_0x4ae0ee = [];
let D_j_0x3ec201 = [];
let D_j_0x452e25 = ["3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.0.4", "3.0.5", "3.1.0", "3.1.2", "3.1.4", "3.1.6", "3.1.7"];
let D_j_0x2d02b6 = 30;
let D_j_0x156a56 = "";
let D_j_0x4fcc0e = "";
let D_j_0x3fd22a = "";
let D_j_0x585764 = "";
let D_j_0x167c15 = "";
let D_j_0x57f42b = "";
let D_j_0x1fa753 = "";
let D_j_0x25f79d = "";
let D_j_0x5bfe8d = "";
let D_j_0x46e86a = "";
let D_j_0x41152a = "";
let D_j_0x58c744 = "";
let D_j_0x1d87a0 = "";
let D_j_0x1b7cd8 = "";
let D_j_0x15d471 = 1;
let D_j_0x446216 = 1;
let D_j_0x341daa = 1;
let D_j_0x19d765 = 1;
let D_j_0x48e060 = "";
const D_j_0x979161 = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1,en-CN;Q=0.9",
  Connection: "keep-alive",
  "Content-Type": "application/x-www-form-urlencoded",
  Host: "kandian.wkandian.com",
  "User-Agent": "KDApp/2.6.2 (iPad; iOS 15.0.2; Scale/3.00)"
};
const D_j_0x5be96f = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1",
  Connection: "keep-alive",
  "Content-Type": "application/x-www-form-urlencoded",
  Host: "kandian.wkandian.com",
  "User-Agent": "KDApp/2.6.2 (iPad; iOS 15.0.2; Scale/2.00)"
};
const D_j_0x481d43 = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9",
  Connection: "keep-alive",
  Host: "kandian.wkandian.com",
  "User-Agent": "KDApp/2.6.2 (iPhone; iOS 15.2.1; Scale/3.00)"
};
const D_j_0x852b96 = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
  Connection: "keep-alive",
  Host: "script.baertt.com",
  Referer: "https://focus.youth.cn/",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001226) NetType/WIFI Language/zh_CN"
};
if (D_j_0x8a6e17.isNode()) {
  if (process.env.ZQKDAPP) {
    D_j_0x52fc90 = JSON.parse(process.env.ZQKDAPP);
  } else {
    D_j_0x52fc90 = D_j_0x44a7dd.ZQKD;
  }
  D_j_0x6c415e = process.env.TGUSERID;
  D_j_0x4710f1 = process.env.ZQKDACTIVECODE;
  D_j_0x143197 = process.env.ZQKDTXAMOUNT;
  if (process.env.APIHOST) {
    D_j_0x1411d5 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    D_j_0x1411d5 = process.env.APIHOSTS;
  }
  if (D_j_0x143197 == 0) {
    D_j_0x2d02b6 = 0.3;
  } else {
    if (D_j_0x143197 == 1) {
      D_j_0x2d02b6 = 1;
    } else {
      if (D_j_0x143197 == 2) {
        D_j_0x2d02b6 = 10;
      } else {
        if (D_j_0x143197 == 3) {
          D_j_0x2d02b6 = 30;
        } else {
          D_j_0x2d02b6 = 30;
        }
      }
    }
  }
  D_j_0x3a9994 = new Date(new Date().getTime()).getHours();
  D_j_0x430592 = new Date(new Date().getTime()).getMinutes();
  D_j_0x8a6e17.log("当前环境: Node, 当前时间：" + D_j_0x3a9994 + "点");
} else {
  if (D_j_0x143197 == 0) {
    D_j_0x2d02b6 = 0.3;
  } else {
    if (D_j_0x143197 == 1) {
      D_j_0x2d02b6 = 1;
    } else {
      if (D_j_0x143197 == 2) {
        D_j_0x2d02b6 = 10;
      } else {
        if (D_j_0x143197 == 3) {
          D_j_0x2d02b6 = 30;
        } else {
          D_j_0x2d02b6 = 30;
        }
      }
    }
  }
  D_j_0x3a9994 = new Date().getHours();
  D_j_0x430592 = new Date().getMinutes();
  D_j_0x8a6e17.log("当前环境: 手机代理, 当前时间：" + D_j_0x3a9994 + "点");
}
!(async () => {
  D_j_0x8a6e17.log("📢 开始检测服务器接口状态>>>");
  let _0x351235 = false;
  const _0x3401f3 = D_j_0x1411d5.split("&");
  const _0xa81faa = _0x3401f3.length;
  for (let _0x478286 = 0; _0x478286 < _0xa81faa; _0x478286++) {
    if (D_j_0x8a6e17.isNode()) {
      _0x351235 = await D_j_0x4189af("" + _0x3401f3[_0x478286], 2500);
    } else {
      _0x351235 = await D_j_0x79131c("" + _0x3401f3[_0x478286], 2500);
    }
    if (_0x351235 == true) {
      D_j_0x1411d5 = _0x3401f3[_0x478286];
      D_j_0x8a6e17.log("📢 接口" + (_0x478286 + 1) + "[" + _0x3401f3[_0x478286] + "]服务器接口正常! 🎉");
      break;
    }
    if (_0x478286 == _0xa81faa - 1 && _0x351235 == false) {
      D_j_0x8a6e17.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
      D_j_0x8a6e17.msg(D_j_0x8a6e17.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
      return;
    }
  }
  if (typeof $request !== "undefined") {
    await D_j_0x525576();
  } else {
    if (!D_j_0x4710f1 || !D_j_0x6c415e || D_j_0x6c415e == 1 || D_j_0x4710f1 == 0 || D_j_0x4710f1.length != 32) {
      D_j_0x8a6e17.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报群: https://t.me/china20211029");
      return;
    }
    await D_j_0x55f581(D_j_0x5013b3, D_j_0x6c415e, D_j_0x4710f1);
    D_j_0x8a6e17.log("📢 " + D_j_0x58c744);
    D_j_0x8a6e17.log("🔔 当前脚本版本号: " + D_j_0x558b9e + "，最新版本号: " + D_j_0x46e86a);
    if (D_j_0x558b9e < D_j_0x46e86a) {
      D_j_0x8a6e17.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      D_j_0x58b4e8("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (D_j_0x5bfe8d != true) {
      D_j_0x8a6e17.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (D_j_0x48e060 != true) {
      D_j_0x8a6e17.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (D_j_0x25f79d != true) {
      D_j_0x8a6e17.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报群: https://t.me/china20211029");
      return;
    }
    if (D_j_0x1b7cd8 == true) {
      D_j_0x8a6e17.log("🔔 此脚本采用付费模式。🔒");
    } else {
      D_j_0x8a6e17.log("🔔 此脚本采用免费模式。🔓");
    }
    if (D_j_0x1d87a0 != true) {
      D_j_0x8a6e17.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
      return;
    } else {
      if (D_j_0x1b7cd8 == true) {
        D_j_0x8a6e17.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (D_j_0x41152a != true) {
      D_j_0x8a6e17.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (D_j_0x15d471 > 1) {
      D_j_0x8a6e17.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，你可以一次运行" + 4 * D_j_0x15d471 + "个账号");
    }
    if (D_j_0x446216 > 1) {
      D_j_0x8a6e17.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，你一共可以运行" + D_j_0x341daa + "次, 已经运行了" + D_j_0x19d765 + "次");
    }
    if (D_j_0x52fc90.length > 4 * D_j_0x15d471) {
      D_j_0x8a6e17.log("⚠️ 你是不是搞错了，你有这么多账号？一次最多运行" + 4 * D_j_0x15d471 + "个账号哦");
      return;
    }
    D_j_0x8a6e17.log("一共有" + D_j_0x52fc90.length + "个账号");
    for (let _0x4bad54 = 0; _0x4bad54 < D_j_0x52fc90.length; _0x4bad54++) {
      D_j_0x5f1716.push(D_j_0x551b09(_0x4bad54));
      D_j_0x9bf786.push("");
      D_j_0x545958.push("");
      D_j_0x40d020.push("");
      D_j_0x2ad0b0.push("");
      D_j_0x5e66f6.push("");
      D_j_0x93a633.push(new Set());
      D_j_0x18b7af.push(new Set());
      D_j_0x2d4ee4.push(new Set());
      D_j_0x4ae0ee.push("");
      D_j_0x151ba1.push("");
      D_j_0x3ec201.push("");
    }
    await Promise.allSettled(D_j_0x5f1716).then(_0x3f773f => {});
  }
})().catch(_0x3ad7b7 => D_j_0x8a6e17.logErr(_0x3ad7b7)).finally(() => D_j_0x8a6e17.done());
async function D_j_0x551b09(_0xa0be6b) {
  return new Promise((_0x33e82c, _0x2d6921) => {
    D_j_0x8a6e17.log("[账号" + (_0xa0be6b + 1) + "]:  开始执行 working......");
    D_j_0x32ec28(_0x33e82c, _0xa0be6b);
  });
}
async function D_j_0x32ec28(_0x3ea19e, _0x557d26) {
  let _0x3704d5 = D_j_0x52fc90[_0x557d26].wz_body;
  D_j_0x167c15 = _0x3704d5.substring(11, 19);
  D_j_0x3820f1[_0x557d26] = D_j_0x167c15;
  D_j_0x57f42b = _0x3704d5.substring(0, 22);
  D_j_0x6a370c[_0x557d26] = D_j_0x57f42b;
  await D_j_0x9c2f01(_0x3704d5, _0x557d26);
  await D_j_0x2643d2(_0x557d26);
  await D_j_0x507e10(_0x557d26);
  if (D_j_0x3a9994 == 9 || D_j_0x3a9994 == 12 || D_j_0x3a9994 == 15 || D_j_0x3a9994 == 18 || D_j_0x3a9994 == 22) {
    await D_j_0x56d104(_0x557d26);
  }
  await D_j_0x290ed3(_0x557d26);
  await D_j_0x3c0ef8(_0x557d26);
  for (let _0x162856 = 0; _0x162856 < 1; _0x162856++) {
    let _0x4391b9 = D_j_0x48d1de(0, 4);
    await D_j_0x294520(D_j_0x195f12[_0x4391b9], _0x557d26);
    await D_j_0x51056(D_j_0x545958[_0x557d26], _0x557d26);
    _0x4391b9 = D_j_0x48d1de(0, 4);
    await D_j_0x54703a(D_j_0x16374b[_0x4391b9], _0x557d26);
    await D_j_0x51056(D_j_0x545958[_0x557d26], _0x557d26);
  }
  D_j_0x8a6e17.log("[账号" + (_0x557d26 + 1) + "]:  本次阅读了" + D_j_0x93a633[_0x557d26].size + "篇文章");
  D_j_0x8a6e17.log("[账号" + (_0x557d26 + 1) + "]:  本次观看了" + D_j_0x18b7af[_0x557d26].size + "个视频");
  if (D_j_0x3a9994 >= 10 && D_j_0x3a9994 <= 20) {
    await D_j_0x44e6e7(_0x557d26);
  }
  if (D_j_0x3a9994 >= 16 && D_j_0x3a9994 <= 20) {
    await D_j_0x5eda51(_0x557d26);
  }
  if (!D_j_0x52fc90[_0x557d26].share_article_id) {
    const _0x3d37ab = D_j_0x48d1de(0, D_j_0x93a633[_0x557d26].size - 1);
    let _0x1eaabd = "41629759";
    if (D_j_0x93a633[_0x557d26].size > 0) {
      _0x1eaabd = Array.from(D_j_0x93a633[_0x557d26])[_0x3d37ab];
    }
    D_j_0x52fc90[_0x557d26].share_article_id = _0x1eaabd;
    D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
  } else {
    const _0x374d88 = D_j_0x48d1de(0, D_j_0x93a633[_0x557d26].size - 1);
    let _0x54834d = "";
    if (D_j_0x93a633[_0x557d26].size > 0) {
      _0x54834d = Array.from(D_j_0x93a633[_0x557d26])[_0x374d88];
    } else {
      _0x54834d = "41629759";
    }
    if (D_j_0x52fc90[_0x557d26].share_article_id != _0x54834d) {
      D_j_0x52fc90[_0x557d26].share_article_id = _0x54834d;
      D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
    }
  }
  if (D_j_0x52fc90[_0x557d26].shareOnOff == 1 && D_j_0x93a633[_0x557d26].size > 0 && (D_j_0x3a9994 == 9 || D_j_0x3a9994 == 12 || D_j_0x3a9994 == 15 || D_j_0x3a9994 == 18 || D_j_0x3a9994 == 21)) {
    let _0x28d334 = D_j_0x48d1de(0, D_j_0x2d4ee4[_0x557d26].size - 1);
    let _0x5e52c1 = Array.from(D_j_0x2d4ee4[_0x557d26])[_0x28d334];
    await D_j_0x3a2652(D_j_0x1282a3(_0x5e52c1), _0x557d26);
    D_j_0x2d4ee4[_0x557d26].clear();
    D_j_0x18b7af[_0x557d26].clear();
  }
  await D_j_0x2198de(_0x557d26);
  if (D_j_0x143197 == -1) {
    D_j_0x8a6e17.log("[账号" + (_0x557d26 + 1) + "]:  你关闭了自动提现功能");
  }
  if (D_j_0x143197 != -1 && D_j_0x4ae0ee[_0x557d26] >= D_j_0x2d02b6) {
    await D_j_0x124d31(D_j_0x2d02b6, _0x557d26);
    if (D_j_0x3ec201[_0x557d26] == "QYWX") {
      if (D_j_0x4ae0ee[_0x557d26] >= 30) {
        await D_j_0x550c4f(_0x557d26);
      }
    } else {
      await D_j_0x550c4f(_0x557d26);
    }
  }
  if (!D_j_0x52fc90[_0x557d26].shareOnOff) {
    D_j_0x52fc90[_0x557d26].shareOnOff = 1;
    D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
  }
  if (!D_j_0x52fc90[_0x557d26].notify) {
    D_j_0x52fc90[_0x557d26].notify = 1;
    D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
  }
  await D_j_0x3c6873(D_j_0x5013b3, D_j_0x6c415e);
  _0x3ea19e();
}
async function D_j_0x525576() {
  if ($request.url.match(/\/v5\/article\/info/)) {
    const _0x240dfa = $request.url;
    const _0x1a5a21 = _0x240dfa.split("?")[1];
    let _0x4945df = D_j_0x3f14a9 - 1;
    if (D_j_0x52fc90[_0x4945df]) {
      D_j_0x52fc90[_0x4945df].wz_body = _0x1a5a21;
    } else {
      const _0x332fa5 = {
        wz_body: _0x1a5a21
      };
      D_j_0x52fc90[_0x4945df] = _0x332fa5;
    }
    D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
    D_j_0x8a6e17.msg(D_j_0x8a6e17.name, "中青看点账号" + (_0x4945df + 1) + "文章请求数据获取成功！🎉");
  }
  if ($request.url.match(/\/Nameless\/getTaskBrowse/)) {
    const _0x34d8ac = JSON.stringify($request.headers);
    const _0x1c658b = $request.url;
    let _0x4d7e5c = D_j_0x3f14a9 - 1;
    if (D_j_0x52fc90[_0x4d7e5c]) {
      D_j_0x52fc90[_0x4d7e5c].kkz_headers = _0x34d8ac;
      D_j_0x52fc90[_0x4d7e5c].kkz_url = _0x1c658b;
    } else {
      const _0x21f0cd = {
        kkz_headers: _0x34d8ac,
        kkz_url: _0x1c658b
      };
      D_j_0x52fc90[_0x4d7e5c] = _0x21f0cd;
    }
    D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
    D_j_0x8a6e17.msg(D_j_0x8a6e17.name, "中青看点账号" + (_0x4d7e5c + 1) + "看看赚请求数据获取成功！🎉");
  }
  if ($request.url.match(/\/NewTaskIos\/getTaskList/)) {
    const _0x289e65 = $request.url.split("?")[1];
    let _0x592ad8 = D_j_0x3f14a9 - 1;
    if (D_j_0x52fc90[_0x592ad8]) {
      D_j_0x52fc90[_0x592ad8].tasks_url = _0x289e65;
    } else {
      const _0x45954e = {
        tasks_url: _0x289e65
      };
      D_j_0x52fc90[_0x592ad8] = _0x45954e;
    }
    D_j_0x8a6e17.setdata(JSON.stringify(D_j_0x52fc90, null, 2), "zqkdapp");
    D_j_0x8a6e17.msg(D_j_0x8a6e17.name, "中青看点账号" + (_0x592ad8 + 1) + "任务请求数据获取成功！🎉");
  }
}
async function D_j_0x294520(_0x4942ed, _0x289ecf) {
  const _0x2a9ba0 = Math.round(new Date().getTime() / 1000).toString();
  let _0x6d9a06 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x289ecf]));
  let _0x509e4f = _0x6d9a06 + ("&catid=" + _0x4942ed + "&op=0&behot_time=");
  _0x509e4f = _0x509e4f.replace(/&request_time=\d{10}/, "&request_time=" + _0x2a9ba0);
  _0x509e4f = _0x509e4f.replace(/&time=\d{10}/, "&time=" + _0x2a9ba0);
  md5ClearStr = _0x509e4f.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = D_j_0x4f16fa(md5Str);
  _0x509e4f += "&sign=" + md5_sign;
  await D_j_0x9cb7c8(_0x509e4f, _0x289ecf);
}
async function D_j_0x54703a(_0x185ed8, _0x3a97d2) {
  const _0x1fd4aa = Math.round(new Date().getTime() / 1000).toString();
  let _0x280fad = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x3a97d2]));
  let _0x3c19af = _0x280fad + ("&catid=1453&number=10&op=0&&video_catid=" + _0x185ed8);
  _0x3c19af = _0x3c19af.replace(/&request_time=\d{10}/, "&request_time=" + _0x1fd4aa);
  _0x3c19af = _0x3c19af.replace(/&time=\d{10}/, "&time=" + _0x1fd4aa);
  md5ClearStr = _0x3c19af.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = D_j_0x4f16fa(md5Str);
  _0x3c19af += "&sign=" + md5_sign;
  await D_j_0x9cb7c8(_0x3c19af, _0x3a97d2);
}
async function D_j_0x56a331(_0x11c864, _0x510a43, _0x5f5395) {
  let _0x1b6d6b = Math.round(new Date().getTime() / 1000).toString();
  let _0x5722fb = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x5f5395]));
  let _0x39c144 = _0x5722fb + ("&id=" + _0x11c864 + "&catid=" + _0x510a43 + "&is_push=0");
  _0x39c144 = _0x39c144.replace(/&request_time=\d{10}/, "&request_time=" + _0x1b6d6b);
  _0x39c144 = _0x39c144.replace(/&time=\d{10}/, "&time=" + _0x1b6d6b);
  md5ClearStr = _0x39c144.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = D_j_0x4f16fa(md5Str);
  _0x39c144 += "&sign=" + md5_sign;
  await D_j_0x9cb7c8(_0x39c144, _0x5f5395);
}
async function D_j_0x17a1ce(_0x6e3d75, _0x52e8cb, _0x1292b5) {
  let _0xa1e645 = Math.round(new Date().getTime() / 1000).toString();
  let _0x5631d8 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x1292b5]));
  let _0x1afd61 = _0x5631d8 + ("&id=" + _0x6e3d75 + "&read_type=0");
  _0x1afd61 = _0x1afd61.replace(/&request_time=\d{10}/, "&request_time=" + _0xa1e645);
  _0x1afd61 = _0x1afd61.replace(/&time=\d{10}/, "&time=" + _0xa1e645);
  md5ClearStr = _0x1afd61.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = D_j_0x4f16fa(md5Str);
  await D_j_0x9cb7c8(_0x1afd61, _0x1292b5);
}
async function D_j_0x6b44fd(_0x70d0a2, _0x10a53d) {
  let _0x53acb1 = Math.round(new Date().getTime() / 1000).toString();
  let _0x28802d = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x10a53d]));
  let _0x438b4d = _0x28802d + ("&second=" + _0x70d0a2 + "s");
  _0x438b4d = _0x438b4d.replace(/&request_time=\d{10}/, "&request_time=" + _0x53acb1);
  _0x438b4d = _0x438b4d.replace(/&time=\d{10}/, "&time=" + _0x53acb1);
  await D_j_0x9cb7c8(_0x438b4d, _0x10a53d);
}
async function D_j_0x42c82a(_0x146d5d, _0x2b7c34) {
  let _0x119458 = Math.round(new Date().getTime() / 1000).toString();
  let _0x33df7b = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x2b7c34]));
  let _0x4bcfe5 = _0x33df7b + ("&task_id=" + _0x146d5d);
  _0x4bcfe5 = _0x4bcfe5.replace(/&request_time=\d{10}/, "&request_time=" + _0x119458);
  _0x4bcfe5 = _0x4bcfe5.replace(/&time=\d{10}/, "&time=" + _0x119458);
  await D_j_0x9cb7c8(_0x4bcfe5, _0x2b7c34);
}
async function D_j_0x991dcb(_0x4cfd8e, _0x5037dc) {
  let _0x3f741a = Math.round(new Date().getTime() / 1000).toString();
  let _0x506cc7 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x5037dc]));
  let _0x25b351 = _0x506cc7 + ("&id=browse_read_article_" + _0x4cfd8e);
  _0x25b351 = _0x25b351.replace(/&request_time=\d{10}/, "&request_time=" + _0x3f741a);
  _0x25b351 = _0x25b351.replace(/&time=\d{10}/, "&time=" + _0x3f741a);
  await D_j_0x9cb7c8(_0x25b351, _0x5037dc);
}
async function D_j_0x2643d2(_0x4f5775) {
  let _0x2ebb7d = Math.round(new Date().getTime() / 1000).toString();
  let _0x205e80 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x4f5775]));
  let _0x4396a7 = _0x205e80;
  _0x4396a7 = _0x4396a7.replace(/&request_time=\d{10}/, "&request_time=" + _0x2ebb7d);
  _0x4396a7 = _0x4396a7.replace(/&time=\d{10}/, "&time=" + _0x2ebb7d);
  md5ClearStr = _0x4396a7.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = D_j_0x4f16fa(md5Str);
  _0x4396a7 += "&sign=" + md5_sign;
  await D_j_0x9cb7c8(_0x4396a7, _0x4f5775);
}
async function D_j_0x49452a(_0x534329) {
  let _0x1bc631 = D_j_0x52fc90[_0x534329].share_article_id;
  let _0x1b90a1 = Math.round(new Date().getTime() / 1000).toString();
  let _0x2839ab = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x534329]));
  let _0x2ed1ee = _0x2839ab + ("&article_id=" + _0x1bc631);
  _0x2ed1ee = _0x2ed1ee.replace(/&request_time=\d{10}/, "&request_time=" + _0x1b90a1);
  _0x2ed1ee = _0x2ed1ee.replace(/&time=\d{10}/, "&time=" + _0x1b90a1);
  md5ClearStr = _0x2ed1ee.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = D_j_0x4f16fa(md5Str);
  _0x2ed1ee += "&sign=" + md5_sign;
  await D_j_0x9cb7c8(_0x2ed1ee, _0x534329);
}
async function D_j_0x290ed3(_0x34520a) {
  let _0x22a23a = Math.round(new Date().getTime() / 1000).toString();
  await D_j_0x3c8f3a(D_j_0x52fc90[_0x34520a].tasks_url, _0x34520a);
  let _0x2344ed = D_j_0x2ad0b0[_0x34520a].replace(/\"/g, "");
  const _0x47c1f2 = D_j_0x4604ce(86);
  _0x2344ed = _0x2344ed.replace(/.{86}&ts=.\d{10}/, _0x47c1f2 + "&ts=" + _0x22a23a);
  await D_j_0x9cb7c8(_0x2344ed, _0x34520a);
}
async function D_j_0x96431f(_0x12ba39, _0x23a878) {
  let _0x258bad = Math.round(new Date().getTime() / 1000).toString();
  let _0x27b3e2 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x23a878]));
  let _0xdbc625 = _0x27b3e2 + ("&action=task_reward_action&param=" + _0x12ba39);
  _0xdbc625 = _0xdbc625.replace(/&request_time=\d{10}/, "&request_time=" + _0x258bad);
  _0xdbc625 = _0xdbc625.replace(/&time=\d{10}/, "&time=" + _0x258bad);
  await D_j_0x9cb7c8(_0xdbc625, _0x23a878);
}
async function D_j_0x124d31(_0x4a1257, _0x5c85b3) {
  let _0xb9c64b = Math.round(new Date().getTime() / 1000).toString();
  let _0x241ef7 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x9bf786[_0x5c85b3]));
  let _0x51f456 = "";
  if (D_j_0x3ec201[_0x5c85b3] == "QYWX") {
    _0x51f456 = _0x241ef7 + "&type=1&money=30";
  } else {
    _0x51f456 = _0x241ef7 + ("&type=2&money=" + _0x4a1257);
  }
  _0x51f456 = _0x51f456.replace(/&request_time=\d{10}/, "&request_time=" + _0xb9c64b);
  _0x51f456 = _0x51f456.replace(/&time=\d{10}/, "&time=" + _0xb9c64b);
  await D_j_0x9cb7c8(_0x51f456, _0x5c85b3);
}
async function D_j_0x226e15(_0x46220a) {
  let _0x53a13e = Math.round(new Date().getTime() / 1000).toString();
  let _0x318a67 = D_j_0x1983ad(D_j_0x16a2b5(D_j_0x3fd22a));
  let _0x407e82 = _0x318a67 + ("&action=beread_extra_reward_" + _0x46220a);
  _0x407e82 = _0x407e82.replace(/&request_time=\d{10}/, "&request_time=" + _0x53a13e);
  _0x407e82 = _0x407e82.replace(/&time=\d{10}/, "&time=" + _0x53a13e);
  await D_j_0x9cb7c8(_0x407e82, i);
}
function D_j_0x507e10(_0x30e315) {
  return new Promise((_0x52d286, _0x4fb23b) => {
    const _0x571cb = "https://kandian.wkandian.com/v3/user/userinfo.json?" + D_j_0x545958[_0x30e315];
    const _0x10a5fe = {
      url: _0x571cb,
      headers: D_j_0x5be96f
    };
    D_j_0x8a6e17.get(_0x10a5fe, async (_0x56db82, _0x21b35f, _0x32566c) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x32566c, _0x30e315);
        let _0x21dc2d = JSON.parse(D_j_0x40d020[_0x30e315]);
        if (typeof _0x21dc2d == "string") {
          _0x21dc2d = JSON.parse(_0x21dc2d);
        }
        if (_0x21dc2d.success == true) {
          D_j_0x8a6e17.log("[账号" + (_0x30e315 + 1) + "]: 【用户名】=> " + _0x21dc2d.items.nickname);
          D_j_0x8a6e17.log("[账号" + (_0x30e315 + 1) + "]: 【总青豆】=> " + _0x21dc2d.items.score);
          D_j_0x8a6e17.log("[账号" + (_0x30e315 + 1) + "]: 【今天青豆】=> " + _0x21dc2d.items.today_score);
          D_j_0x8a6e17.log("[账号" + (_0x30e315 + 1) + "]: 【当前余额】=> " + _0x21dc2d.items.money + "元");
          D_j_0x1fa753 += "[账号" + (_0x30e315 + 1) + "]: 【用户名】=> " + _0x21dc2d.items.nickname + "\n";
          D_j_0x1fa753 += "[账号" + (_0x30e315 + 1) + "]: 【总青豆】=> " + _0x21dc2d.items.score + "\n";
          D_j_0x1fa753 += "[账号" + (_0x30e315 + 1) + "]: 【今天青豆】=> " + _0x21dc2d.items.today_score + "\n";
          D_j_0x1fa753 += "[账号" + (_0x30e315 + 1) + "]: 【当前余额】=> " + _0x21dc2d.items.money + "元\n";
          D_j_0x5e66f6[_0x30e315] = _0x21dc2d.items.token;
          D_j_0x151ba1[_0x30e315] = _0x21dc2d.items.token_id;
          D_j_0x4ae0ee[_0x30e315] = _0x21dc2d.items.money;
          D_j_0x3ec201[_0x30e315] = _0x21dc2d.items.nickname;
        }
      } catch (_0x2904dc) {
        D_j_0x8a6e17.log(_0x2904dc);
      }
      _0x52d286();
    });
  });
}
function D_j_0x4dc7c9(_0x473d97, _0x1a4a32 = 0) {
  return new Promise(_0x55e551 => {
    const _0xcb3174 = {
      url: "https://kandian.wkandian.com/V17/NewTaskIos/sign.json",
      headers: D_j_0x5be96f,
      body: D_j_0x545958[_0x473d97]
    };
    let _0xa0d90c = _0xcb3174;
    D_j_0x8a6e17.post(_0xa0d90c, async (_0xa01c79, _0x3a9631, _0x44b708) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x44b708, _0x473d97);
        let _0x5d66eb = JSON.parse(D_j_0x40d020[_0x473d97]);
        if (typeof _0x5d66eb == "string") {
          _0x5d66eb = JSON.parse(_0x5d66eb);
        }
        if (_0x5d66eb.success == true) {
          D_j_0x8a6e17.log("[账号" + (_0x473d97 + 1) + "]: 【签到任务】恭喜你签到成功，获取了" + _0x5d66eb.items.score + "青豆  🎉");
          D_j_0x1fa753 += "[账号" + (_0x473d97 + 1) + "]: 【签到任务】获取了" + _0x5d66eb.items.score + "青豆\n";
        }
      } catch (_0x41269a) {
        D_j_0x8a6e17.log(_0x41269a);
      } finally {
        _0x55e551();
      }
    }, _0x1a4a32);
  });
}
function D_j_0x3c0ef8(_0x2fc15f) {
  return new Promise((_0x3ecd90, _0x1e4009) => {
    const _0x4aa6cb = "https://kandian.wkandian.com/V17/NewTaskIos/getTaskList.json?" + D_j_0x545958[_0x2fc15f];
    const _0x24fb56 = {
      url: _0x4aa6cb,
      headers: D_j_0x5be96f
    };
    D_j_0x8a6e17.get(_0x24fb56, async (_0x4920df, _0x2a2147, _0x2fc516) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x2fc516, _0x2fc15f);
        let _0x1deefe = JSON.parse(D_j_0x40d020[_0x2fc15f]);
        _0x1deefe = _0x1deefe.replace(/\"param\".+}]}\",/, "");
        _0x1deefe = _0x1deefe.replace(/\"info_new\".+\"banner\"/, "\"banner\"");
        if (typeof _0x1deefe == "string") {
          _0x1deefe = JSON.parse(_0x1deefe);
        }
        if (_0x1deefe.success == true) {
          const _0x1a185f = _0x1deefe.items.daily;
          for (let _0x55623d = 0; _0x55623d < _0x1a185f.length; _0x55623d++) {
            const _0x108ca5 = _0x1a185f[_0x55623d];
            if (_0x108ca5.status == 0) {
              D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]: 【" + _0x108ca5.title + "】=> 未完成");
            } else {
              if (_0x108ca5.status == 2) {
                D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]: 【" + _0x108ca5.title + "】=> 已完成");
              } else {
                D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]: 【" + _0x108ca5.title + "】=> 正在进行中");
              }
            }
            if (_0x108ca5.title == "每日签到" && _0x108ca5.status == 0) {
              D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  开始签到");
              await D_j_0x290ed3(_0x2fc15f);
              await D_j_0x4dc7c9(_0x2fc15f);
            }
            if (_0x108ca5.title == "抽奖赚" && _0x108ca5.status == 0 && D_j_0x3a9994 >= 7 && D_j_0x3a9994 <= 18) {
              D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  开始转盘任务");
              if (_0x108ca5.title_num < 90) {
                D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  本轮即将完成15次转盘抽奖");
                for (let _0x31c33a = 0; _0x31c33a < 15; _0x31c33a++) {
                  D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  开始第" + (_0x31c33a + 1) + "次抽奖");
                  await D_j_0x2c317a(_0x2fc15f);
                  await D_j_0x8a6e17.wait(D_j_0x48d1de(5000, 10000));
                }
              } else {
                if (_0x108ca5.title_num >= 90) {
                  D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  本轮即将完成10次转盘抽奖");
                  for (let _0xb48a75 = 0; _0xb48a75 < 10; _0xb48a75++) {
                    D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  开始第" + (_0xb48a75 + 1) + "次抽奖");
                    await D_j_0x2c317a(_0x2fc15f);
                    await D_j_0x8a6e17.wait(D_j_0x48d1de(5000, 10000));
                  }
                  D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  即将打开转盘宝箱");
                  for (let _0x4118e9 = 0; _0x4118e9 < 4; _0x4118e9++) {
                    D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  开始打开第" + (_0x4118e9 + 1) + "个宝箱");
                    await D_j_0x30da11(_0x4118e9 + 1, _0x2fc15f);
                    await D_j_0x8a6e17.wait(D_j_0x48d1de(3000, 8000));
                  }
                }
              }
            }
            if (_0x108ca5.title == "看福利视频" && _0x108ca5.title_num < _0x108ca5.title_total && _0x108ca5.status == 0) {
              D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  开始福利视频任务");
              await D_j_0x290ed3(_0x2fc15f);
              await D_j_0x3b2286(_0x2fc15f);
              await D_j_0x8a6e17.wait(D_j_0x48d1de(35000, 55000));
            }
            if (_0x108ca5.title == "打卡赚钱" && _0x108ca5.status == 0) {
              if (D_j_0x3a9994 == 11) {
                await D_j_0x556637(_0x2fc15f);
              }
              if (D_j_0x3a9994 == 6) {
                await D_j_0x32b573(_0x2fc15f);
              }
            }
            if (_0x108ca5.title == "火爆转发" && _0x108ca5.status == 0) {
              if (D_j_0x3a9994 == 9 || D_j_0x3a9994 == 12 || D_j_0x3a9994 == 17) {
                for (let _0x47bc30 = 0; _0x47bc30 < 2; _0x47bc30++) {
                  D_j_0x8a6e17.log("[账号" + (_0x2fc15f + 1) + "]:  第" + (_0x47bc30 + 1) + "转发");
                  await D_j_0x49452a(_0x2fc15f);
                  await D_j_0xe1cb30(_0x2fc15f);
                  await D_j_0x8a6e17.wait(D_j_0x48d1de(3000, 10000));
                }
                D_j_0x58b4e8("🔔 [账号" + (_0x2fc15f + 1) + "]:  三餐奖励已完成，手动领取吧！");
              }
            }
            if (_0x108ca5.status == 1) {
              await D_j_0x96431f(_0x108ca5.reward_action, _0x2fc15f);
              await D_j_0x14b44c(_0x108ca5.title, _0x2fc15f);
            }
          }
        }
      } catch (_0x5c7dc0) {
        D_j_0x8a6e17.log(_0x5c7dc0);
      }
      _0x3ecd90();
    });
  });
}
function D_j_0x14b44c(_0x591b79, _0x1086e7, _0x455be2 = 0) {
  return new Promise(_0xa71cb9 => {
    const _0x2c7b0e = {
      url: "https://kandian.wkandian.com/V5/CommonReward/toGetReward.json",
      headers: D_j_0x5be96f,
      body: D_j_0x545958[_0x1086e7]
    };
    D_j_0x8a6e17.post(_0x2c7b0e, async (_0x51043a, _0x42a86b, _0x4927ed) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x4927ed, _0x1086e7);
        let _0x4a164e = JSON.parse(D_j_0x40d020[_0x1086e7]);
        if (typeof _0x4a164e == "string") {
          _0x4a164e = JSON.parse(_0x4a164e);
        }
        if (_0x4a164e.success == true) {
          D_j_0x8a6e17.log("[账号" + (_0x1086e7 + 1) + "]:  " + _0x591b79 + "任务完成，恭喜你获得" + _0x4a164e.items.score + "青豆 🎉");
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x1086e7 + 1) + "]:  任务领取奖励失败");
        }
      } catch (_0x1d6295) {} finally {
        _0xa71cb9();
      }
    }, _0x455be2);
  });
}
function D_j_0x51056(_0x3cc808, _0x2f2f70) {
  return new Promise((_0x19e55f, _0x1115e5) => {
    const _0x1ffedc = "https://kandian.wkandian.com/v3/article/lists.json?" + _0x3cc808;
    const _0x1120fd = {
      url: _0x1ffedc,
      headers: D_j_0x481d43
    };
    D_j_0x8a6e17.get(_0x1120fd, async (_0x153464, _0x4b983b, _0x134c91) => {
      try {
        if (!_0x134c91) {
          D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  获取视频列表失败，请求body => " + _0x3cc808);
        }
        await D_j_0x2c8e74("zqkd", _0x134c91, _0x2f2f70);
        let _0x1512bf = JSON.parse(D_j_0x40d020[_0x2f2f70]);
        if (typeof _0x1512bf == "string") {
          _0x1512bf = JSON.parse(_0x1512bf);
        }
        if (_0x1512bf.success == true) {
          for (let _0xa651e1 = 0; _0xa651e1 < _0x1512bf.items.length; _0xa651e1++) {
            let _0x1eb954 = _0x1512bf.items[_0xa651e1];
            const _0x56f556 = _0x1eb954.id;
            const _0x5e4463 = _0x1eb954.catid;
            if (_0x1eb954.ctype == 0) {
              if (D_j_0x93a633[_0x2f2f70].has(_0x56f556)) {
                D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  今天已经读过此篇文章");
                continue;
              }
              D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  开始阅读第" + (_0xa651e1 + 1) + "篇文章");
              D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  文章标题 => " + D_j_0x185156(_0x1eb954.title, 40));
              await D_j_0x56a331(_0x56f556, _0x5e4463, _0x2f2f70);
              D_j_0x93a633[_0x2f2f70].add(_0x56f556);
              D_j_0x2d4ee4[_0x2f2f70].add(_0x1eb954);
            } else {
              if (_0x1eb954.ctype == 3) {
                if (D_j_0x18b7af[_0x2f2f70].has(_0x56f556)) {
                  D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  今天已经观看过此视频");
                  continue;
                }
                D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  开始观看第" + (_0xa651e1 + 1) + "个视频");
                D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  视频标题 => " + D_j_0x185156(_0x1eb954.title, 40));
                await D_j_0x17a1ce(_0x56f556, _0x5e4463, _0x2f2f70);
                D_j_0x18b7af[_0x2f2f70].add(_0x56f556);
              }
            }
            await D_j_0x8a6e17.wait(D_j_0x48d1de(35000, 60000));
            await D_j_0xf35436(D_j_0x545958[_0x2f2f70], _0x2f2f70, 6000, _0x1eb954.ctype);
            if (_0xa651e1 % 2 == 0) {
              D_j_0x8a6e17.log("[账号" + (_0x2f2f70 + 1) + "]:  开始上传阅读时长");
              await D_j_0x6b44fd(D_j_0x48d1de(20, 55), _0x2f2f70);
              await D_j_0x362ae1(D_j_0x545958[_0x2f2f70], _0x2f2f70, 3000);
            }
          }
        }
      } catch (_0x32eae7) {
        D_j_0x8a6e17.log(_0x32eae7);
      }
      _0x19e55f();
    });
  });
}
async function D_j_0x9c2f01(_0x49ac1a, _0x2ff245) {
  return new Promise((_0x4005af, _0x306b97) => {
    if (D_j_0x1d87a0 == "") {
      return;
    }
    const _0x1f602a = D_j_0x1411d5 + "/script/ios/fdb/des/decode";
    const _0x22ebb4 = {
      encryptedStr: _0x49ac1a,
      appName: "zqkd"
    };
    const _0x18e797 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x257302 = {
      url: _0x1f602a,
      headers: _0x18e797,
      body: JSON.stringify(_0x22ebb4)
    };
    D_j_0x8a6e17.post(_0x257302, async (_0x4e6ed1, _0x15eb06, _0x5ac2ec) => {
      try {
        D_j_0x9bf786[_0x2ff245] = _0x5ac2ec;
      } catch (_0x4a60ad) {
        D_j_0x8a6e17.log(_0x4a60ad);
      }
      _0x4005af();
    });
  });
}
async function D_j_0x3c8f3a(_0x3f54eb, _0x7b8166) {
  return new Promise((_0x199bfe, _0x7d0537) => {
    let _0x2b994e = D_j_0x1411d5 + "/script/ios/fdb/des/decode";
    if (D_j_0x1d87a0 == "") {
      return;
    }
    if (D_j_0x25f79d == "") {
      return;
    }
    const _0xdba9db = {
      encryptedStr: _0x3f54eb,
      appName: "zqkd"
    };
    const _0x5b84b6 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x15466d = {
      url: _0x2b994e,
      headers: _0x5b84b6,
      body: JSON.stringify(_0xdba9db)
    };
    D_j_0x8a6e17.post(_0x15466d, async (_0x5e9872, _0xfcb6aa, _0x2c64e0) => {
      try {
        D_j_0x2ad0b0[_0x7b8166] = _0x2c64e0;
      } catch (_0x5dee72) {
        D_j_0x8a6e17.log(_0x5dee72);
      }
      _0x199bfe();
    });
  });
}
async function D_j_0x9cb7c8(_0x2eeadc, _0x589f83) {
  return new Promise((_0x543347, _0x2d6a83) => {
    let _0x4567fc = D_j_0x1411d5 + "/script/ios/fdb/des/encode";
    const _0xa071f3 = {
      clearStr: _0x2eeadc,
      appName: "zqkd",
      iv: D_j_0x3820f1[_0x589f83]
    };
    if (D_j_0x1d87a0 == "") {
      return;
    }
    const _0x477566 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x520fbe = {
      url: _0x4567fc,
      headers: _0x477566,
      body: JSON.stringify(_0xa071f3)
    };
    D_j_0x8a6e17.post(_0x520fbe, async (_0x263676, _0x3ef39f, _0x54106c) => {
      _0x54106c = _0x54106c.replace(/"/g, "");
      _0x54106c = "=" + _0x54106c;
      _0x54106c = encodeURIComponent(_0x54106c);
      try {
        D_j_0x545958[_0x589f83] = "" + D_j_0x57f42b + _0x54106c;
      } catch (_0x38c35d) {
        D_j_0x8a6e17.log(_0x38c35d);
      }
      _0x543347();
    });
  });
}
function D_j_0x16a2b5(_0xbe90df) {
  _0xbe90df = _0xbe90df.replace(/\"/g, "");
  var _0x1a0d97;
  var _0x156d81 = {};
  var _0x402f92 = _0xbe90df.slice(_0xbe90df.indexOf("?") + 1).split("&");
  for (var _0x241d1b = 0; _0x241d1b < _0x402f92.length; _0x241d1b++) {
    _0x1a0d97 = _0x402f92[_0x241d1b].split("=");
    _0x156d81[_0x1a0d97[0]] = _0x1a0d97[1];
  }
  return _0x156d81;
}
function D_j_0x1983ad(_0x2d4485) {
  let _0x27fd37 = D_j_0x48d1de(0, 10);
  let _0x4dec43 = D_j_0x452e25[_0x27fd37];
  let _0x547a34 = "";
  ts = Math.round(new Date().getTime() / 1000).toString();
  if (D_j_0x25f79d == "") {
    return;
  }
  _0x547a34 += "access=" + _0x2d4485.access;
  if (_0x2d4485.app_version < "3.0.0") {
    _0x547a34 += "&app_version=" + _0x4dec43;
  } else {
    _0x547a34 += "&app_version=" + _0x2d4485.app_version;
  }
  _0x547a34 += "&channel=" + _0x2d4485.channel;
  _0x547a34 += "&channel_code=" + _0x2d4485.channel_code;
  _0x547a34 += "&cid=" + _0x2d4485.cid;
  if (_0x2d4485.client_version < "3.0.0") {
    _0x547a34 += "&client_version=" + _0x4dec43;
  } else {
    _0x547a34 += "&client_version=" + _0x2d4485.client_version;
  }
  _0x547a34 += "&device_brand=" + _0x2d4485.device_brand;
  _0x547a34 += "&device_id=" + _0x2d4485.device_id;
  _0x547a34 += "&device_model=" + _0x2d4485.device_model;
  _0x547a34 += "&device_platform=" + _0x2d4485.device_platform;
  _0x547a34 += "&device_type=" + _0x2d4485.device_type;
  _0x547a34 += "&isnew=" + _0x2d4485.isnew;
  _0x547a34 += "&mobile_type=" + _0x2d4485.mobile_type;
  _0x547a34 += "&net_type=" + _0x2d4485.net_type;
  _0x547a34 += "&openudid=" + _0x2d4485.openudid;
  _0x547a34 += "&os_version=" + _0x2d4485.os_version;
  _0x547a34 += "&phone_code=" + _0x2d4485.phone_code;
  _0x547a34 += "&phone_network=" + _0x2d4485.phone_network;
  _0x547a34 += "&platform=" + _0x2d4485.platform;
  _0x547a34 += "&request_time=" + ts;
  _0x547a34 += "&resolution=" + _0x2d4485.resolution;
  _0x547a34 += "&sm_device_id=" + _0x2d4485.sm_device_id;
  _0x547a34 += "&szlm_ddid=" + _0x2d4485.szlm_ddid;
  _0x547a34 += "&time=" + ts;
  _0x547a34 += "&uid=" + _0x2d4485.uid;
  _0x547a34 += "&uuid=" + _0x2d4485.uuid;
  return _0x547a34;
}
function D_j_0x3b9155(_0x338a19, _0x5d1c36) {
  let _0x6b69a6 = "";
  if (D_j_0x25f79d == "") {
    return;
  }
  _0x6b69a6 += "uid=" + _0x338a19.uid;
  _0x6b69a6 += "&access=" + _0x338a19.access;
  _0x6b69a6 += "&app_version=" + _0x338a19.app_version;
  _0x6b69a6 += "&channel=" + _0x338a19.channel;
  _0x6b69a6 += "&device_platform=" + _0x338a19.device_platform;
  _0x6b69a6 += "&cookie_id=" + D_j_0x151ba1[_0x5d1c36];
  _0x6b69a6 += "&device_brand=" + _0x338a19.device_brand;
  _0x6b69a6 += "&device_type=" + _0x338a19.device_type;
  _0x6b69a6 += "&sm_device_id=" + _0x338a19.sm_device_id;
  _0x6b69a6 += "&device_id=" + _0x338a19.device_id;
  _0x6b69a6 += "&os_version=" + _0x338a19.os_version;
  _0x6b69a6 += "&cookie=" + D_j_0x5e66f6[_0x5d1c36];
  _0x6b69a6 += "&device_model=" + _0x338a19.device_model;
  return _0x6b69a6;
}
function D_j_0x556637(_0x68229) {
  return new Promise(_0x160a91 => {
    const _0x484c7f = D_j_0x3b9155(D_j_0x16a2b5(D_j_0x9bf786[_0x68229]), _0x68229);
    const _0x1d3e49 = {
      url: "https://kd.youth.cn/WebApi/PunchCard/signUp?" + _0x484c7f,
      headers: JSON.parse(D_j_0x52fc90[_0x68229].kkz_headers)
    };
    D_j_0x8a6e17.post(_0x1d3e49, async (_0x27a44a, _0x1c398a, _0x32c100) => {
      try {
        let _0x241e47 = JSON.parse(_0x32c100);
        if (_0x241e47.code == 1) {
          D_j_0x8a6e17.log("[账号" + (_0x68229 + 1) + "]: 打卡报名成功 🎉");
        }
      } catch (_0x426962) {
        D_j_0x8a6e17.log(_0x426962);
      }
      _0x160a91();
    });
  });
}
function D_j_0x32b573(_0xe722b) {
  return new Promise((_0x1dfff5, _0x51c1f5) => {
    const _0x3b6371 = D_j_0x3b9155(D_j_0x16a2b5(D_j_0x9bf786[_0xe722b]), _0xe722b);
    let _0x1b5fcf = "https://kd.youth.cn/WebApi/PunchCard/doCard?" + _0x3b6371;
    const _0x4f89cf = {
      url: _0x1b5fcf,
      headers: JSON.parse(D_j_0x52fc90[_0xe722b].kkz_headers)
    };
    D_j_0x8a6e17.post(_0x4f89cf, async (_0xe78225, _0x2f876b, _0x5a1ed9) => {
      try {
        let _0x32aff0 = JSON.parse(_0x5a1ed9);
        if (_0x32aff0.code == 1) {
          D_j_0x8a6e17.log("[账号" + (_0xe722b + 1) + "]:  早起打卡成功 🎉");
        }
      } catch (_0x23ef50) {
        D_j_0x8a6e17.log(_0x23ef50);
      }
      _0x1dfff5();
    });
  });
}
function D_j_0x56d104(_0x529a78) {
  return new Promise((_0x5ba088, _0x44be35) => {
    const _0x3508fa = D_j_0x3b9155(D_j_0x16a2b5(D_j_0x9bf786[_0x529a78]), _0x529a78);
    let _0x423b3b = "https://kd.youth.cn/WebApi/PunchCard/getMainData?" + _0x3508fa;
    const _0x56c186 = {
      url: _0x423b3b,
      headers: JSON.parse(D_j_0x52fc90[_0x529a78].kkz_headers)
    };
    D_j_0x8a6e17.get(_0x56c186, async (_0x17bb74, _0x562273, _0x15bc06) => {
      try {
        let _0x22bfa8 = JSON.parse(_0x15bc06);
        if (_0x22bfa8.code == 1) {
          const _0x1488d2 = _0x22bfa8.data.luck.luckdraw_num;
          D_j_0x8a6e17.log("[账号" + (_0x529a78 + 1) + "]:  你已经连续打卡" + _0x22bfa8.data.luck.continue_card_days + "天，可以抽奖" + _0x1488d2 + "次");
          if (_0x1488d2 > 0) {
            let _0x538832 = D_j_0x48d1de(6000, 9000);
            D_j_0x8a6e17.log("[账号" + (_0x529a78 + 1) + "]:  随机等待" + _0x538832 + "秒...");
            await D_j_0x8a6e17.wait(D_j_0x48d1de(6000, 9000));
            await D_j_0x162ba9(_0x529a78);
          }
        }
      } catch (_0x3311a9) {
        D_j_0x8a6e17.log(_0x3311a9);
      }
      _0x5ba088();
    });
  });
}
function D_j_0x162ba9(_0x4e06ba) {
  return new Promise((_0x47fc91, _0x48c0d9) => {
    const _0x122363 = D_j_0x3b9155(D_j_0x16a2b5(D_j_0x9bf786[_0x4e06ba]), _0x4e06ba);
    let _0x48f2f0 = "https://kd.youth.cn/WebApi/PunchCard/luckdraw?" + _0x122363;
    const _0x4dd676 = {
      url: _0x48f2f0,
      headers: JSON.parse(D_j_0x52fc90[_0x4e06ba].kkz_headers)
    };
    D_j_0x8a6e17.post(_0x4dd676, async (_0x52dae0, _0x4f6682, _0xd8c097) => {
      try {
        let _0x4cffab = JSON.parse(_0xd8c097);
        if (_0x4cffab.code == 1) {
          D_j_0x8a6e17.log("[账号" + (_0x4e06ba + 1) + "]:  抽奖成功获得" + _0x4cffab.data.score + "青豆");
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x4e06ba + 1) + "]:  今天的抽奖次数太多，明天继续吧！");
        }
      } catch (_0x47255c) {
        D_j_0x8a6e17.log(_0x47255c);
      }
      _0x47fc91();
    });
  });
}
function D_j_0xe1cb30(_0xeb6f39) {
  return new Promise((_0xfa7308, _0x548b1d) => {
    let _0x5735fb = "https://kandian.wkandian.com/v2/article/share/put.json?" + D_j_0x545958[_0xeb6f39];
    const _0x39f7bc = {
      url: _0x5735fb,
      headers: D_j_0x481d43
    };
    D_j_0x8a6e17.get(_0x39f7bc, async (_0x4e7bad, _0x1cb058, _0x313492) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x313492, _0xeb6f39);
        let _0x265d3f = JSON.parse(D_j_0x40d020[_0xeb6f39]);
        _0x265d3f = _0x265d3f.replace(/\"button\".+\"desc\"/, "\"desc\"");
        if (typeof _0x265d3f == "string") {
          _0x265d3f = JSON.parse(_0x265d3f);
        }
        if (_0x265d3f.success == true) {
          D_j_0x8a6e17.log("[账号" + (_0xeb6f39 + 1) + "]:  火爆文章分享成功 🎉");
        }
      } catch (_0x407014) {
        D_j_0x8a6e17.log(_0x407014);
      }
      _0xfa7308();
    });
  });
}
function D_j_0xf35436(_0xfa3c04, _0x1c1748, _0xd92096 = 0, _0x49024d) {
  return new Promise(_0x71c766 => {
    const _0x5cd140 = {
      url: "https://kandian.wkandian.com/v5/article/complete.json",
      headers: D_j_0x5be96f,
      body: _0xfa3c04
    };
    D_j_0x8a6e17.post(_0x5cd140, async (_0xacca8, _0x59ed93, _0x5d8c6d) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x5d8c6d, _0x1c1748);
        let _0x3c6cd6 = JSON.parse(D_j_0x40d020[_0x1c1748]);
        if (typeof _0x3c6cd6 == "string") {
          _0x3c6cd6 = JSON.parse(_0x3c6cd6);
        }
        if (_0x3c6cd6.items.read_score !== "undefined") {
          if (_0x49024d == 0) {
            D_j_0x8a6e17.log("[账号" + (_0x1c1748 + 1) + "]:  浏览文章成功，获得" + _0x3c6cd6.items.read_score + "青豆");
          } else {
            D_j_0x8a6e17.log("[账号" + (_0x1c1748 + 1) + "]:  观看视频成功，获得" + _0x3c6cd6.items.read_score + "青豆");
          }
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x1c1748 + 1) + "]:  看太久了，换一篇试试");
        }
      } catch (_0x321f64) {} finally {
        _0x71c766();
      }
    }, _0xd92096);
  });
}
function D_j_0x362ae1(_0x3b26f8, _0x56e786, _0x6f1589 = 0) {
  return new Promise(_0x1625b8 => {
    const _0x285f16 = {
      url: "https://kandian.wkandian.com/v5/user/stay.json",
      headers: D_j_0x979161,
      body: _0x3b26f8
    };
    D_j_0x8a6e17.post(_0x285f16, async (_0x1df28a, _0x18baed, _0x22b5fc) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x22b5fc, _0x56e786);
        let _0x1e8bc7 = JSON.parse(D_j_0x40d020[_0x56e786]);
        if (typeof _0x1e8bc7 == "string") {
          _0x1e8bc7 = JSON.parse(_0x1e8bc7);
        }
        if (_0x1e8bc7.success === true) {
          D_j_0x8a6e17.log("[账号" + (_0x56e786 + 1) + "]:  阅读总时长" + _0x1e8bc7.time + "秒");
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x56e786 + 1) + "]:  更新阅读时长失败");
        }
      } catch (_0x54a6df) {} finally {
        _0x1625b8();
      }
    }, _0x6f1589);
  });
}
function D_j_0x44e6e7(_0x4cefff) {
  return new Promise((_0x9eac00, _0xebe48b) => {
    const _0x4a3e97 = Math.round(new Date().getTime() / 1000).toString();
    let _0x525a48 = D_j_0x52fc90[_0x4cefff].kkz_url;
    if (!_0x525a48) {
      D_j_0x8a6e17.log("[账号" + (_0x4cefff + 1) + "]: 请抓取看看赚列表CK");
      return;
    }
    _0x525a48 = _0x525a48.replace(/&request_time=.\d{10}/, "&request_time=" + _0x4a3e97);
    const _0x332bfa = {
      url: _0x525a48,
      headers: JSON.parse(D_j_0x52fc90[_0x4cefff].kkz_headers)
    };
    D_j_0x8a6e17.get(_0x332bfa, async (_0xe82e23, _0x29210c, _0x66f9c5) => {
      try {
        let _0x42b901 = JSON.parse(_0x66f9c5);
        if (typeof _0x42b901 == "string") {
          _0x42b901 = JSON.parse(_0x42b901);
        }
        if (_0x42b901.status == 1) {
          const _0x379aca = _0x42b901.data.list;
          for (let _0x3a3f11 = 0; _0x3a3f11 < _0x379aca.length; _0x3a3f11++) {
            let _0x39f009 = _0x379aca[_0x3a3f11];
            let _0x2beceb = _0x39f009.title;
            let _0x1d7d62 = _0x39f009.id;
            await D_j_0x42c82a(_0x1d7d62, _0x4cefff);
            if (_0x39f009.status != "2") {
              D_j_0x8a6e17.log("[账号" + (_0x4cefff + 1) + "]:  开始看看赚任务 => " + _0x2beceb);
              await D_j_0x51c13c(D_j_0x545958[_0x4cefff], _0x4cefff);
            }
          }
        }
      } catch (_0x5790d4) {
        D_j_0x8a6e17.log(_0x5790d4);
      }
      _0x9eac00();
    });
  });
}
function D_j_0x51c13c(_0x33a424, _0x184f87, _0x4974ef = 0) {
  return new Promise(_0x39b25f => {
    const _0x53a825 = {
      url: "https://kandian.wkandian.com/v5/Nameless/adlickstart.json",
      headers: D_j_0x5be96f,
      body: _0x33a424
    };
    D_j_0x8a6e17.post(_0x53a825, async (_0x5bda54, _0x48b110, _0x3717f1) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x3717f1, _0x184f87);
        let _0x2e187c = JSON.parse(D_j_0x40d020[_0x184f87]);
        if (typeof _0x2e187c == "string") {
          _0x2e187c = JSON.parse(_0x2e187c);
        }
        if (_0x2e187c.success === true) {
          D_j_0x8a6e17.log("[账号" + (_0x184f87 + 1) + "]:  看看赚任务 => " + _0x2e187c.items.banner_id + " 激活成功");
          comstate = _0x2e187c.items.comtele_state;
          if (comstate === 1) {
            D_j_0x8a6e17.log("[账号" + (_0x184f87 + 1) + "]:  任务 => " + _0x2e187c.items.banner_id + "已完成");
          } else {
            for (let _0x64682b = 0; _0x64682b < _0x2e187c.items.see_num - _0x2e187c.items.read_num; _0x64682b++) {
              D_j_0x8a6e17.log("[账号" + (_0x184f87 + 1) + "]:  开始阅读第" + parseInt(_0x64682b + 1) + "篇");
              await D_j_0x8a6e17.wait(8000);
              await D_j_0x4968c4(_0x33a424, parseInt(_0x64682b + 1), _0x184f87);
            }
            await D_j_0x8a6e17.wait(10000);
            await D_j_0x47946d(_0x33a424, _0x184f87);
          }
        }
      } catch (_0x411124) {} finally {
        _0x39b25f();
      }
    }, _0x4974ef);
  });
}
function D_j_0x4968c4(_0x19d1ad, _0x333deb, _0x7f6a99, _0x56addc = 0) {
  return new Promise(_0x3a9bc0 => {
    const _0x378c5a = {
      url: "https://kandian.wkandian.com/v5/Nameless/bannerstatus.json",
      headers: D_j_0x5be96f,
      body: _0x19d1ad
    };
    D_j_0x8a6e17.post(_0x378c5a, async (_0x18452c, _0x184412, _0xf8fdfe) => {
      try {
        await D_j_0x2c8e74("zqkd", _0xf8fdfe, _0x7f6a99);
        let _0x3a1133 = JSON.parse(D_j_0x40d020[_0x7f6a99]);
        if (typeof _0x3a1133 == "string") {
          _0x3a1133 = JSON.parse(_0x3a1133);
        }
        if (_0x3a1133.success === true) {
          D_j_0x8a6e17.log("[账号" + (_0x7f6a99 + 1) + "]:  浏览第" + _0x333deb + "篇文章成功");
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x7f6a99 + 1) + "]:  浏览第" + _0x333deb + "篇文章失败");
        }
      } catch (_0xf03ff2) {} finally {
        _0x3a9bc0();
      }
    }, _0x56addc);
  });
}
function D_j_0x47946d(_0x4add31, _0x38135a, _0x3aefea = 0) {
  return new Promise(_0x27e0d1 => {
    const _0x55d82f = {
      url: "https://kandian.wkandian.com/v5/Nameless/adlickend.json",
      headers: D_j_0x5be96f,
      body: _0x4add31
    };
    D_j_0x8a6e17.post(_0x55d82f, async (_0x3e6fc1, _0xeb6716, _0x307a8d) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x307a8d, _0x38135a);
        let _0x5e6d4c = JSON.parse(D_j_0x40d020[_0x38135a]);
        if (typeof _0x5e6d4c == "string") {
          _0x5e6d4c = JSON.parse(_0x5e6d4c);
        }
        if (_0x5e6d4c.items.score !== "undefined") {
          D_j_0x8a6e17.log("[账号" + (_0x38135a + 1) + "]:  任务完成 恭喜你获得 => " + _0x5e6d4c.items.score + "青豆 🎉");
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x38135a + 1) + "]:  任务领取奖励失败");
        }
      } catch (_0x440561) {} finally {
        _0x27e0d1();
      }
    }, _0x3aefea);
  });
}
function D_j_0x5eda51(_0x895f21) {
  return new Promise((_0x29e363, _0x1dd02d) => {
    const _0x2e00db = Math.round(new Date().getTime() / 1000).toString();
    let _0xbdf48c = D_j_0x52fc90[_0x895f21].kkz_url.replace("type=0", "type=2");
    if (!_0xbdf48c) {
      D_j_0x8a6e17.log("[账号" + (_0x895f21 + 1) + "]:  请抓取看看赚列表CK");
      return;
    }
    _0xbdf48c = _0xbdf48c.replace(/&request_time=.\d{10}/, "&request_time=" + _0x2e00db);
    const _0xff2512 = {
      url: _0xbdf48c,
      headers: JSON.parse(D_j_0x52fc90[_0x895f21].kkz_headers)
    };
    D_j_0x8a6e17.get(_0xff2512, async (_0x3fc6fb, _0x37a634, _0x502ac9) => {
      try {
        let _0x31074d = JSON.parse(_0x502ac9);
        if (typeof _0x31074d == "string") {
          _0x31074d = JSON.parse(_0x31074d);
        }
        if (_0x31074d.status == 1) {
          const _0x390117 = _0x31074d.data.list;
          for (let _0x679e0a = 0; _0x679e0a < _0x390117.length; _0x679e0a++) {
            let _0x108c4a = _0x390117[_0x679e0a];
            let _0x4ee2b2 = _0x108c4a.title;
            let _0x2940a5 = _0x108c4a.id;
            await D_j_0x991dcb(_0x2940a5, _0x895f21);
            if (_0x108c4a.status != "2") {
              D_j_0x8a6e17.log("[账号" + (_0x895f21 + 1) + "]:  开始浏览赚任务 => " + _0x4ee2b2);
              await D_j_0x5557c8(D_j_0x545958[_0x895f21], _0x895f21);
            }
          }
        }
      } catch (_0xc00988) {
        D_j_0x8a6e17.log(_0xc00988);
      }
      _0x29e363();
    });
  });
}
function D_j_0x5557c8(_0x4d497d, _0x5627c6, _0x46f4a0 = 0) {
  return new Promise(_0x317c18 => {
    const _0x154013 = {
      url: "https://kandian.wkandian.com/v5/task/browse_start.json",
      headers: D_j_0x5be96f,
      body: _0x4d497d
    };
    D_j_0x8a6e17.post(_0x154013, async (_0x589b18, _0x6c6544, _0x488166) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x488166, _0x5627c6);
        let _0x30d770 = JSON.parse(D_j_0x40d020[_0x5627c6]);
        if (typeof _0x30d770 == "string") {
          _0x30d770 = JSON.parse(_0x30d770);
        }
        if (_0x30d770.success === true) {
          D_j_0x8a6e17.log("[账号" + (_0x5627c6 + 1) + "]:  激活浏览赚任务成功");
          comstate = _0x30d770.items.comtele_state;
          if (comstate === 1) {
            D_j_0x8a6e17.log("[账号${i+1}]:  任务: " + _0x30d770.items.banner_id + "已完成，跳过");
          } else {
            D_j_0x8a6e17.log("[账号" + (_0x5627c6 + 1) + "]:  任务开始，" + _0x30d770.items.banner_id + _0x30d770.message);
            await D_j_0x8a6e17.wait(10000);
            await D_j_0x231e21(_0x4d497d, _0x5627c6);
          }
        } else {
          console.log("[账号" + (_0x5627c6 + 1) + "]:  激活浏览赚任务失败");
          smbody = D_j_0x8a6e17.getdata("zqllzbody").replace(zqllzbody1 + "&", "");
          D_j_0x8a6e17.setdata(smbody, "zqllzbody");
          console.log("[账号" + (_0x5627c6 + 1) + "]:  该浏览赚任务已自动删除");
        }
      } catch (_0xe34de2) {
        D_j_0x8a6e17.log(_0xe34de2);
      } finally {
        _0x317c18();
      }
    }, _0x46f4a0);
  });
}
function D_j_0x231e21(_0x5d75b1, _0x22ede8, _0x5418cf = 0) {
  return new Promise(_0xf99f63 => {
    const _0x34bc42 = {
      url: "https://kandian.wkandian.com/v5/task/browse_end.json",
      headers: D_j_0x5be96f,
      body: _0x5d75b1
    };
    D_j_0x8a6e17.post(_0x34bc42, async (_0x3631a3, _0x2bbb5c, _0x4820b7) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x4820b7, _0x22ede8);
        let _0x201758 = JSON.parse(D_j_0x40d020[_0x22ede8]);
        if (typeof _0x201758 == "string") {
          _0x201758 = JSON.parse(_0x201758);
        }
        if (_0x201758.items.score !== "undefined") {
          D_j_0x8a6e17.log("[账号" + (_0x22ede8 + 1) + "]:  浏览赚获得 => " + _0x201758.items.score + "青豆 🎉");
        } else {
          D_j_0x8a6e17.log("[账号" + (_0x22ede8 + 1) + "]:  领取奖励失败");
        }
      } catch (_0x27588a) {
        D_j_0x8a6e17.log(_0x27588a);
      } finally {
        _0xf99f63();
      }
    }, _0x5418cf);
  });
}
function D_j_0x2c317a(_0x564d8e) {
  return new Promise((_0x3b1941, _0x36dfdd) => {
    const _0x5993fc = new Date().valueOf();
    let _0x4ba19a = "https://kd.youth.cn/WebApi/RotaryTable/turnRotary?_=" + _0x5993fc;
    const _0x514a04 = D_j_0x4604ce(15);
    const _0x2c3977 = D_j_0x4f16fa(_0x514a04);
    const _0x30cbcf = {
      url: _0x4ba19a,
      headers: JSON.parse(D_j_0x52fc90[_0x564d8e].kkz_headers),
      body: "cookie=" + D_j_0x5e66f6[_0x564d8e] + "&cookie_id=" + _0x2c3977
    };
    D_j_0x8a6e17.post(_0x30cbcf, async (_0x208a27, _0x10188a, _0x23c4aa) => {
      try {
        let _0x1fdeb0 = JSON.parse(_0x23c4aa);
        if (_0x1fdeb0.status == 1) {
          if (_0x1fdeb0.data.score == 0) {
            D_j_0x8a6e17.log("[账号" + (_0x564d8e + 1) + "]:  哎呀没抽中青豆 😭");
          } else {
            D_j_0x8a6e17.log("[账号" + (_0x564d8e + 1) + "]:  恭喜本次转盘获得了" + _0x1fdeb0.data.score + "青豆 🎉");
          }
          if (_0x1fdeb0.data.doubleNum != 0 && _0x1fdeb0.data.score > 0) {
            await D_j_0x27eabb(_0x564d8e);
          }
        }
      } catch (_0x415de1) {
        D_j_0x8a6e17.log(_0x415de1);
      }
      _0x3b1941();
    });
  });
}
function D_j_0x27eabb(_0x1d8a7a) {
  return new Promise((_0x26a77c, _0x55d01c) => {
    const _0x23d939 = new Date().getTime();
    let _0x5b6c88 = "https://kd.youth.cn/WebApi/RotaryTable/toTurnDouble?_=" + _0x23d939;
    const _0x404bce = D_j_0x4604ce(15);
    const _0x97d99f = D_j_0x4f16fa(_0x404bce);
    const _0x227ad9 = {
      url: _0x5b6c88,
      headers: JSON.parse(D_j_0x52fc90[_0x1d8a7a].kkz_headers),
      body: "cookie=" + D_j_0x5e66f6[_0x1d8a7a] + "&cookie_id=" + _0x97d99f
    };
    D_j_0x8a6e17.post(_0x227ad9, async (_0x4da6ce, _0x218fd6, _0xb3072e) => {
      try {
        let _0x867ad6 = JSON.parse(_0xb3072e);
        if (_0x867ad6.status == 1) {
          D_j_0x8a6e17.log("[账号" + (_0x1d8a7a + 1) + "]:  恭喜你本次转盘双倍任务，获得了" + _0x867ad6.data.score + "青豆 🎉");
        }
      } catch (_0x18868e) {
        D_j_0x8a6e17.log(_0x18868e);
      }
      _0x26a77c();
    });
  });
}
function D_j_0x30da11(_0x3f118f, _0x307974) {
  return new Promise((_0x1ba333, _0x22109e) => {
    const _0x5ca047 = new Date().getTime();
    let _0x468fec = "https://kd.youth.cn/WebApi/RotaryTable/chestReward?_=" + _0x5ca047;
    const _0x1ba4df = D_j_0x4604ce(15);
    const _0x346a46 = D_j_0x4f16fa(_0x1ba4df);
    const _0x110619 = {
      url: _0x468fec,
      headers: JSON.parse(D_j_0x52fc90[_0x307974].kkz_headers),
      body: "cookie=" + D_j_0x5e66f6[_0x307974] + "&cookie_id=" + _0x346a46 + "&num=" + _0x3f118f
    };
    D_j_0x8a6e17.post(_0x110619, async (_0x348420, _0x58a2b0, _0x10b6f7) => {
      try {
        let _0x1c0f21 = JSON.parse(_0x10b6f7);
        if (_0x1c0f21.status == 1) {
          D_j_0x8a6e17.log("[账号" + (_0x307974 + 1) + "]:  恭喜你转盘打开宝箱任务" + _0x3f118f + "，获得了" + _0x1c0f21.data.score + "青豆 🎉");
        }
      } catch (_0x1747be) {
        D_j_0x8a6e17.log(_0x1747be);
      }
      _0x1ba333();
    });
  });
}
function D_j_0x3b2286(_0x48391a) {
  return new Promise((_0x2fa3c0, _0x369f76) => {
    let _0x558886 = "https://kandian.wkandian.com/V17/NewTaskIos/recordNum.json";
    const _0x23e361 = {
      url: _0x558886,
      headers: D_j_0x5be96f,
      body: D_j_0x545958[_0x48391a]
    };
    D_j_0x8a6e17.post(_0x23e361, async (_0x542fbe, _0x1efd4a, _0x57d0a2) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x57d0a2, _0x48391a);
        let _0x37e765 = JSON.parse(D_j_0x40d020[_0x48391a]);
        if (typeof _0x37e765 == "string") {
          _0x37e765 = JSON.parse(_0x37e765);
        }
        if (_0x37e765.status == 0) {
          D_j_0x8a6e17.log("[账号" + (_0x48391a + 1) + "]:  恭喜你福利视频任务完成");
        }
      } catch (_0x45cc5f) {
        D_j_0x8a6e17.log(_0x45cc5f);
      }
      _0x2fa3c0();
    });
  });
}
function D_j_0x2198de(_0x365620) {
  return new Promise((_0x59002b, _0x1e02ee) => {
    const _0x1328c8 = Math.round(new Date().getTime() / 1000).toString();
    let _0x33de0a = D_j_0x3b9155(D_j_0x16a2b5(D_j_0x9bf786[_0x365620]), _0x365620);
    _0x33de0a = _0x33de0a + ("&request_time=" + _0x1328c8);
    let _0x35c794 = "https://kd.youth.cn/WebApi/invite/openHourRed";
    const _0x2e57a7 = {
      url: _0x35c794,
      headers: JSON.parse(D_j_0x52fc90[_0x365620].kkz_headers),
      body: _0x33de0a
    };
    D_j_0x8a6e17.post(_0x2e57a7, async (_0x19e559, _0x1bb3e9, _0x17d5b6) => {
      try {
        let _0x3e8db3 = JSON.parse(_0x17d5b6);
        if (_0x3e8db3.status == 1) {
          D_j_0x8a6e17.log("[账号" + (_0x365620 + 1) + "]:  恭喜你打开宝箱，获得了" + _0x3e8db3.data.score + "青豆 🎉");
        }
      } catch (_0x5f1911) {
        D_j_0x8a6e17.log(_0x5f1911);
      }
      _0x59002b();
    });
  });
}
function D_j_0x550c4f(_0x1482c9) {
  return new Promise((_0x9ae84, _0x375037) => {
    let _0x402506 = "https://kandian.wkandian.com/v5/wechat/withdraw2.json";
    const _0x4f7e4d = {
      url: _0x402506,
      headers: D_j_0x481d43,
      body: D_j_0x545958[_0x1482c9]
    };
    D_j_0x8a6e17.post(_0x4f7e4d, async (_0x18da54, _0x5d82b7, _0x4603e8) => {
      try {
        await D_j_0x2c8e74("zqkd", _0x4603e8, _0x1482c9);
        let _0x343238 = JSON.parse(D_j_0x40d020[_0x1482c9]);
        if (typeof _0x343238 == "string") {
          _0x343238 = JSON.parse(_0x343238);
        }
        if (_0x343238.success == true) {
          let _0x1da6f6 = 1;
          if (D_j_0x143197 == 0) {
            _0x1da6f6 = 0.3;
          } else {
            if (D_j_0x143197 == 1) {
              _0x1da6f6 = 1;
            } else {
              if (D_j_0x143197 == 2) {
                _0x1da6f6 = 10;
              } else {
                if (D_j_0x143197 == 3) {
                  _0x1da6f6 = 30;
                } else {
                  _0x1da6f6 = 0;
                }
              }
            }
          }
          D_j_0x8a6e17.log("[账号" + (_0x1482c9 + 1) + "]:  " + D_j_0x3ec201[_0x1482c9] + "，恭喜你，成功提现" + _0x1da6f6 + "元 🎉");
        }
      } catch (_0x38f542) {
        D_j_0x8a6e17.log(_0x38f542);
      }
      _0x9ae84();
    });
  });
}
function D_j_0x124521(_0x5dbb15) {
  return new Promise((_0x318a9b, _0x53cb47) => {
    let _0x477521 = "https://kandian.wkandian.com/WebApi/ShareNew/execExtractTask";
    const _0x58841b = {
      url: _0x477521,
      headers: D_j_0x481d43,
      body: D_j_0x585764
    };
    D_j_0x8a6e17.post(_0x58841b, async (_0x4af639, _0x1cd192, _0x5e4187) => {
      try {
        let _0x388ff3 = JSON.parse(_0x5e4187);
        if (_0x388ff3.status == 1) {
          D_j_0x8a6e17.log("[账号" + (_0x5dbb15 + 1) + "]:  火爆转发奖励领取成功 🎉");
        }
      } catch (_0x4ee325) {
        D_j_0x8a6e17.log(_0x4ee325);
      }
      _0x318a9b();
    });
  });
}
function D_j_0x1282a3(_0x3141a6) {
  let _0x262cee = _0x3141a6.share_url;
  let _0x1ee546 = _0x3141a6.id;
  let _0x3f02a0 = "62154927";
  let _0x42c37d = new Date().getTime();
  let _0x2346c4 = "" + _0x3f02a0 + _0x1ee546 + _0x42c37d;
  let _0x3eb261 = _0x262cee + "&&scene_id=home_feed&share_id=" + _0x2346c4 + "&&time=" + _0x42c37d;
  return _0x3eb261;
}
async function D_j_0x3a2652(_0x52bd6f, _0x10525a) {
  D_j_0x156a56 = encodeURIComponent(encodeURIComponent(_0x52bd6f));
  let _0x5eb494 = String(new Date().getTime());
  D_j_0x4fcc0e = D_j_0x4f16fa(_0x5eb494);
  await D_j_0x55685(D_j_0x4fcc0e, D_j_0x156a56, _0x10525a);
  await D_j_0x8a6e17.wait(D_j_0x48d1de(3000, 6000));
  await D_j_0x3824c1(D_j_0x4fcc0e, D_j_0x156a56, _0x10525a);
  await D_j_0x8a6e17.wait(D_j_0x48d1de(3000, 6000));
  await D_j_0x19118c(D_j_0x156a56, _0x10525a);
  await D_j_0x8a6e17.wait(D_j_0x48d1de(3000, 6000));
  await D_j_0x6708c7(D_j_0x4fcc0e, D_j_0x156a56, _0x10525a);
  await D_j_0x8a6e17.wait(D_j_0x48d1de(3000, 6000));
}
function D_j_0x55685(_0x29967d, _0x338ad6, _0x1e68b5) {
  return new Promise((_0x482b72, _0x10d55e) => {
    let _0x537c19 = new Date().getTime();
    const _0x375189 = "https://script.baertt.com/count2/storage?t=" + _0x29967d + "&referer=" + _0x338ad6 + "&_=" + _0x537c19 + "&jsonpcallback=jsonp2";
    const _0x9cdf52 = {
      url: _0x375189,
      headers: D_j_0x852b96
    };
    D_j_0x8a6e17.get(_0x9cdf52, function (_0x113658, _0x3bbf31, _0x308292) {
      try {
        D_j_0x8a6e17.log("[账号" + (_0x1e68b5 + 1) + "]:  随机抽取分享文章成功");
      } catch (_0x4d1d49) {
        D_j_0x8a6e17.log(_0x4d1d49);
      }
      _0x482b72();
    });
  });
}
function D_j_0x3824c1(_0x32da38, _0x10b8f3, _0x17b77f) {
  return new Promise((_0x495f3e, _0x3a702a) => {
    let _0xf501c5 = new Date().getTime();
    const _0x5976e2 = "https://script.baertt.com/count2/visit?type=1&si=" + _0x32da38 + "&referer=" + _0x10b8f3 + "&_=" + _0xf501c5 + "&jsonpcallback=jsonp3";
    const _0x16f4cb = {
      url: _0x5976e2,
      headers: D_j_0x852b96
    };
    D_j_0x8a6e17.get(_0x16f4cb, function (_0x42d304, _0x570ff6, _0x5a4243) {
      try {
        D_j_0x8a6e17.log("[账号" + (_0x17b77f + 1) + "]:  模拟访问分享文章...");
      } catch (_0x396f81) {
        D_j_0x8a6e17.log(_0x396f81);
      }
      _0x495f3e();
    });
  });
}
function D_j_0x19118c(_0x122b80, _0x3cba92) {
  return new Promise((_0x37e067, _0x75a905) => {
    let _0x5bf49b = new Date().getTime();
    const _0x183000 = "https://script.baertt.com/count2/openpage?referer=" + _0x122b80 + "&_=" + _0x5bf49b + "&jsonpcallback=jsonp5";
    const _0x63a2c7 = {
      url: _0x183000,
      headers: D_j_0x852b96
    };
    D_j_0x8a6e17.get(_0x63a2c7, function (_0x39fae1, _0x346493, _0x4b1a4e) {
      try {
        D_j_0x8a6e17.log("[账号" + (_0x3cba92 + 1) + "]:  模拟浏览分享文章成功");
      } catch (_0x4bce06) {
        D_j_0x8a6e17.log(_0x4bce06);
      }
      _0x37e067();
    });
  });
}
function D_j_0x6708c7(_0x4db2f3, _0x37e47a, _0x232cdd) {
  return new Promise((_0x24db00, _0x4895f5) => {
    let _0x82e72d = new Date().getTime();
    const _0x331841 = "https://script.baertt.com/count2/callback?si=" + _0x4db2f3 + "&referer=" + _0x37e47a + "&_=" + _0x82e72d + "&jsonpcallback=jsonp6";
    const _0x15ecd9 = {
      url: _0x331841,
      headers: D_j_0x852b96
    };
    D_j_0x8a6e17.get(_0x15ecd9, function (_0x6f19b1, _0x5f39f3, _0xf021c4) {
      try {
        D_j_0x8a6e17.log("[账号" + (_0x232cdd + 1) + "]:  恭喜你分享奖励已完成，成功获得500青豆。 🎉");
      } catch (_0x5bb30b) {
        D_j_0x8a6e17.log(_0x5bb30b);
      }
      _0x24db00();
    });
  });
}
function D_j_0x55f581(_0x343d74, _0x39ea4f, _0x41c581) {
  return new Promise((_0x3e7034, _0x5e20da) => {
    const _0x5598ff = D_j_0x1411d5 + "/script/permissions/lastest";
    const _0x3ec2e0 = {
      appName: _0x343d74,
      userId: _0x39ea4f,
      activityCode: _0x41c581,
      version: D_j_0x558b9e
    };
    const _0x1ef1da = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x25255a = {
      url: _0x5598ff,
      headers: _0x1ef1da,
      body: JSON.stringify(_0x3ec2e0)
    };
    D_j_0x8a6e17.post(_0x25255a, async (_0x193d1a, _0x49631a, _0x47f7fa) => {
      const _0x23e19b = _0x47f7fa.replace(/\"/g, "").slice(34);
      const _0x482a08 = new D_j_0x5d3954();
      result = JSON.parse(_0x482a08.decode(_0x23e19b));
      try {
        D_j_0x46e86a = result.version;
        D_j_0x25f79d = result.userAuth;
        D_j_0x5bfe8d = result.scriptAuth;
        D_j_0x41152a = result.runAuth;
        D_j_0x58c744 = result.notify;
        D_j_0x1d87a0 = result.vipAuth;
        D_j_0x1b7cd8 = result.isCharge;
        D_j_0x15d471 = result.runAcounts;
        D_j_0x446216 = result.buyCount;
        D_j_0x19d765 = result.runedCounts;
        D_j_0x341daa = result.runTotalCounts;
        D_j_0x48e060 = result.userRank;
      } catch (_0x1984fe) {
        D_j_0x8a6e17.log(_0x1984fe);
      }
      _0x3e7034();
    });
  });
}
function D_j_0x2c8e74(_0x128d93, _0x3e8994, _0x42d01d) {
  return new Promise((_0x34964b, _0x306324) => {
    const _0x46efe2 = D_j_0x1411d5 + "/script/aes/decode";
    const _0x4e57c9 = {
      appName: _0x128d93,
      encryptedStr: _0x3e8994
    };
    const _0x2bf3d3 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x28fb43 = {
      url: _0x46efe2,
      headers: _0x2bf3d3,
      body: JSON.stringify(_0x4e57c9)
    };
    D_j_0x8a6e17.post(_0x28fb43, async (_0x38edb8, _0x505c0d, _0x7d33b0) => {
      try {
        D_j_0x40d020[_0x42d01d] = _0x7d33b0;
      } catch (_0x543bf6) {
        D_j_0x8a6e17.log(_0x543bf6);
      }
      _0x34964b();
    });
  });
}
function D_j_0x3c6873(_0x5ec59c, _0x436a51) {
  return new Promise((_0x4a54a1, _0x3d11e2) => {
    const _0x18cfe2 = D_j_0x1411d5 + "/script/run/add";
    const _0x31f413 = {
      appName: _0x5ec59c,
      userId: _0x436a51,
      activityCode: D_j_0x4710f1,
      version: D_j_0x558b9e
    };
    const _0x155c5c = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x3bf9c5 = {
      url: _0x18cfe2,
      headers: _0x155c5c,
      body: JSON.stringify(_0x31f413)
    };
    D_j_0x8a6e17.post(_0x3bf9c5, async (_0x4ded35, _0x219b67, _0x2e216c) => {
      _0x4a54a1();
    });
  });
}
function D_j_0x4189af(_0x1c7787, _0x486e96) {
  return new Promise((_0x53e131, _0x48d873) => {
    const _0x3982bc = setTimeout(() => {
      _0x53e131(false);
    }, _0x486e96);
    const _0x1a368e = D_j_0x47636c.get(_0x1c7787, _0xfd1f96 => {
      clearTimeout(_0x3982bc);
      if (_0xfd1f96.statusCode === 404) {
        _0x53e131(true);
      } else {
        _0x53e131(false);
      }
    });
    _0x1a368e.on("error", _0x97997b => {
      clearTimeout(_0x3982bc);
      _0x53e131(false);
    });
    _0x1a368e.on("timeout", () => {
      _0x1a368e.abort();
      _0x48d873(new Error("请求超时"));
    });
  });
}
async function D_j_0x79131c(_0x294bdb, _0x3af23e = 3000) {
  return new Promise((_0x42c75f, _0x3c053c) => {
    const _0x263ab2 = {
      url: _0x294bdb + "/docs"
    };
    setTimeout(() => {
      _0x42c75f(false);
    }, _0x3af23e);
    D_j_0x8a6e17.get(_0x263ab2, async (_0x442483, _0x54e666, _0x2443ca) => {
      if (_0x54e666.status == 401) {
        _0x42c75f(true);
      } else {
        _0x42c75f(false);
      }
    });
  });
}
function D_j_0x185156(_0xacba59, _0x161011) {
  if (_0xacba59.length * 2 <= _0x161011) {
    return _0xacba59;
  }
  var _0x1d2225 = 0;
  var _0x2dd93a = "";
  for (var _0x49f7f7 = 0; _0x49f7f7 < _0xacba59.length; _0x49f7f7++) {
    _0x2dd93a = _0x2dd93a + _0xacba59.charAt(_0x49f7f7);
    if (_0xacba59.charCodeAt(_0x49f7f7) > 128) {
      _0x1d2225 = _0x1d2225 + 2;
      if (_0x1d2225 >= _0x161011) {
        return _0x2dd93a.substring(0, _0x2dd93a.length - 1) + "...";
      }
    } else {
      _0x1d2225 = _0x1d2225 + 1;
      if (_0x1d2225 >= _0x161011) {
        return _0x2dd93a.substring(0, _0x2dd93a.length - 2) + "...";
      }
    }
  }
  return _0x2dd93a;
}
function D_j_0x8075e4() {
  var _0x45fee4 = new Date();
  var _0x2c1118 = _0x45fee4.getDate();
  var _0x4d11c9 = _0x45fee4.getMonth() + 1;
  var _0x285bfd = _0x45fee4.getFullYear();
  String(_0x4d11c9).length < 2 ? _0x4d11c9 = "0" + _0x4d11c9 : _0x4d11c9;
  String(_0x2c1118).length < 2 ? _0x2c1118 = "0" + _0x2c1118 : _0x2c1118;
  var _0x3f20fc = _0x285bfd + "" + _0x4d11c9 + "" + _0x2c1118;
  return _0x3f20fc;
}
function D_j_0x4e9af9(_0x3edb1b) {
  try {
    if (typeof JSON.parse(_0x3edb1b) == "object") {
      return true;
    }
  } catch (_0x3640b0) {
    console.log(_0x3640b0);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function D_j_0x4907df(_0x38edb7) {
  var _0x2593f2 = String.fromCharCode(_0x38edb7.charCodeAt(0) + _0x38edb7.length);
  for (var _0x38a5ab = 1; _0x38a5ab < _0x38edb7.length; _0x38a5ab++) {
    _0x2593f2 += String.fromCharCode(_0x38edb7.charCodeAt(_0x38a5ab) + _0x38edb7.charCodeAt(_0x38a5ab - 1));
  }
  return escape(_0x2593f2);
}
function D_j_0x3224a7(_0x1b4adc) {
  _0x1b4adc = unescape(_0x1b4adc);
  var _0x30409b = String.fromCharCode(_0x1b4adc.charCodeAt(0) - _0x1b4adc.length);
  for (var _0x2ced7e = 1; _0x2ced7e < _0x1b4adc.length; _0x2ced7e++) {
    _0x30409b += String.fromCharCode(_0x1b4adc.charCodeAt(_0x2ced7e) - _0x30409b.charCodeAt(_0x2ced7e - 1));
  }
  return _0x30409b;
}
function D_j_0x48d1de(_0x309c6a, _0x38408b) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x309c6a + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x38408b - _0x309c6a + 1) + _0x309c6a);
      break;
    default:
      return 0;
      break;
  }
}
function D_j_0x4604ce(_0x1dd8de, _0x36ff6e) {
  _0x36ff6e = _0x36ff6e || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  let _0x4ec069 = "";
  for (let _0x5e5573 = 0; _0x5e5573 < _0x1dd8de; _0x5e5573++) {
    let _0x232dda = Math.floor(Math.random() * _0x36ff6e.length);
    _0x4ec069 += _0x36ff6e.substring(_0x232dda, _0x232dda + 1);
  }
  return _0x4ec069;
}
function D_j_0x13d270() {
  if (D_j_0x15f383 == 1) {
    D_j_0x8a6e17.msg(D_j_0x8a6e17.name, "", D_j_0x8a6e17.message);
  }
}
function D_j_0x58b4e8(_0x2e783d) {
  if (D_j_0x15f383 == 1) {
    if (D_j_0x8a6e17.isNode()) {
      D_j_0x5b4c5b.sendNotify(D_j_0x8a6e17.name, _0x2e783d);
    } else {
      D_j_0x8a6e17.msg(D_j_0x8a6e17.name, "", _0x2e783d);
    }
  } else {
    D_j_0x8a6e17.log(_0x2e783d);
  }
}
function D_j_0x4f16fa(_0x3ae998) {
  function _0xf7b09a(_0x46b4b0, _0x1ceedf) {
    return _0x46b4b0 << _0x1ceedf | _0x46b4b0 >>> 32 - _0x1ceedf;
  }
  function _0x3c1599(_0x5e9600, _0x3f50f2) {
    var _0x17b49d, _0x377544, _0x13a309, _0x5d3d0e, _0x3c82be;
    _0x13a309 = 2147483648 & _0x5e9600;
    _0x5d3d0e = 2147483648 & _0x3f50f2;
    _0x17b49d = 1073741824 & _0x5e9600;
    _0x377544 = 1073741824 & _0x3f50f2;
    _0x3c82be = (1073741823 & _0x5e9600) + (1073741823 & _0x3f50f2);
    return _0x17b49d & _0x377544 ? 2147483648 ^ _0x3c82be ^ _0x13a309 ^ _0x5d3d0e : _0x17b49d | _0x377544 ? 1073741824 & _0x3c82be ? 3221225472 ^ _0x3c82be ^ _0x13a309 ^ _0x5d3d0e : 1073741824 ^ _0x3c82be ^ _0x13a309 ^ _0x5d3d0e : _0x3c82be ^ _0x13a309 ^ _0x5d3d0e;
  }
  function _0x479447(_0x3bc69d, _0x40ed26, _0x141a7d) {
    return _0x3bc69d & _0x40ed26 | ~_0x3bc69d & _0x141a7d;
  }
  function _0x1034e1(_0x25ee13, _0x8abbf2, _0x14376a) {
    return _0x25ee13 & _0x14376a | _0x8abbf2 & ~_0x14376a;
  }
  function _0x334e4e(_0x322825, _0x2e1fa3, _0x435e90) {
    return _0x322825 ^ _0x2e1fa3 ^ _0x435e90;
  }
  function _0x5aae0a(_0x20ab29, _0x1084e2, _0x38337e) {
    return _0x1084e2 ^ (_0x20ab29 | ~_0x38337e);
  }
  function _0x4eda98(_0x10954e, _0x102673, _0x4fdd74, _0x4c6ad6, _0x7ea78c, _0xe235d6, _0x254893) {
    _0x10954e = _0x3c1599(_0x10954e, _0x3c1599(_0x3c1599(_0x479447(_0x102673, _0x4fdd74, _0x4c6ad6), _0x7ea78c), _0x254893));
    return _0x3c1599(_0xf7b09a(_0x10954e, _0xe235d6), _0x102673);
  }
  function _0xe66cc3(_0xda5e17, _0x1aa34d, _0x466dc2, _0x3c8ca0, _0x25ed75, _0x135459, _0xccb9e5) {
    _0xda5e17 = _0x3c1599(_0xda5e17, _0x3c1599(_0x3c1599(_0x1034e1(_0x1aa34d, _0x466dc2, _0x3c8ca0), _0x25ed75), _0xccb9e5));
    return _0x3c1599(_0xf7b09a(_0xda5e17, _0x135459), _0x1aa34d);
  }
  function _0x7b1538(_0x453ca8, _0xf8c13a, _0x156366, _0x41615d, _0x29bcbd, _0x621963, _0x1d1030) {
    _0x453ca8 = _0x3c1599(_0x453ca8, _0x3c1599(_0x3c1599(_0x334e4e(_0xf8c13a, _0x156366, _0x41615d), _0x29bcbd), _0x1d1030));
    return _0x3c1599(_0xf7b09a(_0x453ca8, _0x621963), _0xf8c13a);
  }
  function _0xf48063(_0x58364a, _0x27058a, _0x120bfb, _0x2269e8, _0x8a15bb, _0x45536d, _0x439f3d) {
    _0x58364a = _0x3c1599(_0x58364a, _0x3c1599(_0x3c1599(_0x5aae0a(_0x27058a, _0x120bfb, _0x2269e8), _0x8a15bb), _0x439f3d));
    return _0x3c1599(_0xf7b09a(_0x58364a, _0x45536d), _0x27058a);
  }
  function _0x30566e(_0x5f48a9) {
    for (var _0x22f33a, _0x298a28 = _0x5f48a9.length, _0x2c154a = _0x298a28 + 8, _0x98b746 = (_0x2c154a - _0x2c154a % 64) / 64, _0x43de3b = 16 * (_0x98b746 + 1), _0x179cc6 = new Array(_0x43de3b - 1), _0x3243d6 = 0, _0x2a3300 = 0; _0x298a28 > _0x2a3300;) {
      _0x22f33a = (_0x2a3300 - _0x2a3300 % 4) / 4;
      _0x3243d6 = _0x2a3300 % 4 * 8;
      _0x179cc6[_0x22f33a] = _0x179cc6[_0x22f33a] | _0x5f48a9.charCodeAt(_0x2a3300) << _0x3243d6;
      _0x2a3300++;
    }
    _0x22f33a = (_0x2a3300 - _0x2a3300 % 4) / 4;
    _0x3243d6 = _0x2a3300 % 4 * 8;
    _0x179cc6[_0x22f33a] = _0x179cc6[_0x22f33a] | 128 << _0x3243d6;
    _0x179cc6[_0x43de3b - 2] = _0x298a28 << 3;
    _0x179cc6[_0x43de3b - 1] = _0x298a28 >>> 29;
    return _0x179cc6;
  }
  function _0x46cf04(_0x16c10b) {
    var _0x2342fd,
      _0x3910df,
      _0x2930e1 = "",
      _0x1b7dd9 = "";
    for (_0x3910df = 0; 3 >= _0x3910df; _0x3910df++) {
      _0x2342fd = _0x16c10b >>> 8 * _0x3910df & 255;
      _0x1b7dd9 = "0" + _0x2342fd.toString(16);
      _0x2930e1 += _0x1b7dd9.substr(_0x1b7dd9.length - 2, 2);
    }
    return _0x2930e1;
  }
  function _0x3fdab8(_0x334356) {
    _0x334356 = _0x334356.replace(/\r\n/g, "\n");
    for (var _0x4d9e84 = "", _0x1badc5 = 0; _0x1badc5 < _0x334356.length; _0x1badc5++) {
      var _0xf0d3c9 = _0x334356.charCodeAt(_0x1badc5);
      128 > _0xf0d3c9 ? _0x4d9e84 += String.fromCharCode(_0xf0d3c9) : _0xf0d3c9 > 127 && 2048 > _0xf0d3c9 ? (_0x4d9e84 += String.fromCharCode(_0xf0d3c9 >> 6 | 192), _0x4d9e84 += String.fromCharCode(63 & _0xf0d3c9 | 128)) : (_0x4d9e84 += String.fromCharCode(_0xf0d3c9 >> 12 | 224), _0x4d9e84 += String.fromCharCode(_0xf0d3c9 >> 6 & 63 | 128), _0x4d9e84 += String.fromCharCode(63 & _0xf0d3c9 | 128));
    }
    return _0x4d9e84;
  }
  var _0x2b7844,
    _0x1d87f8,
    _0x233da6,
    _0x2ef828,
    _0x382b96,
    _0x1f8796,
    _0x3cf830,
    _0x7906f,
    _0x209238,
    _0x27129b = [],
    _0x24e82e = 7,
    _0x37ce82 = 12,
    _0x942e9b = 17,
    _0x45b247 = 22,
    _0x4bd0cd = 5,
    _0x51f001 = 9,
    _0x3ce768 = 14,
    _0x3325b0 = 20,
    _0x3cb55f = 4,
    _0x4929be = 11,
    _0x3acfb1 = 16,
    _0x4dbf4d = 23,
    _0x42225b = 6,
    _0x187e03 = 10,
    _0x19d5fb = 15,
    _0x15f968 = 21;
  for (_0x3ae998 = _0x3fdab8(_0x3ae998), _0x27129b = _0x30566e(_0x3ae998), _0x1f8796 = 1732584193, _0x3cf830 = 4023233417, _0x7906f = 2562383102, _0x209238 = 271733878, _0x2b7844 = 0; _0x2b7844 < _0x27129b.length; _0x2b7844 += 16) {
    _0x1d87f8 = _0x1f8796;
    _0x233da6 = _0x3cf830;
    _0x2ef828 = _0x7906f;
    _0x382b96 = _0x209238;
    _0x1f8796 = _0x4eda98(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 0], _0x24e82e, 3614090360);
    _0x209238 = _0x4eda98(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 1], _0x37ce82, 3905402710);
    _0x7906f = _0x4eda98(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 2], _0x942e9b, 606105819);
    _0x3cf830 = _0x4eda98(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 3], _0x45b247, 3250441966);
    _0x1f8796 = _0x4eda98(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 4], _0x24e82e, 4118548399);
    _0x209238 = _0x4eda98(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 5], _0x37ce82, 1200080426);
    _0x7906f = _0x4eda98(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 6], _0x942e9b, 2821735955);
    _0x3cf830 = _0x4eda98(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 7], _0x45b247, 4249261313);
    _0x1f8796 = _0x4eda98(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 8], _0x24e82e, 1770035416);
    _0x209238 = _0x4eda98(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 9], _0x37ce82, 2336552879);
    _0x7906f = _0x4eda98(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 10], _0x942e9b, 4294925233);
    _0x3cf830 = _0x4eda98(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 11], _0x45b247, 2304563134);
    _0x1f8796 = _0x4eda98(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 12], _0x24e82e, 1804603682);
    _0x209238 = _0x4eda98(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 13], _0x37ce82, 4254626195);
    _0x7906f = _0x4eda98(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 14], _0x942e9b, 2792965006);
    _0x3cf830 = _0x4eda98(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 15], _0x45b247, 1236535329);
    _0x1f8796 = _0xe66cc3(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 1], _0x4bd0cd, 4129170786);
    _0x209238 = _0xe66cc3(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 6], _0x51f001, 3225465664);
    _0x7906f = _0xe66cc3(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 11], _0x3ce768, 643717713);
    _0x3cf830 = _0xe66cc3(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 0], _0x3325b0, 3921069994);
    _0x1f8796 = _0xe66cc3(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 5], _0x4bd0cd, 3593408605);
    _0x209238 = _0xe66cc3(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 10], _0x51f001, 38016083);
    _0x7906f = _0xe66cc3(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 15], _0x3ce768, 3634488961);
    _0x3cf830 = _0xe66cc3(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 4], _0x3325b0, 3889429448);
    _0x1f8796 = _0xe66cc3(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 9], _0x4bd0cd, 568446438);
    _0x209238 = _0xe66cc3(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 14], _0x51f001, 3275163606);
    _0x7906f = _0xe66cc3(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 3], _0x3ce768, 4107603335);
    _0x3cf830 = _0xe66cc3(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 8], _0x3325b0, 1163531501);
    _0x1f8796 = _0xe66cc3(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 13], _0x4bd0cd, 2850285829);
    _0x209238 = _0xe66cc3(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 2], _0x51f001, 4243563512);
    _0x7906f = _0xe66cc3(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 7], _0x3ce768, 1735328473);
    _0x3cf830 = _0xe66cc3(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 12], _0x3325b0, 2368359562);
    _0x1f8796 = _0x7b1538(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 5], _0x3cb55f, 4294588738);
    _0x209238 = _0x7b1538(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 8], _0x4929be, 2272392833);
    _0x7906f = _0x7b1538(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 11], _0x3acfb1, 1839030562);
    _0x3cf830 = _0x7b1538(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 14], _0x4dbf4d, 4259657740);
    _0x1f8796 = _0x7b1538(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 1], _0x3cb55f, 2763975236);
    _0x209238 = _0x7b1538(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 4], _0x4929be, 1272893353);
    _0x7906f = _0x7b1538(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 7], _0x3acfb1, 4139469664);
    _0x3cf830 = _0x7b1538(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 10], _0x4dbf4d, 3200236656);
    _0x1f8796 = _0x7b1538(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 13], _0x3cb55f, 681279174);
    _0x209238 = _0x7b1538(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 0], _0x4929be, 3936430074);
    _0x7906f = _0x7b1538(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 3], _0x3acfb1, 3572445317);
    _0x3cf830 = _0x7b1538(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 6], _0x4dbf4d, 76029189);
    _0x1f8796 = _0x7b1538(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 9], _0x3cb55f, 3654602809);
    _0x209238 = _0x7b1538(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 12], _0x4929be, 3873151461);
    _0x7906f = _0x7b1538(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 15], _0x3acfb1, 530742520);
    _0x3cf830 = _0x7b1538(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 2], _0x4dbf4d, 3299628645);
    _0x1f8796 = _0xf48063(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 0], _0x42225b, 4096336452);
    _0x209238 = _0xf48063(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 7], _0x187e03, 1126891415);
    _0x7906f = _0xf48063(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 14], _0x19d5fb, 2878612391);
    _0x3cf830 = _0xf48063(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 5], _0x15f968, 4237533241);
    _0x1f8796 = _0xf48063(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 12], _0x42225b, 1700485571);
    _0x209238 = _0xf48063(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 3], _0x187e03, 2399980690);
    _0x7906f = _0xf48063(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 10], _0x19d5fb, 4293915773);
    _0x3cf830 = _0xf48063(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 1], _0x15f968, 2240044497);
    _0x1f8796 = _0xf48063(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 8], _0x42225b, 1873313359);
    _0x209238 = _0xf48063(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 15], _0x187e03, 4264355552);
    _0x7906f = _0xf48063(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 6], _0x19d5fb, 2734768916);
    _0x3cf830 = _0xf48063(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 13], _0x15f968, 1309151649);
    _0x1f8796 = _0xf48063(_0x1f8796, _0x3cf830, _0x7906f, _0x209238, _0x27129b[_0x2b7844 + 4], _0x42225b, 4149444226);
    _0x209238 = _0xf48063(_0x209238, _0x1f8796, _0x3cf830, _0x7906f, _0x27129b[_0x2b7844 + 11], _0x187e03, 3174756917);
    _0x7906f = _0xf48063(_0x7906f, _0x209238, _0x1f8796, _0x3cf830, _0x27129b[_0x2b7844 + 2], _0x19d5fb, 718787259);
    _0x3cf830 = _0xf48063(_0x3cf830, _0x7906f, _0x209238, _0x1f8796, _0x27129b[_0x2b7844 + 9], _0x15f968, 3951481745);
    _0x1f8796 = _0x3c1599(_0x1f8796, _0x1d87f8);
    _0x3cf830 = _0x3c1599(_0x3cf830, _0x233da6);
    _0x7906f = _0x3c1599(_0x7906f, _0x2ef828);
    _0x209238 = _0x3c1599(_0x209238, _0x382b96);
  }
  var _0x15d10c = _0x46cf04(_0x1f8796) + _0x46cf04(_0x3cf830) + _0x46cf04(_0x7906f) + _0x46cf04(_0x209238);
  return _0x15d10c.toLowerCase();
}
function D_j_0x5d3954() {
  var _0x268eec = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x201e11) {
    var _0x18beb2 = "";
    var _0x2395f6, _0x1c7e12, _0x50e0fd, _0x343d01, _0x195aad, _0x3bdd4a, _0x401685;
    var _0x42a3bb = 0;
    _0x201e11 = utf8Encode(_0x201e11);
    while (_0x42a3bb < _0x201e11.length) {
      _0x2395f6 = _0x201e11.charCodeAt(_0x42a3bb++);
      _0x1c7e12 = _0x201e11.charCodeAt(_0x42a3bb++);
      _0x50e0fd = _0x201e11.charCodeAt(_0x42a3bb++);
      _0x343d01 = _0x2395f6 >> 2;
      _0x195aad = (_0x2395f6 & 3) << 4 | _0x1c7e12 >> 4;
      _0x3bdd4a = (_0x1c7e12 & 15) << 2 | _0x50e0fd >> 6;
      _0x401685 = _0x50e0fd & 63;
      if (isNaN(_0x1c7e12)) {
        _0x3bdd4a = _0x401685 = 64;
      } else {
        if (isNaN(_0x50e0fd)) {
          _0x401685 = 64;
        }
      }
      _0x18beb2 = _0x18beb2 + _0x268eec.charAt(_0x343d01) + _0x268eec.charAt(_0x195aad) + _0x268eec.charAt(_0x3bdd4a) + _0x268eec.charAt(_0x401685);
    }
    return _0x18beb2;
  };
  this.decode = function (_0x285ded) {
    var _0x352010 = "";
    var _0x38fdb2, _0x46eea5, _0x309024;
    var _0x1d6909, _0x12df99, _0x3512e6, _0x7907df;
    var _0x2d01a1 = 0;
    _0x285ded = _0x285ded.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x2d01a1 < _0x285ded.length) {
      _0x1d6909 = _0x268eec.indexOf(_0x285ded.charAt(_0x2d01a1++));
      _0x12df99 = _0x268eec.indexOf(_0x285ded.charAt(_0x2d01a1++));
      _0x3512e6 = _0x268eec.indexOf(_0x285ded.charAt(_0x2d01a1++));
      _0x7907df = _0x268eec.indexOf(_0x285ded.charAt(_0x2d01a1++));
      _0x38fdb2 = _0x1d6909 << 2 | _0x12df99 >> 4;
      _0x46eea5 = (_0x12df99 & 15) << 4 | _0x3512e6 >> 2;
      _0x309024 = (_0x3512e6 & 3) << 6 | _0x7907df;
      _0x352010 = _0x352010 + String.fromCharCode(_0x38fdb2);
      if (_0x3512e6 !== 64) {
        _0x352010 = _0x352010 + String.fromCharCode(_0x46eea5);
      }
      if (_0x7907df !== 64) {
        _0x352010 = _0x352010 + String.fromCharCode(_0x309024);
      }
    }
    _0x352010 = utf8Decode(_0x352010);
    return _0x352010;
  };
  utf8Encode = function (_0x52db8c) {
    _0x52db8c = _0x52db8c.replace(/\r\n/g, "\n");
    var _0x5d0bcd = "";
    for (var _0x235ab0 = 0; _0x235ab0 < _0x52db8c.length; _0x235ab0++) {
      var _0x48fad8 = _0x52db8c.charCodeAt(_0x235ab0);
      if (_0x48fad8 < 128) {
        _0x5d0bcd += String.fromCharCode(_0x48fad8);
      } else {
        if (_0x48fad8 > 127 && _0x48fad8 < 2048) {
          _0x5d0bcd += String.fromCharCode(_0x48fad8 >> 6 | 192);
          _0x5d0bcd += String.fromCharCode(_0x48fad8 & 63 | 128);
        } else {
          _0x5d0bcd += String.fromCharCode(_0x48fad8 >> 12 | 224);
          _0x5d0bcd += String.fromCharCode(_0x48fad8 >> 6 & 63 | 128);
          _0x5d0bcd += String.fromCharCode(_0x48fad8 & 63 | 128);
        }
      }
    }
    return _0x5d0bcd;
  };
  utf8Decode = function (_0x2c6688) {
    var _0x2ae074 = "";
    var _0x537892 = 0;
    var _0x4a87dc = 0;
    var _0x2f6278 = 0;
    var _0x5d7669 = 0;
    while (_0x537892 < _0x2c6688.length) {
      _0x4a87dc = _0x2c6688.charCodeAt(_0x537892);
      if (_0x4a87dc < 128) {
        _0x2ae074 += String.fromCharCode(_0x4a87dc);
        _0x537892++;
      } else {
        if (_0x4a87dc > 191 && _0x4a87dc < 224) {
          _0x2f6278 = _0x2c6688.charCodeAt(_0x537892 + 1);
          _0x2ae074 += String.fromCharCode((_0x4a87dc & 31) << 6 | _0x2f6278 & 63);
          _0x537892 += 2;
        } else {
          _0x2f6278 = _0x2c6688.charCodeAt(_0x537892 + 1);
          _0x5d7669 = _0x2c6688.charCodeAt(_0x537892 + 2);
          _0x2ae074 += String.fromCharCode((_0x4a87dc & 15) << 12 | (_0x2f6278 & 63) << 6 | _0x5d7669 & 63);
          _0x537892 += 3;
        }
      }
    }
    return _0x2ae074;
  };
}
function D_j_0x20242a(_0x30e25e, _0x3d8c52) {
  class _0x46ce59 {
    constructor(_0x40b978) {
      this.env = _0x40b978;
    }
    send(_0x2997ca, _0x508c45 = "GET") {
      _0x2997ca = typeof _0x2997ca === "string" ? {
        url: _0x2997ca
      } : _0x2997ca;
      let _0x2a4866 = this.get;
      if (_0x508c45 === "POST") {
        _0x2a4866 = this.post;
      }
      return new Promise((_0x385b82, _0x1e7a80) => {
        _0x2a4866.call(this, _0x2997ca, (_0x38c59c, _0xb69a2d, _0x1b73f7) => {
          if (_0x38c59c) {
            _0x1e7a80(_0x38c59c);
          } else {
            _0x385b82(_0xb69a2d);
          }
        });
      });
    }
    get(_0xa0e131) {
      return this.send.call(this.env, _0xa0e131);
    }
    post(_0x1b392e) {
      return this.send.call(this.env, _0x1b392e, "POST");
    }
  }
  return new class {
    constructor(_0x953ea9, _0x2f5e03) {
      this.name = _0x953ea9;
      this.http = new _0x46ce59(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2f5e03);
      const _0x39349b = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x39349b);
      }
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x2657e1, _0x2d19cf = null) {
      try {
        return JSON.parse(_0x2657e1);
      } catch {
        return _0x2d19cf;
      }
    }
    toStr(_0x17acc1, _0x53088f = null) {
      try {
        return JSON.stringify(_0x17acc1);
      } catch {
        return _0x53088f;
      }
    }
    getjson(_0xfb3655, _0x28b6c8) {
      let _0x46aa03 = _0x28b6c8;
      const _0x48fd50 = this.getdata(_0xfb3655);
      if (_0x48fd50) {
        try {
          _0x46aa03 = JSON.parse(this.getdata(_0xfb3655));
        } catch {}
      }
      return _0x46aa03;
    }
    setjson(_0x3b01ff, _0x557134) {
      try {
        return this.setdata(JSON.stringify(_0x3b01ff), _0x557134);
      } catch {
        return false;
      }
    }
    getScript(_0x47b780) {
      return new Promise(_0x3919cb => {
        const _0x535e16 = {
          url: _0x47b780
        };
        this.get(_0x535e16, (_0xe6721b, _0x5f8c8f, _0x3d49a9) => _0x3919cb(_0x3d49a9));
      });
    }
    runScript(_0x6693d6, _0x4bbf59) {
      return new Promise(_0xcdfede => {
        let _0x12713d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x12713d = _0x12713d ? _0x12713d.replace(/\n/g, "").trim() : _0x12713d;
        let _0x2680a9 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2680a9 = _0x2680a9 ? _0x2680a9 * 1 : 20;
        _0x2680a9 = _0x4bbf59 && _0x4bbf59.timeout ? _0x4bbf59.timeout : _0x2680a9;
        const [_0x5e67c7, _0xf1fad3] = _0x12713d.split("@");
        const _0x44d22a = {
          script_text: _0x6693d6,
          mock_type: "cron",
          timeout: _0x2680a9
        };
        const _0x508e3c = {
          "X-Key": _0x5e67c7,
          Accept: "*/*"
        };
        const _0x1aec09 = {
          url: "http: //" + _0xf1fad3 + "/v1/scripting/evaluate",
          body: _0x44d22a,
          headers: _0x508e3c
        };
        this.post(_0x1aec09, (_0x5ee4b1, _0x27c27e, _0x2188d4) => _0xcdfede(_0x2188d4));
      }).catch(_0x5cf410 => this.logErr(_0x5cf410));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xbffddd = this.path.resolve(this.dataFile);
        const _0x5cf8a3 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x3e63f9 = this.fs.existsSync(_0xbffddd);
        const _0x1aaab7 = !_0x3e63f9 && this.fs.existsSync(_0x5cf8a3);
        if (_0x3e63f9 || _0x1aaab7) {
          const _0x2010ac = _0x3e63f9 ? _0xbffddd : _0x5cf8a3;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2010ac));
          } catch (_0xb71644) {
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
        const _0x41ad77 = this.path.resolve(this.dataFile);
        const _0x2c196f = this.path.resolve(process.cwd(), this.dataFile);
        const _0x4537ca = this.fs.existsSync(_0x41ad77);
        const _0x168c55 = !_0x4537ca && this.fs.existsSync(_0x2c196f);
        const _0x6ef593 = JSON.stringify(this.data);
        if (_0x4537ca) {
          this.fs.writeFileSync(_0x41ad77, _0x6ef593);
        } else {
          if (_0x168c55) {
            this.fs.writeFileSync(_0x2c196f, _0x6ef593);
          } else {
            this.fs.writeFileSync(_0x41ad77, _0x6ef593);
          }
        }
      }
    }
    lodash_get(_0xa030da, _0x2e6dd7, _0x820356 = undefined) {
      const _0x2489b7 = _0x2e6dd7.replace(/[(d+)]/g, ".$1").split(".");
      let _0x3483d9 = _0xa030da;
      for (const _0x23c1a5 of _0x2489b7) {
        _0x3483d9 = Object(_0x3483d9)[_0x23c1a5];
        if (_0x3483d9 === undefined) {
          return _0x820356;
        }
      }
      return _0x3483d9;
    }
    lodash_set(_0x520bfb, _0x57d465, _0x54bb6f) {
      if (Object(_0x520bfb) !== _0x520bfb) {
        return _0x520bfb;
      }
      if (!Array.isArray(_0x57d465)) {
        _0x57d465 = _0x57d465.toString().match(/[^.[]]+/g) || [];
      }
      _0x57d465.slice(0, -1).reduce((_0x2b4c84, _0x3ee80d, _0x143271) => Object(_0x2b4c84[_0x3ee80d]) === _0x2b4c84[_0x3ee80d] ? _0x2b4c84[_0x3ee80d] : _0x2b4c84[_0x3ee80d] = Math.abs(_0x57d465[_0x143271 + 1]) >> 0 === +_0x57d465[_0x143271 + 1] ? [] : {}, _0x520bfb)[_0x57d465[_0x57d465.length - 1]] = _0x54bb6f;
      return _0x520bfb;
    }
    getdata(_0x6651f6) {
      let _0x343171 = this.getval(_0x6651f6);
      if (/^@/.test(_0x6651f6)) {
        const [, _0x33f583, _0x2afda5] = /^@(.*?).(.*?)$/.exec(_0x6651f6);
        const _0x19ba12 = _0x33f583 ? this.getval(_0x33f583) : "";
        if (_0x19ba12) {
          try {
            const _0x37cdb8 = JSON.parse(_0x19ba12);
            _0x343171 = _0x37cdb8 ? this.lodash_get(_0x37cdb8, _0x2afda5, "") : _0x343171;
          } catch (_0x3251c7) {
            _0x343171 = "";
          }
        }
      }
      return _0x343171;
    }
    setdata(_0x577f01, _0x20dfba) {
      let _0x1423e9 = false;
      if (/^@/.test(_0x20dfba)) {
        const [, _0x3a2c35, _0x27f1cb] = /^@(.*?).(.*?)$/.exec(_0x20dfba);
        const _0x15b43b = this.getval(_0x3a2c35);
        const _0x368aa2 = _0x3a2c35 ? _0x15b43b === "null" ? null : _0x15b43b || "{}" : "{}";
        try {
          const _0x4de4c0 = JSON.parse(_0x368aa2);
          this.lodash_set(_0x4de4c0, _0x27f1cb, _0x577f01);
          _0x1423e9 = this.setval(JSON.stringify(_0x4de4c0), _0x3a2c35);
        } catch (_0x2f9544) {
          const _0x2b582b = {};
          this.lodash_set(_0x2b582b, _0x27f1cb, _0x577f01);
          _0x1423e9 = this.setval(JSON.stringify(_0x2b582b), _0x3a2c35);
        }
      } else {
        _0x1423e9 = this.setval(_0x577f01, _0x20dfba);
      }
      return _0x1423e9;
    }
    getval(_0x4fbf34) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x4fbf34);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x4fbf34);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x4fbf34];
          } else {
            return this.data && this.data[_0x4fbf34] || null;
          }
        }
      }
    }
    setval(_0x1d2507, _0x1a93cc) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x1d2507, _0x1a93cc);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x1d2507, _0x1a93cc);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x1a93cc] = _0x1d2507;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x1a93cc] || null;
          }
        }
      }
    }
    initGotEnv(_0x1f5cae) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x1f5cae) {
        _0x1f5cae.headers = _0x1f5cae.headers ? _0x1f5cae.headers : {};
        if (undefined === _0x1f5cae.headers.Cookie && undefined === _0x1f5cae.cookieJar) {
          _0x1f5cae.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x86c82f, _0x1328ba = () => {}) {
      if (_0x86c82f.headers) {
        delete _0x86c82f.headers["Content-Type"];
        delete _0x86c82f.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x86c82f.headers = _0x86c82f.headers || {};
          const _0x1c1a2c = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x86c82f.headers, _0x1c1a2c);
        }
        $httpClient.get(_0x86c82f, (_0x264188, _0x2cdd2b, _0x22c238) => {
          if (!_0x264188 && _0x2cdd2b) {
            _0x2cdd2b.body = _0x22c238;
            _0x2cdd2b.statusCode = _0x2cdd2b.status;
          }
          _0x1328ba(_0x264188, _0x2cdd2b, _0x22c238);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x86c82f.opts = _0x86c82f.opts || {};
            const _0x3c9eae = {
              hints: false
            };
            Object.assign(_0x86c82f.opts, _0x3c9eae);
          }
          $task.fetch(_0x86c82f).then(_0x424a5a => {
            const {
              statusCode: _0x53e306,
              statusCode,
              headers,
              body
            } = _0x424a5a;
            const _0x12c8b2 = {
              status: _0x53e306,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x1328ba(null, _0x12c8b2, body);
          }, _0x296b21 => _0x1328ba(_0x296b21));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x86c82f);
            this.got(_0x86c82f).on("redirect", (_0x1e4b33, _0x98a9be) => {
              try {
                if (_0x1e4b33.headers["set-cookie"]) {
                  const _0x6cd279 = _0x1e4b33.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x6cd279) {
                    this.ckjar.setCookieSync(_0x6cd279, null);
                  }
                  _0x98a9be.cookieJar = this.ckjar;
                }
              } catch (_0x4059ec) {
                this.logErr(_0x4059ec);
              }
            }).then(_0x50123d => {
              const {
                statusCode: _0x2b5bac,
                statusCode,
                headers,
                body
              } = _0x50123d;
              const _0x1e70d8 = {
                status: _0x2b5bac,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x1328ba(null, _0x1e70d8, body);
            }, _0x320782 => {
              const {
                message: _0xd9346b,
                response: _0x271a24
              } = _0x320782;
              _0x1328ba(_0xd9346b, _0x271a24, _0x271a24 && _0x271a24.body);
            });
          }
        }
      }
    }
    post(_0x278454, _0x52d97b = () => {}) {
      const _0x4f85f6 = _0x278454.method ? _0x278454.method.toLocaleLowerCase() : "post";
      if (_0x278454.body && _0x278454.headers && !_0x278454.headers["Content-Type"]) {
        _0x278454.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x278454.headers) {
        delete _0x278454.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x278454.headers = _0x278454.headers || {};
          const _0x48ec0d = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x278454.headers, _0x48ec0d);
        }
        $httpClient[_0x4f85f6](_0x278454, (_0x11b654, _0x109428, _0x1c4e30) => {
          if (!_0x11b654 && _0x109428) {
            _0x109428.body = _0x1c4e30;
            _0x109428.statusCode = _0x109428.status;
          }
          _0x52d97b(_0x11b654, _0x109428, _0x1c4e30);
        });
      } else {
        if (this.isQuanX()) {
          _0x278454.method = _0x4f85f6;
          if (this.isNeedRewrite) {
            _0x278454.opts = _0x278454.opts || {};
            const _0xf27c9c = {
              hints: false
            };
            Object.assign(_0x278454.opts, _0xf27c9c);
          }
          $task.fetch(_0x278454).then(_0x20d192 => {
            const {
              statusCode: _0x28ea32,
              statusCode,
              headers,
              body
            } = _0x20d192;
            const _0x3fe306 = {
              status: _0x28ea32,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x52d97b(null, _0x3fe306, body);
          }, _0x2bd685 => _0x52d97b(_0x2bd685));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x278454);
            const {
              url,
              ..._0x191998
            } = _0x278454;
            this.got[_0x4f85f6](url, _0x191998).then(_0x5428ce => {
              const {
                statusCode: _0x13a934,
                statusCode,
                headers,
                body
              } = _0x5428ce;
              const _0x45dd14 = {
                status: _0x13a934,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x52d97b(null, _0x45dd14, body);
            }, _0x5be709 => {
              const {
                message: _0x3c32c3,
                response: _0x472db0
              } = _0x5be709;
              _0x52d97b(_0x3c32c3, _0x472db0, _0x472db0 && _0x472db0.body);
            });
          }
        }
      }
    }
    put(_0xd612ab, _0x2f2c91 = () => {}) {
      const _0x2ad2bb = _0xd612ab.method ? _0xd612ab.method.toLocaleLowerCase() : "put";
      if (_0xd612ab.body && _0xd612ab.headers && !_0xd612ab.headers["Content-Type"]) {
        _0xd612ab.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0xd612ab.headers) {
        delete _0xd612ab.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xd612ab.headers = _0xd612ab.headers || {};
          const _0x2545db = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0xd612ab.headers, _0x2545db);
        }
        $httpClient[_0x2ad2bb](_0xd612ab, (_0x2aa74e, _0x55bce9, _0x214172) => {
          if (!_0x2aa74e && _0x55bce9) {
            _0x55bce9.body = _0x214172;
            _0x55bce9.statusCode = _0x55bce9.status;
          }
          _0x2f2c91(_0x2aa74e, _0x55bce9, _0x214172);
        });
      } else {
        if (this.isQuanX()) {
          _0xd612ab.method = _0x2ad2bb;
          if (this.isNeedRewrite) {
            _0xd612ab.opts = _0xd612ab.opts || {};
            const _0x10a9a4 = {
              hints: false
            };
            Object.assign(_0xd612ab.opts, _0x10a9a4);
          }
          $task.fetch(_0xd612ab).then(_0x3fccb4 => {
            const {
              statusCode: _0x30031f,
              statusCode,
              headers,
              body
            } = _0x3fccb4;
            const _0xd3b94e = {
              status: _0x30031f,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2f2c91(null, _0xd3b94e, body);
          }, _0xa40bdd => _0x2f2c91(_0xa40bdd));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xd612ab);
            const {
              url,
              ..._0x201c48
            } = _0xd612ab;
            this.got[_0x2ad2bb](url, _0x201c48).then(_0x5e7b80 => {
              const {
                statusCode: _0x17ce03,
                statusCode,
                headers,
                body
              } = _0x5e7b80;
              const _0x61728c = {
                status: _0x17ce03,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2f2c91(null, _0x61728c, body);
            }, _0x16b2e9 => {
              const {
                message: _0x5962f2,
                response: _0x19ce41
              } = _0x16b2e9;
              _0x2f2c91(_0x5962f2, _0x19ce41, _0x19ce41 && _0x19ce41.body);
            });
          }
        }
      }
    }
    time(_0x4000e6, _0x513414 = null) {
      const _0x22dcb8 = _0x513414 ? new Date(_0x513414) : new Date();
      const _0x4996b1 = {
        "M+": _0x22dcb8.getMonth() + 1,
        "d+": _0x22dcb8.getDate(),
        "H+": _0x22dcb8.getHours(),
        "m+": _0x22dcb8.getMinutes(),
        "s+": _0x22dcb8.getSeconds(),
        "q+": Math.floor((_0x22dcb8.getMonth() + 3) / 3),
        S: _0x22dcb8.getMilliseconds()
      };
      if (/(y+)/.test(_0x4000e6)) {
        _0x4000e6 = _0x4000e6.replace(RegExp.$1, (_0x22dcb8.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x39f263 in _0x4996b1) if (new RegExp("(" + _0x39f263 + ")").test(_0x4000e6)) {
        _0x4000e6 = _0x4000e6.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x4996b1[_0x39f263] : ("00" + _0x4996b1[_0x39f263]).substr(("" + _0x4996b1[_0x39f263]).length));
      }
      return _0x4000e6;
    }
    msg(_0x5014fd = _0x30e25e, _0x321570 = "", _0x54d2e0 = "", _0x3da3fb) {
      const _0x1b2c70 = _0x2c7169 => {
        if (!_0x2c7169) {
          return _0x2c7169;
        }
        if (typeof _0x2c7169 === "string") {
          if (this.isLoon()) {
            return _0x2c7169;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x2c7169
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x2c7169
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x2c7169 === "object") {
            if (this.isLoon()) {
              let _0x5b68cb = _0x2c7169.openUrl || _0x2c7169.url || _0x2c7169["open-url"];
              let _0x40d304 = _0x2c7169.mediaUrl || _0x2c7169["media-url"];
              const _0x12388e = {
                openUrl: _0x5b68cb,
                mediaUrl: _0x40d304
              };
              return _0x12388e;
            } else {
              if (this.isQuanX()) {
                let _0x12cf2d = _0x2c7169["open-url"] || _0x2c7169.url || _0x2c7169.openUrl;
                let _0x259e09 = _0x2c7169["media-url"] || _0x2c7169.mediaUrl;
                const _0x457a34 = {
                  "open-url": _0x12cf2d,
                  "media-url": _0x259e09
                };
                return _0x457a34;
              } else {
                if (this.isSurge()) {
                  let _0x173f2a = _0x2c7169.url || _0x2c7169.openUrl || _0x2c7169["open-url"];
                  const _0x240b5a = {
                    url: _0x173f2a
                  };
                  return _0x240b5a;
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
          $notification.post(_0x5014fd, _0x321570, _0x54d2e0, _0x1b2c70(_0x3da3fb));
        } else {
          if (this.isQuanX()) {
            $notify(_0x5014fd, _0x321570, _0x54d2e0, _0x1b2c70(_0x3da3fb));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0xf73d0b = ["", "==============📣系统通知📣=============="];
        _0xf73d0b.push(_0x5014fd);
        _0x321570 ? _0xf73d0b.push(_0x321570) : "";
        _0x54d2e0 ? _0xf73d0b.push(_0x54d2e0) : "";
        console.log(_0xf73d0b.join("\n"));
        this.logs = this.logs.concat(_0xf73d0b);
      }
    }
    log(..._0x4416e6) {
      if (_0x4416e6.length > 0) {
        this.logs = [...this.logs, ..._0x4416e6];
      }
      console.log(_0x4416e6.join(this.logSeparator));
    }
    logErr(_0x18c6c9, _0x54a0e9) {
      const _0x144a38 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x144a38) {
        this.log("", "❗️" + this.name + ", 错误!", _0x18c6c9);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x18c6c9.stack);
      }
    }
    wait(_0x281467) {
      return new Promise(_0x4893db => setTimeout(_0x4893db, _0x281467));
    }
    done(_0x427d72 = {}) {
      const _0x2bcd9c = new Date().getTime();
      const _0x5b9f09 = (_0x2bcd9c - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x5b9f09 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x427d72);
      }
    }
  }(_0x30e25e, _0x3d8c52);
}