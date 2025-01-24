//Fri Jan 24 2025 14:15:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("小福家");
const version = "V1.1.1",
  appName = "xfjapp";
let xfjapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "";
const file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", w => {}));
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
  stars = ["love", "guzhang", "laugh", "dianzan", "kiss", "sese", "yinliao", "yinxiao", "waizhui", "manfen", "poop", "ghost"],
  shareCodes = ["opa3a1735207541"],
  httpResult = "",
  userAuth = "",
  scriptAuth = "",
  newest_version = "",
  runAuth = "",
  systemNotify = "",
  vipAuth = "",
  isCharge = "",
  multiAccount = 1,
  buyCount = 1,
  runTotalCounts = 1,
  runedCounts = 1,
  userRank = "",
  invicode = "730146",
  numbers = 3,
  vipDate = "",
  APP_KEY = "c983571ad200485383245bb8be8419e5",
  ACT_ID = "";
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
    let n = false;
    const C = apiHost.split("&"),
      c = C.length;
    for (let E = 0; E < c; E++) {
      if ($.isNode()) {
        n = await checkAddress("" + C[E], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          n = await httpClientRequest("" + C[E], 2500);
        } else {
          n = await fetchRequest("" + C[E], 2500);
        }
      }
      if (n == true) {
        apiHost = C[E];
        $.log("📢 接口" + (E + 1) + "[" + C[E] + "]服务器接口正常! 🎉");
        break;
      }
      if (E == c - 1 && n == false) {
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
      let e = new Date(vipDate).getTime(),
        S = new Date().getTime();
      if (S > e) {
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
        let O = new Date(vipDate).getTime(),
          J = new Date().getTime();
        if (J > O) {
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
    multiAccount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
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
    let N = [],
      B = xfjapp.length,
      o = 0;
    if ($.isNode() && process.env.XFJ_THREAD_COUNT) {
      o = parseInt(process.env.XFJ_THREAD_COUNT);
    } else {
      o = B;
    }
    let X = xfjapp.length;
    if (o >= B) {
      o = B;
      X = 1;
      $.log("📢 你设置的线程数是" + o + "，账号个数是" + B + "，" + X + "次可全部跑完。");
      for (let t = 0; t < xfjapp.length; t++) {
        N.push(runMultiTasks(t));
        xfjlogs[t] = "";
        if ($.isNode()) {
          channels_status[t] = 0;
          await init_ws(t);
        } else {
          channels_status[t] = 1;
        }
      }
      await Promise.allSettled(N).then(w2 => {
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let w4 = 0; w4 < xfjapp.length; w4++) {
          $.log(xfjlogs[w4]);
          sendlogs += xfjlogs[w4];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      X = Math.ceil(B / o);
      $.log("📢 你设置的线程数是" + o + "，账号个数是" + B + "，计算后分" + X + "次执行，一次可执行" + o + "个账号，最后一次如果不够" + o + "个账号，剩多少个账号就跑几个账号。");
      for (let w2 = 0; w2 < X; w2++) {
        for (let w3 = w2 * o; w3 < o * (w2 + 1) && w3 < B; w3++) {
          N.push(runMultiTasks(w3));
          xfjlogs[w3] = "";
          channels_status[w3] = 0;
          await init_ws(w3);
        }
        await Promise.allSettled(N).then(w5 => {
          N = [];
          if (w2 == X - 1) {
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let w7 = 0; w7 < xfjapp.length; w7++) {
              $.log(xfjlogs[w7]);
              sendlogs += xfjlogs[w7];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(w => $.logErr(w)).finally(() => $.done());
async function runMultiTasks(w) {
  return new Promise((n, C) => {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 开始执行 working......");
    runSubTask(n, w);
  });
}
async function init_ws(w) {
  if ($.isNode()) {
    reconectCounts[w] > 0 && $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 尝试重新连接服务器>>>>>>");
    wss[w] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[w].on("open", function C() {
      $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 签名通道已连接");
    });
    wss[w].on("close", function c() {
      $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[w].on("error", function N() {
      $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[w] = 1;
      reconectCounts[w]++;
      if (reconectCounts[w] <= 3) {
        init_ws(w);
      }
    });
  }
}
async function runSubTask(w, G) {
  await $.wait(3000, 5000);
  await currentActivityInfo(G);
  await userInfo(G);
  await userCoin(G);
  await redpacket(G);
  await cleanSelfMoment(G);
  await familyInfo(G);
  await taskList(G);
  await $.wait(randomNum(10000, 15000));
  await momentList(G, 0, 10);
  if ($.isNode()) {
    await wss[G].close();
  }
  await runComplete(appName, userId);
  w();
}
async function getCk() {
  if ($request.url.match(/\/op-activity\/current-activity/)) {
    const n = $request.url,
      C = n.split("access_token=")[1].split("&appkey")[0];
    let c = xfjuserck - 1;
    if (xfjapp[c]) {
      xfjapp[c].token = C;
    } else {
      const B = {
        token: C
      };
      xfjapp[c] = B;
    }
    $.setdata(JSON.stringify(xfjapp, null, 2), "xfjapp");
    $.msg($.name, "小富家账号" + (c + 1) + "Token获取成功！🎉");
  }
}
async function refreshToken(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/current-activity?refresh_token=" + xfjapp[w].refresh_token);
  let C = "{}";
  await getReqObject(n, C, w);
  await httpRequest("post", requestObjects[w], printCaller());
  let c = httpResult;
  c != null && c.code == 0 && (xfjapp[w].token = c.data.access_token);
}
async function currentActivityInfo(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/current-activity");
  let C = "";
  await getReqObject(n, C, w);
  await httpRequest("get", requestObjects[w], printCaller());
  let c = httpResult;
  c != null && c.code == 0 && (ACT_ID = c.data.activity_id);
}
async function userInfo(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/user/info");
  await getReqObject(n, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 用户名=> " + C.data.profile.nickname);
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 用户名=> " + C.data.profile.nickname + "\n";
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 手机号=> " + C.data.profile.mobile);
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 手机号=> " + C.data.profile.mobile + "\n";
    xfjapp[w].uid = C.data.uid;
  } else {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 用户信息=> " + C.msg);
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 用户信息=> " + C.msg + "\n";
  }
}
async function userCoin(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/user-coin?activity_id=" + ACT_ID);
  await getReqObject(n, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 福星=> " + C.data.remain_coins + "个");
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 福星=> " + C.data.remain_coins + "个\n";
    xfjapp[w].coins = C.data.remain_coins;
  } else {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 账户信息=> " + C.msg);
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 账户信息=> " + C.msg + "\n";
  }
}
async function taskList(w) {
  const C = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/task-list?activity_id=" + ACT_ID);
  await getReqObject(C, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let B = c.data;
    for (let o = 0; o < B.length; o++) {
      let X = B[o];
      if (X.task_status == 0) {
        if (X.task_name == "发动态") {
          await createMoment(w);
          await $.wait(randomNum(3000, 5000));
        } else {
          if (X.task_name == "App首次登录") {
            await doTask(w, X.task_id, X.task_name);
            await $.wait(randomNum(5000, 10000));
          } else {
            if (X.task_name == "每日打卡") {
              await doTask(w, X.task_id, X.task_name);
              await $.wait(randomNum(5000, 10000));
            }
          }
        }
      }
      if (X.task_status == 1) {
        if (X.task_name == "福星分享") {
          for (let h = 0; h < shareCodes.length; h++) {
            if (xfjapp[w].share_code != shareCodes[h]) {
              await shareInfo(w);
            }
          }
        } else {
          if (X.task_name == "每日打卡") {
            await doTask(w, X.task_id, X.task_name);
            await $.wait(randomNum(5000, 10000));
          }
        }
      }
    }
  } else {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 任务列表=> " + c.msg);
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 任务列表=> " + c.msg + "\n";
  }
}
async function doTask(w, G, n) {
  const c = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/do-task?activity_id=" + ACT_ID);
  let N = "{\"task_id\": \"" + G + "\"}";
  await getReqObject(c, N, w);
  await httpRequest("post", requestObjects[w], printCaller());
  let B = httpResult;
  B != null && B.code == 0 && ($.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 任务" + n + "=> " + B.msg), xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 任务" + n + "=> " + B.msg + "\n");
}
async function redpacket(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/redenve-list?activity_id=" + ACT_ID);
  await getReqObject(n, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    let N = C.data.find(s => s.amount == 1),
      B = C.data.find(s => s.amount == 5),
      o = C.data.find(s => s.amount == 10),
      X = C.data.find(s => s.redenve_desc == "新年免费红包");
    if (o && xfjapp[w].coins >= o.extra.exchange_coin_count && o.remain_count > 0 && o.redenve_status != 3) {
      await excharge(w, o.redenve_id);
    } else {
      if (B && xfjapp[w].coins >= B.extra.exchange_coin_count && xfjapp[w].coins < 10000 && B.remain_count > 0 && B.redenve_status != 3) {
        await excharge(w, B.redenve_id);
      } else {
        if (X && xfjapp[w].coins >= X.extra.exchange_coin_count && xfjapp[w].coins < 5000 && X.remain_count > 0 && X.redenve_status != 3) {
          await excharge(w, X.redenve_id);
        } else {
          if (N && xfjapp[w].coins >= N.extra.exchange_coin_count && xfjapp[w].coins < 5000 && N.remain_count > 0 && N.redenve_status != 3) {
            await excharge(w, N.redenve_id);
          }
        }
      }
    }
  }
}
async function excharge(w, G) {
  const C = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/redenve-receive?activity_id=" + ACT_ID);
  let c = "{\"redenve_id\": \"" + G + "\"}";
  await getReqObject(C, c, w);
  await httpRequest("post", requestObjects[w], printCaller());
  let N = httpResult;
  if (N != null && N.code == 0) {
    if (N.data.status == 1) {
      $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 兑换" + N.data.redenve_amount + "元=> " + N.msg);
      xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 兑换" + N.data.redenve_amount + "元=> " + N.msg + "\n";
    }
  }
}
async function createShare(C) {
  const N = await urlDeal(C, "https://api.xiaofujia.com/familychat/share/create?activity_id=" + ACT_ID);
  const B = {
    task_id: "a784b9a14b4845909eb126c7bb801341",
    activity_id: ACT_ID,
    scene_id: 4
  };
  const o = {
    op_activity_data: B
  };
  const X = {
    share_type: 11,
    share_channel: 1,
    data: o
  };
  await getReqObject(N, JSON.stringify(X), C);
  await httpRequest("post", requestObjects[C], printCaller());
  let E = httpResult;
  if (E != null && E.code == 0) {
    let V = E.data.url.split("=")[1];
    xfjapp[C].share_code = V;
  }
}
async function createAssist(C) {
  const N = await urlDeal(C, "https://api.xiaofujia.com/familychat/share/create?activity_id=" + ACT_ID);
  const B = {
    activity_id: ACT_ID,
    task_id: "4f4b6dea1649453bb29f256dc9df1aae",
    scene_id: 3
  };
  const o = {
    op_activity_data: B
  };
  const X = {
    share_type: 11,
    share_channel: 2,
    data: o
  };
  let s = X;
  await getReqObject(N, JSON.stringify(s), C);
  await httpRequest("post", requestObjects[C], printCaller());
  let E = httpResult;
  if (E != null && E.code == 0) {
    let V = E.data.url.split("=")[1];
    xfjapp[C].assist_code = V;
  }
}
async function shareInfo(w, G) {
  const C = await urlDeal(w, "https://api.xiaofujia.com/familychat/share/info?activity_id=" + ACT_ID + "&code=" + G);
  let c = "";
  await getReqObject(C, c, w);
  await httpRequest("get", requestObjects[w], printCaller());
  let N = httpResult;
  if (N != null && N.code == 0) {
    if (N.data.task_info.has_assist == false) {
      await takeAssist(w, N.data.task_info.task_id, N.data.task_info.uid);
    }
  }
}
async function assistInfo(w, G) {
  const C = await urlDeal(w, "https://api.xiaofujia.com/familychat/share/info?activity_id=" + ACT_ID + "&code=" + G);
  await getReqObject(C, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    if (c.data.task_info.has_assist == false) {
      await takeAssist(w, c.data.task_info.task_id, c.data.task_info.uid);
    }
  }
}
async function takeAssist(w, G, n) {
  const c = await urlDeal(w, "https://api.xiaofujia.com/familychat/op-activity/task-assist?activity_id=" + ACT_ID);
  let N = "{\"task_id\":\"" + G + "\",\"assisted_uid\":\"" + n + "\"}";
  await getReqObject(c, N, w);
  await httpRequest("post", requestObjects[w], printCaller());
  let B = httpResult;
  if (B != null && B.code == 0) {
    $.log("[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 赠送福星任务=> " + B.msg);
    xfjlogs[w] += "[账号" + (w + 1 < 10 ? "0" + (w + 1) : w + 1) + "]: 赠送福星任务=> " + B.msg + "=> " + B.msg + "\n";
  }
}
async function createMoment(G) {
  const C = await urlDeal(G, "https://api.xiaofujia.com/familychat/moment/create?version=1");
  await txt_api(G);
  const c = {
    visible_family_ids: [],
    visible_perm: 0
  };
  let N = {
    status: 2,
    perm_info: c,
    publish_time: $.time("yyyy-MM-dd qq HH:mm:ss"),
    text_content: contents[G]
  };
  await getReqObject(C, JSON.stringify(N), G);
  await httpRequest("post", requestObjects[G], printCaller());
  let B = httpResult;
  if (B != null && B.code == 0) {
    let X = B.data.moment_id;
    $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 发布动态(" + X + ")=> " + B.msg);
    moments.push(X);
    xfjapp[G].moment_id = X;
  }
}
async function momentList(w, G, n) {
  const c = await urlDeal(w, "https://api.xiaofujia.com/familychat/moment/list?version=1&page_index=" + G + "&page_size=" + n);
  let N = "";
  await getReqObject(c, N, w);
  await httpRequest("get", requestObjects[w], printCaller());
  let B = httpResult;
  if (B != null && B.code == 0) {
    let o = B.data;
    for (let X = 0; X < o.length; X++) {
      let E = o[X],
        V = E.moment_id;
      E.is_stared == 0 && E.star_count < 2 && (await setStar(w, V), await $.wait(randomNum(6000, 15000)));
    }
  }
}
async function cleanSelfMoment(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/moment/list?version=1&page_index=0&page_size=10&filter_type=1&filter_value=" + xfjapp[w].uid);
  let C = "";
  await getReqObject(n, C, w);
  await httpRequest("get", requestObjects[w], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let N = c.data;
    for (let B = 0; B < N.length; B++) {
      let X = N[B],
        s = X.moment_id;
      if (X.creator.uid == xfjapp[w].uid) {
        await delComent(w, s);
        await $.wait(randomNum(3000, 5000));
      }
    }
  }
}
async function setStar(G, n) {
  const c = await urlDeal(G, "https://api.xiaofujia.com/familychat/moment/set-star?version=1");
  let N = randomNum(0, 11);
  const B = {
    emoticon_name: stars[N],
    moment_id: n,
    star: 1
  };
  await getReqObject(c, JSON.stringify(B), G);
  await httpRequest("post", requestObjects[G], printCaller());
  let X = httpResult;
  X != null && X.code == 0 && $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 点赞动态(" + n + ")=> " + X.msg);
}
async function delComent(G, n) {
  const c = await urlDeal(G, "https://api.xiaofujia.com/familychat/moment/del?version=1"),
    N = {
      moment_id: n
    };
  await getReqObject(c, JSON.stringify(N), G);
  await httpRequest("post", requestObjects[G], printCaller());
  let o = httpResult;
  o != null && o.code == 0 && $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 删除动态(" + n + ")=> " + o.msg);
}
async function getInvite(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/family/invite-info?family_id=82bbf7aabf5548a8b4e14f9ff01023c7&version=1");
  await getReqObject(n, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    let N = C.data.invite_code;
    await redisSet("app_invicate_code", "xfjapp", N);
  }
}
async function familyInfo(w) {
  const n = await urlDeal(w, "https://api.xiaofujia.com/familychat/family/list?version=1");
  await getReqObject(n, "", w);
  await httpRequest("get", requestObjects[w], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    if (C.data.length == 0) {
      await join(w);
    }
  }
}
async function join(G) {
  const C = await urlDeal(G, "https://api.xiaofujia.com/familychat/family/join?version=1"),
    c = {
      join_type: 1,
      invite_code: invicode
    };
  await getReqObject(C, JSON.stringify(c), G);
  await httpRequest("post", requestObjects[G], printCaller());
  let B = httpResult;
  if (B != null && B.code == 0) {
    $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 加入圈子=> " + B.msg);
  }
}
async function urlDeal(G, n) {
  let c = ts10();
  const N = {
    time: "" + c,
    appkey: "" + APP_KEY,
    access_token: "" + xfjapp[G].token
  };
  let B = sortUrlParams(n, [], N);
  await selectChannel(G, B);
  return n + (n.indexOf("?") != -1 ? "&" : "?") + ("access_token=" + xfjapp[G].token + "&appkey=" + APP_KEY + "&sign=" + requestSigns[G] + "&time=" + c);
}
function getScriptAuth(w, G, n) {
  return new Promise((c, N) => {
    const o = apiHost + "/script/permissions/lastest",
      X = {
        appName: w,
        userId: G,
        activityCode: n,
        version: version
      };
    const E = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const V = {
      url: o,
      headers: E,
      body: JSON.stringify(X)
    };
    $.post(V, async (U, h, a) => {
      if (a && a != null && a.replace(/\"/g, "").length > 50) {
        const q = a.replace(/\"/g, "").slice(34),
          M = new Base64();
        result = JSON.parse(M.decode(q));
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
        } catch (p) {
          $.log(p);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      c();
    });
  });
}
function runComplete(w, G) {
  return new Promise((C, c) => {
    const o = apiHost + "/script/run/add",
      X = {
        appName: w,
        userId: G,
        activityCode: activeCode,
        version: version
      };
    const E = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const V = {
      url: o,
      headers: E,
      body: JSON.stringify(X)
    };
    $.post(V, async (U, h, a) => {
      C();
    });
  });
}
function checkAddress(w, G) {
  return new Promise((C, c) => {
    const B = setTimeout(() => {
        C(false);
      }, G),
      o = http.get(w, X => {
        clearTimeout(B);
        if (X.statusCode === 404) {
          C(true);
        } else {
          C(false);
        }
      });
    o.on("error", X => {
      clearTimeout(B);
      C(false);
    });
    o.on("timeout", () => {
      o.abort();
      c(new Error("请求超时"));
    });
  });
}
async function fetchRequest(w, G = 3000) {
  return new Promise((C, c) => {
    const o = {
      url: w + "/docs"
    };
    setTimeout(() => {
      C(false);
    }, G);
    $.get(o, async (X, s, E) => {
      if (s.status == 401) {
        C(true);
      } else {
        C(false);
      }
    });
  });
}
async function httpClientRequest(w, G = 3000) {
  return new Promise((C, c) => {
    const B = {
      url: w + "/"
    };
    setTimeout(() => {
      C(false);
    }, G);
    $httpClient.get(B, async (o, X, s) => {
      if (s == "{\"detail\":\"Not Found\"}") {
        C(true);
      } else {
        C(false);
      }
    });
  });
}
async function redisGet(w, G, n) {
  return new Promise((c, N) => {
    const X = apiHost + "/redis/hash/get/" + G + "/" + n,
      s = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const E = {
      url: X,
      headers: s
    };
    $.get(E, async (U, h, a) => {
      const e = a.replace(/\"/g, "");
      answerTexts[w] = e;
      c();
    });
  });
}
function redisSet(w, G, n) {
  return new Promise((c, N) => {
    const B = apiHost + "/redis/hash/set",
      o = {
        key: w,
        hashKey: G,
        hashValue: n
      };
    const s = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const E = {
      url: B,
      headers: s,
      body: JSON.stringify(o)
    };
    $.post(E, async (V, U, h) => {
      c();
    });
  });
}
function redisPop(w) {
  return new Promise((n, C) => {
    const B = apiHost + "/redis/set/pop/" + w,
      o = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const X = {
      url: B,
      headers: o
    };
    $.get(X, async (E, V, U) => {
      const h = U.replace(/\"/g, "");
      popCookie = h;
      n();
    });
  });
}
async function getReqObject(n, C, c) {
  let B = "Mozilla/5.0·(iPhone;·CPU·iPhone·OS·18_2·like·Mac·OS·X)·AppleWebKit/605.1.15·(KHTML,·like·Gecko)·Mobile/15E148·MicroMessenger/8.0.54(0x18003637)·NetType/WIFI·Language/zh_CN";
  xfjapp[c].ua && xfjapp[c].ua != "" && (B = xfjapp[c].ua);
  let o = getHostname(n);
  const X = {
    "Content-Type": "application/json;charset=UTF-8",
    "User-Agent": B,
    Host: o
  };
  const s = {};
  s.url = n;
  s.headers = X;
  let E = s;
  C && (E.body = C);
  requestObjects[c] = E;
  return E;
}
function getReqObject_(n, C, c) {
  let B = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (xfjapp[c].ua && xfjapp[c].ua != "") {
    B = xfjapp[c].ua;
  }
  let o = getHostname(n);
  const X = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": B,
    Authorization: xfjapp[c].auth,
    Host: o
  };
  const s = {
    url: n,
    headers: X
  };
  C && (s.body = C);
  requestObjects[c] = s;
  return s;
}
async function httpRequest(w, G, n) {
  httpResult = null;
  return new Promise(c => {
    $[w](G, async (B, o, X) => {
      try {
        if (B) {
          $.log(n + ": " + w + "请求失败");
          $.log(JSON.stringify(B));
          $.logErr(B);
        } else {
          if (safeGet(X)) {
            httpResult = JSON.parse(X);
            debug == 1 && $.log(httpResult);
          } else {
            const a = new URL(G.url);
            $.log(a.pathname + "发起" + w + "请求时，出现错误，请处理");
          }
        }
      } catch (M) {
        $.logErr(M, o);
      } finally {
        c(httpResult);
      }
    });
  });
}
async function selectChannel(w, G) {
  if (channels_status[w] == 0) {
    await getSign_(w, G);
  } else {
    await getSign(w, G);
  }
}
function getSign_(w, G) {
  return new Promise((C, c) => {
    function o(X) {
      let E = X.toString("utf8");
      requestSigns[w] = E;
      wss[w].removeListener("message", o);
      C(E);
    }
    wss[w].on("message", o);
    if (wss[w].readyState === 1) {
      const X = {
        method: appName,
        params: {}
      };
      X.params.content = G;
      X.params.appName = appName;
      X.params.uuid = userId;
      wss[w].send(JSON.stringify(X), s => {
        if (s) {
          c(s);
        }
      });
    } else {
      C(getSign(w, G));
      wss[w].removeListener("message", o);
    }
  });
}
function getSign(w, G) {
  return new Promise((C, c) => {
    const B = apiHost + "/sign/xfj",
      o = {
        content: G,
        appName: appName,
        uuid: userId
      };
    const s = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const E = {
      url: B,
      headers: s,
      body: JSON.stringify(o)
    };
    $.post(E, async (V, U, h) => {
      const q = h.replace(/\"/g, "");
      requestSigns[w] = q;
      C();
    });
  });
}
function sortUrlParams(w, G, n) {
  const c = url2obj(w);
  G.forEach(o => {
    delete c[o];
  });
  Object.assign(c, n);
  const N = Object.keys(c).sort(),
    B = N.map(o => "" + o + c[o]).join("");
  return B;
}
function url2obj(G) {
  G = G.replace(/\"/g, "");
  var c,
    N = {};
  if (G.indexOf("?") != -1) {
    var B = G.slice(G.indexOf("?") + 1).split("&");
    for (var o = 0; o < B.length; o++) {
      c = B[o].split("=");
      N[c[0]] = c[1];
    }
  }
  return N;
}
function convertStringToJson(G) {
  const c = G.replace(/[{} ]/g, ""),
    N = c.split(",");
  const B = {};
  N.forEach(o => {
    const [X, s] = o.split("=");
    B[X] = s;
  });
  return B;
}
function getHostname(w) {
  let n = w.substr(w.indexOf("//") + 2),
    C = n.substr(0, n.indexOf("/"));
  let c = "",
    N = C.indexOf(":");
  if (N > 0) {
    c = C.substr(0, N);
  } else {
    c = C;
  }
  return c;
}
function calculateTimeDifference(G, n) {
  var s = new Date(G);
  var E = new Date(n);
  var X = E - s;
  var o = Math.floor(X / 1000);
  return o;
}
function cutString(w, G) {
  if (w.length * 2 <= G) {
    return w;
  }
  var C = 0,
    c = "";
  for (var N = 0; N < w.length; N++) {
    c = c + w.charAt(N);
    if (w.charCodeAt(N) > 128) {
      C = C + 2;
      if (C >= G) {
        return c.substring(0, c.length - 1) + "...";
      }
    } else {
      C = C + 1;
      if (C >= G) {
        return c.substring(0, c.length - 2) + "...";
      }
    }
  }
  return c;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(w) {
  try {
    if (typeof JSON.parse(w) == "object") {
      return true;
    }
  } catch (c) {
    console.log(c);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(w) {
  var n = Object.keys(w).map(function (C) {
    return encodeURIComponent(C) + "=" + encodeURIComponent(w[C]);
  }).join("&");
  return n;
}
function compileStr(w) {
  var n = String.fromCharCode(w.charCodeAt(0) + w.length);
  for (var C = 1; C < w.length; C++) {
    n += String.fromCharCode(w.charCodeAt(C) + w.charCodeAt(C - 1));
  }
  return escape(n);
}
function uncompileStr(w) {
  w = unescape(w);
  var n = String.fromCharCode(w.charCodeAt(0) - w.length);
  for (var C = 1; C < w.length; C++) {
    n += String.fromCharCode(w.charCodeAt(C) - n.charCodeAt(C - 1));
  }
  return n;
}
function randomNum(w, G) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * w + 1);
      break;
    case 2:
      return parseInt(Math.random() * (G - w + 1) + w);
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
  function G() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return G() + G() + "-" + G() + "-" + G() + "-" + G() + "-" + G() + G() + G();
}
function phone_num(w) {
  if (w.length == 11) {
    let C = w.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return C;
  } else {
    return w;
  }
}
function txt_api(w) {
  return new Promise((n, C) => {
    const B = "https://v1.hitokoto.cn/?c=e",
      o = {
        accept: "application/json"
      };
    const X = {
      url: B,
      headers: o
    };
    $.get(X, async (E, V, U) => {
      if (U) {
        let a = JSON.parse(U),
          P = a.hitokoto;
        contents[w] = P;
      } else {
        contents[w] = "又是开心快乐的一天！";
      }
      n();
    });
  });
}
function getTime_8() {
  return new Promise((G, n) => {
    const c = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      N = {
        url: c
      };
    $.get(N, async (o, X, s) => {
      G(s);
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
async function sendMsg(w) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, w);
      } else {
        $.msg($.name, "", w);
      }
    } else {
      $.log(w);
    }
  }
}
async function wxPush(w, G, n) {
  return new Promise((c, N) => {
    const X = "https://wxpusher.zjiecode.com/api/send/message",
      s = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: G,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [n],
        verifyPay: false
      };
    const V = {
      "Content-Type": "application/json"
    };
    const U = {
      url: X,
      headers: V,
      body: JSON.stringify(s)
    };
    $.post(U, async (h, a, P) => {
      c();
    });
  });
}
function randomString(G, n) {
  n = n || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let N = "";
  for (let B = 0; B < G; B++) {
    let o = Math.floor(Math.random() * n.length);
    N += n.substring(o, o + 1);
  }
  return N;
}
function MD5_Encrypt(X) {
  function U(wu, wp) {
    return wu << wp | wu >>> 32 - wp;
  }
  function P(wu, wp) {
    var wg, wA, wT, wf, wZ;
    wT = 2147483648 & wu;
    wf = 2147483648 & wp;
    wg = 1073741824 & wu;
    wA = 1073741824 & wp;
    wZ = (1073741823 & wu) + (1073741823 & wp);
    return wg & wA ? 2147483648 ^ wZ ^ wT ^ wf : wg | wA ? 1073741824 & wZ ? 3221225472 ^ wZ ^ wT ^ wf : 1073741824 ^ wZ ^ wT ^ wf : wZ ^ wT ^ wf;
  }
  function S(wu, wp, wg) {
    return wu & wp | ~wu & wg;
  }
  function R(wu, wp, wg) {
    return wu & wg | wp & ~wg;
  }
  function T(wu, wp, wg) {
    return wu ^ wp ^ wg;
  }
  function Z(wu, wp, wg) {
    return wp ^ (wu | ~wg);
  }
  function Q(wu, wp, wg, wA, wT, wf, wZ) {
    wu = P(wu, P(P(S(wp, wg, wA), wT), wZ));
    return P(U(wu, wf), wp);
  }
  function Y(wu, wp, wg, wA, wT, wf, wZ) {
    wu = P(wu, P(P(R(wp, wg, wA), wT), wZ));
    return P(U(wu, wf), wp);
  }
  function W(wu, wp, wg, wA, wT, wf, wZ) {
    wu = P(wu, P(P(T(wp, wg, wA), wT), wZ));
    return P(U(wu, wf), wp);
  }
  function w0(wu, wp, wg, wA, wT, wf, wZ) {
    wu = P(wu, P(P(Z(wp, wg, wA), wT), wZ));
    return P(U(wu, wf), wp);
  }
  function w1(wu) {
    for (var wg, wA = wu.length, wT = wA + 8, wf = (wT - wT % 64) / 64, wZ = 16 * (wf + 1), wK = new Array(wZ - 1), wQ = 0, wk = 0; wA > wk;) {
      wg = (wk - wk % 4) / 4;
      wQ = wk % 4 * 8;
      wK[wg] = wK[wg] | wu.charCodeAt(wk) << wQ;
      wk++;
    }
    wg = (wk - wk % 4) / 4;
    wQ = wk % 4 * 8;
    wK[wg] = wK[wg] | 128 << wQ;
    wK[wZ - 2] = wA << 3;
    wK[wZ - 1] = wA >>> 29;
    return wK;
  }
  function w2(wu) {
    var wp,
      wg,
      wA = "",
      wT = "";
    for (wg = 0; 3 >= wg; wg++) {
      wp = wu >>> 8 * wg & 255;
      wT = "0" + wp.toString(16);
      wA += wT.substr(wT.length - 2, 2);
    }
    return wA;
  }
  function w3(wu) {
    wu = wu.replace(/\r\n/g, "\n");
    for (var wg = "", wA = 0; wA < wu.length; wA++) {
      var wT = wu.charCodeAt(wA);
      128 > wT ? wg += String.fromCharCode(wT) : wT > 127 && 2048 > wT ? (wg += String.fromCharCode(wT >> 6 | 192), wg += String.fromCharCode(63 & wT | 128)) : (wg += String.fromCharCode(wT >> 12 | 224), wg += String.fromCharCode(wT >> 6 & 63 | 128), wg += String.fromCharCode(63 & wT | 128));
    }
    return wg;
  }
  var w4,
    w5,
    w6,
    w7,
    w8,
    w9,
    ww,
    wG,
    wn,
    wC = [],
    wc = 7,
    wN = 12,
    wB = 17,
    wo = 22,
    wX = 5,
    ws = 9,
    wE = 14,
    wV = 20,
    wU = 4,
    wh = 11,
    wa = 16,
    wP = 23,
    wq = 6,
    wM = 10,
    we = 15,
    wS = 21;
  for (X = w3(X), wC = w1(X), w9 = 1732584193, ww = 4023233417, wG = 2562383102, wn = 271733878, w4 = 0; w4 < wC.length; w4 += 16) {
    w5 = w9;
    w6 = ww;
    w7 = wG;
    w8 = wn;
    w9 = Q(w9, ww, wG, wn, wC[w4 + 0], wc, 3614090360);
    wn = Q(wn, w9, ww, wG, wC[w4 + 1], wN, 3905402710);
    wG = Q(wG, wn, w9, ww, wC[w4 + 2], wB, 606105819);
    ww = Q(ww, wG, wn, w9, wC[w4 + 3], wo, 3250441966);
    w9 = Q(w9, ww, wG, wn, wC[w4 + 4], wc, 4118548399);
    wn = Q(wn, w9, ww, wG, wC[w4 + 5], wN, 1200080426);
    wG = Q(wG, wn, w9, ww, wC[w4 + 6], wB, 2821735955);
    ww = Q(ww, wG, wn, w9, wC[w4 + 7], wo, 4249261313);
    w9 = Q(w9, ww, wG, wn, wC[w4 + 8], wc, 1770035416);
    wn = Q(wn, w9, ww, wG, wC[w4 + 9], wN, 2336552879);
    wG = Q(wG, wn, w9, ww, wC[w4 + 10], wB, 4294925233);
    ww = Q(ww, wG, wn, w9, wC[w4 + 11], wo, 2304563134);
    w9 = Q(w9, ww, wG, wn, wC[w4 + 12], wc, 1804603682);
    wn = Q(wn, w9, ww, wG, wC[w4 + 13], wN, 4254626195);
    wG = Q(wG, wn, w9, ww, wC[w4 + 14], wB, 2792965006);
    ww = Q(ww, wG, wn, w9, wC[w4 + 15], wo, 1236535329);
    w9 = Y(w9, ww, wG, wn, wC[w4 + 1], wX, 4129170786);
    wn = Y(wn, w9, ww, wG, wC[w4 + 6], ws, 3225465664);
    wG = Y(wG, wn, w9, ww, wC[w4 + 11], wE, 643717713);
    ww = Y(ww, wG, wn, w9, wC[w4 + 0], wV, 3921069994);
    w9 = Y(w9, ww, wG, wn, wC[w4 + 5], wX, 3593408605);
    wn = Y(wn, w9, ww, wG, wC[w4 + 10], ws, 38016083);
    wG = Y(wG, wn, w9, ww, wC[w4 + 15], wE, 3634488961);
    ww = Y(ww, wG, wn, w9, wC[w4 + 4], wV, 3889429448);
    w9 = Y(w9, ww, wG, wn, wC[w4 + 9], wX, 568446438);
    wn = Y(wn, w9, ww, wG, wC[w4 + 14], ws, 3275163606);
    wG = Y(wG, wn, w9, ww, wC[w4 + 3], wE, 4107603335);
    ww = Y(ww, wG, wn, w9, wC[w4 + 8], wV, 1163531501);
    w9 = Y(w9, ww, wG, wn, wC[w4 + 13], wX, 2850285829);
    wn = Y(wn, w9, ww, wG, wC[w4 + 2], ws, 4243563512);
    wG = Y(wG, wn, w9, ww, wC[w4 + 7], wE, 1735328473);
    ww = Y(ww, wG, wn, w9, wC[w4 + 12], wV, 2368359562);
    w9 = W(w9, ww, wG, wn, wC[w4 + 5], wU, 4294588738);
    wn = W(wn, w9, ww, wG, wC[w4 + 8], wh, 2272392833);
    wG = W(wG, wn, w9, ww, wC[w4 + 11], wa, 1839030562);
    ww = W(ww, wG, wn, w9, wC[w4 + 14], wP, 4259657740);
    w9 = W(w9, ww, wG, wn, wC[w4 + 1], wU, 2763975236);
    wn = W(wn, w9, ww, wG, wC[w4 + 4], wh, 1272893353);
    wG = W(wG, wn, w9, ww, wC[w4 + 7], wa, 4139469664);
    ww = W(ww, wG, wn, w9, wC[w4 + 10], wP, 3200236656);
    w9 = W(w9, ww, wG, wn, wC[w4 + 13], wU, 681279174);
    wn = W(wn, w9, ww, wG, wC[w4 + 0], wh, 3936430074);
    wG = W(wG, wn, w9, ww, wC[w4 + 3], wa, 3572445317);
    ww = W(ww, wG, wn, w9, wC[w4 + 6], wP, 76029189);
    w9 = W(w9, ww, wG, wn, wC[w4 + 9], wU, 3654602809);
    wn = W(wn, w9, ww, wG, wC[w4 + 12], wh, 3873151461);
    wG = W(wG, wn, w9, ww, wC[w4 + 15], wa, 530742520);
    ww = W(ww, wG, wn, w9, wC[w4 + 2], wP, 3299628645);
    w9 = w0(w9, ww, wG, wn, wC[w4 + 0], wq, 4096336452);
    wn = w0(wn, w9, ww, wG, wC[w4 + 7], wM, 1126891415);
    wG = w0(wG, wn, w9, ww, wC[w4 + 14], we, 2878612391);
    ww = w0(ww, wG, wn, w9, wC[w4 + 5], wS, 4237533241);
    w9 = w0(w9, ww, wG, wn, wC[w4 + 12], wq, 1700485571);
    wn = w0(wn, w9, ww, wG, wC[w4 + 3], wM, 2399980690);
    wG = w0(wG, wn, w9, ww, wC[w4 + 10], we, 4293915773);
    ww = w0(ww, wG, wn, w9, wC[w4 + 1], wS, 2240044497);
    w9 = w0(w9, ww, wG, wn, wC[w4 + 8], wq, 1873313359);
    wn = w0(wn, w9, ww, wG, wC[w4 + 15], wM, 4264355552);
    wG = w0(wG, wn, w9, ww, wC[w4 + 6], we, 2734768916);
    ww = w0(ww, wG, wn, w9, wC[w4 + 13], wS, 1309151649);
    w9 = w0(w9, ww, wG, wn, wC[w4 + 4], wq, 4149444226);
    wn = w0(wn, w9, ww, wG, wC[w4 + 11], wM, 3174756917);
    wG = w0(wG, wn, w9, ww, wC[w4 + 2], we, 718787259);
    ww = w0(ww, wG, wn, w9, wC[w4 + 9], wS, 3951481745);
    w9 = P(w9, w5);
    ww = P(ww, w6);
    wG = P(wG, w7);
    wn = P(wn, w8);
  }
  var wR = w2(w9) + w2(ww) + w2(wG) + w2(wn);
  return wR.toLowerCase();
}
function SHA256(w) {
  var n = 8,
    C = 0;
  function c(e, u) {
    var p = (e & 65535) + (u & 65535),
      g = (e >> 16) + (u >> 16) + (p >> 16);
    return g << 16 | p & 65535;
  }
  function N(e, u) {
    return e >>> u | e << 32 - u;
  }
  function B(e, u) {
    return e >>> u;
  }
  function o(e, u, p) {
    return e & u ^ ~e & p;
  }
  function X(e, u, p) {
    return e & u ^ e & p ^ u & p;
  }
  function E(e) {
    return N(e, 2) ^ N(e, 13) ^ N(e, 22);
  }
  function V(e) {
    return N(e, 6) ^ N(e, 11) ^ N(e, 25);
  }
  function U(e) {
    return N(e, 7) ^ N(e, 18) ^ B(e, 3);
  }
  function h(e) {
    return N(e, 17) ^ N(e, 19) ^ B(e, 10);
  }
  function a(u, p) {
    var T = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      Z = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      Q = new Array(64),
      k,
      O,
      J,
      z,
      x,
      Y,
      y,
      D,
      r,
      I,
      v,
      L;
    u[p >> 5] |= 128 << 24 - p % 32;
    u[(p + 64 >> 9 << 4) + 15] = p;
    for (var r = 0; r < u.length; r += 16) {
      k = Z[0];
      O = Z[1];
      J = Z[2];
      z = Z[3];
      x = Z[4];
      Y = Z[5];
      y = Z[6];
      D = Z[7];
      for (var I = 0; I < 64; I++) {
        if (I < 16) {
          Q[I] = u[I + r];
        } else {
          Q[I] = c(c(c(h(Q[I - 2]), Q[I - 7]), U(Q[I - 15])), Q[I - 16]);
        }
        v = c(c(c(c(D, V(x)), o(x, Y, y)), T[I]), Q[I]);
        L = c(E(k), X(k, O, J));
        D = y;
        y = Y;
        Y = x;
        x = c(z, v);
        z = J;
        J = O;
        O = k;
        k = c(v, L);
      }
      Z[0] = c(k, Z[0]);
      Z[1] = c(O, Z[1]);
      Z[2] = c(J, Z[2]);
      Z[3] = c(z, Z[3]);
      Z[4] = c(x, Z[4]);
      Z[5] = c(Y, Z[5]);
      Z[6] = c(y, Z[6]);
      Z[7] = c(D, Z[7]);
    }
    return Z;
  }
  function P(e) {
    var p = Array(),
      g = (1 << n) - 1;
    for (var A = 0; A < e.length * n; A += n) {
      p[A >> 5] |= (e.charCodeAt(A / n) & g) << 24 - A % 32;
    }
    return p;
  }
  function q(e) {
    e = e.replace(/\r\n/g, "\n");
    var p = "";
    for (var g = 0; g < e.length; g++) {
      var A = e.charCodeAt(g);
      if (A < 128) {
        p += String.fromCharCode(A);
      } else {
        if (A > 127 && A < 2048) {
          p += String.fromCharCode(A >> 6 | 192);
          p += String.fromCharCode(A & 63 | 128);
        } else {
          p += String.fromCharCode(A >> 12 | 224);
          p += String.fromCharCode(A >> 6 & 63 | 128);
          p += String.fromCharCode(A & 63 | 128);
        }
      }
    }
    return p;
  }
  function M(e) {
    var u = C ? "0123456789ABCDEF" : "0123456789abcdef",
      p = "";
    for (var g = 0; g < e.length * 4; g++) {
      p += u.charAt(e[g >> 2] >> (3 - g % 4) * 8 + 4 & 15) + u.charAt(e[g >> 2] >> (3 - g % 4) * 8 & 15);
    }
    return p;
  }
  w = q(w);
  return M(a(P(w), w.length * n));
}
function SHA1(w) {
  function n(Z, K) {
    var Q = Z << K | Z >>> 32 - K;
    return Q;
  }
  function c(Z) {
    var Q = "",
      k,
      O,
      J;
    for (k = 0; k <= 6; k += 2) {
      O = Z >>> k * 4 + 4 & 15;
      J = Z >>> k * 4 & 15;
      Q += O.toString(16) + J.toString(16);
    }
    return Q;
  }
  function N(Z) {
    var K = "",
      Q,
      k;
    for (Q = 7; Q >= 0; Q--) {
      k = Z >>> Q * 4 & 15;
      K += k.toString(16);
    }
    return K;
  }
  function o(Z) {
    Z = Z.replace(/\r\n/g, "\n");
    var Q = "";
    for (var k = 0; k < Z.length; k++) {
      var O = Z.charCodeAt(k);
      if (O < 128) {
        Q += String.fromCharCode(O);
      } else {
        if (O > 127 && O < 2048) {
          Q += String.fromCharCode(O >> 6 | 192);
          Q += String.fromCharCode(O & 63 | 128);
        } else {
          Q += String.fromCharCode(O >> 12 | 224);
          Q += String.fromCharCode(O >> 6 & 63 | 128);
          Q += String.fromCharCode(O & 63 | 128);
        }
      }
    }
    return Q;
  }
  var X,
    s,
    V,
    U = new Array(80),
    h = 1732584193,
    a = 4023233417;
  var P = 2562383102,
    q = 271733878,
    M = 3285377520;
  var e, S, R, u, p, g;
  w = o(w);
  var T = w.length;
  var f = new Array();
  for (s = 0; s < T - 3; s += 4) {
    V = w.charCodeAt(s) << 24 | w.charCodeAt(s + 1 < 10 ? "0" + (s + 1) : s + 1) << 16 | w.charCodeAt(s + 2) << 8 | w.charCodeAt(s + 3);
    f.push(V);
  }
  switch (T % 4) {
    case 0:
      s = 2147483648;
      break;
    case 1:
      s = w.charCodeAt(T - 1) << 24 | 8388608;
      break;
    case 2:
      s = w.charCodeAt(T - 2) << 24 | w.charCodeAt(T - 1) << 16 | 32768;
      break;
    case 3:
      s = w.charCodeAt(T - 3) << 24 | w.charCodeAt(T - 2) << 16 | w.charCodeAt(T - 1) << 8 | 128;
      break;
  }
  f.push(s);
  while (f.length % 16 != 14) {
    f.push(0);
  }
  f.push(T >>> 29);
  f.push(T << 3 & 4294967295);
  for (X = 0; X < f.length; X += 16) {
    for (s = 0; s < 16; s++) {
      U[s] = f[X + s];
    }
    for (s = 16; s <= 79; s++) {
      U[s] = n(U[s - 3] ^ U[s - 8] ^ U[s - 14] ^ U[s - 16], 1);
    }
    e = h;
    S = a;
    R = P;
    u = q;
    p = M;
    for (s = 0; s <= 19; s++) {
      g = n(e, 5) + (S & R | ~S & u) + p + U[s] + 1518500249 & 4294967295;
      p = u;
      u = R;
      R = n(S, 30);
      S = e;
      e = g;
    }
    for (s = 20; s <= 39; s++) {
      g = n(e, 5) + (S ^ R ^ u) + p + U[s] + 1859775393 & 4294967295;
      p = u;
      u = R;
      R = n(S, 30);
      S = e;
      e = g;
    }
    for (s = 40; s <= 59; s++) {
      g = n(e, 5) + (S & R | S & u | R & u) + p + U[s] + 2400959708 & 4294967295;
      p = u;
      u = R;
      R = n(S, 30);
      S = e;
      e = g;
    }
    for (s = 60; s <= 79; s++) {
      g = n(e, 5) + (S ^ R ^ u) + p + U[s] + 3395469782 & 4294967295;
      p = u;
      u = R;
      R = n(S, 30);
      S = e;
      e = g;
    }
    h = h + e & 4294967295;
    a = a + S & 4294967295;
    P = P + R & 4294967295;
    q = q + u & 4294967295;
    M = M + p & 4294967295;
  }
  var g = N(h) + N(a) + N(P) + N(q) + N(M);
  return g.toLowerCase();
}
function Base64() {
  if (!(this instanceof Base64)) {
    return new Base64();
  }
  var G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (C) {
    var h = "";
    var B, o, X, s, E, V, U;
    var N = 0;
    C = _utf8_encode(C);
    while (N < C.length) {
      B = C.charCodeAt(N++);
      o = C.charCodeAt(N++);
      X = C.charCodeAt(N++);
      s = B >> 2;
      E = (B & 3) << 4 | o >> 4;
      V = (o & 15) << 2 | X >> 6;
      U = X & 63;
      if (isNaN(o)) {
        V = U = 64;
      } else {
        if (isNaN(X)) {
          U = 64;
        }
      }
      h = h + G.charAt(s) + G.charAt(E) + G.charAt(V) + G.charAt(U);
    }
    return h;
  };
  this.decode = function (C) {
    var X = "";
    var N, B, o;
    var E, V, U, h;
    var s = 0;
    C = C.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (s < C.length) {
      E = G.indexOf(C.charAt(s++));
      V = G.indexOf(C.charAt(s++));
      U = G.indexOf(C.charAt(s++));
      h = G.indexOf(C.charAt(s++));
      N = E << 2 | V >> 4;
      B = (V & 15) << 4 | U >> 2;
      o = (U & 3) << 6 | h;
      X = X + String.fromCharCode(N);
      if (U != 64) {
        X = X + String.fromCharCode(B);
      }
      if (h != 64) {
        X = X + String.fromCharCode(o);
      }
    }
    X = _utf8_decode(X);
    return X;
  };
  _utf8_encode = function (C) {
    C = C.replace(/\r\n/g, "\n");
    var B = "";
    for (var o = 0; o < C.length; o++) {
      var X = C.charCodeAt(o);
      if (X < 128) {
        B += String.fromCharCode(X);
      } else {
        if (X > 127 && X < 2048) {
          B += String.fromCharCode(X >> 6 | 192);
          B += String.fromCharCode(X & 63 | 128);
        } else {
          B += String.fromCharCode(X >> 12 | 224);
          B += String.fromCharCode(X >> 6 & 63 | 128);
          B += String.fromCharCode(X & 63 | 128);
        }
      }
    }
    return B;
  };
  _utf8_decode = function (C) {
    var o = "";
    var B = 0;
    var X;
    while (B < C.length) {
      X = C.charCodeAt(B);
      if (X < 128) {
        o += String.fromCharCode(X);
        B++;
      } else {
        if (X > 191 && X < 224) {
          o += String.fromCharCode((X & 31) << 6 | c2 & 63);
          B += 2;
        } else {
          o += String.fromCharCode((X & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          B += 3;
        }
      }
    }
    return o;
  };
}
function Env(w, G) {
  class C {
    constructor(c) {
      this.env = c;
    }
    send(c, N = "GET") {
      c = typeof c === "string" ? {
        url: c
      } : c;
      let X = this.get;
      if (N === "POST") {
        X = this.post;
      }
      return new Promise((E, V) => {
        X.call(this, c, (h, a, P) => {
          if (h) {
            V(h);
          } else {
            E(a);
          }
        });
      });
    }
    get(c) {
      return this.send.call(this.env, c);
    }
    post(c) {
      return this.send.call(this.env, c, "POST");
    }
  }
  return new class {
    constructor(c, N) {
      this.name = c;
      this.http = new C(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, N);
      const o = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(o);
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
    toObj(c, N = null) {
      try {
        return JSON.parse(c);
      } catch {
        return N;
      }
    }
    toStr(c, N = null) {
      try {
        return JSON.stringify(c);
      } catch {
        return N;
      }
    }
    getjson(c, N) {
      let o = N;
      const X = this.getdata(c);
      if (X) {
        try {
          o = JSON.parse(this.getdata(c));
        } catch {}
      }
      return o;
    }
    setjson(c, N) {
      try {
        return this.setdata(JSON.stringify(c), N);
      } catch {
        return false;
      }
    }
    getScript(c) {
      return new Promise(B => {
        const X = {
          url: c
        };
        this.get(X, (s, E, V) => B(V));
      });
    }
    runScript(c, N) {
      return new Promise(o => {
        let X = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        X = X ? X.replace(/\n/g, "").trim() : X;
        let s = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        s = s ? s * 1 : 20;
        s = N && N.timeout ? N.timeout : s;
        const [E, V] = X.split("@"),
          U = {
            script_text: c,
            mock_type: "cron",
            timeout: s
          };
        const h = {
          "X-Key": E,
          Accept: "*/*"
        };
        const a = {
          url: "http: //" + V + "/v1/scripting/evaluate",
          body: U,
          headers: h
        };
        this.post(a, (q, M, e) => o(e));
      }).catch(o => this.logErr(o));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const B = this.path.resolve(this.dataFile),
          o = this.path.resolve(process.cwd(), this.dataFile),
          X = this.fs.existsSync(B),
          s = !X && this.fs.existsSync(o);
        if (X || s) {
          const E = X ? B : o;
          try {
            return JSON.parse(this.fs.readFileSync(E));
          } catch (U) {
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
        const B = this.path.resolve(this.dataFile),
          o = this.path.resolve(process.cwd(), this.dataFile),
          X = this.fs.existsSync(B),
          s = !X && this.fs.existsSync(o),
          E = JSON.stringify(this.data);
        if (X) {
          this.fs.writeFileSync(B, E);
        } else {
          if (s) {
            this.fs.writeFileSync(o, E);
          } else {
            this.fs.writeFileSync(B, E);
          }
        }
      }
    }
    lodash_get(c, N, B = undefined) {
      const s = N.replace(/[(d+)]/g, ".$1").split(".");
      let E = c;
      for (const V of s) {
        E = Object(E)[V];
        if (E === undefined) {
          return B;
        }
      }
      return E;
    }
    lodash_set(c, N, B) {
      if (Object(c) !== c) {
        return c;
      }
      if (!Array.isArray(N)) {
        N = N.toString().match(/[^.[]]+/g) || [];
      }
      N.slice(0, -1).reduce((X, s, E) => Object(X[s]) === X[s] ? X[s] : X[s] = Math.abs(N[E + 1 < 10 ? "0" + (E + 1) : E + 1]) >> 0 === +N[E + 1 < 10 ? "0" + (E + 1) : E + 1] ? [] : {}, c)[N[N.length - 1]] = B;
      return c;
    }
    getdata(c) {
      let N = this.getval(c);
      if (/^@/.test(c)) {
        const [, o, X] = /^@(.*?).(.*?)$/.exec(c),
          s = o ? this.getval(o) : "";
        if (s) {
          try {
            const V = JSON.parse(s);
            N = V ? this.lodash_get(V, X, "") : N;
          } catch (U) {
            N = "";
          }
        }
      }
      return N;
    }
    setdata(c, N) {
      let B = false;
      if (/^@/.test(N)) {
        const [, X, s] = /^@(.*?).(.*?)$/.exec(N),
          E = this.getval(X),
          V = X ? E === "null" ? null : E || "{}" : "{}";
        try {
          const U = JSON.parse(V);
          this.lodash_set(U, s, c);
          B = this.setval(JSON.stringify(U), X);
        } catch (a) {
          const q = {};
          this.lodash_set(q, s, c);
          B = this.setval(JSON.stringify(q), X);
        }
      } else {
        B = this.setval(c, N);
      }
      return B;
    }
    getval(c) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(c);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(c);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[c];
          } else {
            return this.data && this.data[c] || null;
          }
        }
      }
    }
    setval(c, N) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(c, N);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(c, N);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[N] = c;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[N] || null;
          }
        }
      }
    }
    initGotEnv(c) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (c) {
        c.headers = c.headers ? c.headers : {};
        if (undefined === c.headers.Cookie && undefined === c.cookieJar) {
          c.cookieJar = this.ckjar;
        }
      }
    }
    get(c, N = () => {}) {
      if (c.headers) {
        delete c.headers["Content-Type"];
        delete c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          c.headers = c.headers || {};
          const s = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(c.headers, s);
        }
        $httpClient.get(c, (V, U, h) => {
          if (!V && U) {
            U.body = h;
            U.statusCode = U.status;
          }
          N(V, U, h);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            c.opts = c.opts || {};
            const V = {
              hints: false
            };
            Object.assign(c.opts, V);
          }
          $task.fetch(c).then(h => {
            const {
                statusCode: q,
                statusCode: M,
                headers: e,
                body: S
              } = h,
              R = {
                status: q,
                statusCode: M,
                headers: e,
                body: S
              };
            N(null, R, S);
          }, h => N(h));
        } else {
          this.isNode() && (this.initGotEnv(c), this.got(c).on("redirect", (a, P) => {
            try {
              if (a.headers["set-cookie"]) {
                const u = a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (u) {
                  this.ckjar.setCookieSync(u, null);
                }
                P.cookieJar = this.ckjar;
              }
            } catch (g) {
              this.logErr(g);
            }
          }).then(a => {
            const {
                statusCode: q,
                statusCode: M,
                headers: e,
                body: S
              } = a,
              R = {
                status: q,
                statusCode: M,
                headers: e,
                body: S
              };
            N(null, R, S);
          }, a => {
            const {
              message: M,
              response: e
            } = a;
            N(M, e, e && e.body);
          }));
        }
      }
    }
    post(c, N = () => {}) {
      const o = c.method ? c.method.toLocaleLowerCase() : "post";
      c.body && c.headers && !c.headers["Content-Type"] && (c.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (c.headers) {
        delete c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          c.headers = c.headers || {};
          const s = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(c.headers, s);
        }
        $httpClient[o](c, (V, U, h) => {
          !V && U && (U.body = h, U.statusCode = U.status);
          N(V, U, h);
        });
      } else {
        if (this.isQuanX()) {
          c.method = o;
          if (this.isNeedRewrite) {
            c.opts = c.opts || {};
            const h = {
              hints: false
            };
            Object.assign(c.opts, h);
          }
          $task.fetch(c).then(P => {
            const {
                statusCode: q,
                statusCode: M,
                headers: e,
                body: S
              } = P,
              R = {
                status: q,
                statusCode: M,
                headers: e,
                body: S
              };
            N(null, R, S);
          }, P => N(P));
        } else {
          if (this.isNode()) {
            this.initGotEnv(c);
            const {
              url: P,
              ...q
            } = c;
            this.got[o](P, q).then(M => {
              const {
                  statusCode: S,
                  statusCode: R,
                  headers: u,
                  body: p
                } = M,
                g = {
                  status: S,
                  statusCode: R,
                  headers: u,
                  body: p
                };
              N(null, g, p);
            }, M => {
              const {
                message: S,
                response: R
              } = M;
              N(S, R, R && R.body);
            });
          }
        }
      }
    }
    put(c, N = () => {}) {
      const o = c.method ? c.method.toLocaleLowerCase() : "put";
      c.body && c.headers && !c.headers["Content-Type"] && (c.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (c.headers) {
        delete c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          c.headers = c.headers || {};
          const X = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(c.headers, X);
        }
        $httpClient[o](c, (s, E, V) => {
          !s && E && (E.body = V, E.statusCode = E.status);
          N(s, E, V);
        });
      } else {
        if (this.isQuanX()) {
          c.method = o;
          if (this.isNeedRewrite) {
            c.opts = c.opts || {};
            const s = {
              hints: false
            };
            Object.assign(c.opts, s);
          }
          $task.fetch(c).then(E => {
            const {
              statusCode: V,
              statusCode: U,
              headers: h,
              body: a
            } = E;
            const P = {
              status: V,
              statusCode: U,
              headers: h,
              body: a
            };
            N(null, P, a);
          }, E => N(E));
        } else {
          if (this.isNode()) {
            this.initGotEnv(c);
            const {
              url: E,
              ...V
            } = c;
            this.got[o](E, V).then(U => {
              const {
                  statusCode: h,
                  statusCode: a,
                  headers: P,
                  body: q
                } = U,
                M = {
                  status: h,
                  statusCode: a,
                  headers: P,
                  body: q
                };
              N(null, M, q);
            }, U => {
              const {
                message: h,
                response: a
              } = U;
              N(h, a, a && a.body);
            });
          }
        }
      }
    }
    time(c, N = null) {
      const B = N ? new Date(N) : new Date();
      let X = {
        "M+": B.getMonth() + 1,
        "d+": B.getDate(),
        "H+": B.getHours(),
        "m+": B.getMinutes(),
        "s+": B.getSeconds(),
        "q+": Math.floor((B.getMonth() + 3) / 3),
        S: B.getMilliseconds()
      };
      if (/(y+)/.test(c)) {
        c = c.replace(RegExp.$1, (B.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let s in X) if (new RegExp("(" + s + ")").test(c)) {
        c = c.replace(RegExp.$1, RegExp.$1.length == 1 ? X[s] : ("00" + X[s]).substr(("" + X[s]).length));
      }
      return c;
    }
    msg(c = w, N = "", B = "", o) {
      const s = E => {
        if (!E) {
          return E;
        }
        if (typeof E === "string") {
          if (this.isLoon()) {
            return E;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": E
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: E
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof E === "object") {
            if (this.isLoon()) {
              let V = E.openUrl || E.url || E["open-url"],
                U = E.mediaUrl || E["media-url"];
              const h = {
                openUrl: V,
                mediaUrl: U
              };
              return h;
            } else {
              if (this.isQuanX()) {
                let a = E["open-url"] || E.url || E.openUrl,
                  P = E["media-url"] || E.mediaUrl;
                const q = {
                  "open-url": a,
                  "media-url": P
                };
                return q;
              } else {
                if (this.isSurge()) {
                  let M = E.url || E.openUrl || E["open-url"];
                  const e = {
                    url: M
                  };
                  return e;
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
          $notification.post(c, N, B, s(o));
        } else {
          this.isQuanX() && $notify(c, N, B, s(o));
        }
      }
      if (!this.isMuteLog) {
        let E = ["", "==============📣系统通知📣=============="];
        E.push(c);
        N ? E.push(N) : "";
        B ? E.push(B) : "";
        console.log(E.join("\n"));
        this.logs = this.logs.concat(E);
      }
    }
    log(...c) {
      c.length > 0 && (this.logs = [...this.logs, ...c]);
      console.log(c.join(this.logSeparator));
    }
    logErr(c, N) {
      const B = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !B ? this.log("", "❗️" + this.name + ", 错误!", c) : this.log("", "❗️" + this.name + ", 错误!", c.stack);
    }
    wait(c) {
      return new Promise(N => setTimeout(N, c));
    }
    done(c = {}) {
      const N = new Date().getTime();
      const B = (N - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + B + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(c);
    }
  }(w, G);
}