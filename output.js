//Tue Jun 03 2025 08:19:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * @author wuqing
 * @description 变量名 ylsp
 * 群937994514
 * 活动入口：https://fishing.fulubro.com/app/api/oauth.php?open_id=o8M4xq68hFU4c6g8jT2If9fxALJzk1QE4&package=z
 * 单v一天0.5
 */
;
const $ = new Env("\u9C7C\u4E50\u89C6\u9891");
const users = process.env.ylsp && process.env.ylsp.split("&") || [];
var CryptoJS = CryptoJS || function (Math, Oଠﾟ) {
  var ₒₒⲟ;
  if (typeof window !== "undefined" && window.crypto) {
    ₒₒⲟ = window.crypto;
  }
  if (typeof self !== "undefined" && self.crypto) {
    ₒₒⲟ = self.crypto;
  }
  if (typeof globalThis !== "undefined" && globalThis.crypto) {
    ₒₒⲟ = globalThis.crypto;
  }
  if (!ₒₒⲟ && typeof window !== "undefined" && window.msCrypto) {
    ₒₒⲟ = window.msCrypto;
  }
  if (!ₒₒⲟ && typeof global !== "undefined" && global.crypto) {
    ₒₒⲟ = global.crypto;
  }
  if (!ₒₒⲟ && typeof require === "function") {
    try {
      ₒₒⲟ = require("crypto");
    } catch (ﾟ0ᵒ) {}
  }
  var ﾷﾷ = function () {
    if (ₒₒⲟ) {
      if (typeof ₒₒⲟ.getRandomValues === "function") {
        try {
          return ₒₒⲟ.getRandomValues(new Uint32Array(1))[0];
        } catch (ﾟ0ᵒ) {}
      }
      if (typeof ₒₒⲟ.randomBytes === "function") {
        try {
          return ₒₒⲟ.randomBytes(4).readInt32LE();
        } catch (ﾟ0ᵒ) {}
      }
    }
    throw new Error("Native crypto module could not be used to get secure random number.");
  };
  var ᣞㅇ = Object.create || function () {
    function ㅇΟ() {}
    return function (ᵒꙨᐤ) {
      var ᵒᐤﾟ;
      ㅇΟ.prototype = ᵒꙨᐤ;
      ᵒᐤﾟ = new ㅇΟ();
      ㅇΟ.prototype = null;
      return ᵒᐤﾟ;
    };
  }();
  var ⲟΟଠ = {};
  var ﾷₒᴑ = ⲟΟଠ.lib = {};
  var ᣞOo = ﾷₒᴑ.Base = function () {
    return {
      extend: function (ᣞﾟo) {
        var ᵒᐤﾟ = ᣞㅇ(this);
        if (ᣞﾟo) {
          ᵒᐤﾟ.mixIn(ᣞﾟo);
        }
        if (!ᵒᐤﾟ.hasOwnProperty("init") || this.init === ᵒᐤﾟ.init) {
          ᵒᐤﾟ.init = function () {
            ᵒᐤﾟ.$super.init.apply(this, arguments);
          };
        }
        ᵒᐤﾟ.init.prototype = ᵒᐤﾟ;
        ᵒᐤﾟ.$super = this;
        return ᵒᐤﾟ;
      },
      create: function () {
        var ᵒⲟᣞ = this.extend();
        ᵒⲟᣞ.init.apply(ᵒⲟᣞ, arguments);
        return ᵒⲟᣞ;
      },
      init: function () {},
      mixIn: function (O) {
        for (var ᣞﾟﾟ in O) {
          if (O.hasOwnProperty(ᣞﾟﾟ)) {
            this[ᣞﾟﾟ] = O[ᣞﾟﾟ];
          }
        }
        if (O.hasOwnProperty("toString")) {
          this.toString = O.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    };
  }();
  var ᵒﾷ0 = ﾷₒᴑ.WordArray = ᣞOo.extend({
    init: function (ᵒㅇᴑ, ᵒㅇﾷ) {
      ᵒㅇᴑ = this.words = ᵒㅇᴑ || [];
      if (ᵒㅇﾷ != Oଠﾟ) {
        this.sigBytes = ᵒㅇﾷ;
      } else {
        this.sigBytes = ᵒㅇᴑ.length * 4;
      }
    },
    toString: function (ᵒᣞⲟ) {
      return (ᵒᣞⲟ || ᣞﾟㅇ).stringify(this);
    },
    concat: function (Ꙩﾷ) {
      var ᣞᐤΟ = this.words;
      var ᣞΟᣞ = Ꙩﾷ.words;
      var Ꙩㅇ = this.sigBytes;
      var ﾷଠꓳ = Ꙩﾷ.sigBytes;
      this.clamp();
      if (Ꙩㅇ % 4) {
        for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ﾷଠꓳ; ﾷ0ﾷ++) {
          var ﾷꓳㅇ = ᣞΟᣞ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 255;
          ᣞᐤΟ[Ꙩㅇ + ﾷ0ﾷ >>> 2] |= ﾷꓳㅇ << 24 - (Ꙩㅇ + ﾷ0ﾷ) % 4 * 8;
        }
      } else {
        for (var ﾷﾟㅇ = 0; ﾷﾟㅇ < ﾷଠꓳ; ﾷﾟㅇ += 4) {
          ᣞᐤΟ[Ꙩㅇ + ﾷﾟㅇ >>> 2] = ᣞΟᣞ[ﾷﾟㅇ >>> 2];
        }
      }
      this.sigBytes += ﾷଠꓳ;
      return this;
    },
    clamp: function () {
      var ᵒㅇᴑ = this.words;
      var ᵒㅇﾷ = this.sigBytes;
      ᵒㅇᴑ[ᵒㅇﾷ >>> 2] &= 4294967295 << 32 - ᵒㅇﾷ % 4 * 8;
      ᵒㅇᴑ.length = Math.ceil(ᵒㅇﾷ / 4);
    },
    clone: function () {
      var ﾷᐤᵒ = ᣞOo.clone.call(this);
      ﾷᐤᵒ.words = this.words.slice(0);
      return ﾷᐤᵒ;
    },
    random: function (ﾷᵒᣞ) {
      var ᵒㅇᴑ = [];
      var ᵒⲟᴑ = function (ᣞᐤﾟ) {
        var ᣞᐤﾟ = ᣞᐤﾟ;
        var ﾷﾟᐤ = 987654321;
        var ﾷ0ꓳ = 4294967295;
        return function () {
          ﾷﾟᐤ = 36969 * (ﾷﾟᐤ & 65535) + (ﾷﾟᐤ >> 16) & ﾷ0ꓳ;
          ᣞᐤﾟ = 18000 * (ᣞᐤﾟ & 65535) + (ᣞᐤﾟ >> 16) & ﾷ0ꓳ;
          var ﾷOₒ = (ﾷﾟᐤ << 16) + ᣞᐤﾟ & ﾷ0ꓳ;
          ﾷOₒ /= 4294967296;
          ﾷOₒ += 0.5;
          return ﾷOₒ * (Math.random() > 0.5 ? 1 : -1);
        };
      };
      var ꓳﾷ = false,
        ᵒⲟo;
      try {
        ﾷﾷ();
        ꓳﾷ = true;
      } catch (ﾟ0ᵒ) {}
      for (var ﾷ0ﾷ = 0, ﾷ0o; ﾷ0ﾷ < ﾷᵒᣞ; ﾷ0ﾷ += 4) {
        if (!ꓳﾷ) {
          ᵒⲟo = ᵒⲟᴑ((ﾷ0o || Math.random()) * 4294967296);
          ﾷ0o = ᵒⲟo() * 987654071;
          ᵒㅇᴑ.push(ᵒⲟo() * 4294967296 | 0);
          continue;
        }
        ᵒㅇᴑ.push(ﾷﾷ());
      }
      return new ᵒﾷ0.init(ᵒㅇᴑ, ﾷᵒᣞ);
    }
  });
  var ᣞﾟᵒ = ⲟΟଠ.enc = {};
  var ᣞﾟㅇ = ᣞﾟᵒ.Hex = {
    stringify: function (Ꙩﾷ) {
      var ᵒㅇᴑ = Ꙩﾷ.words;
      var ᵒㅇﾷ = Ꙩﾷ.sigBytes;
      var ᣞΟ0 = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᵒㅇﾷ; ﾷ0ﾷ++) {
        var ⲟᴑ = ᵒㅇᴑ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 255;
        ᣞΟ0.push((ⲟᴑ >>> 4).toString(16));
        ᣞΟ0.push((ⲟᴑ & 15).toString(16));
      }
      return ᣞΟ0.join("");
    },
    parse: function (ᵒﾷᴑ) {
      var ᴑₒ = ᵒﾷᴑ.length;
      var ᵒㅇᴑ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᴑₒ; ﾷ0ﾷ += 2) {
        ᵒㅇᴑ[ﾷ0ﾷ >>> 3] |= parseInt(ᵒﾷᴑ.substr(ﾷ0ﾷ, 2), 16) << 24 - ﾷ0ﾷ % 8 * 4;
      }
      return new ᵒﾷ0.init(ᵒㅇᴑ, ᴑₒ / 2);
    }
  };
  var ᣞᐤᣞ = ᣞﾟᵒ.Latin1 = {
    stringify: function (Ꙩﾷ) {
      var ᵒㅇᴑ = Ꙩﾷ.words;
      var ᵒㅇﾷ = Ꙩﾷ.sigBytes;
      var ᣞΟₒ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᵒㅇﾷ; ﾷ0ﾷ++) {
        var ⲟᴑ = ᵒㅇᴑ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 255;
        ᣞΟₒ.push(String.fromCharCode(ⲟᴑ));
      }
      return ᣞΟₒ.join("");
    },
    parse: function (ﾷꙨଠ) {
      var ₒⲟ = ﾷꙨଠ.length;
      var ᵒㅇᴑ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ₒⲟ; ﾷ0ﾷ++) {
        ᵒㅇᴑ[ﾷ0ﾷ >>> 2] |= (ﾷꙨଠ.charCodeAt(ﾷ0ﾷ) & 255) << 24 - ﾷ0ﾷ % 4 * 8;
      }
      return new ᵒﾷ0.init(ᵒㅇᴑ, ₒⲟ);
    }
  };
  var ᴑᐤ = ᣞﾟᵒ.Utf8 = {
    stringify: function (Ꙩﾷ) {
      try {
        return decodeURIComponent(escape(ᣞᐤᣞ.stringify(Ꙩﾷ)));
      } catch (ᵒㅇଠ) {
        throw new Error("Malformed UTF-8 data");
      }
    },
    parse: function (ᵒᣞ0) {
      return ᣞᐤᣞ.parse(unescape(encodeURIComponent(ᵒᣞ0)));
    }
  };
  var ᵒΟᵒ = ﾷₒᴑ.BufferedBlockAlgorithm = ᣞOo.extend({
    reset: function () {
      this._data = new ᵒﾷ0.init();
      this._nDataBytes = 0;
    },
    _append: function (ᵒΟଠ) {
      if (typeof ᵒΟଠ == "string") {
        ᵒΟଠ = ᴑᐤ.parse(ᵒΟଠ);
      }
      this._data.concat(ᵒΟଠ);
      this._nDataBytes += ᵒΟଠ.sigBytes;
    },
    _process: function (oଠ) {
      var ᵒᣞₒ;
      var ᵒΟଠ = this._data;
      var ᵒΟꙨ = ᵒΟଠ.words;
      var Οᵒ = ᵒΟଠ.sigBytes;
      var ᣞﾟﾷ = this.blockSize;
      var ᣞꙨ = ᣞﾟﾷ * 4;
      var ᵒᣞﾟ = Οᵒ / ᣞꙨ;
      if (oଠ) {
        ᵒᣞﾟ = Math.ceil(ᵒᣞﾟ);
      } else {
        ᵒᣞﾟ = Math.max((ᵒᣞﾟ | 0) - this._minBufferSize, 0);
      }
      var ﾷଠⲟ = ᵒᣞﾟ * ᣞﾟﾷ;
      var ㅇₒ = Math.min(ﾷଠⲟ * 4, Οᵒ);
      if (ﾷଠⲟ) {
        for (var ᣞﾟⲟ = 0; ᣞﾟⲟ < ﾷଠⲟ; ᣞﾟⲟ += ᣞﾟﾷ) {
          this._doProcessBlock(ᵒΟꙨ, ᣞﾟⲟ);
        }
        ᵒᣞₒ = ᵒΟꙨ.splice(0, ﾷଠⲟ);
        ᵒΟଠ.sigBytes -= ㅇₒ;
      }
      return new ᵒﾷ0.init(ᵒᣞₒ, ㅇₒ);
    },
    clone: function () {
      var ﾷᐤᵒ = ᣞOo.clone.call(this);
      ﾷᐤᵒ._data = this._data.clone();
      return ﾷᐤᵒ;
    },
    _minBufferSize: 0
  });
  var ﾷ0 = ﾷₒᴑ.Hasher = ᵒΟᵒ.extend({
    cfg: ᣞOo.extend(),
    init: function (ᣞᐤꙨ) {
      this.cfg = this.cfg.extend(ᣞᐤꙨ);
      this.reset();
    },
    reset: function () {
      ᵒΟᵒ.reset.call(this);
      this._doReset();
    },
    update: function (oꙨ) {
      this._append(oꙨ);
      this._process();
      return this;
    },
    finalize: function (oꙨ) {
      if (oꙨ) {
        this._append(oꙨ);
      }
      var ᵒﾟꙨ = this._doFinalize();
      return ᵒﾟꙨ;
    },
    blockSize: 16,
    _createHelper: function (ᵒᣞᐤ) {
      return function (ᣞ0ଠ, ᣞᐤꙨ) {
        return new ᵒᣞᐤ.init(ᣞᐤꙨ).finalize(ᣞ0ଠ);
      };
    },
    _createHmacHelper: function (ᵒᣞᐤ) {
      return function (ᣞ0ଠ, ᵒᣞᣞ) {
        return new ᣞOᐤ.HMAC.init(ᵒᣞᐤ, ᵒᣞᣞ).finalize(ᣞ0ଠ);
      };
    }
  });
  var ᣞOᐤ = ⲟΟଠ.algo = {};
  return ⲟΟଠ;
}(Math);
(function () {
  var ⲟΟଠ = CryptoJS;
  var ﾷₒᴑ = ⲟΟଠ.lib;
  var ᵒﾷ0 = ﾷₒᴑ.WordArray;
  var ᣞﾟᵒ = ⲟΟଠ.enc;
  var ﾷꓳO = ᣞﾟᵒ.Base64 = {
    stringify: function (Ꙩﾷ) {
      var ᵒㅇᴑ = Ꙩﾷ.words;
      var ᵒㅇﾷ = Ꙩﾷ.sigBytes;
      var ﾷ0ଠ = this._map;
      Ꙩﾷ.clamp();
      var ᣞꙨᐤ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᵒㅇﾷ; ﾷ0ﾷ += 3) {
        var ﾷΟO = ᵒㅇᴑ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 255;
        var ᣞᵒㅇ = ᵒㅇᴑ[ﾷ0ﾷ + 1 >>> 2] >>> 24 - (ﾷ0ﾷ + 1) % 4 * 8 & 255;
        var ᵒଠo = ᵒㅇᴑ[ﾷ0ﾷ + 2 >>> 2] >>> 24 - (ﾷ0ﾷ + 2) % 4 * 8 & 255;
        var ᣞOO = ﾷΟO << 16 | ᣞᵒㅇ << 8 | ᵒଠo;
        for (var ﾷﾟㅇ = 0; ﾷﾟㅇ < 4 && ﾷ0ﾷ + ﾷﾟㅇ * 0.75 < ᵒㅇﾷ; ﾷﾟㅇ++) {
          ᣞꙨᐤ.push(ﾷ0ଠ.charAt(ᣞOO >>> 6 * (3 - ﾷﾟㅇ) & 63));
        }
      }
      var ﾷꓳଠ = ﾷ0ଠ.charAt(64);
      if (ﾷꓳଠ) {
        while (ᣞꙨᐤ.length % 4) {
          ᣞꙨᐤ.push(ﾷꓳଠ);
        }
      }
      return ᣞꙨᐤ.join("");
    },
    parse: function (ﾷΟⲟ) {
      var ᣞଠO = ﾷΟⲟ.length;
      var ﾷ0ଠ = this._map;
      var ᵒᣞꓳ = this._reverseMap;
      if (!ᵒᣞꓳ) {
        ᵒᣞꓳ = this._reverseMap = [];
        for (var ﾷﾟㅇ = 0; ﾷﾟㅇ < ﾷ0ଠ.length; ﾷﾟㅇ++) {
          ᵒᣞꓳ[ﾷ0ଠ.charCodeAt(ﾷﾟㅇ)] = ﾷﾟㅇ;
        }
      }
      var ﾷꓳଠ = ﾷ0ଠ.charAt(64);
      if (ﾷꓳଠ) {
        var ﾷᴑﾟ = ﾷΟⲟ.indexOf(ﾷꓳଠ);
        if (ﾷᴑﾟ !== -1) {
          ᣞଠO = ﾷᴑﾟ;
        }
      }
      return ᣞₒΟ(ﾷΟⲟ, ᣞଠO, ᵒᣞꓳ);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  function ᣞₒΟ(ﾷΟⲟ, ᣞଠO, ᵒᣞꓳ) {
    var ᵒㅇᴑ = [];
    var ﾷᵒᣞ = 0;
    for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᣞଠO; ﾷ0ﾷ++) {
      if (ﾷ0ﾷ % 4) {
        var Oﾟ = ᵒᣞꓳ[ﾷΟⲟ.charCodeAt(ﾷ0ﾷ - 1)] << ﾷ0ﾷ % 4 * 2;
        var ᣞᵒO = ᵒᣞꓳ[ﾷΟⲟ.charCodeAt(ﾷ0ﾷ)] >>> 6 - ﾷ0ﾷ % 4 * 2;
        ᵒㅇᴑ[ﾷᵒᣞ >>> 2] |= (Oﾟ | ᣞᵒO) << 24 - ﾷᵒᣞ % 4 * 8;
        ﾷᵒᣞ++;
      }
    }
    return ᵒﾷ0.create(ᵒㅇᴑ, ﾷᵒᣞ);
  }
})();
CryptoJS.lib.Cipher || function (Oଠﾟ) {
  var ⲟΟଠ = CryptoJS;
  var ﾷₒᴑ = ⲟΟଠ.lib;
  var ᣞOo = ﾷₒᴑ.Base;
  var ᵒﾷ0 = ﾷₒᴑ.WordArray;
  var ᵒΟᵒ = ﾷₒᴑ.BufferedBlockAlgorithm;
  var ᣞﾟᵒ = ⲟΟଠ.enc;
  var ᴑᐤ = ᣞﾟᵒ.Utf8;
  var ﾷꓳO = ᣞﾟᵒ.Base64;
  var ᣞOᐤ = ⲟΟଠ.algo;
  var ㅇꓳ = ᣞOᐤ.EvpKDF;
  var ﾷꓳΟ = ﾷₒᴑ.Cipher = ᵒΟᵒ.extend({
    cfg: ᣞOo.extend(),
    createEncryptor: function (ᵒᣞᣞ, ᣞᐤꙨ) {
      return this.create(this._ENC_XFORM_MODE, ᵒᣞᣞ, ᣞᐤꙨ);
    },
    createDecryptor: function (ᵒᣞᣞ, ᣞᐤꙨ) {
      return this.create(this._DEC_XFORM_MODE, ᵒᣞᣞ, ᣞᐤꙨ);
    },
    init: function (ᣞΟo, ᵒᣞᣞ, ᣞᐤꙨ) {
      this.cfg = this.cfg.extend(ᣞᐤꙨ);
      this._xformMode = ᣞΟo;
      this._key = ᵒᣞᣞ;
      this.reset();
    },
    reset: function () {
      ᵒΟᵒ.reset.call(this);
      this._doReset();
    },
    process: function (ᣞᐤ) {
      this._append(ᣞᐤ);
      return this._process();
    },
    finalize: function (ᣞᐤ) {
      if (ᣞᐤ) {
        this._append(ᣞᐤ);
      }
      var ᣞꙨⲟ = this._doFinalize();
      return ᣞꙨⲟ;
    },
    keySize: 4,
    ivSize: 4,
    _ENC_XFORM_MODE: 1,
    _DEC_XFORM_MODE: 2,
    _createHelper: function () {
      function ﾷᴑᵒ(ᵒᣞᣞ) {
        if (typeof ᵒᣞᣞ == "string") {
          return ﾷﾟꓳ;
        } else {
          return ₒᣞᴑ;
        }
      }
      return function (ᵒଠꙨ) {
        return {
          encrypt: function (ᣞ0ଠ, ᵒᣞᣞ, ᣞᐤꙨ) {
            return ﾷᴑᵒ(ᵒᣞᣞ).encrypt(ᵒଠꙨ, ᣞ0ଠ, ᵒᣞᣞ, ᣞᐤꙨ);
          },
          decrypt: function (ﾷﾟₒ, ᵒᣞᣞ, ᣞᐤꙨ) {
            return ﾷᴑᵒ(ᵒᣞᣞ).decrypt(ᵒଠꙨ, ﾷﾟₒ, ᵒᣞᣞ, ᣞᐤꙨ);
          }
        };
      };
    }()
  });
  var ᣞﾟꙨ = ﾷₒᴑ.StreamCipher = ﾷꓳΟ.extend({
    _doFinalize: function () {
      var ﾷᣞO = this._process(!!"flush");
      return ﾷᣞO;
    },
    blockSize: 1
  });
  var ₒΟଠ = ⲟΟଠ.mode = {};
  var ᣞᵒꙨ = ﾷₒᴑ.BlockCipherMode = ᣞOo.extend({
    createEncryptor: function (ᵒଠꙨ, ₒOₒ) {
      return this.Encryptor.create(ᵒଠꙨ, ₒOₒ);
    },
    createDecryptor: function (ᵒଠꙨ, ₒOₒ) {
      return this.Decryptor.create(ᵒଠꙨ, ₒOₒ);
    },
    init: function (ᵒଠꙨ, ₒOₒ) {
      this._cipher = ᵒଠꙨ;
      this._iv = ₒOₒ;
    }
  });
  var ₒㅇ = ₒΟଠ.CBC = function () {
    var ₒㅇ = ᣞᵒꙨ.extend();
    ₒㅇ.Encryptor = ₒㅇ.extend({
      processBlock: function (ᵒㅇᴑ, ᣞﾟⲟ) {
        var ᵒଠꙨ = this._cipher;
        var ᣞﾟﾷ = ᵒଠꙨ.blockSize;
        ﾷₒꓳ.call(this, ᵒㅇᴑ, ᣞﾟⲟ, ᣞﾟﾷ);
        ᵒଠꙨ.encryptBlock(ᵒㅇᴑ, ᣞﾟⲟ);
        this._prevBlock = ᵒㅇᴑ.slice(ᣞﾟⲟ, ᣞﾟⲟ + ᣞﾟﾷ);
      }
    });
    ₒㅇ.Decryptor = ₒㅇ.extend({
      processBlock: function (ᵒㅇᴑ, ᣞﾟⲟ) {
        var ᵒଠꙨ = this._cipher;
        var ᣞﾟﾷ = ᵒଠꙨ.blockSize;
        var ﾷㅇଠ = ᵒㅇᴑ.slice(ᣞﾟⲟ, ᣞﾟⲟ + ᣞﾟﾷ);
        ᵒଠꙨ.decryptBlock(ᵒㅇᴑ, ᣞﾟⲟ);
        ﾷₒꓳ.call(this, ᵒㅇᴑ, ᣞﾟⲟ, ᣞﾟﾷ);
        this._prevBlock = ﾷㅇଠ;
      }
    });
    function ﾷₒꓳ(ᵒㅇᴑ, ᣞﾟⲟ, ᣞﾟﾷ) {
      var ㅇᣞ;
      var ₒOₒ = this._iv;
      if (ₒOₒ) {
        ㅇᣞ = ₒOₒ;
        this._iv = Oଠﾟ;
      } else {
        ㅇᣞ = this._prevBlock;
      }
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᣞﾟﾷ; ﾷ0ﾷ++) {
        ᵒㅇᴑ[ᣞﾟⲟ + ﾷ0ﾷ] ^= ㅇᣞ[ﾷ0ﾷ];
      }
    }
    return ₒㅇ;
  }();
  var ᵒᣞO = ⲟΟଠ.pad = {};
  var ﾷꓳᣞ = ᵒᣞO.Pkcs7 = {
    pad: function (ᵒΟଠ, ᣞﾟﾷ) {
      var ᣞꙨ = ᣞﾟﾷ * 4;
      var ﾷﾷଠ = ᣞꙨ - ᵒΟଠ.sigBytes % ᣞꙨ;
      var ᣞㅇᣞ = ﾷﾷଠ << 24 | ﾷﾷଠ << 16 | ﾷﾷଠ << 8 | ﾷﾷଠ;
      var ଠꙨ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ﾷﾷଠ; ﾷ0ﾷ += 4) {
        ଠꙨ.push(ᣞㅇᣞ);
      }
      var Ꙩﾷﾷ = ᵒﾷ0.create(ଠꙨ, ﾷﾷଠ);
      ᵒΟଠ.concat(Ꙩﾷﾷ);
    },
    unpad: function (ᵒΟଠ) {
      var ﾷﾷଠ = ᵒΟଠ.words[ᵒΟଠ.sigBytes - 1 >>> 2] & 255;
      ᵒΟଠ.sigBytes -= ﾷﾷଠ;
    }
  };
  var ﾷﾷΟ = ﾷₒᴑ.BlockCipher = ﾷꓳΟ.extend({
    cfg: ﾷꓳΟ.cfg.extend({
      mode: ₒㅇ,
      padding: ﾷꓳᣞ
    }),
    reset: function () {
      var ꙨOo;
      ﾷꓳΟ.reset.call(this);
      var ᣞᐤꙨ = this.cfg;
      var ₒOₒ = ᣞᐤꙨ.iv;
      var ﾷₒ = ᣞᐤꙨ.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        ꙨOo = ﾷₒ.createEncryptor;
      } else {
        ꙨOo = ﾷₒ.createDecryptor;
        this._minBufferSize = 1;
      }
      if (this._mode && this._mode.__creator == ꙨOo) {
        this._mode.init(this, ₒOₒ && ₒOₒ.words);
      } else {
        this._mode = ꙨOo.call(ﾷₒ, this, ₒOₒ && ₒOₒ.words);
        this._mode.__creator = ꙨOo;
      }
    },
    _doProcessBlock: function (ᵒㅇᴑ, ᣞﾟⲟ) {
      this._mode.processBlock(ᵒㅇᴑ, ᣞﾟⲟ);
    },
    _doFinalize: function () {
      var ﾷᣞO;
      var Ꙩﾷﾷ = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        Ꙩﾷﾷ.pad(this._data, this.blockSize);
        ﾷᣞO = this._process(!!"flush");
      } else {
        ﾷᣞO = this._process(!!"flush");
        Ꙩﾷﾷ.unpad(ﾷᣞO);
      }
      return ﾷᣞO;
    },
    blockSize: 4
  });
  var ᣞᴑᴑ = ﾷₒᴑ.CipherParams = ᣞOo.extend({
    init: function (ﾷᴑﾷ) {
      this.mixIn(ﾷᴑﾷ);
    },
    toString: function (ꓳﾟ) {
      return (ꓳﾟ || this.formatter).stringify(this);
    }
  });
  var ꓳ0ᵒ = ⲟΟଠ.format = {};
  var ﾷᵒ0 = ꓳ0ᵒ.OpenSSL = {
    stringify: function (ﾷᴑﾷ) {
      var Ꙩﾷ;
      var ﾷﾟₒ = ﾷᴑﾷ.ciphertext;
      var ᣞⲟᣞ = ﾷᴑﾷ.salt;
      if (ᣞⲟᣞ) {
        Ꙩﾷ = ᵒﾷ0.create([1398893684, 1701076831]).concat(ᣞⲟᣞ).concat(ﾷﾟₒ);
      } else {
        Ꙩﾷ = ﾷﾟₒ;
      }
      return Ꙩﾷ.toString(ﾷꓳO);
    },
    parse: function (OᵒꙨ) {
      var ᣞⲟᣞ;
      var ﾷﾟₒ = ﾷꓳO.parse(OᵒꙨ);
      var ᣞꓳΟ = ﾷﾟₒ.words;
      if (ᣞꓳΟ[0] == 1398893684 && ᣞꓳΟ[1] == 1701076831) {
        ᣞⲟᣞ = ᵒﾷ0.create(ᣞꓳΟ.slice(2, 4));
        ᣞꓳΟ.splice(0, 4);
        ﾷﾟₒ.sigBytes -= 16;
      }
      return ᣞᴑᴑ.create({
        ciphertext: ﾷﾟₒ,
        salt: ᣞⲟᣞ
      });
    }
  };
  var ₒᣞᴑ = ﾷₒᴑ.SerializableCipher = ᣞOo.extend({
    cfg: ᣞOo.extend({
      format: ﾷᵒ0
    }),
    encrypt: function (ᵒଠꙨ, ᣞ0ଠ, ᵒᣞᣞ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      var oⲟᐤ = ᵒଠꙨ.createEncryptor(ᵒᣞᣞ, ᣞᐤꙨ);
      var ﾷﾟₒ = oⲟᐤ.finalize(ᣞ0ଠ);
      var ﾷﾷㅇ = oⲟᐤ.cfg;
      return ᣞᴑᴑ.create({
        ciphertext: ﾷﾟₒ,
        key: ᵒᣞᣞ,
        iv: ﾷﾷㅇ.iv,
        algorithm: ᵒଠꙨ,
        mode: ﾷﾷㅇ.mode,
        padding: ﾷﾷㅇ.padding,
        blockSize: ᵒଠꙨ.blockSize,
        formatter: ᣞᐤꙨ.format
      });
    },
    decrypt: function (ᵒଠꙨ, ﾷﾟₒ, ᵒᣞᣞ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      ﾷﾟₒ = this._parse(ﾷﾟₒ, ᣞᐤꙨ.format);
      var ᣞଠﾷ = ᵒଠꙨ.createDecryptor(ᵒᣞᣞ, ᣞᐤꙨ).finalize(ﾷﾟₒ.ciphertext);
      return ᣞଠﾷ;
    },
    _parse: function (ﾷﾟₒ, ⲟᣞﾷ) {
      if (typeof ﾷﾟₒ == "string") {
        return ⲟᣞﾷ.parse(ﾷﾟₒ, this);
      } else {
        return ﾷﾟₒ;
      }
    }
  });
  var ⲟOO = ⲟΟଠ.kdf = {};
  var ⲟㅇO = ⲟOO.OpenSSL = {
    execute: function (ᵒﾟΟ, ⲟⲟㅇ, ᣞᴑₒ, ᣞⲟᣞ, ᵒᣞᐤ) {
      if (!ᣞⲟᣞ) {
        ᣞⲟᣞ = ᵒﾷ0.random(8);
      }
      if (!ᵒᣞᐤ) {
        var ᵒᣞᣞ = ㅇꓳ.create({
          keySize: ⲟⲟㅇ + ᣞᴑₒ
        }).compute(ᵒﾟΟ, ᣞⲟᣞ);
      } else {
        var ᵒᣞᣞ = ㅇꓳ.create({
          keySize: ⲟⲟㅇ + ᣞᴑₒ,
          hasher: ᵒᣞᐤ
        }).compute(ᵒﾟΟ, ᣞⲟᣞ);
      }
      var ₒOₒ = ᵒﾷ0.create(ᵒᣞᣞ.words.slice(ⲟⲟㅇ), ᣞᴑₒ * 4);
      ᵒᣞᣞ.sigBytes = ⲟⲟㅇ * 4;
      return ᣞᴑᴑ.create({
        key: ᵒᣞᣞ,
        iv: ₒOₒ,
        salt: ᣞⲟᣞ
      });
    }
  };
  var ﾷﾟꓳ = ﾷₒᴑ.PasswordBasedCipher = ₒᣞᴑ.extend({
    cfg: ₒᣞᴑ.cfg.extend({
      kdf: ⲟㅇO
    }),
    encrypt: function (ᵒଠꙨ, ᣞ0ଠ, ᵒﾟΟ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      var ꓳₒΟ = ᣞᐤꙨ.kdf.execute(ᵒﾟΟ, ᵒଠꙨ.keySize, ᵒଠꙨ.ivSize, ᣞᐤꙨ.salt, ᣞᐤꙨ.hasher);
      ᣞᐤꙨ.iv = ꓳₒΟ.iv;
      var ﾷﾟₒ = ₒᣞᴑ.encrypt.call(this, ᵒଠꙨ, ᣞ0ଠ, ꓳₒΟ.key, ᣞᐤꙨ);
      ﾷﾟₒ.mixIn(ꓳₒΟ);
      return ﾷﾟₒ;
    },
    decrypt: function (ᵒଠꙨ, ﾷﾟₒ, ᵒﾟΟ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      ﾷﾟₒ = this._parse(ﾷﾟₒ, ᣞᐤꙨ.format);
      var ꓳₒΟ = ᣞᐤꙨ.kdf.execute(ᵒﾟΟ, ᵒଠꙨ.keySize, ᵒଠꙨ.ivSize, ﾷﾟₒ.salt, ᣞᐤꙨ.hasher);
      ᣞᐤꙨ.iv = ꓳₒΟ.iv;
      var ᣞଠﾷ = ₒᣞᴑ.decrypt.call(this, ᵒଠꙨ, ﾷﾟₒ, ꓳₒΟ.key, ᣞᐤꙨ);
      return ᣞଠﾷ;
    }
  });
}();
(function () {
  var ⲟΟଠ = CryptoJS;
  var ﾷₒᴑ = ⲟΟଠ.lib;
  var ﾷﾷΟ = ﾷₒᴑ.BlockCipher;
  var ᣞOᐤ = ⲟΟଠ.algo;
  var ꓳ0ꓳ = [];
  var ﾷଠﾷ = [];
  var ⲟﾷO = [];
  var ⲟΟㅇ = [];
  var ﾷoO = [];
  var ﾷₒꙨ = [];
  var ㅇΟᐤ = [];
  var Oᵒₒ = [];
  var ㅇᴑᣞ = [];
  var Oꓳㅇ = [];
  (function () {
    var ᵒᣞΟ = [];
    for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < 256; ﾷ0ﾷ++) {
      if (ﾷ0ﾷ < 128) {
        ᵒᣞΟ[ﾷ0ﾷ] = ﾷ0ﾷ << 1;
      } else {
        ᵒᣞΟ[ﾷ0ﾷ] = ﾷ0ﾷ << 1 ^ 283;
      }
    }
    var ᵒⲟᐤ = 0;
    var ᣞᴑଠ = 0;
    for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < 256; ﾷ0ﾷ++) {
      var ⲟᐤᐤ = ᣞᴑଠ ^ ᣞᴑଠ << 1 ^ ᣞᴑଠ << 2 ^ ᣞᴑଠ << 3 ^ ᣞᴑଠ << 4;
      ⲟᐤᐤ = ⲟᐤᐤ >>> 8 ^ ⲟᐤᐤ & 255 ^ 99;
      ꓳ0ꓳ[ᵒⲟᐤ] = ⲟᐤᐤ;
      ﾷଠﾷ[ⲟᐤᐤ] = ᵒⲟᐤ;
      var ꙨO0 = ᵒᣞΟ[ᵒⲟᐤ];
      var ꙨOΟ = ᵒᣞΟ[ꙨO0];
      var ₒᴑꙨ = ᵒᣞΟ[ꙨOΟ];
      var Oₒଠ = ᵒᣞΟ[ⲟᐤᐤ] * 257 ^ ⲟᐤᐤ * 16843008;
      ⲟﾷO[ᵒⲟᐤ] = Oₒଠ << 24 | Oₒଠ >>> 8;
      ⲟΟㅇ[ᵒⲟᐤ] = Oₒଠ << 16 | Oₒଠ >>> 16;
      ﾷoO[ᵒⲟᐤ] = Oₒଠ << 8 | Oₒଠ >>> 24;
      ﾷₒꙨ[ᵒⲟᐤ] = Oₒଠ;
      var Oₒଠ = ₒᴑꙨ * 16843009 ^ ꙨOΟ * 65537 ^ ꙨO0 * 257 ^ ᵒⲟᐤ * 16843008;
      ㅇΟᐤ[ⲟᐤᐤ] = Oₒଠ << 24 | Oₒଠ >>> 8;
      Oᵒₒ[ⲟᐤᐤ] = Oₒଠ << 16 | Oₒଠ >>> 16;
      ㅇᴑᣞ[ⲟᐤᐤ] = Oₒଠ << 8 | Oₒଠ >>> 24;
      Oꓳㅇ[ⲟᐤᐤ] = Oₒଠ;
      if (!ᵒⲟᐤ) {
        ᵒⲟᐤ = ᣞᴑଠ = 1;
      } else {
        ᵒⲟᐤ = ꙨO0 ^ ᵒᣞΟ[ᵒᣞΟ[ᵒᣞΟ[ₒᴑꙨ ^ ꙨO0]]];
        ᣞᴑଠ ^= ᵒᣞΟ[ᵒᣞΟ[ᣞᴑଠ]];
      }
    }
  })();
  var ᵒᐤⲟ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var Oₒꓳ = ᣞOᐤ.AES = ﾷﾷΟ.extend({
    _doReset: function () {
      if (this._nRounds && this._keyPriorReset === this._key) {
        return;
      }
      var ᵒᣞᣞ = this._keyPriorReset = this._key;
      var ㅇₒₒ = ᵒᣞᣞ.words;
      var ⲟⲟㅇ = ᵒᣞᣞ.sigBytes / 4;
      var ㅇₒᵒ = this._nRounds = ⲟⲟㅇ + 6;
      var ꓳﾷᵒ = (ㅇₒᵒ + 1) * 4;
      var ﾷᴑㅇ = this._keySchedule = [];
      for (var ㅇOO = 0; ㅇOO < ꓳﾷᵒ; ㅇOO++) {
        if (ㅇOO < ⲟⲟㅇ) {
          ﾷᴑㅇ[ㅇOO] = ㅇₒₒ[ㅇOO];
        } else {
          var Oₒଠ = ﾷᴑㅇ[ㅇOO - 1];
          if (!(ㅇOO % ⲟⲟㅇ)) {
            Oₒଠ = Oₒଠ << 8 | Oₒଠ >>> 24;
            Oₒଠ = ꓳ0ꓳ[Oₒଠ >>> 24] << 24 | ꓳ0ꓳ[Oₒଠ >>> 16 & 255] << 16 | ꓳ0ꓳ[Oₒଠ >>> 8 & 255] << 8 | ꓳ0ꓳ[Oₒଠ & 255];
            Oₒଠ ^= ᵒᐤⲟ[ㅇOO / ⲟⲟㅇ | 0] << 24;
          } else if (ⲟⲟㅇ > 6 && ㅇOO % ⲟⲟㅇ == 4) {
            Oₒଠ = ꓳ0ꓳ[Oₒଠ >>> 24] << 24 | ꓳ0ꓳ[Oₒଠ >>> 16 & 255] << 16 | ꓳ0ꓳ[Oₒଠ >>> 8 & 255] << 8 | ꓳ0ꓳ[Oₒଠ & 255];
          }
          ﾷᴑㅇ[ㅇOO] = ﾷᴑㅇ[ㅇOO - ⲟⲟㅇ] ^ Oₒଠ;
        }
      }
      var ⲟ0ⲟ = this._invKeySchedule = [];
      for (var ㅇₒﾷ = 0; ㅇₒﾷ < ꓳﾷᵒ; ㅇₒﾷ++) {
        var ㅇOO = ꓳﾷᵒ - ㅇₒﾷ;
        if (ㅇₒﾷ % 4) {
          var Oₒଠ = ﾷᴑㅇ[ㅇOO];
        } else {
          var Oₒଠ = ﾷᴑㅇ[ㅇOO - 4];
        }
        if (ㅇₒﾷ < 4 || ㅇOO <= 4) {
          ⲟ0ⲟ[ㅇₒﾷ] = Oₒଠ;
        } else {
          ⲟ0ⲟ[ㅇₒﾷ] = ㅇΟᐤ[ꓳ0ꓳ[Oₒଠ >>> 24]] ^ Oᵒₒ[ꓳ0ꓳ[Oₒଠ >>> 16 & 255]] ^ ㅇᴑᣞ[ꓳ0ꓳ[Oₒଠ >>> 8 & 255]] ^ Oꓳㅇ[ꓳ0ꓳ[Oₒଠ & 255]];
        }
      }
    },
    encryptBlock: function (ₒΟᴑ, ᣞﾟⲟ) {
      this._doCryptBlock(ₒΟᴑ, ᣞﾟⲟ, this._keySchedule, ⲟﾷO, ⲟΟㅇ, ﾷoO, ﾷₒꙨ, ꓳ0ꓳ);
    },
    decryptBlock: function (ₒΟᴑ, ᣞﾟⲟ) {
      var Oₒଠ = ₒΟᴑ[ᣞﾟⲟ + 1];
      ₒΟᴑ[ᣞﾟⲟ + 1] = ₒΟᴑ[ᣞﾟⲟ + 3];
      ₒΟᴑ[ᣞﾟⲟ + 3] = Oₒଠ;
      this._doCryptBlock(ₒΟᴑ, ᣞﾟⲟ, this._invKeySchedule, ㅇΟᐤ, Oᵒₒ, ㅇᴑᣞ, Oꓳㅇ, ﾷଠﾷ);
      var Oₒଠ = ₒΟᴑ[ᣞﾟⲟ + 1];
      ₒΟᴑ[ᣞﾟⲟ + 1] = ₒΟᴑ[ᣞﾟⲟ + 3];
      ₒΟᴑ[ᣞﾟⲟ + 3] = Oₒଠ;
    },
    _doCryptBlock: function (ₒΟᴑ, ᣞﾟⲟ, ﾷᴑㅇ, ⲟﾷO, ⲟΟㅇ, ﾷoO, ﾷₒꙨ, ꓳ0ꓳ) {
      var ㅇₒᵒ = this._nRounds;
      var oᣞ0 = ₒΟᴑ[ᣞﾟⲟ] ^ ﾷᴑㅇ[0];
      var ꙨₒꙨ = ₒΟᴑ[ᣞﾟⲟ + 1] ^ ﾷᴑㅇ[1];
      var ᵒﾷᐤ = ₒΟᴑ[ᣞﾟⲟ + 2] ^ ﾷᴑㅇ[2];
      var ﾷOㅇ = ₒΟᴑ[ᣞﾟⲟ + 3] ^ ﾷᴑㅇ[3];
      var ㅇOO = 4;
      for (var ㅇᵒO = 1; ㅇᵒO < ㅇₒᵒ; ㅇᵒO++) {
        var Oᵒﾟ = ⲟﾷO[oᣞ0 >>> 24] ^ ⲟΟㅇ[ꙨₒꙨ >>> 16 & 255] ^ ﾷoO[ᵒﾷᐤ >>> 8 & 255] ^ ﾷₒꙨ[ﾷOㅇ & 255] ^ ﾷᴑㅇ[ㅇOO++];
        var ꓳᴑΟ = ⲟﾷO[ꙨₒꙨ >>> 24] ^ ⲟΟㅇ[ᵒﾷᐤ >>> 16 & 255] ^ ﾷoO[ﾷOㅇ >>> 8 & 255] ^ ﾷₒꙨ[oᣞ0 & 255] ^ ﾷᴑㅇ[ㅇOO++];
        var ꓳﾟㅇ = ⲟﾷO[ᵒﾷᐤ >>> 24] ^ ⲟΟㅇ[ﾷOㅇ >>> 16 & 255] ^ ﾷoO[oᣞ0 >>> 8 & 255] ^ ﾷₒꙨ[ꙨₒꙨ & 255] ^ ﾷᴑㅇ[ㅇOO++];
        var ﾷꓳꓳ = ⲟﾷO[ﾷOㅇ >>> 24] ^ ⲟΟㅇ[oᣞ0 >>> 16 & 255] ^ ﾷoO[ꙨₒꙨ >>> 8 & 255] ^ ﾷₒꙨ[ᵒﾷᐤ & 255] ^ ﾷᴑㅇ[ㅇOO++];
        oᣞ0 = Oᵒﾟ;
        ꙨₒꙨ = ꓳᴑΟ;
        ᵒﾷᐤ = ꓳﾟㅇ;
        ﾷOㅇ = ﾷꓳꓳ;
      }
      var Oᵒﾟ = (ꓳ0ꓳ[oᣞ0 >>> 24] << 24 | ꓳ0ꓳ[ꙨₒꙨ >>> 16 & 255] << 16 | ꓳ0ꓳ[ᵒﾷᐤ >>> 8 & 255] << 8 | ꓳ0ꓳ[ﾷOㅇ & 255]) ^ ﾷᴑㅇ[ㅇOO++];
      var ꓳᴑΟ = (ꓳ0ꓳ[ꙨₒꙨ >>> 24] << 24 | ꓳ0ꓳ[ᵒﾷᐤ >>> 16 & 255] << 16 | ꓳ0ꓳ[ﾷOㅇ >>> 8 & 255] << 8 | ꓳ0ꓳ[oᣞ0 & 255]) ^ ﾷᴑㅇ[ㅇOO++];
      var ꓳﾟㅇ = (ꓳ0ꓳ[ᵒﾷᐤ >>> 24] << 24 | ꓳ0ꓳ[ﾷOㅇ >>> 16 & 255] << 16 | ꓳ0ꓳ[oᣞ0 >>> 8 & 255] << 8 | ꓳ0ꓳ[ꙨₒꙨ & 255]) ^ ﾷᴑㅇ[ㅇOO++];
      var ﾷꓳꓳ = (ꓳ0ꓳ[ﾷOㅇ >>> 24] << 24 | ꓳ0ꓳ[oᣞ0 >>> 16 & 255] << 16 | ꓳ0ꓳ[ꙨₒꙨ >>> 8 & 255] << 8 | ꓳ0ꓳ[ᵒﾷᐤ & 255]) ^ ﾷᴑㅇ[ㅇOO++];
      ₒΟᴑ[ᣞﾟⲟ] = Oᵒﾟ;
      ₒΟᴑ[ᣞﾟⲟ + 1] = ꓳᴑΟ;
      ₒΟᴑ[ᣞﾟⲟ + 2] = ꓳﾟㅇ;
      ₒΟᴑ[ᣞﾟⲟ + 3] = ﾷꓳꓳ;
    },
    keySize: 8
  });
  ⲟΟଠ.AES = ﾷﾷΟ._createHelper(Oₒꓳ);
})();
function AES_Encrypt(ଠ0) {
  var ᵒᣞᣞ = CryptoJS.enc.Hex.parse("33346566396b637331337364783832336264316e61676635626d617838377300");
  var ₒOₒ = CryptoJS.enc.Utf8.parse("3a64f1kf00l52ecn");
  var ㅇoㅇ = CryptoJS.enc.Utf8.parse(ଠ0);
  var ꙨOₒ = CryptoJS.AES.encrypt(ㅇoㅇ, ᵒᣞᣞ, {
    iv: ₒOₒ,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return ꙨOₒ.toString();
}
class MainProgram {
  constructor(O0O, oㅇﾟ) {
    this.openid = O0O;
    this.index = oㅇﾟ;
    this.headers = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Encoding": "gzip, deflate",
      "upgrade-insecure-requests": "1",
      "x-requested-with": "com.fulubro.fishing2",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "navigate",
      "sec-fetch-user": "?1",
      "sec-fetch-dest": "document",
      "referer": "https://fishing.fulubro.com/app/my1.html",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
  }
  log(Ꙩₒ) {
    console.log(`\u8d26\u53f7\x5B${this.index}\x5D\x20\x5B${this.remark}\x5D\x3A${Ꙩₒ}`);
  }
  async account() {
    let ᐤₒ = `\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x69\x73\x68\x69\x6E\x67\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x2F\x61\x70\x69\x2F\x67\x6F\x6C\x64\x5F\x61\x70\x69\x2E\x70\x68\x70\x3F\x6F\x70\x65\x6E\x5F\x69\x64\x3D${this.openid}\x26\x70\x61\x63\x6B\x61\x67\x65\x3D\x7A`;
    let ㅇꙨᐤ = this.headers;
    let ⲟOᵒ = JSON.parse((await get({
      url: ᐤₒ,
      headers: ㅇꙨᐤ
    })).body);
    this.log(JSON.stringify(ⲟOᵒ));
  }
  async plus_coin() {
    let ᐤₒ = `\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x69\x73\x68\x69\x6E\x67\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x2F\x61\x70\x69\x2F\x70\x6C\x75\x73\x5F\x63\x6F\x69\x6E\x5F\x73\x69\x67\x6E\x2E\x70\x68\x70`;
    let ㅇꙨᐤ = this.headers;
    let ⲟଠᐤ = Date.now();
    let ⲟﾟﾟ = AES_Encrypt(`${ⲟଠᐤ}\x5F${this.openid}`);
    let Oꓳₒ = `\x75\x73\x65\x72\x49\x64\x3D${this.openid}\x26\x70\x61\x63\x6B\x61\x67\x65\x3D\x7A\x26\x74\x69\x6D\x65\x3D${ⲟଠᐤ}\x26\x73\x69\x67\x6E\x3D${encodeURIComponent(ⲟﾟﾟ)}`;
    let ⲟOᵒ = (await post({
      url: ᐤₒ,
      body: Oꓳₒ,
      headers: ㅇꙨᐤ
    })).body;
  }
  async doTask() {
    try {
      await this.account();
      await this.plus_coin();
    } catch (ᵒㅇଠ) {
      this.log(ᵒㅇଠ.message);
    }
  }
}
async function main() {
  console.log("\u7FA4937994514");
  console.log("\u7FA4937994514");
  console.log("\u7FA4937994514");
  console.log("\u6D3B\u52A8\u5165\u53E3: https://fishing.fulubro.com/app/api/oauth.php?open_id=o8M4xq68hFU4c6g8jT2If9fxALJzk1QE4&package=z");
  for (let oㅇﾟ = 0; oㅇﾟ < users.length; oㅇﾟ++) {
    await new MainProgram(users[oㅇﾟ], oㅇﾟ + 1).doTask();
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    await main();
  }
})().catch(ᵒㅇଠ => {
  console.log(ᵒㅇଠ);
}).finally(() => $.done());
function get(ᵒㅇO) {
  return new Promise((ﾷㅇﾟ, ₒᐤଠ) => {
    $.get(ᵒㅇO, (ﾟ0ᵒ, ﾷ0ᐤ, Oꓳₒ) => {
      if (ﾟ0ᵒ) ₒᐤଠ(ﾟ0ᵒ);
      ﾷㅇﾟ(ﾷ0ᐤ);
    });
  });
}
function post(ᵒㅇO) {
  return new Promise((ﾷㅇﾟ, ₒᐤଠ) => {
    $.post(ᵒㅇO, (ﾟ0ᵒ, ﾷ0ᐤ, Oꓳₒ) => {
      ﾷㅇﾟ(ﾷ0ᐤ);
    });
  });
}
function Env(Oₒଠ, ᵒㅇଠ) {
  class ᵒⲟₒ {
    constructor(Oₒଠ) {
      this.env = Oₒଠ;
    }
    send(Oₒଠ, ᵒㅇଠ = "GET") {
      Oₒଠ = "string" == typeof Oₒଠ ? {
        url: Oₒଠ
      } : Oₒଠ;
      let ᵒⲟₒ = this.get;
      "POST" === ᵒㅇଠ && (ᵒⲟₒ = this.post);
      const ﾷ0ﾷ = new Promise((ᵒㅇଠ, ﾷ0ﾷ) => {
        ᵒⲟₒ.call(this, Oₒଠ, (Oₒଠ, ᵒⲟₒ, ᣞଠᴑ) => {
          Oₒଠ ? ﾷ0ﾷ(Oₒଠ) : ᵒㅇଠ(ᵒⲟₒ);
        });
      });
      return Oₒଠ.timeout ? ((Oₒଠ, ᵒㅇଠ = 1000) => Promise.race([Oₒଠ, new Promise((Oₒଠ, ᵒⲟₒ) => {
        setTimeout(() => {
          ᵒⲟₒ(new Error("\u8BF7\u6C42\u8D85\u65F6"));
        }, ᵒㅇଠ);
      })]))(ﾷ0ﾷ, Oₒଠ.timeout) : ﾷ0ﾷ;
    }
    get(Oₒଠ) {
      return this.send.call(this.env, Oₒଠ);
    }
    post(Oₒଠ) {
      return this.send.call(this.env, Oₒଠ, "POST");
    }
  }
  return new class {
    constructor(Oₒଠ, ᵒㅇଠ) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      }, this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      }, this.logLevel = "info", this.name = Oₒଠ, this.http = new ᵒⲟₒ(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, ᵒㅇଠ), this.log("", `\ud83d\udd14${this.name}\x2C\x20\u5f00\u59cb\x21`);
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
    toObj(Oₒଠ, ᵒㅇଠ = null) {
      try {
        return JSON.parse(Oₒଠ);
      } catch {
        return ᵒㅇଠ;
      }
    }
    toStr(Oₒଠ, ᵒㅇଠ = null, ...ᵒⲟₒ) {
      try {
        return JSON.stringify(Oₒଠ, ...ᵒⲟₒ);
      } catch {
        return ᵒㅇଠ;
      }
    }
    getjson(Oₒଠ, ᵒㅇଠ) {
      let ᵒⲟₒ = ᵒㅇଠ;
      if (this.getdata(Oₒଠ)) try {
        ᵒⲟₒ = JSON.parse(this.getdata(Oₒଠ));
      } catch {}
      return ᵒⲟₒ;
    }
    setjson(Oₒଠ, ᵒㅇଠ) {
      try {
        return this.setdata(JSON.stringify(Oₒଠ), ᵒㅇଠ);
      } catch {
        return !1;
      }
    }
    getScript(Oₒଠ) {
      return new Promise(ᵒㅇଠ => {
        this.get({
          url: Oₒଠ
        }, (Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => ᵒㅇଠ(ﾷ0ﾷ));
      });
    }
    runScript(Oₒଠ, ᵒㅇଠ) {
      return new Promise(ᵒⲟₒ => {
        let ﾷ0ﾷ = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        ﾷ0ﾷ = ﾷ0ﾷ ? ﾷ0ﾷ.replace(/\n/g, "").trim() : ﾷ0ﾷ;
        let ᣞଠᴑ = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        ᣞଠᴑ = ᣞଠᴑ ? 1 * ᣞଠᴑ : 20, ᣞଠᴑ = ᵒㅇଠ && ᵒㅇଠ.timeout ? ᵒㅇଠ.timeout : ᣞଠᴑ;
        const [ᵒⲟᴑ, Ꙩoᣞ] = ﾷ0ﾷ.split("@"),
          oଠᣞ = {
            url: `\x68\x74\x74\x70\x3A\x2F\x2F${Ꙩoᣞ}\x2F\x76\x31\x2F\x73\x63\x72\x69\x70\x74\x69\x6E\x67\x2F\x65\x76\x61\x6C\x75\x61\x74\x65`,
            body: {
              script_text: Oₒଠ,
              mock_type: "cron",
              timeout: ᣞଠᴑ
            },
            headers: {
              "X-Key": ᵒⲟᴑ,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: ᣞଠᴑ
          };
        this.post(oଠᣞ, (Oₒଠ, ᵒㅇଠ, ﾷ0ﾷ) => ᵒⲟₒ(ﾷ0ﾷ));
      }).catch(Oₒଠ => this.logErr(Oₒଠ));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const Oₒଠ = this.path.resolve(this.dataFile),
          ᵒㅇଠ = this.path.resolve(process.cwd(), this.dataFile),
          ᵒⲟₒ = this.fs.existsSync(Oₒଠ),
          ﾷ0ﾷ = !ᵒⲟₒ && this.fs.existsSync(ᵒㅇଠ);
        if (!ᵒⲟₒ && !ﾷ0ﾷ) return {};
        {
          const ﾷ0ﾷ = ᵒⲟₒ ? Oₒଠ : ᵒㅇଠ;
          try {
            return JSON.parse(this.fs.readFileSync(ﾷ0ﾷ));
          } catch (Oₒଠ) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const Oₒଠ = this.path.resolve(this.dataFile),
          ᵒㅇଠ = this.path.resolve(process.cwd(), this.dataFile),
          ᵒⲟₒ = this.fs.existsSync(Oₒଠ),
          ﾷ0ﾷ = !ᵒⲟₒ && this.fs.existsSync(ᵒㅇଠ),
          ᣞଠᴑ = JSON.stringify(this.data);
        ᵒⲟₒ ? this.fs.writeFileSync(Oₒଠ, ᣞଠᴑ) : ﾷ0ﾷ ? this.fs.writeFileSync(ᵒㅇଠ, ᣞଠᴑ) : this.fs.writeFileSync(Oₒଠ, ᣞଠᴑ);
      }
    }
    lodash_get(Oₒଠ, ᵒㅇଠ, ᵒⲟₒ) {
      const ﾷ0ﾷ = ᵒㅇଠ.replace(/\[(\d+)\]/g, ".$1").split(".");
      let ᣞଠᴑ = Oₒଠ;
      for (const Oₒଠ of ﾷ0ﾷ) if (ᣞଠᴑ = Object(ᣞଠᴑ)[Oₒଠ], void 0 === ᣞଠᴑ) return ᵒⲟₒ;
      return ᣞଠᴑ;
    }
    lodash_set(Oₒଠ, ᵒㅇଠ, ᵒⲟₒ) {
      return Object(Oₒଠ) !== Oₒଠ || (Array.isArray(ᵒㅇଠ) || (ᵒㅇଠ = ᵒㅇଠ.toString().match(/[^.[\]]+/g) || []), ᵒㅇଠ.slice(0, -1).reduce((Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => Object(Oₒଠ[ᵒⲟₒ]) === Oₒଠ[ᵒⲟₒ] ? Oₒଠ[ᵒⲟₒ] : Oₒଠ[ᵒⲟₒ] = Math.abs(ᵒㅇଠ[ﾷ0ﾷ + 1]) >> 0 == +ᵒㅇଠ[ﾷ0ﾷ + 1] ? [] : {}, Oₒଠ)[ᵒㅇଠ[ᵒㅇଠ.length - 1]] = ᵒⲟₒ), Oₒଠ;
    }
    getdata(Oₒଠ) {
      let ᵒㅇଠ = this.getval(Oₒଠ);
      if (/^@/.test(Oₒଠ)) {
        const [, ᵒⲟₒ, ﾷ0ﾷ] = /^@(.*?)\.(.*?)$/.exec(Oₒଠ),
          ᣞଠᴑ = ᵒⲟₒ ? this.getval(ᵒⲟₒ) : "";
        if (ᣞଠᴑ) try {
          const Oₒଠ = JSON.parse(ᣞଠᴑ);
          ᵒㅇଠ = Oₒଠ ? this.lodash_get(Oₒଠ, ﾷ0ﾷ, "") : ᵒㅇଠ;
        } catch (Oₒଠ) {
          ᵒㅇଠ = "";
        }
      }
      return ᵒㅇଠ;
    }
    setdata(Oₒଠ, ᵒㅇଠ) {
      let ᵒⲟₒ = !1;
      if (/^@/.test(ᵒㅇଠ)) {
        const [, ﾷ0ﾷ, ᣞଠᴑ] = /^@(.*?)\.(.*?)$/.exec(ᵒㅇଠ),
          ᵒⲟᴑ = this.getval(ﾷ0ﾷ),
          Ꙩoᣞ = ﾷ0ﾷ ? "null" === ᵒⲟᴑ ? null : ᵒⲟᴑ || "{}" : "{}";
        try {
          const ᵒㅇଠ = JSON.parse(Ꙩoᣞ);
          this.lodash_set(ᵒㅇଠ, ᣞଠᴑ, Oₒଠ), ᵒⲟₒ = this.setval(JSON.stringify(ᵒㅇଠ), ﾷ0ﾷ);
        } catch (ᵒㅇଠ) {
          const ᵒⲟᴑ = {};
          this.lodash_set(ᵒⲟᴑ, ᣞଠᴑ, Oₒଠ), ᵒⲟₒ = this.setval(JSON.stringify(ᵒⲟᴑ), ﾷ0ﾷ);
        }
      } else ᵒⲟₒ = this.setval(Oₒଠ, ᵒㅇଠ);
      return ᵒⲟₒ;
    }
    getval(Oₒଠ) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(Oₒଠ);
        case "Quantumult X":
          return $prefs.valueForKey(Oₒଠ);
        case "Node.js":
          return this.data = this.loaddata(), this.data[Oₒଠ];
        default:
          return this.data && this.data[Oₒଠ] || null;
      }
    }
    setval(Oₒଠ, ᵒㅇଠ) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(Oₒଠ, ᵒㅇଠ);
        case "Quantumult X":
          return $prefs.setValueForKey(Oₒଠ, ᵒㅇଠ);
        case "Node.js":
          return this.data = this.loaddata(), this.data[ᵒㅇଠ] = Oₒଠ, this.writedata(), !0;
        default:
          return this.data && this.data[ᵒㅇଠ] || null;
      }
    }
    initGotEnv(Oₒଠ) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), Oₒଠ && (Oₒଠ.headers = Oₒଠ.headers ? Oₒଠ.headers : {}, Oₒଠ && (Oₒଠ.headers = Oₒଠ.headers ? Oₒଠ.headers : {}, void 0 === Oₒଠ.headers.cookie && void 0 === Oₒଠ.headers.Cookie && void 0 === Oₒଠ.cookieJar && (Oₒଠ.cookieJar = this.ckjar)));
    }
    get(Oₒଠ, ᵒㅇଠ = () => {}) {
      switch (Oₒଠ.headers && (delete Oₒଠ.headers["Content-Type"], delete Oₒଠ.headers["Content-Length"], delete Oₒଠ.headers["content-type"], delete Oₒଠ.headers["content-length"]), Oₒଠ.params && (Oₒଠ.url += "?" + this.queryStr(Oₒଠ.params)), void 0 === Oₒଠ.followRedirect || Oₒଠ.followRedirect || ((this.isSurge() || this.isLoon()) && (Oₒଠ["auto-redirect"] = !1), this.isQuanX() && (Oₒଠ.opts ? Oₒଠ.opts.redirection = !1 : Oₒଠ.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (Oₒଠ.headers = Oₒଠ.headers || {}, Object.assign(Oₒଠ.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(Oₒଠ, (Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => {
            !Oₒଠ && ᵒⲟₒ && (ᵒⲟₒ.body = ﾷ0ﾷ, ᵒⲟₒ.statusCode = ᵒⲟₒ.status ? ᵒⲟₒ.status : ᵒⲟₒ.statusCode, ᵒⲟₒ.status = ᵒⲟₒ.statusCode), ᵒㅇଠ(Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (Oₒଠ.opts = Oₒଠ.opts || {}, Object.assign(Oₒଠ.opts, {
            hints: !1
          })), $task.fetch(Oₒଠ).then(Oₒଠ => {
            const {
              statusCode: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            } = Oₒଠ;
            ᵒㅇଠ(null, {
              status: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            }, ᵒⲟᴑ, Ꙩoᣞ);
          }, Oₒଠ => ᵒㅇଠ(Oₒଠ && Oₒଠ.error || "UndefinedError"));
          break;
        case "Node.js":
          let ᵒⲟₒ = require("iconv-lite");
          this.initGotEnv(Oₒଠ), this.got(Oₒଠ).on("redirect", (Oₒଠ, ᵒㅇଠ) => {
            try {
              if (Oₒଠ.headers["set-cookie"]) {
                const ᵒⲟₒ = Oₒଠ.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                ᵒⲟₒ && this.ckjar.setCookieSync(ᵒⲟₒ, null), ᵒㅇଠ.cookieJar = this.ckjar;
              }
            } catch (Oₒଠ) {
              this.logErr(Oₒଠ);
            }
          }).then(Oₒଠ => {
            const {
                statusCode: ﾷ0ﾷ,
                statusCode: ᣞଠᴑ,
                headers: ᵒⲟᴑ,
                rawBody: Ꙩoᣞ
              } = Oₒଠ,
              oଠᣞ = ᵒⲟₒ.decode(Ꙩoᣞ, this.encoding);
            ᵒㅇଠ(null, {
              status: ﾷ0ﾷ,
              statusCode: ᣞଠᴑ,
              headers: ᵒⲟᴑ,
              rawBody: Ꙩoᣞ,
              body: oଠᣞ
            }, oଠᣞ);
          }, Oₒଠ => {
            const {
              message: ﾷ0ﾷ,
              response: ᣞଠᴑ
            } = Oₒଠ;
            ᵒㅇଠ(ﾷ0ﾷ, ᣞଠᴑ, ᣞଠᴑ && ᵒⲟₒ.decode(ᣞଠᴑ.rawBody, this.encoding));
          });
          break;
      }
    }
    post(Oₒଠ, ᵒㅇଠ = () => {}) {
      const ᵒⲟₒ = Oₒଠ.method ? Oₒଠ.method.toLocaleLowerCase() : "post";
      switch (Oₒଠ.body && Oₒଠ.headers && !Oₒଠ.headers["Content-Type"] && !Oₒଠ.headers["content-type"] && (Oₒଠ.headers["content-type"] = "application/x-www-form-urlencoded"), Oₒଠ.headers && (delete Oₒଠ.headers["Content-Length"], delete Oₒଠ.headers["content-length"]), void 0 === Oₒଠ.followRedirect || Oₒଠ.followRedirect || ((this.isSurge() || this.isLoon()) && (Oₒଠ["auto-redirect"] = !1), this.isQuanX() && (Oₒଠ.opts ? Oₒଠ.opts.redirection = !1 : Oₒଠ.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (Oₒଠ.headers = Oₒଠ.headers || {}, Object.assign(Oₒଠ.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[ᵒⲟₒ](Oₒଠ, (Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => {
            !Oₒଠ && ᵒⲟₒ && (ᵒⲟₒ.body = ﾷ0ﾷ, ᵒⲟₒ.statusCode = ᵒⲟₒ.status ? ᵒⲟₒ.status : ᵒⲟₒ.statusCode, ᵒⲟₒ.status = ᵒⲟₒ.statusCode), ᵒㅇଠ(Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ);
          });
          break;
        case "Quantumult X":
          Oₒଠ.method = ᵒⲟₒ, this.isNeedRewrite && (Oₒଠ.opts = Oₒଠ.opts || {}, Object.assign(Oₒଠ.opts, {
            hints: !1
          })), $task.fetch(Oₒଠ).then(Oₒଠ => {
            const {
              statusCode: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            } = Oₒଠ;
            ᵒㅇଠ(null, {
              status: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            }, ᵒⲟᴑ, Ꙩoᣞ);
          }, Oₒଠ => ᵒㅇଠ(Oₒଠ && Oₒଠ.error || "UndefinedError"));
          break;
        case "Node.js":
          let ﾷ0ﾷ = require("iconv-lite");
          this.initGotEnv(Oₒଠ);
          const {
            url: ᣞଠᴑ,
            ...ᵒⲟᴑ
          } = Oₒଠ;
          this.got[ᵒⲟₒ](ᣞଠᴑ, ᵒⲟᴑ).then(Oₒଠ => {
            const {
                statusCode: ᵒⲟₒ,
                statusCode: ᣞଠᴑ,
                headers: ᵒⲟᴑ,
                rawBody: Ꙩoᣞ
              } = Oₒଠ,
              oଠᣞ = ﾷ0ﾷ.decode(Ꙩoᣞ, this.encoding);
            ᵒㅇଠ(null, {
              status: ᵒⲟₒ,
              statusCode: ᣞଠᴑ,
              headers: ᵒⲟᴑ,
              rawBody: Ꙩoᣞ,
              body: oଠᣞ
            }, oଠᣞ);
          }, Oₒଠ => {
            const {
              message: ᵒⲟₒ,
              response: ᣞଠᴑ
            } = Oₒଠ;
            ᵒㅇଠ(ᵒⲟₒ, ᣞଠᴑ, ᣞଠᴑ && ﾷ0ﾷ.decode(ᣞଠᴑ.rawBody, this.encoding));
          });
          break;
      }
    }
    time(Oₒଠ, ᵒㅇଠ = null) {
      const ᵒⲟₒ = ᵒㅇଠ ? new Date(ᵒㅇଠ) : new Date();
      let ﾷ0ﾷ = {
        "M+": ᵒⲟₒ.getMonth() + 1,
        "d+": ᵒⲟₒ.getDate(),
        "H+": ᵒⲟₒ.getHours(),
        "m+": ᵒⲟₒ.getMinutes(),
        "s+": ᵒⲟₒ.getSeconds(),
        "q+": Math.floor((ᵒⲟₒ.getMonth() + 3) / 3),
        S: ᵒⲟₒ.getMilliseconds()
      };
      /(y+)/.test(Oₒଠ) && (Oₒଠ = Oₒଠ.replace(RegExp.$1, (ᵒⲟₒ.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let ᵒㅇଠ in ﾷ0ﾷ) new RegExp("(" + ᵒㅇଠ + ")").test(Oₒଠ) && (Oₒଠ = Oₒଠ.replace(RegExp.$1, 1 == RegExp.$1.length ? ﾷ0ﾷ[ᵒㅇଠ] : ("00" + ﾷ0ﾷ[ᵒㅇଠ]).substr(("" + ﾷ0ﾷ[ᵒㅇଠ]).length)));
      return Oₒଠ;
    }
    queryStr(Oₒଠ) {
      let ᵒㅇଠ = "";
      for (const ᵒⲟₒ in Oₒଠ) {
        let ﾷ0ﾷ = Oₒଠ[ᵒⲟₒ];
        null != ﾷ0ﾷ && "" !== ﾷ0ﾷ && ("object" == typeof ﾷ0ﾷ && (ﾷ0ﾷ = JSON.stringify(ﾷ0ﾷ)), ᵒㅇଠ += `${ᵒⲟₒ}\x3D${ﾷ0ﾷ}\x26`);
      }
      return ᵒㅇଠ = ᵒㅇଠ.substring(0, ᵒㅇଠ.length - 1), ᵒㅇଠ;
    }
    msg(ᵒㅇଠ = Oₒଠ, ᵒⲟₒ = "", ﾷ0ﾷ = "", ᣞଠᴑ = {}) {
      const ᵒⲟᴑ = Oₒଠ => {
        const {
          $open: ᵒㅇଠ,
          $copy: ᵒⲟₒ,
          $media: ﾷ0ﾷ,
          $mediaMime: ᣞଠᴑ
        } = Oₒଠ;
        switch (typeof Oₒଠ) {
          case void 0:
            return Oₒଠ;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: Oₒଠ
                };
              case "Loon":
              case "Shadowrocket":
                return Oₒଠ;
              case "Quantumult X":
                return {
                  "open-url": Oₒଠ
                };
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
                  const ᵒⲟᴑ = {};
                  let Ꙩoᣞ = Oₒଠ.openUrl || Oₒଠ.url || Oₒଠ["open-url"] || ᵒㅇଠ;
                  Ꙩoᣞ && Object.assign(ᵒⲟᴑ, {
                    action: "open-url",
                    url: Ꙩoᣞ
                  });
                  let oଠᣞ = Oₒଠ["update-pasteboard"] || Oₒଠ.updatePasteboard || ᵒⲟₒ;
                  if (oଠᣞ && Object.assign(ᵒⲟᴑ, {
                    action: "clipboard",
                    text: oଠᣞ
                  }), ﾷ0ﾷ) {
                    let Oₒଠ, ᵒㅇଠ, ᵒⲟₒ;
                    if (ﾷ0ﾷ.startsWith("http")) Oₒଠ = ﾷ0ﾷ;else if (ﾷ0ﾷ.startsWith("data:")) {
                      const [Oₒଠ] = ﾷ0ﾷ.split(";"),
                        [, ᣞଠᴑ] = ﾷ0ﾷ.split(",");
                      ᵒㅇଠ = ᣞଠᴑ, ᵒⲟₒ = Oₒଠ.replace("data:", "");
                    } else {
                      ᵒㅇଠ = ﾷ0ﾷ, ᵒⲟₒ = (Oₒଠ => {
                        const ᵒㅇଠ = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var ᵒⲟₒ in ᵒㅇଠ) if (0 === Oₒଠ.indexOf(ᵒⲟₒ)) return ᵒㅇଠ[ᵒⲟₒ];
                        return null;
                      })(ﾷ0ﾷ);
                    }
                    Object.assign(ᵒⲟᴑ, {
                      "media-url": Oₒଠ,
                      "media-base64": ᵒㅇଠ,
                      "media-base64-mime": ᣞଠᴑ ?? ᵒⲟₒ
                    });
                  }
                  return Object.assign(ᵒⲟᴑ, {
                    "auto-dismiss": Oₒଠ["auto-dismiss"],
                    sound: Oₒଠ.sound
                  }), ᵒⲟᴑ;
                }
              case "Loon":
                {
                  const ᵒⲟₒ = {};
                  let ᣞଠᴑ = Oₒଠ.openUrl || Oₒଠ.url || Oₒଠ["open-url"] || ᵒㅇଠ;
                  ᣞଠᴑ && Object.assign(ᵒⲟₒ, {
                    openUrl: ᣞଠᴑ
                  });
                  let ᵒⲟᴑ = Oₒଠ.mediaUrl || Oₒଠ["media-url"];
                  return ﾷ0ﾷ?.startsWith("http") && (ᵒⲟᴑ = ﾷ0ﾷ), ᵒⲟᴑ && Object.assign(ᵒⲟₒ, {
                    mediaUrl: ᵒⲟᴑ
                  }), console.log(JSON.stringify(ᵒⲟₒ)), ᵒⲟₒ;
                }
              case "Quantumult X":
                {
                  const ᣞଠᴑ = {};
                  let ᵒⲟᴑ = Oₒଠ["open-url"] || Oₒଠ.url || Oₒଠ.openUrl || ᵒㅇଠ;
                  ᵒⲟᴑ && Object.assign(ᣞଠᴑ, {
                    "open-url": ᵒⲟᴑ
                  });
                  let Ꙩoᣞ = Oₒଠ["media-url"] || Oₒଠ.mediaUrl;
                  ﾷ0ﾷ?.startsWith("http") && (Ꙩoᣞ = ﾷ0ﾷ), Ꙩoᣞ && Object.assign(ᣞଠᴑ, {
                    "media-url": Ꙩoᣞ
                  });
                  let oଠᣞ = Oₒଠ["update-pasteboard"] || Oₒଠ.updatePasteboard || ᵒⲟₒ;
                  return oଠᣞ && Object.assign(ᣞଠᴑ, {
                    "update-pasteboard": oଠᣞ
                  }), console.log(JSON.stringify(ᣞଠᴑ)), ᣞଠᴑ;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(ᵒㅇଠ, ᵒⲟₒ, ﾷ0ﾷ, ᵒⲟᴑ(ᣞଠᴑ));
          break;
        case "Quantumult X":
          $notify(ᵒㅇଠ, ᵒⲟₒ, ﾷ0ﾷ, ᵒⲟᴑ(ᣞଠᴑ));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let Oₒଠ = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        Oₒଠ.push(ᵒㅇଠ), ᵒⲟₒ && Oₒଠ.push(ᵒⲟₒ), ﾷ0ﾷ && Oₒଠ.push(ﾷ0ﾷ), console.log(Oₒଠ.join("\n")), this.logs = this.logs.concat(Oₒଠ);
      }
    }
    debug(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.debug}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    info(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.info}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    warn(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.warn}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    error(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.error}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    log(...Oₒଠ) {
      Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator));
    }
    logErr(Oₒଠ, ᵒㅇଠ) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `\u2757\ufe0f${this.name}\x2C\x20\u9519\u8bef\x21`, ᵒㅇଠ, Oₒଠ);
          break;
        case "Node.js":
          this.log("", `\u2757\ufe0f${this.name}\x2C\x20\u9519\u8bef\x21`, ᵒㅇଠ, void 0 !== Oₒଠ.message ? Oₒଠ.message : Oₒଠ, Oₒଠ.stack);
          break;
      }
    }
    wait(Oₒଠ) {
      return new Promise(ᵒㅇଠ => setTimeout(ᵒㅇଠ, Oₒଠ));
    }
    done(Oₒଠ = {}) {
      const ᵒㅇଠ = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `\ud83d\udd14${this.name}\x2C\x20\u7ed3\u675f\x21\x20\ud83d\udd5b\x20${ᵒㅇଠ}\x20\u79d2`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(Oₒଠ);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(Oₒଠ, ᵒㅇଠ);
}