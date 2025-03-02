//Sun Mar 02 2025 11:02:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("抖音商城"),
  version = "V1.0.5",
  appName = "dyscapp";
let dyscapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet dyscAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    dysc: dyscAPP\n}\n\nmodule.exports = APPS", h => {}));
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
    let G = false;
    const H = apiHost.split("&"),
      Y = H.length;
    for (let q = 0; q < Y; q++) {
      if ($.isNode()) {
        G = await checkAddress("" + H[q], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          G = await httpClientRequest("" + H[q], 2500);
        } else {
          G = await fetchRequest("" + H[q], 2500);
        }
      }
      if (G == true) {
        apiHost = H[q];
        $.log("📢 接口" + (q + 1) + "[" + H[q] + "]服务器接口正常! 🎉");
        break;
      }
      if (q == Y - 1 && G == false) {
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
        g = new Date().getTime();
      if (g > t) {
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
        $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let E = new Date(vipDate).getTime(),
          R = new Date().getTime();
        if (R > E) {
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
    let s = [];
    for (let f = 0; f < dyscapp.length; f++) {
      s.push(runMultiTasks(f));
      dysclogs[f] = "";
      signSwitchs[f] = 1;
      adSwitchs[f] = true;
      if ($.isNode()) {
        channels_status[f] = 0;
        await init_ws(f);
      } else {
        channels_status[f] = 1;
      }
    }
    await Promise.allSettled(s).then(P => {
      $.log("日志整理功能如下：");
      $.log("---------------日志整理开始--------------");
      for (let U = 0; U < dyscapp.length; U++) {
        $.log(dysclogs[U]);
        sendlogs += dysclogs[U];
      }
      $.log("---------------日志整理结束--------------");
      sendMsg(sendlogs);
    });
  }
})().catch(h => $.logErr(h)).finally(() => $.done());
async function runMultiTasks(h) {
  return new Promise((G, H) => {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 开始执行 working......");
    runSubTask(G, h);
  });
}
async function init_ws(h) {
  if ($.isNode()) {
    reconectCounts[h] > 0 && $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 尝试重新连接服务器>>>>>>");
    wss[h] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[h].on("open", function Y() {
      $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 签名通道已连接");
    });
    wss[h].on("close", function s() {
      $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[h].on("error", function V() {
      $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[h] = 1;
      reconectCounts[h]++;
      if (reconectCounts[h] <= 3) {
        init_ws(h);
      }
    });
  }
}
async function runSubTask(h, y) {
  await $.wait(3000, 5000);
  if (dyscapp[y].capture) {
    if (dyscapp[y].interface && dyscapp[y].interface.split("$").length > 0) {
      let Y = dyscapp[y].interface.split("$").length > 1 ? dyscapp[y].interface.split("$")[0] : dyscapp[y].interface;
      await getCapture(y, Y);
      $.log("[账号" + (y + 1 < 10 ? "0" + (y + 1) : y + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。");
      dysclogs[y] += "[账号" + (y + 1 < 10 ? "0" + (y + 1) : y + 1) + "]: 抓包结果=> 如何你发现需要抓取的APP自动重启了，恭喜你🎉🎉🎉，可以开始抓包了，期间APP不要重启。\n";
    } else {
      $.log("[账号" + (y + 1 < 10 ? "0" + (y + 1) : y + 1) + "]: 请设置接口地址再运行脚本！");
    }
    if ($.isNode()) {
      await wss[y].close();
    }
  } else {
    dyscapp[y].url = dyscapp[y].url.replace(/\+/g, "");
    await userInfo(y);
    await withdrarwInfo(y);
    await taskPage(y);
    if ($.isNode()) {
      await wss[y].close();
    }
    await runComplete(appName, userId);
  }
  h();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const H = $request.body;
    let Y = dyscuserck - 1;
    if (dyscapp[Y]) {
      dyscapp[Y].token_body = H;
    } else {
      const V = {
        token_body: H
      };
      dyscapp[Y] = V;
    }
    $.setdata(JSON.stringify(dyscapp, null, 2), "dyscapp");
    $.msg($.name, "快音账号" + (Y + 1) + "Token获取成功！🎉");
  }
}
function getReqUrl(h) {
  let G = ts13();
  let H = ts10(),
    Y = url2obj(dyscapp[h].url);
  Y.ts = H;
  Y._rticket = G;
  dyscapp[h].iid = Y.iid;
  dyscapp[h].did = Y.device_id;
  Y.version_code = "280705";
  Y.version_name = "28.7.5";
  Y.manifest_version_code = "280705";
  Y.update_version_code = "28759900";
  Y.device_platform = "android";
  delete Y.task_meta_id;
  delete Y.task_item_id;
  delete Y.biz_id;
  return jsonToUrl(Y);
}
async function getSixGodHeader(h, y, G) {
  let Y = "common";
  if (dyscapp[h].interface) {
    Y = dyscapp[h].interface;
  }
  let s = dyscapp[h].iid,
    V = dyscapp[h].did,
    q = "";
  let M = [];
  for (let r in G) {
    if (r == "Content-Type" || r == "Host") {
      continue;
    }
    M.push(r.toLowerCase() + "=[" + G[r] + "]");
  }
  q += M.join(",");
  q += "";
  let p = V + "@" + s + "@" + encodeURIComponent(y) + "@" + encodeURIComponent(q) + "@" + Y;
  await selectChannel(h, p);
}
async function userInfo(h) {
  let G = getReqUrl(h);
  const H = "https://api5-normal-lq.amemv.com/aweme/v1/user/profile/self/?" + G;
  let Y = "";
  await getReqObject(H, Y, h);
  if (signSwitchs[h] == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[h], printCaller());
  let s = httpResult;
  if (s != null && s.status_code == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 用户名=> " + s.user.bind_phone);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 用户名=> " + s.user.bind_phone + "\n";
    accounts[h] = s.user.bind_phone;
  } else {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 用户信息=> " + s.err_tips);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 用户信息=> " + s.err_tips + "\n";
  }
}
async function taskPage(H) {
  let s = getReqUrl(H);
  const V = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/common/v1/resource_package?referral&external_delivery&scenes=task_center_page&fe_version=10000473&" + s;
  let q = "";
  await getReqObject(V, q, H);
  if (signSwitchs[H] == 0) {
    $.log("[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("get", requestObjects[H], printCaller());
  let M = httpResult;
  if (M != null && M.code == 0) {
    $.log("[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 金币=> " + M.data.resource_package.token_coins_in_account.token_coins_in_account.num);
    dysclogs[H] += "[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 金币=> " + M.data.resource_package.token_coins_in_account.token_coins_in_account.num + "\n";
    $.log("[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 余额=> " + M.data.resource_package.token_coins_in_account.token_coins_in_account.rmb_credit / 100 + "元");
    dysclogs[H] += "[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 余额=> " + M.data.resource_package.token_coins_in_account.token_coins_in_account.rmb_credit / 100 + "元\n";
    let w = M.data.resource_package.task_panel.task_panel.tasks[0].task_list,
      r = w.find(N => N.key == "new_user_give_coin"),
      j = w.find(N => N.key == "continuous_sign_in_earn_coin"),
      Q = w.find(N => N.key == "best_buy_visit_earn_coin"),
      e = w.find(N => N.key == "second_kill_visit_earn_coin"),
      x = w.find(N => N.key == "open_treasure_earn_coin"),
      t = w.find(N => N.key == "ad_video_visit_earn_coin"),
      g = w.find(N => N.key == "feed_video_visit_earn_coin"),
      B = w.find(N => N.key == "mall_visit_earn_coin"),
      l = w.find(N => N.key == "coin_draw_lottery"),
      O = w.find(N => N.key == "new_prd_visit_earn_coin"),
      X = w.find(N => N.key == "product_search_earn_coin_v2");
    if (O && O.cur_status.task_status_code == 1) {
      let N = O.finish_action.report_wk.queries,
        o = O.name;
      await complete(H, N, o);
    }
    if (X && X.cur_status.task_status_code == 1) {
      let F = X.finish_action.report_wk.queries,
        E = X.name;
      await complete(H, F, E);
    }
    if (r && r.cur_status.task_status_code == 1) {
      let K = r.finish_action.report_wk.queries,
        b = r.name;
      await complete(H, K, b);
    }
    if (B && B.cur_status.task_status_code == 1) {
      let m = B.finish_action.report_wk.queries,
        d = B.name;
      await complete(H, m, d);
    }
    if (Q && Q.cur_status.task_status_code == 1) {
      let C = Q.finish_action.report_wk.queries,
        c = Q.name;
      await complete(H, C, c);
    }
    if (e && e.cur_status.task_status_code == 1) {
      let L = e.finish_action.report_wk.queries,
        Z = e.name;
      await complete(H, L, Z);
    }
    if (l) {
      if (l.cur_status.task_status_code == 1) {
        let D = l.finish_action.report_wk.queries,
          f = l.name;
        await draw(H, D, f);
      } else {
        if (l.cur_status.task_status_code == 3 && l.reward.reward_status == 2) {
          let P = l.finish_action.reward_wk.queries,
            I = l.name;
          await receiveDrawReward(H, P, I);
        }
      }
    }
    if (j && j.cur_status.task_status_code == 1) {
      let W = j.finish_action.report_wk.queries,
        u = j.name;
      await complete(H, W, u);
      const h0 = {
        biz: "5",
        task_item_id: "7401105022635704603",
        task_meta_id: "7348804947191922971"
      };
      for (let h2 = 0; h2 < 8 && adSwitchs[H]; h2++) {
        await $.wait(randomNum(5000, 10000));
        await complete(H, h0, "签到追加广告", h2 + 1);
      }
    }
    if (x && x.cur_status.text == "收金币" && x.cur_status.task_status_code == 1 && x.cur_status.mission_status != 2) {
      let h5 = x.finish_action.report_wk.queries,
        h6 = x.name,
        h7 = x.task_completion_info;
      h7.user_left_completions_times > 0 && (await complete(H, h5, h6));
      const h8 = {
        biz: "5",
        task_item_id: "7401105364055785755",
        task_meta_id: "7348804947191922971"
      };
      for (let hy = 0; hy < 10 && adSwitchs[H]; hy++) {
        await $.wait(randomNum(5000, 10000));
        await complete(H, h8, "宝箱追加广告", hy + 1);
      }
    }
    if (t && t.cur_status.task_status_code == 1 && t.cur_status.mission_status != 2) {
      let hY = t.finish_action.report_wk.queries,
        hs = t.name,
        hV = t.task_completion_info;
      hV.user_left_completions_times > 0 && (await complete(H, hY, hs));
      const hq = {
        biz: "5",
        task_item_id: "7401105364055785755",
        task_meta_id: "7348804947191922971"
      };
      for (let hw = 0; hw < 10 && adSwitchs[H]; hw++) {
        await $.wait(randomNum(5000, 10000));
        await complete(H, hq, "广告追加广告", hw + 1);
      }
    }
    if (g && g.cur_status.task_status_code == 1 && g.cur_status.mission_status != 2) {
      let hj = g.finish_action.report_wk.queries,
        hQ = g.name,
        hi = t.task_completion_info,
        he = 10;
      if (hi.user_left_completions_times > 0 && hi.user_left_completions_times < 6) {
        he = hi.user_left_completions_times;
      }
      for (let ht = 0; ht < he; ht++) {
        await $.wait(randomNum(5000, 8000));
        await complete(H, hj, hQ, ht + 1);
      }
    }
  } else {
    $.log("[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 任务中心=> " + M.msg);
    dysclogs[H] += "[账号" + (H + 1 < 10 ? "0" + (H + 1) : H + 1) + "]: 任务中心=> " + M.msg + "\n";
  }
}
async function complete(h, y, G, H) {
  let s = getReqUrl(h);
  const V = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/marketing/v1/report_task?task_meta_id=" + y.task_meta_id + "&biz_id=" + y.biz_id + "&task_item_id=" + y.task_item_id + "&" + s;
  let q = "body=null";
  await getReqObject(V, q, h);
  if (signSwitchs[h] == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[h], printCaller());
  let M = httpResult;
  if (M != null && M.code == 0) {
    let r = H ? "(" + H + "/" + "10)" : "";
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + r + "=> 获得" + M.data.RewardTexts);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + r + "=> 获得" + M.data.RewardTexts + "\n";
  } else {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> " + M.msg);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> " + M.msg + "\n";
    if (M.msg == "任务完成达到上限") {
      adSwitchs[h] = false;
    }
  }
}
async function draw(h, y, G) {
  let Y = getReqUrl(h);
  const s = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/marketing/v1/draw_lottery?request_tag_from=lynx&task_meta_id=" + y.task_meta_id + "&task_item_id=" + y.task_item_id + "&" + Y;
  let V = "{}";
  await getReqObject(s, V, h);
  if (signSwitchs[h] == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 天天抽奖=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[h], printCaller());
  let q = httpResult;
  q != null && q.code == 0 && q.data.RewardTexts ? ($.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> 次日领取可获得" + q.data.RewardTexts), dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> 次日领取可获得" + q.data.RewardTexts + "\n") : ($.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> " + q.msg), dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> " + q.msg + "\n");
}
async function receiveDrawReward(h, y, G) {
  let Y = getReqUrl(h);
  const s = "https://ecom5-normal-hl.ecombdapi.com/api/funshopping/marketing/v1/draw_mannual_apply_prize?task_meta_id=" + y.task_meta_id + "&task_item_id=" + y.task_item_id + "&" + Y;
  let V = "{}";
  await getReqObject(s, V, h);
  if (signSwitchs[h] == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 天天抽奖=> 签名服务异常，停止执行>>>");
    return;
  }
  await httpRequest("post", requestObjects[h], printCaller());
  let q = httpResult;
  if (q != null && q.code == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> 成功领取");
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> 成功领取\n";
  } else {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> " + q.msg);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + G + "=> " + q.msg + "\n";
  }
}
async function withdrarwInfo(h) {
  let G = getReqUrl(h);
  let H = encodeURIComponent("{\"WalletID\":\"e_commerce_wallet\",\"SubWalletID\":\"e_commerce_wallet\",\"AccountType\":\"gold\",\"EnterFrom\":\"wallet_profit\",\"TokenList\":\"\"}");
  const Y = "https://polaris.zijieapi.com/luckycat/polaris/wallet/e_commerce_user/v1/withdraw/page?" + G + "&BaseReq=" + H;
  let s = "";
  await getReqObject(Y, s, h);
  if (signSwitchs[h] == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 用户信息=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[h].headers["Content-Type"] = "application/json";
  await httpRequest("get", requestObjects[h], printCaller());
  let V = httpResult;
  if (V != null && V.err_no == 0) {
    let p = V.BaseRes.ProfitWalletData.AggreWalletData.Data.gold.Balance / 10000,
      w = V.BaseRes.WithdrawWays.Data.e_commerce_wallet.ThresholdWithdraws.find(r => r.PaymentMethodInfo.Name == "支付宝");
    if (w) {
      let j = "";
      if (p >= 30) {
        j = w.ChoiceList.find(Q => Q.Amount == 300000);
        if (j.Extra.Tag != "本月已提现，下月继续吧～" && j.Extra.Status != "lock_choiceitem") {
          await withdraw(h, w, j);
        }
      }
      if (p >= 15) {
        j = w.ChoiceList.find(x => x.Amount == 150000);
        j.Extra.Tag != "本月已提现，下月继续吧～" && j.Extra.Status != "lock_choiceitem" && (await withdraw(h, w, j));
      }
      if (p >= 1) {
        j = w.ChoiceList.find(g => g.Amount == 10000);
        if (j.Extra.Tag != "本月已提现，下月继续吧～" && j.Extra.Status != "lock_choiceitem") {
          await withdraw(h, w, j);
        }
      }
      if (p >= 0.3) {
        j = w.ChoiceList.find(l => l.Amount == 3000);
        if (j.Extra.Tag != "本月已提现，下月继续吧～" && j.Extra.Status != "lock_choiceitem") {
          await withdraw(h, w, j);
        }
      }
    }
  } else {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 提现中心=> " + V.err_tips);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 提现中心=> " + V.err_tips + "\n";
  }
}
async function withdraw(h, y, G) {
  let Y = getReqUrl(h),
    s = y.PaymentMethodInfo.BindingInfos[0];
  const V = "https://polaris.zijieapi.com/luckycat/polaris/wallet/e_commerce_user/v:version/withdraw/withdraw?" + Y;
  let q = {
    BaseReq: {
      Account: s.Account,
      UniqueID: "e_commerce_wallet-e_commerce_wallet-withdraw-99419660774219-" + ts13(),
      Category: G.Category,
      Amount: G.Amount,
      PaymentMethod: y.PaymentMethodInfo.PaymentMethod,
      WalletID: "e_commerce_wallet",
      SubWalletID: "e_commerce_wallet",
      AccountType: G.AccountType,
      AccountMask: s.AccountMask
    }
  };
  await getReqObject(V, JSON.stringify(q), h);
  if (signSwitchs[h] == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 提现=> 签名服务异常，停止执行>>>");
    return;
  }
  requestObjects[h].headers["Content-Type"] = "application/json";
  requestObjects[h].headers["Content-Length"] = JSON.stringify(q).length;
  await httpRequest("post", requestObjects[h], printCaller());
  let M = httpResult;
  if (M != null && M.err_no == 0) {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 提现=> 成功提现" + G.Amount / 10000 + "元");
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 提现=> 成功提现" + G.Amount / 10000 + "元\n";
  } else {
    $.log("[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: 提现=> " + M.err_tips);
    dysclogs[h] += "[账号" + (h + 1 < 10 ? "0" + (h + 1) : h + 1) + "]: " + titleName + "=> " + M.err_tips + "\n";
  }
}
function getScriptAuth(h, y, G) {
  return new Promise((Y, s) => {
    const q = apiHost + "/script/permissions/lastest",
      M = {
        appName: h,
        userId: y,
        activityCode: G,
        version: version
      };
    const w = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const r = {
      url: q,
      headers: w,
      body: JSON.stringify(M)
    };
    $.post(r, async (j, Q, i) => {
      if (i && i != null && i.replace(/\"/g, "").length > 50) {
        const g = i.replace(/\"/g, "").slice(34),
          B = new Base64();
        result = JSON.parse(B.decode(g));
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
        } catch (N) {
          $.log(N);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      Y();
    });
  });
}
function runComplete(h, y) {
  return new Promise((H, Y) => {
    const V = apiHost + "/script/run/add",
      q = {
        appName: h,
        userId: y,
        activityCode: activeCode,
        version: version
      };
    const p = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const w = {
      url: V,
      headers: p,
      body: JSON.stringify(q)
    };
    $.post(w, async (r, j, Q) => {
      H();
    });
  });
}
function checkAddress(h, y) {
  return new Promise((H, Y) => {
    const q = setTimeout(() => {
        H(false);
      }, y),
      M = http.get(h, p => {
        clearTimeout(q);
        if (p.statusCode === 404) {
          H(true);
        } else {
          H(false);
        }
      });
    M.on("error", p => {
      clearTimeout(q);
      H(false);
    });
    M.on("timeout", () => {
      M.abort();
      Y(new Error("请求超时"));
    });
  });
}
async function fetchRequest(h, y = 3000) {
  return new Promise((H, Y) => {
    const V = {
      url: h + "/docs"
    };
    setTimeout(() => {
      H(false);
    }, y);
    $.get(V, async (q, M, p) => {
      if (M.status == 401) {
        H(true);
      } else {
        H(false);
      }
    });
  });
}
async function httpClientRequest(h, y = 3000) {
  return new Promise((H, Y) => {
    const V = {
      url: h + "/"
    };
    setTimeout(() => {
      H(false);
    }, y);
    $httpClient.get(V, async (q, M, p) => {
      if (p == "{\"detail\":\"Not Found\"}") {
        H(true);
      } else {
        H(false);
      }
    });
  });
}
async function redisGet(h, y, G) {
  return new Promise((Y, s) => {
    const V = apiHost + "/redis/hash/get/" + y + "/" + G,
      q = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const M = {
      url: V,
      headers: q
    };
    $.get(M, async (w, r, j) => {
      const x = j.replace(/\"/g, "");
      answerTexts[h] = x;
      Y();
    });
  });
}
function redisSet(h, y, G) {
  return new Promise((Y, s) => {
    const q = apiHost + "/redis/hash/set",
      M = {
        key: h,
        hashKey: y,
        hashValue: G
      };
    const w = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const r = {
      url: q,
      headers: w,
      body: JSON.stringify(M)
    };
    $.post(r, async (j, Q, i) => {
      Y();
    });
  });
}
function redisPop(h) {
  return new Promise((G, H) => {
    const V = apiHost + "/redis/set/pop/" + h,
      q = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const M = {
      url: V,
      headers: q
    };
    $.get(M, async (w, r, j) => {
      const Q = j.replace(/\"/g, "");
      popCookie = Q;
      G();
    });
  });
}
async function getReqObject(G, H, Y) {
  let V = "com.ss.android.ugc.livelite/280705 (Linux; U; Android 12; zh_CN; 22081212C; Build/SKQ1.220303.001; Cronet/TTNetVersion:6b53ef0a 2024-03-04 QuicVersion:f0528f26 2024-02-27)";
  dyscapp[Y].ua && dyscapp[Y].ua != "" && (V = dyscapp[Y].ua);
  let q = getHostname(G),
    M = ts13();
  const p = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Accept-Encoding": "gzip",
    "User-Agent": V,
    Host: q,
    "passport-sdk-version": "203190",
    "sdk-version": "2",
    "X-SS-REQ-TICKET": M,
    "X-Tt-Token": dyscapp[Y].token,
    "x-vc-bdturing-sdk-version": "3.7.0.cn"
  };
  const w = {
    url: G,
    headers: p
  };
  H && (w.body = H, w.headers["X-SS-STUB"] = MD5_Encrypt(H).toUpperCase());
  await getSixGodHeader(Y, G, w.headers);
  let j = requestSigns[Y];
  if (j.length < 200) {
    if (j.indexOf("unable to find process with name") != -1) {
      $.log("[账号" + (Y + 1 < 10 ? "0" + (Y + 1) : Y + 1) + "]: 签名获取失败原因=> 请检查签名APP是否已启动");
    } else {
      if (j.indexOf("unable to connect to remote frida-server") != -1) {
        $.log("[账号" + (Y + 1 < 10 ? "0" + (Y + 1) : Y + 1) + "]: 签名获取失败原因=> 请检查是否映射成功");
      } else {
        $.log("[账号" + (Y + 1 < 10 ? "0" + (Y + 1) : Y + 1) + "]: 签名获取失败原因=> " + j);
      }
    }
  }
  if (j && j != "Internal Server Error") {
    const l = convertStringToJson(j);
    w.headers["X-Argus"] = l["X-Argus"];
    w.headers["X-Gorgon"] = l["X-Gorgon"];
    if (l["X-Gorgon"] == undefined) {
      signSwitchs[Y] = 0;
    }
    w.headers["X-Helios"] = l["X-Helios"];
    w.headers["X-Khronos"] = l["X-Khronos"];
    w.headers["X-Ladon"] = l["X-Ladon"];
    w.headers["X-Medusa"] = l["X-Medusa"];
    let O = dyscapp[Y].token.substring(2, 34);
    w.headers.Cookie = "sessionid=" + O + "; sessionid_ss=" + O;
  } else {
    signSwitchs[Y] = 0;
  }
  requestObjects[Y] = w;
  return w;
}
function getReqObject_(G, H, Y) {
  let V = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  dyscapp[Y].ua && dyscapp[Y].ua != "" && (V = dyscapp[Y].ua);
  let q = getHostname(G);
  const M = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": V,
    Authorization: dyscapp[Y].auth,
    Host: q
  };
  const p = {};
  p.url = G;
  p.headers = M;
  let w = p;
  if (H) {
    w.body = H;
  }
  requestObjects[Y] = w;
  return w;
}
async function httpRequest(h, y, G) {
  httpResult = null;
  return new Promise(Y => {
    $[h](y, async (q, M, p) => {
      try {
        if (q) {
          $.log(G + ": " + h + "请求失败");
          $.log(JSON.stringify(q));
          $.logErr(q);
        } else {
          if (safeGet(p)) {
            httpResult = JSON.parse(p);
            debug == 1 && $.log(httpResult);
          } else {
            const t = new URL(y.url);
            $.log(t.pathname + "发起" + h + "请求时，出现错误，请处理");
          }
        }
      } catch (l) {
        $.logErr(l, M);
      } finally {
        Y(httpResult);
      }
    });
  });
}
async function selectChannel(h, y) {
  if (channels_status[h] == 0) {
    await getSign_(h, y);
  } else {
    await getSign(h, y);
  }
}
function getSign_(h, y) {
  return new Promise((H, Y) => {
    function V(q) {
      let p = q.toString("utf8");
      requestSigns[h] = p;
      wss[h].removeListener("message", V);
      H(p);
    }
    wss[h].on("message", V);
    if (wss[h].readyState === 1) {
      const q = {
        method: appName,
        params: {}
      };
      q.params.content = y;
      q.params.appName = appName;
      q.params.uuid = userId;
      wss[h].send(JSON.stringify(q), M => {
        if (M) {
          Y(M);
        }
      });
    } else {
      H(getSign(h, y));
      wss[h].removeListener("message", V);
    }
  });
}
function getSign(h, y) {
  return new Promise((H, Y) => {
    const V = apiHost + "/sign/dysc/six",
      q = {
        content: y,
        appName: appName,
        uuid: userId
      };
    const p = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const w = {
      url: V,
      headers: p,
      body: JSON.stringify(q)
    };
    $.post(w, async (r, j, Q) => {
      const x = Q.replace(/\"/g, "");
      requestSigns[h] = x;
      H();
    });
  });
}
function getCapture(h, y) {
  return new Promise((H, Y) => {
    const V = apiHost + "/bytes/capture",
      q = {
        content: y,
        appName: appName,
        uuid: userId
      };
    const p = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const w = {
      url: V,
      headers: p,
      body: JSON.stringify(q)
    };
    $.post(w, async (r, j, Q) => {
      const e = Q.replace(/\"/g, "");
      requestSigns[h] = e;
      H();
    });
  });
}
function sortUrlParams(h, y, G) {
  const Y = url2obj(h);
  y.forEach(q => {
    delete Y[q];
  });
  Object.assign(Y, G);
  const s = Object.keys(Y).sort();
  const V = s.map(q => q + "=" + Y[q]).join("&");
  return V;
}
function url2obj(y) {
  y = y.replace(/\"/g, "");
  var Y,
    s = {},
    V = y.slice(y.indexOf("?") + 1).split("&");
  for (var q = 0; q < V.length; q++) {
    Y = V[q].split("=");
    s[Y[0]] = Y[1];
  }
  return s;
}
function convertStringToJson(y) {
  const G = {};
  G.OZghA = function (q, M) {
    return q === M;
  };
  G.hsBJX = "GgaZn";
  const H = G,
    Y = y.replace(/[{} ]/g, "");
  const s = Y.split(",");
  const V = {};
  s.forEach(q => {
    if (H.OZghA(H.hsBJX, H.hsBJX)) {
      const M = q.split(/=(.*)/),
        [p, w] = M;
      V[p] = w;
    } else {
      G = H.env.APIHOST;
    }
  });
  return V;
}
function getHostname(h) {
  let G = h.substr(h.indexOf("//") + 2),
    H = G.substr(0, G.indexOf("/"));
  let Y = "",
    s = H.indexOf(":");
  if (s > 0) {
    Y = H.substr(0, s);
  } else {
    Y = H;
  }
  return Y;
}
function calculateTimeDifference(y, G) {
  var M = new Date(y);
  var w = new Date(G);
  var p = w - M;
  var q = Math.floor(p / 1000);
  return q;
}
function cutString(h, y) {
  if (h.length * 2 <= y) {
    return h;
  }
  var H = 0,
    Y = "";
  for (var V = 0; V < h.length; V++) {
    Y = Y + h.charAt(V);
    if (h.charCodeAt(V) > 128) {
      H = H + 2;
      if (H >= y) {
        return Y.substring(0, Y.length - 1) + "...";
      }
    } else {
      H = H + 1;
      if (H >= y) {
        return Y.substring(0, Y.length - 2) + "...";
      }
    }
  }
  return Y;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(y) {
  try {
    if (typeof JSON.parse(y) == "object") {
      return true;
    }
  } catch (V) {
    console.log(V);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(h) {
  var G = Object.keys(h).map(function (H) {
    return encodeURIComponent(H) + "=" + encodeURIComponent(h[H]);
  }).join("&");
  return G;
}
function compileStr(h) {
  var G = String.fromCharCode(h.charCodeAt(0) + h.length);
  for (var H = 1; H < h.length; H++) {
    G += String.fromCharCode(h.charCodeAt(H) + h.charCodeAt(H - 1));
  }
  return escape(G);
}
function uncompileStr(h) {
  h = unescape(h);
  var G = String.fromCharCode(h.charCodeAt(0) - h.length);
  for (var H = 1; H < h.length; H++) {
    G += String.fromCharCode(h.charCodeAt(H) - G.charCodeAt(H - 1));
  }
  return G;
}
function randomNum(h, y) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * h + 1);
      break;
    case 2:
      return parseInt(Math.random() * (y - h + 1) + h);
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
  function y() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return y() + y() + "-" + y() + "-" + y() + "-" + y() + "-" + y() + y() + y();
}
function phone_num(y) {
  if (y.length == 11) {
    let s = y.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return s;
  } else {
    return y;
  }
}
function txt_api(h) {
  return new Promise((G, H) => {
    const V = "https://v1.hitokoto.cn/?c=e",
      q = {
        accept: "application/json"
      };
    const M = {
      url: V,
      headers: q
    };
    $.get(M, async (w, r, j) => {
      let x = JSON.parse(j),
        t = x.hitokoto;
      contents[h] = t + " " + t;
      G();
    });
  });
}
function getTime_8() {
  return new Promise((y, G) => {
    const s = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      V = {};
    V.url = s;
    const q = V;
    $.get(q, async (M, p, w) => {
      y(w);
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
async function sendMsg(h) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, h);
      } else {
        $.msg($.name, "", h);
      }
    } else {
      $.log(h);
    }
  }
}
async function wxPush(h, y, G) {
  return new Promise((Y, s) => {
    const q = "https://wxpusher.zjiecode.com/api/send/message",
      M = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: y,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [G],
        verifyPay: false
      };
    const w = {
      "Content-Type": "application/json"
    };
    const r = {
      url: q,
      headers: w,
      body: JSON.stringify(M)
    };
    $.post(r, async (j, Q, e) => {
      Y();
    });
  });
}
function randomString(y, G) {
  G = G || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  for (let V = 0; V < y; V++) {
    let M = Math.floor(Math.random() * G.length);
    s += G.substring(M, M + 1);
  }
  return s;
}
function MD5_Encrypt(Y) {
  function Q(hO, hX) {
    return hO << hX | hO >>> 32 - hX;
  }
  function X(hO, hX) {
    var hN, ho, hA, hF, hE;
    hA = 2147483648 & hO;
    hF = 2147483648 & hX;
    hN = 1073741824 & hO;
    ho = 1073741824 & hX;
    hE = (1073741823 & hO) + (1073741823 & hX);
    return hN & ho ? 2147483648 ^ hE ^ hA ^ hF : hN | ho ? 1073741824 & hE ? 3221225472 ^ hE ^ hA ^ hF : 1073741824 ^ hE ^ hA ^ hF : hE ^ hA ^ hF;
  }
  function R(hO, hX, hN) {
    return hO & hX | ~hO & hN;
  }
  function T(hO, hX, hN) {
    return hO & hN | hX & ~hN;
  }
  function Z(hO, hX, hN) {
    return hO ^ hX ^ hN;
  }
  function S(hO, hX, hN) {
    return hX ^ (hO | ~hN);
  }
  function P(hO, hX, hN, ho, hA, hF, hE) {
    hO = X(hO, X(X(R(hX, hN, ho), hA), hE));
    return X(Q(hO, hF), hX);
  }
  function U(hO, hX, hN, ho, hA, hF, hE) {
    hO = X(hO, X(X(T(hX, hN, ho), hA), hE));
    return X(Q(hO, hF), hX);
  }
  function W(hO, hX, hN, ho, hA, hF, hE) {
    hO = X(hO, X(X(Z(hX, hN, ho), hA), hE));
    return X(Q(hO, hF), hX);
  }
  function h0(hO, hX, hN, ho, hA, hF, hE) {
    hO = X(hO, X(X(S(hX, hN, ho), hA), hE));
    return X(Q(hO, hF), hX);
  }
  function h1(hO) {
    for (var hX, hN = hO.length, ho = hN + 8, hA = (ho - ho % 64) / 64, hF = 16 * (hA + 1), hE = new Array(hF - 1), hR = 0, hv = 0; hN > hv;) {
      hX = (hv - hv % 4) / 4;
      hR = hv % 4 * 8;
      hE[hX] = hE[hX] | hO.charCodeAt(hv) << hR;
      hv++;
    }
    hX = (hv - hv % 4) / 4;
    hR = hv % 4 * 8;
    hE[hX] = hE[hX] | 128 << hR;
    hE[hF - 2] = hN << 3;
    hE[hF - 1] = hN >>> 29;
    return hE;
  }
  function h2(hO) {
    var hX,
      hN,
      ho = "",
      hA = "";
    for (hN = 0; 3 >= hN; hN++) {
      hX = hO >>> 8 * hN & 255;
      hA = "0" + hX.toString(16);
      ho += hA.substr(hA.length - 2, 2);
    }
    return ho;
  }
  function h3(hO) {
    hO = hO.replace(/\r\n/g, "\n");
    for (var hN = "", ho = 0; ho < hO.length; ho++) {
      var hA = hO.charCodeAt(ho);
      128 > hA ? hN += String.fromCharCode(hA) : hA > 127 && 2048 > hA ? (hN += String.fromCharCode(hA >> 6 | 192), hN += String.fromCharCode(63 & hA | 128)) : (hN += String.fromCharCode(hA >> 12 | 224), hN += String.fromCharCode(hA >> 6 & 63 | 128), hN += String.fromCharCode(63 & hA | 128));
    }
    return hN;
  }
  var h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    hh,
    hy,
    hG,
    hH = [],
    hY = 7,
    hs = 12,
    hV = 17,
    hq = 22,
    hM = 5,
    hp = 9,
    hw = 14,
    hr = 20,
    hj = 4,
    hQ = 11,
    hi = 16,
    he = 23,
    hx = 6,
    ht = 10,
    hg = 15,
    hB = 21;
  for (Y = h3(Y), hH = h1(Y), h9 = 1732584193, hh = 4023233417, hy = 2562383102, hG = 271733878, h4 = 0; h4 < hH.length; h4 += 16) {
    h5 = h9;
    h6 = hh;
    h7 = hy;
    h8 = hG;
    h9 = P(h9, hh, hy, hG, hH[h4 + 0], hY, 3614090360);
    hG = P(hG, h9, hh, hy, hH[h4 + 1], hs, 3905402710);
    hy = P(hy, hG, h9, hh, hH[h4 + 2], hV, 606105819);
    hh = P(hh, hy, hG, h9, hH[h4 + 3], hq, 3250441966);
    h9 = P(h9, hh, hy, hG, hH[h4 + 4], hY, 4118548399);
    hG = P(hG, h9, hh, hy, hH[h4 + 5], hs, 1200080426);
    hy = P(hy, hG, h9, hh, hH[h4 + 6], hV, 2821735955);
    hh = P(hh, hy, hG, h9, hH[h4 + 7], hq, 4249261313);
    h9 = P(h9, hh, hy, hG, hH[h4 + 8], hY, 1770035416);
    hG = P(hG, h9, hh, hy, hH[h4 + 9], hs, 2336552879);
    hy = P(hy, hG, h9, hh, hH[h4 + 10], hV, 4294925233);
    hh = P(hh, hy, hG, h9, hH[h4 + 11], hq, 2304563134);
    h9 = P(h9, hh, hy, hG, hH[h4 + 12], hY, 1804603682);
    hG = P(hG, h9, hh, hy, hH[h4 + 13], hs, 4254626195);
    hy = P(hy, hG, h9, hh, hH[h4 + 14], hV, 2792965006);
    hh = P(hh, hy, hG, h9, hH[h4 + 15], hq, 1236535329);
    h9 = U(h9, hh, hy, hG, hH[h4 + 1], hM, 4129170786);
    hG = U(hG, h9, hh, hy, hH[h4 + 6], hp, 3225465664);
    hy = U(hy, hG, h9, hh, hH[h4 + 11], hw, 643717713);
    hh = U(hh, hy, hG, h9, hH[h4 + 0], hr, 3921069994);
    h9 = U(h9, hh, hy, hG, hH[h4 + 5], hM, 3593408605);
    hG = U(hG, h9, hh, hy, hH[h4 + 10], hp, 38016083);
    hy = U(hy, hG, h9, hh, hH[h4 + 15], hw, 3634488961);
    hh = U(hh, hy, hG, h9, hH[h4 + 4], hr, 3889429448);
    h9 = U(h9, hh, hy, hG, hH[h4 + 9], hM, 568446438);
    hG = U(hG, h9, hh, hy, hH[h4 + 14], hp, 3275163606);
    hy = U(hy, hG, h9, hh, hH[h4 + 3], hw, 4107603335);
    hh = U(hh, hy, hG, h9, hH[h4 + 8], hr, 1163531501);
    h9 = U(h9, hh, hy, hG, hH[h4 + 13], hM, 2850285829);
    hG = U(hG, h9, hh, hy, hH[h4 + 2], hp, 4243563512);
    hy = U(hy, hG, h9, hh, hH[h4 + 7], hw, 1735328473);
    hh = U(hh, hy, hG, h9, hH[h4 + 12], hr, 2368359562);
    h9 = W(h9, hh, hy, hG, hH[h4 + 5], hj, 4294588738);
    hG = W(hG, h9, hh, hy, hH[h4 + 8], hQ, 2272392833);
    hy = W(hy, hG, h9, hh, hH[h4 + 11], hi, 1839030562);
    hh = W(hh, hy, hG, h9, hH[h4 + 14], he, 4259657740);
    h9 = W(h9, hh, hy, hG, hH[h4 + 1], hj, 2763975236);
    hG = W(hG, h9, hh, hy, hH[h4 + 4], hQ, 1272893353);
    hy = W(hy, hG, h9, hh, hH[h4 + 7], hi, 4139469664);
    hh = W(hh, hy, hG, h9, hH[h4 + 10], he, 3200236656);
    h9 = W(h9, hh, hy, hG, hH[h4 + 13], hj, 681279174);
    hG = W(hG, h9, hh, hy, hH[h4 + 0], hQ, 3936430074);
    hy = W(hy, hG, h9, hh, hH[h4 + 3], hi, 3572445317);
    hh = W(hh, hy, hG, h9, hH[h4 + 6], he, 76029189);
    h9 = W(h9, hh, hy, hG, hH[h4 + 9], hj, 3654602809);
    hG = W(hG, h9, hh, hy, hH[h4 + 12], hQ, 3873151461);
    hy = W(hy, hG, h9, hh, hH[h4 + 15], hi, 530742520);
    hh = W(hh, hy, hG, h9, hH[h4 + 2], he, 3299628645);
    h9 = h0(h9, hh, hy, hG, hH[h4 + 0], hx, 4096336452);
    hG = h0(hG, h9, hh, hy, hH[h4 + 7], ht, 1126891415);
    hy = h0(hy, hG, h9, hh, hH[h4 + 14], hg, 2878612391);
    hh = h0(hh, hy, hG, h9, hH[h4 + 5], hB, 4237533241);
    h9 = h0(h9, hh, hy, hG, hH[h4 + 12], hx, 1700485571);
    hG = h0(hG, h9, hh, hy, hH[h4 + 3], ht, 2399980690);
    hy = h0(hy, hG, h9, hh, hH[h4 + 10], hg, 4293915773);
    hh = h0(hh, hy, hG, h9, hH[h4 + 1], hB, 2240044497);
    h9 = h0(h9, hh, hy, hG, hH[h4 + 8], hx, 1873313359);
    hG = h0(hG, h9, hh, hy, hH[h4 + 15], ht, 4264355552);
    hy = h0(hy, hG, h9, hh, hH[h4 + 6], hg, 2734768916);
    hh = h0(hh, hy, hG, h9, hH[h4 + 13], hB, 1309151649);
    h9 = h0(h9, hh, hy, hG, hH[h4 + 4], hx, 4149444226);
    hG = h0(hG, h9, hh, hy, hH[h4 + 11], ht, 3174756917);
    hy = h0(hy, hG, h9, hh, hH[h4 + 2], hg, 718787259);
    hh = h0(hh, hy, hG, h9, hH[h4 + 9], hB, 3951481745);
    h9 = X(h9, h5);
    hh = X(hh, h6);
    hy = X(hy, h7);
    hG = X(hG, h8);
  }
  var hl = h2(h9) + h2(hh) + h2(hy) + h2(hG);
  return hl.toLowerCase();
}
function SHA256(h) {
  var G = 8,
    H = 0;
  function Y(g, B) {
    var l = (g & 65535) + (B & 65535),
      O = (g >> 16) + (B >> 16) + (l >> 16);
    return O << 16 | l & 65535;
  }
  function V(g, B) {
    return g >>> B | g << 32 - B;
  }
  function q(g, B) {
    return g >>> B;
  }
  function M(g, B, l) {
    return g & B ^ ~g & l;
  }
  function p(g, B, l) {
    return g & B ^ g & l ^ B & l;
  }
  function w(g) {
    return V(g, 2) ^ V(g, 13) ^ V(g, 22);
  }
  function r(g) {
    return V(g, 6) ^ V(g, 11) ^ V(g, 25);
  }
  function j(g) {
    return V(g, 7) ^ V(g, 18) ^ q(g, 3);
  }
  function Q(g) {
    return V(g, 17) ^ V(g, 19) ^ q(g, 10);
  }
  function i(B, O) {
    var N = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      o = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      A = new Array(64),
      F,
      E,
      v,
      C,
      T,
      L,
      Z,
      k,
      D,
      z,
      n,
      P;
    B[O >> 5] |= 128 << 24 - O % 32;
    B[(O + 64 >> 9 << 4) + 15] = O;
    for (var D = 0; D < B.length; D += 16) {
      F = o[0];
      E = o[1];
      v = o[2];
      C = o[3];
      T = o[4];
      L = o[5];
      Z = o[6];
      k = o[7];
      for (var z = 0; z < 64; z++) {
        if (z < 16) {
          A[z] = B[z + D];
        } else {
          A[z] = Y(Y(Y(Q(A[z - 2]), A[z - 7]), j(A[z - 15])), A[z - 16]);
        }
        n = Y(Y(Y(Y(k, r(T)), M(T, L, Z)), N[z]), A[z]);
        P = Y(w(F), p(F, E, v));
        k = Z;
        Z = L;
        L = T;
        T = Y(C, n);
        C = v;
        v = E;
        E = F;
        F = Y(n, P);
      }
      o[0] = Y(F, o[0]);
      o[1] = Y(E, o[1]);
      o[2] = Y(v, o[2]);
      o[3] = Y(C, o[3]);
      o[4] = Y(T, o[4]);
      o[5] = Y(L, o[5]);
      o[6] = Y(Z, o[6]);
      o[7] = Y(k, o[7]);
    }
    return o;
  }
  function e(g) {
    var O = Array(),
      X = (1 << G) - 1;
    for (var N = 0; N < g.length * G; N += G) {
      O[N >> 5] |= (g.charCodeAt(N / G) & X) << 24 - N % 32;
    }
    return O;
  }
  function x(g) {
    g = g.replace(/\r\n/g, "\n");
    var l = "";
    for (var O = 0; O < g.length; O++) {
      var X = g.charCodeAt(O);
      if (X < 128) {
        l += String.fromCharCode(X);
      } else {
        if (X > 127 && X < 2048) {
          l += String.fromCharCode(X >> 6 | 192);
          l += String.fromCharCode(X & 63 | 128);
        } else {
          l += String.fromCharCode(X >> 12 | 224);
          l += String.fromCharCode(X >> 6 & 63 | 128);
          l += String.fromCharCode(X & 63 | 128);
        }
      }
    }
    return l;
  }
  function t(g) {
    var l = H ? "0123456789ABCDEF" : "0123456789abcdef",
      O = "";
    for (var X = 0; X < g.length * 4; X++) {
      O += l.charAt(g[X >> 2] >> (3 - X % 4) * 8 + 4 & 15) + l.charAt(g[X >> 2] >> (3 - X % 4) * 8 & 15);
    }
    return O;
  }
  h = x(h);
  return t(i(e(h), h.length * G));
}
function SHA1(h) {
  function G(R, v) {
    var K = R << v | R >>> 32 - v;
    return K;
  }
  function H(R) {
    var v = "",
      K,
      b,
      a;
    for (K = 0; K <= 6; K += 2) {
      b = R >>> K * 4 + 4 & 15;
      a = R >>> K * 4 & 15;
      v += b.toString(16) + a.toString(16);
    }
    return v;
  }
  function Y(R) {
    var b = "",
      a,
      m;
    for (a = 7; a >= 0; a--) {
      m = R >>> a * 4 & 15;
      b += m.toString(16);
    }
    return b;
  }
  function s(R) {
    R = R.replace(/\r\n/g, "\n");
    var K = "";
    for (var b = 0; b < R.length; b++) {
      var a = R.charCodeAt(b);
      if (a < 128) {
        K += String.fromCharCode(a);
      } else {
        if (a > 127 && a < 2048) {
          K += String.fromCharCode(a >> 6 | 192);
          K += String.fromCharCode(a & 63 | 128);
        } else {
          K += String.fromCharCode(a >> 12 | 224);
          K += String.fromCharCode(a >> 6 & 63 | 128);
          K += String.fromCharCode(a & 63 | 128);
        }
      }
    }
    return K;
  }
  var V,
    q,
    M,
    p = new Array(80);
  var w = 1732584193,
    r = 4023233417,
    Q = 2562383102,
    e = 271733878,
    x = 3285377520,
    t,
    g,
    l,
    O,
    X,
    N;
  h = s(h);
  var o = h.length,
    F = new Array();
  for (q = 0; q < o - 3; q += 4) {
    M = h.charCodeAt(q) << 24 | h.charCodeAt(q + 1 < 10 ? "0" + (q + 1) : q + 1) << 16 | h.charCodeAt(q + 2) << 8 | h.charCodeAt(q + 3);
    F.push(M);
  }
  switch (o % 4) {
    case 0:
      q = 2147483648;
      break;
    case 1:
      q = h.charCodeAt(o - 1) << 24 | 8388608;
      break;
    case 2:
      q = h.charCodeAt(o - 2) << 24 | h.charCodeAt(o - 1) << 16 | 32768;
      break;
    case 3:
      q = h.charCodeAt(o - 3) << 24 | h.charCodeAt(o - 2) << 16 | h.charCodeAt(o - 1) << 8 | 128;
      break;
  }
  F.push(q);
  while (F.length % 16 != 14) {
    F.push(0);
  }
  F.push(o >>> 29);
  F.push(o << 3 & 4294967295);
  for (V = 0; V < F.length; V += 16) {
    for (q = 0; q < 16; q++) {
      p[q] = F[V + q];
    }
    for (q = 16; q <= 79; q++) {
      p[q] = G(p[q - 3] ^ p[q - 8] ^ p[q - 14] ^ p[q - 16], 1);
    }
    t = w;
    g = r;
    l = Q;
    O = e;
    X = x;
    for (q = 0; q <= 19; q++) {
      N = G(t, 5) + (g & l | ~g & O) + X + p[q] + 1518500249 & 4294967295;
      X = O;
      O = l;
      l = G(g, 30);
      g = t;
      t = N;
    }
    for (q = 20; q <= 39; q++) {
      N = G(t, 5) + (g ^ l ^ O) + X + p[q] + 1859775393 & 4294967295;
      X = O;
      O = l;
      l = G(g, 30);
      g = t;
      t = N;
    }
    for (q = 40; q <= 59; q++) {
      N = G(t, 5) + (g & l | g & O | l & O) + X + p[q] + 2400959708 & 4294967295;
      X = O;
      O = l;
      l = G(g, 30);
      g = t;
      t = N;
    }
    for (q = 60; q <= 79; q++) {
      N = G(t, 5) + (g ^ l ^ O) + X + p[q] + 3395469782 & 4294967295;
      X = O;
      O = l;
      l = G(g, 30);
      g = t;
      t = N;
    }
    w = w + t & 4294967295;
    r = r + g & 4294967295;
    Q = Q + l & 4294967295;
    e = e + O & 4294967295;
    x = x + X & 4294967295;
  }
  var N = Y(w) + Y(r) + Y(Q) + Y(e) + Y(x);
  return N.toLowerCase();
}
function Base64() {
  var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (G) {
    var j = "";
    var Y, s, V, q, M, p, w;
    var r = 0;
    G = utf8Encode(G);
    while (r < G.length) {
      Y = G.charCodeAt(r++);
      s = G.charCodeAt(r++);
      V = G.charCodeAt(r++);
      q = Y >> 2;
      M = (Y & 3) << 4 | s >> 4;
      p = (s & 15) << 2 | V >> 6;
      w = V & 63;
      if (isNaN(s)) {
        p = w = 64;
      } else {
        if (isNaN(V)) {
          w = 64;
        }
      }
      j = j + y.charAt(q) + y.charAt(M) + y.charAt(p) + y.charAt(w);
    }
    return j;
  };
  this.decode = function (G) {
    var j = "";
    var p, w, r;
    var Y, s, V, q;
    var M = 0;
    G = G.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (M < G.length) {
      Y = y.indexOf(G.charAt(M++));
      s = y.indexOf(G.charAt(M++));
      V = y.indexOf(G.charAt(M++));
      q = y.indexOf(G.charAt(M++));
      p = Y << 2 | s >> 4;
      w = (s & 15) << 4 | V >> 2;
      r = (V & 3) << 6 | q;
      j = j + String.fromCharCode(p);
      V !== 64 && (j = j + String.fromCharCode(w));
      if (q !== 64) {
        j = j + String.fromCharCode(r);
      }
    }
    j = utf8Decode(j);
    return j;
  };
  utf8Encode = function (G) {
    G = G.replace(/\r\n/g, "\n");
    var Y = "";
    for (var s = 0; s < G.length; s++) {
      var V = G.charCodeAt(s);
      if (V < 128) {
        Y += String.fromCharCode(V);
      } else {
        if (V > 127 && V < 2048) {
          Y += String.fromCharCode(V >> 6 | 192);
          Y += String.fromCharCode(V & 63 | 128);
        } else {
          Y += String.fromCharCode(V >> 12 | 224);
          Y += String.fromCharCode(V >> 6 & 63 | 128);
          Y += String.fromCharCode(V & 63 | 128);
        }
      }
    }
    return Y;
  };
  utf8Decode = function (G) {
    var Y = "";
    var s = 0;
    var M = 0;
    var V = 0;
    var q = 0;
    while (s < G.length) {
      M = G.charCodeAt(s);
      if (M < 128) {
        Y += String.fromCharCode(M);
        s++;
      } else {
        if (M > 191 && M < 224) {
          V = G.charCodeAt(s + 1 < 10 ? "0" + (s + 1) : s + 1);
          Y += String.fromCharCode((M & 31) << 6 | V & 63);
          s += 2;
        } else {
          V = G.charCodeAt(s + 1 < 10 ? "0" + (s + 1) : s + 1);
          q = G.charCodeAt(s + 2);
          Y += String.fromCharCode((M & 15) << 12 | (V & 63) << 6 | q & 63);
          s += 3;
        }
      }
    }
    return Y;
  };
}
function Env(h, y) {
  class H {
    constructor(Y) {
      this.env = Y;
    }
    send(Y, s = "GET") {
      Y = typeof Y === "string" ? {
        url: Y
      } : Y;
      let q = this.get;
      if (s === "POST") {
        q = this.post;
      }
      return new Promise((p, w) => {
        q.call(this, Y, (j, Q, i) => {
          if (j) {
            w(j);
          } else {
            p(Q);
          }
        });
      });
    }
    get(Y) {
      return this.send.call(this.env, Y);
    }
    post(Y) {
      return this.send.call(this.env, Y, "POST");
    }
  }
  return new class {
    constructor(Y, s) {
      this.name = Y;
      this.http = new H(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, s);
      const V = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(V);
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
    toObj(Y, s = null) {
      try {
        return JSON.parse(Y);
      } catch {
        return s;
      }
    }
    toStr(Y, s = null) {
      try {
        return JSON.stringify(Y);
      } catch {
        return s;
      }
    }
    getjson(Y, s) {
      let q = s;
      const M = this.getdata(Y);
      if (M) {
        try {
          q = JSON.parse(this.getdata(Y));
        } catch {}
      }
      return q;
    }
    setjson(Y, s) {
      try {
        return this.setdata(JSON.stringify(Y), s);
      } catch {
        return false;
      }
    }
    getScript(Y) {
      return new Promise(V => {
        const p = {
          url: Y
        };
        this.get(p, (w, r, j) => V(j));
      });
    }
    runScript(Y, s) {
      return new Promise(M => {
        let w = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        w = w ? w.replace(/\n/g, "").trim() : w;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? r * 1 : 20;
        r = s && s.timeout ? s.timeout : r;
        const [j, Q] = w.split("@"),
          i = {
            script_text: Y,
            mock_type: "cron",
            timeout: r
          };
        const e = {
          "X-Key": j,
          Accept: "*/*"
        };
        const x = {
          url: "http: //" + Q + "/v1/scripting/evaluate",
          body: i,
          headers: e
        };
        this.post(x, (g, B, l) => M(l));
      }).catch(M => this.logErr(M));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const V = this.path.resolve(this.dataFile),
          q = this.path.resolve(process.cwd(), this.dataFile),
          M = this.fs.existsSync(V),
          p = !M && this.fs.existsSync(q);
        if (M || p) {
          const r = M ? V : q;
          try {
            return JSON.parse(this.fs.readFileSync(r));
          } catch (Q) {
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
        const q = this.path.resolve(this.dataFile),
          M = this.path.resolve(process.cwd(), this.dataFile),
          p = this.fs.existsSync(q),
          w = !p && this.fs.existsSync(M),
          r = JSON.stringify(this.data);
        if (p) {
          this.fs.writeFileSync(q, r);
        } else {
          if (w) {
            this.fs.writeFileSync(M, r);
          } else {
            this.fs.writeFileSync(q, r);
          }
        }
      }
    }
    lodash_get(Y, s, V = undefined) {
      const w = s.replace(/[(d+)]/g, ".$1").split(".");
      let r = Y;
      for (const j of w) {
        r = Object(r)[j];
        if (r === undefined) {
          return V;
        }
      }
      return r;
    }
    lodash_set(Y, s, V) {
      if (Object(Y) !== Y) {
        return Y;
      }
      if (!Array.isArray(s)) {
        s = s.toString().match(/[^.[]]+/g) || [];
      }
      s.slice(0, -1).reduce((M, p, w) => Object(M[p]) === M[p] ? M[p] : M[p] = Math.abs(s[w + 1 < 10 ? "0" + (w + 1) : w + 1]) >> 0 === +s[w + 1 < 10 ? "0" + (w + 1) : w + 1] ? [] : {}, Y)[s[s.length - 1]] = V;
      return Y;
    }
    getdata(Y) {
      let q = this.getval(Y);
      if (/^@/.test(Y)) {
        const [, M, p] = /^@(.*?).(.*?)$/.exec(Y),
          w = M ? this.getval(M) : "";
        if (w) {
          try {
            const r = JSON.parse(w);
            q = r ? this.lodash_get(r, p, "") : q;
          } catch (Q) {
            q = "";
          }
        }
      }
      return q;
    }
    setdata(Y, s) {
      let V = false;
      if (/^@/.test(s)) {
        const [, M, p] = /^@(.*?).(.*?)$/.exec(s),
          w = this.getval(M),
          r = M ? w === "null" ? null : w || "{}" : "{}";
        try {
          const j = JSON.parse(r);
          this.lodash_set(j, p, Y);
          V = this.setval(JSON.stringify(j), M);
        } catch (i) {
          const x = {};
          this.lodash_set(x, p, Y);
          V = this.setval(JSON.stringify(x), M);
        }
      } else {
        V = this.setval(Y, s);
      }
      return V;
    }
    getval(Y) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(Y);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(Y);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[Y];
          } else {
            return this.data && this.data[Y] || null;
          }
        }
      }
    }
    setval(Y, s) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(Y, s);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(Y, s);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[s] = Y;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[s] || null;
          }
        }
      }
    }
    initGotEnv(Y) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (Y) {
        Y.headers = Y.headers ? Y.headers : {};
        if (undefined === Y.headers.Cookie && undefined === Y.cookieJar) {
          Y.cookieJar = this.ckjar;
        }
      }
    }
    get(Y, s = () => {}) {
      if (Y.headers) {
        if (Y.headers.Host == "polaris.zijieapi.com") {
          delete Y.headers["Content-Length"];
        } else {
          delete Y.headers["Content-Type"];
          delete Y.headers["Content-Length"];
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          Y.headers = Y.headers || {};
          const j = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(Y.headers, j);
        }
        $httpClient.get(Y, (Q, i, e) => {
          if (!Q && i) {
            i.body = e;
            i.statusCode = i.status;
          }
          s(Q, i, e);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            Y.opts = Y.opts || {};
            const e = {
              hints: false
            };
            Object.assign(Y.opts, e);
          }
          $task.fetch(Y).then(x => {
            const {
                statusCode: g,
                statusCode: B,
                headers: l,
                body: O
              } = x,
              X = {
                status: g,
                statusCode: B,
                headers: l,
                body: O
              };
            s(null, X, O);
          }, x => s(x));
        } else {
          if (this.isNode()) {
            this.initGotEnv(Y);
            this.got(Y).on("redirect", (t, g) => {
              try {
                if (t.headers["set-cookie"]) {
                  const N = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (N) {
                    this.ckjar.setCookieSync(N, null);
                  }
                  g.cookieJar = this.ckjar;
                }
              } catch (A) {
                this.logErr(A);
              }
            }).then(t => {
              const {
                  statusCode: B,
                  statusCode: l,
                  headers: O,
                  body: X
                } = t,
                N = {
                  status: B,
                  statusCode: l,
                  headers: O,
                  body: X
                };
              s(null, N, X);
            }, t => {
              const {
                message: g,
                response: B
              } = t;
              s(g, B, B && B.body);
            });
          }
        }
      }
    }
    post(Y, s = () => {}) {
      const q = Y.method ? Y.method.toLocaleLowerCase() : "post";
      Y.body && Y.headers && !Y.headers["Content-Type"] && (Y.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (Y.headers) {
        delete Y.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          Y.headers = Y.headers || {};
          const w = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(Y.headers, w);
        }
        $httpClient[q](Y, (r, j, Q) => {
          if (!r && j) {
            j.body = Q;
            j.statusCode = j.status;
          }
          s(r, j, Q);
        });
      } else {
        if (this.isQuanX()) {
          Y.method = q;
          if (this.isNeedRewrite) {
            Y.opts = Y.opts || {};
            const i = {
              hints: false
            };
            Object.assign(Y.opts, i);
          }
          $task.fetch(Y).then(e => {
            const {
                statusCode: t,
                statusCode: g,
                headers: B,
                body: l
              } = e,
              O = {
                status: t,
                statusCode: g,
                headers: B,
                body: l
              };
            s(null, O, l);
          }, e => s(e));
        } else {
          if (this.isNode()) {
            this.initGotEnv(Y);
            const {
              url: e,
              ...x
            } = Y;
            this.got[q](e, x).then(t => {
              const {
                  statusCode: g,
                  statusCode: B,
                  headers: l,
                  body: O
                } = t,
                X = {
                  status: g,
                  statusCode: B,
                  headers: l,
                  body: O
                };
              s(null, X, O);
            }, t => {
              const {
                message: g,
                response: B
              } = t;
              s(g, B, B && B.body);
            });
          }
        }
      }
    }
    put(Y, s = () => {}) {
      const q = Y.method ? Y.method.toLocaleLowerCase() : "put";
      Y.body && Y.headers && !Y.headers["Content-Type"] && (Y.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (Y.headers) {
        delete Y.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          Y.headers = Y.headers || {};
          const M = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(Y.headers, M);
        }
        $httpClient[q](Y, (p, w, r) => {
          !p && w && (w.body = r, w.statusCode = w.status);
          s(p, w, r);
        });
      } else {
        if (this.isQuanX()) {
          Y.method = q;
          if (this.isNeedRewrite) {
            Y.opts = Y.opts || {};
            const p = {
              hints: false
            };
            Object.assign(Y.opts, p);
          }
          $task.fetch(Y).then(w => {
            const {
              statusCode: r,
              statusCode: j,
              headers: Q,
              body: i
            } = w;
            const e = {
              status: r,
              statusCode: j,
              headers: Q,
              body: i
            };
            s(null, e, i);
          }, w => s(w));
        } else {
          if (this.isNode()) {
            this.initGotEnv(Y);
            const {
              url: w,
              ...r
            } = Y;
            this.got[q](w, r).then(j => {
              const {
                  statusCode: Q,
                  statusCode: i,
                  headers: e,
                  body: x
                } = j,
                t = {
                  status: Q,
                  statusCode: i,
                  headers: e,
                  body: x
                };
              s(null, t, x);
            }, j => {
              const {
                message: Q,
                response: i
              } = j;
              s(Q, i, i && i.body);
            });
          }
        }
      }
    }
    time(Y, s = null) {
      const V = s ? new Date(s) : new Date();
      let q = {
        "M+": V.getMonth() + 1,
        "d+": V.getDate(),
        "H+": V.getHours(),
        "m+": V.getMinutes(),
        "s+": V.getSeconds(),
        "q+": Math.floor((V.getMonth() + 3) / 3),
        S: V.getMilliseconds()
      };
      if (/(y+)/.test(Y)) {
        Y = Y.replace(RegExp.$1, (V.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let M in q) if (new RegExp("(" + M + ")").test(Y)) {
        Y = Y.replace(RegExp.$1, RegExp.$1.length == 1 ? q[M] : ("00" + q[M]).substr(("" + q[M]).length));
      }
      return Y;
    }
    msg(Y = h, s = "", V = "", q) {
      const M = p => {
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
              let w = p.openUrl || p.url || p["open-url"],
                r = p.mediaUrl || p["media-url"];
              const j = {
                openUrl: w,
                mediaUrl: r
              };
              return j;
            } else {
              if (this.isQuanX()) {
                let Q = p["open-url"] || p.url || p.openUrl,
                  i = p["media-url"] || p.mediaUrl;
                const e = {
                  "open-url": Q,
                  "media-url": i
                };
                return e;
              } else {
                if (this.isSurge()) {
                  let x = p.url || p.openUrl || p["open-url"];
                  const t = {
                    url: x
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
          $notification.post(Y, s, V, M(q));
        } else {
          this.isQuanX() && $notify(Y, s, V, M(q));
        }
      }
      if (!this.isMuteLog) {
        let p = ["", "==============📣系统通知📣=============="];
        p.push(Y);
        s ? p.push(s) : "";
        V ? p.push(V) : "";
        console.log(p.join("\n"));
        this.logs = this.logs.concat(p);
      }
    }
    log(...Y) {
      Y.length > 0 && (this.logs = [...this.logs, ...Y]);
      console.log(Y.join(this.logSeparator));
    }
    logErr(Y, s) {
      const V = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !V ? this.log("", "❗️" + this.name + ", 错误!", Y) : this.log("", "❗️" + this.name + ", 错误!", Y.stack);
    }
    wait(Y) {
      return new Promise(s => setTimeout(s, Y));
    }
    done(Y = {}) {
      const s = new Date().getTime(),
        V = (s - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + V + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(Y);
    }
  }(h, y);
}