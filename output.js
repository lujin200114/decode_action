//Mon Jun 02 2025 12:59:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("浓五酒馆"),
  version = "V1.0.0",
  appName = "nwjgapp";
let nwjgapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", Z => {}));
const http = $.isNode() ? require("http") : "";
const notify = $.isNode() ? require("./sendNotify") : "",
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
  saveFile = false;
let wechatMiniAppId = "wxed3cf95a14b58a26",
  wechatMiniShopAppId = "wx4802c49f1578c6fe",
  signTaskActivityIds = [],
  nwjg_ck_file = "nwjg_cookies.json";
var hour = "",
  minute = "";
let sendlogs = "",
  nwjglogs = [];
let wss = [],
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
  buyCount = 1;
let runTotalCounts = 1,
  runedCounts = 1,
  userRank = "",
  invicode = "",
  numbers = 3,
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
    let r = false;
    const c = apiHost.split("&"),
      p = c.length;
    for (let F = 0; F < p; F++) {
      if ($.isNode()) {
        r = await checkAddress("" + c[F], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          r = await httpClientRequest("" + c[F], 2500);
        } else {
          r = await fetchRequest("" + c[F], 2500);
        }
      }
      if (r == true) {
        apiHost = c[F];
        $.log("📢 接口" + (F + 1) + "[" + c[F] + "]服务器接口正常! 🎉");
        break;
      }
      if (F == p - 1 && r == false) {
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
      let w = new Date(vipDate).getTime(),
        R = new Date().getTime();
      if (R > w) {
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
        let L = new Date(vipDate).getTime(),
          s = new Date().getTime();
        if (s > L) {
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
    let g = [],
      P = nwjgapp.length,
      l = 0;
    if ($.isNode() && process.env.NWJG_THREAD_COUNT) {
      l = parseInt(process.env.NWJG_THREAD_COUNT);
    } else {
      l = P;
    }
    let h = nwjgapp.length;
    if (l >= P) {
      l = P;
      h = 1;
      $.log("📢 你设置的线程数是" + l + "，账号个数是" + P + "，" + h + "次可全部跑完。");
      for (let Z1 = 0; Z1 < nwjgapp.length; Z1++) {
        g.push(runMultiTasks(Z1));
        nwjglogs[Z1] = "";
        if ($.isNode()) {
          channels_status[Z1] = 0;
          await init_ws(Z1);
        } else {
          channels_status[Z1] = 1;
        }
      }
      await Promise.allSettled(g).then(Z5 => {
        if ($.isNode() && saveFile) {
          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
          fs.writeFileSync(nwjg_ck_file, JSON.stringify(nwjg_cks, null, 2));
        }
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let Z8 = 0; Z8 < nwjgapp.length; Z8++) {
          $.log(nwjglogs[Z8]);
          sendlogs += nwjglogs[Z8];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      h = Math.ceil(P / l);
      $.log("📢 你设置的线程数是" + l + "，账号个数是" + P + "，计算后分" + h + "次执行，一次可执行" + l + "个账号，最后一次如果不够" + l + "个账号，剩多少个账号就跑几个账号。");
      for (let Z6 = 0; Z6 < h; Z6++) {
        for (let Z8 = Z6 * l; Z8 < l * (Z6 + 1) && Z8 < P; Z8++) {
          g.push(runMultiTasks(Z8));
          nwjglogs[Z8] = "";
          channels_status[Z8] = 0;
          await init_ws(Z8);
        }
        await Promise.allSettled(g).then(ZZ => {
          g = [];
          if (Z6 == h - 1) {
            if ($.isNode() && saveFile) {
              $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
              fs.writeFileSync(nwjg_ck_file, JSON.stringify(nwjg_cks, null, 2));
            }
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let Zp = 0; Zp < nwjgapp.length; Zp++) {
              $.log(nwjglogs[Zp]);
              sendlogs += nwjglogs[Zp];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(Z => $.logErr(Z)).finally(() => $.done());
async function runMultiTasks(Z) {
  return new Promise((t, r) => {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 开始执行 working......");
    runSubTask(t, Z);
  });
}
async function init_ws(Z) {
  $.isNode() && (reconectCounts[Z] > 0 && $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 尝试重新连接服务器>>>>>>"), wss[Z] = new WebSocket(apiHost.replace("http", "ws") + "/ws"), wss[Z].on("open", function c() {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 签名通道已连接");
  }), wss[Z].on("close", function p() {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
  }), wss[Z].on("error", function g() {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 签名通道已关闭，原因是出现错误");
    channels_status[Z] = 1;
    reconectCounts[Z]++;
    if (reconectCounts[Z] <= 3) {
      init_ws(Z);
    }
  }));
}
async function initLotteryPlatformHeaders(D, t) {
  requestObjects[D].headers.Token = t;
  requestObjects[D].headers["Content-Type"] = "application/x-www-form-urlencoded";
  delete requestObjects[D].headers.Authorization;
}
async function runSubTask(Z, D) {
  if ($.isNode()) {
    await $.wait(3000, 5000);
  }
  await login(D);
  await userInfo(D);
  await getActivityId(D);
  await signInfo(D);
  await lotteryPlaformLogin(D);
  await getIntegral(D);
  $.isNode() && (await wss[D].close());
  await runComplete(appName, userId);
  Z();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const t = $request.body;
    let r = nwjguserck - 1;
    if (nwjgapp[r]) {
      nwjgapp[r].token_body = t;
    } else {
      const g = {
        token_body: t
      };
      nwjgapp[r] = g;
    }
    $.setdata(JSON.stringify(nwjgapp, null, 2), "nwjgapp");
    $.msg($.name, "快音账号" + (r + 1) + "Token获取成功！🎉");
  }
}
async function userInfo(Z) {
  const t = "https://stdcrm.dtmiller.com/scrm-promotion-service/mini/wly/user/info";
  let r = "";
  await getReqObject(t, r, Z);
  await httpRequest("get", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let p = c.data.member,
      g = c.data.grade;
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 👤 用户信息: " + p.nick_name + " (" + p.mobile + ")");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 👤 用户信息: " + p.nick_name + " (" + p.mobile + ")\n";
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🎖️ 会员等级: " + g.level_name + " (到期: " + g.expire_time + ")");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🎖️ 会员等级: " + g.level_name + " (到期: " + g.expire_time + ")\n";
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 💰 当前积分: " + p.points);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 💰 当前积分: " + p.points + "\n";
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 用户信息=> " + c.msg);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 用户信息=> " + c.msg + "\n";
  }
}
async function getActivityId(Z) {
  const t = "https://stdcrm.dtmiller.com/scrm-promotion-service/mini/module/config/list";
  let r = "";
  await getReqObject(t, r, Z);
  await httpRequest("post", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let p = c.data.find(g => g.title == "任务中心");
    if (p) {
      let P = p.detailList.find(l => l.id == 151);
      if (P) {
        let h = JSON.parse(P.detailJson),
          Y = h.jumpData.pagePath;
        signTaskActivityIds[Z] = Y.split("actId=")[1];
      }
    }
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 用户信息=> " + c.msg);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 用户信息=> " + c.msg + "\n";
  }
}
async function signInfo(Z) {
  const t = "https://stdcrm.dtmiller.com/scrm-promotion-service/promotion/sign/userinfo?promotionId=" + signTaskActivityIds[Z];
  let r = "";
  await getReqObject(t, r, Z);
  await httpRequest("get", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let p = c.data;
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 📅 签到活动: " + p.promotionName);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 📅 签到活动: " + p.promotionName + "\n";
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 📈 累计签到: " + p.signDays + " 天");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 📈 累计签到: " + p.signDays + " 天\n";
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🎁 今日奖励: " + (p.signDayPrizeName ? p.signDayPrizeName : ""));
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🎁 今日奖励: " + (p.signDayPrizeName ? p.signDayPrizeName : "") + "\n";
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 今日已签: " + (p.today ? "是" : "否"));
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 今日已签: " + (p.today ? "是" : "否") + "\n";
    if (!p.today) {
      $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🚀 开始签到...");
      nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🚀 开始签到...\n";
      await doSignToday(Z);
    } else {
      $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ℹ️ 今日已签到，无需重复操作");
      nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ℹ️ 今日已签到，无需重复操作\n";
    }
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 用户信息=> " + c.msg);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 用户信息=> " + c.msg + "\n";
  }
}
async function doSignToday(Z) {
  await getWxCode(Z);
  const t = "https://stdcrm.dtmiller.com/scrm-promotion-service/promotion/sign/today?promotionId=" + signTaskActivityIds[Z];
  let r = "";
  await getReqObject(t, r, Z);
  await httpRequest("get", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    let g = c.data;
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 签到成功，获得: " + g.prize.prizeName);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 签到成功，获得: " + g.prize.prizeName + "\n";
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 签到失败！原因：" + c.msg);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 签到失败！原因：" + c.msg + "\n";
  }
}
async function login(Z) {
  await getWxCodeFromLocal(Z, wechatMiniAppId);
  $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 浓五酒馆小程序微信code获取成功，code值为" + codes[Z]);
  const t = "https://stdcrm.dtmiller.com/std-weixin-mp-service/miniApp/custom/login";
  let r = "{\"code\": \"" + codes[Z] + "\",\"appId\": \"" + wechatMiniAppId + "\"}";
  await getReqObject(t, r, Z);
  await httpRequest("post", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 0) {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 登录成功");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 登录成功\n";
    nwjgapp[Z].auth = "Bearer " + c.data;
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 登录失败！");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 登录失败！\n";
  }
}
async function lotteryPlaformLogin(Z) {
  await getWxCodeFromLocal(Z, wechatMiniShopAppId);
  $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 积分商城平台小程序微信code获取成功，code值为" + codes[Z]);
  const t = "https://jf.wlnxjc.com/mini/WeChat/Login";
  let r = "code=" + codes[Z] + "&to=wheel&loginSource=1";
  await getReqObject(t, r, Z);
  await initLotteryPlatformHeaders(Z, "");
  await httpRequest("post", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 200) {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 积分商城平台登录成功");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: ✅ 积分商城平台登录成功\n";
    nwjgapp[Z].lotteryPlatformAuth = c.data.token;
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 登录失败！");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 登录失败！\n";
  }
}
async function getIntegral(Z) {
  const t = "https://jf.wlnxjc.com/mini/Integral/Get";
  let r = "";
  await getReqObject(t, r, Z);
  await initLotteryPlatformHeaders(Z, nwjgapp[Z].lotteryPlatformAuth);
  await httpRequest("get", requestObjects[Z], printCaller());
  let c = httpResult;
  if (c != null && c.code == 200) {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 💰 当前积分: " + c.data.integral);
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 💰 当前积分: " + c.data.integral + "\n";
    if (c.data.integral >= 20) {
      await draw(Z);
    }
  } else {
    $.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 获取积分信息失败！");
    nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 获取积分信息失败！\n";
  }
}
async function draw(Z) {
  const t = "https://jf.wlnxjc.com/mini/Activity/Draw";
  let r = "activityId=1924637800871890944";
  await getReqObject(t, r, Z);
  await initLotteryPlatformHeaders(Z, nwjgapp[Z].lotteryPlatformAuth);
  await httpRequest("post", requestObjects[Z], printCaller());
  let c = httpResult;
  c != null && c.code == 200 ? ($.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🎉 恭喜获得: " + c.data.lottery.awardName + ", 奖品是" + c.data.lottery.prizeName), nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 🎉 恭喜获得: " + c.data.lottery.awardName + ", 奖品是" + c.data.lottery.prizeName + "\n") : ($.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 抽奖失败！"), nwjglogs[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 抽奖失败！\n");
}
function getScriptAuth(Z, D, t) {
  return new Promise((c, p) => {
    const l = apiHost + "/script/permissions/lastest",
      h = {
        appName: Z,
        userId: D,
        activityCode: t,
        version: version
      };
    const F = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const G = {
      url: l,
      headers: F,
      body: JSON.stringify(h)
    };
    $.post(G, async (v, b, C) => {
      if (C && C != null && C.replace(/\"/g, "").length > 50) {
        const z = C.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(z).toString(CryptoJS.enc.Utf8));
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
        } catch (S) {
          $.log(S);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      c();
    });
  });
}
function runComplete(Z, D) {
  return new Promise((r, c) => {
    const p = apiHost + "/script/run/add",
      g = {
        appName: Z,
        userId: D,
        activityCode: activeCode,
        version: version
      };
    const l = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const h = {
      url: p,
      headers: l,
      body: JSON.stringify(g)
    };
    $.post(h, async (Y, F, G) => {
      r();
    });
  });
}
function loadToken(D) {
  let c = nwjgapp[D].mobile;
  nwjg_item = nwjg_cks["" + c];
  if (nwjg_item) {
    nwjgapp[D].refreshToken = nwjg_item.refreshToken;
    nwjgapp[D].accessToken = nwjg_item.accessToken;
    return true;
  } else {
    return false;
  }
}
function saveToken(Z) {
  nwjg_cks[nwjgapp[Z].mobile] = {
    refreshToken: nwjgapp[Z].refreshToken,
    accessToken: nwjgapp[Z].accessToken,
    ts: ts13()
  };
}
async function loadUtils(Z) {
  let t = $.getdata("Utils_Code") || "";
  if (!Z && t && Object.keys(t).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(t);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async c => {
    $.getScript("http://script.david2025.top/scripts/tools/JS-Utils.js").then(P => {
      $.setdata(P, "Utils_Code");
      eval(P);
      $.log("📢 JS-Utils加载成功");
      c(creatUtils());
    });
  });
}
function checkAddress(Z, D) {
  return new Promise((r, c) => {
    const g = setTimeout(() => {
        r(false);
      }, D),
      P = http.get(Z, l => {
        clearTimeout(g);
        if (l.statusCode === 404) {
          r(true);
        } else {
          r(false);
        }
      });
    P.on("error", l => {
      clearTimeout(g);
      r(false);
    });
    P.on("timeout", () => {
      P.abort();
      c(new Error("请求超时"));
    });
  });
}
async function fetchRequest(Z, D = 3000) {
  return new Promise((r, c) => {
    const g = {
      url: Z + "/docs"
    };
    setTimeout(() => {
      r(false);
    }, D);
    $.get(g, async (P, l, h) => {
      l.status == 401 ? r(true) : r(false);
    });
  });
}
async function httpClientRequest(Z, D = 3000) {
  return new Promise((r, c) => {
    const g = {
      url: Z + "/"
    };
    setTimeout(() => {
      r(false);
    }, D);
    $httpClient.get(g, async (P, l, h) => {
      if (h == "{\"detail\":\"Not Found\"}") {
        r(true);
      } else {
        r(false);
      }
    });
  });
}
async function redisGet(Z, D, t) {
  return new Promise((c, p) => {
    const P = apiHost + "/redis/hash/get/" + D + "/" + t,
      l = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const h = {
      url: P,
      headers: l
    };
    $.get(h, async (F, G, v) => {
      const x = v.replace(/\"/g, "");
      answerTexts[Z] = x;
      c();
    });
  });
}
function redisSet(Z, D, t) {
  return new Promise((c, p) => {
    const g = apiHost + "/redis/hash/set",
      P = {
        key: Z,
        hashKey: D,
        hashValue: t
      };
    const h = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: g,
      headers: h,
      body: JSON.stringify(P)
    };
    $.post(Y, async (F, G, v) => {
      c();
    });
  });
}
function redisPop(Z) {
  return new Promise((t, r) => {
    const g = apiHost + "/redis/set/pop/" + Z,
      P = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const l = {
      url: g,
      headers: P
    };
    $.get(l, async (Y, F, G) => {
      const v = G.replace(/\"/g, "");
      popCookie = v;
      t();
    });
  });
}
function getWxCode(Z, D) {
  return new Promise((r, c) => {
    const P = apiHost + "/wechat/mini/code",
      l = {
        content: nwjgapp[Z].key + "@" + D,
        appName: appName,
        uuid: userId
      };
    const Y = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const F = {
      url: P,
      headers: Y,
      body: JSON.stringify(l)
    };
    $.post(F, async (G, v, b) => {
      const K = b.replace(/\"/g, "");
      codes[Z] = K;
      r();
    });
  });
}
function getWxCodeFromLocal(Z, D) {
  return new Promise((r, c) => {
    const g = nwjgapp[Z].interface + "/applet/JsLogin?key=" + nwjgapp[Z].key,
      P = {
        AppId: D,
        Data: "",
        Opt: 1,
        PackageName: "",
        SdkName: ""
      };
    const h = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: g,
      headers: h,
      body: JSON.stringify(P)
    };
    $.post(Y, async (F, G, v) => {
      codes[Z] = JSON.parse(v).Data.Code;
      r();
    });
  });
}
async function getReqObject(t, r, c) {
  let g = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  nwjgapp[c].ua && nwjgapp[c].ua != "" && (g = nwjgapp[c].ua);
  let P = getHostname(t);
  const l = {
    "Content-Type": "application/json",
    "User-Agent": g,
    Authorization: nwjgapp[c].auth ? nwjgapp[c].auth : "",
    Host: P
  };
  const h = {
    url: t,
    headers: l
  };
  if (r) {
    h.body = r;
  }
  requestObjects[c] = h;
  return h;
}
function getReqObject_(t, r, c) {
  let g = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (nwjgapp[c].ua && nwjgapp[c].ua != "") {
    g = nwjgapp[c].ua;
  }
  let P = getHostname(t);
  const l = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": g,
    Authorization: nwjgapp[c].auth,
    Host: P
  };
  const h = {};
  h.url = t;
  h.headers = l;
  let Y = h;
  if (r) {
    Y.body = r;
  }
  requestObjects[c] = Y;
  return Y;
}
async function httpRequest(Z, D, t) {
  httpResult = null;
  return new Promise(c => {
    $[Z](D, async (P, l, h) => {
      try {
        if (P) {
          $.log(t + ": " + Z + "请求失败");
          $.log(JSON.stringify(P));
          $.logErr(P);
        } else {
          if (safeGet(h)) {
            httpResult = JSON.parse(h);
          } else {
            const x = new URL(D.url);
            $.log(x.pathname + "发起" + Z + "请求时，出现错误，请处理");
          }
        }
      } catch (z) {
        $.logErr(z, l);
      } finally {
        c(httpResult);
      }
    });
  });
}
async function selectChannel(Z, D) {
  if (channels_status[Z] == 0) {
    await getSign_(Z, D);
  } else {
    await getSign(Z, D);
  }
}
function getSign_(Z, D) {
  return new Promise((r, c) => {
    function g(P) {
      let Y = P.toString("utf8");
      requestSigns[Z] = Y;
      wss[Z].removeListener("message", g);
      r(Y);
    }
    wss[Z].on("message", g);
    if (wss[Z].readyState === 1) {
      const P = {
        method: appName,
        params: {}
      };
      P.params.content = D;
      P.params.appName = appName;
      P.params.uuid = userId;
      wss[Z].send(JSON.stringify(P), l => {
        if (l) {
          c(l);
        }
      });
    } else {
      r(getSign(Z, D));
      wss[Z].removeListener("message", g);
    }
  });
}
function getSign(Z, D) {
  return new Promise((r, c) => {
    const g = apiHost + "/sign/nwjg",
      P = {
        content: D,
        appName: appName,
        uuid: userId
      };
    const h = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: g,
      headers: h,
      body: JSON.stringify(P)
    };
    $.post(Y, async (F, G, v) => {
      const C = v.replace(/\"/g, "");
      requestSigns[Z] = C;
      r();
    });
  });
}
function sortUrlParams(Z, D, t) {
  const c = url2obj(Z);
  D.forEach(P => {
    delete c[P];
  });
  Object.assign(c, t);
  const p = Object.keys(c).sort();
  const g = p.map(P => P + "=" + c[P]).join("&");
  return g;
}
function url2obj(D) {
  D = D.replace(/\"/g, "");
  var c,
    p = {},
    g = D.slice(D.indexOf("?") + 1).split("&");
  for (var P = 0; P < g.length; P++) {
    c = g[P].split("=");
    p[c[0]] = c[1];
  }
  return p;
}
function convertStringToJson(Z) {
  const t = Z.replace(/[{} ]/g, ""),
    r = t.split(","),
    c = {};
  r.forEach(p => {
    const [P, l] = p.split("=");
    c[P] = l;
  });
  return c;
}
function getHostname(D) {
  let c = D.substr(D.indexOf("//") + 2),
    p = c.substr(0, c.indexOf("/")),
    g = "",
    P = p.indexOf(":");
  if (P > 0) {
    g = p.substr(0, P);
  } else {
    g = p;
  }
  return g;
}
function calculateTimeDifference(D, t) {
  var Y = new Date(D);
  var P = new Date(t);
  var l = P - Y;
  var h = Math.floor(l / 1000);
  return h;
}
function cutString(Z, D) {
  if (Z.length * 2 <= D) {
    return Z;
  }
  var r = 0;
  var c = "";
  for (var p = 0; p < Z.length; p++) {
    c = c + Z.charAt(p);
    if (Z.charCodeAt(p) > 128) {
      r = r + 2;
      if (r >= D) {
        return c.substring(0, c.length - 1) + "...";
      }
    } else {
      r = r + 1;
      if (r >= D) {
        return c.substring(0, c.length - 2) + "...";
      }
    }
  }
  return c;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(Z) {
  try {
    if (typeof JSON.parse(Z) == "object") {
      return true;
    }
  } catch (c) {
    console.log(c);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(Z) {
  var t = Object.keys(Z).map(function (r) {
    return encodeURIComponent(r) + "=" + encodeURIComponent(Z[r]);
  }).join("&");
  return t;
}
function compileStr(Z) {
  var t = String.fromCharCode(Z.charCodeAt(0) + Z.length);
  for (var r = 1; r < Z.length; r++) {
    t += String.fromCharCode(Z.charCodeAt(r) + Z.charCodeAt(r - 1));
  }
  return escape(t);
}
function uncompileStr(Z) {
  Z = unescape(Z);
  var t = String.fromCharCode(Z.charCodeAt(0) - Z.length);
  for (var r = 1; r < Z.length; r++) {
    t += String.fromCharCode(Z.charCodeAt(r) - t.charCodeAt(r - 1));
  }
  return t;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(Z) {
  return new Promise((t, r) => {
    const p = "https://v1.hitokoto.cn/?c=e",
      g = {
        accept: "application/json"
      };
    const P = {
      url: p,
      headers: g
    };
    $.get(P, async (h, Y, F) => {
      let b = JSON.parse(F),
        C = b.hitokoto;
      contents[Z] = C + " " + C;
      t();
    });
  });
}
function getTime_8() {
  return new Promise((D, t) => {
    const c = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      p = {
        url: c
      };
    $.get(p, async (P, l, h) => {
      D(h);
    });
  });
}
function message() {
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(Z) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, Z);
      } else {
        $.msg($.name, "", Z);
      }
    } else {
      $.log(Z);
    }
  }
}
async function wxPush(Z, D, t) {
  return new Promise((c, p) => {
    const P = "https://wxpusher.zjiecode.com/api/send/message",
      l = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: D,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [t],
        verifyPay: false
      };
    const Y = {
      "Content-Type": "application/json"
    };
    const F = {
      url: P,
      headers: Y,
      body: JSON.stringify(l)
    };
    $.post(F, async (G, v, b) => {
      c();
    });
  });
}
function Env(Z, D) {
  class c {
    constructor(p) {
      this.env = p;
    }
    send(p, g = "GET") {
      p = "string" == typeof p ? {
        url: p
      } : p;
      let h = this.get;
      "POST" === g && (h = this.post);
      return new Promise((Y, F) => {
        h.call(this, p, (b, C, x) => {
          b ? F(b) : Y(C);
        });
      });
    }
    get(p) {
      return this.send.call(this.env, p);
    }
    post(p) {
      return this.send.call(this.env, p, "POST");
    }
  }
  return new class {
    constructor(p, g) {
      const l = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const h = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = l;
      this.logLevelPrefixs = h;
      this.logLevel = "info";
      this.name = p;
      this.http = new c(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, g);
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
    toObj(p, g = null) {
      try {
        return JSON.parse(p);
      } catch {
        return g;
      }
    }
    toStr(p, g = null, ...P) {
      try {
        return JSON.stringify(p, ...P);
      } catch {
        return g;
      }
    }
    getjson(p, g) {
      let P = g;
      if (this.getdata(p)) {
        try {
          P = JSON.parse(this.getdata(p));
        } catch {}
      }
      return P;
    }
    setjson(p, g) {
      try {
        return this.setdata(JSON.stringify(p), g);
      } catch {
        return !1;
      }
    }
    getScript(p) {
      return new Promise(P => {
        const l = {
          url: p
        };
        this.get(l, (h, Y, F) => P(F));
      });
    }
    runScript(p, g) {
      return new Promise(h => {
        let F = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        F = F ? F.replace(/\n/g, "").trim() : F;
        let G = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        G = G ? 1 * G : 20;
        G = g && g.timeout ? g.timeout : G;
        const v = {
          script_text: p,
          mock_type: "cron",
          timeout: G
        };
        const [b, C] = F.split("@"),
          x = {
            url: "http://" + C + "/v1/scripting/evaluate",
            body: v,
            headers: {
              "X-Key": b,
              Accept: "*/*"
            },
            timeout: G
          };
        this.post(x, (K, z, j) => h(j));
      }).catch(h => this.logErr(h));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const l = this.path.resolve(this.dataFile),
          h = this.path.resolve(process.cwd(), this.dataFile),
          Y = this.fs.existsSync(l),
          F = !Y && this.fs.existsSync(h);
        if (!Y && !F) {
          return {};
        }
        {
          const v = Y ? l : h;
          try {
            return JSON.parse(this.fs.readFileSync(v));
          } catch (C) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const P = this.path.resolve(this.dataFile),
          l = this.path.resolve(process.cwd(), this.dataFile),
          h = this.fs.existsSync(P),
          Y = !h && this.fs.existsSync(l),
          F = JSON.stringify(this.data);
        h ? this.fs.writeFileSync(P, F) : Y ? this.fs.writeFileSync(l, F) : this.fs.writeFileSync(P, F);
      }
    }
    lodash_get(p, g, P) {
      const Y = g.replace(/\[(\d+)\]/g, ".$1").split(".");
      let F = p;
      for (const G of Y) if (F = Object(F)[G], void 0 === F) {
        return P;
      }
      return F;
    }
    lodash_set(p, g, P) {
      Object(p) !== p || (Array.isArray(g) || (g = g.toString().match(/[^.[\]]+/g) || []), g.slice(0, -1).reduce((h, Y, F) => Object(h[Y]) === h[Y] ? h[Y] : h[Y] = Math.abs(g[F + 1]) >> 0 == +g[F + 1] ? [] : {}, p)[g[g.length - 1]] = P);
      return p;
    }
    getdata(p) {
      let g = this.getval(p);
      if (/^@/.test(p)) {
        const [, P, l] = /^@(.*?)\.(.*?)$/.exec(p),
          h = P ? this.getval(P) : "";
        if (h) {
          try {
            const Y = JSON.parse(h);
            g = Y ? this.lodash_get(Y, l, "") : g;
          } catch (G) {
            g = "";
          }
        }
      }
      return g;
    }
    setdata(p, g) {
      let h = !1;
      if (/^@/.test(g)) {
        const [, Y, F] = /^@(.*?)\.(.*?)$/.exec(g),
          G = this.getval(Y),
          v = Y ? "null" === G ? null : G || "{}" : "{}";
        try {
          const C = JSON.parse(v);
          this.lodash_set(C, F, p);
          h = this.setval(JSON.stringify(C), Y);
        } catch (x) {
          const z = {};
          this.lodash_set(z, F, p);
          h = this.setval(JSON.stringify(z), Y);
        }
      } else {
        h = this.setval(p, g);
      }
      return h;
    }
    getval(p) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(p);
        case "Quantumult X":
          return $prefs.valueForKey(p);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[p];
        default:
          return this.data && this.data[p] || null;
      }
    }
    setval(p, g) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(p, g);
        case "Quantumult X":
          return $prefs.setValueForKey(p, g);
        case "Node.js":
          this.data = this.loaddata();
          this.data[g] = p;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[g] || null;
      }
    }
    initGotEnv(p) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      p && (p.headers = p.headers ? p.headers : {}, p && (p.headers = p.headers ? p.headers : {}, void 0 === p.headers.cookie && void 0 === p.headers.Cookie && void 0 === p.cookieJar && (p.cookieJar = this.ckjar)));
    }
    get(p, g = () => {}) {
      const l = {
        redirection: !1
      };
      switch (p.headers && (delete p.headers["Content-Type"], delete p.headers["Content-Length"], delete p.headers["content-type"], delete p.headers["content-length"]), p.params && (p.url += "?" + this.queryStr(p.params)), void 0 === p.followRedirect || p.followRedirect || ((this.isSurge() || this.isLoon()) && (p["auto-redirect"] = !1), this.isQuanX() && (p.opts ? p.opts.redirection = !1 : p.opts = l)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const h = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (p.headers = p.headers || {}, Object.assign(p.headers, h));
          $httpClient.get(p, (G, v, b) => {
            !G && v && (v.body = b, v.statusCode = v.status ? v.status : v.statusCode, v.status = v.statusCode);
            g(G, v, b);
          });
          break;
        case "Quantumult X":
          const Y = {};
          Y.hints = !1;
          this.isNeedRewrite && (p.opts = p.opts || {}, Object.assign(p.opts, Y));
          $task.fetch(p).then(G => {
            const {
                statusCode: v,
                statusCode: b,
                headers: C,
                body: x,
                bodyBytes: K
              } = G,
              z = {
                status: v,
                statusCode: b,
                headers: C,
                body: x,
                bodyBytes: K
              };
            g(null, z, x, K);
          }, G => g(G && G.error || "UndefinedError"));
          break;
        case "Node.js":
          let F = require("iconv-lite");
          this.initGotEnv(p);
          this.got(p).on("redirect", (G, v) => {
            try {
              if (G.headers["set-cookie"]) {
                const K = G.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                K && this.ckjar.setCookieSync(K, null);
                v.cookieJar = this.ckjar;
              }
            } catch (z) {
              this.logErr(z);
            }
          }).then(G => {
            const {
                statusCode: b,
                statusCode: C,
                headers: x,
                rawBody: K
              } = G,
              z = F.decode(K, this.encoding),
              j = {
                status: b,
                statusCode: C,
                headers: x,
                rawBody: K,
                body: z
              };
            g(null, j, z);
          }, G => {
            const {
              message: v,
              response: b
            } = G;
            g(v, b, b && F.decode(b.rawBody, this.encoding));
          });
          break;
      }
    }
    post(p, g = () => {}) {
      const l = p.method ? p.method.toLocaleLowerCase() : "post",
        h = {
          redirection: !1
        };
      switch (p.body && p.headers && !p.headers["Content-Type"] && !p.headers["content-type"] && (p.headers["content-type"] = "application/x-www-form-urlencoded"), p.headers && (delete p.headers["Content-Length"], delete p.headers["content-length"]), void 0 === p.followRedirect || p.followRedirect || ((this.isSurge() || this.isLoon()) && (p["auto-redirect"] = !1), this.isQuanX() && (p.opts ? p.opts.redirection = !1 : p.opts = h)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const Y = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (p.headers = p.headers || {}, Object.assign(p.headers, Y));
          $httpClient[l](p, (C, x, K) => {
            !C && x && (x.body = K, x.statusCode = x.status ? x.status : x.statusCode, x.status = x.statusCode);
            g(C, x, K);
          });
          break;
        case "Quantumult X":
          const F = {
            hints: !1
          };
          p.method = l;
          this.isNeedRewrite && (p.opts = p.opts || {}, Object.assign(p.opts, F));
          $task.fetch(p).then(C => {
            const {
                statusCode: x,
                statusCode: K,
                headers: z,
                body: j,
                bodyBytes: w
              } = C,
              R = {
                status: x,
                statusCode: K,
                headers: z,
                body: j,
                bodyBytes: w
              };
            g(null, R, j, w);
          }, C => g(C && C.error || "UndefinedError"));
          break;
        case "Node.js":
          let G = require("iconv-lite");
          this.initGotEnv(p);
          const {
            url: v,
            ...b
          } = p;
          this.got[l](v, b).then(C => {
            const {
                statusCode: K,
                statusCode: z,
                headers: j,
                rawBody: w
              } = C,
              R = G.decode(w, this.encoding),
              S = {
                status: K,
                statusCode: z,
                headers: j,
                rawBody: w,
                body: R
              };
            g(null, S, R);
          }, C => {
            const {
              message: j,
              response: w
            } = C;
            g(j, w, w && G.decode(w.rawBody, this.encoding));
          });
          break;
      }
    }
    time(p, g = null) {
      const P = g ? new Date(g) : new Date();
      let l = {
        "M+": P.getMonth() + 1,
        "d+": P.getDate(),
        "H+": P.getHours(),
        "m+": P.getMinutes(),
        "s+": P.getSeconds(),
        "q+": Math.floor((P.getMonth() + 3) / 3),
        S: P.getMilliseconds()
      };
      /(y+)/.test(p) && (p = p.replace(RegExp.$1, (P.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let h in l) new RegExp("(" + h + ")").test(p) && (p = p.replace(RegExp.$1, 1 == RegExp.$1.length ? l[h] : ("00" + l[h]).substr(("" + l[h]).length)));
      return p;
    }
    queryStr(p) {
      let P = "";
      for (const l in p) {
        let Y = p[l];
        null != Y && "" !== Y && ("object" == typeof Y && (Y = JSON.stringify(Y)), P += l + "=" + Y + "&");
      }
      P = P.substring(0, P.length - 1);
      return P;
    }
    msg(p = Z, g = "", P = "", l = {}) {
      const Y = F => {
        const {
          $open: b,
          $copy: C,
          $media: x,
          $mediaMime: K
        } = F;
        switch (typeof F) {
          case void 0:
            return F;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const z = {
                  url: F
                };
                return z;
              case "Loon":
              case "Shadowrocket":
                return F;
              case "Quantumult X":
                const j = {
                  "open-url": F
                };
                return j;
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
                  const w = {};
                  let R = F.openUrl || F.url || F["open-url"] || b;
                  R && Object.assign(w, {
                    action: "open-url",
                    url: R
                  });
                  let S = F["update-pasteboard"] || F.updatePasteboard || C;
                  if (S && Object.assign(w, {
                    action: "clipboard",
                    text: S
                  }), x) {
                    let f, V, Q;
                    if (x.startsWith("http")) {
                      f = x;
                    } else {
                      if (x.startsWith("data:")) {
                        const [W] = x.split(";"),
                          [, L] = x.split(",");
                        V = L;
                        Q = W.replace("data:", "");
                      } else {
                        V = x;
                        Q = (J => {
                          const d = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var O in d) if (0 === J.indexOf(O)) {
                            return d[O];
                          }
                          return null;
                        })(x);
                      }
                    }
                    Object.assign(w, {
                      "media-url": f,
                      "media-base64": V,
                      "media-base64-mime": K ?? Q
                    });
                  }
                  const H = {
                    "auto-dismiss": F["auto-dismiss"],
                    sound: F.sound
                  };
                  Object.assign(w, H);
                  return w;
                }
              case "Loon":
                {
                  const O = {};
                  let d = F.openUrl || F.url || F["open-url"] || b;
                  d && Object.assign(O, {
                    openUrl: d
                  });
                  let m = F.mediaUrl || F["media-url"];
                  x?.["startsWith"]("http") && (m = x);
                  m && Object.assign(O, {
                    mediaUrl: m
                  });
                  console.log(JSON.stringify(O));
                  return O;
                }
              case "Quantumult X":
                {
                  const k = {};
                  let A = F["open-url"] || F.url || F.openUrl || b;
                  A && Object.assign(k, {
                    "open-url": A
                  });
                  let N = F["media-url"] || F.mediaUrl;
                  x?.["startsWith"]("http") && (N = x);
                  N && Object.assign(k, {
                    "media-url": N
                  });
                  let I = F["update-pasteboard"] || F.updatePasteboard || C;
                  I && Object.assign(k, {
                    "update-pasteboard": I
                  });
                  console.log(JSON.stringify(k));
                  return k;
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
            $notification.post(p, g, P, Y(l));
            break;
          case "Quantumult X":
            $notify(p, g, P, Y(l));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let F = ["", "==============📣系统通知📣=============="];
        F.push(p);
        g && F.push(g);
        P && F.push(P);
        console.log(F.join("\n"));
        this.logs = this.logs.concat(F);
      }
    }
    debug(...p) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (p.length > 0 && (this.logs = [...this.logs, ...p]), console.log("" + this.logLevelPrefixs.debug + p.map(g => g ?? String(g)).join(this.logSeparator)));
    }
    info(...p) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (p.length > 0 && (this.logs = [...this.logs, ...p]), console.log("" + this.logLevelPrefixs.info + p.map(g => g ?? String(g)).join(this.logSeparator)));
    }
    warn(...p) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (p.length > 0 && (this.logs = [...this.logs, ...p]), console.log("" + this.logLevelPrefixs.warn + p.map(P => P ?? String(P)).join(this.logSeparator)));
    }
    error(...p) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (p.length > 0 && (this.logs = [...this.logs, ...p]), console.log("" + this.logLevelPrefixs.error + p.map(P => P ?? String(P)).join(this.logSeparator)));
    }
    log(...p) {
      p.length > 0 && (this.logs = [...this.logs, ...p]);
      console.log(p.map(g => g ?? String(g)).join(this.logSeparator));
    }
    logErr(p, g) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", g, p);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", g, void 0 !== p.message ? p.message : p, p.stack);
          break;
      }
    }
    wait(p) {
      return new Promise(l => setTimeout(l, p));
    }
    done(p = {}) {
      const g = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + g + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(p);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(Z, D);
}