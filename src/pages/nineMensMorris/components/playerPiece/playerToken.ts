import type { PLAYER } from "../playerDisplay/player";

class PlayerToken {
    playerId: PLAYER;
    color: string;
    isHighlighted: boolean = false;

    constructor(tokenPlayer: number, tokenColor: string) {
        this.playerId = tokenPlayer;
        this.color = tokenColor;
    }
}

export default PlayerToken;