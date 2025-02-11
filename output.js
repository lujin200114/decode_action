//Tue Feb 11 2025 04:27:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("抖音火山版"),
  version = "V3.0.6",
  appName = "dyhsbapp";
let dyhsbapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet dyhsbAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    dyhsb: dyhsbAPP\n}\n\nmodule.exports = APPS", l => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("dyhsbactivecode") || 0,
  dyhsbuserck = $.getval("dyhsbuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  dyhsblogs = [];
let accounts = [],
  wss = [],
  channels_status = [],
  reconectCounts = [];
let requestObjects = [],
  requestSigns = [],
  httpResult = "",
  signSwitchs = [],
  userAuth = "",
  scriptAuth = "";
let newest_version = "",
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
  process.env.DYHSBAPP ? dyhsbapp = JSON.parse(process.env.DYHSBAPP) : dyhsbapp = COOKIES.DYHSB;
  userId = process.env.TGUSERID;
  activeCode = process.env.DYHSBACTIVECODE;
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
    if (!dyhsbapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let n = false;
    const B = apiHost.split("&"),
      c = B.length;
    for (let R = 0; R < c; R++) {
      if ($.isNode()) {
        n = await checkAddress("" + B[R], 2500);
      } else {
        $.isSurge() || $.isLoon() ? n = await httpClientRequest("" + B[R], 2500) : n = await fetchRequest("" + B[R], 2500);
      }
      if (n == true) {
        apiHost = B[R];
        $.log("📢 接口" + (R + 1) + "[" + B[R] + "]服务器接口正常! 🎉");
        break;
      }
      if (R == c - 1 && n == false) {
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
      let t = new Date(vipDate).getTime(),
        G = new Date().getTime();
      if (G > t) {
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
        let Z = new Date(vipDate).getTime(),
          w = new Date().getTime();
        if (w > Z) {
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
    buyCount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    if (runAuth != true) {
      $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (dyhsbapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (dyhsbapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + dyhsbapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + dyhsbapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (dyhsbapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + dyhsbapp.length + "个账号");
    let u = [];
    for (let D = 0; D < dyhsbapp.length; D++) {
      u.push(runMultiTasks(D));
      dyhsblogs[D] = "";
      signSwitchs[D] = 1;
      if ($.isNode()) {
        channels_status[D] = 1;
        await init_ws(D);
      } else {
        channels_status[D] = 1;
      }
    }
    await Promise.allSettled(u).then(N => {
      $.log("日志整理功能如下：");
      $.log("---------------日志整理开始--------------");
      for (let a = 0; a < dyhsbapp.length; a++) {
        $.log(dyhsblogs[a]);
        sendlogs += dyhsblogs[a];
      }
      $.log("---------------日志整理结束--------------");
      sendMsg(sendlogs);
    });
  }
})().catch(l => $.logErr(l)).finally(() => $.done());
async function runMultiTasks(l) {
  return new Promise((n, B) => {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 开始执行 working......");
    runSubTask(n, l);
  });
}
async function init_ws(l) {
  if ($.isNode()) {
    reconectCounts[l] > 0 && $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 尝试重新连接服务器>>>>>>");
    wss[l] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[l].on("open", function B() {
      $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签名通道已连接");
    });
    wss[l].on("close", function c() {
      $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[l].on("error", function u() {
      $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[l] = 1;
      reconectCounts[l]++;
      if (reconectCounts[l] <= 3) {
        init_ws(l);
      }
    });
  }
}
async function runSubTask(l, W) {
  $.isNode() && (await $.wait(3000, 5000));
  dyhsbapp[W].url = dyhsbapp[W].url.replace(/\+/g, "");
  if (dyhsbapp[W].capture) {
    if (dyhsbapp[W].interface && dyhsbapp[W].interface.split("$").length > 0) {
      let u = dyhsbapp[W].interface.split("$").length > 1 ? dyhsbapp[W].interface.split("$")[0] : dyhsbapp[W].interface;
      await getCapture(W, u);
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。");
      dyhsblogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。\n";
    } else {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 请设置接口地址再运行脚本！");
    }
    if ($.isNode()) {
      await wss[W].close();
    }
  } else {
    await userInfo(W);
    if (hour > 7 && hour < 23) {
      await pre_withdraw(W);
    }
    await taskPage(W);
    $.isNode() && (await wss[W].close());
    await runComplete(appName, userId);
  }
  l();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const n = $request.body;
    let B = dyhsbuserck - 1;
    if (dyhsbapp[B]) {
      dyhsbapp[B].token_body = n;
    } else {
      const J = {
        token_body: n
      };
      dyhsbapp[B] = J;
    }
    $.setdata(JSON.stringify(dyhsbapp, null, 2), "dyhsbapp");
    $.msg($.name, "快音账号" + (B + 1) + "Token获取成功！🎉");
  }
}
function getReqUrl(l) {
  let n = ts13(),
    B = ts10(),
    c = url2obj(dyhsbapp[l].url);
  c.ts = B;
  c._rticket = n;
  dyhsbapp[l].iid = c.iid;
  dyhsbapp[l].did = c.device_id;
  c.version_code = "270700";
  c.version_name = "27.7.0";
  c.manifest_version_code = "270701";
  c.update_version_code = "27709900";
  c.device_platform = "android";
  c.luckycat_version_name = "8.13.0-rc.3";
  c.luckycat_version_code = "890100";
  delete c.luckydog_base;
  delete c.luckydog_data;
  delete c.luckydog_token;
  delete c.luckydog_sdk_version;
  delete c.luckydog_api_version;
  return jsonToUrl(c);
}
async function getSixGodHeader(l, W, n) {
  let c = "common";
  dyhsbapp[l].interface && (c = dyhsbapp[l].interface);
  let u = dyhsbapp[l].iid,
    J = dyhsbapp[l].did,
    R = "",
    f = [];
  for (let H in n) {
    if (H == "Content-Type" || H == "Host") {
      continue;
    }
    f.push(H.toLowerCase() + "=[" + n[H] + "]");
  }
  R += f.join(",");
  R += "";
  let Q = J + "@" + u + "@" + encodeURIComponent(W) + "@" + encodeURIComponent(R) + "@" + c;
  await selectChannel(l, Q);
}
async function userInfo(l) {
  let n = getReqUrl(l);
  const B = "https://api5-normal-lq.amemv.com/aweme/v1/user/profile/self/?" + n;
  let c = "";
  await getReqObject(B, c, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[l], printCaller());
  let u = httpResult;
  if (u != null && u.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 用户名=> " + u.user.bind_phone);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 用户名=> " + u.user.bind_phone + "\n";
    accounts[l] = u.user.bind_phone;
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 用户信息=> " + u.err_tips);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 用户信息=> " + u.err_tips + "\n";
  }
}
async function sign(l) {
  let n = getReqUrl(l);
  const B = "https://api5-normal-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?" + n;
  let c = "{}";
  await getReqObject(B, c, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let u = httpResult;
  if (u != null && u.err_no == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签到=> " + u.data.success_desc + "，获得" + u.data.amount + "音符");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签到=> " + u.data.success_desc + "，获得" + u.data.amount + "音符\n";
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签到=> " + u.err_tips);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 签到=> " + u.err_tips + "\n";
  }
}
async function taskPage(l) {
  let n = getReqUrl(l);
  const B = "https://hotsoon.snssdk.com/hotsoon/janus/flame/management/panel/?" + n;
  let c = "";
  await getReqObject(B, c, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[l], printCaller());
  let u = httpResult;
  if (u && u.data.task_info.data.task_list && u.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 现有火苗=> " + u.data.user_flame_info.data.flame_left + " 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 现有火苗=> " + u.data.user_flame_info.data.flame_left + " 🔥\n";
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 可兑换为=> " + (u.data.user_flame_info.data.flame_left / 30000).toFixed(1) + "元");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 可兑换为=> " + (u.data.user_flame_info.data.flame_left / 30000).toFixed(1) + "元\n";
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 现有余额=> " + u.data.user_flame_info.data.can_with_draw_money + "元");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 现有余额=> " + u.data.user_flame_info.data.can_with_draw_money + "元\n";
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 今日领取火苗=> " + u.data.user_flame_info.data.td_flame_count + " 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 今日领取火苗=> " + u.data.user_flame_info.data.td_flame_count + " 🔥\n";
    let R = undefined,
      f = undefined;
    if (u.data.task_info.data.new_user_task_part) {
      R = u.data.task_info.data.new_user_task_part.task_list.find(K => K.task_name == "check_in_v2");
      f = u.data.task_info.data.new_user_task_part.task_list.find(K => K.task_name == "ad");
    } else {
      R = u.data.task_info.data.task_list.find(F => F.task_name == "check_in_v2");
      f = u.data.task_info.data.task_list.find(F => F.task_name == "ad");
    }
    const Q = u.data.treasure_chest_info,
      T = ts10();
    if (f && (f.ad_task.last_award_timestamp == 0 || f.ad_task.last_award_timestamp + 1200 + "" <= T)) {
      await excitation_ad(l, f.task_name, f.ad_task.token, f.ad_task.title);
      await $.wait(randomNum(15000, 35000));
    }
    if (Q.data.ug_task_info && Q.data.ug_task_info.page_view.can_show == true && Q.data.ug_task_info.page_view.cooldown_end_time + "" <= T) {
      await openBox(l, Q.data.ug_task_info.page_view.title);
    } else {
      !Q.data.ug_task_info && (!Q.data.last_award_timestamp && Q.data.finished_toast != "今日任务已达上限，请明日再来" || Q.data.last_award_timestamp + Q.data.cooling_time + "" <= T) && (await openBox_another(l, Q.data.task_name, Q.data.token, "开宝箱"));
    }
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> " + u.status_message);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> " + u.status_message + "\n";
  }
}
async function openBox(l, W) {
  let B = getReqUrl(l),
    c = "https://api5-normal-hl.amemv.com/aweme/ug/incentive/luckyapi/v1/awemeug/treasure_box_ug/done?" + B;
  let u = "{}";
  await getReqObject(c, u, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let J = httpResult;
  if (J != null && J.err_no == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + W + "成功，获得" + J.data.amount + "火苗 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + W + "成功，获得" + J.data.amount + "火苗 🔥\n";
    const Q = J.data.button_data.excitation_ad_info.token;
    await $.wait(randomNum(30000, 60000));
    await treasure_box_ad(l, "treasure_chest_ad", Q);
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + W + "=> " + J.err_tips);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + W + "=> " + J.err_tips + "\n";
  }
}
async function openBox_another(l, W, n, B) {
  let u = getReqUrl(l),
    J = "https://api5-normal-hl.amemv.com/hotsoon/flame/task_system/task_done/?" + u;
  let R = "task_name=" + W + "&auto_finish=false&token=" + n;
  await getReqObject(J, R, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let f = httpResult;
  if (f != null && f.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "成功，获得" + f.data.task_done_award.flame_amount + "火苗 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "成功，获得" + f.data.task_done_award.flame_amount + "火苗 🔥\n";
    const T = f.data.treasure_chest_ad_info.ad_token;
    await $.wait(randomNum(30000, 60000));
    await treasure_box_ad(l, "treasure_chest_ad", T);
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "=> " + f.err_tips);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "=> " + f.err_tips + "\n";
  }
}
async function treasure_box_ad(l, W, n) {
  let c = getReqUrl(l);
  const u = "https://api5-normal-hl.amemv.com/hotsoon/flame/task_system/task_done/?" + c;
  let J = "task_name=" + W + "&token=" + n + "&history_total_award_key=";
  await getReqObject(u, J, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let R = httpResult;
  if (R != null && R.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 开宝箱看广告成功，获得" + R.data.task_done_award.flame_amount + "火苗 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 开宝箱看广告成功，获得" + R.data.task_done_award.flame_amount + "火苗 🔥\n";
    for (let Q = 0; Q < 3; Q++) {
      if (Q > 0) {
        W = "ad_one_more_" + Q;
      }
      await video_one_more(l, W, "宝箱广告", Q, R.data.task_done_award.history_total_award_key);
    }
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 宝箱广告=> 失败");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 宝箱广告=> 失败\n";
  }
}
async function video_one_more(l, W, n, B, c) {
  let J = getReqUrl(l);
  const R = "https://api5-normal-hl.amemv.com/hotsoon/flame/task_system/ad/one_more/?" + J;
  let f = "task_name=" + W + "&one_more_index=" + B;
  await getReqObject(R, f, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let Q = httpResult;
  if (Q != null && Q.status_code == 0) {
    if (Q.data.has_one_more == false) {
      $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + n + "=> 检测不可以再看一次广告");
      dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + n + "=> 检测不可以再看一次广告\n";
    } else {
      $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + n + "=> 检测可以再看一次广告");
      dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + n + "=> 检测可以再看一次广告\n";
      let F = Q.data.next_token,
        v = Q.data.next_task_name;
      await video_one_reward(l, v, F, n, c);
    }
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + n + "=> 检测是否可以再看一次广告失败");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + n + "=> 检测是否可以再看一次广告失败\n";
  }
}
async function video_one_reward(l, W, n, B, c) {
  let J = getReqUrl(l);
  const R = "https://api5-normal-lf.amemv.com/hotsoon/flame/task_system/task_done/?" + J,
    f = "task_name=" + W + "&token=" + n + "&history_total_award_key=" + encodeURIComponent(c);
  await getReqObject(R, f, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let Q = httpResult;
  if (Q != null && Q.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "附加广告=> 获得" + Q.data.task_done_award.flame_amount + "火苗 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "附加广告=> 获得" + Q.data.task_done_award.flame_amount + "火苗 🔥\n";
    await $.wait(randomNum(30000, 60000));
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "附加广告=> 任务出错");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "附加广告=> 任务出错\n";
  }
}
async function excitation_ad(l, W, n, B) {
  let u = getReqUrl(l);
  const J = "https://api5-normal-hl.amemv.com/hotsoon/flame/task_system/task_done/?" + u;
  let R = "task_name=" + W + "&token=" + n + "&history_total_award_key=";
  await getReqObject(J, R, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let f = httpResult;
  if (f != null && f.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "广告成功，获得" + f.data.task_done_award.flame_amount + "火苗 🔥");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "广告成功，获得" + f.data.task_done_award.flame_amount + "火苗 🔥\n";
    for (let T = 0; T < 3; T++) {
      if (T > 0) {
        W = "ad_one_more_" + T;
      }
      await video_one_more(l, W, B, T, f.data.task_done_award.history_total_award_key);
    }
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "广告=> " + f.data.prompts);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + B + "广告=> " + f.data.prompts + "\n";
  }
}
async function excitation_ad_detail(l, W) {
  let B = getReqUrl(l);
  const c = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/" + W.key + "/detail?" + B;
  let u = "";
  await getReqObject(c, u, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[l], printCaller());
  let J = httpResult;
  if (J != null && J.err_no == 0) {
    let Q = JSON.parse(W.status_extra);
    await excitation_ad(l, W.key, Q.ad_id, Q.req_id, W.name);
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + W.name + "广告=> " + J.err_tips);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: " + W.name + "广告=> " + J.err_tips + "\n";
  }
}
async function pre_withdraw(l) {
  let n = getReqUrl(l);
  const B = "https://hotsoon.snssdk.com/hotsoon/janus/flame/withdraw/panel/?" + n;
  const c = "";
  await getReqObject(B, c, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 提现=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[l], printCaller());
  let u = httpResult;
  if (u != null && u.status_code == 0) {
    let R = u.data.direct_withdraw_package.data.alipay;
    if (!R) {
      $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 账号目前被风控，暂时没有提现入口，等等吧！");
      dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 账号目前被风控，暂时没有提现入口，等等吧！\n";
      return;
    }
    let f = R.find(H => H.amount == 1000),
      Q = R.find(H => H.amount == 20);
    f && f.status == 1 && u.data.user_flame_info.data.can_with_draw_money >= f.amount / 100 && (await withdraw(l, f.token, f.amount));
    if (Q && Q.status == 1 && u.data.user_flame_info.data.can_with_draw_money >= Q.amount / 100) {
      await withdraw(l, Q.token, Q.amount);
    }
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 获取提现token=> 失败");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 获取提现token=> 失败\n";
  }
}
async function withdraw(l, W, n) {
  let c = getReqUrl(l);
  const u = "https://api5-normal-hl.amemv.com/hotsoon/flame/direct_withdraw/handle/?" + c;
  const J = "package=" + n + "&input_type=1&payment_platform=0&__hideErrorToast=true&token=" + W;
  await getReqObject(u, J, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 提现=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let R = httpResult;
  if (R != null && R.status_code == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 提现" + n / 100 + "元到支付宝=> 已成功，请注意查收！ 🎉");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 提现" + n / 100 + "元到支付宝=> 已成功，请注意查收！ 🎉\n";
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 提现" + n / 100 + "元到支付宝=> 失败");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 提现" + n / 100 + "元到支付宝=> 失败\n";
  }
}
async function shopping(l) {
  let n = getReqUrl(l);
  const B = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&" + n;
  let c = "{}";
  await getReqObject(B, c, l);
  if (signSwitchs[l] == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 任务中心=> 逛街服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[l], printCaller());
  let u = httpResult;
  if (u != null && u.err_no == 0) {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 逛街任务=> 获得" + u.data.amount + "音符 🎉");
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 逛街任务=> 获得" + u.data.amount + "音符 🎉\n";
  } else {
    $.log("[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 逛街任务=> " + u.err_tips);
    dyhsblogs[l] += "[账号" + (l + 1 < 10 ? "0" + (l + 1) : l + 1) + "]: 逛街任务=> " + u.err_tips + "\n";
  }
}
function getScriptAuth(l, W, n) {
  return new Promise((c, u) => {
    const R = apiHost + "/script/permissions/lastest",
      f = {
        appName: l,
        userId: W,
        activityCode: n,
        version: version
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const H = {
      url: R,
      headers: T,
      body: JSON.stringify(f)
    };
    $.post(H, async (K, F, v) => {
      if (v && v != null && v.replace(/\"/g, "").length > 50) {
        const G = v.replace(/\"/g, "").slice(34),
          d = new Base64();
        result = JSON.parse(d.decode(G));
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
        } catch (A) {
          $.log(A);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      c();
    });
  });
}
function runComplete(l, W) {
  return new Promise((B, c) => {
    const J = apiHost + "/script/run/add",
      R = {
        appName: l,
        userId: W,
        activityCode: activeCode,
        version: version
      };
    const Q = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const T = {
      url: J,
      headers: Q,
      body: JSON.stringify(R)
    };
    $.post(T, async (H, K, F) => {
      B();
    });
  });
}
function checkAddress(l, W) {
  return new Promise((B, c) => {
    const R = setTimeout(() => {
        B(false);
      }, W),
      f = http.get(l, Q => {
        clearTimeout(R);
        Q.statusCode === 404 ? B(true) : B(false);
      });
    f.on("error", Q => {
      clearTimeout(R);
      B(false);
    });
    f.on("timeout", () => {
      f.abort();
      c(new Error("请求超时"));
    });
  });
}
async function fetchRequest(l, W = 3000) {
  return new Promise((B, c) => {
    const R = {
      url: l + "/docs"
    };
    setTimeout(() => {
      B(false);
    }, W);
    $.get(R, async (f, Q, T) => {
      if (Q.status == 401) {
        B(true);
      } else {
        B(false);
      }
    });
  });
}
async function httpClientRequest(l, W = 3000) {
  return new Promise((B, c) => {
    const J = {
      url: l + "/"
    };
    setTimeout(() => {
      B(false);
    }, W);
    $httpClient.get(J, async (R, f, Q) => {
      Q == "{\"detail\":\"Not Found\"}" ? B(true) : B(false);
    });
  });
}
async function redisGet(l, W, n) {
  return new Promise((c, u) => {
    const f = apiHost + "/redis/hash/get/" + W + "/" + n,
      Q = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const T = {
      url: f,
      headers: Q
    };
    $.get(T, async (K, F, v) => {
      const t = v.replace(/\"/g, "");
      answerTexts[l] = t;
      c();
    });
  });
}
function redisSet(l, W, n) {
  return new Promise((c, u) => {
    const R = apiHost + "/redis/hash/set",
      f = {
        key: l,
        hashKey: W,
        hashValue: n
      };
    const T = {};
    T["Content-Type"] = "application/json";
    T.accept = "application/json";
    const H = {
      url: R,
      headers: T,
      body: JSON.stringify(f)
    };
    $.post(H, async (K, F, v) => {
      c();
    });
  });
}
function redisPop(l) {
  return new Promise((n, B) => {
    const u = apiHost + "/redis/set/pop/" + l,
      J = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const R = {
      url: u,
      headers: J
    };
    $.get(R, async (Q, T, H) => {
      const F = H.replace(/\"/g, "");
      popCookie = F;
      n();
    });
  });
}
function getCapture(l, W) {
  return new Promise((B, c) => {
    const R = apiHost + "/bytes/capture",
      f = {
        content: W,
        appName: appName,
        uuid: userId
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const H = {
      url: R,
      headers: T,
      body: JSON.stringify(f)
    };
    $.post(H, async (K, F, v) => {
      const p = v.replace(/\"/g, "");
      requestSigns[l] = p;
      B();
    });
  });
}
async function getReqObject(n, B, c) {
  let J = "com.ss.android.ugc.live/300601 (Linux; U; Android 12; zh_CN; 22081212C; Build/SKQ1.220303.001; Cronet/TTNetVersion:d7b9f50e 2024-06-12 QuicVersion:9a4adebb 2024-05-28)";
  if (dyhsbapp[c].ua && dyhsbapp[c].ua != "") {
    J = dyhsbapp[c].ua;
  }
  let R = getHostname(n),
    f = ts13();
  const Q = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Accept-Encoding": "gzip",
    "User-Agent": J,
    Host: R,
    "passport-sdk-version": "203226",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": f,
    "x-tt-store-region": "cn-ha",
    "x-tt-store-region-src": "uid",
    "X-Tt-Token": dyhsbapp[c].token,
    "x-vc-bdturing-sdk-version": "3.7.0.cn"
  };
  const T = {
    url: n,
    headers: Q
  };
  if (B) {
    T.body = B;
    T.headers["X-SS-STUB"] = MD5_Encrypt(B).toUpperCase();
  }
  await getSixGodHeader(c, n, T.headers);
  let K = requestSigns[c];
  if (K.length < 200) {
    if (K.indexOf("unable to find process with name") != -1) {
      $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 签名获取失败原因=> 请检查签名APP是否已启动");
    } else {
      if (K.indexOf("unable to connect to remote frida-server") != -1) {
        $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 签名获取失败原因=> 请检查是否映射成功");
      } else {
        $.log("[账号" + (c + 1 < 10 ? "0" + (c + 1) : c + 1) + "]: 签名获取失败原因=> " + K);
      }
    }
  }
  if (K && K != "Internal Server Error") {
    const g = convertStringToJson(K);
    T.headers["X-Argus"] = g["X-Argus"];
    T.headers["X-Gorgon"] = g["X-Gorgon"];
    if (g["X-Gorgon"] == undefined) {
      signSwitchs[c] = 0;
    }
    T.headers["X-Helios"] = g["X-Helios"];
    T.headers["X-Khronos"] = g["X-Khronos"];
    T.headers["X-Ladon"] = g["X-Ladon"];
    T.headers["X-Medusa"] = g["X-Medusa"];
    let Y = dyhsbapp[c].token.substring(2, 34);
    T.headers.Cookie = "sessionid=" + Y + "; sessionid_ss=" + Y;
  } else {
    signSwitchs[c] = 0;
  }
  requestObjects[c] = T;
  return T;
}
function getReqObject_(n, B, c) {
  let J = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  dyhsbapp[c].ua && dyhsbapp[c].ua != "" && (J = dyhsbapp[c].ua);
  let R = getHostname(n);
  const f = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": J,
    Authorization: dyhsbapp[c].auth,
    Host: R
  };
  const Q = {
    url: n,
    headers: f
  };
  B && (Q.body = B);
  requestObjects[c] = Q;
  return Q;
}
async function httpRequest(l, W, n) {
  httpResult = null;
  return new Promise(c => {
    $[l](W, async (J, R, f) => {
      try {
        if (J) {
          $.log(n + ": " + l + "请求失败");
          $.log(JSON.stringify(J));
          $.logErr(J);
        } else {
          if (safeGet(f)) {
            httpResult = JSON.parse(f);
          } else {
            const t = new URL(W.url);
            $.log(t.pathname + "发起" + l + "请求时，出现错误，请处理");
          }
        }
      } catch (G) {
        $.logErr(G, R);
      } finally {
        c(httpResult);
      }
    });
  });
}
async function selectChannel(l, W) {
  if (channels_status[l] == 0) {
    await getSign_(l, W);
  } else {
    await getSign(l, W);
  }
}
function getSign_(l, W) {
  return new Promise((B, c) => {
    function R(f) {
      let Q = f.toString("utf8");
      requestSigns[l] = Q;
      wss[l].removeListener("message", R);
      B(Q);
    }
    wss[l].on("message", R);
    if (wss[l].readyState === 1) {
      const f = {
        method: appName,
        params: {}
      };
      f.params.content = W;
      f.params.appName = appName;
      f.params.uuid = userId;
      wss[l].send(JSON.stringify(f), Q => {
        if (Q) {
          c(Q);
        }
      });
    } else {
      B(getSign(l, W));
      wss[l].removeListener("message", R);
    }
  });
}
function getSign(l, W) {
  return new Promise((B, c) => {
    const J = apiHost + "/sign/dyhsb/six",
      R = {
        content: W,
        appName: appName,
        uuid: userId
      };
    const Q = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const T = {
      url: J,
      headers: Q,
      body: JSON.stringify(R)
    };
    $.post(T, async (H, K, F) => {
      const v = F.replace(/\"/g, "");
      requestSigns[l] = v;
      B();
    });
  });
}
function sortUrlParams(l, W, n) {
  const c = url2obj(l);
  W.forEach(R => {
    delete c[R];
  });
  Object.assign(c, n);
  const u = Object.keys(c).sort(),
    J = u.map(R => R + "=" + c[R]).join("&");
  return J;
}
function url2obj(l) {
  l = l.replace(/\"/g, "");
  var n,
    B = {},
    c = l.slice(l.indexOf("?") + 1).split("&");
  for (var u = 0; u < c.length; u++) {
    n = c[u].split("=");
    B[n[0]] = n[1];
  }
  return B;
}
function convertStringToJson(W) {
  const c = W.replace(/[{} ]/g, "");
  const u = c.split(","),
    J = {};
  u.forEach(R => {
    const f = R.split(/=(.*)/),
      [Q, T] = f;
    J[Q] = T;
  });
  return J;
}
function getHostname(l) {
  let n = l.substr(l.indexOf("//") + 2);
  let B = n.substr(0, n.indexOf("/")),
    c = "";
  let u = B.indexOf(":");
  if (u > 0) {
    c = B.substr(0, u);
  } else {
    c = B;
  }
  return c;
}
function calculateTimeDifference(W, n) {
  var T = new Date(W);
  var R = new Date(n);
  var f = R - T;
  var Q = Math.floor(f / 1000);
  return Q;
}
function cutString(l, W) {
  if (l.length * 2 <= W) {
    return l;
  }
  var B = 0,
    c = "";
  for (var u = 0; u < l.length; u++) {
    c = c + l.charAt(u);
    if (l.charCodeAt(u) > 128) {
      B = B + 2;
      if (B >= W) {
        return c.substring(0, c.length - 1) + "...";
      }
    } else {
      B = B + 1;
      if (B >= W) {
        return c.substring(0, c.length - 2) + "...";
      }
    }
  }
  return c;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(l) {
  try {
    if (typeof JSON.parse(l) == "object") {
      return true;
    }
  } catch (c) {
    console.log(c);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(l) {
  var n = Object.keys(l).map(function (B) {
    return encodeURIComponent(B) + "=" + encodeURIComponent(l[B]);
  }).join("&");
  return n;
}
function compileStr(l) {
  var n = String.fromCharCode(l.charCodeAt(0) + l.length);
  for (var B = 1; B < l.length; B++) {
    n += String.fromCharCode(l.charCodeAt(B) + l.charCodeAt(B - 1));
  }
  return escape(n);
}
function uncompileStr(l) {
  l = unescape(l);
  var n = String.fromCharCode(l.charCodeAt(0) - l.length);
  for (var B = 1; B < l.length; B++) {
    n += String.fromCharCode(l.charCodeAt(B) - n.charCodeAt(B - 1));
  }
  return n;
}
function randomNum(l, W) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * l + 1);
      break;
    case 2:
      return parseInt(Math.random() * (W - l + 1) + l);
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
  function W() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return W() + W() + "-" + W() + "-" + W() + "-" + W() + "-" + W() + W() + W();
}
function phone_num(W) {
  if (W.length == 11) {
    let u = W.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return u;
  } else {
    return W;
  }
}
function txt_api(l) {
  return new Promise((n, B) => {
    const J = "https://v1.hitokoto.cn/?c=e",
      R = {};
    R.accept = "application/json";
    const f = {
      url: J,
      headers: R
    };
    $.get(f, async (T, H, K) => {
      let v = JSON.parse(K),
        p = v.hitokoto;
      contents[l] = p + " " + p;
      n();
    });
  });
}
function getTime_8() {
  return new Promise((W, n) => {
    const c = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      u = {
        url: c
      };
    $.get(u, async (R, f, Q) => {
      W(Q);
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
async function sendMsg(l) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, l);
      } else {
        $.msg($.name, "", l);
      }
    } else {
      $.log(l);
    }
  }
}
async function wxPush(l, W, n) {
  return new Promise((c, u) => {
    const f = "https://wxpusher.zjiecode.com/api/send/message",
      Q = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: W,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [n],
        verifyPay: false
      };
    const H = {
      "Content-Type": "application/json"
    };
    const K = {
      url: f,
      headers: H,
      body: JSON.stringify(Q)
    };
    $.post(K, async (F, v, p) => {
      c();
    });
  });
}
function randomString(l, W) {
  W = W || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let B = "";
  for (let c = 0; c < l; c++) {
    let u = Math.floor(Math.random() * W.length);
    B += W.substring(u, u + 1);
  }
  return B;
}
function MD5_Encrypt(W) {
  function Q(lY, lA) {
    return lY << lA | lY >>> 32 - lA;
  }
  function T(lY, lA) {
    var lC, lq, lm, lh, lZ;
    lm = 2147483648 & lY;
    lh = 2147483648 & lA;
    lC = 1073741824 & lY;
    lq = 1073741824 & lA;
    lZ = (1073741823 & lY) + (1073741823 & lA);
    return lC & lq ? 2147483648 ^ lZ ^ lm ^ lh : lC | lq ? 1073741824 & lZ ? 3221225472 ^ lZ ^ lm ^ lh : 1073741824 ^ lZ ^ lm ^ lh : lZ ^ lm ^ lh;
  }
  function Y(lY, lA, lC) {
    return lY & lA | ~lY & lC;
  }
  function Z(lY, lA, lC) {
    return lY & lC | lA & ~lC;
  }
  function S(lY, lA, lC) {
    return lY ^ lA ^ lC;
  }
  function U(lY, lA, lC) {
    return lA ^ (lY | ~lC);
  }
  function P(lY, lA, lC, lq, lm, lh, lZ) {
    lY = T(lY, T(T(Y(lA, lC, lq), lm), lZ));
    return T(Q(lY, lh), lA);
  }
  function V(lY, lA, lC, lq, lm, lh, lZ) {
    lY = T(lY, T(T(Z(lA, lC, lq), lm), lZ));
    return T(Q(lY, lh), lA);
  }
  function X(lY, lA, lC, lq, lm, lh, lZ) {
    lY = T(lY, T(T(S(lA, lC, lq), lm), lZ));
    return T(Q(lY, lh), lA);
  }
  function l0(lY, lA, lC, lq, lm, lh, lZ) {
    lY = T(lY, T(T(U(lA, lC, lq), lm), lZ));
    return T(Q(lY, lh), lA);
  }
  function l1(lY) {
    for (var lA, lC = lY.length, lq = lC + 8, lm = (lq - lq % 64) / 64, lh = 16 * (lm + 1), lZ = new Array(lh - 1), lw = 0, le = 0; lC > le;) {
      lA = (le - le % 4) / 4;
      lw = le % 4 * 8;
      lZ[lA] = lZ[lA] | lY.charCodeAt(le) << lw;
      le++;
    }
    lA = (le - le % 4) / 4;
    lw = le % 4 * 8;
    lZ[lA] = lZ[lA] | 128 << lw;
    lZ[lh - 2] = lC << 3;
    lZ[lh - 1] = lC >>> 29;
    return lZ;
  }
  function l2(lY) {
    var lA,
      lC,
      lq = "",
      lm = "";
    for (lC = 0; 3 >= lC; lC++) {
      lA = lY >>> 8 * lC & 255;
      lm = "0" + lA.toString(16);
      lq += lm.substr(lm.length - 2, 2);
    }
    return lq;
  }
  function l3(lY) {
    lY = lY.replace(/\r\n/g, "\n");
    for (var lC = "", lq = 0; lq < lY.length; lq++) {
      var lm = lY.charCodeAt(lq);
      128 > lm ? lC += String.fromCharCode(lm) : lm > 127 && 2048 > lm ? (lC += String.fromCharCode(lm >> 6 | 192), lC += String.fromCharCode(63 & lm | 128)) : (lC += String.fromCharCode(lm >> 12 | 224), lC += String.fromCharCode(lm >> 6 & 63 | 128), lC += String.fromCharCode(63 & lm | 128));
    }
    return lC;
  }
  var l4,
    l5,
    l6,
    l7,
    l8,
    l9,
    ll,
    lW,
    ln,
    lB = [],
    lc = 7,
    lu = 12,
    lJ = 17,
    lR = 22,
    lf = 5,
    lQ = 9,
    lT = 14,
    lH = 20,
    lK = 4,
    lF = 11,
    lv = 16,
    lp = 23,
    lt = 6,
    lG = 10,
    ld = 15,
    ls = 21;
  for (W = l3(W), lB = l1(W), l9 = 1732584193, ll = 4023233417, lW = 2562383102, ln = 271733878, l4 = 0; l4 < lB.length; l4 += 16) {
    l5 = l9;
    l6 = ll;
    l7 = lW;
    l8 = ln;
    l9 = P(l9, ll, lW, ln, lB[l4 + 0], lc, 3614090360);
    ln = P(ln, l9, ll, lW, lB[l4 + 1], lu, 3905402710);
    lW = P(lW, ln, l9, ll, lB[l4 + 2], lJ, 606105819);
    ll = P(ll, lW, ln, l9, lB[l4 + 3], lR, 3250441966);
    l9 = P(l9, ll, lW, ln, lB[l4 + 4], lc, 4118548399);
    ln = P(ln, l9, ll, lW, lB[l4 + 5], lu, 1200080426);
    lW = P(lW, ln, l9, ll, lB[l4 + 6], lJ, 2821735955);
    ll = P(ll, lW, ln, l9, lB[l4 + 7], lR, 4249261313);
    l9 = P(l9, ll, lW, ln, lB[l4 + 8], lc, 1770035416);
    ln = P(ln, l9, ll, lW, lB[l4 + 9], lu, 2336552879);
    lW = P(lW, ln, l9, ll, lB[l4 + 10], lJ, 4294925233);
    ll = P(ll, lW, ln, l9, lB[l4 + 11], lR, 2304563134);
    l9 = P(l9, ll, lW, ln, lB[l4 + 12], lc, 1804603682);
    ln = P(ln, l9, ll, lW, lB[l4 + 13], lu, 4254626195);
    lW = P(lW, ln, l9, ll, lB[l4 + 14], lJ, 2792965006);
    ll = P(ll, lW, ln, l9, lB[l4 + 15], lR, 1236535329);
    l9 = V(l9, ll, lW, ln, lB[l4 + 1], lf, 4129170786);
    ln = V(ln, l9, ll, lW, lB[l4 + 6], lQ, 3225465664);
    lW = V(lW, ln, l9, ll, lB[l4 + 11], lT, 643717713);
    ll = V(ll, lW, ln, l9, lB[l4 + 0], lH, 3921069994);
    l9 = V(l9, ll, lW, ln, lB[l4 + 5], lf, 3593408605);
    ln = V(ln, l9, ll, lW, lB[l4 + 10], lQ, 38016083);
    lW = V(lW, ln, l9, ll, lB[l4 + 15], lT, 3634488961);
    ll = V(ll, lW, ln, l9, lB[l4 + 4], lH, 3889429448);
    l9 = V(l9, ll, lW, ln, lB[l4 + 9], lf, 568446438);
    ln = V(ln, l9, ll, lW, lB[l4 + 14], lQ, 3275163606);
    lW = V(lW, ln, l9, ll, lB[l4 + 3], lT, 4107603335);
    ll = V(ll, lW, ln, l9, lB[l4 + 8], lH, 1163531501);
    l9 = V(l9, ll, lW, ln, lB[l4 + 13], lf, 2850285829);
    ln = V(ln, l9, ll, lW, lB[l4 + 2], lQ, 4243563512);
    lW = V(lW, ln, l9, ll, lB[l4 + 7], lT, 1735328473);
    ll = V(ll, lW, ln, l9, lB[l4 + 12], lH, 2368359562);
    l9 = X(l9, ll, lW, ln, lB[l4 + 5], lK, 4294588738);
    ln = X(ln, l9, ll, lW, lB[l4 + 8], lF, 2272392833);
    lW = X(lW, ln, l9, ll, lB[l4 + 11], lv, 1839030562);
    ll = X(ll, lW, ln, l9, lB[l4 + 14], lp, 4259657740);
    l9 = X(l9, ll, lW, ln, lB[l4 + 1], lK, 2763975236);
    ln = X(ln, l9, ll, lW, lB[l4 + 4], lF, 1272893353);
    lW = X(lW, ln, l9, ll, lB[l4 + 7], lv, 4139469664);
    ll = X(ll, lW, ln, l9, lB[l4 + 10], lp, 3200236656);
    l9 = X(l9, ll, lW, ln, lB[l4 + 13], lK, 681279174);
    ln = X(ln, l9, ll, lW, lB[l4 + 0], lF, 3936430074);
    lW = X(lW, ln, l9, ll, lB[l4 + 3], lv, 3572445317);
    ll = X(ll, lW, ln, l9, lB[l4 + 6], lp, 76029189);
    l9 = X(l9, ll, lW, ln, lB[l4 + 9], lK, 3654602809);
    ln = X(ln, l9, ll, lW, lB[l4 + 12], lF, 3873151461);
    lW = X(lW, ln, l9, ll, lB[l4 + 15], lv, 530742520);
    ll = X(ll, lW, ln, l9, lB[l4 + 2], lp, 3299628645);
    l9 = l0(l9, ll, lW, ln, lB[l4 + 0], lt, 4096336452);
    ln = l0(ln, l9, ll, lW, lB[l4 + 7], lG, 1126891415);
    lW = l0(lW, ln, l9, ll, lB[l4 + 14], ld, 2878612391);
    ll = l0(ll, lW, ln, l9, lB[l4 + 5], ls, 4237533241);
    l9 = l0(l9, ll, lW, ln, lB[l4 + 12], lt, 1700485571);
    ln = l0(ln, l9, ll, lW, lB[l4 + 3], lG, 2399980690);
    lW = l0(lW, ln, l9, ll, lB[l4 + 10], ld, 4293915773);
    ll = l0(ll, lW, ln, l9, lB[l4 + 1], ls, 2240044497);
    l9 = l0(l9, ll, lW, ln, lB[l4 + 8], lt, 1873313359);
    ln = l0(ln, l9, ll, lW, lB[l4 + 15], lG, 4264355552);
    lW = l0(lW, ln, l9, ll, lB[l4 + 6], ld, 2734768916);
    ll = l0(ll, lW, ln, l9, lB[l4 + 13], ls, 1309151649);
    l9 = l0(l9, ll, lW, ln, lB[l4 + 4], lt, 4149444226);
    ln = l0(ln, l9, ll, lW, lB[l4 + 11], lG, 3174756917);
    lW = l0(lW, ln, l9, ll, lB[l4 + 2], ld, 718787259);
    ll = l0(ll, lW, ln, l9, lB[l4 + 9], ls, 3951481745);
    l9 = T(l9, l5);
    ll = T(ll, l6);
    lW = T(lW, l7);
    ln = T(ln, l8);
  }
  var lg = l2(l9) + l2(ll) + l2(lW) + l2(ln);
  return lg.toLowerCase();
}
function SHA256(l) {
  var n = 8,
    B = 0;
  function c(d, g) {
    var Y = (d & 65535) + (g & 65535),
      A = (d >> 16) + (g >> 16) + (Y >> 16);
    return A << 16 | Y & 65535;
  }
  function u(d, g) {
    return d >>> g | d << 32 - g;
  }
  function J(d, g) {
    return d >>> g;
  }
  function f(d, g, Y) {
    return d & g ^ ~d & Y;
  }
  function Q(d, g, Y) {
    return d & g ^ d & Y ^ g & Y;
  }
  function T(d) {
    return u(d, 2) ^ u(d, 13) ^ u(d, 22);
  }
  function H(d) {
    return u(d, 6) ^ u(d, 11) ^ u(d, 25);
  }
  function K(d) {
    return u(d, 7) ^ u(d, 18) ^ J(d, 3);
  }
  function F(d) {
    return u(d, 17) ^ u(d, 19) ^ J(d, 10);
  }
  function v(Y, A) {
    var C = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      q = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      Z = new Array(64),
      w,
      L,
      o,
      z,
      M,
      k,
      U,
      E,
      P,
      x,
      V,
      D;
    Y[A >> 5] |= 128 << 24 - A % 32;
    Y[(A + 64 >> 9 << 4) + 15] = A;
    for (var P = 0; P < Y.length; P += 16) {
      w = q[0];
      L = q[1];
      o = q[2];
      z = q[3];
      M = q[4];
      k = q[5];
      U = q[6];
      E = q[7];
      for (var x = 0; x < 64; x++) {
        if (x < 16) {
          Z[x] = Y[x + P];
        } else {
          Z[x] = c(c(c(F(Z[x - 2]), Z[x - 7]), K(Z[x - 15])), Z[x - 16]);
        }
        V = c(c(c(c(E, H(M)), f(M, k, U)), C[x]), Z[x]);
        D = c(T(w), Q(w, L, o));
        E = U;
        U = k;
        k = M;
        M = c(z, V);
        z = o;
        o = L;
        L = w;
        w = c(V, D);
      }
      q[0] = c(w, q[0]);
      q[1] = c(L, q[1]);
      q[2] = c(o, q[2]);
      q[3] = c(z, q[3]);
      q[4] = c(M, q[4]);
      q[5] = c(k, q[5]);
      q[6] = c(U, q[6]);
      q[7] = c(E, q[7]);
    }
    return q;
  }
  function p(d) {
    var g = Array(),
      Y = (1 << n) - 1;
    for (var A = 0; A < d.length * n; A += n) {
      g[A >> 5] |= (d.charCodeAt(A / n) & Y) << 24 - A % 32;
    }
    return g;
  }
  function t(d) {
    d = d.replace(/\r\n/g, "\n");
    var Y = "";
    for (var A = 0; A < d.length; A++) {
      var C = d.charCodeAt(A);
      if (C < 128) {
        Y += String.fromCharCode(C);
      } else {
        C > 127 && C < 2048 ? (Y += String.fromCharCode(C >> 6 | 192), Y += String.fromCharCode(C & 63 | 128)) : (Y += String.fromCharCode(C >> 12 | 224), Y += String.fromCharCode(C >> 6 & 63 | 128), Y += String.fromCharCode(C & 63 | 128));
      }
    }
    return Y;
  }
  function G(d) {
    var Y = B ? "0123456789ABCDEF" : "0123456789abcdef",
      A = "";
    for (var C = 0; C < d.length * 4; C++) {
      A += Y.charAt(d[C >> 2] >> (3 - C % 4) * 8 + 4 & 15) + Y.charAt(d[C >> 2] >> (3 - C % 4) * 8 & 15);
    }
    return A;
  }
  l = t(l);
  return G(v(p(l), l.length * n));
}
function SHA1(l) {
  function c(Z, w) {
    var o = Z << w | Z >>> 32 - w;
    return o;
  }
  function u(Z) {
    var e = "",
      L,
      o,
      z;
    for (L = 0; L <= 6; L += 2) {
      o = Z >>> L * 4 + 4 & 15;
      z = Z >>> L * 4 & 15;
      e += o.toString(16) + z.toString(16);
    }
    return e;
  }
  function J(Z) {
    var w = "",
      e,
      L;
    for (e = 7; e >= 0; e--) {
      L = Z >>> e * 4 & 15;
      w += L.toString(16);
    }
    return w;
  }
  function R(Z) {
    Z = Z.replace(/\r\n/g, "\n");
    var e = "";
    for (var L = 0; L < Z.length; L++) {
      var o = Z.charCodeAt(L);
      if (o < 128) {
        e += String.fromCharCode(o);
      } else {
        if (o > 127 && o < 2048) {
          e += String.fromCharCode(o >> 6 | 192);
          e += String.fromCharCode(o & 63 | 128);
        } else {
          e += String.fromCharCode(o >> 12 | 224);
          e += String.fromCharCode(o >> 6 & 63 | 128);
          e += String.fromCharCode(o & 63 | 128);
        }
      }
    }
    return e;
  }
  var f,
    Q,
    T,
    H = new Array(80),
    K = 1732584193,
    F = 4023233417,
    v = 2562383102,
    p = 271733878,
    t = 3285377520;
  var G, d, s, g, Y, q;
  l = R(l);
  var m = l.length;
  var h = new Array();
  for (Q = 0; Q < m - 3; Q += 4) {
    T = l.charCodeAt(Q) << 24 | l.charCodeAt(Q + 1 < 10 ? "0" + (Q + 1) : Q + 1) << 16 | l.charCodeAt(Q + 2) << 8 | l.charCodeAt(Q + 3);
    h.push(T);
  }
  switch (m % 4) {
    case 0:
      Q = 2147483648;
      break;
    case 1:
      Q = l.charCodeAt(m - 1) << 24 | 8388608;
      break;
    case 2:
      Q = l.charCodeAt(m - 2) << 24 | l.charCodeAt(m - 1) << 16 | 32768;
      break;
    case 3:
      Q = l.charCodeAt(m - 3) << 24 | l.charCodeAt(m - 2) << 16 | l.charCodeAt(m - 1) << 8 | 128;
      break;
  }
  h.push(Q);
  while (h.length % 16 != 14) {
    h.push(0);
  }
  h.push(m >>> 29);
  h.push(m << 3 & 4294967295);
  for (f = 0; f < h.length; f += 16) {
    for (Q = 0; Q < 16; Q++) {
      H[Q] = h[f + Q];
    }
    for (Q = 16; Q <= 79; Q++) {
      H[Q] = c(H[Q - 3] ^ H[Q - 8] ^ H[Q - 14] ^ H[Q - 16], 1);
    }
    G = K;
    d = F;
    s = v;
    g = p;
    Y = t;
    for (Q = 0; Q <= 19; Q++) {
      q = c(G, 5) + (d & s | ~d & g) + Y + H[Q] + 1518500249 & 4294967295;
      Y = g;
      g = s;
      s = c(d, 30);
      d = G;
      G = q;
    }
    for (Q = 20; Q <= 39; Q++) {
      q = c(G, 5) + (d ^ s ^ g) + Y + H[Q] + 1859775393 & 4294967295;
      Y = g;
      g = s;
      s = c(d, 30);
      d = G;
      G = q;
    }
    for (Q = 40; Q <= 59; Q++) {
      q = c(G, 5) + (d & s | d & g | s & g) + Y + H[Q] + 2400959708 & 4294967295;
      Y = g;
      g = s;
      s = c(d, 30);
      d = G;
      G = q;
    }
    for (Q = 60; Q <= 79; Q++) {
      q = c(G, 5) + (d ^ s ^ g) + Y + H[Q] + 3395469782 & 4294967295;
      Y = g;
      g = s;
      s = c(d, 30);
      d = G;
      G = q;
    }
    K = K + G & 4294967295;
    F = F + d & 4294967295;
    v = v + s & 4294967295;
    p = p + g & 4294967295;
    t = t + Y & 4294967295;
  }
  var q = J(K) + J(F) + J(v) + J(p) + J(t);
  return q.toLowerCase();
}
function Base64() {
  var W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (n) {
    var B = "";
    var c, u, J, R, f, Q, T;
    var H = 0;
    n = utf8Encode(n);
    while (H < n.length) {
      c = n.charCodeAt(H++);
      u = n.charCodeAt(H++);
      J = n.charCodeAt(H++);
      R = c >> 2;
      f = (c & 3) << 4 | u >> 4;
      Q = (u & 15) << 2 | J >> 6;
      T = J & 63;
      if (isNaN(u)) {
        Q = T = 64;
      } else {
        if (isNaN(J)) {
          T = 64;
        }
      }
      B = B + W.charAt(R) + W.charAt(f) + W.charAt(Q) + W.charAt(T);
    }
    return B;
  };
  this.decode = function (n) {
    var B = "";
    var u, J, R;
    var f, Q, T, H;
    var c = 0;
    n = n.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (c < n.length) {
      f = W.indexOf(n.charAt(c++));
      Q = W.indexOf(n.charAt(c++));
      T = W.indexOf(n.charAt(c++));
      H = W.indexOf(n.charAt(c++));
      u = f << 2 | Q >> 4;
      J = (Q & 15) << 4 | T >> 2;
      R = (T & 3) << 6 | H;
      B = B + String.fromCharCode(u);
      T !== 64 && (B = B + String.fromCharCode(J));
      H !== 64 && (B = B + String.fromCharCode(R));
    }
    B = utf8Decode(B);
    return B;
  };
  utf8Encode = function (B) {
    B = B.replace(/\r\n/g, "\n");
    var J = "";
    for (var R = 0; R < B.length; R++) {
      var f = B.charCodeAt(R);
      if (f < 128) {
        J += String.fromCharCode(f);
      } else {
        if (f > 127 && f < 2048) {
          J += String.fromCharCode(f >> 6 | 192);
          J += String.fromCharCode(f & 63 | 128);
        } else {
          J += String.fromCharCode(f >> 12 | 224);
          J += String.fromCharCode(f >> 6 & 63 | 128);
          J += String.fromCharCode(f & 63 | 128);
        }
      }
    }
    return J;
  };
  utf8Decode = function (n) {
    var J = "";
    var u = 0;
    var R = 0;
    var f = 0;
    var B = 0;
    while (u < n.length) {
      R = n.charCodeAt(u);
      if (R < 128) {
        J += String.fromCharCode(R);
        u++;
      } else {
        if (R > 191 && R < 224) {
          f = n.charCodeAt(u + 1 < 10 ? "0" + (u + 1) : u + 1);
          J += String.fromCharCode((R & 31) << 6 | f & 63);
          u += 2;
        } else {
          f = n.charCodeAt(u + 1 < 10 ? "0" + (u + 1) : u + 1);
          B = n.charCodeAt(u + 2);
          J += String.fromCharCode((R & 15) << 12 | (f & 63) << 6 | B & 63);
          u += 3;
        }
      }
    }
    return J;
  };
}
function Env(l, W) {
  class B {
    constructor(c) {
      this.env = c;
    }
    send(c, u = "GET") {
      c = typeof c === "string" ? {
        url: c
      } : c;
      let f = this.get;
      u === "POST" && (f = this.post);
      return new Promise((T, H) => {
        f.call(this, c, (v, p, t) => {
          if (v) {
            H(v);
          } else {
            T(p);
          }
        });
      });
    }
    get(c) {
      return this.send.call(this.env, c);
    }
    post(c) {
      return this.send.call(this.env, c, "POST");
    }
  }
  return new class {
    constructor(c, u) {
      this.name = c;
      this.http = new B(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, u);
      const J = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(J);
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
    toObj(c, u = null) {
      try {
        return JSON.parse(c);
      } catch {
        return u;
      }
    }
    toStr(c, u = null) {
      try {
        return JSON.stringify(c);
      } catch {
        return u;
      }
    }
    getjson(c, u) {
      let f = u;
      const Q = this.getdata(c);
      if (Q) {
        try {
          f = JSON.parse(this.getdata(c));
        } catch {}
      }
      return f;
    }
    setjson(c, u) {
      try {
        return this.setdata(JSON.stringify(c), u);
      } catch {
        return false;
      }
    }
    getScript(c) {
      return new Promise(f => {
        const H = {
          url: c
        };
        this.get(H, (K, F, v) => f(v));
      });
    }
    runScript(c, u) {
      return new Promise(R => {
        let T = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        T = T ? T.replace(/\n/g, "").trim() : T;
        let H = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        H = H ? H * 1 : 20;
        H = u && u.timeout ? u.timeout : H;
        const [K, F] = T.split("@"),
          v = {
            script_text: c,
            mock_type: "cron",
            timeout: H
          };
        const p = {
          "X-Key": K,
          Accept: "*/*"
        };
        const t = {
          url: "http: //" + F + "/v1/scripting/evaluate",
          body: v,
          headers: p
        };
        this.post(t, (d, s, g) => R(g));
      }).catch(R => this.logErr(R));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const J = this.path.resolve(this.dataFile),
          R = this.path.resolve(process.cwd(), this.dataFile),
          f = this.fs.existsSync(J),
          Q = !f && this.fs.existsSync(R);
        if (f || Q) {
          const T = f ? J : R;
          try {
            return JSON.parse(this.fs.readFileSync(T));
          } catch (K) {
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
        const J = this.path.resolve(this.dataFile),
          R = this.path.resolve(process.cwd(), this.dataFile),
          f = this.fs.existsSync(J),
          Q = !f && this.fs.existsSync(R),
          T = JSON.stringify(this.data);
        if (f) {
          this.fs.writeFileSync(J, T);
        } else {
          if (Q) {
            this.fs.writeFileSync(R, T);
          } else {
            this.fs.writeFileSync(J, T);
          }
        }
      }
    }
    lodash_get(c, u, J = undefined) {
      const f = u.replace(/[(d+)]/g, ".$1").split(".");
      let Q = c;
      for (const T of f) {
        Q = Object(Q)[T];
        if (Q === undefined) {
          return J;
        }
      }
      return Q;
    }
    lodash_set(c, u, J) {
      if (Object(c) !== c) {
        return c;
      }
      if (!Array.isArray(u)) {
        u = u.toString().match(/[^.[]]+/g) || [];
      }
      u.slice(0, -1).reduce((R, f, Q) => Object(R[f]) === R[f] ? R[f] : R[f] = Math.abs(u[Q + 1 < 10 ? "0" + (Q + 1) : Q + 1]) >> 0 === +u[Q + 1 < 10 ? "0" + (Q + 1) : Q + 1] ? [] : {}, c)[u[u.length - 1]] = J;
      return c;
    }
    getdata(c) {
      let J = this.getval(c);
      if (/^@/.test(c)) {
        const [, f, Q] = /^@(.*?).(.*?)$/.exec(c),
          T = f ? this.getval(f) : "";
        if (T) {
          try {
            const K = JSON.parse(T);
            J = K ? this.lodash_get(K, Q, "") : J;
          } catch (v) {
            J = "";
          }
        }
      }
      return J;
    }
    setdata(c, u) {
      let f = false;
      if (/^@/.test(u)) {
        const [, Q, T] = /^@(.*?).(.*?)$/.exec(u),
          H = this.getval(Q),
          K = Q ? H === "null" ? null : H || "{}" : "{}";
        try {
          const F = JSON.parse(K);
          this.lodash_set(F, T, c);
          f = this.setval(JSON.stringify(F), Q);
        } catch (p) {
          const G = {};
          this.lodash_set(G, T, c);
          f = this.setval(JSON.stringify(G), Q);
        }
      } else {
        f = this.setval(c, u);
      }
      return f;
    }
    getval(c) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(c);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(c);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[c];
          } else {
            return this.data && this.data[c] || null;
          }
        }
      }
    }
    setval(c, u) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(c, u);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(c, u);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[u] = c;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[u] || null;
          }
        }
      }
    }
    initGotEnv(c) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (c) {
        c.headers = c.headers ? c.headers : {};
        if (undefined === c.headers.Cookie && undefined === c.cookieJar) {
          c.cookieJar = this.ckjar;
        }
      }
    }
    get(c, u = () => {}) {
      if (c.headers) {
        delete c.headers["Content-Type"];
        delete c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          c.headers = c.headers || {};
          const f = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(c.headers, f);
        }
        $httpClient.get(c, (T, H, K) => {
          if (!T && H) {
            H.body = K;
            H.statusCode = H.status;
          }
          u(T, H, K);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            c.opts = c.opts || {};
            const K = {
              hints: false
            };
            Object.assign(c.opts, K);
          }
          $task.fetch(c).then(v => {
            const {
                statusCode: t,
                statusCode: G,
                headers: d,
                body: s
              } = v,
              g = {
                status: t,
                statusCode: G,
                headers: d,
                body: s
              };
            u(null, g, s);
          }, v => u(v));
        } else {
          this.isNode() && (this.initGotEnv(c), this.got(c).on("redirect", (p, t) => {
            try {
              if (p.headers["set-cookie"]) {
                const g = p.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (g) {
                  this.ckjar.setCookieSync(g, null);
                }
                t.cookieJar = this.ckjar;
              }
            } catch (A) {
              this.logErr(A);
            }
          }).then(p => {
            const t = {};
            t.jETVk = "apiHosts";
            const {
                statusCode: s,
                statusCode: g,
                headers: Y,
                body: A
              } = p,
              C = {
                status: s,
                statusCode: g,
                headers: Y,
                body: A
              };
            u(null, C, A);
          }, p => {
            const {
              message: G,
              response: d
            } = p;
            u(G, d, d && d.body);
          }));
        }
      }
    }
    post(c, u = () => {}) {
      const R = c.method ? c.method.toLocaleLowerCase() : "post";
      c.body && c.headers && !c.headers["Content-Type"] && (c.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (c.headers) {
        delete c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          c.headers = c.headers || {};
          const H = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(c.headers, H);
        }
        $httpClient[R](c, (K, F, v) => {
          if (!K && F) {
            F.body = v;
            F.statusCode = F.status;
          }
          u(K, F, v);
        });
      } else {
        if (this.isQuanX()) {
          c.method = R;
          if (this.isNeedRewrite) {
            c.opts = c.opts || {};
            const F = {
              hints: false
            };
            Object.assign(c.opts, F);
          }
          $task.fetch(c).then(v => {
            const {
                statusCode: t,
                statusCode: G,
                headers: d,
                body: s
              } = v,
              g = {
                status: t,
                statusCode: G,
                headers: d,
                body: s
              };
            u(null, g, s);
          }, v => u(v));
        } else {
          if (this.isNode()) {
            this.initGotEnv(c);
            const {
              url: t,
              ...G
            } = c;
            this.got[R](t, G).then(d => {
              const {
                  statusCode: g,
                  statusCode: Y,
                  headers: A,
                  body: C
                } = d,
                q = {
                  status: g,
                  statusCode: Y,
                  headers: A,
                  body: C
                };
              u(null, q, C);
            }, d => {
              const {
                message: g,
                response: Y
              } = d;
              u(g, Y, Y && Y.body);
            });
          }
        }
      }
    }
    put(c, u = () => {}) {
      const R = c.method ? c.method.toLocaleLowerCase() : "put";
      if (c.body && c.headers && !c.headers["Content-Type"]) {
        c.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (c.headers) {
        delete c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          c.headers = c.headers || {};
          const Q = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(c.headers, Q);
        }
        $httpClient[R](c, (H, K, F) => {
          !H && K && (K.body = F, K.statusCode = K.status);
          u(H, K, F);
        });
      } else {
        if (this.isQuanX()) {
          c.method = R;
          if (this.isNeedRewrite) {
            c.opts = c.opts || {};
            const F = {
              hints: false
            };
            Object.assign(c.opts, F);
          }
          $task.fetch(c).then(p => {
            const {
                statusCode: G,
                statusCode: d,
                headers: s,
                body: g
              } = p,
              Y = {
                status: G,
                statusCode: d,
                headers: s,
                body: g
              };
            u(null, Y, g);
          }, p => u(p));
        } else {
          if (this.isNode()) {
            this.initGotEnv(c);
            const {
              url: p,
              ...t
            } = c;
            this.got[R](p, t).then(G => {
              const {
                  statusCode: g,
                  statusCode: Y,
                  headers: A,
                  body: C
                } = G,
                q = {
                  status: g,
                  statusCode: Y,
                  headers: A,
                  body: C
                };
              u(null, q, C);
            }, G => {
              const {
                message: d,
                response: s
              } = G;
              u(d, s, s && s.body);
            });
          }
        }
      }
    }
    time(c, u = null) {
      const J = u ? new Date(u) : new Date();
      let R = {
        "M+": J.getMonth() + 1,
        "d+": J.getDate(),
        "H+": J.getHours(),
        "m+": J.getMinutes(),
        "s+": J.getSeconds(),
        "q+": Math.floor((J.getMonth() + 3) / 3),
        S: J.getMilliseconds()
      };
      if (/(y+)/.test(c)) {
        c = c.replace(RegExp.$1, (J.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let f in R) if (new RegExp("(" + f + ")").test(c)) {
        c = c.replace(RegExp.$1, RegExp.$1.length == 1 ? R[f] : ("00" + R[f]).substr(("" + R[f]).length));
      }
      return c;
    }
    msg(c = l, u = "", J = "", R) {
      const Q = T => {
        if (!T) {
          return T;
        }
        if (typeof T === "string") {
          if (this.isLoon()) {
            return T;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": T
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: T
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof T === "object") {
            if (this.isLoon()) {
              let H = T.openUrl || T.url || T["open-url"],
                K = T.mediaUrl || T["media-url"];
              const F = {
                openUrl: H,
                mediaUrl: K
              };
              return F;
            } else {
              if (this.isQuanX()) {
                let v = T["open-url"] || T.url || T.openUrl,
                  p = T["media-url"] || T.mediaUrl;
                const t = {
                  "open-url": v,
                  "media-url": p
                };
                return t;
              } else {
                if (this.isSurge()) {
                  let G = T.url || T.openUrl || T["open-url"];
                  const d = {
                    url: G
                  };
                  return d;
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
          $notification.post(c, u, J, Q(R));
        } else {
          this.isQuanX() && $notify(c, u, J, Q(R));
        }
      }
      if (!this.isMuteLog) {
        let T = ["", "==============📣系统通知📣=============="];
        T.push(c);
        u ? T.push(u) : "";
        J ? T.push(J) : "";
        console.log(T.join("\n"));
        this.logs = this.logs.concat(T);
      }
    }
    log(...c) {
      c.length > 0 && (this.logs = [...this.logs, ...c]);
      console.log(c.join(this.logSeparator));
    }
    logErr(c, u) {
      const J = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !J ? this.log("", "❗️" + this.name + ", 错误!", c) : this.log("", "❗️" + this.name + ", 错误!", c.stack);
    }
    wait(c) {
      return new Promise(u => setTimeout(u, c));
    }
    done(c = {}) {
      const u = new Date().getTime();
      const J = (u - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + J + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(c);
    }
  }(l, W);
}