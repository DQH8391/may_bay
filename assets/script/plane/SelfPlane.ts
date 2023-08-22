
import { _decorator, Component, Node, Collider, ITriggerEvent, AudioSource } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;



@ccclass('SelfPlane')
export class SelfPlane extends Component {
    @property(Node)
    public explode: Node = null;
    @property(Node)
    public bloodFace: Node = null;
    @property(Node)
    public blood: Node = null;
    public lifeValue = 5;
    public isDie = false;

    private _currLife = 0;
    private _audioEffect: AudioSource = null;

    start(){
        this._audioEffect = this.getComponent(AudioSource);
    }


    onEnable () {
        const collider = this.getComponent(Collider);
        collider.on('onTriggerEnter', this._onTriggerEnter, this);
    }

    onDisable () {
        const collider = this.getComponent(Collider);
        collider.off('onTriggerEnter', this._onTriggerEnter, this);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    public init(){
        this._currLife = this.lifeValue;
        this.isDie = false;
        this.explode.active = false;
        this.bloodFace.setScale(1, 1, 1);
    }

    private _onTriggerEnter(event: ITriggerEvent){
        // some trick to fix "trigger vs trigger problem" in physx
        if(event.otherCollider.material.friction == 100){
            return;
        }

        const collisionGroup = event.otherCollider.getGroup();
        if(collisionGroup === Constant.CollisionType.ENEMY_PLANE || collisionGroup === Constant.CollisionType.ENEMY_BULLET){
            if(this._currLife === this.lifeValue){
                this.blood.active = true;
            }
            this._currLife --;
            this.bloodFace.setScale(this._currLife / this.lifeValue, 1, 1);
            if(this._currLife <=0){
                this.isDie = true;
                this._audioEffect.play();
                this.explode.active = true;
                this.blood.active = false;
                console.log('self plane is die');
            }
        }
    }

}


