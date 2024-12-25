//Wed Dec 25 2024 02:32:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x3e7337 = new _0x3e496c("中青看点");
const _0x37f56e = "V1.2.5";
const _0x52778f = "zqkdapp";
let _0x19a63d = _0x3e7337.getjson("zqkdapp", []);
const _0x3edd6e = _0x3e7337.isNode() ? require("./sendNotify") : "";
const _0x3ab8fe = _0x3e7337.getdata("zq_platfrom_type") || "ios";
let _0xc62aab = _0x3e7337.getdata("tguserid") || 1000000;
let _0x11b031 = _0x3e7337.getdata("zqkdactivecode") || "";
let _0x4f512c = _0x3e7337.getval("zqkduserck") || 1;
let _0x534954 = _0x3e7337.getval("zqkdtxamount") || 3;
let _0x394311 = _0x3e7337.getval("apiHost") || "http://106.15.104.124:8080";
let _0x2efc66 = _0x3e7337.getval("tz") || "1";
var _0x37eb73 = "";
var _0x402825 = "";
const _0x11b51a = [20079, 20080, 20093, 20106, 20144];
const _0x47b77f = [20006, 20007, 20008, 20026, 20030];
var _0x3c0c9d = new Set();
var _0x620f7c = new Set();
var _0x5df2dc = new Set();
let _0x29a9cc = "";
let _0x3650e3 = 30;
let _0x3b9b0b = "";
let _0x476634 = "";
let _0x228fd6 = "";
let _0x3bdbf8 = "";
let _0x477391 = "";
let _0xd5a882 = "";
let _0x48aa00 = "";
let _0x524705 = "";
let _0xea34a5 = "";
let _0x139a34 = "";
let _0x42d618 = "";
let _0x268892 = "";
let _0x9e8965 = "";
let _0x247519 = "";
let _0x7752c6 = "";
let _0x30ce1a = "";
let _0x25f76f = "";
let _0x1524ec = "";
let _0xb2041a = 1;
let _0x4e19de = 1;
let _0x28522c = 1;
let _0x502040 = 1;
let _0x46432f = "";
const _0x25d6ad = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1,en-CN;Q=0.9",
  Connection: "keep-alive",
  "Content-Type": "application/x-www-form-urlencoded",
  Host: "kandian.wkandian.com",
  "User-Agent": "KDApp/2.6.2 (iPad; iOS 15.0.2; Scale/3.00)"
};
const _0x2aae8d = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1",
  Connection: "keep-alive",
  "Content-Type": "application/x-www-form-urlencoded",
  Host: "kandian.wkandian.com",
  "User-Agent": "KDApp/2.6.2 (iPad; iOS 15.0.2; Scale/2.00)"
};
const _0xf8f187 = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9",
  Connection: "keep-alive",
  Host: "kandian.wkandian.com",
  "User-Agent": "KDApp/2.6.2 (iPhone; iOS 15.2.1; Scale/3.00)"
};
const _0xfca7f2 = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
  Connection: "keep-alive",
  Host: "script.baertt.com",
  Referer: "https://focus.youth.cn/",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001226) NetType/WIFI Language/zh_CN"
};
if (_0x3e7337.isNode()) {
  _0x19a63d = JSON.parse(process.env.ZQKDAPP);
  _0xc62aab = process.env.TGUSERID;
  _0x11b031 = process.env.ZQKDACTIVECODE;
  _0x534954 = process.env.ZQKDTXAMOUNT;
  if (process.env.APIHOST) {
    _0x394311 = process.env.APIHOST;
  }
  if (_0x534954 == 0) {
    _0x3650e3 = 0.3;
  } else {
    if (_0x534954 == 1) {
      _0x3650e3 = 1;
    } else {
      if (_0x534954 == 2) {
        _0x3650e3 = 10;
      } else {
        if (_0x534954 == 3) {
          _0x3650e3 = 30;
        } else {
          _0x3650e3 = 30;
        }
      }
    }
  }
  _0x37eb73 = new Date(new Date().getTime()).getHours();
  _0x402825 = new Date(new Date().getTime()).getMinutes();
  _0x3e7337.log("当前环境: Node, 当前时间：" + _0x37eb73 + "点");
} else {
  if (_0x534954 == 0) {
    _0x3650e3 = 0.3;
  } else {
    if (_0x534954 == 1) {
      _0x3650e3 = 1;
    } else {
      if (_0x534954 == 2) {
        _0x3650e3 = 10;
      } else {
        if (_0x534954 == 3) {
          _0x3650e3 = 30;
        } else {
          _0x3650e3 = 30;
        }
      }
    }
  }
  _0x37eb73 = new Date().getHours();
  _0x402825 = new Date().getMinutes();
  _0x3e7337.log("当前环境: 手机代理, 当前时间：" + _0x37eb73 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x3da69e();
  } else {
    if (!_0x11b031 || !_0xc62aab || _0xc62aab == 1 || _0x11b031 == 0 || _0x11b031.length != 32) {
      _0x3e7337.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报群: https://t.me/china20211029");
      return;
    }
    await _0x5789d8(_0x52778f, _0xc62aab, _0x11b031);
    _0x3e7337.log("📢 " + _0x30ce1a);
    _0x3e7337.log("🔔 当前脚本版本号: " + _0x37f56e + "，最新版本号: " + _0x247519);
    if (_0x37f56e < _0x247519) {
      _0x3e7337.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      _0x2f4207("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (_0x9e8965 != true) {
      _0x3e7337.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (_0x46432f != true) {
      _0x3e7337.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (_0x268892 != true) {
      _0x3e7337.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报群: https://t.me/china20211029");
      return;
    }
    if (_0x1524ec == true) {
      _0x3e7337.log("🔔 此脚本采用付费模式。🔒");
    } else {
      _0x3e7337.log("🔔 此脚本采用免费模式。🔓");
    }
    if (_0x25f76f != true) {
      _0x3e7337.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
      return;
    } else {
      if (_0x1524ec == true) {
        _0x3e7337.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (_0x7752c6 != true) {
      _0x3e7337.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (_0xb2041a > 1) {
      _0x3e7337.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，你可以一次运行" + 4 * _0xb2041a + "个账号");
    }
    if (_0x4e19de > 1) {
      _0x3e7337.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，你一共可以运行" + _0x28522c + "次, 已经运行了" + _0x502040 + "次");
    }
    if (_0x19a63d.length > 4 * _0xb2041a) {
      _0x3e7337.log("⚠️ 你是不是搞错了，你有这么多账号？一次最多运行" + 4 * _0xb2041a + "个账号哦");
      return;
    }
    _0x3e7337.log("一共有" + _0x19a63d.length + "个账号");
    for (let _0x518281 = 0; _0x518281 < _0x19a63d.length; _0x518281++) {
      _0x3e7337.log("开始执行第" + (_0x518281 + 1) + "个账号");
      _0x228fd6 = _0x19a63d[_0x518281];
      let _0x249e01 = _0x228fd6.wz_body;
      if (_0x249e01.indexOf("zqkd_param") != -1 && _0x3ab8fe == "android") {
        _0xea34a5 = _0x249e01.substring(12, 20);
        _0x139a34 = _0x249e01.substring(0, 23);
      } else {
        if (_0x249e01.indexOf("zqkd_param") != -1 && _0x3ab8fe == "ios") {
          _0xea34a5 = _0x249e01.substring(11, 19);
          _0x139a34 = _0x249e01.substring(0, 22);
        }
      }
      await _0x53a5c9(_0x249e01, _0x3ab8fe);
      await _0x2eaf2f();
      await _0x54f7cb(_0x48aa00);
      await _0x43db17();
      await _0x36bce2(_0x48aa00);
      for (let _0x25e719 = 0; _0x25e719 < 1; _0x25e719++) {
        let _0x4a5321 = _0x4dc0c9(0, 4);
        await _0x3b1529(_0x47b77f[_0x4a5321]);
        await _0x498365(_0x48aa00);
        await _0x46948b(_0x11b51a[_0x4a5321]);
        await _0x498365(_0x48aa00);
      }
      _0x3e7337.log("本次阅读了" + _0x3c0c9d.size + "篇文章");
      _0x3e7337.log("本次观看了" + _0x620f7c.size + "个视频");
      if (_0x37eb73 >= 10 && _0x37eb73 <= 20) {
        await _0x5936bc();
      }
      if (_0x37eb73 >= 16 && _0x37eb73 <= 20) {
        await _0xdfdd4a();
      }
      if (!_0x19a63d[_0x518281].share_article_id) {
        const _0x386c17 = _0x4dc0c9(0, _0x3c0c9d.size - 1);
        let _0xb4440b = "41629759";
        if (_0x3c0c9d.size > 0) {
          _0xb4440b = Array.from(_0x3c0c9d)[_0x386c17];
        }
        _0x19a63d[_0x518281].share_article_id = _0xb4440b;
        _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
      } else {
        const _0x289af7 = _0x4dc0c9(0, _0x3c0c9d.size - 1);
        let _0x47f958 = "";
        if (_0x3c0c9d.size > 0) {
          _0x47f958 = Array.from(_0x3c0c9d)[_0x289af7];
        } else {
          _0x47f958 = "41629759";
        }
        if (_0x19a63d[_0x518281].share_article_id != _0x47f958) {
          _0x19a63d[_0x518281].share_article_id = _0x47f958;
          _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
        }
      }
      if (_0x228fd6.shareOnOff == 1 && _0x3c0c9d.size > 0 && (_0x37eb73 == 8 || _0x37eb73 == 12)) {
        let _0x21272d = _0x4dc0c9(0, _0x5df2dc.size - 1);
        let _0x538ece = Array.from(_0x5df2dc)[_0x21272d];
        await _0x339c2a(_0x14d4b6(_0x538ece));
        _0x5df2dc.clear();
        _0x620f7c.clear();
      }
      await _0x27e997();
      if (_0x534954 == -1) {
        _0x3e7337.log("你已关闭了自动提现功能");
      }
      if (_0x534954 != -1 && _0x29a9cc >= _0x3650e3) {
        await _0x3ecc25(_0x3650e3);
        await _0x274a7d();
      }
      if (!_0x19a63d[_0x518281].shareOnOff) {
        _0x19a63d[_0x518281].shareOnOff = 1;
        _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
      }
      if (!_0x19a63d[_0x518281].notify) {
        _0x19a63d[_0x518281].notify = 1;
        _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
      }
      if (_0x19a63d.length > 1 && _0x518281 < _0x19a63d.length) {
        _0x42d618 += "\n===========分割线============\n";
      }
      if (_0x518281 == _0x19a63d.length - 1 && _0x19a63d[_0x518281].notify == 1) {
        _0x2f4207(_0x42d618);
      }
      await _0x2883c4(_0x52778f, _0xc62aab);
    }
  }
})().catch(_0x69d55d => _0x3e7337.logErr(_0x69d55d)).finally(() => _0x3e7337.done());
async function _0x3da69e() {
  if ($request.url.match(/\/v5\/article\/info/)) {
    const _0x58c828 = $request.url;
    const _0x15a222 = _0x58c828.split("?")[1];
    let _0x1716ab = _0x4f512c - 1;
    if (_0x19a63d[_0x1716ab]) {
      _0x19a63d[_0x1716ab].wz_body = _0x15a222;
    } else {
      const _0x46ec6e = {
        wz_body: _0x15a222
      };
      _0x19a63d[_0x1716ab] = _0x46ec6e;
    }
    _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
    _0x3e7337.msg(_0x3e7337.name, "中青看点账号" + (_0x1716ab + 1) + "文章请求数据获取成功！🎉");
  }
  if ($request.url.match(/\/Nameless\/getTaskBrowse/)) {
    const _0x46bcb5 = JSON.stringify($request.headers);
    const _0xbb72f = $request.url;
    let _0x2c7f15 = _0x4f512c - 1;
    if (_0x19a63d[_0x2c7f15]) {
      _0x19a63d[_0x2c7f15].kkz_headers = _0x46bcb5;
      _0x19a63d[_0x2c7f15].kkz_url = _0xbb72f;
    } else {
      const _0x32d1bc = {
        kkz_headers: _0x46bcb5,
        kkz_url: _0xbb72f
      };
      _0x19a63d[_0x2c7f15] = _0x32d1bc;
    }
    _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
    _0x3e7337.msg(_0x3e7337.name, "中青看点账号" + (_0x2c7f15 + 1) + "看看赚请求数据获取成功！🎉");
  }
  if ($request.url.match(/\/NewTaskIos\/getTaskList/)) {
    const _0x4f4103 = $request.url.split("?")[1];
    let _0x320cdd = _0x4f512c - 1;
    if (_0x19a63d[_0x320cdd]) {
      _0x19a63d[_0x320cdd].tasks_url = _0x4f4103;
    } else {
      const _0x41ab64 = {
        tasks_url: _0x4f4103
      };
      _0x19a63d[_0x320cdd] = _0x41ab64;
    }
    _0x3e7337.setdata(JSON.stringify(_0x19a63d, null, 2), "zqkdapp");
    _0x3e7337.msg(_0x3e7337.name, "中青看点账号" + (_0x320cdd + 1) + "任务请求数据获取成功！🎉");
  }
}
async function _0x3b1529(_0x1452af) {
  const _0x57156d = Math.round(new Date().getTime() / 1000).toString();
  let _0x269d5e = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x3200a3 = _0x269d5e + ("&catid=" + _0x1452af + "&op=0&behot_time=");
  _0x3200a3 = _0x3200a3.replace(/&request_time=\d{10}/, "&request_time=" + _0x57156d);
  _0x3200a3 = _0x3200a3.replace(/&time=\d{10}/, "&time=" + _0x57156d);
  md5ClearStr = _0x3200a3.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = _0x1d05d9(md5Str);
  _0x3200a3 += "&sign=" + md5_sign;
  await _0x4795da(_0x3200a3, _0x3ab8fe);
}
async function _0x46948b(_0x10814d) {
  const _0x6c9638 = Math.round(new Date().getTime() / 1000).toString();
  let _0x368abe = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x304d8a = _0x368abe + ("&catid=1453&number=10&op=0&&video_catid=" + _0x10814d);
  _0x304d8a = _0x304d8a.replace(/&request_time=\d{10}/, "&request_time=" + _0x6c9638);
  _0x304d8a = _0x304d8a.replace(/&time=\d{10}/, "&time=" + _0x6c9638);
  md5ClearStr = _0x304d8a.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = _0x1d05d9(md5Str);
  _0x304d8a += "&sign=" + md5_sign;
  await _0x4795da(_0x304d8a, _0x3ab8fe);
}
async function _0x2d3dee(_0x1bd81b, _0x12613b) {
  let _0x951d30 = Math.round(new Date().getTime() / 1000).toString();
  let _0x2ddb3b = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x47d960 = _0x2ddb3b + ("&id=" + _0x1bd81b + "&catid=" + _0x12613b + "&is_push=0");
  _0x47d960 = _0x47d960.replace(/&request_time=\d{10}/, "&request_time=" + _0x951d30);
  _0x47d960 = _0x47d960.replace(/&time=\d{10}/, "&time=" + _0x951d30);
  md5ClearStr = _0x47d960.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = _0x1d05d9(md5Str);
  _0x47d960 += "&sign=" + md5_sign;
  await _0x4795da(_0x47d960, _0x3ab8fe);
}
async function _0x2602f7(_0x5475bb, _0xa60005) {
  let _0x2fefe2 = Math.round(new Date().getTime() / 1000).toString();
  let _0x387e16 = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x4e5ab8 = _0x387e16 + ("&id=" + _0x5475bb + "&catid=" + _0xa60005 + "&is_push=0&isFeed=0");
  _0x4e5ab8 = _0x4e5ab8.replace(/&request_time=\d{10}/, "&request_time=" + _0x2fefe2);
  _0x4e5ab8 = _0x4e5ab8.replace(/&time=\d{10}/, "&time=" + _0x2fefe2);
  md5ClearStr = _0x4e5ab8.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = _0x1d05d9(md5Str);
  _0x4e5ab8 += "&sign=" + md5_sign;
  await _0x4795da(_0x4e5ab8, _0x3ab8fe);
}
async function _0x1a0718(_0x1f0fc0) {
  let _0x4c0735 = Math.round(new Date().getTime() / 1000).toString();
  let _0x7eee17 = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x4d9e0e = _0x7eee17 + ("&second=" + _0x1f0fc0 + "s");
  _0x4d9e0e = _0x4d9e0e.replace(/&request_time=\d{10}/, "&request_time=" + _0x4c0735);
  _0x4d9e0e = _0x4d9e0e.replace(/&time=\d{10}/, "&time=" + _0x4c0735);
  await _0x4795da(_0x4d9e0e, _0x3ab8fe);
}
async function _0x515251(_0x452f16) {
  let _0x1c111c = Math.round(new Date().getTime() / 1000).toString();
  let _0x44564f = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x173123 = _0x44564f + ("&task_id=" + _0x452f16);
  _0x173123 = _0x173123.replace(/&request_time=\d{10}/, "&request_time=" + _0x1c111c);
  _0x173123 = _0x173123.replace(/&time=\d{10}/, "&time=" + _0x1c111c);
  await _0x4795da(_0x173123, _0x3ab8fe);
}
async function _0x151fd9(_0x3fdaef) {
  let _0x27cd82 = Math.round(new Date().getTime() / 1000).toString();
  let _0x549325 = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x50f795 = _0x549325 + ("&id=browse_read_article_" + _0x3fdaef);
  _0x50f795 = _0x50f795.replace(/&request_time=\d{10}/, "&request_time=" + _0x27cd82);
  _0x50f795 = _0x50f795.replace(/&time=\d{10}/, "&time=" + _0x27cd82);
  await _0x4795da(_0x50f795, _0x3ab8fe);
}
async function _0x2eaf2f() {
  let _0x50b9b3 = Math.round(new Date().getTime() / 1000).toString();
  let _0x565a7b = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x1dca57 = _0x565a7b;
  _0x1dca57 = _0x1dca57.replace(/&request_time=\d{10}/, "&request_time=" + _0x50b9b3);
  _0x1dca57 = _0x1dca57.replace(/&time=\d{10}/, "&time=" + _0x50b9b3);
  md5ClearStr = _0x1dca57.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = _0x1d05d9(md5Str);
  _0x1dca57 += "&sign=" + md5_sign;
  await _0x4795da(_0x1dca57, _0x3ab8fe);
}
async function _0xc8c41c() {
  let _0x135404 = _0x228fd6.share_article_id;
  let _0x58a227 = Math.round(new Date().getTime() / 1000).toString();
  let _0x48c496 = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x1d815 = _0x48c496 + ("&article_id=" + _0x135404);
  _0x1d815 = _0x1d815.replace(/&request_time=\d{10}/, "&request_time=" + _0x58a227);
  _0x1d815 = _0x1d815.replace(/&time=\d{10}/, "&time=" + _0x58a227);
  md5ClearStr = _0x1d815.replace(/&/g, "");
  md5ClearStr += "jdvylqchJZrfw0o2DgAbsmCGUapF1YChc";
  md5Str = decodeURIComponent(md5ClearStr.replace(/\+/g, "%20"));
  md5_sign = _0x1d05d9(md5Str);
  _0x1d815 += "&sign=" + md5_sign;
  await _0x4795da(_0x1d815, _0x3ab8fe);
}
async function _0x43db17() {
  let _0xb7ca2a = Math.round(new Date().getTime() / 1000).toString();
  await _0x34566a(_0x228fd6.tasks_url, _0x3ab8fe);
  let _0x4a081f = _0xd5a882.replace(/\"/g, "");
  const _0x37cea0 = _0x26a842(86);
  _0x4a081f = _0x4a081f.replace(/.{86}&ts=.\d{10}/, _0x37cea0 + "&ts=" + _0xb7ca2a);
  await _0x4795da(_0x4a081f, _0x3ab8fe);
}
async function _0x16796f(_0x26a3b4) {
  let _0x551e94 = Math.round(new Date().getTime() / 1000).toString();
  let _0x2eebd9 = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x30aee5 = _0x2eebd9 + ("&action=task_reward_action&param=" + _0x26a3b4);
  _0x30aee5 = _0x30aee5.replace(/&request_time=\d{10}/, "&request_time=" + _0x551e94);
  _0x30aee5 = _0x30aee5.replace(/&time=\d{10}/, "&time=" + _0x551e94);
  await _0x4795da(_0x30aee5, _0x3ab8fe);
}
async function _0x3ecc25(_0x25e649) {
  let _0x50259d = Math.round(new Date().getTime() / 1000).toString();
  let _0x4de3fd = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x15ff54 = _0x4de3fd + ("&type=2&money=" + _0x25e649);
  _0x15ff54 = _0x15ff54.replace(/&request_time=\d{10}/, "&request_time=" + _0x50259d);
  _0x15ff54 = _0x15ff54.replace(/&time=\d{10}/, "&time=" + _0x50259d);
  await _0x4795da(_0x15ff54, _0x3ab8fe);
}
async function _0xc626c8(_0x3b3e96) {
  let _0x23da3e = Math.round(new Date().getTime() / 1000).toString();
  let _0xa1a736 = _0x2f59ea(_0x32d01c(_0x477391));
  let _0x50f477 = _0xa1a736 + ("&action=beread_extra_reward_" + _0x3b3e96);
  _0x50f477 = _0x50f477.replace(/&request_time=\d{10}/, "&request_time=" + _0x23da3e);
  _0x50f477 = _0x50f477.replace(/&time=\d{10}/, "&time=" + _0x23da3e);
  await _0x4795da(_0x50f477, _0x3ab8fe);
}
function _0x54f7cb(_0x4f2b40) {
  return new Promise((_0x15a245, _0x24da7f) => {
    const _0x296e3a = "https://kandian.wkandian.com/v3/user/userinfo.json?" + _0x4f2b40;
    const _0x1cf88a = {
      url: _0x296e3a,
      headers: _0x2aae8d
    };
    _0x3e7337.get(_0x1cf88a, async (_0x59fb6e, _0x3442f7, _0x558c9d) => {
      try {
        await _0x5204e5("zqkd", _0x558c9d);
        let _0x233826 = JSON.parse(_0x524705);
        if (typeof _0x233826 == "string") {
          _0x233826 = JSON.parse(_0x233826);
        }
        if (_0x233826.success == true) {
          _0x3e7337.log("【用户名】：  " + _0x233826.items.nickname);
          _0x3e7337.log("【总青豆】：  " + _0x233826.items.score);
          _0x3e7337.log("【今天青豆】：  " + _0x233826.items.today_score);
          _0x3e7337.log("【当前余额】：  " + _0x233826.items.money + "元");
          _0x42d618 += "【用户名】: " + _0x233826.items.nickname + "\n";
          _0x42d618 += "【总青豆】: " + _0x233826.items.score + "\n";
          _0x42d618 += "【今天青豆】: " + _0x233826.items.today_score + "\n";
          _0x42d618 += "【余额】: " + _0x233826.items.money + "元\n";
          _0x3bdbf8 = _0x233826.items.token;
          _0x29a9cc = _0x233826.items.money;
        }
      } catch (_0xb51818) {
        _0x3e7337.log(_0xb51818);
      }
      _0x15a245();
    });
  });
}
function _0x5ac709(_0x5a5e0d = 0) {
  return new Promise(_0x558b43 => {
    const _0x384c2b = {
      url: "https://kandian.wkandian.com/V17/NewTaskIos/sign.json",
      headers: _0x2aae8d,
      body: _0x48aa00
    };
    _0x3e7337.post(_0x384c2b, async (_0x16f8cb, _0x3d5e6b, _0x2dc9eb) => {
      try {
        await _0x5204e5("zqkd", _0x2dc9eb);
        let _0x250a10 = JSON.parse(_0x524705);
        if (typeof _0x250a10 == "string") {
          _0x250a10 = JSON.parse(_0x250a10);
        }
        if (_0x250a10.success == true) {
          _0x3e7337.log("恭喜你签到成功，获取了" + _0x250a10.items.score + "青豆  🎉");
          _0x42d618 += "【签到任务】: 获取了" + _0x250a10.items.score + "青豆\n";
        }
      } catch (_0x58799c) {} finally {
        _0x558b43();
      }
    }, _0x5a5e0d);
  });
}
function _0x36bce2(_0x5da5be) {
  return new Promise((_0x343d68, _0x2e530f) => {
    const _0x80fc3e = "https://kandian.wkandian.com/V17/NewTaskIos/getTaskList.json?" + _0x5da5be;
    const _0x17d37f = {
      url: _0x80fc3e,
      headers: _0x2aae8d
    };
    _0x3e7337.get(_0x17d37f, async (_0x38c9c2, _0x410413, _0x2658de) => {
      try {
        await _0x5204e5("zqkd", _0x2658de);
        let _0x4a999c = JSON.parse(_0x524705);
        _0x4a999c = _0x4a999c.replace(/\"param\".+}]}\",/, "");
        _0x4a999c = _0x4a999c.replace(/\"info_new\".+\"banner\"/, "\"banner\"");
        if (typeof _0x4a999c == "string") {
          _0x4a999c = JSON.parse(_0x4a999c);
        }
        if (_0x4a999c.success == true) {
          const _0x3aba17 = _0x4a999c.items.daily;
          for (let _0x7650b9 = 0; _0x7650b9 < _0x3aba17.length; _0x7650b9++) {
            const _0x5bf416 = _0x3aba17[_0x7650b9];
            if (_0x5bf416.status == 0) {
              _0x3e7337.log("【" + _0x5bf416.title + "】：未完成");
            } else {
              if (_0x5bf416.status == 2) {
                _0x3e7337.log("【" + _0x5bf416.title + "】：已完成");
              } else {
                _0x3e7337.log("【" + _0x5bf416.title + "】：正在进行中");
              }
            }
            if (_0x5bf416.title == "每日签到" && _0x5bf416.status == 0) {
              _0x3e7337.log(" 开始签到");
              await _0x43db17();
              await _0x5ac709();
            }
            if (_0x5bf416.title == "抽奖赚" && _0x5bf416.status == 0 && _0x37eb73 >= 7 && _0x37eb73 <= 18) {
              _0x3e7337.log(" 开始转盘任务");
              if (_0x5bf416.title_num < 90) {
                _0x3e7337.log(" 本轮即将完成15次转盘抽奖");
                for (let _0x5e47e8 = 0; _0x5e47e8 < 15; _0x5e47e8++) {
                  _0x3e7337.log(" 开始第" + (_0x5e47e8 + 1) + "次抽奖");
                  await _0xce730a();
                  await _0x3e7337.wait(_0x4dc0c9(5000, 10000));
                }
              } else {
                if (_0x5bf416.title_num >= 90) {
                  _0x3e7337.log(" 本轮即将完成10次转盘抽奖");
                  for (let _0x596d16 = 0; _0x596d16 < 10; _0x596d16++) {
                    _0x3e7337.log(" 开始第" + (_0x596d16 + 1) + "次抽奖");
                    await _0xce730a();
                    await _0x3e7337.wait(_0x4dc0c9(5000, 10000));
                  }
                  _0x3e7337.log(" 即将打开转盘宝箱");
                  for (let _0x2b5766 = 0; _0x2b5766 < 4; _0x2b5766++) {
                    _0x3e7337.log(" 开始打开第" + (_0x2b5766 + 1) + "个宝箱");
                    await _0x2c1c4b(_0x2b5766 + 1);
                    await _0x3e7337.wait(_0x4dc0c9(3000, 8000));
                  }
                }
              }
            }
            if (_0x5bf416.title == "看福利视频" && _0x5bf416.title_num < _0x5bf416.title_total && _0x5bf416.status == 0) {
              _0x3e7337.log(" 开始福利视频任务");
              await _0x43db17();
              await _0x71532();
              await _0x3e7337.wait(_0x4dc0c9(35000, 55000));
            }
            if (_0x5bf416.title == "打卡赚钱" && _0x5bf416.status == 0) {
              if (_0x37eb73 == 11) {
                await _0x3f68e7();
              }
              if (_0x37eb73 == 6) {
                await _0x3c36d7();
              }
            }
            if (_0x5bf416.title == "火爆转发" && _0x5bf416.status == 0) {
              if (_0x37eb73 == 9 || _0x37eb73 == 12 || _0x37eb73 == 17) {
                for (let _0x4cfc2e = 0; _0x4cfc2e < 2; _0x4cfc2e++) {
                  _0x3e7337.log("第" + (_0x4cfc2e + 1) + "转发");
                  await _0xc8c41c();
                  await _0x2f1bdc();
                  await _0x3e7337.wait(_0x4dc0c9(3000, 10000));
                }
                _0x2f4207("🔔 三餐奖励已完成，手动领取吧！");
              }
            }
            if (_0x5bf416.status == 1) {
              await _0x16796f(_0x5bf416.reward_action);
              await _0x5ebc36(_0x5bf416.title);
            }
          }
        }
      } catch (_0x117af3) {
        _0x3e7337.log(_0x117af3);
      }
      _0x343d68();
    });
  });
}
function _0x5ebc36(_0x36bd10, _0xff15d5 = 0) {
  return new Promise(_0x55a545 => {
    const _0x4c4c32 = {
      url: "https://kandian.wkandian.com/V5/CommonReward/toGetReward.json",
      headers: _0x2aae8d,
      body: _0x48aa00
    };
    _0x3e7337.post(_0x4c4c32, async (_0x203b01, _0x1d499d, _0x479364) => {
      try {
        await _0x5204e5("zqkd", _0x479364);
        let _0x5790bf = JSON.parse(_0x524705);
        if (typeof _0x5790bf == "string") {
          _0x5790bf = JSON.parse(_0x5790bf);
        }
        if (_0x5790bf.success == true) {
          _0x3e7337.log("\n" + _0x36bd10 + "任务完成，恭喜你获得：" + _0x5790bf.items.score + "青豆 🎉");
        } else {
          _0x3e7337.log("\n任务领取奖励失败");
        }
      } catch (_0x4a473c) {} finally {
        _0x55a545();
      }
    }, _0xff15d5);
  });
}
function _0x498365(_0x4a4ecf) {
  return new Promise((_0x1fb6c4, _0x46ea56) => {
    const _0x136236 = "https://kandian.wkandian.com/v3/article/lists.json?" + _0x4a4ecf;
    const _0x14c1a2 = {
      url: _0x136236,
      headers: _0xf8f187
    };
    _0x3e7337.get(_0x14c1a2, async (_0x4ac7d2, _0x1a0449, _0x4cd532) => {
      try {
        await _0x5204e5("zqkd", _0x4cd532);
        let _0x4b42be = JSON.parse(_0x524705);
        if (typeof _0x4b42be == "string") {
          _0x4b42be = JSON.parse(_0x4b42be);
        }
        if (_0x4b42be.success == true) {
          for (let _0x51a61c = 0; _0x51a61c < _0x4b42be.items.length; _0x51a61c++) {
            let _0xf05692 = _0x4b42be.items[_0x51a61c];
            const _0x32b7e0 = _0xf05692.id;
            const _0x2e6afd = _0xf05692.catid;
            if (_0xf05692.ctype == 0) {
              if (_0x3c0c9d.has(_0x32b7e0)) {
                _0x3e7337.log("今天已经读过此篇文章");
                continue;
              }
              _0x3e7337.log("开始阅读：" + _0xf05692.title);
              await _0x2d3dee(_0x32b7e0, _0x2e6afd);
              _0x3c0c9d.add(_0x32b7e0);
              _0x5df2dc.add(_0xf05692);
            } else {
              if (_0xf05692.ctype == 3) {
                if (_0x620f7c.has(_0x32b7e0)) {
                  _0x3e7337.log("今天已经观看过此视频");
                  continue;
                }
                _0x3e7337.log("开始观看：" + _0xf05692.title);
                await _0x2602f7(_0x32b7e0, _0x2e6afd);
                _0x620f7c.add(_0x32b7e0);
              }
            }
            await _0x3e7337.wait(_0x4dc0c9(35000, 60000));
            await _0x4c4209(_0x48aa00, 6000);
            if (_0x51a61c % 2 == 0) {
              _0x3e7337.log("开始上传阅读时长");
              await _0x1a0718(_0x4dc0c9(20, 55));
              await _0x5da6ed(_0x48aa00, 3000);
            }
          }
        }
      } catch (_0x1127dd) {
        _0x3e7337.log(_0x1127dd);
      }
      _0x1fb6c4();
    });
  });
}
async function _0x53a5c9(_0xe47aa4, _0x1510d3) {
  return new Promise((_0x1e7b84, _0x39867c) => {
    if (_0x25f76f == "") {
      _0x3e7337.log("你个王八羔子！垃圾");
      return;
    }
    let _0x539404 = _0x394311 + "/script/des/decode";
    if (_0x1510d3 == "ios") {
      _0x539404 = _0x394311 + "/script/ios/fdb/des/decode";
    }
    const _0x3a7a81 = {
      encryptedStr: _0xe47aa4,
      appName: "zqkd"
    };
    const _0x16d96d = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x521094 = {
      url: _0x539404,
      headers: _0x16d96d,
      body: JSON.stringify(_0x3a7a81)
    };
    _0x3e7337.post(_0x521094, async (_0x285635, _0x17f7bd, _0x3b1a54) => {
      try {
        _0x477391 = _0x3b1a54;
      } catch (_0x1362c8) {
        _0x3e7337.log(_0x1362c8);
      }
      _0x1e7b84();
    });
  });
}
async function _0x34566a(_0x3c8df4, _0x4f91af) {
  return new Promise((_0x583ce9, _0x1bea18) => {
    let _0x1aeb6c = _0x394311 + "/script/des/decode";
    if (_0x25f76f == "") {
      _0x3e7337.log("你个王八羔子！垃圾");
      return;
    }
    if (_0x268892 == "") {
      _0x3e7337.log("你个王八羔子！垃圾");
      return;
    }
    if (_0x4f91af == "ios") {
      _0x1aeb6c = _0x394311 + "/script/ios/fdb/des/decode";
    }
    const _0x1d82fd = {
      encryptedStr: _0x3c8df4,
      appName: "zqkd"
    };
    const _0x4b2a62 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x20fe1f = {
      url: _0x1aeb6c,
      headers: _0x4b2a62,
      body: JSON.stringify(_0x1d82fd)
    };
    _0x3e7337.post(_0x20fe1f, async (_0x1d6461, _0xb5313c, _0x52b652) => {
      try {
        _0xd5a882 = _0x52b652;
      } catch (_0x542238) {
        _0x3e7337.log(_0x542238);
      }
      _0x583ce9();
    });
  });
}
async function _0x4795da(_0x37f596, _0x4beb93) {
  return new Promise((_0x344a54, _0x495831) => {
    let _0x46fe0a = _0x394311 + "/script/des/encode";
    if (_0x4beb93 == "ios") {
      _0x46fe0a = _0x394311 + "/script/ios/fdb/des/encode";
    }
    const _0x28936c = {
      clearStr: _0x37f596,
      appName: "zqkd",
      iv: _0xea34a5
    };
    if (_0x25f76f == "") {
      _0x3e7337.log("你个王八羔子！垃圾");
      return;
    }
    const _0x153203 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xdd97d1 = {
      url: _0x46fe0a,
      headers: _0x153203,
      body: JSON.stringify(_0x28936c)
    };
    _0x3e7337.post(_0xdd97d1, async (_0x786bc2, _0x51d56e, _0x6f12aa) => {
      _0x6f12aa = _0x6f12aa.replace(/"/g, "");
      _0x6f12aa = "=" + _0x6f12aa;
      _0x6f12aa = encodeURIComponent(_0x6f12aa);
      try {
        _0x48aa00 = "" + _0x139a34 + _0x6f12aa;
      } catch (_0x44483c) {
        _0x3e7337.log(_0x44483c);
      }
      _0x344a54();
    });
  });
}
function _0x32d01c(_0x3412ff) {
  _0x3412ff = _0x3412ff.replace(/\"/g, "");
  var _0xb80cb3;
  var _0xf66ba4 = {};
  var _0x108425 = _0x3412ff.slice(_0x3412ff.indexOf("?") + 1).split("&");
  for (var _0x5180fe = 0; _0x5180fe < _0x108425.length; _0x5180fe++) {
    _0xb80cb3 = _0x108425[_0x5180fe].split("=");
    _0xf66ba4[_0xb80cb3[0]] = _0xb80cb3[1];
  }
  return _0xf66ba4;
}
function _0x2f59ea(_0x5c7aab) {
  let _0x1c0a49 = "";
  ts = Math.round(new Date().getTime() / 1000).toString();
  if (_0x268892 == "") {
    _0x3e7337.log("你个王八羔子！垃圾");
    return;
  }
  _0x1c0a49 += "access=" + _0x5c7aab.access;
  _0x1c0a49 += "&app_version=" + _0x5c7aab.app_version;
  _0x1c0a49 += "&channel=" + _0x5c7aab.channel;
  _0x1c0a49 += "&channel_code=" + _0x5c7aab.channel_code;
  _0x1c0a49 += "&cid=" + _0x5c7aab.cid;
  _0x1c0a49 += "&client_version=" + _0x5c7aab.client_version;
  _0x1c0a49 += "&device_brand=" + _0x5c7aab.device_brand;
  _0x1c0a49 += "&device_id=" + _0x5c7aab.device_id;
  _0x1c0a49 += "&device_model=" + _0x5c7aab.device_model;
  _0x1c0a49 += "&device_platform=" + _0x5c7aab.device_platform;
  _0x1c0a49 += "&device_type=" + _0x5c7aab.device_type;
  _0x1c0a49 += "&isnew=" + _0x5c7aab.isnew;
  _0x1c0a49 += "&mobile_type=" + _0x5c7aab.mobile_type;
  _0x1c0a49 += "&net_type=" + _0x5c7aab.net_type;
  _0x1c0a49 += "&openudid=" + _0x5c7aab.openudid;
  _0x1c0a49 += "&os_version=" + _0x5c7aab.os_version;
  _0x1c0a49 += "&phone_code=" + _0x5c7aab.phone_code;
  _0x1c0a49 += "&phone_network=" + _0x5c7aab.phone_network;
  _0x1c0a49 += "&platform=" + _0x5c7aab.platform;
  _0x1c0a49 += "&request_time=" + ts;
  _0x1c0a49 += "&resolution=" + _0x5c7aab.resolution;
  _0x1c0a49 += "&sm_device_id=" + _0x5c7aab.sm_device_id;
  _0x1c0a49 += "&szlm_ddid=" + _0x5c7aab.szlm_ddid;
  _0x1c0a49 += "&time=" + ts;
  _0x1c0a49 += "&uid=" + _0x5c7aab.uid;
  _0x1c0a49 += "&uuid=" + _0x5c7aab.uuid;
  return _0x1c0a49;
}
function _0x44ccd4(_0x34129a) {
  let _0x49331f = "";
  if (_0x268892 == "") {
    _0x3e7337.log("你个王八羔子！垃圾");
    return;
  }
  const _0x57fb89 = _0x26a842(15);
  const _0x5ba4f1 = _0x1d05d9(_0x57fb89);
  _0x49331f += "uid=" + _0x34129a.uid;
  _0x49331f += "&access=" + _0x34129a.access;
  _0x49331f += "&app_version=" + _0x34129a.app_version;
  _0x49331f += "&channel=" + _0x34129a.channel;
  _0x49331f += "&device_platform=" + _0x34129a.device_platform;
  _0x49331f += "&cookie_id=" + _0x5ba4f1;
  _0x49331f += "&device_brand=" + _0x34129a.device_brand;
  _0x49331f += "&device_type=" + _0x34129a.device_type;
  _0x49331f += "&sm_device_id=" + _0x34129a.sm_device_id;
  _0x49331f += "&device_id=" + _0x34129a.device_id;
  _0x49331f += "&os_version=" + _0x34129a.os_version;
  _0x49331f += "&cookie=" + _0x3bdbf8;
  _0x49331f += "&device_model=" + _0x34129a.device_model;
  return _0x49331f;
}
function _0x3f68e7() {
  return new Promise(_0x16e54e => {
    const _0x4c0f55 = _0x44ccd4(_0x32d01c(_0x477391));
    const _0x59ced1 = {
      url: "https://kd.youth.cn/WebApi/PunchCard/signUp?" + _0x4c0f55,
      headers: JSON.parse(_0x228fd6.kkz_headers)
    };
    _0x3e7337.post(_0x59ced1, async (_0x265117, _0x455c28, _0x45a204) => {
      try {
        let _0x4e772e = JSON.parse(_0x45a204);
        if (_0x4e772e.code == 1) {
          _0x3e7337.log("打卡报名成功 🎉");
        }
      } catch (_0x42f683) {
        _0x3e7337.log(_0x42f683);
      }
      _0x16e54e();
    });
  });
}
function _0x3c36d7() {
  return new Promise((_0x217ae1, _0xf03acc) => {
    const _0x179943 = _0x44ccd4(_0x32d01c(_0x477391));
    let _0x4d52bf = "https://kd.youth.cn/WebApi/PunchCard/doCard?" + _0x179943;
    const _0x34f313 = {
      url: _0x4d52bf,
      headers: JSON.parse(_0x228fd6.kkz_headers)
    };
    _0x3e7337.post(_0x34f313, async (_0x563ae6, _0x4f9e3f, _0x3140b6) => {
      try {
        let _0x8c0ecf = JSON.parse(_0x3140b6);
        if (_0x8c0ecf.code == 1) {
          _0x3e7337.log("早起打卡成功 🎉");
        }
      } catch (_0x423e26) {
        _0x3e7337.log(_0x423e26);
      }
      _0x217ae1();
    });
  });
}
function _0x2f1bdc() {
  return new Promise((_0x42bd86, _0x4dff94) => {
    let _0x23d7d2 = "https://kandian.wkandian.com/v2/article/share/put.json?" + _0x48aa00;
    const _0x868372 = {
      url: _0x23d7d2,
      headers: _0xf8f187
    };
    _0x3e7337.get(_0x868372, async (_0x1d8f82, _0x37285d, _0x3771b6) => {
      try {
        await _0x5204e5("zqkd", _0x3771b6);
        let _0x7fab21 = JSON.parse(_0x524705);
        _0x7fab21 = _0x7fab21.replace(/\"button\".+\"desc\"/, "\"desc\"");
        if (typeof _0x7fab21 == "string") {
          _0x7fab21 = JSON.parse(_0x7fab21);
        }
        if (_0x7fab21.success == true) {
          _0x3e7337.log(" 火爆文章分享成功 🎉");
        }
      } catch (_0x2e12e7) {
        _0x3e7337.log(_0x2e12e7);
      }
      _0x42bd86();
    });
  });
}
function _0x4c4209(_0x35bd33, _0x3adf59 = 0) {
  return new Promise(_0x558c0b => {
    const _0x4ca779 = {
      url: "https://kandian.wkandian.com/v5/article/complete.json",
      headers: _0x2aae8d,
      body: _0x35bd33
    };
    _0x3e7337.post(_0x4ca779, async (_0x224e84, _0x5abf5d, _0x1628e4) => {
      try {
        await _0x5204e5("zqkd", _0x1628e4);
        let _0xf7539 = JSON.parse(_0x524705);
        if (typeof _0xf7539 == "string") {
          _0xf7539 = JSON.parse(_0xf7539);
        }
        if (_0xf7539.items.read_score !== "undefined") {
          console.log("\n浏览文章成功，获得：" + _0xf7539.items.read_score + "青豆");
        } else {
          console.log("\n看太久了，换一篇试试");
        }
      } catch (_0x19bc2e) {} finally {
        _0x558c0b();
      }
    }, _0x3adf59);
  });
}
function _0x5da6ed(_0x149437, _0x21bdfb = 0) {
  return new Promise(_0x16f3c7 => {
    const _0x41dd5e = {
      url: "https://kandian.wkandian.com/v5/user/stay.json",
      headers: _0x25d6ad,
      body: _0x149437
    };
    _0x3e7337.post(_0x41dd5e, async (_0x25aa08, _0x1204d3, _0x525b9b) => {
      try {
        await _0x5204e5("zqkd", _0x525b9b);
        let _0x3bb541 = JSON.parse(_0x524705);
        if (typeof _0x3bb541 == "string") {
          _0x3bb541 = JSON.parse(_0x3bb541);
        }
        if (_0x3bb541.success === true) {
          console.log("\n阅读总时长：" + _0x3bb541.time + "秒");
        } else {
          console.log("\n更新阅读时长失败");
        }
      } catch (_0x2014a3) {} finally {
        _0x16f3c7();
      }
    }, _0x21bdfb);
  });
}
function _0x5936bc() {
  return new Promise((_0xdaf249, _0x3d4029) => {
    const _0x56d686 = Math.round(new Date().getTime() / 1000).toString();
    let _0x399050 = _0x228fd6.kkz_url;
    if (!_0x399050) {
      _0x3e7337.log("请抓取看看赚列表CK");
      return;
    }
    _0x399050 = _0x399050.replace(/&request_time=.\d{10}/, "&request_time=" + _0x56d686);
    const _0x43158a = {
      url: _0x399050,
      headers: JSON.parse(_0x228fd6.kkz_headers)
    };
    _0x3e7337.get(_0x43158a, async (_0xa2dc3d, _0x1aa9a9, _0x12e547) => {
      try {
        let _0x32dd12 = JSON.parse(_0x12e547);
        if (typeof _0x32dd12 == "string") {
          _0x32dd12 = JSON.parse(_0x32dd12);
        }
        if (_0x32dd12.status == 1) {
          const _0x5f59a1 = _0x32dd12.data.list;
          for (let _0x4fedda = 0; _0x4fedda < _0x5f59a1.length; _0x4fedda++) {
            let _0x22c001 = _0x5f59a1[_0x4fedda];
            let _0x57a401 = _0x22c001.title;
            let _0xe58502 = _0x22c001.id;
            await _0x515251(_0xe58502);
            if (_0x22c001.status != "2") {
              _0x3e7337.log("开始看看赚任务：" + _0x57a401);
              await _0x949221(_0x48aa00);
            }
          }
        }
      } catch (_0x26731f) {
        _0x3e7337.log(_0x26731f);
      }
      _0xdaf249();
    });
  });
}
function _0x949221(_0x111490, _0x36cb2d = 0) {
  return new Promise(_0x3305c2 => {
    const _0x5244b1 = {
      url: "https://kandian.wkandian.com/v5/Nameless/adlickstart.json",
      headers: _0x2aae8d,
      body: _0x111490
    };
    let _0x6575f6 = _0x5244b1;
    _0x3e7337.post(_0x6575f6, async (_0x145698, _0x5a1d3a, _0x39680e) => {
      try {
        await _0x5204e5("zqkd", _0x39680e);
        let _0x36824b = JSON.parse(_0x524705);
        if (typeof _0x36824b == "string") {
          _0x36824b = JSON.parse(_0x36824b);
        }
        if (_0x36824b.success === true) {
          console.log("\n看看赚任务: " + _0x36824b.items.banner_id + " 激活成功");
          comstate = _0x36824b.items.comtele_state;
          if (comstate === 1) {
            console.log("\n任务: " + _0x36824b.items.banner_id + "已完成");
          } else {
            for (let _0x335e36 = 0; _0x335e36 < _0x36824b.items.see_num - _0x36824b.items.read_num; _0x335e36++) {
              _0x3e7337.log("开始阅读第" + parseInt(_0x335e36 + 1) + "篇");
              await _0x3e7337.wait(8000);
              await _0x5459e7(_0x111490, parseInt(_0x335e36 + 1));
            }
            await _0x3e7337.wait(10000);
            await _0x40a72d(_0x111490);
          }
        }
      } catch (_0x1ed39d) {} finally {
        _0x3305c2();
      }
    }, _0x36cb2d);
  });
}
function _0x5459e7(_0xbd1106, _0x19af40, _0x335fb5 = 0) {
  return new Promise(_0x1a8da8 => {
    const _0x14cf08 = {
      url: "https://kandian.wkandian.com/v5/Nameless/bannerstatus.json",
      headers: _0x2aae8d,
      body: _0xbd1106
    };
    _0x3e7337.post(_0x14cf08, async (_0x177d65, _0x371f8e, _0x5676a0) => {
      try {
        await _0x5204e5("zqkd", _0x5676a0);
        let _0x44e989 = JSON.parse(_0x524705);
        if (typeof _0x44e989 == "string") {
          _0x44e989 = JSON.parse(_0x44e989);
        }
        if (_0x44e989.success === true) {
          console.log("\n浏览第" + _0x19af40 + "篇文章成功");
        } else {
          console.log("\n浏览第" + _0x19af40 + "篇文章失败");
        }
      } catch (_0x19bb22) {} finally {
        _0x1a8da8();
      }
    }, _0x335fb5);
  });
}
function _0x40a72d(_0x322b2a, _0x11d1c2 = 0) {
  return new Promise(_0x14a75e => {
    const _0x3ec173 = {
      url: "https://kandian.wkandian.com/v5/Nameless/adlickend.json",
      headers: _0x2aae8d,
      body: _0x322b2a
    };
    _0x3e7337.post(_0x3ec173, async (_0x67b708, _0xfb1455, _0x4d89d5) => {
      try {
        await _0x5204e5("zqkd", _0x4d89d5);
        let _0x1b9156 = JSON.parse(_0x524705);
        if (typeof _0x1b9156 == "string") {
          _0x1b9156 = JSON.parse(_0x1b9156);
        }
        if (_0x1b9156.items.score !== "undefined") {
          console.log("\n任务完成 恭喜你获得：" + _0x1b9156.items.score + "青豆 🎉");
        } else {
          console.log("\n任务领取奖励失败");
        }
      } catch (_0x382094) {} finally {
        _0x14a75e();
      }
    }, _0x11d1c2);
  });
}
function _0xdfdd4a() {
  return new Promise((_0x1235bf, _0x45580a) => {
    const _0x25600d = Math.round(new Date().getTime() / 1000).toString();
    let _0x3cae17 = _0x228fd6.kkz_url.replace("type=0", "type=2");
    if (!_0x3cae17) {
      _0x3e7337.log("请抓取看看赚列表CK");
      return;
    }
    _0x3cae17 = _0x3cae17.replace(/&request_time=.\d{10}/, "&request_time=" + _0x25600d);
    const _0x1ee420 = {
      url: _0x3cae17,
      headers: JSON.parse(_0x228fd6.kkz_headers)
    };
    _0x3e7337.get(_0x1ee420, async (_0x1ef900, _0x536ca2, _0xf28072) => {
      try {
        let _0x1515ac = JSON.parse(_0xf28072);
        if (typeof _0x1515ac == "string") {
          _0x1515ac = JSON.parse(_0x1515ac);
        }
        if (_0x1515ac.status == 1) {
          const _0x412093 = _0x1515ac.data.list;
          for (let _0x1b4774 = 0; _0x1b4774 < _0x412093.length; _0x1b4774++) {
            let _0x4b670b = _0x412093[_0x1b4774];
            let _0x5478fa = _0x4b670b.title;
            let _0x775ca4 = _0x4b670b.id;
            await _0x151fd9(_0x775ca4);
            if (_0x4b670b.status != "2") {
              _0x3e7337.log("开始浏览赚任务：" + _0x5478fa);
              await _0x4df5a0(_0x48aa00);
            }
          }
        }
      } catch (_0x43541f) {
        _0x3e7337.log(_0x43541f);
      }
      _0x1235bf();
    });
  });
}
function _0x4df5a0(_0x492c10, _0x3114d4 = 0) {
  return new Promise(_0x4a6bd0 => {
    const _0x35fc58 = {
      url: "https://kandian.wkandian.com/v5/task/browse_start.json",
      headers: _0x2aae8d,
      body: _0x492c10
    };
    _0x3e7337.post(_0x35fc58, async (_0x1cb378, _0x3498f4, _0x4188e5) => {
      try {
        await _0x5204e5("zqkd", _0x4188e5);
        let _0x3edffc = JSON.parse(_0x524705);
        if (typeof _0x3edffc == "string") {
          _0x3edffc = JSON.parse(_0x3edffc);
        }
        if (_0x3edffc.success === true) {
          console.log("\n激活浏览赚任务成功");
          comstate = _0x3edffc.items.comtele_state;
          if (comstate === 1) {
            console.log("\n任务: " + _0x3edffc.items.banner_id + "已完成，跳过");
          } else {
            _0x3e7337.log("任务开始，" + _0x3edffc.items.banner_id + _0x3edffc.message);
            await _0x3e7337.wait(10000);
            await _0x29771e(_0x492c10);
          }
        } else {
          console.log("\n激活浏览赚任务失败");
          smbody = _0x3e7337.getdata("zqllzbody").replace(zqllzbody1 + "&", "");
          _0x3e7337.setdata(smbody, "zqllzbody");
          console.log("该浏览赚任务已自动删除");
        }
      } catch (_0x48d2ce) {
        _0x3e7337.log(_0x48d2ce);
      } finally {
        _0x4a6bd0();
      }
    }, _0x3114d4);
  });
}
function _0x29771e(_0xa636f, _0x29e3e5 = 0) {
  return new Promise(_0x564038 => {
    const _0x271c1e = {
      url: "https://kandian.wkandian.com/v5/task/browse_end.json",
      headers: _0x2aae8d,
      body: _0xa636f
    };
    _0x3e7337.post(_0x271c1e, async (_0xf24e32, _0x3adeb9, _0x16356c) => {
      try {
        await _0x5204e5("zqkd", _0x16356c);
        let _0xa4ac65 = JSON.parse(_0x524705);
        if (typeof _0xa4ac65 == "string") {
          _0xa4ac65 = JSON.parse(_0xa4ac65);
        }
        if (_0xa4ac65.items.score !== "undefined") {
          console.log("\n浏览赚获得：" + _0xa4ac65.items.score + "青豆 🎉");
        } else {
          console.log("\n领取奖励失败");
        }
      } catch (_0x58d74f) {
        _0x3e7337.log(_0x58d74f);
      } finally {
        _0x564038();
      }
    }, _0x29e3e5);
  });
}
function _0xce730a() {
  return new Promise((_0x1205ca, _0x482c9b) => {
    const _0x19b031 = new Date().valueOf();
    let _0x49d9ab = "https://kd.youth.cn/WebApi/RotaryTable/turnRotary?_=" + _0x19b031;
    const _0x4954cc = _0x26a842(15);
    const _0x1e7be8 = _0x1d05d9(_0x4954cc);
    const _0x45fcae = {
      url: _0x49d9ab,
      headers: JSON.parse(_0x228fd6.kkz_headers),
      body: "cookie=" + _0x3bdbf8 + "&cookie_id=" + _0x1e7be8
    };
    _0x3e7337.post(_0x45fcae, async (_0x1e45d2, _0xe717ad, _0x1cba3e) => {
      try {
        let _0x128d1d = JSON.parse(_0x1cba3e);
        if (_0x128d1d.status == 1) {
          if (_0x128d1d.data.score == 0) {
            _0x3e7337.log("哎呀没抽中青豆 😭");
          } else {
            _0x3e7337.log("恭喜本次转盘获得了" + _0x128d1d.data.score + "青豆 🎉");
          }
          if (_0x128d1d.data.doubleNum != 0 && _0x128d1d.data.score > 0) {
            await _0x5a0542();
          }
        }
      } catch (_0x47a37e) {
        _0x3e7337.log(_0x47a37e);
      }
      _0x1205ca();
    });
  });
}
function _0x5a0542() {
  return new Promise((_0x56d98a, _0x437b6b) => {
    const _0x3b4d8f = new Date().getTime();
    let _0x1b23f2 = "https://kd.youth.cn/WebApi/RotaryTable/toTurnDouble?_=" + _0x3b4d8f;
    const _0x3274a5 = _0x26a842(15);
    const _0x30a81b = _0x1d05d9(_0x3274a5);
    const _0x438e59 = {
      url: _0x1b23f2,
      headers: JSON.parse(_0x228fd6.kkz_headers),
      body: "cookie=" + _0x3bdbf8 + "&cookie_id=" + _0x30a81b
    };
    _0x3e7337.post(_0x438e59, async (_0x5796cb, _0x7f6513, _0x5d7d36) => {
      try {
        let _0x47a5ea = JSON.parse(_0x5d7d36);
        if (_0x47a5ea.status == 1) {
          _0x3e7337.log(" 恭喜你本次转盘双倍任务，获得了" + _0x47a5ea.data.score + "青豆 🎉");
        }
      } catch (_0x3ab6a5) {
        _0x3e7337.log(_0x3ab6a5);
      }
      _0x56d98a();
    });
  });
}
function _0x2c1c4b(_0x12b556) {
  return new Promise((_0x33a94c, _0x46c96d) => {
    const _0x33799b = new Date().getTime();
    let _0x2d8c34 = "https://kd.youth.cn/WebApi/RotaryTable/chestReward?_=" + _0x33799b;
    const _0x5ed8d9 = _0x26a842(15);
    const _0x36a492 = _0x1d05d9(_0x5ed8d9);
    const _0x10001e = {
      url: _0x2d8c34,
      headers: JSON.parse(_0x228fd6.kkz_headers),
      body: "cookie=" + _0x3bdbf8 + "&cookie_id=" + _0x36a492 + "&num=" + _0x12b556
    };
    _0x3e7337.post(_0x10001e, async (_0x510a0d, _0x13ce48, _0x588f98) => {
      try {
        let _0xf38f9 = JSON.parse(_0x588f98);
        if (_0xf38f9.status == 1) {
          _0x3e7337.log(" 恭喜你转盘打开宝箱任务" + _0x12b556 + "，获得了" + _0xf38f9.data.score + "青豆 🎉");
        }
      } catch (_0x4a9430) {
        _0x3e7337.log(_0x4a9430);
      }
      _0x33a94c();
    });
  });
}
function _0x71532() {
  return new Promise((_0x275568, _0x2e5cc7) => {
    let _0x51c5f6 = "https://kandian.wkandian.com/V17/NewTaskIos/recordNum.json";
    const _0x26d10e = {
      url: _0x51c5f6,
      headers: _0x2aae8d,
      body: _0x48aa00
    };
    _0x3e7337.post(_0x26d10e, async (_0x2f3b71, _0x419bd0, _0x1b4f06) => {
      try {
        await _0x5204e5("zqkd", _0x1b4f06);
        let _0x597c51 = JSON.parse(_0x524705);
        if (typeof _0x597c51 == "string") {
          _0x597c51 = JSON.parse(_0x597c51);
        }
        if (_0x597c51.status == 0) {
          _0x3e7337.log("恭喜你福利视频任务完成");
        }
      } catch (_0x1e1c66) {
        _0x3e7337.log(_0x1e1c66);
      }
      _0x275568();
    });
  });
}
function _0x27e997() {
  return new Promise((_0x4e063a, _0x13134d) => {
    const _0x2493fd = Math.round(new Date().getTime() / 1000).toString();
    let _0x15ab68 = _0x44ccd4(_0x32d01c(_0x477391));
    _0x15ab68 = _0x15ab68 + ("&request_time=" + _0x2493fd);
    let _0x20ad60 = "https://kd.youth.cn/WebApi/invite/openHourRed";
    const _0xa05fc1 = {
      url: _0x20ad60,
      headers: JSON.parse(_0x228fd6.kkz_headers),
      body: _0x15ab68
    };
    _0x3e7337.post(_0xa05fc1, async (_0x241ff8, _0x259652, _0xd2babc) => {
      try {
        let _0x1d350a = JSON.parse(_0xd2babc);
        if (_0x1d350a.status == 1) {
          _0x3e7337.log(" 恭喜你打开宝箱，获得了" + _0x1d350a.data.score + "青豆 🎉");
        }
      } catch (_0x429f3d) {
        _0x3e7337.log(_0x429f3d);
      }
      _0x4e063a();
    });
  });
}
function _0x274a7d() {
  return new Promise((_0x3660a1, _0x51153b) => {
    let _0x4c12e0 = "https://kandian.wkandian.com/v5/wechat/withdraw2.json";
    const _0x355917 = {
      url: _0x4c12e0,
      headers: _0xf8f187,
      body: _0x48aa00
    };
    _0x3e7337.post(_0x355917, async (_0x5672b6, _0x428abf, _0x386aeb) => {
      try {
        await _0x5204e5("zqkd", _0x386aeb);
        let _0x5d6b49 = JSON.parse(_0x524705);
        if (typeof _0x5d6b49 == "string") {
          _0x5d6b49 = JSON.parse(_0x5d6b49);
        }
        if (_0x5d6b49.success == true) {
          _0x3e7337.log(" 恭喜你提现成功 🎉");
        }
      } catch (_0x524436) {
        _0x3e7337.log(_0x524436);
      }
      _0x3660a1();
    });
  });
}
function _0x26a807() {
  return new Promise((_0x3eaa8d, _0x4bdb9c) => {
    let _0x5d7449 = "https://kandian.wkandian.com/WebApi/ShareNew/execExtractTask";
    const _0x2a9df7 = {
      url: _0x5d7449,
      headers: _0xf8f187,
      body: _0x48aa00
    };
    _0x3e7337.post(_0x2a9df7, async (_0x13c6e9, _0x13847b, _0x1de497) => {
      try {
        _0x3e7337.log(_0x1de497);
        let _0x1eb4d6 = JSON.parse(_0x1de497);
        if (_0x1eb4d6.status == 1) {
          _0x3e7337.log("火爆转发奖励领取成功 🎉");
        }
      } catch (_0x148a03) {
        _0x3e7337.log(_0x148a03);
      }
      _0x3eaa8d();
    });
  });
}
function _0x14d4b6(_0x1e5d95) {
  let _0x169895 = _0x1e5d95.share_url;
  let _0x452337 = _0x1e5d95.id;
  let _0x106f23 = "62154927";
  let _0x135e17 = new Date().getTime();
  let _0x2e9c29 = "" + _0x106f23 + _0x452337 + _0x135e17;
  let _0x218ac7 = _0x169895 + "&&scene_id=home_feed&share_id=" + _0x2e9c29 + "&&time=" + _0x135e17;
  return _0x218ac7;
}
async function _0x339c2a(_0x5990f3) {
  _0x3b9b0b = encodeURIComponent(encodeURIComponent(_0x5990f3));
  let _0x220a1d = String(new Date().getTime());
  _0x476634 = _0x1d05d9(_0x220a1d);
  await _0x4c83f7();
  await _0x3e7337.wait(_0x4dc0c9(3000, 6000));
  await _0x4f6f97();
  await _0x3e7337.wait(_0x4dc0c9(3000, 6000));
  await _0x3f1bea();
  await _0x3e7337.wait(_0x4dc0c9(3000, 6000));
  await _0x14a851();
  await _0x3e7337.wait(_0x4dc0c9(3000, 6000));
}
function _0x4c83f7() {
  return new Promise((_0x36e319, _0x39bbfa) => {
    let _0x23c486 = new Date().getTime();
    const _0x262a20 = "https://script.baertt.com/count2/storage?t=" + _0x476634 + "&referer=" + _0x3b9b0b + "&_=" + _0x23c486 + "&jsonpcallback=jsonp2";
    const _0x252056 = {
      url: _0x262a20,
      headers: _0xfca7f2
    };
    _0x3e7337.get(_0x252056, function (_0x499b4e, _0x55967a, _0x218300) {
      try {
        _0x3e7337.log("随机抽取分享文章成功");
      } catch (_0x30094a) {
        _0x3e7337.log(_0x30094a);
      }
      _0x36e319();
    });
  });
}
function _0x4f6f97() {
  return new Promise((_0x468798, _0x5201f8) => {
    let _0x2e2ace = new Date().getTime();
    const _0x189aeb = "https://script.baertt.com/count2/visit?type=1&si=" + _0x476634 + "&referer=" + _0x3b9b0b + "&_=" + _0x2e2ace + "&jsonpcallback=jsonp3";
    const _0x5ae1a5 = {
      url: _0x189aeb,
      headers: _0xfca7f2
    };
    _0x3e7337.get(_0x5ae1a5, function (_0x22e088, _0x3e7b77, _0xcf225e) {
      try {
        _0x3e7337.log("模拟访问分享文章...");
      } catch (_0x188570) {
        _0x3e7337.log(_0x188570);
      }
      _0x468798();
    });
  });
}
function _0x3f1bea() {
  return new Promise((_0x3e8b54, _0x5863f6) => {
    let _0x3ea3e6 = new Date().getTime();
    const _0x5ed2fb = "https://script.baertt.com/count2/openpage?referer=" + _0x3b9b0b + "&_=" + _0x3ea3e6 + "&jsonpcallback=jsonp5";
    const _0x66109f = {
      url: _0x5ed2fb,
      headers: _0xfca7f2
    };
    _0x3e7337.get(_0x66109f, function (_0x36530e, _0x528634, _0x522fff) {
      try {
        _0x3e7337.log("模拟浏览分享文章成功");
      } catch (_0x29fa9b) {
        _0x3e7337.log(_0x29fa9b);
      }
      _0x3e8b54();
    });
  });
}
function _0x14a851() {
  return new Promise((_0x5e669f, _0x4a7af3) => {
    let _0x1f11d6 = new Date().getTime();
    const _0x22a4d3 = "https://script.baertt.com/count2/callback?si=" + _0x476634 + "&referer=" + _0x3b9b0b + "&_=" + _0x1f11d6 + "&jsonpcallback=jsonp6";
    const _0x5a7916 = {
      url: _0x22a4d3,
      headers: _0xfca7f2
    };
    _0x3e7337.get(_0x5a7916, function (_0x13348b, _0xdac097, _0x1bfbc1) {
      try {
        _0x3e7337.log("恭喜你分享奖励已完成，成功获得500青豆。 🎉");
      } catch (_0x2207ea) {
        _0x3e7337.log(_0x2207ea);
      }
      _0x5e669f();
    });
  });
}
function _0x5789d8(_0x5deb05, _0x322a86, _0x38ac14) {
  return new Promise((_0x28a909, _0x105b4c) => {
    const _0x481be7 = _0x394311 + "/script/permissions/lastest";
    const _0x58519d = {
      appName: _0x5deb05,
      userId: _0x322a86,
      activityCode: _0x38ac14,
      version: _0x37f56e
    };
    const _0x578e0c = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1c8583 = {
      url: _0x481be7,
      headers: _0x578e0c,
      body: JSON.stringify(_0x58519d)
    };
    _0x3e7337.post(_0x1c8583, async (_0x35b18a, _0x4d992f, _0x3d9367) => {
      const _0x595ed9 = _0x3d9367.replace(/\"/g, "").slice(34);
      const _0x4a092c = new _0x49cc59();
      result = JSON.parse(_0x4a092c.decode(_0x595ed9));
      try {
        _0x247519 = result.version;
        _0x268892 = result.userAuth;
        _0x9e8965 = result.scriptAuth;
        _0x7752c6 = result.runAuth;
        _0x30ce1a = result.notify;
        _0x25f76f = result.vipAuth;
        _0x1524ec = result.isCharge;
        _0xb2041a = result.runAcounts;
        _0x4e19de = result.buyCount;
        _0x502040 = result.runedCounts;
        _0x28522c = result.runTotalCounts;
        _0x46432f = result.userRank;
      } catch (_0x16a255) {
        _0x3e7337.log(_0x16a255);
      }
      _0x28a909();
    });
  });
}
function _0x5204e5(_0x2f2f90, _0xd5597b) {
  return new Promise((_0x313718, _0x2108fd) => {
    const _0x351dd4 = _0x394311 + "/script/aes/decode";
    const _0x5b2cc8 = {
      appName: _0x2f2f90,
      encryptedStr: _0xd5597b
    };
    const _0x4239e3 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1245a1 = {
      url: _0x351dd4,
      headers: _0x4239e3,
      body: JSON.stringify(_0x5b2cc8)
    };
    _0x3e7337.post(_0x1245a1, async (_0x53d5ff, _0x4b4ff0, _0x5018fb) => {
      try {
        _0x524705 = _0x5018fb;
      } catch (_0x410901) {
        _0x3e7337.log(_0x410901);
      }
      _0x313718();
    });
  });
}
function _0x2883c4(_0x1a08fa, _0x1e6533) {
  return new Promise((_0xaa476c, _0x5718e9) => {
    const _0x4b2c11 = _0x394311 + "/script/run/add";
    const _0x1ceb64 = {
      appName: _0x1a08fa,
      userId: _0x1e6533,
      activityCode: _0x11b031,
      version: _0x37f56e
    };
    const _0x291fff = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x4e2ad4 = {
      url: _0x4b2c11,
      headers: _0x291fff,
      body: JSON.stringify(_0x1ceb64)
    };
    _0x3e7337.post(_0x4e2ad4, async (_0x1c5742, _0x39206c, _0x27019a) => {
      _0xaa476c();
    });
  });
}
function _0x495d80() {
  var _0x379dcf = new Date();
  var _0x47a601 = _0x379dcf.getDate();
  var _0x1461b3 = _0x379dcf.getMonth() + 1;
  var _0x1771f0 = _0x379dcf.getFullYear();
  String(_0x1461b3).length < 2 ? _0x1461b3 = "0" + _0x1461b3 : _0x1461b3;
  String(_0x47a601).length < 2 ? _0x47a601 = "0" + _0x47a601 : _0x47a601;
  var _0x41ac83 = _0x1771f0 + "" + _0x1461b3 + "" + _0x47a601;
  return _0x41ac83;
}
function _0x5ee965(_0x4f0aee) {
  try {
    if (typeof JSON.parse(_0x4f0aee) == "object") {
      return true;
    }
  } catch (_0x17e7cf) {
    console.log(_0x17e7cf);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x46fb39(_0x1f5ec7) {
  var _0x2b741d = String.fromCharCode(_0x1f5ec7.charCodeAt(0) + _0x1f5ec7.length);
  for (var _0x5016e2 = 1; _0x5016e2 < _0x1f5ec7.length; _0x5016e2++) {
    _0x2b741d += String.fromCharCode(_0x1f5ec7.charCodeAt(_0x5016e2) + _0x1f5ec7.charCodeAt(_0x5016e2 - 1));
  }
  return escape(_0x2b741d);
}
function _0xcdfa79(_0x595301) {
  _0x595301 = unescape(_0x595301);
  var _0x369d7b = String.fromCharCode(_0x595301.charCodeAt(0) - _0x595301.length);
  for (var _0x361d68 = 1; _0x361d68 < _0x595301.length; _0x361d68++) {
    _0x369d7b += String.fromCharCode(_0x595301.charCodeAt(_0x361d68) - _0x369d7b.charCodeAt(_0x361d68 - 1));
  }
  return _0x369d7b;
}
function _0x4dc0c9(_0x588472, _0x539f18) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x588472 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x539f18 - _0x588472 + 1) + _0x588472);
      break;
    default:
      return 0;
      break;
  }
}
function _0x26a842(_0x45f915, _0x23d29b) {
  _0x23d29b = _0x23d29b || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  let _0x1945b3 = "";
  for (let _0x4abdb0 = 0; _0x4abdb0 < _0x45f915; _0x4abdb0++) {
    let _0x534ef0 = Math.floor(Math.random() * _0x23d29b.length);
    _0x1945b3 += _0x23d29b.substring(_0x534ef0, _0x534ef0 + 1);
  }
  return _0x1945b3;
}
function _0x3502a1() {
  if (_0x2efc66 == 1) {
    _0x3e7337.msg(_0x3e7337.name, "", _0x3e7337.message);
  }
}
function _0x2f4207(_0x7e11e7) {
  if (_0x2efc66 == 1) {
    if (_0x3e7337.isNode()) {
      _0x3edd6e.sendNotify(_0x3e7337.name, _0x7e11e7);
    } else {
      _0x3e7337.msg(_0x3e7337.name, "", _0x7e11e7);
    }
  } else {
    _0x3e7337.log(_0x7e11e7);
  }
}
function _0x1d05d9(_0x527719) {
  function _0xd3bbc0(_0x1808ec, _0x53c7bd) {
    return _0x1808ec << _0x53c7bd | _0x1808ec >>> 32 - _0x53c7bd;
  }
  function _0x22f95a(_0x19e59a, _0x24933d) {
    var _0x1be547, _0x4f1fcf, _0x425980, _0x2f717d, _0x1ac6c5;
    _0x425980 = 2147483648 & _0x19e59a;
    _0x2f717d = 2147483648 & _0x24933d;
    _0x1be547 = 1073741824 & _0x19e59a;
    _0x4f1fcf = 1073741824 & _0x24933d;
    _0x1ac6c5 = (1073741823 & _0x19e59a) + (1073741823 & _0x24933d);
    return _0x1be547 & _0x4f1fcf ? 2147483648 ^ _0x1ac6c5 ^ _0x425980 ^ _0x2f717d : _0x1be547 | _0x4f1fcf ? 1073741824 & _0x1ac6c5 ? 3221225472 ^ _0x1ac6c5 ^ _0x425980 ^ _0x2f717d : 1073741824 ^ _0x1ac6c5 ^ _0x425980 ^ _0x2f717d : _0x1ac6c5 ^ _0x425980 ^ _0x2f717d;
  }
  function _0x12d1d8(_0x3f1a72, _0x4cba30, _0x4afd91) {
    return _0x3f1a72 & _0x4cba30 | ~_0x3f1a72 & _0x4afd91;
  }
  function _0x4c3cea(_0x334dad, _0x4a7c42, _0x16c2f6) {
    return _0x334dad & _0x16c2f6 | _0x4a7c42 & ~_0x16c2f6;
  }
  function _0x4e02ed(_0x1b4923, _0x15a5d4, _0x455c6c) {
    return _0x1b4923 ^ _0x15a5d4 ^ _0x455c6c;
  }
  function _0x2d2ef4(_0x2186ea, _0x389326, _0x55518a) {
    return _0x389326 ^ (_0x2186ea | ~_0x55518a);
  }
  function _0xc20410(_0x35c980, _0x51e2ef, _0x49def9, _0x152576, _0xa023f5, _0x5c8e09, _0x1e31c6) {
    _0x35c980 = _0x22f95a(_0x35c980, _0x22f95a(_0x22f95a(_0x12d1d8(_0x51e2ef, _0x49def9, _0x152576), _0xa023f5), _0x1e31c6));
    return _0x22f95a(_0xd3bbc0(_0x35c980, _0x5c8e09), _0x51e2ef);
  }
  function _0x1f60ea(_0x130008, _0x30caf9, _0x14a3eb, _0x3b29f1, _0xc33012, _0x13afc6, _0x4e265f) {
    _0x130008 = _0x22f95a(_0x130008, _0x22f95a(_0x22f95a(_0x4c3cea(_0x30caf9, _0x14a3eb, _0x3b29f1), _0xc33012), _0x4e265f));
    return _0x22f95a(_0xd3bbc0(_0x130008, _0x13afc6), _0x30caf9);
  }
  function _0x19a8be(_0x3e6fd3, _0x51a53e, _0x5c7da8, _0x31d700, _0x3761ad, _0xd4b39f, _0x37cbdd) {
    _0x3e6fd3 = _0x22f95a(_0x3e6fd3, _0x22f95a(_0x22f95a(_0x4e02ed(_0x51a53e, _0x5c7da8, _0x31d700), _0x3761ad), _0x37cbdd));
    return _0x22f95a(_0xd3bbc0(_0x3e6fd3, _0xd4b39f), _0x51a53e);
  }
  function _0x518ae1(_0x1c671f, _0x2561fc, _0x4c05d8, _0x4a4974, _0x40ef30, _0x147454, _0x5d7acd) {
    _0x1c671f = _0x22f95a(_0x1c671f, _0x22f95a(_0x22f95a(_0x2d2ef4(_0x2561fc, _0x4c05d8, _0x4a4974), _0x40ef30), _0x5d7acd));
    return _0x22f95a(_0xd3bbc0(_0x1c671f, _0x147454), _0x2561fc);
  }
  function _0x3eb6ca(_0x114e6b) {
    for (var _0x21d3a9, _0x3f89ed = _0x114e6b.length, _0x4970e9 = _0x3f89ed + 8, _0x2ddcbe = (_0x4970e9 - _0x4970e9 % 64) / 64, _0x3e3b48 = 16 * (_0x2ddcbe + 1), _0x285526 = new Array(_0x3e3b48 - 1), _0x3b26e1 = 0, _0xc82def = 0; _0x3f89ed > _0xc82def;) {
      _0x21d3a9 = (_0xc82def - _0xc82def % 4) / 4;
      _0x3b26e1 = _0xc82def % 4 * 8;
      _0x285526[_0x21d3a9] = _0x285526[_0x21d3a9] | _0x114e6b.charCodeAt(_0xc82def) << _0x3b26e1;
      _0xc82def++;
    }
    _0x21d3a9 = (_0xc82def - _0xc82def % 4) / 4;
    _0x3b26e1 = _0xc82def % 4 * 8;
    _0x285526[_0x21d3a9] = _0x285526[_0x21d3a9] | 128 << _0x3b26e1;
    _0x285526[_0x3e3b48 - 2] = _0x3f89ed << 3;
    _0x285526[_0x3e3b48 - 1] = _0x3f89ed >>> 29;
    return _0x285526;
  }
  function _0x74ddbb(_0x4f31d7) {
    var _0x46c4db,
      _0x36c117,
      _0x398fc2 = "",
      _0x5436ed = "";
    for (_0x36c117 = 0; 3 >= _0x36c117; _0x36c117++) {
      _0x46c4db = _0x4f31d7 >>> 8 * _0x36c117 & 255;
      _0x5436ed = "0" + _0x46c4db.toString(16);
      _0x398fc2 += _0x5436ed.substr(_0x5436ed.length - 2, 2);
    }
    return _0x398fc2;
  }
  function _0x74c697(_0x5ed210) {
    _0x5ed210 = _0x5ed210.replace(/\r\n/g, "\n");
    for (var _0x4f929d = "", _0x4a7373 = 0; _0x4a7373 < _0x5ed210.length; _0x4a7373++) {
      var _0x59c448 = _0x5ed210.charCodeAt(_0x4a7373);
      128 > _0x59c448 ? _0x4f929d += String.fromCharCode(_0x59c448) : _0x59c448 > 127 && 2048 > _0x59c448 ? (_0x4f929d += String.fromCharCode(_0x59c448 >> 6 | 192), _0x4f929d += String.fromCharCode(63 & _0x59c448 | 128)) : (_0x4f929d += String.fromCharCode(_0x59c448 >> 12 | 224), _0x4f929d += String.fromCharCode(_0x59c448 >> 6 & 63 | 128), _0x4f929d += String.fromCharCode(63 & _0x59c448 | 128));
    }
    return _0x4f929d;
  }
  var _0x2d1a3d,
    _0x1f760e,
    _0x3a6b56,
    _0x3c0892,
    _0x9236d3,
    _0x4ca573,
    _0x479783,
    _0x1e8731,
    _0x282168,
    _0x5c86a8 = [],
    _0x14f869 = 7,
    _0x3621a6 = 12,
    _0xf7c7c9 = 17,
    _0x44b124 = 22,
    _0x53f612 = 5,
    _0x2f5793 = 9,
    _0x212244 = 14,
    _0x20a3b5 = 20,
    _0x3b34d0 = 4,
    _0x142488 = 11,
    _0x39d910 = 16,
    _0x74bf34 = 23,
    _0x3d3330 = 6,
    _0x47724f = 10,
    _0x262e7c = 15,
    _0x4ba14c = 21;
  for (_0x527719 = _0x74c697(_0x527719), _0x5c86a8 = _0x3eb6ca(_0x527719), _0x4ca573 = 1732584193, _0x479783 = 4023233417, _0x1e8731 = 2562383102, _0x282168 = 271733878, _0x2d1a3d = 0; _0x2d1a3d < _0x5c86a8.length; _0x2d1a3d += 16) {
    _0x1f760e = _0x4ca573;
    _0x3a6b56 = _0x479783;
    _0x3c0892 = _0x1e8731;
    _0x9236d3 = _0x282168;
    _0x4ca573 = _0xc20410(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 0], _0x14f869, 3614090360);
    _0x282168 = _0xc20410(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 1], _0x3621a6, 3905402710);
    _0x1e8731 = _0xc20410(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 2], _0xf7c7c9, 606105819);
    _0x479783 = _0xc20410(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 3], _0x44b124, 3250441966);
    _0x4ca573 = _0xc20410(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 4], _0x14f869, 4118548399);
    _0x282168 = _0xc20410(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 5], _0x3621a6, 1200080426);
    _0x1e8731 = _0xc20410(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 6], _0xf7c7c9, 2821735955);
    _0x479783 = _0xc20410(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 7], _0x44b124, 4249261313);
    _0x4ca573 = _0xc20410(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 8], _0x14f869, 1770035416);
    _0x282168 = _0xc20410(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 9], _0x3621a6, 2336552879);
    _0x1e8731 = _0xc20410(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 10], _0xf7c7c9, 4294925233);
    _0x479783 = _0xc20410(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 11], _0x44b124, 2304563134);
    _0x4ca573 = _0xc20410(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 12], _0x14f869, 1804603682);
    _0x282168 = _0xc20410(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 13], _0x3621a6, 4254626195);
    _0x1e8731 = _0xc20410(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 14], _0xf7c7c9, 2792965006);
    _0x479783 = _0xc20410(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 15], _0x44b124, 1236535329);
    _0x4ca573 = _0x1f60ea(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 1], _0x53f612, 4129170786);
    _0x282168 = _0x1f60ea(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 6], _0x2f5793, 3225465664);
    _0x1e8731 = _0x1f60ea(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 11], _0x212244, 643717713);
    _0x479783 = _0x1f60ea(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 0], _0x20a3b5, 3921069994);
    _0x4ca573 = _0x1f60ea(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 5], _0x53f612, 3593408605);
    _0x282168 = _0x1f60ea(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 10], _0x2f5793, 38016083);
    _0x1e8731 = _0x1f60ea(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 15], _0x212244, 3634488961);
    _0x479783 = _0x1f60ea(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 4], _0x20a3b5, 3889429448);
    _0x4ca573 = _0x1f60ea(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 9], _0x53f612, 568446438);
    _0x282168 = _0x1f60ea(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 14], _0x2f5793, 3275163606);
    _0x1e8731 = _0x1f60ea(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 3], _0x212244, 4107603335);
    _0x479783 = _0x1f60ea(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 8], _0x20a3b5, 1163531501);
    _0x4ca573 = _0x1f60ea(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 13], _0x53f612, 2850285829);
    _0x282168 = _0x1f60ea(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 2], _0x2f5793, 4243563512);
    _0x1e8731 = _0x1f60ea(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 7], _0x212244, 1735328473);
    _0x479783 = _0x1f60ea(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 12], _0x20a3b5, 2368359562);
    _0x4ca573 = _0x19a8be(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 5], _0x3b34d0, 4294588738);
    _0x282168 = _0x19a8be(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 8], _0x142488, 2272392833);
    _0x1e8731 = _0x19a8be(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 11], _0x39d910, 1839030562);
    _0x479783 = _0x19a8be(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 14], _0x74bf34, 4259657740);
    _0x4ca573 = _0x19a8be(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 1], _0x3b34d0, 2763975236);
    _0x282168 = _0x19a8be(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 4], _0x142488, 1272893353);
    _0x1e8731 = _0x19a8be(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 7], _0x39d910, 4139469664);
    _0x479783 = _0x19a8be(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 10], _0x74bf34, 3200236656);
    _0x4ca573 = _0x19a8be(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 13], _0x3b34d0, 681279174);
    _0x282168 = _0x19a8be(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 0], _0x142488, 3936430074);
    _0x1e8731 = _0x19a8be(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 3], _0x39d910, 3572445317);
    _0x479783 = _0x19a8be(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 6], _0x74bf34, 76029189);
    _0x4ca573 = _0x19a8be(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 9], _0x3b34d0, 3654602809);
    _0x282168 = _0x19a8be(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 12], _0x142488, 3873151461);
    _0x1e8731 = _0x19a8be(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 15], _0x39d910, 530742520);
    _0x479783 = _0x19a8be(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 2], _0x74bf34, 3299628645);
    _0x4ca573 = _0x518ae1(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 0], _0x3d3330, 4096336452);
    _0x282168 = _0x518ae1(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 7], _0x47724f, 1126891415);
    _0x1e8731 = _0x518ae1(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 14], _0x262e7c, 2878612391);
    _0x479783 = _0x518ae1(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 5], _0x4ba14c, 4237533241);
    _0x4ca573 = _0x518ae1(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 12], _0x3d3330, 1700485571);
    _0x282168 = _0x518ae1(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 3], _0x47724f, 2399980690);
    _0x1e8731 = _0x518ae1(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 10], _0x262e7c, 4293915773);
    _0x479783 = _0x518ae1(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 1], _0x4ba14c, 2240044497);
    _0x4ca573 = _0x518ae1(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 8], _0x3d3330, 1873313359);
    _0x282168 = _0x518ae1(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 15], _0x47724f, 4264355552);
    _0x1e8731 = _0x518ae1(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 6], _0x262e7c, 2734768916);
    _0x479783 = _0x518ae1(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 13], _0x4ba14c, 1309151649);
    _0x4ca573 = _0x518ae1(_0x4ca573, _0x479783, _0x1e8731, _0x282168, _0x5c86a8[_0x2d1a3d + 4], _0x3d3330, 4149444226);
    _0x282168 = _0x518ae1(_0x282168, _0x4ca573, _0x479783, _0x1e8731, _0x5c86a8[_0x2d1a3d + 11], _0x47724f, 3174756917);
    _0x1e8731 = _0x518ae1(_0x1e8731, _0x282168, _0x4ca573, _0x479783, _0x5c86a8[_0x2d1a3d + 2], _0x262e7c, 718787259);
    _0x479783 = _0x518ae1(_0x479783, _0x1e8731, _0x282168, _0x4ca573, _0x5c86a8[_0x2d1a3d + 9], _0x4ba14c, 3951481745);
    _0x4ca573 = _0x22f95a(_0x4ca573, _0x1f760e);
    _0x479783 = _0x22f95a(_0x479783, _0x3a6b56);
    _0x1e8731 = _0x22f95a(_0x1e8731, _0x3c0892);
    _0x282168 = _0x22f95a(_0x282168, _0x9236d3);
  }
  var _0x55c311 = _0x74ddbb(_0x4ca573) + _0x74ddbb(_0x479783) + _0x74ddbb(_0x1e8731) + _0x74ddbb(_0x282168);
  return _0x55c311.toLowerCase();
}
function _0x49cc59() {
  var _0x2e08d8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x2ce1ce) {
    var _0x3d6669 = "";
    var _0x4e23bb, _0x25a310, _0x2ab496, _0x580a1c, _0x15dbe8, _0x182560, _0x5092a6;
    var _0x282d7b = 0;
    _0x2ce1ce = utf8Encode(_0x2ce1ce);
    while (_0x282d7b < _0x2ce1ce.length) {
      _0x4e23bb = _0x2ce1ce.charCodeAt(_0x282d7b++);
      _0x25a310 = _0x2ce1ce.charCodeAt(_0x282d7b++);
      _0x2ab496 = _0x2ce1ce.charCodeAt(_0x282d7b++);
      _0x580a1c = _0x4e23bb >> 2;
      _0x15dbe8 = (_0x4e23bb & 3) << 4 | _0x25a310 >> 4;
      _0x182560 = (_0x25a310 & 15) << 2 | _0x2ab496 >> 6;
      _0x5092a6 = _0x2ab496 & 63;
      if (isNaN(_0x25a310)) {
        _0x182560 = _0x5092a6 = 64;
      } else {
        if (isNaN(_0x2ab496)) {
          _0x5092a6 = 64;
        }
      }
      _0x3d6669 = _0x3d6669 + _0x2e08d8.charAt(_0x580a1c) + _0x2e08d8.charAt(_0x15dbe8) + _0x2e08d8.charAt(_0x182560) + _0x2e08d8.charAt(_0x5092a6);
    }
    return _0x3d6669;
  };
  this.decode = function (_0x2c60d3) {
    var _0x4d8d09 = "";
    var _0x537898, _0x2ecb7f, _0xdb2952;
    var _0x37be3e, _0x2fef3b, _0x1bc672, _0x49a92f;
    var _0x101ad0 = 0;
    _0x2c60d3 = _0x2c60d3.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x101ad0 < _0x2c60d3.length) {
      _0x37be3e = _0x2e08d8.indexOf(_0x2c60d3.charAt(_0x101ad0++));
      _0x2fef3b = _0x2e08d8.indexOf(_0x2c60d3.charAt(_0x101ad0++));
      _0x1bc672 = _0x2e08d8.indexOf(_0x2c60d3.charAt(_0x101ad0++));
      _0x49a92f = _0x2e08d8.indexOf(_0x2c60d3.charAt(_0x101ad0++));
      _0x537898 = _0x37be3e << 2 | _0x2fef3b >> 4;
      _0x2ecb7f = (_0x2fef3b & 15) << 4 | _0x1bc672 >> 2;
      _0xdb2952 = (_0x1bc672 & 3) << 6 | _0x49a92f;
      _0x4d8d09 = _0x4d8d09 + String.fromCharCode(_0x537898);
      if (_0x1bc672 !== 64) {
        _0x4d8d09 = _0x4d8d09 + String.fromCharCode(_0x2ecb7f);
      }
      if (_0x49a92f !== 64) {
        _0x4d8d09 = _0x4d8d09 + String.fromCharCode(_0xdb2952);
      }
    }
    _0x4d8d09 = utf8Decode(_0x4d8d09);
    return _0x4d8d09;
  };
  utf8Encode = function (_0x59c28f) {
    _0x59c28f = _0x59c28f.replace(/\r\n/g, "\n");
    var _0x28a93f = "";
    for (var _0x12670f = 0; _0x12670f < _0x59c28f.length; _0x12670f++) {
      var _0x29af2b = _0x59c28f.charCodeAt(_0x12670f);
      if (_0x29af2b < 128) {
        _0x28a93f += String.fromCharCode(_0x29af2b);
      } else {
        if (_0x29af2b > 127 && _0x29af2b < 2048) {
          _0x28a93f += String.fromCharCode(_0x29af2b >> 6 | 192);
          _0x28a93f += String.fromCharCode(_0x29af2b & 63 | 128);
        } else {
          _0x28a93f += String.fromCharCode(_0x29af2b >> 12 | 224);
          _0x28a93f += String.fromCharCode(_0x29af2b >> 6 & 63 | 128);
          _0x28a93f += String.fromCharCode(_0x29af2b & 63 | 128);
        }
      }
    }
    return _0x28a93f;
  };
  utf8Decode = function (_0x19f00a) {
    var _0x50ba31 = "";
    var _0x1911c8 = 0;
    var _0xd3288c = 0;
    var _0x2c8075 = 0;
    var _0x2d04a7 = 0;
    while (_0x1911c8 < _0x19f00a.length) {
      _0xd3288c = _0x19f00a.charCodeAt(_0x1911c8);
      if (_0xd3288c < 128) {
        _0x50ba31 += String.fromCharCode(_0xd3288c);
        _0x1911c8++;
      } else {
        if (_0xd3288c > 191 && _0xd3288c < 224) {
          _0x2c8075 = _0x19f00a.charCodeAt(_0x1911c8 + 1);
          _0x50ba31 += String.fromCharCode((_0xd3288c & 31) << 6 | _0x2c8075 & 63);
          _0x1911c8 += 2;
        } else {
          _0x2c8075 = _0x19f00a.charCodeAt(_0x1911c8 + 1);
          _0x2d04a7 = _0x19f00a.charCodeAt(_0x1911c8 + 2);
          _0x50ba31 += String.fromCharCode((_0xd3288c & 15) << 12 | (_0x2c8075 & 63) << 6 | _0x2d04a7 & 63);
          _0x1911c8 += 3;
        }
      }
    }
    return _0x50ba31;
  };
}
function _0x3e496c(_0x4b9cb5, _0x1c3623) {
  class _0x4042b0 {
    constructor(_0xccdae1) {
      this.env = _0xccdae1;
    }
    send(_0x16a92e, _0x27c6d8 = "GET") {
      _0x16a92e = typeof _0x16a92e === "string" ? {
        url: _0x16a92e
      } : _0x16a92e;
      let _0x6cb92 = this.get;
      if (_0x27c6d8 === "POST") {
        _0x6cb92 = this.post;
      }
      return new Promise((_0x341e7e, _0x3c10c4) => {
        _0x6cb92.call(this, _0x16a92e, (_0x136560, _0x449f4d, _0x1540ab) => {
          if (_0x136560) {
            _0x3c10c4(_0x136560);
          } else {
            _0x341e7e(_0x449f4d);
          }
        });
      });
    }
    get(_0x4dfc3a) {
      return this.send.call(this.env, _0x4dfc3a);
    }
    post(_0x25f29c) {
      return this.send.call(this.env, _0x25f29c, "POST");
    }
  }
  return new class {
    constructor(_0xf49648, _0x80fae) {
      this.name = _0xf49648;
      this.http = new _0x4042b0(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x80fae);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0xbacceb, _0x4cb8e4 = null) {
      try {
        return JSON.parse(_0xbacceb);
      } catch {
        return _0x4cb8e4;
      }
    }
    toStr(_0x3ad36c, _0x36b371 = null) {
      try {
        return JSON.stringify(_0x3ad36c);
      } catch {
        return _0x36b371;
      }
    }
    getjson(_0x18e743, _0x5f3aa3) {
      let _0x13cefd = _0x5f3aa3;
      const _0x221fda = this.getdata(_0x18e743);
      if (_0x221fda) {
        try {
          _0x13cefd = JSON.parse(this.getdata(_0x18e743));
        } catch {}
      }
      return _0x13cefd;
    }
    setjson(_0x52dbc2, _0x5612a0) {
      try {
        return this.setdata(JSON.stringify(_0x52dbc2), _0x5612a0);
      } catch {
        return false;
      }
    }
    getScript(_0x5e0431) {
      return new Promise(_0x15c7f5 => {
        const _0x42f7b8 = {
          url: _0x5e0431
        };
        this.get(_0x42f7b8, (_0x1295d8, _0x3ec7f5, _0x3b91df) => _0x15c7f5(_0x3b91df));
      });
    }
    runScript(_0x36ff3b, _0x5bc2c4) {
      return new Promise(_0x373386 => {
        let _0x5f13c8 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5f13c8 = _0x5f13c8 ? _0x5f13c8.replace(/\n/g, "").trim() : _0x5f13c8;
        let _0x39f168 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x39f168 = _0x39f168 ? _0x39f168 * 1 : 20;
        _0x39f168 = _0x5bc2c4 && _0x5bc2c4.timeout ? _0x5bc2c4.timeout : _0x39f168;
        const [_0x4579a9, _0x15aa00] = _0x5f13c8.split("@");
        const _0x1cb5dd = {
          script_text: _0x36ff3b,
          mock_type: "cron",
          timeout: _0x39f168
        };
        const _0x133fac = {
          "X-Key": _0x4579a9,
          Accept: "*/*"
        };
        const _0x5d9f2e = {
          url: "http: //" + _0x15aa00 + "/v1/scripting/evaluate",
          body: _0x1cb5dd,
          headers: _0x133fac
        };
        this.post(_0x5d9f2e, (_0x2df8a2, _0x3b4cd9, _0x4d8771) => _0x373386(_0x4d8771));
      }).catch(_0x4a3725 => this.logErr(_0x4a3725));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x485773 = this.path.resolve(this.dataFile);
        const _0xb38c33 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x122f41 = this.fs.existsSync(_0x485773);
        const _0x2dedd6 = !_0x122f41 && this.fs.existsSync(_0xb38c33);
        if (_0x122f41 || _0x2dedd6) {
          const _0x3a12d7 = _0x122f41 ? _0x485773 : _0xb38c33;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3a12d7));
          } catch (_0x1d438a) {
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
        const _0x2359b9 = this.path.resolve(this.dataFile);
        const _0x1b08d0 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x598be7 = this.fs.existsSync(_0x2359b9);
        const _0x577785 = !_0x598be7 && this.fs.existsSync(_0x1b08d0);
        const _0x1883bb = JSON.stringify(this.data);
        if (_0x598be7) {
          this.fs.writeFileSync(_0x2359b9, _0x1883bb);
        } else {
          if (_0x577785) {
            this.fs.writeFileSync(_0x1b08d0, _0x1883bb);
          } else {
            this.fs.writeFileSync(_0x2359b9, _0x1883bb);
          }
        }
      }
    }
    lodash_get(_0x9469aa, _0x12eefa, _0x19ea0f = undefined) {
      const _0x591d84 = _0x12eefa.replace(/[(d+)]/g, ".$1").split(".");
      let _0x34cbec = _0x9469aa;
      for (const _0x213bd0 of _0x591d84) {
        _0x34cbec = Object(_0x34cbec)[_0x213bd0];
        if (_0x34cbec === undefined) {
          return _0x19ea0f;
        }
      }
      return _0x34cbec;
    }
    lodash_set(_0x333d70, _0x20dddc, _0x5f82cc) {
      if (Object(_0x333d70) !== _0x333d70) {
        return _0x333d70;
      }
      if (!Array.isArray(_0x20dddc)) {
        _0x20dddc = _0x20dddc.toString().match(/[^.[]]+/g) || [];
      }
      _0x20dddc.slice(0, -1).reduce((_0x4148cf, _0x11d107, _0x5cfa6b) => Object(_0x4148cf[_0x11d107]) === _0x4148cf[_0x11d107] ? _0x4148cf[_0x11d107] : _0x4148cf[_0x11d107] = Math.abs(_0x20dddc[_0x5cfa6b + 1]) >> 0 === +_0x20dddc[_0x5cfa6b + 1] ? [] : {}, _0x333d70)[_0x20dddc[_0x20dddc.length - 1]] = _0x5f82cc;
      return _0x333d70;
    }
    getdata(_0x3b7287) {
      let _0x17314d = this.getval(_0x3b7287);
      if (/^@/.test(_0x3b7287)) {
        const [, _0x5dc306, _0x11584d] = /^@(.*?).(.*?)$/.exec(_0x3b7287);
        const _0x4787bc = _0x5dc306 ? this.getval(_0x5dc306) : "";
        if (_0x4787bc) {
          try {
            const _0x5e1139 = JSON.parse(_0x4787bc);
            _0x17314d = _0x5e1139 ? this.lodash_get(_0x5e1139, _0x11584d, "") : _0x17314d;
          } catch (_0x43cefb) {
            _0x17314d = "";
          }
        }
      }
      return _0x17314d;
    }
    setdata(_0x56efcc, _0x306f0a) {
      let _0x5d3a90 = false;
      if (/^@/.test(_0x306f0a)) {
        const [, _0x3ee3ea, _0x3d8565] = /^@(.*?).(.*?)$/.exec(_0x306f0a);
        const _0x39edee = this.getval(_0x3ee3ea);
        const _0x3d2f93 = _0x3ee3ea ? _0x39edee === "null" ? null : _0x39edee || "{}" : "{}";
        try {
          const _0x13c689 = JSON.parse(_0x3d2f93);
          this.lodash_set(_0x13c689, _0x3d8565, _0x56efcc);
          _0x5d3a90 = this.setval(JSON.stringify(_0x13c689), _0x3ee3ea);
        } catch (_0x155d5a) {
          const _0x96304f = {};
          this.lodash_set(_0x96304f, _0x3d8565, _0x56efcc);
          _0x5d3a90 = this.setval(JSON.stringify(_0x96304f), _0x3ee3ea);
        }
      } else {
        _0x5d3a90 = this.setval(_0x56efcc, _0x306f0a);
      }
      return _0x5d3a90;
    }
    getval(_0x4b37e3) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x4b37e3);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x4b37e3);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x4b37e3];
          } else {
            return this.data && this.data[_0x4b37e3] || null;
          }
        }
      }
    }
    setval(_0x20588a, _0x242d0c) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x20588a, _0x242d0c);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x20588a, _0x242d0c);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x242d0c] = _0x20588a;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x242d0c] || null;
          }
        }
      }
    }
    initGotEnv(_0x267f95) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x267f95) {
        _0x267f95.headers = _0x267f95.headers ? _0x267f95.headers : {};
        if (undefined === _0x267f95.headers.Cookie && undefined === _0x267f95.cookieJar) {
          _0x267f95.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x26d567, _0x4f10c6 = () => {}) {
      if (_0x26d567.headers) {
        delete _0x26d567.headers["Content-Type"];
        delete _0x26d567.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x26d567.headers = _0x26d567.headers || {};
          const _0x39a838 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x26d567.headers, _0x39a838);
        }
        $httpClient.get(_0x26d567, (_0x5e7eff, _0x22e5da, _0x2bfb4f) => {
          if (!_0x5e7eff && _0x22e5da) {
            _0x22e5da.body = _0x2bfb4f;
            _0x22e5da.statusCode = _0x22e5da.status;
          }
          _0x4f10c6(_0x5e7eff, _0x22e5da, _0x2bfb4f);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x26d567.opts = _0x26d567.opts || {};
            const _0x25315d = {
              hints: false
            };
            Object.assign(_0x26d567.opts, _0x25315d);
          }
          $task.fetch(_0x26d567).then(_0x46fb77 => {
            const {
              statusCode: _0x4c5cee,
              statusCode,
              headers,
              body
            } = _0x46fb77;
            const _0x421fd9 = {
              status: _0x4c5cee,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x4f10c6(null, _0x421fd9, body);
          }, _0x1f555b => _0x4f10c6(_0x1f555b));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x26d567);
            this.got(_0x26d567).on("redirect", (_0x5e4fc4, _0x32af36) => {
              try {
                if (_0x5e4fc4.headers["set-cookie"]) {
                  const _0x5d3350 = _0x5e4fc4.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x5d3350) {
                    this.ckjar.setCookieSync(_0x5d3350, null);
                  }
                  _0x32af36.cookieJar = this.ckjar;
                }
              } catch (_0x386c12) {
                this.logErr(_0x386c12);
              }
            }).then(_0xf9fc83 => {
              const {
                statusCode: _0x33a626,
                statusCode,
                headers,
                body
              } = _0xf9fc83;
              const _0x2e8e85 = {
                status: _0x33a626,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x4f10c6(null, _0x2e8e85, body);
            }, _0x4b56e5 => {
              const {
                message: _0x961b0f,
                response: _0x3f46f5
              } = _0x4b56e5;
              _0x4f10c6(_0x961b0f, _0x3f46f5, _0x3f46f5 && _0x3f46f5.body);
            });
          }
        }
      }
    }
    post(_0x214b97, _0x4213b2 = () => {}) {
      const _0x231440 = _0x214b97.method ? _0x214b97.method.toLocaleLowerCase() : "post";
      if (_0x214b97.body && _0x214b97.headers && !_0x214b97.headers["Content-Type"]) {
        _0x214b97.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x214b97.headers) {
        delete _0x214b97.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x214b97.headers = _0x214b97.headers || {};
          const _0x32b3cc = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x214b97.headers, _0x32b3cc);
        }
        $httpClient[_0x231440](_0x214b97, (_0x412379, _0x3b86d0, _0x30f312) => {
          if (!_0x412379 && _0x3b86d0) {
            _0x3b86d0.body = _0x30f312;
            _0x3b86d0.statusCode = _0x3b86d0.status;
          }
          _0x4213b2(_0x412379, _0x3b86d0, _0x30f312);
        });
      } else {
        if (this.isQuanX()) {
          _0x214b97.method = _0x231440;
          if (this.isNeedRewrite) {
            _0x214b97.opts = _0x214b97.opts || {};
            const _0x303554 = {
              hints: false
            };
            Object.assign(_0x214b97.opts, _0x303554);
          }
          $task.fetch(_0x214b97).then(_0x5100cf => {
            const {
              statusCode: _0x82446a,
              statusCode,
              headers,
              body
            } = _0x5100cf;
            const _0xd2d317 = {
              status: _0x82446a,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x4213b2(null, _0xd2d317, body);
          }, _0x34d9d7 => _0x4213b2(_0x34d9d7));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x214b97);
            const {
              url,
              ..._0x5b8c96
            } = _0x214b97;
            this.got[_0x231440](url, _0x5b8c96).then(_0x555267 => {
              const {
                statusCode: _0xc32f97,
                statusCode,
                headers,
                body
              } = _0x555267;
              const _0x2f2645 = {
                status: _0xc32f97,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x4213b2(null, _0x2f2645, body);
            }, _0x3a4405 => {
              const {
                message: _0x20743,
                response: _0x33fce5
              } = _0x3a4405;
              _0x4213b2(_0x20743, _0x33fce5, _0x33fce5 && _0x33fce5.body);
            });
          }
        }
      }
    }
    put(_0x2c1117, _0x2fc859 = () => {}) {
      const _0xdf8772 = _0x2c1117.method ? _0x2c1117.method.toLocaleLowerCase() : "put";
      if (_0x2c1117.body && _0x2c1117.headers && !_0x2c1117.headers["Content-Type"]) {
        _0x2c1117.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x2c1117.headers) {
        delete _0x2c1117.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x2c1117.headers = _0x2c1117.headers || {};
          const _0x5f307f = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x2c1117.headers, _0x5f307f);
        }
        $httpClient[_0xdf8772](_0x2c1117, (_0x489f40, _0x598fd2, _0x1a5f70) => {
          if (!_0x489f40 && _0x598fd2) {
            _0x598fd2.body = _0x1a5f70;
            _0x598fd2.statusCode = _0x598fd2.status;
          }
          _0x2fc859(_0x489f40, _0x598fd2, _0x1a5f70);
        });
      } else {
        if (this.isQuanX()) {
          _0x2c1117.method = _0xdf8772;
          if (this.isNeedRewrite) {
            _0x2c1117.opts = _0x2c1117.opts || {};
            const _0x54bc86 = {
              hints: false
            };
            Object.assign(_0x2c1117.opts, _0x54bc86);
          }
          $task.fetch(_0x2c1117).then(_0x41395b => {
            const {
              statusCode: _0x501787,
              statusCode,
              headers,
              body
            } = _0x41395b;
            const _0xbbc065 = {
              status: _0x501787,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2fc859(null, _0xbbc065, body);
          }, _0x26f78a => _0x2fc859(_0x26f78a));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2c1117);
            const {
              url,
              ..._0x1e6ce9
            } = _0x2c1117;
            this.got[_0xdf8772](url, _0x1e6ce9).then(_0x413e3d => {
              const {
                statusCode: _0x2a3326,
                statusCode,
                headers,
                body
              } = _0x413e3d;
              const _0x4909e3 = {
                status: _0x2a3326,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2fc859(null, _0x4909e3, body);
            }, _0x60f3cd => {
              const {
                message: _0x3799bf,
                response: _0x3a9dd8
              } = _0x60f3cd;
              _0x2fc859(_0x3799bf, _0x3a9dd8, _0x3a9dd8 && _0x3a9dd8.body);
            });
          }
        }
      }
    }
    time(_0x2bc0af, _0x157d1d = null) {
      const _0x4ffccf = _0x157d1d ? new Date(_0x157d1d) : new Date();
      const _0x5a3f49 = {
        "M+": _0x4ffccf.getMonth() + 1,
        "d+": _0x4ffccf.getDate(),
        "H+": _0x4ffccf.getHours(),
        "m+": _0x4ffccf.getMinutes(),
        "s+": _0x4ffccf.getSeconds(),
        "q+": Math.floor((_0x4ffccf.getMonth() + 3) / 3),
        S: _0x4ffccf.getMilliseconds()
      };
      if (/(y+)/.test(_0x2bc0af)) {
        _0x2bc0af = _0x2bc0af.replace(RegExp.$1, (_0x4ffccf.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x366f5b in _0x5a3f49) if (new RegExp("(" + _0x366f5b + ")").test(_0x2bc0af)) {
        _0x2bc0af = _0x2bc0af.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x5a3f49[_0x366f5b] : ("00" + _0x5a3f49[_0x366f5b]).substr(("" + _0x5a3f49[_0x366f5b]).length));
      }
      return _0x2bc0af;
    }
    msg(_0x5be2cb = _0x4b9cb5, _0x351615 = "", _0xd6654e = "", _0x5455ca) {
      const _0x2e2158 = _0xa1d983 => {
        if (!_0xa1d983) {
          return _0xa1d983;
        }
        if (typeof _0xa1d983 === "string") {
          if (this.isLoon()) {
            return _0xa1d983;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0xa1d983
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0xa1d983
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0xa1d983 === "object") {
            if (this.isLoon()) {
              let _0x4a6250 = _0xa1d983.openUrl || _0xa1d983.url || _0xa1d983["open-url"];
              let _0x130d4b = _0xa1d983.mediaUrl || _0xa1d983["media-url"];
              const _0x14a523 = {
                openUrl: _0x4a6250,
                mediaUrl: _0x130d4b
              };
              return _0x14a523;
            } else {
              if (this.isQuanX()) {
                let _0x4dc760 = _0xa1d983["open-url"] || _0xa1d983.url || _0xa1d983.openUrl;
                let _0x39ea0e = _0xa1d983["media-url"] || _0xa1d983.mediaUrl;
                const _0x4791ca = {
                  "open-url": _0x4dc760,
                  "media-url": _0x39ea0e
                };
                return _0x4791ca;
              } else {
                if (this.isSurge()) {
                  let _0x3146f9 = _0xa1d983.url || _0xa1d983.openUrl || _0xa1d983["open-url"];
                  const _0x594c4e = {
                    url: _0x3146f9
                  };
                  return _0x594c4e;
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
          $notification.post(_0x5be2cb, _0x351615, _0xd6654e, _0x2e2158(_0x5455ca));
        } else {
          if (this.isQuanX()) {
            $notify(_0x5be2cb, _0x351615, _0xd6654e, _0x2e2158(_0x5455ca));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x2232bf = ["", "==============📣系统通知📣=============="];
        _0x2232bf.push(_0x5be2cb);
        _0x351615 ? _0x2232bf.push(_0x351615) : "";
        _0xd6654e ? _0x2232bf.push(_0xd6654e) : "";
        console.log(_0x2232bf.join("\n"));
        this.logs = this.logs.concat(_0x2232bf);
      }
    }
    log(..._0x449c04) {
      if (_0x449c04.length > 0) {
        this.logs = [...this.logs, ..._0x449c04];
      }
      console.log(_0x449c04.join(this.logSeparator));
    }
    logErr(_0x1d4e3b, _0x318542) {
      const _0x9648e8 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x9648e8) {
        this.log("", "❗️" + this.name + ", 错误!", _0x1d4e3b);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x1d4e3b.stack);
      }
    }
    wait(_0x2e3724) {
      return new Promise(_0x405d9a => setTimeout(_0x405d9a, _0x2e3724));
    }
    done(_0x36d7d3 = {}) {
      const _0x56a77a = new Date().getTime();
      const _0x2d50d3 = (_0x56a77a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x2d50d3 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x36d7d3);
      }
    }
  }(_0x4b9cb5, _0x1c3623);
}