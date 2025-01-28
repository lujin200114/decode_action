//Tue Jan 28 2025 07:22:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("抖音商城"),
  version = "V1.0.3",
  appName = "dyscapp";
let dyscapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet dyscAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    dysc: dyscAPP\n}\n\nmodule.exports = APPS", S => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("dyscactivecode") || 0,
  dyscuserck = $.getval("dyscuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
var hour = "",
  minute = "";
let sendlogs = "",
  dysclogs = [],
  accounts = [],
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  httpResult = "",
  signSwitchs = [],
  adSwitchs = [],
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
  process.env.DYSCAPP ? dyscapp = JSON.parse(process.env.DYSCAPP) : dyscapp = COOKIES.DYSC;
  userId = process.env.TGUSERID;
  activeCode = process.env.DYSCACTIVECODE;
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
    if (!dyscapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let c = false;
    const s = apiHost.split("&"),
      G = s.length;
    for (let A = 0; A < G; A++) {
      if ($.isNode()) {
        c = await checkAddress("" + s[A], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          c = await httpClientRequest("" + s[A], 2500);
        } else {
          c = await fetchRequest("" + s[A], 2500);
        }
      }
      if (c == true) {
        apiHost = s[A];
        $.log("📢 接口" + (A + 1) + "[" + s[A] + "]服务器接口正常! 🎉");
        break;
      }
      if (A == G - 1 && c == false) {
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
        z = new Date().getTime();
      if (z > w) {
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
        let l = new Date(vipDate).getTime(),
          p = new Date().getTime();
        if (p > l) {
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
    if (dyscapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (dyscapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + dyscapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + dyscapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (dyscapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + dyscapp.length + "个账号");
    let J = [];
    for (let O = 0; O < dyscapp.length; O++) {
      J.push(runMultiTasks(O));
      dysclogs[O] = "";
      signSwitchs[O] = 1;
      adSwitchs[O] = true;
      if ($.isNode()) {
        channels_status[O] = 0;
        await init_ws(O);
      } else {
        channels_status[O] = 1;
      }
    }
    await Promise.allSettled(J).then(P => {
      $.log("日志整理功能如下：");
      $.log("---------------日志整理开始--------------");
      for (let b = 0; b < dyscapp.length; b++) {
        $.log(dysclogs[b]);
        sendlogs += dysclogs[b];
      }
      $.log("---------------日志整理结束--------------");
      sendMsg(sendlogs);
    });
  }
})().catch(S => $.logErr(S)).finally(() => $.done());
async function runMultiTasks(S) {
  return new Promise((c, s) => {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 开始执行 working......");
    runSubTask(c, S);
  });
}
async function init_ws(S) {
  if ($.isNode()) {
    if (reconectCounts[S] > 0) {
      $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[S] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[S].on("open", function s() {
      $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 签名通道已连接");
    });
    wss[S].on("close", function G() {
      $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[S].on("error", function J() {
      $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[S] = 1;
      reconectCounts[S]++;
      reconectCounts[S] <= 3 && init_ws(S);
    });
  }
}
async function runSubTask(S, j) {
  await $.wait(3000, 5000);
  if (dyscapp[j].capture) {
    if (dyscapp[j].interface && dyscapp[j].interface.split("$").length > 0) {
      let s = dyscapp[j].interface.split("$").length > 1 ? dyscapp[j].interface.split("$")[1] : dyscapp[j].interface;
      await getCapture(j, s);
      $.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。");
      dysclogs[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。\n";
    } else {
      $.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 请设置接口地址再运行脚本！");
    }
    if ($.isNode()) {
      await wss[j].close();
    }
  } else {
    dyscapp[j].url = dyscapp[j].url.replace(/\+/g, "");
    await userInfo(j);
    await withdrarwInfo(j);
    await taskPage(j);
    if ($.isNode()) {
      await wss[j].close();
    }
    await runComplete(appName, userId);
  }
  S();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const c = $request.body;
    let s = dyscuserck - 1;
    if (dyscapp[s]) {
      dyscapp[s].token_body = c;
    } else {
      const J = {
        token_body: c
      };
      dyscapp[s] = J;
    }
    $.setdata(JSON.stringify(dyscapp, null, 2), "dyscapp");
    $.msg($.name, "快音账号" + (s + 1) + "Token获取成功！🎉");
  }
}
function getReqUrl(S) {
  let c = ts13(),
    s = ts10(),
    G = url2obj(dyscapp[S].url);
  G.ts = s;
  G._rticket = c;
  dyscapp[S].iid = G.iid;
  dyscapp[S].did = G.device_id;
  G.version_code = "280705";
  G.version_name = "28.7.5";
  G.manifest_version_code = "280705";
  G.update_version_code = "28759900";
  G.device_platform = "android";
  delete G.task_meta_id;
  delete G.task_item_id;
  delete G.biz_id;
  return jsonToUrl(G);
}
async function getSixGodHeader(S, j, c) {
  let G = "common";
  dyscapp[S].interface && (G = dyscapp[S].interface);
  let J = dyscapp[S].iid,
    a = dyscapp[S].did,
    A = "",
    F = [];
  for (let L in c) {
    if (L == "Content-Type" || L == "Host") {
      continue;
    }
    F.push(L.toLowerCase() + "=[" + c[L] + "]");
  }
  A += F.join(",");
  A += "";
  let D = a + "@" + J + "@" + encodeURIComponent(j) + "@" + encodeURIComponent(A) + "@" + G;
  await selectChannel(S, D);
}
async function userInfo(S) {
  let c = getReqUrl(S);
  const s = "https://api5-normal-lq.amemv.com/aweme/v1/user/profile/self/?" + c;
  let G = "";
  await getReqObject(s, G, S);
  if (signSwitchs[S] == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[S], printCaller());
  let J = httpResult;
  if (J != null && J.status_code == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 用户名=> " + J.user.bind_phone);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 用户名=> " + J.user.bind_phone + "\n";
    accounts[S] = J.user.bind_phone;
  } else {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 用户信息=> " + J.err_tips);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 用户信息=> " + J.err_tips + "\n";
  }
}
async function taskPage(s) {
  let J = getReqUrl(s);
  const a = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/common/v1/resource_package?referral&external_delivery&scenes=task_center_page&fe_version=10000473&" + J;
  let A = "";
  await getReqObject(a, A, s);
  if (signSwitchs[s] == 0) {
    $.log("[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[s], printCaller());
  let F = httpResult;
  if (F != null && F.code == 0) {
    $.log("[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 金币=> " + F.data.resource_package.token_coins_in_account.token_coins_in_account.num);
    dysclogs[s] += "[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 金币=> " + F.data.resource_package.token_coins_in_account.token_coins_in_account.num + "\n";
    $.log("[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 余额=> " + F.data.resource_package.token_coins_in_account.token_coins_in_account.rmb_credit / 100 + "元");
    dysclogs[s] += "[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 余额=> " + F.data.resource_package.token_coins_in_account.token_coins_in_account.rmb_credit / 100 + "元\n";
    let T = F.data.resource_package.task_panel.task_panel.tasks[0].task_list,
      L = T.find(C => C.key == "new_user_give_coin"),
      v = T.find(C => C.key == "continuous_sign_in_earn_coin"),
      Q = T.find(C => C.key == "best_buy_visit_earn_coin"),
      m = T.find(C => C.key == "second_kill_visit_earn_coin"),
      r = T.find(C => C.key == "open_treasure_earn_coin"),
      w = T.find(C => C.key == "ad_video_visit_earn_coin"),
      z = T.find(C => C.key == "feed_video_visit_earn_coin"),
      g = T.find(C => C.key == "mall_visit_earn_coin"),
      q = T.find(C => C.key == "coin_draw_lottery"),
      t = T.find(C => C.key == "new_prd_visit_earn_coin"),
      R = T.find(C => C.key == "product_search_earn_coin_v2");
    if (t && t.cur_status.task_status_code == 1) {
      let C = t.finish_action.report_wk.queries,
        f = t.name;
      await complete(s, C, f);
    }
    if (R && R.cur_status.task_status_code == 1) {
      let l = R.finish_action.report_wk.queries,
        p = R.name;
      await complete(s, l, p);
    }
    if (L && L.cur_status.task_status_code == 1) {
      let e = L.finish_action.report_wk.queries,
        o = L.name;
      await complete(s, e, o);
    }
    if (g && g.cur_status.task_status_code == 1) {
      let K = g.finish_action.report_wk.queries,
        d = g.name;
      await complete(s, K, d);
    }
    if (Q && Q.cur_status.task_status_code == 1) {
      let E = Q.finish_action.report_wk.queries,
        V = Q.name;
      await complete(s, E, V);
    }
    if (m && m.cur_status.task_status_code == 1) {
      let u = m.finish_action.report_wk.queries,
        W = m.name;
      await complete(s, u, W);
    }
    if (q) {
      if (q.cur_status.task_status_code == 1) {
        let h = q.finish_action.report_wk.queries,
          Y = q.name;
        await draw(s, h, Y);
      } else {
        if (q.cur_status.task_status_code == 3 && q.reward.reward_status == 2) {
          let k = q.finish_action.reward_wk.queries,
            X = q.name;
          await receiveDrawReward(s, k, X);
        }
      }
    }
    if (v && v.cur_status.task_status_code == 1) {
      let b = v.finish_action.report_wk.queries,
        H = v.name;
      await complete(s, b, H);
      const M = {
        biz: "5",
        task_item_id: "7401105022635704603",
        task_meta_id: "7348804947191922971"
      };
      for (let S1 = 0; S1 < 8 && adSwitchs[s]; S1++) {
        await $.wait(randomNum(5000, 10000));
        await complete(s, M, "签到追加广告", S1 + 1);
      }
    }
    if (r && r.cur_status.text == "收金币" && r.cur_status.task_status_code == 1 && r.cur_status.mission_status != 2) {
      let S4 = r.finish_action.report_wk.queries,
        S5 = r.name,
        S6 = r.task_completion_info;
      if (S6.user_left_completions_times > 0) {
        await complete(s, S4, S5);
      }
      const S7 = {
        biz: "5",
        task_item_id: "7401105364055785755",
        task_meta_id: "7348804947191922971"
      };
      for (let SS = 0; SS < 10 && adSwitchs[s]; SS++) {
        await $.wait(randomNum(5000, 10000));
        await complete(s, S7, "宝箱追加广告", SS + 1);
      }
    }
    if (w && w.cur_status.task_status_code == 1 && w.cur_status.mission_status != 2) {
      let SG = w.finish_action.report_wk.queries,
        SJ = w.name,
        Sa = w.task_completion_info;
      if (Sa.user_left_completions_times > 0) {
        await complete(s, SG, SJ);
      }
      const SA = {
        biz: "5",
        task_item_id: "7401105364055785755",
        task_meta_id: "7348804947191922971"
      };
      for (let ST = 0; ST < 10 && adSwitchs[s]; ST++) {
        await $.wait(randomNum(5000, 10000));
        await complete(s, SA, "广告追加广告", ST + 1);
      }
    }
    if (z && z.cur_status.task_status_code == 1 && z.cur_status.mission_status != 2) {
      let Sv = z.finish_action.report_wk.queries,
        SQ = z.name,
        Sm = w.task_completion_info,
        Sr = 10;
      if (Sm.user_left_completions_times > 0 && Sm.user_left_completions_times < 6) {
        Sr = Sm.user_left_completions_times;
      }
      for (let Sz = 0; Sz < Sr; Sz++) {
        await $.wait(randomNum(5000, 8000));
        await complete(s, Sv, SQ, Sz + 1);
      }
    }
  } else {
    $.log("[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 任务中心=> " + F.msg);
    dysclogs[s] += "[账号" + (s + 1 < 10 ? "0" + (s + 1) : s + 1) + "]: 任务中心=> " + F.msg + "\n";
  }
}
async function complete(S, j, c, s) {
  let J = getReqUrl(S);
  const a = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/marketing/v1/report_task?task_meta_id=" + j.task_meta_id + "&biz_id=" + j.biz_id + "&task_item_id=" + j.task_item_id + "&" + J;
  let A = "body=null";
  await getReqObject(a, A, S);
  if (signSwitchs[S] == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[S], printCaller());
  let F = httpResult;
  if (F != null && F.code == 0) {
    let T = s ? "(" + s + "/" + "10)" : "";
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + T + "=> 获得" + F.data.RewardTexts);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + T + "=> 获得" + F.data.RewardTexts + "\n";
  } else {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> " + F.msg);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> " + F.msg + "\n";
    if (F.msg == "任务完成达到上限") {
      adSwitchs[S] = false;
    }
  }
}
async function draw(S, j, c) {
  let G = getReqUrl(S);
  const J = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/marketing/v1/draw_lottery?request_tag_from=lynx&task_meta_id=" + j.task_meta_id + "&task_item_id=" + j.task_item_id + "&" + G;
  let a = "{}";
  await getReqObject(J, a, S);
  if (signSwitchs[S] == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 天天抽奖=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[S], printCaller());
  let A = httpResult;
  if (A != null && A.code == 0 && A.data.RewardTexts) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> 次日领取可获得" + A.data.RewardTexts);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> 次日领取可获得" + A.data.RewardTexts + "\n";
  } else {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> " + A.msg);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> " + A.msg + "\n";
  }
}
async function receiveDrawReward(S, j, c) {
  let G = getReqUrl(S);
  const J = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/marketing/v1/draw_mannual_apply_prize?task_meta_id=" + j.task_meta_id + "&task_item_id=" + j.task_item_id + "&" + G;
  let a = "{}";
  await getReqObject(J, a, S);
  if (signSwitchs[S] == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 天天抽奖=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[S], printCaller());
  let A = httpResult;
  if (A != null && A.code == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> 成功领取");
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> 成功领取\n";
  } else {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> " + A.msg);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + c + "=> " + A.msg + "\n";
  }
}
async function withdrarwInfo(S) {
  let c = getReqUrl(S);
  let s = encodeURIComponent("{\"WalletID\":\"e_commerce_wallet\",\"SubWalletID\":\"e_commerce_wallet\",\"AccountType\":\"gold\",\"EnterFrom\":\"wallet_profit\",\"TokenList\":\"\"}");
  const G = "https://polaris.zijieapi.com/luckycat/polaris/wallet/e_commerce_user/v1/withdraw/page?" + c + "&BaseReq=" + s;
  let J = "";
  await getReqObject(G, J, S);
  if (signSwitchs[S] == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[S].headers["Content-Type"] = "application/json";
  await httpRequest("get", requestObjects[S], printCaller());
  let a = httpResult;
  if (a != null && a.err_no == 0) {
    let D = a.BaseRes.ProfitWalletData.AggreWalletData.Data.gold.Balance / 10000,
      T = a.BaseRes.WithdrawWays.Data.e_commerce_wallet.ThresholdWithdraws.find(L => L.PaymentMethodInfo.Name == "支付宝");
    if (T.PaymentMethodInfo.BindingInfos == null) {
      $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现信息=> 你没有绑定支付宝，会影响自动提现的！");
      return;
    }
    if (T) {
      let Q = "";
      if (D >= 30) {
        Q = T.ChoiceList.find(m => m.Amount == 300000);
        if (Q.Extra.Tag == "可提现" && Q.Extra.Status == "") {
          await withdraw(S, T, Q);
        }
      }
      if (D >= 15) {
        Q = T.ChoiceList.find(w => w.Amount == 150000);
        if (Q.Extra.Tag == "可提现" && Q.Extra.Status == "") {
          await withdraw(S, T, Q);
        }
      }
      if (D >= 1) {
        Q = T.ChoiceList.find(g => g.Amount == 10000);
        if (Q.Extra.Tag == "可提现" && Q.Extra.Status == "") {
          await withdraw(S, T, Q);
        }
      }
      if (D >= 0.3) {
        Q = T.ChoiceList.find(R => R.Amount == 3000);
        if (Q.Extra.Tag == "可提现" && Q.Extra.Status == "") {
          await withdraw(S, T, Q);
        }
      }
    }
  } else {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现中心=> " + a.err_tips);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现中心=> " + a.err_tips + "\n";
  }
}
async function withdraw(S, j, c) {
  let G = getReqUrl(S),
    J = j.PaymentMethodInfo.BindingInfos[0];
  const a = "https://polaris.zijieapi.com/luckycat/polaris/wallet/e_commerce_user/v:version/withdraw/withdraw?" + G;
  let A = {
    BaseReq: {
      Account: J.Account,
      UniqueID: "e_commerce_wallet-e_commerce_wallet-withdraw-99419660774219-" + ts13(),
      Category: c.Category,
      Amount: c.Amount,
      PaymentMethod: j.PaymentMethodInfo.PaymentMethod,
      WalletID: "e_commerce_wallet",
      SubWalletID: "e_commerce_wallet",
      AccountType: c.AccountType,
      AccountMask: J.AccountMask
    }
  };
  await getReqObject(a, JSON.stringify(A), S);
  if (signSwitchs[S] == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[S].headers["Content-Type"] = "application/json";
  requestObjects[S].headers["Content-Length"] = JSON.stringify(A).length;
  await httpRequest("post", requestObjects[S], printCaller());
  let F = httpResult;
  if (F != null && F.err_no == 0) {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现=> 成功提现" + c.Amount / 10000 + "元");
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现=> 成功提现" + c.Amount / 10000 + "元\n";
  } else {
    $.log("[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: 提现=> " + F.err_tips);
    dysclogs[S] += "[账号" + (S + 1 < 10 ? "0" + (S + 1) : S + 1) + "]: " + titleName + "=> " + F.err_tips + "\n";
  }
}
function getScriptAuth(S, j, c) {
  return new Promise((G, J) => {
    const A = apiHost + "/script/permissions/lastest",
      F = {
        appName: S,
        userId: j,
        activityCode: c,
        version: version
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: A,
      headers: T,
      body: JSON.stringify(F)
    };
    $.post(L, async (v, Q, m) => {
      if (m && m != null && m.replace(/\"/g, "").length > 50) {
        const w = m.replace(/\"/g, "").slice(34),
          z = new Base64();
        result = JSON.parse(z.decode(w));
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
        } catch (R) {
          $.log(R);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      G();
    });
  });
}
function runComplete(S, j) {
  return new Promise((s, G) => {
    const A = apiHost + "/script/run/add",
      F = {
        appName: S,
        userId: j,
        activityCode: activeCode,
        version: version
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: A,
      headers: T,
      body: JSON.stringify(F)
    };
    $.post(L, async (v, Q, m) => {
      s();
    });
  });
}
function checkAddress(S, j) {
  return new Promise((s, G) => {
    const a = setTimeout(() => {
        s(false);
      }, j),
      A = http.get(S, F => {
        clearTimeout(a);
        if (F.statusCode === 404) {
          s(true);
        } else {
          s(false);
        }
      });
    A.on("error", F => {
      clearTimeout(a);
      s(false);
    });
    A.on("timeout", () => {
      A.abort();
      G(new Error("请求超时"));
    });
  });
}
async function fetchRequest(S, j = 3000) {
  return new Promise((s, G) => {
    const a = {
      url: S + "/docs"
    };
    setTimeout(() => {
      s(false);
    }, j);
    $.get(a, async (A, F, D) => {
      if (F.status == 401) {
        s(true);
      } else {
        s(false);
      }
    });
  });
}
async function httpClientRequest(S, j = 3000) {
  return new Promise((s, G) => {
    const a = {
      url: S + "/"
    };
    setTimeout(() => {
      s(false);
    }, j);
    $httpClient.get(a, async (A, F, D) => {
      D == "{\"detail\":\"Not Found\"}" ? s(true) : s(false);
    });
  });
}
async function redisGet(S, j, c) {
  return new Promise((G, J) => {
    const F = apiHost + "/redis/hash/get/" + j + "/" + c,
      D = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const T = {
      url: F,
      headers: D
    };
    $.get(T, async (v, Q, m) => {
      const w = m.replace(/\"/g, "");
      answerTexts[S] = w;
      G();
    });
  });
}
function redisSet(S, j, c) {
  return new Promise((G, J) => {
    const A = apiHost + "/redis/hash/set",
      F = {
        key: S,
        hashKey: j,
        hashValue: c
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: A,
      headers: T,
      body: JSON.stringify(F)
    };
    $.post(L, async (v, Q, m) => {
      G();
    });
  });
}
function redisPop(S) {
  return new Promise((c, s) => {
    const a = apiHost + "/redis/set/pop/" + S,
      A = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const F = {
      url: a,
      headers: A
    };
    $.get(F, async (T, L, v) => {
      const m = v.replace(/\"/g, "");
      popCookie = m;
      c();
    });
  });
}
async function getReqObject(c, s, G) {
  let a = "com.ss.android.ugc.livelite/280705 (Linux; U; Android 12; zh_CN; 22081212C; Build/SKQ1.220303.001; Cronet/TTNetVersion:6b53ef0a 2024-03-04 QuicVersion:f0528f26 2024-02-27)";
  if (dyscapp[G].ua && dyscapp[G].ua != "") {
    a = dyscapp[G].ua;
  }
  let A = getHostname(c);
  let F = ts13();
  const D = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Accept-Encoding": "gzip",
    "User-Agent": a,
    Host: A,
    "passport-sdk-version": "203190",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": F,
    "X-Tt-Token": dyscapp[G].token,
    "x-vc-bdturing-sdk-version": "3.7.0.cn"
  };
  const T = {};
  T.url = c;
  T.headers = D;
  let L = T;
  if (s) {
    L.body = s;
    L.headers["X-SS-STUB"] = MD5_Encrypt(s).toUpperCase();
  }
  await getSixGodHeader(G, c, L.headers);
  let v = requestSigns[G];
  if (v.length < 200) {
    if (v.indexOf("unable to find process with name") != -1) {
      $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 签名获取失败原因=> 请检查签名APP是否已启动");
    } else {
      if (v.indexOf("unable to connect to remote frida-server") != -1) {
        $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 签名获取失败原因=> 请检查是否映射成功");
      } else {
        $.log("[账号" + (G + 1 < 10 ? "0" + (G + 1) : G + 1) + "]: 签名获取失败原因=> " + v);
      }
    }
  }
  if (v && v != "Internal Server Error") {
    const q = convertStringToJson(v);
    L.headers["X-Argus"] = q["X-Argus"];
    L.headers["X-Gorgon"] = q["X-Gorgon"];
    q["X-Gorgon"] == undefined && (signSwitchs[G] = 0);
    L.headers["X-Helios"] = q["X-Helios"];
    L.headers["X-Khronos"] = q["X-Khronos"];
    L.headers["X-Ladon"] = q["X-Ladon"];
    L.headers["X-Medusa"] = q["X-Medusa"];
    let t = dyscapp[G].token.substring(2, 34);
    L.headers.Cookie = "sessionid=" + t + "; sessionid_ss=" + t;
  } else {
    signSwitchs[G] = 0;
  }
  requestObjects[G] = L;
  return L;
}
function getReqObject_(c, s, G) {
  let a = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (dyscapp[G].ua && dyscapp[G].ua != "") {
    a = dyscapp[G].ua;
  }
  let A = getHostname(c);
  const F = {};
  F["Content-Type"] = "application/x-www-form-urlencoded";
  F["User-Agent"] = a;
  F.Authorization = dyscapp[G].auth;
  F.Host = A;
  const D = {};
  D.url = c;
  D.headers = F;
  let T = D;
  if (s) {
    T.body = s;
  }
  requestObjects[G] = T;
  return T;
}
async function httpRequest(S, j, c) {
  httpResult = null;
  return new Promise(G => {
    $[S](j, async (a, A, F) => {
      try {
        if (a) {
          $.log(c + ": " + S + "请求失败");
          $.log(JSON.stringify(a));
          $.logErr(a);
        } else {
          if (safeGet(F)) {
            httpResult = JSON.parse(F);
            debug == 1 && $.log(httpResult);
          } else {
            const Q = new URL(j.url);
            $.log(Q.pathname + "发起" + S + "请求时，出现错误，请处理");
          }
        }
      } catch (z) {
        $.logErr(z, A);
      } finally {
        G(httpResult);
      }
    });
  });
}
async function selectChannel(S, j) {
  if (channels_status[S] == 0) {
    await getSign_(S, j);
  } else {
    await getSign(S, j);
  }
}
function getSign_(S, j) {
  return new Promise((s, G) => {
    function A(F) {
      let T = F.toString("utf8");
      requestSigns[S] = T;
      wss[S].removeListener("message", A);
      s(T);
    }
    wss[S].on("message", A);
    if (wss[S].readyState === 1) {
      const F = {
        method: appName,
        params: {}
      };
      F.params.content = j;
      F.params.appName = appName;
      F.params.uuid = userId;
      wss[S].send(JSON.stringify(F), D => {
        D && G(D);
      });
    } else {
      s(getSign(S, j));
      wss[S].removeListener("message", A);
    }
  });
}
function getSign(S, j) {
  return new Promise((s, G) => {
    const A = apiHost + "/sign/dysc/six",
      F = {
        content: j,
        appName: appName,
        uuid: userId
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: A,
      headers: T,
      body: JSON.stringify(F)
    };
    $.post(L, async (v, Q, m) => {
      const z = m.replace(/\"/g, "");
      requestSigns[S] = z;
      s();
    });
  });
}
function getCapture(S, j) {
  return new Promise((s, G) => {
    const A = apiHost + "/bytes/capture",
      F = {
        content: j,
        appName: appName,
        uuid: userId
      };
    const T = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const L = {
      url: A,
      headers: T,
      body: JSON.stringify(F)
    };
    $.post(L, async (v, Q, m) => {
      const z = m.replace(/\"/g, "");
      requestSigns[S] = z;
      s();
    });
  });
}
function sortUrlParams(S, j, c) {
  const G = url2obj(S);
  j.forEach(A => {
    delete G[A];
  });
  Object.assign(G, c);
  const J = Object.keys(G).sort(),
    a = J.map(A => A + "=" + G[A]).join("&");
  return a;
}
function url2obj(j) {
  j = j.replace(/\"/g, "");
  var G,
    J = {},
    a = j.slice(j.indexOf("?") + 1).split("&");
  for (var A = 0; A < a.length; A++) {
    G = a[A].split("=");
    J[G[0]] = G[1];
  }
  return J;
}
function convertStringToJson(j) {
  const G = j.replace(/[{} ]/g, ""),
    J = G.split(","),
    a = {};
  J.forEach(A => {
    const F = A.split(/=(.*)/),
      [D, T] = F;
    a[D] = T;
  });
  return a;
}
function getHostname(j) {
  let G = j.substr(j.indexOf("//") + 2),
    J = G.substr(0, G.indexOf("/")),
    a = "",
    A = J.indexOf(":");
  if (A > 0) {
    a = J.substr(0, A);
  } else {
    a = J;
  }
  return a;
}
function calculateTimeDifference(j, c) {
  var F = new Date(j);
  var D = new Date(c);
  var T = D - F;
  var A = Math.floor(T / 1000);
  return A;
}
function cutString(j, c) {
  if (j.length * 2 <= c) {
    return j;
  }
  var a = 0,
    A = "";
  for (var F = 0; F < j.length; F++) {
    A = A + j.charAt(F);
    if (j.charCodeAt(F) > 128) {
      a = a + 2;
      if (a >= c) {
        return A.substring(0, A.length - 1) + "...";
      }
    } else {
      a = a + 1;
      if (a >= c) {
        return A.substring(0, A.length - 2) + "...";
      }
    }
  }
  return A;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(S) {
  try {
    if (typeof JSON.parse(S) == "object") {
      return true;
    }
  } catch (G) {
    console.log(G);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(S) {
  var c = Object.keys(S).map(function (s) {
    return encodeURIComponent(s) + "=" + encodeURIComponent(S[s]);
  }).join("&");
  return c;
}
function compileStr(S) {
  var s = String.fromCharCode(S.charCodeAt(0) + S.length);
  for (var G = 1; G < S.length; G++) {
    s += String.fromCharCode(S.charCodeAt(G) + S.charCodeAt(G - 1));
  }
  return escape(s);
}
function uncompileStr(S) {
  S = unescape(S);
  var s = String.fromCharCode(S.charCodeAt(0) - S.length);
  for (var G = 1; G < S.length; G++) {
    s += String.fromCharCode(S.charCodeAt(G) - s.charCodeAt(G - 1));
  }
  return s;
}
function randomNum(S, j) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * S + 1);
      break;
    case 2:
      return parseInt(Math.random() * (j - S + 1) + S);
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
  function j() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return j() + j() + "-" + j() + "-" + j() + "-" + j() + "-" + j() + j() + j();
}
function phone_num(j) {
  if (j.length == 11) {
    let G = j.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return G;
  } else {
    return j;
  }
}
function txt_api(S) {
  return new Promise((c, s) => {
    const J = "https://v1.hitokoto.cn/?c=e",
      a = {
        accept: "application/json"
      };
    const A = {
      url: J,
      headers: a
    };
    $.get(A, async (D, T, L) => {
      let Q = JSON.parse(L),
        m = Q.hitokoto;
      contents[S] = m + " " + m;
      c();
    });
  });
}
function getTime_8() {
  return new Promise((c, s) => {
    const a = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      A = {
        url: a
      };
    $.get(A, async (D, T, L) => {
      c(L);
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
async function sendMsg(S) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      $.isNode() ? await notify.sendNotify($.name, S) : $.msg($.name, "", S);
    } else {
      $.log(S);
    }
  }
}
async function wxPush(S, j, c) {
  return new Promise((G, J) => {
    const A = "https://wxpusher.zjiecode.com/api/send/message",
      F = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: j,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [c],
        verifyPay: false
      };
    const T = {
      "Content-Type": "application/json"
    };
    const L = {
      url: A,
      headers: T,
      body: JSON.stringify(F)
    };
    $.post(L, async (v, Q, m) => {
      G();
    });
  });
}
function randomString(j, c) {
  c = c || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let J = "";
  for (let a = 0; a < j; a++) {
    let A = Math.floor(Math.random() * c.length);
    J += c.substring(A, A + 1);
  }
  return J;
}
function MD5_Encrypt(S) {
  function Q(SR, SC) {
    return SR << SC | SR >>> 32 - SC;
  }
  function R(SR, SC) {
    var Sf, SB, SN, Sl, Sp;
    SN = 2147483648 & SR;
    Sl = 2147483648 & SC;
    Sf = 1073741824 & SR;
    SB = 1073741824 & SC;
    Sp = (1073741823 & SR) + (1073741823 & SC);
    return Sf & SB ? 2147483648 ^ Sp ^ SN ^ Sl : Sf | SB ? 1073741824 & Sp ? 3221225472 ^ Sp ^ SN ^ Sl : 1073741824 ^ Sp ^ SN ^ Sl : Sp ^ SN ^ Sl;
  }
  function U(SR, SC, Sf) {
    return SR & SC | ~SR & Sf;
  }
  function Z(SR, SC, Sf) {
    return SR & Sf | SC & ~Sf;
  }
  function V(SR, SC, Sf) {
    return SR ^ SC ^ Sf;
  }
  function W(SR, SC, Sf) {
    return SC ^ (SR | ~Sf);
  }
  function Y(SR, SC, Sf, SB, SN, Sl, Sp) {
    SR = R(SR, R(R(U(SC, Sf, SB), SN), Sp));
    return R(Q(SR, Sl), SC);
  }
  function P(SR, SC, Sf, SB, SN, Sl, Sp) {
    SR = R(SR, R(R(Z(SC, Sf, SB), SN), Sp));
    return R(Q(SR, Sl), SC);
  }
  function X(SR, SC, Sf, SB, SN, Sl, Sp) {
    SR = R(SR, R(R(V(SC, Sf, SB), SN), Sp));
    return R(Q(SR, Sl), SC);
  }
  function S0(SR, SC, Sf, SB, SN, Sl, Sp) {
    SR = R(SR, R(R(W(SC, Sf, SB), SN), Sp));
    return R(Q(SR, Sl), SC);
  }
  function S1(SR) {
    for (var Sf, SB = SR.length, SN = SB + 8, Sl = (SN - SN % 64) / 64, Sp = 16 * (Sl + 1), Se = new Array(Sp - 1), So = 0, Sn = 0; SB > Sn;) {
      Sf = (Sn - Sn % 4) / 4;
      So = Sn % 4 * 8;
      Se[Sf] = Se[Sf] | SR.charCodeAt(Sn) << So;
      Sn++;
    }
    Sf = (Sn - Sn % 4) / 4;
    So = Sn % 4 * 8;
    Se[Sf] = Se[Sf] | 128 << So;
    Se[Sp - 2] = SB << 3;
    Se[Sp - 1] = SB >>> 29;
    return Se;
  }
  function S2(SR) {
    var SC,
      Sf,
      SB = "",
      SN = "";
    for (Sf = 0; 3 >= Sf; Sf++) {
      SC = SR >>> 8 * Sf & 255;
      SN = "0" + SC.toString(16);
      SB += SN.substr(SN.length - 2, 2);
    }
    return SB;
  }
  function S3(SR) {
    SR = SR.replace(/\r\n/g, "\n");
    for (var Sf = "", SB = 0; SB < SR.length; SB++) {
      var SN = SR.charCodeAt(SB);
      128 > SN ? Sf += String.fromCharCode(SN) : SN > 127 && 2048 > SN ? (Sf += String.fromCharCode(SN >> 6 | 192), Sf += String.fromCharCode(63 & SN | 128)) : (Sf += String.fromCharCode(SN >> 12 | 224), Sf += String.fromCharCode(SN >> 6 & 63 | 128), Sf += String.fromCharCode(63 & SN | 128));
    }
    return Sf;
  }
  var S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    SS,
    Sj,
    Sc,
    Ss = [],
    SG = 7,
    SJ = 12,
    Sa = 17,
    SA = 22,
    SF = 5,
    SD = 9,
    ST = 14,
    SL = 20,
    Sv = 4,
    SQ = 11,
    Sm = 16,
    Sr = 23,
    Sw = 6,
    Sz = 10,
    Sg = 15,
    Sq = 21;
  for (S = S3(S), Ss = S1(S), S9 = 1732584193, SS = 4023233417, Sj = 2562383102, Sc = 271733878, S4 = 0; S4 < Ss.length; S4 += 16) {
    S5 = S9;
    S6 = SS;
    S7 = Sj;
    S8 = Sc;
    S9 = Y(S9, SS, Sj, Sc, Ss[S4 + 0], SG, 3614090360);
    Sc = Y(Sc, S9, SS, Sj, Ss[S4 + 1], SJ, 3905402710);
    Sj = Y(Sj, Sc, S9, SS, Ss[S4 + 2], Sa, 606105819);
    SS = Y(SS, Sj, Sc, S9, Ss[S4 + 3], SA, 3250441966);
    S9 = Y(S9, SS, Sj, Sc, Ss[S4 + 4], SG, 4118548399);
    Sc = Y(Sc, S9, SS, Sj, Ss[S4 + 5], SJ, 1200080426);
    Sj = Y(Sj, Sc, S9, SS, Ss[S4 + 6], Sa, 2821735955);
    SS = Y(SS, Sj, Sc, S9, Ss[S4 + 7], SA, 4249261313);
    S9 = Y(S9, SS, Sj, Sc, Ss[S4 + 8], SG, 1770035416);
    Sc = Y(Sc, S9, SS, Sj, Ss[S4 + 9], SJ, 2336552879);
    Sj = Y(Sj, Sc, S9, SS, Ss[S4 + 10], Sa, 4294925233);
    SS = Y(SS, Sj, Sc, S9, Ss[S4 + 11], SA, 2304563134);
    S9 = Y(S9, SS, Sj, Sc, Ss[S4 + 12], SG, 1804603682);
    Sc = Y(Sc, S9, SS, Sj, Ss[S4 + 13], SJ, 4254626195);
    Sj = Y(Sj, Sc, S9, SS, Ss[S4 + 14], Sa, 2792965006);
    SS = Y(SS, Sj, Sc, S9, Ss[S4 + 15], SA, 1236535329);
    S9 = P(S9, SS, Sj, Sc, Ss[S4 + 1], SF, 4129170786);
    Sc = P(Sc, S9, SS, Sj, Ss[S4 + 6], SD, 3225465664);
    Sj = P(Sj, Sc, S9, SS, Ss[S4 + 11], ST, 643717713);
    SS = P(SS, Sj, Sc, S9, Ss[S4 + 0], SL, 3921069994);
    S9 = P(S9, SS, Sj, Sc, Ss[S4 + 5], SF, 3593408605);
    Sc = P(Sc, S9, SS, Sj, Ss[S4 + 10], SD, 38016083);
    Sj = P(Sj, Sc, S9, SS, Ss[S4 + 15], ST, 3634488961);
    SS = P(SS, Sj, Sc, S9, Ss[S4 + 4], SL, 3889429448);
    S9 = P(S9, SS, Sj, Sc, Ss[S4 + 9], SF, 568446438);
    Sc = P(Sc, S9, SS, Sj, Ss[S4 + 14], SD, 3275163606);
    Sj = P(Sj, Sc, S9, SS, Ss[S4 + 3], ST, 4107603335);
    SS = P(SS, Sj, Sc, S9, Ss[S4 + 8], SL, 1163531501);
    S9 = P(S9, SS, Sj, Sc, Ss[S4 + 13], SF, 2850285829);
    Sc = P(Sc, S9, SS, Sj, Ss[S4 + 2], SD, 4243563512);
    Sj = P(Sj, Sc, S9, SS, Ss[S4 + 7], ST, 1735328473);
    SS = P(SS, Sj, Sc, S9, Ss[S4 + 12], SL, 2368359562);
    S9 = X(S9, SS, Sj, Sc, Ss[S4 + 5], Sv, 4294588738);
    Sc = X(Sc, S9, SS, Sj, Ss[S4 + 8], SQ, 2272392833);
    Sj = X(Sj, Sc, S9, SS, Ss[S4 + 11], Sm, 1839030562);
    SS = X(SS, Sj, Sc, S9, Ss[S4 + 14], Sr, 4259657740);
    S9 = X(S9, SS, Sj, Sc, Ss[S4 + 1], Sv, 2763975236);
    Sc = X(Sc, S9, SS, Sj, Ss[S4 + 4], SQ, 1272893353);
    Sj = X(Sj, Sc, S9, SS, Ss[S4 + 7], Sm, 4139469664);
    SS = X(SS, Sj, Sc, S9, Ss[S4 + 10], Sr, 3200236656);
    S9 = X(S9, SS, Sj, Sc, Ss[S4 + 13], Sv, 681279174);
    Sc = X(Sc, S9, SS, Sj, Ss[S4 + 0], SQ, 3936430074);
    Sj = X(Sj, Sc, S9, SS, Ss[S4 + 3], Sm, 3572445317);
    SS = X(SS, Sj, Sc, S9, Ss[S4 + 6], Sr, 76029189);
    S9 = X(S9, SS, Sj, Sc, Ss[S4 + 9], Sv, 3654602809);
    Sc = X(Sc, S9, SS, Sj, Ss[S4 + 12], SQ, 3873151461);
    Sj = X(Sj, Sc, S9, SS, Ss[S4 + 15], Sm, 530742520);
    SS = X(SS, Sj, Sc, S9, Ss[S4 + 2], Sr, 3299628645);
    S9 = S0(S9, SS, Sj, Sc, Ss[S4 + 0], Sw, 4096336452);
    Sc = S0(Sc, S9, SS, Sj, Ss[S4 + 7], Sz, 1126891415);
    Sj = S0(Sj, Sc, S9, SS, Ss[S4 + 14], Sg, 2878612391);
    SS = S0(SS, Sj, Sc, S9, Ss[S4 + 5], Sq, 4237533241);
    S9 = S0(S9, SS, Sj, Sc, Ss[S4 + 12], Sw, 1700485571);
    Sc = S0(Sc, S9, SS, Sj, Ss[S4 + 3], Sz, 2399980690);
    Sj = S0(Sj, Sc, S9, SS, Ss[S4 + 10], Sg, 4293915773);
    SS = S0(SS, Sj, Sc, S9, Ss[S4 + 1], Sq, 2240044497);
    S9 = S0(S9, SS, Sj, Sc, Ss[S4 + 8], Sw, 1873313359);
    Sc = S0(Sc, S9, SS, Sj, Ss[S4 + 15], Sz, 4264355552);
    Sj = S0(Sj, Sc, S9, SS, Ss[S4 + 6], Sg, 2734768916);
    SS = S0(SS, Sj, Sc, S9, Ss[S4 + 13], Sq, 1309151649);
    S9 = S0(S9, SS, Sj, Sc, Ss[S4 + 4], Sw, 4149444226);
    Sc = S0(Sc, S9, SS, Sj, Ss[S4 + 11], Sz, 3174756917);
    Sj = S0(Sj, Sc, S9, SS, Ss[S4 + 2], Sg, 718787259);
    SS = S0(SS, Sj, Sc, S9, Ss[S4 + 9], Sq, 3951481745);
    S9 = R(S9, S5);
    SS = R(SS, S6);
    Sj = R(Sj, S7);
    Sc = R(Sc, S8);
  }
  var St = S2(S9) + S2(SS) + S2(Sj) + S2(Sc);
  return St.toLowerCase();
}
function SHA256(j) {
  var G = 8,
    J = 0;
  function a(q, t) {
    var C = (q & 65535) + (t & 65535),
      f = (q >> 16) + (t >> 16) + (C >> 16);
    return f << 16 | C & 65535;
  }
  function A(q, t) {
    return q >>> t | q << 32 - t;
  }
  function F(q, t) {
    return q >>> t;
  }
  function D(q, t, C) {
    return q & t ^ ~q & C;
  }
  function T(q, t, C) {
    return q & t ^ q & C ^ t & C;
  }
  function L(q) {
    return A(q, 2) ^ A(q, 13) ^ A(q, 22);
  }
  function v(q) {
    return A(q, 6) ^ A(q, 11) ^ A(q, 25);
  }
  function Q(q) {
    return A(q, 7) ^ A(q, 18) ^ F(q, 3);
  }
  function m(q) {
    return A(q, 17) ^ A(q, 19) ^ F(q, 10);
  }
  function r(q, t) {
    var N = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      p = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      o = new Array(64),
      n,
      U,
      Z,
      y,
      E,
      V,
      u,
      O,
      I,
      Y,
      P,
      x;
    q[t >> 5] |= 128 << 24 - t % 32;
    q[(t + 64 >> 9 << 4) + 15] = t;
    for (var I = 0; I < q.length; I += 16) {
      n = p[0];
      U = p[1];
      Z = p[2];
      y = p[3];
      E = p[4];
      V = p[5];
      u = p[6];
      O = p[7];
      for (var Y = 0; Y < 64; Y++) {
        if (Y < 16) {
          o[Y] = q[Y + I];
        } else {
          o[Y] = a(a(a(m(o[Y - 2]), o[Y - 7]), Q(o[Y - 15])), o[Y - 16]);
        }
        P = a(a(a(a(O, v(E)), D(E, V, u)), N[Y]), o[Y]);
        x = a(L(n), T(n, U, Z));
        O = u;
        u = V;
        V = E;
        E = a(y, P);
        y = Z;
        Z = U;
        U = n;
        n = a(P, x);
      }
      p[0] = a(n, p[0]);
      p[1] = a(U, p[1]);
      p[2] = a(Z, p[2]);
      p[3] = a(y, p[3]);
      p[4] = a(E, p[4]);
      p[5] = a(V, p[5]);
      p[6] = a(u, p[6]);
      p[7] = a(O, p[7]);
    }
    return p;
  }
  function w(q) {
    var t = Array(),
      C = (1 << G) - 1;
    for (var f = 0; f < q.length * G; f += G) {
      t[f >> 5] |= (q.charCodeAt(f / G) & C) << 24 - f % 32;
    }
    return t;
  }
  function z(q) {
    q = q.replace(/\r\n/g, "\n");
    var C = "";
    for (var f = 0; f < q.length; f++) {
      var B = q.charCodeAt(f);
      if (B < 128) {
        C += String.fromCharCode(B);
      } else {
        if (B > 127 && B < 2048) {
          C += String.fromCharCode(B >> 6 | 192);
          C += String.fromCharCode(B & 63 | 128);
        } else {
          C += String.fromCharCode(B >> 12 | 224);
          C += String.fromCharCode(B >> 6 & 63 | 128);
          C += String.fromCharCode(B & 63 | 128);
        }
      }
    }
    return C;
  }
  function g(q) {
    var t = J ? "0123456789ABCDEF" : "0123456789abcdef",
      C = "";
    for (var f = 0; f < q.length * 4; f++) {
      C += t.charAt(q[f >> 2] >> (3 - f % 4) * 8 + 4 & 15) + t.charAt(q[f >> 2] >> (3 - f % 4) * 8 & 15);
    }
    return C;
  }
  j = z(j);
  return g(r(w(j), j.length * G));
}
function SHA1(S) {
  function s(e, o) {
    var U = e << o | e >>> 32 - o;
    return U;
  }
  function G(e) {
    var o = "",
      n,
      U,
      Z;
    for (n = 0; n <= 6; n += 2) {
      U = e >>> n * 4 + 4 & 15;
      Z = e >>> n * 4 & 15;
      o += U.toString(16) + Z.toString(16);
    }
    return o;
  }
  function J(e) {
    var n = "",
      U,
      Z;
    for (U = 7; U >= 0; U--) {
      Z = e >>> U * 4 & 15;
      n += Z.toString(16);
    }
    return n;
  }
  function a(e) {
    e = e.replace(/\r\n/g, "\n");
    var o = "";
    for (var U = 0; U < e.length; U++) {
      var Z = e.charCodeAt(U);
      if (Z < 128) {
        o += String.fromCharCode(Z);
      } else {
        if (Z > 127 && Z < 2048) {
          o += String.fromCharCode(Z >> 6 | 192);
          o += String.fromCharCode(Z & 63 | 128);
        } else {
          o += String.fromCharCode(Z >> 12 | 224);
          o += String.fromCharCode(Z >> 6 & 63 | 128);
          o += String.fromCharCode(Z & 63 | 128);
        }
      }
    }
    return o;
  }
  var F,
    T,
    L,
    v = new Array(80),
    Q = 1732584193,
    m = 4023233417,
    r = 2562383102,
    w = 271733878,
    z = 3285377520,
    g,
    q,
    t,
    R,
    f,
    N;
  S = a(S);
  var l = S.length,
    p = new Array();
  for (T = 0; T < l - 3; T += 4) {
    L = S.charCodeAt(T) << 24 | S.charCodeAt(T + 1 < 10 ? "0" + (T + 1) : T + 1) << 16 | S.charCodeAt(T + 2) << 8 | S.charCodeAt(T + 3);
    p.push(L);
  }
  switch (l % 4) {
    case 0:
      T = 2147483648;
      break;
    case 1:
      T = S.charCodeAt(l - 1) << 24 | 8388608;
      break;
    case 2:
      T = S.charCodeAt(l - 2) << 24 | S.charCodeAt(l - 1) << 16 | 32768;
      break;
    case 3:
      T = S.charCodeAt(l - 3) << 24 | S.charCodeAt(l - 2) << 16 | S.charCodeAt(l - 1) << 8 | 128;
      break;
  }
  p.push(T);
  while (p.length % 16 != 14) {
    p.push(0);
  }
  p.push(l >>> 29);
  p.push(l << 3 & 4294967295);
  for (F = 0; F < p.length; F += 16) {
    for (T = 0; T < 16; T++) {
      v[T] = p[F + T];
    }
    for (T = 16; T <= 79; T++) {
      v[T] = s(v[T - 3] ^ v[T - 8] ^ v[T - 14] ^ v[T - 16], 1);
    }
    g = Q;
    q = m;
    t = r;
    R = w;
    f = z;
    for (T = 0; T <= 19; T++) {
      N = s(g, 5) + (q & t | ~q & R) + f + v[T] + 1518500249 & 4294967295;
      f = R;
      R = t;
      t = s(q, 30);
      q = g;
      g = N;
    }
    for (T = 20; T <= 39; T++) {
      N = s(g, 5) + (q ^ t ^ R) + f + v[T] + 1859775393 & 4294967295;
      f = R;
      R = t;
      t = s(q, 30);
      q = g;
      g = N;
    }
    for (T = 40; T <= 59; T++) {
      N = s(g, 5) + (q & t | q & R | t & R) + f + v[T] + 2400959708 & 4294967295;
      f = R;
      R = t;
      t = s(q, 30);
      q = g;
      g = N;
    }
    for (T = 60; T <= 79; T++) {
      N = s(g, 5) + (q ^ t ^ R) + f + v[T] + 3395469782 & 4294967295;
      f = R;
      R = t;
      t = s(q, 30);
      q = g;
      g = N;
    }
    Q = Q + g & 4294967295;
    m = m + q & 4294967295;
    r = r + t & 4294967295;
    w = w + R & 4294967295;
    z = z + f & 4294967295;
  }
  var N = J(Q) + J(m) + J(r) + J(w) + J(z);
  return N.toLowerCase();
}
function Base64() {
  var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (c) {
    var G = "";
    var J, a, A, F, D, T, L;
    var v = 0;
    c = utf8Encode(c);
    while (v < c.length) {
      J = c.charCodeAt(v++);
      a = c.charCodeAt(v++);
      A = c.charCodeAt(v++);
      F = J >> 2;
      D = (J & 3) << 4 | a >> 4;
      T = (a & 15) << 2 | A >> 6;
      L = A & 63;
      if (isNaN(a)) {
        T = L = 64;
      } else {
        if (isNaN(A)) {
          L = 64;
        }
      }
      G = G + j.charAt(F) + j.charAt(D) + j.charAt(T) + j.charAt(L);
    }
    return G;
  };
  this.decode = function (c) {
    var v = "";
    var F, D, T;
    var G, J, a, A;
    var L = 0;
    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (L < c.length) {
      G = j.indexOf(c.charAt(L++));
      J = j.indexOf(c.charAt(L++));
      a = j.indexOf(c.charAt(L++));
      A = j.indexOf(c.charAt(L++));
      F = G << 2 | J >> 4;
      D = (J & 15) << 4 | a >> 2;
      T = (a & 3) << 6 | A;
      v = v + String.fromCharCode(F);
      if (a !== 64) {
        v = v + String.fromCharCode(D);
      }
      A !== 64 && (v = v + String.fromCharCode(T));
    }
    v = utf8Decode(v);
    return v;
  };
  utf8Encode = function (s) {
    s = s.replace(/\r\n/g, "\n");
    var J = "";
    for (var a = 0; a < s.length; a++) {
      var A = s.charCodeAt(a);
      if (A < 128) {
        J += String.fromCharCode(A);
      } else {
        A > 127 && A < 2048 ? (J += String.fromCharCode(A >> 6 | 192), J += String.fromCharCode(A & 63 | 128)) : (J += String.fromCharCode(A >> 12 | 224), J += String.fromCharCode(A >> 6 & 63 | 128), J += String.fromCharCode(A & 63 | 128));
      }
    }
    return J;
  };
  utf8Decode = function (s) {
    var A = "";
    var F = 0;
    var J = 0;
    var a = 0;
    var D = 0;
    while (F < s.length) {
      J = s.charCodeAt(F);
      if (J < 128) {
        A += String.fromCharCode(J);
        F++;
      } else {
        if (J > 191 && J < 224) {
          a = s.charCodeAt(F + 1 < 10 ? "0" + (F + 1) : F + 1);
          A += String.fromCharCode((J & 31) << 6 | a & 63);
          F += 2;
        } else {
          a = s.charCodeAt(F + 1 < 10 ? "0" + (F + 1) : F + 1);
          D = s.charCodeAt(F + 2);
          A += String.fromCharCode((J & 15) << 12 | (a & 63) << 6 | D & 63);
          F += 3;
        }
      }
    }
    return A;
  };
}
function Env(S, j) {
  class s {
    constructor(G) {
      this.env = G;
    }
    send(G, J = "GET") {
      G = typeof G === "string" ? {
        url: G
      } : G;
      let A = this.get;
      if (J === "POST") {
        A = this.post;
      }
      return new Promise((D, T) => {
        A.call(this, G, (L, v, Q) => {
          if (L) {
            T(L);
          } else {
            D(v);
          }
        });
      });
    }
    get(G) {
      return this.send.call(this.env, G);
    }
    post(G) {
      return this.send.call(this.env, G, "POST");
    }
  }
  return new class {
    constructor(G, J) {
      this.name = G;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, J);
      const a = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(a);
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
    toObj(G, J = null) {
      try {
        return JSON.parse(G);
      } catch {
        return J;
      }
    }
    toStr(G, J = null) {
      try {
        return JSON.stringify(G);
      } catch {
        return J;
      }
    }
    getjson(G, J) {
      let F = J;
      const D = this.getdata(G);
      if (D) {
        try {
          F = JSON.parse(this.getdata(G));
        } catch {}
      }
      return F;
    }
    setjson(G, J) {
      try {
        return this.setdata(JSON.stringify(G), J);
      } catch {
        return false;
      }
    }
    getScript(G) {
      return new Promise(a => {
        const D = {
          url: G
        };
        this.get(D, (T, L, v) => a(v));
      });
    }
    runScript(G, J) {
      return new Promise(F => {
        let D = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        D = D ? D.replace(/\n/g, "").trim() : D;
        let T = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        T = T ? T * 1 : 20;
        T = J && J.timeout ? J.timeout : T;
        const [L, v] = D.split("@"),
          Q = {
            script_text: G,
            mock_type: "cron",
            timeout: T
          };
        const m = {
          "X-Key": L,
          Accept: "*/*"
        };
        const r = {
          url: "http: //" + v + "/v1/scripting/evaluate",
          body: Q,
          headers: m
        };
        this.post(r, (z, g, q) => F(q));
      }).catch(F => this.logErr(F));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const J = this.path.resolve(this.dataFile),
          a = this.path.resolve(process.cwd(), this.dataFile),
          A = this.fs.existsSync(J),
          F = !A && this.fs.existsSync(a);
        if (A || F) {
          const T = A ? J : a;
          try {
            return JSON.parse(this.fs.readFileSync(T));
          } catch (v) {
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
        const A = this.path.resolve(this.dataFile),
          F = this.path.resolve(process.cwd(), this.dataFile),
          D = this.fs.existsSync(A),
          T = !D && this.fs.existsSync(F),
          L = JSON.stringify(this.data);
        if (D) {
          this.fs.writeFileSync(A, L);
        } else {
          if (T) {
            this.fs.writeFileSync(F, L);
          } else {
            this.fs.writeFileSync(A, L);
          }
        }
      }
    }
    lodash_get(G, J, a = undefined) {
      const F = J.replace(/[(d+)]/g, ".$1").split(".");
      let D = G;
      for (const T of F) {
        D = Object(D)[T];
        if (D === undefined) {
          return a;
        }
      }
      return D;
    }
    lodash_set(G, J, a) {
      if (Object(G) !== G) {
        return G;
      }
      if (!Array.isArray(J)) {
        J = J.toString().match(/[^.[]]+/g) || [];
      }
      J.slice(0, -1).reduce((F, D, T) => Object(F[D]) === F[D] ? F[D] : F[D] = Math.abs(J[T + 1 < 10 ? "0" + (T + 1) : T + 1]) >> 0 === +J[T + 1 < 10 ? "0" + (T + 1) : T + 1] ? [] : {}, G)[J[J.length - 1]] = a;
      return G;
    }
    getdata(G) {
      let a = this.getval(G);
      if (/^@/.test(G)) {
        const [, A, F] = /^@(.*?).(.*?)$/.exec(G),
          D = A ? this.getval(A) : "";
        if (D) {
          try {
            const L = JSON.parse(D);
            a = L ? this.lodash_get(L, F, "") : a;
          } catch (v) {
            a = "";
          }
        }
      }
      return a;
    }
    setdata(G, J) {
      let F = false;
      if (/^@/.test(J)) {
        const [, T, L] = /^@(.*?).(.*?)$/.exec(J),
          v = this.getval(T),
          Q = T ? v === "null" ? null : v || "{}" : "{}";
        try {
          const r = JSON.parse(Q);
          this.lodash_set(r, L, G);
          F = this.setval(JSON.stringify(r), T);
        } catch (w) {
          const g = {};
          this.lodash_set(g, L, G);
          F = this.setval(JSON.stringify(g), T);
        }
      } else {
        F = this.setval(G, J);
      }
      return F;
    }
    getval(G) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(G);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(G);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[G];
          } else {
            return this.data && this.data[G] || null;
          }
        }
      }
    }
    setval(G, J) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(G, J);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(G, J);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[J] = G;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[J] || null;
          }
        }
      }
    }
    initGotEnv(G) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (G) {
        G.headers = G.headers ? G.headers : {};
        if (undefined === G.headers.Cookie && undefined === G.cookieJar) {
          G.cookieJar = this.ckjar;
        }
      }
    }
    get(G, J = () => {}) {
      if (G.headers) {
        if (G.headers.Host == "polaris.zijieapi.com") {
          delete G.headers["Content-Length"];
        } else {
          delete G.headers["Content-Type"];
          delete G.headers["Content-Length"];
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          G.headers = G.headers || {};
          const v = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(G.headers, v);
        }
        $httpClient.get(G, (m, r, w) => {
          if (!m && r) {
            r.body = w;
            r.statusCode = r.status;
          }
          J(m, r, w);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            G.opts = G.opts || {};
            const w = {
              hints: false
            };
            Object.assign(G.opts, w);
          }
          $task.fetch(G).then(z => {
            const {
                statusCode: q,
                statusCode: t,
                headers: R,
                body: C
              } = z,
              f = {
                status: q,
                statusCode: t,
                headers: R,
                body: C
              };
            J(null, f, C);
          }, z => J(z));
        } else {
          if (this.isNode()) {
            this.initGotEnv(G);
            this.got(G).on("redirect", (g, q) => {
              try {
                if (g.headers["set-cookie"]) {
                  const C = g.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  C && this.ckjar.setCookieSync(C, null);
                  q.cookieJar = this.ckjar;
                }
              } catch (l) {
                this.logErr(l);
              }
            }).then(g => {
              const {
                  statusCode: q,
                  statusCode: t,
                  headers: R,
                  body: C
                } = g,
                f = {
                  status: q,
                  statusCode: t,
                  headers: R,
                  body: C
                };
              J(null, f, C);
            }, g => {
              const {
                message: t,
                response: R
              } = g;
              J(t, R, R && R.body);
            });
          }
        }
      }
    }
    post(G, J = () => {}) {
      const A = G.method ? G.method.toLocaleLowerCase() : "post";
      if (G.body && G.headers && !G.headers["Content-Type"]) {
        G.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (G.headers) {
        delete G.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          G.headers = G.headers || {};
          const T = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(G.headers, T);
        }
        $httpClient[A](G, (v, Q, m) => {
          !v && Q && (Q.body = m, Q.statusCode = Q.status);
          J(v, Q, m);
        });
      } else {
        if (this.isQuanX()) {
          G.method = A;
          if (this.isNeedRewrite) {
            G.opts = G.opts || {};
            const Q = {
              hints: false
            };
            Object.assign(G.opts, Q);
          }
          $task.fetch(G).then(r => {
            const {
                statusCode: g,
                statusCode: q,
                headers: t,
                body: R
              } = r,
              C = {
                status: g,
                statusCode: q,
                headers: t,
                body: R
              };
            J(null, C, R);
          }, r => J(r));
        } else {
          if (this.isNode()) {
            this.initGotEnv(G);
            const {
              url: w,
              ...z
            } = G;
            this.got[A](w, z).then(g => {
              const {
                  statusCode: t,
                  statusCode: R,
                  headers: C,
                  body: f
                } = g,
                B = {
                  status: t,
                  statusCode: R,
                  headers: C,
                  body: f
                };
              J(null, B, f);
            }, g => {
              const {
                message: R,
                response: C
              } = g;
              J(R, C, C && C.body);
            });
          }
        }
      }
    }
    put(G, J = () => {}) {
      const A = G.method ? G.method.toLocaleLowerCase() : "put";
      G.body && G.headers && !G.headers["Content-Type"] && (G.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (G.headers) {
        delete G.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          G.headers = G.headers || {};
          const F = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(G.headers, F);
        }
        $httpClient[A](G, (D, T, L) => {
          !D && T && (T.body = L, T.statusCode = T.status);
          J(D, T, L);
        });
      } else {
        if (this.isQuanX()) {
          G.method = A;
          if (this.isNeedRewrite) {
            G.opts = G.opts || {};
            const D = {
              hints: false
            };
            Object.assign(G.opts, D);
          }
          $task.fetch(G).then(T => {
            const {
                statusCode: L,
                statusCode: v,
                headers: Q,
                body: m
              } = T,
              r = {
                status: L,
                statusCode: v,
                headers: Q,
                body: m
              };
            J(null, r, m);
          }, T => J(T));
        } else {
          if (this.isNode()) {
            this.initGotEnv(G);
            const {
              url: T,
              ...L
            } = G;
            this.got[A](T, L).then(v => {
              const {
                statusCode: Q,
                statusCode: m,
                headers: r,
                body: w
              } = v;
              const z = {
                status: Q,
                statusCode: m,
                headers: r,
                body: w
              };
              J(null, z, w);
            }, v => {
              const {
                message: Q,
                response: m
              } = v;
              J(Q, m, m && m.body);
            });
          }
        }
      }
    }
    time(G, J = null) {
      const a = J ? new Date(J) : new Date();
      let A = {
        "M+": a.getMonth() + 1,
        "d+": a.getDate(),
        "H+": a.getHours(),
        "m+": a.getMinutes(),
        "s+": a.getSeconds(),
        "q+": Math.floor((a.getMonth() + 3) / 3),
        S: a.getMilliseconds()
      };
      if (/(y+)/.test(G)) {
        G = G.replace(RegExp.$1, (a.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let F in A) if (new RegExp("(" + F + ")").test(G)) {
        G = G.replace(RegExp.$1, RegExp.$1.length == 1 ? A[F] : ("00" + A[F]).substr(("" + A[F]).length));
      }
      return G;
    }
    msg(G = S, J = "", a = "", A) {
      const D = T => {
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
              let L = T.openUrl || T.url || T["open-url"],
                v = T.mediaUrl || T["media-url"];
              const Q = {
                openUrl: L,
                mediaUrl: v
              };
              return Q;
            } else {
              if (this.isQuanX()) {
                let m = T["open-url"] || T.url || T.openUrl,
                  r = T["media-url"] || T.mediaUrl;
                const w = {
                  "open-url": m,
                  "media-url": r
                };
                return w;
              } else {
                if (this.isSurge()) {
                  let z = T.url || T.openUrl || T["open-url"];
                  const g = {
                    url: z
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
          $notification.post(G, J, a, D(A));
        } else {
          this.isQuanX() && $notify(G, J, a, D(A));
        }
      }
      if (!this.isMuteLog) {
        let T = ["", "==============📣系统通知📣=============="];
        T.push(G);
        J ? T.push(J) : "";
        a ? T.push(a) : "";
        console.log(T.join("\n"));
        this.logs = this.logs.concat(T);
      }
    }
    log(...G) {
      G.length > 0 && (this.logs = [...this.logs, ...G]);
      console.log(G.join(this.logSeparator));
    }
    logErr(G, J) {
      const a = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !a ? this.log("", "❗️" + this.name + ", 错误!", G) : this.log("", "❗️" + this.name + ", 错误!", G.stack);
    }
    wait(G) {
      return new Promise(J => setTimeout(J, G));
    }
    done(G = {}) {
      const J = new Date().getTime();
      const a = (J - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + a + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(G);
    }
  }(S, j);
}