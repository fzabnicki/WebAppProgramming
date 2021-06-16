import { IFactory } from "./IFactory";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";
import { Game } from "./game.model";
import { Games } from "./games.enum";

export class Factory implements IFactory{
    getGame(game: Games): Game {
        switch(game){
            case Games.BattleShips:
                return new BattleShips();
            case Games.TicTacToe:
                return new TicTacToe();
            default:
            throw new Error("Game not Found");
        }
    }
}