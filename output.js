//Sun Jan 05 2025 01:40:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x42ec7f = new David_0x3008f4("枫以影视");
const David_0x2c4891 = "V1.0.8";
const David_0x2b887d = "fyysapp";
let David_0x56b14b = David_0x42ec7f.getjson(David_0x2b887d, []);
const David_0x2833eb = David_0x42ec7f.isNode() ? require("fs") : "";
const David_0x8f7aa7 = David_0x42ec7f.isNode() ? require("ws") : "";
const David_0x37982a = "david_cookies.js";
if (David_0x42ec7f.isNode() && !David_0x2833eb.existsSync(David_0x37982a)) {
  David_0x42ec7f.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x2833eb.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x349dfa => {});
}
const David_0x56e66a = David_0x42ec7f.isNode() ? require("http") : "";
const David_0x23fcb0 = David_0x42ec7f.isNode() ? require("./sendNotify") : "";
const David_0x312fc1 = David_0x42ec7f.isNode() ? require("./david_cookies") : "";
let David_0x2df921 = David_0x42ec7f.getdata("tguserid") || 1;
let David_0xc6fb27 = David_0x42ec7f.getdata("fyysactivecode") || 0;
let David_0x100b6b = David_0x42ec7f.getval("fyysuserck") || 1;
let David_0x22a8c3 = David_0x42ec7f.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x42ec7f.getval("apiHosts")) {
  David_0x22a8c3 = David_0x42ec7f.getval("apiHosts");
}
const David_0x9597b0 = 0;
let David_0x262662 = David_0x42ec7f.getval("tz") || "1";
var David_0x86d9d7 = "";
var David_0x2f6f1d = "";
let David_0x294599 = [];
let David_0x548242 = [];
let David_0x545131 = [];
let David_0x444ef8 = [];
let David_0x2b340b = [];
let David_0x48d8ba = [];
let David_0x56f3c0 = [];
let David_0x29adbd = [];
let David_0x16fd21 = [];
let David_0x9d7aeb = [];
let David_0x501cf4 = [];
let David_0x383f76 = [];
let David_0x5d89da = [];
let David_0xcf66f4 = "";
let David_0x4606a1 = "";
let David_0x2fbe40 = "";
let David_0x4b8cdf = "";
let David_0x2346b7 = "";
let David_0x16a4f9 = "";
let David_0x49380c = "";
let David_0x3509da = "";
let David_0x3d6d13 = 1;
let David_0x3bdb4f = 1;
let David_0x369759 = 1;
let David_0x46ae33 = 1;
let David_0x4248c7 = "";
let David_0x490aaa = "";
let David_0x452288 = 3;
let David_0xc00822 = "";
if (David_0x42ec7f.isNode()) {
  if (process.env.FYYSAPP) {
    David_0x56b14b = JSON.parse(process.env.FYYSAPP);
  } else {
    David_0x56b14b = David_0x312fc1.FYYS;
  }
  David_0x2df921 = process.env.TGUSERID;
  David_0xc6fb27 = process.env.FYYSACTIVECODE;
  if (process.env.APIHOST) {
    David_0x22a8c3 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x22a8c3 = process.env.APIHOSTS;
  }
  David_0x86d9d7 = new Date(new Date().getTime()).getHours();
  David_0x2f6f1d = new Date(new Date().getTime()).getMinutes();
  David_0x42ec7f.log("🔔 当前环境: Node, 当前时间：" + David_0x86d9d7 + "点");
} else {
  David_0x86d9d7 = new Date().getHours();
  David_0x2f6f1d = new Date().getMinutes();
  David_0x42ec7f.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x86d9d7 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x1ba7e4();
  } else {
    if (!David_0x56b14b) {
      David_0x42ec7f.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x42ec7f.log("📢 开始检测服务器接口状态>>>");
    let _0x1abf78 = false;
    const _0x448874 = David_0x22a8c3.split("&");
    const _0x521fa0 = _0x448874.length;
    for (let _0x5858a1 = 0; _0x5858a1 < _0x521fa0; _0x5858a1++) {
      if (David_0x42ec7f.isNode()) {
        _0x1abf78 = await David_0x2e9957("" + _0x448874[_0x5858a1], 2500);
      } else {
        _0x1abf78 = await David_0x3a60e6("" + _0x448874[_0x5858a1], 2500);
      }
      if (_0x1abf78 == true) {
        David_0x22a8c3 = _0x448874[_0x5858a1];
        David_0x42ec7f.log("📢 接口" + (_0x5858a1 + 1) + "[" + _0x448874[_0x5858a1] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x5858a1 == _0x521fa0 - 1 && _0x1abf78 == false) {
        David_0x42ec7f.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x42ec7f.msg(David_0x42ec7f.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0xc6fb27 || !David_0x2df921 || David_0x2df921 == 1 || David_0xc6fb27 == 0 || David_0xc6fb27.length != 32) {
      David_0x42ec7f.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x535d16(David_0x2b887d, David_0x2df921, David_0xc6fb27);
    David_0x42ec7f.log("📢 " + David_0x16a4f9);
    David_0x42ec7f.log("🔔 当前脚本版本号: " + David_0x2c4891 + "，最新版本号: " + David_0x4b8cdf);
    if (David_0xc00822 != "") {
      let _0x3758f0 = new Date(David_0xc00822).getTime();
      let _0x348d58 = new Date().getTime();
      if (_0x348d58 > _0x3758f0) {
        David_0x42ec7f.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x2c4891 < David_0x4b8cdf) {
      David_0x42ec7f.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x23148f("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x2fbe40 != true) {
      David_0x42ec7f.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x4248c7 != true) {
      David_0x42ec7f.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x4606a1 != true) {
      David_0x42ec7f.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x3509da == true) {
      David_0x42ec7f.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x42ec7f.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0xc00822 != "") {
      if (David_0x3509da == true) {
        David_0x42ec7f.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x5793f3 = new Date(David_0xc00822).getTime();
        let _0x3145f6 = new Date().getTime();
        if (_0x3145f6 > _0x5793f3) {
          David_0x42ec7f.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x49380c != true) {
        David_0x42ec7f.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (David_0x3d6d13 > 1) {
      David_0x42ec7f.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x452288 * David_0x3d6d13 + "个账号。");
    }
    if (David_0x3bdb4f > 1) {
      David_0x42ec7f.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x369759 + "次, 已经运行了" + David_0x46ae33 + "次。");
    }
    if (David_0x2346b7 != true) {
      David_0x42ec7f.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x56b14b.length > David_0x452288 * David_0x3d6d13) {
      David_0x42ec7f.log("⚠️ 当前用户一次最多运行" + David_0x452288 * David_0x3d6d13 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x56b14b.length == 0) {
      David_0x42ec7f.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x46ae33 + David_0x56b14b.length > David_0x369759) {
      David_0x42ec7f.log("📢 一共发现了" + David_0x56b14b.length + "个账号");
      David_0x42ec7f.log("⚠️ 当前用户运行次数剩余" + (David_0x369759 - David_0x46ae33) + "次，还可以运行" + (David_0x369759 - David_0x46ae33) + "个账号，还需要" + (David_0x56b14b.length - (David_0x369759 - David_0x46ae33)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0xc00822 != "") {
      David_0x42ec7f.log("📢 你的会员有效期到： " + David_0xc00822);
    }
    David_0x42ec7f.log("📢 一共发现了" + David_0x56b14b.length + "个账号");
    let _0x3765bd = [];
    for (let _0x25da37 = 0; _0x25da37 < David_0x56b14b.length; _0x25da37++) {
      _0x3765bd.push(David_0x374a16(_0x25da37));
      David_0x444ef8[_0x25da37] = "";
      David_0x2b340b[_0x25da37] = "";
      David_0x48d8ba[_0x25da37] = 0;
      David_0x56f3c0[_0x25da37] = "";
      David_0x9d7aeb[_0x25da37] = "";
      David_0x501cf4[_0x25da37] = "";
      David_0x545131[_0x25da37] = 0;
      David_0x5d89da[_0x25da37] = 0;
      await David_0x5a46ae(_0x25da37);
    }
    await Promise.allSettled(_0x3765bd).then(_0x31e3ab => {
      David_0x42ec7f.log("日志整理功能如下：");
      David_0x42ec7f.log("---------------日志整理开始--------------");
      for (let _0x43204a = 0; _0x43204a < David_0x56b14b.length; _0x43204a++) {
        David_0x42ec7f.log(David_0x444ef8[_0x43204a]);
      }
      David_0x42ec7f.log("---------------日志整理结束--------------");
    });
  }
})().catch(_0x134bc1 => David_0x42ec7f.logErr(_0x134bc1)).finally(() => David_0x42ec7f.done());
async function David_0x374a16(_0x5db2fc) {
  return new Promise((_0x9dcc7c, _0x5a5e88) => {
    David_0x42ec7f.log("[账号" + (_0x5db2fc + 1 < 10 ? "0" + (_0x5db2fc + 1) : _0x5db2fc + 1) + "]: 开始执行 working......");
    David_0xf3f439(_0x9dcc7c, _0x5db2fc);
  });
}
async function David_0x5a46ae(_0x44bf2f) {
  if (David_0x42ec7f.isNode()) {
    if (David_0x545131[_0x44bf2f] > 0) {
      David_0x42ec7f.log("[账号" + (_0x44bf2f + 1 < 10 ? "0" + (_0x44bf2f + 1) : _0x44bf2f + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0x294599[_0x44bf2f] = new David_0x8f7aa7(David_0x22a8c3.replace("http", "ws") + "/ws");
    David_0x294599[_0x44bf2f].on("open", function _0x45eadd() {
      David_0x42ec7f.log("[账号" + (_0x44bf2f + 1 < 10 ? "0" + (_0x44bf2f + 1) : _0x44bf2f + 1) + "]: 签名通道已连接");
    });
    David_0x294599[_0x44bf2f].on("close", function _0x1cd42b() {
      David_0x42ec7f.log("[账号" + (_0x44bf2f + 1 < 10 ? "0" + (_0x44bf2f + 1) : _0x44bf2f + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x294599[_0x44bf2f].on("error", function _0x200072() {
      David_0x42ec7f.log("[账号" + (_0x44bf2f + 1 < 10 ? "0" + (_0x44bf2f + 1) : _0x44bf2f + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x5d89da[_0x44bf2f] = 1;
      David_0x545131[_0x44bf2f]++;
      if (David_0x545131[_0x44bf2f] <= 3) {
        David_0x5a46ae(_0x44bf2f);
      }
    });
  }
}
async function David_0xf3f439(_0x356ea4, _0x53e49f) {
  David_0x56b14b[_0x53e49f].common_url = David_0x56b14b[_0x53e49f].common_url.replace("p25=10000", "p25=10310").replace("p21=31303", "p21=3").replace("p3=101000011", "p3=101031011");
  David_0x42ec7f.log("[账号" + (_0x53e49f + 1 < 10 ? "0" + (_0x53e49f + 1) : _0x53e49f + 1) + "]: 用户名=> " + David_0x56b14b[_0x53e49f].nick_name);
  David_0x444ef8[_0x53e49f] += "[账号" + (_0x53e49f + 1 < 10 ? "0" + (_0x53e49f + 1) : _0x53e49f + 1) + "]: 用户名=> " + David_0x56b14b[_0x53e49f].nick_name + "\n";
  await David_0x42ec7f.wait(3000, 5000);
  await David_0x15b446(_0x53e49f);
  await David_0x31291c(_0x53e49f);
  await David_0x1baadf(_0x53e49f);
  await David_0x42ec7f.wait(3000, 5000);
  if (David_0x42ec7f.isNode()) {
    await David_0x294599[_0x53e49f].close();
  }
  await David_0x294599[_0x53e49f].close();
  await David_0x38c08a(David_0x2b887d, David_0x2df921);
  _0x356ea4();
}
async function David_0x1ba7e4() {
  if ($request.url.match(/\/taiji_user\/login/)) {
    const _0x45865b = JSON.parse($response.body);
    if (_0x45865b.code == 0) {
      const _0xf2e1fc = _0x45865b.body.nick;
      const _0x51077a = _0x45865b.body.user_id;
      let _0x16c386 = David_0x100b6b - 1;
      if (David_0x56b14b[_0x16c386]) {
        David_0x56b14b[_0x16c386].nicke_name = _0xf2e1fc;
        David_0x56b14b[_0x16c386].user_id = _0x51077a;
      } else {
        const _0x1b0750 = {
          nicke_name: _0xf2e1fc,
          user_id: _0x51077a
        };
        David_0x56b14b[_0x16c386] = _0x1b0750;
      }
      David_0x42ec7f.setdata(JSON.stringify(David_0x56b14b, null, 2), "fyysapp");
      David_0x42ec7f.msg(David_0x42ec7f.name, "枫以影视账号" + (_0x16c386 + 1) + "用户信息获取成功！🎉");
    }
  }
  if ($request.url.match(/\/list\/by_act_ids/)) {
    const _0x97a32d = $request.url.split("?")[1];
    let _0x1a7914 = David_0x100b6b - 1;
    if (David_0x56b14b[_0x1a7914]) {
      David_0x56b14b[_0x1a7914].common_url = _0x97a32d;
    } else {
      const _0x1d3709 = {
        commonUrl: _0x97a32d
      };
      David_0x56b14b[_0x1a7914] = _0x1d3709;
    }
    David_0x42ec7f.setdata(JSON.stringify(David_0x56b14b, null, 2), "fyysapp");
    David_0x42ec7f.msg(David_0x42ec7f.name, "枫以影视账号" + (_0x1a7914 + 1) + "请求信息获取成功！🎉");
  }
}
async function David_0x31291c(_0x5a5d6a) {
  const _0xcc1bf = "https://tv.palmestore.com/task_api/task/list/by_act_ids?" + David_0x56b14b[_0x5a5d6a].common_url;
  let _0x1d86bd = "";
  await David_0x172d5d(_0xcc1bf, _0x1d86bd, _0x5a5d6a);
  await David_0x3311cf("get", David_0x548242[_0x5a5d6a], David_0x3738c7());
  let _0x123300 = David_0xcf66f4;
  if (_0x123300 != null) {
    if (_0x123300.code == 0) {
      const _0x3c50f4 = _0x123300.body.act_a0a1f9d9.task_list;
      if (_0x3c50f4.length > 0) {
        let _0x34ae4d = _0x3c50f4.find(_0x3f3206 => _0x3f3206.id == "task_0688f0ce");
        let _0x274ede = _0x3c50f4.find(_0x1f9c1f => _0x1f9c1f.id == "task_a27a7a25");
        if (_0x34ae4d) {
          David_0x9d7aeb[_0x5a5d6a] = _0x34ae4d;
        }
        if (_0x274ede) {
          David_0x501cf4[_0x5a5d6a] = _0x274ede;
        }
      }
      const _0x2a478a = _0x123300.body.act_e80ba223.task_list;
      for (let _0x1b1006 = 0; _0x1b1006 < _0x2a478a.length; _0x1b1006++) {
        const _0x1c1f57 = _0x2a478a[_0x1b1006];
        const _0x1dc0e6 = _0x1c1f57.id;
        let _0x3bab99 = _0x1c1f57.title;
        if (_0x1dc0e6 == "task_a2cdf5f5" || _0x1dc0e6 == "task_357d80d1" || _0x1dc0e6 == "task_ee85283c" || _0x1dc0e6 == "task_122addf6" || _0x1dc0e6 == "task_fb1296a1") {
          for (let _0x6c4723 = 0; _0x6c4723 < _0x1c1f57.sub_task_list.length; _0x6c4723++) {
            let _0x4cad0b = _0x1c1f57.sub_task_list[_0x6c4723];
            if (_0x4cad0b.status == "finished" && _0x4cad0b.reward_status == "un_reward") {
              if (_0x1dc0e6 == "task_122addf6") {
                if (_0x4cad0b.duration_limit == 30) {
                  _0x3bab99 += "_" + _0x4cad0b.duration_limit + "秒";
                } else {
                  _0x3bab99 += "_" + _0x4cad0b.duration_limit / 60 + "分";
                }
              }
              if (_0x1dc0e6 == "task_357d80d1") {
                _0x3bab99 += "_" + _0x4cad0b.gift_info[0].name;
              }
              await David_0x38325e(_0x5a5d6a, "act_e80ba223", _0x1dc0e6, _0x4cad0b.id, _0x3bab99);
              await David_0x42ec7f.wait(David_0x43ab12(2000, 3500));
              if (_0x1dc0e6 == "task_a2cdf5f5" && David_0x9d7aeb[_0x5a5d6a] != "") {
                let _0x37e3ae = David_0x9d7aeb[_0x5a5d6a].reward_limit_count - David_0x9d7aeb[_0x5a5d6a].rewarded_count;
                if (_0x37e3ae > 0) {
                  await David_0x38325e(_0x5a5d6a, "act_a0a1f9d9", David_0x9d7aeb[_0x5a5d6a].id, "", David_0x9d7aeb[_0x5a5d6a].title);
                  await David_0x42ec7f.wait(David_0x43ab12(5000, 15000));
                }
              }
            } else {
              if (_0x1dc0e6 == "task_fb1296a1" && _0x4cad0b.status == "un_finished" && _0x4cad0b.reward_status == "un_reward") {
                await David_0x38325e(_0x5a5d6a, "act_e80ba223", _0x1dc0e6, _0x4cad0b.id, _0x3bab99);
                await David_0x42ec7f.wait(David_0x43ab12(2000, 3500));
                break;
              }
            }
            if (_0x4cad0b.status == "un_start") {
              break;
            }
          }
        }
        if (_0x1dc0e6 == "task_d8ad3326" && _0x1c1f57.rewarded_count < _0x1c1f57.reward_limit_count) {
          await David_0x38325e(_0x5a5d6a, "act_e80ba223", _0x1dc0e6, "", _0x3bab99);
          if (David_0x501cf4[_0x5a5d6a] && David_0x501cf4[_0x5a5d6a].reward_limit_count - David_0x501cf4[_0x5a5d6a].rewarded_count > 150) {
            await David_0x42ec7f.wait(David_0x43ab12(6000, 15000));
            await David_0x38325e(_0x5a5d6a, "act_a0a1f9d9", David_0x501cf4[_0x5a5d6a].id, "", David_0x501cf4[_0x5a5d6a].title);
          }
        }
        if (_0x1dc0e6 == "task_5e779d39" || _0x1dc0e6 == "task_78b51c0d") {
          if (_0x1c1f57.status == "un_finished" && _0x1c1f57.reward_status == "un_rewarded") {
            await David_0x38325e(_0x5a5d6a, "act_e80ba223", _0x1c1f57.id, "", _0x1c1f57.title);
          }
        }
        if (_0x1dc0e6 == "task_f81bdebc") {
          await David_0x14ee1e(_0x5a5d6a, _0x1c1f57);
        }
        if (_0x1c1f57.title.indexOf("看热播剧") != -1) {
          let _0x1bfec6 = 0;
          for (let _0x313daa = 0; _0x313daa < _0x1c1f57.sub_task_list.length; _0x313daa++) {
            if (_0x1bfec6 == 6) {
              break;
            }
            const _0x5bc546 = _0x1c1f57.sub_task_list[_0x313daa];
            const _0x24385f = _0x5bc546.tv_series.id;
            David_0x16fd21[_0x313daa] = _0x24385f;
            const _0x52f120 = _0x5bc546.tv_series.name;
            if (_0x5bc546.status == "finished" && _0x5bc546.reward_status == "un_reward") {
              await David_0x38325e(_0x5a5d6a, "act_e80ba223", _0x1dc0e6, _0x5bc546.id, _0x3bab99);
            } else {
              if (_0x5bc546.status == "un_finished") {
                const _0x10a5e9 = David_0x43ab12(60, 120);
                David_0x42ec7f.log("[账号" + (_0x5a5d6a + 1 < 10 ? "0" + (_0x5a5d6a + 1) : _0x5a5d6a + 1) + "]: 正在模拟观看热播电视剧《" + _0x52f120 + "》，观看时间为" + _0x10a5e9 + "秒......");
                await David_0x42ec7f.wait(_0x10a5e9 * 1000 / 2);
                await David_0x1b3fcb(_0x5a5d6a, _0x24385f, _0x10a5e9);
                _0x1bfec6++;
              }
            }
          }
        }
      }
    }
  }
}
async function David_0x38325e(_0x5bfaf4, _0x21d029, _0x42c662, _0x2378ca, _0xf5d2fe) {
  const _0x418a83 = "https://tv.palmestore.com/task_api/task/draw_gift";
  let _0x3a76a5 = David_0x56b14b[_0x5bfaf4].common_url.split("e80ba223&")[1];
  let _0x5ca39b = "act_id=" + _0x21d029 + "&task_id=" + _0x42c662 + "&sub_task_id=" + _0x2378ca + "&" + _0x3a76a5;
  if (_0xf5d2fe == "签到弹窗" || _0xf5d2fe == "全局弹窗" || _0xf5d2fe == "看视频赚金币" || _0xf5d2fe == "看图文赚金币" || _0xf5d2fe == "点击秒赚金币") {
    _0x5ca39b = "act_id=" + _0x21d029 + "&task_id=" + _0x42c662 + "&sub_task_id=" + _0x2378ca + "&" + _0x3a76a5 + "&ecpm=732";
  }
  await David_0x172d5d(_0x418a83, _0x5ca39b, _0x5bfaf4);
  await David_0x3311cf("post", David_0x548242[_0x5bfaf4], David_0x3738c7());
  let _0x17656e = David_0xcf66f4;
  if (_0x17656e != null) {
    if (_0x17656e && _0x17656e.code == 0) {
      if (_0x17656e.body.gift_info[0].gift_type == "gold_coin") {
        David_0x42ec7f.log("[账号" + (_0x5bfaf4 + 1 < 10 ? "0" + (_0x5bfaf4 + 1) : _0x5bfaf4 + 1) + "]: 恭喜你完成" + _0xf5d2fe + "任务获得" + _0x17656e.body.gift_info[0].amount + "金币");
        David_0x444ef8[_0x5bfaf4] += "[账号" + (_0x5bfaf4 + 1 < 10 ? "0" + (_0x5bfaf4 + 1) : _0x5bfaf4 + 1) + "]: 恭喜你完成" + _0xf5d2fe + "任务获得" + _0x17656e.body.gift_info[0].amount + "金币\n";
      }
      if (_0x17656e.body.gift_info[0].rmb > 0) {
        David_0x42ec7f.log("[账号" + (_0x5bfaf4 + 1 < 10 ? "0" + (_0x5bfaf4 + 1) : _0x5bfaf4 + 1) + "]: 恭喜你完成" + _0xf5d2fe + "任务获得" + _0x17656e.body.gift_info[0].rmb + "元");
        David_0x444ef8[_0x5bfaf4] += "[账号" + (_0x5bfaf4 + 1 < 10 ? "0" + (_0x5bfaf4 + 1) : _0x5bfaf4 + 1) + "]: 恭喜你完成" + _0xf5d2fe + "任务获得" + _0x17656e.body.gift_info[0].rmb + "元\n";
      }
    }
  }
}
async function David_0x23744c(_0x434364, _0x51b559) {
  if (David_0x5d89da[_0x434364] == 0) {
    await David_0x880434(_0x434364, _0x51b559);
  } else {
    await David_0x76872d(_0x434364, _0x51b559);
  }
}
async function David_0x15b446(_0x570e84) {
  let _0x536702 = David_0x56b14b[_0x570e84].common_url.split("e80ba223&")[1];
  const _0x401bf5 = "https://tv.palmestore.com/tv_welfare/gold/user/gold_account?gold_type=3&" + _0x536702;
  let _0x118ef3 = "";
  await David_0x172d5d(_0x401bf5, _0x118ef3, _0x570e84);
  await David_0x3311cf("get", David_0x548242[_0x570e84], David_0x3738c7());
  let _0x4cc821 = David_0xcf66f4;
  if (_0x4cc821 != null && _0x4cc821.code == 0) {
    David_0x29adbd[_0x570e84] = _0x4cc821.body.watching_time.day;
    David_0x42ec7f.log("[账号" + (_0x570e84 + 1 < 10 ? "0" + (_0x570e84 + 1) : _0x570e84 + 1) + "]: 总金币=> " + _0x4cc821.body.total_gold_num + "金币");
    David_0x444ef8[_0x570e84] += "[账号" + (_0x570e84 + 1 < 10 ? "0" + (_0x570e84 + 1) : _0x570e84 + 1) + "]: 总金币=> " + _0x4cc821.body.total_gold_num + "金币\n";
    David_0x42ec7f.log("[账号" + (_0x570e84 + 1 < 10 ? "0" + (_0x570e84 + 1) : _0x570e84 + 1) + "]: 现金=> " + _0x4cc821.body.total_rmb + "元");
    David_0x444ef8[_0x570e84] += "[账号" + (_0x570e84 + 1 < 10 ? "0" + (_0x570e84 + 1) : _0x570e84 + 1) + "]: " + _0x4cc821.body.total_rmb + "元\n";
    David_0x42ec7f.log("[账号" + (_0x570e84 + 1 < 10 ? "0" + (_0x570e84 + 1) : _0x570e84 + 1) + "]: 今日金币=> " + _0x4cc821.body.today_gold_num + "金币");
    David_0x444ef8[_0x570e84] += "[账号" + (_0x570e84 + 1 < 10 ? "0" + (_0x570e84 + 1) : _0x570e84 + 1) + "]: 今日金币=> " + _0x4cc821.body.today_gold_num + "金币\n";
  }
}
async function David_0x3c2408(_0x288c4a) {
  let _0x26cd1d = David_0x56b14b[_0x288c4a].common_url.split("e80ba223&")[1];
  const _0x49982a = "https://tv.palmestore.com/task_api/task/list/by_types?" + _0x26cd1d + "&types=duration_stabilization_content";
  let _0x4d9bf4 = "";
  await David_0x172d5d(_0x49982a, _0x4d9bf4, _0x288c4a);
  await David_0x3311cf("get", David_0x548242[_0x288c4a], David_0x3738c7());
  let _0x1b42ac = David_0xcf66f4;
  if (_0x1b42ac.code == 0) {
    const _0x55275b = _0x1b42ac.body.find(_0x5da95e => _0x5da95e.title.indexOf("热播剧") != -1);
    let _0x2f7731 = _0x55275b.sub_task_list;
    for (let _0x1c87e6 = 0; _0x1c87e6 < 5; _0x1c87e6++) {
      let _0x40aa2e = David_0x43ab12(0, 10);
      let _0x68f0bf = _0x2f7731[_0x40aa2e].tv_series.id;
      let _0x3e4f5b = _0x2f7731[_0x40aa2e].tv_series.name;
      let _0x3a002e = David_0x43ab12(60, 120);
      David_0x42ec7f.log("[账号" + (_0x288c4a + 1 < 10 ? "0" + (_0x288c4a + 1) : _0x288c4a + 1) + "]: 正在模拟观看热播电视剧《" + _0x3e4f5b + "》，观看时间为" + _0x3a002e + "秒......");
      await David_0x42ec7f.wait(_0x3a002e * 1000 / 2);
      await David_0x1b3fcb(_0x288c4a, _0x68f0bf, _0x3a002e);
    }
  }
}
async function David_0x1b3fcb(_0x5343d3, _0x1cec9e, _0x3f75ad) {
  let _0x56d5b0 = Math.round(new Date().getTime()).toString();
  let _0x33967d = David_0x56b14b[_0x5343d3].common_url.split("e80ba223&")[1];
  let _0x35aee8 = David_0x375328(_0x33967d);
  let _0x35df0e = _0x35aee8.usr;
  let _0x8f410c = David_0x42ec7f.time("yyyy-MM-dd");
  if (_0x1cec9e == 0) {
    _0x1cec9e = David_0x43ab12(440, 480);
  }
  if (_0x3f75ad == 0) {
    _0x3f75ad = 30;
  }
  const _0x19c982 = "https://tv.palmestore.com/reading/duration/report";
  let _0x3ff38c = "app_id=zy3d1ef1&date_info=[{\"book_id\":\"" + _0x1cec9e + "\",\"date\":\"" + _0x8f410c + "\",\"res_type\":\"watch\",\"second\":" + _0x3f75ad + "}]&timestamp=" + _0x56d5b0 + "&user_name=" + _0x35df0e + "&" + _0x33967d;
  await David_0x172d5d(_0x19c982, _0x3ff38c, _0x5343d3);
  await David_0x3311cf("post", David_0x548242[_0x5343d3], David_0x3738c7());
}
async function David_0xc26b41(_0x5dbae7) {
  let _0xc5be3d = David_0x56b14b[_0x5dbae7].common_url.split("e80ba223&")[1];
  const _0x5acfe9 = "https://tv.palmestore.com/tv_welfare/gold/withdraw/type_list?gold_type=3&" + _0xc5be3d;
  let _0x1f85e4 = "";
  await David_0x172d5d(_0x5acfe9, _0x1f85e4, _0x5dbae7);
  await David_0x3311cf("get", David_0x548242[_0x5dbae7], David_0x3738c7());
  let _0x5e9141 = David_0xcf66f4;
  if (_0x5e9141.code == 0) {
    let _0x2f75ab = _0x5e9141.body.list;
    let _0x3f2478 = 0;
    let _0x49c7d1 = 0;
    for (let _0xe75b43 in _0x2f75ab) {
      const _0x1c1377 = _0x2f75ab[_0xe75b43];
      if (_0x1c1377.type == "alipay" && _0x1c1377.bind_info.is_bind == true) {
        _0x3f2478 = 1;
      }
      if (_0x1c1377.type == "wechat" && _0x1c1377.bind_info.is_bind == true) {
        _0x49c7d1 = 1;
      }
    }
    if (_0x3f2478 == 1 && _0x49c7d1 == 0) {
      David_0x42ec7f.log("[账号" + (_0x5dbae7 + 1 < 10 ? "0" + (_0x5dbae7 + 1) : _0x5dbae7 + 1) + "]: 检测提现绑定状态=> 你绑定了支付宝");
      David_0x56f3c0[_0x5dbae7] = "alipay";
    } else {
      if (_0x3f2478 == 0 && _0x49c7d1 == 1) {
        David_0x42ec7f.log("[账号" + (_0x5dbae7 + 1 < 10 ? "0" + (_0x5dbae7 + 1) : _0x5dbae7 + 1) + "]: 检测提现绑定状态=> 你绑定了微信");
        David_0x56f3c0[_0x5dbae7] = "wechat";
      } else {
        if (_0x3f2478 == 1 && _0x49c7d1 == 1) {
          David_0x42ec7f.log("[账号" + (_0x5dbae7 + 1 < 10 ? "0" + (_0x5dbae7 + 1) : _0x5dbae7 + 1) + "]: 检测提现绑定状态=> 你既绑定了支付宝又绑定了微信，默认提现到微信");
          David_0x56f3c0[_0x5dbae7] = "wechat";
        } else {
          David_0x42ec7f.log("[账号" + (_0x5dbae7 + 1 < 10 ? "0" + (_0x5dbae7 + 1) : _0x5dbae7 + 1) + "]: 检测提现绑定状态=> 你还没有绑定支付宝或者微信，请及时绑定，否则无法提现");
        }
      }
    }
  }
}
async function David_0x1c813c(_0x29127e) {
  let _0x5e1c53 = David_0x56b14b[_0x29127e].common_url.split("e80ba223&")[1];
  const _0x3a756f = "https://tv.palmestore.com/tv_welfare/gold/user/withdraw?gold_type=3&" + _0x5e1c53;
  let _0x28626f = "";
  await David_0x172d5d(_0x3a756f, _0x28626f, _0x29127e);
  await David_0x3311cf("get", David_0x548242[_0x29127e], David_0x3738c7());
  let _0x4d192a = David_0xcf66f4;
  if (_0x4d192a.code == 0) {
    David_0x48d8ba[_0x29127e] = _0x4d192a.body.continues_sign_num;
    David_0x42ec7f.log("[账号" + (_0x29127e + 1 < 10 ? "0" + (_0x29127e + 1) : _0x29127e + 1) + "]: 检测提现条件=> 你已经连续签到" + David_0x48d8ba[_0x29127e] + "天");
  }
}
async function David_0x206165(_0x1e898f, _0x57617b) {
  let _0x43d2d3 = David_0x56b14b[_0x1e898f].common_url.split("e80ba223&")[1];
  const _0x2cb811 = "https://tv.palmestore.com/tv_welfare/gold/withdraw/amount_list?gold_type=3&" + _0x43d2d3;
  let _0x566a7d = "";
  await David_0x172d5d(_0x2cb811, _0x566a7d, _0x1e898f);
  await David_0x3311cf("get", David_0x548242[_0x1e898f], David_0x3738c7());
  let _0x7f5c27 = David_0xcf66f4;
  if (_0x7f5c27.code == 0) {
    let _0xa9cec = _0x7f5c27.body.list;
    for (let _0x241a6e = 0; _0x241a6e < _0xa9cec.length; _0x241a6e++) {
      const _0x5cb7dc = _0xa9cec[_0x241a6e];
      if (_0x5cb7dc.rmb == _0x57617b) {
        David_0x2b340b[_0x1e898f] = _0x5cb7dc;
        break;
      }
    }
  }
}
async function David_0x45ca9e(_0x59c7a4, _0x53d74f, _0x17a541, _0x3800d8) {
  let _0x1bc72a = David_0x56b14b[_0x59c7a4].common_url.split("e80ba223&")[1];
  const _0x59dea2 = "https://tv.palmestore.com/tv_welfare/gold/withdraw/exec";
  let _0x22a12f = "type=" + _0x53d74f + "&amount=" + _0x17a541 + "&sub_id=" + _0x3800d8 + "&gold_type=3&" + _0x1bc72a;
  await David_0x172d5d(_0x59dea2, _0x22a12f, _0x59c7a4);
  await David_0x3311cf("post", David_0x548242[_0x59c7a4], David_0x3738c7());
  let _0x21b155 = David_0xcf66f4;
  if (_0x21b155.code == 0) {
    David_0x42ec7f.log("[账号" + (_0x59c7a4 + 1 < 10 ? "0" + (_0x59c7a4 + 1) : _0x59c7a4 + 1) + "]: 提现" + _0x17a541 + "成功，请注意查收。");
    David_0x444ef8[_0x59c7a4] += "[账号" + (_0x59c7a4 + 1 < 10 ? "0" + (_0x59c7a4 + 1) : _0x59c7a4 + 1) + "]: 提现" + _0x17a541 + "元成功，请注意查收。\n";
  }
}
async function David_0x1baadf(_0x16eddd) {
  let _0x521b9a = David_0x56b14b[_0x16eddd].common_url.split("e80ba223&")[1];
  const _0x3a9aab = "https://tv.palmestore.com/tv_welfare/gold/user/gold_account?gold_type=3&" + _0x521b9a;
  let _0x528a94 = "";
  await David_0x172d5d(_0x3a9aab, _0x528a94, _0x16eddd);
  await David_0x3311cf("get", David_0x548242[_0x16eddd], David_0x3738c7());
  let _0x5517cd = David_0xcf66f4;
  if (_0x5517cd.code == 0) {
    await David_0xc26b41(_0x16eddd);
    if (David_0x56f3c0[_0x16eddd] == "") {
      return;
    }
    let _0x3a70f1 = _0x5517cd.body.total_rmb;
    if (David_0x56b14b[_0x16eddd].amount && _0x3a70f1 >= David_0x56b14b[_0x16eddd].amount || !David_0x56b14b[_0x16eddd].amount) {
      if (_0x3a70f1 >= 1 && _0x3a70f1 < 5) {
        await David_0x206165(_0x16eddd, 1);
        await David_0x206165(_0x16eddd, 2);
      } else {
        if (_0x3a70f1 >= 5 && _0x3a70f1 < 15) {
          await David_0x206165(_0x16eddd, 5);
        } else {
          if (_0x3a70f1 >= 15 && _0x3a70f1 < 30) {
            await David_0x206165(_0x16eddd, 15);
          } else {
            if (_0x3a70f1 >= 30) {
              await David_0x206165(_0x16eddd, 30);
            } else {
              David_0x42ec7f.log("[账号" + (_0x16eddd + 1 < 10 ? "0" + (_0x16eddd + 1) : _0x16eddd + 1) + "]: 不满足提现条件，暂不提现。");
              return;
            }
          }
        }
      }
      await David_0x1c813c(_0x16eddd);
      if (David_0x48d8ba[_0x16eddd] >= David_0x2b340b[_0x16eddd].keep_sign_day) {
        await David_0x45ca9e(_0x16eddd, David_0x56f3c0[_0x16eddd], David_0x2b340b[_0x16eddd].rmb, David_0x2b340b[_0x16eddd].sub_id);
      }
    }
  }
}
async function David_0x14ee1e(_0x1cf8bb, _0x4d46db) {
  let _0x4793ea = _0x4d46db;
  let _0x10418c = _0x4793ea.sub_task_list;
  for (let _0x39b669 in _0x10418c) {
    let _0x186c30 = _0x10418c[_0x39b669];
    if (_0x186c30.reward_status == "un_reward" && _0x186c30.status == "finished" && _0x186c30.rewarded_count < _0x186c30.cycle_count_limit) {
      await David_0x428c4d(_0x1cf8bb, _0x4793ea.id, _0x186c30);
    }
  }
  if (_0x4793ea.draw_limit.remaining_count > 0) {
    for (let _0x5e5e5d = 0; _0x5e5e5d < _0x4793ea.draw_limit.remaining_count; _0x5e5e5d++) {
      await David_0x428c4d(_0x1cf8bb, _0x4793ea.id, "");
      await David_0x42ec7f.wait(David_0x43ab12(5000, 8000));
    }
  }
}
async function David_0x428c4d(_0x4c27c2, _0x35cd9e, _0xfde895) {
  let _0x2b2d2f = David_0x56b14b[_0x4c27c2].common_url.split("e80ba223&")[1];
  const _0x5958ba = "https://tv.palmestore.com/task_api/task/draw_gift";
  let _0x20c8d5 = "act_id=act_e80ba223&task_id=" + _0x35cd9e + "&sub_task_id=" + _0xfde895.id + "&" + _0x2b2d2f;
  if (_0xfde895 == "") {
    _0x20c8d5 = "act_id=act_e80ba223&task_id=" + _0x35cd9e + "&" + _0x2b2d2f;
  }
  await David_0x172d5d(_0x5958ba, _0x20c8d5, _0x4c27c2);
  await David_0x3311cf("post", David_0x548242[_0x4c27c2], David_0x3738c7());
  let _0x26d9c4 = David_0xcf66f4;
  if (_0x26d9c4 != null) {
    if (_0x26d9c4 && _0x26d9c4.code == 0) {
      let _0x5007e7 = _0x26d9c4.body.gift_info[0];
      if (_0xfde895 == "") {
        if (_0x5007e7.gift_type == "gold_coin") {
          David_0x42ec7f.log("[账号" + (_0x4c27c2 + 1 < 10 ? "0" + (_0x4c27c2 + 1) : _0x4c27c2 + 1) + "]: 抽奖获得" + _0x5007e7.amount + "金币");
          David_0x444ef8[_0x4c27c2] += "[账号" + (_0x4c27c2 + 1 < 10 ? "0" + (_0x4c27c2 + 1) : _0x4c27c2 + 1) + "]: 抽奖获得" + _0x5007e7.amount + "金币\n";
        }
      } else {
        if (_0x5007e7.gift_type == "raffle_count") {
          David_0x42ec7f.log("[账号" + (_0x4c27c2 + 1 < 10 ? "0" + (_0x4c27c2 + 1) : _0x4c27c2 + 1) + "]: 完成" + _0xfde895.sub_title + "任务，抽奖次数成功增加" + _0x5007e7.amount + "次");
        }
      }
    }
  }
}
function David_0x535d16(_0x358c3e, _0x294ef4, _0x10d7ed) {
  return new Promise((_0x2b9243, _0x1608e1) => {
    const _0xdcddc3 = David_0x22a8c3 + "/script/permissions/lastest";
    const _0x367527 = {
      appName: _0x358c3e,
      userId: _0x294ef4,
      activityCode: _0x10d7ed,
      version: David_0x2c4891
    };
    const _0x20990e = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x26c3a2 = {
      url: _0xdcddc3,
      headers: _0x20990e,
      body: JSON.stringify(_0x367527)
    };
    David_0x42ec7f.post(_0x26c3a2, async (_0x4e87d7, _0x5eb6fd, _0x28392f) => {
      if (_0x28392f && _0x28392f != null && _0x28392f.replace(/\"/g, "").length > 50) {
        const _0x582f75 = _0x28392f.replace(/\"/g, "").slice(34);
        const _0x49366f = new David_0x3593b7();
        result = JSON.parse(_0x49366f.decode(_0x582f75));
        try {
          David_0x4b8cdf = result.version;
          David_0x4606a1 = result.userAuth;
          David_0x2fbe40 = result.scriptAuth;
          David_0x2346b7 = result.runAuth;
          David_0x16a4f9 = result.notify;
          David_0x49380c = result.vipAuth;
          David_0x3509da = result.isCharge;
          David_0x3d6d13 = result.runAcounts;
          David_0x3bdb4f = result.buyCount;
          David_0x46ae33 = result.runedCounts;
          David_0x369759 = result.runTotalCounts;
          David_0x4248c7 = result.userRank;
          David_0x490aaa = result.invicate;
          David_0x452288 = result.accountNumbers;
          David_0xc00822 = result.vipDate;
        } catch (_0x296231) {
          David_0x42ec7f.log(_0x296231);
        }
      } else {
        David_0x42ec7f.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x2b9243();
    });
  });
}
function David_0x38c08a(_0x2f412c, _0x38a9b9) {
  return new Promise((_0x33c111, _0x4e1b97) => {
    const _0x43c5c9 = David_0x22a8c3 + "/script/run/add";
    const _0x41ae28 = {
      appName: _0x2f412c,
      userId: _0x38a9b9,
      activityCode: David_0xc6fb27,
      version: David_0x2c4891
    };
    const _0xba8f0b = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xea4e3d = {
      url: _0x43c5c9,
      headers: _0xba8f0b,
      body: JSON.stringify(_0x41ae28)
    };
    David_0x42ec7f.post(_0xea4e3d, async (_0x1b85ff, _0x347b0a, _0x14c258) => {
      _0x33c111();
    });
  });
}
function David_0x2e9957(_0x4ad418, _0x22185e) {
  return new Promise((_0x4b096c, _0x496dc2) => {
    const _0x2f5c47 = setTimeout(() => {
      _0x4b096c(false);
    }, _0x22185e);
    const _0x8415a2 = David_0x56e66a.get(_0x4ad418, _0x46e273 => {
      clearTimeout(_0x2f5c47);
      if (_0x46e273.statusCode === 404) {
        _0x4b096c(true);
      } else {
        _0x4b096c(false);
      }
    });
    _0x8415a2.on("error", _0x49d4b5 => {
      clearTimeout(_0x2f5c47);
      _0x4b096c(false);
    });
    _0x8415a2.on("timeout", () => {
      _0x8415a2.abort();
      _0x496dc2(new Error("请求超时"));
    });
  });
}
async function David_0x3a60e6(_0x23933d, _0x13f026 = 3000) {
  return new Promise((_0x2a9ffa, _0x4d468a) => {
    const _0x146e6c = {
      url: _0x23933d + "/docs"
    };
    setTimeout(() => {
      _0x2a9ffa(false);
    }, _0x13f026);
    David_0x42ec7f.get(_0x146e6c, async (_0x506d97, _0x32cb37, _0x3d7bb7) => {
      if (_0x32cb37.status == 401) {
        _0x2a9ffa(true);
      } else {
        _0x2a9ffa(false);
      }
    });
  });
}
async function David_0x23bf4c(_0x590e14, _0x300551, _0x53a800) {
  return new Promise((_0x3e6505, _0x2a455b) => {
    const _0x2544a3 = David_0x22a8c3 + "/redis/hash/get/" + _0x590e14 + "/" + _0x300551;
    const _0x4f3ccb = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x3edd92 = {
      url: _0x2544a3,
      headers: _0x4f3ccb
    };
    David_0x42ec7f.get(_0x3edd92, async (_0x31c778, _0x145ddb, _0xa6a1df) => {
      const _0x1791d0 = _0xa6a1df.replace(/\"/g, "");
      answerTexts[_0x53a800] = _0x1791d0;
      _0x3e6505();
    });
  });
}
function David_0x4f763e(_0x609791, _0x147781, _0x20fd9f) {
  return new Promise((_0x2f7470, _0x25d497) => {
    const _0x4cc0a8 = David_0x22a8c3 + "/redis/hash/set";
    const _0x3a7e1b = {
      key: _0x609791,
      hashKey: _0x147781,
      hashValue: _0x20fd9f
    };
    const _0x5ea1c8 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x19bbcc = {
      url: _0x4cc0a8,
      headers: _0x5ea1c8,
      body: JSON.stringify(_0x3a7e1b)
    };
    David_0x42ec7f.post(_0x19bbcc, async (_0x180f59, _0x4f6c93, _0x11080f) => {
      _0x2f7470();
    });
  });
}
function David_0x411b8c(_0x4e8fe5) {
  return new Promise((_0x9bb22b, _0x25bbdd) => {
    const _0x4a9698 = David_0x22a8c3 + "/redis/set/pop/" + _0x4e8fe5;
    const _0x1b5af7 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xb4aeba = {
      url: _0x4a9698,
      headers: _0x1b5af7
    };
    David_0x42ec7f.get(_0xb4aeba, async (_0xcdd872, _0x593cf5, _0xc91a56) => {
      const _0x4bd38f = _0xc91a56.replace(/\"/g, "");
      popCookie = _0x4bd38f;
      _0x9bb22b();
    });
  });
}
async function David_0x172d5d(_0x55f3d5, _0xba7694, _0x3a6f86) {
  let _0x463ec7 = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/119.0.6045.67 Mobile Safari/537.36 zyHybridVer/1.0.0 zyApp/???? zyVersion/1.0.0 zyChannel/118981 zyAppid/zy3d1ef1 zyApp/???? zyVersion/1.0.0 zyChannel/118981 zyAppid/zy3d1ef1";
  if (David_0x56b14b[_0x3a6f86].ua && David_0x56b14b[_0x3a6f86].ua != "") {
    _0x463ec7 = David_0x56b14b[_0x3a6f86].ua;
  }
  await David_0x23744c(_0x3a6f86, _0x55f3d5 + "@" + _0xba7694);
  let _0x2e1c59 = David_0x383f76[_0x3a6f86].split("&")[0];
  let _0x39f6a9 = David_0x383f76[_0x3a6f86].split("&")[1];
  const _0x2c8136 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x463ec7,
    "X-SIG-Timestamp": _0x39f6a9,
    "X-SIG-Sign": _0x2e1c59,
    "X-AppId": "zy3d1ef1",
    "X-SIG-Alg": "RSA-SHA256",
    Host: "tv.palmestore.com"
  };
  const _0x1dc6f0 = {
    url: _0x55f3d5,
    headers: _0x2c8136
  };
  if (_0xba7694) {
    _0x1dc6f0.body = _0xba7694;
  }
  David_0x548242[_0x3a6f86] = _0x1dc6f0;
  return _0x1dc6f0;
}
async function David_0x3311cf(_0x303a9b, _0x33d68f, _0x53bb87) {
  David_0xcf66f4 = null;
  return new Promise(_0x182fcb => {
    David_0x42ec7f[_0x303a9b](_0x33d68f, async (_0x28e812, _0x310df9, _0x5d0219) => {
      try {
        if (_0x28e812) {
          David_0x42ec7f.log(_0x53bb87 + ": " + _0x303a9b + "请求失败");
          David_0x42ec7f.log(JSON.stringify(_0x28e812));
          David_0x42ec7f.logErr(_0x28e812);
        } else {
          if (David_0x65fa3d(_0x5d0219)) {
            David_0xcf66f4 = JSON.parse(_0x5d0219);
          } else {
            const _0x47352f = new URL(_0x33d68f.url);
            David_0x42ec7f.log(_0x47352f.pathname + "发起" + _0x303a9b + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x56cf55) {
        David_0x42ec7f.logErr(_0x56cf55, _0x310df9);
      } finally {
        _0x182fcb();
      }
    });
  });
}
function David_0x246ad5(_0x5f26a6) {
  let _0x5a4340 = _0x5f26a6.split("&");
  let _0x12bfd4 = {};
  for (let _0x41551e = 0; _0x41551e < _0x5a4340.length; _0x41551e++) {
    let _0x5dad5c = _0x5a4340[_0x41551e].split("=");
    _0x12bfd4[_0x5dad5c[0]] = _0x5dad5c[1];
  }
  return _0x12bfd4;
}
function David_0x375328(_0x44a347) {
  _0x44a347 = _0x44a347.replace(/\"/g, "");
  var _0xb36ec8;
  var _0x313d34 = {};
  var _0x3c8280 = _0x44a347.slice(_0x44a347.indexOf("?") + 1).split("&");
  for (var _0x359cb6 = 0; _0x359cb6 < _0x3c8280.length; _0x359cb6++) {
    _0xb36ec8 = _0x3c8280[_0x359cb6].split("=");
    _0x313d34[_0xb36ec8[0]] = _0xb36ec8[1];
  }
  return _0x313d34;
}
function David_0x76872d(_0x317623, _0x1c97b7) {
  return new Promise((_0x5d2866, _0x3cf3dc) => {
    const _0x2d4dca = David_0x22a8c3 + "/sign/fyys";
    const _0x292e45 = {
      content: _0x1c97b7,
      appName: David_0x2b887d,
      uuid: David_0x2df921
    };
    const _0x3dbc02 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x9d1eb0 = {
      url: _0x2d4dca,
      headers: _0x3dbc02,
      body: JSON.stringify(_0x292e45)
    };
    David_0x42ec7f.post(_0x9d1eb0, async (_0x43d1e8, _0x34c8d2, _0x81a7f9) => {
      const _0x31e1e5 = _0x81a7f9.replace(/\"/g, "");
      David_0x383f76[_0x317623] = _0x31e1e5;
      _0x5d2866(_0x31e1e5);
    });
  });
}
function David_0x880434(_0x4a010a, _0x2a3bc1) {
  return new Promise((_0x28beb4, _0x4d3b88) => {
    function _0x678d47(_0x377049) {
      let _0x12c722 = _0x377049.toString("utf8");
      David_0x383f76[_0x4a010a] = _0x12c722;
      _0x28beb4(_0x12c722);
      David_0x294599[_0x4a010a].removeListener("message", _0x678d47);
    }
    David_0x294599[_0x4a010a].on("message", _0x678d47);
    if (David_0x294599[_0x4a010a].readyState === 1) {
      const _0x5c960c = {
        method: David_0x2b887d,
        params: {}
      };
      _0x5c960c.params.content = _0x2a3bc1;
      _0x5c960c.params.appName = David_0x2b887d;
      _0x5c960c.params.uuid = David_0x2df921;
      David_0x294599[_0x4a010a].send(JSON.stringify(_0x5c960c), _0x3a8c81 => {
        if (_0x3a8c81) {
          _0x4d3b88(_0x3a8c81);
        }
      });
    } else {
      _0x28beb4(David_0x76872d(_0x4a010a, _0x2a3bc1));
      David_0x294599[_0x4a010a].removeListener("message", _0x678d47);
    }
  });
}
function David_0x4f7c80(_0x33d378, _0x444b6f) {
  if (_0x33d378.length * 2 <= _0x444b6f) {
    return _0x33d378;
  }
  var _0x1aa09b = 0;
  var _0x35a680 = "";
  for (var _0x1f6d23 = 0; _0x1f6d23 < _0x33d378.length; _0x1f6d23++) {
    _0x35a680 = _0x35a680 + _0x33d378.charAt(_0x1f6d23);
    if (_0x33d378.charCodeAt(_0x1f6d23) > 128) {
      _0x1aa09b = _0x1aa09b + 2;
      if (_0x1aa09b >= _0x444b6f) {
        return _0x35a680.substring(0, _0x35a680.length - 1) + "...";
      }
    } else {
      _0x1aa09b = _0x1aa09b + 1;
      if (_0x1aa09b >= _0x444b6f) {
        return _0x35a680.substring(0, _0x35a680.length - 2) + "...";
      }
    }
  }
  return _0x35a680;
}
function David_0x3738c7() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x65fa3d(_0x4bc57f) {
  try {
    if (typeof JSON.parse(_0x4bc57f) == "object") {
      return true;
    }
  } catch (_0x98073f) {
    console.log(_0x98073f);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x10ddc3(_0x4f6ad9) {
  var _0xd29d69 = Object.keys(_0x4f6ad9).map(function (_0xde0e7) {
    return encodeURIComponent(_0xde0e7) + "=" + encodeURIComponent(_0x4f6ad9[_0xde0e7]);
  }).join("&");
  return _0xd29d69;
}
function David_0x57fe2d(_0x4ccafe) {
  var _0xc8e3b6 = String.fromCharCode(_0x4ccafe.charCodeAt(0) + _0x4ccafe.length);
  for (var _0x66285b = 1; _0x66285b < _0x4ccafe.length; _0x66285b++) {
    _0xc8e3b6 += String.fromCharCode(_0x4ccafe.charCodeAt(_0x66285b) + _0x4ccafe.charCodeAt(_0x66285b - 1));
  }
  return escape(_0xc8e3b6);
}
function David_0x2872f9(_0x9d3982) {
  _0x9d3982 = unescape(_0x9d3982);
  var _0x15150d = String.fromCharCode(_0x9d3982.charCodeAt(0) - _0x9d3982.length);
  for (var _0x3ba0dd = 1; _0x3ba0dd < _0x9d3982.length; _0x3ba0dd++) {
    _0x15150d += String.fromCharCode(_0x9d3982.charCodeAt(_0x3ba0dd) - _0x15150d.charCodeAt(_0x3ba0dd - 1));
  }
  return _0x15150d;
}
function David_0x43ab12(_0x38f601, _0x4dd6b3) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x38f601 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x4dd6b3 - _0x38f601 + 1) + _0x38f601);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x2917b4() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x46ba10() {
  function _0x4d8b3e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x4d8b3e() + _0x4d8b3e() + "-" + _0x4d8b3e() + "-" + _0x4d8b3e() + "-" + _0x4d8b3e() + "-" + _0x4d8b3e() + _0x4d8b3e() + _0x4d8b3e();
}
function David_0x449f29(_0x54a1ff) {
  if (_0x54a1ff.length == 11) {
    let _0x534354 = _0x54a1ff.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x534354;
  } else {
    return _0x54a1ff;
  }
}
function David_0x5ab363(_0x147443) {
  return new Promise(_0x42febf => {
    try {
      var _0x2fd0a6 = require("request");
      const _0xe4e3bf = {
        c: _0x147443
      };
      const _0x3b859c = {
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        qs: _0xe4e3bf
      };
      _0x2fd0a6(_0x3b859c, function (_0x4dded1, _0x1489f6, _0x591628) {
        if (_0x4dded1) {
          throw new Error(_0x4dded1);
        }
        let _0x4afe42 = JSON.parse(_0x591628);
        let _0xea9f07 = _0x4afe42.hitokoto;
        _0x42febf(_0xea9f07);
        return _0xea9f07;
      });
    } catch (_0x3e5cf4) {
      console.log(_0x3e5cf4);
    }
  });
}
function David_0x5c4cdc() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x4fb290() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x512a54() {
  if (David_0x262662 == 1) {
    David_0x42ec7f.msg(David_0x42ec7f.name, "", David_0x42ec7f.message);
  }
}
async function David_0x23148f(_0x383e09) {
  if (David_0x86d9d7 == 9 || David_0x86d9d7 == 12 || David_0x86d9d7 == 18) {
    if (David_0x262662 == 1) {
      if (David_0x42ec7f.isNode()) {
        await David_0x23fcb0.sendNotify(David_0x42ec7f.name, _0x383e09);
      } else {
        David_0x42ec7f.msg(David_0x42ec7f.name, "", _0x383e09);
      }
    } else {
      David_0x42ec7f.log(_0x383e09);
    }
  }
}
async function David_0x57faaf(_0x129792, _0x441d8d, _0x2e402e) {
  return new Promise((_0x4dd503, _0x2fbb1a) => {
    const _0x21abad = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x4550ea = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x441d8d,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x2e402e],
      verifyPay: false
    };
    const _0x18149f = {
      "Content-Type": "application/json"
    };
    const _0xb0e5be = {
      url: _0x21abad,
      headers: _0x18149f,
      body: JSON.stringify(_0x4550ea)
    };
    David_0x42ec7f.post(_0xb0e5be, async (_0x2af39e, _0x3dff80, _0x130b70) => {
      _0x4dd503();
    });
  });
}
function David_0x12c0a7(_0x38cc70, _0x56a503) {
  _0x56a503 = _0x56a503 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x2bbc70 = "";
  for (let _0x44aa20 = 0; _0x44aa20 < _0x38cc70; _0x44aa20++) {
    let _0x5f53a0 = Math.floor(Math.random() * _0x56a503.length);
    _0x2bbc70 += _0x56a503.substring(_0x5f53a0, _0x5f53a0 + 1);
  }
  return _0x2bbc70;
}
function David_0x1e4858(_0x31301d) {
  function _0x4b692d(_0x17bcbe, _0x131aa3) {
    return _0x17bcbe << _0x131aa3 | _0x17bcbe >>> 32 - _0x131aa3;
  }
  function _0x1fd0db(_0x514633, _0x9db24) {
    var _0x4bab8f, _0x4ddd75, _0x455c68, _0x55f38d, _0x418387;
    _0x455c68 = 2147483648 & _0x514633;
    _0x55f38d = 2147483648 & _0x9db24;
    _0x4bab8f = 1073741824 & _0x514633;
    _0x4ddd75 = 1073741824 & _0x9db24;
    _0x418387 = (1073741823 & _0x514633) + (1073741823 & _0x9db24);
    return _0x4bab8f & _0x4ddd75 ? 2147483648 ^ _0x418387 ^ _0x455c68 ^ _0x55f38d : _0x4bab8f | _0x4ddd75 ? 1073741824 & _0x418387 ? 3221225472 ^ _0x418387 ^ _0x455c68 ^ _0x55f38d : 1073741824 ^ _0x418387 ^ _0x455c68 ^ _0x55f38d : _0x418387 ^ _0x455c68 ^ _0x55f38d;
  }
  function _0xae0575(_0xc3aa6a, _0x75eae6, _0x57b7d4) {
    return _0xc3aa6a & _0x75eae6 | ~_0xc3aa6a & _0x57b7d4;
  }
  function _0x34fa4d(_0x3100a5, _0x1a0439, _0x807ec9) {
    return _0x3100a5 & _0x807ec9 | _0x1a0439 & ~_0x807ec9;
  }
  function _0x1dc201(_0x390be0, _0xff00e4, _0x308262) {
    return _0x390be0 ^ _0xff00e4 ^ _0x308262;
  }
  function _0x1a1f69(_0x193400, _0x32fbfd, _0x167d96) {
    return _0x32fbfd ^ (_0x193400 | ~_0x167d96);
  }
  function _0x2553a7(_0xf65948, _0x10bf7a, _0x1bab30, _0x7d75ec, _0x34263c, _0x190f67, _0x1e72a5) {
    _0xf65948 = _0x1fd0db(_0xf65948, _0x1fd0db(_0x1fd0db(_0xae0575(_0x10bf7a, _0x1bab30, _0x7d75ec), _0x34263c), _0x1e72a5));
    return _0x1fd0db(_0x4b692d(_0xf65948, _0x190f67), _0x10bf7a);
  }
  function _0x29042c(_0x494d6e, _0x2c1761, _0x3de31a, _0x1d7112, _0x1421a4, _0x7ca9f6, _0x4df38f) {
    _0x494d6e = _0x1fd0db(_0x494d6e, _0x1fd0db(_0x1fd0db(_0x34fa4d(_0x2c1761, _0x3de31a, _0x1d7112), _0x1421a4), _0x4df38f));
    return _0x1fd0db(_0x4b692d(_0x494d6e, _0x7ca9f6), _0x2c1761);
  }
  function _0x58b4fc(_0x502076, _0x4b29c3, _0x5db6c8, _0x4413d3, _0x49d52f, _0x54844b, _0xe605f) {
    _0x502076 = _0x1fd0db(_0x502076, _0x1fd0db(_0x1fd0db(_0x1dc201(_0x4b29c3, _0x5db6c8, _0x4413d3), _0x49d52f), _0xe605f));
    return _0x1fd0db(_0x4b692d(_0x502076, _0x54844b), _0x4b29c3);
  }
  function _0x3dfbc6(_0x2ac363, _0x522133, _0x5e9a95, _0x2aa8d4, _0x47ba8d, _0x14a88b, _0x5ac01d) {
    _0x2ac363 = _0x1fd0db(_0x2ac363, _0x1fd0db(_0x1fd0db(_0x1a1f69(_0x522133, _0x5e9a95, _0x2aa8d4), _0x47ba8d), _0x5ac01d));
    return _0x1fd0db(_0x4b692d(_0x2ac363, _0x14a88b), _0x522133);
  }
  function _0x1bfb65(_0xd6e35a) {
    for (var _0x718a43, _0x47bfaf = _0xd6e35a.length, _0x2b65c3 = _0x47bfaf + 8, _0x55cd98 = (_0x2b65c3 - _0x2b65c3 % 64) / 64, _0x4021c6 = 16 * (_0x55cd98 + 1), _0x171275 = new Array(_0x4021c6 - 1), _0x405bb6 = 0, _0xdf1cde = 0; _0x47bfaf > _0xdf1cde;) {
      _0x718a43 = (_0xdf1cde - _0xdf1cde % 4) / 4;
      _0x405bb6 = _0xdf1cde % 4 * 8;
      _0x171275[_0x718a43] = _0x171275[_0x718a43] | _0xd6e35a.charCodeAt(_0xdf1cde) << _0x405bb6;
      _0xdf1cde++;
    }
    _0x718a43 = (_0xdf1cde - _0xdf1cde % 4) / 4;
    _0x405bb6 = _0xdf1cde % 4 * 8;
    _0x171275[_0x718a43] = _0x171275[_0x718a43] | 128 << _0x405bb6;
    _0x171275[_0x4021c6 - 2] = _0x47bfaf << 3;
    _0x171275[_0x4021c6 - 1] = _0x47bfaf >>> 29;
    return _0x171275;
  }
  function _0x588b11(_0x4e65f7) {
    var _0x5f3fe9,
      _0x21474f,
      _0x1e564e = "",
      _0x1e96f7 = "";
    for (_0x21474f = 0; 3 >= _0x21474f; _0x21474f++) {
      _0x5f3fe9 = _0x4e65f7 >>> 8 * _0x21474f & 255;
      _0x1e96f7 = "0" + _0x5f3fe9.toString(16);
      _0x1e564e += _0x1e96f7.substr(_0x1e96f7.length - 2, 2);
    }
    return _0x1e564e;
  }
  function _0x5697c4(_0x48a83d) {
    _0x48a83d = _0x48a83d.replace(/\r\n/g, "\n");
    for (var _0x190845 = "", _0x1ae8a4 = 0; _0x1ae8a4 < _0x48a83d.length; _0x1ae8a4++) {
      var _0x5839fc = _0x48a83d.charCodeAt(_0x1ae8a4);
      128 > _0x5839fc ? _0x190845 += String.fromCharCode(_0x5839fc) : _0x5839fc > 127 && 2048 > _0x5839fc ? (_0x190845 += String.fromCharCode(_0x5839fc >> 6 | 192), _0x190845 += String.fromCharCode(63 & _0x5839fc | 128)) : (_0x190845 += String.fromCharCode(_0x5839fc >> 12 | 224), _0x190845 += String.fromCharCode(_0x5839fc >> 6 & 63 | 128), _0x190845 += String.fromCharCode(63 & _0x5839fc | 128));
    }
    return _0x190845;
  }
  var _0x552fd3,
    _0x5f3c5a,
    _0x3b541d,
    _0x1be1e5,
    _0x5047bd,
    _0x36e0f5,
    _0x16f246,
    _0x3387ac,
    _0x4d02d6,
    _0x3ecffa = [],
    _0xbabd1c = 7,
    _0x3c49ae = 12,
    _0x309e9a = 17,
    _0x4be28e = 22,
    _0x3da2cc = 5,
    _0x5cad67 = 9,
    _0x4a30bf = 14,
    _0x20ef33 = 20,
    _0xbdc7fc = 4,
    _0x4a19b3 = 11,
    _0x18b8e1 = 16,
    _0x4919fd = 23,
    _0x24e58c = 6,
    _0x26b224 = 10,
    _0x1527f3 = 15,
    _0x29770e = 21;
  for (_0x31301d = _0x5697c4(_0x31301d), _0x3ecffa = _0x1bfb65(_0x31301d), _0x36e0f5 = 1732584193, _0x16f246 = 4023233417, _0x3387ac = 2562383102, _0x4d02d6 = 271733878, _0x552fd3 = 0; _0x552fd3 < _0x3ecffa.length; _0x552fd3 += 16) {
    _0x5f3c5a = _0x36e0f5;
    _0x3b541d = _0x16f246;
    _0x1be1e5 = _0x3387ac;
    _0x5047bd = _0x4d02d6;
    _0x36e0f5 = _0x2553a7(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 0], _0xbabd1c, 3614090360);
    _0x4d02d6 = _0x2553a7(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 1], _0x3c49ae, 3905402710);
    _0x3387ac = _0x2553a7(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 2], _0x309e9a, 606105819);
    _0x16f246 = _0x2553a7(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 3], _0x4be28e, 3250441966);
    _0x36e0f5 = _0x2553a7(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 4], _0xbabd1c, 4118548399);
    _0x4d02d6 = _0x2553a7(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 5], _0x3c49ae, 1200080426);
    _0x3387ac = _0x2553a7(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 6], _0x309e9a, 2821735955);
    _0x16f246 = _0x2553a7(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 7], _0x4be28e, 4249261313);
    _0x36e0f5 = _0x2553a7(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 8], _0xbabd1c, 1770035416);
    _0x4d02d6 = _0x2553a7(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 9], _0x3c49ae, 2336552879);
    _0x3387ac = _0x2553a7(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 10], _0x309e9a, 4294925233);
    _0x16f246 = _0x2553a7(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 11], _0x4be28e, 2304563134);
    _0x36e0f5 = _0x2553a7(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 12], _0xbabd1c, 1804603682);
    _0x4d02d6 = _0x2553a7(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 13], _0x3c49ae, 4254626195);
    _0x3387ac = _0x2553a7(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 14], _0x309e9a, 2792965006);
    _0x16f246 = _0x2553a7(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 15], _0x4be28e, 1236535329);
    _0x36e0f5 = _0x29042c(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 1], _0x3da2cc, 4129170786);
    _0x4d02d6 = _0x29042c(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 6], _0x5cad67, 3225465664);
    _0x3387ac = _0x29042c(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 11], _0x4a30bf, 643717713);
    _0x16f246 = _0x29042c(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 0], _0x20ef33, 3921069994);
    _0x36e0f5 = _0x29042c(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 5], _0x3da2cc, 3593408605);
    _0x4d02d6 = _0x29042c(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 10], _0x5cad67, 38016083);
    _0x3387ac = _0x29042c(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 15], _0x4a30bf, 3634488961);
    _0x16f246 = _0x29042c(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 4], _0x20ef33, 3889429448);
    _0x36e0f5 = _0x29042c(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 9], _0x3da2cc, 568446438);
    _0x4d02d6 = _0x29042c(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 14], _0x5cad67, 3275163606);
    _0x3387ac = _0x29042c(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 3], _0x4a30bf, 4107603335);
    _0x16f246 = _0x29042c(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 8], _0x20ef33, 1163531501);
    _0x36e0f5 = _0x29042c(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 13], _0x3da2cc, 2850285829);
    _0x4d02d6 = _0x29042c(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 2], _0x5cad67, 4243563512);
    _0x3387ac = _0x29042c(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 7], _0x4a30bf, 1735328473);
    _0x16f246 = _0x29042c(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 12], _0x20ef33, 2368359562);
    _0x36e0f5 = _0x58b4fc(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 5], _0xbdc7fc, 4294588738);
    _0x4d02d6 = _0x58b4fc(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 8], _0x4a19b3, 2272392833);
    _0x3387ac = _0x58b4fc(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 11], _0x18b8e1, 1839030562);
    _0x16f246 = _0x58b4fc(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 14], _0x4919fd, 4259657740);
    _0x36e0f5 = _0x58b4fc(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 1], _0xbdc7fc, 2763975236);
    _0x4d02d6 = _0x58b4fc(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 4], _0x4a19b3, 1272893353);
    _0x3387ac = _0x58b4fc(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 7], _0x18b8e1, 4139469664);
    _0x16f246 = _0x58b4fc(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 10], _0x4919fd, 3200236656);
    _0x36e0f5 = _0x58b4fc(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 13], _0xbdc7fc, 681279174);
    _0x4d02d6 = _0x58b4fc(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 0], _0x4a19b3, 3936430074);
    _0x3387ac = _0x58b4fc(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 3], _0x18b8e1, 3572445317);
    _0x16f246 = _0x58b4fc(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 6], _0x4919fd, 76029189);
    _0x36e0f5 = _0x58b4fc(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 9], _0xbdc7fc, 3654602809);
    _0x4d02d6 = _0x58b4fc(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 12], _0x4a19b3, 3873151461);
    _0x3387ac = _0x58b4fc(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 15], _0x18b8e1, 530742520);
    _0x16f246 = _0x58b4fc(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 2], _0x4919fd, 3299628645);
    _0x36e0f5 = _0x3dfbc6(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 0], _0x24e58c, 4096336452);
    _0x4d02d6 = _0x3dfbc6(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 7], _0x26b224, 1126891415);
    _0x3387ac = _0x3dfbc6(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 14], _0x1527f3, 2878612391);
    _0x16f246 = _0x3dfbc6(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 5], _0x29770e, 4237533241);
    _0x36e0f5 = _0x3dfbc6(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 12], _0x24e58c, 1700485571);
    _0x4d02d6 = _0x3dfbc6(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 3], _0x26b224, 2399980690);
    _0x3387ac = _0x3dfbc6(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 10], _0x1527f3, 4293915773);
    _0x16f246 = _0x3dfbc6(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 1], _0x29770e, 2240044497);
    _0x36e0f5 = _0x3dfbc6(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 8], _0x24e58c, 1873313359);
    _0x4d02d6 = _0x3dfbc6(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 15], _0x26b224, 4264355552);
    _0x3387ac = _0x3dfbc6(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 6], _0x1527f3, 2734768916);
    _0x16f246 = _0x3dfbc6(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 13], _0x29770e, 1309151649);
    _0x36e0f5 = _0x3dfbc6(_0x36e0f5, _0x16f246, _0x3387ac, _0x4d02d6, _0x3ecffa[_0x552fd3 + 4], _0x24e58c, 4149444226);
    _0x4d02d6 = _0x3dfbc6(_0x4d02d6, _0x36e0f5, _0x16f246, _0x3387ac, _0x3ecffa[_0x552fd3 + 11], _0x26b224, 3174756917);
    _0x3387ac = _0x3dfbc6(_0x3387ac, _0x4d02d6, _0x36e0f5, _0x16f246, _0x3ecffa[_0x552fd3 + 2], _0x1527f3, 718787259);
    _0x16f246 = _0x3dfbc6(_0x16f246, _0x3387ac, _0x4d02d6, _0x36e0f5, _0x3ecffa[_0x552fd3 + 9], _0x29770e, 3951481745);
    _0x36e0f5 = _0x1fd0db(_0x36e0f5, _0x5f3c5a);
    _0x16f246 = _0x1fd0db(_0x16f246, _0x3b541d);
    _0x3387ac = _0x1fd0db(_0x3387ac, _0x1be1e5);
    _0x4d02d6 = _0x1fd0db(_0x4d02d6, _0x5047bd);
  }
  var _0x3fed78 = _0x588b11(_0x36e0f5) + _0x588b11(_0x16f246) + _0x588b11(_0x3387ac) + _0x588b11(_0x4d02d6);
  return _0x3fed78.toLowerCase();
}
function David_0x2303cf(_0x490a5b) {
  var _0x2bda16 = 8;
  var _0x1ec85b = 0;
  function _0x370b9b(_0x358b4d, _0x1dae59) {
    var _0x165ead = (_0x358b4d & 65535) + (_0x1dae59 & 65535);
    var _0x591f48 = (_0x358b4d >> 16) + (_0x1dae59 >> 16) + (_0x165ead >> 16);
    return _0x591f48 << 16 | _0x165ead & 65535;
  }
  function _0xca4856(_0x293e86, _0x36add0) {
    return _0x293e86 >>> _0x36add0 | _0x293e86 << 32 - _0x36add0;
  }
  function _0x1d5b55(_0x47cba8, _0x181f62) {
    return _0x47cba8 >>> _0x181f62;
  }
  function _0x26a289(_0x54c7bf, _0x53f2d1, _0x2dbe99) {
    return _0x54c7bf & _0x53f2d1 ^ ~_0x54c7bf & _0x2dbe99;
  }
  function _0x1f695d(_0x581613, _0x250d5d, _0x56c47d) {
    return _0x581613 & _0x250d5d ^ _0x581613 & _0x56c47d ^ _0x250d5d & _0x56c47d;
  }
  function _0x5de593(_0x41e6bb) {
    return _0xca4856(_0x41e6bb, 2) ^ _0xca4856(_0x41e6bb, 13) ^ _0xca4856(_0x41e6bb, 22);
  }
  function _0x3a04d2(_0x3b0ff8) {
    return _0xca4856(_0x3b0ff8, 6) ^ _0xca4856(_0x3b0ff8, 11) ^ _0xca4856(_0x3b0ff8, 25);
  }
  function _0x362055(_0x39ad32) {
    return _0xca4856(_0x39ad32, 7) ^ _0xca4856(_0x39ad32, 18) ^ _0x1d5b55(_0x39ad32, 3);
  }
  function _0x3ad850(_0x5d7ed0) {
    return _0xca4856(_0x5d7ed0, 17) ^ _0xca4856(_0x5d7ed0, 19) ^ _0x1d5b55(_0x5d7ed0, 10);
  }
  function _0x436ea4(_0x1136ab, _0x40455b) {
    var _0x1cf83a = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x41a105 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x128ca2 = new Array(64);
    var _0x4a53b0, _0x345fe4, _0x56c196, _0x5162ee, _0x2bb0ef, _0x308149, _0x41d77c, _0x296008;
    var _0xed50a3, _0x26f4c6;
    _0x1136ab[_0x40455b >> 5] |= 128 << 24 - _0x40455b % 32;
    _0x1136ab[(_0x40455b + 64 >> 9 << 4) + 15] = _0x40455b;
    for (var _0x5c9b00 = 0; _0x5c9b00 < _0x1136ab.length; _0x5c9b00 += 16) {
      _0x4a53b0 = _0x41a105[0];
      _0x345fe4 = _0x41a105[1];
      _0x56c196 = _0x41a105[2];
      _0x5162ee = _0x41a105[3];
      _0x2bb0ef = _0x41a105[4];
      _0x308149 = _0x41a105[5];
      _0x41d77c = _0x41a105[6];
      _0x296008 = _0x41a105[7];
      for (var _0x38bf90 = 0; _0x38bf90 < 64; _0x38bf90++) {
        if (_0x38bf90 < 16) {
          _0x128ca2[_0x38bf90] = _0x1136ab[_0x38bf90 + _0x5c9b00];
        } else {
          _0x128ca2[_0x38bf90] = _0x370b9b(_0x370b9b(_0x370b9b(_0x3ad850(_0x128ca2[_0x38bf90 - 2]), _0x128ca2[_0x38bf90 - 7]), _0x362055(_0x128ca2[_0x38bf90 - 15])), _0x128ca2[_0x38bf90 - 16]);
        }
        _0xed50a3 = _0x370b9b(_0x370b9b(_0x370b9b(_0x370b9b(_0x296008, _0x3a04d2(_0x2bb0ef)), _0x26a289(_0x2bb0ef, _0x308149, _0x41d77c)), _0x1cf83a[_0x38bf90]), _0x128ca2[_0x38bf90]);
        _0x26f4c6 = _0x370b9b(_0x5de593(_0x4a53b0), _0x1f695d(_0x4a53b0, _0x345fe4, _0x56c196));
        _0x296008 = _0x41d77c;
        _0x41d77c = _0x308149;
        _0x308149 = _0x2bb0ef;
        _0x2bb0ef = _0x370b9b(_0x5162ee, _0xed50a3);
        _0x5162ee = _0x56c196;
        _0x56c196 = _0x345fe4;
        _0x345fe4 = _0x4a53b0;
        _0x4a53b0 = _0x370b9b(_0xed50a3, _0x26f4c6);
      }
      _0x41a105[0] = _0x370b9b(_0x4a53b0, _0x41a105[0]);
      _0x41a105[1] = _0x370b9b(_0x345fe4, _0x41a105[1]);
      _0x41a105[2] = _0x370b9b(_0x56c196, _0x41a105[2]);
      _0x41a105[3] = _0x370b9b(_0x5162ee, _0x41a105[3]);
      _0x41a105[4] = _0x370b9b(_0x2bb0ef, _0x41a105[4]);
      _0x41a105[5] = _0x370b9b(_0x308149, _0x41a105[5]);
      _0x41a105[6] = _0x370b9b(_0x41d77c, _0x41a105[6]);
      _0x41a105[7] = _0x370b9b(_0x296008, _0x41a105[7]);
    }
    return _0x41a105;
  }
  function _0x258b87(_0x224c3c) {
    var _0x5381fe = Array();
    var _0x3c1f0c = (1 << _0x2bda16) - 1;
    for (var _0x1cd658 = 0; _0x1cd658 < _0x224c3c.length * _0x2bda16; _0x1cd658 += _0x2bda16) {
      _0x5381fe[_0x1cd658 >> 5] |= (_0x224c3c.charCodeAt(_0x1cd658 / _0x2bda16) & _0x3c1f0c) << 24 - _0x1cd658 % 32;
    }
    return _0x5381fe;
  }
  function _0x1a7b46(_0x19464b) {
    _0x19464b = _0x19464b.replace(/\r\n/g, "\n");
    var _0x33a89c = "";
    for (var _0x19961f = 0; _0x19961f < _0x19464b.length; _0x19961f++) {
      var _0x4fdbde = _0x19464b.charCodeAt(_0x19961f);
      if (_0x4fdbde < 128) {
        _0x33a89c += String.fromCharCode(_0x4fdbde);
      } else {
        if (_0x4fdbde > 127 && _0x4fdbde < 2048) {
          _0x33a89c += String.fromCharCode(_0x4fdbde >> 6 | 192);
          _0x33a89c += String.fromCharCode(_0x4fdbde & 63 | 128);
        } else {
          _0x33a89c += String.fromCharCode(_0x4fdbde >> 12 | 224);
          _0x33a89c += String.fromCharCode(_0x4fdbde >> 6 & 63 | 128);
          _0x33a89c += String.fromCharCode(_0x4fdbde & 63 | 128);
        }
      }
    }
    return _0x33a89c;
  }
  function _0x3f7cce(_0x56dbc5) {
    var _0xada9ef = _0x1ec85b ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x211ec3 = "";
    for (var _0x4d5852 = 0; _0x4d5852 < _0x56dbc5.length * 4; _0x4d5852++) {
      _0x211ec3 += _0xada9ef.charAt(_0x56dbc5[_0x4d5852 >> 2] >> (3 - _0x4d5852 % 4) * 8 + 4 & 15) + _0xada9ef.charAt(_0x56dbc5[_0x4d5852 >> 2] >> (3 - _0x4d5852 % 4) * 8 & 15);
    }
    return _0x211ec3;
  }
  _0x490a5b = _0x1a7b46(_0x490a5b);
  return _0x3f7cce(_0x436ea4(_0x258b87(_0x490a5b), _0x490a5b.length * _0x2bda16));
}
function David_0x4960da(_0x1b49ca) {
  function _0x307d61(_0x29636c, _0x1ae7cd) {
    var _0x1476ee = _0x29636c << _0x1ae7cd | _0x29636c >>> 32 - _0x1ae7cd;
    return _0x1476ee;
  }
  function _0x3da8e1(_0x1a72eb) {
    var _0x58f2b8 = "";
    var _0x3921a5;
    var _0x1118e8;
    var _0x5dbbe3;
    for (_0x3921a5 = 0; _0x3921a5 <= 6; _0x3921a5 += 2) {
      _0x1118e8 = _0x1a72eb >>> _0x3921a5 * 4 + 4 & 15;
      _0x5dbbe3 = _0x1a72eb >>> _0x3921a5 * 4 & 15;
      _0x58f2b8 += _0x1118e8.toString(16) + _0x5dbbe3.toString(16);
    }
    return _0x58f2b8;
  }
  function _0x461c91(_0xe16313) {
    var _0x20486a = "";
    var _0x3e2bf1;
    var _0x5566fc;
    for (_0x3e2bf1 = 7; _0x3e2bf1 >= 0; _0x3e2bf1--) {
      _0x5566fc = _0xe16313 >>> _0x3e2bf1 * 4 & 15;
      _0x20486a += _0x5566fc.toString(16);
    }
    return _0x20486a;
  }
  function _0x2e9f87(_0x2aff27) {
    _0x2aff27 = _0x2aff27.replace(/\r\n/g, "\n");
    var _0x203e7b = "";
    for (var _0x4f201f = 0; _0x4f201f < _0x2aff27.length; _0x4f201f++) {
      var _0x2c93b9 = _0x2aff27.charCodeAt(_0x4f201f);
      if (_0x2c93b9 < 128) {
        _0x203e7b += String.fromCharCode(_0x2c93b9);
      } else {
        if (_0x2c93b9 > 127 && _0x2c93b9 < 2048) {
          _0x203e7b += String.fromCharCode(_0x2c93b9 >> 6 | 192);
          _0x203e7b += String.fromCharCode(_0x2c93b9 & 63 | 128);
        } else {
          _0x203e7b += String.fromCharCode(_0x2c93b9 >> 12 | 224);
          _0x203e7b += String.fromCharCode(_0x2c93b9 >> 6 & 63 | 128);
          _0x203e7b += String.fromCharCode(_0x2c93b9 & 63 | 128);
        }
      }
    }
    return _0x203e7b;
  }
  var _0x2861bb;
  var _0x1e3e81, _0x18cb0e;
  var _0x368209 = new Array(80);
  var _0x37de90 = 1732584193;
  var _0x2a40a8 = 4023233417;
  var _0x45dc3e = 2562383102;
  var _0x3e800e = 271733878;
  var _0x17f9b4 = 3285377520;
  var _0x1db669, _0x56235c, _0x899c52, _0x3bda75, _0x2630d1;
  _0x1b49ca = _0x2e9f87(_0x1b49ca);
  var _0x587d13 = _0x1b49ca.length;
  var _0x2850cb = new Array();
  for (_0x1e3e81 = 0; _0x1e3e81 < _0x587d13 - 3; _0x1e3e81 += 4) {
    _0x18cb0e = _0x1b49ca.charCodeAt(_0x1e3e81) << 24 | _0x1b49ca.charCodeAt(_0x1e3e81 + 1) << 16 | _0x1b49ca.charCodeAt(_0x1e3e81 + 2) << 8 | _0x1b49ca.charCodeAt(_0x1e3e81 + 3);
    _0x2850cb.push(_0x18cb0e);
  }
  switch (_0x587d13 % 4) {
    case 0:
      _0x1e3e81 = 2147483648;
      break;
    case 1:
      _0x1e3e81 = _0x1b49ca.charCodeAt(_0x587d13 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x1e3e81 = _0x1b49ca.charCodeAt(_0x587d13 - 2) << 24 | _0x1b49ca.charCodeAt(_0x587d13 - 1) << 16 | 32768;
      break;
    case 3:
      _0x1e3e81 = _0x1b49ca.charCodeAt(_0x587d13 - 3) << 24 | _0x1b49ca.charCodeAt(_0x587d13 - 2) << 16 | _0x1b49ca.charCodeAt(_0x587d13 - 1) << 8 | 128;
      break;
  }
  _0x2850cb.push(_0x1e3e81);
  while (_0x2850cb.length % 16 != 14) {
    _0x2850cb.push(0);
  }
  _0x2850cb.push(_0x587d13 >>> 29);
  _0x2850cb.push(_0x587d13 << 3 & 4294967295);
  for (_0x2861bb = 0; _0x2861bb < _0x2850cb.length; _0x2861bb += 16) {
    for (_0x1e3e81 = 0; _0x1e3e81 < 16; _0x1e3e81++) {
      _0x368209[_0x1e3e81] = _0x2850cb[_0x2861bb + _0x1e3e81];
    }
    for (_0x1e3e81 = 16; _0x1e3e81 <= 79; _0x1e3e81++) {
      _0x368209[_0x1e3e81] = _0x307d61(_0x368209[_0x1e3e81 - 3] ^ _0x368209[_0x1e3e81 - 8] ^ _0x368209[_0x1e3e81 - 14] ^ _0x368209[_0x1e3e81 - 16], 1);
    }
    _0x1db669 = _0x37de90;
    _0x56235c = _0x2a40a8;
    _0x899c52 = _0x45dc3e;
    _0x3bda75 = _0x3e800e;
    _0x2630d1 = _0x17f9b4;
    for (_0x1e3e81 = 0; _0x1e3e81 <= 19; _0x1e3e81++) {
      _0x247ffe = _0x307d61(_0x1db669, 5) + (_0x56235c & _0x899c52 | ~_0x56235c & _0x3bda75) + _0x2630d1 + _0x368209[_0x1e3e81] + 1518500249 & 4294967295;
      _0x2630d1 = _0x3bda75;
      _0x3bda75 = _0x899c52;
      _0x899c52 = _0x307d61(_0x56235c, 30);
      _0x56235c = _0x1db669;
      _0x1db669 = _0x247ffe;
    }
    for (_0x1e3e81 = 20; _0x1e3e81 <= 39; _0x1e3e81++) {
      _0x247ffe = _0x307d61(_0x1db669, 5) + (_0x56235c ^ _0x899c52 ^ _0x3bda75) + _0x2630d1 + _0x368209[_0x1e3e81] + 1859775393 & 4294967295;
      _0x2630d1 = _0x3bda75;
      _0x3bda75 = _0x899c52;
      _0x899c52 = _0x307d61(_0x56235c, 30);
      _0x56235c = _0x1db669;
      _0x1db669 = _0x247ffe;
    }
    for (_0x1e3e81 = 40; _0x1e3e81 <= 59; _0x1e3e81++) {
      _0x247ffe = _0x307d61(_0x1db669, 5) + (_0x56235c & _0x899c52 | _0x56235c & _0x3bda75 | _0x899c52 & _0x3bda75) + _0x2630d1 + _0x368209[_0x1e3e81] + 2400959708 & 4294967295;
      _0x2630d1 = _0x3bda75;
      _0x3bda75 = _0x899c52;
      _0x899c52 = _0x307d61(_0x56235c, 30);
      _0x56235c = _0x1db669;
      _0x1db669 = _0x247ffe;
    }
    for (_0x1e3e81 = 60; _0x1e3e81 <= 79; _0x1e3e81++) {
      _0x247ffe = _0x307d61(_0x1db669, 5) + (_0x56235c ^ _0x899c52 ^ _0x3bda75) + _0x2630d1 + _0x368209[_0x1e3e81] + 3395469782 & 4294967295;
      _0x2630d1 = _0x3bda75;
      _0x3bda75 = _0x899c52;
      _0x899c52 = _0x307d61(_0x56235c, 30);
      _0x56235c = _0x1db669;
      _0x1db669 = _0x247ffe;
    }
    _0x37de90 = _0x37de90 + _0x1db669 & 4294967295;
    _0x2a40a8 = _0x2a40a8 + _0x56235c & 4294967295;
    _0x45dc3e = _0x45dc3e + _0x899c52 & 4294967295;
    _0x3e800e = _0x3e800e + _0x3bda75 & 4294967295;
    _0x17f9b4 = _0x17f9b4 + _0x2630d1 & 4294967295;
  }
  var _0x247ffe = _0x461c91(_0x37de90) + _0x461c91(_0x2a40a8) + _0x461c91(_0x45dc3e) + _0x461c91(_0x3e800e) + _0x461c91(_0x17f9b4);
  return _0x247ffe.toLowerCase();
}
function David_0x3593b7() {
  var _0x554b0a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x5e116b) {
    var _0x3b8ff8 = "";
    var _0x24aee0, _0x2c14e2, _0x475f10, _0x2fde7c, _0x257dad, _0x4c4719, _0x42cf0d;
    var _0x2b7077 = 0;
    _0x5e116b = utf8Encode(_0x5e116b);
    while (_0x2b7077 < _0x5e116b.length) {
      _0x24aee0 = _0x5e116b.charCodeAt(_0x2b7077++);
      _0x2c14e2 = _0x5e116b.charCodeAt(_0x2b7077++);
      _0x475f10 = _0x5e116b.charCodeAt(_0x2b7077++);
      _0x2fde7c = _0x24aee0 >> 2;
      _0x257dad = (_0x24aee0 & 3) << 4 | _0x2c14e2 >> 4;
      _0x4c4719 = (_0x2c14e2 & 15) << 2 | _0x475f10 >> 6;
      _0x42cf0d = _0x475f10 & 63;
      if (isNaN(_0x2c14e2)) {
        _0x4c4719 = _0x42cf0d = 64;
      } else {
        if (isNaN(_0x475f10)) {
          _0x42cf0d = 64;
        }
      }
      _0x3b8ff8 = _0x3b8ff8 + _0x554b0a.charAt(_0x2fde7c) + _0x554b0a.charAt(_0x257dad) + _0x554b0a.charAt(_0x4c4719) + _0x554b0a.charAt(_0x42cf0d);
    }
    return _0x3b8ff8;
  };
  this.decode = function (_0xf46b82) {
    var _0x465e26 = "";
    var _0x29a75f, _0xe9ca80, _0x24e3a7;
    var _0x4024e8, _0x3a1c39, _0x2a0211, _0x5487ab;
    var _0x51c216 = 0;
    _0xf46b82 = _0xf46b82.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x51c216 < _0xf46b82.length) {
      _0x4024e8 = _0x554b0a.indexOf(_0xf46b82.charAt(_0x51c216++));
      _0x3a1c39 = _0x554b0a.indexOf(_0xf46b82.charAt(_0x51c216++));
      _0x2a0211 = _0x554b0a.indexOf(_0xf46b82.charAt(_0x51c216++));
      _0x5487ab = _0x554b0a.indexOf(_0xf46b82.charAt(_0x51c216++));
      _0x29a75f = _0x4024e8 << 2 | _0x3a1c39 >> 4;
      _0xe9ca80 = (_0x3a1c39 & 15) << 4 | _0x2a0211 >> 2;
      _0x24e3a7 = (_0x2a0211 & 3) << 6 | _0x5487ab;
      _0x465e26 = _0x465e26 + String.fromCharCode(_0x29a75f);
      if (_0x2a0211 !== 64) {
        _0x465e26 = _0x465e26 + String.fromCharCode(_0xe9ca80);
      }
      if (_0x5487ab !== 64) {
        _0x465e26 = _0x465e26 + String.fromCharCode(_0x24e3a7);
      }
    }
    _0x465e26 = utf8Decode(_0x465e26);
    return _0x465e26;
  };
  utf8Encode = function (_0x44a758) {
    _0x44a758 = _0x44a758.replace(/\r\n/g, "\n");
    var _0xc3906e = "";
    for (var _0x572505 = 0; _0x572505 < _0x44a758.length; _0x572505++) {
      var _0x11a74e = _0x44a758.charCodeAt(_0x572505);
      if (_0x11a74e < 128) {
        _0xc3906e += String.fromCharCode(_0x11a74e);
      } else {
        if (_0x11a74e > 127 && _0x11a74e < 2048) {
          _0xc3906e += String.fromCharCode(_0x11a74e >> 6 | 192);
          _0xc3906e += String.fromCharCode(_0x11a74e & 63 | 128);
        } else {
          _0xc3906e += String.fromCharCode(_0x11a74e >> 12 | 224);
          _0xc3906e += String.fromCharCode(_0x11a74e >> 6 & 63 | 128);
          _0xc3906e += String.fromCharCode(_0x11a74e & 63 | 128);
        }
      }
    }
    return _0xc3906e;
  };
  utf8Decode = function (_0x5f045f) {
    var _0x8de16e = "";
    var _0x3aeb5c = 0;
    var _0xcf780a = 0;
    var _0x28c660 = 0;
    var _0x34b88f = 0;
    while (_0x3aeb5c < _0x5f045f.length) {
      _0xcf780a = _0x5f045f.charCodeAt(_0x3aeb5c);
      if (_0xcf780a < 128) {
        _0x8de16e += String.fromCharCode(_0xcf780a);
        _0x3aeb5c++;
      } else {
        if (_0xcf780a > 191 && _0xcf780a < 224) {
          _0x28c660 = _0x5f045f.charCodeAt(_0x3aeb5c + 1);
          _0x8de16e += String.fromCharCode((_0xcf780a & 31) << 6 | _0x28c660 & 63);
          _0x3aeb5c += 2;
        } else {
          _0x28c660 = _0x5f045f.charCodeAt(_0x3aeb5c + 1);
          _0x34b88f = _0x5f045f.charCodeAt(_0x3aeb5c + 2);
          _0x8de16e += String.fromCharCode((_0xcf780a & 15) << 12 | (_0x28c660 & 63) << 6 | _0x34b88f & 63);
          _0x3aeb5c += 3;
        }
      }
    }
    return _0x8de16e;
  };
}
function David_0x3008f4(_0x19d829, _0x53f6c1) {
  class _0x2deb0c {
    constructor(_0x5d0bc6) {
      this.env = _0x5d0bc6;
    }
    send(_0x53ad71, _0x1880bd = "GET") {
      _0x53ad71 = typeof _0x53ad71 === "string" ? {
        url: _0x53ad71
      } : _0x53ad71;
      let _0x34fc5d = this.get;
      if (_0x1880bd === "POST") {
        _0x34fc5d = this.post;
      }
      return new Promise((_0x530ab5, _0x169c42) => {
        _0x34fc5d.call(this, _0x53ad71, (_0x30f11e, _0x367c5b, _0x839b1e) => {
          if (_0x30f11e) {
            _0x169c42(_0x30f11e);
          } else {
            _0x530ab5(_0x367c5b);
          }
        });
      });
    }
    get(_0x2b0d11) {
      return this.send.call(this.env, _0x2b0d11);
    }
    post(_0x1591ae) {
      return this.send.call(this.env, _0x1591ae, "POST");
    }
  }
  return new class {
    constructor(_0x4c9e66, _0x3cb0fc) {
      this.name = _0x4c9e66;
      this.http = new _0x2deb0c(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3cb0fc);
      const _0x14ee35 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x14ee35);
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
    toObj(_0x288dd4, _0x22bd7a = null) {
      try {
        return JSON.parse(_0x288dd4);
      } catch {
        return _0x22bd7a;
      }
    }
    toStr(_0x3d0920, _0xffcb78 = null) {
      try {
        return JSON.stringify(_0x3d0920);
      } catch {
        return _0xffcb78;
      }
    }
    getjson(_0x54bcc2, _0x109c0c) {
      let _0xb6b51 = _0x109c0c;
      const _0x3d09b1 = this.getdata(_0x54bcc2);
      if (_0x3d09b1) {
        try {
          _0xb6b51 = JSON.parse(this.getdata(_0x54bcc2));
        } catch {}
      }
      return _0xb6b51;
    }
    setjson(_0x20e437, _0x31b6c7) {
      try {
        return this.setdata(JSON.stringify(_0x20e437), _0x31b6c7);
      } catch {
        return false;
      }
    }
    getScript(_0x4aa9aa) {
      return new Promise(_0x16b7e6 => {
        const _0x2bbbcc = {
          url: _0x4aa9aa
        };
        this.get(_0x2bbbcc, (_0x5ad60f, _0x56b529, _0x557443) => _0x16b7e6(_0x557443));
      });
    }
    runScript(_0x4dcd62, _0x95c27c) {
      return new Promise(_0x235094 => {
        let _0x336746 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x336746 = _0x336746 ? _0x336746.replace(/\n/g, "").trim() : _0x336746;
        let _0x2c3591 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2c3591 = _0x2c3591 ? _0x2c3591 * 1 : 20;
        _0x2c3591 = _0x95c27c && _0x95c27c.timeout ? _0x95c27c.timeout : _0x2c3591;
        const [_0x1e209b, _0xe6c97d] = _0x336746.split("@");
        const _0x354048 = {
          script_text: _0x4dcd62,
          mock_type: "cron",
          timeout: _0x2c3591
        };
        const _0x1a80e4 = {
          "X-Key": _0x1e209b,
          Accept: "*/*"
        };
        const _0x395397 = {
          url: "http: //" + _0xe6c97d + "/v1/scripting/evaluate",
          body: _0x354048,
          headers: _0x1a80e4
        };
        this.post(_0x395397, (_0x399809, _0x8fbdba, _0x345a3c) => _0x235094(_0x345a3c));
      }).catch(_0x132779 => this.logErr(_0x132779));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x450b1b = this.path.resolve(this.dataFile);
        const _0x197008 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x47bf50 = this.fs.existsSync(_0x450b1b);
        const _0x13d0df = !_0x47bf50 && this.fs.existsSync(_0x197008);
        if (_0x47bf50 || _0x13d0df) {
          const _0x14f4c3 = _0x47bf50 ? _0x450b1b : _0x197008;
          try {
            return JSON.parse(this.fs.readFileSync(_0x14f4c3));
          } catch (_0x54de60) {
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
        const _0x57d607 = this.path.resolve(this.dataFile);
        const _0x39d3ef = this.path.resolve(process.cwd(), this.dataFile);
        const _0x4f8516 = this.fs.existsSync(_0x57d607);
        const _0x240a9f = !_0x4f8516 && this.fs.existsSync(_0x39d3ef);
        const _0x4a81ed = JSON.stringify(this.data);
        if (_0x4f8516) {
          this.fs.writeFileSync(_0x57d607, _0x4a81ed);
        } else {
          if (_0x240a9f) {
            this.fs.writeFileSync(_0x39d3ef, _0x4a81ed);
          } else {
            this.fs.writeFileSync(_0x57d607, _0x4a81ed);
          }
        }
      }
    }
    lodash_get(_0x314c17, _0x3cd457, _0x312a4e = undefined) {
      const _0x130f71 = _0x3cd457.replace(/[(d+)]/g, ".$1").split(".");
      let _0x2bf10b = _0x314c17;
      for (const _0x2cce7d of _0x130f71) {
        _0x2bf10b = Object(_0x2bf10b)[_0x2cce7d];
        if (_0x2bf10b === undefined) {
          return _0x312a4e;
        }
      }
      return _0x2bf10b;
    }
    lodash_set(_0x2fce8d, _0x5a57c8, _0x5a5b9a) {
      if (Object(_0x2fce8d) !== _0x2fce8d) {
        return _0x2fce8d;
      }
      if (!Array.isArray(_0x5a57c8)) {
        _0x5a57c8 = _0x5a57c8.toString().match(/[^.[]]+/g) || [];
      }
      _0x5a57c8.slice(0, -1).reduce((_0x381e6c, _0x3ad77c, _0xc7a1cb) => Object(_0x381e6c[_0x3ad77c]) === _0x381e6c[_0x3ad77c] ? _0x381e6c[_0x3ad77c] : _0x381e6c[_0x3ad77c] = Math.abs(_0x5a57c8[_0xc7a1cb + 1]) >> 0 === +_0x5a57c8[_0xc7a1cb + 1] ? [] : {}, _0x2fce8d)[_0x5a57c8[_0x5a57c8.length - 1]] = _0x5a5b9a;
      return _0x2fce8d;
    }
    getdata(_0x2ec46e) {
      let _0x4a1d42 = this.getval(_0x2ec46e);
      if (/^@/.test(_0x2ec46e)) {
        const [, _0x38fce4, _0x221176] = /^@(.*?).(.*?)$/.exec(_0x2ec46e);
        const _0x3972f2 = _0x38fce4 ? this.getval(_0x38fce4) : "";
        if (_0x3972f2) {
          try {
            const _0x48cebe = JSON.parse(_0x3972f2);
            _0x4a1d42 = _0x48cebe ? this.lodash_get(_0x48cebe, _0x221176, "") : _0x4a1d42;
          } catch (_0x118a09) {
            _0x4a1d42 = "";
          }
        }
      }
      return _0x4a1d42;
    }
    setdata(_0x5de338, _0x26a9c8) {
      let _0x1c9c91 = false;
      if (/^@/.test(_0x26a9c8)) {
        const [, _0x4b37d9, _0x5e2708] = /^@(.*?).(.*?)$/.exec(_0x26a9c8);
        const _0x57d384 = this.getval(_0x4b37d9);
        const _0x2e6f49 = _0x4b37d9 ? _0x57d384 === "null" ? null : _0x57d384 || "{}" : "{}";
        try {
          const _0x4ae8ae = JSON.parse(_0x2e6f49);
          this.lodash_set(_0x4ae8ae, _0x5e2708, _0x5de338);
          _0x1c9c91 = this.setval(JSON.stringify(_0x4ae8ae), _0x4b37d9);
        } catch (_0x4cd21e) {
          const _0xbb6e08 = {};
          this.lodash_set(_0xbb6e08, _0x5e2708, _0x5de338);
          _0x1c9c91 = this.setval(JSON.stringify(_0xbb6e08), _0x4b37d9);
        }
      } else {
        _0x1c9c91 = this.setval(_0x5de338, _0x26a9c8);
      }
      return _0x1c9c91;
    }
    getval(_0x4d7d5a) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x4d7d5a);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x4d7d5a);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x4d7d5a];
          } else {
            return this.data && this.data[_0x4d7d5a] || null;
          }
        }
      }
    }
    setval(_0x2f320d, _0x4a0b8f) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x2f320d, _0x4a0b8f);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x2f320d, _0x4a0b8f);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x4a0b8f] = _0x2f320d;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x4a0b8f] || null;
          }
        }
      }
    }
    initGotEnv(_0x2deec3) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x2deec3) {
        _0x2deec3.headers = _0x2deec3.headers ? _0x2deec3.headers : {};
        if (undefined === _0x2deec3.headers.Cookie && undefined === _0x2deec3.cookieJar) {
          _0x2deec3.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x41ea1f, _0x291349 = () => {}) {
      if (_0x41ea1f.headers) {
        delete _0x41ea1f.headers["Content-Type"];
        delete _0x41ea1f.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x41ea1f.headers = _0x41ea1f.headers || {};
          const _0x121694 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x41ea1f.headers, _0x121694);
        }
        $httpClient.get(_0x41ea1f, (_0x3e1af8, _0x3435b9, _0x249d5e) => {
          if (!_0x3e1af8 && _0x3435b9) {
            _0x3435b9.body = _0x249d5e;
            _0x3435b9.statusCode = _0x3435b9.status;
          }
          _0x291349(_0x3e1af8, _0x3435b9, _0x249d5e);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x41ea1f.opts = _0x41ea1f.opts || {};
            const _0x566d2a = {
              hints: false
            };
            Object.assign(_0x41ea1f.opts, _0x566d2a);
          }
          $task.fetch(_0x41ea1f).then(_0x118096 => {
            const {
              statusCode: _0x1f8dea,
              statusCode,
              headers,
              body
            } = _0x118096;
            const _0x5676d7 = {
              status: _0x1f8dea,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x291349(null, _0x5676d7, body);
          }, _0x2dc306 => _0x291349(_0x2dc306));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x41ea1f);
            this.got(_0x41ea1f).on("redirect", (_0x57acb9, _0x5c9d88) => {
              try {
                if (_0x57acb9.headers["set-cookie"]) {
                  const _0x54a5e8 = _0x57acb9.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x54a5e8) {
                    this.ckjar.setCookieSync(_0x54a5e8, null);
                  }
                  _0x5c9d88.cookieJar = this.ckjar;
                }
              } catch (_0x31e44a) {
                this.logErr(_0x31e44a);
              }
            }).then(_0x4e5be7 => {
              const {
                statusCode: _0x18ed3b,
                statusCode,
                headers,
                body
              } = _0x4e5be7;
              const _0xd401d7 = {
                status: _0x18ed3b,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x291349(null, _0xd401d7, body);
            }, _0x228252 => {
              const {
                message: _0x2b6cb4,
                response: _0x8a710
              } = _0x228252;
              _0x291349(_0x2b6cb4, _0x8a710, _0x8a710 && _0x8a710.body);
            });
          }
        }
      }
    }
    post(_0x1ea723, _0x473c7e = () => {}) {
      const _0xcf0945 = _0x1ea723.method ? _0x1ea723.method.toLocaleLowerCase() : "post";
      if (_0x1ea723.body && _0x1ea723.headers && !_0x1ea723.headers["Content-Type"]) {
        _0x1ea723.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x1ea723.headers) {
        delete _0x1ea723.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x1ea723.headers = _0x1ea723.headers || {};
          const _0x241a95 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x1ea723.headers, _0x241a95);
        }
        $httpClient[_0xcf0945](_0x1ea723, (_0x4e0e0c, _0x44faa2, _0x1317bc) => {
          if (!_0x4e0e0c && _0x44faa2) {
            _0x44faa2.body = _0x1317bc;
            _0x44faa2.statusCode = _0x44faa2.status;
          }
          _0x473c7e(_0x4e0e0c, _0x44faa2, _0x1317bc);
        });
      } else {
        if (this.isQuanX()) {
          _0x1ea723.method = _0xcf0945;
          if (this.isNeedRewrite) {
            _0x1ea723.opts = _0x1ea723.opts || {};
            const _0x82928c = {
              hints: false
            };
            Object.assign(_0x1ea723.opts, _0x82928c);
          }
          $task.fetch(_0x1ea723).then(_0x288fa2 => {
            const {
              statusCode: _0x943fbb,
              statusCode,
              headers,
              body
            } = _0x288fa2;
            const _0x40807b = {
              status: _0x943fbb,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x473c7e(null, _0x40807b, body);
          }, _0x36c794 => _0x473c7e(_0x36c794));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x1ea723);
            const {
              url,
              ..._0x3c6716
            } = _0x1ea723;
            this.got[_0xcf0945](url, _0x3c6716).then(_0x3c779c => {
              const {
                statusCode: _0x4de8cc,
                statusCode,
                headers,
                body
              } = _0x3c779c;
              const _0x41efd6 = {
                status: _0x4de8cc,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x473c7e(null, _0x41efd6, body);
            }, _0x4abc1a => {
              const {
                message: _0x16d0c6,
                response: _0x3cedf3
              } = _0x4abc1a;
              _0x473c7e(_0x16d0c6, _0x3cedf3, _0x3cedf3 && _0x3cedf3.body);
            });
          }
        }
      }
    }
    put(_0x6e6d1b, _0x42a34a = () => {}) {
      const _0x2137dd = _0x6e6d1b.method ? _0x6e6d1b.method.toLocaleLowerCase() : "put";
      if (_0x6e6d1b.body && _0x6e6d1b.headers && !_0x6e6d1b.headers["Content-Type"]) {
        _0x6e6d1b.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x6e6d1b.headers) {
        delete _0x6e6d1b.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x6e6d1b.headers = _0x6e6d1b.headers || {};
          const _0x383894 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x6e6d1b.headers, _0x383894);
        }
        $httpClient[_0x2137dd](_0x6e6d1b, (_0x525d65, _0x36cab0, _0x2a11d4) => {
          if (!_0x525d65 && _0x36cab0) {
            _0x36cab0.body = _0x2a11d4;
            _0x36cab0.statusCode = _0x36cab0.status;
          }
          _0x42a34a(_0x525d65, _0x36cab0, _0x2a11d4);
        });
      } else {
        if (this.isQuanX()) {
          _0x6e6d1b.method = _0x2137dd;
          if (this.isNeedRewrite) {
            _0x6e6d1b.opts = _0x6e6d1b.opts || {};
            const _0x1bf6ec = {
              hints: false
            };
            Object.assign(_0x6e6d1b.opts, _0x1bf6ec);
          }
          $task.fetch(_0x6e6d1b).then(_0x24a81b => {
            const {
              statusCode: _0x23e8fc,
              statusCode,
              headers,
              body
            } = _0x24a81b;
            const _0x59ac52 = {
              status: _0x23e8fc,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x42a34a(null, _0x59ac52, body);
          }, _0x18cfe2 => _0x42a34a(_0x18cfe2));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x6e6d1b);
            const {
              url,
              ..._0x21c1c8
            } = _0x6e6d1b;
            this.got[_0x2137dd](url, _0x21c1c8).then(_0x3ba33a => {
              const {
                statusCode: _0x1d571a,
                statusCode,
                headers,
                body
              } = _0x3ba33a;
              const _0x25f01f = {
                status: _0x1d571a,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x42a34a(null, _0x25f01f, body);
            }, _0x4e5b18 => {
              const {
                message: _0x55ec9c,
                response: _0x2bab0f
              } = _0x4e5b18;
              _0x42a34a(_0x55ec9c, _0x2bab0f, _0x2bab0f && _0x2bab0f.body);
            });
          }
        }
      }
    }
    time(_0xb43057, _0x166bb0 = null) {
      const _0x4d8eb5 = _0x166bb0 ? new Date(_0x166bb0) : new Date();
      const _0x56c084 = {
        "M+": _0x4d8eb5.getMonth() + 1,
        "d+": _0x4d8eb5.getDate(),
        "H+": _0x4d8eb5.getHours(),
        "m+": _0x4d8eb5.getMinutes(),
        "s+": _0x4d8eb5.getSeconds(),
        "q+": Math.floor((_0x4d8eb5.getMonth() + 3) / 3),
        S: _0x4d8eb5.getMilliseconds()
      };
      if (/(y+)/.test(_0xb43057)) {
        _0xb43057 = _0xb43057.replace(RegExp.$1, (_0x4d8eb5.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x40a562 in _0x56c084) if (new RegExp("(" + _0x40a562 + ")").test(_0xb43057)) {
        _0xb43057 = _0xb43057.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x56c084[_0x40a562] : ("00" + _0x56c084[_0x40a562]).substr(("" + _0x56c084[_0x40a562]).length));
      }
      return _0xb43057;
    }
    msg(_0x57ae73 = _0x19d829, _0x90084c = "", _0x29e505 = "", _0x18a222) {
      const _0x9e0fee = _0x3862a2 => {
        if (!_0x3862a2) {
          return _0x3862a2;
        }
        if (typeof _0x3862a2 === "string") {
          if (this.isLoon()) {
            return _0x3862a2;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x3862a2
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x3862a2
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x3862a2 === "object") {
            if (this.isLoon()) {
              let _0x19cfc9 = _0x3862a2.openUrl || _0x3862a2.url || _0x3862a2["open-url"];
              let _0x656572 = _0x3862a2.mediaUrl || _0x3862a2["media-url"];
              const _0x3c2430 = {
                openUrl: _0x19cfc9,
                mediaUrl: _0x656572
              };
              return _0x3c2430;
            } else {
              if (this.isQuanX()) {
                let _0x14c314 = _0x3862a2["open-url"] || _0x3862a2.url || _0x3862a2.openUrl;
                let _0x22c766 = _0x3862a2["media-url"] || _0x3862a2.mediaUrl;
                const _0x251563 = {
                  "open-url": _0x14c314,
                  "media-url": _0x22c766
                };
                return _0x251563;
              } else {
                if (this.isSurge()) {
                  let _0x33d795 = _0x3862a2.url || _0x3862a2.openUrl || _0x3862a2["open-url"];
                  const _0x1406e3 = {
                    url: _0x33d795
                  };
                  return _0x1406e3;
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
          $notification.post(_0x57ae73, _0x90084c, _0x29e505, _0x9e0fee(_0x18a222));
        } else {
          if (this.isQuanX()) {
            $notify(_0x57ae73, _0x90084c, _0x29e505, _0x9e0fee(_0x18a222));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x1c9d02 = ["", "==============📣系统通知📣=============="];
        _0x1c9d02.push(_0x57ae73);
        _0x90084c ? _0x1c9d02.push(_0x90084c) : "";
        _0x29e505 ? _0x1c9d02.push(_0x29e505) : "";
        console.log(_0x1c9d02.join("\n"));
        this.logs = this.logs.concat(_0x1c9d02);
      }
    }
    log(..._0x1bdf60) {
      if (_0x1bdf60.length > 0) {
        this.logs = [...this.logs, ..._0x1bdf60];
      }
      console.log(_0x1bdf60.join(this.logSeparator));
    }
    logErr(_0x27a6f8, _0x59f6d3) {
      const _0x150a43 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x150a43) {
        this.log("", "❗️" + this.name + ", 错误!", _0x27a6f8);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x27a6f8.stack);
      }
    }
    wait(_0x339812) {
      return new Promise(_0x494f27 => setTimeout(_0x494f27, _0x339812));
    }
    done(_0xb4c6dd = {}) {
      const _0x1cb634 = new Date().getTime();
      const _0xbda056 = (_0x1cb634 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0xbda056 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0xb4c6dd);
      }
    }
  }(_0x19d829, _0x53f6c1);
}