export class MainCharacter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
        this.scene.add.existing(this);
        this.setInteractive();
    }

    isRun = false;

    runRight() {
        this.setPosition(this.x + 50, this.y)
    }

    runLeft() {
        this.setPosition(this.x - 50, this.y)
    }
    jump() {
        if (this.isRun) return;
        this.scene.tweens.add({
            targets: this,
            y: this.y - 200,
            duration: 500,
            ease: "sine.inout",
            onStart: () => {
                this.isRun = true
            },
            onComplete: () => {
                this.scene.tweens.add({
                    targets: this,
                    y: this.y + 200,
                    duration: 500,
                    ease: "sine.inout",
                    onComplete: () => {
                        this.isRun = false;
                    }
                })
            }
        })
    }
}