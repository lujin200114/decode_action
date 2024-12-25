//Wed Dec 25 2024 02:33:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x23fcd8 = new David_0x368ba8("睡觉宝");
const David_0xb9998e = "V1.0.8";
const David_0x4b2cd8 = "sjbapp";
let David_0x5230be = David_0x23fcd8.getjson("sjbapp", []);
const David_0x34e568 = David_0x23fcd8.isNode() ? require("fs") : "";
const David_0x12aa58 = "david_cookies.js";
if (David_0x23fcd8.isNode() && !David_0x34e568.existsSync(David_0x12aa58)) {
  David_0x23fcd8.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x34e568.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x2e8a7a => {});
}
const David_0x3547b3 = David_0x23fcd8.isNode() ? require("http") : "";
const David_0x469ba4 = David_0x23fcd8.isNode() ? require("./sendNotify") : "";
const David_0x5a1b8c = David_0x23fcd8.isNode() ? require("./david_cookies") : "";
let David_0x154e4e = David_0x23fcd8.getdata("tguserid") || 1;
let David_0xcb6f = David_0x23fcd8.getdata("sjbactivecode") || 0;
let David_0x3f09f1 = David_0x23fcd8.getval("sjbuserck") || 1;
let David_0x34bb59 = David_0x23fcd8.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x23fcd8.getval("apiHosts")) {
  David_0x34bb59 = David_0x23fcd8.getval("apiHosts");
}
let David_0x3f6dc6 = David_0x23fcd8.getval("tz") || "1";
var David_0x437802 = "";
var David_0x319194 = "";
let David_0x30dcf5 = "";
let David_0x1c2565 = "";
let David_0x1a762d = "";
let David_0x42dbfc = "";
let David_0x4c8292 = "";
let David_0x2b3e75 = "";
let David_0x5db0ab = "";
let David_0x4a3412 = "";
let David_0x27a566 = "";
let David_0x279472 = "";
let David_0x5c61a2 = "";
let David_0x389b3c = "";
let David_0x498e3d = "";
let David_0x4606be = 1;
let David_0x424322 = 1;
let David_0x593125 = 1;
let David_0x2529e7 = 1;
let David_0x8cbf58 = "";
let David_0x33b0ec = "";
let David_0x5cea6d = "";
let David_0xd5f97c = 3;
let David_0x2ad102 = "";
if (David_0x23fcd8.isNode()) {
  if (process.env.SJBAPP) {
    David_0x5230be = JSON.parse(process.env.SJBAPP);
  } else {
    David_0x5230be = David_0x5a1b8c.SJB;
  }
  David_0x154e4e = process.env.TGUSERID;
  David_0xcb6f = process.env.SJBACTIVECODE;
  if (process.env.APIHOST) {
    David_0x34bb59 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x34bb59 = process.env.APIHOSTS;
  }
  David_0x437802 = new Date(new Date().getTime()).getHours();
  David_0x319194 = new Date(new Date().getTime()).getMinutes();
  David_0x23fcd8.log("当前环境: Node, 当前时间：" + David_0x437802 + "点");
} else {
  David_0x437802 = new Date().getHours();
  David_0x319194 = new Date().getMinutes();
  David_0x23fcd8.log("当前环境: 手机代理, 当前时间：" + David_0x437802 + "点");
}
!(async () => {
  David_0x23fcd8.log("📢 开始检测服务器接口状态>>>");
  let _0x1c08c4 = false;
  const _0x367707 = David_0x34bb59.split("&");
  const _0x2b987c = _0x367707.length;
  for (let _0x28b74f = 0; _0x28b74f < _0x2b987c; _0x28b74f++) {
    if (David_0x23fcd8.isNode()) {
      _0x1c08c4 = await David_0x564ba0("" + _0x367707[_0x28b74f], 2500);
    } else {
      if (David_0x23fcd8.isSurge() || David_0x23fcd8.isLoon()) {
        _0x1c08c4 = await David_0x2d5543("" + _0x367707[_0x28b74f], 2500);
      } else {
        _0x1c08c4 = await David_0x44ed54("" + _0x367707[_0x28b74f], 2500);
      }
    }
    if (_0x1c08c4 == true) {
      David_0x34bb59 = _0x367707[_0x28b74f];
      David_0x23fcd8.log("📢 接口" + (_0x28b74f + 1) + "[" + _0x367707[_0x28b74f] + "]服务器接口正常! 🎉");
      break;
    }
    if (_0x28b74f == _0x2b987c - 1 && _0x1c08c4 == false) {
      David_0x23fcd8.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
      David_0x23fcd8.msg(David_0x23fcd8.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
      return;
    }
  }
  if (typeof $request !== "undefined") {
    await David_0x2bfaae();
  } else {
    if (!David_0xcb6f || !David_0x154e4e || David_0x154e4e == 1 || David_0xcb6f == 0 || David_0xcb6f.length != 32) {
      David_0x23fcd8.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x521609(David_0x4b2cd8, David_0x154e4e, David_0xcb6f);
    David_0x23fcd8.log("📢 " + David_0x5c61a2);
    David_0x23fcd8.log("🔔 当前脚本版本号: " + David_0xb9998e + "，最新版本号: " + David_0x27a566);
    if (David_0x2ad102 != "") {
      let _0x553aa4 = new Date(David_0x2ad102).getTime();
      let _0x177c0f = new Date().getTime();
      if (_0x177c0f > _0x553aa4) {
        David_0x23fcd8.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0xb9998e < David_0x27a566) {
      David_0x23fcd8.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x50955a("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x4a3412 != true) {
      David_0x23fcd8.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x33b0ec != true) {
      David_0x23fcd8.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x5db0ab != true) {
      David_0x23fcd8.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x498e3d == true) {
      David_0x23fcd8.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x23fcd8.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x2ad102 != "") {
      if (David_0x498e3d == true) {
        David_0x23fcd8.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x3c7204 = new Date(David_0x2ad102).getTime();
        let _0x226f94 = new Date().getTime();
        if (_0x226f94 > _0x3c7204) {
          David_0x23fcd8.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x389b3c != true) {
        David_0x23fcd8.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (David_0x4606be > 1) {
      David_0x23fcd8.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0xd5f97c * David_0x4606be + "个账号。");
    }
    if (David_0x424322 > 1) {
      David_0x23fcd8.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x593125 + "次, 已经运行了" + David_0x2529e7 + "次。");
    }
    if (David_0x279472 != true) {
      David_0x23fcd8.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x5230be.length > David_0xd5f97c * David_0x4606be) {
      David_0x23fcd8.log("⚠️ 当前用户一次最多运行" + David_0xd5f97c * David_0x4606be + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x5230be.length == 0) {
      David_0x23fcd8.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x2529e7 + David_0x5230be.length > David_0x593125) {
      David_0x23fcd8.log("📢 一共发现了" + David_0x5230be.length + "个账号");
      David_0x23fcd8.log("⚠️ 当前用户运行次数剩余" + (David_0x593125 - David_0x2529e7) + "次，还可以运行" + (David_0x593125 - David_0x2529e7) + "个账号，还需要" + (David_0x5230be.length - (David_0x593125 - David_0x2529e7)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x2ad102 != "") {
      David_0x23fcd8.log("📢 你的会员有效期到： " + David_0x2ad102);
    }
    David_0x23fcd8.log("一共有" + David_0x5230be.length + "个账号");
    for (let _0x2b3115 = 0; _0x2b3115 < David_0x5230be.length; _0x2b3115++) {
      David_0x23fcd8.log("开始执行第" + (_0x2b3115 + 1) + "个账号");
      David_0x30dcf5 = David_0x5230be[_0x2b3115];
      let _0x12dd42 = David_0x30dcf5.ua.split("|")[0];
      if (_0x12dd42 == "a") {
        let _0x423c30 = David_0x30dcf5.ua.split("|")[4];
        await David_0x4b255c(_0x423c30);
      }
      await David_0x16bc51();
      await David_0x3f72eb();
      await David_0x437078();
      await David_0x20dd07();
      if (!David_0x5230be[_0x2b3115].notify) {
        David_0x5230be[_0x2b3115].notify = 1;
        David_0x23fcd8.setdata(JSON.stringify(David_0x5230be, null, 2), "sjbapp");
      }
      if (David_0x5230be.length > 1 && _0x2b3115 < David_0x5230be.length) {
        David_0x2b3e75 += "\n===========分割线============\n";
      }
      if (_0x2b3115 == David_0x5230be.length - 1 && David_0x5230be[_0x2b3115].notify == 1) {
        David_0x50955a(David_0x2b3e75);
      }
      await David_0x3a471a(David_0x4b2cd8, David_0x154e4e);
    }
  }
})().catch(_0x13b244 => David_0x23fcd8.logErr(_0x13b244)).finally(() => David_0x23fcd8.done());
async function David_0x2bfaae() {
  if ($request.url.match(/\/home\/user/)) {
    let _0x553115 = $request.headers.ua;
    let _0x356e93 = David_0x3f09f1 - 1;
    if (David_0x5230be[_0x356e93]) {
      if (David_0x5230be[_0x356e93].ua.replace(/\|\d{10}\|.{32}/g, "") == _0x553115.replace(/\|\d{10}\|.{32}/g, "")) {
        David_0x23fcd8.log("以获取到CK，跳过。");
        return;
      }
      David_0x5230be[_0x356e93].ua = _0x553115;
    } else {
      const _0x245109 = {
        ua: _0x553115
      };
      David_0x5230be[_0x356e93] = _0x245109;
    }
    David_0x23fcd8.setdata(JSON.stringify(David_0x5230be, null, 2), "sjbapp");
    David_0x23fcd8.msg(David_0x23fcd8.name, "睡觉宝账号" + (_0x356e93 + 1) + "请求数据获取成功！🎉");
  }
}
function David_0x55ecd5() {
  David_0x1c2565 = David_0x30dcf5.ua.split("|")[11];
  David_0x4c8292 = David_0x30dcf5.ua.split("|")[8];
  let _0x38d978 = David_0x30dcf5.ua.split("|")[0];
  let _0x5c740e = Math.round(new Date().getTime() / 1000).toString();
  let _0x4e17a5 = "";
  let _0x1f4724 = "";
  let _0x64456f = "";
  if (_0x38d978 == "a") {
    David_0x1c2565 = David_0x1a762d;
    _0x5c740e = _0x5c740e + "000";
    _0x1f4724 = David_0x4c8292 + "4BmeNjXs6vLWpT8A" + _0x5c740e;
    _0x64456f = David_0x68eb13(_0x1f4724);
    _0x4e17a5 = David_0x30dcf5.ua.replace(/\|\d{13}\|.{32}\|.{32}/, "|" + _0x5c740e + "|" + _0x64456f + "|" + David_0x1a762d);
  } else {
    _0x1f4724 = David_0x4c8292 + "4BmeNjXs6vLWpT8A" + _0x5c740e;
    _0x64456f = David_0x68eb13(_0x1f4724);
    _0x4e17a5 = David_0x30dcf5.ua.replace(/\|\d{10}\|.{32}/, "|" + _0x5c740e + "|" + _0x64456f);
  }
  if (David_0x5c61a2.length < 1) {
    return;
  }
  const _0x4c05fc = {
    Accept: "*/*",
    "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
    Connection: "keep-alive",
    ua: _0x4e17a5,
    "Content-Type": "application/x-www-form-urlencoded",
    Host: "mapi.shuijiaobao.cn",
    "User-Agent": "",
    "Accept-Language": "zh-Hans-CN;q=1.0, en-CN;q=0.9"
  };
  David_0x42dbfc = _0x4c05fc;
}
function David_0x20dd07() {
  return new Promise((_0x72ee13, _0x49168c) => {
    David_0x55ecd5();
    const _0x2fafef = "https://mapi.shuijiaobao.cn/task/newList";
    const _0x507f16 = {
      url: _0x2fafef,
      headers: David_0x42dbfc,
      body: ""
    };
    David_0x23fcd8.post(_0x507f16, async (_0x36100c, _0x3cb947, _0x5abcf5) => {
      try {
        if (David_0x1a2a20(_0x5abcf5)) {
          const _0x14f2c0 = JSON.parse(_0x5abcf5);
          if (_0x14f2c0.ok == 1) {
            const _0x154b8c = _0x14f2c0.data.new_list;
            for (let _0x4554ea = 0; _0x4554ea < _0x154b8c.length; _0x4554ea++) {
              const _0x5cd1b1 = _0x154b8c[_0x4554ea];
              if (_0x5cd1b1.type == 103 && _0x5cd1b1.is_get == false) {
                await David_0x3f72eb();
              }
              if (_0x5cd1b1.type == 104 && _0x5cd1b1.is_get == false) {
                David_0x23fcd8.log("请绑定手机，获取奖励吧");
              }
              if (_0x5cd1b1.type == 105 && _0x5cd1b1.is_get == false) {
                David_0x23fcd8.log("请用微信登录，然后领取奖励");
              }
            }
            const _0x5069b0 = _0x14f2c0.data.day_list;
            for (let _0x127b48 = 0; _0x127b48 < _0x5069b0.length; _0x127b48++) {
              const _0x129251 = _0x5069b0[_0x127b48];
              if (_0x129251.type == 152 && _0x129251.is_get == false) {
                if (David_0x437802 >= 12 && David_0x437802 <= 13) {
                  await David_0x3b20c4();
                }
                if (David_0x437802 >= 20 && David_0x437802 <= 23) {
                  await David_0x3b20c4();
                }
                if (David_0x437802 >= 7 && David_0x437802 <= 9) {
                  await David_0x1e283b();
                }
                if (David_0x27a566 == "") {
                  return;
                }
              }
              if (_0x129251.type == 153 && _0x129251.is_get == false) {
                if (David_0x27a566 == "") {
                  return;
                }
                if (David_0x437802 >= 5 && David_0x437802 <= 8) {
                  await David_0x3b33e0();
                }
                if (David_0x437802 >= 11 && David_0x437802 <= 13) {
                  await David_0x3b33e0();
                }
                if (David_0x437802 >= 17 && David_0x437802 <= 19) {
                  await David_0x3b33e0();
                }
                if (David_0x437802 >= 21 && David_0x437802 <= 23) {
                  await David_0x3b33e0();
                }
              }
              if (_0x129251.type == 155 && _0x129251.is_get == false && _0x129251.curNum < 8) {
                David_0x23fcd8.log("开始获取看广告奖励");
                await David_0x5f303b();
                if (David_0x27a566 == "") {
                  return;
                }
              }
            }
          }
        }
      } catch (_0x18c748) {
        David_0x23fcd8.log(_0x18c748);
      }
      _0x72ee13();
    });
  });
}
function David_0x16bc51() {
  return new Promise((_0x1b6279, _0x786ef9) => {
    David_0x55ecd5();
    const _0x14af36 = "https://mapi.shuijiaobao.cn/home/user";
    const _0x5efca1 = {
      url: _0x14af36,
      headers: David_0x42dbfc,
      body: ""
    };
    David_0x23fcd8.post(_0x5efca1, async (_0x1eb75e, _0x9ba75, _0x48b05d) => {
      try {
        if (David_0x1a2a20(_0x48b05d)) {
          const _0x4dd33f = JSON.parse(_0x48b05d);
          if (_0x4dd33f.ok == 1) {
            David_0x23fcd8.log("【用户名】: " + _0x4dd33f.data.userInfo.name);
            David_0x2b3e75 += "【用户名】: " + _0x4dd33f.data.userInfo.name + "\n";
            await David_0x2b96f6();
            let _0x2d580f = _0x4dd33f.data.bubble_list;
            if (_0x4dd33f.data.bubble_list.length > 0) {
              for (let _0x185359 = 0; _0x185359 < _0x2d580f.length; _0x185359++) {
                let _0x17e092 = _0x2d580f[_0x185359];
                David_0x8cbf58 = _0x17e092.id;
                let _0x14087d = _0x17e092.gold_number;
                David_0x23fcd8.log("开始领取睡觉奖励");
                await David_0x1e283b(David_0x8cbf58, _0x14087d);
                await David_0x23fcd8.wait(David_0x1da734(5000, 10000));
              }
            }
            if (_0x4dd33f.data.userInfo.gold_coin >= 10000) {
              David_0x23fcd8.log("满足提现条件，开始提现...");
              await David_0x3e6e1c();
            }
          }
        }
      } catch (_0x3b2a22) {
        David_0x23fcd8.log(_0x3b2a22);
      }
      _0x1b6279();
    });
  });
}
function David_0x4b255c(_0x436c14) {
  return new Promise((_0x5c7c17, _0x3ec99a) => {
    const _0x273870 = "https://mapi.shuijiaobao.cn/login/code";
    const _0x161cc8 = {
      Accept: "*/*",
      "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
      Connection: "keep-alive",
      ua: David_0x30dcf5.ua,
      "Content-Type": "application/x-www-form-urlencoded",
      Host: "mapi.shuijiaobao.cn",
      "User-Agent": "",
      "Accept-Language": "zh-Hans-CN;q=1.0, en-CN;q=0.9"
    };
    const _0x169fa2 = {
      url: _0x273870,
      headers: _0x161cc8,
      body: "channel=sl_ali&pName=ql_sleep&versionName=2.0.5&equipmentCode=" + _0x436c14
    };
    David_0x23fcd8.post(_0x169fa2, async (_0x4da773, _0x10b619, _0x1accff) => {
      try {
        if (David_0x1a2a20(_0x1accff)) {
          const _0xca47c7 = JSON.parse(_0x1accff);
          if (_0xca47c7.ok == 1) {
            David_0x1a762d = _0xca47c7.data.userInfo.accessToken;
          }
        }
      } catch (_0x50d180) {
        David_0x23fcd8.log(_0x50d180);
      }
      _0x5c7c17();
    });
  });
}
function David_0x2b96f6() {
  return new Promise((_0x4830cf, _0x3a73bd) => {
    David_0x55ecd5();
    const _0xcb7a3e = "https://mapi.shuijiaobao.cn/user/userContent";
    const _0x2ec02f = {
      url: _0xcb7a3e,
      headers: David_0x42dbfc,
      body: ""
    };
    David_0x23fcd8.post(_0x2ec02f, async (_0x2566f7, _0x224a42, _0x1df9ba) => {
      try {
        if (David_0x1a2a20(_0x1df9ba)) {
          const _0x287ef5 = JSON.parse(_0x1df9ba);
          if (_0x287ef5.ok == 1) {
            David_0x23fcd8.log("【总金币】: " + _0x287ef5.data.userGold);
            David_0x23fcd8.log("【今日金币】: " + _0x287ef5.data.todayGold);
            David_0x23fcd8.log("【余额】: " + _0x287ef5.data.money);
            David_0x2b3e75 += "【金币】: " + _0x287ef5.data.userGold + "\n";
            David_0x2b3e75 += "【今日金币】: " + _0x287ef5.data.todayGold + "\n";
            David_0x2b3e75 += "【余额】: " + _0x287ef5.data.money + "\n";
          }
        }
      } catch (_0x24adcd) {
        David_0x23fcd8.log(_0x24adcd);
      }
      _0x4830cf();
    });
  });
}
function David_0x437078() {
  return new Promise((_0x52b838, _0x33677f) => {
    David_0x55ecd5();
    const _0x1c2896 = "https://mapi.shuijiaobao.cn/home/sign";
    const _0x41f0b8 = {
      url: _0x1c2896,
      headers: David_0x42dbfc,
      body: ""
    };
    David_0x23fcd8.post(_0x41f0b8, async (_0x4e59a5, _0x57d4dc, _0x119344) => {
      try {
        if (David_0x1a2a20(_0x119344)) {
          const _0x5b7193 = JSON.parse(_0x119344);
          if (_0x5b7193.ok == 1) {
            if (_0x5b7193.data.sign_info.sign_money != 0) {
              David_0x23fcd8.log("恭喜你签到成功 🎉");
            } else {
              David_0x23fcd8.log("今天已签到！");
            }
            David_0x2b3e75 += "【签到】: 已完成\n";
          }
        }
      } catch (_0x16fd9a) {
        David_0x23fcd8.log(_0x16fd9a);
      }
      _0x52b838();
    });
  });
}
function David_0x3b33e0() {
  return new Promise((_0x522784, _0x1eb600) => {
    David_0x55ecd5();
    const _0x3a8b57 = "https://mapi.shuijiaobao.cn/sleep/dinnerCreate";
    const _0x550154 = {
      url: _0x3a8b57,
      headers: David_0x42dbfc,
      body: ""
    };
    David_0x23fcd8.post(_0x550154, async (_0x71efca, _0x2bbcd0, _0x211137) => {
      try {
        if (David_0x1a2a20(_0x211137)) {
          const _0x134a85 = JSON.parse(_0x211137);
          if (_0x134a85.ok == 1) {
            if (David_0x437802 >= 5 && David_0x437802 <= 8) {
              David_0x23fcd8.log("恭喜你获取早餐补贴" + _0x134a85.data.gold_number + "金币 🎉");
            } else {
              if (David_0x437802 >= 11 && David_0x437802 <= 13) {
                David_0x23fcd8.log("恭喜你获取午餐补贴" + _0x134a85.data.gold_number + "金币 🎉");
              } else {
                if (David_0x437802 >= 17 && David_0x437802 <= 19) {
                  David_0x23fcd8.log("恭喜你获取晚餐补贴" + _0x134a85.data.gold_number + "金币 🎉");
                } else {
                  if (David_0x437802 >= 21 && David_0x437802 <= 23) {
                    David_0x23fcd8.log("恭喜你获取夜宵补贴" + _0x134a85.data.gold_number + "金币 🎉");
                  }
                }
              }
            }
          }
        }
      } catch (_0x529add) {
        David_0x23fcd8.log(_0x529add);
      }
      _0x522784();
    });
  });
}
function David_0x5f303b() {
  return new Promise((_0x3b5fb7, _0x427188) => {
    const _0x1f9064 = Math.round(new Date().getTime() / 1000).toString();
    David_0x55ecd5();
    const _0x54a37a = David_0x4c8292 + "9lfdkislkcsiT8A" + _0x1f9064 + David_0x1c2565;
    const _0x31a78c = David_0x68eb13(_0x54a37a);
    const _0x17e366 = "https://mapi.shuijiaobao.cn/task/dayReward";
    const _0xfe9786 = {
      url: _0x17e366,
      headers: David_0x42dbfc,
      body: "sign=" + _0x31a78c + "&timeStamp=" + _0x1f9064 + "&type=155"
    };
    David_0x23fcd8.post(_0xfe9786, async (_0x365766, _0x1b0b40, _0x4c7871) => {
      try {
        if (David_0x1a2a20(_0x4c7871)) {
          const _0x43c730 = JSON.parse(_0x4c7871);
          if (_0x43c730.ok == 1) {
            David_0x23fcd8.log("恭喜你看广告成功，获得" + _0x43c730.data.user_info.add_gold_coin + "金币 🎉");
          }
        }
      } catch (_0x2958fc) {
        David_0x23fcd8.log(_0x2958fc);
      }
      _0x3b5fb7();
    });
  });
}
function David_0x3f72eb() {
  return new Promise((_0x9bdffe, _0x18cf4e) => {
    David_0x55ecd5();
    const _0x1b1d4c = "https://mapi.shuijiaobao.cn/user/userInvent";
    const _0x53e330 = {
      url: _0x1b1d4c,
      headers: David_0x42dbfc,
      body: "Uid=888409&type=1"
    };
    David_0x23fcd8.post(_0x53e330, async (_0x433e73, _0x5e0d41, _0x1dfc6b) => {
      try {
        if (David_0x1a2a20(_0x1dfc6b)) {
          const _0x208d1b = JSON.parse(_0x1dfc6b);
          _0x208d1b.ok == 1;
        }
      } catch (_0xdc0473) {
        David_0x23fcd8.log(_0xdc0473);
      }
      _0x9bdffe();
    });
  });
}
function David_0x3b20c4() {
  return new Promise((_0x21e2bb, _0x1e6c86) => {
    David_0x55ecd5();
    const _0x4f238a = "https://mapi.shuijiaobao.cn/sleep/createOrderSleep";
    const _0x32bca5 = {
      url: _0x4f238a,
      headers: David_0x42dbfc,
      body: ""
    };
    David_0x23fcd8.post(_0x32bca5, async (_0x3d8c83, _0x289ada, _0x33270a) => {
      try {
        if (David_0x1a2a20(_0x33270a)) {
          const _0x6bf1eb = JSON.parse(_0x33270a);
          if (_0x6bf1eb.ok == 1) {
            David_0x23fcd8.log("我睡觉了 zzzzzz");
          }
        }
      } catch (_0x1f52b3) {
        David_0x23fcd8.log(_0x1f52b3);
      }
      _0x21e2bb();
    });
  });
}
function David_0x1e283b(_0x1c9cdf, _0x5155f9) {
  return new Promise((_0x40aef8, _0x201bf8) => {
    David_0x55ecd5();
    const _0x36cb02 = "https://mapi.shuijiaobao.cn/sleep/collectSleepGold";
    let _0x3a3ae0 = "id=" + _0x1c9cdf + "&number=" + _0x5155f9;
    const _0x1cd1ed = {
      url: _0x36cb02,
      headers: David_0x42dbfc,
      body: _0x3a3ae0
    };
    David_0x23fcd8.post(_0x1cd1ed, async (_0x1c7a60, _0xe7fbb8, _0x114918) => {
      try {
        if (David_0x1a2a20(_0x114918)) {
          const _0x3af5d4 = JSON.parse(_0x114918);
          if (_0x3af5d4.ok == 1) {
            David_0x23fcd8.log("恭喜你睡觉获得" + _0x3af5d4.data.gold_number + "金币 🎉");
          }
        }
      } catch (_0x5e7a62) {
        David_0x23fcd8.log(_0x5e7a62);
      }
      _0x40aef8();
    });
  });
}
function David_0x3e6e1c() {
  return new Promise((_0x2226a6, _0x498f06) => {
    const _0x33529a = Math.round(new Date().getTime() / 1000).toString();
    const _0x5d82ea = David_0x4c8292 + "49lfdkislkcsiT8A" + _0x33529a + David_0x1c2565;
    const _0x471bdc = David_0x68eb13(_0x5d82ea);
    const _0xac5a1f = "https://mapi.shuijiaobao.cn/money/extract";
    let _0x5c7a0b = "pay_type=2&sign=" + _0x471bdc + "&timeStamp=" + _0x33529a + "&type=2";
    const _0x25d824 = {
      url: _0xac5a1f,
      headers: David_0x42dbfc,
      body: _0x5c7a0b
    };
    David_0x23fcd8.post(_0x25d824, async (_0x426293, _0x47f2ca, _0x2b9d41) => {
      try {
        if (David_0x1a2a20(_0x2b9d41)) {
          const _0x62c6d3 = JSON.parse(_0x2b9d41);
          if (_0x62c6d3.ok == 1) {
            David_0x23fcd8.log("恭喜你成功提现1元 🎉");
          }
        }
      } catch (_0x71b5d7) {
        David_0x23fcd8.log(_0x71b5d7);
      }
      _0x2226a6();
    });
  });
}
function David_0x521609(_0x471f2a, _0x25a41f, _0x337fef) {
  return new Promise((_0x3520b5, _0x1ebe6a) => {
    const _0x36a329 = David_0x34bb59 + "/script/permissions/lastest";
    const _0x3bb342 = {
      appName: _0x471f2a,
      userId: _0x25a41f,
      activityCode: _0x337fef,
      version: David_0xb9998e
    };
    const _0x1c42ac = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x3668d7 = {
      url: _0x36a329,
      headers: _0x1c42ac,
      body: JSON.stringify(_0x3bb342)
    };
    David_0x23fcd8.post(_0x3668d7, async (_0xb1a6ce, _0x3bbcb1, _0x4484cd) => {
      const _0x38423a = _0x4484cd.replace(/\"/g, "").slice(34);
      const _0x36883c = new David_0x40bfe8();
      result = JSON.parse(_0x36883c.decode(_0x38423a));
      try {
        David_0x27a566 = result.version;
        David_0x5db0ab = result.userAuth;
        David_0x4a3412 = result.scriptAuth;
        David_0x279472 = result.runAuth;
        David_0x5c61a2 = result.notify;
        David_0x389b3c = result.vipAuth;
        David_0x498e3d = result.isCharge;
        David_0x4606be = result.runAcounts;
        David_0x424322 = result.buyCount;
        David_0x2529e7 = result.runedCounts;
        David_0x593125 = result.runTotalCounts;
        David_0x33b0ec = result.userRank;
        David_0x5cea6d = result.invicate;
        David_0xd5f97c = result.accountNumbers;
        David_0x2ad102 = result.vipDate;
      } catch (_0x1e2a4b) {
        David_0x23fcd8.log(_0x1e2a4b);
      }
      _0x3520b5();
    });
  });
}
function David_0x3a471a(_0x215f4d, _0x12c98b) {
  return new Promise((_0x2007ae, _0x24d90e) => {
    const _0x2f2744 = David_0x34bb59 + "/script/run/add";
    const _0x5f1d30 = {
      appName: _0x215f4d,
      userId: _0x12c98b,
      activityCode: David_0xcb6f,
      version: David_0xb9998e
    };
    const _0x1ddaf8 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2748c5 = {
      url: _0x2f2744,
      headers: _0x1ddaf8,
      body: JSON.stringify(_0x5f1d30)
    };
    David_0x23fcd8.post(_0x2748c5, async (_0x2864b9, _0x147699, _0x45052f) => {
      _0x2007ae();
    });
  });
}
function David_0x564ba0(_0x37dab2, _0x4bda76) {
  return new Promise((_0x26653d, _0x38ef86) => {
    const _0x1303c4 = setTimeout(() => {
      _0x26653d(false);
    }, _0x4bda76);
    const _0x50ab2f = David_0x3547b3.get(_0x37dab2, _0x26eba2 => {
      clearTimeout(_0x1303c4);
      if (_0x26eba2.statusCode === 404) {
        _0x26653d(true);
      } else {
        _0x26653d(false);
      }
    });
    _0x50ab2f.on("error", _0x29f45e => {
      clearTimeout(_0x1303c4);
      _0x26653d(false);
    });
    _0x50ab2f.on("timeout", () => {
      _0x50ab2f.abort();
      _0x38ef86(new Error("请求超时"));
    });
  });
}
async function David_0x44ed54(_0x73d08c, _0x2d9ccf = 3000) {
  return new Promise((_0x3f239e, _0x586afd) => {
    const _0x687e8a = {
      url: _0x73d08c + "/docs"
    };
    setTimeout(() => {
      _0x3f239e(false);
    }, _0x2d9ccf);
    David_0x23fcd8.get(_0x687e8a, async (_0x94db5, _0x2bee66, _0x22eb93) => {
      if (_0x2bee66.status == 401) {
        _0x3f239e(true);
      } else {
        _0x3f239e(false);
      }
    });
  });
}
async function David_0x2d5543(_0x53d4c0, _0x4756eb = 3000) {
  return new Promise((_0x414fa4, _0x320a8f) => {
    const _0x2ae224 = {
      url: _0x53d4c0 + "/"
    };
    setTimeout(() => {
      _0x414fa4(false);
    }, _0x4756eb);
    $httpClient.get(_0x2ae224, async (_0xf66d34, _0x1d4364, _0x39de1e) => {
      if (_0x39de1e == "{\"detail\":\"Not Found\"}") {
        _0x414fa4(true);
      } else {
        _0x414fa4(false);
      }
    });
  });
}
async function David_0x1b96ce(_0x2d8748, _0x3c150f, _0x532294) {
  return new Promise((_0x372956, _0x485d54) => {
    const _0xea7b0a = David_0x34bb59 + "/redis/hash/get/" + _0x2d8748 + "/" + _0x3c150f;
    const _0x85a6be = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2a6c15 = {
      url: _0xea7b0a,
      headers: _0x85a6be
    };
    David_0x23fcd8.get(_0x2a6c15, async (_0x1dcfda, _0x1a7fc6, _0x2ce9ad) => {
      const _0x5f3fed = _0x2ce9ad.replace(/\"/g, "");
      answerTexts[_0x532294] = _0x5f3fed;
      _0x372956();
    });
  });
}
function David_0x1047f5(_0x8d2803, _0x47d226, _0x381b80) {
  return new Promise((_0x50bbd7, _0x31434f) => {
    const _0x1e042a = David_0x34bb59 + "/redis/hash/set";
    const _0x11126b = {
      key: _0x8d2803,
      hashKey: _0x47d226,
      hashValue: _0x381b80
    };
    const _0x18b21e = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x24d37e = {
      url: _0x1e042a,
      headers: _0x18b21e,
      body: JSON.stringify(_0x11126b)
    };
    David_0x23fcd8.post(_0x24d37e, async (_0x1fa2d4, _0xe4771c, _0x5d8aa3) => {
      _0x50bbd7();
    });
  });
}
function David_0x403c53(_0x39658a) {
  return new Promise((_0x31ae5d, _0x4cc441) => {
    const _0x175ac4 = David_0x34bb59 + "/redis/set/pop/" + _0x39658a;
    const _0x1ad28d = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x74e61d = {
      url: _0x175ac4,
      headers: _0x1ad28d
    };
    David_0x23fcd8.get(_0x74e61d, async (_0x4edd6e, _0x90a79b, _0x215ede) => {
      const _0x41f2f5 = _0x215ede.replace(/\"/g, "");
      popCookie = _0x41f2f5;
      _0x31ae5d();
    });
  });
}
function David_0x2a8499(_0x11eebc, _0x4cd6d4, _0x3225b4) {
  let _0x4d86ea = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (wxtsapp[_0x3225b4].ua && wxtsapp[_0x3225b4].ua != "") {
    _0x4d86ea = wxtsapp[_0x3225b4].ua;
  }
  const _0x830ca = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x4d86ea,
    Authorization: wxtsapp[_0x3225b4].auth,
    Host: "hb2.hbdtxt.com"
  };
  const _0x7c6899 = {
    url: _0x11eebc,
    headers: _0x830ca
  };
  if (_0x4cd6d4) {
    _0x7c6899.body = _0x4cd6d4;
  }
  return _0x7c6899;
}
async function David_0x3d1cdd(_0x9ac42b, _0x1d29f2, _0xcbcd8f) {
  httpResult = null;
  return new Promise(_0x3f1ffe => {
    David_0x23fcd8[_0x9ac42b](_0x1d29f2, async (_0x1f6bcd, _0x44a7e1, _0x3523f9) => {
      try {
        if (_0x1f6bcd) {
          David_0x23fcd8.log(_0xcbcd8f + ": " + _0x9ac42b + "请求失败");
          David_0x23fcd8.log(JSON.stringify(_0x1f6bcd));
          David_0x23fcd8.logErr(_0x1f6bcd);
        } else {
          if (David_0x1a2a20(_0x3523f9)) {
            httpResult = JSON.parse(_0x3523f9);
            if (debug == 1) {
              David_0x23fcd8.log(httpResult);
            }
          }
        }
      } catch (_0x15c324) {
        David_0x23fcd8.logErr(_0x15c324, _0x44a7e1);
      } finally {
        _0x3f1ffe();
      }
    });
  });
}
function David_0x569660(_0x68ff24) {
  _0x68ff24 = _0x68ff24.replace(/\"/g, "");
  var _0x5b1619;
  var _0x3949f0 = {};
  var _0x44cee3 = _0x68ff24.slice(_0x68ff24.indexOf("?") + 1).split("&");
  for (var _0x7f2a71 = 0; _0x7f2a71 < _0x44cee3.length; _0x7f2a71++) {
    _0x5b1619 = _0x44cee3[_0x7f2a71].split("=");
    _0x3949f0[_0x5b1619[0]] = _0x5b1619[1];
  }
  return _0x3949f0;
}
function David_0x4abf86(_0x160143, _0x281807) {
  if (_0x160143.length * 2 <= _0x281807) {
    return _0x160143;
  }
  var _0x4ca102 = 0;
  var _0x1f4024 = "";
  for (var _0x4d4bf5 = 0; _0x4d4bf5 < _0x160143.length; _0x4d4bf5++) {
    _0x1f4024 = _0x1f4024 + _0x160143.charAt(_0x4d4bf5);
    if (_0x160143.charCodeAt(_0x4d4bf5) > 128) {
      _0x4ca102 = _0x4ca102 + 2;
      if (_0x4ca102 >= _0x281807) {
        return _0x1f4024.substring(0, _0x1f4024.length - 1) + "...";
      }
    } else {
      _0x4ca102 = _0x4ca102 + 1;
      if (_0x4ca102 >= _0x281807) {
        return _0x1f4024.substring(0, _0x1f4024.length - 2) + "...";
      }
    }
  }
  return _0x1f4024;
}
function David_0x465ca5() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x1a2a20(_0x65b422) {
  try {
    if (typeof JSON.parse(_0x65b422) == "object") {
      return true;
    }
  } catch (_0x1255d8) {
    console.log(_0x1255d8);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x2d54e0(_0x29ef8e) {
  var _0x489ee7 = Object.keys(_0x29ef8e).map(function (_0x185a27) {
    return encodeURIComponent(_0x185a27) + "=" + encodeURIComponent(_0x29ef8e[_0x185a27]);
  }).join("&");
  return _0x489ee7;
}
function David_0x18e826(_0x8a9eaa) {
  var _0x1952cb = String.fromCharCode(_0x8a9eaa.charCodeAt(0) + _0x8a9eaa.length);
  for (var _0x206ab3 = 1; _0x206ab3 < _0x8a9eaa.length; _0x206ab3++) {
    _0x1952cb += String.fromCharCode(_0x8a9eaa.charCodeAt(_0x206ab3) + _0x8a9eaa.charCodeAt(_0x206ab3 - 1));
  }
  return escape(_0x1952cb);
}
function David_0x3dc01d(_0xb8c17e) {
  _0xb8c17e = unescape(_0xb8c17e);
  var _0x2eac91 = String.fromCharCode(_0xb8c17e.charCodeAt(0) - _0xb8c17e.length);
  for (var _0x42a2a2 = 1; _0x42a2a2 < _0xb8c17e.length; _0x42a2a2++) {
    _0x2eac91 += String.fromCharCode(_0xb8c17e.charCodeAt(_0x42a2a2) - _0x2eac91.charCodeAt(_0x42a2a2 - 1));
  }
  return _0x2eac91;
}
function David_0x1da734(_0x455001, _0x5c5f65) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x455001 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x5c5f65 - _0x455001 + 1) + _0x455001);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x12a232() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x15f28b() {
  function _0x290597() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x290597() + _0x290597() + "-" + _0x290597() + "-" + _0x290597() + "-" + _0x290597() + "-" + _0x290597() + _0x290597() + _0x290597();
}
function David_0x1d2432(_0x1eb95b) {
  if (_0x1eb95b.length == 11) {
    let _0x36de8a = _0x1eb95b.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x36de8a;
  } else {
    return _0x1eb95b;
  }
}
function David_0x512ee8(_0x3b56db) {
  return new Promise(_0xab31cf => {
    try {
      var _0x4cae2c = require("request");
      const _0x5bc885 = {
        c: _0x3b56db
      };
      const _0x3ed7c1 = {
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        qs: _0x5bc885
      };
      _0x4cae2c(_0x3ed7c1, function (_0x5bcfd0, _0x2d9652, _0x2074cb) {
        if (_0x5bcfd0) {
          throw new Error(_0x5bcfd0);
        }
        let _0x1d668f = JSON.parse(_0x2074cb);
        let _0x7c8ed1 = _0x1d668f.hitokoto;
        _0xab31cf(_0x7c8ed1);
        return _0x7c8ed1;
      });
    } catch (_0x32e029) {
      console.log(_0x32e029);
    }
  });
}
function David_0x20495b() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x4a0be8() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x57ace3() {
  if (David_0x3f6dc6 == 1) {
    David_0x23fcd8.msg(David_0x23fcd8.name, "", David_0x23fcd8.message);
  }
}
async function David_0x50955a(_0x4ac0ee) {
  if (David_0x437802 == 9 || David_0x437802 == 12 || David_0x437802 == 18) {
    if (David_0x3f6dc6 == 1) {
      if (David_0x23fcd8.isNode()) {
        await David_0x469ba4.sendNotify(David_0x23fcd8.name, _0x4ac0ee);
      } else {
        David_0x23fcd8.msg(David_0x23fcd8.name, "", _0x4ac0ee);
      }
    } else {
      David_0x23fcd8.log(_0x4ac0ee);
    }
  }
}
async function David_0x23975d(_0x161c75, _0x201c1e, _0x419326) {
  return new Promise((_0x2d0897, _0x359939) => {
    const _0x2744f2 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x3c8407 = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x201c1e,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x419326],
      verifyPay: false
    };
    const _0x514b1a = {
      "Content-Type": "application/json"
    };
    const _0x4c0838 = {
      url: _0x2744f2,
      headers: _0x514b1a,
      body: JSON.stringify(_0x3c8407)
    };
    David_0x23fcd8.post(_0x4c0838, async (_0x17e598, _0xff347c, _0x2f8e2d) => {
      _0x2d0897();
    });
  });
}
function David_0x428192(_0x4225ed, _0x365df5) {
  _0x365df5 = _0x365df5 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x5b743f = "";
  for (let _0xf9918a = 0; _0xf9918a < _0x4225ed; _0xf9918a++) {
    let _0x489187 = Math.floor(Math.random() * _0x365df5.length);
    _0x5b743f += _0x365df5.substring(_0x489187, _0x489187 + 1);
  }
  return _0x5b743f;
}
function David_0x68eb13(_0xc28f5c) {
  function _0x20242b(_0x291126, _0x221070) {
    return _0x291126 << _0x221070 | _0x291126 >>> 32 - _0x221070;
  }
  function _0x5b6ccb(_0x1a2889, _0x44163e) {
    var _0x1b84fb, _0x4a6ee6, _0x4f1830, _0x28c4aa, _0x3acb5f;
    _0x4f1830 = 2147483648 & _0x1a2889;
    _0x28c4aa = 2147483648 & _0x44163e;
    _0x1b84fb = 1073741824 & _0x1a2889;
    _0x4a6ee6 = 1073741824 & _0x44163e;
    _0x3acb5f = (1073741823 & _0x1a2889) + (1073741823 & _0x44163e);
    return _0x1b84fb & _0x4a6ee6 ? 2147483648 ^ _0x3acb5f ^ _0x4f1830 ^ _0x28c4aa : _0x1b84fb | _0x4a6ee6 ? 1073741824 & _0x3acb5f ? 3221225472 ^ _0x3acb5f ^ _0x4f1830 ^ _0x28c4aa : 1073741824 ^ _0x3acb5f ^ _0x4f1830 ^ _0x28c4aa : _0x3acb5f ^ _0x4f1830 ^ _0x28c4aa;
  }
  function _0x51f48c(_0x48e913, _0x3ef228, _0x3456f9) {
    return _0x48e913 & _0x3ef228 | ~_0x48e913 & _0x3456f9;
  }
  function _0x4d21fc(_0x1e227e, _0x9c5630, _0xee79e6) {
    return _0x1e227e & _0xee79e6 | _0x9c5630 & ~_0xee79e6;
  }
  function _0x2c782c(_0x20fc6d, _0xac0bb0, _0x3da05b) {
    return _0x20fc6d ^ _0xac0bb0 ^ _0x3da05b;
  }
  function _0x49447b(_0x124e6d, _0x199b3a, _0x2d37f5) {
    return _0x199b3a ^ (_0x124e6d | ~_0x2d37f5);
  }
  function _0x4c961e(_0x3858ae, _0x4ac4bc, _0x5c80ea, _0x1b9f74, _0x414b3e, _0x1224db, _0x2296ef) {
    _0x3858ae = _0x5b6ccb(_0x3858ae, _0x5b6ccb(_0x5b6ccb(_0x51f48c(_0x4ac4bc, _0x5c80ea, _0x1b9f74), _0x414b3e), _0x2296ef));
    return _0x5b6ccb(_0x20242b(_0x3858ae, _0x1224db), _0x4ac4bc);
  }
  function _0x2c92b9(_0x3fcb91, _0x2c29f6, _0x96c839, _0x1e85e1, _0x1f0bf8, _0x2c413a, _0x5f4fe3) {
    _0x3fcb91 = _0x5b6ccb(_0x3fcb91, _0x5b6ccb(_0x5b6ccb(_0x4d21fc(_0x2c29f6, _0x96c839, _0x1e85e1), _0x1f0bf8), _0x5f4fe3));
    return _0x5b6ccb(_0x20242b(_0x3fcb91, _0x2c413a), _0x2c29f6);
  }
  function _0x15e92a(_0x90604, _0x9bf86f, _0x356da6, _0xe58557, _0x1cba07, _0x2692a1, _0x2878e7) {
    _0x90604 = _0x5b6ccb(_0x90604, _0x5b6ccb(_0x5b6ccb(_0x2c782c(_0x9bf86f, _0x356da6, _0xe58557), _0x1cba07), _0x2878e7));
    return _0x5b6ccb(_0x20242b(_0x90604, _0x2692a1), _0x9bf86f);
  }
  function _0x4dd77e(_0x2b0546, _0x3edc81, _0x367ad7, _0x2b2737, _0x6f8914, _0x1b9176, _0x3da03e) {
    _0x2b0546 = _0x5b6ccb(_0x2b0546, _0x5b6ccb(_0x5b6ccb(_0x49447b(_0x3edc81, _0x367ad7, _0x2b2737), _0x6f8914), _0x3da03e));
    return _0x5b6ccb(_0x20242b(_0x2b0546, _0x1b9176), _0x3edc81);
  }
  function _0x27788b(_0x344166) {
    for (var _0x3e0b77, _0x48ca74 = _0x344166.length, _0xd51d22 = _0x48ca74 + 8, _0x31563b = (_0xd51d22 - _0xd51d22 % 64) / 64, _0x216c9b = 16 * (_0x31563b + 1), _0x16225a = new Array(_0x216c9b - 1), _0x28fc17 = 0, _0x306708 = 0; _0x48ca74 > _0x306708;) {
      _0x3e0b77 = (_0x306708 - _0x306708 % 4) / 4;
      _0x28fc17 = _0x306708 % 4 * 8;
      _0x16225a[_0x3e0b77] = _0x16225a[_0x3e0b77] | _0x344166.charCodeAt(_0x306708) << _0x28fc17;
      _0x306708++;
    }
    _0x3e0b77 = (_0x306708 - _0x306708 % 4) / 4;
    _0x28fc17 = _0x306708 % 4 * 8;
    _0x16225a[_0x3e0b77] = _0x16225a[_0x3e0b77] | 128 << _0x28fc17;
    _0x16225a[_0x216c9b - 2] = _0x48ca74 << 3;
    _0x16225a[_0x216c9b - 1] = _0x48ca74 >>> 29;
    return _0x16225a;
  }
  function _0xe8f9ef(_0x591936) {
    var _0x5a54c2,
      _0x4dec8e,
      _0x3719e1 = "",
      _0x4c2566 = "";
    for (_0x4dec8e = 0; 3 >= _0x4dec8e; _0x4dec8e++) {
      _0x5a54c2 = _0x591936 >>> 8 * _0x4dec8e & 255;
      _0x4c2566 = "0" + _0x5a54c2.toString(16);
      _0x3719e1 += _0x4c2566.substr(_0x4c2566.length - 2, 2);
    }
    return _0x3719e1;
  }
  function _0x89ff7b(_0x3cc3a8) {
    _0x3cc3a8 = _0x3cc3a8.replace(/\r\n/g, "\n");
    for (var _0x3965de = "", _0x2893be = 0; _0x2893be < _0x3cc3a8.length; _0x2893be++) {
      var _0x8b23d = _0x3cc3a8.charCodeAt(_0x2893be);
      128 > _0x8b23d ? _0x3965de += String.fromCharCode(_0x8b23d) : _0x8b23d > 127 && 2048 > _0x8b23d ? (_0x3965de += String.fromCharCode(_0x8b23d >> 6 | 192), _0x3965de += String.fromCharCode(63 & _0x8b23d | 128)) : (_0x3965de += String.fromCharCode(_0x8b23d >> 12 | 224), _0x3965de += String.fromCharCode(_0x8b23d >> 6 & 63 | 128), _0x3965de += String.fromCharCode(63 & _0x8b23d | 128));
    }
    return _0x3965de;
  }
  var _0x312a5d,
    _0x13c674,
    _0x52c59b,
    _0x4ac78d,
    _0x15851d,
    _0x5b1a2c,
    _0x13033b,
    _0x3f2897,
    _0x226007,
    _0x271e07 = [],
    _0x5b9cab = 7,
    _0x16acbe = 12,
    _0x41af68 = 17,
    _0x572534 = 22,
    _0xde4cd7 = 5,
    _0x1061e9 = 9,
    _0x8cba94 = 14,
    _0x24e5eb = 20,
    _0x45c19f = 4,
    _0x5491cf = 11,
    _0x3e553e = 16,
    _0x19c584 = 23,
    _0x4919e7 = 6,
    _0x168716 = 10,
    _0x3d719d = 15,
    _0x1c0c4f = 21;
  for (_0xc28f5c = _0x89ff7b(_0xc28f5c), _0x271e07 = _0x27788b(_0xc28f5c), _0x5b1a2c = 1732584193, _0x13033b = 4023233417, _0x3f2897 = 2562383102, _0x226007 = 271733878, _0x312a5d = 0; _0x312a5d < _0x271e07.length; _0x312a5d += 16) {
    _0x13c674 = _0x5b1a2c;
    _0x52c59b = _0x13033b;
    _0x4ac78d = _0x3f2897;
    _0x15851d = _0x226007;
    _0x5b1a2c = _0x4c961e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 0], _0x5b9cab, 3614090360);
    _0x226007 = _0x4c961e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 1], _0x16acbe, 3905402710);
    _0x3f2897 = _0x4c961e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 2], _0x41af68, 606105819);
    _0x13033b = _0x4c961e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 3], _0x572534, 3250441966);
    _0x5b1a2c = _0x4c961e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 4], _0x5b9cab, 4118548399);
    _0x226007 = _0x4c961e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 5], _0x16acbe, 1200080426);
    _0x3f2897 = _0x4c961e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 6], _0x41af68, 2821735955);
    _0x13033b = _0x4c961e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 7], _0x572534, 4249261313);
    _0x5b1a2c = _0x4c961e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 8], _0x5b9cab, 1770035416);
    _0x226007 = _0x4c961e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 9], _0x16acbe, 2336552879);
    _0x3f2897 = _0x4c961e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 10], _0x41af68, 4294925233);
    _0x13033b = _0x4c961e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 11], _0x572534, 2304563134);
    _0x5b1a2c = _0x4c961e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 12], _0x5b9cab, 1804603682);
    _0x226007 = _0x4c961e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 13], _0x16acbe, 4254626195);
    _0x3f2897 = _0x4c961e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 14], _0x41af68, 2792965006);
    _0x13033b = _0x4c961e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 15], _0x572534, 1236535329);
    _0x5b1a2c = _0x2c92b9(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 1], _0xde4cd7, 4129170786);
    _0x226007 = _0x2c92b9(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 6], _0x1061e9, 3225465664);
    _0x3f2897 = _0x2c92b9(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 11], _0x8cba94, 643717713);
    _0x13033b = _0x2c92b9(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 0], _0x24e5eb, 3921069994);
    _0x5b1a2c = _0x2c92b9(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 5], _0xde4cd7, 3593408605);
    _0x226007 = _0x2c92b9(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 10], _0x1061e9, 38016083);
    _0x3f2897 = _0x2c92b9(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 15], _0x8cba94, 3634488961);
    _0x13033b = _0x2c92b9(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 4], _0x24e5eb, 3889429448);
    _0x5b1a2c = _0x2c92b9(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 9], _0xde4cd7, 568446438);
    _0x226007 = _0x2c92b9(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 14], _0x1061e9, 3275163606);
    _0x3f2897 = _0x2c92b9(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 3], _0x8cba94, 4107603335);
    _0x13033b = _0x2c92b9(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 8], _0x24e5eb, 1163531501);
    _0x5b1a2c = _0x2c92b9(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 13], _0xde4cd7, 2850285829);
    _0x226007 = _0x2c92b9(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 2], _0x1061e9, 4243563512);
    _0x3f2897 = _0x2c92b9(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 7], _0x8cba94, 1735328473);
    _0x13033b = _0x2c92b9(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 12], _0x24e5eb, 2368359562);
    _0x5b1a2c = _0x15e92a(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 5], _0x45c19f, 4294588738);
    _0x226007 = _0x15e92a(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 8], _0x5491cf, 2272392833);
    _0x3f2897 = _0x15e92a(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 11], _0x3e553e, 1839030562);
    _0x13033b = _0x15e92a(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 14], _0x19c584, 4259657740);
    _0x5b1a2c = _0x15e92a(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 1], _0x45c19f, 2763975236);
    _0x226007 = _0x15e92a(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 4], _0x5491cf, 1272893353);
    _0x3f2897 = _0x15e92a(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 7], _0x3e553e, 4139469664);
    _0x13033b = _0x15e92a(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 10], _0x19c584, 3200236656);
    _0x5b1a2c = _0x15e92a(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 13], _0x45c19f, 681279174);
    _0x226007 = _0x15e92a(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 0], _0x5491cf, 3936430074);
    _0x3f2897 = _0x15e92a(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 3], _0x3e553e, 3572445317);
    _0x13033b = _0x15e92a(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 6], _0x19c584, 76029189);
    _0x5b1a2c = _0x15e92a(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 9], _0x45c19f, 3654602809);
    _0x226007 = _0x15e92a(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 12], _0x5491cf, 3873151461);
    _0x3f2897 = _0x15e92a(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 15], _0x3e553e, 530742520);
    _0x13033b = _0x15e92a(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 2], _0x19c584, 3299628645);
    _0x5b1a2c = _0x4dd77e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 0], _0x4919e7, 4096336452);
    _0x226007 = _0x4dd77e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 7], _0x168716, 1126891415);
    _0x3f2897 = _0x4dd77e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 14], _0x3d719d, 2878612391);
    _0x13033b = _0x4dd77e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 5], _0x1c0c4f, 4237533241);
    _0x5b1a2c = _0x4dd77e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 12], _0x4919e7, 1700485571);
    _0x226007 = _0x4dd77e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 3], _0x168716, 2399980690);
    _0x3f2897 = _0x4dd77e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 10], _0x3d719d, 4293915773);
    _0x13033b = _0x4dd77e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 1], _0x1c0c4f, 2240044497);
    _0x5b1a2c = _0x4dd77e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 8], _0x4919e7, 1873313359);
    _0x226007 = _0x4dd77e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 15], _0x168716, 4264355552);
    _0x3f2897 = _0x4dd77e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 6], _0x3d719d, 2734768916);
    _0x13033b = _0x4dd77e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 13], _0x1c0c4f, 1309151649);
    _0x5b1a2c = _0x4dd77e(_0x5b1a2c, _0x13033b, _0x3f2897, _0x226007, _0x271e07[_0x312a5d + 4], _0x4919e7, 4149444226);
    _0x226007 = _0x4dd77e(_0x226007, _0x5b1a2c, _0x13033b, _0x3f2897, _0x271e07[_0x312a5d + 11], _0x168716, 3174756917);
    _0x3f2897 = _0x4dd77e(_0x3f2897, _0x226007, _0x5b1a2c, _0x13033b, _0x271e07[_0x312a5d + 2], _0x3d719d, 718787259);
    _0x13033b = _0x4dd77e(_0x13033b, _0x3f2897, _0x226007, _0x5b1a2c, _0x271e07[_0x312a5d + 9], _0x1c0c4f, 3951481745);
    _0x5b1a2c = _0x5b6ccb(_0x5b1a2c, _0x13c674);
    _0x13033b = _0x5b6ccb(_0x13033b, _0x52c59b);
    _0x3f2897 = _0x5b6ccb(_0x3f2897, _0x4ac78d);
    _0x226007 = _0x5b6ccb(_0x226007, _0x15851d);
  }
  var _0x57684a = _0xe8f9ef(_0x5b1a2c) + _0xe8f9ef(_0x13033b) + _0xe8f9ef(_0x3f2897) + _0xe8f9ef(_0x226007);
  return _0x57684a.toLowerCase();
}
function David_0x37a56d(_0xc4858a) {
  var _0x539dbc = 8;
  var _0x2c3e29 = 0;
  function _0x2691c1(_0x1fe86a, _0x2273bf) {
    var _0x2793a2 = (_0x1fe86a & 65535) + (_0x2273bf & 65535);
    var _0x2e377c = (_0x1fe86a >> 16) + (_0x2273bf >> 16) + (_0x2793a2 >> 16);
    return _0x2e377c << 16 | _0x2793a2 & 65535;
  }
  function _0x28536e(_0x24bcdb, _0x410e72) {
    return _0x24bcdb >>> _0x410e72 | _0x24bcdb << 32 - _0x410e72;
  }
  function _0x50b08b(_0x468855, _0x1facee) {
    return _0x468855 >>> _0x1facee;
  }
  function _0x47739c(_0x5e3374, _0x350411, _0xe26bc5) {
    return _0x5e3374 & _0x350411 ^ ~_0x5e3374 & _0xe26bc5;
  }
  function _0x2bec18(_0x1781a3, _0x5c62ad, _0x1e4e2b) {
    return _0x1781a3 & _0x5c62ad ^ _0x1781a3 & _0x1e4e2b ^ _0x5c62ad & _0x1e4e2b;
  }
  function _0x525082(_0x4f85f9) {
    return _0x28536e(_0x4f85f9, 2) ^ _0x28536e(_0x4f85f9, 13) ^ _0x28536e(_0x4f85f9, 22);
  }
  function _0x273a51(_0x34ffd8) {
    return _0x28536e(_0x34ffd8, 6) ^ _0x28536e(_0x34ffd8, 11) ^ _0x28536e(_0x34ffd8, 25);
  }
  function _0x36d65c(_0x20537c) {
    return _0x28536e(_0x20537c, 7) ^ _0x28536e(_0x20537c, 18) ^ _0x50b08b(_0x20537c, 3);
  }
  function _0xd1eefe(_0x2275b8) {
    return _0x28536e(_0x2275b8, 17) ^ _0x28536e(_0x2275b8, 19) ^ _0x50b08b(_0x2275b8, 10);
  }
  function _0x296169(_0x412330, _0x1afb2d) {
    var _0x4d4777 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x13a6ad = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x5c3679 = new Array(64);
    var _0x562656, _0x4687d2, _0x5226b1, _0x36158a, _0x1e2745, _0x245c47, _0x1145d1, _0x3c48e0;
    var _0x44431e, _0x18d32d;
    _0x412330[_0x1afb2d >> 5] |= 128 << 24 - _0x1afb2d % 32;
    _0x412330[(_0x1afb2d + 64 >> 9 << 4) + 15] = _0x1afb2d;
    for (var _0x54e4c6 = 0; _0x54e4c6 < _0x412330.length; _0x54e4c6 += 16) {
      _0x562656 = _0x13a6ad[0];
      _0x4687d2 = _0x13a6ad[1];
      _0x5226b1 = _0x13a6ad[2];
      _0x36158a = _0x13a6ad[3];
      _0x1e2745 = _0x13a6ad[4];
      _0x245c47 = _0x13a6ad[5];
      _0x1145d1 = _0x13a6ad[6];
      _0x3c48e0 = _0x13a6ad[7];
      for (var _0x2267ba = 0; _0x2267ba < 64; _0x2267ba++) {
        if (_0x2267ba < 16) {
          _0x5c3679[_0x2267ba] = _0x412330[_0x2267ba + _0x54e4c6];
        } else {
          _0x5c3679[_0x2267ba] = _0x2691c1(_0x2691c1(_0x2691c1(_0xd1eefe(_0x5c3679[_0x2267ba - 2]), _0x5c3679[_0x2267ba - 7]), _0x36d65c(_0x5c3679[_0x2267ba - 15])), _0x5c3679[_0x2267ba - 16]);
        }
        _0x44431e = _0x2691c1(_0x2691c1(_0x2691c1(_0x2691c1(_0x3c48e0, _0x273a51(_0x1e2745)), _0x47739c(_0x1e2745, _0x245c47, _0x1145d1)), _0x4d4777[_0x2267ba]), _0x5c3679[_0x2267ba]);
        _0x18d32d = _0x2691c1(_0x525082(_0x562656), _0x2bec18(_0x562656, _0x4687d2, _0x5226b1));
        _0x3c48e0 = _0x1145d1;
        _0x1145d1 = _0x245c47;
        _0x245c47 = _0x1e2745;
        _0x1e2745 = _0x2691c1(_0x36158a, _0x44431e);
        _0x36158a = _0x5226b1;
        _0x5226b1 = _0x4687d2;
        _0x4687d2 = _0x562656;
        _0x562656 = _0x2691c1(_0x44431e, _0x18d32d);
      }
      _0x13a6ad[0] = _0x2691c1(_0x562656, _0x13a6ad[0]);
      _0x13a6ad[1] = _0x2691c1(_0x4687d2, _0x13a6ad[1]);
      _0x13a6ad[2] = _0x2691c1(_0x5226b1, _0x13a6ad[2]);
      _0x13a6ad[3] = _0x2691c1(_0x36158a, _0x13a6ad[3]);
      _0x13a6ad[4] = _0x2691c1(_0x1e2745, _0x13a6ad[4]);
      _0x13a6ad[5] = _0x2691c1(_0x245c47, _0x13a6ad[5]);
      _0x13a6ad[6] = _0x2691c1(_0x1145d1, _0x13a6ad[6]);
      _0x13a6ad[7] = _0x2691c1(_0x3c48e0, _0x13a6ad[7]);
    }
    return _0x13a6ad;
  }
  function _0x2dd588(_0x28f8e2) {
    var _0x8d8719 = Array();
    var _0x3f54dd = (1 << _0x539dbc) - 1;
    for (var _0xc7fca6 = 0; _0xc7fca6 < _0x28f8e2.length * _0x539dbc; _0xc7fca6 += _0x539dbc) {
      _0x8d8719[_0xc7fca6 >> 5] |= (_0x28f8e2.charCodeAt(_0xc7fca6 / _0x539dbc) & _0x3f54dd) << 24 - _0xc7fca6 % 32;
    }
    return _0x8d8719;
  }
  function _0x8f8911(_0x12b727) {
    _0x12b727 = _0x12b727.replace(/\r\n/g, "\n");
    var _0x3b87f3 = "";
    for (var _0x39b116 = 0; _0x39b116 < _0x12b727.length; _0x39b116++) {
      var _0x52693b = _0x12b727.charCodeAt(_0x39b116);
      if (_0x52693b < 128) {
        _0x3b87f3 += String.fromCharCode(_0x52693b);
      } else {
        if (_0x52693b > 127 && _0x52693b < 2048) {
          _0x3b87f3 += String.fromCharCode(_0x52693b >> 6 | 192);
          _0x3b87f3 += String.fromCharCode(_0x52693b & 63 | 128);
        } else {
          _0x3b87f3 += String.fromCharCode(_0x52693b >> 12 | 224);
          _0x3b87f3 += String.fromCharCode(_0x52693b >> 6 & 63 | 128);
          _0x3b87f3 += String.fromCharCode(_0x52693b & 63 | 128);
        }
      }
    }
    return _0x3b87f3;
  }
  function _0x1a7070(_0x23ac32) {
    var _0x3ca2f4 = _0x2c3e29 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x586e2d = "";
    for (var _0x4966fc = 0; _0x4966fc < _0x23ac32.length * 4; _0x4966fc++) {
      _0x586e2d += _0x3ca2f4.charAt(_0x23ac32[_0x4966fc >> 2] >> (3 - _0x4966fc % 4) * 8 + 4 & 15) + _0x3ca2f4.charAt(_0x23ac32[_0x4966fc >> 2] >> (3 - _0x4966fc % 4) * 8 & 15);
    }
    return _0x586e2d;
  }
  _0xc4858a = _0x8f8911(_0xc4858a);
  return _0x1a7070(_0x296169(_0x2dd588(_0xc4858a), _0xc4858a.length * _0x539dbc));
}
function David_0x28e591(_0x5acb2f) {
  function _0x2d2942(_0x1208f0, _0x57601d) {
    var _0xbbf2f0 = _0x1208f0 << _0x57601d | _0x1208f0 >>> 32 - _0x57601d;
    return _0xbbf2f0;
  }
  function _0xf4f26c(_0x8455a1) {
    var _0x129cf3 = "";
    var _0x1dca4b;
    var _0x1f8004;
    var _0x402372;
    for (_0x1dca4b = 0; _0x1dca4b <= 6; _0x1dca4b += 2) {
      _0x1f8004 = _0x8455a1 >>> _0x1dca4b * 4 + 4 & 15;
      _0x402372 = _0x8455a1 >>> _0x1dca4b * 4 & 15;
      _0x129cf3 += _0x1f8004.toString(16) + _0x402372.toString(16);
    }
    return _0x129cf3;
  }
  function _0x11316d(_0x1ee491) {
    var _0x45fe19 = "";
    var _0x3bbabb;
    var _0x265c2e;
    for (_0x3bbabb = 7; _0x3bbabb >= 0; _0x3bbabb--) {
      _0x265c2e = _0x1ee491 >>> _0x3bbabb * 4 & 15;
      _0x45fe19 += _0x265c2e.toString(16);
    }
    return _0x45fe19;
  }
  function _0x2698dd(_0x554869) {
    _0x554869 = _0x554869.replace(/\r\n/g, "\n");
    var _0x24cc80 = "";
    for (var _0x5ae269 = 0; _0x5ae269 < _0x554869.length; _0x5ae269++) {
      var _0x532526 = _0x554869.charCodeAt(_0x5ae269);
      if (_0x532526 < 128) {
        _0x24cc80 += String.fromCharCode(_0x532526);
      } else {
        if (_0x532526 > 127 && _0x532526 < 2048) {
          _0x24cc80 += String.fromCharCode(_0x532526 >> 6 | 192);
          _0x24cc80 += String.fromCharCode(_0x532526 & 63 | 128);
        } else {
          _0x24cc80 += String.fromCharCode(_0x532526 >> 12 | 224);
          _0x24cc80 += String.fromCharCode(_0x532526 >> 6 & 63 | 128);
          _0x24cc80 += String.fromCharCode(_0x532526 & 63 | 128);
        }
      }
    }
    return _0x24cc80;
  }
  var _0x53277a;
  var _0x2fa4bb, _0x4cc8bb;
  var _0x44c5f8 = new Array(80);
  var _0x1b5e13 = 1732584193;
  var _0xe4a79f = 4023233417;
  var _0x2323d6 = 2562383102;
  var _0x596505 = 271733878;
  var _0x3623de = 3285377520;
  var _0x537cf5, _0x5db1c7, _0x4752fd, _0xc7dddc, _0x4fbc00;
  _0x5acb2f = _0x2698dd(_0x5acb2f);
  var _0x53ceb1 = _0x5acb2f.length;
  var _0x41db0c = new Array();
  for (_0x2fa4bb = 0; _0x2fa4bb < _0x53ceb1 - 3; _0x2fa4bb += 4) {
    _0x4cc8bb = _0x5acb2f.charCodeAt(_0x2fa4bb) << 24 | _0x5acb2f.charCodeAt(_0x2fa4bb + 1) << 16 | _0x5acb2f.charCodeAt(_0x2fa4bb + 2) << 8 | _0x5acb2f.charCodeAt(_0x2fa4bb + 3);
    _0x41db0c.push(_0x4cc8bb);
  }
  switch (_0x53ceb1 % 4) {
    case 0:
      _0x2fa4bb = 2147483648;
      break;
    case 1:
      _0x2fa4bb = _0x5acb2f.charCodeAt(_0x53ceb1 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x2fa4bb = _0x5acb2f.charCodeAt(_0x53ceb1 - 2) << 24 | _0x5acb2f.charCodeAt(_0x53ceb1 - 1) << 16 | 32768;
      break;
    case 3:
      _0x2fa4bb = _0x5acb2f.charCodeAt(_0x53ceb1 - 3) << 24 | _0x5acb2f.charCodeAt(_0x53ceb1 - 2) << 16 | _0x5acb2f.charCodeAt(_0x53ceb1 - 1) << 8 | 128;
      break;
  }
  _0x41db0c.push(_0x2fa4bb);
  while (_0x41db0c.length % 16 != 14) {
    _0x41db0c.push(0);
  }
  _0x41db0c.push(_0x53ceb1 >>> 29);
  _0x41db0c.push(_0x53ceb1 << 3 & 4294967295);
  for (_0x53277a = 0; _0x53277a < _0x41db0c.length; _0x53277a += 16) {
    for (_0x2fa4bb = 0; _0x2fa4bb < 16; _0x2fa4bb++) {
      _0x44c5f8[_0x2fa4bb] = _0x41db0c[_0x53277a + _0x2fa4bb];
    }
    for (_0x2fa4bb = 16; _0x2fa4bb <= 79; _0x2fa4bb++) {
      _0x44c5f8[_0x2fa4bb] = _0x2d2942(_0x44c5f8[_0x2fa4bb - 3] ^ _0x44c5f8[_0x2fa4bb - 8] ^ _0x44c5f8[_0x2fa4bb - 14] ^ _0x44c5f8[_0x2fa4bb - 16], 1);
    }
    _0x537cf5 = _0x1b5e13;
    _0x5db1c7 = _0xe4a79f;
    _0x4752fd = _0x2323d6;
    _0xc7dddc = _0x596505;
    _0x4fbc00 = _0x3623de;
    for (_0x2fa4bb = 0; _0x2fa4bb <= 19; _0x2fa4bb++) {
      _0xa277ea = _0x2d2942(_0x537cf5, 5) + (_0x5db1c7 & _0x4752fd | ~_0x5db1c7 & _0xc7dddc) + _0x4fbc00 + _0x44c5f8[_0x2fa4bb] + 1518500249 & 4294967295;
      _0x4fbc00 = _0xc7dddc;
      _0xc7dddc = _0x4752fd;
      _0x4752fd = _0x2d2942(_0x5db1c7, 30);
      _0x5db1c7 = _0x537cf5;
      _0x537cf5 = _0xa277ea;
    }
    for (_0x2fa4bb = 20; _0x2fa4bb <= 39; _0x2fa4bb++) {
      _0xa277ea = _0x2d2942(_0x537cf5, 5) + (_0x5db1c7 ^ _0x4752fd ^ _0xc7dddc) + _0x4fbc00 + _0x44c5f8[_0x2fa4bb] + 1859775393 & 4294967295;
      _0x4fbc00 = _0xc7dddc;
      _0xc7dddc = _0x4752fd;
      _0x4752fd = _0x2d2942(_0x5db1c7, 30);
      _0x5db1c7 = _0x537cf5;
      _0x537cf5 = _0xa277ea;
    }
    for (_0x2fa4bb = 40; _0x2fa4bb <= 59; _0x2fa4bb++) {
      _0xa277ea = _0x2d2942(_0x537cf5, 5) + (_0x5db1c7 & _0x4752fd | _0x5db1c7 & _0xc7dddc | _0x4752fd & _0xc7dddc) + _0x4fbc00 + _0x44c5f8[_0x2fa4bb] + 2400959708 & 4294967295;
      _0x4fbc00 = _0xc7dddc;
      _0xc7dddc = _0x4752fd;
      _0x4752fd = _0x2d2942(_0x5db1c7, 30);
      _0x5db1c7 = _0x537cf5;
      _0x537cf5 = _0xa277ea;
    }
    for (_0x2fa4bb = 60; _0x2fa4bb <= 79; _0x2fa4bb++) {
      _0xa277ea = _0x2d2942(_0x537cf5, 5) + (_0x5db1c7 ^ _0x4752fd ^ _0xc7dddc) + _0x4fbc00 + _0x44c5f8[_0x2fa4bb] + 3395469782 & 4294967295;
      _0x4fbc00 = _0xc7dddc;
      _0xc7dddc = _0x4752fd;
      _0x4752fd = _0x2d2942(_0x5db1c7, 30);
      _0x5db1c7 = _0x537cf5;
      _0x537cf5 = _0xa277ea;
    }
    _0x1b5e13 = _0x1b5e13 + _0x537cf5 & 4294967295;
    _0xe4a79f = _0xe4a79f + _0x5db1c7 & 4294967295;
    _0x2323d6 = _0x2323d6 + _0x4752fd & 4294967295;
    _0x596505 = _0x596505 + _0xc7dddc & 4294967295;
    _0x3623de = _0x3623de + _0x4fbc00 & 4294967295;
  }
  var _0xa277ea = _0x11316d(_0x1b5e13) + _0x11316d(_0xe4a79f) + _0x11316d(_0x2323d6) + _0x11316d(_0x596505) + _0x11316d(_0x3623de);
  return _0xa277ea.toLowerCase();
}
function David_0x40bfe8() {
  var _0x44c760 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x548c72) {
    var _0x5ba5ce = "";
    var _0x365623, _0x2ba57f, _0x332d4c, _0x111947, _0x34264f, _0x1506e2, _0x4b6f39;
    var _0x3d5b26 = 0;
    _0x548c72 = utf8Encode(_0x548c72);
    while (_0x3d5b26 < _0x548c72.length) {
      _0x365623 = _0x548c72.charCodeAt(_0x3d5b26++);
      _0x2ba57f = _0x548c72.charCodeAt(_0x3d5b26++);
      _0x332d4c = _0x548c72.charCodeAt(_0x3d5b26++);
      _0x111947 = _0x365623 >> 2;
      _0x34264f = (_0x365623 & 3) << 4 | _0x2ba57f >> 4;
      _0x1506e2 = (_0x2ba57f & 15) << 2 | _0x332d4c >> 6;
      _0x4b6f39 = _0x332d4c & 63;
      if (isNaN(_0x2ba57f)) {
        _0x1506e2 = _0x4b6f39 = 64;
      } else {
        if (isNaN(_0x332d4c)) {
          _0x4b6f39 = 64;
        }
      }
      _0x5ba5ce = _0x5ba5ce + _0x44c760.charAt(_0x111947) + _0x44c760.charAt(_0x34264f) + _0x44c760.charAt(_0x1506e2) + _0x44c760.charAt(_0x4b6f39);
    }
    return _0x5ba5ce;
  };
  this.decode = function (_0x207352) {
    var _0x457eba = "";
    var _0x3913ee, _0x1eecd5, _0xb71287;
    var _0x199db8, _0x2ebdae, _0x2292e0, _0x2cb40f;
    var _0x275f62 = 0;
    _0x207352 = _0x207352.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x275f62 < _0x207352.length) {
      _0x199db8 = _0x44c760.indexOf(_0x207352.charAt(_0x275f62++));
      _0x2ebdae = _0x44c760.indexOf(_0x207352.charAt(_0x275f62++));
      _0x2292e0 = _0x44c760.indexOf(_0x207352.charAt(_0x275f62++));
      _0x2cb40f = _0x44c760.indexOf(_0x207352.charAt(_0x275f62++));
      _0x3913ee = _0x199db8 << 2 | _0x2ebdae >> 4;
      _0x1eecd5 = (_0x2ebdae & 15) << 4 | _0x2292e0 >> 2;
      _0xb71287 = (_0x2292e0 & 3) << 6 | _0x2cb40f;
      _0x457eba = _0x457eba + String.fromCharCode(_0x3913ee);
      if (_0x2292e0 !== 64) {
        _0x457eba = _0x457eba + String.fromCharCode(_0x1eecd5);
      }
      if (_0x2cb40f !== 64) {
        _0x457eba = _0x457eba + String.fromCharCode(_0xb71287);
      }
    }
    _0x457eba = utf8Decode(_0x457eba);
    return _0x457eba;
  };
  utf8Encode = function (_0x17049c) {
    _0x17049c = _0x17049c.replace(/\r\n/g, "\n");
    var _0x49bbca = "";
    for (var _0x497be8 = 0; _0x497be8 < _0x17049c.length; _0x497be8++) {
      var _0x2c460d = _0x17049c.charCodeAt(_0x497be8);
      if (_0x2c460d < 128) {
        _0x49bbca += String.fromCharCode(_0x2c460d);
      } else {
        if (_0x2c460d > 127 && _0x2c460d < 2048) {
          _0x49bbca += String.fromCharCode(_0x2c460d >> 6 | 192);
          _0x49bbca += String.fromCharCode(_0x2c460d & 63 | 128);
        } else {
          _0x49bbca += String.fromCharCode(_0x2c460d >> 12 | 224);
          _0x49bbca += String.fromCharCode(_0x2c460d >> 6 & 63 | 128);
          _0x49bbca += String.fromCharCode(_0x2c460d & 63 | 128);
        }
      }
    }
    return _0x49bbca;
  };
  utf8Decode = function (_0x4d325f) {
    var _0x483d62 = "";
    var _0x14167a = 0;
    var _0x491da3 = 0;
    var _0x31df9c = 0;
    var _0x2c4a2c = 0;
    while (_0x14167a < _0x4d325f.length) {
      _0x491da3 = _0x4d325f.charCodeAt(_0x14167a);
      if (_0x491da3 < 128) {
        _0x483d62 += String.fromCharCode(_0x491da3);
        _0x14167a++;
      } else {
        if (_0x491da3 > 191 && _0x491da3 < 224) {
          _0x31df9c = _0x4d325f.charCodeAt(_0x14167a + 1);
          _0x483d62 += String.fromCharCode((_0x491da3 & 31) << 6 | _0x31df9c & 63);
          _0x14167a += 2;
        } else {
          _0x31df9c = _0x4d325f.charCodeAt(_0x14167a + 1);
          _0x2c4a2c = _0x4d325f.charCodeAt(_0x14167a + 2);
          _0x483d62 += String.fromCharCode((_0x491da3 & 15) << 12 | (_0x31df9c & 63) << 6 | _0x2c4a2c & 63);
          _0x14167a += 3;
        }
      }
    }
    return _0x483d62;
  };
}
function David_0x368ba8(_0x4c38d0, _0x252ad3) {
  class _0x1da212 {
    constructor(_0x4c28ec) {
      this.env = _0x4c28ec;
    }
    send(_0x258c1a, _0x43a819 = "GET") {
      _0x258c1a = typeof _0x258c1a === "string" ? {
        url: _0x258c1a
      } : _0x258c1a;
      let _0x206ae8 = this.get;
      if (_0x43a819 === "POST") {
        _0x206ae8 = this.post;
      }
      return new Promise((_0x5a8929, _0x4ab844) => {
        _0x206ae8.call(this, _0x258c1a, (_0x1a5284, _0x516f1f, _0x4cd95f) => {
          if (_0x1a5284) {
            _0x4ab844(_0x1a5284);
          } else {
            _0x5a8929(_0x516f1f);
          }
        });
      });
    }
    get(_0x4540dd) {
      return this.send.call(this.env, _0x4540dd);
    }
    post(_0x4908b1) {
      return this.send.call(this.env, _0x4908b1, "POST");
    }
  }
  return new class {
    constructor(_0x1629d7, _0x1a4891) {
      this.name = _0x1629d7;
      this.http = new _0x1da212(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1a4891);
      const _0x18d9ca = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x18d9ca);
      }
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
    toObj(_0x43046a, _0x36e76f = null) {
      try {
        return JSON.parse(_0x43046a);
      } catch {
        return _0x36e76f;
      }
    }
    toStr(_0x1ac9e5, _0x3ac1eb = null) {
      try {
        return JSON.stringify(_0x1ac9e5);
      } catch {
        return _0x3ac1eb;
      }
    }
    getjson(_0x20d0db, _0x15d04a) {
      let _0x18ad53 = _0x15d04a;
      const _0x46666b = this.getdata(_0x20d0db);
      if (_0x46666b) {
        try {
          _0x18ad53 = JSON.parse(this.getdata(_0x20d0db));
        } catch {}
      }
      return _0x18ad53;
    }
    setjson(_0x170cfb, _0x1f890b) {
      try {
        return this.setdata(JSON.stringify(_0x170cfb), _0x1f890b);
      } catch {
        return false;
      }
    }
    getScript(_0x4a8bf4) {
      return new Promise(_0x153699 => {
        const _0x48d0f9 = {
          url: _0x4a8bf4
        };
        this.get(_0x48d0f9, (_0x4026ce, _0x10c15c, _0xfab6f5) => _0x153699(_0xfab6f5));
      });
    }
    runScript(_0x4418e4, _0x9d48fa) {
      return new Promise(_0x219c2a => {
        let _0x632d78 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x632d78 = _0x632d78 ? _0x632d78.replace(/\n/g, "").trim() : _0x632d78;
        let _0x3f3fb6 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3f3fb6 = _0x3f3fb6 ? _0x3f3fb6 * 1 : 20;
        _0x3f3fb6 = _0x9d48fa && _0x9d48fa.timeout ? _0x9d48fa.timeout : _0x3f3fb6;
        const [_0x2f5203, _0x350dfc] = _0x632d78.split("@");
        const _0x206fe3 = {
          script_text: _0x4418e4,
          mock_type: "cron",
          timeout: _0x3f3fb6
        };
        const _0x477962 = {
          "X-Key": _0x2f5203,
          Accept: "*/*"
        };
        const _0x3b87ae = {
          url: "http: //" + _0x350dfc + "/v1/scripting/evaluate",
          body: _0x206fe3,
          headers: _0x477962
        };
        this.post(_0x3b87ae, (_0x46eb94, _0x1e2eee, _0xffef99) => _0x219c2a(_0xffef99));
      }).catch(_0x567b8e => this.logErr(_0x567b8e));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x462942 = this.path.resolve(this.dataFile);
        const _0x16d8d5 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x517759 = this.fs.existsSync(_0x462942);
        const _0x2324f3 = !_0x517759 && this.fs.existsSync(_0x16d8d5);
        if (_0x517759 || _0x2324f3) {
          const _0x519754 = _0x517759 ? _0x462942 : _0x16d8d5;
          try {
            return JSON.parse(this.fs.readFileSync(_0x519754));
          } catch (_0x1aec9b) {
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
        const _0x575ede = this.path.resolve(this.dataFile);
        const _0x5b5074 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x3c5724 = this.fs.existsSync(_0x575ede);
        const _0x104e0d = !_0x3c5724 && this.fs.existsSync(_0x5b5074);
        const _0x13e69c = JSON.stringify(this.data);
        if (_0x3c5724) {
          this.fs.writeFileSync(_0x575ede, _0x13e69c);
        } else {
          if (_0x104e0d) {
            this.fs.writeFileSync(_0x5b5074, _0x13e69c);
          } else {
            this.fs.writeFileSync(_0x575ede, _0x13e69c);
          }
        }
      }
    }
    lodash_get(_0x16a429, _0x927dd1, _0x4aabc7 = undefined) {
      const _0x547771 = _0x927dd1.replace(/[(d+)]/g, ".$1").split(".");
      let _0x513214 = _0x16a429;
      for (const _0x2ffc57 of _0x547771) {
        _0x513214 = Object(_0x513214)[_0x2ffc57];
        if (_0x513214 === undefined) {
          return _0x4aabc7;
        }
      }
      return _0x513214;
    }
    lodash_set(_0x44f438, _0x58ee31, _0x1c3b9b) {
      if (Object(_0x44f438) !== _0x44f438) {
        return _0x44f438;
      }
      if (!Array.isArray(_0x58ee31)) {
        _0x58ee31 = _0x58ee31.toString().match(/[^.[]]+/g) || [];
      }
      _0x58ee31.slice(0, -1).reduce((_0x20c05e, _0x3bc1ed, _0x41f8f3) => Object(_0x20c05e[_0x3bc1ed]) === _0x20c05e[_0x3bc1ed] ? _0x20c05e[_0x3bc1ed] : _0x20c05e[_0x3bc1ed] = Math.abs(_0x58ee31[_0x41f8f3 + 1]) >> 0 === +_0x58ee31[_0x41f8f3 + 1] ? [] : {}, _0x44f438)[_0x58ee31[_0x58ee31.length - 1]] = _0x1c3b9b;
      return _0x44f438;
    }
    getdata(_0x56b598) {
      let _0x1bc919 = this.getval(_0x56b598);
      if (/^@/.test(_0x56b598)) {
        const [, _0x1c83a5, _0x4233ff] = /^@(.*?).(.*?)$/.exec(_0x56b598);
        const _0x5a7f45 = _0x1c83a5 ? this.getval(_0x1c83a5) : "";
        if (_0x5a7f45) {
          try {
            const _0x6e30d4 = JSON.parse(_0x5a7f45);
            _0x1bc919 = _0x6e30d4 ? this.lodash_get(_0x6e30d4, _0x4233ff, "") : _0x1bc919;
          } catch (_0xec07f9) {
            _0x1bc919 = "";
          }
        }
      }
      return _0x1bc919;
    }
    setdata(_0x578e09, _0x51663c) {
      let _0x152491 = false;
      if (/^@/.test(_0x51663c)) {
        const [, _0x4ffc91, _0x39a1eb] = /^@(.*?).(.*?)$/.exec(_0x51663c);
        const _0x308f52 = this.getval(_0x4ffc91);
        const _0x54abd0 = _0x4ffc91 ? _0x308f52 === "null" ? null : _0x308f52 || "{}" : "{}";
        try {
          const _0xa2b184 = JSON.parse(_0x54abd0);
          this.lodash_set(_0xa2b184, _0x39a1eb, _0x578e09);
          _0x152491 = this.setval(JSON.stringify(_0xa2b184), _0x4ffc91);
        } catch (_0x14d856) {
          const _0x3f3b13 = {};
          this.lodash_set(_0x3f3b13, _0x39a1eb, _0x578e09);
          _0x152491 = this.setval(JSON.stringify(_0x3f3b13), _0x4ffc91);
        }
      } else {
        _0x152491 = this.setval(_0x578e09, _0x51663c);
      }
      return _0x152491;
    }
    getval(_0x4b419b) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x4b419b);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x4b419b);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x4b419b];
          } else {
            return this.data && this.data[_0x4b419b] || null;
          }
        }
      }
    }
    setval(_0x2e5195, _0x12daaf) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x2e5195, _0x12daaf);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x2e5195, _0x12daaf);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x12daaf] = _0x2e5195;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x12daaf] || null;
          }
        }
      }
    }
    initGotEnv(_0x4db5ca) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x4db5ca) {
        _0x4db5ca.headers = _0x4db5ca.headers ? _0x4db5ca.headers : {};
        if (undefined === _0x4db5ca.headers.Cookie && undefined === _0x4db5ca.cookieJar) {
          _0x4db5ca.cookieJar = this.ckjar;
        }
      }
    }
    get(_0xc79ffb, _0xa32572 = () => {}) {
      if (_0xc79ffb.headers) {
        delete _0xc79ffb.headers["Content-Type"];
        delete _0xc79ffb.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xc79ffb.headers = _0xc79ffb.headers || {};
          const _0x46fed9 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0xc79ffb.headers, _0x46fed9);
        }
        $httpClient.get(_0xc79ffb, (_0x2bbee4, _0x1d499f, _0x1c62b7) => {
          if (!_0x2bbee4 && _0x1d499f) {
            _0x1d499f.body = _0x1c62b7;
            _0x1d499f.statusCode = _0x1d499f.status;
          }
          _0xa32572(_0x2bbee4, _0x1d499f, _0x1c62b7);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0xc79ffb.opts = _0xc79ffb.opts || {};
            const _0x5cb1c1 = {
              hints: false
            };
            Object.assign(_0xc79ffb.opts, _0x5cb1c1);
          }
          $task.fetch(_0xc79ffb).then(_0x2e931d => {
            const {
              statusCode: _0x4e7a4c,
              statusCode,
              headers,
              body
            } = _0x2e931d;
            const _0x144e63 = {
              status: _0x4e7a4c,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0xa32572(null, _0x144e63, body);
          }, _0x7b7132 => _0xa32572(_0x7b7132));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xc79ffb);
            this.got(_0xc79ffb).on("redirect", (_0x80b72b, _0x2dc813) => {
              try {
                if (_0x80b72b.headers["set-cookie"]) {
                  const _0x1d4e18 = _0x80b72b.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x1d4e18) {
                    this.ckjar.setCookieSync(_0x1d4e18, null);
                  }
                  _0x2dc813.cookieJar = this.ckjar;
                }
              } catch (_0x4b954b) {
                this.logErr(_0x4b954b);
              }
            }).then(_0x4dd26a => {
              const {
                statusCode: _0xcbcf67,
                statusCode,
                headers,
                body
              } = _0x4dd26a;
              const _0x34c018 = {
                status: _0xcbcf67,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0xa32572(null, _0x34c018, body);
            }, _0x163cee => {
              const {
                message: _0x5e2192,
                response: _0x4f2261
              } = _0x163cee;
              _0xa32572(_0x5e2192, _0x4f2261, _0x4f2261 && _0x4f2261.body);
            });
          }
        }
      }
    }
    post(_0x137c0c, _0x50b3ba = () => {}) {
      const _0x299328 = _0x137c0c.method ? _0x137c0c.method.toLocaleLowerCase() : "post";
      if (_0x137c0c.body && _0x137c0c.headers && !_0x137c0c.headers["Content-Type"]) {
        _0x137c0c.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x137c0c.headers) {
        delete _0x137c0c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x137c0c.headers = _0x137c0c.headers || {};
          const _0x32bcd1 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x137c0c.headers, _0x32bcd1);
        }
        $httpClient[_0x299328](_0x137c0c, (_0x9b17d0, _0x4d6588, _0x23a7cc) => {
          if (!_0x9b17d0 && _0x4d6588) {
            _0x4d6588.body = _0x23a7cc;
            _0x4d6588.statusCode = _0x4d6588.status;
          }
          _0x50b3ba(_0x9b17d0, _0x4d6588, _0x23a7cc);
        });
      } else {
        if (this.isQuanX()) {
          _0x137c0c.method = _0x299328;
          if (this.isNeedRewrite) {
            _0x137c0c.opts = _0x137c0c.opts || {};
            const _0x32d999 = {
              hints: false
            };
            Object.assign(_0x137c0c.opts, _0x32d999);
          }
          $task.fetch(_0x137c0c).then(_0x41afda => {
            const {
              statusCode: _0x3d1629,
              statusCode,
              headers,
              body
            } = _0x41afda;
            const _0x428610 = {
              status: _0x3d1629,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x50b3ba(null, _0x428610, body);
          }, _0x3d692d => _0x50b3ba(_0x3d692d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x137c0c);
            const {
              url,
              ..._0x37abd9
            } = _0x137c0c;
            this.got[_0x299328](url, _0x37abd9).then(_0x51ad57 => {
              const {
                statusCode: _0x5be2b4,
                statusCode,
                headers,
                body
              } = _0x51ad57;
              const _0x5a65de = {
                status: _0x5be2b4,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x50b3ba(null, _0x5a65de, body);
            }, _0x4ed09a => {
              const {
                message: _0x38de9a,
                response: _0x31d845
              } = _0x4ed09a;
              _0x50b3ba(_0x38de9a, _0x31d845, _0x31d845 && _0x31d845.body);
            });
          }
        }
      }
    }
    put(_0x593bfb, _0x5d3cc8 = () => {}) {
      const _0x2c4d32 = _0x593bfb.method ? _0x593bfb.method.toLocaleLowerCase() : "put";
      if (_0x593bfb.body && _0x593bfb.headers && !_0x593bfb.headers["Content-Type"]) {
        _0x593bfb.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x593bfb.headers) {
        delete _0x593bfb.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x593bfb.headers = _0x593bfb.headers || {};
          const _0x3cfd92 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x593bfb.headers, _0x3cfd92);
        }
        $httpClient[_0x2c4d32](_0x593bfb, (_0x3b1447, _0x39d81e, _0x193605) => {
          if (!_0x3b1447 && _0x39d81e) {
            _0x39d81e.body = _0x193605;
            _0x39d81e.statusCode = _0x39d81e.status;
          }
          _0x5d3cc8(_0x3b1447, _0x39d81e, _0x193605);
        });
      } else {
        if (this.isQuanX()) {
          _0x593bfb.method = _0x2c4d32;
          if (this.isNeedRewrite) {
            _0x593bfb.opts = _0x593bfb.opts || {};
            const _0x20228f = {
              hints: false
            };
            Object.assign(_0x593bfb.opts, _0x20228f);
          }
          $task.fetch(_0x593bfb).then(_0x56ffea => {
            const {
              statusCode: _0x5f4455,
              statusCode,
              headers,
              body
            } = _0x56ffea;
            const _0x269d44 = {
              status: _0x5f4455,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x5d3cc8(null, _0x269d44, body);
          }, _0x3fd600 => _0x5d3cc8(_0x3fd600));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x593bfb);
            const {
              url,
              ..._0xbbb442
            } = _0x593bfb;
            this.got[_0x2c4d32](url, _0xbbb442).then(_0x482888 => {
              const {
                statusCode: _0xaa27ea,
                statusCode,
                headers,
                body
              } = _0x482888;
              const _0x1f5eec = {
                status: _0xaa27ea,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x5d3cc8(null, _0x1f5eec, body);
            }, _0x4cf0fe => {
              const {
                message: _0x44c02b,
                response: _0x12587b
              } = _0x4cf0fe;
              _0x5d3cc8(_0x44c02b, _0x12587b, _0x12587b && _0x12587b.body);
            });
          }
        }
      }
    }
    time(_0x548d03, _0x1dec30 = null) {
      const _0x376cdb = _0x1dec30 ? new Date(_0x1dec30) : new Date();
      const _0x999e3e = {
        "M+": _0x376cdb.getMonth() + 1,
        "d+": _0x376cdb.getDate(),
        "H+": _0x376cdb.getHours(),
        "m+": _0x376cdb.getMinutes(),
        "s+": _0x376cdb.getSeconds(),
        "q+": Math.floor((_0x376cdb.getMonth() + 3) / 3),
        S: _0x376cdb.getMilliseconds()
      };
      if (/(y+)/.test(_0x548d03)) {
        _0x548d03 = _0x548d03.replace(RegExp.$1, (_0x376cdb.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x6ee41 in _0x999e3e) if (new RegExp("(" + _0x6ee41 + ")").test(_0x548d03)) {
        _0x548d03 = _0x548d03.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x999e3e[_0x6ee41] : ("00" + _0x999e3e[_0x6ee41]).substr(("" + _0x999e3e[_0x6ee41]).length));
      }
      return _0x548d03;
    }
    msg(_0xd270f5 = _0x4c38d0, _0x3b6d42 = "", _0x4095a4 = "", _0x3b994a) {
      const _0x4b4fc4 = _0x3a8698 => {
        if (!_0x3a8698) {
          return _0x3a8698;
        }
        if (typeof _0x3a8698 === "string") {
          if (this.isLoon()) {
            return _0x3a8698;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x3a8698
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x3a8698
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x3a8698 === "object") {
            if (this.isLoon()) {
              let _0x1855ff = _0x3a8698.openUrl || _0x3a8698.url || _0x3a8698["open-url"];
              let _0x5a32ed = _0x3a8698.mediaUrl || _0x3a8698["media-url"];
              const _0xee75cc = {
                openUrl: _0x1855ff,
                mediaUrl: _0x5a32ed
              };
              return _0xee75cc;
            } else {
              if (this.isQuanX()) {
                let _0xd48ef = _0x3a8698["open-url"] || _0x3a8698.url || _0x3a8698.openUrl;
                let _0x414503 = _0x3a8698["media-url"] || _0x3a8698.mediaUrl;
                const _0x987dec = {
                  "open-url": _0xd48ef,
                  "media-url": _0x414503
                };
                return _0x987dec;
              } else {
                if (this.isSurge()) {
                  let _0x41f909 = _0x3a8698.url || _0x3a8698.openUrl || _0x3a8698["open-url"];
                  const _0x1b50b4 = {
                    url: _0x41f909
                  };
                  return _0x1b50b4;
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
          $notification.post(_0xd270f5, _0x3b6d42, _0x4095a4, _0x4b4fc4(_0x3b994a));
        } else {
          if (this.isQuanX()) {
            $notify(_0xd270f5, _0x3b6d42, _0x4095a4, _0x4b4fc4(_0x3b994a));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x320cf6 = ["", "==============📣系统通知📣=============="];
        _0x320cf6.push(_0xd270f5);
        _0x3b6d42 ? _0x320cf6.push(_0x3b6d42) : "";
        _0x4095a4 ? _0x320cf6.push(_0x4095a4) : "";
        console.log(_0x320cf6.join("\n"));
        this.logs = this.logs.concat(_0x320cf6);
      }
    }
    log(..._0x2d50e0) {
      if (_0x2d50e0.length > 0) {
        this.logs = [...this.logs, ..._0x2d50e0];
      }
      console.log(_0x2d50e0.join(this.logSeparator));
    }
    logErr(_0x40db9d, _0x42683b) {
      const _0x25cfb3 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x25cfb3) {
        this.log("", "❗️" + this.name + ", 错误!", _0x40db9d);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x40db9d.stack);
      }
    }
    wait(_0x5160f5) {
      return new Promise(_0x3b5469 => setTimeout(_0x3b5469, _0x5160f5));
    }
    done(_0x4d11b0 = {}) {
      const _0x3242d1 = new Date().getTime();
      const _0x2fee57 = (_0x3242d1 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x2fee57 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x4d11b0);
      }
    }
  }(_0x4c38d0, _0x252ad3);
}