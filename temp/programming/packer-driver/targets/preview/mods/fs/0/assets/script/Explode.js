System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PoolManager, _dec, _class, _crd, ccclass, property, Explode;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./framework/PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa341Z9YJdBX5Rd640Hxh42", "Explode", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Explode", Explode = (_dec = ccclass('Explode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Explode, _Component);

        function Explode() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Explode.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.onEnable = function onEnable() {
          this.scheduleOnce(this._putBack, 1);
        };

        _proto._putBack = function _putBack() {
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().putNode(this.node);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Explode;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Explode.js.map