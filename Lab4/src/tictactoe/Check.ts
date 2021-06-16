import { Cell } from "./Cell";
import { Result } from "./Result";

export class Check{
    constructor(cells : Array<Cell>, currentvalue : number){
        if( cells[0].cellValue == cells[1].cellValue && cells[0].cellValue == cells[2].cellValue && cells[0].cellValue != 0 && cells[1].cellValue != 0 && cells[2].cellValue != 0 ||
            cells[3].cellValue == cells[4].cellValue && cells[3].cellValue == cells[5].cellValue && cells[3].cellValue != 0 && cells[4].cellValue != 0 && cells[5].cellValue != 0 ||
            cells[6].cellValue == cells[7].cellValue && cells[6].cellValue == cells[8].cellValue && cells[6].cellValue != 0 && cells[7].cellValue != 0 && cells[8].cellValue != 0 ||
            cells[0].cellValue == cells[3].cellValue && cells[0].cellValue == cells[6].cellValue && cells[0].cellValue != 0 && cells[3].cellValue != 0 && cells[6].cellValue != 0 ||
            cells[1].cellValue == cells[4].cellValue && cells[1].cellValue == cells[7].cellValue && cells[1].cellValue != 0 && cells[4].cellValue != 0 && cells[7].cellValue != 0 ||
            cells[2].cellValue == cells[5].cellValue && cells[2].cellValue == cells[8].cellValue && cells[2].cellValue != 0 && cells[5].cellValue != 0 && cells[8].cellValue != 0 ||
            cells[0].cellValue == cells[4].cellValue && cells[0].cellValue == cells[8].cellValue && cells[0].cellValue != 0 && cells[4].cellValue != 0 && cells[8].cellValue != 0 ||
            cells[2].cellValue == cells[4].cellValue && cells[2].cellValue == cells[6].cellValue && cells[2].cellValue != 0 && cells[4].cellValue != 0 && cells[6].cellValue != 0){
            new Result(currentvalue);
            //MAKE result for larger than 3x3 
        }
    }
}