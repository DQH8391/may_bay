System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MovingSceneBg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96ab9fWUgFHu4WZkXRj7lzH", "MovingSceneBg", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MovingSceneBg", MovingSceneBg = (_dec = ccclass('MovingSceneBg'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class MovingSceneBg extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg01", _descriptor, this);

          _initializerDefineProperty(this, "bg02", _descriptor2, this);

          _defineProperty(this, "_bgSpeed", 10);

          _defineProperty(this, "_bgMovingRange", 90);
        }

        start() {
          this._init();
        }

        update(deltaTime) {
          this._moveBackground(deltaTime);
        }

        _init() {
          this.bg01.setPosition(0, 0, 0);
          this.bg02.setPosition(0, 0, -this._bgMovingRange);
        }

        _moveBackground(deltaTime) {
          this.bg01.setPosition(0, 0, this.bg01.position.z + this._bgSpeed * deltaTime);
          this.bg02.setPosition(0, 0, this.bg02.position.z + this._bgSpeed * deltaTime);

          if (this.bg01.position.z > this._bgMovingRange) {
            this.bg01.setPosition(0, 0, this.bg02.position.z - this._bgMovingRange);
          } else if (this.bg02.position.z > this._bgMovingRange) {
            this.bg02.setPosition(0, 0, this.bg01.position.z - this._bgMovingRange);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg01", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg02", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MovingSceneBg.js.map