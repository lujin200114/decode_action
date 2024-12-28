//Sat Dec 28 2024 14:48:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("趣动"),
  version = "V1.0.3",
  appName = "qdngapp";
let qdngapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", u => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("qdngactivecode") || 0,
  qdnguserck = $.getval("qdnguserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1",
  helpUtils = undefined,
  CryptoJS = undefined,
  saveFile = false,
  qdng_ck_file = "qdng_cookies.json";
var hour = "",
  minute = "";
let sendlogs = "",
  qdnglogs = [],
  isNeedAds = [],
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
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
  invicode = "",
  numbers = 3,
  vipDate = "";
$.isNode() ? (process.env.QDNGAPP ? qdngapp = JSON.parse(process.env.QDNGAPP) : qdngapp = COOKIES.QDNG, userId = process.env.TGUSERID, activeCode = process.env.QDNGACTIVECODE, process.env.APIHOST && (apiHost = process.env.APIHOST), process.env.APIHOSTS && (apiHost = process.env.APIHOSTS), process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE)), hour = new Date(new Date().getTime()).getHours(), minute = new Date(new Date().getTime()).getMinutes(), $.log("🔔 当前环境: Node, 当前时间：" + hour + "点")) : (hour = new Date().getHours(), minute = new Date().getMinutes(), $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点"));
!(async () => {
  if (typeof $request !== "undefined") {
    await getCk();
  } else {
    if (!qdngapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let u = false;
    const m = apiHost.split("&"),
      V = m.length;
    for (let M = 0; M < V; M++) {
      if ($.isNode()) {
        u = await checkAddress("" + m[M], 2500);
      } else {
        $.isSurge() || $.isLoon() ? u = await httpClientRequest("" + m[M], 2500) : u = await fetchRequest("" + m[M], 2500);
      }
      if (u == true) {
        apiHost = m[M];
        $.log("📢 接口" + (M + 1) + "[" + m[M] + "]服务器接口正常! 🎉");
        break;
      }
      if (M == V - 1 && u == false) {
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
      let x = new Date(vipDate).getTime(),
        D = new Date().getTime();
      if (D > x) {
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
    isCharge == true ? $.log("🔔 此脚本采用付费模式。🔒") : $.log("🔔 此脚本采用免费模式。🔓");
    if (vipDate != "") {
      if (isCharge == true) {
        let h = new Date(vipDate).getTime(),
          I = new Date().getTime();
        if (I > h) {
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
    if (qdngapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (qdngapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + qdngapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + qdngapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (qdngapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    helpUtils = await loadUtils(flushCash);
    CryptoJS = helpUtils.createCryptoJS();
    $.log("📢 一共发现了" + qdngapp.length + "个账号");
    $.isNode() && (!fs.existsSync(qdng_ck_file) ? qdng_cks = {} : qdng_cks = JSON.parse(fs.readFileSync(qdng_ck_file, "utf8")));
    let g = [],
      C = qdngapp.length,
      W = 0;
    $.isNode() && process.env.QDNG_THREAD_COUNT ? W = parseInt(process.env.QDNG_THREAD_COUNT) : W = C;
    let Q = qdngapp.length;
    if (W >= C) {
      W = C;
      Q = 1;
      $.log("📢 你设置的线程数是" + W + "，账号个数是" + C + "，" + Q + "次可全部跑完。");
      for (let H = 0; H < qdngapp.length; H++) {
        g.push(runMultiTasks(H));
        qdnglogs[H] = "";
        isNeedAds[H] = true;
        $.isNode() ? (channels_status[H] = 0, await init_ws(H)) : channels_status[H] = 1;
      }
      await Promise.allSettled(g).then(e => {
        $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(qdng_ck_file, JSON.stringify(qdng_cks, null, 2)));
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let B = 0; B < qdngapp.length; B++) {
          $.log(qdnglogs[B]);
          sendlogs += qdnglogs[B];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      Q = Math.ceil(C / W);
      $.log("📢 你设置的线程数是" + W + "，账号个数是" + C + "，计算后分" + Q + "次执行，一次可执行" + W + "个账号，最后一次如果不够" + W + "个账号，剩多少个账号就跑几个账号。");
      for (let e = 0; e < Q; e++) {
        for (let B = e * W; B < W * (e + 1) && B < C; B++) {
          g.push(runMultiTasks(B));
          qdnglogs[B] = "";
          channels_status[B] = 1;
          await init_ws(B);
        }
        await Promise.allSettled(g).then(F => {
          g = [];
          if (e == Q - 1) {
            $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(qdng_ck_file, JSON.stringify(qdng_cks, null, 2)));
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let s = 0; s < qdngapp.length; s++) {
              $.log(qdnglogs[s]);
              sendlogs += qdnglogs[s];
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
  return new Promise((m, V) => {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 开始执行 working......");
    runSubTask(m, u);
  });
}
async function init_ws(u) {
  $.isNode() && (reconectCounts[u] > 0 && $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 尝试重新连接服务器>>>>>>"), wss[u] = new WebSocket(apiHost.replace("http", "ws") + "/ws"), wss[u].on("open", function m() {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 签名通道已连接");
  }), wss[u].on("close", function V() {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
  }), wss[u].on("error", function g() {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: 签名通道已关闭，原因是出现错误");
    channels_status[u] = 1;
    reconectCounts[u]++;
    reconectCounts[u] <= 3 && init_ws(u);
  }));
}
async function runSubTask(u, V) {
  $.isNode() && (await $.wait(3000, 5000));
  let g = await commonRequest(V, "/login/loginAuto", "post", "自动登录", "refresh_key=" + qdngapp[V].token);
  if (g) {
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户名=> " + g.data.username);
    qdnglogs[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户名=> " + g.data.username + "\n";
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 手机号=> " + helpUtils.phone_num(g.data.phone));
    qdnglogs[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 手机号=> " + helpUtils.phone_num(g.data.phone) + "\n";
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 金币=> " + g.data.gold_count);
    qdnglogs[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 金币=> " + g.data.gold_count + "\n";
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 现金余额=> " + g.data.gold_money + "元");
    qdnglogs[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 现金余额=> " + g.data.gold_money + "元\n";
  } else {
    u();
    return;
  }
  g && g.data.gold_money >= 2 && hour == 8 && (await commonRequest(V, "/balance/goldWithdrawal", "post", "提现", "num=20000&pay_type=1"));
  let C = helpUtils.createDayjs(),
    W = C().format("YYYYMM"),
    Q = await drawCommonRequest(V, "/user/get_sign_info?refresh_key=" + qdngapp[V].token + "&time=" + W + "&sign_type=2", "get", "每日睡觉信息", "");
  if (Q && Q.data.days_my_is_sign == 2 && hour >= 21 && hour < 23) {
    let s = await drawCommonRequest(V, "/user/user_sign?refresh_key=" + qdngapp[V].token + "&sign_type=2", "post", "早睡打卡", "");
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 早睡打卡任务=> 完成，获得" + s.data.integral + "积分");
    await $.wait(helpUtils.randomNum(5000, 10000));
    let L = await drawCommonRequest(V, "/user/userSignAdv", "post", "早睡打卡翻倍", "token=" + qdngapp[V].token + "&sign_type=2");
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 早睡打卡翻倍任务=> 完成，获得" + L.data.gold + "个金币");
  }
  let M = await drawCommonRequest(V, "/user/get_sign_info?refresh_key=" + qdngapp[V].token + "&time=" + W + "&sign_type=1", "get", "每日早起信息", "");
  if (M && M.data.days_my_is_sign == 2 && hour >= 5 && hour <= 8) {
    let l = await drawCommonRequest(V, "/user/user_sign?refresh_key=" + qdngapp[V].token + "&sign_type=1", "post", "早起打卡", "");
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 早起打卡任务=> 完成，获得" + l.data.integral + "积分");
    await $.wait(helpUtils.randomNum(5000, 10000));
    let K = await drawCommonRequest(V, "/user/userSignAdv", "post", "早起打卡翻倍", "token=" + qdngapp[V].token + "&sign_type=1");
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 早起打卡翻倍任务=> 完成，获得" + K.data.gold + "个金币");
  }
  let x = await drawCommonRequest(V, "/dayask/get_info", "post", "每日答题题目信息", "token=" + qdngapp[V].token);
  while (x.data.power > 0) {
    let Y = x.data.question_option,
      w = Y.find(J => J.answer == 1);
    if (w && x.data.power > 0) {
      let J = await drawCommonRequest(V, "/dayask/user_ask", "post", "提交答案", "ask_id=" + w.ask_id + "&answer[0]=" + w.id + "&is_again=0&token=" + qdngapp[V].token);
      if (J.data.is_true == 1) {
        $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 回答问题=> ✅正确，获得" + J.data.add_integral + "个金币");
        await $.wait(helpUtils.randomNum(5000, 10000));
        let U = await drawCommonRequest(V, "/dayask/user_double", "post", "回答正确看广告得双倍奖励", "double=2&token=" + qdngapp[V].token + "&id=" + J.data.id);
        $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 回答问题=> 看广告得双倍奖励，获得" + U.data.add_integral + "个金币");
        await $.wait(helpUtils.randomNum(5000, 10000));
        break;
      }
    }
  }
  let D = x.data.big_reward;
  for (let t = 0; t < D.length; t++) {
    let E = D[t];
    if (E.can_receive == 1 && E.is_end == 0) {
      let N = await drawCommonRequest(V, "/dayask/user_receive_big_reward", "post", "累计答题奖励", "id=" + E.id + "&token=" + qdngapp[V].token);
      $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 累计答对" + E.num + "题=> 获得" + N.data.add_integral + "个金币");
      await $.wait(helpUtils.randomNum(5000, 10000));
    }
  }
  let h = await drawCommonRequest(V, "/wheel/get_user_status?token=" + qdngapp[V].token, "get", "获取抽奖信息", "");
  if (h && h.data.user_integral_remains > 0) {
    if (h.data.user_daily_draw_remains > 0) {
      for (let p = 0; p < h.data.user_daily_draw_remains; p++) {
        await $.wait(helpUtils.randomNum(5000, 10000));
        let R = await drawCommonRequest(V, "/wheel/make_draw", "post", "获取抽奖结果", "token=" + qdngapp[V].token);
        $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 抽奖类型=> " + R.data.award_type);
        R.data.award_type == "gold" && $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 抽奖=> 完成，获得" + R.data.award_amount + "个金币");
        if (isNeedAds[V] && R.data.award_type != "integral") {
          await $.wait(helpUtils.randomNum(10000, 15000));
          let b = await drawCommonRequest(V, "/wheel/view_ad_complete", "post", "获取抽奖结果", "token=" + qdngapp[V].token + "&award_type=" + R.data.award_type + "&award_amount=" + R.data.award_amount + "&multi=" + R.data.award_multi_num);
          b ? $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 抽奖看广告得金币=> 完成，获得" + b.data.num + "个金币") : isNeedAds[V] = false;
          await $.wait(helpUtils.randomNum(5000, 10000));
        }
      }
    }
    if (h.data.user_daily_view_vad_remains > 0) {
      for (let T = 0; T < h.data.user_daily_view_vad_remains; T++) {
        await drawCommonRequest(V, "/wheel/view_ad_complete", "post", "获取抽奖信息", "token=" + qdngapp[V].token + "&award_type=draw&award_amount=3&multi=1");
        await $.wait(helpUtils.randomNum(10000, 15000));
      }
    }
    if (isNeedAds[V] && h.data.user_brs_adt_5_info == 0) {
      let S = await drawCommonRequest(V, "/wheel/view_ad_complete", "post", "累计抽奖奖励", "token=" + qdngapp[V].token + "&award_type=gold&award_amount=0&multi=0&draw_times=5");
      S ? ($.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 累计抽奖5次奖励=> 完成，获得" + S.data.num + "个金币"), await $.wait(helpUtils.randomNum(5000, 10000))) : isNeedAds[V] = false;
    }
    if (isNeedAds[V] && h.data.user_brs_adt_10_info == 0) {
      let Z = await drawCommonRequest(V, "/wheel/view_ad_complete", "post", "累计抽奖奖励", "token=" + qdngapp[V].token + "&award_type=gold&award_amount=0&multi=0&draw_times=10");
      Z ? ($.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 累计抽奖10次奖励=> 完成，获得" + Z.data.num + "个金币"), await $.wait(helpUtils.randomNum(5000, 10000))) : isNeedAds[V] = false;
    }
    if (isNeedAds[V] && h.data.user_brs_adt_20_info == 0) {
      let d = await drawCommonRequest(V, "/wheel/view_ad_complete", "post", "累计抽奖奖励", "token=" + qdngapp[V].token + "&award_type=gold&award_amount=0&multi=0&draw_times=20");
      d ? ($.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 累计抽奖20次奖励=> 完成，获得" + d.data.num + "个金币"), await $.wait(helpUtils.randomNum(5000, 10000))) : isNeedAds[V] = false;
    }
  }
  let I = await commonRequest(V, "/qudongTask/getTimerBoxTask", "post", "定时宝箱信息", "");
  if (I) {
    let X = I.data.task_list[0];
    if (X.count_down_seconds == 0) {
      await $.wait(helpUtils.randomNum(10000, 15000));
      let c = await commonRequest(V, "/qudongTask/pickTaskReward", "post", "开宝箱得金币", "data=&id=" + X.id + "&task_id=" + X.task_id);
      $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + c.data.task_name + "=> 完成，获得" + c.data.gold + "个金币");
      if (isNeedAds[V]) {
        await $.wait(helpUtils.randomNum(10000, 15000));
        let A = await commonRequest(V, "/qudongTask/viewAdComplete", "post", "开宝箱看广告得金币", "award_amount=" + c.data.gold + "&award_type=gold&multi=" + c.data.gold_multi + "&task_id=" + X.task_id);
        A ? $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + c.data.task_name + "翻倍=> 完成，获得" + A.data.gold + "个金币") : isNeedAds[V] = false;
      }
    }
  }
  let H = await commonRequest(V, "/sport/addSportRecord", "post", "运动记录", "time_zone=" + encodeURIComponent("GMT+8") + "&sport_type=0&step_count=0&request_time=" + helpUtils.ts10());
  if (H && H.data.step < 9999) {
    $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 今天还没有上传运动信息，开始上传>>>");
    await $.wait(helpUtils.randomNum(5000, 15000));
    let r = helpUtils.randomNum(10000, 13000);
    H = await commonRequest(V, "/sport/addSportRecord", "post", "运动步数上传", "time_zone=" + encodeURIComponent("GMT+8") + "&sport_type=0&step_count=" + r + "&request_time=" + helpUtils.ts10());
    H && ($.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 每日运动上传=> 成功上传了" + H.data.step + "步 🎉"), qdnglogs[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 每日运动上传=> 成功上传了" + H.data.step + "步 🎉 \n");
  }
  let e = await commonRequest(V, "/gold/get_gold_info", "get", "签到金币任务信息", "");
  if (e && hour < 8) {
    let f = e.data.sign_task_list;
    for (let j in f) {
      let O = f[j];
      if (O.is_receive == 1 && O.special_status == 2) {
        await $.wait(helpUtils.randomNum(15000, 20000));
        let o = await commonRequest(V, "/gold/user_gold_sign", "post", "获取签到金", "id=" + O.id + "&is_adv=" + O.adv_b);
        $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到第" + (parseInt(j) + 1) + "个任务=> 完成，获得" + o.data.num + "个金币");
        O.is_special == 2 && (await $.wait(helpUtils.randomNum(15000, 20000)), o = await commonRequest(V, "/gold/user_gold_sign", "post", "获取签到金", "id=" + O.id + "&is_adv=1"), $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到第" + (parseInt(j) + 1) + "个翻倍任务=> 完成，获得" + o.data.num + "个金币"));
      } else {
        if (O.is_receive == 1 && O.special_status == 1) {
          await $.wait(helpUtils.randomNum(15000, 20000));
          let q = await commonRequest(V, "/gold/user_gold_sign", "post", "获取签到金", "id=" + O.id + "&is_adv=" + O.adv_b);
          $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到第" + (parseInt(j) + 1) + "个大额金币任务=> 完成，获得" + q.data.num + "个金币");
        }
      }
    }
    let z = e.data.task_list;
    if (z) {
      for (let P = 0; P < z.length; P++) {
        let y = z[P];
        if (y.is_receive == 1) {
          let G = await commonRequest(V, "/gold/task_receive", "post", "签到累计" + y.days + "天奖励", "days=" + y.days + "&is_adv=2&num=" + y.reward_num);
          $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 连续签到" + y.days + "天任务=> 完成，获得" + G.data.num + "个金币");
          await $.wait(helpUtils.randomNum(5000, 15000));
          let v = await commonRequest(V, "/gold/task_receive", "post", "签到累计" + y.days + "天翻倍奖励", "days=" + y.days + "&is_adv=1&num=" + y.reward_num);
          $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 连续签到" + y.days + "天翻倍任务=> 完成，获得" + v.data.num + "个金币");
        }
      }
    }
  }
  let B = await commonRequest(V, "/qudongTask/getTodayTaskList", "post", "任务中心列表", ""),
    F = await commonRequest(V, "/qudongTask/getTodaySignList", "post", "每日登录App任务信息", "");
  if (F) {
    let a = F.data.user_sign_list,
      u0 = a.find(u1 => u1.words == "今天");
    if (u0 && u0.pick_status == 0) {
      let u1 = await commonRequest(V, "/qudongTask/pickTaskReward", "post", "每日登录App得金币", "data=&id=" + u0.id + "&task_id=" + u0.task_id);
      await $.wait(helpUtils.randomNum(5000, 15000));
      let u2 = await commonRequest(V, "/qudongTask/viewAdComplete", "post", "每日登录App看广告得双倍金币", "award_amount=" + u1.data.gold + "&award_type=gold&multi=" + u1.data.gold_multi + "&task_id=" + u0.task_id);
      $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 每日登录App看广告得双倍金币任务=> 完成，获得" + u2.data.gold + "个金币");
    }
  }
  if (B) {
    let u3 = B.data.find(uu => uu.type == "video_bonus_tasks"),
      u4 = u3.tasks;
    for (let uu in u4) {
      let um = u4[uu],
        uV = um.task_list[0];
      if (uV.pick_status == 0) {
        await $.wait(helpUtils.randomNum(15000, 30000));
        let ug = await commonRequest(V, "/qudongTask/pickTaskReward", "post", "看广告得金币", "data=&id=" + uV.id + "&task_id=" + uV.task_id);
        $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uV.task_name + "(" + (parseInt(uu) + 1) + "/10)=> 完成，获得" + ug.data.gold + "个金币");
      }
      if (uV.multi_status == 0) {
        await $.wait(helpUtils.randomNum(15000, 30000));
        let uC = await commonRequest(V, "/qudongTask/viewAdComplete", "post", "再看一次广告翻倍得金币", "award_amount=" + uV.bonus + "&award_type=gold&multi=" + uV.multi + "&task_id=" + uV.task_id);
        $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uV.task_name + "(" + (parseInt(uu) + 1) + "/10)_翻倍=> 完成，获得" + uC.data.gold + "个金币");
      }
    }
    let u5 = B.data.find(uW => uW.type == "daily_tasks"),
      u6 = u5.tasks.find(uW => uW.task_tag == "step"),
      u7 = u6.task_list;
    for (let uW in u7) {
      let uQ = u7[uW];
      if (uQ.pick_status == 0) {
        await $.wait(helpUtils.randomNum(1000, 3000));
        let uM = await commonRequest(V, "/qudongTask/pickTaskReward", "post", "完成特定步数得金币", "data=&id=" + uQ.id + "&task_id=" + uQ.task_id);
        uM && $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uQ.task_name + "(" + (parseInt(uW) + 1) + "/10)=> 完成，获得" + uM.data.gold + "个金币");
      }
    }
    let u8 = B.data.find(ux => ux.type == "habit_tasks");
    if (u8) {
      for (let uD = 0; uD < u8.tasks.length; uD++) {
        let uh = u8.tasks[uD];
        if (uh.task_tag != "drink_water") {
          let uI = uh.task_list[0];
          if (uI.finish_status == 1 && uI.pick_status == 0) {
            let uH = await commonRequest(V, "/qudongTask/pickTaskReward", "post", uI.task_name, "data=&id=" + uI.id + "&task_id=" + uI.task_id);
            $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uH.data.task_name + "=> 完成，获得" + uH.data.gold + "个金币");
            if (isNeedAds[V]) {
              await $.wait(helpUtils.randomNum(5000, 15000));
              let ue = await commonRequest(V, "/qudongTask/viewAdComplete", "post", uI.task_name + "看广告得双倍金币", "award_amount=" + uH.data.gold + "&award_type=gold&multi=" + uH.data.gold_multi + "&task_id=" + uI.task_id);
              ue ? $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uI.task_name + "看广告得双倍金币=> 完成，获得" + ue.data.gold + "个金币") : isNeedAds[V] = false;
            }
          }
        }
      }
      let ux = u8.tasks.find(uB => uB.task_tag == "drink_water");
      if (ux && hour > 12) {
        let uB = await commonRequest(V, "/user/water_list", "get", "每日喝水信息", ""),
          un = uB.data.list;
        for (let uF = 0; uF < un.length; uF++) {
          let us = un[uF];
          us.is_receive == 2 && (await $.wait(helpUtils.randomNum(5000, 15000)), await commonRequest(V, "/user/receive_water", "post", "喝水", "id=" + us.key + "&receive_type=1"), $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 每日喝水(" + us.key + "/8)=> 完成，获得" + us.num + "个金币"));
          us.is_adv == 2 && (await $.wait(helpUtils.randomNum(5000, 15000)), await commonRequest(V, "/user/receive_water", "post", "喝水翻倍", "id=" + us.key + "&receive_type=2"), $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 每日喝水(" + us.key + "/8)看广告翻倍=> 完成，获得" + us.adv + "个金币"));
        }
      }
    }
    let u9 = B.data.find(uL => uL.type == "interactive_tasks");
    if (u9) {
      let uL = u9.tasks;
      for (let ul = 0; ul < uL.length; ul++) {
        let ui = uL[ul].task_list[0];
        if (ui.task_tag == "invite_user") {
          for (let uK = 0; uK < 5; uK++) {
            await $.wait(helpUtils.randomNum(10000, 12000));
            let uY = await commonRequest(V, "/qudongTask/pickTaskReward", "post", ui.task_name, "data=&id=" + ui.id + "&task_id=" + ui.task_id);
            $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uY.data.task_name + "(" + (uK + 1) + "/5)=> 完成，获得" + uY.data.gold + "个金币");
            await $.wait(helpUtils.randomNum(15000, 30000));
            if (isNeedAds[V]) {
              let uw = await commonRequest(V, "/qudongTask/viewAdComplete", "post", uY.data.task_name + "看广告得翻倍金币", "award_amount=" + uY.data.gold + "&award_type=gold&multi=" + uY.data.gold_multi + "&task_id=" + ui.task_id);
              uw ? $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uY.data.task_name + "看广告(" + (uK + 1) + "/5)=> 完成，获得" + uw.data.gold + "个金币") : isNeedAds[V] = false;
            }
          }
        }
        if (ui.finish_status == 1 && ui.pick_status == 0) {
          await $.wait(helpUtils.randomNum(10000, 12000));
          let uJ = await commonRequest(V, "/qudongTask/pickTaskReward", "post", ui.task_name, "data=&id=" + ui.id + "&task_id=" + ui.task_id);
          $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uJ.data.task_name + "=> 完成，获得" + uJ.data.gold + "个金币");
          await $.wait(helpUtils.randomNum(15000, 30000));
          if (isNeedAds[V]) {
            let uU = await commonRequest(V, "/qudongTask/viewAdComplete", "post", uJ.data.task_name + "看广告得翻倍金币", "award_amount=" + uJ.data.gold + "&award_type=gold&multi=" + uJ.data.gold_multi + "&task_id=" + ui.task_id);
            uU ? $.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + uJ.data.task_name + "看广告=> 完成，获得" + uU.data.gold + "个金币") : isNeedAds[V] = false;
          }
        }
        ui.task_tag == "view_miniclub_act" && ui.finish_status == 0 && (await drawCommonRequest(V, "/miniclub/activity_info", "post", "浏览同城活动", "token=" + qdngapp[V].token + "&activity_id=34090"), await $.wait(helpUtils.randomNum(3000, 5000)));
        ui.task_tag == "view_miniclub" && ui.finish_status == 0 && (await commonRequest(V, "/miniclub/all_club_list", "post", "浏览同城俱乐部主页", "pages=1&type=1"), await $.wait(helpUtils.randomNum(3000, 5000)));
        ui.task_tag == "browse_award" && ui.finish_status == 0 && (await drawCommonRequest(V, "/qudongTask/finishBrowseTask", "post", "逛街领奖励", "token=" + qdngapp[V].token + "&task_id=" + ui.task_id), await $.wait(helpUtils.randomNum(3000, 5000)));
        if (ui.task_tag == "follow_miniclub" && ui.finish_status == 0) {
          let ut = await commonRequest(V, "/miniclub/all_club_list", "post", "浏览同城俱乐部主页", "pages=1&type=1"),
            uE = ut.data.list;
          for (let uN in uE) {
            let up = uE[uN];
            if (up.is_join == 0) {
              await commonRequest(V, "/miniclub/add_club", "post", "关注俱乐部", "club_id=" + up.id + "&status=1");
              break;
            }
          }
          await $.wait(helpUtils.randomNum(3000, 5000));
        }
      }
    }
  }
  $.isNode() && (await wss[V].close());
  await runComplete(appName, userId);
  u();
}
async function getCk() {
  if ($request.url.match(/\/qudongTask\/getTodayTaskList/)) {
    const u = $request.body,
      m = u.split("app_imei=")[1].split("&app_type")[0],
      V = u.split("token=")[1];
    let g = qdnguserck - 1;
    qdngapp[g] ? (qdngapp[g].deviceId = m, qdngapp[g].token = V) : qdngapp[g] = {
      deviceId: m,
      token: V
    };
    $.setdata(JSON.stringify(qdngapp, null, 2), "qdngapp");
    $.msg($.name, "趣动账号" + (g + 1) + "Token获取成功！🎉");
  }
}
async function commonRequest(u, m, V, g, C) {
  let W = "https://capi.wewillpro.com" + m,
    Q = await encrypt(u, C);
  V == "post" ? await getReqObject(W, Q, u) : (W = W + "?" + Q, await getReqObject(W, "", u));
  await httpRequest(V, requestObjects[u], printCaller());
  let M = httpResult;
  if (M != null && M.code == 200) {
    return M;
  } else {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: " + g + "=> " + M.msg);
    qdnglogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: " + g + "=> " + M.msg + "\n";
  }
}
async function drawCommonRequest(u, m, V, g, C) {
  let W = "https://capi.wewillpro.com" + m;
  await getReqObject(W, C, u);
  await httpRequest(V, requestObjects[u], printCaller());
  let Q = httpResult;
  if (Q != null && Q.code == 200) {
    return Q;
  } else {
    $.log("[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: " + g + "=> " + Q.msg);
    qdnglogs[u] += "[账号" + (u + 1 < 10 ? "0" + (u + 1) : u + 1) + "]: " + g + "=> " + Q.msg + "\n";
  }
}
function getScriptAuth(u, m, V) {
  return new Promise((g, C) => {
    const W = apiHost + "/script/permissions/lastest",
      Q = {
        appName: u,
        userId: m,
        activityCode: V,
        version: version
      },
      M = {
        url: W,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(Q)
      };
    $.post(M, async (x, D, h) => {
      if (h && h != null && h.replace(/\"/g, "").length > 50) {
        const I = h.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(I).toString(CryptoJS.enc.Utf8));
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
        } catch (H) {
          $.log(H);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      g();
    });
  });
}
function runComplete(u, m) {
  return new Promise((V, g) => {
    const C = apiHost + "/script/run/add",
      W = {
        appName: u,
        userId: m,
        activityCode: activeCode,
        version: version
      },
      Q = {
        url: C,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(W)
      };
    $.post(Q, async (M, x, D) => {
      V();
    });
  });
}
function loadToken(u) {
  let m = qdngapp[u].mobile;
  qdng_item = qdng_cks["" + m];
  return qdng_item ? (qdngapp[u].refreshToken = qdng_item.refreshToken, qdngapp[u].accessToken = qdng_item.accessToken, true) : false;
}
function saveToken(u) {
  qdng_cks[qdngapp[u].mobile] = {
    refreshToken: qdngapp[u].refreshToken,
    accessToken: qdngapp[u].accessToken,
    ts: ts13()
  };
}
async function loadUtils(u) {
  let m = $.getdata("Utils_Code") || "";
  if (!u && m && Object.keys(m).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(m);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async V => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(g => {
      $.setdata(g, "Utils_Code");
      eval(g);
      $.log("📢 JS-Utils加载成功");
      V(creatUtils());
    });
  });
}
function checkAddress(u, m) {
  return new Promise((V, g) => {
    const C = setTimeout(() => {
        V(false);
      }, m),
      W = http.get(u, Q => {
        clearTimeout(C);
        Q.statusCode === 404 ? V(true) : V(false);
      });
    W.on("error", Q => {
      clearTimeout(C);
      V(false);
    });
    W.on("timeout", () => {
      W.abort();
      g(new Error("请求超时"));
    });
  });
}
async function fetchRequest(u, m = 3000) {
  return new Promise((V, g) => {
    const C = {
      url: u + "/docs"
    };
    setTimeout(() => {
      V(false);
    }, m);
    $.get(C, async (W, Q, M) => {
      Q.status == 401 ? V(true) : V(false);
    });
  });
}
async function httpClientRequest(u, m = 3000) {
  return new Promise((V, g) => {
    const C = {
      url: u + "/"
    };
    setTimeout(() => {
      V(false);
    }, m);
    $httpClient.get(C, async (W, Q, M) => {
      M == "{\"detail\":\"Not Found\"}" ? V(true) : V(false);
    });
  });
}
async function redisGet(u, m, V) {
  return new Promise((g, C) => {
    const W = apiHost + "/redis/hash/get/" + m + "/" + V,
      Q = {
        url: W,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      };
    $.get(Q, async (M, x, D) => {
      const h = D.replace(/\"/g, "");
      answerTexts[u] = h;
      g();
    });
  });
}
function redisSet(u, m, V) {
  return new Promise((g, C) => {
    const W = apiHost + "/redis/hash/set",
      Q = {
        key: u,
        hashKey: m,
        hashValue: V
      },
      M = {
        url: W,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(Q)
      };
    $.post(M, async (x, D, h) => {
      g();
    });
  });
}
function redisPop(u) {
  return new Promise((m, V) => {
    const g = apiHost + "/redis/set/pop/" + u,
      C = {
        url: g,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      };
    $.get(C, async (W, Q, M) => {
      const x = M.replace(/\"/g, "");
      popCookie = x;
      m();
    });
  });
}
async function getReqObject(u, m, V) {
  let g = "Will/3.7.3 (com.rdhy.will; build:104; iOS 16.6.1) Alamofire/5.8.0";
  qdngapp[V].ua && qdngapp[V].ua != "" && (g = qdngapp[V].ua);
  let C = getHostname(u),
    W = {
      url: u,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "User-Agent": g,
        brand: "Apple",
        appVersion: "3.7.3",
        deviceId: qdngapp[V].deviceId,
        Host: C
      },
      body: m
    };
  m;
  requestObjects[V] = W;
  return W;
}
function getReqObject_(u, m, V) {
  let g = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  qdngapp[V].ua && qdngapp[V].ua != "" && (g = qdngapp[V].ua);
  let C = getHostname(u),
    W = {
      url: u,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": g,
        Authorization: qdngapp[V].auth,
        Host: C
      },
      body: m
    };
  m;
  requestObjects[V] = W;
  return W;
}
async function httpRequest(u, m, V) {
  httpResult = null;
  return new Promise(g => {
    $[u](m, async (C, W, Q) => {
      try {
        if (C) {
          $.log(V + ": " + u + "请求失败");
          $.log(JSON.stringify(C));
          $.logErr(C);
        } else {
          if (safeGet(Q)) {
            httpResult = JSON.parse(Q);
            debug == 1 && $.log(httpResult);
          } else {
            const M = new URL(m.url);
            $.log(M.pathname + "发起" + u + "请求时，出现错误，请处理");
          }
        }
      } catch (x) {
        $.logErr(x, W);
      } finally {
        g(httpResult);
      }
    });
  });
}
async function selectChannel(u, m) {
  channels_status[u] == 0 ? await getSign_(u, m) : await getSign(u, m);
}
function getSign_(u, m) {
  return new Promise((V, g) => {
    function C(W) {
      let Q = W.toString("utf8");
      requestSigns[u] = Q;
      wss[u].removeListener("message", C);
      V(Q);
    }
    wss[u].on("message", C);
    wss[u].readyState === 1 ? wss[u].send(JSON.stringify({
      method: appName,
      params: {
        content: m,
        appName: appName,
        uuid: userId
      }
    }), W => {
      W && g(W);
    }) : (V(getSign(u, m)), wss[u].removeListener("message", C));
  });
}
function getSign(u, m) {
  return new Promise((V, g) => {
    const C = apiHost + "/sign/qdng",
      W = {
        content: m,
        appName: appName,
        uuid: userId
      },
      Q = {
        url: C,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(W)
      };
    $.post(Q, async (M, x, D) => {
      const h = D.replace(/\"/g, "");
      requestSigns[u] = h;
      V();
    });
  });
}
function sortUrlParams(u, m, V) {
  const g = url2obj(u);
  m.forEach(Q => {
    delete g[Q];
  });
  Object.assign(g, V);
  const C = Object.keys(g).sort(),
    W = C.map(Q => Q + "=" + g[Q]).join("&");
  return W;
}
function url2obj(u) {
  if (u == "") {
    return {};
  }
  u = u.replace(/\"/g, "");
  var m,
    V = {},
    g = u.split("&");
  for (var C = 0; C < g.length; C++) {
    m = g[C].split("=");
    V[m[0]] = m[1];
  }
  return V;
}
function convertStringToJson(u) {
  const m = u.replace(/[{} ]/g, ""),
    V = m.split(","),
    g = {};
  V.forEach(C => {
    const [W, Q] = C.split("=");
    g[W] = Q;
  });
  return g;
}
function getHostname(u) {
  let m = u.substr(u.indexOf("//") + 2),
    V = m.substr(0, m.indexOf("/")),
    g = "",
    C = V.indexOf(":");
  C > 0 ? g = V.substr(0, C) : g = V;
  return g;
}
function calculateTimeDifference(u, m) {
  var V = new Date(u),
    g = new Date(m),
    C = g - V,
    W = Math.floor(C / 1000);
  return W;
}
function cutString(u, m) {
  if (u.length * 2 <= m) {
    return u;
  }
  var V = 0,
    g = "";
  for (var C = 0; C < u.length; C++) {
    g = g + u.charAt(C);
    if (u.charCodeAt(C) > 128) {
      V = V + 2;
      if (V >= m) {
        return g.substring(0, g.length - 1) + "...";
      }
    } else {
      V = V + 1;
      if (V >= m) {
        return g.substring(0, g.length - 2) + "...";
      }
    }
  }
  return g;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(u) {
  try {
    if (typeof JSON.parse(u) == "object") {
      return true;
    }
  } catch (m) {
    console.log(m);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(u) {
  var m = Object.keys(u).map(function (V) {
    return encodeURIComponent(V) + "=" + encodeURIComponent(u[V]);
  }).join("&");
  return m;
}
function compileStr(u) {
  var m = String.fromCharCode(u.charCodeAt(0) + u.length);
  for (var V = 1; V < u.length; V++) {
    m += String.fromCharCode(u.charCodeAt(V) + u.charCodeAt(V - 1));
  }
  return escape(m);
}
function uncompileStr(u) {
  u = unescape(u);
  var m = String.fromCharCode(u.charCodeAt(0) - u.length);
  for (var V = 1; V < u.length; V++) {
    m += String.fromCharCode(u.charCodeAt(V) - m.charCodeAt(V - 1));
  }
  return m;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(u) {
  return new Promise((m, V) => {
    const g = "https://v1.hitokoto.cn/?c=e",
      C = {
        url: g,
        headers: {
          accept: "application/json"
        }
      };
    $.get(C, async (W, Q, M) => {
      let x = JSON.parse(M),
        D = x.hitokoto;
      contents[u] = D + " " + D;
      m();
    });
  });
}
function getTime_8() {
  return new Promise((u, m) => {
    const V = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      g = {
        url: V
      };
    $.get(g, async (C, W, Q) => {
      u(Q);
    });
  });
}
function message() {
  tz == 1 && $.msg($.name, "", $.message);
}
async function sendMsg(u) {
  (hour == 9 || hour == 12 || hour == 18) && (tz == 1 ? $.isNode() ? await notify.sendNotify($.name, u) : $.msg($.name, "", u) : $.log(u));
}
async function wxPush(u, m, V) {
  return new Promise((g, C) => {
    const W = "https://wxpusher.zjiecode.com/api/send/message",
      Q = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: m,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [V],
        verifyPay: false
      },
      M = {
        url: W,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Q)
      };
    $.post(M, async (x, D, h) => {
      g();
    });
  });
}
async function encrypt(u, m) {
  let V = sortUrlParams(m, [], {
      app_channel: "Apple_iPhone10,2_16.6.1",
      app_imei: qdngapp[u].deviceId,
      app_type: "2",
      app_version: "3.7.3",
      appoint_source: "1",
      time_str: helpUtils.ts10(),
      token: qdngapp[u].token
    }),
    g = url2obj(V);
  await selectChannel(u, JSON.stringify(g));
  g.sign = requestSigns[u];
  let C = Object.keys(g).map(W => encodeURIComponent(W) + "=" + encodeURIComponent(g[W])).join("&");
  return sortUrlParams(C, [], {});
}
function Env(u, m) {
  class V {
    constructor(g) {
      this.env = g;
    }
    send(g, C = "GET") {
      g = "string" == typeof g ? {
        url: g
      } : g;
      let W = this.get;
      "POST" === C && (W = this.post);
      return new Promise((Q, M) => {
        W.call(this, g, (x, D, h) => {
          x ? M(x) : Q(D);
        });
      });
    }
    get(g) {
      return this.send.call(this.env, g);
    }
    post(g) {
      return this.send.call(this.env, g, "POST");
    }
  }
  return new class {
    constructor(g, C) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = g;
      this.http = new V(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, C);
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
    toObj(g, C = null) {
      try {
        return JSON.parse(g);
      } catch {
        return C;
      }
    }
    toStr(g, C = null, ...W) {
      try {
        return JSON.stringify(g, ...W);
      } catch {
        return C;
      }
    }
    getjson(g, C) {
      let W = C;
      if (this.getdata(g)) {
        try {
          W = JSON.parse(this.getdata(g));
        } catch {}
      }
      return W;
    }
    setjson(g, C) {
      try {
        return this.setdata(JSON.stringify(g), C);
      } catch {
        return !1;
      }
    }
    getScript(g) {
      return new Promise(C => {
        this.get({
          url: g
        }, (W, Q, M) => C(M));
      });
    }
    runScript(g, C) {
      return new Promise(W => {
        let Q = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        Q = Q ? Q.replace(/\n/g, "").trim() : Q;
        let M = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        M = M ? 1 * M : 20;
        M = C && C.timeout ? C.timeout : M;
        const [x, D] = Q.split("@"),
          h = {
            url: "http://" + D + "/v1/scripting/evaluate",
            body: {
              script_text: g,
              mock_type: "cron",
              timeout: M
            },
            headers: {
              "X-Key": x,
              Accept: "*/*"
            },
            timeout: M
          };
        this.post(h, (I, H, B) => W(B));
      }).catch(W => this.logErr(W));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const g = this.path.resolve(this.dataFile),
          C = this.path.resolve(process.cwd(), this.dataFile),
          W = this.fs.existsSync(g),
          Q = !W && this.fs.existsSync(C);
        if (!W && !Q) {
          return {};
        }
        {
          const M = W ? g : C;
          try {
            return JSON.parse(this.fs.readFileSync(M));
          } catch (x) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const g = this.path.resolve(this.dataFile),
          C = this.path.resolve(process.cwd(), this.dataFile),
          W = this.fs.existsSync(g),
          Q = !W && this.fs.existsSync(C),
          M = JSON.stringify(this.data);
        W ? this.fs.writeFileSync(g, M) : Q ? this.fs.writeFileSync(C, M) : this.fs.writeFileSync(g, M);
      }
    }
    lodash_get(g, C, W) {
      const Q = C.replace(/\[(\d+)\]/g, ".$1").split(".");
      let M = g;
      for (const x of Q) if (M = Object(M)[x], void 0 === M) {
        return W;
      }
      return M;
    }
    lodash_set(g, C, W) {
      Object(g) !== g || (Array.isArray(C) || (C = C.toString().match(/[^.[\]]+/g) || []), C.slice(0, -1).reduce((Q, M, x) => Object(Q[M]) === Q[M] ? Q[M] : Q[M] = Math.abs(C[x + 1]) >> 0 == +C[x + 1] ? [] : {}, g)[C[C.length - 1]] = W);
      return g;
    }
    getdata(g) {
      let C = this.getval(g);
      if (/^@/.test(g)) {
        const [, W, Q] = /^@(.*?)\.(.*?)$/.exec(g),
          M = W ? this.getval(W) : "";
        if (M) {
          try {
            const x = JSON.parse(M);
            C = x ? this.lodash_get(x, Q, "") : C;
          } catch (D) {
            C = "";
          }
        }
      }
      return C;
    }
    setdata(g, C) {
      let W = !1;
      if (/^@/.test(C)) {
        const [, Q, M] = /^@(.*?)\.(.*?)$/.exec(C),
          x = this.getval(Q),
          D = Q ? "null" === x ? null : x || "{}" : "{}";
        try {
          const h = JSON.parse(D);
          this.lodash_set(h, M, g);
          W = this.setval(JSON.stringify(h), Q);
        } catch (I) {
          const H = {};
          this.lodash_set(H, M, g);
          W = this.setval(JSON.stringify(H), Q);
        }
      } else {
        W = this.setval(g, C);
      }
      return W;
    }
    getval(g) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(g);
        case "Quantumult X":
          return $prefs.valueForKey(g);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[g];
        default:
          return this.data && this.data[g] || null;
      }
    }
    setval(g, C) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(g, C);
        case "Quantumult X":
          return $prefs.setValueForKey(g, C);
        case "Node.js":
          this.data = this.loaddata();
          this.data[C] = g;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[C] || null;
      }
    }
    initGotEnv(g) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      g && (g.headers = g.headers ? g.headers : {}, g && (g.headers = g.headers ? g.headers : {}, void 0 === g.headers.cookie && void 0 === g.headers.Cookie && void 0 === g.cookieJar && (g.cookieJar = this.ckjar)));
    }
    get(g, C = () => {}) {
      switch (g.headers && (delete g.headers["Content-Type"], delete g.headers["Content-Length"], delete g.headers["content-type"], delete g.headers["content-length"]), g.params && (g.url += "?" + this.queryStr(g.params)), void 0 === g.followRedirect || g.followRedirect || ((this.isSurge() || this.isLoon()) && (g["auto-redirect"] = !1), this.isQuanX() && (g.opts ? g.opts.redirection = !1 : g.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (g.headers = g.headers || {}, Object.assign(g.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(g, (Q, M, x) => {
            !Q && M && (M.body = x, M.statusCode = M.status ? M.status : M.statusCode, M.status = M.statusCode);
            C(Q, M, x);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (g.opts = g.opts || {}, Object.assign(g.opts, {
            hints: !1
          }));
          $task.fetch(g).then(Q => {
            const {
              statusCode: M,
              statusCode: x,
              headers: D,
              body: h,
              bodyBytes: I
            } = Q;
            C(null, {
              status: M,
              statusCode: x,
              headers: D,
              body: h,
              bodyBytes: I
            }, h, I);
          }, Q => C(Q && Q.error || "UndefinedError"));
          break;
        case "Node.js":
          let W = require("iconv-lite");
          this.initGotEnv(g);
          this.got(g).on("redirect", (Q, M) => {
            try {
              if (Q.headers["set-cookie"]) {
                const x = Q.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                x && this.ckjar.setCookieSync(x, null);
                M.cookieJar = this.ckjar;
              }
            } catch (D) {
              this.logErr(D);
            }
          }).then(Q => {
            const {
                statusCode: M,
                statusCode: x,
                headers: D,
                rawBody: h
              } = Q,
              I = W.decode(h, this.encoding);
            C(null, {
              status: M,
              statusCode: x,
              headers: D,
              rawBody: h,
              body: I
            }, I);
          }, Q => {
            const {
              message: M,
              response: x
            } = Q;
            C(M, x, x && W.decode(x.rawBody, this.encoding));
          });
          break;
      }
    }
    post(g, C = () => {}) {
      const W = g.method ? g.method.toLocaleLowerCase() : "post";
      switch (g.body && g.headers && !g.headers["Content-Type"] && !g.headers["content-type"] && (g.headers["content-type"] = "application/x-www-form-urlencoded"), g.headers && (delete g.headers["Content-Length"], delete g.headers["content-length"]), void 0 === g.followRedirect || g.followRedirect || ((this.isSurge() || this.isLoon()) && (g["auto-redirect"] = !1), this.isQuanX() && (g.opts ? g.opts.redirection = !1 : g.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (g.headers = g.headers || {}, Object.assign(g.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[W](g, (D, h, I) => {
            !D && h && (h.body = I, h.statusCode = h.status ? h.status : h.statusCode, h.status = h.statusCode);
            C(D, h, I);
          });
          break;
        case "Quantumult X":
          g.method = W;
          this.isNeedRewrite && (g.opts = g.opts || {}, Object.assign(g.opts, {
            hints: !1
          }));
          $task.fetch(g).then(D => {
            const {
              statusCode: h,
              statusCode: I,
              headers: H,
              body: B,
              bodyBytes: n
            } = D;
            C(null, {
              status: h,
              statusCode: I,
              headers: H,
              body: B,
              bodyBytes: n
            }, B, n);
          }, D => C(D && D.error || "UndefinedError"));
          break;
        case "Node.js":
          let Q = require("iconv-lite");
          this.initGotEnv(g);
          const {
            url: M,
            ...x
          } = g;
          this.got[W](M, x).then(D => {
            const {
                statusCode: h,
                statusCode: I,
                headers: H,
                rawBody: B
              } = D,
              F = Q.decode(B, this.encoding);
            C(null, {
              status: h,
              statusCode: I,
              headers: H,
              rawBody: B,
              body: F
            }, F);
          }, D => {
            const {
              message: h,
              response: I
            } = D;
            C(h, I, I && Q.decode(I.rawBody, this.encoding));
          });
          break;
      }
    }
    time(g, C = null) {
      const W = C ? new Date(C) : new Date();
      let Q = {
        "M+": W.getMonth() + 1,
        "d+": W.getDate(),
        "H+": W.getHours(),
        "m+": W.getMinutes(),
        "s+": W.getSeconds(),
        "q+": Math.floor((W.getMonth() + 3) / 3),
        S: W.getMilliseconds()
      };
      /(y+)/.test(g) && (g = g.replace(RegExp.$1, (W.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let M in Q) new RegExp("(" + M + ")").test(g) && (g = g.replace(RegExp.$1, 1 == RegExp.$1.length ? Q[M] : ("00" + Q[M]).substr(("" + Q[M]).length)));
      return g;
    }
    queryStr(g) {
      let C = "";
      for (const W in g) {
        let Q = g[W];
        null != Q && "" !== Q && ("object" == typeof Q && (Q = JSON.stringify(Q)), C += W + "=" + Q + "&");
      }
      C = C.substring(0, C.length - 1);
      return C;
    }
    msg(g = u, C = "", W = "", Q = {}) {
      const M = x => {
        const {
          $open: D,
          $copy: h,
          $media: I,
          $mediaMime: H
        } = x;
        switch (typeof x) {
          case void 0:
            return x;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: x
                };
              case "Loon":
              case "Shadowrocket":
                return x;
              case "Quantumult X":
                return {
                  "open-url": x
                };
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
                  const B = {};
                  let F = x.openUrl || x.url || x["open-url"] || D;
                  F && Object.assign(B, {
                    action: "open-url",
                    url: F
                  });
                  let L = x["update-pasteboard"] || x.updatePasteboard || h;
                  if (L && Object.assign(B, {
                    action: "clipboard",
                    text: L
                  }), I) {
                    let l, K, Y;
                    if (I.startsWith("http")) {
                      l = I;
                    } else {
                      if (I.startsWith("data:")) {
                        const [w] = I.split(";"),
                          [, J] = I.split(",");
                        K = J;
                        Y = w.replace("data:", "");
                      } else {
                        K = I;
                        Y = (U => {
                          const E = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var N in E) if (0 === U.indexOf(N)) {
                            return E[N];
                          }
                          return null;
                        })(I);
                      }
                    }
                    Object.assign(B, {
                      "media-url": l,
                      "media-base64": K,
                      "media-base64-mime": H ?? Y
                    });
                  }
                  Object.assign(B, {
                    "auto-dismiss": x["auto-dismiss"],
                    sound: x.sound
                  });
                  return B;
                }
              case "Loon":
                {
                  const U = {};
                  let E = x.openUrl || x.url || x["open-url"] || D;
                  E && Object.assign(U, {
                    openUrl: E
                  });
                  let N = x.mediaUrl || x["media-url"];
                  I?.["startsWith"]("http") && (N = I);
                  N && Object.assign(U, {
                    mediaUrl: N
                  });
                  console.log(JSON.stringify(U));
                  return U;
                }
              case "Quantumult X":
                {
                  const p = {};
                  let R = x["open-url"] || x.url || x.openUrl || D;
                  R && Object.assign(p, {
                    "open-url": R
                  });
                  let b = x["media-url"] || x.mediaUrl;
                  I?.["startsWith"]("http") && (b = I);
                  b && Object.assign(p, {
                    "media-url": b
                  });
                  let T = x["update-pasteboard"] || x.updatePasteboard || h;
                  T && Object.assign(p, {
                    "update-pasteboard": T
                  });
                  console.log(JSON.stringify(p));
                  return p;
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
            $notification.post(g, C, W, M(Q));
            break;
          case "Quantumult X":
            $notify(g, C, W, M(Q));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let x = ["", "==============📣系统通知📣=============="];
        x.push(g);
        C && x.push(C);
        W && x.push(W);
        console.log(x.join("\n"));
        this.logs = this.logs.concat(x);
      }
    }
    debug(...g) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (g.length > 0 && (this.logs = [...this.logs, ...g]), console.log("" + this.logLevelPrefixs.debug + g.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    info(...g) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (g.length > 0 && (this.logs = [...this.logs, ...g]), console.log("" + this.logLevelPrefixs.info + g.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    warn(...g) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (g.length > 0 && (this.logs = [...this.logs, ...g]), console.log("" + this.logLevelPrefixs.warn + g.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    error(...g) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (g.length > 0 && (this.logs = [...this.logs, ...g]), console.log("" + this.logLevelPrefixs.error + g.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    log(...g) {
      g.length > 0 && (this.logs = [...this.logs, ...g]);
      console.log(g.map(C => C ?? String(C)).join(this.logSeparator));
    }
    logErr(g, C) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", C, g);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", C, void 0 !== g.message ? g.message : g, g.stack);
          break;
      }
    }
    wait(g) {
      return new Promise(C => setTimeout(C, g));
    }
    done(g = {}) {
      const C = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + C + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(g);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(u, m);
}