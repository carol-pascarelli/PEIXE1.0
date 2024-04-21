var config = { 
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    
    this.load.image(`logoAzul`, `assets/logo-inteli_branco.png`);

    this.load.image(`logoBranco`, `assets/logo-inteli_azul.png`);

    this.load.image(`peixe`, `assets/peixes/tartaruga.png`);

    this.load.image(`alga`, `assets/algas-fundo.png`);

    this.load.image(`concha`, `assets/conchas.png`);

    this.load.image(`peixinhos-fundo`, `assets/peixinhos-fundo.png`);


}

function create(){   

this.add.image(400, 300, 'mar');

if (game.device.os.desktop) { 
    this.add.image(400, 525, `logoBranco`).setScale(0.5);
} else {
    this.add.image(400, 525, `logoAzul`).setScale(0.5);
}

peixinho = this.add.image(400, 300, `peixe`)

peixinho.setFlip(true, false);

this.add.image(120, 490, 'concha').setScale(0.5);

this.add.image(680, 490, 'concha').setScale(0.5).setFlip(true);

this.add.image(280, 520, 'alga').setScale(0.2);

this.add.image(700, 200, 'peixinhos-fundo').setScale(0.4).setFlip(true);

this.add.image(300, 120, 'peixinhos-fundo').setScale(0.4).setFlip(true);

this.add.image(10, 260, 'peixinhos-fundo').setScale(0.4);

this.add.image(500, 350, 'peixinhos-fundo').setScale(0.4);

}
 
function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
 }