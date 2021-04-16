function createTable() {
    let rows = 40;
    let cols = 100;
    let table = document.getElementById("table");


    for (var i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.id = i + "" + j;
            cell.addEventListener('click', isAlive);
            row.append(cell);
        }
        table.append(row);
    }
}

function isAlive() {
    var id = this.id;
    let cell = document.getElementById(id);
    cell.className = "alive";
}