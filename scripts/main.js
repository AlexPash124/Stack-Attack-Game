import GameSceneUI from "./GameSceneUI.js";
import {screenConfig} from "./config.js";

let scene = new GameSceneUI();

let config = {
    type: Phaser.AUTO,
    width: screenConfig.WIDTH,
    height: screenConfig.HEIGHT,
    scene: scene
};

let game = new Phaser.Game(config);
