class Board{
    cells: Cell[];

    constructor(size: number) {
        this.cells = new Array(size);
        let table =
       <HTMLTableElement>document.getElementById("tictactoe");
        let i = 0;
        for (let r = 0; r < size; r++) {
        let row = table.insertRow(r);
        for (let c = 0; c < size; c++) {
        let cell = <HTMLTableDataCellElement>row.insertCell(c);
        cell.className = 'cell';
        const newCell = new Cell(cell);
        this.cells[i] = newCell;

        makeMove(cell: Cell): void {
            cell.setCellValue(this.currentSymbol);
            };
           
        cell.addEventListener("click", () =>
        this.makeMove(newCell), false);
        i++;
        }
        }
}