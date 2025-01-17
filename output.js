//Fri Jan 17 2025 08:36:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("顺义创城"),
  version = "V1.0.0",
  appName = "syccapp";
let syccapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", W => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "";
const COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("syccactivecode") || 0,
  syccuserck = $.getval("syccuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  sycclogs = [];
let wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  accountErrors = [],
  taskScores = [3, 5, 10, 3, 5, 10, 1, 2, 1],
  taskNames = ["消消卡第一关", "消消卡第二关", "消消卡第三关", "创城拼图第一关", "创城拼图第二关", "创城拼图第三关", "关注或点赞", "浏览创城动态", "分享朋友圈"],
  taskIds = [12, 16, 17, 29, 30, 31, 15, 3, 7, 5, 18, 14],
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
  process.env.SYCCAPP ? syccapp = JSON.parse(process.env.SYCCAPP) : syccapp = COOKIES.SYCC;
  userId = process.env.TGUSERID;
  activeCode = process.env.SYCCACTIVECODE;
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
    if (!syccapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let e = false;
    const a = apiHost.split("&"),
      y = a.length;
    for (let S = 0; S < y; S++) {
      if ($.isNode()) {
        e = await checkAddress("" + a[S], 2500);
      } else {
        $.isSurge() || $.isLoon() ? e = await httpClientRequest("" + a[S], 2500) : e = await fetchRequest("" + a[S], 2500);
      }
      if (e == true) {
        apiHost = a[S];
        $.log("📢 接口" + (S + 1) + "[" + a[S] + "]服务器接口正常! 🎉");
        break;
      }
      if (S == y - 1 && e == false) {
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
        M = new Date().getTime();
      if (M > q) {
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
        let P = new Date(vipDate).getTime(),
          D = new Date().getTime();
        if (D > P) {
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
    if (syccapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (syccapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + syccapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + syccapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (syccapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + syccapp.length + "个账号");
    let c = [],
      H = syccapp.length,
      X = 0;
    if ($.isNode() && process.env.SYCC_THREAD_COUNT) {
      X = parseInt(process.env.SYCC_THREAD_COUNT);
    } else {
      X = H;
    }
    let n = syccapp.length;
    if (X >= H) {
      X = H;
      n = 1;
      $.log("📢 你设置的线程数是" + X + "，账号个数是" + H + "，" + n + "次可全部跑完。");
      for (let J4 = 0; J4 < syccapp.length; J4++) {
        c.push(runMultiTasks(J4));
        sycclogs[J4] = "";
        if ($.isNode()) {
          channels_status[J4] = 0;
          accountErrors[J4] = false;
          await init_ws(J4);
        } else {
          channels_status[J4] = 1;
        }
      }
      await Promise.allSettled(c).then(J8 => {
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let JY = 0; JY < syccapp.length; JY++) {
          $.log(sycclogs[JY]);
          sendlogs += sycclogs[JY];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      n = Math.ceil(H / X);
      $.log("📢 你设置的线程数是" + X + "，账号个数是" + H + "，计算后分" + n + "次执行，一次可执行" + X + "个账号，最后一次如果不够" + X + "个账号，剩多少个账号就跑几个账号。");
      for (let J8 = 0; J8 < n; J8++) {
        for (let JJ = J8 * X; JJ < X * (J8 + 1) && JJ < H; JJ++) {
          c.push(runMultiTasks(JJ));
          sycclogs[JJ] = "";
          accountErrors[JJ] = false;
          channels_status[JJ] = 1;
          await init_ws(JJ);
        }
        await Promise.allSettled(c).then(Jd => {
          c = [];
          if (J8 == n - 1) {
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let JE = 0; JE < syccapp.length; JE++) {
              $.log(sycclogs[JE]);
              sendlogs += sycclogs[JE];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(W => $.logErr(W)).finally(() => $.done());
async function runMultiTasks(W) {
  return new Promise((e, a) => {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 开始执行 working......");
    runSubTask(e, W);
  });
}
async function init_ws(W) {
  if ($.isNode()) {
    if (reconectCounts[W] > 0) {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[W] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[W].on("open", function a() {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签名通道已连接");
    });
    wss[W].on("close", function y() {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[W].on("error", function c() {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[W] = 1;
      reconectCounts[W]++;
      if (reconectCounts[W] <= 3) {
        init_ws(W);
      }
    });
  }
}
async function runSubTask(W, E) {
  await userInfo(E);
  !syccapp[E].money ? await exchange(E, "1788826595521810434") : await exchange(E, "1562334019131645953");
  await signin(E);
  for (let c = 0; c < taskNames.length; c++) {
    let X = taskNames[c],
      h = taskIds[c],
      S = taskScores[c];
    await addScore(E, S, h, X);
    await $.wait(randomNum(3000, 5000));
  }
  $.isNode() && (await wss[E].close());
  await runComplete(appName, userId);
  W();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const a = $request.body;
    let y = syccuserck - 1;
    if (syccapp[y]) {
      syccapp[y].token_body = a;
    } else {
      const H = {
        token_body: a
      };
      syccapp[y] = H;
    }
    $.setdata(JSON.stringify(syccapp, null, 2), "syccapp");
    $.msg($.name, "快音账号" + (y + 1) + "Token获取成功！🎉");
  }
}
async function userInfo(W) {
  const e = "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/userInfo";
  let a = "";
  await getReqObject(e, a, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let y = httpResult;
  if (y != null && y.code == 200) {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 用户名=> " + y.result.phone);
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 用户名=> " + y.result.phone + "\n";
    syccapp[W].mobile = y.result.phone;
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 积分=> " + y.result.score);
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 积分=> " + y.result.score + "\n";
  } else {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 用户名信息=> " + y.message);
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 用户名信息=> " + y.message + "\n";
  }
}
async function signin(W) {
  const e = "https://admin.shunyi.wenming.city/jeecg-boot/applet/ccScoreRecord/signIn";
  let a = "";
  await getReqObject(e, a, W);
  await httpRequest("post", requestObjects[W], printCaller());
  let y = httpResult;
  if (y != null && y.code == 200) {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到任务完成");
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到任务完成\n";
  } else {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到任务=> " + y.message);
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 完成任务=> " + y.message + "\n";
  }
}
async function addScore(W, E, e, a) {
  const c = "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=" + E + "&type=" + e;
  let H = "";
  await getReqObject(c, H, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let X = httpResult;
  if (X != null && X.code == 200) {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 完成任务(" + a + ")获得=> " + E + "积分");
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 完成任务(" + a + ")获得=> " + E + "积分\n";
  } else {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 完成任务(" + a + ")=> " + X.message);
    sycclogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 完成任务(" + a + ")=> " + X.message + "\n";
  }
}
async function exchange(E, e) {
  const y = "https://admin.shunyi.wenming.city/jeecg-boot/applet/award/exchangeAward",
    c = {
      awardIds: [e],
      phone: syccapp[E].mobile
    };
  await getReqObject(y, JSON.stringify(c), E);
  await httpRequest("post", requestObjects[E], printCaller());
  let X = httpResult;
  if (X != null && X.code == 200) {
    $.log("[账号" + (E + 1 < 10 ? "0" + (E + 1) : E + 1) + "]: 兑换=> " + X.message);
    sycclogs[E] += "[账号" + (E + 1 < 10 ? "0" + (E + 1) : E + 1) + "]: 兑换=> " + X.message + "\n";
  } else {
    $.log("[账号" + (E + 1 < 10 ? "0" + (E + 1) : E + 1) + "]: 兑换=> " + X.message);
    sycclogs[E] += "[账号" + (E + 1 < 10 ? "0" + (E + 1) : E + 1) + "]: 兑换=> " + X.message + "\n";
  }
}
function getScriptAuth(W, E, e) {
  return new Promise((y, c) => {
    const X = apiHost + "/script/permissions/lastest",
      n = {
        appName: W,
        userId: E,
        activityCode: e,
        version: version
      };
    const S = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: X,
      headers: S,
      body: JSON.stringify(n)
    };
    $.post(l, async (i, p, v) => {
      if (v && v != null && v.replace(/\"/g, "").length > 50) {
        const A = v.replace(/\"/g, "").slice(34),
          L = new Base64();
        result = JSON.parse(L.decode(A));
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
        } catch (M) {
          $.log(M);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      y();
    });
  });
}
function runComplete(W, E) {
  return new Promise((a, y) => {
    const X = apiHost + "/script/run/add",
      n = {
        appName: W,
        userId: E,
        activityCode: activeCode,
        version: version
      };
    const S = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: X,
      headers: S,
      body: JSON.stringify(n)
    };
    $.post(l, async (i, p, v) => {
      a();
    });
  });
}
function checkAddress(W, E) {
  return new Promise((a, y) => {
    const H = setTimeout(() => {
        a(false);
      }, E),
      X = http.get(W, n => {
        clearTimeout(H);
        if (n.statusCode === 404) {
          a(true);
        } else {
          a(false);
        }
      });
    X.on("error", n => {
      clearTimeout(H);
      a(false);
    });
    X.on("timeout", () => {
      X.abort();
      y(new Error("请求超时"));
    });
  });
}
async function fetchRequest(W, E = 3000) {
  return new Promise((a, y) => {
    const X = {
      url: W + "/docs"
    };
    setTimeout(() => {
      a(false);
    }, E);
    $.get(X, async (n, h, S) => {
      if (h.status == 401) {
        a(true);
      } else {
        a(false);
      }
    });
  });
}
async function httpClientRequest(W, E = 3000) {
  return new Promise((a, y) => {
    const X = {
      url: W + "/"
    };
    setTimeout(() => {
      a(false);
    }, E);
    $httpClient.get(X, async (n, h, S) => {
      if (S == "{\"detail\":\"Not Found\"}") {
        a(true);
      } else {
        a(false);
      }
    });
  });
}
async function redisGet(W, E, e) {
  return new Promise((y, c) => {
    const X = apiHost + "/redis/hash/get/" + E + "/" + e,
      n = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const h = {
      url: X,
      headers: n
    };
    $.get(h, async (l, p, v) => {
      const A = v.replace(/\"/g, "");
      answerTexts[W] = A;
      y();
    });
  });
}
function redisSet(W, E, e) {
  return new Promise((y, c) => {
    const n = apiHost + "/redis/hash/set",
      h = {
        key: W,
        hashKey: E,
        hashValue: e
      };
    const l = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const i = {
      url: n,
      headers: l,
      body: JSON.stringify(h)
    };
    $.post(i, async (p, v, T) => {
      y();
    });
  });
}
function redisPop(W) {
  return new Promise((e, a) => {
    const H = apiHost + "/redis/set/pop/" + W,
      X = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const n = {
      url: H,
      headers: X
    };
    $.get(n, async (S, l, i) => {
      const v = i.replace(/\"/g, "");
      popCookie = v;
      e();
    });
  });
}
async function getReqObject(e, a, y) {
  let H = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.55(0x1800372c) NetType/WIFI Language/zh_CN";
  if (syccapp[y].ua && syccapp[y].ua != "") {
    H = syccapp[y].ua;
  }
  let X = getHostname(e);
  const n = {};
  n["Content-Type"] = "application/json";
  n["User-Agent"] = H;
  n["X-Applet-Token"] = syccapp[y].token;
  n.Host = X;
  const h = {};
  h.url = e;
  h.headers = n;
  let S = h;
  a && (S.body = a, S.headers["Content-Length"] = a.length);
  requestObjects[y] = S;
  return S;
}
function getReqObject_(e, a, y) {
  let H = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (syccapp[y].ua && syccapp[y].ua != "") {
    H = syccapp[y].ua;
  }
  let X = getHostname(e);
  const n = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": H,
    Authorization: syccapp[y].auth,
    Host: X
  };
  const h = {
    url: e,
    headers: n
  };
  if (a) {
    h.body = a;
  }
  requestObjects[y] = h;
  return h;
}
async function httpRequest(W, E, e) {
  httpResult = null;
  return new Promise(y => {
    $[W](E, async (H, X, n) => {
      try {
        if (H) {
          $.log(e + ": " + W + "请求失败");
          $.log(JSON.stringify(H));
          $.logErr(H);
        } else {
          if (safeGet(n)) {
            httpResult = JSON.parse(n);
          } else {
            const v = new URL(E.url);
            $.log(v.pathname + "发起" + W + "请求时，出现错误，请处理");
          }
        }
      } catch (L) {
        $.logErr(L, X);
      } finally {
        y(httpResult);
      }
    });
  });
}
async function selectChannel(W, E) {
  channels_status[W] == 0 ? await getSign_(W, E) : await getSign(W, E);
}
function getSign_(W, E) {
  return new Promise((a, y) => {
    function H(X) {
      let h = X.toString("utf8");
      requestSigns[W] = h;
      wss[W].removeListener("message", H);
      a(h);
    }
    wss[W].on("message", H);
    if (wss[W].readyState === 1) {
      const n = {
        method: appName,
        params: {}
      };
      n.params.content = E;
      n.params.appName = appName;
      n.params.uuid = userId;
      wss[W].send(JSON.stringify(n), h => {
        if (h) {
          y(h);
        }
      });
    } else {
      a(getSign(W, E));
      wss[W].removeListener("message", H);
    }
  });
}
function getSign(W, E) {
  return new Promise((a, y) => {
    const X = apiHost + "/sign/sycc",
      n = {
        content: E,
        appName: appName,
        uuid: userId
      };
    const S = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: X,
      headers: S,
      body: JSON.stringify(n)
    };
    $.post(l, async (p, v, T) => {
      const A = T.replace(/\"/g, "");
      requestSigns[W] = A;
      a();
    });
  });
}
function sortUrlParams(W, E, e) {
  const y = url2obj(W);
  E.forEach(X => {
    delete y[X];
  });
  Object.assign(y, e);
  const c = Object.keys(y).sort();
  const H = c.map(X => X + "=" + y[X]).join("&");
  return H;
}
function url2obj(W) {
  W = W.replace(/\"/g, "");
  var e;
  var a = {};
  var y = W.slice(W.indexOf("?") + 1).split("&");
  for (var c = 0; c < y.length; c++) {
    e = y[c].split("=");
    a[e[0]] = e[1];
  }
  return a;
}
function convertStringToJson(E) {
  const y = E.replace(/[{} ]/g, ""),
    c = y.split(","),
    H = {};
  c.forEach(X => {
    const [h, S] = X.split("=");
    H[h] = S;
  });
  return H;
}
function getHostname(W) {
  let e = W.substr(W.indexOf("//") + 2);
  let a = e.substr(0, e.indexOf("/"));
  let y = "",
    c = a.indexOf(":");
  if (c > 0) {
    y = a.substr(0, c);
  } else {
    y = a;
  }
  return y;
}
function calculateTimeDifference(E, e) {
  var h = new Date(E);
  var n = new Date(e);
  var S = n - h;
  var X = Math.floor(S / 1000);
  return X;
}
function cutString(W, E) {
  if (W.length * 2 <= E) {
    return W;
  }
  var a = 0,
    y = "";
  for (var c = 0; c < W.length; c++) {
    y = y + W.charAt(c);
    if (W.charCodeAt(c) > 128) {
      a = a + 2;
      if (a >= E) {
        return y.substring(0, y.length - 1) + "...";
      }
    } else {
      a = a + 1;
      if (a >= E) {
        return y.substring(0, y.length - 2) + "...";
      }
    }
  }
  return y;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(W) {
  try {
    if (typeof JSON.parse(W) == "object") {
      return true;
    }
  } catch (c) {
    console.log(c);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(W) {
  var e = Object.keys(W).map(function (a) {
    return encodeURIComponent(a) + "=" + encodeURIComponent(W[a]);
  }).join("&");
  return e;
}
function compileStr(W) {
  var e = String.fromCharCode(W.charCodeAt(0) + W.length);
  for (var a = 1; a < W.length; a++) {
    e += String.fromCharCode(W.charCodeAt(a) + W.charCodeAt(a - 1));
  }
  return escape(e);
}
function uncompileStr(W) {
  W = unescape(W);
  var e = String.fromCharCode(W.charCodeAt(0) - W.length);
  for (var a = 1; a < W.length; a++) {
    e += String.fromCharCode(W.charCodeAt(a) - e.charCodeAt(a - 1));
  }
  return e;
}
function randomNum(W, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * W + 1);
      break;
    case 2:
      return parseInt(Math.random() * (E - W + 1) + W);
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
  function E() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return E() + E() + "-" + E() + "-" + E() + "-" + E() + "-" + E() + E() + E();
}
function phone_num(W) {
  if (W.length == 11) {
    let a = W.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return a;
  } else {
    return W;
  }
}
function txt_api(W) {
  return new Promise((e, a) => {
    const H = "https://v1.hitokoto.cn/?c=e",
      X = {
        accept: "application/json"
      };
    const n = {
      url: H,
      headers: X
    };
    $.get(n, async (S, l, p) => {
      let v = JSON.parse(p),
        T = v.hitokoto;
      contents[W] = T + " " + T;
      e();
    });
  });
}
function getTime_8() {
  return new Promise((E, e) => {
    const y = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      c = {
        url: y
      };
    $.get(c, async (X, n, h) => {
      E(h);
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
async function sendMsg(W) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, W);
      } else {
        $.msg($.name, "", W);
      }
    } else {
      $.log(W);
    }
  }
}
async function wxPush(W, E, e) {
  return new Promise((y, c) => {
    const H = "https://wxpusher.zjiecode.com/api/send/message",
      X = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: E,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [e],
        verifyPay: false
      };
    const h = {
      "Content-Type": "application/json"
    };
    const S = {
      url: H,
      headers: h,
      body: JSON.stringify(X)
    };
    $.post(S, async (l, p, v) => {
      y();
    });
  });
}
function randomString(W, E) {
  E = E || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let a = "";
  for (let y = 0; y < W; y++) {
    let H = Math.floor(Math.random() * E.length);
    a += E.substring(H, H + 1);
  }
  return a;
}
function MD5_Encrypt(W) {
  function S(JL, JB) {
    return JL << JB | JL >>> 32 - JB;
  }
  function T(JL, JB) {
    var JN, Jq, JM, JR, Jx;
    JM = 2147483648 & JL;
    JR = 2147483648 & JB;
    JN = 1073741824 & JL;
    Jq = 1073741824 & JB;
    Jx = (1073741823 & JL) + (1073741823 & JB);
    return JN & Jq ? 2147483648 ^ Jx ^ JM ^ JR : JN | Jq ? 1073741824 & Jx ? 3221225472 ^ Jx ^ JM ^ JR : 1073741824 ^ Jx ^ JM ^ JR : Jx ^ JM ^ JR;
  }
  function R(JL, JB, JN) {
    return JL & JB | ~JL & JN;
  }
  function Q(JL, JB, JN) {
    return JL & JN | JB & ~JN;
  }
  function V(JL, JB, JN) {
    return JL ^ JB ^ JN;
  }
  function P(JL, JB, JN) {
    return JB ^ (JL | ~JN);
  }
  function Z(JL, JB, JN, Jq, JM, JR, Jx) {
    JL = T(JL, T(T(R(JB, JN, Jq), JM), Jx));
    return T(S(JL, JR), JB);
  }
  function J0(JL, JB, JN, Jq, JM, JR, Jx) {
    JL = T(JL, T(T(Q(JB, JN, Jq), JM), Jx));
    return T(S(JL, JR), JB);
  }
  function J1(JL, JB, JN, Jq, JM, JR, Jx) {
    JL = T(JL, T(T(V(JB, JN, Jq), JM), Jx));
    return T(S(JL, JR), JB);
  }
  function J2(JL, JB, JN, Jq, JM, JR, Jx) {
    JL = T(JL, T(T(P(JB, JN, Jq), JM), Jx));
    return T(S(JL, JR), JB);
  }
  function J3(JL) {
    for (var JB, JN = JL.length, Jq = JN + 8, JM = (Jq - Jq % 64) / 64, JR = 16 * (JM + 1), Jx = new Array(JR - 1), Jz = 0, JQ = 0; JN > JQ;) {
      JB = (JQ - JQ % 4) / 4;
      Jz = JQ % 4 * 8;
      Jx[JB] = Jx[JB] | JL.charCodeAt(JQ) << Jz;
      JQ++;
    }
    JB = (JQ - JQ % 4) / 4;
    Jz = JQ % 4 * 8;
    Jx[JB] = Jx[JB] | 128 << Jz;
    Jx[JR - 2] = JN << 3;
    Jx[JR - 1] = JN >>> 29;
    return Jx;
  }
  function J4(JL) {
    var JB,
      JN,
      Jq = "",
      JM = "";
    for (JN = 0; 3 >= JN; JN++) {
      JB = JL >>> 8 * JN & 255;
      JM = "0" + JB.toString(16);
      Jq += JM.substr(JM.length - 2, 2);
    }
    return Jq;
  }
  function J5(JL) {
    JL = JL.replace(/\r\n/g, "\n");
    for (var JN = "", Jq = 0; Jq < JL.length; Jq++) {
      var JM = JL.charCodeAt(Jq);
      128 > JM ? JN += String.fromCharCode(JM) : JM > 127 && 2048 > JM ? (JN += String.fromCharCode(JM >> 6 | 192), JN += String.fromCharCode(63 & JM | 128)) : (JN += String.fromCharCode(JM >> 12 | 224), JN += String.fromCharCode(JM >> 6 & 63 | 128), JN += String.fromCharCode(63 & JM | 128));
    }
    return JN;
  }
  var J6,
    J7,
    J8,
    J9,
    JJ,
    JY,
    Ju,
    Jr,
    Jd,
    JU = [],
    JW = 7,
    JE = 12,
    Je = 17,
    Ja = 22,
    Jy = 5,
    Jc = 9,
    JH = 14,
    JX = 20,
    Jn = 4,
    Jh = 11,
    JS = 16,
    Jl = 23,
    Ji = 6,
    Jp = 10,
    Jv = 15,
    JT = 21;
  for (W = J5(W), JU = J3(W), JY = 1732584193, Ju = 4023233417, Jr = 2562383102, Jd = 271733878, J6 = 0; J6 < JU.length; J6 += 16) {
    J7 = JY;
    J8 = Ju;
    J9 = Jr;
    JJ = Jd;
    JY = Z(JY, Ju, Jr, Jd, JU[J6 + 0], JW, 3614090360);
    Jd = Z(Jd, JY, Ju, Jr, JU[J6 + 1], JE, 3905402710);
    Jr = Z(Jr, Jd, JY, Ju, JU[J6 + 2], Je, 606105819);
    Ju = Z(Ju, Jr, Jd, JY, JU[J6 + 3], Ja, 3250441966);
    JY = Z(JY, Ju, Jr, Jd, JU[J6 + 4], JW, 4118548399);
    Jd = Z(Jd, JY, Ju, Jr, JU[J6 + 5], JE, 1200080426);
    Jr = Z(Jr, Jd, JY, Ju, JU[J6 + 6], Je, 2821735955);
    Ju = Z(Ju, Jr, Jd, JY, JU[J6 + 7], Ja, 4249261313);
    JY = Z(JY, Ju, Jr, Jd, JU[J6 + 8], JW, 1770035416);
    Jd = Z(Jd, JY, Ju, Jr, JU[J6 + 9], JE, 2336552879);
    Jr = Z(Jr, Jd, JY, Ju, JU[J6 + 10], Je, 4294925233);
    Ju = Z(Ju, Jr, Jd, JY, JU[J6 + 11], Ja, 2304563134);
    JY = Z(JY, Ju, Jr, Jd, JU[J6 + 12], JW, 1804603682);
    Jd = Z(Jd, JY, Ju, Jr, JU[J6 + 13], JE, 4254626195);
    Jr = Z(Jr, Jd, JY, Ju, JU[J6 + 14], Je, 2792965006);
    Ju = Z(Ju, Jr, Jd, JY, JU[J6 + 15], Ja, 1236535329);
    JY = J0(JY, Ju, Jr, Jd, JU[J6 + 1], Jy, 4129170786);
    Jd = J0(Jd, JY, Ju, Jr, JU[J6 + 6], Jc, 3225465664);
    Jr = J0(Jr, Jd, JY, Ju, JU[J6 + 11], JH, 643717713);
    Ju = J0(Ju, Jr, Jd, JY, JU[J6 + 0], JX, 3921069994);
    JY = J0(JY, Ju, Jr, Jd, JU[J6 + 5], Jy, 3593408605);
    Jd = J0(Jd, JY, Ju, Jr, JU[J6 + 10], Jc, 38016083);
    Jr = J0(Jr, Jd, JY, Ju, JU[J6 + 15], JH, 3634488961);
    Ju = J0(Ju, Jr, Jd, JY, JU[J6 + 4], JX, 3889429448);
    JY = J0(JY, Ju, Jr, Jd, JU[J6 + 9], Jy, 568446438);
    Jd = J0(Jd, JY, Ju, Jr, JU[J6 + 14], Jc, 3275163606);
    Jr = J0(Jr, Jd, JY, Ju, JU[J6 + 3], JH, 4107603335);
    Ju = J0(Ju, Jr, Jd, JY, JU[J6 + 8], JX, 1163531501);
    JY = J0(JY, Ju, Jr, Jd, JU[J6 + 13], Jy, 2850285829);
    Jd = J0(Jd, JY, Ju, Jr, JU[J6 + 2], Jc, 4243563512);
    Jr = J0(Jr, Jd, JY, Ju, JU[J6 + 7], JH, 1735328473);
    Ju = J0(Ju, Jr, Jd, JY, JU[J6 + 12], JX, 2368359562);
    JY = J1(JY, Ju, Jr, Jd, JU[J6 + 5], Jn, 4294588738);
    Jd = J1(Jd, JY, Ju, Jr, JU[J6 + 8], Jh, 2272392833);
    Jr = J1(Jr, Jd, JY, Ju, JU[J6 + 11], JS, 1839030562);
    Ju = J1(Ju, Jr, Jd, JY, JU[J6 + 14], Jl, 4259657740);
    JY = J1(JY, Ju, Jr, Jd, JU[J6 + 1], Jn, 2763975236);
    Jd = J1(Jd, JY, Ju, Jr, JU[J6 + 4], Jh, 1272893353);
    Jr = J1(Jr, Jd, JY, Ju, JU[J6 + 7], JS, 4139469664);
    Ju = J1(Ju, Jr, Jd, JY, JU[J6 + 10], Jl, 3200236656);
    JY = J1(JY, Ju, Jr, Jd, JU[J6 + 13], Jn, 681279174);
    Jd = J1(Jd, JY, Ju, Jr, JU[J6 + 0], Jh, 3936430074);
    Jr = J1(Jr, Jd, JY, Ju, JU[J6 + 3], JS, 3572445317);
    Ju = J1(Ju, Jr, Jd, JY, JU[J6 + 6], Jl, 76029189);
    JY = J1(JY, Ju, Jr, Jd, JU[J6 + 9], Jn, 3654602809);
    Jd = J1(Jd, JY, Ju, Jr, JU[J6 + 12], Jh, 3873151461);
    Jr = J1(Jr, Jd, JY, Ju, JU[J6 + 15], JS, 530742520);
    Ju = J1(Ju, Jr, Jd, JY, JU[J6 + 2], Jl, 3299628645);
    JY = J2(JY, Ju, Jr, Jd, JU[J6 + 0], Ji, 4096336452);
    Jd = J2(Jd, JY, Ju, Jr, JU[J6 + 7], Jp, 1126891415);
    Jr = J2(Jr, Jd, JY, Ju, JU[J6 + 14], Jv, 2878612391);
    Ju = J2(Ju, Jr, Jd, JY, JU[J6 + 5], JT, 4237533241);
    JY = J2(JY, Ju, Jr, Jd, JU[J6 + 12], Ji, 1700485571);
    Jd = J2(Jd, JY, Ju, Jr, JU[J6 + 3], Jp, 2399980690);
    Jr = J2(Jr, Jd, JY, Ju, JU[J6 + 10], Jv, 4293915773);
    Ju = J2(Ju, Jr, Jd, JY, JU[J6 + 1], JT, 2240044497);
    JY = J2(JY, Ju, Jr, Jd, JU[J6 + 8], Ji, 1873313359);
    Jd = J2(Jd, JY, Ju, Jr, JU[J6 + 15], Jp, 4264355552);
    Jr = J2(Jr, Jd, JY, Ju, JU[J6 + 6], Jv, 2734768916);
    Ju = J2(Ju, Jr, Jd, JY, JU[J6 + 13], JT, 1309151649);
    JY = J2(JY, Ju, Jr, Jd, JU[J6 + 4], Ji, 4149444226);
    Jd = J2(Jd, JY, Ju, Jr, JU[J6 + 11], Jp, 3174756917);
    Jr = J2(Jr, Jd, JY, Ju, JU[J6 + 2], Jv, 718787259);
    Ju = J2(Ju, Jr, Jd, JY, JU[J6 + 9], JT, 3951481745);
    JY = T(JY, J7);
    Ju = T(Ju, J8);
    Jr = T(Jr, J9);
    Jd = T(Jd, JJ);
  }
  var JA = J4(JY) + J4(Ju) + J4(Jr) + J4(Jd);
  return JA.toLowerCase();
}
function SHA256(W) {
  var e = 8,
    a = 0;
  function y(B, N) {
    var q = (B & 65535) + (N & 65535),
      M = (B >> 16) + (N >> 16) + (q >> 16);
    return M << 16 | q & 65535;
  }
  function c(B, N) {
    return B >>> N | B << 32 - N;
  }
  function H(B, N) {
    return B >>> N;
  }
  function X(B, N, q) {
    return B & N ^ ~B & q;
  }
  function n(B, N, q) {
    return B & N ^ B & q ^ N & q;
  }
  function h(B) {
    return c(B, 2) ^ c(B, 13) ^ c(B, 22);
  }
  function l(B) {
    return c(B, 6) ^ c(B, 11) ^ c(B, 25);
  }
  function i(B) {
    return c(B, 7) ^ c(B, 18) ^ H(B, 3);
  }
  function p(B) {
    return c(B, 17) ^ c(B, 19) ^ H(B, 10);
  }
  function v(B, N) {
    var M = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      x = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      z = new Array(64),
      Q,
      F,
      o,
      V,
      P,
      D,
      t,
      w,
      G,
      C,
      I,
      Z;
    B[N >> 5] |= 128 << 24 - N % 32;
    B[(N + 64 >> 9 << 4) + 15] = N;
    for (var G = 0; G < B.length; G += 16) {
      Q = x[0];
      F = x[1];
      o = x[2];
      V = x[3];
      P = x[4];
      D = x[5];
      t = x[6];
      w = x[7];
      for (var C = 0; C < 64; C++) {
        if (C < 16) {
          z[C] = B[C + G];
        } else {
          z[C] = y(y(y(p(z[C - 2]), z[C - 7]), i(z[C - 15])), z[C - 16]);
        }
        I = y(y(y(y(w, l(P)), X(P, D, t)), M[C]), z[C]);
        Z = y(h(Q), n(Q, F, o));
        w = t;
        t = D;
        D = P;
        P = y(V, I);
        V = o;
        o = F;
        F = Q;
        Q = y(I, Z);
      }
      x[0] = y(Q, x[0]);
      x[1] = y(F, x[1]);
      x[2] = y(o, x[2]);
      x[3] = y(V, x[3]);
      x[4] = y(P, x[4]);
      x[5] = y(D, x[5]);
      x[6] = y(t, x[6]);
      x[7] = y(w, x[7]);
    }
    return x;
  }
  function T(B) {
    var N = Array(),
      q = (1 << e) - 1;
    for (var M = 0; M < B.length * e; M += e) {
      N[M >> 5] |= (B.charCodeAt(M / e) & q) << 24 - M % 32;
    }
    return N;
  }
  function A(B) {
    B = B.replace(/\r\n/g, "\n");
    var q = "";
    for (var M = 0; M < B.length; M++) {
      var x = B.charCodeAt(M);
      if (x < 128) {
        q += String.fromCharCode(x);
      } else {
        if (x > 127 && x < 2048) {
          q += String.fromCharCode(x >> 6 | 192);
          q += String.fromCharCode(x & 63 | 128);
        } else {
          q += String.fromCharCode(x >> 12 | 224);
          q += String.fromCharCode(x >> 6 & 63 | 128);
          q += String.fromCharCode(x & 63 | 128);
        }
      }
    }
    return q;
  }
  function L(B) {
    var q = a ? "0123456789ABCDEF" : "0123456789abcdef",
      M = "";
    for (var x = 0; x < B.length * 4; x++) {
      M += q.charAt(B[x >> 2] >> (3 - x % 4) * 8 + 4 & 15) + q.charAt(B[x >> 2] >> (3 - x % 4) * 8 & 15);
    }
    return M;
  }
  W = A(W);
  return L(v(T(W), W.length * e));
}
function SHA1(e) {
  function y(K, V) {
    var P = K << V | K >>> 32 - V;
    return P;
  }
  function c(K) {
    var V = "",
      P,
      t,
      w;
    for (P = 0; P <= 6; P += 2) {
      t = K >>> P * 4 + 4 & 15;
      w = K >>> P * 4 & 15;
      V += t.toString(16) + w.toString(16);
    }
    return V;
  }
  function H(K) {
    var s = "",
      V,
      P;
    for (V = 7; V >= 0; V--) {
      P = K >>> V * 4 & 15;
      s += P.toString(16);
    }
    return s;
  }
  function X(K) {
    K = K.replace(/\r\n/g, "\n");
    var V = "";
    for (var P = 0; P < K.length; P++) {
      var t = K.charCodeAt(P);
      if (t < 128) {
        V += String.fromCharCode(t);
      } else {
        if (t > 127 && t < 2048) {
          V += String.fromCharCode(t >> 6 | 192);
          V += String.fromCharCode(t & 63 | 128);
        } else {
          V += String.fromCharCode(t >> 12 | 224);
          V += String.fromCharCode(t >> 6 & 63 | 128);
          V += String.fromCharCode(t & 63 | 128);
        }
      }
    }
    return V;
  }
  var n,
    h,
    S,
    l = new Array(80);
  var p = 1732584193;
  var v = 4023233417,
    T = 2562383102,
    L = 271733878,
    N = 3285377520,
    q,
    M,
    R,
    x,
    z,
    Q;
  e = X(e);
  var F = e.length;
  var o = new Array();
  for (h = 0; h < F - 3; h += 4) {
    S = e.charCodeAt(h) << 24 | e.charCodeAt(h + 1 < 10 ? "0" + (h + 1) : h + 1) << 16 | e.charCodeAt(h + 2) << 8 | e.charCodeAt(h + 3);
    o.push(S);
  }
  switch (F % 4) {
    case 0:
      h = 2147483648;
      break;
    case 1:
      h = e.charCodeAt(F - 1) << 24 | 8388608;
      break;
    case 2:
      h = e.charCodeAt(F - 2) << 24 | e.charCodeAt(F - 1) << 16 | 32768;
      break;
    case 3:
      h = e.charCodeAt(F - 3) << 24 | e.charCodeAt(F - 2) << 16 | e.charCodeAt(F - 1) << 8 | 128;
      break;
  }
  o.push(h);
  while (o.length % 16 != 14) {
    o.push(0);
  }
  o.push(F >>> 29);
  o.push(F << 3 & 4294967295);
  for (n = 0; n < o.length; n += 16) {
    for (h = 0; h < 16; h++) {
      l[h] = o[n + h];
    }
    for (h = 16; h <= 79; h++) {
      l[h] = y(l[h - 3] ^ l[h - 8] ^ l[h - 14] ^ l[h - 16], 1);
    }
    q = p;
    M = v;
    R = T;
    x = L;
    z = N;
    for (h = 0; h <= 19; h++) {
      Q = y(q, 5) + (M & R | ~M & x) + z + l[h] + 1518500249 & 4294967295;
      z = x;
      x = R;
      R = y(M, 30);
      M = q;
      q = Q;
    }
    for (h = 20; h <= 39; h++) {
      Q = y(q, 5) + (M ^ R ^ x) + z + l[h] + 1859775393 & 4294967295;
      z = x;
      x = R;
      R = y(M, 30);
      M = q;
      q = Q;
    }
    for (h = 40; h <= 59; h++) {
      Q = y(q, 5) + (M & R | M & x | R & x) + z + l[h] + 2400959708 & 4294967295;
      z = x;
      x = R;
      R = y(M, 30);
      M = q;
      q = Q;
    }
    for (h = 60; h <= 79; h++) {
      Q = y(q, 5) + (M ^ R ^ x) + z + l[h] + 3395469782 & 4294967295;
      z = x;
      x = R;
      R = y(M, 30);
      M = q;
      q = Q;
    }
    p = p + q & 4294967295;
    v = v + M & 4294967295;
    T = T + R & 4294967295;
    L = L + x & 4294967295;
    N = N + z & 4294967295;
  }
  var Q = H(p) + H(v) + H(T) + H(L) + H(N);
  return Q.toLowerCase();
}
function Base64() {
  if (!(this instanceof Base64)) {
    return new Base64();
  }
  var E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (a) {
    var p = "";
    var y, c, H, X, n, h, S;
    var l = 0;
    a = _utf8_encode(a);
    while (l < a.length) {
      y = a.charCodeAt(l++);
      c = a.charCodeAt(l++);
      H = a.charCodeAt(l++);
      X = y >> 2;
      n = (y & 3) << 4 | c >> 4;
      h = (c & 15) << 2 | H >> 6;
      S = H & 63;
      if (isNaN(c)) {
        h = S = 64;
      } else {
        isNaN(H) && (S = 64);
      }
      p = p + E.charAt(X) + E.charAt(n) + E.charAt(h) + E.charAt(S);
    }
    return p;
  };
  this.decode = function (a) {
    var v = "";
    var c, H, X;
    var n, h, S, l;
    var p = 0;
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (p < a.length) {
      n = E.indexOf(a.charAt(p++));
      h = E.indexOf(a.charAt(p++));
      S = E.indexOf(a.charAt(p++));
      l = E.indexOf(a.charAt(p++));
      c = n << 2 | h >> 4;
      H = (h & 15) << 4 | S >> 2;
      X = (S & 3) << 6 | l;
      v = v + String.fromCharCode(c);
      if (S != 64) {
        v = v + String.fromCharCode(H);
      }
      if (l != 64) {
        v = v + String.fromCharCode(X);
      }
    }
    v = _utf8_decode(v);
    return v;
  };
  _utf8_encode = function (a) {
    a = a.replace(/\r\n/g, "\n");
    var H = "";
    for (var X = 0; X < a.length; X++) {
      var h = a.charCodeAt(X);
      if (h < 128) {
        H += String.fromCharCode(h);
      } else {
        if (h > 127 && h < 2048) {
          H += String.fromCharCode(h >> 6 | 192);
          H += String.fromCharCode(h & 63 | 128);
        } else {
          H += String.fromCharCode(h >> 12 | 224);
          H += String.fromCharCode(h >> 6 & 63 | 128);
          H += String.fromCharCode(h & 63 | 128);
        }
      }
    }
    return H;
  };
  _utf8_decode = function (a) {
    var X = "";
    var n = 0;
    var H;
    while (n < a.length) {
      H = a.charCodeAt(n);
      if (H < 128) {
        X += String.fromCharCode(H);
        n++;
      } else {
        if (H > 191 && H < 224) {
          X += String.fromCharCode((H & 31) << 6 | c2 & 63);
          n += 2;
        } else {
          X += String.fromCharCode((H & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3;
        }
      }
    }
    return X;
  };
}
function Env(W, E) {
  class a {
    constructor(y) {
      this.env = y;
    }
    send(y, c = "GET") {
      y = typeof y === "string" ? {
        url: y
      } : y;
      let n = this.get;
      if (c === "POST") {
        n = this.post;
      }
      return new Promise((S, l) => {
        n.call(this, y, (p, v, T) => {
          if (p) {
            l(p);
          } else {
            S(v);
          }
        });
      });
    }
    get(y) {
      return this.send.call(this.env, y);
    }
    post(y) {
      return this.send.call(this.env, y, "POST");
    }
  }
  return new class {
    constructor(y, c) {
      this.name = y;
      this.http = new a(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, c);
      const X = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(X);
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
    toObj(y, c = null) {
      try {
        return JSON.parse(y);
      } catch {
        return c;
      }
    }
    toStr(y, c = null) {
      try {
        return JSON.stringify(y);
      } catch {
        return c;
      }
    }
    getjson(y, c) {
      let X = c;
      const n = this.getdata(y);
      if (n) {
        try {
          X = JSON.parse(this.getdata(y));
        } catch {}
      }
      return X;
    }
    setjson(y, c) {
      try {
        return this.setdata(JSON.stringify(y), c);
      } catch {
        return false;
      }
    }
    getScript(y) {
      return new Promise(c => {
        const H = {
          url: y
        };
        this.get(H, (X, n, h) => c(h));
      });
    }
    runScript(y, c) {
      return new Promise(n => {
        let h = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        h = h ? h.replace(/\n/g, "").trim() : h;
        let S = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        S = S ? S * 1 : 20;
        S = c && c.timeout ? c.timeout : S;
        const [l, i] = h.split("@"),
          p = {
            script_text: y,
            mock_type: "cron",
            timeout: S
          };
        const v = {
          "X-Key": l,
          Accept: "*/*"
        };
        const T = {
          url: "http: //" + i + "/v1/scripting/evaluate",
          body: p,
          headers: v
        };
        this.post(T, (L, B, N) => n(N));
      }).catch(n => this.logErr(n));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const X = this.path.resolve(this.dataFile),
          n = this.path.resolve(process.cwd(), this.dataFile),
          h = this.fs.existsSync(X),
          S = !h && this.fs.existsSync(n);
        if (h || S) {
          const l = h ? X : n;
          try {
            return JSON.parse(this.fs.readFileSync(l));
          } catch (p) {
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
        const H = this.path.resolve(this.dataFile),
          X = this.path.resolve(process.cwd(), this.dataFile),
          n = this.fs.existsSync(H),
          h = !n && this.fs.existsSync(X),
          S = JSON.stringify(this.data);
        if (n) {
          this.fs.writeFileSync(H, S);
        } else {
          h ? this.fs.writeFileSync(X, S) : this.fs.writeFileSync(H, S);
        }
      }
    }
    lodash_get(y, c, H = undefined) {
      const h = c.replace(/[(d+)]/g, ".$1").split(".");
      let S = y;
      for (const l of h) {
        S = Object(S)[l];
        if (S === undefined) {
          return H;
        }
      }
      return S;
    }
    lodash_set(y, c, H) {
      if (Object(y) !== y) {
        return y;
      }
      if (!Array.isArray(c)) {
        c = c.toString().match(/[^.[]]+/g) || [];
      }
      c.slice(0, -1).reduce((n, h, S) => Object(n[h]) === n[h] ? n[h] : n[h] = Math.abs(c[S + 1 < 10 ? "0" + (S + 1) : S + 1]) >> 0 === +c[S + 1 < 10 ? "0" + (S + 1) : S + 1] ? [] : {}, y)[c[c.length - 1]] = H;
      return y;
    }
    getdata(y) {
      let H = this.getval(y);
      if (/^@/.test(y)) {
        const [, X, n] = /^@(.*?).(.*?)$/.exec(y),
          h = X ? this.getval(X) : "";
        if (h) {
          try {
            const i = JSON.parse(h);
            H = i ? this.lodash_get(i, n, "") : H;
          } catch (p) {
            H = "";
          }
        }
      }
      return H;
    }
    setdata(y, c) {
      let H = false;
      if (/^@/.test(c)) {
        const [, X, n] = /^@(.*?).(.*?)$/.exec(c),
          h = this.getval(X),
          S = X ? h === "null" ? null : h || "{}" : "{}";
        try {
          const i = JSON.parse(S);
          this.lodash_set(i, n, y);
          H = this.setval(JSON.stringify(i), X);
        } catch (p) {
          const v = {};
          this.lodash_set(v, n, y);
          H = this.setval(JSON.stringify(v), X);
        }
      } else {
        H = this.setval(y, c);
      }
      return H;
    }
    getval(y) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(y);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(y);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[y];
          } else {
            return this.data && this.data[y] || null;
          }
        }
      }
    }
    setval(y, c) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(y, c);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(y, c);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[c] = y;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[c] || null;
          }
        }
      }
    }
    initGotEnv(y) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (y) {
        y.headers = y.headers ? y.headers : {};
        undefined === y.headers.Cookie && undefined === y.cookieJar && (y.cookieJar = this.ckjar);
      }
    }
    get(y, c = () => {}) {
      y.headers && (delete y.headers["Content-Type"], delete y.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          y.headers = y.headers || {};
          const S = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(y.headers, S);
        }
        $httpClient.get(y, (l, i, p) => {
          !l && i && (i.body = p, i.statusCode = i.status);
          c(l, i, p);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            y.opts = y.opts || {};
            const p = {
              hints: false
            };
            Object.assign(y.opts, p);
          }
          $task.fetch(y).then(v => {
            const {
                statusCode: A,
                statusCode: L,
                headers: B,
                body: N
              } = v,
              q = {
                status: A,
                statusCode: L,
                headers: B,
                body: N
              };
            c(null, q, N);
          }, v => c(v));
        } else {
          this.isNode() && (this.initGotEnv(y), this.got(y).on("redirect", (T, A) => {
            try {
              if (T.headers["set-cookie"]) {
                const q = T.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (q) {
                  this.ckjar.setCookieSync(q, null);
                }
                A.cookieJar = this.ckjar;
              }
            } catch (x) {
              this.logErr(x);
            }
            this.ckjar.setCookieSync(T.headers["set-cookie"].map(Cookie.parse).toString());
          }).then(T => {
            const {
                statusCode: B,
                statusCode: N,
                headers: q,
                body: M
              } = T,
              R = {
                status: B,
                statusCode: N,
                headers: q,
                body: M
              };
            c(null, R, M);
          }, T => {
            const {
              message: L,
              response: B
            } = T;
            c(L, B, B && B.body);
          }));
        }
      }
    }
    post(y, c = () => {}) {
      const X = y.method ? y.method.toLocaleLowerCase() : "post";
      if (y.body && y.headers && !y.headers["Content-Type"]) {
        y.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (y.headers) {
        delete y.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          y.headers = y.headers || {};
          const S = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(y.headers, S);
        }
        $httpClient[X](y, (i, p, v) => {
          !i && p && (p.body = v, p.statusCode = p.status);
          c(i, p, v);
        });
      } else {
        if (this.isQuanX()) {
          y.method = X;
          if (this.isNeedRewrite) {
            y.opts = y.opts || {};
            const p = {
              hints: false
            };
            Object.assign(y.opts, p);
          }
          $task.fetch(y).then(T => {
            const {
                statusCode: B,
                statusCode: N,
                headers: q,
                body: M
              } = T,
              R = {
                status: B,
                statusCode: N,
                headers: q,
                body: M
              };
            c(null, R, M);
          }, T => c(T));
        } else {
          if (this.isNode()) {
            this.initGotEnv(y);
            const {
              url: A,
              ...L
            } = y;
            this.got[X](A, L).then(B => {
              const {
                  statusCode: N,
                  statusCode: q,
                  headers: M,
                  body: R
                } = B,
                x = {
                  status: N,
                  statusCode: q,
                  headers: M,
                  body: R
                };
              c(null, x, R);
            }, B => {
              const {
                message: N,
                response: q
              } = B;
              c(N, q, q && q.body);
            });
          }
        }
      }
    }
    put(y, c = () => {}) {
      const n = y.method ? y.method.toLocaleLowerCase() : "put";
      if (y.body && y.headers && !y.headers["Content-Type"]) {
        y.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (y.headers) {
        delete y.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          y.headers = y.headers || {};
          const S = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(y.headers, S);
        }
        $httpClient[n](y, (i, p, v) => {
          if (!i && p) {
            p.body = v;
            p.statusCode = p.status;
          }
          c(i, p, v);
        });
      } else {
        if (this.isQuanX()) {
          y.method = n;
          if (this.isNeedRewrite) {
            y.opts = y.opts || {};
            const T = {
              hints: false
            };
            Object.assign(y.opts, T);
          }
          $task.fetch(y).then(A => {
            const {
                statusCode: B,
                statusCode: N,
                headers: q,
                body: M
              } = A,
              R = {
                status: B,
                statusCode: N,
                headers: q,
                body: M
              };
            c(null, R, M);
          }, A => c(A));
        } else {
          if (this.isNode()) {
            this.initGotEnv(y);
            const {
              url: A,
              ...L
            } = y;
            this.got[n](A, L).then(B => {
              const {
                  statusCode: q,
                  statusCode: M,
                  headers: R,
                  body: x
                } = B,
                z = {
                  status: q,
                  statusCode: M,
                  headers: R,
                  body: x
                };
              c(null, z, x);
            }, B => {
              const {
                message: q,
                response: M
              } = B;
              c(q, M, M && M.body);
            });
          }
        }
      }
    }
    time(y, c = null) {
      const H = c ? new Date(c) : new Date();
      let X = {
        "M+": H.getMonth() + 1,
        "d+": H.getDate(),
        "H+": H.getHours(),
        "m+": H.getMinutes(),
        "s+": H.getSeconds(),
        "q+": Math.floor((H.getMonth() + 3) / 3),
        S: H.getMilliseconds()
      };
      if (/(y+)/.test(y)) {
        y = y.replace(RegExp.$1, (H.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let n in X) if (new RegExp("(" + n + ")").test(y)) {
        y = y.replace(RegExp.$1, RegExp.$1.length == 1 ? X[n] : ("00" + X[n]).substr(("" + X[n]).length));
      }
      return y;
    }
    msg(y = W, c = "", H = "", X) {
      const h = S => {
        if (!S) {
          return S;
        }
        if (typeof S === "string") {
          if (this.isLoon()) {
            return S;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": S
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: S
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof S === "object") {
            if (this.isLoon()) {
              let T = S.openUrl || S.url || S["open-url"],
                A = S.mediaUrl || S["media-url"];
              const L = {
                openUrl: T,
                mediaUrl: A
              };
              return L;
            } else {
              if (this.isQuanX()) {
                let N = S["open-url"] || S.url || S.openUrl,
                  q = S["media-url"] || S.mediaUrl;
                const M = {
                  "open-url": N,
                  "media-url": q
                };
                return M;
              } else {
                if (this.isSurge()) {
                  let R = S.url || S.openUrl || S["open-url"];
                  const x = {
                    url: R
                  };
                  return x;
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
          $notification.post(y, c, H, h(X));
        } else {
          this.isQuanX() && $notify(y, c, H, h(X));
        }
      }
      if (!this.isMuteLog) {
        let p = ["", "==============📣系统通知📣=============="];
        p.push(y);
        c ? p.push(c) : "";
        H ? p.push(H) : "";
        console.log(p.join("\n"));
        this.logs = this.logs.concat(p);
      }
    }
    log(...y) {
      y.length > 0 && (this.logs = [...this.logs, ...y]);
      console.log(y.join(this.logSeparator));
    }
    logErr(y, c) {
      const H = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !H ? this.log("", "❗️" + this.name + ", 错误!", y) : this.log("", "❗️" + this.name + ", 错误!", y.stack);
    }
    wait(y) {
      return new Promise(c => setTimeout(c, y));
    }
    done(y = {}) {
      const c = new Date().getTime();
      const H = (c - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + H + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(y);
    }
  }(W, E);
}