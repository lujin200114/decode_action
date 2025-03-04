//Tue Mar 04 2025 14:27:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("快手极速版"),
  version = "V1.0.9",
  appName = "ksjsbapp";
let ksjsbapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", R => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
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
  ksjsblogs = [];
let wss = [],
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
  multiAccount = 1;
let buyCount = 1,
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
    let t = false;
    const h = apiHost.split("&"),
      o = h.length;
    for (let G = 0; G < o; G++) {
      if ($.isNode()) {
        t = await checkAddress("" + h[G], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          t = await httpClientRequest("" + h[G], 2500);
        } else {
          t = await fetchRequest("" + h[G], 2500);
        }
      }
      if (t == true) {
        apiHost = h[G];
        $.log("📢 接口" + (G + 1) + "[" + h[G] + "]服务器接口正常! 🎉");
        break;
      }
      if (G == o - 1 && t == false) {
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
        O = new Date().getTime();
      if (O > w) {
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
        let j = new Date(vipDate).getTime(),
          Q = new Date().getTime();
        if (Q > j) {
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
    let x = [],
      s = ksjsbapp.length,
      z = 0;
    if ($.isNode() && process.env.KSJSB_THREAD_COUNT) {
      z = parseInt(process.env.KSJSB_THREAD_COUNT);
    } else {
      z = s;
    }
    let f = ksjsbapp.length;
    if (z >= s) {
      z = s;
      f = 1;
      $.log("📢 你设置的线程数是" + z + "，账号个数是" + s + "，" + f + "次可全部跑完。");
      for (let R1 = 0; R1 < ksjsbapp.length; R1++) {
        x.push(runMultiTasks(R1));
        ksjsblogs[R1] = "";
        if ($.isNode()) {
          channels_status[R1] = 0;
          await init_ws(R1);
        } else {
          channels_status[R1] = 1;
        }
      }
      await Promise.allSettled(x).then(R5 => {
        if ($.isNode() && saveFile) {
          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
          fs.writeFileSync(ksjsb_ck_file, JSON.stringify(ksjsb_cks, null, 2));
        }
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
      f = Math.ceil(s / z);
      $.log("📢 你设置的线程数是" + z + "，账号个数是" + s + "，计算后分" + f + "次执行，一次可执行" + z + "个账号，最后一次如果不够" + z + "个账号，剩多少个账号就跑几个账号。");
      for (let R7 = 0; R7 < f; R7++) {
        for (let R8 = R7 * z; R8 < z * (R7 + 1) && R8 < s; R8++) {
          x.push(runMultiTasks(R8));
          ksjsblogs[R8] = "";
          channels_status[R8] = 1;
          await init_ws(R8);
        }
        await Promise.allSettled(x).then(RR => {
          x = [];
          if (R7 == f - 1) {
            $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(ksjsb_ck_file, JSON.stringify(ksjsb_cks, null, 2)));
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let Ro = 0; Ro < ksjsbapp.length; Ro++) {
              $.log(ksjsblogs[Ro]);
              sendlogs += ksjsblogs[Ro];
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
  return new Promise((V, t) => {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开始执行 working......");
    runSubTask(V, R);
  });
}
async function init_ws(R) {
  if ($.isNode()) {
    if (reconectCounts[R] > 0) {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[R] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[R].on("open", function h() {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签名通道已连接");
    });
    wss[R].on("close", function o() {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[R].on("error", function x() {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[R] = 1;
      reconectCounts[R]++;
      if (reconectCounts[R] <= 3) {
        init_ws(R);
      }
    });
  }
}
async function runSubTask(R, r) {
  await $.wait(3000, 5000);
  await userInfo(r);
  await commonSignInfo(r);
  await $.wait(3000, 5000);
  await signInfo(r);
  await longSignInfo(r);
  await $.wait(3000, 5000);
  await treasureBoxInfo(r);
  $.isNode() && (await wss[r].close());
  await runComplete(appName, userId);
  R();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const t = $request.body;
    let h = ksjsbuserck - 1;
    if (ksjsbapp[h]) {
      ksjsbapp[h].token_body = t;
    } else {
      const x = {
        token_body: t
      };
      ksjsbapp[h] = x;
    }
    $.setdata(JSON.stringify(ksjsbapp, null, 2), "ksjsbapp");
    $.msg($.name, "快音账号" + (h + 1) + "Token获取成功！🎉");
  }
}
async function adTask(R, r, V) {
  const h = "https://api.e.kuaishou.com/rest/e/v1/reward/ad";
  const o = "encData=WlTu3eTU6mG5geHodUZgWV5mBUFsA0ZYqEZMq8uH4mlXSnVSKjJxWR/Fc2VddWfgXijgdvW3NKcV3fpT378hFDQtxnyt44Y/7HeqkOAhubxU6ONgRVT7PZ5H46Ewlq2jQ4Pdip7u9qMNTyaEFSuo5jXtEHqKRA/ivEqCXi9kgj5eHtwxHbe2votmjQJHi5L/lA6D1zhSlBd/2bEMA5bSgF/vqINLEYErX0bn4X%2Bi90GMg%2BF1unit43U8boMTRaP4W/LyTLWX1t37g3IfsdC6XhbW9rt/mZLY2FfnAT7TXwA0QHceIGqWNteXPW38mAyKeclrh/UB0ugOeL/YatMCZIapI1yizJ0gcl%2BM23ctUXcV2/m%2BDaFlBxDbIzS6Wa7inEDrjV9nc5NAYU7FU21vn3OSi1xEe6lkEyoZ0jPkywmHeoDkKc2hUBwvFyy5O4mCkueOtRBhYLCt5qs/rpm/hoL2TXTgFpWZKVLy2E0urTvfCWAg1iokooj/qCSpMqTJW6TIuZ4ISjO%2BObJHiuefRYGQG5ZqRiCOusB6AuSkHD/qiCEfdf%2BEuqPk058LDdNFaJhXIwh%2B4ArfPWmGnbrKY4Sj3PbVx1punfEItviaGrw14BwPtcwL8eceQImJScG1qHMLS0QWYo4mAsp82Mr/0eE6VnePQyWvBvw3CA/9S47Mb/tPE3PTWaoJuNnrbpjY1rPgRDQEsmwO8oN%2BkJUWeiB9%2BCbZjw0Ln06I3S93FlPOGmSfPNjP0mILnpeRFz2IdEnvjWpltluWWvCkxFzT5UVdyqVe7HFbrih2ZQiHJ7ptJIdAMHrGPCxiFwL2dX6MygDKz8Tx7lDr/P8RikF/CfNd0JmzwW5nC9jAVUSZwdBm8%2BM84MjS/qaFV8AJI4zxOehGSQaw031FdimyJEf3sK29C/cgW1RpdraR8gASq4Iv42Rqet3uv8z6ebzceMt%2B3qDOe6K7kBdHCjcjsbS6a7Woq/FhElpcbOEU%2BsdvcXbXkYVofFcZvWMYv/aGjYOx/pc8ocuE0C7%2B6LNn/xNT917vGsr9TyLELjA74wTXepENMmgBN61iIgeWFMGDo40wB3cxddq%2BhCCkRVq5jIdciQehAtzPWaEVtkkgxMtleEelP0lDcfqFckokjP6dUrC/kvl3n659qKr4EVV2N24Yznavq8ufeGOpkiSOQc7znrapw8Q97rHPU/QXHhCddab9UeW2k5ph8ks%3D&sign=5a54eedde4d4ea61b384d9b07bfbfe8d0aceace7e578951f73b2acd2d4cbd0fe";
  requestObjects[V] = await getReqObject(h, o, V);
  requestObjects[V].headers["Content-Type"] = "application/x-www-form-urlencoded";
  requestObjects[V].headers.Host = "api.e.kuaishou.com";
  await httpRequest("post", requestObjects[V], printCaller());
  let x = httpResult;
  if (x.result == 1) {
    const s = x.impAdInfo[0].pageId,
      z = x.impAdInfo[0].subPageId,
      f = x.llsid,
      U = x.impAdInfo[0].adInfo[0].adBaseInfo.creativeId,
      G = x.impAdInfo[0].adInfo[0].adBaseInfo.inspireAdInfo.inspireAdBillTime;
    await $.wait(G);
    await oldReward(R, r, U, f, s, z, G, V);
  }
}
async function oldReward(R, r, V, t, h, o, x, s) {
  const f = new Date().getTime().toString(),
    U = (new Date().getTime() - x).toString(),
    G = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward";
  let S = "bizStr={\"businessId\":" + r + ",\"endTime\":" + f + ",\"extParams\":\"1ee74def7bb6fc015b0ba1dde79887ba4f839df5d941203d745b5db6b0e0ca97779a99b6b9b573a7a781f0b3dd116e81cf3cc6811816b891f2bd0b421f2a89df786c69b2546fc534f468e9263d8c5bc0f92c10afb96f511415a57be7311edd52\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + V + ",\"extInfo\":\"\",\"llsid\":" + t + ",\"taskType\":1}],\"pageId\":" + h + ",\"posId\":774,\"startTime\":" + U + ",\"subPageId\":" + o + "}";
  r == 17 && (S = "bizStr={\"endTime\":" + f + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + V + ",\"extInfo\":\"\",\"llsid\":" + t + ",\"taskType\":1}],\"startTime\":" + U + ",\"taskId\":0}");
  (r == 5 || r == 139 || r == 77) && (S = "bizStr={\"endTime\":" + f + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + V + ",\"extInfo\":\"\",\"llsid\":" + t + ",\"taskType\":1}],\"startTime\":" + U + ",\"taskId\":136}");
  requestObjects[s] = await getReqObject(G, S, s);
  requestObjects[s].headers["Content-Type"] = "application/x-www-form-urlencoded";
  requestObjects[s].headers.Host = "api.e.kuaishou.com";
  await httpRequest("post", requestObjects[s], printCaller());
  let q = httpResult;
  if (q.result == 1) {
    $.log("[账号" + (s + 1) + "]: " + R + "获得" + q.data.awardAmount + "金币 🎉");
    content += "[账号" + (s + 1) + "]: " + R + "获得" + q.data.awardAmount + "金币 🎉\n";
  } else {
    $.log("[账号" + (s + 1) + "]: " + R + "=>" + q.error_msg);
  }
}
async function userInfo(R) {
  const V = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo";
  let t = "";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户名=> " + h.data.userData.nickname);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户名=> " + h.data.userData.nickname + "\n";
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 余额=> " + h.data.totalCash);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户名=> " + h.data.totalCash + "\n";
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 金币=> " + h.data.totalCoin);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 金币=> " + h.data.totalCoin + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户信息=> 获取用户信息失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 用户信息=> 获取用户信息失败\n";
  }
}
async function commonSignInfo(R) {
  const V = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks";
  let t = "";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    let x = h.data.dailyTasks.find(s => s.id == 20022);
    if (x && x.extParam.todaySigned == false) {
      await signIn(R);
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到信息=> 获取签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到信息=> 获取签到失败\n";
  }
}
async function commonSignIn(R) {
  const V = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/taskByIds?sigCatVer=1&taskIds=20022";
  let t = "";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  h != null && h.result == 1 ? ($.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 普通签到获得" + h.data.refreshTasks["20022"].todayTotalCoinAmount + "金币"), ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 普通签到获得" + h.data.refreshTasks["20022"].todayTotalCoinAmount + "金币\n") : ($.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 签到失败"), ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 普通签到=> 签到失败\n");
}
async function signInfo(R) {
  let V = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/signIn/resource?",
    t = "";
  await selectChannel(R, ksjsbapp[R].cookie);
  V += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    if (h.data.signInUnionSpecialAreaData && h.data.signInUnionSpecialAreaData.todaySigned == true) {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 今天已完成签到任务，" + h.data.signInUnionSpecialAreaData.subtitle);
      ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 今天已完成签到任务，" + h.data.signInUnionSpecialAreaData.subtitle + "\n";
    } else {
      h.data.signInUnionSpecialAreaData && h.data.signInUnionSpecialAreaData.todaySigned == false && (await signIn(R));
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到信息=> 获取签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到信息=> 获取签到失败\n";
  }
}
async function signIn(R) {
  let V = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/signIn/report?",
    t = "";
  await selectChannel(R, ksjsbapp[R].cookie + "@get" + ("@" + encodeURIComponent("{}")) + "@");
  V += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> " + h.data.reportRewardResult.awardInpushInfo.title + "，获得" + h.data.reportRewardResult.awardInpushInfo.multiDayRewardSubTitleSuffix);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> " + h.data.reportRewardResult.awardInpushInfo.title + "，获得" + h.data.reportRewardResult.awardInpushInfo.multiDayRewardSubTitleSuffix + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 签到=> 签到失败\n";
  }
}
async function treasureBoxInfo(R) {
  let V = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/treasureBox/info?",
    t = "";
  await selectChannel(R, ksjsbapp[R].cookie);
  V += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1&source=timer";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    if (h.data.status == 3) {
      await openBox(R);
    } else {
      if (h.data.status == 2) {
        $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 还剩" + h.data.remainSeconds + "秒，可以开启下一个宝箱，可获得" + h.data.rewardCount + h.data.rewardUnit);
        ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 还剩" + h.data.remainSeconds + "秒，可以开启下一个宝箱，可获得" + h.data.rewardCount + h.data.rewardUnit + "\n";
      } else {
        $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 今天宝箱已全部开完");
        ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 今天宝箱已全部开完\n";
      }
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 获取宝箱信息失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 宝箱信息=> 获取宝箱信息失败\n";
  }
}
async function openBox(R) {
  let V = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/treasureBox/report?";
  let t = "{}";
  await selectChannel(R, ksjsbapp[R].cookie + "@post" + ("@" + encodeURIComponent("{}")) + ("@" + encodeURIComponent(t)));
  V += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(V, t, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let h = httpResult;
  h != null && h.result == 1 ? ($.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 获得" + h.data.title.rewardCount + h.data.title.rewardUnit), ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 获得" + h.data.title.rewardCount + h.data.title.rewardUnit + "\n") : ($.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 开宝箱失败"), ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 开宝箱=> 开宝箱失败\n");
}
async function longSignInfo(R) {
  const V = "https://encourage.kuaishou.com/rest/ug-regular/hugeSignIn/home?source=earnPagePopup";
  let t = "";
  await getReqObject(V, t, R);
  await httpRequest("get", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    if (h.data.stage.todaySigned == false) {
      await longSignTaskAll(R, h.data.task.subbizId);
    } else {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 今天已完成签到");
      ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 今天已完成签到\n";
    }
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到奖品=> " + h.data.productView.productName + ", 进度(" + h.data.productView.signInDays + "/" + h.data.productView.allSignedDays + ")");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到奖品=> " + h.data.productView.productName + ", 进度(" + h.data.productView.signInDays + "/" + h.data.productView.allSignedDays + ")\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + h.error_msg);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + h.error_msg + "\n";
  }
}
async function longSignTaskAll(R, r) {
  const t = "https://encourage.kuaishou.com/rest/wd/zt/task/list/all";
  let h = "{\"subBizId\":" + r + "}";
  await getReqObject(t, h, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let o = httpResult;
  if (o != null && o.result == 1) {
    let x = o.data.tasks[0].taskId;
    if (o.data.tasks[0].taskStatus == "COMPLETING_TASK") {
      await longSignIn(R, r, x);
    }
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + o.error_msg);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到信息=> " + o.error_msg + "\n";
  }
}
async function longSignIn(R, r, V) {
  let h = "https://encourage.kuaishou.com/rest/wd/zt/task/report?__NS_sig3=" + ksjsbapp[R].sig3;
  let o = "{\"reportCount\":1,\"subBizId\":" + r + ",\"taskId\":" + V + "}";
  await getReqObject(h, o, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let x = httpResult;
  if (x != null && x.result == 1) {
    if (x.data.taskCompleted == true) {
      $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 完成，");
    }
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 完成\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 签到失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 长签到=> 签到失败\n";
  }
}
async function timesRewards(R) {
  let V = "https://nebula.kuaishou.com/rest/n/nebula/task/reward?",
    t = "{\"taskId\":197}";
  await selectChannel(R, ksjsbapp[R].cookie + "@post" + ("@" + encodeURIComponent("{}")) + ("@" + encodeURIComponent(t)));
  V += "__NS_sig3=" + requestSigns[R] + "&sigCatVer=1";
  await getReqObject(V, t, R);
  await httpRequest("post", requestObjects[R], printCaller());
  let h = httpResult;
  if (h != null && h.result == 1) {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 获得" + h.data.popup.amount + h.data.popup.amount);
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 获得" + h.data.popup.amount + h.data.popup.amount + "\n";
  } else {
    $.log("[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 失败");
    ksjsblogs[R] += "[账号" + (R + 1 < 10 ? "0" + (R + 1) : R + 1) + "]: 看视频得金币=> 失败\n";
  }
}
function getScriptAuth(R, r, V) {
  return new Promise((h, o) => {
    const z = apiHost + "/script/permissions/lastest",
      i = {
        appName: R,
        userId: r,
        activityCode: V,
        version: version
      };
    const U = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const G = {
      url: z,
      headers: U,
      body: JSON.stringify(i)
    };
    $.post(G, async (S, q, b) => {
      if (b && b != null && b.replace(/\"/g, "").length > 50) {
        const p = b.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(p).toString(CryptoJS.enc.Utf8));
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
        } catch (w) {
          $.log(w);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      h();
    });
  });
}
function runComplete(R, r) {
  return new Promise((t, h) => {
    const x = apiHost + "/script/run/add",
      s = {
        appName: R,
        userId: r,
        activityCode: activeCode,
        version: version
      };
    const i = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const f = {
      url: x,
      headers: i,
      body: JSON.stringify(s)
    };
    $.post(f, async (U, G, S) => {
      t();
    });
  });
}
function loadToken(r) {
  let h = ksjsbapp[r].mobile;
  ksjsb_item = ksjsb_cks["" + h];
  if (ksjsb_item) {
    ksjsbapp[r].refreshToken = ksjsb_item.refreshToken;
    ksjsbapp[r].accessToken = ksjsb_item.accessToken;
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
  let V = $.getdata("Utils_Code") || "";
  if (!R && V && Object.keys(V).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(V);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async h => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(s => {
      $.setdata(s, "Utils_Code");
      eval(s);
      $.log("📢 JS-Utils加载成功");
      h(creatUtils());
    });
  });
}
function checkAddress(R, r) {
  return new Promise((t, h) => {
    const x = setTimeout(() => {
        t(false);
      }, r),
      s = http.get(R, z => {
        clearTimeout(x);
        z.statusCode === 404 ? t(true) : t(false);
      });
    s.on("error", z => {
      clearTimeout(x);
      t(false);
    });
    s.on("timeout", () => {
      s.abort();
      h(new Error("请求超时"));
    });
  });
}
async function fetchRequest(R, r = 3000) {
  return new Promise((t, h) => {
    const x = {
      url: R + "/docs"
    };
    setTimeout(() => {
      t(false);
    }, r);
    $.get(x, async (s, z, i) => {
      if (z.status == 401) {
        t(true);
      } else {
        t(false);
      }
    });
  });
}
async function httpClientRequest(R, r = 3000) {
  return new Promise((t, h) => {
    const s = {
      url: R + "/"
    };
    setTimeout(() => {
      t(false);
    }, r);
    $httpClient.get(s, async (z, i, f) => {
      if (f == "{\"detail\":\"Not Found\"}") {
        t(true);
      } else {
        t(false);
      }
    });
  });
}
async function redisGet(R, r, V) {
  return new Promise((h, o) => {
    const s = apiHost + "/redis/hash/get/" + r + "/" + V,
      z = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const f = {
      url: s,
      headers: z
    };
    $.get(f, async (G, S, q) => {
      const N = q.replace(/\"/g, "");
      answerTexts[R] = N;
      h();
    });
  });
}
function redisSet(R, r, V) {
  return new Promise((h, o) => {
    const z = apiHost + "/redis/hash/set",
      i = {
        key: R,
        hashKey: r,
        hashValue: V
      };
    const U = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const G = {
      url: z,
      headers: U,
      body: JSON.stringify(i)
    };
    $.post(G, async (S, q, b) => {
      h();
    });
  });
}
function redisPop(R) {
  return new Promise((V, t) => {
    const o = apiHost + "/redis/set/pop/" + R,
      x = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const s = {
      url: o,
      headers: x
    };
    $.get(s, async (i, f, U) => {
      const S = U.replace(/\"/g, "");
      popCookie = S;
      V();
    });
  });
}
async function getReqObject(V, t, h) {
  let x = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ksNebula/12.6.51.3538 ISLP/0 StatusHT/50 KDT/PHONE ISDM/0 TitleHT/44 NetType/WIFI ICFO/0 locale/zh-Hans CT/0 Yoda/2.13.9.2 ISLB/0 CoIS/2 ISLM/0 WebViewType/WK BHT/102 AZPREFIX/az2";
  ksjsbapp[h].ua && ksjsbapp[h].ua != "" && (x = ksjsbapp[h].ua);
  let s = getHostname(V);
  const z = {
    "Content-Type": "application/json",
    "User-Agent": x,
    Host: s,
    Cookie: ksjsbapp[h].cookie
  };
  const f = {};
  f.url = V;
  f.headers = z;
  let U = f;
  if (t) {
    U.body = t;
  }
  requestObjects[h] = U;
  return U;
}
function getReqObject_(V, t, h) {
  let x = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (ksjsbapp[h].ua && ksjsbapp[h].ua != "") {
    x = ksjsbapp[h].ua;
  }
  let s = getHostname(V);
  const z = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": x,
    Authorization: ksjsbapp[h].auth,
    Host: s
  };
  const f = {
    url: V,
    headers: z
  };
  if (t) {
    f.body = t;
  }
  requestObjects[h] = f;
  return f;
}
async function httpRequest(R, r, V) {
  httpResult = null;
  return new Promise(h => {
    $[R](r, async (x, s, z) => {
      try {
        if (x) {
          $.log(V + ": " + R + "请求失败");
          $.log(JSON.stringify(x));
          $.logErr(x);
        } else {
          if (safeGet(z)) {
            httpResult = JSON.parse(z);
          } else {
            const b = new URL(r.url);
            $.log(b.pathname + "发起" + R + "请求时，出现错误，请处理");
          }
        }
      } catch (E) {
        $.logErr(E, s);
      } finally {
        h(httpResult);
      }
    });
  });
}
async function selectChannel(R, r) {
  if (channels_status[R] == 0) {
    await getSign_(R, r);
  } else {
    await getSign(R, r);
  }
}
function getSign_(R, r) {
  return new Promise((t, h) => {
    function x(s) {
      let U = s.toString("utf8");
      requestSigns[R] = U;
      wss[R].removeListener("message", x);
      t(U);
    }
    wss[R].on("message", x);
    if (wss[R].readyState === 1) {
      const z = {
        method: appName,
        params: {}
      };
      z.params.content = r;
      z.params.appName = appName;
      z.params.uuid = userId;
      wss[R].send(JSON.stringify(z), f => {
        f && h(f);
      });
    } else {
      t(getSign(R, r));
      wss[R].removeListener("message", x);
    }
  });
}
function getSign(R, r) {
  return new Promise((t, h) => {
    const s = apiHost + "/sign/ksjsb",
      z = {
        content: r,
        appName: appName,
        uuid: userId
      };
    const U = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const G = {
      url: s,
      headers: U,
      body: JSON.stringify(z)
    };
    $.post(G, async (S, q, b) => {
      const p = b.replace(/\"/g, "");
      requestSigns[R] = p;
      t();
    });
  });
}
function sortUrlParams(R, r, V) {
  const h = url2obj(R);
  r.forEach(s => {
    delete h[s];
  });
  Object.assign(h, V);
  const o = Object.keys(h).sort(),
    x = o.map(s => s + "=" + h[s]).join("&");
  return x;
}
function url2obj(R) {
  R = R.replace(/\"/g, "");
  var V;
  var t = {};
  var h = R.slice(R.indexOf("?") + 1).split("&");
  for (var o = 0; o < h.length; o++) {
    V = h[o].split("=");
    t[V[0]] = V[1];
  }
  return t;
}
function convertStringToJson(r) {
  const h = r.replace(/[{} ]/g, ""),
    o = h.split(",");
  const x = {};
  o.forEach(s => {
    const [i, f] = s.split("=");
    x[i] = f;
  });
  return x;
}
function getHostname(r) {
  let h = r.substr(r.indexOf("//") + 2),
    o = h.substr(0, h.indexOf("/")),
    x = "";
  let s = o.indexOf(":");
  if (s > 0) {
    x = o.substr(0, s);
  } else {
    x = o;
  }
  return x;
}
function calculateTimeDifference(r, V) {
  var i = new Date(r);
  var s = new Date(V);
  var f = s - i;
  var z = Math.floor(f / 1000);
  return z;
}
function cutString(R, r) {
  if (R.length * 2 <= r) {
    return R;
  }
  var t = 0,
    h = "";
  for (var o = 0; o < R.length; o++) {
    h = h + R.charAt(o);
    if (R.charCodeAt(o) > 128) {
      t = t + 2;
      if (t >= r) {
        return h.substring(0, h.length - 1) + "...";
      }
    } else {
      t = t + 1;
      if (t >= r) {
        return h.substring(0, h.length - 2) + "...";
      }
    }
  }
  return h;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(R) {
  try {
    if (typeof JSON.parse(R) == "object") {
      return true;
    }
  } catch (h) {
    console.log(h);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(R) {
  var V = Object.keys(R).map(function (t) {
    return encodeURIComponent(t) + "=" + encodeURIComponent(R[t]);
  }).join("&");
  return V;
}
function compileStr(R) {
  var V = String.fromCharCode(R.charCodeAt(0) + R.length);
  for (var t = 1; t < R.length; t++) {
    V += String.fromCharCode(R.charCodeAt(t) + R.charCodeAt(t - 1));
  }
  return escape(V);
}
function uncompileStr(R) {
  R = unescape(R);
  var V = String.fromCharCode(R.charCodeAt(0) - R.length);
  for (var t = 1; t < R.length; t++) {
    V += String.fromCharCode(R.charCodeAt(t) - V.charCodeAt(t - 1));
  }
  return V;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(R) {
  return new Promise((V, t) => {
    const x = "https://v1.hitokoto.cn/?c=e",
      s = {
        accept: "application/json"
      };
    const z = {
      url: x,
      headers: s
    };
    $.get(z, async (U, G, S) => {
      let b = JSON.parse(S),
        N = b.hitokoto;
      contents[R] = N + " " + N;
      V();
    });
  });
}
function getTime_8() {
  return new Promise((r, V) => {
    const o = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      x = {
        url: o
      };
    $.get(x, async (z, i, f) => {
      r(f);
    });
  });
}
function message() {
  tz == 1 && $.msg($.name, "", $.message);
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
async function wxPush(R, r, V) {
  return new Promise((h, o) => {
    const s = "https://wxpusher.zjiecode.com/api/send/message",
      z = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: r,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [V],
        verifyPay: false
      };
    const U = {
      "Content-Type": "application/json"
    };
    const G = {
      url: s,
      headers: U,
      body: JSON.stringify(z)
    };
    $.post(G, async (S, q, b) => {
      h();
    });
  });
}
function Env(R, r) {
  class h {
    constructor(o) {
      this.env = o;
    }
    send(o, x = "GET") {
      o = "string" == typeof o ? {
        url: o
      } : o;
      let i = this.get;
      "POST" === x && (i = this.post);
      return new Promise((f, U) => {
        i.call(this, o, (S, q, b) => {
          S ? U(S) : f(q);
        });
      });
    }
    get(o) {
      return this.send.call(this.env, o);
    }
    post(o) {
      return this.send.call(this.env, o, "POST");
    }
  }
  return new class {
    constructor(o, x) {
      const f = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const U = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = f;
      this.logLevelPrefixs = U;
      this.logLevel = "info";
      this.name = o;
      this.http = new h(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, x);
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
    toObj(o, x = null) {
      try {
        return JSON.parse(o);
      } catch {
        return x;
      }
    }
    toStr(o, x = null, ...z) {
      try {
        return JSON.stringify(o, ...z);
      } catch {
        return x;
      }
    }
    getjson(o, x) {
      let i = x;
      if (this.getdata(o)) {
        try {
          i = JSON.parse(this.getdata(o));
        } catch {}
      }
      return i;
    }
    setjson(o, x) {
      try {
        return this.setdata(JSON.stringify(o), x);
      } catch {
        return !1;
      }
    }
    getScript(o) {
      return new Promise(i => {
        const U = {
          url: o
        };
        this.get(U, (G, S, q) => i(q));
      });
    }
    runScript(o, x) {
      return new Promise(z => {
        let U = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        U = U ? U.replace(/\n/g, "").trim() : U;
        let G = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        G = G ? 1 * G : 20;
        G = x && x.timeout ? x.timeout : G;
        const S = {
          script_text: o,
          mock_type: "cron",
          timeout: G
        };
        const [q, b] = U.split("@"),
          N = {
            url: "http://" + b + "/v1/scripting/evaluate",
            body: S,
            headers: {
              "X-Key": q,
              Accept: "*/*"
            },
            timeout: G
          };
        this.post(N, (p, E, K) => z(K));
      }).catch(z => this.logErr(z));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const x = this.path.resolve(this.dataFile),
          z = this.path.resolve(process.cwd(), this.dataFile),
          f = this.fs.existsSync(x),
          U = !f && this.fs.existsSync(z);
        if (!f && !U) {
          return {};
        }
        {
          const S = f ? x : z;
          try {
            return JSON.parse(this.fs.readFileSync(S));
          } catch (b) {
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
          U = this.path.resolve(process.cwd(), this.dataFile),
          G = this.fs.existsSync(f),
          S = !G && this.fs.existsSync(U),
          q = JSON.stringify(this.data);
        G ? this.fs.writeFileSync(f, q) : S ? this.fs.writeFileSync(U, q) : this.fs.writeFileSync(f, q);
      }
    }
    lodash_get(x, z, f) {
      const U = z.replace(/\[(\d+)\]/g, ".$1").split(".");
      let G = x;
      for (const S of U) if (G = Object(G)[S], void 0 === G) {
        return f;
      }
      return G;
    }
    lodash_set(o, x, z) {
      Object(o) !== o || (Array.isArray(x) || (x = x.toString().match(/[^.[\]]+/g) || []), x.slice(0, -1).reduce((f, U, G) => Object(f[U]) === f[U] ? f[U] : f[U] = Math.abs(x[G + 1]) >> 0 == +x[G + 1] ? [] : {}, o)[x[x.length - 1]] = z);
      return o;
    }
    getdata(x) {
      let U = this.getval(x);
      if (/^@/.test(x)) {
        const [, G, S] = /^@(.*?)\.(.*?)$/.exec(x),
          q = G ? this.getval(G) : "";
        if (q) {
          try {
            const b = JSON.parse(q);
            U = b ? this.lodash_get(b, S, "") : U;
          } catch (p) {
            U = "";
          }
        }
      }
      return U;
    }
    setdata(x, z) {
      let U = !1;
      if (/^@/.test(z)) {
        const [, G, S] = /^@(.*?)\.(.*?)$/.exec(z),
          q = this.getval(G),
          b = G ? "null" === q ? null : q || "{}" : "{}";
        try {
          const p = JSON.parse(b);
          this.lodash_set(p, S, x);
          U = this.setval(JSON.stringify(p), G);
        } catch (E) {
          const K = {};
          this.lodash_set(K, S, x);
          U = this.setval(JSON.stringify(K), G);
        }
      } else {
        U = this.setval(x, z);
      }
      return U;
    }
    getval(o) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(o);
        case "Quantumult X":
          return $prefs.valueForKey(o);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[o];
        default:
          return this.data && this.data[o] || null;
      }
    }
    setval(o, x) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(o, x);
        case "Quantumult X":
          return $prefs.setValueForKey(o, x);
        case "Node.js":
          this.data = this.loaddata();
          this.data[x] = o;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[x] || null;
      }
    }
    initGotEnv(o) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      o && (o.headers = o.headers ? o.headers : {}, o && (o.headers = o.headers ? o.headers : {}, void 0 === o.headers.cookie && void 0 === o.headers.Cookie && void 0 === o.cookieJar && (o.cookieJar = this.ckjar)));
    }
    get(o, x = () => {}) {
      const f = {
        redirection: !1
      };
      switch (o.headers && (delete o.headers["Content-Type"], delete o.headers["Content-Length"], delete o.headers["content-type"], delete o.headers["content-length"]), o.params && (o.url += "?" + this.queryStr(o.params)), void 0 === o.followRedirect || o.followRedirect || ((this.isSurge() || this.isLoon()) && (o["auto-redirect"] = !1), this.isQuanX() && (o.opts ? o.opts.redirection = !1 : o.opts = f)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const U = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (o.headers = o.headers || {}, Object.assign(o.headers, U));
          $httpClient.get(o, (q, b, N) => {
            !q && b && (b.body = N, b.statusCode = b.status ? b.status : b.statusCode, b.status = b.statusCode);
            x(q, b, N);
          });
          break;
        case "Quantumult X":
          const G = {};
          G.hints = !1;
          this.isNeedRewrite && (o.opts = o.opts || {}, Object.assign(o.opts, G));
          $task.fetch(o).then(q => {
            const {
                statusCode: b,
                statusCode: N,
                headers: p,
                body: E,
                bodyBytes: K
              } = q,
              M = {
                status: b,
                statusCode: N,
                headers: p,
                body: E,
                bodyBytes: K
              };
            x(null, M, E, K);
          }, q => x(q && q.error || "UndefinedError"));
          break;
        case "Node.js":
          let S = require("iconv-lite");
          this.initGotEnv(o);
          this.got(o).on("redirect", (q, b) => {
            try {
              if (q.headers["set-cookie"]) {
                const E = q.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                E && this.ckjar.setCookieSync(E, null);
                b.cookieJar = this.ckjar;
              }
            } catch (M) {
              this.logErr(M);
            }
          }).then(q => {
            const {
                statusCode: b,
                statusCode: N,
                headers: p,
                rawBody: E
              } = q,
              K = S.decode(E, this.encoding),
              M = {
                status: b,
                statusCode: N,
                headers: p,
                rawBody: E,
                body: K
              };
            x(null, M, K);
          }, q => {
            const {
              message: b,
              response: N
            } = q;
            x(b, N, N && S.decode(N.rawBody, this.encoding));
          });
          break;
      }
    }
    post(x, z = () => {}) {
      const U = x.method ? x.method.toLocaleLowerCase() : "post",
        G = {
          redirection: !1
        };
      switch (x.body && x.headers && !x.headers["Content-Type"] && !x.headers["content-type"] && (x.headers["content-type"] = "application/x-www-form-urlencoded"), x.headers && (delete x.headers["Content-Length"], delete x.headers["content-length"]), void 0 === x.followRedirect || x.followRedirect || ((this.isSurge() || this.isLoon()) && (x["auto-redirect"] = !1), this.isQuanX() && (x.opts ? x.opts.redirection = !1 : x.opts = G)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const S = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (x.headers = x.headers || {}, Object.assign(x.headers, S));
          $httpClient[U](x, (E, K, M) => {
            !E && K && (K.body = M, K.statusCode = K.status ? K.status : K.statusCode, K.status = K.statusCode);
            z(E, K, M);
          });
          break;
        case "Quantumult X":
          const q = {
            hints: !1
          };
          x.method = U;
          this.isNeedRewrite && (x.opts = x.opts || {}, Object.assign(x.opts, q));
          $task.fetch(x).then(E => {
            const {
                statusCode: M,
                statusCode: w,
                headers: O,
                body: X,
                bodyBytes: W
              } = E,
              F = {
                status: M,
                statusCode: w,
                headers: O,
                body: X,
                bodyBytes: W
              };
            z(null, F, X, W);
          }, E => z(E && E.error || "UndefinedError"));
          break;
        case "Node.js":
          let b = require("iconv-lite");
          this.initGotEnv(x);
          const {
            url: N,
            ...p
          } = x;
          this.got[U](N, p).then(E => {
            const {
                statusCode: K,
                statusCode: M,
                headers: w,
                rawBody: O
              } = E,
              X = b.decode(O, this.encoding),
              W = {
                status: K,
                statusCode: M,
                headers: w,
                rawBody: O,
                body: X
              };
            z(null, W, X);
          }, E => {
            const {
              message: M,
              response: w
            } = E;
            z(M, w, w && b.decode(w.rawBody, this.encoding));
          });
          break;
      }
    }
    time(o, x = null) {
      const U = x ? new Date(x) : new Date();
      let G = {
        "M+": U.getMonth() + 1,
        "d+": U.getDate(),
        "H+": U.getHours(),
        "m+": U.getMinutes(),
        "s+": U.getSeconds(),
        "q+": Math.floor((U.getMonth() + 3) / 3),
        S: U.getMilliseconds()
      };
      /(y+)/.test(o) && (o = o.replace(RegExp.$1, (U.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let S in G) new RegExp("(" + S + ")").test(o) && (o = o.replace(RegExp.$1, 1 == RegExp.$1.length ? G[S] : ("00" + G[S]).substr(("" + G[S]).length)));
      return o;
    }
    queryStr(o) {
      let x = "";
      for (const z in o) {
        let f = o[z];
        null != f && "" !== f && ("object" == typeof f && (f = JSON.stringify(f)), x += z + "=" + f + "&");
      }
      x = x.substring(0, x.length - 1);
      return x;
    }
    msg(x = R, z = "", f = "", U = {}) {
      const S = q => {
        const {
          $open: N,
          $copy: p,
          $media: E,
          $mediaMime: K
        } = q;
        switch (typeof q) {
          case void 0:
            return q;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const M = {
                  url: q
                };
                return M;
              case "Loon":
              case "Shadowrocket":
                return q;
              case "Quantumult X":
                const w = {
                  "open-url": q
                };
                return w;
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
                  const O = {};
                  let X = q.openUrl || q.url || q["open-url"] || N;
                  X && Object.assign(O, {
                    action: "open-url",
                    url: X
                  });
                  let W = q["update-pasteboard"] || q.updatePasteboard || p;
                  if (W && Object.assign(O, {
                    action: "clipboard",
                    text: W
                  }), E) {
                    let A, y, Y;
                    if (E.startsWith("http")) {
                      A = E;
                    } else {
                      if (E.startsWith("data:")) {
                        const [j] = E.split(";"),
                          [, Q] = E.split(",");
                        y = Q;
                        Y = j.replace("data:", "");
                      } else {
                        y = E;
                        Y = (d => {
                          const v = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var g in v) if (0 === d.indexOf(g)) {
                            return v[g];
                          }
                          return null;
                        })(E);
                      }
                    }
                    Object.assign(O, {
                      "media-url": A,
                      "media-base64": y,
                      "media-base64-mime": K ?? Y
                    });
                  }
                  const F = {};
                  F["auto-dismiss"] = q["auto-dismiss"];
                  F.sound = q.sound;
                  Object.assign(O, F);
                  return O;
                }
              case "Loon":
                {
                  const c = {};
                  let v = q.openUrl || q.url || q["open-url"] || N;
                  v && Object.assign(c, {
                    openUrl: v
                  });
                  let L = q.mediaUrl || q["media-url"];
                  E?.["startsWith"]("http") && (L = E);
                  L && Object.assign(c, {
                    mediaUrl: L
                  });
                  console.log(JSON.stringify(c));
                  return c;
                }
              case "Quantumult X":
                {
                  const Z = {};
                  let I = q["open-url"] || q.url || q.openUrl || N;
                  I && Object.assign(Z, {
                    "open-url": I
                  });
                  let B = q["media-url"] || q.mediaUrl;
                  E?.["startsWith"]("http") && (B = E);
                  B && Object.assign(Z, {
                    "media-url": B
                  });
                  let m = q["update-pasteboard"] || q.updatePasteboard || p;
                  m && Object.assign(Z, {
                    "update-pasteboard": m
                  });
                  console.log(JSON.stringify(Z));
                  return Z;
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
            $notification.post(x, z, f, S(U));
            break;
          case "Quantumult X":
            $notify(x, z, f, S(U));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let b = ["", "==============📣系统通知📣=============="];
        b.push(x);
        z && b.push(z);
        f && b.push(f);
        console.log(b.join("\n"));
        this.logs = this.logs.concat(b);
      }
    }
    debug(...o) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (o.length > 0 && (this.logs = [...this.logs, ...o]), console.log("" + this.logLevelPrefixs.debug + o.map(i => i ?? String(i)).join(this.logSeparator)));
    }
    info(...o) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (o.length > 0 && (this.logs = [...this.logs, ...o]), console.log("" + this.logLevelPrefixs.info + o.map(x => x ?? String(x)).join(this.logSeparator)));
    }
    warn(...o) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (o.length > 0 && (this.logs = [...this.logs, ...o]), console.log("" + this.logLevelPrefixs.warn + o.map(x => x ?? String(x)).join(this.logSeparator)));
    }
    error(...o) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (o.length > 0 && (this.logs = [...this.logs, ...o]), console.log("" + this.logLevelPrefixs.error + o.map(x => x ?? String(x)).join(this.logSeparator)));
    }
    log(...o) {
      o.length > 0 && (this.logs = [...this.logs, ...o]);
      console.log(o.map(x => x ?? String(x)).join(this.logSeparator));
    }
    logErr(o, x) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", x, o);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", x, void 0 !== o.message ? o.message : o, o.stack);
          break;
      }
    }
    wait(o) {
      return new Promise(x => setTimeout(x, o));
    }
    done(o = {}) {
      const x = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + x + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(o);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(R, r);
}