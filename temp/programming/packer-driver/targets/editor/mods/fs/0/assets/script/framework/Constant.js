System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Constant, _crd, ccclass, property;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Constant", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ba7ak0TVBK4bJaIq49qiJK", "Constant", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Constant", Constant = class Constant {});

      _defineProperty(Constant, "EnemyType", {
        TYPE1: 1,
        TYPE2: 2
      });

      _defineProperty(Constant, "Combination", {
        PLAN1: 1,
        PLAN2: 2,
        PLAN3: 3
      });

      _defineProperty(Constant, "CollisionType", {
        SELF_PLANE: 1 << 1,
        ENEMY_PLANE: 1 << 2,
        SELF_BULLET: 1 << 3,
        ENEMY_BULLET: 1 << 4,
        BULLET_PROP: 1 << 5
      });

      _defineProperty(Constant, "BulletPropType", {
        BULLET_M: 1,
        BULLET_H: 2,
        BULLET_S: 3
      });

      _defineProperty(Constant, "Direction", {
        LEFT: 1,
        MIDDLE: 2,
        RIGHT: 3
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Constant.js.map