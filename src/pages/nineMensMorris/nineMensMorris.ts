import Board from "./components/board/board";
import { PLAYER } from "./components/playerDisplay/player";
import Player from "./components/playerDisplay/player";


class NineMensMorris {

    currentPlayer?: Player;
    playerOne: Player;
    playerTwo: Player;
    board: Board;

    constructor() {
        this.playerOne = new Player(PLAYER.ONE, '#FF0000');
        this.playerTwo = new Player(PLAYER.TWO, '#0000FF');
        this.board = new Board();
    }

    startNewGame(): void {
        this.playerOne.initializeTokens(9);
        this.playerTwo.initializeTokens(9);
        let randomPlayer = Math.round(Math.random());
        if (randomPlayer === 0) {
            this.currentPlayer = this.playerOne;
        }
        else {
            this.currentPlayer = this.playerTwo;
        }
    }

}

export default NineMensMorris