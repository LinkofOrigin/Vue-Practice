
/*
TicTacToe
    9x9 grid (two-dimensional array)
    Two players
    who’s turn it is (currentPlayerTurn)
    markerState = empty, X, O
    check if a row, column or diag is winning
    Checked after each successful turn

    The current player.
    The state of the game (has it started/finished).
    How to claim a square for the current player.
    The state of a particular square (e.g. has it been claimed, and if so, by who).
    Determine who has won the game.
    Has there been a draw?
*/
class GridSlot {
    location: number = 0;
    marker: number = 0; // 0 = empty, 1 = player 1, 2 = player 2
}

class TicTacToe {
    gridSize = 9;
    grid: GridSlot[];
    currentPlayer: number = 1;
    winningPlayer: number = 0;

    constructor() {
        this.grid = []
        for (let i = 0; i < this.gridSize; i++) {
            this.grid[i] = new GridSlot()
            this.grid[i].location = i;
        }
    }

    startGame() {
        // Initialize board state (empty)
        this.winningPlayer = 0
        this.grid.forEach((gridSlot: GridSlot) => {
            gridSlot.marker = 0;
        })
        // Pick a random player
        this.currentPlayer = 1;
    }

    gridLines = [
        // Horizontals
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Verticals
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diags
        [0, 4, 8],
        [2, 4, 6],
    ]
    resolveBoardState() {
        // Check if any player has won
        if (this.winningPlayer === 0) {
            // Check for draw
            let draw = this.boardIsInDrawState();
            // If not, swap turn
            if (!draw) {
                // If the current player is 1, swap to 2. Otherwise, do the opposite.
                if (this.currentPlayer === 1) {
                    this.currentPlayer = 2;
                }
                else {
                    this.currentPlayer = 1;
                }
            }
            else {
                console.log("We got a draw!")
            }
        }
    }

    boardIsInDrawState(): boolean {
        let atLeastOneFinishedLine = false;
        let allSlotsFilled = true;
        this.grid.forEach((gridSlot: GridSlot) => {
            if (this.isInFinishedLine(gridSlot)) {
                atLeastOneFinishedLine = true;
            }

            if (gridSlot.marker === 0) {
                allSlotsFilled = false;
            }
        })
        return !atLeastOneFinishedLine && allSlotsFilled;
    }

    isInFinishedLine(gridSlot: GridSlot): boolean {
        let isFinishedLine = false;
        let currentSlotIndex = gridSlot.location;
        let targetPlayer = gridSlot.marker;
        if (targetPlayer !== 0) {
            this.gridLines.forEach((line) => {
                if (line.includes(currentSlotIndex)) {
                    // The items in this line could be valid
                    if (this.grid[line[0]].marker === targetPlayer &&
                        this.grid[line[1]].marker === targetPlayer &&
                        this.grid[line[2]].marker === targetPlayer
                    ) {
                        // All slots in this line are set to the same player
                        this.endGameWithWinner(targetPlayer);
                        isFinishedLine = true;
                    }
                }
            })
        }
        return isFinishedLine;
    }

    endGameWithWinner(playerId: number) {
        // the player won
        this.winningPlayer = playerId;
    }

    placeMarkerOnGrid(playerId: number, gridSlot: GridSlot) {
        // Set the grid location to that marker
        if (gridSlot.marker === 0) {
            gridSlot.marker = playerId;
            this.isInFinishedLine(gridSlot);
            this.resolveBoardState();
        }
    }

    canPlaceMarker(gridSlot: GridSlot) {
        // Is that slot empty?
        return gridSlot.marker === 0;
    }

}

export default TicTacToe;