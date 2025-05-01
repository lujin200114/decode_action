//Thu May 01 2025 03:05:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("汽水音乐"),
  version = "V1.0.1",
  appName = "qsyyapp";
let qsyyapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet qsyyAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    qsyy: qsyyAPP\n}\n\nmodule.exports = APPS", X => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("qsyyactivecode") || 0,
  qsyyuserck = $.getval("qsyyuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  qsyylogs = [];
let accounts = [],
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  httpResult = "",
  signSwitchs = [],
  userAuth = "",
  scriptAuth = "",
  newest_version = "",
  runAuth = "",
  systemNotify = "";
let vipAuth = "",
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
  process.env.QSYYAPP ? qsyyapp = JSON.parse(process.env.QSYYAPP) : qsyyapp = COOKIES.QSYY;
  userId = process.env.TGUSERID;
  activeCode = process.env.QSYYACTIVECODE;
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
    if (!qsyyapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let l = false;
    const J = apiHost.split("&"),
      u = J.length;
    for (let A = 0; A < u; A++) {
      if ($.isNode()) {
        l = await checkAddress("" + J[A], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          l = await httpClientRequest("" + J[A], 2500);
        } else {
          l = await fetchRequest("" + J[A], 2500);
        }
      }
      if (l == true) {
        apiHost = J[A];
        $.log("📢 接口" + (A + 1) + "[" + J[A] + "]服务器接口正常! 🎉");
        break;
      }
      if (A == u - 1 && l == false) {
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
        m = new Date().getTime();
      if (m > Y) {
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
        $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let H = new Date(vipDate).getTime(),
          s = new Date().getTime();
        if (s > H) {
          $.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (vipAuth != true) {
        $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
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
    if (qsyyapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (qsyyapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + qsyyapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + qsyyapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (qsyyapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    $.log("📢 一共发现了" + qsyyapp.length + "个账号");
    let O = [];
    for (let R = 0; R < qsyyapp.length; R++) {
      O.push(runMultiTasks(R));
      qsyylogs[R] = "";
      signSwitchs[R] = 1;
      if ($.isNode()) {
        channels_status[R] = 0;
        await init_ws(R);
      } else {
        channels_status[R] = 1;
      }
    }
    await Promise.allSettled(O).then(N => {
      $.log("日志整理功能如下：");
      $.log("---------------日志整理开始--------------");
      for (let t = 0; t < qsyyapp.length; t++) {
        $.log(qsyylogs[t]);
        sendlogs += qsyylogs[t];
      }
      $.log("---------------日志整理结束--------------");
      sendMsg(sendlogs);
    });
  }
})().catch(X => $.logErr(X)).finally(() => $.done());
async function runMultiTasks(X) {
  return new Promise((g, l) => {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 开始执行 working......");
    runSubTask(g, X);
  });
}
async function init_ws(X) {
  $.isNode() && (reconectCounts[X] > 0 && $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 尝试重新连接服务器>>>>>>"), wss[X] = new WebSocket(apiHost.replace("http", "ws") + "/ws"), wss[X].on("open", function J() {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签名通道已连接");
  }), wss[X].on("close", function u() {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
  }), wss[X].on("error", function O() {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签名通道已关闭，原因是出现错误");
    channels_status[X] = 1;
    reconectCounts[X]++;
    reconectCounts[X] <= 3 && init_ws(X);
  }));
}
async function runSubTask(X, D) {
  await $.wait(3000, 5000);
  if (qsyyapp[D].capture) {
    if (qsyyapp[D].interface && qsyyapp[D].interface.split("$").length > 0) {
      let J = qsyyapp[D].interface.split("$").length > 1 ? qsyyapp[D].interface.split("$")[0] : qsyyapp[D].interface;
      await getCapture(D, J);
      $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。");
      qsyylogs[D] += "[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。\n";
    } else {
      $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 请设置接口地址再运行脚本！");
    }
    if ($.isNode()) {
      await wss[D].close();
    }
  } else {
    qsyyapp[D].url = qsyyapp[D].url.replace(/\+/g, "");
    await userInfo(D);
    await taskPage(D);
    if (hour == 8 && minute < 20 && auto_withdraw == "true") {
      await withdrawaPage(D);
    }
    if ($.isNode()) {
      await wss[D].close();
    }
    await runComplete(appName, userId);
    X();
  }
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const u = $request.body;
    let O = qsyyuserck - 1;
    if (qsyyapp[O]) {
      qsyyapp[O].token_body = u;
    } else {
      const A = {
        token_body: u
      };
      qsyyapp[O] = A;
    }
    $.setdata(JSON.stringify(qsyyapp, null, 2), "qsyyapp");
    $.msg($.name, "快音账号" + (O + 1) + "Token获取成功！🎉");
  }
}
function getReqUrl(X) {
  let g = ts13(),
    l = url2obj(qsyyapp[X].url);
  l._rticket = g;
  qsyyapp[X].iid = l.iid;
  qsyyapp[X].did = l.device_id;
  l.version_code = "100123030";
  l.version_name = "12.3.0";
  l.manifest_version_code = "100123030";
  l.update_version_code = "100123030";
  l.device_platform = "android";
  delete l.luckydog_base;
  delete l.luckydog_data;
  delete l.luckydog_token;
  delete l.luckydog_sdk_version;
  delete l.luckydog_api_version;
  return jsonToUrl(l);
}
async function getSixGodHeader(X, D, g) {
  let J = "common";
  qsyyapp[X].interface && (J = qsyyapp[X].interface);
  let u = qsyyapp[X].iid,
    O = qsyyapp[X].did,
    Z = "",
    A = [];
  for (let b in g) {
    if (b == "Content-Type" || b == "Host") {
      continue;
    }
    A.push(b.toLowerCase() + "=[" + g[b] + "]");
  }
  Z += A.join(",");
  Z += "";
  let p = O + "@" + u + "@" + encodeURIComponent(D) + "@" + encodeURIComponent(Z) + "@" + J;
  await selectChannel(X, p);
}
async function userInfo(X) {
  let g = getReqUrl(X);
  const l = "https://api5-normal-lq.amemv.com/aweme/v1/user/profile/self/?" + g;
  let J = "";
  await getReqObject(l, J, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[X], printCaller());
  let u = httpResult;
  if (u != null && u.status_code == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 用户名=> " + u.user.bind_phone);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 用户名=> " + u.user.bind_phone + "\n";
    accounts[X] = u.user.bind_phone;
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 用户信息=> " + u.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 用户信息=> " + u.err_tips + "\n";
  }
}
async function taskPage(X) {
  let g = getReqUrl(X);
  const l = "https://api5-lf.qishui.com/luna/treasure/task/page?" + g;
  let J = "";
  await getReqObject(l, J, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[X], printCaller());
  let u = httpResult;
  if (u != null && u.status_code == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 金币=> " + u.data.assets_card.amount_data[0].amount);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 音符=> " + u.data.assets_card.amount_data[0].amount + "\n";
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 余额=> " + u.data.assets_card.amount_data[1].amount / 100 + "元");
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 余额=> " + u.data.assets_card.amount_data[1].amount / 100 + "元\n";
    let Z = u.data.task_group.task_data.task_list.scene_view_map.luna_music.task_list,
      A = u.data.activity_play_info.activity_play_info.luna_music.task_list,
      p = Z.find(n => n.task_key == "soda_music_sign_in");
    if (p) {
      if (p.task_status == 1) {
        if (signSwitchs[X] == 1) {
          await signInDetail(X);
        }
      }
      if (p.task_status == 3) {
        signSwitchs[X] == 1 && (await signInDetail(X));
      }
    }
    let L = Z.find(m => m.task_key == "luna_treasure_red_packet_rain");
    if (L && L.task_status == 1) {
      $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨任务进度(" + L.completed_times + "/" + L.total_times + ")");
      qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨任务进度(" + L.completed_times + "/" + L.total_times + ")\n";
      let m = L.page_view.token;
      signSwitchs[X] == 1 && (await redRain(X, m));
    }
    let b = A[0];
    if (b && b.page_view.cooldown_end_time <= parseInt(ts10())) {
      $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 宝箱任务进度(" + b.completed_times + "/" + b.completed_times + ")");
      qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 宝箱任务进度(" + b.completed_times + "/" + b.completed_times + ")\n";
      if (signSwitchs[X] == 1) {
        await open_treasure_box(X);
      }
    }
    let U = Z.find(a => a.task_key == "music_incentive_ad");
    if (U) {
      if (U.task_status == 1) {
        $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 激励广告任务进度(" + U.completed_times + "/" + U.total_times + ")");
        qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨任务进度(" + U.completed_times + "/" + U.total_times + ")\n";
        let K = U.page_view.token;
        signSwitchs[X] == 1 && (await _ad_rewards(X, K, "激励视频"));
      }
    }
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 任务中心=> " + u.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 任务中心=> " + u.err_tips + "\n";
  }
}
async function signIn(X) {
  let g = getReqUrl(X);
  let l = "https://aweme.snssdk.com/aweme/ug/common/luckyapi/v1/common/sign_in/sign_in_done/?" + g + "&taskId=600585&page_name=coin_task_list";
  let J = "{\"page_name\":\"coin_task_list\",\"task_id\":\"600585\"}";
  await getReqObject(l, J, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[X].headers["x-tt-polaris-task-id"] = "600585";
  await httpRequest("post", requestObjects[X], printCaller());
  let u = httpResult;
  if (u != null && u.err_no == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签到=> 成功，不错哦！获得" + u.data.reward_info[0].reward_amount + "金币 🎉");
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签到=> 成功，不错哦！获得" + u.data.reward_info[0].reward_amount + "金币 🎉\n";
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签到=> " + u.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签到=> " + u.err_tips + "\n";
  }
}
async function signInDetail(X) {
  let g = getReqUrl(X);
  let l = "https://aweme.snssdk.com/aweme/ug/common/luckyapi/v1/common/sign_in/sign_in_detail/?" + g + "&taskId=600585&page_name=coin_task_list";
  let J = "";
  await getReqObject(l, J, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[X].headers["x-tt-polaris-task-id"] = "600585";
  await httpRequest("get", requestObjects[X], printCaller());
  let u = httpResult;
  if (u != null && u.err_no == 0) {
    let A = u.data.button_data.button_type;
    if (A == 3) {
      let p = u.data.button_data.excitation_ad_info.page_view.token;
      await $.wait(randomNum(10000, 15000));
      await _ad_rewards(X, p, "签到");
    } else {
      if (A == 1) {
        await signIn(X);
      }
    }
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签到=> " + u.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 签到=> " + u.err_tips + "\n";
  }
}
async function redRain(X, D) {
  let l = getReqUrl(X);
  let J = guid(),
    u = "https://api5-hl.qishui.com/luna/treasure/task/red_packet_rain/do_action?" + l,
    O = "{\"click_num\":21,\"common_args\":{\"unique_id\":\"" + J + "\",\"token\":\"" + D + "\"}}";
  await getReqObject(u, O, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[X], printCaller());
  let Z = httpResult;
  if (Z != null && Z.status_code == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨游戏=> 完成，获得" + Z.data.rewards[0].reward_amount + "金币 🎉");
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨游戏=> 完成，获得" + Z.data.rewards[0].reward_amount + "金币 🎉\n";
    let L = JSON.parse(Z.data.extra);
    if (L) {
      let U = L.base_ad_diversion.page_view.token;
      await $.wait(randomNum(10000, 15000));
      await _ad_rewards(X, U, "红包雨");
    }
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨游戏=> 失败，" + Z.status_info.error_detail);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 红包雨游戏=> 失败，" + Z.status_info.error_detail + "\n";
  }
}
async function _ad_rewards(D, g, l) {
  let u = getReqUrl(D),
    O = "https://polaris.zijieapi.com/polaris/task/do_action?" + u,
    Z = ts13();
  const A = {
    token: g,
    unique_id: Z,
    extra: "{\"enable_feedback\":true}"
  };
  await getReqObject(O, JSON.stringify(A), D);
  if (signSwitchs[D] == 0) {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[D], printCaller());
  let L = httpResult;
  if (L != null && L.data.instance_list && L.status_code == 0) {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + l + "广告=> 获得" + L.data.instance_list[0].Rewards[0].RewardAmount + "金币 🎉");
    qsyylogs[D] += "[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + l + "广告=> 获得" + L.data.instance_list[0].Rewards[0].RewardAmount + "金币 🎉\n";
    for (let U = 0; U < 3; U++) {
      await video_one_more(D, g, U + 1, l);
    }
  } else {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + l + "广告=> 设备异常");
    qsyylogs[D] += "[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + l + "广告=> 设备异常\n";
  }
}
async function open_treasure_box(X) {
  let g = getReqUrl(X),
    l = "https://aweme.snssdk.com/aweme/ug/common/luckyapi/v1/common/treasure/done?" + g + "&taskId=600607&urlKey=treasure_task";
  let J = "{\"enter_from\":\"task_page\",\"fe_version\":\"1.0.0.169\"}";
  await getReqObject(l, J, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[X].headers["x-tt-polaris-task-id"] = "600607";
  await httpRequest("post", requestObjects[X], printCaller());
  let u = httpResult;
  if (u != null && u.err_no == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + u.data.rewards[0].amount + "金币 🎉");
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + u.data.rewards[0].amount + "金币 🎉\n";
    let A = JSON.parse(u.data.extra);
    if (A) {
      let L = A.base_ad_diversion.page_view.token;
      await $.wait(randomNum(10000, 15000));
      await _ad_rewards(X, L, "开宝箱");
    }
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 打开宝箱=> " + u.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 打开宝箱=> " + u.err_tips + "\n";
  }
}
async function video_one_more(D, g, l, J) {
  let O = getReqUrl(D);
  const Z = "https://polaris.zijieapi.com/polaris/task/incentive_ad_again_info?" + O,
    A = {
      first_ad_task_token: g,
      again_idx: l
    };
  await getReqObject(Z, JSON.stringify(A), D);
  if (signSwitchs[D] == 0) {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[D], printCaller());
  let L = httpResult;
  if (L != null && L.status_code == 0) {
    if (L.data.can_show == true) {
      await $.wait(randomNum(10000, 15000));
      let n = L.data.token;
      await video_one_reward(D, g, n, l, J);
    }
  } else {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 宝箱广告=> " + L.err_tips);
    qsyylogs[D] += "[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 宝箱广告=> " + L.err_tips + "\n";
  }
}
async function video_one_reward(D, g, l, J, u) {
  let Z = getReqUrl(D);
  const A = "https://polaris.zijieapi.com/polaris/task/do_action?" + Z;
  let p = ts13();
  let L = "{\"token\":\"" + l + "\",\"unique_id\":\"" + p + "\",\"extra\":\"{\"enable_feedback\":true,\"first_ad_task_token\":\"" + g + "\",\"again_idx\":" + J + "}\"}";
  const b = {
    token: l,
    unique_id: p,
    extra: "{\"enable_feedback\":true,\"first_ad_task_token\":\"" + g + "\",\"again_idx\":" + J + "}"
  };
  L = b;
  await getReqObject(A, JSON.stringify(L), D);
  if (signSwitchs[D] == 0) {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[D], printCaller());
  let U = httpResult;
  if (U != null && U.status_code == 0) {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + u + "_追加广告_" + J + "=> 获得" + U.data.instance_list[0].Rewards[0].RewardAmount + "金币 🎉");
    qsyylogs[D] += "[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + u + "_追加广告_" + J + "=> 获得" + U.data.instance_list[0].Rewards[0].RewardAmount + "金币 🎉\n";
  } else {
    $.log("[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + u + "_附加广告_" + J + "=> " + U.err_tips);
    qsyylogs[D] += "[账号" + (D + 1 < 10 ? "0" + (D + 1) : D + 1) + "]: " + u + "_附加广告_" + J + "=> " + U.err_tips + "\n";
  }
}
async function withdrawaPage(X) {
  let g = getReqUrl(X);
  const l = "https://polaris.zijieapi.com/luckycat/polaris/centralized_wallet/user/vundefined/withdraw/page?" + g + "&BaseReq=%7B%22WalletID%22%3A%22luna_wallet%22%2C%22SubWalletID%22%3A%22luna_wallet%22%2C%22AccountType%22%3A%22CNY%22%7D",
    J = "";
  await getReqObject(l, J, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现页面=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[X].headers["Content-Type"] = "application/json";
  await httpRequest("get", requestObjects[X], printCaller());
  let u = httpResult;
  if (u != null && u.err_no == 0) {
    let A = u.ExtensionMap,
      p = u.BaseRes.WithdrawWays.Data.luna_wallet.ThresholdWithdraws.find(L => L.PaymentMethodInfo.Name == "支付宝提现");
    if (p.PaymentMethodInfo.BindingInfos.length > 0) {
      let b = p.PaymentMethodInfo.BindingInfos[0].Account,
        U = p.PaymentMethodInfo.BindingInfos[0].AccountMask,
        n = u.BaseRes.ProfitWalletData.BatchWalletData.luna_wallet.Data.CNY.Balance;
      if (n >= 3000 && n < 1500) {
        let G = p.ChoiceList.find(e => e.Amount == 3000);
        G && (await preWithdraw(X, b, U, G, A));
      } else {
        if (n >= 1500 && n < 3000) {
          let m = p.ChoiceList.find(Q => Q.Amount == 1500);
          m && (await preWithdraw(X, b, U, m, A));
        } else {
          if (n >= 30 && n < 1500) {
            let z = p.ChoiceList.find(V => V.Amount == 30);
            z && (await preWithdraw(X, b, U, z, A));
          } else {
            $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现=> 金额不足，继续赚钱吧。");
            qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现=> 金额不足，继续赚钱吧。\n";
          }
        }
      }
    } else {
      $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现=> 没绑定支付宝，无法自动提现。");
      qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现=> 没绑定支付宝，无法自动提现。\n";
    }
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现页面=> " + u.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现页面=> " + u.err_tips + "\n";
  }
}
async function preWithdraw(X, D, g, l, J) {
  let O = getReqUrl(X);
  let Z = ts13();
  const A = "https://polaris.zijieapi.com/luckycat/polaris/centralized_wallet/user/v:version/withdraw/prewithdraw?" + O;
  let p = "{\"BaseReq\":{\"UniqueID\":\"luna_wallet-luna_wallet-WithdrawPre-4449040503146132-" + Z + "\",\"PromotionSource\":\"\",\"Category\":\"" + l.Category + "\",\"Amount\":" + l.Amount + ",\"PaymentMethod\":3,\"WalletID\":\"luna_wallet\",\"ChoiceKey\":\"" + l.ChoiceKey + "\",\"ExtensionMap\":" + JSON.stringify(J) + ",\"SubWalletID\":\"luna_wallet\",\"AccountType\":\"CNY\"}}";
  await getReqObject(A, p, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 预提现=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[X], printCaller());
  let L = httpResult;
  if (L != null && L.err_no == 0) {
    let n = L.BaseRes.Data.WithdrawPreID;
    await withdraw(X, D, g, n);
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 预提现=> " + L.err_tips);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 预提现=> " + L.err_tips + "\n";
  }
}
async function withdraw(X, D, g, l) {
  let u = getReqUrl(X);
  const O = "https://polaris.zijieapi.com/luckycat/polaris/withdraw/v1/withdraw_confirm/?" + u + "&request_tag_from=h5";
  let Z = "{\"withdraw_id\":\"" + l + "\",\"payment_account\":{\"payment_method\":3,\"account_id\":\"" + D + "\",\"nick_name\":\"" + g + "\"}}";
  await getReqObject(O, Z, X);
  if (signSwitchs[X] == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现结果=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[X], printCaller());
  let A = httpResult;
  if (A != null && A.status_code == 0) {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现结果=> 成功！编号为" + A.data.id);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现结果=> 成功！编号为" + A.data.id + "\n";
  } else {
    $.log("[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现结果=> " + A.status_message);
    qsyylogs[X] += "[账号" + (X + 1 < 10 ? "0" + (X + 1) : X + 1) + "]: 提现结果=> " + A.status_message + "\n";
  }
}
function getScriptAuth(X, D, g) {
  return new Promise((J, u) => {
    const Z = apiHost + "/script/permissions/lastest",
      A = {
        appName: X,
        userId: D,
        activityCode: g,
        version: version
      };
    const L = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const b = {
      url: Z,
      headers: L,
      body: JSON.stringify(A)
    };
    $.post(b, async (U, n, C) => {
      const G = {};
      G.zVmsG = "application/json";
      if (C && C != null && C.replace(/\"/g, "").length > 50) {
        const Q = C.replace(/\"/g, "").slice(34),
          z = new Base64();
        result = JSON.parse(z.decode(Q));
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
        } catch (K) {
          $.log(K);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      J();
    });
  });
}
function runComplete(X, D) {
  return new Promise((l, J) => {
    const O = apiHost + "/script/run/add",
      Z = {
        appName: X,
        userId: D,
        activityCode: activeCode,
        version: version
      };
    const p = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: O,
      headers: p,
      body: JSON.stringify(Z)
    };
    $.post(L, async (b, U, n) => {
      l();
    });
  });
}
function checkAddress(X, D) {
  return new Promise((l, J) => {
    const Z = setTimeout(() => {
        l(false);
      }, D),
      A = http.get(X, p => {
        clearTimeout(Z);
        if (p.statusCode === 404) {
          l(true);
        } else {
          l(false);
        }
      });
    A.on("error", p => {
      clearTimeout(Z);
      l(false);
    });
    A.on("timeout", () => {
      A.abort();
      J(new Error("请求超时"));
    });
  });
}
async function fetchRequest(X, D = 3000) {
  return new Promise((l, J) => {
    const O = {
      url: X + "/docs"
    };
    setTimeout(() => {
      l(false);
    }, D);
    $.get(O, async (Z, A, p) => {
      if (A.status == 401) {
        l(true);
      } else {
        l(false);
      }
    });
  });
}
async function httpClientRequest(X, D = 3000) {
  return new Promise((l, J) => {
    const Z = {
      url: X + "/"
    };
    setTimeout(() => {
      l(false);
    }, D);
    $httpClient.get(Z, async (A, p, L) => {
      L == "{\"detail\":\"Not Found\"}" ? l(true) : l(false);
    });
  });
}
async function redisGet(X, D, g) {
  return new Promise((J, u) => {
    const O = apiHost + "/redis/hash/get/" + D + "/" + g,
      Z = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const A = {
      url: O,
      headers: Z
    };
    $.get(A, async (L, b, U) => {
      const C = U.replace(/\"/g, "");
      answerTexts[X] = C;
      J();
    });
  });
}
function redisSet(X, D, g) {
  return new Promise((J, u) => {
    const p = apiHost + "/redis/hash/set",
      L = {
        key: X,
        hashKey: D,
        hashValue: g
      };
    const U = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const n = {
      url: p,
      headers: U,
      body: JSON.stringify(L)
    };
    $.post(n, async (C, G, e) => {
      J();
    });
  });
}
function redisPop(X) {
  return new Promise((g, l) => {
    const O = apiHost + "/redis/set/pop/" + X,
      Z = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const A = {
      url: O,
      headers: Z
    };
    $.get(A, async (L, b, U) => {
      const C = U.replace(/\"/g, "");
      popCookie = C;
      g();
    });
  });
}
async function getReqObject(g, l, J) {
  let O = "com.luna.music/100123030 (Linux; U; Android 12; zh_CN; 22081212C; Build/SKQ1.220303.001; Cronet/TTNetVersion:dd1b0931 2024-06-28 QuicVersion:d299248d 2024-04-09)";
  if (qsyyapp[J].ua && qsyyapp[J].ua != "") {
    O = qsyyapp[J].ua;
  }
  let Z = getHostname(g);
  const p = {
    "Content-Type": "application/json; charset=UTF-8",
    "User-Agent": O,
    Host: Z,
    "passport-sdk-version": "50592",
    "sdk-version": "2",
    "X-Tt-Token": qsyyapp[J].token,
    "x-vc-bdturing-sdk-version": "3.6.1.cn"
  };
  const L = {};
  L.url = g;
  L.headers = p;
  let b = L;
  if (l) {
    b.body = l;
    b.headers["X-SS-STUB"] = MD5_Encrypt(l).toUpperCase();
  }
  await getSixGodHeader(J, g, b.headers);
  let U = requestSigns[J];
  if (U.length < 200) {
    if (U.indexOf("unable to find process with name") != -1) {
      $.log("[账号" + (J + 1 < 10 ? "0" + (J + 1) : J + 1) + "]: 签名获取失败原因=> 请检查签名APP是否已启动");
    } else {
      if (U.indexOf("unable to connect to remote frida-server") != -1) {
        $.log("[账号" + (J + 1 < 10 ? "0" + (J + 1) : J + 1) + "]: 签名获取失败原因=> 请检查是否映射成功");
      } else {
        $.log("[账号" + (J + 1 < 10 ? "0" + (J + 1) : J + 1) + "]: 签名获取失败原因=> " + U);
      }
    }
  }
  if (U && U != "Internal Server Error") {
    const Q = convertStringToJson(U);
    b.headers["X-Argus"] = Q["X-Argus"];
    b.headers["X-Gorgon"] = Q["X-Gorgon"];
    Q["X-Gorgon"] == undefined && (signSwitchs[J] = 0);
    b.headers["X-Helios"] = Q["X-Helios"];
    b.headers["X-Khronos"] = Q["X-Khronos"];
    b.headers["X-Ladon"] = Q["X-Ladon"];
    b.headers["X-Medusa"] = Q["X-Medusa"];
    let z = qsyyapp[J].token.substring(2, 34);
    b.headers.Cookie = "sessionid=" + z + "; sessionid_ss=" + z;
  } else {
    signSwitchs[J] = 0;
  }
  requestObjects[J] = b;
  return b;
}
function getReqObject_(g, l, J) {
  let O = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (qsyyapp[J].ua && qsyyapp[J].ua != "") {
    O = qsyyapp[J].ua;
  }
  let Z = getHostname(g);
  const A = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": O,
    Authorization: qsyyapp[J].auth,
    Host: Z
  };
  const p = {
    url: g,
    headers: A
  };
  if (l) {
    p.body = l;
  }
  requestObjects[J] = p;
  return p;
}
async function httpRequest(X, D, g) {
  httpResult = null;
  return new Promise(J => {
    $[X](D, async (Z, A, p) => {
      try {
        if (Z) {
          $.log(g + ": " + X + "请求失败");
          $.log(JSON.stringify(Z));
          $.logErr(Z);
        } else {
          if (safeGet(p)) {
            httpResult = JSON.parse(p);
          } else {
            const i = new URL(D.url);
            $.log(i.pathname + "发起" + X + "请求时，出现错误，请处理");
          }
        }
      } catch (Q) {
        $.logErr(Q, A);
      } finally {
        J(httpResult);
      }
    });
  });
}
async function selectChannel(X, D) {
  if (channels_status[X] == 0) {
    await getSign_(X, D);
  } else {
    await getSign(X, D);
  }
}
function getSign_(X, D) {
  return new Promise((l, J) => {
    function O(Z) {
      let L = Z.toString("utf8");
      requestSigns[X] = L;
      wss[X].removeListener("message", O);
      l(L);
    }
    wss[X].on("message", O);
    if (wss[X].readyState === 1) {
      const Z = {
        method: appName,
        params: {}
      };
      Z.params.content = D;
      Z.params.appName = appName;
      Z.params.uuid = userId;
      wss[X].send(JSON.stringify(Z), A => {
        if (A) {
          J(A);
        }
      });
    } else {
      l(getSign(X, D));
      wss[X].removeListener("message", O);
    }
  });
}
function getSign(X, D) {
  return new Promise((l, J) => {
    const O = apiHost + "/sign/qsyy/six",
      Z = {
        content: D,
        appName: appName,
        uuid: userId
      };
    const p = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: O,
      headers: p,
      body: JSON.stringify(Z)
    };
    $.post(L, async (b, U, n) => {
      const G = n.replace(/\"/g, "");
      requestSigns[X] = G;
      l();
    });
  });
}
function getCapture(X, D) {
  return new Promise((l, J) => {
    const u = apiHost + "/bytes/capture",
      O = {
        content: D,
        appName: appName,
        uuid: userId
      };
    const A = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const p = {
      url: u,
      headers: A,
      body: JSON.stringify(O)
    };
    $.post(p, async (L, b, U) => {
      const C = U.replace(/\"/g, "");
      requestSigns[X] = C;
      l();
    });
  });
}
function sortUrlParams(X, D, g) {
  const J = url2obj(X);
  D.forEach(Z => {
    delete J[Z];
  });
  Object.assign(J, g);
  const u = Object.keys(J).sort(),
    O = u.map(Z => Z + "=" + J[Z]).join("&");
  return O;
}
function url2obj(D) {
  D = D.replace(/\"/g, "");
  var J;
  var u = {};
  var O = D.slice(D.indexOf("?") + 1).split("&");
  for (var Z = 0; Z < O.length; Z++) {
    J = O[Z].split("=");
    u[J[0]] = J[1];
  }
  return u;
}
function updateURLParameter(X, D, g) {
  var l = new URL(X);
  l.searchParams.set(D, g);
  return l.toString();
}
function convertStringToJson(D) {
  const J = D.replace(/[{} ]/g, ""),
    u = J.split(",");
  const O = {};
  u.forEach(Z => {
    const A = Z.split(/=(.*)/),
      [p, L] = A;
    O[p] = L;
  });
  return O;
}
function getHostname(D) {
  let J = D.substr(D.indexOf("//") + 2),
    u = J.substr(0, J.indexOf("/"));
  let O = "",
    Z = u.indexOf(":");
  if (Z > 0) {
    O = u.substr(0, Z);
  } else {
    O = u;
  }
  return O;
}
function calculateTimeDifference(D, g) {
  var L = new Date(D);
  var p = new Date(g);
  var Z = p - L;
  var A = Math.floor(Z / 1000);
  return A;
}
function cutString(X, D) {
  if (X.length * 2 <= D) {
    return X;
  }
  var l = 0,
    J = "";
  for (var u = 0; u < X.length; u++) {
    J = J + X.charAt(u);
    if (X.charCodeAt(u) > 128) {
      l = l + 2;
      if (l >= D) {
        return J.substring(0, J.length - 1) + "...";
      }
    } else {
      l = l + 1;
      if (l >= D) {
        return J.substring(0, J.length - 2) + "...";
      }
    }
  }
  return J;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(D) {
  try {
    if (typeof JSON.parse(D) == "object") {
      return true;
    }
  } catch (O) {
    console.log(O);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(X) {
  var g = Object.keys(X).map(function (l) {
    return encodeURIComponent(l) + "=" + encodeURIComponent(X[l]);
  }).join("&");
  return g;
}
function compileStr(X) {
  var g = String.fromCharCode(X.charCodeAt(0) + X.length);
  for (var l = 1; l < X.length; l++) {
    g += String.fromCharCode(X.charCodeAt(l) + X.charCodeAt(l - 1));
  }
  return escape(g);
}
function uncompileStr(X) {
  X = unescape(X);
  var g = String.fromCharCode(X.charCodeAt(0) - X.length);
  for (var l = 1; l < X.length; l++) {
    g += String.fromCharCode(X.charCodeAt(l) - g.charCodeAt(l - 1));
  }
  return g;
}
function randomNum(X, D) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * X + 1);
      break;
    case 2:
      return parseInt(Math.random() * (D - X + 1) + X);
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
  function D() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return D() + D() + "-" + D() + "-" + D() + "-" + D() + "-" + D() + D() + D();
}
function phone_num(D) {
  if (D.length == 11) {
    let J = D.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return J;
  } else {
    return D;
  }
}
function txt_api(X) {
  return new Promise((g, l) => {
    const u = "https://v1.hitokoto.cn/?c=e",
      O = {
        accept: "application/json"
      };
    const Z = {
      url: u,
      headers: O
    };
    $.get(Z, async (p, L, b) => {
      let n = JSON.parse(b),
        C = n.hitokoto;
      contents[X] = C + " " + C;
      g();
    });
  });
}
function getTime_8() {
  return new Promise((D, g) => {
    const u = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      O = {
        url: u
      };
    $.get(O, async (A, p, L) => {
      D(L);
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
async function sendMsg(D) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, D);
      } else {
        $.msg($.name, "", D);
      }
    } else {
      $.log(D);
    }
  }
}
async function wxPush(X, D, g) {
  return new Promise((J, u) => {
    const A = "https://wxpusher.zjiecode.com/api/send/message",
      p = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: D,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [g],
        verifyPay: false
      };
    const b = {
      "Content-Type": "application/json"
    };
    const U = {
      url: A,
      headers: b,
      body: JSON.stringify(p)
    };
    $.post(U, async (n, C, G) => {
      J();
    });
  });
}
function randomString(X, D) {
  D = D || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let l = "";
  for (let J = 0; J < X; J++) {
    let O = Math.floor(Math.random() * D.length);
    l += D.substring(O, O + 1);
  }
  return l;
}
function MD5_Encrypt(X) {
  function U(Xz, XV) {
    return Xz << XV | Xz >>> 32 - XV;
  }
  function Y(Xz, XV) {
    var Xa, XK, Xx, Xf, XB;
    Xx = 2147483648 & Xz;
    Xf = 2147483648 & XV;
    Xa = 1073741824 & Xz;
    XK = 1073741824 & XV;
    XB = (1073741823 & Xz) + (1073741823 & XV);
    return Xa & XK ? 2147483648 ^ XB ^ Xx ^ Xf : Xa | XK ? 1073741824 & XB ? 3221225472 ^ XB ^ Xx ^ Xf : 1073741824 ^ XB ^ Xx ^ Xf : XB ^ Xx ^ Xf;
  }
  function Q(Xz, XV, XS) {
    return Xz & XV | ~Xz & XS;
  }
  function V(Xz, XV, XS) {
    return Xz & XS | XV & ~XS;
  }
  function S(Xz, XV, XS) {
    return Xz ^ XV ^ XS;
  }
  function W(Xz, XV, XS) {
    return XV ^ (Xz | ~XS);
  }
  function R(Xz, XV, XS, Xa, XK, Xx, Xf) {
    Xz = Y(Xz, Y(Y(Q(XV, XS, Xa), XK), Xf));
    return Y(U(Xz, Xx), XV);
  }
  function P(Xz, XV, XS, Xa, XK, Xx, Xf) {
    Xz = Y(Xz, Y(Y(V(XV, XS, Xa), XK), Xf));
    return Y(U(Xz, Xx), XV);
  }
  function T(Xz, XV, XS, Xa, XK, Xx, Xf) {
    Xz = Y(Xz, Y(Y(S(XV, XS, Xa), XK), Xf));
    return Y(U(Xz, Xx), XV);
  }
  function X0(Xz, XV, XS, Xa, XK, Xx, Xf) {
    Xz = Y(Xz, Y(Y(W(XV, XS, Xa), XK), Xf));
    return Y(U(Xz, Xx), XV);
  }
  function X1(Xz) {
    for (var XS, Xa = Xz.length, XK = Xa + 8, Xx = (XK - XK % 64) / 64, Xf = 16 * (Xx + 1), XB = new Array(Xf - 1), XH = 0, Xs = 0; Xa > Xs;) {
      XS = (Xs - Xs % 4) / 4;
      XH = Xs % 4 * 8;
      XB[XS] = XB[XS] | Xz.charCodeAt(Xs) << XH;
      Xs++;
    }
    XS = (Xs - Xs % 4) / 4;
    XH = Xs % 4 * 8;
    XB[XS] = XB[XS] | 128 << XH;
    XB[Xf - 2] = Xa << 3;
    XB[Xf - 1] = Xa >>> 29;
    return XB;
  }
  function X2(Xz) {
    var XS,
      Xa,
      XK = "",
      Xx = "";
    for (Xa = 0; 3 >= Xa; Xa++) {
      XS = Xz >>> 8 * Xa & 255;
      Xx = "0" + XS.toString(16);
      XK += Xx.substr(Xx.length - 2, 2);
    }
    return XK;
  }
  function X3(Xz) {
    Xz = Xz.replace(/\r\n/g, "\n");
    for (var XV = "", XS = 0; XS < Xz.length; XS++) {
      var Xa = Xz.charCodeAt(XS);
      128 > Xa ? XV += String.fromCharCode(Xa) : Xa > 127 && 2048 > Xa ? (XV += String.fromCharCode(Xa >> 6 | 192), XV += String.fromCharCode(63 & Xa | 128)) : (XV += String.fromCharCode(Xa >> 12 | 224), XV += String.fromCharCode(Xa >> 6 & 63 | 128), XV += String.fromCharCode(63 & Xa | 128));
    }
    return XV;
  }
  var X4,
    X5,
    X6,
    X7,
    X8,
    X9,
    XX,
    XD,
    Xg,
    Xl = [],
    XJ = 7,
    Xu = 12,
    XO = 17,
    XZ = 22,
    XA = 5,
    Xp = 9,
    XL = 14,
    Xb = 20,
    XU = 4,
    Xn = 11,
    XC = 16,
    XG = 23,
    Xe = 6,
    Xi = 10,
    XY = 15,
    Xm = 21;
  for (X = X3(X), Xl = X1(X), X9 = 1732584193, XX = 4023233417, XD = 2562383102, Xg = 271733878, X4 = 0; X4 < Xl.length; X4 += 16) {
    X5 = X9;
    X6 = XX;
    X7 = XD;
    X8 = Xg;
    X9 = R(X9, XX, XD, Xg, Xl[X4 + 0], XJ, 3614090360);
    Xg = R(Xg, X9, XX, XD, Xl[X4 + 1], Xu, 3905402710);
    XD = R(XD, Xg, X9, XX, Xl[X4 + 2], XO, 606105819);
    XX = R(XX, XD, Xg, X9, Xl[X4 + 3], XZ, 3250441966);
    X9 = R(X9, XX, XD, Xg, Xl[X4 + 4], XJ, 4118548399);
    Xg = R(Xg, X9, XX, XD, Xl[X4 + 5], Xu, 1200080426);
    XD = R(XD, Xg, X9, XX, Xl[X4 + 6], XO, 2821735955);
    XX = R(XX, XD, Xg, X9, Xl[X4 + 7], XZ, 4249261313);
    X9 = R(X9, XX, XD, Xg, Xl[X4 + 8], XJ, 1770035416);
    Xg = R(Xg, X9, XX, XD, Xl[X4 + 9], Xu, 2336552879);
    XD = R(XD, Xg, X9, XX, Xl[X4 + 10], XO, 4294925233);
    XX = R(XX, XD, Xg, X9, Xl[X4 + 11], XZ, 2304563134);
    X9 = R(X9, XX, XD, Xg, Xl[X4 + 12], XJ, 1804603682);
    Xg = R(Xg, X9, XX, XD, Xl[X4 + 13], Xu, 4254626195);
    XD = R(XD, Xg, X9, XX, Xl[X4 + 14], XO, 2792965006);
    XX = R(XX, XD, Xg, X9, Xl[X4 + 15], XZ, 1236535329);
    X9 = P(X9, XX, XD, Xg, Xl[X4 + 1], XA, 4129170786);
    Xg = P(Xg, X9, XX, XD, Xl[X4 + 6], Xp, 3225465664);
    XD = P(XD, Xg, X9, XX, Xl[X4 + 11], XL, 643717713);
    XX = P(XX, XD, Xg, X9, Xl[X4 + 0], Xb, 3921069994);
    X9 = P(X9, XX, XD, Xg, Xl[X4 + 5], XA, 3593408605);
    Xg = P(Xg, X9, XX, XD, Xl[X4 + 10], Xp, 38016083);
    XD = P(XD, Xg, X9, XX, Xl[X4 + 15], XL, 3634488961);
    XX = P(XX, XD, Xg, X9, Xl[X4 + 4], Xb, 3889429448);
    X9 = P(X9, XX, XD, Xg, Xl[X4 + 9], XA, 568446438);
    Xg = P(Xg, X9, XX, XD, Xl[X4 + 14], Xp, 3275163606);
    XD = P(XD, Xg, X9, XX, Xl[X4 + 3], XL, 4107603335);
    XX = P(XX, XD, Xg, X9, Xl[X4 + 8], Xb, 1163531501);
    X9 = P(X9, XX, XD, Xg, Xl[X4 + 13], XA, 2850285829);
    Xg = P(Xg, X9, XX, XD, Xl[X4 + 2], Xp, 4243563512);
    XD = P(XD, Xg, X9, XX, Xl[X4 + 7], XL, 1735328473);
    XX = P(XX, XD, Xg, X9, Xl[X4 + 12], Xb, 2368359562);
    X9 = T(X9, XX, XD, Xg, Xl[X4 + 5], XU, 4294588738);
    Xg = T(Xg, X9, XX, XD, Xl[X4 + 8], Xn, 2272392833);
    XD = T(XD, Xg, X9, XX, Xl[X4 + 11], XC, 1839030562);
    XX = T(XX, XD, Xg, X9, Xl[X4 + 14], XG, 4259657740);
    X9 = T(X9, XX, XD, Xg, Xl[X4 + 1], XU, 2763975236);
    Xg = T(Xg, X9, XX, XD, Xl[X4 + 4], Xn, 1272893353);
    XD = T(XD, Xg, X9, XX, Xl[X4 + 7], XC, 4139469664);
    XX = T(XX, XD, Xg, X9, Xl[X4 + 10], XG, 3200236656);
    X9 = T(X9, XX, XD, Xg, Xl[X4 + 13], XU, 681279174);
    Xg = T(Xg, X9, XX, XD, Xl[X4 + 0], Xn, 3936430074);
    XD = T(XD, Xg, X9, XX, Xl[X4 + 3], XC, 3572445317);
    XX = T(XX, XD, Xg, X9, Xl[X4 + 6], XG, 76029189);
    X9 = T(X9, XX, XD, Xg, Xl[X4 + 9], XU, 3654602809);
    Xg = T(Xg, X9, XX, XD, Xl[X4 + 12], Xn, 3873151461);
    XD = T(XD, Xg, X9, XX, Xl[X4 + 15], XC, 530742520);
    XX = T(XX, XD, Xg, X9, Xl[X4 + 2], XG, 3299628645);
    X9 = X0(X9, XX, XD, Xg, Xl[X4 + 0], Xe, 4096336452);
    Xg = X0(Xg, X9, XX, XD, Xl[X4 + 7], Xi, 1126891415);
    XD = X0(XD, Xg, X9, XX, Xl[X4 + 14], XY, 2878612391);
    XX = X0(XX, XD, Xg, X9, Xl[X4 + 5], Xm, 4237533241);
    X9 = X0(X9, XX, XD, Xg, Xl[X4 + 12], Xe, 1700485571);
    Xg = X0(Xg, X9, XX, XD, Xl[X4 + 3], Xi, 2399980690);
    XD = X0(XD, Xg, X9, XX, Xl[X4 + 10], XY, 4293915773);
    XX = X0(XX, XD, Xg, X9, Xl[X4 + 1], Xm, 2240044497);
    X9 = X0(X9, XX, XD, Xg, Xl[X4 + 8], Xe, 1873313359);
    Xg = X0(Xg, X9, XX, XD, Xl[X4 + 15], Xi, 4264355552);
    XD = X0(XD, Xg, X9, XX, Xl[X4 + 6], XY, 2734768916);
    XX = X0(XX, XD, Xg, X9, Xl[X4 + 13], Xm, 1309151649);
    X9 = X0(X9, XX, XD, Xg, Xl[X4 + 4], Xe, 4149444226);
    Xg = X0(Xg, X9, XX, XD, Xl[X4 + 11], Xi, 3174756917);
    XD = X0(XD, Xg, X9, XX, Xl[X4 + 2], XY, 718787259);
    XX = X0(XX, XD, Xg, X9, Xl[X4 + 9], Xm, 3951481745);
    X9 = Y(X9, X5);
    XX = Y(XX, X6);
    XD = Y(XD, X7);
    Xg = Y(Xg, X8);
  }
  var XQ = X2(X9) + X2(XX) + X2(XD) + X2(Xg);
  return XQ.toLowerCase();
}
function SHA256(X) {
  var g = 8,
    l = 0;
  function J(i, Y) {
    var Q = (i & 65535) + (Y & 65535),
      z = (i >> 16) + (Y >> 16) + (Q >> 16);
    return z << 16 | Q & 65535;
  }
  function u(i, Y) {
    return i >>> Y | i << 32 - Y;
  }
  function O(i, Y) {
    return i >>> Y;
  }
  function Z(i, Y, m) {
    return i & Y ^ ~i & m;
  }
  function A(i, Y, m) {
    return i & Y ^ i & m ^ Y & m;
  }
  function p(i) {
    return u(i, 2) ^ u(i, 13) ^ u(i, 22);
  }
  function L(i) {
    return u(i, 6) ^ u(i, 11) ^ u(i, 25);
  }
  function b(i) {
    return u(i, 7) ^ u(i, 18) ^ O(i, 3);
  }
  function U(i) {
    return u(i, 17) ^ u(i, 19) ^ O(i, 10);
  }
  function n(Y, Q) {
    var V = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      x = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      B = new Array(64),
      H,
      v,
      E,
      o,
      k,
      q,
      I,
      M,
      y,
      F,
      w,
      r;
    Y[Q >> 5] |= 128 << 24 - Q % 32;
    Y[(Q + 64 >> 9 << 4) + 15] = Q;
    for (var y = 0; y < Y.length; y += 16) {
      H = x[0];
      v = x[1];
      E = x[2];
      o = x[3];
      k = x[4];
      q = x[5];
      I = x[6];
      M = x[7];
      for (var F = 0; F < 64; F++) {
        if (F < 16) {
          B[F] = Y[F + y];
        } else {
          B[F] = J(J(J(U(B[F - 2]), B[F - 7]), b(B[F - 15])), B[F - 16]);
        }
        w = J(J(J(J(M, L(k)), Z(k, q, I)), V[F]), B[F]);
        r = J(p(H), A(H, v, E));
        M = I;
        I = q;
        q = k;
        k = J(o, w);
        o = E;
        E = v;
        v = H;
        H = J(w, r);
      }
      x[0] = J(H, x[0]);
      x[1] = J(v, x[1]);
      x[2] = J(E, x[2]);
      x[3] = J(o, x[3]);
      x[4] = J(k, x[4]);
      x[5] = J(q, x[5]);
      x[6] = J(I, x[6]);
      x[7] = J(M, x[7]);
    }
    return x;
  }
  function C(Y) {
    var m = Array(),
      Q = (1 << g) - 1;
    for (var z = 0; z < Y.length * g; z += g) {
      m[z >> 5] |= (Y.charCodeAt(z / g) & Q) << 24 - z % 32;
    }
    return m;
  }
  function G(i) {
    i = i.replace(/\r\n/g, "\n");
    var m = "";
    for (var Q = 0; Q < i.length; Q++) {
      var z = i.charCodeAt(Q);
      if (z < 128) {
        m += String.fromCharCode(z);
      } else {
        if (z > 127 && z < 2048) {
          m += String.fromCharCode(z >> 6 | 192);
          m += String.fromCharCode(z & 63 | 128);
        } else {
          m += String.fromCharCode(z >> 12 | 224);
          m += String.fromCharCode(z >> 6 & 63 | 128);
          m += String.fromCharCode(z & 63 | 128);
        }
      }
    }
    return m;
  }
  function e(Y) {
    var m = l ? "0123456789ABCDEF" : "0123456789abcdef",
      Q = "";
    for (var z = 0; z < Y.length * 4; z++) {
      Q += m.charAt(Y[z >> 2] >> (3 - z % 4) * 8 + 4 & 15) + m.charAt(Y[z >> 2] >> (3 - z % 4) * 8 & 15);
    }
    return Q;
  }
  X = G(X);
  return e(n(C(X), X.length * g));
}
function SHA1(X) {
  function l(f, H) {
    var c = f << H | f >>> 32 - H;
    return c;
  }
  function J(f) {
    var s = "",
      v,
      c,
      o;
    for (v = 0; v <= 6; v += 2) {
      c = f >>> v * 4 + 4 & 15;
      o = f >>> v * 4 & 15;
      s += c.toString(16) + o.toString(16);
    }
    return s;
  }
  function u(f) {
    var H = "",
      s,
      c;
    for (s = 7; s >= 0; s--) {
      c = f >>> s * 4 & 15;
      H += c.toString(16);
    }
    return H;
  }
  function O(f) {
    f = f.replace(/\r\n/g, "\n");
    var s = "";
    for (var v = 0; v < f.length; v++) {
      var o = f.charCodeAt(v);
      if (o < 128) {
        s += String.fromCharCode(o);
      } else {
        if (o > 127 && o < 2048) {
          s += String.fromCharCode(o >> 6 | 192);
          s += String.fromCharCode(o & 63 | 128);
        } else {
          s += String.fromCharCode(o >> 12 | 224);
          s += String.fromCharCode(o >> 6 & 63 | 128);
          s += String.fromCharCode(o & 63 | 128);
        }
      }
    }
    return s;
  }
  var Z,
    p,
    L,
    b = new Array(80);
  var U = 1732584193,
    n = 4023233417,
    G = 2562383102,
    e = 271733878,
    Y = 3285377520;
  var m, Q, z, V, S, a;
  X = O(X);
  var K = X.length,
    x = new Array();
  for (p = 0; p < K - 3; p += 4) {
    L = X.charCodeAt(p) << 24 | X.charCodeAt(p + 1 < 10 ? "0" + (p + 1) : p + 1) << 16 | X.charCodeAt(p + 2) << 8 | X.charCodeAt(p + 3);
    x.push(L);
  }
  switch (K % 4) {
    case 0:
      p = 2147483648;
      break;
    case 1:
      p = X.charCodeAt(K - 1) << 24 | 8388608;
      break;
    case 2:
      p = X.charCodeAt(K - 2) << 24 | X.charCodeAt(K - 1) << 16 | 32768;
      break;
    case 3:
      p = X.charCodeAt(K - 3) << 24 | X.charCodeAt(K - 2) << 16 | X.charCodeAt(K - 1) << 8 | 128;
      break;
  }
  x.push(p);
  while (x.length % 16 != 14) {
    x.push(0);
  }
  x.push(K >>> 29);
  x.push(K << 3 & 4294967295);
  for (Z = 0; Z < x.length; Z += 16) {
    for (p = 0; p < 16; p++) {
      b[p] = x[Z + p];
    }
    for (p = 16; p <= 79; p++) {
      b[p] = l(b[p - 3] ^ b[p - 8] ^ b[p - 14] ^ b[p - 16], 1);
    }
    m = U;
    Q = n;
    z = G;
    V = e;
    S = Y;
    for (p = 0; p <= 19; p++) {
      a = l(m, 5) + (Q & z | ~Q & V) + S + b[p] + 1518500249 & 4294967295;
      S = V;
      V = z;
      z = l(Q, 30);
      Q = m;
      m = a;
    }
    for (p = 20; p <= 39; p++) {
      a = l(m, 5) + (Q ^ z ^ V) + S + b[p] + 1859775393 & 4294967295;
      S = V;
      V = z;
      z = l(Q, 30);
      Q = m;
      m = a;
    }
    for (p = 40; p <= 59; p++) {
      a = l(m, 5) + (Q & z | Q & V | z & V) + S + b[p] + 2400959708 & 4294967295;
      S = V;
      V = z;
      z = l(Q, 30);
      Q = m;
      m = a;
    }
    for (p = 60; p <= 79; p++) {
      a = l(m, 5) + (Q ^ z ^ V) + S + b[p] + 3395469782 & 4294967295;
      S = V;
      V = z;
      z = l(Q, 30);
      Q = m;
      m = a;
    }
    U = U + m & 4294967295;
    n = n + Q & 4294967295;
    G = G + z & 4294967295;
    e = e + V & 4294967295;
    Y = Y + S & 4294967295;
  }
  var a = u(U) + u(n) + u(G) + u(e) + u(Y);
  return a.toLowerCase();
}
function Base64() {
  var D = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (g) {
    var J = "";
    var u, O, Z, A, p, L, b;
    var l = 0;
    g = utf8Encode(g);
    while (l < g.length) {
      u = g.charCodeAt(l++);
      O = g.charCodeAt(l++);
      Z = g.charCodeAt(l++);
      A = u >> 2;
      p = (u & 3) << 4 | O >> 4;
      L = (O & 15) << 2 | Z >> 6;
      b = Z & 63;
      if (isNaN(O)) {
        L = b = 64;
      } else {
        isNaN(Z) && (b = 64);
      }
      J = J + D.charAt(A) + D.charAt(p) + D.charAt(L) + D.charAt(b);
    }
    return J;
  };
  this.decode = function (g) {
    var J = "";
    var u, O, Z;
    var A, p, L, b;
    var U = 0;
    g = g.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (U < g.length) {
      A = D.indexOf(g.charAt(U++));
      p = D.indexOf(g.charAt(U++));
      L = D.indexOf(g.charAt(U++));
      b = D.indexOf(g.charAt(U++));
      u = A << 2 | p >> 4;
      O = (p & 15) << 4 | L >> 2;
      Z = (L & 3) << 6 | b;
      J = J + String.fromCharCode(u);
      L !== 64 && (J = J + String.fromCharCode(O));
      if (b !== 64) {
        J = J + String.fromCharCode(Z);
      }
    }
    J = utf8Decode(J);
    return J;
  };
  utf8Encode = function (g) {
    g = g.replace(/\r\n/g, "\n");
    var J = "";
    for (var u = 0; u < g.length; u++) {
      var O = g.charCodeAt(u);
      if (O < 128) {
        J += String.fromCharCode(O);
      } else {
        if (O > 127 && O < 2048) {
          J += String.fromCharCode(O >> 6 | 192);
          J += String.fromCharCode(O & 63 | 128);
        } else {
          J += String.fromCharCode(O >> 12 | 224);
          J += String.fromCharCode(O >> 6 & 63 | 128);
          J += String.fromCharCode(O & 63 | 128);
        }
      }
    }
    return J;
  };
  utf8Decode = function (g) {
    var u = "";
    var Z = 0;
    var O = 0;
    var A = 0;
    var J = 0;
    while (Z < g.length) {
      O = g.charCodeAt(Z);
      if (O < 128) {
        u += String.fromCharCode(O);
        Z++;
      } else {
        if (O > 191 && O < 224) {
          A = g.charCodeAt(Z + 1 < 10 ? "0" + (Z + 1) : Z + 1);
          u += String.fromCharCode((O & 31) << 6 | A & 63);
          Z += 2;
        } else {
          A = g.charCodeAt(Z + 1 < 10 ? "0" + (Z + 1) : Z + 1);
          J = g.charCodeAt(Z + 2);
          u += String.fromCharCode((O & 15) << 12 | (A & 63) << 6 | J & 63);
          Z += 3;
        }
      }
    }
    return u;
  };
}
function Env(X, D) {
  class l {
    constructor(J) {
      this.env = J;
    }
    send(J, u = "GET") {
      J = typeof J === "string" ? {
        url: J
      } : J;
      let Z = this.get;
      if (u === "POST") {
        Z = this.post;
      }
      return new Promise((p, L) => {
        Z.call(this, J, (U, n, C) => {
          if (U) {
            L(U);
          } else {
            p(n);
          }
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
    constructor(J, u) {
      this.name = J;
      this.http = new l(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, u);
      const Z = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(Z);
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
    toObj(J, u = null) {
      try {
        return JSON.parse(J);
      } catch {
        return u;
      }
    }
    toStr(J, u = null) {
      try {
        return JSON.stringify(J);
      } catch {
        return u;
      }
    }
    getjson(J, u) {
      let A = u;
      const p = this.getdata(J);
      if (p) {
        try {
          A = JSON.parse(this.getdata(J));
        } catch {}
      }
      return A;
    }
    setjson(J, u) {
      try {
        return this.setdata(JSON.stringify(J), u);
      } catch {
        return false;
      }
    }
    getScript(J) {
      return new Promise(Z => {
        const p = {
          url: J
        };
        this.get(p, (L, b, U) => Z(U));
      });
    }
    runScript(J, u) {
      return new Promise(O => {
        let p = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        p = p ? p.replace(/\n/g, "").trim() : p;
        let L = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        L = L ? L * 1 : 20;
        L = u && u.timeout ? u.timeout : L;
        const [b, U] = p.split("@"),
          n = {
            script_text: J,
            mock_type: "cron",
            timeout: L
          };
        const C = {
          "X-Key": b,
          Accept: "*/*"
        };
        const G = {
          url: "http: //" + U + "/v1/scripting/evaluate",
          body: n,
          headers: C
        };
        this.post(G, (i, Y, m) => O(m));
      }).catch(O => this.logErr(O));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const J = this.path.resolve(this.dataFile),
          u = this.path.resolve(process.cwd(), this.dataFile),
          O = this.fs.existsSync(J),
          Z = !O && this.fs.existsSync(u);
        if (O || Z) {
          const A = O ? J : u;
          try {
            return JSON.parse(this.fs.readFileSync(A));
          } catch (L) {
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
        const Z = this.path.resolve(this.dataFile),
          A = this.path.resolve(process.cwd(), this.dataFile),
          p = this.fs.existsSync(Z),
          L = !p && this.fs.existsSync(A),
          b = JSON.stringify(this.data);
        if (p) {
          this.fs.writeFileSync(Z, b);
        } else {
          if (L) {
            this.fs.writeFileSync(A, b);
          } else {
            this.fs.writeFileSync(Z, b);
          }
        }
      }
    }
    lodash_get(J, u, O = undefined) {
      const L = u.replace(/[(d+)]/g, ".$1").split(".");
      let b = J;
      for (const U of L) {
        b = Object(b)[U];
        if (b === undefined) {
          return O;
        }
      }
      return b;
    }
    lodash_set(J, u, O) {
      if (Object(J) !== J) {
        return J;
      }
      if (!Array.isArray(u)) {
        u = u.toString().match(/[^.[]]+/g) || [];
      }
      u.slice(0, -1).reduce((Z, A, p) => Object(Z[A]) === Z[A] ? Z[A] : Z[A] = Math.abs(u[p + 1 < 10 ? "0" + (p + 1) : p + 1]) >> 0 === +u[p + 1 < 10 ? "0" + (p + 1) : p + 1] ? [] : {}, J)[u[u.length - 1]] = O;
      return J;
    }
    getdata(J) {
      let O = this.getval(J);
      if (/^@/.test(J)) {
        const [, Z, A] = /^@(.*?).(.*?)$/.exec(J),
          p = Z ? this.getval(Z) : "";
        if (p) {
          try {
            const U = JSON.parse(p);
            O = U ? this.lodash_get(U, A, "") : O;
          } catch (n) {
            O = "";
          }
        }
      }
      return O;
    }
    setdata(J, u) {
      let A = false;
      if (/^@/.test(u)) {
        const [, L, b] = /^@(.*?).(.*?)$/.exec(u),
          U = this.getval(L),
          n = L ? U === "null" ? null : U || "{}" : "{}";
        try {
          const C = JSON.parse(n);
          this.lodash_set(C, b, J);
          A = this.setval(JSON.stringify(C), L);
        } catch (i) {
          const m = {};
          this.lodash_set(m, b, J);
          A = this.setval(JSON.stringify(m), L);
        }
      } else {
        A = this.setval(J, u);
      }
      return A;
    }
    getval(J) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(J);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(J);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[J];
          } else {
            return this.data && this.data[J] || null;
          }
        }
      }
    }
    setval(J, u) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(J, u);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(J, u);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[u] = J;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[u] || null;
          }
        }
      }
    }
    initGotEnv(J) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (J) {
        J.headers = J.headers ? J.headers : {};
        if (undefined === J.headers.Cookie && undefined === J.cookieJar) {
          J.cookieJar = this.ckjar;
        }
      }
    }
    get(J, u = () => {}) {
      if (J.headers) {
        if (J.url.indexOf("BaseReq=") == -1) {
          delete J.headers["Content-Type"];
        }
        delete J.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          J.headers = J.headers || {};
          const U = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(J.headers, U);
        }
        $httpClient.get(J, (n, C, G) => {
          if (!n && C) {
            C.body = G;
            C.statusCode = C.status;
          }
          u(n, C, G);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            J.opts = J.opts || {};
            const n = {
              hints: false
            };
            Object.assign(J.opts, n);
          }
          $task.fetch(J).then(G => {
            const {
                statusCode: e,
                statusCode: i,
                headers: Y,
                body: m
              } = G,
              Q = {
                status: e,
                statusCode: i,
                headers: Y,
                body: m
              };
            u(null, Q, m);
          }, G => u(G));
        } else {
          this.isNode() && (this.initGotEnv(J), this.got(J).on("redirect", (i, Y) => {
            try {
              if (i.headers["set-cookie"]) {
                const z = i.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (z) {
                  this.ckjar.setCookieSync(z, null);
                }
                Y.cookieJar = this.ckjar;
              }
            } catch (K) {
              this.logErr(K);
            }
          }).then(e => {
            const {
                statusCode: Y,
                statusCode: m,
                headers: Q,
                body: z
              } = e,
              V = {
                status: Y,
                statusCode: m,
                headers: Q,
                body: z
              };
            u(null, V, z);
          }, e => {
            const {
              message: Y,
              response: m
            } = e;
            u(Y, m, m && m.body);
          }));
        }
      }
    }
    post(J, u = () => {}) {
      const Z = J.method ? J.method.toLocaleLowerCase() : "post";
      if (J.body && J.headers && !J.headers["Content-Type"]) {
        J.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (J.headers) {
        delete J.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          J.headers = J.headers || {};
          const L = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(J.headers, L);
        }
        $httpClient[Z](J, (U, n, C) => {
          if (!U && n) {
            n.body = C;
            n.statusCode = n.status;
          }
          u(U, n, C);
        });
      } else {
        if (this.isQuanX()) {
          J.method = Z;
          if (this.isNeedRewrite) {
            J.opts = J.opts || {};
            const U = {
              hints: false
            };
            Object.assign(J.opts, U);
          }
          $task.fetch(J).then(C => {
            const {
                statusCode: Y,
                statusCode: m,
                headers: Q,
                body: z
              } = C,
              V = {
                status: Y,
                statusCode: m,
                headers: Q,
                body: z
              };
            u(null, V, z);
          }, C => u(C));
        } else {
          if (this.isNode()) {
            this.initGotEnv(J);
            const {
              url: G,
              ...e
            } = J;
            this.got[Z](G, e).then(i => {
              const {
                  statusCode: Y,
                  statusCode: m,
                  headers: Q,
                  body: z
                } = i,
                V = {
                  status: Y,
                  statusCode: m,
                  headers: Q,
                  body: z
                };
              u(null, V, z);
            }, i => {
              const {
                message: Y,
                response: m
              } = i;
              u(Y, m, m && m.body);
            });
          }
        }
      }
    }
    put(J, u = () => {}) {
      const Z = J.method ? J.method.toLocaleLowerCase() : "put";
      J.body && J.headers && !J.headers["Content-Type"] && (J.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (J.headers) {
        delete J.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          J.headers = J.headers || {};
          const A = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(J.headers, A);
        }
        $httpClient[Z](J, (p, L, b) => {
          !p && L && (L.body = b, L.statusCode = L.status);
          u(p, L, b);
        });
      } else {
        if (this.isQuanX()) {
          J.method = Z;
          if (this.isNeedRewrite) {
            J.opts = J.opts || {};
            const p = {
              hints: false
            };
            Object.assign(J.opts, p);
          }
          $task.fetch(J).then(L => {
            const {
              statusCode: b,
              statusCode: U,
              headers: n,
              body: C
            } = L;
            const G = {
              status: b,
              statusCode: U,
              headers: n,
              body: C
            };
            u(null, G, C);
          }, L => u(L));
        } else {
          if (this.isNode()) {
            this.initGotEnv(J);
            const {
              url: L,
              ...b
            } = J;
            this.got[Z](L, b).then(U => {
              const {
                  statusCode: n,
                  statusCode: C,
                  headers: G,
                  body: e
                } = U,
                i = {
                  status: n,
                  statusCode: C,
                  headers: G,
                  body: e
                };
              u(null, i, e);
            }, U => {
              const {
                message: n,
                response: C
              } = U;
              u(n, C, C && C.body);
            });
          }
        }
      }
    }
    time(J, u = null) {
      const O = u ? new Date(u) : new Date();
      let Z = {
        "M+": O.getMonth() + 1,
        "d+": O.getDate(),
        "H+": O.getHours(),
        "m+": O.getMinutes(),
        "s+": O.getSeconds(),
        "q+": Math.floor((O.getMonth() + 3) / 3),
        S: O.getMilliseconds()
      };
      if (/(y+)/.test(J)) {
        J = J.replace(RegExp.$1, (O.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let A in Z) if (new RegExp("(" + A + ")").test(J)) {
        J = J.replace(RegExp.$1, RegExp.$1.length == 1 ? Z[A] : ("00" + Z[A]).substr(("" + Z[A]).length));
      }
      return J;
    }
    msg(J = X, u = "", O = "", Z) {
      const A = p => {
        if (!p) {
          return p;
        }
        if (typeof p === "string") {
          if (this.isLoon()) {
            return p;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": p
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: p
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof p === "object") {
            if (this.isLoon()) {
              let L = p.openUrl || p.url || p["open-url"],
                b = p.mediaUrl || p["media-url"];
              const U = {
                openUrl: L,
                mediaUrl: b
              };
              return U;
            } else {
              if (this.isQuanX()) {
                let n = p["open-url"] || p.url || p.openUrl,
                  C = p["media-url"] || p.mediaUrl;
                const G = {
                  "open-url": n,
                  "media-url": C
                };
                return G;
              } else {
                if (this.isSurge()) {
                  let e = p.url || p.openUrl || p["open-url"];
                  const i = {
                    url: e
                  };
                  return i;
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
          $notification.post(J, u, O, A(Z));
        } else {
          this.isQuanX() && $notify(J, u, O, A(Z));
        }
      }
      if (!this.isMuteLog) {
        let p = ["", "==============📣系统通知📣=============="];
        p.push(J);
        u ? p.push(u) : "";
        O ? p.push(O) : "";
        console.log(p.join("\n"));
        this.logs = this.logs.concat(p);
      }
    }
    log(...J) {
      J.length > 0 && (this.logs = [...this.logs, ...J]);
      console.log(J.join(this.logSeparator));
    }
    logErr(J, u) {
      const O = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !O ? this.log("", "❗️" + this.name + ", 错误!", J) : this.log("", "❗️" + this.name + ", 错误!", J.stack);
    }
    wait(J) {
      return new Promise(u => setTimeout(u, J));
    }
    done(J = {}) {
      const u = new Date().getTime();
      const O = (u - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + O + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(J);
    }
  }(X, D);
}