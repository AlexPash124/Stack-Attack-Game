import {screenConfig} from "./config.js";
import {MainCharacter} from "./mainCharacter.js";

export default class GameSceneUI extends Phaser.Scene {

    constructor() {
        super("StackAttackGame");
    }

    mainCharacter;

    preload = () => {
        this.load.image("box", "assets/box.png");
        this.load.image("back", "assets/back.png");
        this.load.image("mainСharacter", "assets/mainСharacter.png");
        this.load.image("line", "assets/line.png");
    }
    create = () => {
        const fonSprite = this.add.sprite(0, 0, "back").setOrigin(0, 0);
        fonSprite.setScale(screenConfig.WIDTH / fonSprite.width, screenConfig.HEIGHT / fonSprite.height);
        const boxSprite = this.add.sprite(100, 585, "box");
        boxSprite.setScale(.2);
        const line = this.add.sprite(screenConfig.WIDTH / 2, screenConfig.HEIGHT - 50, "line");
        line.setScale(1.2);

        this.createMainCharacter();
        this.addListeners();
    }

    createMainCharacter() {
        this.arrow = this.input.keyboard.createCursorKeys();
        this.mainCharacter = new MainCharacter(this, 100, 585, "mainСharacter");
        this.mainCharacter.setScale(0.4);

    }

    addListeners() {
        window.addEventListener("keydown", (data) => {
            console.error(data)
            if (data.keyCode == 39) {
                this.mainCharacter.runRight();
            }
            if (data.keyCode == 37) {
                this.mainCharacter.runLeft();
            }
            if (data.keyCode == 38) {
                this.mainCharacter.jump();
            }
        })
    }
}
