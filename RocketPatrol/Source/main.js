// Create game configuration object
let config =
{
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
};

let game = new Phaser.Game(config); // create main game object

// reserve some keyboard bindings
let keyF, keyLEFT, keyRIGHT;