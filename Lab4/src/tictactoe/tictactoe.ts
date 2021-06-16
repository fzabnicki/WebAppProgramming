import { Game } from "../game.model";
import { Board } from "./Board";

export class TicTacToe implements Game {
    name: string;
    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        const table = <HTMLTableElement>document.createElement('table');
        table.id = 'tictactoe';
        const start = <HTMLButtonElement>document.createElement('button');
        start.innerHTML = 'Graj';
        let playground;
        start?.addEventListener('click', ()=>{
            table.innerHTML = '';
            playground = new Board(3);
        })
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        div.appendChild(start);
        div.appendChild(table);
        
        return div;
    }
}