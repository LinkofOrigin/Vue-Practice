import PlayerToken from "../playerPiece/playerToken";

export enum PLAYER {ONE, TWO}
class Player {
    id: PLAYER;
    color: string;
    tokens: Array<PlayerToken> = [];
    tokensInHand: Array<PlayerToken> = [];
    
    constructor(playerId: PLAYER, playerColor?: string) {
        this.id = playerId;
        this.color = playerColor !== undefined ? playerColor : '#ffffff';
    }

    initializeTokens(numTokens: number) {
        this.tokens = []; // Empty the list first
        let tokenCounter = numTokens;

        // Add references to some new tokens. Also put them in our hand to start
        while (tokenCounter > 0) {
            let newToken = new PlayerToken(this.id, this.color);
            this.tokens.push(newToken);
            this.tokensInHand.push(newToken);
            tokenCounter--;
        }
    }

    removeFromHand(): PlayerToken {
        console.log("Removing token from hand")
        if (this.tokensInHand.length <= 0) {
            throw new Error("Player hand is empty! Can't remove a token!")
        }
        return this.tokensInHand.pop() as PlayerToken;
    }
}

export default Player