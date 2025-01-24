//Fri Jan 24 2025 08:31:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x17cbd6 = new David_0x356dfc("抖音极速版");
const David_0x17cb3a = "V3.0.4";
const David_0x47bedd = "dyjsbapp";
let David_0x48365b = David_0x17cbd6.getjson(David_0x47bedd, []);
const David_0x4606d0 = David_0x17cbd6.isNode() ? require("fs") : "";
const David_0x27afd1 = David_0x17cbd6.isNode() ? require("ws") : "";
const David_0xae51d4 = "david_cookies.js";
if (David_0x17cbd6.isNode() && !David_0x4606d0.existsSync(David_0xae51d4)) {
  David_0x17cbd6.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x4606d0.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0xb98232 => {});
}
const David_0xe468cc = David_0x17cbd6.isNode() ? require("http") : "";
const David_0x332fb2 = David_0x17cbd6.isNode() ? require("./sendNotify") : "";
const David_0x3c4979 = David_0x17cbd6.isNode() ? require("./david_cookies") : "";
let David_0x2a47dd = David_0x17cbd6.getdata("tguserid") || 1;
let David_0x2a33b0 = David_0x17cbd6.getdata("dyjsbactivecode") || 0;
let David_0x5eaecc = David_0x17cbd6.getval("dyjsbuserck") || 1;
let David_0x4cb173 = David_0x17cbd6.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x17cbd6.getval("apiHosts")) {
  David_0x4cb173 = David_0x17cbd6.getval("apiHosts");
}
const David_0x2db7e6 = 0;
let David_0x4ecb24 = David_0x17cbd6.getval("tz") || "1";
var David_0x2b82c3 = "";
var David_0x806753 = "";
let David_0x5e54e5 = "";
let David_0x7570f2 = [];
let David_0x2f9c4e = [];
let David_0x24f695 = [];
let David_0x48ed15 = [];
let David_0x541d26 = [];
let David_0x40f829 = [];
let David_0x44ab57 = [];
let David_0x1061f4 = "";
let David_0x920643 = [];
let David_0x4cc1b9 = "";
let David_0xe8c715 = "";
let David_0x3ef55d = "";
let David_0x1768c7 = "";
let David_0x11e384 = "";
let David_0x2bbd1a = "";
let David_0x14dc1c = "";
let David_0x66228b = 1;
let David_0x20da79 = 1;
let David_0x4098ab = 1;
let David_0x44087f = 1;
let David_0x1a8701 = "";
let David_0x46f911 = "";
let David_0xd3ad16 = 3;
let David_0x45547a = "";
if (David_0x17cbd6.isNode()) {
  if (process.env.DYJSBAPP) {
    David_0x48365b = JSON.parse(process.env.DYJSBAPP);
  } else {
    David_0x48365b = David_0x3c4979.DYJSB;
  }
  David_0x2a47dd = process.env.TGUSERID;
  David_0x2a33b0 = process.env.DYJSBACTIVECODE;
  if (process.env.APIHOST) {
    David_0x4cb173 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x4cb173 = process.env.APIHOSTS;
  }
  David_0x2b82c3 = new Date(new Date().getTime()).getHours();
  David_0x806753 = new Date(new Date().getTime()).getMinutes();
  David_0x17cbd6.log("🔔 当前环境: Node, 当前时间：" + David_0x2b82c3 + "点");
} else {
  David_0x2b82c3 = new Date().getHours();
  David_0x806753 = new Date().getMinutes();
  David_0x17cbd6.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x2b82c3 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x32760c();
  } else {
    if (!David_0x48365b) {
      David_0x17cbd6.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x17cbd6.log("📢 开始检测服务器接口状态>>>");
    let _0x3b5a78 = false;
    const _0x1e3bf0 = David_0x4cb173.split("&");
    const _0x1af2b8 = _0x1e3bf0.length;
    for (let _0x23991b = 0; _0x23991b < _0x1af2b8; _0x23991b++) {
      if (David_0x17cbd6.isNode()) {
        _0x3b5a78 = await David_0x2e51e0("" + _0x1e3bf0[_0x23991b], 2500);
      } else {
        if (David_0x17cbd6.isSurge() || David_0x17cbd6.isLoon()) {
          _0x3b5a78 = await David_0x4c79a3("" + _0x1e3bf0[_0x23991b], 2500);
        } else {
          _0x3b5a78 = await David_0x345646("" + _0x1e3bf0[_0x23991b], 2500);
        }
      }
      if (_0x3b5a78 == true) {
        David_0x4cb173 = _0x1e3bf0[_0x23991b];
        David_0x17cbd6.log("📢 接口" + (_0x23991b + 1) + "[" + _0x1e3bf0[_0x23991b] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x23991b == _0x1af2b8 - 1 && _0x3b5a78 == false) {
        David_0x17cbd6.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x17cbd6.msg(David_0x17cbd6.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x2a33b0 || !David_0x2a47dd || David_0x2a47dd == 1 || David_0x2a33b0 == 0 || David_0x2a33b0.length != 32) {
      David_0x17cbd6.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x9ddb9(David_0x47bedd, David_0x2a47dd, David_0x2a33b0);
    David_0x17cbd6.log("📢 " + David_0x11e384);
    David_0x17cbd6.log("🔔 当前脚本版本号: " + David_0x17cb3a + "，最新版本号: " + David_0x3ef55d);
    if (David_0x45547a != "") {
      let _0x402eab = new Date(David_0x45547a).getTime();
      let _0x14bab7 = new Date().getTime();
      if (_0x14bab7 > _0x402eab) {
        David_0x17cbd6.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x17cb3a < David_0x3ef55d) {
      David_0x17cbd6.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x4214a6("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0xe8c715 != true) {
      David_0x17cbd6.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x1a8701 != true) {
      David_0x17cbd6.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x4cc1b9 != true) {
      David_0x17cbd6.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x14dc1c == true) {
      David_0x17cbd6.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x17cbd6.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x45547a != "") {
      if (David_0x14dc1c == true) {
        David_0x17cbd6.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x5f060a = new Date(David_0x45547a).getTime();
        let _0x1053fd = new Date().getTime();
        if (_0x1053fd > _0x5f060a) {
          David_0x17cbd6.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x2bbd1a != true) {
        David_0x17cbd6.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        David_0x17cbd6.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (David_0x66228b > 1) {
      David_0x17cbd6.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0xd3ad16 * David_0x66228b + "个账号。");
    }
    if (David_0x20da79 > 1) {
      David_0x17cbd6.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x4098ab + "次, 已经运行了" + David_0x44087f + "次。");
    }
    if (David_0x1768c7 != true) {
      David_0x17cbd6.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x48365b.length > David_0xd3ad16 * David_0x66228b) {
      David_0x17cbd6.log("❗️ 当前用户一次最多运行" + David_0xd3ad16 * David_0x66228b + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x48365b.length == 0) {
      David_0x17cbd6.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x44087f + David_0x48365b.length > David_0x4098ab) {
      David_0x17cbd6.log("📢 一共发现了" + David_0x48365b.length + "个账号");
      David_0x17cbd6.log("❗️ 当前用户运行次数剩余" + (David_0x4098ab - David_0x44087f) + "次，还可以运行" + (David_0x4098ab - David_0x44087f) + "个账号，还需要" + (David_0x48365b.length - (David_0x4098ab - David_0x44087f)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x45547a != "") {
      David_0x17cbd6.log("📢 你的会员有效期到： " + David_0x45547a);
    }
    David_0x17cbd6.log("📢 一共发现了" + David_0x48365b.length + "个账号");
    let _0x57c5a6 = [];
    for (let _0x49f398 = 0; _0x49f398 < David_0x48365b.length; _0x49f398++) {
      _0x57c5a6.push(David_0x4c9029(_0x49f398));
      David_0x7570f2[_0x49f398] = "";
      David_0x920643[_0x49f398] = 1;
      if (David_0x17cbd6.isNode()) {
        David_0x48ed15[_0x49f398] = 0;
        await David_0x2cf3a1(_0x49f398);
      } else {
        David_0x48ed15[_0x49f398] = 1;
      }
    }
    await Promise.allSettled(_0x57c5a6).then(_0x1be25d => {
      David_0x17cbd6.log("日志整理功能如下：");
      David_0x17cbd6.log("---------------日志整理开始--------------");
      for (let _0x49272c = 0; _0x49272c < David_0x48365b.length; _0x49272c++) {
        David_0x17cbd6.log(David_0x7570f2[_0x49272c]);
        David_0x5e54e5 += David_0x7570f2[_0x49272c];
      }
      David_0x17cbd6.log("---------------日志整理结束--------------");
      David_0x4214a6(David_0x5e54e5);
    });
  }
})().catch(_0x349e8d => David_0x17cbd6.logErr(_0x349e8d)).finally(() => David_0x17cbd6.done());
async function David_0x4c9029(_0x5578f3) {
  return new Promise((_0x4b9f6b, _0x2b431d) => {
    David_0x17cbd6.log("[账号" + (_0x5578f3 + 1 < 10 ? "0" + (_0x5578f3 + 1) : _0x5578f3 + 1) + "]: 开始执行 working......");
    David_0x377b96(_0x4b9f6b, _0x5578f3);
  });
}
async function David_0x2cf3a1(_0x32063e) {
  if (David_0x17cbd6.isNode()) {
    if (David_0x541d26[_0x32063e] > 0) {
      David_0x17cbd6.log("[账号" + (_0x32063e + 1 < 10 ? "0" + (_0x32063e + 1) : _0x32063e + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0x24f695[_0x32063e] = new David_0x27afd1(David_0x4cb173.replace("http", "ws") + "/ws");
    David_0x24f695[_0x32063e].on("open", function _0x50413f() {
      David_0x17cbd6.log("[账号" + (_0x32063e + 1 < 10 ? "0" + (_0x32063e + 1) : _0x32063e + 1) + "]: 签名通道已连接");
    });
    David_0x24f695[_0x32063e].on("close", function _0x1e862f() {
      David_0x17cbd6.log("[账号" + (_0x32063e + 1 < 10 ? "0" + (_0x32063e + 1) : _0x32063e + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x24f695[_0x32063e].on("error", function _0x5effd7() {
      David_0x17cbd6.log("[账号" + (_0x32063e + 1 < 10 ? "0" + (_0x32063e + 1) : _0x32063e + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x48ed15[_0x32063e] = 1;
      David_0x541d26[_0x32063e]++;
      if (David_0x541d26[_0x32063e] <= 3) {
        David_0x2cf3a1(_0x32063e);
      }
    });
  }
}
async function David_0x377b96(_0x442e5c, _0x5a5883) {
  await David_0x17cbd6.wait(3000, 5000);
  David_0x48365b[_0x5a5883].url = David_0x48365b[_0x5a5883].url.replace(/\+/g, "");
  await David_0xb4822a(_0x5a5883);
  await David_0x18bb75(_0x5a5883);
  if (David_0x17cbd6.isNode()) {
    await David_0x24f695[_0x5a5883].close();
  }
  await David_0x236484(David_0x47bedd, David_0x2a47dd);
  _0x442e5c();
}
async function David_0x32760c() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x172f16 = $request.body;
    let _0xe2b24 = David_0x5eaecc - 1;
    if (David_0x48365b[_0xe2b24]) {
      David_0x48365b[_0xe2b24].token_body = _0x172f16;
    } else {
      const _0x37dbbd = {
        token_body: _0x172f16
      };
      David_0x48365b[_0xe2b24] = _0x37dbbd;
    }
    David_0x17cbd6.setdata(JSON.stringify(David_0x48365b, null, 2), "dyjsbapp");
    David_0x17cbd6.msg(David_0x17cbd6.name, "快音账号" + (_0xe2b24 + 1) + "Token获取成功！🎉");
  }
}
function David_0x12e3b9(_0x639391) {
  let _0x1f77ed = David_0x79bcfd();
  let _0x3ac285 = David_0x56162a();
  let _0x4b58fb = David_0x32388e(David_0x48365b[_0x639391].url);
  _0x4b58fb.ts = _0x3ac285;
  _0x4b58fb._rticket = _0x1f77ed;
  David_0x48365b[_0x639391].iid = _0x4b58fb.iid;
  David_0x48365b[_0x639391].did = _0x4b58fb.device_id;
  _0x4b58fb.version_code = "260900";
  _0x4b58fb.version_name = "26.9.0";
  _0x4b58fb.manifest_version_code = "260901";
  _0x4b58fb.update_version_code = "26909900";
  _0x4b58fb.device_platform = "android";
  _0x4b58fb.luckycat_version_name = "8.13.0-rc.3";
  _0x4b58fb.luckycat_version_code = "890100";
  delete _0x4b58fb.luckydog_base;
  delete _0x4b58fb.luckydog_data;
  delete _0x4b58fb.luckydog_token;
  delete _0x4b58fb.luckydog_sdk_version;
  delete _0x4b58fb.luckydog_api_version;
  return David_0x42ecc9(_0x4b58fb);
}
async function David_0x1180a5(_0x4feaee, _0x21d705, _0x584c51) {
  let _0xc2365d = "common";
  if (David_0x48365b[_0x4feaee].interface) {
    _0xc2365d = David_0x48365b[_0x4feaee].interface;
  }
  let _0x152262 = David_0x48365b[_0x4feaee].iid;
  let _0x34976c = David_0x48365b[_0x4feaee].did;
  let _0x117dc7 = "";
  let _0x31a5c6 = [];
  for (let _0x24bac7 in _0x584c51) {
    if (_0x24bac7 == "Content-Type" || _0x24bac7 == "Host") {
      continue;
    }
    _0x31a5c6.push(_0x24bac7.toLowerCase() + "=[" + _0x584c51[_0x24bac7] + "]");
  }
  _0x117dc7 += _0x31a5c6.join(",");
  _0x117dc7 += "";
  let _0x2749bf = _0x34976c + "@" + _0x152262 + "@" + encodeURIComponent(_0x21d705) + "@" + encodeURIComponent(_0x117dc7) + "@" + _0xc2365d;
  await David_0x2f2458(_0x4feaee, _0x2749bf);
}
async function David_0xb4822a(_0x18c24e) {
  let _0x44484 = David_0x12e3b9(_0x18c24e);
  const _0x4fb0ae = "https://api5-normal-lq.amemv.com/aweme/v1/user/profile/self/?" + _0x44484;
  let _0xf304b2 = "";
  await David_0x47ab98(_0x4fb0ae, _0xf304b2, _0x18c24e);
  if (David_0x920643[_0x18c24e] == 0) {
    David_0x17cbd6.log("[账号" + (_0x18c24e + 1 < 10 ? "0" + (_0x18c24e + 1) : _0x18c24e + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("get", David_0x40f829[_0x18c24e], David_0x3c36a2());
  let _0x5e0dbb = David_0x1061f4;
  if (_0x5e0dbb != null && _0x5e0dbb.status_code == 0) {
    David_0x17cbd6.log("[账号" + (_0x18c24e + 1 < 10 ? "0" + (_0x18c24e + 1) : _0x18c24e + 1) + "]: 用户名=> " + _0x5e0dbb.user.bind_phone);
    David_0x7570f2[_0x18c24e] += "[账号" + (_0x18c24e + 1 < 10 ? "0" + (_0x18c24e + 1) : _0x18c24e + 1) + "]: 用户名=> " + _0x5e0dbb.user.bind_phone + "\n";
    David_0x2f9c4e[_0x18c24e] = _0x5e0dbb.user.bind_phone;
  } else {
    David_0x17cbd6.log("[账号" + (_0x18c24e + 1 < 10 ? "0" + (_0x18c24e + 1) : _0x18c24e + 1) + "]: 用户信息=> " + _0x5e0dbb.err_tips);
    David_0x7570f2[_0x18c24e] += "[账号" + (_0x18c24e + 1 < 10 ? "0" + (_0x18c24e + 1) : _0x18c24e + 1) + "]: 用户信息=> " + _0x5e0dbb.err_tips + "\n";
  }
}
async function David_0x4c6c82(_0x115a37) {
  let _0x2a2d9a = David_0x12e3b9(_0x115a37);
  const _0x46d09a = "https://api5-normal-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?" + _0x2a2d9a;
  let _0x5ec970 = "{}";
  await David_0x47ab98(_0x46d09a, _0x5ec970, _0x115a37);
  if (David_0x920643[_0x115a37] == 0) {
    David_0x17cbd6.log("[账号" + (_0x115a37 + 1 < 10 ? "0" + (_0x115a37 + 1) : _0x115a37 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0x115a37], David_0x3c36a2());
  let _0x193ce8 = David_0x1061f4;
  if (_0x193ce8 != null && _0x193ce8.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0x115a37 + 1 < 10 ? "0" + (_0x115a37 + 1) : _0x115a37 + 1) + "]: 签到=> " + _0x193ce8.data.success_desc + "，获得" + _0x193ce8.data.amount + "音符");
    David_0x7570f2[_0x115a37] += "[账号" + (_0x115a37 + 1 < 10 ? "0" + (_0x115a37 + 1) : _0x115a37 + 1) + "]: 签到=> " + _0x193ce8.data.success_desc + "，获得" + _0x193ce8.data.amount + "音符\n";
  } else {
    David_0x17cbd6.log("[账号" + (_0x115a37 + 1 < 10 ? "0" + (_0x115a37 + 1) : _0x115a37 + 1) + "]: 签到=> " + _0x193ce8.err_tips);
    David_0x7570f2[_0x115a37] += "[账号" + (_0x115a37 + 1 < 10 ? "0" + (_0x115a37 + 1) : _0x115a37 + 1) + "]: 签到=> " + _0x193ce8.err_tips + "\n";
  }
}
async function David_0x18bb75(_0x6f9fec) {
  let _0x3c2c33 = David_0x12e3b9(_0x6f9fec);
  const _0x5beef9 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/page?" + _0x3c2c33;
  let _0x3e179f = "";
  await David_0x47ab98(_0x5beef9, _0x3e179f, _0x6f9fec);
  if (David_0x920643[_0x6f9fec] == 0) {
    David_0x17cbd6.log("[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("get", David_0x40f829[_0x6f9fec], David_0x3c36a2());
  let _0x4d5508 = David_0x1061f4;
  if (_0x4d5508 != null && _0x4d5508.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 音符=> " + _0x4d5508.data.income_data.amount1);
    David_0x7570f2[_0x6f9fec] += "[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 音符=> " + _0x4d5508.data.income_data.amount1 + "\n";
    David_0x17cbd6.log("[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 余额=> " + _0x4d5508.data.income_data.amount2 / 100 + "元");
    David_0x7570f2[_0x6f9fec] += "[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 余额=> " + _0x4d5508.data.income_data.amount2 / 100 + "元\n";
    David_0x17cbd6.log("[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 音符兑换方式=> " + _0x4d5508.data.income_data.exchange_type_name);
    David_0x7570f2[_0x6f9fec] += "[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 音符兑换方式=> " + _0x4d5508.data.income_data.exchange_type_name + "\n";
    if (_0x4d5508.data.income_data.amount2 / 100 >= 30) {
      await David_0x21fb8e(_0x6f9fec, 3000, David_0x2f9c4e[_0x6f9fec]);
    } else {
      if (_0x4d5508.data.income_data.amount2 / 100 >= 15 && _0x4d5508.data.income_data.amount2 / 100 < 30) {
        await David_0x21fb8e(_0x6f9fec, 1500, David_0x2f9c4e[_0x6f9fec]);
      }
    }
    let _0x2791b9 = _0x4d5508.data.task_list;
    let _0xfd77c5 = _0x2791b9.find(_0x3f6276 => _0x3f6276.key == "sign_in");
    if (_0xfd77c5 && _0xfd77c5.completed == false) {
      await David_0x4c6c82(_0x6f9fec);
    }
    let _0x5120fa = _0x2791b9.find(_0x355467 => _0x355467.key == "shopping_gold");
    if (_0x5120fa && _0x5120fa.desc.indexOf("浏览低价商品") != -1) {
      await David_0x3757d2(_0x6f9fec);
    }
    let _0x4260c1 = _0x4d5508.data.treasure_box.treasure_stats;
    if (_0x4260c1.cur_time >= _0x4260c1.next_time) {
      if (David_0x920643[_0x6f9fec] == 1) {
        await David_0x31ab0b(_0x6f9fec);
      }
    }
    let _0x11cd6b = _0x2791b9.find(_0x1a3ebd => _0x1a3ebd.key == "excitation_ad");
    if (_0x11cd6b) {
      let _0xcf0df8 = JSON.parse(_0x11cd6b.status_extra);
      let _0x4499a7 = _0xcf0df8.completed;
      if (_0x4499a7 == false) {
        if (David_0x920643[_0x6f9fec] == 1) {
          await David_0x203362(_0x6f9fec, _0x11cd6b);
        }
      }
    }
  } else {
    David_0x17cbd6.log("[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 任务中心=> " + _0x4d5508.err_tips);
    David_0x7570f2[_0x6f9fec] += "[账号" + (_0x6f9fec + 1 < 10 ? "0" + (_0x6f9fec + 1) : _0x6f9fec + 1) + "]: 任务中心=> " + _0x4d5508.err_tips + "\n";
  }
}
async function David_0x31ab0b(_0x27661f) {
  let _0x1b3837 = David_0x12e3b9(_0x27661f);
  let _0x249863 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/treasure_task?" + _0x1b3837;
  let _0x307da2 = "{}";
  await David_0x47ab98(_0x249863, _0x307da2, _0x27661f);
  if (David_0x920643[_0x27661f] == 0) {
    David_0x17cbd6.log("[账号" + (_0x27661f + 1 < 10 ? "0" + (_0x27661f + 1) : _0x27661f + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0x27661f], David_0x3c36a2());
  let _0x1f5c23 = David_0x1061f4;
  if (_0x1f5c23 != null && _0x1f5c23.err_no == 0) {
    let _0x523fc2 = _0x1f5c23.data.excitation_ad_info;
    let _0x3cc937 = _0x523fc2.ad_id;
    let _0x439b1a = _0x523fc2.req_id;
    let _0x3933da = _0x1f5c23.data.excitation_ad_info.score_amount;
    David_0x17cbd6.log("[账号" + (_0x27661f + 1 < 10 ? "0" + (_0x27661f + 1) : _0x27661f + 1) + "]: 打开宝箱=> " + _0x1f5c23.data.success_desc + "，不错哦！获得" + _0x1f5c23.data.amount + "音符 🎉");
    David_0x7570f2[_0x27661f] += "[账号" + (_0x27661f + 1 < 10 ? "0" + (_0x27661f + 1) : _0x27661f + 1) + "]: 打开宝箱=> " + _0x1f5c23.data.success_desc + "，不错哦！获得" + _0x1f5c23.data.amount + "音符 🎉\n";
    await David_0x17cbd6.wait(David_0x10b720(10000, 15000));
    await David_0x5cdb89(_0x27661f, _0x3cc937, _0x439b1a, _0x3933da);
  } else {
    David_0x17cbd6.log("[账号" + (_0x27661f + 1 < 10 ? "0" + (_0x27661f + 1) : _0x27661f + 1) + "]: 打开宝箱=> " + _0x1f5c23.err_tips);
    David_0x7570f2[_0x27661f] += "[账号" + (_0x27661f + 1 < 10 ? "0" + (_0x27661f + 1) : _0x27661f + 1) + "]: 打开宝箱=> " + _0x1f5c23.err_tips + "\n";
  }
}
async function David_0x5cdb89(_0x2c8bdc, _0x2a3c16, _0x2be969, _0x3f95c8) {
  let _0x33951f = David_0x12e3b9(_0x2c8bdc);
  const _0x249a44 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?" + _0x33951f + "&md=0";
  let _0x868669 = "{\"amount\":\"" + _0x3f95c8 + "\",\"inspire_modal_add_modal_manage\":false,\"ad_rit\":\"" + _0x2a3c16 + "\",\"ad_inspire\":\"{\"score_amount\":\"" + _0x3f95c8 + "\",\"amount\":\"" + _0x3f95c8 + "\",\"req_id\":\"" + _0x2be969 + "\"}\",\"task_key\":\"excitation_ad_treasure_box\",\"stage_score_amount\":[],\"ad_alias_position\":\"box\",\"need_reward\":true,\"finish_action\":0,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":58,\"dynamic_settings_version\":58,\"poll_settings_version\":0}";
  await David_0x47ab98(_0x249a44, _0x868669, _0x2c8bdc);
  if (David_0x920643[_0x2c8bdc] == 0) {
    David_0x17cbd6.log("[账号" + (_0x2c8bdc + 1 < 10 ? "0" + (_0x2c8bdc + 1) : _0x2c8bdc + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0x2c8bdc], David_0x3c36a2());
  let _0x1d3d22 = David_0x1061f4;
  if (_0x1d3d22 != null && _0x1d3d22.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0x2c8bdc + 1 < 10 ? "0" + (_0x2c8bdc + 1) : _0x2c8bdc + 1) + "]: 宝箱广告=> 获得" + _0x1d3d22.data.amount + "音符 🎉");
    David_0x7570f2[_0x2c8bdc] += "[账号" + (_0x2c8bdc + 1 < 10 ? "0" + (_0x2c8bdc + 1) : _0x2c8bdc + 1) + "]: 宝箱广告=> 获得" + _0x1d3d22.data.amount + "音符 🎉\n";
    let _0x266fa2 = _0x1d3d22.data.aggr_info.aggr_income_id;
    for (let _0xa236e3 = 0; _0xa236e3 < 3; _0xa236e3++) {
      await David_0x3fd72e(_0x2c8bdc, "excitation_ad_treasure_box", _0x2a3c16, _0xa236e3, _0x266fa2);
    }
  } else {
    David_0x17cbd6.log("[账号" + (_0x2c8bdc + 1 < 10 ? "0" + (_0x2c8bdc + 1) : _0x2c8bdc + 1) + "]: 宝箱广告=> " + _0x1d3d22.err_tips);
    David_0x7570f2[_0x2c8bdc] += "[账号" + (_0x2c8bdc + 1 < 10 ? "0" + (_0x2c8bdc + 1) : _0x2c8bdc + 1) + "]: 宝箱广告=> " + _0x1d3d22.err_tips + "\n";
  }
}
async function David_0x3fd72e(_0x370975, _0x13b471, _0x30132b, _0x588b37, _0x134867) {
  let _0x58bd47 = David_0x12e3b9(_0x370975);
  const _0x986e18 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=" + _0x13b471 + "&rit=" + _0x30132b + "&creator_id=12315000&one_more_round=" + _0x588b37 + "&" + _0x58bd47;
  await David_0x47ab98(_0x986e18, "", _0x370975);
  if (David_0x920643[_0x370975] == 0) {
    David_0x17cbd6.log("[账号" + (_0x370975 + 1 < 10 ? "0" + (_0x370975 + 1) : _0x370975 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("get", David_0x40f829[_0x370975], David_0x3c36a2());
  let _0x581e1b = David_0x1061f4;
  if (_0x581e1b != null && _0x581e1b.err_no == 0) {
    if (_0x581e1b.data.has_one_more == true) {
      await David_0x17cbd6.wait(David_0x10b720(10000, 15000));
      await David_0x1f5834(_0x370975, _0x13b471, _0x30132b, _0x588b37, _0x134867);
    }
  } else {
    David_0x17cbd6.log("[账号" + (_0x370975 + 1 < 10 ? "0" + (_0x370975 + 1) : _0x370975 + 1) + "]: 宝箱广告=> " + _0x581e1b.err_tips);
    David_0x7570f2[_0x370975] += "[账号" + (_0x370975 + 1 < 10 ? "0" + (_0x370975 + 1) : _0x370975 + 1) + "]: 宝箱广告=> " + _0x581e1b.err_tips + "\n";
  }
}
async function David_0x1f5834(_0x1d4ff5, _0x2c65c2, _0x28dfc2, _0x10b99f, _0x39d9e5) {
  let _0x25013a = David_0x12e3b9(_0x1d4ff5);
  const _0x285145 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?" + _0x25013a;
  const _0x49ca1b = "{\"task_key\":\"" + _0x2c65c2 + "\",\"rit\":\"" + _0x28dfc2 + "\",\"creator_id\":\"12315000\",\"one_more_round\":" + _0x10b99f + ",\"aggr_income_id\":\"" + _0x39d9e5 + "\"}";
  await David_0x47ab98(_0x285145, _0x49ca1b, _0x1d4ff5);
  if (David_0x920643[_0x1d4ff5] == 0) {
    David_0x17cbd6.log("[账号" + (_0x1d4ff5 + 1 < 10 ? "0" + (_0x1d4ff5 + 1) : _0x1d4ff5 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0x1d4ff5], David_0x3c36a2());
  let _0x53295d = David_0x1061f4;
  if (_0x53295d != null && _0x53295d.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0x1d4ff5 + 1 < 10 ? "0" + (_0x1d4ff5 + 1) : _0x1d4ff5 + 1) + "]: " + _0x53295d.data.content + "附加广告=> 获得" + _0x53295d.data.amount + "音符 🎉");
    David_0x7570f2[_0x1d4ff5] += "[账号" + (_0x1d4ff5 + 1 < 10 ? "0" + (_0x1d4ff5 + 1) : _0x1d4ff5 + 1) + "]: " + _0x53295d.data.content + "附加广告=> 获得" + _0x53295d.data.amount + "音符 🎉\n";
  } else {
    David_0x17cbd6.log("[账号" + (_0x1d4ff5 + 1 < 10 ? "0" + (_0x1d4ff5 + 1) : _0x1d4ff5 + 1) + "]: 附加广告=> " + _0x53295d.err_tips);
    David_0x7570f2[_0x1d4ff5] += "[账号" + (_0x1d4ff5 + 1 < 10 ? "0" + (_0x1d4ff5 + 1) : _0x1d4ff5 + 1) + "]: 附加广告=> " + _0x53295d.err_tips + "\n";
  }
}
async function David_0x4f1eb3(_0x7d1848, _0x694fae, _0x1afd0e, _0x41ccee, _0x105c99) {
  let _0x1c9c23 = David_0x12e3b9(_0x7d1848);
  const _0x5767b5 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/" + _0x694fae + "?" + _0x1c9c23;
  let _0x3e4be3 = "{\"amount\":\"18\",\"inspire_modal_add_modal_manage\":false,\"ad_rit\":\"" + _0x1afd0e + "\",\"ad_inspire\":\"{\"score_amount\":\"18\",\"req_id\":\"" + _0x41ccee + "\"}\",\"task_key\":\"" + _0x694fae + "\",\"stage_score_amount\":[],\"ad_alias_position\":\"task\",\"need_reward\":true,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":58,\"dynamic_settings_version\":58,\"poll_settings_version\":0}";
  await David_0x47ab98(_0x5767b5, _0x3e4be3, _0x7d1848);
  if (David_0x920643[_0x7d1848] == 0) {
    David_0x17cbd6.log("[账号" + (_0x7d1848 + 1 < 10 ? "0" + (_0x7d1848 + 1) : _0x7d1848 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0x7d1848], David_0x3c36a2());
  let _0x3dbdce = David_0x1061f4;
  if (_0x3dbdce != null && _0x3dbdce.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0x7d1848 + 1 < 10 ? "0" + (_0x7d1848 + 1) : _0x7d1848 + 1) + "]: " + _0x105c99 + "广告=> 获得" + _0x3dbdce.data.amount + "音符 🎉");
    David_0x7570f2[_0x7d1848] += "[账号" + (_0x7d1848 + 1 < 10 ? "0" + (_0x7d1848 + 1) : _0x7d1848 + 1) + "]: " + _0x105c99 + "广告=> 获得" + _0x3dbdce.data.amount + "音符 🎉\n";
    let _0x441823 = _0x3dbdce.data.aggr_info.aggr_income_id;
    for (let _0x2f718a = 0; _0x2f718a < 3; _0x2f718a++) {
      await David_0x3fd72e(_0x7d1848, "excitation_ad", _0x1afd0e, _0x2f718a, _0x441823);
    }
  } else {
    David_0x17cbd6.log("[账号" + (_0x7d1848 + 1 < 10 ? "0" + (_0x7d1848 + 1) : _0x7d1848 + 1) + "]: " + _0x105c99 + "广告=> " + _0x3dbdce.err_tips);
    David_0x7570f2[_0x7d1848] += "[账号" + (_0x7d1848 + 1 < 10 ? "0" + (_0x7d1848 + 1) : _0x7d1848 + 1) + "]: " + _0x105c99 + "广告=> " + _0x3dbdce.err_tips + "\n";
  }
}
async function David_0x203362(_0x4294d6, _0x2d2f28) {
  let _0x46fbe1 = David_0x12e3b9(_0x4294d6);
  const _0x147e43 = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/" + _0x2d2f28.key + "/detail?" + _0x46fbe1;
  let _0x5d7345 = "";
  await David_0x47ab98(_0x147e43, _0x5d7345, _0x4294d6);
  if (David_0x920643[_0x4294d6] == 0) {
    David_0x17cbd6.log("[账号" + (_0x4294d6 + 1 < 10 ? "0" + (_0x4294d6 + 1) : _0x4294d6 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("get", David_0x40f829[_0x4294d6], David_0x3c36a2());
  let _0x32763b = David_0x1061f4;
  if (_0x32763b != null && _0x32763b.err_no == 0) {
    let _0x2dc017 = JSON.parse(_0x2d2f28.status_extra);
    await David_0x4f1eb3(_0x4294d6, _0x2d2f28.key, _0x2dc017.ad_id, _0x2dc017.req_id, _0x2d2f28.name);
  } else {
    David_0x17cbd6.log("[账号" + (_0x4294d6 + 1 < 10 ? "0" + (_0x4294d6 + 1) : _0x4294d6 + 1) + "]: " + _0x2d2f28.name + "广告=> " + _0x32763b.err_tips);
    David_0x7570f2[_0x4294d6] += "[账号" + (_0x4294d6 + 1 < 10 ? "0" + (_0x4294d6 + 1) : _0x4294d6 + 1) + "]: " + _0x2d2f28.name + "广告=> " + _0x32763b.err_tips + "\n";
  }
}
async function David_0x21fb8e(_0xa11e77, _0x12489e, _0x3f3364) {
  let _0x289eb6 = David_0x12e3b9(_0xa11e77);
  const _0x3dadd9 = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/wallet/take_cash?" + _0x289eb6 + "&task_key=take_cash&md=0";
  const _0x14698b = "{\"is_auto\":false,\"take_cash_type\":3,\"cash_amount\":-" + _0x12489e + ",\"tab_type\":\"alipay\",\"name\":\"\",\"account\":\"" + _0x3f3364 + "\"}";
  await David_0x47ab98(_0x3dadd9, _0x14698b, _0xa11e77);
  if (David_0x920643[_0xa11e77] == 0) {
    David_0x17cbd6.log("[账号" + (_0xa11e77 + 1 < 10 ? "0" + (_0xa11e77 + 1) : _0xa11e77 + 1) + "]: 提现=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0xa11e77], David_0x3c36a2());
  let _0x134431 = David_0x1061f4;
  if (_0x134431 != null && _0x134431.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0xa11e77 + 1 < 10 ? "0" + (_0xa11e77 + 1) : _0xa11e77 + 1) + "]: 提现" + _0x12489e / 100 + "元=> " + _0x134431.err_tips + "，提现编号(" + _0x134431.data.take_cash_record_id + ")，请注意查收！ 🎉");
    David_0x7570f2[_0xa11e77] += "[账号" + (_0xa11e77 + 1 < 10 ? "0" + (_0xa11e77 + 1) : _0xa11e77 + 1) + "]: 提现" + _0x12489e / 100 + "元=> " + _0x134431.err_tips + "，提现编号(" + _0x134431.data.take_cash_record_id + ")，请注意查收！ 🎉\n";
  } else {
    David_0x17cbd6.log("[账号" + (_0xa11e77 + 1 < 10 ? "0" + (_0xa11e77 + 1) : _0xa11e77 + 1) + "]: 提现支付宝=> " + _0x134431.err_tips);
    David_0x7570f2[_0xa11e77] += "[账号" + (_0xa11e77 + 1 < 10 ? "0" + (_0xa11e77 + 1) : _0xa11e77 + 1) + "]: 提现支付宝=> " + _0x134431.err_tips + "\n";
  }
}
async function David_0x3757d2(_0x2acaa5) {
  let _0x20f381 = David_0x12e3b9(_0x2acaa5);
  const _0x225d00 = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&" + _0x20f381;
  let _0x5cfb7c = "{}";
  await David_0x47ab98(_0x225d00, _0x5cfb7c, _0x2acaa5);
  if (David_0x920643[_0x2acaa5] == 0) {
    David_0x17cbd6.log("[账号" + (_0x2acaa5 + 1 < 10 ? "0" + (_0x2acaa5 + 1) : _0x2acaa5 + 1) + "]: 任务中心=> 逛街服务异常，停止执行>>>");
    return;
  }
  await David_0x718a7("post", David_0x40f829[_0x2acaa5], David_0x3c36a2());
  let _0x336e7b = David_0x1061f4;
  if (_0x336e7b != null && _0x336e7b.err_no == 0) {
    David_0x17cbd6.log("[账号" + (_0x2acaa5 + 1 < 10 ? "0" + (_0x2acaa5 + 1) : _0x2acaa5 + 1) + "]: 逛街任务=> 获得" + _0x336e7b.data.amount + "音符 🎉");
    David_0x7570f2[_0x2acaa5] += "[账号" + (_0x2acaa5 + 1 < 10 ? "0" + (_0x2acaa5 + 1) : _0x2acaa5 + 1) + "]: 逛街任务=> 获得" + _0x336e7b.data.amount + "音符 🎉\n";
  } else {
    David_0x17cbd6.log("[账号" + (_0x2acaa5 + 1 < 10 ? "0" + (_0x2acaa5 + 1) : _0x2acaa5 + 1) + "]: 逛街任务=> " + _0x336e7b.err_tips);
    David_0x7570f2[_0x2acaa5] += "[账号" + (_0x2acaa5 + 1 < 10 ? "0" + (_0x2acaa5 + 1) : _0x2acaa5 + 1) + "]: 逛街任务=> " + _0x336e7b.err_tips + "\n";
  }
}
function David_0x9ddb9(_0x246251, _0x2a903e, _0x330c88) {
  return new Promise((_0x3ef238, _0x42bc50) => {
    const _0x2150e6 = David_0x4cb173 + "/script/permissions/lastest";
    const _0x42fc9c = {
      appName: _0x246251,
      userId: _0x2a903e,
      activityCode: _0x330c88,
      version: David_0x17cb3a
    };
    const _0x2e30f4 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xad7798 = {
      url: _0x2150e6,
      headers: _0x2e30f4,
      body: JSON.stringify(_0x42fc9c)
    };
    David_0x17cbd6.post(_0xad7798, async (_0x32f9ab, _0x6204ed, _0x590c26) => {
      if (_0x590c26 && _0x590c26 != null && _0x590c26.replace(/\"/g, "").length > 50) {
        const _0xb0a44c = _0x590c26.replace(/\"/g, "").slice(34);
        const _0x5ced04 = new David_0x3690d1();
        result = JSON.parse(_0x5ced04.decode(_0xb0a44c));
        try {
          David_0x3ef55d = result.version;
          David_0x4cc1b9 = result.userAuth;
          David_0xe8c715 = result.scriptAuth;
          David_0x1768c7 = result.runAuth;
          David_0x11e384 = result.notify;
          David_0x2bbd1a = result.vipAuth;
          David_0x14dc1c = result.isCharge;
          David_0x66228b = result.runAcounts;
          David_0x20da79 = result.buyCount;
          David_0x44087f = result.runedCounts;
          David_0x4098ab = result.runTotalCounts;
          David_0x1a8701 = result.userRank;
          David_0x46f911 = result.invicate;
          David_0xd3ad16 = result.accountNumbers;
          David_0x45547a = result.vipDate;
        } catch (_0x1dbe04) {
          David_0x17cbd6.log(_0x1dbe04);
        }
      } else {
        David_0x17cbd6.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x3ef238();
    });
  });
}
function David_0x236484(_0x2242bf, _0x4d5a8d) {
  return new Promise((_0xab17bb, _0x29bc81) => {
    const _0x3d447d = David_0x4cb173 + "/script/run/add";
    const _0x213e09 = {
      appName: _0x2242bf,
      userId: _0x4d5a8d,
      activityCode: David_0x2a33b0,
      version: David_0x17cb3a
    };
    const _0x363302 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x40b3d4 = {
      url: _0x3d447d,
      headers: _0x363302,
      body: JSON.stringify(_0x213e09)
    };
    David_0x17cbd6.post(_0x40b3d4, async (_0x31ef90, _0x2e0d46, _0x3c9c22) => {
      _0xab17bb();
    });
  });
}
function David_0x2e51e0(_0x43fdd5, _0x210def) {
  return new Promise((_0x1ba485, _0x47a5ff) => {
    const _0x4bd301 = setTimeout(() => {
      _0x1ba485(false);
    }, _0x210def);
    const _0x658eb1 = David_0xe468cc.get(_0x43fdd5, _0x1eef4d => {
      clearTimeout(_0x4bd301);
      if (_0x1eef4d.statusCode === 404) {
        _0x1ba485(true);
      } else {
        _0x1ba485(false);
      }
    });
    _0x658eb1.on("error", _0x5248f3 => {
      clearTimeout(_0x4bd301);
      _0x1ba485(false);
    });
    _0x658eb1.on("timeout", () => {
      _0x658eb1.abort();
      _0x47a5ff(new Error("请求超时"));
    });
  });
}
async function David_0x345646(_0x5488f3, _0x79eb6a = 3000) {
  return new Promise((_0x388992, _0x1e3b24) => {
    const _0x1c22e0 = {
      url: _0x5488f3 + "/docs"
    };
    setTimeout(() => {
      _0x388992(false);
    }, _0x79eb6a);
    David_0x17cbd6.get(_0x1c22e0, async (_0x10f45e, _0x20d827, _0x11ddc2) => {
      if (_0x20d827.status == 401) {
        _0x388992(true);
      } else {
        _0x388992(false);
      }
    });
  });
}
async function David_0x4c79a3(_0x58f5d5, _0x1df6e4 = 3000) {
  return new Promise((_0x1b8e20, _0x467d5a) => {
    const _0x6432a5 = {
      url: _0x58f5d5 + "/"
    };
    setTimeout(() => {
      _0x1b8e20(false);
    }, _0x1df6e4);
    $httpClient.get(_0x6432a5, async (_0x5b8cdb, _0x458bf7, _0x12bb02) => {
      if (_0x12bb02 == "{\"detail\":\"Not Found\"}") {
        _0x1b8e20(true);
      } else {
        _0x1b8e20(false);
      }
    });
  });
}
async function David_0x352ff3(_0x1e32f8, _0x18322d, _0x4ef4ba) {
  return new Promise((_0x299eec, _0x561715) => {
    const _0x5d599d = David_0x4cb173 + "/redis/hash/get/" + _0x18322d + "/" + _0x4ef4ba;
    const _0x48bac2 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x57facc = {
      url: _0x5d599d,
      headers: _0x48bac2
    };
    David_0x17cbd6.get(_0x57facc, async (_0x41d322, _0x5d59f4, _0x3eb420) => {
      const _0x716f2 = _0x3eb420.replace(/\"/g, "");
      answerTexts[_0x1e32f8] = _0x716f2;
      _0x299eec();
    });
  });
}
function David_0x2b7761(_0x350433, _0x40d8da, _0x2df43a) {
  return new Promise((_0x33820a, _0x5a0db9) => {
    const _0x381800 = David_0x4cb173 + "/redis/hash/set";
    const _0x350528 = {
      key: _0x350433,
      hashKey: _0x40d8da,
      hashValue: _0x2df43a
    };
    const _0x26542a = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x41dac6 = {
      url: _0x381800,
      headers: _0x26542a,
      body: JSON.stringify(_0x350528)
    };
    David_0x17cbd6.post(_0x41dac6, async (_0x285aaf, _0x291326, _0x280248) => {
      _0x33820a();
    });
  });
}
function David_0x2909b6(_0x1e4de4) {
  return new Promise((_0x4b8fe1, _0x4ad22d) => {
    const _0xf15954 = David_0x4cb173 + "/redis/set/pop/" + _0x1e4de4;
    const _0x364507 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x298cc8 = {
      url: _0xf15954,
      headers: _0x364507
    };
    David_0x17cbd6.get(_0x298cc8, async (_0x1d1312, _0x10096d, _0xcae1) => {
      const _0x8f05a3 = _0xcae1.replace(/\"/g, "");
      popCookie = _0x8f05a3;
      _0x4b8fe1();
    });
  });
}
async function David_0x47ab98(_0xbad1e0, _0x45a456, _0x569269) {
  let _0x154a2e = "com.ss.android.ugc.aweme.lite/290104 (Linux; U; Android 13; zh_CN_#Hans; Pixel 4; Build/TP1A.221005.002.B2;tt-ok/3.12.13.1)";
  if (David_0x48365b[_0x569269].ua && David_0x48365b[_0x569269].ua != "") {
    _0x154a2e = David_0x48365b[_0x569269].ua;
  }
  let _0x7f133a = David_0x421a68(_0xbad1e0);
  let _0x317531 = David_0x79bcfd();
  const _0x2d5629 = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
    "User-Agent": _0x154a2e,
    Host: _0x7f133a,
    "passport-sdk-version": "203144",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": _0x317531,
    "x-tt-store-region": "cn-ha",
    "x-tt-store-region-src": "uid",
    "X-Tt-Token": David_0x48365b[_0x569269].token,
    "x-vc-bdturing-sdk-version": "3.6.2.cn"
  };
  const _0x5d0c54 = {
    url: _0xbad1e0,
    headers: _0x2d5629
  };
  if (_0x45a456) {
    _0x5d0c54.body = _0x45a456;
    _0x5d0c54.headers["X-SS-STUB"] = David_0x28753e(_0x45a456).toUpperCase();
  }
  await David_0x1180a5(_0x569269, _0xbad1e0, _0x5d0c54.headers);
  let _0xee3a98 = David_0x44ab57[_0x569269];
  if (_0xee3a98.length < 200) {
    if (_0xee3a98.indexOf("unable to find process with name") != -1) {
      David_0x17cbd6.log("[账号" + (_0x569269 + 1 < 10 ? "0" + (_0x569269 + 1) : _0x569269 + 1) + "]: 签名获取失败原因=> 请检查签名APP是否已启动");
    } else {
      if (_0xee3a98.indexOf("unable to connect to remote frida-server") != -1) {
        David_0x17cbd6.log("[账号" + (_0x569269 + 1 < 10 ? "0" + (_0x569269 + 1) : _0x569269 + 1) + "]: 签名获取失败原因=> 请检查是否映射成功");
      } else {
        David_0x17cbd6.log("[账号" + (_0x569269 + 1 < 10 ? "0" + (_0x569269 + 1) : _0x569269 + 1) + "]: 签名获取失败原因=> " + _0xee3a98);
      }
    }
  }
  if (_0xee3a98 && _0xee3a98 != "Internal Server Error") {
    const _0x5d76c3 = David_0x407c38(_0xee3a98);
    _0x5d0c54.headers["X-Argus"] = _0x5d76c3["X-Argus"];
    _0x5d0c54.headers["X-Gorgon"] = _0x5d76c3["X-Gorgon"];
    if (_0x5d76c3["X-Gorgon"] == undefined) {
      David_0x920643[_0x569269] = 0;
    }
    _0x5d0c54.headers["X-Helios"] = _0x5d76c3["X-Helios"];
    _0x5d0c54.headers["X-Khronos"] = _0x5d76c3["X-Khronos"];
    _0x5d0c54.headers["X-Ladon"] = _0x5d76c3["X-Ladon"];
    _0x5d0c54.headers["X-Medusa"] = _0x5d76c3["X-Medusa"];
    let _0x7dc98d = David_0x48365b[_0x569269].token.substring(2, 34);
    _0x5d0c54.headers.Cookie = "sessionid=" + _0x7dc98d + "; sessionid_ss=" + _0x7dc98d;
  } else {
    David_0x920643[_0x569269] = 0;
  }
  David_0x40f829[_0x569269] = _0x5d0c54;
  return _0x5d0c54;
}
function David_0x96fe98(_0x25c8e9, _0x4a7881, _0x324989) {
  let _0x442dce = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (David_0x48365b[_0x324989].ua && David_0x48365b[_0x324989].ua != "") {
    _0x442dce = David_0x48365b[_0x324989].ua;
  }
  let _0x2267ce = David_0x421a68(_0x25c8e9);
  const _0xba1ebb = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x442dce,
    Authorization: David_0x48365b[_0x324989].auth,
    Host: _0x2267ce
  };
  const _0x5017d7 = {
    url: _0x25c8e9,
    headers: _0xba1ebb
  };
  if (_0x4a7881) {
    _0x5017d7.body = _0x4a7881;
  }
  David_0x40f829[_0x324989] = _0x5017d7;
  return _0x5017d7;
}
async function David_0x718a7(_0x59c4e0, _0x441f5b, _0x3d1743) {
  David_0x1061f4 = null;
  return new Promise(_0x180ee4 => {
    David_0x17cbd6[_0x59c4e0](_0x441f5b, async (_0x3bb711, _0x2092a6, _0x3fd270) => {
      try {
        if (_0x3bb711) {
          David_0x17cbd6.log(_0x3d1743 + ": " + _0x59c4e0 + "请求失败");
          David_0x17cbd6.log(JSON.stringify(_0x3bb711));
          David_0x17cbd6.logErr(_0x3bb711);
        } else {
          if (David_0x43d90f(_0x3fd270)) {
            David_0x1061f4 = JSON.parse(_0x3fd270);
          } else {
            const _0x30c27d = new URL(_0x441f5b.url);
            David_0x17cbd6.log(_0x30c27d.pathname + "发起" + _0x59c4e0 + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x51076a) {
        David_0x17cbd6.logErr(_0x51076a, _0x2092a6);
      } finally {
        _0x180ee4(David_0x1061f4);
      }
    });
  });
}
async function David_0x2f2458(_0x4329cb, _0x234f2c) {
  if (David_0x48ed15[_0x4329cb] == 0) {
    await David_0x5c3295(_0x4329cb, _0x234f2c);
  } else {
    await David_0x50c3e4(_0x4329cb, _0x234f2c);
  }
}
function David_0x5c3295(_0x1ed275, _0x37a690) {
  return new Promise((_0x28fe90, _0x484403) => {
    function _0x48cd2c(_0x2d938d) {
      let _0x3ffd1e = _0x2d938d.toString("utf8");
      David_0x44ab57[_0x1ed275] = _0x3ffd1e;
      David_0x24f695[_0x1ed275].removeListener("message", _0x48cd2c);
      _0x28fe90(_0x3ffd1e);
    }
    David_0x24f695[_0x1ed275].on("message", _0x48cd2c);
    if (David_0x24f695[_0x1ed275].readyState === 1) {
      const _0x14490e = {
        method: David_0x47bedd,
        params: {}
      };
      _0x14490e.params.content = _0x37a690;
      _0x14490e.params.appName = David_0x47bedd;
      _0x14490e.params.uuid = David_0x2a47dd;
      David_0x24f695[_0x1ed275].send(JSON.stringify(_0x14490e), _0x1ecbb9 => {
        if (_0x1ecbb9) {
          _0x484403(_0x1ecbb9);
        }
      });
    } else {
      _0x28fe90(David_0x50c3e4(_0x1ed275, _0x37a690));
      David_0x24f695[_0x1ed275].removeListener("message", _0x48cd2c);
    }
  });
}
function David_0x50c3e4(_0xc895fd, _0x2c115d) {
  return new Promise((_0x57f0f8, _0x21ea70) => {
    const _0x44d213 = David_0x4cb173 + "/sign/dyjsb/six";
    const _0x3a4d33 = {
      content: _0x2c115d,
      appName: David_0x47bedd,
      uuid: David_0x2a47dd
    };
    const _0x12211b = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x18b100 = {
      url: _0x44d213,
      headers: _0x12211b,
      body: JSON.stringify(_0x3a4d33)
    };
    David_0x17cbd6.post(_0x18b100, async (_0x4b305d, _0x1eece2, _0x147aae) => {
      const _0x1c3f7a = _0x147aae.replace(/\"/g, "");
      David_0x44ab57[_0xc895fd] = _0x1c3f7a;
      _0x57f0f8();
    });
  });
}
function David_0x5a7465(_0x3c02ae, _0x1fa924, _0x35e7b0) {
  const _0x275422 = David_0x32388e(_0x3c02ae);
  _0x1fa924.forEach(_0x8d236d => {
    delete _0x275422[_0x8d236d];
  });
  Object.assign(_0x275422, _0x35e7b0);
  const _0x48f557 = Object.keys(_0x275422).sort();
  const _0x46da30 = _0x48f557.map(_0x39835b => _0x39835b + "=" + _0x275422[_0x39835b]).join("&");
  return _0x46da30;
}
function David_0x32388e(_0x280486) {
  _0x280486 = _0x280486.replace(/\"/g, "");
  var _0x4a6569;
  var _0x1ad433 = {};
  var _0x5c7815 = _0x280486.slice(_0x280486.indexOf("?") + 1).split("&");
  for (var _0x55a539 = 0; _0x55a539 < _0x5c7815.length; _0x55a539++) {
    _0x4a6569 = _0x5c7815[_0x55a539].split("=");
    _0x1ad433[_0x4a6569[0]] = _0x4a6569[1];
  }
  return _0x1ad433;
}
function David_0x407c38(_0x1bce65) {
  const _0x359cac = _0x1bce65.replace(/[{} ]/g, "");
  const _0x7d0c2d = _0x359cac.split(",");
  const _0x174fb2 = {};
  _0x7d0c2d.forEach(_0x4651d8 => {
    const _0x32764d = _0x4651d8.split(/=(.*)/);
    const [_0x92e189, _0x5804d8] = _0x32764d;
    _0x174fb2[_0x92e189] = _0x5804d8;
  });
  return _0x174fb2;
}
function David_0x421a68(_0x2e6e77) {
  let _0x315d48 = _0x2e6e77.substr(_0x2e6e77.indexOf("//") + 2);
  let _0x37256e = _0x315d48.substr(0, _0x315d48.indexOf("/"));
  let _0x1a0db6 = "";
  let _0x1c8b3d = _0x37256e.indexOf(":");
  if (_0x1c8b3d > 0) {
    _0x1a0db6 = _0x37256e.substr(0, _0x1c8b3d);
  } else {
    _0x1a0db6 = _0x37256e;
  }
  return _0x1a0db6;
}
function David_0x20b876(_0x3aa985, _0x10d775) {
  var _0x9f9011 = new Date(_0x3aa985);
  var _0x5873e6 = new Date(_0x10d775);
  var _0x299872 = _0x5873e6 - _0x9f9011;
  var _0x811996 = Math.floor(_0x299872 / 1000);
  return _0x811996;
}
function David_0x3cc065(_0x582293, _0x4fb9fe) {
  if (_0x582293.length * 2 <= _0x4fb9fe) {
    return _0x582293;
  }
  var _0x318527 = 0;
  var _0x4c6051 = "";
  for (var _0x2d0090 = 0; _0x2d0090 < _0x582293.length; _0x2d0090++) {
    _0x4c6051 = _0x4c6051 + _0x582293.charAt(_0x2d0090);
    if (_0x582293.charCodeAt(_0x2d0090) > 128) {
      _0x318527 = _0x318527 + 2;
      if (_0x318527 >= _0x4fb9fe) {
        return _0x4c6051.substring(0, _0x4c6051.length - 1) + "...";
      }
    } else {
      _0x318527 = _0x318527 + 1;
      if (_0x318527 >= _0x4fb9fe) {
        return _0x4c6051.substring(0, _0x4c6051.length - 2) + "...";
      }
    }
  }
  return _0x4c6051;
}
function David_0x3c36a2() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x43d90f(_0x451cc8) {
  try {
    if (typeof JSON.parse(_0x451cc8) == "object") {
      return true;
    }
  } catch (_0x36fd6b) {
    console.log(_0x36fd6b);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x42ecc9(_0x32714c) {
  var _0xe6ad83 = Object.keys(_0x32714c).map(function (_0x4b40aa) {
    return encodeURIComponent(_0x4b40aa) + "=" + encodeURIComponent(_0x32714c[_0x4b40aa]);
  }).join("&");
  return _0xe6ad83;
}
function David_0x2c0fd4(_0x3e57ad) {
  var _0x118006 = String.fromCharCode(_0x3e57ad.charCodeAt(0) + _0x3e57ad.length);
  for (var _0x391307 = 1; _0x391307 < _0x3e57ad.length; _0x391307++) {
    _0x118006 += String.fromCharCode(_0x3e57ad.charCodeAt(_0x391307) + _0x3e57ad.charCodeAt(_0x391307 - 1));
  }
  return escape(_0x118006);
}
function David_0x3e8ddf(_0x5ca6fd) {
  _0x5ca6fd = unescape(_0x5ca6fd);
  var _0x325bb2 = String.fromCharCode(_0x5ca6fd.charCodeAt(0) - _0x5ca6fd.length);
  for (var _0x27118e = 1; _0x27118e < _0x5ca6fd.length; _0x27118e++) {
    _0x325bb2 += String.fromCharCode(_0x5ca6fd.charCodeAt(_0x27118e) - _0x325bb2.charCodeAt(_0x27118e - 1));
  }
  return _0x325bb2;
}
function David_0x10b720(_0x2610e3, _0x2e8d35) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x2610e3 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x2e8d35 - _0x2610e3 + 1) + _0x2610e3);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x1164b0() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x375a28() {
  function _0x43b211() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x43b211() + _0x43b211() + "-" + _0x43b211() + "-" + _0x43b211() + "-" + _0x43b211() + "-" + _0x43b211() + _0x43b211() + _0x43b211();
}
function David_0x1b8070(_0x3c0665) {
  if (_0x3c0665.length == 11) {
    let _0x192dc9 = _0x3c0665.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x192dc9;
  } else {
    return _0x3c0665;
  }
}
function David_0x34fd77(_0x13be1a) {
  return new Promise((_0x3413a5, _0x52128e) => {
    const _0x236f20 = "https://v1.hitokoto.cn/?c=e";
    const _0x2cb746 = {
      accept: "application/json"
    };
    const _0x35a133 = {
      url: _0x236f20,
      headers: _0x2cb746
    };
    David_0x17cbd6.get(_0x35a133, async (_0xbc711f, _0x35ed9b, _0x29d470) => {
      let _0x1f95f2 = JSON.parse(_0x29d470);
      let _0x2da53e = _0x1f95f2.hitokoto;
      contents[_0x13be1a] = _0x2da53e + " " + _0x2da53e;
      _0x3413a5();
    });
  });
}
function David_0x29ae2d() {
  return new Promise((_0x2ae6b9, _0x881c7a) => {
    const _0x5c7476 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x5b9dea = {
      url: _0x5c7476
    };
    David_0x17cbd6.get(_0x5b9dea, async (_0x4f1d55, _0x30f9ca, _0x1975bd) => {
      _0x2ae6b9(_0x1975bd);
    });
  });
}
function David_0x79bcfd() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x56162a() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x4d2460() {
  if (David_0x4ecb24 == 1) {
    David_0x17cbd6.msg(David_0x17cbd6.name, "", David_0x17cbd6.message);
  }
}
async function David_0x4214a6(_0x5da6e2) {
  if (David_0x2b82c3 == 9 || David_0x2b82c3 == 12 || David_0x2b82c3 == 18) {
    if (David_0x4ecb24 == 1) {
      if (David_0x17cbd6.isNode()) {
        await David_0x332fb2.sendNotify(David_0x17cbd6.name, _0x5da6e2);
      } else {
        David_0x17cbd6.msg(David_0x17cbd6.name, "", _0x5da6e2);
      }
    } else {
      David_0x17cbd6.log(_0x5da6e2);
    }
  }
}
async function David_0x2e96f8(_0x56d35b, _0x1ac586, _0x3ba498) {
  return new Promise((_0x412a31, _0x48b7c9) => {
    const _0x107f88 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x26f715 = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x1ac586,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x3ba498],
      verifyPay: false
    };
    const _0x5323f1 = {
      "Content-Type": "application/json"
    };
    const _0x4f9dff = {
      url: _0x107f88,
      headers: _0x5323f1,
      body: JSON.stringify(_0x26f715)
    };
    David_0x17cbd6.post(_0x4f9dff, async (_0xed9de, _0x4f9960, _0x27bdd2) => {
      _0x412a31();
    });
  });
}
function David_0x505528(_0x31d47e, _0x5f0bcb) {
  _0x5f0bcb = _0x5f0bcb || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x1dd6cb = "";
  for (let _0x3ab3d1 = 0; _0x3ab3d1 < _0x31d47e; _0x3ab3d1++) {
    let _0x4f2f68 = Math.floor(Math.random() * _0x5f0bcb.length);
    _0x1dd6cb += _0x5f0bcb.substring(_0x4f2f68, _0x4f2f68 + 1);
  }
  return _0x1dd6cb;
}
function David_0x28753e(_0xd8f5c7) {
  function _0x5a1988(_0x386cde, _0x1fd2be) {
    return _0x386cde << _0x1fd2be | _0x386cde >>> 32 - _0x1fd2be;
  }
  function _0x2c1af1(_0x55f3d1, _0x2188b7) {
    var _0x4fd6ff, _0x1c8f77, _0x49d641, _0x4c25a5, _0x198c86;
    _0x49d641 = 2147483648 & _0x55f3d1;
    _0x4c25a5 = 2147483648 & _0x2188b7;
    _0x4fd6ff = 1073741824 & _0x55f3d1;
    _0x1c8f77 = 1073741824 & _0x2188b7;
    _0x198c86 = (1073741823 & _0x55f3d1) + (1073741823 & _0x2188b7);
    return _0x4fd6ff & _0x1c8f77 ? 2147483648 ^ _0x198c86 ^ _0x49d641 ^ _0x4c25a5 : _0x4fd6ff | _0x1c8f77 ? 1073741824 & _0x198c86 ? 3221225472 ^ _0x198c86 ^ _0x49d641 ^ _0x4c25a5 : 1073741824 ^ _0x198c86 ^ _0x49d641 ^ _0x4c25a5 : _0x198c86 ^ _0x49d641 ^ _0x4c25a5;
  }
  function _0x10d201(_0x1b3a85, _0x3c6b43, _0x28f610) {
    return _0x1b3a85 & _0x3c6b43 | ~_0x1b3a85 & _0x28f610;
  }
  function _0x3647d4(_0x58ed61, _0x430f6f, _0x343e34) {
    return _0x58ed61 & _0x343e34 | _0x430f6f & ~_0x343e34;
  }
  function _0x215967(_0x4eea77, _0x3ef1f8, _0x1be023) {
    return _0x4eea77 ^ _0x3ef1f8 ^ _0x1be023;
  }
  function _0x206695(_0x401eb9, _0x9bff0b, _0x5a06f9) {
    return _0x9bff0b ^ (_0x401eb9 | ~_0x5a06f9);
  }
  function _0x5218e9(_0x206740, _0x4089eb, _0x3c7073, _0x119bf0, _0x5125f1, _0x4681a3, _0x42b3a8) {
    _0x206740 = _0x2c1af1(_0x206740, _0x2c1af1(_0x2c1af1(_0x10d201(_0x4089eb, _0x3c7073, _0x119bf0), _0x5125f1), _0x42b3a8));
    return _0x2c1af1(_0x5a1988(_0x206740, _0x4681a3), _0x4089eb);
  }
  function _0x22eda1(_0x271240, _0x121a5b, _0xb8675d, _0x456e6f, _0x21f61e, _0x27f092, _0x284337) {
    _0x271240 = _0x2c1af1(_0x271240, _0x2c1af1(_0x2c1af1(_0x3647d4(_0x121a5b, _0xb8675d, _0x456e6f), _0x21f61e), _0x284337));
    return _0x2c1af1(_0x5a1988(_0x271240, _0x27f092), _0x121a5b);
  }
  function _0x28a862(_0x4a6e19, _0x26481d, _0x540e03, _0x14bf0b, _0x3ccad9, _0x271890, _0x35feaa) {
    _0x4a6e19 = _0x2c1af1(_0x4a6e19, _0x2c1af1(_0x2c1af1(_0x215967(_0x26481d, _0x540e03, _0x14bf0b), _0x3ccad9), _0x35feaa));
    return _0x2c1af1(_0x5a1988(_0x4a6e19, _0x271890), _0x26481d);
  }
  function _0x544108(_0x29732d, _0x97fa8f, _0x4f0bcc, _0x177306, _0x3fd86a, _0x22ea5d, _0x3d9e72) {
    _0x29732d = _0x2c1af1(_0x29732d, _0x2c1af1(_0x2c1af1(_0x206695(_0x97fa8f, _0x4f0bcc, _0x177306), _0x3fd86a), _0x3d9e72));
    return _0x2c1af1(_0x5a1988(_0x29732d, _0x22ea5d), _0x97fa8f);
  }
  function _0x37a595(_0x592b80) {
    for (var _0xb3f68, _0x3439d7 = _0x592b80.length, _0x5ae9a9 = _0x3439d7 + 8, _0x11dc09 = (_0x5ae9a9 - _0x5ae9a9 % 64) / 64, _0x3898df = 16 * (_0x11dc09 + 1), _0x31db67 = new Array(_0x3898df - 1), _0x513bad = 0, _0x5add36 = 0; _0x3439d7 > _0x5add36;) {
      _0xb3f68 = (_0x5add36 - _0x5add36 % 4) / 4;
      _0x513bad = _0x5add36 % 4 * 8;
      _0x31db67[_0xb3f68] = _0x31db67[_0xb3f68] | _0x592b80.charCodeAt(_0x5add36) << _0x513bad;
      _0x5add36++;
    }
    _0xb3f68 = (_0x5add36 - _0x5add36 % 4) / 4;
    _0x513bad = _0x5add36 % 4 * 8;
    _0x31db67[_0xb3f68] = _0x31db67[_0xb3f68] | 128 << _0x513bad;
    _0x31db67[_0x3898df - 2] = _0x3439d7 << 3;
    _0x31db67[_0x3898df - 1] = _0x3439d7 >>> 29;
    return _0x31db67;
  }
  function _0x12a418(_0xecdf24) {
    var _0x3a937d,
      _0x210c41,
      _0x35baab = "",
      _0x26ef3e = "";
    for (_0x210c41 = 0; 3 >= _0x210c41; _0x210c41++) {
      _0x3a937d = _0xecdf24 >>> 8 * _0x210c41 & 255;
      _0x26ef3e = "0" + _0x3a937d.toString(16);
      _0x35baab += _0x26ef3e.substr(_0x26ef3e.length - 2, 2);
    }
    return _0x35baab;
  }
  function _0x1c3500(_0x33a8ae) {
    _0x33a8ae = _0x33a8ae.replace(/\r\n/g, "\n");
    for (var _0x123f96 = "", _0x3d5c12 = 0; _0x3d5c12 < _0x33a8ae.length; _0x3d5c12++) {
      var _0x241981 = _0x33a8ae.charCodeAt(_0x3d5c12);
      128 > _0x241981 ? _0x123f96 += String.fromCharCode(_0x241981) : _0x241981 > 127 && 2048 > _0x241981 ? (_0x123f96 += String.fromCharCode(_0x241981 >> 6 | 192), _0x123f96 += String.fromCharCode(63 & _0x241981 | 128)) : (_0x123f96 += String.fromCharCode(_0x241981 >> 12 | 224), _0x123f96 += String.fromCharCode(_0x241981 >> 6 & 63 | 128), _0x123f96 += String.fromCharCode(63 & _0x241981 | 128));
    }
    return _0x123f96;
  }
  var _0x4b35ee,
    _0x31c959,
    _0x491e4a,
    _0xdbfe9f,
    _0xa2a76a,
    _0x263bab,
    _0x36a016,
    _0x28d5a3,
    _0x12ef7e,
    _0x41064d = [],
    _0x4a6a62 = 7,
    _0x1fe316 = 12,
    _0x3d6477 = 17,
    _0x22738d = 22,
    _0x4be45e = 5,
    _0x169f7b = 9,
    _0x49fcf0 = 14,
    _0x3b555b = 20,
    _0x5d1d41 = 4,
    _0x4f929a = 11,
    _0x4a39b4 = 16,
    _0x18e6a0 = 23,
    _0x5bf9ec = 6,
    _0x16efeb = 10,
    _0x256787 = 15,
    _0x205bff = 21;
  for (_0xd8f5c7 = _0x1c3500(_0xd8f5c7), _0x41064d = _0x37a595(_0xd8f5c7), _0x263bab = 1732584193, _0x36a016 = 4023233417, _0x28d5a3 = 2562383102, _0x12ef7e = 271733878, _0x4b35ee = 0; _0x4b35ee < _0x41064d.length; _0x4b35ee += 16) {
    _0x31c959 = _0x263bab;
    _0x491e4a = _0x36a016;
    _0xdbfe9f = _0x28d5a3;
    _0xa2a76a = _0x12ef7e;
    _0x263bab = _0x5218e9(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 0], _0x4a6a62, 3614090360);
    _0x12ef7e = _0x5218e9(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 1], _0x1fe316, 3905402710);
    _0x28d5a3 = _0x5218e9(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 2], _0x3d6477, 606105819);
    _0x36a016 = _0x5218e9(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 3], _0x22738d, 3250441966);
    _0x263bab = _0x5218e9(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 4], _0x4a6a62, 4118548399);
    _0x12ef7e = _0x5218e9(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 5], _0x1fe316, 1200080426);
    _0x28d5a3 = _0x5218e9(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 6], _0x3d6477, 2821735955);
    _0x36a016 = _0x5218e9(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 7], _0x22738d, 4249261313);
    _0x263bab = _0x5218e9(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 8], _0x4a6a62, 1770035416);
    _0x12ef7e = _0x5218e9(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 9], _0x1fe316, 2336552879);
    _0x28d5a3 = _0x5218e9(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 10], _0x3d6477, 4294925233);
    _0x36a016 = _0x5218e9(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 11], _0x22738d, 2304563134);
    _0x263bab = _0x5218e9(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 12], _0x4a6a62, 1804603682);
    _0x12ef7e = _0x5218e9(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 13], _0x1fe316, 4254626195);
    _0x28d5a3 = _0x5218e9(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 14], _0x3d6477, 2792965006);
    _0x36a016 = _0x5218e9(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 15], _0x22738d, 1236535329);
    _0x263bab = _0x22eda1(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 1], _0x4be45e, 4129170786);
    _0x12ef7e = _0x22eda1(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 6], _0x169f7b, 3225465664);
    _0x28d5a3 = _0x22eda1(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 11], _0x49fcf0, 643717713);
    _0x36a016 = _0x22eda1(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 0], _0x3b555b, 3921069994);
    _0x263bab = _0x22eda1(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 5], _0x4be45e, 3593408605);
    _0x12ef7e = _0x22eda1(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 10], _0x169f7b, 38016083);
    _0x28d5a3 = _0x22eda1(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 15], _0x49fcf0, 3634488961);
    _0x36a016 = _0x22eda1(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 4], _0x3b555b, 3889429448);
    _0x263bab = _0x22eda1(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 9], _0x4be45e, 568446438);
    _0x12ef7e = _0x22eda1(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 14], _0x169f7b, 3275163606);
    _0x28d5a3 = _0x22eda1(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 3], _0x49fcf0, 4107603335);
    _0x36a016 = _0x22eda1(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 8], _0x3b555b, 1163531501);
    _0x263bab = _0x22eda1(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 13], _0x4be45e, 2850285829);
    _0x12ef7e = _0x22eda1(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 2], _0x169f7b, 4243563512);
    _0x28d5a3 = _0x22eda1(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 7], _0x49fcf0, 1735328473);
    _0x36a016 = _0x22eda1(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 12], _0x3b555b, 2368359562);
    _0x263bab = _0x28a862(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 5], _0x5d1d41, 4294588738);
    _0x12ef7e = _0x28a862(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 8], _0x4f929a, 2272392833);
    _0x28d5a3 = _0x28a862(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 11], _0x4a39b4, 1839030562);
    _0x36a016 = _0x28a862(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 14], _0x18e6a0, 4259657740);
    _0x263bab = _0x28a862(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 1], _0x5d1d41, 2763975236);
    _0x12ef7e = _0x28a862(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 4], _0x4f929a, 1272893353);
    _0x28d5a3 = _0x28a862(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 7], _0x4a39b4, 4139469664);
    _0x36a016 = _0x28a862(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 10], _0x18e6a0, 3200236656);
    _0x263bab = _0x28a862(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 13], _0x5d1d41, 681279174);
    _0x12ef7e = _0x28a862(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 0], _0x4f929a, 3936430074);
    _0x28d5a3 = _0x28a862(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 3], _0x4a39b4, 3572445317);
    _0x36a016 = _0x28a862(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 6], _0x18e6a0, 76029189);
    _0x263bab = _0x28a862(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 9], _0x5d1d41, 3654602809);
    _0x12ef7e = _0x28a862(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 12], _0x4f929a, 3873151461);
    _0x28d5a3 = _0x28a862(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 15], _0x4a39b4, 530742520);
    _0x36a016 = _0x28a862(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 2], _0x18e6a0, 3299628645);
    _0x263bab = _0x544108(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 0], _0x5bf9ec, 4096336452);
    _0x12ef7e = _0x544108(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 7], _0x16efeb, 1126891415);
    _0x28d5a3 = _0x544108(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 14], _0x256787, 2878612391);
    _0x36a016 = _0x544108(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 5], _0x205bff, 4237533241);
    _0x263bab = _0x544108(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 12], _0x5bf9ec, 1700485571);
    _0x12ef7e = _0x544108(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 3], _0x16efeb, 2399980690);
    _0x28d5a3 = _0x544108(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 10], _0x256787, 4293915773);
    _0x36a016 = _0x544108(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 1], _0x205bff, 2240044497);
    _0x263bab = _0x544108(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 8], _0x5bf9ec, 1873313359);
    _0x12ef7e = _0x544108(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 15], _0x16efeb, 4264355552);
    _0x28d5a3 = _0x544108(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 6], _0x256787, 2734768916);
    _0x36a016 = _0x544108(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 13], _0x205bff, 1309151649);
    _0x263bab = _0x544108(_0x263bab, _0x36a016, _0x28d5a3, _0x12ef7e, _0x41064d[_0x4b35ee + 4], _0x5bf9ec, 4149444226);
    _0x12ef7e = _0x544108(_0x12ef7e, _0x263bab, _0x36a016, _0x28d5a3, _0x41064d[_0x4b35ee + 11], _0x16efeb, 3174756917);
    _0x28d5a3 = _0x544108(_0x28d5a3, _0x12ef7e, _0x263bab, _0x36a016, _0x41064d[_0x4b35ee + 2], _0x256787, 718787259);
    _0x36a016 = _0x544108(_0x36a016, _0x28d5a3, _0x12ef7e, _0x263bab, _0x41064d[_0x4b35ee + 9], _0x205bff, 3951481745);
    _0x263bab = _0x2c1af1(_0x263bab, _0x31c959);
    _0x36a016 = _0x2c1af1(_0x36a016, _0x491e4a);
    _0x28d5a3 = _0x2c1af1(_0x28d5a3, _0xdbfe9f);
    _0x12ef7e = _0x2c1af1(_0x12ef7e, _0xa2a76a);
  }
  var _0x4889c9 = _0x12a418(_0x263bab) + _0x12a418(_0x36a016) + _0x12a418(_0x28d5a3) + _0x12a418(_0x12ef7e);
  return _0x4889c9.toLowerCase();
}
function David_0x67e9e9(_0x598eae) {
  var _0x2a0725 = 8;
  var _0x4a3145 = 0;
  function _0x3f97fd(_0x2ab6b0, _0x20b028) {
    var _0x53dba2 = (_0x2ab6b0 & 65535) + (_0x20b028 & 65535);
    var _0x44df23 = (_0x2ab6b0 >> 16) + (_0x20b028 >> 16) + (_0x53dba2 >> 16);
    return _0x44df23 << 16 | _0x53dba2 & 65535;
  }
  function _0x1760c6(_0x16bec0, _0x4eec9) {
    return _0x16bec0 >>> _0x4eec9 | _0x16bec0 << 32 - _0x4eec9;
  }
  function _0x4e0a69(_0x3a9c7a, _0x3b3446) {
    return _0x3a9c7a >>> _0x3b3446;
  }
  function _0x503c06(_0x2f3796, _0x2d18ba, _0x5c9cad) {
    return _0x2f3796 & _0x2d18ba ^ ~_0x2f3796 & _0x5c9cad;
  }
  function _0x3f2c29(_0x1b71bc, _0x40618b, _0x210f5e) {
    return _0x1b71bc & _0x40618b ^ _0x1b71bc & _0x210f5e ^ _0x40618b & _0x210f5e;
  }
  function _0x1cf394(_0x4645a1) {
    return _0x1760c6(_0x4645a1, 2) ^ _0x1760c6(_0x4645a1, 13) ^ _0x1760c6(_0x4645a1, 22);
  }
  function _0x237004(_0x3048df) {
    return _0x1760c6(_0x3048df, 6) ^ _0x1760c6(_0x3048df, 11) ^ _0x1760c6(_0x3048df, 25);
  }
  function _0x324c7f(_0x51caba) {
    return _0x1760c6(_0x51caba, 7) ^ _0x1760c6(_0x51caba, 18) ^ _0x4e0a69(_0x51caba, 3);
  }
  function _0x8e7162(_0x16074a) {
    return _0x1760c6(_0x16074a, 17) ^ _0x1760c6(_0x16074a, 19) ^ _0x4e0a69(_0x16074a, 10);
  }
  function _0x1b9182(_0x430376, _0x3fe551) {
    var _0x12fa01 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x40f68d = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x308189 = new Array(64);
    var _0x82db8e, _0x322414, _0x5a67f2, _0x3c9bef, _0xfa8376, _0x3b2036, _0x3d9ff1, _0x621be1;
    var _0x5567ae, _0xe54a35;
    _0x430376[_0x3fe551 >> 5] |= 128 << 24 - _0x3fe551 % 32;
    _0x430376[(_0x3fe551 + 64 >> 9 << 4) + 15] = _0x3fe551;
    for (var _0x35ef20 = 0; _0x35ef20 < _0x430376.length; _0x35ef20 += 16) {
      _0x82db8e = _0x40f68d[0];
      _0x322414 = _0x40f68d[1];
      _0x5a67f2 = _0x40f68d[2];
      _0x3c9bef = _0x40f68d[3];
      _0xfa8376 = _0x40f68d[4];
      _0x3b2036 = _0x40f68d[5];
      _0x3d9ff1 = _0x40f68d[6];
      _0x621be1 = _0x40f68d[7];
      for (var _0x12b703 = 0; _0x12b703 < 64; _0x12b703++) {
        if (_0x12b703 < 16) {
          _0x308189[_0x12b703] = _0x430376[_0x12b703 + _0x35ef20];
        } else {
          _0x308189[_0x12b703] = _0x3f97fd(_0x3f97fd(_0x3f97fd(_0x8e7162(_0x308189[_0x12b703 - 2]), _0x308189[_0x12b703 - 7]), _0x324c7f(_0x308189[_0x12b703 - 15])), _0x308189[_0x12b703 - 16]);
        }
        _0x5567ae = _0x3f97fd(_0x3f97fd(_0x3f97fd(_0x3f97fd(_0x621be1, _0x237004(_0xfa8376)), _0x503c06(_0xfa8376, _0x3b2036, _0x3d9ff1)), _0x12fa01[_0x12b703]), _0x308189[_0x12b703]);
        _0xe54a35 = _0x3f97fd(_0x1cf394(_0x82db8e), _0x3f2c29(_0x82db8e, _0x322414, _0x5a67f2));
        _0x621be1 = _0x3d9ff1;
        _0x3d9ff1 = _0x3b2036;
        _0x3b2036 = _0xfa8376;
        _0xfa8376 = _0x3f97fd(_0x3c9bef, _0x5567ae);
        _0x3c9bef = _0x5a67f2;
        _0x5a67f2 = _0x322414;
        _0x322414 = _0x82db8e;
        _0x82db8e = _0x3f97fd(_0x5567ae, _0xe54a35);
      }
      _0x40f68d[0] = _0x3f97fd(_0x82db8e, _0x40f68d[0]);
      _0x40f68d[1] = _0x3f97fd(_0x322414, _0x40f68d[1]);
      _0x40f68d[2] = _0x3f97fd(_0x5a67f2, _0x40f68d[2]);
      _0x40f68d[3] = _0x3f97fd(_0x3c9bef, _0x40f68d[3]);
      _0x40f68d[4] = _0x3f97fd(_0xfa8376, _0x40f68d[4]);
      _0x40f68d[5] = _0x3f97fd(_0x3b2036, _0x40f68d[5]);
      _0x40f68d[6] = _0x3f97fd(_0x3d9ff1, _0x40f68d[6]);
      _0x40f68d[7] = _0x3f97fd(_0x621be1, _0x40f68d[7]);
    }
    return _0x40f68d;
  }
  function _0x1f12a8(_0x4be3ce) {
    var _0x549c20 = Array();
    var _0x1ee90c = (1 << _0x2a0725) - 1;
    for (var _0x229ed9 = 0; _0x229ed9 < _0x4be3ce.length * _0x2a0725; _0x229ed9 += _0x2a0725) {
      _0x549c20[_0x229ed9 >> 5] |= (_0x4be3ce.charCodeAt(_0x229ed9 / _0x2a0725) & _0x1ee90c) << 24 - _0x229ed9 % 32;
    }
    return _0x549c20;
  }
  function _0x654cc7(_0x4ea129) {
    _0x4ea129 = _0x4ea129.replace(/\r\n/g, "\n");
    var _0x182060 = "";
    for (var _0x51bd36 = 0; _0x51bd36 < _0x4ea129.length; _0x51bd36++) {
      var _0x12e5a8 = _0x4ea129.charCodeAt(_0x51bd36);
      if (_0x12e5a8 < 128) {
        _0x182060 += String.fromCharCode(_0x12e5a8);
      } else {
        if (_0x12e5a8 > 127 && _0x12e5a8 < 2048) {
          _0x182060 += String.fromCharCode(_0x12e5a8 >> 6 | 192);
          _0x182060 += String.fromCharCode(_0x12e5a8 & 63 | 128);
        } else {
          _0x182060 += String.fromCharCode(_0x12e5a8 >> 12 | 224);
          _0x182060 += String.fromCharCode(_0x12e5a8 >> 6 & 63 | 128);
          _0x182060 += String.fromCharCode(_0x12e5a8 & 63 | 128);
        }
      }
    }
    return _0x182060;
  }
  function _0x4ad24f(_0x524aa5) {
    var _0x54402a = _0x4a3145 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x5e529e = "";
    for (var _0x45826d = 0; _0x45826d < _0x524aa5.length * 4; _0x45826d++) {
      _0x5e529e += _0x54402a.charAt(_0x524aa5[_0x45826d >> 2] >> (3 - _0x45826d % 4) * 8 + 4 & 15) + _0x54402a.charAt(_0x524aa5[_0x45826d >> 2] >> (3 - _0x45826d % 4) * 8 & 15);
    }
    return _0x5e529e;
  }
  _0x598eae = _0x654cc7(_0x598eae);
  return _0x4ad24f(_0x1b9182(_0x1f12a8(_0x598eae), _0x598eae.length * _0x2a0725));
}
function David_0x33aef6(_0x46d540) {
  function _0x37ffa4(_0x28c8d9, _0x2a28c0) {
    var _0x1a8222 = _0x28c8d9 << _0x2a28c0 | _0x28c8d9 >>> 32 - _0x2a28c0;
    return _0x1a8222;
  }
  function _0x56415f(_0x8dda8e) {
    var _0x4fca83 = "";
    var _0x2acc57;
    var _0xe2d213;
    var _0xdbec23;
    for (_0x2acc57 = 0; _0x2acc57 <= 6; _0x2acc57 += 2) {
      _0xe2d213 = _0x8dda8e >>> _0x2acc57 * 4 + 4 & 15;
      _0xdbec23 = _0x8dda8e >>> _0x2acc57 * 4 & 15;
      _0x4fca83 += _0xe2d213.toString(16) + _0xdbec23.toString(16);
    }
    return _0x4fca83;
  }
  function _0x3b9cbc(_0x48b489) {
    var _0xf88332 = "";
    var _0x72748d;
    var _0x3a9fa9;
    for (_0x72748d = 7; _0x72748d >= 0; _0x72748d--) {
      _0x3a9fa9 = _0x48b489 >>> _0x72748d * 4 & 15;
      _0xf88332 += _0x3a9fa9.toString(16);
    }
    return _0xf88332;
  }
  function _0x9303c3(_0x2e6e59) {
    _0x2e6e59 = _0x2e6e59.replace(/\r\n/g, "\n");
    var _0x25df74 = "";
    for (var _0x49031c = 0; _0x49031c < _0x2e6e59.length; _0x49031c++) {
      var _0x3050a3 = _0x2e6e59.charCodeAt(_0x49031c);
      if (_0x3050a3 < 128) {
        _0x25df74 += String.fromCharCode(_0x3050a3);
      } else {
        if (_0x3050a3 > 127 && _0x3050a3 < 2048) {
          _0x25df74 += String.fromCharCode(_0x3050a3 >> 6 | 192);
          _0x25df74 += String.fromCharCode(_0x3050a3 & 63 | 128);
        } else {
          _0x25df74 += String.fromCharCode(_0x3050a3 >> 12 | 224);
          _0x25df74 += String.fromCharCode(_0x3050a3 >> 6 & 63 | 128);
          _0x25df74 += String.fromCharCode(_0x3050a3 & 63 | 128);
        }
      }
    }
    return _0x25df74;
  }
  var _0x57d860;
  var _0xc5d099, _0x1b6f50;
  var _0x262070 = new Array(80);
  var _0x1805cb = 1732584193;
  var _0x38cd4f = 4023233417;
  var _0x314f3b = 2562383102;
  var _0x200f0b = 271733878;
  var _0x12fff7 = 3285377520;
  var _0x5dc1d3, _0x408772, _0x393662, _0x2e758d, _0x74a71a;
  _0x46d540 = _0x9303c3(_0x46d540);
  var _0x467a06 = _0x46d540.length;
  var _0x5d4370 = new Array();
  for (_0xc5d099 = 0; _0xc5d099 < _0x467a06 - 3; _0xc5d099 += 4) {
    _0x1b6f50 = _0x46d540.charCodeAt(_0xc5d099) << 24 | _0x46d540.charCodeAt(_0xc5d099 + 1 < 10 ? "0" + (_0xc5d099 + 1) : _0xc5d099 + 1) << 16 | _0x46d540.charCodeAt(_0xc5d099 + 2) << 8 | _0x46d540.charCodeAt(_0xc5d099 + 3);
    _0x5d4370.push(_0x1b6f50);
  }
  switch (_0x467a06 % 4) {
    case 0:
      _0xc5d099 = 2147483648;
      break;
    case 1:
      _0xc5d099 = _0x46d540.charCodeAt(_0x467a06 - 1) << 24 | 8388608;
      break;
    case 2:
      _0xc5d099 = _0x46d540.charCodeAt(_0x467a06 - 2) << 24 | _0x46d540.charCodeAt(_0x467a06 - 1) << 16 | 32768;
      break;
    case 3:
      _0xc5d099 = _0x46d540.charCodeAt(_0x467a06 - 3) << 24 | _0x46d540.charCodeAt(_0x467a06 - 2) << 16 | _0x46d540.charCodeAt(_0x467a06 - 1) << 8 | 128;
      break;
  }
  _0x5d4370.push(_0xc5d099);
  while (_0x5d4370.length % 16 != 14) {
    _0x5d4370.push(0);
  }
  _0x5d4370.push(_0x467a06 >>> 29);
  _0x5d4370.push(_0x467a06 << 3 & 4294967295);
  for (_0x57d860 = 0; _0x57d860 < _0x5d4370.length; _0x57d860 += 16) {
    for (_0xc5d099 = 0; _0xc5d099 < 16; _0xc5d099++) {
      _0x262070[_0xc5d099] = _0x5d4370[_0x57d860 + _0xc5d099];
    }
    for (_0xc5d099 = 16; _0xc5d099 <= 79; _0xc5d099++) {
      _0x262070[_0xc5d099] = _0x37ffa4(_0x262070[_0xc5d099 - 3] ^ _0x262070[_0xc5d099 - 8] ^ _0x262070[_0xc5d099 - 14] ^ _0x262070[_0xc5d099 - 16], 1);
    }
    _0x5dc1d3 = _0x1805cb;
    _0x408772 = _0x38cd4f;
    _0x393662 = _0x314f3b;
    _0x2e758d = _0x200f0b;
    _0x74a71a = _0x12fff7;
    for (_0xc5d099 = 0; _0xc5d099 <= 19; _0xc5d099++) {
      _0x3d6cae = _0x37ffa4(_0x5dc1d3, 5) + (_0x408772 & _0x393662 | ~_0x408772 & _0x2e758d) + _0x74a71a + _0x262070[_0xc5d099] + 1518500249 & 4294967295;
      _0x74a71a = _0x2e758d;
      _0x2e758d = _0x393662;
      _0x393662 = _0x37ffa4(_0x408772, 30);
      _0x408772 = _0x5dc1d3;
      _0x5dc1d3 = _0x3d6cae;
    }
    for (_0xc5d099 = 20; _0xc5d099 <= 39; _0xc5d099++) {
      _0x3d6cae = _0x37ffa4(_0x5dc1d3, 5) + (_0x408772 ^ _0x393662 ^ _0x2e758d) + _0x74a71a + _0x262070[_0xc5d099] + 1859775393 & 4294967295;
      _0x74a71a = _0x2e758d;
      _0x2e758d = _0x393662;
      _0x393662 = _0x37ffa4(_0x408772, 30);
      _0x408772 = _0x5dc1d3;
      _0x5dc1d3 = _0x3d6cae;
    }
    for (_0xc5d099 = 40; _0xc5d099 <= 59; _0xc5d099++) {
      _0x3d6cae = _0x37ffa4(_0x5dc1d3, 5) + (_0x408772 & _0x393662 | _0x408772 & _0x2e758d | _0x393662 & _0x2e758d) + _0x74a71a + _0x262070[_0xc5d099] + 2400959708 & 4294967295;
      _0x74a71a = _0x2e758d;
      _0x2e758d = _0x393662;
      _0x393662 = _0x37ffa4(_0x408772, 30);
      _0x408772 = _0x5dc1d3;
      _0x5dc1d3 = _0x3d6cae;
    }
    for (_0xc5d099 = 60; _0xc5d099 <= 79; _0xc5d099++) {
      _0x3d6cae = _0x37ffa4(_0x5dc1d3, 5) + (_0x408772 ^ _0x393662 ^ _0x2e758d) + _0x74a71a + _0x262070[_0xc5d099] + 3395469782 & 4294967295;
      _0x74a71a = _0x2e758d;
      _0x2e758d = _0x393662;
      _0x393662 = _0x37ffa4(_0x408772, 30);
      _0x408772 = _0x5dc1d3;
      _0x5dc1d3 = _0x3d6cae;
    }
    _0x1805cb = _0x1805cb + _0x5dc1d3 & 4294967295;
    _0x38cd4f = _0x38cd4f + _0x408772 & 4294967295;
    _0x314f3b = _0x314f3b + _0x393662 & 4294967295;
    _0x200f0b = _0x200f0b + _0x2e758d & 4294967295;
    _0x12fff7 = _0x12fff7 + _0x74a71a & 4294967295;
  }
  var _0x3d6cae = _0x3b9cbc(_0x1805cb) + _0x3b9cbc(_0x38cd4f) + _0x3b9cbc(_0x314f3b) + _0x3b9cbc(_0x200f0b) + _0x3b9cbc(_0x12fff7);
  return _0x3d6cae.toLowerCase();
}
function David_0x3690d1() {
  var _0x1b03eb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x4bcaad) {
    var _0x27a945 = "";
    var _0x39e3c6, _0xadba99, _0x575c87, _0xd4ec7, _0x1c58e2, _0x204ea3, _0x20b66e;
    var _0x2403f3 = 0;
    _0x4bcaad = utf8Encode(_0x4bcaad);
    while (_0x2403f3 < _0x4bcaad.length) {
      _0x39e3c6 = _0x4bcaad.charCodeAt(_0x2403f3++);
      _0xadba99 = _0x4bcaad.charCodeAt(_0x2403f3++);
      _0x575c87 = _0x4bcaad.charCodeAt(_0x2403f3++);
      _0xd4ec7 = _0x39e3c6 >> 2;
      _0x1c58e2 = (_0x39e3c6 & 3) << 4 | _0xadba99 >> 4;
      _0x204ea3 = (_0xadba99 & 15) << 2 | _0x575c87 >> 6;
      _0x20b66e = _0x575c87 & 63;
      if (isNaN(_0xadba99)) {
        _0x204ea3 = _0x20b66e = 64;
      } else {
        if (isNaN(_0x575c87)) {
          _0x20b66e = 64;
        }
      }
      _0x27a945 = _0x27a945 + _0x1b03eb.charAt(_0xd4ec7) + _0x1b03eb.charAt(_0x1c58e2) + _0x1b03eb.charAt(_0x204ea3) + _0x1b03eb.charAt(_0x20b66e);
    }
    return _0x27a945;
  };
  this.decode = function (_0x4a181c) {
    var _0x13b309 = "";
    var _0x358ac1, _0x300974, _0x2d5a59;
    var _0x4b89b1, _0x3cbd23, _0x550861, _0x50d359;
    var _0x23a020 = 0;
    _0x4a181c = _0x4a181c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x23a020 < _0x4a181c.length) {
      _0x4b89b1 = _0x1b03eb.indexOf(_0x4a181c.charAt(_0x23a020++));
      _0x3cbd23 = _0x1b03eb.indexOf(_0x4a181c.charAt(_0x23a020++));
      _0x550861 = _0x1b03eb.indexOf(_0x4a181c.charAt(_0x23a020++));
      _0x50d359 = _0x1b03eb.indexOf(_0x4a181c.charAt(_0x23a020++));
      _0x358ac1 = _0x4b89b1 << 2 | _0x3cbd23 >> 4;
      _0x300974 = (_0x3cbd23 & 15) << 4 | _0x550861 >> 2;
      _0x2d5a59 = (_0x550861 & 3) << 6 | _0x50d359;
      _0x13b309 = _0x13b309 + String.fromCharCode(_0x358ac1);
      if (_0x550861 !== 64) {
        _0x13b309 = _0x13b309 + String.fromCharCode(_0x300974);
      }
      if (_0x50d359 !== 64) {
        _0x13b309 = _0x13b309 + String.fromCharCode(_0x2d5a59);
      }
    }
    _0x13b309 = utf8Decode(_0x13b309);
    return _0x13b309;
  };
  utf8Encode = function (_0xb8765a) {
    _0xb8765a = _0xb8765a.replace(/\r\n/g, "\n");
    var _0x23adcd = "";
    for (var _0x1af498 = 0; _0x1af498 < _0xb8765a.length; _0x1af498++) {
      var _0x34ead4 = _0xb8765a.charCodeAt(_0x1af498);
      if (_0x34ead4 < 128) {
        _0x23adcd += String.fromCharCode(_0x34ead4);
      } else {
        if (_0x34ead4 > 127 && _0x34ead4 < 2048) {
          _0x23adcd += String.fromCharCode(_0x34ead4 >> 6 | 192);
          _0x23adcd += String.fromCharCode(_0x34ead4 & 63 | 128);
        } else {
          _0x23adcd += String.fromCharCode(_0x34ead4 >> 12 | 224);
          _0x23adcd += String.fromCharCode(_0x34ead4 >> 6 & 63 | 128);
          _0x23adcd += String.fromCharCode(_0x34ead4 & 63 | 128);
        }
      }
    }
    return _0x23adcd;
  };
  utf8Decode = function (_0x5c6ff3) {
    var _0x411ebe = "";
    var _0x5b224c = 0;
    var _0x582d3c = 0;
    var _0x4307b0 = 0;
    var _0x367951 = 0;
    while (_0x5b224c < _0x5c6ff3.length) {
      _0x582d3c = _0x5c6ff3.charCodeAt(_0x5b224c);
      if (_0x582d3c < 128) {
        _0x411ebe += String.fromCharCode(_0x582d3c);
        _0x5b224c++;
      } else {
        if (_0x582d3c > 191 && _0x582d3c < 224) {
          _0x4307b0 = _0x5c6ff3.charCodeAt(_0x5b224c + 1 < 10 ? "0" + (_0x5b224c + 1) : _0x5b224c + 1);
          _0x411ebe += String.fromCharCode((_0x582d3c & 31) << 6 | _0x4307b0 & 63);
          _0x5b224c += 2;
        } else {
          _0x4307b0 = _0x5c6ff3.charCodeAt(_0x5b224c + 1 < 10 ? "0" + (_0x5b224c + 1) : _0x5b224c + 1);
          _0x367951 = _0x5c6ff3.charCodeAt(_0x5b224c + 2);
          _0x411ebe += String.fromCharCode((_0x582d3c & 15) << 12 | (_0x4307b0 & 63) << 6 | _0x367951 & 63);
          _0x5b224c += 3;
        }
      }
    }
    return _0x411ebe;
  };
}
function David_0x356dfc(_0x248e5c, _0x4212c8) {
  class _0x1d4d07 {
    constructor(_0x5afa38) {
      this.env = _0x5afa38;
    }
    send(_0x72867d, _0x364097 = "GET") {
      _0x72867d = typeof _0x72867d === "string" ? {
        url: _0x72867d
      } : _0x72867d;
      let _0x5598dd = this.get;
      if (_0x364097 === "POST") {
        _0x5598dd = this.post;
      }
      return new Promise((_0x3960f5, _0x517f1d) => {
        _0x5598dd.call(this, _0x72867d, (_0x8a0951, _0x41add8, _0x4bd77d) => {
          if (_0x8a0951) {
            _0x517f1d(_0x8a0951);
          } else {
            _0x3960f5(_0x41add8);
          }
        });
      });
    }
    get(_0x1f8701) {
      return this.send.call(this.env, _0x1f8701);
    }
    post(_0x256c6c) {
      return this.send.call(this.env, _0x256c6c, "POST");
    }
  }
  return new class {
    constructor(_0x36c1c2, _0x28fb75) {
      this.name = _0x36c1c2;
      this.http = new _0x1d4d07(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x28fb75);
      const _0x366560 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x366560);
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
    toObj(_0x562eb2, _0x1064b6 = null) {
      try {
        return JSON.parse(_0x562eb2);
      } catch {
        return _0x1064b6;
      }
    }
    toStr(_0xa9c49, _0x1888e1 = null) {
      try {
        return JSON.stringify(_0xa9c49);
      } catch {
        return _0x1888e1;
      }
    }
    getjson(_0x4427b1, _0x40d7a5) {
      let _0x4c7223 = _0x40d7a5;
      const _0x158891 = this.getdata(_0x4427b1);
      if (_0x158891) {
        try {
          _0x4c7223 = JSON.parse(this.getdata(_0x4427b1));
        } catch {}
      }
      return _0x4c7223;
    }
    setjson(_0x5a7a9e, _0xa7e101) {
      try {
        return this.setdata(JSON.stringify(_0x5a7a9e), _0xa7e101);
      } catch {
        return false;
      }
    }
    getScript(_0x5a765e) {
      return new Promise(_0x75dc67 => {
        const _0x25530b = {
          url: _0x5a765e
        };
        this.get(_0x25530b, (_0x12c5e0, _0x1996a2, _0x58d0e7) => _0x75dc67(_0x58d0e7));
      });
    }
    runScript(_0x4d4a77, _0x46a738) {
      return new Promise(_0x180737 => {
        let _0x4cf385 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4cf385 = _0x4cf385 ? _0x4cf385.replace(/\n/g, "").trim() : _0x4cf385;
        let _0x40c1cf = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x40c1cf = _0x40c1cf ? _0x40c1cf * 1 : 20;
        _0x40c1cf = _0x46a738 && _0x46a738.timeout ? _0x46a738.timeout : _0x40c1cf;
        const [_0x33e3cc, _0x1a81a5] = _0x4cf385.split("@");
        const _0x2b151d = {
          script_text: _0x4d4a77,
          mock_type: "cron",
          timeout: _0x40c1cf
        };
        const _0x13dc30 = {
          "X-Key": _0x33e3cc,
          Accept: "*/*"
        };
        const _0x24ec0d = {
          url: "http: //" + _0x1a81a5 + "/v1/scripting/evaluate",
          body: _0x2b151d,
          headers: _0x13dc30
        };
        this.post(_0x24ec0d, (_0x4855d9, _0x298df8, _0x11bb9f) => _0x180737(_0x11bb9f));
      }).catch(_0x146d4b => this.logErr(_0x146d4b));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x783639 = this.path.resolve(this.dataFile);
        const _0x2e2b91 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x24a1ff = this.fs.existsSync(_0x783639);
        const _0x39c466 = !_0x24a1ff && this.fs.existsSync(_0x2e2b91);
        if (_0x24a1ff || _0x39c466) {
          const _0x39c693 = _0x24a1ff ? _0x783639 : _0x2e2b91;
          try {
            return JSON.parse(this.fs.readFileSync(_0x39c693));
          } catch (_0x5448ec) {
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
        const _0x331ce4 = this.path.resolve(this.dataFile);
        const _0x524358 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x3343bf = this.fs.existsSync(_0x331ce4);
        const _0x4048d8 = !_0x3343bf && this.fs.existsSync(_0x524358);
        const _0x35e551 = JSON.stringify(this.data);
        if (_0x3343bf) {
          this.fs.writeFileSync(_0x331ce4, _0x35e551);
        } else {
          if (_0x4048d8) {
            this.fs.writeFileSync(_0x524358, _0x35e551);
          } else {
            this.fs.writeFileSync(_0x331ce4, _0x35e551);
          }
        }
      }
    }
    lodash_get(_0x3f7971, _0x2b5a09, _0x4ebbf2 = undefined) {
      const _0x4b62f6 = _0x2b5a09.replace(/[(d+)]/g, ".$1").split(".");
      let _0x2404c4 = _0x3f7971;
      for (const _0x5e5d35 of _0x4b62f6) {
        _0x2404c4 = Object(_0x2404c4)[_0x5e5d35];
        if (_0x2404c4 === undefined) {
          return _0x4ebbf2;
        }
      }
      return _0x2404c4;
    }
    lodash_set(_0x284599, _0x5362e0, _0x25a35f) {
      if (Object(_0x284599) !== _0x284599) {
        return _0x284599;
      }
      if (!Array.isArray(_0x5362e0)) {
        _0x5362e0 = _0x5362e0.toString().match(/[^.[]]+/g) || [];
      }
      _0x5362e0.slice(0, -1).reduce((_0x91695, _0x5210dc, _0x304ad6) => Object(_0x91695[_0x5210dc]) === _0x91695[_0x5210dc] ? _0x91695[_0x5210dc] : _0x91695[_0x5210dc] = Math.abs(_0x5362e0[_0x304ad6 + 1 < 10 ? "0" + (_0x304ad6 + 1) : _0x304ad6 + 1]) >> 0 === +_0x5362e0[_0x304ad6 + 1 < 10 ? "0" + (_0x304ad6 + 1) : _0x304ad6 + 1] ? [] : {}, _0x284599)[_0x5362e0[_0x5362e0.length - 1]] = _0x25a35f;
      return _0x284599;
    }
    getdata(_0x55990f) {
      let _0x34f675 = this.getval(_0x55990f);
      if (/^@/.test(_0x55990f)) {
        const [, _0xa73443, _0x5dbf51] = /^@(.*?).(.*?)$/.exec(_0x55990f);
        const _0x2dbf39 = _0xa73443 ? this.getval(_0xa73443) : "";
        if (_0x2dbf39) {
          try {
            const _0x47ad29 = JSON.parse(_0x2dbf39);
            _0x34f675 = _0x47ad29 ? this.lodash_get(_0x47ad29, _0x5dbf51, "") : _0x34f675;
          } catch (_0x5a1f43) {
            _0x34f675 = "";
          }
        }
      }
      return _0x34f675;
    }
    setdata(_0x47d632, _0xa1a8f8) {
      let _0x1d3fe6 = false;
      if (/^@/.test(_0xa1a8f8)) {
        const [, _0xed8934, _0x28f616] = /^@(.*?).(.*?)$/.exec(_0xa1a8f8);
        const _0x48cf5b = this.getval(_0xed8934);
        const _0x546d8f = _0xed8934 ? _0x48cf5b === "null" ? null : _0x48cf5b || "{}" : "{}";
        try {
          const _0x3a1a6a = JSON.parse(_0x546d8f);
          this.lodash_set(_0x3a1a6a, _0x28f616, _0x47d632);
          _0x1d3fe6 = this.setval(JSON.stringify(_0x3a1a6a), _0xed8934);
        } catch (_0x22f1ff) {
          const _0x564074 = {};
          this.lodash_set(_0x564074, _0x28f616, _0x47d632);
          _0x1d3fe6 = this.setval(JSON.stringify(_0x564074), _0xed8934);
        }
      } else {
        _0x1d3fe6 = this.setval(_0x47d632, _0xa1a8f8);
      }
      return _0x1d3fe6;
    }
    getval(_0x49195e) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x49195e);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x49195e);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x49195e];
          } else {
            return this.data && this.data[_0x49195e] || null;
          }
        }
      }
    }
    setval(_0x11322c, _0x358d77) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x11322c, _0x358d77);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x11322c, _0x358d77);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x358d77] = _0x11322c;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x358d77] || null;
          }
        }
      }
    }
    initGotEnv(_0xf08cf8) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0xf08cf8) {
        _0xf08cf8.headers = _0xf08cf8.headers ? _0xf08cf8.headers : {};
        if (undefined === _0xf08cf8.headers.Cookie && undefined === _0xf08cf8.cookieJar) {
          _0xf08cf8.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x1bdf0f, _0x42b3ad = () => {}) {
      if (_0x1bdf0f.headers) {
        delete _0x1bdf0f.headers["Content-Type"];
        delete _0x1bdf0f.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x1bdf0f.headers = _0x1bdf0f.headers || {};
          const _0x26c7dd = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x1bdf0f.headers, _0x26c7dd);
        }
        $httpClient.get(_0x1bdf0f, (_0x1d4021, _0x502409, _0x3d304d) => {
          if (!_0x1d4021 && _0x502409) {
            _0x502409.body = _0x3d304d;
            _0x502409.statusCode = _0x502409.status;
          }
          _0x42b3ad(_0x1d4021, _0x502409, _0x3d304d);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x1bdf0f.opts = _0x1bdf0f.opts || {};
            const _0x3331b6 = {
              hints: false
            };
            Object.assign(_0x1bdf0f.opts, _0x3331b6);
          }
          $task.fetch(_0x1bdf0f).then(_0x10e0c7 => {
            const {
              statusCode: _0x593141,
              statusCode,
              headers,
              body
            } = _0x10e0c7;
            const _0x4e4045 = {
              status: _0x593141,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x42b3ad(null, _0x4e4045, body);
          }, _0x2b5b5b => _0x42b3ad(_0x2b5b5b));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x1bdf0f);
            this.got(_0x1bdf0f).on("redirect", (_0x5c472a, _0x25e003) => {
              try {
                if (_0x5c472a.headers["set-cookie"]) {
                  const _0x70d46d = _0x5c472a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x70d46d) {
                    this.ckjar.setCookieSync(_0x70d46d, null);
                  }
                  _0x25e003.cookieJar = this.ckjar;
                }
              } catch (_0x21aaf7) {
                this.logErr(_0x21aaf7);
              }
            }).then(_0x25fe94 => {
              const {
                statusCode: _0x24947e,
                statusCode,
                headers,
                body
              } = _0x25fe94;
              const _0x5c2f93 = {
                status: _0x24947e,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x42b3ad(null, _0x5c2f93, body);
            }, _0x30accf => {
              const {
                message: _0x518031,
                response: _0x5ef398
              } = _0x30accf;
              _0x42b3ad(_0x518031, _0x5ef398, _0x5ef398 && _0x5ef398.body);
            });
          }
        }
      }
    }
    post(_0x1672a8, _0x36ff11 = () => {}) {
      const _0x1d9021 = _0x1672a8.method ? _0x1672a8.method.toLocaleLowerCase() : "post";
      if (_0x1672a8.body && _0x1672a8.headers && !_0x1672a8.headers["Content-Type"]) {
        _0x1672a8.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x1672a8.headers) {
        delete _0x1672a8.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x1672a8.headers = _0x1672a8.headers || {};
          const _0x437a41 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x1672a8.headers, _0x437a41);
        }
        $httpClient[_0x1d9021](_0x1672a8, (_0x1339ec, _0x599ae2, _0x1f92c2) => {
          if (!_0x1339ec && _0x599ae2) {
            _0x599ae2.body = _0x1f92c2;
            _0x599ae2.statusCode = _0x599ae2.status;
          }
          _0x36ff11(_0x1339ec, _0x599ae2, _0x1f92c2);
        });
      } else {
        if (this.isQuanX()) {
          _0x1672a8.method = _0x1d9021;
          if (this.isNeedRewrite) {
            _0x1672a8.opts = _0x1672a8.opts || {};
            const _0x18cb6d = {
              hints: false
            };
            Object.assign(_0x1672a8.opts, _0x18cb6d);
          }
          $task.fetch(_0x1672a8).then(_0xb5c1d4 => {
            const {
              statusCode: _0x3f56d1,
              statusCode,
              headers,
              body
            } = _0xb5c1d4;
            const _0x2dc726 = {
              status: _0x3f56d1,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x36ff11(null, _0x2dc726, body);
          }, _0x587e1c => _0x36ff11(_0x587e1c));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x1672a8);
            const {
              url,
              ..._0x2a3c34
            } = _0x1672a8;
            this.got[_0x1d9021](url, _0x2a3c34).then(_0xcc5948 => {
              const {
                statusCode: _0x3d07a7,
                statusCode,
                headers,
                body
              } = _0xcc5948;
              const _0x2f7c9c = {
                status: _0x3d07a7,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x36ff11(null, _0x2f7c9c, body);
            }, _0x453982 => {
              const {
                message: _0xddc150,
                response: _0x55a042
              } = _0x453982;
              _0x36ff11(_0xddc150, _0x55a042, _0x55a042 && _0x55a042.body);
            });
          }
        }
      }
    }
    put(_0x125ae4, _0x40c23d = () => {}) {
      const _0x1ed0f0 = _0x125ae4.method ? _0x125ae4.method.toLocaleLowerCase() : "put";
      if (_0x125ae4.body && _0x125ae4.headers && !_0x125ae4.headers["Content-Type"]) {
        _0x125ae4.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x125ae4.headers) {
        delete _0x125ae4.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x125ae4.headers = _0x125ae4.headers || {};
          const _0x4c3c0e = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x125ae4.headers, _0x4c3c0e);
        }
        $httpClient[_0x1ed0f0](_0x125ae4, (_0x54ef00, _0xfbd8e7, _0x2d7046) => {
          if (!_0x54ef00 && _0xfbd8e7) {
            _0xfbd8e7.body = _0x2d7046;
            _0xfbd8e7.statusCode = _0xfbd8e7.status;
          }
          _0x40c23d(_0x54ef00, _0xfbd8e7, _0x2d7046);
        });
      } else {
        if (this.isQuanX()) {
          _0x125ae4.method = _0x1ed0f0;
          if (this.isNeedRewrite) {
            _0x125ae4.opts = _0x125ae4.opts || {};
            const _0x36ad29 = {
              hints: false
            };
            Object.assign(_0x125ae4.opts, _0x36ad29);
          }
          $task.fetch(_0x125ae4).then(_0x3b90a9 => {
            const {
              statusCode: _0x9b48fc,
              statusCode,
              headers,
              body
            } = _0x3b90a9;
            const _0x248365 = {
              status: _0x9b48fc,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x40c23d(null, _0x248365, body);
          }, _0x468ead => _0x40c23d(_0x468ead));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x125ae4);
            const {
              url,
              ..._0x4b9307
            } = _0x125ae4;
            this.got[_0x1ed0f0](url, _0x4b9307).then(_0x3712c1 => {
              const {
                statusCode: _0x512b31,
                statusCode,
                headers,
                body
              } = _0x3712c1;
              const _0x245b9d = {
                status: _0x512b31,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x40c23d(null, _0x245b9d, body);
            }, _0x4081fe => {
              const {
                message: _0x103e00,
                response: _0x456919
              } = _0x4081fe;
              _0x40c23d(_0x103e00, _0x456919, _0x456919 && _0x456919.body);
            });
          }
        }
      }
    }
    time(_0xd27d1d, _0x313457 = null) {
      const _0x22cd66 = _0x313457 ? new Date(_0x313457) : new Date();
      const _0x4af74b = {
        "M+": _0x22cd66.getMonth() + 1,
        "d+": _0x22cd66.getDate(),
        "H+": _0x22cd66.getHours(),
        "m+": _0x22cd66.getMinutes(),
        "s+": _0x22cd66.getSeconds(),
        "q+": Math.floor((_0x22cd66.getMonth() + 3) / 3),
        S: _0x22cd66.getMilliseconds()
      };
      if (/(y+)/.test(_0xd27d1d)) {
        _0xd27d1d = _0xd27d1d.replace(RegExp.$1, (_0x22cd66.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x4a7ec2 in _0x4af74b) if (new RegExp("(" + _0x4a7ec2 + ")").test(_0xd27d1d)) {
        _0xd27d1d = _0xd27d1d.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x4af74b[_0x4a7ec2] : ("00" + _0x4af74b[_0x4a7ec2]).substr(("" + _0x4af74b[_0x4a7ec2]).length));
      }
      return _0xd27d1d;
    }
    msg(_0x53efea = _0x248e5c, _0x122035 = "", _0xc20104 = "", _0x4aeba0) {
      const _0x55a571 = _0x36832c => {
        if (!_0x36832c) {
          return _0x36832c;
        }
        if (typeof _0x36832c === "string") {
          if (this.isLoon()) {
            return _0x36832c;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x36832c
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x36832c
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x36832c === "object") {
            if (this.isLoon()) {
              let _0x43137c = _0x36832c.openUrl || _0x36832c.url || _0x36832c["open-url"];
              let _0x1884c8 = _0x36832c.mediaUrl || _0x36832c["media-url"];
              const _0x5df078 = {
                openUrl: _0x43137c,
                mediaUrl: _0x1884c8
              };
              return _0x5df078;
            } else {
              if (this.isQuanX()) {
                let _0x35687c = _0x36832c["open-url"] || _0x36832c.url || _0x36832c.openUrl;
                let _0x249151 = _0x36832c["media-url"] || _0x36832c.mediaUrl;
                const _0x574e47 = {
                  "open-url": _0x35687c,
                  "media-url": _0x249151
                };
                return _0x574e47;
              } else {
                if (this.isSurge()) {
                  let _0x10d10e = _0x36832c.url || _0x36832c.openUrl || _0x36832c["open-url"];
                  const _0x29dcd0 = {
                    url: _0x10d10e
                  };
                  return _0x29dcd0;
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
          $notification.post(_0x53efea, _0x122035, _0xc20104, _0x55a571(_0x4aeba0));
        } else {
          if (this.isQuanX()) {
            $notify(_0x53efea, _0x122035, _0xc20104, _0x55a571(_0x4aeba0));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x4b656a = ["", "==============📣系统通知📣=============="];
        _0x4b656a.push(_0x53efea);
        _0x122035 ? _0x4b656a.push(_0x122035) : "";
        _0xc20104 ? _0x4b656a.push(_0xc20104) : "";
        console.log(_0x4b656a.join("\n"));
        this.logs = this.logs.concat(_0x4b656a);
      }
    }
    log(..._0x3dd3f5) {
      if (_0x3dd3f5.length > 0) {
        this.logs = [...this.logs, ..._0x3dd3f5];
      }
      console.log(_0x3dd3f5.join(this.logSeparator));
    }
    logErr(_0x38833e, _0x2aa892) {
      const _0x4f5383 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x4f5383) {
        this.log("", "❗️" + this.name + ", 错误!", _0x38833e);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x38833e.stack);
      }
    }
    wait(_0x468cd2) {
      return new Promise(_0x3c5e17 => setTimeout(_0x3c5e17, _0x468cd2));
    }
    done(_0x116f11 = {}) {
      const _0xf6b104 = new Date().getTime();
      const _0x24a0b6 = (_0xf6b104 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x24a0b6 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x116f11);
      }
    }
  }(_0x248e5c, _0x4212c8);
}