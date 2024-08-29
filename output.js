//Thu Aug 29 2024 14:17:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let targetTime = 8000;
let step = 360;
let taskNum = 10;
const _0x145112 = "中青看点听歌",
  _0x499238 = _0x425894(_0x145112),
  _0x3ecb29 = 1;
let _0x4340ac = "",
  _0x38699c;
var _0x352f7a = require("crypto-js");
let _0x54173e = (_0x499238.isNode() ? process.env.zqkdCookie : _0x499238.getdata("zqkdCookie")) || "",
  _0x2ce0ec = [],
  _0x324a45 = 0,
  _0x5add2f = "zqkd_audio_pro",
  _0x2a4dc4 = false,
  _0x1e48ac = 0,
  _0x38eba4 = [],
  _0x13d00a = [],
  _0xd9abb2 = [],
  _0x581290 = "p=zUJybc31G2V0%3D",
  _0x17e38f = "app_name=zqkd_app&app_version=3.9.8&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1031&device_brand=HUAWEI&device_id=55903361&device_model=TAS-AN00&device_platform=android&device_type=android&dpi=480&inner_version=202108181534&language=zh-CN&memory=7&mi=0&mobile_type=1&net_type=1&network_type=WIFI&oaid=9bdf7bff-f3fe-2b18-5fff-3b3f3fd6873d&openudid=f2111c392e056b84&os_api=29&os_version=TAS-AN00+10.0.0.133%28C00E132R5P1%29&param=box_six&request_time=1634562471&resolution=1080x2259&rom_version=TAS-AN00+10.0.0.133%28C00E132R5P1%29&s_ad=jYFg4QJ5A6eY%3Db6-Jhj-LiXHYrVhu-F48x17yWx9eEyD5&sm_device_id=2020031618154539f1a2741679d27a72c6745d9ed13e6801c4b79111353999&storage=109.35&action=task_reward_action&",
  _0x4737e0 = "&sign=01e8102fab93e458542c5155a3b8b734",
  _0x20ca09 = "6HP",
  _0x29e34e = "jS",
  _0x1d72c = "ZFH",
  _0x6a5e4 = _0x20ca09 + _0x29e34e + _0x1d72c;
!(async () => {
  if (typeof $request !== "undefined") {
    _0x499238.msg(_0x145112 + ": 此脚本不做重写，请检查重写设置");
  } else {
    await _0x5ea4f1();
    if (_0x2a4dc4 == false) {
      return;
    }
    if (!(await _0x594f3e())) {
      return;
    }
    await _0x400335();
    let _0x81879b = Math.ceil(targetTime / step),
      _0x47b25c = _0x2ce0ec.length;
    console.log("\n开始刷听歌时长，目标时间为" + targetTime + "秒，每次刷" + step + "秒，循环" + _0x81879b + "次\n");
    for (let _0x3cde23 = 0; _0x3cde23 < _0x81879b; _0x3cde23++) {
      let _0x5ab626 = 0;
      for (_0x324a45 = 0; _0x324a45 < _0x47b25c && _0x1e48ac < _0x47b25c; _0x324a45++) {
        _0xd9abb2[_0x324a45] == 1 && _0x13d00a[_0x324a45] < targetTime && (_0x5ab626 = 1, _0x500be2(step, _0x324a45), await _0x499238.wait(60));
      }
      if (_0x5ab626 == 1) {
        await _0x499238.wait(1000);
      }
    }
    console.log("\n开始领取听歌任务奖励\n");
    for (let _0xf57033 = 0; _0xf57033 < taskNum; _0xf57033++) {
      rewardItem = {
        name: "ximalaya",
        task: "" + (_0xf57033 + 1),
        type: "reward"
      };
      for (_0x324a45 = 0; _0x324a45 < _0x2ce0ec.length; _0x324a45++) {
        let _0x3d3dad = await _0x3a94a6(_0x324a45, rewardItem);
        _0x2e0be5(_0x3d3dad, _0xf57033, _0x324a45);
        await _0x499238.wait(60);
      }
      const _0x307b5d = {
        name: "ximalaya_double",
        task: "" + (_0xf57033 + 1),
        type: "double"
      };
      rewardItem = _0x307b5d;
      for (_0x324a45 = 0; _0x324a45 < _0x2ce0ec.length; _0x324a45++) {
        let _0x197e2e = await _0x3a94a6(_0x324a45, rewardItem);
        _0x28d640(_0x197e2e, _0xf57033, _0x324a45);
        await _0x499238.wait(60);
      }
    }
    await _0x499238.wait(2000);
    await _0xb34a5c();
  }
})().catch(_0x43e531 => _0x499238.logErr(_0x43e531)).finally(() => _0x499238.done());
async function _0x3f040f() {
  notifyBody = _0x145112 + "运行通知\n\n" + _0x4340ac;
  _0x3ecb29 != 1 && console.log(notifyBody);
  _0x3ecb29 == 1 && _0x499238.msg(notifyBody);
}
async function _0x594f3e() {
  let _0x123dab = _0x54173e.split("@");
  for (let _0x270999 of _0x123dab) if (_0x270999) {
    _0x2ce0ec.push(_0x270999);
  }
  if (_0x2ce0ec.length == 0) {
    console.log("未找到有效的zqkdCookie");
    return false;
  }
  console.log("共找到" + _0x2ce0ec.length + "个用户");
  return true;
}
function _0x12005d(_0x35471c) {
  let _0x3cb7f3 = "",
    _0x541469 = "",
    _0x40dcbf = "";
  if (_0x35471c.indexOf("zqkey=") > -1) {
    _0x541469 = _0x35471c.match(/zqkey=([\w-]+)/)[1];
  } else {
    _0x35471c.indexOf("cookie=") > -1 && (_0x541469 = _0x35471c.match(/cookie=([\w-]+)/)[1]);
  }
  if (_0x35471c.indexOf("zqkey_id=") > -1) {
    _0x40dcbf = _0x35471c.match(/zqkey_id=([\w-]+)/)[1];
  } else {
    _0x35471c.indexOf("cookie_id=") > -1 && (_0x40dcbf = _0x35471c.match(/cookie_id=([\w-]+)/)[1]);
  }
  _0x35471c.indexOf("uid=") > -1 && (uid = _0x35471c.match(/uid=([\w-]+)/)[1]);
  _0x3cb7f3 = "uid=" + uid + "&zqkey=" + _0x541469 + "&zqkey_id=" + _0x40dcbf;
  return _0x3cb7f3;
}
async function _0x5ea4f1() {
  let _0x3957a1 = _0x5cdcce();
  const _0x422cd0 = {
    url: "https://leafxcy.coding.net/p/validcode/d/validCode/git/raw/master/code.json",
    headers: ""
  };
  return new Promise(_0x482f16 => {
    _0x499238.get(_0x422cd0, async (_0x20307a, _0xfd64d1, _0x3646a2) => {
      try {
        if (_0x20307a) {
          console.log(_0x3957a1 + ": post请求失败");
          console.log(JSON.stringify(_0x20307a));
          _0x499238.logErr(_0x20307a);
        } else {
          try {
            let _0x4066d1 = JSON.parse(_0x3646a2);
            _0x4066d1["" + _0x5add2f] && _0x4066d1["" + _0x5add2f] == 1 ? (_0x2a4dc4 = true, console.log(_0x4066d1.msg)) : console.log(_0x4066d1.errorMsg);
          } catch (_0x2373c9) {
            _0x499238.logErr(_0x2373c9, _0xfd64d1);
          } finally {
            _0x482f16();
          }
        }
      } catch (_0x2120ac) {
        _0x499238.logErr(_0x2120ac, _0xfd64d1);
      } finally {
        _0x482f16();
      }
    });
  });
}
async function _0x400335() {
  for (_0x324a45 = 0; _0x324a45 < _0x2ce0ec.length; _0x324a45++) {
    _0x38eba4.push(0);
    _0x13d00a.push(0);
    _0xd9abb2.push(1);
  }
}
async function _0xb34a5c() {
  console.log("============================");
  for (_0x324a45 = 0; _0x324a45 < _0x2ce0ec.length; _0x324a45++) {
    console.log("账号" + (_0x324a45 + 1) + "本轮共获得了" + _0x38eba4[_0x324a45] + "金币");
  }
}
async function _0x3a94a6(_0x5ad3f0, _0x4e77cd) {
  let _0x2c8c41 = "",
    _0xca8e58 = "",
    _0x5e2717 = "action=" + _0x4e77cd.name;
  if (_0x4e77cd.task) {
    if (_0x4e77cd.type == "reward") {
      _0xca8e58 = "param=" + _0x4e77cd.task + "&";
    } else {
      _0x4e77cd.type == "double" && (_0xca8e58 = "index=" + _0x4e77cd.task + "&");
    }
  }
  _0x2c8c41 = _0x17e38f.replace(/action=[\w_]+/g, _0x5e2717);
  _0x2c8c41 = _0x2c8c41.replace(/param=[\w_]+\&/g, _0xca8e58);
  _0x2c8c41 = _0x2c8c41 + _0x2ce0ec[_0x5ad3f0] + _0x4737e0;
  encodeBody = _0x1d29ae(_0x2c8c41);
  hexBody = _0x352f7a.enc.Hex.parse(encodeBody);
  base64Body = _0x352f7a.enc.Base64.stringify(hexBody);
  replaceBody3 = base64Body.replace(/\+/g, "-");
  replaceBody4 = replaceBody3.replace(/\//g, "_");
  finalBody = encodeURIComponent(replaceBody4);
  finalBody = _0x581290 + finalBody + "==";
  return finalBody;
}
async function _0x500be2(_0x4eb0d3, _0x441d70) {
  let _0x1c3206 = _0x5cdcce(),
    _0x4a21d1 = "access=4G&app_name=zqkd_app&app_version=3.9.8&version_code=67&sec=" + _0x4eb0d3 + "&" + _0x2ce0ec[_0x441d70],
    _0x2c85a0 = "https://kandian.wkandian.com/V17/Ximalaya/setCompleteSec.json",
    _0x30585b = _0x3ce0fc(_0x2c85a0, _0x4a21d1);
  await _0x4ab843(_0x30585b, _0x1c3206);
  let _0x20f6cb = _0x38699c;
  if (!_0x20f6cb) {
    return;
  }
  _0x20f6cb.success == true ? _0x20f6cb.items && (console.log("账号" + (_0x441d70 + 1) + "更新听歌时长成功：今日听歌时长" + _0x20f6cb.items + "秒"), _0x13d00a[_0x441d70] = parseInt(_0x20f6cb.items), _0xd9abb2[_0x441d70] == 1 && _0x13d00a[_0x441d70] >= targetTime && (_0xd9abb2[_0x441d70] = 0, _0x1e48ac++)) : console.log("账号" + (_0x441d70 + 1) + "更新听歌时长失败：" + _0x20f6cb.message);
}
async function _0x2e0be5(_0x45069f, _0x547199, _0x399fdd) {
  let _0x32c33d = _0x5cdcce(),
    _0x574337 = "https://kandian.wkandian.com/v5/CommonReward/toGetReward.json",
    _0x3e73e3 = _0x3ce0fc(_0x574337, _0x45069f);
  await _0x4ab843(_0x3e73e3, _0x32c33d);
  let _0x498631 = _0x38699c;
  if (!_0x498631) {
    return;
  }
  _0x498631.success == true ? (console.log("用户" + (_0x399fdd + 1) + "领取听歌任务" + (_0x547199 + 1) + "奖励成功，获得" + _0x498631.items.score + "金币"), _0x38eba4[_0x399fdd] += parseInt(_0x498631.items.score)) : console.log("用户" + (_0x399fdd + 1) + "领取听歌任务" + (_0x547199 + 1) + "奖励失败：" + _0x498631.message);
}
async function _0x28d640(_0x4d42ac, _0x55904a, _0x195419) {
  let _0x1d0b0f = _0x5cdcce(),
    _0x20b23b = "https://kandian.wkandian.com/v5/CommonReward/toDouble.json",
    _0x55b2e2 = _0x3ce0fc(_0x20b23b, _0x4d42ac);
  await _0x4ab843(_0x55b2e2, _0x1d0b0f);
  let _0x547467 = _0x38699c;
  if (!_0x547467) {
    return;
  }
  _0x547467.success == true ? (console.log("用户" + (_0x195419 + 1) + "领取听歌任务" + (_0x55904a + 1) + "翻倍奖励成功，获得" + _0x547467.items.score + "金币"), _0x38eba4[_0x195419] += parseInt(_0x547467.items.score)) : console.log("用户" + (_0x195419 + 1) + "领取听歌任务" + (_0x55904a + 1) + "翻倍奖励失败：" + _0x547467.message);
}
function _0x3ce0fc(_0x5bd173, _0x497ae1) {
  let _0xd49645 = Math.floor(new Date().getTime() / 1000);
  const _0x3ec7f5 = {
    request_time: _0xd49645,
    Host: "kandian.wkandian.com",
    "device-model": "VOG-AL10",
    "device-platform": "android",
    Connection: "keep-alive"
  };
  const _0x588f34 = {
    url: _0x5bd173,
    headers: _0x3ec7f5,
    body: _0x497ae1
  };
  return _0x588f34;
}
function _0x288bb5(_0x379107) {
  let _0x1e1d8 = Math.floor(new Date().getTime() / 1000);
  const _0x525ef9 = {
    request_time: _0x1e1d8,
    Host: "kandian.wkandian.com",
    "device-model": "VOG-AL10",
    "device-platform": "android",
    Connection: "keep-alive"
  };
  const _0x7ef554 = {
    url: _0x379107,
    headers: _0x525ef9
  };
  return _0x7ef554;
}
async function _0x4ab843(_0x4cf56a, _0x41370f) {
  _0x38699c = null;
  return new Promise(_0x5ecbce => {
    _0x499238.post(_0x4cf56a, async (_0x3023cd, _0x5ae5b2, _0x584147) => {
      try {
        if (_0x3023cd) {
          console.log(_0x41370f + ": post请求失败");
          console.log(JSON.stringify(_0x3023cd));
          _0x499238.logErr(_0x3023cd);
        } else {
          if (_0x21ecc1(_0x584147)) {
            _0x38699c = JSON.parse(_0x584147);
          }
        }
      } catch (_0x1208c6) {
        _0x499238.logErr(_0x1208c6, _0x5ae5b2);
      } finally {
        _0x5ecbce();
      }
    });
  });
}
async function _0x3e96bd(_0x596d27, _0x498b65) {
  _0x38699c = null;
  return new Promise(_0x203590 => {
    _0x499238.get(_0x596d27, async (_0x23e87d, _0x6b5dcb, _0xacdebc) => {
      try {
        if (_0x23e87d) {
          console.log(_0x498b65 + ": get请求失败");
          console.log(JSON.stringify(_0x23e87d));
          _0x499238.logErr(_0x23e87d);
        } else {
          if (_0x21ecc1(_0xacdebc, _0x498b65)) {
            _0x38699c = JSON.parse(_0xacdebc);
          }
        }
      } catch (_0x53ff9b) {
        _0x499238.logErr(_0x53ff9b, _0x6b5dcb);
      } finally {
        _0x203590();
      }
    });
  });
}
function _0x21ecc1(_0x6a0587, _0x22a648) {
  try {
    if (typeof JSON.parse(_0x6a0587) == "object") {
      return true;
    } else {
      console.log("Function " + _0x22a648 + ": 未知失败");
      console.log(_0x6a0587);
    }
  } catch (_0x2d32d8) {
    console.log(_0x2d32d8);
    console.log("Function " + _0x22a648 + ": 服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x2615bf(_0x2643d5, _0x2a5702) {
  return _0x2643d5 < _0x2a5702 ? _0x2643d5 : _0x2a5702;
}
function _0x4b1825(_0x1e7af5, _0x13c68b) {
  return _0x1e7af5 < _0x13c68b ? _0x13c68b : _0x1e7af5;
}
function _0x5cdcce() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}
function _0x1d29ae(_0x462fe7) {
  var _0x5c0d9d = _0x352f7a.enc.Utf8.parse(_0x6a5e4),
    _0x3f4ba9 = _0x352f7a.enc.Utf8.parse(_0x6a5e4),
    _0x3f84b6 = _0x352f7a.enc.Utf8.parse(_0x462fe7);
  encrypted = _0x352f7a.DES.encrypt(_0x3f84b6, _0x5c0d9d, {
    iv: _0x3f4ba9,
    mode: _0x352f7a.mode.CBC,
    padding: _0x352f7a.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}
function _0x23ea22(_0x53eba4) {
  var _0xf8b5be = _0x352f7a.enc.Utf8.parse(_0x6a5e4),
    _0x3b50f5 = _0x352f7a.enc.Utf8.parse(_0x6a5e4),
    _0x27a1e0 = _0x352f7a.DES.decrypt({
      ciphertext: _0x352f7a.enc.Base64.parse(_0x53eba4)
    }, _0xf8b5be, {
      iv: _0x3b50f5,
      mode: _0x352f7a.mode.CBC,
      padding: _0x352f7a.pad.Pkcs7
    });
  return _0x27a1e0.toString(_0x352f7a.enc.Utf8);
}
function _0x5d155c(_0x5a32f5 = 12) {
  let _0x598105 = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x50edfd = _0x598105.length,
    _0x2f085b = "";
  for (i = 0; i < _0x5a32f5; i++) {
    _0x2f085b += _0x598105.charAt(Math.floor(Math.random() * _0x50edfd));
  }
  return _0x2f085b;
}
function _0x425894(_0x573c99, _0x2781e9) {
  class _0x28de50 {
    constructor(_0x1dda80) {
      this.env = _0x1dda80;
    }
    send(_0x4de5fa, _0x16bfc2 = "GET") {
      _0x4de5fa = "string" == typeof _0x4de5fa ? {
        url: _0x4de5fa
      } : _0x4de5fa;
      let _0x4025d0 = this.get;
      "POST" === _0x16bfc2 && (_0x4025d0 = this.post);
      return new Promise((_0xe36b7d, _0x5a3b4e) => {
        _0x4025d0.call(this, _0x4de5fa, (_0x4d16b7, _0x41435c, _0x552585) => {
          _0x4d16b7 ? _0x5a3b4e(_0x4d16b7) : _0xe36b7d(_0x41435c);
        });
      });
    }
    get(_0x2d1992) {
      return this.send.call(this.env, _0x2d1992);
    }
    post(_0x4c2230) {
      return this.send.call(this.env, _0x4c2230, "POST");
    }
  }
  return new class {
    constructor(_0x4a40f1, _0x2eb683) {
      this.name = _0x4a40f1;
      this.http = new _0x28de50(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2eb683);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x17ed8c, _0x265cb0 = null) {
      try {
        return JSON.parse(_0x17ed8c);
      } catch {
        return _0x265cb0;
      }
    }
    toStr(_0x5033d0, _0x3d9a94 = null) {
      try {
        return JSON.stringify(_0x5033d0);
      } catch {
        return _0x3d9a94;
      }
    }
    getjson(_0x53489b, _0x19a47a) {
      let _0x115682 = _0x19a47a;
      const _0x1bb6b5 = this.getdata(_0x53489b);
      if (_0x1bb6b5) {
        try {
          _0x115682 = JSON.parse(this.getdata(_0x53489b));
        } catch {}
      }
      return _0x115682;
    }
    setjson(_0x4856fb, _0x7f3add) {
      try {
        return this.setdata(JSON.stringify(_0x4856fb), _0x7f3add);
      } catch {
        return !1;
      }
    }
    getScript(_0x57deae) {
      return new Promise(_0x1f32f4 => {
        const _0xb4e88 = {
          url: _0x57deae
        };
        this.get(_0xb4e88, (_0x257e64, _0x4c7b04, _0x13c909) => _0x1f32f4(_0x13c909));
      });
    }
    runScript(_0x166ecb, _0x1cfea7) {
      return new Promise(_0x2c168d => {
        let _0x5715f3 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5715f3 = _0x5715f3 ? _0x5715f3.replace(/\n/g, "").trim() : _0x5715f3;
        let _0x24f6c5 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x24f6c5 = _0x24f6c5 ? 1 * _0x24f6c5 : 20;
        _0x24f6c5 = _0x1cfea7 && _0x1cfea7.timeout ? _0x1cfea7.timeout : _0x24f6c5;
        const _0x38d2a7 = {
          script_text: _0x166ecb,
          mock_type: "cron",
          timeout: _0x24f6c5
        };
        const [_0x8613a5, _0x5a7555] = _0x5715f3.split("@"),
          _0x3060db = {
            url: "http://" + _0x5a7555 + "/v1/scripting/evaluate",
            body: _0x38d2a7,
            headers: {
              "X-Key": _0x8613a5,
              Accept: "*/*"
            }
          };
        this.post(_0x3060db, (_0xf11a4d, _0x132192, _0x1541dc) => _0x2c168d(_0x1541dc));
      }).catch(_0x1838a9 => this.logErr(_0x1838a9));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x492b43 = this.path.resolve(this.dataFile),
          _0x4d05ce = this.path.resolve(process.cwd(), this.dataFile),
          _0x23e67c = this.fs.existsSync(_0x492b43),
          _0x2f640b = !_0x23e67c && this.fs.existsSync(_0x4d05ce);
        if (!_0x23e67c && !_0x2f640b) {
          return {};
        }
        {
          const _0x21d489 = _0x23e67c ? _0x492b43 : _0x4d05ce;
          try {
            return JSON.parse(this.fs.readFileSync(_0x21d489));
          } catch (_0x127181) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3b09e6 = this.path.resolve(this.dataFile),
          _0x519959 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4c968f = this.fs.existsSync(_0x3b09e6),
          _0x254bb5 = !_0x4c968f && this.fs.existsSync(_0x519959),
          _0x2e775a = JSON.stringify(this.data);
        _0x4c968f ? this.fs.writeFileSync(_0x3b09e6, _0x2e775a) : _0x254bb5 ? this.fs.writeFileSync(_0x519959, _0x2e775a) : this.fs.writeFileSync(_0x3b09e6, _0x2e775a);
      }
    }
    lodash_get(_0x2b3c8f, _0x2eed68, _0x4417a0) {
      const _0x3b9121 = _0x2eed68.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x23823b = _0x2b3c8f;
      for (const _0x10f2df of _0x3b9121) if (_0x23823b = Object(_0x23823b)[_0x10f2df], void 0 === _0x23823b) {
        return _0x4417a0;
      }
      return _0x23823b;
    }
    lodash_set(_0x124902, _0x173e14, _0xa71921) {
      return Object(_0x124902) !== _0x124902 ? _0x124902 : (Array.isArray(_0x173e14) || (_0x173e14 = _0x173e14.toString().match(/[^.[\]]+/g) || []), _0x173e14.slice(0, -1).reduce((_0x56d38e, _0x186886, _0x37f792) => Object(_0x56d38e[_0x186886]) === _0x56d38e[_0x186886] ? _0x56d38e[_0x186886] : _0x56d38e[_0x186886] = Math.abs(_0x173e14[_0x37f792 + 1]) >> 0 == +_0x173e14[_0x37f792 + 1] ? [] : {}, _0x124902)[_0x173e14[_0x173e14.length - 1]] = _0xa71921, _0x124902);
    }
    getdata(_0x492cad) {
      let _0x240029 = this.getval(_0x492cad);
      if (/^@/.test(_0x492cad)) {
        const [, _0x30a335, _0x4e9b7f] = /^@(.*?)\.(.*?)$/.exec(_0x492cad),
          _0x5a15e9 = _0x30a335 ? this.getval(_0x30a335) : "";
        if (_0x5a15e9) {
          try {
            const _0x4632a6 = JSON.parse(_0x5a15e9);
            _0x240029 = _0x4632a6 ? this.lodash_get(_0x4632a6, _0x4e9b7f, "") : _0x240029;
          } catch (_0x442824) {
            _0x240029 = "";
          }
        }
      }
      return _0x240029;
    }
    setdata(_0x18e015, _0x3db7c6) {
      let _0x48c21f = !1;
      if (/^@/.test(_0x3db7c6)) {
        const [, _0x436313, _0x27dc50] = /^@(.*?)\.(.*?)$/.exec(_0x3db7c6),
          _0x1cadbf = this.getval(_0x436313),
          _0x1c1f02 = _0x436313 ? "null" === _0x1cadbf ? null : _0x1cadbf || "{}" : "{}";
        try {
          const _0x31d1a8 = JSON.parse(_0x1c1f02);
          this.lodash_set(_0x31d1a8, _0x27dc50, _0x18e015);
          _0x48c21f = this.setval(JSON.stringify(_0x31d1a8), _0x436313);
        } catch (_0x50c8f7) {
          const _0x493ec0 = {};
          this.lodash_set(_0x493ec0, _0x27dc50, _0x18e015);
          _0x48c21f = this.setval(JSON.stringify(_0x493ec0), _0x436313);
        }
      } else {
        _0x48c21f = this.setval(_0x18e015, _0x3db7c6);
      }
      return _0x48c21f;
    }
    getval(_0x3260e9) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3260e9) : this.isQuanX() ? $prefs.valueForKey(_0x3260e9) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3260e9]) : this.data && this.data[_0x3260e9] || null;
    }
    setval(_0x5e8fbd, _0x178a96) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x5e8fbd, _0x178a96) : this.isQuanX() ? $prefs.setValueForKey(_0x5e8fbd, _0x178a96) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x178a96] = _0x5e8fbd, this.writedata(), !0) : this.data && this.data[_0x178a96] || null;
    }
    initGotEnv(_0x3dd106) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3dd106 && (_0x3dd106.headers = _0x3dd106.headers ? _0x3dd106.headers : {}, void 0 === _0x3dd106.headers.Cookie && void 0 === _0x3dd106.cookieJar && (_0x3dd106.cookieJar = this.ckjar));
    }
    get(_0x2eb77a, _0x1c0e3d = () => {}) {
      const _0x4c503c = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x56ec3e = {
        hints: !1
      };
      _0x2eb77a.headers && (delete _0x2eb77a.headers["Content-Type"], delete _0x2eb77a.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2eb77a.headers = _0x2eb77a.headers || {}, Object.assign(_0x2eb77a.headers, _0x4c503c)), $httpClient.get(_0x2eb77a, (_0x48bb79, _0x1086b8, _0x22b14b) => {
        !_0x48bb79 && _0x1086b8 && (_0x1086b8.body = _0x22b14b, _0x1086b8.statusCode = _0x1086b8.status);
        _0x1c0e3d(_0x48bb79, _0x1086b8, _0x22b14b);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2eb77a.opts = _0x2eb77a.opts || {}, Object.assign(_0x2eb77a.opts, _0x56ec3e)), $task.fetch(_0x2eb77a).then(_0x222b6c => {
        const {
            statusCode: _0x5550b7,
            statusCode: _0x47e195,
            headers: _0x3a784b,
            body: _0x7ad0eb
          } = _0x222b6c,
          _0x109e10 = {
            status: _0x5550b7,
            statusCode: _0x47e195,
            headers: _0x3a784b,
            body: _0x7ad0eb
          };
        _0x1c0e3d(null, _0x109e10, _0x7ad0eb);
      }, _0x347075 => _0x1c0e3d(_0x347075))) : this.isNode() && (this.initGotEnv(_0x2eb77a), this.got(_0x2eb77a).on("redirect", (_0x8d2434, _0x16a3c1) => {
        try {
          if (_0x8d2434.headers["set-cookie"]) {
            const _0x1c326f = _0x8d2434.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x1c326f, null);
            _0x16a3c1.cookieJar = this.ckjar;
          }
        } catch (_0x59f438) {
          this.logErr(_0x59f438);
        }
      }).then(_0x2795b3 => {
        const {
            statusCode: _0x2b0ef2,
            statusCode: _0x1c37a4,
            headers: _0x4bb93f,
            body: _0xc45b0a
          } = _0x2795b3,
          _0x1900ae = {
            status: _0x2b0ef2,
            statusCode: _0x1c37a4,
            headers: _0x4bb93f,
            body: _0xc45b0a
          };
        _0x1c0e3d(null, _0x1900ae, _0xc45b0a);
      }, _0x3ce66d => {
        const {
          message: _0x516491,
          response: _0x34d583
        } = _0x3ce66d;
        _0x1c0e3d(_0x516491, _0x34d583, _0x34d583 && _0x34d583.body);
      }));
    }
    post(_0x21d84f, _0x531b6c = () => {}) {
      const _0x551f63 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x1670ac = {
        hints: !1
      };
      if (_0x21d84f.body && _0x21d84f.headers && !_0x21d84f.headers["Content-Type"] && (_0x21d84f.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x21d84f.headers && delete _0x21d84f.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x21d84f.headers = _0x21d84f.headers || {}, Object.assign(_0x21d84f.headers, _0x551f63));
        $httpClient.post(_0x21d84f, (_0x2024a7, _0x9c9428, _0x32eb96) => {
          !_0x2024a7 && _0x9c9428 && (_0x9c9428.body = _0x32eb96, _0x9c9428.statusCode = _0x9c9428.status);
          _0x531b6c(_0x2024a7, _0x9c9428, _0x32eb96);
        });
      } else {
        if (this.isQuanX()) {
          _0x21d84f.method = "POST";
          this.isNeedRewrite && (_0x21d84f.opts = _0x21d84f.opts || {}, Object.assign(_0x21d84f.opts, _0x1670ac));
          $task.fetch(_0x21d84f).then(_0x3dc720 => {
            const {
                statusCode: _0x5979fe,
                statusCode: _0x350aec,
                headers: _0x5c666b,
                body: _0x5d32c3
              } = _0x3dc720,
              _0x546faa = {
                status: _0x5979fe,
                statusCode: _0x350aec,
                headers: _0x5c666b,
                body: _0x5d32c3
              };
            _0x531b6c(null, _0x546faa, _0x5d32c3);
          }, _0x1ab4a3 => _0x531b6c(_0x1ab4a3));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x21d84f);
            const {
              url: _0x2ec75d,
              ..._0x358c17
            } = _0x21d84f;
            this.got.post(_0x2ec75d, _0x358c17).then(_0x5c56f => {
              const {
                  statusCode: _0x3fcedc,
                  statusCode: _0x447961,
                  headers: _0xd13807,
                  body: _0x54fe88
                } = _0x5c56f,
                _0x25e293 = {
                  status: _0x3fcedc,
                  statusCode: _0x447961,
                  headers: _0xd13807,
                  body: _0x54fe88
                };
              _0x531b6c(null, _0x25e293, _0x54fe88);
            }, _0x40cab0 => {
              const {
                message: _0x1c6e58,
                response: _0x4b497b
              } = _0x40cab0;
              _0x531b6c(_0x1c6e58, _0x4b497b, _0x4b497b && _0x4b497b.body);
            });
          }
        }
      }
    }
    time(_0x10069a) {
      let _0x3d598a = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x10069a) && (_0x10069a = _0x10069a.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x574f10 in _0x3d598a) new RegExp("(" + _0x574f10 + ")").test(_0x10069a) && (_0x10069a = _0x10069a.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3d598a[_0x574f10] : ("00" + _0x3d598a[_0x574f10]).substr(("" + _0x3d598a[_0x574f10]).length)));
      return _0x10069a;
    }
    msg(_0x3a33a9 = _0x573c99, _0x28e6b1 = "", _0xbaf596 = "", _0xb02574) {
      const _0x3c6e66 = _0x24ff2b => {
        if (!_0x24ff2b) {
          return _0x24ff2b;
        }
        if ("string" == typeof _0x24ff2b) {
          return this.isLoon() ? _0x24ff2b : this.isQuanX() ? {
            "open-url": _0x24ff2b
          } : this.isSurge() ? {
            url: _0x24ff2b
          } : void 0;
        }
        if ("object" == typeof _0x24ff2b) {
          if (this.isLoon()) {
            let _0x599200 = _0x24ff2b.openUrl || _0x24ff2b.url || _0x24ff2b["open-url"],
              _0x44fbfc = _0x24ff2b.mediaUrl || _0x24ff2b["media-url"];
            const _0x26a209 = {
              openUrl: _0x599200,
              mediaUrl: _0x44fbfc
            };
            return _0x26a209;
          }
          if (this.isQuanX()) {
            let _0x13a509 = _0x24ff2b["open-url"] || _0x24ff2b.url || _0x24ff2b.openUrl,
              _0x488e96 = _0x24ff2b["media-url"] || _0x24ff2b.mediaUrl;
            const _0x5d7f53 = {
              "open-url": _0x13a509,
              "media-url": _0x488e96
            };
            return _0x5d7f53;
          }
          if (this.isSurge()) {
            let _0x37d2c5 = _0x24ff2b.url || _0x24ff2b.openUrl || _0x24ff2b["open-url"];
            const _0x105112 = {
              url: _0x37d2c5
            };
            return _0x105112;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3a33a9, _0x28e6b1, _0xbaf596, _0x3c6e66(_0xb02574)) : this.isQuanX() && $notify(_0x3a33a9, _0x28e6b1, _0xbaf596, _0x3c6e66(_0xb02574)));
      let _0x40f54a = ["", "==============📣系统通知📣=============="];
      _0x40f54a.push(_0x3a33a9);
      _0x28e6b1 && _0x40f54a.push(_0x28e6b1);
      _0xbaf596 && _0x40f54a.push(_0xbaf596);
      console.log(_0x40f54a.join("\n"));
      this.logs = this.logs.concat(_0x40f54a);
    }
    log(..._0x9e1a7b) {
      _0x9e1a7b.length > 0 && (this.logs = [...this.logs, ..._0x9e1a7b]);
      console.log(_0x9e1a7b.join(this.logSeparator));
    }
    logErr(_0x4e22f0, _0x219132) {
      const _0x592660 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x592660 ? this.log("", "❗️" + this.name + ", 错误!", _0x4e22f0.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x4e22f0);
    }
    wait(_0x47b8a2) {
      return new Promise(_0xa8555e => setTimeout(_0xa8555e, _0x47b8a2));
    }
    done(_0x2cb2f9 = {}) {
      const _0x5e53b7 = new Date().getTime(),
        _0x3a7c29 = (_0x5e53b7 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3a7c29 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x2cb2f9);
    }
  }(_0x573c99, _0x2781e9);
}