//Sat Feb 01 2025 14:22:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x1fae29 = new David_0x4f7314("悟空浏览器");
const David_0x370643 = "V1.0.1";
const David_0x3f7a06 = "wkllqapp";
let David_0x7a454 = David_0x1fae29.getjson(David_0x3f7a06, []);
const David_0x488f7d = David_0x1fae29.isNode() ? require("fs") : "";
const David_0x1277ef = David_0x1fae29.isNode() ? require("ws") : "";
const David_0xa46cde = "david_cookies.js";
if (David_0x1fae29.isNode() && !David_0x488f7d.existsSync(David_0xa46cde)) {
  David_0x1fae29.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x488f7d.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n}\n\nmodule.exports = APPS", _0xefdf0a => {});
}
const David_0x5c9286 = David_0x1fae29.isNode() ? require("http") : "";
const David_0x58010a = David_0x1fae29.isNode() ? require("./sendNotify") : "";
const David_0x59a168 = David_0x1fae29.isNode() ? require("./david_cookies") : "";
let David_0x83d712 = David_0x1fae29.getdata("tguserid") || 1;
let David_0x578ce8 = David_0x1fae29.getdata("wkllqactivecode") || 0;
let David_0x33c52b = David_0x1fae29.getval("wkllquserck") || 1;
let David_0x568686 = David_0x1fae29.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x1fae29.getval("apiHosts")) {
  David_0x568686 = David_0x1fae29.getval("apiHosts");
}
const David_0x17a279 = 0;
let David_0x52d1f3 = David_0x1fae29.getval("tz") || "1";
var David_0x22b58e = "";
var David_0x3352c6 = "";
let David_0x32f337 = "";
let David_0x19b881 = [];
let David_0x66599a = [];
let David_0x4907ef = [];
let David_0x5dac05 = [];
let David_0x5cc274 = [];
let David_0xc04943 = [];
let David_0x25a3ed = [];
let David_0x15ae07 = "";
let David_0x542f2a = [];
let David_0x1de54e = "";
let David_0x318f13 = "";
let David_0x1602eb = "";
let David_0x213780 = "";
let David_0x48a9ed = "";
let David_0x2b0c39 = "";
let David_0x32add1 = "";
let David_0x5bb11b = 1;
let David_0x27405b = 1;
let David_0x4c3462 = 1;
let David_0x30c0cc = 1;
let David_0x6b4a8d = "";
let David_0x317d18 = "";
let David_0x4a7135 = 3;
let David_0x2bc85d = "";
if (David_0x1fae29.isNode()) {
  if (process.env.WKLLQAPP) {
    David_0x7a454 = JSON.parse(process.env.WKLLQAPP);
  } else {
    David_0x7a454 = David_0x59a168.WKLLQ;
  }
  David_0x83d712 = process.env.TGUSERID;
  David_0x578ce8 = process.env.WKLLQACTIVECODE;
  if (process.env.APIHOST) {
    David_0x568686 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x568686 = process.env.APIHOSTS;
  }
  David_0x22b58e = new Date(new Date().getTime()).getHours();
  David_0x3352c6 = new Date(new Date().getTime()).getMinutes();
  David_0x1fae29.log("🔔 当前环境: Node, 当前时间：" + David_0x22b58e + "点");
} else {
  David_0x22b58e = new Date().getHours();
  David_0x3352c6 = new Date().getMinutes();
  David_0x1fae29.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x22b58e + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x1632c1();
  } else {
    if (!David_0x7a454) {
      David_0x1fae29.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x1fae29.log("📢 开始检测服务器接口状态>>>");
    let _0x5b59a7 = false;
    const _0x299e4d = David_0x568686.split("&");
    const _0x16ebc3 = _0x299e4d.length;
    for (let _0x2aa69c = 0; _0x2aa69c < _0x16ebc3; _0x2aa69c++) {
      if (David_0x1fae29.isNode()) {
        _0x5b59a7 = await David_0x56c2af("" + _0x299e4d[_0x2aa69c], 2500);
      } else {
        if (David_0x1fae29.isSurge() || David_0x1fae29.isLoon()) {
          _0x5b59a7 = await David_0x1ce68e("" + _0x299e4d[_0x2aa69c], 2500);
        } else {
          _0x5b59a7 = await David_0x3ed135("" + _0x299e4d[_0x2aa69c], 2500);
        }
      }
      if (_0x5b59a7 == true) {
        David_0x568686 = _0x299e4d[_0x2aa69c];
        David_0x1fae29.log("📢 接口" + (_0x2aa69c + 1) + "[" + _0x299e4d[_0x2aa69c] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x2aa69c == _0x16ebc3 - 1 && _0x5b59a7 == false) {
        David_0x1fae29.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x1fae29.msg(David_0x1fae29.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x578ce8 || !David_0x83d712 || David_0x83d712 == 1 || David_0x578ce8 == 0 || David_0x578ce8.length != 32) {
      David_0x1fae29.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x368fd2(David_0x3f7a06, David_0x83d712, David_0x578ce8);
    David_0x1fae29.log("📢 " + David_0x48a9ed);
    David_0x1fae29.log("🔔 当前脚本版本号: " + David_0x370643 + "，最新版本号: " + David_0x1602eb);
    if (David_0x2bc85d != "") {
      let _0x37f209 = new Date(David_0x2bc85d).getTime();
      let _0x186676 = new Date().getTime();
      if (_0x186676 > _0x37f209) {
        David_0x1fae29.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x370643 < David_0x1602eb) {
      David_0x1fae29.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x107822("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x318f13 != true) {
      David_0x1fae29.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x6b4a8d != true) {
      David_0x1fae29.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x1de54e != true) {
      David_0x1fae29.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x32add1 == true) {
      David_0x1fae29.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x1fae29.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x2bc85d != "") {
      if (David_0x32add1 == true) {
        David_0x1fae29.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x52b89d = new Date(David_0x2bc85d).getTime();
        let _0x4f7876 = new Date().getTime();
        if (_0x4f7876 > _0x52b89d) {
          David_0x1fae29.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x2b0c39 != true) {
        David_0x1fae29.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        David_0x1fae29.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (David_0x5bb11b > 1) {
      David_0x1fae29.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x4a7135 * David_0x5bb11b + "个账号。");
    }
    if (David_0x27405b > 1) {
      David_0x1fae29.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x4c3462 + "次, 已经运行了" + David_0x30c0cc + "次。");
    }
    if (David_0x213780 != true) {
      David_0x1fae29.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x7a454.length > David_0x4a7135 * David_0x5bb11b) {
      David_0x1fae29.log("❗️ 当前用户一次最多运行" + David_0x4a7135 * David_0x5bb11b + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x7a454.length == 0) {
      David_0x1fae29.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x30c0cc + David_0x7a454.length > David_0x4c3462) {
      David_0x1fae29.log("📢 一共发现了" + David_0x7a454.length + "个账号");
      David_0x1fae29.log("❗️ 当前用户运行次数剩余" + (David_0x4c3462 - David_0x30c0cc) + "次，还可以运行" + (David_0x4c3462 - David_0x30c0cc) + "个账号，还需要" + (David_0x7a454.length - (David_0x4c3462 - David_0x30c0cc)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x2bc85d != "") {
      David_0x1fae29.log("📢 你的会员有效期到： " + David_0x2bc85d);
    }
    David_0x1fae29.log("📢 一共发现了" + David_0x7a454.length + "个账号");
    let _0xbf1df6 = [];
    for (let _0x3b23df = 0; _0x3b23df < David_0x7a454.length; _0x3b23df++) {
      _0xbf1df6.push(David_0x5cd0d0(_0x3b23df));
      David_0x19b881[_0x3b23df] = "";
      David_0x542f2a[_0x3b23df] = 1;
      if (David_0x1fae29.isNode()) {
        David_0x5dac05[_0x3b23df] = 0;
        await David_0x526c88(_0x3b23df);
      } else {
        David_0x5dac05[_0x3b23df] = 1;
      }
    }
    await Promise.allSettled(_0xbf1df6).then(_0x59126b => {
      David_0x1fae29.log("日志整理功能如下：");
      David_0x1fae29.log("---------------日志整理开始--------------");
      for (let _0x4a30c0 = 0; _0x4a30c0 < David_0x7a454.length; _0x4a30c0++) {
        David_0x1fae29.log(David_0x19b881[_0x4a30c0]);
        David_0x32f337 += David_0x19b881[_0x4a30c0];
      }
      David_0x1fae29.log("---------------日志整理结束--------------");
      David_0x107822(David_0x32f337);
    });
  }
})().catch(_0x45d55c => David_0x1fae29.logErr(_0x45d55c)).finally(() => David_0x1fae29.done());
async function David_0x5cd0d0(_0xec7e3) {
  return new Promise((_0x49e0fe, _0x395757) => {
    David_0x1fae29.log("[账号" + (_0xec7e3 + 1 < 10 ? "0" + (_0xec7e3 + 1) : _0xec7e3 + 1) + "]: 开始执行 working......");
    David_0x58a63f(_0x49e0fe, _0xec7e3);
  });
}
async function David_0x526c88(_0x2213a2) {
  if (David_0x1fae29.isNode()) {
    if (David_0x5cc274[_0x2213a2] > 0) {
      David_0x1fae29.log("[账号" + (_0x2213a2 + 1 < 10 ? "0" + (_0x2213a2 + 1) : _0x2213a2 + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0x66599a[_0x2213a2] = new David_0x1277ef(David_0x568686.replace("http", "ws") + "/ws");
    David_0x66599a[_0x2213a2].on("open", function _0x21fa85() {
      David_0x1fae29.log("[账号" + (_0x2213a2 + 1 < 10 ? "0" + (_0x2213a2 + 1) : _0x2213a2 + 1) + "]: 签名通道已连接");
    });
    David_0x66599a[_0x2213a2].on("close", function _0x3fc108() {
      David_0x1fae29.log("[账号" + (_0x2213a2 + 1 < 10 ? "0" + (_0x2213a2 + 1) : _0x2213a2 + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x66599a[_0x2213a2].on("error", function _0x57034b() {
      David_0x1fae29.log("[账号" + (_0x2213a2 + 1 < 10 ? "0" + (_0x2213a2 + 1) : _0x2213a2 + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x5dac05[_0x2213a2] = 1;
      David_0x5cc274[_0x2213a2]++;
      if (David_0x5cc274[_0x2213a2] <= 3) {
        David_0x526c88(_0x2213a2);
      }
    });
  }
}
async function David_0x58a63f(_0x46208d, _0x1656f8) {
  await David_0x1fae29.wait(3000, 5000);
  David_0x7a454[_0x1656f8].url = David_0x7a454[_0x1656f8].url.replace(/\+/g, "");
  await David_0x49135a(_0x1656f8);
  await David_0x5ae5b2(_0x1656f8);
  await David_0x456bbf(_0x1656f8);
  await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
  await David_0x1f45d1(_0x1656f8, 3012, "补充气泡广告", false);
  await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
  await David_0x1f45d1(_0x1656f8, 3010, "时长广告", false);
  if (David_0x1fae29.isNode()) {
    await David_0x66599a[_0x1656f8].close();
  }
  await David_0x32dd6a(David_0x3f7a06, David_0x83d712);
  _0x46208d();
}
async function David_0x1632c1() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x1615a9 = $request.body;
    let _0x30fe33 = David_0x33c52b - 1;
    if (David_0x7a454[_0x30fe33]) {
      David_0x7a454[_0x30fe33].token_body = _0x1615a9;
    } else {
      const _0x2d9b15 = {
        token_body: _0x1615a9
      };
      David_0x7a454[_0x30fe33] = _0x2d9b15;
    }
    David_0x1fae29.setdata(JSON.stringify(David_0x7a454, null, 2), "wkllqapp");
    David_0x1fae29.msg(David_0x1fae29.name, "快音账号" + (_0x30fe33 + 1) + "Token获取成功！🎉");
  }
}
function David_0x3bea55(_0x23526e) {
  let _0x5a4bc6 = David_0x32949e();
  let _0x1749e3 = David_0x235b6c();
  let _0x5e99b3 = David_0x331b14(David_0x7a454[_0x23526e].url);
  David_0x7a454[_0x23526e].iid = _0x5e99b3.iid;
  David_0x7a454[_0x23526e].did = _0x5e99b3.device_id;
  _0x5e99b3.ts = _0x1749e3;
  _0x5e99b3._rticket = _0x5a4bc6;
  _0x5e99b3.device_id = David_0x7a454[_0x23526e].did;
  _0x5e99b3.iid = David_0x7a454[_0x23526e].iid;
  _0x5e99b3.version_code = "1227";
  _0x5e99b3.version_name = "2.2.7";
  _0x5e99b3.manifest_version_code = "12270";
  _0x5e99b3.update_version_code = "122703";
  _0x5e99b3.device_platform = "android";
  delete _0x5e99b3.ab_version;
  delete _0x5e99b3.ab_feature;
  delete _0x5e99b3.ab_group;
  delete _0x5e99b3.ab_sdk_version;
  delete _0x5e99b3.client_vid;
  delete _0x5e99b3.local_ab_version;
  delete _0x5e99b3.luckydog_base;
  delete _0x5e99b3.luckydog_data;
  delete _0x5e99b3.luckydog_token;
  delete _0x5e99b3.luckydog_sdk_version;
  delete _0x5e99b3.luckydog_api_version;
  return David_0x518dbf(_0x5e99b3);
}
async function David_0x383974(_0x418a5d, _0x3fe39c, _0x45eebc) {
  let _0x5eab0f = "common";
  if (David_0x7a454[_0x418a5d].interface) {
    _0x5eab0f = David_0x7a454[_0x418a5d].interface;
  }
  let _0x21d836 = David_0x7a454[_0x418a5d].iid;
  let _0x2efed2 = David_0x7a454[_0x418a5d].did;
  let _0x1cb56f = "";
  let _0x3b5ea1 = [];
  for (let _0x4e788f in _0x45eebc) {
    if (_0x4e788f == "Content-Type" || _0x4e788f == "Host") {
      continue;
    }
    _0x3b5ea1.push(_0x4e788f.toLowerCase() + "=[" + _0x45eebc[_0x4e788f] + "]");
  }
  _0x1cb56f += _0x3b5ea1.join(",");
  _0x1cb56f += "";
  let _0x1cf748 = _0x2efed2 + "@" + _0x21d836 + "@" + encodeURIComponent(_0x3fe39c) + "@" + encodeURIComponent(_0x1cb56f) + "@" + _0x5eab0f;
  await David_0xc7a78d(_0x418a5d, _0x1cf748);
}
async function David_0x49135a(_0x58ca14) {
  let _0x51f19f = David_0x3bea55(_0x58ca14);
  const _0xe4412a = "https://api5-normal-lq.amemv.com/passport/account/info/v2/?" + _0x51f19f;
  let _0x1c00d5 = "";
  await David_0x336522(_0xe4412a, _0x1c00d5, _0x58ca14);
  if (David_0x542f2a[_0x58ca14] == 0) {
    David_0x1fae29.log("[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("get", David_0xc04943[_0x58ca14], David_0x172436());
  let _0x423a14 = David_0x15ae07;
  if (_0x423a14 != null && _0x423a14.message == "success") {
    David_0x1fae29.log("[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 用户名=> " + _0x423a14.data.name);
    David_0x19b881[_0x58ca14] += "[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 用户名=> " + _0x423a14.data.name + "\n";
    David_0x1fae29.log("[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 手机号=> " + _0x423a14.data.mobile);
    David_0x19b881[_0x58ca14] += "[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 手机号=> " + _0x423a14.data.mobile + "\n";
  } else {
    David_0x1fae29.log("[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 用户信息=> " + _0x423a14.err_tips);
    David_0x19b881[_0x58ca14] += "[账号" + (_0x58ca14 + 1 < 10 ? "0" + (_0x58ca14 + 1) : _0x58ca14 + 1) + "]: 用户信息=> " + _0x423a14.err_tips + "\n";
  }
}
async function David_0x35ac7d(_0x1e2cae) {
  let _0x378eae = David_0x3bea55(_0x1e2cae);
  const _0x2f13a8 = "https://api5-sinfonlinea.novelfm.com/luckycat/novel_fm/v1/task/sign_in/detail?task_key=sign_in&" + _0x378eae;
  let _0x14ecef = "";
  await David_0x336522(_0x2f13a8, _0x14ecef, _0x1e2cae);
  await David_0x1b679d("get", David_0xc04943[_0x1e2cae], David_0x172436());
  let _0x2f9a0b = David_0x15ae07;
  if (_0x2f9a0b != null && _0x2f9a0b.err_no == 0) {
    if (_0x2f9a0b.data.today_signed == false) {
      await David_0x2599b2(_0x1e2cae);
    }
  } else {
    David_0x1fae29.log("[账号" + (_0x1e2cae + 1 < 10 ? "0" + (_0x1e2cae + 1) : _0x1e2cae + 1) + "]: 签到=> " + _0x2f9a0b.err_tips);
    David_0x19b881[_0x1e2cae] += "[账号" + (_0x1e2cae + 1 < 10 ? "0" + (_0x1e2cae + 1) : _0x1e2cae + 1) + "]: 签到=> " + _0x2f9a0b.err_tips + "\n";
  }
}
async function David_0x37a4a9(_0x156ba5) {
  let _0x2e87f1 = David_0x3bea55(_0x156ba5);
  const _0x1baf7b = "https://api5-sinfonlinea.novelfm.com/luckycat/novel_fm/v1/task/done/new_user_signin?" + _0x2e87f1;
  let _0x3fcb71 = "{}";
  await David_0x336522(_0x1baf7b, _0x3fcb71, _0x156ba5);
  await David_0x1b679d("post", David_0xc04943[_0x156ba5], David_0x172436());
  let _0x3d8c37 = David_0x15ae07;
  if (_0x3d8c37 != null && _0x3d8c37.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x156ba5 + 1 < 10 ? "0" + (_0x156ba5 + 1) : _0x156ba5 + 1) + "]: 新用户签到=> " + _0x3d8c37.err_tips + "，获得" + _0x3d8c37.data.amount + "金币");
    David_0x19b881[_0x156ba5] += "[账号" + (_0x156ba5 + 1 < 10 ? "0" + (_0x156ba5 + 1) : _0x156ba5 + 1) + "]: 新用户签到=> " + _0x3d8c37.err_tips + "，获得" + _0x3d8c37.data.amount + "金币\n";
  } else {
    David_0x1fae29.log("[账号" + (_0x156ba5 + 1 < 10 ? "0" + (_0x156ba5 + 1) : _0x156ba5 + 1) + "]: 新用户签到=> " + _0x3d8c37.err_tips);
    David_0x19b881[_0x156ba5] += "[账号" + (_0x156ba5 + 1 < 10 ? "0" + (_0x156ba5 + 1) : _0x156ba5 + 1) + "]: 新用户签到=> " + _0x3d8c37.err_tips + "\n";
  }
}
async function David_0x2599b2(_0x33f7c0) {
  let _0x4e1045 = David_0x3bea55(_0x33f7c0);
  const _0x143772 = "https://api5-normal-lq.toutiaoapi.com/luckycat/gip/v1/daily/sign/done?" + _0x4e1045;
  let _0x2632bd = "{\"is_double\":true}";
  await David_0x336522(_0x143772, _0x2632bd, _0x33f7c0);
  if (David_0x542f2a[_0x33f7c0] == 0) {
    David_0x1fae29.log("[账号" + (_0x33f7c0 + 1 < 10 ? "0" + (_0x33f7c0 + 1) : _0x33f7c0 + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("post", David_0xc04943[_0x33f7c0], David_0x172436());
  let _0xc051fb = David_0x15ae07;
  if (_0xc051fb != null && _0xc051fb.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x33f7c0 + 1 < 10 ? "0" + (_0x33f7c0 + 1) : _0x33f7c0 + 1) + "]: 签到=> " + _0xc051fb.err_tips + "，获得" + _0xc051fb.data.reward_amount + "金币");
    David_0x19b881[_0x33f7c0] += "[账号" + (_0x33f7c0 + 1 < 10 ? "0" + (_0x33f7c0 + 1) : _0x33f7c0 + 1) + "]: 签到=> " + _0xc051fb.err_tips + "，获得" + _0xc051fb.data.reward_amount + "金币\n";
    if (_0xc051fb.data.new_excitation_ad) {
      await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
      await David_0x552b07(_0x33f7c0);
    }
  } else {
    David_0x1fae29.log("[账号" + (_0x33f7c0 + 1 < 10 ? "0" + (_0x33f7c0 + 1) : _0x33f7c0 + 1) + "]: 签到=> " + _0xc051fb.err_tips);
    David_0x19b881[_0x33f7c0] += "[账号" + (_0x33f7c0 + 1 < 10 ? "0" + (_0x33f7c0 + 1) : _0x33f7c0 + 1) + "]: 签到=> " + _0xc051fb.err_tips + "\n";
  }
}
async function David_0x552b07(_0x1d5531) {
  let _0x5e06a9 = David_0x3bea55(_0x1d5531);
  const _0x4126bb = "https://api5-normal-quic-lq.ixigua.com/luckycat/xigua/v1/task/done/ad_daily_sign_in?" + _0x5e06a9;
  let _0x46cd4e = "ad_fallback=false&enter_from=goldcoin_pendant&income_id=1009603_111304201778_1709197866713&creator_id=1009603&reward_stage=2&ad_seconds=15";
  await David_0x336522(_0x4126bb, _0x46cd4e, _0x1d5531);
  if (David_0x542f2a[_0x1d5531] == 0) {
    David_0x1fae29.log("[账号" + (_0x1d5531 + 1 < 10 ? "0" + (_0x1d5531 + 1) : _0x1d5531 + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("post", David_0xc04943[_0x1d5531], David_0x172436());
  let _0x1290d4 = David_0x15ae07;
  if (_0x1290d4 != null && _0x1290d4.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x1d5531 + 1 < 10 ? "0" + (_0x1d5531 + 1) : _0x1d5531 + 1) + "]: 签到广告=> " + _0x1290d4.err_tips + "，获得" + _0x1290d4.data.amount + "金币");
    David_0x19b881[_0x1d5531] += "[账号" + (_0x1d5531 + 1 < 10 ? "0" + (_0x1d5531 + 1) : _0x1d5531 + 1) + "]: 签到广告=> " + _0x1290d4.err_tips + "，获得" + _0x1290d4.data.amount + "金币\n";
  } else {
    David_0x1fae29.log("[账号" + (_0x1d5531 + 1 < 10 ? "0" + (_0x1d5531 + 1) : _0x1d5531 + 1) + "]: 签到广告=> " + _0x1290d4.err_tips);
    David_0x19b881[_0x1d5531] += "[账号" + (_0x1d5531 + 1 < 10 ? "0" + (_0x1d5531 + 1) : _0x1d5531 + 1) + "]: 签到广告=> " + _0x1290d4.err_tips + "\n";
  }
}
async function David_0x20e5b8(_0x46a809) {
  let _0x40daab = David_0x3bea55(_0x46a809);
  const _0x35b17a = "https://api5-normal-hl.toutiaoapi.com/luckycat/sj/v1/withdraw/page_data?" + _0x40daab;
  let _0x24db39 = "";
  await David_0x336522(_0x35b17a, _0x24db39, _0x46a809);
  await David_0x1b679d("get", David_0xc04943[_0x46a809], David_0x172436());
  let _0x46e92b = David_0x15ae07;
  if (_0x46e92b != null && _0x46e92b.err_no == 0) {
    let _0x12f223 = _0x46e92b.data.ali_auth_info.ali_auth_info;
    David_0x4907ef[_0x46a809] = _0x12f223;
  } else {
    David_0x1fae29.log("[账号" + (_0x46a809 + 1 < 10 ? "0" + (_0x46a809 + 1) : _0x46a809 + 1) + "]: 提现页面=> " + _0x46e92b.err_tips);
    David_0x19b881[_0x46a809] += "[账号" + (_0x46a809 + 1 < 10 ? "0" + (_0x46a809 + 1) : _0x46a809 + 1) + "]: 提现页面=> " + _0x46e92b.err_tips + "\n";
  }
}
async function David_0x3b949c(_0x2566f4, _0x56cbae) {
  let _0x5430be = David_0x3bea55(_0x2566f4);
  const _0x450c2d = "https://api5-normal-hl.toutiaoapi.com/luckycat/sj/v1/withdraw/withdraw?" + _0x5430be;
  let _0x2ddead = "{\"ali_auth_info\":{\"type\":0},\"cash_amount\":" + _0x56cbae * 100 + ",\"task_id\":2003,\"type\":3,\"weixin_code\":\"\"}";
  await David_0x336522(_0x450c2d, _0x2ddead, _0x2566f4);
  await David_0x1b679d("post", David_0xc04943[_0x2566f4], David_0x172436());
  let _0x1bfcc5 = David_0x15ae07;
  if (_0x1bfcc5 != null && _0x1bfcc5.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x2566f4 + 1 < 10 ? "0" + (_0x2566f4 + 1) : _0x2566f4 + 1) + "]: 自动提现" + _0x56cbae + "元" + _0x1bfcc5.err_tips);
    David_0x19b881[_0x2566f4] += "[账号" + (_0x2566f4 + 1 < 10 ? "0" + (_0x2566f4 + 1) : _0x2566f4 + 1) + "]: 自动提现" + _0x56cbae + "元" + _0x1bfcc5.err_tips + "\n";
  } else {
    David_0x1fae29.log("[账号" + (_0x2566f4 + 1 < 10 ? "0" + (_0x2566f4 + 1) : _0x2566f4 + 1) + "]: 提现结果=> " + _0x1bfcc5.err_tips);
    David_0x19b881[_0x2566f4] += "[账号" + (_0x2566f4 + 1 < 10 ? "0" + (_0x2566f4 + 1) : _0x2566f4 + 1) + "]: 提现结果=> " + _0x1bfcc5.err_tips + "\n";
  }
}
async function David_0x5ae5b2(_0x453d6c) {
  let _0x3d18d7 = David_0x3bea55(_0x453d6c);
  const _0x24287c = "https://api5-normal-lq.toutiaoapi.com/luckycat/sj/v1/task/page_data?" + _0x3d18d7;
  let _0x165ab5 = "";
  await David_0x336522(_0x24287c, _0x165ab5, _0x453d6c);
  if (David_0x542f2a[_0x453d6c] == 0) {
    David_0x1fae29.log("[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("get", David_0xc04943[_0x453d6c], David_0x172436());
  let _0x4afbad = David_0x15ae07;
  if (_0x4afbad != null && _0x4afbad.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 金币=> " + _0x4afbad.data.user_income.today_score_amount + "金币");
    David_0x19b881[_0x453d6c] += "[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 金币=> " + _0x4afbad.data.user_income.today_score_amount + "金币\n";
    David_0x1fae29.log("[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 余额=> " + _0x4afbad.data.user_income.score_balance_to_cash / 100 + "元");
    David_0x19b881[_0x453d6c] += "[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 余额=> " + _0x4afbad.data.user_income.score_balance_to_cash / 100 + "元\n";
    if (_0x4afbad.data.user_income.score_balance_to_cash / 100 >= 30) {
      await David_0x3b949c(_0x453d6c, 30);
    } else {
      if (_0x4afbad.data.user_income.score_balance_to_cash / 100 >= 15 && _0x4afbad.data.user_income.score_balance_to_cash / 100 < 30) {
        await David_0x3b949c(_0x453d6c, 15);
      }
    }
    let _0x269828 = _0x4afbad.data.task_list.daily;
    let _0x43644a = _0x269828.find(_0xfb6331 => _0xfb6331.task_id == 3013);
    if (_0x43644a && _0x43644a.is_completed == false) {
      await David_0x2599b2(_0x453d6c);
    }
    let _0x4c1571 = _0x269828.find(_0x1de6c1 => _0x1de6c1.task_id == 4006);
    if (_0x4c1571) {
      if (_0x4c1571.is_completed == false) {
        let _0x15b357 = JSON.parse(_0x4c1571.extra);
        if (_0x15b357.left_seconds == 0) {
          if (David_0x542f2a[_0x453d6c] == 1) {
            await David_0x1f45d1(_0x453d6c, 4006, _0x4c1571.name, false);
          }
        }
      }
    }
  } else {
    David_0x1fae29.log("[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 任务中心=> " + _0x4afbad.err_tips);
    David_0x19b881[_0x453d6c] += "[账号" + (_0x453d6c + 1 < 10 ? "0" + (_0x453d6c + 1) : _0x453d6c + 1) + "]: 任务中心=> " + _0x4afbad.err_tips + "\n";
  }
}
async function David_0x456bbf(_0x2e977f) {
  let _0x30855c = David_0x3bea55(_0x2e977f);
  const _0x25001a = "https://api5-normal-lq.toutiaoapi.com/luckycat/gip/v1/daily/treasure_box/detail?" + _0x30855c;
  let _0xbb024d = "";
  await David_0x336522(_0x25001a, _0xbb024d, _0x2e977f);
  if (David_0x542f2a[_0x2e977f] == 0) {
    David_0x1fae29.log("[账号" + (_0x2e977f + 1 < 10 ? "0" + (_0x2e977f + 1) : _0x2e977f + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("get", David_0xc04943[_0x2e977f], David_0x172436());
  let _0x6bc6ef = David_0x15ae07;
  if (_0x6bc6ef != null && _0x6bc6ef.err_no == 0) {
    if (_0x6bc6ef.data.left_seconds == 0) {
      await David_0x58f7a7(_0x2e977f);
    }
    if (_0x6bc6ef.data.surprise_left_times > 0) {
      await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
      await David_0x1f45d1(_0x2e977f, 4018, "惊喜广告", false);
    }
  } else {
    David_0x1fae29.log("[账号" + (_0x2e977f + 1 < 10 ? "0" + (_0x2e977f + 1) : _0x2e977f + 1) + "]: 宝箱状态=> " + _0x6bc6ef.err_tips);
    David_0x19b881[_0x2e977f] += "[账号" + (_0x2e977f + 1 < 10 ? "0" + (_0x2e977f + 1) : _0x2e977f + 1) + "]: 宝箱状态=> " + _0x6bc6ef.err_tips + "\n";
  }
}
async function David_0x58f7a7(_0x405d0b) {
  let _0xce999a = David_0x3bea55(_0x405d0b);
  let _0x386355 = "https://api5-normal-lq.toutiaoapi.com/luckycat/gip/v1/daily/treasure_box/done?" + _0xce999a;
  let _0x351a54 = "{\"auto_open\":false}";
  await David_0x336522(_0x386355, _0x351a54, _0x405d0b);
  if (David_0x542f2a[_0x405d0b] == 0) {
    David_0x1fae29.log("[账号" + (_0x405d0b + 1 < 10 ? "0" + (_0x405d0b + 1) : _0x405d0b + 1) + "]: 宝箱=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("post", David_0xc04943[_0x405d0b], David_0x172436());
  let _0x4044fc = David_0x15ae07;
  if (_0x4044fc != null && _0x4044fc.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x405d0b + 1 < 10 ? "0" + (_0x405d0b + 1) : _0x405d0b + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + _0x4044fc.data.reward_amount + "金币 🎉");
    David_0x19b881[_0x405d0b] += "[账号" + (_0x405d0b + 1 < 10 ? "0" + (_0x405d0b + 1) : _0x405d0b + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + _0x4044fc.data.reward_amount + "金币 🎉\n";
    await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
    await David_0x1f45d1(_0x405d0b, 4108, "宝箱广告", false);
  } else {
    David_0x1fae29.log("[账号" + (_0x405d0b + 1 < 10 ? "0" + (_0x405d0b + 1) : _0x405d0b + 1) + "]: 打开宝箱=> " + _0x4044fc.err_tips);
    David_0x19b881[_0x405d0b] += "[账号" + (_0x405d0b + 1 < 10 ? "0" + (_0x405d0b + 1) : _0x405d0b + 1) + "]: 打开宝箱=> " + _0x4044fc.err_tips + "\n";
  }
}
async function David_0x50e748(_0x306fe0, _0x531653) {
  let _0x2138a0 = David_0x3bea55(_0x306fe0);
  const _0x189da6 = "https://api5-normal-quic-lq.ixigua.com/luckycat/xigua/v1/task/done/ad_watch_daily_again?" + _0x2138a0 + "&md=0";
  let _0x4c757c = "ad_fallback=false&reward_stage=2&income_id=1009603_111304201778_1709197866789&enter_from=goldcoin_pendant&creator_id=1009603000";
  await David_0x336522(_0x189da6, _0x4c757c, _0x306fe0);
  if (David_0x542f2a[_0x306fe0] == 0) {
    David_0x1fae29.log("[账号" + (_0x306fe0 + 1 < 10 ? "0" + (_0x306fe0 + 1) : _0x306fe0 + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  if (David_0x542f2a[_0x306fe0] == 0) {
    David_0x1fae29.log("[账号" + (_0x306fe0 + 1 < 10 ? "0" + (_0x306fe0 + 1) : _0x306fe0 + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("post", David_0xc04943[_0x306fe0], David_0x172436());
  let _0x2a4677 = David_0x15ae07;
  if (_0x2a4677 != null && _0x2a4677.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x306fe0 + 1 < 10 ? "0" + (_0x306fe0 + 1) : _0x306fe0 + 1) + "]: 追加广告(" + (_0x531653 + 1) + ")=> 获得" + _0x2a4677.data.amount + "金币 🎉");
    David_0x19b881[_0x306fe0] += "[账号" + (_0x306fe0 + 1 < 10 ? "0" + (_0x306fe0 + 1) : _0x306fe0 + 1) + "]: 追加广告(" + (_0x531653 + 1) + ")=> 获得" + _0x2a4677.data.amount + "金币 🎉\n";
  } else {
    David_0x1fae29.log("[账号" + (_0x306fe0 + 1 < 10 ? "0" + (_0x306fe0 + 1) : _0x306fe0 + 1) + "]: 宝箱广告=> " + _0x2a4677.err_tips);
    David_0x19b881[_0x306fe0] += "[账号" + (_0x306fe0 + 1 < 10 ? "0" + (_0x306fe0 + 1) : _0x306fe0 + 1) + "]: 宝箱广告=> " + _0x2a4677.err_tips + "\n";
  }
}
async function David_0x288860(_0x17a67b, _0x2399ea) {
  let _0x5ec11b = David_0x3bea55(_0x17a67b);
  const _0x211f51 = "https://api5-normal-quic-lq.ixigua.com/luckycat/xigua/v1/task/ad_can_reward_more?rewarded_times=" + _0x2399ea + "&creator_id=1009603000&" + _0x5ec11b;
  let _0x283ac3 = "";
  await David_0x336522(_0x211f51, _0x283ac3, _0x17a67b);
  if (David_0x542f2a[_0x17a67b] == 0) {
    David_0x1fae29.log("[账号" + (_0x17a67b + 1 < 10 ? "0" + (_0x17a67b + 1) : _0x17a67b + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("get", David_0xc04943[_0x17a67b], David_0x172436());
  let _0x1443fe = David_0x15ae07;
  if (_0x1443fe != null && _0x1443fe.err_no == 0) {
    if (_0x1443fe.data.can_reward_one_more == true) {
      await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
      await David_0x50e748(_0x17a67b, _0x2399ea);
    }
  } else {
    David_0x1fae29.log("[账号" + (_0x17a67b + 1 < 10 ? "0" + (_0x17a67b + 1) : _0x17a67b + 1) + "]: 检测追加广告=> " + _0x1443fe.err_tips);
    David_0x19b881[_0x17a67b] += "[账号" + (_0x17a67b + 1 < 10 ? "0" + (_0x17a67b + 1) : _0x17a67b + 1) + "]: 检测追加广告=> " + _0x1443fe.err_tips + "\n";
  }
}
async function David_0x1f45d1(_0x3e86a9, _0x2778df, _0x2fdeae, _0x564de0) {
  let _0x14178f = David_0x3bea55(_0x3e86a9);
  let _0x37a555 = parseInt("9515" + David_0x2f0940(10000, 15998));
  const _0x54b9f1 = "https://api5-normal-lq.toutiaoapi.com/luckycat/gip/v1/cooperate/exciad/done?" + _0x14178f;
  let _0x4965e3 = "{\"task_id\":" + _0x2778df + ",\"ad_type\":1,\"ad_id\":" + _0x37a555 + ",\"exci_extra\":{\"amount\":1985,\"reward_times\":0,\"inner_reward_times\":0}}";
  await David_0x336522(_0x54b9f1, _0x4965e3, _0x3e86a9);
  if (David_0x542f2a[_0x3e86a9] == 0) {
    David_0x1fae29.log("[账号" + (_0x3e86a9 + 1 < 10 ? "0" + (_0x3e86a9 + 1) : _0x3e86a9 + 1) + "]: 用户中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await David_0x1b679d("post", David_0xc04943[_0x3e86a9], David_0x172436());
  let _0x401651 = David_0x15ae07;
  if (_0x401651 != null && _0x401651.err_no == 0) {
    David_0x1fae29.log("[账号" + (_0x3e86a9 + 1 < 10 ? "0" + (_0x3e86a9 + 1) : _0x3e86a9 + 1) + "]: " + _0x2fdeae + "=> 获得" + _0x401651.data.amount + "金币 🎉");
    David_0x19b881[_0x3e86a9] += "[账号" + (_0x3e86a9 + 1 < 10 ? "0" + (_0x3e86a9 + 1) : _0x3e86a9 + 1) + "]: " + _0x2fdeae + "=> 获得" + _0x401651.data.amount + "金币 🎉\n";
    if (_0x564de0 == false) {
      for (let _0xa1c0d1 = 0; _0xa1c0d1 < 2; _0xa1c0d1++) {
        await David_0x1fae29.wait(David_0x2f0940(15000, 30000));
        await David_0x1f45d1(_0x3e86a9, 4010, _0x2fdeae + "-追加(" + (_0xa1c0d1 + 1) + ")", true);
      }
    }
  } else {
    David_0x1fae29.log("[账号" + (_0x3e86a9 + 1 < 10 ? "0" + (_0x3e86a9 + 1) : _0x3e86a9 + 1) + "]: " + _0x2fdeae + "=> " + _0x401651.err_tips);
    David_0x19b881[_0x3e86a9] += "[账号" + (_0x3e86a9 + 1 < 10 ? "0" + (_0x3e86a9 + 1) : _0x3e86a9 + 1) + "]: " + _0x2fdeae + "=> " + _0x401651.err_tips + "\n";
  }
}
function David_0x368fd2(_0x29309d, _0x4747a0, _0x13c0f8) {
  return new Promise((_0x51bf0d, _0x34c62c) => {
    const _0x2d8fdf = David_0x568686 + "/script/permissions/lastest";
    const _0x3c7ade = {
      appName: _0x29309d,
      userId: _0x4747a0,
      activityCode: _0x13c0f8,
      version: David_0x370643
    };
    const _0x524d2a = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xbf8a50 = {
      url: _0x2d8fdf,
      headers: _0x524d2a,
      body: JSON.stringify(_0x3c7ade)
    };
    David_0x1fae29.post(_0xbf8a50, async (_0x5bf8f0, _0x405c34, _0x12b2fa) => {
      if (_0x12b2fa && _0x12b2fa != null && _0x12b2fa.replace(/\"/g, "").length > 50) {
        const _0x100281 = _0x12b2fa.replace(/\"/g, "").slice(34);
        const _0x564a33 = new David_0x18dc5c();
        result = JSON.parse(_0x564a33.decode(_0x100281));
        try {
          David_0x1602eb = result.version;
          David_0x1de54e = result.userAuth;
          David_0x318f13 = result.scriptAuth;
          David_0x213780 = result.runAuth;
          David_0x48a9ed = result.notify;
          David_0x2b0c39 = result.vipAuth;
          David_0x32add1 = result.isCharge;
          David_0x5bb11b = result.runAcounts;
          David_0x27405b = result.buyCount;
          David_0x30c0cc = result.runedCounts;
          David_0x4c3462 = result.runTotalCounts;
          David_0x6b4a8d = result.userRank;
          David_0x317d18 = result.invicate;
          David_0x4a7135 = result.accountNumbers;
          David_0x2bc85d = result.vipDate;
        } catch (_0x18bd37) {
          David_0x1fae29.log(_0x18bd37);
        }
      } else {
        David_0x1fae29.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x51bf0d();
    });
  });
}
function David_0x32dd6a(_0x235f2b, _0x3aab40) {
  return new Promise((_0x2a6797, _0x2de454) => {
    const _0x33f6fd = David_0x568686 + "/script/run/add";
    const _0x3cad1b = {
      appName: _0x235f2b,
      userId: _0x3aab40,
      activityCode: David_0x578ce8,
      version: David_0x370643
    };
    const _0x572cc5 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x156aaf = {
      url: _0x33f6fd,
      headers: _0x572cc5,
      body: JSON.stringify(_0x3cad1b)
    };
    David_0x1fae29.post(_0x156aaf, async (_0x48d225, _0x57d1d4, _0x34140d) => {
      _0x2a6797();
    });
  });
}
function David_0x56c2af(_0x540a9b, _0x36d185) {
  return new Promise((_0x1a06c0, _0x2e5f6b) => {
    const _0x529a31 = setTimeout(() => {
      _0x1a06c0(false);
    }, _0x36d185);
    const _0x2a7856 = David_0x5c9286.get(_0x540a9b, _0x114224 => {
      clearTimeout(_0x529a31);
      if (_0x114224.statusCode === 404) {
        _0x1a06c0(true);
      } else {
        _0x1a06c0(false);
      }
    });
    _0x2a7856.on("error", _0x2f091a => {
      clearTimeout(_0x529a31);
      _0x1a06c0(false);
    });
    _0x2a7856.on("timeout", () => {
      _0x2a7856.abort();
      _0x2e5f6b(new Error("请求超时"));
    });
  });
}
async function David_0x3ed135(_0x4f2dd4, _0x1c3ec6 = 3000) {
  return new Promise((_0x3012b8, _0x2e5bbc) => {
    const _0x1a8ff2 = {
      url: _0x4f2dd4 + "/docs"
    };
    setTimeout(() => {
      _0x3012b8(false);
    }, _0x1c3ec6);
    David_0x1fae29.get(_0x1a8ff2, async (_0x3fc273, _0x31a780, _0x627bc9) => {
      if (_0x31a780.status == 401) {
        _0x3012b8(true);
      } else {
        _0x3012b8(false);
      }
    });
  });
}
async function David_0x1ce68e(_0x5aa698, _0xd1125a = 3000) {
  return new Promise((_0x523d91, _0x5dc819) => {
    const _0x2635dd = {
      url: _0x5aa698 + "/"
    };
    setTimeout(() => {
      _0x523d91(false);
    }, _0xd1125a);
    $httpClient.get(_0x2635dd, async (_0x532750, _0x2baa2c, _0x2e555a) => {
      if (_0x2e555a == "{\"detail\":\"Not Found\"}") {
        _0x523d91(true);
      } else {
        _0x523d91(false);
      }
    });
  });
}
async function David_0x43d48c(_0x1cde1a, _0x299cef, _0x569aa5) {
  return new Promise((_0x152e9a, _0x22784d) => {
    const _0x35ade5 = David_0x568686 + "/redis/hash/get/" + _0x299cef + "/" + _0x569aa5;
    const _0x15815c = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1f6670 = {
      url: _0x35ade5,
      headers: _0x15815c
    };
    David_0x1fae29.get(_0x1f6670, async (_0x1221d8, _0x1d7cb3, _0x29e2cc) => {
      const _0x1f6b92 = _0x29e2cc.replace(/\"/g, "");
      answerTexts[_0x1cde1a] = _0x1f6b92;
      _0x152e9a();
    });
  });
}
function David_0xfafe9f(_0xdf17e6, _0x27f2fc, _0x326f09) {
  return new Promise((_0x230582, _0x461592) => {
    const _0x36d971 = David_0x568686 + "/redis/hash/set";
    const _0x5934e3 = {
      key: _0xdf17e6,
      hashKey: _0x27f2fc,
      hashValue: _0x326f09
    };
    const _0x4bb3cb = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x374712 = {
      url: _0x36d971,
      headers: _0x4bb3cb,
      body: JSON.stringify(_0x5934e3)
    };
    David_0x1fae29.post(_0x374712, async (_0xcd984a, _0x497259, _0x4b2511) => {
      _0x230582();
    });
  });
}
function David_0xe8ec9(_0x1c32a6) {
  return new Promise((_0x33d34d, _0x45004a) => {
    const _0xdd9389 = David_0x568686 + "/redis/set/pop/" + _0x1c32a6;
    const _0x4a9e45 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x341bd2 = {
      url: _0xdd9389,
      headers: _0x4a9e45
    };
    David_0x1fae29.get(_0x341bd2, async (_0x286fc3, _0x698531, _0xab7a01) => {
      const _0x307f1b = _0xab7a01.replace(/\"/g, "");
      popCookie = _0x307f1b;
      _0x33d34d();
    });
  });
}
async function David_0x336522(_0x118403, _0x3457d0, _0x2cd093) {
  let _0x403e63 = "com.cat.readall/12270 (Linux; U; Android 10; zh_CN_#Hans; Pixel; Build/QP1A.191005.007.A3; Cronet/TTNetVersion:5a18c8d3 2022-07-19 QuicVersion:12a1d5c5 2022-06-27)";
  if (David_0x7a454[_0x2cd093].ua && David_0x7a454[_0x2cd093].ua != "") {
    _0x403e63 = David_0x7a454[_0x2cd093].ua;
  }
  let _0x57d750 = David_0x36eaa8(_0x118403);
  let _0x16121d = David_0x32949e();
  await David_0x1fae29.wait(David_0x2f0940(200, 350));
  const _0x539b2a = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
    "User-Agent": _0x403e63,
    Host: _0x57d750,
    "passport-sdk-version": "50335",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": _0x16121d,
    "x-Tt-Token": David_0x7a454[_0x2cd093].token,
    "x-tt-dt": David_0x7a454[_0x2cd093].dt,
    "x-vc-bdturing-sdk-version": "3.5.0.cn"
  };
  const _0x4131b7 = {
    url: _0x118403,
    headers: _0x539b2a
  };
  if (_0x3457d0) {
    _0x4131b7.body = _0x3457d0;
    _0x4131b7.headers["X-SS-STUB"] = David_0x30ddb3(_0x3457d0).toUpperCase();
  }
  await David_0x383974(_0x2cd093, _0x118403, _0x4131b7.headers);
  let _0x5a5e62 = David_0x25a3ed[_0x2cd093];
  if (_0x5a5e62 && _0x5a5e62 != "Internal Server Error") {
    const _0xcca29f = David_0x3c1393(_0x5a5e62);
    _0x4131b7.headers["X-Argus"] = _0xcca29f["X-Argus"];
    _0x4131b7.headers["X-Gorgon"] = _0xcca29f["X-Gorgon"];
    if (_0xcca29f["X-Gorgon"] == undefined) {
      David_0x542f2a[_0x2cd093] = 0;
    }
    _0x4131b7.headers["X-Helios"] = _0xcca29f["X-Helios"];
    _0x4131b7.headers["X-Khronos"] = _0xcca29f["X-Khronos"];
    _0x4131b7.headers["X-Ladon"] = _0xcca29f["X-Ladon"];
    _0x4131b7.headers["X-Medusa"] = _0xcca29f["X-Medusa"];
    let _0x7c1540 = David_0x7a454[_0x2cd093].token.substring(2, 34);
    _0x4131b7.headers.Cookie = "sessionid=" + _0x7c1540 + "; sessionid_ss=" + _0x7c1540;
  } else {
    David_0x542f2a[_0x2cd093] = 0;
  }
  David_0xc04943[_0x2cd093] = _0x4131b7;
  return _0x4131b7;
}
function David_0x14ad84(_0x256d04, _0x3c9672, _0x5e7a54) {
  let _0x299d9c = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (David_0x7a454[_0x5e7a54].ua && David_0x7a454[_0x5e7a54].ua != "") {
    _0x299d9c = David_0x7a454[_0x5e7a54].ua;
  }
  let _0x418757 = David_0x36eaa8(_0x256d04);
  const _0x101432 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x299d9c,
    Authorization: David_0x7a454[_0x5e7a54].auth,
    Host: _0x418757
  };
  const _0x5ed119 = {
    url: _0x256d04,
    headers: _0x101432
  };
  if (_0x3c9672) {
    _0x5ed119.body = _0x3c9672;
  }
  David_0xc04943[_0x5e7a54] = _0x5ed119;
  return _0x5ed119;
}
async function David_0x1b679d(_0x384365, _0x9f3144, _0x37e06e) {
  David_0x15ae07 = null;
  return new Promise(_0x479338 => {
    David_0x1fae29[_0x384365](_0x9f3144, async (_0x2041f6, _0x5c35d8, _0x2541f3) => {
      try {
        if (_0x2041f6) {
          David_0x1fae29.log(_0x37e06e + ": " + _0x384365 + "请求失败");
          David_0x1fae29.log(JSON.stringify(_0x2041f6));
          David_0x1fae29.logErr(_0x2041f6);
        } else {
          if (David_0x4c0160(_0x2541f3)) {
            David_0x15ae07 = JSON.parse(_0x2541f3);
          } else {
            const _0x3cbb1d = new URL(_0x9f3144.url);
            David_0x1fae29.log(_0x3cbb1d.pathname + "发起" + _0x384365 + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x171693) {
        David_0x1fae29.logErr(_0x171693, _0x5c35d8);
      } finally {
        _0x479338(David_0x15ae07);
      }
    });
  });
}
async function David_0xc7a78d(_0x4fd9da, _0x5f2b20) {
  if (David_0x5dac05[_0x4fd9da] == 0) {
    await David_0x2e5b89(_0x4fd9da, _0x5f2b20);
  } else {
    await David_0x458808(_0x4fd9da, _0x5f2b20);
  }
}
function David_0x2e5b89(_0x272924, _0x342de0) {
  return new Promise((_0x19703f, _0x893c2e) => {
    function _0x379df9(_0x485c00) {
      let _0x1f32f8 = _0x485c00.toString("utf8");
      David_0x25a3ed[_0x272924] = _0x1f32f8;
      David_0x66599a[_0x272924].removeListener("message", _0x379df9);
      _0x19703f(_0x1f32f8);
    }
    David_0x66599a[_0x272924].on("message", _0x379df9);
    if (David_0x66599a[_0x272924].readyState === 1) {
      const _0x47cda9 = {
        method: David_0x3f7a06,
        params: {}
      };
      _0x47cda9.params.content = _0x342de0;
      _0x47cda9.params.appName = David_0x3f7a06;
      _0x47cda9.params.uuid = David_0x83d712;
      David_0x66599a[_0x272924].send(JSON.stringify(_0x47cda9), _0x7b8712 => {
        if (_0x7b8712) {
          _0x893c2e(_0x7b8712);
        }
      });
    } else {
      _0x19703f(David_0x458808(_0x272924, _0x342de0));
      David_0x66599a[_0x272924].removeListener("message", _0x379df9);
    }
  });
}
function David_0x458808(_0x9a32f8, _0x5df75d) {
  return new Promise((_0x14f310, _0x810613) => {
    const _0x4ece9a = David_0x568686 + "/sign/wkllq/six";
    const _0x44be0b = {
      content: _0x5df75d,
      appName: David_0x3f7a06,
      uuid: David_0x83d712
    };
    const _0x55969e = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1b3351 = {
      url: _0x4ece9a,
      headers: _0x55969e,
      body: JSON.stringify(_0x44be0b)
    };
    David_0x1fae29.post(_0x1b3351, async (_0x5530f6, _0x2236fc, _0x2d00f9) => {
      const _0x4a70a0 = _0x2d00f9.replace(/\"/g, "");
      David_0x25a3ed[_0x9a32f8] = _0x4a70a0;
      _0x14f310();
    });
  });
}
function David_0x52e58e(_0x443485, _0x3b9d3b, _0x5d301d) {
  const _0x9cbee8 = David_0x331b14(_0x443485);
  _0x3b9d3b.forEach(_0x3a28d0 => {
    delete _0x9cbee8[_0x3a28d0];
  });
  Object.assign(_0x9cbee8, _0x5d301d);
  const _0x4068eb = Object.keys(_0x9cbee8).sort();
  const _0x2bdd99 = _0x4068eb.map(_0x27f481 => _0x27f481 + "=" + _0x9cbee8[_0x27f481]).join("&");
  return _0x2bdd99;
}
function David_0x331b14(_0x92666f) {
  _0x92666f = _0x92666f.replace(/\"/g, "");
  var _0x537167;
  var _0x13f6f0 = {};
  var _0x24d60c = _0x92666f.slice(_0x92666f.indexOf("?") + 1).split("&");
  for (var _0x542ed4 = 0; _0x542ed4 < _0x24d60c.length; _0x542ed4++) {
    if (_0x24d60c[_0x542ed4] == "") {
      continue;
    }
    _0x537167 = _0x24d60c[_0x542ed4].split("=");
    _0x13f6f0[_0x537167[0]] = _0x537167[1];
  }
  return _0x13f6f0;
}
function David_0x3c1393(_0x114791) {
  const _0x4fdc91 = _0x114791.replace(/[{} ]/g, "");
  const _0x4bf9ba = _0x4fdc91.split(",");
  const _0x36b890 = {};
  _0x4bf9ba.forEach(_0x144c27 => {
    const _0x367b7e = _0x144c27.split(/=(.*)/);
    const [_0x3e06c2, _0x406b22] = _0x367b7e;
    _0x36b890[_0x3e06c2] = _0x406b22;
  });
  return _0x36b890;
}
function David_0x36eaa8(_0x2c6526) {
  let _0x3259ae = _0x2c6526.substr(_0x2c6526.indexOf("//") + 2);
  let _0x5cde07 = _0x3259ae.substr(0, _0x3259ae.indexOf("/"));
  let _0x32b335 = "";
  let _0x100ca1 = _0x5cde07.indexOf(":");
  if (_0x100ca1 > 0) {
    _0x32b335 = _0x5cde07.substr(0, _0x100ca1);
  } else {
    _0x32b335 = _0x5cde07;
  }
  return _0x32b335;
}
function David_0x12a384(_0x3c02f8, _0x128ee7) {
  var _0x676b53 = new Date(_0x3c02f8);
  var _0x192373 = new Date(_0x128ee7);
  var _0x5e6a77 = _0x192373 - _0x676b53;
  var _0x13e4a9 = Math.floor(_0x5e6a77 / 1000);
  return _0x13e4a9;
}
function David_0x2bfdb3(_0x4b5d7e, _0x48c3ed) {
  if (_0x4b5d7e.length * 2 <= _0x48c3ed) {
    return _0x4b5d7e;
  }
  var _0x4a6363 = 0;
  var _0x3456f8 = "";
  for (var _0x538613 = 0; _0x538613 < _0x4b5d7e.length; _0x538613++) {
    _0x3456f8 = _0x3456f8 + _0x4b5d7e.charAt(_0x538613);
    if (_0x4b5d7e.charCodeAt(_0x538613) > 128) {
      _0x4a6363 = _0x4a6363 + 2;
      if (_0x4a6363 >= _0x48c3ed) {
        return _0x3456f8.substring(0, _0x3456f8.length - 1) + "...";
      }
    } else {
      _0x4a6363 = _0x4a6363 + 1;
      if (_0x4a6363 >= _0x48c3ed) {
        return _0x3456f8.substring(0, _0x3456f8.length - 2) + "...";
      }
    }
  }
  return _0x3456f8;
}
function David_0x172436() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x4c0160(_0x4a9e3d) {
  try {
    if (typeof JSON.parse(_0x4a9e3d) == "object") {
      return true;
    }
  } catch (_0x2f6510) {
    console.log(_0x2f6510);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x518dbf(_0x28869c) {
  var _0x2faa78 = Object.keys(_0x28869c).map(function (_0x58de54) {
    return encodeURIComponent(_0x58de54) + "=" + encodeURIComponent(_0x28869c[_0x58de54]);
  }).join("&");
  return _0x2faa78;
}
function David_0x46e07a(_0x985a68) {
  var _0x4ada53 = String.fromCharCode(_0x985a68.charCodeAt(0) + _0x985a68.length);
  for (var _0x1bf9da = 1; _0x1bf9da < _0x985a68.length; _0x1bf9da++) {
    _0x4ada53 += String.fromCharCode(_0x985a68.charCodeAt(_0x1bf9da) + _0x985a68.charCodeAt(_0x1bf9da - 1));
  }
  return escape(_0x4ada53);
}
function David_0x195e72(_0x377791) {
  _0x377791 = unescape(_0x377791);
  var _0x7ab709 = String.fromCharCode(_0x377791.charCodeAt(0) - _0x377791.length);
  for (var _0x2480a1 = 1; _0x2480a1 < _0x377791.length; _0x2480a1++) {
    _0x7ab709 += String.fromCharCode(_0x377791.charCodeAt(_0x2480a1) - _0x7ab709.charCodeAt(_0x2480a1 - 1));
  }
  return _0x7ab709;
}
function David_0x2f0940(_0xcf8513, _0x389637) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0xcf8513 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x389637 - _0xcf8513 + 1) + _0xcf8513);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x4a96e8() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x15b0d6() {
  function _0x5d8599() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x5d8599() + _0x5d8599() + "-" + _0x5d8599() + "-" + _0x5d8599() + "-" + _0x5d8599() + "-" + _0x5d8599() + _0x5d8599() + _0x5d8599();
}
function David_0x522bd4(_0x271c4d) {
  if (_0x271c4d.length == 11) {
    let _0x2026b4 = _0x271c4d.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x2026b4;
  } else {
    return _0x271c4d;
  }
}
function David_0x31b6cb(_0x4046a8) {
  return new Promise((_0x87ca2b, _0x302ff1) => {
    const _0x29e254 = "https://v1.hitokoto.cn/?c=e";
    const _0x35e5fa = {
      accept: "application/json"
    };
    const _0x43ea1b = {
      url: _0x29e254,
      headers: _0x35e5fa
    };
    David_0x1fae29.get(_0x43ea1b, async (_0x37cade, _0x31b049, _0x23c44f) => {
      let _0x50fda7 = JSON.parse(_0x23c44f);
      let _0x5e2b6f = _0x50fda7.hitokoto;
      contents[_0x4046a8] = _0x5e2b6f + " " + _0x5e2b6f;
      _0x87ca2b();
    });
  });
}
function David_0x2fa8b7() {
  return new Promise((_0x83b37d, _0x4ca51b) => {
    const _0x541973 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x5e5c4e = {
      url: _0x541973
    };
    David_0x1fae29.get(_0x5e5c4e, async (_0x5dd93e, _0x4b9252, _0x368b5a) => {
      _0x83b37d(_0x368b5a);
    });
  });
}
function David_0x32949e() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x235b6c() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x2b2145() {
  if (David_0x52d1f3 == 1) {
    David_0x1fae29.msg(David_0x1fae29.name, "", David_0x1fae29.message);
  }
}
async function David_0x107822(_0x569994) {
  if (David_0x22b58e == 9 || David_0x22b58e == 12 || David_0x22b58e == 18) {
    if (David_0x52d1f3 == 1) {
      if (David_0x1fae29.isNode()) {
        await David_0x58010a.sendNotify(David_0x1fae29.name, _0x569994);
      } else {
        David_0x1fae29.msg(David_0x1fae29.name, "", _0x569994);
      }
    } else {
      David_0x1fae29.log(_0x569994);
    }
  }
}
async function David_0xa170b2(_0x3a1b7e, _0x327eee, _0x319e53) {
  return new Promise((_0x1406e7, _0x2b25aa) => {
    const _0x5d8d1e = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x3897f3 = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x327eee,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x319e53],
      verifyPay: false
    };
    const _0x414f33 = {
      "Content-Type": "application/json"
    };
    const _0x28b058 = {
      url: _0x5d8d1e,
      headers: _0x414f33,
      body: JSON.stringify(_0x3897f3)
    };
    David_0x1fae29.post(_0x28b058, async (_0x13f978, _0x4243d7, _0x3ae90e) => {
      _0x1406e7();
    });
  });
}
function David_0x44ca34(_0xea004e, _0x59a27d) {
  _0x59a27d = _0x59a27d || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x42d73c = "";
  for (let _0x312831 = 0; _0x312831 < _0xea004e; _0x312831++) {
    let _0x5b845e = Math.floor(Math.random() * _0x59a27d.length);
    _0x42d73c += _0x59a27d.substring(_0x5b845e, _0x5b845e + 1);
  }
  return _0x42d73c;
}
function David_0x30ddb3(_0x52d1dc) {
  function _0x4e3359(_0x1aac29, _0x59f6ec) {
    return _0x1aac29 << _0x59f6ec | _0x1aac29 >>> 32 - _0x59f6ec;
  }
  function _0x5d4a7e(_0x3f81b9, _0x334cdc) {
    var _0x520d17, _0x3e9cbe, _0x5e3782, _0x3f367f, _0xdebce8;
    _0x5e3782 = 2147483648 & _0x3f81b9;
    _0x3f367f = 2147483648 & _0x334cdc;
    _0x520d17 = 1073741824 & _0x3f81b9;
    _0x3e9cbe = 1073741824 & _0x334cdc;
    _0xdebce8 = (1073741823 & _0x3f81b9) + (1073741823 & _0x334cdc);
    return _0x520d17 & _0x3e9cbe ? 2147483648 ^ _0xdebce8 ^ _0x5e3782 ^ _0x3f367f : _0x520d17 | _0x3e9cbe ? 1073741824 & _0xdebce8 ? 3221225472 ^ _0xdebce8 ^ _0x5e3782 ^ _0x3f367f : 1073741824 ^ _0xdebce8 ^ _0x5e3782 ^ _0x3f367f : _0xdebce8 ^ _0x5e3782 ^ _0x3f367f;
  }
  function _0xbd70ef(_0x16c3d9, _0x3f8003, _0x29ab4c) {
    return _0x16c3d9 & _0x3f8003 | ~_0x16c3d9 & _0x29ab4c;
  }
  function _0x3742c1(_0x2067af, _0x27a035, _0x3f2eac) {
    return _0x2067af & _0x3f2eac | _0x27a035 & ~_0x3f2eac;
  }
  function _0xb3a1d6(_0x17b6bb, _0x590cbd, _0x1996ed) {
    return _0x17b6bb ^ _0x590cbd ^ _0x1996ed;
  }
  function _0x1d0bf0(_0x42988c, _0x1c21ef, _0x383298) {
    return _0x1c21ef ^ (_0x42988c | ~_0x383298);
  }
  function _0x399891(_0x40021b, _0xbd0a86, _0x5c8d8b, _0x212077, _0x3a484d, _0x274f1e, _0x3426d1) {
    _0x40021b = _0x5d4a7e(_0x40021b, _0x5d4a7e(_0x5d4a7e(_0xbd70ef(_0xbd0a86, _0x5c8d8b, _0x212077), _0x3a484d), _0x3426d1));
    return _0x5d4a7e(_0x4e3359(_0x40021b, _0x274f1e), _0xbd0a86);
  }
  function _0x7033a9(_0x8689f4, _0x2116a6, _0x48e8e9, _0x2e151d, _0x3aced0, _0x257752, _0x25f889) {
    _0x8689f4 = _0x5d4a7e(_0x8689f4, _0x5d4a7e(_0x5d4a7e(_0x3742c1(_0x2116a6, _0x48e8e9, _0x2e151d), _0x3aced0), _0x25f889));
    return _0x5d4a7e(_0x4e3359(_0x8689f4, _0x257752), _0x2116a6);
  }
  function _0x517bf0(_0x2765cc, _0x138fb0, _0x3ce3be, _0x2f5284, _0x48a4d1, _0x3be85b, _0x30c9c1) {
    _0x2765cc = _0x5d4a7e(_0x2765cc, _0x5d4a7e(_0x5d4a7e(_0xb3a1d6(_0x138fb0, _0x3ce3be, _0x2f5284), _0x48a4d1), _0x30c9c1));
    return _0x5d4a7e(_0x4e3359(_0x2765cc, _0x3be85b), _0x138fb0);
  }
  function _0x19494f(_0x171b69, _0x1a3bea, _0x14bbf0, _0xee232d, _0xaa1a6b, _0x437c78, _0x17d565) {
    _0x171b69 = _0x5d4a7e(_0x171b69, _0x5d4a7e(_0x5d4a7e(_0x1d0bf0(_0x1a3bea, _0x14bbf0, _0xee232d), _0xaa1a6b), _0x17d565));
    return _0x5d4a7e(_0x4e3359(_0x171b69, _0x437c78), _0x1a3bea);
  }
  function _0xb915cb(_0x18c0c0) {
    for (var _0x1fb5f8, _0x23356c = _0x18c0c0.length, _0x32f129 = _0x23356c + 8, _0x242eb1 = (_0x32f129 - _0x32f129 % 64) / 64, _0x2e7221 = 16 * (_0x242eb1 + 1), _0x4c7de3 = new Array(_0x2e7221 - 1), _0x50ec55 = 0, _0x1623a9 = 0; _0x23356c > _0x1623a9;) {
      _0x1fb5f8 = (_0x1623a9 - _0x1623a9 % 4) / 4;
      _0x50ec55 = _0x1623a9 % 4 * 8;
      _0x4c7de3[_0x1fb5f8] = _0x4c7de3[_0x1fb5f8] | _0x18c0c0.charCodeAt(_0x1623a9) << _0x50ec55;
      _0x1623a9++;
    }
    _0x1fb5f8 = (_0x1623a9 - _0x1623a9 % 4) / 4;
    _0x50ec55 = _0x1623a9 % 4 * 8;
    _0x4c7de3[_0x1fb5f8] = _0x4c7de3[_0x1fb5f8] | 128 << _0x50ec55;
    _0x4c7de3[_0x2e7221 - 2] = _0x23356c << 3;
    _0x4c7de3[_0x2e7221 - 1] = _0x23356c >>> 29;
    return _0x4c7de3;
  }
  function _0x2300fc(_0x255a7d) {
    var _0x45b636,
      _0x70e397,
      _0x4f43b6 = "",
      _0x4d197e = "";
    for (_0x70e397 = 0; 3 >= _0x70e397; _0x70e397++) {
      _0x45b636 = _0x255a7d >>> 8 * _0x70e397 & 255;
      _0x4d197e = "0" + _0x45b636.toString(16);
      _0x4f43b6 += _0x4d197e.substr(_0x4d197e.length - 2, 2);
    }
    return _0x4f43b6;
  }
  function _0x46a9f0(_0x292606) {
    _0x292606 = _0x292606.replace(/\r\n/g, "\n");
    for (var _0x58af9b = "", _0x3d9181 = 0; _0x3d9181 < _0x292606.length; _0x3d9181++) {
      var _0x120665 = _0x292606.charCodeAt(_0x3d9181);
      128 > _0x120665 ? _0x58af9b += String.fromCharCode(_0x120665) : _0x120665 > 127 && 2048 > _0x120665 ? (_0x58af9b += String.fromCharCode(_0x120665 >> 6 | 192), _0x58af9b += String.fromCharCode(63 & _0x120665 | 128)) : (_0x58af9b += String.fromCharCode(_0x120665 >> 12 | 224), _0x58af9b += String.fromCharCode(_0x120665 >> 6 & 63 | 128), _0x58af9b += String.fromCharCode(63 & _0x120665 | 128));
    }
    return _0x58af9b;
  }
  var _0x2a54e2,
    _0x14c101,
    _0x2d4ffd,
    _0x185254,
    _0x11d8f0,
    _0x5d8a97,
    _0x408031,
    _0x1c72f5,
    _0xad3b14,
    _0x4aa8d7 = [],
    _0x45df18 = 7,
    _0x4354f9 = 12,
    _0x26a5b1 = 17,
    _0x389bdb = 22,
    _0x37063d = 5,
    _0x51be5f = 9,
    _0x241fd4 = 14,
    _0x1c5a2d = 20,
    _0x3edcb1 = 4,
    _0x1bf85f = 11,
    _0x1e739f = 16,
    _0x5cae42 = 23,
    _0x37861e = 6,
    _0x20823a = 10,
    _0x406bca = 15,
    _0x43245e = 21;
  for (_0x52d1dc = _0x46a9f0(_0x52d1dc), _0x4aa8d7 = _0xb915cb(_0x52d1dc), _0x5d8a97 = 1732584193, _0x408031 = 4023233417, _0x1c72f5 = 2562383102, _0xad3b14 = 271733878, _0x2a54e2 = 0; _0x2a54e2 < _0x4aa8d7.length; _0x2a54e2 += 16) {
    _0x14c101 = _0x5d8a97;
    _0x2d4ffd = _0x408031;
    _0x185254 = _0x1c72f5;
    _0x11d8f0 = _0xad3b14;
    _0x5d8a97 = _0x399891(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 0], _0x45df18, 3614090360);
    _0xad3b14 = _0x399891(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 1], _0x4354f9, 3905402710);
    _0x1c72f5 = _0x399891(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 2], _0x26a5b1, 606105819);
    _0x408031 = _0x399891(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 3], _0x389bdb, 3250441966);
    _0x5d8a97 = _0x399891(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 4], _0x45df18, 4118548399);
    _0xad3b14 = _0x399891(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 5], _0x4354f9, 1200080426);
    _0x1c72f5 = _0x399891(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 6], _0x26a5b1, 2821735955);
    _0x408031 = _0x399891(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 7], _0x389bdb, 4249261313);
    _0x5d8a97 = _0x399891(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 8], _0x45df18, 1770035416);
    _0xad3b14 = _0x399891(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 9], _0x4354f9, 2336552879);
    _0x1c72f5 = _0x399891(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 10], _0x26a5b1, 4294925233);
    _0x408031 = _0x399891(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 11], _0x389bdb, 2304563134);
    _0x5d8a97 = _0x399891(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 12], _0x45df18, 1804603682);
    _0xad3b14 = _0x399891(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 13], _0x4354f9, 4254626195);
    _0x1c72f5 = _0x399891(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 14], _0x26a5b1, 2792965006);
    _0x408031 = _0x399891(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 15], _0x389bdb, 1236535329);
    _0x5d8a97 = _0x7033a9(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 1], _0x37063d, 4129170786);
    _0xad3b14 = _0x7033a9(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 6], _0x51be5f, 3225465664);
    _0x1c72f5 = _0x7033a9(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 11], _0x241fd4, 643717713);
    _0x408031 = _0x7033a9(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 0], _0x1c5a2d, 3921069994);
    _0x5d8a97 = _0x7033a9(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 5], _0x37063d, 3593408605);
    _0xad3b14 = _0x7033a9(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 10], _0x51be5f, 38016083);
    _0x1c72f5 = _0x7033a9(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 15], _0x241fd4, 3634488961);
    _0x408031 = _0x7033a9(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 4], _0x1c5a2d, 3889429448);
    _0x5d8a97 = _0x7033a9(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 9], _0x37063d, 568446438);
    _0xad3b14 = _0x7033a9(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 14], _0x51be5f, 3275163606);
    _0x1c72f5 = _0x7033a9(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 3], _0x241fd4, 4107603335);
    _0x408031 = _0x7033a9(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 8], _0x1c5a2d, 1163531501);
    _0x5d8a97 = _0x7033a9(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 13], _0x37063d, 2850285829);
    _0xad3b14 = _0x7033a9(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 2], _0x51be5f, 4243563512);
    _0x1c72f5 = _0x7033a9(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 7], _0x241fd4, 1735328473);
    _0x408031 = _0x7033a9(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 12], _0x1c5a2d, 2368359562);
    _0x5d8a97 = _0x517bf0(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 5], _0x3edcb1, 4294588738);
    _0xad3b14 = _0x517bf0(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 8], _0x1bf85f, 2272392833);
    _0x1c72f5 = _0x517bf0(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 11], _0x1e739f, 1839030562);
    _0x408031 = _0x517bf0(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 14], _0x5cae42, 4259657740);
    _0x5d8a97 = _0x517bf0(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 1], _0x3edcb1, 2763975236);
    _0xad3b14 = _0x517bf0(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 4], _0x1bf85f, 1272893353);
    _0x1c72f5 = _0x517bf0(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 7], _0x1e739f, 4139469664);
    _0x408031 = _0x517bf0(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 10], _0x5cae42, 3200236656);
    _0x5d8a97 = _0x517bf0(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 13], _0x3edcb1, 681279174);
    _0xad3b14 = _0x517bf0(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 0], _0x1bf85f, 3936430074);
    _0x1c72f5 = _0x517bf0(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 3], _0x1e739f, 3572445317);
    _0x408031 = _0x517bf0(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 6], _0x5cae42, 76029189);
    _0x5d8a97 = _0x517bf0(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 9], _0x3edcb1, 3654602809);
    _0xad3b14 = _0x517bf0(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 12], _0x1bf85f, 3873151461);
    _0x1c72f5 = _0x517bf0(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 15], _0x1e739f, 530742520);
    _0x408031 = _0x517bf0(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 2], _0x5cae42, 3299628645);
    _0x5d8a97 = _0x19494f(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 0], _0x37861e, 4096336452);
    _0xad3b14 = _0x19494f(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 7], _0x20823a, 1126891415);
    _0x1c72f5 = _0x19494f(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 14], _0x406bca, 2878612391);
    _0x408031 = _0x19494f(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 5], _0x43245e, 4237533241);
    _0x5d8a97 = _0x19494f(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 12], _0x37861e, 1700485571);
    _0xad3b14 = _0x19494f(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 3], _0x20823a, 2399980690);
    _0x1c72f5 = _0x19494f(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 10], _0x406bca, 4293915773);
    _0x408031 = _0x19494f(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 1], _0x43245e, 2240044497);
    _0x5d8a97 = _0x19494f(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 8], _0x37861e, 1873313359);
    _0xad3b14 = _0x19494f(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 15], _0x20823a, 4264355552);
    _0x1c72f5 = _0x19494f(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 6], _0x406bca, 2734768916);
    _0x408031 = _0x19494f(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 13], _0x43245e, 1309151649);
    _0x5d8a97 = _0x19494f(_0x5d8a97, _0x408031, _0x1c72f5, _0xad3b14, _0x4aa8d7[_0x2a54e2 + 4], _0x37861e, 4149444226);
    _0xad3b14 = _0x19494f(_0xad3b14, _0x5d8a97, _0x408031, _0x1c72f5, _0x4aa8d7[_0x2a54e2 + 11], _0x20823a, 3174756917);
    _0x1c72f5 = _0x19494f(_0x1c72f5, _0xad3b14, _0x5d8a97, _0x408031, _0x4aa8d7[_0x2a54e2 + 2], _0x406bca, 718787259);
    _0x408031 = _0x19494f(_0x408031, _0x1c72f5, _0xad3b14, _0x5d8a97, _0x4aa8d7[_0x2a54e2 + 9], _0x43245e, 3951481745);
    _0x5d8a97 = _0x5d4a7e(_0x5d8a97, _0x14c101);
    _0x408031 = _0x5d4a7e(_0x408031, _0x2d4ffd);
    _0x1c72f5 = _0x5d4a7e(_0x1c72f5, _0x185254);
    _0xad3b14 = _0x5d4a7e(_0xad3b14, _0x11d8f0);
  }
  var _0x1c1a75 = _0x2300fc(_0x5d8a97) + _0x2300fc(_0x408031) + _0x2300fc(_0x1c72f5) + _0x2300fc(_0xad3b14);
  return _0x1c1a75.toLowerCase();
}
function David_0x42e510(_0xdfaa85) {
  var _0x1d0e7d = 8;
  var _0x4e9500 = 0;
  function _0x373c8a(_0xdc7d95, _0x388777) {
    var _0x46c804 = (_0xdc7d95 & 65535) + (_0x388777 & 65535);
    var _0x42f726 = (_0xdc7d95 >> 16) + (_0x388777 >> 16) + (_0x46c804 >> 16);
    return _0x42f726 << 16 | _0x46c804 & 65535;
  }
  function _0x2e6196(_0x35819b, _0x27b823) {
    return _0x35819b >>> _0x27b823 | _0x35819b << 32 - _0x27b823;
  }
  function _0x5a8e31(_0x3028c3, _0xe2b614) {
    return _0x3028c3 >>> _0xe2b614;
  }
  function _0x49b84e(_0x21a446, _0x5da4fe, _0x882f5e) {
    return _0x21a446 & _0x5da4fe ^ ~_0x21a446 & _0x882f5e;
  }
  function _0x219221(_0x453eb0, _0x4affd1, _0x4342a4) {
    return _0x453eb0 & _0x4affd1 ^ _0x453eb0 & _0x4342a4 ^ _0x4affd1 & _0x4342a4;
  }
  function _0x37d35b(_0x5e2e87) {
    return _0x2e6196(_0x5e2e87, 2) ^ _0x2e6196(_0x5e2e87, 13) ^ _0x2e6196(_0x5e2e87, 22);
  }
  function _0x5c7990(_0x418ced) {
    return _0x2e6196(_0x418ced, 6) ^ _0x2e6196(_0x418ced, 11) ^ _0x2e6196(_0x418ced, 25);
  }
  function _0x2bb0d8(_0x595a86) {
    return _0x2e6196(_0x595a86, 7) ^ _0x2e6196(_0x595a86, 18) ^ _0x5a8e31(_0x595a86, 3);
  }
  function _0xae35fb(_0x345762) {
    return _0x2e6196(_0x345762, 17) ^ _0x2e6196(_0x345762, 19) ^ _0x5a8e31(_0x345762, 10);
  }
  function _0x2d0a31(_0x7c0890, _0x172317) {
    var _0x709f15 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0xdc23a4 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x3fd8ea = new Array(64);
    var _0x292f0c, _0x529def, _0x335eec, _0x5e6056, _0x3cccf5, _0xeef98c, _0x2b5033, _0x5b3069;
    var _0x78b52b, _0x5c0d62;
    _0x7c0890[_0x172317 >> 5] |= 128 << 24 - _0x172317 % 32;
    _0x7c0890[(_0x172317 + 64 >> 9 << 4) + 15] = _0x172317;
    for (var _0x309abd = 0; _0x309abd < _0x7c0890.length; _0x309abd += 16) {
      _0x292f0c = _0xdc23a4[0];
      _0x529def = _0xdc23a4[1];
      _0x335eec = _0xdc23a4[2];
      _0x5e6056 = _0xdc23a4[3];
      _0x3cccf5 = _0xdc23a4[4];
      _0xeef98c = _0xdc23a4[5];
      _0x2b5033 = _0xdc23a4[6];
      _0x5b3069 = _0xdc23a4[7];
      for (var _0x55140b = 0; _0x55140b < 64; _0x55140b++) {
        if (_0x55140b < 16) {
          _0x3fd8ea[_0x55140b] = _0x7c0890[_0x55140b + _0x309abd];
        } else {
          _0x3fd8ea[_0x55140b] = _0x373c8a(_0x373c8a(_0x373c8a(_0xae35fb(_0x3fd8ea[_0x55140b - 2]), _0x3fd8ea[_0x55140b - 7]), _0x2bb0d8(_0x3fd8ea[_0x55140b - 15])), _0x3fd8ea[_0x55140b - 16]);
        }
        _0x78b52b = _0x373c8a(_0x373c8a(_0x373c8a(_0x373c8a(_0x5b3069, _0x5c7990(_0x3cccf5)), _0x49b84e(_0x3cccf5, _0xeef98c, _0x2b5033)), _0x709f15[_0x55140b]), _0x3fd8ea[_0x55140b]);
        _0x5c0d62 = _0x373c8a(_0x37d35b(_0x292f0c), _0x219221(_0x292f0c, _0x529def, _0x335eec));
        _0x5b3069 = _0x2b5033;
        _0x2b5033 = _0xeef98c;
        _0xeef98c = _0x3cccf5;
        _0x3cccf5 = _0x373c8a(_0x5e6056, _0x78b52b);
        _0x5e6056 = _0x335eec;
        _0x335eec = _0x529def;
        _0x529def = _0x292f0c;
        _0x292f0c = _0x373c8a(_0x78b52b, _0x5c0d62);
      }
      _0xdc23a4[0] = _0x373c8a(_0x292f0c, _0xdc23a4[0]);
      _0xdc23a4[1] = _0x373c8a(_0x529def, _0xdc23a4[1]);
      _0xdc23a4[2] = _0x373c8a(_0x335eec, _0xdc23a4[2]);
      _0xdc23a4[3] = _0x373c8a(_0x5e6056, _0xdc23a4[3]);
      _0xdc23a4[4] = _0x373c8a(_0x3cccf5, _0xdc23a4[4]);
      _0xdc23a4[5] = _0x373c8a(_0xeef98c, _0xdc23a4[5]);
      _0xdc23a4[6] = _0x373c8a(_0x2b5033, _0xdc23a4[6]);
      _0xdc23a4[7] = _0x373c8a(_0x5b3069, _0xdc23a4[7]);
    }
    return _0xdc23a4;
  }
  function _0x56f6eb(_0x89a207) {
    var _0x1e2301 = Array();
    var _0xd29b42 = (1 << _0x1d0e7d) - 1;
    for (var _0x5961f3 = 0; _0x5961f3 < _0x89a207.length * _0x1d0e7d; _0x5961f3 += _0x1d0e7d) {
      _0x1e2301[_0x5961f3 >> 5] |= (_0x89a207.charCodeAt(_0x5961f3 / _0x1d0e7d) & _0xd29b42) << 24 - _0x5961f3 % 32;
    }
    return _0x1e2301;
  }
  function _0x544995(_0x34a206) {
    _0x34a206 = _0x34a206.replace(/\r\n/g, "\n");
    var _0x139fff = "";
    for (var _0x3e33d0 = 0; _0x3e33d0 < _0x34a206.length; _0x3e33d0++) {
      var _0x57a0cb = _0x34a206.charCodeAt(_0x3e33d0);
      if (_0x57a0cb < 128) {
        _0x139fff += String.fromCharCode(_0x57a0cb);
      } else {
        if (_0x57a0cb > 127 && _0x57a0cb < 2048) {
          _0x139fff += String.fromCharCode(_0x57a0cb >> 6 | 192);
          _0x139fff += String.fromCharCode(_0x57a0cb & 63 | 128);
        } else {
          _0x139fff += String.fromCharCode(_0x57a0cb >> 12 | 224);
          _0x139fff += String.fromCharCode(_0x57a0cb >> 6 & 63 | 128);
          _0x139fff += String.fromCharCode(_0x57a0cb & 63 | 128);
        }
      }
    }
    return _0x139fff;
  }
  function _0x3e69ff(_0x13d6e4) {
    var _0xe4649a = _0x4e9500 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x48c96a = "";
    for (var _0x29ef60 = 0; _0x29ef60 < _0x13d6e4.length * 4; _0x29ef60++) {
      _0x48c96a += _0xe4649a.charAt(_0x13d6e4[_0x29ef60 >> 2] >> (3 - _0x29ef60 % 4) * 8 + 4 & 15) + _0xe4649a.charAt(_0x13d6e4[_0x29ef60 >> 2] >> (3 - _0x29ef60 % 4) * 8 & 15);
    }
    return _0x48c96a;
  }
  _0xdfaa85 = _0x544995(_0xdfaa85);
  return _0x3e69ff(_0x2d0a31(_0x56f6eb(_0xdfaa85), _0xdfaa85.length * _0x1d0e7d));
}
function David_0x4c8c94(_0x43dc6b) {
  function _0x9044d5(_0x3ae1fe, _0xbe7443) {
    var _0x354c01 = _0x3ae1fe << _0xbe7443 | _0x3ae1fe >>> 32 - _0xbe7443;
    return _0x354c01;
  }
  function _0x200752(_0x34f026) {
    var _0x5295a0 = "";
    var _0x5ebab0;
    var _0xcd0e74;
    var _0x3516cc;
    for (_0x5ebab0 = 0; _0x5ebab0 <= 6; _0x5ebab0 += 2) {
      _0xcd0e74 = _0x34f026 >>> _0x5ebab0 * 4 + 4 & 15;
      _0x3516cc = _0x34f026 >>> _0x5ebab0 * 4 & 15;
      _0x5295a0 += _0xcd0e74.toString(16) + _0x3516cc.toString(16);
    }
    return _0x5295a0;
  }
  function _0x3d98ac(_0x5e54a3) {
    var _0x32b504 = "";
    var _0x3f26a6;
    var _0x3807af;
    for (_0x3f26a6 = 7; _0x3f26a6 >= 0; _0x3f26a6--) {
      _0x3807af = _0x5e54a3 >>> _0x3f26a6 * 4 & 15;
      _0x32b504 += _0x3807af.toString(16);
    }
    return _0x32b504;
  }
  function _0x5df621(_0xe9f313) {
    _0xe9f313 = _0xe9f313.replace(/\r\n/g, "\n");
    var _0xa86bb6 = "";
    for (var _0x4c8a46 = 0; _0x4c8a46 < _0xe9f313.length; _0x4c8a46++) {
      var _0x5a7801 = _0xe9f313.charCodeAt(_0x4c8a46);
      if (_0x5a7801 < 128) {
        _0xa86bb6 += String.fromCharCode(_0x5a7801);
      } else {
        if (_0x5a7801 > 127 && _0x5a7801 < 2048) {
          _0xa86bb6 += String.fromCharCode(_0x5a7801 >> 6 | 192);
          _0xa86bb6 += String.fromCharCode(_0x5a7801 & 63 | 128);
        } else {
          _0xa86bb6 += String.fromCharCode(_0x5a7801 >> 12 | 224);
          _0xa86bb6 += String.fromCharCode(_0x5a7801 >> 6 & 63 | 128);
          _0xa86bb6 += String.fromCharCode(_0x5a7801 & 63 | 128);
        }
      }
    }
    return _0xa86bb6;
  }
  var _0x579143;
  var _0x31cef3, _0x354c25;
  var _0x18299e = new Array(80);
  var _0x376c58 = 1732584193;
  var _0x307b8c = 4023233417;
  var _0x2229c1 = 2562383102;
  var _0x377d3c = 271733878;
  var _0x31aae8 = 3285377520;
  var _0x30fe8b, _0x36e2c9, _0x56d207, _0x27ae31, _0xe2951d;
  _0x43dc6b = _0x5df621(_0x43dc6b);
  var _0xed65dd = _0x43dc6b.length;
  var _0x52a6cc = new Array();
  for (_0x31cef3 = 0; _0x31cef3 < _0xed65dd - 3; _0x31cef3 += 4) {
    _0x354c25 = _0x43dc6b.charCodeAt(_0x31cef3) << 24 | _0x43dc6b.charCodeAt(_0x31cef3 + 1 < 10 ? "0" + (_0x31cef3 + 1) : _0x31cef3 + 1) << 16 | _0x43dc6b.charCodeAt(_0x31cef3 + 2) << 8 | _0x43dc6b.charCodeAt(_0x31cef3 + 3);
    _0x52a6cc.push(_0x354c25);
  }
  switch (_0xed65dd % 4) {
    case 0:
      _0x31cef3 = 2147483648;
      break;
    case 1:
      _0x31cef3 = _0x43dc6b.charCodeAt(_0xed65dd - 1) << 24 | 8388608;
      break;
    case 2:
      _0x31cef3 = _0x43dc6b.charCodeAt(_0xed65dd - 2) << 24 | _0x43dc6b.charCodeAt(_0xed65dd - 1) << 16 | 32768;
      break;
    case 3:
      _0x31cef3 = _0x43dc6b.charCodeAt(_0xed65dd - 3) << 24 | _0x43dc6b.charCodeAt(_0xed65dd - 2) << 16 | _0x43dc6b.charCodeAt(_0xed65dd - 1) << 8 | 128;
      break;
  }
  _0x52a6cc.push(_0x31cef3);
  while (_0x52a6cc.length % 16 != 14) {
    _0x52a6cc.push(0);
  }
  _0x52a6cc.push(_0xed65dd >>> 29);
  _0x52a6cc.push(_0xed65dd << 3 & 4294967295);
  for (_0x579143 = 0; _0x579143 < _0x52a6cc.length; _0x579143 += 16) {
    for (_0x31cef3 = 0; _0x31cef3 < 16; _0x31cef3++) {
      _0x18299e[_0x31cef3] = _0x52a6cc[_0x579143 + _0x31cef3];
    }
    for (_0x31cef3 = 16; _0x31cef3 <= 79; _0x31cef3++) {
      _0x18299e[_0x31cef3] = _0x9044d5(_0x18299e[_0x31cef3 - 3] ^ _0x18299e[_0x31cef3 - 8] ^ _0x18299e[_0x31cef3 - 14] ^ _0x18299e[_0x31cef3 - 16], 1);
    }
    _0x30fe8b = _0x376c58;
    _0x36e2c9 = _0x307b8c;
    _0x56d207 = _0x2229c1;
    _0x27ae31 = _0x377d3c;
    _0xe2951d = _0x31aae8;
    for (_0x31cef3 = 0; _0x31cef3 <= 19; _0x31cef3++) {
      _0x2246d5 = _0x9044d5(_0x30fe8b, 5) + (_0x36e2c9 & _0x56d207 | ~_0x36e2c9 & _0x27ae31) + _0xe2951d + _0x18299e[_0x31cef3] + 1518500249 & 4294967295;
      _0xe2951d = _0x27ae31;
      _0x27ae31 = _0x56d207;
      _0x56d207 = _0x9044d5(_0x36e2c9, 30);
      _0x36e2c9 = _0x30fe8b;
      _0x30fe8b = _0x2246d5;
    }
    for (_0x31cef3 = 20; _0x31cef3 <= 39; _0x31cef3++) {
      _0x2246d5 = _0x9044d5(_0x30fe8b, 5) + (_0x36e2c9 ^ _0x56d207 ^ _0x27ae31) + _0xe2951d + _0x18299e[_0x31cef3] + 1859775393 & 4294967295;
      _0xe2951d = _0x27ae31;
      _0x27ae31 = _0x56d207;
      _0x56d207 = _0x9044d5(_0x36e2c9, 30);
      _0x36e2c9 = _0x30fe8b;
      _0x30fe8b = _0x2246d5;
    }
    for (_0x31cef3 = 40; _0x31cef3 <= 59; _0x31cef3++) {
      _0x2246d5 = _0x9044d5(_0x30fe8b, 5) + (_0x36e2c9 & _0x56d207 | _0x36e2c9 & _0x27ae31 | _0x56d207 & _0x27ae31) + _0xe2951d + _0x18299e[_0x31cef3] + 2400959708 & 4294967295;
      _0xe2951d = _0x27ae31;
      _0x27ae31 = _0x56d207;
      _0x56d207 = _0x9044d5(_0x36e2c9, 30);
      _0x36e2c9 = _0x30fe8b;
      _0x30fe8b = _0x2246d5;
    }
    for (_0x31cef3 = 60; _0x31cef3 <= 79; _0x31cef3++) {
      _0x2246d5 = _0x9044d5(_0x30fe8b, 5) + (_0x36e2c9 ^ _0x56d207 ^ _0x27ae31) + _0xe2951d + _0x18299e[_0x31cef3] + 3395469782 & 4294967295;
      _0xe2951d = _0x27ae31;
      _0x27ae31 = _0x56d207;
      _0x56d207 = _0x9044d5(_0x36e2c9, 30);
      _0x36e2c9 = _0x30fe8b;
      _0x30fe8b = _0x2246d5;
    }
    _0x376c58 = _0x376c58 + _0x30fe8b & 4294967295;
    _0x307b8c = _0x307b8c + _0x36e2c9 & 4294967295;
    _0x2229c1 = _0x2229c1 + _0x56d207 & 4294967295;
    _0x377d3c = _0x377d3c + _0x27ae31 & 4294967295;
    _0x31aae8 = _0x31aae8 + _0xe2951d & 4294967295;
  }
  var _0x2246d5 = _0x3d98ac(_0x376c58) + _0x3d98ac(_0x307b8c) + _0x3d98ac(_0x2229c1) + _0x3d98ac(_0x377d3c) + _0x3d98ac(_0x31aae8);
  return _0x2246d5.toLowerCase();
}
function David_0x18dc5c() {
  var _0x42eac7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1db404) {
    var _0x496fd6 = "";
    var _0x5f4c0c, _0x13fe25, _0x510273, _0x3395c2, _0x2f2c3c, _0x90d10a, _0x1ff9e2;
    var _0x311142 = 0;
    _0x1db404 = utf8Encode(_0x1db404);
    while (_0x311142 < _0x1db404.length) {
      _0x5f4c0c = _0x1db404.charCodeAt(_0x311142++);
      _0x13fe25 = _0x1db404.charCodeAt(_0x311142++);
      _0x510273 = _0x1db404.charCodeAt(_0x311142++);
      _0x3395c2 = _0x5f4c0c >> 2;
      _0x2f2c3c = (_0x5f4c0c & 3) << 4 | _0x13fe25 >> 4;
      _0x90d10a = (_0x13fe25 & 15) << 2 | _0x510273 >> 6;
      _0x1ff9e2 = _0x510273 & 63;
      if (isNaN(_0x13fe25)) {
        _0x90d10a = _0x1ff9e2 = 64;
      } else {
        if (isNaN(_0x510273)) {
          _0x1ff9e2 = 64;
        }
      }
      _0x496fd6 = _0x496fd6 + _0x42eac7.charAt(_0x3395c2) + _0x42eac7.charAt(_0x2f2c3c) + _0x42eac7.charAt(_0x90d10a) + _0x42eac7.charAt(_0x1ff9e2);
    }
    return _0x496fd6;
  };
  this.decode = function (_0x512842) {
    var _0x52e43f = "";
    var _0x5e5454, _0x41d18e, _0x4b73b0;
    var _0x5e5d88, _0x2ad70c, _0x578487, _0x467b54;
    var _0x457e66 = 0;
    _0x512842 = _0x512842.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x457e66 < _0x512842.length) {
      _0x5e5d88 = _0x42eac7.indexOf(_0x512842.charAt(_0x457e66++));
      _0x2ad70c = _0x42eac7.indexOf(_0x512842.charAt(_0x457e66++));
      _0x578487 = _0x42eac7.indexOf(_0x512842.charAt(_0x457e66++));
      _0x467b54 = _0x42eac7.indexOf(_0x512842.charAt(_0x457e66++));
      _0x5e5454 = _0x5e5d88 << 2 | _0x2ad70c >> 4;
      _0x41d18e = (_0x2ad70c & 15) << 4 | _0x578487 >> 2;
      _0x4b73b0 = (_0x578487 & 3) << 6 | _0x467b54;
      _0x52e43f = _0x52e43f + String.fromCharCode(_0x5e5454);
      if (_0x578487 !== 64) {
        _0x52e43f = _0x52e43f + String.fromCharCode(_0x41d18e);
      }
      if (_0x467b54 !== 64) {
        _0x52e43f = _0x52e43f + String.fromCharCode(_0x4b73b0);
      }
    }
    _0x52e43f = utf8Decode(_0x52e43f);
    return _0x52e43f;
  };
  utf8Encode = function (_0x3cdacf) {
    _0x3cdacf = _0x3cdacf.replace(/\r\n/g, "\n");
    var _0x228f93 = "";
    for (var _0xc3c30f = 0; _0xc3c30f < _0x3cdacf.length; _0xc3c30f++) {
      var _0x1bd984 = _0x3cdacf.charCodeAt(_0xc3c30f);
      if (_0x1bd984 < 128) {
        _0x228f93 += String.fromCharCode(_0x1bd984);
      } else {
        if (_0x1bd984 > 127 && _0x1bd984 < 2048) {
          _0x228f93 += String.fromCharCode(_0x1bd984 >> 6 | 192);
          _0x228f93 += String.fromCharCode(_0x1bd984 & 63 | 128);
        } else {
          _0x228f93 += String.fromCharCode(_0x1bd984 >> 12 | 224);
          _0x228f93 += String.fromCharCode(_0x1bd984 >> 6 & 63 | 128);
          _0x228f93 += String.fromCharCode(_0x1bd984 & 63 | 128);
        }
      }
    }
    return _0x228f93;
  };
  utf8Decode = function (_0xdafc9) {
    var _0x97de8e = "";
    var _0x42b9bb = 0;
    var _0x330984 = 0;
    var _0x6d4310 = 0;
    var _0x2ae34d = 0;
    while (_0x42b9bb < _0xdafc9.length) {
      _0x330984 = _0xdafc9.charCodeAt(_0x42b9bb);
      if (_0x330984 < 128) {
        _0x97de8e += String.fromCharCode(_0x330984);
        _0x42b9bb++;
      } else {
        if (_0x330984 > 191 && _0x330984 < 224) {
          _0x6d4310 = _0xdafc9.charCodeAt(_0x42b9bb + 1 < 10 ? "0" + (_0x42b9bb + 1) : _0x42b9bb + 1);
          _0x97de8e += String.fromCharCode((_0x330984 & 31) << 6 | _0x6d4310 & 63);
          _0x42b9bb += 2;
        } else {
          _0x6d4310 = _0xdafc9.charCodeAt(_0x42b9bb + 1 < 10 ? "0" + (_0x42b9bb + 1) : _0x42b9bb + 1);
          _0x2ae34d = _0xdafc9.charCodeAt(_0x42b9bb + 2);
          _0x97de8e += String.fromCharCode((_0x330984 & 15) << 12 | (_0x6d4310 & 63) << 6 | _0x2ae34d & 63);
          _0x42b9bb += 3;
        }
      }
    }
    return _0x97de8e;
  };
}
function David_0x4f7314(_0x367ae4, _0x495cd6) {
  class _0x26f23a {
    constructor(_0x2b73e0) {
      this.env = _0x2b73e0;
    }
    send(_0x3d176f, _0x5114fd = "GET") {
      _0x3d176f = typeof _0x3d176f === "string" ? {
        url: _0x3d176f
      } : _0x3d176f;
      let _0x24c9c5 = this.get;
      if (_0x5114fd === "POST") {
        _0x24c9c5 = this.post;
      }
      return new Promise((_0x329942, _0x116e9b) => {
        _0x24c9c5.call(this, _0x3d176f, (_0x3f2d95, _0x2fd44d, _0x55b48e) => {
          if (_0x3f2d95) {
            _0x116e9b(_0x3f2d95);
          } else {
            _0x329942(_0x2fd44d);
          }
        });
      });
    }
    get(_0x2616d6) {
      return this.send.call(this.env, _0x2616d6);
    }
    post(_0x503103) {
      return this.send.call(this.env, _0x503103, "POST");
    }
  }
  return new class {
    constructor(_0x36e427, _0x18c99f) {
      this.name = _0x36e427;
      this.http = new _0x26f23a(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x18c99f);
      const _0x3eb560 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x3eb560);
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
    toObj(_0x8a9df4, _0x3275e7 = null) {
      try {
        return JSON.parse(_0x8a9df4);
      } catch {
        return _0x3275e7;
      }
    }
    toStr(_0x16cb70, _0x15edd1 = null) {
      try {
        return JSON.stringify(_0x16cb70);
      } catch {
        return _0x15edd1;
      }
    }
    getjson(_0xff4e3a, _0x11b3f5) {
      let _0x12cfe3 = _0x11b3f5;
      const _0x16274f = this.getdata(_0xff4e3a);
      if (_0x16274f) {
        try {
          _0x12cfe3 = JSON.parse(this.getdata(_0xff4e3a));
        } catch {}
      }
      return _0x12cfe3;
    }
    setjson(_0x3ad0f9, _0x511327) {
      try {
        return this.setdata(JSON.stringify(_0x3ad0f9), _0x511327);
      } catch {
        return false;
      }
    }
    getScript(_0x3d0839) {
      return new Promise(_0x36a7e9 => {
        const _0xfa414f = {
          url: _0x3d0839
        };
        this.get(_0xfa414f, (_0x5d9ef4, _0x356518, _0x41812a) => _0x36a7e9(_0x41812a));
      });
    }
    runScript(_0x499513, _0x3591aa) {
      return new Promise(_0x56bc1d => {
        let _0x29c09f = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x29c09f = _0x29c09f ? _0x29c09f.replace(/\n/g, "").trim() : _0x29c09f;
        let _0x4e2615 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4e2615 = _0x4e2615 ? _0x4e2615 * 1 : 20;
        _0x4e2615 = _0x3591aa && _0x3591aa.timeout ? _0x3591aa.timeout : _0x4e2615;
        const [_0x14e3d4, _0x2e9b89] = _0x29c09f.split("@");
        const _0x41b23d = {
          script_text: _0x499513,
          mock_type: "cron",
          timeout: _0x4e2615
        };
        const _0xa1e975 = {
          "X-Key": _0x14e3d4,
          Accept: "*/*"
        };
        const _0x4ba3a4 = {
          url: "http: //" + _0x2e9b89 + "/v1/scripting/evaluate",
          body: _0x41b23d,
          headers: _0xa1e975
        };
        this.post(_0x4ba3a4, (_0x1847e3, _0xb33547, _0x184fad) => _0x56bc1d(_0x184fad));
      }).catch(_0x52930d => this.logErr(_0x52930d));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1dcbc6 = this.path.resolve(this.dataFile);
        const _0x450443 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x15cbfc = this.fs.existsSync(_0x1dcbc6);
        const _0x144b93 = !_0x15cbfc && this.fs.existsSync(_0x450443);
        if (_0x15cbfc || _0x144b93) {
          const _0x2a384a = _0x15cbfc ? _0x1dcbc6 : _0x450443;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2a384a));
          } catch (_0x97aa16) {
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
        const _0xb83dd0 = this.path.resolve(this.dataFile);
        const _0x539e34 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5d8ffd = this.fs.existsSync(_0xb83dd0);
        const _0x5f4a50 = !_0x5d8ffd && this.fs.existsSync(_0x539e34);
        const _0x1d4d2e = JSON.stringify(this.data);
        if (_0x5d8ffd) {
          this.fs.writeFileSync(_0xb83dd0, _0x1d4d2e);
        } else {
          if (_0x5f4a50) {
            this.fs.writeFileSync(_0x539e34, _0x1d4d2e);
          } else {
            this.fs.writeFileSync(_0xb83dd0, _0x1d4d2e);
          }
        }
      }
    }
    lodash_get(_0x3c71da, _0x34a4dd, _0x331755 = undefined) {
      const _0x5d077 = _0x34a4dd.replace(/[(d+)]/g, ".$1").split(".");
      let _0x7badf1 = _0x3c71da;
      for (const _0x296ff4 of _0x5d077) {
        _0x7badf1 = Object(_0x7badf1)[_0x296ff4];
        if (_0x7badf1 === undefined) {
          return _0x331755;
        }
      }
      return _0x7badf1;
    }
    lodash_set(_0x430b6a, _0x27ae6c, _0xbc7e78) {
      if (Object(_0x430b6a) !== _0x430b6a) {
        return _0x430b6a;
      }
      if (!Array.isArray(_0x27ae6c)) {
        _0x27ae6c = _0x27ae6c.toString().match(/[^.[]]+/g) || [];
      }
      _0x27ae6c.slice(0, -1).reduce((_0x365cc9, _0xd716e5, _0x51e2b9) => Object(_0x365cc9[_0xd716e5]) === _0x365cc9[_0xd716e5] ? _0x365cc9[_0xd716e5] : _0x365cc9[_0xd716e5] = Math.abs(_0x27ae6c[_0x51e2b9 + 1 < 10 ? "0" + (_0x51e2b9 + 1) : _0x51e2b9 + 1]) >> 0 === +_0x27ae6c[_0x51e2b9 + 1 < 10 ? "0" + (_0x51e2b9 + 1) : _0x51e2b9 + 1] ? [] : {}, _0x430b6a)[_0x27ae6c[_0x27ae6c.length - 1]] = _0xbc7e78;
      return _0x430b6a;
    }
    getdata(_0x59e8d9) {
      let _0x287cfe = this.getval(_0x59e8d9);
      if (/^@/.test(_0x59e8d9)) {
        const [, _0x1514df, _0x7ae381] = /^@(.*?).(.*?)$/.exec(_0x59e8d9);
        const _0x3b4ebe = _0x1514df ? this.getval(_0x1514df) : "";
        if (_0x3b4ebe) {
          try {
            const _0x5108d1 = JSON.parse(_0x3b4ebe);
            _0x287cfe = _0x5108d1 ? this.lodash_get(_0x5108d1, _0x7ae381, "") : _0x287cfe;
          } catch (_0x32452e) {
            _0x287cfe = "";
          }
        }
      }
      return _0x287cfe;
    }
    setdata(_0x37d6bf, _0x1289b9) {
      let _0x58460f = false;
      if (/^@/.test(_0x1289b9)) {
        const [, _0x5bc1d0, _0x256132] = /^@(.*?).(.*?)$/.exec(_0x1289b9);
        const _0x27824e = this.getval(_0x5bc1d0);
        const _0xd964ce = _0x5bc1d0 ? _0x27824e === "null" ? null : _0x27824e || "{}" : "{}";
        try {
          const _0x5b1cae = JSON.parse(_0xd964ce);
          this.lodash_set(_0x5b1cae, _0x256132, _0x37d6bf);
          _0x58460f = this.setval(JSON.stringify(_0x5b1cae), _0x5bc1d0);
        } catch (_0xab3143) {
          const _0x5ae30c = {};
          this.lodash_set(_0x5ae30c, _0x256132, _0x37d6bf);
          _0x58460f = this.setval(JSON.stringify(_0x5ae30c), _0x5bc1d0);
        }
      } else {
        _0x58460f = this.setval(_0x37d6bf, _0x1289b9);
      }
      return _0x58460f;
    }
    getval(_0x44ee23) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x44ee23);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x44ee23);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x44ee23];
          } else {
            return this.data && this.data[_0x44ee23] || null;
          }
        }
      }
    }
    setval(_0x51de34, _0x3f8477) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x51de34, _0x3f8477);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x51de34, _0x3f8477);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x3f8477] = _0x51de34;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x3f8477] || null;
          }
        }
      }
    }
    initGotEnv(_0x49fef6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x49fef6) {
        _0x49fef6.headers = _0x49fef6.headers ? _0x49fef6.headers : {};
        if (undefined === _0x49fef6.headers.Cookie && undefined === _0x49fef6.cookieJar) {
          _0x49fef6.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x155f91, _0x2e231f = () => {}) {
      if (_0x155f91.headers) {
        delete _0x155f91.headers["Content-Type"];
        delete _0x155f91.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x155f91.headers = _0x155f91.headers || {};
          const _0x22b641 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x155f91.headers, _0x22b641);
        }
        $httpClient.get(_0x155f91, (_0x900775, _0x3e5910, _0x6447d7) => {
          if (!_0x900775 && _0x3e5910) {
            _0x3e5910.body = _0x6447d7;
            _0x3e5910.statusCode = _0x3e5910.status;
          }
          _0x2e231f(_0x900775, _0x3e5910, _0x6447d7);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x155f91.opts = _0x155f91.opts || {};
            const _0x19e76f = {
              hints: false
            };
            Object.assign(_0x155f91.opts, _0x19e76f);
          }
          $task.fetch(_0x155f91).then(_0x4e7e53 => {
            const {
              statusCode: _0x1100a9,
              statusCode,
              headers,
              body
            } = _0x4e7e53;
            const _0x47dd1a = {
              status: _0x1100a9,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2e231f(null, _0x47dd1a, body);
          }, _0x596175 => _0x2e231f(_0x596175));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x155f91);
            this.got(_0x155f91).on("redirect", (_0x4f667c, _0x26e4d8) => {
              try {
                if (_0x4f667c.headers["set-cookie"]) {
                  const _0x1eadce = _0x4f667c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x1eadce) {
                    this.ckjar.setCookieSync(_0x1eadce, null);
                  }
                  _0x26e4d8.cookieJar = this.ckjar;
                }
              } catch (_0x4e0cf0) {
                this.logErr(_0x4e0cf0);
              }
            }).then(_0x4e67ed => {
              const {
                statusCode: _0x2efa96,
                statusCode,
                headers,
                body
              } = _0x4e67ed;
              const _0x374004 = {
                status: _0x2efa96,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2e231f(null, _0x374004, body);
            }, _0x2276bb => {
              const {
                message: _0x10cb2b,
                response: _0x20fc6c
              } = _0x2276bb;
              _0x2e231f(_0x10cb2b, _0x20fc6c, _0x20fc6c && _0x20fc6c.body);
            });
          }
        }
      }
    }
    post(_0x859d7a, _0x513827 = () => {}) {
      const _0x3560e2 = _0x859d7a.method ? _0x859d7a.method.toLocaleLowerCase() : "post";
      if (_0x859d7a.body && _0x859d7a.headers && !_0x859d7a.headers["Content-Type"]) {
        _0x859d7a.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x859d7a.headers) {
        delete _0x859d7a.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x859d7a.headers = _0x859d7a.headers || {};
          const _0x41f64f = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x859d7a.headers, _0x41f64f);
        }
        $httpClient[_0x3560e2](_0x859d7a, (_0x22ec48, _0x4ff9a7, _0x3d5508) => {
          if (!_0x22ec48 && _0x4ff9a7) {
            _0x4ff9a7.body = _0x3d5508;
            _0x4ff9a7.statusCode = _0x4ff9a7.status;
          }
          _0x513827(_0x22ec48, _0x4ff9a7, _0x3d5508);
        });
      } else {
        if (this.isQuanX()) {
          _0x859d7a.method = _0x3560e2;
          if (this.isNeedRewrite) {
            _0x859d7a.opts = _0x859d7a.opts || {};
            const _0x35a5b6 = {
              hints: false
            };
            Object.assign(_0x859d7a.opts, _0x35a5b6);
          }
          $task.fetch(_0x859d7a).then(_0xf490a7 => {
            const {
              statusCode: _0xae75f6,
              statusCode,
              headers,
              body
            } = _0xf490a7;
            const _0x1aada5 = {
              status: _0xae75f6,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x513827(null, _0x1aada5, body);
          }, _0x4c3348 => _0x513827(_0x4c3348));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x859d7a);
            const {
              url,
              ..._0x4cc4c1
            } = _0x859d7a;
            this.got[_0x3560e2](url, _0x4cc4c1).then(_0x5f19a4 => {
              const {
                statusCode: _0x345e8d,
                statusCode,
                headers,
                body
              } = _0x5f19a4;
              const _0x3c52ce = {
                status: _0x345e8d,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x513827(null, _0x3c52ce, body);
            }, _0x310bee => {
              const {
                message: _0x550bd7,
                response: _0x3844cd
              } = _0x310bee;
              _0x513827(_0x550bd7, _0x3844cd, _0x3844cd && _0x3844cd.body);
            });
          }
        }
      }
    }
    put(_0x3f9208, _0x29cda9 = () => {}) {
      const _0x32f0f4 = _0x3f9208.method ? _0x3f9208.method.toLocaleLowerCase() : "put";
      if (_0x3f9208.body && _0x3f9208.headers && !_0x3f9208.headers["Content-Type"]) {
        _0x3f9208.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x3f9208.headers) {
        delete _0x3f9208.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x3f9208.headers = _0x3f9208.headers || {};
          const _0x35c61e = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x3f9208.headers, _0x35c61e);
        }
        $httpClient[_0x32f0f4](_0x3f9208, (_0x3d19ad, _0x4b8d63, _0x4ec837) => {
          if (!_0x3d19ad && _0x4b8d63) {
            _0x4b8d63.body = _0x4ec837;
            _0x4b8d63.statusCode = _0x4b8d63.status;
          }
          _0x29cda9(_0x3d19ad, _0x4b8d63, _0x4ec837);
        });
      } else {
        if (this.isQuanX()) {
          _0x3f9208.method = _0x32f0f4;
          if (this.isNeedRewrite) {
            _0x3f9208.opts = _0x3f9208.opts || {};
            const _0x41c8fc = {
              hints: false
            };
            Object.assign(_0x3f9208.opts, _0x41c8fc);
          }
          $task.fetch(_0x3f9208).then(_0x175bd5 => {
            const {
              statusCode: _0x1c2658,
              statusCode,
              headers,
              body
            } = _0x175bd5;
            const _0x51a872 = {
              status: _0x1c2658,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x29cda9(null, _0x51a872, body);
          }, _0x19bb84 => _0x29cda9(_0x19bb84));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3f9208);
            const {
              url,
              ..._0x19c1bf
            } = _0x3f9208;
            this.got[_0x32f0f4](url, _0x19c1bf).then(_0x28d365 => {
              const {
                statusCode: _0x555c4b,
                statusCode,
                headers,
                body
              } = _0x28d365;
              const _0x52305a = {
                status: _0x555c4b,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x29cda9(null, _0x52305a, body);
            }, _0x4f2053 => {
              const {
                message: _0x255136,
                response: _0x2adf29
              } = _0x4f2053;
              _0x29cda9(_0x255136, _0x2adf29, _0x2adf29 && _0x2adf29.body);
            });
          }
        }
      }
    }
    time(_0x2f1496, _0x9fac0b = null) {
      const _0x23fcf8 = _0x9fac0b ? new Date(_0x9fac0b) : new Date();
      const _0x52775a = {
        "M+": _0x23fcf8.getMonth() + 1,
        "d+": _0x23fcf8.getDate(),
        "H+": _0x23fcf8.getHours(),
        "m+": _0x23fcf8.getMinutes(),
        "s+": _0x23fcf8.getSeconds(),
        "q+": Math.floor((_0x23fcf8.getMonth() + 3) / 3),
        S: _0x23fcf8.getMilliseconds()
      };
      if (/(y+)/.test(_0x2f1496)) {
        _0x2f1496 = _0x2f1496.replace(RegExp.$1, (_0x23fcf8.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x4fcc61 in _0x52775a) if (new RegExp("(" + _0x4fcc61 + ")").test(_0x2f1496)) {
        _0x2f1496 = _0x2f1496.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x52775a[_0x4fcc61] : ("00" + _0x52775a[_0x4fcc61]).substr(("" + _0x52775a[_0x4fcc61]).length));
      }
      return _0x2f1496;
    }
    msg(_0x26f2d0 = _0x367ae4, _0x46eff7 = "", _0x26a2fe = "", _0x509e28) {
      const _0x45f1c3 = _0xec21a => {
        if (!_0xec21a) {
          return _0xec21a;
        }
        if (typeof _0xec21a === "string") {
          if (this.isLoon()) {
            return _0xec21a;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0xec21a
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0xec21a
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0xec21a === "object") {
            if (this.isLoon()) {
              let _0x1d4773 = _0xec21a.openUrl || _0xec21a.url || _0xec21a["open-url"];
              let _0xe9dde3 = _0xec21a.mediaUrl || _0xec21a["media-url"];
              const _0x5410cc = {
                openUrl: _0x1d4773,
                mediaUrl: _0xe9dde3
              };
              return _0x5410cc;
            } else {
              if (this.isQuanX()) {
                let _0x380e01 = _0xec21a["open-url"] || _0xec21a.url || _0xec21a.openUrl;
                let _0x49154d = _0xec21a["media-url"] || _0xec21a.mediaUrl;
                const _0x597eba = {
                  "open-url": _0x380e01,
                  "media-url": _0x49154d
                };
                return _0x597eba;
              } else {
                if (this.isSurge()) {
                  let _0x14702b = _0xec21a.url || _0xec21a.openUrl || _0xec21a["open-url"];
                  const _0x1fe4a1 = {
                    url: _0x14702b
                  };
                  return _0x1fe4a1;
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
          $notification.post(_0x26f2d0, _0x46eff7, _0x26a2fe, _0x45f1c3(_0x509e28));
        } else {
          if (this.isQuanX()) {
            $notify(_0x26f2d0, _0x46eff7, _0x26a2fe, _0x45f1c3(_0x509e28));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x5d7f75 = ["", "==============📣系统通知📣=============="];
        _0x5d7f75.push(_0x26f2d0);
        _0x46eff7 ? _0x5d7f75.push(_0x46eff7) : "";
        _0x26a2fe ? _0x5d7f75.push(_0x26a2fe) : "";
        console.log(_0x5d7f75.join("\n"));
        this.logs = this.logs.concat(_0x5d7f75);
      }
    }
    log(..._0x36a723) {
      if (_0x36a723.length > 0) {
        this.logs = [...this.logs, ..._0x36a723];
      }
      console.log(_0x36a723.join(this.logSeparator));
    }
    logErr(_0x26df1c, _0x5082fc) {
      const _0x2730ab = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x2730ab) {
        this.log("", "❗️" + this.name + ", 错误!", _0x26df1c);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x26df1c.stack);
      }
    }
    wait(_0x413c1e) {
      return new Promise(_0x5a1d0d => setTimeout(_0x5a1d0d, _0x413c1e));
    }
    done(_0x1a51fe = {}) {
      const _0x336035 = new Date().getTime();
      const _0x596ebe = (_0x336035 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x596ebe + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x1a51fe);
      }
    }
  }(_0x367ae4, _0x495cd6);
}