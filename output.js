//Sat Jan 11 2025 12:56:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("宝骏汽车"),
  version = "V1.0.0",
  appName = "bjqcapp";
let bjqcapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", C => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("bjqcactivecode") || 0,
  bjqcuserck = $.getval("bjqcuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  bjqclogs = [];
let wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  accountErrors = [],
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
  vipDate = "";
if ($.isNode()) {
  process.env.BJQCAPP ? bjqcapp = JSON.parse(process.env.BJQCAPP) : bjqcapp = COOKIES.BJQC;
  userId = process.env.TGUSERID;
  activeCode = process.env.BJQCACTIVECODE;
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
    if (!bjqcapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let v = false;
    const N = apiHost.split("&"),
      f = N.length;
    for (let Q = 0; Q < f; Q++) {
      if ($.isNode()) {
        v = await checkAddress("" + N[Q], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          v = await httpClientRequest("" + N[Q], 2500);
        } else {
          v = await fetchRequest("" + N[Q], 2500);
        }
      }
      if (v == true) {
        apiHost = N[Q];
        $.log("📢 接口" + (Q + 1) + "[" + N[Q] + "]服务器接口正常! 🎉");
        break;
      }
      if (Q == f - 1 && v == false) {
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
      let Y = new Date(vipDate).getTime(),
        B = new Date().getTime();
      if (B > Y) {
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
        let o = new Date(vipDate).getTime(),
          W = new Date().getTime();
        if (W > o) {
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
    if (bjqcapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (bjqcapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + bjqcapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + bjqcapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (bjqcapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + bjqcapp.length + "个账号");
    let n = [],
      K = bjqcapp.length,
      t = 0;
    if ($.isNode() && process.env.BJQC_THREAD_COUNT) {
      t = parseInt(process.env.BJQC_THREAD_COUNT);
    } else {
      t = K;
    }
    let z = bjqcapp.length;
    if (t >= K) {
      t = K;
      z = 1;
      $.log("📢 你设置的线程数是" + t + "，账号个数是" + K + "，" + z + "次可全部跑完。");
      for (let w = 0; w < bjqcapp.length; w++) {
        n.push(runMultiTasks(w));
        bjqclogs[w] = "";
        if ($.isNode()) {
          channels_status[w] = 0;
          accountErrors[w] = false;
          await init_ws(w);
        } else {
          channels_status[w] = 1;
        }
      }
      await Promise.allSettled(n).then(C1 => {
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let C3 = 0; C3 < bjqcapp.length; C3++) {
          $.log(bjqclogs[C3]);
          sendlogs += bjqclogs[C3];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      z = Math.ceil(K / t);
      $.log("📢 你设置的线程数是" + t + "，账号个数是" + K + "，计算后分" + z + "次执行，一次可执行" + t + "个账号，最后一次如果不够" + t + "个账号，剩多少个账号就跑几个账号。");
      for (let C2 = 0; C2 < z; C2++) {
        for (let C4 = C2 * t; C4 < t * (C2 + 1) && C4 < K; C4++) {
          n.push(runMultiTasks(C4));
          bjqclogs[C4] = "";
          accountErrors[C4] = false;
          channels_status[C4] = 1;
          await init_ws(C4);
        }
        await Promise.allSettled(n).then(C8 => {
          n = [];
          if (C2 == z - 1) {
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let Cv = 0; Cv < bjqcapp.length; Cv++) {
              $.log(bjqclogs[Cv]);
              sendlogs += bjqclogs[Cv];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(C => $.logErr(C)).finally(() => $.done());
async function runMultiTasks(C) {
  return new Promise((v, N) => {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 开始执行 working......");
    runSubTask(v, C);
  });
}
async function init_ws(C) {
  if ($.isNode()) {
    reconectCounts[C] > 0 && $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 尝试重新连接服务器>>>>>>");
    wss[C] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[C].on("open", function f() {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已连接");
    });
    wss[C].on("close", function n() {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[C].on("error", function K() {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[C] = 1;
      reconectCounts[C]++;
      if (reconectCounts[C] <= 3) {
        init_ws(C);
      }
    });
  }
}
async function runSubTask(C, U) {
  await $.wait(3000, 5000);
  for (let N = 1; N < 20; N++) {
    await videoList(U, N);
    if (accountErrors[U] == true) {
      break;
    }
  }
  if (accountErrors[U] == true) {
    if ($.isNode()) {
      await wss[U].close();
    }
    C();
    return;
  }
  await accountInfo(U);
  if ($.isNode()) {
    await wss[U].close();
  }
  await runComplete(appName, userId);
  C();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const N = $request.body;
    let f = bjqcuserck - 1;
    if (bjqcapp[f]) {
      bjqcapp[f].token_body = N;
    } else {
      const n = {
        token_body: N
      };
      bjqcapp[f] = n;
    }
    $.setdata(JSON.stringify(bjqcapp, null, 2), "bjqcapp");
    $.msg($.name, "快音账号" + (f + 1) + "Token获取成功！🎉");
  }
}
async function userInfo(C, U) {
  const N = "https://hb2.hbdtxt.com/api/user/index";
  let f = "api_type=h5&uid=" + U;
  await getReqObject(N, f, C);
  await httpRequest("post", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.code == 1) {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.userinfo.nickname);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.userinfo.nickname + "\n";
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg + "\n";
  }
}
async function videoList(C, U) {
  const N = "https://hapi.baojun.net/base/community/post/postList?postTypeId=1&postClassifyId=61&publishSmallProgram=2&pageNo=" + U + "&pageSize=20";
  let f = "";
  await getReqObject(N, f, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.result == true) {
    let t = n.data;
    for (let z = 0; z < t.length; z++) {
      let Q = t[z];
      await videoStatus(C, Q.postId);
    }
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 视频列表=> " + n.msg);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 视频列表=> " + n.msg + "\n";
    accountErrors[C] = true;
  }
}
async function getReward(C, U) {
  const N = "https://hapi.baojun.net/base/activity/fission/lookVideo";
  let f = "{\"postId\":" + U + "}";
  await getReqObject(N, f, C);
  await httpRequest("post", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.result == true) {
    if (n.data == true) {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 成功获得1毛钱");
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 成功获得1毛钱\n";
    } else {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 获取奖励失败");
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 获取奖励失败\n";
    }
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 失败");
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 失败\n";
  }
}
async function videoStatus(C, U) {
  const N = "https://hapi.baojun.net/base/activity/fission/getFissionReceiveStatus?postId=" + U;
  let f = "";
  await getReqObject(N, f, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.result == true) {
    n.data.status == true && (await getReward(C, U), await $.wait(randomNum(10000, 15000)));
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg + "\n";
  }
}
async function accountInfo(C) {
  const v = "https://hapi.baojun.net/base/account/pocket/draw/info";
  let N = "";
  await getReqObject(v, N, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let f = httpResult;
  if (f != null && f.result == true) {
    f.data.noDrawMoney >= 30 && (await draw(C));
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 账号信息=> " + f.msg);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 账号信息=> " + f.msg + "\n";
  }
}
async function draw(C) {
  const v = "https://hapi.baojun.net/base/account/pocket/money/draw";
  let N = "{}";
  await getReqObject(v, N, C);
  await httpRequest("post", requestObjects[C], printCaller());
  let f = httpResult;
  if (f != null && f.result == true) {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage + "\n";
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage);
    bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage + "\n";
  }
}
function getScriptAuth(C, U, v) {
  return new Promise((f, i) => {
    const K = apiHost + "/script/permissions/lastest",
      t = {
        appName: C,
        userId: U,
        activityCode: v,
        version: version
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Q = {
      url: K,
      headers: m,
      body: JSON.stringify(t)
    };
    $.post(Q, async (q, D, u) => {
      if (u && u != null && u.replace(/\"/g, "").length > 50) {
        const M = u.replace(/\"/g, "").slice(34),
          k = new Base64();
        result = JSON.parse(k.decode(M));
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
        } catch (B) {
          $.log(B);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      f();
    });
  });
}
function runComplete(C, U) {
  return new Promise((N, f) => {
    const n = apiHost + "/script/run/add",
      K = {
        appName: C,
        userId: U,
        activityCode: activeCode,
        version: version
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const m = {
      url: n,
      headers: z,
      body: JSON.stringify(K)
    };
    $.post(m, async (Q, q, D) => {
      N();
    });
  });
}
function checkAddress(C, U) {
  return new Promise((N, f) => {
    const K = setTimeout(() => {
        N(false);
      }, U),
      t = http.get(C, z => {
        clearTimeout(K);
        z.statusCode === 404 ? N(true) : N(false);
      });
    t.on("error", z => {
      clearTimeout(K);
      N(false);
    });
    t.on("timeout", () => {
      t.abort();
      f(new Error("请求超时"));
    });
  });
}
async function fetchRequest(C, U = 3000) {
  return new Promise((N, f) => {
    const n = {
      url: C + "/docs"
    };
    setTimeout(() => {
      N(false);
    }, U);
    $.get(n, async (K, t, z) => {
      if (t.status == 401) {
        N(true);
      } else {
        N(false);
      }
    });
  });
}
async function httpClientRequest(C, U = 3000) {
  return new Promise((N, f) => {
    const K = {
      url: C + "/"
    };
    setTimeout(() => {
      N(false);
    }, U);
    $httpClient.get(K, async (t, z, m) => {
      if (m == "{\"detail\":\"Not Found\"}") {
        N(true);
      } else {
        N(false);
      }
    });
  });
}
async function redisGet(C, U, v) {
  return new Promise((f, n) => {
    const z = apiHost + "/redis/hash/get/" + U + "/" + v,
      m = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const Q = {
      url: z,
      headers: m
    };
    $.get(Q, async (D, u, R) => {
      const d = R.replace(/\"/g, "");
      answerTexts[C] = d;
      f();
    });
  });
}
function redisSet(C, U, v) {
  return new Promise((f, i) => {
    const n = apiHost + "/redis/hash/set",
      K = {
        key: C,
        hashKey: U,
        hashValue: v
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const m = {
      url: n,
      headers: z,
      body: JSON.stringify(K)
    };
    $.post(m, async (Q, q, D) => {
      f();
    });
  });
}
function redisPop(C) {
  return new Promise((v, N) => {
    const n = apiHost + "/redis/set/pop/" + C,
      K = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const t = {
      url: n,
      headers: K
    };
    $.get(t, async (m, Q, q) => {
      const u = q.replace(/\"/g, "");
      popCookie = u;
      v();
    });
  });
}
async function getReqObject(v, N, f) {
  let K = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.55(0x18003729) NetType/WIFI Language/zh_CN";
  bjqcapp[f].ua && bjqcapp[f].ua != "" && (K = bjqcapp[f].ua);
  let t = getHostname(v),
    z = ts13(),
    m = "4857289347289375";
  await selectChannel(f, bjqcapp[f].token + "@" + z);
  let Q = requestSigns[f];
  const q = {
    "Content-Type": "application/json",
    "User-Agent": K,
    accessToken: bjqcapp[f].token,
    oauthConsumerKey: "20200113181123916714",
    platformNo: "Wx_mini",
    signatrue: Q,
    timestamp: z,
    nonce: m,
    Host: t
  };
  const D = {
    url: v,
    headers: q
  };
  N && (D.body = N);
  requestObjects[f] = D;
  return D;
}
function getReqObject_(v, N, f) {
  let K = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (bjqcapp[f].ua && bjqcapp[f].ua != "") {
    K = bjqcapp[f].ua;
  }
  let t = getHostname(v);
  const z = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": K,
    Authorization: bjqcapp[f].auth,
    Host: t
  };
  const m = {
    url: v,
    headers: z
  };
  if (N) {
    m.body = N;
  }
  requestObjects[f] = m;
  return m;
}
async function httpRequest(C, U, v) {
  httpResult = null;
  return new Promise(f => {
    $[C](U, async (K, t, z) => {
      const m = {
        szCrL: "Content-Type",
        zVBWJ: "Content-Length",
        tKJYN: "open-url",
        aJjoK: "media-url"
      };
      try {
        if (K) {
          $.log(v + ": " + C + "请求失败");
          $.log(JSON.stringify(K));
          $.logErr(K);
        } else {
          if (safeGet(z)) {
            httpResult = JSON.parse(z);
            debug == 1 && $.log(httpResult);
          } else {
            const R = new URL(U.url);
            $.log(R.pathname + "发起" + C + "请求时，出现错误，请处理");
          }
        }
      } catch (b) {
        $.logErr(b, t);
      } finally {
        f(httpResult);
      }
    });
  });
}
async function selectChannel(C, U) {
  if (channels_status[C] == 0) {
    await getSign_(C, U);
  } else {
    await getSign(C, U);
  }
}
function getSign_(C, U) {
  return new Promise((N, f) => {
    function t(z) {
      let m = z.toString("utf8");
      requestSigns[C] = m;
      wss[C].removeListener("message", t);
      N(m);
    }
    wss[C].on("message", t);
    if (wss[C].readyState === 1) {
      const z = {
        method: appName,
        params: {}
      };
      z.params.content = U;
      z.params.appName = appName;
      z.params.uuid = userId;
      wss[C].send(JSON.stringify(z), m => {
        if (m) {
          f(m);
        }
      });
    } else {
      N(getSign(C, U));
      wss[C].removeListener("message", t);
    }
  });
}
function getSign(C, U) {
  return new Promise((N, f) => {
    const t = apiHost + "/sign/bjqc",
      z = {
        content: U,
        appName: appName,
        uuid: userId
      };
    const Q = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const q = {
      url: t,
      headers: Q,
      body: JSON.stringify(z)
    };
    $.post(q, async (D, u, R) => {
      const d = R.replace(/\"/g, "");
      requestSigns[C] = d;
      N();
    });
  });
}
function sortUrlParams(C, U, v) {
  const f = url2obj(C);
  U.forEach(K => {
    delete f[K];
  });
  Object.assign(f, v);
  const i = Object.keys(f).sort(),
    n = i.map(K => K + "=" + f[K]).join("&");
  return n;
}
function url2obj(U) {
  const v = {
    iLGBg: function (z, m) {
      return z + m;
    },
    xgXHT: function (z, m) {
      return z < m;
    },
    bRHgM: function (z, m) {
      return z === m;
    },
    pBpCO: "noKcI",
    WEpKB: "iyrIi"
  };
  const N = v;
  U = U.replace(/\"/g, "");
  var f,
    n = {},
    K = U.slice(N.iLGBg(U.indexOf("?"), 1)).split("&");
  for (var t = 0; N.xgXHT(t, K.length); t++) {
    N.bRHgM(N.pBpCO, N.WEpKB) ? N += f.fromCharCode(t) : (f = K[t].split("="), n[f[0]] = f[1]);
  }
  return n;
}
function convertStringToJson(U) {
  const f = U.replace(/[{} ]/g, "");
  const i = f.split(","),
    n = {};
  i.forEach(K => {
    const [m, Q] = K.split("=");
    n[m] = Q;
  });
  return n;
}
function getHostname(U) {
  let f = U.substr(U.indexOf("//") + 2),
    i = f.substr(0, f.indexOf("/")),
    n = "";
  let K = i.indexOf(":");
  if (K > 0) {
    n = i.substr(0, K);
  } else {
    n = i;
  }
  return n;
}
function calculateTimeDifference(U, v) {
  var z = new Date(U);
  var t = new Date(v);
  var K = t - z;
  var m = Math.floor(K / 1000);
  return m;
}
function cutString(U, v) {
  const N = {};
  N.gIYDU = "open-url";
  N.XAgrO = "media-url";
  N.cnDmN = function (z, m) {
    return z & m;
  };
  N.bwmTi = function (z, m) {
    return z >>> m;
  };
  N.jaCLj = function (z, m) {
    return z * m;
  };
  N.wCgRY = function (z, m) {
    return z ^ m;
  };
  N.VVwGh = function (z, m) {
    return z < m;
  };
  N.kOZSL = function (z, m) {
    return z + m;
  };
  N.ZaErw = function (z, m) {
    return z + m;
  };
  N.jJsvg = function (z, m) {
    return z + m;
  };
  N.qAnNc = function (z, m) {
    return z + m;
  };
  N.HkBrl = function (z, m) {
    return z + m;
  };
  N.ylTet = function (z, m) {
    return z <= m;
  };
  N.HGHDP = function (z, m) {
    return z * m;
  };
  N.jdlfr = function (z, m) {
    return z === m;
  };
  N.WgHQz = "MfILR";
  N.hzOUb = function (z, m) {
    return z < m;
  };
  N.RGfhY = "lpnhD";
  N.BLKpB = "ZrZKg";
  N.sAnIo = function (z, m) {
    return z > m;
  };
  N.miETu = "CBKeP";
  N.iwxGQ = "ebdcR";
  N.cUNmn = function (z, m) {
    return z >= m;
  };
  N.Mdxsa = function (z, m) {
    return z !== m;
  };
  N.XqveX = "usBXM";
  N.degTZ = function (z, m) {
    return z - m;
  };
  N.wybSh = "...";
  N.FtxXI = "FCpcL";
  N.BBltC = "dZqao";
  N.oByam = function (z, m) {
    return z === m;
  };
  N.yQnhn = "gmVXt";
  N.sJPkR = function (z, m) {
    return z + m;
  };
  N.JJaOm = function (z, m) {
    return z - m;
  };
  const f = N;
  if (f.ylTet(f.HGHDP(U.length, 2), v)) {
    if (f.jdlfr(f.WgHQz, f.WgHQz)) {
      return U;
    } else {
      if (this.isLoon()) {
        let m = X.openUrl || S.url || y[f.gIYDU],
          Q = L.mediaUrl || o[f.XAgrO];
        const q = {
          openUrl: m,
          mediaUrl: Q
        };
        return q;
      } else {
        if (this.isQuanX()) {
          let D = W[f.gIYDU] || l.url || x.openUrl,
            u = p[f.XAgrO] || a.mediaUrl;
          const R = {
            "open-url": D,
            "media-url": u
          };
          return R;
        } else {
          if (this.isSurge()) {
            let d = A.url || r.openUrl || c[f.gIYDU];
            const M = {
              url: d
            };
            return M;
          }
        }
      }
    }
  }
  var n = 0,
    K = "";
  for (var t = 0; f.hzOUb(t, U.length); t++) {
    if (f.jdlfr(f.RGfhY, f.BLKpB)) {
      t = f.cnDmN(f.bwmTi(n, f.jaCLj(K, 4)), 15);
      t += z.toString(16);
    } else {
      K = f.kOZSL(K, U.charAt(t));
      if (f.sAnIo(U.charCodeAt(t), 128)) {
        if (f.jdlfr(f.miETu, f.iwxGQ)) {
          N = f[t].ua;
        } else {
          n = f.kOZSL(n, 2);
          if (f.cUNmn(n, v)) {
            return f.Mdxsa(f.XqveX, f.XqveX) ? f.wCgRY(f.wCgRY(N, f), t) : f.qAnNc(K.substring(0, f.degTZ(K.length, 1)), f.wybSh);
          }
        }
      } else {
        if (f.Mdxsa(f.FtxXI, f.BBltC)) {
          n = f.jJsvg(n, 1);
          if (f.cUNmn(n, v)) {
            if (f.oByam(f.yQnhn, f.yQnhn)) {
              return f.sJPkR(K.substring(0, f.JJaOm(K.length, 2)), f.wybSh);
            } else {
              Q.log("[账号" + (f.VVwGh(f.kOZSL(q, 1), 10) ? f.ZaErw("0", f.jJsvg(D, 1)) : f.ZaErw(u, 1)) + "]: 提现结果=> " + R.errorMessage);
              d[M] += "[账号" + (f.VVwGh(f.qAnNc(k, 1), 10) ? f.qAnNc("0", f.jJsvg(b, 1)) : f.HkBrl(h, 1)) + "]: 提现结果=> " + Y.errorMessage + "\n";
            }
          }
        } else {
          n = K[t].split("=");
          z[m[0]] = Q[1];
        }
      }
    }
  }
  return K;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(U) {
  try {
    if (typeof JSON.parse(U) == "object") {
      return true;
    }
  } catch (n) {
    console.log(n);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(C) {
  var v = Object.keys(C).map(function (N) {
    return encodeURIComponent(N) + "=" + encodeURIComponent(C[N]);
  }).join("&");
  return v;
}
function compileStr(C) {
  var v = String.fromCharCode(C.charCodeAt(0) + C.length);
  for (var N = 1; N < C.length; N++) {
    v += String.fromCharCode(C.charCodeAt(N) + C.charCodeAt(N - 1));
  }
  return escape(v);
}
function uncompileStr(C) {
  C = unescape(C);
  var v = String.fromCharCode(C.charCodeAt(0) - C.length);
  for (var N = 1; N < C.length; N++) {
    v += String.fromCharCode(C.charCodeAt(N) - v.charCodeAt(N - 1));
  }
  return v;
}
function randomNum(C, U) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * C + 1);
      break;
    case 2:
      return parseInt(Math.random() * (U - C + 1) + C);
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
  function U() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return U() + U() + "-" + U() + "-" + U() + "-" + U() + "-" + U() + U() + U();
}
function phone_num(C) {
  if (C.length == 11) {
    let v = C.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return v;
  } else {
    return C;
  }
}
function txt_api(C) {
  return new Promise((v, N) => {
    const K = "https://v1.hitokoto.cn/?c=e",
      t = {
        accept: "application/json"
      };
    const z = {
      url: K,
      headers: t
    };
    $.get(z, async (Q, q, D) => {
      let R = JSON.parse(D),
        d = R.hitokoto;
      contents[C] = d + " " + d;
      v();
    });
  });
}
function getTime_8() {
  return new Promise((U, v) => {
    const N = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      f = {
        url: N
      };
    $.get(f, async (n, K, t) => {
      U(t);
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
async function sendMsg(C) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, C);
      } else {
        $.msg($.name, "", C);
      }
    } else {
      $.log(C);
    }
  }
}
async function wxPush(C, U, v) {
  return new Promise((f, n) => {
    const z = "https://wxpusher.zjiecode.com/api/send/message",
      m = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: U,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [v],
        verifyPay: false
      };
    const q = {
      "Content-Type": "application/json"
    };
    const D = {
      url: z,
      headers: q,
      body: JSON.stringify(m)
    };
    $.post(D, async (u, R, d) => {
      f();
    });
  });
}
function randomString(U, v) {
  v = v || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let K = 0; K < U; K++) {
    let t = Math.floor(Math.random() * v.length);
    n += v.substring(t, t + 1);
  }
  return n;
}
function MD5_Encrypt(U) {
  function R(CY, CB) {
    return CY << CB | CY >>> 32 - CB;
  }
  function Y(CY, CB) {
    var CT, CP, CX, CS, Cy;
    CX = 2147483648 & CY;
    CS = 2147483648 & CB;
    CT = 1073741824 & CY;
    CP = 1073741824 & CB;
    Cy = (1073741823 & CY) + (1073741823 & CB);
    return CT & CP ? 2147483648 ^ Cy ^ CX ^ CS : CT | CP ? 1073741824 & Cy ? 3221225472 ^ Cy ^ CX ^ CS : 1073741824 ^ Cy ^ CX ^ CS : Cy ^ CX ^ CS;
  }
  function T(CY, CB, Cg) {
    return CY & CB | ~CY & Cg;
  }
  function P(CY, CB, Cg) {
    return CY & Cg | CB & ~Cg;
  }
  function X(CY, CB, Cg) {
    return CY ^ CB ^ Cg;
  }
  function S(CY, CB, Cg) {
    return CB ^ (CY | ~Cg);
  }
  function W(CY, CB, Cg, CT, CP, CX, CS) {
    CY = Y(CY, Y(Y(T(CB, Cg, CT), CP), CS));
    return Y(R(CY, CX), CB);
  }
  function V(CY, CB, Cg, CT, CP, CX, CS) {
    CY = Y(CY, Y(Y(P(CB, Cg, CT), CP), CS));
    return Y(R(CY, CX), CB);
  }
  function Z(CY, CB, Cg, CT, CP, CX, CS) {
    CY = Y(CY, Y(Y(X(CB, Cg, CT), CP), CS));
    return Y(R(CY, CX), CB);
  }
  function C0(CY, CB, Cg, CT, CP, CX, CS) {
    CY = Y(CY, Y(Y(S(CB, Cg, CT), CP), CS));
    return Y(R(CY, CX), CB);
  }
  function C1(CY) {
    for (var Cg, CT = CY.length, CP = CT + 8, CX = (CP - CP % 64) / 64, CS = 16 * (CX + 1), Cy = new Array(CS - 1), CL = 0, Co = 0; CT > Co;) {
      Cg = (Co - Co % 4) / 4;
      CL = Co % 4 * 8;
      Cy[Cg] = Cy[Cg] | CY.charCodeAt(Co) << CL;
      Co++;
    }
    Cg = (Co - Co % 4) / 4;
    CL = Co % 4 * 8;
    Cy[Cg] = Cy[Cg] | 128 << CL;
    Cy[CS - 2] = CT << 3;
    Cy[CS - 1] = CT >>> 29;
    return Cy;
  }
  function C2(CY) {
    var Cg,
      CT,
      CP = "",
      CX = "";
    for (CT = 0; 3 >= CT; CT++) {
      Cg = CY >>> 8 * CT & 255;
      CX = "0" + Cg.toString(16);
      CP += CX.substr(CX.length - 2, 2);
    }
    return CP;
  }
  function C3(CY) {
    CY = CY.replace(/\r\n/g, "\n");
    for (var CB = "", Cg = 0; Cg < CY.length; Cg++) {
      var CT = CY.charCodeAt(Cg);
      128 > CT ? CB += String.fromCharCode(CT) : CT > 127 && 2048 > CT ? (CB += String.fromCharCode(CT >> 6 | 192), CB += String.fromCharCode(63 & CT | 128)) : (CB += String.fromCharCode(CT >> 12 | 224), CB += String.fromCharCode(CT >> 6 & 63 | 128), CB += String.fromCharCode(63 & CT | 128));
    }
    return CB;
  }
  var C4,
    C5,
    C6,
    C7,
    C8,
    C9,
    CC,
    CU,
    Cv,
    CN = [],
    Cf = 7,
    Ci = 12,
    Cn = 17,
    CK = 22,
    Ct = 5,
    Cz = 9,
    Cm = 14,
    CQ = 20,
    Cq = 4,
    CD = 11,
    Cu = 16,
    CR = 23,
    Cd = 6,
    CM = 10,
    Ck = 15,
    Cb = 21;
  for (U = C3(U), CN = C1(U), C9 = 1732584193, CC = 4023233417, CU = 2562383102, Cv = 271733878, C4 = 0; C4 < CN.length; C4 += 16) {
    C5 = C9;
    C6 = CC;
    C7 = CU;
    C8 = Cv;
    C9 = W(C9, CC, CU, Cv, CN[C4 + 0], Cf, 3614090360);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 1], Ci, 3905402710);
    CU = W(CU, Cv, C9, CC, CN[C4 + 2], Cn, 606105819);
    CC = W(CC, CU, Cv, C9, CN[C4 + 3], CK, 3250441966);
    C9 = W(C9, CC, CU, Cv, CN[C4 + 4], Cf, 4118548399);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 5], Ci, 1200080426);
    CU = W(CU, Cv, C9, CC, CN[C4 + 6], Cn, 2821735955);
    CC = W(CC, CU, Cv, C9, CN[C4 + 7], CK, 4249261313);
    C9 = W(C9, CC, CU, Cv, CN[C4 + 8], Cf, 1770035416);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 9], Ci, 2336552879);
    CU = W(CU, Cv, C9, CC, CN[C4 + 10], Cn, 4294925233);
    CC = W(CC, CU, Cv, C9, CN[C4 + 11], CK, 2304563134);
    C9 = W(C9, CC, CU, Cv, CN[C4 + 12], Cf, 1804603682);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 13], Ci, 4254626195);
    CU = W(CU, Cv, C9, CC, CN[C4 + 14], Cn, 2792965006);
    CC = W(CC, CU, Cv, C9, CN[C4 + 15], CK, 1236535329);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 1], Ct, 4129170786);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 6], Cz, 3225465664);
    CU = V(CU, Cv, C9, CC, CN[C4 + 11], Cm, 643717713);
    CC = V(CC, CU, Cv, C9, CN[C4 + 0], CQ, 3921069994);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 5], Ct, 3593408605);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 10], Cz, 38016083);
    CU = V(CU, Cv, C9, CC, CN[C4 + 15], Cm, 3634488961);
    CC = V(CC, CU, Cv, C9, CN[C4 + 4], CQ, 3889429448);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 9], Ct, 568446438);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 14], Cz, 3275163606);
    CU = V(CU, Cv, C9, CC, CN[C4 + 3], Cm, 4107603335);
    CC = V(CC, CU, Cv, C9, CN[C4 + 8], CQ, 1163531501);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 13], Ct, 2850285829);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 2], Cz, 4243563512);
    CU = V(CU, Cv, C9, CC, CN[C4 + 7], Cm, 1735328473);
    CC = V(CC, CU, Cv, C9, CN[C4 + 12], CQ, 2368359562);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 5], Cq, 4294588738);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 8], CD, 2272392833);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 11], Cu, 1839030562);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 14], CR, 4259657740);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 1], Cq, 2763975236);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 4], CD, 1272893353);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 7], Cu, 4139469664);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 10], CR, 3200236656);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 13], Cq, 681279174);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 0], CD, 3936430074);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 3], Cu, 3572445317);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 6], CR, 76029189);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 9], Cq, 3654602809);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 12], CD, 3873151461);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 15], Cu, 530742520);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 2], CR, 3299628645);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 0], Cd, 4096336452);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 7], CM, 1126891415);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 14], Ck, 2878612391);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 5], Cb, 4237533241);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 12], Cd, 1700485571);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 3], CM, 2399980690);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 10], Ck, 4293915773);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 1], Cb, 2240044497);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 8], Cd, 1873313359);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 15], CM, 4264355552);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 6], Ck, 2734768916);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 13], Cb, 1309151649);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 4], Cd, 4149444226);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 11], CM, 3174756917);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 2], Ck, 718787259);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 9], Cb, 3951481745);
    C9 = Y(C9, C5);
    CC = Y(CC, C6);
    CU = Y(CU, C7);
    Cv = Y(Cv, C8);
  }
  var Ch = C2(C9) + C2(CC) + C2(CU) + C2(Cv);
  return Ch.toLowerCase();
}
function SHA256(C) {
  var v = 8,
    N = 0;
  function f(k, b) {
    var h = (k & 65535) + (b & 65535),
      Y = (k >> 16) + (b >> 16) + (h >> 16);
    return Y << 16 | h & 65535;
  }
  function i(k, b) {
    return k >>> b | k << 32 - b;
  }
  function n(k, b) {
    return k >>> b;
  }
  function K(k, b, h) {
    return k & b ^ ~k & h;
  }
  function t(k, b, h) {
    return k & b ^ k & h ^ b & h;
  }
  function z(k) {
    return i(k, 2) ^ i(k, 13) ^ i(k, 22);
  }
  function m(k) {
    return i(k, 6) ^ i(k, 11) ^ i(k, 25);
  }
  function Q(k) {
    return i(k, 7) ^ i(k, 18) ^ n(k, 3);
  }
  function q(k) {
    return i(k, 17) ^ i(k, 19) ^ n(k, 10);
  }
  function D(k, Y) {
    var T = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      P = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      X = new Array(64),
      y,
      L,
      o,
      x,
      p,
      A,
      r,
      I,
      F,
      E,
      V,
      Z;
    k[Y >> 5] |= 128 << 24 - Y % 32;
    k[(Y + 64 >> 9 << 4) + 15] = Y;
    for (var F = 0; F < k.length; F += 16) {
      y = P[0];
      L = P[1];
      o = P[2];
      x = P[3];
      p = P[4];
      A = P[5];
      r = P[6];
      I = P[7];
      for (var E = 0; E < 64; E++) {
        if (E < 16) {
          X[E] = k[E + F];
        } else {
          X[E] = f(f(f(q(X[E - 2]), X[E - 7]), Q(X[E - 15])), X[E - 16]);
        }
        V = f(f(f(f(I, m(p)), K(p, A, r)), T[E]), X[E]);
        Z = f(z(y), t(y, L, o));
        I = r;
        r = A;
        A = p;
        p = f(x, V);
        x = o;
        o = L;
        L = y;
        y = f(V, Z);
      }
      P[0] = f(y, P[0]);
      P[1] = f(L, P[1]);
      P[2] = f(o, P[2]);
      P[3] = f(x, P[3]);
      P[4] = f(p, P[4]);
      P[5] = f(A, P[5]);
      P[6] = f(r, P[6]);
      P[7] = f(I, P[7]);
    }
    return P;
  }
  function u(k) {
    var b = Array(),
      h = (1 << v) - 1;
    for (var Y = 0; Y < k.length * v; Y += v) {
      b[Y >> 5] |= (k.charCodeAt(Y / v) & h) << 24 - Y % 32;
    }
    return b;
  }
  function d(k) {
    k = k.replace(/\r\n/g, "\n");
    var h = "";
    for (var Y = 0; Y < k.length; Y++) {
      var B = k.charCodeAt(Y);
      if (B < 128) {
        h += String.fromCharCode(B);
      } else {
        if (B > 127 && B < 2048) {
          h += String.fromCharCode(B >> 6 | 192);
          h += String.fromCharCode(B & 63 | 128);
        } else {
          h += String.fromCharCode(B >> 12 | 224);
          h += String.fromCharCode(B >> 6 & 63 | 128);
          h += String.fromCharCode(B & 63 | 128);
        }
      }
    }
    return h;
  }
  function M(k) {
    var h = N ? "0123456789ABCDEF" : "0123456789abcdef",
      Y = "";
    for (var B = 0; B < k.length * 4; B++) {
      Y += h.charAt(k[B >> 2] >> (3 - B % 4) * 8 + 4 & 15) + h.charAt(k[B >> 2] >> (3 - B % 4) * 8 & 15);
    }
    return Y;
  }
  C = d(C);
  return M(D(u(C), C.length * v));
}
function SHA1(U) {
  function N(S, y) {
    var L = S << y | S >>> 32 - y;
    return L;
  }
  function f(S) {
    var L = "",
      o,
      l,
      x;
    for (o = 0; o <= 6; o += 2) {
      l = S >>> o * 4 + 4 & 15;
      x = S >>> o * 4 & 15;
      L += l.toString(16) + x.toString(16);
    }
    return L;
  }
  function n(S) {
    var L = "",
      o,
      l;
    for (o = 7; o >= 0; o--) {
      l = S >>> o * 4 & 15;
      L += l.toString(16);
    }
    return L;
  }
  function K(S) {
    S = S.replace(/\r\n/g, "\n");
    var L = "";
    for (var o = 0; o < S.length; o++) {
      var l = S.charCodeAt(o);
      if (l < 128) {
        L += String.fromCharCode(l);
      } else {
        if (l > 127 && l < 2048) {
          L += String.fromCharCode(l >> 6 | 192);
          L += String.fromCharCode(l & 63 | 128);
        } else {
          L += String.fromCharCode(l >> 12 | 224);
          L += String.fromCharCode(l >> 6 & 63 | 128);
          L += String.fromCharCode(l & 63 | 128);
        }
      }
    }
    return L;
  }
  var t,
    z,
    m,
    Q = new Array(80);
  var q = 1732584193,
    u = 4023233417;
  var R = 2562383102,
    d = 271733878,
    M = 3285377520,
    k,
    b,
    h,
    Y,
    g,
    T;
  U = K(U);
  var P = U.length,
    X = new Array();
  for (z = 0; z < P - 3; z += 4) {
    m = U.charCodeAt(z) << 24 | U.charCodeAt(z + 1 < 10 ? "0" + (z + 1) : z + 1) << 16 | U.charCodeAt(z + 2) << 8 | U.charCodeAt(z + 3);
    X.push(m);
  }
  switch (P % 4) {
    case 0:
      z = 2147483648;
      break;
    case 1:
      z = U.charCodeAt(P - 1) << 24 | 8388608;
      break;
    case 2:
      z = U.charCodeAt(P - 2) << 24 | U.charCodeAt(P - 1) << 16 | 32768;
      break;
    case 3:
      z = U.charCodeAt(P - 3) << 24 | U.charCodeAt(P - 2) << 16 | U.charCodeAt(P - 1) << 8 | 128;
      break;
  }
  X.push(z);
  while (X.length % 16 != 14) {
    X.push(0);
  }
  X.push(P >>> 29);
  X.push(P << 3 & 4294967295);
  for (t = 0; t < X.length; t += 16) {
    for (z = 0; z < 16; z++) {
      Q[z] = X[t + z];
    }
    for (z = 16; z <= 79; z++) {
      Q[z] = N(Q[z - 3] ^ Q[z - 8] ^ Q[z - 14] ^ Q[z - 16], 1);
    }
    k = q;
    b = u;
    h = R;
    Y = d;
    g = M;
    for (z = 0; z <= 19; z++) {
      T = N(k, 5) + (b & h | ~b & Y) + g + Q[z] + 1518500249 & 4294967295;
      g = Y;
      Y = h;
      h = N(b, 30);
      b = k;
      k = T;
    }
    for (z = 20; z <= 39; z++) {
      T = N(k, 5) + (b ^ h ^ Y) + g + Q[z] + 1859775393 & 4294967295;
      g = Y;
      Y = h;
      h = N(b, 30);
      b = k;
      k = T;
    }
    for (z = 40; z <= 59; z++) {
      T = N(k, 5) + (b & h | b & Y | h & Y) + g + Q[z] + 2400959708 & 4294967295;
      g = Y;
      Y = h;
      h = N(b, 30);
      b = k;
      k = T;
    }
    for (z = 60; z <= 79; z++) {
      T = N(k, 5) + (b ^ h ^ Y) + g + Q[z] + 3395469782 & 4294967295;
      g = Y;
      Y = h;
      h = N(b, 30);
      b = k;
      k = T;
    }
    q = q + k & 4294967295;
    u = u + b & 4294967295;
    R = R + h & 4294967295;
    d = d + Y & 4294967295;
    M = M + g & 4294967295;
  }
  var T = n(q) + n(u) + n(R) + n(d) + n(M);
  return T.toLowerCase();
}
function Base64() {
  if (!(this instanceof Base64)) {
    return new Base64();
  }
  var U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (N) {
    var u = "";
    var n, K, t, z, m, Q, q;
    var D = 0;
    N = _utf8_encode(N);
    while (D < N.length) {
      n = N.charCodeAt(D++);
      K = N.charCodeAt(D++);
      t = N.charCodeAt(D++);
      z = n >> 2;
      m = (n & 3) << 4 | K >> 4;
      Q = (K & 15) << 2 | t >> 6;
      q = t & 63;
      if (isNaN(K)) {
        Q = q = 64;
      } else {
        if (isNaN(t)) {
          q = 64;
        }
      }
      u = u + U.charAt(z) + U.charAt(m) + U.charAt(Q) + U.charAt(q);
    }
    return u;
  };
  this.decode = function (N) {
    var D = "";
    var m, Q, q;
    var n, K, t, z;
    var u = 0;
    N = N.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (u < N.length) {
      n = U.indexOf(N.charAt(u++));
      K = U.indexOf(N.charAt(u++));
      t = U.indexOf(N.charAt(u++));
      z = U.indexOf(N.charAt(u++));
      m = n << 2 | K >> 4;
      Q = (K & 15) << 4 | t >> 2;
      q = (t & 3) << 6 | z;
      D = D + String.fromCharCode(m);
      t != 64 && (D = D + String.fromCharCode(Q));
      if (z != 64) {
        D = D + String.fromCharCode(q);
      }
    }
    D = _utf8_decode(D);
    return D;
  };
  _utf8_encode = function (N) {
    N = N.replace(/\r\n/g, "\n");
    var f = "";
    for (var i = 0; i < N.length; i++) {
      var K = N.charCodeAt(i);
      if (K < 128) {
        f += String.fromCharCode(K);
      } else {
        if (K > 127 && K < 2048) {
          f += String.fromCharCode(K >> 6 | 192);
          f += String.fromCharCode(K & 63 | 128);
        } else {
          f += String.fromCharCode(K >> 12 | 224);
          f += String.fromCharCode(K >> 6 & 63 | 128);
          f += String.fromCharCode(K & 63 | 128);
        }
      }
    }
    return f;
  };
  _utf8_decode = function (N) {
    var n = "";
    var K = 0;
    c1 = c2 = 0;
    var t = c1;
    while (K < N.length) {
      t = N.charCodeAt(K);
      if (t < 128) {
        n += String.fromCharCode(t);
        K++;
      } else {
        if (t > 191 && t < 224) {
          c2 = N.charCodeAt(K + 1);
          n += String.fromCharCode((t & 31) << 6 | c2 & 63);
          K += 2;
        } else {
          c2 = N.charCodeAt(K + 1);
          c3 = N.charCodeAt(K + 2);
          n += String.fromCharCode((t & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          K += 3;
        }
      }
    }
    return n;
  };
}
function Env(C, U) {
  class N {
    constructor(f) {
      this.env = f;
    }
    send(f, i = "GET") {
      f = typeof f === "string" ? {
        url: f
      } : f;
      let K = this.get;
      i === "POST" && (K = this.post);
      return new Promise((z, m) => {
        K.call(this, f, (q, D, u) => {
          if (q) {
            m(q);
          } else {
            z(D);
          }
        });
      });
    }
    get(f) {
      return this.send.call(this.env, f);
    }
    post(f) {
      return this.send.call(this.env, f, "POST");
    }
  }
  return new class {
    constructor(f, i) {
      this.name = f;
      this.http = new N(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, i);
      const t = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(t);
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
    toObj(f, i = null) {
      try {
        return JSON.parse(f);
      } catch {
        return i;
      }
    }
    toStr(f, i = null) {
      try {
        return JSON.stringify(f);
      } catch {
        return i;
      }
    }
    getjson(f, i) {
      let n = i;
      const K = this.getdata(f);
      if (K) {
        try {
          n = JSON.parse(this.getdata(f));
        } catch {}
      }
      return n;
    }
    setjson(f, i) {
      try {
        return this.setdata(JSON.stringify(f), i);
      } catch {
        return false;
      }
    }
    getScript(f) {
      return new Promise(n => {
        const z = {
          url: f
        };
        this.get(z, (m, Q, q) => n(q));
      });
    }
    runScript(f, i) {
      return new Promise(t => {
        let m = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        m = m ? m.replace(/\n/g, "").trim() : m;
        let Q = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        Q = Q ? Q * 1 : 20;
        Q = i && i.timeout ? i.timeout : Q;
        const [q, D] = m.split("@"),
          u = {
            script_text: f,
            mock_type: "cron",
            timeout: Q
          };
        const R = {
          "X-Key": q,
          Accept: "*/*"
        };
        const d = {
          url: "http: //" + D + "/v1/scripting/evaluate",
          body: u,
          headers: R
        };
        this.post(d, (k, b, h) => t(h));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const K = this.path.resolve(this.dataFile),
          t = this.path.resolve(process.cwd(), this.dataFile),
          z = this.fs.existsSync(K),
          m = !z && this.fs.existsSync(t);
        if (z || m) {
          const q = z ? K : t;
          try {
            return JSON.parse(this.fs.readFileSync(q));
          } catch (u) {
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
        const K = this.path.resolve(this.dataFile),
          t = this.path.resolve(process.cwd(), this.dataFile),
          z = this.fs.existsSync(K),
          m = !z && this.fs.existsSync(t),
          Q = JSON.stringify(this.data);
        if (z) {
          this.fs.writeFileSync(K, Q);
        } else {
          if (m) {
            this.fs.writeFileSync(t, Q);
          } else {
            this.fs.writeFileSync(K, Q);
          }
        }
      }
    }
    lodash_get(f, i, n = undefined) {
      const t = i.replace(/[(d+)]/g, ".$1").split(".");
      let z = f;
      for (const m of t) {
        z = Object(z)[m];
        if (z === undefined) {
          return n;
        }
      }
      return z;
    }
    lodash_set(f, i, n) {
      if (Object(f) !== f) {
        return f;
      }
      if (!Array.isArray(i)) {
        i = i.toString().match(/[^.[]]+/g) || [];
      }
      i.slice(0, -1).reduce((t, z, m) => Object(t[z]) === t[z] ? t[z] : t[z] = Math.abs(i[m + 1 < 10 ? "0" + (m + 1) : m + 1]) >> 0 === +i[m + 1 < 10 ? "0" + (m + 1) : m + 1] ? [] : {}, f)[i[i.length - 1]] = n;
      return f;
    }
    getdata(f) {
      let n = this.getval(f);
      if (/^@/.test(f)) {
        const [, K, t] = /^@(.*?).(.*?)$/.exec(f),
          z = K ? this.getval(K) : "";
        if (z) {
          try {
            const Q = JSON.parse(z);
            n = Q ? this.lodash_get(Q, t, "") : n;
          } catch (D) {
            n = "";
          }
        }
      }
      return n;
    }
    setdata(f, i) {
      let t = false;
      if (/^@/.test(i)) {
        const [, z, m] = /^@(.*?).(.*?)$/.exec(i),
          Q = this.getval(z),
          q = z ? Q === "null" ? null : Q || "{}" : "{}";
        try {
          const u = JSON.parse(q);
          this.lodash_set(u, m, f);
          t = this.setval(JSON.stringify(u), z);
        } catch (R) {
          const d = {};
          this.lodash_set(d, m, f);
          t = this.setval(JSON.stringify(d), z);
        }
      } else {
        t = this.setval(f, i);
      }
      return t;
    }
    getval(f) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(f);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(f);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[f];
          } else {
            return this.data && this.data[f] || null;
          }
        }
      }
    }
    setval(f, i) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(f, i);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(f, i);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[i] = f;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[i] || null;
          }
        }
      }
    }
    initGotEnv(f) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (f) {
        f.headers = f.headers ? f.headers : {};
        undefined === f.headers.Cookie && undefined === f.cookieJar && (f.cookieJar = this.ckjar);
      }
    }
    get(f, i = () => {}) {
      if (f.headers) {
        delete f.headers["Content-Type"];
        delete f.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          f.headers = f.headers || {};
          const m = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(f.headers, m);
        }
        $httpClient.get(f, (q, D, u) => {
          if (!q && D) {
            D.body = u;
            D.statusCode = D.status;
          }
          i(q, D, u);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            f.opts = f.opts || {};
            const D = {
              hints: false
            };
            Object.assign(f.opts, D);
          }
          $task.fetch(f).then(u => {
            const {
                statusCode: R,
                statusCode: d,
                headers: M,
                body: k
              } = u,
              b = {
                status: R,
                statusCode: d,
                headers: M,
                body: k
              };
            i(null, b, k);
          }, u => i(u));
        } else {
          if (this.isNode()) {
            this.initGotEnv(f);
            this.got(f).on("redirect", (R, d) => {
              try {
                if (R.headers["set-cookie"]) {
                  const k = R.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (k) {
                    this.ckjar.setCookieSync(k, null);
                  }
                  d.cookieJar = this.ckjar;
                }
              } catch (B) {
                this.logErr(B);
              }
            }).then(R => {
              const {
                  statusCode: M,
                  statusCode: k,
                  headers: b,
                  body: h
                } = R,
                Y = {
                  status: M,
                  statusCode: k,
                  headers: b,
                  body: h
                };
              i(null, Y, h);
            }, R => {
              const {
                message: M,
                response: k
              } = R;
              i(M, k, k && k.body);
            });
          }
        }
      }
    }
    post(f, i = () => {}) {
      const t = f.method ? f.method.toLocaleLowerCase() : "post";
      if (f.body && f.headers && !f.headers["Content-Type"]) {
        f.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (f.headers) {
        delete f.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          f.headers = f.headers || {};
          const q = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(f.headers, q);
        }
        $httpClient[t](f, (D, u, R) => {
          if (!D && u) {
            u.body = R;
            u.statusCode = u.status;
          }
          i(D, u, R);
        });
      } else {
        if (this.isQuanX()) {
          f.method = t;
          if (this.isNeedRewrite) {
            f.opts = f.opts || {};
            const u = {
              hints: false
            };
            Object.assign(f.opts, u);
          }
          $task.fetch(f).then(d => {
            const {
                statusCode: M,
                statusCode: k,
                headers: b,
                body: h
              } = d,
              Y = {
                status: M,
                statusCode: k,
                headers: b,
                body: h
              };
            i(null, Y, h);
          }, d => i(d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(f);
            const {
              url: d,
              ...M
            } = f;
            this.got[t](d, M).then(k => {
              const {
                  statusCode: h,
                  statusCode: Y,
                  headers: B,
                  body: g
                } = k,
                T = {
                  status: h,
                  statusCode: Y,
                  headers: B,
                  body: g
                };
              i(null, T, g);
            }, k => {
              const {
                message: b,
                response: h
              } = k;
              i(b, h, h && h.body);
            });
          }
        }
      }
    }
    put(f, i = () => {}) {
      const t = f.method ? f.method.toLocaleLowerCase() : "put";
      if (f.body && f.headers && !f.headers["Content-Type"]) {
        f.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (f.headers) {
        delete f.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          f.headers = f.headers || {};
          const m = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(f.headers, m);
        }
        $httpClient[t](f, (q, D, u) => {
          if (!q && D) {
            D.body = u;
            D.statusCode = D.status;
          }
          i(q, D, u);
        });
      } else {
        if (this.isQuanX()) {
          f.method = t;
          if (this.isNeedRewrite) {
            f.opts = f.opts || {};
            const u = {
              hints: false
            };
            Object.assign(f.opts, u);
          }
          $task.fetch(f).then(d => {
            const {
                statusCode: k,
                statusCode: b,
                headers: h,
                body: Y
              } = d,
              B = {
                status: k,
                statusCode: b,
                headers: h,
                body: Y
              };
            i(null, B, Y);
          }, d => i(d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(f);
            const {
              url: M,
              ...k
            } = f;
            this.got[t](M, k).then(b => {
              const {
                  statusCode: h,
                  statusCode: Y,
                  headers: B,
                  body: g
                } = b,
                T = {
                  status: h,
                  statusCode: Y,
                  headers: B,
                  body: g
                };
              i(null, T, g);
            }, b => {
              const {
                message: Y,
                response: B
              } = b;
              i(Y, B, B && B.body);
            });
          }
        }
      }
    }
    time(f, i = null) {
      const K = i ? new Date(i) : new Date();
      let t = {
        "M+": K.getMonth() + 1,
        "d+": K.getDate(),
        "H+": K.getHours(),
        "m+": K.getMinutes(),
        "s+": K.getSeconds(),
        "q+": Math.floor((K.getMonth() + 3) / 3),
        S: K.getMilliseconds()
      };
      if (/(y+)/.test(f)) {
        f = f.replace(RegExp.$1, (K.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let z in t) if (new RegExp("(" + z + ")").test(f)) {
        f = f.replace(RegExp.$1, RegExp.$1.length == 1 ? t[z] : ("00" + t[z]).substr(("" + t[z]).length));
      }
      return f;
    }
    msg(f = C, i = "", n = "", K) {
      const z = m => {
        if (!m) {
          return m;
        }
        if (typeof m === "string") {
          if (this.isLoon()) {
            return m;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": m
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: m
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof m === "object") {
            if (this.isLoon()) {
              let D = m.openUrl || m.url || m["open-url"],
                u = m.mediaUrl || m["media-url"];
              const R = {
                openUrl: D,
                mediaUrl: u
              };
              return R;
            } else {
              if (this.isQuanX()) {
                let M = m["open-url"] || m.url || m.openUrl,
                  k = m["media-url"] || m.mediaUrl;
                const b = {
                  "open-url": M,
                  "media-url": k
                };
                return b;
              } else {
                if (this.isSurge()) {
                  let B = m.url || m.openUrl || m["open-url"];
                  const g = {
                    url: B
                  };
                  return g;
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
          $notification.post(f, i, n, z(K));
        } else {
          this.isQuanX() && $notify(f, i, n, z(K));
        }
      }
      if (!this.isMuteLog) {
        let m = ["", "==============📣系统通知📣=============="];
        m.push(f);
        i ? m.push(i) : "";
        n ? m.push(n) : "";
        console.log(m.join("\n"));
        this.logs = this.logs.concat(m);
      }
    }
    log(...f) {
      f.length > 0 && (this.logs = [...this.logs, ...f]);
      console.log(f.join(this.logSeparator));
    }
    logErr(f, i) {
      const n = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !n ? this.log("", "❗️" + this.name + ", 错误!", f) : this.log("", "❗️" + this.name + ", 错误!", f.stack);
    }
    wait(f) {
      return new Promise(i => setTimeout(i, f));
    }
    done(f = {}) {
      const i = new Date().getTime();
      const n = (i - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + n + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(f);
    }
  }(C, U);
}