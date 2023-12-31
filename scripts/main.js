let scene = new Phaser.Scene("Stack-Attack-Game");

scene.preload = function() {
    this.load.image('box', 'assets/box.png');
    this.load.image('Fon', 'assets/Fon.png');
};

scene.create = function() {

    let fonSprite = this.add.sprite(0, 0, 'Fon').setOrigin(0, 0);
    fonSprite.setScale(1280 / fonSprite.width, 663 / fonSprite.height);
    let boxSprite = this.add.sprite(-1, 585, 'box').setOrigin(0, 0);
    boxSprite.setScale(0.2);
};

let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: scene
};

let game = new Phaser.Game(config);
