class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alive = Math.random() >= .8;
        this.neighbors = [];

    }

    display() {
        if (this.alive) {
            fill(0);
        } else {
            fill(255);
        }
        stroke(0);
        rect(this.x * CELLWIDTH, this.y * CELLWIDTH, CELLWIDTH, CELLWIDTH);
    }

    getNeighbors() {
        let right;
        let bottom;
        let left;
        let top;

        let rightBottom;
        let leftBottom;
        let topRight;
        let topLeft;

        try {
            right = grid[this.x + 1][this.y];
        } catch {
            right = undefined;
        }

        try {
            bottom = grid[this.x][this.y + 1];
        } catch {
            bottom = undefined;
        }

        try {
            left = grid[this.x - 1][this.y];
        } catch {
            left = undefined;
        }

        try {
            top = grid[this.x][this.y - 1];
        } catch {
            top = undefined;
        }

        try {
            rightBottom = grid[this.x + 1][this.y + 1];
        } catch {
            rightBottom = undefined;
        }

        try {
            leftBottom = grid[this.x - 1][this.y + 1];
        } catch {
            leftBottom = undefined;
        }

        try {
            topRight = grid[this.x + 1][this.y - 1];
        } catch {
            topRight = undefined;
        }

        try {
            topLeft = grid[this.x - 1][this.y - 1];
        } catch {
            topLeft = undefined;
        }




        if (right != undefined) {
            this.neighbors.push(right);
        }

        if (bottom != undefined) {
            this.neighbors.push(bottom);
        }

        if (left != undefined) {
            this.neighbors.push(left);
        }

        if (top != undefined) {
            this.neighbors.push(top);
        }

        if (rightBottom != undefined) {
            this.neighbors.push(rightBottom);
        }

        if (leftBottom != undefined) {
            this.neighbors.push(leftBottom);
        }

        if (topRight != undefined) {
            this.neighbors.push(topRight);
        }

        if (topLeft != undefined) {
            this.neighbors.push(topLeft);
        }
    }
}