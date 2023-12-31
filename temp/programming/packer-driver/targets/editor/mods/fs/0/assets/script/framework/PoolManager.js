System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, NodePool, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f490aFvLS9C/bqwLGmSZgIL", "PoolManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec(_class = (_temp = _class2 = class PoolManager {
        constructor() {
          _defineProperty(this, "_dictPool", {});

          _defineProperty(this, "_dictPrefab", {});
        }

        static instance() {
          if (!this._instance) {
            this._instance = new PoolManager();
          }

          return this._instance;
        }

        getNode(prefab, parent) {
          let name = prefab.data.name; // console.log('get node   ' + name);

          let node = null;
          this._dictPrefab[name] = prefab;
          const pool = this._dictPool[name];

          if (pool) {
            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            this._dictPool[name] = new NodePool();
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.active = true;
          return node;
        }

        putNode(node) {
          let name = node.name; // console.log('put node   ' + name);

          node.parent = null;

          if (!this._dictPool[name]) {
            this._dictPool[name] = new NodePool();
          }

          this._dictPool[name].put(node);
        }

      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PoolManager.js.map