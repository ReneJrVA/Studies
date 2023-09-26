function Game(){
    this.jump = () => alert ('De personage sprong');
    this.crouch = () => alert ('De personage bukt.');
}

Game.prototype.loopt = () => alert ('De personage loopt');

const newGame = new Game();

const mijnGame = 'fifa'

console.log(mijnGame.toUpperCase());