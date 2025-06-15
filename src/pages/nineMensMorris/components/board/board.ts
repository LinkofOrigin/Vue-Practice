import TokenSlot from "../boardSlot/tokenSlot";

const gridMap = new Map<number, number[]>([
    [1, [2, 10]],
    [2, [1, 3, 5]],
    [3, [2, 15]],
    [4, [5, 11]],
    [5, [4, 2, 6, 8]],
    [6, [5, 14]],
    [7, [8, 12]],
    [8, [5, 7, 9]],
    [9, [8, 13]],
    [10, [1, 11, 22]],
    [11, [4, 10, 12, 19]],
    [12, [7, 11, 16]],
    [13, [9, 14, 18]],
    [14, [6, 13, 15, 18]],
    [15, [3, 14, 24]],
    [16, [12, 17]],
    [17, [16, 18, 20]],
    [18, [13, 17]],
    [19, [11, 20]],
    [20, [17, 19, 21, 23]],
    [21, [14, 20]],
    [22, [10, 23]],
    [23, [20, 22, 24]],
    [24, [15, 23]],
]);

class Board {
    grid: Array<TokenSlot> = [];

    constructor() {
        // Initialize our full grid
        for (let gridIndex = 1; gridIndex <= 24; gridIndex++) {
            this.grid[gridIndex] = new TokenSlot();
        }
        
        // Assign the neighbors
        gridMap.forEach((neighbors, slotIndex) => {
            neighbors.forEach((neighborIndex) => {
                this.grid[slotIndex].addNeighbor(this.grid[neighborIndex]);
            });
        });
    }

    getTokenSlot(slotIndex: number): TokenSlot {
        return this.grid[slotIndex];
    }
}

export default Board;