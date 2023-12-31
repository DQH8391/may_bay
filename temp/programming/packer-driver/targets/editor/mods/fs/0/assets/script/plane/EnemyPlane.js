System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider, Constant, PoolManager, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, OUTOFBOUNCE, EnemyPlane;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../framework/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../framework/PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4b84GYhj9IHoWH4mrALeYo", "EnemyPlane", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      OUTOFBOUNCE = 50;

      _export("EnemyPlane", EnemyPlane = (_dec = ccclass('EnemyPlane'), _dec(_class = (_class2 = (_temp = class EnemyPlane extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "createBulletTime", _descriptor, this);

          _defineProperty(this, "_enemySpeed", 0);

          _defineProperty(this, "_needBullet", false);

          _defineProperty(this, "_gameManager", null);

          _defineProperty(this, "_currCreateBulletTime", 0);
        }

        onEnable() {
          const collider = this.getComponent(Collider);
          collider.on('onTriggerEnter', this._onTriggerEnter, this);
        }

        onDisable() {
          const collider = this.getComponent(Collider);
          collider.off('onTriggerEnter', this._onTriggerEnter, this);
        }

        update(deltaTime) {
          const pos = this.node.position;
          const movePos = pos.z + this._enemySpeed;
          this.node.setPosition(pos.x, pos.y, movePos);

          if (this._needBullet) {
            this._currCreateBulletTime += deltaTime;

            if (this._currCreateBulletTime > this.createBulletTime) {
              this._gameManager.createEnemyBullet(this.node.position);

              this._currCreateBulletTime = 0;
            }
          }

          if (movePos > OUTOFBOUNCE) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().putNode(this.node); // this.node.destroy();
          }
        }

        show(gameManager, speed, needBullet) {
          this._gameManager = gameManager;
          this._enemySpeed = speed;
          this._needBullet = needBullet;
        }

        _onTriggerEnter(event) {
          const collisionGroup = event.otherCollider.getGroup();

          if (collisionGroup === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).CollisionType.SELF_PLANE || collisionGroup === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).CollisionType.SELF_BULLET) {
            // console.log('trigger enemy destroy');
            this._gameManager.playAudioEffect('enemy');

            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().putNode(this.node); // this.node.destroy();

            this._gameManager.addScore();

            this._gameManager.createEnemyEffect(this.node.position);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "createBulletTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnemyPlane.js.map