//Sat Jan 04 2025 11:31:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("喜马拉雅极速版"),
  version = "V1.0.5",
  appName = "xmlyjsbapp";
let xmlyjsbapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", M => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("xmlyjsbactivecode") || 0,
  xmlyjsbuserck = $.getval("xmlyjsbuserck") || 1;
let apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1",
  helpUtils = undefined,
  CryptoJS = undefined,
  saveFile = false,
  xmlyjsb_ck_file = "xmlyjsb_cookies.json";
var hour = "",
  minute = "";
let sendlogs = "",
  xmlyjsblogs = [],
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
if ($.isNode()) {
  process.env.XMLYJSBAPP ? xmlyjsbapp = JSON.parse(process.env.XMLYJSBAPP) : xmlyjsbapp = COOKIES.XMLYJSB;
  userId = process.env.TGUSERID;
  activeCode = process.env.XMLYJSBACTIVECODE;
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
    if (!xmlyjsbapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let p = false;
    const s = apiHost.split("&"),
      w = s.length;
    for (let n = 0; n < w; n++) {
      if ($.isNode()) {
        p = await checkAddress("" + s[n], 2500);
      } else {
        $.isSurge() || $.isLoon() ? p = await httpClientRequest("" + s[n], 2500) : p = await fetchRequest("" + s[n], 2500);
      }
      if (p == true) {
        apiHost = s[n];
        $.log("📢 接口" + (n + 1) + "[" + s[n] + "]服务器接口正常! 🎉");
        break;
      }
      if (n == w - 1 && p == false) {
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
      let q = new Date(vipDate).getTime(),
        P = new Date().getTime();
      if (P > q) {
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
        let t = new Date(vipDate).getTime(),
          V = new Date().getTime();
        if (V > t) {
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
    if (xmlyjsbapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (xmlyjsbapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + xmlyjsbapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + xmlyjsbapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (xmlyjsbapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    helpUtils = await loadUtils(flushCash);
    CryptoJS = helpUtils.createCryptoJS();
    $.log("📢 一共发现了" + xmlyjsbapp.length + "个账号");
    if ($.isNode()) {
      !fs.existsSync(xmlyjsb_ck_file) ? xmlyjsb_cks = {} : xmlyjsb_cks = JSON.parse(fs.readFileSync(xmlyjsb_ck_file, "utf8"));
    }
    let J = [],
      C = xmlyjsbapp.length,
      S = 0;
    if ($.isNode() && process.env.XMLYJSB_THREAD_COUNT) {
      S = parseInt(process.env.XMLYJSB_THREAD_COUNT);
    } else {
      S = C;
    }
    let v = xmlyjsbapp.length;
    if (S >= C) {
      S = C;
      v = 1;
      $.log("📢 你设置的线程数是" + S + "，账号个数是" + C + "，" + v + "次可全部跑完。");
      for (let M0 = 0; M0 < xmlyjsbapp.length; M0++) {
        J.push(runMultiTasks(M0));
        xmlyjsblogs[M0] = "";
        if ($.isNode()) {
          channels_status[M0] = 0;
          await init_ws(M0);
        } else {
          channels_status[M0] = 1;
        }
      }
      await Promise.allSettled(J).then(M4 => {
        if ($.isNode() && saveFile) {
          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
          fs.writeFileSync(xmlyjsb_ck_file, JSON.stringify(xmlyjsb_cks, null, 2));
        }
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let M7 = 0; M7 < xmlyjsbapp.length; M7++) {
          $.log(xmlyjsblogs[M7]);
          sendlogs += xmlyjsblogs[M7];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      v = Math.ceil(C / S);
      $.log("📢 你设置的线程数是" + S + "，账号个数是" + C + "，计算后分" + v + "次执行，一次可执行" + S + "个账号，最后一次如果不够" + S + "个账号，剩多少个账号就跑几个账号。");
      for (let M6 = 0; M6 < v; M6++) {
        for (let M8 = M6 * S; M8 < S * (M6 + 1) && M8 < C; M8++) {
          J.push(runMultiTasks(M8));
          xmlyjsblogs[M8] = "";
          channels_status[M8] = 1;
          await init_ws(M8);
        }
        await Promise.allSettled(J).then(MM => {
          J = [];
          if (M6 == v - 1) {
            $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(xmlyjsb_ck_file, JSON.stringify(xmlyjsb_cks, null, 2)));
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let Ms = 0; Ms < xmlyjsbapp.length; Ms++) {
              $.log(xmlyjsblogs[Ms]);
              sendlogs += xmlyjsblogs[Ms];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(M => $.logErr(M)).finally(() => $.done());
async function runMultiTasks(M) {
  return new Promise((p, s) => {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 开始执行 working......");
    runSubTask(p, M);
  });
}
async function init_ws(M) {
  if ($.isNode()) {
    if (reconectCounts[M] > 0) {
      $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[M] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[M].on("open", function s() {
      $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签名通道已连接");
    });
    wss[M].on("close", function w() {
      $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[M].on("error", function J() {
      $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[M] = 1;
      reconectCounts[M]++;
      if (reconectCounts[M] <= 3) {
        init_ws(M);
      }
    });
  }
}
async function runSubTask(M, a) {
  $.isNode() && (await $.wait(3000, 5000));
  await userInfo(a);
  await account(a);
  hour > 5 && (await cashPageInfo(a));
  if (minute < 10) {
    await addListenTime(a, 375 * (hour + 1) + helpUtils.randomNum(3, 60));
  }
  await listenInfo(a);
  await signInfo(a);
  await drinkInfo(a);
  await topicInfo(a);
  await redPacketInfo(a);
  await doTasks(a);
  $.isNode() && (await wss[a].close());
  await runComplete(appName, userId);
  M();
}
async function getCk() {
  const p = {
    kjLBn: function (w, J) {
      return w > J;
    },
    tRbmM: function (w, J) {
      return w !== J;
    },
    GrkMo: "YAUfI",
    gmyBN: function (w, J) {
      return w - J;
    },
    yxMRQ: function (w, J) {
      return w === J;
    },
    Qbwpf: "TXNhd",
    qGgRx: "WeCzx",
    JSFvX: function (w, J) {
      return w === J;
    },
    mpGMF: "mdIBD",
    MvEbf: "xmlyjsbapp",
    Kszmc: function (w, J) {
      return w + J;
    }
  };
  const s = p;
  if ($request.url.match(/\/task\/record/)) {
    if (s.tRbmM(s.GrkMo, s.GrkMo)) {
      let J = s.data;
      s.kjLBn(J.length, 0) && (C = J[0]);
      return J;
    } else {
      const J = $request.headers.Cookie;
      let C = s.gmyBN(xmlyjsbuserck, 1);
      if (xmlyjsbapp[C]) {
        s.yxMRQ(s.Qbwpf, s.qGgRx) ? (v.log(R + ": " + n + "请求失败"), H.log(f.stringify(Q)), E.logErr(D)) : xmlyjsbapp[C].cookie = J;
      } else {
        if (s.JSFvX(s.mpGMF, s.mpGMF)) {
          const v = {
            cookie: J
          };
          xmlyjsbapp[C] = v;
        } else {
          s = w[J].ua;
        }
      }
      $.setdata(JSON.stringify(xmlyjsbapp, null, 2), s.MvEbf);
      $.msg($.name, "喜马拉雅极速版账号" + s.Kszmc(C, 1) + "Cookie获取成功！🎉");
    }
  }
}
async function userInfo(M) {
  const p = "https://passport.ximalaya.com/web/login/user";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null && w.ret == 0) {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 用户名=> " + w.nickname);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 用户名=> " + w.nickname + "\n";
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 手机号=> " + w.mobile);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 手机号=> " + w.mobile + "\n";
    xmlyjsbapp[M].uid = w.uid;
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 用户名信息=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 用户名信息=> " + w.msg + "\n";
  }
}
async function account(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/account/coin";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null) {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 金币=> " + w.total);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 金币=> " + w.total + "\n";
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 余额=> " + (w.total / 10000).toFixed(2) + "元");
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 余额=> " + (w.total / 10000).toFixed(2) + "元 \n";
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 账户信息=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 账户信息=> " + w.msg + "\n";
  }
}
async function refreshToken(M) {
  const p = "https://passport.ximalaya.com/user-http-app/v1/token/refresh";
  let s = "";
  await getReqObject(p, s, M);
  requestObjects[M].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null && w.ret == 0) {
    if (w.newToken != null) {
      $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 刷新token=> " + w.data.newToken);
    }
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 刷新token=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 刷新token=> " + w.msg + "\n";
  }
}
async function addListenTime(M, a) {
  const s = "https://mobwsa.ximalaya.com/pizza-category/ball/saveListenTime";
  let w = helpUtils.ts13(),
    J = CryptoJS.MD5("currenttimemillis=" + w + "&listentime=" + a + "&uid=" + xmlyjsbapp[M].uid + "&q35435432sadks2i3546p2ndkcaqiwurhqfebt4kn").toString();
  let C = "activtyId=listenAward&currentTimeMillis=" + w + "&listenTime=" + a + "&nativeListenTime=" + a + "&signature=" + J + "&uid=" + xmlyjsbapp[M].uid;
  await getReqObject(s, C, M);
  requestObjects[M].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[M], printCaller());
  let S = httpResult;
  S != null ? ($.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 阅读时长增加到=> " + (S.nativeListenTime / 60).toFixed(1) + "分钟"), xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 阅读时长增加到=> " + (S.nativeListenTime / 60).toFixed(1) + "分钟\n") : ($.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 阅读时长增加=> " + S.msg), xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 阅读时长增加=> " + S.msg + "\n");
}
async function doTasks(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/task/record?taskLabels=1,2";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null) {
    let J = w.taskList;
    for (let C = 0; C < J.length; C++) {
      let S = J[C];
      if (S.taskId == 65) {
        let R = S.step - S.process;
        for (let H = 0; H < R; H++) {
          let Q = await getToken(M);
          await $.wait(helpUtils.randomNum(10000, 15000));
          await getScore(M, Q, 2, S.title + "(" + (S.process + H + 1) + "/" + S.step + ")");
        }
      }
    }
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 任务中心=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 任务中心=> " + w.msg + "\n";
  }
}
async function signInfo(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/check-in/record?time=" + helpUtils.ts13();
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null) {
    let J = w.receivedToday;
    if (J == null || J == false) {
      let S = w.checkInDetails[w.thatDay - 1];
      await signIn(M, S.checkInAward);
    }
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签到记录=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签到记录=> " + w.msg + "\n";
  }
}
async function signIn(M, a) {
  const s = "https://m.ximalaya.com/speed/web-earn/check-in/check";
  let w = helpUtils.createDayjs(),
    J = w().format("YYYYMMDD");
  await selectChannel(M, "date=" + J + "&uid=" + xmlyjsbapp[M].uid);
  let C = requestSigns[M],
    S = "{\"checkData\":\"" + C + "\",\"makeUp\":false}";
  await getReqObject(s, S, M);
  await httpRequest("post", requestObjects[M], printCaller());
  let v = httpResult;
  if (v != null) {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签到=> 签到成功，获得" + a + "金币");
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签到=> 签到成功，获得" + a + "金币\n";
    let R = await getToken(M);
    await $.wait(helpUtils.randomNum(10000, 15000));
    await getScore(M, R, 1, "每日签到看广告奖励");
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签到=> " + v.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 签到=> " + v.msg + "\n";
  }
}
async function getToken(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/ad/token";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null) {
    return w.id;
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 获取广告token=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 获取广告token=> " + w.msg + "\n";
  }
}
async function getScore(M, a, p, s) {
  const J = "https://m.ximalaya.com/speed/web-earn/ad/score";
  let C = CryptoJS.MD5("businesstype=" + p + "&token=" + a + "&uid=" + xmlyjsbapp[M].uid + "&q35435432sadks2i3546p2ndkcaqiwurhqfebt4kn").toString();
  let S = "{\"sign\":\"" + C + "\",\"businessType\":" + p + "}";
  await getReqObject(J, S, M);
  await httpRequest("post", requestObjects[M], printCaller());
  let v = httpResult;
  if (v != null) {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + s + "=> " + v.coin + "金币");
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + s + "=> " + v.coin + "金币\n";
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + s + "=> " + v.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + s + "=> " + v.msg + "\n";
  }
}
async function redPacketInfo(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/redPacket/config";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    if (w.data.waitTime == 0) {
      let C = w.data.stageId;
      await receiveRedPacketReward(M, 1, C);
      await $.wait(helpUtils.randomNum(10000, 15000));
      await receiveRedPacketReward(M, 2, C);
    }
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱信息=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱信息=> " + w.msg + "\n";
  }
}
async function receiveRedPacketReward(a, p, s) {
  const J = "https://m.ximalaya.com/speed/web-earn/redPacket/receive/v2";
  let C = helpUtils.ts13();
  await selectChannel(a, "stageId=" + s + "&receiveType=" + p + "&timestamp=" + C + "&uid=" + xmlyjsbapp[a].uid);
  let S = requestSigns[a];
  const v = {
    receiveType: p,
    signature: S,
    timestamp: C,
    stageId: s
  };
  await getReqObject(J, JSON.stringify(v), a);
  await httpRequest("post", requestObjects[a], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    if (p == 1) {
      $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 打开宝箱=> 获得" + n.data.score + "金币");
      xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 打开宝箱=> 获得" + n.data.score + "金币\n";
    } else {
      $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + n.data.score + "金币");
      xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + n.data.score + "金币\n";
    }
  } else {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 宝箱奖励=> " + n.msg);
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 宝箱奖励=> " + n.msg + "\n";
  }
}
async function topicInfo(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/topic/user";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    w.data.stamina > 0 && (await startQuestion(M));
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱信息=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱信息=> " + w.msg + "\n";
  }
}
async function startQuestion(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/topic/start";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    let J = w.data.paperId,
      C = w.data.topics.length,
      S = w.data.topics[C - 1].topicId;
    await $.wait(helpUtils.randomNum(10000, 15000));
    await receiveQuestionReward(M, 1, J, S, C);
    await $.wait(helpUtils.randomNum(10000, 15000));
    await receiveQuestionReward(M, 2, J, S, C);
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱信息=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱信息=> " + w.msg + "\n";
  }
}
async function receiveQuestionReward(a, p, s, w, J) {
  const S = "https://m.ximalaya.com/speed/web-earn/topic/reward/v2";
  let v = helpUtils.ts13();
  await selectChannel(a, "lastTopicId=" + w + "&numOfAnswers=" + J + "&receiveType=" + p + "&timestamp=" + v + "&uid=" + xmlyjsbapp[a].uid);
  let R = requestSigns[a];
  const n = {
    numOfAnswers: J,
    paperId: s,
    signature: R,
    timestamp: v,
    receiveType: p,
    lastTopicId: w
  };
  await getReqObject(S, JSON.stringify(n), a);
  await httpRequest("post", requestObjects[a], printCaller());
  let f = httpResult;
  if (f != null && f.code == 0) {
    if (p == 1) {
      $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 答题成功=> 获得" + f.data.reward + "金币");
      xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 答题成功=> " + f.data.reward + "金币\n";
    } else {
      $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 答题成功看广告=> 翻了" + f.data.multiple + "倍，获得" + f.data.reward + "金币");
      xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 答题成功看广告=> 翻了" + f.data.multiple + "倍，获得" + f.data.reward + "金币\n";
    }
  } else {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 答题奖励=> " + f.msg);
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 答题奖励=> " + f.msg + "\n";
  }
}
async function drinkInfo(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/drink/detail?timestamp=" + helpUtils.ts13();
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null && w.code == 0) {
    let C = w.data.drinks;
    for (let S = 0; S < C.length; S++) {
      let v = C[S];
      if (v.receiveStatus == 2) {
        await receiveDrinkReward(M, v, 1);
        await $.wait(helpUtils.randomNum(10000, 15000));
        await receiveDrinkReward(M, v, 2);
      } else {
        if (v.receiveStatus == 4) {
          await $.wait(helpUtils.randomNum(10000, 15000));
          await receiveDrinkReward(M, v, 3);
        }
      }
    }
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 每日喝水信息=> " + w.msg);
    xmlyjsblogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 每日喝水信息=> " + w.msg + "\n";
  }
}
async function receiveDrinkReward(a, p, s) {
  const J = "https://m.ximalaya.com/speed/web-earn/drink/receive/v2";
  let C = helpUtils.ts13();
  await selectChannel(a, "stageId=" + p.stageId + "&isDouble=" + s + "&timestamp=" + C + "&uid=" + xmlyjsbapp[a].uid);
  let S = requestSigns[a];
  const v = {
    isDouble: s,
    timestamp: C,
    signature: S,
    stageId: p.stageId
  };
  await getReqObject(J, JSON.stringify(v), a);
  await httpRequest("post", requestObjects[a], printCaller());
  let n = httpResult;
  if (n != null && n.code == 0) {
    if (s == 1) {
      $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "(" + p.description + ")=> 获得" + n.data.score + "金币");
      xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "(" + p.description + ")=> " + n.data.score + "金币\n";
    } else {
      if (s == 2) {
        $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "_看广告=> 获得" + n.data.score + "金币");
        xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "_看广告=> 获得" + n.data.score + "金币\n";
      } else {
        $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "_(补)=> 获得" + n.data.score + "金币");
        xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "_(补)=> 获得" + n.data.score + "金币\n";
      }
    }
  } else {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "=> " + n.msg);
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "=> " + n.msg + "\n";
  }
}
async function listenInfo(a) {
  const s = "https://m.ximalaya.com/speed/web-earn/listen/b/coin/config?ts=" + helpUtils.ts13();
  let w = "";
  await getReqObject(s, w, a);
  await httpRequest("get", requestObjects[a], printCaller());
  let J = httpResult;
  if (J != null && J.code == 0) {
    let C = J.data.coinList,
      S = J.data.positionList;
    const v = {
      videoAdType: 1,
      positionId: 0,
      positionName: "",
      coinSceneId: 0
    };
    let n = S.find(Q => Q.positionName == "sub_listentime_double_video"),
      H = S.find(Q => Q.positionName == "sub_listentime_video"),
      f = 375 * (hour + 1);
    for (let Q = 0; Q < C.length; Q++) {
      let E = C[Q];
      if (E.coinStatus == 1 && f >= E.listenTime) {
        if (Q == C.length - 1) {
          await receiveListenReward(a, E, J.data.priodId, H);
          await $.wait(helpUtils.randomNum(10000, 15000));
          await receiveListenReward(a, E, J.data.priodId, n);
          await $.wait(helpUtils.randomNum(5000, 10000));
        } else {
          await receiveListenReward(a, E, J.data.priodId, v);
          await $.wait(helpUtils.randomNum(10000, 15000));
          await receiveListenReward(a, E, J.data.priodId, n);
          await $.wait(helpUtils.randomNum(5000, 10000));
        }
      } else {
        E.coinStatus == 3 && E.hasDouble == false && (await receiveListenReward(a, E, J.data.priodId, n));
      }
    }
  } else {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 听书奖励信息=> " + J.msg);
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 听书奖励信息=> " + J.msg + "\n";
  }
}
async function receiveListenReward(a, p, s, w) {
  const C = "https://m.ximalaya.com/speed/web-earn/listen/b/award";
  let S = helpUtils.ts13(),
    v = "priodId=" + s + "&stageId=" + p.stageId + "&listenTime=" + p.listenTime + "&coinSceneId=" + w.coinSceneId + "&positionId=" + w.positionId + "&positionName=" + w.positionName + "&timestamp=" + S + "&randomDouble=" + w.videoAdType;
  await selectChannel(a, v);
  let R = requestSigns[a];
  const n = {
    stageId: p.stageId,
    positionName: w.positionName,
    randomDouble: w.videoAdType,
    priodId: s,
    signature: R,
    positionId: w.positionId,
    coinSceneId: w.coinSceneId,
    timestamp: S,
    listenTime: p.listenTime
  };
  await getReqObject(C, JSON.stringify(n), a);
  await httpRequest("post", requestObjects[a], printCaller());
  let f = httpResult;
  if (f != null && f.code == 0) {
    if (w.videoAdType == 1) {
      $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "(" + p.comment + ")=> 获得" + f.data.coinNum + "金币");
      xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "(" + p.comment + ")=> " + f.data.coinNum + "金币\n";
    } else {
      w.videoAdType == 2 && ($.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "_看广告=> 获得" + f.data.coinNum + "金币"), xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "_看广告=> 获得" + f.data.coinNum + "金币\n");
    }
  } else {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "=> " + f.msg);
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: " + p.title + "=> " + f.msg + "\n";
  }
}
async function receiveYesterdayReward(a, p) {
  let w = helpUtils.ts13();
  const J = "https://m.ximalaya.com/speed/web-earn/account/showAward/receive?ts=" + w;
  await selectChannel(a, "stageId=" + p + "&timestamp=" + w + "&uid=" + xmlyjsbapp[a].uid);
  let C = requestSigns[a];
  const S = {
    stageId: p,
    signature: C,
    timestamp: w
  };
  await getReqObject(J, JSON.stringify(S), a);
  await httpRequest("post", requestObjects[a], printCaller());
  let R = httpResult;
  if (R != null && R.ret == 0) {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 昨日盈利奖励=> " + R.data.extraAward + "金币");
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 昨日盈利奖励=> " + R.data.extraAward + "金币\n";
  } else {
    $.log("[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 昨日盈利奖励=> " + R.msg);
    xmlyjsblogs[a] += "[账号" + (a + 1 < 10 ? "0" + (a + 1) : a + 1) + "]: 昨日盈利奖励=> " + R.msg + "\n";
  }
}
async function thirdAccountInfo(M) {
  const p = "https://m.ximalaya.com/speed/web-earn/account/third-pay-account/3";
  let s = "";
  let w = null;
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let J = httpResult;
  if (J != null && J.code == 0) {
    let C = J.data;
    if (C.length > 0) {
      w = C[0];
    }
    return w;
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 账户信息=> " + J.msg);
    qjxslogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 账户信息=> " + J.msg + "\n";
  }
}
async function withdraw(M, a) {
  const s = "https://m.ximalaya.com/speed/web-earn/account/take-out";
  let w = await thirdAccountInfo(M);
  if (w == null) {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 账户信息=> 请绑定支付宝，再尝试提现");
    qjxslogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 账户信息=> 请绑定支付宝，再尝试提现\n";
    return;
  }
  let J = helpUtils.ts13();
  let C = "accountType=" + w.accountType + "&accountNumber=" + w.accountNumber + "&amount=" + a + "&timestamp=" + J + "&uid=" + xmlyjsbapp[M].uid;
  await selectChannel(M, C);
  let S = requestSigns[M],
    v = {
      signature: S,
      timestamp: parseInt(J),
      name: w.name,
      accountType: w.accountType,
      accountNumber: w.accountNumber,
      amount: a,
      takeOutType: 2
    };
  await getReqObject(s, JSON.stringify(v), M);
  await httpRequest("post", requestObjects[M], printCaller());
  let R = httpResult;
  if (R != null && R.code == 0) {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 提现=> 成功提现" + a + "元");
    qjxslogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 提现=> 成功提现" + a + "元\n";
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 提现结果=> " + R.msg);
    qjxslogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 提现结果=> " + R.msg + "\n";
  }
}
async function cashPageInfo(M) {
  const p = "https://m.ximalaya.com/growth-ssr-speed-welfare-center/page/withdraw?_full_with_transparent_bar=1";
  let s = "";
  await getReqObject(p, s, M);
  await httpRequest("get", requestObjects[M], printCaller());
  let w = httpResult;
  if (w != null) {
    const C = helpUtils.createCheerio(),
      S = C.load(w);
    let v = JSON.parse(S("#__NEXT_DATA__").text()),
      R = v.props.pageProps.config.continuousDays,
      n = v.props.pageProps.coin.total,
      H = v.props.pageProps.config.alipayTakeOutInfo.activityTakeOutInfo.activityList,
      Q = H.find(D => D.amount == 20),
      E = H.find(D => D.amount == 50);
    if (E && E.takeOutTimes > 0 && E.leastContinuousDays <= R && n >= 500000) {
      await withdraw(M, 50);
    } else {
      if (Q && Q.takeOutTimes > 0 && Q.leastContinuousDays <= R && n >= 200000) {
        await withdraw(M, 20);
      }
    }
  } else {
    $.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 提现页面信息=> " + w.msg);
    qjxslogs[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 提现页面信息=> " + w.msg + "\n";
  }
}
function getScriptAuth(M, a, p) {
  return new Promise((w, J) => {
    const v = apiHost + "/script/permissions/lastest",
      R = {
        appName: M,
        userId: a,
        activityCode: p,
        version: version
      };
    const H = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const f = {
      url: v,
      headers: H,
      body: JSON.stringify(R)
    };
    $.post(f, async (Q, E, D) => {
      if (D && D != null && D.replace(/\"/g, "").length > 50) {
        const q = D.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(q).toString(CryptoJS.enc.Utf8));
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
        } catch (U) {
          $.log(U);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      w();
    });
  });
}
function runComplete(M, a) {
  return new Promise((s, w) => {
    const C = apiHost + "/script/run/add",
      S = {
        appName: M,
        userId: a,
        activityCode: activeCode,
        version: version
      };
    const R = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const n = {
      url: C,
      headers: R,
      body: JSON.stringify(S)
    };
    $.post(n, async (H, f, Q) => {
      s();
    });
  });
}
function loadToken(a) {
  let w = xmlyjsbapp[a].mobile;
  xmlyjsb_item = xmlyjsb_cks["" + w];
  if (xmlyjsb_item) {
    xmlyjsbapp[a].refreshToken = xmlyjsb_item.refreshToken;
    xmlyjsbapp[a].accessToken = xmlyjsb_item.accessToken;
    return true;
  } else {
    return false;
  }
}
function saveToken(M) {
  xmlyjsb_cks[xmlyjsbapp[M].mobile] = {
    refreshToken: xmlyjsbapp[M].refreshToken,
    accessToken: xmlyjsbapp[M].accessToken,
    ts: ts13()
  };
}
async function loadUtils(M) {
  let p = $.getdata("Utils_Code") || "";
  if (!M && p && Object.keys(p).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(p);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async w => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(S => {
      $.setdata(S, "Utils_Code");
      eval(S);
      $.log("📢 JS-Utils加载成功");
      w(creatUtils());
    });
  });
}
function checkAddress(M, a) {
  return new Promise((s, w) => {
    const S = setTimeout(() => {
        s(false);
      }, a),
      v = http.get(M, R => {
        clearTimeout(S);
        if (R.statusCode === 404) {
          s(true);
        } else {
          s(false);
        }
      });
    v.on("error", R => {
      clearTimeout(S);
      s(false);
    });
    v.on("timeout", () => {
      v.abort();
      w(new Error("请求超时"));
    });
  });
}
async function fetchRequest(M, a = 3000) {
  return new Promise((s, w) => {
    const S = {
      url: M + "/docs"
    };
    setTimeout(() => {
      s(false);
    }, a);
    $.get(S, async (v, R, n) => {
      if (R.status == 401) {
        s(true);
      } else {
        s(false);
      }
    });
  });
}
async function httpClientRequest(M, a = 3000) {
  return new Promise((s, w) => {
    const C = {
      url: M + "/"
    };
    setTimeout(() => {
      s(false);
    }, a);
    $httpClient.get(C, async (S, v, R) => {
      if (R == "{\"detail\":\"Not Found\"}") {
        s(true);
      } else {
        s(false);
      }
    });
  });
}
async function redisGet(M, a, p) {
  return new Promise((w, J) => {
    const S = apiHost + "/redis/hash/get/" + a + "/" + p,
      v = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const R = {
      url: S,
      headers: v
    };
    $.get(R, async (H, f, Q) => {
      const E = Q.replace(/\"/g, "");
      answerTexts[M] = E;
      w();
    });
  });
}
function redisSet(M, a, p) {
  return new Promise((w, J) => {
    const v = apiHost + "/redis/hash/set",
      R = {
        key: M,
        hashKey: a,
        hashValue: p
      };
    const H = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const f = {
      url: v,
      headers: H,
      body: JSON.stringify(R)
    };
    $.post(f, async (Q, E, D) => {
      w();
    });
  });
}
function redisPop(M) {
  return new Promise((p, s) => {
    const J = apiHost + "/redis/set/pop/" + M,
      C = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const S = {
      url: J,
      headers: C
    };
    $.get(S, async (R, n, H) => {
      const Q = H.replace(/\"/g, "");
      popCookie = Q;
      p();
    });
  });
}
async function getReqObject(p, s, w) {
  let C = "ting_v3.0.31_c5(CFNetwork, iOS 16.6.1, iPhone10,2) ;xmly(lite)/3.0.31/ios_1";
  xmlyjsbapp[w].ua && xmlyjsbapp[w].ua != "" && (C = xmlyjsbapp[w].ua);
  let S = getHostname(p);
  const v = {
    "Content-Type": "application/json",
    "User-Agent": C,
    Cookie: xmlyjsbapp[w].cookie,
    Host: S
  };
  const R = {
    url: p,
    headers: v
  };
  if (s) {
    R.body = s;
  }
  requestObjects[w] = R;
  return R;
}
function getReqObject_(p, s, w) {
  let C = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  xmlyjsbapp[w].ua && xmlyjsbapp[w].ua != "" && (C = xmlyjsbapp[w].ua);
  let S = getHostname(p);
  const v = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": C,
    Authorization: xmlyjsbapp[w].auth,
    Host: S
  };
  const R = {
    url: p,
    headers: v
  };
  if (s) {
    R.body = s;
  }
  requestObjects[w] = R;
  return R;
}
async function httpRequest(M, a, p) {
  httpResult = null;
  return new Promise(w => {
    $[M](a, async (C, S, v) => {
      try {
        if (C) {
          $.log(p + ": " + M + "请求失败");
          $.log(JSON.stringify(C));
          $.logErr(C);
        } else {
          const E = new URL(a.url);
          if (E.pathname.indexOf("page/withdraw") != -1) {
            httpResult = v;
          } else {
            if (safeGet(v)) {
              httpResult = JSON.parse(v);
              debug == 1 && $.log(httpResult);
            } else {
              const q = new URL(a.url);
              $.log(q.pathname + "发起" + M + "请求时，出现错误，请处理");
            }
          }
        }
      } catch (d) {
        $.logErr(d, S);
      } finally {
        w(httpResult);
      }
    });
  });
}
async function selectChannel(M, a) {
  if (channels_status[M] == 0) {
    await getSign_(M, a);
  } else {
    await getSign(M, a);
  }
}
function getSign_(M, a) {
  return new Promise((s, w) => {
    function C(S) {
      let n = S.toString("utf8");
      requestSigns[M] = n;
      wss[M].removeListener("message", C);
      s(n);
    }
    wss[M].on("message", C);
    if (wss[M].readyState === 1) {
      const S = {
        method: appName,
        params: {}
      };
      S.params.content = a;
      S.params.appName = appName;
      S.params.uuid = userId;
      wss[M].send(JSON.stringify(S), v => {
        v && w(v);
      });
    } else {
      s(getSign(M, a));
      wss[M].removeListener("message", C);
    }
  });
}
function getSign(M, a) {
  return new Promise((s, w) => {
    const S = apiHost + "/sign/xmly",
      v = {
        content: a,
        appName: appName,
        uuid: userId
      };
    const n = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const H = {
      url: S,
      headers: n,
      body: JSON.stringify(v)
    };
    $.post(H, async (f, Q, E) => {
      const D = E.replace(/\"/g, "");
      requestSigns[M] = D;
      s();
    });
  });
}
function sortUrlParams(M, a, p) {
  const w = url2obj(M);
  a.forEach(S => {
    delete w[S];
  });
  Object.assign(w, p);
  const J = Object.keys(w).sort();
  const C = J.map(S => S + "=" + w[S]).join("&");
  return C;
}
function url2obj(a) {
  a = a.replace(/\"/g, "");
  var w,
    J = {},
    C = a.slice(a.indexOf("?") + 1).split("&");
  for (var S = 0; S < C.length; S++) {
    w = C[S].split("=");
    J[w[0]] = w[1];
  }
  return J;
}
function convertStringToJson(M) {
  const p = M.replace(/[{} ]/g, ""),
    s = p.split(","),
    w = {};
  s.forEach(J => {
    const [C, S] = J.split("=");
    w[C] = S;
  });
  return w;
}
function getHostname(a) {
  let w = a.substr(a.indexOf("//") + 2),
    J = w.substr(0, w.indexOf("/")),
    C = "",
    S = J.indexOf(":");
  if (S > 0) {
    C = J.substr(0, S);
  } else {
    C = J;
  }
  return C;
}
function calculateTimeDifference(a, p) {
  var n = new Date(a);
  var R = new Date(p);
  var v = R - n;
  var S = Math.floor(v / 1000);
  return S;
}
function cutString(M, a) {
  if (M.length * 2 <= a) {
    return M;
  }
  var w = 0;
  var J = "";
  for (var C = 0; C < M.length; C++) {
    J = J + M.charAt(C);
    if (M.charCodeAt(C) > 128) {
      w = w + 2;
      if (w >= a) {
        return J.substring(0, J.length - 1) + "...";
      }
    } else {
      w = w + 1;
      if (w >= a) {
        return J.substring(0, J.length - 2) + "...";
      }
    }
  }
  return J;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(M) {
  try {
    if (typeof JSON.parse(M) == "object") {
      return true;
    }
  } catch (w) {
    console.log(w);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(M) {
  var p = Object.keys(M).map(function (s) {
    return encodeURIComponent(s) + "=" + encodeURIComponent(M[s]);
  }).join("&");
  return p;
}
function compileStr(M) {
  var p = String.fromCharCode(M.charCodeAt(0) + M.length);
  for (var s = 1; s < M.length; s++) {
    p += String.fromCharCode(M.charCodeAt(s) + M.charCodeAt(s - 1));
  }
  return escape(p);
}
function uncompileStr(M) {
  M = unescape(M);
  var p = String.fromCharCode(M.charCodeAt(0) - M.length);
  for (var s = 1; s < M.length; s++) {
    p += String.fromCharCode(M.charCodeAt(s) - p.charCodeAt(s - 1));
  }
  return p;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(M) {
  return new Promise((p, s) => {
    const J = "https://v1.hitokoto.cn/?c=e",
      C = {
        accept: "application/json"
      };
    const S = {
      url: J,
      headers: C
    };
    $.get(S, async (R, n, H) => {
      let E = JSON.parse(H),
        D = E.hitokoto;
      contents[M] = D + " " + D;
      p();
    });
  });
}
function getTime_8() {
  return new Promise((a, p) => {
    const J = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      C = {
        url: J
      };
    $.get(C, async (v, R, n) => {
      a(n);
    });
  });
}
function message() {
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(M) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, M);
      } else {
        $.msg($.name, "", M);
      }
    } else {
      $.log(M);
    }
  }
}
async function wxPush(M, a, p) {
  return new Promise((w, J) => {
    const S = "https://wxpusher.zjiecode.com/api/send/message",
      v = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: a,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [p],
        verifyPay: false
      };
    const n = {
      "Content-Type": "application/json"
    };
    const H = {
      url: S,
      headers: n,
      body: JSON.stringify(v)
    };
    $.post(H, async (f, Q, E) => {
      w();
    });
  });
}
function Env(M, a) {
  class w {
    constructor(J) {
      this.env = J;
    }
    send(J, C = "GET") {
      J = "string" == typeof J ? {
        url: J
      } : J;
      let v = this.get;
      "POST" === C && (v = this.post);
      return new Promise((R, n) => {
        v.call(this, J, (Q, E, D) => {
          Q ? n(Q) : R(E);
        });
      });
    }
    get(J) {
      return this.send.call(this.env, J);
    }
    post(J) {
      return this.send.call(this.env, J, "POST");
    }
  }
  return new class {
    constructor(J, C) {
      const v = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const R = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = v;
      this.logLevelPrefixs = R;
      this.logLevel = "info";
      this.name = J;
      this.http = new w(this);
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
    toObj(J, C = null) {
      const S = {};
      S.JcFgy = "data:";
      try {
        return JSON.parse(J);
      } catch {
        return C;
      }
    }
    toStr(J, C = null, ...S) {
      try {
        return JSON.stringify(J, ...S);
      } catch {
        return C;
      }
    }
    getjson(J, C) {
      let R = C;
      if (this.getdata(J)) {
        try {
          R = JSON.parse(this.getdata(J));
        } catch {}
      }
      return R;
    }
    setjson(J, C) {
      try {
        return this.setdata(JSON.stringify(J), C);
      } catch {
        return !1;
      }
    }
    getScript(J) {
      return new Promise(v => {
        const n = {
          url: J
        };
        this.get(n, (H, f, Q) => v(Q));
      });
    }
    runScript(J, C) {
      return new Promise(v => {
        let f = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        f = f ? f.replace(/\n/g, "").trim() : f;
        let Q = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        Q = Q ? 1 * Q : 20;
        Q = C && C.timeout ? C.timeout : Q;
        const E = {
          script_text: J,
          mock_type: "cron",
          timeout: Q
        };
        const [D, T] = f.split("@"),
          B = {
            url: "http://" + T + "/v1/scripting/evaluate",
            body: E,
            headers: {
              "X-Key": D,
              Accept: "*/*"
            },
            timeout: Q
          };
        this.post(B, (q, P, Y) => v(Y));
      }).catch(v => this.logErr(v));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const C = this.path.resolve(this.dataFile),
          S = this.path.resolve(process.cwd(), this.dataFile),
          v = this.fs.existsSync(C),
          R = !v && this.fs.existsSync(S);
        if (!v && !R) {
          return {};
        }
        {
          const H = v ? C : S;
          try {
            return JSON.parse(this.fs.readFileSync(H));
          } catch (Q) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          v = this.path.resolve(process.cwd(), this.dataFile),
          R = this.fs.existsSync(S),
          n = !R && this.fs.existsSync(v),
          H = JSON.stringify(this.data);
        R ? this.fs.writeFileSync(S, H) : n ? this.fs.writeFileSync(v, H) : this.fs.writeFileSync(S, H);
      }
    }
    lodash_get(J, C, S) {
      const v = C.replace(/\[(\d+)\]/g, ".$1").split(".");
      let R = J;
      for (const n of v) if (R = Object(R)[n], void 0 === R) {
        return S;
      }
      return R;
    }
    lodash_set(J, C, S) {
      Object(J) !== J || (Array.isArray(C) || (C = C.toString().match(/[^.[\]]+/g) || []), C.slice(0, -1).reduce((v, R, n) => Object(v[R]) === v[R] ? v[R] : v[R] = Math.abs(C[n + 1]) >> 0 == +C[n + 1] ? [] : {}, J)[C[C.length - 1]] = S);
      return J;
    }
    getdata(J) {
      let C = this.getval(J);
      if (/^@/.test(J)) {
        const [, v, R] = /^@(.*?)\.(.*?)$/.exec(J),
          n = v ? this.getval(v) : "";
        if (n) {
          try {
            const H = JSON.parse(n);
            C = H ? this.lodash_get(H, R, "") : C;
          } catch (Q) {
            C = "";
          }
        }
      }
      return C;
    }
    setdata(J, C) {
      let R = !1;
      if (/^@/.test(C)) {
        const [, n, H] = /^@(.*?)\.(.*?)$/.exec(C),
          f = this.getval(n),
          Q = n ? "null" === f ? null : f || "{}" : "{}";
        try {
          const D = JSON.parse(Q);
          this.lodash_set(D, H, J);
          R = this.setval(JSON.stringify(D), n);
        } catch (T) {
          const B = {};
          this.lodash_set(B, H, J);
          R = this.setval(JSON.stringify(B), n);
        }
      } else {
        R = this.setval(J, C);
      }
      return R;
    }
    getval(J) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(J);
        case "Quantumult X":
          return $prefs.valueForKey(J);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[J];
        default:
          return this.data && this.data[J] || null;
      }
    }
    setval(J, C) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(J, C);
        case "Quantumult X":
          return $prefs.setValueForKey(J, C);
        case "Node.js":
          this.data = this.loaddata();
          this.data[C] = J;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[C] || null;
      }
    }
    initGotEnv(J) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      J && (J.headers = J.headers ? J.headers : {}, J && (J.headers = J.headers ? J.headers : {}, void 0 === J.headers.cookie && void 0 === J.headers.Cookie && void 0 === J.cookieJar && (J.cookieJar = this.ckjar)));
    }
    get(J, C = () => {}) {
      const R = {
        redirection: !1
      };
      switch (J.headers && (delete J.headers["Content-Type"], delete J.headers["Content-Length"], delete J.headers["content-type"], delete J.headers["content-length"]), J.params && (J.url += "?" + this.queryStr(J.params)), void 0 === J.followRedirect || J.followRedirect || ((this.isSurge() || this.isLoon()) && (J["auto-redirect"] = !1), this.isQuanX() && (J.opts ? J.opts.redirection = !1 : J.opts = R)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const n = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (J.headers = J.headers || {}, Object.assign(J.headers, n));
          $httpClient.get(J, (Q, E, D) => {
            !Q && E && (E.body = D, E.statusCode = E.status ? E.status : E.statusCode, E.status = E.statusCode);
            C(Q, E, D);
          });
          break;
        case "Quantumult X":
          const H = {};
          H.hints = !1;
          this.isNeedRewrite && (J.opts = J.opts || {}, Object.assign(J.opts, H));
          $task.fetch(J).then(Q => {
            const {
                statusCode: E,
                statusCode: D,
                headers: T,
                body: B,
                bodyBytes: q
              } = Q,
              P = {
                status: E,
                statusCode: D,
                headers: T,
                body: B,
                bodyBytes: q
              };
            C(null, P, B, q);
          }, Q => C(Q && Q.error || "UndefinedError"));
          break;
        case "Node.js":
          let f = require("iconv-lite");
          this.initGotEnv(J);
          this.got(J).on("redirect", (Q, E) => {
            try {
              if (Q.headers["set-cookie"]) {
                const B = Q.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                B && this.ckjar.setCookieSync(B, null);
                E.cookieJar = this.ckjar;
              }
            } catch (q) {
              this.logErr(q);
            }
          }).then(Q => {
            const {
                statusCode: D,
                statusCode: T,
                headers: B,
                rawBody: q
              } = Q,
              P = f.decode(q, this.encoding),
              Y = {
                status: D,
                statusCode: T,
                headers: B,
                rawBody: q,
                body: P
              };
            C(null, Y, P);
          }, Q => {
            const {
              message: D,
              response: T
            } = Q;
            C(D, T, T && f.decode(T.rawBody, this.encoding));
          });
          break;
      }
    }
    post(J, C = () => {}) {
      const v = J.method ? J.method.toLocaleLowerCase() : "post",
        R = {
          redirection: !1
        };
      switch (J.body && J.headers && !J.headers["Content-Type"] && !J.headers["content-type"] && (J.headers["content-type"] = "application/x-www-form-urlencoded"), J.headers && (delete J.headers["Content-Length"], delete J.headers["content-length"]), void 0 === J.followRedirect || J.followRedirect || ((this.isSurge() || this.isLoon()) && (J["auto-redirect"] = !1), this.isQuanX() && (J.opts ? J.opts.redirection = !1 : J.opts = R)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const n = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (J.headers = J.headers || {}, Object.assign(J.headers, n));
          $httpClient[v](J, (D, T, B) => {
            !D && T && (T.body = B, T.statusCode = T.status ? T.status : T.statusCode, T.status = T.statusCode);
            C(D, T, B);
          });
          break;
        case "Quantumult X":
          const H = {
            hints: !1
          };
          J.method = v;
          this.isNeedRewrite && (J.opts = J.opts || {}, Object.assign(J.opts, H));
          $task.fetch(J).then(D => {
            const {
                statusCode: q,
                statusCode: P,
                headers: Y,
                body: d,
                bodyBytes: U
              } = D,
              x = {
                status: q,
                statusCode: P,
                headers: Y,
                body: d,
                bodyBytes: U
              };
            C(null, x, d, U);
          }, D => C(D && D.error || "UndefinedError"));
          break;
        case "Node.js":
          let f = require("iconv-lite");
          this.initGotEnv(J);
          const {
            url: Q,
            ...E
          } = J;
          this.got[v](Q, E).then(D => {
            const {
                statusCode: T,
                statusCode: B,
                headers: q,
                rawBody: P
              } = D,
              Y = f.decode(P, this.encoding),
              d = {
                status: T,
                statusCode: B,
                headers: q,
                rawBody: P,
                body: Y
              };
            C(null, d, Y);
          }, D => {
            const {
              message: T,
              response: B
            } = D;
            C(T, B, B && f.decode(B.rawBody, this.encoding));
          });
          break;
      }
    }
    time(J, C = null) {
      const S = C ? new Date(C) : new Date();
      let v = {
        "M+": S.getMonth() + 1,
        "d+": S.getDate(),
        "H+": S.getHours(),
        "m+": S.getMinutes(),
        "s+": S.getSeconds(),
        "q+": Math.floor((S.getMonth() + 3) / 3),
        S: S.getMilliseconds()
      };
      /(y+)/.test(J) && (J = J.replace(RegExp.$1, (S.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let R in v) new RegExp("(" + R + ")").test(J) && (J = J.replace(RegExp.$1, 1 == RegExp.$1.length ? v[R] : ("00" + v[R]).substr(("" + v[R]).length)));
      return J;
    }
    queryStr(J) {
      let C = "";
      for (const S in J) {
        let v = J[S];
        null != v && "" !== v && ("object" == typeof v && (v = JSON.stringify(v)), C += S + "=" + v + "&");
      }
      C = C.substring(0, C.length - 1);
      return C;
    }
    msg(J = M, C = "", S = "", v = {}) {
      const n = H => {
        const {
          $open: f,
          $copy: Q,
          $media: E,
          $mediaMime: D
        } = H;
        switch (typeof H) {
          case void 0:
            return H;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const T = {
                  url: H
                };
                return T;
              case "Loon":
              case "Shadowrocket":
                return H;
              case "Quantumult X":
                const B = {
                  "open-url": H
                };
                return B;
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
                  const q = {};
                  let P = H.openUrl || H.url || H["open-url"] || f;
                  P && Object.assign(q, {
                    action: "open-url",
                    url: P
                  });
                  let Y = H["update-pasteboard"] || H.updatePasteboard || Q;
                  if (Y && Object.assign(q, {
                    action: "clipboard",
                    text: Y
                  }), E) {
                    let U, x, k;
                    if (E.startsWith("http")) {
                      U = E;
                    } else {
                      if (E.startsWith("data:")) {
                        const [y] = E.split(";"),
                          [, j] = E.split(",");
                        x = j;
                        k = y.replace("data:", "");
                      } else {
                        x = E;
                        k = (K => {
                          const G = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var W in G) if (0 === K.indexOf(W)) {
                            return G[W];
                          }
                          return null;
                        })(E);
                      }
                    }
                    Object.assign(q, {
                      "media-url": U,
                      "media-base64": x,
                      "media-base64-mime": D ?? k
                    });
                  }
                  const d = {
                    "auto-dismiss": H["auto-dismiss"],
                    sound: H.sound
                  };
                  Object.assign(q, d);
                  return q;
                }
              case "Loon":
                {
                  const K = {};
                  let G = H.openUrl || H.url || H["open-url"] || f;
                  G && Object.assign(K, {
                    openUrl: G
                  });
                  let z = H.mediaUrl || H["media-url"];
                  E?.["startsWith"]("http") && (z = E);
                  z && Object.assign(K, {
                    mediaUrl: z
                  });
                  console.log(JSON.stringify(K));
                  return K;
                }
              case "Quantumult X":
                {
                  const W = {};
                  let V = H["open-url"] || H.url || H.openUrl || f;
                  V && Object.assign(W, {
                    "open-url": V
                  });
                  let F = H["media-url"] || H.mediaUrl;
                  E?.["startsWith"]("http") && (F = E);
                  F && Object.assign(W, {
                    "media-url": F
                  });
                  let m = H["update-pasteboard"] || H.updatePasteboard || Q;
                  m && Object.assign(W, {
                    "update-pasteboard": m
                  });
                  console.log(JSON.stringify(W));
                  return W;
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
            $notification.post(J, C, S, n(v));
            break;
          case "Quantumult X":
            $notify(J, C, S, n(v));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let H = ["", "==============📣系统通知📣=============="];
        H.push(J);
        C && H.push(C);
        S && H.push(S);
        console.log(H.join("\n"));
        this.logs = this.logs.concat(H);
      }
    }
    debug(...J) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (J.length > 0 && (this.logs = [...this.logs, ...J]), console.log("" + this.logLevelPrefixs.debug + J.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    info(...J) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (J.length > 0 && (this.logs = [...this.logs, ...J]), console.log("" + this.logLevelPrefixs.info + J.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    warn(...J) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (J.length > 0 && (this.logs = [...this.logs, ...J]), console.log("" + this.logLevelPrefixs.warn + J.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    error(...J) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (J.length > 0 && (this.logs = [...this.logs, ...J]), console.log("" + this.logLevelPrefixs.error + J.map(C => C ?? String(C)).join(this.logSeparator)));
    }
    log(...J) {
      J.length > 0 && (this.logs = [...this.logs, ...J]);
      console.log(J.map(C => C ?? String(C)).join(this.logSeparator));
    }
    logErr(J, C) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", C, J);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", C, void 0 !== J.message ? J.message : J, J.stack);
          break;
      }
    }
    wait(J) {
      return new Promise(C => setTimeout(C, J));
    }
    done(J = {}) {
      const C = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + C + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(J);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(M, a);
}