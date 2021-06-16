import { Game } from "./game.model";
import { Games } from "./games.enum";
export interface IFactory{
    getGame(game: Games) : Game;
}