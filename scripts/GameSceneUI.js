import {screenConfig} from "./config.js";

export default class GameSceneUI extends Phaser.Scene {

    constructor() {
        super("StackAttackGame");
    }

    preload = () => {
        this.load.image("box", "assets/box.png");
        this.load.image("back", "assets/back.png");
    }
    create = () => {
        const fonSprite = this.add.sprite(0, 0, "back").setOrigin(0, 0);
        fonSprite.setScale(screenConfig.WIDTH / fonSprite.width, screenConfig.HEIGHT / fonSprite.height);
        const boxSprite = this.add.sprite(-1, 585, "box").setOrigin(0, 0);
        boxSprite.setScale(.2);
    }
}
