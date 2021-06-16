import { Games } from "./games.enum";
import { Factory } from "./Factory";
import './styles/styles.scss';

class App {
    factory : Factory;
    constructor(factory : Factory) {
        this.init();
        this.factory = factory;
    }

    init(): void {
        const mainDiv = <HTMLDivElement>(document.createElement('div'));
        mainDiv.classList.add('main');
        const menuContainer = <HTMLDivElement>(document.createElement('div'));   // kontener menu dostępnych gier
        menuContainer.classList.add('games');
        const gameContainer = <HTMLDivElement>(document.createElement('div'));  // kontener główny ekranu z grą
        gameContainer.classList.add('singleGame');
        const list = document.createElement('ul');                              // lista pozycji w menu dostępnych gier

        for (const gameKind of Object.keys(Games)) {
            if(isNaN(Number(gameKind))){
                continue;
            }
            const game = factory.getGame(Number(gameKind));
            const item = document.createElement('li');
            item.classList.add('pick');
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener('click',()=>{
                gameContainer.innerHTML="";
                gameContainer.appendChild(game.getGameElement())
            })
            list.appendChild(item);
        }
        menuContainer.appendChild(list);
        mainDiv.appendChild(menuContainer);
        mainDiv.appendChild(gameContainer);
        document.body.appendChild(mainDiv);
    }
}

let factory = new Factory();
new App(factory);
