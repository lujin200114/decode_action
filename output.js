//Sun Dec 29 2024 01:55:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x2eceac = new David_0x26fea5("薏米短剧");
const David_0x2659a1 = "V1.0.0";
const David_0x450eea = "ymdjapp";
let David_0x2cd75d = David_0x2eceac.getjson(David_0x450eea, []);
const David_0x9166d7 = David_0x2eceac.isNode() ? require("fs") : "";
const David_0x2ffd5a = David_0x2eceac.isNode() ? require("crypto") : "";
const David_0x2c8888 = David_0x2eceac.isNode() ? require("ws") : "";
const David_0x26a3a0 = "david_cookies.js";
if (David_0x2eceac.isNode() && !David_0x9166d7.existsSync(David_0x26a3a0)) {
  David_0x2eceac.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x9166d7.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x46d8b7 => {});
}
const David_0x57a5a9 = David_0x2eceac.isNode() ? require("http") : "";
const David_0x2655af = David_0x2eceac.isNode() ? require("./sendNotify") : "";
const David_0x4a55db = David_0x2eceac.isNode() ? require("./david_cookies") : "";
let David_0x272419 = David_0x2eceac.getdata("tguserid") || 1;
let David_0x4b44bc = David_0x2eceac.getdata("ymdjactivecode") || 0;
let David_0x12f39f = David_0x2eceac.getval("ymdjuserck") || 1;
let David_0x59d7c6 = David_0x2eceac.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x2eceac.getval("apiHosts")) {
  David_0x59d7c6 = David_0x2eceac.getval("apiHosts");
}
const David_0x467fe5 = 0;
let David_0x3c5ab3 = David_0x2eceac.getval("tz") || "1";
var David_0x202d94 = "";
var David_0x2f55bd = "";
let David_0xb16cc3 = [];
let David_0x3966d6 = [];
let David_0x54bab8 = [];
let David_0x408bd3 = [];
let David_0x5afb30 = [];
let David_0x26f5c4 = [];
let David_0x533c35 = [];
let David_0x388d11 = [];
let David_0x35ae2e = [];
let David_0x2b6fcf = [];
let David_0x2195bf = [];
let David_0x1db2cb = [];
let David_0xf8e4c4 = "";
let David_0xb05a56 = "";
let David_0x4e1d7a = "";
let David_0xc84be9 = "";
let David_0x47dc72 = "";
let David_0x17e95a = "";
let David_0x5f53fd = "";
let David_0x520ffb = "";
let David_0x141b86 = 1;
let David_0x3e2a65 = 1;
let David_0x236b27 = 1;
let David_0x225893 = 1;
let David_0x551c0b = "";
let David_0x57954a = "";
let David_0x2824c8 = 3;
let David_0x25941d = "";
if (David_0x2eceac.isNode()) {
  if (process.env.YMDJAPP) {
    David_0x2cd75d = JSON.parse(process.env.YMDJAPP);
  } else {
    David_0x2cd75d = David_0x4a55db.YMDJ;
  }
  David_0x272419 = process.env.TGUSERID;
  David_0x4b44bc = process.env.YMDJACTIVECODE;
  if (process.env.APIHOST) {
    David_0x59d7c6 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x59d7c6 = process.env.APIHOSTS;
  }
  David_0x202d94 = new Date(new Date().getTime()).getHours();
  David_0x2f55bd = new Date(new Date().getTime()).getMinutes();
  David_0x2eceac.log("🔔 当前环境: Node, 当前时间：" + David_0x202d94 + "点");
} else {
  David_0x202d94 = new Date().getHours();
  David_0x2f55bd = new Date().getMinutes();
  David_0x2eceac.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x202d94 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x4015c3();
  } else {
    if (!David_0x2cd75d) {
      David_0x2eceac.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x2eceac.log("📢 开始检测服务器接口状态>>>");
    let _0x4afb5e = false;
    const _0x447223 = David_0x59d7c6.split("&");
    const _0x3ed403 = _0x447223.length;
    for (let _0x57c8f8 = 0; _0x57c8f8 < _0x3ed403; _0x57c8f8++) {
      if (David_0x2eceac.isNode()) {
        _0x4afb5e = await David_0x302b93("" + _0x447223[_0x57c8f8], 2500);
      } else {
        _0x4afb5e = await David_0x3bc0a7("" + _0x447223[_0x57c8f8], 2500);
      }
      if (_0x4afb5e == true) {
        David_0x59d7c6 = _0x447223[_0x57c8f8];
        David_0x2eceac.log("📢 接口" + (_0x57c8f8 + 1) + "[" + _0x447223[_0x57c8f8] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x57c8f8 == _0x3ed403 - 1 && _0x4afb5e == false) {
        David_0x2eceac.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x2eceac.msg(David_0x2eceac.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x4b44bc || !David_0x272419 || David_0x272419 == 1 || David_0x4b44bc == 0 || David_0x4b44bc.length != 32) {
      David_0x2eceac.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x1cb4fb(David_0x450eea, David_0x272419, David_0x4b44bc);
    David_0x2eceac.log("📢 " + David_0x17e95a);
    David_0x2eceac.log("🔔 当前脚本版本号: " + David_0x2659a1 + "，最新版本号: " + David_0xc84be9);
    if (David_0x25941d != "") {
      let _0x3fb36c = new Date(David_0x25941d).getTime();
      let _0x147761 = new Date().getTime();
      if (_0x147761 > _0x3fb36c) {
        David_0x2eceac.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x2659a1 < David_0xc84be9) {
      David_0x2eceac.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x5f1789("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x4e1d7a != true) {
      David_0x2eceac.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x551c0b != true) {
      David_0x2eceac.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0xb05a56 != true) {
      David_0x2eceac.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x520ffb == true) {
      David_0x2eceac.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x2eceac.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x25941d != "") {
      if (David_0x520ffb == true) {
        David_0x2eceac.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x25b4f8 = new Date(David_0x25941d).getTime();
        let _0x1548a7 = new Date().getTime();
        if (_0x1548a7 > _0x25b4f8) {
          David_0x2eceac.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x5f53fd != true) {
        David_0x2eceac.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (David_0x141b86 > 1) {
      David_0x2eceac.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x2824c8 * David_0x141b86 + "个账号。");
    }
    if (David_0x3e2a65 > 1) {
      David_0x2eceac.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x236b27 + "次, 已经运行了" + David_0x225893 + "次。");
    }
    if (David_0x47dc72 != true) {
      David_0x2eceac.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x2cd75d.length > David_0x2824c8 * David_0x141b86) {
      David_0x2eceac.log("⚠️ 当前用户一次最多运行" + David_0x2824c8 * David_0x141b86 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x2cd75d.length == 0) {
      David_0x2eceac.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x225893 + David_0x2cd75d.length > David_0x236b27) {
      David_0x2eceac.log("📢 一共发现了" + David_0x2cd75d.length + "个账号");
      David_0x2eceac.log("⚠️ 当前用户运行次数剩余" + (David_0x236b27 - David_0x225893) + "次，还可以运行" + (David_0x236b27 - David_0x225893) + "个账号，还需要" + (David_0x2cd75d.length - (David_0x236b27 - David_0x225893)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x25941d != "") {
      David_0x2eceac.log("📢 你的会员有效期到： " + David_0x25941d);
    }
    David_0x2eceac.log("📢 一共发现了" + David_0x2cd75d.length + "个账号");
    let _0xcfa748 = [];
    for (let _0x4fbc1e = 0; _0x4fbc1e < David_0x2cd75d.length; _0x4fbc1e++) {
      _0xcfa748.push(David_0x332914(_0x4fbc1e));
      David_0x408bd3[_0x4fbc1e] = "";
      David_0x5afb30[_0x4fbc1e] = "";
      David_0x26f5c4[_0x4fbc1e] = 0;
      David_0x533c35[_0x4fbc1e] = "";
      David_0x388d11[_0x4fbc1e] = "";
      David_0x35ae2e[_0x4fbc1e] = "";
      David_0x54bab8[_0x4fbc1e] = 0;
      David_0x2195bf[_0x4fbc1e] = 0;
    }
    await Promise.allSettled(_0xcfa748).then(_0x17b3a8 => {
      David_0x2eceac.log("日志整理功能如下：");
      David_0x2eceac.log("---------------日志整理开始--------------");
      for (let _0x5b0ec5 = 0; _0x5b0ec5 < David_0x2cd75d.length; _0x5b0ec5++) {
        David_0x2eceac.log(David_0x408bd3[_0x5b0ec5]);
      }
      David_0x2eceac.log("---------------日志整理结束--------------");
    });
  }
})().catch(_0x358d7f => David_0x2eceac.logErr(_0x358d7f)).finally(() => David_0x2eceac.done());
async function David_0x332914(_0x261089) {
  return new Promise((_0x60dbe1, _0x3c66ae) => {
    David_0x2eceac.log("[账号" + (_0x261089 + 1 < 10 ? "0" + (_0x261089 + 1) : _0x261089 + 1) + "]: 开始执行 working......");
    David_0x21683e(_0x60dbe1, _0x261089);
  });
}
async function David_0x1e430c(_0x1bbc9e) {
  if (David_0x2eceac.isNode()) {
    if (David_0x54bab8[_0x1bbc9e] > 0) {
      David_0x2eceac.log("[账号" + (_0x1bbc9e + 1 < 10 ? "0" + (_0x1bbc9e + 1) : _0x1bbc9e + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0xb16cc3[_0x1bbc9e] = new David_0x2c8888(David_0x59d7c6.replace("http", "ws") + "/ws");
    David_0xb16cc3[_0x1bbc9e].on("open", function _0x195696() {
      David_0x2eceac.log("[账号" + (_0x1bbc9e + 1 < 10 ? "0" + (_0x1bbc9e + 1) : _0x1bbc9e + 1) + "]: 签名通道已连接");
    });
    David_0xb16cc3[_0x1bbc9e].on("close", function _0x5cebbe() {
      David_0x2eceac.log("[账号" + (_0x1bbc9e + 1 < 10 ? "0" + (_0x1bbc9e + 1) : _0x1bbc9e + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0xb16cc3[_0x1bbc9e].on("error", function _0x207be5() {
      David_0x2eceac.log("[账号" + (_0x1bbc9e + 1 < 10 ? "0" + (_0x1bbc9e + 1) : _0x1bbc9e + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x2195bf[_0x1bbc9e] = 1;
      David_0x54bab8[_0x1bbc9e]++;
      if (David_0x54bab8[_0x1bbc9e] <= 3) {
        David_0x1e430c(_0x1bbc9e);
      }
    });
  }
}
async function David_0x21683e(_0x1944b0, _0x1e3f94) {
  David_0x2eceac.log("[账号" + (_0x1e3f94 + 1 < 10 ? "0" + (_0x1e3f94 + 1) : _0x1e3f94 + 1) + "]: 用户名=> " + David_0x2cd75d[_0x1e3f94].nick_name);
  David_0x408bd3[_0x1e3f94] += "[账号" + (_0x1e3f94 + 1 < 10 ? "0" + (_0x1e3f94 + 1) : _0x1e3f94 + 1) + "]: 用户名=> " + David_0x2cd75d[_0x1e3f94].nick_name + "\n";
  await David_0x4d9927(_0x1e3f94);
  await David_0x2d647c(_0x1e3f94, 337, 0.3);
  await David_0x241184(_0x1e3f94);
  await David_0x38c4ae(David_0x450eea, David_0x272419);
  _0x1944b0();
}
async function David_0x4015c3() {
  if ($request.url.match(/\/taiji_user\/login/)) {
    const _0x4a5f85 = JSON.parse($response.body);
    if (_0x4a5f85.code == 0) {
      const _0x1c7d9c = _0x4a5f85.body.nick;
      const _0x359293 = _0x4a5f85.body.user_id;
      let _0x20f8d1 = David_0x12f39f - 1;
      if (David_0x2cd75d[_0x20f8d1]) {
        David_0x2cd75d[_0x20f8d1].nicke_name = _0x1c7d9c;
        David_0x2cd75d[_0x20f8d1].user_id = _0x359293;
      } else {
        const _0x46dd08 = {
          nicke_name: _0x1c7d9c,
          user_id: _0x359293
        };
        David_0x2cd75d[_0x20f8d1] = _0x46dd08;
      }
      David_0x2eceac.setdata(JSON.stringify(David_0x2cd75d, null, 2), "ymdjapp");
      David_0x2eceac.msg(David_0x2eceac.name, "枫以影视账号" + (_0x20f8d1 + 1) + "用户信息获取成功！🎉");
    }
  }
  if ($request.url.match(/\/list\/by_act_ids/)) {
    const _0x5eb1bb = $request.url.split("?")[1];
    let _0x5d31e0 = David_0x12f39f - 1;
    if (David_0x2cd75d[_0x5d31e0]) {
      David_0x2cd75d[_0x5d31e0].common_url = _0x5eb1bb;
    } else {
      const _0x3b5e16 = {
        commonUrl: _0x5eb1bb
      };
      David_0x2cd75d[_0x5d31e0] = _0x3b5e16;
    }
    David_0x2eceac.setdata(JSON.stringify(David_0x2cd75d, null, 2), "ymdjapp");
    David_0x2eceac.msg(David_0x2eceac.name, "枫以影视账号" + (_0x5d31e0 + 1) + "请求信息获取成功！🎉");
  }
}
async function David_0x241184(_0x1604be) {
  let _0x131d20 = "act_ids=act_71b51105,act_d713ed16,act_fab57a8c,act_089108a3,act_468c5a57&p1=" + David_0x2cd75d[_0x1604be].common_url.split("&p1=")[1];
  const _0x220f4e = "https://theater.zhangyue.com/task_api/task/list/by_act_ids?" + _0x131d20;
  let _0x3e74e5 = "";
  await David_0x3b494d(_0x220f4e, _0x3e74e5, _0x1604be);
  await David_0x17b5c2("get", David_0x3966d6[_0x1604be], David_0x1dbb99());
  let _0x397a3e = David_0xf8e4c4;
  if (_0x397a3e != null) {
    if (_0x397a3e.code == 0) {
      const _0x423293 = _0x397a3e.body.act_d713ed16.task_list;
      if (_0x423293) {
        let _0xa44217 = _0x423293.find(_0x374885 => _0x374885.id == "task_63d6aaf5");
        if (_0xa44217) {
          let _0x3d8305 = _0xa44217.sub_task_list;
          let _0x215869 = "";
          for (let _0x2546e7 = 0; _0x2546e7 < _0x3d8305.length; _0x2546e7++) {
            let _0x497668 = _0x3d8305[_0x2546e7];
            let _0x25a87f = David_0x3bb70b();
            if (_0x497668.status == "un_finished" && _0x25a87f > _0x497668.start_time && _0x25a87f < _0x497668.end_time) {
              _0x215869 = _0x497668.id;
              break;
            }
          }
          if (_0x215869 != "") {
            await David_0x4e4c5f(_0x1604be, "act_d713ed16", _0xa44217.id, _0x215869, _0xa44217.title);
          }
        }
      }
      const _0x687cd5 = _0x397a3e.body.act_fab57a8c.task_list;
      if (_0x687cd5) {
        let _0x1a1c3f = _0x687cd5.find(_0x4b0f8b => _0x4b0f8b.id == "task_fbaa9573");
        if (_0x1a1c3f) {
          let _0x2f2038 = _0x1a1c3f.sub_task_list;
          let _0x239ea8 = "";
          for (let _0x4bbd3b = 0; _0x4bbd3b < _0x2f2038.length; _0x4bbd3b++) {
            let _0x318656 = _0x2f2038[_0x4bbd3b];
            let _0x4b3e5a = David_0x3bb70b();
            if (_0x318656.reward_status == "un_reward" && _0x4b3e5a > _0x318656.start_time && _0x4b3e5a < _0x318656.end_time) {
              _0x239ea8 = _0x318656.id;
              break;
            }
          }
          if (_0x239ea8 != "") {
            await David_0x4e4c5f(_0x1604be, "act_fab57a8c", _0x1a1c3f.id, _0x239ea8, _0x1a1c3f.title);
          }
        }
      }
      const _0x47d416 = _0x397a3e.body.act_71b51105.task_list;
      let _0x4614a8 = _0x47d416.find(_0x235349 => _0x235349.id == "task_1b72601d");
      let _0x5ba39c = _0x47d416.find(_0x480e21 => _0x480e21.id == "task_91160d29");
      if (_0x4614a8 && _0x4614a8.rewarded_count < _0x4614a8.reward_limit_count) {
        let _0x30b4af = _0x4614a8.reward_limit_count - _0x4614a8.rewarded_count;
        let _0x44ff0f = 2;
        if (_0x30b4af < 2) {
          _0x44ff0f = _0x30b4af;
        }
        for (let _0x4e865d = 0; _0x4e865d < _0x44ff0f; _0x4e865d++) {
          await David_0x4e4c5f(_0x1604be, "act_71b51105", _0x4614a8.id, "", _0x4614a8.title);
          await David_0x2eceac.wait(David_0x592f94(15000, 35000));
        }
      }
      if (_0x5ba39c && _0x5ba39c.rewarded_count < _0x5ba39c.reward_limit_count) {
        let _0x174300 = _0x5ba39c.reward_limit_count - _0x5ba39c.rewarded_count;
        let _0x3c94fe = 2;
        if (_0x174300 < 2) {
          _0x3c94fe = _0x174300;
        }
        for (let _0x25e227 = 0; _0x25e227 < _0x3c94fe; _0x25e227++) {
          await David_0x4e4c5f(_0x1604be, "act_71b51105", _0x5ba39c.id, "", _0x5ba39c.title);
          await David_0x2eceac.wait(David_0x592f94(15000, 35000));
        }
      }
      for (let _0x4aaa94 = 0; _0x4aaa94 < 2; _0x4aaa94++) {
        await David_0x45ea54(_0x1604be);
        await David_0x2eceac.wait(David_0x592f94(50000, 90000));
      }
      const _0x5455ff = _0x397a3e.body.act_089108a3.task_list;
      if (_0x5455ff) {
        let _0x807974 = _0x5455ff.find(_0x559cb7 => _0x559cb7.id == "task_f02caedb");
        if (_0x807974) {
          let _0x479400 = _0x807974.duration;
          let _0x14c93d = _0x807974.sub_task_list;
          for (let _0x33cd14 = 0; _0x33cd14 < _0x14c93d.length; _0x33cd14++) {
            let _0x163740 = _0x14c93d[_0x33cd14];
            if (_0x479400 >= _0x163740.duration_limit && _0x163740.status == "finished" && _0x163740.reward_status == "un_reward") {
              await David_0x4e4c5f(_0x1604be, "act_089108a3", _0x807974.id, _0x163740.id, _0x807974.title + "-" + _0x163740.title);
            }
            await David_0x2eceac.wait(David_0x592f94(3000, 5000));
          }
        }
      }
    }
  }
}
async function David_0x4e4c5f(_0x136a04, _0x5a496e, _0x24d077, _0x6f6037, _0x2fbf4c) {
  const _0xb02e23 = "https://theater.zhangyue.com/task_api/task/draw_gift";
  let _0x30f4c0 = "p1=" + David_0x2cd75d[_0x136a04].common_url.split("&p1=")[1];
  let _0x4b62a5 = David_0x592f94(3, 15);
  let _0x3d874a = "act_id=" + _0x5a496e + "&task_id=" + _0x24d077 + "&sub_task_id=" + _0x6f6037 + "&" + _0x30f4c0 + "&ecpm=" + (_0x4b62a5 * 1000).toFixed(1);
  if (_0x2fbf4c.indexOf("-") != -1) {
    _0x3d874a = "act_id=" + _0x5a496e + "&task_id=" + _0x24d077 + "&sub_task_id=" + _0x6f6037 + "&" + _0x30f4c0;
  }
  await David_0x3b494d(_0xb02e23, _0x3d874a, _0x136a04);
  await David_0x17b5c2("post", David_0x3966d6[_0x136a04], David_0x1dbb99());
  let _0xd9aa41 = David_0xf8e4c4;
  if (_0xd9aa41 != null) {
    if (_0xd9aa41 && _0xd9aa41.code == 0) {
      if (_0xd9aa41.body.gift_info[0].gift_type == "gold_coin") {
        David_0x2eceac.log("[账号" + (_0x136a04 + 1 < 10 ? "0" + (_0x136a04 + 1) : _0x136a04 + 1) + "]: 恭喜你完成" + _0x2fbf4c + "任务获得" + _0xd9aa41.body.gift_info[0].amount + "金币");
        David_0x408bd3[_0x136a04] += "[账号" + (_0x136a04 + 1 < 10 ? "0" + (_0x136a04 + 1) : _0x136a04 + 1) + "]: 恭喜你完成" + _0x2fbf4c + "任务获得" + _0xd9aa41.body.gift_info[0].amount + "金币\n";
      }
    }
  }
}
function David_0xa0fc1f(_0x10d5e1, _0x98c847) {
  return David_0x510506(_0x10d5e1, _0x98c847);
}
async function David_0x4d9927(_0x35d720) {
  let _0xb3c55f = "p1=" + David_0x2cd75d[_0x35d720].common_url.split("&p1=")[1];
  const _0x12ae38 = "https://theater.zhangyue.com/welfare/gold/user/gold_account?account_type=0&gold_type=2&" + _0xb3c55f;
  let _0x4f7456 = "";
  await David_0x3b494d(_0x12ae38, _0x4f7456, _0x35d720);
  await David_0x17b5c2("get", David_0x3966d6[_0x35d720], David_0x1dbb99());
  let _0x2e9345 = David_0xf8e4c4;
  if (_0x2e9345 != null && _0x2e9345.code == 0) {
    David_0x2eceac.log("[账号" + (_0x35d720 + 1 < 10 ? "0" + (_0x35d720 + 1) : _0x35d720 + 1) + "]: 总金币=> " + _0x2e9345.body.total_gold_num + "金币");
    David_0x408bd3[_0x35d720] += "[账号" + (_0x35d720 + 1 < 10 ? "0" + (_0x35d720 + 1) : _0x35d720 + 1) + "]: 总金币=> " + _0x2e9345.body.total_gold_num + "金币\n";
    David_0x2eceac.log("[账号" + (_0x35d720 + 1 < 10 ? "0" + (_0x35d720 + 1) : _0x35d720 + 1) + "]: 现金=> " + _0x2e9345.body.total_rmb + "元");
    David_0x408bd3[_0x35d720] += "[账号" + (_0x35d720 + 1 < 10 ? "0" + (_0x35d720 + 1) : _0x35d720 + 1) + "]: " + _0x2e9345.body.total_rmb + "元\n";
    David_0x2eceac.log("[账号" + (_0x35d720 + 1 < 10 ? "0" + (_0x35d720 + 1) : _0x35d720 + 1) + "]: 今日金币=> " + _0x2e9345.body.today_gold_num + "金币");
    David_0x408bd3[_0x35d720] += "[账号" + (_0x35d720 + 1 < 10 ? "0" + (_0x35d720 + 1) : _0x35d720 + 1) + "]: 今日金币=> " + _0x2e9345.body.today_gold_num + "金币\n";
  }
}
async function David_0x45ea54(_0x497e95) {
  let _0x39b8db = David_0x592f94(60, 120);
  let _0x1bd9aa = "54000" + David_0x592f94(890, 999);
  let _0x14a227 = Math.round(new Date().getTime()).toString();
  let _0x87c636 = "p1=" + David_0x2cd75d[_0x497e95].common_url.split("&p1=")[1];
  let _0x4256b2 = David_0x41762a(_0x87c636);
  let _0x455dc8 = _0x4256b2.usr;
  let _0x448d14 = David_0x2eceac.time("yyyy-MM-dd");
  if (_0x39b8db == 0) {
    _0x39b8db = 30;
  }
  const _0x1688cc = "https://theater.zhangyue.com/reading/duration/security_report";
  let _0x4cb8fe = "app_id=zy9351ae&date_info=[{\"book_id\":\"" + _0x1bd9aa + "\",\"date\":\"" + _0x448d14 + "\",\"res_type\":\"watch\",\"second\":" + _0x39b8db + "}]&timestamp=" + _0x14a227 + "&user_name=" + _0x455dc8 + "&" + _0x87c636;
  await David_0x3b494d(_0x1688cc, _0x4cb8fe, _0x497e95);
  await David_0x17b5c2("post", David_0x3966d6[_0x497e95], David_0x1dbb99());
  David_0x2eceac.log("[账号" + (_0x497e95 + 1 < 10 ? "0" + (_0x497e95 + 1) : _0x497e95 + 1) + "]: 看剧时长=> 成功增加" + _0x39b8db + "秒");
}
async function David_0x575a5d(_0x5b1af7, _0x4d2fb7, _0x2c8fdf) {
  let _0x133f5a = "p1=" + David_0x2cd75d[_0x5b1af7].common_url.split("&p1=")[1];
  let _0x3b4fcf = David_0xe1fd16(_0x133f5a);
  const _0x29596e = "https://theater.zhangyue.com/welfare/gold/withdraw/door_info?sub_id=" + _0x4d2fb7 + "&sub_type=2&device_id=" + _0x3b4fcf + "&" + _0x133f5a;
  let _0x32ffdf = "";
  await David_0x3b494d(_0x29596e, _0x32ffdf, _0x5b1af7);
  await David_0x17b5c2("get", David_0x3966d6[_0x5b1af7], David_0x1dbb99());
  let _0xb20882 = David_0xf8e4c4;
  if (_0xb20882.code == 0) {
    if (_0xb20882.body.door_info != null) {
      let _0x533692 = _0xb20882.body.door_info["0"];
      if (_0x533692.current_value >= _0x533692.door_value) {
        await David_0x29107e(_0x5b1af7, David_0x2cd75d[_0x5b1af7].channel, _0x2c8fdf, _0x4d2fb7);
      } else {
        David_0x2eceac.log("[账号" + (_0x5b1af7 + 1 < 10 ? "0" + (_0x5b1af7 + 1) : _0x5b1af7 + 1) + "]: 提现条件检测=> 目前看剧时长不达标，暂时无法提现");
      }
    } else {
      await David_0x29107e(_0x5b1af7, David_0x2cd75d[_0x5b1af7].channel, _0x2c8fdf, _0x4d2fb7);
    }
  }
}
async function David_0x2d647c(_0x415dd8, _0xa70ae6, _0x572fb5) {
  let _0x1c19c8 = "p1=" + David_0x2cd75d[_0x415dd8].common_url.split("&p1=")[1];
  const _0x2c3c78 = "https://theater.zhangyue.com/welfare/gold/withdraw/amount_list?gold_type=2&" + _0x1c19c8;
  let _0x4a106d = "";
  await David_0x3b494d(_0x2c3c78, _0x4a106d, _0x415dd8);
  await David_0x17b5c2("get", David_0x3966d6[_0x415dd8], David_0x1dbb99());
  let _0x386d5b = David_0xf8e4c4;
  if (_0x386d5b.code == 0) {
    let _0x19f85a = _0x386d5b.body.list;
    for (let _0x24fed4 = 0; _0x24fed4 < _0x19f85a.length; _0x24fed4++) {
      const _0x51833f = _0x19f85a[_0x24fed4];
      if (_0x51833f.sub_id == _0xa70ae6 && _0x51833f.today_remain_withdraw_amount > 0) {
        await David_0x575a5d(_0x415dd8, _0xa70ae6, _0x572fb5);
        break;
      }
    }
  }
}
async function David_0x1d57ad(_0x267b33) {
  let _0x26edaf = "p1=" + David_0x2cd75d[_0x267b33].common_url.split("&p1=")[1];
  const _0x6391b0 = "https://theater.zhangyue.com/welfare/gold/withdraw/type_list?gold_type=2&" + _0x26edaf;
  await David_0x3b494d(_0x6391b0, "", _0x267b33);
  await David_0x17b5c2("get", David_0x3966d6[_0x267b33], David_0x1dbb99());
  let _0x3bb942 = David_0xf8e4c4;
  if (_0x3bb942.code == 0) {
    let _0x1b9409 = _0x3bb942.body.list;
    let _0x494de9 = _0x1b9409.find(_0x409184 => _0x409184.type == "wechat");
    if (_0x494de9 && _0x494de9.bind_info.is_bind) {
      David_0x1db2cb[_0x267b33] = _0x494de9.bind_info.open_id;
    }
  }
}
async function David_0x29107e(_0x271b07, _0x420226, _0x347ad7, _0x3ecf3a) {
  let _0x142d92 = "p1=" + David_0x2cd75d[_0x271b07].common_url.split("&p1=")[1];
  let _0x84531a = David_0xe1fd16(_0x142d92);
  await David_0x1d57ad(_0x271b07);
  const _0x900d9d = "https://theater.zhangyue.com/welfare/gold/withdraw/exec";
  let _0x1932ea = "type=" + _0x420226 + "&amount=" + _0x347ad7 + "&sub_id=" + _0x3ecf3a + "&open_id=" + David_0x1db2cb[_0x271b07] + "&device_id=" + _0x84531a + "&account_type=0&gold_type=2&" + _0x142d92;
  await David_0x3b494d(_0x900d9d, _0x1932ea, _0x271b07);
  await David_0x17b5c2("post", David_0x3966d6[_0x271b07], David_0x1dbb99());
  let _0x371d95 = David_0xf8e4c4;
  if (_0x371d95.code == 0) {
    David_0x2eceac.log("[账号" + (_0x271b07 + 1 < 10 ? "0" + (_0x271b07 + 1) : _0x271b07 + 1) + "]: 提现" + _0x347ad7 + "元成功，请注意查收。");
    David_0x408bd3[_0x271b07] += "[账号" + (_0x271b07 + 1 < 10 ? "0" + (_0x271b07 + 1) : _0x271b07 + 1) + "]: 提现" + _0x347ad7 + "元成功，请注意查收。\n";
  }
}
function David_0x1cb4fb(_0x2906c0, _0x463941, _0x57f7c9) {
  return new Promise((_0x533a1c, _0x367a41) => {
    const _0x3e231b = David_0x59d7c6 + "/script/permissions/lastest";
    const _0x2f11db = {
      appName: _0x2906c0,
      userId: _0x463941,
      activityCode: _0x57f7c9,
      version: David_0x2659a1
    };
    const _0x590cf1 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2f963a = {
      url: _0x3e231b,
      headers: _0x590cf1,
      body: JSON.stringify(_0x2f11db)
    };
    David_0x2eceac.post(_0x2f963a, async (_0x76aed3, _0x594cd5, _0x1380f5) => {
      if (_0x1380f5 && _0x1380f5 != null && _0x1380f5.replace(/\"/g, "").length > 50) {
        const _0x53a66d = _0x1380f5.replace(/\"/g, "").slice(34);
        const _0x1afd1e = new David_0x17a185();
        result = JSON.parse(_0x1afd1e.decode(_0x53a66d));
        try {
          David_0xc84be9 = result.version;
          David_0xb05a56 = result.userAuth;
          David_0x4e1d7a = result.scriptAuth;
          David_0x47dc72 = result.runAuth;
          David_0x17e95a = result.notify;
          David_0x5f53fd = result.vipAuth;
          David_0x520ffb = result.isCharge;
          David_0x141b86 = result.runAcounts;
          David_0x3e2a65 = result.buyCount;
          David_0x225893 = result.runedCounts;
          David_0x236b27 = result.runTotalCounts;
          David_0x551c0b = result.userRank;
          David_0x57954a = result.invicate;
          David_0x2824c8 = result.accountNumbers;
          David_0x25941d = result.vipDate;
        } catch (_0x35fc44) {
          David_0x2eceac.log(_0x35fc44);
        }
      } else {
        David_0x2eceac.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x533a1c();
    });
  });
}
function David_0x38c4ae(_0x110b05, _0x730c4b) {
  return new Promise((_0x2f16e7, _0x48c1bc) => {
    const _0x690b39 = David_0x59d7c6 + "/script/run/add";
    const _0x36753f = {
      appName: _0x110b05,
      userId: _0x730c4b,
      activityCode: David_0x4b44bc,
      version: David_0x2659a1
    };
    const _0xcd5397 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5772fc = {
      url: _0x690b39,
      headers: _0xcd5397,
      body: JSON.stringify(_0x36753f)
    };
    David_0x2eceac.post(_0x5772fc, async (_0x5a7b21, _0x594304, _0x5017a3) => {
      _0x2f16e7();
    });
  });
}
function David_0x302b93(_0x419c1d, _0x236a9f) {
  return new Promise((_0x6d795, _0x259446) => {
    const _0x2ea13d = setTimeout(() => {
      _0x6d795(false);
    }, _0x236a9f);
    const _0x223833 = David_0x57a5a9.get(_0x419c1d, _0x45029a => {
      clearTimeout(_0x2ea13d);
      if (_0x45029a.statusCode === 404) {
        _0x6d795(true);
      } else {
        _0x6d795(false);
      }
    });
    _0x223833.on("error", _0x1ca6db => {
      clearTimeout(_0x2ea13d);
      _0x6d795(false);
    });
    _0x223833.on("timeout", () => {
      _0x223833.abort();
      _0x259446(new Error("请求超时"));
    });
  });
}
async function David_0x3bc0a7(_0x9eca7b, _0x164031 = 3000) {
  return new Promise((_0x4e2898, _0x8db073) => {
    const _0x1f49f3 = {
      url: _0x9eca7b + "/docs"
    };
    setTimeout(() => {
      _0x4e2898(false);
    }, _0x164031);
    David_0x2eceac.get(_0x1f49f3, async (_0x3b6b68, _0xfa2584, _0x5c8789) => {
      if (_0xfa2584.status == 401) {
        _0x4e2898(true);
      } else {
        _0x4e2898(false);
      }
    });
  });
}
async function David_0x1679cc(_0x26d478, _0x248c99, _0x10ad06) {
  return new Promise((_0x356977, _0x4c80e7) => {
    const _0x20830c = David_0x59d7c6 + "/redis/hash/get/" + _0x26d478 + "/" + _0x248c99;
    const _0x1e02df = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x3e52da = {
      url: _0x20830c,
      headers: _0x1e02df
    };
    David_0x2eceac.get(_0x3e52da, async (_0x442aea, _0x28d79d, _0x2a9a00) => {
      const _0x47ca18 = _0x2a9a00.replace(/\"/g, "");
      answerTexts[_0x10ad06] = _0x47ca18;
      _0x356977();
    });
  });
}
function David_0x5de8a7(_0x1e54d7, _0x442c8d, _0x35caf4) {
  return new Promise((_0x2815bf, _0x374fea) => {
    const _0x3ff7d8 = David_0x59d7c6 + "/redis/hash/set";
    const _0x463c91 = {
      key: _0x1e54d7,
      hashKey: _0x442c8d,
      hashValue: _0x35caf4
    };
    const _0x287c17 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1f3720 = {
      url: _0x3ff7d8,
      headers: _0x287c17,
      body: JSON.stringify(_0x463c91)
    };
    David_0x2eceac.post(_0x1f3720, async (_0x4bff2a, _0x3c96ec, _0xf67960) => {
      _0x2815bf();
    });
  });
}
function David_0x13de53(_0xdf5ad8) {
  return new Promise((_0x392dde, _0x31e471) => {
    const _0x2ed672 = David_0x59d7c6 + "/redis/set/pop/" + _0xdf5ad8;
    const _0x44f3f9 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x7a6d99 = {
      url: _0x2ed672,
      headers: _0x44f3f9
    };
    David_0x2eceac.get(_0x7a6d99, async (_0x31b995, _0x3c8270, _0x6c0b68) => {
      const _0x55096f = _0x6c0b68.replace(/\"/g, "");
      popCookie = _0x55096f;
      _0x392dde();
    });
  });
}
async function David_0x3b494d(_0x214403, _0x397ffd, _0x228dc1) {
  let _0x1480bf = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/119.0.6045.67 Mobile Safari/537.36 zyHybridVer/1.0.0 zyApp/???? zyVersion/1.0.0 zyChannel/118981 zyAppid/zy3d1ef1 zyApp/???? zyVersion/1.0.0 zyChannel/118981 zyAppid/zy3d1ef1";
  if (David_0x2cd75d[_0x228dc1].ua && David_0x2cd75d[_0x228dc1].ua != "") {
    _0x1480bf = David_0x2cd75d[_0x228dc1].ua;
  }
  let _0x46cb82 = David_0xa0fc1f(_0x228dc1, _0x214403 + "@" + _0x397ffd);
  let _0x23280b = David_0x53200f(_0x214403);
  const _0x2729d6 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x1480bf,
    "X-SIG-Timestamp": _0x46cb82.ts,
    "X-SIG-Sign": _0x46cb82.signResult,
    "X-AppId": "zy9351ae",
    "X-SIG-Alg": "RSA-SHA256",
    Host: _0x23280b
  };
  const _0xa4a9a = {
    url: _0x214403,
    headers: _0x2729d6
  };
  if (_0x397ffd) {
    _0xa4a9a.body = _0x397ffd;
  }
  David_0x3966d6[_0x228dc1] = _0xa4a9a;
  return _0xa4a9a;
}
async function David_0x17b5c2(_0xfb63a1, _0x39d8a6, _0x38fa82) {
  David_0xf8e4c4 = null;
  return new Promise(_0x215b33 => {
    David_0x2eceac[_0xfb63a1](_0x39d8a6, async (_0x3ad336, _0x891880, _0x24ad00) => {
      try {
        if (_0x3ad336) {
          David_0x2eceac.log(_0x38fa82 + ": " + _0xfb63a1 + "请求失败");
          David_0x2eceac.log(JSON.stringify(_0x3ad336));
          David_0x2eceac.logErr(_0x3ad336);
        } else {
          if (David_0x4f3f13(_0x24ad00)) {
            David_0xf8e4c4 = JSON.parse(_0x24ad00);
          } else {
            const _0x5ef70a = new URL(_0x39d8a6.url);
            David_0x2eceac.log(_0x5ef70a.pathname + "发起" + _0xfb63a1 + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x516f3e) {
        David_0x2eceac.logErr(_0x516f3e, _0x891880);
      } finally {
        _0x215b33();
      }
    });
  });
}
function David_0x53200f(_0x3bd659) {
  let _0x252fa4 = _0x3bd659.substr(_0x3bd659.indexOf("//") + 2);
  let _0x426bc1 = _0x252fa4.substr(0, _0x252fa4.indexOf("/"));
  let _0x4ff1d9 = "";
  let _0x57b25e = _0x426bc1.indexOf(":");
  if (_0x57b25e > 0) {
    _0x4ff1d9 = _0x426bc1.substr(0, _0x57b25e);
  } else {
    _0x4ff1d9 = _0x426bc1;
  }
  return _0x4ff1d9;
}
function David_0x57dc5a(_0x1b440c) {
  let _0x45e223 = _0x1b440c.split("&");
  let _0x584db1 = {};
  for (let _0x2ec227 = 0; _0x2ec227 < _0x45e223.length; _0x2ec227++) {
    let _0x5e13a0 = _0x45e223[_0x2ec227].split("=");
    _0x584db1[_0x5e13a0[0]] = _0x5e13a0[1];
  }
  return _0x584db1;
}
function David_0x41762a(_0x3c9e89) {
  _0x3c9e89 = _0x3c9e89.replace(/\"/g, "");
  var _0x52e302;
  var _0x463411 = {};
  var _0x59d89e = _0x3c9e89.slice(_0x3c9e89.indexOf("?") + 1).split("&");
  for (var _0x55204e = 0; _0x55204e < _0x59d89e.length; _0x55204e++) {
    _0x52e302 = _0x59d89e[_0x55204e].split("=");
    _0x463411[_0x52e302[0]] = _0x52e302[1];
  }
  return _0x463411;
}
function David_0x430b28(_0xb5b670, _0x3f1440) {
  return new Promise((_0x33d0a5, _0x3025e5) => {
    const _0x17340e = David_0x59d7c6 + "/sign/ymdj";
    const _0x49bad3 = {
      content: _0x3f1440,
      appName: David_0x450eea,
      uuid: David_0x272419
    };
    const _0x572339 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2f4ef2 = {
      url: _0x17340e,
      headers: _0x572339,
      body: JSON.stringify(_0x49bad3)
    };
    David_0x2eceac.post(_0x2f4ef2, async (_0x575536, _0x29d7a9, _0x334a1f) => {
      const _0x2e58e8 = _0x334a1f.replace(/\"/g, "");
      David_0x2b6fcf[_0xb5b670] = _0x2e58e8;
      _0x33d0a5(_0x2e58e8);
    });
  });
}
function David_0x22b5db(_0x7a82d0, _0x2281d5) {
  return new Promise((_0xda3398, _0x56168a) => {
    function _0x48b93c(_0x51bc87) {
      let _0x440ad9 = _0x51bc87.toString("utf8");
      David_0x2b6fcf[_0x7a82d0] = _0x440ad9;
      _0xda3398(_0x440ad9);
      David_0xb16cc3[_0x7a82d0].removeListener("message", _0x48b93c);
    }
    David_0xb16cc3[_0x7a82d0].on("message", _0x48b93c);
    if (David_0xb16cc3[_0x7a82d0].readyState === 1) {
      const _0x4ef148 = {
        method: David_0x450eea,
        params: {}
      };
      _0x4ef148.params.content = _0x2281d5;
      _0x4ef148.params.appName = David_0x450eea;
      _0x4ef148.params.uuid = David_0x272419;
      David_0xb16cc3[_0x7a82d0].send(JSON.stringify(_0x4ef148), _0x549a5e => {
        if (_0x549a5e) {
          _0x56168a(_0x549a5e);
        }
      });
    } else {
      _0xda3398(David_0x430b28(_0x7a82d0, _0x2281d5));
      David_0xb16cc3[_0x7a82d0].removeListener("message", _0x48b93c);
    }
  });
}
function David_0x510506(_0xac7bdd, _0x1e5792) {
  let _0xca9d6a = David_0x3bb70b();
  let _0x17186b = _0x1e5792.split("@")[0];
  const _0x588aae = new URL(_0x17186b);
  let _0x1fd1a5 = _0x588aae.pathname;
  let _0x3ec08d = "";
  if (_0x17186b.split("?").length > 1) {
    _0x3ec08d = David_0x57dc5a(_0x17186b.split("?")[1]);
  }
  let _0x245ff6 = "";
  if (_0x3ec08d != "") {
    _0x245ff6 = Object.keys(_0x3ec08d).length === 0 ? "" : Object.keys(_0x3ec08d).sort().map(_0x191a83 => _0x191a83 + "=" + _0x3ec08d[_0x191a83]).join("&");
  }
  let _0x5a1a6d = _0x1e5792.split("@")[1];
  let _0x2d86a8 = _0x5a1a6d + "&" + decodeURIComponent(_0x245ff6) + "&" + _0x1fd1a5 + "&" + _0xca9d6a;
  let _0x3d2622 = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKfK7Bnh1RSHYZZRLI2WormV8rXdj0B46gu1NOiOGQJp0wbVwDVqc0rRs6+C2TcnVEx+ElVh56d29gqtIrVHaYYKP6tBo/OveSBa9McXhQd/Jbn5+1YchaMdArqk6gd663Lmjhsk6ROOZqXWFZatITzIODo7Uz9HpKnnMbCqQ5QtliBln+CKx47H++j5lgCRb6FIAmTazBwzX4Yox/AubcbC4R8P8SS7jSxRLt1rvEokCBntUrm61mutQ5tOcQ+vjh3W/KoBkLQQ2sElSLB1g7KRHbX9A/tn14grbJrgEJUY6NfM4YhuSeRcwx2aMZaQAPpAFAcDJY74IgclkIXWT/AgMBAAECggEAZhEhWfGkn5NiDHz5UgrdzKpb4ZVFxgSFLZofbQfsg2gjdgS6C+jDEfdsMXZmKtvYJtqGL/bQGDVaDCUvGa5StY6JOddNH7BOmOmKqoLL/evoW60DqT9n6acQYuJPDe4mQKoBLjteBS/kXZtCdfs1d8twQ4vizBShDDoAlZHwo/eb3HLUsswC01MT8AmtyQXphVMZRlC1wwXDxMsQbB5DJQ77dP0VV05ekb2XTTSd+488fWkqa8nOWqg/yuVfQTkAh3mnNIBQ7gxxKvb0aczS5yeIVfJQvTdvevnKiTc3zg2qjS5/PIZ4KXblj/AmSv80BQ9vxqlMmthlEKg93JOa2QKBgQDonSZJbQkkeseFY80kdEnHC/88uzV3HhTAJ1SL/H5eaoIMDHa2QhnYYGWu/ELuSsGGxt1KWKzRs+IL0ymF5Jfta0/dbKyVKNmEMh/uvI1X5d/rT/BJcUIElaKsmGABkWtX5VBEaGa8FFLav7SrF68Z0e4B3pRvnRTTsjTQQCERUwKBgQDe2CZ5Zw+XP6aHl+mpfq1uJJZU/ZydS/5Rp19Ih+vkUaE5E3IRSznSIAbWkt+DLIOpwMmmP9FHHdpeMcsV/Ali+wrXswUGfzmstaOjVp2MxmBhHFAFJ9Wut8Ns23uCfgxxs1EyYjFPYwv5Llb7OLotoEd6P1+LTy1gHX9Yd2IMJQKBgQCGVRKiPqST+4+zmaIDlmBw4Z3Bnb9PjgCfw1bRDLyRm+KEQMJhmKTCT1EJj8a7RFKkmb17zN/oroAxIf4Nw6h1RI63qaW08gVDkYrdXOgnRapdgymZ0B029o8eK1TuMuORu+zxxHTn0rjSePlGAQRu3cwcKkUAe+9mHbjgNtih3wKBgQClqygfRUFP/l/9mjB6c9TXd5fTo5/VSPPPHJE3yOTUHuOvHQfGV5iq4Gh1CUflqyhPASZo1DTvnAAF2xrSQ0dvMJdE+LAZvmfQQFFhUzlZuPlZ+MR8sLqpY7CDs0BFKRRzSw5oWJu0GzyBibPcnLW8ydWZypdrZ/eh5wwPZuGbiQKBgArZkZ685pmCPRmD3/OQgCzS4a/LtuzOvpa9L1DEukAFFSSnIoEI3uQM1GVF3T7y5Dk28USJ5aX9HxPC/Z6uhuxTe6NLxtAJ+7aNrCHwD9PvgdRYyc9YeQawm3Ndk78F/gefhbhoi1whX/WKmWkayg5pvaLyxZCZNrfWLzj0GMDS\n-----END PRIVATE KEY-----";
  const _0x22aaf8 = David_0x2ffd5a.createSign("RSA-SHA256");
  _0x22aaf8.update(_0x2d86a8);
  _0x22aaf8.end();
  let _0x2cf8a6 = _0x22aaf8.sign(_0x3d2622).toString("base64");
  const _0xb23319 = {
    signResult: _0x2cf8a6,
    ts: _0xca9d6a
  };
  return _0xb23319;
}
function David_0x3f38f4(_0x1b111f, _0x18d009) {
  if (_0x1b111f.length * 2 <= _0x18d009) {
    return _0x1b111f;
  }
  var _0xb45567 = 0;
  var _0x249774 = "";
  for (var _0x1c277f = 0; _0x1c277f < _0x1b111f.length; _0x1c277f++) {
    _0x249774 = _0x249774 + _0x1b111f.charAt(_0x1c277f);
    if (_0x1b111f.charCodeAt(_0x1c277f) > 128) {
      _0xb45567 = _0xb45567 + 2;
      if (_0xb45567 >= _0x18d009) {
        return _0x249774.substring(0, _0x249774.length - 1) + "...";
      }
    } else {
      _0xb45567 = _0xb45567 + 1;
      if (_0xb45567 >= _0x18d009) {
        return _0x249774.substring(0, _0x249774.length - 2) + "...";
      }
    }
  }
  return _0x249774;
}
function David_0x1dbb99() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x4f3f13(_0x269ef5) {
  try {
    if (typeof JSON.parse(_0x269ef5) == "object") {
      return true;
    }
  } catch (_0x5e7e7b) {
    console.log(_0x5e7e7b);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x2370de(_0x1ca5a9) {
  var _0x478132 = Object.keys(_0x1ca5a9).map(function (_0x570eb8) {
    return encodeURIComponent(_0x570eb8) + "=" + encodeURIComponent(_0x1ca5a9[_0x570eb8]);
  }).join("&");
  return _0x478132;
}
function David_0x264bc7(_0x3f549b) {
  var _0x246ef0 = String.fromCharCode(_0x3f549b.charCodeAt(0) + _0x3f549b.length);
  for (var _0x31ea99 = 1; _0x31ea99 < _0x3f549b.length; _0x31ea99++) {
    _0x246ef0 += String.fromCharCode(_0x3f549b.charCodeAt(_0x31ea99) + _0x3f549b.charCodeAt(_0x31ea99 - 1));
  }
  return escape(_0x246ef0);
}
function David_0x3174ec(_0xf0b75b) {
  _0xf0b75b = unescape(_0xf0b75b);
  var _0x2ad51b = String.fromCharCode(_0xf0b75b.charCodeAt(0) - _0xf0b75b.length);
  for (var _0x425557 = 1; _0x425557 < _0xf0b75b.length; _0x425557++) {
    _0x2ad51b += String.fromCharCode(_0xf0b75b.charCodeAt(_0x425557) - _0x2ad51b.charCodeAt(_0x425557 - 1));
  }
  return _0x2ad51b;
}
function David_0x592f94(_0x10b7f1, _0x13e5e5) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x10b7f1 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x13e5e5 - _0x10b7f1 + 1) + _0x10b7f1);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x7b21c4() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x1d18cf() {
  function _0x3098e9() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x3098e9() + _0x3098e9() + "-" + _0x3098e9() + "-" + _0x3098e9() + "-" + _0x3098e9() + "-" + _0x3098e9() + _0x3098e9() + _0x3098e9();
}
function David_0x2db0d1(_0x6c7a1) {
  if (_0x6c7a1.length == 11) {
    let _0x105461 = _0x6c7a1.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x105461;
  } else {
    return _0x6c7a1;
  }
}
function David_0x5a1d5f(_0x2601a4) {
  return new Promise(_0x2a76f9 => {
    try {
      var _0x2391d1 = require("request");
      const _0x547757 = {
        c: _0x2601a4
      };
      const _0x39f754 = {
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        qs: _0x547757
      };
      _0x2391d1(_0x39f754, function (_0x76a3f9, _0x5af885, _0x2db978) {
        if (_0x76a3f9) {
          throw new Error(_0x76a3f9);
        }
        let _0x970102 = JSON.parse(_0x2db978);
        let _0x397224 = _0x970102.hitokoto;
        _0x2a76f9(_0x397224);
        return _0x397224;
      });
    } catch (_0x5a20b7) {
      console.log(_0x5a20b7);
    }
  });
}
function David_0x3bb70b() {
  return Math.round(new Date().getTime()).toString();
}
function David_0xa8b70b() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x3f25b7() {
  if (David_0x3c5ab3 == 1) {
    David_0x2eceac.msg(David_0x2eceac.name, "", David_0x2eceac.message);
  }
}
async function David_0x5f1789(_0xb14f6b) {
  if (David_0x202d94 == 9 || David_0x202d94 == 12 || David_0x202d94 == 18) {
    if (David_0x3c5ab3 == 1) {
      if (David_0x2eceac.isNode()) {
        await David_0x2655af.sendNotify(David_0x2eceac.name, _0xb14f6b);
      } else {
        David_0x2eceac.msg(David_0x2eceac.name, "", _0xb14f6b);
      }
    } else {
      David_0x2eceac.log(_0xb14f6b);
    }
  }
}
async function David_0x1357a7(_0x71f29e, _0x38f659, _0x51bf17) {
  return new Promise((_0x212887, _0x47bbda) => {
    const _0x193b1d = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x3e34fe = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x38f659,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x51bf17],
      verifyPay: false
    };
    const _0x272146 = {
      "Content-Type": "application/json"
    };
    const _0x131df4 = {
      url: _0x193b1d,
      headers: _0x272146,
      body: JSON.stringify(_0x3e34fe)
    };
    David_0x2eceac.post(_0x131df4, async (_0x7723b0, _0x56d3c6, _0x52c01b) => {
      _0x212887();
    });
  });
}
function David_0x3ed2c8(_0x5737b0, _0x191446) {
  _0x191446 = _0x191446 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x5256a2 = "";
  for (let _0x5dcb26 = 0; _0x5dcb26 < _0x5737b0; _0x5dcb26++) {
    let _0x1d0725 = Math.floor(Math.random() * _0x191446.length);
    _0x5256a2 += _0x191446.substring(_0x1d0725, _0x1d0725 + 1);
  }
  return _0x5256a2;
}
function David_0xe1fd16(_0xd0d8ac) {
  function _0x4bed39(_0x3fa6f6, _0x32d735) {
    return _0x3fa6f6 << _0x32d735 | _0x3fa6f6 >>> 32 - _0x32d735;
  }
  function _0x5b7522(_0x21a123, _0x1ab300) {
    var _0x574293, _0x3529e6, _0x2c6c8f, _0xe373f6, _0x4be387;
    _0x2c6c8f = 2147483648 & _0x21a123;
    _0xe373f6 = 2147483648 & _0x1ab300;
    _0x574293 = 1073741824 & _0x21a123;
    _0x3529e6 = 1073741824 & _0x1ab300;
    _0x4be387 = (1073741823 & _0x21a123) + (1073741823 & _0x1ab300);
    return _0x574293 & _0x3529e6 ? 2147483648 ^ _0x4be387 ^ _0x2c6c8f ^ _0xe373f6 : _0x574293 | _0x3529e6 ? 1073741824 & _0x4be387 ? 3221225472 ^ _0x4be387 ^ _0x2c6c8f ^ _0xe373f6 : 1073741824 ^ _0x4be387 ^ _0x2c6c8f ^ _0xe373f6 : _0x4be387 ^ _0x2c6c8f ^ _0xe373f6;
  }
  function _0x4b77be(_0x3ffce3, _0x1f797f, _0x15385b) {
    return _0x3ffce3 & _0x1f797f | ~_0x3ffce3 & _0x15385b;
  }
  function _0xf66cff(_0x55f2c2, _0x417c0d, _0x30529d) {
    return _0x55f2c2 & _0x30529d | _0x417c0d & ~_0x30529d;
  }
  function _0x36cfd8(_0x31174a, _0x4088f2, _0x51ebf1) {
    return _0x31174a ^ _0x4088f2 ^ _0x51ebf1;
  }
  function _0x4e7ea9(_0x2b05bf, _0x5862a2, _0xa3927e) {
    return _0x5862a2 ^ (_0x2b05bf | ~_0xa3927e);
  }
  function _0x29c273(_0x552d6b, _0x3c2171, _0x5c2032, _0xad1db6, _0x4765b7, _0x1c6c56, _0x1f4b9f) {
    _0x552d6b = _0x5b7522(_0x552d6b, _0x5b7522(_0x5b7522(_0x4b77be(_0x3c2171, _0x5c2032, _0xad1db6), _0x4765b7), _0x1f4b9f));
    return _0x5b7522(_0x4bed39(_0x552d6b, _0x1c6c56), _0x3c2171);
  }
  function _0x1050c1(_0x118273, _0x13be91, _0x35670d, _0x5053f9, _0x739050, _0x1b802c, _0xc70dc7) {
    _0x118273 = _0x5b7522(_0x118273, _0x5b7522(_0x5b7522(_0xf66cff(_0x13be91, _0x35670d, _0x5053f9), _0x739050), _0xc70dc7));
    return _0x5b7522(_0x4bed39(_0x118273, _0x1b802c), _0x13be91);
  }
  function _0x1bd879(_0x377d31, _0x453a73, _0x123bfc, _0x2bb0f2, _0x307101, _0x50ee9f, _0x2d55cc) {
    _0x377d31 = _0x5b7522(_0x377d31, _0x5b7522(_0x5b7522(_0x36cfd8(_0x453a73, _0x123bfc, _0x2bb0f2), _0x307101), _0x2d55cc));
    return _0x5b7522(_0x4bed39(_0x377d31, _0x50ee9f), _0x453a73);
  }
  function _0x46d449(_0x237425, _0x43068b, _0x42b7d5, _0x28a910, _0x4caecc, _0xe1fb98, _0x153e25) {
    _0x237425 = _0x5b7522(_0x237425, _0x5b7522(_0x5b7522(_0x4e7ea9(_0x43068b, _0x42b7d5, _0x28a910), _0x4caecc), _0x153e25));
    return _0x5b7522(_0x4bed39(_0x237425, _0xe1fb98), _0x43068b);
  }
  function _0x4518a9(_0x367ac7) {
    for (var _0x254e56, _0x6a458f = _0x367ac7.length, _0x46216d = _0x6a458f + 8, _0x669e30 = (_0x46216d - _0x46216d % 64) / 64, _0x5d5bfb = 16 * (_0x669e30 + 1), _0x90150a = new Array(_0x5d5bfb - 1), _0x1d66c8 = 0, _0x18ce3d = 0; _0x6a458f > _0x18ce3d;) {
      _0x254e56 = (_0x18ce3d - _0x18ce3d % 4) / 4;
      _0x1d66c8 = _0x18ce3d % 4 * 8;
      _0x90150a[_0x254e56] = _0x90150a[_0x254e56] | _0x367ac7.charCodeAt(_0x18ce3d) << _0x1d66c8;
      _0x18ce3d++;
    }
    _0x254e56 = (_0x18ce3d - _0x18ce3d % 4) / 4;
    _0x1d66c8 = _0x18ce3d % 4 * 8;
    _0x90150a[_0x254e56] = _0x90150a[_0x254e56] | 128 << _0x1d66c8;
    _0x90150a[_0x5d5bfb - 2] = _0x6a458f << 3;
    _0x90150a[_0x5d5bfb - 1] = _0x6a458f >>> 29;
    return _0x90150a;
  }
  function _0x1b32e4(_0x340441) {
    var _0x5ebba6,
      _0x2baa01,
      _0x190a28 = "",
      _0x5eb124 = "";
    for (_0x2baa01 = 0; 3 >= _0x2baa01; _0x2baa01++) {
      _0x5ebba6 = _0x340441 >>> 8 * _0x2baa01 & 255;
      _0x5eb124 = "0" + _0x5ebba6.toString(16);
      _0x190a28 += _0x5eb124.substr(_0x5eb124.length - 2, 2);
    }
    return _0x190a28;
  }
  function _0x1de6a9(_0x2afb78) {
    _0x2afb78 = _0x2afb78.replace(/\r\n/g, "\n");
    for (var _0x49a850 = "", _0x5001ae = 0; _0x5001ae < _0x2afb78.length; _0x5001ae++) {
      var _0x49ac64 = _0x2afb78.charCodeAt(_0x5001ae);
      128 > _0x49ac64 ? _0x49a850 += String.fromCharCode(_0x49ac64) : _0x49ac64 > 127 && 2048 > _0x49ac64 ? (_0x49a850 += String.fromCharCode(_0x49ac64 >> 6 | 192), _0x49a850 += String.fromCharCode(63 & _0x49ac64 | 128)) : (_0x49a850 += String.fromCharCode(_0x49ac64 >> 12 | 224), _0x49a850 += String.fromCharCode(_0x49ac64 >> 6 & 63 | 128), _0x49a850 += String.fromCharCode(63 & _0x49ac64 | 128));
    }
    return _0x49a850;
  }
  var _0x306c12,
    _0x160f4d,
    _0x6091cb,
    _0x59f41f,
    _0x4e614c,
    _0x4c6b9e,
    _0xfdb18,
    _0x86694e,
    _0x269c39,
    _0x543bf1 = [],
    _0xe5d3a0 = 7,
    _0x53ceef = 12,
    _0x43e7e5 = 17,
    _0x1efeae = 22,
    _0x333cad = 5,
    _0x1d6bed = 9,
    _0xee7a16 = 14,
    _0x16795a = 20,
    _0x4e8451 = 4,
    _0x390d2e = 11,
    _0x5742b1 = 16,
    _0x197e15 = 23,
    _0x40f5f7 = 6,
    _0x6dfb3 = 10,
    _0x15efa8 = 15,
    _0x5f02bf = 21;
  for (_0xd0d8ac = _0x1de6a9(_0xd0d8ac), _0x543bf1 = _0x4518a9(_0xd0d8ac), _0x4c6b9e = 1732584193, _0xfdb18 = 4023233417, _0x86694e = 2562383102, _0x269c39 = 271733878, _0x306c12 = 0; _0x306c12 < _0x543bf1.length; _0x306c12 += 16) {
    _0x160f4d = _0x4c6b9e;
    _0x6091cb = _0xfdb18;
    _0x59f41f = _0x86694e;
    _0x4e614c = _0x269c39;
    _0x4c6b9e = _0x29c273(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 0], _0xe5d3a0, 3614090360);
    _0x269c39 = _0x29c273(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 1], _0x53ceef, 3905402710);
    _0x86694e = _0x29c273(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 2], _0x43e7e5, 606105819);
    _0xfdb18 = _0x29c273(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 3], _0x1efeae, 3250441966);
    _0x4c6b9e = _0x29c273(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 4], _0xe5d3a0, 4118548399);
    _0x269c39 = _0x29c273(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 5], _0x53ceef, 1200080426);
    _0x86694e = _0x29c273(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 6], _0x43e7e5, 2821735955);
    _0xfdb18 = _0x29c273(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 7], _0x1efeae, 4249261313);
    _0x4c6b9e = _0x29c273(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 8], _0xe5d3a0, 1770035416);
    _0x269c39 = _0x29c273(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 9], _0x53ceef, 2336552879);
    _0x86694e = _0x29c273(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 10], _0x43e7e5, 4294925233);
    _0xfdb18 = _0x29c273(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 11], _0x1efeae, 2304563134);
    _0x4c6b9e = _0x29c273(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 12], _0xe5d3a0, 1804603682);
    _0x269c39 = _0x29c273(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 13], _0x53ceef, 4254626195);
    _0x86694e = _0x29c273(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 14], _0x43e7e5, 2792965006);
    _0xfdb18 = _0x29c273(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 15], _0x1efeae, 1236535329);
    _0x4c6b9e = _0x1050c1(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 1], _0x333cad, 4129170786);
    _0x269c39 = _0x1050c1(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 6], _0x1d6bed, 3225465664);
    _0x86694e = _0x1050c1(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 11], _0xee7a16, 643717713);
    _0xfdb18 = _0x1050c1(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 0], _0x16795a, 3921069994);
    _0x4c6b9e = _0x1050c1(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 5], _0x333cad, 3593408605);
    _0x269c39 = _0x1050c1(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 10], _0x1d6bed, 38016083);
    _0x86694e = _0x1050c1(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 15], _0xee7a16, 3634488961);
    _0xfdb18 = _0x1050c1(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 4], _0x16795a, 3889429448);
    _0x4c6b9e = _0x1050c1(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 9], _0x333cad, 568446438);
    _0x269c39 = _0x1050c1(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 14], _0x1d6bed, 3275163606);
    _0x86694e = _0x1050c1(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 3], _0xee7a16, 4107603335);
    _0xfdb18 = _0x1050c1(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 8], _0x16795a, 1163531501);
    _0x4c6b9e = _0x1050c1(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 13], _0x333cad, 2850285829);
    _0x269c39 = _0x1050c1(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 2], _0x1d6bed, 4243563512);
    _0x86694e = _0x1050c1(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 7], _0xee7a16, 1735328473);
    _0xfdb18 = _0x1050c1(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 12], _0x16795a, 2368359562);
    _0x4c6b9e = _0x1bd879(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 5], _0x4e8451, 4294588738);
    _0x269c39 = _0x1bd879(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 8], _0x390d2e, 2272392833);
    _0x86694e = _0x1bd879(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 11], _0x5742b1, 1839030562);
    _0xfdb18 = _0x1bd879(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 14], _0x197e15, 4259657740);
    _0x4c6b9e = _0x1bd879(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 1], _0x4e8451, 2763975236);
    _0x269c39 = _0x1bd879(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 4], _0x390d2e, 1272893353);
    _0x86694e = _0x1bd879(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 7], _0x5742b1, 4139469664);
    _0xfdb18 = _0x1bd879(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 10], _0x197e15, 3200236656);
    _0x4c6b9e = _0x1bd879(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 13], _0x4e8451, 681279174);
    _0x269c39 = _0x1bd879(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 0], _0x390d2e, 3936430074);
    _0x86694e = _0x1bd879(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 3], _0x5742b1, 3572445317);
    _0xfdb18 = _0x1bd879(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 6], _0x197e15, 76029189);
    _0x4c6b9e = _0x1bd879(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 9], _0x4e8451, 3654602809);
    _0x269c39 = _0x1bd879(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 12], _0x390d2e, 3873151461);
    _0x86694e = _0x1bd879(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 15], _0x5742b1, 530742520);
    _0xfdb18 = _0x1bd879(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 2], _0x197e15, 3299628645);
    _0x4c6b9e = _0x46d449(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 0], _0x40f5f7, 4096336452);
    _0x269c39 = _0x46d449(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 7], _0x6dfb3, 1126891415);
    _0x86694e = _0x46d449(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 14], _0x15efa8, 2878612391);
    _0xfdb18 = _0x46d449(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 5], _0x5f02bf, 4237533241);
    _0x4c6b9e = _0x46d449(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 12], _0x40f5f7, 1700485571);
    _0x269c39 = _0x46d449(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 3], _0x6dfb3, 2399980690);
    _0x86694e = _0x46d449(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 10], _0x15efa8, 4293915773);
    _0xfdb18 = _0x46d449(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 1], _0x5f02bf, 2240044497);
    _0x4c6b9e = _0x46d449(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 8], _0x40f5f7, 1873313359);
    _0x269c39 = _0x46d449(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 15], _0x6dfb3, 4264355552);
    _0x86694e = _0x46d449(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 6], _0x15efa8, 2734768916);
    _0xfdb18 = _0x46d449(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 13], _0x5f02bf, 1309151649);
    _0x4c6b9e = _0x46d449(_0x4c6b9e, _0xfdb18, _0x86694e, _0x269c39, _0x543bf1[_0x306c12 + 4], _0x40f5f7, 4149444226);
    _0x269c39 = _0x46d449(_0x269c39, _0x4c6b9e, _0xfdb18, _0x86694e, _0x543bf1[_0x306c12 + 11], _0x6dfb3, 3174756917);
    _0x86694e = _0x46d449(_0x86694e, _0x269c39, _0x4c6b9e, _0xfdb18, _0x543bf1[_0x306c12 + 2], _0x15efa8, 718787259);
    _0xfdb18 = _0x46d449(_0xfdb18, _0x86694e, _0x269c39, _0x4c6b9e, _0x543bf1[_0x306c12 + 9], _0x5f02bf, 3951481745);
    _0x4c6b9e = _0x5b7522(_0x4c6b9e, _0x160f4d);
    _0xfdb18 = _0x5b7522(_0xfdb18, _0x6091cb);
    _0x86694e = _0x5b7522(_0x86694e, _0x59f41f);
    _0x269c39 = _0x5b7522(_0x269c39, _0x4e614c);
  }
  var _0x49d814 = _0x1b32e4(_0x4c6b9e) + _0x1b32e4(_0xfdb18) + _0x1b32e4(_0x86694e) + _0x1b32e4(_0x269c39);
  return _0x49d814.toLowerCase();
}
function David_0x195b58(_0x378ee2) {
  var _0xe83269 = 8;
  var _0x353f95 = 0;
  function _0x5f1b76(_0x10e946, _0x3a265c) {
    var _0x2c0d41 = (_0x10e946 & 65535) + (_0x3a265c & 65535);
    var _0x1782db = (_0x10e946 >> 16) + (_0x3a265c >> 16) + (_0x2c0d41 >> 16);
    return _0x1782db << 16 | _0x2c0d41 & 65535;
  }
  function _0x2e5135(_0xbf947d, _0x4718cc) {
    return _0xbf947d >>> _0x4718cc | _0xbf947d << 32 - _0x4718cc;
  }
  function _0x3e42c4(_0x4c29c1, _0xed6e1c) {
    return _0x4c29c1 >>> _0xed6e1c;
  }
  function _0x3ffc27(_0x2176ca, _0x3a9022, _0x52c056) {
    return _0x2176ca & _0x3a9022 ^ ~_0x2176ca & _0x52c056;
  }
  function _0x4ed679(_0x2938da, _0x2a0de1, _0x328ff6) {
    return _0x2938da & _0x2a0de1 ^ _0x2938da & _0x328ff6 ^ _0x2a0de1 & _0x328ff6;
  }
  function _0x3366bb(_0x1fc31d) {
    return _0x2e5135(_0x1fc31d, 2) ^ _0x2e5135(_0x1fc31d, 13) ^ _0x2e5135(_0x1fc31d, 22);
  }
  function _0x525f9b(_0x5e3e91) {
    return _0x2e5135(_0x5e3e91, 6) ^ _0x2e5135(_0x5e3e91, 11) ^ _0x2e5135(_0x5e3e91, 25);
  }
  function _0x2a39bb(_0x44c614) {
    return _0x2e5135(_0x44c614, 7) ^ _0x2e5135(_0x44c614, 18) ^ _0x3e42c4(_0x44c614, 3);
  }
  function _0x86e354(_0x2e417c) {
    return _0x2e5135(_0x2e417c, 17) ^ _0x2e5135(_0x2e417c, 19) ^ _0x3e42c4(_0x2e417c, 10);
  }
  function _0x2ba709(_0x1c2247, _0x413f5c) {
    var _0x2ac3bc = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x320fbd = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x3ff214 = new Array(64);
    var _0x411a02, _0x15abb9, _0x554e5c, _0x13392a, _0x2d9a67, _0x26fc74, _0xb971b, _0x19d578;
    var _0x5ef277, _0x1fabb7;
    _0x1c2247[_0x413f5c >> 5] |= 128 << 24 - _0x413f5c % 32;
    _0x1c2247[(_0x413f5c + 64 >> 9 << 4) + 15] = _0x413f5c;
    for (var _0x461a2e = 0; _0x461a2e < _0x1c2247.length; _0x461a2e += 16) {
      _0x411a02 = _0x320fbd[0];
      _0x15abb9 = _0x320fbd[1];
      _0x554e5c = _0x320fbd[2];
      _0x13392a = _0x320fbd[3];
      _0x2d9a67 = _0x320fbd[4];
      _0x26fc74 = _0x320fbd[5];
      _0xb971b = _0x320fbd[6];
      _0x19d578 = _0x320fbd[7];
      for (var _0x367d83 = 0; _0x367d83 < 64; _0x367d83++) {
        if (_0x367d83 < 16) {
          _0x3ff214[_0x367d83] = _0x1c2247[_0x367d83 + _0x461a2e];
        } else {
          _0x3ff214[_0x367d83] = _0x5f1b76(_0x5f1b76(_0x5f1b76(_0x86e354(_0x3ff214[_0x367d83 - 2]), _0x3ff214[_0x367d83 - 7]), _0x2a39bb(_0x3ff214[_0x367d83 - 15])), _0x3ff214[_0x367d83 - 16]);
        }
        _0x5ef277 = _0x5f1b76(_0x5f1b76(_0x5f1b76(_0x5f1b76(_0x19d578, _0x525f9b(_0x2d9a67)), _0x3ffc27(_0x2d9a67, _0x26fc74, _0xb971b)), _0x2ac3bc[_0x367d83]), _0x3ff214[_0x367d83]);
        _0x1fabb7 = _0x5f1b76(_0x3366bb(_0x411a02), _0x4ed679(_0x411a02, _0x15abb9, _0x554e5c));
        _0x19d578 = _0xb971b;
        _0xb971b = _0x26fc74;
        _0x26fc74 = _0x2d9a67;
        _0x2d9a67 = _0x5f1b76(_0x13392a, _0x5ef277);
        _0x13392a = _0x554e5c;
        _0x554e5c = _0x15abb9;
        _0x15abb9 = _0x411a02;
        _0x411a02 = _0x5f1b76(_0x5ef277, _0x1fabb7);
      }
      _0x320fbd[0] = _0x5f1b76(_0x411a02, _0x320fbd[0]);
      _0x320fbd[1] = _0x5f1b76(_0x15abb9, _0x320fbd[1]);
      _0x320fbd[2] = _0x5f1b76(_0x554e5c, _0x320fbd[2]);
      _0x320fbd[3] = _0x5f1b76(_0x13392a, _0x320fbd[3]);
      _0x320fbd[4] = _0x5f1b76(_0x2d9a67, _0x320fbd[4]);
      _0x320fbd[5] = _0x5f1b76(_0x26fc74, _0x320fbd[5]);
      _0x320fbd[6] = _0x5f1b76(_0xb971b, _0x320fbd[6]);
      _0x320fbd[7] = _0x5f1b76(_0x19d578, _0x320fbd[7]);
    }
    return _0x320fbd;
  }
  function _0xacc59d(_0xd9b02c) {
    var _0x1d7697 = Array();
    var _0x59c29 = (1 << _0xe83269) - 1;
    for (var _0x42748b = 0; _0x42748b < _0xd9b02c.length * _0xe83269; _0x42748b += _0xe83269) {
      _0x1d7697[_0x42748b >> 5] |= (_0xd9b02c.charCodeAt(_0x42748b / _0xe83269) & _0x59c29) << 24 - _0x42748b % 32;
    }
    return _0x1d7697;
  }
  function _0x276cd1(_0x3fe2ea) {
    _0x3fe2ea = _0x3fe2ea.replace(/\r\n/g, "\n");
    var _0x379010 = "";
    for (var _0x446ec6 = 0; _0x446ec6 < _0x3fe2ea.length; _0x446ec6++) {
      var _0x2e8286 = _0x3fe2ea.charCodeAt(_0x446ec6);
      if (_0x2e8286 < 128) {
        _0x379010 += String.fromCharCode(_0x2e8286);
      } else {
        if (_0x2e8286 > 127 && _0x2e8286 < 2048) {
          _0x379010 += String.fromCharCode(_0x2e8286 >> 6 | 192);
          _0x379010 += String.fromCharCode(_0x2e8286 & 63 | 128);
        } else {
          _0x379010 += String.fromCharCode(_0x2e8286 >> 12 | 224);
          _0x379010 += String.fromCharCode(_0x2e8286 >> 6 & 63 | 128);
          _0x379010 += String.fromCharCode(_0x2e8286 & 63 | 128);
        }
      }
    }
    return _0x379010;
  }
  function _0x459d1b(_0x3dfa2d) {
    var _0x35b053 = _0x353f95 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x7705de = "";
    for (var _0xd378a1 = 0; _0xd378a1 < _0x3dfa2d.length * 4; _0xd378a1++) {
      _0x7705de += _0x35b053.charAt(_0x3dfa2d[_0xd378a1 >> 2] >> (3 - _0xd378a1 % 4) * 8 + 4 & 15) + _0x35b053.charAt(_0x3dfa2d[_0xd378a1 >> 2] >> (3 - _0xd378a1 % 4) * 8 & 15);
    }
    return _0x7705de;
  }
  _0x378ee2 = _0x276cd1(_0x378ee2);
  return _0x459d1b(_0x2ba709(_0xacc59d(_0x378ee2), _0x378ee2.length * _0xe83269));
}
function David_0x36df8f(_0x293c42) {
  function _0x353f76(_0x1eaf15, _0x44f2a2) {
    var _0x359a13 = _0x1eaf15 << _0x44f2a2 | _0x1eaf15 >>> 32 - _0x44f2a2;
    return _0x359a13;
  }
  function _0x201cbd(_0x21d52e) {
    var _0x2defa5 = "";
    var _0x100b58;
    var _0x31c6b6;
    var _0x24636a;
    for (_0x100b58 = 0; _0x100b58 <= 6; _0x100b58 += 2) {
      _0x31c6b6 = _0x21d52e >>> _0x100b58 * 4 + 4 & 15;
      _0x24636a = _0x21d52e >>> _0x100b58 * 4 & 15;
      _0x2defa5 += _0x31c6b6.toString(16) + _0x24636a.toString(16);
    }
    return _0x2defa5;
  }
  function _0x5d00c2(_0x51da13) {
    var _0x38e95a = "";
    var _0x2105cc;
    var _0xf1519d;
    for (_0x2105cc = 7; _0x2105cc >= 0; _0x2105cc--) {
      _0xf1519d = _0x51da13 >>> _0x2105cc * 4 & 15;
      _0x38e95a += _0xf1519d.toString(16);
    }
    return _0x38e95a;
  }
  function _0x53d181(_0x165018) {
    _0x165018 = _0x165018.replace(/\r\n/g, "\n");
    var _0x4b02a5 = "";
    for (var _0x5c250b = 0; _0x5c250b < _0x165018.length; _0x5c250b++) {
      var _0x279a51 = _0x165018.charCodeAt(_0x5c250b);
      if (_0x279a51 < 128) {
        _0x4b02a5 += String.fromCharCode(_0x279a51);
      } else {
        if (_0x279a51 > 127 && _0x279a51 < 2048) {
          _0x4b02a5 += String.fromCharCode(_0x279a51 >> 6 | 192);
          _0x4b02a5 += String.fromCharCode(_0x279a51 & 63 | 128);
        } else {
          _0x4b02a5 += String.fromCharCode(_0x279a51 >> 12 | 224);
          _0x4b02a5 += String.fromCharCode(_0x279a51 >> 6 & 63 | 128);
          _0x4b02a5 += String.fromCharCode(_0x279a51 & 63 | 128);
        }
      }
    }
    return _0x4b02a5;
  }
  var _0x4a5525;
  var _0x218c37, _0x58df2a;
  var _0x4909a2 = new Array(80);
  var _0x13d3ff = 1732584193;
  var _0x3817e6 = 4023233417;
  var _0x94f81f = 2562383102;
  var _0x56c3eb = 271733878;
  var _0x40ae4e = 3285377520;
  var _0x13d303, _0x3cd24e, _0x55d88d, _0x378d19, _0x36bbbc;
  _0x293c42 = _0x53d181(_0x293c42);
  var _0x2f5dd6 = _0x293c42.length;
  var _0x9ddff7 = new Array();
  for (_0x218c37 = 0; _0x218c37 < _0x2f5dd6 - 3; _0x218c37 += 4) {
    _0x58df2a = _0x293c42.charCodeAt(_0x218c37) << 24 | _0x293c42.charCodeAt(_0x218c37 + 1) << 16 | _0x293c42.charCodeAt(_0x218c37 + 2) << 8 | _0x293c42.charCodeAt(_0x218c37 + 3);
    _0x9ddff7.push(_0x58df2a);
  }
  switch (_0x2f5dd6 % 4) {
    case 0:
      _0x218c37 = 2147483648;
      break;
    case 1:
      _0x218c37 = _0x293c42.charCodeAt(_0x2f5dd6 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x218c37 = _0x293c42.charCodeAt(_0x2f5dd6 - 2) << 24 | _0x293c42.charCodeAt(_0x2f5dd6 - 1) << 16 | 32768;
      break;
    case 3:
      _0x218c37 = _0x293c42.charCodeAt(_0x2f5dd6 - 3) << 24 | _0x293c42.charCodeAt(_0x2f5dd6 - 2) << 16 | _0x293c42.charCodeAt(_0x2f5dd6 - 1) << 8 | 128;
      break;
  }
  _0x9ddff7.push(_0x218c37);
  while (_0x9ddff7.length % 16 != 14) {
    _0x9ddff7.push(0);
  }
  _0x9ddff7.push(_0x2f5dd6 >>> 29);
  _0x9ddff7.push(_0x2f5dd6 << 3 & 4294967295);
  for (_0x4a5525 = 0; _0x4a5525 < _0x9ddff7.length; _0x4a5525 += 16) {
    for (_0x218c37 = 0; _0x218c37 < 16; _0x218c37++) {
      _0x4909a2[_0x218c37] = _0x9ddff7[_0x4a5525 + _0x218c37];
    }
    for (_0x218c37 = 16; _0x218c37 <= 79; _0x218c37++) {
      _0x4909a2[_0x218c37] = _0x353f76(_0x4909a2[_0x218c37 - 3] ^ _0x4909a2[_0x218c37 - 8] ^ _0x4909a2[_0x218c37 - 14] ^ _0x4909a2[_0x218c37 - 16], 1);
    }
    _0x13d303 = _0x13d3ff;
    _0x3cd24e = _0x3817e6;
    _0x55d88d = _0x94f81f;
    _0x378d19 = _0x56c3eb;
    _0x36bbbc = _0x40ae4e;
    for (_0x218c37 = 0; _0x218c37 <= 19; _0x218c37++) {
      _0x304601 = _0x353f76(_0x13d303, 5) + (_0x3cd24e & _0x55d88d | ~_0x3cd24e & _0x378d19) + _0x36bbbc + _0x4909a2[_0x218c37] + 1518500249 & 4294967295;
      _0x36bbbc = _0x378d19;
      _0x378d19 = _0x55d88d;
      _0x55d88d = _0x353f76(_0x3cd24e, 30);
      _0x3cd24e = _0x13d303;
      _0x13d303 = _0x304601;
    }
    for (_0x218c37 = 20; _0x218c37 <= 39; _0x218c37++) {
      _0x304601 = _0x353f76(_0x13d303, 5) + (_0x3cd24e ^ _0x55d88d ^ _0x378d19) + _0x36bbbc + _0x4909a2[_0x218c37] + 1859775393 & 4294967295;
      _0x36bbbc = _0x378d19;
      _0x378d19 = _0x55d88d;
      _0x55d88d = _0x353f76(_0x3cd24e, 30);
      _0x3cd24e = _0x13d303;
      _0x13d303 = _0x304601;
    }
    for (_0x218c37 = 40; _0x218c37 <= 59; _0x218c37++) {
      _0x304601 = _0x353f76(_0x13d303, 5) + (_0x3cd24e & _0x55d88d | _0x3cd24e & _0x378d19 | _0x55d88d & _0x378d19) + _0x36bbbc + _0x4909a2[_0x218c37] + 2400959708 & 4294967295;
      _0x36bbbc = _0x378d19;
      _0x378d19 = _0x55d88d;
      _0x55d88d = _0x353f76(_0x3cd24e, 30);
      _0x3cd24e = _0x13d303;
      _0x13d303 = _0x304601;
    }
    for (_0x218c37 = 60; _0x218c37 <= 79; _0x218c37++) {
      _0x304601 = _0x353f76(_0x13d303, 5) + (_0x3cd24e ^ _0x55d88d ^ _0x378d19) + _0x36bbbc + _0x4909a2[_0x218c37] + 3395469782 & 4294967295;
      _0x36bbbc = _0x378d19;
      _0x378d19 = _0x55d88d;
      _0x55d88d = _0x353f76(_0x3cd24e, 30);
      _0x3cd24e = _0x13d303;
      _0x13d303 = _0x304601;
    }
    _0x13d3ff = _0x13d3ff + _0x13d303 & 4294967295;
    _0x3817e6 = _0x3817e6 + _0x3cd24e & 4294967295;
    _0x94f81f = _0x94f81f + _0x55d88d & 4294967295;
    _0x56c3eb = _0x56c3eb + _0x378d19 & 4294967295;
    _0x40ae4e = _0x40ae4e + _0x36bbbc & 4294967295;
  }
  var _0x304601 = _0x5d00c2(_0x13d3ff) + _0x5d00c2(_0x3817e6) + _0x5d00c2(_0x94f81f) + _0x5d00c2(_0x56c3eb) + _0x5d00c2(_0x40ae4e);
  return _0x304601.toLowerCase();
}
function David_0x17a185() {
  var _0x5c70af = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1f61d3) {
    var _0x5d1286 = "";
    var _0x20dab2, _0x2acde2, _0x233360, _0xa3c1d7, _0x495431, _0xfc897a, _0x49111a;
    var _0x4c48d2 = 0;
    _0x1f61d3 = utf8Encode(_0x1f61d3);
    while (_0x4c48d2 < _0x1f61d3.length) {
      _0x20dab2 = _0x1f61d3.charCodeAt(_0x4c48d2++);
      _0x2acde2 = _0x1f61d3.charCodeAt(_0x4c48d2++);
      _0x233360 = _0x1f61d3.charCodeAt(_0x4c48d2++);
      _0xa3c1d7 = _0x20dab2 >> 2;
      _0x495431 = (_0x20dab2 & 3) << 4 | _0x2acde2 >> 4;
      _0xfc897a = (_0x2acde2 & 15) << 2 | _0x233360 >> 6;
      _0x49111a = _0x233360 & 63;
      if (isNaN(_0x2acde2)) {
        _0xfc897a = _0x49111a = 64;
      } else {
        if (isNaN(_0x233360)) {
          _0x49111a = 64;
        }
      }
      _0x5d1286 = _0x5d1286 + _0x5c70af.charAt(_0xa3c1d7) + _0x5c70af.charAt(_0x495431) + _0x5c70af.charAt(_0xfc897a) + _0x5c70af.charAt(_0x49111a);
    }
    return _0x5d1286;
  };
  this.decode = function (_0x291961) {
    var _0x516986 = "";
    var _0x725734, _0x1c2f5d, _0x5b2acf;
    var _0x11e2e9, _0x29653a, _0x352ee4, _0x40f37a;
    var _0xba41d9 = 0;
    _0x291961 = _0x291961.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0xba41d9 < _0x291961.length) {
      _0x11e2e9 = _0x5c70af.indexOf(_0x291961.charAt(_0xba41d9++));
      _0x29653a = _0x5c70af.indexOf(_0x291961.charAt(_0xba41d9++));
      _0x352ee4 = _0x5c70af.indexOf(_0x291961.charAt(_0xba41d9++));
      _0x40f37a = _0x5c70af.indexOf(_0x291961.charAt(_0xba41d9++));
      _0x725734 = _0x11e2e9 << 2 | _0x29653a >> 4;
      _0x1c2f5d = (_0x29653a & 15) << 4 | _0x352ee4 >> 2;
      _0x5b2acf = (_0x352ee4 & 3) << 6 | _0x40f37a;
      _0x516986 = _0x516986 + String.fromCharCode(_0x725734);
      if (_0x352ee4 !== 64) {
        _0x516986 = _0x516986 + String.fromCharCode(_0x1c2f5d);
      }
      if (_0x40f37a !== 64) {
        _0x516986 = _0x516986 + String.fromCharCode(_0x5b2acf);
      }
    }
    _0x516986 = utf8Decode(_0x516986);
    return _0x516986;
  };
  utf8Encode = function (_0x5759af) {
    _0x5759af = _0x5759af.replace(/\r\n/g, "\n");
    var _0x3d9357 = "";
    for (var _0x16cfb8 = 0; _0x16cfb8 < _0x5759af.length; _0x16cfb8++) {
      var _0xab5a69 = _0x5759af.charCodeAt(_0x16cfb8);
      if (_0xab5a69 < 128) {
        _0x3d9357 += String.fromCharCode(_0xab5a69);
      } else {
        if (_0xab5a69 > 127 && _0xab5a69 < 2048) {
          _0x3d9357 += String.fromCharCode(_0xab5a69 >> 6 | 192);
          _0x3d9357 += String.fromCharCode(_0xab5a69 & 63 | 128);
        } else {
          _0x3d9357 += String.fromCharCode(_0xab5a69 >> 12 | 224);
          _0x3d9357 += String.fromCharCode(_0xab5a69 >> 6 & 63 | 128);
          _0x3d9357 += String.fromCharCode(_0xab5a69 & 63 | 128);
        }
      }
    }
    return _0x3d9357;
  };
  utf8Decode = function (_0x35f17f) {
    var _0x35d5ce = "";
    var _0xa0472e = 0;
    var _0x4ccc2f = 0;
    var _0x432e8a = 0;
    var _0x4f48f4 = 0;
    while (_0xa0472e < _0x35f17f.length) {
      _0x4ccc2f = _0x35f17f.charCodeAt(_0xa0472e);
      if (_0x4ccc2f < 128) {
        _0x35d5ce += String.fromCharCode(_0x4ccc2f);
        _0xa0472e++;
      } else {
        if (_0x4ccc2f > 191 && _0x4ccc2f < 224) {
          _0x432e8a = _0x35f17f.charCodeAt(_0xa0472e + 1);
          _0x35d5ce += String.fromCharCode((_0x4ccc2f & 31) << 6 | _0x432e8a & 63);
          _0xa0472e += 2;
        } else {
          _0x432e8a = _0x35f17f.charCodeAt(_0xa0472e + 1);
          _0x4f48f4 = _0x35f17f.charCodeAt(_0xa0472e + 2);
          _0x35d5ce += String.fromCharCode((_0x4ccc2f & 15) << 12 | (_0x432e8a & 63) << 6 | _0x4f48f4 & 63);
          _0xa0472e += 3;
        }
      }
    }
    return _0x35d5ce;
  };
}
function David_0x26fea5(_0x43cf12, _0x1d6d21) {
  class _0x55d457 {
    constructor(_0x450bb3) {
      this.env = _0x450bb3;
    }
    send(_0x492c53, _0xfb02af = "GET") {
      _0x492c53 = typeof _0x492c53 === "string" ? {
        url: _0x492c53
      } : _0x492c53;
      let _0x145793 = this.get;
      if (_0xfb02af === "POST") {
        _0x145793 = this.post;
      }
      return new Promise((_0x4f3f34, _0x4d2201) => {
        _0x145793.call(this, _0x492c53, (_0x8f683a, _0x3a54bc, _0x550c5e) => {
          if (_0x8f683a) {
            _0x4d2201(_0x8f683a);
          } else {
            _0x4f3f34(_0x3a54bc);
          }
        });
      });
    }
    get(_0x13d55f) {
      return this.send.call(this.env, _0x13d55f);
    }
    post(_0x257edb) {
      return this.send.call(this.env, _0x257edb, "POST");
    }
  }
  return new class {
    constructor(_0x4a55ea, _0x4c8a45) {
      this.name = _0x4a55ea;
      this.http = new _0x55d457(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4c8a45);
      const _0x4e24eb = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x4e24eb);
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
    toObj(_0x26db8f, _0x3f28cb = null) {
      try {
        return JSON.parse(_0x26db8f);
      } catch {
        return _0x3f28cb;
      }
    }
    toStr(_0x4f0055, _0x25fd38 = null) {
      try {
        return JSON.stringify(_0x4f0055);
      } catch {
        return _0x25fd38;
      }
    }
    getjson(_0x1c5082, _0x125005) {
      let _0x551851 = _0x125005;
      const _0x13b270 = this.getdata(_0x1c5082);
      if (_0x13b270) {
        try {
          _0x551851 = JSON.parse(this.getdata(_0x1c5082));
        } catch {}
      }
      return _0x551851;
    }
    setjson(_0x5b77cb, _0x4f646c) {
      try {
        return this.setdata(JSON.stringify(_0x5b77cb), _0x4f646c);
      } catch {
        return false;
      }
    }
    getScript(_0x3bd62b) {
      return new Promise(_0x25d8be => {
        const _0xcf6dfd = {
          url: _0x3bd62b
        };
        this.get(_0xcf6dfd, (_0x23b181, _0x25f9b8, _0x3c2c40) => _0x25d8be(_0x3c2c40));
      });
    }
    runScript(_0x41cfaf, _0x5d0e7c) {
      return new Promise(_0xb637c9 => {
        let _0x132f41 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x132f41 = _0x132f41 ? _0x132f41.replace(/\n/g, "").trim() : _0x132f41;
        let _0xc45776 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xc45776 = _0xc45776 ? _0xc45776 * 1 : 20;
        _0xc45776 = _0x5d0e7c && _0x5d0e7c.timeout ? _0x5d0e7c.timeout : _0xc45776;
        const [_0x48a372, _0x386860] = _0x132f41.split("@");
        const _0x534054 = {
          script_text: _0x41cfaf,
          mock_type: "cron",
          timeout: _0xc45776
        };
        const _0x54c7ab = {
          "X-Key": _0x48a372,
          Accept: "*/*"
        };
        const _0x4abe78 = {
          url: "http: //" + _0x386860 + "/v1/scripting/evaluate",
          body: _0x534054,
          headers: _0x54c7ab
        };
        this.post(_0x4abe78, (_0x4c7bf2, _0x566310, _0x15f9d7) => _0xb637c9(_0x15f9d7));
      }).catch(_0x46881c => this.logErr(_0x46881c));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5e005c = this.path.resolve(this.dataFile);
        const _0x10da34 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x432ccb = this.fs.existsSync(_0x5e005c);
        const _0x3bba1b = !_0x432ccb && this.fs.existsSync(_0x10da34);
        if (_0x432ccb || _0x3bba1b) {
          const _0x1affc9 = _0x432ccb ? _0x5e005c : _0x10da34;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1affc9));
          } catch (_0x192fcb) {
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
        const _0x189b79 = this.path.resolve(this.dataFile);
        const _0x5302c3 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x4a5425 = this.fs.existsSync(_0x189b79);
        const _0x5ab596 = !_0x4a5425 && this.fs.existsSync(_0x5302c3);
        const _0x1f873b = JSON.stringify(this.data);
        if (_0x4a5425) {
          this.fs.writeFileSync(_0x189b79, _0x1f873b);
        } else {
          if (_0x5ab596) {
            this.fs.writeFileSync(_0x5302c3, _0x1f873b);
          } else {
            this.fs.writeFileSync(_0x189b79, _0x1f873b);
          }
        }
      }
    }
    lodash_get(_0x1d6416, _0x4d6278, _0x58c625 = undefined) {
      const _0x5546cc = _0x4d6278.replace(/[(d+)]/g, ".$1").split(".");
      let _0x5930a9 = _0x1d6416;
      for (const _0x343049 of _0x5546cc) {
        _0x5930a9 = Object(_0x5930a9)[_0x343049];
        if (_0x5930a9 === undefined) {
          return _0x58c625;
        }
      }
      return _0x5930a9;
    }
    lodash_set(_0xc56e9, _0x96a43, _0x147045) {
      if (Object(_0xc56e9) !== _0xc56e9) {
        return _0xc56e9;
      }
      if (!Array.isArray(_0x96a43)) {
        _0x96a43 = _0x96a43.toString().match(/[^.[]]+/g) || [];
      }
      _0x96a43.slice(0, -1).reduce((_0x410dc1, _0x4ff1d5, _0x47bca0) => Object(_0x410dc1[_0x4ff1d5]) === _0x410dc1[_0x4ff1d5] ? _0x410dc1[_0x4ff1d5] : _0x410dc1[_0x4ff1d5] = Math.abs(_0x96a43[_0x47bca0 + 1]) >> 0 === +_0x96a43[_0x47bca0 + 1] ? [] : {}, _0xc56e9)[_0x96a43[_0x96a43.length - 1]] = _0x147045;
      return _0xc56e9;
    }
    getdata(_0x3b5c1c) {
      let _0x3a9c9e = this.getval(_0x3b5c1c);
      if (/^@/.test(_0x3b5c1c)) {
        const [, _0x15f504, _0xcba761] = /^@(.*?).(.*?)$/.exec(_0x3b5c1c);
        const _0x5f12b9 = _0x15f504 ? this.getval(_0x15f504) : "";
        if (_0x5f12b9) {
          try {
            const _0x32f341 = JSON.parse(_0x5f12b9);
            _0x3a9c9e = _0x32f341 ? this.lodash_get(_0x32f341, _0xcba761, "") : _0x3a9c9e;
          } catch (_0x16f067) {
            _0x3a9c9e = "";
          }
        }
      }
      return _0x3a9c9e;
    }
    setdata(_0x273e6a, _0x12ffa4) {
      let _0x13764c = false;
      if (/^@/.test(_0x12ffa4)) {
        const [, _0x2da35c, _0x291745] = /^@(.*?).(.*?)$/.exec(_0x12ffa4);
        const _0x381552 = this.getval(_0x2da35c);
        const _0x2e42cb = _0x2da35c ? _0x381552 === "null" ? null : _0x381552 || "{}" : "{}";
        try {
          const _0x369eec = JSON.parse(_0x2e42cb);
          this.lodash_set(_0x369eec, _0x291745, _0x273e6a);
          _0x13764c = this.setval(JSON.stringify(_0x369eec), _0x2da35c);
        } catch (_0x1a8dc7) {
          const _0x454eb6 = {};
          this.lodash_set(_0x454eb6, _0x291745, _0x273e6a);
          _0x13764c = this.setval(JSON.stringify(_0x454eb6), _0x2da35c);
        }
      } else {
        _0x13764c = this.setval(_0x273e6a, _0x12ffa4);
      }
      return _0x13764c;
    }
    getval(_0x164ce4) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x164ce4);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x164ce4);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x164ce4];
          } else {
            return this.data && this.data[_0x164ce4] || null;
          }
        }
      }
    }
    setval(_0x506bef, _0x54c547) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x506bef, _0x54c547);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x506bef, _0x54c547);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x54c547] = _0x506bef;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x54c547] || null;
          }
        }
      }
    }
    initGotEnv(_0x45b88f) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x45b88f) {
        _0x45b88f.headers = _0x45b88f.headers ? _0x45b88f.headers : {};
        if (undefined === _0x45b88f.headers.Cookie && undefined === _0x45b88f.cookieJar) {
          _0x45b88f.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x3475fc, _0x11cb9d = () => {}) {
      if (_0x3475fc.headers) {
        delete _0x3475fc.headers["Content-Type"];
        delete _0x3475fc.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x3475fc.headers = _0x3475fc.headers || {};
          const _0x8ff2b8 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x3475fc.headers, _0x8ff2b8);
        }
        $httpClient.get(_0x3475fc, (_0x2bbdc9, _0x4ba85b, _0x221335) => {
          if (!_0x2bbdc9 && _0x4ba85b) {
            _0x4ba85b.body = _0x221335;
            _0x4ba85b.statusCode = _0x4ba85b.status;
          }
          _0x11cb9d(_0x2bbdc9, _0x4ba85b, _0x221335);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x3475fc.opts = _0x3475fc.opts || {};
            const _0x3aa418 = {
              hints: false
            };
            Object.assign(_0x3475fc.opts, _0x3aa418);
          }
          $task.fetch(_0x3475fc).then(_0xb26675 => {
            const {
              statusCode: _0x3bc060,
              statusCode,
              headers,
              body
            } = _0xb26675;
            const _0x517ba1 = {
              status: _0x3bc060,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x11cb9d(null, _0x517ba1, body);
          }, _0x17e802 => _0x11cb9d(_0x17e802));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3475fc);
            this.got(_0x3475fc).on("redirect", (_0x174793, _0x3f3434) => {
              try {
                if (_0x174793.headers["set-cookie"]) {
                  const _0x2cc5d9 = _0x174793.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x2cc5d9) {
                    this.ckjar.setCookieSync(_0x2cc5d9, null);
                  }
                  _0x3f3434.cookieJar = this.ckjar;
                }
              } catch (_0x3dab9e) {
                this.logErr(_0x3dab9e);
              }
            }).then(_0x3ffd30 => {
              const {
                statusCode: _0x5a3630,
                statusCode,
                headers,
                body
              } = _0x3ffd30;
              const _0x2a9e10 = {
                status: _0x5a3630,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x11cb9d(null, _0x2a9e10, body);
            }, _0x1482b9 => {
              const {
                message: _0x4a37a2,
                response: _0x3ed8be
              } = _0x1482b9;
              _0x11cb9d(_0x4a37a2, _0x3ed8be, _0x3ed8be && _0x3ed8be.body);
            });
          }
        }
      }
    }
    post(_0x146837, _0xc5285b = () => {}) {
      const _0x82e592 = _0x146837.method ? _0x146837.method.toLocaleLowerCase() : "post";
      if (_0x146837.body && _0x146837.headers && !_0x146837.headers["Content-Type"]) {
        _0x146837.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x146837.headers) {
        delete _0x146837.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x146837.headers = _0x146837.headers || {};
          const _0x4c4d22 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x146837.headers, _0x4c4d22);
        }
        $httpClient[_0x82e592](_0x146837, (_0x52efef, _0x5efe71, _0x230b27) => {
          if (!_0x52efef && _0x5efe71) {
            _0x5efe71.body = _0x230b27;
            _0x5efe71.statusCode = _0x5efe71.status;
          }
          _0xc5285b(_0x52efef, _0x5efe71, _0x230b27);
        });
      } else {
        if (this.isQuanX()) {
          _0x146837.method = _0x82e592;
          if (this.isNeedRewrite) {
            _0x146837.opts = _0x146837.opts || {};
            const _0x4f1704 = {
              hints: false
            };
            Object.assign(_0x146837.opts, _0x4f1704);
          }
          $task.fetch(_0x146837).then(_0x13ba91 => {
            const {
              statusCode: _0x71594e,
              statusCode,
              headers,
              body
            } = _0x13ba91;
            const _0x59305c = {
              status: _0x71594e,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0xc5285b(null, _0x59305c, body);
          }, _0x1c6121 => _0xc5285b(_0x1c6121));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x146837);
            const {
              url,
              ..._0xfdca6
            } = _0x146837;
            this.got[_0x82e592](url, _0xfdca6).then(_0x10480b => {
              const {
                statusCode: _0x2b8bc2,
                statusCode,
                headers,
                body
              } = _0x10480b;
              const _0x8acf21 = {
                status: _0x2b8bc2,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0xc5285b(null, _0x8acf21, body);
            }, _0x3946f1 => {
              const {
                message: _0x1c60df,
                response: _0x1f8dc1
              } = _0x3946f1;
              _0xc5285b(_0x1c60df, _0x1f8dc1, _0x1f8dc1 && _0x1f8dc1.body);
            });
          }
        }
      }
    }
    put(_0x39e6fd, _0x5a4516 = () => {}) {
      const _0x5c79b2 = _0x39e6fd.method ? _0x39e6fd.method.toLocaleLowerCase() : "put";
      if (_0x39e6fd.body && _0x39e6fd.headers && !_0x39e6fd.headers["Content-Type"]) {
        _0x39e6fd.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x39e6fd.headers) {
        delete _0x39e6fd.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x39e6fd.headers = _0x39e6fd.headers || {};
          const _0x4d90ef = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x39e6fd.headers, _0x4d90ef);
        }
        $httpClient[_0x5c79b2](_0x39e6fd, (_0x589756, _0x4c9fce, _0x33ede7) => {
          if (!_0x589756 && _0x4c9fce) {
            _0x4c9fce.body = _0x33ede7;
            _0x4c9fce.statusCode = _0x4c9fce.status;
          }
          _0x5a4516(_0x589756, _0x4c9fce, _0x33ede7);
        });
      } else {
        if (this.isQuanX()) {
          _0x39e6fd.method = _0x5c79b2;
          if (this.isNeedRewrite) {
            _0x39e6fd.opts = _0x39e6fd.opts || {};
            const _0xb43632 = {
              hints: false
            };
            Object.assign(_0x39e6fd.opts, _0xb43632);
          }
          $task.fetch(_0x39e6fd).then(_0x404a0d => {
            const {
              statusCode: _0x105842,
              statusCode,
              headers,
              body
            } = _0x404a0d;
            const _0x4b4b22 = {
              status: _0x105842,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x5a4516(null, _0x4b4b22, body);
          }, _0x264e0f => _0x5a4516(_0x264e0f));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x39e6fd);
            const {
              url,
              ..._0x1b25ce
            } = _0x39e6fd;
            this.got[_0x5c79b2](url, _0x1b25ce).then(_0xdc61d3 => {
              const {
                statusCode: _0x45d756,
                statusCode,
                headers,
                body
              } = _0xdc61d3;
              const _0x5888cd = {
                status: _0x45d756,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x5a4516(null, _0x5888cd, body);
            }, _0x348518 => {
              const {
                message: _0x8b8c17,
                response: _0x26fce1
              } = _0x348518;
              _0x5a4516(_0x8b8c17, _0x26fce1, _0x26fce1 && _0x26fce1.body);
            });
          }
        }
      }
    }
    time(_0x4e4605, _0x232fec = null) {
      const _0x5c7933 = _0x232fec ? new Date(_0x232fec) : new Date();
      const _0x588d69 = {
        "M+": _0x5c7933.getMonth() + 1,
        "d+": _0x5c7933.getDate(),
        "H+": _0x5c7933.getHours(),
        "m+": _0x5c7933.getMinutes(),
        "s+": _0x5c7933.getSeconds(),
        "q+": Math.floor((_0x5c7933.getMonth() + 3) / 3),
        S: _0x5c7933.getMilliseconds()
      };
      if (/(y+)/.test(_0x4e4605)) {
        _0x4e4605 = _0x4e4605.replace(RegExp.$1, (_0x5c7933.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x4c7f07 in _0x588d69) if (new RegExp("(" + _0x4c7f07 + ")").test(_0x4e4605)) {
        _0x4e4605 = _0x4e4605.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x588d69[_0x4c7f07] : ("00" + _0x588d69[_0x4c7f07]).substr(("" + _0x588d69[_0x4c7f07]).length));
      }
      return _0x4e4605;
    }
    msg(_0x3d1a5a = _0x43cf12, _0x5c58f4 = "", _0x48b0d = "", _0x21831b) {
      const _0xd662aa = _0x4b3bda => {
        if (!_0x4b3bda) {
          return _0x4b3bda;
        }
        if (typeof _0x4b3bda === "string") {
          if (this.isLoon()) {
            return _0x4b3bda;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x4b3bda
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x4b3bda
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x4b3bda === "object") {
            if (this.isLoon()) {
              let _0x44c622 = _0x4b3bda.openUrl || _0x4b3bda.url || _0x4b3bda["open-url"];
              let _0xd757a1 = _0x4b3bda.mediaUrl || _0x4b3bda["media-url"];
              const _0xbd1dc0 = {
                openUrl: _0x44c622,
                mediaUrl: _0xd757a1
              };
              return _0xbd1dc0;
            } else {
              if (this.isQuanX()) {
                let _0x19c5fa = _0x4b3bda["open-url"] || _0x4b3bda.url || _0x4b3bda.openUrl;
                let _0x40a6f6 = _0x4b3bda["media-url"] || _0x4b3bda.mediaUrl;
                const _0x5e5712 = {
                  "open-url": _0x19c5fa,
                  "media-url": _0x40a6f6
                };
                return _0x5e5712;
              } else {
                if (this.isSurge()) {
                  let _0x5cee06 = _0x4b3bda.url || _0x4b3bda.openUrl || _0x4b3bda["open-url"];
                  const _0xaa1b73 = {
                    url: _0x5cee06
                  };
                  return _0xaa1b73;
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
          $notification.post(_0x3d1a5a, _0x5c58f4, _0x48b0d, _0xd662aa(_0x21831b));
        } else {
          if (this.isQuanX()) {
            $notify(_0x3d1a5a, _0x5c58f4, _0x48b0d, _0xd662aa(_0x21831b));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0xe50326 = ["", "==============📣系统通知📣=============="];
        _0xe50326.push(_0x3d1a5a);
        _0x5c58f4 ? _0xe50326.push(_0x5c58f4) : "";
        _0x48b0d ? _0xe50326.push(_0x48b0d) : "";
        console.log(_0xe50326.join("\n"));
        this.logs = this.logs.concat(_0xe50326);
      }
    }
    log(..._0x1fbc12) {
      if (_0x1fbc12.length > 0) {
        this.logs = [...this.logs, ..._0x1fbc12];
      }
      console.log(_0x1fbc12.join(this.logSeparator));
    }
    logErr(_0x4af302, _0x3f5a0b) {
      const _0x53d457 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x53d457) {
        this.log("", "❗️" + this.name + ", 错误!", _0x4af302);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x4af302.stack);
      }
    }
    wait(_0x231f27) {
      return new Promise(_0x1fa205 => setTimeout(_0x1fa205, _0x231f27));
    }
    done(_0x3b9a95 = {}) {
      const _0x356e16 = new Date().getTime();
      const _0x53bcd1 = (_0x356e16 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x53bcd1 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x3b9a95);
      }
    }
  }(_0x43cf12, _0x1d6d21);
}