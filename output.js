//Fri Feb 14 2025 13:14:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("快手极速版"),
  version = "V1.0.8",
  appName = "ksjsbapp";
let ksjsbapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", R => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "";
const COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("ksjsbactivecode") || 0,
  ksjsbuserck = $.getval("ksjsbuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1",
  helpUtils = undefined,
  CryptoJS = undefined,
  saveFile = false,
  ksjsb_ck_file = "";
var hour = "",
  minute = "";
let content = "",
  sendlogs = "",
  ksjsblogs = [],
  wss = [],
  channels_status = [],
  reconectCounts = [];
let requestObjects = [],
  requestSigns = [],
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
  process.env.KSJSBAPP ? ksjsbapp = JSON.parse(process.env.KSJSBAPP) : ksjsbapp = COOKIES.KSJSB;
  userId = process.env.TGUSERID;
  activeCode = process.env.KSJSBACTIVECODE;
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
    if (!ksjsbapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let N = false;
    const U = apiHost.split("&"),
      l = U.length;
    for (let e = 0; e < l; e++) {
      if ($.isNode()) {
        N = await checkAddress("" + U[e], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          N = await httpClientRequest("" + U[e], 2500);
        } else {
          N = await fetchRequest("" + U[e], 2500);
        }
      }
      if (N == true) {
        apiHost = U[e];
        $.log("📢 接口" + (e + 1) + "[" + U[e] + "]服务器接口正常! 🎉");
        break;
      }
      if (e == l - 1 && N == false) {
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
        K = new Date().getTime();
      if (K > J) {
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
        let F = new Date(vipDate).getTime(),
          H = new Date().getTime();
        if (H > F) {
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
    if (ksjsbapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (ksjsbapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + ksjsbapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + ksjsbapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (ksjsbapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + ksjsbapp.length + "个账号");
    if ($.isNode()) {
      if (!fs.existsSync(ksjsb_ck_file)) {
        ksjsb_cks = {};
      } else {
        ksjsb_cks = JSON.parse(fs.readFileSync(ksjsb_ck_file, "utf8"));
      }
    }
    let G = [],
      h = ksjsbapp.length,
      O = 0;
    $.isNode() && process.env.KSJSB_THREAD_COUNT ? O = parseInt(process.env.KSJSB_THREAD_COUNT) : O = h;
    let f = ksjsbapp.length;
    if (O >= h) {
      O = h;
      f = 1;
      $.log("📢 你设置的线程数是" + O + "，账号个数是" + h + "，" + f + "次可全部跑完。");
      for (let R0 = 0; R0 < ksjsbapp.length; R0++) {
        G.push(runMultiTasks(R0));
        ksjsblogs[R0] = "";
        if ($.isNode()) {
          channels_status[R0] = 0;
          await init_ws(R0);
        } else {
          channels_status[R0] = 1;
        }
      }
      await Promise.allSettled(G).then(R4 => {
        $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(ksjsb_ck_file, JSON.stringify(ksjsb_cks, null, 2)));
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let R8 = 0; R8 < ksjsbapp.length; R8++) {
          $.log(ksjsblogs[R8]);
          sendlogs += ksjsblogs[R8];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      f = Math.ceil(h / O);
      $.log("📢 你设置的线程数是" + O + "，账号个数是" + h + "，计算后分" + f + "次执行，一次可执行" + O + "个账号，最后一次如果不够" + O + "个账号，剩多少个账号就跑几个账号。");
      for (let R6 = 0; R6 < f; R6++) {
        for (let R7 = R6 * O; R7 < O * (R6 + 1) && R7 < h; R7++) {
          G.push(runMultiTasks(R7));
          ksjsblogs[R7] = "";
          channels_status[R7] = 1;
          await init_ws(R7);
        }
        await Promise.allSettled(G).then(R9 => {
          G = [];
          if (R6 == f - 1) {
            if ($.isNode() && saveFile) {
              $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
              fs.writeFileSync(ksjsb_ck_file, JSON.stringify(ksjsb_cks, null, 2));
            }
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let RU = 0; RU < ksjsbapp.length; RU++) {
              $.log(ksjsblogs[RU]);
              sendlogs += ksjsblogs[RU];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(R => $.logErr(R)).finally(() => $.done());
async function runMultiTasks(R) {
  return new Promise((N, U) => {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开始执行 working......");
    runSubTask(N, R);
  });
}
async function init_ws(R) {
  if ($.isNode()) {
    reconectCounts[R] > 0 && $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 尝试重新连接服务器>>>>>>");
    wss[R] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[R].on("open", function U() {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签名通道已连接");
    });
    wss[R].on("close", function l() {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[R].on("error", function G() {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[R] = 1;
      reconectCounts[R]++;
      reconectCounts[R] <= 3 && init_ws(R);
    });
  }
}
async function runSubTask(R, T) {
  await $.wait(3000, 5000);
  await userInfo(T);
  await commonSignInfo(T);
  await signInfo(T);
  await treasureBoxInfo(T);
  $.isNode() && (await wss[T].close());
  await runComplete(appName, userId);
  R();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const U = $request.body;
    let l = ksjsbuserck - 1;
    if (ksjsbapp[l]) {
      ksjsbapp[l].token_body = U;
    } else {
      const O = {
        token_body: U
      };
      ksjsbapp[l] = O;
    }
    $.setdata(JSON.stringify(ksjsbapp, null, 2), "ksjsbapp");
    $.msg($.name, "快音账号" + (l + 1) + "Token获取成功！🎉");
  }
}
async function adTask(R, T, N) {
  const l = "https://api.e.kuaishou.com/rest/e/v1/reward/ad",
    G = "encData=WlTu3eTU6mG5geHodUZgWV5mBUFsA0ZYqEZMq8uH4mlXSnVSKjJxWR/Fc2VddWfgXijgdvW3NKcV3fpT378hFDQtxnyt44Y/7HeqkOAhubxU6ONgRVT7PZ5H46Ewlq2jQ4Pdip7u9qMNTyaEFSuo5jXtEHqKRA/ivEqCXi9kgj5eHtwxHbe2votmjQJHi5L/lA6D1zhSlBd/2bEMA5bSgF/vqINLEYErX0bn4X%2Bi90GMg%2BF1unit43U8boMTRaP4W/LyTLWX1t37g3IfsdC6XhbW9rt/mZLY2FfnAT7TXwA0QHceIGqWNteXPW38mAyKeclrh/UB0ugOeL/YatMCZIapI1yizJ0gcl%2BM23ctUXcV2/m%2BDaFlBxDbIzS6Wa7inEDrjV9nc5NAYU7FU21vn3OSi1xEe6lkEyoZ0jPkywmHeoDkKc2hUBwvFyy5O4mCkueOtRBhYLCt5qs/rpm/hoL2TXTgFpWZKVLy2E0urTvfCWAg1iokooj/qCSpMqTJW6TIuZ4ISjO%2BObJHiuefRYGQG5ZqRiCOusB6AuSkHD/qiCEfdf%2BEuqPk058LDdNFaJhXIwh%2B4ArfPWmGnbrKY4Sj3PbVx1punfEItviaGrw14BwPtcwL8eceQImJScG1qHMLS0QWYo4mAsp82Mr/0eE6VnePQyWvBvw3CA/9S47Mb/tPE3PTWaoJuNnrbpjY1rPgRDQEsmwO8oN%2BkJUWeiB9%2BCbZjw0Ln06I3S93FlPOGmSfPNjP0mILnpeRFz2IdEnvjWpltluWWvCkxFzT5UVdyqVe7HFbrih2ZQiHJ7ptJIdAMHrGPCxiFwL2dX6MygDKz8Tx7lDr/P8RikF/CfNd0JmzwW5nC9jAVUSZwdBm8%2BM84MjS/qaFV8AJI4zxOehGSQaw031FdimyJEf3sK29C/cgW1RpdraR8gASq4Iv42Rqet3uv8z6ebzceMt%2B3qDOe6K7kBdHCjcjsbS6a7Woq/FhElpcbOEU%2BsdvcXbXkYVofFcZvWMYv/aGjYOx/pc8ocuE0C7%2B6LNn/xNT917vGsr9TyLELjA74wTXepENMmgBN61iIgeWFMGDo40wB3cxddq%2BhCCkRVq5jIdciQehAtzPWaEVtkkgxMtleEelP0lDcfqFckokjP6dUrC/kvl3n659qKr4EVV2N24Yznavq8ufeGOpkiSOQc7znrapw8Q97rHPU/QXHhCddab9UeW2k5ph8ks%3D&sign=5a54eedde4d4ea61b384d9b07bfbfe8d0aceace7e578951f73b2acd2d4cbd0fe";
  requestObjects[N] = await getReqObject(l, G, N);
  requestObjects[N].headers["Content-Type"] = "application/x-www-form-urlencoded";
  requestObjects[N].headers.Host = "api.e.kuaishou.com";
  await httpRequest("post", requestObjects[N], printCaller());
  let h = httpResult;
  if (h.result == 1) {
    const f = h.impAdInfo[0].pageId,
      z = h.impAdInfo[0].subPageId,
      e = h.llsid,
      m = h.impAdInfo[0].adInfo[0].adBaseInfo.creativeId,
      w = h.impAdInfo[0].adInfo[0].adBaseInfo.inspireAdInfo.inspireAdBillTime;
    await $.wait(w);
    await oldReward(R, T, m, e, f, z, w, N);
  }
}
async function oldReward(R, T, N, U, l, G, h, O) {
  const z = new Date().getTime().toString();
  const e = (new Date().getTime() - h).toString(),
    m = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward";
  let w = "bizStr={\"businessId\":" + T + ",\"endTime\":" + z + ",\"extParams\":\"1ee74def7bb6fc015b0ba1dde79887ba4f839df5d941203d745b5db6b0e0ca97779a99b6b9b573a7a781f0b3dd116e81cf3cc6811816b891f2bd0b421f2a89df786c69b2546fc534f468e9263d8c5bc0f92c10afb96f511415a57be7311edd52\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + N + ",\"extInfo\":\"\",\"llsid\":" + U + ",\"taskType\":1}],\"pageId\":" + l + ",\"posId\":774,\"startTime\":" + e + ",\"subPageId\":" + G + "}";
  T == 17 && (w = "bizStr={\"endTime\":" + z + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + N + ",\"extInfo\":\"\",\"llsid\":" + U + ",\"taskType\":1}],\"startTime\":" + e + ",\"taskId\":0}");
  if (T == 5 || T == 139 || T == 77) {
    w = "bizStr={\"endTime\":" + z + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + N + ",\"extInfo\":\"\",\"llsid\":" + U + ",\"taskType\":1}],\"startTime\":" + e + ",\"taskId\":136}";
  }
  requestObjects[O] = await getReqObject(m, w, O);
  requestObjects[O].headers["Content-Type"] = "application/x-www-form-urlencoded";
  requestObjects[O].headers.Host = "api.e.kuaishou.com";
  await httpRequest("post", requestObjects[O], printCaller());
  let B = httpResult;
  if (B.result == 1) {
    $.log("[账号" + (O + 1) + "]: " + R + "获得" + B.data.awardAmount + "金币 🎉");
    content += "[账号" + (O + 1) + "]: " + R + "获得" + B.data.awardAmount + "金币 🎉\n";
  } else {
    $.log("[账号" + (O + 1) + "]: " + R + "=>" + B.error_msg);
  }
}
async function userInfo(R) {
  const N = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo";
  let U = "";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户名=> " + l.data.userData.nickname);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户名=> " + l.data.userData.nickname + "\n";
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 余额=> " + l.data.totalCash);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户名=> " + l.data.totalCash + "\n";
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 金币=> " + l.data.totalCoin);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 金币=> " + l.data.totalCoin + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户信息=> 获取用户信息失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户信息=> 获取用户信息失败\n";
  }
}
async function commonSignInfo(R) {
  const N = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks";
  let U = "";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    let G = l.data.dailyTasks.find(h => h.id == 20022);
    if (G && G.extParam.todaySigned == false) {
      await signIn(R);
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到信息=> 获取签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到信息=> 获取签到失败\n";
  }
}
async function commonSignIn(R) {
  const N = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/taskByIds?sigCatVer=1&taskIds=20022";
  let U = "";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 普通签到获得" + l.data.refreshTasks["20022"].todayTotalCoinAmount + "金币");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 普通签到获得" + l.data.refreshTasks["20022"].todayTotalCoinAmount + "金币\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 签到失败\n";
  }
}
async function signInfo(R) {
  let N = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/signIn/resource?",
    U = "";
  await selectChannel(R, ksjsbapp[R].cookie);
  N += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    if (l.data.signInUnionSpecialAreaData && l.data.signInUnionSpecialAreaData.todaySigned == true) {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 今天已完成签到任务，" + l.data.signInUnionSpecialAreaData.subtitle);
      ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 今天已完成签到任务，" + l.data.signInUnionSpecialAreaData.subtitle + "\n";
    } else {
      if (l.data.signInUnionSpecialAreaData && l.data.signInUnionSpecialAreaData.todaySigned == false) {
        await signIn(R);
      }
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到信息=> 获取签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到信息=> 获取签到失败\n";
  }
}
async function signIn(R) {
  let N = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/signIn/report?";
  let U = "";
  await selectChannel(R, ksjsbapp[R].cookie + "@get" + ("@" + encodeURIComponent("{}")) + ("@" + encodeURIComponent(U)));
  N += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> " + l.data.reportRewardResult.awardInpushInfo.title + "，获得" + l.data.reportRewardResult.awardInpushInfo.multiDayRewardSubTitleSuffix);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> " + l.data.reportRewardResult.awardInpushInfo.title + "，获得" + l.data.reportRewardResult.awardInpushInfo.multiDayRewardSubTitleSuffix + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 签到失败\n";
  }
}
async function treasureBoxInfo(R) {
  let N = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/treasureBox/info?",
    U = "";
  await selectChannel(R, ksjsbapp[R].cookie);
  N += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1&source=timer";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    if (l.data.status == 3) {
      await openBox(R);
    } else {
      l.data.status == 2 ? ($.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 还剩" + l.data.remainSeconds + "秒，可以开启下一个宝箱，可获得" + l.data.rewardCount + l.data.rewardUnit), ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 还剩" + l.data.remainSeconds + "秒，可以开启下一个宝箱，可获得" + l.data.rewardCount + l.data.rewardUnit + "\n") : ($.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 今天宝箱已全部开完"), ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 今天宝箱已全部开完\n");
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 获取宝箱信息失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 获取宝箱信息失败\n";
  }
}
async function openBox(R) {
  let N = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/treasureBox/report?",
    U = "{}";
  await selectChannel(R, ksjsbapp[R].cookie + "@post" + ("@" + encodeURIComponent("{}")) + ("@" + encodeURIComponent(U)));
  N += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(N, U, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 获得" + l.data.title.rewardCount + l.data.title.rewardUnit);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 获得" + l.data.title.rewardCount + l.data.title.rewardUnit + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 开宝箱失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 开宝箱失败\n";
  }
}
async function longSignInfo(R) {
  const N = "https://encourage.kuaishou.com/rest/ug-regular/hugeSignIn/home?source=earnPagePopup";
  let U = "";
  await getReqObject(N, U, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    if (l.data.stage.todaySigned == false) {
      await longSignTaskAll(R, l.data.task.subbizId);
    } else {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 今天已完成签到");
      ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 今天已完成签到\n";
    }
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到奖品=> " + l.data.productView.productName + ", 进度(" + (l.data.productView.allSignedDays - l.data.productView.signInDays) + "/" + l.data.productView.allSignedDays + ")");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到奖品=> " + l.data.productView.productName + ", 进度(" + (l.data.productView.allSignedDays - l.data.productView.signInDays) + "/" + l.data.productView.allSignedDays + ")\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + l.error_msg);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + l.error_msg + "\n";
  }
}
async function longSignTaskAll(R, T) {
  const U = "https://encourage.kuaishou.com/rest/wd/zt/task/list/all";
  let l = "{\"subBizId\":" + T + "}";
  await getReqObject(U, l, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let G = httpResult;
  if (G != null && G.result == 1) {
    let h = G.data.tasks[0].taskId;
    if (G.data.tasks[0].taskStatus == "COMPLETING_TASK") {
      await longSignIn(R, T, h);
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + G.error_msg);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + G.error_msg + "\n";
  }
}
async function longSignIn(R, T, N) {
  let l = "https://encourage.kuaishou.com/rest/wd/zt/task/report?__NS_sig3=baaaeddd9273458e82e7e4e5bbd6b7518367519afbfbf9f9f6f7f4ee",
    G = "{\"reportCount\":1,\"subBizId\":" + T + ",\"taskId\":" + N + "}";
  await getReqObject(l, G, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    if (h.data.taskCompleted == true) {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 完成，");
    }
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 完成\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 签到失败\n";
  }
}
async function timesRewards(R) {
  let N = "https://nebula.kuaishou.com/rest/n/nebula/task/reward?",
    U = "{\"taskId\":197}";
  await selectChannel(R, ksjsbapp[R].cookie + "@post" + ("@" + encodeURIComponent("{}")) + ("@" + encodeURIComponent(U)));
  N += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(N, U, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let l = httpResult;
  if (l != null && l.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 获得" + l.data.popup.amount + l.data.popup.amount);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 获得" + l.data.popup.amount + l.data.popup.amount + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 失败\n";
  }
}
function getScriptAuth(R, T, N) {
  return new Promise((l, G) => {
    const f = apiHost + "/script/permissions/lastest",
      z = {
        appName: R,
        userId: T,
        activityCode: N,
        version: version
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const w = {
      url: f,
      headers: m,
      body: JSON.stringify(z)
    };
    $.post(w, async (B, M, I) => {
      if (I && I != null && I.replace(/\"/g, "").length > 50) {
        const i = I.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(i).toString(CryptoJS.enc.Utf8));
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
      l();
    });
  });
}
function runComplete(R, T) {
  return new Promise((U, l) => {
    const h = apiHost + "/script/run/add",
      O = {
        appName: R,
        userId: T,
        activityCode: activeCode,
        version: version
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const e = {
      url: h,
      headers: z,
      body: JSON.stringify(O)
    };
    $.post(e, async (m, w, B) => {
      U();
    });
  });
}
function loadToken(T) {
  let l = ksjsbapp[T].mobile;
  ksjsb_item = ksjsb_cks["" + l];
  if (ksjsb_item) {
    ksjsbapp[T].refreshToken = ksjsb_item.refreshToken;
    ksjsbapp[T].accessToken = ksjsb_item.accessToken;
    return true;
  } else {
    return false;
  }
}
function saveToken(R) {
  ksjsb_cks[ksjsbapp[R].mobile] = {
    refreshToken: ksjsbapp[R].refreshToken,
    accessToken: ksjsbapp[R].accessToken,
    ts: ts13()
  };
}
async function loadUtils(R) {
  let N = $.getdata("Utils_Code") || "";
  if (!R && N && Object.keys(N).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(N);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async l => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(h => {
      $.setdata(h, "Utils_Code");
      eval(h);
      $.log("📢 JS-Utils加载成功");
      l(creatUtils());
    });
  });
}
function checkAddress(R, T) {
  return new Promise((U, l) => {
    const h = setTimeout(() => {
        U(false);
      }, T),
      O = http.get(R, f => {
        clearTimeout(h);
        if (f.statusCode === 404) {
          U(true);
        } else {
          U(false);
        }
      });
    O.on("error", f => {
      clearTimeout(h);
      U(false);
    });
    O.on("timeout", () => {
      O.abort();
      l(new Error("请求超时"));
    });
  });
}
async function fetchRequest(R, T = 3000) {
  return new Promise((U, l) => {
    const h = {
      url: R + "/docs"
    };
    setTimeout(() => {
      U(false);
    }, T);
    $.get(h, async (O, f, z) => {
      if (f.status == 401) {
        U(true);
      } else {
        U(false);
      }
    });
  });
}
async function httpClientRequest(R, T = 3000) {
  return new Promise((U, l) => {
    const h = {
      url: R + "/"
    };
    setTimeout(() => {
      U(false);
    }, T);
    $httpClient.get(h, async (O, f, z) => {
      if (z == "{\"detail\":\"Not Found\"}") {
        U(true);
      } else {
        U(false);
      }
    });
  });
}
async function redisGet(R, T, N) {
  return new Promise((l, G) => {
    const f = apiHost + "/redis/hash/get/" + T + "/" + N,
      z = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const e = {
      url: f,
      headers: z
    };
    $.get(e, async (w, B, M) => {
      const j = M.replace(/\"/g, "");
      answerTexts[R] = j;
      l();
    });
  });
}
function redisSet(R, T, N) {
  return new Promise((l, G) => {
    const h = apiHost + "/redis/hash/set",
      O = {
        key: R,
        hashKey: T,
        hashValue: N
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const e = {
      url: h,
      headers: z,
      body: JSON.stringify(O)
    };
    $.post(e, async (m, w, B) => {
      l();
    });
  });
}
function redisPop(R) {
  return new Promise((N, U) => {
    const h = apiHost + "/redis/set/pop/" + R,
      O = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const f = {
      url: h,
      headers: O
    };
    $.get(f, async (e, m, w) => {
      const B = w.replace(/\"/g, "");
      popCookie = B;
      N();
    });
  });
}
async function getReqObject(N, U, l) {
  let h = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ksNebula/12.6.51.3538 ISLP/0 StatusHT/50 KDT/PHONE ISDM/0 TitleHT/44 NetType/WIFI ICFO/0 locale/zh-Hans CT/0 Yoda/2.13.9.2 ISLB/0 CoIS/2 ISLM/0 WebViewType/WK BHT/102 AZPREFIX/az2";
  ksjsbapp[l].ua && ksjsbapp[l].ua != "" && (h = ksjsbapp[l].ua);
  let O = getHostname(N);
  const f = {
    "Content-Type": "application/json",
    "User-Agent": h,
    Host: O,
    Cookie: ksjsbapp[l].cookie
  };
  const z = {};
  z.url = N;
  z.headers = f;
  let e = z;
  if (U) {
    e.body = U;
  }
  requestObjects[l] = e;
  return e;
}
function getReqObject_(N, U, l) {
  let h = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  ksjsbapp[l].ua && ksjsbapp[l].ua != "" && (h = ksjsbapp[l].ua);
  let O = getHostname(N);
  const f = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": h,
    Authorization: ksjsbapp[l].auth,
    Host: O
  };
  const z = {
    url: N,
    headers: f
  };
  U && (z.body = U);
  requestObjects[l] = z;
  return z;
}
async function httpRequest(R, T, N) {
  httpResult = null;
  return new Promise(l => {
    $[R](T, async (O, f, z) => {
      try {
        if (O) {
          $.log(N + ": " + R + "请求失败");
          $.log(JSON.stringify(O));
          $.logErr(O);
        } else {
          if (safeGet(z)) {
            httpResult = JSON.parse(z);
            debug == 1 && $.log(httpResult);
          } else {
            const L = new URL(T.url);
            $.log(L.pathname + "发起" + R + "请求时，出现错误，请处理");
          }
        }
      } catch (i) {
        $.logErr(i, f);
      } finally {
        l(httpResult);
      }
    });
  });
}
async function selectChannel(R, T) {
  channels_status[R] == 0 ? await getSign_(R, T) : await getSign(R, T);
}
function getSign_(R, T) {
  return new Promise((U, l) => {
    function h(O) {
      let f = O.toString("utf8");
      requestSigns[R] = f;
      wss[R].removeListener("message", h);
      U(f);
    }
    wss[R].on("message", h);
    if (wss[R].readyState === 1) {
      const f = {
        method: appName,
        params: {}
      };
      f.params.content = T;
      f.params.appName = appName;
      f.params.uuid = userId;
      wss[R].send(JSON.stringify(f), z => {
        z && l(z);
      });
    } else {
      U(getSign(R, T));
      wss[R].removeListener("message", h);
    }
  });
}
function getSign(R, T) {
  return new Promise((U, l) => {
    const h = apiHost + "/sign/ksjsb",
      O = {
        content: T,
        appName: appName,
        uuid: userId
      };
    const z = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const e = {
      url: h,
      headers: z,
      body: JSON.stringify(O)
    };
    $.post(e, async (m, w, B) => {
      const M = B.replace(/\"/g, "");
      requestSigns[R] = M;
      U();
    });
  });
}
function sortUrlParams(R, T, N) {
  const l = url2obj(R);
  T.forEach(O => {
    delete l[O];
  });
  Object.assign(l, N);
  const G = Object.keys(l).sort();
  const h = G.map(O => O + "=" + l[O]).join("&");
  return h;
}
function url2obj(T) {
  T = T.replace(/\"/g, "");
  var l,
    G = {},
    h = T.slice(T.indexOf("?") + 1).split("&");
  for (var O = 0; O < h.length; O++) {
    l = h[O].split("=");
    G[l[0]] = l[1];
  }
  return G;
}
function convertStringToJson(T) {
  const l = T.replace(/[{} ]/g, ""),
    G = l.split(","),
    h = {};
  G.forEach(O => {
    const [e, m] = O.split("=");
    h[e] = m;
  });
  return h;
}
function getHostname(T) {
  let l = T.substr(T.indexOf("//") + 2),
    G = l.substr(0, l.indexOf("/")),
    h = "";
  let O = G.indexOf(":");
  if (O > 0) {
    h = G.substr(0, O);
  } else {
    h = G;
  }
  return h;
}
function calculateTimeDifference(T, N) {
  var f = new Date(T);
  var O = new Date(N);
  var z = O - f;
  var e = Math.floor(z / 1000);
  return e;
}
function cutString(R, T) {
  if (R.length * 2 <= T) {
    return R;
  }
  var U = 0;
  var l = "";
  for (var G = 0; G < R.length; G++) {
    l = l + R.charAt(G);
    if (R.charCodeAt(G) > 128) {
      U = U + 2;
      if (U >= T) {
        return l.substring(0, l.length - 1) + "...";
      }
    } else {
      U = U + 1;
      if (U >= T) {
        return l.substring(0, l.length - 2) + "...";
      }
    }
  }
  return l;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(R) {
  try {
    if (typeof JSON.parse(R) == "object") {
      return true;
    }
  } catch (l) {
    console.log(l);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(R) {
  var N = Object.keys(R).map(function (U) {
    return encodeURIComponent(U) + "=" + encodeURIComponent(R[U]);
  }).join("&");
  return N;
}
function compileStr(R) {
  var N = String.fromCharCode(R.charCodeAt(0) + R.length);
  for (var U = 1; U < R.length; U++) {
    N += String.fromCharCode(R.charCodeAt(U) + R.charCodeAt(U - 1));
  }
  return escape(N);
}
function uncompileStr(R) {
  R = unescape(R);
  var N = String.fromCharCode(R.charCodeAt(0) - R.length);
  for (var U = 1; U < R.length; U++) {
    N += String.fromCharCode(R.charCodeAt(U) - N.charCodeAt(U - 1));
  }
  return N;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(R) {
  return new Promise((N, U) => {
    const G = "https://v1.hitokoto.cn/?c=e",
      h = {
        accept: "application/json"
      };
    const O = {
      url: G,
      headers: h
    };
    $.get(O, async (z, e, m) => {
      let w = JSON.parse(m),
        B = w.hitokoto;
      contents[R] = B + " " + B;
      N();
    });
  });
}
function getTime_8() {
  return new Promise((T, N) => {
    const G = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      h = {};
    h.url = G;
    const O = h;
    $.get(O, async (f, z, e) => {
      T(e);
    });
  });
}
function message() {
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(R) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, R);
      } else {
        $.msg($.name, "", R);
      }
    } else {
      $.log(R);
    }
  }
}
async function wxPush(R, T, N) {
  return new Promise((l, G) => {
    const f = "https://wxpusher.zjiecode.com/api/send/message",
      z = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: T,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [N],
        verifyPay: false
      };
    const m = {
      "Content-Type": "application/json"
    };
    const w = {
      url: f,
      headers: m,
      body: JSON.stringify(z)
    };
    $.post(w, async (B, M, I) => {
      l();
    });
  });
}
function Env(R, T) {
  class U {
    constructor(l) {
      this.env = l;
    }
    send(l, G = "GET") {
      l = "string" == typeof l ? {
        url: l
      } : l;
      let f = this.get;
      "POST" === G && (f = this.post);
      return new Promise((z, m) => {
        f.call(this, l, (B, M, I) => {
          B ? m(B) : z(M);
        });
      });
    }
    get(l) {
      return this.send.call(this.env, l);
    }
    post(l) {
      return this.send.call(this.env, l, "POST");
    }
  }
  return new class {
    constructor(l, G) {
      const O = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const f = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = O;
      this.logLevelPrefixs = f;
      this.logLevel = "info";
      this.name = l;
      this.http = new U(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, G);
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
    toObj(l, G = null) {
      try {
        return JSON.parse(l);
      } catch {
        return G;
      }
    }
    toStr(l, G = null, ...h) {
      try {
        return JSON.stringify(l, ...h);
      } catch {
        return G;
      }
    }
    getjson(l, G) {
      let O = G;
      if (this.getdata(l)) {
        try {
          O = JSON.parse(this.getdata(l));
        } catch {}
      }
      return O;
    }
    setjson(l, G) {
      try {
        return this.setdata(JSON.stringify(l), G);
      } catch {
        return !1;
      }
    }
    getScript(l) {
      return new Promise(h => {
        const O = {
          url: l
        };
        this.get(O, (f, z, m) => h(m));
      });
    }
    runScript(l, G) {
      return new Promise(O => {
        let z = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        z = z ? z.replace(/\n/g, "").trim() : z;
        let m = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        m = m ? 1 * m : 20;
        m = G && G.timeout ? G.timeout : m;
        const w = {
          script_text: l,
          mock_type: "cron",
          timeout: m
        };
        const [B, M] = z.split("@"),
          I = {
            url: "http://" + M + "/v1/scripting/evaluate",
            body: w,
            headers: {
              "X-Key": B,
              Accept: "*/*"
            },
            timeout: m
          };
        this.post(I, (L, j, J) => O(J));
      }).catch(O => this.logErr(O));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const h = this.path.resolve(this.dataFile),
          O = this.path.resolve(process.cwd(), this.dataFile),
          f = this.fs.existsSync(h),
          z = !f && this.fs.existsSync(O);
        if (!f && !z) {
          return {};
        }
        {
          const w = f ? h : O;
          try {
            return JSON.parse(this.fs.readFileSync(w));
          } catch (M) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const G = this.path.resolve(this.dataFile),
          h = this.path.resolve(process.cwd(), this.dataFile),
          O = this.fs.existsSync(G),
          f = !O && this.fs.existsSync(h),
          z = JSON.stringify(this.data);
        O ? this.fs.writeFileSync(G, z) : f ? this.fs.writeFileSync(h, z) : this.fs.writeFileSync(G, z);
      }
    }
    lodash_get(l, G, h) {
      const f = G.replace(/\[(\d+)\]/g, ".$1").split(".");
      let z = l;
      for (const m of f) if (z = Object(z)[m], void 0 === z) {
        return h;
      }
      return z;
    }
    lodash_set(l, G, h) {
      Object(l) !== l || (Array.isArray(G) || (G = G.toString().match(/[^.[\]]+/g) || []), G.slice(0, -1).reduce((z, m, w) => Object(z[m]) === z[m] ? z[m] : z[m] = Math.abs(G[w + 1]) >> 0 == +G[w + 1] ? [] : {}, l)[G[G.length - 1]] = h);
      return l;
    }
    getdata(l) {
      let G = this.getval(l);
      if (/^@/.test(l)) {
        const [, O, f] = /^@(.*?)\.(.*?)$/.exec(l),
          z = O ? this.getval(O) : "";
        if (z) {
          try {
            const m = JSON.parse(z);
            G = m ? this.lodash_get(m, f, "") : G;
          } catch (B) {
            G = "";
          }
        }
      }
      return G;
    }
    setdata(l, G) {
      let f = !1;
      if (/^@/.test(G)) {
        const [, z, m] = /^@(.*?)\.(.*?)$/.exec(G),
          w = this.getval(z),
          B = z ? "null" === w ? null : w || "{}" : "{}";
        try {
          const I = JSON.parse(B);
          this.lodash_set(I, m, l);
          f = this.setval(JSON.stringify(I), z);
        } catch (L) {
          const J = {};
          this.lodash_set(J, m, l);
          f = this.setval(JSON.stringify(J), z);
        }
      } else {
        f = this.setval(l, G);
      }
      return f;
    }
    getval(l) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(l);
        case "Quantumult X":
          return $prefs.valueForKey(l);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[l];
        default:
          return this.data && this.data[l] || null;
      }
    }
    setval(l, G) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(l, G);
        case "Quantumult X":
          return $prefs.setValueForKey(l, G);
        case "Node.js":
          this.data = this.loaddata();
          this.data[G] = l;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[G] || null;
      }
    }
    initGotEnv(l) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      l && (l.headers = l.headers ? l.headers : {}, l && (l.headers = l.headers ? l.headers : {}, void 0 === l.headers.cookie && void 0 === l.headers.Cookie && void 0 === l.cookieJar && (l.cookieJar = this.ckjar)));
    }
    get(l, G = () => {}) {
      const O = {
        redirection: !1
      };
      switch (l.headers && (delete l.headers["Content-Type"], delete l.headers["Content-Length"], delete l.headers["content-type"], delete l.headers["content-length"]), l.params && (l.url += "?" + this.queryStr(l.params)), void 0 === l.followRedirect || l.followRedirect || ((this.isSurge() || this.isLoon()) && (l["auto-redirect"] = !1), this.isQuanX() && (l.opts ? l.opts.redirection = !1 : l.opts = O)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const f = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (l.headers = l.headers || {}, Object.assign(l.headers, f));
          $httpClient.get(l, (w, B, M) => {
            !w && B && (B.body = M, B.statusCode = B.status ? B.status : B.statusCode, B.status = B.statusCode);
            G(w, B, M);
          });
          break;
        case "Quantumult X":
          const z = {
            hints: !1
          };
          this.isNeedRewrite && (l.opts = l.opts || {}, Object.assign(l.opts, z));
          $task.fetch(l).then(w => {
            const {
                statusCode: M,
                statusCode: I,
                headers: L,
                body: j,
                bodyBytes: J
              } = w,
              K = {
                status: M,
                statusCode: I,
                headers: L,
                body: j,
                bodyBytes: J
              };
            G(null, K, j, J);
          }, w => G(w && w.error || "UndefinedError"));
          break;
        case "Node.js":
          let m = require("iconv-lite");
          this.initGotEnv(l);
          this.got(l).on("redirect", (w, B) => {
            try {
              if (w.headers["set-cookie"]) {
                const j = w.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                j && this.ckjar.setCookieSync(j, null);
                B.cookieJar = this.ckjar;
              }
            } catch (i) {
              this.logErr(i);
            }
          }).then(w => {
            const {
                statusCode: M,
                statusCode: I,
                headers: L,
                rawBody: j
              } = w,
              J = m.decode(j, this.encoding),
              K = {
                status: M,
                statusCode: I,
                headers: L,
                rawBody: j,
                body: J
              };
            G(null, K, J);
          }, w => {
            const {
              message: M,
              response: I
            } = w;
            G(M, I, I && m.decode(I.rawBody, this.encoding));
          });
          break;
      }
    }
    post(l, G = () => {}) {
      const f = l.method ? l.method.toLocaleLowerCase() : "post",
        z = {
          redirection: !1
        };
      switch (l.body && l.headers && !l.headers["Content-Type"] && !l.headers["content-type"] && (l.headers["content-type"] = "application/x-www-form-urlencoded"), l.headers && (delete l.headers["Content-Length"], delete l.headers["content-length"]), void 0 === l.followRedirect || l.followRedirect || ((this.isSurge() || this.isLoon()) && (l["auto-redirect"] = !1), this.isQuanX() && (l.opts ? l.opts.redirection = !1 : l.opts = z)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const m = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (l.headers = l.headers || {}, Object.assign(l.headers, m));
          $httpClient[f](l, (L, j, J) => {
            !L && j && (j.body = J, j.statusCode = j.status ? j.status : j.statusCode, j.status = j.statusCode);
            G(L, j, J);
          });
          break;
        case "Quantumult X":
          const w = {
            hints: !1
          };
          l.method = f;
          this.isNeedRewrite && (l.opts = l.opts || {}, Object.assign(l.opts, w));
          $task.fetch(l).then(L => {
            const {
                statusCode: J,
                statusCode: K,
                headers: q,
                body: Z,
                bodyBytes: Y
              } = L,
              d = {
                status: J,
                statusCode: K,
                headers: q,
                body: Z,
                bodyBytes: Y
              };
            G(null, d, Z, Y);
          }, L => G(L && L.error || "UndefinedError"));
          break;
        case "Node.js":
          let B = require("iconv-lite");
          this.initGotEnv(l);
          const {
            url: M,
            ...I
          } = l;
          this.got[f](M, I).then(L => {
            const {
                statusCode: J,
                statusCode: K,
                headers: q,
                rawBody: Z
              } = L,
              Y = B.decode(Z, this.encoding),
              d = {
                status: J,
                statusCode: K,
                headers: q,
                rawBody: Z,
                body: Y
              };
            G(null, d, Y);
          }, L => {
            const {
              message: j,
              response: J
            } = L;
            G(j, J, J && B.decode(J.rawBody, this.encoding));
          });
          break;
      }
    }
    time(l, G = null) {
      const O = G ? new Date(G) : new Date();
      let f = {
        "M+": O.getMonth() + 1,
        "d+": O.getDate(),
        "H+": O.getHours(),
        "m+": O.getMinutes(),
        "s+": O.getSeconds(),
        "q+": Math.floor((O.getMonth() + 3) / 3),
        S: O.getMilliseconds()
      };
      /(y+)/.test(l) && (l = l.replace(RegExp.$1, (O.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let z in f) new RegExp("(" + z + ")").test(l) && (l = l.replace(RegExp.$1, 1 == RegExp.$1.length ? f[z] : ("00" + f[z]).substr(("" + f[z]).length)));
      return l;
    }
    queryStr(l) {
      let h = "";
      for (const O in l) {
        let z = l[O];
        null != z && "" !== z && ("object" == typeof z && (z = JSON.stringify(z)), h += O + "=" + z + "&");
      }
      h = h.substring(0, h.length - 1);
      return h;
    }
    msg(l = R, G = "", h = "", O = {}) {
      const m = w => {
        const {
          $open: I,
          $copy: L,
          $media: j,
          $mediaMime: J
        } = w;
        switch (typeof w) {
          case void 0:
            return w;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const K = {
                  url: w
                };
                return K;
              case "Loon":
              case "Shadowrocket":
                return w;
              case "Quantumult X":
                const q = {
                  "open-url": w
                };
                return q;
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
                  const Y = {};
                  let d = w.openUrl || w.url || w["open-url"] || I;
                  d && Object.assign(Y, {
                    action: "open-url",
                    url: d
                  });
                  let x = w["update-pasteboard"] || w.updatePasteboard || L;
                  if (x && Object.assign(Y, {
                    action: "clipboard",
                    text: x
                  }), j) {
                    let g, X, D;
                    if (j.startsWith("http")) {
                      g = j;
                    } else {
                      if (j.startsWith("data:")) {
                        const [F] = j.split(";"),
                          [, H] = j.split(",");
                        X = H;
                        D = F.replace("data:", "");
                      } else {
                        X = j;
                        D = (u => {
                          const c = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var v in c) if (0 === u.indexOf(v)) {
                            return c[v];
                          }
                          return null;
                        })(j);
                      }
                    }
                    Object.assign(Y, {
                      "media-url": g,
                      "media-base64": X,
                      "media-base64-mime": J ?? D
                    });
                  }
                  const P = {};
                  P["auto-dismiss"] = w["auto-dismiss"];
                  P.sound = w.sound;
                  Object.assign(Y, P);
                  return Y;
                }
              case "Loon":
                {
                  const c = {};
                  let E = w.openUrl || w.url || w["open-url"] || I;
                  E && Object.assign(c, {
                    openUrl: E
                  });
                  let b = w.mediaUrl || w["media-url"];
                  j?.["startsWith"]("http") && (b = j);
                  b && Object.assign(c, {
                    mediaUrl: b
                  });
                  console.log(JSON.stringify(c));
                  return c;
                }
              case "Quantumult X":
                {
                  const y = {};
                  let V = w["open-url"] || w.url || w.openUrl || I;
                  V && Object.assign(y, {
                    "open-url": V
                  });
                  let C = w["media-url"] || w.mediaUrl;
                  j?.["startsWith"]("http") && (C = j);
                  C && Object.assign(y, {
                    "media-url": C
                  });
                  let A = w["update-pasteboard"] || w.updatePasteboard || L;
                  A && Object.assign(y, {
                    "update-pasteboard": A
                  });
                  console.log(JSON.stringify(y));
                  return y;
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
            $notification.post(l, G, h, m(O));
            break;
          case "Quantumult X":
            $notify(l, G, h, m(O));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let w = ["", "==============📣系统通知📣=============="];
        w.push(l);
        G && w.push(G);
        h && w.push(h);
        console.log(w.join("\n"));
        this.logs = this.logs.concat(w);
      }
    }
    debug(...l) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (l.length > 0 && (this.logs = [...this.logs, ...l]), console.log("" + this.logLevelPrefixs.debug + l.map(h => h ?? String(h)).join(this.logSeparator)));
    }
    info(...l) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (l.length > 0 && (this.logs = [...this.logs, ...l]), console.log("" + this.logLevelPrefixs.info + l.map(G => G ?? String(G)).join(this.logSeparator)));
    }
    warn(...l) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (l.length > 0 && (this.logs = [...this.logs, ...l]), console.log("" + this.logLevelPrefixs.warn + l.map(h => h ?? String(h)).join(this.logSeparator)));
    }
    error(...l) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (l.length > 0 && (this.logs = [...this.logs, ...l]), console.log("" + this.logLevelPrefixs.error + l.map(G => G ?? String(G)).join(this.logSeparator)));
    }
    log(...l) {
      l.length > 0 && (this.logs = [...this.logs, ...l]);
      console.log(l.map(G => G ?? String(G)).join(this.logSeparator));
    }
    logErr(l, G) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", G, l);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", G, void 0 !== l.message ? l.message : l, l.stack);
          break;
      }
    }
    wait(l) {
      return new Promise(G => setTimeout(G, l));
    }
    done(l = {}) {
      const G = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + G + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(l);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(R, T);
}