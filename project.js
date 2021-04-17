var center = "1949";

function createTable() {
    let rows = 40;
    let cols = 100;
    let table = document.getElementById("table");


    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.id = i + "" + j;
            cell.className = "dead";
            cell.addEventListener('click', isAlive);
            row.append(cell);
        }
        table.append(row);
    }
}

function isAlive() {
    var id = this.id;
    let cell = document.getElementById(id);
    if (cell.className == "alive") {
        cell.className = "dead";
    } else {
        cell.className = "alive";
    }
}

function clearAll() {
    let rows = 40;
    let cols = 100;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let id = i + "" + j;
            let cell = document.getElementById(id);
            cell.className = "dead";
        }
    }
}

function shape(shape) {
    let cell = document.getElementById(center);
    if (shape == "block") {
        clearAll();
        let cell2 = document.getElementById("1950");
        let cell3 = document.getElementById("2049");
        let cell4 = document.getElementById("2050");
        cell.className = "alive";
        cell2.className = "alive";
        cell3.className = "alive";
        cell4.className = "alive";

    } else if (shape == "blinker") {
        clearAll();
        let cell2 = document.getElementById("1950");
        let cell3 = document.getElementById("1948");
        cell.className = "alive";
        cell2.className = "alive";
        cell3.className = "alive";
    } else if (shape == "beacon") {
        clearAll();
        cell.className = "alive";
        let cell2 = document.getElementById("1948");
        let cell3 = document.getElementById("1848");
        let cell4 = document.getElementById("1849");
        let cell5 = document.getElementById("2050");
        let cell6 = document.getElementById("2051");
        let cell7 = document.getElementById("2150");
        let cell8 = document.getElementById("2151");
        cell2.className = "alive";
        cell3.className = "alive";
        cell4.className = "alive";
        cell5.className = "alive";
        cell6.className = "alive";
        cell7.className = "alive";
        cell8.className = "alive";
        cell9.className = "alive";
    }
}