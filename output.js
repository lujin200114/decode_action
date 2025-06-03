//Tue Jun 03 2025 13:20:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("浓五酒馆"),
  version = "V1.0.1";
const appName = "nwjgapp";
let nwjgapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", v => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("nwjgactivecode") || 0,
  nwjguserck = $.getval("nwjguserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1",
  helpUtils = undefined,
  CryptoJS = undefined,
  saveFile = false,
  wechatMiniAppId = "wxed3cf95a14b58a26",
  wechatMiniShopAppId = "wx4802c49f1578c6fe",
  signTaskActivityIds = [],
  nwjg_ck_file = "nwjg_cookies.json";
var hour = "",
  minute = "";
let sendlogs = "",
  nwjglogs = [],
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  codes = [],
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
  invicode = "";
let numbers = 3,
  vipDate = "";
if ($.isNode()) {
  process.env.NWJGAPP ? nwjgapp = JSON.parse(process.env.NWJGAPP) : nwjgapp = COOKIES.NWJG;
  userId = process.env.TGUSERID;
  activeCode = process.env.NWJGACTIVECODE;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE));
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
    if (!nwjgapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let O = false;
    const L = apiHost.split("&"),
      V = L.length;
    for (let z = 0; z < V; z++) {
      if ($.isNode()) {
        O = await checkAddress("" + L[z], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          O = await httpClientRequest("" + L[z], 2500);
        } else {
          O = await fetchRequest("" + L[z], 2500);
        }
      }
      if (O == true) {
        apiHost = L[z];
        $.log("📢 接口" + (z + 1) + "[" + L[z] + "]服务器接口正常! 🎉");
        break;
      }
      if (z == V - 1 && O == false) {
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
      let S = new Date(vipDate).getTime(),
        w = new Date().getTime();
      if (w > S) {
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
        let X = new Date(vipDate).getTime(),
          W = new Date().getTime();
        if (W > X) {
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
    if (nwjgapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (nwjgapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + nwjgapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + nwjgapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (nwjgapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    helpUtils = await loadUtils(flushCash);
    CryptoJS = helpUtils.createCryptoJS();
    $.log("📢 一共发现了" + nwjgapp.length + "个账号");
    if ($.isNode()) {
      if (!fs.existsSync(nwjg_ck_file)) {
        nwjg_cks = {};
      } else {
        nwjg_cks = JSON.parse(fs.readFileSync(nwjg_ck_file, "utf8"));
      }
    }
    let f = [],
      t = nwjgapp.length,
      M = 0;
    if ($.isNode() && process.env.NWJG_THREAD_COUNT) {
      M = parseInt(process.env.NWJG_THREAD_COUNT);
    } else {
      M = t;
    }
    let J = nwjgapp.length;
    if (M >= t) {
      M = t;
      J = 1;
      $.log("📢 你设置的线程数是" + M + "，账号个数是" + t + "，" + J + "次可全部跑完。");
      for (let v1 = 0; v1 < nwjgapp.length; v1++) {
        f.push(runMultiTasks(v1));
        nwjglogs[v1] = "";
        if ($.isNode()) {
          channels_status[v1] = 0;
          await init_ws(v1);
        } else {
          channels_status[v1] = 1;
        }
      }
      await Promise.allSettled(f).then(v5 => {
        if ($.isNode() && saveFile) {
          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
          fs.writeFileSync(nwjg_ck_file, JSON.stringify(nwjg_cks, null, 2));
        }
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let v7 = 0; v7 < nwjgapp.length; v7++) {
          $.log(nwjglogs[v7]);
          sendlogs += nwjglogs[v7];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      J = Math.ceil(t / M);
      $.log("📢 你设置的线程数是" + M + "，账号个数是" + t + "，计算后分" + J + "次执行，一次可执行" + M + "个账号，最后一次如果不够" + M + "个账号，剩多少个账号就跑几个账号。");
      for (let v5 = 0; v5 < J; v5++) {
        for (let v6 = v5 * M; v6 < M * (v5 + 1) && v6 < t; v6++) {
          f.push(runMultiTasks(v6));
          nwjglogs[v6] = "";
          channels_status[v6] = 0;
          await init_ws(v6);
        }
        await Promise.allSettled(f).then(v8 => {
          f = [];
          if (v5 == J - 1) {
            if ($.isNode() && saveFile) {
              $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
              fs.writeFileSync(nwjg_ck_file, JSON.stringify(nwjg_cks, null, 2));
            }
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let vL = 0; vL < nwjgapp.length; vL++) {
              $.log(nwjglogs[vL]);
              sendlogs += nwjglogs[vL];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(v => $.logErr(v)).finally(() => $.done());
async function runMultiTasks(v) {
  return new Promise((O, L) => {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 开始执行 working......");
    runSubTask(O, v);
  });
}
async function init_ws(v) {
  if ($.isNode()) {
    if (reconectCounts[v] > 0) {
      $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[v] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[v].on("open", function L() {
      $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 签名通道已连接");
    });
    wss[v].on("close", function V() {
      $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[v].on("error", function f() {
      $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[v] = 1;
      reconectCounts[v]++;
      reconectCounts[v] <= 3 && init_ws(v);
    });
  }
}
async function initLotteryPlatformHeaders(d, O) {
  requestObjects[d].headers.Token = O;
  requestObjects[d].headers["Content-Type"] = "application/x-www-form-urlencoded";
  delete requestObjects[d].headers.Authorization;
}
async function runSubTask(v, d) {
  if ($.isNode()) {
    await $.wait(3000, 5000);
  }
  await login(d);
  await userInfo(d);
  await getActivityId(d);
  await signInfo(d);
  await lotteryPlaformLogin(d);
  await getIntegral(d);
  await getCashList(d);
  $.isNode() && (await wss[d].close());
  await runComplete(appName, userId);
  v();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const f = $request.body;
    let t = nwjguserck - 1;
    if (nwjgapp[t]) {
      nwjgapp[t].token_body = f;
    } else {
      const H = {
        token_body: f
      };
      nwjgapp[t] = H;
    }
    $.setdata(JSON.stringify(nwjgapp, null, 2), "nwjgapp");
    $.msg($.name, "快音账号" + (t + 1) + "Token获取成功！🎉");
  }
}
async function userInfo(v) {
  const O = "https://stdcrm.dtmiller.com/scrm-promotion-service/mini/wly/user/info";
  let L = "";
  await getReqObject(O, L, v);
  await httpRequest("get", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 0) {
    let t = V.data.member,
      M = V.data.grade;
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 👤 用户信息: " + t.nick_name + " (" + t.mobile + ")");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 👤 用户信息: " + t.nick_name + " (" + t.mobile + ")\n";
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎖️ 会员等级: " + M.level_name + " (到期: " + M.expire_time + ")");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎖️ 会员等级: " + M.level_name + " (到期: " + M.expire_time + ")\n";
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 💰 当前积分: " + t.points);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 💰 当前积分: " + t.points + "\n";
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 用户信息=> " + V.msg);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 用户信息=> " + V.msg + "\n";
  }
}
async function getActivityId(v) {
  const O = "https://stdcrm.dtmiller.com/scrm-promotion-service/mini/module/config/list";
  let L = "";
  await getReqObject(O, L, v);
  await httpRequest("post", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 0) {
    let t = V.data.find(M => M.title == "任务中心");
    if (t) {
      let J = t.detailList.find(H => H.id == 151);
      if (J) {
        let H = JSON.parse(J.detailJson),
          z = H.jumpData.pagePath;
        signTaskActivityIds[v] = z.split("actId=")[1];
      }
    }
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 用户信息=> " + V.msg);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 用户信息=> " + V.msg + "\n";
  }
}
async function signInfo(v) {
  const O = "https://stdcrm.dtmiller.com/scrm-promotion-service/promotion/sign/userinfo?promotionId=" + signTaskActivityIds[v];
  let L = "";
  await getReqObject(O, L, v);
  await httpRequest("get", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 0) {
    let f = V.data;
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 📅 签到活动: " + f.promotionName);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 📅 签到活动: " + f.promotionName + "\n";
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 📈 累计签到: " + f.signDays + " 天");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 📈 累计签到: " + f.signDays + " 天\n";
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎁 今日奖励: " + (f.signDayPrizeName ? f.signDayPrizeName : ""));
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎁 今日奖励: " + (f.signDayPrizeName ? f.signDayPrizeName : "") + "\n";
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 今日已签: " + (f.today ? "是" : "否"));
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 今日已签: " + (f.today ? "是" : "否") + "\n";
    if (!f.today) {
      $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🚀 开始签到...");
      nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🚀 开始签到...\n";
      await doSignToday(v);
    } else {
      $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ℹ️ 今日已签到，无需重复操作");
      nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ℹ️ 今日已签到，无需重复操作\n";
    }
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 用户信息=> " + V.msg);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 用户信息=> " + V.msg + "\n";
  }
}
async function doSignToday(v) {
  await getWxCode(v);
  const O = "https://stdcrm.dtmiller.com/scrm-promotion-service/promotion/sign/today?promotionId=" + signTaskActivityIds[v];
  let L = "";
  await getReqObject(O, L, v);
  await httpRequest("get", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 0) {
    let f = V.data;
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 签到成功，获得: " + f.prize.prizeName);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 签到成功，获得: " + f.prize.prizeName + "\n";
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 签到失败！原因：" + V.msg);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 签到失败！原因：" + V.msg + "\n";
  }
}
async function login(v) {
  await getWxCodeFromLocal(v, wechatMiniAppId);
  $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 浓五酒馆小程序微信code获取成功，code值为" + codes[v]);
  const O = "https://stdcrm.dtmiller.com/std-weixin-mp-service/miniApp/custom/login";
  let L = "{\"code\": \"" + codes[v] + "\",\"appId\": \"" + wechatMiniAppId + "\"}";
  await getReqObject(O, L, v);
  await httpRequest("post", requestObjects[v], printCaller());
  let V = httpResult;
  V != null && V.code == 0 ? ($.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 登录成功"), nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 登录成功\n", nwjgapp[v].auth = "Bearer " + V.data) : ($.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 登录失败！"), nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 登录失败！\n");
}
async function lotteryPlaformLogin(v) {
  await getWxCodeFromLocal(v, wechatMiniShopAppId);
  $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 积分商城平台小程序微信code获取成功，code值为" + codes[v]);
  const O = "https://jf.wlnxjc.com/mini/WeChat/Login";
  let L = "code=" + codes[v] + "&to=wheel&loginSource=1";
  await getReqObject(O, L, v);
  await initLotteryPlatformHeaders(v, "");
  await httpRequest("post", requestObjects[v], printCaller());
  let V = httpResult;
  V != null && V.code == 200 ? ($.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 积分商城平台登录成功"), nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: ✅ 积分商城平台登录成功\n", nwjgapp[v].lotteryPlatformAuth = V.data.token) : ($.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 登录失败！"), nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 登录失败！\n");
}
async function getIntegral(v) {
  const O = "https://jf.wlnxjc.com/mini/Integral/Get";
  let L = "";
  await getReqObject(O, L, v);
  await initLotteryPlatformHeaders(v, nwjgapp[v].lotteryPlatformAuth);
  await httpRequest("get", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 200) {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 💰 当前积分: " + V.data.integral);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 💰 当前积分: " + V.data.integral + "\n";
    if (V.data.integral >= 20) {
      await draw(v);
    }
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 获取积分信息失败！");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 获取积分信息失败！\n";
  }
}
async function draw(v) {
  const O = "https://jf.wlnxjc.com/mini/Activity/Draw";
  let L = "activityId=1924637800871890944";
  await getReqObject(O, L, v);
  await initLotteryPlatformHeaders(v, nwjgapp[v].lotteryPlatformAuth);
  await httpRequest("post", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 200) {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎉 恭喜获得: " + V.data.lottery.awardName + ", 奖品是" + V.data.lottery.prizeName);
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎉 恭喜获得: " + V.data.lottery.awardName + ", 奖品是" + V.data.lottery.prizeName + "\n";
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 抽奖失败！");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 抽奖失败！\n";
  }
}
async function getCashList(v) {
  const O = "https://jf.wlnxjc.com/mini/DrawRecord/GetUserList?page=1&rows=8&status=0&t1=1";
  let L = "";
  await getReqObject(O, L, v);
  await initLotteryPlatformHeaders(v, nwjgapp[v].lotteryPlatformAuth);
  await httpRequest("get", requestObjects[v], printCaller());
  let V = httpResult;
  if (V != null && V.code == 200) {
    let t = V.data.rows;
    if (t.length > 0) {
      for (let J = 0; J < t.length; J++) {
        let z = t[J];
        await receiveCash(v, z);
      }
    }
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 获取未领取列表失败！");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 获取未领取列表失败！\n";
  }
}
async function receiveCash(v, d) {
  const L = "https://jf.wlnxjc.com/mini/DrawRecord/ReceiveLottery";
  let V = "id=" + d.id;
  await getReqObject(L, V, v);
  await initLotteryPlatformHeaders(v, nwjgapp[v].lotteryPlatformAuth);
  await httpRequest("post", requestObjects[v], printCaller());
  let f = httpResult;
  if (f != null && f.code == 200) {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎉 恭喜你，奖品领取成功！");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 🎉 恭喜你，奖品领取成功！\n";
  } else {
    $.log("[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 奖品领取失败！");
    nwjglogs[v] += "[账号" + (v + 1 < 10 ? "0" + (v + 1) : v + 1) + "]: 奖品领取失败！\n";
  }
}
function getScriptAuth(v, d, O) {
  return new Promise((V, f) => {
    const J = apiHost + "/script/permissions/lastest",
      H = {};
    H.appName = v;
    H.userId = d;
    H.activityCode = O;
    H.version = version;
    const z = H,
      A = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const l = {
      url: J,
      headers: A,
      body: JSON.stringify(z)
    };
    $.post(l, async (a, E, q) => {
      if (q && q != null && q.replace(/\"/g, "").length > 50) {
        const S = q.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(S).toString(CryptoJS.enc.Utf8));
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
        } catch (Y) {
          $.log(Y);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      V();
    });
  });
}
function runComplete(v, d) {
  return new Promise((L, V) => {
    const t = apiHost + "/script/run/add",
      M = {
        appName: v,
        userId: d,
        activityCode: activeCode,
        version: version
      };
    const H = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const z = {
      url: t,
      headers: H,
      body: JSON.stringify(M)
    };
    $.post(z, async (A, l, a) => {
      L();
    });
  });
}
function loadToken(d) {
  const O = {
    OPRdM: function (f, t) {
      return f < t;
    },
    tYnJa: function (f, t) {
      return f + t;
    },
    UCEvK: function (f, t) {
      return f + t;
    },
    Odtym: function (f, t) {
      return f + t;
    },
    LqQaj: function (f, t) {
      return f + t;
    },
    fjKnO: function (f, t) {
      return f + t;
    },
    udcFt: function (f, t) {
      return f + t;
    },
    USBvs: function (f, t) {
      return f + t;
    },
    pQPmg: function (f, t) {
      return f + t;
    },
    OMMSZ: "Bearer ",
    wMVWl: function (f, t) {
      return f === t;
    },
    pCmde: "xzLeO",
    EfvVv: "HXOxV",
    lRwLC: function (f, t) {
      return f !== t;
    },
    wtLzz: "gwaBm"
  };
  const L = O;
  let V = nwjgapp[d].mobile;
  nwjg_item = nwjg_cks["" + V];
  if (nwjg_item) {
    if (L.wMVWl(L.pCmde, L.EfvVv)) {
      l.log("[账号" + (L.OPRdM(L.tYnJa(a, 1), 10) ? L.UCEvK("0", L.Odtym(E, 1)) : L.tYnJa(q, 1)) + "]: ✅ 登录成功");
      F[r] += "[账号" + (L.OPRdM(L.LqQaj(x, 1), 10) ? L.fjKnO("0", L.udcFt(S, 1)) : L.USBvs(w, 1)) + "]: ✅ 登录成功\n";
      o[T].auth = L.pQPmg(L.OMMSZ, Y.data);
    } else {
      nwjgapp[d].refreshToken = nwjg_item.refreshToken;
      nwjgapp[d].accessToken = nwjg_item.accessToken;
      return true;
    }
  } else {
    if (L.lRwLC(L.wtLzz, L.wtLzz)) {
      L = V.parse(f.env.CLEANCACHE);
    } else {
      return false;
    }
  }
}
function saveToken(v) {
  nwjg_cks[nwjgapp[v].mobile] = {
    refreshToken: nwjgapp[v].refreshToken,
    accessToken: nwjgapp[v].accessToken,
    ts: ts13()
  };
}
async function loadUtils(v) {
  let O = $.getdata("Utils_Code") || "";
  if (!v && O && Object.keys(O).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(O);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async V => {
    $.getScript("http://script.david2025.top/scripts/tools/JS-Utils.js").then(f => {
      $.setdata(f, "Utils_Code");
      eval(f);
      $.log("📢 JS-Utils加载成功");
      V(creatUtils());
    });
  });
}
function checkAddress(v, d) {
  return new Promise((L, V) => {
    const t = setTimeout(() => {
        L(false);
      }, d),
      M = http.get(v, J => {
        clearTimeout(t);
        if (J.statusCode === 404) {
          L(true);
        } else {
          L(false);
        }
      });
    M.on("error", J => {
      clearTimeout(t);
      L(false);
    });
    M.on("timeout", () => {
      M.abort();
      V(new Error("请求超时"));
    });
  });
}
async function fetchRequest(v, d = 3000) {
  return new Promise((L, V) => {
    const M = {
      url: v + "/docs"
    };
    setTimeout(() => {
      L(false);
    }, d);
    $.get(M, async (J, H, z) => {
      if (H.status == 401) {
        L(true);
      } else {
        L(false);
      }
    });
  });
}
async function httpClientRequest(v, d = 3000) {
  return new Promise((L, V) => {
    const M = {
      url: v + "/"
    };
    setTimeout(() => {
      L(false);
    }, d);
    $httpClient.get(M, async (J, H, z) => {
      if (z == "{\"detail\":\"Not Found\"}") {
        L(true);
      } else {
        L(false);
      }
    });
  });
}
async function redisGet(v, d, O) {
  return new Promise((V, f) => {
    const t = apiHost + "/redis/hash/get/" + d + "/" + O,
      M = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const J = {
      url: t,
      headers: M
    };
    $.get(J, async (z, A, l) => {
      const E = l.replace(/\"/g, "");
      answerTexts[v] = E;
      V();
    });
  });
}
function redisSet(v, d, O) {
  return new Promise((V, f) => {
    const J = apiHost + "/redis/hash/set",
      H = {
        key: v,
        hashKey: d,
        hashValue: O
      };
    const A = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: J,
      headers: A,
      body: JSON.stringify(H)
    };
    $.post(l, async (a, E, q) => {
      V();
    });
  });
}
function redisPop(v) {
  return new Promise((O, L) => {
    const t = apiHost + "/redis/set/pop/" + v,
      M = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const J = {
      url: t,
      headers: M
    };
    $.get(J, async (z, A, l) => {
      const a = l.replace(/\"/g, "");
      popCookie = a;
      O();
    });
  });
}
function getWxCode(v, d) {
  return new Promise((L, V) => {
    const M = apiHost + "/wechat/mini/code",
      J = {
        content: nwjgapp[v].key + "@" + d,
        appName: appName,
        uuid: userId
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const A = {
      url: M,
      headers: z,
      body: JSON.stringify(J)
    };
    $.post(A, async (l, a, E) => {
      const q = E.replace(/\"/g, "");
      codes[v] = q;
      L();
    });
  });
}
function getWxCodeFromLocal(v, d) {
  return new Promise((L, V) => {
    const M = nwjgapp[v].interface + "/applet/JsLogin?key=" + nwjgapp[v].key,
      J = {
        AppId: d,
        Data: "",
        Opt: 1,
        PackageName: "",
        SdkName: ""
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const A = {
      url: M,
      headers: z,
      body: JSON.stringify(J)
    };
    $.post(A, async (l, a, E) => {
      codes[v] = JSON.parse(E).Data.Code;
      L();
    });
  });
}
async function getReqObject(O, L, V) {
  let t = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (nwjgapp[V].ua && nwjgapp[V].ua != "") {
    t = nwjgapp[V].ua;
  }
  let M = getHostname(O);
  const J = {
    "Content-Type": "application/json",
    "User-Agent": t,
    Authorization: nwjgapp[V].auth ? nwjgapp[V].auth : "",
    Host: M
  };
  const H = {};
  H.url = O;
  H.headers = J;
  let z = H;
  L && (z.body = L);
  requestObjects[V] = z;
  return z;
}
function getReqObject_(O, L, V) {
  let t = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (nwjgapp[V].ua && nwjgapp[V].ua != "") {
    t = nwjgapp[V].ua;
  }
  let M = getHostname(O);
  const J = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": t,
    Authorization: nwjgapp[V].auth,
    Host: M
  };
  const H = {
    url: O,
    headers: J
  };
  let z = H;
  if (L) {
    z.body = L;
  }
  requestObjects[V] = z;
  return z;
}
async function httpRequest(v, d, O) {
  httpResult = null;
  return new Promise(V => {
    $[v](d, async (t, M, J) => {
      try {
        if (t) {
          $.log(O + ": " + v + "请求失败");
          $.log(JSON.stringify(t));
          $.logErr(t);
        } else {
          if (safeGet(J)) {
            httpResult = JSON.parse(J);
          } else {
            const E = new URL(d.url);
            $.log(E.pathname + "发起" + v + "请求时，出现错误，请处理");
          }
        }
      } catch (r) {
        $.logErr(r, M);
      } finally {
        V(httpResult);
      }
    });
  });
}
async function selectChannel(v, d) {
  if (channels_status[v] == 0) {
    await getSign_(v, d);
  } else {
    await getSign(v, d);
  }
}
function getSign_(v, d) {
  return new Promise((L, V) => {
    function M(J) {
      let A = J.toString("utf8");
      requestSigns[v] = A;
      wss[v].removeListener("message", M);
      L(A);
    }
    wss[v].on("message", M);
    if (wss[v].readyState === 1) {
      const H = {
        method: appName,
        params: {}
      };
      H.params.content = d;
      H.params.appName = appName;
      H.params.uuid = userId;
      wss[v].send(JSON.stringify(H), z => {
        if (z) {
          V(z);
        }
      });
    } else {
      L(getSign(v, d));
      wss[v].removeListener("message", M);
    }
  });
}
function getSign(v, d) {
  return new Promise((L, V) => {
    const M = apiHost + "/sign/nwjg",
      J = {
        content: d,
        appName: appName,
        uuid: userId
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const A = {
      url: M,
      headers: z,
      body: JSON.stringify(J)
    };
    $.post(A, async (l, a, E) => {
      const F = E.replace(/\"/g, "");
      requestSigns[v] = F;
      L();
    });
  });
}
function sortUrlParams(v, d, O) {
  const V = url2obj(v);
  d.forEach(M => {
    delete V[M];
  });
  Object.assign(V, O);
  const f = Object.keys(V).sort(),
    t = f.map(M => M + "=" + V[M]).join("&");
  return t;
}
function url2obj(d) {
  d = d.replace(/\"/g, "");
  var V,
    f = {},
    t = d.slice(d.indexOf("?") + 1).split("&");
  for (var M = 0; M < t.length; M++) {
    V = t[M].split("=");
    f[V[0]] = V[1];
  }
  return f;
}
function convertStringToJson(d) {
  const V = d.replace(/[{} ]/g, "");
  const f = V.split(","),
    t = {};
  f.forEach(M => {
    const [J, H] = M.split("=");
    t[J] = H;
  });
  return t;
}
function getHostname(v) {
  let O = v.substr(v.indexOf("//") + 2),
    L = O.substr(0, O.indexOf("/"));
  let V = "",
    f = L.indexOf(":");
  f > 0 ? V = L.substr(0, f) : V = L;
  return V;
}
function calculateTimeDifference(d, O) {
  var H = new Date(d);
  var M = new Date(O);
  var J = M - H;
  var z = Math.floor(J / 1000);
  return z;
}
function cutString(v, d) {
  if (v.length * 2 <= d) {
    return v;
  }
  var L = 0;
  var V = "";
  for (var f = 0; f < v.length; f++) {
    V = V + v.charAt(f);
    if (v.charCodeAt(f) > 128) {
      L = L + 2;
      if (L >= d) {
        return V.substring(0, V.length - 1) + "...";
      }
    } else {
      L = L + 1;
      if (L >= d) {
        return V.substring(0, V.length - 2) + "...";
      }
    }
  }
  return V;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(d) {
  try {
    if (typeof JSON.parse(d) == "object") {
      return true;
    }
  } catch (t) {
    console.log(t);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(v) {
  var O = Object.keys(v).map(function (L) {
    return encodeURIComponent(L) + "=" + encodeURIComponent(v[L]);
  }).join("&");
  return O;
}
function compileStr(v) {
  var O = String.fromCharCode(v.charCodeAt(0) + v.length);
  for (var L = 1; L < v.length; L++) {
    O += String.fromCharCode(v.charCodeAt(L) + v.charCodeAt(L - 1));
  }
  return escape(O);
}
function uncompileStr(v) {
  v = unescape(v);
  var O = String.fromCharCode(v.charCodeAt(0) - v.length);
  for (var L = 1; L < v.length; L++) {
    O += String.fromCharCode(v.charCodeAt(L) - O.charCodeAt(L - 1));
  }
  return O;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(v) {
  return new Promise((O, L) => {
    const f = "https://v1.hitokoto.cn/?c=e",
      t = {
        accept: "application/json"
      };
    const M = {
      url: f,
      headers: t
    };
    $.get(M, async (H, z, A) => {
      let a = JSON.parse(A),
        E = a.hitokoto;
      contents[v] = E + " " + E;
      O();
    });
  });
}
function getTime_8() {
  return new Promise((d, O) => {
    const V = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      f = {
        url: V
      };
    $.get(f, async (M, J, H) => {
      d(H);
    });
  });
}
function message() {
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(v) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, v);
      } else {
        $.msg($.name, "", v);
      }
    } else {
      $.log(v);
    }
  }
}
async function wxPush(v, d, O) {
  return new Promise((V, f) => {
    const J = "https://wxpusher.zjiecode.com/api/send/message",
      H = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: d,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [O],
        verifyPay: false
      };
    const A = {
      "Content-Type": "application/json"
    };
    const l = {
      url: J,
      headers: A,
      body: JSON.stringify(H)
    };
    $.post(l, async (a, E, q) => {
      V();
    });
  });
}
function Env(v, d) {
  class L {
    constructor(V) {
      this.env = V;
    }
    send(V, f = "GET") {
      V = "string" == typeof V ? {
        url: V
      } : V;
      let J = this.get;
      "POST" === f && (J = this.post);
      return new Promise((H, z) => {
        J.call(this, V, (l, a, E) => {
          l ? z(l) : H(a);
        });
      });
    }
    get(V) {
      return this.send.call(this.env, V);
    }
    post(V) {
      return this.send.call(this.env, V, "POST");
    }
  }
  return new class {
    constructor(V, f) {
      const J = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const H = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = J;
      this.logLevelPrefixs = H;
      this.logLevel = "info";
      this.name = V;
      this.http = new L(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, f);
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(V, f = null) {
      try {
        return JSON.parse(V);
      } catch {
        return f;
      }
    }
    toStr(V, f = null, ...M) {
      try {
        return JSON.stringify(V, ...M);
      } catch {
        return f;
      }
    }
    getjson(V, f) {
      let J = f;
      if (this.getdata(V)) {
        try {
          J = JSON.parse(this.getdata(V));
        } catch {}
      }
      return J;
    }
    setjson(V, f) {
      try {
        return this.setdata(JSON.stringify(V), f);
      } catch {
        return !1;
      }
    }
    getScript(V) {
      return new Promise(M => {
        const z = {
          url: V
        };
        this.get(z, (A, l, a) => M(a));
      });
    }
    runScript(V, f) {
      return new Promise(H => {
        let z = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        z = z ? z.replace(/\n/g, "").trim() : z;
        let A = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        A = A ? 1 * A : 20;
        A = f && f.timeout ? f.timeout : A;
        const l = {
          script_text: V,
          mock_type: "cron",
          timeout: A
        };
        const [E, q] = z.split("@"),
          F = {
            url: "http://" + q + "/v1/scripting/evaluate",
            body: l,
            headers: {
              "X-Key": E,
              Accept: "*/*"
            },
            timeout: A
          };
        this.post(F, (x, S, w) => H(w));
      }).catch(H => this.logErr(H));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const M = this.path.resolve(this.dataFile),
          J = this.path.resolve(process.cwd(), this.dataFile),
          H = this.fs.existsSync(M),
          z = !H && this.fs.existsSync(J);
        if (!H && !z) {
          return {};
        }
        {
          const A = H ? M : J;
          try {
            return JSON.parse(this.fs.readFileSync(A));
          } catch (a) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const f = this.path.resolve(this.dataFile),
          M = this.path.resolve(process.cwd(), this.dataFile),
          J = this.fs.existsSync(f),
          H = !J && this.fs.existsSync(M),
          z = JSON.stringify(this.data);
        J ? this.fs.writeFileSync(f, z) : H ? this.fs.writeFileSync(M, z) : this.fs.writeFileSync(f, z);
      }
    }
    lodash_get(V, f, M) {
      const H = f.replace(/\[(\d+)\]/g, ".$1").split(".");
      let z = V;
      for (const A of H) if (z = Object(z)[A], void 0 === z) {
        return M;
      }
      return z;
    }
    lodash_set(V, f, M) {
      Object(V) !== V || (Array.isArray(f) || (f = f.toString().match(/[^.[\]]+/g) || []), f.slice(0, -1).reduce((H, z, A) => Object(H[z]) === H[z] ? H[z] : H[z] = Math.abs(f[A + 1]) >> 0 == +f[A + 1] ? [] : {}, V)[f[f.length - 1]] = M);
      return V;
    }
    getdata(V) {
      let H = this.getval(V);
      if (/^@/.test(V)) {
        const [, A, l] = /^@(.*?)\.(.*?)$/.exec(V),
          a = A ? this.getval(A) : "";
        if (a) {
          try {
            const E = JSON.parse(a);
            H = E ? this.lodash_get(E, l, "") : H;
          } catch (F) {
            H = "";
          }
        }
      }
      return H;
    }
    setdata(V, f) {
      let J = !1;
      if (/^@/.test(f)) {
        const [, z, A] = /^@(.*?)\.(.*?)$/.exec(f),
          l = this.getval(z),
          E = z ? "null" === l ? null : l || "{}" : "{}";
        try {
          const F = JSON.parse(E);
          this.lodash_set(F, A, V);
          J = this.setval(JSON.stringify(F), z);
        } catch (x) {
          const S = {};
          this.lodash_set(S, A, V);
          J = this.setval(JSON.stringify(S), z);
        }
      } else {
        J = this.setval(V, f);
      }
      return J;
    }
    getval(V) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(V);
        case "Quantumult X":
          return $prefs.valueForKey(V);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[V];
        default:
          return this.data && this.data[V] || null;
      }
    }
    setval(V, f) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(V, f);
        case "Quantumult X":
          return $prefs.setValueForKey(V, f);
        case "Node.js":
          this.data = this.loaddata();
          this.data[f] = V;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[f] || null;
      }
    }
    initGotEnv(V) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      V && (V.headers = V.headers ? V.headers : {}, V && (V.headers = V.headers ? V.headers : {}, void 0 === V.headers.cookie && void 0 === V.headers.Cookie && void 0 === V.cookieJar && (V.cookieJar = this.ckjar)));
    }
    get(V, f = () => {}) {
      const J = {
        redirection: !1
      };
      switch (V.headers && (delete V.headers["Content-Type"], delete V.headers["Content-Length"], delete V.headers["content-type"], delete V.headers["content-length"]), V.params && (V.url += "?" + this.queryStr(V.params)), void 0 === V.followRedirect || V.followRedirect || ((this.isSurge() || this.isLoon()) && (V["auto-redirect"] = !1), this.isQuanX() && (V.opts ? V.opts.redirection = !1 : V.opts = J)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const H = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (V.headers = V.headers || {}, Object.assign(V.headers, H));
          $httpClient.get(V, (l, a, E) => {
            !l && a && (a.body = E, a.statusCode = a.status ? a.status : a.statusCode, a.status = a.statusCode);
            f(l, a, E);
          });
          break;
        case "Quantumult X":
          const z = {};
          z.hints = !1;
          this.isNeedRewrite && (V.opts = V.opts || {}, Object.assign(V.opts, z));
          $task.fetch(V).then(l => {
            const {
                statusCode: q,
                statusCode: F,
                headers: x,
                body: S,
                bodyBytes: w
              } = l,
              T = {
                status: q,
                statusCode: F,
                headers: x,
                body: S,
                bodyBytes: w
              };
            f(null, T, S, w);
          }, l => f(l && l.error || "UndefinedError"));
          break;
        case "Node.js":
          let A = require("iconv-lite");
          this.initGotEnv(V);
          this.got(V).on("redirect", (l, a) => {
            try {
              if (l.headers["set-cookie"]) {
                const E = l.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                E && this.ckjar.setCookieSync(E, null);
                a.cookieJar = this.ckjar;
              }
            } catch (r) {
              this.logErr(r);
            }
          }).then(l => {
            const {
                statusCode: q,
                statusCode: F,
                headers: x,
                rawBody: S
              } = l,
              w = A.decode(S, this.encoding),
              T = {
                status: q,
                statusCode: F,
                headers: x,
                rawBody: S,
                body: w
              };
            f(null, T, w);
          }, l => {
            const {
              message: q,
              response: F
            } = l;
            f(q, F, F && A.decode(F.rawBody, this.encoding));
          });
          break;
      }
    }
    post(V, f = () => {}) {
      const H = V.method ? V.method.toLocaleLowerCase() : "post",
        z = {
          redirection: !1
        };
      switch (V.body && V.headers && !V.headers["Content-Type"] && !V.headers["content-type"] && (V.headers["content-type"] = "application/x-www-form-urlencoded"), V.headers && (delete V.headers["Content-Length"], delete V.headers["content-length"]), void 0 === V.followRedirect || V.followRedirect || ((this.isSurge() || this.isLoon()) && (V["auto-redirect"] = !1), this.isQuanX() && (V.opts ? V.opts.redirection = !1 : V.opts = z)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const A = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (V.headers = V.headers || {}, Object.assign(V.headers, A));
          $httpClient[H](V, (F, x, S) => {
            !F && x && (x.body = S, x.statusCode = x.status ? x.status : x.statusCode, x.status = x.statusCode);
            f(F, x, S);
          });
          break;
        case "Quantumult X":
          const l = {};
          l.hints = !1;
          V.method = H;
          this.isNeedRewrite && (V.opts = V.opts || {}, Object.assign(V.opts, l));
          $task.fetch(V).then(F => {
            const {
                statusCode: x,
                statusCode: S,
                headers: w,
                body: T,
                bodyBytes: Y
              } = F,
              c = {
                status: x,
                statusCode: S,
                headers: w,
                body: T,
                bodyBytes: Y
              };
            f(null, c, T, Y);
          }, F => f(F && F.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(V);
          const {
            url: E,
            ...q
          } = V;
          this.got[H](E, q).then(F => {
            const {
                statusCode: S,
                statusCode: w,
                headers: T,
                rawBody: Y
              } = F,
              c = a.decode(Y, this.encoding),
              K = {
                status: S,
                statusCode: w,
                headers: T,
                rawBody: Y,
                body: c
              };
            f(null, K, c);
          }, F => {
            const {
              message: S,
              response: w
            } = F;
            f(S, w, w && a.decode(w.rawBody, this.encoding));
          });
          break;
      }
    }
    time(V, f = null) {
      const H = f ? new Date(f) : new Date();
      let z = {
        "M+": H.getMonth() + 1,
        "d+": H.getDate(),
        "H+": H.getHours(),
        "m+": H.getMinutes(),
        "s+": H.getSeconds(),
        "q+": Math.floor((H.getMonth() + 3) / 3),
        S: H.getMilliseconds()
      };
      /(y+)/.test(V) && (V = V.replace(RegExp.$1, (H.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let A in z) new RegExp("(" + A + ")").test(V) && (V = V.replace(RegExp.$1, 1 == RegExp.$1.length ? z[A] : ("00" + z[A]).substr(("" + z[A]).length)));
      return V;
    }
    queryStr(V) {
      let M = "";
      for (const J in V) {
        let z = V[J];
        null != z && "" !== z && ("object" == typeof z && (z = JSON.stringify(z)), M += J + "=" + z + "&");
      }
      M = M.substring(0, M.length - 1);
      return M;
    }
    msg(V = v, f = "", M = "", J = {}) {
      const A = l => {
        const {
          $open: F,
          $copy: x,
          $media: S,
          $mediaMime: w
        } = l;
        switch (typeof l) {
          case void 0:
            return l;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const T = {
                  url: l
                };
                return T;
              case "Loon":
              case "Shadowrocket":
                return l;
              case "Quantumult X":
                const Y = {
                  "open-url": l
                };
                return Y;
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const K = {};
                  let h = l.openUrl || l.url || l["open-url"] || F;
                  h && Object.assign(K, {
                    action: "open-url",
                    url: h
                  });
                  let y = l["update-pasteboard"] || l.updatePasteboard || x;
                  if (y && Object.assign(K, {
                    action: "clipboard",
                    text: y
                  }), S) {
                    let G, X, W;
                    if (S.startsWith("http")) {
                      G = S;
                    } else {
                      if (S.startsWith("data:")) {
                        const [D] = S.split(";"),
                          [, P] = S.split(",");
                        X = P;
                        W = D.replace("data:", "");
                      } else {
                        X = S;
                        W = (p => {
                          const j = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var b in j) if (0 === p.indexOf(b)) {
                            return j[b];
                          }
                          return null;
                        })(S);
                      }
                    }
                    Object.assign(K, {
                      "media-url": G,
                      "media-base64": X,
                      "media-base64-mime": w ?? W
                    });
                  }
                  const I = {};
                  I["auto-dismiss"] = l["auto-dismiss"];
                  I.sound = l.sound;
                  Object.assign(K, I);
                  return K;
                }
              case "Loon":
                {
                  const j = {};
                  let g = l.openUrl || l.url || l["open-url"] || F;
                  g && Object.assign(j, {
                    openUrl: g
                  });
                  let Q = l.mediaUrl || l["media-url"];
                  S?.["startsWith"]("http") && (Q = S);
                  Q && Object.assign(j, {
                    mediaUrl: Q
                  });
                  console.log(JSON.stringify(j));
                  return j;
                }
              case "Quantumult X":
                {
                  const u = {};
                  let k = l["open-url"] || l.url || l.openUrl || F;
                  k && Object.assign(u, {
                    "open-url": k
                  });
                  let m = l["media-url"] || l.mediaUrl;
                  S?.["startsWith"]("http") && (m = S);
                  m && Object.assign(u, {
                    "media-url": m
                  });
                  let Z = l["update-pasteboard"] || l.updatePasteboard || x;
                  Z && Object.assign(u, {
                    "update-pasteboard": Z
                  });
                  console.log(JSON.stringify(u));
                  return u;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(V, f, M, A(J));
            break;
          case "Quantumult X":
            $notify(V, f, M, A(J));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let l = ["", "==============📣系统通知📣=============="];
        l.push(V);
        f && l.push(f);
        M && l.push(M);
        console.log(l.join("\n"));
        this.logs = this.logs.concat(l);
      }
    }
    debug(...V) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (V.length > 0 && (this.logs = [...this.logs, ...V]), console.log("" + this.logLevelPrefixs.debug + V.map(f => f ?? String(f)).join(this.logSeparator)));
    }
    info(...V) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (V.length > 0 && (this.logs = [...this.logs, ...V]), console.log("" + this.logLevelPrefixs.info + V.map(J => J ?? String(J)).join(this.logSeparator)));
    }
    warn(...V) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (V.length > 0 && (this.logs = [...this.logs, ...V]), console.log("" + this.logLevelPrefixs.warn + V.map(M => M ?? String(M)).join(this.logSeparator)));
    }
    error(...V) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (V.length > 0 && (this.logs = [...this.logs, ...V]), console.log("" + this.logLevelPrefixs.error + V.map(f => f ?? String(f)).join(this.logSeparator)));
    }
    log(...V) {
      V.length > 0 && (this.logs = [...this.logs, ...V]);
      console.log(V.map(f => f ?? String(f)).join(this.logSeparator));
    }
    logErr(V, f) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", f, V);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", f, void 0 !== V.message ? V.message : V, V.stack);
          break;
      }
    }
    wait(V) {
      return new Promise(M => setTimeout(M, V));
    }
    done(V = {}) {
      const M = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + M + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(V);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(v, d);
}