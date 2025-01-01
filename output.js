//Wed Jan 01 2025 09:35:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("小福家"),
  version = "V1.0.7",
  appName = "xfjapp";
let xfjapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", f => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("xfjactivecode") || 0,
  xfjuserck = $.getval("xfjuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  xfjlogs = [],
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  contents = [],
  moments = [],
  shareCodes = ["opa3a1735207541"],
  assistCodes = ["opa951735207541"],
  httpResult = "",
  userAuth = "",
  scriptAuth = "",
  newest_version = "",
  runAuth = "";
let systemNotify = "",
  vipAuth = "",
  isCharge = "",
  multiAccount = 1,
  buyCount = 1,
  runTotalCounts = 1,
  runedCounts = 1,
  userRank = "",
  invicode = "",
  numbers = 3,
  vipDate = "",
  APP_KEY = "c983571ad200485383245bb8be8419e5";
let ACT_ID = "";
if ($.isNode()) {
  process.env.XFJAPP ? xfjapp = JSON.parse(process.env.XFJAPP) : xfjapp = COOKIES.XFJ;
  userId = process.env.TGUSERID;
  activeCode = process.env.XFJACTIVECODE;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  hour = new Date(new Date().getTime()).getHours();
  minute = new Date(new Date().getTime()).getMinutes();
  $.log("🔔 当前环境: Node, 当前时间：" + hour + "点");
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await getCk();
  } else {
    if (!xfjapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let N = false;
    const C = apiHost.split("&"),
      s = C.length;
    for (let L = 0; L < s; L++) {
      if ($.isNode()) {
        N = await checkAddress("" + C[L], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          N = await httpClientRequest("" + C[L], 2500);
        } else {
          N = await fetchRequest("" + C[L], 2500);
        }
      }
      if (N == true) {
        apiHost = C[L];
        $.log("📢 接口" + (L + 1) + "[" + C[L] + "]服务器接口正常! 🎉");
        break;
      }
      if (L == s - 1 && N == false) {
        $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!activeCode || !userId || userId == 1 || activeCode == 0 || activeCode.length != 32) {
      $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await getScriptAuth(appName, userId, activeCode);
    $.log("📢 " + systemNotify);
    $.log("🔔 当前脚本版本号: " + version + "，最新版本号: " + newest_version);
    if (vipDate != "") {
      let b = new Date(vipDate).getTime(),
        z = new Date().getTime();
      if (z > b) {
        $.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (version < newest_version) {
      $.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      sendMsg("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (scriptAuth != true) {
      $.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (userRank != true) {
      $.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (userAuth != true) {
      $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (isCharge == true) {
      $.log("🔔 此脚本采用付费模式。🔒");
    } else {
      $.log("🔔 此脚本采用免费模式。🔓");
    }
    if (vipDate != "") {
      if (isCharge == true) {
        let a = new Date(vipDate).getTime(),
          p = new Date().getTime();
        if (p > a) {
          $.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        } else {
          $.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
        }
      }
    } else {
      if (isCharge == true) {
        if (vipAuth != true) {
          $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        } else {
          $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        }
      }
    }
    if (multiAccount > 1) {
      $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
    }
    buyCount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    if (runAuth != true) {
      $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (xfjapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (xfjapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + xfjapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + xfjapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (xfjapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + xfjapp.length + "个账号");
    let U = [],
      c = xfjapp.length,
      y = 0;
    if ($.isNode() && process.env.XFJ_THREAD_COUNT) {
      y = parseInt(process.env.XFJ_THREAD_COUNT);
    } else {
      y = c;
    }
    let r = xfjapp.length;
    if (y >= c) {
      y = c;
      r = 1;
      $.log("📢 你设置的线程数是" + y + "，账号个数是" + c + "，" + r + "次可全部跑完。");
      for (let D = 0; D < xfjapp.length; D++) {
        U.push(runMultiTasks(D));
        xfjlogs[D] = "";
        if ($.isNode()) {
          channels_status[D] = 0;
          await init_ws(D);
        } else {
          channels_status[D] = 1;
        }
      }
      await Promise.allSettled(U).then(f2 => {
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let f5 = 0; f5 < xfjapp.length; f5++) {
          $.log(xfjlogs[f5]);
          sendlogs += xfjlogs[f5];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      r = Math.ceil(c / y);
      $.log("📢 你设置的线程数是" + y + "，账号个数是" + c + "，计算后分" + r + "次执行，一次可执行" + y + "个账号，最后一次如果不够" + y + "个账号，剩多少个账号就跑几个账号。");
      for (let f2 = 0; f2 < r; f2++) {
        for (let f4 = f2 * y; f4 < y * (f2 + 1) && f4 < c; f4++) {
          U.push(runMultiTasks(f4));
          xfjlogs[f4] = "";
          channels_status[f4] = 0;
          await init_ws(f4);
        }
        await Promise.allSettled(U).then(f6 => {
          U = [];
          if (f2 == r - 1) {
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let f9 = 0; f9 < xfjapp.length; f9++) {
              $.log(xfjlogs[f9]);
              sendlogs += xfjlogs[f9];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(f => $.logErr(f)).finally(() => $.done());
async function runMultiTasks(f) {
  return new Promise((N, C) => {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 开始执行 working......");
    runSubTask(N, f);
  });
}
async function init_ws(f) {
  $.isNode() && (reconectCounts[f] > 0 && $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 尝试重新连接服务器>>>>>>"), wss[f] = new WebSocket(apiHost.replace("http", "ws") + "/ws"), wss[f].on("open", function C() {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 签名通道已连接");
  }), wss[f].on("close", function s() {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
  }), wss[f].on("error", function U() {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 签名通道已关闭，原因是出现错误");
    channels_status[f] = 1;
    reconectCounts[f]++;
    if (reconectCounts[f] <= 3) {
      init_ws(f);
    }
  }));
}
async function runSubTask(f, w) {
  await $.wait(3000, 5000);
  await currentActivityInfo(w);
  await userInfo(w);
  await userCoin(w);
  await cleanSelfMoment(w);
  await redpacket(w);
  await createAssist(w);
  await createShare(w);
  await familyInfo(w);
  await taskList(w);
  await $.wait(randomNum(10000, 15000));
  await momentList(w);
  for (let C = 0; C < shareCodes.length; C++) {
    xfjapp[w].share_code != shareCodes[C] && (await shareInfo(w, shareCodes[C]), await $.wait(randomNum(3000, 5000)));
  }
  for (let c = 0; c < assistCodes.length; c++) {
    if (xfjapp[w].assist_code != assistCodes[c]) {
      await assistInfo(w, assistCodes[c]);
      await $.wait(randomNum(3000, 5000));
    }
  }
  if ($.isNode()) {
    await wss[w].close();
  }
  await runComplete(appName, userId);
  f();
}
async function getCk() {
  if ($request.url.match(/\/op-activity\/current-activity/)) {
    const U = $request.url,
      c = U.split("access_token=")[1].split("&appkey")[0];
    let y = xfjuserck - 1;
    if (xfjapp[y]) {
      xfjapp[y].token = c;
    } else {
      const l = {
        token: c
      };
      xfjapp[y] = l;
    }
    $.setdata(JSON.stringify(xfjapp, null, 2), "xfjapp");
    $.msg($.name, "小富家账号" + (y + 1) + "Token获取成功！🎉");
  }
}
async function refreshToken(f) {
  let N = ts10(),
    C = "appkey" + APP_KEY + "refresh_token" + xfjapp[f].refresh_token + "time" + N + "5b1d5a0ee5484e40bb6f343f55576072",
    s = MD5_Encrypt(C);
  const U = "https://api.xiaofujia.com/familychat/user/refresh-token?refresh_token=" + xfjapp[f].refresh_token + "&time=" + N + "&appkey=" + APP_KEY + "&sign=" + s;
  let c = "{}";
  await getReqObject(U, c, f);
  await httpRequest("post", requestObjects[f], printCaller());
  let y = httpResult;
  if (y != null && y.code == 0) {
    xfjapp[f].token = y.data.access_token;
  }
}
async function currentActivityInfo(f) {
  let N = ts10();
  let C = "access_token" + xfjapp[f].token + "appkey" + APP_KEY + "time" + N + "5b1d5a0ee5484e40bb6f343f55576072",
    s = MD5_Encrypt(C);
  const U = "https://api.xiaofujia.com/familychat/op-activity/current-activity?access_token=" + xfjapp[f].token + "&time=" + N + "&appkey=" + APP_KEY + "&sign=" + s;
  let c = "";
  await getReqObject(U, c, f);
  await httpRequest("get", requestObjects[f], printCaller());
  let y = httpResult;
  if (y != null && y.code == 0) {
    ACT_ID = y.data.activity_id;
  }
}
async function userInfo(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/user/info");
  await getReqObject(N, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 用户名=> " + C.data.profile.nickname);
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 用户名=> " + C.data.profile.nickname + "\n";
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 手机号=> " + C.data.profile.mobile);
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 手机号=> " + C.data.profile.mobile + "\n";
    xfjapp[f].uid = C.data.uid;
    if (C.data.uid == "6bbbc924de14419aafb2f9b4efec6bc4") {
      await getInvite(f);
    }
  } else {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 用户信息=> " + C.msg);
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 用户信息=> " + C.msg + "\n";
  }
}
async function userCoin(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/op-activity/user-coin?activity_id=" + ACT_ID);
  await getReqObject(N, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 福星=> " + C.data.remain_coins + "个");
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 福星=> " + C.data.remain_coins + "个\n";
    xfjapp[f].coins = C.data.remain_coins;
  } else {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 账户信息=> " + C.msg);
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 账户信息=> " + C.msg + "\n";
  }
}
async function taskList(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/op-activity/task-list?activity_id=" + ACT_ID);
  await getReqObject(N, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    let U = C.data;
    for (let c = 0; c < U.length; c++) {
      let r = U[c];
      if (r.task_status == 0) {
        if (r.task_name == "发动态") {
          await createMoment(f);
          await $.wait(randomNum(3000, 5000));
        } else {
          if (r.task_name == "App首次登录") {
            await doTask(f, r.task_id, r.task_name);
            await $.wait(randomNum(5000, 10000));
          } else {
            if (r.task_name == "每日打卡") {
              await doTask(f, r.task_id, r.task_name);
              await $.wait(randomNum(5000, 10000));
            }
          }
        }
      }
      if (r.task_status == 1) {
        if (r.task_name == "福星分享") {
          for (let S = 0; S < shareCodes.length; S++) {
            if (xfjapp[f].share_code != shareCodes[S]) {
              await shareInfo(f);
            }
          }
        } else {
          if (r.task_name == "每日打卡") {
            await doTask(f, r.task_id, r.task_name);
            await $.wait(randomNum(5000, 10000));
          }
        }
      }
    }
  } else {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 任务列表=> " + C.msg);
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 任务列表=> " + C.msg + "\n";
  }
}
async function doTask(f, w, N) {
  const s = await urlDeal(f, "https://api.xiaofujia.com/familychat/op-activity/do-task?activity_id=" + ACT_ID);
  let U = "{\"task_id\": \"" + w + "\"}";
  await getReqObject(s, U, f);
  await httpRequest("post", requestObjects[f], printCaller());
  let c = httpResult;
  c != null && c.code == 0 && ($.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 任务" + N + "=> " + c.msg), xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 任务" + N + "=> " + c.msg + "\n");
}
async function redpacket(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/op-activity/redenve-list?activity_id=" + ACT_ID);
  await getReqObject(N, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    let U = C.data.find(r => r.amount == 1),
      c = C.data.find(r => r.amount == 5),
      y = C.data.find(r => r.amount == 10);
    if (xfjapp[f].coins >= y.extra.exchange_coin_count && y.remain_count > 0 && y.redenve_status != 3) {
      await excharge(f, y.redenve_id);
    } else {
      if (xfjapp[f].coins >= c.extra.exchange_coin_count && xfjapp[f].coins < 10000 && c.remain_count > 0 && c.redenve_status != 3) {
        await excharge(f, c.redenve_id);
      } else {
        if (xfjapp[f].coins >= U.extra.exchange_coin_count && xfjapp[f].coins < 5000 && U.remain_count > 0 && U.redenve_status != 3) {
          await excharge(f, U.redenve_id);
        }
      }
    }
  }
}
async function excharge(f, w) {
  const C = await urlDeal(f, "https://api.xiaofujia.com/familychat/op-activity/redenve-receive?activity_id=" + ACT_ID);
  let s = "{\"redenve_id\": \"" + w + "\"}";
  await getReqObject(C, s, f);
  await httpRequest("post", requestObjects[f], printCaller());
  let U = httpResult;
  U != null && U.code == 0 && U.data.status == 1 && ($.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 兑换" + U.data.redenve_amount + "元=> " + U.msg), xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 兑换" + U.data.redenve_amount + "元=> " + U.msg + "\n");
}
async function createShare(C) {
  const U = await urlDeal(C, "https://api.xiaofujia.com/familychat/share/create?activity_id=" + ACT_ID);
  const c = {
    task_id: "a784b9a14b4845909eb126c7bb801341",
    activity_id: ACT_ID,
    scene_id: 4
  };
  const y = {
    op_activity_data: c
  };
  let l = {
    share_type: 11,
    share_channel: 1,
    data: y
  };
  await getReqObject(U, JSON.stringify(l), C);
  await httpRequest("post", requestObjects[C], printCaller());
  let L = httpResult;
  if (L != null && L.code == 0) {
    let d = L.data.url.split("=")[1];
    xfjapp[C].share_code = d;
  }
}
async function createAssist(C) {
  const U = await urlDeal(C, "https://api.xiaofujia.com/familychat/share/create?activity_id=" + ACT_ID),
    c = {
      activity_id: ACT_ID,
      task_id: "4f4b6dea1649453bb29f256dc9df1aae",
      scene_id: 3
    };
  const y = {
    op_activity_data: c
  };
  let l = {
    share_type: 11,
    share_channel: 2,
    data: y
  };
  await getReqObject(U, JSON.stringify(l), C);
  await httpRequest("post", requestObjects[C], printCaller());
  let L = httpResult;
  if (L != null && L.code == 0) {
    let X = L.data.url.split("=")[1];
    xfjapp[C].assist_code = X;
  }
}
async function shareInfo(f, w) {
  const C = await urlDeal(f, "https://api.xiaofujia.com/familychat/share/info?activity_id=" + ACT_ID + "&code=" + w);
  let s = "";
  await getReqObject(C, s, f);
  await httpRequest("get", requestObjects[f], printCaller());
  let U = httpResult;
  if (U != null && U.code == 0) {
    if (U.data.task_info.has_assist == false) {
      await takeAssist(f, U.data.task_info.task_id, U.data.task_info.uid);
    }
  }
}
async function assistInfo(f, w) {
  const C = await urlDeal(f, "https://api.xiaofujia.com/familychat/share/info?activity_id=" + ACT_ID + "&code=" + w);
  await getReqObject(C, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let s = httpResult;
  if (s != null && s.code == 0) {
    if (s.data.task_info.has_assist == false) {
      await takeAssist(f, s.data.task_info.task_id, s.data.task_info.uid);
    }
  }
}
async function takeAssist(f, w, N) {
  const s = await urlDeal(f, "https://api.xiaofujia.com/familychat/op-activity/task-assist?activity_id=" + ACT_ID);
  let U = "{\"task_id\":\"" + w + "\",\"assisted_uid\":\"" + N + "\"}";
  await getReqObject(s, U, f);
  await httpRequest("post", requestObjects[f], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    $.log("[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 赠送福星任务=> " + c.msg);
    xfjlogs[f] += "[账号" + (f + 1 < 10 ? "0" + (f + 1) : f + 1) + "]: 赠送福星任务=> " + c.msg + "=> " + c.msg + "\n";
  }
}
async function createMoment(w) {
  const C = await urlDeal(w, "https://api.xiaofujia.com/familychat/moment/create?version=1");
  await txt_api(w);
  const s = {
    visible_family_ids: [],
    visible_perm: 0
  };
  let U = {
    status: 2,
    perm_info: s,
    publish_time: $.time("yyyy-MM-dd qq HH:mm:ss"),
    text_content: contents[w]
  };
  await getReqObject(C, JSON.stringify(U), w);
  await httpRequest("post", requestObjects[w], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let r = c.data.moment_id;
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 发布动态(" + r + ")=> " + c.msg);
    moments.push(r);
    xfjapp[w].moment_id = r;
  }
}
async function momentList(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/moment/list?version=1&page_index=0&page_size=50");
  let C = "";
  await getReqObject(N, C, f);
  await httpRequest("get", requestObjects[f], printCaller());
  let s = httpResult;
  if (s != null && s.code == 0) {
    let c = s.data;
    for (let y = 0; y < c.length; y++) {
      let r = c[y],
        l = r.moment_id;
      r.is_stared == 0 && (await setStar(f, l), await $.wait(randomNum(3000, 5000)));
    }
  }
}
async function cleanSelfMoment(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/moment/list?version=1&page_index=0&page_size=50");
  let C = "";
  await getReqObject(N, C, f);
  await httpRequest("get", requestObjects[f], printCaller());
  let s = httpResult;
  if (s != null && s.code == 0) {
    let c = s.data;
    for (let y = 0; y < c.length; y++) {
      let r = c[y],
        l = r.moment_id;
      if (r.creator.uid == xfjapp[f].uid) {
        await delComent(f, l);
        await $.wait(randomNum(3000, 5000));
      }
    }
  }
}
async function setStar(w, N) {
  const s = await urlDeal(w, "https://api.xiaofujia.com/familychat/moment/set-star?version=1");
  let c = {
    emoticon_name: "dianzan",
    moment_id: N,
    star: 1
  };
  await getReqObject(s, JSON.stringify(c), w);
  await httpRequest("post", requestObjects[w], printCaller());
  let y = httpResult;
  if (y != null && y.code == 0) {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 点赞动态(" + N + ")=> " + y.msg);
  }
}
async function delComent(w, N) {
  const s = await urlDeal(w, "https://api.xiaofujia.com/familychat/moment/del?version=1");
  let c = {
    moment_id: N
  };
  await getReqObject(s, JSON.stringify(c), w);
  await httpRequest("post", requestObjects[w], printCaller());
  let y = httpResult;
  if (y != null && y.code == 0) {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 删除动态(" + N + ")=> " + y.msg);
  }
}
async function getInvite(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/family/invite-info?family_id=763cb4c5aca24ea1ba707c2654881300&version=1");
  await getReqObject(N, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    let U = C.data.invite_code;
    await redisSet("app_invicate_code", "xfjapp", U);
  }
}
async function familyInfo(f) {
  const N = await urlDeal(f, "https://api.xiaofujia.com/familychat/family/list?version=1");
  await getReqObject(N, "", f);
  await httpRequest("get", requestObjects[f], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    if (C.data.length == 0) {
      await join(f);
    }
  }
}
async function join(w) {
  const C = await urlDeal(w, "https://api.xiaofujia.com/familychat/family/join?version=1");
  let U = {
    join_type: 1,
    invite_code: invicode
  };
  await getReqObject(C, JSON.stringify(U), w);
  await httpRequest("post", requestObjects[w], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 加入圈子=> " + c.msg);
  }
}
async function urlDeal(w, N) {
  let s = ts10();
  const U = {
    time: "" + s,
    appkey: "" + APP_KEY,
    access_token: "" + xfjapp[w].token
  };
  let c = sortUrlParams(N, [], U);
  await selectChannel(w, c);
  return N + (N.indexOf("?") != -1 ? "&" : "?") + ("access_token=" + xfjapp[w].token + "&appkey=" + APP_KEY + "&sign=" + requestSigns[w] + "&time=" + s);
}
function getScriptAuth(f, w, N) {
  return new Promise((s, U) => {
    const y = apiHost + "/script/permissions/lastest",
      r = {
        appName: f,
        userId: w,
        activityCode: N,
        version: version
      };
    const l = r,
      L = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const X = {
      url: y,
      headers: L,
      body: JSON.stringify(l)
    };
    $.post(X, async (d, i, A) => {
      if (A && A != null && A.replace(/\"/g, "").length > 50) {
        const q = A.replace(/\"/g, "").slice(34),
          t = new Base64();
        result = JSON.parse(t.decode(q));
        try {
          newest_version = result.version;
          userAuth = result.userAuth;
          scriptAuth = result.scriptAuth;
          runAuth = result.runAuth;
          systemNotify = result.notify;
          vipAuth = result.vipAuth;
          isCharge = result.isCharge;
          multiAccount = result.runAcounts;
          buyCount = result.buyCount;
          runedCounts = result.runedCounts;
          runTotalCounts = result.runTotalCounts;
          userRank = result.userRank;
          invicode = result.invicate;
          numbers = result.accountNumbers;
          vipDate = result.vipDate;
        } catch (I) {
          $.log(I);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      s();
    });
  });
}
function runComplete(f, w) {
  return new Promise((C, s) => {
    const y = apiHost + "/script/run/add";
    const l = {
        appName: f,
        userId: w,
        activityCode: activeCode,
        version: version
      },
      L = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const X = {
      url: y,
      headers: L,
      body: JSON.stringify(l)
    };
    $.post(X, async (d, i, A) => {
      C();
    });
  });
}
function checkAddress(f, w) {
  return new Promise((C, s) => {
    const c = setTimeout(() => {
        C(false);
      }, w),
      y = http.get(f, r => {
        clearTimeout(c);
        if (r.statusCode === 404) {
          C(true);
        } else {
          C(false);
        }
      });
    y.on("error", r => {
      clearTimeout(c);
      C(false);
    });
    y.on("timeout", () => {
      y.abort();
      s(new Error("请求超时"));
    });
  });
}
async function fetchRequest(f, w = 3000) {
  return new Promise((C, s) => {
    const y = {
      url: f + "/docs"
    };
    setTimeout(() => {
      C(false);
    }, w);
    $.get(y, async (r, l, L) => {
      if (l.status == 401) {
        C(true);
      } else {
        C(false);
      }
    });
  });
}
async function httpClientRequest(f, w = 3000) {
  return new Promise((C, s) => {
    const c = {
      url: f + "/"
    };
    setTimeout(() => {
      C(false);
    }, w);
    $httpClient.get(c, async (y, r, l) => {
      if (l == "{\"detail\":\"Not Found\"}") {
        C(true);
      } else {
        C(false);
      }
    });
  });
}
async function redisGet(f, w, N) {
  return new Promise((s, U) => {
    const y = apiHost + "/redis/hash/get/" + w + "/" + N,
      r = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const L = {
      url: y,
      headers: r
    };
    $.get(L, async (X, d, A) => {
      const g = A.replace(/\"/g, "");
      answerTexts[f] = g;
      s();
    });
  });
}
function redisSet(f, w, N) {
  return new Promise((s, U) => {
    const r = apiHost + "/redis/hash/set";
    const L = {
        key: f,
        hashKey: w,
        hashValue: N
      },
      X = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const d = {
      url: r,
      headers: X,
      body: JSON.stringify(L)
    };
    $.post(d, async (i, A, S) => {
      s();
    });
  });
}
function redisPop(f) {
  return new Promise((N, C) => {
    const c = apiHost + "/redis/set/pop/" + f,
      y = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const l = {
      url: c,
      headers: y
    };
    $.get(l, async (L, X, d) => {
      const A = d.replace(/\"/g, "");
      popCookie = A;
      N();
    });
  });
}
async function getReqObject(N, C, s) {
  let c = "Mozilla/5.0·(iPhone;·CPU·iPhone·OS·18_2·like·Mac·OS·X)·AppleWebKit/605.1.15·(KHTML,·like·Gecko)·Mobile/15E148·MicroMessenger/8.0.54(0x18003637)·NetType/WIFI·Language/zh_CN";
  if (xfjapp[s].ua && xfjapp[s].ua != "") {
    c = xfjapp[s].ua;
  }
  let y = getHostname(N);
  const r = {
    "Content-Type": "application/json;charset=UTF-8",
    "User-Agent": c,
    Host: y
  };
  let L = {
    url: N,
    headers: r
  };
  if (C) {
    L.body = C;
  }
  requestObjects[s] = L;
  return L;
}
function getReqObject_(N, C, s) {
  let c = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  xfjapp[s].ua && xfjapp[s].ua != "" && (c = xfjapp[s].ua);
  let y = getHostname(N);
  const r = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": c,
    Authorization: xfjapp[s].auth,
    Host: y
  };
  let L = {
    url: N,
    headers: r
  };
  if (C) {
    L.body = C;
  }
  requestObjects[s] = L;
  return L;
}
async function httpRequest(f, w, N) {
  httpResult = null;
  return new Promise(s => {
    $[f](w, async (y, r, l) => {
      try {
        if (y) {
          $.log(N + ": " + f + "请求失败");
          $.log(JSON.stringify(y));
          $.logErr(y);
        } else {
          if (safeGet(l)) {
            httpResult = JSON.parse(l);
            debug == 1 && $.log(httpResult);
          } else {
            const t = new URL(w.url);
            $.log(t.pathname + "发起" + f + "请求时，出现错误，请处理");
          }
        }
      } catch (b) {
        $.logErr(b, r);
      } finally {
        s(httpResult);
      }
    });
  });
}
async function selectChannel(f, w) {
  if (channels_status[f] == 0) {
    await getSign_(f, w);
  } else {
    await getSign(f, w);
  }
}
function getSign_(f, w) {
  return new Promise((C, s) => {
    function c(y) {
      let L = y.toString("utf8");
      requestSigns[f] = L;
      wss[f].removeListener("message", c);
      C(L);
    }
    wss[f].on("message", c);
    if (wss[f].readyState === 1) {
      const r = {
        method: appName,
        params: {}
      };
      r.params.content = w;
      r.params.appName = appName;
      r.params.uuid = userId;
      wss[f].send(JSON.stringify(r), l => {
        l && s(l);
      });
    } else {
      C(getSign(f, w));
      wss[f].removeListener("message", c);
    }
  });
}
function getSign(f, w) {
  return new Promise((C, s) => {
    const c = apiHost + "/sign/xfj";
    const r = {
        content: w,
        appName: appName,
        uuid: userId
      },
      l = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const L = {
      url: c,
      headers: l,
      body: JSON.stringify(r)
    };
    $.post(L, async (X, d, A) => {
      const q = A.replace(/\"/g, "");
      requestSigns[f] = q;
      C();
    });
  });
}
function sortUrlParams(f, w, N) {
  const s = url2obj(f);
  w.forEach(y => {
    delete s[y];
  });
  Object.assign(s, N);
  const U = Object.keys(s).sort(),
    c = U.map(y => "" + y + s[y]).join("");
  return c;
}
function url2obj(w) {
  w = w.replace(/\"/g, "");
  var s,
    U = {};
  if (w.indexOf("?") != -1) {
    var c = w.slice(w.indexOf("?") + 1).split("&");
    for (var y = 0; y < c.length; y++) {
      s = c[y].split("=");
      U[s[0]] = s[1];
    }
  }
  return U;
}
function convertStringToJson(w) {
  const s = w.replace(/[{} ]/g, "");
  const U = s.split(",");
  const c = {};
  U.forEach(y => {
    const [l, L] = y.split("=");
    c[l] = L;
  });
  return c;
}
function getHostname(f) {
  let N = f.substr(f.indexOf("//") + 2),
    C = N.substr(0, N.indexOf("/"));
  let s = "",
    U = C.indexOf(":");
  if (U > 0) {
    s = C.substr(0, U);
  } else {
    s = C;
  }
  return s;
}
function calculateTimeDifference(w, N) {
  var r = new Date(w);
  var l = new Date(N);
  var L = l - r;
  var y = Math.floor(L / 1000);
  return y;
}
function cutString(f, w) {
  if (f.length * 2 <= w) {
    return f;
  }
  var C = 0;
  var U = "";
  for (var c = 0; c < f.length; c++) {
    U = U + f.charAt(c);
    if (f.charCodeAt(c) > 128) {
      C = C + 2;
      if (C >= w) {
        return U.substring(0, U.length - 1) + "...";
      }
    } else {
      C = C + 1;
      if (C >= w) {
        return U.substring(0, U.length - 2) + "...";
      }
    }
  }
  return U;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(f) {
  try {
    if (typeof JSON.parse(f) == "object") {
      return true;
    }
  } catch (s) {
    console.log(s);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(f) {
  var N = Object.keys(f).map(function (C) {
    return encodeURIComponent(C) + "=" + encodeURIComponent(f[C]);
  }).join("&");
  return N;
}
function compileStr(f) {
  var N = String.fromCharCode(f.charCodeAt(0) + f.length);
  for (var C = 1; C < f.length; C++) {
    N += String.fromCharCode(f.charCodeAt(C) + f.charCodeAt(C - 1));
  }
  return escape(N);
}
function uncompileStr(f) {
  f = unescape(f);
  var N = String.fromCharCode(f.charCodeAt(0) - f.length);
  for (var C = 1; C < f.length; C++) {
    N += String.fromCharCode(f.charCodeAt(C) - N.charCodeAt(C - 1));
  }
  return N;
}
function randomNum(f, w) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1);
      break;
    case 2:
      return parseInt(Math.random() * (w - f + 1) + f);
      break;
    default:
      return 0;
      break;
  }
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function guid() {
  function w() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return w() + w() + "-" + w() + "-" + w() + "-" + w() + "-" + w() + w() + w();
}
function phone_num(w) {
  if (w.length == 11) {
    let s = w.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return s;
  } else {
    return w;
  }
}
function txt_api(f) {
  return new Promise((N, C) => {
    const c = "https://v1.hitokoto.cn/?c=e",
      y = {
        accept: "application/json"
      };
    const l = {
      url: c,
      headers: y
    };
    $.get(l, async (L, X, d) => {
      if (d) {
        let S = JSON.parse(d),
          g = S.hitokoto;
        contents[f] = g;
      } else {
        contents[f] = "又是开心快乐的一天！";
      }
      N();
    });
  });
}
function getTime_8() {
  return new Promise((w, N) => {
    const s = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const c = {
      url: s
    };
    $.get(c, async (y, r, l) => {
      w(l);
    });
  });
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function message() {
  tz == 1 && $.msg($.name, "", $.message);
}
async function sendMsg(f) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, f);
      } else {
        $.msg($.name, "", f);
      }
    } else {
      $.log(f);
    }
  }
}
async function wxPush(f, w, N) {
  return new Promise((s, U) => {
    const y = "https://wxpusher.zjiecode.com/api/send/message";
    const l = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: w,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [N],
        verifyPay: false
      },
      L = {
        "Content-Type": "application/json"
      };
    const X = {
      url: y,
      headers: L,
      body: JSON.stringify(l)
    };
    $.post(X, async (d, A, S) => {
      s();
    });
  });
}
function randomString(w, N) {
  N = N || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let U = "";
  for (let c = 0; c < w; c++) {
    let y = Math.floor(Math.random() * N.length);
    U += N.substring(y, y + 1);
  }
  return U;
}
function MD5_Encrypt(U) {
  function S(fI, fj) {
    return fI << fj | fI >>> 32 - fj;
  }
  function Q(fI, fj) {
    var fQ, fJ, fE, fM, fR;
    fE = 2147483648 & fI;
    fM = 2147483648 & fj;
    fQ = 1073741824 & fI;
    fJ = 1073741824 & fj;
    fR = (1073741823 & fI) + (1073741823 & fj);
    return fQ & fJ ? 2147483648 ^ fR ^ fE ^ fM : fQ | fJ ? 1073741824 & fR ? 3221225472 ^ fR ^ fE ^ fM : 1073741824 ^ fR ^ fE ^ fM : fR ^ fE ^ fM;
  }
  function R(fI, fj, fQ) {
    return fI & fj | ~fI & fQ;
  }
  function W(fI, fj, fQ) {
    return fI & fQ | fj & ~fQ;
  }
  function T(fI, fj, fQ) {
    return fI ^ fj ^ fQ;
  }
  function Z(fI, fj, fQ) {
    return fj ^ (fI | ~fQ);
  }
  function P(fI, fj, fQ, fJ, fE, fM, fR) {
    fI = Q(fI, Q(Q(R(fj, fQ, fJ), fE), fR));
    return Q(S(fI, fM), fj);
  }
  function Y(fI, fj, fQ, fJ, fE, fM, fR) {
    fI = Q(fI, Q(Q(W(fj, fQ, fJ), fE), fR));
    return Q(S(fI, fM), fj);
  }
  function V(fI, fj, fQ, fJ, fE, fM, fR) {
    fI = Q(fI, Q(Q(T(fj, fQ, fJ), fE), fR));
    return Q(S(fI, fM), fj);
  }
  function f0(fI, fj, fQ, fJ, fE, fM, fR) {
    fI = Q(fI, Q(Q(Z(fj, fQ, fJ), fE), fR));
    return Q(S(fI, fM), fj);
  }
  function f1(fI) {
    for (var fQ, fJ = fI.length, fE = fJ + 8, fM = (fE - fE % 64) / 64, fR = 16 * (fM + 1), fm = new Array(fR - 1), fa = 0, fp = 0; fJ > fp;) {
      fQ = (fp - fp % 4) / 4;
      fa = fp % 4 * 8;
      fm[fQ] = fm[fQ] | fI.charCodeAt(fp) << fa;
      fp++;
    }
    fQ = (fp - fp % 4) / 4;
    fa = fp % 4 * 8;
    fm[fQ] = fm[fQ] | 128 << fa;
    fm[fR - 2] = fJ << 3;
    fm[fR - 1] = fJ >>> 29;
    return fm;
  }
  function f2(fI) {
    var fj,
      fQ,
      fJ = "",
      fE = "";
    for (fQ = 0; 3 >= fQ; fQ++) {
      fj = fI >>> 8 * fQ & 255;
      fE = "0" + fj.toString(16);
      fJ += fE.substr(fE.length - 2, 2);
    }
    return fJ;
  }
  function f3(fI) {
    fI = fI.replace(/\r\n/g, "\n");
    for (var fj = "", fQ = 0; fQ < fI.length; fQ++) {
      var fJ = fI.charCodeAt(fQ);
      128 > fJ ? fj += String.fromCharCode(fJ) : fJ > 127 && 2048 > fJ ? (fj += String.fromCharCode(fJ >> 6 | 192), fj += String.fromCharCode(63 & fJ | 128)) : (fj += String.fromCharCode(fJ >> 12 | 224), fj += String.fromCharCode(fJ >> 6 & 63 | 128), fj += String.fromCharCode(63 & fJ | 128));
    }
    return fj;
  }
  var f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    ff,
    fw,
    fN,
    fC = [],
    fU = 7,
    fc = 12,
    fy = 17,
    fr = 22,
    fl = 5,
    fL = 9,
    fX = 14,
    fd = 20,
    fi = 4,
    fA = 11,
    fS = 16,
    fg = 23,
    fq = 6,
    ft = 10,
    fb = 15,
    fz = 21;
  for (U = f3(U), fC = f1(U), f9 = 1732584193, ff = 4023233417, fw = 2562383102, fN = 271733878, f4 = 0; f4 < fC.length; f4 += 16) {
    f5 = f9;
    f6 = ff;
    f7 = fw;
    f8 = fN;
    f9 = P(f9, ff, fw, fN, fC[f4 + 0], fU, 3614090360);
    fN = P(fN, f9, ff, fw, fC[f4 + 1], fc, 3905402710);
    fw = P(fw, fN, f9, ff, fC[f4 + 2], fy, 606105819);
    ff = P(ff, fw, fN, f9, fC[f4 + 3], fr, 3250441966);
    f9 = P(f9, ff, fw, fN, fC[f4 + 4], fU, 4118548399);
    fN = P(fN, f9, ff, fw, fC[f4 + 5], fc, 1200080426);
    fw = P(fw, fN, f9, ff, fC[f4 + 6], fy, 2821735955);
    ff = P(ff, fw, fN, f9, fC[f4 + 7], fr, 4249261313);
    f9 = P(f9, ff, fw, fN, fC[f4 + 8], fU, 1770035416);
    fN = P(fN, f9, ff, fw, fC[f4 + 9], fc, 2336552879);
    fw = P(fw, fN, f9, ff, fC[f4 + 10], fy, 4294925233);
    ff = P(ff, fw, fN, f9, fC[f4 + 11], fr, 2304563134);
    f9 = P(f9, ff, fw, fN, fC[f4 + 12], fU, 1804603682);
    fN = P(fN, f9, ff, fw, fC[f4 + 13], fc, 4254626195);
    fw = P(fw, fN, f9, ff, fC[f4 + 14], fy, 2792965006);
    ff = P(ff, fw, fN, f9, fC[f4 + 15], fr, 1236535329);
    f9 = Y(f9, ff, fw, fN, fC[f4 + 1], fl, 4129170786);
    fN = Y(fN, f9, ff, fw, fC[f4 + 6], fL, 3225465664);
    fw = Y(fw, fN, f9, ff, fC[f4 + 11], fX, 643717713);
    ff = Y(ff, fw, fN, f9, fC[f4 + 0], fd, 3921069994);
    f9 = Y(f9, ff, fw, fN, fC[f4 + 5], fl, 3593408605);
    fN = Y(fN, f9, ff, fw, fC[f4 + 10], fL, 38016083);
    fw = Y(fw, fN, f9, ff, fC[f4 + 15], fX, 3634488961);
    ff = Y(ff, fw, fN, f9, fC[f4 + 4], fd, 3889429448);
    f9 = Y(f9, ff, fw, fN, fC[f4 + 9], fl, 568446438);
    fN = Y(fN, f9, ff, fw, fC[f4 + 14], fL, 3275163606);
    fw = Y(fw, fN, f9, ff, fC[f4 + 3], fX, 4107603335);
    ff = Y(ff, fw, fN, f9, fC[f4 + 8], fd, 1163531501);
    f9 = Y(f9, ff, fw, fN, fC[f4 + 13], fl, 2850285829);
    fN = Y(fN, f9, ff, fw, fC[f4 + 2], fL, 4243563512);
    fw = Y(fw, fN, f9, ff, fC[f4 + 7], fX, 1735328473);
    ff = Y(ff, fw, fN, f9, fC[f4 + 12], fd, 2368359562);
    f9 = V(f9, ff, fw, fN, fC[f4 + 5], fi, 4294588738);
    fN = V(fN, f9, ff, fw, fC[f4 + 8], fA, 2272392833);
    fw = V(fw, fN, f9, ff, fC[f4 + 11], fS, 1839030562);
    ff = V(ff, fw, fN, f9, fC[f4 + 14], fg, 4259657740);
    f9 = V(f9, ff, fw, fN, fC[f4 + 1], fi, 2763975236);
    fN = V(fN, f9, ff, fw, fC[f4 + 4], fA, 1272893353);
    fw = V(fw, fN, f9, ff, fC[f4 + 7], fS, 4139469664);
    ff = V(ff, fw, fN, f9, fC[f4 + 10], fg, 3200236656);
    f9 = V(f9, ff, fw, fN, fC[f4 + 13], fi, 681279174);
    fN = V(fN, f9, ff, fw, fC[f4 + 0], fA, 3936430074);
    fw = V(fw, fN, f9, ff, fC[f4 + 3], fS, 3572445317);
    ff = V(ff, fw, fN, f9, fC[f4 + 6], fg, 76029189);
    f9 = V(f9, ff, fw, fN, fC[f4 + 9], fi, 3654602809);
    fN = V(fN, f9, ff, fw, fC[f4 + 12], fA, 3873151461);
    fw = V(fw, fN, f9, ff, fC[f4 + 15], fS, 530742520);
    ff = V(ff, fw, fN, f9, fC[f4 + 2], fg, 3299628645);
    f9 = f0(f9, ff, fw, fN, fC[f4 + 0], fq, 4096336452);
    fN = f0(fN, f9, ff, fw, fC[f4 + 7], ft, 1126891415);
    fw = f0(fw, fN, f9, ff, fC[f4 + 14], fb, 2878612391);
    ff = f0(ff, fw, fN, f9, fC[f4 + 5], fz, 4237533241);
    f9 = f0(f9, ff, fw, fN, fC[f4 + 12], fq, 1700485571);
    fN = f0(fN, f9, ff, fw, fC[f4 + 3], ft, 2399980690);
    fw = f0(fw, fN, f9, ff, fC[f4 + 10], fb, 4293915773);
    ff = f0(ff, fw, fN, f9, fC[f4 + 1], fz, 2240044497);
    f9 = f0(f9, ff, fw, fN, fC[f4 + 8], fq, 1873313359);
    fN = f0(fN, f9, ff, fw, fC[f4 + 15], ft, 4264355552);
    fw = f0(fw, fN, f9, ff, fC[f4 + 6], fb, 2734768916);
    ff = f0(ff, fw, fN, f9, fC[f4 + 13], fz, 1309151649);
    f9 = f0(f9, ff, fw, fN, fC[f4 + 4], fq, 4149444226);
    fN = f0(fN, f9, ff, fw, fC[f4 + 11], ft, 3174756917);
    fw = f0(fw, fN, f9, ff, fC[f4 + 2], fb, 718787259);
    ff = f0(ff, fw, fN, f9, fC[f4 + 9], fz, 3951481745);
    f9 = Q(f9, f5);
    ff = Q(ff, f6);
    fw = Q(fw, f7);
    fN = Q(fN, f8);
  }
  var fv = f2(f9) + f2(ff) + f2(fw) + f2(fN);
  return fv.toLowerCase();
}
function SHA256(f) {
  var N = 8;
  var C = 0;
  function U(b, z) {
    var I = (b & 65535) + (z & 65535),
      j = (b >> 16) + (z >> 16) + (I >> 16);
    return j << 16 | I & 65535;
  }
  function c(b, z) {
    return b >>> z | b << 32 - z;
  }
  function y(b, z) {
    return b >>> z;
  }
  function r(b, v, I) {
    return b & v ^ ~b & I;
  }
  function l(b, v, I) {
    return b & v ^ b & I ^ v & I;
  }
  function L(b) {
    return c(b, 2) ^ c(b, 13) ^ c(b, 22);
  }
  function X(b) {
    return c(b, 6) ^ c(b, 11) ^ c(b, 25);
  }
  function d(b) {
    return c(b, 7) ^ c(b, 18) ^ y(b, 3);
  }
  function i(b) {
    return c(b, 17) ^ c(b, 19) ^ y(b, 10);
  }
  function A(z, v) {
    var Q = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      J = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      E = new Array(64),
      M,
      p,
      o,
      F,
      H,
      B,
      O,
      G,
      T,
      Z,
      P,
      x;
    z[v >> 5] |= 128 << 24 - v % 32;
    z[(v + 64 >> 9 << 4) + 15] = v;
    for (var T = 0; T < z.length; T += 16) {
      M = J[0];
      p = J[1];
      o = J[2];
      F = J[3];
      H = J[4];
      B = J[5];
      O = J[6];
      G = J[7];
      for (var Z = 0; Z < 64; Z++) {
        if (Z < 16) {
          E[Z] = z[Z + T];
        } else {
          E[Z] = U(U(U(i(E[Z - 2]), E[Z - 7]), d(E[Z - 15])), E[Z - 16]);
        }
        P = U(U(U(U(G, X(H)), r(H, B, O)), Q[Z]), E[Z]);
        x = U(L(M), l(M, p, o));
        G = O;
        O = B;
        B = H;
        H = U(F, P);
        F = o;
        o = p;
        p = M;
        M = U(P, x);
      }
      J[0] = U(M, J[0]);
      J[1] = U(p, J[1]);
      J[2] = U(o, J[2]);
      J[3] = U(F, J[3]);
      J[4] = U(H, J[4]);
      J[5] = U(B, J[5]);
      J[6] = U(O, J[6]);
      J[7] = U(G, J[7]);
    }
    return J;
  }
  function g(b) {
    var z = Array(),
      v = (1 << N) - 1;
    for (var I = 0; I < b.length * N; I += N) {
      z[I >> 5] |= (b.charCodeAt(I / N) & v) << 24 - I % 32;
    }
    return z;
  }
  function q(b) {
    b = b.replace(/\r\n/g, "\n");
    var v = "";
    for (var I = 0; I < b.length; I++) {
      var j = b.charCodeAt(I);
      if (j < 128) {
        v += String.fromCharCode(j);
      } else {
        if (j > 127 && j < 2048) {
          v += String.fromCharCode(j >> 6 | 192);
          v += String.fromCharCode(j & 63 | 128);
        } else {
          v += String.fromCharCode(j >> 12 | 224);
          v += String.fromCharCode(j >> 6 & 63 | 128);
          v += String.fromCharCode(j & 63 | 128);
        }
      }
    }
    return v;
  }
  function t(b) {
    var z = C ? "0123456789ABCDEF" : "0123456789abcdef",
      v = "";
    for (var I = 0; I < b.length * 4; I++) {
      v += z.charAt(b[I >> 2] >> (3 - I % 4) * 8 + 4 & 15) + z.charAt(b[I >> 2] >> (3 - I % 4) * 8 & 15);
    }
    return v;
  }
  f = q(f);
  return t(A(g(f), f.length * N));
}
function SHA1(f) {
  function N(R, m) {
    var p = R << m | R >>> 32 - m;
    return p;
  }
  function s(R) {
    var a = "",
      p,
      o,
      F;
    for (p = 0; p <= 6; p += 2) {
      o = R >>> p * 4 + 4 & 15;
      F = R >>> p * 4 & 15;
      a += o.toString(16) + F.toString(16);
    }
    return a;
  }
  function U(R) {
    var m = "",
      a,
      p;
    for (a = 7; a >= 0; a--) {
      p = R >>> a * 4 & 15;
      m += p.toString(16);
    }
    return m;
  }
  function c(R) {
    R = R.replace(/\r\n/g, "\n");
    var a = "";
    for (var p = 0; p < R.length; p++) {
      var o = R.charCodeAt(p);
      if (o < 128) {
        a += String.fromCharCode(o);
      } else {
        if (o > 127 && o < 2048) {
          a += String.fromCharCode(o >> 6 | 192);
          a += String.fromCharCode(o & 63 | 128);
        } else {
          a += String.fromCharCode(o >> 12 | 224);
          a += String.fromCharCode(o >> 6 & 63 | 128);
          a += String.fromCharCode(o & 63 | 128);
        }
      }
    }
    return a;
  }
  var y,
    r,
    l,
    L = new Array(80),
    X = 1732584193,
    d = 4023233417,
    S = 2562383102,
    g = 271733878,
    q = 3285377520,
    t,
    b,
    z,
    v,
    I,
    Q;
  f = c(f);
  var J = f.length,
    M = new Array();
  for (r = 0; r < J - 3; r += 4) {
    l = f.charCodeAt(r) << 24 | f.charCodeAt(r + 1 < 10 ? "0" + (r + 1) : r + 1) << 16 | f.charCodeAt(r + 2) << 8 | f.charCodeAt(r + 3);
    M.push(l);
  }
  switch (J % 4) {
    case 0:
      r = 2147483648;
      break;
    case 1:
      r = f.charCodeAt(J - 1) << 24 | 8388608;
      break;
    case 2:
      r = f.charCodeAt(J - 2) << 24 | f.charCodeAt(J - 1) << 16 | 32768;
      break;
    case 3:
      r = f.charCodeAt(J - 3) << 24 | f.charCodeAt(J - 2) << 16 | f.charCodeAt(J - 1) << 8 | 128;
      break;
  }
  M.push(r);
  while (M.length % 16 != 14) {
    M.push(0);
  }
  M.push(J >>> 29);
  M.push(J << 3 & 4294967295);
  for (y = 0; y < M.length; y += 16) {
    for (r = 0; r < 16; r++) {
      L[r] = M[y + r];
    }
    for (r = 16; r <= 79; r++) {
      L[r] = N(L[r - 3] ^ L[r - 8] ^ L[r - 14] ^ L[r - 16], 1);
    }
    t = X;
    b = d;
    z = S;
    v = g;
    I = q;
    for (r = 0; r <= 19; r++) {
      Q = N(t, 5) + (b & z | ~b & v) + I + L[r] + 1518500249 & 4294967295;
      I = v;
      v = z;
      z = N(b, 30);
      b = t;
      t = Q;
    }
    for (r = 20; r <= 39; r++) {
      Q = N(t, 5) + (b ^ z ^ v) + I + L[r] + 1859775393 & 4294967295;
      I = v;
      v = z;
      z = N(b, 30);
      b = t;
      t = Q;
    }
    for (r = 40; r <= 59; r++) {
      Q = N(t, 5) + (b & z | b & v | z & v) + I + L[r] + 2400959708 & 4294967295;
      I = v;
      v = z;
      z = N(b, 30);
      b = t;
      t = Q;
    }
    for (r = 60; r <= 79; r++) {
      Q = N(t, 5) + (b ^ z ^ v) + I + L[r] + 3395469782 & 4294967295;
      I = v;
      v = z;
      z = N(b, 30);
      b = t;
      t = Q;
    }
    X = X + t & 4294967295;
    d = d + b & 4294967295;
    S = S + z & 4294967295;
    g = g + v & 4294967295;
    q = q + I & 4294967295;
  }
  var Q = U(X) + U(d) + U(S) + U(g) + U(q);
  return Q.toLowerCase();
}
function Base64() {
  if (!(this instanceof Base64)) {
    return new Base64();
  }
  var w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (C) {
    var d = "";
    var U, c, y, r, l, L, X;
    var s = 0;
    C = _utf8_encode(C);
    while (s < C.length) {
      U = C.charCodeAt(s++);
      c = C.charCodeAt(s++);
      y = C.charCodeAt(s++);
      r = U >> 2;
      l = (U & 3) << 4 | c >> 4;
      L = (c & 15) << 2 | y >> 6;
      X = y & 63;
      if (isNaN(c)) {
        L = X = 64;
      } else {
        isNaN(y) && (X = 64);
      }
      d = d + w.charAt(r) + w.charAt(l) + w.charAt(L) + w.charAt(X);
    }
    return d;
  };
  this.decode = function (C) {
    var l = "";
    var U, c, y;
    var L, X, d, A;
    var r = 0;
    C = C.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (r < C.length) {
      L = w.indexOf(C.charAt(r++));
      X = w.indexOf(C.charAt(r++));
      d = w.indexOf(C.charAt(r++));
      A = w.indexOf(C.charAt(r++));
      U = L << 2 | X >> 4;
      c = (X & 15) << 4 | d >> 2;
      y = (d & 3) << 6 | A;
      l = l + String.fromCharCode(U);
      if (d != 64) {
        l = l + String.fromCharCode(c);
      }
      A != 64 && (l = l + String.fromCharCode(y));
    }
    l = _utf8_decode(l);
    return l;
  };
  _utf8_encode = function (C) {
    C = C.replace(/\r\n/g, "\n");
    var U = "";
    for (var y = 0; y < C.length; y++) {
      var r = C.charCodeAt(y);
      if (r < 128) {
        U += String.fromCharCode(r);
      } else {
        if (r > 127 && r < 2048) {
          U += String.fromCharCode(r >> 6 | 192);
          U += String.fromCharCode(r & 63 | 128);
        } else {
          U += String.fromCharCode(r >> 12 | 224);
          U += String.fromCharCode(r >> 6 & 63 | 128);
          U += String.fromCharCode(r & 63 | 128);
        }
      }
    }
    return U;
  };
  _utf8_decode = function (C) {
    const s = {
      vBbpg: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      FvjdH: "快手答题余额通知",
      EgWRj: "application/json"
    };
    var y = "";
    var l = 0;
    var r;
    while (l < C.length) {
      r = C.charCodeAt(l);
      if (r < 128) {
        y += String.fromCharCode(r);
        l++;
      } else {
        if (r > 191 && r < 224) {
          y += String.fromCharCode((r & 31) << 6 | c2 & 63);
          l += 2;
        } else {
          y += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          l += 3;
        }
      }
    }
    return y;
  };
}
function Env(f, w) {
  class C {
    constructor(s) {
      this.env = s;
    }
    send(s, U = "GET") {
      s = typeof s === "string" ? {
        url: s
      } : s;
      let r = this.get;
      U === "POST" && (r = this.post);
      return new Promise((L, X) => {
        r.call(this, s, (i, A, S) => {
          if (i) {
            X(i);
          } else {
            L(A);
          }
        });
      });
    }
    get(s) {
      return this.send.call(this.env, s);
    }
    post(s) {
      return this.send.call(this.env, s, "POST");
    }
  }
  return new class {
    constructor(s, U) {
      this.name = s;
      this.http = new C(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, U);
      const r = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(r);
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
    toObj(s, U = null) {
      try {
        return JSON.parse(s);
      } catch {
        return U;
      }
    }
    toStr(s, U = null) {
      try {
        return JSON.stringify(s);
      } catch {
        return U;
      }
    }
    getjson(s, U) {
      let y = U;
      const r = this.getdata(s);
      if (r) {
        try {
          y = JSON.parse(this.getdata(s));
        } catch {}
      }
      return y;
    }
    setjson(s, U) {
      try {
        return this.setdata(JSON.stringify(s), U);
      } catch {
        return false;
      }
    }
    getScript(s) {
      return new Promise(c => {
        const r = {
          url: s
        };
        this.get(r, (l, L, X) => c(X));
      });
    }
    runScript(s, U) {
      return new Promise(r => {
        let L = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        L = L ? L.replace(/\n/g, "").trim() : L;
        let X = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        X = X ? X * 1 : 20;
        X = U && U.timeout ? U.timeout : X;
        const [d, i] = L.split("@"),
          A = {
            script_text: s,
            mock_type: "cron",
            timeout: X
          };
        const S = {
          "X-Key": d,
          Accept: "*/*"
        };
        const q = {
          url: "http: //" + i + "/v1/scripting/evaluate",
          body: A,
          headers: S
        };
        this.post(q, (t, b, z) => r(z));
      }).catch(r => this.logErr(r));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const s = this.path.resolve(this.dataFile),
          U = this.path.resolve(process.cwd(), this.dataFile),
          c = this.fs.existsSync(s),
          y = !c && this.fs.existsSync(U);
        if (c || y) {
          const r = c ? s : U;
          try {
            return JSON.parse(this.fs.readFileSync(r));
          } catch (L) {
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
        const c = this.path.resolve(this.dataFile),
          y = this.path.resolve(process.cwd(), this.dataFile),
          r = this.fs.existsSync(c),
          l = !r && this.fs.existsSync(y),
          L = JSON.stringify(this.data);
        if (r) {
          this.fs.writeFileSync(c, L);
        } else {
          if (l) {
            this.fs.writeFileSync(y, L);
          } else {
            this.fs.writeFileSync(c, L);
          }
        }
      }
    }
    lodash_get(s, U, c = undefined) {
      const y = U.replace(/[(d+)]/g, ".$1").split(".");
      let r = s;
      for (const l of y) {
        r = Object(r)[l];
        if (r === undefined) {
          return c;
        }
      }
      return r;
    }
    lodash_set(s, U, c) {
      if (Object(s) !== s) {
        return s;
      }
      if (!Array.isArray(U)) {
        U = U.toString().match(/[^.[]]+/g) || [];
      }
      U.slice(0, -1).reduce((r, l, L) => Object(r[l]) === r[l] ? r[l] : r[l] = Math.abs(U[L + 1 < 10 ? "0" + (L + 1) : L + 1]) >> 0 === +U[L + 1 < 10 ? "0" + (L + 1) : L + 1] ? [] : {}, s)[U[U.length - 1]] = c;
      return s;
    }
    getdata(s) {
      let U = this.getval(s);
      if (/^@/.test(s)) {
        const [, y, r] = /^@(.*?).(.*?)$/.exec(s),
          l = y ? this.getval(y) : "";
        if (l) {
          try {
            const L = JSON.parse(l);
            U = L ? this.lodash_get(L, r, "") : U;
          } catch (d) {
            U = "";
          }
        }
      }
      return U;
    }
    setdata(s, U) {
      let y = false;
      if (/^@/.test(U)) {
        const [, r, l] = /^@(.*?).(.*?)$/.exec(U),
          L = this.getval(r),
          X = r ? L === "null" ? null : L || "{}" : "{}";
        try {
          const i = JSON.parse(X);
          this.lodash_set(i, l, s);
          y = this.setval(JSON.stringify(i), r);
        } catch (A) {
          const S = {};
          this.lodash_set(S, l, s);
          y = this.setval(JSON.stringify(S), r);
        }
      } else {
        y = this.setval(s, U);
      }
      return y;
    }
    getval(s) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(s);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(s);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[s];
          } else {
            return this.data && this.data[s] || null;
          }
        }
      }
    }
    setval(s, U) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(s, U);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(s, U);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[U] = s;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[U] || null;
          }
        }
      }
    }
    initGotEnv(s) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (s) {
        s.headers = s.headers ? s.headers : {};
        if (undefined === s.headers.Cookie && undefined === s.cookieJar) {
          s.cookieJar = this.ckjar;
        }
      }
    }
    get(s, U = () => {}) {
      s.headers && (delete s.headers["Content-Type"], delete s.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          s.headers = s.headers || {};
          const X = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(s.headers, X);
        }
        $httpClient.get(s, (d, i, A) => {
          if (!d && i) {
            i.body = A;
            i.statusCode = i.status;
          }
          U(d, i, A);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            s.opts = s.opts || {};
            const d = {
              hints: false
            };
            Object.assign(s.opts, d);
          }
          $task.fetch(s).then(A => {
            const {
                statusCode: g,
                statusCode: q,
                headers: t,
                body: b
              } = A,
              z = {
                status: g,
                statusCode: q,
                headers: t,
                body: b
              };
            U(null, z, b);
          }, A => U(A));
        } else {
          this.isNode() && (this.initGotEnv(s), this.got(s).on("redirect", (g, q) => {
            try {
              if (g.headers["set-cookie"]) {
                const b = g.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (b) {
                  this.ckjar.setCookieSync(b, null);
                }
                q.cookieJar = this.ckjar;
              }
            } catch (j) {
              this.logErr(j);
            }
          }).then(g => {
            const {
                statusCode: q,
                statusCode: t,
                headers: b,
                body: z
              } = g,
              v = {
                status: q,
                statusCode: t,
                headers: b,
                body: z
              };
            U(null, v, z);
          }, g => {
            const {
              message: t,
              response: b
            } = g;
            U(t, b, b && b.body);
          }));
        }
      }
    }
    post(s, U = () => {}) {
      const y = s.method ? s.method.toLocaleLowerCase() : "post";
      s.body && s.headers && !s.headers["Content-Type"] && (s.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (s.headers) {
        delete s.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          s.headers = s.headers || {};
          const L = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(s.headers, L);
        }
        $httpClient[y](s, (d, i, A) => {
          if (!d && i) {
            i.body = A;
            i.statusCode = i.status;
          }
          U(d, i, A);
        });
      } else {
        if (this.isQuanX()) {
          s.method = y;
          if (this.isNeedRewrite) {
            s.opts = s.opts || {};
            const d = {
              hints: false
            };
            Object.assign(s.opts, d);
          }
          $task.fetch(s).then(A => {
            const {
                statusCode: S,
                statusCode: g,
                headers: q,
                body: t
              } = A,
              b = {
                status: S,
                statusCode: g,
                headers: q,
                body: t
              };
            U(null, b, t);
          }, A => U(A));
        } else {
          if (this.isNode()) {
            this.initGotEnv(s);
            const {
              url: A,
              ...S
            } = s;
            this.got[y](A, S).then(g => {
              const {
                  statusCode: q,
                  statusCode: t,
                  headers: b,
                  body: z
                } = g,
                v = {
                  status: q,
                  statusCode: t,
                  headers: b,
                  body: z
                };
              U(null, v, z);
            }, g => {
              const {
                message: q,
                response: t
              } = g;
              U(q, t, t && t.body);
            });
          }
        }
      }
    }
    put(s, U = () => {}) {
      const y = s.method ? s.method.toLocaleLowerCase() : "put";
      s.body && s.headers && !s.headers["Content-Type"] && (s.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (s.headers) {
        delete s.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          s.headers = s.headers || {};
          const r = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(s.headers, r);
        }
        $httpClient[y](s, (l, L, X) => {
          !l && L && (L.body = X, L.statusCode = L.status);
          U(l, L, X);
        });
      } else {
        if (this.isQuanX()) {
          s.method = y;
          if (this.isNeedRewrite) {
            s.opts = s.opts || {};
            const l = {
              hints: false
            };
            Object.assign(s.opts, l);
          }
          $task.fetch(s).then(L => {
            const {
              statusCode: X,
              statusCode: d,
              headers: i,
              body: A
            } = L;
            const S = {
              status: X,
              statusCode: d,
              headers: i,
              body: A
            };
            U(null, S, A);
          }, L => U(L));
        } else {
          if (this.isNode()) {
            this.initGotEnv(s);
            const {
              url: L,
              ...X
            } = s;
            this.got[y](L, X).then(d => {
              const {
                  statusCode: i,
                  statusCode: A,
                  headers: S,
                  body: g
                } = d,
                q = {
                  status: i,
                  statusCode: A,
                  headers: S,
                  body: g
                };
              U(null, q, g);
            }, d => {
              const {
                message: i,
                response: A
              } = d;
              U(i, A, A && A.body);
            });
          }
        }
      }
    }
    time(s, U = null) {
      const c = U ? new Date(U) : new Date();
      let y = {
        "M+": c.getMonth() + 1,
        "d+": c.getDate(),
        "H+": c.getHours(),
        "m+": c.getMinutes(),
        "s+": c.getSeconds(),
        "q+": Math.floor((c.getMonth() + 3) / 3),
        S: c.getMilliseconds()
      };
      if (/(y+)/.test(s)) {
        s = s.replace(RegExp.$1, (c.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let r in y) if (new RegExp("(" + r + ")").test(s)) {
        s = s.replace(RegExp.$1, RegExp.$1.length == 1 ? y[r] : ("00" + y[r]).substr(("" + y[r]).length));
      }
      return s;
    }
    msg(s = f, U = "", c = "", y) {
      const r = l => {
        if (!l) {
          return l;
        }
        if (typeof l === "string") {
          if (this.isLoon()) {
            return l;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": l
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: l
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof l === "object") {
            if (this.isLoon()) {
              let L = l.openUrl || l.url || l["open-url"],
                X = l.mediaUrl || l["media-url"];
              const d = {
                openUrl: L,
                mediaUrl: X
              };
              return d;
            } else {
              if (this.isQuanX()) {
                let i = l["open-url"] || l.url || l.openUrl,
                  A = l["media-url"] || l.mediaUrl;
                const S = {
                  "open-url": i,
                  "media-url": A
                };
                return S;
              } else {
                if (this.isSurge()) {
                  let g = l.url || l.openUrl || l["open-url"];
                  const q = {
                    url: g
                  };
                  return q;
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
          $notification.post(s, U, c, r(y));
        } else {
          this.isQuanX() && $notify(s, U, c, r(y));
        }
      }
      if (!this.isMuteLog) {
        let l = ["", "==============📣系统通知📣=============="];
        l.push(s);
        U ? l.push(U) : "";
        c ? l.push(c) : "";
        console.log(l.join("\n"));
        this.logs = this.logs.concat(l);
      }
    }
    log(...s) {
      s.length > 0 && (this.logs = [...this.logs, ...s]);
      console.log(s.join(this.logSeparator));
    }
    logErr(s, U) {
      const c = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !c ? this.log("", "❗️" + this.name + ", 错误!", s) : this.log("", "❗️" + this.name + ", 错误!", s.stack);
    }
    wait(s) {
      return new Promise(U => setTimeout(U, s));
    }
    done(s = {}) {
      const U = new Date().getTime();
      const c = (U - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + c + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(s);
    }
  }(f, w);
}