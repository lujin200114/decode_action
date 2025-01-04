//Sat Jan 04 2025 11:35:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("小福家"),
  version = "V1.0.9",
  appName = "xfjapp";
let xfjapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", u => {}));
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
let sendlogs = "";
let xfjlogs = [],
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
    const w = apiHost.split("&"),
      t = w.length;
    for (let Y = 0; Y < t; Y++) {
      if ($.isNode()) {
        n = await checkAddress("" + w[Y], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          n = await httpClientRequest("" + w[Y], 2500);
        } else {
          n = await fetchRequest("" + w[Y], 2500);
        }
      }
      if (n == true) {
        apiHost = w[Y];
        $.log("📢 接口" + (Y + 1) + "[" + w[Y] + "]服务器接口正常! 🎉");
        break;
      }
      if (Y == t - 1 && n == false) {
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
      let J = new Date(vipDate).getTime(),
        y = new Date().getTime();
      if (y > J) {
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
        let N = new Date(vipDate).getTime(),
          o = new Date().getTime();
        if (o > N) {
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
    if (buyCount > 1) {
      $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    }
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
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    $.log("📢 一共发现了" + xfjapp.length + "个账号");
    let D = [],
      H = xfjapp.length,
      m = 0;
    $.isNode() && process.env.XFJ_THREAD_COUNT ? m = parseInt(process.env.XFJ_THREAD_COUNT) : m = H;
    let F = xfjapp.length;
    if (m >= H) {
      m = H;
      F = 1;
      $.log("📢 你设置的线程数是" + m + "，账号个数是" + H + "，" + F + "次可全部跑完。");
      for (let z = 0; z < xfjapp.length; z++) {
        D.push(runMultiTasks(z));
        xfjlogs[z] = "";
        if ($.isNode()) {
          channels_status[z] = 0;
          await init_ws(z);
        } else {
          channels_status[z] = 1;
        }
      }
      await Promise.allSettled(D).then(u3 => {
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let u5 = 0; u5 < xfjapp.length; u5++) {
          $.log(xfjlogs[u5]);
          sendlogs += xfjlogs[u5];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      F = Math.ceil(H / m);
      $.log("📢 你设置的线程数是" + m + "，账号个数是" + H + "，计算后分" + F + "次执行，一次可执行" + m + "个账号，最后一次如果不够" + m + "个账号，剩多少个账号就跑几个账号。");
      for (let u3 = 0; u3 < F; u3++) {
        for (let u4 = u3 * m; u4 < m * (u3 + 1) && u4 < H; u4++) {
          D.push(runMultiTasks(u4));
          xfjlogs[u4] = "";
          channels_status[u4] = 0;
          await init_ws(u4);
        }
        await Promise.allSettled(D).then(u6 => {
          D = [];
          if (u3 == F - 1) {
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let u8 = 0; u8 < xfjapp.length; u8++) {
              $.log(xfjlogs[u8]);
              sendlogs += xfjlogs[u8];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(u => $.logErr(u)).finally(() => $.done());
async function runMultiTasks(u) {
  return new Promise((h, n) => {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 开始执行 working......");
    runSubTask(h, u);
  });
}
async function init_ws(u) {
  if ($.isNode()) {
    if (reconectCounts[u] > 0) {
      $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[u] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[u].on("open", function w() {
      $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 签名通道已连接");
    });
    wss[u].on("close", function t() {
      $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[u].on("error", function D() {
      $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[u] = 1;
      reconectCounts[u]++;
      if (reconectCounts[u] <= 3) {
        init_ws(u);
      }
    });
  }
}
async function runSubTask(u, c) {
  await $.wait(3000, 5000);
  await currentActivityInfo(c);
  await userInfo(c);
  await userCoin(c);
  await cleanSelfMoment(c);
  await redpacket(c);
  await createAssist(c);
  await createShare(c);
  await familyInfo(c);
  await taskList(c);
  await $.wait(randomNum(10000, 15000));
  await momentList(c);
  for (let w = 0; w < shareCodes.length; w++) {
    xfjapp[c].share_code != shareCodes[w] && (await shareInfo(c, shareCodes[w]), await $.wait(randomNum(3000, 5000)));
  }
  for (let H = 0; H < assistCodes.length; H++) {
    xfjapp[c].assist_code != assistCodes[H] && (await assistInfo(c, assistCodes[H]), await $.wait(randomNum(3000, 5000)));
  }
  $.isNode() && (await wss[c].close());
  await runComplete(appName, userId);
  u();
}
async function getCk() {
  if ($request.url.match(/\/op-activity\/current-activity/)) {
    const n = $request.url,
      w = n.split("access_token=")[1].split("&appkey")[0];
    let t = xfjuserck - 1;
    if (xfjapp[t]) {
      xfjapp[t].token = w;
    } else {
      const H = {
        token: w
      };
      xfjapp[t] = H;
    }
    $.setdata(JSON.stringify(xfjapp, null, 2), "xfjapp");
    $.msg($.name, "小富家账号" + (t + 1) + "Token获取成功！🎉");
  }
}
async function refreshToken(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/current-activity?refresh_token=" + xfjapp[u].refresh_token);
  let n = "{}";
  await getReqObject(h, n, u);
  await httpRequest("post", requestObjects[u], printCaller());
  let w = httpResult;
  w != null && w.code == 0 && (xfjapp[u].token = w.data.access_token);
}
async function currentActivityInfo(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/current-activity");
  let n = "";
  await getReqObject(h, n, u);
  await httpRequest("get", requestObjects[u], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    ACT_ID = w.data.activity_id;
  }
}
async function userInfo(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/user/info");
  await getReqObject(h, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 用户名=> " + n.data.profile.nickname);
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 用户名=> " + n.data.profile.nickname + "\n";
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 手机号=> " + n.data.profile.mobile);
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 手机号=> " + n.data.profile.mobile + "\n";
    xfjapp[u].uid = n.data.uid;
    if (n.data.uid == "6bbbc924de14419aafb2f9b4efec6bc4") {
      await getInvite(u);
    }
  } else {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 用户信息=> " + n.msg);
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 用户信息=> " + n.msg + "\n";
  }
}
async function userCoin(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/user-coin?activity_id=" + ACT_ID);
  await getReqObject(h, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 福星=> " + n.data.remain_coins + "个");
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 福星=> " + n.data.remain_coins + "个\n";
    xfjapp[u].coins = n.data.remain_coins;
  } else {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 账户信息=> " + n.msg);
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 账户信息=> " + n.msg + "\n";
  }
}
async function taskList(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/task-list?activity_id=" + ACT_ID);
  await getReqObject(h, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    let D = w.data;
    for (let H = 0; H < D.length; H++) {
      let F = D[H];
      if (F.task_status == 0) {
        if (F.task_name == "发动态") {
          await createMoment(u);
          await $.wait(randomNum(3000, 5000));
        } else {
          if (F.task_name == "App首次登录") {
            await doTask(u, F.task_id, F.task_name);
            await $.wait(randomNum(5000, 10000));
          } else {
            if (F.task_name == "每日打卡") {
              await doTask(u, F.task_id, F.task_name);
              await $.wait(randomNum(5000, 10000));
            }
          }
        }
      }
      if (F.task_status == 1) {
        if (F.task_name == "福星分享") {
          for (let V = 0; V < shareCodes.length; V++) {
            if (xfjapp[u].share_code != shareCodes[V]) {
              await shareInfo(u);
            }
          }
        } else {
          if (F.task_name == "每日打卡") {
            await doTask(u, F.task_id, F.task_name);
            await $.wait(randomNum(5000, 10000));
          }
        }
      }
    }
  } else {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 任务列表=> " + w.msg);
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 任务列表=> " + w.msg + "\n";
  }
}
async function doTask(u, c, h) {
  const w = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/do-task?activity_id=" + ACT_ID);
  let t = "{\"task_id\": \"" + c + "\"}";
  await getReqObject(w, t, u);
  await httpRequest("post", requestObjects[u], printCaller());
  let D = httpResult;
  D != null && D.code == 0 && ($.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 任务" + h + "=> " + D.msg), xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 任务" + h + "=> " + D.msg + "\n");
}
async function redpacket(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/redenve-list?activity_id=" + ACT_ID);
  await getReqObject(h, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    let t = n.data.find(m => m.amount == 1),
      D = n.data.find(m => m.amount == 5),
      H = n.data.find(m => m.amount == 10);
    if (xfjapp[u].coins >= H.extra.exchange_coin_count && H.remain_count > 0 && H.redenve_status != 3) {
      await excharge(u, H.redenve_id);
    } else {
      if (xfjapp[u].coins >= D.extra.exchange_coin_count && xfjapp[u].coins < 10000 && D.remain_count > 0 && D.redenve_status != 3) {
        await excharge(u, D.redenve_id);
      } else {
        if (xfjapp[u].coins >= t.extra.exchange_coin_count && xfjapp[u].coins < 5000 && t.remain_count > 0 && t.redenve_status != 3) {
          await excharge(u, t.redenve_id);
        }
      }
    }
  }
}
async function excharge(u, c) {
  const n = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/redenve-receive?activity_id=" + ACT_ID);
  let w = "{\"redenve_id\": \"" + c + "\"}";
  await getReqObject(n, w, u);
  await httpRequest("post", requestObjects[u], printCaller());
  let t = httpResult;
  t != null && t.code == 0 && t.data.status == 1 && ($.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 兑换" + t.data.redenve_amount + "元=> " + t.msg), xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 兑换" + t.data.redenve_amount + "元=> " + t.msg + "\n");
}
async function createShare(n) {
  const t = await urlDeal(n, "https://api.xiaofujia.com/familychat/share/create?activity_id=" + ACT_ID),
    D = {
      task_id: "a784b9a14b4845909eb126c7bb801341",
      activity_id: ACT_ID,
      scene_id: 4
    };
  const H = {
    op_activity_data: D
  };
  const m = {
    share_type: 11,
    share_channel: 1,
    data: H
  };
  await getReqObject(t, JSON.stringify(m), n);
  await httpRequest("post", requestObjects[n], printCaller());
  let P = httpResult;
  if (P != null && P.code == 0) {
    let X = P.data.url.split("=")[1];
    xfjapp[n].share_code = X;
  }
}
async function createAssist(n) {
  const t = await urlDeal(n, "https://api.xiaofujia.com/familychat/share/create?activity_id=" + ACT_ID),
    D = {
      activity_id: ACT_ID,
      task_id: "4f4b6dea1649453bb29f256dc9df1aae",
      scene_id: 3
    };
  const H = {
    op_activity_data: D
  };
  const m = {};
  m.share_type = 11;
  m.share_channel = 2;
  m.data = H;
  let F = m;
  await getReqObject(t, JSON.stringify(F), n);
  await httpRequest("post", requestObjects[n], printCaller());
  let P = httpResult;
  if (P != null && P.code == 0) {
    let X = P.data.url.split("=")[1];
    xfjapp[n].assist_code = X;
  }
}
async function shareInfo(u, c) {
  const n = await urlDeal(u, "https://api.xiaofujia.com/familychat/share/info?activity_id=" + ACT_ID + "&code=" + c);
  let w = "";
  await getReqObject(n, w, u);
  await httpRequest("get", requestObjects[u], printCaller());
  let t = httpResult;
  t != null && t.code == 0 && t.data.task_info.has_assist == false && (await takeAssist(u, t.data.task_info.task_id, t.data.task_info.uid));
}
async function assistInfo(u, c) {
  const n = await urlDeal(u, "https://api.xiaofujia.com/familychat/share/info?activity_id=" + ACT_ID + "&code=" + c);
  await getReqObject(n, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    if (w.data.task_info.has_assist == false) {
      await takeAssist(u, w.data.task_info.task_id, w.data.task_info.uid);
    }
  }
}
async function takeAssist(u, c, h) {
  const w = await urlDeal(u, "https://api.xiaofujia.com/familychat/op-activity/task-assist?activity_id=" + ACT_ID);
  let t = "{\"task_id\":\"" + c + "\",\"assisted_uid\":\"" + h + "\"}";
  await getReqObject(w, t, u);
  await httpRequest("post", requestObjects[u], printCaller());
  let D = httpResult;
  if (D != null && D.code == 0) {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 赠送福星任务=> " + D.msg);
    xfjlogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 赠送福星任务=> " + D.msg + "=> " + D.msg + "\n";
  }
}
async function createMoment(c) {
  const n = await urlDeal(c, "https://api.xiaofujia.com/familychat/moment/create?version=1");
  await txt_api(c);
  const w = {
    visible_family_ids: [],
    visible_perm: 0
  };
  let t = {
    status: 2,
    perm_info: w,
    publish_time: $.time("yyyy-MM-dd qq HH:mm:ss"),
    text_content: contents[c]
  };
  await getReqObject(n, JSON.stringify(t), c);
  await httpRequest("post", requestObjects[c], printCaller());
  let D = httpResult;
  if (D != null && D.code == 0) {
    let H = D.data.moment_id;
    $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 发布动态(" + H + ")=> " + D.msg);
    moments.push(H);
    xfjapp[c].moment_id = H;
  }
}
async function momentList(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/moment/list?version=1&page_index=0&page_size=50");
  let n = "";
  await getReqObject(h, n, u);
  await httpRequest("get", requestObjects[u], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    let t = w.data;
    for (let D = 0; D < t.length; D++) {
      let m = t[D],
        F = m.moment_id;
      m.is_stared == 0 && m.stacount < 2 && (await setStar(u, F), await $.wait(randomNum(3000, 5000)));
    }
  }
}
async function cleanSelfMoment(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/moment/list?version=1&page_index=0&page_size=10&filter_type=1&filter_value=" + xfjapp[u].uid);
  let n = "";
  await getReqObject(h, n, u);
  await httpRequest("get", requestObjects[u], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    let D = w.data;
    for (let H = 0; H < D.length; H++) {
      let F = D[H],
        P = F.moment_id;
      if (F.creator.uid == xfjapp[u].uid) {
        await delComent(u, P);
        await $.wait(randomNum(3000, 5000));
      }
    }
  }
}
async function setStar(c, h) {
  const w = await urlDeal(c, "https://api.xiaofujia.com/familychat/moment/set-star?version=1"),
    t = {
      emoticon_name: "dianzan",
      moment_id: h,
      star: 1
    };
  await getReqObject(w, JSON.stringify(t), c);
  await httpRequest("post", requestObjects[c], printCaller());
  let H = httpResult;
  H != null && H.code == 0 && $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 点赞动态(" + h + ")=> " + H.msg);
}
async function delComent(c, h) {
  const w = await urlDeal(c, "https://api.xiaofujia.com/familychat/moment/del?version=1");
  const t = {
    moment_id: h
  };
  await getReqObject(w, JSON.stringify(t), c);
  await httpRequest("post", requestObjects[c], printCaller());
  let H = httpResult;
  if (H != null && H.code == 0) {
    $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 删除动态(" + h + ")=> " + H.msg);
  }
}
async function getInvite(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/family/invite-info?family_id=763cb4c5aca24ea1ba707c2654881300&version=1");
  await getReqObject(h, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    let w = n.data.invite_code;
    await redisSet("app_invicate_code", "xfjapp", w);
  }
}
async function familyInfo(u) {
  const h = await urlDeal(u, "https://api.xiaofujia.com/familychat/family/list?version=1");
  await getReqObject(h, "", u);
  await httpRequest("get", requestObjects[u], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    if (n.data.length == 0) {
      await join(u);
    }
  }
}
async function join(c) {
  const n = await urlDeal(c, "https://api.xiaofujia.com/familychat/family/join?version=1");
  const w = {
    join_type: 1,
    invite_code: invicode
  };
  await getReqObject(n, JSON.stringify(w), c);
  await httpRequest("post", requestObjects[c], printCaller());
  let D = httpResult;
  if (D != null && D.code == 0) {
    $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 加入圈子=> " + D.msg);
  }
}
async function urlDeal(c, h) {
  let w = ts10();
  const t = {
    time: "" + w,
    appkey: "" + APP_KEY,
    access_token: "" + xfjapp[c].token
  };
  let D = sortUrlParams(h, [], t);
  await selectChannel(c, D);
  return h + (h.indexOf("?") != -1 ? "&" : "?") + ("access_token=" + xfjapp[c].token + "&appkey=" + APP_KEY + "&sign=" + requestSigns[c] + "&time=" + w);
}
function getScriptAuth(u, c, h) {
  return new Promise((w, t) => {
    const H = apiHost + "/script/permissions/lastest",
      m = {
        appName: u,
        userId: c,
        activityCode: h,
        version: version
      };
    const P = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: H,
      headers: P,
      body: JSON.stringify(m)
    };
    $.post(Y, async (X, d, p) => {
      if (p && p != null && p.replace(/\"/g, "").length > 50) {
        const R = p.replace(/\"/g, "").slice(34),
          T = new Base64();
        result = JSON.parse(T.decode(R));
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
        } catch (G) {
          $.log(G);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      w();
    });
  });
}
function runComplete(u, c) {
  return new Promise((n, w) => {
    const i = apiHost + "/script/run/add",
      D = {
        appName: u,
        userId: c,
        activityCode: activeCode,
        version: version
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const F = {
      url: i,
      headers: m,
      body: JSON.stringify(D)
    };
    $.post(F, async (P, Y, X) => {
      n();
    });
  });
}
function checkAddress(u, c) {
  return new Promise((n, w) => {
    const i = setTimeout(() => {
        n(false);
      }, c),
      D = http.get(u, H => {
        clearTimeout(i);
        if (H.statusCode === 404) {
          n(true);
        } else {
          n(false);
        }
      });
    D.on("error", H => {
      clearTimeout(i);
      n(false);
    });
    D.on("timeout", () => {
      D.abort();
      w(new Error("请求超时"));
    });
  });
}
async function fetchRequest(u, c = 3000) {
  return new Promise((n, w) => {
    const t = {
      url: u + "/docs"
    };
    setTimeout(() => {
      n(false);
    }, c);
    $.get(t, async (i, D, H) => {
      if (D.status == 401) {
        n(true);
      } else {
        n(false);
      }
    });
  });
}
async function httpClientRequest(u, c = 3000) {
  return new Promise((n, w) => {
    const D = {
      url: u + "/"
    };
    setTimeout(() => {
      n(false);
    }, c);
    $httpClient.get(D, async (H, m, F) => {
      if (F == "{\"detail\":\"Not Found\"}") {
        n(true);
      } else {
        n(false);
      }
    });
  });
}
async function redisGet(u, c, h) {
  return new Promise((w, t) => {
    const H = apiHost + "/redis/hash/get/" + c + "/" + h,
      m = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const F = {
      url: H,
      headers: m
    };
    $.get(F, async (Y, X, d) => {
      const V = d.replace(/\"/g, "");
      answerTexts[u] = V;
      w();
    });
  });
}
function redisSet(u, c, h) {
  return new Promise((w, t) => {
    const H = apiHost + "/redis/hash/set",
      m = {
        key: u,
        hashKey: c,
        hashValue: h
      };
    const P = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: H,
      headers: P,
      body: JSON.stringify(m)
    };
    $.post(Y, async (X, d, p) => {
      w();
    });
  });
}
function redisPop(u) {
  return new Promise((h, n) => {
    const t = apiHost + "/redis/set/pop/" + u,
      i = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const D = {
      url: t,
      headers: i
    };
    $.get(D, async (m, F, P) => {
      const Y = P.replace(/\"/g, "");
      popCookie = Y;
      h();
    });
  });
}
async function getReqObject(h, n, w) {
  let D = "Mozilla/5.0·(iPhone;·CPU·iPhone·OS·18_2·like·Mac·OS·X)·AppleWebKit/605.1.15·(KHTML,·like·Gecko)·Mobile/15E148·MicroMessenger/8.0.54(0x18003637)·NetType/WIFI·Language/zh_CN";
  if (xfjapp[w].ua && xfjapp[w].ua != "") {
    D = xfjapp[w].ua;
  }
  let H = getHostname(h);
  const m = {
    "Content-Type": "application/json;charset=UTF-8",
    "User-Agent": D,
    Host: H
  };
  const F = {};
  F.url = h;
  F.headers = m;
  let P = F;
  if (n) {
    P.body = n;
  }
  requestObjects[w] = P;
  return P;
}
function getReqObject_(h, n, w) {
  let D = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  xfjapp[w].ua && xfjapp[w].ua != "" && (D = xfjapp[w].ua);
  let H = getHostname(h);
  const m = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": D,
    Authorization: xfjapp[w].auth,
    Host: H
  };
  const F = {};
  F.url = h;
  F.headers = m;
  let P = F;
  if (n) {
    P.body = n;
  }
  requestObjects[w] = P;
  return P;
}
async function httpRequest(u, c, h) {
  httpResult = null;
  return new Promise(w => {
    $[u](c, async (i, D, H) => {
      try {
        if (i) {
          $.log(h + ": " + u + "请求失败");
          $.log(JSON.stringify(i));
          $.logErr(i);
        } else {
          if (safeGet(H)) {
            httpResult = JSON.parse(H);
            debug == 1 && $.log(httpResult);
          } else {
            const V = new URL(c.url);
            $.log(V.pathname + "发起" + u + "请求时，出现错误，请处理");
          }
        }
      } catch (R) {
        $.logErr(R, D);
      } finally {
        w(httpResult);
      }
    });
  });
}
async function selectChannel(u, c) {
  if (channels_status[u] == 0) {
    await getSign_(u, c);
  } else {
    await getSign(u, c);
  }
}
function getSign_(u, c) {
  return new Promise((n, w) => {
    function D(H) {
      let F = H.toString("utf8");
      requestSigns[u] = F;
      wss[u].removeListener("message", D);
      n(F);
    }
    wss[u].on("message", D);
    if (wss[u].readyState === 1) {
      const m = {
        method: appName,
        params: {}
      };
      m.params.content = c;
      m.params.appName = appName;
      m.params.uuid = userId;
      wss[u].send(JSON.stringify(m), F => {
        if (F) {
          w(F);
        }
      });
    } else {
      n(getSign(u, c));
      wss[u].removeListener("message", D);
    }
  });
}
function getSign(u, c) {
  return new Promise((n, w) => {
    const H = apiHost + "/sign/xfj",
      m = {
        content: c,
        appName: appName,
        uuid: userId
      };
    const P = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: H,
      headers: P,
      body: JSON.stringify(m)
    };
    $.post(Y, async (X, d, p) => {
      const R = p.replace(/\"/g, "");
      requestSigns[u] = R;
      n();
    });
  });
}
function sortUrlParams(u, c, h) {
  const w = url2obj(u);
  c.forEach(D => {
    delete w[D];
  });
  Object.assign(w, h);
  const t = Object.keys(w).sort();
  const i = t.map(D => "" + D + w[D]).join("");
  return i;
}
function url2obj(u) {
  u = u.replace(/\"/g, "");
  var h,
    n = {};
  if (u.indexOf("?") != -1) {
    var w = u.slice(u.indexOf("?") + 1).split("&");
    for (var t = 0; t < w.length; t++) {
      h = w[t].split("=");
      n[h[0]] = h[1];
    }
  }
  return n;
}
function convertStringToJson(c) {
  const h = {};
  h.NiFWx = "apiHosts";
  h.dixhA = function (D, H) {
    return D !== H;
  };
  h.mAmCD = "QqahH";
  const n = h,
    w = c.replace(/[{} ]/g, "");
  const t = w.split(","),
    i = {};
  t.forEach(D => {
    if (n.dixhA(n.mAmCD, n.mAmCD)) {
      h = n.getval(n.NiFWx);
    } else {
      const [m, F] = D.split("=");
      i[m] = F;
    }
  });
  return i;
}
function getHostname(u) {
  let h = u.substr(u.indexOf("//") + 2),
    n = h.substr(0, h.indexOf("/"));
  let w = "";
  let t = n.indexOf(":");
  if (t > 0) {
    w = n.substr(0, t);
  } else {
    w = n;
  }
  return w;
}
function calculateTimeDifference(c, h) {
  var m = new Date(c);
  var F = new Date(h);
  var D = F - m;
  var H = Math.floor(D / 1000);
  return H;
}
function cutString(u, c) {
  if (u.length * 2 <= c) {
    return u;
  }
  var n = 0;
  var w = "";
  for (var t = 0; t < u.length; t++) {
    w = w + u.charAt(t);
    if (u.charCodeAt(t) > 128) {
      n = n + 2;
      if (n >= c) {
        return w.substring(0, w.length - 1) + "...";
      }
    } else {
      n = n + 1;
      if (n >= c) {
        return w.substring(0, w.length - 2) + "...";
      }
    }
  }
  return w;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(u) {
  try {
    if (typeof JSON.parse(u) == "object") {
      return true;
    }
  } catch (w) {
    console.log(w);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(u) {
  var h = Object.keys(u).map(function (n) {
    return encodeURIComponent(n) + "=" + encodeURIComponent(u[n]);
  }).join("&");
  return h;
}
function compileStr(u) {
  var n = String.fromCharCode(u.charCodeAt(0) + u.length);
  for (var w = 1; w < u.length; w++) {
    n += String.fromCharCode(u.charCodeAt(w) + u.charCodeAt(w - 1));
  }
  return escape(n);
}
function uncompileStr(u) {
  u = unescape(u);
  var n = String.fromCharCode(u.charCodeAt(0) - u.length);
  for (var w = 1; w < u.length; w++) {
    n += String.fromCharCode(u.charCodeAt(w) - n.charCodeAt(w - 1));
  }
  return n;
}
function randomNum(u, c) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * u + 1);
      break;
    case 2:
      return parseInt(Math.random() * (c - u + 1) + u);
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
  function c() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c();
}
function phone_num(u) {
  if (u.length == 11) {
    let h = u.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return h;
  } else {
    return u;
  }
}
function txt_api(u) {
  return new Promise((h, n) => {
    const t = "https://v1.hitokoto.cn/?c=e",
      D = {
        accept: "application/json"
      };
    const H = {};
    H.url = t;
    H.headers = D;
    const m = H;
    $.get(m, async (F, P, Y) => {
      if (Y) {
        let V = JSON.parse(Y),
          U = V.hitokoto;
        contents[u] = U;
      } else {
        contents[u] = "又是开心快乐的一天！";
      }
      h();
    });
  });
}
function getTime_8() {
  return new Promise((c, h) => {
    const w = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      t = {
        url: w
      };
    const i = t;
    $.get(i, async (D, H, m) => {
      c(m);
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
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(c) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, c);
      } else {
        $.msg($.name, "", c);
      }
    } else {
      $.log(c);
    }
  }
}
async function wxPush(u, c, h) {
  return new Promise((w, t) => {
    const m = "https://wxpusher.zjiecode.com/api/send/message",
      F = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: c,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [h],
        verifyPay: false
      };
    const Y = {
      "Content-Type": "application/json"
    };
    const X = {
      url: m,
      headers: Y,
      body: JSON.stringify(F)
    };
    $.post(X, async (d, p, V) => {
      w();
    });
  });
}
function randomString(u, c) {
  c = c || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let w = 0; w < u; w++) {
    let t = Math.floor(Math.random() * c.length);
    n += c.substring(t, t + 1);
  }
  return n;
}
function MD5_Encrypt(P) {
  function X(uy, ue) {
    return uy << ue | uy >>> 32 - ue;
  }
  function V(uy, ue) {
    var uG, uI, uv, uE, uQ;
    uv = 2147483648 & uy;
    uE = 2147483648 & ue;
    uG = 1073741824 & uy;
    uI = 1073741824 & ue;
    uQ = (1073741823 & uy) + (1073741823 & ue);
    return uG & uI ? 2147483648 ^ uQ ^ uv ^ uE : uG | uI ? 1073741824 & uQ ? 3221225472 ^ uQ ^ uv ^ uE : 1073741824 ^ uQ ^ uv ^ uE : uQ ^ uv ^ uE;
  }
  function U(uy, ue, uO) {
    return uy & ue | ~uy & uO;
  }
  function R(uy, ue, uO) {
    return uy & uO | ue & ~uO;
  }
  function T(uy, ue, uO) {
    return uy ^ ue ^ uO;
  }
  function Q(uy, ue, uO) {
    return ue ^ (uy | ~uO);
  }
  function W(uy, ue, uO, uG, uI, uv, uE) {
    uy = V(uy, V(V(U(ue, uO, uG), uI), uE));
    return V(X(uy, uv), ue);
  }
  function S(uy, ue, uO, uG, uI, uv, uE) {
    uy = V(uy, V(V(R(ue, uO, uG), uI), uE));
    return V(X(uy, uv), ue);
  }
  function Z(uy, ue, uO, uG, uI, uv, uE) {
    uy = V(uy, V(V(T(ue, uO, uG), uI), uE));
    return V(X(uy, uv), ue);
  }
  function u0(uy, ue, uO, uG, uI, uv, uE) {
    uy = V(uy, V(V(Q(ue, uO, uG), uI), uE));
    return V(X(uy, uv), ue);
  }
  function u1(uy) {
    for (var ue, uO = uy.length, uG = uO + 8, uI = (uG - uG % 64) / 64, uv = 16 * (uI + 1), uE = new Array(uv - 1), uQ = 0, uL = 0; uO > uL;) {
      ue = (uL - uL % 4) / 4;
      uQ = uL % 4 * 8;
      uE[ue] = uE[ue] | uy.charCodeAt(uL) << uQ;
      uL++;
    }
    ue = (uL - uL % 4) / 4;
    uQ = uL % 4 * 8;
    uE[ue] = uE[ue] | 128 << uQ;
    uE[uv - 2] = uO << 3;
    uE[uv - 1] = uO >>> 29;
    return uE;
  }
  function u2(uy) {
    var ue,
      uO,
      uG = "",
      uI = "";
    for (uO = 0; 3 >= uO; uO++) {
      ue = uy >>> 8 * uO & 255;
      uI = "0" + ue.toString(16);
      uG += uI.substr(uI.length - 2, 2);
    }
    return uG;
  }
  function u3(uy) {
    uy = uy.replace(/\r\n/g, "\n");
    for (var uO = "", uG = 0; uG < uy.length; uG++) {
      var uI = uy.charCodeAt(uG);
      128 > uI ? uO += String.fromCharCode(uI) : uI > 127 && 2048 > uI ? (uO += String.fromCharCode(uI >> 6 | 192), uO += String.fromCharCode(63 & uI | 128)) : (uO += String.fromCharCode(uI >> 12 | 224), uO += String.fromCharCode(uI >> 6 & 63 | 128), uO += String.fromCharCode(63 & uI | 128));
    }
    return uO;
  }
  var u4,
    u5,
    u6,
    u7,
    u8,
    u9,
    uu,
    uc,
    uh,
    un = [],
    uw = 7,
    ut = 12,
    ui = 17,
    uD = 22,
    uH = 5,
    um = 9,
    uF = 14,
    uP = 20,
    uY = 4,
    uX = 11,
    ud = 16,
    up = 23,
    uV = 6,
    uU = 10,
    uR = 15,
    uT = 21;
  for (P = u3(P), un = u1(P), u9 = 1732584193, uu = 4023233417, uc = 2562383102, uh = 271733878, u4 = 0; u4 < un.length; u4 += 16) {
    u5 = u9;
    u6 = uu;
    u7 = uc;
    u8 = uh;
    u9 = W(u9, uu, uc, uh, un[u4 + 0], uw, 3614090360);
    uh = W(uh, u9, uu, uc, un[u4 + 1], ut, 3905402710);
    uc = W(uc, uh, u9, uu, un[u4 + 2], ui, 606105819);
    uu = W(uu, uc, uh, u9, un[u4 + 3], uD, 3250441966);
    u9 = W(u9, uu, uc, uh, un[u4 + 4], uw, 4118548399);
    uh = W(uh, u9, uu, uc, un[u4 + 5], ut, 1200080426);
    uc = W(uc, uh, u9, uu, un[u4 + 6], ui, 2821735955);
    uu = W(uu, uc, uh, u9, un[u4 + 7], uD, 4249261313);
    u9 = W(u9, uu, uc, uh, un[u4 + 8], uw, 1770035416);
    uh = W(uh, u9, uu, uc, un[u4 + 9], ut, 2336552879);
    uc = W(uc, uh, u9, uu, un[u4 + 10], ui, 4294925233);
    uu = W(uu, uc, uh, u9, un[u4 + 11], uD, 2304563134);
    u9 = W(u9, uu, uc, uh, un[u4 + 12], uw, 1804603682);
    uh = W(uh, u9, uu, uc, un[u4 + 13], ut, 4254626195);
    uc = W(uc, uh, u9, uu, un[u4 + 14], ui, 2792965006);
    uu = W(uu, uc, uh, u9, un[u4 + 15], uD, 1236535329);
    u9 = S(u9, uu, uc, uh, un[u4 + 1], uH, 4129170786);
    uh = S(uh, u9, uu, uc, un[u4 + 6], um, 3225465664);
    uc = S(uc, uh, u9, uu, un[u4 + 11], uF, 643717713);
    uu = S(uu, uc, uh, u9, un[u4 + 0], uP, 3921069994);
    u9 = S(u9, uu, uc, uh, un[u4 + 5], uH, 3593408605);
    uh = S(uh, u9, uu, uc, un[u4 + 10], um, 38016083);
    uc = S(uc, uh, u9, uu, un[u4 + 15], uF, 3634488961);
    uu = S(uu, uc, uh, u9, un[u4 + 4], uP, 3889429448);
    u9 = S(u9, uu, uc, uh, un[u4 + 9], uH, 568446438);
    uh = S(uh, u9, uu, uc, un[u4 + 14], um, 3275163606);
    uc = S(uc, uh, u9, uu, un[u4 + 3], uF, 4107603335);
    uu = S(uu, uc, uh, u9, un[u4 + 8], uP, 1163531501);
    u9 = S(u9, uu, uc, uh, un[u4 + 13], uH, 2850285829);
    uh = S(uh, u9, uu, uc, un[u4 + 2], um, 4243563512);
    uc = S(uc, uh, u9, uu, un[u4 + 7], uF, 1735328473);
    uu = S(uu, uc, uh, u9, un[u4 + 12], uP, 2368359562);
    u9 = Z(u9, uu, uc, uh, un[u4 + 5], uY, 4294588738);
    uh = Z(uh, u9, uu, uc, un[u4 + 8], uX, 2272392833);
    uc = Z(uc, uh, u9, uu, un[u4 + 11], ud, 1839030562);
    uu = Z(uu, uc, uh, u9, un[u4 + 14], up, 4259657740);
    u9 = Z(u9, uu, uc, uh, un[u4 + 1], uY, 2763975236);
    uh = Z(uh, u9, uu, uc, un[u4 + 4], uX, 1272893353);
    uc = Z(uc, uh, u9, uu, un[u4 + 7], ud, 4139469664);
    uu = Z(uu, uc, uh, u9, un[u4 + 10], up, 3200236656);
    u9 = Z(u9, uu, uc, uh, un[u4 + 13], uY, 681279174);
    uh = Z(uh, u9, uu, uc, un[u4 + 0], uX, 3936430074);
    uc = Z(uc, uh, u9, uu, un[u4 + 3], ud, 3572445317);
    uu = Z(uu, uc, uh, u9, un[u4 + 6], up, 76029189);
    u9 = Z(u9, uu, uc, uh, un[u4 + 9], uY, 3654602809);
    uh = Z(uh, u9, uu, uc, un[u4 + 12], uX, 3873151461);
    uc = Z(uc, uh, u9, uu, un[u4 + 15], ud, 530742520);
    uu = Z(uu, uc, uh, u9, un[u4 + 2], up, 3299628645);
    u9 = u0(u9, uu, uc, uh, un[u4 + 0], uV, 4096336452);
    uh = u0(uh, u9, uu, uc, un[u4 + 7], uU, 1126891415);
    uc = u0(uc, uh, u9, uu, un[u4 + 14], uR, 2878612391);
    uu = u0(uu, uc, uh, u9, un[u4 + 5], uT, 4237533241);
    u9 = u0(u9, uu, uc, uh, un[u4 + 12], uV, 1700485571);
    uh = u0(uh, u9, uu, uc, un[u4 + 3], uU, 2399980690);
    uc = u0(uc, uh, u9, uu, un[u4 + 10], uR, 4293915773);
    uu = u0(uu, uc, uh, u9, un[u4 + 1], uT, 2240044497);
    u9 = u0(u9, uu, uc, uh, un[u4 + 8], uV, 1873313359);
    uh = u0(uh, u9, uu, uc, un[u4 + 15], uU, 4264355552);
    uc = u0(uc, uh, u9, uu, un[u4 + 6], uR, 2734768916);
    uu = u0(uu, uc, uh, u9, un[u4 + 13], uT, 1309151649);
    u9 = u0(u9, uu, uc, uh, un[u4 + 4], uV, 4149444226);
    uh = u0(uh, u9, uu, uc, un[u4 + 11], uU, 3174756917);
    uc = u0(uc, uh, u9, uu, un[u4 + 2], uR, 718787259);
    uu = u0(uu, uc, uh, u9, un[u4 + 9], uT, 3951481745);
    u9 = V(u9, u5);
    uu = V(uu, u6);
    uc = V(uc, u7);
    uh = V(uh, u8);
  }
  var uJ = u2(u9) + u2(uu) + u2(uc) + u2(uh);
  return uJ.toLowerCase();
}
function SHA256(u) {
  var h = 8;
  var n = 0;
  function w(U, T) {
    var J = (U & 65535) + (T & 65535),
      e = (U >> 16) + (T >> 16) + (J >> 16);
    return e << 16 | J & 65535;
  }
  function t(U, T) {
    return U >>> T | U << 32 - T;
  }
  function i(U, T) {
    return U >>> T;
  }
  function D(U, T, J) {
    return U & T ^ ~U & J;
  }
  function H(U, T, J) {
    return U & T ^ U & J ^ T & J;
  }
  function m(U) {
    return t(U, 2) ^ t(U, 13) ^ t(U, 22);
  }
  function F(U) {
    return t(U, 6) ^ t(U, 11) ^ t(U, 25);
  }
  function P(U) {
    return t(U, 7) ^ t(U, 18) ^ i(U, 3);
  }
  function Y(U) {
    return t(U, 17) ^ t(U, 19) ^ i(U, 10);
  }
  function X(U, T) {
    var J = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      y = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      O = new Array(64),
      G,
      I,
      v,
      E,
      Q,
      L,
      k,
      x,
      N,
      o,
      r,
      B;
    U[T >> 5] |= 128 << 24 - T % 32;
    U[(T + 64 >> 9 << 4) + 15] = T;
    for (var N = 0; N < U.length; N += 16) {
      G = y[0];
      I = y[1];
      v = y[2];
      E = y[3];
      Q = y[4];
      L = y[5];
      k = y[6];
      x = y[7];
      for (var o = 0; o < 64; o++) {
        if (o < 16) {
          O[o] = U[o + N];
        } else {
          O[o] = w(w(w(Y(O[o - 2]), O[o - 7]), P(O[o - 15])), O[o - 16]);
        }
        r = w(w(w(w(x, F(Q)), D(Q, L, k)), J[o]), O[o]);
        B = w(m(G), H(G, I, v));
        x = k;
        k = L;
        L = Q;
        Q = w(E, r);
        E = v;
        v = I;
        I = G;
        G = w(r, B);
      }
      y[0] = w(G, y[0]);
      y[1] = w(I, y[1]);
      y[2] = w(v, y[2]);
      y[3] = w(E, y[3]);
      y[4] = w(Q, y[4]);
      y[5] = w(L, y[5]);
      y[6] = w(k, y[6]);
      y[7] = w(x, y[7]);
    }
    return y;
  }
  function d(U) {
    var T = Array(),
      J = (1 << h) - 1;
    for (var y = 0; y < U.length * h; y += h) {
      T[y >> 5] |= (U.charCodeAt(y / h) & J) << 24 - y % 32;
    }
    return T;
  }
  function p(U) {
    U = U.replace(/\r\n/g, "\n");
    var J = "";
    for (var y = 0; y < U.length; y++) {
      var e = U.charCodeAt(y);
      if (e < 128) {
        J += String.fromCharCode(e);
      } else {
        if (e > 127 && e < 2048) {
          J += String.fromCharCode(e >> 6 | 192);
          J += String.fromCharCode(e & 63 | 128);
        } else {
          J += String.fromCharCode(e >> 12 | 224);
          J += String.fromCharCode(e >> 6 & 63 | 128);
          J += String.fromCharCode(e & 63 | 128);
        }
      }
    }
    return J;
  }
  function V(U) {
    var y = n ? "0123456789ABCDEF" : "0123456789abcdef",
      e = "";
    for (var O = 0; O < U.length * 4; O++) {
      e += y.charAt(U[O >> 2] >> (3 - O % 4) * 8 + 4 & 15) + y.charAt(U[O >> 2] >> (3 - O % 4) * 8 & 15);
    }
    return e;
  }
  u = p(u);
  return V(X(d(u), u.length * h));
}
function SHA1(u) {
  function h(I, v) {
    var L = I << v | I >>> 32 - v;
    return L;
  }
  function n(I) {
    var Q = "",
      L,
      k,
      x;
    for (L = 0; L <= 6; L += 2) {
      k = I >>> L * 4 + 4 & 15;
      x = I >>> L * 4 & 15;
      Q += k.toString(16) + x.toString(16);
    }
    return Q;
  }
  function w(I) {
    var L = "",
      k,
      x;
    for (k = 7; k >= 0; k--) {
      x = I >>> k * 4 & 15;
      L += x.toString(16);
    }
    return L;
  }
  function t(I) {
    I = I.replace(/\r\n/g, "\n");
    var Q = "";
    for (var L = 0; L < I.length; L++) {
      var k = I.charCodeAt(L);
      if (k < 128) {
        Q += String.fromCharCode(k);
      } else {
        if (k > 127 && k < 2048) {
          Q += String.fromCharCode(k >> 6 | 192);
          Q += String.fromCharCode(k & 63 | 128);
        } else {
          Q += String.fromCharCode(k >> 12 | 224);
          Q += String.fromCharCode(k >> 6 & 63 | 128);
          Q += String.fromCharCode(k & 63 | 128);
        }
      }
    }
    return Q;
  }
  var H, m, F;
  var P = new Array(80),
    Y = 1732584193,
    X = 4023233417,
    d = 2562383102,
    p = 271733878,
    V = 3285377520,
    U,
    R,
    T,
    J,
    y;
  var e;
  u = t(u);
  var O = u.length,
    G = new Array();
  for (m = 0; m < O - 3; m += 4) {
    F = u.charCodeAt(m) << 24 | u.charCodeAt(m + 1 < 10 ? "0" + (m + 1) : m + 1) << 16 | u.charCodeAt(m + 2) << 8 | u.charCodeAt(m + 3);
    G.push(F);
  }
  switch (O % 4) {
    case 0:
      m = 2147483648;
      break;
    case 1:
      m = u.charCodeAt(O - 1) << 24 | 8388608;
      break;
    case 2:
      m = u.charCodeAt(O - 2) << 24 | u.charCodeAt(O - 1) << 16 | 32768;
      break;
    case 3:
      m = u.charCodeAt(O - 3) << 24 | u.charCodeAt(O - 2) << 16 | u.charCodeAt(O - 1) << 8 | 128;
      break;
  }
  G.push(m);
  while (G.length % 16 != 14) {
    G.push(0);
  }
  G.push(O >>> 29);
  G.push(O << 3 & 4294967295);
  for (H = 0; H < G.length; H += 16) {
    for (m = 0; m < 16; m++) {
      P[m] = G[H + m];
    }
    for (m = 16; m <= 79; m++) {
      P[m] = h(P[m - 3] ^ P[m - 8] ^ P[m - 14] ^ P[m - 16], 1);
    }
    U = Y;
    R = X;
    T = d;
    J = p;
    y = V;
    for (m = 0; m <= 19; m++) {
      e = h(U, 5) + (R & T | ~R & J) + y + P[m] + 1518500249 & 4294967295;
      y = J;
      J = T;
      T = h(R, 30);
      R = U;
      U = e;
    }
    for (m = 20; m <= 39; m++) {
      e = h(U, 5) + (R ^ T ^ J) + y + P[m] + 1859775393 & 4294967295;
      y = J;
      J = T;
      T = h(R, 30);
      R = U;
      U = e;
    }
    for (m = 40; m <= 59; m++) {
      e = h(U, 5) + (R & T | R & J | T & J) + y + P[m] + 2400959708 & 4294967295;
      y = J;
      J = T;
      T = h(R, 30);
      R = U;
      U = e;
    }
    for (m = 60; m <= 79; m++) {
      e = h(U, 5) + (R ^ T ^ J) + y + P[m] + 3395469782 & 4294967295;
      y = J;
      J = T;
      T = h(R, 30);
      R = U;
      U = e;
    }
    Y = Y + U & 4294967295;
    X = X + R & 4294967295;
    d = d + T & 4294967295;
    p = p + J & 4294967295;
    V = V + y & 4294967295;
  }
  var e = w(Y) + w(X) + w(d) + w(p) + w(V);
  return e.toLowerCase();
}
function Base64() {
  if (!(this instanceof Base64)) {
    return new Base64();
  }
  var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (n) {
    var t = "";
    var H, m, F, P, Y, X, d;
    var D = 0;
    n = _utf8_encode(n);
    while (D < n.length) {
      H = n.charCodeAt(D++);
      m = n.charCodeAt(D++);
      F = n.charCodeAt(D++);
      P = H >> 2;
      Y = (H & 3) << 4 | m >> 4;
      X = (m & 15) << 2 | F >> 6;
      d = F & 63;
      if (isNaN(m)) {
        X = d = 64;
      } else {
        if (isNaN(F)) {
          d = 64;
        }
      }
      t = t + c.charAt(P) + c.charAt(Y) + c.charAt(X) + c.charAt(d);
    }
    return t;
  };
  this.decode = function (n) {
    var d = "";
    var P, Y, X;
    var D, H, m, F;
    var t = 0;
    n = n.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (t < n.length) {
      D = c.indexOf(n.charAt(t++));
      H = c.indexOf(n.charAt(t++));
      m = c.indexOf(n.charAt(t++));
      F = c.indexOf(n.charAt(t++));
      P = D << 2 | H >> 4;
      Y = (H & 15) << 4 | m >> 2;
      X = (m & 3) << 6 | F;
      d = d + String.fromCharCode(P);
      if (m != 64) {
        d = d + String.fromCharCode(Y);
      }
      F != 64 && (d = d + String.fromCharCode(X));
    }
    d = _utf8_decode(d);
    return d;
  };
  _utf8_encode = function (w) {
    w = w.replace(/\r\n/g, "\n");
    var i = "";
    for (var D = 0; D < w.length; D++) {
      var H = w.charCodeAt(D);
      if (H < 128) {
        i += String.fromCharCode(H);
      } else {
        if (H > 127 && H < 2048) {
          i += String.fromCharCode(H >> 6 | 192);
          i += String.fromCharCode(H & 63 | 128);
        } else {
          i += String.fromCharCode(H >> 12 | 224);
          i += String.fromCharCode(H >> 6 & 63 | 128);
          i += String.fromCharCode(H & 63 | 128);
        }
      }
    }
    return i;
  };
  _utf8_decode = function (n) {
    var t = "";
    var D = 0;
    c1 = c2 = 0;
    var H = c1;
    while (D < n.length) {
      H = n.charCodeAt(D);
      if (H < 128) {
        t += String.fromCharCode(H);
        D++;
      } else {
        if (H > 191 && H < 224) {
          c2 = n.charCodeAt(D + 1);
          t += String.fromCharCode((H & 31) << 6 | c2 & 63);
          D += 2;
        } else {
          c2 = n.charCodeAt(D + 1);
          c3 = n.charCodeAt(D + 2);
          t += String.fromCharCode((H & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          D += 3;
        }
      }
    }
    return t;
  };
}
function Env(u, c) {
  class n {
    constructor(w) {
      this.env = w;
    }
    send(w, t = "GET") {
      w = typeof w === "string" ? {
        url: w
      } : w;
      let D = this.get;
      t === "POST" && (D = this.post);
      return new Promise((m, F) => {
        D.call(this, w, (X, d, p) => {
          if (X) {
            F(X);
          } else {
            m(d);
          }
        });
      });
    }
    get(w) {
      return this.send.call(this.env, w);
    }
    post(w) {
      return this.send.call(this.env, w, "POST");
    }
  }
  return new class {
    constructor(w, t) {
      this.name = w;
      this.http = new n(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, t);
      const D = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(D);
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
    toObj(w, t = null) {
      try {
        return JSON.parse(w);
      } catch {
        return t;
      }
    }
    toStr(w, t = null) {
      try {
        return JSON.stringify(w);
      } catch {
        return t;
      }
    }
    getjson(w, t) {
      let D = t;
      const H = this.getdata(w);
      if (H) {
        try {
          D = JSON.parse(this.getdata(w));
        } catch {}
      }
      return D;
    }
    setjson(w, t) {
      try {
        return this.setdata(JSON.stringify(w), t);
      } catch {
        return false;
      }
    }
    getScript(w) {
      return new Promise(D => {
        const P = {
          url: w
        };
        this.get(P, (Y, X, d) => D(d));
      });
    }
    runScript(w, t) {
      return new Promise(D => {
        let F = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        F = F ? F.replace(/\n/g, "").trim() : F;
        let P = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        P = P ? P * 1 : 20;
        P = t && t.timeout ? t.timeout : P;
        const [Y, X] = F.split("@"),
          d = {
            script_text: w,
            mock_type: "cron",
            timeout: P
          };
        const p = {
          "X-Key": Y,
          Accept: "*/*"
        };
        const V = {
          url: "http: //" + X + "/v1/scripting/evaluate",
          body: d,
          headers: p
        };
        this.post(V, (R, T, J) => D(J));
      }).catch(D => this.logErr(D));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const i = this.path.resolve(this.dataFile),
          D = this.path.resolve(process.cwd(), this.dataFile),
          H = this.fs.existsSync(i),
          m = !H && this.fs.existsSync(D);
        if (H || m) {
          const P = H ? i : D;
          try {
            return JSON.parse(this.fs.readFileSync(P));
          } catch (X) {
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
        const i = this.path.resolve(this.dataFile),
          D = this.path.resolve(process.cwd(), this.dataFile),
          H = this.fs.existsSync(i),
          m = !H && this.fs.existsSync(D),
          F = JSON.stringify(this.data);
        if (H) {
          this.fs.writeFileSync(i, F);
        } else {
          if (m) {
            this.fs.writeFileSync(D, F);
          } else {
            this.fs.writeFileSync(i, F);
          }
        }
      }
    }
    lodash_get(w, t, i = undefined) {
      const H = t.replace(/[(d+)]/g, ".$1").split(".");
      let m = w;
      for (const F of H) {
        m = Object(m)[F];
        if (m === undefined) {
          return i;
        }
      }
      return m;
    }
    lodash_set(w, t, i) {
      if (Object(w) !== w) {
        return w;
      }
      if (!Array.isArray(t)) {
        t = t.toString().match(/[^.[]]+/g) || [];
      }
      t.slice(0, -1).reduce((m, F, P) => Object(m[F]) === m[F] ? m[F] : m[F] = Math.abs(t[P + 1 < 10 ? "0" + (P + 1) : P + 1]) >> 0 === +t[P + 1 < 10 ? "0" + (P + 1) : P + 1] ? [] : {}, w)[t[t.length - 1]] = i;
      return w;
    }
    getdata(w) {
      let D = this.getval(w);
      if (/^@/.test(w)) {
        const [, m, F] = /^@(.*?).(.*?)$/.exec(w),
          P = m ? this.getval(m) : "";
        if (P) {
          try {
            const d = JSON.parse(P);
            D = d ? this.lodash_get(d, F, "") : D;
          } catch (p) {
            D = "";
          }
        }
      }
      return D;
    }
    setdata(w, t) {
      let D = false;
      if (/^@/.test(t)) {
        const [, H, m] = /^@(.*?).(.*?)$/.exec(t),
          F = this.getval(H),
          P = H ? F === "null" ? null : F || "{}" : "{}";
        try {
          const X = JSON.parse(P);
          this.lodash_set(X, m, w);
          D = this.setval(JSON.stringify(X), H);
        } catch (d) {
          const p = {};
          this.lodash_set(p, m, w);
          D = this.setval(JSON.stringify(p), H);
        }
      } else {
        D = this.setval(w, t);
      }
      return D;
    }
    getval(w) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(w);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(w);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[w];
          } else {
            return this.data && this.data[w] || null;
          }
        }
      }
    }
    setval(w, t) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(w, t);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(w, t);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[t] = w;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[t] || null;
          }
        }
      }
    }
    initGotEnv(w) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (w) {
        w.headers = w.headers ? w.headers : {};
        undefined === w.headers.Cookie && undefined === w.cookieJar && (w.cookieJar = this.ckjar);
      }
    }
    get(w, t = () => {}) {
      w.headers && (delete w.headers["Content-Type"], delete w.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          w.headers = w.headers || {};
          const m = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(w.headers, m);
        }
        $httpClient.get(w, (F, P, Y) => {
          !F && P && (P.body = Y, P.statusCode = P.status);
          t(F, P, Y);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            w.opts = w.opts || {};
            const Y = {
              hints: false
            };
            Object.assign(w.opts, Y);
          }
          $task.fetch(w).then(X => {
            const {
                statusCode: p,
                statusCode: V,
                headers: U,
                body: R
              } = X,
              T = {
                status: p,
                statusCode: V,
                headers: U,
                body: R
              };
            t(null, T, R);
          }, X => t(X));
        } else {
          this.isNode() && (this.initGotEnv(w), this.got(w).on("redirect", (p, V) => {
            try {
              if (p.headers["set-cookie"]) {
                const R = p.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (R) {
                  this.ckjar.setCookieSync(R, null);
                }
                V.cookieJar = this.ckjar;
              }
            } catch (O) {
              this.logErr(O);
            }
          }).then(p => {
            const {
                statusCode: U,
                statusCode: R,
                headers: T,
                body: J
              } = p,
              y = {
                status: U,
                statusCode: R,
                headers: T,
                body: J
              };
            t(null, y, J);
          }, p => {
            const {
              message: U,
              response: R
            } = p;
            t(U, R, R && R.body);
          }));
        }
      }
    }
    post(w, t = () => {}) {
      const D = w.method ? w.method.toLocaleLowerCase() : "post";
      if (w.body && w.headers && !w.headers["Content-Type"]) {
        w.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (w.headers) {
        delete w.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          w.headers = w.headers || {};
          const F = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(w.headers, F);
        }
        $httpClient[D](w, (Y, X, d) => {
          !Y && X && (X.body = d, X.statusCode = X.status);
          t(Y, X, d);
        });
      } else {
        if (this.isQuanX()) {
          w.method = D;
          if (this.isNeedRewrite) {
            w.opts = w.opts || {};
            const Y = {
              hints: false
            };
            Object.assign(w.opts, Y);
          }
          $task.fetch(w).then(d => {
            const {
                statusCode: U,
                statusCode: R,
                headers: T,
                body: J
              } = d,
              y = {
                status: U,
                statusCode: R,
                headers: T,
                body: J
              };
            t(null, y, J);
          }, d => t(d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(w);
            const {
              url: d,
              ...p
            } = w;
            this.got[D](d, p).then(V => {
              const {
                  statusCode: U,
                  statusCode: R,
                  headers: T,
                  body: J
                } = V,
                y = {
                  status: U,
                  statusCode: R,
                  headers: T,
                  body: J
                };
              t(null, y, J);
            }, V => {
              const {
                message: U,
                response: R
              } = V;
              t(U, R, R && R.body);
            });
          }
        }
      }
    }
    put(w, t = () => {}) {
      const D = w.method ? w.method.toLocaleLowerCase() : "put";
      w.body && w.headers && !w.headers["Content-Type"] && (w.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (w.headers) {
        delete w.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          w.headers = w.headers || {};
          const H = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(w.headers, H);
        }
        $httpClient[D](w, (m, F, P) => {
          !m && F && (F.body = P, F.statusCode = F.status);
          t(m, F, P);
        });
      } else {
        if (this.isQuanX()) {
          w.method = D;
          if (this.isNeedRewrite) {
            w.opts = w.opts || {};
            const m = {
              hints: false
            };
            Object.assign(w.opts, m);
          }
          $task.fetch(w).then(F => {
            const {
                statusCode: P,
                statusCode: Y,
                headers: X,
                body: d
              } = F,
              p = {
                status: P,
                statusCode: Y,
                headers: X,
                body: d
              };
            t(null, p, d);
          }, F => t(F));
        } else {
          if (this.isNode()) {
            this.initGotEnv(w);
            const {
              url: F,
              ...P
            } = w;
            this.got[D](F, P).then(Y => {
              const {
                  statusCode: X,
                  statusCode: d,
                  headers: p,
                  body: V
                } = Y,
                U = {
                  status: X,
                  statusCode: d,
                  headers: p,
                  body: V
                };
              t(null, U, V);
            }, Y => {
              const {
                message: X,
                response: d
              } = Y;
              t(X, d, d && d.body);
            });
          }
        }
      }
    }
    time(w, t = null) {
      const i = t ? new Date(t) : new Date();
      let D = {
        "M+": i.getMonth() + 1,
        "d+": i.getDate(),
        "H+": i.getHours(),
        "m+": i.getMinutes(),
        "s+": i.getSeconds(),
        "q+": Math.floor((i.getMonth() + 3) / 3),
        S: i.getMilliseconds()
      };
      if (/(y+)/.test(w)) {
        w = w.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let H in D) if (new RegExp("(" + H + ")").test(w)) {
        w = w.replace(RegExp.$1, RegExp.$1.length == 1 ? D[H] : ("00" + D[H]).substr(("" + D[H]).length));
      }
      return w;
    }
    msg(w = u, t = "", i = "", D) {
      const m = F => {
        if (!F) {
          return F;
        }
        if (typeof F === "string") {
          if (this.isLoon()) {
            return F;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": F
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: F
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof F === "object") {
            if (this.isLoon()) {
              let P = F.openUrl || F.url || F["open-url"],
                Y = F.mediaUrl || F["media-url"];
              const X = {
                openUrl: P,
                mediaUrl: Y
              };
              return X;
            } else {
              if (this.isQuanX()) {
                let d = F["open-url"] || F.url || F.openUrl,
                  p = F["media-url"] || F.mediaUrl;
                const V = {
                  "open-url": d,
                  "media-url": p
                };
                return V;
              } else {
                if (this.isSurge()) {
                  let U = F.url || F.openUrl || F["open-url"];
                  const R = {
                    url: U
                  };
                  return R;
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
          $notification.post(w, t, i, m(D));
        } else {
          this.isQuanX() && $notify(w, t, i, m(D));
        }
      }
      if (!this.isMuteLog) {
        let F = ["", "==============📣系统通知📣=============="];
        F.push(w);
        t ? F.push(t) : "";
        i ? F.push(i) : "";
        console.log(F.join("\n"));
        this.logs = this.logs.concat(F);
      }
    }
    log(...w) {
      w.length > 0 && (this.logs = [...this.logs, ...w]);
      console.log(w.join(this.logSeparator));
    }
    logErr(w, t) {
      const i = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !i ? this.log("", "❗️" + this.name + ", 错误!", w) : this.log("", "❗️" + this.name + ", 错误!", w.stack);
    }
    wait(w) {
      return new Promise(t => setTimeout(t, w));
    }
    done(w = {}) {
      const t = new Date().getTime();
      const i = (t - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + i + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(w);
    }
  }(u, c);
}