//Fri Jul 04 2025 12:04:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const D_j_0x3c96c7 = new D_j_0xd30860("趣头条");
const D_j_0x53b604 = "V1.0.1";
const D_j_0x3bc718 = "qttapp";
let D_j_0x53cd29 = D_j_0x3c96c7.getjson(D_j_0x3bc718, []);
const D_j_0x110c8c = D_j_0x3c96c7.isNode() ? require("http") : "";
const D_j_0x42374c = D_j_0x3c96c7.isNode() ? require("./sendNotify") : "";
const D_j_0x5e1a6b = D_j_0x3c96c7.isNode() ? require("./david_cookies") : "";
let D_j_0x5426db = D_j_0x3c96c7.getdata("tguserid") || 1;
let D_j_0x98f3fe = D_j_0x3c96c7.getdata("qttactivecode") || 0;
let D_j_0x2c3a78 = D_j_0x3c96c7.getval("qttuserck") || 1;
let D_j_0x1ef445 = D_j_0x3c96c7.getval("apiHost") || "http://106.15.104.124:8080";
if (D_j_0x3c96c7.getval("apiHosts")) {
  D_j_0x1ef445 = D_j_0x3c96c7.getval("apiHosts");
}
const D_j_0x2a6bb1 = 0;
let D_j_0x213cd8 = D_j_0x3c96c7.getval("tz") || "1";
var D_j_0x54a58f = "";
var D_j_0x1adb53 = "";
let D_j_0x133d03 = "";
let D_j_0x1a085d = "";
let D_j_0x4e5cdb = [];
let D_j_0xf4f0fe = "";
let D_j_0x316c02 = "";
let D_j_0x4fabbf = "";
let D_j_0x240f8f = "";
let D_j_0x53f7fe = "";
let D_j_0x3a224a = "";
let D_j_0x542a91 = "";
let D_j_0x26c12f = 1;
let D_j_0x56d9db = 1;
let D_j_0x5833b4 = 1;
let D_j_0x3b7bbf = 1;
let D_j_0x4de739 = "";
let D_j_0x34339d = "";
let D_j_0x59e66f = 3;
let D_j_0xacc00c = "";
if (D_j_0x3c96c7.isNode()) {
  if (process.env.QTTAPP) {
    D_j_0x53cd29 = JSON.parse(process.env.QTTAPP);
  } else {
    D_j_0x53cd29 = D_j_0x5e1a6b.QTT;
  }
  D_j_0x5426db = process.env.TGUSERID;
  D_j_0x98f3fe = process.env.QTTACTIVECODE;
  if (process.env.APIHOST) {
    D_j_0x1ef445 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    D_j_0x1ef445 = process.env.APIHOSTS;
  }
  D_j_0x54a58f = new Date(new Date().getTime()).getHours();
  D_j_0x1adb53 = new Date(new Date().getTime()).getMinutes();
  D_j_0x3c96c7.log("🔔 当前环境: Node, 当前时间：" + D_j_0x54a58f + "点");
} else {
  D_j_0x54a58f = new Date().getHours();
  D_j_0x1adb53 = new Date().getMinutes();
  D_j_0x3c96c7.log("🔔 当前环境: 手机代理, 当前时间：" + D_j_0x54a58f + "点");
}
!(async () => {
  if (!D_j_0x53cd29) {
    D_j_0x3c96c7.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
    return;
  }
  D_j_0x3c96c7.log("📢 开始检测服务器接口状态>>>");
  let _0x3864cc = false;
  const _0x5bc907 = D_j_0x1ef445.split("&");
  const _0x1e60c9 = _0x5bc907.length;
  for (let _0x1457d1 = 0; _0x1457d1 < _0x1e60c9; _0x1457d1++) {
    if (D_j_0x3c96c7.isNode()) {
      _0x3864cc = await D_j_0x4d89ca("" + _0x5bc907[_0x1457d1], 2500);
    } else {
      _0x3864cc = await D_j_0x45ff34("" + _0x5bc907[_0x1457d1], 2500);
    }
    if (_0x3864cc == true) {
      D_j_0x1ef445 = _0x5bc907[_0x1457d1];
      D_j_0x3c96c7.log("📢 接口" + (_0x1457d1 + 1) + "[" + _0x5bc907[_0x1457d1] + "]服务器接口正常! 🎉");
      break;
    }
    if (_0x1457d1 == _0x1e60c9 - 1 && _0x3864cc == false) {
      D_j_0x3c96c7.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
      D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
      return;
    }
  }
  if (typeof $request !== "undefined") {
    await D_j_0x458936();
  } else {
    if (!D_j_0x98f3fe || !D_j_0x5426db || D_j_0x5426db == 1 || D_j_0x98f3fe == 0 || D_j_0x98f3fe.length != 32) {
      D_j_0x3c96c7.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await D_j_0x344cf4(D_j_0x3bc718, D_j_0x5426db, D_j_0x98f3fe);
    D_j_0x3c96c7.log("📢 " + D_j_0x53f7fe);
    D_j_0x3c96c7.log("🔔 当前脚本版本号: " + D_j_0x53b604 + "，最新版本号: " + D_j_0x4fabbf);
    if (D_j_0xacc00c != "") {
      let _0x41b118 = new Date(D_j_0xacc00c).getTime();
      let _0x3fd3d7 = new Date().getTime();
      if (_0x3fd3d7 > _0x41b118) {
        D_j_0x3c96c7.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (D_j_0x53b604 < D_j_0x4fabbf) {
      D_j_0x3c96c7.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      D_j_0x58f1ae("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (D_j_0x316c02 != true) {
      D_j_0x3c96c7.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (D_j_0x4de739 != true) {
      D_j_0x3c96c7.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (D_j_0xf4f0fe != true) {
      D_j_0x3c96c7.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (D_j_0x542a91 == true) {
      D_j_0x3c96c7.log("🔔 此脚本采用付费模式。🔒");
    } else {
      D_j_0x3c96c7.log("🔔 此脚本采用免费模式。🔓");
    }
    if (D_j_0xacc00c != "") {
      if (D_j_0x542a91 == true) {
        D_j_0x3c96c7.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x13d793 = new Date(D_j_0xacc00c).getTime();
        let _0x96c5ba = new Date().getTime();
        if (_0x96c5ba > _0x13d793) {
          D_j_0x3c96c7.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (D_j_0x3a224a != true) {
        D_j_0x3c96c7.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (D_j_0x26c12f > 1) {
      D_j_0x3c96c7.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + D_j_0x59e66f * D_j_0x26c12f + "个账号。");
    }
    if (D_j_0x56d9db > 1) {
      D_j_0x3c96c7.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + D_j_0x5833b4 + "次, 已经运行了" + D_j_0x3b7bbf + "次。");
    }
    if (D_j_0x240f8f != true) {
      D_j_0x3c96c7.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (D_j_0x53cd29.length > D_j_0x59e66f * D_j_0x26c12f) {
      D_j_0x3c96c7.log("⚠️ 当前用户一次最多运行" + D_j_0x59e66f * D_j_0x26c12f + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (D_j_0x53cd29.length == 0) {
      D_j_0x3c96c7.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (D_j_0x3b7bbf + D_j_0x53cd29.length > D_j_0x5833b4) {
      D_j_0x3c96c7.log("📢 一共发现了" + D_j_0x53cd29.length + "个账号");
      D_j_0x3c96c7.log("⚠️ 当前用户运行次数剩余" + (D_j_0x5833b4 - D_j_0x3b7bbf) + "次，还可以运行" + (D_j_0x5833b4 - D_j_0x3b7bbf) + "个账号，还需要" + (D_j_0x53cd29.length - (D_j_0x5833b4 - D_j_0x3b7bbf)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (D_j_0xacc00c != "") {
      D_j_0x3c96c7.log("📢 你的会员有效期到： " + D_j_0xacc00c);
    }
    D_j_0x3c96c7.log("📢 一共发现了" + D_j_0x53cd29.length + "个账号");
    let _0x5f498c = [];
    for (let _0xa1c462 = 0; _0xa1c462 < D_j_0x53cd29.length; _0xa1c462++) {
      _0x5f498c.push(D_j_0x59b5f6(_0xa1c462));
      D_j_0x4e5cdb.push(0);
    }
    await Promise.allSettled(_0x5f498c).then(_0x3aea8d => {
      if (_0x5f498c[_0x5f498c.length - 1].notify == 1) {
        D_j_0x58f1ae(D_j_0x133d03);
      }
    });
  }
})().catch(_0x351f07 => D_j_0x3c96c7.logErr(_0x351f07)).finally(() => D_j_0x3c96c7.done());
async function D_j_0x59b5f6(_0x33e2e7) {
  return new Promise((_0x1b517a, _0x4925a4) => {
    D_j_0x3c96c7.log("[账号" + (_0x33e2e7 + 1) + "]: 开始执行 working......");
    D_j_0x593d19(_0x1b517a, _0x33e2e7);
  });
}
async function D_j_0x593d19(_0x1ca7cf, _0x37ee8d) {
  await D_j_0x1b906a(_0x37ee8d);
  await D_j_0x233194(_0x37ee8d);
  await D_j_0xeb563b(_0x37ee8d);
  let _0x41763a = D_j_0x53cd29[_0x37ee8d].reader_urls.length;
  for (let _0x5928e8 = 0; _0x5928e8 < _0x41763a; _0x5928e8++) {
    const _0x56f17b = D_j_0x53cd29[_0x37ee8d].reader_urls[_0x5928e8];
    await D_j_0x33b486(_0x56f17b, _0x37ee8d);
    await D_j_0x3c96c7.wait(D_j_0x40fb84(5000, 10000));
  }
  if (D_j_0x4e5cdb[_0x37ee8d] > 0) {
    D_j_0x3c96c7.log("[账号" + (_0x37ee8d + 1) + "]: 本次一共阅读获得" + D_j_0x4e5cdb[_0x37ee8d] + "金币 🎉");
    D_j_0x133d03 += "[账号" + (_0x37ee8d + 1) + "]: 本次一共阅读获得" + D_j_0x4e5cdb[_0x37ee8d] + "金币 🎉\n";
  }
  await D_j_0x58e02d(_0x37ee8d);
  if (D_j_0x54a58f >= 5 && D_j_0x54a58f <= 9) {
    await D_j_0xe1554e("am", _0x37ee8d);
  }
  if (D_j_0x54a58f >= 20 && D_j_0x54a58f <= 23) {
    await D_j_0xe1554e("pm", _0x37ee8d);
  }
  await D_j_0x3edac0(D_j_0x3bc718, D_j_0x5426db);
  _0x1ca7cf();
}
async function D_j_0x458936() {
  if ($request.url.match(/\/member\/v1\/get/)) {
    const _0x29488d = $request.url.split("?")[1];
    const _0x308339 = $request.url.split("token=")[1].split("&")[0];
    const _0x2f533a = $request.headers["X-Tk"];
    const _0x42e8a3 = $request.headers["User-Agent"];
    let _0x46168b = D_j_0x2c3a78 - 1;
    if (D_j_0x53cd29[_0x46168b]) {
      D_j_0x53cd29[_0x46168b].user_info = _0x29488d;
      D_j_0x53cd29[_0x46168b].token = _0x308339;
      D_j_0x53cd29[_0x46168b].xTk = _0x2f533a;
      D_j_0x53cd29[_0x46168b].ua = _0x42e8a3;
      D_j_0x53cd29[_0x46168b].notify = 1;
    } else {
      const _0x31a829 = {
        user_info: _0x29488d,
        token: _0x308339,
        xTk: _0x2f533a,
        ua: _0x42e8a3,
        notify: 1
      };
      D_j_0x53cd29[_0x46168b] = _0x31a829;
    }
    D_j_0x3c96c7.setdata(JSON.stringify(D_j_0x53cd29, null, 2), "qttapp");
    D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "趣头条账号" + (_0x46168b + 1) + "基础数据获取成功！🎉");
  }
  if ($request.url.match(/\/readtimer\/report/)) {
    const _0x28e821 = $request.url.split("?")[1];
    let _0x31be2f = D_j_0x2c3a78 - 1;
    let _0x15a71a = D_j_0x53cd29[_0x31be2f].reader_urls || [];
    let _0x1e4fd8 = _0x15a71a.length;
    if (_0x1e4fd8 < 15) {
      _0x15a71a.push(_0x28e821);
      D_j_0x53cd29[_0x31be2f].reader_urls = _0x15a71a;
      D_j_0x3c96c7.setdata(JSON.stringify(D_j_0x53cd29, null, 2), "qttapp");
      D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "趣头条账号" + (_0x31be2f + 1) + "第" + (_0x1e4fd8 + 1) + "条阅读数据获取成功！" + (_0x1e4fd8 + 1) + "/15 🎉");
    } else {
      D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "趣头条账号" + (_0x31be2f + 1) + "阅读数据已经获取到最大条数");
    }
  }
  if ($request.url.match(/\/cash_order\/create/)) {
    const _0x2638b5 = $request.url.split("?")[1];
    let _0xf56a20 = D_j_0x2c3a78 - 1;
    D_j_0x53cd29[_0xf56a20].withdraw_url = _0x2638b5;
    D_j_0x3c96c7.setdata(JSON.stringify(D_j_0x53cd29, null, 2), "qttapp");
    D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "趣头条账号" + (_0xf56a20 + 1) + "提现获取成功 🎉");
  }
}
async function D_j_0x233194(_0x392f56) {
  let _0x20d6ef = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x5e22bc = "https://api.1sapp.com/sign/info?time=" + _0x20d6ef + "&token=" + D_j_0x53cd29[_0x392f56].token;
  let _0xd40ba1 = D_j_0x7a2339(_0x5e22bc, "", _0x392f56);
  await D_j_0x20654a("get", _0xd40ba1, D_j_0x49e7bb());
  let _0x3bf60a = D_j_0x1a085d;
  if (_0x3bf60a.code == 0) {
    const _0x1e4663 = _0x3bf60a.data.signIn;
    if (_0x1e4663.today == 0) {
      await D_j_0x1d8c71(_0x392f56);
    } else {
      D_j_0x3c96c7.log("[账号" + (_0x392f56 + 1) + "]: 今天已完成签到");
      D_j_0x133d03 += "[账号" + (_0x392f56 + 1) + "]: 今天已完成签到 \n";
    }
    extAds = _0x1e4663.ext_ad;
    for (let _0x2d5cf2 = 0; _0x2d5cf2 < extAds.length; _0x2d5cf2++) {
      const _0x73ac37 = extAds[_0x2d5cf2];
      _0x73ac37.next_time == -1;
    }
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x392f56 + 1) + "]: 获取签到信息失败");
  }
}
async function D_j_0x1b906a(_0x348a52) {
  const _0x3dc00c = "https://api.1sapp.com/app/user/info/member/v1/get?" + D_j_0x53cd29[_0x348a52].user_info;
  let _0x27d921 = D_j_0x7a2339(_0x3dc00c, "", _0x348a52);
  await D_j_0x20654a("get", _0x27d921, D_j_0x49e7bb());
  let _0x7a73ea = D_j_0x1a085d;
  if (_0x7a73ea.code == 0) {
    const _0x117a29 = _0x7a73ea.data.find(_0x5beafa => _0x5beafa.key == "heard_module");
    const _0x2283b7 = _0x7a73ea.data.find(_0xd1c1b1 => _0xd1c1b1.key == "coin_info");
    D_j_0x3c96c7.log("[账号" + (_0x348a52 + 1) + "]: [用户名] => " + _0x117a29.data.member_info.nickname);
    D_j_0x3c96c7.log("[账号" + (_0x348a52 + 1) + "]: [总金额] => " + _0x2283b7.newCoinSystem.remainderCoinsFormat / 10000 + "元");
    D_j_0x3c96c7.log("[账号" + (_0x348a52 + 1) + "]: [今日金币] => " + _0x2283b7.newCoinSystem.todayCoinsFormat);
    D_j_0x133d03 += "[账号" + (_0x348a52 + 1) + "]: [用户名] => " + _0x117a29.data.member_info.nickname + "\n";
    D_j_0x133d03 += "[账号" + (_0x348a52 + 1) + "]: [总金币] => " + _0x2283b7.newCoinSystem.remainderCoinsFormat / 10000 + "元\n";
    D_j_0x133d03 += "[账号" + (_0x348a52 + 1) + "]: [今日金币] => " + _0x2283b7.newCoinSystem.todayCoinsFormat + "\n";
    const _0x4cd5b9 = _0x7a73ea.data.find(_0xff84d0 => _0xff84d0.name == "菜单栏");
    for (let _0x1d6dfc = 0; _0x1d6dfc < _0x4cd5b9.data.length; _0x1d6dfc++) {
      const _0x165731 = _0x4cd5b9.data[_0x1d6dfc];
      if (_0x165731.title.indexOf("邀请") != -1) {
        await D_j_0x39cecd(_0x348a52);
      }
    }
    if (D_j_0x54a58f == 12 && D_j_0x53cd29[_0x348a52].withdraw_url) {
      await D_j_0x1fee11(_0x348a52);
    }
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x348a52 + 1) + "]: 获取用户信息失败");
  }
}
async function D_j_0x1d8c71(_0x4ee0dd) {
  let _0x208f1d = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x3c4e71 = "https://api.1sapp.com/sign/sign?time=" + _0x208f1d + "&token=" + D_j_0x53cd29[_0x4ee0dd].token;
  let _0x5e49fd = D_j_0x7a2339(_0x3c4e71, "", _0x4ee0dd);
  await D_j_0x20654a("get", _0x5e49fd, D_j_0x49e7bb());
  let _0x4cb6e3 = D_j_0x1a085d;
  if (_0x4cb6e3.code == 0) {
    D_j_0x3c96c7.log("[账号" + (_0x4ee0dd + 1) + "]: 恭喜你签到成功，获得" + _0x4cb6e3.data.amount + "金币，已连续签到" + _0x4cb6e3.data.continuationSignIn + "天🎉");
    D_j_0x133d03 += "[账号" + (_0x4ee0dd + 1) + "]: 恭喜你签到成功，获得" + _0x4cb6e3.data.amount + "金币，已连续签到" + _0x4cb6e3.data.continuationSignIn + "天🎉\n";
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x4ee0dd + 1) + "]: " + _0x4cb6e3.message);
  }
}
async function D_j_0x33b486(_0x19424b, _0x2ad44f) {
  const _0x4c2ad1 = "https://api.1sapp.com/readtimer/report?" + _0x19424b;
  let _0x71952f = D_j_0x7a2339(_0x4c2ad1, "", _0x2ad44f);
  await D_j_0x20654a("get", _0x71952f, D_j_0x49e7bb());
  let _0x2fbc12 = D_j_0x1a085d;
  if (_0x2fbc12.code == 0) {
    if (_0x2fbc12.data.curr_task.amount > 0) {
      D_j_0x3c96c7.log("[账号" + (_0x2ad44f + 1) + "]: 恭喜你阅读获得" + _0x2fbc12.data.curr_task.amount + "金币 🎉");
      D_j_0x4e5cdb[_0x2ad44f] += _0x2fbc12.data.curr_task.amount;
    }
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x2ad44f + 1) + "]: " + _0x2fbc12.message);
  }
}
async function D_j_0x58e02d(_0x3fa4a6) {
  let _0x52a086 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0xffda6b = "https://qtt-turntable.qutoutiao.net/press_trigger?ts=" + _0x52a086 + "&token=" + D_j_0x53cd29[_0x3fa4a6].token;
  let _0x40c35d = D_j_0x7a2339(_0xffda6b, "", _0x3fa4a6);
  _0x40c35d.headers.Host = "qtt-turntable.qutoutiao.net";
  await D_j_0x20654a("get", _0x40c35d, D_j_0x49e7bb());
  let _0x5902cf = D_j_0x1a085d;
  if (_0x5902cf.code == 1) {
    if (_0x5902cf.amount_coin) {
      D_j_0x3c96c7.log("[账号" + (_0x3fa4a6 + 1) + "]: 转动转盘获得" + _0x5902cf.amount_coin + "金币 🎉");
      D_j_0x133d03 += "[账号" + (_0x3fa4a6 + 1) + "]: 转动转盘获得" + _0x5902cf.amount_coin + "金币 🎉\n";
    }
  }
}
async function D_j_0xe1554e(_0x52f7d0, _0x56fe8d) {
  const _0x2f01b4 = "https://million-api.aiclk.com/external/zfb/sleep_init?dtu=100&token=" + D_j_0x53cd29[_0x56fe8d].token;
  let _0x2cf6de = D_j_0x7a2339(_0x2f01b4, "", _0x56fe8d);
  _0x2cf6de.headers.Host = "million-api.aiclk.com";
  await D_j_0x20654a("post", _0x2cf6de, D_j_0x49e7bb());
  let _0x29f22e = D_j_0x1a085d;
  if (_0x29f22e.code == 0) {
    if (_0x29f22e.data.morning.status == "2") {
      await D_j_0x4750cb(_0x52f7d0, _0x56fe8d);
    }
    if (_0x29f22e.data.night.status == "2") {
      await D_j_0x4750cb(_0x52f7d0, _0x56fe8d);
    }
  }
}
async function D_j_0x39cecd(_0x1cf478) {
  const _0x51ebff = "https://api.1sapp.com/member/inviteCode?dtu=100&token=" + D_j_0x53cd29[_0x1cf478].token + "&invite_code=" + D_j_0x34339d;
  const _0x10965a = "dtu=100&xhi=200&invite_code=" + D_j_0x34339d;
  let _0x538de3 = D_j_0x7a2339(_0x51ebff, _0x10965a, _0x1cf478);
  await D_j_0x20654a("post", _0x538de3, D_j_0x49e7bb());
  let _0x5a5a01 = D_j_0x1a085d;
  if (_0x5a5a01.code == 0) {
    D_j_0x3c96c7.log("感谢支持！");
  }
}
async function D_j_0x4750cb(_0x222438, _0x3d9cfa) {
  const _0x2b0023 = "https://million-api.aiclk.com/external/zfb/sleep_coin?from=" + _0x222438 + "&dtu=100&token=" + D_j_0x53cd29[_0x3d9cfa].token;
  let _0x2ba668 = D_j_0x7a2339(_0x2b0023, "", _0x3d9cfa);
  _0x2ba668.headers.Host = "million-api.aiclk.com";
  await D_j_0x20654a("post", _0x2ba668, D_j_0x49e7bb());
  let _0xb2ae3b = D_j_0x1a085d;
  if (_0xb2ae3b.code == 0) {
    D_j_0x3c96c7.log("[账号" + (_0x3d9cfa + 1) + "]: 早睡早起获得" + _0xb2ae3b.data.coin + "金币 🎉");
    D_j_0x133d03 += "[账号" + (_0x3d9cfa + 1) + "]: 早睡早起获得" + _0xb2ae3b.data.coin + "金币 🎉 \n";
  }
}
async function D_j_0x3b8edd(_0xb3c417, _0x1dc6b5) {
  let _0x3a9070 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x2e743b = "https://api.1sapp.com/sign/adDone?pos=" + _0xb3c417 + "&time=" + _0x3a9070 + "&token=" + D_j_0x53cd29[_0x1dc6b5].token + "&version=30967000&xhi=200";
  let _0x5b165c = D_j_0x7a2339(_0x2e743b, "", _0x1dc6b5);
  await D_j_0x20654a("get", _0x5b165c, D_j_0x49e7bb());
  let _0x31c091 = D_j_0x1a085d;
  if (_0x31c091.code == 0) {
    D_j_0x3c96c7.log("[账号" + (_0x1dc6b5 + 1) + "]:  观看位置" + (_0xb3c417 == "one" ? 1 : _0xb3c417 == "two" ? 2 : 3) + "广告成功 🎉");
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x1dc6b5 + 1) + "]: " + _0x31c091.message);
  }
}
async function D_j_0xeb563b(_0xb0e90e) {
  let _0x40f6e8 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x2fece2 = "https://api.1sapp.com/mission/getIntPointRewardStatus?time=" + _0x40f6e8 + "&token=" + D_j_0x53cd29[_0xb0e90e].token + "&dtu=100";
  let _0x535b93 = D_j_0x7a2339(_0x2fece2, "", _0xb0e90e);
  await D_j_0x20654a("get", _0x535b93, D_j_0x49e7bb());
  let _0x21da55 = D_j_0x1a085d;
  if (_0x21da55.code == 0) {
    if (_0x21da55.data.reward_status == 1) {
      await D_j_0x9623a7(_0xb0e90e);
    }
  } else {
    D_j_0x3c96c7.log("[账号" + (_0xb0e90e + 1) + "]: 获取整点奖励信息失败");
  }
}
async function D_j_0x1fee11(_0x43cf1c) {
  const _0x1e724d = "https://api.1sapp.com/cash_order/create?" + D_j_0x53cd29[_0x43cf1c].withdraw_url;
  let _0x39c255 = D_j_0x7a2339(_0x1e724d, "", _0x43cf1c);
  await D_j_0x20654a("get", _0x39c255, D_j_0x49e7bb());
  let _0x2dfe02 = D_j_0x1a085d;
  if (_0x2dfe02.code == 0) {
    D_j_0x3c96c7.log("[账号" + (_0x43cf1c + 1) + "]: 提现请求已发送");
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x43cf1c + 1) + "]: " + _0x2dfe02.message);
  }
}
async function D_j_0x9623a7(_0x5eb500) {
  let _0x157acf = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x4d8392 = "https://api.1sapp.com/mission/intPointReward?time=" + _0x157acf + "&token=" + D_j_0x53cd29[_0x5eb500].token + "&dtu=100";
  let _0x2e8b53 = D_j_0x7a2339(_0x4d8392, "", _0x5eb500);
  await D_j_0x20654a("get", _0x2e8b53, D_j_0x49e7bb());
  let _0x562e79 = D_j_0x1a085d;
  if (_0x562e79.code == 0) {
    D_j_0x3c96c7.log("[账号" + (_0x5eb500 + 1) + "]: 领取整点奖励成功，获得" + _0x562e79.data.amount + "金币 🎉");
    D_j_0x133d03 += "[账号" + (_0x5eb500 + 1) + "]: 领取整点奖励成功，获得" + _0x562e79.data.amount + "金币 🎉\n";
  } else {
    D_j_0x3c96c7.log("[账号" + (_0x5eb500 + 1) + "]: " + _0x562e79.message);
  }
}
function D_j_0x344cf4(_0x1c853a, _0x5845ce, _0x101010) {
  return new Promise((_0x58189e, _0x5b4d7f) => {
    const _0x14a6d8 = D_j_0x1ef445 + "/script/permissions/lastest";
    const _0x5efed9 = {
      appName: _0x1c853a,
      userId: _0x5845ce,
      activityCode: _0x101010,
      version: D_j_0x53b604
    };
    const _0x572440 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x147e0f = {
      url: _0x14a6d8,
      headers: _0x572440,
      body: JSON.stringify(_0x5efed9)
    };
    D_j_0x3c96c7.post(_0x147e0f, async (_0x2e98ec, _0x56a2cb, _0x3e7605) => {
      const _0x5b9e9e = _0x3e7605.replace(/\"/g, "").slice(34);
      const _0x18fd0e = new D_j_0x9069de();
      result = JSON.parse(_0x18fd0e.decode(_0x5b9e9e));
      try {
        D_j_0x4fabbf = result.version;
        D_j_0xf4f0fe = result.userAuth;
        D_j_0x316c02 = result.scriptAuth;
        D_j_0x240f8f = result.runAuth;
        D_j_0x53f7fe = result.notify;
        D_j_0x3a224a = result.vipAuth;
        D_j_0x542a91 = result.isCharge;
        D_j_0x26c12f = result.runAcounts;
        D_j_0x56d9db = result.buyCount;
        D_j_0x3b7bbf = result.runedCounts;
        D_j_0x5833b4 = result.runTotalCounts;
        D_j_0x4de739 = result.userRank;
        D_j_0x34339d = result.invicate;
        D_j_0x59e66f = result.accountNumbers;
        D_j_0xacc00c = result.vipDate;
      } catch (_0x3f104c) {
        D_j_0x3c96c7.log(_0x3f104c);
      }
      _0x58189e();
    });
  });
}
function D_j_0x3edac0(_0x17fa0b, _0x5975b8) {
  return new Promise((_0xbff78, _0x49d2dc) => {
    const _0x333e45 = D_j_0x1ef445 + "/script/run/add";
    const _0x958a07 = {
      appName: _0x17fa0b,
      userId: _0x5975b8,
      activityCode: D_j_0x98f3fe,
      version: D_j_0x53b604
    };
    const _0xaa926 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2a7efc = {
      url: _0x333e45,
      headers: _0xaa926,
      body: JSON.stringify(_0x958a07)
    };
    D_j_0x3c96c7.post(_0x2a7efc, async (_0x16bb1f, _0xb2031a, _0x3830d1) => {
      _0xbff78();
    });
  });
}
function D_j_0x4d89ca(_0x52f254, _0x14364b) {
  return new Promise((_0x567b6d, _0x4ac7fe) => {
    const _0x1898db = setTimeout(() => {
      _0x567b6d(false);
    }, _0x14364b);
    const _0x28238d = D_j_0x110c8c.get(_0x52f254, _0x3693f8 => {
      clearTimeout(_0x1898db);
      if (_0x3693f8.statusCode === 404) {
        _0x567b6d(true);
      } else {
        _0x567b6d(false);
      }
    });
    _0x28238d.on("error", _0x330f07 => {
      clearTimeout(_0x1898db);
      _0x567b6d(false);
    });
    _0x28238d.on("timeout", () => {
      _0x28238d.abort();
      _0x4ac7fe(new Error("请求超时"));
    });
  });
}
async function D_j_0x45ff34(_0x38fd87, _0xd68748 = 3000) {
  return new Promise((_0x116eb1, _0x542dfa) => {
    const _0x112d3d = {
      url: _0x38fd87 + "/docs"
    };
    setTimeout(() => {
      _0x116eb1(false);
    }, _0xd68748);
    D_j_0x3c96c7.get(_0x112d3d, async (_0x4f9b37, _0x2cd2d8, _0x5cb3ba) => {
      if (_0x2cd2d8.status == 401) {
        _0x116eb1(true);
      } else {
        _0x116eb1(false);
      }
    });
  });
}
async function D_j_0x3d6e64(_0x564b18, _0x47e9eb, _0x2bbe2e) {
  return new Promise((_0x383a5c, _0x30fc94) => {
    const _0xd776bb = D_j_0x1ef445 + "/redis/hash/get/" + _0x564b18 + "/" + _0x47e9eb;
    const _0x5d7d73 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2af9bc = {
      url: _0xd776bb,
      headers: _0x5d7d73
    };
    D_j_0x3c96c7.get(_0x2af9bc, async (_0x24f893, _0x43d2db, _0x193f40) => {
      const _0x22d8cb = _0x193f40.replace(/\"/g, "");
      answerTexts[_0x2bbe2e] = _0x22d8cb;
      _0x383a5c();
    });
  });
}
function D_j_0x19cb00(_0x2bb2b0, _0x50bb49, _0x536762) {
  return new Promise((_0x315ea8, _0x4940a1) => {
    const _0x1fc9bc = D_j_0x1ef445 + "/redis/hash/set";
    const _0x208374 = {
      key: _0x2bb2b0,
      hashKey: _0x50bb49,
      hashValue: _0x536762
    };
    const _0x46e617 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5bc0fd = {
      url: _0x1fc9bc,
      headers: _0x46e617,
      body: JSON.stringify(_0x208374)
    };
    D_j_0x3c96c7.post(_0x5bc0fd, async (_0x2c7ba0, _0x1ad698, _0x4685df) => {
      _0x315ea8();
    });
  });
}
function D_j_0xc23473(_0x10af15) {
  return new Promise((_0x1835e0, _0x4d70db) => {
    const _0x3b9eed = D_j_0x1ef445 + "/redis/set/pop/" + _0x10af15;
    const _0x3ada6b = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x407d79 = {
      url: _0x3b9eed,
      headers: _0x3ada6b
    };
    D_j_0x3c96c7.get(_0x407d79, async (_0x536d9b, _0x3cf750, _0x4c3a67) => {
      const _0x353432 = _0x4c3a67.replace(/\"/g, "");
      popCookie = _0x353432;
      _0x1835e0();
    });
  });
}
function D_j_0x7a2339(_0x2f0d70, _0x163f41, _0x27e7fb) {
  const _0x3841d6 = {
    Host: "api.1sapp.com",
    "User-Agent": D_j_0x53cd29[_0x27e7fb].ua,
    "X-Tk": D_j_0x53cd29[_0x27e7fb].xTk
  };
  const _0x20e3f8 = {
    url: _0x2f0d70,
    headers: _0x3841d6
  };
  if (_0x163f41) {
    _0x20e3f8.body = _0x163f41;
  }
  return _0x20e3f8;
}
async function D_j_0x20654a(_0x336908, _0x417978, _0x723a5a) {
  D_j_0x1a085d = null;
  return new Promise(_0x3de21e => {
    D_j_0x3c96c7[_0x336908](_0x417978, async (_0x2a6ba9, _0x28a6d8, _0x5d0ceb) => {
      try {
        if (_0x2a6ba9) {
          D_j_0x3c96c7.log(_0x723a5a + ": " + _0x336908 + "请求失败");
          D_j_0x3c96c7.log(JSON.stringify(_0x2a6ba9));
          D_j_0x3c96c7.logErr(_0x2a6ba9);
        } else {
          if (D_j_0x47f413(_0x5d0ceb)) {
            D_j_0x1a085d = JSON.parse(_0x5d0ceb);
          }
        }
      } catch (_0x4ab8ac) {
        D_j_0x3c96c7.logErr(_0x4ab8ac, _0x28a6d8);
      } finally {
        _0x3de21e();
      }
    });
  });
}
function D_j_0x1e3d3c(_0x46c827) {
  _0x46c827 = _0x46c827.replace(/\"/g, "");
  var _0x19b683;
  var _0x3d4c8e = {};
  var _0x4c5694 = _0x46c827.slice(_0x46c827.indexOf("?") + 1).split("&");
  for (var _0x2a1b50 = 0; _0x2a1b50 < _0x4c5694.length; _0x2a1b50++) {
    _0x19b683 = _0x4c5694[_0x2a1b50].split("=");
    _0x3d4c8e[_0x19b683[0]] = _0x19b683[1];
  }
  return _0x3d4c8e;
}
function D_j_0x33f97f(_0x4190ff, _0x3c350d) {
  if (_0x4190ff.length * 2 <= _0x3c350d) {
    return _0x4190ff;
  }
  var _0x1b7997 = 0;
  var _0x41a3fb = "";
  for (var _0x238096 = 0; _0x238096 < _0x4190ff.length; _0x238096++) {
    _0x41a3fb = _0x41a3fb + _0x4190ff.charAt(_0x238096);
    if (_0x4190ff.charCodeAt(_0x238096) > 128) {
      _0x1b7997 = _0x1b7997 + 2;
      if (_0x1b7997 >= _0x3c350d) {
        return _0x41a3fb.substring(0, _0x41a3fb.length - 1) + "...";
      }
    } else {
      _0x1b7997 = _0x1b7997 + 1;
      if (_0x1b7997 >= _0x3c350d) {
        return _0x41a3fb.substring(0, _0x41a3fb.length - 2) + "...";
      }
    }
  }
  return _0x41a3fb;
}
function D_j_0x49e7bb() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function D_j_0x47f413(_0x556c0f) {
  try {
    if (typeof JSON.parse(_0x556c0f) == "object") {
      return true;
    }
  } catch (_0x5d1ca3) {
    console.log(_0x5d1ca3);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function D_j_0x2150d7(_0x443d96) {
  var _0x1b8eb4 = Object.keys(_0x443d96).map(function (_0x20263b) {
    return encodeURIComponent(_0x20263b) + "=" + encodeURIComponent(_0x443d96[_0x20263b]);
  }).join("&");
  return _0x1b8eb4;
}
function D_j_0x4154e8(_0x451640) {
  var _0x1da2f0 = String.fromCharCode(_0x451640.charCodeAt(0) + _0x451640.length);
  for (var _0x479684 = 1; _0x479684 < _0x451640.length; _0x479684++) {
    _0x1da2f0 += String.fromCharCode(_0x451640.charCodeAt(_0x479684) + _0x451640.charCodeAt(_0x479684 - 1));
  }
  return escape(_0x1da2f0);
}
function D_j_0x52244d(_0x1add76) {
  _0x1add76 = unescape(_0x1add76);
  var _0x4f8dd4 = String.fromCharCode(_0x1add76.charCodeAt(0) - _0x1add76.length);
  for (var _0x19466a = 1; _0x19466a < _0x1add76.length; _0x19466a++) {
    _0x4f8dd4 += String.fromCharCode(_0x1add76.charCodeAt(_0x19466a) - _0x4f8dd4.charCodeAt(_0x19466a - 1));
  }
  return _0x4f8dd4;
}
function D_j_0x40fb84(_0xa35af7, _0x3242fb) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0xa35af7 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x3242fb - _0xa35af7 + 1) + _0xa35af7);
      break;
    default:
      return 0;
      break;
  }
}
function D_j_0x4a969c() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function D_j_0x559015() {
  function _0x2746b4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x2746b4() + _0x2746b4() + "-" + _0x2746b4() + "-" + _0x2746b4() + "-" + _0x2746b4() + "-" + _0x2746b4() + _0x2746b4() + _0x2746b4();
}
function D_j_0x55f81b(_0x171337) {
  if (_0x171337.length == 11) {
    let _0x4fa62e = _0x171337.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x4fa62e;
  } else {
    return _0x171337;
  }
}
function D_j_0x28b06b(_0x5bf5fd) {
  return new Promise(_0x288d2e => {
    try {
      var _0x55ae7f = require("request");
      const _0x55b750 = {
        c: _0x5bf5fd
      };
      const _0x5d6b6f = {
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        qs: _0x55b750
      };
      _0x55ae7f(_0x5d6b6f, function (_0x4a17ce, _0x532964, _0x2efa9c) {
        if (_0x4a17ce) {
          throw new Error(_0x4a17ce);
        }
        let _0xcb65df = JSON.parse(_0x2efa9c);
        let _0x60c273 = _0xcb65df.hitokoto;
        _0x288d2e(_0x60c273);
        return _0x60c273;
      });
    } catch (_0x45f842) {
      console.log(_0x45f842);
    }
  });
}
function D_j_0x2200a4() {
  return Math.round(new Date().getTime()).toString();
}
function D_j_0x382ee0() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function D_j_0x2a8c05() {
  if (D_j_0x213cd8 == 1) {
    D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "", D_j_0x3c96c7.message);
  }
}
async function D_j_0x58f1ae(_0x2488a5) {
  if (D_j_0x54a58f == 9 || D_j_0x54a58f == 12 || D_j_0x54a58f == 18) {
    if (D_j_0x213cd8 == 1) {
      if (D_j_0x3c96c7.isNode()) {
        await D_j_0x42374c.sendNotify(D_j_0x3c96c7.name, _0x2488a5);
      } else {
        D_j_0x3c96c7.msg(D_j_0x3c96c7.name, "", _0x2488a5);
      }
    } else {
      D_j_0x3c96c7.log(_0x2488a5);
    }
  }
}
async function D_j_0x43fab1(_0x28c079, _0x1067f1, _0x1c8b82) {
  return new Promise((_0x589437, _0x2c4cb3) => {
    const _0x17fdc9 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x50dcf3 = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x1067f1,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x1c8b82],
      verifyPay: false
    };
    const _0x49149b = {
      "Content-Type": "application/json"
    };
    const _0x3c1e5d = {
      url: _0x17fdc9,
      headers: _0x49149b,
      body: JSON.stringify(_0x50dcf3)
    };
    D_j_0x3c96c7.post(_0x3c1e5d, async (_0x54a452, _0x3f7bb8, _0x28985d) => {
      _0x589437();
    });
  });
}
function D_j_0x366268(_0x391cf1, _0x22ee3f) {
  _0x22ee3f = _0x22ee3f || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x46fb2d = "";
  for (let _0x109ecc = 0; _0x109ecc < _0x391cf1; _0x109ecc++) {
    let _0x4bd477 = Math.floor(Math.random() * _0x22ee3f.length);
    _0x46fb2d += _0x22ee3f.substring(_0x4bd477, _0x4bd477 + 1);
  }
  return _0x46fb2d;
}
function D_j_0x3dca6f(_0x2d6789) {
  function _0x5e605c(_0x45c108, _0x27f044) {
    return _0x45c108 << _0x27f044 | _0x45c108 >>> 32 - _0x27f044;
  }
  function _0x22324f(_0x506894, _0x3f00e9) {
    var _0x529cbc, _0x585809, _0x59143e, _0x4465bc, _0x5a1bec;
    _0x59143e = 2147483648 & _0x506894;
    _0x4465bc = 2147483648 & _0x3f00e9;
    _0x529cbc = 1073741824 & _0x506894;
    _0x585809 = 1073741824 & _0x3f00e9;
    _0x5a1bec = (1073741823 & _0x506894) + (1073741823 & _0x3f00e9);
    return _0x529cbc & _0x585809 ? 2147483648 ^ _0x5a1bec ^ _0x59143e ^ _0x4465bc : _0x529cbc | _0x585809 ? 1073741824 & _0x5a1bec ? 3221225472 ^ _0x5a1bec ^ _0x59143e ^ _0x4465bc : 1073741824 ^ _0x5a1bec ^ _0x59143e ^ _0x4465bc : _0x5a1bec ^ _0x59143e ^ _0x4465bc;
  }
  function _0x381073(_0x333d3a, _0x173def, _0x5746e1) {
    return _0x333d3a & _0x173def | ~_0x333d3a & _0x5746e1;
  }
  function _0x5355ad(_0x37a345, _0x52d75e, _0x48109f) {
    return _0x37a345 & _0x48109f | _0x52d75e & ~_0x48109f;
  }
  function _0x96ed7c(_0x1ab057, _0x5b5d84, _0x397359) {
    return _0x1ab057 ^ _0x5b5d84 ^ _0x397359;
  }
  function _0x5366f6(_0x59302d, _0x384090, _0x131d13) {
    return _0x384090 ^ (_0x59302d | ~_0x131d13);
  }
  function _0x40dd42(_0x294b3c, _0x44ee92, _0x9bc0fe, _0x15e32b, _0x2890fc, _0x144ebe, _0x4811d8) {
    _0x294b3c = _0x22324f(_0x294b3c, _0x22324f(_0x22324f(_0x381073(_0x44ee92, _0x9bc0fe, _0x15e32b), _0x2890fc), _0x4811d8));
    return _0x22324f(_0x5e605c(_0x294b3c, _0x144ebe), _0x44ee92);
  }
  function _0x1cd31a(_0x40717f, _0x2acaaa, _0xaea0a0, _0x1c6a4e, _0x298683, _0x181855, _0xd5c929) {
    _0x40717f = _0x22324f(_0x40717f, _0x22324f(_0x22324f(_0x5355ad(_0x2acaaa, _0xaea0a0, _0x1c6a4e), _0x298683), _0xd5c929));
    return _0x22324f(_0x5e605c(_0x40717f, _0x181855), _0x2acaaa);
  }
  function _0x3267c6(_0x30351f, _0x2c7a69, _0x119964, _0x1da2dd, _0x4ce367, _0x3c5fa4, _0x1c6221) {
    _0x30351f = _0x22324f(_0x30351f, _0x22324f(_0x22324f(_0x96ed7c(_0x2c7a69, _0x119964, _0x1da2dd), _0x4ce367), _0x1c6221));
    return _0x22324f(_0x5e605c(_0x30351f, _0x3c5fa4), _0x2c7a69);
  }
  function _0x187fb1(_0x1736f4, _0x2c9593, _0x100d73, _0x422ca6, _0x11f91f, _0x3c5575, _0x399048) {
    _0x1736f4 = _0x22324f(_0x1736f4, _0x22324f(_0x22324f(_0x5366f6(_0x2c9593, _0x100d73, _0x422ca6), _0x11f91f), _0x399048));
    return _0x22324f(_0x5e605c(_0x1736f4, _0x3c5575), _0x2c9593);
  }
  function _0x2dae67(_0x12d261) {
    for (var _0x3788ee, _0x7bf842 = _0x12d261.length, _0x38348c = _0x7bf842 + 8, _0x1065ce = (_0x38348c - _0x38348c % 64) / 64, _0xf5e26b = 16 * (_0x1065ce + 1), _0x59f86f = new Array(_0xf5e26b - 1), _0x55c3f3 = 0, _0x427ae7 = 0; _0x7bf842 > _0x427ae7;) {
      _0x3788ee = (_0x427ae7 - _0x427ae7 % 4) / 4;
      _0x55c3f3 = _0x427ae7 % 4 * 8;
      _0x59f86f[_0x3788ee] = _0x59f86f[_0x3788ee] | _0x12d261.charCodeAt(_0x427ae7) << _0x55c3f3;
      _0x427ae7++;
    }
    _0x3788ee = (_0x427ae7 - _0x427ae7 % 4) / 4;
    _0x55c3f3 = _0x427ae7 % 4 * 8;
    _0x59f86f[_0x3788ee] = _0x59f86f[_0x3788ee] | 128 << _0x55c3f3;
    _0x59f86f[_0xf5e26b - 2] = _0x7bf842 << 3;
    _0x59f86f[_0xf5e26b - 1] = _0x7bf842 >>> 29;
    return _0x59f86f;
  }
  function _0x5e8c6a(_0x2b6e54) {
    var _0x3b7b6e,
      _0x44b994,
      _0x3ee728 = "",
      _0xe0eb66 = "";
    for (_0x44b994 = 0; 3 >= _0x44b994; _0x44b994++) {
      _0x3b7b6e = _0x2b6e54 >>> 8 * _0x44b994 & 255;
      _0xe0eb66 = "0" + _0x3b7b6e.toString(16);
      _0x3ee728 += _0xe0eb66.substr(_0xe0eb66.length - 2, 2);
    }
    return _0x3ee728;
  }
  function _0xe1b7fb(_0x4abdcc) {
    _0x4abdcc = _0x4abdcc.replace(/\r\n/g, "\n");
    for (var _0x5ceaa7 = "", _0x2d86b7 = 0; _0x2d86b7 < _0x4abdcc.length; _0x2d86b7++) {
      var _0x503d06 = _0x4abdcc.charCodeAt(_0x2d86b7);
      128 > _0x503d06 ? _0x5ceaa7 += String.fromCharCode(_0x503d06) : _0x503d06 > 127 && 2048 > _0x503d06 ? (_0x5ceaa7 += String.fromCharCode(_0x503d06 >> 6 | 192), _0x5ceaa7 += String.fromCharCode(63 & _0x503d06 | 128)) : (_0x5ceaa7 += String.fromCharCode(_0x503d06 >> 12 | 224), _0x5ceaa7 += String.fromCharCode(_0x503d06 >> 6 & 63 | 128), _0x5ceaa7 += String.fromCharCode(63 & _0x503d06 | 128));
    }
    return _0x5ceaa7;
  }
  var _0x52e1d2,
    _0x429f07,
    _0x41882c,
    _0x36e75f,
    _0x57e9b6,
    _0x38ca1e,
    _0x3696d2,
    _0x51ed16,
    _0x440c81,
    _0x41fd68 = [],
    _0x67096f = 7,
    _0x18e0ad = 12,
    _0x5a5e33 = 17,
    _0x1a5903 = 22,
    _0x4fe061 = 5,
    _0x5cfc91 = 9,
    _0x30fcda = 14,
    _0x4887b2 = 20,
    _0x3d3782 = 4,
    _0x4e62b1 = 11,
    _0x586090 = 16,
    _0x3b6011 = 23,
    _0x7d2f99 = 6,
    _0x203353 = 10,
    _0x11e37a = 15,
    _0x5ae239 = 21;
  for (_0x2d6789 = _0xe1b7fb(_0x2d6789), _0x41fd68 = _0x2dae67(_0x2d6789), _0x38ca1e = 1732584193, _0x3696d2 = 4023233417, _0x51ed16 = 2562383102, _0x440c81 = 271733878, _0x52e1d2 = 0; _0x52e1d2 < _0x41fd68.length; _0x52e1d2 += 16) {
    _0x429f07 = _0x38ca1e;
    _0x41882c = _0x3696d2;
    _0x36e75f = _0x51ed16;
    _0x57e9b6 = _0x440c81;
    _0x38ca1e = _0x40dd42(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 0], _0x67096f, 3614090360);
    _0x440c81 = _0x40dd42(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 1], _0x18e0ad, 3905402710);
    _0x51ed16 = _0x40dd42(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 2], _0x5a5e33, 606105819);
    _0x3696d2 = _0x40dd42(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 3], _0x1a5903, 3250441966);
    _0x38ca1e = _0x40dd42(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 4], _0x67096f, 4118548399);
    _0x440c81 = _0x40dd42(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 5], _0x18e0ad, 1200080426);
    _0x51ed16 = _0x40dd42(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 6], _0x5a5e33, 2821735955);
    _0x3696d2 = _0x40dd42(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 7], _0x1a5903, 4249261313);
    _0x38ca1e = _0x40dd42(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 8], _0x67096f, 1770035416);
    _0x440c81 = _0x40dd42(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 9], _0x18e0ad, 2336552879);
    _0x51ed16 = _0x40dd42(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 10], _0x5a5e33, 4294925233);
    _0x3696d2 = _0x40dd42(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 11], _0x1a5903, 2304563134);
    _0x38ca1e = _0x40dd42(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 12], _0x67096f, 1804603682);
    _0x440c81 = _0x40dd42(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 13], _0x18e0ad, 4254626195);
    _0x51ed16 = _0x40dd42(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 14], _0x5a5e33, 2792965006);
    _0x3696d2 = _0x40dd42(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 15], _0x1a5903, 1236535329);
    _0x38ca1e = _0x1cd31a(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 1], _0x4fe061, 4129170786);
    _0x440c81 = _0x1cd31a(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 6], _0x5cfc91, 3225465664);
    _0x51ed16 = _0x1cd31a(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 11], _0x30fcda, 643717713);
    _0x3696d2 = _0x1cd31a(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 0], _0x4887b2, 3921069994);
    _0x38ca1e = _0x1cd31a(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 5], _0x4fe061, 3593408605);
    _0x440c81 = _0x1cd31a(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 10], _0x5cfc91, 38016083);
    _0x51ed16 = _0x1cd31a(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 15], _0x30fcda, 3634488961);
    _0x3696d2 = _0x1cd31a(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 4], _0x4887b2, 3889429448);
    _0x38ca1e = _0x1cd31a(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 9], _0x4fe061, 568446438);
    _0x440c81 = _0x1cd31a(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 14], _0x5cfc91, 3275163606);
    _0x51ed16 = _0x1cd31a(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 3], _0x30fcda, 4107603335);
    _0x3696d2 = _0x1cd31a(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 8], _0x4887b2, 1163531501);
    _0x38ca1e = _0x1cd31a(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 13], _0x4fe061, 2850285829);
    _0x440c81 = _0x1cd31a(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 2], _0x5cfc91, 4243563512);
    _0x51ed16 = _0x1cd31a(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 7], _0x30fcda, 1735328473);
    _0x3696d2 = _0x1cd31a(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 12], _0x4887b2, 2368359562);
    _0x38ca1e = _0x3267c6(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 5], _0x3d3782, 4294588738);
    _0x440c81 = _0x3267c6(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 8], _0x4e62b1, 2272392833);
    _0x51ed16 = _0x3267c6(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 11], _0x586090, 1839030562);
    _0x3696d2 = _0x3267c6(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 14], _0x3b6011, 4259657740);
    _0x38ca1e = _0x3267c6(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 1], _0x3d3782, 2763975236);
    _0x440c81 = _0x3267c6(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 4], _0x4e62b1, 1272893353);
    _0x51ed16 = _0x3267c6(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 7], _0x586090, 4139469664);
    _0x3696d2 = _0x3267c6(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 10], _0x3b6011, 3200236656);
    _0x38ca1e = _0x3267c6(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 13], _0x3d3782, 681279174);
    _0x440c81 = _0x3267c6(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 0], _0x4e62b1, 3936430074);
    _0x51ed16 = _0x3267c6(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 3], _0x586090, 3572445317);
    _0x3696d2 = _0x3267c6(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 6], _0x3b6011, 76029189);
    _0x38ca1e = _0x3267c6(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 9], _0x3d3782, 3654602809);
    _0x440c81 = _0x3267c6(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 12], _0x4e62b1, 3873151461);
    _0x51ed16 = _0x3267c6(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 15], _0x586090, 530742520);
    _0x3696d2 = _0x3267c6(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 2], _0x3b6011, 3299628645);
    _0x38ca1e = _0x187fb1(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 0], _0x7d2f99, 4096336452);
    _0x440c81 = _0x187fb1(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 7], _0x203353, 1126891415);
    _0x51ed16 = _0x187fb1(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 14], _0x11e37a, 2878612391);
    _0x3696d2 = _0x187fb1(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 5], _0x5ae239, 4237533241);
    _0x38ca1e = _0x187fb1(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 12], _0x7d2f99, 1700485571);
    _0x440c81 = _0x187fb1(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 3], _0x203353, 2399980690);
    _0x51ed16 = _0x187fb1(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 10], _0x11e37a, 4293915773);
    _0x3696d2 = _0x187fb1(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 1], _0x5ae239, 2240044497);
    _0x38ca1e = _0x187fb1(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 8], _0x7d2f99, 1873313359);
    _0x440c81 = _0x187fb1(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 15], _0x203353, 4264355552);
    _0x51ed16 = _0x187fb1(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 6], _0x11e37a, 2734768916);
    _0x3696d2 = _0x187fb1(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 13], _0x5ae239, 1309151649);
    _0x38ca1e = _0x187fb1(_0x38ca1e, _0x3696d2, _0x51ed16, _0x440c81, _0x41fd68[_0x52e1d2 + 4], _0x7d2f99, 4149444226);
    _0x440c81 = _0x187fb1(_0x440c81, _0x38ca1e, _0x3696d2, _0x51ed16, _0x41fd68[_0x52e1d2 + 11], _0x203353, 3174756917);
    _0x51ed16 = _0x187fb1(_0x51ed16, _0x440c81, _0x38ca1e, _0x3696d2, _0x41fd68[_0x52e1d2 + 2], _0x11e37a, 718787259);
    _0x3696d2 = _0x187fb1(_0x3696d2, _0x51ed16, _0x440c81, _0x38ca1e, _0x41fd68[_0x52e1d2 + 9], _0x5ae239, 3951481745);
    _0x38ca1e = _0x22324f(_0x38ca1e, _0x429f07);
    _0x3696d2 = _0x22324f(_0x3696d2, _0x41882c);
    _0x51ed16 = _0x22324f(_0x51ed16, _0x36e75f);
    _0x440c81 = _0x22324f(_0x440c81, _0x57e9b6);
  }
  var _0x9f7d44 = _0x5e8c6a(_0x38ca1e) + _0x5e8c6a(_0x3696d2) + _0x5e8c6a(_0x51ed16) + _0x5e8c6a(_0x440c81);
  return _0x9f7d44.toLowerCase();
}
function D_j_0x3cf66c(_0x4dcc7b) {
  var _0x133df5 = 8;
  var _0x201a1f = 0;
  function _0x890825(_0x570482, _0x372b62) {
    var _0x2319df = (_0x570482 & 65535) + (_0x372b62 & 65535);
    var _0x4cc6e5 = (_0x570482 >> 16) + (_0x372b62 >> 16) + (_0x2319df >> 16);
    return _0x4cc6e5 << 16 | _0x2319df & 65535;
  }
  function _0x4bdd84(_0x4e4f40, _0xe0d769) {
    return _0x4e4f40 >>> _0xe0d769 | _0x4e4f40 << 32 - _0xe0d769;
  }
  function _0x2e3250(_0x4a6b73, _0x1b1347) {
    return _0x4a6b73 >>> _0x1b1347;
  }
  function _0x2361c2(_0x434328, _0x20ed25, _0x1a0f01) {
    return _0x434328 & _0x20ed25 ^ ~_0x434328 & _0x1a0f01;
  }
  function _0x200d3d(_0x46c103, _0x1cf389, _0x114374) {
    return _0x46c103 & _0x1cf389 ^ _0x46c103 & _0x114374 ^ _0x1cf389 & _0x114374;
  }
  function _0x31eccb(_0x368eec) {
    return _0x4bdd84(_0x368eec, 2) ^ _0x4bdd84(_0x368eec, 13) ^ _0x4bdd84(_0x368eec, 22);
  }
  function _0x1cfc61(_0x59d1a7) {
    return _0x4bdd84(_0x59d1a7, 6) ^ _0x4bdd84(_0x59d1a7, 11) ^ _0x4bdd84(_0x59d1a7, 25);
  }
  function _0x56491b(_0x20e4a8) {
    return _0x4bdd84(_0x20e4a8, 7) ^ _0x4bdd84(_0x20e4a8, 18) ^ _0x2e3250(_0x20e4a8, 3);
  }
  function _0x3e716c(_0x46d903) {
    return _0x4bdd84(_0x46d903, 17) ^ _0x4bdd84(_0x46d903, 19) ^ _0x2e3250(_0x46d903, 10);
  }
  function _0x4713b1(_0x5e63e1, _0x877226) {
    var _0x3166b9 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x4008cb = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x4d0dc0 = new Array(64);
    var _0x44bec6, _0x24955f, _0x49e459, _0x40cdbc, _0x3e7463, _0x4a1f8f, _0x5dcb81, _0x249503;
    var _0x1124ce, _0x17adc3;
    _0x5e63e1[_0x877226 >> 5] |= 128 << 24 - _0x877226 % 32;
    _0x5e63e1[(_0x877226 + 64 >> 9 << 4) + 15] = _0x877226;
    for (var _0x27da7a = 0; _0x27da7a < _0x5e63e1.length; _0x27da7a += 16) {
      _0x44bec6 = _0x4008cb[0];
      _0x24955f = _0x4008cb[1];
      _0x49e459 = _0x4008cb[2];
      _0x40cdbc = _0x4008cb[3];
      _0x3e7463 = _0x4008cb[4];
      _0x4a1f8f = _0x4008cb[5];
      _0x5dcb81 = _0x4008cb[6];
      _0x249503 = _0x4008cb[7];
      for (var _0x413fb0 = 0; _0x413fb0 < 64; _0x413fb0++) {
        if (_0x413fb0 < 16) {
          _0x4d0dc0[_0x413fb0] = _0x5e63e1[_0x413fb0 + _0x27da7a];
        } else {
          _0x4d0dc0[_0x413fb0] = _0x890825(_0x890825(_0x890825(_0x3e716c(_0x4d0dc0[_0x413fb0 - 2]), _0x4d0dc0[_0x413fb0 - 7]), _0x56491b(_0x4d0dc0[_0x413fb0 - 15])), _0x4d0dc0[_0x413fb0 - 16]);
        }
        _0x1124ce = _0x890825(_0x890825(_0x890825(_0x890825(_0x249503, _0x1cfc61(_0x3e7463)), _0x2361c2(_0x3e7463, _0x4a1f8f, _0x5dcb81)), _0x3166b9[_0x413fb0]), _0x4d0dc0[_0x413fb0]);
        _0x17adc3 = _0x890825(_0x31eccb(_0x44bec6), _0x200d3d(_0x44bec6, _0x24955f, _0x49e459));
        _0x249503 = _0x5dcb81;
        _0x5dcb81 = _0x4a1f8f;
        _0x4a1f8f = _0x3e7463;
        _0x3e7463 = _0x890825(_0x40cdbc, _0x1124ce);
        _0x40cdbc = _0x49e459;
        _0x49e459 = _0x24955f;
        _0x24955f = _0x44bec6;
        _0x44bec6 = _0x890825(_0x1124ce, _0x17adc3);
      }
      _0x4008cb[0] = _0x890825(_0x44bec6, _0x4008cb[0]);
      _0x4008cb[1] = _0x890825(_0x24955f, _0x4008cb[1]);
      _0x4008cb[2] = _0x890825(_0x49e459, _0x4008cb[2]);
      _0x4008cb[3] = _0x890825(_0x40cdbc, _0x4008cb[3]);
      _0x4008cb[4] = _0x890825(_0x3e7463, _0x4008cb[4]);
      _0x4008cb[5] = _0x890825(_0x4a1f8f, _0x4008cb[5]);
      _0x4008cb[6] = _0x890825(_0x5dcb81, _0x4008cb[6]);
      _0x4008cb[7] = _0x890825(_0x249503, _0x4008cb[7]);
    }
    return _0x4008cb;
  }
  function _0x487643(_0x3bf5de) {
    var _0x10bac9 = Array();
    var _0x3de22a = (1 << _0x133df5) - 1;
    for (var _0x104a7f = 0; _0x104a7f < _0x3bf5de.length * _0x133df5; _0x104a7f += _0x133df5) {
      _0x10bac9[_0x104a7f >> 5] |= (_0x3bf5de.charCodeAt(_0x104a7f / _0x133df5) & _0x3de22a) << 24 - _0x104a7f % 32;
    }
    return _0x10bac9;
  }
  function _0x41062a(_0x5f56df) {
    _0x5f56df = _0x5f56df.replace(/\r\n/g, "\n");
    var _0x3ff5c8 = "";
    for (var _0x22726e = 0; _0x22726e < _0x5f56df.length; _0x22726e++) {
      var _0x51f7d3 = _0x5f56df.charCodeAt(_0x22726e);
      if (_0x51f7d3 < 128) {
        _0x3ff5c8 += String.fromCharCode(_0x51f7d3);
      } else {
        if (_0x51f7d3 > 127 && _0x51f7d3 < 2048) {
          _0x3ff5c8 += String.fromCharCode(_0x51f7d3 >> 6 | 192);
          _0x3ff5c8 += String.fromCharCode(_0x51f7d3 & 63 | 128);
        } else {
          _0x3ff5c8 += String.fromCharCode(_0x51f7d3 >> 12 | 224);
          _0x3ff5c8 += String.fromCharCode(_0x51f7d3 >> 6 & 63 | 128);
          _0x3ff5c8 += String.fromCharCode(_0x51f7d3 & 63 | 128);
        }
      }
    }
    return _0x3ff5c8;
  }
  function _0x3f19c6(_0x4b9cef) {
    var _0x1d26b8 = _0x201a1f ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x146c57 = "";
    for (var _0x24a0f8 = 0; _0x24a0f8 < _0x4b9cef.length * 4; _0x24a0f8++) {
      _0x146c57 += _0x1d26b8.charAt(_0x4b9cef[_0x24a0f8 >> 2] >> (3 - _0x24a0f8 % 4) * 8 + 4 & 15) + _0x1d26b8.charAt(_0x4b9cef[_0x24a0f8 >> 2] >> (3 - _0x24a0f8 % 4) * 8 & 15);
    }
    return _0x146c57;
  }
  _0x4dcc7b = _0x41062a(_0x4dcc7b);
  return _0x3f19c6(_0x4713b1(_0x487643(_0x4dcc7b), _0x4dcc7b.length * _0x133df5));
}
function D_j_0x572efd(_0x55ec85) {
  function _0x2fb488(_0x3bfd9f, _0x10a514) {
    var _0x51329d = _0x3bfd9f << _0x10a514 | _0x3bfd9f >>> 32 - _0x10a514;
    return _0x51329d;
  }
  function _0x281cc3(_0x3d6772) {
    var _0x2b7fa5 = "";
    var _0xc56223;
    var _0x3c66fb;
    var _0x5cb488;
    for (_0xc56223 = 0; _0xc56223 <= 6; _0xc56223 += 2) {
      _0x3c66fb = _0x3d6772 >>> _0xc56223 * 4 + 4 & 15;
      _0x5cb488 = _0x3d6772 >>> _0xc56223 * 4 & 15;
      _0x2b7fa5 += _0x3c66fb.toString(16) + _0x5cb488.toString(16);
    }
    return _0x2b7fa5;
  }
  function _0x5f1791(_0x3cf1f4) {
    var _0x988a48 = "";
    var _0x19d73b;
    var _0x562d58;
    for (_0x19d73b = 7; _0x19d73b >= 0; _0x19d73b--) {
      _0x562d58 = _0x3cf1f4 >>> _0x19d73b * 4 & 15;
      _0x988a48 += _0x562d58.toString(16);
    }
    return _0x988a48;
  }
  function _0x56255a(_0x58b841) {
    _0x58b841 = _0x58b841.replace(/\r\n/g, "\n");
    var _0x37729b = "";
    for (var _0x5c230e = 0; _0x5c230e < _0x58b841.length; _0x5c230e++) {
      var _0xbb7625 = _0x58b841.charCodeAt(_0x5c230e);
      if (_0xbb7625 < 128) {
        _0x37729b += String.fromCharCode(_0xbb7625);
      } else {
        if (_0xbb7625 > 127 && _0xbb7625 < 2048) {
          _0x37729b += String.fromCharCode(_0xbb7625 >> 6 | 192);
          _0x37729b += String.fromCharCode(_0xbb7625 & 63 | 128);
        } else {
          _0x37729b += String.fromCharCode(_0xbb7625 >> 12 | 224);
          _0x37729b += String.fromCharCode(_0xbb7625 >> 6 & 63 | 128);
          _0x37729b += String.fromCharCode(_0xbb7625 & 63 | 128);
        }
      }
    }
    return _0x37729b;
  }
  var _0x1f94a8;
  var _0x24352c, _0x3d1042;
  var _0x222ce1 = new Array(80);
  var _0x3fbe36 = 1732584193;
  var _0x3dd81a = 4023233417;
  var _0x5e498c = 2562383102;
  var _0x4ffe04 = 271733878;
  var _0x2ac007 = 3285377520;
  var _0x132fb8, _0x411d2, _0x5c5c74, _0x16698c, _0xb4baa3;
  _0x55ec85 = _0x56255a(_0x55ec85);
  var _0x3ee6b6 = _0x55ec85.length;
  var _0x316807 = new Array();
  for (_0x24352c = 0; _0x24352c < _0x3ee6b6 - 3; _0x24352c += 4) {
    _0x3d1042 = _0x55ec85.charCodeAt(_0x24352c) << 24 | _0x55ec85.charCodeAt(_0x24352c + 1) << 16 | _0x55ec85.charCodeAt(_0x24352c + 2) << 8 | _0x55ec85.charCodeAt(_0x24352c + 3);
    _0x316807.push(_0x3d1042);
  }
  switch (_0x3ee6b6 % 4) {
    case 0:
      _0x24352c = 2147483648;
      break;
    case 1:
      _0x24352c = _0x55ec85.charCodeAt(_0x3ee6b6 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x24352c = _0x55ec85.charCodeAt(_0x3ee6b6 - 2) << 24 | _0x55ec85.charCodeAt(_0x3ee6b6 - 1) << 16 | 32768;
      break;
    case 3:
      _0x24352c = _0x55ec85.charCodeAt(_0x3ee6b6 - 3) << 24 | _0x55ec85.charCodeAt(_0x3ee6b6 - 2) << 16 | _0x55ec85.charCodeAt(_0x3ee6b6 - 1) << 8 | 128;
      break;
  }
  _0x316807.push(_0x24352c);
  while (_0x316807.length % 16 != 14) {
    _0x316807.push(0);
  }
  _0x316807.push(_0x3ee6b6 >>> 29);
  _0x316807.push(_0x3ee6b6 << 3 & 4294967295);
  for (_0x1f94a8 = 0; _0x1f94a8 < _0x316807.length; _0x1f94a8 += 16) {
    for (_0x24352c = 0; _0x24352c < 16; _0x24352c++) {
      _0x222ce1[_0x24352c] = _0x316807[_0x1f94a8 + _0x24352c];
    }
    for (_0x24352c = 16; _0x24352c <= 79; _0x24352c++) {
      _0x222ce1[_0x24352c] = _0x2fb488(_0x222ce1[_0x24352c - 3] ^ _0x222ce1[_0x24352c - 8] ^ _0x222ce1[_0x24352c - 14] ^ _0x222ce1[_0x24352c - 16], 1);
    }
    _0x132fb8 = _0x3fbe36;
    _0x411d2 = _0x3dd81a;
    _0x5c5c74 = _0x5e498c;
    _0x16698c = _0x4ffe04;
    _0xb4baa3 = _0x2ac007;
    for (_0x24352c = 0; _0x24352c <= 19; _0x24352c++) {
      _0x5c0242 = _0x2fb488(_0x132fb8, 5) + (_0x411d2 & _0x5c5c74 | ~_0x411d2 & _0x16698c) + _0xb4baa3 + _0x222ce1[_0x24352c] + 1518500249 & 4294967295;
      _0xb4baa3 = _0x16698c;
      _0x16698c = _0x5c5c74;
      _0x5c5c74 = _0x2fb488(_0x411d2, 30);
      _0x411d2 = _0x132fb8;
      _0x132fb8 = _0x5c0242;
    }
    for (_0x24352c = 20; _0x24352c <= 39; _0x24352c++) {
      _0x5c0242 = _0x2fb488(_0x132fb8, 5) + (_0x411d2 ^ _0x5c5c74 ^ _0x16698c) + _0xb4baa3 + _0x222ce1[_0x24352c] + 1859775393 & 4294967295;
      _0xb4baa3 = _0x16698c;
      _0x16698c = _0x5c5c74;
      _0x5c5c74 = _0x2fb488(_0x411d2, 30);
      _0x411d2 = _0x132fb8;
      _0x132fb8 = _0x5c0242;
    }
    for (_0x24352c = 40; _0x24352c <= 59; _0x24352c++) {
      _0x5c0242 = _0x2fb488(_0x132fb8, 5) + (_0x411d2 & _0x5c5c74 | _0x411d2 & _0x16698c | _0x5c5c74 & _0x16698c) + _0xb4baa3 + _0x222ce1[_0x24352c] + 2400959708 & 4294967295;
      _0xb4baa3 = _0x16698c;
      _0x16698c = _0x5c5c74;
      _0x5c5c74 = _0x2fb488(_0x411d2, 30);
      _0x411d2 = _0x132fb8;
      _0x132fb8 = _0x5c0242;
    }
    for (_0x24352c = 60; _0x24352c <= 79; _0x24352c++) {
      _0x5c0242 = _0x2fb488(_0x132fb8, 5) + (_0x411d2 ^ _0x5c5c74 ^ _0x16698c) + _0xb4baa3 + _0x222ce1[_0x24352c] + 3395469782 & 4294967295;
      _0xb4baa3 = _0x16698c;
      _0x16698c = _0x5c5c74;
      _0x5c5c74 = _0x2fb488(_0x411d2, 30);
      _0x411d2 = _0x132fb8;
      _0x132fb8 = _0x5c0242;
    }
    _0x3fbe36 = _0x3fbe36 + _0x132fb8 & 4294967295;
    _0x3dd81a = _0x3dd81a + _0x411d2 & 4294967295;
    _0x5e498c = _0x5e498c + _0x5c5c74 & 4294967295;
    _0x4ffe04 = _0x4ffe04 + _0x16698c & 4294967295;
    _0x2ac007 = _0x2ac007 + _0xb4baa3 & 4294967295;
  }
  var _0x5c0242 = _0x5f1791(_0x3fbe36) + _0x5f1791(_0x3dd81a) + _0x5f1791(_0x5e498c) + _0x5f1791(_0x4ffe04) + _0x5f1791(_0x2ac007);
  return _0x5c0242.toLowerCase();
}
function D_j_0x9069de() {
  var _0x44e868 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x289378) {
    var _0x5d28e9 = "";
    var _0x2d0efa, _0x2a6ae2, _0x5016f, _0x2e0ee5, _0x5422b0, _0x4f8cb0, _0xa229a2;
    var _0x53a144 = 0;
    _0x289378 = utf8Encode(_0x289378);
    while (_0x53a144 < _0x289378.length) {
      _0x2d0efa = _0x289378.charCodeAt(_0x53a144++);
      _0x2a6ae2 = _0x289378.charCodeAt(_0x53a144++);
      _0x5016f = _0x289378.charCodeAt(_0x53a144++);
      _0x2e0ee5 = _0x2d0efa >> 2;
      _0x5422b0 = (_0x2d0efa & 3) << 4 | _0x2a6ae2 >> 4;
      _0x4f8cb0 = (_0x2a6ae2 & 15) << 2 | _0x5016f >> 6;
      _0xa229a2 = _0x5016f & 63;
      if (isNaN(_0x2a6ae2)) {
        _0x4f8cb0 = _0xa229a2 = 64;
      } else {
        if (isNaN(_0x5016f)) {
          _0xa229a2 = 64;
        }
      }
      _0x5d28e9 = _0x5d28e9 + _0x44e868.charAt(_0x2e0ee5) + _0x44e868.charAt(_0x5422b0) + _0x44e868.charAt(_0x4f8cb0) + _0x44e868.charAt(_0xa229a2);
    }
    return _0x5d28e9;
  };
  this.decode = function (_0x315d33) {
    var _0x2b9f66 = "";
    var _0x42cc96, _0x1dc000, _0x32afc0;
    var _0x50a3d3, _0x47ef24, _0xaa03a, _0x3efe7a;
    var _0x216431 = 0;
    _0x315d33 = _0x315d33.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x216431 < _0x315d33.length) {
      _0x50a3d3 = _0x44e868.indexOf(_0x315d33.charAt(_0x216431++));
      _0x47ef24 = _0x44e868.indexOf(_0x315d33.charAt(_0x216431++));
      _0xaa03a = _0x44e868.indexOf(_0x315d33.charAt(_0x216431++));
      _0x3efe7a = _0x44e868.indexOf(_0x315d33.charAt(_0x216431++));
      _0x42cc96 = _0x50a3d3 << 2 | _0x47ef24 >> 4;
      _0x1dc000 = (_0x47ef24 & 15) << 4 | _0xaa03a >> 2;
      _0x32afc0 = (_0xaa03a & 3) << 6 | _0x3efe7a;
      _0x2b9f66 = _0x2b9f66 + String.fromCharCode(_0x42cc96);
      if (_0xaa03a !== 64) {
        _0x2b9f66 = _0x2b9f66 + String.fromCharCode(_0x1dc000);
      }
      if (_0x3efe7a !== 64) {
        _0x2b9f66 = _0x2b9f66 + String.fromCharCode(_0x32afc0);
      }
    }
    _0x2b9f66 = utf8Decode(_0x2b9f66);
    return _0x2b9f66;
  };
  utf8Encode = function (_0x2b24fb) {
    _0x2b24fb = _0x2b24fb.replace(/\r\n/g, "\n");
    var _0x4d206f = "";
    for (var _0x12a946 = 0; _0x12a946 < _0x2b24fb.length; _0x12a946++) {
      var _0xca4260 = _0x2b24fb.charCodeAt(_0x12a946);
      if (_0xca4260 < 128) {
        _0x4d206f += String.fromCharCode(_0xca4260);
      } else {
        if (_0xca4260 > 127 && _0xca4260 < 2048) {
          _0x4d206f += String.fromCharCode(_0xca4260 >> 6 | 192);
          _0x4d206f += String.fromCharCode(_0xca4260 & 63 | 128);
        } else {
          _0x4d206f += String.fromCharCode(_0xca4260 >> 12 | 224);
          _0x4d206f += String.fromCharCode(_0xca4260 >> 6 & 63 | 128);
          _0x4d206f += String.fromCharCode(_0xca4260 & 63 | 128);
        }
      }
    }
    return _0x4d206f;
  };
  utf8Decode = function (_0x3c6dbb) {
    var _0x34f85c = "";
    var _0x2553df = 0;
    var _0x5942bb = 0;
    var _0x4cc266 = 0;
    var _0x5c0340 = 0;
    while (_0x2553df < _0x3c6dbb.length) {
      _0x5942bb = _0x3c6dbb.charCodeAt(_0x2553df);
      if (_0x5942bb < 128) {
        _0x34f85c += String.fromCharCode(_0x5942bb);
        _0x2553df++;
      } else {
        if (_0x5942bb > 191 && _0x5942bb < 224) {
          _0x4cc266 = _0x3c6dbb.charCodeAt(_0x2553df + 1);
          _0x34f85c += String.fromCharCode((_0x5942bb & 31) << 6 | _0x4cc266 & 63);
          _0x2553df += 2;
        } else {
          _0x4cc266 = _0x3c6dbb.charCodeAt(_0x2553df + 1);
          _0x5c0340 = _0x3c6dbb.charCodeAt(_0x2553df + 2);
          _0x34f85c += String.fromCharCode((_0x5942bb & 15) << 12 | (_0x4cc266 & 63) << 6 | _0x5c0340 & 63);
          _0x2553df += 3;
        }
      }
    }
    return _0x34f85c;
  };
}
function D_j_0xd30860(_0x1401ba, _0x3b6c46) {
  class _0x2b0a28 {
    constructor(_0x2f3dd3) {
      this.env = _0x2f3dd3;
    }
    send(_0x4b67f9, _0x473b28 = "GET") {
      _0x4b67f9 = typeof _0x4b67f9 === "string" ? {
        url: _0x4b67f9
      } : _0x4b67f9;
      let _0x264072 = this.get;
      if (_0x473b28 === "POST") {
        _0x264072 = this.post;
      }
      return new Promise((_0x1a0d40, _0x141e82) => {
        _0x264072.call(this, _0x4b67f9, (_0x8c945b, _0x4e2007, _0x11c66e) => {
          if (_0x8c945b) {
            _0x141e82(_0x8c945b);
          } else {
            _0x1a0d40(_0x4e2007);
          }
        });
      });
    }
    get(_0x265bcc) {
      return this.send.call(this.env, _0x265bcc);
    }
    post(_0x1d20d0) {
      return this.send.call(this.env, _0x1d20d0, "POST");
    }
  }
  return new class {
    constructor(_0x45fe5d, _0x63b829) {
      this.name = _0x45fe5d;
      this.http = new _0x2b0a28(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x63b829);
      const _0x5d7e06 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x5d7e06);
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
    toObj(_0x1a1216, _0x4c5c97 = null) {
      try {
        return JSON.parse(_0x1a1216);
      } catch {
        return _0x4c5c97;
      }
    }
    toStr(_0x1c013c, _0x20c3e1 = null) {
      try {
        return JSON.stringify(_0x1c013c);
      } catch {
        return _0x20c3e1;
      }
    }
    getjson(_0x5d6973, _0x1718ea) {
      let _0x4788e8 = _0x1718ea;
      const _0x5c2af5 = this.getdata(_0x5d6973);
      if (_0x5c2af5) {
        try {
          _0x4788e8 = JSON.parse(this.getdata(_0x5d6973));
        } catch {}
      }
      return _0x4788e8;
    }
    setjson(_0x1a2e6e, _0x5e9768) {
      try {
        return this.setdata(JSON.stringify(_0x1a2e6e), _0x5e9768);
      } catch {
        return false;
      }
    }
    getScript(_0x28b13c) {
      return new Promise(_0x326b0d => {
        const _0x587e66 = {
          url: _0x28b13c
        };
        this.get(_0x587e66, (_0x5f037c, _0x724b9b, _0x401472) => _0x326b0d(_0x401472));
      });
    }
    runScript(_0x6a4495, _0x373874) {
      return new Promise(_0x3e2e42 => {
        let _0x24ba80 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x24ba80 = _0x24ba80 ? _0x24ba80.replace(/\n/g, "").trim() : _0x24ba80;
        let _0x123192 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x123192 = _0x123192 ? _0x123192 * 1 : 20;
        _0x123192 = _0x373874 && _0x373874.timeout ? _0x373874.timeout : _0x123192;
        const [_0x13aad0, _0x178fb8] = _0x24ba80.split("@");
        const _0x4a4750 = {
          script_text: _0x6a4495,
          mock_type: "cron",
          timeout: _0x123192
        };
        const _0x46900c = {
          "X-Key": _0x13aad0,
          Accept: "*/*"
        };
        const _0x3c187c = {
          url: "http: //" + _0x178fb8 + "/v1/scripting/evaluate",
          body: _0x4a4750,
          headers: _0x46900c
        };
        this.post(_0x3c187c, (_0x54f133, _0x1d011a, _0x3c7449) => _0x3e2e42(_0x3c7449));
      }).catch(_0x1fcdb1 => this.logErr(_0x1fcdb1));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x33bebc = this.path.resolve(this.dataFile);
        const _0xa057f6 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x15143e = this.fs.existsSync(_0x33bebc);
        const _0x4b8272 = !_0x15143e && this.fs.existsSync(_0xa057f6);
        if (_0x15143e || _0x4b8272) {
          const _0x4f8075 = _0x15143e ? _0x33bebc : _0xa057f6;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4f8075));
          } catch (_0x27a906) {
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
        const _0x1b03ff = this.path.resolve(this.dataFile);
        const _0xe1388a = this.path.resolve(process.cwd(), this.dataFile);
        const _0x1e3370 = this.fs.existsSync(_0x1b03ff);
        const _0x284388 = !_0x1e3370 && this.fs.existsSync(_0xe1388a);
        const _0x1f9507 = JSON.stringify(this.data);
        if (_0x1e3370) {
          this.fs.writeFileSync(_0x1b03ff, _0x1f9507);
        } else {
          if (_0x284388) {
            this.fs.writeFileSync(_0xe1388a, _0x1f9507);
          } else {
            this.fs.writeFileSync(_0x1b03ff, _0x1f9507);
          }
        }
      }
    }
    lodash_get(_0x7d59e2, _0x5218f2, _0x1a3fc7 = undefined) {
      const _0xba4ac5 = _0x5218f2.replace(/[(d+)]/g, ".$1").split(".");
      let _0x5ba21f = _0x7d59e2;
      for (const _0x35dccd of _0xba4ac5) {
        _0x5ba21f = Object(_0x5ba21f)[_0x35dccd];
        if (_0x5ba21f === undefined) {
          return _0x1a3fc7;
        }
      }
      return _0x5ba21f;
    }
    lodash_set(_0x2c3e4e, _0x1468bd, _0x4232e2) {
      if (Object(_0x2c3e4e) !== _0x2c3e4e) {
        return _0x2c3e4e;
      }
      if (!Array.isArray(_0x1468bd)) {
        _0x1468bd = _0x1468bd.toString().match(/[^.[]]+/g) || [];
      }
      _0x1468bd.slice(0, -1).reduce((_0x2c511e, _0x5d5b93, _0xc4ab8) => Object(_0x2c511e[_0x5d5b93]) === _0x2c511e[_0x5d5b93] ? _0x2c511e[_0x5d5b93] : _0x2c511e[_0x5d5b93] = Math.abs(_0x1468bd[_0xc4ab8 + 1]) >> 0 === +_0x1468bd[_0xc4ab8 + 1] ? [] : {}, _0x2c3e4e)[_0x1468bd[_0x1468bd.length - 1]] = _0x4232e2;
      return _0x2c3e4e;
    }
    getdata(_0x15b2eb) {
      let _0x14564e = this.getval(_0x15b2eb);
      if (/^@/.test(_0x15b2eb)) {
        const [, _0x50f2ce, _0x2f184e] = /^@(.*?).(.*?)$/.exec(_0x15b2eb);
        const _0x1e6d54 = _0x50f2ce ? this.getval(_0x50f2ce) : "";
        if (_0x1e6d54) {
          try {
            const _0x23d445 = JSON.parse(_0x1e6d54);
            _0x14564e = _0x23d445 ? this.lodash_get(_0x23d445, _0x2f184e, "") : _0x14564e;
          } catch (_0x4a5320) {
            _0x14564e = "";
          }
        }
      }
      return _0x14564e;
    }
    setdata(_0x222a0b, _0x219a57) {
      let _0x422825 = false;
      if (/^@/.test(_0x219a57)) {
        const [, _0x22b9cd, _0x4354f8] = /^@(.*?).(.*?)$/.exec(_0x219a57);
        const _0x1a5d9c = this.getval(_0x22b9cd);
        const _0x52a701 = _0x22b9cd ? _0x1a5d9c === "null" ? null : _0x1a5d9c || "{}" : "{}";
        try {
          const _0x42405c = JSON.parse(_0x52a701);
          this.lodash_set(_0x42405c, _0x4354f8, _0x222a0b);
          _0x422825 = this.setval(JSON.stringify(_0x42405c), _0x22b9cd);
        } catch (_0x5ddeed) {
          const _0x4b1a85 = {};
          this.lodash_set(_0x4b1a85, _0x4354f8, _0x222a0b);
          _0x422825 = this.setval(JSON.stringify(_0x4b1a85), _0x22b9cd);
        }
      } else {
        _0x422825 = this.setval(_0x222a0b, _0x219a57);
      }
      return _0x422825;
    }
    getval(_0x371328) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x371328);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x371328);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x371328];
          } else {
            return this.data && this.data[_0x371328] || null;
          }
        }
      }
    }
    setval(_0x577437, _0x1ccc4f) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x577437, _0x1ccc4f);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x577437, _0x1ccc4f);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x1ccc4f] = _0x577437;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x1ccc4f] || null;
          }
        }
      }
    }
    initGotEnv(_0xb38316) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0xb38316) {
        _0xb38316.headers = _0xb38316.headers ? _0xb38316.headers : {};
        if (undefined === _0xb38316.headers.Cookie && undefined === _0xb38316.cookieJar) {
          _0xb38316.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x4e40f0, _0x2d19d9 = () => {}) {
      if (_0x4e40f0.headers) {
        delete _0x4e40f0.headers["Content-Type"];
        delete _0x4e40f0.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x4e40f0.headers = _0x4e40f0.headers || {};
          const _0x20add7 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x4e40f0.headers, _0x20add7);
        }
        $httpClient.get(_0x4e40f0, (_0x3efa28, _0x28c48c, _0x3bfcc1) => {
          if (!_0x3efa28 && _0x28c48c) {
            _0x28c48c.body = _0x3bfcc1;
            _0x28c48c.statusCode = _0x28c48c.status;
          }
          _0x2d19d9(_0x3efa28, _0x28c48c, _0x3bfcc1);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x4e40f0.opts = _0x4e40f0.opts || {};
            const _0x4d9ba0 = {
              hints: false
            };
            Object.assign(_0x4e40f0.opts, _0x4d9ba0);
          }
          $task.fetch(_0x4e40f0).then(_0x359635 => {
            const {
              statusCode: _0x198803,
              statusCode,
              headers,
              body
            } = _0x359635;
            const _0x2cfec4 = {
              status: _0x198803,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2d19d9(null, _0x2cfec4, body);
          }, _0x4f229d => _0x2d19d9(_0x4f229d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4e40f0);
            this.got(_0x4e40f0).on("redirect", (_0x3ab3b2, _0x577d7e) => {
              try {
                if (_0x3ab3b2.headers["set-cookie"]) {
                  const _0x6f8951 = _0x3ab3b2.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x6f8951) {
                    this.ckjar.setCookieSync(_0x6f8951, null);
                  }
                  _0x577d7e.cookieJar = this.ckjar;
                }
              } catch (_0x503981) {
                this.logErr(_0x503981);
              }
            }).then(_0x2e1c1a => {
              const {
                statusCode: _0x1fb432,
                statusCode,
                headers,
                body
              } = _0x2e1c1a;
              const _0x2ac311 = {
                status: _0x1fb432,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2d19d9(null, _0x2ac311, body);
            }, _0x1e3c34 => {
              const {
                message: _0x2b6109,
                response: _0x205042
              } = _0x1e3c34;
              _0x2d19d9(_0x2b6109, _0x205042, _0x205042 && _0x205042.body);
            });
          }
        }
      }
    }
    post(_0x591db7, _0x5245eb = () => {}) {
      const _0x410441 = _0x591db7.method ? _0x591db7.method.toLocaleLowerCase() : "post";
      if (_0x591db7.body && _0x591db7.headers && !_0x591db7.headers["Content-Type"]) {
        _0x591db7.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x591db7.headers) {
        delete _0x591db7.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x591db7.headers = _0x591db7.headers || {};
          const _0x598dda = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x591db7.headers, _0x598dda);
        }
        $httpClient[_0x410441](_0x591db7, (_0x4343b1, _0x34e716, _0x4a4cc7) => {
          if (!_0x4343b1 && _0x34e716) {
            _0x34e716.body = _0x4a4cc7;
            _0x34e716.statusCode = _0x34e716.status;
          }
          _0x5245eb(_0x4343b1, _0x34e716, _0x4a4cc7);
        });
      } else {
        if (this.isQuanX()) {
          _0x591db7.method = _0x410441;
          if (this.isNeedRewrite) {
            _0x591db7.opts = _0x591db7.opts || {};
            const _0x1106a9 = {
              hints: false
            };
            Object.assign(_0x591db7.opts, _0x1106a9);
          }
          $task.fetch(_0x591db7).then(_0x56df63 => {
            const {
              statusCode: _0x4f9075,
              statusCode,
              headers,
              body
            } = _0x56df63;
            const _0x349662 = {
              status: _0x4f9075,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x5245eb(null, _0x349662, body);
          }, _0x318348 => _0x5245eb(_0x318348));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x591db7);
            const {
              url,
              ..._0x5d2530
            } = _0x591db7;
            this.got[_0x410441](url, _0x5d2530).then(_0x3b90ca => {
              const {
                statusCode: _0x13dbf7,
                statusCode,
                headers,
                body
              } = _0x3b90ca;
              const _0x18481f = {
                status: _0x13dbf7,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x5245eb(null, _0x18481f, body);
            }, _0x1679f3 => {
              const {
                message: _0x4a5ea5,
                response: _0xae5458
              } = _0x1679f3;
              _0x5245eb(_0x4a5ea5, _0xae5458, _0xae5458 && _0xae5458.body);
            });
          }
        }
      }
    }
    put(_0xf89250, _0x33a35d = () => {}) {
      const _0x172a5a = _0xf89250.method ? _0xf89250.method.toLocaleLowerCase() : "put";
      if (_0xf89250.body && _0xf89250.headers && !_0xf89250.headers["Content-Type"]) {
        _0xf89250.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0xf89250.headers) {
        delete _0xf89250.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xf89250.headers = _0xf89250.headers || {};
          const _0x4b83de = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0xf89250.headers, _0x4b83de);
        }
        $httpClient[_0x172a5a](_0xf89250, (_0x35b1a9, _0x46e467, _0x2f1f2d) => {
          if (!_0x35b1a9 && _0x46e467) {
            _0x46e467.body = _0x2f1f2d;
            _0x46e467.statusCode = _0x46e467.status;
          }
          _0x33a35d(_0x35b1a9, _0x46e467, _0x2f1f2d);
        });
      } else {
        if (this.isQuanX()) {
          _0xf89250.method = _0x172a5a;
          if (this.isNeedRewrite) {
            _0xf89250.opts = _0xf89250.opts || {};
            const _0x1caaee = {
              hints: false
            };
            Object.assign(_0xf89250.opts, _0x1caaee);
          }
          $task.fetch(_0xf89250).then(_0x158545 => {
            const {
              statusCode: _0x31235f,
              statusCode,
              headers,
              body
            } = _0x158545;
            const _0x1d3b47 = {
              status: _0x31235f,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x33a35d(null, _0x1d3b47, body);
          }, _0x3ee2e2 => _0x33a35d(_0x3ee2e2));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xf89250);
            const {
              url,
              ..._0x366375
            } = _0xf89250;
            this.got[_0x172a5a](url, _0x366375).then(_0x53a746 => {
              const {
                statusCode: _0x2b4b34,
                statusCode,
                headers,
                body
              } = _0x53a746;
              const _0x2e827e = {
                status: _0x2b4b34,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x33a35d(null, _0x2e827e, body);
            }, _0x537584 => {
              const {
                message: _0x35f727,
                response: _0x5dd325
              } = _0x537584;
              _0x33a35d(_0x35f727, _0x5dd325, _0x5dd325 && _0x5dd325.body);
            });
          }
        }
      }
    }
    time(_0x193c0a, _0x1eafd2 = null) {
      const _0x294e75 = _0x1eafd2 ? new Date(_0x1eafd2) : new Date();
      const _0x48512b = {
        "M+": _0x294e75.getMonth() + 1,
        "d+": _0x294e75.getDate(),
        "H+": _0x294e75.getHours(),
        "m+": _0x294e75.getMinutes(),
        "s+": _0x294e75.getSeconds(),
        "q+": Math.floor((_0x294e75.getMonth() + 3) / 3),
        S: _0x294e75.getMilliseconds()
      };
      if (/(y+)/.test(_0x193c0a)) {
        _0x193c0a = _0x193c0a.replace(RegExp.$1, (_0x294e75.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x59fb7c in _0x48512b) if (new RegExp("(" + _0x59fb7c + ")").test(_0x193c0a)) {
        _0x193c0a = _0x193c0a.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x48512b[_0x59fb7c] : ("00" + _0x48512b[_0x59fb7c]).substr(("" + _0x48512b[_0x59fb7c]).length));
      }
      return _0x193c0a;
    }
    msg(_0x46e6e9 = _0x1401ba, _0x44f4ee = "", _0x447ff4 = "", _0x25816a) {
      const _0x49ec63 = _0x2eec1c => {
        if (!_0x2eec1c) {
          return _0x2eec1c;
        }
        if (typeof _0x2eec1c === "string") {
          if (this.isLoon()) {
            return _0x2eec1c;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x2eec1c
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x2eec1c
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x2eec1c === "object") {
            if (this.isLoon()) {
              let _0x27b1b4 = _0x2eec1c.openUrl || _0x2eec1c.url || _0x2eec1c["open-url"];
              let _0x20013a = _0x2eec1c.mediaUrl || _0x2eec1c["media-url"];
              const _0x5cd1ee = {
                openUrl: _0x27b1b4,
                mediaUrl: _0x20013a
              };
              return _0x5cd1ee;
            } else {
              if (this.isQuanX()) {
                let _0x4d8049 = _0x2eec1c["open-url"] || _0x2eec1c.url || _0x2eec1c.openUrl;
                let _0x40fdfe = _0x2eec1c["media-url"] || _0x2eec1c.mediaUrl;
                const _0x28cd1e = {
                  "open-url": _0x4d8049,
                  "media-url": _0x40fdfe
                };
                return _0x28cd1e;
              } else {
                if (this.isSurge()) {
                  let _0x237a4d = _0x2eec1c.url || _0x2eec1c.openUrl || _0x2eec1c["open-url"];
                  const _0xf9cd8a = {
                    url: _0x237a4d
                  };
                  return _0xf9cd8a;
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
          $notification.post(_0x46e6e9, _0x44f4ee, _0x447ff4, _0x49ec63(_0x25816a));
        } else {
          if (this.isQuanX()) {
            $notify(_0x46e6e9, _0x44f4ee, _0x447ff4, _0x49ec63(_0x25816a));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x3c3037 = ["", "==============📣系统通知📣=============="];
        _0x3c3037.push(_0x46e6e9);
        _0x44f4ee ? _0x3c3037.push(_0x44f4ee) : "";
        _0x447ff4 ? _0x3c3037.push(_0x447ff4) : "";
        console.log(_0x3c3037.join("\n"));
        this.logs = this.logs.concat(_0x3c3037);
      }
    }
    log(..._0xa4281f) {
      if (_0xa4281f.length > 0) {
        this.logs = [...this.logs, ..._0xa4281f];
      }
      console.log(_0xa4281f.join(this.logSeparator));
    }
    logErr(_0x2a7e55, _0x44f882) {
      const _0x2f000b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x2f000b) {
        this.log("", "❗️" + this.name + ", 错误!", _0x2a7e55);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x2a7e55.stack);
      }
    }
    wait(_0x14d837) {
      return new Promise(_0x519dc0 => setTimeout(_0x519dc0, _0x14d837));
    }
    done(_0x428c46 = {}) {
      const _0x41b5a0 = new Date().getTime();
      const _0x5d5c22 = (_0x41b5a0 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x5d5c22 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x428c46);
      }
    }
  }(_0x1401ba, _0x3b6c46);
}