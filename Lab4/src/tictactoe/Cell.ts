export class Cell{
    cellValue: number;
    htmlElement: HTMLElement;
    constructor(cell: HTMLElement) {
        this.htmlElement = cell;
        this.cellValue = 0;
    }
    setCellValue(value: number) {
        if(this.cellValue == 0 && value == 1){
            this.cellValue = 1;
            this.htmlElement.innerText = "X"
        }else if (this.cellValue == 0 && value == -1){
            this.cellValue= -1;
            this.htmlElement.innerText = "O"
        }
    }
}