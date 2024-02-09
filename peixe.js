var config = {
        type: Phaser.AUTO,
        height: 600,
        width: 800, 

        scene: {
            preload: preload,
            create: create,
            update: update
        }
};

var peixe
var game = new Phaser.Game(config);

function preload() {
    this.load.image(`mar`, `assets/bg_azul-escuro.png`);
    this.load.image(`logo`, assets/logo-inteli_azul.png);
    this.load.image(`peixe`, àssets/peixes/tartaruga.png);

}

function create() {
    this.add.image(400, 300, `mar`);
    this.add.image(400,300, `logo`).setScale(0.5)

    peixe = this.add.image(400,300, `peixe`)

    peixe.setFlip(true, false)
}

function update() {

    peixe.x = this.input.x
    peixe = this.input.type
    
}