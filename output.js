//Sat Apr 26 2025 00:57:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("抖音极速版"),
  version = "V3.1.0",
  appName = "dyjsbapp";
let dyjsbapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", I => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("dyjsbactivecode") || 0,
  dyjsbuserck = $.getval("dyjsbuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  dyjsblogs = [],
  accounts = [],
  wss = [],
  channels_status = [],
  reconectCounts = [];
let requestObjects = [],
  requestSigns = [],
  httpResult = "",
  signSwitchs = [],
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
  runedCounts = 1;
let userRank = "";
let invicode = "",
  numbers = 3,
  vipDate = "";
if ($.isNode()) {
  process.env.DYJSBAPP ? dyjsbapp = JSON.parse(process.env.DYJSBAPP) : dyjsbapp = COOKIES.DYJSB;
  userId = process.env.TGUSERID;
  activeCode = process.env.DYJSBACTIVECODE;
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
    if (!dyjsbapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let b = false;
    const r = apiHost.split("&"),
      z = r.length;
    for (let O = 0; O < z; O++) {
      if ($.isNode()) {
        b = await checkAddress("" + r[O], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          b = await httpClientRequest("" + r[O], 2500);
        } else {
          b = await fetchRequest("" + r[O], 2500);
        }
      }
      if (b == true) {
        apiHost = r[O];
        $.log("📢 接口" + (O + 1) + "[" + r[O] + "]服务器接口正常! 🎉");
        break;
      }
      if (O == z - 1 && b == false) {
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
        l = new Date().getTime();
      if (l > t) {
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
        let o = new Date(vipDate).getTime(),
          B = new Date().getTime();
        if (B > o) {
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
    if (dyjsbapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (dyjsbapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + dyjsbapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + dyjsbapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (dyjsbapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    $.log("📢 一共发现了" + dyjsbapp.length + "个账号");
    let A = [];
    for (let Y = 0; Y < dyjsbapp.length; Y++) {
      A.push(runMultiTasks(Y));
      dyjsblogs[Y] = "";
      signSwitchs[Y] = 1;
      if ($.isNode()) {
        channels_status[Y] = 0;
        await init_ws(Y);
      } else {
        channels_status[Y] = 1;
      }
    }
    await Promise.allSettled(A).then(e => {
      $.log("日志整理功能如下：");
      $.log("---------------日志整理开始--------------");
      for (let U = 0; U < dyjsbapp.length; U++) {
        $.log(dyjsblogs[U]);
        sendlogs += dyjsblogs[U];
      }
      $.log("---------------日志整理结束--------------");
      sendMsg(sendlogs);
    });
  }
})().catch(I => $.logErr(I)).finally(() => $.done());
async function runMultiTasks(I) {
  return new Promise((b, r) => {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 开始执行 working......");
    runSubTask(b, I);
  });
}
async function init_ws(I) {
  if ($.isNode()) {
    if (reconectCounts[I] > 0) {
      $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[I] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[I].on("open", function z() {
      $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签名通道已连接");
    });
    wss[I].on("close", function A() {
      $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[I].on("error", function n() {
      $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[I] = 1;
      reconectCounts[I]++;
      reconectCounts[I] <= 3 && init_ws(I);
    });
  }
}
async function runSubTask(I, G) {
  await $.wait(3000, 5000);
  dyjsbapp[G].url = dyjsbapp[G].url.replace(/\+/g, "");
  await userInfo(G);
  await appointmentInfo(G);
  await taskPage(G);
  $.isNode() && (await wss[G].close());
  await runComplete(appName, userId);
  I();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const b = $request.body;
    let r = dyjsbuserck - 1;
    if (dyjsbapp[r]) {
      dyjsbapp[r].token_body = b;
    } else {
      const A = {
        token_body: b
      };
      dyjsbapp[r] = A;
    }
    $.setdata(JSON.stringify(dyjsbapp, null, 2), "dyjsbapp");
    $.msg($.name, "快音账号" + (r + 1) + "Token获取成功！🎉");
  }
}
function getReqUrl(I) {
  let b = ts13();
  let r = ts10(),
    z = url2obj(dyjsbapp[I].url);
  z.ts = r;
  z._rticket = b;
  dyjsbapp[I].iid = z.iid;
  dyjsbapp[I].did = z.device_id;
  z.version_code = "310700";
  z.version_name = "31.7.0";
  z.manifest_version_code = "310701";
  z.update_version_code = "31709900";
  z.device_platform = "android";
  z.luckycat_version_name = "8.13.0-rc.3";
  z.luckycat_version_code = "890100";
  delete z.luckydog_base;
  delete z.luckydog_data;
  delete z.luckydog_token;
  delete z.luckydog_sdk_version;
  delete z.luckydog_api_version;
  return jsonToUrl(z);
}
async function getSixGodHeader(I, G, b) {
  let z = "common";
  if (dyjsbapp[I].interface) {
    z = dyjsbapp[I].interface;
  }
  let A = dyjsbapp[I].iid;
  let n = dyjsbapp[I].did,
    O = "",
    C = [];
  for (let u in b) {
    if (u == "Content-Type" || u == "Host") {
      continue;
    }
    C.push(u.toLowerCase() + "=[" + b[u] + "]");
  }
  O += C.join(",");
  O += "";
  let X = n + "@" + A + "@" + encodeURIComponent(G) + "@" + encodeURIComponent(O) + "@" + z;
  await selectChannel(I, X);
}
async function userInfo(I) {
  let b = getReqUrl(I);
  const r = "https://api5-normal-lq.amemv.com/aweme/v1/user/profile/self/?" + b;
  let z = "";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.status_code == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 用户名=> " + A.user.bind_phone);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 用户名=> " + A.user.bind_phone + "\n";
    accounts[I] = A.user.bind_phone;
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 用户信息=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 用户信息=> " + A.err_tips + "\n";
  }
}
async function sign(I) {
  let b = getReqUrl(I);
  const r = "https://api5-normal-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?" + b;
  let z = "{}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签到=> " + A.data.success_desc + "，获得" + A.data.amount + "音符");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签到=> " + A.data.success_desc + "，获得" + A.data.amount + "音符\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签到=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 签到=> " + A.err_tips + "\n";
  }
}
async function taskPage(I) {
  let b = getReqUrl(I);
  const r = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/page?" + b;
  let z = "";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 音符=> " + A.data.income_data.amount1);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 音符=> " + A.data.income_data.amount1 + "\n";
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 余额=> " + A.data.income_data.amount2 / 100 + "元");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 余额=> " + A.data.income_data.amount2 / 100 + "元\n";
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 音符兑换方式=> " + A.data.income_data.exchange_type_name);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 音符兑换方式=> " + A.data.income_data.exchange_type_name + "\n";
    if (A.data.income_data.amount2 / 100 >= 30) {
      await withdraw(I, 3000, accounts[I]);
    } else {
      A.data.income_data.amount2 / 100 >= 15 && A.data.income_data.amount2 / 100 < 30 && (await withdraw(I, 1500, accounts[I]));
    }
    let C = A.data.task_list,
      X = C.find(M => M.key == "sign_in");
    if (X && X.completed == false) {
      await sign(I);
    }
    let k = C.find(R => R.key == "shopping_gold");
    k && k.desc.indexOf("浏览低价商品") != -1 && (await shopping(I));
    if (signSwitchs[I] == 1) {
      await open_treasure_box(I);
    }
    let j = C.find(l => l.key == "excitation_ad");
    if (j) {
      let l = JSON.parse(j.status_extra),
        d = l.completed;
      if (d == false) {
        signSwitchs[I] == 1 && (await excitation_ad_detail(I, j));
      }
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> " + A.err_tips + "\n";
  }
}
async function swipeTask(I) {
  let b = getReqUrl(I),
    r = "https://api3-normal-c.amemv.com/aweme/ug/lite/read/done/swipe_task?" + b,
    z = "{\"task_id\":100153,\"task_key\":\"low_vv_swipe_up_task\",\"req_from\":\"normal\",\"pendant_show_scene\":\"\"}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.data.success_desc + "，不错哦！获得" + A.data.amount + "音符 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.data.success_desc + "，不错哦！获得" + A.data.amount + "音符 🎉\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.err_tips + "\n";
  }
}
async function open_treasure_box(I) {
  let b = getReqUrl(I),
    r = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/treasure_task?" + b;
  let z = "{}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    let O = A.data.excitation_ad_info ? A.data.excitation_ad_info : A.data.button_data.excitation_ad_info;
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.data.success_desc + "，不错哦！获得" + A.data.amount + "音符 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.data.success_desc + "，不错哦！获得" + A.data.amount + "音符 🎉\n";
    if (O) {
      let X = O.ad_id,
        k = O.req_id,
        u = A.data.excitation_ad_info ? A.data.excitation_ad_info.score_amount : A.data.button_data.excitation_ad_info.score_amount;
      await $.wait(randomNum(10000, 15000));
      await treasure_box_ad(I, X, k, u);
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 打开宝箱=> " + A.err_tips + "\n";
  }
}
async function treasure_box_ad(I, G, b, r, z) {
  let n = getReqUrl(I);
  const O = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?" + n + "&md=0";
  let C = "{\"amount\":\"" + r + "\",\"inspire_modal_add_modal_manage\":false,\"ad_rit\":\"" + G + "\",\"ad_inspire\":\"{\"score_amount\":\"" + r + "\",\"amount\":\"" + r + "\",\"req_id\":\"" + b + "\"}\",\"task_key\":\"excitation_ad_treasure_box\",\"stage_score_amount\":[],\"ad_alias_position\":\"box\",\"need_reward\":true,\"finish_action\":0,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":58,\"dynamic_settings_version\":58,\"poll_settings_version\":0}";
  await getReqObject(O, C, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let X = httpResult;
  if (X != null && X.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 宝箱广告=> 获得" + X.data.amount + "音符 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 宝箱广告=> 获得" + X.data.amount + "音符 🎉\n";
    let j = X.data.aggr_info.aggr_income_id;
    for (let T = 0; T < 3; T++) {
      await video_one_more(I, "excitation_ad_treasure_box", G, T, j);
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 宝箱广告=> " + X.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 宝箱广告=> " + X.err_tips + "\n";
    await $.wait(randomNum(5000, 9000));
    if (X.err_tips.indexOf("很遗憾") != -1 && !z) {
      await treasure_box_ad(I, G, b, r, "try");
    }
  }
}
async function video_one_more(I, G, b, r, z) {
  let n = getReqUrl(I);
  const O = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=" + G + "&rit=" + b + "&creator_id=12315000&one_more_round=" + r + "&" + n;
  await getReqObject(O, "", I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[I], printCaller());
  let C = httpResult;
  if (C != null && C.err_no == 0) {
    if (C.data.has_one_more == true) {
      await $.wait(randomNum(10000, 15000));
      await video_one_reward(I, G, b, r, z);
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 宝箱广告=> " + C.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 宝箱广告=> " + C.err_tips + "\n";
  }
}
async function video_one_reward(I, G, b, r, z) {
  let n = getReqUrl(I);
  const O = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?" + n,
    C = "{\"task_key\":\"" + G + "\",\"rit\":\"" + b + "\",\"creator_id\":\"12315000\",\"one_more_round\":" + r + ",\"aggr_income_id\":\"" + z + "\"}";
  await getReqObject(O, C, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let X = httpResult;
  if (X != null && X.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + X.data.content + "附加广告=> 获得" + X.data.amount + "音符 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + X.data.content + "附加广告=> 获得" + X.data.amount + "音符 🎉\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 附加广告=> " + X.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 附加广告=> " + X.err_tips + "\n";
  }
}
async function excitation_ad(I, G, b, r, z) {
  let n = getReqUrl(I);
  const O = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/" + G + "?" + n;
  let C = "{\"amount\":\"18\",\"inspire_modal_add_modal_manage\":false,\"ad_rit\":\"" + b + "\",\"ad_inspire\":\"{\"score_amount\":\"18\",\"req_id\":\"" + r + "\"}\",\"task_key\":\"" + G + "\",\"stage_score_amount\":[],\"ad_alias_position\":\"task\",\"need_reward\":true,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":58,\"dynamic_settings_version\":58,\"poll_settings_version\":0}";
  await getReqObject(O, C, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let X = httpResult;
  if (X != null && X.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + z + "广告=> 获得" + X.data.amount + "音符 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + z + "广告=> 获得" + X.data.amount + "音符 🎉\n";
    let T = X.data.aggr_info.aggr_income_id;
    for (let P = 0; P < 3; P++) {
      await video_one_more(I, "excitation_ad", b, P, T);
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + z + "广告=> " + X.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + z + "广告=> " + X.err_tips + "\n";
  }
}
async function excitation_ad_detail(I, G) {
  let r = getReqUrl(I);
  const z = "https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/" + G.key + "/detail?" + r;
  let A = "";
  await getReqObject(z, A, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[I], printCaller());
  let n = httpResult;
  if (n != null && n.err_no == 0) {
    let C = JSON.parse(G.status_extra);
    await excitation_ad(I, G.key, C.ad_id, C.req_id, G.name);
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + G.name + "广告=> " + n.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: " + G.name + "广告=> " + n.err_tips + "\n";
  }
}
async function withdraw(I, G, b) {
  let z = getReqUrl(I);
  const A = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/wallet/take_cash?" + z + "&task_key=take_cash&md=0",
    n = "{\"is_auto\":false,\"take_cash_type\":3,\"cash_amount\":-" + G + ",\"tab_type\":\"alipay\",\"name\":\"\",\"account\":\"" + b + "\"}";
  await getReqObject(A, n, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let O = httpResult;
  if (O != null && O.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现" + G / 100 + "元=> " + O.err_tips + "，提现编号(" + O.data.take_cash_record_id + ")，请注意查收！ 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现" + G / 100 + "元=> " + O.err_tips + "，提现编号(" + O.data.take_cash_record_id + ")，请注意查收！ 🎉\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现支付宝=> " + O.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现支付宝=> " + O.err_tips + "\n";
  }
}
async function shopping(I) {
  let b = getReqUrl(I);
  const r = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&" + b;
  let z = "{}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 任务中心=> 逛街服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 逛街任务=> 获得" + A.data.amount + "音符 🎉");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 逛街任务=> 获得" + A.data.amount + "音符 🎉\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 逛街任务=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 逛街任务=> " + A.err_tips + "\n";
  }
}
async function appointmentInfo(I) {
  let b = getReqUrl(I);
  let r = "https://api3-normal-c.amemv.com/aweme/ug/lite/luckyapi/v1/awemelite/appointment/main_page?" + b;
  if (dyjsbapp[I].appointment) {
    r = updateURLParameter(r, "iid", dyjsbapp[I].appointment.split("&")[0]);
    r = updateURLParameter(r, "device_id", dyjsbapp[I].appointment.split("&")[1]);
  }
  let z = "{}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    (A.data.status == 1 || A.data.status == 3) && (await doAppointment(I));
    if (A.data.status == 2 && A.data.count_down <= 0) {
      await receiveAppointment(I);
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约金币中心=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约金币中心=> " + A.err_tips + "\n";
  }
}
async function doAppointment(I) {
  let b = getReqUrl(I, "iid", "did"),
    r = "https://api3-normal-c.amemv.com/aweme/ug/lite/luckyapi/v1/awemelite/appointment/action?" + b;
  if (dyjsbapp[I].appointment) {
    r = updateURLParameter(r, "iid", dyjsbapp[I].appointment.split("&")[0]);
    r = updateURLParameter(r, "device_id", dyjsbapp[I].appointment.split("&")[1]);
  }
  let z = "{\"coin_widget_installed\":false}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约金币=> " + A.data.amount + "金币，预约成功，" + A.data.text + ", " + A.data.popup_text);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约金币=> " + A.data.amount + "金币，预约成功，" + A.data.text + ", " + A.data.popup_text + "\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约金币中心=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约金币中心=> " + A.err_tips + "\n";
  }
}
async function receiveAppointment(I) {
  let b = getReqUrl(I, "iid", "did"),
    r = "https://api5-normal-hl.amemv.com/aweme/ug/lite/luckyapi/v:version/awemelite/appointment/reward?" + b;
  dyjsbapp[I].appointment && (r = updateURLParameter(r, "iid", dyjsbapp[I].appointment.split("&")[0]), r = updateURLParameter(r, "device_id", dyjsbapp[I].appointment.split("&")[1]));
  let z = "{}";
  await getReqObject(r, z, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let A = httpResult;
  if (A != null && A.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约领取金币=> 成功领取" + A.data.popup.amount + "金币");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约领取金币=> 成功领取" + A.data.popup.amount + "金币\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约领取金币=> " + A.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 预约领取金币=> " + A.err_tips + "\n";
  }
}
async function exchangeCoins(I, G) {
  let r = getReqUrl(I, "iid", "did"),
    z = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/wallet/exchange_coin?" + r;
  let A = "{\"exchange_coin\":" + G + "}";
  await getReqObject(z, A, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let n = httpResult;
  if (n != null && n.err_no == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换现金=> 成功兑换" + G / 10000 + "元");
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换现金=> 成功兑换" + G / 10000 + "元\n";
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换现金=> " + n.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换现金=> " + n.err_tips + "\n";
  }
}
async function exchangeSwitch(I, G) {
  let r = getReqUrl(I, "iid", "did"),
    z = "https://api5-normal-hl.amemv.com/luckycat/aweme/v1/wallet/exchange_type_switch?" + r,
    A = "{\"exchange_type\":" + G + "}";
  await getReqObject(z, A, I);
  if (signSwitchs[I] == 0) {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 提现中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[I], printCaller());
  let n = httpResult;
  if (n != null && n.err_no == 0) {
    if (G == 1) {
      $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式切换为=> 自动兑换");
      dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式切换为=> 自动兑换\n";
    } else {
      if (G == 2) {
        $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式切换为=> 随时兑换");
        dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式切换为=> 随时兑换\n";
      } else {
        $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式切换为=> 兑换方式错误");
        dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式切换为=> 兑换方式错误\n";
      }
    }
  } else {
    $.log("[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式兑换=> " + n.err_tips);
    dyjsblogs[I] += "[账号" + (I + 1 < 10 ? "0" + (I + 1) : I + 1) + "]: 兑换方式兑换=> " + n.err_tips + "\n";
  }
}
function getScriptAuth(I, G, b) {
  return new Promise((z, A) => {
    const O = apiHost + "/script/permissions/lastest",
      C = {
        appName: I,
        userId: G,
        activityCode: b,
        version: version
      };
    const k = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const u = {
      url: O,
      headers: k,
      body: JSON.stringify(C)
    };
    $.post(u, async (j, T, P) => {
      if (P && P != null && P.replace(/\"/g, "").length > 50) {
        const t = P.replace(/\"/g, "").slice(34),
          l = new Base64();
        result = JSON.parse(l.decode(t));
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
      z();
    });
  });
}
function runComplete(I, G) {
  return new Promise((r, z) => {
    const O = apiHost + "/script/run/add",
      C = {
        appName: I,
        userId: G,
        activityCode: activeCode,
        version: version
      };
    const k = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const u = {
      url: O,
      headers: k,
      body: JSON.stringify(C)
    };
    $.post(u, async (j, T, P) => {
      r();
    });
  });
}
function checkAddress(I, G) {
  return new Promise((r, z) => {
    const n = setTimeout(() => {
        r(false);
      }, G),
      O = http.get(I, C => {
        clearTimeout(n);
        if (C.statusCode === 404) {
          r(true);
        } else {
          r(false);
        }
      });
    O.on("error", C => {
      clearTimeout(n);
      r(false);
    });
    O.on("timeout", () => {
      O.abort();
      z(new Error("请求超时"));
    });
  });
}
async function fetchRequest(I, G = 3000) {
  return new Promise((r, z) => {
    const n = {
      url: I + "/docs"
    };
    setTimeout(() => {
      r(false);
    }, G);
    $.get(n, async (O, C, X) => {
      if (C.status == 401) {
        r(true);
      } else {
        r(false);
      }
    });
  });
}
async function httpClientRequest(I, G = 3000) {
  return new Promise((r, z) => {
    const O = {
      url: I + "/"
    };
    setTimeout(() => {
      r(false);
    }, G);
    $httpClient.get(O, async (C, X, k) => {
      if (k == "{\"detail\":\"Not Found\"}") {
        r(true);
      } else {
        r(false);
      }
    });
  });
}
async function redisGet(I, G, b) {
  return new Promise((z, A) => {
    const n = apiHost + "/redis/hash/get/" + G + "/" + b,
      O = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const C = {
      url: n,
      headers: O
    };
    $.get(C, async (k, u, j) => {
      const M = j.replace(/\"/g, "");
      answerTexts[I] = M;
      z();
    });
  });
}
function redisSet(I, G, b) {
  return new Promise((z, A) => {
    const C = apiHost + "/redis/hash/set",
      X = {
        key: I,
        hashKey: G,
        hashValue: b
      };
    const u = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const j = {
      url: C,
      headers: u,
      body: JSON.stringify(X)
    };
    $.post(j, async (T, P, M) => {
      z();
    });
  });
}
function redisPop(I) {
  return new Promise((b, r) => {
    const A = apiHost + "/redis/set/pop/" + I,
      n = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const O = {
      url: A,
      headers: n
    };
    $.get(O, async (X, k, u) => {
      const T = u.replace(/\"/g, "");
      popCookie = T;
      b();
    });
  });
}
async function getReqObject(b, r, z) {
  let n = "com.ss.android.ugc.aweme.lite/310701 (Linux; U; Android 12; zh_CN; 22081212C; Build/SKQ1.220303.001; Cronet/TTNetVersion:b714bfef 2024-09-13 QuicVersion:c459d547 2024-08-27)";
  dyjsbapp[z].ua && dyjsbapp[z].ua != "" && (n = dyjsbapp[z].ua);
  let O = getHostname(b);
  let C = ts13();
  const X = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
    "User-Agent": n,
    Host: O,
    "passport-sdk-version": "203266",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": C,
    "x-tt-store-region": "cn-ha",
    "x-tt-store-region-src": "uid",
    "X-Tt-Token": dyjsbapp[z].token,
    "x-vc-bdturing-sdk-version": "3.7.3.cn"
  };
  const k = {
    url: b,
    headers: X
  };
  let u = k;
  if (r) {
    u.body = r;
    u.headers["X-SS-STUB"] = MD5_Encrypt(r).toUpperCase();
  }
  await getSixGodHeader(z, b, u.headers);
  let j = requestSigns[z];
  if (j.length < 200) {
    if (j.indexOf("unable to find process with name") != -1) {
      $.log("[账号" + (z + 1 < 10 ? "0" + (z + 1) : z + 1) + "]: 签名获取失败原因=> 请检查签名APP是否已启动");
    } else {
      if (j.indexOf("unable to connect to remote frida-server") != -1) {
        $.log("[账号" + (z + 1 < 10 ? "0" + (z + 1) : z + 1) + "]: 签名获取失败原因=> 请检查是否映射成功");
      } else {
        $.log("[账号" + (z + 1 < 10 ? "0" + (z + 1) : z + 1) + "]: 签名获取失败原因=> " + j);
      }
    }
  }
  if (j && j != "Internal Server Error") {
    const Z = convertStringToJson(j);
    u.headers["X-Argus"] = Z["X-Argus"];
    u.headers["X-Gorgon"] = Z["X-Gorgon"];
    if (Z["X-Gorgon"] == undefined) {
      signSwitchs[z] = 0;
    }
    u.headers["X-Helios"] = Z["X-Helios"];
    u.headers["X-Khronos"] = Z["X-Khronos"];
    u.headers["X-Ladon"] = Z["X-Ladon"];
    u.headers["X-Medusa"] = Z["X-Medusa"];
    let S = dyjsbapp[z].token.substring(2, 34);
    u.headers.Cookie = "sessionid=" + S + "; sessionid_ss=" + S;
  } else {
    signSwitchs[z] = 0;
  }
  requestObjects[z] = u;
  return u;
}
function getReqObject_(b, r, z) {
  let n = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (dyjsbapp[z].ua && dyjsbapp[z].ua != "") {
    n = dyjsbapp[z].ua;
  }
  let O = getHostname(b);
  const C = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": n,
    Authorization: dyjsbapp[z].auth,
    Host: O
  };
  const X = {
    url: b,
    headers: C
  };
  r && (X.body = r);
  requestObjects[z] = X;
  return X;
}
async function httpRequest(I, G, b) {
  httpResult = null;
  return new Promise(z => {
    $[I](G, async (O, C, X) => {
      try {
        if (O) {
          $.log(b + ": " + I + "请求失败");
          $.log(JSON.stringify(O));
          $.logErr(O);
        } else {
          if (safeGet(X)) {
            httpResult = JSON.parse(X);
            debug == 1 && $.log(httpResult);
          } else {
            const R = new URL(G.url);
            $.log(R.pathname + "发起" + I + "请求时，出现错误，请处理");
          }
        }
      } catch (i) {
        $.logErr(i, C);
      } finally {
        z(httpResult);
      }
    });
  });
}
async function selectChannel(I, G) {
  if (channels_status[I] == 0) {
    await getSign_(I, G);
  } else {
    await getSign(I, G);
  }
}
function getSign_(I, G) {
  return new Promise((r, z) => {
    function O(C) {
      let u = C.toString("utf8");
      requestSigns[I] = u;
      wss[I].removeListener("message", O);
      r(u);
    }
    wss[I].on("message", O);
    if (wss[I].readyState === 1) {
      const C = {
        method: appName,
        params: {}
      };
      C.params.content = G;
      C.params.appName = appName;
      C.params.uuid = userId;
      wss[I].send(JSON.stringify(C), X => {
        X && z(X);
      });
    } else {
      r(getSign(I, G));
      wss[I].removeListener("message", O);
    }
  });
}
function getSign(I, G) {
  return new Promise((r, z) => {
    const A = apiHost + "/sign/dyjsb/six",
      n = {
        content: G,
        appName: appName,
        uuid: userId
      };
    const C = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const X = {
      url: A,
      headers: C,
      body: JSON.stringify(n)
    };
    $.post(X, async (k, u, j) => {
      const P = j.replace(/\"/g, "");
      requestSigns[I] = P;
      r();
    });
  });
}
function sortUrlParams(I, G, b) {
  const z = url2obj(I);
  G.forEach(O => {
    delete z[O];
  });
  Object.assign(z, b);
  const A = Object.keys(z).sort(),
    n = A.map(O => O + "=" + z[O]).join("&");
  return n;
}
function url2obj(I) {
  I = I.replace(/\"/g, "");
  var b;
  var r = {};
  var z = I.slice(I.indexOf("?") + 1).split("&");
  for (var A = 0; A < z.length; A++) {
    b = z[A].split("=");
    r[b[0]] = b[1];
  }
  return r;
}
function updateURLParameter(I, G, b) {
  var r = new URL(I);
  r.searchParams.set(G, b);
  return r.toString();
}
function convertStringToJson(I) {
  const b = I.replace(/[{} ]/g, ""),
    r = b.split(",");
  const z = {};
  r.forEach(A => {
    const C = A.split(/=(.*)/),
      [X, k] = C;
    z[X] = k;
  });
  return z;
}
function getHostname(I) {
  let b = I.substr(I.indexOf("//") + 2);
  let r = b.substr(0, b.indexOf("/")),
    z = "",
    A = r.indexOf(":");
  if (A > 0) {
    z = r.substr(0, A);
  } else {
    z = r;
  }
  return z;
}
function calculateTimeDifference(G, b) {
  var X = new Date(G);
  var C = new Date(b);
  var O = C - X;
  var k = Math.floor(O / 1000);
  return k;
}
function cutString(G, b) {
  if (G.length * 2 <= b) {
    return G;
  }
  var A = 0,
    n = "";
  for (var O = 0; O < G.length; O++) {
    n = n + G.charAt(O);
    if (G.charCodeAt(O) > 128) {
      A = A + 2;
      if (A >= b) {
        return n.substring(0, n.length - 1) + "...";
      }
    } else {
      A = A + 1;
      if (A >= b) {
        return n.substring(0, n.length - 2) + "...";
      }
    }
  }
  return n;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(G) {
  try {
    if (typeof JSON.parse(G) == "object") {
      return true;
    }
  } catch (n) {
    console.log(n);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(I) {
  var b = Object.keys(I).map(function (r) {
    return encodeURIComponent(r) + "=" + encodeURIComponent(I[r]);
  }).join("&");
  return b;
}
function compileStr(I) {
  var b = String.fromCharCode(I.charCodeAt(0) + I.length);
  for (var r = 1; r < I.length; r++) {
    b += String.fromCharCode(I.charCodeAt(r) + I.charCodeAt(r - 1));
  }
  return escape(b);
}
function uncompileStr(I) {
  I = unescape(I);
  var b = String.fromCharCode(I.charCodeAt(0) - I.length);
  for (var r = 1; r < I.length; r++) {
    b += String.fromCharCode(I.charCodeAt(r) - b.charCodeAt(r - 1));
  }
  return b;
}
function randomNum(I, G) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * I + 1);
      break;
    case 2:
      return parseInt(Math.random() * (G - I + 1) + I);
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
  function G() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return G() + G() + "-" + G() + "-" + G() + "-" + G() + "-" + G() + G() + G();
}
function phone_num(I) {
  if (I.length == 11) {
    let b = I.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return b;
  } else {
    return I;
  }
}
function txt_api(I) {
  return new Promise((b, r) => {
    const A = "https://v1.hitokoto.cn/?c=e",
      n = {
        accept: "application/json"
      };
    const O = {
      url: A,
      headers: n
    };
    $.get(O, async (X, k, u) => {
      let j = JSON.parse(u),
        T = j.hitokoto;
      contents[I] = T + " " + T;
      b();
    });
  });
}
function getTime_8() {
  return new Promise((G, b) => {
    const z = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      A = {
        url: z
      };
    $.get(A, async (O, C, X) => {
      G(X);
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
async function sendMsg(I) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      $.isNode() ? await notify.sendNotify($.name, I) : $.msg($.name, "", I);
    } else {
      $.log(I);
    }
  }
}
async function wxPush(I, G, b) {
  return new Promise((z, A) => {
    const O = "https://wxpusher.zjiecode.com/api/send/message",
      C = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: G,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [b],
        verifyPay: false
      };
    const k = {
      "Content-Type": "application/json"
    };
    const u = {
      url: O,
      headers: k,
      body: JSON.stringify(C)
    };
    $.post(u, async (j, T, P) => {
      z();
    });
  });
}
function randomString(G, b) {
  b = b || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let A = "";
  for (let n = 0; n < G; n++) {
    let O = Math.floor(Math.random() * b.length);
    A += b.substring(O, O + 1);
  }
  return A;
}
function MD5_Encrypt(X) {
  function P(IZ, IS) {
    return IZ << IS | IZ >>> 32 - IS;
  }
  function R(IZ, IS) {
    var Iy, IK, Ic, Ia, IH;
    Ic = 2147483648 & IZ;
    Ia = 2147483648 & IS;
    Iy = 1073741824 & IZ;
    IK = 1073741824 & IS;
    IH = (1073741823 & IZ) + (1073741823 & IS);
    return Iy & IK ? 2147483648 ^ IH ^ Ic ^ Ia : Iy | IK ? 1073741824 & IH ? 3221225472 ^ IH ^ Ic ^ Ia : 1073741824 ^ IH ^ Ic ^ Ia : IH ^ Ic ^ Ia;
  }
  function Z(IZ, IS, Iy) {
    return IZ & IS | ~IZ & Iy;
  }
  function S(IZ, IS, Iy) {
    return IZ & Iy | IS & ~Iy;
  }
  function V(IZ, IS, Iy) {
    return IZ ^ IS ^ Iy;
  }
  function Q(IZ, IS, Iy) {
    return IS ^ (IZ | ~Iy);
  }
  function Y(IZ, IS, Iy, IK, Ic, Ia, IH) {
    IZ = R(IZ, R(R(Z(IS, Iy, IK), Ic), IH));
    return R(P(IZ, Ia), IS);
  }
  function W(IZ, IS, Iy, IK, Ic, Ia, IH) {
    IZ = R(IZ, R(R(S(IS, Iy, IK), Ic), IH));
    return R(P(IZ, Ia), IS);
  }
  function U(IZ, IS, Iy, IK, Ic, Ia, IH) {
    IZ = R(IZ, R(R(V(IS, Iy, IK), Ic), IH));
    return R(P(IZ, Ia), IS);
  }
  function I0(IZ, IS, Iy, IK, Ic, Ia, IH) {
    IZ = R(IZ, R(R(Q(IS, Iy, IK), Ic), IH));
    return R(P(IZ, Ia), IS);
  }
  function I1(IZ) {
    for (var IS, Iy = IZ.length, IK = Iy + 8, Ic = (IK - IK % 64) / 64, Ia = 16 * (Ic + 1), IH = new Array(Ia - 1), IL = 0, Io = 0; Iy > Io;) {
      IS = (Io - Io % 4) / 4;
      IL = Io % 4 * 8;
      IH[IS] = IH[IS] | IZ.charCodeAt(Io) << IL;
      Io++;
    }
    IS = (Io - Io % 4) / 4;
    IL = Io % 4 * 8;
    IH[IS] = IH[IS] | 128 << IL;
    IH[Ia - 2] = Iy << 3;
    IH[Ia - 1] = Iy >>> 29;
    return IH;
  }
  function I2(IZ) {
    var IS,
      Iy,
      IK = "",
      Ic = "";
    for (Iy = 0; 3 >= Iy; Iy++) {
      IS = IZ >>> 8 * Iy & 255;
      Ic = "0" + IS.toString(16);
      IK += Ic.substr(Ic.length - 2, 2);
    }
    return IK;
  }
  function I3(IZ) {
    IZ = IZ.replace(/\r\n/g, "\n");
    for (var Iy = "", IK = 0; IK < IZ.length; IK++) {
      var Ic = IZ.charCodeAt(IK);
      128 > Ic ? Iy += String.fromCharCode(Ic) : Ic > 127 && 2048 > Ic ? (Iy += String.fromCharCode(Ic >> 6 | 192), Iy += String.fromCharCode(63 & Ic | 128)) : (Iy += String.fromCharCode(Ic >> 12 | 224), Iy += String.fromCharCode(Ic >> 6 & 63 | 128), Iy += String.fromCharCode(63 & Ic | 128));
    }
    return Iy;
  }
  var I4,
    I5,
    I6,
    I7,
    I8,
    I9,
    II,
    IG,
    Ib,
    Ir = [],
    Iz = 7,
    IA = 12,
    In = 17,
    IO = 22,
    IC = 5,
    IX = 9,
    Ik = 14,
    Iu = 20,
    Ij = 4,
    IT = 11,
    IP = 16,
    IM = 23,
    IR = 6,
    It = 10,
    Il = 15,
    Ii = 21;
  for (X = I3(X), Ir = I1(X), I9 = 1732584193, II = 4023233417, IG = 2562383102, Ib = 271733878, I4 = 0; I4 < Ir.length; I4 += 16) {
    I5 = I9;
    I6 = II;
    I7 = IG;
    I8 = Ib;
    I9 = Y(I9, II, IG, Ib, Ir[I4 + 0], Iz, 3614090360);
    Ib = Y(Ib, I9, II, IG, Ir[I4 + 1], IA, 3905402710);
    IG = Y(IG, Ib, I9, II, Ir[I4 + 2], In, 606105819);
    II = Y(II, IG, Ib, I9, Ir[I4 + 3], IO, 3250441966);
    I9 = Y(I9, II, IG, Ib, Ir[I4 + 4], Iz, 4118548399);
    Ib = Y(Ib, I9, II, IG, Ir[I4 + 5], IA, 1200080426);
    IG = Y(IG, Ib, I9, II, Ir[I4 + 6], In, 2821735955);
    II = Y(II, IG, Ib, I9, Ir[I4 + 7], IO, 4249261313);
    I9 = Y(I9, II, IG, Ib, Ir[I4 + 8], Iz, 1770035416);
    Ib = Y(Ib, I9, II, IG, Ir[I4 + 9], IA, 2336552879);
    IG = Y(IG, Ib, I9, II, Ir[I4 + 10], In, 4294925233);
    II = Y(II, IG, Ib, I9, Ir[I4 + 11], IO, 2304563134);
    I9 = Y(I9, II, IG, Ib, Ir[I4 + 12], Iz, 1804603682);
    Ib = Y(Ib, I9, II, IG, Ir[I4 + 13], IA, 4254626195);
    IG = Y(IG, Ib, I9, II, Ir[I4 + 14], In, 2792965006);
    II = Y(II, IG, Ib, I9, Ir[I4 + 15], IO, 1236535329);
    I9 = W(I9, II, IG, Ib, Ir[I4 + 1], IC, 4129170786);
    Ib = W(Ib, I9, II, IG, Ir[I4 + 6], IX, 3225465664);
    IG = W(IG, Ib, I9, II, Ir[I4 + 11], Ik, 643717713);
    II = W(II, IG, Ib, I9, Ir[I4 + 0], Iu, 3921069994);
    I9 = W(I9, II, IG, Ib, Ir[I4 + 5], IC, 3593408605);
    Ib = W(Ib, I9, II, IG, Ir[I4 + 10], IX, 38016083);
    IG = W(IG, Ib, I9, II, Ir[I4 + 15], Ik, 3634488961);
    II = W(II, IG, Ib, I9, Ir[I4 + 4], Iu, 3889429448);
    I9 = W(I9, II, IG, Ib, Ir[I4 + 9], IC, 568446438);
    Ib = W(Ib, I9, II, IG, Ir[I4 + 14], IX, 3275163606);
    IG = W(IG, Ib, I9, II, Ir[I4 + 3], Ik, 4107603335);
    II = W(II, IG, Ib, I9, Ir[I4 + 8], Iu, 1163531501);
    I9 = W(I9, II, IG, Ib, Ir[I4 + 13], IC, 2850285829);
    Ib = W(Ib, I9, II, IG, Ir[I4 + 2], IX, 4243563512);
    IG = W(IG, Ib, I9, II, Ir[I4 + 7], Ik, 1735328473);
    II = W(II, IG, Ib, I9, Ir[I4 + 12], Iu, 2368359562);
    I9 = U(I9, II, IG, Ib, Ir[I4 + 5], Ij, 4294588738);
    Ib = U(Ib, I9, II, IG, Ir[I4 + 8], IT, 2272392833);
    IG = U(IG, Ib, I9, II, Ir[I4 + 11], IP, 1839030562);
    II = U(II, IG, Ib, I9, Ir[I4 + 14], IM, 4259657740);
    I9 = U(I9, II, IG, Ib, Ir[I4 + 1], Ij, 2763975236);
    Ib = U(Ib, I9, II, IG, Ir[I4 + 4], IT, 1272893353);
    IG = U(IG, Ib, I9, II, Ir[I4 + 7], IP, 4139469664);
    II = U(II, IG, Ib, I9, Ir[I4 + 10], IM, 3200236656);
    I9 = U(I9, II, IG, Ib, Ir[I4 + 13], Ij, 681279174);
    Ib = U(Ib, I9, II, IG, Ir[I4 + 0], IT, 3936430074);
    IG = U(IG, Ib, I9, II, Ir[I4 + 3], IP, 3572445317);
    II = U(II, IG, Ib, I9, Ir[I4 + 6], IM, 76029189);
    I9 = U(I9, II, IG, Ib, Ir[I4 + 9], Ij, 3654602809);
    Ib = U(Ib, I9, II, IG, Ir[I4 + 12], IT, 3873151461);
    IG = U(IG, Ib, I9, II, Ir[I4 + 15], IP, 530742520);
    II = U(II, IG, Ib, I9, Ir[I4 + 2], IM, 3299628645);
    I9 = I0(I9, II, IG, Ib, Ir[I4 + 0], IR, 4096336452);
    Ib = I0(Ib, I9, II, IG, Ir[I4 + 7], It, 1126891415);
    IG = I0(IG, Ib, I9, II, Ir[I4 + 14], Il, 2878612391);
    II = I0(II, IG, Ib, I9, Ir[I4 + 5], Ii, 4237533241);
    I9 = I0(I9, II, IG, Ib, Ir[I4 + 12], IR, 1700485571);
    Ib = I0(Ib, I9, II, IG, Ir[I4 + 3], It, 2399980690);
    IG = I0(IG, Ib, I9, II, Ir[I4 + 10], Il, 4293915773);
    II = I0(II, IG, Ib, I9, Ir[I4 + 1], Ii, 2240044497);
    I9 = I0(I9, II, IG, Ib, Ir[I4 + 8], IR, 1873313359);
    Ib = I0(Ib, I9, II, IG, Ir[I4 + 15], It, 4264355552);
    IG = I0(IG, Ib, I9, II, Ir[I4 + 6], Il, 2734768916);
    II = I0(II, IG, Ib, I9, Ir[I4 + 13], Ii, 1309151649);
    I9 = I0(I9, II, IG, Ib, Ir[I4 + 4], IR, 4149444226);
    Ib = I0(Ib, I9, II, IG, Ir[I4 + 11], It, 3174756917);
    IG = I0(IG, Ib, I9, II, Ir[I4 + 2], Il, 718787259);
    II = I0(II, IG, Ib, I9, Ir[I4 + 9], Ii, 3951481745);
    I9 = R(I9, I5);
    II = R(II, I6);
    IG = R(IG, I7);
    Ib = R(Ib, I8);
  }
  var Id = I2(I9) + I2(II) + I2(IG) + I2(Ib);
  return Id.toLowerCase();
}
function SHA256(I) {
  var b = 8;
  var r = 0;
  function z(l, i) {
    var d = (l & 65535) + (i & 65535),
      Z = (l >> 16) + (i >> 16) + (d >> 16);
    return Z << 16 | d & 65535;
  }
  function A(l, i) {
    return l >>> i | l << 32 - i;
  }
  function n(l, i) {
    return l >>> i;
  }
  function O(l, i, d) {
    return l & i ^ ~l & d;
  }
  function C(l, i, d) {
    return l & i ^ l & d ^ i & d;
  }
  function X(l) {
    return A(l, 2) ^ A(l, 13) ^ A(l, 22);
  }
  function k(l) {
    return A(l, 6) ^ A(l, 11) ^ A(l, 25);
  }
  function u(l) {
    return A(l, 7) ^ A(l, 18) ^ n(l, 3);
  }
  function j(l) {
    return A(l, 17) ^ A(l, 19) ^ n(l, 10);
  }
  function T(Z, y) {
    var L = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      o = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      B = new Array(64),
      v,
      V,
      x,
      p,
      D,
      w,
      F,
      Q,
      q,
      Y,
      J,
      N;
    Z[y >> 5] |= 128 << 24 - y % 32;
    Z[(y + 64 >> 9 << 4) + 15] = y;
    for (var q = 0; q < Z.length; q += 16) {
      v = o[0];
      V = o[1];
      x = o[2];
      p = o[3];
      D = o[4];
      w = o[5];
      F = o[6];
      Q = o[7];
      for (var Y = 0; Y < 64; Y++) {
        if (Y < 16) {
          B[Y] = Z[Y + q];
        } else {
          B[Y] = z(z(z(j(B[Y - 2]), B[Y - 7]), u(B[Y - 15])), B[Y - 16]);
        }
        J = z(z(z(z(Q, k(D)), O(D, w, F)), L[Y]), B[Y]);
        N = z(X(v), C(v, V, x));
        Q = F;
        F = w;
        w = D;
        D = z(p, J);
        p = x;
        x = V;
        V = v;
        v = z(J, N);
      }
      o[0] = z(v, o[0]);
      o[1] = z(V, o[1]);
      o[2] = z(x, o[2]);
      o[3] = z(p, o[3]);
      o[4] = z(D, o[4]);
      o[5] = z(w, o[5]);
      o[6] = z(F, o[6]);
      o[7] = z(Q, o[7]);
    }
    return o;
  }
  function P(l) {
    var d = Array(),
      Z = (1 << b) - 1;
    for (var y = 0; y < l.length * b; y += b) {
      d[y >> 5] |= (l.charCodeAt(y / b) & Z) << 24 - y % 32;
    }
    return d;
  }
  function M(l) {
    l = l.replace(/\r\n/g, "\n");
    var d = "";
    for (var Z = 0; Z < l.length; Z++) {
      var y = l.charCodeAt(Z);
      if (y < 128) {
        d += String.fromCharCode(y);
      } else {
        if (y > 127 && y < 2048) {
          d += String.fromCharCode(y >> 6 | 192);
          d += String.fromCharCode(y & 63 | 128);
        } else {
          d += String.fromCharCode(y >> 12 | 224);
          d += String.fromCharCode(y >> 6 & 63 | 128);
          d += String.fromCharCode(y & 63 | 128);
        }
      }
    }
    return d;
  }
  function t(l) {
    var d = r ? "0123456789ABCDEF" : "0123456789abcdef",
      Z = "";
    for (var y = 0; y < l.length * 4; y++) {
      Z += d.charAt(l[y >> 2] >> (3 - y % 4) * 8 + 4 & 15) + d.charAt(l[y >> 2] >> (3 - y % 4) * 8 & 15);
    }
    return Z;
  }
  I = M(I);
  return t(T(P(I), I.length * b));
}
function SHA1(I) {
  function b(H, L) {
    var o = H << L | H >>> 32 - L;
    return o;
  }
  function r(H) {
    var L = "",
      o,
      v,
      V;
    for (o = 0; o <= 6; o += 2) {
      v = H >>> o * 4 + 4 & 15;
      V = H >>> o * 4 & 15;
      L += v.toString(16) + V.toString(16);
    }
    return L;
  }
  function z(H) {
    var L = "",
      o,
      V;
    for (o = 7; o >= 0; o--) {
      V = H >>> o * 4 & 15;
      L += V.toString(16);
    }
    return L;
  }
  function n(H) {
    H = H.replace(/\r\n/g, "\n");
    var o = "";
    for (var v = 0; v < H.length; v++) {
      var V = H.charCodeAt(v);
      if (V < 128) {
        o += String.fromCharCode(V);
      } else {
        V > 127 && V < 2048 ? (o += String.fromCharCode(V >> 6 | 192), o += String.fromCharCode(V & 63 | 128)) : (o += String.fromCharCode(V >> 12 | 224), o += String.fromCharCode(V >> 6 & 63 | 128), o += String.fromCharCode(V & 63 | 128));
      }
    }
    return o;
  }
  var O,
    X,
    k,
    u = new Array(80),
    T = 1732584193;
  var P = 4023233417;
  var M = 2562383102,
    R = 271733878;
  var t = 3285377520,
    l,
    d,
    Z,
    S,
    y,
    K;
  I = n(I);
  var c = I.length,
    a = new Array();
  for (X = 0; X < c - 3; X += 4) {
    k = I.charCodeAt(X) << 24 | I.charCodeAt(X + 1 < 10 ? "0" + (X + 1) : X + 1) << 16 | I.charCodeAt(X + 2) << 8 | I.charCodeAt(X + 3);
    a.push(k);
  }
  switch (c % 4) {
    case 0:
      X = 2147483648;
      break;
    case 1:
      X = I.charCodeAt(c - 1) << 24 | 8388608;
      break;
    case 2:
      X = I.charCodeAt(c - 2) << 24 | I.charCodeAt(c - 1) << 16 | 32768;
      break;
    case 3:
      X = I.charCodeAt(c - 3) << 24 | I.charCodeAt(c - 2) << 16 | I.charCodeAt(c - 1) << 8 | 128;
      break;
  }
  a.push(X);
  while (a.length % 16 != 14) {
    a.push(0);
  }
  a.push(c >>> 29);
  a.push(c << 3 & 4294967295);
  for (O = 0; O < a.length; O += 16) {
    for (X = 0; X < 16; X++) {
      u[X] = a[O + X];
    }
    for (X = 16; X <= 79; X++) {
      u[X] = b(u[X - 3] ^ u[X - 8] ^ u[X - 14] ^ u[X - 16], 1);
    }
    l = T;
    d = P;
    Z = M;
    S = R;
    y = t;
    for (X = 0; X <= 19; X++) {
      K = b(l, 5) + (d & Z | ~d & S) + y + u[X] + 1518500249 & 4294967295;
      y = S;
      S = Z;
      Z = b(d, 30);
      d = l;
      l = K;
    }
    for (X = 20; X <= 39; X++) {
      K = b(l, 5) + (d ^ Z ^ S) + y + u[X] + 1859775393 & 4294967295;
      y = S;
      S = Z;
      Z = b(d, 30);
      d = l;
      l = K;
    }
    for (X = 40; X <= 59; X++) {
      K = b(l, 5) + (d & Z | d & S | Z & S) + y + u[X] + 2400959708 & 4294967295;
      y = S;
      S = Z;
      Z = b(d, 30);
      d = l;
      l = K;
    }
    for (X = 60; X <= 79; X++) {
      K = b(l, 5) + (d ^ Z ^ S) + y + u[X] + 3395469782 & 4294967295;
      y = S;
      S = Z;
      Z = b(d, 30);
      d = l;
      l = K;
    }
    T = T + l & 4294967295;
    P = P + d & 4294967295;
    M = M + Z & 4294967295;
    R = R + S & 4294967295;
    t = t + y & 4294967295;
  }
  var K = z(T) + z(P) + z(M) + z(R) + z(t);
  return K.toLowerCase();
}
function Base64() {
  var G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (b) {
    var u = "";
    var z, A, n, O, C, X, k;
    var j = 0;
    b = utf8Encode(b);
    while (j < b.length) {
      z = b.charCodeAt(j++);
      A = b.charCodeAt(j++);
      n = b.charCodeAt(j++);
      O = z >> 2;
      C = (z & 3) << 4 | A >> 4;
      X = (A & 15) << 2 | n >> 6;
      k = n & 63;
      if (isNaN(A)) {
        X = k = 64;
      } else {
        isNaN(n) && (k = 64);
      }
      u = u + G.charAt(O) + G.charAt(C) + G.charAt(X) + G.charAt(k);
    }
    return u;
  };
  this.decode = function (b) {
    var j = "";
    var z, A, n;
    var C, X, k, u;
    var O = 0;
    b = b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (O < b.length) {
      C = G.indexOf(b.charAt(O++));
      X = G.indexOf(b.charAt(O++));
      k = G.indexOf(b.charAt(O++));
      u = G.indexOf(b.charAt(O++));
      z = C << 2 | X >> 4;
      A = (X & 15) << 4 | k >> 2;
      n = (k & 3) << 6 | u;
      j = j + String.fromCharCode(z);
      k !== 64 && (j = j + String.fromCharCode(A));
      u !== 64 && (j = j + String.fromCharCode(n));
    }
    j = utf8Decode(j);
    return j;
  };
  utf8Encode = function (b) {
    b = b.replace(/\r\n/g, "\n");
    var z = "";
    for (var A = 0; A < b.length; A++) {
      var O = b.charCodeAt(A);
      if (O < 128) {
        z += String.fromCharCode(O);
      } else {
        if (O > 127 && O < 2048) {
          z += String.fromCharCode(O >> 6 | 192);
          z += String.fromCharCode(O & 63 | 128);
        } else {
          z += String.fromCharCode(O >> 12 | 224);
          z += String.fromCharCode(O >> 6 & 63 | 128);
          z += String.fromCharCode(O & 63 | 128);
        }
      }
    }
    return z;
  };
  utf8Decode = function (b) {
    var n = "";
    var A = 0;
    var z = 0;
    var O = 0;
    var C = 0;
    while (A < b.length) {
      z = b.charCodeAt(A);
      if (z < 128) {
        n += String.fromCharCode(z);
        A++;
      } else {
        if (z > 191 && z < 224) {
          O = b.charCodeAt(A + 1 < 10 ? "0" + (A + 1) : A + 1);
          n += String.fromCharCode((z & 31) << 6 | O & 63);
          A += 2;
        } else {
          O = b.charCodeAt(A + 1 < 10 ? "0" + (A + 1) : A + 1);
          C = b.charCodeAt(A + 2);
          n += String.fromCharCode((z & 15) << 12 | (O & 63) << 6 | C & 63);
          A += 3;
        }
      }
    }
    return n;
  };
}
function Env(I, G) {
  class r {
    constructor(z) {
      this.env = z;
    }
    send(z, A = "GET") {
      z = typeof z === "string" ? {
        url: z
      } : z;
      let C = this.get;
      if (A === "POST") {
        C = this.post;
      }
      return new Promise((k, u) => {
        C.call(this, z, (P, M, R) => {
          if (P) {
            u(P);
          } else {
            k(M);
          }
        });
      });
    }
    get(z) {
      return this.send.call(this.env, z);
    }
    post(z) {
      return this.send.call(this.env, z, "POST");
    }
  }
  return new class {
    constructor(z, A) {
      this.name = z;
      this.http = new r(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, A);
      const C = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(C);
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
    toObj(z, A = null) {
      try {
        return JSON.parse(z);
      } catch {
        return A;
      }
    }
    toStr(z, A = null) {
      try {
        return JSON.stringify(z);
      } catch {
        return A;
      }
    }
    getjson(z, A) {
      let n = A;
      const O = this.getdata(z);
      if (O) {
        try {
          n = JSON.parse(this.getdata(z));
        } catch {}
      }
      return n;
    }
    setjson(z, A) {
      try {
        return this.setdata(JSON.stringify(z), A);
      } catch {
        return false;
      }
    }
    getScript(z) {
      return new Promise(n => {
        const C = {
          url: z
        };
        this.get(C, (X, k, u) => n(u));
      });
    }
    runScript(z, A) {
      return new Promise(n => {
        let C = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        C = C ? C.replace(/\n/g, "").trim() : C;
        let X = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        X = X ? X * 1 : 20;
        X = A && A.timeout ? A.timeout : X;
        const [k, u] = C.split("@"),
          j = {
            script_text: z,
            mock_type: "cron",
            timeout: X
          };
        const T = {
          "X-Key": k,
          Accept: "*/*"
        };
        const P = {
          url: "http: //" + u + "/v1/scripting/evaluate",
          body: j,
          headers: T
        };
        this.post(P, (R, t, l) => n(l));
      }).catch(n => this.logErr(n));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const A = this.path.resolve(this.dataFile),
          n = this.path.resolve(process.cwd(), this.dataFile),
          O = this.fs.existsSync(A),
          C = !O && this.fs.existsSync(n);
        if (O || C) {
          const X = O ? A : n;
          try {
            return JSON.parse(this.fs.readFileSync(X));
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
        const n = this.path.resolve(this.dataFile),
          O = this.path.resolve(process.cwd(), this.dataFile),
          C = this.fs.existsSync(n),
          X = !C && this.fs.existsSync(O),
          k = JSON.stringify(this.data);
        if (C) {
          this.fs.writeFileSync(n, k);
        } else {
          if (X) {
            this.fs.writeFileSync(O, k);
          } else {
            this.fs.writeFileSync(n, k);
          }
        }
      }
    }
    lodash_get(z, A, n = undefined) {
      const C = A.replace(/[(d+)]/g, ".$1").split(".");
      let X = z;
      for (const k of C) {
        X = Object(X)[k];
        if (X === undefined) {
          return n;
        }
      }
      return X;
    }
    lodash_set(z, A, n) {
      if (Object(z) !== z) {
        return z;
      }
      if (!Array.isArray(A)) {
        A = A.toString().match(/[^.[]]+/g) || [];
      }
      A.slice(0, -1).reduce((C, X, k) => Object(C[X]) === C[X] ? C[X] : C[X] = Math.abs(A[k + 1 < 10 ? "0" + (k + 1) : k + 1]) >> 0 === +A[k + 1 < 10 ? "0" + (k + 1) : k + 1] ? [] : {}, z)[A[A.length - 1]] = n;
      return z;
    }
    getdata(z) {
      let n = this.getval(z);
      if (/^@/.test(z)) {
        const [, O, C] = /^@(.*?).(.*?)$/.exec(z),
          X = O ? this.getval(O) : "";
        if (X) {
          try {
            const k = JSON.parse(X);
            n = k ? this.lodash_get(k, C, "") : n;
          } catch (j) {
            n = "";
          }
        }
      }
      return n;
    }
    setdata(z, A) {
      let O = false;
      if (/^@/.test(A)) {
        const [, C, X] = /^@(.*?).(.*?)$/.exec(A),
          k = this.getval(C),
          u = C ? k === "null" ? null : k || "{}" : "{}";
        try {
          const T = JSON.parse(u);
          this.lodash_set(T, X, z);
          O = this.setval(JSON.stringify(T), C);
        } catch (P) {
          const R = {};
          this.lodash_set(R, X, z);
          O = this.setval(JSON.stringify(R), C);
        }
      } else {
        O = this.setval(z, A);
      }
      return O;
    }
    getval(z) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(z);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(z);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[z];
          } else {
            return this.data && this.data[z] || null;
          }
        }
      }
    }
    setval(z, A) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(z, A);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(z, A);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[A] = z;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[A] || null;
          }
        }
      }
    }
    initGotEnv(z) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      z && (z.headers = z.headers ? z.headers : {}, undefined === z.headers.Cookie && undefined === z.cookieJar && (z.cookieJar = this.ckjar));
    }
    get(z, A = () => {}) {
      z.headers && (delete z.headers["Content-Type"], delete z.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          z.headers = z.headers || {};
          const k = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(z.headers, k);
        }
        $httpClient.get(z, (u, j, T) => {
          if (!u && j) {
            j.body = T;
            j.statusCode = j.status;
          }
          A(u, j, T);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            z.opts = z.opts || {};
            const P = {
              hints: false
            };
            Object.assign(z.opts, P);
          }
          $task.fetch(z).then(M => {
            const {
                statusCode: R,
                statusCode: t,
                headers: l,
                body: i
              } = M,
              d = {
                status: R,
                statusCode: t,
                headers: l,
                body: i
              };
            A(null, d, i);
          }, M => A(M));
        } else {
          if (this.isNode()) {
            this.initGotEnv(z);
            this.got(z).on("redirect", (M, R) => {
              try {
                if (M.headers["set-cookie"]) {
                  const d = M.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (d) {
                    this.ckjar.setCookieSync(d, null);
                  }
                  R.cookieJar = this.ckjar;
                }
              } catch (y) {
                this.logErr(y);
              }
            }).then(M => {
              const {
                  statusCode: R,
                  statusCode: t,
                  headers: l,
                  body: i
                } = M,
                d = {
                  status: R,
                  statusCode: t,
                  headers: l,
                  body: i
                };
              A(null, d, i);
            }, M => {
              const {
                message: R,
                response: t
              } = M;
              A(R, t, t && t.body);
            });
          }
        }
      }
    }
    post(z, A = () => {}) {
      const O = z.method ? z.method.toLocaleLowerCase() : "post";
      if (z.body && z.headers && !z.headers["Content-Type"]) {
        z.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (z.headers) {
        delete z.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          z.headers = z.headers || {};
          const X = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(z.headers, X);
        }
        $httpClient[O](z, (u, j, T) => {
          !u && j && (j.body = T, j.statusCode = j.status);
          A(u, j, T);
        });
      } else {
        if (this.isQuanX()) {
          z.method = O;
          if (this.isNeedRewrite) {
            z.opts = z.opts || {};
            const j = {
              hints: false
            };
            Object.assign(z.opts, j);
          }
          $task.fetch(z).then(P => {
            const {
                statusCode: R,
                statusCode: t,
                headers: l,
                body: i
              } = P,
              d = {
                status: R,
                statusCode: t,
                headers: l,
                body: i
              };
            A(null, d, i);
          }, P => A(P));
        } else {
          if (this.isNode()) {
            this.initGotEnv(z);
            const {
              url: R,
              ...t
            } = z;
            this.got[O](R, t).then(l => {
              const {
                  statusCode: d,
                  statusCode: Z,
                  headers: S,
                  body: y
                } = l,
                K = {
                  status: d,
                  statusCode: Z,
                  headers: S,
                  body: y
                };
              A(null, K, y);
            }, l => {
              const {
                message: d,
                response: Z
              } = l;
              A(d, Z, Z && Z.body);
            });
          }
        }
      }
    }
    put(z, A = () => {}) {
      const O = z.method ? z.method.toLocaleLowerCase() : "put";
      if (z.body && z.headers && !z.headers["Content-Type"]) {
        z.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (z.headers) {
        delete z.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          z.headers = z.headers || {};
          const X = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(z.headers, X);
        }
        $httpClient[O](z, (u, j, T) => {
          if (!u && j) {
            j.body = T;
            j.statusCode = j.status;
          }
          A(u, j, T);
        });
      } else {
        if (this.isQuanX()) {
          z.method = O;
          if (this.isNeedRewrite) {
            z.opts = z.opts || {};
            const T = {
              hints: false
            };
            Object.assign(z.opts, T);
          }
          $task.fetch(z).then(M => {
            const {
                statusCode: t,
                statusCode: l,
                headers: i,
                body: d
              } = M,
              Z = {
                status: t,
                statusCode: l,
                headers: i,
                body: d
              };
            A(null, Z, d);
          }, M => A(M));
        } else {
          if (this.isNode()) {
            this.initGotEnv(z);
            const {
              url: M,
              ...R
            } = z;
            this.got[O](M, R).then(t => {
              const {
                  statusCode: i,
                  statusCode: d,
                  headers: Z,
                  body: S
                } = t,
                y = {
                  status: i,
                  statusCode: d,
                  headers: Z,
                  body: S
                };
              A(null, y, S);
            }, t => {
              const {
                message: l,
                response: i
              } = t;
              A(l, i, i && i.body);
            });
          }
        }
      }
    }
    time(z, A = null) {
      const n = A ? new Date(A) : new Date();
      let O = {
        "M+": n.getMonth() + 1,
        "d+": n.getDate(),
        "H+": n.getHours(),
        "m+": n.getMinutes(),
        "s+": n.getSeconds(),
        "q+": Math.floor((n.getMonth() + 3) / 3),
        S: n.getMilliseconds()
      };
      if (/(y+)/.test(z)) {
        z = z.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let C in O) if (new RegExp("(" + C + ")").test(z)) {
        z = z.replace(RegExp.$1, RegExp.$1.length == 1 ? O[C] : ("00" + O[C]).substr(("" + O[C]).length));
      }
      return z;
    }
    msg(z = I, A = "", n = "", O) {
      const C = X => {
        if (!X) {
          return X;
        }
        if (typeof X === "string") {
          if (this.isLoon()) {
            return X;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": X
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: X
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof X === "object") {
            if (this.isLoon()) {
              let k = X.openUrl || X.url || X["open-url"],
                u = X.mediaUrl || X["media-url"];
              const j = {
                openUrl: k,
                mediaUrl: u
              };
              return j;
            } else {
              if (this.isQuanX()) {
                let T = X["open-url"] || X.url || X.openUrl,
                  P = X["media-url"] || X.mediaUrl;
                const M = {
                  "open-url": T,
                  "media-url": P
                };
                return M;
              } else {
                if (this.isSurge()) {
                  let R = X.url || X.openUrl || X["open-url"];
                  const t = {
                    url: R
                  };
                  return t;
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
          $notification.post(z, A, n, C(O));
        } else {
          this.isQuanX() && $notify(z, A, n, C(O));
        }
      }
      if (!this.isMuteLog) {
        let X = ["", "==============📣系统通知📣=============="];
        X.push(z);
        A ? X.push(A) : "";
        n ? X.push(n) : "";
        console.log(X.join("\n"));
        this.logs = this.logs.concat(X);
      }
    }
    log(...z) {
      z.length > 0 && (this.logs = [...this.logs, ...z]);
      console.log(z.join(this.logSeparator));
    }
    logErr(z, A) {
      const n = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !n ? this.log("", "❗️" + this.name + ", 错误!", z) : this.log("", "❗️" + this.name + ", 错误!", z.stack);
    }
    wait(z) {
      return new Promise(A => setTimeout(A, z));
    }
    done(z = {}) {
      const A = new Date().getTime();
      const n = (A - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + n + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(z);
    }
  }(I, G);
}