//Tue Jan 28 2025 14:40:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x461228 = new David_0x40cb44("番茄小说");
const David_0x30f6e0 = "V1.1.0";
const David_0x1929b7 = "fqxsapp";
let David_0x1ed0a7 = David_0x461228.getjson(David_0x1929b7, []);
const David_0x4864bf = David_0x461228.isNode() ? require("fs") : "";
const David_0x4a6759 = David_0x461228.isNode() ? require("ws") : "";
const David_0x4c06e5 = "david_cookies.js";
if (David_0x461228.isNode() && !David_0x4864bf.existsSync(David_0x4c06e5)) {
  David_0x461228.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x4864bf.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet fqxsAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    fqxs: fqxsAPP\n}\n\nmodule.exports = APPS", _0x6281d1 => {});
}
const David_0x36556b = David_0x461228.isNode() ? require("http") : "";
const David_0x5573a0 = David_0x461228.isNode() ? require("./sendNotify") : "";
const David_0x2f5bf1 = David_0x461228.isNode() ? require("./david_cookies") : "";
let David_0x376bdc = David_0x461228.getdata("tguserid") || 1;
let David_0x5057f8 = David_0x461228.getdata("fqxsactivecode") || 0;
let David_0x2b3e17 = David_0x461228.getval("fqxsuserck") || 1;
let David_0x3c5628 = David_0x461228.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x461228.getval("apiHosts")) {
  David_0x3c5628 = David_0x461228.getval("apiHosts");
}
const David_0x5f34c5 = 0;
let David_0x508c60 = David_0x461228.getval("tz") || "1";
var David_0xa7f80a = "";
var David_0x1c5172 = "";
let David_0x324dfd = "";
let David_0x3f8654 = "";
let David_0x17eb2b = [];
let David_0x29e151 = [];
let David_0x4f710b = [];
let David_0x4f42a8 = [];
let David_0x50e7f9 = [];
let David_0x50aa9f = [];
let David_0x180a4f = [];
let David_0x50d5a7 = "";
let David_0x52ea11 = [];
let David_0x1af9aa = "";
let David_0x275ff8 = "";
let David_0x10d9fe = "";
let David_0xcc843a = "";
let David_0x3081eb = "";
let David_0x221719 = "";
let David_0x1db924 = "";
let David_0x586cc7 = 1;
let David_0x570721 = 1;
let David_0x41e42b = 1;
let David_0x1b1c47 = 1;
let David_0x53e149 = "";
let David_0x164ee4 = "";
let David_0x89d6a0 = 3;
let David_0x2c844e = "";
if (David_0x461228.isNode()) {
  if (process.env.FQXSAPP) {
    David_0x1ed0a7 = JSON.parse(process.env.FQXSAPP);
  } else {
    David_0x1ed0a7 = David_0x2f5bf1.FQXS;
  }
  David_0x376bdc = process.env.TGUSERID;
  David_0x5057f8 = process.env.FQXSACTIVECODE;
  if (process.env.APIHOST) {
    David_0x3c5628 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x3c5628 = process.env.APIHOSTS;
  }
  David_0xa7f80a = new Date(new Date().getTime()).getHours();
  David_0x1c5172 = new Date(new Date().getTime()).getMinutes();
  David_0x461228.log("🔔 当前环境: Node, 当前时间：" + David_0xa7f80a + "点");
} else {
  David_0xa7f80a = new Date().getHours();
  David_0x1c5172 = new Date().getMinutes();
  David_0x461228.log("🔔 当前环境: 手机代理, 当前时间：" + David_0xa7f80a + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x37e655();
  } else {
    if (!David_0x1ed0a7) {
      David_0x461228.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x461228.log("📢 开始检测服务器接口状态>>>");
    let _0x486b0a = false;
    const _0x392c8b = David_0x3c5628.split("&");
    const _0x2e46d6 = _0x392c8b.length;
    for (let _0x3da536 = 0; _0x3da536 < _0x2e46d6; _0x3da536++) {
      if (David_0x461228.isNode()) {
        _0x486b0a = await David_0x16a525("" + _0x392c8b[_0x3da536], 2500);
      } else {
        if (David_0x461228.isSurge() || David_0x461228.isLoon()) {
          _0x486b0a = await David_0x4df330("" + _0x392c8b[_0x3da536], 2500);
        } else {
          _0x486b0a = await David_0x4f12dc("" + _0x392c8b[_0x3da536], 2500);
        }
      }
      if (_0x486b0a == true) {
        David_0x3c5628 = _0x392c8b[_0x3da536];
        David_0x461228.log("📢 接口" + (_0x3da536 + 1) + "[" + _0x392c8b[_0x3da536] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x3da536 == _0x2e46d6 - 1 && _0x486b0a == false) {
        David_0x461228.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x461228.msg(David_0x461228.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x5057f8 || !David_0x376bdc || David_0x376bdc == 1 || David_0x5057f8 == 0 || David_0x5057f8.length != 32) {
      David_0x461228.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x387cd3(David_0x1929b7, David_0x376bdc, David_0x5057f8);
    David_0x461228.log("📢 " + David_0x3081eb);
    David_0x461228.log("🔔 当前脚本版本号: " + David_0x30f6e0 + "，最新版本号: " + David_0x10d9fe);
    if (David_0x2c844e != "") {
      let _0x4f1396 = new Date(David_0x2c844e).getTime();
      let _0x5e5dd9 = new Date().getTime();
      if (_0x5e5dd9 > _0x4f1396) {
        David_0x461228.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x30f6e0 < David_0x10d9fe) {
      David_0x461228.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x5d2dc4("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x275ff8 != true) {
      David_0x461228.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x53e149 != true) {
      David_0x461228.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x1af9aa != true) {
      David_0x461228.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x1db924 == true) {
      David_0x461228.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x461228.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x2c844e != "") {
      if (David_0x1db924 == true) {
        David_0x461228.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x3de2c4 = new Date(David_0x2c844e).getTime();
        let _0xa2b83c = new Date().getTime();
        if (_0xa2b83c > _0x3de2c4) {
          David_0x461228.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x221719 != true) {
        David_0x461228.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        David_0x461228.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (David_0x586cc7 > 1) {
      David_0x461228.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x89d6a0 * David_0x586cc7 + "个账号。");
    }
    if (David_0x570721 > 1) {
      David_0x461228.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x41e42b + "次, 已经运行了" + David_0x1b1c47 + "次。");
    }
    if (David_0xcc843a != true) {
      David_0x461228.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x1ed0a7.length > David_0x89d6a0 * David_0x586cc7) {
      David_0x461228.log("❗️ 当前用户一次最多运行" + David_0x89d6a0 * David_0x586cc7 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x1ed0a7.length == 0) {
      David_0x461228.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x1b1c47 + David_0x1ed0a7.length > David_0x41e42b) {
      David_0x461228.log("📢 一共发现了" + David_0x1ed0a7.length + "个账号");
      David_0x461228.log("❗️ 当前用户运行次数剩余" + (David_0x41e42b - David_0x1b1c47) + "次，还可以运行" + (David_0x41e42b - David_0x1b1c47) + "个账号，还需要" + (David_0x1ed0a7.length - (David_0x41e42b - David_0x1b1c47)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x2c844e != "") {
      David_0x461228.log("📢 你的会员有效期到： " + David_0x2c844e);
    }
    David_0x461228.log("📢 一共发现了" + David_0x1ed0a7.length + "个账号");
    let _0x288fd8 = [];
    for (let _0x889d6f = 0; _0x889d6f < David_0x1ed0a7.length; _0x889d6f++) {
      _0x288fd8.push(David_0x3d9c52(_0x889d6f));
      David_0x17eb2b[_0x889d6f] = "";
      David_0x52ea11[_0x889d6f] = 1;
      if (David_0x461228.isNode()) {
        David_0x4f42a8[_0x889d6f] = 1;
        await David_0x5eed56(_0x889d6f);
      } else {
        David_0x4f42a8[_0x889d6f] = 1;
      }
    }
    await Promise.allSettled(_0x288fd8).then(_0x1dfb3e => {
      David_0x461228.log("日志整理功能如下：");
      David_0x461228.log("---------------日志整理开始--------------");
      for (let _0x237014 = 0; _0x237014 < David_0x1ed0a7.length; _0x237014++) {
        David_0x461228.log(David_0x17eb2b[_0x237014]);
        David_0x3f8654 += David_0x17eb2b[_0x237014];
      }
      David_0x461228.log("---------------日志整理结束--------------");
      David_0x5d2dc4(David_0x3f8654);
    });
  }
})().catch(_0x4b9a49 => David_0x461228.logErr(_0x4b9a49)).finally(() => David_0x461228.done());
async function David_0x3d9c52(_0x4febab) {
  return new Promise((_0x58f73b, _0x4a482e) => {
    David_0x461228.log("[账号" + (_0x4febab + 1 < 10 ? "0" + (_0x4febab + 1) : _0x4febab + 1) + "]: 开始执行 working......");
    David_0x1a1d85(_0x58f73b, _0x4febab);
  });
}
async function David_0x5eed56(_0x2d4799) {
  if (David_0x461228.isNode()) {
    if (David_0x50e7f9[_0x2d4799] > 0) {
      David_0x461228.log("[账号" + (_0x2d4799 + 1 < 10 ? "0" + (_0x2d4799 + 1) : _0x2d4799 + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0x29e151[_0x2d4799] = new David_0x4a6759(David_0x3c5628.replace("http", "ws") + "/ws");
    David_0x29e151[_0x2d4799].on("open", function _0x4514ed() {
      David_0x461228.log("[账号" + (_0x2d4799 + 1 < 10 ? "0" + (_0x2d4799 + 1) : _0x2d4799 + 1) + "]: 签名通道已连接");
    });
    David_0x29e151[_0x2d4799].on("close", function _0xcab641() {
      David_0x461228.log("[账号" + (_0x2d4799 + 1 < 10 ? "0" + (_0x2d4799 + 1) : _0x2d4799 + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x29e151[_0x2d4799].on("error", function _0x220e43() {
      David_0x461228.log("[账号" + (_0x2d4799 + 1 < 10 ? "0" + (_0x2d4799 + 1) : _0x2d4799 + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x4f42a8[_0x2d4799] = 1;
      David_0x50e7f9[_0x2d4799]++;
      if (David_0x50e7f9[_0x2d4799] <= 3) {
        David_0x5eed56(_0x2d4799);
      }
    });
  }
}
async function David_0x1a1d85(_0x1e1363, _0x546a7a) {
  await David_0x461228.wait(3000, 5000);
  David_0x1ed0a7[_0x546a7a].url = David_0x1ed0a7[_0x546a7a].url.replace(/\+/g, "");
  await David_0x461265(_0x546a7a);
  await David_0x93929b(_0x546a7a);
  await David_0x5d8c83(_0x546a7a);
  await David_0x41aded(_0x546a7a);
  if (David_0x461228.isNode()) {
    await David_0x29e151[_0x546a7a].close();
  }
  await David_0x298493(David_0x1929b7, David_0x376bdc);
  _0x1e1363();
}
async function David_0x37e655() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x39f4d0 = $request.body;
    let _0x2ee1d8 = David_0x2b3e17 - 1;
    if (David_0x1ed0a7[_0x2ee1d8]) {
      David_0x1ed0a7[_0x2ee1d8].token_body = _0x39f4d0;
    } else {
      const _0xdc67b8 = {
        token_body: _0x39f4d0
      };
      David_0x1ed0a7[_0x2ee1d8] = _0xdc67b8;
    }
    David_0x461228.setdata(JSON.stringify(David_0x1ed0a7, null, 2), "fqxsapp");
    David_0x461228.msg(David_0x461228.name, "快音账号" + (_0x2ee1d8 + 1) + "Token获取成功！🎉");
  }
}
function David_0xe89ac6(_0x43a149) {
  let _0x45415b = David_0xb1269();
  let _0x561a0e = David_0x112e4c();
  let _0x340df7 = David_0x204ef8(David_0x1ed0a7[_0x43a149].url);
  David_0x1ed0a7[_0x43a149].iid = _0x340df7.iid;
  David_0x1ed0a7[_0x43a149].did = _0x340df7.device_id;
  _0x340df7.ts = _0x561a0e;
  _0x340df7._rticket = _0x45415b;
  _0x340df7.device_id = David_0x1ed0a7[_0x43a149].did;
  _0x340df7.iid = David_0x1ed0a7[_0x43a149].iid;
  _0x340df7.version_code = "61432";
  _0x340df7.version_name = "6.1.4.32";
  _0x340df7.manifest_version_code = "61432";
  _0x340df7.update_version_code = "61432";
  delete _0x340df7.luckydog_base;
  delete _0x340df7.luckydog_data;
  delete _0x340df7.luckydog_token;
  delete _0x340df7.luckydog_sdk_version;
  delete _0x340df7.luckydog_api_version;
  return David_0x2cd5a1(_0x340df7);
}
async function David_0x301195(_0x3f8913, _0x1c7413, _0x542709) {
  let _0x22017d = "common";
  if (David_0x1ed0a7[_0x3f8913].interface) {
    _0x22017d = David_0x1ed0a7[_0x3f8913].interface;
  }
  let _0x9cc40d = David_0x1ed0a7[_0x3f8913].iid;
  let _0x324cd0 = David_0x1ed0a7[_0x3f8913].did;
  let _0x2b6c80 = "";
  let _0x28b9b1 = [];
  for (let _0x5090af in _0x542709) {
    if (_0x5090af == "Content-Type" || _0x5090af == "Host") {
      continue;
    }
    _0x28b9b1.push(_0x5090af.toLowerCase() + "=[" + _0x542709[_0x5090af] + "]");
  }
  _0x2b6c80 += _0x28b9b1.join(",");
  _0x2b6c80 += "";
  let _0x4136eb = _0x324cd0 + "@" + _0x9cc40d + "@" + encodeURIComponent(_0x1c7413) + "@" + encodeURIComponent(_0x2b6c80) + "@" + _0x22017d;
  await David_0x579050(_0x3f8913, _0x4136eb);
}
async function David_0x461265(_0x884855) {
  let _0x4a9740 = David_0xe89ac6(_0x884855);
  const _0x1f8aef = "https://api5-normal-lq.amemv.com/passport/account/info/v2/?" + _0x4a9740;
  let _0x306cab = "";
  await David_0x11ed00(_0x1f8aef, _0x306cab, _0x884855);
  if (David_0x52ea11[_0x884855] == 0) {
    David_0x461228.log("[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("get", David_0x50aa9f[_0x884855], David_0x3f4b3f());
  let _0x366af7 = David_0x50d5a7;
  if (_0x366af7 != null && _0x366af7.message == "success") {
    David_0x461228.log("[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 用户名=> " + _0x366af7.data.name);
    David_0x17eb2b[_0x884855] += "[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 用户名=> " + _0x366af7.data.name + "\n";
    David_0x461228.log("[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 手机号=> " + _0x366af7.data.mobile);
    David_0x17eb2b[_0x884855] += "[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 手机号=> " + _0x366af7.data.mobile + "\n";
  } else {
    David_0x461228.log("[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 用户信息=> " + _0x366af7.err_tips);
    David_0x17eb2b[_0x884855] += "[账号" + (_0x884855 + 1 < 10 ? "0" + (_0x884855 + 1) : _0x884855 + 1) + "]: 用户信息=> " + _0x366af7.err_tips + "\n";
  }
}
async function David_0x93929b(_0x169f18) {
  let _0x4585d1 = David_0xe89ac6(_0x169f18);
  const _0x4e178e = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/wallet/take_cash_page/?" + _0x4585d1;
  let _0x189bb9 = "";
  await David_0x11ed00(_0x4e178e, _0x189bb9, _0x169f18);
  if (David_0x52ea11[_0x169f18] == 0) {
    David_0x461228.log("[账号" + (_0x169f18 + 1 < 10 ? "0" + (_0x169f18 + 1) : _0x169f18 + 1) + "]: 提现中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("get", David_0x50aa9f[_0x169f18], David_0x3f4b3f());
  let _0x298946 = David_0x50d5a7;
  if (_0x298946 != null && _0x298946.err_no == 0) {
    David_0x4f710b[_0x169f18] = _0x298946.data.take_cash_info.ali_auth_conf;
  } else {
    David_0x461228.log("[账号" + (_0x169f18 + 1 < 10 ? "0" + (_0x169f18 + 1) : _0x169f18 + 1) + "]: 用户信息=> " + _0x298946.err_tips);
    David_0x17eb2b[_0x169f18] += "[账号" + (_0x169f18 + 1 < 10 ? "0" + (_0x169f18 + 1) : _0x169f18 + 1) + "]: 用户信息=> " + _0x298946.err_tips + "\n";
  }
}
async function David_0x5caf95(_0x489ac9, _0x503200) {
  let _0x4bac36 = David_0xe89ac6(_0x489ac9);
  const _0x15fbe6 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/wallet/take_cash?task_key=take_cash&" + _0x4bac36;
  let _0x147842 = "{\n        \"account\" : \"" + David_0x4f710b[_0x489ac9].alipay_uid + "\",\n        \"is_auto\" : false,\n        \"ali_pay_type\": 3,\n        \"take_cash_type\" : 3,\n        \"new_bookshelf\": true,\n        \"cash_amount\" : -" + _0x503200 * 100 + ",\n        \"name\" : \"" + David_0x4f710b[_0x489ac9].alipay_name + "\"\n      }";
  await David_0x11ed00(_0x15fbe6, _0x147842, _0x489ac9);
  if (David_0x52ea11[_0x489ac9] == 0) {
    David_0x461228.log("[账号" + (_0x489ac9 + 1 < 10 ? "0" + (_0x489ac9 + 1) : _0x489ac9 + 1) + "]: 提现中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("post", David_0x50aa9f[_0x489ac9], David_0x3f4b3f());
  let _0x1636c2 = David_0x50d5a7;
  if (_0x1636c2 != null && _0x1636c2.err_no == 0) {
    David_0x461228.log("[账号" + (_0x489ac9 + 1 < 10 ? "0" + (_0x489ac9 + 1) : _0x489ac9 + 1) + "]: 提现结果=> 提现" + _0x503200 + "元，" + _0x1636c2.err_tips + "，提现编号(" + _0x1636c2.data.take_cash_record_id + ")");
    David_0x17eb2b[_0x489ac9] += "[账号" + (_0x489ac9 + 1 < 10 ? "0" + (_0x489ac9 + 1) : _0x489ac9 + 1) + "]: 提现结果=> 提现" + _0x503200 + "元，" + _0x1636c2.err_tips + "，提现编号(" + _0x1636c2.data.take_cash_record_id + ")\n";
  } else {
    David_0x461228.log("[账号" + (_0x489ac9 + 1 < 10 ? "0" + (_0x489ac9 + 1) : _0x489ac9 + 1) + "]: 提现结果=> " + _0x1636c2.err_tips);
    David_0x17eb2b[_0x489ac9] += "[账号" + (_0x489ac9 + 1 < 10 ? "0" + (_0x489ac9 + 1) : _0x489ac9 + 1) + "]: 提现结果=> " + _0x1636c2.err_tips + "\n";
  }
}
async function David_0x5d8c83(_0x2be76d) {
  let _0x1363e9 = David_0xe89ac6(_0x2be76d);
  const _0x570f93 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/sign_in/detail?task_key=sign_in&" + _0x1363e9;
  let _0x416895 = "";
  await David_0x11ed00(_0x570f93, _0x416895, _0x2be76d);
  await David_0x58531c("get", David_0x50aa9f[_0x2be76d], David_0x3f4b3f());
  let _0x4db4cc = David_0x50d5a7;
  if (_0x4db4cc != null && _0x4db4cc.err_no == 0) {
    if (_0x4db4cc.data.today_signed == false) {
      await David_0x3b2055(_0x2be76d);
    }
    if (_0x4db4cc.data.excitation_ad && _0x4db4cc.data.excitation_ad.completed_times < _0x4db4cc.data.excitation_ad.total_times) {
      await David_0x56c746(_0x2be76d);
    }
  } else {
    David_0x461228.log("[账号" + (_0x2be76d + 1 < 10 ? "0" + (_0x2be76d + 1) : _0x2be76d + 1) + "]: 签到=> " + _0x4db4cc.err_tips);
    David_0x17eb2b[_0x2be76d] += "[账号" + (_0x2be76d + 1 < 10 ? "0" + (_0x2be76d + 1) : _0x2be76d + 1) + "]: 签到=> " + _0x4db4cc.err_tips + "\n";
  }
}
async function David_0x3b2055(_0x23f9ae) {
  let _0x55a14d = David_0xe89ac6(_0x23f9ae);
  const _0x437d54 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/sign_in?" + _0x55a14d;
  let _0x40b22c = "{}";
  await David_0x11ed00(_0x437d54, _0x40b22c, _0x23f9ae);
  await David_0x58531c("post", David_0x50aa9f[_0x23f9ae], David_0x3f4b3f());
  let _0x4e0f9e = David_0x50d5a7;
  if (_0x4e0f9e != null && _0x4e0f9e.err_no == 0) {
    David_0x461228.log("[账号" + (_0x23f9ae + 1 < 10 ? "0" + (_0x23f9ae + 1) : _0x23f9ae + 1) + "]: 签到=> " + _0x4e0f9e.err_tips + "，获得" + _0x4e0f9e.data.amount + "金币");
    David_0x17eb2b[_0x23f9ae] += "[账号" + (_0x23f9ae + 1 < 10 ? "0" + (_0x23f9ae + 1) : _0x23f9ae + 1) + "]: 签到=> " + _0x4e0f9e.err_tips + "，获得" + _0x4e0f9e.data.amount + "金币\n";
    if (_0x4e0f9e.data.new_excitation_ad) {
      await David_0x461228.wait(David_0x40c892(15000, 30000));
      await David_0x56c746(_0x23f9ae);
    }
  } else {
    David_0x461228.log("[账号" + (_0x23f9ae + 1 < 10 ? "0" + (_0x23f9ae + 1) : _0x23f9ae + 1) + "]: 签到=> " + _0x4e0f9e.err_tips);
    David_0x17eb2b[_0x23f9ae] += "[账号" + (_0x23f9ae + 1 < 10 ? "0" + (_0x23f9ae + 1) : _0x23f9ae + 1) + "]: 签到=> " + _0x4e0f9e.err_tips + "\n";
  }
}
async function David_0x56c746(_0x576e7) {
  let _0x20432b = David_0xe89ac6(_0x576e7);
  const _0x598802 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_signin?" + _0x20432b;
  let _0x2cabef = "{\"from\":\"sign_in\",\"position\":\"\",\"task_key\":\"excitation_ad_signin\"}";
  await David_0x11ed00(_0x598802, _0x2cabef, _0x576e7);
  await David_0x58531c("post", David_0x50aa9f[_0x576e7], David_0x3f4b3f());
  let _0x5c8ddb = David_0x50d5a7;
  if (_0x5c8ddb != null && _0x5c8ddb.err_no == 0) {
    David_0x461228.log("[账号" + (_0x576e7 + 1 < 10 ? "0" + (_0x576e7 + 1) : _0x576e7 + 1) + "]: 签到广告=> " + _0x5c8ddb.err_tips + "，获得" + _0x5c8ddb.data.amount + "🍅 ");
    David_0x17eb2b[_0x576e7] += "[账号" + (_0x576e7 + 1 < 10 ? "0" + (_0x576e7 + 1) : _0x576e7 + 1) + "]: 签到广告=> " + _0x5c8ddb.err_tips + "，获得" + _0x5c8ddb.data.amount + "🍅 \n";
  } else {
    David_0x461228.log("[账号" + (_0x576e7 + 1 < 10 ? "0" + (_0x576e7 + 1) : _0x576e7 + 1) + "]: 签到广告=> " + _0x5c8ddb.err_tips);
    David_0x17eb2b[_0x576e7] += "[账号" + (_0x576e7 + 1 < 10 ? "0" + (_0x576e7 + 1) : _0x576e7 + 1) + "]: 签到广告=> " + _0x5c8ddb.err_tips + "\n";
  }
}
async function David_0x41aded(_0x2b5e36) {
  let _0x4febd1 = David_0xe89ac6(_0x2b5e36);
  const _0x2b1104 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v2/task/page?" + _0x4febd1;
  let _0x3f52fe = "";
  await David_0x11ed00(_0x2b1104, _0x3f52fe, _0x2b5e36);
  if (David_0x52ea11[_0x2b5e36] == 0) {
    David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("get", David_0x50aa9f[_0x2b5e36], David_0x3f4b3f());
  let _0x4a9a8e = David_0x50d5a7;
  if (_0x4a9a8e != null && _0x4a9a8e.err_no == 0) {
    David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 番茄币=> " + _0x4a9a8e.data.income_data.amount1 + "金币");
    David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 番茄币=> " + _0x4a9a8e.data.income_data.amount1 + "金币\n";
    David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 余额=> " + (_0x4a9a8e.data.income_data.amount2 / 100).toFixed(2) + "元");
    David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 余额=> " + (_0x4a9a8e.data.income_data.amount2 / 100).toFixed(2) + "元\n";
    if (_0x4a9a8e.data.income_data.amount2 / 100 >= 30) {
      await David_0x5caf95(_0x2b5e36, 30);
    } else {
      if (_0x4a9a8e.data.income_data.amount2 / 100 >= 15 && _0x4a9a8e.data.income_data.amount2 / 100 < 30) {
        await David_0x5caf95(_0x2b5e36, 15);
      }
    }
    let _0x3c8b21 = _0x4a9a8e.data.task_list_v2;
    await David_0xa58ad0(_0x2b5e36);
    let _0x540657 = _0x3c8b21.find(_0x36d819 => _0x36d819.key == "sign_in");
    _0x540657 && _0x540657.completed == false;
    let _0x432f7c = _0x4a9a8e.data.treasure_stats;
    if (_0x432f7c.cur_time >= _0x432f7c.next_time) {
      if (David_0x52ea11[_0x2b5e36] == 1) {
        await David_0x4bc96e(_0x2b5e36);
      }
    }
    let _0x41f632 = _0x3c8b21.find(_0x50e48c => _0x50e48c.key == "excitation_ad");
    if (_0x41f632) {
      if (_0x41f632.action_cycle < _0x41f632.action_times && _0x41f632.action_desc == "立即领取") {
        if (David_0x52ea11[_0x2b5e36] == 1) {
          await David_0x4310a8(_0x2b5e36, _0x41f632.key, _0x41f632.name);
        }
      }
    }
    let _0x3beba6 = _0x3c8b21.find(_0x4f778f => _0x4f778f.task_id === 70);
    let _0x4cbf4c = _0x3beba6 ? _0x3beba6.completed : true;
    if (!_0x4cbf4c) {
      await David_0x1de74d(_0x2b5e36);
      await David_0x2cd70d(_0x2b5e36);
    }
    let _0x1df0a3 = _0x3c8b21.find(_0x29d907 => _0x29d907.task_id === 37);
    let _0x37df48 = _0x1df0a3 ? _0x1df0a3.completed : true;
    if (!_0x37df48) {
      let _0x1ace1b = true;
      let _0x266ae7 = JSON.parse(_0x1df0a3.conf_extra);
      let _0x3747a8 = _0x266ae7.listen_and_time;
      let _0x34be9e = _0x3747a8.find(_0x5a2551 => _0x5a2551.task_id === 36);
      if (_0x34be9e && !_0x34be9e.is_completed) {
        listenKey = _0x34be9e.task_key;
        listenLabel = _0x34be9e.desc;
        _0x1ace1b = false;
      }
      let _0x1713a3 = _0x3747a8.find(_0x45d349 => _0x45d349.task_id === 35);
      if (_0x1713a3 && !_0x1713a3.is_completed) {
        listenKey = _0x1713a3.task_key;
        listenLabel = _0x1713a3.desc;
        _0x1ace1b = false;
      }
      let _0x2a47ee = _0x3747a8.find(_0x2f0fba => _0x2f0fba.task_id === 113);
      if (_0x2a47ee && !_0x2a47ee.is_completed) {
        listenKey = _0x2a47ee.task_key;
        listenLabel = _0x2a47ee.desc;
        _0x1ace1b = false;
      }
      let _0x5a24b8 = _0x3747a8.find(_0x11dade => _0x11dade.task_id === 34);
      if (_0x5a24b8 && !_0x5a24b8.is_completed) {
        listenKey = _0x5a24b8.task_key;
        listenLabel = _0x5a24b8.desc;
        _0x1ace1b = false;
      }
      let _0x38df91 = _0x3747a8.find(_0x4ecdc7 => _0x4ecdc7.task_id === 112);
      if (_0x38df91 && !_0x38df91.is_completed) {
        listenKey = _0x38df91.task_key;
        listenLabel = _0x38df91.desc;
        _0x1ace1b = false;
      }
      let _0x33e4b0 = _0x3747a8.find(_0x598ef4 => _0x598ef4.task_id === 33);
      if (_0x33e4b0 && !_0x33e4b0.is_completed) {
        listenKey = _0x33e4b0.task_key;
        listenLabel = _0x33e4b0.desc;
        _0x1ace1b = false;
      }
      let _0x1d9951 = _0x3747a8.find(_0x2b332e => _0x2b332e.task_id === 110);
      if (_0x1d9951 && !_0x1d9951.is_completed) {
        listenKey = _0x1d9951.task_key;
        listenLabel = _0x1d9951.desc;
        _0x1ace1b = false;
      }
      let _0x186642 = _0x3747a8.find(_0x3a2d68 => _0x3a2d68.task_id === 109);
      if (_0x186642 && !_0x186642.is_completed) {
        listenKey = _0x186642.task_key;
        listenLabel = _0x186642.desc;
        _0x1ace1b = false;
      }
      let _0x3b1d7b = _0x3747a8.find(_0xc9cff9 => _0xc9cff9.task_id === 32);
      if (_0x3b1d7b && !_0x3b1d7b.is_completed) {
        listenKey = _0x3b1d7b.task_key;
        listenLabel = _0x3b1d7b.desc;
        _0x1ace1b = false;
      }
      let _0x34129b = _0x3747a8.find(_0x213d6d => _0x213d6d.task_id === 31);
      if (_0x34129b && !_0x34129b.is_completed) {
        listenKey = _0x34129b.task_key;
        listenLabel = _0x34129b.desc;
        _0x1ace1b = false;
      }
      let _0x1a7239 = _0x3747a8.find(_0x2993f6 => _0x2993f6.task_id === 108);
      if (_0x1a7239 && !_0x1a7239.is_completed) {
        listenKey = _0x1a7239.task_key;
        listenLabel = _0x1a7239.desc;
        _0x1ace1b = false;
      }
      let _0x1f3828 = _0x3747a8.find(_0x225596 => _0x225596.task_id === 107);
      if (_0x1f3828 && !_0x1f3828.is_completed) {
        listenKey = _0x1f3828.task_key;
        listenLabel = _0x1f3828.desc;
        _0x1ace1b = false;
      }
      if (_0x1ace1b) {
        David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 听书任务已经完成");
        David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 听书任务已经完成\n";
      } else {
        David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始听书任务");
        David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始听书任务\n";
        await David_0x3b3b4d(_0x2b5e36, listenKey, listenLabel);
      }
    }
    let _0x317e35 = _0x3c8b21.find(_0x52b60e => _0x52b60e.task_id === 122);
    let _0x133f3b = _0x317e35 ? _0x317e35.completed : true;
    if (!_0x133f3b) {
      let _0x1c383a = true;
      let _0xaf052c = JSON.parse(_0x317e35.conf_extra);
      let _0x38b01e = _0xaf052c.watch_and_time;
      let _0x262093 = _0x38b01e.find(_0x3d323d => _0x3d323d.task_id === 130);
      if (_0x262093 && !_0x262093.is_completed) {
        watchKey = _0x262093.task_key;
        watchLabel = _0x262093.desc;
        _0x1c383a = false;
      }
      let _0x4c5582 = _0x38b01e.find(_0x3ff697 => _0x3ff697.task_id === 129);
      if (_0x4c5582 && !_0x4c5582.is_completed) {
        watchKey = _0x4c5582.task_key;
        watchLabel = _0x4c5582.desc;
        _0x1c383a = false;
      }
      let _0x5e4825 = _0x38b01e.find(_0x5a1e22 => _0x5a1e22.task_id === 128);
      if (_0x5e4825 && !_0x5e4825.is_completed) {
        watchKey = _0x5e4825.task_key;
        watchLabel = _0x5e4825.desc;
        _0x1c383a = false;
      }
      let _0x2d6854 = _0x38b01e.find(_0x125fc6 => _0x125fc6.task_id === 127);
      if (_0x2d6854 && !_0x2d6854.is_completed) {
        watchKey = _0x2d6854.task_key;
        watchLabel = _0x2d6854.desc;
        _0x1c383a = false;
      }
      let _0x7494ad = _0x38b01e.find(_0x752b96 => _0x752b96.task_id === 126);
      if (_0x7494ad && !_0x7494ad.is_completed) {
        watchKey = _0x7494ad.task_key;
        watchLabel = _0x7494ad.desc;
        _0x1c383a = false;
      }
      let _0x12b931 = _0x38b01e.find(_0x2a50f2 => _0x2a50f2.task_id === 125);
      if (_0x12b931 && !_0x12b931.is_completed) {
        watchKey = _0x12b931.task_key;
        watchLabel = _0x12b931.desc;
        _0x1c383a = false;
      }
      let _0x53e562 = _0x38b01e.find(_0x2469d5 => _0x2469d5.task_id === 124);
      if (_0x53e562 && !_0x53e562.is_completed) {
        watchKey = _0x53e562.task_key;
        watchLabel = _0x53e562.desc;
        _0x1c383a = false;
      }
      if (_0x1c383a) {
        David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 看短剧任务已经完成");
        David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 看短剧任务已经完成\n";
      } else {
        David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始看短剧任务");
        David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始看短剧任务\n";
        await David_0x52bbd0(_0x2b5e36, watchKey, watchLabel);
      }
    }
    let _0x232844 = _0x3c8b21.find(_0xc3a215 => _0xc3a215.task_id === 49);
    let _0x853e9 = _0x232844 ? _0x232844.completed : true;
    if (!_0x853e9) {
      let _0xcb309d = true;
      let _0x2b90dc = JSON.parse(_0x232844.conf_extra);
      let _0xd69f16 = _0x2b90dc.read_and_time;
      let _0x47015a = _0xd69f16.find(_0x2b453f => _0x2b453f.task_id === 57);
      if (_0x47015a && !_0x47015a.is_completed) {
        no = _0x47015a.task_key;
        label = _0x47015a.desc;
        _0xcb309d = false;
      }
      let _0x1980a8 = _0xd69f16.find(_0xa81c27 => _0xa81c27.task_id === 56);
      if (_0x1980a8 && !_0x1980a8.is_completed) {
        no = _0x1980a8.task_key;
        label = _0x1980a8.desc;
        _0xcb309d = false;
      }
      let _0x6d0554 = _0xd69f16.find(_0x5d64dc => _0x5d64dc.task_id === 55);
      if (_0x6d0554 && !_0x6d0554.is_completed) {
        no = _0x6d0554.task_key;
        label = _0x6d0554.desc;
        _0xcb309d = false;
      }
      let _0x24696e = _0xd69f16.find(_0x1f593f => _0x1f593f.task_id === 54);
      if (_0x24696e && !_0x24696e.is_completed) {
        no = _0x24696e.task_key;
        label = _0x24696e.desc;
        _0xcb309d = false;
      }
      let _0x372853 = _0xd69f16.find(_0xb3296a => _0xb3296a.task_id === 53);
      if (_0x372853 && !_0x372853.is_completed) {
        no = _0x372853.task_key;
        label = _0x372853.desc;
        _0xcb309d = false;
      }
      let _0x4ce64b = _0xd69f16.find(_0x3d0e19 => _0x3d0e19.task_id === 52);
      if (_0x4ce64b && !_0x4ce64b.is_completed) {
        no = _0x4ce64b.task_key;
        label = _0x4ce64b.desc;
        _0xcb309d = false;
      }
      if (_0xcb309d) {
        David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 看漫画任务已经完成");
        David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 看漫画任务已经完成\n";
      } else {
        David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始看漫画任务");
        David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始看漫画任务\n";
        await David_0x50df49(_0x2b5e36, no, label);
      }
    }
    let _0x253678 = true;
    let _0x15b582 = _0x3c8b21.find(_0x2ef948 => _0x2ef948.task_id === 1012);
    if (_0x15b582 && !_0x15b582.completed) {
      no = _0x15b582.key;
      label = _0x15b582.name;
      _0x253678 = false;
    }
    let _0x473765 = _0x3c8b21.find(_0x480c23 => _0x480c23.task_id === 1011);
    if (_0x473765 && !_0x473765.completed) {
      no = _0x473765.key;
      label = _0x473765.name;
      _0x253678 = false;
    }
    let _0x77a55f = _0x3c8b21.find(_0x5e2e07 => _0x5e2e07.task_id === 1010);
    if (_0x77a55f && !_0x77a55f.completed) {
      no = _0x77a55f.key;
      label = _0x77a55f.name;
      _0x253678 = false;
    }
    let _0x209109 = _0x3c8b21.find(_0x4980b3 => _0x4980b3.task_id === 1009);
    if (_0x209109 && !_0x209109.completed) {
      no = _0x209109.key;
      label = _0x209109.name;
      _0x253678 = false;
    }
    let _0x25b373 = _0x3c8b21.find(_0x505e96 => _0x505e96.task_id === 1003);
    if (_0x25b373 && !_0x25b373.completed) {
      no = _0x25b373.key;
      label = _0x25b373.name;
      _0x253678 = false;
    }
    let _0x2b426c = _0x3c8b21.find(_0x53a23d => _0x53a23d.task_id === 1006);
    if (_0x2b426c && !_0x2b426c.completed) {
      no = _0x2b426c.key;
      label = _0x2b426c.name;
      _0x253678 = false;
    }
    let _0x2e15f8 = _0x3c8b21.find(_0x362f9e => _0x362f9e.task_id === 1005);
    if (_0x2e15f8 && !_0x2e15f8.completed) {
      no = _0x2e15f8.key;
      label = _0x2e15f8.name;
      _0x253678 = false;
    }
    let _0xb3a922 = _0x3c8b21.find(_0x4bdd5f => _0x4bdd5f.task_id === 1004);
    if (_0xb3a922 && !_0xb3a922.completed) {
      no = _0xb3a922.key;
      label = _0xb3a922.name;
      _0x253678 = false;
    }
    if (_0x253678) {
      David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 阅读任务已经完成");
      David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 阅读任务已经完成\n";
    } else {
      David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始阅读任务");
      David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 开始阅读任务\n";
      await David_0x3613d7(_0x2b5e36, no, label);
    }
  } else {
    David_0x461228.log("[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 任务中心=> " + _0x4a9a8e.err_tips);
    David_0x17eb2b[_0x2b5e36] += "[账号" + (_0x2b5e36 + 1 < 10 ? "0" + (_0x2b5e36 + 1) : _0x2b5e36 + 1) + "]: 任务中心=> " + _0x4a9a8e.err_tips + "\n";
  }
}
async function David_0x52bbd0(_0x1316c7, _0x3a8f09, _0x4fe6ce) {
  let _0x6003d1 = David_0xe89ac6(_0x1316c7);
  const _0x453886 = "https://api5-normal-sinfonlinea.fqnovel.com/luckycat/novel/v1/task/done/daily_watch_short_video?" + _0x6003d1;
  const _0x243ee1 = "{\n        \"short_video_task_key\" : \"" + _0x3a8f09 + "\"\n      }";
  await David_0x11ed00(_0x453886, _0x243ee1, _0x1316c7);
  await David_0x58531c("post", David_0x50aa9f[_0x1316c7], David_0x3f4b3f());
  let _0x3143c1 = David_0x50d5a7;
  if (_0x3143c1.err_no == 0) {
    David_0x461228.log("[账号" + (_0x1316c7 + 1 < 10 ? "0" + (_0x1316c7 + 1) : _0x1316c7 + 1) + "]: 看短视频" + _0x4fe6ce + "任务完成，" + _0x3143c1.err_tips + "获得" + _0x3143c1.data.amount + "🍅");
    David_0x324dfd += "[账号" + (_0x1316c7 + 1 < 10 ? "0" + (_0x1316c7 + 1) : _0x1316c7 + 1) + "]: 看短视频" + _0x4fe6ce + "任务完成，" + _0x3143c1.err_tips + "获得" + _0x3143c1.data.amount + "🍅\n";
    David_0x17eb2b[_0x1316c7] += "[账号" + (_0x1316c7 + 1 < 10 ? "0" + (_0x1316c7 + 1) : _0x1316c7 + 1) + "]: 看短视频" + _0x4fe6ce + "任务完成，" + _0x3143c1.err_tips + "获得" + _0x3143c1.data.amount + "🍅\n";
  } else {
    David_0x461228.log("[账号" + (_0x1316c7 + 1 < 10 ? "0" + (_0x1316c7 + 1) : _0x1316c7 + 1) + "]: 看短视频" + _0x3143c1.err_tips);
    David_0x17eb2b[_0x1316c7] += "[账号" + (_0x1316c7 + 1 < 10 ? "0" + (_0x1316c7 + 1) : _0x1316c7 + 1) + "]: 看短视频" + _0x3143c1.err_tips + "\n";
  }
}
async function David_0x3b3b4d(_0x1b5d4a, _0x12f298, _0x4c049a) {
  let _0x26cc8f = David_0xe89ac6(_0x1b5d4a);
  const _0x3d3007 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/" + _0x12f298 + "?" + _0x26cc8f;
  const _0x47cf88 = "{\n        \"new_bookshelf\" : true,\n        \"task_key\" : \"" + _0x12f298 + "\"\n      }";
  await David_0x11ed00(_0x3d3007, _0x47cf88, _0x1b5d4a);
  await David_0x58531c("post", David_0x50aa9f[_0x1b5d4a], David_0x3f4b3f());
  let _0x19072a = David_0x50d5a7;
  if (_0x19072a.err_no == 0) {
    David_0x461228.log("[账号" + (_0x1b5d4a + 1 < 10 ? "0" + (_0x1b5d4a + 1) : _0x1b5d4a + 1) + "]: " + _0x4c049a + "任务完成，" + _0x19072a.err_tips + "获得" + _0x19072a.data.amount + "🍅");
    David_0x324dfd += "[账号" + (_0x1b5d4a + 1 < 10 ? "0" + (_0x1b5d4a + 1) : _0x1b5d4a + 1) + "]: " + _0x4c049a + "任务完成，" + _0x19072a.err_tips + "获得" + _0x19072a.data.amount + "🍅\n";
    David_0x17eb2b[_0x1b5d4a] += "[账号" + (_0x1b5d4a + 1 < 10 ? "0" + (_0x1b5d4a + 1) : _0x1b5d4a + 1) + "]: " + _0x4c049a + "任务完成，" + _0x19072a.err_tips + "获得" + _0x19072a.data.amount + "🍅\n";
  } else {
    David_0x461228.log("[账号" + (_0x1b5d4a + 1 < 10 ? "0" + (_0x1b5d4a + 1) : _0x1b5d4a + 1) + "]: " + _0x19072a.err_tips);
    David_0x17eb2b[_0x1b5d4a] += "[账号" + (_0x1b5d4a + 1 < 10 ? "0" + (_0x1b5d4a + 1) : _0x1b5d4a + 1) + "]: " + _0x19072a.err_tips + "\n";
  }
}
async function David_0x3613d7(_0x44a97a, _0x11e879, _0x173d39) {
  let _0x4aca4c = David_0xe89ac6(_0x44a97a);
  const _0x403d49 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/" + _0x11e879 + "?" + _0x4aca4c;
  const _0x2affba = "{\n        \"new_bookshelf\" : true,\n        \"task_key\" : \"" + _0x11e879 + "\"\n      }";
  await David_0x11ed00(_0x403d49, _0x2affba, _0x44a97a);
  await David_0x58531c("post", David_0x50aa9f[_0x44a97a], David_0x3f4b3f());
  let _0x46e6b2 = David_0x50d5a7;
  if (_0x46e6b2.err_no == 0) {
    David_0x461228.log("[账号" + (_0x44a97a + 1 < 10 ? "0" + (_0x44a97a + 1) : _0x44a97a + 1) + "]: 阅读" + _0x173d39 + "任务完成，" + _0x46e6b2.err_tips + "获得" + _0x46e6b2.data.amount + "🍅");
    David_0x324dfd += "[账号" + (_0x44a97a + 1 < 10 ? "0" + (_0x44a97a + 1) : _0x44a97a + 1) + "]: 阅读" + _0x173d39 + "任务完成，" + _0x46e6b2.err_tips + "获得" + _0x46e6b2.data.amount + "🍅\n";
    David_0x17eb2b[_0x44a97a] += "[账号" + (_0x44a97a + 1 < 10 ? "0" + (_0x44a97a + 1) : _0x44a97a + 1) + "]: 阅读" + _0x173d39 + "任务完成，" + _0x46e6b2.err_tips + "获得" + _0x46e6b2.data.amount + "🍅\n";
    await David_0x461228.wait(David_0x40c892(10000, 15000));
    await David_0x47e83d(_0x44a97a);
  } else {
    David_0x461228.log("[账号" + (_0x44a97a + 1 < 10 ? "0" + (_0x44a97a + 1) : _0x44a97a + 1) + "]: 阅读" + _0x46e6b2.err_tips);
    David_0x17eb2b[_0x44a97a] += "[账号" + (_0x44a97a + 1 < 10 ? "0" + (_0x44a97a + 1) : _0x44a97a + 1) + "]: 阅读" + _0x46e6b2.err_tips + "\n";
  }
}
async function David_0x47e83d(_0x315ca8) {
  let _0x24b347 = David_0xe89ac6(_0x315ca8);
  const _0x230c3e = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad?" + _0x24b347;
  const _0x37e725 = "{\n        \"new_bookshelf\" : true,\n        \"task_key\" : \"excitation_ad_read\"\n      }";
  await David_0x11ed00(_0x230c3e, _0x37e725, _0x315ca8);
  await David_0x58531c("post", David_0x50aa9f[_0x315ca8], David_0x3f4b3f());
  let _0x16f5b6 = David_0x50d5a7;
  if (_0x16f5b6.err_no == 0) {
    David_0x461228.log("[账号" + (_0x315ca8 + 1 < 10 ? "0" + (_0x315ca8 + 1) : _0x315ca8 + 1) + "]: 阅读时长广告" + _0x16f5b6.err_tips + "获得" + _0x16f5b6.data.amount + "🍅");
    David_0x324dfd += "[账号" + (_0x315ca8 + 1 < 10 ? "0" + (_0x315ca8 + 1) : _0x315ca8 + 1) + "]: 阅读时长广告" + _0x16f5b6.err_tips + "获得" + _0x16f5b6.data.amount + "🍅\n";
    David_0x17eb2b[_0x315ca8] += "[账号" + (_0x315ca8 + 1 < 10 ? "0" + (_0x315ca8 + 1) : _0x315ca8 + 1) + "]: 阅读时长广告" + _0x16f5b6.err_tips + "获得" + _0x16f5b6.data.amount + "🍅\n";
  } else {
    David_0x461228.log("[账号" + (_0x315ca8 + 1 < 10 ? "0" + (_0x315ca8 + 1) : _0x315ca8 + 1) + "]: 阅读时长广告" + _0x16f5b6.err_tips);
    David_0x17eb2b[_0x315ca8] += "[账号" + (_0x315ca8 + 1 < 10 ? "0" + (_0x315ca8 + 1) : _0x315ca8 + 1) + "]: 阅读时长广告" + _0x16f5b6.err_tips + "\n";
  }
}
async function David_0x50df49(_0x44759e, _0x53c0a1, _0x336ac8) {
  let _0x164b23 = David_0xe89ac6(_0x44759e);
  const _0x28a423 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/daily_read_comics?" + _0x164b23;
  const _0x5b966d = "{\n        \"task_key\" : \"daily_read_comics\",\n        \"read_comics_task_key\" : \"" + _0x53c0a1 + "\"\n      }";
  await David_0x11ed00(_0x28a423, _0x5b966d, _0x44759e);
  await David_0x58531c("post", David_0x50aa9f[_0x44759e], David_0x3f4b3f());
  let _0xd79744 = David_0x50d5a7;
  if (_0xd79744.err_no == 0) {
    David_0x461228.log("[账号" + (_0x44759e + 1 < 10 ? "0" + (_0x44759e + 1) : _0x44759e + 1) + "]: 看漫画" + _0x336ac8 + "任务完成，" + _0xd79744.err_tips + "获得" + _0xd79744.data.amount + "🍅");
    David_0x324dfd += "[账号" + (_0x44759e + 1 < 10 ? "0" + (_0x44759e + 1) : _0x44759e + 1) + "]: 看漫画" + _0x336ac8 + "任务完成，" + _0xd79744.err_tips + "获得" + _0xd79744.data.amount + "🍅\n";
    David_0x17eb2b[_0x44759e] += "[账号" + (_0x44759e + 1 < 10 ? "0" + (_0x44759e + 1) : _0x44759e + 1) + "]: 看漫画" + _0x336ac8 + "任务完成，" + _0xd79744.err_tips + "获得" + _0xd79744.data.amount + "🍅\n";
  } else {
    David_0x461228.log("[账号" + (_0x44759e + 1 < 10 ? "0" + (_0x44759e + 1) : _0x44759e + 1) + "]: 看漫画任务" + _0xd79744.err_tips);
    David_0x17eb2b[_0x44759e] += "[账号" + (_0x44759e + 1 < 10 ? "0" + (_0x44759e + 1) : _0x44759e + 1) + "]: 看漫画任务" + _0xd79744.err_tips + "\n";
  }
}
async function David_0x4bc96e(_0xdd7d1a) {
  let _0xf7d990 = David_0xe89ac6(_0xdd7d1a);
  let _0x1c3657 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/treasure_task?" + _0xf7d990;
  let _0xd6bf41 = "{\"enter_from\":\"\"}";
  await David_0x11ed00(_0x1c3657, _0xd6bf41, _0xdd7d1a);
  if (David_0x52ea11[_0xdd7d1a] == 0) {
    David_0x461228.log("[账号" + (_0xdd7d1a + 1 < 10 ? "0" + (_0xdd7d1a + 1) : _0xdd7d1a + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("post", David_0x50aa9f[_0xdd7d1a], David_0x3f4b3f());
  let _0x187512 = David_0x50d5a7;
  if (_0x187512 != null && _0x187512.err_no == 0) {
    David_0x461228.log("[账号" + (_0xdd7d1a + 1 < 10 ? "0" + (_0xdd7d1a + 1) : _0xdd7d1a + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + _0x187512.data.amount + "🍅 ");
    David_0x17eb2b[_0xdd7d1a] += "[账号" + (_0xdd7d1a + 1 < 10 ? "0" + (_0xdd7d1a + 1) : _0xdd7d1a + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + _0x187512.data.amount + "🍅 \n";
    await David_0x461228.wait(David_0x40c892(15000, 30000));
    await David_0x48e7c2(_0xdd7d1a);
  } else {
    David_0x461228.log("[账号" + (_0xdd7d1a + 1 < 10 ? "0" + (_0xdd7d1a + 1) : _0xdd7d1a + 1) + "]: 打开宝箱=> " + _0x187512.err_tips);
    David_0x17eb2b[_0xdd7d1a] += "[账号" + (_0xdd7d1a + 1 < 10 ? "0" + (_0xdd7d1a + 1) : _0xdd7d1a + 1) + "]: 打开宝箱=> " + _0x187512.err_tips + "\n";
  }
}
async function David_0x48e7c2(_0x38bc80) {
  let _0x2d3880 = David_0xe89ac6(_0x38bc80);
  const _0x5d62e8 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_treasure_box?" + _0x2d3880;
  let _0x3ee16b = "{\"from\":\"260493\",\"position\":\"\",\"task_key\":\"excitation_ad_treasure_box\"}";
  await David_0x11ed00(_0x5d62e8, _0x3ee16b, _0x38bc80);
  if (David_0x52ea11[_0x38bc80] == 0) {
    David_0x461228.log("[账号" + (_0x38bc80 + 1 < 10 ? "0" + (_0x38bc80 + 1) : _0x38bc80 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("post", David_0x50aa9f[_0x38bc80], David_0x3f4b3f());
  let _0x1afcf0 = David_0x50d5a7;
  if (_0x1afcf0 != null && _0x1afcf0.err_no == 0) {
    David_0x461228.log("[账号" + (_0x38bc80 + 1 < 10 ? "0" + (_0x38bc80 + 1) : _0x38bc80 + 1) + "]: 宝箱广告=> 获得" + _0x1afcf0.data.amount + "🍅 ");
    David_0x17eb2b[_0x38bc80] += "[账号" + (_0x38bc80 + 1 < 10 ? "0" + (_0x38bc80 + 1) : _0x38bc80 + 1) + "]: 宝箱广告=> 获得" + _0x1afcf0.data.amount + "🍅 \n";
    for (let _0x4a97f7 = 0; _0x4a97f7 < 3; _0x4a97f7++) {
      if (David_0x1ed0a7[_0x38bc80].isAppend && David_0x1ed0a7[_0x38bc80].isAppend == 1) {
        await David_0x461228.wait(David_0x40c892(15000, 25000));
        await David_0x212a22(_0x38bc80);
      }
    }
  } else {
    David_0x461228.log("[账号" + (_0x38bc80 + 1 < 10 ? "0" + (_0x38bc80 + 1) : _0x38bc80 + 1) + "]: 宝箱广告=> " + _0x1afcf0.err_tips);
    David_0x17eb2b[_0x38bc80] += "[账号" + (_0x38bc80 + 1 < 10 ? "0" + (_0x38bc80 + 1) : _0x38bc80 + 1) + "]: 宝箱广告=> " + _0x1afcf0.err_tips + "\n";
  }
}
async function David_0x212a22(_0x54e0b0) {
  let _0x41525b = David_0xe89ac6(_0x54e0b0);
  const _0x39dedd = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_repeat?" + _0x41525b + "&md=0";
  let _0x43907a = "{\"task_key\":\"excitation_ad_repeat\"}";
  await David_0x11ed00(_0x39dedd, _0x43907a, _0x54e0b0);
  if (David_0x52ea11[_0x54e0b0] == 0) {
    David_0x461228.log("[账号" + (_0x54e0b0 + 1 < 10 ? "0" + (_0x54e0b0 + 1) : _0x54e0b0 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("post", David_0x50aa9f[_0x54e0b0], David_0x3f4b3f());
  let _0x377df8 = David_0x50d5a7;
  if (_0x377df8 != null && _0x377df8.err_no == 0) {
    David_0x461228.log("[账号" + (_0x54e0b0 + 1 < 10 ? "0" + (_0x54e0b0 + 1) : _0x54e0b0 + 1) + "]: 追加广告=> 获得" + _0x377df8.data.amount + "🍅 ");
    David_0x17eb2b[_0x54e0b0] += "[账号" + (_0x54e0b0 + 1 < 10 ? "0" + (_0x54e0b0 + 1) : _0x54e0b0 + 1) + "]: 追加广告=> 获得" + _0x377df8.data.amount + "🍅 \n";
  } else {
    David_0x461228.log("[账号" + (_0x54e0b0 + 1 < 10 ? "0" + (_0x54e0b0 + 1) : _0x54e0b0 + 1) + "]: 宝箱广告=> " + _0x377df8.err_tips);
    David_0x17eb2b[_0x54e0b0] += "[账号" + (_0x54e0b0 + 1 < 10 ? "0" + (_0x54e0b0 + 1) : _0x54e0b0 + 1) + "]: 宝箱广告=> " + _0x377df8.err_tips + "\n";
  }
}
async function David_0x4310a8(_0x34ea77, _0x130384, _0xf39097) {
  let _0x4b5b71 = David_0xe89ac6(_0x34ea77);
  const _0xe3ff58 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad?" + _0x4b5b71;
  let _0x2a6199 = "{\"from\":\"task_list\",\"position\":\"task_page\",\"task_key\":\"" + _0x130384 + "\"}";
  await David_0x11ed00(_0xe3ff58, _0x2a6199, _0x34ea77);
  await David_0x58531c("post", David_0x50aa9f[_0x34ea77], David_0x3f4b3f());
  let _0x183077 = David_0x50d5a7;
  if (_0x183077 != null && _0x183077.err_no == 0) {
    David_0x461228.log("[账号" + (_0x34ea77 + 1 < 10 ? "0" + (_0x34ea77 + 1) : _0x34ea77 + 1) + "]: " + _0xf39097 + "广告=> 获得" + _0x183077.data.amount + "🍅 ");
    David_0x17eb2b[_0x34ea77] += "[账号" + (_0x34ea77 + 1 < 10 ? "0" + (_0x34ea77 + 1) : _0x34ea77 + 1) + "]: " + _0xf39097 + "广告=> 获得" + _0x183077.data.amount + "🍅 \n";
    for (let _0x30b8ba = 0; _0x30b8ba < 3; _0x30b8ba++) {
      if (David_0x1ed0a7[_0x34ea77].isAppend && David_0x1ed0a7[_0x34ea77].isAppend == 1) {
        await David_0x461228.wait(David_0x40c892(15000, 25000));
        await David_0x212a22(_0x34ea77);
      }
    }
  } else {
    David_0x461228.log("[账号" + (_0x34ea77 + 1 < 10 ? "0" + (_0x34ea77 + 1) : _0x34ea77 + 1) + "]: " + _0xf39097 + "广告=> " + _0x183077.err_tips);
    David_0x17eb2b[_0x34ea77] += "[账号" + (_0x34ea77 + 1 < 10 ? "0" + (_0x34ea77 + 1) : _0x34ea77 + 1) + "]: " + _0xf39097 + "广告=> " + _0x183077.err_tips + "\n";
  }
}
async function David_0x1de74d(_0x11031b) {
  let _0x2dc8fb = David_0xe89ac6(_0x11031b);
  const _0x44a721 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/lottery/lottery_task_page?" + _0x2dc8fb;
  await David_0x11ed00(_0x44a721, "", _0x11031b);
  await David_0x58531c("get", David_0x50aa9f[_0x11031b], David_0x3f4b3f());
  let _0xc3fef0 = David_0x50d5a7;
  if (_0xc3fef0.err_no == 0) {
    let _0x389e73 = _0xc3fef0.data.task_list;
    for (let _0x5e9517 = 0; _0x5e9517 < _0x389e73.length; _0x5e9517++) {
      let _0x3e43aa = _0x389e73[_0x5e9517];
      if (_0x3e43aa.completed == false) {
        await David_0x461228.wait(David_0x40c892(15000, 35000));
        await David_0x1491f4(_0x11031b, _0x3e43aa.task_id);
      }
    }
  }
}
async function David_0x2cd70d(_0x41ab23) {
  let _0x4f462f = David_0xe89ac6(_0x41ab23);
  const _0xb06487 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/lottery/page?" + _0x4f462f;
  await David_0x11ed00(_0xb06487, "", _0x41ab23);
  await David_0x58531c("get", David_0x50aa9f[_0x41ab23], David_0x3f4b3f());
  let _0x230659 = David_0x50d5a7;
  if (_0x230659.err_no == 0) {
    let _0xeff6b6 = _0x230659.data.today_completed;
    if (!_0xeff6b6) {
      await David_0x2de989(_0x41ab23);
    }
    const _0x5b2b6f = _0x230659.data.continue_lottery_data;
    if (_0x5b2b6f.today_completed) {
      David_0x461228.log("[账号" + (_0x41ab23 + 1 < 10 ? "0" + (_0x41ab23 + 1) : _0x41ab23 + 1) + "]: 今天已完成抽奖");
      David_0x17eb2b[_0x41ab23] += "[账号" + (_0x41ab23 + 1 < 10 ? "0" + (_0x41ab23 + 1) : _0x41ab23 + 1) + "]: 今天已完成抽奖\n";
    } else {
      await David_0x25c905(_0x41ab23);
    }
  }
}
async function David_0x2de989(_0x3e97c0) {
  let _0x140edc = David_0xe89ac6(_0x3e97c0);
  const _0x2684ff = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/lottery/do_lottery?" + _0x140edc;
  const _0xde6652 = "{\n        \"new_bookshelf\" : true\n      }";
  await David_0x11ed00(_0x2684ff, _0xde6652, _0x3e97c0);
  await David_0x58531c("post", David_0x50aa9f[_0x3e97c0], David_0x3f4b3f());
  let _0x5ce0f6 = David_0x50d5a7;
  if (_0x5ce0f6.err_no == 0) {
    if (_0x5ce0f6.data.reward.type == 1) {
      David_0x461228.log("[账号" + (_0x3e97c0 + 1 < 10 ? "0" + (_0x3e97c0 + 1) : _0x3e97c0 + 1) + "]: 转动转盘获得" + _0x5ce0f6.data.reward.amount + "🍅");
      David_0x17eb2b[_0x3e97c0] += "[账号" + (_0x3e97c0 + 1 < 10 ? "0" + (_0x3e97c0 + 1) : _0x3e97c0 + 1) + "]: 转动转盘获得" + _0x5ce0f6.data.reward.amount + "🍅\n";
    }
  } else {
    David_0x461228.log("[账号" + (_0x3e97c0 + 1 < 10 ? "0" + (_0x3e97c0 + 1) : _0x3e97c0 + 1) + "]: 转动转盘" + _0x5ce0f6.err_tips);
    David_0x17eb2b[_0x3e97c0] += "[账号" + (_0x3e97c0 + 1 < 10 ? "0" + (_0x3e97c0 + 1) : _0x3e97c0 + 1) + "]: 转动转盘" + _0x5ce0f6.err_tips + "\n";
  }
}
async function David_0x25c905(_0xe62319) {
  let _0x4f3fd9 = David_0xe89ac6(_0xe62319);
  const _0x1e7bc0 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/lottery/continue_lottery?" + _0x4f3fd9;
  const _0x563f4b = "{\n        \"new_bookshelf\" : true\n      }";
  await David_0x11ed00(_0x1e7bc0, _0x563f4b, _0xe62319);
  await David_0x58531c("post", David_0x50aa9f[_0xe62319], David_0x3f4b3f());
  let _0x1073c5 = David_0x50d5a7;
  if (_0x1073c5.err_no == 0) {
    if (_0x1073c5.data.reward && _0x1073c5.data.reward.type == 1) {
      David_0x461228.log("[账号" + (_0xe62319 + 1 < 10 ? "0" + (_0xe62319 + 1) : _0xe62319 + 1) + "]: 连续抽奖获得" + _0x1073c5.data.reward.amount + "🍅");
      David_0x17eb2b[_0xe62319] += "[账号" + (_0xe62319 + 1 < 10 ? "0" + (_0xe62319 + 1) : _0xe62319 + 1) + "]: 连续抽奖获得" + _0x1073c5.data.reward.amount + "🍅\n";
    }
    if (_0x1073c5.data.amount_type && _0x1073c5.data.amount_type == "gold") {
      David_0x461228.log("[账号" + (_0xe62319 + 1 < 10 ? "0" + (_0xe62319 + 1) : _0xe62319 + 1) + "]: 连续抽奖获得" + _0x1073c5.data.amount + "🍅");
      David_0x17eb2b[_0xe62319] += "[账号" + (_0xe62319 + 1 < 10 ? "0" + (_0xe62319 + 1) : _0xe62319 + 1) + "]: 连续抽奖获得" + _0x1073c5.data.amount + "🍅\n";
    }
  } else {
    David_0x461228.log("[账号" + (_0xe62319 + 1 < 10 ? "0" + (_0xe62319 + 1) : _0xe62319 + 1) + "]: 连续抽奖" + _0x1073c5.err_tips);
    David_0x17eb2b[_0xe62319] += "[账号" + (_0xe62319 + 1 < 10 ? "0" + (_0xe62319 + 1) : _0xe62319 + 1) + "]: 连续抽奖" + _0x1073c5.err_tips + "\n";
  }
}
async function David_0x1491f4(_0x504e92, _0x468525) {
  let _0x3117db = David_0xe89ac6(_0x504e92);
  const _0x151bda = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/lottery/update_chance?" + _0x3117db;
  const _0x506979 = "{\n        \"new_bookshelf\" : true,\n        \"task_id\" : " + _0x468525 + "\n      }";
  await David_0x11ed00(_0x151bda, _0x506979, _0x504e92);
  await David_0x58531c("post", David_0x50aa9f[_0x504e92], David_0x3f4b3f());
  let _0x4f9c17 = David_0x50d5a7;
  if (_0x4f9c17.err_no == 0) {
    David_0x461228.log("[账号" + (_0x504e92 + 1 < 10 ? "0" + (_0x504e92 + 1) : _0x504e92 + 1) + "]: 转盘增加" + _0x4f9c17.err_tips);
    David_0x17eb2b[_0x504e92] += "[账号" + (_0x504e92 + 1 < 10 ? "0" + (_0x504e92 + 1) : _0x504e92 + 1) + "]: 转盘增加" + _0x4f9c17.err_tips + "\n";
  } else {
    David_0x461228.log("[账号" + (_0x504e92 + 1 < 10 ? "0" + (_0x504e92 + 1) : _0x504e92 + 1) + "]: 转盘增加" + _0x4f9c17.err_tips);
    David_0x17eb2b[_0x504e92] += "[账号" + (_0x504e92 + 1 < 10 ? "0" + (_0x504e92 + 1) : _0x504e92 + 1) + "]: 转盘增加" + _0x4f9c17.err_tips + "\n";
  }
}
async function David_0xa58ad0(_0xbf939) {
  let _0x52b21c = David_0xe89ac6(_0xbf939);
  const _0x25ce27 = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/redpacket_rain_detail?" + _0x52b21c;
  let _0x5574e8 = "";
  await David_0x11ed00(_0x25ce27, _0x5574e8, _0xbf939);
  if (David_0x52ea11[_0xbf939] == 0) {
    David_0x461228.log("[账号" + (_0xbf939 + 1 < 10 ? "0" + (_0xbf939 + 1) : _0xbf939 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("get", David_0x50aa9f[_0xbf939], David_0x3f4b3f());
  let _0x130447 = David_0x50d5a7;
  if (_0x130447 != null && _0x130447.err_no == 0) {
    let _0x4a6559 = David_0x112e4c();
    if (_0x4a6559 > String(_0x130447.data.ready_time)) {
      David_0x461228.log("[账号" + (_0xbf939 + 1 < 10 ? "0" + (_0xbf939 + 1) : _0xbf939 + 1) + "]: 红包雨任务=> 看完广告可获得" + _0x130447.data.total_reward_after_ad + "🍅");
      David_0x17eb2b[_0xbf939] += "[账号" + (_0xbf939 + 1 < 10 ? "0" + (_0xbf939 + 1) : _0xbf939 + 1) + "]: 红包雨任务=> 看完广告可获得" + _0x130447.data.total_reward_after_ad + "🍅\n";
      await David_0x4aaa12(_0xbf939, _0x130447.data.strategy_timestamp);
    }
  } else {
    David_0x461228.log("[账号" + (_0xbf939 + 1 < 10 ? "0" + (_0xbf939 + 1) : _0xbf939 + 1) + "]: 红包雨任务=> " + _0x130447.err_tips);
    David_0x17eb2b[_0xbf939] += "[账号" + (_0xbf939 + 1 < 10 ? "0" + (_0xbf939 + 1) : _0xbf939 + 1) + "]: 红包雨任务=> " + _0x130447.err_tips + "\n";
  }
}
async function David_0x4aaa12(_0x6db5ff, _0x1760f4) {
  let _0x22aec0 = David_0xe89ac6(_0x6db5ff);
  const _0x4abd6a = "https://api5-normal-sinfonlineb.fqnovel.com/luckycat/novel/v1/task/done/redpacket_rain?" + _0x22aec0;
  let _0x48a547 = "{\"strategy_timestamp\":" + _0x1760f4 + ",\"with_excitation_ad\":true}";
  await David_0x11ed00(_0x4abd6a, _0x48a547, _0x6db5ff);
  if (David_0x52ea11[_0x6db5ff] == 0) {
    David_0x461228.log("[账号" + (_0x6db5ff + 1 < 10 ? "0" + (_0x6db5ff + 1) : _0x6db5ff + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x58531c("post", David_0x50aa9f[_0x6db5ff], David_0x3f4b3f());
  let _0x352fc7 = David_0x50d5a7;
  if (_0x352fc7 != null && _0x352fc7.err_no == 0) {
    David_0x461228.log("[账号" + (_0x6db5ff + 1 < 10 ? "0" + (_0x6db5ff + 1) : _0x6db5ff + 1) + "]: 红包雨广告=> 获得" + _0x352fc7.data.amount + "🍅");
    David_0x17eb2b[_0x6db5ff] += "[账号" + (_0x6db5ff + 1 < 10 ? "0" + (_0x6db5ff + 1) : _0x6db5ff + 1) + "]: 红包雨广告=> 获得" + _0x352fc7.data.amount + "🍅 \n";
  } else {
    David_0x461228.log("[账号" + (_0x6db5ff + 1 < 10 ? "0" + (_0x6db5ff + 1) : _0x6db5ff + 1) + "]: 红包雨广告=> " + _0x352fc7.err_tips);
    David_0x17eb2b[_0x6db5ff] += "[账号" + (_0x6db5ff + 1 < 10 ? "0" + (_0x6db5ff + 1) : _0x6db5ff + 1) + "]: 红包雨广告=> " + _0x352fc7.err_tips + "\n";
  }
}
function David_0x387cd3(_0x2de0ef, _0x475c10, _0x327780) {
  return new Promise((_0x426664, _0x300b6b) => {
    const _0x1867f6 = David_0x3c5628 + "/script/permissions/lastest";
    const _0x3f9d38 = {
      appName: _0x2de0ef,
      userId: _0x475c10,
      activityCode: _0x327780,
      version: David_0x30f6e0
    };
    const _0xb44cc0 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x14b433 = {
      url: _0x1867f6,
      headers: _0xb44cc0,
      body: JSON.stringify(_0x3f9d38)
    };
    David_0x461228.post(_0x14b433, async (_0x3ffc30, _0x27dde4, _0x3a7484) => {
      if (_0x3a7484 && _0x3a7484 != null && _0x3a7484.replace(/\"/g, "").length > 50) {
        const _0x54cdfd = _0x3a7484.replace(/\"/g, "").slice(34);
        const _0x32e298 = new David_0x2da905();
        result = JSON.parse(_0x32e298.decode(_0x54cdfd));
        try {
          David_0x10d9fe = result.version;
          David_0x1af9aa = result.userAuth;
          David_0x275ff8 = result.scriptAuth;
          David_0xcc843a = result.runAuth;
          David_0x3081eb = result.notify;
          David_0x221719 = result.vipAuth;
          David_0x1db924 = result.isCharge;
          David_0x586cc7 = result.runAcounts;
          David_0x570721 = result.buyCount;
          David_0x1b1c47 = result.runedCounts;
          David_0x41e42b = result.runTotalCounts;
          David_0x53e149 = result.userRank;
          David_0x164ee4 = result.invicate;
          David_0x89d6a0 = result.accountNumbers;
          David_0x2c844e = result.vipDate;
        } catch (_0xf2a839) {
          David_0x461228.log(_0xf2a839);
        }
      } else {
        David_0x461228.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x426664();
    });
  });
}
function David_0x298493(_0x313a0c, _0x4b07be) {
  return new Promise((_0x3607d5, _0x2c66ad) => {
    const _0x5d4139 = David_0x3c5628 + "/script/run/add";
    const _0x53383c = {
      appName: _0x313a0c,
      userId: _0x4b07be,
      activityCode: David_0x5057f8,
      version: David_0x30f6e0
    };
    const _0x29f268 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x498335 = {
      url: _0x5d4139,
      headers: _0x29f268,
      body: JSON.stringify(_0x53383c)
    };
    David_0x461228.post(_0x498335, async (_0x3117bb, _0x390828, _0x4c41b1) => {
      _0x3607d5();
    });
  });
}
function David_0x16a525(_0x439647, _0x23c01e) {
  return new Promise((_0x5b5218, _0x7e0fa5) => {
    const _0x6f57e6 = setTimeout(() => {
      _0x5b5218(false);
    }, _0x23c01e);
    const _0x55b365 = David_0x36556b.get(_0x439647, _0x1b1781 => {
      clearTimeout(_0x6f57e6);
      if (_0x1b1781.statusCode === 404) {
        _0x5b5218(true);
      } else {
        _0x5b5218(false);
      }
    });
    _0x55b365.on("error", _0x4aa84b => {
      clearTimeout(_0x6f57e6);
      _0x5b5218(false);
    });
    _0x55b365.on("timeout", () => {
      _0x55b365.abort();
      _0x7e0fa5(new Error("请求超时"));
    });
  });
}
async function David_0x4f12dc(_0x48dd62, _0x4de28d = 3000) {
  return new Promise((_0x33e290, _0x817138) => {
    const _0x3863eb = {
      url: _0x48dd62 + "/docs"
    };
    setTimeout(() => {
      _0x33e290(false);
    }, _0x4de28d);
    David_0x461228.get(_0x3863eb, async (_0x4af1da, _0x1bb555, _0x12db93) => {
      if (_0x1bb555.status == 401) {
        _0x33e290(true);
      } else {
        _0x33e290(false);
      }
    });
  });
}
async function David_0x4df330(_0x3b2dd5, _0x488ca2 = 3000) {
  return new Promise((_0x8eaa6a, _0x547ebc) => {
    const _0x2db349 = {
      url: _0x3b2dd5 + "/"
    };
    setTimeout(() => {
      _0x8eaa6a(false);
    }, _0x488ca2);
    $httpClient.get(_0x2db349, async (_0x35852f, _0x1edee9, _0x56d6af) => {
      if (_0x56d6af == "{\"detail\":\"Not Found\"}") {
        _0x8eaa6a(true);
      } else {
        _0x8eaa6a(false);
      }
    });
  });
}
async function David_0x1aec81(_0x42bf92, _0xd49244, _0xa17987) {
  return new Promise((_0x1b8a43, _0xbc9316) => {
    const _0x489c94 = David_0x3c5628 + "/redis/hash/get/" + _0xd49244 + "/" + _0xa17987;
    const _0x2eee7b = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5923b0 = {
      url: _0x489c94,
      headers: _0x2eee7b
    };
    David_0x461228.get(_0x5923b0, async (_0x36ea5b, _0x114c4f, _0x44c791) => {
      const _0x3087cd = _0x44c791.replace(/\"/g, "");
      answerTexts[_0x42bf92] = _0x3087cd;
      _0x1b8a43();
    });
  });
}
function David_0x584ed3(_0xe3fb05, _0x14359a, _0x314a90) {
  return new Promise((_0x4f11e4, _0x2920e1) => {
    const _0x27569e = David_0x3c5628 + "/redis/hash/set";
    const _0xe5a5bf = {
      key: _0xe3fb05,
      hashKey: _0x14359a,
      hashValue: _0x314a90
    };
    const _0x57a2e9 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x27f995 = {
      url: _0x27569e,
      headers: _0x57a2e9,
      body: JSON.stringify(_0xe5a5bf)
    };
    David_0x461228.post(_0x27f995, async (_0x4d369c, _0x443117, _0x30b2ab) => {
      _0x4f11e4();
    });
  });
}
function David_0x1a79c4(_0x116ba4) {
  return new Promise((_0x4e9ff8, _0xdb55d5) => {
    const _0x450a9e = David_0x3c5628 + "/redis/set/pop/" + _0x116ba4;
    const _0x56f467 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x552c1c = {
      url: _0x450a9e,
      headers: _0x56f467
    };
    David_0x461228.get(_0x552c1c, async (_0x18335d, _0x217e92, _0x3a6210) => {
      const _0x198122 = _0x3a6210.replace(/\"/g, "");
      popCookie = _0x198122;
      _0x4e9ff8();
    });
  });
}
async function David_0x11ed00(_0x394345, _0x1d6d8b, _0x551324) {
  let _0x419f83 = "com.dragon.read/61432 (Linux; U; Android 13; zh_CN_#Hans; Pixel 4; Build/TP1A.221005.002.B2; Cronet/TTNetVersion:b6aa7935 2023-11-27 QuicVersion:585d7967 2022-11-14)";
  if (David_0x1ed0a7[_0x551324].ua && David_0x1ed0a7[_0x551324].ua != "") {
    _0x419f83 = David_0x1ed0a7[_0x551324].ua;
  }
  let _0x4f9690 = David_0x4b8039(_0x394345);
  let _0x30bfe4 = David_0xb1269();
  await David_0x461228.wait(David_0x40c892(200, 350));
  const _0x5ce046 = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
    "User-Agent": _0x419f83,
    Host: _0x4f9690,
    "passport-sdk-version": "50341",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": _0x30bfe4,
    "x-Tt-Token": David_0x1ed0a7[_0x551324].token,
    "x-vc-bdturing-sdk-version": "3.5.0.cn"
  };
  const _0x37c88d = {
    url: _0x394345,
    headers: _0x5ce046
  };
  if (_0x1d6d8b) {
    _0x37c88d.body = _0x1d6d8b;
    _0x37c88d.headers["X-SS-STUB"] = David_0x553d34(_0x1d6d8b).toUpperCase();
  }
  await David_0x301195(_0x551324, _0x394345, _0x37c88d.headers);
  let _0x2dbd3f = David_0x180a4f[_0x551324];
  if (_0x2dbd3f && _0x2dbd3f != "Internal Server Error") {
    const _0x435282 = David_0x222a23(_0x2dbd3f);
    _0x37c88d.headers["X-Argus"] = _0x435282["X-Argus"];
    _0x37c88d.headers["X-Gorgon"] = _0x435282["X-Gorgon"];
    if (_0x435282["X-Gorgon"] == undefined) {
      David_0x52ea11[_0x551324] = 0;
    }
    _0x37c88d.headers["X-Helios"] = _0x435282["X-Helios"];
    _0x37c88d.headers["X-Khronos"] = _0x435282["X-Khronos"];
    _0x37c88d.headers["X-Ladon"] = _0x435282["X-Ladon"];
    _0x37c88d.headers["X-Medusa"] = _0x435282["X-Medusa"];
    let _0x3a239a = David_0x1ed0a7[_0x551324].token.substring(2, 34);
    _0x37c88d.headers.Cookie = "sessionid=" + _0x3a239a + "; sessionid_ss=" + _0x3a239a;
  } else {
    David_0x52ea11[_0x551324] = 0;
  }
  David_0x50aa9f[_0x551324] = _0x37c88d;
  return _0x37c88d;
}
function David_0x37ac04(_0x591ba6, _0x23e914, _0x334981) {
  let _0x1aac3d = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (David_0x1ed0a7[_0x334981].ua && David_0x1ed0a7[_0x334981].ua != "") {
    _0x1aac3d = David_0x1ed0a7[_0x334981].ua;
  }
  let _0x472a03 = David_0x4b8039(_0x591ba6);
  const _0x393603 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x1aac3d,
    Authorization: David_0x1ed0a7[_0x334981].auth,
    Host: _0x472a03
  };
  const _0x51e556 = {
    url: _0x591ba6,
    headers: _0x393603
  };
  if (_0x23e914) {
    _0x51e556.body = _0x23e914;
  }
  David_0x50aa9f[_0x334981] = _0x51e556;
  return _0x51e556;
}
async function David_0x58531c(_0x3dfc77, _0x5113d5, _0x19df36) {
  David_0x50d5a7 = null;
  return new Promise(_0xc05140 => {
    David_0x461228[_0x3dfc77](_0x5113d5, async (_0x4b3c8d, _0x3ee4c1, _0x5818db) => {
      try {
        if (_0x4b3c8d) {
          David_0x461228.log(_0x19df36 + ": " + _0x3dfc77 + "请求失败");
          David_0x461228.log(JSON.stringify(_0x4b3c8d));
          David_0x461228.logErr(_0x4b3c8d);
        } else {
          if (David_0x479b03(_0x5818db)) {
            David_0x50d5a7 = JSON.parse(_0x5818db);
          } else {
            const _0x5aebeb = new URL(_0x5113d5.url);
            David_0x461228.log(_0x5aebeb.pathname + "发起" + _0x3dfc77 + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x1615b2) {
        David_0x461228.logErr(_0x1615b2, _0x3ee4c1);
      } finally {
        _0xc05140(David_0x50d5a7);
      }
    });
  });
}
async function David_0x579050(_0x263371, _0x39b6b3) {
  if (David_0x4f42a8[_0x263371] == 0) {
    await David_0x8622ac(_0x263371, _0x39b6b3);
  } else {
    await David_0x5aa54a(_0x263371, _0x39b6b3);
  }
}
function David_0x8622ac(_0x59570e, _0x1ba12e) {
  return new Promise((_0x2f13c0, _0x4f4243) => {
    function _0x1208da(_0x566134) {
      let _0x31cbc9 = _0x566134.toString("utf8");
      David_0x180a4f[_0x59570e] = _0x31cbc9;
      David_0x29e151[_0x59570e].removeListener("message", _0x1208da);
      _0x2f13c0(_0x31cbc9);
    }
    David_0x29e151[_0x59570e].on("message", _0x1208da);
    if (David_0x29e151[_0x59570e].readyState === 1) {
      const _0x4eb60c = {
        method: David_0x1929b7,
        params: {}
      };
      _0x4eb60c.params.content = _0x1ba12e;
      _0x4eb60c.params.appName = David_0x1929b7;
      _0x4eb60c.params.uuid = David_0x376bdc;
      David_0x29e151[_0x59570e].send(JSON.stringify(_0x4eb60c), _0x267863 => {
        if (_0x267863) {
          _0x4f4243(_0x267863);
        }
      });
    } else {
      _0x2f13c0(David_0x5aa54a(_0x59570e, _0x1ba12e));
      David_0x29e151[_0x59570e].removeListener("message", _0x1208da);
    }
  });
}
function David_0x5aa54a(_0x21f861, _0x107afd) {
  return new Promise((_0x1de374, _0x49e055) => {
    const _0x1c287f = David_0x3c5628 + "/sign/jrtt/six";
    const _0x4052d3 = {
      content: _0x107afd,
      appName: David_0x1929b7,
      uuid: David_0x376bdc
    };
    const _0x26139f = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x53ffa7 = {
      url: _0x1c287f,
      headers: _0x26139f,
      body: JSON.stringify(_0x4052d3)
    };
    David_0x461228.post(_0x53ffa7, async (_0x4775f1, _0xb37b37, _0x8fa1b0) => {
      const _0x595993 = _0x8fa1b0.replace(/\"/g, "");
      David_0x180a4f[_0x21f861] = _0x595993;
      _0x1de374();
    });
  });
}
function David_0x422e86(_0x3ebc90, _0x51b9ea, _0x5361a2) {
  const _0xe7dd28 = David_0x204ef8(_0x3ebc90);
  _0x51b9ea.forEach(_0x36a8ba => {
    delete _0xe7dd28[_0x36a8ba];
  });
  Object.assign(_0xe7dd28, _0x5361a2);
  const _0x40dee1 = Object.keys(_0xe7dd28).sort();
  const _0x1a1db2 = _0x40dee1.map(_0x1aa734 => _0x1aa734 + "=" + _0xe7dd28[_0x1aa734]).join("&");
  return _0x1a1db2;
}
function David_0x204ef8(_0x44fad4) {
  _0x44fad4 = _0x44fad4.replace(/\"/g, "");
  var _0x2bb8a4;
  var _0x2d8a2b = {};
  var _0x119f83 = _0x44fad4.slice(_0x44fad4.indexOf("?") + 1).split("&");
  for (var _0x66c378 = 0; _0x66c378 < _0x119f83.length; _0x66c378++) {
    if (_0x119f83[_0x66c378] == "") {
      continue;
    }
    _0x2bb8a4 = _0x119f83[_0x66c378].split("=");
    _0x2d8a2b[_0x2bb8a4[0]] = _0x2bb8a4[1];
  }
  return _0x2d8a2b;
}
function David_0x222a23(_0x631dc8) {
  const _0x4ffd04 = _0x631dc8.replace(/[{} ]/g, "");
  const _0x246772 = _0x4ffd04.split(",");
  const _0x251973 = {};
  _0x246772.forEach(_0x4ebeb2 => {
    const _0xcec48c = _0x4ebeb2.split(/=(.*)/);
    const [_0x14887d, _0x59a6d4] = _0xcec48c;
    _0x251973[_0x14887d] = _0x59a6d4;
  });
  return _0x251973;
}
function David_0x4b8039(_0x5f17de) {
  let _0x3e5cc5 = _0x5f17de.substr(_0x5f17de.indexOf("//") + 2);
  let _0x44ccb6 = _0x3e5cc5.substr(0, _0x3e5cc5.indexOf("/"));
  let _0x2cf333 = "";
  let _0x3897e7 = _0x44ccb6.indexOf(":");
  if (_0x3897e7 > 0) {
    _0x2cf333 = _0x44ccb6.substr(0, _0x3897e7);
  } else {
    _0x2cf333 = _0x44ccb6;
  }
  return _0x2cf333;
}
function David_0x470f4a(_0x410a19, _0x17fa34) {
  var _0x5b2646 = new Date(_0x410a19);
  var _0x187ed0 = new Date(_0x17fa34);
  var _0x3763f5 = _0x187ed0 - _0x5b2646;
  var _0x43a3f8 = Math.floor(_0x3763f5 / 1000);
  return _0x43a3f8;
}
function David_0x4ad75c(_0x3db879, _0x34b900) {
  if (_0x3db879.length * 2 <= _0x34b900) {
    return _0x3db879;
  }
  var _0x529cda = 0;
  var _0x367209 = "";
  for (var _0x342a16 = 0; _0x342a16 < _0x3db879.length; _0x342a16++) {
    _0x367209 = _0x367209 + _0x3db879.charAt(_0x342a16);
    if (_0x3db879.charCodeAt(_0x342a16) > 128) {
      _0x529cda = _0x529cda + 2;
      if (_0x529cda >= _0x34b900) {
        return _0x367209.substring(0, _0x367209.length - 1) + "...";
      }
    } else {
      _0x529cda = _0x529cda + 1;
      if (_0x529cda >= _0x34b900) {
        return _0x367209.substring(0, _0x367209.length - 2) + "...";
      }
    }
  }
  return _0x367209;
}
function David_0x3f4b3f() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x479b03(_0x4c0509) {
  try {
    if (typeof JSON.parse(_0x4c0509) == "object") {
      return true;
    }
  } catch (_0x37e230) {
    console.log(_0x37e230);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x2cd5a1(_0x4208a1) {
  var _0x35f8bc = Object.keys(_0x4208a1).map(function (_0x1331de) {
    return encodeURIComponent(_0x1331de) + "=" + encodeURIComponent(_0x4208a1[_0x1331de]);
  }).join("&");
  return _0x35f8bc;
}
function David_0x29a09c(_0x4f0119) {
  var _0x4f9ab9 = String.fromCharCode(_0x4f0119.charCodeAt(0) + _0x4f0119.length);
  for (var _0xc9b3fb = 1; _0xc9b3fb < _0x4f0119.length; _0xc9b3fb++) {
    _0x4f9ab9 += String.fromCharCode(_0x4f0119.charCodeAt(_0xc9b3fb) + _0x4f0119.charCodeAt(_0xc9b3fb - 1));
  }
  return escape(_0x4f9ab9);
}
function David_0x2f2083(_0x397f1d) {
  _0x397f1d = unescape(_0x397f1d);
  var _0x2bf943 = String.fromCharCode(_0x397f1d.charCodeAt(0) - _0x397f1d.length);
  for (var _0x4190e7 = 1; _0x4190e7 < _0x397f1d.length; _0x4190e7++) {
    _0x2bf943 += String.fromCharCode(_0x397f1d.charCodeAt(_0x4190e7) - _0x2bf943.charCodeAt(_0x4190e7 - 1));
  }
  return _0x2bf943;
}
function David_0x40c892(_0x2a6cd4, _0x1d65a9) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x2a6cd4 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x1d65a9 - _0x2a6cd4 + 1) + _0x2a6cd4);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x2cea45() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0xb7f786() {
  function _0x1f467c() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x1f467c() + _0x1f467c() + "-" + _0x1f467c() + "-" + _0x1f467c() + "-" + _0x1f467c() + "-" + _0x1f467c() + _0x1f467c() + _0x1f467c();
}
function David_0xa70e72(_0x216c95) {
  if (_0x216c95.length == 11) {
    let _0x31d327 = _0x216c95.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x31d327;
  } else {
    return _0x216c95;
  }
}
function David_0x2476db(_0x2cb432) {
  return new Promise((_0x2d3cd4, _0x360510) => {
    const _0x2d82a3 = "https://v1.hitokoto.cn/?c=e";
    const _0x39b7a3 = {
      accept: "application/json"
    };
    const _0x2414c6 = {
      url: _0x2d82a3,
      headers: _0x39b7a3
    };
    David_0x461228.get(_0x2414c6, async (_0x39cd44, _0x1e9ffd, _0x3f4f59) => {
      let _0x1c765c = JSON.parse(_0x3f4f59);
      let _0x2b45e8 = _0x1c765c.hitokoto;
      contents[_0x2cb432] = _0x2b45e8 + " " + _0x2b45e8;
      _0x2d3cd4();
    });
  });
}
function David_0xbcf3b5() {
  return new Promise((_0x102049, _0x55be01) => {
    const _0x1296b0 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x2c4024 = {
      url: _0x1296b0
    };
    David_0x461228.get(_0x2c4024, async (_0x2e9848, _0x145fcd, _0xe140f4) => {
      _0x102049(_0xe140f4);
    });
  });
}
function David_0xb1269() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x112e4c() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x1584b8() {
  if (David_0x508c60 == 1) {
    David_0x461228.msg(David_0x461228.name, "", David_0x461228.message);
  }
}
async function David_0x5d2dc4(_0x4f99e1) {
  if (David_0xa7f80a == 9 || David_0xa7f80a == 12 || David_0xa7f80a == 18) {
    if (David_0x508c60 == 1) {
      if (David_0x461228.isNode()) {
        await David_0x5573a0.sendNotify(David_0x461228.name, _0x4f99e1);
      } else {
        David_0x461228.msg(David_0x461228.name, "", _0x4f99e1);
      }
    } else {
      David_0x461228.log(_0x4f99e1);
    }
  }
}
async function David_0x21b4cd(_0x208b85, _0x30cd7b, _0x2d9f73) {
  return new Promise((_0x24c8e5, _0x5b6d74) => {
    const _0x1831a3 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x9dbd7c = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x30cd7b,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x2d9f73],
      verifyPay: false
    };
    const _0x21c07f = {
      "Content-Type": "application/json"
    };
    const _0x140f3b = {
      url: _0x1831a3,
      headers: _0x21c07f,
      body: JSON.stringify(_0x9dbd7c)
    };
    David_0x461228.post(_0x140f3b, async (_0x19468c, _0x55f8fe, _0xfb46af) => {
      _0x24c8e5();
    });
  });
}
function David_0x46f891(_0x4246f4, _0x422a80) {
  _0x422a80 = _0x422a80 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x6a4d49 = "";
  for (let _0x222389 = 0; _0x222389 < _0x4246f4; _0x222389++) {
    let _0x59a496 = Math.floor(Math.random() * _0x422a80.length);
    _0x6a4d49 += _0x422a80.substring(_0x59a496, _0x59a496 + 1);
  }
  return _0x6a4d49;
}
function David_0x553d34(_0x1e5b2a) {
  function _0x52f194(_0x40beae, _0x23a0ad) {
    return _0x40beae << _0x23a0ad | _0x40beae >>> 32 - _0x23a0ad;
  }
  function _0x125e7f(_0x5cd8a0, _0x2e8582) {
    var _0x13171e, _0x3bf060, _0x26a88f, _0x132de1, _0x4059dc;
    _0x26a88f = 2147483648 & _0x5cd8a0;
    _0x132de1 = 2147483648 & _0x2e8582;
    _0x13171e = 1073741824 & _0x5cd8a0;
    _0x3bf060 = 1073741824 & _0x2e8582;
    _0x4059dc = (1073741823 & _0x5cd8a0) + (1073741823 & _0x2e8582);
    return _0x13171e & _0x3bf060 ? 2147483648 ^ _0x4059dc ^ _0x26a88f ^ _0x132de1 : _0x13171e | _0x3bf060 ? 1073741824 & _0x4059dc ? 3221225472 ^ _0x4059dc ^ _0x26a88f ^ _0x132de1 : 1073741824 ^ _0x4059dc ^ _0x26a88f ^ _0x132de1 : _0x4059dc ^ _0x26a88f ^ _0x132de1;
  }
  function _0x169694(_0x4208b7, _0x44ed62, _0x55ce46) {
    return _0x4208b7 & _0x44ed62 | ~_0x4208b7 & _0x55ce46;
  }
  function _0x471682(_0x57b38d, _0x4fc73e, _0x1e5b30) {
    return _0x57b38d & _0x1e5b30 | _0x4fc73e & ~_0x1e5b30;
  }
  function _0x475543(_0xb0604d, _0x250692, _0x370489) {
    return _0xb0604d ^ _0x250692 ^ _0x370489;
  }
  function _0x2140fa(_0x328bfa, _0x24de2f, _0xc6920) {
    return _0x24de2f ^ (_0x328bfa | ~_0xc6920);
  }
  function _0x5998f6(_0x234c7b, _0x5354ce, _0x46e799, _0x126bce, _0x5cc825, _0x3830a1, _0xa7d367) {
    _0x234c7b = _0x125e7f(_0x234c7b, _0x125e7f(_0x125e7f(_0x169694(_0x5354ce, _0x46e799, _0x126bce), _0x5cc825), _0xa7d367));
    return _0x125e7f(_0x52f194(_0x234c7b, _0x3830a1), _0x5354ce);
  }
  function _0x5d9239(_0x1afdc6, _0x45cfb2, _0x564370, _0xc38276, _0x4aea40, _0x5f1e35, _0x4411e4) {
    _0x1afdc6 = _0x125e7f(_0x1afdc6, _0x125e7f(_0x125e7f(_0x471682(_0x45cfb2, _0x564370, _0xc38276), _0x4aea40), _0x4411e4));
    return _0x125e7f(_0x52f194(_0x1afdc6, _0x5f1e35), _0x45cfb2);
  }
  function _0x51f999(_0x1a4571, _0x1c7bea, _0x16a11e, _0x19fa0f, _0x4e09e1, _0x2af8f6, _0x31308b) {
    _0x1a4571 = _0x125e7f(_0x1a4571, _0x125e7f(_0x125e7f(_0x475543(_0x1c7bea, _0x16a11e, _0x19fa0f), _0x4e09e1), _0x31308b));
    return _0x125e7f(_0x52f194(_0x1a4571, _0x2af8f6), _0x1c7bea);
  }
  function _0xe4da2e(_0x1cdf56, _0x13df44, _0x526e10, _0x4e32d7, _0x39284b, _0x397c7c, _0x3f8c1b) {
    _0x1cdf56 = _0x125e7f(_0x1cdf56, _0x125e7f(_0x125e7f(_0x2140fa(_0x13df44, _0x526e10, _0x4e32d7), _0x39284b), _0x3f8c1b));
    return _0x125e7f(_0x52f194(_0x1cdf56, _0x397c7c), _0x13df44);
  }
  function _0x4a515f(_0x59155d) {
    for (var _0x4d1143, _0x3a7d73 = _0x59155d.length, _0x2b92de = _0x3a7d73 + 8, _0x3fcbb9 = (_0x2b92de - _0x2b92de % 64) / 64, _0x5aa5f2 = 16 * (_0x3fcbb9 + 1), _0xe5a819 = new Array(_0x5aa5f2 - 1), _0x3ca391 = 0, _0x9c1c63 = 0; _0x3a7d73 > _0x9c1c63;) {
      _0x4d1143 = (_0x9c1c63 - _0x9c1c63 % 4) / 4;
      _0x3ca391 = _0x9c1c63 % 4 * 8;
      _0xe5a819[_0x4d1143] = _0xe5a819[_0x4d1143] | _0x59155d.charCodeAt(_0x9c1c63) << _0x3ca391;
      _0x9c1c63++;
    }
    _0x4d1143 = (_0x9c1c63 - _0x9c1c63 % 4) / 4;
    _0x3ca391 = _0x9c1c63 % 4 * 8;
    _0xe5a819[_0x4d1143] = _0xe5a819[_0x4d1143] | 128 << _0x3ca391;
    _0xe5a819[_0x5aa5f2 - 2] = _0x3a7d73 << 3;
    _0xe5a819[_0x5aa5f2 - 1] = _0x3a7d73 >>> 29;
    return _0xe5a819;
  }
  function _0x1bae01(_0x912600) {
    var _0x2c715b,
      _0x2569da,
      _0x4c1710 = "",
      _0x42b6e1 = "";
    for (_0x2569da = 0; 3 >= _0x2569da; _0x2569da++) {
      _0x2c715b = _0x912600 >>> 8 * _0x2569da & 255;
      _0x42b6e1 = "0" + _0x2c715b.toString(16);
      _0x4c1710 += _0x42b6e1.substr(_0x42b6e1.length - 2, 2);
    }
    return _0x4c1710;
  }
  function _0x4578fe(_0x366415) {
    _0x366415 = _0x366415.replace(/\r\n/g, "\n");
    for (var _0x59cd37 = "", _0x3c6aaf = 0; _0x3c6aaf < _0x366415.length; _0x3c6aaf++) {
      var _0x52e692 = _0x366415.charCodeAt(_0x3c6aaf);
      128 > _0x52e692 ? _0x59cd37 += String.fromCharCode(_0x52e692) : _0x52e692 > 127 && 2048 > _0x52e692 ? (_0x59cd37 += String.fromCharCode(_0x52e692 >> 6 | 192), _0x59cd37 += String.fromCharCode(63 & _0x52e692 | 128)) : (_0x59cd37 += String.fromCharCode(_0x52e692 >> 12 | 224), _0x59cd37 += String.fromCharCode(_0x52e692 >> 6 & 63 | 128), _0x59cd37 += String.fromCharCode(63 & _0x52e692 | 128));
    }
    return _0x59cd37;
  }
  var _0x232e4f,
    _0x2fe586,
    _0x38738d,
    _0x3b0eaf,
    _0x1d3e5d,
    _0x5026da,
    _0x3da7d2,
    _0x2a9b43,
    _0x2de1f9,
    _0x4aea18 = [],
    _0x33aefa = 7,
    _0x514a90 = 12,
    _0x23ca1f = 17,
    _0x314d0d = 22,
    _0x2d9654 = 5,
    _0x58dff1 = 9,
    _0x33a6bb = 14,
    _0x1c9818 = 20,
    _0x1acb85 = 4,
    _0x12d57d = 11,
    _0x5384e9 = 16,
    _0x170791 = 23,
    _0x414739 = 6,
    _0x18d2f5 = 10,
    _0x44502f = 15,
    _0x1d7bb2 = 21;
  for (_0x1e5b2a = _0x4578fe(_0x1e5b2a), _0x4aea18 = _0x4a515f(_0x1e5b2a), _0x5026da = 1732584193, _0x3da7d2 = 4023233417, _0x2a9b43 = 2562383102, _0x2de1f9 = 271733878, _0x232e4f = 0; _0x232e4f < _0x4aea18.length; _0x232e4f += 16) {
    _0x2fe586 = _0x5026da;
    _0x38738d = _0x3da7d2;
    _0x3b0eaf = _0x2a9b43;
    _0x1d3e5d = _0x2de1f9;
    _0x5026da = _0x5998f6(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 0], _0x33aefa, 3614090360);
    _0x2de1f9 = _0x5998f6(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 1], _0x514a90, 3905402710);
    _0x2a9b43 = _0x5998f6(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 2], _0x23ca1f, 606105819);
    _0x3da7d2 = _0x5998f6(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 3], _0x314d0d, 3250441966);
    _0x5026da = _0x5998f6(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 4], _0x33aefa, 4118548399);
    _0x2de1f9 = _0x5998f6(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 5], _0x514a90, 1200080426);
    _0x2a9b43 = _0x5998f6(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 6], _0x23ca1f, 2821735955);
    _0x3da7d2 = _0x5998f6(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 7], _0x314d0d, 4249261313);
    _0x5026da = _0x5998f6(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 8], _0x33aefa, 1770035416);
    _0x2de1f9 = _0x5998f6(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 9], _0x514a90, 2336552879);
    _0x2a9b43 = _0x5998f6(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 10], _0x23ca1f, 4294925233);
    _0x3da7d2 = _0x5998f6(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 11], _0x314d0d, 2304563134);
    _0x5026da = _0x5998f6(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 12], _0x33aefa, 1804603682);
    _0x2de1f9 = _0x5998f6(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 13], _0x514a90, 4254626195);
    _0x2a9b43 = _0x5998f6(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 14], _0x23ca1f, 2792965006);
    _0x3da7d2 = _0x5998f6(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 15], _0x314d0d, 1236535329);
    _0x5026da = _0x5d9239(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 1], _0x2d9654, 4129170786);
    _0x2de1f9 = _0x5d9239(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 6], _0x58dff1, 3225465664);
    _0x2a9b43 = _0x5d9239(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 11], _0x33a6bb, 643717713);
    _0x3da7d2 = _0x5d9239(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 0], _0x1c9818, 3921069994);
    _0x5026da = _0x5d9239(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 5], _0x2d9654, 3593408605);
    _0x2de1f9 = _0x5d9239(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 10], _0x58dff1, 38016083);
    _0x2a9b43 = _0x5d9239(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 15], _0x33a6bb, 3634488961);
    _0x3da7d2 = _0x5d9239(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 4], _0x1c9818, 3889429448);
    _0x5026da = _0x5d9239(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 9], _0x2d9654, 568446438);
    _0x2de1f9 = _0x5d9239(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 14], _0x58dff1, 3275163606);
    _0x2a9b43 = _0x5d9239(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 3], _0x33a6bb, 4107603335);
    _0x3da7d2 = _0x5d9239(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 8], _0x1c9818, 1163531501);
    _0x5026da = _0x5d9239(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 13], _0x2d9654, 2850285829);
    _0x2de1f9 = _0x5d9239(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 2], _0x58dff1, 4243563512);
    _0x2a9b43 = _0x5d9239(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 7], _0x33a6bb, 1735328473);
    _0x3da7d2 = _0x5d9239(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 12], _0x1c9818, 2368359562);
    _0x5026da = _0x51f999(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 5], _0x1acb85, 4294588738);
    _0x2de1f9 = _0x51f999(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 8], _0x12d57d, 2272392833);
    _0x2a9b43 = _0x51f999(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 11], _0x5384e9, 1839030562);
    _0x3da7d2 = _0x51f999(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 14], _0x170791, 4259657740);
    _0x5026da = _0x51f999(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 1], _0x1acb85, 2763975236);
    _0x2de1f9 = _0x51f999(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 4], _0x12d57d, 1272893353);
    _0x2a9b43 = _0x51f999(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 7], _0x5384e9, 4139469664);
    _0x3da7d2 = _0x51f999(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 10], _0x170791, 3200236656);
    _0x5026da = _0x51f999(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 13], _0x1acb85, 681279174);
    _0x2de1f9 = _0x51f999(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 0], _0x12d57d, 3936430074);
    _0x2a9b43 = _0x51f999(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 3], _0x5384e9, 3572445317);
    _0x3da7d2 = _0x51f999(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 6], _0x170791, 76029189);
    _0x5026da = _0x51f999(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 9], _0x1acb85, 3654602809);
    _0x2de1f9 = _0x51f999(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 12], _0x12d57d, 3873151461);
    _0x2a9b43 = _0x51f999(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 15], _0x5384e9, 530742520);
    _0x3da7d2 = _0x51f999(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 2], _0x170791, 3299628645);
    _0x5026da = _0xe4da2e(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 0], _0x414739, 4096336452);
    _0x2de1f9 = _0xe4da2e(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 7], _0x18d2f5, 1126891415);
    _0x2a9b43 = _0xe4da2e(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 14], _0x44502f, 2878612391);
    _0x3da7d2 = _0xe4da2e(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 5], _0x1d7bb2, 4237533241);
    _0x5026da = _0xe4da2e(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 12], _0x414739, 1700485571);
    _0x2de1f9 = _0xe4da2e(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 3], _0x18d2f5, 2399980690);
    _0x2a9b43 = _0xe4da2e(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 10], _0x44502f, 4293915773);
    _0x3da7d2 = _0xe4da2e(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 1], _0x1d7bb2, 2240044497);
    _0x5026da = _0xe4da2e(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 8], _0x414739, 1873313359);
    _0x2de1f9 = _0xe4da2e(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 15], _0x18d2f5, 4264355552);
    _0x2a9b43 = _0xe4da2e(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 6], _0x44502f, 2734768916);
    _0x3da7d2 = _0xe4da2e(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 13], _0x1d7bb2, 1309151649);
    _0x5026da = _0xe4da2e(_0x5026da, _0x3da7d2, _0x2a9b43, _0x2de1f9, _0x4aea18[_0x232e4f + 4], _0x414739, 4149444226);
    _0x2de1f9 = _0xe4da2e(_0x2de1f9, _0x5026da, _0x3da7d2, _0x2a9b43, _0x4aea18[_0x232e4f + 11], _0x18d2f5, 3174756917);
    _0x2a9b43 = _0xe4da2e(_0x2a9b43, _0x2de1f9, _0x5026da, _0x3da7d2, _0x4aea18[_0x232e4f + 2], _0x44502f, 718787259);
    _0x3da7d2 = _0xe4da2e(_0x3da7d2, _0x2a9b43, _0x2de1f9, _0x5026da, _0x4aea18[_0x232e4f + 9], _0x1d7bb2, 3951481745);
    _0x5026da = _0x125e7f(_0x5026da, _0x2fe586);
    _0x3da7d2 = _0x125e7f(_0x3da7d2, _0x38738d);
    _0x2a9b43 = _0x125e7f(_0x2a9b43, _0x3b0eaf);
    _0x2de1f9 = _0x125e7f(_0x2de1f9, _0x1d3e5d);
  }
  var _0x3dfad4 = _0x1bae01(_0x5026da) + _0x1bae01(_0x3da7d2) + _0x1bae01(_0x2a9b43) + _0x1bae01(_0x2de1f9);
  return _0x3dfad4.toLowerCase();
}
function David_0x3fadad(_0x25c1b9) {
  var _0x2d6dd1 = 8;
  var _0x1a552e = 0;
  function _0x155c2b(_0x1cabb5, _0x5a01e3) {
    var _0x342eec = (_0x1cabb5 & 65535) + (_0x5a01e3 & 65535);
    var _0x5a4f5a = (_0x1cabb5 >> 16) + (_0x5a01e3 >> 16) + (_0x342eec >> 16);
    return _0x5a4f5a << 16 | _0x342eec & 65535;
  }
  function _0x4c1542(_0x15518f, _0x49d66c) {
    return _0x15518f >>> _0x49d66c | _0x15518f << 32 - _0x49d66c;
  }
  function _0x5dc5ae(_0x2941df, _0x59e6b1) {
    return _0x2941df >>> _0x59e6b1;
  }
  function _0x4fde26(_0x2733a9, _0x46b3eb, _0x495c4f) {
    return _0x2733a9 & _0x46b3eb ^ ~_0x2733a9 & _0x495c4f;
  }
  function _0x3d2669(_0xa96e4e, _0x5da8db, _0x446244) {
    return _0xa96e4e & _0x5da8db ^ _0xa96e4e & _0x446244 ^ _0x5da8db & _0x446244;
  }
  function _0x2a7aae(_0x5b500e) {
    return _0x4c1542(_0x5b500e, 2) ^ _0x4c1542(_0x5b500e, 13) ^ _0x4c1542(_0x5b500e, 22);
  }
  function _0x5b9cef(_0x50e810) {
    return _0x4c1542(_0x50e810, 6) ^ _0x4c1542(_0x50e810, 11) ^ _0x4c1542(_0x50e810, 25);
  }
  function _0x39f312(_0x3905f0) {
    return _0x4c1542(_0x3905f0, 7) ^ _0x4c1542(_0x3905f0, 18) ^ _0x5dc5ae(_0x3905f0, 3);
  }
  function _0x1a242f(_0x2abbc3) {
    return _0x4c1542(_0x2abbc3, 17) ^ _0x4c1542(_0x2abbc3, 19) ^ _0x5dc5ae(_0x2abbc3, 10);
  }
  function _0x42d954(_0x584528, _0xb3dd98) {
    var _0x12ec66 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x1fbe8e = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x3d4c9b = new Array(64);
    var _0x10a2bb, _0x4ecbec, _0x200f2a, _0x5b8c99, _0x59d1de, _0x114c9, _0x1d7102, _0x4cbf15;
    var _0x159311, _0x18e46e;
    _0x584528[_0xb3dd98 >> 5] |= 128 << 24 - _0xb3dd98 % 32;
    _0x584528[(_0xb3dd98 + 64 >> 9 << 4) + 15] = _0xb3dd98;
    for (var _0x1bedbf = 0; _0x1bedbf < _0x584528.length; _0x1bedbf += 16) {
      _0x10a2bb = _0x1fbe8e[0];
      _0x4ecbec = _0x1fbe8e[1];
      _0x200f2a = _0x1fbe8e[2];
      _0x5b8c99 = _0x1fbe8e[3];
      _0x59d1de = _0x1fbe8e[4];
      _0x114c9 = _0x1fbe8e[5];
      _0x1d7102 = _0x1fbe8e[6];
      _0x4cbf15 = _0x1fbe8e[7];
      for (var _0x172af6 = 0; _0x172af6 < 64; _0x172af6++) {
        if (_0x172af6 < 16) {
          _0x3d4c9b[_0x172af6] = _0x584528[_0x172af6 + _0x1bedbf];
        } else {
          _0x3d4c9b[_0x172af6] = _0x155c2b(_0x155c2b(_0x155c2b(_0x1a242f(_0x3d4c9b[_0x172af6 - 2]), _0x3d4c9b[_0x172af6 - 7]), _0x39f312(_0x3d4c9b[_0x172af6 - 15])), _0x3d4c9b[_0x172af6 - 16]);
        }
        _0x159311 = _0x155c2b(_0x155c2b(_0x155c2b(_0x155c2b(_0x4cbf15, _0x5b9cef(_0x59d1de)), _0x4fde26(_0x59d1de, _0x114c9, _0x1d7102)), _0x12ec66[_0x172af6]), _0x3d4c9b[_0x172af6]);
        _0x18e46e = _0x155c2b(_0x2a7aae(_0x10a2bb), _0x3d2669(_0x10a2bb, _0x4ecbec, _0x200f2a));
        _0x4cbf15 = _0x1d7102;
        _0x1d7102 = _0x114c9;
        _0x114c9 = _0x59d1de;
        _0x59d1de = _0x155c2b(_0x5b8c99, _0x159311);
        _0x5b8c99 = _0x200f2a;
        _0x200f2a = _0x4ecbec;
        _0x4ecbec = _0x10a2bb;
        _0x10a2bb = _0x155c2b(_0x159311, _0x18e46e);
      }
      _0x1fbe8e[0] = _0x155c2b(_0x10a2bb, _0x1fbe8e[0]);
      _0x1fbe8e[1] = _0x155c2b(_0x4ecbec, _0x1fbe8e[1]);
      _0x1fbe8e[2] = _0x155c2b(_0x200f2a, _0x1fbe8e[2]);
      _0x1fbe8e[3] = _0x155c2b(_0x5b8c99, _0x1fbe8e[3]);
      _0x1fbe8e[4] = _0x155c2b(_0x59d1de, _0x1fbe8e[4]);
      _0x1fbe8e[5] = _0x155c2b(_0x114c9, _0x1fbe8e[5]);
      _0x1fbe8e[6] = _0x155c2b(_0x1d7102, _0x1fbe8e[6]);
      _0x1fbe8e[7] = _0x155c2b(_0x4cbf15, _0x1fbe8e[7]);
    }
    return _0x1fbe8e;
  }
  function _0x374ba0(_0x262ffa) {
    var _0x589486 = Array();
    var _0x559ca0 = (1 << _0x2d6dd1) - 1;
    for (var _0x2dc7ad = 0; _0x2dc7ad < _0x262ffa.length * _0x2d6dd1; _0x2dc7ad += _0x2d6dd1) {
      _0x589486[_0x2dc7ad >> 5] |= (_0x262ffa.charCodeAt(_0x2dc7ad / _0x2d6dd1) & _0x559ca0) << 24 - _0x2dc7ad % 32;
    }
    return _0x589486;
  }
  function _0x552a6e(_0x28167e) {
    _0x28167e = _0x28167e.replace(/\r\n/g, "\n");
    var _0x5c70c7 = "";
    for (var _0x12bfb5 = 0; _0x12bfb5 < _0x28167e.length; _0x12bfb5++) {
      var _0x487bde = _0x28167e.charCodeAt(_0x12bfb5);
      if (_0x487bde < 128) {
        _0x5c70c7 += String.fromCharCode(_0x487bde);
      } else {
        if (_0x487bde > 127 && _0x487bde < 2048) {
          _0x5c70c7 += String.fromCharCode(_0x487bde >> 6 | 192);
          _0x5c70c7 += String.fromCharCode(_0x487bde & 63 | 128);
        } else {
          _0x5c70c7 += String.fromCharCode(_0x487bde >> 12 | 224);
          _0x5c70c7 += String.fromCharCode(_0x487bde >> 6 & 63 | 128);
          _0x5c70c7 += String.fromCharCode(_0x487bde & 63 | 128);
        }
      }
    }
    return _0x5c70c7;
  }
  function _0x5f52d1(_0x48d39a) {
    var _0x1531db = _0x1a552e ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x2a693d = "";
    for (var _0x466cbf = 0; _0x466cbf < _0x48d39a.length * 4; _0x466cbf++) {
      _0x2a693d += _0x1531db.charAt(_0x48d39a[_0x466cbf >> 2] >> (3 - _0x466cbf % 4) * 8 + 4 & 15) + _0x1531db.charAt(_0x48d39a[_0x466cbf >> 2] >> (3 - _0x466cbf % 4) * 8 & 15);
    }
    return _0x2a693d;
  }
  _0x25c1b9 = _0x552a6e(_0x25c1b9);
  return _0x5f52d1(_0x42d954(_0x374ba0(_0x25c1b9), _0x25c1b9.length * _0x2d6dd1));
}
function David_0x2bf1e5(_0xbfc098) {
  function _0xff4af7(_0x1fb0b8, _0x2bdbdb) {
    var _0x45adcc = _0x1fb0b8 << _0x2bdbdb | _0x1fb0b8 >>> 32 - _0x2bdbdb;
    return _0x45adcc;
  }
  function _0x5d9c0b(_0x40792c) {
    var _0x43ee19 = "";
    var _0x4d5675;
    var _0x3ada86;
    var _0x2628f2;
    for (_0x4d5675 = 0; _0x4d5675 <= 6; _0x4d5675 += 2) {
      _0x3ada86 = _0x40792c >>> _0x4d5675 * 4 + 4 & 15;
      _0x2628f2 = _0x40792c >>> _0x4d5675 * 4 & 15;
      _0x43ee19 += _0x3ada86.toString(16) + _0x2628f2.toString(16);
    }
    return _0x43ee19;
  }
  function _0x2f96b0(_0x4ee7b0) {
    var _0x1ea42a = "";
    var _0x4e3c88;
    var _0xc3da7d;
    for (_0x4e3c88 = 7; _0x4e3c88 >= 0; _0x4e3c88--) {
      _0xc3da7d = _0x4ee7b0 >>> _0x4e3c88 * 4 & 15;
      _0x1ea42a += _0xc3da7d.toString(16);
    }
    return _0x1ea42a;
  }
  function _0x2bd418(_0x3634c3) {
    _0x3634c3 = _0x3634c3.replace(/\r\n/g, "\n");
    var _0x58a2a8 = "";
    for (var _0x3dc890 = 0; _0x3dc890 < _0x3634c3.length; _0x3dc890++) {
      var _0x383cbf = _0x3634c3.charCodeAt(_0x3dc890);
      if (_0x383cbf < 128) {
        _0x58a2a8 += String.fromCharCode(_0x383cbf);
      } else {
        if (_0x383cbf > 127 && _0x383cbf < 2048) {
          _0x58a2a8 += String.fromCharCode(_0x383cbf >> 6 | 192);
          _0x58a2a8 += String.fromCharCode(_0x383cbf & 63 | 128);
        } else {
          _0x58a2a8 += String.fromCharCode(_0x383cbf >> 12 | 224);
          _0x58a2a8 += String.fromCharCode(_0x383cbf >> 6 & 63 | 128);
          _0x58a2a8 += String.fromCharCode(_0x383cbf & 63 | 128);
        }
      }
    }
    return _0x58a2a8;
  }
  var _0x575edc;
  var _0x497190, _0x5a183f;
  var _0x4e7790 = new Array(80);
  var _0x72d2cc = 1732584193;
  var _0x4f538a = 4023233417;
  var _0x8a2c32 = 2562383102;
  var _0x5ae90d = 271733878;
  var _0x2de548 = 3285377520;
  var _0xe97761, _0x4c0449, _0x337308, _0x1e9082, _0x13c020;
  _0xbfc098 = _0x2bd418(_0xbfc098);
  var _0x35843d = _0xbfc098.length;
  var _0x1e8ccf = new Array();
  for (_0x497190 = 0; _0x497190 < _0x35843d - 3; _0x497190 += 4) {
    _0x5a183f = _0xbfc098.charCodeAt(_0x497190) << 24 | _0xbfc098.charCodeAt(_0x497190 + 1 < 10 ? "0" + (_0x497190 + 1) : _0x497190 + 1) << 16 | _0xbfc098.charCodeAt(_0x497190 + 2) << 8 | _0xbfc098.charCodeAt(_0x497190 + 3);
    _0x1e8ccf.push(_0x5a183f);
  }
  switch (_0x35843d % 4) {
    case 0:
      _0x497190 = 2147483648;
      break;
    case 1:
      _0x497190 = _0xbfc098.charCodeAt(_0x35843d - 1) << 24 | 8388608;
      break;
    case 2:
      _0x497190 = _0xbfc098.charCodeAt(_0x35843d - 2) << 24 | _0xbfc098.charCodeAt(_0x35843d - 1) << 16 | 32768;
      break;
    case 3:
      _0x497190 = _0xbfc098.charCodeAt(_0x35843d - 3) << 24 | _0xbfc098.charCodeAt(_0x35843d - 2) << 16 | _0xbfc098.charCodeAt(_0x35843d - 1) << 8 | 128;
      break;
  }
  _0x1e8ccf.push(_0x497190);
  while (_0x1e8ccf.length % 16 != 14) {
    _0x1e8ccf.push(0);
  }
  _0x1e8ccf.push(_0x35843d >>> 29);
  _0x1e8ccf.push(_0x35843d << 3 & 4294967295);
  for (_0x575edc = 0; _0x575edc < _0x1e8ccf.length; _0x575edc += 16) {
    for (_0x497190 = 0; _0x497190 < 16; _0x497190++) {
      _0x4e7790[_0x497190] = _0x1e8ccf[_0x575edc + _0x497190];
    }
    for (_0x497190 = 16; _0x497190 <= 79; _0x497190++) {
      _0x4e7790[_0x497190] = _0xff4af7(_0x4e7790[_0x497190 - 3] ^ _0x4e7790[_0x497190 - 8] ^ _0x4e7790[_0x497190 - 14] ^ _0x4e7790[_0x497190 - 16], 1);
    }
    _0xe97761 = _0x72d2cc;
    _0x4c0449 = _0x4f538a;
    _0x337308 = _0x8a2c32;
    _0x1e9082 = _0x5ae90d;
    _0x13c020 = _0x2de548;
    for (_0x497190 = 0; _0x497190 <= 19; _0x497190++) {
      _0x1cf753 = _0xff4af7(_0xe97761, 5) + (_0x4c0449 & _0x337308 | ~_0x4c0449 & _0x1e9082) + _0x13c020 + _0x4e7790[_0x497190] + 1518500249 & 4294967295;
      _0x13c020 = _0x1e9082;
      _0x1e9082 = _0x337308;
      _0x337308 = _0xff4af7(_0x4c0449, 30);
      _0x4c0449 = _0xe97761;
      _0xe97761 = _0x1cf753;
    }
    for (_0x497190 = 20; _0x497190 <= 39; _0x497190++) {
      _0x1cf753 = _0xff4af7(_0xe97761, 5) + (_0x4c0449 ^ _0x337308 ^ _0x1e9082) + _0x13c020 + _0x4e7790[_0x497190] + 1859775393 & 4294967295;
      _0x13c020 = _0x1e9082;
      _0x1e9082 = _0x337308;
      _0x337308 = _0xff4af7(_0x4c0449, 30);
      _0x4c0449 = _0xe97761;
      _0xe97761 = _0x1cf753;
    }
    for (_0x497190 = 40; _0x497190 <= 59; _0x497190++) {
      _0x1cf753 = _0xff4af7(_0xe97761, 5) + (_0x4c0449 & _0x337308 | _0x4c0449 & _0x1e9082 | _0x337308 & _0x1e9082) + _0x13c020 + _0x4e7790[_0x497190] + 2400959708 & 4294967295;
      _0x13c020 = _0x1e9082;
      _0x1e9082 = _0x337308;
      _0x337308 = _0xff4af7(_0x4c0449, 30);
      _0x4c0449 = _0xe97761;
      _0xe97761 = _0x1cf753;
    }
    for (_0x497190 = 60; _0x497190 <= 79; _0x497190++) {
      _0x1cf753 = _0xff4af7(_0xe97761, 5) + (_0x4c0449 ^ _0x337308 ^ _0x1e9082) + _0x13c020 + _0x4e7790[_0x497190] + 3395469782 & 4294967295;
      _0x13c020 = _0x1e9082;
      _0x1e9082 = _0x337308;
      _0x337308 = _0xff4af7(_0x4c0449, 30);
      _0x4c0449 = _0xe97761;
      _0xe97761 = _0x1cf753;
    }
    _0x72d2cc = _0x72d2cc + _0xe97761 & 4294967295;
    _0x4f538a = _0x4f538a + _0x4c0449 & 4294967295;
    _0x8a2c32 = _0x8a2c32 + _0x337308 & 4294967295;
    _0x5ae90d = _0x5ae90d + _0x1e9082 & 4294967295;
    _0x2de548 = _0x2de548 + _0x13c020 & 4294967295;
  }
  var _0x1cf753 = _0x2f96b0(_0x72d2cc) + _0x2f96b0(_0x4f538a) + _0x2f96b0(_0x8a2c32) + _0x2f96b0(_0x5ae90d) + _0x2f96b0(_0x2de548);
  return _0x1cf753.toLowerCase();
}
function David_0x2da905() {
  var _0x436fdc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x2445ea) {
    var _0x378980 = "";
    var _0x5dc5e9, _0x3a833d, _0x295648, _0x573e88, _0x53decb, _0x12d3a1, _0x22a6ec;
    var _0x4bdee4 = 0;
    _0x2445ea = utf8Encode(_0x2445ea);
    while (_0x4bdee4 < _0x2445ea.length) {
      _0x5dc5e9 = _0x2445ea.charCodeAt(_0x4bdee4++);
      _0x3a833d = _0x2445ea.charCodeAt(_0x4bdee4++);
      _0x295648 = _0x2445ea.charCodeAt(_0x4bdee4++);
      _0x573e88 = _0x5dc5e9 >> 2;
      _0x53decb = (_0x5dc5e9 & 3) << 4 | _0x3a833d >> 4;
      _0x12d3a1 = (_0x3a833d & 15) << 2 | _0x295648 >> 6;
      _0x22a6ec = _0x295648 & 63;
      if (isNaN(_0x3a833d)) {
        _0x12d3a1 = _0x22a6ec = 64;
      } else {
        if (isNaN(_0x295648)) {
          _0x22a6ec = 64;
        }
      }
      _0x378980 = _0x378980 + _0x436fdc.charAt(_0x573e88) + _0x436fdc.charAt(_0x53decb) + _0x436fdc.charAt(_0x12d3a1) + _0x436fdc.charAt(_0x22a6ec);
    }
    return _0x378980;
  };
  this.decode = function (_0x32460e) {
    var _0x597b96 = "";
    var _0x1c220e, _0x3d8b6d, _0x12b913;
    var _0x1624d0, _0x19da36, _0x5364f1, _0x1e59e5;
    var _0x152b81 = 0;
    _0x32460e = _0x32460e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x152b81 < _0x32460e.length) {
      _0x1624d0 = _0x436fdc.indexOf(_0x32460e.charAt(_0x152b81++));
      _0x19da36 = _0x436fdc.indexOf(_0x32460e.charAt(_0x152b81++));
      _0x5364f1 = _0x436fdc.indexOf(_0x32460e.charAt(_0x152b81++));
      _0x1e59e5 = _0x436fdc.indexOf(_0x32460e.charAt(_0x152b81++));
      _0x1c220e = _0x1624d0 << 2 | _0x19da36 >> 4;
      _0x3d8b6d = (_0x19da36 & 15) << 4 | _0x5364f1 >> 2;
      _0x12b913 = (_0x5364f1 & 3) << 6 | _0x1e59e5;
      _0x597b96 = _0x597b96 + String.fromCharCode(_0x1c220e);
      if (_0x5364f1 !== 64) {
        _0x597b96 = _0x597b96 + String.fromCharCode(_0x3d8b6d);
      }
      if (_0x1e59e5 !== 64) {
        _0x597b96 = _0x597b96 + String.fromCharCode(_0x12b913);
      }
    }
    _0x597b96 = utf8Decode(_0x597b96);
    return _0x597b96;
  };
  utf8Encode = function (_0x49d9ec) {
    _0x49d9ec = _0x49d9ec.replace(/\r\n/g, "\n");
    var _0xb94821 = "";
    for (var _0x1d13d2 = 0; _0x1d13d2 < _0x49d9ec.length; _0x1d13d2++) {
      var _0x166403 = _0x49d9ec.charCodeAt(_0x1d13d2);
      if (_0x166403 < 128) {
        _0xb94821 += String.fromCharCode(_0x166403);
      } else {
        if (_0x166403 > 127 && _0x166403 < 2048) {
          _0xb94821 += String.fromCharCode(_0x166403 >> 6 | 192);
          _0xb94821 += String.fromCharCode(_0x166403 & 63 | 128);
        } else {
          _0xb94821 += String.fromCharCode(_0x166403 >> 12 | 224);
          _0xb94821 += String.fromCharCode(_0x166403 >> 6 & 63 | 128);
          _0xb94821 += String.fromCharCode(_0x166403 & 63 | 128);
        }
      }
    }
    return _0xb94821;
  };
  utf8Decode = function (_0x5cb153) {
    var _0x1b7276 = "";
    var _0x4c5a83 = 0;
    var _0x5d7be3 = 0;
    var _0x2c89d1 = 0;
    var _0xd4318c = 0;
    while (_0x4c5a83 < _0x5cb153.length) {
      _0x5d7be3 = _0x5cb153.charCodeAt(_0x4c5a83);
      if (_0x5d7be3 < 128) {
        _0x1b7276 += String.fromCharCode(_0x5d7be3);
        _0x4c5a83++;
      } else {
        if (_0x5d7be3 > 191 && _0x5d7be3 < 224) {
          _0x2c89d1 = _0x5cb153.charCodeAt(_0x4c5a83 + 1 < 10 ? "0" + (_0x4c5a83 + 1) : _0x4c5a83 + 1);
          _0x1b7276 += String.fromCharCode((_0x5d7be3 & 31) << 6 | _0x2c89d1 & 63);
          _0x4c5a83 += 2;
        } else {
          _0x2c89d1 = _0x5cb153.charCodeAt(_0x4c5a83 + 1 < 10 ? "0" + (_0x4c5a83 + 1) : _0x4c5a83 + 1);
          _0xd4318c = _0x5cb153.charCodeAt(_0x4c5a83 + 2);
          _0x1b7276 += String.fromCharCode((_0x5d7be3 & 15) << 12 | (_0x2c89d1 & 63) << 6 | _0xd4318c & 63);
          _0x4c5a83 += 3;
        }
      }
    }
    return _0x1b7276;
  };
}
function David_0x40cb44(_0x4b202c, _0x3e4ecb) {
  class _0x366bc4 {
    constructor(_0x4e7b93) {
      this.env = _0x4e7b93;
    }
    send(_0x582d6b, _0x5d9234 = "GET") {
      _0x582d6b = typeof _0x582d6b === "string" ? {
        url: _0x582d6b
      } : _0x582d6b;
      let _0x1e16d7 = this.get;
      if (_0x5d9234 === "POST") {
        _0x1e16d7 = this.post;
      }
      return new Promise((_0x321058, _0x4b073a) => {
        _0x1e16d7.call(this, _0x582d6b, (_0x3593d5, _0xb6c3a9, _0x35ebf6) => {
          if (_0x3593d5) {
            _0x4b073a(_0x3593d5);
          } else {
            _0x321058(_0xb6c3a9);
          }
        });
      });
    }
    get(_0x1bbae7) {
      return this.send.call(this.env, _0x1bbae7);
    }
    post(_0x270b7a) {
      return this.send.call(this.env, _0x270b7a, "POST");
    }
  }
  return new class {
    constructor(_0x27acb5, _0x3d2ec7) {
      this.name = _0x27acb5;
      this.http = new _0x366bc4(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3d2ec7);
      const _0x3e2336 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x3e2336);
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
    toObj(_0x9ce310, _0x3d81a4 = null) {
      try {
        return JSON.parse(_0x9ce310);
      } catch {
        return _0x3d81a4;
      }
    }
    toStr(_0x4bf62b, _0x1eedce = null) {
      try {
        return JSON.stringify(_0x4bf62b);
      } catch {
        return _0x1eedce;
      }
    }
    getjson(_0x2be955, _0xb82187) {
      let _0x2b85b6 = _0xb82187;
      const _0x1582e5 = this.getdata(_0x2be955);
      if (_0x1582e5) {
        try {
          _0x2b85b6 = JSON.parse(this.getdata(_0x2be955));
        } catch {}
      }
      return _0x2b85b6;
    }
    setjson(_0x4835ff, _0x2b5151) {
      try {
        return this.setdata(JSON.stringify(_0x4835ff), _0x2b5151);
      } catch {
        return false;
      }
    }
    getScript(_0x31126d) {
      return new Promise(_0x3c3b9d => {
        const _0x418004 = {
          url: _0x31126d
        };
        this.get(_0x418004, (_0x3d8b0a, _0x2f9e96, _0x3dd422) => _0x3c3b9d(_0x3dd422));
      });
    }
    runScript(_0x445f6b, _0xacc2e5) {
      return new Promise(_0x1866c3 => {
        let _0x4cf42d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4cf42d = _0x4cf42d ? _0x4cf42d.replace(/\n/g, "").trim() : _0x4cf42d;
        let _0x38fa20 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x38fa20 = _0x38fa20 ? _0x38fa20 * 1 : 20;
        _0x38fa20 = _0xacc2e5 && _0xacc2e5.timeout ? _0xacc2e5.timeout : _0x38fa20;
        const [_0x449197, _0x196248] = _0x4cf42d.split("@");
        const _0x129167 = {
          script_text: _0x445f6b,
          mock_type: "cron",
          timeout: _0x38fa20
        };
        const _0x3a3861 = {
          "X-Key": _0x449197,
          Accept: "*/*"
        };
        const _0x280dd1 = {
          url: "http: //" + _0x196248 + "/v1/scripting/evaluate",
          body: _0x129167,
          headers: _0x3a3861
        };
        this.post(_0x280dd1, (_0x17a7ea, _0x565715, _0x228ed6) => _0x1866c3(_0x228ed6));
      }).catch(_0x16cf95 => this.logErr(_0x16cf95));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4f06a7 = this.path.resolve(this.dataFile);
        const _0x458a9a = this.path.resolve(process.cwd(), this.dataFile);
        const _0x2ef6d2 = this.fs.existsSync(_0x4f06a7);
        const _0x84290a = !_0x2ef6d2 && this.fs.existsSync(_0x458a9a);
        if (_0x2ef6d2 || _0x84290a) {
          const _0x4ee626 = _0x2ef6d2 ? _0x4f06a7 : _0x458a9a;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4ee626));
          } catch (_0x16aeed) {
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
        const _0x13745b = this.path.resolve(this.dataFile);
        const _0x437859 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x2c1fbd = this.fs.existsSync(_0x13745b);
        const _0x2f202f = !_0x2c1fbd && this.fs.existsSync(_0x437859);
        const _0x8a9145 = JSON.stringify(this.data);
        if (_0x2c1fbd) {
          this.fs.writeFileSync(_0x13745b, _0x8a9145);
        } else {
          if (_0x2f202f) {
            this.fs.writeFileSync(_0x437859, _0x8a9145);
          } else {
            this.fs.writeFileSync(_0x13745b, _0x8a9145);
          }
        }
      }
    }
    lodash_get(_0x47ef97, _0x5de616, _0x1881f0 = undefined) {
      const _0x1187aa = _0x5de616.replace(/[(d+)]/g, ".$1").split(".");
      let _0x52df8e = _0x47ef97;
      for (const _0x5dc556 of _0x1187aa) {
        _0x52df8e = Object(_0x52df8e)[_0x5dc556];
        if (_0x52df8e === undefined) {
          return _0x1881f0;
        }
      }
      return _0x52df8e;
    }
    lodash_set(_0x5bd219, _0x51155d, _0x250e94) {
      if (Object(_0x5bd219) !== _0x5bd219) {
        return _0x5bd219;
      }
      if (!Array.isArray(_0x51155d)) {
        _0x51155d = _0x51155d.toString().match(/[^.[]]+/g) || [];
      }
      _0x51155d.slice(0, -1).reduce((_0xc83ad0, _0x3dc09d, _0x5ec0c8) => Object(_0xc83ad0[_0x3dc09d]) === _0xc83ad0[_0x3dc09d] ? _0xc83ad0[_0x3dc09d] : _0xc83ad0[_0x3dc09d] = Math.abs(_0x51155d[_0x5ec0c8 + 1 < 10 ? "0" + (_0x5ec0c8 + 1) : _0x5ec0c8 + 1]) >> 0 === +_0x51155d[_0x5ec0c8 + 1 < 10 ? "0" + (_0x5ec0c8 + 1) : _0x5ec0c8 + 1] ? [] : {}, _0x5bd219)[_0x51155d[_0x51155d.length - 1]] = _0x250e94;
      return _0x5bd219;
    }
    getdata(_0x352973) {
      let _0x5291a6 = this.getval(_0x352973);
      if (/^@/.test(_0x352973)) {
        const [, _0x921eb8, _0x285776] = /^@(.*?).(.*?)$/.exec(_0x352973);
        const _0x630247 = _0x921eb8 ? this.getval(_0x921eb8) : "";
        if (_0x630247) {
          try {
            const _0x976102 = JSON.parse(_0x630247);
            _0x5291a6 = _0x976102 ? this.lodash_get(_0x976102, _0x285776, "") : _0x5291a6;
          } catch (_0x542d1b) {
            _0x5291a6 = "";
          }
        }
      }
      return _0x5291a6;
    }
    setdata(_0x2d7b68, _0x2edec9) {
      let _0x3c9591 = false;
      if (/^@/.test(_0x2edec9)) {
        const [, _0x29f667, _0x2f1bc4] = /^@(.*?).(.*?)$/.exec(_0x2edec9);
        const _0x2e6190 = this.getval(_0x29f667);
        const _0x12ceba = _0x29f667 ? _0x2e6190 === "null" ? null : _0x2e6190 || "{}" : "{}";
        try {
          const _0x357c37 = JSON.parse(_0x12ceba);
          this.lodash_set(_0x357c37, _0x2f1bc4, _0x2d7b68);
          _0x3c9591 = this.setval(JSON.stringify(_0x357c37), _0x29f667);
        } catch (_0x539059) {
          const _0x16586d = {};
          this.lodash_set(_0x16586d, _0x2f1bc4, _0x2d7b68);
          _0x3c9591 = this.setval(JSON.stringify(_0x16586d), _0x29f667);
        }
      } else {
        _0x3c9591 = this.setval(_0x2d7b68, _0x2edec9);
      }
      return _0x3c9591;
    }
    getval(_0x165dac) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x165dac);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x165dac);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x165dac];
          } else {
            return this.data && this.data[_0x165dac] || null;
          }
        }
      }
    }
    setval(_0x4e051c, _0x98804) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x4e051c, _0x98804);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x4e051c, _0x98804);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x98804] = _0x4e051c;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x98804] || null;
          }
        }
      }
    }
    initGotEnv(_0x47d63b) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x47d63b) {
        _0x47d63b.headers = _0x47d63b.headers ? _0x47d63b.headers : {};
        if (undefined === _0x47d63b.headers.Cookie && undefined === _0x47d63b.cookieJar) {
          _0x47d63b.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x2a75f1, _0x84f8c5 = () => {}) {
      if (_0x2a75f1.headers) {
        delete _0x2a75f1.headers["Content-Type"];
        delete _0x2a75f1.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x2a75f1.headers = _0x2a75f1.headers || {};
          const _0x227df3 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x2a75f1.headers, _0x227df3);
        }
        $httpClient.get(_0x2a75f1, (_0x364ad8, _0x2b1956, _0x72b9d8) => {
          if (!_0x364ad8 && _0x2b1956) {
            _0x2b1956.body = _0x72b9d8;
            _0x2b1956.statusCode = _0x2b1956.status;
          }
          _0x84f8c5(_0x364ad8, _0x2b1956, _0x72b9d8);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x2a75f1.opts = _0x2a75f1.opts || {};
            const _0x5c4f87 = {
              hints: false
            };
            Object.assign(_0x2a75f1.opts, _0x5c4f87);
          }
          $task.fetch(_0x2a75f1).then(_0x26e675 => {
            const {
              statusCode: _0x4931a5,
              statusCode,
              headers,
              body
            } = _0x26e675;
            const _0x4aa06e = {
              status: _0x4931a5,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x84f8c5(null, _0x4aa06e, body);
          }, _0x111283 => _0x84f8c5(_0x111283));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2a75f1);
            this.got(_0x2a75f1).on("redirect", (_0x5a306c, _0x39003d) => {
              try {
                if (_0x5a306c.headers["set-cookie"]) {
                  const _0xfbab0d = _0x5a306c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0xfbab0d) {
                    this.ckjar.setCookieSync(_0xfbab0d, null);
                  }
                  _0x39003d.cookieJar = this.ckjar;
                }
              } catch (_0x5cefe7) {
                this.logErr(_0x5cefe7);
              }
            }).then(_0x3f6f14 => {
              const {
                statusCode: _0x66c4c,
                statusCode,
                headers,
                body
              } = _0x3f6f14;
              const _0x575a64 = {
                status: _0x66c4c,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x84f8c5(null, _0x575a64, body);
            }, _0x4676db => {
              const {
                message: _0x43e8a1,
                response: _0x1a4da1
              } = _0x4676db;
              _0x84f8c5(_0x43e8a1, _0x1a4da1, _0x1a4da1 && _0x1a4da1.body);
            });
          }
        }
      }
    }
    post(_0x55ca62, _0x55dc1a = () => {}) {
      const _0xb21e69 = _0x55ca62.method ? _0x55ca62.method.toLocaleLowerCase() : "post";
      if (_0x55ca62.body && _0x55ca62.headers && !_0x55ca62.headers["Content-Type"]) {
        _0x55ca62.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x55ca62.headers) {
        delete _0x55ca62.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x55ca62.headers = _0x55ca62.headers || {};
          const _0xa30ccf = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x55ca62.headers, _0xa30ccf);
        }
        $httpClient[_0xb21e69](_0x55ca62, (_0x8d374a, _0x34af7d, _0x39b611) => {
          if (!_0x8d374a && _0x34af7d) {
            _0x34af7d.body = _0x39b611;
            _0x34af7d.statusCode = _0x34af7d.status;
          }
          _0x55dc1a(_0x8d374a, _0x34af7d, _0x39b611);
        });
      } else {
        if (this.isQuanX()) {
          _0x55ca62.method = _0xb21e69;
          if (this.isNeedRewrite) {
            _0x55ca62.opts = _0x55ca62.opts || {};
            const _0x136645 = {
              hints: false
            };
            Object.assign(_0x55ca62.opts, _0x136645);
          }
          $task.fetch(_0x55ca62).then(_0x2d90b8 => {
            const {
              statusCode: _0x49a194,
              statusCode,
              headers,
              body
            } = _0x2d90b8;
            const _0x6e7b9f = {
              status: _0x49a194,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x55dc1a(null, _0x6e7b9f, body);
          }, _0x575edd => _0x55dc1a(_0x575edd));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x55ca62);
            const {
              url,
              ..._0x4a24a4
            } = _0x55ca62;
            this.got[_0xb21e69](url, _0x4a24a4).then(_0x2e8305 => {
              const {
                statusCode: _0x1e4754,
                statusCode,
                headers,
                body
              } = _0x2e8305;
              const _0x11c43a = {
                status: _0x1e4754,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x55dc1a(null, _0x11c43a, body);
            }, _0xc7269d => {
              const {
                message: _0x28b46f,
                response: _0x285f26
              } = _0xc7269d;
              _0x55dc1a(_0x28b46f, _0x285f26, _0x285f26 && _0x285f26.body);
            });
          }
        }
      }
    }
    put(_0x20ee76, _0x2aee0e = () => {}) {
      const _0x235c4d = _0x20ee76.method ? _0x20ee76.method.toLocaleLowerCase() : "put";
      if (_0x20ee76.body && _0x20ee76.headers && !_0x20ee76.headers["Content-Type"]) {
        _0x20ee76.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x20ee76.headers) {
        delete _0x20ee76.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x20ee76.headers = _0x20ee76.headers || {};
          const _0x60fb3 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x20ee76.headers, _0x60fb3);
        }
        $httpClient[_0x235c4d](_0x20ee76, (_0xda126c, _0x73d255, _0x354e39) => {
          if (!_0xda126c && _0x73d255) {
            _0x73d255.body = _0x354e39;
            _0x73d255.statusCode = _0x73d255.status;
          }
          _0x2aee0e(_0xda126c, _0x73d255, _0x354e39);
        });
      } else {
        if (this.isQuanX()) {
          _0x20ee76.method = _0x235c4d;
          if (this.isNeedRewrite) {
            _0x20ee76.opts = _0x20ee76.opts || {};
            const _0x1418b2 = {
              hints: false
            };
            Object.assign(_0x20ee76.opts, _0x1418b2);
          }
          $task.fetch(_0x20ee76).then(_0xa92ab1 => {
            const {
              statusCode: _0x1821ef,
              statusCode,
              headers,
              body
            } = _0xa92ab1;
            const _0x51121e = {
              status: _0x1821ef,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2aee0e(null, _0x51121e, body);
          }, _0x1986c5 => _0x2aee0e(_0x1986c5));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x20ee76);
            const {
              url,
              ..._0x1a6369
            } = _0x20ee76;
            this.got[_0x235c4d](url, _0x1a6369).then(_0x4da4bb => {
              const {
                statusCode: _0x4f6b65,
                statusCode,
                headers,
                body
              } = _0x4da4bb;
              const _0x288dc2 = {
                status: _0x4f6b65,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2aee0e(null, _0x288dc2, body);
            }, _0x33a216 => {
              const {
                message: _0x4f4f60,
                response: _0x584662
              } = _0x33a216;
              _0x2aee0e(_0x4f4f60, _0x584662, _0x584662 && _0x584662.body);
            });
          }
        }
      }
    }
    time(_0x5b10a1, _0x1a5c29 = null) {
      const _0xef0413 = _0x1a5c29 ? new Date(_0x1a5c29) : new Date();
      const _0x1cda0c = {
        "M+": _0xef0413.getMonth() + 1,
        "d+": _0xef0413.getDate(),
        "H+": _0xef0413.getHours(),
        "m+": _0xef0413.getMinutes(),
        "s+": _0xef0413.getSeconds(),
        "q+": Math.floor((_0xef0413.getMonth() + 3) / 3),
        S: _0xef0413.getMilliseconds()
      };
      if (/(y+)/.test(_0x5b10a1)) {
        _0x5b10a1 = _0x5b10a1.replace(RegExp.$1, (_0xef0413.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x417cc0 in _0x1cda0c) if (new RegExp("(" + _0x417cc0 + ")").test(_0x5b10a1)) {
        _0x5b10a1 = _0x5b10a1.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x1cda0c[_0x417cc0] : ("00" + _0x1cda0c[_0x417cc0]).substr(("" + _0x1cda0c[_0x417cc0]).length));
      }
      return _0x5b10a1;
    }
    msg(_0xf33784 = _0x4b202c, _0x4ee351 = "", _0x1d59c7 = "", _0x37ad62) {
      const _0x28d5b4 = _0x503743 => {
        if (!_0x503743) {
          return _0x503743;
        }
        if (typeof _0x503743 === "string") {
          if (this.isLoon()) {
            return _0x503743;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x503743
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x503743
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x503743 === "object") {
            if (this.isLoon()) {
              let _0x23d1ba = _0x503743.openUrl || _0x503743.url || _0x503743["open-url"];
              let _0x1f1e72 = _0x503743.mediaUrl || _0x503743["media-url"];
              const _0x1c3228 = {
                openUrl: _0x23d1ba,
                mediaUrl: _0x1f1e72
              };
              return _0x1c3228;
            } else {
              if (this.isQuanX()) {
                let _0x41d2ba = _0x503743["open-url"] || _0x503743.url || _0x503743.openUrl;
                let _0x5a0b3b = _0x503743["media-url"] || _0x503743.mediaUrl;
                const _0x33b3eb = {
                  "open-url": _0x41d2ba,
                  "media-url": _0x5a0b3b
                };
                return _0x33b3eb;
              } else {
                if (this.isSurge()) {
                  let _0x2f3a70 = _0x503743.url || _0x503743.openUrl || _0x503743["open-url"];
                  const _0xfd739b = {
                    url: _0x2f3a70
                  };
                  return _0xfd739b;
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
          $notification.post(_0xf33784, _0x4ee351, _0x1d59c7, _0x28d5b4(_0x37ad62));
        } else {
          if (this.isQuanX()) {
            $notify(_0xf33784, _0x4ee351, _0x1d59c7, _0x28d5b4(_0x37ad62));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0xfd4877 = ["", "==============📣系统通知📣=============="];
        _0xfd4877.push(_0xf33784);
        _0x4ee351 ? _0xfd4877.push(_0x4ee351) : "";
        _0x1d59c7 ? _0xfd4877.push(_0x1d59c7) : "";
        console.log(_0xfd4877.join("\n"));
        this.logs = this.logs.concat(_0xfd4877);
      }
    }
    log(..._0x4c280c) {
      if (_0x4c280c.length > 0) {
        this.logs = [...this.logs, ..._0x4c280c];
      }
      console.log(_0x4c280c.join(this.logSeparator));
    }
    logErr(_0x35f556, _0x123a93) {
      const _0x1ecd09 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x1ecd09) {
        this.log("", "❗️" + this.name + ", 错误!", _0x35f556);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x35f556.stack);
      }
    }
    wait(_0x18f567) {
      return new Promise(_0x393019 => setTimeout(_0x393019, _0x18f567));
    }
    done(_0x156a72 = {}) {
      const _0x21ac0a = new Date().getTime();
      const _0x198e24 = (_0x21ac0a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x198e24 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x156a72);
      }
    }
  }(_0x4b202c, _0x3e4ecb);
}