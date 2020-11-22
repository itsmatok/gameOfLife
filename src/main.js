// Canvas Size
const WIDTH = 800;
const HEIGHT = 800;

let grid = [];
let gridCopy = [];

const CELLWIDTH = 10;


let cols = Math.floor(WIDTH / CELLWIDTH);
let rows = Math.floor(HEIGHT / CELLWIDTH);

setup = () => {
    createCanvas(WIDTH, HEIGHT);
    createGrid();
    getNeighbors();

}


draw = () => {
    displayGrid();
    frameRate(30);
    gameOfLife();

}


createGrid = () => {
    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        gridCopy[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i].push(new Cell(i, j));
        }

    }
}



displayGrid = () => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[i][j].display();
        }
    }
}


getNeighbors = () => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[i][j].getNeighbors();
        }

    }
}


gameOfLife = () => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let counter = 0;

            // live cell with two or three live neighbors survives??
            if (grid[i][j].alive) {

                for (let k = 0; k < grid[i][j].neighbors.length; k++) {
                    if (grid[i][j].neighbors[k].alive) {
                        counter++;
                    }
                }

                if (counter < 2) {
                    gridCopy[i][j] = false;
                }

                else if (counter == 2) {
                    gridCopy[i][j] = true;
                }

                else if (counter == 3) {
                    gridCopy[i][j] = true;
                }

                else if (counter >= 4) {
                    gridCopy[i][j] = false;
                }
            }

            // any dead cell with three live neighbors becomes a live cell??
            else if (!grid[i][j].alive) {

                for (let k = 0; k < grid[i][j].neighbors.length; k++) {
                    if (grid[i][j].neighbors[k].alive) {
                        counter++;
                    }


                }

                if (counter == 3) {
                    gridCopy[i][j] = true;
                } else {
                    gridCopy[i][j] = false;
                }
            }


        }


    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[i][j].alive = gridCopy[i][j];
        }
    }


}



