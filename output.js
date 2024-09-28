//Sat Sep 28 2024 10:05:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const david_Mc = new david_Q0("喜马拉雅极速版"),
  david_MI = "V1.0.0",
  david_MT = "xmlyjsbapp";
let david_Mq = david_Mc.getjson(david_MT, []);
const david_Mn = david_Mc.isNode() ? require("fs") : "",
  david_Mi = david_Mc.isNode() ? require("ws") : "",
  david_MJ = "david_cookies.js";
david_Mc.isNode() && !david_Mn.existsSync(david_MJ) && (david_Mc.log("🔔 外挂ck文件不存在，开始创建模版>>>"), david_Mn.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", e => {}));
const david_Ml = david_Mc.isNode() ? require("http") : "",
  david_MC = david_Mc.isNode() ? require("./sendNotify") : "",
  david_Mb = david_Mc.isNode() ? require("./david_cookies") : "";
let david_Mv = david_Mc.getdata("tguserid") || 1,
  david_MH = david_Mc.getdata("xmlyjsbactivecode") || 0,
  david_ME = david_Mc.getval("xmlyjsbuserck") || 1,
  david_MS = david_Mc.getval("apiHost") || "http://106.15.104.124:8080";
david_Mc.getval("apiHosts") && (david_MS = david_Mc.getval("apiHosts"));
let david_Mw = david_Mc.getval("cleanCache") || false;
const david_MO = 0;
let david_MG = david_Mc.getval("tz") || "1",
  david_ML = undefined,
  david_Mk = undefined,
  david_MK = false,
  david_Mh = "xmlyjsb_cookies.json";
var david_Ms = "",
  david_Mu = "";
let david_MW = "",
  david_Mx = [];
let david_Mt = [],
  david_MB = [],
  david_MF = [],
  david_MD = [],
  david_Ma = [],
  david_MP = "",
  david_Mo = "",
  david_MY = "",
  david_MV = "",
  david_Mz = "",
  david_MR = "",
  david_Mj = "",
  david_MU = "",
  david_Mm = 1,
  david_My = 1;
let david_f0 = 1,
  david_f1 = 1,
  david_f2 = "",
  david_f3 = "",
  david_f4 = 3,
  david_f5 = "";
if (david_Mc.isNode()) {
  process.env.XMLYJSBAPP ? david_Mq = JSON.parse(process.env.XMLYJSBAPP) : david_Mq = david_Mb.XMLYJSB;
  david_Mv = process.env.TGUSERID;
  david_MH = process.env.XMLYJSBACTIVECODE;
  process.env.APIHOST && (david_MS = process.env.APIHOST);
  process.env.APIHOSTS && (david_MS = process.env.APIHOSTS);
  process.env.CLEANCACHE && (david_Mw = JSON.parse(process.env.CLEANCACHE));
  david_Ms = new Date(new Date().getTime()).getHours();
  david_Mu = new Date(new Date().getTime()).getMinutes();
  david_Mc.log("🔔 当前环境: Node, 当前时间：" + david_Ms + "点");
} else {
  david_Ms = new Date().getHours();
  david_Mu = new Date().getMinutes();
  david_Mc.log("🔔 当前环境: 手机代理, 当前时间：" + david_Ms + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await david_fe();
  } else {
    if (!david_Mq) {
      david_Mc.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    david_Mc.log("📢 开始检测服务器接口状态>>>");
    let f = false;
    const Q = david_MS.split("&"),
      X = Q.length;
    for (let n = 0; n < X; n++) {
      if (david_Mc.isNode()) {
        f = await david_fL("" + Q[n], 2500);
      } else {
        if (david_Mc.isSurge() || david_Mc.isLoon()) {
          f = await david_fK("" + Q[n], 2500);
        } else {
          f = await david_fk("" + Q[n], 2500);
        }
      }
      if (f == true) {
        david_MS = Q[n];
        david_Mc.log("📢 接口" + (n + 1) + "[" + Q[n] + "]服务器接口正常! 🎉");
        break;
      }
      if (n == X - 1 && f == false) {
        david_Mc.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        david_Mc.msg(david_Mc.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!david_MH || !david_Mv || david_Mv == 1 || david_MH == 0 || david_MH.length != 32) {
      david_Mc.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await david_fE(david_MT, david_Mv, david_MH);
    david_Mc.log("📢 " + david_MR);
    david_Mc.log("🔔 当前脚本版本号: " + david_MI + "，最新版本号: " + david_MV);
    if (david_f5 != "") {
      let S = new Date(david_f5).getTime(),
        w = new Date().getTime();
      if (w > S) {
        david_Mc.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (david_MI < david_MV) {
      david_Mc.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      david_fm("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (david_MY != true) {
      david_Mc.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (david_f2 != true) {
      david_Mc.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (david_Mo != true) {
      david_Mc.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (david_MU == true) {
      david_Mc.log("🔔 此脚本采用付费模式。🔒");
    } else {
      david_Mc.log("🔔 此脚本采用免费模式。🔓");
    }
    if (david_f5 != "") {
      if (david_MU == true) {
        let g = new Date(david_f5).getTime(),
          W = new Date().getTime();
        if (W > g) {
          david_Mc.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        } else {
          david_Mc.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
        }
      }
    } else {
      if (david_MU == true) {
        if (david_Mj != true) {
          david_Mc.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        } else {
          david_Mc.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        }
      }
    }
    if (david_Mm > 1) {
      david_Mc.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + david_f4 * david_Mm + "个账号。");
    }
    david_My > 1 && david_Mc.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + david_f0 + "次, 已经运行了" + david_f1 + "次。");
    if (david_Mz != true) {
      david_Mc.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (david_Mq.length > david_f4 * david_Mm) {
      david_Mc.log("❗️ 当前用户一次最多运行" + david_f4 * david_Mm + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (david_Mq.length == 0) {
      david_Mc.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (david_f1 + david_Mq.length > david_f0) {
      david_Mc.log("📢 一共发现了" + david_Mq.length + "个账号");
      david_Mc.log("❗️ 当前用户运行次数剩余" + (david_f0 - david_f1) + "次，还可以运行" + (david_f0 - david_f1) + "个账号，还需要" + (david_Mq.length - (david_f0 - david_f1)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    david_f5 != "" && david_Mc.log("📢 你的会员有效期到： " + david_f5);
    david_Mc.log("📢 一共发现了" + david_Mq.length + "个账号");
    if (david_Mc.isNode()) {
      if (!david_Mn.existsSync(david_Mh)) {
        xmlyjsb_cks = {};
      } else {
        xmlyjsb_cks = JSON.parse(david_Mn.readFileSync(david_Mh, "utf8"));
      }
    }
    let N = [],
      c = david_Mq.length,
      I = 0;
    if (david_Mc.isNode() && process.env.XMLYJSB_THREAD_COUNT) {
      I = parseInt(process.env.XMLYJSB_THREAD_COUNT);
    } else {
      I = c;
    }
    let T = david_Mq.length;
    if (I >= c) {
      I = c;
      T = 1;
      david_Mc.log("📢 你设置的线程数是" + I + "，账号个数是" + c + "，" + T + "次可全部跑完。");
      for (let e0 = 0; e0 < david_Mq.length; e0++) {
        N.push(david_f7(e0));
        david_Mx[e0] = "";
        if (david_Mc.isNode()) {
          david_MB[e0] = 0;
          await david_f8(e0);
        } else {
          david_MB[e0] = 1;
        }
      }
      await Promise.allSettled(N).then(e4 => {
        if (david_Mc.isNode() && david_MK) {
          david_Mc.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
          david_Mn.writeFileSync(david_Mh, JSON.stringify(xmlyjsb_cks, null, 2));
        }
        david_Mc.log("日志整理功能如下：");
        david_Mc.log("---------------日志整理开始--------------");
        for (let e6 = 0; e6 < david_Mq.length; e6++) {
          david_Mc.log(david_Mx[e6]);
          david_MW += david_Mx[e6];
        }
        david_Mc.log("---------------日志整理结束--------------");
        david_fm(david_MW);
      });
    } else {
      T = Math.ceil(c / I);
      david_Mc.log("📢 你设置的线程数是" + I + "，账号个数是" + c + "，计算后分" + T + "次执行，一次可执行" + I + "个账号，最后一次如果不够" + I + "个账号，剩多少个账号就跑几个账号。");
      for (let e6 = 0; e6 < T; e6++) {
        for (let e8 = e6 * I; e8 < I * (e6 + 1) && e8 < c; e8++) {
          N.push(david_f7(e8));
          david_Mx[e8] = "";
          david_MB[e8] = 1;
          await david_f8(e8);
        }
        await Promise.allSettled(N).then(ee => {
          N = [];
          if (e6 == T - 1) {
            david_Mc.isNode() && david_MK && (david_Mc.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), david_Mn.writeFileSync(david_Mh, JSON.stringify(xmlyjsb_cks, null, 2)));
            david_Mc.log("日志整理功能如下：");
            david_Mc.log("---------------日志整理开始--------------");
            for (let eN = 0; eN < david_Mq.length; eN++) {
              david_Mc.log(david_Mx[eN]);
              david_MW += david_Mx[eN];
            }
            david_Mc.log("---------------日志整理结束--------------");
            david_fm(david_MW);
          }
        });
      }
    }
  }
})().catch(M => david_Mc.logErr(M)).finally(() => david_Mc.done());
async function david_f7(e) {
  return new Promise((f, Q) => {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 开始执行 working......");
    david_f9(f, e);
  });
}
async function david_f8(e) {
  if (david_Mc.isNode()) {
    david_MF[e] > 0 && david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 尝试重新连接服务器>>>>>>");
    david_Mt[e] = new david_Mi(david_MS.replace("http", "ws") + "/ws");
    david_Mt[e].on("open", function X() {
      david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签名通道已连接");
    });
    david_Mt[e].on("close", function N() {
      david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    david_Mt[e].on("error", function c() {
      david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签名通道已关闭，原因是出现错误");
      david_MB[e] = 1;
      david_MF[e]++;
      david_MF[e] <= 3 && david_f8(e);
    });
  }
}
async function david_f9(e, M) {
  if (david_Mc.isNode()) {
    await david_Mc.wait(3000, 5000);
  }
  await david_fM(M);
  await david_ff(M);
  await david_fv(M);
  await david_fN(M);
  await david_fC(M);
  await david_fi(M);
  await david_fq(M);
  await david_fX(M);
  if (david_Mc.isNode()) {
    await david_Mt[M].close();
  }
  await david_fS(david_MT, david_Mv);
  e();
}
async function david_fe() {
  if ($request.url.match(/\/task\/record/)) {
    const f = $request.headers.Cookie;
    let Q = david_ME - 1;
    if (david_Mq[Q]) {
      david_Mq[Q].cookie = f;
    } else {
      const c = {
        cookie: f
      };
      david_Mq[Q] = c;
    }
    david_Mc.setdata(JSON.stringify(david_Mq, null, 2), "xmlyjsbapp");
    david_Mc.msg(david_Mc.name, "喜马拉雅极速版账号" + (Q + 1) + "Cookie获取成功！🎉");
  }
}
async function david_fM(e) {
  const f = "https://passport.ximalaya.com/web/login/user";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null && X.ret == 0) {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 用户名=> " + X.nickname);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 用户名=> " + X.nickname + "\n";
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 手机号=> " + X.mobile);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 手机号=> " + X.mobile + "\n";
    david_Mq[e].uid = X.uid;
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 用户名信息=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 用户名信息=> " + X.msg + "\n";
  }
}
async function david_ff(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/account/coin";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null) {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 金币=> " + X.total);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 金币=> " + X.total + "\n";
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 余额=> " + (X.total / 10000).toFixed(2) + "元");
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 余额=> " + (X.total / 10000).toFixed(2) + "元 \n";
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 账户信息=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 账户信息=> " + X.msg + "\n";
  }
}
async function david_fQ(e) {
  const f = "https://passport.ximalaya.com/user-http-app/v1/token/refresh";
  let Q = "";
  await david_fp(f, Q, e);
  david_MD[e].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await david_fW("post", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null && X.ret == 0) {
    if (X.newToken != null) {
      david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 刷新token=> " + X.data.newToken);
    }
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 刷新token=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 刷新token=> " + X.msg + "\n";
  }
}
async function david_fX(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/task/record?taskLabels=1,2";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null) {
    let N = X.taskList;
    for (let c = 0; c < N.length; c++) {
      let I = N[c];
      if (I.taskId == 65) {
        let T = I.step - I.process;
        for (let q = 0; q < T; q++) {
          let J = await david_fI(e);
          await david_Mc.wait(david_ML.randomNum(10000, 15000));
          await david_fT(e, J, 2, I.title + "(" + (I.process + q + 1) + "/" + I.step + ")");
        }
      }
    }
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 任务中心=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 任务中心=> " + X.msg + "\n";
  }
}
async function david_fN(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/check-in/record?time=" + david_ML.ts13();
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null) {
    let c = X.receivedToday;
    if (c == null || c == false) {
      let T = X.checkInDetails[X.thatDay - 1];
      await david_fc(e, T.checkInAward);
    }
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签到记录=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签到记录=> " + X.msg + "\n";
  }
}
async function david_fc(e, M) {
  const Q = "https://m.ximalaya.com/speed/web-earn/check-in/check";
  let X = david_ML.createDayjs();
  let N = X().format("YYYYMMDD");
  await david_fx(e, "date=" + N + "&uid=" + david_Mq[e].uid);
  let c = david_Ma[e],
    I = "{\"checkData\":\"" + c + "\",\"makeUp\":false}";
  await david_fp(Q, I, e);
  await david_fW("post", david_MD[e], david_fa());
  let T = david_MP;
  if (T != null) {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签到=> 签到成功，获得" + M + "金币");
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签到=> 签到成功，获得" + M + "金币\n";
    let n = await david_fI(e);
    await david_Mc.wait(david_ML.randomNum(10000, 15000));
    await david_fT(e, n, 1, "每日签到看广告奖励");
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签到=> " + T.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 签到=> " + T.msg + "\n";
  }
}
async function david_fI(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/ad/token";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null) {
    return X.id;
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 获取广告token=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 获取广告token=> " + X.msg + "\n";
  }
}
async function david_fT(e, M, f, Q) {
  const N = "https://m.ximalaya.com/speed/web-earn/ad/score";
  let c = david_Mk.MD5("businesstype=" + f + "&token=" + M + "&uid=" + david_Mq[e].uid + "&q35435432sadks2i3546p2ndkcaqiwurhqfebt4kn").toString();
  let I = "{\"sign\":\"" + c + "\",\"businessType\":" + f + "}";
  await david_fp(N, I, e);
  await david_fW("post", david_MD[e], david_fa());
  let T = david_MP;
  if (T != null) {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: " + Q + "=> " + T.coin + "金币");
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: " + Q + "=> " + T.coin + "金币\n";
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: " + Q + "=> " + T.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: " + Q + "=> " + T.msg + "\n";
  }
}
async function david_fq(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/redPacket/config";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null && X.code == 0) {
    if (X.data.waitTime == 0) {
      let I = X.data.stageId;
      await david_fn(e, 1, I);
      await david_Mc.wait(david_ML.randomNum(10000, 15000));
      await david_fn(e, 2, I);
    }
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 宝箱信息=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 宝箱信息=> " + X.msg + "\n";
  }
}
async function david_fn(M, f, Q) {
  const N = "https://m.ximalaya.com/speed/web-earn/redPacket/receive/v2";
  let c = david_ML.ts13();
  await david_fx(M, "stageId=" + Q + "&receiveType=" + f + "&timestamp=" + c + "&uid=" + david_Mq[M].uid);
  let I = david_Ma[M];
  const T = {
    receiveType: f,
    signature: I,
    timestamp: c,
    stageId: Q
  };
  await david_fp(N, JSON.stringify(T), M);
  await david_fW("post", david_MD[M], david_fa());
  let n = david_MP;
  if (n != null && n.code == 0) {
    if (f == 1) {
      david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 打开宝箱=> 获得" + n.data.score + "金币");
      david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 打开宝箱=> 获得" + n.data.score + "金币\n";
    } else {
      david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + n.data.score + "金币");
      david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + n.data.score + "金币\n";
    }
  } else {
    david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱奖励=> " + n.msg);
    david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 宝箱奖励=> " + n.msg + "\n";
  }
}
async function david_fi(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/topic/user";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null && X.code == 0) {
    if (X.data.stamina > 0) {
      await david_fJ(e);
    }
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 宝箱信息=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 宝箱信息=> " + X.msg + "\n";
  }
}
async function david_fJ(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/topic/start";
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null && X.code == 0) {
    let c = X.data.paperId,
      I = X.data.topics.length,
      T = X.data.topics[I - 1].topicId;
    await david_Mc.wait(david_ML.randomNum(10000, 15000));
    await david_fl(e, 1, c, T, I);
    await david_Mc.wait(david_ML.randomNum(10000, 15000));
    await david_fl(e, 2, c, T, I);
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 宝箱信息=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 宝箱信息=> " + X.msg + "\n";
  }
}
async function david_fl(M, f, Q, X, N) {
  const I = "https://m.ximalaya.com/speed/web-earn/topic/reward/v2";
  let T = david_ML.ts13();
  await david_fx(M, "lastTopicId=" + X + "&numOfAnswers=" + N + "&receiveType=" + f + "&timestamp=" + T + "&uid=" + david_Mq[M].uid);
  let q = david_Ma[M];
  const n = {
    numOfAnswers: N,
    paperId: Q,
    signature: q,
    timestamp: T,
    receiveType: f,
    lastTopicId: X
  };
  await david_fp(I, JSON.stringify(n), M);
  await david_fW("post", david_MD[M], david_fa());
  let l = david_MP;
  if (l != null && l.code == 0) {
    f == 1 ? (david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 答题成功=> 获得" + l.data.reward + "金币"), david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 答题成功=> " + l.data.reward + "金币\n") : (david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 答题成功看广告=> 翻了" + l.data.multiple + "倍，获得" + l.data.reward + "金币"), david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 答题成功看广告=> 翻了" + l.data.multiple + "倍，获得" + l.data.reward + "金币\n");
  } else {
    david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 答题奖励=> " + l.msg);
    david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 答题奖励=> " + l.msg + "\n";
  }
}
async function david_fC(e) {
  const f = "https://m.ximalaya.com/speed/web-earn/drink/detail?timestamp=" + david_ML.ts13();
  let Q = "";
  await david_fp(f, Q, e);
  await david_fW("get", david_MD[e], david_fa());
  let X = david_MP;
  if (X != null && X.code == 0) {
    let c = X.data.drinks;
    for (let I = 0; I < c.length; I++) {
      let T = c[I];
      if (T.receiveStatus == 2) {
        await david_fb(e, T, 1);
        await david_Mc.wait(david_ML.randomNum(10000, 15000));
        await david_fb(e, T, 2);
      } else {
        if (T.receiveStatus == 4) {
          await david_Mc.wait(david_ML.randomNum(10000, 15000));
          await david_fb(e, T, 3);
        }
      }
    }
  } else {
    david_Mc.log("[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 每日喝水信息=> " + X.msg);
    david_Mx[e] += "[账号" + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + "]: 每日喝水信息=> " + X.msg + "\n";
  }
}
async function david_fb(M, f, Q) {
  const N = "https://m.ximalaya.com/speed/web-earn/drink/receive/v2";
  let c = david_ML.ts13();
  await david_fx(M, "stageId=" + f.stageId + "&isDouble=" + Q + "&timestamp=" + c + "&uid=" + david_Mq[M].uid);
  let I = david_Ma[M];
  const T = {
    isDouble: Q,
    timestamp: c,
    signature: I,
    stageId: f.stageId
  };
  await david_fp(N, JSON.stringify(T), M);
  await david_fW("post", david_MD[M], david_fa());
  let n = david_MP;
  if (n != null && n.code == 0) {
    if (Q == 1) {
      david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "(" + f.description + ")=> 获得" + n.data.score + "金币");
      david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "(" + f.description + ")=> " + n.data.score + "金币\n";
    } else {
      if (Q == 2) {
        david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "_看广告=> 获得" + n.data.score + "金币");
        david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "_看广告=> 获得" + n.data.score + "金币\n";
      } else {
        david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "_(补)=> 获得" + n.data.score + "金币");
        david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "_(补)=> 获得" + n.data.score + "金币\n";
      }
    }
  } else {
    david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "=> " + n.msg);
    david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "=> " + n.msg + "\n";
  }
}
async function david_fv(M) {
  const Q = "https://m.ximalaya.com/speed/web-earn/listen/b/coin/config?ts=" + david_ML.ts13();
  let X = "";
  await david_fp(Q, X, M);
  await david_fW("get", david_MD[M], david_fa());
  let N = david_MP;
  if (N != null && N.code == 0) {
    let c = N.data.coinList,
      I = N.data.positionList;
    const T = {
      videoAdType: 1,
      positionId: 0,
      positionName: "",
      coinSceneId: 0
    };
    let n = I.find(J => J.positionName == "sub_listentime_double_video");
    for (let J = 0; J < c.length; J++) {
      let C = c[J];
      if (C.coinStatus == 1 && (C.listenTime == 30 || C.listenTime == 120)) {
        await david_fH(M, C, N.data.priodId, T);
        await david_Mc.wait(david_ML.randomNum(5000, 10000));
        await david_fH(M, C, N.data.priodId, n);
      } else {
        C.coinStatus == 3 && C.hasDouble == false && (await david_fH(M, C, N.data.priodId, n));
      }
    }
  } else {
    david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 听书奖励信息=> " + N.msg);
    david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: 听书奖励信息=> " + N.msg + "\n";
  }
}
async function david_fH(M, f, Q, X) {
  const c = "https://m.ximalaya.com/speed/web-earn/listen/b/award";
  let I = david_ML.ts13();
  let T = "priodId=" + Q + "&stageId=" + f.stageId + "&listenTime=" + f.listenTime + "&coinSceneId=" + X.coinSceneId + "&positionId=" + X.positionId + "&positionName=" + X.positionName + "&timestamp=" + I + "&randomDouble=" + X.videoAdType;
  await david_fx(M, T);
  let q = david_Ma[M];
  const n = {
    stageId: f.stageId,
    positionName: X.positionName,
    randomDouble: X.videoAdType,
    priodId: Q,
    signature: q,
    positionId: X.positionId,
    coinSceneId: X.coinSceneId,
    timestamp: I,
    listenTime: f.listenTime
  };
  await david_fp(c, JSON.stringify(n), M);
  await david_fW("post", david_MD[M], david_fa());
  let l = david_MP;
  if (l != null && l.code == 0) {
    if (X.videoAdType == 1) {
      david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "(" + f.comment + ")=> 获得" + l.data.coinNum + "金币");
      david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "(" + f.comment + ")=> " + l.data.coinNum + "金币\n";
    } else {
      if (X.videoAdType == 2) {
        david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "_看广告=> 获得" + l.data.coinNum + "金币");
        david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "_看广告=> 获得" + l.data.coinNum + "金币\n";
      }
    }
  } else {
    david_Mc.log("[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "=> " + l.msg);
    david_Mx[M] += "[账号" + (M + 1 < 10 ? "0" + (M + 1) : M + 1) + "]: " + f.title + "=> " + l.msg + "\n";
  }
}
function david_fE(e, M, f) {
  return new Promise((X, N) => {
    const T = david_MS + "/script/permissions/lastest",
      q = {
        appName: e,
        userId: M,
        activityCode: f,
        version: david_MI
      };
    const i = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const J = {
      url: T,
      headers: i,
      body: JSON.stringify(q)
    };
    david_Mc.post(J, async (l, C, b) => {
      if (b && b != null && b.replace(/\"/g, "").length > 50) {
        const S = b.replace(/\"/g, "").slice(34);
        david_ML = await david_fG(david_Mw);
        david_Mk = david_ML.createCryptoJS();
        result = JSON.parse(david_Mk.enc.Base64.parse(S).toString(david_Mk.enc.Utf8));
        try {
          david_MV = result.version;
          david_Mo = result.userAuth;
          david_MY = result.scriptAuth;
          david_Mz = result.runAuth;
          david_MR = result.notify;
          david_Mj = result.vipAuth;
          david_MU = result.isCharge;
          david_Mm = result.runAcounts;
          david_My = result.buyCount;
          david_f1 = result.runedCounts;
          david_f0 = result.runTotalCounts;
          david_f2 = result.userRank;
          david_f3 = result.invicate;
          david_f4 = result.accountNumbers;
          david_f5 = result.vipDate;
        } catch (L) {
          david_Mc.log(L);
        }
      } else {
        david_Mc.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      X();
    });
  });
}
function david_fS(e, M) {
  return new Promise((Q, X) => {
    const c = david_MS + "/script/run/add",
      I = {
        appName: e,
        userId: M,
        activityCode: david_MH,
        version: david_MI
      };
    const q = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const n = {
      url: c,
      headers: q,
      body: JSON.stringify(I)
    };
    david_Mc.post(n, async (i, J, l) => {
      Q();
    });
  });
}
function david_fw(M) {
  let X = david_Mq[M].mobile;
  xmlyjsb_item = xmlyjsb_cks["" + X];
  if (xmlyjsb_item) {
    david_Mq[M].refreshToken = xmlyjsb_item.refreshToken;
    david_Mq[M].accessToken = xmlyjsb_item.accessToken;
    return true;
  } else {
    return false;
  }
}
function david_fO(e) {
  xmlyjsb_cks[david_Mq[e].mobile] = {
    refreshToken: david_Mq[e].refreshToken,
    accessToken: david_Mq[e].accessToken,
    ts: ts13()
  };
}
async function david_fG(e) {
  let f = david_Mc.getdata("Utils_Code") || "";
  if (!e && f && Object.keys(f).length) {
    david_Mc.log("📢 缓存中存在JS-Utils");
    eval(f);
    return creatUtils();
  }
  david_Mc.log("📢 开始初始化JS-Utils");
  return new Promise(async X => {
    david_Mc.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(c => {
      david_Mc.setdata(c, "Utils_Code");
      eval(c);
      david_Mc.log("📢 JS-Utils加载成功");
      X(creatUtils());
    });
  });
}
function david_fL(e, M) {
  return new Promise((Q, X) => {
    const c = setTimeout(() => {
        Q(false);
      }, M),
      I = david_Ml.get(e, T => {
        clearTimeout(c);
        if (T.statusCode === 404) {
          Q(true);
        } else {
          Q(false);
        }
      });
    I.on("error", T => {
      clearTimeout(c);
      Q(false);
    });
    I.on("timeout", () => {
      I.abort();
      X(new Error("请求超时"));
    });
  });
}
async function david_fk(e, M = 3000) {
  return new Promise((Q, X) => {
    const I = {
      url: e + "/docs"
    };
    setTimeout(() => {
      Q(false);
    }, M);
    david_Mc.get(I, async (T, q, n) => {
      q.status == 401 ? Q(true) : Q(false);
    });
  });
}
async function david_fK(e, M = 3000) {
  return new Promise((Q, X) => {
    const c = {
      url: e + "/"
    };
    setTimeout(() => {
      Q(false);
    }, M);
    $httpClient.get(c, async (I, T, q) => {
      if (q == "{\"detail\":\"Not Found\"}") {
        Q(true);
      } else {
        Q(false);
      }
    });
  });
}
async function david_fh(e, M, f) {
  return new Promise((X, N) => {
    const T = david_MS + "/redis/hash/get/" + M + "/" + f,
      q = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const n = {
      url: T,
      headers: q
    };
    david_Mc.get(n, async (l, C, b) => {
      const E = b.replace(/\"/g, "");
      answerTexts[e] = E;
      X();
    });
  });
}
function david_fs(e, M, f) {
  return new Promise((X, N) => {
    const T = david_MS + "/redis/hash/set",
      q = {
        key: e,
        hashKey: M,
        hashValue: f
      };
    const i = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const J = {
      url: T,
      headers: i,
      body: JSON.stringify(q)
    };
    david_Mc.post(J, async (l, C, b) => {
      X();
    });
  });
}
function david_fu(e) {
  return new Promise((f, Q) => {
    const N = david_MS + "/redis/set/pop/" + e,
      c = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const I = {
      url: N,
      headers: c
    };
    david_Mc.get(I, async (q, n, i) => {
      const l = i.replace(/\"/g, "");
      popCookie = l;
      f();
    });
  });
}
async function david_fp(f, Q, X) {
  let c = "ting_v3.0.31_c5(CFNetwork, iOS 16.6.1, iPhone10,2) ;xmly(lite)/3.0.31/ios_1";
  david_Mq[X].ua && david_Mq[X].ua != "" && (c = david_Mq[X].ua);
  let I = david_fB(f);
  const T = {
    "Content-Type": "application/json",
    "User-Agent": c,
    Cookie: david_Mq[X].cookie,
    Host: I
  };
  const q = {
    url: f,
    headers: T
  };
  if (Q) {
    q.body = Q;
  }
  david_MD[X] = q;
  return q;
}
function david_fg(f, Q, X) {
  let c = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  david_Mq[X].ua && david_Mq[X].ua != "" && (c = david_Mq[X].ua);
  let I = david_fB(f);
  const T = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": c,
    Authorization: david_Mq[X].auth,
    Host: I
  };
  const q = {
    url: f,
    headers: T
  };
  if (Q) {
    q.body = Q;
  }
  david_MD[X] = q;
  return q;
}
async function david_fW(e, M, f) {
  david_MP = null;
  return new Promise(X => {
    david_Mc[e](M, async (I, T, q) => {
      try {
        if (I) {
          david_Mc.log(f + ": " + e + "请求失败");
          david_Mc.log(JSON.stringify(I));
          david_Mc.logErr(I);
        } else {
          if (david_fP(q)) {
            david_MP = JSON.parse(q);
            david_MO == 1 && david_Mc.log(david_MP);
          } else {
            const b = new URL(M.url);
            david_Mc.log(b.pathname + "发起" + e + "请求时，出现错误，请处理");
          }
        }
      } catch (E) {
        david_Mc.logErr(E, T);
      } finally {
        X(david_MP);
      }
    });
  });
}
async function david_fx(e, M) {
  if (david_MB[e] == 0) {
    await david_fr(e, M);
  } else {
    await david_fZ(e, M);
  }
}
function david_fr(e, M) {
  return new Promise((Q, X) => {
    function c(I) {
      let n = I.toString("utf8");
      david_Ma[e] = n;
      david_Mt[e].removeListener("message", c);
      Q(n);
    }
    david_Mt[e].on("message", c);
    if (david_Mt[e].readyState === 1) {
      const I = {
        method: david_MT,
        params: {}
      };
      I.params.content = M;
      I.params.appName = david_MT;
      I.params.uuid = david_Mv;
      david_Mt[e].send(JSON.stringify(I), T => {
        if (T) {
          X(T);
        }
      });
    } else {
      Q(david_fZ(e, M));
      david_Mt[e].removeListener("message", c);
    }
  });
}
function david_fZ(e, M) {
  return new Promise((Q, X) => {
    const I = david_MS + "/sign/xmly",
      T = {
        content: M,
        appName: david_MT,
        uuid: david_Mv
      };
    const n = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const J = {
      url: I,
      headers: n,
      body: JSON.stringify(T)
    };
    david_Mc.post(J, async (l, C, b) => {
      const H = b.replace(/\"/g, "");
      david_Ma[e] = H;
      Q();
    });
  });
}
function david_fA(e, M, f) {
  const X = david_fd(e);
  M.forEach(I => {
    delete X[I];
  });
  Object.assign(X, f);
  const N = Object.keys(X).sort(),
    c = N.map(I => I + "=" + X[I]).join("&");
  return c;
}
function david_fd(e) {
  e = e.replace(/\"/g, "");
  var f,
    Q = {},
    X = e.slice(e.indexOf("?") + 1).split("&");
  for (var N = 0; N < X.length; N++) {
    f = X[N].split("=");
    Q[f[0]] = f[1];
  }
  return Q;
}
function david_ft(M) {
  const X = M.replace(/[{} ]/g, ""),
    N = X.split(","),
    c = {};
  N.forEach(I => {
    const [q, n] = I.split("=");
    c[q] = n;
  });
  return c;
}
function david_fB(M) {
  let X = M.substr(M.indexOf("//") + 2);
  let N = X.substr(0, X.indexOf("/")),
    c = "";
  let I = N.indexOf(":");
  if (I > 0) {
    c = N.substr(0, I);
  } else {
    c = N;
  }
  return c;
}
function david_fF(M, f) {
  var q = new Date(M);
  var I = new Date(f);
  var T = I - q;
  var n = Math.floor(T / 1000);
  return n;
}
function david_fD(M, f) {
  if (M.length * 2 <= f) {
    return M;
  }
  var N = 0,
    c = "";
  for (var I = 0; I < M.length; I++) {
    c = c + M.charAt(I);
    if (M.charCodeAt(I) > 128) {
      N = N + 2;
      if (N >= f) {
        return c.substring(0, c.length - 1) + "...";
      }
    } else {
      N = N + 1;
      if (N >= f) {
        return c.substring(0, c.length - 2) + "...";
      }
    }
  }
  return c;
}
function david_fa() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function david_fP(M) {
  try {
    if (typeof JSON.parse(M) == "object") {
      return true;
    }
  } catch (N) {
    console.log(N);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function david_fo(e) {
  var f = Object.keys(e).map(function (Q) {
    return encodeURIComponent(Q) + "=" + encodeURIComponent(e[Q]);
  }).join("&");
  return f;
}
function david_fY(e) {
  var f = String.fromCharCode(e.charCodeAt(0) + e.length);
  for (var Q = 1; Q < e.length; Q++) {
    f += String.fromCharCode(e.charCodeAt(Q) + e.charCodeAt(Q - 1));
  }
  return escape(f);
}
function david_fV(e) {
  e = unescape(e);
  var f = String.fromCharCode(e.charCodeAt(0) - e.length);
  for (var Q = 1; Q < e.length; Q++) {
    f += String.fromCharCode(e.charCodeAt(Q) - f.charCodeAt(Q - 1));
  }
  return f;
}
function david_fz() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function david_fR(e) {
  return new Promise((f, Q) => {
    const N = "https://v1.hitokoto.cn/?c=e",
      c = {
        accept: "application/json"
      };
    const I = {
      url: N,
      headers: c
    };
    david_Mc.get(I, async (q, n, J) => {
      let C = JSON.parse(J),
        b = C.hitokoto;
      contents[e] = b + " " + b;
      f();
    });
  });
}
function david_fj() {
  return new Promise((M, f) => {
    const N = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      c = {
        url: N
      };
    david_Mc.get(c, async (T, q, n) => {
      M(n);
    });
  });
}
function david_fU() {
  const M = {
    INPHG: function (Q, X) {
      return Q == X;
    },
    SODvM: function (Q, X) {
      return Q === X;
    },
    qHaRx: "baIAN",
    kPIiW: "JIsQN"
  };
  const f = M;
  f.INPHG(david_MG, 1) && (f.SODvM(f.qHaRx, f.kPIiW) ? f = Q.XMLYJSB : david_Mc.msg(david_Mc.name, "", david_Mc.message));
}
async function david_fm(M) {
  const f = {
    uZNOy: function (X, N) {
      return X * N;
    },
    ZJRuj: function (X, N) {
      return X <= N;
    },
    qgvdb: function (X, N) {
      return X > N;
    },
    FAvfB: function (X, N) {
      return X == N;
    },
    PNbtn: function (X, N) {
      return X == N;
    },
    llfPg: function (X, N) {
      return X !== N;
    },
    JxFDI: "IZZnC",
    RLqsN: function (X, N) {
      return X == N;
    },
    XUVEe: "axvZy",
    roGoq: function (X, N) {
      return X === N;
    },
    FLiwY: "YaIgx",
    arkAf: "usTfc",
    HApaf: "GRXME",
    VyCHK: "iuluk",
    UkbfZ: function (X, N) {
      return X === N;
    },
    WGfhB: "bjkes",
    MdwqN: "EwYeA"
  };
  const Q = f;
  if (Q.FAvfB(david_Ms, 9) || Q.FAvfB(david_Ms, 12) || Q.PNbtn(david_Ms, 18)) {
    if (Q.llfPg(Q.JxFDI, Q.JxFDI)) {
      Q = X[N].ua;
    } else {
      if (Q.RLqsN(david_MG, 1)) {
        if (Q.llfPg(Q.XUVEe, Q.XUVEe)) {
          return true;
        } else {
          if (david_Mc.isNode()) {
            if (Q.roGoq(Q.FLiwY, Q.arkAf)) {
              Q.log("❗️ 当前用户一次最多运行" + Q.uZNOy(X, N) + "个账号，需要增加账号请查看置顶说明。");
              return;
            } else {
              await david_MC.sendNotify(david_Mc.name, M);
            }
          } else {
            Q.roGoq(Q.HApaf, Q.VyCHK) ? Q.ZJRuj(this.logLevels[this.logLevel], this.logLevels.info) && (Q.qgvdb(N.length, 0) && (this.logs = [...this.logs, ...c]), I.log("" + this.logLevelPrefixs.info + T.map(J => J ?? n(J)).join(this.logSeparator))) : david_Mc.msg(david_Mc.name, "", M);
          }
        }
      } else {
        Q.UkbfZ(Q.WGfhB, Q.MdwqN) ? Q = X.parse(N.env.XMLYJSBAPP) : david_Mc.log(M);
      }
    }
  }
}
async function david_fy(e, M, f) {
  return new Promise((X, N) => {
    const c = "https://wxpusher.zjiecode.com/api/send/message",
      I = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: M,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [f],
        verifyPay: false
      };
    const q = {
      "Content-Type": "application/json"
    };
    const n = {
      url: c,
      headers: q,
      body: JSON.stringify(I)
    };
    david_Mc.post(n, async (J, l, C) => {
      X();
    });
  });
}
function david_Q0(M, f) {
  class X {
    constructor(N) {
      const c = {};
      c.DLPjs = "data:";
      this.env = N;
    }
    send(N, c = "GET") {
      N = "string" == typeof N ? {
        url: N
      } : N;
      let q = this.get;
      "POST" === c && (q = this.post);
      return new Promise((n, J) => {
        q.call(this, N, (l, C, b) => {
          l ? J(l) : n(C);
        });
      });
    }
    get(N) {
      return this.send.call(this.env, N);
    }
    post(N) {
      return this.send.call(this.env, N, "POST");
    }
  }
  return new class {
    constructor(N, c) {
      const q = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const n = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = q;
      this.logLevelPrefixs = n;
      this.logLevel = "info";
      this.name = N;
      this.http = new X(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, c);
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
    toObj(N, c = null) {
      try {
        return JSON.parse(N);
      } catch {
        return c;
      }
    }
    toStr(N, c = null, ...I) {
      try {
        return JSON.stringify(N, ...I);
      } catch {
        return c;
      }
    }
    getjson(N, c) {
      let q = c;
      if (this.getdata(N)) {
        try {
          q = JSON.parse(this.getdata(N));
        } catch {}
      }
      return q;
    }
    setjson(N, c) {
      try {
        return this.setdata(JSON.stringify(N), c);
      } catch {
        return !1;
      }
    }
    getScript(N) {
      return new Promise(I => {
        const q = {
          url: N
        };
        this.get(q, (n, J, l) => I(l));
      });
    }
    runScript(N, c) {
      return new Promise(T => {
        let q = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        q = q ? q.replace(/\n/g, "").trim() : q;
        let J = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        J = J ? 1 * J : 20;
        J = c && c.timeout ? c.timeout : J;
        const l = {
          script_text: N,
          mock_type: "cron",
          timeout: J
        };
        const [C, b] = q.split("@"),
          v = {
            url: "http://" + b + "/v1/scripting/evaluate",
            body: l,
            headers: {
              "X-Key": C,
              Accept: "*/*"
            },
            timeout: J
          };
        this.post(v, (H, E, S) => T(S));
      }).catch(T => this.logErr(T));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const T = this.path.resolve(this.dataFile),
          q = this.path.resolve(process.cwd(), this.dataFile),
          n = this.fs.existsSync(T),
          J = !n && this.fs.existsSync(q);
        if (!n && !J) {
          return {};
        }
        {
          const C = n ? T : q;
          try {
            return JSON.parse(this.fs.readFileSync(C));
          } catch (v) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const I = this.path.resolve(this.dataFile),
          T = this.path.resolve(process.cwd(), this.dataFile),
          q = this.fs.existsSync(I),
          n = !q && this.fs.existsSync(T),
          J = JSON.stringify(this.data);
        q ? this.fs.writeFileSync(I, J) : n ? this.fs.writeFileSync(T, J) : this.fs.writeFileSync(I, J);
      }
    }
    lodash_get(N, c, I) {
      const T = c.replace(/\[(\d+)\]/g, ".$1").split(".");
      let q = N;
      for (const n of T) if (q = Object(q)[n], void 0 === q) {
        return I;
      }
      return q;
    }
    lodash_set(N, c, I) {
      Object(N) !== N || (Array.isArray(c) || (c = c.toString().match(/[^.[\]]+/g) || []), c.slice(0, -1).reduce((T, q, n) => Object(T[q]) === T[q] ? T[q] : T[q] = Math.abs(c[n + 1]) >> 0 == +c[n + 1] ? [] : {}, N)[c[c.length - 1]] = I);
      return N;
    }
    getdata(N) {
      let T = this.getval(N);
      if (/^@/.test(N)) {
        const [, q, n] = /^@(.*?)\.(.*?)$/.exec(N),
          J = q ? this.getval(q) : "";
        if (J) {
          try {
            const C = JSON.parse(J);
            T = C ? this.lodash_get(C, n, "") : T;
          } catch (b) {
            T = "";
          }
        }
      }
      return T;
    }
    setdata(N, c) {
      let T = !1;
      if (/^@/.test(c)) {
        const [, q, n] = /^@(.*?)\.(.*?)$/.exec(c),
          J = this.getval(q),
          l = q ? "null" === J ? null : J || "{}" : "{}";
        try {
          const b = JSON.parse(l);
          this.lodash_set(b, n, N);
          T = this.setval(JSON.stringify(b), q);
        } catch (v) {
          const H = {};
          this.lodash_set(H, n, N);
          T = this.setval(JSON.stringify(H), q);
        }
      } else {
        T = this.setval(N, c);
      }
      return T;
    }
    getval(N) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(N);
        case "Quantumult X":
          return $prefs.valueForKey(N);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[N];
        default:
          return this.data && this.data[N] || null;
      }
    }
    setval(N, c) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(N, c);
        case "Quantumult X":
          return $prefs.setValueForKey(N, c);
        case "Node.js":
          this.data = this.loaddata();
          this.data[c] = N;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[c] || null;
      }
    }
    initGotEnv(N) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      N && (N.headers = N.headers ? N.headers : {}, N && (N.headers = N.headers ? N.headers : {}, void 0 === N.headers.cookie && void 0 === N.headers.Cookie && void 0 === N.cookieJar && (N.cookieJar = this.ckjar)));
    }
    get(N, c = () => {}) {
      const q = {
        redirection: !1
      };
      switch (N.headers && (delete N.headers["Content-Type"], delete N.headers["Content-Length"], delete N.headers["content-type"], delete N.headers["content-length"]), N.params && (N.url += "?" + this.queryStr(N.params)), void 0 === N.followRedirect || N.followRedirect || ((this.isSurge() || this.isLoon()) && (N["auto-redirect"] = !1), this.isQuanX() && (N.opts ? N.opts.redirection = !1 : N.opts = q)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const n = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (N.headers = N.headers || {}, Object.assign(N.headers, n));
          $httpClient.get(N, (l, C, b) => {
            !l && C && (C.body = b, C.statusCode = C.status ? C.status : C.statusCode, C.status = C.statusCode);
            c(l, C, b);
          });
          break;
        case "Quantumult X":
          const i = {
            hints: !1
          };
          this.isNeedRewrite && (N.opts = N.opts || {}, Object.assign(N.opts, i));
          $task.fetch(N).then(l => {
            const {
                statusCode: v,
                statusCode: H,
                headers: E,
                body: S,
                bodyBytes: w
              } = l,
              O = {
                status: v,
                statusCode: H,
                headers: E,
                body: S,
                bodyBytes: w
              };
            c(null, O, S, w);
          }, l => c(l && l.error || "UndefinedError"));
          break;
        case "Node.js":
          let J = require("iconv-lite");
          this.initGotEnv(N);
          this.got(N).on("redirect", (l, C) => {
            try {
              if (l.headers["set-cookie"]) {
                const H = l.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                H && this.ckjar.setCookieSync(H, null);
                C.cookieJar = this.ckjar;
              }
            } catch (S) {
              this.logErr(S);
            }
          }).then(l => {
            const {
                statusCode: b,
                statusCode: v,
                headers: H,
                rawBody: E
              } = l,
              S = J.decode(E, this.encoding),
              w = {
                status: b,
                statusCode: v,
                headers: H,
                rawBody: E,
                body: S
              };
            c(null, w, S);
          }, l => {
            const {
              message: C,
              response: b
            } = l;
            c(C, b, b && J.decode(b.rawBody, this.encoding));
          });
          break;
      }
    }
    post(N, c = () => {}) {
      const q = N.method ? N.method.toLocaleLowerCase() : "post",
        n = {
          redirection: !1
        };
      switch (N.body && N.headers && !N.headers["Content-Type"] && !N.headers["content-type"] && (N.headers["content-type"] = "application/x-www-form-urlencoded"), N.headers && (delete N.headers["Content-Length"], delete N.headers["content-length"]), void 0 === N.followRedirect || N.followRedirect || ((this.isSurge() || this.isLoon()) && (N["auto-redirect"] = !1), this.isQuanX() && (N.opts ? N.opts.redirection = !1 : N.opts = n)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const J = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (N.headers = N.headers || {}, Object.assign(N.headers, J));
          $httpClient[q](N, (H, E, S) => {
            !H && E && (E.body = S, E.statusCode = E.status ? E.status : E.statusCode, E.status = E.statusCode);
            c(H, E, S);
          });
          break;
        case "Quantumult X":
          const l = {};
          l.hints = !1;
          N.method = q;
          this.isNeedRewrite && (N.opts = N.opts || {}, Object.assign(N.opts, l));
          $task.fetch(N).then(H => {
            const {
                statusCode: w,
                statusCode: O,
                headers: G,
                body: L,
                bodyBytes: k
              } = H,
              K = {
                status: w,
                statusCode: O,
                headers: G,
                body: L,
                bodyBytes: k
              };
            c(null, K, L, k);
          }, H => c(H && H.error || "UndefinedError"));
          break;
        case "Node.js":
          let C = require("iconv-lite");
          this.initGotEnv(N);
          const {
            url: b,
            ...v
          } = N;
          this.got[q](b, v).then(H => {
            const {
                statusCode: S,
                statusCode: w,
                headers: O,
                rawBody: G
              } = H,
              L = C.decode(G, this.encoding),
              k = {
                status: S,
                statusCode: w,
                headers: O,
                rawBody: G,
                body: L
              };
            c(null, k, L);
          }, H => {
            const {
              message: S,
              response: w
            } = H;
            c(S, w, w && C.decode(w.rawBody, this.encoding));
          });
          break;
      }
    }
    time(N, c = null) {
      const I = c ? new Date(c) : new Date();
      let T = {
        "M+": I.getMonth() + 1,
        "d+": I.getDate(),
        "H+": I.getHours(),
        "m+": I.getMinutes(),
        "s+": I.getSeconds(),
        "q+": Math.floor((I.getMonth() + 3) / 3),
        S: I.getMilliseconds()
      };
      /(y+)/.test(N) && (N = N.replace(RegExp.$1, (I.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let q in T) new RegExp("(" + q + ")").test(N) && (N = N.replace(RegExp.$1, 1 == RegExp.$1.length ? T[q] : ("00" + T[q]).substr(("" + T[q]).length)));
      return N;
    }
    queryStr(N) {
      let T = "";
      for (const q in N) {
        let J = N[q];
        null != J && "" !== J && ("object" == typeof J && (J = JSON.stringify(J)), T += q + "=" + J + "&");
      }
      T = T.substring(0, T.length - 1);
      return T;
    }
    msg(N = M, c = "", I = "", T = {}) {
      const n = J => {
        const {
          $open: C,
          $copy: b,
          $media: v,
          $mediaMime: H
        } = J;
        switch (typeof J) {
          case void 0:
            return J;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const E = {
                  url: J
                };
                return E;
              case "Loon":
              case "Shadowrocket":
                return J;
              case "Quantumult X":
                const S = {
                  "open-url": J
                };
                return S;
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
                  const w = {};
                  let O = J.openUrl || J.url || J["open-url"] || C;
                  O && Object.assign(w, {
                    action: "open-url",
                    url: O
                  });
                  let G = J["update-pasteboard"] || J.updatePasteboard || b;
                  if (G && Object.assign(w, {
                    action: "clipboard",
                    text: G
                  }), v) {
                    let k, K, h;
                    if (v.startsWith("http")) {
                      k = v;
                    } else {
                      if (v.startsWith("data:")) {
                        const [p] = v.split(";"),
                          [, g] = v.split(",");
                        K = g;
                        h = p.replace("data:", "");
                      } else {
                        K = v;
                        h = (x => {
                          const d = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var Z in d) if (0 === x.indexOf(Z)) {
                            return d[Z];
                          }
                          return null;
                        })(v);
                      }
                    }
                    Object.assign(w, {
                      "media-url": k,
                      "media-base64": K,
                      "media-base64-mime": H ?? h
                    });
                  }
                  const L = {};
                  L["auto-dismiss"] = J["auto-dismiss"];
                  L.sound = J.sound;
                  Object.assign(w, L);
                  return w;
                }
              case "Loon":
                {
                  const x = {};
                  let Z = J.openUrl || J.url || J["open-url"] || C;
                  Z && Object.assign(x, {
                    openUrl: Z
                  });
                  let A = J.mediaUrl || J["media-url"];
                  v?.["startsWith"]("http") && (A = v);
                  A && Object.assign(x, {
                    mediaUrl: A
                  });
                  console.log(JSON.stringify(x));
                  return x;
                }
              case "Quantumult X":
                {
                  const d = {};
                  let B = J["open-url"] || J.url || J.openUrl || C;
                  B && Object.assign(d, {
                    "open-url": B
                  });
                  let F = J["media-url"] || J.mediaUrl;
                  v?.["startsWith"]("http") && (F = v);
                  F && Object.assign(d, {
                    "media-url": F
                  });
                  let D = J["update-pasteboard"] || J.updatePasteboard || b;
                  D && Object.assign(d, {
                    "update-pasteboard": D
                  });
                  console.log(JSON.stringify(d));
                  return d;
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
            $notification.post(N, c, I, n(T));
            break;
          case "Quantumult X":
            $notify(N, c, I, n(T));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let J = ["", "==============📣系统通知📣=============="];
        J.push(N);
        c && J.push(c);
        I && J.push(I);
        console.log(J.join("\n"));
        this.logs = this.logs.concat(J);
      }
    }
    debug(...N) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (N.length > 0 && (this.logs = [...this.logs, ...N]), console.log("" + this.logLevelPrefixs.debug + N.map(c => c ?? String(c)).join(this.logSeparator)));
    }
    info(...N) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (N.length > 0 && (this.logs = [...this.logs, ...N]), console.log("" + this.logLevelPrefixs.info + N.map(c => c ?? String(c)).join(this.logSeparator)));
    }
    warn(...N) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (N.length > 0 && (this.logs = [...this.logs, ...N]), console.log("" + this.logLevelPrefixs.warn + N.map(c => c ?? String(c)).join(this.logSeparator)));
    }
    error(...N) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (N.length > 0 && (this.logs = [...this.logs, ...N]), console.log("" + this.logLevelPrefixs.error + N.map(c => c ?? String(c)).join(this.logSeparator)));
    }
    log(...N) {
      N.length > 0 && (this.logs = [...this.logs, ...N]);
      console.log(N.map(c => c ?? String(c)).join(this.logSeparator));
    }
    logErr(N, c) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", c, N);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", c, void 0 !== N.message ? N.message : N, N.stack);
          break;
      }
    }
    wait(N) {
      return new Promise(c => setTimeout(c, N));
    }
    done(N = {}) {
      const c = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + c + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(N);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(M, f);
}