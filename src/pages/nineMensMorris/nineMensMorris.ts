import Board from "./components/board/board";
import { PLAYER } from "./components/playerDisplay/player";
import Player from "./components/playerDisplay/player";
import type PlayerToken from "./components/playerPiece/playerToken";


class NineMensMorris {

    currentPlayer: Player;
    playerOne: Player;
    playerTwo: Player;
    board: Board;
    selectedToken: PlayerToken | null = null;

    constructor() {
        this.playerOne = new Player(PLAYER.ONE, '#FF0000');
        this.playerTwo = new Player(PLAYER.TWO, '#0000FF');
        this.board = new Board();
        this.currentPlayer = this.playerOne; // Just default it so we don't have to deal with null checks everywhere
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

    swapCurrentPlayer(): void {
        if (this.playerOne.id === this.currentPlayer.id) {
            this.currentPlayer = this.playerTwo
        }
        else if (this.playerTwo.id === this.currentPlayer.id) {
            this.currentPlayer = this.playerOne
        }
        else {
            alert("Who added another player?!")
        }
    }

    removeTokenFromPlayer(player: Player): PlayerToken {
        return player.removeFromHand()
    }

    resolveMillFor(token: PlayerToken): boolean {
        return false
    }

    setSelectedToken(newSelectedToken: PlayerToken) {
        if (this.selectedToken !== null) {
            this.selectedToken.isHighlighted = false
        }
        this.selectedToken = newSelectedToken
        this.selectedToken.isHighlighted = true
    }
}

export default NineMensMorris