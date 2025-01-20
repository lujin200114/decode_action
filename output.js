//Mon Jan 20 2025 12:36:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const david_nX = new david_hh("今日头条极速版"),
  david_nI = "V1.1.4",
  david_nE = "jrttapp";
let david_nl = david_nX.getjson(david_nE, []);
const david_ng = david_nX.isNode() ? require("fs") : "",
  david_nG = david_nX.isNode() ? require("ws") : "",
  david_nP = "david_cookies.js";
david_nX.isNode() && !david_ng.existsSync(david_nP) && (david_nX.log("🔔 外挂ck文件不存在，开始创建模版>>>"), david_ng.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet JRTTAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    JRTT: JRTTAPP\n}\n\nmodule.exports = APPS", V => {}));
const david_nJ = david_nX.isNode() ? require("http") : "",
  david_ne = david_nX.isNode() ? require("./sendNotify") : "",
  david_nj = david_nX.isNode() ? require("./david_cookies") : "";
let david_nu = david_nX.getdata("tguserid") || 1,
  david_nL = david_nX.getdata("jrttactivecode") || 0,
  david_nD = david_nX.getval("jrttuserck") || 1,
  david_ni = david_nX.getval("apiHost") || "http://106.15.104.124:8080";
david_nX.getval("apiHosts") && (david_ni = david_nX.getval("apiHosts"));
const david_nC = 0;
let david_nz = david_nX.getval("tz") || "1";
var david_nM = "",
  david_nU = "";
let david_nB = "",
  david_nm = [],
  david_nN = [],
  david_ny = [],
  david_nW = [],
  david_nv = [],
  david_nQ = [],
  david_nK = [],
  david_nk = "",
  david_np = [],
  david_nt = "",
  david_S0 = "",
  david_S1 = "",
  david_S2 = "",
  david_S3 = "",
  david_S4 = "",
  david_S5 = "",
  david_S6 = 1,
  david_S7 = 1,
  david_S8 = 1,
  david_S9 = 1,
  david_SV = "",
  david_Sa = "",
  david_Sw = 3,
  david_Sn = "";
if (david_nX.isNode()) {
  process.env.JRTTAPP ? david_nl = JSON.parse(process.env.JRTTAPP) : david_nl = david_nj.JRTT;
  david_nu = process.env.TGUSERID;
  david_nL = process.env.JRTTACTIVECODE;
  process.env.APIHOST && (david_ni = process.env.APIHOST);
  process.env.APIHOSTS && (david_ni = process.env.APIHOSTS);
  david_nM = new Date(new Date().getTime()).getHours();
  david_nU = new Date(new Date().getTime()).getMinutes();
  david_nX.log("🔔 当前环境: Node, 当前时间：" + david_nM + "点");
} else {
  david_nM = new Date().getHours();
  david_nU = new Date().getMinutes();
  david_nX.log("🔔 当前环境: 手机代理, 当前时间：" + david_nM + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await david_Sb();
  } else {
    if (!david_nl) {
      david_nX.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    david_nX.log("📢 开始检测服务器接口状态>>>");
    let w = false;
    const n = david_ni.split("&"),
      S = n.length;
    for (let H = 0; H < S; H++) {
      if (david_nX.isNode()) {
        w = await david_SL("" + n[H], 2500);
      } else {
        if (david_nX.isSurge() || david_nX.isLoon()) {
          w = await david_Si("" + n[H], 2500);
        } else {
          w = await david_SD("" + n[H], 2500);
        }
      }
      if (w == true) {
        david_ni = n[H];
        david_nX.log("📢 接口" + (H + 1) + "[" + n[H] + "]服务器接口正常! 🎉");
        break;
      }
      if (H == S - 1 && w == false) {
        david_nX.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        david_nX.msg(david_nX.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!david_nL || !david_nu || david_nu == 1 || david_nL == 0 || david_nL.length != 32) {
      david_nX.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await david_Sj(david_nE, david_nu, david_nL);
    david_nX.log("📢 " + david_S3);
    david_nX.log("🔔 当前脚本版本号: " + david_nI + "，最新版本号: " + david_S1);
    if (david_Sn != "") {
      let R = new Date(david_Sn).getTime(),
        X = new Date().getTime();
      if (X > R) {
        david_nX.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (david_nI < david_S1) {
      david_nX.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      david_h8("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (david_S0 != true) {
      david_nX.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (david_SV != true) {
      david_nX.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (david_nt != true) {
      david_nX.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (david_S5 == true) {
      david_nX.log("🔔 此脚本采用付费模式。🔒");
    } else {
      david_nX.log("🔔 此脚本采用免费模式。🔓");
    }
    if (david_Sn != "") {
      if (david_S5 == true) {
        david_nX.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let u = new Date(david_Sn).getTime(),
          L = new Date().getTime();
        if (L > u) {
          david_nX.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (david_S4 != true) {
        david_nX.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        david_nX.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (david_S6 > 1) {
      david_nX.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + david_Sw * david_S6 + "个账号。");
    }
    if (david_S7 > 1) {
      david_nX.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + david_S8 + "次, 已经运行了" + david_S9 + "次。");
    }
    if (david_S2 != true) {
      david_nX.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (david_nl.length > david_Sw * david_S6) {
      david_nX.log("❗️ 当前用户一次最多运行" + david_Sw * david_S6 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (david_nl.length == 0) {
      david_nX.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (david_S9 + david_nl.length > david_S8) {
      david_nX.log("📢 一共发现了" + david_nl.length + "个账号");
      david_nX.log("❗️ 当前用户运行次数剩余" + (david_S8 - david_S9) + "次，还可以运行" + (david_S8 - david_S9) + "个账号，还需要" + (david_nl.length - (david_S8 - david_S9)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (david_Sn != "") {
      david_nX.log("📢 你的会员有效期到： " + david_Sn);
    }
    david_nX.log("📢 一共发现了" + david_nl.length + "个账号");
    let h = [];
    for (let c = 0; c < david_nl.length; c++) {
      h.push(david_Sh(c));
      david_nm[c] = "";
      david_np[c] = 1;
      if (david_nX.isNode()) {
        david_nW[c] = 0;
        await david_SO(c);
      } else {
        david_nW[c] = 1;
      }
    }
    await Promise.allSettled(h).then(W => {
      david_nX.log("日志整理功能如下：");
      david_nX.log("---------------日志整理开始--------------");
      for (let v = 0; v < david_nl.length; v++) {
        david_nX.log(david_nm[v]);
        david_nB += david_nm[v];
      }
      david_nX.log("---------------日志整理结束--------------");
      david_h8(david_nB);
    });
  }
})().catch(V => david_nX.logErr(V)).finally(() => david_nX.done());
async function david_Sh(V) {
  return new Promise((w, n) => {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 开始执行 working......");
    david_SH(w, V);
  });
}
async function david_SO(V) {
  if (david_nX.isNode()) {
    if (david_nv[V] > 0) {
      david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    david_ny[V] = new david_nG(david_ni.replace("http", "ws") + "/ws");
    david_ny[V].on("open", function n() {
      david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签名通道已连接");
    });
    david_ny[V].on("close", function S() {
      david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    david_ny[V].on("error", function h() {
      david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签名通道已关闭，原因是出现错误");
      david_nW[V] = 1;
      david_nv[V]++;
      david_nv[V] <= 3 && david_SO(V);
    });
  }
}
async function david_SH(V, a) {
  if (david_nX.isNode()) {
    await david_nX.wait(3000, 5000);
  }
  david_nl[a].url = david_nl[a].url.replace(/\+/g, "");
  await david_Sx(a);
  await david_Sr(a);
  await david_SI(a);
  david_nX.isNode() && (await david_ny[a].close());
  await david_Su(david_nE, david_nu);
  V();
}
async function david_Sb() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const w = $request.body;
    let n = david_nD - 1;
    if (david_nl[n]) {
      david_nl[n].token_body = w;
    } else {
      const h = {
        token_body: w
      };
      david_nl[n] = h;
    }
    david_nX.setdata(JSON.stringify(david_nl, null, 2), "jrttapp");
    david_nX.msg(david_nX.name, "快音账号" + (n + 1) + "Token获取成功！🎉");
  }
}
function david_SY(V) {
  let w = david_h5(),
    n = david_Sc(david_nl[V].url);
  n._rticket = w;
  david_nl[V].iid = n.iid;
  david_nl[V].did = n.device_id;
  n.version_code = "966";
  n.version_name = "9.6.6";
  n.update_version_code = "96607";
  n.device_platform = "android";
  delete n.ab_version;
  delete n.act_hash;
  delete n.cookie_data;
  delete n.act_token;
  delete n.cookie_base;
  delete n.ab_feature;
  delete n.ab_group;
  delete n.ab_client;
  delete n.ab_sdk_version;
  delete n.bottom_tab_list;
  delete n.client_vid;
  delete n.local_ab_version;
  delete n.luckydog_base;
  delete n.luckydog_data;
  delete n.luckydog_token;
  delete n.luckydog_sdk_version;
  delete n.luckydog_api_version;
  return david_SK(n);
}
async function david_SA(V, a, w) {
  let S = "common";
  if (david_nl[V].interface) {
    S = david_nl[V].interface;
  }
  let h = david_nl[V].iid;
  let O = david_nl[V].did,
    H = "";
  let b = [];
  for (let x in w) {
    if (x == "Content-Type" || x == "Host") {
      continue;
    }
    b.push(x.toLowerCase() + "=[" + w[x] + "]");
  }
  H += b.join(",");
  H += "";
  let Y = O + "@" + h + "@" + encodeURIComponent(a) + "@" + encodeURIComponent(H) + "@" + S;
  await david_Ss(V, Y);
}
async function david_Sx(V) {
  let w = david_SY(V);
  const n = "https://api3-normal-lq.amemv.com/passport/account/info/v2/?" + w;
  let S = "";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("get", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.message == "success") {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户名=> " + h.data.name);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户名=> " + h.data.name + "\n";
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 手机号=> " + h.data.mobile);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 手机号=> " + h.data.mobile + "\n";
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户信息=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户信息=> " + h.err_tips + "\n";
  }
}
async function david_Sr(V) {
  let w = david_SY(V);
  const n = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/withdraw/page_data/?" + w;
  let S = "";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 提现中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("get", david_nQ[V], david_Sv());
  let h = david_nk;
  h != null && h.err_no == 0 ? david_nN[V] = h.data.ali_auth_conf : (david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户信息=> " + h.err_tips), david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 用户信息=> " + h.err_tips + "\n");
}
async function david_Sd(V, a) {
  let n = david_SY(V);
  const S = "https://api3-normal-lf.toutiaoapi.com/luckycat/lite/v1/withdraw/withdraw/?" + n;
  let h = "{\"task_id\":202,\"tag\":\"normal\",\"cash_amount\":" + a * 100 + ",\"type\":3,\"ali_account\":\"" + david_nN[V].alipay_uid + "\",\"account_name\":\"" + david_nN[V].alipay_name + "\",\"trace_id\":\"\"}";
  await david_SM(S, h, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 提现中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let O = david_nk;
  if (O != null && O.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 提现结果=> 提现" + a + "元，" + O.err_tips + "，提现编号(" + O.data.take_cash_record_id + ")");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 提现结果=> 提现" + a + "元，" + O.err_tips + "，提现编号(" + O.data.take_cash_record_id + ")\n";
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 提现结果=> " + O.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 提现结果=> " + O.err_tips + "\n";
  }
}
async function david_Sf(V) {
  let w = david_SY(V);
  const n = "https://api3-normal-hl.toutiaoapi.com/luckycat/lite/v1/sign_in/action?" + w;
  let S = "{\"use_ecpm\":0,\"isNewUI\":true,\"rit\":\"coin\"}";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到=> " + h.err_tips + "，获得" + h.data.score_amount + "金币, 已连续签到" + h.data.sign_times + "天");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到=> " + h.err_tips + "，获得" + h.data.score_amount + "金币, 已连续签到" + h.data.sign_times + "天\n";
    if (h.data.extra && h.data.extra.track_id != "") {
      await david_SX(V, h.data.extra.track_id);
    }
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到=> " + h.err_tips + "\n";
  }
}
async function david_So(V) {
  let w = david_SY(V);
  const n = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/activity/double_whole_scene_task/?" + w;
  let S = "{}";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激活阅读双倍=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激活阅读双倍=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激活阅读双倍=> " + h.err_tips + "\n";
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激活阅读双倍=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激活阅读双倍=> " + h.err_tips + "\n";
  }
}
async function david_SR(V) {
  let w = david_SY(V);
  const n = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/activity/done_whole_scene_task/?" + w;
  let S = "{\"group_id\":\"\",\"scene_key\":\"article_feed\",\"is_golden_egg\":false}";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 阅读双倍=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 阅读双倍=> " + h.err_tips + ", 获得" + h.data.score_amount + "金币");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 阅读双倍=> " + h.err_tips + ", 获得" + h.data.score_amount + "金币\n";
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 阅读双倍=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 阅读双倍=> " + h.err_tips + "\n";
  }
}
async function david_SX(V, a) {
  let n = david_SY(V);
  const S = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?" + n;
  let h = "{\"need_recover\":true,\"extra\":{\"task_name\":\"签到激励广告\",\"withdraw_amount\":0,\"track_id\":\"" + a + "\",\"enable_fuzzy_amount\":false,\"task_id\":\"187\"},\"task_id\":\"187\",\"score_source\":0,\"aggre_chain_id\":\"\"}";
  await david_SM(S, h, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到广告=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let O = david_nk;
  if (O != null && O.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到广告=> 获得" + O.data.reward_amount + "金币 🎉");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到广告=> 获得" + O.data.reward_amount + "金币 🎉\n";
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到广告=> " + O.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 签到广告=> " + O.err_tips + "\n";
  }
}
async function david_SI(V) {
  let w = david_SY(V);
  const n = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/page_data/?" + w;
  let S = "";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("get", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 今日金币=> " + h.data.user_income.score_balance + ", 折合现金>> " + (h.data.user_income.score_balance / 33000).toFixed(2) + "元");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 今日金币=> " + h.data.user_income.score_balance + ", 折合现金>> " + (h.data.user_income.score_balance / 33000).toFixed(2) + "元\n";
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 当前余额=> " + h.data.user_income.cash_balance / 100 + "元");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 当前余额=> " + h.data.user_income.cash_balance / 100 + "元\n";
    if (h.data.user_income.cash_balance / 100 >= 30) {
      await david_Sd(V, 30);
    } else {
      if (h.data.user_income.cash_balance / 100 >= 15 && h.data.user_income.cash_balance / 100 < 30) {
        await david_Sd(V, 15);
      }
    }
    let H = h.data.task_list;
    if (h.data.signin_detail.today_signed == false) {
      await david_Sf(V);
    }
    let b = h.data.treasure;
    if (b.current_time >= b.next_treasure_time && b.finished_times < 144) {
      if (david_np[V] == 1) {
        await david_SE(V);
      }
    } else {
      david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 宝箱倒计时还剩" + Math.floor((b.next_treasure_time - b.current_time) / 60) + "分钟");
    }
    let Y = H.special.find(X => X.key == "task_ad");
    if (Y) {
      let I = JSON.parse(Y.extra),
        E = Y.is_completed;
      if (E == false) {
        if (david_np[V] == 1) {
          await david_nX.wait(david_St(30000, 45000));
          await david_Se(V, I.excitation_ad);
        }
      }
    }
    let A = H.special.find(G => G.key == "whole_scene_count");
    if (A) {
      if (A.action_desc == "点击翻倍") {
        await david_So(V);
      } else {
        if (david_nl[V].readSwitch && david_nl[V].readSwitch == "1") {
          for (let e = 0; e < 3; e++) {
            await david_nX.wait(30000);
            await david_SR(V);
          }
        }
      }
    }
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> " + h.err_tips + "\n";
  }
}
async function david_SE(V) {
  let w = david_SY(V),
    n = "https://api5-normal-hl.toutiaoapi.com/score_task/v1/task/open_treasure_box/?" + w,
    S = "{\"from\":\"task_page\",\"use_ecpm\":0,\"rit\":\"coin\",\"open_treasure_box_enter_from\":\"\"}";
  await david_SM(n, S, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + h.data.score_amount + "金币 🎉");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 打开宝箱=> 成功，不错哦！获得" + h.data.score_amount + "金币 🎉\n";
    let b = h.data.new_excitation_ad;
    if (b != null) {
      await david_nX.wait(david_St(30000, 45000));
      await david_Sl(V, b);
    }
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 打开宝箱=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 打开宝箱=> " + h.err_tips + "\n";
  }
}
async function david_Sl(V, a) {
  let n = david_SY(V),
    S = david_St(178, 179) + "" + david_hV(13, "0123456789"),
    h = david_nX.time("yyyyMMddHHmmss"),
    O = h + david_hV(20, "0123456789ABCDEDGHIJKLMNOPQRSTUVWXYZ9876543210");
  const H = "https://api5-normal-hl.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?" + n;
  let b = "{\"ad_id\":" + a.ad_id + ",\"amount\":" + a.score_amount + ",\"ad_rit\":\"" + a.ad_id + "\",\"extra_data\":{\"enter_from\":\"tre_box\"},\"task_key\":\"excitation_ad\",\"extra\":{\"task_name\":\"宝箱激励广告\",\"track_id\":\"" + a.extra.track_id + "\",\"stage_score_amount\":[],\"task_id\":\"\",\"creator_id\":\"2\"},\"task_id\":\"" + a.task_id + "\",\"ad_alias_position\":\"coin\",\"is_post_login\":false,\"ad_from\":\"coin\",\"score_source\":0,\"coin_count\":" + a.score_amount + ",\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":59,\"dynamic_settings_version\":59,\"poll_settings_version\":0,\"exci_extra\":{\"cid\":" + S + ",\"req_id\":\"" + O + "\",\"rit\":20047},\"aggre_chain_id\":\"\"}";
  await david_SM(H, b, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let Y = david_nk;
  if (Y != null && Y.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 宝箱广告=> 获得" + Y.data.reward_amount + "金币 🎉");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 宝箱广告=> 获得" + Y.data.reward_amount + "金币 🎉\n";
    let x = Y.data.aggre_ad_info.aggre_chain_id;
    for (let r = 0; r < 3; r++) {
      david_nl[V].isAppendAd && david_nl[V].isAppendAd == "1" && (await david_Sg(V, r, x, "开宝箱"));
    }
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 宝箱广告=> " + Y.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 宝箱广告=> " + Y.err_tips + "\n";
  }
}
async function david_Sg(V, a, w, n) {
  let h = david_SY(V);
  const O = "https://api3-normal-lq.toutiaoapi.com/api/ad/repeatable_reward/v1/can_reward_more?rewarded_times=" + a + "&one_more_times=" + (a + 1) + "&" + h;
  await david_SM(O, "", V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("get", david_nQ[V], david_Sv());
  let H = david_nk;
  if (H != null && H.code == 0) {
    H.can_reward_one_more == true && (await david_SG(V, a, w, n));
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "检测广告=> " + H.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "检测广告=> " + H.err_tips + "\n";
  }
}
async function david_SG(V, a, w, n) {
  let h = david_SY(V);
  const O = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/get_exci_entrance?rewarded_times=" + a + "&enter_creator_id=2000&one_more_times=" + (a + 1) + "&" + h;
  await david_SM(O, "", V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("get", david_nQ[V], david_Sv());
  let H = david_nk;
  if (H != null && H.err_no == 0) {
    let Y = H.data.extra.track_id;
    await david_nX.wait(david_St(30000, 35000));
    await david_SP(V, Y, w, n, a);
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "附加广告=> " + H.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "附加广告=> " + H.err_tips + "\n";
  }
}
async function david_SP(V, a, w, n, S) {
  let O = david_SY(V),
    H = david_St(178, 179) + "" + david_hV(13, "0123456789");
  let b = david_nX.time("yyyyMMddHHmmss");
  let Y = b + david_hV(20, "0123456789ABCDEDGHIJKLMNOPQRSTUVWXYZ9876543210");
  const A = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?" + O;
  const x = "{\"task_id\":\"225\",\"exci_extra\":{\"cid\":" + H + ",\"req_id\":\"" + Y + "\",\"rit\":20047},\"extra\":{\"stage_score_amount\":[],\"track_id\":\"" + a + "\",\"task_id\":\"\",\"task_name\":\"再得激励广告\",\"enable_fuzzy_amount\":false,\"modal_info\":{},\"done_type\":0},\"aggre_chain_id\":\"" + w + "\"}";
  await david_SM(A, x, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let r = david_nk;
  if (r != null && r.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "附加广告(" + (S + 1) + ")=> 获得" + r.data.amount + "金币 🎉");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "附加广告(" + (S + 1) + ")=> 获得" + r.data.amount + "金币 🎉\n";
    S == 2 && (await david_SJ(V, n));
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "附加广告(" + (S + 1) + ")=> " + r.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + n + "附加广告(" + (S + 1) + ")=> " + r.err_tips + "\n";
  }
}
async function david_SJ(V, a) {
  let n = david_SY(V);
  const S = "https://api3-normal-lq.toutiaoapi.com/luckycat/gip/v1/cooperate/exciad/get_aggregate_info?" + n;
  await david_SM(S, "", V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("get", david_nQ[V], david_Sv());
  let h = david_nk;
  if (h != null && h.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + a + "=>完成，" + h.data.desc);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + a + "=>完成，" + h.data.desc + "\n";
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + a + "=> " + h.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: " + a + "=> " + h.err_tips + "\n";
  }
}
async function david_Se(V, a) {
  let n = a,
    S = david_SY(V);
  let h = david_St(178, 179) + "" + david_hV(13, "0123456789");
  let O = david_nX.time("yyyyMMddHHmmss"),
    H = O + david_hV(20, "0123456789ABCDEDGHIJKLMNOPQRSTUVWXYZ");
  const b = "https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?" + S;
  let Y = "{\"ad_id\":" + n.ad_id + ",\"amount\":" + n.score_amount + ",\"ad_rit\":\"" + n.ad_id + "\",\"extra_data\":{\"enter_from\":\"task\"},\"task_key\":\"excitation_ad\",\"extra\":{\"track_id\":\"" + n.extra.track_id + "\",\"modal_info\":{},\"cooling_times\":600,\"creator_id\":\"11\"},\"task_id\":\"" + n.task_id + "\",\"ad_alias_position\":\"coin\",\"is_post_login\":false,\"ad_from\":\"coin\",\"score_source\":1,\"coin_count\":" + n.score_amount + ",\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":59,\"dynamic_settings_version\":59,\"poll_settings_version\":0,\"exci_extra\":{\"cid\":" + h + ",\"req_id\":\"" + H + "\",\"rit\":20047},\"aggre_chain_id\":\"\"}";
  await david_SM(b, Y, V);
  if (david_np[V] == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 任务中心=> 签名服务异常，停止执行>>>");
    return;
  }
  await david_ST("post", david_nQ[V], david_Sv());
  let A = david_nk;
  if (A != null && A.err_no == 0) {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激励视频=> 完成，获得" + A.data.amount + "音符 🎉");
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激励视频=> 完成，获得" + A.data.amount + "音符 🎉\n";
    let r = A.data.aggre_ad_info.aggre_chain_id;
    for (let d = 0; d < 3; d++) {
      if (david_nl[V].isAppendAd && david_nl[V].isAppendAd == "1") {
        await david_Sg(V, d, r, "激励视频");
      }
    }
  } else {
    david_nX.log("[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激励视频=> " + A.err_tips);
    david_nm[V] += "[账号" + (V + 1 < 10 ? "0" + (V + 1) : V + 1) + "]: 激励视频=> " + A.err_tips + "\n";
  }
}
function david_Sj(V, a, w) {
  return new Promise((S, h) => {
    const b = david_ni + "/script/permissions/lastest",
      Y = {};
    Y.appName = V;
    Y.userId = a;
    Y.activityCode = w;
    Y.version = david_nI;
    const A = Y,
      x = {};
    x["Content-Type"] = "application/json";
    x.accept = "application/json";
    const r = {
      url: b,
      headers: x,
      body: JSON.stringify(A)
    };
    david_nX.post(r, async (d, f, o) => {
      if (o && o != null && o.replace(/\"/g, "").length > 50) {
        const E = o.replace(/\"/g, "").slice(34),
          l = new david_hS();
        result = JSON.parse(l.decode(E));
        try {
          david_S1 = result.version;
          david_nt = result.userAuth;
          david_S0 = result.scriptAuth;
          david_S2 = result.runAuth;
          david_S3 = result.notify;
          david_S4 = result.vipAuth;
          david_S5 = result.isCharge;
          david_S6 = result.runAcounts;
          david_S7 = result.buyCount;
          david_S9 = result.runedCounts;
          david_S8 = result.runTotalCounts;
          david_SV = result.userRank;
          david_Sa = result.invicate;
          david_Sw = result.accountNumbers;
          david_Sn = result.vipDate;
        } catch (J) {
          david_nX.log(J);
        }
      } else {
        david_nX.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      S();
    });
  });
}
function david_Su(V, a) {
  return new Promise((n, S) => {
    const O = david_ni + "/script/run/add",
      H = {
        appName: V,
        userId: a,
        activityCode: david_nL,
        version: david_nI
      };
    const Y = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const A = {
      url: O,
      headers: Y,
      body: JSON.stringify(H)
    };
    david_nX.post(A, async (x, r, d) => {
      n();
    });
  });
}
function david_SL(V, a) {
  return new Promise((n, S) => {
    const O = setTimeout(() => {
        n(false);
      }, a),
      H = david_nJ.get(V, b => {
        clearTimeout(O);
        if (b.statusCode === 404) {
          n(true);
        } else {
          n(false);
        }
      });
    H.on("error", b => {
      clearTimeout(O);
      n(false);
    });
    H.on("timeout", () => {
      H.abort();
      S(new Error("请求超时"));
    });
  });
}
async function david_SD(V, a = 3000) {
  return new Promise((n, S) => {
    const O = {
      url: V + "/docs"
    };
    setTimeout(() => {
      n(false);
    }, a);
    david_nX.get(O, async (H, b, Y) => {
      if (b.status == 401) {
        n(true);
      } else {
        n(false);
      }
    });
  });
}
async function david_Si(V, a = 3000) {
  return new Promise((n, S) => {
    const H = {
      url: V + "/"
    };
    setTimeout(() => {
      n(false);
    }, a);
    $httpClient.get(H, async (b, Y, A) => {
      if (A == "{\"detail\":\"Not Found\"}") {
        n(true);
      } else {
        n(false);
      }
    });
  });
}
async function david_SC(V, a, w) {
  return new Promise((S, h) => {
    const H = david_ni + "/redis/hash/get/" + a + "/" + w,
      b = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const Y = {
      url: H,
      headers: b
    };
    david_nX.get(Y, async (x, r, d) => {
      const f = d.replace(/\"/g, "");
      answerTexts[V] = f;
      S();
    });
  });
}
function david_Sz(V, a, w) {
  return new Promise((S, h) => {
    const H = david_ni + "/redis/hash/set",
      b = {
        key: V,
        hashKey: a,
        hashValue: w
      };
    const Y = b,
      A = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const x = {
      url: H,
      headers: A,
      body: JSON.stringify(Y)
    };
    david_nX.post(x, async (r, d, f) => {
      S();
    });
  });
}
function david_Sq(V) {
  return new Promise((w, n) => {
    const h = david_ni + "/redis/set/pop/" + V,
      O = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const H = {
      url: h,
      headers: O
    };
    david_nX.get(H, async (Y, A, x) => {
      const f = x.replace(/\"/g, "");
      popCookie = f;
      w();
    });
  });
}
async function david_SM(w, n, S) {
  let O = "Dalvik/2.1.0 (Linux; U; Android 12; 22081212C Build/SKQ1.220303.001) NewsArticle/9.6.6 cronet/TTNetVersion:c03b8b2d 2023-11-23 QuicVersion:658e7c68 2023-11-21";
  if (david_nl[S].ua && david_nl[S].ua != "") {
    O = david_nl[S].ua;
  }
  let H = david_h5(),
    b = david_SN(w);
  const Y = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
    "User-Agent": O,
    Host: b,
    "X-SS-REQ-TICKET": H,
    "passport-sdk-version": "50341",
    "sdk-version": "2",
    "x-tt-request-tag": "n=0;s=-1;p=0",
    "x-tt-store-region": "cn-ha",
    "x-tt-store-region-src": "uid",
    "X-tt-dt": david_nl[S].dt,
    "X-Tt-Token": david_nl[S].token,
    "x-vc-bdturing-sdk-version": "3.5.0.cn"
  };
  const A = {};
  A.url = w;
  A.headers = Y;
  let x = A;
  n && (x.body = n, x.headers["X-SS-STUB"] = david_ha(n).toUpperCase());
  await david_SA(S, w, x.headers);
  let r = david_nK[S];
  if (r && r != "Internal Server Error") {
    const R = david_SF(r);
    x.headers["X-Argus"] = R["X-Argus"];
    x.headers["X-Gorgon"] = R["X-Gorgon"];
    R["X-Gorgon"] == undefined && (david_np[S] = 0);
    x.headers["X-Helios"] = R["X-Helios"];
    x.headers["X-Khronos"] = R["X-Khronos"];
    x.headers["X-Ladon"] = R["X-Ladon"];
    x.headers["X-Medusa"] = R["X-Medusa"];
    let X = david_nl[S].token.substring(2, 34);
    x.headers.Cookie = "sessionid=" + X + "; sessionid_ss=" + X;
  } else {
    david_np[S] = 0;
  }
  david_nQ[S] = x;
  return x;
}
function david_SU(w, n, S) {
  let O = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (david_nl[S].ua && david_nl[S].ua != "") {
    O = david_nl[S].ua;
  }
  let H = david_SN(w);
  const b = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": O,
    Authorization: david_nl[S].auth,
    Host: H
  };
  const Y = {
    url: w,
    headers: b
  };
  if (n) {
    Y.body = n;
  }
  david_nQ[S] = Y;
  return Y;
}
async function david_ST(V, a, w) {
  david_nk = null;
  return new Promise(S => {
    david_nX[V](a, async (H, b, Y) => {
      try {
        if (H) {
          david_nX.log(w + ": " + V + "请求失败");
          david_nX.log(JSON.stringify(H));
          david_nX.logErr(H);
        } else {
          if (david_SQ(Y)) {
            david_nk = JSON.parse(Y);
          } else {
            const X = new URL(a.url);
            david_nX.log(X.pathname + "发起" + V + "请求时，出现错误，请处理");
          }
        }
      } catch (E) {
        david_nX.logErr(E, b);
      } finally {
        S(david_nk);
      }
    });
  });
}
async function david_Ss(V, a) {
  if (david_nW[V] == 0) {
    await david_SB(V, a);
  } else {
    await david_Sm(V, a);
  }
}
function david_SB(V, a) {
  return new Promise((n, S) => {
    function O(H) {
      let b = H.toString("utf8");
      david_nK[V] = b;
      david_ny[V].removeListener("message", O);
      n(b);
    }
    david_ny[V].on("message", O);
    if (david_ny[V].readyState === 1) {
      const b = {
        method: david_nE,
        params: {}
      };
      b.params.content = a;
      b.params.appName = david_nE;
      b.params.uuid = david_nu;
      david_ny[V].send(JSON.stringify(b), Y => {
        Y && S(Y);
      });
    } else {
      n(david_Sm(V, a));
      david_ny[V].removeListener("message", O);
    }
  });
}
function david_Sm(V, a) {
  return new Promise((n, S) => {
    const O = david_ni + "/sign/jrtt/six",
      H = {
        content: a,
        appName: david_nE,
        uuid: david_nu
      };
    const Y = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const A = {
      url: O,
      headers: Y,
      body: JSON.stringify(H)
    };
    david_nX.post(A, async (x, r, d) => {
      const o = d.replace(/\"/g, "");
      david_nK[V] = o;
      n();
    });
  });
}
function david_SZ(V, a, w) {
  const S = david_Sc(V);
  a.forEach(H => {
    delete S[H];
  });
  Object.assign(S, w);
  const h = Object.keys(S).sort();
  const O = h.map(H => H + "=" + S[H]).join("&");
  return O;
}
function david_Sc(V) {
  V = V.replace(/\"/g, "");
  var w;
  var n = {},
    S = V.slice(V.indexOf("?") + 1).split("&");
  for (var h = 0; h < S.length; h++) {
    w = S[h].split("=");
    n[w[0]] = w[1];
  }
  return n;
}
function david_SF(a) {
  const S = a.replace(/[{} ]/g, "");
  const h = S.split(",");
  const O = {};
  h.forEach(H => {
    const A = H.split(/=(.*)/),
      [x, r] = A;
    O[x] = r;
  });
  return O;
}
function david_SN(a) {
  const w = {
    yfWnF: "0123456789ABCDEF",
    ARyGj: function (b, Y) {
      return b * Y;
    },
    vlWfn: function (b, Y) {
      return b + Y;
    },
    dZTMi: function (b, Y) {
      return b > Y;
    },
    WkFxB: function (b, Y) {
      return b !== Y;
    },
    CdnkK: "ESrka",
    IHkHF: "HLzZG",
    uQYwc: function (b, Y) {
      return b === Y;
    },
    JiWaO: "bYIJM"
  };
  const n = w;
  let S = a.substr(n.vlWfn(a.indexOf("//"), 2)),
    h = S.substr(0, S.indexOf("/")),
    O = "",
    H = h.indexOf(":");
  if (n.dZTMi(H, 0)) {
    if (n.WkFxB(n.CdnkK, n.IHkHF)) {
      O = h.substr(0, H);
    } else {
      return n.yfWnF.charAt(w.floor(n.ARyGj(n.random(), 16)));
    }
  } else {
    n.uQYwc(n.JiWaO, n.JiWaO) ? O = h : n += S.fromCharCode(h);
  }
  return O;
}
function david_Sy(a, w) {
  var A = new Date(a);
  var H = new Date(w);
  var Y = H - A;
  var b = Math.floor(Y / 1000);
  return b;
}
function david_SW(V, a) {
  if (V.length * 2 <= a) {
    return V;
  }
  var n = 0;
  var S = "";
  for (var h = 0; h < V.length; h++) {
    S = S + V.charAt(h);
    if (V.charCodeAt(h) > 128) {
      n = n + 2;
      if (n >= a) {
        return S.substring(0, S.length - 1) + "...";
      }
    } else {
      n = n + 1;
      if (n >= a) {
        return S.substring(0, S.length - 2) + "...";
      }
    }
  }
  return S;
}
function david_Sv() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function david_SQ(V) {
  try {
    if (typeof JSON.parse(V) == "object") {
      return true;
    }
  } catch (S) {
    console.log(S);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function david_SK(V) {
  var w = Object.keys(V).map(function (n) {
    return encodeURIComponent(n) + "=" + encodeURIComponent(V[n]);
  }).join("&");
  return w;
}
function david_Sk(V) {
  var w = String.fromCharCode(V.charCodeAt(0) + V.length);
  for (var n = 1; n < V.length; n++) {
    w += String.fromCharCode(V.charCodeAt(n) + V.charCodeAt(n - 1));
  }
  return escape(w);
}
function david_Sp(V) {
  V = unescape(V);
  var w = String.fromCharCode(V.charCodeAt(0) - V.length);
  for (var n = 1; n < V.length; n++) {
    w += String.fromCharCode(V.charCodeAt(n) - w.charCodeAt(n - 1));
  }
  return w;
}
function david_St(V, a) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * V + 1);
      break;
    case 2:
      return parseInt(Math.random() * (a - V + 1) + V);
      break;
    default:
      return 0;
      break;
  }
}
function david_h0() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function david_h1() {
  function a() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
}
function david_h2(a) {
  if (a.length == 11) {
    let S = a.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return S;
  } else {
    return a;
  }
}
function david_h3(V) {
  return new Promise((w, n) => {
    const h = "https://v1.hitokoto.cn/?c=e",
      O = {
        accept: "application/json"
      };
    const H = {
      url: h,
      headers: O
    };
    david_nX.get(H, async (Y, A, x) => {
      let r = JSON.parse(x),
        d = r.hitokoto;
      contents[V] = d + " " + d;
      w();
    });
  });
}
function david_h4() {
  return new Promise((a, w) => {
    const S = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      h = {
        url: S
      };
    david_nX.get(h, async (H, b, Y) => {
      a(Y);
    });
  });
}
function david_h5() {
  return Math.round(new Date().getTime()).toString();
}
function david_h6() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function david_h7() {
  david_nz == 1 && david_nX.msg(david_nX.name, "", david_nX.message);
}
async function david_h8(V) {
  if (david_nM == 9 || david_nM == 12 || david_nM == 18) {
    if (david_nz == 1) {
      if (david_nX.isNode()) {
        await david_ne.sendNotify(david_nX.name, V);
      } else {
        david_nX.msg(david_nX.name, "", V);
      }
    } else {
      david_nX.log(V);
    }
  }
}
async function david_h9(V, a, w) {
  return new Promise((S, h) => {
    const b = "https://wxpusher.zjiecode.com/api/send/message",
      Y = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: a,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [w],
        verifyPay: false
      };
    const A = Y,
      x = {
        "Content-Type": "application/json"
      };
    const r = {
      url: b,
      headers: x,
      body: JSON.stringify(A)
    };
    david_nX.post(r, async (d, f, o) => {
      S();
    });
  });
}
function david_hV(a, w) {
  w = w || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let h = "";
  for (let O = 0; O < a; O++) {
    let H = Math.floor(Math.random() * w.length);
    h += w.substring(H, H + 1);
  }
  return h;
}
function david_ha(V) {
  function Y(Vg, VG) {
    return Vg << VG | Vg >>> 32 - VG;
  }
  function R(Vg, VG) {
    var VP, VJ, Ve, Vj, Vu;
    Ve = 2147483648 & Vg;
    Vj = 2147483648 & VG;
    VP = 1073741824 & Vg;
    VJ = 1073741824 & VG;
    Vu = (1073741823 & Vg) + (1073741823 & VG);
    return VP & VJ ? 2147483648 ^ Vu ^ Ve ^ Vj : VP | VJ ? 1073741824 & Vu ? 3221225472 ^ Vu ^ Ve ^ Vj : 1073741824 ^ Vu ^ Ve ^ Vj : Vu ^ Ve ^ Vj;
  }
  function X(Vg, VG, VP) {
    return Vg & VG | ~Vg & VP;
  }
  function P(Vg, VG, VP) {
    return Vg & VP | VG & ~VP;
  }
  function U(Vg, VG, VP) {
    return Vg ^ VG ^ VP;
  }
  function T(Vg, VG, VP) {
    return VG ^ (Vg | ~VP);
  }
  function Z(Vg, VG, VP, VJ, Ve, Vj, Vu) {
    Vg = R(Vg, R(R(X(VG, VP, VJ), Ve), Vu));
    return R(Y(Vg, Vj), VG);
  }
  function W(Vg, VG, VP, VJ, Ve, Vj, Vu) {
    Vg = R(Vg, R(R(P(VG, VP, VJ), Ve), Vu));
    return R(Y(Vg, Vj), VG);
  }
  function Q(Vg, VG, VP, VJ, Ve, Vj, Vu) {
    Vg = R(Vg, R(R(U(VG, VP, VJ), Ve), Vu));
    return R(Y(Vg, Vj), VG);
  }
  function V0(Vg, VG, VP, VJ, Ve, Vj, Vu) {
    Vg = R(Vg, R(R(T(VG, VP, VJ), Ve), Vu));
    return R(Y(Vg, Vj), VG);
  }
  function V1(Vg) {
    for (var VG, VP = Vg.length, VJ = VP + 8, Ve = (VJ - VJ % 64) / 64, Vj = 16 * (Ve + 1), Vu = new Array(Vj - 1), VL = 0, VD = 0; VP > VD;) {
      VG = (VD - VD % 4) / 4;
      VL = VD % 4 * 8;
      Vu[VG] = Vu[VG] | Vg.charCodeAt(VD) << VL;
      VD++;
    }
    VG = (VD - VD % 4) / 4;
    VL = VD % 4 * 8;
    Vu[VG] = Vu[VG] | 128 << VL;
    Vu[Vj - 2] = VP << 3;
    Vu[Vj - 1] = VP >>> 29;
    return Vu;
  }
  function V2(Vg) {
    var VP,
      VJ,
      Ve = "",
      Vj = "";
    for (VJ = 0; 3 >= VJ; VJ++) {
      VP = Vg >>> 8 * VJ & 255;
      Vj = "0" + VP.toString(16);
      Ve += Vj.substr(Vj.length - 2, 2);
    }
    return Ve;
  }
  function V3(Vg) {
    Vg = Vg.replace(/\r\n/g, "\n");
    for (var VP = "", VJ = 0; VJ < Vg.length; VJ++) {
      var Ve = Vg.charCodeAt(VJ);
      128 > Ve ? VP += String.fromCharCode(Ve) : Ve > 127 && 2048 > Ve ? (VP += String.fromCharCode(Ve >> 6 | 192), VP += String.fromCharCode(63 & Ve | 128)) : (VP += String.fromCharCode(Ve >> 12 | 224), VP += String.fromCharCode(Ve >> 6 & 63 | 128), VP += String.fromCharCode(63 & Ve | 128));
    }
    return VP;
  }
  var V4,
    V5,
    V6,
    V7,
    V8,
    V9,
    VV,
    Va,
    Vw,
    Vn = [],
    VS = 7,
    Vh = 12,
    VO = 17,
    VH = 22,
    Vb = 5,
    VY = 9,
    VA = 14,
    Vx = 20,
    Vr = 4,
    Vd = 11,
    Vf = 16,
    Vo = 23,
    VR = 6,
    VX = 10,
    VI = 15,
    VE = 21;
  for (V = V3(V), Vn = V1(V), V9 = 1732584193, VV = 4023233417, Va = 2562383102, Vw = 271733878, V4 = 0; V4 < Vn.length; V4 += 16) {
    V5 = V9;
    V6 = VV;
    V7 = Va;
    V8 = Vw;
    V9 = Z(V9, VV, Va, Vw, Vn[V4 + 0], VS, 3614090360);
    Vw = Z(Vw, V9, VV, Va, Vn[V4 + 1], Vh, 3905402710);
    Va = Z(Va, Vw, V9, VV, Vn[V4 + 2], VO, 606105819);
    VV = Z(VV, Va, Vw, V9, Vn[V4 + 3], VH, 3250441966);
    V9 = Z(V9, VV, Va, Vw, Vn[V4 + 4], VS, 4118548399);
    Vw = Z(Vw, V9, VV, Va, Vn[V4 + 5], Vh, 1200080426);
    Va = Z(Va, Vw, V9, VV, Vn[V4 + 6], VO, 2821735955);
    VV = Z(VV, Va, Vw, V9, Vn[V4 + 7], VH, 4249261313);
    V9 = Z(V9, VV, Va, Vw, Vn[V4 + 8], VS, 1770035416);
    Vw = Z(Vw, V9, VV, Va, Vn[V4 + 9], Vh, 2336552879);
    Va = Z(Va, Vw, V9, VV, Vn[V4 + 10], VO, 4294925233);
    VV = Z(VV, Va, Vw, V9, Vn[V4 + 11], VH, 2304563134);
    V9 = Z(V9, VV, Va, Vw, Vn[V4 + 12], VS, 1804603682);
    Vw = Z(Vw, V9, VV, Va, Vn[V4 + 13], Vh, 4254626195);
    Va = Z(Va, Vw, V9, VV, Vn[V4 + 14], VO, 2792965006);
    VV = Z(VV, Va, Vw, V9, Vn[V4 + 15], VH, 1236535329);
    V9 = W(V9, VV, Va, Vw, Vn[V4 + 1], Vb, 4129170786);
    Vw = W(Vw, V9, VV, Va, Vn[V4 + 6], VY, 3225465664);
    Va = W(Va, Vw, V9, VV, Vn[V4 + 11], VA, 643717713);
    VV = W(VV, Va, Vw, V9, Vn[V4 + 0], Vx, 3921069994);
    V9 = W(V9, VV, Va, Vw, Vn[V4 + 5], Vb, 3593408605);
    Vw = W(Vw, V9, VV, Va, Vn[V4 + 10], VY, 38016083);
    Va = W(Va, Vw, V9, VV, Vn[V4 + 15], VA, 3634488961);
    VV = W(VV, Va, Vw, V9, Vn[V4 + 4], Vx, 3889429448);
    V9 = W(V9, VV, Va, Vw, Vn[V4 + 9], Vb, 568446438);
    Vw = W(Vw, V9, VV, Va, Vn[V4 + 14], VY, 3275163606);
    Va = W(Va, Vw, V9, VV, Vn[V4 + 3], VA, 4107603335);
    VV = W(VV, Va, Vw, V9, Vn[V4 + 8], Vx, 1163531501);
    V9 = W(V9, VV, Va, Vw, Vn[V4 + 13], Vb, 2850285829);
    Vw = W(Vw, V9, VV, Va, Vn[V4 + 2], VY, 4243563512);
    Va = W(Va, Vw, V9, VV, Vn[V4 + 7], VA, 1735328473);
    VV = W(VV, Va, Vw, V9, Vn[V4 + 12], Vx, 2368359562);
    V9 = Q(V9, VV, Va, Vw, Vn[V4 + 5], Vr, 4294588738);
    Vw = Q(Vw, V9, VV, Va, Vn[V4 + 8], Vd, 2272392833);
    Va = Q(Va, Vw, V9, VV, Vn[V4 + 11], Vf, 1839030562);
    VV = Q(VV, Va, Vw, V9, Vn[V4 + 14], Vo, 4259657740);
    V9 = Q(V9, VV, Va, Vw, Vn[V4 + 1], Vr, 2763975236);
    Vw = Q(Vw, V9, VV, Va, Vn[V4 + 4], Vd, 1272893353);
    Va = Q(Va, Vw, V9, VV, Vn[V4 + 7], Vf, 4139469664);
    VV = Q(VV, Va, Vw, V9, Vn[V4 + 10], Vo, 3200236656);
    V9 = Q(V9, VV, Va, Vw, Vn[V4 + 13], Vr, 681279174);
    Vw = Q(Vw, V9, VV, Va, Vn[V4 + 0], Vd, 3936430074);
    Va = Q(Va, Vw, V9, VV, Vn[V4 + 3], Vf, 3572445317);
    VV = Q(VV, Va, Vw, V9, Vn[V4 + 6], Vo, 76029189);
    V9 = Q(V9, VV, Va, Vw, Vn[V4 + 9], Vr, 3654602809);
    Vw = Q(Vw, V9, VV, Va, Vn[V4 + 12], Vd, 3873151461);
    Va = Q(Va, Vw, V9, VV, Vn[V4 + 15], Vf, 530742520);
    VV = Q(VV, Va, Vw, V9, Vn[V4 + 2], Vo, 3299628645);
    V9 = V0(V9, VV, Va, Vw, Vn[V4 + 0], VR, 4096336452);
    Vw = V0(Vw, V9, VV, Va, Vn[V4 + 7], VX, 1126891415);
    Va = V0(Va, Vw, V9, VV, Vn[V4 + 14], VI, 2878612391);
    VV = V0(VV, Va, Vw, V9, Vn[V4 + 5], VE, 4237533241);
    V9 = V0(V9, VV, Va, Vw, Vn[V4 + 12], VR, 1700485571);
    Vw = V0(Vw, V9, VV, Va, Vn[V4 + 3], VX, 2399980690);
    Va = V0(Va, Vw, V9, VV, Vn[V4 + 10], VI, 4293915773);
    VV = V0(VV, Va, Vw, V9, Vn[V4 + 1], VE, 2240044497);
    V9 = V0(V9, VV, Va, Vw, Vn[V4 + 8], VR, 1873313359);
    Vw = V0(Vw, V9, VV, Va, Vn[V4 + 15], VX, 4264355552);
    Va = V0(Va, Vw, V9, VV, Vn[V4 + 6], VI, 2734768916);
    VV = V0(VV, Va, Vw, V9, Vn[V4 + 13], VE, 1309151649);
    V9 = V0(V9, VV, Va, Vw, Vn[V4 + 4], VR, 4149444226);
    Vw = V0(Vw, V9, VV, Va, Vn[V4 + 11], VX, 3174756917);
    Va = V0(Va, Vw, V9, VV, Vn[V4 + 2], VI, 718787259);
    VV = V0(VV, Va, Vw, V9, Vn[V4 + 9], VE, 3951481745);
    V9 = R(V9, V5);
    VV = R(VV, V6);
    Va = R(Va, V7);
    Vw = R(Vw, V8);
  }
  var Vl = V2(V9) + V2(VV) + V2(Va) + V2(Vw);
  return Vl.toLowerCase();
}
function david_hw(V) {
  var w = 8,
    n = 0;
  function h(E, l) {
    var g = (E & 65535) + (l & 65535),
      G = (E >> 16) + (l >> 16) + (g >> 16);
    return G << 16 | g & 65535;
  }
  function O(E, l) {
    return E >>> l | E << 32 - l;
  }
  function H(E, l) {
    return E >>> l;
  }
  function b(E, l, g) {
    return E & l ^ ~E & g;
  }
  function Y(E, l, g) {
    return E & l ^ E & g ^ l & g;
  }
  function A(E) {
    return O(E, 2) ^ O(E, 13) ^ O(E, 22);
  }
  function x(E) {
    return O(E, 6) ^ O(E, 11) ^ O(E, 25);
  }
  function r(E) {
    return O(E, 7) ^ O(E, 18) ^ H(E, 3);
  }
  function d(E) {
    return O(E, 17) ^ O(E, 19) ^ H(E, 10);
  }
  function f(E, G) {
    var J = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      u = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      L = new Array(64),
      D,
      C,
      z,
      q,
      M,
      U,
      T,
      B,
      Z,
      F,
      N,
      y;
    E[G >> 5] |= 128 << 24 - G % 32;
    E[(G + 64 >> 9 << 4) + 15] = G;
    for (var Z = 0; Z < E.length; Z += 16) {
      D = u[0];
      C = u[1];
      z = u[2];
      q = u[3];
      M = u[4];
      U = u[5];
      T = u[6];
      B = u[7];
      for (var F = 0; F < 64; F++) {
        if (F < 16) {
          L[F] = E[F + Z];
        } else {
          L[F] = h(h(h(d(L[F - 2]), L[F - 7]), r(L[F - 15])), L[F - 16]);
        }
        N = h(h(h(h(B, x(M)), b(M, U, T)), J[F]), L[F]);
        y = h(A(D), Y(D, C, z));
        B = T;
        T = U;
        U = M;
        M = h(q, N);
        q = z;
        z = C;
        C = D;
        D = h(N, y);
      }
      u[0] = h(D, u[0]);
      u[1] = h(C, u[1]);
      u[2] = h(z, u[2]);
      u[3] = h(q, u[3]);
      u[4] = h(M, u[4]);
      u[5] = h(U, u[5]);
      u[6] = h(T, u[6]);
      u[7] = h(B, u[7]);
    }
    return u;
  }
  function o(E) {
    var g = Array(),
      G = (1 << w) - 1;
    for (var P = 0; P < E.length * w; P += w) {
      g[P >> 5] |= (E.charCodeAt(P / w) & G) << 24 - P % 32;
    }
    return g;
  }
  function X(E) {
    E = E.replace(/\r\n/g, "\n");
    var g = "";
    for (var G = 0; G < E.length; G++) {
      var P = E.charCodeAt(G);
      if (P < 128) {
        g += String.fromCharCode(P);
      } else {
        if (P > 127 && P < 2048) {
          g += String.fromCharCode(P >> 6 | 192);
          g += String.fromCharCode(P & 63 | 128);
        } else {
          g += String.fromCharCode(P >> 12 | 224);
          g += String.fromCharCode(P >> 6 & 63 | 128);
          g += String.fromCharCode(P & 63 | 128);
        }
      }
    }
    return g;
  }
  function I(E) {
    var g = n ? "0123456789ABCDEF" : "0123456789abcdef",
      G = "";
    for (var P = 0; P < E.length * 4; P++) {
      G += g.charAt(E[P >> 2] >> (3 - P % 4) * 8 + 4 & 15) + g.charAt(E[P >> 2] >> (3 - P % 4) * 8 & 15);
    }
    return G;
  }
  V = X(V);
  return I(f(o(V), V.length * w));
}
function david_hn(V) {
  function w(e, u) {
    var L = e << u | e >>> 32 - u;
    return L;
  }
  function n(e) {
    var u = "",
      L,
      z,
      q;
    for (L = 0; L <= 6; L += 2) {
      z = e >>> L * 4 + 4 & 15;
      q = e >>> L * 4 & 15;
      u += z.toString(16) + q.toString(16);
    }
    return u;
  }
  function S(e) {
    var u = "",
      L,
      z;
    for (L = 7; L >= 0; L--) {
      z = e >>> L * 4 & 15;
      u += z.toString(16);
    }
    return u;
  }
  function h(e) {
    e = e.replace(/\r\n/g, "\n");
    var z = "";
    for (var q = 0; q < e.length; q++) {
      var M = e.charCodeAt(q);
      if (M < 128) {
        z += String.fromCharCode(M);
      } else {
        if (M > 127 && M < 2048) {
          z += String.fromCharCode(M >> 6 | 192);
          z += String.fromCharCode(M & 63 | 128);
        } else {
          z += String.fromCharCode(M >> 12 | 224);
          z += String.fromCharCode(M >> 6 & 63 | 128);
          z += String.fromCharCode(M & 63 | 128);
        }
      }
    }
    return z;
  }
  var O,
    H,
    b,
    Y = new Array(80),
    x = 1732584193,
    r = 4023233417,
    d = 2562383102,
    f = 271733878,
    o = 3285377520,
    R,
    X,
    I,
    l,
    g,
    G;
  V = h(V);
  var P = V.length,
    J = new Array();
  for (H = 0; H < P - 3; H += 4) {
    b = V.charCodeAt(H) << 24 | V.charCodeAt(H + 1 < 10 ? "0" + (H + 1) : H + 1) << 16 | V.charCodeAt(H + 2) << 8 | V.charCodeAt(H + 3);
    J.push(b);
  }
  switch (P % 4) {
    case 0:
      H = 2147483648;
      break;
    case 1:
      H = V.charCodeAt(P - 1) << 24 | 8388608;
      break;
    case 2:
      H = V.charCodeAt(P - 2) << 24 | V.charCodeAt(P - 1) << 16 | 32768;
      break;
    case 3:
      H = V.charCodeAt(P - 3) << 24 | V.charCodeAt(P - 2) << 16 | V.charCodeAt(P - 1) << 8 | 128;
      break;
  }
  J.push(H);
  while (J.length % 16 != 14) {
    J.push(0);
  }
  J.push(P >>> 29);
  J.push(P << 3 & 4294967295);
  for (O = 0; O < J.length; O += 16) {
    for (H = 0; H < 16; H++) {
      Y[H] = J[O + H];
    }
    for (H = 16; H <= 79; H++) {
      Y[H] = w(Y[H - 3] ^ Y[H - 8] ^ Y[H - 14] ^ Y[H - 16], 1);
    }
    R = x;
    X = r;
    I = d;
    l = f;
    g = o;
    for (H = 0; H <= 19; H++) {
      G = w(R, 5) + (X & I | ~X & l) + g + Y[H] + 1518500249 & 4294967295;
      g = l;
      l = I;
      I = w(X, 30);
      X = R;
      R = G;
    }
    for (H = 20; H <= 39; H++) {
      G = w(R, 5) + (X ^ I ^ l) + g + Y[H] + 1859775393 & 4294967295;
      g = l;
      l = I;
      I = w(X, 30);
      X = R;
      R = G;
    }
    for (H = 40; H <= 59; H++) {
      G = w(R, 5) + (X & I | X & l | I & l) + g + Y[H] + 2400959708 & 4294967295;
      g = l;
      l = I;
      I = w(X, 30);
      X = R;
      R = G;
    }
    for (H = 60; H <= 79; H++) {
      G = w(R, 5) + (X ^ I ^ l) + g + Y[H] + 3395469782 & 4294967295;
      g = l;
      l = I;
      I = w(X, 30);
      X = R;
      R = G;
    }
    x = x + R & 4294967295;
    r = r + X & 4294967295;
    d = d + I & 4294967295;
    f = f + l & 4294967295;
    o = o + g & 4294967295;
  }
  var G = S(x) + S(r) + S(d) + S(f) + S(o);
  return G.toLowerCase();
}
function david_hS() {
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (w) {
    var S = "";
    var h, O, H, b, Y, A, x;
    var r = 0;
    w = utf8Encode(w);
    while (r < w.length) {
      h = w.charCodeAt(r++);
      O = w.charCodeAt(r++);
      H = w.charCodeAt(r++);
      b = h >> 2;
      Y = (h & 3) << 4 | O >> 4;
      A = (O & 15) << 2 | H >> 6;
      x = H & 63;
      if (isNaN(O)) {
        A = x = 64;
      } else {
        isNaN(H) && (x = 64);
      }
      S = S + a.charAt(b) + a.charAt(Y) + a.charAt(A) + a.charAt(x);
    }
    return S;
  };
  this.decode = function (w) {
    var n = "";
    var Y, A, x;
    var h, O, H, b;
    var S = 0;
    w = w.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (S < w.length) {
      h = a.indexOf(w.charAt(S++));
      O = a.indexOf(w.charAt(S++));
      H = a.indexOf(w.charAt(S++));
      b = a.indexOf(w.charAt(S++));
      Y = h << 2 | O >> 4;
      A = (O & 15) << 4 | H >> 2;
      x = (H & 3) << 6 | b;
      n = n + String.fromCharCode(Y);
      H !== 64 && (n = n + String.fromCharCode(A));
      b !== 64 && (n = n + String.fromCharCode(x));
    }
    n = utf8Decode(n);
    return n;
  };
  utf8Encode = function (w) {
    w = w.replace(/\r\n/g, "\n");
    var h = "";
    for (var O = 0; O < w.length; O++) {
      var H = w.charCodeAt(O);
      if (H < 128) {
        h += String.fromCharCode(H);
      } else {
        if (H > 127 && H < 2048) {
          h += String.fromCharCode(H >> 6 | 192);
          h += String.fromCharCode(H & 63 | 128);
        } else {
          h += String.fromCharCode(H >> 12 | 224);
          h += String.fromCharCode(H >> 6 & 63 | 128);
          h += String.fromCharCode(H & 63 | 128);
        }
      }
    }
    return h;
  };
  utf8Decode = function (w) {
    var H = "";
    var S = 0;
    var h = 0;
    var O = 0;
    var b = 0;
    while (S < w.length) {
      h = w.charCodeAt(S);
      if (h < 128) {
        H += String.fromCharCode(h);
        S++;
      } else {
        if (h > 191 && h < 224) {
          O = w.charCodeAt(S + 1 < 10 ? "0" + (S + 1) : S + 1);
          H += String.fromCharCode((h & 31) << 6 | O & 63);
          S += 2;
        } else {
          O = w.charCodeAt(S + 1 < 10 ? "0" + (S + 1) : S + 1);
          b = w.charCodeAt(S + 2);
          H += String.fromCharCode((h & 15) << 12 | (O & 63) << 6 | b & 63);
          S += 3;
        }
      }
    }
    return H;
  };
}
function david_hh(V, a) {
  class n {
    constructor(S) {
      this.env = S;
    }
    send(S, h = "GET") {
      S = typeof S === "string" ? {
        url: S
      } : S;
      let H = this.get;
      h === "POST" && (H = this.post);
      return new Promise((Y, A) => {
        H.call(this, S, (r, d, f) => {
          if (r) {
            A(r);
          } else {
            Y(d);
          }
        });
      });
    }
    get(S) {
      return this.send.call(this.env, S);
    }
    post(S) {
      return this.send.call(this.env, S, "POST");
    }
  }
  return new class {
    constructor(S, h) {
      this.name = S;
      this.http = new n(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, h);
      const H = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(H);
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
    toObj(S, h = null) {
      try {
        return JSON.parse(S);
      } catch {
        return h;
      }
    }
    toStr(S, h = null) {
      try {
        return JSON.stringify(S);
      } catch {
        return h;
      }
    }
    getjson(S, h) {
      let H = h;
      const b = this.getdata(S);
      if (b) {
        try {
          H = JSON.parse(this.getdata(S));
        } catch {}
      }
      return H;
    }
    setjson(S, h) {
      try {
        return this.setdata(JSON.stringify(S), h);
      } catch {
        return false;
      }
    }
    getScript(S) {
      return new Promise(O => {
        const H = {
          url: S
        };
        this.get(H, (b, Y, A) => O(A));
      });
    }
    runScript(S, h) {
      return new Promise(b => {
        let A = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        A = A ? A.replace(/\n/g, "").trim() : A;
        let x = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        x = x ? x * 1 : 20;
        x = h && h.timeout ? h.timeout : x;
        const [r, d] = A.split("@"),
          f = {
            script_text: S,
            mock_type: "cron",
            timeout: x
          };
        const o = {
          "X-Key": r,
          Accept: "*/*"
        };
        const R = {
          url: "http: //" + d + "/v1/scripting/evaluate",
          body: f,
          headers: o
        };
        this.post(R, (I, E, l) => b(l));
      }).catch(b => this.logErr(b));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const O = this.path.resolve(this.dataFile),
          H = this.path.resolve(process.cwd(), this.dataFile),
          b = this.fs.existsSync(O),
          Y = !b && this.fs.existsSync(H);
        if (b || Y) {
          const x = b ? O : H;
          try {
            return JSON.parse(this.fs.readFileSync(x));
          } catch (d) {
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
        const h = this.path.resolve(this.dataFile),
          O = this.path.resolve(process.cwd(), this.dataFile),
          H = this.fs.existsSync(h),
          b = !H && this.fs.existsSync(O),
          Y = JSON.stringify(this.data);
        if (H) {
          this.fs.writeFileSync(h, Y);
        } else {
          if (b) {
            this.fs.writeFileSync(O, Y);
          } else {
            this.fs.writeFileSync(h, Y);
          }
        }
      }
    }
    lodash_get(S, h, O = undefined) {
      const b = h.replace(/[(d+)]/g, ".$1").split(".");
      let Y = S;
      for (const A of b) {
        Y = Object(Y)[A];
        if (Y === undefined) {
          return O;
        }
      }
      return Y;
    }
    lodash_set(S, h, O) {
      if (Object(S) !== S) {
        return S;
      }
      if (!Array.isArray(h)) {
        h = h.toString().match(/[^.[]]+/g) || [];
      }
      h.slice(0, -1).reduce((Y, A, x) => Object(Y[A]) === Y[A] ? Y[A] : Y[A] = Math.abs(h[x + 1 < 10 ? "0" + (x + 1) : x + 1]) >> 0 === +h[x + 1 < 10 ? "0" + (x + 1) : x + 1] ? [] : {}, S)[h[h.length - 1]] = O;
      return S;
    }
    getdata(S) {
      let O = this.getval(S);
      if (/^@/.test(S)) {
        const [, b, Y] = /^@(.*?).(.*?)$/.exec(S),
          A = b ? this.getval(b) : "";
        if (A) {
          try {
            const d = JSON.parse(A);
            O = d ? this.lodash_get(d, Y, "") : O;
          } catch (f) {
            O = "";
          }
        }
      }
      return O;
    }
    setdata(S, h) {
      let b = false;
      if (/^@/.test(h)) {
        const [, A, x] = /^@(.*?).(.*?)$/.exec(h),
          r = this.getval(A),
          d = A ? r === "null" ? null : r || "{}" : "{}";
        try {
          const f = JSON.parse(d);
          this.lodash_set(f, x, S);
          b = this.setval(JSON.stringify(f), A);
        } catch (R) {
          const X = {};
          this.lodash_set(X, x, S);
          b = this.setval(JSON.stringify(X), A);
        }
      } else {
        b = this.setval(S, h);
      }
      return b;
    }
    getval(S) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(S);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(S);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[S];
          } else {
            return this.data && this.data[S] || null;
          }
        }
      }
    }
    setval(S, h) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(S, h);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(S, h);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[h] = S;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[h] || null;
          }
        }
      }
    }
    initGotEnv(S) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      S && (S.headers = S.headers ? S.headers : {}, undefined === S.headers.Cookie && undefined === S.cookieJar && (S.cookieJar = this.ckjar));
    }
    get(S, h = () => {}) {
      if (S.headers) {
        delete S.headers["Content-Type"];
        delete S.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          S.headers = S.headers || {};
          const A = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(S.headers, A);
        }
        $httpClient.get(S, (x, r, d) => {
          if (!x && r) {
            r.body = d;
            r.statusCode = r.status;
          }
          h(x, r, d);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            S.opts = S.opts || {};
            const x = {
              hints: false
            };
            Object.assign(S.opts, x);
          }
          $task.fetch(S).then(d => {
            const {
                statusCode: R,
                statusCode: X,
                headers: I,
                body: E
              } = d,
              l = {
                status: R,
                statusCode: X,
                headers: I,
                body: E
              };
            h(null, l, E);
          }, d => h(d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(S);
            this.got(S).on("redirect", (o, R) => {
              try {
                if (o.headers["set-cookie"]) {
                  const l = o.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (l) {
                    this.ckjar.setCookieSync(l, null);
                  }
                  R.cookieJar = this.ckjar;
                }
              } catch (G) {
                this.logErr(G);
              }
            }).then(o => {
              const {
                  statusCode: I,
                  statusCode: E,
                  headers: l,
                  body: g
                } = o,
                G = {
                  status: I,
                  statusCode: E,
                  headers: l,
                  body: g
                };
              h(null, G, g);
            }, o => {
              const {
                message: I,
                response: E
              } = o;
              h(I, E, E && E.body);
            });
          }
        }
      }
    }
    post(S, h = () => {}) {
      const H = S.method ? S.method.toLocaleLowerCase() : "post";
      if (S.body && S.headers && !S.headers["Content-Type"]) {
        S.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (S.headers) {
        delete S.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          S.headers = S.headers || {};
          const x = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(S.headers, x);
        }
        $httpClient[H](S, (r, d, f) => {
          if (!r && d) {
            d.body = f;
            d.statusCode = d.status;
          }
          h(r, d, f);
        });
      } else {
        if (this.isQuanX()) {
          S.method = H;
          if (this.isNeedRewrite) {
            S.opts = S.opts || {};
            const d = {
              hints: false
            };
            Object.assign(S.opts, d);
          }
          $task.fetch(S).then(f => {
            const {
                statusCode: R,
                statusCode: X,
                headers: I,
                body: E
              } = f,
              l = {
                status: R,
                statusCode: X,
                headers: I,
                body: E
              };
            h(null, l, E);
          }, f => h(f));
        } else {
          if (this.isNode()) {
            this.initGotEnv(S);
            const {
              url: o,
              ...R
            } = S;
            this.got[H](o, R).then(X => {
              const {
                  statusCode: l,
                  statusCode: g,
                  headers: G,
                  body: P
                } = X,
                J = {
                  status: l,
                  statusCode: g,
                  headers: G,
                  body: P
                };
              h(null, J, P);
            }, X => {
              const {
                message: E,
                response: l
              } = X;
              h(E, l, l && l.body);
            });
          }
        }
      }
    }
    put(S, h = () => {}) {
      const O = S.method ? S.method.toLocaleLowerCase() : "put";
      S.body && S.headers && !S.headers["Content-Type"] && (S.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (S.headers) {
        delete S.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          S.headers = S.headers || {};
          const Y = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(S.headers, Y);
        }
        $httpClient[O](S, (A, x, r) => {
          !A && x && (x.body = r, x.statusCode = x.status);
          h(A, x, r);
        });
      } else {
        if (this.isQuanX()) {
          S.method = O;
          if (this.isNeedRewrite) {
            S.opts = S.opts || {};
            const A = {
              hints: false
            };
            Object.assign(S.opts, A);
          }
          $task.fetch(S).then(x => {
            const {
              statusCode: r,
              statusCode: d,
              headers: f,
              body: o
            } = x;
            const R = {
              status: r,
              statusCode: d,
              headers: f,
              body: o
            };
            h(null, R, o);
          }, x => h(x));
        } else {
          if (this.isNode()) {
            this.initGotEnv(S);
            const {
              url: x,
              ...r
            } = S;
            this.got[O](x, r).then(d => {
              const {
                statusCode: f,
                statusCode: o,
                headers: R,
                body: X
              } = d;
              const I = {
                status: f,
                statusCode: o,
                headers: R,
                body: X
              };
              h(null, I, X);
            }, d => {
              const {
                message: f,
                response: o
              } = d;
              h(f, o, o && o.body);
            });
          }
        }
      }
    }
    time(S, h = null) {
      const O = h ? new Date(h) : new Date();
      let H = {
        "M+": O.getMonth() + 1,
        "d+": O.getDate(),
        "H+": O.getHours(),
        "m+": O.getMinutes(),
        "s+": O.getSeconds(),
        "q+": Math.floor((O.getMonth() + 3) / 3),
        S: O.getMilliseconds()
      };
      if (/(y+)/.test(S)) {
        S = S.replace(RegExp.$1, (O.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let b in H) if (new RegExp("(" + b + ")").test(S)) {
        S = S.replace(RegExp.$1, RegExp.$1.length == 1 ? H[b] : ("00" + H[b]).substr(("" + H[b]).length));
      }
      return S;
    }
    msg(S = V, h = "", O = "", H) {
      const Y = A => {
        if (!A) {
          return A;
        }
        if (typeof A === "string") {
          if (this.isLoon()) {
            return A;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": A
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: A
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof A === "object") {
            if (this.isLoon()) {
              let x = A.openUrl || A.url || A["open-url"],
                r = A.mediaUrl || A["media-url"];
              const d = {
                openUrl: x,
                mediaUrl: r
              };
              return d;
            } else {
              if (this.isQuanX()) {
                let f = A["open-url"] || A.url || A.openUrl,
                  o = A["media-url"] || A.mediaUrl;
                const R = {
                  "open-url": f,
                  "media-url": o
                };
                return R;
              } else {
                if (this.isSurge()) {
                  let X = A.url || A.openUrl || A["open-url"];
                  const I = {
                    url: X
                  };
                  return I;
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
          $notification.post(S, h, O, Y(H));
        } else {
          this.isQuanX() && $notify(S, h, O, Y(H));
        }
      }
      if (!this.isMuteLog) {
        let A = ["", "==============📣系统通知📣=============="];
        A.push(S);
        h ? A.push(h) : "";
        O ? A.push(O) : "";
        console.log(A.join("\n"));
        this.logs = this.logs.concat(A);
      }
    }
    log(...S) {
      S.length > 0 && (this.logs = [...this.logs, ...S]);
      console.log(S.join(this.logSeparator));
    }
    logErr(S, h) {
      const O = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !O ? this.log("", "❗️" + this.name + ", 错误!", S) : this.log("", "❗️" + this.name + ", 错误!", S.stack);
    }
    wait(S) {
      return new Promise(h => setTimeout(h, S));
    }
    done(S = {}) {
      const h = new Date().getTime(),
        O = (h - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + O + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(S);
    }
  }(V, a);
}