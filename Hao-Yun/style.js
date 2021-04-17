const rows = 50;
const cols = 50;

let currGen =[rows];
let nextGen =[rows];

function createGenArrays() {
    for (let i = 0; i < rows; i++) {
        currGen[i] = new Array(cols);
        nextGen[i] = new Array(cols);
    }
}

function initGenArrays() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            currGen[i][j] = 0;
            nextGen[i][j] = 0;
        }
    }
}

function createMap() {
    let Map = document.querySelector('#Map');

    let tbl = document.createElement('table');
    tbl.setAttribute('id','Mapgrid');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click',cellClick);        
            tr.appendChild(cell);
        }
        tbl.appendChild(tr);
    }

    Map.appendChild(tbl);
}

function cellClick() {
    let loc = this.id.split("_");
    let row = Number(loc[0]);
    let col = Number(loc[1]);

    if (this.className==='alive') {
        this.setAttribute('class', 'dead');
        currGen[row][col] = 0;
    } else{
        this.setAttribute('class', 'alive');
        currGen[row][col] = 1;
    }
}

window.onload=()=>{
    createMap();
    createGenArrays();
    initGenArrays();
}