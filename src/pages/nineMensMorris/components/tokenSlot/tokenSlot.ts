import type PlayerToken from "../playerPiece/playerToken";


class TokenSlot {
    neighbors: Array<TokenSlot> = [];
    currentToken: PlayerToken | null = null;

    isNeighbor(otherToken: PlayerToken): boolean {
        let tokenIsNeighbor = false
        this.neighbors.forEach((tokenSlot: TokenSlot) => {
            if (tokenSlot.currentToken === otherToken) {
                tokenIsNeighbor = true
            }
        })
        return tokenIsNeighbor
    }

    addNeighbor(newNeighbor: TokenSlot) {
        this.neighbors.push(newNeighbor);
    }

    setToken(token: PlayerToken) {
        if (this.currentToken !== null) {
            throw new Error("Token already in slot! Can't place another one!")
        }
        this.currentToken = token;
    }

    removeToken(): PlayerToken {
        if (this.currentToken === null) {
            throw new Error("Can't remove token from slot when no token exists!");
        }
        let returnToken = this.currentToken as PlayerToken;
        this.currentToken = null;
        return returnToken;
    }
}

export default TokenSlot;