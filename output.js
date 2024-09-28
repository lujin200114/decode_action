//Sat Sep 28 2024 12:35:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const david_ZR = new david_k0("喜马拉雅极速版"),
  david_ZS = "V1.0.1",
  david_ZM = "xmlyjsbapp";
let david_ZX = david_ZR.getjson(david_ZM, []);
const david_ZP = david_ZR.isNode() ? require("fs") : "",
  david_Zp = david_ZR.isNode() ? require("ws") : "";
const david_ZT = "david_cookies.js";
david_ZR.isNode() && !david_ZP.existsSync(david_ZT) && (david_ZR.log("🔔 外挂ck文件不存在，开始创建模版>>>"), david_ZP.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", A => {}));
const david_ZE = david_ZR.isNode() ? require("http") : "",
  david_ZB = david_ZR.isNode() ? require("./sendNotify") : "",
  david_Zz = david_ZR.isNode() ? require("./david_cookies") : "";
let david_Zi = david_ZR.getdata("tguserid") || 1,
  david_Zt = david_ZR.getdata("xmlyjsbactivecode") || 0,
  david_Zo = david_ZR.getval("xmlyjsbuserck") || 1,
  david_Zm = david_ZR.getval("apiHost") || "http://106.15.104.124:8080";
david_ZR.getval("apiHosts") && (david_Zm = david_ZR.getval("apiHosts"));
let david_Za = david_ZR.getval("cleanCache") || false;
const david_ZQ = 0;
let david_Zd = david_ZR.getval("tz") || "1",
  david_Zs = undefined,
  david_ZF = undefined,
  david_Zc = false,
  david_ZY = "xmlyjsb_cookies.json";
var david_Zr = "",
  david_Zf = "";
let david_Zq = "",
  david_ZN = [],
  david_ZK = [],
  david_ZL = [],
  david_ZH = [],
  david_Zy = [],
  david_Zl = [],
  david_ZG = "",
  david_Zh = "",
  david_ZV = "",
  david_ZJ = "",
  david_Zj = "",
  david_ZD = "",
  david_Zb = "",
  david_ZU = "",
  david_Ze = 1,
  david_ZC = 1,
  david_n0 = 1,
  david_n1 = 1,
  david_n2 = "",
  david_n3 = "",
  david_n4 = 3,
  david_n5 = "";
if (david_ZR.isNode()) {
  process.env.XMLYJSBAPP ? david_ZX = JSON.parse(process.env.XMLYJSBAPP) : david_ZX = david_Zz.XMLYJSB;
  david_Zi = process.env.TGUSERID;
  david_Zt = process.env.XMLYJSBACTIVECODE;
  process.env.APIHOST && (david_Zm = process.env.APIHOST);
  process.env.APIHOSTS && (david_Zm = process.env.APIHOSTS);
  process.env.CLEANCACHE && (david_Za = JSON.parse(process.env.CLEANCACHE));
  david_Zr = new Date(new Date().getTime()).getHours();
  david_Zf = new Date(new Date().getTime()).getMinutes();
  david_ZR.log("🔔 当前环境: Node, 当前时间：" + david_Zr + "点");
} else {
  david_Zr = new Date().getHours();
  david_Zf = new Date().getMinutes();
  david_ZR.log("🔔 当前环境: 手机代理, 当前时间：" + david_Zr + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await david_nA();
  } else {
    if (!david_ZX) {
      david_ZR.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    david_ZR.log("📢 开始检测服务器接口状态>>>");
    let w = false;
    const W = david_Zm.split("&"),
      R = W.length;
    for (let T = 0; T < R; T++) {
      if (david_ZR.isNode()) {
        w = await david_ns("" + W[T], 2500);
      } else {
        if (david_ZR.isSurge() || david_ZR.isLoon()) {
          w = await david_nc("" + W[T], 2500);
        } else {
          w = await david_nF("" + W[T], 2500);
        }
      }
      if (w == true) {
        david_Zm = W[T];
        david_ZR.log("📢 接口" + (T + 1) + "[" + W[T] + "]服务器接口正常! 🎉");
        break;
      }
      if (T == R - 1 && w == false) {
        david_ZR.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        david_ZR.msg(david_ZR.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!david_Zt || !david_Zi || david_Zi == 1 || david_Zt == 0 || david_Zt.length != 32) {
      david_ZR.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await david_no(david_ZM, david_Zi, david_Zt);
    david_ZR.log("📢 " + david_ZD);
    david_ZR.log("🔔 当前脚本版本号: " + david_ZS + "，最新版本号: " + david_ZJ);
    if (david_n5 != "") {
      let d = new Date(david_n5).getTime(),
        s = new Date().getTime();
      if (s > d) {
        david_ZR.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (david_ZS < david_ZJ) {
      david_ZR.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      david_ne("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (david_ZV != true) {
      david_ZR.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (david_n2 != true) {
      david_ZR.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (david_Zh != true) {
      david_ZR.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (david_ZU == true) {
      david_ZR.log("🔔 此脚本采用付费模式。🔒");
    } else {
      david_ZR.log("🔔 此脚本采用免费模式。🔓");
    }
    if (david_n5 != "") {
      if (david_ZU == true) {
        let g = new Date(david_n5).getTime(),
          x = new Date().getTime();
        if (x > g) {
          david_ZR.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        } else {
          david_ZR.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
        }
      }
    } else {
      if (david_ZU == true) {
        if (david_Zb != true) {
          david_ZR.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        } else {
          david_ZR.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        }
      }
    }
    david_Ze > 1 && david_ZR.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + david_n4 * david_Ze + "个账号。");
    david_ZC > 1 && david_ZR.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + david_n0 + "次, 已经运行了" + david_n1 + "次。");
    if (david_Zj != true) {
      david_ZR.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (david_ZX.length > david_n4 * david_Ze) {
      david_ZR.log("❗️ 当前用户一次最多运行" + david_n4 * david_Ze + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (david_ZX.length == 0) {
      david_ZR.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (david_n1 + david_ZX.length > david_n0) {
      david_ZR.log("📢 一共发现了" + david_ZX.length + "个账号");
      david_ZR.log("❗️ 当前用户运行次数剩余" + (david_n0 - david_n1) + "次，还可以运行" + (david_n0 - david_n1) + "个账号，还需要" + (david_ZX.length - (david_n0 - david_n1)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    david_n5 != "" && david_ZR.log("📢 你的会员有效期到： " + david_n5);
    david_ZR.log("📢 一共发现了" + david_ZX.length + "个账号");
    if (david_ZR.isNode()) {
      if (!david_ZP.existsSync(david_ZY)) {
        xmlyjsb_cks = {};
      } else {
        xmlyjsb_cks = JSON.parse(david_ZP.readFileSync(david_ZY, "utf8"));
      }
    }
    let S = [],
      M = david_ZX.length,
      X = 0;
    if (david_ZR.isNode() && process.env.XMLYJSB_THREAD_COUNT) {
      X = parseInt(process.env.XMLYJSB_THREAD_COUNT);
    } else {
      X = M;
    }
    let P = david_ZX.length;
    if (X >= M) {
      X = M;
      P = 1;
      david_ZR.log("📢 你设置的线程数是" + X + "，账号个数是" + M + "，" + P + "次可全部跑完。");
      for (let A2 = 0; A2 < david_ZX.length; A2++) {
        S.push(david_n7(A2));
        david_ZN[A2] = "";
        if (david_ZR.isNode()) {
          david_ZL[A2] = 0;
          await david_n8(A2);
        } else {
          david_ZL[A2] = 1;
        }
      }
      await Promise.allSettled(S).then(A6 => {
        david_ZR.isNode() && david_Zc && (david_ZR.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), david_ZP.writeFileSync(david_ZY, JSON.stringify(xmlyjsb_cks, null, 2)));
        david_ZR.log("日志整理功能如下：");
        david_ZR.log("---------------日志整理开始--------------");
        for (let AA = 0; AA < david_ZX.length; AA++) {
          david_ZR.log(david_ZN[AA]);
          david_Zq += david_ZN[AA];
        }
        david_ZR.log("---------------日志整理结束--------------");
        david_ne(david_Zq);
      });
    } else {
      P = Math.ceil(M / X);
      david_ZR.log("📢 你设置的线程数是" + X + "，账号个数是" + M + "，计算后分" + P + "次执行，一次可执行" + X + "个账号，最后一次如果不够" + X + "个账号，剩多少个账号就跑几个账号。");
      for (let A7 = 0; A7 < P; A7++) {
        for (let A8 = A7 * X; A8 < X * (A7 + 1) && A8 < M; A8++) {
          S.push(david_n7(A8));
          david_ZN[A8] = "";
          david_ZL[A8] = 1;
          await david_n8(A8);
        }
        await Promise.allSettled(S).then(AA => {
          S = [];
          if (A7 == P - 1) {
            david_ZR.isNode() && david_Zc && (david_ZR.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), david_ZP.writeFileSync(david_ZY, JSON.stringify(xmlyjsb_cks, null, 2)));
            david_ZR.log("日志整理功能如下：");
            david_ZR.log("---------------日志整理开始--------------");
            for (let Aw = 0; Aw < david_ZX.length; Aw++) {
              david_ZR.log(david_ZN[Aw]);
              david_Zq += david_ZN[Aw];
            }
            david_ZR.log("---------------日志整理结束--------------");
            david_ne(david_Zq);
          }
        });
      }
    }
  }
})().catch(A => david_ZR.logErr(A)).finally(() => david_ZR.done());
async function david_n7(A) {
  return new Promise((n, k) => {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 开始执行 working......");
    david_n9(n, A);
  });
}
async function david_n8(A) {
  if (david_ZR.isNode()) {
    if (david_ZH[A] > 0) {
      david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    david_ZK[A] = new david_Zp(david_Zm.replace("http", "ws") + "/ws");
    david_ZK[A].on("open", function w() {
      david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签名通道已连接");
    });
    david_ZK[A].on("close", function W() {
      david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    david_ZK[A].on("error", function R() {
      david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签名通道已关闭，原因是出现错误");
      david_ZL[A] = 1;
      david_ZH[A]++;
      if (david_ZH[A] <= 3) {
        david_n8(A);
      }
    });
  }
}
async function david_n9(A, Z) {
  if (david_ZR.isNode()) {
    await david_ZR.wait(3000, 5000);
  }
  await david_nZ(Z);
  await david_nn(Z);
  await david_ni(Z);
  await david_nW(Z);
  await david_nB(Z);
  await david_np(Z);
  await david_nX(Z);
  await david_nw(Z);
  if (david_ZR.isNode()) {
    await david_ZK[Z].close();
  }
  await david_nm(david_ZM, david_Zi);
  A();
}
async function david_nA() {
  const n = {
    pbmUD: function (w, W) {
      return w + W;
    },
    Enrkt: "debu",
    vMLUQ: "gger",
    knIXJ: "stateObject",
    ebPNG: function (w, W) {
      return w !== W;
    },
    prTwH: "tmBvc",
    ideJc: function (w, W) {
      return w - W;
    },
    UADHg: function (w, W) {
      return w === W;
    },
    kaUjx: "pvFxq",
    zloTb: "ACjot",
    UKgYX: function (w, W) {
      return w === W;
    },
    xzBTe: "ZljoJ",
    favaU: "XKPRB",
    BpDEA: "xmlyjsbapp",
    uYnCy: function (w, W) {
      return w + W;
    }
  };
  const k = n;
  if ($request.url.match(/\/task\/record/)) {
    if (k.ebPNG(k.prTwH, k.prTwH)) {
      (function () {
        return false;
      }).constructor(DvZacN.pbmUD(DvZacN.Enrkt, DvZacN.vMLUQ)).apply(DvZacN.knIXJ);
    } else {
      const W = $request.headers.Cookie;
      let R = k.ideJc(david_Zo, 1);
      if (david_ZX[R]) {
        if (k.UADHg(k.kaUjx, k.zloTb)) {
          return n.parse(k);
        } else {
          david_ZX[R].cookie = W;
        }
      } else {
        if (k.UKgYX(k.xzBTe, k.favaU)) {
          k = w.parse(W.env.XMLYJSBAPP);
        } else {
          const X = {
            cookie: W
          };
          david_ZX[R] = X;
        }
      }
      david_ZR.setdata(JSON.stringify(david_ZX, null, 2), k.BpDEA);
      david_ZR.msg(david_ZR.name, "喜马拉雅极速版账号" + k.uYnCy(R, 1) + "Cookie获取成功！🎉");
    }
  }
}
async function david_nZ(A) {
  const n = "https://passport.ximalaya.com/web/login/user";
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null && w.ret == 0) {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 用户名=> " + w.nickname);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 用户名=> " + w.nickname + "\n";
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 手机号=> " + w.mobile);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 手机号=> " + w.mobile + "\n";
    david_ZX[A].uid = w.uid;
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 用户名信息=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 用户名信息=> " + w.msg + "\n";
  }
}
async function david_nn(A) {
  const n = "https://m.ximalaya.com/speed/web-earn/account/coin";
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null) {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 金币=> " + w.total);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 金币=> " + w.total + "\n";
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 余额=> " + (w.total / 10000).toFixed(2) + "元");
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 余额=> " + (w.total / 10000).toFixed(2) + "元 \n";
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 账户信息=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 账户信息=> " + w.msg + "\n";
  }
}
async function david_nk(A) {
  const n = "https://passport.ximalaya.com/user-http-app/v1/token/refresh";
  let k = "";
  await david_nO(n, k, A);
  david_Zy[A].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await david_nq("post", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null && w.ret == 0) {
    if (w.newToken != null) {
      david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 刷新token=> " + w.data.newToken);
    }
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 刷新token=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 刷新token=> " + w.msg + "\n";
  }
}
async function david_nw(A) {
  const k = "https://m.ximalaya.com/speed/web-earn/task/record?taskLabels=1,2";
  let w = "";
  await david_nO(k, w, A);
  await david_nq("get", david_Zy[A], david_nl());
  let W = david_ZG;
  if (W != null) {
    let S = W.taskList;
    for (let M = 0; M < S.length; M++) {
      let X = S[M];
      if (X.taskId == 65) {
        let p = X.step - X.process;
        for (let T = 0; T < p; T++) {
          let B = await david_nS(A);
          await david_ZR.wait(david_Zs.randomNum(10000, 15000));
          await david_nM(A, B, 2, X.title + "(" + (X.process + T + 1) + "/" + X.step + ")");
        }
      }
    }
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 任务中心=> " + W.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 任务中心=> " + W.msg + "\n";
  }
}
async function david_nW(A) {
  const n = "https://m.ximalaya.com/speed/web-earn/check-in/record?time=" + david_Zs.ts13();
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null) {
    let R = w.receivedToday;
    if (R == null || R == false) {
      let M = w.checkInDetails[w.thatDay - 1];
      await david_nR(A, M.checkInAward);
    }
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签到记录=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签到记录=> " + w.msg + "\n";
  }
}
async function david_nR(A, Z) {
  const k = "https://m.ximalaya.com/speed/web-earn/check-in/check";
  let w = david_Zs.createDayjs(),
    W = w().format("YYYYMMDD");
  await david_nN(A, "date=" + W + "&uid=" + david_ZX[A].uid);
  let R = david_Zl[A],
    S = "{\"checkData\":\"" + R + "\",\"makeUp\":false}";
  await david_nO(k, S, A);
  await david_nq("post", david_Zy[A], david_nl());
  let M = david_ZG;
  if (M != null) {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签到=> 签到成功，获得" + Z + "金币");
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签到=> 签到成功，获得" + Z + "金币\n";
    let P = await david_nS(A);
    await david_ZR.wait(david_Zs.randomNum(10000, 15000));
    await david_nM(A, P, 1, "每日签到看广告奖励");
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签到=> " + M.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 签到=> " + M.msg + "\n";
  }
}
async function david_nS(A) {
  const n = "https://m.ximalaya.com/speed/web-earn/ad/token";
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null) {
    return w.id;
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 获取广告token=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 获取广告token=> " + w.msg + "\n";
  }
}
async function david_nM(A, Z, n, k) {
  const W = "https://m.ximalaya.com/speed/web-earn/ad/score";
  let R = david_ZF.MD5("businesstype=" + n + "&token=" + Z + "&uid=" + david_ZX[A].uid + "&q35435432sadks2i3546p2ndkcaqiwurhqfebt4kn").toString(),
    S = "{\"sign\":\"" + R + "\",\"businessType\":" + n + "}";
  await david_nO(W, S, A);
  await david_nq("post", david_Zy[A], david_nl());
  let M = david_ZG;
  if (M != null) {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: " + k + "=> " + M.coin + "金币");
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: " + k + "=> " + M.coin + "金币\n";
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: " + k + "=> " + M.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: " + k + "=> " + M.msg + "\n";
  }
}
async function david_nX(A) {
  const n = "https://m.ximalaya.com/speed/web-earn/redPacket/config";
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null && w.code == 0) {
    if (w.data.waitTime == 0) {
      let W = w.data.stageId;
      await david_nP(A, 1, W);
      await david_ZR.wait(david_Zs.randomNum(10000, 15000));
      await david_nP(A, 2, W);
    }
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 宝箱信息=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 宝箱信息=> " + w.msg + "\n";
  }
}
async function david_nP(Z, n, k) {
  const W = "https://m.ximalaya.com/speed/web-earn/redPacket/receive/v2";
  let R = david_Zs.ts13();
  await david_nN(Z, "stageId=" + k + "&receiveType=" + n + "&timestamp=" + R + "&uid=" + david_ZX[Z].uid);
  let S = david_Zl[Z];
  const M = {
    receiveType: n,
    signature: S,
    timestamp: R,
    stageId: k
  };
  await david_nO(W, JSON.stringify(M), Z);
  await david_nq("post", david_Zy[Z], david_nl());
  let P = david_ZG;
  if (P != null && P.code == 0) {
    if (n == 1) {
      david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 打开宝箱=> 获得" + P.data.score + "金币");
      david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 打开宝箱=> 获得" + P.data.score + "金币\n";
    } else {
      david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + P.data.score + "金币");
      david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + P.data.score + "金币\n";
    }
  } else {
    david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 宝箱奖励=> " + P.msg);
    david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 宝箱奖励=> " + P.msg + "\n";
  }
}
async function david_np(A) {
  const n = "https://m.ximalaya.com/speed/web-earn/topic/user";
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null && w.code == 0) {
    if (w.data.stamina > 0) {
      await david_nT(A);
    }
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 宝箱信息=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 宝箱信息=> " + w.msg + "\n";
  }
}
async function david_nT(A) {
  const n = "https://m.ximalaya.com/speed/web-earn/topic/start";
  let k = "";
  await david_nO(n, k, A);
  await david_nq("get", david_Zy[A], david_nl());
  let w = david_ZG;
  if (w != null && w.code == 0) {
    let W = w.data.paperId,
      R = w.data.topics.length,
      S = w.data.topics[R - 1].topicId;
    await david_ZR.wait(david_Zs.randomNum(10000, 15000));
    await david_nE(A, 1, W, S, R);
    await david_ZR.wait(david_Zs.randomNum(10000, 15000));
    await david_nE(A, 2, W, S, R);
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 宝箱信息=> " + w.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 宝箱信息=> " + w.msg + "\n";
  }
}
async function david_nE(Z, n, k, w, W) {
  const S = "https://m.ximalaya.com/speed/web-earn/topic/reward/v2";
  let M = david_Zs.ts13();
  await david_nN(Z, "lastTopicId=" + w + "&numOfAnswers=" + W + "&receiveType=" + n + "&timestamp=" + M + "&uid=" + david_ZX[Z].uid);
  let X = david_Zl[Z];
  const P = {
    numOfAnswers: W,
    paperId: k,
    signature: X,
    timestamp: M,
    receiveType: n,
    lastTopicId: w
  };
  await david_nO(S, JSON.stringify(P), Z);
  await david_nq("post", david_Zy[Z], david_nl());
  let T = david_ZG;
  if (T != null && T.code == 0) {
    if (n == 1) {
      david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 答题成功=> 获得" + T.data.reward + "金币");
      david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 答题成功=> " + T.data.reward + "金币\n";
    } else {
      david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 答题成功看广告=> 翻了" + T.data.multiple + "倍，获得" + T.data.reward + "金币");
      david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 答题成功看广告=> 翻了" + T.data.multiple + "倍，获得" + T.data.reward + "金币\n";
    }
  } else {
    david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 答题奖励=> " + T.msg);
    david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 答题奖励=> " + T.msg + "\n";
  }
}
async function david_nB(A) {
  const k = "https://m.ximalaya.com/speed/web-earn/drink/detail?timestamp=" + david_Zs.ts13();
  let w = "";
  await david_nO(k, w, A);
  await david_nq("get", david_Zy[A], david_nl());
  let W = david_ZG;
  if (W != null && W.code == 0) {
    let S = W.data.drinks;
    for (let M = 0; M < S.length; M++) {
      let P = S[M];
      if (P.receiveStatus == 2) {
        await david_nz(A, P, 1);
        await david_ZR.wait(david_Zs.randomNum(10000, 15000));
        await david_nz(A, P, 2);
      } else {
        if (P.receiveStatus == 4) {
          await david_ZR.wait(david_Zs.randomNum(10000, 15000));
          await david_nz(A, P, 3);
        }
      }
    }
  } else {
    david_ZR.log("[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 每日喝水信息=> " + W.msg);
    david_ZN[A] += "[账号" + (A + 1 < 10 ? "0" + (A + 1) : A + 1) + "]: 每日喝水信息=> " + W.msg + "\n";
  }
}
async function david_nz(Z, n, k) {
  const W = "https://m.ximalaya.com/speed/web-earn/drink/receive/v2";
  let R = david_Zs.ts13();
  await david_nN(Z, "stageId=" + n.stageId + "&isDouble=" + k + "&timestamp=" + R + "&uid=" + david_ZX[Z].uid);
  let S = david_Zl[Z];
  const M = {
    isDouble: k,
    timestamp: R,
    signature: S,
    stageId: n.stageId
  };
  await david_nO(W, JSON.stringify(M), Z);
  await david_nq("post", david_Zy[Z], david_nl());
  let P = david_ZG;
  if (P != null && P.code == 0) {
    if (k == 1) {
      david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "(" + n.description + ")=> 获得" + P.data.score + "金币");
      david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "(" + n.description + ")=> " + P.data.score + "金币\n";
    } else {
      if (k == 2) {
        david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "_看广告=> 获得" + P.data.score + "金币");
        david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "_看广告=> 获得" + P.data.score + "金币\n";
      } else {
        david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "_(补)=> 获得" + P.data.score + "金币");
        david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "_(补)=> 获得" + P.data.score + "金币\n";
      }
    }
  } else {
    david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "=> " + P.msg);
    david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "=> " + P.msg + "\n";
  }
}
async function david_ni(Z) {
  const w = "https://m.ximalaya.com/speed/web-earn/listen/b/coin/config?ts=" + david_Zs.ts13();
  let W = "";
  await david_nO(w, W, Z);
  await david_nq("get", david_Zy[Z], david_nl());
  let R = david_ZG;
  if (R != null && R.code == 0) {
    let M = R.data.coinList,
      X = R.data.positionList;
    const P = {
      videoAdType: 1,
      positionId: 0,
      positionName: "",
      coinSceneId: 0
    };
    let T = X.find(E => E.positionName == "sub_listentime_double_video");
    for (let E = 0; E < M.length; E++) {
      let B = M[E];
      if (B.coinStatus == 1 && (B.listenTime == 30 || B.listenTime == 120)) {
        await david_nt(Z, B, R.data.priodId, P);
        await david_ZR.wait(david_Zs.randomNum(5000, 10000));
        await david_nt(Z, B, R.data.priodId, T);
      } else {
        B.coinStatus == 3 && B.hasDouble == false && (await david_nt(Z, B, R.data.priodId, T));
      }
    }
  } else {
    david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 听书奖励信息=> " + R.msg);
    david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: 听书奖励信息=> " + R.msg + "\n";
  }
}
async function david_nt(Z, n, k, w) {
  const R = "https://m.ximalaya.com/speed/web-earn/listen/b/award";
  let S = david_Zs.ts13();
  let M = "priodId=" + k + "&stageId=" + n.stageId + "&listenTime=" + n.listenTime + "&coinSceneId=" + w.coinSceneId + "&positionId=" + w.positionId + "&positionName=" + w.positionName + "&timestamp=" + S + "&randomDouble=" + w.videoAdType;
  await david_nN(Z, M);
  let X = david_Zl[Z];
  const P = {
    stageId: n.stageId,
    positionName: w.positionName,
    randomDouble: w.videoAdType,
    priodId: k,
    signature: X,
    positionId: w.positionId,
    coinSceneId: w.coinSceneId,
    timestamp: S,
    listenTime: n.listenTime
  };
  await david_nO(R, JSON.stringify(P), Z);
  await david_nq("post", david_Zy[Z], david_nl());
  let T = david_ZG;
  if (T != null && T.code == 0) {
    if (w.videoAdType == 1) {
      david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "(" + n.comment + ")=> 获得" + T.data.coinNum + "金币");
      david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "(" + n.comment + ")=> " + T.data.coinNum + "金币\n";
    } else {
      w.videoAdType == 2 && (david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "_看广告=> 获得" + T.data.coinNum + "金币"), david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "_看广告=> 获得" + T.data.coinNum + "金币\n");
    }
  } else {
    david_ZR.log("[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "=> " + T.msg);
    david_ZN[Z] += "[账号" + (Z + 1 < 10 ? "0" + (Z + 1) : Z + 1) + "]: " + n.title + "=> " + T.msg + "\n";
  }
}
function david_no(A, Z, n) {
  return new Promise((w, W) => {
    const M = david_Zm + "/script/permissions/lastest",
      X = {
        appName: A,
        userId: Z,
        activityCode: n,
        version: david_ZS
      };
    const p = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const T = {
      url: M,
      headers: p,
      body: JSON.stringify(X)
    };
    david_ZR.post(T, async (E, B, z) => {
      if (z && z != null && z.replace(/\"/g, "").length > 50) {
        const m = z.replace(/\"/g, "").slice(34);
        david_Zs = await david_nd(david_Za);
        david_ZF = david_Zs.createCryptoJS();
        result = JSON.parse(david_ZF.enc.Base64.parse(m).toString(david_ZF.enc.Utf8));
        try {
          david_ZJ = result.version;
          david_Zh = result.userAuth;
          david_ZV = result.scriptAuth;
          david_Zj = result.runAuth;
          david_ZD = result.notify;
          david_Zb = result.vipAuth;
          david_ZU = result.isCharge;
          david_Ze = result.runAcounts;
          david_ZC = result.buyCount;
          david_n1 = result.runedCounts;
          david_n0 = result.runTotalCounts;
          david_n2 = result.userRank;
          david_n3 = result.invicate;
          david_n4 = result.accountNumbers;
          david_n5 = result.vipDate;
        } catch (s) {
          david_ZR.log(s);
        }
      } else {
        david_ZR.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      w();
    });
  });
}
function david_nm(A, Z) {
  return new Promise((k, w) => {
    const S = david_Zm + "/script/run/add",
      M = {
        appName: A,
        userId: Z,
        activityCode: david_Zt,
        version: david_ZS
      };
    const P = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const p = {
      url: S,
      headers: P,
      body: JSON.stringify(M)
    };
    david_ZR.post(p, async (T, E, B) => {
      k();
    });
  });
}
function david_na(Z) {
  const n = {};
  n.YrYIe = function (W, R) {
    return W > R;
  };
  n.qhSnY = function (W, R) {
    return W !== R;
  };
  n.mNIOq = "yHldB";
  n.OPAlM = "cpacU";
  n.dYoPP = function (W, R) {
    return W === R;
  };
  n.QAcyZ = "RepbU";
  const k = n;
  let w = david_ZX[Z].mobile;
  xmlyjsb_item = xmlyjsb_cks["" + w];
  if (xmlyjsb_item) {
    if (k.qhSnY(k.mNIOq, k.OPAlM)) {
      david_ZX[Z].refreshToken = xmlyjsb_item.refreshToken;
      david_ZX[Z].accessToken = xmlyjsb_item.accessToken;
      return true;
    } else {
      n = k.XMLYJSB;
    }
  } else {
    if (k.dYoPP(k.QAcyZ, k.QAcyZ)) {
      return false;
    } else {
      k.YrYIe(W.length, 0) && (this.logs = [...this.logs, ...R]);
      S.log(M.map(T => T ?? P(T)).join(this.logSeparator));
    }
  }
}
function david_nQ(A) {
  xmlyjsb_cks[david_ZX[A].mobile] = {
    refreshToken: david_ZX[A].refreshToken,
    accessToken: david_ZX[A].accessToken,
    ts: ts13()
  };
}
async function david_nd(A) {
  let n = david_ZR.getdata("Utils_Code") || "";
  if (!A && n && Object.keys(n).length) {
    david_ZR.log("📢 缓存中存在JS-Utils");
    eval(n);
    return creatUtils();
  }
  david_ZR.log("📢 开始初始化JS-Utils");
  return new Promise(async w => {
    david_ZR.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(S => {
      david_ZR.setdata(S, "Utils_Code");
      eval(S);
      david_ZR.log("📢 JS-Utils加载成功");
      w(creatUtils());
    });
  });
}
function david_ns(A, Z) {
  return new Promise((k, w) => {
    const S = setTimeout(() => {
        k(false);
      }, Z),
      M = david_ZE.get(A, X => {
        clearTimeout(S);
        if (X.statusCode === 404) {
          k(true);
        } else {
          k(false);
        }
      });
    M.on("error", X => {
      clearTimeout(S);
      k(false);
    });
    M.on("timeout", () => {
      M.abort();
      w(new Error("请求超时"));
    });
  });
}
async function david_nF(A, Z = 3000) {
  return new Promise((k, w) => {
    const R = {
      url: A + "/docs"
    };
    setTimeout(() => {
      k(false);
    }, Z);
    david_ZR.get(R, async (S, M, X) => {
      if (M.status == 401) {
        k(true);
      } else {
        k(false);
      }
    });
  });
}
async function david_nc(A, Z = 3000) {
  return new Promise((k, w) => {
    const S = {
      url: A + "/"
    };
    setTimeout(() => {
      k(false);
    }, Z);
    $httpClient.get(S, async (M, X, P) => {
      if (P == "{\"detail\":\"Not Found\"}") {
        k(true);
      } else {
        k(false);
      }
    });
  });
}
async function david_nY(A, Z, n) {
  return new Promise((w, W) => {
    const M = david_Zm + "/redis/hash/get/" + Z + "/" + n,
      X = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const P = {
      url: M,
      headers: X
    };
    david_ZR.get(P, async (T, E, B) => {
      const z = B.replace(/\"/g, "");
      answerTexts[A] = z;
      w();
    });
  });
}
function david_nr(A, Z, n) {
  return new Promise((w, W) => {
    const S = david_Zm + "/redis/hash/set",
      M = {
        key: A,
        hashKey: Z,
        hashValue: n
      };
    const P = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const p = {
      url: S,
      headers: P,
      body: JSON.stringify(M)
    };
    david_ZR.post(p, async (T, E, B) => {
      w();
    });
  });
}
function david_nf(A) {
  return new Promise((n, k) => {
    const W = david_Zm + "/redis/set/pop/" + A,
      R = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const S = {
      url: W,
      headers: R
    };
    david_ZR.get(S, async (X, P, p) => {
      const T = p.replace(/\"/g, "");
      popCookie = T;
      n();
    });
  });
}
async function david_nO(n, k, w) {
  let R = "ting_v3.0.31_c5(CFNetwork, iOS 16.6.1, iPhone10,2) ;xmly(lite)/3.0.31/ios_1";
  david_ZX[w].ua && david_ZX[w].ua != "" && (R = david_ZX[w].ua);
  let S = david_nL(n);
  const M = {
    "Content-Type": "application/json",
    "User-Agent": R,
    Cookie: david_ZX[w].cookie,
    Host: S
  };
  const X = {};
  X.url = n;
  X.headers = M;
  let P = X;
  if (k) {
    P.body = k;
  }
  david_Zy[w] = P;
  return P;
}
function david_nI(n, k, w) {
  let R = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  david_ZX[w].ua && david_ZX[w].ua != "" && (R = david_ZX[w].ua);
  let S = david_nL(n);
  const M = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": R,
    Authorization: david_ZX[w].auth,
    Host: S
  };
  const X = {
    url: n,
    headers: M
  };
  k && (X.body = k);
  david_Zy[w] = X;
  return X;
}
async function david_nq(A, Z, n) {
  david_ZG = null;
  return new Promise(w => {
    david_ZR[A](Z, async (S, M, X) => {
      try {
        if (S) {
          david_ZR.log(n + ": " + A + "请求失败");
          david_ZR.log(JSON.stringify(S));
          david_ZR.logErr(S);
        } else {
          if (david_nG(X)) {
            david_ZG = JSON.parse(X);
            david_ZQ == 1 && david_ZR.log(david_ZG);
          } else {
            const i = new URL(Z.url);
            david_ZR.log(i.pathname + "发起" + A + "请求时，出现错误，请处理");
          }
        }
      } catch (m) {
        david_ZR.logErr(m, M);
      } finally {
        w(david_ZG);
      }
    });
  });
}
async function david_nN(A, Z) {
  if (david_ZL[A] == 0) {
    await david_ng(A, Z);
  } else {
    await david_nx(A, Z);
  }
}
function david_ng(A, Z) {
  return new Promise((k, w) => {
    function R(S) {
      let M = S.toString("utf8");
      david_Zl[A] = M;
      david_ZK[A].removeListener("message", R);
      k(M);
    }
    david_ZK[A].on("message", R);
    if (david_ZK[A].readyState === 1) {
      const S = {
        method: david_ZM,
        params: {}
      };
      S.params.content = Z;
      S.params.appName = david_ZM;
      S.params.uuid = david_Zi;
      david_ZK[A].send(JSON.stringify(S), M => {
        M && w(M);
      });
    } else {
      k(david_nx(A, Z));
      david_ZK[A].removeListener("message", R);
    }
  });
}
function david_nx(A, Z) {
  return new Promise((k, w) => {
    const R = david_Zm + "/sign/xmly",
      S = {
        content: Z,
        appName: david_ZM,
        uuid: david_Zi
      };
    const X = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const P = {
      url: R,
      headers: X,
      body: JSON.stringify(S)
    };
    david_ZR.post(P, async (p, T, E) => {
      const z = E.replace(/\"/g, "");
      david_Zl[A] = z;
      k();
    });
  });
}
function david_nu(A, Z, n) {
  const w = david_nv(A);
  Z.forEach(S => {
    delete w[S];
  });
  Object.assign(w, n);
  const W = Object.keys(w).sort();
  const R = W.map(S => S + "=" + w[S]).join("&");
  return R;
}
function david_nv(Z) {
  Z = Z.replace(/\"/g, "");
  var w;
  var W = {},
    R = Z.slice(Z.indexOf("?") + 1).split("&");
  for (var S = 0; S < R.length; S++) {
    w = R[S].split("=");
    W[w[0]] = w[1];
  }
  return W;
}
function david_nK(Z) {
  const w = Z.replace(/[{} ]/g, ""),
    W = w.split(","),
    R = {};
  W.forEach(S => {
    const [P, p] = S.split("=");
    R[P] = p;
  });
  return R;
}
function david_nL(A) {
  let n = A.substr(A.indexOf("//") + 2);
  let k = n.substr(0, n.indexOf("/")),
    w = "",
    W = k.indexOf(":");
  if (W > 0) {
    w = k.substr(0, W);
  } else {
    w = k;
  }
  return w;
}
function david_nH(Z, n) {
  var M = new Date(Z);
  var S = new Date(n);
  var P = S - M;
  var X = Math.floor(P / 1000);
  return X;
}
function david_ny(A, Z) {
  if (A.length * 2 <= Z) {
    return A;
  }
  var k = 0,
    w = "";
  for (var W = 0; W < A.length; W++) {
    w = w + A.charAt(W);
    if (A.charCodeAt(W) > 128) {
      k = k + 2;
      if (k >= Z) {
        return w.substring(0, w.length - 1) + "...";
      }
    } else {
      k = k + 1;
      if (k >= Z) {
        return w.substring(0, w.length - 2) + "...";
      }
    }
  }
  return w;
}
function david_nl() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function david_nG(A) {
  try {
    if (typeof JSON.parse(A) == "object") {
      return true;
    }
  } catch (w) {
    console.log(w);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function david_nh(A) {
  var n = Object.keys(A).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(A[k]);
  }).join("&");
  return n;
}
function david_nV(A) {
  var n = String.fromCharCode(A.charCodeAt(0) + A.length);
  for (var k = 1; k < A.length; k++) {
    n += String.fromCharCode(A.charCodeAt(k) + A.charCodeAt(k - 1));
  }
  return escape(n);
}
function david_nJ(A) {
  A = unescape(A);
  var n = String.fromCharCode(A.charCodeAt(0) - A.length);
  for (var k = 1; k < A.length; k++) {
    n += String.fromCharCode(A.charCodeAt(k) - n.charCodeAt(k - 1));
  }
  return n;
}
function david_nj() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function david_nD(A) {
  return new Promise((n, k) => {
    const W = "https://v1.hitokoto.cn/?c=e",
      R = {
        accept: "application/json"
      };
    const S = {
      url: W,
      headers: R
    };
    david_ZR.get(S, async (X, P, p) => {
      let E = JSON.parse(p),
        B = E.hitokoto;
      contents[A] = B + " " + B;
      n();
    });
  });
}
function david_nb() {
  return new Promise((Z, n) => {
    const W = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      R = {
        url: W
      };
    david_ZR.get(R, async (M, X, P) => {
      Z(P);
    });
  });
}
function david_nU() {
  if (david_Zd == 1) {
    david_ZR.msg(david_ZR.name, "", david_ZR.message);
  }
}
async function david_ne(A) {
  if (david_Zr == 9 || david_Zr == 12 || david_Zr == 18) {
    if (david_Zd == 1) {
      if (david_ZR.isNode()) {
        await david_ZB.sendNotify(david_ZR.name, A);
      } else {
        david_ZR.msg(david_ZR.name, "", A);
      }
    } else {
      david_ZR.log(A);
    }
  }
}
async function david_nC(A, Z, n) {
  return new Promise((w, W) => {
    const S = "https://wxpusher.zjiecode.com/api/send/message",
      M = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: Z,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [n],
        verifyPay: false
      };
    const P = {
      "Content-Type": "application/json"
    };
    const p = {
      url: S,
      headers: P,
      body: JSON.stringify(M)
    };
    david_ZR.post(p, async (T, E, B) => {
      w();
    });
  });
}
function david_k0(A, Z) {
  class k {
    constructor(w) {
      this.env = w;
    }
    send(w, W = "GET") {
      w = "string" == typeof w ? {
        url: w
      } : w;
      let S = this.get;
      "POST" === W && (S = this.post);
      return new Promise((M, X) => {
        S.call(this, w, (T, E, B) => {
          T ? X(T) : M(E);
        });
      });
    }
    get(w) {
      return this.send.call(this.env, w);
    }
    post(w) {
      return this.send.call(this.env, w, "POST");
    }
  }
  return new class {
    constructor(w, W) {
      const R = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const S = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = R;
      this.logLevelPrefixs = S;
      this.logLevel = "info";
      this.name = w;
      this.http = new k(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, W);
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
    toObj(w, W = null) {
      try {
        return JSON.parse(w);
      } catch {
        return W;
      }
    }
    toStr(w, W = null, ...R) {
      try {
        return JSON.stringify(w, ...R);
      } catch {
        return W;
      }
    }
    getjson(w, W) {
      let M = W;
      if (this.getdata(w)) {
        try {
          M = JSON.parse(this.getdata(w));
        } catch {}
      }
      return M;
    }
    setjson(w, W) {
      try {
        return this.setdata(JSON.stringify(w), W);
      } catch {
        return !1;
      }
    }
    getScript(w) {
      return new Promise(S => {
        const M = {
          url: w
        };
        this.get(M, (X, P, p) => S(p));
      });
    }
    runScript(w, W) {
      return new Promise(S => {
        let X = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        X = X ? X.replace(/\n/g, "").trim() : X;
        let P = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        P = P ? 1 * P : 20;
        P = W && W.timeout ? W.timeout : P;
        const p = {
          script_text: w,
          mock_type: "cron",
          timeout: P
        };
        const [T, E] = X.split("@"),
          B = {
            url: "http://" + E + "/v1/scripting/evaluate",
            body: p,
            headers: {
              "X-Key": T,
              Accept: "*/*"
            },
            timeout: P
          };
        this.post(B, (z, m, Q) => S(Q));
      }).catch(S => this.logErr(S));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          M = this.path.resolve(process.cwd(), this.dataFile),
          X = this.fs.existsSync(S),
          P = !X && this.fs.existsSync(M);
        if (!X && !P) {
          return {};
        }
        {
          const T = X ? S : M;
          try {
            return JSON.parse(this.fs.readFileSync(T));
          } catch (B) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          M = this.path.resolve(process.cwd(), this.dataFile),
          X = this.fs.existsSync(S),
          P = !X && this.fs.existsSync(M),
          p = JSON.stringify(this.data);
        X ? this.fs.writeFileSync(S, p) : P ? this.fs.writeFileSync(M, p) : this.fs.writeFileSync(S, p);
      }
    }
    lodash_get(w, W, R) {
      const X = W.replace(/\[(\d+)\]/g, ".$1").split(".");
      let P = w;
      for (const p of X) if (P = Object(P)[p], void 0 === P) {
        return R;
      }
      return P;
    }
    lodash_set(w, W, R) {
      Object(w) !== w || (Array.isArray(W) || (W = W.toString().match(/[^.[\]]+/g) || []), W.slice(0, -1).reduce((M, X, P) => Object(M[X]) === M[X] ? M[X] : M[X] = Math.abs(W[P + 1]) >> 0 == +W[P + 1] ? [] : {}, w)[W[W.length - 1]] = R);
      return w;
    }
    getdata(w) {
      let S = this.getval(w);
      if (/^@/.test(w)) {
        const [, M, X] = /^@(.*?)\.(.*?)$/.exec(w),
          P = M ? this.getval(M) : "";
        if (P) {
          try {
            const T = JSON.parse(P);
            S = T ? this.lodash_get(T, X, "") : S;
          } catch (E) {
            S = "";
          }
        }
      }
      return S;
    }
    setdata(w, W) {
      let M = !1;
      if (/^@/.test(W)) {
        const [, P, p] = /^@(.*?)\.(.*?)$/.exec(W),
          T = this.getval(P),
          E = P ? "null" === T ? null : T || "{}" : "{}";
        try {
          const z = JSON.parse(E);
          this.lodash_set(z, p, w);
          M = this.setval(JSON.stringify(z), P);
        } catch (m) {
          const Q = {};
          this.lodash_set(Q, p, w);
          M = this.setval(JSON.stringify(Q), P);
        }
      } else {
        M = this.setval(w, W);
      }
      return M;
    }
    getval(w) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(w);
        case "Quantumult X":
          return $prefs.valueForKey(w);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[w];
        default:
          return this.data && this.data[w] || null;
      }
    }
    setval(w, W) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(w, W);
        case "Quantumult X":
          return $prefs.setValueForKey(w, W);
        case "Node.js":
          this.data = this.loaddata();
          this.data[W] = w;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[W] || null;
      }
    }
    initGotEnv(w) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      w && (w.headers = w.headers ? w.headers : {}, w && (w.headers = w.headers ? w.headers : {}, void 0 === w.headers.cookie && void 0 === w.headers.Cookie && void 0 === w.cookieJar && (w.cookieJar = this.ckjar)));
    }
    get(w, W = () => {}) {
      const M = {
        redirection: !1
      };
      switch (w.headers && (delete w.headers["Content-Type"], delete w.headers["Content-Length"], delete w.headers["content-type"], delete w.headers["content-length"]), w.params && (w.url += "?" + this.queryStr(w.params)), void 0 === w.followRedirect || w.followRedirect || ((this.isSurge() || this.isLoon()) && (w["auto-redirect"] = !1), this.isQuanX() && (w.opts ? w.opts.redirection = !1 : w.opts = M)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const X = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (w.headers = w.headers || {}, Object.assign(w.headers, X));
          $httpClient.get(w, (T, E, B) => {
            !T && E && (E.body = B, E.statusCode = E.status ? E.status : E.statusCode, E.status = E.statusCode);
            W(T, E, B);
          });
          break;
        case "Quantumult X":
          const P = {};
          P.hints = !1;
          this.isNeedRewrite && (w.opts = w.opts || {}, Object.assign(w.opts, P));
          $task.fetch(w).then(T => {
            const {
                statusCode: B,
                statusCode: z,
                headers: m,
                body: Q,
                bodyBytes: d
              } = T,
              F = {
                status: B,
                statusCode: z,
                headers: m,
                body: Q,
                bodyBytes: d
              };
            W(null, F, Q, d);
          }, T => W(T && T.error || "UndefinedError"));
          break;
        case "Node.js":
          let p = require("iconv-lite");
          this.initGotEnv(w);
          this.got(w).on("redirect", (T, E) => {
            try {
              if (T.headers["set-cookie"]) {
                const o = T.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                o && this.ckjar.setCookieSync(o, null);
                E.cookieJar = this.ckjar;
              }
            } catch (a) {
              this.logErr(a);
            }
          }).then(T => {
            const {
                statusCode: E,
                statusCode: B,
                headers: z,
                rawBody: m
              } = T,
              Q = p.decode(m, this.encoding),
              d = {
                status: E,
                statusCode: B,
                headers: z,
                rawBody: m,
                body: Q
              };
            W(null, d, Q);
          }, T => {
            const {
              message: E,
              response: B
            } = T;
            W(E, B, B && p.decode(B.rawBody, this.encoding));
          });
          break;
      }
    }
    post(w, W = () => {}) {
      const S = w.method ? w.method.toLocaleLowerCase() : "post",
        M = {
          redirection: !1
        };
      switch (w.body && w.headers && !w.headers["Content-Type"] && !w.headers["content-type"] && (w.headers["content-type"] = "application/x-www-form-urlencoded"), w.headers && (delete w.headers["Content-Length"], delete w.headers["content-length"]), void 0 === w.followRedirect || w.followRedirect || ((this.isSurge() || this.isLoon()) && (w["auto-redirect"] = !1), this.isQuanX() && (w.opts ? w.opts.redirection = !1 : w.opts = M)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const X = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (w.headers = w.headers || {}, Object.assign(w.headers, X));
          $httpClient[S](w, (B, z, m) => {
            !B && z && (z.body = m, z.statusCode = z.status ? z.status : z.statusCode, z.status = z.statusCode);
            W(B, z, m);
          });
          break;
        case "Quantumult X":
          const P = {};
          P.hints = !1;
          w.method = S;
          this.isNeedRewrite && (w.opts = w.opts || {}, Object.assign(w.opts, P));
          $task.fetch(w).then(B => {
            const {
                statusCode: d,
                statusCode: F,
                headers: c,
                body: Y,
                bodyBytes: f
              } = B,
              O = {
                status: d,
                statusCode: F,
                headers: c,
                body: Y,
                bodyBytes: f
              };
            W(null, O, Y, f);
          }, B => W(B && B.error || "UndefinedError"));
          break;
        case "Node.js":
          let p = require("iconv-lite");
          this.initGotEnv(w);
          const {
            url: T,
            ...E
          } = w;
          this.got[S](T, E).then(B => {
            const {
                statusCode: m,
                statusCode: Q,
                headers: d,
                rawBody: F
              } = B,
              c = p.decode(F, this.encoding),
              Y = {
                status: m,
                statusCode: Q,
                headers: d,
                rawBody: F,
                body: c
              };
            W(null, Y, c);
          }, B => {
            const {
              message: m,
              response: a
            } = B;
            W(m, a, a && p.decode(a.rawBody, this.encoding));
          });
          break;
      }
    }
    time(w, W = null) {
      const M = W ? new Date(W) : new Date();
      let X = {
        "M+": M.getMonth() + 1,
        "d+": M.getDate(),
        "H+": M.getHours(),
        "m+": M.getMinutes(),
        "s+": M.getSeconds(),
        "q+": Math.floor((M.getMonth() + 3) / 3),
        S: M.getMilliseconds()
      };
      /(y+)/.test(w) && (w = w.replace(RegExp.$1, (M.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let P in X) new RegExp("(" + P + ")").test(w) && (w = w.replace(RegExp.$1, 1 == RegExp.$1.length ? X[P] : ("00" + X[P]).substr(("" + X[P]).length)));
      return w;
    }
    queryStr(w) {
      let R = "";
      for (const S in w) {
        let X = w[S];
        null != X && "" !== X && ("object" == typeof X && (X = JSON.stringify(X)), R += S + "=" + X + "&");
      }
      R = R.substring(0, R.length - 1);
      return R;
    }
    msg(w = A, W = "", R = "", S = {}) {
      const X = P => {
        const {
          $open: T,
          $copy: E,
          $media: B,
          $mediaMime: z
        } = P;
        switch (typeof P) {
          case void 0:
            return P;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const m = {
                  url: P
                };
                return m;
              case "Loon":
              case "Shadowrocket":
                return P;
              case "Quantumult X":
                const Q = {
                  "open-url": P
                };
                return Q;
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
                  const d = {};
                  let F = P.openUrl || P.url || P["open-url"] || T;
                  F && Object.assign(d, {
                    action: "open-url",
                    url: F
                  });
                  let c = P["update-pasteboard"] || P.updatePasteboard || E;
                  if (c && Object.assign(d, {
                    action: "clipboard",
                    text: c
                  }), B) {
                    let f, O, I;
                    if (B.startsWith("http")) {
                      f = B;
                    } else {
                      if (B.startsWith("data:")) {
                        const [q] = B.split(";"),
                          [, N] = B.split(",");
                        O = N;
                        I = q.replace("data:", "");
                      } else {
                        O = B;
                        I = (u => {
                          const K = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var v in K) if (0 === u.indexOf(v)) {
                            return K[v];
                          }
                          return null;
                        })(B);
                      }
                    }
                    Object.assign(d, {
                      "media-url": f,
                      "media-base64": O,
                      "media-base64-mime": z ?? I
                    });
                  }
                  const Y = {};
                  Y["auto-dismiss"] = P["auto-dismiss"];
                  Y.sound = P.sound;
                  Object.assign(d, Y);
                  return d;
                }
              case "Loon":
                {
                  const u = {};
                  let v = P.openUrl || P.url || P["open-url"] || T;
                  v && Object.assign(u, {
                    openUrl: v
                  });
                  let K = P.mediaUrl || P["media-url"];
                  B?.["startsWith"]("http") && (K = B);
                  K && Object.assign(u, {
                    mediaUrl: K
                  });
                  console.log(JSON.stringify(u));
                  return u;
                }
              case "Quantumult X":
                {
                  const L = {};
                  let H = P["open-url"] || P.url || P.openUrl || T;
                  H && Object.assign(L, {
                    "open-url": H
                  });
                  let y = P["media-url"] || P.mediaUrl;
                  B?.["startsWith"]("http") && (y = B);
                  y && Object.assign(L, {
                    "media-url": y
                  });
                  let l = P["update-pasteboard"] || P.updatePasteboard || E;
                  l && Object.assign(L, {
                    "update-pasteboard": l
                  });
                  console.log(JSON.stringify(L));
                  return L;
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
            $notification.post(w, W, R, X(S));
            break;
          case "Quantumult X":
            $notify(w, W, R, X(S));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let P = ["", "==============📣系统通知📣=============="];
        P.push(w);
        W && P.push(W);
        R && P.push(R);
        console.log(P.join("\n"));
        this.logs = this.logs.concat(P);
      }
    }
    debug(...w) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (w.length > 0 && (this.logs = [...this.logs, ...w]), console.log("" + this.logLevelPrefixs.debug + w.map(W => W ?? String(W)).join(this.logSeparator)));
    }
    info(...w) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (w.length > 0 && (this.logs = [...this.logs, ...w]), console.log("" + this.logLevelPrefixs.info + w.map(W => W ?? String(W)).join(this.logSeparator)));
    }
    warn(...w) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (w.length > 0 && (this.logs = [...this.logs, ...w]), console.log("" + this.logLevelPrefixs.warn + w.map(W => W ?? String(W)).join(this.logSeparator)));
    }
    error(...w) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (w.length > 0 && (this.logs = [...this.logs, ...w]), console.log("" + this.logLevelPrefixs.error + w.map(W => W ?? String(W)).join(this.logSeparator)));
    }
    log(...w) {
      w.length > 0 && (this.logs = [...this.logs, ...w]);
      console.log(w.map(W => W ?? String(W)).join(this.logSeparator));
    }
    logErr(w, W) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", W, w);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", W, void 0 !== w.message ? w.message : w, w.stack);
          break;
      }
    }
    wait(w) {
      return new Promise(W => setTimeout(W, w));
    }
    done(w = {}) {
      const W = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + W + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(w);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(A, Z);
}