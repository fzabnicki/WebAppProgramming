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
        const toogleDiv = <HTMLDivElement>(document.createElement('div'));
        toogleDiv.classList.add('toogle-container');
        const toogleInput = <HTMLInputElement>(document.createElement('input'));
        toogleInput.id = "checkbox";
        toogleInput.name = "theme";
        toogleInput.type = "checkbox";

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
        mainDiv.appendChild(toogleDiv);
        mainDiv.appendChild(toogleInput);
        mainDiv.appendChild(menuContainer);
        mainDiv.appendChild(gameContainer);
        document.body.appendChild(mainDiv);
        
        if(toogleInput.checked){
            if(document.body.hasAttribute('data-theme'))
                document.body.removeAttribute('data-theme');
            else
                document.body.setAttribute('data-theme', 'light')
        }
        toogleInput.addEventListener('click', () =>{
            if(document.body.hasAttribute('data-theme'))
                document.body.removeAttribute('data-theme');
            else
                document.body.setAttribute('data-theme', 'light')
        })
    }
}


let factory = new Factory();
new App(factory);
