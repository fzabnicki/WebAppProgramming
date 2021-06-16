import {Board} from './Board'

let size = <HTMLInputElement>document.getElementById('size');
let tab = <HTMLTableElement>document.getElementById('tictactoe');
const start = document.getElementById('start');
let playground;


start?.addEventListener('click', ()=>{
    tab.innerHTML = '';
    playground = new Board(parseInt(size.value));
})